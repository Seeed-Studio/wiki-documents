---
title: Dfu-util
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Dfu-util/
slug: /Dfu-util
last_update:
  date: 02/03/2022
  author: gunengyu
---

## Updating firmware with dfu-util

You will need dfu-util 0.5 or newer to download dfu files to the [DSO Nano](/DSO_Nano "DSO Nano").
Older dfu-util versions will not work. The DSO Nano, and many other devices based on ST Micro's microcontrollers, uses ST Micro's own DFU extensions (DfuSe) which are not compatible with the DFU standard.

You can find a dfu-util 0.8 package for Ubuntu 10.04 in [Tormod's PPA](https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid). Just download and install the right .deb package. The same package should install fine in any later Ubuntu version or Debian unstable as well. For other operating systems you may have to build dfu-util yourself as described at the dfu-util home page.

To download a .dfu firmware file from your computer to your Nano, run this command

```
dfu-util -a 0 -D your-firmware-file.dfu
```

You might have to rerun it a couple of times until it succeeds. If you get "permission denied" errors, prefix the command line with "sudo ".
Do not forget to repeat the command with all needed firmware files (APP and LIB).

## Downloading a non-dfuse file to a dfuse device (advanced)

A standard DFU device will accept a raw binary file from the computer and load it into the right place in flash memory.
On the other hand, with DfuSe, the addresses are given by the .dfu file and the computer has to tell the device where to load it.

So to download a raw binary file to a DfuSe device you have to know the target address.

Example, to download a raw binary file (in case you are developing):

```
dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin
dfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin
```

## How to build dfu-util from source

See the [build instructions](http://dfu-util.sourceforge.net/build.html) at the dfu-util home page.

## Links

Original forum posts and discussion:

* [Linux procedure](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1353&amp;start=10)

* [Mac OS X specific instructions](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1364)

Official home page

* [dfu-util homepage](http://dfu-util.sourceforge.net/)

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).
<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
