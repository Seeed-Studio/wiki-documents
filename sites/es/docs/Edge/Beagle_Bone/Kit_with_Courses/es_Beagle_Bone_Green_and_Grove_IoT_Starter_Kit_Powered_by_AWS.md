---
description: Kit de Inicio IoT BeagleBone Green y Grove Powered by AWS
title: Kit de Inicio IoT BeagleBone Green y Grove Powered by AWS
keywords:
 - Beagle_Bone
 - Kit_with_Courses
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 2/1/2023
  author: jianjing Huang
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

<!-- *Main articles: Start here [Grove IoT Starter Kits Powered by AWS](/Grove_IoT_Starter_Kits_Powered_by_AWS "Grove IoT Starter Kits Powered by AWS") , [Beaglebone Green](/BeagleBone_Green "Beaglebone green")* -->

[BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113) (BBG) es un esfuerzo conjunto de BeagleBoard.org y Seeed Studio. Está basado en el diseño de hardware de código abierto de [BeagleBone Black](https://beagleboard.org/BLACK) y ha añadido dos conectores Grove. El kit contiene el nuevo BBG, 10 módulos Grove así como tutoriales paso a paso para conectarlos rápidamente. El Kit de Inicio IoT Grove incluye los sensores y actuadores más utilizados para convertir tus ideas en aplicaciones tangibles con computación en la nube AWS.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B0168L6B0C)

Características
---------------

- Listo para usar, plug and play, sin protoboard ni soldadura
- Totalmente compatible con los Servicios AWS y las mejores prácticas de AWS
- Tutoriales paso a paso para desarrolladores y makers para comenzar rápidamente

Incluido en la Caja
-------------------

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_bbg.JPG)

