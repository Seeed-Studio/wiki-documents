---
description: Introducción a SeeedStudio BeagleBone® Green Eco
title: Seeed Studio BeagleBone® Green Eco
keywords:
- Beagle_Bone_Green_Eco
image: https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Seeed-Studio-BeagleBoneR-Green-Eco.webp
slug: /es/getting_started_with_seeedstudio_beaglebone_green_eco
last_update:
  date: 9/18/2025
  author: Atom Yang
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1-102111198-Seeed-Studio-BeagleBoneR-Green-Eco.jpg" /></div>

**El Seeed Studio BeagleBone® Green Eco** es una computadora de placa única de código abierto de grado industrial, co-desarrollada con la Fundación BeagleBoard.org® y alimentada por el robusto **TI AM3358 SoC**. Esta versión "Eco" está diseñada para alta eficiencia, incorporando un chip avanzado de gestión de energía TI (TPS6521403) para asegurar un consumo de energía optimizado. Está bien equipada para aplicaciones exigentes con generosos 16GB de almacenamiento eMMC integrado y un puerto Gigabit Ethernet para conectividad de red de alta velocidad. Para prototipado de hardware sin problemas, integra dos conectores Grove característicos, ofreciendo acceso directo y sin soldadura al extenso ecosistema de sensores y módulos Grove de Seeed.

Arranca Linux en menos de 10 segundos y comienza el desarrollo en menos de 5 minutos con solo un cable USB.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-Eco-p-6540.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

**Característica 1: Núcleo Potente y Procesamiento en Tiempo Real**

- Integra un procesador TI AM3358 1GHz ARM® Cortex-A8, con un coprocesador NEON™ SIMD para procesamiento acelerado. También incluye una Unidad Programable de Tiempo Real de doble núcleo (PRU-ICSS) para control determinístico de baja latencia, crítico para automatización industrial y robótica.

**Característica 2: Gestión de Energía Eco-Amigable**

- Utiliza un PMIC TI TPS6521403 avanzado con características como modo PFM y escalado dinámico de voltaje. Esto optimiza significativamente el consumo de energía, haciéndolo ideal para aplicaciones sensibles a la energía y alimentadas por batería.

**Característica 3: 4X Capacidad de Almacenamiento y 10X Velocidad de Red**

- Avanza con 16GB de almacenamiento eMMC integrado (un aumento de cuatro veces) y mejora la conectividad con un puerto Gigabit Ethernet, ofreciendo hasta 10 veces el ancho de banda de su predecesor para comunicación de red estable y de alta velocidad.

**Característica 4: Conectividad Rica y Moderna**

- Presenta interfaces de alta velocidad mejoradas incluyendo un puerto Gigabit Ethernet y un puerto USB Type-C moderno para energía y datos. Para prototipado rápido, también incluye dos conectores Grove integrados (I2C y UART)Grove - Seeed Studio, permitiendo conexión fácil y sin soldadura al extenso ecosistema de sensores y actuadores de Seeed Studio.

**Característica 5: Listo para Desarrollo**

- Viene precargado con una imagen de software Debian designada por la Fundación BeagleBoard.org®, proporcionando un entorno Linux robusto y familiar con herramientas y bibliotecas bien establecidas para agilizar tu proceso de desarrollo.

## Especificaciones

