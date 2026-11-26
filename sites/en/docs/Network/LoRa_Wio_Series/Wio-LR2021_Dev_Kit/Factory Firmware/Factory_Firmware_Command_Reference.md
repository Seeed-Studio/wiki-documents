---
title: Factory Firmware Command Reference
description: Complete serial command reference for the Wio-LR2021 Dev Kit factory firmware
keywords:
  - serial command
  - factory firmware
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_command_reference
sku: 100038329
sidebar_position: 2
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/wio_lr2021_dev_kit_command_reference/
---

## Symbol Conventions

| Symbol | Meaning | Example |
| --- | --- | --- |
| `[ ]` | Optional parameter; the default applies when omitted | `[-p <port>]` |
| `< >` | A concrete value you must supply | `-g <gpio>` |
| `\|` | Choose one of the listed values | `<0\|1>` |
| Words without brackets | Required | `ping <host>` |
| `cmd>` | Firmware prompt; do not type it | `cmd> help` |

Values are always written as `-flag value`, for example `gpio_set -g 4 -l 1`. Where the firmware also registers a long form, the long form is listed next to the short one in the parameter table.

## Command Index

| Category | Commands | What it verifies | Section |
| --- | --- | --- | --- |
| General | 1 | Serial link and on-device help | [General](#general) |
| LoRa / RF | 7 | Sub-GHz and 2.4 GHz transmit, receive, CW and FLRC | [LoRa / RF](#lora-rf) |
| BLE | 2 | Advertising state and connection status | [BLE](#ble) |
| Wi-Fi & network | 14 | STA and AP modes, scanning, protocol version, ping | [Wi-Fi & network](#wifi-network) |
| IO expander | 8 | Pin levels, bus scan and switched rails | [IO expander](#io-expander) |
| Battery | 1 | Cell voltage and charge estimate | [Battery](#battery) |
| OLED | 3 | Display patterns and panel health | [OLED](#oled) |
| Camera | 5 | Initialization, status and HTTP preview | [Camera](#camera) |
| Audio | 7 | Record, play and stream | [Audio](#audio) |
| Flash | 3 | JEDEC ID, speed and endurance | [Flash](#flash) |

## General {#general}

### 1. help

List every registered command with a one-line description.

This command takes no parameters.

**Example:**

```bash
help
```

## LoRa / RF {#lora-rf}

These seven commands drive the on-board LR2021 transceiver through two modulation schemes: LoRa for range and FLRC for speed. Every transmit command needs an antenna on the matching connector: `SUB-1G` for sub-GHz carrier frequencies and `LR-2.4G` for the 2400 ~ 2500 MHz band. A two-board link test needs identical radio parameters on both sides.

**Note**: `lora_rx`, `flrc_rx`, `lora_tx -n 0` and `flrc_tx -c 0` run until you press `Ctrl+C`.

### 1. lora_tx

**`lora_tx [-f <freq_hz>] [-s <5-12>] [-b <0-9>] [-c <1-7>] [-p <dbm>] [--crc <0|1>] [--hdr <0|1>] [--iq <0|1>] [--net <0|1>] [-i <interval_ms>] [-d <text>] [-n <count>] [-hp <n>] [-dc <n>] [-lf <n>]`**

Send LoRa packets with the configured frequency, spreading factor and power.

| Item | Description | Data |
| --- | --- | --- |
| `-f <freq_hz>` | Transmit frequency | `150000000 ~ 2500000000` Hz; default: `868000000` |
| `-s <5-12>` | Spreading factor | `5 ~ 12`; higher is slower and reaches further; default: `7` |
| `-b <0-9>` | Bandwidth index | `0`=31k, `1`=41k, `2`=62k, `3`=125k (default), `4`=200k, `5`=250k, `6`=400k, `7`=500k, `8`=800k, `9`=1000k |
| `-c <1-7>` | Coding rate | `1 ~ 7`; `1`=4/5 is the fastest, `4`=4/8 the most robust; default: `1` |
| `-p <dbm>` | Transmit power | Sub-GHz `-10 ~ +22` dBm, 2.4 GHz `-17 ~ +12` dBm; default: `10` |
| `--crc <0\|1>` | CRC check | `0`=off, `1`=on; default: `1` |
| `--hdr <0\|1>` | Header type | `0`=implicit, `1`=explicit; default: `1` |
| `--iq <0\|1>` | IQ mode | `0`=standard, `1`=inverted; default: `0` |
| `--net <0\|1>` | Network type and sync word | `0`=private (sync word `0x12`), `1`=public (sync word `0x34`); default: `1` |
| `-i <interval_ms>` | Interval between packets | Milliseconds; default: `200`; `0`=back-to-back |
| `-d <text>` | Payload text | Default: `hello` |
| `-n <count>` | Number of packets | `0`=send until `Ctrl+C`; default: `10` |
| `-hp <n>` | PA half-power register | Debug only; leave unset in normal use |
| `-dc <n>` | PA duty-cycle register | Debug only; leave unset in normal use |
| `-lf <n>` | PA low-frequency slice register | Debug only; leave unset in normal use |

**Example:**

```bash
lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10
```

:::note
Fit the antenna first, and start `lora_rx` with the same `-f`, `-s`, `-b`, `-c`, `--hdr`, `--crc`, `--iq` and `--net` values on the second board. An out-of-range value prints an `out of bounds` warning and the command falls back: `-f` to the default frequency, `-s` to `7`, `-b` to `3`, `-c` to `1`; `-p` is clamped to the band limit. A non-numeric `-f`, or a negative `-i` or `-n`, aborts the command and sends nothing.
:::

### 2. lora_rx

**`lora_rx [-f <freq_hz>] [-s <5-12>] [-b <0-9>] [-c <1-7>] [--crc <0|1>] [--hdr <0|1>] [--plen <0-255>] [--iq <0|1>] [--net <0|1>]`**

Receive LoRa packets continuously and count them.

| Item | Description | Data |
| --- | --- | --- |
| `-f <freq_hz>` | Receive frequency | `150000000 ~ 2500000000` Hz; default: `868000000` |
| `-s <5-12>` | Spreading factor | `5 ~ 12`; default: `7` |
| `-b <0-9>` | Bandwidth index | `0`=31k, `3`=125k (default), `9`=1000k |
| `-c <1-7>` | Coding rate | `1 ~ 7`; default: `1` |
| `--crc <0\|1>` | CRC check | `0`=off, `1`=on; default: `1` |
| `--hdr <0\|1>` | Header type | `0`=implicit, `1`=explicit; default: `1` |
| `--plen <0-255>` | Payload length the receiver expects | Bytes; `0`=any length in explicit mode, implicit mode assumes `5` when omitted; default: `0` |
| `--iq <0\|1>` | IQ mode | `0`=standard, `1`=inverted; default: `0` |
| `--net <0\|1>` | Network type and sync word | `0`=private (`0x12`), `1`=public (`0x34`); default: `1` |

**Example:**

```bash
lora_rx -f 868000000 -s 7 -b 3
```

:::note
The command blocks the console until `Ctrl+C`, which prints `rx_done`, `rx_hdr_err` and `rx_crc_err`. Both boards must use the same `--hdr` value; implicit on one side and explicit on the other never receives. In implicit mode set `--plen` to the transmitter's payload length: a longer value appends garbage to the tail and a shorter one drops it. Implicit mode with `--crc 1` produced CRC failures in testing, so pair `--hdr 0` with `--crc 0`. Long runs of `hdr err` at close range mean the packets arrive back-to-back; raise the transmitter's `-i` to `100` ~ `200` and keep it longer than one packet's air time.
:::

### 3. lora_cw

**`lora_cw [-f <freq_hz>] [-p <dbm>]`**

Transmit an unmodulated continuous wave for RF power measurements.

| Item | Description | Data |
| --- | --- | --- |
| `-f <freq_hz>` | Carrier frequency | `150000000 ~ 2500000000` Hz; default: `868000000`; an out-of-range or non-numeric value aborts the command |
| `-p <dbm>` | Transmit power | Sub-GHz `-10 ~ +22` dBm, 2.4 GHz `-17 ~ +12` dBm; default: `10`; clamped to the band limit |

**Example:**

```bash
lora_cw -f 868000000 -p 10
```

:::note
The carrier runs until `lora_cw_stop` is entered. To change power or frequency mid-test, run `lora_cw` again with the new value; the configuration restarts by itself.
:::

### 4. lora_cw_pa

**`lora_cw_pa [-f <freq_hz>] [-p <dbm>] [-h <n>] [-d <0-31>] [-l <0-15>]`**

Transmit a continuous wave with direct PA register control.

| Item | Description | Data |
| --- | --- | --- |
| `-f <freq_hz>` | Carrier frequency | `150000000 ~ 2500000000` Hz; default: `868000000` |
| `-p <dbm>` | Transmit power | Sub-GHz `-10 ~ +22` dBm, 2.4 GHz `-17 ~ +12` dBm; default: `10` |
| `-h <n>` | PA half-power value | 0.5 dB steps; sub-GHz `-19 ~ 44`, 2.4 GHz `-39 ~ 24` |
| `-d <0-31>` | PA duty cycle | `0 ~ 31` |
| `-l <0-15>` | PA low-frequency slices | `0 ~ 15` |

**Example:**

```bash
lora_cw_pa -f 868000000 -h 22 -d 0 -l 0
```

:::note
Supplying any one of `-h`, `-d` or `-l` switches the command to direct parameter mode and overrides the power table. Out-of-range values are clamped to the band limit with an `out of bounds` warning. Stop the carrier with `lora_cw_stop`.
:::

### 5. lora_cw_stop

**`lora_cw_stop`**

Stop a continuous wave started by `lora_cw` or `lora_cw_pa`.

This command takes no parameters.

**Example:**

```bash
lora_cw_stop
```

### 6. flrc_tx

**`flrc_tx [-f <freq_hz>] [-p <dbm>] [-b <0-7>] [-l <1-255>] [-c <count>]`**

Send FLRC packets with an incrementing payload, one packet per second.

| Item | Description | Data |
| --- | --- | --- |
| `-f <freq_hz>` | Transmit frequency | `415000000 ~ 940000000` Hz; default: `915000000`; out of range falls back to the default |
| `-p <dbm>` | Transmit power | `-10 ~ +22` dBm; default: `22`; clamped to the limit |
| `-b <0-7>` | Rate and bandwidth combination | `0`=2.6 Mbps (fastest) through `7`=0.26 Mbps; default: `0`; out of range falls back to `7` |
| `-l <1-255>` | Packet length | Bytes; default: `200`; out of range falls back to the default |
| `-c <count>` | Number of packets | Default: `100`; `0`=send until `Ctrl+C`; values above `500` are capped at `500` |

**Example:**

```bash
flrc_tx -f 868000000 -p 14 -l 200 -c 100
```

:::note
One packet leaves every second, so a one-minute run sends about sixty packets. Set `-c 0` to transmit without a stop until `Ctrl+C`.
:::

### 7. flrc_rx

**`flrc_rx [-f <freq_hz>] [-b <0-7>]`**

Receive FLRC packets and count good packets, header errors and CRC errors.

| Item | Description | Data |
| --- | --- | --- |
| `-f <freq_hz>` | Receive frequency | `415000000 ~ 940000000` Hz; default: `915000000`; out of range falls back to the default |
| `-b <0-7>` | Rate and bandwidth combination | `0 ~ 7`; default: `0`; out of range falls back to `7` |

**Example:**

```bash
flrc_rx -f 868000000 -b 0
```

:::note
`Ctrl+C` stops the receiver and prints the counters.
:::

## BLE {#ble}

Bluetooth is not started at boot. The first `ble -a 1` initializes the BLE stack and starts advertising; `ble -a 0` stops advertising and unloads the stack to free its memory. The device name starts with `wio-lr2021-` and the advertisement accepts connections.

### 1. ble

**`ble -a <0|1>`**

Turn Bluetooth advertising on or off.

| Item | Description | Data |
| --- | --- | --- |
| `-a <0\|1>` | Advertising switch | `1`=start advertising (initializes the stack on first use), `0`=stop advertising and release the stack; required |

**Example:**

```bash
ble -a 1
```

:::note
Search for `wio-lr2021-` from a phone with nRF Connect; the device is healthy when it appears in the list. After connecting, the app can send commands to the device and read the log lines it prints.
:::

### 2. ble_status

**`ble_status`**

Print device name, MAC address, TX power, advertising parameters and connection state.

This command takes no parameters.

**Example:**

```bash
ble_status
```

:::note
If Bluetooth has not been initialized, the command asks you to run `ble -a 1` first.
:::

## Wi-Fi & network {#wifi-network}

Wi-Fi is initialized and started automatically at boot, so none of these commands needs a manual `wifi init`. Most of them wrap Espressif's Wi-Fi test component and carry many options; the parameter tables below list the documented ones. Joining a router requires your own 2.4 GHz access point and its password.

### 1. wifi

**`wifi <status|stop|start|restart|init|deinit>`**

Query Wi-Fi state or start, stop and reinitialize the radio.

| Item | Description | Data |
| --- | --- | --- |
| `status` | Show initialization state and connection info | Most common query |
| `stop, start` | Stop or start the radio, driver retained | Power tests and interference removal |
| `restart` | Full restart: stop, deinit, init, start | Recovery after `deinit` |
| `init, deinit` | Initialize or unload the driver | R&D debugging only |

**Example:**

```bash
wifi status
```

:::note
Running `wifi init` on an already-initialized system is skipped with a single `WiFi already initialise.` warning. `wifi deinit` stops the radio first when it is still running, and `wifi status` prints `initialized` and `started` separately.
:::

### 2. wifi_count

**`wifi_count [query|clear]`**

Print or reset the Wi-Fi transmit and receive packet counters.

| Item | Description | Data |
| --- | --- | --- |
| `query` | Print the counters | Default when no argument is given |
| `clear` | Reset both counters to zero | — |

**Example:**

```bash
wifi_count
```

### 3. wifi_mode

**`wifi_mode <sta|ap|apsta>`**

Set the Wi-Fi role of the device.

| Item | Description | Data |
| --- | --- | --- |
| `sta` | Join another hotspot, like a phone | — |
| `ap` | Act as a hotspot | — |
| `apsta` | Both roles at once | — |

**Example:**

```bash
wifi_mode sta
```

### 4. wifi_protocol

**`wifi_protocol [protocol] [-i <ap|sta>]`**

Query or set the 802.11 protocol combination.

| Item | Description | Data |
| --- | --- | --- |
| `<protocol>` | Protocol combination | `b`, `b/g`, `b/g/n`; default: query the current value |
| `-i <ap\|sta>` | Interface to apply the setting to | `ap` or `sta`; default: `sta` |

**Example:**

```bash
wifi_protocol b/g/n
```

### 5. wifi_bandwidth

**`wifi_bandwidth [20|40] [-i <ap|sta>]`**

Query or set the channel bandwidth.

| Item | Description | Data |
| --- | --- | --- |
| `<20\|40>` | Channel bandwidth in MHz | `20` or `40`; default: query the current value |
| `-i <ap\|sta>` | Interface to apply the setting to | `ap` or `sta`; default: `sta` |

**Example:**

```bash
wifi_bandwidth 20
```

### 6. wifi_ps

**`wifi_ps <0|1|2>`**

Set the Wi-Fi power-save level.

| Item | Description | Data |
| --- | --- | --- |
| `0` | No power saving, highest performance | Required |
| `1` | Moderate saving | — |
| `2` | Maximum saving | — |

**Example:**

```bash
wifi_ps 0
```

### 7. wifi_country

**`wifi_country [code] [-s <start_channel>] [-n <channel_count>] [-p <auto|manual>]`**

Query or set the country code and the usable channel range.

| Item | Description | Data |
| --- | --- | --- |
| `<code>` | Two-letter country code | For example `US`; default: query the current value |
| `-s <start_channel>` | First channel of the allowed range | Channel number; default: not set |
| `-n <channel_count>` | Number of channels in the range | Count; default: not set |
| `-p <auto\|manual>` | Channel plan selection | `auto` or `manual`; default: not set |

**Example:**

```bash
wifi_country US
```

### 8. ap_set

**`ap_set <ssid> [pass] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

Turn the device into a Wi-Fi hotspot so a phone or PC can join it.

| Item | Description | Data |
| --- | --- | --- |
| `<ssid>` | Hotspot name | Required |
| `<pass>` | Hotspot password | At least 8 characters; optional |
| `-a <authmode>` | Security mode | `open`, `wep`, `wpa2`; an unrecognized name is reported and the hotspot falls back to `open`; default: not set |
| `-n <channel>` | Hotspot channel | Channel number; default: not set |
| `-m <max_conn>` | Maximum simultaneous clients | Default: `2` |

**Example:**

```bash
ap_set MyTestAP 12345678
```

**Alias**: `ap` (same as `ap_set`).

:::note
Change the password before leaving the hotspot up on a shared network, and stop it when the test ends.
:::

### 9. ap_query

**`ap_query`**

Show the current hotspot configuration and how many clients are connected.

This command takes no parameters.

**Example:**

```bash
ap_query
```

### 10. sta_connect

**`sta_connect <ssid> <pass> [-n <channel>]`**

Join a Wi-Fi hotspot you provide, as a station.

| Item | Description | Data |
| --- | --- | --- |
| `<ssid>` | Hotspot name | Required |
| `<pass>` | Hotspot password | Required |
| `-n <channel>` | Channel to join on | Optional; a known channel speeds up the connection |

**Example:**

```bash
sta_connect MyHomeWiFi 12345678
```

**Expected output:**

```bash
got ip:192.168.<x>.<y>
```

The IP address changes with every network; the success criterion is the `got ip:` line, which appears among the connection log lines.

**Alias**: `sta` (same as `sta_connect`).

:::note
Wi-Fi must be initialized and started, which is the state at boot. After `wifi stop` or `wifi deinit`, the command is refused with a hint to run `wifi restart` first. Run `sta_disconnect` before joining a different network.
:::

### 11. sta_disconnect

**`sta_disconnect`**

Disconnect from the current network and stop auto-reconnect.

This command takes no parameters.

**Example:**

```bash
sta_disconnect
```

**Alias**: `disconnect` (same as `sta_disconnect`).

### 12. sta_scan

**`sta_scan [<ssid>] [-n <channel>] [-h]`**

Scan for nearby hotspots and print name, signal strength and channel.

| Item | Description | Data |
| --- | --- | --- |
| `<ssid>` | Show only the hotspot with this name | Optional filter |
| `-n <channel>` | Scan a single channel | Channel number; optional |
| `-h` | Include hidden networks; the long form `--show-hidden` does the same | No value |

**Example:**

```bash
sta_scan
```

**Aliases**: `wifi_scan` and `scan` (same as `sta_scan`).

:::note
A scan is the fastest check of the Wi-Fi antenna and receive path: an empty list means the radio is not receiving.
:::

### 13. wifi_txpower

**`wifi_txpower [-u <value>] [--reset]`**

Read or set the Wi-Fi transmit power.

| Item | Description | Data |
| --- | --- | --- |
| `-u <value>` | Transmit power in 0.25 dBm units | For example `80` = 20 dBm; default: read the current value |
| `--reset` | Restore the default power | No value |

**Example:**

```bash
wifi_txpower -u 68
```

### 14. ping

**`ping <host> [-c <count>] [-i <interval_s>] [-s <bytes>] [-W <timeout_s>] [--abort]`**

Send ICMP echo requests to a host and report the latency.

| Item | Description | Data |
| --- | --- | --- |
| `<host>` | Target IP address or domain | Required |
| `-c <count>` | Number of echo requests | Default: `5` |
| `-i <interval_s>` | Seconds between requests | Default: `1` |
| `-s <bytes>` | Payload size per request | Default: `64` |
| `-W <timeout_s>` | Reply timeout in seconds | Default: not set |
| `--abort` | Stop a running ping | No value |

**Example:**

```bash
ping 192.168.1.1 -c 4 -i 1
```

:::note
Wi-Fi is initialized at boot; run `sta_connect` first so the device has an address and a route.
:::

## IO expander {#io-expander}

GPIO numbers are ESP32-S3 GPIO numbers; the pin functions are listed on the [Wio-LR2021 Dev Kit Pin Map](/wio_lr2021_dev_kit_getting_started). The IO expander is the PCA9535 at I²C address `0x21`. It exposes 16 pins numbered 0 ~ 15; four of them switch the camera, audio, OLED and Grove rails.

:::note
A pin that no peripheral claims stays a floating input after power-on (pull resistors off), so a raw `gpio_get` reads noise. Run `gpio_config` first: `-m 0` for input with an optional pull, `-m 1` for push-pull output, `-m 2` for open-drain output.
:::

### 1. gpio_set

**`gpio_set -g <gpio> -l <0|1>`**

Drive a GPIO high or low.

| Item | Description | Data |
| --- | --- | --- |
| `-g <gpio>` | GPIO number | Required |
| `-l <0\|1>` | Output level | `1`=high (about 3.3 V), `0`=low (0 V); required |

**Example:**

```bash
gpio_set -g 4 -l 1
```

:::note
Configure the direction with `gpio_config -m 1` before driving the pin, and verify the level with a multimeter or a loopback wire into another GPIO.
:::

### 2. gpio_get

**`gpio_get -g <gpio>`**

Read the current level of a GPIO.

| Item | Description | Data |
| --- | --- | --- |
| `-g <gpio>` | GPIO number | Required |

**Example:**

```bash
gpio_get -g 4
```

### 3. gpio_config

**`gpio_config -g <gpio> -m <0|1|2> [-p <0|1|2|3>]`**

Set the direction and the pull resistors of a GPIO.

| Item | Description | Data |
| --- | --- | --- |
| `-g <gpio>` | GPIO number | Required |
| `-m <0\|1\|2>` | Direction | `0`=input, `1`=output, `2`=open-drain output; required |
| `-p <0\|1\|2\|3>` | Pull resistors | `0`=floating (default), `1`=pull-up, `2`=pull-down, `3`=both enabled |

**Example:**

```bash
gpio_config -g 5 -m 0 -p 1
```

### 4. i2c_scan

**`i2c_scan [-b <0|1>]`**

Scan one or both I²C buses and list the addresses that respond.

| Item | Description | Data |
| --- | --- | --- |
| `-b <0\|1>` | Bus number to scan | `0` or `1`; default: scan both |

**Example:**

```bash
i2c_scan -b 0
```

:::note
On a healthy board, bus 0 shows the PCA9535 at `0x21` and, once the display rail is on, the OLED at `0x3D`. A missing address means the chip is not soldered, not powered, or not responding.
:::

### 5. io_exp_set

**`io_exp_set -i <0-15> -l <0|1>`**

Drive one pin of the IO expander high or low.

| Item | Description | Data |
| --- | --- | --- |
| `-i <0-15>` | Expander pin number | `0 ~ 15`; required |
| `-l <0\|1>` | Output level | `1`=high, `0`=low; required |

**Example:**

```bash
io_exp_set -i 3 -l 1
```

:::note
Pins `0 ~ 3` switch peripheral rails; driving them changes the power state of the camera, audio, OLED and Grove connectors.
:::

### 6. io_exp_get

**`io_exp_get -i <0-15>`**

Read one pin of the IO expander.

| Item | Description | Data |
| --- | --- | --- |
| `-i <0-15>` | Expander pin number | `0 ~ 15`; required |

**Example:**

```bash
io_exp_get -i 3
```

### 7. io_exp_config

**`io_exp_config -i <0-15> -m <0|1>`**

Set one pin of the IO expander as input or output.

| Item | Description | Data |
| --- | --- | --- |
| `-i <0-15>` | Expander pin number | `0 ~ 15`; required |
| `-m <0\|1>` | Direction | `0`=input, `1`=output; required |

**Example:**

```bash
io_exp_config -i 3 -m 1
```

### 8. io_exp_print

**`io_exp_print`**

Print the direction and level of all 16 expander pins in one table.

This command takes no parameters.

**Example:**

```bash
io_exp_print
```

## Battery {#battery}

### 1. battery_get

**`battery_get`**

Read the cell voltage in millivolts and estimate the state of charge.

This command takes no parameters.

**Example:**

```bash
battery_get
```

:::note
A cell must be connected to the `BAT-3.7V` connector for a meaningful reading; the charger reports its own state on expander pins 11 and 12.
:::

## OLED {#oled}

The first OLED command of a session powers the display rail and initializes the panel, so no separate preparation step is needed. The panel is 128 × 64 pixels and sits on the internal I²C bus at `0x3D`.

### 1. oled_test

**`oled_test -m <mode>`**

Draw one test pattern on the OLED panel.

| Item | Description | Data |
| --- | --- | --- |
| `-m <mode>` | Pattern to draw | `clear`=all pixels off<br />`solid`=all pixels on<br />`checker`=checkerboard<br />`stripes`=vertical stripes<br />`border`=black background with a border<br />`text`=status text such as `OLED OK` and the resolution<br />`scan`=scan lines; required |

**Example:**

```bash
oled_test -m text
```

:::note
`-m text` is the fastest pass/fail check of the panel: the text pattern is drawn by the same driver that draws every other pattern.
:::

### 2. oled_line_demo

**`oled_line_demo -m <checker|scan>`**

Refresh the panel segment by segment through a small line buffer.

| Item | Description | Data |
| --- | --- | --- |
| `-m <checker\|scan>` | Pattern to refresh | `checker`=checkerboard, `scan`=scan lines; required |

**Example:**

```bash
oled_line_demo -m checker
```

### 3. oled_cycle

**`oled_cycle [-d <dwell_ms>]`**

Play six test patterns in sequence and finish on its own.

| Item | Description | Data |
| --- | --- | --- |
| `-d <dwell_ms>` | Time each pattern stays on screen | Milliseconds; default: `800` |

**Example:**

```bash
oled_cycle -d 1500
```

:::note
The sequence is clear, border, text, checkerboard, stripes and scan lines. One pass covers the whole panel, which is why the production line uses it for visual inspection.
:::

## Camera {#camera}

The camera is the 2 MP GC2145 on the Media HAT; the factory firmware reads it as RGB565 and streams JPEG frames. `camera_http_start` is the shortest end-to-end check because it brings up the hotspot, the camera and the web server with one command.

### 1. camera_start

**`camera_start [-q <1-100>] [-r <qqvga|qvga|vga>] [-F <hz>]`**

Power up and initialize the camera.

| Item | Description | Data |
| --- | --- | --- |
| `-q <1-100>` | JPEG compression quality | `1 ~ 100`; default: `80` |
| `-r <qqvga\|qvga\|vga>` | Capture resolution | `qqvga`=160×120, `qvga`=320×240 (default), `vga`=640×480 |
| `-F <hz>` | Camera control bus (I²C) clock | Hz; default: `100000` |

**Example:**

```bash
camera_start -r vga
```

:::note
Running `camera_start` again with a different `-r` or `-F` restarts the camera and switches the setting. The first frames after startup are discarded as warm-up. The command is also the quickest way to confirm that the camera initializes.
:::

### 2. camera_stop

**`camera_stop`**

Stop the camera and power it off.

This command takes no parameters.

**Example:**

```bash
camera_stop
```

### 3. camera_http_start

**`camera_http_start [-s <ssid>] [-p <pwd>] [-c <1-13>] [-q <1-100>] [-f <1-30>] [-P <port>] [-r <qqvga|qvga|vga>] [-F <hz>]`**

Start the hotspot, the camera and the MJPEG web preview with one command.

| Item | Description | Data |
| --- | --- | --- |
| `-s <ssid>` | Hotspot name | Default: `wio-lr2021-camera` |
| `-p <pwd>` | Hotspot password | 8 ~ 63 characters, empty for an open network; default: `12345678` |
| `-c <1-13>` | Hotspot channel | `1 ~ 13`; default: `1` |
| `-q <1-100>` | JPEG quality | Higher is clearer and uses more bandwidth; default: `80` |
| `-f <1-30>` | Frame rate cap | Frames per second; default: `20` |
| `-P <port>` | Web server port | The video stream uses this port plus one; changing it while running restarts the web service, and an out-of-range value warns and falls back; default: `80` |
| `-r <qqvga\|qvga\|vga>` | Stream resolution | Default: `qvga` |
| `-F <hz>` | Camera control bus (I²C) clock | Hz; default: `100000` |

**Example:**

```text
camera_http_start -q 60 -f 10
```

:::note
After you change `-s`, `-p` or `-c` and run the command again, disconnect and reconnect the phone or PC from the hotspot. Otherwise the client still shows a connection while the board is unreachable.
:::

**Usage**: join the hotspot `wio-lr2021-camera` with password `12345678`, then open `http://192.168.4.1` in a browser. A live image means the camera and the Wi-Fi path both work.

:::note
The web page has no authentication. Keep the hotspot off any shared or office network, and close it with `camera_http_stop`.
:::

### 4. camera_http_stop

**`camera_http_stop`**

Stop the web server and turn off the camera and the hotspot.

This command takes no parameters.

**Example:**

```bash
camera_http_stop
```

### 5. camera_status

**`camera_status`**

Print camera, hotspot and web server state, resolution and quality.

This command takes no parameters.

**Example:**

```bash
camera_status
```

## Audio {#audio}

An audio slot is a recording buffer in RAM, so no SD card is needed: record into the slot, then play it back or stream it to a PC over the device hotspot.

### 1. audio_init

**`audio_init`**

Power up the audio circuitry and initialize the codec and microphone.

This command takes no parameters.

**Example:**

```bash
audio_init
```

:::note
The firmware runs this once at boot; use it to recover after `audio_deinit`.
:::

### 2. audio_deinit

**`audio_deinit`**

Power down the audio circuitry.

This command takes no parameters.

**Example:**

```bash
audio_deinit
```

:::note
Recording and playback stay unavailable until `audio_init` runs again. Use it for power-consumption measurements. If audio was never initialized since boot, the command is refused, so a second `audio_deinit` in a row does nothing.
:::

### 3. audio_slot_record

**`audio_slot_record [-d <100-60000>] [-m <20.0-37.5>]`**

Record from the microphone into the audio slot.

| Item | Description | Data |
| --- | --- | --- |
| `-d <100-60000>` | Recording duration | Milliseconds; `100 ~ 60000`; default: `10000` |
| `-m <20.0-37.5>` | Microphone gain | dB; `20.0 ~ 37.5`; default: `37.5` (maximum) |

**Example:**

```bash
audio_slot_record -d 5000 -m 30
```

:::note
The slot holds raw microphone data with no software processing. Speak close to the microphone during the recording. Audio is initialized at boot; after `audio_deinit`, run `audio_init` first or the command is refused.
:::

### 4. audio_slot_play

**`audio_slot_play [-v <0-100>]`**

Play the recorded slot through the speaker.

| Item | Description | Data |
| --- | --- | --- |
| `-v <0-100>` | Playback volume | `0 ~ 100`; default: keep the current volume |

**Example:**

```bash
audio_slot_play -v 80
```

:::note
Attach a speaker to the `SPK` connector on the Media HAT. The command plays whatever the slot currently holds, so record first; it is refused when audio is not initialized or the slot is empty.
:::

### 5. audio_slot_send

**`audio_slot_send [-p <port>]`**

Stream the slot over the device hotspot to a PC as a WAV file.

| Item | Description | Data |
| --- | --- | --- |
| `-p <port>` | TCP port the PC connects to | Default: `3444` |

**Example:**

```bash
audio_slot_send
```

**Usage**: join the hotspot `wio-lr2021-audio` (password `12345678`) from the PC, then run `python tools/recv_wav_from_device.py -o slot.wav`. The script connects to `192.168.4.1:3444`, reads an 8-byte header (`AUDF` magic plus the audio length) and then the audio bytes; the file plays as soon as it is written.

:::note
The command returns immediately and the transfer runs in the background. The hotspot does not close when the transfer ends, so several recordings can be sent in a row; stop it with `audio_slot_stop`.
:::

### 6. audio_slot_stop

**`audio_slot_stop`**

Stop any running transfer and close the audio hotspot.

This command takes no parameters.

**Example:**

```bash
audio_slot_stop
```

:::note
Safe to run with no transfer in progress; the only effect is closing the hotspot.
:::

### 7. audio_slot_info

**`audio_slot_info`**

Print slot state: whether a recording exists, its length, sample rate, channels, duration and free memory.

This command takes no parameters.

**Example:**

```bash
audio_slot_info
```

## Flash {#flash}

The flash endurance and speed tests work only inside the dedicated `flashtest` partition, so the firmware image and user data are never touched. `flash_endurance` runs as a background task and keeps writing while the console stays usable.

### 1. flash_info

**`flash_info`**

Read the flash JEDEC ID, vendor and capacity and verify the start and end of the test partition.

This command takes no parameters.

**Example:**

```bash
flash_info
```

:::note
Return code `0` means pass; the boundary write check catches a flash chip with an overstated capacity.
:::

### 2. flash_endurance

**`flash_endurance -a <start|stop|status> [-m <minutes>] [-s <sectors>] [-d <ms>]`**

Run an erase, write and read-back soak test in the flash test partition.

| Item | Description | Data |
| --- | --- | --- |
| `-a <start\|stop\|status>` | Action | `start`, `stop` or `status`; required |
| `-m <minutes>` | Run duration | Minutes; `0` runs until stopped; default: `1440` |
| `-s <sectors>` | Sectors written per round | `0`=the whole test partition; default: `0` |
| `-d <ms>` | Delay between sectors | Milliseconds; `0`=full speed; default: `0` |

**Example:**

```bash
flash_endurance -a start -m 60
```

:::note
The command returns immediately and the soak runs in the background; check progress with `-a status` and end it with `-a stop`. Every round wears the flash, so run it on samples rather than on every board.
:::

### 3. flash_speed

**`flash_speed [-t <kb>]`**

Measure page-program time, sector-erase time and read/write throughput.

| Item | Description | Data |
| --- | --- | --- |
| `-t <kb>` | Amount of data used for the throughput test | KB; default: `64` |

**Example:**

```bash
flash_speed -t 128
```

:::note
Return code `0` means every measurement is inside the datasheet limits.
:::

## Aliases

Five compatibility aliases are registered. They call exactly the same function as the primary command; use the primary name in scripts and documentation.

| Alias | Primary command | Note |
| --- | --- | --- |
| `ap` | `ap_set` | Same function; prefer the primary name. |
| `sta` | `sta_connect` | Same function; prefer the primary name. |
| `disconnect` | `sta_disconnect` | Same function; prefer the primary name. |
| `wifi_scan` | `sta_scan` | Same function; prefer the primary name. |
| `scan` | `sta_scan` | Same function; prefer the primary name. |

## Result Strings and Return Codes

The firmware reports results as plain text lines on the serial port and then returns to the `cmd>` prompt. The markers below are the ones documented for firmware V2.1.0; the full inventory of log prefixes is pending a serial capture on hardware.

| Marker | Where it appears | Meaning |
| --- | --- | --- |
| `cmd>` | Every command | Prompt; the firmware is ready for the next command |
| `got ip:` | `sta_connect` | The station obtained an address; the connection succeeded |
| Return code `0` | `flash_info`, `flash_speed` | Every check passed; any other code is a failure |
| `AUDF` | `audio_slot_send` receiver header | Magic at the start of the 8-byte header, followed by the audio length |
| `Alias of` | `help` listing | The entry is a compatibility alias, not a separate command |
| `out of bounds` | Parameter warnings | The value was clamped or replaced; the command still runs |
| `rx_done` / `rx_hdr_err` / `rx_crc_err` | `lora_rx` exit | Receive counters printed after `Ctrl+C` |
| `WiFi already initialise.` | `wifi init` | The driver was already initialized, so the call is skipped |

A value that cannot be parsed aborts the command and prints an English error line; an out-of-range value usually logs `out of bounds` and falls back to a documented default. The wording differs per command, so correct the flagged value and run the command again rather than matching on the sentence.

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
