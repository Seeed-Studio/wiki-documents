---
name: Build Your Own UI Using LVGL
category: reTerminal
bzurl: 
wikiurl: 
sku: 
---

# Build Your Own UI Using LVGL

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg" alt="pir" width="800" height="auto"></p>

## Introduction

LVGL provides everything you need to create an embedded GUI with easy-to-use graphical elements, beautiful visual effects and a low memory footprint. LVGL is a graphics library targeting microcontrollers with limited resources. However it possible to use it to create embedded GUIs with high-end microprocessors and boards running Linux operation system. There are currently two ways of doing this:

- PC simulator with SDL 2 cross platform library
- simply using Linux’s frame buffer device (typically /dev/fb0).

In this Wiki article we'll use PC simulator example with SDL2 and modify it slightly to display UI full screen instead of in a window.

#### Features
* Powerful [building blocks](https://docs.lvgl.io/master/widgets/index.html): buttons, charts, lists, sliders, images, etc.
* Advanced graphics engine: animations, anti-aliasing, opacity, smooth scrolling, blending modes, etc
* Supports [various input devices](https://docs.lvgl.io/master/overview/indev.html): touchscreen, mouse, keyboard, encoder, buttons, etc.
* Supports [multiple displays](https://docs.lvgl.io/master/overview/display.html)
* Hardware independent, can be use with any microcontroller and display
* Scalable to operate with little memory (64 kB Flash, 16 kB RAM)
* Multi-language support with UTF-8 handling, CJK, Bidirectional and Arabic script support
* Fully customizable graphical elements via [CSS-like styles](https://docs.lvgl.io/master/overview/style.html)
* Powerfule layouts inspired by CSS: [Flexbox](https://docs.lvgl.io/master/layouts/flex.html) and [Grid](https://docs.lvgl.io/master/layouts/grid.html)
* OS, External memory and GPU are supported but not required. (built in support for STM32 DMA2D, and NXP PXP and VGLite)
* Smooth rendering even with a [single frame buffer](https://docs.lvgl.io/master/porting/display.html)
* Written in C and compatibile with C++
* Micropython Binding exposes [LVGL API in Micropython](https://blog.lvgl.io/2019-02-20/micropython-bindings)
* [Simulator](https://docs.lvgl.io/master/get-started/pc-simulator.html) to develop on PC without embedded hardware
* 100+ simple [Examples](https://github.com/lvgl/lvgl/tree/master/examples)
* [Documentation](http://docs.lvgl.io/) and API references online and in PDF

## Prepare Development Environment

### On reTerminal

On Rasperry Pi OS you can easily install SDL2 using a terminal:
```sudo apt-get update && sudo apt-get install -y build-essential libsdl2-dev```

Then clone the simulator project and the related sub modules:

```git clone --recursive git clone https://github.com/littlevgl/pc_simulator.git```


### On Host PC

<iframe width="800" height="450" src="https://www.youtube.com/embed/UrSkzbuuGaw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

EdgeLine is WYSIWYG editor for LVGL, that allows users create interface and then export C/Micropython code for using on target device. It is currently in beta stage in limited functionality and available for both Windows and Linux.

Windows version: [LINK](https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe)
Linux version: [LINK](https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip)

Since EdgeLine is at beta stage, check for presense of newer versions at [LVGL forum EdgeLine subforum](https://forum.lvgl.io/c/edgeline/15)

For the linux version be sure Edgeline.x86_64 and server/micropython are executable. (```chmod +x filename```)

After that EdgeLine can be run by 
```./Edgeline.x86_64```

The exported code doesn’t load any of the screens by default therefore you need to call lv_scr_load(scr_name) manually on the desired screen.



## Run demos

<p style="text-align:center;"><img src="https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif" alt="pir" width="800" height="auto"></p>


The following steps can be used with CMake on a Raspberry Pi OS.

Ensure CMake is installed, i.e. the cmake command works on the terminal.

```
cd pc_simulator/
mkdir build
cd build.
cmake ..
make -j4
```

The binary will be in ../bin/main, and can be run by typing that command:
```DISPLAY=:0 ./../bin/main```

That would display widget demo in a windowed mode - to change that to fullscreen, open 
```pc_simulator/lv_drivers/display/monitor.c```
and change #L344 to
```
static void window_create(monitor_t * m)
{
    m->window = SDL_CreateWindow("TFT Simulator",
                              SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,
                              MONITOR_HOR_RES * MONITOR_ZOOM, MONITOR_VER_RES * MONITOR_ZOOM, SDL_WINDOW_FULLSCREEN);       /*last param. SDL_WINDOW_BORDERLESS to hide borders*/

```

Additionally, change screen resolution in pc_simulator/lv_drv_conf.h #L90
```
/*-------------------
 *  Monitor of PC
 *-------------------*/
#ifndef USE_MONITOR
#  define USE_MONITOR         1
#endif

#if USE_MONITOR
#  define MONITOR_HOR_RES     1280
#  define MONITOR_VER_RES     720
```

run make command again and execute the binary to see demo application full screen!

## Build your own GUI application

WIP


## Resources

- **[GitHub]** [LVGL](https://lvgl.io/)
- **[Webpage]** [Official LVGL Documentation](https://docs.lvgl.io/master/index.html)
- **[GitHub]** [PC Simulator Source Code](https://github.com/lvgl/lv_sim_eclipse_sdl)
