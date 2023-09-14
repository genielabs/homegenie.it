---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 50
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Example applications
description: Example HomeGenie applications
icon: tips_and_updates
keywords:
- homegenie
wip: true
---

## Raspberry Pi recipes 🍰


### Creating a Smart-Thermostat 🌡️

Ingredients:

- a Raspberry Pi with [HomeGenie installed](../getting-started) (a model [Zero 2 W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) is cheap and perfect for this)
- a DHT-xx humidity and temperature sensor (DHT-10, DHT-11, DHT-12, DHT-21, DHT-22)
- a Relay Switch

#### Step 1 - connecting components

Connect components as shown in the following schema:

<div class="media-container">
    <img src="images/smart_thermostat_03.png">
</div>

**DHT-xx** (1-wire)<sup>*</sup>

- Pin 1 (**VCC**)  -> to GPIO pin 1  (**3V3**)
- Pin 2 (**DATA**) -> to GPIO pin 11 (**GPIO17**) 
- Pin 4 (**GND**)  -> to GPIO pin 9  (**GND**)

<small>
    <strong><sup>*</sup></strong>
    DHT-10 and DHT-12 can also use <strong>I2C</strong> protocol, in
    which case a different wiring is required. See DHT-xx project
    <a href="https://github.com/dotnet/iot/tree/main/src/devices/Dhtxx#i2c-protocol-circuit">documentation</a>
    for further info.
</small><br><br>

**Relay Module**

- Pin 1 (**VCC**)  -> to GPIO pin 4  (**5V**)
- Pin 2 (**GND**)  -> to GPIO pin 34 (**GND**)
- Pin 3 (**IN**)   -> to GPIO pin 36 (**GPIO16**)


#### Step 2 - configuring DHT-xx and relay switch

...


#### Step 3 - configuring the Smart Thermostat automation program

(pictures UI)


#### What you will get

A smart thermostat that **works 100% offline** and where **your own your data**,
with logging, statistics, powerful scheduler, automation engine, smart-home ready
gateway with support for ZigBee, Z-Wave and X10, UPnP/DLNA control point...
**all for less than $25** !  😁



### GroveRGB rainbow



## Smart Home recipes 🏠


### Remote control ZigBee and Z-Wave using an X10 RF remote

### Env light/motion controlled lights - Smart Device features

### Thermostat with generic temperature sensor and a generic switch

### Lights synchronization with Linked Lights program &mdash; HomeGenie Panel

### Quick activation using Pinned Shortcuts &mdash; HomeGenie Panel
