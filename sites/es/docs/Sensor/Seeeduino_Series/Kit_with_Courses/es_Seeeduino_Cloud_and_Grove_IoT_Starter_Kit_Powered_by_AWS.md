---
description: Kit de Inicio IoT Seeeduino Cloud y Grove Powered by AWS
title: Kit de Inicio IoT Seeeduino Cloud y Grove Powered by AWS
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS
last_update:
  date: 1/31/2023
  author: shuxu hu
---
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_seeeduino_wiki_cover.JPG)

*Artículos principales: Comienza aquí <a href="/es/Grove_IoT_Starter_Kits_Powered_by_AWS" ><span><font size={"3"}> Kits de Inicio IoT Grove Powered by AWS </font></span></a> , <a href="/es/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>*

**<a href="/es/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>** es una placa microcontroladora basada en el módulo WiFi IoT Dragino [HE](http://www.dragino.com/products/linux-module/item/87-he.html) y ATmega32u4. **HE** es un módulo WiFi de 150M, 2.4G de alto rendimiento y bajo costo que incluye un sistema OpenWrt de código abierto. Seeeduino Cloud también es una placa compatible con [Arduino Yun](https://www.arduino.cc/en/Main/ArduinoBoardYun). Este kit incluye los sensores y actuadores más utilizados para convertir tus ideas en aplicaciones tangibles con computación en la nube de AWS.

[![enter image description here](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://wwww.amazon.com/dp/B01669BB60)

## Características

--------

- Listo para usar, plug and play, no requiere protoboard ni trabajo de soldadura.
- Totalmente compatible con los servicios de AWS y las prácticas de AWS.
- Tutoriales paso a paso para desarrolladores y makers para prototipado más rápido.

## Lista de Partes

-------------------

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Aws_kit_seeeduino_cloud.JPG)

| Placa/Componente                                                                                                                                            | Cant | Documentación                                                                 |
|-------------------------------------------------------------------------------------------------------------------------------------------------------|-----|-------------------------------------------------------------------------------|
| [Placa de desarrollo Seeeduino Cloud](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html?cPath=6_7) | 1   | <a href="/es/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>                               |
| [Base Shield](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html?cPath=98_16)                                                                | 1   | [Leer Aquí](/Base_Shield_V2/ "Base shield v2")                                 |
| [Grove - LCD RGB Backlight](https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html?cPath=34_36)                                         | 1   | [Leer Aquí](/Grove-LCD_RGB_Backlight "Grove - LCD RGB Backlight")             |
| [Grove - Relay](https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42)                                                                  | 1   | [Leer Aquí](/Grove-Relay "Grove - Relay")                                     |
| [Grove - Buzzer](https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38)                                                                   | 1   | [Leer Aquí](/Grove-Buzzer "Grove - Buzzer")                                   |
| [Grove - Sound Sensor](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html?cPath=25_128)                                                   | 1   | [Leer Aquí](/Grove-Sound_Sensor "Grove - Sound Sensor")                       |
| [Grove - Touch Sensor](https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94)                                                    | 1   | [Leer Aquí](/Grove-Touch_Sensor "Grove - Touch Sensor")                       |
| [Grove - Rotary Angle Sensor](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52)                                      | 1   | [Leer Aquí](/Grove-Rotary_Angle_Sensor "Grove - Rotary Angle Sensor")         |
| [Grove - Temperature Sensor](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html?cPath=25_125)                                       | 1   | [Leer Aquí](/Grove-Temperature_Sensor_V1.2 "Grove - Temperature Sensor V1.2") |
| [Grove - LED](https://www.seeedstudio.com/Grove-LED-p-767.html)                                                                                  | 1   | [Leer Aquí](/Grove-Red_LED "Grove-Red_LED")                                         |
| [Grove - Light Sensor](https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27)                                                    | 1   | [Leer Aquí](/Grove-Light_Sensor "Grove - Light Sensor")                       |
| [Grove – Button](https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50)                                                                | 1   | [Leer Aquí](/Grove-Button "Grove - Button")                                   |
| LED DIP Azul-Azul                                                                                                                                     | 1   |                                                                               |
| LED DIP Verde-Verde                                                                                                                                   | 1   |                                                                               |
| LED DIP Rojo-Rojo                                                                                                                                       | 1   |                                                                               |
| Mini Servo                                                                                                                                            | 1   |                                                                               |
| Cable Micro USB - 48cm                                                                                                                                | 1   |                                                                               |

## Configura tu Servicio AWS IoT

------------------------------

En esta sección, mostraremos cómo configurar el Servicio AWS IoT:

- Paso 1. Crear una [Cuenta de AWS](https://aws.amazon.com/free/?nc1=h_ls).

- Paso 2. Ir a [AWS IoT](https://us-west-2.console.aws.amazon.com/iotv2/home?region=us-west-2#/home).

- Paso 3. Después de cargar la consola de IoT, hacer clic en "Get Started".

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Get%20started.png)

- Paso 4. Hacer clic en "Manage" en el menú del lado izquierdo y hacer clic en "Register a thing".
- Paso 5. Ingresar un nombre, el que gustes, en el tutorial original se llamaba temperature, luego hacer clic en "create" (imagen "Register a thing").

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Register%20a%20thing.png)

- Paso 6. Hacer clic en la cosa que creaste.
- Paso 7. Hacer clic en Security en el menú izquierdo y hacer clic en Create certificate.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Thing%20-%20Security.png)

- Paso 8. Mostrará tres enlaces de descarga que corresponden a diferentes archivos de clave o certificado. Descargar estos archivos, los necesitaremos más tarde. También asegúrate de descargar el root CA (arriba del botón "Activate"). Hacer clic en Activate y luego hacer clic en Attach a policy y después en Create a policy.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20created.png)

