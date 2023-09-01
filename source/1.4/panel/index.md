---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 45
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: HomeGenie Panel
description: HomeGenie Panel app for Android tablets and phones
icon: android
keywords:
- homegenie
wip: true
---

## Handy and quick

Designed to be as fast and practical as physical button controls, HomeGenie Panel is an
application for controlling "things" from any Android device, either tablet or phone,
from version 4.4 and up.  

On Android devices from version 7 and up, pinned shortcuts are even quicker to access,
just one tap away from your phone's home screen, so you can toggle lights or run
scenarios just as fast as tapping a physical button in reach.

With customizable dashboards and big buttons and indicators to monitor operate on your
smart devices like lights, switches, thermostats, sensors, media servers and smart TVs.

Runs 24/7 flawlessly and does not require any Internet access to work!


(example dashboard pictures - 1 for small display, 1 for tablet)

(small display - example dashboard buttons)
(tablet - example media control screenshot)


## A smart panel for every room

HomeGenie Panel also comes with a built-in automation engine that allow to write programs
using *JavaScript* programming language to extend and customize the panel functionality.

So it's possible to play a sound when a certain device is switched on, or make the
panel say something using the internal speech synthesis.  

It's also possible to program voice based dialogue by making the panel
ask something and then wait for the user reply to determine the next
action to take.

So, in a context where multiple panels are installed in different zones, each one
can have a different configuration and also implementing individual automation tasks
that do not involve the use of a server/gateway at all.  




(VIDEO live script recording of lights scenario synched with movie playback/seek)


(VIDEO OPZIONALE - esempio speech control con dialogo interattivo)




<div class="media-container">
{% zx 'media-browser' %}

media:
{% for i in (1..7) %}
- type: image
  preview: images/hgplus/hg_phone_0{{ i }}.jpg
  url: images/hgplus/hg_phone_0{{ i }}.jpg
{% endfor %}

options:
- name: slide
  value: 5000
- name: inline
  value: true

{% endzx %}
</div>


A smart panel for every room... and spaceships :)



<div class="media-container" style="height: auto">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/hgplus/hgplus_13.jpg
  url: images/hgplus/hgplus_13.jpg

- type: image
  preview: images/hgplus/hg_tablet_01.jpg
  url: images/hgplus/hg_tablet_01.jpg

- type: image
  preview: images/hgplus/hg_tablet_02.jpg
  url: images/hgplus/hg_tablet_02.jpg

- type: image
  preview: images/hgplus/hg_tablet_03.jpg
  url: images/hgplus/hg_tablet_03.jpg

- type: image
  preview: images/hgplus/hg_tablet_05.jpg
  url: images/hgplus/hg_tablet_05.jpg

- type: image
  preview: images/hgplus/hg_tablet_06.jpg
  url: images/hgplus/hg_tablet_06.jpg

- type: image
  preview: images/hgplus/hg_tablet_08.jpg
  url: images/hgplus/hg_tablet_08.jpg

- type: image
  preview: images/hgplus/hgplus_04.jpg
  url: images/hgplus/hgplus_04.jpg

- type: image
  preview: images/hgplus/hgplus_05.jpg
  url: images/hgplus/hgplus_05.jpg

- type: image
  preview: images/hgplus/hgplus_06.jpg
  url: images/hgplus/hgplus_06.jpg

- type: image
  preview: images/hgplus/hgplus_07.jpg
  url: images/hgplus/hgplus_07.jpg

- type: image
  preview: images/hgplus/hgplus_08.jpg
  url: images/hgplus/hgplus_08.jpg

- type: image
  preview: images/hgplus/hgplus_09.jpg
  url: images/hgplus/hgplus_09.jpg

- type: image
  preview: images/hgplus/hgplus_11.jpg
  url: images/hgplus/hgplus_11.jpg

- type: image
  preview: images/hgplus/hgplus_12.jpg
  url: images/hgplus/hgplus_12.jpg

- type: image
  preview: images/hgplus/hgplus_14.jpg
  url: images/hgplus/hgplus_14.jpg

options:
- name: slide
  value: 5000
- name: inline
  value: true

{% endzx %}
</div>




## Supported services

Multiple connections ...

### HomeGenie server

....

### UPnP / DLNA Media servers

...

automatic cover and title info ....


### UPnP / DLNA Renderers (DMR)

... like many Smart TV






## Scenario recording and playback

...

(example with scenario recording of TV playback control and lights sync)

**video**



## Programmable

...
Client API,

### Examples (Synched lights)

...

### Speech control with logic flow

...
