---
description: This demo shows how to perform real-time QR code recognition on reCamera and stream the video frames along with the recognition results to a PC via UDP for display.
title: Real-Time QR Code Recognition on reCamera
keywords:
  - reCamera
  - QR Code
  - QR Code Recognition
  - ZXing
  - UDP Streaming
  - Real-Time Recognition
image: https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif
slug: /recamera_qrcode_udp
sku: 102991897, 100029708, 108990120
sidebar_position: 17
last_update:
  date: 06/12/2026
  author: Xuanjun Zhu
createdAt: '2026-06-15'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/recamera_qrcode_udp/
---

# Real-Time QR Code Recognition on reCamera

## Introduction

This example demonstrates how to build a **real-time QR code recognition system** using reCamera. The system captures live video frames through the camera, decodes QR codes using the **ZXing** library, and pushes the video frames (JPEG) along with the recognition results to a PC via **UDP** for display.

**Key Features**:
- Real-time camera capture and QR code recognition
- Supports both video streaming mode and single-image mode
- Pushes JPEG frames + recognition results to the PC via UDP
- Detailed performance statistics (capture FPS, decode FPS, average decode time)
- Python receiver script on the PC for real-time video and result display

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/testvideo.gif" /></div>

## How It Works

### Video Streaming Mode (Default)

The real-time recognition flow is as follows:

1. **Camera Capture**: Captures RGB888 frames (default 640×480) through the `sscma-micro` Camera interface
2. **Grayscale Conversion**: Converts the RGB888 image to grayscale (required for QR code recognition)
4. **ZXing Decoding**: Uses `MultiFormatReader` + `HybridBinarizer` for barcode detection and decoding (`TryHarder` is disabled by default to maintain real-time performance)
5. **Result Output**: Prints the decoded content to the terminal when a new QR code is detected
6. **UDP Push**: Sends the JPEG frame + recognition result to the PC via the `SeSg stream_udp` component

In video scenarios, ZXing incurs significant search overhead when "no code is found." To ensure real-time performance, the program uses a 150ms decode throttling strategy — it performs decoding once every 150ms instead of on every frame. This drastically reduces CPU load without compromising the recognition experience.

## Demo Setup

To set up this demo, you need to:

1. Cross-compile the C++ program on your PC
2. Run the compiled executable on the ReCamera
3. Run the Python receiver script on your PC

### 1. Compile the C++ Program

