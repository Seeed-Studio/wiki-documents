---
description: 使用 XIAO ESP32S3 制作超紧凑的全球定位追踪器。
title: 使用 XIAO ESP32S3 (Sense) 的地理位置追踪器
keywords:
- location
- tracker
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 06/14/2023
  author: Citric
---

# 使用 XIAO ESP32S3 的地理位置追踪器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

市面上的自制追踪器往往面临几个问题。例如，追踪精度差、体积庞大，以及对追踪器使用环境要求苛刻。XIAO 凭借其出色的体积控制吸引了众多创客。那么我们能否仅使用 XIAO 来制作一个可以全球定位的追踪器呢？

在本教程中，我们将探索两种更受欢迎的方式来部署 XIAO（不使用 GPS 模块）来创建一个令人惊喜的追踪器。

## 概述

本文将介绍两种定位方式，一种是从 XIAO 连接的网络 IP 地址获取位置信息来实现定位。另一种是使用 Wi-Fi 定位系统（通常称为 WiPS 或 WFPS）。

- **方法 1：通过 IP 地址定位**

IP 地址定位的原理涉及使用将 IP 地址映射到物理位置的数据库。这个过程通常被称为地理定位。

IP 地址查找涉及使用反向 DNS 查找来检索与 IP 地址关联的域名。然后可以使用域名来识别托管网站或服务的服务器的地理位置。

IP 地址映射涉及使用将 IP 地址映射到物理位置的数据库。该数据库可能包含与每个 IP 地址关联的城市、地区和国家等信息。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

IP 地址地理定位的准确性可能因使用的方法和可用数据的质量而有所不同。一般来说，IP 地址地理定位对于固定设备（如台式计算机和服务器）最为准确，这些设备通常与固定的物理位置相关联。移动设备（如智能手机和平板电脑）可能更难准确定位，因为它们可以移动并连接到不同的 Wi-Fi 网络。

- **方法 2：通过 [WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system) 定位**

Wi-Fi 定位系统是一种地理定位系统，它使用附近 Wi-Fi 热点和其他无线接入点的特征来发现设备的位置。

它用于卫星导航（如 GPS）由于各种原因（包括室内多径和信号阻塞）不足的地方，或者获取卫星定位需要太长时间的地方。此类系统包括辅助 GPS、通过热点数据库的城市定位服务和室内定位系统。Wi-Fi 定位利用了 21 世纪初城市地区无线接入点的快速增长。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

用于无线接入点定位的最常见和最广泛的定位技术基于测量接收信号强度（接收信号强度指示或 RSSI）和"指纹识别"方法。用于地理定位无线接入点的典型参数包括其 SSID 和 MAC 地址。准确性取决于已将位置输入数据库的附近接入点的数量。Wi-Fi 热点数据库通过将移动设备 GPS 位置数据与 Wi-Fi 热点 MAC 地址相关联来填充。可能发生的信号波动会增加用户路径中的错误和不准确性。为了最小化接收信号中的波动，有某些技术可以应用来过滤噪声。

这是 XIAO 能够在不借助 GPS 模块的情况下获取位置的理论基础。我们还将比较通过上述两种方法获取定位的最佳方式，结合使用 Round Display，在屏幕上以地图形式显示坐标。以下是目录和论文摘要。

