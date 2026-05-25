---
description: BeagleBone Green e Grove IoT Starter Kit com tecnologia AWS
title: BeagleBone Green e Grove IoT Starter Kit com tecnologia AWS
keywords:
  - Beagle_Bone
  - Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/
---

<!-- ---
name: Beagle Bone Green and Grove IoT Starter Kit Powered by AWS
category: BeagleBone
bzurl: https://www.amazon.com/BeagleBone-Green-Grove-Starter-Powered/dp/B017O3H49K
oldwikiname: Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
prodimagename: Aws_kit_bbg_cover.JPG
bzprodimageurl: https://images-na.ssl-images-amazon.com/images/I/41ld4VguWCL.jpg
surveyurl: https://www.research.net/r/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
--- -->

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg_cover.JPG)

<!-- *Main articles: Start here [Grove IoT Starter Kits Powered by AWS](/pt-br/Grove_IoT_Starter_Kits_Powered_by_AWS "Grove IoT Starter Kits Powered by AWS") , [Beaglebone Green](/pt-br/BeagleBone_Green "Beaglebone green")* -->

[BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113) (BBG) é um esforço conjunto da BeagleBoard.org e da Seeed Studio. Ele é baseado no design de hardware de código aberto do [BeagleBone Black](https://beagleboard.org/BLACK) e adicionou dois conectores Grove. O kit contém o novo BBG, 10 módulos Grove, bem como tutoriais passo a passo para conectá‑los rapidamente. O Grove IoT Starter Kit inclui os sensores e atuadores usados com mais frequência para transformar suas ideias em aplicações tangíveis com computação em nuvem AWS.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B0168L6B0C)

Recursos
--------

- Pronto para uso, plug and play, sem protoboard ou soldagem
- Totalmente compatível com serviços AWS e melhores práticas AWS
- Tutoriais passo a passo para desenvolvedores e makers começarem rapidamente

Incluso na caixa
-------------------

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg.JPG)

<!-- | Board/Part                                                                                                                                   | Qty | Documentation                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------------|
| [BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113)                                              | 1   | [Read Here](/pt-br/BeagleBone_Green "Beaglebone green")                                                 |
| [Grove - I2C ADC](https://www.seeedstudio.com/depot/Grove-I2C-ADC-p-1580.html?cPath=98_16)                                                    | 1   | [Read Here](/pt-br/Grove-I2C_ADC "Grove - I2C ADC")                                                     |
| [Grove - I2C Hub](https://www.seeedstudio.com/depot/Grove-I2C-Hub-p-851.html?cPath=98_16)                                                     | 1   | [Read Here](/pt-br/Grove-I2C_Hub "Grove - I2C Hub")                                                     |
| [Grove - Relay](https://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42)                                                         | 1   | [Read Here](/pt-br/Grove-Relay "Grove - Relay")                                                         |
| [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38)                                                          | 1   | [Read Here](/pt-br/Grove-Buzzer "Grove - Buzzer")                                                       |
| [Grove - OLED Display 0.96'](https://www.seeedstudio.com/depot/Grove-OLED-Display-096-p-824.html?cPath=34_36)'                                | 1   | [Read Here](/pt-br/Grove-OLED_Display_0.96inch "Grove - OLED Display 96*96")                               |
| [Grove - Button](https://www.seeedstudio.com/depot/Grove-Button-p-766.html?cPath=85_50)                                                       | 1   | [Read Here](/pt-br/Grove-Button "Grove - Button")                                                       |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/depot/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                              | 1   | [Read Here](/pt-br/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2")                     |
| [Grove - Sound Sensor](https://www.seeedstudio.com/depot/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                          | 1   | [Read Here](/pt-br/Grove-Sound_Sensor "Grove - Sound Sensor")                                           |
| [Grove - 3-Axis Digital Accelerometer(±16g)](https://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html?cPath=25_132) | 1   | [Read Here](/pt-br/Grove-3-Axis_Digital_Accelerometer-16g "Grove - 3-Axis Digital Accelerometer(±16g\)") |
| [Grove - Chainable RGB LED](https://www.seeedstudio.com/depot/Grove-Chainable-RGB-LED-p-850.html?cPath=81_35)                                 | 1   | [Read Here](/pt-br/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")                                 |
| [Micro USB Cable - 48cm](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                                                                                                                       | 1   |                                                                                                   |  -->




Primeiros passos
---------------

### Configure seu serviço AWS IoT

No começo, precisamos obter uma conta de serviço AWS IoT e fazer algumas configurações.

- Crie uma [Conta AWS](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html)
- Vá para o [AWS IoT Console](https://aws.amazon.com/iot/) e abra o painel do AWS IoT

    1.Clique em **Services** no canto superior esquerdo e, em seguida, clique em AWS IoT, como mostrado na imagem abaixo.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_service.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png)

    2.Clique no botão **Get started**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg)

    3.Clique em **Create a Resource** e depois em **Create a thing**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_view_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_name_a_thing.png)

    4.Digite um nome, qualquer que você queira; aqui nós o nomeamos como temperature.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSCreateAThing.png)

    5.Clique em **Create** para concluir e então clique em **View thing** para obter informações sobre a thing que você criou.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSViewThing.png)

    6.Clique em **Connect a device**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConnectADevice.png)

    7.Escolha Node JS e clique em **Generate certificate and policy**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGenerate.png)

    8.Você verá 3 arquivos. Baixe os arquivos, vamos precisar deles depois. E clique em **Confirm & start connecting**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConfirm.png)

    9.Então devemos baixar o AWS IoT Node.js SDK e clicar em **Return to Thing Detail**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSReturn.png)

Agora, esta etapa está concluída. Vamos para a próxima etapa.

### Configure seu BeagleBone Green

<!-- Connect BBG to your PC via micro USB cable, and let BBG access the Internet. If this is your first time to use BBG/BBB, maybe you can follow [here](/pt-br/BeagleBone_Green) to get started. -->

Conecte os módulos Grove ao BBG como mostra a figura abaixo.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSSetup.jpg)