| Categoría  | Elemento              | Seeed Studio BeagleBone® Green Eco                                                                                     | Seeed Studio BeagleBone® Green                                                                 |
|------------|-----------------------|------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| Procesador | Núcleo                | TI AM3358 1GHz ARM® Cortex-A8                                                                                          | TI AM3358 1GHz ARM® Cortex-A8                                                                 |
|            | Aceleradores          | Unidad de punto flotante NEON y acelerador de gráficos 3D                                                             | Unidad de punto flotante NEON y acelerador de gráficos 3D                                     |
| Memoria    | RAM                   | 512MB DDR3L, 800MHz                                                                                                    | 512MB DDR3L, 800MHz                                                                           |
|            | Almacenamiento Flash  | **16GB eMMC (Kingston EMMC16G-WW28)**                                                                                  | 4GB 8-bit eMMC                                                                                |
|            | EEPROM                | 4KB                                                                                                                    | 4KB                                                                                    |
|            | Almacenamiento Externo| Ranura para tarjeta microSD, soporta hasta 32GB                                                                       | Ranura para tarjeta microSD, soporta hasta 32GB                                               |
| Energía    | Gestión de Energía    | **TI TPS6521403 PMIC**                                                                                                     | TI TPS65217C PMIC                                                                             |
|            | Regulador de Voltaje  | TI TPS62A01DRL (convertidor Buck 3.3V);TI TPS74501PDRV (LDO siempre activo 1.8V);TI TPS2117DRL (Mux de energía)     | TI TL5209DR (Regulador LDO 3.3V)                                                              |
|            | Voltaje de Entrada    | 5V DC (vía USB Type-C)                                                                                                 | 5V DC (vía micro USB)                                                                         |
| Interfaces | USB                   | 1x USB 2.0 Host Type-A;1x USB 2.0 Type-C (energía y comunicación de dispositivo)                                     | 1x USB cliente (energía y comunicaciones);1x USB host                                         |
|            | Red                   | **Gigabit Ethernet (10/100/1000Mbps)**                                                                                 | Ethernet (10/100Mbit)                                                                         |
|            | Cabezales de Expansión| 2x cabezales de 46 pines                                                                                               | 2x cabezales de 46 pines                                                                      |
|            | Grove                 | 1x I2C, 1x UART2                                                                                                       | 1x I2C, 1x UART2                                                                              |
|            | Botones               | 1x botón Reset;1x botón Usuario(Boot)                                                                                  | 1x botón Reset;1x botón Usuario(Boot);1x Botón de Encendido                                   |
|            | Indicadores           | 1x LED de energía, 4x LEDs programables por usuario                                                                    | 4x LEDs (latido, microSD, CPU, eMMC)                                                          |
| Físico     | Dimensiones           | 86.4mm x 53.3mm x 18mm                                                                                                 | 86.4mm x 53.3mm x 18mm                                                                        |
|            | Peso                  | 40g                                                                                                                    | 45g                                                                                           |
|            | Temperatura de Operación | **-40 ~ 85℃**                                                                                                              | 0 ~ 75℃                                                                                       |

## Ideas de Aplicación

- Internet de las Cosas
- Casa Inteligente
- Industrial
- Automatización y Control de Procesos
- Interfaz Humano-Máquina
- Centro de Sensores
- Robot

## Descripción General del Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Hardware-Overview.png" /></div>

**Diagrama de Bloques Funcional del BeagleBone® Green Eco**
BeagleBone® Green Eco está construido alrededor del procesador AM335x ARM Cortex-A8 de Texas Instruments, proporcionando una base robusta para diversas aplicaciones embebidas. A continuación se muestra el diagrama de bloques funcional que ilustra los componentes principales e interconexiones que conforman la arquitectura de hardware de la placa. Este diagrama muestra cómo el SoC AM335x se interfaz con memoria, almacenamiento, periféricos y varias opciones de E/S.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/Functional-Block-Diagram.png" /></div>

**Procesador**
BeagleBone® Green Eco integra el procesador AM335x 1GHz ARM® Cortex-A8 de Texas Instruments que combina procesamiento computacional, aceleración de gráficos y funcionalidad de control en tiempo real dentro de un solo SoC. La arquitectura implementa ARMv7-A con motor NEON™ SIMD y unidad de punto flotante VFPv3 para ejecución eficiente de tareas computacionales complejas, mientras mantiene eficiencia energética para aplicaciones embebidas.
Una característica distintiva es el Subsistema de Unidad Programable de Tiempo Real y Subsistema de Comunicación Industrial (PRU-ICSS), que comprende núcleos RISC de 32 bits duales operando independientemente del procesador ARM principal. Estos PRUs permiten control determinístico en tiempo real con tiempos de respuesta sub-microsegundo e implementación de protocolos de comunicación industrial especializados. El AM335x soporta sistemas operativos de alto nivel incluyendo Linux y sistemas operativos de tiempo real a través del SDK de Procesador de TI y entornos de desarrollo.

- Procesador AM335x 1GHz ARM® Cortex-A8, 15.0mm x 15.0mm, NFBGA (324)
- Coprocesador NEON™ SIMD y unidad de punto flotante VFPv3 para procesamiento acelerado de medios y señales
- Acelerador de Gráficos PowerVR SGX™ compatible con OpenGL ES 2.0
- PRU-ICSS dual de 32 bits para comunicaciones y control industrial en tiempo real
- Soporte para interfaces industriales incluyendo EtherCAT, PROFINET y PROFIBUS

**Memoria y Almacenamiento**
BeagleBone® Green Eco incluye:

