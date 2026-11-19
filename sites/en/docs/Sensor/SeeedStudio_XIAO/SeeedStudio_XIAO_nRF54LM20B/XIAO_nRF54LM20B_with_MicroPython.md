---
title: Seeed Studio XIAO nRF54LM20B MicroPython Basics
sidebar_label: MicroPython for XIAO
description: Flash the MicroPython firmware onto XIAO nRF54LM20B and run LED, GPIO, ADC, PWM, I2C, IMU, UART, SPI, BLE, PDM examples through USB DFU and Thonny
keywords:
  - xiao
  - nrf54lm20b
  - micropython
image: https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/xiao_nrf54lm20b_micropython.webp
slug: /xiao_nrf54lm20b_with_micropython
sku:
last_update:
  date: 11/03/2026
  author: Brandy
createdAt: '2026-10-19'
updatedAt: '2026-11-03'
url: https://wiki.seeedstudio.com/xiao_nrf54lm20b_with_micropython/
---

# Seeed Studio XIAO nRF54LM20B MicroPython Basics

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/XIAO_nRF54LM20B_Wiki_Banners/XIAO_nRF54LM20B_with_MicroPython.png" style={{width:600, height:'auto'}}/></div>

MicroPython is a lean Python implementation that runs directly on a microcontroller, exposing the hardware through a small set of intuitive modules. The XIAO nRF54LM20B runs a Zephyr-based MicroPython build that exposes GPIO, ADC, PWM, I2C, SPI, UART, the PDM microphone and BLE through the standard `machine` API. This tutorial is for first-time MicroPython users on this board: starting from flashing the firmware, it walks through each basic peripheral step by step.

## Using MicroPython with XIAO nRF54LM20B

The XIAO nRF54LM20B MicroPython image is signed with the board's factory MCUboot key and uploaded over USB DFU. The whole process needs no J-Link, OpenOCD or any external debug probe — just a USB-C cable that carries data. The board ships with the MCUboot boot chain and the verification public key already programmed in the KMU, so an ordinary user only needs the signed application firmware, flashes it over USB, then connects Thonny to the REPL and starts writing code. The steps below assume Windows; differences on macOS and Linux are noted where they apply.

### Hardware Preparation

Before you start, get one XIAO nRF54LM20B and a USB-C data cable. The Grove modules used in each demo are listed in their own sections.

<!-- TODO: board photo uses the official M20B image; the buy link temporarily points to the M20A Sense product page p-6840, to be replaced once the M20B product page is online. -->

<div className="table-center">
<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
</tr>
</table>
</div>

### Flashing the MicroPython Firmware

The board ships with the USB DFU boot chain, so flashing the MicroPython application goes over USB — a normal update needs no J-Link. This firmware build produces only one signed application image written to the fixed slot0 partition; it does not rebuild or overwrite MCUboot.

Seeed ships the MicroPython firmware and flash tooling in the `14_micropython` directory of the [XIAO_nRF54LM20B_wiki_examples](https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples) repository. It contains the signed `firmware/zephyr.signed.bin`, cross-platform USB DFU flash scripts, a portable Windows nrfutil, and an on-board test console. Clone the repository (or download the `14_micropython` directory), enter DFU mode, and run the flash script to program the firmware.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_nRF54LM20B_wiki_examples/tree/main/14_micropython" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> View the 14_micropython directory</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

**Step 1.** Clone the `XIAO_nRF54LM20B_wiki_examples` repository (or download the `14_micropython` directory as a ZIP from the link above) and open the `14_micropython` folder.

The directory holds several files, but the only firmware this tutorial flashes is **`firmware/zephyr.signed.bin`** — the MicroPython v1.27.0 runtime image. Stick to that path; do not flash anything under `tools/` or `test/`.

You will also see the flash scripts under `flash/`, the portable Windows tool under `tools/nrfutil/`, and `test/xiao_nrf54lm20b_full_test.py`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/micropython/1.png" style={{width:800, height:'auto'}}/></div>
<br/>

**Step 2.** Put the board into USB DFU mode. Connect the board with a USB-C cable, hold **USER**, press **RESET** once, release **RESET**, then release **USER**. The board enters MCUboot's USB serial-recovery mode and enumerates as a USB CDC ACM device.

**Step 3.** Run the flash script to upload the firmware.