- Paso 9. Nombra tu política como quieras, nosotros nombramos la nuestra policy1. Para empezar, puedes usar iot:* como la Acción y * como el Resource ARN. Marcar Allow y hacer clic en create.
Para referencia futura, el * para acciones y resource ARN te permite hacer todas las acciones en todos los dispositivos. La mejor práctica para políticas de producción es hacerlas más específicas.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Create%20a%20policy.png)

- Paso 10. Ahora que la política ha sido creada, hacer clic en Certificates en el lado izquierdo.
Hacer clic en el certificado que creamos previamente.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificates.png)

- Paso 11. Hacer clic en el botón Actions y elegir Attach policy del menú.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Certificate%20Actions.png)

- Paso 12. Elegir la política que creamos previamente y hacer clic en Attach.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Attach%20policy.png)

## Configura tu Seeeduino Cloud (Arduino Yun)

-----------------------------------------

### Comenzando con Seeeduino Cloud (Arduino Yun)

Si esta es tu primera vez usando Seeeduino Cloud o Arduino Yun, puedes hacer clic en <a href="/es/Seeeduino_Cloud" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a> para comenzar. Antes de proceder a los siguientes pasos, por favor asegúrate de que tienes **expect** instalado en tu computadora y correctamente instalado el [Arduino IDE](https://www.arduino.cc/en/Main/OldSoftwareReleases).

### Descargar AWS-IoT-Arduino-Yún-SDK

Hacer clic [aquí](https://s3.amazonaws.com/aws-iot-device-sdk-arduino-yun/AWS-IoT-Arduino-Yun-SDK-latest.zip) para descargar el paquete zip AWS-IoT-Arduino-Yún-SDK y extraerlo a AWS-IoT-Arduino-Yun-SDK en tu computadora.

### Instalación en Mac OS/Linux

Antes de proceder a los siguientes pasos, por favor asegúrate de que tienes instalado en tu computadora y correctamente instalado el Arduino IDE.

#### Para instalar Ubuntu

Para Ubuntu, simplemente ejecuta el siguiente comando. sudo apt-get install expect Para Mac OS X, **expect** está instalado por defecto.

#### Para instalar Arduino IDE

Para la instalación del Arduino IDE en Linux, por favor visita [aquí](http://playground.arduino.cc/Linux/All).

#### Configurar placa de desarrollo

- Paso 1. Configurar la placa Arduino Yún y conectarla a WiFi. Obtener su dirección IP y contraseña. Si no sabes cómo hacerlo puedes seguir esta <a href="/es/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>.
- Paso 2. Asegúrate de que tu computadora esté conectada a la misma red (rango de direcciones IP locales).
- Paso 3. Descargar el archivo CA de AWS IoT desde [aquí](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem). Y guardarlo como *root-CA.crt*.
- Paso 4. Poner tu archivo CA de AWS IoT, clave privada y certificado en AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs.
- Paso 5. Abrir una terminal, cd a **AWS-IoT-Arduino-Yun-SDK**. Hacer *chmod 755 AWSIoTArduinoYunInstallAll.sh* y ejecutarlo como se muestra abajo. Por defecto para Seeeduino Cloud, tu nombre de usuario será root y tu contraseña será seeeduino. Placa Arduino Yún, tu nombre de usuario será root y tu contraseña será Arduino. Para el paso 5, puede tomar 15-20 minutos para que el dispositivo descargue e instale los paquetes requeridos (distribute, python-OpenSSL, pip, paho-MQTT). No cierres la terminal antes de que el script termine, de lo contrario tendrás que empezar de nuevo con el paso 5. Asegúrate de estar en tu terminal local antes de repetir el paso 5.

```
./AWSIoTArduinoYunInstallAll.sh <Board IP> <UserName> <Board Password>.
```

- Paso 6. Copia y pega la carpeta **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library** en las librerías de Arduino que se instalaron con tu instalación del SDK de Arduino. Para Mac OS por defecto, debería estar bajo **Documents/Arduino/libraries**.

- Paso 7. Reinicia el IDE de Arduino si estaba ejecutándose durante la instalación. Deberías poder ver los ejemplos de AWS IoT en la carpeta Examples en tu IDE. Hay otros dos scripts: **AWSIoTArduinoYunScp.sh** y **AWSIoTArduinoYunSetupEnvironment.sh**, que se utilizan en **AWSIoTArduinoYunInstallAll.sh**. Siempre puedes usar **AWSIoTArduinoYunScp.sh** para subir tus nuevas credenciales a tu placa. Cuando estés en el directorio **AWS-IoT-Arduino-Yun-SDK/**, el comando debería ser algo como esto:

```
./AWSIoTArduinoYunScp.sh <Board IP> <UserName> <Board Password> <File> <Destination>
```

### Instalación en Windows

Antes de proceder con los siguientes pasos, asegúrese de que tiene Putty y WinSCP instalados en su PC. Si prefiere usar otras herramientas para conectarse por SSH a su placa Arduino Yún y transferir archivos, tendrá que ajustar los pasos siguientes según sus herramientas. Putty se puede descargar desde [aquí](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html). WinSCP se puede descargar desde [aquí](http://winscp.net/eng/download.php). Configure la placa.

- Paso 1. Configure la placa Arduino Yún Cloud y conéctela a WiFi. Obtenga su dirección IP y contraseña. Si no sabe cómo hacerlo, siga esto <a href="/es/Seeeduino_Cloud#getting-started" ><span><font size={"3"}>Placas Seeeduino Cloud</font></span></a>.

- Paso 2. Asegúrese de que su PC esté conectado a la misma red (rango de direcciones IP locales).

- Paso 3. Descargue el archivo CA de AWS IoT desde [aquí](https://www.symantec.com/content/en/us/enterprise/verisign/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem). Y guárdelo como root-CA.crt

- Paso 4. Coloque su archivo CA de AWS IoT que guardó antes, la clave privada y el certificado en la carpeta **AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Python-Runtime/certs**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_certs.png)

- Paso 5. Inicie WinSCP y suba la carpeta AWS-IoT-Python-Runtime/ a /root en la placa.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_run_time_file.png)

- Paso 6. Use Putty para conectarse por ssh a OpenWRT en su placa y ejecute los siguientes comandos para instalar las librerías necesarias. Puede tomar de 15 a 20 minutos para que el dispositivo descargue e instale los paquetes requeridos.

```
opkg update
opkg install distribute
opkg install python-openssl
easy_install pip
pip install AWSIoTPythonSDK==1.0.0
```

- Paso 7. Copia y pega la carpeta AWS-IoT-Arduino-Yun-SDK/AWS-IoT-Arduino-Yun-Library en las librerías de Arduino que se instalaron con tu instalación del SDK de Arduino. Para Windows por defecto, debería estar en **Documents/Arduino/libraries**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_copy_AWS_library_file_to_arduino_library.png)

- Paso 8. Reinicia el IDE de Arduino si estaba ejecutándose durante la instalación. Deberías poder ver los ejemplos de AWS IoT en la carpeta Examples de tu IDE.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_load_example.png)

### Conectar Módulo Grove

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_set_up_arduino_yun_on_windows_hardware_connection.png)

Ejecutar ejemplos
-----------------

### Descargar el proyecto de ejemplo

- Paso 1. Por favor descarga el proyecto de ejemplo desde [aquí](https://github.com/Lee-Kevin/10.GroveWithAWSIot/) primero.

- Paso 2. Descomprime los archivos zip descargados en tu computadora y elimina **-master** del nombre del archivo descomprimido.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_open_example_sketch.png)

### Modificar archivo de cabecera

- Paso 1. Abre el archivo **aws_iot_config.h**, y reemplaza el contenido en el cuadro rojo como se muestra en la imagen a continuación por el código de ejemplo basado en tu cuenta que ya guardaste antes.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_replace_header_file.png)

- Paso 2. Haz doble clic en **GroveWithAWSIot.ino**, reemplaza el siguiente código marcado con el archivo de cabecera guardado hace unos minutos y luego haz clic en cargar.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_select_serial_port.png)

- Paso 3. Cuando veas la información a continuación, significa que ya has descargado el código a tu Seeeduino Cloud exitosamente.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_upload_complete.png)

### Ver Resultado

- Paso 1. Abre el monitor serie, puedes ver la información como se muestra a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_view_result_in_serial_monitor.png)

- Paso 2. Luego abre el sitio web de AWS IoT, inicia sesión en tu cuenta. Y haz clic en la cosa que creaste hace unos minutos.

- Paso 3. Haz clic en el botón **Update shadow**. Ahora puedes ver que la temperatura fue cargada al sitio web.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS/img/Seeeduino_Cloud_and_Grove_IoT_Starter_Kit_Powered_by_AWS_run_example_reopen_thing_and_update_shadow.png)

## Recursos

---------

- [Documentación de AWS IoT](http://aws.amazon.com/documentation/iot/)
- <a href="/es/Seeeduino_Cloud" ><span><font size={"3"}>Página wiki de Seeeduino Cloud</font></span></a>
- [SDK de AWS IoT Arduino Yún](https://github.com/aws/aws-iot-device-sdk-arduino-yun)

## Soporte Técnico y Discusión de Productos

   <br />
 ¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
