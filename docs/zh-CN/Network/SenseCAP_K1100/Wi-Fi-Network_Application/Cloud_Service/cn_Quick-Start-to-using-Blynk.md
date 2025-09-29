---
description: 快速开始使用 Blynk
title: Blynk 使用指南
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Quick-Start-to-using-Blynk
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# 快速开始使用 Blynk

在本教程中，我们将提供一个快速指南，介绍如何设置 Grove Vision AI 模块与 Wio Terminal，通过 WiFi 上传检测数据（如人数统计和检测置信值），然后利用 Blynk 移动应用的仪表板可视化 Grove Vision AI 模块的检测输出。

## 所需材料

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove Vision AI 模块</td>
    </tr>
  </tbody></table>

## 初步准备

### 连接

在本教程中，我们需要根据下图将 Vision AI 模块连接到左侧。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/vi.jpg" /></div>

### 软件准备

**步骤 1.** 安装 Arduino 软件。

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**步骤 2.** 启动 Arduino 应用程序。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**步骤 3.** 将 Wio Terminal 添加到 Arduino IDE。

打开 Arduino IDE，点击 `File > Preferences`，并将以下 URL 复制到“Additional Boards Manager URLs”中：

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

点击 `Tools > Board > Board Manager`，然后在 Boards Manager 中搜索 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**步骤 4.** 选择你的开发板和端口

你需要在 `Tools > Board` 菜单中选择与你的 Arduino 对应的条目，选择 **Wio Terminal**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

从 `Tools -> Port` 菜单中选择 Wio Terminal 开发板的串口设备。这通常是 COM3 或更高（COM1 和 COM2 通常保留给硬件串口）。要确认，可以断开 Wio Terminal 开发板并重新打开菜单；消失的条目应该是 Arduino 开发板。重新连接开发板并选择该串口。

:::tip
对于 Mac 用户，串口可能类似于 `/dev/cu.usbmodem141401`。

如果你无法上传代码，大多数情况下是因为 Arduino IDE 无法将 Wio Terminal 切换到引导加载模式（可能是因为 MCU 停止运行或你的程序正在处理 USB）。解决方法是手动将 Wio Terminal 切换到引导加载模式。
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

## 步骤指南

### 第 1 步. 创建账户