:::note
Before building this solution, make sure you have configured the **ReCamera-OS** environment (version 0.2.1 or later) according to the [main project documentation](https://wiki.seeedstudio.com/recamera_develop_with_c_cpp/), including the SDK path and cross-compilation toolchain.
:::

Set the environment variable for the cross-compilation toolchain:

```bash
export PATH='current compile chain path'/host-tools/gcc/riscv64-linux-musl-x86_64/bin:$PATH
```

Clone the repository and navigate to the solution directory to compile. Run the following commands step by step in your PC terminal. If you have already downloaded and configured the cross-compilation environment following the [Developing with C/C++](https://wiki.seeedstudio.com/recamera_develop_with_c_cpp/) documentation, you can directly run the compile commands below.

```bash
git clone https://github.com/RobotXTeam/sscma-example-sg200x.git
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
export SG200X_SDK_PATH='current clone path'/sg2002_recamera_emmc
## compile cmd
rm -rf build && mkdir build && cd build 
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-std=c++17" ..
make -j$(nproc)
```

After compilation, the executable is located at `build/qrcode_udp`. Upload it to the ReCamera at `/home/recamera/` using the scp command:

```bash
sudo scp qrcode_udp recamera@192.168.4.53:/home/recamera/  # Replace 192.168.4.53 with your reCamera's IP address
```
Enter the password for the corresponding platform when prompted to complete the transfer of `qrcode_udp`.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/cppbuildlog.png" /></div>


### 2. Configure ReCamera

:::warning
Before running the C++ program, you must stop the default Node-RED services as they occupy the camera resources. Run the following commands via SSH:
:::

```bash
sudo /etc/init.d/S03node-red stop
sudo /etc/init.d/S91sscma-node stop
sudo /etc/init.d/S93sscma-supervisor stop
```

### 3. Run the Executable on ReCamera

Then run the following command to grant execution permission:

```bash
chmod +x qrcode_udp
```

#### Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `udp_ip` | PC IP address (enables UDP streaming) | `192.168.4.48` |
| `udp_port` | UDP port number | `5001` |

#### Example Commands

**Video streaming mode (no UDP streaming, local recognition only)**:
```bash
sudo ./qrcode_udp
```

**Video streaming mode + UDP streaming**:
```bash
sudo ./qrcode_udp 192.168.4.48 5001
```

:::note
Please replace `192.168.4.48` with the actual IP address of your PC on the same network as the ReCamera.
:::
### On the ReCamera Terminal

**Video streaming mode** — The program will display performance statistics once per second:

```
[Performance] CaptureFPS=2.60 | DecodeFPS=2.60 | AvgDecodeTime=323.0ms | DecodeSuccess=0 | NewCode=0
[Performance] CaptureFPS=1.94 | DecodeFPS=1.94 | AvgDecodeTime=434.0ms | DecodeSuccess=0 | NewCode=0
[QRCode] https://wiki.seeedstudio.com/recamera_software_docs/
[Performance] CaptureFPS=4.45 | DecodeFPS=4.45 | AvgDecodeTime=174.8ms | DecodeSuccess=3 | NewCode=1
[Performance] CaptureFPS=4.62 | DecodeFPS=4.62 | AvgDecodeTime=163.6ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=4.86 | DecodeFPS=4.86 | AvgDecodeTime=165.4ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=4.60 | DecodeFPS=4.60 | AvgDecodeTime=169.8ms | DecodeSuccess=4 | NewCode=0
[Performance] CaptureFPS=4.33 | DecodeFPS=4.33 | AvgDecodeTime=184.4ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=2.78 | DecodeFPS=2.78 | AvgDecodeTime=305.8ms | DecodeSuccess=3 | NewCode=0
[Performance] CaptureFPS=1.96 | DecodeFPS=1.96 | AvgDecodeTime=404.0ms | DecodeSuccess=2 | NewCode=0
[Performance] CaptureFPS=4.72 | DecodeFPS=4.72 | AvgDecodeTime=166.0ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.56 | DecodeFPS=4.56 | AvgDecodeTime=178.5ms | DecodeSuccess=6 | NewCode=0
[QRCode] zxj
[Performance] CaptureFPS=5.32 | DecodeFPS=5.32 | AvgDecodeTime=145.3ms | DecodeSuccess=7 | NewCode=1
[Performance] CaptureFPS=5.30 | DecodeFPS=5.30 | AvgDecodeTime=149.1ms | DecodeSuccess=6 | NewCode=0
[Performance] CaptureFPS=4.70 | DecodeFPS=4.70 | AvgDecodeTime=170.8ms | DecodeSuccess=5 | NewCode=0
[Performance] CaptureFPS=1.85 | DecodeFPS=1.85 | AvgDecodeTime=455.0ms | DecodeSuccess=1 | NewCode=0
```

- **CaptureFPS**: Camera capture frame rate
- **DecodeFPS**: Actual frame rate at which decoding is executed (limited by the 150ms throttle)
- **AvgDecodeTime**: Average time taken for a single ZXing decode
- **DecodeSuccess**: Number of times a QR code was successfully recognized
- **NewCode**: Number of times the QR code text changed


### 4. Run the Python Receiver on PC

On your PC, ensure Python with the required libraries is installed:

```bash
pip install opencv-python numpy
```

Navigate to the solution directory and run:

```bash
cd sscma-example-sg200x/solutions/sesg-project/qrcode-udp
python tools/udp_receiver.py --port 5001 --show --print-dets
```

#### Python Receiver Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `--ip` | Listen IP address | `0.0.0.0` |
| `--port` | Listen port | `5001` |
| `--show` | Display the video window | off |
| `--print-dets` | Print the recognized QR code text | off |



### On the Python Receiver Window

The PC will display a live video window that includes:
- The JPEG video stream
- When a QR code is recognized, the decoded text is overlaid in the top-left corner of the frame (yellow font)
- The frame number (green font)
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/reCamera/Applications/qrcode_udp/pcpicture.png" /></div>


## Dependencies

| Dependency | Description | Source |
|------------|-------------|--------|
| **sscma-micro** | Camera access (Device, Camera interfaces) | Repository component `components/sscma-micro` |
| **stream_udp** | UDP streaming (JPEG + detection results) | Repository component `components/SeSg/stream_udp` |
| **OpenCV** (core, imgproc, imgcodecs) | Image processing, grayscale conversion, downsampling | SG200X SDK sysroot |
| **ZXing** (libzxing) | Multi-format barcode/QR code decoding | SG200X SDK sysroot |
| **ReCameraOS ≥ 0.2.1** | Runtime environment | Device firmware |

## Troubleshooting

### Camera Access Error

If you see a "No camera device found" error:
- Ensure the Node-RED services are stopped (see Step 2 above)
- Check the camera connection

### UDP Connection Failed

If the PC doesn't receive data:
- Verify that the PC and ReCamera are on the same network
- Check the firewall settings on the PC
- Confirm that UDP port 5001 is not blocked
- Use `ping` to test connectivity between the devices

### QR Code Recognition Failure

If the camera view contains a QR code but it isn't recognized:
- Ensure the QR code is large enough and clear in the frame
- Avoid excessive blur, rotation, or uneven lighting
- Note that `TryHarder` mode is disabled by default to prioritize real-time performance

### Compilation Error

If you encounter compilation errors related to ZXing or sscma-micro:
- Confirm that the `SG200X_SDK_PATH` environment variable is set correctly
- Ensure the toolchain path is added to the `PATH` environment variable
- Check that the repository submodules are fully pulled (`git submodule update --init --recursive`)

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