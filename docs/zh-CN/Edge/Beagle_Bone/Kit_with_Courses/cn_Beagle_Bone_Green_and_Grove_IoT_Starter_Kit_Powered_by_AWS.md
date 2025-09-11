---
description: BeagleBone Green 和 Grove IoT 入门套件，由 AWS 提供支持
title: BeagleBone Green 和 Grove IoT 入门套件，由 AWS 提供支持
keywords:
 - Beagle_Bone
 - Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 2023/2/1
  author: jianjing Huang
---

<!-- ---
name: Beagle Bone Green 和 Grove IoT 入门套件，由 AWS 提供支持
category: BeagleBone
bzurl: https://www.amazon.com/BeagleBone-Green-Grove-Starter-Powered/dp/B017O3H49K
oldwikiname: Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
prodimagename: Aws_kit_bbg_cover.JPG
bzprodimageurl: https://images-na.ssl-images-amazon.com/images/I/41ld4VguWCL.jpg
surveyurl: https://www.research.net/r/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
--- -->

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg_cover.JPG)

<!-- *主要文章：从这里开始 [Grove IoT 入门套件，由 AWS 提供支持](/cn/Grove_IoT_Starter_Kits_Powered_by_AWS "Grove IoT 入门套件，由 AWS 提供支持") , [Beaglebone Green](/cn/BeagleBone_Green "Beaglebone green")* -->

[BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113) (BBG) 是 BeagleBoard.org 和 Seeed Studio 的联合开发成果。它基于 [BeagleBone Black](https://beagleboard.org/BLACK) 的开源硬件设计，并增加了两个 Grove 接口。该套件包含全新的 BBG、10 个 Grove 模块以及逐步教程，帮助您快速连接这些模块。Grove IoT 入门套件包括最常用的传感器和执行器，结合 AWS 云计算，将您的创意转化为实际应用。

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B0168L6B0C)

功能特点
--------

- 开箱即用，即插即用，无需面包板或焊接
- 完全符合 AWS 服务和 AWS 最佳实践
- 为开发者和创客提供逐步教程，快速入门

包装内容
--------

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg.JPG)