Windows is easiest — the firmware package bundles a portable nrfutil with the mcu-manager plugin, so no Python or Nordic tools are needed. In the `14_micropython` folder double-click `flash\flash_usb_dfu.cmd`, or in PowerShell run:

```powershell
.\flash\flash_usb_dfu.cmd
```

macOS and Linux users cannot use the Windows nrfutil in the package; download and install nRF Util from Nordic's site, add it to `PATH`, install its MCU Manager plugin and the Python serial dependency, then run the shell script:

```sh
# Install nRF Util from https://www.nordicsemi.com/Products/Development-tools/nRF-Util/Download, then:
nrfutil install mcu-manager
python3 -m pip install --user pyserial
chmod +x flash/xiao_nrf54lm20b_flash.sh
./flash/xiao_nrf54lm20b_flash.sh
```

If auto port discovery fails, pass the port explicitly — on macOS it is usually `/dev/cu.usbmodem*`, on Linux `/dev/ttyACM0`:

```sh
./flash/xiao_nrf54lm20b_flash.sh firmware/zephyr.signed.bin --port /dev/cu.usbmodemXXXX
```

### Installing the Thonny IDE

Thonny is the tool used to edit, upload and run MicroPython code. Go to [thonny.org](https://thonny.org/), download the installer for your system and install it with the default options. The examples in this tutorial all run in Thonny. On macOS, if you prefer the command line, you can also install `mpremote` (`python3 -m pip install mpremote`) to connect and upload files, but the steps below use Thonny.

<!-- TODO: add Thonny download and install screenshots. -->

### Connecting the Board with Thonny

Once flashing is done and the board is reset, MicroPython is already running. Before connecting Thonny, confirm the serial port actually appears: on macOS run `ls /dev/cu.usbmodem*` in a terminal and a device should be listed; on Windows look under "Ports (COM & LPT)" in Device Manager for a XIAO nRF54LM20B COM port; on Linux run `ls /dev/ttyACM*`. If nothing shows up, try a different cable (many USB-C cables are charge-only) and press RESET once to reset the board.

With the serial port confirmed, open Thonny:

1. Click the status bar in the lower-right corner of the Thonny window and choose **Configure interpreter…**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/3.png" style={{width:800, height:'auto'}}/></div>
<br/>

2. In the "Which interpreter or device should Thonny use…" dropdown at the top, select **MicroPython (generic)**; in the **Port** dropdown below, pick the XIAO serial port (something like `COM3` on Windows, `/dev/cu.usbmodem...` on macOS, `/dev/ttyACM0` on Linux), then click **OK**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/micropython/2.png" style={{width:800, height:'auto'}}/></div>
<br/>

3. The lower-right corner now reads `MicroPython (generic) · @<your port>`, and the Shell area below shows a `>>>` prompt — the board is connected.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/micropython/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

If it returns the MicroPython version info normally, the firmware is running and you can move on to the demos below.


## LED: The First Program

The RGB LED is the most direct thing to verify — you can see the result with your own eyes — so it is the best first demo after flashing.

1. Create a file
2. Copy the code below
3. Run it, choosing MicroPython device as the destination
4. Watch the console output

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/micropython/4.png" style={{width:800, height:'auto'}}/></div>
<br/>

```python
import time
from boards.xiao import XiaoPin

led_r = XiaoPin("led_red", XiaoPin.OUT)
led_g = XiaoPin("led_green", XiaoPin.OUT)
led_b = XiaoPin("led_blue", XiaoPin.OUT)

try:
    while True:
        # common-anode, active-low: 0 lights the LED, 1 extinguishes it
        led_r.value(0); led_g.value(1); led_b.value(1)
        time.sleep(0.5)
        led_r.value(1); led_g.value(0); led_b.value(1)
        time.sleep(0.5)
        led_r.value(1); led_g.value(1); led_b.value(0)
        time.sleep(0.5)
except KeyboardInterrupt:
    print("\nInterrupted by user")
finally:
    led_r.value(1); led_g.value(1); led_b.value(1)
```

**Code notes:**

1. `from boards.xiao import XiaoPin` imports the frozen helper package; `XiaoPin("led_red"/"led_green"/"led_blue", ...)` map to P1.22 / P1.24 / P1.23 respectively, with no helper source to upload.
2. The M20B RGB LED is common-anode and active-low, so `value(0)` lights it and `value(1)` extinguishes it — the biggest difference from a generic blink example; get it backwards and the LED stays on or never lights.
3. The loop cycles red → green → blue every half second; the `finally` block turns all three off when the program stops, so the LED is not left on.

After running you will see the RGB cycle through red, green and blue; press Ctrl+C to stop and all three go off.

<!-- TODO: add a gif of the RGB cycling. -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/getting_start/10_gift.gif" style={{width:800, height:'auto'}}/></div>

## Digital

Digital pins switch external sensors and actuators by driving high and low levels. This example uses two plain GPIO pins to read a Grove Button and drive a Grove Buzzer — D0 as input, D1 as output, with no pinmux remapping involved.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Grove Base for XIAO</th>
        <th>Grove - Piezo Buzzer</th>
        <th>Grove - Button</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedfile2018-08bazaar897330_2.jpg" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/p/e/perspectiive.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Buzzer.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
          <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Button.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

By the pin assignment, **P1.0 / D0** is the input for the Grove Button and **P1.31 / D1** is the output for the Grove Buzzer. `XiaoPin(0, ...)` maps D0 to P1.0, `XiaoPin(1, ...)` maps D1 to P1.31. The full example script is in [micropython-seeed-boards/example](https://github.com/Seeed-Studio/micropython-seeed-boards/tree/master/example).

:::tip

The complete D0–D15 to SoC pin mapping, plus each pin's ADC/PWM/I2C/SPI/UART capabilities, is in the [XIAO nRF54LM20B pin multiplexing reference](https://wiki.seeedstudio.com/xiao_nrf54lm20b_pin_multiplexing/).

:::

```python
import time
from boards.xiao import XiaoPin
from machine import Pin

button = XiaoPin(0, Pin.IN)   # Grove Button has an on-board pull-down; reads 1 when pressed
buzzer = XiaoPin(1, Pin.OUT)

try:
    last = None
    while True:
        pressed = (button.value() == 1)   # on-board pull-down; reads 1 when pressed
        if pressed != last:
            last = pressed
            if pressed:
                buzzer.value(1)
                print("Button PRESSED -> Buzzer ON")
            else:
                buzzer.value(0)
                print("Button released -> Buzzer OFF")
        time.sleep(0.05)
except KeyboardInterrupt:
    print("\nInterrupted by user")
finally:
    buzzer.value(0)
```

:::caution

The buzzer must be an **active** buzzer (with a built-in oscillator). A passive piezo disc needs a PWM drive signal — use the PWM example below instead.

:::

### Result

After flashing and pressing RST once, press the Grove Button: the buzzer sounds and the Shell prints `Button PRESSED -> Buzzer ON`; release it and it prints `Button released -> Buzzer OFF`.

<div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', alignItems:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/1.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/1.gif" style={{width:400, height:'auto'}}/>
</div>
<br/>


## PWM

Pulse-width modulation is a timed waveform built on top of a digital output: it toggles the pin level at a fixed frequency and trims the high-level duty cycle within each period, delivering an equivalent analog signal to the load. It is commonly used to drive servos or dim lights. This example drives a standard servo on P1.04 / D8, stepping it through a sequence of angles.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Grove Base for XIAO</th>
        <th>Grove - Servo</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/h/t/httpsstatics3.seeedstudio.comseeedimg2016-06rjmxymiq9lqxkkxxwg6udxfm.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Servo.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

The MicroPython `boards.xiao` helper exposes PWM through `XiaoPWM(channel)`. For a servo, use channel 0 — the helper routes PWM20 channel 0 to **P1.04 / D8**. A standard servo wants a 50 Hz refresh (20 ms period), with 0.5 ms pulse width mapping to 0° and 2.5 ms to 180°. `XiaoPWM(0)` selects this channel; `init(freq=..., duty_ns=...)` sets the frequency and the pulse width in nanoseconds.

```python
import time
from boards.xiao import XiaoPWM

servo = XiaoPWM(0)  # PWM20 ch0 -> D8

try:
    for angle in (0, 90, 180, 90, 0):
        # 50 Hz servo: 0.5ms -> 0°, 2.5ms -> 180°
        duty_ns = int((500 + angle / 180 * 2000) * 1000)
        servo.init(freq=50, duty_ns=duty_ns)
        print("Angle:", angle, "deg")
        time.sleep(1)
except KeyboardInterrupt:
    print("\nInterrupted by user")
finally:
    servo.deinit()
```

:::note

Power the servo from a separate 5 V supply and tie its ground to the XIAO's ground; do not pull servo current from the board's 3.3 V rail.

:::

### Result

After flashing and pressing RST once, the servo steps through 0°, 90°, 180°, 90°, 0° once, pausing one second at each angle, and the Shell prints `Angle: N deg` at each step.

<div style={{display:'flex', justifyContent:'center', gap:'1rem', flexWrap:'wrap', alignItems:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/2.png" style={{width:400, height:'auto'}}/>
  <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/2.gif" style={{width:400, height:'auto'}}/>
</div>
<br/>

## Analog

Analog I/O is based on the analog-to-digital converter (ADC): it captures continuous voltage signals from external sensors, and a normalized 16-bit reading (0–65535) is then mapped to an engineering quantity through a linear or non-linear conversion. This example reads and prints the raw value on P1.0 / D0 (AIN0, SAADC channel 0) once every 500 ms.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Grove Base for XIAO</th>
        <th>Grove - Moisture Sensor</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/x/i/xiao_-preview-25.png" style={{width:500, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
           <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

By the pin assignment, **P1.0 / D0** (AIN0, SAADC channel 0) is the analog input. `XiaoADC` takes the silkscreen D number, not the AIN number, and `read_u16()` returns a normalized 16-bit reading (0–65535).

```python
import time
from boards.xiao import XiaoADC

adc = XiaoADC(0)  # D0 / AIN0

while True:
    raw = adc.read_u16()
    print("ADC raw:", raw)
    time.sleep(0.5)
```

### Result

After flashing and pressing RST once, insert the Grove Moisture Sensor into the medium under test; the Shell prints `ADC raw: N` twice a second.

:::tip

Approximate raw values for the Grove Moisture Sensor (16-bit `read_u16()`, 3.0 V reference):

| Condition | Sensor output voltage | Expected ADC raw |
| -------------- | -------------- | ---------------- |
| In air (dry) | ~0.1–0.4 V | ~2160–8720 |
| In wet soil | ~1.0–1.8 V | ~21840–39200 |
| Fully immersed in water | ~2.4–3.0 V | ~52320–65520 |

:::

:::caution

Due to component variation, readings from different modules under the same conditions will differ.

:::

<div style={{display:'flex', justifyContent:'center', gap:'20px'}}>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/3.png" style={{width:400, height:'auto'}}/>
    <img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/4.jpg" style={{width:400, height:'auto'}}/>
</div>
<br/>

## UART

UART is the classic asynchronous serial port: no clock line is needed, the two sides agree on a baud rate, TX and RX cross-connect with a shared ground, and full-duplex communication follows. It is commonly used for console output, peripheral debugging and point-to-point low-speed links. The M20B exposes two UARTs: `uart0` is UART20, taken by the REPL console — do not use it in your program; `uart1` is UART21, with TX on D6 (P1.08) and RX on D7 (P1.09), and this is the one for users. This example does a send/receive echo on UART21: every line that comes in from a USB-TTL adapter is echoed straight back.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>USB to TTL Converter</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-317990026-ch340g-usb-to-serial-_ttl_-module_adapter.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/CH340G-USB-to-Serial-TTL-Module-Adapter-p-2359.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

By the pin assignment, **P1.8 / D6** is UART21's TX and **P1.9 / D7** is UART21's RX. `XiaoUART("uart1", 115200, 6, 7)` opens UART21; the helper package asks for the TX and RX D numbers only for interface consistency — the actual pins are fixed by the devicetree.

```python
from boards.xiao import XiaoUART

uart = XiaoUART("uart1", 115200, 6, 7)  # UART21; TX=D6, RX=D7

print("UART21 ready")
while True:
    if uart.any():
        line = uart.readline()
        if line:
            uart.write(b"You sent: ")
            uart.write(line)
            uart.write(b"\r\n")
```


### Result

Wire it as in the table below; the board's own USB CDC stays connected to the PC and prints `UART21 ready`. Once the serial tool on the USB-TTL side is opened at 115200, type a line and press Enter, and you will receive the echo `You sent: <your input>`.

| XIAO nRF54LM20B | CH340 / USB-TTL |
| --------------- | ----- |
| GND | GND |
| P1.8 / D6 — TX | RX |
| P1.9 / D7 — RX | TX |

The USB-TTL side uses 3.3 V logic levels.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/5.png" style={{width:800, height:'auto'}}/></div>
<br/>

## I2C

I2C is a synchronous, half-duplex bus: the controller addresses one or more targets over a shared SCL clock line and SDA data line, and it is commonly used for sensors and small OLED displays that need a higher transfer rate. The M20B exposes two I2C buses through the helper package: `i2c0` maps to I2C22, with pins SDA=D4 (P1.03) and SCL=D5 (P1.07) on the pin headers, for external modules; `i2c1` maps to I2C30, on pins P0.08/P0.07, which connects the on-board LSM6DS3TR-C 6-axis IMU at address 0x6A. This example first scans the external bus to see what you connected, then reads the accelerometer and gyroscope raw values from the on-board IMU.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Seeed Studio Expansion Board Base for XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/z/h/zheng2.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

By the pin assignment, **P1.3 / D4** is i2c22's SDA and **P1.7 / D5** is i2c22's SCL. Plug an I2C Grove module into D4/D5; the snippet below scans the external bus first, then reads the on-board IMU.

```python
import time
from boards.xiao import XiaoI2C

# external bus: SDA=D4, SCL=D5
i2c = XiaoI2C("i2c0", 4, 5, 400000)
print("I2C22 devices:", [hex(d) for d in i2c.scan()])

# on-board IMU bus: I2C30, P0.08/P0.07
imu = XiaoI2C("i2c1", "imu_sda", "imu_scl", 400000)
devs = imu.scan()
print("I2C30 devices:", [hex(d) for d in devs])

if 0x6A in devs:
    # enable accelerometer (0x10) and gyroscope (0x11)
    imu.writeto_mem(0x6A, 0x10, b"\x60")
    imu.writeto_mem(0x6A, 0x11, b"\x60")
    time.sleep_ms(20)
    # read 14 bytes from 0x20: temp(2) + gyro(6) + accel(6)
    data = imu.readfrom_mem(0x6A, 0x20, 14)

    def i16(d, i):
        v = d[i] | (d[i + 1] << 8)
        return v - 65536 if v & 0x8000 else v

    temp = i16(data, 0) / 256.0 + 25.0
    gyro = [i16(data, 2 + 2 * i) for i in range(3)]
    accel = [i16(data, 8 + 2 * i) for i in range(3)]
    print("IMU temp={:.2f}C gyro={} accel={}".format(temp, gyro, accel))
else:
    print("IMU not found at 0x6A")
```

:::tip

Like UART and SPI, I2C's `sda`/`scl` arguments do not actually wire anything on Zephyr — the pinmux is fixed by the board devicetree, and the helper package only takes them for interface consistency. The physical pins are always D4/D5 (external bus) and P0.08/P0.07 (on-board IMU). Full OLED and LSM6DS3TR-C driver examples are in the `example/` directory of the repository.

:::

### Result

After flashing and pressing RST once, the Shell first prints the 7-bit addresses scanned on the external bus (an OLED commonly shows up as `0x3c`), then prints `I2C30 devices: ['0x6a']`, followed by the raw temperature, gyroscope and accelerometer values; rotate the board and the accelerometer values change with it. The SSD1306 OLED example in the repository's `example/` folder centers two lines of text on a 128×64 display, as shown below.

<div style={{display:'flex', justifyContent:'center', alignItems:'center', height:800, overflow:'visible'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/wiki/pinmax/6.jpg" style={{width:800, height:'auto', transform:'rotate(-90deg)'}}/></div>
<br/>

## SPI

SPI is a high-speed, synchronous, full-duplex bus. Unlike UART it carries a dedicated SCLK clock line for synchronization; the classic four-wire topology uses MOSI, MISO and a chip-select CS/SS. Independent send and receive channels plus a high bus clock make it a fit for bandwidth-sensitive peripherals: Flash and SD cards, high-resolution displays, high-speed sensors. The M20B's user SPI is `spi0`, which the helper package maps to SPI23, with SCK on D8 (P1.04), MOSI on D10 (P1.06) and MISO on D9 (P1.05). Because D8 is shared with PWM, if you have just run the PWM demo, call `deinit()` to release it before opening SPI. This example initializes SPI23 and sends a byte to confirm the bus is working.

### Hardware Preparation

<table align="center">
 <tr>
   <th>Seeed Studio XIAO nRF54LM20B</th>
        <th>Round Display for Seeed Studio XIAO</th>
 </tr>
 <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20B/getting_start/Seeed-Studio-XIAO-nRF54LM20B.webp" style={{width:400, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-104030087-seeed-studio-round-display-for-xiao-new-font.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF54LM20A-Sense-p-6840.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/1-28-Round-Touch-Display-for-Seeed-Studio-XIAO-ESP32.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

### Software Preparation

By the pin assignment, the SPI signals and the round-display control pins are:

| Function | D number | Physical pin |
| --- | --- | --- |
| SCK | D8 | P1.04 |
| MOSI | D10 | P1.06 |
| MISO | D9 | P1.05 |
| CS | D1 | P1.31 |
| DC | D3 | P1.29 |

The round-display module's BLK backlight is tied to 3.3 V (always on) and RST is handled by the module's power-on reset circuit, so the code only drives CS and DC. `XiaoSPI("spi0", 8000000, 8, 10, 9)` opens SPI23 at 8 MHz, mode 0; with two `XiaoPin` pins for CS/DC, it runs the GC9A01 register init sequence to light up the round display, then loops a full-screen solid-color fill. The full script is long — click below to expand.

<details>

<summary>gc9a01_lcd.py</summary>

```python
import time
from machine import Pin
from boards.xiao import XiaoPin, XiaoSPI

# CS=D1/P1.31, DC=D3/P1.29; SCK=D8, MOSI=D10, MISO=D9 (fixed by devicetree)
cs = XiaoPin(1, Pin.OUT)
dc = XiaoPin(3, Pin.OUT)
spi = XiaoSPI("spi0", 8000000, 8, 10, 9)

cs.value(1)
dc.value(1)

LCD_W = 240
LCD_H = 240

def write_command(cmd):
    dc.value(0); cs.value(0)
    spi.write(bytearray([cmd & 0xFF]))
    cs.value(1)

def write_data(data):
    dc.value(1); cs.value(0)
    if isinstance(data, int):
        spi.write(bytearray([data & 0xFF]))
    else:
        spi.write(bytearray(data))
    cs.value(1)

def set_addr_window(x0, y0, x1, y1):
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2A]))
    dc.value(1)
    spi.write(bytearray([x0>>8, x0&0xFF, x1>>8, x1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2B]))
    dc.value(1)
    spi.write(bytearray([y0>>8, y0&0xFF, y1>>8, y1&0xFF]))
    cs.value(1)
    dc.value(0); cs.value(0)
    spi.write(bytearray([0x2C]))
    cs.value(1)

def init_display():
    # module RST/BLK handled by hardware; send soft reset first
    write_command(0x01)
    time.sleep_ms(120)

    # GC9A01 full init sequence
    write_command(0xEF)
    write_command(0xEB)
    write_data(0x14)
    write_command(0xFE)
    write_command(0xEF)
    write_command(0xEB)
    write_data(0x14)
    write_command(0x84)
    write_data(0x40)
    write_command(0x85)
    write_data(0xFF)
    write_command(0x86)
    write_data(0xFF)
    write_command(0x87)
    write_data(0xFF)
    write_command(0x88)
    write_data(0x0A)
    write_command(0x89)
    write_data(0x21)
    write_command(0x8A)
    write_data(0x00)
    write_command(0x8B)
    write_data(0x80)
    write_command(0x8C)
    write_data(0x01)
    write_command(0x8D)
    write_data(0x01)
    write_command(0x8E)
    write_data(0xFF)
    write_command(0x8F)
    write_data(0xFF)
    write_command(0xB6)
    write_data(0x00)
    write_data(0x20)
    write_command(0x36)
    write_data(0x08)   # MADCTL, sets rotation
    write_command(0x3A)
    write_data(0x05)   # RGB565 16-bit
    write_command(0x90)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08)
    write_data(0x08)
    write_command(0xBD)
    write_data(0x06)
    write_command(0xBC)
    write_data(0x00)
    write_command(0xFF)
    write_data(0x60)
    write_data(0x01)
    write_data(0x04)
    write_command(0xC3)
    write_data(0x13)
    write_command(0xC4)
    write_data(0x13)
    write_command(0xC9)
    write_data(0x22)
    write_command(0xBE)
    write_data(0x11)
    write_command(0xE1)
    write_data(0x10)
    write_data(0x0E)
    write_command(0xDF)
    write_data(0x21)
    write_data(0x0c)
    write_data(0x02)
    write_command(0xF0)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)
    write_command(0xF1)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)
    write_command(0xF2)
    write_data(0x45)
    write_data(0x09)
    write_data(0x08)
    write_data(0x08)
    write_data(0x26)
    write_data(0x2A)
    write_command(0xF3)
    write_data(0x43)
    write_data(0x70)
    write_data(0x72)
    write_data(0x36)
    write_data(0x37)
    write_data(0x6F)
    write_command(0xED)
    write_data(0x1B)
    write_data(0x0B)
    write_command(0xAE)
    write_data(0x77)
    write_command(0xCD)
    write_data(0x63)
    write_command(0x70)
    write_data(0x07)
    write_data(0x07)
    write_data(0x04)
    write_data(0x0E)
    write_data(0x0F)
    write_data(0x09)
    write_data(0x07)
    write_data(0x08)
    write_data(0x03)
    write_command(0xE8)
    write_data(0x34)
    write_command(0x62)
    write_data(0x18)
    write_data(0x0D)
    write_data(0x71)
    write_data(0xED)
    write_data(0x70)
    write_data(0x70)
    write_data(0x18)
    write_data(0x0F)
    write_data(0x71)
    write_data(0xEF)
    write_data(0x70)
    write_data(0x70)
    write_command(0x63)
    write_data(0x18)
    write_data(0x11)
    write_data(0x71)
    write_data(0xF1)
    write_data(0x70)
    write_data(0x70)
    write_data(0x18)
    write_data(0x13)
    write_data(0x71)
    write_data(0xF3)
    write_data(0x70)
    write_data(0x70)
    write_command(0x64)
    write_data(0x28)
    write_data(0x29)
    write_data(0xF1)
    write_data(0x01)
    write_data(0xF1)
    write_data(0x00)
    write_data(0x07)
    write_command(0x66)
    write_data(0x3C)
    write_data(0x00)
    write_data(0xCD)
    write_data(0x67)
    write_data(0x45)
    write_data(0x45)
    write_data(0x10)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)
    write_command(0x67)
    write_data(0x00)
    write_data(0x3C)
    write_data(0x00)
    write_data(0x00)
    write_data(0x00)
    write_data(0x01)
    write_data(0x54)
    write_data(0x10)
    write_data(0x32)
    write_data(0x98)
    write_command(0x74)
    write_data(0x10)
    write_data(0x85)
    write_data(0x80)
    write_data(0x00)
    write_data(0x00)
    write_data(0x4E)
    write_data(0x00)
    write_command(0x98)
    write_data(0x3e)
    write_data(0x07)
    write_command(0x35)
    write_command(0x21)
    write_command(0x11)
    time.sleep_ms(120)
    write_command(0x29)
    time.sleep_ms(120)
    print("GC9A01 round display ready")

def fill_screen(color):
    hi = (color >> 8) & 0xFF
    lo = color & 0xFF
    set_addr_window(0, 0, LCD_W-1, LCD_H-1)
    dc.value(1); cs.value(0)
    buf = bytearray([hi, lo] * LCD_W)
    for _ in range(LCD_H):
        spi.write(buf)
    cs.value(1)

init_display()

colors = [
    (0xF800, "RED"),
    (0x07E0, "GREEN"),
    (0x001F, "BLUE"),
    (0xFFE0, "YELLOW"),
    (0x07FF, "CYAN"),
    (0xF81F, "MAGENTA"),
    (0x0000, "BLACK"),
    (0xFFFF, "WHITE"),
]

while True:
    for color, name in colors:
        print("Solid: %s" % name)
        fill_screen(color)
        time.sleep_ms(1000)
```

</details>

:::tip

`sck`/`mosi`/`miso` do not wire anything on Zephyr; the helper package takes them only for interface consistency, and SPI23 is always on D8/D10/D9. The round-display module's BLK is tied to 3.3 V (always on) and RST is handled by the module's power-on reset circuit; the code only drives CS (D1) and DC (D3). If you just ran the PWM demo, call `XiaoPWM(0).deinit()` first to release D8 for SPI.

:::

### Result

After flashing and pressing RST once, the round display fills with red, green, blue, yellow, cyan, magenta, black and white in turn, each held for about 1 second before looping; the Shell prints the color name `Solid: RED` and so on in sync.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_nRF54LM20A/getting_start/pin_spi_1.gif" style={{width:600, height:'auto'}}/></div>


## Tech Support & Product Discussion

Thank you for choosing our products! We offer several communication channels to ensure a smooth experience as you use them.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