- 1x 512MB (4Gb) DDR3L RAM (Kingston D2516ECMDXGJDI-U) con interfaz de 16 bits
- 1x 16GB eMMC almacenamiento flash integrado (Kingston EMMC16G-WW28) con interfaz MMC1 de 8 bits
- 1x 32Kbit EEPROM (FMD FT24C32A-ELRT) conectado vía I2C0
- Ranura para tarjeta MicroSD con interfaz MMC0 de 4 bits para almacenamiento expandible

**Interfaces y Periféricos**
BeagleBone® Green Eco soporta:

- Conectividad Gigabit Ethernet
- 1x puerto USB 2.0 Type-C para alimentación y comunicaciones
- 1x Interfaz Host USB 2.0, Type-A

**Conectores/Headers de Expansión para Soportar Capes Específicas de Aplicación**

- 2x headers de 46 pines
- 1x headers UART0 de 6 pines
- Dos conectores Grove (Uno I2C y Uno UART) para conexión fácil al ecosistema Grove de sensores y actuadores

**Definición de Pines del Header**

Cada pin de E/S digital tiene 8 modos diferentes que pueden seleccionarse, incluyendo GPIO.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/1.png" /></div>

**65 E/S Digitales Posibles**

:::note
    En modo GPIO, cada E/S digital puede producir interrupciones.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/2.png" /></div>

**PWMs y Temporizadores**

:::note
Hasta 8 pines de E/S digitales pueden configurarse con moduladores de ancho de pulso (PWM) para producir señales para controlar motores o crear niveles de voltaje pseudo analógicos, sin ocupar ciclos adicionales de CPU.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/3.png" /></div>

**Entradas Analógicas**

:::note
Asegúrate de no ingresar más de 1.8V a los pines de entrada analógica. Este es un convertidor analógico-digital de 12 bits con 8 canales, 7 de los cuales están disponibles en los headers.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/4.png" /></div>

**UART**

:::note
Hay un header dedicado para acceder a los pines UART0 y conectar un cable de depuración. Cinco puertos serie adicionales se llevan a los headers de expansión, pero uno de ellos solo tiene una dirección llevada a los headers.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/5.png" /></div>

**I2C**

:::note
El primer bus I2C se utiliza para leer EEPROMs en placas adicionales cape y no puede usarse para otras operaciones de E/S digitales sin interferir con esa función, pero aún puedes usarlo para agregar otros dispositivos I2C en direcciones disponibles. El segundo bus I2C está disponible para que lo configures y uses.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/6.png" /></div>

**SPI**

:::note
    Para transferir datos rápidamente, podrías considerar usar uno de los puertos SPI.
:::

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/BeagleBone_Green_Eco/img/7.png" /></div>

## Introducción

:::note
Este capítulo está escrito bajo Win10. Los pasos son similares para otros sistemas operativos.
:::

**PASO1. Conecta tu Seeed Studio BeagleBone® Green vía USB**

Usa el cable micro USB proporcionado para conectar tu Seeed Studio BeagleBone® Green a tu computadora. Esto alimentará la placa y proporcionará una interfaz de desarrollo. Seeed Studio BeagleBone® Green arrancará Linux desde el eMMC integrado de 2GB o 4GB.

Seeed Studio BeagleBone® Green funcionará como una unidad flash proporcionándote una copia local de la documentación y controladores. Ten en cuenta que esta interfaz no puede usarse para reconfigurar la tarjeta microSD con una nueva imagen, pero puede usarse para actualizar los parámetros de arranque usando el archivo uEnv.txt.

Verás el LED PWR encendido de forma constante. Dentro de 10 segundos, deberías ver los otros LEDs parpadeando en sus configuraciones predeterminadas.

- D2 está configurado al arranque para parpadear en un patrón de latido
- D3 está configurado al arranque para encenderse durante accesos a la tarjeta microSD
- D4 está configurado al arranque para encenderse durante actividad de CPU
- D5 está configurado al arranque para encenderse durante accesos al eMMC

**PASO2. Instalar Controladores**

Instala los controladores para tu sistema operativo para darte acceso de red-sobre-USB a tu Beagle. Los controladores adicionales te dan acceso serie a tu placa.

