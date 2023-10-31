---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 30
coverPreview: https://picsum.photos/seed/docs!setup/256/256
title: Dashboards
description: Configuring dashboards and widgets
icon: dashboard
keywords:
- homegenie
- documentation
- setup
- configuration
---

## Managing dashboards

Clicking the menu button {% zx 'icon' %}menu{% endzx %} on the application bar
you can open the side drawer and have a summary of dashboards and navigate through them.
The side drawer can eventually be fixed by clicking the push pin button
{% zx 'icon' %}push_pin{% endzx %}
located at the bottom right.

Next to the drawer button, the dashboard menu
{% zx 'icon' %}dashboard{% endzx %}
can be used to add new dashboards and managing the current one.


<div class="media-container">
<video id="video1" muted width="100%" controls
       poster="images/dashboard_drawer_menu.png"
       src="images/dashboard_drawer_menu.m4v" ></video>
</div>
<script type="text/javascript">
const video= document.getElementById('video1');       
video.addEventListener('ended',function(){
    video.load();     
},false);
</script>


### Dashboard Widgets

From the dashboard menu you can also add new widgets
{% zx 'icon' %}dashboard_customize{% endzx %}
and charts {% zx 'icon' %}auto_graph{% endzx %} to the current dashboard.

#### Arranging widgets

A long press on a widget will activate drag mode, where you can
sort widgets by dragging them.  
Dashboard widgets can also be arranged into sections using the "Section Label"
widget to separate each group of widgets.

The *Section Label* widget also adds toggle buttons as a quick shortcut to turn on/off
all lights or switches in that section. 







<div class="media-container">
<video id="video2" muted width="100%" controls
       poster="images/dashboard_widgets_01.png"
       src="images/dashboard_widgets_01.m4v" ></video>
</div>
<script type="text/javascript">
const video2= document.getElementById('video2');       
video2.addEventListener('ended',function(){
    video2.load();     
},false);
</script>








#### The options menu

All widgets have an options menu button located in the upper right corner.
Depending on the type of widget, specific button icon and menu options might
be shown. Either way, widget options menu will at least have the *Edit* and *Remove* options.  
The {% zx 'icon' %}edit{% endzx %} *Edit* option will display all data bound to the widget and allow you
to change the name, type and other data fields, while the {% zx 'icon' %}remove{% endzx %} *Remove* option
will remove the widget from the dashboard.
