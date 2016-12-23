
angular.module("revashare").service("displayStateService", function ($cookies, $state, userDataService) {

    // sidebar is always visible at min-width: 992px
    var sidebar_query = window.matchMedia("(min-width: 992px)");

    $cookies.putObject("username", "kimbob");
    
    sidebar_query.addListener(sidebar_locked_open_listener);
    
    this.sidebar_always_visible = sidebar_query.matches;
    this.sidebar_visible = sidebar_query.matches;
    this.logged_in = $cookies.getObject("logged_in") ? $cookies.getObject("logged_in").status : true;
    this.username = $cookies.getObject("username") ? $cookies.getObject("username") : false;
    this.role = $cookies.getObject("role") ? $cookies.getObject("role").role : "user";
    
    this.addLoginListener = addLoginListener;
    this.callIfIsInGroup = callIfIsInGroup;
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


    function callIfIsInGroup(groups, callback, redirectState, redirectParams) {
        if (redirectState === undefined) {
            redirectState = "welcome";
        }

        if (redirectParams === undefined) {
            redirectParams = {};
        }

        userDataService.isInGroup(this.username, groups, function(isIn) {
            if (isIn) {
                callback();
            }
            else {
                $state.go(redirectState, redirectParams);
            }
        });
    }

    function sidebar_locked_open_listener (width_query) {
        this.sidebar_visible = width_query.matches;
        this.sidebar_always_visible = width_query.matches;
    }

    function alert_logged_in (username) {
        this.logged_in = true; 
        this.username = username;
        $cookies.putObject("logged_in", {status: true});  
        $cookies.putObject("username", {username: username});  

        alertLoggedInUserChange();
    }

    function alert_logged_out () {
        this.logged_in = false; 
        this.username = false;
        $cookies.putObject("logged_in", {status: false});
        $cookies.putObject("username", {username: false});

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