<!-- | 板卡/部件                                                                                                                                    | 数量 | 文档                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------------|
| [BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113)                                              | 1   | [阅读这里](/cn/BeagleBone_Green "Beaglebone green")                                                 |
| [Grove - I2C ADC](https://www.seeedstudio.com/depot/Grove-I2C-ADC-p-1580.html?cPath=98_16)                                                    | 1   | [阅读这里](/cn/Grove-I2C_ADC "Grove - I2C ADC")                                                     |
| [Grove - I2C Hub](https://www.seeedstudio.com/depot/Grove-I2C-Hub-p-851.html?cPath=98_16)                                                     | 1   | [阅读这里](/cn/Grove-I2C_Hub "Grove - I2C Hub")                                                     |
| [Grove - Relay](https://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42)                                                         | 1   | [阅读这里](/cn/Grove-Relay "Grove - Relay")                                                         |
| [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38)                                                          | 1   | [阅读这里](/cn/Grove-Buzzer "Grove - Buzzer")                                                       |
| [Grove - OLED Display 0.96'](https://www.seeedstudio.com/depot/Grove-OLED-Display-096-p-824.html?cPath=34_36)'                                | 1   | [阅读这里](/cn/Grove-OLED_Display_0.96inch "Grove - OLED Display 96*96")                               |
| [Grove - Button](https://www.seeedstudio.com/depot/Grove-Button-p-766.html?cPath=85_50)                                                       | 1   | [阅读这里](/cn/Grove-Button "Grove - Button")                                                       |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/depot/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                              | 1   | [阅读这里](/cn/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2")                     |
| [Grove - Sound Sensor](https://www.seeedstudio.com/depot/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                          | 1   | [阅读这里](/cn/Grove-Sound_Sensor "Grove - Sound Sensor")                                           |
| [Grove - 3-Axis Digital Accelerometer(±16g)](https://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html?cPath=25_132) | 1   | [阅读这里](/cn/Grove-3-Axis_Digital_Accelerometer-16g "Grove - 3-Axis Digital Accelerometer(±16g\)") |
| [Grove - Chainable RGB LED](https://www.seeedstudio.com/depot/Grove-Chainable-RGB-LED-p-850.html?cPath=81_35)                                 | 1   | [阅读这里](/cn/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")                                 |
| [Micro USB Cable - 48cm](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                                                                                                                       | 1   |                                                                                                   |  -->



入门指南
-------

### 配置您的 AWS IoT 服务

首先，我们需要获取一个 AWS IoT 服务账户，并进行一些配置。


- 创建一个 [AWS 账户](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html)
- 进入 [AWS IoT 控制台](https://aws.amazon.com/iot/) 并打开 AWS IoT 仪表板

    1. 点击左上角的 **Services**，然后点击 AWS IoT，如下图所示。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_service.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png)

    2. 点击 **Get started** 按钮。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg)

    3. 点击 **Create a Resource**，然后点击 **Create a thing**。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_view_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_name_a_thing.png)

    4. 输入一个名称，随意命名，这里我们命名为 temperature。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSCreateAThing.png)

    5. 点击 **Create** 完成创建，然后点击 **View thing** 查看你创建的设备信息。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSViewThing.png)

    6. 点击 **Connect a device**。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConnectADevice.png)

    7. 选择 Node JS 并点击 **Generate certificate and policy**。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGenerate.png)

    8. 你会看到 3 个文件。下载这些文件，我们稍后会用到。然后点击 **Confirm & start connecting**。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConfirm.png)

    9. 然后我们需要下载 AWS IoT Node.js SDK，并点击 **Return to Thing Detail**。

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSReturn.png)

现在，这一步完成了。让我们进入下一步。

### 设置你的 BeagleBone Green

<!-- 通过 micro USB 数据线将 BBG 连接到你的电脑，并让 BBG 访问互联网。如果这是你第一次使用 BBG/BBB，你可以参考 [这里](/cn/BeagleBone_Green) 开始入门。 -->

将 Grove 模块连接到 BBG，如下图所示。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSSetup.jpg)

### 软件操作

#### 上传 SDK 和密钥文件到 Cloud9 的 examples 文件夹

1. 你还记得之前下载的 3 个密钥文件和 Node JS SDK 吗？

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSFile.png)

2. 现在，将 SDK 和密钥文件上传到你的 Cloud9 的 examples 文件夹。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload1.png)

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload2.png)

#### 打开一个新终端

我们需要解压 SDK 并将密钥移动到正确的位置。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUNzip.png)

```
# cd examples
```

解压 SDK 文件。

```
# unzip aws-iot-device-sdk-js-latest.zip
```

然后进入解压后的文件夹。

```
# cd aws-iot-device-sdk-js
```

安装依赖包。

```
# npm install
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSMkdir.png)

创建一个名为 awsCerts 的新文件夹。

```
# mkdir awsCerts && cd awsCerts
```

然后将 3 个密钥文件移动到新文件夹中。

```
# mv ../../31f2fd2680-* .
```

请注意，31f2fd2680 应替换为你自己的密钥文件编号。

并重命名密钥文件。

```
# mv 31f2fd2680-certificate.pem.crt.txt  certificate.pem.crt
# mv 31f2fd2680-private.pem.key   private.pem.key
```

从互联网下载一个文件。

```
# wget https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem
```

并将下载的文件重命名为 root-CA.crt。

```
# mv VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem root-CA.crt
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRename.png)

#### 在 BBG 上编程

进入 examples 文件夹。

# cd .. && cd examples/

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSexamples.png)

创建一个名为 grove_temperature_sensor.py 的新文件。

    # vim grove_temperature_sensor.py

将以下代码复制到文件中。