- [使用 XIAO ESP32S3 连接网络并获取公网 IP](#connect-to-the-network-and-obtain-public-ip-with-the-xiao-esp32s3)
- [使用 ipstack 平台获取位置坐标](#obtain-location-coordinates-with-the-ipstack-platform)
- [通过 HTTPS 服务从 Google Maps 下载静态图像](#download-static-images-from-google-maps-via-https-service)
- [在 Round Display 上显示位置地图](#display-the-location-map-on-the-round-display)
- [使用 WFPS 方法定位](#positioning-using-the-wfps-method)
- [实时更新最新位置](#live-updates-on-the-latest-location)

## 入门指南

要成功完成这个项目，您可能需要使用以下硬件。支持任何 XIAO ESP32 系列。

<div style={{textAlign:'center'}}>
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 立即购买 🖱️</font></span></strong>
            </a>
          </div>
        </td>
    </tr>
  </table>
</div>

除此之外，您还可以额外准备一个小型锂电池、microSD卡和外壳。组成一个完整的追踪器形式。

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 使用XIAO ESP32S3连接网络并获取公网IP

:::tip
如果您不熟悉XIAO ESP32S3的网络功能，可以阅读[Seeed Studio XIAO ESP32S3 (Sense)的WiFi使用](https://wiki.seeedstudio.com/cn/xiao_esp32s3_wifi_usage/)。
:::

在XIAO ESP32S3基础使用教程中，我们已经掌握了使用XIAO ESP32S3连接网络的方法。

```cpp
#include <WiFi.h>

// For network
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
}

void loop() {
}
```

使用IP地址查找位置的核心本质是获取XIAO的IP地址。然后很自然地会想到我们需要使用`WiFi.localIP()`函数来查找它。

然而，实际上，路由器会为XIAO分配一个内部IP地址，类似192.168.xxx.xxx，这无法查询位置信息。我们需要的是公网IP。所以我们需要使用以下方法。

```cpp
// Get local IP address
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("Public IP address: ");
    Serial.println(publicIP);
} else {
    Serial.println("Failed to get public IP address");
    return;
}
```

然后我们可以得到以下效果，这是第一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## 使用 ipstack 平台获取位置坐标

使用 IP 地址进行定位通常需要一些公共服务器库信息。我们可以借助一些平台的 API 接口来获取这些服务器信息。例如，在本教程中，我们将使用 [ipstack](https://ipstack.com) 平台。

ipstack 提供了一个强大的实时 IP 地理位置 API，能够查找准确的位置数据并评估来自风险 IP 地址的安全威胁。结果在毫秒内以 JSON 或 XML 格式提供。

ipstack 提供免费/付费搜索服务，[价格表](https://ipstack.com/product) 可以在下图中找到。在这个示例中，我们只是展示示例，使用**免费服务（100 次查询/月）**就足够了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### 步骤 1. 获取 ipstack API 访问密钥

如果这是您第一次使用 ipstack，那么您需要[注册一个新账户](https://ipstack.com/signup/free)。

注册并登录后，您将能够看到您的 API 密钥，请复制并保存在安全的地方，我们稍后会使用它。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2. 学习如何使用 ipstack API

ipstack 提供了详细的[文档](https://ipstack.com/documentation)，解释如何使用 ipstack API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

非常简单，对吧？只需发送**服务器地址 + IP 地址 + API 密钥**。

接下来我们需要了解 ipstack 会返回给我们什么样的 JSON 消息，并提取我们需要的信息，如城市、国家和经纬度。

```json
{
  "ip": "134.201.250.155",
  "hostname": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "zip": "90013",
  "latitude": 34.0453,
  "longitude": -118.2413,
  "location": {
    "geoname_id": 5368361,
    "capital": "Washington D.C.",
    "languages": [
        {
          "code": "en",
...
```

然后，我们只需要在 ArduinoJSON 库的帮助下提取我们需要的信息。

### 步骤 3. 通过 http 服务获取 IP 地址的坐标

总结一下，我们首先安装 **ArduinoJSON** 库。可以直接从 Arduino IDE 中搜索并下载。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

然后我们编写 `getLocation()` 函数，用它来获取 ipstack 返回的国家、城市以及经纬度信息，并将它们打印出来。

```cpp
// For ipstack
const char* IPStack_key = "<YOUR_API_KEY_HERE>";
String ip_address;

// Obtain the approximate coordinate position based on the current IP address of XIAO.
bool getLocation(){
  // Make HTTP request to IPStack API
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("Requesting URL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // Parse JSON response
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("Response payload: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("Country: " + country_name);
    Serial.println("Region: " + region_name);
    Serial.println("City: " + city);
    Serial.println("Latitude: " + String(latitude));
    Serial.println("Longitude: " + String(longitude));
    http.end(); // Close connection
    return true;
  } else {
    Serial.println("HTTP error code: " + String(httpCode));
    http.end(); // Close connection
    return false;
  }
}
```

在上述程序中，请将 ipstack API 密钥替换为您自己的。

接下来，我们可以看看通过 IP 地址定位的准确性如何。下面地图上的[红色标记点](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu)是通过 IP 地址获得的我的确切位置。红线的另一端是我的实际位置。它们之间相差 2.4 公里。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

可以看出，这种定位方式的误差在公里级别，这与我们对追踪器的期望相去甚远。

## 通过 HTTPS 服务从 Google Maps 下载静态图像

纬度和经度坐标在我们看来并不直观。即使它们包含国家和城市信息。所以我们想知道是否可以将这些纬度和经度坐标标记在地图上并显示在屏幕上。然后我们找到了 Google Cloud 的地图服务。

在开始之前，我认为了解 [Google Maps 服务的定价](https://mapsplatform.google.com/pricing/)对您来说很重要，以便决定是否继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

如果您是首次注册用户，您将获得 **\$300** 的免费额度。这里我们主要使用 Maps Static API，每 1000 次调用的费用为 **\$2.00**。

### 步骤 4. [设置您的 Google Cloud 项目](https://developers.google.com/maps/documentation/elevation/cloud-setup)并完成后续的设置说明

### 步骤 5. 启用 Google Maps API

您需要一个 google API 密钥来验证 Google API。导航到 [Google Developers Console](https://console.developers.google.com/apis) 启用 GeoLocation API。没有这个 API 密钥，您将收到错误响应。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

获得 API 后，请将其保存在安全的地方，我们将在后续的编程步骤中使用它。

:::note
如果您对当前使用 API 的环境有担忧，可以开启对 API 调用的限制，以避免因盗用而产生额外费用。开启某些限制可能需要修改您的程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## 在圆形显示屏上显示位置地图

:::tip
如果您是第一次使用 XIAO 圆形显示屏，那么您可能需要参考[这里的 Wiki](https://wiki.seeedstudio.com/cn/get_start_round_display/) 来为圆形屏幕配置您的 Arduino 环境。
:::

### 步骤 6. 学习如何调用 Google Cloud Static Maps API

点击[这里](https://developers.google.com/maps/documentation/maps-static/overview)阅读 Google Cloud Static Maps API 的文档。

文档给出了使用 API 的示例代码如下：

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Maps Static API URL 必须采用以下形式：

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

Maps Static API 使用以下 URL 参数定义地图图像：

- `center`（如果没有标记则为必需）定义地图的中心点，与地图所有边缘等距。此参数接受位置信息，可以是逗号分隔的 `{latitude,longitude}` 对（例如 "40.714728,-73.998672"）或字符串地址（例如 "city hall, new york, ny"），用于标识地球表面上的唯一位置。
- `zoom`（如果没有标记则为必需）定义地图的缩放级别，决定地图的放大程度。此参数接受与所需区域缩放级别对应的数值。
- `size`（必需）定义地图图像的矩形尺寸。此参数接受 `{horizontal_value}x{vertical_value}` 形式的字符串。
- `maptype`（可选）定义要构建的地图类型。有几种可能的地图类型值，包括 roadmap、satellite、hybrid 和 terrain。
- `markers`（可选）定义一个或多个要在指定位置附加到图像的标记。此参数接受单个标记定义，参数之间用管道字符（|）分隔。只要标记具有相同的样式，就可以在同一个 markers 参数中放置多个标记；您可以通过添加额外的 markers 参数来添加不同样式的其他标记。请注意，如果您为地图提供标记，则无需指定（通常必需的）center 和 zoom 参数。
- `key`（必需）允许您在 Google Cloud Console 中监控应用程序的 API 使用情况，并确保 Google 在必要时可以联系您的应用程序。

:::tip
上面只显示了最基本的参数，如果您需要自定义此静态地图，可以点击**[这里](https://developers.google.com/maps/documentation/maps-static/start)**阅读完整的参数列表。
:::

总之，我们可以将这些参数拼接在一起形成完整的发送字符串。

```cpp
// For google static maps
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<YOUR_API_KEY_HERE>";
int zoomLevel = 14;
double latitude;
double longitude;

// Stitching to form commands sent to Google Maps
String getPath(){
  String newPath = defaultPath;
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&zoom=";
  newPath += String(zoomLevel);
  newPath += "&size=240x240";
  newPath += "&maptype=roadmap";
  newPath += "&markers=size:tiny%7Ccolor:red%7C";
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&format=jpg-baseline";
  newPath += "&key=";
  newPath += Googlemaps_key;
  Serial.println(newPath);
  return newPath;
}
```

请将上面的代码替换为您自己的 Google Cloud Maps API。

### 步骤 7. 通过 HTTPS 获取返回的图像并写入 microSD 卡

我们需要一个足够大的存储介质来保存返回的静态图像，以便在屏幕显示程序中读取它们。Round Display 恰好支持 microSD 卡。

```cpp
// Static images of coordinates from Google Cloud Services
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("Trying: %s:443...", host);
  
  if(!client.connected()){
    client.stop();
    Serial.printf("*** Can't connect. ***\n-------\n");
    return false;
  }

  Serial.println("HTTPS Connected!");
  client.print("GET ");
  client.print(path);
  client.print(" HTTP/1.0\r\nHost: ");
  client.print(host);
  client.print("\r\nUser-Agent: ESP32S3\r\n");
  client.print("\r\n");

  while(client.connected()){
    String header = client.readStringUntil('\n');
    if(header.startsWith(F("HTTP/1."))){
      httpCode = header.substring(9, 12).toInt();
      if(httpCode != 200){
        client.stop();
        return false;
      }
    }
    if(header.startsWith(F("Content-Length: "))){
      contentLength = header.substring(15).toInt();
    }
    if(header == F("\r")){
      break;
    }
    
  }
  if(!(contentLength > 0)){
    client.stop();
    return false;
  }
  fs::File f = SD.open(fileName, "w");
  if(!f){
    Serial.println(F("FILE OPEN FAILED"));
    client.stop();
    return false;
  }
  int remaining = contentLength;
  int received;
  uint8_t buff[512] = {0};
  while(client.available() && remaining > 0){
    received = client.readBytes(buff, ((remaining > sizeof(buff)) ? sizeof(buff) : remaining));
    f.write(buff, received);
    if(remaining > 0){
      remaining -= received;
    }
    yield();
  }
  f.close();
  client.stop();
  Serial.println("DOWNLOAD END");
  return (remaining == 0 ? true : false);
}
```

### 步骤 8. 在圆形显示屏上显示 JPEG 图像

一般来说，圆形显示屏支持的 TFT 图形库只支持显示 BMP 格式的图像，如果我们需要显示其他格式的图像，需要使用一些第三方库，这里我们使用 **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)** 库。

请将此库下载为 zip 文件并将其添加到您的 Arduino 环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

我们通过参考该仓库提供的示例程序来重写我们的程序：

```cpp
// This next function will be called during decoding of the jpeg file to
// render each block to the TFT.  If you use a different TFT library
// you will need to adapt this function to suit.
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // Stop further decoding as image is running off bottom of screen
  if ( y >= tft.height() ) return 0;

  // This function will clip the image block rendering automatically at the TFT boundaries
  tft.pushImage(x, y, w, h, bitmap);

  // Return 1 to decode next block
  return 1;
}

void setup() {
  // Initialise the TFT
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // We need to swap the colour bytes (endianess)

  // Initialise SD before TFT
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD.begin failed!"));
    return;
  }
  Serial.println("\r\nInitialisation done.");

  // The jpeg image can be scaled by a factor of 1, 2, 4, or 8
  TJpgDec.setJpgScale(1);

  // The decoder must be given the exact name of the rendering function above
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

该项目的完整程序可以在此处找到。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

执行程序，您可以看到串口监视器的输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

屏幕还将显示与您的IP地址对应的位置图片。

## 使用WFPS方法进行定位

正如我们在前面的步骤中比较的那样，使用IP地址进行定位的精度确实很差。所以接下来，让我们使用WFPS方法改进程序，看看精度是否有变化。

当然，这个算法对我们来说很难实现，我们仍然依赖于Google Maps服务中的[地理位置API](https://developers.google.com/maps/documentation/geolocation/overview)。

地理位置API是一个服务，它接受包含移动客户端可以检测到的基站和WiFi接入点的HTTPS请求。它返回纬度/经度坐标和一个半径，表示每个有效输入结果的精度。

在社区中，**[gmag11](https://github.com/gmag11)** 和他们的团队编写了可以直接调用此服务的库。我们可以在这里直接使用它。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

同时，您还需要用于调试消息的**QuickDebug**库。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

接下来，我们只需要修改`getLocation()`函数。

```cpp
//For google geolocation
WifiLocation location (Googlemaps_key);

// Set time via NTP, as required for x.509 validation
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Waiting for NTP time sync: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("Current time: ");
    Serial.print (asctime (&timeinfo));
}

// Get the exact coordinates of XIAO by WiFi location method
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("Location request data");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("Location: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("Accuracy: " + String (loc.accuracy));
  Serial.println ("Result: " + location.wlStatusStr (location.getStatus ()));
}
```

让我们看看通过 WFPS 获得的坐标与实际位置有何不同。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

位置偏差已经在 1 公里左右！这个性能甚至比一些 GPS 模块还要好。

## 最新位置的实时更新

那么最后一步，让我们完善这个全球定位追踪器。让它实现自动地图刷新功能。

:::tip
使用此程序时，请对您的 Google Cloud 服务费用消耗有所估计，否则频繁的 API 调用可能会导致高额账单！
:::

```cpp
void loop() {
  // Make sure you pay attention to the number of API calls! This could cost you extra spending!
  
  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // Update of the location image is performed only when the location is updated
      last_latitude = latitude;
      last_longitude = longitude;
      if(getStaticMapImage(host, getPath().c_str(), mapFile)){
        TJpgDec.drawSdJpg(0, 0, mapFile);
      }
    }
  }
  delay(10000);
}
```

在主循环中，我们将每10秒获取一次周围的网络并更新当前位置坐标。如果返回的位置坐标与上次不同，那么地图将重新下载并在屏幕上刷新。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

配合我们的3D打印外壳，看起来真的很像一个追踪器！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

最后，通过WFPS方法获取定位的完整程序代码可在下方按钮处获取。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## 资源

- **[GITHUB]** [源代码](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [XIAO ESP32S3 Sense 外壳设计（顶部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [XIAO ESP32S3 Sense 外壳设计（底部）](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## 故障排除

### Q1：为什么我使用 `WiFi.hostByName()` 函数无法获取准确的IP地址？

当使用WiFi.hostByName()函数查询路由器的公网IP地址时，请确保您的路由器能够被DNS解析器解析为相应的IP地址。如果您的路由器使用ISP提供的DNS服务器，您可能会遇到DNS解析失败的情况。在这种情况下，您可以尝试使用替代的DNS服务器，例如Google的公共DNS服务器8.8.8.8或8.8.4.4。

如果您仍然无法查询到正确的公网IP地址，可能是由于网络连接问题或其他网络配置问题。您可以尝试以下方法来解决问题：

1. 尝试替代的公网IP地址查询服务：如果您使用api.ipify.org服务查询公网IP地址仍然无法获取正确的IP地址，您可以尝试使用替代的公网IP地址查询服务，例如ip-api.com或whatismyip.com。

2. 检查路由器配置：检查您的路由器配置，确保NAT和端口转发功能正确配置，并且没有阻止对外部网络的访问。您还可以尝试在路由器上启用UPnP功能，以自动配置端口转发。

3. 重启路由器和ESP32S3设备：有时，重启路由器和ESP32S3设备可以解决网络连接和配置问题。

如果这仍然无法解决问题，我们建议使用第二种方法或在路由器查询公网IP后直接为XIAO分配一个值。

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
