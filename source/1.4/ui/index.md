---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 35
coverPreview: https://picsum.photos/seed/docs!setup/256/256
title: Client preferences
description: Setting up client preferences
icon: language
keywords:
- homegenie
- documentation
- setup
- configuration
---

## Setting client language, theme and units

Client configuration, such as displayed language, units, theme colors,
and dashboards are stored on the server.
An arbitrary number of client configuration presets can be stored and
then quickly recalled by selecting them from the client preferences page.


<div class="media-container">

  <video id="video1" src="images/homegenie_client_ui_preferences.m4v"
       controls muted
       poster="images/homegenie_client_ui_preferences.png"
       style="max-width:100%;"></video>

</div>
<script type="text/javascript">
const video= document.getElementById('video1');       
video.addEventListener('ended',function(){
    video.load();     
},false);
</script>


When a configuration preset is selected, any changes made to widgets
placement, theme and other client preferences will be updated on the server
and affect all other clients using the same preset.
