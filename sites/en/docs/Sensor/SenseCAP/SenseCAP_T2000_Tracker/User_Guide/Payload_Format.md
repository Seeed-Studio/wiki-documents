---
description: SenseCAP T2000 Tracker Payload Format
title: Payload Format
keywords:
  - Tracker
  - SenseCAP
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /t2000_payload_format
last_update:
  date: 3/12/2026
  author: Janet
createdAt: '2026-03-12'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/t2000_payload_format/
---

# Payload Format

## Uplink Packet Parsing

The tracker data protocol provides different packets to correspond to different information, and the number of bytes of each packet may vary. The structure of the frame is shown in the image below. The frame content is sent in **big-endian byte order**.

|Data ID|Data Value|
| - | :- |
|1 byte|50 bytes (Max)|

**Data ID**: Function number.<br />
**Data Value**: Position, sensor data and other information.

### Power-on Packet (0x27)

The power-on packet is sent by the device immediately after booting. It contains the current configuration parameters and device status. The frame ID is `0x27`, and the total length is 46 bytes.

| 0x27 | Byte2 | Byte3~4 | Byte5~6 | Byte7 | Byte8 | Byte9~10 | Byte11~12 |
| :--: | :---: | :-----: | :-----: | :--: | :--: | :------: | :-------: |
| ID | Battery Level | Software Version | Hardware Version | Work Mode | Positioning Strategy | Heartbeat Interval | Periodic Mode Uplink Interval |

| Byte13~14 | Byte15 | Byte16 | Byte17 | Byte18 | Byte19~20 | Byte21~22 |
| :-------: | :----: | :----: | :----: | :----: | :-------: | :-------: |
| Event Mode Uplink Interval | Enable 3-Axis Accelerometer | Enable Disassembly Alarm | GNSS Scan Timeout | Enable Motion Event | 3-Axis Motion Threshold | Uplink Interval On Motion |

| Byte23 | Byte24~25 | Byte26 | Byte27~28 | Byte29 | Byte30 | Byte31~46 |
| :----: | :-------: | :----: | :-------: | :----: | :----: | :-------: |
| Enable Motionless Event | Motionless Timeout | Enable Shock Event | 3-Axis Shock Threshold | iBeacon Scan Timeout (s) | UUID Filter Valid Bytes | UUID Filter (16 Bytes) |

**Raw Payload Example**

`27 56 0100 0101 01 08 02d0 003c 003c 00 01 3c 00 001e 0005 00 0168 00 012c 03 00 00000000000000000000000000000000`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 27 | 27 is the packet ID |
| 2 | Battery Level | uint8 | 56 | `0x56` = 86(DEC)<br /> The battery level is 86% |
| 3~4 | Software Version | uint16 | 0100 | `0x0100` = v1.0<br /> The software version is v1.0 |
| 5~6 | Hardware Version | uint16 | 0101 | `0x0101` = v1.1<br /> The hardware version is v1.1 |
| 7 | Work Mode | uint8 | 01 | 01 = Periodic Mode<br />`00`: Standby Mode<br />`01`: Periodic Mode<br />`02`: Event Mode |
| 8 | Positioning Strategy | uint8 | 00 | 07 = 0x07, means the device use Bluetooth + Wi-Fi + GNSS positioning strategy <br />`00`: Only GNSS<br />`01`: Only Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Only Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 9~10 | Heartbeat Interval | uint16 | 02d0 | `0x02D0` = 720 minutes |
| 11~12 | Periodic Mode Uplink Interval | uint16 | 003c | `0x003C` = 60 minutes |
| 13~14 | Event Mode Uplink Interval | uint16 | 003c | `0x003C` = 60 minutes |
| 15 | Enable 3-Axis Accelerometer | uint8 | 00 | `00`: Disable<br />`01`: Enable |
| 16 | Enable Disassembly Alarm | uint8 | 01 | `00`: Disable<br />`01`: Enable |
| 17 | GNSS Scan Timeout | uint8 | 3c | `0x3C` = 60 seconds |
| 18 | Enable Motion Event | uint8 | 00 | `00`: Disable<br />`01`: Enable |
| 19~20 | 3-Axis Motion Threshold | uint16 | 001e | `0x001e` = 30 mg |
| 21~22 | Uplink Interval On Motion | uint16 | 0005 | `0x05` = 5 minutes |
| 23 | Enable Motionless Event | uint8 | 00 | `0x00`: Disable<br />`0x01`: Enable |
| 24~25 | Motionless Timeout | uint16 | 0168 | `0x0168` = 360 minutes |
| 26 | Enable Shock Event | uint8 | 00 | `00`: Disable<br />`01`: Enable |
| 27~28 | 3-Axis Shock Threshold | uint16 | 012c | `0x012c` = 300 mg |
| 29 | iBeacon Scan Timeout (s) | uint8 | 03 | `0x03` = 3 seconds |
| 30 | UUID Filter Valid Bytes | uint8 | 00 | Number of valid bytes in UUID filter (0–16) |
| 31~46 | UUID Filter | 16 bytes | 0000000000000000<br />0000000000000000 | 16‑byte Bluetooth UUID filter. Only first N bytes (defined by byte30) are meaningful |

