![](https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/s/p/spi-eu868.jpg)

<p style="text-align:center"><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-EU868-p-4889.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border=0 /></a></p> 

!!!Notes
        We has recently released the LoRa-E5 Series based on LoRa-E5 module. Click [here](https://www.seeedstudio.com/lora-c-755.html?product_list_stock=3) to meet new members of the LoRa-E5 family from the [LoRa-E5 Module](https://wiki.seeedstudio.com/LoRa-E5_STM32WLE5JC_Module/) [Grove module](https://wiki.seeedstudio.com/Grove_LoRa_E5_New_Version/), [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) to [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/). To learn more on creating a LoRaWAN End Node with STM32Cube MCU Package for STM32WL series(SDK), to join and to send data to LoRaWAN Network, read more on wiki pages for [mini Dev boards](https://wiki.seeedstudio.com/LoRa_E5_mini/) and [Development Kit](https://wiki.seeedstudio.com/LoRa_E5_Dev_Board/).


WM1302 module is a new generation of LoRaWAN gateway module with mini-PCIe form-factor. Based on the Semtech® SX1302 baseband LoRaWAN® chip, WM1302 unlocks the greater potential capacity of long-range wireless transmission for gateway products. It features higher sensitivity, less power consumption, and lower operating temperature than the previous SX1301 and SX1308 LoRa® chip. 


WM1302 LoRaWAN gateway module has SPI and USB versions on both US915 and EU868 frequency bands, enable you to have a wide-range of LoRaWAN frequency plans options to choose including EU868, US915, AS923, AS920, AU915, KR920, and IN865.


WM1302 module is CE, FCC and Telec certified, which helps simplify the development and certification process of the LoRaWAN gateway devices.
 
 
WM1302 is designed for M2M and IoT applications and can be widely applied in LPWAN gateway supported scenarios. It would be a perfect choice for you to significantly reduce the technical difficulties and time-consumption when developing the LoRa gateway devices, including LoRaWAN gateway, miner hotspots, etc.


## Features

- **Powered by Semtech® SX1302 baseband LoRa® chip**, extremely low power consumption and high performance.
- **Mini-PCIe form factor with the standard 52-pin golden finger**, easy to integrate with various gateway devices. 
- **Ultra-low operating temperature**, no additional heat dissipation needed, reducing the size of LoRaWAN gateway.
- **High sensitivity** down to -139 dBm @SF12 with SX1250 TX/RX front-end; TX power up to 26 dBm @3.3V.
- **Certified with CE, FCC, and TELEC**. Simplify the final product certification process.

## Harware Overview 

Diagram:

![](https://files.seeedstudio.com/products/114992550/diagram.png)

Pinout:

![](https://files.seeedstudio.com/products/114992550/2761616575877_.pic_hd.jpg)

![](https://files.seeedstudio.com/products/113990934/3331616653395_.pic_hd.jpg)


## Specification


<style type="text/css" xml="space"><!--
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-ev79{background-color:#efefef;border-color:#9b9b9b;color:#333333;text-align:left;vertical-align:top}
.tg .tg-4onr{background-color:#efefef;border-color:#9b9b9b;color:#343434;font-weight:bold;text-align:left;vertical-align:top}
.tg .tg-f42p{border-color:#9b9b9b;color:#333333;text-align:left;vertical-align:top}
--></style>
<table class="tg">
<thead>
<tr><th class="tg-4onr">Region</th><th class="tg-ev79">EU868</th><th class="tg-ev79">US915</th></tr>
</thead>
<tbody>
  <tr>
    <td class="tg-4onr">Frequency</td>
    <td class="tg-f42p">863-870MHz</td>
    <td class="tg-f42p">902-928MHz</td>
  </tr>
  <tr>
    <td class="tg-4onr">Sensitivity</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
    <td class="tg-f42p">-125dBm @125K/SF7<br />-139dBm @125K/SF12</td>
  </tr>
  <tr>
    <td class="tg-4onr">TX Power</td>
    <td class="tg-f42p">26 dBm (with 3.3V power supply)</td>
    <td class="tg-f42p">25 dBm (with 3.3V power supply)</td>
  </tr>
  <tr>
    <td class="tg-4onr">LEDs</td>
    <td class="tg-f42p" colspan="2">Power: Green Config: Red TX: Green RX: Blue</td>
  </tr>
  <tr>
    <td class="tg-4onr">Form Factor</td>
    <td class="tg-f42p" colspan="2">Mini PCIe, 52pin Golden Finger</td>
  </tr>
  <tr>
    <td class="tg-4onr">Power Consumption (SPI version)</td>
    <td class="tg-f42p" colspan="2">Standby: 7.5 mA<br />TX maximum power: 415 mA<br />RX: 40 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">Power Consumption (USB version)</td>
    <td class="tg-f42p" colspan="2">Standby: 20 mA<br />TX maximum power: 425 mA<br />RX: 53 mA</td>
  </tr>
  <tr>
    <td class="tg-4onr">LBT(Listen Before Talk)</td>
    <td class="tg-f42p" colspan="2">Support</td>
  </tr>
  <tr>
    <td class="tg-4onr">Antenna Connector</td>
    <td class="tg-f42p" colspan="2">U.FL</td>
  </tr>
  <tr>
    <td class="tg-4onr">Operating Temperature</td>
    <td class="tg-f42p" colspan="2">-40°C to 85°C</td>
  </tr>
  <tr>
    <td class="tg-4onr">Dimensions</td>
    <td class="tg-f42p" colspan="2">30 mm (width) × 50.95 mm (length)</td>
  </tr>
  <tr>
    <td class="tg-4onr">Certification</td>
    <td class="tg-f42p" colspan="2">CE</td>
  </tr>
</tbody>
</table>



## Application

- LPWAN Gateway devices development

- Any long-distance wireless communication application development

- LoRa and LoRaWAN application learn and research

## Dimension

![](https://files.seeedstudio.com/products/114992550/dimension.png)

<article class="markdown-body entry-content container-lg" itemprop="text">
<p><a target="_blank" rel="noopener noreferrer" href="/seeed-lora/WM1302-doc/blob/master/pinout.jpg"><img src="/seeed-lora/WM1302-doc/raw/master/pinout.jpg" alt="" style="max-width:100%;"></a></p>
<h2><a id="user-content-getting-started" class="anchor" aria-hidden="true" href="#getting-started"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Getting Started</h2>
<h3><a id="user-content-difference-between-spi-version-and-usb-version" class="anchor" aria-hidden="true" href="#difference-between-spi-version-and-usb-version"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Difference between SPI version and USB version</h3>
<p>For WM1302 LoRaWAN Gateway Module SPI version, the Semtech SX1302 and SX126x chip are conntected to Raspberry Pi via the same SPI bus with different chip select(CS) pin.</p>
<p>For WM1302 LoRaWAN Gateway Module USB version, the Semtech SX1302 and SX126x chip are conntected to a STM32L4 MCU, and this factory programmed MCU will work as a USB device, becoming a bridge between Raspberry Pi and SX1302/SX126x.</p>
<h3><a id="user-content-quick-start-with-wm1302" class="anchor" aria-hidden="true" href="#quick-start-with-wm1302"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Quick Start with WM1302</h3>
<h4><a id="user-content-hardware-required" class="anchor" aria-hidden="true" href="#hardware-required"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Hardware Required</h4>
<ul>
<li>
<p>WM1302 LoRaWAN Gateway Module</p>
</li>
<li>
<p>Raspberry Pi boards with 40-pin GPIO header(e.g. Raspberry Pi 4B or Raspberry 3B+)</p>
</li>
<li>
<p>WM1302 Pi Hat for Raspberry Pi</p>
</li>
<li>
<p>Power Adapter for Raspberry Pi</p>
</li>
<li>
<p>A LoRa antenna</p>
</li>
<li>
<p>A 8G or larger SD card and a card reader</p>
</li>
<li>
<p>A Type C USB cable if using WM1302 LoRaWAN Gateway Module USB version</p>
</li>
</ul>
<h4><a id="user-content-software-required" class="anchor" aria-hidden="true" href="#software-required"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Software Required</h4>
<ul>
<li>
<p><a href="https://www.raspberrypi.org/software/operating-systems/" rel="nofollow">Lastest Raspberry Pi OS image</a>: Raspberry Pi OS Lite is recommended</p>
</li>
<li>
<p><a href="https://www.balena.io/etcher/" rel="nofollow">Balena Etcher</a>: To flash Raspberry Pi OS image to SD card</p>
</li>
<li>
<p><a href="https://www.putty.org/" rel="nofollow">putty</a>: To connect to Raspberry Pi via SSH on Windows</p>
</li>
</ul>
<h4><a id="user-content-step1-mounting-wm1302-raspberry-pi-hat-and-install-wm1302-module" class="anchor" aria-hidden="true" href="#step1-mounting-wm1302-raspberry-pi-hat-and-install-wm1302-module"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Step1. Mounting WM1302 Raspberry Pi Hat and install WM1302 module</h4>
<p>It is easy to mount the Pi Hat on Raspberry Pi 40 Pin Header. Power off Raspberry Pi first, insert WM1302 module to the Pi Hat as the following picture and screw it down.</p>
<p><a target="_blank" rel="noopener noreferrer" href="/https://files.seeedstudio.com/products/114992549/MW1302_Wiki1.jpg"><img src="https://files.seeedstudio.com/products/114992549/MW1302_Wiki1.jpg" alt="" style="max-width:100%;"></a></p>
<p>If USB version WM1302 module is using, please also connect its Type C port to the Raspberry Pi USB port with a Type C USB cable.</p>
<p><a target="_blank" rel="noopener noreferrer" href="https://files.seeedstudio.com/products/114992549/MW1302_Wiki2.jpg"><img src="https://files.seeedstudio.com/products/114992549/MW1302_Wiki2.jpg" alt="" style="max-width:100%;"></a></p>
<h4><a id="user-content-step2-enable-the-raspbian-i2c-and-spi-interface" class="anchor" aria-hidden="true" href="#step2-enable-the-raspbian-i2c-and-spi-interface"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Step2. Enable the Raspbian I2C and SPI interface</h4>
<p>WM1302 module communicates with Raspberry Pi with SPI and I2C. But these two interfaces are not enabled by default in Raspbian, so developer need to enable them before using WM1302. Here, we introduce a command line way to enable SPI and I2C interface.</p>
<p>First, login in Raspberry Pi via SSH or using a monitor(don't use serial console as the GPS module on the Pi Hat takes over the Pi's hardware UART pins), then type <code>sudo raspi-config</code> in command line to open Rasberry Pi Software Configuration Tool:</p>
<pre><code>sudo raspi-config
</code></pre>
<p><a target="_blank" rel="noopener noreferrer" href="https://files.seeedstudio.com/products/114992549/MW1302_Wiki3.png"><img src="https://files.seeedstudio.com/products/114992549/MW1302_Wiki3.png" alt="" style="max-width:100%;"></a></p>
<ol>
<li>
<p>Select <code>Interface Options</code></p>
</li>
<li>
<p>Select <code>SPI</code>, then select <code>Yes</code> to enable it</p>
</li>
<li>
<p>Select <code>I2C</code>, then select <code>Yes</code> to enable it</p>
</li>
<li>
<p>Select <code>Serial Port</code>, then select <code>No</code> for "Would you like a login shell..." and select <code>Yes</code> for "Would you like the serial port hardware..."</p>
</li>
<li>
<p>After this, please reboot Raspberry Pi to make sure these settings work.</p>
</li>
</ol>
<h4><a id="user-content-step3-get-and-compile-sx1302-source-code" class="anchor" aria-hidden="true" href="#step3-get-and-compile-sx1302-source-code"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Step3. Get and compile SX1302 source code</h4>
<p>Now let's install <code>git</code> and download <code>sx1302_hal</code>(library and programs for SX1302 LoRa Gateway) from github:</p>
<pre><code>sudo apt update
sudo apt install -y git
cd ~
git clone https://github.com/Lora-net/sx1302_hal
</code></pre>
<p>Move to <code>sx1302_hal</code> folder and compile everything:</p>
<pre><code>cd ~/sx1302_hal
make
</code></pre>
<h4><a id="user-content-step4-run-semtech-sx1302-packet-forwarder" class="anchor" aria-hidden="true" href="#step4-run-semtech-sx1302-packet-forwarder"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Step4. Run Semtech SX1302 packet forwarder</h4>
<p>Firstly, modify <code>reset pin</code> for SX1302 and SX1261 in <code>reset_lgw.sh</code> script, with text editor <code>nano</code>:</p>
<pre><code>nano tools/reset_lgw.sh
</code></pre>
<p>The following code is shown at the head of text editor:</p>
<pre><code># GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=23     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=22     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
</code></pre>
<p>Use the navigation keys to move the cursor, change <code>SX1302_RESET_PIN=23</code> to <code>SX1302_RESET_PIN=25</code> and <code>SX1261_RESET_PIN=22</code> to <code>SX1261_RESET_PIN=17</code>, as following:</p>
<pre><code># GPIO mapping has to be adapted with HW
#

SX1302_RESET_PIN=25     # SX1302 reset
SX1302_POWER_EN_PIN=18  # SX1302 power enable
SX1261_RESET_PIN=17     # SX1261 reset (LBT / Spectral Scan)
AD5338R_RESET_PIN=13    # AD5338R reset (full-duplex CN490 reference design)
</code></pre>
<p>Save these changes by pressing <code>CTRL + x</code>, and then <code>y</code>, finally pressing <code>Enter</code> to close the text editor.</p>
<p>Copy <code>reset_lgw.sh</code> to <code>packet_forwarder</code> folder, then run <code>lora_pkt_fwd</code>. Please note that you should select a <code>global_conf.json.sx1250.xxxx</code> config file based on the module you are using:</p>
<pre><code>cp tools/reset_lgw.sh packet_forwarder/
cd packet_forwarder

\# Please select one of the following comands based on your module
\# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

\# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

\# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

\# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
</code></pre>
<p>Now, packet forwarder are able to run correctly. But there are still something to do if developers need to forward lora packet to their LoRa Server(e.g. TTN or chripstack).</p>
<p>To achieve this target, developers must add the Raspberry Pi Gateway to Lora Server first. Take <a href="https://www.thethingsindustries.com/docs/getting-started/" rel="nofollow">TTNv3</a> as an example, login <a href="https://eu1.cloud.thethings.network/console" rel="nofollow">TTNv3 console</a>, click <code>Go to gateways</code> and click <code>Add gateway</code>, in the <code>Add gateway</code> page you will find dozens of settings to fill. What you need to focus on are <code>Gateway EUI</code> and <code>Gateway Server address</code> and <code>Frequency plan</code>, the others just leave it to the default.</p>
<ul>
<li>
<p><code>Gateway EUI</code>: A 64 bit extended unique identifier for your gateway, we set it to <code>AA555A0000000000</code> in this wiki</p>
</li>
<li>
<p><code>Gateway Server address</code>:  The server addresss which gateway will connect to, copy this to clipboard, developers need to save this to the config file later</p>
</li>
<li>
<p><code>Frequency plan</code>:  If using EU868 module, choose <code>Europe 863-870 MHz (SF9 for RX2)</code>, if using US915 module, choose <code>United States 902-928 MHz, FSB 2</code></p>
</li>
</ul>
<p><a target="_blank" rel="noopener noreferrer" href="https://files.seeedstudio.com/products/114992549/MW1302_Wiki4.png"><img src="https://files.seeedstudio.com/products/114992549/MW1302_Wiki4.png" alt="" style="max-width:100%;"></a></p>
<p>After adding gateway, back to the Raspberry Pi, press <code>CTRL + c</code> to stop <code>lora_pkt_fwd</code>, then edit the <code>global_conf.json.sx1250.xxxx</code> config file you used just now, with text editor <code>nano</code>:</p>
<pre><code># Please select one of the following comands based on your module

\# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
nano global_conf.json.sx1250.EU868

\# for WM1302 LoRaWAN Gateway Module (USB) - EU868
nano global_conf.json.sx1250.EU868.USB

\# for WM1302 LoRaWAN Gateway Module (SPI) - US915
nano global_conf.json.sx1250.US915

\# for WM1302 LoRaWAN Gateway Module (USB) - US915
nano global_conf.json.sx1250.US915.USB
</code></pre>
<p>Basically, you only need to modify these parameters: <code>"server_address" "serv_port_up" "serv_port_down"</code>, which can be found at the tail of the config file. Copy <code>Gateway Server address</code> to <code>"server_address"</code>, change <code>"serv_port_up"</code> and <code>"serv_port_down"</code> to <code>1700</code>, these parameters should be edited like this:</p>
<pre><code>"gateway_conf": {
    "gateway_ID": "AA555A0000000000",
    /* change with default server address/ports */
    "server_address": "eu1.cloud.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
</code></pre>
<p>Save these changes by pressing <code>CTRL + x</code>, and then <code>y</code>, finally pressing <code>Enter</code> to close the text editor.</p>
<p>Restart <code>lora_pkt_fwd</code>, you will find your Raspberry Pi Gateway are conntected to TTNv3.</p>
<pre><code># Please select one of the following comands based on your module

\# for WM1302 LoRaWAN Gateway Module (SPI) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868

\# for WM1302 LoRaWAN Gateway Module (USB) - EU868
./lora_pkt_fwd -c global_conf.json.sx1250.EU868.USB

\# for WM1302 LoRaWAN Gateway Module (SPI) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915

\# for WM1302 LoRaWAN Gateway Module (USB) - US915
./lora_pkt_fwd -c global_conf.json.sx1250.US915.USB
</code></pre>
</article>


## Tech Support

Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). 

<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>