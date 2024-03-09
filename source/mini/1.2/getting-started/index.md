---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: main
group: main
order: 10
title: Getting started
description: Installing HomeGenie Mini firmware
icon: build
keywords:
- requirements
- start
---

## Building and flashing the firmware

The firmware can be installed using [Platform.IO core](https://docs.platformio.org/en/latest/installation.html) CLI.
After installing *Platform.IO core*, download [HomeGenie Mini](https://github.com/genielabs/homegenie-mini/releases) source code,
unzip it and open a terminal with the current directory set to `homegenie-mini` folder.  
Then enter the following commands to install libraries required to build the firmware:

```bash
pio update
pio lib install
```

To actually build and install *HomeGenie Mini* firmware, connect your ESP device to your
PC's USB port and issue the command:

```bash
pio run -e default -t upload
```

**Congratulations!! =)** You've just got a new shiny HomeGenie Mini device up and running.


## Configuration environments

The option `-e default` shown in the previous command is used to specify the configuration environment.
The **default** environment is for building the base firmware for a generic *ESP32* board.

To list all available configurations enter the following command:

```bash
pio project config
```

By editing the `platformio.ini` file is possible to add custom configuration environment to build your own version
of the firmware to support different hardware and functionality.