```
#!/usr/bin/python
# -*- coding: utf-8 -*-
 
import time
import math
import Adafruit_BBIO.GPIO as GPIO
from Adafruit_I2C import Adafruit_I2C
BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)
 
# 蜂鸣器开启的温度阈值为 28 摄氏度
THRESHOLD_TEMPERATURE = 28
ADDR_ADC121 = 0x50
 
REG_ADDR_RESULT = 0x00
REG_ADDR_ALERT = 0x01
REG_ADDR_CONFIG = 0x02
REG_ADDR_LIMITL = 0x03
REG_ADDR_LIMITH = 0x04
REG_ADDR_HYST = 0x05
REG_ADDR_CONVL = 0x06
REG_ADDR_CONVH = 0x07
 
i2c = Adafruit_I2C(ADDR_ADC121)           
 
class I2cAdc:
    def __init__(self):
        i2c.write8(REG_ADDR_CONFIG, 0x20)
 
    def read_adc(self):
        "读取 ADC 数据 0-4095。"
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
adc = I2cAdc()
 
#   read_temperature() 方法中的参数定义了您连接的是哪个 Grove 板（Grove 温度传感器）版本。
#   默认值为 'v1.2'。例如：
#       temp = read_temperature('v1.0')          # B 值 = 3975
#       temp = read_temperature('v1.1')          # B 值 = 4250
#       temp = read_temperature('v1.2')          # B 值 = 4250
def read_temperature(model = 'v1.2'):
    "从 Grove 温度传感器读取摄氏温度值"
    # 每个传感器版本使用不同的热敏电阻，每个都有自己的 B 值常数
    if model == 'v1.2':
        bValue = 4250  # 传感器 v1.2 使用热敏电阻 ???（假设为 NCP18WF104F03RC，直到 SeeedStudio 进一步说明）
    elif model == 'v1.1':
        bValue = 4250  # 传感器 v1.1 使用热敏电阻 NCP18WF104F03RC
    else:
        bValue = 3975  # 传感器 v1.0 使用热敏电阻 TTC3A103*39H
 
    total_value = 0
    for index in range(20):
        sensor_value = adc.read_adc()
        total_value += sensor_value
        time.sleep(0.05)
    average_value = float(total_value / 20)
 
    # 将 ADC 数据转换为 Arduino 平台的数据。
    sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
    resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
    temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
    return temperature
 
# 功能：如果温度传感器检测到的温度达到代码中设置的阈值，蜂鸣器会响 1 秒。
# 硬件：Grove - I2C ADC, Grove - 温度传感器, Grove - 蜂鸣器
# 注意：使用 P9_22(UART2_RXD) 作为 GPIO。
# 将 Grove 蜂鸣器连接到 Beaglebone Green 的 UART Grove 端口。
# 将 Grove - I2C ADC 连接到 Beaglebone Green 的 I2C Grove 端口，然后将 Grove - 温度传感器连接到 Grove - I2C ADC。
if __name__ == '__main__':
 
    while True:
        try:
            # 从 Grove 温度传感器读取摄氏温度值
            temperature = read_temperature('v1.2')
 
            # 当温度达到预定值时，蜂鸣器响起。
            if temperature > THRESHOLD_TEMPERATURE:
                # 发送 HIGH 信号以打开蜂鸣器
                GPIO.output(BUZZER, GPIO.HIGH)
            else:
                # 发送 LOW 信号以关闭蜂鸣器
                GPIO.output(BUZZER, GPIO.LOW)
 
            print "temperature = ", temperature
 
        except KeyboardInterrupt:
            GPIO.output(BUZZER, GPIO.LOW)
            break
 
        except IOError:
            print "Error"
```

创建一个名为 python_sensor.py 的新文件。

将以下代码翻译为简体中文，同时保持原始格式和结构：

---

#vim python_sensor.py

将以下代码复制到新文件中。

```
import socket
import grove_temperature_sensor
if __name__ == "__main__":
    client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    client.connect(('127.0.0.1', 7000))
 
    while True:
        temperature = grove_temperature_sensor.read_temperature('v1.2')
    print temperature
        client.sendall(str('%.2f'%temperature))
    data = client.recv(1024)
    print data
    client.close()
 
    print 'Received', repr(data)
```