### Periodic Mode Packet (0x28)

The periodic mode parameters packet contains the current work mode configuration. The frame ID is `0x28`, and the total length is 30 bytes.

| 0x28 | Byte2 | Byte3 | Byte4~5 | Byte6~7 | Byte8~9 | Byte10 | Byte11 | Byte12 | Byte13 | Byte14 | Byte15~30 |
| :--: | :---: | :---: | :-----: | :-----: | :-----: | :----: | :----: | :----: | :----: | :----: | :-------: |
| ID | Work Mode | Positioning Strategy | Heartbeat Interval | Uplink Interval | Event Mode Uplink Interval | Enable 3-Axis Accelerometer | Enable Disassembly Alarm | GNSS Scan Timeout | iBeacon Scan Timeout | UUID Filter Valid Bytes | UUID Filter (16 Bytes) |

**Raw Payload Example**

`28 01 07 02d0 003c 003c 01 00 3c 0a 10 00000000000000000000000000000000`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 28 | 28 is the packet ID |
| 2 | Work Mode | uint8 | 01 | 01 = Periodic Mode<br />`00`: Standby Mode<br />`01`: Periodic Mode<br />`02`: Event Mode |
| 3 | Positioning Strategy | uint8 | 07 | 07 = 0x07, means the device use Bluetooth + Wi-Fi + GNSS positioning strategy <br />`00`: Only GNSS<br />`01`: Only Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Only Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 4~5 | Heartbeat Interval | uint16 | 02d0 | `0x02D0` = 720 minutes |
| 6~7 | Uplink Interval | uint16 | 003c | `0x003C` = 60 minutes |
| 8~9 | Event Mode Uplink Interval | uint16 | 003c | `0x003C` = 60 minutes <br />When no event is triggered, data will be uploaded every 60 minutes.<br />|
| 10 | Enable 3-Axis Accelerometer | uint8 | 01 | `00`: Disable<br />`01`: Enable |
| 11 | Enable Disassembly Alarm | uint8 | 00 | `00`: Disable<br />`01`: Enable |
| 12 | GNSS Scan Timeout | uint8 | 3c | `0x3C` = 60 seconds |
| 13 | iBeacon Scan Timeout | uint8 | 0a | `0x0A` = 10 seconds |
| 14 | UUID Filter Valid Bytes | uint8 | 10 | Number of valid bytes in UUID filter (0–16) |
| 15~30 | UUID Filter | 16 bytes | 0000000000000000<br />0000000000000000 | 16‑byte Bluetooth UUID filter. Only first N bytes (defined by byte14) are meaningful |

### Event Mode Packet (0x29)

The event parameters packet contains the motion, motionless, and shock event configuration settings. The frame ID is `0x29`, and the total length is 12 bytes.

| 0x29 | Byte2 | Byte3~4 | Byte5~6 | Byte7 | Byte8~9 | Byte10 | Byte11~12 |
| :--: | :---: | :-----: | :-----: | :--: | :-----: | :----: | :-------: |
| ID | Enable Motion Event | 3-Axis Motion Threshold | Uplink Interval On Motion | Enable Motionless Event | Motionless Timeout | Enable Shock Event | 3-Axis Shock Threshold |

**Raw Payload Example**

`29 01 0064 001e 01 012c 00 012c`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 29 | 29 is the packet ID |
| 2 | Enable Motion Event | uint8 | 01 | `00`: Disable<br />`01`: Enable |
| 3~4 | 3-Axis Motion Threshold | uint16 | 0064 | `0x0064` = 100 mg |
| 5~6 | Uplink Interval On Motion | uint16 | 001e | `0x001E` = 30 minitues |
| 7 | Enable Motionless Event | uint8 | 01 | `0x00`: Disable<br />`0x01`: Enable |
| 8~9 | Motionless Timeout | uint16 | 012c | `0x012C` = 300 minitues |
| 10 | Enable Shock Event | uint8 | 00 | `0x00`: Disable<br />`0x01`: Enable |
| 11~12 | 3-Axis Shock Threshold | uint16 | 0000 | `0x012c` = 300 mg |

### Heartbeat Packet (0x2A)

The heartbeat packet is sent periodically by the device to report its current status. It contains basic device information and sensor states. The frame ID is `0x2A`, and the total length is 6 bytes.

