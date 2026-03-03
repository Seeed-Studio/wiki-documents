---
description: Bluetooth Shield
title: Bluetooth Shield
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Bluetooth_Shield
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: Bluetooth Shield
category: Discontinued
bzurl:
oldwikiname: Bluetooth_Shield
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Bluetooth-Shield
sku: 113030002
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield.jpg)

El Bluetooth Shield integra un módulo Bluetooth Serial. Puede ser usado fácilmente con Arduino/Seeedstudio para comunicación serial inalámbrica transparente. Puedes elegir dos pines desde Arduino D0 hasta D7 como Puertos Serie por Software para comunicarte con el Bluetooth Shield (D0 y D1 es Puerto Serie por Hardware). El shield también tiene dos conectores Grove (uno es Digital, el otro es Analógico) para que instales módulos Grove.

Modelo:[SLD63030P](https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=19_21)

## Características ##

- Voltaje de Entrada: 3.3V

- Baudrate: 9600, 19200, 38400, 57600, 115200, 230400, 460800

- Compatible con Seeeduino/Arduino

- Hasta 10m de distancia de comunicación en casa sin obstáculos

- Interfaz UART (TTL) con velocidad de baudios programable (firmware SPP instalado)

- Velocidad de baudios por defecto: 38400, Bits de datos: 8, Bit de parada: 1, Paridad: Sin paridad

- PINCODE por defecto:"0000"

- Un conjunto completo de comandos de configuración

- Antena PCB integrada

- Certificado FCC Parte 15

## Función de la interfaz ##

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/BluetoothInterface.jpg)

| Tipo de Pad  |   Descripción |
|---|---|
| PIO1  |   Puerto de instrucción de estado del módulo Bluetooth puede ser leído por el puerto A1 de Arduino: bajo-desconectado, alto-conectado. |
|  BT_RX  |  Entrada de datos UART del módulo Bluetooth.  |
|  BT_TX  |   Salida de datos UART del módulo Bluetooth. |
|   Dos conectores Grove |   Uno es Digital (D8 y D9), el otro es I2C/Analógico (A4 y A5). |

## Demostración 1: Conexión de Dos Bluetooth Shield ##

Esta demostración te mostrará cómo conectar dos Bluetooth shield.

Necesitas dos piezas de [Seeeduino V3.0](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7), un [Grove - Button](https://www.seeedstudio.com/depot/grove-button-p-766.html?cPath=85_50), y un [Grove - LED](https://www.seeedstudio.com/depot/grove-led-p-767.html?cPath=81_35).

Un Bluetooth Shield como Maestro mientras el otro como Esclavo, y hay un Botón conectado al Maestro, un Led conectado al Esclavo.

Cuando se presiona el botón, el led en el Esclavo cambiará.

### Instalación del Hardware ###

Primero, elegimos un Bluetooth Shield como Maestro, y conectamos Grove - Button a D8,D9 de este Bluetooth Shield.

Para el Esclavo, conectamos Grove - Led a su Grove D8,D9. Y D7 como TX, D6 como RX, como sigue:

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_2_connect.jpg)

### Descargar Código y Cargar ###

1. Puedes descargar el código en github, haz clic [aquí](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code), luego extráelo a la carpeta libraries de Arduino.

2. Abre Arduino IDE, abre File -> Examples -> Bluetooth_Shield_Demo_Code -> Master_Button, entonces puedes abrir el código del Maestro

3. Abre Arduino IDE, abre File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_led, entonces puedes abrir el código del Esclavo

4. Haz clic en Upload para cargar el código, si tienes algún problema sobre cómo iniciar Arduino, por favor haz clic [aquí](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/) para obtener ayuda.

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_ide_1.jpg)

### Verificar el Resultado ###

1. Después de terminar de cargar el código a ambos Maestro y Esclavo, reinicia los dos dispositivos al mismo tiempo

2. Puedes ver el led rojo y verde parpadear, indicando que los dispositivos se estaban inicializando y conectando.

3. Después de varios segundos, solo el led verde parpadea, indicando que el Maestro y Esclavo se habían conectado.

4. Ahora puedes presionar el botón, entonces el led cambiará su estado.

**Nota**: Si no se observa el fenómeno anterior, intenta desconectar la alimentación y volver a conectar.

## Demostración 2: Conectar a Teléfono Inteligente ##

Esta demostración te mostrará cómo conectar Bluetooth Shield a un Teléfono Inteligente.

