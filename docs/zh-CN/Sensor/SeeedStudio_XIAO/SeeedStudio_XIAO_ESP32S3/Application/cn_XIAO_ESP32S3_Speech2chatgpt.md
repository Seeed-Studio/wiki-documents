---
description: 本教程介绍了如何使用XIAO ESP32S3，录制声音，识别声音，然后向ChatGPT提问并获得显示在屏幕上的答案。
title: 基于XIAO ESP32S3 Sense的微型ChatGPT语音助手
keywords:
- xiao esp32s3 Sense
- chatGPT
- 语音转文本
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/xiao_esp32s3_speech2chatgpt
last_update:
  date: 10/31/2023
  author: Xin Ping Li
---

# 基于XIAO ESP32S3的微型ChatGPT语音助手

<iframe width="100%" height="400" src="https://www.youtube.com/embed/wPi-XjeJPNw?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

我们今天很高兴为您带来一个全新的项目，使用XIAO ESP32S3 Sense和圆形展示XIAO!该项目旨在首先使用XIAO ESP32S3 Sense的麦克风和谷歌云的语音到文本服务构建一个语音识别系统。识别出的语音文本然后用于调用OpenAI的接口，向ChatGPT提出问题并返回答案。最后，我们在屏幕上显示识别出的语音和答案的内容。

这就是我们的智能“XIAO”助手!

