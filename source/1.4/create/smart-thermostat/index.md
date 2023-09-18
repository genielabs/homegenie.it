---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: example
order: 10
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Creating a Smart Thermostat 🌡️
description: How to create a Smart Thermostat with Raspberry Pi and HomeGenie in three simple steps 
icon: tips_and_updates
keywords:
- homegenie
- smart-thermostat
- thermostat
- dht-xx
wip: false
---


## Ingredients

- a Raspberry Pi with [HomeGenie installed](../../getting-started) (a model [Zero 2 W](https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/) is cheap and perfect for this)
- a DHT-xx humidity and temperature sensor (DHT-11 or DHT-22)
- a Relay Switch

**What you will get**

A smart thermostat that **works 100% offline** and where **your own your data**,
with logging, statistics, powerful scheduler, automation engine, smart-home-ready
gateway with support for ZigBee, Z-Wave and X10, UPnP/DLNA control point,
and more... **all for less than $25**.




### Step 1 - connecting components


Connect components as shown in the following schema:

<div class="media-container">
    <img alt="Components connection schema" src="images/smart_thermostat_01.png">
    <figcaption><strong>1.1</strong> Components connection schema</figcaption>
</div>

**DHT-xx**

- Pin 1 (**VCC**)  -> to GPIO pin 1  (**3V3**)
- Pin 2 (**DATA**) -> to GPIO pin 11 (**GPIO17**)
- Pin 4 (**GND**)  -> to GPIO pin 9  (**GND**)

**Relay Module**

- Pin 1 (**VCC**)  -> to GPIO pin 4  (**5V**)
- Pin 2 (**GND**)  -> to GPIO pin 34 (**GND**)
- Pin 3 (**IN**)   -> to GPIO pin 36 (**GPIO16**)


### Step 2 - configuring DHT-xx and relay switch

Enable **DHT-XX** and **GPIO Pin** programs from the *Automation Programs* page,  
then you can configure both programs from the *System Settings* page as shown in
the pictures below.


<div class="media-container">
    <img alt="Configuring DHT-xx Sensor program to read data from DHT-11 sensor connected to GPIO17 (pin 11)" src="images/smart_thermostat_02a.png">
    <figcaption><strong>2.1</strong> Configuring DHT-xx Sensor program to read data from DHT-11 sensor connected to GPIO17 (pin 11)</figcaption>
</div>

<div class="media-container">
    <img alt="Configuring GPIO Pin program to control a switch connected to GPIO16 (pin 36)" src="images/smart_thermostat_02b.png">
    <figcaption><strong>2.2</strong> Configuring GPIO Pin program to control a switch connected to GPIO16 (pin 36)</figcaption>
</div>

### Step 3 - configuring the Smart Thermostat

Open the default dashboard and click the menu button {% zx 'icon' %}thermostat{% endzx %}
of the *Thermostat* widget and select *"Settings"* to set the device to read the temperature
from (DHTxx 17) and the switch to be used to activate the heating (GPIO 16).

<div class="media-container">
    <img alt="Configuring thermostat sensor and switch" src="images/smart_thermostat_03a.png">
    <figcaption><strong>3.1</strong> Configuring thermostat sensor and switch</figcaption>
</div>

The *Smart Thermostat* is now ready to be used. You can change the schedules or
show statistics and use all other features available in *HomeGenie*.

<div class="media-container">
    <img alt="Thermostat schedules" src="images/smart_thermostat_03b.png">
    <figcaption><strong>3.2</strong> Thermostat schedules</figcaption>
</div>


<div class="media-container">
    <img alt="Thermostat statistics" src="images/smart_thermostat_03c.png">
    <figcaption><strong>3.3</strong> Thermostat statistics</figcaption>
</div>