<!-- | Board/Part                                                                                                                                   | Qty | Documentation                                                                                     |
|----------------------------------------------------------------------------------------------------------------------------------------------|-----|---------------------------------------------------------------------------------------------------|
| [BeagleBone Green](https://www.seeedstudio.com/depot/BeagleBone-Green-p-2504.html?cPath=122_113)                                              | 1   | [Read Here](/BeagleBone_Green "Beaglebone green")                                                 |
| [Grove - I2C ADC](https://www.seeedstudio.com/depot/Grove-I2C-ADC-p-1580.html?cPath=98_16)                                                    | 1   | [Read Here](/Grove-I2C_ADC "Grove - I2C ADC")                                                     |
| [Grove - I2C Hub](https://www.seeedstudio.com/depot/Grove-I2C-Hub-p-851.html?cPath=98_16)                                                     | 1   | [Read Here](/Grove-I2C_Hub "Grove - I2C Hub")                                                     |
| [Grove - Relay](https://www.seeedstudio.com/depot/Grove-Relay-p-769.html?cPath=39_42)                                                         | 1   | [Read Here](/Grove-Relay "Grove - Relay")                                                         |
| [Grove - Buzzer](https://www.seeedstudio.com/depot/Grove-Buzzer-p-768.html?cPath=38)                                                          | 1   | [Read Here](/Grove-Buzzer "Grove - Buzzer")                                                       |
| [Grove - OLED Display 0.96'](https://www.seeedstudio.com/depot/Grove-OLED-Display-096-p-824.html?cPath=34_36)'                                | 1   | [Read Here](/Grove-OLED_Display_0.96inch "Grove - OLED Display 96*96")                               |
| [Grove - Button](https://www.seeedstudio.com/depot/Grove-Button-p-766.html?cPath=85_50)                                                       | 1   | [Read Here](/Grove-Button "Grove - Button")                                                       |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/depot/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                              | 1   | [Read Here](/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2")                     |
| [Grove - Sound Sensor](https://www.seeedstudio.com/depot/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                          | 1   | [Read Here](/Grove-Sound_Sensor "Grove - Sound Sensor")                                           |
| [Grove - 3-Axis Digital Accelerometer(±16g)](https://www.seeedstudio.com/depot/Grove-3Axis-Digital-Accelerometer16g-p-1156.html?cPath=25_132) | 1   | [Read Here](/Grove-3-Axis_Digital_Accelerometer-16g "Grove - 3-Axis Digital Accelerometer(±16g\)") |
| [Grove - Chainable RGB LED](https://www.seeedstudio.com/depot/Grove-Chainable-RGB-LED-p-850.html?cPath=81_35)                                 | 1   | [Read Here](/Grove-Chainable_RGB_LED "Grove - Chainable RGB LED")                                 |
| [Micro USB Cable - 48cm](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)                                                                                                                       | 1   |                                                                                                   |  -->


Primeros Pasos
--------------

### Configura tu Servicio AWS IoT

Al principio, necesitamos obtener una cuenta del servicio AWS IoT, y hacer algunas configuraciones.

- Crear una [Cuenta de AWS](http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AMS5.0CreatingAnAWSAccount.html)
- Ir a la [Consola de AWS IoT](https://aws.amazon.com/iot/) y abrir el Panel de AWS IoT

    1.Hacer clic en **Services** en la esquina superior izquierda, y luego hacer clic en AWS IoT, como se muestra en la imagen a continuación.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_service.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_iot.png)

    2.Hacer clic en el botón **Get started**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_get_started.jpg)

    3.Hacer clic en **Create a Resource** y luego hacer clic en **Create a thing**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_click_create_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_view_a_thing.jpg)

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_LinkIt_starter_kit_name_a_thing.png)

    4.Introducir un nombre, el que desees, aquí lo nombramos temperature.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSCreateAThing.png)

    5.Hacer clic en **Create** para completarlo y luego hacer clic en **View thing** para obtener información del thing que creaste.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSViewThing.png)

    6.Hacer clic en **Connect a device**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConnectADevice.png)

    7.Elegir Node JS y hacer clic en **Generate certificate and policy**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGenerate.png)

    8.Encontrarás 3 archivos. Descargar el archivo, los necesitamos más tarde. Y hacer clic en **Confirm & start connecting**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSConfirm.png)

    9.Luego debemos descargar el SDK de AWS IoT Node.js y hacer clic en **Return to Thing Detail**.

    ![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSReturn.png)

Ahora, este paso está terminado. Pasemos al siguiente paso.

### Configurar tu BeagleBone Green

<!-- Conectar BBG a tu PC mediante cable micro USB, y permitir que BBG acceda a Internet. Si esta es tu primera vez usando BBG/BBB, tal vez puedas seguir [aquí](/es/BeagleBone_Green) para comenzar. -->

Conectar los módulos Grove al BBG como muestra la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSSetup.jpg)

### Trabajo de Software

#### Subir SDK y archivo de claves a la carpeta de ejemplos de Cloud9

1.¿Aún recuerdas los 3 archivos de claves y el SDK de Node JS que ya descargaste antes?

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSFile.png)

2.Ahora, sube el SDK y el archivo de claves a tu carpeta de ejemplos de Cloud9.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload1.png)

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUpload2.png)

#### Abrir una nueva terminal

Necesitamos descomprimir el SDK y mover las claves al lugar correcto.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSUNzip.png)

```
# cd examples
```

Y descomprime el archivo del SDK.

```
# unzip aws-iot-device-sdk-js-latest.zip
```

Luego ingresando a la carpeta descomprimida.

```
#cd aws-iot-device-sdk-js
```

Instala los paquetes dependientes.

```
# npm install
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSMkdir.png)

Crea una nueva carpeta llamada awsCerts.

```
# mkdir awsCerts && cd awsCerts
```

Y luego mueve los 3 archivos clave a la nueva carpeta.

```
# mv ../../31f2fd2680-* .
```

Ten en cuenta que 31f2fd2680 debe ser reemplazado por el número de tus propios archivos de clave.

Y renombra los archivos de clave

```
# mv 31f2fd2680-certificate.pem.crt.txt  certificate.pem.crt
# mv 31f2fd2680-private.pem.key   private.pem.key
```

Descargar un archivo de internet.

```
# wget https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem
```

Y renombra el archivo descargado como root-CA.crt.

```
#mv VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem root-CA.crt
```

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRename.png)

#### Programación en BBG

Ingresa a la carpeta examples.

    # cd .. && cd examples/

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSexamples.png)

Crea un nuevo archivo llamado grove_temperature_sensor.py.

    # vim grove_temperature_sensor.py

Y copia el siguiente código al archivo.

```
#!/usr/bin/python
# -*- coding: utf-8 -*-
 
