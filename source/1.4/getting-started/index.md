---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 10
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Getting started
description: Downloading and installing HomeGenie
icon: build
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
- 1.4
release_name: 1.4
release_tag: 1.4.0-beta.52
download_link: "https://github.com/genielabs/HomeGenie/releases/download/v{{release_tag}}/homegenie_{{release_tag}}"
architectures:
  - win-x64
  - osx-x64
  - linux-x64
  - linux-arm
  - linux-arm64
---

## Installing HomeGenie {{ release_name }}

{% unpre %}
```html
<div style="padding-top: 24px; padding-bottom: 48px">
   <strong>Select target architecture:</strong><br>
   <select class="button" onchange="setTargetArchitecture(this.value)">
      <option value="win-x64">
         Windows 64-bit
      </option>
      <option value="osx-x64">
         Mac OSX 64-bit
      </option>
      <option value="linux-x64">
         Linux 64-bit
      </option>
      <option value="linux-arm">
         Linux ARM 32-bit
      </option>
      <option value="linux-arm64" selected>
         Linux ARM 64-bit
      </option>
   </select>
</div>
<style>
.button {
    width: 280px;
    font-size: 150%;
    font-weight: bold;
    color: var(--accent-color);        
}
</style>
<script>
  function setTargetArchitecture(arch) {
    document.querySelectorAll('.setup-code pre').forEach((c) => {
      c.style.display = 'none';
    });
    document.querySelector('#' + arch).style.display='';
  }
</script>


<div class="setup-code">
    <p>Enter the following commands in a terminal:</p>

<pre id="win-x64" style="display: none"><code class="language-bash">curl https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_win-x64.zip
tar -xf homegenie_{{ release_tag }}_win-x64.zip
</code></pre>

<pre id="osx-x64" style="display: none"><code class="language-bash">curl https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_osx-x64.zip
unzip homegenie_{{ release_tag }}_osx-x64.zip
</code></pre>

<pre id="linux-x64" style="display: none"><code class="language-bash">wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_linux-x64.zip
unzip homegenie_{{ release_tag }}_linux-x64.zip
</code></pre>

<pre id="linux-arm" style="display: none"><code class="language-bash">wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_linux-arm.zip
unzip homegenie_{{ release_tag }}_linux-arm.zip
</code></pre>

<pre id="linux-arm64"><code class="language-bash">wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_linux-arm64.zip
unzip homegenie_{{ release_tag }}_linux-arm64.zip
</code></pre>

</div>
```
{% endunpre %}


### Running in a terminal

Set the current directory to `homegenie` and run the `./HomeGenie` command:

```shell
cd homegenie
./HomeGenie
```

To stop the application press `CTRL + C`





The video below shows the installation procedure of HomeGenie on a
*Raspberry Pi Zero 2 W* with SD card prepared using official
[Raspberry Pi Imager](https://www.raspberrypi.com/software/)
application and configured with *Raspberry Pi OS Lite (32 bit)*, WI-FI connectivity,
and SSH enabled.


<div class="media-container">

   <video id="video1" src="images/homegenie_install.m4v"
      controls muted
      poster="images/homegenie_install.png"
      style="max-width:100%;"></video>

</div>
<script type="text/javascript">
const video= document.getElementById('video1');       
video.addEventListener('ended',function(){
    video.load();     
},false);
</script>






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


### Optional post-installation steps

Depending on the hosting operating system, it might be required to run additional steps
in order to allow the service to access the **Serial port**, **USB** devices and **GPIO** hardware.

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
save the file and unplug and plug the device again.


## Accessing the UI

HomeGenie user interface can be accessed from any web browser entering the url

&nbsp;&nbsp;&nbsp;&nbsp; `http://<server_ip>:<port>/`

Where `server_ip` is the IP address of the machine where HomeGenie is running and `port` can be *80*
or the first available port starting from *8080*.
<small>(ex. *http://192.168.1.150:8080/*)</small>

To find out which port number the service is running on, enter the following command from the `homegenie` folder:

```shell
cat serviceaddress.txt
```

The `port` settings can be changed either from the maintenance page
or editing the `systemconfig.xml` file located in the application folder.
The service must be stopped when editing the configuration file manually.




