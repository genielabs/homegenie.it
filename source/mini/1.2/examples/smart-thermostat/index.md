---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: examples
group: examples
order: 50
title: Smart thermostat
description: How to implement a smart thermostat with decentralized intelligence
icon: thermostat
keywords:
- thermostat
- relay switch
- homegenie server
- programmable intelligence
- scheduler
- economy
wip: true
---

## Meet Le'stat

DRAFT NOTES

A fully featured "Less" thermostat...

...

Running the thermostat intelligence somewhere else (decentralized intelligence on a HG server instance),
will make this device last forever as it will not require to be upgraded since the sensors functionality
will always be valid.  
This approach will also make the device more generic and able to be employed for just more
than one specific application.

Less waste, more functionality and applications, durable solutions (solutions that last).  
HomeGenie projects are smarter, green and eco-friendly by design :)  


...

Starting from the "Luna" example with the addition of a simple relay switch....



...


..



.

This example requires also an HomeGenie Server instance to implement the thermostat "intelligence". 



### Virtual thermostats

One of the included examples in HomeGenie Server is the **Smart Thermostat** program that
implements the operational modes and logic of a thermostat and that allows you to create
an arbitrary number of "virtual" thermostats out of any temperature sensor and smart switch.

So, the thermostat "intelligence" is implemented by a small automation program that is running
on HomeGenie Server, while the hardware for measuring the temperature and switching the
heater/AC is located elsewhere, in different rooms or buildings.

Each virtual thermostat instance works independently and can be associated to different
sensors and actuators and have its own schedule.

In the following pictures we just added a relay switch component to the "sensor with touch display"
example to implement a fully working smart thermostat.

