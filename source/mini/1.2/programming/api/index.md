---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: devs
group: devs
order: 10
title: Device API
description: HomeGenie Mini device API
icon: code
keywords:
- setup
---


## I/O channels

Communication with the device can happen using one of the following I/O channels.


#### HTTP (port 80)

Clear text synchronous I/O channel.

#### HTTP - SSE (port 80)

Clear text JSON-serialized events stream. This channel is output-only.

##### Events stream URL

- `/api/HomeAutomation.HomeGenie/Logging/RealTime.EventStream`
- `/events` (alias)


#### WebSocket (port 8188)

Asynchronous channel supporting both clear-text and binary-packed I/O.


#### MQTT (broker port 8000 via WebSocket)

Asynchronous I/O channel using MQTT protocol. A *topic* for each domain/module
implemented by the device is available for listening to events and issuing API
commands.


#### SerialPort

Clear text I/O channel over serial port link.



## Modules and API

HomeGenie Mini API is a subset of *HomeGenie Server API* which makes of it a 
"minified" instance of *HomeGenie Server* specifically designed for microcontrollers.

Regardless the channel used to send API commands they will keep the same syntax:

`<domain>/<address>/<command>/<option_1>/.../<option_n>`

Commands issued via HTTP are prefixed with the base url `/api/`.  


### `Config` module

#### Domain / Address 

`HomeAutomation.HomeGenie/Config`

#### Commands

- `Groups.List`
- `Modules.Get/<domain>/<address>`
- `Modules.List`
- `Modules.ParameterSet/<domain>/<address>/<parameter>/<value>`
- `WebSocket.GetToken`


### `Control` module

#### Domain / Address

`HomeAutomation.HomeGenie/<module_address>`

#### Commands

- `Control.On`
- `Control.Off`
- `Control.Level/<level>`
- `Control.Toggle`

Where `<module_address>` is the GPIO number. So to set HIGH the GPIO12
the API command will be:

&nbsp;    `HomeAutomation.HomeGenie/12/Control.On`

Depending on the installed firmware version there will be available
different GPIO modules.  
GPIO modules are enabled by setting the `CONFIG_GPIO_OUTPUT` preprocessor macro
with the GPIO numbers:

&nbsp;    `-D CONFIG_GPIO_OUTPUT={4,5,6,12}`

Beside builtin GPIO modules, it is possible to create custom modules like in
the [`color-light`](../../examples/smart-led#api) example where the `C1` module is associated to an RGB-LED
and is used to control it.

Additional `Control` API provided in example code:

- `Control.ColorHsb/<h>,<s>,<b>,<transition_ms>`
- `Control.Open`
- `Control.Close`
- `Control.Calibrate`
- `Control.SendRaw/<raw_message>`


### `mini` module

Builtin sensor module.

#### Domain / Address

`HomeAutomation.HomeGenie/mini`

#### Properties

- `System.BytesFree`



### Example API request via HTTP

Commands issued via HTTP are prefixed with the base url `/api/`, so the
URL for calling the method `Modules.Get` of the `Config` module will be:

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
    "UpdateTime": "2019-01-30T13:34:02.293Z"
  },{
    "Name": "Sensor.Temperature",
    "Value": "18.25",
    "UpdateTime": "2019-01-30T13:34:02.293Z"
  },{
    "Name": "System.BytesFree",
    "Value": "2243167",
    "UpdateTime": "2024-03-13T18:06:08.730Z"
  }]
}
```