创建一个名为 rgbled.js 的新文件。

#vim rgbled.js

将以下代码复制到新文件中。

```
var exec = require('child_process').exec; 
var value = 0;
 
exports.initpins = function(){
    exec("echo 3 > /sys/class/gpio/export",function(error,stdout,stderr){
        if(error) 
                console.info('stderr : '+stderr);
    });
    exec("echo out > /sys/class/gpio/gpio3/direction",function(error,stdout,stderr){
                if(error) 
                        console.info('stderr : '+stderr);
        });
 
    exec("echo 2 > /sys/class/gpio/export",function(error,stdout,stderr){
                if(error) 
                        console.info('stderr : '+stderr);
        });
 
    exec("echo out > /sys/class/gpio/gpio2/direction",function(error,stdout,stderr){
                if(error) 
                        console.info('stderr : '+stderr);
        });
 
}
digitalwrite = function(pin,state){
    exec("echo "+state.toString()+" > /sys/class/gpio/gpio"+pin.toString()+"/value",
        function(error,stdout,stderr){
                    if(error) 
                            console.log('stderr : '+stderr);
        });
 
}
sleep = function(sleepTime) {
    for(var start = +new Date; +new Date - start <= sleepTime; ) { }
}
clk = function(){
        digitalwrite(2,0);
        sleep(2);
                digitalwrite(2,1);
        sleep(2);
}
sendByte = function(b){
    for(var i = 0 ; i < 8 ;i++){
        if((b & 0x80) != 0)
            digitalwrite(3,1);
        else
            digitalwrite(3,0);
        clk();
        b = b << 1; 
    }
}
setColor = function(red,green,blue){
    var prefix = 0xc0;
    if((blue & 0x80) == 0)
        prefix |= 0x20;
    if((blue & 0x40) == 0)
        prefix |= 0x10;
    if((green & 0x80) == 0)
        prefix |= 0x08;
    if((green & 0x40) == 0)
        prefix |= 0x04;
    if((red & 0x80) == 0)
        prefix |= 0x02;
    if((red & 0x40) == 0)
        prefix |= 0x01;
    sendByte(prefix);
    sendByte(blue);
    sendByte(green);
    sendByte(red);
}
exports.setColorRGB = function(led,red,green,blue){
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    for(var i = 0; i < led; i++ ){
        setColor(red,green,blue);
    }
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    sendByte(0x00);
    console.log("set rgb");
}
test = function(){
    initpins();
    while(1){
    console.log("loop");
        setColorRGB(1, 255, 0, 0)
        setColorRGB(1, 0, 255, 0)
        setColorRGB(1, 0, 0, 255)
        setColorRGB(1, 0, 255, 255)
        setColorRGB(1, 255, 0, 255)
        setColorRGB(1, 255, 255, 0)
        setColorRGB(1, 255, 255, 255)
    }
}
```

创建一个名为 shadow.js 的新文件。

#vim shadow.js

将以下代码复制到新文件中。

