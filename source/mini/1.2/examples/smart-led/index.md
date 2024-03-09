---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: examples
group: examples
order: 10
title: Smart color light
description: How to create a smart color LED device
icon: light
keywords:
- LED
- neopixel
- color
- addressable
- smart light
- rechargeable
---

## Meet Shroomie

Shroomie is a small rechargeable device powered by an *ESP32-C3* chip with an onboard color LED pixel.
With a 3d-printed shell that resembles the shape of a small glowing mushroom, it's a perfect desk companion
that can be used as a mood/status light or just to enjoy the *party mode* functionality synchronizing
multiple shroomies with your music.


<div layout="row center-center">
<div style="min-width: 360px;max-width: 420px;width: 100%;"><div class="media-container" style="height: auto; aspect-ratio: 15/12">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hg_mini_shroomie_kit_01.jpg
  url: images/hg_mini_shroomie_kit_01.jpg

- type: image
  preview: images/hg_mini_shroomie_cad_view_01.jpg
  url: images/hg_mini_shroomie_cad_view_01.jpg

- type: video
  preview: images/hg_mini_shroomies_01.jpg
  url: images/hg_mini_shroomies_01.webm

- type: image
  preview: images/hg_mini_shroomie_cad_view_02.jpg
  url: images/hg_mini_shroomie_cad_view_02.jpg

- type: image
  preview: images/hg_mini_shroomie_cad_view_03.jpg
  url: images/hg_mini_shroomie_cad_view_03.jpg

- type: image
  preview: images/hg_mini_shroomie_cad_view_04.jpg
  url: images/hg_mini_shroomie_cad_view_04.jpg

options:
#- name: slide
#value: 10000
- name: inline
  value: true

{% endzx %}
</div></div></div>



### Ingredients

- Waveshare ESP32-C3-Zero
- Lithium battery charging module
- 3.7V 500mAh lithium battery 902030
- 3d printed shell (original design by G-Labs)



### Firmware upload command

```bash
pio run -e color-light-c3 -t upload
```

See the [Getting Started](../../getting-started) and the [Device setup](../../device-setup) pages
for further information about installing firmware and configuring a *HomeGenie Mini* device.

<a name="api"></a>
## Implemented API

In addition to the common [HomeGenie Mini API](../../device-api), the following API commands are implemented by
this device.

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