让我们看一下完成这个项目所需的一些一般步骤。
-[注册并启用谷歌云语音转文本服务](#注册并启用谷歌云语音转文本服务)

-[在本地主机上部署语音到文本服务](#在本地主机上部署语音到文本服务)

-[上传XIAO ESP32S3 Sense录制的声音文件到谷歌云进行识别](#上传- XIAO ESP32S3 - Sense录制的声音文件到Google云进行识别)

-[在XIAO ESP32S3 Sense上部署ChatGPT](#在XIAO ESP32S3 - Sense上部署ChatGPT)

-[屏幕显示内容的设计与程序的整合](#屏幕显示内容的设计—程序的整合)

总体框架结构如下图所示。
<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/17.png>" style={{width:1000, height:'auto'}}/></div>

## 开始

在开始此项目之前，您可能需要按此处所述提前准备硬件和软件。

### 硬件准备

如果您想完整体验整个节目内容，您至少需要具备以下硬件设备。

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

除此之外，我们需要一个FAT32格式的microSD卡，不超过32GB来存储录音文件。

由于XIAO EPS32S3 Sense设计有三个上拉电阻R4~R6连接SD卡插槽，圆形显示器也有上拉电阻，因此两者同时使用时无法读取SD卡。为了解决这个问题，我们需要在XIAO ESP32S3 Sense扩展板上切断J3。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/33.png>" style={{width:500, height:'auto'}}/></div>

断开J3连接后，XIAO ESP32S3 Sense上的SD卡插槽将不能正常工作，需要在圆形显示屏上的SD卡插槽插入microSD卡。

接下来，请依次安装microSD卡、XIAO ESP32S3 Sense和圆形显示屏。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/101.gif>" style={{width:500, height:'auto'}}/></div>

:::提示
我们建议您先拆卸相机模块，以免在切断与刀片的J3连接时刮伤相机。
:::

### 软件准备

由于使用的是XIAO ESP32S3，请在开始之前按照Wiki的说明安装XIAO ESP32S3安装包。

-[使用Seeed Studio XIAO ESP32S3 (Sense)入门](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/#software-preparation)

除此之外，我们还为XIAO使用了圆形显示，所以你还需要根据Wiki为扩展板准备库。

-[开始Seeed Studio为XIAO设计的轮展](https://wiki.seeedstudio.com/get_start_round_display/#getting-started)

在项目过程中，我们也可能会使用一些第三方库，比如ChatGPT的库和ArduinoJSON，可以在这里下载并添加到Arduino开发环境中。

——(库)(<https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/libraries>)

除了基本的库，我们还需要使用Node服务，所以你需要自己安装Nodejs，你可以直接从[官方网站](https://nodejs.org/en)下载它。

一切就绪后，让我们开始今天的教程。

## 注册并启用谷歌云语音转文本服务

:::提示
您也可以直接参考[官方谷歌云教程](https://cloud.google.com/speech-to-text/docs/before-you-begin#setting_up_your_google_cloud_platform_project)关于如何注册和启动谷歌云语音转文本服务进行配置。

:::

语音到文本是一个由谷歌的人工智能(AI)技术提供支持的API。您将音频数据发送到语音转文本，然后接收音频数据的文本转录作为响应。在您可以开始向语音转文本发送请求之前，您必须启用谷歌云控制台中的API。

### 步骤 1.登录到谷歌云控制台

你可以通过点击[这里](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559)跳转到谷歌云控制台，如果你还没有注册谷歌云，你可以在[这里](https://console.cloud.google.com/?_ga=2.241031875.1758680688.1685496686-1606155345.1684977559)注册。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/18.png>" style={{width:1000, height:'auto'}}/></div>

### 步骤 2.[转到项目选择器页面](https://console.cloud.google.com/projectselector2/home/dashboard?_ga=2.5754355.1758680688.1685496686-1606155345.1684977559)

您可以选择现有项目，也可以创建一个新项目。有关创建项目的更多信息，请参见[创建和管理项目](https://cloud.google.com/resource-manager/docs/creating-managing-projects)。

如果您创建了一个新项目，将提示您将一个计费帐户链接到这个项目。如果你使用的是预先存在的项目，请确保启用了计费功能。

:::提示
注意:您必须启用计费功能才能使用语音转文本API，但是您将不会被收费，除非您超过免费配额。查看[定价](https://cloud.google.com/speech-to-text/pricing)页面了解更多细节。
:::

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/2.png>" style={{width:1000, height:'auto'}}/></div>

### 步骤 3.启动语音转文本服务

一旦您选择了一个项目并将其链接到计费帐户，您就可以启用语音转文本API。打开页面顶部的搜索产品和资源栏，输入**语音**。从结果列表中选择**云语音转文本API**。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/1.png>" style={{width:600, height:'auto'}}/></div>

### 步骤 4.创建服务帐户

如果你的项目还没有服务账户，请创建一个新的服务账户。您必须创建一个服务帐户才能使用语音转文本。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/3.png>" style={{width:600, height:'auto'}}/></div>

在新弹出的页面中，在**CREATE CREDENTIALS**下选择**Service account**。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/4.png>" style={{width:1000, height:'auto'}}/></div>

在**服务帐户名称**框中，为新的服务帐户键入一个唯一的名称。您的输入将自动填充到**服务帐户ID框**中。服务帐户描述框是可选的，但如果您计划将多个服务帐户关联到您的项目，则建议您使用该框。在此框中输入服务帐户的简要描述，然后单击**创建并继续**。
<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/5.png>" style={{width:500, height:'auto'}}/></div>

我们建议您为您的服务帐户分配一个基本IAM角色。如果需要，您也可以为单个服务帐户分配多个角色。关于可用的角色和每个角色的权限，请参见[IAM roles](https://cloud.google.com/iam/docs/understanding-roles)。单击下拉菜单，选择角色菜单并向下滚动到**Owner**。您可以从右边列中出现的选项中为这个服务帐户选择一个角色。点击**继续**。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/6.png>" style={{width:500, height:'auto'}}/></div>

最后一步允许您有选择地允许其他实体(个人、谷歌组等)访问您的服务帐户。如果你不需要授予额外的权限，你可以点击**DONE**而不输入任何信息。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/7.png>" style={{width:500, height:'auto'}}/></div>

服务账户现在列在**服务账户**页面上。您可以更改服务帐户的权限，添加或生成新的密钥，并在任何时候授予访问权限。
<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/8.png>" style={{width:1000, height:'auto'}}/></div>

### 步骤 5.为你的服务账户创建一个JSON密钥

当您发送语音转文本请求时，您需要在[身份验证过程](https://cloud.google.com/speech-to-text/docs/before-you-begin#set_up_your_environment_variables)中使用此私钥。
要创建密钥，请单击服务帐户并选择**KEYS**选项卡。单击**ADD KEY -> Create new KEY**。我们建议你创建一个JSON格式的密钥。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/9.png>" style={{width:800, height:'auto'}}/></div>

将自动下载您选择的格式的新键。将这个文件保存在一个安全的地方，并记录下文件的路径。在每个新的语音转文本会话开始时进行身份验证时，您需要将**GOOGLE_APPLICATION_CREDENTIALS**环境变量指向此文件。这是验证语音转文本请求的关键步骤。密钥的唯一ID出现在服务帐户名称旁边。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/10.png>" style={{width:1000, height:'auto'}}/></div>

:::注意

请保持JSON格式的密钥，因为我们将在后面的步骤中使用它。
:::

## 在本地主机上部署语音转文本服务

### 步骤 6.下载项目文件

我们已经打包了完成整个教程所需的项目文件，您可以使用下面的按钮直接从Github下载它，也可以使用Git命令在本地下载它。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载项目</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

```
git clone https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT.git
```

与此同时，你可以将我们在**第5步**中准备的JSON文件复制到**NodejsServer**文件夹中，我们稍后会使用它。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/19.png>" style={{width:600, height:'auto'}}/></div>

### 步骤 7.设置身份验证环境变量

为了设置你的**GOOGLE_APPLICATION_CREDENTIALS**，你必须有一个与你的项目相关联的服务帐户，并且能够访问服务帐户的JSON密钥。

通过设置环境变量**GOOGLE_APPLICATION_CREDENTIALS**，为应用程序代码提供身份验证凭据。

从` @theme/Tabs `导入选项卡;

从` @theme/TabItem `中导入TabItem;
<Tabs>
<TabItem value="Windows" label="Windows">

PowerShell:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

将**KEY_PATH**替换为包含你的服务账户密钥的JSON文件的路径。

例如:

```
$env:GOOGLE_APPLICATION_CREDENTIALS="C:\Users\username\Downloads\service-account-file.json"
```

命令提示符:

```
set GOOGLE_APPLICATION_CREDENTIALS=KEY_PATH
```

将**KEY_PATH**替换为包含你的服务账户密钥的JSON文件的路径。

</TabItem>

<TabItem value="MacOS or Linux" label="MacOS or Linux">

```
export GOOGLE_APPLICATION_CREDENTIALS="KEY_PATH"
```

将**KEY_PATH**替换为包含你的服务账户密钥的JSON文件的路径。
例如:

```
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
```

</TabItem>
</Tabs>

在上一步中，我们已经将JSON文件放在**NodejsServer**文件夹中，因此我们可以直接进入该文件夹，右键单击并选择**Open In Powershell**以进入Windows终端。

然后输入命令。

```
$env:GOOGLE_APPLICATION_CREDENTIALS="tensile-yen-3xxxxx-fdxxxxxxxxxx.json"
```

:::提示
执行上述命令时，请使用您的JSON文件名。
:::

:::提醒
如果你重启了计算机或关闭了Powershell，这可能需要你重新配置环境变量以添加密钥。
:::

### 步骤 8.测试本地谷歌云语音转文本服务的部署

一切就绪后，就可以使用一段录制的音频，结合json程序来检查部署是否成功地将录音转换为文本。

请在**NodejsServer**项目文件夹中打开一个Powershell窗口。

然后输入如下命令。该命令将执行`speechAPItest.js`文件，并将项目resources文件夹中的录音文件作为音频输入源发送到谷歌Cloud进行分析并返回识别的语音内容。

```
node ./speechAPItest.js
```

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/13.png>" style={{width:800, height:'auto'}}/></div>

如果您的实现如上面所示工作，这表明您已经成功地在本地主机上部署了谷歌云服务，并准备继续下一步。

如果您遇到问题，可以咨询[官方谷歌云说明](https://cloud.google.com/speech-to-text/docs/)，以检查部署过程中是否有任何错误或遗漏的步骤。

## 上传XIAO ESP32S3 Sense录制的声音文件到谷歌云端进行识别

接下来，我们更改上传的音频文件的路径。从本地上传到通过XIAO ESP32S3 Sense录音上传。XIAO ESP32S3 Sense录制的音频文件先保存到microSD卡，再通过本地端口传输到谷歌云端。

### 步骤 9.开启谷歌云语音识别服务的端口侦听

类似地，在NodejsServer文件夹中，使用powershell执行以下命令。

```
node ./speechAPIServer.js
```

一旦执行，**speechAPIServer.js**程序将被执行，并将持续监听`localhost:8888`。一旦文件传输到这个端口，就会调用谷歌云服务。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/20.png>" style={{width:800, height:'auto'}}/></div>

一旦开始监听，只要让窗口打开，服务就会持续。

### 步骤 10.检查主机IP地址

因为XIAO之后的录音文件需要通过主机的端口号上传到谷歌Cloud Services，我们需要知道你的计算机主机的IP地址。

<Tabs>
<TabItem value="Windows" label="Windows">

在Powershell中执行以下命令获取计算机的IP地址信息。

```
ipcofig
```

</TabItem>

<TabItem value="MacOS or Linux" label="MacOS or Linux">

在shell中执行以下命令获取计算机的IP地址信息。

```
ifconfig
```

</TabItem>
</Tabs>

请把您的IP地址记下来，我们稍后会用到。

### 步骤 11.为XIAO ESP32S3 Sense上传程序

在项目文件夹 **[XIAOESP32S3-RECORD-UPLOAD](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino)** 中，我们已经为本节中的示例准备了程序。

<details>

<summary>单击以预览完整程序</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

//Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 10      // seconds, The maximum value is 240

// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";

bool isWIFIConnected;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  //The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }
  
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  delay(500);
  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop() {
  // put your main code here, to run repeatedly:
}

void i2s_adc(void *arg)
{
  uint32_t sample_size = 0;

  //This variable will be used to point to the actual recording buffer
  uint8_t *rec_buffer = NULL;
  Serial.printf("Ready to start recording ...\n");

  File file = SD.open(filename, FILE_WRITE);

  // Write the header to the WAV file
  uint8_t wav_header[WAV_HEADER_SIZE];

  //Write the WAV file header information to the wav_header array
  generate_wav_header(wav_header, record_size, SAMPLE_RATE);

  //Call the file.write() function to write the data in the wav_header array to the newly created WAV file
  file.write(wav_header, WAV_HEADER_SIZE);

  // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data.
  rec_buffer = (uint8_t *)ps_malloc(record_size);
  if (rec_buffer == NULL) {
    Serial.printf("malloc failed!\n");
    while(1) ;
  }
  Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());

  // Start recording
  // I2S port number (in this case I2S_NUM_0), 
  // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
  // the size of the data to be read (i.e. record_size),
  // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
  // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
  if (sample_size == 0) {
    Serial.printf("Record Failed!\n");
  } else {
    Serial.printf("Record %d bytes\n", sample_size);
  }

  // Increase volume
  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
  }

  // Write data to the WAV file
  Serial.printf("Writing to the file ...\n");
  if (file.write(rec_buffer, record_size) != record_size)
    Serial.printf("Write file Failed!\n");

  free(rec_buffer);
  rec_buffer = NULL;
  file.close();
  Serial.printf("The recording is over.\n");
    
  listDir(SD, "/", 0);

  if(isWIFIConnected){
    uploadFile();
  }
  
  vTaskDelete(NULL);
}


void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}


void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  char* ssid = "wifi-ssid";
  char* password = "wifi-password";
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  while(true){
    vTaskDelay(1000);
  }
}

void uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    Serial.println("====================      End      ====================");
  }else{
    Serial.println("Error");
  }
  file.close();
  client.end();
}
```

</details>

在编译和上传示例程序之前，您需要更改一些内容以适应您的情况。

1. **录音时间** - On [line 13](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL13C2-L13C2) of the code, the default recording time is set to 10 seconds, you can adjust this recording time to suit you, up to a maximum of 240 seconds.
2. **保存的录音文件名称** - On [line 19](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L19) of the code, you can change a name for your recording file.
3. **WiFi 网络名称** - Change the network name of the code [line 172](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#L172) to the name of the network under the same LAN as the host where you are deploying Google Cloud Services.
4. **WiFi 网络密码** - On [line 172](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL173C5-L173C5) of the code, change the password corresponding to the network.
5. **主机IP地址** - 在代码的[第198行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-RECORD-UPLOAD/XIAOESP32S3-RECORD-UPLOAD.ino#LL198C7-L198C7)中，需要将这里的IP地址更改为您的主机IP地址，并保持端口号为8888。

一旦你改变了程序，以适应你的需要，上传它，你可以打开串行监视器，并开始准备记录你想说的。十秒录音后，谷歌云将对您的录音文件进行分析，并将识别结果返回给您。
<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/15.png>" style={{width:1000, height:'auto'}}/></div>

## 在XIAO ESP32S3 Sense上部署ChatGPT

接下来我们增加难度。继续向代码中添加ChatGPT调用。

### 步骤 12.用标识的文本向ChatGPT提出一个问题

在项目文件夹 **[XIAOESP32S3-SPEECH-TO-CHATGPT](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino)** 我们已经为本节中的示例准备了程序。

<details>

<summary>单击以预览完整程序</summary>

```cpp
#include <I2S.h>
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include "FS.h"
#include "SD.h"
#include "SPI.h"

// Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // seconds, The maximum value is 240

const char* ssid = "wifi-ssid";
const char* password = "wifi-password";


// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;

File file;
const char filename[] = "/recording.wav";
bool isWIFIConnected;

String chatgpt_Q;

TaskHandle_t chatgpt_handle;
WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");

//*****************************************Arduino Base******************************************//

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while (!Serial) ;
  
  I2S.setAllPins(-1, 42, 41, -1, -1);
  
  // The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
    Serial.println("Failed to initialize I2S!");
    while (1) ;
  }

  if(!SD.begin(D2)){
    Serial.println("Failed to mount SD Card!");
    while (1) ;
  }

  xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
  delay(500);
  xTaskCreate(i2s_adc, "i2s_adc", 1024 * 8, NULL, 1, NULL);
  xTaskCreate(chatgpt, "chatgpt", 1024 * 8, NULL, 2, &chatgpt_handle);
}

void loop() {
  // put your main code here, to run repeatedly:
}

//*****************************************RTOS TASK******************************************//

void i2s_adc(void *arg)
{
  while(1){
    uint32_t sample_size = 0;
  
    // This variable will be used to point to the actual recording buffer
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // Write the header to the WAV file
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // Write the WAV file header information to the wav_header array
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // Call the file.write() function to write the data in the wav_header array to the newly created WAV file
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // Start recording
    // I2S port number (in this case I2S_NUM_0), 
    // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
    // the size of the data to be read (i.e. record_size),
    // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
    // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("Record Failed!\n");
    } else {
      Serial.printf("Record %d bytes\n", sample_size);
    }
  
    // Increase volume
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // Write data to the WAV file
    Serial.printf("Writing to the file ...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("Write file Failed!\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
      
    listDir(SD, "/", 0);

    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
    
    if(uploadStatus)
      xTaskNotifyGive(chatgpt_handle);
    vTaskDelay(10000);       // Each recording is spaced 10s apart
  }
//  vTaskDelete(NULL);
}

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // Ignore SSL certificate validation
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}

void chatgpt(void *pvParameters){
  while(1){
    // Waiting for notification signal from Task 1
    ulTaskNotifyTake(pdTRUE, portMAX_DELAY);

    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", chatgpt_Q, result)) {
      Serial.println("===OK===");
      Serial.println(result);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
    }

  }
}

//*****************************************Audio Process******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************File Process******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    String response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    chatgpt_Q = response;
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    return true;
  }else{
    Serial.println("Error");
    return false;
  }
  
}
```

</details>

同样，在使用这个程序之前，您需要根据需要对代码进行以下更改

1. **WiFi网络名称**—将代码[第18行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18)的网络名称更改为与部署谷歌云服务的主机在同一局域网下的网络名称。

2. **WiFi网络密码** -在[第19行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40)的代码中，修改对应的网络密码。

3.**主机IP地址**—在代码的[第241行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7)中，您需要将这里的IP地址更改为您的主机IP地址，并保持端口号为8888。

4. **OpenAI API令牌**—由于需要调用ChatGPT接口，因此需要准备OpenAI令牌并将其填充到代码[第33行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33)中。如果这是您第一次使用令牌，您可以阅读[此Wiki的内容](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page)以了解如何获取它们。


修改后，上传程序并打开串行监视器。录制之后，你会看到ChatGPT返回的答案。
<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/16.png>" style={{width:1000, height:'auto'}}/></div>

## 屏幕显示内容设计与节目整合

最后，我们添加一些更花哨的东西。我们没有使用串行显示器，这是一个不太适合显示效果的界面，而是使用触摸屏来实现触摸和点击功能。

### 步骤 13.使用SquareLine Studio绘制显示屏

SquareLine Studio是由嵌入式系统图形库LVGL开发的GUI设计工具。SquareLine Studio旨在帮助开发人员快速有效地为他们的嵌入式系统创建和设计用户界面。它为设计ui提供了拖放界面，并且支持各种部件和主题。


所以我们建议你使用这个工具来设计这样简单的界面。如果你想了解更多关于SquareLine Studio中圆形显示的使用，你可以去我们的使用[Wiki](https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display/#drawing-complex-ui-interfaces-with-squareline-studio)。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/21.png>" style={{width:1000, height:'auto'}}/></div>

由于篇幅的原因，本文将不详细介绍如何设计显示页面，但我们将提供导出的程序代码，您可以使用。它目前位于[项目文件夹](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/tree/main/ui)下的**ui**文件夹中。

:::提醒
我们推荐你使用SquareLine Studio的**v1.2.3**版本。经过测试，v1.3.0版本可能存在与tft_eSPI库的兼容性问题。
:::

### 步骤 14. 集成过程

最终的完整项目代码在 **[XIAOESP32S3-SPEECH-CHATGPT-COMPLETE](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/main/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE/XIAOESP32S3-SPEECH-CHATGPT-COMPLETE.ino)** 文件夹中。

<details>

<summary>Click to preview the full program</summary>

```cpp
#include <lvgl.h>
#include <TFT_eSPI.h>
#include "ui.h"
#include <WiFi.h>
#include <WiFiClientSecure.h>
#include <ArduinoJson.h>
#include <ChatGPT.hpp>
#include <I2S.h>
#include <HTTPClient.h>
#include "FS.h"
#include "SD.h"
#include "SPI.h"


// Import the library for the round display and define the frame used as the TFT display frame
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"


/*Change to your screen resolution*/
static const uint16_t screenWidth  = 240;
static const uint16_t screenHeight = 240;


// Variables to be used in the recording program, do not change for best
#define SAMPLE_RATE 16000U
#define SAMPLE_BITS 16
#define WAV_HEADER_SIZE 44
#define VOLUME_GAIN 2
#define RECORD_TIME 5  // seconds, The maximum value is 240


// Number of bytes required for the recording buffer
uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;


// Name of the file in which the recording is saved
File file;
const char filename[] = "/recording.wav";


// Network connection status flag
bool isWIFIConnected;


// Answers to the questions chatgpt replied to
String response;


// Flags for different task starts
bool recordTask = false;
bool chatgptTask = false;

WiFiClientSecure client;
ChatGPT<WiFiClientSecure> chat_gpt(&client, "v1", "OpenAI-TOKEN");   // Please fill in your OpenAI key


// Please change to your network
const char* ssid = "wifi-ssid";
const char* password = "wifi-password";

static lv_disp_draw_buf_t draw_buf;
static lv_color_t buf[ screenWidth * screenHeight / 10 ];


//****************************************LVGL****************************************************//

#if LV_USE_LOG != 0
/* Serial debugging */
void my_print(const char * buf)
{
    Serial.printf(buf);
    Serial.flush();
}
#endif

/* Display flushing */
void my_disp_flush( lv_disp_drv_t *disp, const lv_area_t *area, lv_color_t *color_p )
{
    uint32_t w = ( area->x2 - area->x1 + 1 );
    uint32_t h = ( area->y2 - area->y1 + 1 );

    tft.startWrite();
    tft.setAddrWindow( area->x1, area->y1, w, h );
    tft.pushColors( ( uint16_t * )&color_p->full, w * h, true );
    tft.endWrite();

    lv_disp_flush_ready( disp );
}

/*Read the touchpad*/
void my_touchpad_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )
{
    // uint16_t touchX = 0, touchY = 0;
    // bool touched = false;//tft.getTouch( &touchX, &touchY, 600 );

    lv_coord_t touchX, touchY;
    chsc6x_get_xy(&touchX, &touchY);

    // if( !touched )
    if(!chsc6x_is_pressed())
    {
        data->state = LV_INDEV_STATE_REL;
    }
    else
    {
        data->state = LV_INDEV_STATE_PR;

        /*Set the coordinates*/
        data->point.x = touchX;
        data->point.y = touchY;

//        Serial.print( "Data x " );
//        Serial.println( touchX );
//
//        Serial.print( "Data y " );
//        Serial.println( touchY );

        // You can also start recording by uncommenting and configuring by clicking on the logo
//        if((touchX < 240 && touchX > 230) && (touchY < 120 && touchY > 100)){
          recordTask = true;
//        }
    }
}

//****************************************Arduino Base****************************************************//

void setup()
{
    Serial.begin( 115200 ); /* prepare for possible serial debug */
//    while(!Serial);

    pinMode(TOUCH_INT, INPUT_PULLUP);
    Wire.begin();

    String LVGL_Arduino = "Hello Arduino! ";
    LVGL_Arduino += String('V') + lv_version_major() + "." + lv_version_minor() + "." + lv_version_patch();

    Serial.println( LVGL_Arduino );
    Serial.println( "I am LVGL_Arduino" );

    lv_init();

#if LV_USE_LOG != 0
    lv_log_register_print_cb( my_print ); /* register print function for debugging */
#endif

    tft.begin();          /* TFT init */
    tft.setRotation( 0 ); /* Landscape orientation, flipped */

    lv_disp_draw_buf_init( &draw_buf, buf, NULL, screenWidth * screenHeight / 10 );

    /*Initialize the display*/
    static lv_disp_drv_t disp_drv;
    lv_disp_drv_init( &disp_drv );
    /*Change the following line to your display resolution*/
    disp_drv.hor_res = screenWidth;
    disp_drv.ver_res = screenHeight;
    disp_drv.flush_cb = my_disp_flush;
    disp_drv.draw_buf = &draw_buf;
    lv_disp_drv_register( &disp_drv );

    /*Initialize the (dummy) input device driver*/
    static lv_indev_drv_t indev_drv;
    lv_indev_drv_init( &indev_drv );
    indev_drv.type = LV_INDEV_TYPE_POINTER;
    indev_drv.read_cb = my_touchpad_read;
    lv_indev_drv_register( &indev_drv );

    ui_init();

    I2S.setAllPins(-1, 42, 41, -1, -1);
  
    //The transmission mode is PDM_MONO_MODE, which means that PDM (pulse density modulation) mono mode is used for transmission
    if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {
        Serial.println("Failed to initialize I2S!");
        while (1) ;
    }

    if(!SD.begin(D2)){
        Serial.println("Failed to mount SD Card!");
        while (1) ;
    }

    Serial.println( "Setup done" );

    // Create a FreeRTOS task to check the connection status of the network at regular intervals.
    xTaskCreate(wifiConnect, "wifi_Connect", 4096, NULL, 0, NULL);
}

void loop()
{
    lv_timer_handler(); /* let the GUI do its work */
    record();
    chatgpt();
    delay(5);
}

//*****************************************Audio Process******************************************//

void generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)
{
  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/
  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;
  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;
  const uint8_t set_wav_header[] = {
    'R', 'I', 'F', 'F', // ChunkID
    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize
    'W', 'A', 'V', 'E', // Format
    'f', 'm', 't', ' ', // Subchunk1ID
    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)
    0x01, 0x00, // AudioFormat (1 for PCM)
    0x01, 0x00, // NumChannels (1 channel)
    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate
    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate
    0x02, 0x00, // BlockAlign
    0x10, 0x00, // BitsPerSample (16 bits)
    'd', 'a', 't', 'a', // Subchunk2ID
    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size
  };
  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));
}