### Funcionamento do software

#### Envie o SDK e o arquivo de chaves para a pasta de exemplos do Cloud9

1.Você ainda se lembra dos 3 arquivos de chave e do Node JS SDK que já baixou antes.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSFile.png)

2.Agora, envie o SDK e o arquivo de chaves para a pasta de exemplos do seu Cloud9.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload1.png)

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload2.png)

#### Abra um novo terminal

Precisamos descompactar o SDK e mover as chaves para o lugar certo.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUNzip.png)

```
# cd examples
```

E descompacte o arquivo do SDK.

```
# unzip aws-iot-device-sdk-js-latest.zip
```

Em seguida, entre na pasta descompactada.

```
#cd aws-iot-device-sdk-js
```

Instale os pacotes dependentes.

```
# npm install
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSMkdir.png)

Crie uma nova pasta chamada awsCerts.

```
# mkdir awsCerts && cd awsCerts
```

E então mova os 3 arquivos de chave para a nova pasta.

```
# mv ../../31f2fd2680-* .
```

Observe que 31f2fd2680 deve ser substituído pelo número dos seus próprios arquivos de chave.

E renomeie os arquivos de chave

```
# mv 31f2fd2680-certificate.pem.crt.txt  certificate.pem.crt
# mv 31f2fd2680-private.pem.key   private.pem.key
```

Baixe um arquivo da internet.

```
# wget https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem
```

E renomeie o arquivo baixado como root-CA.crt.

```
#mv VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem root-CA.crt
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRename.png)

#### Programação no BBG

Entre na pasta examples.

    # cd .. && cd examples/

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSexamples.png)

Crie um novo arquivo chamado grove_temperature_sensor.py.

    # vim grove_temperature_sensor.py

E copie o seguinte código para o arquivo.

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

Crie um novo arquivo chamado python_sensor.py.

    #vim  python_sensor.py

Copie o seguinte código para o novo arquivo.

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

Crie um novo arquivo chamado rgbled.js.

    #vim rgbled.js

E copie o seguinte código para o novo arquivo.

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

Crie um novo arquivo chamado shadow.js.

    #vim shadow.js

Copie o seguinte código para o novo arquivo.

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

Observe que o valor de ***myThingName*** na 5ª linha deve ser o mesmo que o nome da sua Thing que você já criou antes na sua conta AWS.

#### Execute o Código

Quando a reinicialização do BBG terminar, execute o código.

    # cd examples/aws-iot-device-sdk-js/examples/
    # node shadow.js

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRun.png)

### Ver o Resultado

Então vamos abrir o site do [AWS IoT](https://aws.amazon.com/iot/), fazer login na sua conta e clicar na Thing que você criou há alguns minutos. Agora você pode ver que a temperatura foi enviada para o site.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSResult.png)

Se você quiser mudar a cor do Grove Chainable LED, pode atualizar o valor do shadow. por exemplo:

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSChange.png)

