---
name: Beagle Bone Green and Grove IoT Starter Kit Powered by AWS
category: BeagleBone
bzurl: https://www.amazon.com/BeagleBone-Green-Grove-Starter-Powered/dp/B017O3H49K
oldwikiname: Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
prodimagename: Aws_kit_bbg_cover.JPG
bzprodimageurl: https://images-na.ssl-images-amazon.com/images/I/41ld4VguWCL.jpg
surveyurl: https://www.research.net/r/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
---

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/Aws_kit_bbg_cover.JPG)

*Main articles: Start here [Grove IoT Starter Kits Powered by AWS](/Grove_IoT_Starter_Kits_Powered_by_AWS "Grove IoT Starter Kits Powered by AWS") , [Beaglebone Green](/BeagleBone_Green "Beaglebone green")*

[BeagleBone Green](http://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113) (BBG) is a joint effort by BeagleBoard.org and Seeed Studio. It is based on the open-source hardware design of [BeagleBone Black](http://beagleboard.org/BLACK) and has added two Grove connectors. The kit contains the new BBG, 10 Grove modules as well as step-by-step tutorials to hook them up quickly. The Grove IoT Starter Kit includes most frequently used sensors and actuators to turn your ideas into tangible applications with AWS Cloud computing.

[![](https://raw.githubusercontent.com/SeeedDocument/common/master/Get_One_Now_Banner.png)](http://www.amazon.com/dp/B0168L6B0C)

Features
--------

-   Out-of-box, plug and play, no breadboard or soldering
-   Fully compliant with AWS Services and AWS best practices
-   Step-by-step tutorials for developers and makers to get started quickly

Included in the Box
-------------------

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/Aws_kit_bbg.JPG)

| Board/Part                                                                                                                                   | Qty | Documentation                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------------|
| [BeagleBone Green](http://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113)                                              | 1   | [Read Here](/BeagleBone_Green "Beaglebone green")                                                 |
| [Grove - I2C ADC](http://www.seeedstudio.com/depot/Grove-I2C-ADC-p-1580.html?cPath=98_16)                                                    | 1   | [Read Here](/Grove-I2C_ADC "Grove - I2C ADC")                                                     |
| [Grove - I2C Hub](http://www.seeedstudio.com/depot/Grove-I2C-Hub-p-851.html?cPath=98_16)                                                     | 1   | [Read Here](/Grove-I2C_Hub "Grove - I2C Hub")                                                     |
| [Grove - Relay](http://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42)                                                         | 1   | [Read Here](/Grove-Relay "Grove - Relay")                                                         |
| [Grove - Buzzer](http://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38)                                                          | 1   | [Read Here](/Grove-Buzzer "Grove - Buzzer")                                                       |
| [Grove - OLED Display 0.96'](http://www.seeedstudio.com/depot/Grove-OLED-Display-096-p-824.html?cPath=34_36)'                                | 1   | [Read Here](/Grove-OLED_Display_0.96inch "Grove - OLED Display 96*96")                               |
| [Grove - Button](http://www.seeedstudio.com/depot/Grove-Button-p-766.html?cPath=85_50)                                                       | 1   | [Read Here](/Grove-Button "Grove - Button")                                                       |
| [Grove - Temperature Sensor](http://www.seeedstudio.com/depot/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                              | 1   | [Read Here](/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2")                     |
| [Grove - Sound Sensor](http://www.seeedstudio.com/depot/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                          | 1   | [Read Here](/Grove-Sound_Sensor "Grove - Sound Sensor")                                           |
| [Grove - 3-Axis Digital Accelerometer(±16g)](http://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html?cPath=25_132) | 1   | [Read Here](/Grove-3-Axis_Digital_Accelerometer-16g "Grove - 3-Axis Digital Accelerometer(±16g\)") |
| [Grove - Chainable RGB LED](http://www.seeedstudio.com/depot/Grove-Chainable-RGB-LED-p-850.html?cPath=81_35)                                 | 1   | [Read Here](/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")                                 |
| [Micro USB Cable - 48cm](http://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                                                                                                                       | 1   |                                                                                                   |

Getting Started
---------------

### Configure Your AWS IoT Service

At the very beginning, we need to get an AWS IoT service account, and do some configuring.

-   Create an [AWS Account](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html)
-   Go to [AWS IoT Console](https://aws.amazon.com/iot/) and open the AWS IoT Dashboard


    1.Click the **Services** on the top-left corner, and then click on AWS IoT, as shown in the image below.


    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_LinkIt_starter_kit_click_service.jpg)


    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_LinkIt_starter_kit_click_iot.png)


    2.Click **Get started** button.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_LinkIt_starter_kit_click_get_started.jpg)


    3.Click on **Create a Resource** and then click **Creat a thing**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg)


    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_LinkIt_starter_kit_view_a_thing.jpg)


    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_LinkIt_starter_kit_name_a_thing.png)


    4.Enter a name, whatever you like, here we name it temperature.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSCreateAThing.png)


    5.Click **Create** to complete it and then click on **View thing** to get information of the thing you create.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSViewThing.png)


    6.Click on **Connect a device**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSConnectADevice.png)


    7.Choose Node JS and Click on **Generate certificate and policy**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSGenerate.png)

    8.You will find 3 files. Download the file, we need them later. And click on **Confirm & start connecting**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSConfirm.png)

    9.Then we should download the AWS IoT Node.js SDK and click on **Return to Thing Detail**.

    ![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSReturn.png)

Now, this step is done. Let's move to the next step.

### Setup your BeagleBone Green

Connect BBG to your PC via micro USB cable, and let BBG access the Internet. If this is your first time to use BBG/BBB, maybe you can follow [here](/BeagleBone_Green) to get started.

Connect Grove modules to BBG as the picture below shows.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSSetup.jpg)

### Software Works

#### Upload SDK and keys file to Cloud9 examples folder


1.Do you still remember the 3 key files and Node JS SDK that you have already download before.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSFile.png)


2.Now, upload the SDK and keys file to your Cloud9 examples folder.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSUpload1.png)

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSUpload2.png)

