---
description: reComputer-FAQ
title: When the device is powered on, the PWR LED does not light up, but the power supply circuit is functioning normally. What could be the possible causes? How to troubleshoot faults in the power module or motherboard
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /abnormal_device_power_on
last_update:
  date: 1/5/2026
  author: Nolan Chen
---



### Possible Causes
Poor contact in the power supply circuit, power supply voltage/current failing to meet requirements, power module malfunction, power interface failure on the motherboard.

### Troubleshooting Steps (from easiest to most complex):

#### Recheck the Power Supply Circuit
- **Step 1.** Terminal Connections: Verify that the wiring of the 9–36V DC 2-pin terminal is secure, with no loosening or oxidation (replug and tighten the screws if necessary).
- **Step 2.** Supply Voltage: Use a multimeter to measure the output voltage of the power supply; it must fall within the 9–36V range (the device will fail to boot and the PWR LED will not light up if the voltage is out of range).
- **Step 3.** Supply Current: Confirm that the rated current of the power supply is ≥ 2A (meets the device’s peak current demand; insufficient current will result in power supply failure).
- **Step 4.** Reverse Polarity Protection: Check for reversed positive and negative power connections (the device features reverse overvoltage protection, but reversed wiring will cause the PWR LED not to light up—correct the connection immediately).
#### Test with Alternative Power Supply Method/Power Source
- **Step 1.** If DC terminal power supply is in use, switch to PoE power supply (via the ETH0 port, which must comply with the IEEE 802.3at standard with a maximum power output of 25.5W) and observe if the PWR LED lights up.
- **Step 2.** If PoE power supply fails, replace it with a known-good PoE switch or DC power adapter to rule out faults in the power source itself.
#### Troubleshoot the Power Module and Interface
- **Step 1.** Inspect the device’s power terminal for physical damage (e.g., bent or burned pins).
- **Step 2.** If a PoE module is installed, confirm that it is properly soldered to the motherboard (documentation specifies that the PoE module requires soldering; an unsoldered module will render PoE power supply ineffective).
#### Eliminate Interference from External Devices
- **Step 1.** Disconnect all external expansion modules (e.g., 4G/5G, LoRa, SSD) and peripherals (USB devices, HDMI), retain only the power supply circuit, and power on the device for testing.
- **Step 2.** If the PWR LED lights up after disconnection, a short circuit or overload in one of the external devices has triggered power supply protection. Reconnect the devices one by one to identify the faulty unit.