```
var awsIot = require('..');
var net = require('net');
var rgbled = require('./rgbled.js');
var exec = require('child_process').exec;    
var myThingName = 'temperature';
var thingShadows = awsIot.thingShadow({
   keyPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/private.pem.key',
  certPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/certificate.pem.crt',
    caPath: '/var/lib/cloud9/examples/aws-iot-device-sdk-js/awsCerts/root-CA.crt',
  clientId: 'myAwsClientId',
    region: 'us-west-2'
});
var HOST = '127.0.0.1';
var PORT = 7000;
var temperature = 25;
var red = 0;
var green = 0;
var blue = 0;
// 创建一个服务器实例，并将 listen 函数链接到它
net.createServer(function(socket) {
    console.log('已连接: ' + socket.remoteAddress +':'+ socket.remotePort);
            // 为此 socket 实例添加一个 'data' 事件处理程序
    socket.on('data', function(data) {
        console.log('数据 ' + socket.remoteAddress + ': ' + data);
        temperature = data.toString().substr(0,5);
        socket.write('这是您的请求: "' + data + '"');
    });
    // 为此 socket 实例添加一个 'close' 事件处理程序
    socket.on('close', function(data) {
        console.log('Socket 连接已关闭...');
    });
}).listen(PORT, HOST);
//
// Thing Shadow 状态
//
var rgbLedLampState = {"state":{"desired":{"red":187,"green":114,"blue":222,value:25}}};
 
//
// 从 thingShadows.update() 操作返回的客户端令牌值
//
var clientTokenUpdate;
 
thingShadows.on('connect', function() {
//
// 连接到 AWS IoT 平台后，注册对名为 'RGBLedLamp' 的 Thing Shadow 的兴趣。
//
    thingShadows.register( myThingName );
//
// 注册后 2 秒，使用最新的设备状态更新名为 'RGBLedLamp' 的 Thing Shadow，并保存 clientToken
// 以便我们可以将其与状态或超时事件相关联。
//
// 请注意，对于后续更新不需要延迟；只有在使用默认参数注册 Thing Shadow 后的第一次更新需要延迟。
// 有关 update 方法的更多详细信息，请参阅 API 文档。
//
    exec('python python_sensor.py',function(error,stdout,stderr){
            if(stdout.length >1){
                console.log('您提供的参数:',stdout);
            }else {
                console.log('您未提供参数');
            }
            if(error) {
                console.info('stderr : '+stderr);
            }});
    rgbled.initpins();
    setTimeout( function() {
       clientTokenUpdate = thingShadows.update(myThingName, rgbLedLampState );
       }, 2000 );
    });
setInterval(function(){
        new_data = {"state":{"desired":{"red":187,"green":114,"blue":222,value:temperature.toString()}}};
        //new_data = {"state":{"desired":{"value":temperature.toString()}}};
        console.log(new_data);
       clientTokenUpdate = thingShadows.update(myThingName, new_data )
},2000);
thingShadows.on('status', 
    function(thingName, stat, clientToken, stateObject) {
       console.log('收到 '+stat+' 来自 '+thingName+': '+
                   JSON.stringify(stateObject));
    });
 
thingShadows.on('delta', 
    function(thingName, stateObject) {
       console.log('收到 delta '+' 来自 '+thingName+': '+
                   JSON.stringify(stateObject));
        //console.log(stateObject["state"]);
    if(stateObject["state"]["red"]      != red ||
       stateObject["state"]["green"]  != green||
      stateObject["state"]["blue"]    != blue)
            rgbled.setColorRGB(1,stateObject["state"]["red"],
                        stateObject["state"]["green"],
                        stateObject["state"]["blue"]);
 
    red = stateObject["state"]["red"];
    green = stateObject["state"]["green"];
    blue = stateObject["state"]["blue"];
    });
 
thingShadows.on('timeout',
    function(thingName, clientToken) {
       console.log('收到超时 '+' 来自 '+thingName+': '+
                   clientToken);
    });
```

请注意，第 5 行中 ***myThingName*** 的值应与您之前在 AWS 账户中创建的 Thing 名称相同。

#### 运行代码

当 BBG 重启完成后，运行代码。

    # cd examples/aws-iot-device-sdk-js/examples/
    # node shadow.js

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRun.png)

### 查看结果

然后打开 [AWS IoT](https://aws.amazon.com/iot/) 网站，登录您的账户。点击几分钟前创建的 Thing。现在您可以看到温度已经上传到网站。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSResult.png)

如果您想更改 Grove 可链式 LED 的颜色，可以更新 Shadow 值。例如：

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSChange.png)

您可以看到 BBG 获取了新的 RGB 值。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRGB.png)

同时，Grove - 可链式 RGB LED 也变成了绿色。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGreen.png)

