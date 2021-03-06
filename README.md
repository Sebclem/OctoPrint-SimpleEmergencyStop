# Simple Emergency Stop
[![GitHub Release][releases-shield]][releases]
![Project Stage][project-stage-shield]
[![License][license-shield]](LICENSE.md)
![Project Maintenance][maintenance-shield]

A simple plugin that add an Emergency stop button on the Octoprint NavBar.
You can chose between 2 type of button, the [little one](/images/small.jpeg), or [big one](/images/big.jpeg)


![Small Button](images/small.jpeg)


![Big Button](images/big.jpeg)

[![Buy me a coffee][buymeacoffee-shield]][buymeacoffee]

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

[buymeacoffee-shield]: https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-2.svg
[buymeacoffee]: https://www.buymeacoffee.com/seb6596
[license-shield]: https://img.shields.io/github/license/Sebclem/OctoPrint-SimpleEmergencyStop.svg
[maintenance-shield]: https://img.shields.io/maintenance/yes/2020.svg
[project-stage-shield]: https://img.shields.io/badge/project%20stage-Production-green.svg
[releases-shield]: https://img.shields.io/github/release/Sebclem/OctoPrint-SimpleEmergencyStop.svg
[releases]: https://github.com/Sebclem/OctoPrint-SimpleEmergencyStop/releases