| 0x2A | Byte2 | Byte3 | Byte4 | Byte5 | Byte6 |
| :--: | :---: | :---: | :---: | :---: | :---: |
| ID | Battery Level | Work Mode | Positioning Strategy | Enable 3-Axis Accelerometer | Enable Disassembly Alarm |

**Raw Payload Example**

`2a 56 01 07 01 00`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 2A | 2A is the packet ID |
| 2 | Battery Level | uint8 | 56 | `0x56` = 86(DEC)<br /> The battery level is 86% |
| 3 | Work Mode | uint8 | 01 | 01 = Periodic Mode<br />`00`: Standby Mode<br />`01`: Periodic Mode<br />`02`: Event Mode |
| 4 | Positioning Strategy | uint8 | 07 | 07 = 0x07, means the device use Bluetooth + Wi-Fi + GNSS positioning strategy <br />`00`: Only GNSS<br />`01`: Only Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Only Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 5 | Enable 3-Axis Accelerometer | uint8 | 01 | `00`: Disable<br />`01`: Enable |
| 6 | Enable Disassembly Alarm | uint8 | 00 | `00`: Disable<br />`01`: Enable |

### GNSS Location Data Packet (Accelerometer On, 0x2B)

The GPS location data packet contains GNSS positioning data along with accelerometer and battery information. The frame ID is `0x2B`, and the total length is 23 bytes.

| 0x2B | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15~18 | Byte19~22 | Byte23 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :------: | :------: | :---: |
| ID | Event Status | Motion ID | UTC Timestamp | Accelerometer X | Accelerometer Y | Accelerometer Z | Longitude | Latitude | Battery Level |

**Raw Payload Example**