import time
import math
import Adafruit_BBIO.GPIO as GPIO
from Adafruit_I2C import Adafruit_I2C
BUZZER = "P9_22"            # GPIO P9_22
GPIO.setup(BUZZER, GPIO.OUT)
 
# El umbral para encender el zumbador 28 Celsius
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
        "Leer datos ADC 0-4095."
        data_list = i2c.readList(REG_ADDR_RESULT, 2)
        #print 'data list', data_list
        data = ((data_list[0] & 0x0f) << 8 | data_list[1]) & 0xfff
        return data
adc = I2cAdc()
 
#   El argumento en el método read_temperature() define qué versión de la placa Grove(Sensor de Temperatura Grove) tienes conectada.
#   Por defecto es 'v1.2'. ej.
#       temp = read_temperature('v1.0')          # valor B = 3975
#       temp = read_temperature('v1.1')          # valor B = 4250
#       temp = read_temperature('v1.2')          # valor B = 4250
def read_temperature(model = 'v1.2'):
    "Leer valores de temperatura en Celsius del Sensor de Temperatura Grove"
    # cada una de las revisiones del sensor usa diferentes termistores, cada uno con su propia constante de valor B
    if model == 'v1.2':
        bValue = 4250  # el sensor v1.2 usa termistor ??? (asumiendo NCP18WF104F03RC hasta que SeeedStudio lo aclare)
    elif model == 'v1.1':
        bValue = 4250  # el sensor v1.1 usa termistor NCP18WF104F03RC
    else:
        bValue = 3975  # el sensor v1.0 usa termistor TTC3A103*39H
 
    total_value = 0
    for index in range(20):
        sensor_value = adc.read_adc()
        total_value += sensor_value
        time.sleep(0.05)
    average_value = float(total_value / 20)
 
    # Transformar los datos ADC en los datos de la plataforma Arduino.
    sensor_value_tmp = (float)(average_value / 4095 * 2.95 * 2 / 3.3 * 1023)
    resistance = (float)(1023 - sensor_value_tmp) * 10000 / sensor_value_tmp
    temperature = round((float)(1 / (math.log(resistance / 10000) / bValue + 1 / 298.15) - 273.15), 2)
    return temperature
 
# Función: Si el sensor de temperatura detecta la temperatura que alcanza el umbral que estableciste en el código, el zumbador suena durante 1s.
# Hardware: Grove - I2C ADC, Grove - Sensor de Temperatura, Grove - Zumbador
# Nota: Usar P9_22(UART2_RXD) como GPIO.
# Conectar el Zumbador Grove al puerto Grove UART del Beaglebone Green.
# Conectar el Grove - I2C ADC al puerto Grove I2C del Beaglebone Green, y luego conectar el Grove - Sensor de Temperatura al Grove - I2C ADC.
if __name__ == '__main__':
 
    while True:
        try:
            # Leer valores de temperatura en Celsius del Sensor de Temperatura Grove
            temperature = read_temperature('v1.2')
 
            # Cuando la temperatura alcanza el valor predeterminado, el zumbador suena.
            if temperature > THRESHOLD_TEMPERATURE:
                # Enviar HIGH para encender el ZUMBADOR
                GPIO.output(BUZZER, GPIO.HIGH)
            else:
                # Enviar LOW para apagar el ZUMBADOR
                GPIO.output(BUZZER, GPIO.LOW)
 
            print "temperature = ", temperature
 
        except KeyboardInterrupt:
            GPIO.output(BUZZER, GPIO.LOW)
            break
 
        except IOError:
            print "Error"
```

Crea un nuevo archivo llamado python_sensor.py.

    #vim  python_sensor.py

Copia el siguiente código al nuevo archivo.

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

Crea un nuevo archivo llamado rgbled.js.

    #vim rgbled.js

Y copia el siguiente código al nuevo archivo.

```
var exec = require('child_process').exec; 
var value = 0;
 