Necesitamos un Seeeduino V3.0, un Grove - Temperature Sensor, y además, un Teléfono Inteligente que tenga función Bluetooth.

A través de una App Bluetooth SPP, enviamos una 't' al Bluetooth Shield, entonces retornará la temperatura.

### Instalación del Hardware ###

Conecta Grove - Temperature Sensor al Grove A4,A5 del Bluetooth Shield.

TX conecta a D7 mientras RX conecta a D6. como sigue:

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Phone.jpg)

### Descargar Código y Cargar ###

1. Puedes descargar el código en github, haz clic [aquí](https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code), luego extráelo a la carpeta libraries de Arduino.

2. Abre Arduino IDE, File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_Temperature, entonces puedes abrir el código

3. Haz clic en Upload para cargar el código, si tienes algún problema sobre cómo iniciar Arduino, por favor haz clic [aquí](https://seeeddoc.github.io/Getting_Started_with_Seeeduino/) para obtener ayuda.

 ![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Demo2.jpg)

### Descargar una App SSP ###

Aquí usamos un Teléfono Android, el mío es un Xiaomi 2A, abre Google Play, busca bluetooth spp, puedes encontrar muchos resultados.

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Find_spp.png)

La mayoría de estas apps son útiles, solo elige una y pruébala.

### Obtener Temperatura ###

Después de instalar una app SPP, intenta conectarla a SeeedBTSlave, el código pin es: "0000"

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_App_1.png)

Cuando la conexión esté bien, envía 't' a SeeedBTSlave, y puedes obtener la temperatura ahora:

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_get_temp.png)

## Proyectos Relacionados ##

Es una pena que no tengamos ninguna demostración sobre Bluetooth Shield en la [Receta](https://www.seeedstudio.com/recipe/) aún.

¡Publica tu increíble proyecto sobre CAN BUS Shield para ganar un Cupón de $100! No dudes en contactarnos: [recipe@seeed.cc](mailto:recipe@seeed.cc)

Aquí presentamos algunos proyectos sobre [Módulo bluetooth de puerto serie](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html).

### Qué es el Módulo Bluetooth de Puerto Serie ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Serial_Port_Bluetooth_Module_.jpg)

Bluetooth de puerto serie, reemplazo directo para conexiones serie cableadas, uso transparente. Puedes usarlo simplemente como un reemplazo de puerto serie para establecer conexión entre MCU y GPS, PC a tu proyecto embebido, etc.

### Demostración del Módulo Bluetooth de Puerto Serie ###

![](https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Control_Multiple_servo_Motor_From_android_app.jpg)

Este es un tutorial completo sobre cómo controlar múltiples servomotores desde una aplicación android a través del Módulo Bluetooth de Puerto Serie.

[Quiero hacerlo](https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html).

### Comparte Tus Increíbles Proyectos con Nosotros ###

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa lo que seas y lo que hayas hecho, hacker, maker, artista o ingeniero.

Mientras comiences a compartir tus trabajos con otros, estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus increíbles proyectos con nosotros en [Recipe](https://www.seeedstudio.com/recipe/), y gana la oportunidad de convertirte en Usuario Principal de Seeed.

- Los Usuarios Principales, son aquellos que muestran alto interés en los productos Seeed y hacen contribuciones significativas en Recipe.

- Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos comentarios valiosos de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y en la mayoría de los casos cuando nuestros Usuarios Principales tienen algunas buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios PCBA así como soporte técnico. Además, una mayor cooperación comercial con los Usuarios Principales es altamente posible.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[EAGLE]**[Esquemático y Diseño en formato Eagle](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip)
- **[PDF]**[BlueTooth Shield SCH](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20SCH.pdf)
- **[PDF]**[BlueTooth Shield PCB](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20PCB.pdf)
- **[Library]**[Biblioteca Bluetooth Shield para Arduino 1.0](https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BluetoothShieldDemoCode_For_Arduino1.0.zip)
- **[Instruction]**[Instrucciones de software Bluetooth](https://seeeddoc.github.io/Bluetooth_Shield/res/BTSoftware_Instruction.pdf)
- **[Datasheet]**[Hoja de datos del módulo Bluetooth](https://seeeddoc.github.io/Bluetooth_Shield/res/Bluetooth_module.pdf)
- **[Connections]** [Configurar conexiones entre dos BluetoothBee paso a paso](https://forum.seeedstudio.com/viewtopic.php?f=4&amp;t=687)

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
