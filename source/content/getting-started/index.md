---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 20
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Get started
description: About downloading and installing HomeGenie
icon: build
pubDate: 2015-10-24 00:00:00
keywords:
- homegenie
- download
- install
- server
- smart home
- home automation
- automation
- gpio
- spi
- i2c
- zwave
- x10
- raspberry pi
- rpi
release:
  version: 1.3-stable.19
  date: Sept 10, 2020
---

<div style="border-radius: 12px; border: dotted 2px var(--accent-color); padding: 12px; padding-top: 48px; margin-top: 24px; text-align: center">

You reached the download page of an older version of HomeGenie.
A new exciting release is now available!

<div style="font-size: 150%; color: var(--accent-color); font-weight: bold;">

🧞 <a href="../../">HomeGenie 1.4</a> 💡

</div>

</div>


## Download HomeGenie 1.3

<div align="center" class="content-margin"><strong>v{{ release.version }}</strong> <em>({{ release.date }})</em></div>

<div self="size-small center" layout="rows top-spread">

<a layout="row center-left" href="https://github.com/genielabs/HomeGenie/releases/download/v{{ release.version }}/homegenie_{{ release.version }}_all.deb" title="Download HomeGenie v{{ release.version }} for Debian Linux" class="download-button mdl-shadow--8dp">
    <img src="images/luxicon.png" alt="" style="margin-right:10px" align="left" width="82" align="left">
    <div layout="column center-spread">
    <h3>Linux .deb</h3>
    <span>Ubuntu / Debian derivatives</span>
    </div>
</a>

<a layout="row center-left" href="https://github.com/genielabs/HomeGenie/releases/download/v{{ release.version }}/HomeGenie_v{{ release.version }}.exe" title="Download HomeGenie v{{ release.version }} for Windows" class="download-button mdl-shadow--8dp">
    <img src="images/winicon.png" alt="" style="margin-right:10px" width="82" align="left">
    <div layout="column center-spread">
    <h3>Windows Installer</h3>
    <span>Win7 / Win8 / Win10</span>
    </div>
</a>

<a layout="row center-left" href="https://github.com/genielabs/HomeGenie/releases/download/v{{ release.version }}/homegenie_{{ release.version }}.tgz" title="Download HomeGenie v{{ release.version }} platform agnostic archive" class="download-button mdl-shadow--8dp">
    <img src="images/macicon.png" alt="" style="margin-right:10px" align="left" width="82" align="left">
    <div layout="column center-spread">
    <h3>Platform agnostic .tgz</h3>
    <span>macOS / Others</span>
    </div>
</a>

</div>

<br clear="all"/>

## Install instructions


### Windows

Download *HomeGenie Windows Installer* and run it. Once installation process is completed, *HomeGenie* UI will be opened.
The UI can be also opened by right clicking on the tray icon.


### Ubuntu, Raspbian and others Debian derivatives

Follow the instruction to add the [Mono repository](https://www.mono-project.com/download/stable/#download-lin) to your system (only add the repository, do not install *mono*).
If you already have a previous version of mono installed, upgrade it by running `sudo apt-get upgrade`.

Install *HomeGenie Server* by entering the following commands:

```bash
wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release.version }}/homegenie_{{ release.version }}_all.deb
sudo apt-get update
sudo apt-get install gdebi-core
sudo gdebi homegenie_{{ release.version }}_all.deb
```

HomeGenie will be installed in the _/home/homegenie_ foder.
Once installed, *HomeGenie UI* can be opened by entering the following URL in your web browser:
`http://<linux_box_address>:<port>/`
(where `<linux_box_address>` is the name or ip of the host where *HomeGenie* is installed and `<port>` is the port where the service is listening on).

The default http port is **8080**, but if it's already taken, *HomeGenie* will try to bind the next available address.
The actual bound port is written to a file named `serviceaddress.txt` in the *HomeGenie* home folder.


#### Optional packages

```bash
# SSL client support
sudo apt-get install ca-certificates-mono
# Embedded speech synthesys engine
sudo apt-get install libttspico-utils
# Arduino™ programming from *HG* program editor
sudo apt-get install arduino-mk empty-expect
```

**Note** *HomeGenie requires mono runtime version 4.6.2 or later.*


#### Enabling access to serial port and other devices

The user account from which *HomeGenie* will be run (which is `homegenie` in the default installation) must be granted
of the required permissions in order to access devices such as the serial port, GPIOs, USB controllers.

For example, on most debian systems the user must belongs to the `dialout` system group
in order to have access to the serial port device.

Consult the operating system documentation about user privileges required to access installed devices.


### macOS and other UNIX systems

HomeGenie can also be installed on other systems (eg. macOS and other UNIX based systems)
by following the procedure described below. See
<a href="https://www.mono-project.com/docs/about-mono/supported-platforms/">Mono supported platforms</a>
for a complete list of compatible systems.

#### Installing prerequisites

Download and install [mono runtime](https://www.mono-project.com/download/stable/).

Enter the following command from terminal (`apt-get` is shown here, eventually replace it with the package manager
used in your system):

```bash
sudo apt-get install mono-runtime libmono-corlib4.5-cil libmono-system-web4.0-cil \
     libmono-system-numerics4.0-cil libmono-system-serviceprocess4.0-cil \
     libmono-system-data4.0-cil libmono-system-core4.0-cil libmono-system-servicemodel4.0a-cil \
     libmono-windowsbase4.0-cil libmono-system-runtime-serialization-formatters-soap4.0-cil \
     libmono-system-runtime-serialization4.0-cil libmono-system-xml-linq4.0-cil mono-mcs \
     libusb-1.0-0 libusb-1.0-0-dev alsa-utils lame libv4l-0
```

#### Optional dependencies

In order to activate some features, optional dependencies may be required to install.

```bash
# Audio playback utilities
sudo apt-get install alsa-utils lame
# Embedded speech syntesys engine
sudo apt-get install libttspico-utils
# SSL client support
sudo apt-get install ca-certificates-mono
# LIRC Infrared inteface
sudo apt-get install lirc liblircclient-dev
# Video4Linux camera
sudo apt-get install libv4l-0
# X10 CM15 Home Automation interface
sudo apt-get install libusb-1.0-0 libusb-1.0-0-dev
# Arduino™ programming from *HG* program editor
sudo apt-get install arduino-mk empty-expect
```

#### Downloading and uncompressing tgz archive file

Enter the following command terminal

```bash
wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release.version }}/homegenie_{{ release.version }}.tgz
tar xzvf homegenie_{{ release.version }}.tgz
```

#### Running HomeGenie

After uncompressing, the *homegenie* folder will be created. Enter the following commands from terminal to start HomeGenie:

```bash
cd homegenie
mono HomeGenie.exe
```

You can now start using HomeGenie opening the following URL in your web browser:

`http://<server_address>:<port>/`

where `<server_address>` is the name or ip of the host where HomeGenie was installed and `<port>` is the port on which HomeGenie is listening for web requests (defaul port is `8080`).
