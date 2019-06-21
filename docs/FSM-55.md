---
name: FSM-55
category: MakerPro
bzurl: https://www.seeedstudio.com/FSM-55-LED-Matrix-Display-p-2121.html
oldwikiname:  FSM-55
prodimagename:
surveyurl: https://www.research.net/r/FSM-55
sku:  114990088
---
![](https://github.com/SeeedDocument/FSM-55/raw/master/img/FSM-55_board.jpg)

FSM-55 (Flying Stone Mini 55) is a small board to play 5x5 LED matrix
display.  It was named after its LED matrix.

###   Pronunciation

Please say, F-S-M "Go" "Go", since "Go" is the pronunciation of 5 in Japanese.

##   Your Computing Freedom with Reproducible Product

###   Hardware Design

Hardware design is available as free hardware design.  It is designed with KiCAD.
The license is CC-BY 3.0 Unported for its schematic design, and CC-BY-SA 3.0 Unported for its PCB design.
(This should be described in its README, I'm going to add this soon.)

When you use the PCB design for yourself, please modify it for your own purpose.  Please not include the logo of Flying Stone Technology for your PCB.

*   http://git.gniibe.org/gitweb/?p=fsm-55.git

###   Firmware

Firmware is available as Free Software under GPLv3+.

*   http://git.gniibe.org/gitweb/?p=chopstx/chopstx.git;h=refs/heads/cortex-m0-support
<pre> $ git clone --branch cortex-m0-support git://git.gniibe.org/chopstx/chopstx.git
</pre>

The main program is under: example-fsm-55 directory.

Ah, yes.  I use my own thread library for the firmware and ported it to Cortex-M0.

###   Tool

If you are using Windows on your PC, vendor tool works well with CLI.  I got a report GUI version doesn't work well.

On free Operating system, perhaps, newer OpenOCD would work, but it didn't work for me (as of 0.8 on Debian).

I use my own tool, which originally written for Gnuk Project (for FST-01).

I needed to modify the tool (stlinkv2.py) so that it can work with Cortex-M0 MCU.

*   http://git.gniibe.org/gitweb/?p=gnuk/gnuk.git;h=refs/heads/stlink-m0-support
<pre> $ git clone --branch stlink-m0-support git://git.gniibe.org/gnuk/gnuk.git
</pre>

It was originally developed for FST-01.  And there is something specific to FST-01 like SPI flash checking.  You need to invoke it with -i option (inhibit SPI flash checking) for FSM-55.

`
`

<pre> $ stlinkv2.py -i ...
</pre>

##   Reasons: Free Tools are very important for us!

One of major reasons for this board (to be developed) was shutdown of FreeRouting.Net.
Although I (gniibe) didn't use the service, it's sad incident.  I wanted to notice many people about PCB design by Free (as in freedom) tools and current situation.

*   FreeRouting.Net: [http://freerouting.net/](http://freerouting.net/)

Another reason for this board was I (gniibe) found that OpenOCD's SWD support is getting better, it's not yet perfect.  I wanted to have more opportunities to improve situation around OpenOCD and SWD tool, by myself.

*   OpenOCD forthcoming 0.9.0: [http://openocd.sourceforge.net/](http://openocd.sourceforge.net/)

##   Products available at Seeed Bazaar

*   [FSM-55 LED Matrix Display Kit](http://www.seeedstudio.com/depot/FSM55-LED-Matrix-Display-p-2121.html) (October 2014)

*   <s>[SWD Programmer (ST-Link/V2 clone)](http://www.seeedstudio.com/depot/STLink-V2-for-STM8-STM32-interface-programmer-p-2297.html)</s>(March 2015)

*   **NOTE**: I'm not sure if ST-Link/V2 clone works for FSM-55.  FSM-55 requires NRST pin connected to the programmer.  If clone's pin of #9 works as NRST, it will be OK.  But it seems that the NRST pin and SWIM_RST is different in the original ST-Link/V2.

*   **NOTE**: I got ST-Link/V2 clone, but I can't find the way to use it.  We need to figure out how to assert pin 9 of SWIM_RST for FSM-55's NRST.  2015-05-28

*   **NOTE**: The firmware of ST-Link/V2 itself is proprietary software.  Ideally, it should be free software, too.  But, the situation of hardware development is like this, currently.  BusPirate or Versaloon could be used, instead, but those are not that stable enough for SWD, yet.

##   Links

###   Movies of FSM-55 prototype

*   [https://www.youtube.com/watch?v=7L2qUNF0v2U](https://www.youtube.com/watch?v=7L2qUNF0v2U)

*   [https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK](https://plus.google.com/111933309665296903652/posts/AMm9zEScpWK)

*   [https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr](https://plus.google.com/109927329313008001365/posts/3z5w9XwkhSr)

###   Articles by FSM-55 developer

*   Articles for FSM-55 by its developer: [http://www.gniibe.org/tag/fsm-55.html](http://www.gniibe.org/tag/fsm-55.html)

###   Philosophy

*   Graham Seaman, May 2001, "Free Hardware Design - Past, Present, Future": [https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html](https://web.archive.org/web/20140407174608/http://www.opencollector.org/Whyfree/freedesign.html)

*   Free Software and Free Hardware Designs: [https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html](https://web.archive.org/web/20140407212334/http://www.opencollector.org/Whyfree/whyfree.html)

*   Open Hardware definition in 1998: [https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html](https://web.archive.org/web/20140407171518/http://www.opencollector.org/Whyfree/open_hardware.html)

*   Definitions: [https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html](https://web.archive.org/web/20140407194913/http://www.opencollector.org/Whyfree/definitions.html)

*   Benjamin Mako Hill, June 2010, "Free Software Needs Free Tools": [http://mako.cc/writing/hill-free_tools.html](http://mako.cc/writing/hill-free_tools.html)

###   OSHW (which is not enough for FSM-55 developer)

*   Open Source Hardware: [http://freedomdefined.org/OSHW](http://freedomdefined.org/OSHW)

*   [http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions](http://www.oshwa.org/research/brief-history-of-open-source-hardware-organizations-and-definitions)

###   Open Design

*   Open Design: [https://en.wikipedia.org/wiki/Open_design](https://en.wikipedia.org/wiki/Open_design)

###   GCC

*   GCC ARM Embedded: [https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>