//*****************************************File Process******************************************//

void listDir(fs::FS &fs, const char * dirname, uint8_t levels){
    Serial.printf("Listing directory: %s\n", dirname);

    File root = fs.open(dirname);
    if(!root){
        Serial.println("Failed to open directory");
        return;
    }
    if(!root.isDirectory()){
        Serial.println("Not a directory");
        return;
    }

    File file = root.openNextFile();
    while(file){
        if(file.isDirectory()){
            Serial.print("  DIR : ");
            Serial.println(file.name());
            if(levels){
                listDir(fs, file.path(), levels -1);
            }
        } else {
            Serial.print("  FILE: ");
            Serial.print(file.name());
            Serial.print("  SIZE: ");
            Serial.println(file.size());
        }
        file = root.openNextFile();
    }
}

bool uploadFile(){
  file = SD.open(filename, FILE_READ);
  if(!file){
    Serial.println("FILE IS NOT AVAILABLE!");
    return false;
  }

  Serial.println("===> Upload FILE to Node.js Server");

  HTTPClient client;
  client.begin("http://192.168.1.208:8888/uploadAudio");
  client.addHeader("Content-Type", "audio/wav");
  int httpResponseCode = client.sendRequest("POST", &file, file.size());
  Serial.print("httpResponseCode : ");
  Serial.println(httpResponseCode);

  if(httpResponseCode == 200){
    response = client.getString();
    Serial.println("==================== Transcription ====================");
    Serial.println(response);
    const char* chatgpt_Q = response.c_str();
    lv_label_set_text(ui_question, chatgpt_Q);
    Serial.println("====================      End      ====================");
    file.close();
    client.end();
    recordTask = false;
    chatgptTask = true;
    return true;
  }else{
    Serial.println("Error");
    lv_label_set_text(ui_question, "Error");
    recordTask = false;
    chatgptTask = false;
    return false;
  }
}


