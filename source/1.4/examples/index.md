---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 50
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Example applications
description: Example HomeGenie applications
icon: tips_and_updates
keywords:
- homegenie
wip: false
---

{% raw %}
<style>
h3 {
  font-size: 140%!important;
}
</style>
{% endraw %}

## Raspberry Pi recipes 🍰

{% assign subposts = collections.example %}
{% if subposts.size > 0 %}
  {%- for subpost in subposts -%}
    {% assign sublink = subpost.url | url %}
    <h3>
    - <a href="{{ sublink }}">{{ subpost.data.title }}</a>
    </h3>
  {% endfor %}
{% endif %}

<h3 class="link-disabled">- GroveRGB rainbow music visualizer</h3>



## Smart Home recipes 🏠


<h3 class="link-disabled">- Remote control ZigBee and Z-Wave using an X10 RF remote</h3>

<h3 class="link-disabled">- Env light/motion controlled lights - Smart Device feature program</h3>

<h3 class="link-disabled">- Thermostat with generic temperature sensor and a generic switch</h3>

<h3 class="link-disabled">- Lights synchronization with Linked Lights program &mdash; HomeGenie Panel</h3>
