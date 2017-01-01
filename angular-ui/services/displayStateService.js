
angular.module("revashare").service("displayStateService", function ($cookies, $state, userDataService) {

    // sidebar is always visible at min-width: 992px
    var sidebar_query = window.matchMedia("(min-width: 992px)");
    
    sidebar_query.addListener(sidebar_locked_open_listener);
    
    this.sidebar_always_visible = sidebar_query.matches;
    this.sidebar_visible = sidebar_query.matches;
    this.logged_in = $cookies.getObject("logged_in") ? $cookies.getObject("logged_in") : false;
    this.username = $cookies.getObject("username") ? $cookies.getObject("username") : false;
    this.role = $cookies.getObject("role") ? $cookies.getObject("role") : "Guest";
    
    this.addLoginListener = addLoginListener;
    this.addSidebarVisibleListener = addSidebarVisibleListener;
    this.addSidebarAlwaysVisibleListener = addSidebarAlwaysVisibleListener;
    this.updateRole = updateRole;
    this.isInGroup = isInGroup;
    this.alert_logged_in = alert_logged_in;
    this.alert_logged_out = alert_logged_out;
    this.alert_sidebar_visible = alert_sidebar_visible;
    this.alert_sidebar_hidden = alert_sidebar_hidden;
    this.toggle_sidebar = toggle_sidebar;

    var loginListeners = [];
    var sidebarVisibleListeners = [];
    var sidebarAlwaysVisibleListeners = [];

    function addLoginListener(listener) {
        loginListeners.push(listener);
    }

    function addSidebarVisibleListener(listener) {
        sidebarVisibleListeners.push(listener);
    }

    function addSidebarAlwaysVisibleListener(listener) {
        sidebarAlwaysVisibleListeners.push(listener);
    }

    function alertListeners(listeners) {
        var removeListeners = [];

        angular.forEach(listeners, function(listener, i) {
            try {
                listener();
            }
            catch (err) {
                removeListeners.unshift(i);
            }
        });

        angular.forEach(removeListeners, function(i) {
            listeners.splice(i, 1);
        });
    }

    function isInGroup(role, groups) {
        var isIn = false;

        if (role == "RequestDriver") {
            role = "Rider";
        }

        angular.forEach(groups, function(group) {
            if (group === role) {
                isIn = true;
            }
        });

        return isIn;
    }

    var service = this;

    function updateRole(role) {
        service.role = role;
        $cookies.setObject("role", role);
    }

    function sidebar_locked_open_listener (width_query) {
        console.log(width_query);
        service.sidebar_visible = width_query.matches;
        service.sidebar_always_visible = width_query.matches;
        alertListeners(sidebarVisibleListeners);
        alertListeners(sidebarAlwaysVisibleListeners);
    }

    function alert_logged_in (username) {
        userDataService.getUser(username, function(user) {
            service.logged_in = true;
            service.username = username;
            service.role = user.Roles[0].Type;
            $cookies.putObject("username", username);
            $cookies.putObject("role", user.Roles[0].Type);
            alertListeners(loginListeners);

            $state.go("welcome");
        }, function() {
            window.toastr.error("Could not get your user information. Please try again.");
        });
    }

    function alert_logged_out () {
        service.logged_in = false; 
        service.username = false;
        service.role = "Guest";
        $cookies.putObject("username", false);
        $cookies.putObject("role", "Guest");
        alertListeners(loginListeners);

        $state.go("welcome");
    }

    function alert_sidebar_visible () {
        service.sidebar_visible = true;
        alertListeners(sidebarVisibleListeners);
    }

    function alert_sidebar_hidden () {
        service.sidebar_visible = false;
        alertListeners(sidebarVisibleListeners);
    }

    function toggle_sidebar () {
        service.sidebar_visible = ! service.sidebar_visible;
        alertListeners(sidebarVisibleListeners);
    }
});