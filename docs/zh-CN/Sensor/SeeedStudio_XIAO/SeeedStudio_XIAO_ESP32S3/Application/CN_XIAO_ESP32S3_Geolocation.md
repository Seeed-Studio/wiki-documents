---
description: 用XIAO ESP32S3制作超紧凑型全球定位跟踪器。
title: 基于 XIAO ESP32S3 的地理定位追踪器
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /cn/geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 10/31/2023
  author: Xin Ping Li
---

# 基于XIAO ESP32S3的地理定位追踪器

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

市场上的自制追踪器经常面临几个问题。例如，跟踪精度差，体积大，对跟踪器的使用环境要求高。XIAO凭借其出色的音量控制吸引了众多创作者。那么我们是否可以通过使用XIAO来制作一个可以全局定位的Tracker，并且只能使用XIAO?

在本教程中，我们将探索部署XIAO(不使用GPS模块)的两种更流行的方法，以创建令人惊讶的跟踪器。

## 概述

本文将介绍两种定位方式，一种是从XIAO所连接的网络的IP地址中获取位置信息，实现定位。另一种是使用Wi-Fi定位系统(通常称为wps或WFPS)

- **方法一:根据IP地址定位**

定位IP地址的原理是使用数据库将IP地址映射到物理位置。这个过程通常被称为地理定位。

IP地址查找包括使用反向DNS查找来检索与IP地址关联的域名。然后，域名可以用来识别托管网站或服务的服务器的地理位置。

IP地址映射
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

IP地址地理定位的准确性取决于使用的方法和可用数据的质量。一般来说，IP地址地理定位对于固定设备(如桌面计算机和服务器)是最精确的，它们通常与固定的物理位置相关联。智能手机和平板电脑等移动设备可能更难准确定位，因为它们可以四处移动并连接不同的Wi-Fi网络。

- **方法2:通过[WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system)**

Wi-Fi定位系统是一种利用附近Wi-Fi热点和其他无线接入点的特征来发现设备所在位置的地理定位系统。
由于多径和室内信号堵塞等各种原因，GPS等卫星导航不完善，或获取卫星定位需要很长时间。这些系统包括辅助GPS、通过热点数据库的城市定位服务和室内定位系统。Wi-Fi定位利用了21世纪初城市无线接入点的快速增长。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

用于无线接入点定位的最常见和广泛的定位技术是基于测量接收信号的强度(接收信号强度指示或RSSI)和“指纹”方法。定位无线接入点的典型参数包括SSID和MAC地址。准确性取决于附近位置已输入数据库的接入点的数量。Wi-Fi热点数据库通过将移动设备的GPS位置数据与Wi-Fi热点的MAC地址关联起来来填充。可能发生的信号波动会增加用户路径中的误差和不准确性。为了使接收信号的波动最小化，可以使用一些技术来滤除噪声。


这是XIAO能够在没有GPS模块帮助的情况下获得位置的理论基础。我们还将比较在上述两种方法的帮助下，结合使用圆形显示器(它将坐标以地图的形式显示在屏幕上)获得定位的最佳方式。下面是论文的目录和摘要。