exports.initpins = function(){
    exec("echo 3 > /sys/class/gpio/export",function(error,stdout,stderr){
        if(error) 
                console.info('stderr : '+stderr);
    });
    exec("echo out > /sys/class/gpio/gpio3/direction",function(error,stdout,stderr){
                if(error) 
                        console.info('stderr : '+stderr);
        });
 
    exec("echo 2 > /sys/class/gpio/export",function(error,stdout,stderr){
                if(error) 
                        console.info('stderr : '+stderr);
        });
 
    exec("echo out > /sys/class/gpio/gpio2/direction",function(error,stdout,stderr){
                if(error) 
                        console.info('stderr : '+stderr);
        });
 
}
digitalwrite = function(pin,state){
    exec("echo "+state.toString()+" > /sys/class/gpio/gpio"+pin.toString()+"/value",
        function(error,stdout,stderr){
                    if(error) 
                            console.log('stderr : '+stderr);
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
    console.log("establecer rgb");
}
test = function(){
    initpins();
    while(1){
    console.log("bucle");
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

Crea un nuevo archivo llamado shadow.js.

    #vim shadow.js

Copia el siguiente código al nuevo archivo.

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
// Crear una instancia de servidor y encadenar la función listen a ella
net.createServer(function(socket) {
    console.log('CONECTADO: ' + socket.remoteAddress +':'+ socket.remotePort);
            // Agregar un manejador de evento 'data' a esta instancia de socket
    socket.on('data', function(data) {
        console.log('DATOS ' + socket.remoteAddress + ': ' + data);
        temperature = data.toString().substr(0,5);
        socket.write('Esta es tu solicitud: "' + data + '"');
    });
    // Agregar un manejador de evento 'close' a esta instancia de socket
    socket.on('close', function(data) {
        console.log('Conexión de socket cerrada... ');
    });
}).listen(PORT, HOST);
//
// Estado de Thing shadow
//
var rgbLedLampState = {"state":{"desired":{"red":187,"green":114,"blue":222,value:25}}};
 
//
// Valor de token de cliente devuelto por la operación thingShadows.update()
//
var clientTokenUpdate;
 
thingShadows.on('connect', function() {
//
// Después de conectarse a la plataforma AWS IoT, registrar interés en el
// Thing Shadow llamado 'RGBLedLamp'.
//
    thingShadows.register( myThingName );
//
// 2 segundos después de registrarse, actualizar el Thing Shadow llamado 
// 'RGBLedLamp' con el último estado del dispositivo y guardar el clientToken
// para que podamos correlacionarlo con eventos de estado o timeout.
//
// Nota que el retraso no es requerido para actualizaciones posteriores; solo
// la primera actualización después de un registro de Thing Shadow usando parámetros
// por defecto requiere un retraso. Ver documentación de API para el método update
// para más detalles.
//
    exec('python python_sensor.py',function(error,stdout,stderr){
            if(stdout.length >1){
                console.log('ofreciste argumentos:',stdout);
            }else {
                console.log('no ofreciste argumentos');
            }
            if(error) {
                console.info('stderr : '+stderr);
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
       console.log('recibido '+stat+' en '+thingName+': '+
                   JSON.stringify(stateObject));
    });
 
thingShadows.on('delta', 
    function(thingName, stateObject) {
       console.log('recibido delta '+' en '+thingName+': '+
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
       console.log('recibido timeout '+' en '+thingName+': '+
                   clientToken);
    });
```

Tenga en cuenta que el valor de ***myThingName*** en la línea 5 debe ser el mismo que el nombre de Thing que ya creó anteriormente en su cuenta de AWS.

#### Ejecutar el Código

Cuando el BBG termine de reiniciar, ejecute el código.

    # cd examples/aws-iot-device-sdk-js/examples/
    # node shadow.js

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRun.png)

### Ver Resultado

Luego abramos el sitio web de [AWS IoT](https://aws.amazon.com/iot/), inicie sesión en su cuenta. Y haga clic en el thing que creó hace unos minutos. Ahora puede ver que la temperatura fue subida al sitio web.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSResult.png)

Si desea cambiar el color del led encadenable grove. Puede actualizar el valor shadow. ej:

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSChange.png)

Puede ver que el BBG obtiene el nuevo valor RGB.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSRGB.png)

Y el Grove - Chainable RGB LED también se volvió verde.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/BbgAWSGreen.png)

Consulte la [Guía de Introducción a los Servicios de AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/iot-dg.pdf) para obtener más información sobre AWS IoT.

Solución de Problemas
---------------------

### No se puede abrir 192.168.7.2

Por favor actualice al software más reciente si no puede abrir 192.168.7.2.

**Paso \#1: Descargar la imagen de software más reciente.**

*<font color="Blue">Tiempo de actualización: 15/11/15</font>*

Descargue la imagen más reciente desde [google drive](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing)

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_4.png)

**Paso \#2: Instalar utilidad de compresión**

Descargue e instale [7-zip](http://www.7-zip.org/download.html).

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_1.png)

**Paso \#3: Descomprimir la imagen**

Use 7-zip para descomprimir el archivo .img en el escritorio u otra carpeta.

**Paso \#4: Instalar utilidad de programación de tarjeta SD**

Descargue e instale [Image Writer for Windows](http://sourceforge.net/projects/win32diskimager/files/latest/download). Asegúrese de descargar la distribución binaria.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_2.png)

**Paso \#5: Conectar tarjeta SD a su computadora**

Use una tarjeta microSD de al menos 8G con un adaptador SD o un adaptador USB para conectar la tarjeta SD a su computadora.

**Paso \#6: Escribir la imagen a su tarjeta SD**

Use el Ubuntu Image Writer o las instrucciones en su página para escribir la imagen descomprimida a su tarjeta SD.

![](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/AWS_BBG_3.png)

<div className="admonition danger">
  <p className="admonition-title">Notas</p>
  <p> 1. Puede ver una advertencia sobre dañar su dispositivo. Está bien aceptarla siempre que esté apuntando a su tarjeta SD para escribir.</p>
  <p> 2. No debe tener su BeagleBone conectado a su computadora en este momento.</p>
</div>

**Paso \#7: Expulsar la tarjeta SD**

Expulse la tarjeta SD recién programada.

**Paso \#8: Arrancar su placa desde la tarjeta SD**

Inserte la tarjeta SD en su placa (apagada) y aplique energía, ya sea por el cable USB o adaptador de 5V. Verá el led flash si está iniciando, y este reinicio tomará hasta 10 minutos. Las imágenes flasher de Debian más recientes apagan automáticamente la placa al completarse. Apague su placa, retire la tarjeta SD y aplique energía nuevamente para completar.

Buena suerte.

Actualización de Firmware
-------------------------

[Actualizado el 15/11/15](https://drive.google.com/file/d/0BwBIy7Eq4Nucd3NTaUkzS0dtT2s/view?usp=sharing):

- Corregido el problema de no poder acceder a 192.168.7.2
- Win 10 soportado ahora

Recursos
--------

- [【PDF】Guía del Desarrollador de AWS IoT](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_IoT_Developer_Guide.pdf)
- [【PDF】Guía de Usuario de AWS para BBG](https://files.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/res/AWS_User_Guide_for_BBG.pdf)
<!-- - [Página Principal para Kits de Inicio IoT Grove Powered by AWS](/Main Page for Grove IoT Starter Kits Powered by AWS) -->
- [【Github】SDK de AWS para kit BeagleBone Green](https://github.com/Seeed-Studio/AWS_SDK_for_BBG)
- [【Github】Librerías para kit BeagleBone Green](https://github.com/Seeed-Studio/Grove_Starter_Kit_for_BBG)
<!-- - [BeagleBone Green](/es/BeagleBone_Green) -->
- [Página principal de Beagleboard](https://beagleboard.org/getting-started)
<!-- - [Grove - I2C ADC](/es/Grove_Sensors_Network/Standard_Protocol) -->
- [Grove - I2C Hub](/es/Grove-I2C_Hub)
<!-- - [Grove - Relay](/es/Grove-Relay) -->
<!-- - [Grove - Buzzer](/es/Grove-Buzzer) -->
- [Grove - OLED Display 96\*96](/es/Grove-OLED_Display_0.96inch)
- [Grove - Button](/es/Grove-Button)
- [Grove - Temperature sensor v1.2](/es/Grove-Temperature_Sensor_V1.2)
- [Grove - Sound sensor](/es/Grove-Sound_Sensor)
- [Grove - 3-Axis Digital Accelerometer ADXL345](/es/Grove-3-Axis_Digital_Accelerometer-16g)
<!-- - [Grove - Chainable RGB LED](/es/Grove-Chainable_RGB_LED) -->
<!-- 上述链接缺失 -->

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS -->

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>