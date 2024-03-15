---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: examples
group: examples
order: 30
title: IR / RF gateway
description: How to implement a smart IR/RF gateway
icon: settings_remote
keywords:
- firefly
- ir
- rf
- gateway
- infrared
- 433
- 315
- radio-frequency
- remote control
- tv remote
- ac remote
- transceiver
wip: false
---

## Meet Firefly

Firefly (f-IRF-ly) is a small device that can control HVAC systems, TVs, music and video players,
lights and other things that can be controlled using an IR or RF remote.  
Firefly captures commands directly from the original remote control so you can
save, playback or schedule captured commands using [HomeGenie Panel](../../../../panel)
and/or [HomeGenie Server](../../../../server).


<div layout="row center-center">
<div style="min-width: 360px;max-width: 420px;width: 100%;"><div class="media-container" style="height: auto; aspect-ratio: 15/12">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hg_mini_firefly_kit_05.jpg
  url: images/hg_mini_firefly_kit_05.jpg

- type: image
  preview: images/hg_mini_firefly_kit_01.jpg
  url: images/hg_mini_firefly_kit_01.jpg

- type: image
  preview: images/hg_mini_firefly_blender_3d_01.jpg
  url: images/hg_mini_firefly_blender_3d_01.jpg

- type: image
  preview: images/hg_mini_firefly_kit_02.jpg
  url: images/hg_mini_firefly_kit_02.jpg

- type: image
  preview: images/hg_mini_firefly_kit_03.jpg
  url: images/hg_mini_firefly_kit_03.jpg

- type: image
  preview: images/hg_mini_firefly_kit_04.jpg
  url: images/hg_mini_firefly_kit_04.jpg

options:
- name: slide
  value: 10000
- name: inline
  value: true

{% endzx %}
</div></div></div>


In addition to commands learning and playback, *FireFly* can also be used to control
other devices or to trigger a script when a specific IR/RF signal is detected.

Firefly employs the same *ESP32-C3* board used for the [Smart color light](../smart-led) and
implements the same functionality with the addition of IR/RF transceiver capabilities.



### Ingredients

- [Waveshare ESP32-C3-Zero](https://www.waveshare.com/wiki/ESP32-C3-Zero)
- IR<small>(940nm)</small> / RF<small>(433/315MHz)</small> receiver module (**GPIO5**, **3V3**)
- IR<small>(940nm)</small> / RF<small>(433/315MHz)</small> transmitter module (**GPIO7**, **5V**)
- `xx-transceiver-c3` firmware
- 3d printed shell (original design by G-Labs)



### Firmware install command

IR version

```bash
pio run -e ir-transceiver-c3 -t upload
```

RF version

```bash
pio run -e rf-transceiver-c3 -t upload
```

See the [Getting started](../../getting-started) and the [Device setup](../../device-setup) pages
for further information about installing firmware and configuring a *HomeGenie Mini* device.



## Usage examples

### Recording and playing back IR/RF commands

Using [HomeGenie Panel](../../../../panel) app you can record and play back remote
controls commands. 


<div layout="row center-center">
<div style="min-width: 360px;max-width: 640px;width: 100%;"><div class="media-container" style="height: auto; aspect-ratio: 15/20">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hg_mini_firefly_record_playback_01.jpg
  url: images/hg_mini_firefly_record_playback_01.jpg
  title: 1. Start script recording
  description: by clicking the record button on the toolbar

- type: image
  preview: images/hg_mini_firefly_record_playback_02.jpg
  url: images/hg_mini_firefly_record_playback_02.jpg
  title: 2. Capture commands
  description: issuing commands on the remote control(s) and then click
               the stop button when done.

- type: video
  preview: images/hg_mini_firefly_record_playback_02.jpg
  url: images/hg_mini_firefly_record_playback_01.mp4

options:
#- name: slide
#  value: 10000
- name: inline
  value: true

{% endzx %}
</div></div></div>


<!--


### Controlling other devices

...using HG Server

...


### Using API to receive and send IR/RF commands 

...

-->


<a name="api"></a>
## Modules and API

In addition to the common [Device API](../../programming/api) and [Color Light](../smart-led#api) API,
the following modules and API are implemented by this device.


### `IR` module

IR module is associated to IR transceiver hardware.

#### Domain / Address

`HomeAutomation.HomeGenie/IR`

#### Properties

- `Receiver.RawData`  
  Captured signal data as hexadecimal bytes string. 

#### Commands

- `Control.SendRaw/<raw_hex_string>/<repeat_count>/<repeat_delay_ms>`



### `RF` module

RF module is associated to RF transceiver hardware.

#### Domain / Address

`HomeAutomation.HomeGenie/RF`

#### Properties

- `Receiver.RawData`  
  Captured signal data as hexadecimal bytes string.

#### Commands

- `Control.SendRaw/<raw_hex_string>/<repeat_count>/<repeat_delay_ms>`
