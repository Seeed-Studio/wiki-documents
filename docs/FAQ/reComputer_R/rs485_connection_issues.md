---
description: reComputer-FAQ
title: What aspects need to be checked if communication fails after connecting an RS485 device (e.g., pin wiring, termination resistors, isolation protection, baud rate configuration)
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /rs485_connection_issues
last_update:
  date: 1/5/2026
  author: Nolan Chen
---



- **Step 1.** Wiring Correctness Check (Core First Step)

Pin Alignment: Verify that the “A/B/GND” pins of the RS485 port on the reComputer R20xx are connected one-to-one with those of the slave device (refer to the pinout definition in the documentation: e.g., RS485-2_A connects to the device’s A terminal, RS485-2_B connects to the device’s B terminal, and GND must share a common ground). Cross-wiring (A to B) is strictly prohibited.
- Termination Resistors: For multi-device networks, connect a 120Ω termination resistor in parallel to the RS485 interfaces of the two end devices (resistors are included in the product package for on-demand use). Resistors can be omitted for point-to-point communication between a single master and slave device.

- **Step 2.** Hardware and Isolation Protection Check

Isolation Protection: The device’s RS485 interface supports 5kV isolation. Ensure the slave device also supports a matching isolation level to avoid common-ground interference. If the slave device has no isolation, power it separately to ensure consistent ground potential between the two devices.
Port Selection: Confirm that the physical RS485 port in use (the device has 3 ports total) corresponds to the UART port configured in software (e.g., UART1, UART2) and that no port confusion has occurred.

- **Step 3.** Communication Parameter Configuration Check

Baud Rate: Ensure the baud rate is identical between the master and slave devices (common values: 9600, 19200, 115200). Prioritize configuring it to match the slave device’s default baud rate.
Data Bits / Parity Bits / Stop Bits: The default configuration is 8N1 (8 data bits, no parity bit, 1 stop bit). This must be fully matched with the slave device; mismatched parameters will cause garbled data or communication failure.
- **Step 4.** Power Supply and Interference Troubleshooting

Power Supply Stability: Verify stable input voltages for both the master and slave devices (reComputer operates on 9–36V DC; follow the slave device’s specifications). Voltage fluctuations can lead to communication interruptions.
Environmental Interference: In industrial environments, keep the system away from strong electromagnetic interference sources such as frequency converters and motors. Use shielded cables for RS485 connections and ensure the shield layer is properly grounded.

- **Step 5.** Software and Driver Troubleshooting

Driver Installation: Confirm that the corresponding UART driver for RS485 is installed, with no missing or conflicting drivers.
Testing Tools: Use serial port debugging tools (e.g., minicom, Putty) to send test commands and check for responses. If no response is received, perform cross-tests by replacing the slave device or switching RS485 ports to locate the faulty component.