`2b 0100 00 694b3dc6 032f fffe 0241 06ca5098 01587ee4 62`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 2B | 2B is the packet ID |
| 2~3 | Event Status | uint16 | 0100 | `0x0100` = disassembled event<br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event |
| 4 | Motion ID | uint8 | 00 | `0`: Does not need to be recorded as a specific motion.<br />`1~255`: Positioning data reported under the same motion status (same ID refers to the same motion) |
| 5~8 | UTC Timestamp | uint32 | 694b3dc6 | `0x694B3DC6` = 1766538694(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2025-12-24 01:11:34 |
| 9~10 | Accelerometer X | int16 | 032f | `0x032F` = 815 mg |
| 11~12 | Accelerometer Y | int16 | fffe | `0xFFFE` = -2 mg |
| 13~14 | Accelerometer Z | int16 | 0241 | `0x0241` = 577 mg |
| 15~18 | Longitude | uint32 | 06ca5098 | `0x06CA5098` = 113,922,200 → 113.922200° |
| 19~22 | Latitude | uint32 | 01587ee4 | `0x01587EE4` = 22,576,868 → 22.576868° |
| 23 | Battery Level | uint8 | 62 | `0x62` = 98% |

### Wi-Fi Location Data Packet (Accelerometer On, 0x2C)

The Wi-Fi location packet contains Wi-Fi scan results along with accelerometer and battery information. The frame ID is `0x2C`, and the total length is dynamic based on the number of Wi-Fi access points scanned (23 + (n-1) * 7 bytes, where n is the number of MAC-RSSI pairs).

| 0x2C | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 | Byte16 | Byte17+(n-1)*7 ~ Byte23+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :---: | :---: | :---------------------------: |
| ID | Event Status | Motion ID | UTC Timestamp | Accelerometer X | Accelerometer Y | Accelerometer Z | Battery Level | MAC-RSSI Count (n) | MAC-RSSI Pairs (n) |

**MAC-RSSI Format**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| MAC Address (6 bytes) | RSSI (int8) |

**Raw Payload Example**

`2c 0000 00 69685f82 0004 0015 03e5 64 05 107c61841bf8 e4 3447d468f627 e1 a4ba70bc229d d3 9483c46d5dfc d2 4c10d567b467 d0`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 2C | 2C is the packet ID |
| 2~3 | Event Status | uint16 | 0000 |`0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event|
| 4 | Motion ID | uint8 | 00 | `0`: Does not need to be recorded as a specific motion.<br />`1~255`: Positioning data reported under the same motion status (same ID refers to the same motion) |
| 5~8 | UTC Timestamp | uint32 | 69685f82 | `0x69685F82` = 1768447874(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2026-01-15 03:31:14 |
| 9~10 | Accelerometer X | int16 | 0004 | `0x0004` = 4 mg |
| 11~12 | Accelerometer Y | int16 | 0015 | `0x0015` = 21 mg |
| 13~14 | Accelerometer Z | int16 | 03e5 | `0x03E5` = 997 mg |
| 15 | Battery Level | uint8 | 64 | `0x64` = 100% |
| 16 | MAC-RSSI Count (n) | uint8 | 05 | Number of Wi-Fi access points detected (n = 5) |
| 17~23 | MAC-RSSI Pair 1 | 7 bytes | 107c61841bf8 e4 | MAC: `10:7C:61:84:1B:F8`, RSSI: `0xE4` = -28 (int8) |
| 24~30 | MAC-RSSI Pair 2 | 7 bytes | 3447d468f627 e1 | MAC: `34:47:D4:68:F6:27`, RSSI: `0xE1` = -31 (int8) |
| 31~37 | MAC-RSSI Pair 3 | 7 bytes | a4ba70bc229d d3 | MAC: `A4:BA:70:BC:22:9D`, RSSI: `0xD3` = -45 (int8) |
| 38~44 | MAC-RSSI Pair 4 | 7 bytes | 9483c46d5dfc d2 | MAC: `94:83:C4:6D:5D:FC`, RSSI: `0xD2` = -46 (int8) |
| 45~51 | MAC-RSSI Pair 5 | 7 bytes | 4c10d567b467 d0 | MAC: `4C:10:D5:67:B4:67`, RSSI: `0xD0` = -48 (int8) |

### BLE Location Data Packet (Accelerometer On,0x2D)

The BLE location packet contains Bluetooth scan results along with accelerometer and battery information. The frame ID is `0x2D`, and the total length is dynamic based on the number of Bluetooth devices scanned (23 + (n-1) * 7 bytes, where n is the number of MAC-RSSI pairs, maximum n = 5).

| 0x2D | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 | Byte16 | Byte17+(n-1)*7 ~ Byte23+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :---: | :---: | :---------------------------: |
| ID | Event Status | Motion ID | UTC Timestamp | Accelerometer X | Accelerometer Y | Accelerometer Z | Battery Level | MAC-RSSI Count (n) | MAC-RSSI Pairs (n) |

**MAC-RSSI Format**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| MAC Address (6 bytes) | RSSI (int8) |

**Raw Payload Example**

`2d 0000 00 69686032 fff9 0015 03df 64 05 c30000564b3b ce c20303003f00 ce 588c81a0fbf2 cc c20303003f03 cb c30000564af2 c7`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 2D | 2D is the packet ID |
| 2~3 | Event Status | uint16 | 0000 |`0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event|
| 4 | Motion ID | uint8 | 00 | `0`: Does not need to be recorded as a specific motion.<br />`1~255`: Positioning data reported under the same motion status (same ID refers to the same motion) |
| 5~8 | UTC Timestamp | uint32 | 69686032 | `0x69686032` = 1768448050(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2026-01-15 03:34:10 |
| 9~10 | Accelerometer X | int16 | fff9 | `0xFFF9` = -7 mg |
| 11~12 | Accelerometer Y | int16 | 0015 | `0x0015` = 21 mg |
| 13~14 | Accelerometer Z | int16 | 03df | `0x03DF` = 991 mg |
| 15 | Battery Level | uint8 | 64 | `0x64` = 100% |
| 16 | MAC-RSSI Count (n) | uint8 | 05 | Number of Bluetooth devices detected (n = 5, maximum 5) |
| 17~23 | MAC-RSSI Pair 1 | 7 bytes | c30000564b3b ce | MAC: `C3:00:00:56:4B:3B`, RSSI: `0xCE` = -50 (int8) |
| 24~30 | MAC-RSSI Pair 2 | 7 bytes | c20303003f00 ce | MAC: `C2:03:03:00:3F:00`, RSSI: `0xCE` = -50 (int8) |
| 31~37 | MAC-RSSI Pair 3 | 7 bytes | 588c81a0fbf2 cc | MAC: `58:8C:81:A0:FB:F2`, RSSI: `0xCC` = -52 (int8) |
| 38~44 | MAC-RSSI Pair 4 | 7 bytes | c20303003f03 cb | MAC: `C2:03:03:00:3F:03`, RSSI: `0xCB` = -53 (int8) |
| 45~51 | MAC-RSSI Pair 5 | 7 bytes | c30000564af2 c7 | MAC: `C3:00:00:56:4A:F2`, RSSI: `0xC7` = -57 (int8) |

### GNSS Location Data Packet(Accelerometer Off, 0x2E)

The GNSS location data packet contains GPS positioning data along with battery information. The frame ID is `0x2E`, and the total length is 17 bytes.

| 0x2E | Byte2~3 | Byte4 | Byte5~8 | Byte9~12 | Byte13~16 | Byte17 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :----: |
| ID | Event Status | Motion ID | UTC Timestamp | Longitude | Latitude | Battery Level |

**Raw Payload Example**

`2e 0100 01 64f1a2b3 06ca5098 01587ee4 62`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 2E | 2E is the packet ID |
| 2~3 | Event Status | uint16 | 0000 |`0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event|
| 4 | Motion ID | uint8 | 00 | `0`: Does not need to be recorded as a specific motion.<br />`1~255`: Positioning data reported under the same motion status (same ID refers to the same motion) |
| 5~8 | UTC Timestamp | uint32 | 64f1a2b3 | `0x64f1a2b3` = 1693557427(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2023-09-01 08:37:07 |
| 9~12 | Longitude | uint32 | 06ca5098 | `0x06CA5098` = 113,922,200 → 113.922200° |
| 13~16 | Latitude | uint32 | 01587ee4 | `0x01587EE4` = 22,576,868 → 22.576868° |
| 17 | Battery Level | uint8 | 62 | `0x62` = 98% |

### Wi-Fi Location Data Packet (Accelerometer Off, 0x2F)

The Wi-Fi location data packet contains Wi-Fi scan results along with battery information. The frame ID is `0x2F`, and the total length is dynamic based on the number of Wi-Fi access points scanned (17 + (n-1) * 7 bytes, where n is the number of MAC-RSSI pairs, maximum n = 5).

| 0x2F | Byte2~3 | Byte4 | Byte5~8 | Byte9 | Byte10 | Byte11+(n-1)*7 ~ Byte16+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :---: | :----: | :---------------------------: |
| ID | Event Status | Motion ID | UTC Timestamp | Battery Level | MAC-RSSI Count (n) | MAC-RSSI Pairs (n) |

**MAC-RSSI Format**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| MAC Address (6 bytes) | RSSI (int8) |

**Raw Payload Example**

`2f 0000 00 69685f82 64 05 107c61841bf8 e4 3447d468f627 e1 a4ba70bc229d d3 9483c46d5dfc d2 4c10d567b467 d0`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 2F | 2F is the packet ID |
| 2~3 | Event Status | uint16 | 0000 |`0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event|
| 4 | Motion ID | uint8 | 00 | `0`: Does not need to be recorded as a specific motion.<br />`1~255`: Positioning data reported under the same motion status (same ID refers to the same motion) |
| 5~8 | UTC Timestamp | uint32 | 69685f82 | `0x69685F82` = 1768447874(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2026-01-15 03:31:14 |
| 9 | Battery Level | uint8 | 64 | `0x64` = 100% |
| 10 | MAC-RSSI Count (n) | uint8 | 05 | Number of Wi-Fi access points detected (n = 5, maximum 5) |
| 11~17 | MAC-RSSI Pair 1 | 7 bytes | 107c61841bf8 e4 | MAC: `10:7C:61:84:1B:F8`,<br /> RSSI: `0xE4` = -28 (int8) |
| 18~24 | MAC-RSSI Pair 2 | 7 bytes | 3447d468f627 e1 | MAC: `34:47:D4:68:F6:27`,<br /> RSSI: `0xE1` = -31 (int8) |
| 25~31 | MAC-RSSI Pair 3 | 7 bytes | a4ba70bc229d d3 | MAC: `A4:BA:70:BC:22:9D`,<br /> RSSI: `0xD3` = -45 (int8) |
| 32~38 | MAC-RSSI Pair 4 | 7 bytes | 9483c46d5dfc d2 | MAC: `94:83:C4:6D:5D:FC`,<br /> RSSI: `0xD2` = -46 (int8) |
| 39~45 | MAC-RSSI Pair 5 | 7 bytes | 4c10d567b467 d0 | MAC: `4C:10:D5:67:B4:67`,<br /> RSSI: `0xD0` = -48 (int8) |

### BLE Location Data Packet (Accelerometer Off, 0x30)

The BLE location data packet contains Bluetooth scan results along with battery information. The frame ID is `0x30`, and the total length is dynamic based on the number of Bluetooth devices scanned (17 + (n-1) * 7 bytes, where n is the number of MAC-RSSI pairs, maximum n = 5).

| 0x30 | Byte2~3 | Byte4 | Byte5~8 | Byte9 | Byte10 | Byte11+(n-1)*7 ~ Byte16+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :---: | :----: | :---------------------------: |
| ID | Event Status | Motion ID | UTC Timestamp | Battery Level | MAC-RSSI Count (n) | MAC-RSSI Pairs (n) |

**MAC-RSSI Format**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| MAC Address (6 bytes) | RSSI (int8) |

**Raw Payload Example**

`30 0000 00 69686032 64 05 c30000564b3b ce c20303003f00 ce 588c81a0fbf2 cc c20303003f03 cb c30000564af2 c7`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 30 | 30 is the packet ID |
| 2~3 | Event Status | uint16 | 0000 |`0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event|
| 4 | Motion ID | uint8 | 00 | `0`: Does not need to be recorded as a specific motion.<br />`1~255`: Positioning data reported under the same motion status (same ID refers to the same motion) |
| 5~8 | UTC Timestamp | uint32 | 69686032 | `0x69686032` = 1768448050(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2026-01-15 03:34:10 |
| 9 | Battery Level | uint8 | 64 | `0x64` = 100% |
| 10 | MAC-RSSI Count (n) | uint8 | 05 | Number of Bluetooth devices detected (n = 5, maximum 5) |
| 11~17 | MAC-RSSI Pair 1 | 7 bytes | c30000564b3b ce | MAC: `C3:00:00:56:4B:3B`,<br /> RSSI: `0xCE` = -50 (int8) |
| 18~24 | MAC-RSSI Pair 2 | 7 bytes | c20303003f00 ce | MAC: `C2:03:03:00:3F:00`,<br /> RSSI: `0xCE` = -50 (int8) |
| 25~31 | MAC-RSSI Pair 3 | 7 bytes | 588c81a0fbf2 cc | MAC: `58:8C:81:A0:FB:F2`,<br /> RSSI: `0xCC` = -52 (int8) |
| 32~38 | MAC-RSSI Pair 4 | 7 bytes | c20303003f03 cb | MAC: `C2:03:03:00:3F:03`,<br /> RSSI: `0xCB` = -53 (int8) |
| 39~45 | MAC-RSSI Pair 5 | 7 bytes | c30000564af2 c7 | MAC: `C3:00:00:56:4A:F2`,<br /> RSSI: `0xC7` = -57 (int8) |

### Positioning Status Packet with Accelerometer (0x31)

The positioning status packet contains the positioning status along with accelerometer data, event status, and battery information. The frame ID is `0x31`, and the total length is 15 bytes.

| 0x31 | Byte2 | Byte3~4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 |
| :--: | :---: | :-----: | :-----: | :------: | :-------: | :-------: | :---: |
| ID | Positioning Status | Event Status | UTC Timestamp | Accelerometer X | Accelerometer Y | Accelerometer Z | Battery Level |

**Raw Payload Example**

`31 00 0100 694b3db0 003a 039d fe84 62`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 31 | 31 is the packet ID |
| 2 | Positioning Status | uint8 | 00 |`0x00`: locate successful.<br />`0x01`: The GNSS scan timed out.<br />`0x02`: The Wi-Fi scan timed out.<br />`0x03`: The Wi-Fi + GNSS scan timed out.<br />`0x04`: The GNSS + Wi-Fi scan timed out.<br />`0x05`: The Bluetooth scan timed out.<br />`0x06`: The Bluetooth + Wi-Fi scan timed out.<br />`0x07`: The Bluetooth + GNSS scan timed out.<br />`0x08`: The Bluetooth + Wi-Fi + GNSS scan timed out.<br />`0x09`: Location Server failed to parse the GNSS location.<br />`0x0A`: Location Server failed to parse the Wi-Fi location.<br />`0x0B`: Location Server failed to parse the Bluetooth location.<br />`0x0C`: Failed to parse location due to the poor accuracy.<br />`0x0D`: Time synchronization failed.<br />`0x0E`: Failed due to the old Almanac.<br />`0x0F`: The GNSS + Bluetooth scan timed out. |
| 3~4 | Event Status | uint16 | 0000 |`0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event |
| 5~8 | UTC Timestamp | uint32 | 694B3DB0 | `0x694B3DB0` = 1766538672(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2025-12-24 01:11:12 |
| 9~10 | Accelerometer X | int16 | 003a | `0x003A` = 58 mg |
| 11~12 | Accelerometer Y | int16 | 039d | `0x039D` = 925 mg |
| 13~14 | Accelerometer Z | int16 | fe84 | `0xFE84` = -380 mg |
| 15 | Battery Level | uint8 | 62 | `0x62` = 98% |

### Positioning Status Packet (Accelerometer Off, 0x32)

The positioning status packet contains the positioning status along with event status and battery information. The frame ID is `0x32`, and the total length is 9 bytes.

| 0x32 | Byte2 | Byte3~4 | Byte5~8 | Byte9 |
| :--: | :---: | :-----: | :-----: | :---: |
| ID | Positioning Status | Event Status | UTC Timestamp | Battery Level |

**Raw Payload Example**

`32 00 0100 694b3db0 62`

| Byte | Value | Type | Raw Data | Description |
| :---: | :--- | :---: | :---: | :--- |
| 1 | Frame ID | uint8 | 32 | 32 is the packet ID |
| 2 | Positioning Status | uint8 | 00 |`0x00`: locate successful.<br />`0x01`: The GNSS scan timed out.<br />`0x02`: The Wi-Fi scan timed out.<br />`0x03`: The Wi-Fi + GNSS scan timed out.<br />`0x04`: The GNSS + Wi-Fi scan timed out.<br />`0x05`: The Bluetooth scan timed out.<br />`0x06`: The Bluetooth + Wi-Fi scan timed out.<br />`0x07`: The Bluetooth + GNSS scan timed out.<br />`0x08`: The Bluetooth + Wi-Fi + GNSS scan timed out.<br />`0x09`: Location Server failed to parse the GNSS location.<br />`0x0A`: Location Server failed to parse the Wi-Fi location.<br />`0x0B`: Location Server failed to parse the Bluetooth location.<br />`0x0C`: Failed to parse location due to the poor accuracy.<br />`0x0D`: Time synchronization failed.<br />`0x0E`: Failed due to the old Almanac.<br />`0x0F`: The GNSS + Bluetooth scan timed out. |
| 3~4 | Event Status | uint16 | 0100 | `0x0000` = No events triggered <br />Bit 0: false<br />Bit 1: Start moving event<br />Bit 2: End movement event<br />Bit 3: Motionless event<br />Bit 4: Shock event<br />Bit 5: Temperature event <br />Bit 6: Light event<br />Bit 7: SOS event<br />Bit 8: Press once event<br />Bit 9: Disassembled event <br /><br />Convert to hexadecimal:<br />`0x0001`: Start moving event<br />`0x0002`: End movement event<br />`0x0004`: Motionless event<br />`0x0008`: Shock event<br />`0x0010`: Temperature event<br />`0x0020`: Light event<br />`0x0040`: SOS event<br />`0x0080`: Press once event<br />`0x0100`: Disassembled event |
| 5~8 | UTC Timestamp | uint32 | 694B3DB0 | `0x694B3DB0` = 1766538672(DEC) seconds<br /><br />Convert it to UTC Time:<br /> 2025-12-24 01:11:12 |
| 9 | Battery Level | uint8 | 62 | `0x62` = 98% |

## Downlink Packet, FPort=5

The tracker supports LoRaWAN to downlink some commands to adjust parameters. If the device is hibernated, the downlink command takes effect the next time the device wakes up to upload data. 

Due to the LoRaWAN Class A, where downlink windows only open following an uplink, commands are not real-time. For instance, if the reporting interval is set to 10 minutes, it may take up to 10 minutes for the device to receive the downlink command during its next transmission window.

**Note: FPort=5**

### Request Device Status Packet (0x8F)

|0x8F|
| - |
|ID|

Example:

8F: Request the latest device status and location packet.

### Setting Work Mode & Positioning Strategy (0x90)

|0x90|Byte2|Byte3|Byte4~5|Byte6~7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Work Mode|Positioning Strategy|Heartbeat Interval|Periodic Mode Uplink Interval|Event Mode Uplink Interval|

|Byte10|Byte11|Byte12|Byte13|Byte14|Byte15~30|
| - | - | - | - | - | :- |
|Enable 3-Axis Accelerometer|Enable Disassemble Alarm|GNSS Scan Timeout(S)|iBeacon Scan Timeout(S)|UUID Filter Valid Byte|UUID Filter|

Note:  
Heartbeat Interval / Periodic Mode Uplink Interval / Event Mode Uplink Interval unit: **minutes**

Example:

`90 01 01 02d0 0014 0005 01 01 1e 0a 10 00000000000000000000000000000000`


|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|90|90 is the packet ID|
|2|Work Mode|uint8|01|01 = Periodic Mode<br />`00`: Standby Mode<br />`01`: Periodic Mode<br />`02`: Event Mode|
|3|Positioning Strategy|uint8|01|`00`: Only GNSS<br />`01`: Only Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Only Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
|4~5|Heartbeat Interval | uint16 | 02d0 | `0x02D0` = 720 minutes|
|6~7|Periodic Mode Uplink Interval|uint16|0014|`0x0014` = 20 minutes |
|8~9|Event Mode Uplink Interval|uint16|0005|`0x0005` = 5 minutes<br />When no event is triggered, data will be uploaded every 5 minutes.<br />|
|10|Enable 3-Axis Accelerometer|uint8|01|`00`: Disable<br />`01`: Enable|
|11|Enable Disassembly Alarm|uint8|01|`00`: Disable<br />`01`: Enable|
|12|GNSS scan timeout|uint8|1E|`0x1E` = 30 seconds |
|13|iBeacon scan timeout|uint8|0A|`0x0A` = 10 seconds |
|14|UUID Filter Valid Bytes|uint8|10| Number of valid bytes in UUID filter (0–16)|
|15~30|UUID Filter| 16 bytes | 0000000000000000<br />0000000000000000 | 16‑byte Bluetooth UUID filter. Only first N bytes (defined by byte30) are meaningful|


### Setting Event Mode Threshold (0x91)

|0x91|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Enable Motion Event|3-Axis Motion Threshold|Uplink Interval On Motion|Enable Motionless Event|Motionless Timeout|

|Byte10|Byte11~12|
| - | :- |
|Enable Shock Event|3-Axis Shock Threshold|


Example:

`91 01 001e 0005 01 01 2c`

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|91|91 is the packet ID|
|2|Enable Motion Event|uint8|01|`00`: Disable<br />`01`: Enable|
|3~4|3-Axis Motion Threshold|uint16|001e|`0x001E` = 30 mg<br />When the acceleration exceeds 30 mg, the device determines it is in motion<br />|
|5~6|Uplink Interval On Motion|uint16|0005|`0x0005` = 5 minutes<br />When motion is detected, the reporting interval is 5 minutes<br />|
|7|Enable Motionless Event|uint8|01|`00`: Disable<br />`01`: Enable|
|8~9|Motionless Timeout|uint16|012c|`0x012C` = 300 minutes<br />If the device remains stationary for more than 300 minutes, a motionless event will be triggered<br />|
|10|Enable Shock Event|uint8|01|`00`: Disable<br />`01`: Enable|
|11~12|3-Axis Shock Threshold|uint16|012c|`0x012C` = 300 mg<br />When the acceleration exceeds 300 mg, the shock event will be triggered<br />|

### Request Device Status Packet (0x92)

|0x92|
| - |
|ID|

Example:

92: Force a GNSS location fix.

### Setting Work Mode & Positioning Strategy & Event Mode Threshold (0x97)

|0x97|Byte2|Byte3|Byte4~5|Byte6~7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Working Mode|Positioning Strategy|Heartbeat Interval|Periodic Mode Uplink Interval|Event Mode Uplink Interval|

|Byte10|Byte11|Byte12|Byte13|Byte14|Byte15~30|
| - | :- | :- | :- | :- | :- |
|Enable 3-Axis Accelerometer|Enable Disassembly Alarm|GNSS Scan Timeout |iBeacon Scan Timeout |UUID Filter Valid Bytes|UUID Filter|

#### Motion Event Settings
|Byte31|Byte32~33|Byte34~35|
| - | :- | :- |
|Enable Motion Event|3-Axis Motion Threshold|Uplink Interval On Motion|

#### Motionless Event Settings
|Byte36|Byte37~38|
| - | :- |
|Enable Motionless Event|Motionless Timeout|


#### Shock Event Settings
|Byte39|Byte40~41|
| - | :- |
|Enable Shock Event|3-Axis Shock Threshold|

Example:

`97 01 02 003c 001e 000a 01 01 0a 05 10 00000000000000000000000000000000 01 001e 0005 01 012c 01 012c`

|**Byte**|**Value**|**Type**|**Raw Data**|**Description**|
| - | - | - | - | - |
|1|Frame ID|uint8|97|97 is the packet ID|
|2|Work Mode|uint8|01|`00`: Standby Mode<br />`01`: Periodic Mode<br />`02`: Event Mode|
|3|Positioning Strategy|uint8|02|`00`: Only GNSS<br />`01`: Only Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Only Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
|4~5|Heartbeat Interval|uint16|003c|`0x003C` = 60 seconds|
|6~7|Periodic Mode Uplink Interval|uint16|001e|`0x001E` = 30 seconds|
|8~9|Event Mode Uplink Interval|uint16|000a|`0x000A` = 10 minutes<br />When no event is triggered, data will be uploaded every 10 minutes.<br />|
|10|Enable 3-Axis Accelerometer|uint8|01|`00`: Disable<br />`01`: Enable|
|11|Enable Disassembly Alarm|uint8|01|`00`: Disable<br />`01`: Enable|
|12|GNSS Scan Timeout|uint8|0a|`0x0A` = 10 seconds|
|13|iBeacon Scan Timeout|uint8|05|`0x05` = 5 seconds|
|14|UUID Filter Valid Bytes|uint8|10|`0x10` = 16 bytes|
|15~30|UUID Filter|byte[16]|0000000000000000<br />0000000000000000|UUID filter value (16 bytes)<br />|
|31|Enable Motion Event|uint8|01|`00`: Disable<br />`01`: Enable|
|32~33|3-Axis Motion Threshold|uint16|001e|`0x001E` = 30 mg |
|34~35|Uplink Interval On Motion|uint16|0005|`0x0005` = 5 minutes<br />When motion is detected, the reporting interval is 5 minutes|
|36|Enable Motionless Event|uint8|01|`00`: Disable<br />`01`: Enable|
|37~38|Motionless Timeout|uint16|012c|`0x012C` = 300 minutes |
|39|Enable Shock Event|uint8|01|`00`: Disable<br />`01`: Enable|
|40~41|3-Axis Shock Threshold|uint16|012c|`0x012C` = 300 mg |

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>