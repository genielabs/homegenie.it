---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: examples
group: examples
order: 20
title: Smart sensor
description: How to implement a smart color light bulb
icon: sensors
keywords:
- humidity
- temperature
- sensor
- DHT
- Round Display
- GA
- Touch
---

## Meet Lunar

Lunar is a multi-sensor device equipped with humidity, temperature and motion sensors and
a round touch display with on board *ESP32-S3* chip. The breadboard-friendly 3d printed shell
with cables holder at the base allows plugging and testing other electronic modules quickly.  

<div layout="row center-center">
<div style="min-width: 360px;max-width: 420px;width: 100%;"><div class="media-container" style="height: auto; aspect-ratio: 7/6">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hg_mini_smart_device_01.jpg
  url: images/hg_mini_smart_device_01.jpg

- type: image
  preview: images/hg_mini_smart_device_02.jpg
  url: images/hg_mini_smart_device_02.jpg

- type: video
  preview: images/hg_mini_smart_device_03.jpg
  url: images/hg_mini_smart_device_02.mp4

- type: image
  preview: images/hg_mini_smart_device_08.jpg
  url: images/hg_mini_smart_device_08.jpg

- type: image
  preview: images/hg_mini_smart_device_05.jpg
  url: images/hg_mini_smart_device_05.jpg

- type: image
  preview: images/hg_mini_smart_device_06.jpg
  url: images/hg_mini_smart_device_06.jpg

- type: video
  preview: images/hg_mini_smart_device_04.jpg
  url: images/hg_mini_smart_device_01.mp4


options:
- name: slide
  value: 10000
- name: inline
  value: true

{% endzx %}
</div></div></div>


Provided with a minimal user interface and a few example activities, this setup leaves a plenty of RAM
available (2,22Mb!) making it a suitable base configuration for developing and testing your
creations and explore more advanced applications with *HomeGenie Mini*.

<small style="font-size:65%;">
Original 3D design and artwork by *G-Labs*, title <strong>"India approaching Moon 23-08-23"</strong>
</small>


### Ingredients

- Waveshare ESP32-S3 with 1.28inch Round Touch LCD
- DHT-22 humidity and temperature sensor
- Motion sensor
- 3d printed shell (original design by G-Labs)


### Firmware upload command

```bash
pio run -e smart-sensor-display-s3 -t upload
```

See the [Getting Started](../../getting-started) and the [Device setup](../../device-setup) pages
for further information about installing firmware and configuring a *HomeGenie Mini* device.
