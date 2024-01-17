---
layout: homepage.liquid
options: highlight ext-links
title: Automation Server
description: ...
keywords:
- homegenie
---

<!-- SPACER -->
<div style="margin-top: 48px">&nbsp;</div>


**HomeGenie Server**
is an open source and general-purpose automation server featuring powerful scheduler and automation engine, data processing
and analysis, package system, widgets editor and an integrated development environment with API that includes GPIO / SPI / I2C
programming.

With examples and widgets for a quick *Smart Home* setup, and built-in drivers for **X10**, **ZigBee**, **Z-Wave**,
*HomeGenie Server* is available for **Windows**, **Mac**, **Linux** and ARM-based computers.




<div class="media-container" style="height: auto; aspect-ratio: 16/13">
{% zx 'media-browser' %}

media:

- type: image
  preview: ../images/home/homegenie_dashboard_01.jpg
  url: ../images/home/homegenie_dashboard_01.jpg

options:
- name: slide
  value: 5000
- name: inline
  value: true

{% endzx %}
</div>




## Portable, customizable and embeddable

- Runs on **Windows**, **Mac**, **Linux** and ARM-based computers
  *(such as **Raspberry Pi**)*
- Self-contained application with libraries optimized for each architecture
- Deploy easily with a single (zipped) folder - ready to run anywhere
- Setup Wizard
- Configuration Backup/Restore
- Customizable client UI presets
- Package system to quickly add/remove extra features
- Integrated **smart home** drivers:
  *KNX*, *X10*, *ZigBee*, *Z-Wave*


## Powerful Automation Engine

- Supports *C#*, *JavaScript*, *Python* and visual programming
- Direct access to *GPIO*, *I2C*, *SPI* and serial ports
- Includes [.NET IoT Libraries](https://learn.microsoft.com/en-us/dotnet/iot/) with bindings
  for [thousands of components](https://github.com/dotnet/iot/blob/main/src/devices/README.md)
- Fluent [API](../api/1.4/ape/annotated.html) for handling devices, events and data
- Realtime data processing and analysis
- Custom widgets using [zuix.js](https://zuixjs.org/) web components
- Scheduler with extended crontab expressions and scripting






<div layout="column center-center" style="margin-top: 64px">

<a href="../1.4/getting-started" class="button-85">Get Started</a>

</div>




## Documentation

- [HomeGenie Server 1.4](../1.4/getting-started) **(latest)**
- [HomeGenie Server 1.3](../content/intro/)