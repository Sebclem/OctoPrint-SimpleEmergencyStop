/*
 * View model for OctoPrint-Simpleemergencystop
 *
 * Author: Sebastien Clement
 * License: AGPLv3
 */
$(function() {
    function SimpleemergencystopViewModel(parameters) {
        var self = this;
        self.loginState = parameters[1];
        self.printerState = parameters[2];
        console.log(parameters);
        self.click = function () {
             $.ajax({
                 url: API_BASEURL+"plugin/simpleemergencystop",
                 type: "POST",
                 dataType: "json",
                 data: JSON.stringify({
                     command: "emergencyStop"
                 }),
                 contentType: "application/json; charset=UTF-8",
                 success: function (data,status) {
                     console.log(data);
                 }
            })
        }

    }

    // view model class, parameters for constructor, container to bind to
    OCTOPRINT_VIEWMODELS.push([
        SimpleemergencystopViewModel,

        ["settingsViewModel","loginStateViewModel","printerStateViewModel"],

        ["#navbar_plugin_simpleemergencystop"]
    ]);
});