请访问 [Blynk 官方网站](https://blynk.io/)，并创建一个账户。您需要提供您的电子邮件地址进行注册，请检查您的邮箱以验证并确认完成账户注册。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/18.png" /></div>

### 第 2 步. 添加新模板

登录 Blynk 控制台后，请取消并跳过启动向导弹窗，然后点击 **New Template** 按钮以创建一个新模板。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/1.png" /></div>

按照设置向导，在弹窗中为您的模板命名，并选择 **Seeed Wio Terminal** 作为 **HARDWARE**，选择 **WiFi** 作为 **CONNECTION TYPE**。

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1101/2.png" /></div>

点击完成后，您应该会看到模板页面。请点击右上角的保存按钮以确认新模板的所有信息。

### 第 3 步. 添加新设备

添加仪表板模板后，点击 **My devices** 标签页，然后点击 **New Device** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/4.png" /></div>

然后请选择 **From template**。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/5.png" /></div>

请从 **TEMPLATE** 下拉列表中选择在 **第 2 步** 中创建的模板名称，在本例中为 **wio terminal vision ai**，并在 **DEVICE NAME** 对话框中输入设备名称。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1101/6.png" /></div>

完成后，新设备信息将显示在弹出面板中，您应该会看到 Template ID、Device Name 和 Auth Token，请点击 **Copy to clipboard** 以复制并保存这些头部信息以供后续使用。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

### 第 4 步. 添加必要的 Arduino 库

我们需要添加必要的 Arduino 库，以便使用 Grove Vision AI 模块与 Wio Terminal。请点击下方图标并下载 Grove Vision AI Arduino 库。

<div>
  <p style={{}}><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank" /></p><div align="center"><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

成功下载库的 zip 文件后，请将文件解压到以下路径：

- 在 Windows 上：`C:\Users\{User Name}\Documents\Arduino\libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/36.png" /></div>

- 在 Mac 上：`/Users/{User Name}/Documents/Arduino/libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/37.png" /></div>

### 第 5 步. 准备固件代码

我们可以从 [这里](https://examples.blynk.cc/?board=Wio%20Terminal&shield=rpcWiFi&example=GettingStarted%2FPushData&auth=an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ&dev=Quickstart%20Device&tmpl=TMPLx3C44oO0) 生成用于连接 Wio Terminal 到 Blynk 服务器的基础模板代码。

我们还为本快速入门指南准备了完整的示例代码，如下所示：

```c
// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "";
char pass[] = "";

// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;

char auth[] = BLYNK_AUTH_TOKEN;

BlynkTimer timer;

// This function sends Arduino's up time every second to Virtual Pin (5).
// In the app, Widget's reading frequency should be set to PUSH. This means
// that you define how often to send data to Blynk App.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  if (state == 1)
  {
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
          Blynk.virtualWrite(V5, data.confidence);
          Blynk.virtualWrite(V4, len);
        }
     }
     else
     {
       Serial.println("No identification");
       Blynk.virtualWrite(V4, 0);
       Blynk.virtualWrite(V5, 0);
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}

void setup()
{
  // Debug console
  Serial.begin(115200);

  Wire.begin();
  
  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }

  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // Setup a function to be called every second
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  Blynk.run();
  timer.run(); // Initiates BlynkTimer
}
```

你需要在上面的示例代码开头填写必要的头文件，以便将 Wio Terminal 连接到 WiFi 并将数据发送到 Blynk 服务器。

```c
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

char ssid[] = "";
char pass[] = "";
```

前面三行定义是 Blynk 设备信息，这些信息会在**步骤 3**的过程中自动生成，只需复制并替换这三行即可。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

接下来是 **ssid[]** 和 **pass[]** 变量，请填写 Wio Terminal 即将连接的 WiFi 的 ssid 和密码。例如：

```c
#define BLYNK_TEMPLATE_ID           "TMPLx3C44oO0"
#define BLYNK_DEVICE_NAME           "Quickstart Device"
#define BLYNK_AUTH_TOKEN            "an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ"

char ssid[] = "SeeedStudio";
char pass[] = "yyds2022";
```

:::note
我们建议使用个人热点来测试本快速入门指南，因为相比于复杂的公共网络，个人热点更加稳定。
:::

### 步骤 6. 设置 Blynk Web 仪表板

请返回 Blynk 控制台，根据上面的固件代码设置一些仪表板小部件。首先，我们需要选择之前创建的模板，然后点击右上角的 **Edit** 按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/19.png" /></div>

然后点击 **Datastreams** 标签来设置数据流，接着点击 **New Datastream**，选择 **Virtual Pin** 来配置数据输入源。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/11.png" /></div>

在**步骤 5**中，我们使用了虚拟引脚 4 和虚拟引脚 5 来发送 Grove Vision AI 模块的检测数据，例如人数统计和推理置信度百分比数据。

```c
Blynk.virtualWrite(V5, data.confidence); // 置信度
Blynk.virtualWrite(V4, len); // 人数统计
```

因此，我们需要在 Blynk 控制台的 Datastreams 标签中分别设置两个虚拟引脚 V5 和 V4。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/20.png" /></div>

在 **Web Dashboard** 设置中，我们可以定义信息布局。在本例中，我们添加了 3 个最常见的可视化小部件，例如 **Label**、**Gauge** 和 **Chart**。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/21.png" /></div>

你可以通过点击每个小部件顶部的齿轮按钮来设置显示数据，鼠标悬停在小部件上时会显示该按钮。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/23.png" /></div>

在设置完数据信息布局后，点击右上角的 **Save And Apply** 按钮。

### 步骤 7. 上传代码并观察数据

最后，请使用 Grove 电缆将 Grove Vision AI 模块连接到 Wio Terminal 左侧的 Grove 接口，然后在完成步骤 7 后上传更新的固件，接着返回 Blynk 设备控制台。
当 Grove Vision AI 模块检测到有效数据时，你应该会看到人数统计值和检测置信度值的更新。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/17.png" /></div>

## 使用 Blynk 移动应用观察实时数据

Blynk 不仅支持通过 Web 控制台仪表板显示实时传感器数据，还支持在其移动应用上查看传感器数据。然而，您需要完成上述步骤才能在移动应用中查看数据。

### 第 1 步：下载 Blynk 应用

- 如果您使用的是 IOS 设备，请下载 [Blynk IoT](https://play.google.com/store/apps/details?id=cloud.blynk)。

- 如果您使用的是 Android 设备，请下载 [Blynk IoT NEW](https://apps.apple.com/cn/app/blynk-iot-new/id1559317868)。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/25.png" /></div>

### 第 2 步：使用 Blynk 应用登录您的账户

下载并安装 Blynk 应用后，请打开应用并使用您为 Web 控制台创建的相同账户登录，这样您通过上述步骤创建的模板将会同步到移动应用中。

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/K1101/26.png" /></div>

### 第 3 步：在 Blynk 移动应用上配置数据仪表板

登录应用后，请向右滑动并点击 **My Profile** 进入个人资料设置视图，然后确保启用了 **Developer Mode**（开发者模式）。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/29.png" /></div>

然后返回主页面，点击右上角的扳手图标进入模板设置视图。

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1101/30.png" /></div>

在这里，您可以看到之前创建的模板以及 Blynk 应用中的示例模板。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/31.png" /></div>

现在请点击 Seeed Wio Terminal 模板进入设置界面以配置移动小部件显示。进入模板设置视图后，请点击右上角的 **+** 按钮，您将看到用于添加小部件的小部件窗口。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/32.png" /></div>

此处的设置步骤应与 Web 控制台的设置类似，我们选择一个 **Value Display**（值显示）小部件和一个 **Labeled Value**（标记值）小部件，然后重命名它们并相应地选择正确的数据流（虚拟引脚 V4 和 V5）。这样，Wio Terminal 从 Grove Vision AI 模块收集的检测数据应能够持续同步并更新到 Web 控制台和移动应用。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/33.png" /></div>

### 第 4 步：上传新代码并观察结果

由于我们已经将新代码上传到 Wio Terminal，当 Wio Terminal 连接到 WIFI 后，连接的 Wio Terminal 设备应显示在 Blynk 移动应用中，如下所示。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/34.png" /></div>

您只需点击 Blynk 移动应用中显示的设备，即可观察传感器数据。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/42.jpg" /></div>

## 声明

- LoRa® 标志是 Semtech Corporation 或其子公司的商标。
- LoRaWAN® 是根据 LoRa Alliance® 的许可使用的标志。