- [使用XIAO ESP32S3连接网络，获取公网IP地址](#connect-to-the-network-and-obtain-public-ip-with-the-xiao-esp32s3)
- [使用ipstack平台获取位置坐标](#obtain-location-coordinates-with-the-ipstack-platform)
- [通过HTTPS服务从谷歌地图下载静态图像](#download-static-images-from-google-maps-via-https-service)
- [在圆形显示屏上显示位置地图](#display-the-location-map-on-the-round-display)
- [使用WFPS方法定位](#positioning-using-the-wfps-method)
- [最新位置的实时更新](#live-updates-on-the-latest-location)

## 开始

要成功完成此项目，您可能需要使用以下硬件。任何XIAO ESP32都支持。

<div class="table-center">
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
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
          </a>
      </div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> 点击购买🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

除此之外，还可以另外准备一个小型锂电池、microSD卡和外壳。制作一份完整的追踪表格。

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 使用XIAO ESP32S3连接网络，获取公网IP地址

:::提示
如果您不熟悉XIAO ESP32S3的网络功能，您可以阅读有关[Seeed Studio XIAO ESP32S3 (Sense)的WiFi使用情况](https://wiki.seeedstudio.com/xiao_esp32s3_wifi_usage/)。
:::

在关于XIAO ESP32S3基本使用的教程中，我们已经掌握了使用XIAO ESP32S3连接网络的方法。

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

使用IP地址查找位置的核心实质是获取XIAO的IP地址。那么我们可能会很自然地认为我们需要使用`WiFi.localIP()`函数来查找它。

但实际上，路由器会为小安分配内部IP地址，比如192.168.xxx.xxx，无法查询位置信息。我们需要的是一个公共IP。所以我们需要使用以下代码。

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

然后我们可以得到下面的效果，这是第一步。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## 通过ipstack平台获取位置坐标

使用IP地址的位置通常是一些公共图书馆服务器所需的信息。我们可以获取该服务器信息的帮助下一些平台的API接口。例如,在本教程中,我们将使用这个平台(ipstack) (https://ipstack.com)。

ipstack提供了一个强大的、实时的IP到地理定位API，能够查找准确的位置数据，并评估来自风险IP地址的安全威胁。结果以JSON或XML格式在毫秒内交付。

Ipstack提供免费/付费搜索服务，[价目表](https://ipstack.com/product)可以在下面的图片中找到。在这个例子中,我们只展示示例，使用**免费服务 100次查询/月**就足够了。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### 步骤 1.获取ipstack API访问密钥

如果这是你第一次使用ipstack，那么你需要[注册一个新帐户](https://ipstack.com/signup/free)。

一旦你注册并登录，你将能够看到你的API密钥，请复制它并保存在一个安全的地方，我们稍后会使用它。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### 步骤 2.了解如何使用ipstack API

ipstack提供了详细的[文档](https://ipstack.com/documentation)来解释如何使用ipstack API。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

很简单，对吧?只需发送**服务器地址+ IP地址+ API密钥**。

接下来，我们需要知道ipstack将返回什么样的JSON消息，并提取我们需要的信息，如城市、国家、纬度和经度。

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

然后，我们只需要在ArduinoJSON库的帮助下提取我们需要的信息。

### 步骤 3.通过http服务获取IP地址坐标

总而言之，我们从安装**ArduinoJSON**库开始。可以直接从Arduino IDE中搜索和下载。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

然后我们编写`getLocation()`函数，我们使用它来获取ipstack返回的国家、城市、纬度和经度信息，并打印出来。

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

在上述程序中，请将ipstack API密钥替换为您自己的。

接下来，我们可以看看通过IP地址定位有多精确。下面的地图上的[红色标记点](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu)是我所处IP地址的确切位置。红线的另一端是我所在的实际位置。它们之间相差2.4公里。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

可以看出，这种定位的误差在千米范围内，与我们对跟踪器的期望相差甚远。

## 通过HTTPS服务从谷歌地图下载静态图像

在我们的视图中讨论经纬度坐标不是很直观。即使它们包含国家和城市的信息。因此，我们想知道是否有可能在地图上标记这些经纬度坐标，并在屏幕上显示它们。然后我们找到了谷歌云的地图服务。

在我们开始之前，我认为您有必要了解[谷歌地图服务的定价](https://mapsplatform.google.com/pricing/)，以便决定是否继续。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

如果你是第一次注册用户，你将有**300美元**的免费积分。这里我们主要使用Maps静态API， **每1000次调用花费2.00美元**。

### 步骤 4. [设置您的谷歌云项目](https://developers.google.com/maps/documentation/elevation/cloud-setup)并完成下面的设置说明

### 步骤 5.启用谷歌映射API

您需要谷歌API密钥才能使用谷歌API进行验证。导航到[谷歌开发者控制台](https://console.developers.google.com/apis)以启用地理定位API。没有这个API密钥，你将得到一个错误响应。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

一旦你有了API，请把它放在一个安全的地方，我们将在后面的编程步骤中使用它。

:::请注意
如果您对当前使用API的环境有顾虑，可以打开API调用的限制，以避免因滥用而产生的额外费用。打开某些限制可能需要更改程序。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## 在圆形显示屏上显示位置地图
:::tip
如果您第一次为XIAO使用圆形显示器，那么您可能需要参考[Wiki此处](https://wiki.seeedstudio.com/get_start_round_display/)以配置圆形屏幕的Arduino环境。
:::

### 步骤 6.了解如何调用谷歌云静态映射AP

点击[这里](https://developers.google.com/maps/documentation/maps-static/overview)阅读谷歌Cloud Static Maps API的文档。

文档给出了使用该API的示例代码，如下所示:

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Maps的静态API URL必须是以下形式:

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

静态API Maps使用以下URL参数定义地图图像:

- `Maps静态API使用center`定义地图图像(如果没有标记，则需要)定义地图的中心，与地图的所有边缘等距。这个参数接受一个位置作为逗号分隔的{latitude,longitude}对(例如:"40.714728，-73.998672")或字符串地址(例如:“纽约市市政厅，纽约”)在地球表面上确定了一个独特的位置。

- `zoom`(如果标记不存在，则需要)定义地图的缩放级别，它决定了地图的放大级别。该参数接受一个数值，对应于所需区域的缩放级别。

- `size`(必填)定义地图图像的矩形尺寸。这个参数接受一个形式为`{horizontal_value}x{vertical_value}`的字符串。

- `maptype`(可选)定义要构造的map的类型。maptype有几个可能的值，包括roadmap、satellite、hybrid和terrain。

- `markers`(可选)定义一个或多个标记，附加到图像的指定位置。此参数接受一个标记定义，其中参数由管道字符(|)分隔。多个标记可以放置在同一个标记参数中，只要它们表现出相同的样式;你可以通过添加额外的标记参数来添加不同样式的标记。注意，如果您为地图提供标记，则不需要指定(通常需要的)中心和缩放参数。

- `key` (required)允许您在谷歌云控制台监控您的应用程序的API使用情况，并确保谷歌在必要时可以联系您有关您的应用程序。

:::提示
上面只显示了最基本的参数，如果您需要定制此静态映射，您可以单击 **[此处](https://developers.google.com/maps/documentation/maps-static/start)** 以阅读参数的完整列表。
:::

总之，我们可以缝合在一起形成一个完整的字符串来发送。

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

请用您自己的谷歌云地图API替换上面的代码。

### 步骤 7. 返回的图像通过HTTPS获取并写入microSD卡

我们需要一个足够大的存储介质来容纳返回的静态图像，以便在将它们显示在屏幕上的程序中读取它们。圆形显示屏恰好支持microSD卡。

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

### 步骤 8. 在圆形显示屏上显示JPEG图像
一般情况下，轮显示支持的TFT图形库只支持BMP格式的图像显示，如果需要显示其他格式的图像，就需要使用一些第三方库，这里我们使用 **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)** 库.

请下载此库作为zip文件，并将其添加到您的Arduino环境中。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库文件</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

参考库提供的示例程序，重写程序:
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

这个项目的完整程序可以在这个场合找到。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

执行程序，您可以看到串口监视器的输出。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

屏幕还将显示与您的IP地址相对应的位置图片。

## 屏幕上还会显示与你的IP地址对应的位置的图片。

正如我们在前面的步骤中所比较的，使用IP地址进行定位的准确性非常低。因此，接下来，让我们使用WFPS方法改进程序，看看准确性是否有变化。

当然，这个算法对我们来说很难实现，我们仍然依赖于谷歌地图服务中的[地理定位API](https://developers.google.com/maps/documentation/geolocation/overview)。

地理定位API是一项服务，它通过移动客户端可以检测到的手机信号塔和WiFi接入点接受HTTPS请求。它返回纬度/经度坐标和一个半径，表示每个有效输入的结果的准确性。

在社区中 **[gmag11](https://github.com/gmag11)** 和他们的团队编写了可以直接调用此服务的库。我们可以直接在这里使用它。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

与此同时，你将需要 **QuickDebug** 库来调试信息。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载库</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

接下来，我们只需要修`getLocation()`函数。

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

让我们看看通过粮食计划署获得的坐标与实际位置有何不同。


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

位置偏差已经大约1公里了!这种性能甚至比一些GPS模块更好。


## 最新位置的实时更新

因此最后一步，让我们包装这个全球定位跟踪器。让它实现一个自动的地图刷新。
:::tip
使用本程序时，请预估您的谷歌云服务资费消耗，否则频繁的API调用可能会导致大量计费!
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

在主循环中，我们将每10秒获取周围的网络并更新当前位置坐标。如果返回的位置坐标与上次不同，那么地图将重新下载并刷新屏幕。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

我们的3D打印住房，不是真的看起来像一个跟踪器!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

最后，通过WFPS方法获得定位的完整程序代码可以在下面的按钮中找到。

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino">
    <strong><span><font color={'FFFFFF'} size={"4"}> 下载代码</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## 资源

- **[GITHUB]**[源代码](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)

- **[STP]** [XIAO ESP32S3 Sense外壳设计(上)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)

- **[STP]** [XIAO ESP32S3传感器外壳设计(底部)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## 故障排除

### Q1:为什么我没有使用 ` WiFi.hostByName() ` 函数获得确切的IP地址?

当使用WiFi.hostByName()函数查询路由器的公共IP地址时，请确保您的路由器可以通过DNS解析器解析到相应的IP地址。如果路由器使用ISP提供的DNS服务器，可能会遇到DNS解析失败。在这种情况下，您可以尝试使用备选DNS服务器，例如b谷歌的公共DNS服务器8.8.8.8或8.8.4.4。

如果仍然无法查询到正确的公网IP地址，可能是由于网络连接问题或其他网络配置问题。您可以尝试以下方法来解决问题:

1. 尝试其他公共IP地址查询服务:如果使用api.ipify.org服务查询公共IP地址，仍然无法获取到正确的IP地址，可以尝试使用其他公共IP地址查询服务，如IP -api.com或whatismyip.com。

2. 检查路由器配置:检查路由器配置，确保NAT和端口转发功能配置正确，没有阻断外部网络的访问。您也可以尝试在路由器上启用UPnP功能，以自动配置端口转发。

3.重启路由器和ESP32S3设备:有时，重启路由器和ESP32S3设备可以解决网络连接和配置问题。

如果这仍然不能解决问题，我们建议使用第二种方法，或者在路由器查询公网IP后直接为XIAO赋值。

## 技术支持和产品讨论
感谢您选择我们的产品!我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的喜好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>



