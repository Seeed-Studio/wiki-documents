---
title: BeagleBone Introduction
nointro:
---

---
BeagleBones are relatively a late comer in the microcontroller world, but the high performance and lower power consumption make it become one of the three popular platforms in the open-hardware world. Beagles mean big functionality in small packages because these little PCs can be used for all kinds of applications you've been tinkering with... and can handle many of the same tasks as your desktop PC. Similar to Arduino and Raspberry Pi, Beaglebone boards are used by artists, designers and hobbyists to realize their projects.

BeagleBone boards are wonderful boards, but people on planet Seeed are not satisfied with the current Beaglebone and want to make some differences. Just as what we have done with Seeeduino, we spoke to Beaglebone.org about our thoughts and finally got the chance to create a whole new board together with them, this is how we created Seeed Studio's own Beaglebone, the Beaglebone Green(Short as BBG).

BeagleBone Green is dirived from Beaglebone Black(Short as BBB), if you ever know about BBB , you would know that BBB is like the star board in the beagleboard family, it inherits the tiny size of Beaglebone and adds many good features while the price is much lower. When we were designing BBG, we decided to keep almost all the good features of BBB such as the tiny size, abundant interface and strong expansibility, while at the same time replaced the HDMI interface with 2 Seeed grove connector, to make it compatible with the large family of grove sensers.

Not lone afte that, we released another BeagleBone named BeagleBone Green Wireless(Short as BBGW), In addition to grove connectors, BBGW has included a high-performance flexible WiFi/Bluetooth interface, makes it become the first WiFi/Bluetooth board of the BeagleBone family.


## Product  List
---
Here is the list of the BeagleBone Boards you can find in the Seeed WiKi. The list will be constantly updated.

{{ range .Data.Pages.ByTitle }}{{ $cat1 := trim (index (split .Params.category ",") 0) " "}}{{ $cat2 := trim (index (split .Params.category ",") 1) " "}}{{if or (eq $cat1 "BeagleBone") (eq $cat2 "BeagleBone") }}- [{{.Title}}](/{{.File.BaseFileName}}/){{"\n"}}{{ end }}{{ end }}
