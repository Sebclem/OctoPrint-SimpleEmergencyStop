# coding=utf-8
from __future__ import absolute_import, division, print_function, unicode_literals

import octoprint.plugin


class SimpleemergencystopPlugin(octoprint.plugin.StartupPlugin,
								octoprint.plugin.TemplatePlugin,
								octoprint.plugin.SettingsPlugin,
								octoprint.plugin.AssetPlugin,
								octoprint.plugin.SimpleApiPlugin):
	def __init__(self):
		self.emergencyGCODE = ""

	def get_settings_defaults(self):
		return dict(
			emergencyGCODE="M112",
			confirmationDialog=False,
			big_button=False
		)

	def on_settings_save(self, data):
		octoprint.plugin.SettingsPlugin.on_settings_save(self, data)
		self.emergencyGCODE = self._settings.get(["emergencyGCODE"])

	def on_after_startup(self):
		self.emergencyGCODE = self._settings.get(["emergencyGCODE"])

	def get_template_configs(self):
		return [
			# dict(type="navbar", custom_bindings=False),
			dict(type="settings", custom_bindings=False)
		]

	def get_api_commands(self):
		return dict(
			emergencyStop=[]
		)

	def on_api_command(self, command, data):
		# check if there is a : in line
		find_this = ":"
		if find_this in str(self.emergencyGCODE):

			# if : found then, split, then for each:
			gcode_list = str(self.emergencyGCODE).split(':')
			for gcode in gcode_list:
				self._printer.commands(gcode)
		else:
			self._printer.commands(self.emergencyGCODE)

	def get_assets(self):

		return dict(
			js=["js/simpleemergencystop.js"],
			css=["css/simpleemergencystop.css", "css/fontawesome.all.min.css"]
		)

	# Softwareupdate hook

	def get_update_information(self):
		# Define the configuration for your plugin to use with the Software Update
		# Plugin here. See https://github.com/foosel/OctoPrint/wiki/Plugin:-Software-Update
		# for details.
		return dict(
			simpleemergencystop=dict(
				displayName="Simple Emergency Stop",
				displayVersion=self._plugin_version,

				# version check: github repository
				type="github_release",
				user="BrokenFire",
				repo="OctoPrint-SimpleEmergencyStop",
				current=self._plugin_version,

				# update method: pip
				pip="https://github.com/BrokenFire/OctoPrint-SimpleEmergencyStop/archive/{target_version}.zip"
			)
		)


# If you want your plugin to be registered within OctoPrint under a different name than what you defined in setup.py
# ("OctoPrint-PluginSkeleton"), you may define that here. Same goes for the other metadata derived from setup.py that
# can be overwritten via __plugin_xyz__ control properties. See the documentation for that.
__plugin_name__ = "Simple Emergency Stop"
__plugin_pythoncompat__ = ">=2.7,<4"


def __plugin_load__():
	global __plugin_implementation__
	__plugin_implementation__ = SimpleemergencystopPlugin()

	global __plugin_hooks__
	__plugin_hooks__ = {
		"octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information
	}
