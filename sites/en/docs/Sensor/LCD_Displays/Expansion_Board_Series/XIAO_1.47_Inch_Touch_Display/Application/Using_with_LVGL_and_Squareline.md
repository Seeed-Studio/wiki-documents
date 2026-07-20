---
description: Using LVGL and SquareLine Studio with XIAO 1.47 Inch Touch Display
title: Using LVGL and SquareLine Studio
keywords:
  - XIAO
  - Display
  - Touch
  - LVGL
  - SquareLine
image: TODO
slug: /xiao_1_47_inch_touch_display_lvgl_squareline
sidebar_position: 2
sku: TODO
last_update:
  date: 06/18/2026
  author: Seeed Studio
createdAt: '2026-06-16'
updatedAt: '2026-06-18'
url: https://wiki.seeedstudio.com/xiao_1_47_inch_touch_display_lvgl_squareline/
---

# Using LVGL and SquareLine Studio with XIAO 1.47 Inch Touch Display

<div style={{textAlign:'center'}}>
  <img src="TODO_LVGL_SQUARELINE_COVER_IMAGE" style={{width:600, height:'auto'}}/>
</div>

This tutorial introduces how to build graphical user interfaces for the XIAO 1.47 Inch Touch Display using LVGL and SquareLine Studio.

LVGL is a general-purpose embedded graphics library that provides widgets such as labels, buttons, bars, arcs, sliders, images, and screen transitions. SquareLine Studio provides a visual editor for designing LVGL interfaces and exporting the generated UI source files.

Compared with directly drawing graphics through Seeed_GFX / TFT_eSPI, LVGL provides a higher-level UI framework with object management, styles, layouts, events, animations, and input-device support. Seeed_GFX / TFT_eSPI remains responsible for initializing the display and transferring the LVGL pixel buffer to the LCD.

## Environment Preparation

### Hardware

For this tutorial, you need:

- Seeed Studio XIAO 1.47 Inch Touch Display
- USB-C cable that supports data transfer

### Software Preparation

Before continuing, complete the basic setup guide and verify that the display and touch examples work:

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)

### Required Software and Libraries

Prepare the following tools and libraries:

