# Simple Emergency Stop
[![GitHub Release][releases-shield]][releases]
![Project Stage][project-stage-shield]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]
![GitHub Release][active]

A simple plugin that add an Emergency stop button on the Octoprint NavBar.
You can chose between 2 type of button, the [little one](/images/small.jpeg), or [big one](/images/big.jpeg)


![Small Button](images/small.jpeg)


![Big Button](images/big.jpeg)

<a href="https://www.buymeacoffee.com/seb6596"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=seb6596&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" width='20%'></a>


## Permission
To use this plugin, the user need to be logged in and have `control` permission. 
If you don't meet the previous condition, the emergency stop button __will not show up__.

> ### __Octoprint < 1.4.0:__
>
> If you are running __Octoprint < 1.4.0__, there is no permission check, every user can access to the emergency stop button (as soon as they are logged in).
>
> __This is why I highly recommend to upgrade your octoprint to > 1.4.0__


## Setup

Install via the bundled [Plugin Manager](https://github.com/foosel/OctoPrint/wiki/Plugin:-Plugin-Manager)
or manually using this URL:

    https://github.com/Sebclem/OctoPrint-SimpleEmergencyStop/archive/master.zip


## Configuration

- **emergencyGcode**:
    - Define the GCODE to send when the button is pressed. (Default: `M112`)
- **confirmationDialog**:
    - Enable confirmation message (Default: `False`)
- **big_button**:
    - Enable the big Emergeny Stop Button (Default: `False`)

## API

Adding `plugin/simpleemergencystop` route, command is `emergencyStop`.

## License
MIT License

Copyright (c) 2020 Sébastien Clément

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


[license-shield]: https://img.shields.io/github/license/Sebclem/OctoPrint-SimpleEmergencyStop.svg?style=flat-square
[maintenance-shield]: https://img.shields.io/maintenance/yes/2024.svg?style=flat-square
[project-stage-shield]: https://img.shields.io/badge/project%20stage-Production-green.svg?style=flat-square
[releases-shield]: https://img.shields.io/github/release/Sebclem/OctoPrint-SimpleEmergencyStop.svg?style=flat-square
[releases]: https://github.com/Sebclem/OctoPrint-SimpleEmergencyStop/releases
[active]: https://img.shields.io/badge/dynamic/json?label=Active%20instances%20last%20month&query=%24.plugins.simpleemergencystop.instances&url=https%3A%2F%2Fdata.octoprint.org%2Fexport%2Fplugin_stats_30d.json&style=flat-square&color=green
