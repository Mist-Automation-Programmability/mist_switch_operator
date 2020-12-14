# Mist Installer Web UI
 
This application provides a single page app for installers to claim new devices, assign them to a site/floorplan and set the first settings.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

<img src="https://github.com/tmunzer/mist_claim_web_ui/blob/main/._readme/claim.png"  width="75%"  />

## Features
- Retrieve and display Org and Site newly claimed devices 
- Claim new devices
- Edit newly claimed devices settings
- Assign newly claimed devices to Site/Floorplan

<img src="https://github.com/tmunzer/mist_claim_web_ui/blob/main/._readme/login.png"  width="45%"  />
<img src="https://github.com/tmunzer/mist_claim_web_ui/blob/main/._readme/edit.png" width="45%"  />


## Installation

This is a demo application using the Mist APIs.

You can run it as a strandalone Python application, or deploy it as a Docker container.

**Note**: The application is not providing secured HTTPS connections. It is highly recommended to deploy it behind a reverse proxy providing HTTPS encryption.


## Configuration
You can configure the settings through a configuration file or through Environment Variables.

### Configuration File
A configuration example with explanation is avaiable in the `django/backend/config_example.py`. This file must be edited and renamed `config.py`.

### Environment Variables
| Variable Name | Type | Default Value | Comment |
| ------------- | ---- | ------------- | ------- |
DJANGO_DEBUG | Number | 0 | Whether or not Django starts in Debug Mode (0=Production, 1=Debug) |
DJANGO_ALLOWED_HOSTS | String |  | FQDN on which Django is listening. Only used in Production Mode |
GOOGLE_API_KEY | String | | Google API Key to use [Google Map Javascript API](https://developers.google.com/maps/gmp-get-started) |
