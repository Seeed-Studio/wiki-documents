---
description: solution for the compatibility issue between reComputer and VEYE camera
title: Solution for the Compatibility Issue between reComputer and VEYE Camera
keywords:
- reComputer
- VEYE Camera
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera
last_update:
  date: 08/01/2024
  author: Youjiang
---

The issue has been traced to a firmware problem with the USB hub chip.

The specific steps are as follows:

**STEP 1.** Use SSH to remotely log in to your Jetson device, as during the upgrade process, it is required that no external devices be connected to the USB interface.

**STEP 2.** Find a way to copy the [Camera Driver](https://files.seeedstudio.com/wiki/reComputer/Hard_ware/VEYE_Camera/vl822-fw.tar.bz2) to the Jetson system. If using a USB drive to copy, remember to unplug the USB drive after the copy is complete.

**STEP 3.** Follow the instructions below to perform the upgrade.
```sh
$ tar -xjvf vl822-fw.tar.bz2
$ cd vl822-fw
```
Then, please follow the `readme.md` file to install firmware.

**STEP 4.** Power off and wait for 5 seconds before powering on again. Then, execute the command below to confirm the version of the USB hub firmware.
```sh
$ ./run_2822_ver.sh
```

**STEP 5.** Congratulations, the upgrade has been successful. You should now be able to use i2cdetect to detect the VEYE camera at 0x3b.





## Tech Support

Please do not hesitate to submit issues into our [forum](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>