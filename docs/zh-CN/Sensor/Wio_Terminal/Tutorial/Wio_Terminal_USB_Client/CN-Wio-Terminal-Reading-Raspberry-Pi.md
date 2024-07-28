---
description: Reading Raspberry Pi's Info using Wio Terminal
title: 使用Wio Terminal读取Raspberry Pi的系统状态
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Wio-Terminal-Reading-Raspberry-Pi
last_update:
  date: 3/07/2024
  author: jessie
---

# 使用Wio Terminal读取Raspberry Pi的系统状态

![](https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-rasp.gif)

本wiki介绍如何使用Wio Terminal通过USB串行通信读取Raspberry Pi的系统状态。在这个示例中，Raspberry Pi将作为主机计算机，通过USB将其系统信息发送到串口。Wio Terminal将作为从设备接收传入的数据，并在其LCD屏幕上显示。

## 部件清单

- [Raspberry Pi](https://www.seeedstudio.com/Boards-c-17.html) （此处使用3B+）

- [Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- USB Type-C 数据线

## 特点

- 读取Raspberry Pi的系统状态

- 在 Wio Terminal的屏幕上显示

## Raspberry Pi主机程序

在Raspberry Pi上运行以下Python代码，通过USB串口将系统信息发送到Wio Terminal。

**注:** 请确保Python代码中的串口设置正确，并根据您的设备进行更改。

### Raspberry Pi上的Python代码

```py
import os
import time 
import serial

# Settings for reading from Arduino Serial
serialPort= "/dev/ttyACM0" #Change it to your Serial Port, Check in Arudino IDE
baudRate = 115200
ser = serial.Serial(serialPort, baudRate, timeout=0.5)
time.sleep(2)

# Return CPU temperature as a character string
def getCPUtemperature():
    res = os.popen('vcgencmd measure_temp').readline()
    return(res.replace("temp=","").replace("'C\n",""))

# Return RAM information (unit=kb) in a list
# Index 0: total RAM
# Index 1: used RAM
# Index 2: free RAM
def getRAMinfo():
    p = os.popen('free')
    i = 0
    while 1:
        i = i + 1
        line = p.readline()
        if i==2:
            return(line.split()[1:4])

# Return % of CPU used by user as a character string
def getCPUuse():
    return(str(os.popen("top -n1 | awk '/Cpu\(s\):/ {print $2}'").readline().strip()))

# Return information about disk space as a list (unit included)
# Index 0: total disk space
# Index 1: used disk space
# Index 2: remaining disk space
# Index 3: percentage of disk used
def getDiskSpace():
    p = os.popen("df -h /")
    i = 0
    while 1:
        i = i +1
        line = p.readline()
        if i==2:
            return(line.split()[1:5])
 
def main():
    while True:
        # CPU informatiom
        CPU_temp = getCPUtemperature()
        CPU_usage = getCPUuse()

        # RAM information
        # Output is in kb, here I convert it in Mb for readability
        RAM_stats = getRAMinfo()
        RAM_total = str(round(int(RAM_stats[0]) / 1000,1))
        RAM_used = str(round(int(RAM_stats[1]) / 1000,1))
        RAM_free = str(round(int(RAM_stats[2]) / 1000,1))

        # Disk information
        DISK_stats = getDiskSpace()
        DISK_total = DISK_stats[0]
        DISK_used = DISK_stats[1]
        DISK_perc = DISK_stats[3]

        temp=ser.write(str.encode(CPU_temp+' '+CPU_usage))

        data=ser.write(str.encode(CPU_temp+':'+CPU_usage+':'+RAM_total+':'+RAM_used+':'+RAM_free+':'+DISK_total+':'+DISK_used+':'+DISK_perc))
        ser.flush()
        time.sleep(2)

        print('')
        print('CPU Temperature = '+CPU_temp)
        print('CPU Use = '+CPU_usage)
        print('')
        print('RAM Total = '+str(RAM_total)+' MB')
        print('RAM Used = '+str(RAM_used)+' MB')
        print('RAM Free = '+str(RAM_free)+' MB')
        print('')  
        print('DISK Total Space = '+str(DISK_total)+'B')
        print('DISK Used Space = '+str(DISK_used)+'B')
        print('DISK Used Percentage = '+str(DISK_perc)) 


if __name__ == '__main__':
    try:    
        main()
    except KeyboardInterrupt:    
        if ser != None:    
            ser.close()
```

## Arduino 代码

### 所需的Arduino库

- 安装LCD屏幕库 `Seeed_Arduino_LCD`, 请访问 [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) 获取更多信息。

- 下载 [`Free_Fonts.h`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h) 头文件，以便在LCD库中使用免费字体的缩写。请确保将此头文件放在与Arduino Sketch相同的位置。

### 完整代码

在 [此处](https://files.seeedstudio.com/wiki/Wio-Terminal/res/readRasp.ino) 下载完整代码。

## 操作说明

1. 将Arduino代码上传到Wio Terminal。上传完成后，它应该显示在启动屏幕上。

2. 使用USB Type-C数据线将Wio Terminal连接到Raspberry Pi。

3. 在Raspberry Pi上运行Python代码。

4. 现在，您应该能够在Wio Terminal的LCD屏幕上看到Raspberry Pi的系统信息。

## 技术支持 & 产品讨论

感谢您选择我们的产品！我们致力于为您提供不同的支持，以确保您尽可能顺畅的体验我们的产品。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
