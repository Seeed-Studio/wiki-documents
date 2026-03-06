---
title: Seeed Studio XIAO ESP32-C5 Wi-Fi Throughput Testing Tool
description: ''
keywords:
  - xiao
  - esp32c5
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xaio_esp32c5_wifi_throughput_tester
last_update:
  date: 1/16/2026
  author: Zeller
createdAt: '2026-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/xaio_esp32c5_wifi_throughput_tester/
---


The Seeed Studio XIAO ESP32-C5 features the ESP32-C5 as its core processor.The ESP32-C5 is the industry's first RISC-V microcontroller to support dual-band Wi-Fi 6 (802.11ax) in both the 2.4GHz and 5GHz bands. Boasting exceptional wireless performance, it holds significant potential for applications in smart homes, the Internet of Things (IoT), and various other scenarios.

In practical usage, the actual data throughput of Wi-Fi is one of the most important metrics for measuring transmission capability.
Next, we will use a Wi-Fi throughput testing tool to visually demonstrate the powerful data throughput capabilities of the XIAO ESP32-C5 based on Wi-Fi 6, across both the 2.4GHz and 5GHz frequency bands!

This wiki will be developed using [ESP-IDF](https://github.com/espressif/esp-idf).

*Reference*: [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/index.html)

## Hardware Preparation

You will need to prepare one XIAO ESP32-C5 board.

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

### Antenna Installation

Inside the packaging of the Seeed Studio XIAO ESP32-C5, there is a dedicated **Wi-Fi/BT Antenna connector**. For optimal WiFi/Bluetooth signal strength, you need to take out the antenna included in the package and attach it to the connector.<br/>
:::tip
If you want to achieve a stronger signal gain effect, you can purchase and install **2.4G/5G External Antenna with RP-SMA Male Connector** — it delivers much higher gain than the built-in FPC Antenna included in the package!
:::
<div class="table-center">
 <table>
  <tr>
   <th>2.4G/5G External Antenna with RP-SMA Male Connector</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Software Preparation

### Install ESP-IDF

:::tip
This wiki is developed in a Windows development environment. For ESP-IDF operations on Linux / Mac, please refer to [Developed on XIAO using Espressif ESP-IDF](https://wiki.seeedstudio.com/xiao_idf/)
:::

**For Windows**

**Step 1.** Clicked [ESP32-IDF Tools Installer](https://docs.espressif.com/projects/esp-idf/en/v5.5.2/esp32c5/get-started/windows-setup.html#esp-idf-tools-installer)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_1.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 2.** Choose an appropriate version to download.

:::tip
The XIAO ESP32-C5 requires ESP-IDF v5.5 or later.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_2.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 3.** Install

1. In the downloaded files, locate `esp-idf-tools-setup-offline-5.5.2.exe` and double-click it to start the installation. Select your preferred installation language

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_3.png" style={{width:800, height:'auto'}}/></div><br/>

2. Choose I accept the agreement, then click Next.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_4.png" style={{width:800, height:'auto'}}/></div><br/>

3. Click Next.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_5.png" style={{width:800, height:'auto'}}/></div><br/>

4. Choose the installation path. The installation requires a significant amount of storage space, so please select a suitable location.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_6.png" style={{width:800, height:'auto'}}/></div><br/>

5. Keep the default settings; no changes are needed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_7.png" style={{width:800, height:'auto'}}/></div><br/>

6. Click Install and wait for the installation to complete. This may take some time.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_8.png" style={{width:800, height:'auto'}}/></div><br/>

7. After installation is complete, the following two shortcuts will be displayed on the Windows desktop.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_9.png" style={{width:400, height:'auto'}}/></div><br/>

**For Linux(Ubuntu/Debian) & macOS**

**Step 1.** Install dependencies

```bash
# Linux
sudo apt update && sudo apt install \
    git wget flex bison gperf python3 python3-pip python3-venv \
    cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

```bash
#macOS
brew install git wget cmake ninja dfu-util ccache python3
pip3 install pyserial
```

**Step 2.** Clone the specified version of the repository.

```bash
mkdir -p ~/esp
cd ~/esp
git clone --recursive https://github.com/espressif/esp-idf.git -b v5.5.1 esp-idf-v5.5.1
```

**Step 3.** Install the toolchain

```bash
cd ~/esp/esp-idf-v5.5.1
./install.sh esp32c5
```

**Step 4.** Add environment variables

```bash
. $HOME/esp/esp-idf-v5.5.1/export.sh
```

### Install iperf

**For Windows**

**Step 1.** Click [iperf](https://sourceforge.net/projects/iperf2/), then download

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n1.png" style={{width:800, height:'auto'}}/></div><br/>

**Step 2.** Place it in a suitable folder, then right-click and open a terminal there. This step will be used later.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n2.png" style={{width:800, height:'auto'}}/></div><br/>

**For Linux(Ubuntu/Debian) & macOS**

```bash
# Ubuntu/Debian
sudo apt install iperf

# macOS
brew install iperf
```

### Clone the test project.

- Clone the test project into the folder of your choice.

  <div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32C5_iperf_test" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
    </div><br />

```bash
git clone https://github.com/limengdu/XIAO-ESP32C5_iperf_test.git
```

**For Windows**

**Step 1.** Click on `ESP-IDF 5.5 PowerShell` on the desktop; an environment check will then be performed.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n3.png" style={{width:800, height:'auto'}}/></div>

**Step 2.** Open the cloned test project

```bash
cd C:\User\yourname\XIAO-ESP32C5_iperf_test
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n4.png" style={{width:800, height:'auto'}}/></div>

**Step 3.** Set the target chip to `esp32c5`

```bash
idf.py --preview set-target esp32c5
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5_1.png" style={{width:800, height:'auto'}}/></div>

**Step 4.** Build the project

```bash
idf.py build
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n5.png" style={{width:800, height:'auto'}}/></div>

Build completed

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n6.png" style={{width:800, height:'auto'}}/></div>

**Step 5.** Flash the code to the XIAO ESP32-C5 and open the serial monitor

You can choose to flash using `idf.py flash`; the IDF flashing tool will automatically detect your port for flashing, and also specify the port using `idf.py -p PORT flash`. On Windows, you can open Device Manager to check the port.

```bash
 idf.py flash monitor
or
 idf.py -p PORT flash monitor
or
```

Specify the port for flashing(The specific port number depends on the port of your device.)

```bash
idf.py -p COM69 flash monitor
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n7.png" style={{width:800, height:'auto'}}/></div><br/>

After successful flashing, the terminal will display the **`iperf>`** prompt.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_n8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
If the `iperf>` prompt does not appear, please power off the XIAO ESP32-C5 and then press the onboard Reset button to wake it up and reconnect.
:::

**For Linux(Ubuntu/Debian) & macOS**

```bash
# Navigate to the project directory
cd esp32c5_iperf_test

# Set the target chip
idf.py --preview set-target esp32c5

# Compile the project
idf.py build

# Flash the firmware and open the serial monitor
idf.py flash monitor
```

## Wi-Fi data throughput test

We will test the Wi-Fi data throughput of the XIAO ESP32-C5 in both the 2.4 GHz and 5 GHz bands using the TCP and UDP protocols.

Why do we need to test both TCP and UDP?<br/>
When evaluating the Wi-Fi RF performance of the XIAO ESP32-C5, TCP and UDP provide two completely different perspectives:

- **TCP Test (Measures Application Experience):** TCP is a connection-oriented, reliable protocol that includes handshaking, retransmission, and congestion control mechanisms.  
  - **Purpose:** Simulates real-world applications with strict data integrity requirements, such as web browsing, OTA updates, and MQTT control. It reflects the chip’s overall ability to handle complex protocol stacks while ensuring zero data loss (i.e., **stability**).

- **UDP Test (Measures Hardware Limits):** UDP is a connectionless protocol that focuses solely on sending data without guaranteed delivery.  
  - **Purpose:** Removes protocol-layer acknowledgment overhead to maximize the physical bandwidth limits of the Wi-Fi radio. Commonly used for audio/video streaming tests, it reveals the chip’s maximum "clean" throughput potential in the 2.4GHz and 5GHz bands (i.e., **speed**).

### Check the IP Address

Check the IP address of the network your computer is connected to, as it will be used in the subsequent steps.

```bash
# macOS/Linux
ifconfig | grep "inet " | grep -v 127.0.0.1

# Windows
ipconfig
```

### 2.4GHz band throughput test

Actual measurement of the Wi-Fi data throughput of XIAO ESP32-C5 in the 2.4GHz band.

- Connect the XIAO ESP32-C5 to a 2.4G WiFi network

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

The terminal will then print the Wi-Fi connection information. You need to note down the IP address of the XIAO ESP32-C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### TCP Throughput Test

:::tip
Please ensure your computer and the XIAO ESP32-C5 are connected to the same WiFi network or router.
:::

1. Download Test (XIAO ESP32-C5 Receiving Data)

    1.1. **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -s -i 1
      ```

    1.2. **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- Test Results

From the test results, we can see that the average TCP download speed of the XIAO ESP32-C5 on 2.4G WiFi is 15 Mbps

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x2.png" style={{width:800, height:'auto'}}/></div>

2. Test (XIAO ESP32-C5 Sending Data)

    2.1 **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -i 1
      ```

- Test Results

From the test results, we can see that the average TCP upload speed of the XIAO ESP32-C5 on 2.4G WiFi is 17 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x3.png" style={{width:800, height:'auto'}}/></div>

#### UDP Throughput Test

:::tip
Please ensure your computer and the XIAO ESP32-C5 are connected to the same WiFi network or router.
:::

1. Download Test (XIAO ESP32-C5 Receiving Data)

    1.1. **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- Test Results

From the test results, we can see that the average UDP download speed of the XIAO ESP32-C5 on 2.4G WiFi is 18 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x4.png" style={{width:800, height:'auto'}}/></div>

2. Test (XIAO ESP32-C5 Sending Data)

    2.1 **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -u -i 1
      ```

- Test Results

From the test results, we can see that the average UDP upload speed of the XIAO ESP32-C5 on 2.4G WiFi is 27 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x5.png" style={{width:800, height:'auto'}}/></div>

:::tip
The above test results are for reference only. Please refer to actual conditions.
:::

### 5GHz band throughput test

Actual measurement of the Wi-Fi data throughput of XIAO ESP32-C5 in the 5GHz band.

- Connect the XIAO ESP32-C5 to a 5G WiFi network

```bash
sta <Your WiFi Name> <Your WiFi Password>
```

The terminal will then print the Wi-Fi connection information. You need to note down the IP address of the XIAO ESP32-C5.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x1_1.png" style={{width:800, height:'auto'}}/></div>

#### TCP Throughput Test

:::tip
Please ensure your computer and the XIAO ESP32-C5 are connected to the same WiFi network or router.
:::

1. Download Test (XIAO ESP32-C5 Receiving Data)

    1.1. **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -s -i 1
      ```

    1.2. **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -i 1 -t 60
      ```

- Test Results

From the test results, we can see that the average UDP download speed of the XIAO ESP32-C5 on 5G WiFi is 27 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x6.png" style={{width:800, height:'auto'}}/></div>

2. Test (XIAO ESP32-C5 Sending Data)

    2.1 **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -c <IP address of PC> -i 1 -t 60
      ```

    2.2 **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -i 1
      ```

- Test Results

From the test results, we can see that the average UDP upload speed of the XIAO ESP32-C5 on 5G WiFi is 29 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x7.png" style={{width:800, height:'auto'}}/></div>

#### UDP Throughput Test

:::tip
Please ensure your computer and the XIAO ESP32-C5 are connected to the same WiFi network or router.
:::

1. Download Test (XIAO ESP32-C5 Receiving Data)

    1.1. **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -s -u -i 1
      ```

    1.2. **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -c <IP address of ESP32> -u -b 100M -i 1 -t 60
      ```

- Test Results

From the test results, we can see that the average TCP upload speed of the XIAO ESP32-C5 on 5G WiFi is 50 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x8.png" style={{width:800, height:'auto'}}/></div>

2. Test (XIAO ESP32-C5 Sending Data)

    2.1 **Execute the command on the XIAO ESP32-C5 side**

      ```bash
      iperf -c <IP address of PC> -u -b 100M -i 1 -t 60
      ```

    2.2 **Execute the command on the PC side**

      - Windows

      ```bash
      ./iperf-2.2.1-win64.exe -s -u -i 1
      ```

      - Linux(Ubuntu/Debian) & macOS

      ```bash
      iperf -s -u -i 1
      ```

- Test Results

From the test results, we can see that the average TCP upload speed of the XIAO ESP32-C5 on 5G WiFi is 50 Mbps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_test_x9.png" style={{width:800, height:'auto'}}/></div>

## Conclusion

Test results show that the XIAO ESP32-C5 exhibits excellent data transmission performance in both 2.4 GHz and 5 GHz dual-band Wi-Fi 6 environments, making it ideal for high-bandwidth, low-latency wireless applications.

Furthermore, the testing methods in this tutorial are applicable to the entire XIAO ESP series development boards. You can perform the same performance evaluation on other boards by simply referring to the guidelines in this Wiki and adjusting the target chip during compilation. We look forward to you exploring its potential and sharing your findings with the community!

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
