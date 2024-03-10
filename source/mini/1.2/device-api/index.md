---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 30
title: Device API
description: HomeGenie Mini device API
icon: code
keywords:
- setup
---


## HomeGenie API

HomeGenie Mini API is a subset of *HomeGenie Server API* which makes of it a 
"minified" instance of *HomeGenie Server* specifically designed for microcontrollers.

### I/O channels

Regardless the channel (HTTP, WebSocket or MQTT) used to send API commands, commands
will have the same syntax.


#### WebSocket (port 8188)

Asynchronous channel supporting both clear-text and binary-packed I/O.


#### MQTT (broker port 8000 via WebSocket)

Asynchronous I/O channel using MQTT protocol. A *topic* for each domain/module
implemented by the device is available for listening to events and issuing API
commands. 

#### HTTP (port 80)

Clear text synchronous I/O channel.

#### HTTP - SSE (port 80)

Clear text JSON-serialized events stream. This channel is output-only.

##### Events stream URL

- `/api/HomeAutomation.HomeGenie/Logging/RealTime.EventStream/`
- `/events` (alias)


#### SerialPort

Clear text I/O channel over serial port link.



### `Config` API

#### Base path 

`/api/HomeAutomation.HomeGenie/Config/`

#### Commands

- `Modules.Get/<domain>/<address>`
- `Modules.List`
- `Modules.ParameterSet/<domain>/<address>/<parameter>/<value>`
- `Groups.List`
- `WebSocket.GetToken`


### `Control` API

#### Base path

`/api/HomeAutomation.HomeGenie/<module_address>/`

depending on the installed firmware version there will be available
different modules.  
For example is possible to enable builtin GPIO modules by setting the
`CONFIG_GPIO_OUTPUT` flag with the GPIO numbers.

`-D CONFIG_GPIO_OUTPUT={4,5,6,12}`

In this case the `<module_address>` will correspond to the GPIO number. So
to set HIGH the GPIO12 the API command will be:

`/api/HomeAutomation.HomeGenie/12/Control.On`

#### Commands

- `Control.On`
- `Control.Off`
- `Control.Level/<level>`
- `Control.Toggle`

Beside builtin GPIO modules, it is possible to create custom modules like in
the [`color-light`](../examples/smart-led#api) example where the `C1` module is associated to an RGB-LED
and is used to control it.

Additional `Control` API provided in example code:

- `Control.ColorHsb/<h>,<s>,<b>,<transition_ms>`
- `Control.Open`
- `Control.Close`
- `Control.Calibrate`
- `Control.SendRaw/<raw_message>`


### Example API request (via HTTP)

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