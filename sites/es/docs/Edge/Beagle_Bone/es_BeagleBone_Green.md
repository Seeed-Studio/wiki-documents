---
description: SeeedStudio BeagleBone® Green
title: SeeedStudio BeagleBone® Green
keywords:
  - Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /BeagleBone_Green
sku: 102010027
last_update:
  date: 9/2/2026
  author: jianjing Huang
createdAt: '2023-01-10'
updatedAt: '2026-01-07'
url: https://wiki.seeedstudio.com/es/BeagleBone_Green/
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cover.jpg" /></div>

Seeed Studio BeagleBone® Green es una plataforma de desarrollo de bajo costo, de código abierto y con soporte de la comunidad para desarrolladores y aficionados. Es un esfuerzo conjunto de [BeagleBoard.org](https://beagleboard.org/) y Seeed Studio. Está basada en el diseño clásico de hardware de código abierto de [BeagleBone® Black](https://beagleboard.org/black) y se ha desarrollado en esta versión diferenciada. Seeed Studio BeagleBone® Green incluye dos conectores Grove, lo que facilita la conexión a la gran familia de sensores Grove. El HDMI integrado se ha eliminado para dejar espacio a estos conectores Grove.

Arranca Linux en menos de 10 segundos y comienza el desarrollo en menos de 5 minutos con solo un cable USB.


<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-p-2504.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo en amazon.com </font></span></strong>
    </a>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.amazon.com/dp/B01AIC5AP4" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/amaon.png"  width="300" height="48"  border="0"/></a></p>

## Características

* **Totalmente compatible con BeagleBone® Black**
* **Procesador: AM335x 1GHz ARMR Cortex-A8**
  * 512MB DDR3 RAM
  * 4GB de almacenamiento flash eMMC de 8 bits integrado
  * Acelerador de gráficos 3D
  * Acelerador de coma flotante NEON
  * 2x microcontroladores PRU de 32 bits
* **Conectividad**
  * Cliente USB para alimentación y comunicaciones
  * Host USB
  * Ethernet
  * Encabezados de 2x 46 pines
  * 2x conectores Grove (I2C y UART)
* **Compatibilidad de software**
  * Debian
  * Android
  * Ubuntu
  * Cloud9 IDE en Node.js con biblioteca BoneScript
  * y mucho más

## Especificación

|Item|Value|
|----|------|
|Processor| AM335x 1GHz ARMR Cortex-A8|
|RAM| 512MB DDR3|
|on-board Flash Storage |4GB eMMC|
|CPU Supports |Acelerador de coma flotante NEON y gráficos 3D|
|Micro USB Supports |alimentación y comunicaciones|
|USB |Host 1|
|Grove Connectors |2 (Uno I2C y Uno UART) |
|GPIO |2 x encabezados de 46 pines|
|Ethernet |1|
|Operating Temperature |0 ~ 75 |

## Ideas de aplicación

* Internet de las cosas
* Casa inteligente
* Industrial
* Automatización y control de procesos
* Interfaz hombre-máquina
* Concentrador de sensores
* Robot

Aquí hay algunos proyectos divertidos para tu referencia.

|Centro de hogar|Lámpara retro|Controlar un motor|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project1.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project2.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project3.jpg" /></div>|
|[¡HAZLO AHORA!](https://www.instructables.com/id/Home-Control-Center-Using-BeagleBone-Green-Wireles/)|[¡HAZLO AHORA!](https://www.instructables.com/id/DIY-a-Retro-Wooden-Lamp-with-BBG/)|[¡HAZLO AHORA!](https://www.instructables.com/id/A-BeagleBone-Tutorial-Getting-Started-With-Motor-B/)|

|Caja acrílica Seeed Studio BeagleBone® Green|Control de GPIO|Luz inteligente|
|---------------|-----|--------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project5.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/project6.png" /></div>|
|[¡HAZLO AHORA!](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|[¡HAZLO AHORA!](https://community.seeedstudio.com/How-to-use-the-Grove-UART-port-as-a-GPIO-on-BBG-p-365.html)|[¡HAZLO AHORA!](https://community.seeedstudio.com/Smart-Light-Demo-with-BBG-%26amp%3B-BBG-Start-Kit(HA)-p-366.html)|

## Descripción general del hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/10201002703.jpg" /></div>

* **USB Host** - Host USB
* **Alimentación DC y USB Client** - Alimenta la placa y actúa como cliente
* **LEDs**
  * **D2** está configurado al arrancar para parpadear con un patrón de latido
  * **D3** está configurado al arrancar para encenderse durante los accesos a la tarjeta microSD
  * **D4** está configurado al arrancar para encenderse durante la actividad de la CPU
  * **D5** está configurado al arrancar para encenderse durante los accesos a la eMMC
* **Botón de arranque**
  * Cuando hay una tarjeta SD insertada, el sistema arrancará primero desde la tarjeta SD; si quieres arrancar desde la eMMC, pulsa este botón y luego enciende.
  * Úsalo como un botón normal después del arranque, conectado a **GPIO_72**
* **Interfaz Grove I2C** - Conectada a **I2C2**
* **Interfaz Grove Uart** - Conectada a **UART2**
* **Depuración serie** - Conectada a **UART0**, PIN1~PIN6: GND, NC, NC, RX, TX, NC, ten en cuenta que el pin1 está cerca del USB.

**Mapa de pines**

Cada pin de E/S digital tiene 8 modos diferentes que se pueden seleccionar, incluido GPIO.

**65 posibles E/S digitales**

:::note
    En modo GPIO, cada E/S digital puede generar interrupciones.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_IO.png" /></div>

**PWM y temporizadores**

:::note
Hasta 8 pines de E/S digitales se pueden configurar con moduladores de ancho de pulso (PWM) para producir señales para controlar motores o crear niveles de voltaje pseudoanalógicos, sin ocupar ciclos adicionales de CPU.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_TIMER.png" /></div>

**Entradas analógicas**

:::note
Asegúrate de no introducir más de 1,8V en los pines de entrada analógica. Este es un convertidor analógico-digital de 12 bits con 8 canales, de los cuales 7 están disponibles en los encabezados.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_ANALOG.png" /></div>

**UART**

:::note
Hay un encabezado dedicado para acceder a los pines UART0 y conectar un cable de depuración. Cinco puertos serie adicionales se llevan a los encabezados de expansión, pero uno de ellos solo tiene una dirección llevada a los encabezados.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_UART.png" /></div>

**I2C**

:::note
El primer bus I2C se utiliza para leer las EEPROM en las placas complementarias cape y no puede usarse para otras operaciones de E/S digitales sin interferir con esa función, pero aún puedes usarlo para añadir otros dispositivos I2C en direcciones disponibles. El segundo bus I2C está disponible para que lo configures y uses.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_I2C.png" /></div>

**SPI**

:::note
    Para desplazar datos rápidamente, podrías considerar usar uno de los puertos SPI.
:::

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/PINMAP_SPI.png)

## Dibujo mecánico

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_1.png)

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/BBG_drawing_2.png)

<iframe src="https://3dwarehouse.sketchup.com/embed.html?mid=26887ef4-fe20-4d82-b4dc-25f58774d64f" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" width="800" height="450" allowfullscreen></iframe>

## Primeros pasos

:::note
Este capítulo está escrito bajo Win10. Los pasos son similares para otros sistemas operativos.
:::

**PASO 1. Conecta tu Seeed Studio BeagleBone® Green vía USB**

Usa el cable micro USB proporcionado para conectar tu Seeed Studio BeagleBone® Green a tu ordenador. Esto alimentará la placa y proporcionará una interfaz de desarrollo. Seeed Studio BeagleBone® Green arrancará Linux desde la eMMC integrada de 2GB o 4GB.

Seeed Studio BeagleBone® Green funcionará como una unidad flash proporcionándote una copia local de la documentación y los controladores. Ten en cuenta que esta interfaz no puede utilizarse para reconfigurar la tarjeta microSD con una nueva imagen, pero puede utilizarse para actualizar los parámetros de arranque usando el archivo uEnv.txt.

Verás el LED PWR encendido de forma constante. En 10 segundos, deberías ver los otros LEDs parpadeando en sus configuraciones predeterminadas.

* D2 está configurado al arrancar para parpadear con un patrón de latido
* D3 está configurado al arrancar para encenderse durante los accesos a la tarjeta microSD
* D4 está configurado al arrancar para encenderse durante la actividad de la CPU
* D5 está configurado al arrancar para encenderse durante los accesos a la eMMC

**PASO 2. Instala los controladores**

Instala los controladores para tu sistema operativo para proporcionarte acceso de red sobre USB a tu Beagle. Controladores adicionales te dan acceso serie a tu placa.

|Operating System | USB Drivers | Comments |
|---------------------|---------|------------|
|Windows (64-bit) | [64-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [32-bit installer](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Network](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serial](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Instala ambos conjuntos de controladores.|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|La instalación de controladores no es necesaria, pero podrías encontrar útiles algunas reglas udev.|

:::note
    Para el sistema Windows, ten en cuenta que:

* El aviso de Certificación de Controlador de Windows puede aparecer dos o tres veces. Haz clic en "Ignore", "Install" o "Run"
* Para comprobar si estás ejecutando Windows de 32 o 64 bits consulta [esto](https://support.microsoft.com/kb/827218).
* En sistemas sin la última versión de servicio, es posible que obtengas un error (0xc000007b). En ese caso, por favor [instala](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) y vuelve a intentarlo:
* Es posible que necesites reiniciar Windows.
* Se ha comprobado que estos controladores funcionan hasta Windows 10
:::

:::note
Información adicional y controladores FTDI USB a serie/JTAG están disponibles en [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm).
:::

:::note
Información adicional y controladores USB a Ethernet virtual están disponibles en [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) y [https://joshuawise.com/horndis](https://joshuawise.com/horndis).
:::

**PASO 3. Navega a tu Beagle**

Usando Chrome o Firefox (Internet Explorer NO funcionará), navega al servidor web que se ejecuta en tu placa. Cargará una presentación que te mostrará las capacidades de la placa. Usa las teclas de flecha de tu teclado para navegar por la presentación.

Haz clic en [http://192.168.7.2](http://192.168.7.2) para iniciar tu Seeed Studio BeagleBone® Green.
Las imágenes de software más antiguas requieren que EXPULSES la unidad BeagleBone® para iniciar la red. Con la última imagen de software, ese paso ya no es necesario.

[![Haz clic para ver la imagen más grande](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**PASO 4. Cloud9 IDE**

Para comenzar a editar programas que residen en tu placa, puedes usar Cloud9 IDE haciendo clic

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## Actualizar al software más reciente

Necesitas actualizar la placa al software más reciente para mantener un mejor rendimiento, aquí te mostraremos cómo hacerlo paso a paso.

**PASO 1. Descarga la imagen de software más reciente**

Antes que nada, tienes que descargar la imagen adecuada aquí.

[![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://beagleboard.org/latest-images)

:::note
Debido a necesidades de tamaño, esta descarga puede tardar unos 30 minutos o más.
:::

El archivo que descargues tendrá una extensión **.img.xz**. Esta es una imagen comprimida, sector por sector, de la tarjeta SD.

**PASO 2. Instala la utilidad de compresión y descomprime la imagen**

Descarga e instala [7-zip.](http://www.7-zip.org/download.html)

:::note
    Elige una versión que sea adecuada para tu sistema.
:::

Usa 7-zip para descomprimir el archivo **.img** de la tarjeta SD

**PASO 3. Instala la utilidad de programación de tarjetas SD**

Descarga e instala [Image Writer for Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Asegúrate de descargar la distribución binaria.

**PASO 4. Escribe la imagen en tu tarjeta SD**

Primero necesitas un adaptador SD para conectar tu tarjeta microSD a tu ordenador. Luego usa el software Image Write for Windows para escribir la imagen descomprimida en tu tarjeta SD.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

Haz clic en el botón **Write**, entonces el proceso comenzará.

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

* Es posible que veas una advertencia sobre dañar tu dispositivo. Está bien aceptarla siempre que estés apuntando a tu tarjeta SD para la escritura.
* No deberías tener tu BeagleBone® conectado a tu ordenador en este momento.
* Este proceso puede necesitar hasta 10 minutos.
:::

**PASO 5. Arranca tu placa desde la tarjeta SD**

Inserta la tarjeta SD en tu placa (primero apagada). Entonces la placa arrancará desde la tarjeta SD.

:::note
Si no necesitas escribir la imagen en tu eMMC integrado, no necesitas leer el final de este capítulo. De lo contrario, por favor continúa.
:::

Si deseas escribir la imagen en tu eMMC integrado, necesitas iniciar la placa y modificar un archivo.

En **/boot/uEnv.txt**:

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
Cambia a:

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Entonces verás las 4 luces LED de usuario como se muestra a continuación

![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
Si no ves la traza de luz anterior, por favor pulsa el botón RESET para reiniciar la placa.
:::

Cuando el flasheo se complete, los 4 LED USRx estarán **apagados**. Las últimas imágenes flasher de Debian apagan automáticamente la placa al finalizar. Esto puede tardar hasta **10 minutos**. Apaga tu placa, retira la tarjeta SD y vuelve a aplicar alimentación para completar.

## Grove para Seeed Studio BeagleBone® Green

Grove es un sistema de creación de prototipos modular y estandarizado con conectores. Grove adopta un enfoque de bloques de construcción para ensamblar electrónica. En comparación con el sistema basado en jumpers o soldadura, es más fácil de conectar, experimentar y construir y simplifica el sistema de aprendizaje, pero no hasta el punto de que se vuelva demasiado simplificado. Algunos de los otros sistemas de prototipos que existen bajan el nivel hasta bloques de construcción. Buen material que aprender de esa manera, pero el sistema Grove te permite construir sistemas reales. Requiere algo de aprendizaje y experiencia para conectar las cosas.

A continuación se enumeran los módulos Grove que funcionan bien con Seeed Studio BeagleBone® Green.

|SKU        |Nombre|Interfaz|enlace|
|-----------|-----|-----|----------|
|101020054  |Grove - Acelerómetro Digital de 3 Ejes (+16g)     | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - Acelerómetro Digital de 3 Ejes (+400g)    | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - Brújula Digital de 3 Ejes                 | I2C| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - Giroscopio Digital de 3 Ejes                    | Analog| [link](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - Acelerómetro y Brújula de 6 Ejes v2.0      | I2C| [link](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - Sensor Barométrico (BMP180)              | I2C| [link](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - LED Azul                               | I/O| [link](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - Botón                                 |I/O| [link](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - Botón (P)                             |I/O| [link](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - Zumbador                                 |I/O| [link](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - LED RGB Encadenable                     |I2C| [link](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - Sensor de Luz Digital                 |I2C| [link](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - Sensor de Frecuencia Cardíaca con Pinza para Dedo         |I2C| [link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - Sensor de Frecuencia Cardíaca con Pinza para Dedo con carcasa |I2C|[link](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [link](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - LED Verde |I/O| [link](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - I2C ADC |I2C| [link](https://wiki.seeedstudio.com/es/Grove-I2C_ADC/)|
|103020006 |Grove - Concentrador I2C |I2C| [link](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [link](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [link](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - Interruptor de Distancia IR |I/O| [link](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - Pantalla OLED 0.96'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - Pantalla OLED 1.12'' |I2C| [link](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - LED Rojo |I/O| [link](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - Relé |I/O| [link](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - Servo |I/O| [link](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - Sensor de Sonido |Analog| [link](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - Interruptor (P) |I/O| [link](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - Sensor de Temperatura |Analog| [link](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - Sensor de Temperatura y Humedad Pro |Analog| [link](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Cape para Seeed Studio BeagleBone® Green

Necesitarás alguna placa de expansión cuando empieces un proyecto. Ya hay muchas cape para Seeed Studio BeagleBone® Green, que incluyen pantalla LCD, controlador de motor así como expansión HDMI, etc. A continuación se recomiendan algunas de ellas.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[GET ONE NOW!](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[GET ONE NOW!](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| Pantalla LCD de 5 pulgadas|Pantalla LCD de 7 pulgadas|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[GET ONE NOW!](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[GET ONE NOW!](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[GET ONE NOW!](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## Preguntas frecuentes (FAQ)

**1. ¿Cuál es la diferencia entre Seeed Studio BeagleBone® Green 1 y Seeed Studio BeagleBone® Green 2?**

 Hemos actualizado la eMMC en Seeed Studio Beaglebone® Green en 2016. Por lo tanto, el firmware anterior para Seeed Studio BeagleBone® Green 1 no funciona en Seeed Studio BeagleBone® Green 2, pero el nuevo firmware funciona correctamente tanto en Seeed Studio BeagleBone® Green 1 como en Seeed Studio BeagleBone® Green 2.

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/bbg12.png)

 **2. A veces el puerto de red de Seeed Studio BeagleBone® Green no funciona y debe reiniciarse para reanudar el trabajo. Ocasionalmente sucede esto.**

Por favor, sustituye la fuente de alimentación por una estable e inténtalo de nuevo. Normalmente el adaptador de alimentación USB de un teléfono móvil es más estable que el USB de un ordenador. O puedes retirar el condensador C162.

![](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/Capatictor.png)

:::note
La BeagleBone Green se revisó en 2021, y el condensador C162 mencionado anteriormente ya no está presente en las placas actualizadas. Este FAQ solo se aplica a las versiones de BeagleBone Green lanzadas antes de 2021.
:::

**3. ¿Cuál es el rango de temperatura de funcionamiento de Seeed Studio BeagleBone® Green?**

BeagleBone® Green funciona en el rango de temperatura de 0-75 grados Celsius.

## Referencias

Hay muchas referencias que te ayudarán a obtener más información sobre la placa.

* [Página principal de BeagleBoard](https://beagleboard.org/)
* [Información de Seeed Studio BeagleBone® Green en la página de BeagleBoard](https://beagleboard.org/green)
* [Guía de inicio de BeagleBoard](https://beagleboard.org/getting-started)
* [Solución de problemas](https://beagleboard.org/getting-started#troubleshooting)
* [Documentación de hardware](https://beagleboard.org/getting-started#hardware)
* [Proyectos de BeagleBoard](https://beagleboard.org/project)
* [Certificación CE de Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/CE.zip)
* [Certificación FCC de Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/FCC.zip)

## Visor online de esquemáticos

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[PDF]** [Seeed Studio BeagleBone® Green SRM(v1a)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG_SRM_V1a_20151009.pdf)
* **[PDF]** [Seeed Studio BeagleBone® Green SRM(v3)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG_SRM_V3_20150804.pdf)
* **[PDF]** [Seeed Studio BeagleBone® Green Esquemáticos v1.1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_REV1.1_SCH.pdf)
* **[ZIP]** [Seeed Studio BeagleBone® Green Esquemáticos v1.1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_REV1.1_SCH.zip)
* **[PDF]** [Seeed Studio BeagleBone® Green Esquemáticos v1.2](https://files.seeedstudio.com/products/102010027/Res/BeagleBone_Green_REV1.2_SCH_240816.pdf)
* **[ZIP]** [Seeed Studio BeagleBone® Green Esquemáticos v1.2](https://files.seeedstudio.com/products/102010027/Res/202003277_BeagleBone_Green_REV1.2.zip)
* **[PDF]** [Seeed Studio BeagleBone® Green Esquemáticos v1](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1.pdf)
* **[Zip]** [Seeed Studio BeagleBone® Green Esquemáticos (OrCAD) v1c](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1c.zip)
* **[RAR]** [Seeed Studio BeagleBone® Green Esquemáticos (OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BEAGLEBONE_GREEN_V1_166%28sch%29.rar)
* **[RAR]** [Seeed Studio BeagleBone® Green PCB (OrCAD)](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BeagleBone_Green_v1.166%28board%29.rar)
* **[Zip]** [Hoja de datos AM335X](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
* **[3D]** [Modelo 3D de Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG.zip)
* **[PDF]** [Dibujo mecánico de Seeed Studio BeagleBone® Green](https://files.seeedstudio.com/wiki/BeagleBone_Green/resources/BBG-PCBA.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte para garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
