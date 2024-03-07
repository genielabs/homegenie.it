---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: getting_started
group: getting_started
order: 10
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Getting started - Optional steps
description: Optional installation steps
icon: build
keywords:
- getting started
- optional steps
- how to
- troubleshooting
---

## Optional post-installation steps


### Running as a system service

HomeGenie can be installed as a service. The procedure is different depending on the
hosting operating system.

#### Recommended procedure for Linux

1) Add a specific user for the service and copy the content of `homegenie` folder
   to the new user home directory:

```shell
sudo useradd homegenie
sudo cp -ar ./path-to-extracted-folder/homegenie /home/homegenie
sudo chown -R homegenie:homegenie /home/homegenie
```

2) Create the file `/etc/systemd/system/homegenie.service` with the following content:
```shell
[Unit]
Description=HomeGenie

[Service]
Type=notify
User=homegenie
WorkingDirectory=/home/homegenie/
ExecStart=/home/homegenie/HomeGenie
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

3) Refresh `SystemD` configuration
```shell
sudo systemctl daemon-reload
```

4) Start the service and enable <em>HomeGenie</em> to auto-start on next system boot:
```shell
sudo systemctl start homegenie.service
sudo systemctl enable homegenie.service
```

Other possible commands are `status`, `stop` and `disable`.


See also:
- [Create Linux Service](https://devblogs.microsoft.com/dotnet/net-core-and-systemd/#create-unit-files) (SystemD)
- [Create Windows Service](https://learn.microsoft.com/en-us/dotnet/core/extensions/windows-service#create-the-windows-service)


Depending on the hosting operating system, it might be required to run additional steps
in order to allow the service to access the **Serial port**, **USB** devices and **GPIO** hardware.


### Additional packages and settings

#### Enabling **audio playback** and **voice synthesis**:
```shell
# Audio playback utilities
sudo apt-get install alsa-utils lame
# Embedded speech synthesis engine
sudo apt-get install libttspico-utils
```

#### Granting access to the **Serial port** and/or **GPIO** to the *homegenie* user:
```shell
sudo gpasswd -a homegenie dialout
sudo gpasswd -a homegenie gpio
```

#### Enabling CM15/CM19 USB controller for X10 home automation:
```shell
sudo apt-get install libusb-1.0-0 libusb-1.0-0-dev
```
then, to grant access to **CM15/CM19** USB devices to the *homegenie* user, create a new text file
with the name `/etc/udev/rules.d/98-cm15_cm19.rules` and add the following lines to it:
```shell
# CM15 AND CM19 X10 controllers
ATTRS{idVendor}=="0bc7", ATTRS{idProduct}=="0001", MODE="0660", GROUP="homegenie"
ATTRS{idVendor}=="0bc7", ATTRS{idProduct}=="0002", MODE="0660", GROUP="homegenie"
```
save the file and unplug and replug the device again.

---

#### Back to [Getting started](../) or continue to [Setup](../../setup) page.
