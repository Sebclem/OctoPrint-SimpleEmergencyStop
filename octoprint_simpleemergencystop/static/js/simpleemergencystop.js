/*
 * View model for OctoPrint-Simpleemergencystop
 *
 * Author: Sebastien Clement
 * License: AGPLv3
 */
$(function () {
    function SimpleemergencystopViewModel(parameters) {
        this.settings = undefined;
        this.allSettings = parameters[0];
        this.loginState = parameters[1];
        this.printerState = parameters[2];
        this.confirmation = undefined;

        this.onAfterBinding = function () {};
        this.onBeforeBinding = function () {
            this.confirmation = $("#confirmation");
            this.settings = this.allSettings.settings.plugins.simpleemergencystop;
        };

        this.click = function () {
            if (!this.can_send_command())
                return;
            if (this.settings.confirmationDialog())
                this.confirmation.modal("show");
            else
                this.sendCommand();

        };

        this.sendCommand = function () {
            $.ajax({
                url: API_BASEURL + "plugin/simpleemergencystop",
                type: "POST",
                dataType: "json",
                data: JSON.stringify({
                    command: "emergencyStop"
                }),
                contentType: "application/json; charset=UTF-8",
                success: function (data, status) {}
            });
            this.confirmation.modal("hide");

        };

        this.hasControlPermition = function () {
            let user = this.loginState.currentUser();
            if(user.permissions !== undefined){
                return user.permissions.includes("control") || user.needs.role.includes("control");
            }
            else return true;
            
        }

        this.big_button_visible = function () {
            return this.loginState.isUser() && this.settings.big_button() && this.hasControlPermition();
        };

        this.little_button_visible = function () {
            return this.loginState.isUser() && !this.settings.big_button() && this.hasControlPermition();
        };

        this.can_send_command = function () {
            return this.loginState.isUser() && this.hasControlPermition() && this.printerState.isOperational() ;
        };

        this.little_button_css = function () {
            return (this.printerState.isOperational() ? "ses_small" : "ses_small_disabled");
        };
        this.big_button_css = function () {
            return (this.printerState.isOperational() ? "ses_big" : "ses_big ses_big_disabled");
        };

        this.get_title = function () {
            return (this.printerState.isOperational() ? gettext('!!! Emergency Stop !!! ') : gettext('Printer disconnected'));
        };


    };

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        SimpleemergencystopViewModel,

        ["settingsViewModel", "loginStateViewModel", "printerStateViewModel"],

        ["#navbar_plugin_simpleemergencystop"]
    ]);
});
