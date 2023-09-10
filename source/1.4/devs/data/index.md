---
layout: side_drawer.liquid
theme: indigo-deep_purple
options: mdl highlight ext-links no-title
tags: devs
group: devs
order: 45
coverPreview: https://picsum.photos/seed/docs!install/256/256
title: Data Processing
description: About data persistence, processing and visualization
icon: code
keywords:
- homegenie
wip: true
---

## Processing and Visualization

....


<small><strong>Program Context data</strong></small>
```csharp
const string apiUrl = "Statistics.Providers/ExamplePieChart";
const string dataApiUrl = "DataProcessing.Statistics/MyStat";
```

<small><strong>Program Setup</strong></small>
```csharp
// This method is used to register this program as a Chart provider
Program.Implements(
    "@Statistics:Provider",
    apiUrl,
     // the following param's value can be:
     // --> "select_module", "select_property" or "select_none"
    new {
        mode = "select_none",
        legend = true,
        icon = "pie_chart"
    }
).Run();
```

Then the program will handle any call to the declared `apiUrl` and `dataApiUrl` to provide
the chart configuration and data:

<small><strong>Program Main</strong></small>
```csharp
// This API method will be called by the chart component
// to get the configuration of the chart to generate
Api.Handle(apiUrl, (args) => {
    return new {
        // API url to call to get updated chart data from this program
        dataApi = dataApiUrl,
        // Chart configuration
        scale = "linear",
        type = "pie",
        title = "kW/h today",
        labels = new string[] {
            "🍗 Oven",
            "🔥 Boiler",
            "🥵 Heater",
            "🍹 Living Room",
            "📖 Study"
        },
        colors = new string[] {
            "rgb(197,137,64)",
            "rgb(229,186,115)",
            "rgb(250,234,177)",
            "rgb(255,247,218)",
            "rgb(255,253,244)"
        }
    };
});

// API method implementation
Api.Handle(dataApiUrl, (args) => {
    // Just a demo, return fixed data
    return new double[] {
        500, 400, 300, 200, 100
    };
});

Program.GoBackground();
```


## LiteDB (data persistence)

...