//*****************************************Main Functions******************************************//

void record(){
  if(recordTask){
    Serial.println("Record Task Begin!!!");
    lv_label_set_text(ui_question, "Recording ...");
    lv_timer_handler();
    uint32_t sample_size = 0;
    
    // This variable will be used to point to the actual recording buffer
    uint8_t *rec_buffer = NULL;
    Serial.printf("Ready to start recording ...\n");
  
    File file = SD.open(filename, FILE_WRITE);
  
    // Write the header to the WAV file
    uint8_t wav_header[WAV_HEADER_SIZE];
  
    // Write the WAV file header information to the wav_header array
    generate_wav_header(wav_header, record_size, SAMPLE_RATE);
  
    // Call the file.write() function to write the data in the wav_header array to the newly created WAV file
    file.write(wav_header, WAV_HEADER_SIZE);
  
    // This code uses the ESP32's PSRAM (external cache memory) to dynamically allocate a section of memory to store the recording data.
    rec_buffer = (uint8_t *)ps_malloc(record_size);
    if (rec_buffer == NULL) {
      Serial.printf("malloc failed!\n");
      while(1) ;
    }
    Serial.printf("Buffer: %d bytes\n", ESP.getPsramSize() - ESP.getFreePsram());
  
    // Start recording
    // I2S port number (in this case I2S_NUM_0), 
    // a pointer to the buffer to which the data is to be written (i.e. rec_buffer),
    // the size of the data to be read (i.e. record_size),
    // a pointer to a variable that points to the actual size of the data being read (i.e. &sample_size),
    // and the maximum time to wait for the data to be read (in this case portMAX_DELAY, indicating an infinite wait time).
    esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);
    if (sample_size == 0) {
      Serial.printf("Record Failed!\n");
    } else {
      Serial.printf("Record %d bytes\n", sample_size);
    }
  
    // Increase volume
    for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {
      (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;
    }
  
    // Write data to the WAV file
    Serial.printf("Writing to the file ...\n");
    if (file.write(rec_buffer, record_size) != record_size)
      Serial.printf("Write file Failed!\n");
  
    free(rec_buffer);
    rec_buffer = NULL;
    file.close();
    Serial.printf("The recording is over.\n");
    lv_label_set_text(ui_question, "Identifying ...");
    lv_timer_handler();
    listDir(SD, "/", 0);
  
    bool uploadStatus = false;
  
    if(isWIFIConnected){
      uploadStatus = uploadFile();
    }
  }
}

