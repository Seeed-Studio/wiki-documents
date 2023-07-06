---
description: Seeed Studio Round Display for XIAO-FAQ
title: Why do I get an error when I use XIAO nRF52840 (Sense)?
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /error_when_use_XIAOnRF52840
last_update:
  date: 6/30/2023
  author: cheng.tang
---
When using the content of this tutorial, two different types of problems may occur for the XIAO nRF52840.

1. Compatibility issues between nRF52840 and TFT library.

  If you are using TFT library, compile and upload without any error, very smooth. But when you are displaying it, you find that there is no image. Then you may have encountered a compatibility issue between nRF52840 and TFT library. This means you can only replace XIAO or use Arduino GFX library to finish the image.

2. Compilation error caused by choosing the wrong development board.

If you are having problems with the compilation process. The error message is usually about an SPI error, for example `'SPI_X' was not declared in this scope`
. Then it means that you are choosing the wrong type of development board. To use all of this tutorial, you need to use the **non-mbed** version of the XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>