#### Open a new terminal

We need unzip the SDK and move the keys to right place.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSUNzip.png)

```
# cd examples
```

And unzip the SDK file.

```
# unzip aws-iot-device-sdk-js-latest.zip
```

Then entering the unziped folder.

```
#cd aws-iot-device-sdk-js
```

Install the dependent packages.

```
# npm install
```

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSMkdir.png)

Create a new folder named awsCerts.

```
# mkdir awsCerts && cd awsCerts
```

And then move the 3 key files to the new folder.

```
# mv ../../31f2fd2680-* .
```

Please note that 31f2fd2680 should be replaced by your own key files number.

And rename the key files

```
# mv 31f2fd2680-certificate.pem.crt.txt  certificate.pem.crt
# mv 31f2fd2680-private.pem.key   private.pem.key
```

Download a file from the internet.

```
# wget https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem
```

And rename the downloaded file as root-CA.crt.

```
#mv VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem root-CA.crt
```

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSRename.png)

#### Programming on BBG

Enter the examples folder.

    # cd .. && cd examples/

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSexamples.png)

Create a new file named grove\_temperature\_sensor.py.

    # vim grove_temperature_sensor.py

And copy the following code to the file.

```
#!/usr/bin/python
# -*- coding: utf-8 -*-
 
import time
import math
import Adafruit_BBIO.GPIO as GPIO
from Adafruit_I2C import Adafruit_I2C
BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)
 
# The threshold to turn the buzzer on 28 Celsius
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
        "Read ADC data 0-4095."
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
adc = I2cAdc()
 
#   The argument in the read_temperature() method defines which Grove board(Grove Temperature Sensor) version you have connected.
#   Defaults to 'v1.2'. eg.
#       temp = read_temperature('v1.0')          # B value = 3975
#       temp = read_temperature('v1.1')          # B value = 4250
#       temp = read_temperature('v1.2')          # B value = 4250
def read_temperature(model = 'v1.2'):
    "Read temperature values in Celsius from Grove Temperature Sensor"
    # each of the sensor revisions use different thermistors, each with their own B value constant
    if model == 'v1.2':
        bValue = 4250  # sensor v1.2 uses thermistor ??? (assuming NCP18WF104F03RC until SeeedStudio clarifies)
    elif model == 'v1.1':
        bValue = 4250  # sensor v1.1 uses thermistor NCP18WF104F03RC
    else:
        bValue = 3975  # sensor v1.0 uses thermistor TTC3A103*39H
 
    total_value = 0
    for index in range(20):
        sensor_value = adc.read_adc()
        total_value += sensor_value
        time.sleep(0.05)
    average_value = float(total_value / 20)
 
    # Transform the ADC data into the data of Arduino platform.
    sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
    resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
    temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
    return temperature
 
# Function: If the temperature sensor senses the temperature that is up to the threshold you set in the code, the buzzer is ringing for 1s.
# Hardware: Grove - I2C ADC, Grove - Temperature Sensor, Grove - Buzzer
# Note: Use P9_22(UART2_RXD) as GPIO.
# Connect the Grove Buzzer to UART Grove port of Beaglebone Green.
# Connect the Grove - I2C ADC to I2C Grove port of Beaglebone Green, and then connect the Grove - Temperature Sensor to Grove - I2C ADC.
if __name__ == '__main__':
 
    while True:
        try:
            # Read temperature values in Celsius from Grove Temperature Sensor
            temperature = read_temperature('v1.2')
 
            # When the temperature reached predetermined value, buzzer is ringing.
            if temperature > THRESHOLD_TEMPERATURE:
                # Send HIGH to switch on BUZZER
                GPIO.output(BUZZER, GPIO.HIGH)
            else:
                # Send LOW to switch off BUZZER
                GPIO.output(BUZZER, GPIO.LOW)
 
            print "temperature = ", temperature
 
        except KeyboardInterrupt:
            GPIO.output(BUZZER, GPIO.LOW)
            break
 
        except IOError:
            print "Error"
```

