---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: examples
group: examples
order: 40
title: Smart shutters
description: How to implement smart shutters
icon: blinds
keywords:
- smart blinds
- smart shutters
- shutters
- blinds
- windows
- curtains
- roller
- motorized
wip: false
---

## Meet Shieldy

Shieldy is a smart device that can be used to turn regular shutters into fully automated shutters. The 3d printed
shell and other parts can be customized to fit different models.  
Easy to calibrate, fast and reliable positioning, it also auto-detects and reports eventual mechanical issues.  
Can be automated using [HomeGenie Panel](../../../../panel) and [HomeGenie Server](../../../../server) for instance
to optimize the light income based on the solar position or simply to suit you daily routines and preferences.  
It can be battery-powered and recharged automatically using a small solar panel.


<div layout="row center-center">
<div style="min-width: 360px;max-width: 640px;width: 100%;"><div class="media-container" style="height: auto; aspect-ratio: 15/12">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hg_mini_shieldy_kit_01.jpg
  url: images/hg_mini_shieldy_kit_01.jpg

- type: video
  preview: images/hg_mini_shieldy_teaser_01.jpg
  url: images/hg_mini_shieldy_teaser_01.mp4

- type: image
  preview: images/hg_mini_shieldy_kit_02.jpg
  url: images/hg_mini_shieldy_kit_02.jpg

- type: image
  preview: images/hg_mini_shieldy_kit_03.jpg
  url: images/hg_mini_shieldy_kit_03.jpg

- type: image
  preview: images/hg_mini_shieldy_kit_04.jpg
  url: images/hg_mini_shieldy_kit_04.jpg

options:
#- name: slide
#  value: 10000
- name: inline
  value: true

{% endzx %}
</div></div></div>


Shieldy employs the same *ESP32-C3* board used for the [Smart color light](../smart-led) and
implements the same functionality with the addition of IR/RF transceiver capabilities.



### Ingredients

- [Waveshare ESP32-C3-Zero](https://www.waveshare.com/wiki/ESP32-C3-Zero)
- Servo motor (360 degrees capable)
- Tactile Button switch (6mm)
- Lithium battery charging module (optional)
- 5V 2500mAh lithium battery (optional)
- Solar panel 5v 200ma (optional) 
- `shutter-c3` firmware
- 3d printed shell (original design by G-Labs)



### Firmware install command

```bash
pio run -e shutter-c3 -t upload
```

See the [Getting started](../../getting-started) and the [Device setup](../../device-setup) pages
for further information about installing firmware and configuring a *HomeGenie Mini* device.


<a name="api"></a>
## Modules and API

In addition to the common [Device API](../../programming/api), the following modules and API are implemented by
this device.

### `S1` module

Controls servo motor connected to GPIO 5.

#### Domain / Address

`Automation.HomeGenie/C1`

#### Properties

- `Status.Level`
- `Status.ColorHsb`
- `Status.Error`
- `Status.Calibration`


#### Commands

- `Control.Open` / `Control.On` 
- `Control.Close` / `Control.Off`
- `Control.Level/<level>` (0-100)
- `Control.ColorHsb/<h>,<s>,<b>,<tansition_ms>`
