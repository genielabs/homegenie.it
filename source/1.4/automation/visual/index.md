---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: automation
group: automation
order: 7
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Scenes
description: Implementing scenes with visual programming
icon: account_tree
keywords:
- homegenie
wip: true
---

## Easy and effective   

With *HomeGenie*, you can create common automation tasks and scenes effortlessly.
No need to learn or use any programming language to customize your smart system.

## Visual Program editor


{% layout 'row top-justify' 'style="gap: 24px"' %}

<div>
    {%- renderTemplate 'md' -%}
    With the *Visual Program* editor, you can create a scene by just dragging
and dropping commands from ...
    {%- endrenderTemplate -%}
</div>

<div>
    <img src="images/visual_editor_02.png" width="280">
</div>

{% endlayout %}

---

{% layout 'rows top-justify reverse' %}

<div>
    {%- renderTemplate 'md' -%}
    With the *Visual Program* editor, creating a scene it's just a matter of ...
    {%- endrenderTemplate -%}
</div>

<div class="media-container">
    <img src="images/visual_editor_02.png" width="280">
</div>

{% endlayout %}

(*script recording* actually only available in *HomeGenie Panel*, it's planned to be implemented for visual script as well )
...

## Client side scenes with HomeGenie Panel

(client side)

```
Example script recording -- UPnP media server and tv with
light effects scene
```

....