- Arduino IDE
- Seeed nRF52 Boards package
- Adafruit TinyUSB Library, if required by your local nRF52 environment
- [Seeed_GFX](https://github.com/Seeed-Studio/Seeed_GFX)
- LVGL
- [SquareLine Studio](https://squareline.io/)

:::caution
The LVGL version selected in SquareLine Studio must match the LVGL version installed in Arduino IDE. Version mismatches may cause missing APIs, incompatible generated files, or compilation errors.
:::

:::caution
When using Seeed_GFX, remove the original TFT_eSPI library from your Arduino libraries folder if it causes a library conflict.
:::

## Common LVGL Interfaces

LVGL requires several interfaces to connect its UI engine to the hardware and application runtime.

- [Get Started](https://lvgl.io/docs/open/getting_started)
- [Overview](https://lvgl.io/docs/open/integration/overview)
- [Main Moudiles](https://lvgl.io/docs/open/main-modules)
- [Widgets](https://lvgl.io/docs/open/widgets)
- [API](https://lvgl.io/docs/open/api)

### Display Interface

The display interface connects the LVGL rendering buffer to the 1.47-inch LCD. A flush callback receives a rectangular pixel area from LVGL and sends it to the display through Seeed_GFX / TFT_eSPI.

TODO: Add the final display buffer and flush callback implementation.

### Input Device Interface

The input device interface passes touch coordinates and touch state to LVGL.

TODO: Add the final AXS5106L touch read callback.

### Tick and Timer Handler

LVGL requires a time base and periodic task handling. The application must update the LVGL tick and call its timer handler regularly.

TODO: Add the final tick and timer handler implementation for the selected LVGL version.

## Drawing Complex Interfaces with SquareLine Studio

SquareLine Studio can be used to visually create screens, place widgets, configure styles, define events, and export LVGL source code.

### Step 1. Download SquareLine Studio

Download and install SquareLine Studio from its official website:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://squareline.io/" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Open SquareLine Studio</font></span></strong>
    </a>
</div><br />

TODO: Add the SquareLine Studio download screenshot.

### Step 2. Create and Configure the Project

Create a new LVGL project and configure it for the XIAO 1.47 Inch Touch Display.

Use the following display settings:

<table align="center">
 <tr>
     <th>Setting</th>
     <th>Value</th>
 </tr>
 <tr>
     <td>Resolution</td>
     <td>172 × 320</td>
 </tr>
 <tr>
     <td>Color Depth</td>
     <td>16-bit</td>
 </tr>
 <tr>
     <td>Orientation</td>
     <td>Portrait or landscape according to the project</td>
 </tr>
 <tr>
     <td>LVGL Version</td>
     <td>Must match the Arduino LVGL library</td>
 </tr>
 <tr>
     <td>Export Target</td>
     <td>Arduino-compatible C source files</td>
 </tr>
</table>

:::caution
Complete the display configuration before designing the interface. An incorrect resolution, color depth, orientation, or LVGL version may cause the exported UI to be clipped, rotated, or fail to compile.
:::

Use English letters, numbers, and underscores in project and widget names. Avoid spaces, hyphens, and special characters that may produce invalid generated identifiers.

TODO: Add the project configuration screenshot.

### Step 3. Understand the SquareLine Workspace

The SquareLine Studio workspace is divided into several main areas:

- **Hierarchy and Animation**: manages screens, widget layers, and animations.
- **Widgets**: contains UI components that can be placed on the screen.
- **Working Area**: provides a visual preview and allows widgets to be positioned.
- **Assets and Console**: manages images, fonts, and export messages.
- **Inspector or Setup Area**: configures widget properties, styles, flags, states, and events.

TODO: Add an annotated SquareLine Studio workspace screenshot.

### Step 4. Design the Interface

Plan the interface before placing widgets. Decide which information is displayed, which elements are interactive, and how users move between screens.

Possible widgets include:

- Label
- Image
- Button or Image Button
- Arc
- Bar
- Slider
- Panel
- Chart
- Switch

#### Panel

Use a Panel to group widgets or create a bounded visual region. Configure its position, size, background, border, and padding in the Inspector.

TODO: Add the Panel configuration example.

#### Label

Use Labels for titles, values, units, status text, and descriptions. Configure the font, text color, alignment, and spacing.

TODO: Add the Label configuration example.

#### Image and Image Button

Use Images for icons and decorative assets. Use Image Buttons when an image must also react to press, release, checked, or disabled states.

TODO: Add the Image Button configuration example.

#### Arc, Bar, and Slider

Use these widgets to display or adjust values such as speed, battery level, progress, brightness, or volume.

TODO: Add an Arc, Bar, or Slider configuration example.

#### Events and Screen Switching

SquareLine events can trigger actions such as:

- Calling a generated event function
- Changing screens
- Starting an animation
- Updating a widget value
- Changing widget flags or states

TODO: Add a screen transition or widget event example.

#### Animation

Animations can change widget position, opacity, value, angle, or other properties over time.

TODO: Add the final animation example.

:::tip
Give every screen, widget, event, animation, image, and font a clear and unique name. This makes the exported code much easier to understand and modify.
:::

:::tip
Keep interactive widgets above large background or transparent widgets in the hierarchy. A large clickable widget can intercept touch input intended for another control.
:::

:::tip
Disable unnecessary widget flags, animations, fonts, and assets to reduce memory usage.
:::

### Step 5. Export the SquareLine Project

After completing the UI, export the project source files from SquareLine Studio.

The exported project normally contains:

- UI source and header files
- Screen source files
- Event callback files
- Image and font assets
- `lv_conf.h` or LVGL configuration information

TODO: Add the final export menu and exported folder screenshots.

## Integrate the Exported UI with Arduino

### Step 1. Create the Arduino Sketch

Create a new Arduino sketch for the XIAO 1.47 Inch Touch Display.

TODO: Add the final sketch folder structure.

### Step 2. Add the Exported UI Files

Copy the required SquareLine-generated UI files into the Arduino sketch folder or an Arduino library folder.

TODO: List the exact exported files and their final locations.

### Step 3. Create `driver.h`

Create a new file named `driver.h` in the same folder as the Arduino sketch.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

Paste the following configuration into `driver.h`:

```cpp
#define BOARD_SCREEN_COMBO 75
#define USE_XIAO_TFT_DISPLAY_BOARD
```

### Step 4. Add the Main Sketch

The main sketch must initialize the display, touch controller, LVGL, display buffer, input device, and SquareLine-generated UI.

```cpp
// TODO: Paste the final LVGL and SquareLine Arduino sketch here.
```

## Code Function Explanation

### Display Initialization

TODO: Explain the final display initialization and rotation configuration.

### LVGL Draw Buffer

TODO: Explain the selected buffer size and its memory requirements.

### Display Flush Callback

TODO: Explain how the LVGL pixel area is transferred to the LCD.

### Touch Read Callback

TODO: Explain how AXS5106L touch coordinates are mapped to LVGL.

### LVGL Tick

TODO: Explain how the LVGL time base is updated.

### UI Initialization

TODO: Explain how the SquareLine-generated `ui_init()` function is called.

### Event Callbacks

TODO: Explain how generated or custom event callbacks are connected to application logic.

### UI Value Updates

TODO: Explain how application data is written to Labels, Arcs, Bars, Sliders, Charts, or other widgets.

## Configure `lv_conf.h`

SquareLine-generated projects may use widgets, fonts, themes, or features that are disabled in the local LVGL configuration.

If the compiler reports that a widget, font, or LVGL feature is not defined, check `lv_conf.h` and enable the corresponding option.

For example:

```cpp
// TODO: Add the required LVGL font and widget configuration options.
```

:::caution
Do not blindly replace `lv_conf.h` with a file generated for a different LVGL version. Confirm that the configuration file matches the LVGL library installed in Arduino IDE.
:::

## Upload and Test

1. Open the Arduino sketch.
2. Select the XIAO nRF52840 Plus board.
3. Select the correct serial port.
4. Confirm that `driver.h` is in the sketch folder.
5. Confirm that all SquareLine-generated UI files are included.
6. Confirm that `lv_conf.h` enables the required widgets, fonts, and features.
7. Compile and upload the sketch.
8. Verify the display layout, touch input, events, animations, and screen transitions.

## Expected Result

After uploading the sketch, the SquareLine-designed interface should appear on the XIAO 1.47 Inch Touch Display. Interactive widgets should respond to touch input, and any configured events or animations should run as designed.

TODO: Add the final result description and image.

<div style={{textAlign:'center'}}>
  <img src="TODO_LVGL_SQUARELINE_RESULT_IMAGE" style={{width:600, height:'auto'}}/>
</div>

## Troubleshooting

### The UI does not appear

- Confirm that the basic display example works.
- Confirm that the display flush callback is registered.
- Confirm that `ui_init()` is called.
- Confirm that `lv_timer_handler()` is called regularly.

### The UI is rotated or clipped

- Confirm the SquareLine project resolution is `172 × 320`.
- Confirm the display rotation used in the Arduino sketch.
- Confirm that the LVGL horizontal and vertical resolutions match the selected orientation.

### Compilation reports missing widgets or fonts

- Confirm that the SquareLine and Arduino LVGL versions match.
- Enable the required widgets and fonts in `lv_conf.h`.
- Confirm that all exported UI and asset files are included.

### Touch input is incorrect

- Confirm that the basic touch example works.
- Check the touch coordinate mapping and display rotation.
- Confirm that the LVGL input device read callback is registered.

### Touch controls do not respond

- Check the widget hierarchy.
- Make sure another large clickable widget is not covering the control.
- Confirm that the widget's clickable flag and event are configured.

### The interface uses too much memory

- Reduce the LVGL draw buffer size.
- Remove unused fonts, images, screens, and animations.
- Disable unnecessary LVGL features in `lv_conf.h`.
- Avoid using image assets larger than the display area.

## Resources

- [Getting Started with Seeed Studio XIAO 1.47 Inch Touch Display](https://wiki.seeedstudio.com/getting_started_with_XIAO_1.47_inch_touch_display/)
- [LVGL Documentation](https://docs.lvgl.io/)
- [SquareLine Studio](https://squareline.io/)
- [Seeed_GFX GitHub Repository](https://github.com/Seeed-Studio/Seeed_GFX)
- TODO: Example code repository
- TODO: SquareLine project files
