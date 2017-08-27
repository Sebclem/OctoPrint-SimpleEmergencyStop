/*
 * View model for OctoPrint-Simpleemergencystop
 *
 * Author: Sebastien Clement
 * License: AGPLv3
 */
$(function() {
    function SimpleemergencystopViewModel(parameters) {
        var self = this;
        self.settings = undefined;
        self.allSettings = parameters[0];
        self.loginState = parameters[1];
        self.printerState = parameters[2];
        self.confirmation = undefined;

        self.onAfterBinding = function() {
            self.confirmation = $("#confirmation");
            self.settings = self.allSettings.settings.plugins.simpleemergencystop;
        };

        self.click = function () {
            if(self.settings.confirmationDialog())
                self.confirmation.modal("show");
            else
                self.sendCommand()

        };

        self.sendCommand = function () {
            $.ajax({
                 url: API_BASEURL+"plugin/simpleemergencystop",
                 type: "POST",
                 dataType: "json",
                 data: JSON.stringify({
                     command: "emergencyStop"
                 }),
                 contentType: "application/json; charset=UTF-8",
                 success: function (data,status) {

                 }
            });
            self.confirmation.modal("hide");

        };

        self.visibleTest = function () {
            return  self.loginState.isUser() && self.printerState.isOperational()
        };


    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        SimpleemergencystopViewModel,

        ["settingsViewModel","loginStateViewModel","printerStateViewModel"],

        ["#navbar_plugin_simpleemergencystop"]
    ]);
});
