---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: automation
group: automation
order: 10
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Scheduler
description: HomeGenie Scheduler
icon: schedule
keywords:
- homegenie
wip: false
---

## Time-based automation

From the *Scheduler* page you can display, edit and create time-based events.
Scheduler events can be used to trigger at a given time the execution of a
scene, a program, or other automated workflows such as scheduling thermostat
modes based on time slots and period of the year.

### Event list

The list of events is organized into three sections. The first is the list of events
actually scheduled on the selected day, which by default is today's date, and which
can be modified clicking the calendar {% zx 'icon' %}today{% endzx %} button located
at the end of the *Scheduler* title bar.  
The "*Other events*" section lists the events enabled but not scheduled on the
selected day.  
The last section lists events that are disabled.


<div class="media-container" style="height: auto; aspect-ratio: 1.19959879639">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_01.png
  url: images/automation_scheduler_01.png

options:
- name: inline
  value: true

{% endzx %}
</div>


Each item in the list displays the event name, description and a time bar
showing occurrences of the event over a 24-hour period.  
On the right side of each item there is a menu button {% zx 'icon' %}more_vert{% endzx %} that can be used
to edit, toggle or delete the event.  
If the event also triggers an action, the action icon {% zx 'icon' %}bolt{% endzx %}
will appear next to the menu button.  
The link icon {% zx 'icon' %}link{% endzx %} will show the number
of devices associated with the event.


## Adding events

You can add a new event clicking the "event add" {% zx 'icon' %}add_circle_outline{% endzx %} button
located at the end of the *Scheduler* title bar.  
When adding or modifying an event the event wizard allows you to specify event schedule
and optionally the modules/devices that are associated with it and an action to perform
on every occurrence.

### Schedule

Depending on the type selected, the schedule of an event can be defined in different ways.

#### Standard

A standard event can occur at exact times or within time slots, with the possibility
to specify months, days, hours and minutes in which the event can be scheduled.  
You can add times to the event schedule by clicking the "time add" {% zx 'icon' %}more_time{% endzx %}
button as shown in the following picture.

<div class="media-container" style="height: auto; aspect-ratio: 1.19959879639">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_02.png
  url: images/automation_scheduler_02.png

options:
- name: inline
  value: true

{% endzx %}
</div>

Right below the schedule, a time bar will show occurrences of the event over 24
hours of the day. You can click the calendar {% zx 'icon' %}today{% endzx %} icon to select
a different day to preview.


#### Date range

This is the same as a *standard* event, but it will only be valid during a configurable
date range.

#### Enhanced cron expression

Events of this type use HomeGenie Scheduler's "native" method to describe time occurrences
and which is based on the *Unix cron format* but with some additional features.

In this case, in fact, the event schedule is defined with a textual expression that can
include references to other events and use a special set of operators to describe time
intervals and combine them so that even a complex schedule can be defined with a short
expression.

For example, the following event references other events and uses both arithmetic
and logical operators to turn the lights on half an hour after the sunset and turn
them off one hour before sunrise, excluding holidays.

<div class="media-container" style="height: auto; aspect-ratio: 1.19959879639">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_03.png
  url: images/automation_scheduler_03.png

options:
- name: inline
  value: true

{% endzx %}
</div>


```cron
(@SolarTimes.Sunset + 30 > @SolarTimes.Sunrise - 60)
 %
(@Holidays.Summer : @Holidays.Winter)
```

The built-in events *"SolarTimes.Sunset"* and *"SolarTimes.Sunrise"* return the value
of sunrise and sunset times (that will be different from day to day), and considering
that the symbol **">"** means *"until"*, the first part of the expression in this example
basically says "from 30 minutes after sunset until 60 minutes before sunrise".  
Since the symbol **"%"** means "except" and the symbol **":"** means "or",
the rest of the expression says "except summer/winter holidays".  
You can find further information about cron expressions syntax in the paragraph at the
end of this page.

### Modules 

An event can optionally specify what type of devices it can be used for.
In the previous example, the *"Light.Outdoor.On"* event can only be used with lights.


<div class="media-container" style="height: auto; aspect-ratio: 1.19959879639">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_04.png
  url: images/automation_scheduler_04.png

options:
- name: inline
  value: true

{% endzx %}
</div>


The event can be associated with devices either from the modules list as shown in the
above picture, or directly from the widget menu of devices matching selected types.


<div class="media-container" style="height: auto; aspect-ratio: 1.86">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_05.png
  url: images/automation_scheduler_05.png
  alt: Widget options menu with "Schedule" option
- type: image
  preview: images/automation_scheduler_06.png
  url: images/automation_scheduler_06.png
  alt: Available schedules for Porch Light

options:
- name: inline
  value: true
- name: slide
  value: true

{% endzx %}
</div>


### Action

Each time the event occurs it is possible to perform an action.
This action can be selected from a list of pre-set actions or can be implemented
writing a *Scheduler Script* which is simple JavaScript code that uses the Scheduler
and HomeGenie APIs to implement the desired action.

#### Preset actions

Preset actions include common actions such as operating lights, thermostats, running
a scenario or other programs, making HomeGenie say something using text-to-speech.

You can choose to run a preset action every time the event is scheduled,
or when the event includes time slots, when a time slot starts and when
a time slot ends.


<div class="media-container" style="height: auto; aspect-ratio: 1.19959879639">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_07.png
  url: images/automation_scheduler_07.png