|Sistema Operativo | Controladores USB | Comentarios |
|---------------------|---------|------------|
|Windows (64-bit) | [Instalador de 64 bits](https://beagleboard.org/static/Drivers/Windows/BONE_D64.exe)  | |
|Windows (32-bit) | [Instalador de 32 bits](https://beagleboard.org/static/Drivers/Windows/BONE_DRV.exe)||
|Mac OS X|[Red](https://beagleboard.org/static/Drivers/MacOSX/RNDIS/HoRNDIS.pkg) [Serie](https://beagleboard.org/static/Drivers/MacOSX/FTDI/EnergiaFTDIDrivers2.2.18.pkg) | Instala ambos conjuntos de controladores.|
|Linux|[mkudevrule.sh](https://beagleboard.org/static/Drivers/Linux/FTDI/mkudevrule.sh)|La instalación de controladores no es requerida, pero podrías encontrar útiles algunas reglas udev.|

:::note
    Para sistemas Windows, ten en cuenta que:

- La advertencia de Certificación de Controladores de Windows puede aparecer dos o tres veces. Haz clic en "Ignore", "Install" o "Run"
- Para verificar si estás ejecutando Windows de 32 o 64 bits consulta [esto](https://support.microsoft.com/kb/827218).
- En sistemas sin la última versión de servicio, puedes obtener un error (0xc000007b). En ese caso, por favor [instala](https://www.microsoft.com/en-us/download/confirmation.aspx?id=13523) y reintenta:
- Puede que necesites reiniciar Windows.
- Estos controladores han sido probados para funcionar hasta Windows 10

:::

:::note
Información adicional y controladores FTDI USB a serie/JTAG están disponibles en [https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm).
:::

:::note
Información adicional y controladores USB a Ethernet virtual están disponibles en [https://www.linux-usb.org/gadget/](https://www.linux-usb.org/gadget/) y [https://joshuawise.com/horndis](https://joshuawise.com/horndis).
:::

**PASO3. Navegar a tu Beagle**

Usando Chrome o Firefox (Internet Explorer NO funcionará), navega al servidor web ejecutándose en tu placa. Cargará una presentación mostrándote las capacidades de la placa. Usa las teclas de flecha de tu teclado para navegar la presentación.

Haz clic en [http://192.168.7.2](http://192.168.7.2) para lanzar tu Seeed Studio BeagleBone® Green.
Las imágenes de software más antiguas requieren que EXPULSES la unidad BeagleBone® para iniciar la red. Con la imagen de software más reciente, ese paso ya no es requerido.

[![Haz clic para ver imagen más grande](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/launch.png)

**PASO4. IDE Cloud9**

Para comenzar a editar programas que viven en tu placa, puedes usar el IDE Cloud9 haciendo clic

[![ingresa descripción de imagen aquí](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/cloud9.png)](http://192.168.7.2:3000/ide.html)

## Actualizar al software más reciente

Necesitas actualizar la placa al software más reciente para mantener un mejor rendimiento, aquí te mostraremos cómo hacerlo paso a paso.

**PASO1. Descargar la imagen de software más reciente**

Primero que todo, tienes que descargar la imagen adecuada aquí.

[![ingresa descripción de imagen aquí](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/down_latest_image.png)](https://www.beagleboard.org/distros/beaglebone-black-debian-12-11-2025-08-07-iot-vscode-v6-12-x)

:::note
Debido a necesidades de tamaño, esta descarga puede tomar alrededor de 30 minutos o más.
:::

El archivo que descargues tendrá una extensión **.img.xz**. Esta es una imagen comprimida sector por sector de la tarjeta SD.

**PASO2. Instalar utilidad de compresión y descomprimir la imagen**

Descarga e instala [7-zip.](http://www.7-zip.org/download.html)

:::note
    Elige una versión que sea adecuada para tu sistema.
:::

Usa 7-zip para descomprimir el archivo **.img** de la tarjeta SD

**PASO3. Instalar utilidad de programación de tarjeta SD**

Descarga e instala [Image Writer para Windows](https://sourceforge.net/projects/win32diskimager/files/latest/download). Asegúrate de descargar la distribución binaria.

**PASO4. Escribir la imagen a tu tarjeta SD**

Necesitas un adaptador SD para conectar tu tarjeta microSD a tu computadora primero. Luego usa el software Image Write para Windows para escribir la imagen descomprimida a tu tarjeta SD.

![ingresa descripción de imagen aquí](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image.png)

Haz clic en el botón **Write**, entonces el proceso comienza.

![ingresa descripción de imagen aquí](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/win32_disk_image_process.png)

:::note

- Puedes ver una advertencia sobre dañar tu dispositivo. Está bien aceptarla siempre que estés apuntando a tu tarjeta SD para escribir.
- No deberías tener tu BeagleBone® conectado a tu computadora en este momento.
- Este proceso puede necesitar hasta 10 minutos.

:::

**PASO5. Arrancar tu placa desde la tarjeta SD**

Inserta la tarjeta SD en tu placa (apagada primero). Entonces la placa arrancará desde la tarjeta SD.

:::note
Si no necesitas escribir la imagen a tu eMMC integrado, no necesitas leer el resto de este capítulo. De lo contrario, por favor continúa.
:::

Si deseas escribir la imagen a tu eMMC integrado, necesitas lanzar a la placa y modificar un archivo.

En **/boot/uEnv.txt**:

    ##enable BeagleBone® Black: eMMC Flasher:
    #cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh
Cambiar a:

    ##enable BeagleBone® Black: eMMC Flasher:
    cmdline=init=/opt/scripts/tools/eMMC/init-eMMC-flasher-v3.sh

Entonces encontrarás los 4 LEDs de usuario encendidos como se muestra abajo

![ingresa descripción de imagen aquí](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/flashing.gif)

:::note
Si no encuentras la luz de rastreo superior, por favor presiona el botón RESET para reiniciar la placa.
:::

Cuando el flasheo esté completo, todos los 4 LEDs USRx estarán **apagados**. Las últimas imágenes del flasher de Debian apagan automáticamente la placa al completarse. Esto puede tomar hasta **10 minutos**. Apaga tu placa, retira la tarjeta SD y aplica energía nuevamente para completar el proceso.

## Grove para Seeed Studio BeagleBone® Green

Grove es un sistema de prototipado con conectores modulares y estandarizados. Grove adopta un enfoque de bloques de construcción para ensamblar electrónicos. Comparado con el sistema basado en jumpers o soldadura, es más fácil de conectar, experimentar y construir, y simplifica el sistema de aprendizaje, pero no al punto de volverse simplificado en exceso. Algunos de los otros sistemas de prototipado que existen reducen el nivel a bloques de construcción. Es bueno aprender de esa manera, pero el sistema Grove te permite construir sistemas reales. Requiere algo de aprendizaje y experiencia para conectar las cosas.

A continuación se listan los módulos Grove que funcionan bien con Seeed Studio BeagleBone® Green.

|SKU        |Nombre|Interfaz|enlace|
|-----------|-----|-----|----------|
|101020054  |Grove - Acelerómetro Digital de 3 Ejes(+16g)     | I2C| [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html)|
|101020071  |Grove - Acelerómetro Digital de 3 Ejes(+400g)    | I2C| [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B1400g%29-p-1897.html)|
|101020034  |Grove - Brújula Digital de 3 Ejes                 | I2C| [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Compass-p-759.html)|
|101020050  |Grove - Giroscopio Digital de 3 Ejes                    | Analógico| [enlace](https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html)|
|101020081 |Grove - Acelerómetro y Brújula de 6 Ejes v2.0      | I2C| [enlace](https://www.seeedstudio.com/Grove-6-Axis-Accelerometer&Compass-v2.0-p-2476.html)|
|101020072 |Grove - Sensor Barómetro(BMP180)              | I2C| [enlace](https://www.seeedstudio.com/Grove-Barometer-Sensor-%28BMP180%29-p-1840.html)|
|104030010 |Grove - LED Azul                               | I/O| [enlace](https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html)|
|101020003 |Grove - Botón                                 |I/O| [enlace](https://www.seeedstudio.com/Grove-Button-p-766.html)|
|111020000 |Grove - Botón(P)                             |I/O| [enlace](https://www.seeedstudio.com/Grove-Button%28P%29-p-1243.html)|
|107020000 |Grove - Zumbador                                 |I/O| [enlace](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|
|104030006 |Grove - LED RGB Encadenable                     |I2C| [enlace](https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html)|
|101020030 |Grove - Sensor de Luz Digital                 |I2C| [enlace](https://www.seeedstudio.com/Grove-Digital-Light-Sensor-p-1281.html)|
|103020024 |Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo         |I2C| [enlace](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html)|
|101020082 |Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo con carcasa |I2C|[enlace](https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html)|
|113020003 |Grove - GPS                         |UART| [enlace](https://www.seeedstudio.com/Grove-GPS-p-959.html)|
|104030007 |Grove - LED Verde |I/O| [enlace](https://www.seeedstudio.com/Grove-Green-LED-p-1144.html)|
|103020013 |Grove - ADC I2C |I2C| [enlace](https://wiki.seeedstudio.com/es/Grove-I2C_ADC/)|
|103020006 |Grove - Hub I2C |I2C| [enlace](https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html)|
|101020079 |Grove - IMU 10DOF |I2C| [enlace](https://www.seeedstudio.com/Grove-IMU-10DOF-p-2386.html)|
|101020080 |Grove - IMU 9DOF v2.0 |I2C| [enlace](https://www.seeedstudio.com/Grove-IMU-9DOF-v2.0-p-2400.html)|
|101020040 |Grove - Interruptor de Distancia IR |I/O| [enlace](https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html)|
|104030011 |Grove - Pantalla OLED 0.96'' |I2C| [enlace](https://www.seeedstudio.com/Grove-OLED-Display-1.12%22-p-824.html)|
|104030008 |Grove - Pantalla OLED 1.12'' |I2C| [enlace](https://www.seeedstudio.com/Grove-OLED-Display-0.96%22-p-781.html)|
|104030005 |Grove - LED Rojo |I/O| [enlace](https://www.seeedstudio.com/Grove-Red-LED-p-1142.html)|
|103020005 |Grove - Relé |I/O| [enlace](https://www.seeedstudio.com/Grove-Relay-p-769.html)|
|316010005 |Grove - Servo |I/O| [enlace](https://www.seeedstudio.com/Grove-Servo-p-1241.html)|
|101020023 |Grove - Sensor de Sonido |Analógico| [enlace](https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html)|
|101020004 |Grove - Interruptor(P) |I/O| [enlace](https://www.seeedstudio.com/Grove-Switch%28P%29-p-1252.html)|
|101020015 |Grove - Sensor de Temperatura |Analógico| [enlace](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|
|101020019 |Grove - Sensor de Temperatura y Humedad Pro |Analógico| [enlace](https://www.seeedstudio.com/Grove-Temperature&Humidity-Sensor-Pro-p-838.html)|

## Cape para Seeed Studio BeagleBone® Green

Necesitarás alguna placa de expansión cuando inicies un proyecto. Ya hay muchos capes para Seeed Studio BeagleBone® Green, incluyen pantalla LCD, controlador de motor así como expansión HDMI, etc. A continuación se muestran algunos de ellos recomendados.

|Grove Cape| Motor Bridge Cape|HDMI Cape|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product3.jpg)|
|[¡OBTENER UNO AHORA!](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)|[¡OBTENER UNO AHORA!](https://www.seeedstudio.com/Motor-Bridge-Cape-p-2569.html)|[¡OBTENER UNO AHORA!](https://www.seeedstudio.com/SeeedStudio-BeagleBone-Green-HDMI-Cape-p-2570.html)|

|Grove Cape| LCD de 5 Pulgadas|LCD de 7 Pulgadas|
|------------|----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/BeagleBone_Green/images/product6.jpg)|
|[¡OBTENER UNO AHORA!](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)|[¡OBTENER UNO AHORA!](https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html)|[¡OBTENER UNO AHORA!](https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html)|

## Referencias

Hay muchas referencias para ayudarte a obtener más información sobre la placa.

- [Página Principal de BeagleBoard](https://beagleboard.org/)
- [Primeros Pasos con BeagleBoard](https://beagleboard.org/getting-started)
- [Solución de Problemas](https://beagleboard.org/getting-started#troubleshooting)
- [Documentación de Hardware](https://beagleboard.org/getting-started#hardware)
- [Proyectos de BeagleBoard](https://beagleboard.org/project)
- [Certificación CE de Seeed Studio BeagleBone® Green Eco](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-CE.pdf)
- [Certificación FCC de Seeed Studio BeagleBone® Green Eco](https://files.seeedstudio.com/Seeed_Certificate/documents_certificate/102111198-FCC.pdf)

## Recursos

- **[PDF]** [Hoja de Datos AM335X](https://files.seeedstudio.com/wiki/Bazaar_file/102010027/AM335x.pdf)
- **[PDF]** [Esquemático de Seeed Studio BeagleBone Green Eco](https://files.seeedstudio.com/products/102111198/res/BeagleBone%20Green%20Eco_V1.0_SCH_250814.pdf)
- **[PDF]** [Referencia de Estructura de Seeed Studio BeagleBone Green Eco](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.pdf)
- **[DXF]** [Referencia de Estructura de Seeed Studio BeagleBone Green Eco](https://files.seeedstudio.com/products/102111198/res/BBG_Eco_Structure_Reference_20251219.dxf)


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
