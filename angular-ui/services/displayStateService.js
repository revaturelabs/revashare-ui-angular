
angular.module("revashare").service("displayStateService", function ($cookies) {

    // sidebar is always visible at min-width: 992px
    var sidebar_query = window.matchMedia("(min-width: 992px)");

    $cookies.putObject("username", "kimbob");
    
    sidebar_query.addListener(sidebar_locked_open_listener);
    
    this.sidebar_always_visible = sidebar_query.matches;
    this.sidebar_visible = sidebar_query.matches;
    this.logged_in = $cookies.getObject("logged_in") ? $cookies.getObject("logged_in").status : false;
    this.username = $cookies.getObject("username") ? $cookies.getObject("username").username : false;
    this.role = $cookies.getObject("role") ? $cookies.getObject("role").role : "user";
    
    this.alert_logged_in = alert_logged_in;
    this.alert_logged_out = alert_logged_out;
    this.alert_sidebar_visible = alert_sidebar_visible;
    this.alert_sidebar_hidden = alert_sidebar_hidden;
    this.toggle_sidebar = toggle_sidebar;


    function sidebar_locked_open_listener (width_query) {
        this.sidebar_visible = width_query.matches;
        this.sidebar_always_visible = width_query.matches;
    }

    function alert_logged_in (username) {
        this.logged_in = true; 
        this.username = username;
        $cookies.putObject("logged_in", {status: true});  
        $cookies.putObject("username", {username: username});  
    }

    function alert_logged_out () {
        this.logged_in = false; 
        this.username = false;
        $cookies.putObject("logged_in", {status: false});
        $cookies.putObject("username", {username: false});
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