void chatgpt(){
  if(chatgptTask){
    Serial.println("ChatGPT Task Begin!!!");
    lv_label_set_text(ui_answer,"Answering ...");
    lv_timer_handler();
    String result;
    if (chat_gpt.simple_message("gpt-3.5-turbo-0301", "user", response, result)) {
      Serial.println("===OK===");
      Serial.println(result);
      const char* chatgpt_A = result.c_str();
      lv_label_set_text(ui_answer, chatgpt_A);
    } else {
      Serial.println("===ERROR===");
      Serial.println(result);
      lv_label_set_text(ui_answer, "ERROR");
      lv_timer_handler();
    }
    recordTask = false;
    chatgptTask = false;
  }
}

//*****************************************RTOS******************************************//

void wifiConnect(void *pvParameters){
  isWIFIConnected = false;
  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    vTaskDelay(500);
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
  isWIFIConnected = true;
  // Ignore SSL certificate validation
  client.setInsecure();
  while(true){
    vTaskDelay(1000);
  }
}
```

</details>

在编译和上传示例程序之前，您需要更改一些内容以适应您的情况。

1. **网络的WiFi名称**—将代码[第18行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L18)的网络名称更改为与部署谷歌云服务的主机相同局域网下的网络名称。

2. **WiFi的网络密码**——在[第19行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL19C40-L19C40)的代码上，修改对应的网络密码。

3.**主机IP地址**—在代码的[第241行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#LL241C7-L241C7)中，需要将这里的IP地址更改为主机IP地址，并保持端口号为8888。

4. **OpenAI API令牌**—由于需要调用ChatGPT接口，因此需要准备OpenAI令牌并将其填充到代码[第33行](https://github.com/limengdu/XIAO-ESP32S3Sense-Speech2ChatGPT/blob/404007a16f42495576d729848d00c6bb6a8149fc/XIAOESP32S3-SPEECH-TO-CHATGPT/XIAOESP32S3-SPEECH-TO-CHATGPT.ino#L33)中。如果这是您第一次使用令牌，您可以阅读[此Wiki的内容](https://wiki.seeedstudio.com/xiaoesp32c3-chatgpt/#submit-questions-via-the-built-in-web-page)以了解如何获取它们。

一旦你上传了程序并点击屏幕，录制任务将开始，这时你可以对着麦克风说出你想问的问题。一旦识别出结果，问题就会显示在屏幕的上半部分。之后，我们将立即得到ChatGPT的答案，它将显示在屏幕底部。

<div style={{textAlign:'center'}}><img src="<https://files.seeedstudio.com/wiki/xiaoesp32s3sense-speech2chatgpt/22.jpg>" style={{width:600, height:'auto'}}/></div>

## 技术支持和产品讨论
感谢您选择我们的产品！我们会为您提供各种支持，以确保您在使用我们产品的过程中获得最顺畅的体验。我们提供多种沟通渠道，以满足您的不同需求和偏好。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
