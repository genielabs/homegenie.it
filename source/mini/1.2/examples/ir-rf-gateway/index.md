---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: examples
group: examples
order: 30
title: IR and RF gateway
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

Firefly (f-IRF-ly) is a small device powered by *ESP32-C3* chip, IR/RF transceiver modules and
*HomeGenie Mini* firmware of course.
Firefly can control HVAC systems, TVs, music and video players, lights and any other thing that can be controlled
using an IR or RF remote.


<div layout="row center-center">
<div style="min-width: 360px;max-width: 420px;width: 100%;"><div class="media-container" style="height: auto; aspect-ratio: 15/12">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hg_mini_firefly_kit_05.jpg
  url: images/hg_mini_firefly_kit_05.jpg

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


Commands can be captured directly by issuing them from the original remote and is then possible
to save, playback or schedule the captured commands using [HomeGenie Panel](../../../../panel)
and/or [HomeGenie Server](../../../../server).

It's also possible to control other smart devices or to trigger scenarios when a specific IR/RF
signal is detected by *Firefly*.


// TODO: pics

- TODO: show Script record/save in HG Panel
- TODO: show Remote control feature in HG Server (maybe link old video?)


...




### Ingredients

- Waveshare ESP32-C3-Zero
- IR/RF receiver module
- IR/RF transmitter module
- 3d printed shell (original design by G-Labs)



### Firmware upload command

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

<a name="api"></a>
## Implemented API

In addition to the common [device API](../../programming/api), the following API commands are implemented by
this device.



---



### `C1` module

Controls onboard RGB LED connected to GPIO 10.

#### Base path

`/api/HomeAutomation.HomeGenie/C1/`

#### Commands

##### `Control.ColorHsb/<h>,<s>,<b>,<tansition_ms>`

##### `Control.Level/<level>/<tansition_ms>`

##### `Control.On`

##### `Control.Off`

##### `Control.Toggle`
