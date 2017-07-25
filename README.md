# Simple Emergency Stop

A simple plugin that add an Emergency stop button on the Octoprint NavBar

## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/BrokenFire/OctoPrint-SimpleEmergencyStop/archive/master.zip


## Configuration

- **emergencyGcode**
    Diffine the GCODE to send when the button is pressed.
- **confirmationDialog** Show corfirmation dialog on click?

## API

Adding `plugin/simpleemergencystop` route, commande is `emergencyStop`.
