---
description: 概述
title: RTC 概述
keywords:
- Wio_terminal RTC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-RTC
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# RTC 概述

本 wiki 介绍如何使用 Wio Terminal 内部 SAMD51 核心的内置 RTC 功能来跟踪时间。此功能可以让您无需向系统添加外部 RTC 模块！

![](https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png)

## 为 Wio Terminal 安装 Seeed_Arduino_RTC 库

1. 访问 [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC) 仓库并将整个仓库下载到您的本地驱动器。

2. 现在，可以将 Seeed_Arduino_RTC 安装到 Arduino IDE。打开 Arduino IDE，点击 `sketch` -> `Include Library` -> `Add .ZIP Library`，然后选择您刚刚下载的 `Seeed_Arduino_RTC` 文件。

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## 示例代码

以下代码是 SAMD51 RTC 库的基本用法：
>更多 API 参考，请查看[这里](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)

```cpp
#include "RTC_SAMD51.h"
#include "DateTime.h"

RTC_SAMD51 rtc;
void setup()
{
    rtc.begin();

    Serial.begin(115200);

    while (!Serial)
    {
        ;
    }

    DateTime now = DateTime(F(__DATE__), F(__TIME__));
    Serial.println("adjust time!");
    rtc.adjust(now);

    now = rtc.now();

    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();

    DateTime alarm = DateTime(now.year(), now.month(), now.day(), now.hour(), now.minute(), now.second() + 15);

    rtc.setAlarm(0,alarm); // match after 15 seconds
    rtc.enableAlarm(0, rtc.MATCH_HHMMSS); // match Every Day

    rtc.attachInterrupt(alarmMatch); // callback whlie alarm is match

}

void loop()
{
}

void alarmMatch(uint32_t flag)
{

    Serial.println("Alarm Match!");
    DateTime now = rtc.now();
    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();
}
```

## 高级 RTC 使用

您也可以使用 NTP 来获取 RTC 的时间。

