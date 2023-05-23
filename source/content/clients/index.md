---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 30
coverPreview: https://picsum.photos/seed/docs!clients/256/256
title: Clients
description: Desktop and mobile clients for HomeGenie
icon: important_devices
pubDate: 2015-10-24 00:00:00
keywords:
- homegenie
- app
- user interface
- ui
- panel
---

## HomeGenie web user interface

The default server installation includes a web user interface that can be used either from a desktop PC or a mobile client such as Android or iOS device.
This is mainly intended for administration purposes to configure and access all aspect of the system.

<div class="media-container">
    <img self="size-medium" src="images/dashboard_page_01.jpg">
</div>

<a name="HomeGeniePlus"></a>
## HomeGenie Plus for Android

Specifically designed to be a Control Panel for the end-user, **HomeGenie Plus** is a feature rich mobile client for your smart home and smart applications.

<div align="center">
<a href="https://play.google.com/store/apps/details?id=com.glabs.homegenieplus&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1"><img width="200" alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge-border.png" /></a>
</div>

### Main features

- Multi-standard: can connect not just to HomeGenie server but also directly to [HomeGenie Mini](https://github.com/genielabs/homegenie-mini), Belkin Wemo, Philps Hue, TPLink, LIFX and any UPnP/DLNA media server or renderer (TV)
- Adaptive layout: automatically arranges widgets to best fit both on phone and tablet.
- Voice control
- UPnP/DLNA both browser and renderer control
- IP camera widget with full screen view
- "Keep Screen On" option: prevent the screen from turning off. Useful for wall-mounted panel installations.
- Parameter statistics and activity log: displays statistics and parameter logs of any configured modules.
- Module preferences: each client device can have its own settings and preference for configured modules.
- "Mini" view: some widgets, as the ones for lights and appliances, can be minified and hide extra options so that they just appear as a quick toggle button.
- Configurable groups: allows choosing modules and groups that will be available to the client device. If HomeGenie server has password protection enabled, only the administrator can change the configuration in order to limit the access from the client.
- Embedded automation program engine and API that allow adding custom automation logic using JavaScript

#### Screenshots - Phone

<div class="media-container visible-on-ready" ctrl z-load="@lib/controllers/view-pager" z-lazy="false"
    :auto-slide="true" :paging="true">
    <!--img self="size-medium" src="images/hgplus/hg_phone_00.jpg" /-->
    <img self="size-medium" src="images/hgplus/hg_phone_01.jpg" />
    <img self="size-medium" src="images/hgplus/hg_phone_02.jpg" />
    <img self="size-medium" src="images/hgplus/hg_phone_03.jpg" />
    <img self="size-medium" src="images/hgplus/hg_phone_04.jpg" />
    <img self="size-medium" src="images/hgplus/hg_phone_05.jpg" />
    <img self="size-medium" src="images/hgplus/hg_phone_06.jpg" />
    <img self="size-medium" src="images/hgplus/hg_phone_07.jpg" />
</div>


#### Screenshots - Tablet

<div class="media-container visible-on-ready" ctrl z-load="@lib/controllers/view-pager" z-lazy="false"
    :auto-slide="true" :paging="true">
    <img self="size-medium" src="images/hgplus/hgplus_13.jpg" />
    <img self="size-medium" src="images/hgplus/hg_tablet_01.jpg" />
    <img self="size-medium" src="images/hgplus/hg_tablet_02.jpg" />
    <img self="size-medium" src="images/hgplus/hg_tablet_03.jpg" />
    <img self="size-medium" src="images/hgplus/hg_tablet_05.jpg" />
    <img self="size-medium" src="images/hgplus/hg_tablet_06.jpg" />
    <img self="size-medium" src="images/hgplus/hg_tablet_08.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_04.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_05.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_06.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_07.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_08.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_09.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_11.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_12.jpg" />
    <img self="size-medium" src="images/hgplus/hgplus_14.jpg" />
</div>


## Open Source clients

The open source clients for Android and Windows Phone are meant to be an example for developers who want to build their own custom client
using HomeGenie API.

### Android app source code

- [HomeGenie for Android on github](https://github.com/genielabs/HomeGenie-Android)

### Windows Phone 8.x client source code

- [HomeGenie for Windows Phone on github](https://github.com/genielabs/HomeGenie-WindowsPhone)