options:
- name: inline
  value: true

{% endzx %}
</div>


Behind the scenes, preset actions are translated to JavaScript code that can be
viewed and modified switching to *"Custom action script"* mode.


#### Custom action script

So, an event script is a simple JavaScript code that can use HomeGenie API *Helper Classes*
which are exposed to the script through the following objects:

- `$$.modules` - [ModulesHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_modules_manager.html)
- `$$.program` - [ProgramHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_program_helper.html)
- `$$.settings` - [SettingsHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_settings_helper.html)
- `$$.net` - [NetHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_net_helper.html)
- `$$.serial` - [SerialHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_serial_port_helper.html)
- `$$.tcp` - [TcpHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_tcp_client_helper.html)
- `$$.udp` - [UdpHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_udp_client_helper.html)
- `$$.mqtt` - [MqttHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_mqtt_client_helper.html)
- `$$.knx` - [KnxHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_knx_client_helper.html)
- `$$.scheduler` - [SchedulerHelper](../../../api/1.4/ape/class_home_genie_1_1_automation_1_1_scripting_1_1_scheduler_helper.html)

In addition to the above, the script can use the following objects and methods:

- `$$.boundModules`:
  a *ModulesHelper* instance containing modules associated with of the event.
  For example to switch on all associated modules we'll use: `$$.boundModules.on()`.
- `$$.onPrevious()`:
  boolean value indicating if the event was scheduled in the previous minute.
- `$$.onNext()`:
  boolean value indicating if the event will be also scheduled in the next minute.
- `$$.data(k[,v])`:
  function to store data for this event and that will be available to the script across each occurrence.
- `$$.onUpdate(function(m,p))`:
  method to set a handler for listening to modules events. Once registered the handler will be called even
  if the event is not scheduled.
- `$$.pause(seconds)`: pause the script for the given amount of time



<div class="media-container" style="height: auto; aspect-ratio: 1.19959879639">
{% zx 'media-browser' %}

media:

- type: image
  preview: images/automation_scheduler_08.png
  url: images/automation_scheduler_08.png

options:
- name: inline
  value: true

{% endzx %}
</div>


## About cron expressions


Cron expressions are strings that are made up of five subexpressions
which describe individual details of the schedule. These subexpressions
are separated by whitespace and represent:

- Minutes
- Hours
- Day-of-Month
- Month
- Day-of-Week

Individual sub-expressions can contain ranges (e.g. 8-22) and lists (e.g. 5,10,30,45).

Wild-cards (the '\*' character) can be used to say “every” possible value of this field.
Therefore, the '\*' character in the *Month* field of the previous example simply means “every month”.
A '\*' in the Day-Of-Week field would therefore obviously mean “every day of the week”.

All fields have a set of valid values that can be specified:
- 0 to 59 for minutes, and the values 0 to 23 for hours
- 1 to 31 for day-of-month 
- 1 to 12 for months
- 0 to 6 for day-of-week (or 1 to 7 since both 0 and 7 stand for Sunday).

The '/' character can be used to specify increments to values.
For example, if you put '0/15' in the Minutes field, it means
'every 15th minute of the hour, starting at minute zero'.
If you used '3/20' in the Minutes field, it would mean 'every 20th minute of the hour,
starting at minute three' – or in other words it is the same as specifying '3,23,43'
in the Minutes field.


### Example cron expressions


**Example 1** Every 5 minutes

```
0/5 * * * *
```

**Example 2** Every even minute

```
*/2 * * * *
```

**Example 3** Every odd minute

```
1-59/2 * * * *
```

**Example 4** Every 5 minutes, Weekdays from 8am-5pm.

```
*/5 8-16 * * 1-5
```

### Combining expressions

Cron expressions can also be grouped using parenthesis and combined using
the following operators:

- **` ; `** &nbsp; *AND*
- **` : `** &nbsp; *OR*
- **` > `** &nbsp; *UNTIL* (time range, 'from' > 'to')
- **` % `** &nbsp; *EXCEPT*


**Example 5** From 11:20PM to 3:15AM

```
(20 23 * * *) > (15 3 * * *)
```

**Example 6** From 11:20PM to 3:15AM except in May(5) and September(9)

```
((20 23 * * *) > (15 3 * * *)) % (* * * 5,9 *)
```

**Example 7** At 11:20PM or 3:15AM in January(1) and December(12) every Sunday(0) and Tuesday(2)

```
((20 23 * * *) : (15 3 * * *)) ; (* * * 1,12 0,2)
```


### Event variables, sum and subtract

An event can also be recalled in a cron expression by using the **@** symbol followed by
the name of the event.

**Example 8** From 11:20PM to 3:15AM only during winter holidays

```
((20 23 * * *) > (15 3 * * *)) ; @Holidays.Winter
```

When the referenced event is an exact time, sum and subtract operator can be used
to add or subtract certain amount of minutes to the recalled event.
See the next example.

#### SolarTimes events

There are also a few built-in special events that can be used to reference
**sunrise** and **sunset** times:

- SolarTimes.Sunrise
- SolarTimes.Sunset
- SolarTimes.SolarNoon

**Example 9** From half an hour before sunrise to 45 minutes after sunset
only during summer holidays

```
(@SolarTimes.Sunrise - 30 > @SolarTimes.Sunset + 45) ; @Holidays.Summer
```