Você pode ver que o BBG recebe o novo valor RGB.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRGB.png)

E o Grove - Chainable RGB LED também mudou para verde.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGreen.png)

Coloque as mãos no [AWS IoT Services Getting Started Guide](https://docs.aws.amazon.com/iot/latest/developerguide/iot-dg.pdf) para obter mais informações sobre o AWS IoT.

Solução de Problemas
------------

### Não é possível abrir 192.168.7.2

Atualize o software para a versão mais recente se você não conseguir abrir 192.168.7.2.

**Passo \#1: Baixe a imagem de software mais recente.**

*<font color="Blue">Hora da atualização: 11/15/15</font>*

Baixe a imagem mais recente do [google drive](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing)

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_4.png)

**Passo \#2: Instale o utilitário de compactação**

Baixe e instale o [7-zip](http://www.7-zip.org/download.html).

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_1.png)

**Passo \#3: Descompacte a imagem**

Use o 7-zip para descompactar o arquivo .img na área de trabalho ou em outra pasta.

**Passo \#4: Instale o utilitário de gravação do cartão SD**

Baixe e instale o [Image Writer for Windows](http://sourceforge.net/projects/win32diskimager/files/latest/download). Certifique-se de baixar a distribuição binária.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_2.png)

**Passo \#5: Conecte o cartão SD ao seu computador**

Use um cartão microSD de pelo menos 8G com um adaptador SD ou um adaptador USB para conectar o cartão SD ao seu computador.

**Passo \#6: Grave a imagem no seu cartão SD**

Use o Ubuntu Image Writer ou as instruções na sua página para gravar a imagem descompactada no seu cartão SD.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_3.png)

<div className="admonition danger">
  <p className="admonition-title">Notas</p>
  <p> 1. Você pode ver um aviso sobre danificar seu dispositivo. Não há problema em aceitar, desde que você esteja apontando para o seu cartão SD para gravação.</p>
  <p> 2. Você não deve ter o seu BeagleBone conectado ao computador neste momento.</p>
</div>

**Passo \#7: Ejete o cartão SD**

Ejete o cartão SD recém-programado.

**Passo \#8: Inicialize sua placa a partir do cartão SD**

Insira o cartão SD na sua placa (desligada) e ligue-a, seja pelo cabo USB ou pelo adaptador de 5V. Você verá o LED piscar ao iniciar, e essa reinicialização levará até 10 minutos. As imagens mais recentes do Debian flasher desligam automaticamente a placa após a conclusão. Desligue a placa, remova o cartão SD e ligue novamente para concluir.

Boa sorte.

Atualização de firmware
---------------

[Atualizado em 11/15/15](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing):

- Corrige o problema de não ser possível acessar 192.168.7.2
- Win 10 suportado agora

Recursos
---------

- [【PDF】AWS IoT Developer Guide](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_IoT_Developer_Guide.pdf)
- [【PDF】Guia do Usuário AWS para BBG](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_User_Guide_for_BBG.pdf)
<!-- - [Main Page for Grove IoT Starter Kits Powered by AWS](/pt-br/Main Page for Grove IoT Starter Kits Powered by AWS) -->
- [【Github】AWS SDK for BeagleBone Green kit](https://github.com/Seeed-Studio/AWS_SDK_for_BBG)
- [【Github】Libraries for BeagleBone Green kit](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)
<!-- - [BeagleBone Green](/pt-br/BeagleBone_Green) -->
- [Página principal do Beagleboard](https://beagleboard.org/getting-started)
<!-- - [Grove - I2C ADC](/pt-br/Grove_Sensors_Network/Standard_Protocol) -->
- [Grove - I2C Hub](/pt-br/Grove-I2C_Hub)
<!-- - [Grove - Relay](/pt-br/Grove-Relay) -->
<!-- - [Grove - Buzzer](/pt-br/Grove-Buzzer) -->
- [Grove - OLED Display 96\*96](/pt-br/Grove-OLED_Display_0.96inch)
- [Grove - Button](/pt-br/Grove-Button)
- [Grove - Temperature sensor v1.2](/pt-br/Grove-Temperature_Sensor_V1.2)
- [Grove - Sound sensor](/pt-br/Grove-Sound_Sensor)
- [Grove - 3-Axis Digital Accelerometer ADXL345](/pt-br/Grove-3-Axis_Digital_Accelerometer-16g)
<!-- - [Grove - Chainable RGB LED](/pt-br/Grove-Chainable_RGB_LED) -->
<!-- 上述链接缺失 -->

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
