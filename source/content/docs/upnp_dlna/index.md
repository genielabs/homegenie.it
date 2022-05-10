---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: docs
group: docs
order: 60
coverPreview: https://picsum.photos/seed/docs!configure/256/256
title: UPnP / DLNA
description: Controlling media servers and players
icon: perm_media
pubDate: 2015-10-24 00:00:00
keywords:
- homegenie
- documentation
- configuration
- scenarios
- scenes
- wizard
- upnp
- dlna
- media server
- player
- control point
---

<div class="content-margin" align="center">
    <iframe self="size-medium" height="440" src="https://www.youtube.com/embed/ygilmTwLSJ0?rel=0" frameborder="0" allowfullscreen></iframe>
</div>

## Controlling media servers and players

HomeGenie can be used as a control point for DLNA/UPnP devices such as:

- Routers / Media Servers
- Smart TVs / Media Players
- UPnP switches and lights

Media servers and players in the network are automatically detected
and can be added like other modules to *[control groups](#/docs/configure)*.

From there we can browse media files (pictures, music and videos) and play
them to any media player/renderer in the local network.
This can be done either from the web interface or the mobile client.

DLNA/UPnP commands can also be stored in a script with *[Record Macro](#/docs/scenarios)*
functionality or manually by using *[UPnP API](api/mig/mig_api_upnp.html)*
and then recalled within a *[scenario](#/docs/scenarios)*.

<div class="media-container" ctrl z-load="@lib/controllers/view-pager"
    data-o-slide="true" data-o-paging="true">
    <img self="size-small" title="Android Phone Client - Media Server Widget" src="images/hg_phone_media_server.jpg" alt="" loading="lazy">
    <img self="size-small" title="Android Phone Client - Media Player Widget" src="images/hg_phone_media_player.jpg" alt="" loading="lazy">
    <img self="size-medium" title="Web UI - Media Server Widget" src="images/media_server_widget_00.jpg" alt="" loading="lazy">
</div>

Above screenshots are showing DLNA controls from both HomeGenie Plus (Android) and HomeGenie Server (Web UI).