Create a new file named python\_sensor.py.

    #vim  python_sensor.py

Copy the following code to the new file.

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

Create a new file named rgbled.js.

    #vim rgbled.js

And copy the following code to the new file.

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

Create a new file named shadow.js.

    #vim shadow.js

Copy the following code to the new file.

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
// Create a server instance, and chain the listen function to it
net.createServer(function(socket) {
    console.log('CONNECTED: ' + socket.remoteAddress +':'+ socket.remotePort);
            // Add a 'data' event handler to this instance of socket
    socket.on('data', function(data) {
        console.log('DATA ' + socket.remoteAddress + ': ' + data);
        temperature = data.toString().substr(0,5);
        socket.write('This is your request: "' + data + '"');
    });
    // Add a 'close' event handler to this instance of socket
    socket.on('close', function(data) {
        console.log('Socket connection closed... ');
    });
}).listen(PORT, HOST);
//
// Thing shadow state
//
var rgbLedLampState = {"state":{"desired":{"red":187,"green":114,"blue":222,value:25}}};
 
//
// Client token value returned from thingShadows.update() operation
//
var clientTokenUpdate;
 
thingShadows.on('connect', function() {
//
// After connecting to the AWS IoT platform, register interest in the
// Thing Shadow named 'RGBLedLamp'.
//
    thingShadows.register( myThingName );
//
// 2 seconds after registering, update the Thing Shadow named 
// 'RGBLedLamp' with the latest device state and save the clientToken
// so that we can correlate it with status or timeout events.
//
// Note that the delay is not required for subsequent updates; only
// the first update after a Thing Shadow registration using default
// parameters requires a delay.  See API documentation for the update
// method for more details.
//
    exec('python python_sensor.py',function(error,stdout,stderr){
            if(stdout.length >1){
                console.log('you offer args:',stdout);
            }else {
                console.log('you don\'t offer args');
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
       console.log('received '+stat+' on '+thingName+': '+
                   JSON.stringify(stateObject));
    });
 
thingShadows.on('delta', 
    function(thingName, stateObject) {
       console.log('received delta '+' on '+thingName+': '+
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
       console.log('received timeout '+' on '+thingName+': '+
                   clientToken);
    });
```

Please note that, the value of ***myThingName*** in the 5 line should be the same as your Thing name that you have already create before in your AWS account.

#### Run the Code

When the BBG reboot done, run the code.

    # cd examples/aws-iot-device-sdk-js/examples/
    # node shadow.js

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSRun.png)

### View Result

Then let's open [AWS IoT](https://aws.amazon.com/iot/) website, sign in to your account. And click the thing you created minutes ago. Now you can see the temperature was upload to website.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSResult.png)

If you want change the grove chainable led color. You can update the shadow value. eg:

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSChange.png)

You can see the BBG get the new RGB value.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSRGB.png)

And the Grove - Chainable RGB LED alse turned into green.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/BbgAWSGreen.png)

Put hand on [AWS IoT Services Getting Started Guide](https://docs.aws.amazon.com/iot/latest/developerguide/iot-dg.pdf) to get more information about AWS IoT.

Troubleshoot
------------

### Can't open 192.168.7.2

Please update the latest software if you can't open 192.168.7.2.

**Step \#1: Download the latest software image.**

<font color="Blue">*Updated time: 11/15/15*</font>

Download the latest image from [google drive](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing)

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_BBG_4.png)

**Step \#2: Install compression utility**

Download and install [7-zip](http://www.7-zip.org/download.html).

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_BBG_1.png)

**Step \#3: Decompress the image**

Use 7-zip to decompress the .img file on the desktop or other folder.

**Step \#4: Install SD card programming utility**

Download and install [Image Writer for Windows](http://sourceforge.net/projects/win32diskimager/files/latest/download). Be sure to download the binary distribution.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_BBG_2.png)

**Step \#5: Connect SD card to your computer**

Use an 8G microSD card at least to SD adapter or a USB adapter to connect the SD card to your computer.

**Step \#6: Write the image to your SD card**

Use either the Ubuntu Image Writer or instructions on its page to write the decompressed image to your SD card.

![](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/img/AWS_BBG_3.png)

<div class="admonition danger">
<p class="admonition-title">Notes</p>
<p> 1. You may see a warning about damaging your device. This is fine to accept as long as you are pointing to your SD card for writing.</p>
<p> 2. You should not have your BeagleBone connected to your computer at this time.</p>
</div>

**Step \#7: Eject the SD card**

Eject the newly programmed SD card.

**Step \#8: Boot your board off of the SD card**

Insert SD card into your (powered-down) board and apply power, either by the USB cable or 5V adapter. You'll see flash led if getting started, and this reboot will take up to 10 minutes. The latest Debian flasher images automatically power down the board upon completion. Power-down your board, remove the SD card and apply power again to be complete.

Good Luck.

Tech Support
------------

Please post any question on the [forum](http://beagleboard.org/Community/Forums).

Firmware update
---------------

[Updated by 11/15/15](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing):

-   Fix the problem of not being able to access 192.168.7.2
-   Win 10 supported now

Resources
---------

-   [【PDF】AWS IoT Developer Guide](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/res/AWS_IoT_Developer_Guide.pdf)
-   [【PDF】AWS User Guide for BBG](https://raw.githubusercontent.com/SeeedDocument/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/master/res/AWS_User_Guide_for_BBG.pdf)
-   [Main Page for Grove IoT Starter Kits Powered by AWS](/Grove_IoT_Starter_Kits_Powered_by_AWS)
-   [【Github】AWS SDK for BeagleBone Green kit](https://github.com/Seeed-Studio/AWS_SDK_for_BBG)
-   [【Github】Libraries for BeagleBone Green kit](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)
-   [BeagleBone Green](/BeagleBone_Green)
-   [Main page of Beagleboard](http://beagleboard.org/getting-started)
-   [Grove - I2C ADC](/Grove-I2C_ADC)
-   [Grove - I2C Hub](/Grove-I2C_Hub)
-   [Grove - Relay](/Grove-Relay)
-   [Grove - Buzzer](/Grove-Buzzer)
-   [Grove - OLED Display 96\*96](/Grove-OLED_Display_0.96inch)
-   [Grove - Button](/Grove-Button)
-   [Grove - Temperature sensor v1.2](/Grove-Temperature_Sensor_V1.2)
-   [Grove - Sound sensor](/Grove-Sound_Sensor)
-   [Grove - 3-Axis Digital Accelerometer ADXL345](/Grove-3-Axis_Digital_Accelerometer-16g)
-   [Grove - Chainable RGB LED](/Grove-Chainable_RGB_LED)

<!-- This Markdown file was created from http://www.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS -->

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>