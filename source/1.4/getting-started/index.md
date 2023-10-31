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
release_tag: 1.4.0-beta.64
download_link: "https://github.com/genielabs/HomeGenie/releases/download/v{{release_tag}}/homegenie_{{release_tag}}"
architectures:
  - win-x64
  - osx-x64
  - linux-x64
  - linux-arm
  - linux-arm64
  - linux-all-mono
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
div[id] {
    display: none;
}
div[id].selected {
    display: block;
}
</style>
<script>
  function setTargetArchitecture(arch) {
    document.querySelectorAll('.setup-code div[id]').forEach((c) => {
      c.classList.remove('selected');
    });
    const selected = document.querySelector('#' + arch);
    selected.classList.add('selected');
  }
</script>


<div class="setup-code">
    <p>Enter the following commands in a terminal:</p>

    <div id="win-x64">
<pre><code class="language-bash">curl https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_win-x64.zip
tar -xf homegenie_{{ release_tag }}_win-x64.zip
</code></pre>
    </div>
    
    <div id="osx-x64">
<pre><code class="language-bash">curl https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_osx-x64.zip
unzip homegenie_{{ release_tag }}_osx-x64.zip
</code></pre>
    </div>

    <div id="linux-x64">
<pre><code class="language-bash">wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_linux-x64.zip
unzip homegenie_{{ release_tag }}_linux-x64.zip
</code></pre>
    </div>
    
    <div id="linux-arm">
<pre><code class="language-bash">wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_linux-arm.zip
unzip homegenie_{{ release_tag }}_linux-arm.zip
</code></pre>
    </div>

    <div id="linux-arm64" class="selected">
<pre><code class="language-bash">wget https://github.com/genielabs/HomeGenie/releases/download/v{{ release_tag }}/homegenie_{{ release_tag }}_linux-arm64.zip
unzip homegenie_{{ release_tag }}_linux-arm64.zip
</code></pre>
    </div>

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

The video above shows the installation procedure of HomeGenie on a
*Raspberry Pi Zero 2 W* with SD card prepared using official
[Raspberry Pi Imager](https://www.raspberrypi.com/software/)
application and configured with *Raspberry Pi OS Lite (32 bit)*, WI-FI connectivity,
and SSH enabled.


For instructions on how to install *HomeGenie* as a system service and other advanced
settings, also read the [optional post-installation steps](./optional-steps) note.


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

The `port` settings can be changed either from the [maintenance](../settings/#maintenance) page
or editing the `systemconfig.xml` file located in the application folder.
The service must be stopped when editing the configuration file manually.