请参考 [AWS IoT 服务入门指南](https://docs.aws.amazon.com/iot/latest/developerguide/iot-dg.pdf) 获取更多关于 AWS IoT 的信息。

故障排除
------------

### 无法打开 192.168.7.2

如果您无法打开 192.168.7.2，请更新到最新的软件。

**步骤 \#1：下载最新的软件镜像**

*<font color="Blue">更新时间：2015年11月15日</font>*

从 [Google Drive](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing) 下载最新镜像。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_4.png)

**步骤 \#2：安装解压工具**

下载并安装 [7-zip](http://www.7-zip.org/download.html)。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_1.png)

**步骤 \#3：解压镜像**

使用 7-zip 将 .img 文件解压到桌面或其他文件夹。

**步骤 \#4：安装 SD 卡写入工具**

下载并安装 [Image Writer for Windows](http://sourceforge.net/projects/win32diskimager/files/latest/download)。请确保下载的是二进制分发版本。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_2.png)

**步骤 \#5：连接 SD 卡到您的电脑**

使用至少 8G 的 microSD 卡，通过 SD 转接器或 USB 转接器将 SD 卡连接到您的电脑。

**步骤 \#6：将镜像写入 SD 卡**

使用 Ubuntu Image Writer 或其页面上的说明，将解压后的镜像写入 SD 卡。

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_3.png)

<div className="admonition danger">
  <p className="admonition-title">注意事项</p>
  <p> 1. 您可能会看到关于损坏设备的警告。只要您指向的是 SD 卡进行写入，接受此警告是可以的。</p>
  <p> 2. 此时不应将 BeagleBone 连接到您的电脑。</p>
</div>

**步骤 \#7：弹出 SD 卡**

弹出新写入的 SD 卡。

**步骤 \#8：从 SD 卡启动您的开发板**

将 SD 卡插入您的（断电状态的）开发板，并通过 USB 电缆或 5V 适配器供电。如果启动成功，您会看到闪烁的 LED，此过程可能需要长达 10 分钟。最新的 Debian 刷写镜像会在完成后自动关闭开发板。关闭开发板电源，移除 SD 卡并重新供电以完成操作。

祝您好运。

固件更新
---------------

[更新于 2015年11月15日](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing)：

- 修复无法访问 192.168.7.2 的问题
- 现在支持 Win 10

资源
---------

- [【PDF】AWS IoT 开发者指南](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_IoT_Developer_Guide.pdf)
- [【PDF】AWS BBG 用户指南](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_User_Guide_for_BBG.pdf)
<!-- - [Grove IoT Starter Kits Powered by AWS 主页面](/cn/Main Page for Grove IoT Starter Kits Powered by AWS) -->
- [【Github】AWS SDK for BeagleBone Green kit](https://github.com/Seeed-Studio/AWS_SDK_for_BBG)
- [【Github】BeagleBone Green kit 的库](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)
<!-- - [BeagleBone Green](/cn/BeagleBone_Green) -->
- [Beagleboard 主页面](https://beagleboard.org/getting-started)
<!-- - [Grove - I2C ADC](/cn/Grove_Sensors_Network/Standard_Protocol) -->
- [Grove - I2C Hub](/cn/Grove-I2C_Hub)
<!-- - [Grove - Relay](/cn/Grove-Relay) -->
<!-- - [Grove - Buzzer](/cn/Grove-Buzzer) -->
- [Grove - OLED 显示屏 96\*96](/cn/Grove-OLED_Display_0.96inch)
- [Grove - 按钮](/cn/Grove-Button)
- [Grove - 温度传感器 v1.2](/cn/Grove-Temperature_Sensor_V1.2)
- [Grove - 声音传感器](/cn/Grove-Sound_Sensor)
- [Grove - 三轴数字加速度计 ADXL345](/cn/Grove-3-Axis_Digital_Accelerometer-16g)
<!-- - [Grove - 可链式 RGB LED](/cn/Grove-Chainable_RGB_LED) -->
<!-- 上述链接缺失 -->

<!-- 此 Markdown 文件来源于 https://www.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS -->

## 技术支持与产品讨论

感谢您选择我们的产品！我们致力于为您提供多种支持，以确保您使用我们的产品时体验顺畅。我们提供了多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>