- 对于此演示，您必须首先阅读 **[Wio Terminal 网络 wiki](https://wiki.seeedstudio.com/cn/Wio-Terminal-Network-Overview/)**。

### 依赖库

- Wio Terminal 网络相关库

- [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)

- [millisDelay](https://github.com/ansonhe97/millisDelay)

```cpp
#include <AtWiFi.h>
#include <millisDelay.h>
#include <Wire.h>
#include "RTC_SAMD51.h"
#include "DateTime.h"


const char ssid[] = "Your-network"; // 添加你需要的 ssid
const char password[] = "Your-password"; // 添加你自己的网络密码

millisDelay updateDelay; // 更新延迟对象。用于 ntp 周期性更新。

unsigned int localPort = 2390;      // 监听 UDP 数据包的本地端口

// 在本地和远程时间服务器之间切换
// 注释掉以使用远程服务器
//#define USELOCALNTP

#ifdef USELOCALNTP
    char timeServer[] = "n.n.n.n"; // 本地 NTP 服务器 
#else
    char timeServer[] = "time.nist.gov"; // 外部 NTP 服务器，例如 time.nist.gov
#endif
const int NTP_PACKET_SIZE = 48; // NTP 时间戳在消息的前 48 字节中

byte packetBuffer[NTP_PACKET_SIZE]; // 用于保存传入和传出数据包的缓冲区

// 声明一个时间对象
DateTime now;

// 定义 WiFI 客户端
WiFiClient client;

// udp 库类
WiFiUDP udp;

// 本地时间
unsigned long devicetime;

RTC_SAMD51 rtc;

// 供 Adafuit RTClib 库使用
char daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

void setup() {

    Serial.begin(115200);

    while (!Serial); // 等待串口连接。原生 USB 需要


    // 在 rtc 检查之前设置网络 
    connectToWiFi(ssid, password);

    // 通过 NTP (udp) 调用时间服务器获取时间
    // getNTPtime 返回针对时区调整但不包含夏令时的纪元 UTC 时间
    // 时间
    devicetime = getNTPtime();

    // 检查 rtc 是否存在
    if (devicetime == 0) {
        Serial.println("从网络时间服务器获取时间失败。");
    }

    if (!rtc.begin()) {
        Serial.println("找不到 RTC");
        while (1) delay(10); // 停止运行
    }

    // 获取并打印当前 rtc 时间
    now = rtc.now();
    Serial.print("RTC 时间是: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // 使用 ntp 时间调整时间
    rtc.adjust(DateTime(devicetime));

    // 打印启动更新详情
    Serial.println("RTC (启动) 时间已更新。");
    // 获取并打印调整后的 rtc 时间
    now = rtc.now();
    Serial.print("调整后的 RTC (启动) 时间是: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // 根据需要启动 millisdelays 定时器，调整以适应要求
    updateDelay.start(12 * 60 * 60 * 1000); // 每 12 小时通过 ntp 更新时间

}

void loop() {

    if (updateDelay.justFinished()) { // 12 小时循环
        // 重复定时器
        updateDelay.repeat(); // 重复

        // 更新 rtc 时间
        devicetime = getNTPtime();
        if (devicetime == 0) {
            Serial.println("从网络时间服务器获取时间失败。");
        }
        else {
            rtc.adjust(DateTime(devicetime));
            Serial.println("");
            Serial.println("rtc 时间已更新。");
            // 获取并打印调整后的 rtc 时间
            now = rtc.now();
            Serial.print("调整后的 RTC 时间是: ");
            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));
        }
    }
}


void connectToWiFi(const char* ssid, const char* pwd) {
    Serial.println("连接到 WiFi 网络: " + String(ssid));

    // 删除旧配置
    WiFi.disconnect(true);

    Serial.println("等待 WIFI 连接...");

    // 启动连接
    WiFi.begin(ssid, pwd);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }

    Serial.println("已连接。");
    printWifiStatus();

}


unsigned long getNTPtime() {

    // 模块返回一个无符号长整型时间值，作为自 1970 年 1 月 1 日以来的秒数 
    // unix 时间，如果遇到问题则返回 0

    // 仅在连接时发送数据
    if (WiFi.status() == WL_CONNECTED) {
        // 初始化 UDP 状态
        // 这初始化传输缓冲区
        udp.begin(WiFi.localIP(), localPort);

        sendNTPpacket(timeServer); // 向时间服务器发送 NTP 数据包
        // 等待查看是否有回复可用
        delay(1000);
        if (udp.parsePacket()) {
            Serial.println("收到 udp 数据包");
            Serial.println("");
            // 我们收到了一个数据包，从中读取数据
            udp.read(packetBuffer, NTP_PACKET_SIZE); // 将数据包读入缓冲区

            // 时间戳从接收数据包的第 40 字节开始，长度为四个字节，
            // 或两个字。首先，提取两个字：

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // 将四个字节（两个字）组合成一个长整数
            // 这是 NTP 时间（自 1900 年 1 月 1 日以来的秒数）：
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix 时间从 1970 年 1 月 1 日开始。以秒为单位，那是 2208988800：
            const unsigned long seventyYears = 2208988800UL;
            // 减去七十年：
            unsigned long epoch = secsSince1900 - seventyYears;

            // 根据时区偏移量（以秒为单位）调整时间，相对于 UTC 的 +/-
            // WA 时间相对于 UTC 的偏移量是 +8 小时（28,800 秒）
            // + GMT 以东
            // - GMT 以西
            long tzOffset = 28800UL;

            // WA 本地时间 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // 无法成功解析 udp 数据包
            // 清理 udp 连接
            udp.stop();
            return 0; // 零表示失败
        }
        // 不经常调用 ntp 时间，stop 释放资源
        udp.stop();
    }
    else {
        // 网络未连接
        return 0;
    }

}

// 向给定地址的时间服务器发送 NTP 请求
unsigned long sendNTPpacket(const char* address) {
    // 将缓冲区中的所有字节设置为 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // 初始化形成 NTP 请求所需的值
    // （有关数据包的详细信息，请参见上面的 URL）
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum，或时钟类型
    packetBuffer[2] = 6;     // 轮询间隔
    packetBuffer[3] = 0xEC;  // 对等时钟精度
    // 根延迟和根分散的 8 个零字节
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // 所有 NTP 字段都已赋值，现在
    // 你可以发送请求时间戳的数据包：
    udp.beginPacket(address, 123); // NTP 请求发送到端口 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

void printWifiStatus() {
    // 打印你连接的网络的 SSID：
    Serial.println("");
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    // 打印你的 WiFi 模块的 IP 地址：
    IPAddress ip = WiFi.localIP();
    Serial.print("IP 地址: ");
    Serial.println(ip);

    // 打印接收到的信号强度：
    long rssi = WiFi.RSSI();
    Serial.print("信号强度 (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
    Serial.println("");
}
```