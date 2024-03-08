---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 30
title: Device API
description: How to configure a HomeGenie device
icon: code
keywords:
- setup
---



## HomeGenie API

HomeGenie Mini API is a subset of *HomeGenie Server API* which makes of it a real fully
working light version of *HomeGenie Server* specifically designed for microcontrollers.

### HomeAutomation.HomeGenie

Implemented subset

#### Config API

*Base URL* 

`/api/HomeAutomation.HomeGenie/Config/`

*Commands*

- `Modules.Get`
- `Modules.List`
- `Groups.List`
- `WebSocket.GetToken`

#### Control API

*Base URL*

`/api/HomeAutomation.HomeGenie/<module_address>/`

where `module_address` ...

*Commands*

- `Control.On`
- `Control.Off`
- `Control.Level`
- `Control.Toggle`

Additional `Control` API provided in example code:

- `Control.ColorHsb`
- `Control.Open`
- `Control.Close`
- `Control.Calibrate`
- `Control.SendRaw`


#### Logging API

- `/api/HomeAutomation.HomeGenie/Logging/RealTime.EventStream/`


### EXAMPLE Request (via HTTP)

```
GET /api/HomeAutomation.HomeGenie/Config/Modules.Get/HomeAutomation.HomeGenie/mini
```

#### Response

```
{
  "Name": "HG-Mini",
  "Description": "HomeGenie Mini node",
  "DeviceType": "Sensor",
  "Domain": "HomeAutomation.HomeGenie",
  "Address": "mini",
  "Properties": [{
    "Name": "Sensor.Luminance",
    "Value": "114",
    "Description": "",
    "FieldType": "",
    "UpdateTime": "2019-01-30T13:34:02.293Z"
  },{
    "Name": "Sensor.Temperature",
    "Value": "18.25",
    "Description": "",
    "FieldType": "",
    "UpdateTime": "2019-01-30T13:34:02.293Z"
  }],
  "RoutingNode": ""
}
```

<!--

### HomeGenie Mini builtin API

It's possible to control the 4 GPIOs on the `P1` expansion port using the following API:

- `/api/HomeAutomation.HomeGenie/<pin_number>/Control.On`
- `/api/HomeAutomation.HomeGenie/<pin_number>/Control.Off`
- `/api/HomeAutomation.HomeGenie/<pin_number>/Control.Level/<level>`
- `/api/HomeAutomation.HomeGenie/<pin_number>/Control.Toggle`

Where `<pin_name>` can be `D5`, `D6`, `D7` or `D8` and `<level>` a integer between `0` and `100`.

**Examples**

```
# Set output D6 to 50% (1.65V)
/api/HomeAutomation.HomeGenie/D6/Control.Level/50

# Set output D5 to 100% (3.3V)
/api/HomeAutomation.HomeGenie/D5/Control.Level/100
# or
/api/HomeAutomation.HomeGenie/D5/Control.On

# Set output D8 to 0% (0V)
/api/HomeAutomation.HomeGenie/D8/Control.Level/0
# or
/api/HomeAutomation.HomeGenie/D8/Control.Off
```




...

-->