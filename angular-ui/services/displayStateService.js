
angular.module("revashare").service("displayStateService", function ($cookies, $state, userDataService) {

    // sidebar is always visible at min-width: 992px
    var sidebar_query = window.matchMedia("(min-width: 992px)");
    
    sidebar_query.addListener(sidebar_locked_open_listener);
    
    this.sidebar_always_visible = sidebar_query.matches;
    this.sidebar_visible = sidebar_query.matches;
    this.logged_in = $cookies.getObject("logged_in") ? $cookies.getObject("logged_in") : true;
    this.username = $cookies.getObject("username") ? $cookies.getObject("username") : false;
    this.role = $cookies.getObject("role") ? $cookies.getObject("role") : "Guest";
    
    this.addLoginListener = addLoginListener;
    this.isInGroup = isInGroup;
    this.alert_logged_in = alert_logged_in;
    this.alert_logged_out = alert_logged_out;
    this.alert_sidebar_visible = alert_sidebar_visible;
    this.alert_sidebar_hidden = alert_sidebar_hidden;
    this.toggle_sidebar = toggle_sidebar;

    var loginListeners = [];

    function addLoginListener(listener) {
        loginListeners.push(listener);
    }

    function alertLoggedInUserChange() {
        var removeListeners = [];

        angular.forEach(loginListeners, function(listener, i) {
            try {
                listener();
            }
            catch (err) {
                removeListeners.unshift(i);
            }
        });

        angular.forEach(removeListeners, function(i) {
            loginListeners.splice(i, 1);
        });
    }

    function isInGroup(role, groups) {
        var isIn = false;

        if (role == "DriverRequest") {
            role = "Rider";
        }

        angular.forEach(groups, function(group) {
            if (group === role) {
                isIn = true;
            }
        });

        return isIn;
    }

    function sidebar_locked_open_listener (width_query) {
        this.sidebar_visible = width_query.matches;
        this.sidebar_always_visible = width_query.matches;
    }

    function alert_logged_in (username) {
        userDataService.getUser(username, function(user) {
            this.logged_in = true; 
            this.username = username;
            this.role = user.Roles[0].Type;
            $cookies.putObject("logged_in", true);  
            $cookies.putObject("username", username);
            $cookies.putObject("role", user.Roles[0].Type);

            $state.go("welcome");
        }, function() {
            console.log("Could not get user.");
        });

        alertLoggedInUserChange();
    }

    function alert_logged_out () {
        this.logged_in = false; 
        this.username = false;
        this.role = "Guest";
        $cookies.putObject("logged_in", false);
        $cookies.putObject("username", false);
        $cookies.putObject("role", "Guest");

        alertLoggedInUserChange();
    }

    function alert_sidebar_visible () {
        this.sidebar_visible = true;
    }

    function alert_sidebar_hidden () {
        this.sidebar_visible = false;
    }

    function toggle_sidebar () {
        this.sidebar_visible = ! this.sidebar_visible;
    }

});