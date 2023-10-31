---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 40
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: System settings
description: HomeGenie system settings
icon: tune
keywords:
- homegenie
---

## Configuration

Through the system settings page you can configure the built-in interface
drivers and other options implemented by automation programs such as
*"Remote Control"* and *"Weather Forecast"*.

<div class="media-container">
    <img src="images/configure_system_02.jpg">
</div>

Depending on installed packages and custom programs, a different number of configuration
options will be available.

<a name="packages"></a>

## Packages

Packages are basically a collections of automation programs that implement and extend
the functionality of the system. A package usually contains programs that add a specific
set of features.

For instance, the `homegenie-home` package contains smart home features such as the
*Smart Device* program which adds to lights and switches the functionality of being
activated by a motion sensor and based on ambient light level and automatically turn
off after a certain period of inactivity (no motion detected), or like the
*Philips Hue Bridge (v1)* program which interfaces to the gateway to control
smart lights connected to it.


Selecting a package name from the list will display additional details: the list of
included programs and buttons to *Install*, *Uninstall*, *Repair*, or *Edit* the
selected package.


By editing a package you can update or add new programs and generate a new
version of the package bundle that can be downloaded as a zip archive.



<div class="media-container">
    <img src="images/package_manager_02.jpg">
</div>



Packages can be imported by clicking the {% zx 'icon' %}upload_file{% endzx %}
upload button, while clicking the {% zx 'icon' %}add_circle_outline{% endzx %} button
next to it allows you to create a new package to bundle any custom programs.


All packages must specify a repository name, which for user-created packages is by
default named "`user`", but can be any other name.

So, a repository is a collection of packages. All official HomeGenie packages are stored
in the **homegenie** repository.
It contains the base package (`homegenie-base`), which should always be installed,
and other optional packages such as:

- `homegenie-home`  
  Energy Monitor, Alarm System, Smart Thermostat and other base programs for smart home applications.
- `homegenie-home-demo`  
  Virtual devices and simulated sensors activity to try out and test the system.
- `homegenie-iot-*`  
  Examples using IoT libraries and interfacing to components via GPIO, SPI, I2C.



Since all programs come in the form of source code, they can be modified using the built-in
program editor, so it's even easier to learn advanced topics to customize and get the
best out of your HomeGenie system.


<div class="media-container">
    <img src="images/programs_editor_03.jpg">
</div>




## Control Groups
 
A control group is a set of programs, lights, switches, and other devices.
For example a group called "Living Room" would contain all smart devices available in the
living room, or a group called "External Lights" would contain all external lights, and so on.

Control groups can be referenced in automation programs to quickly perform actions on multiple
devices belonging to the same group (e.g. turning off everyday all *"External Lights" at a
given time). 

Groups can also be used to quickly create new dashboards with a predefined set of devices in it,
and are also used in the *[HomeGenie Panel](../panel)* app for the same purpose.


<div class="media-container">
    <img src="images/control_groups_02.jpg">
</div>


<a name="maintenance"></a>

## System Maintenance

From the system maintenance page you can configure core service options (such as HTTP port
and logging), create or restore backups, restore factory settings, update the software when
a new release is available.

<div class="media-container">
    <img src="images/system_maintenance_02.jpg">
</div>
