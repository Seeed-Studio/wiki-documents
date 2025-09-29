---
description: LinkIt ONE
title: LinkIt ONE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/LinkIt_ONE
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/500px-Linkit-one-page.jpg)

:::danger
Debido al cierre de MediaTek Labs, todos los enlaces relacionados se han vuelto inválidos. Si necesitas descargar archivos relevantes, por favor búscalos en el siguiente enlace: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

La plataforma de desarrollo LinkIt ONE es una placa de código abierto y alto rendimiento para prototipar dispositivos Wearables e IoT. Está basada en el SoC líder mundial para Wearables, MediaTek Aster (**MT2502**) combinado con chipsets de alto rendimiento Wi-Fi (**MT5931**) y GPS (**MT3332**) para proporcionarte acceso a todas las características de MediaTek LinkIt. También proporciona características de pineado similares a las placas Arduino, facilitando la conexión de varios sensores, periféricos y shields de Arduino.

LinkIt One es una placa de prototipado todo-en-uno para dispositivos IoT/wearables. Integra características GSM, GPRS, Wi-Fi, GPS, Bluetooth en un factor de forma básico de Arduino. LinkIt ONE es un producto co-diseñado por [Seeed Studio](https://www.seeedstudio.com/) y [MediaTek](http://www.mediatek.com/). Reúne la tecnología de ambas partes en hardware abierto y diseños de referencia líderes industriales para dispositivos Wearables e IoT para crear una placa de desarrollo poderosa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2017)

:::note
    La placa LinkIt ONE viene con muchas características y su SDK (Kit de Desarrollo de Software) es bastante completo. Lee este documento completamente una vez antes de usar la placa. Siendo un producto co-diseñado, el soporte técnico de nivel básico para hardware se proporciona en el Foro LinkIt One de Seeedstudio. El soporte técnico avanzado está disponible en [MediaTek LinkIt One Forums](https://labs.mediatek.com/forums/forums/list.page). Estos foros tienen un buen número de FAQs sobre esta placa. Por favor busca soluciones para tus requerimientos/problemas primero antes de publicar preguntas para ahorrar tu tiempo.
:::

## Características

--------------

- Incluye ARM7 EJ-S™, GSM, GPRS, Wi-Fi, Bluetooth BR/EDR/BLE, GPS, códec de audio y conector de tarjeta SD en una sola placa de desarrollo.
- Pineado similar a las placas Arduino, incluyendo E/S Digital, E/S Analógica, PWM, I2C, SPI, UART y fuente de alimentación, compatible con Arduino.
- Proporciona varias interfaces para conectar a la mayoría de sensores, periféricos, Groves y otros widgets.
- Eres lo que usas. Usando LinkIt ONE junto con MediaTek LinkIt SDK (para Arduino) podrás convertir fácilmente tus ideas en prototipos prácticos y hacerlos realidad con el servicio de productización y manufactura ágil de Seeed.

## especificaciones

------------------

|Parámetro   |Valor          |
|:------|:-----------------|
|Chipset| MT2502A (Aster, ARM7 EJ-S (TM) )|
|Velocidad de Reloj| 260MHz|
|Dimensiones| 3.3x2.1 pulgadas|
|Flash| 16MB|
|RAM| 4MB|
|Corriente DC Por Pin E/S| 1mA|
|Pines Analógicos| 3|
|Salida Digital |3.3V|
|Entrada Analógica| 5V|
|UART| Basado en software(**Serial**), también conocido como Puerto Módem USB y Serial por Hardware(**Serial1**, D0&D1)|
|Tarjeta SD| Hasta 32GB(Clase 10)|
|Posicionamiento| GPS(MT3332)|
|GSM| 850/900/1800/1900 MHz|
|GPRS| Clase 12|
|Wi-Fi| 802.11 b/g/n|
|Bluetooth| BR/EDR/BLE(Modo Dual)|

## Ideas de Aplicación
--------------------

* Internet de las Cosas
- Casa Inteligente
- Diseño Portátil
- Industrial
- Centro de Sensores
- Automatización y Transporte

Aquí tienes algunos proyectos para tu referencia. Más proyectos increíbles en Recipe e [Instructables](https://www.instructables.com/howto/linkit+one/).

|Monitor de Me Gusta de Facebook|Alarma de Puerta con Mensajes|Alarma de Cama Inteligente|
|--------------------------|-------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project3.jpg)|
|[¡Hazlo AHORA!](https://www.instructables.com/id/Facebook-Like-Monitor/)|[¡Hazlo AHORA!](https://www.instructables.com/id/LinkIt-One-Texting-Door-Alarm/)|[¡Hazlo AHORA!](https://www.instructables.com/id/Smart-Bed-Alarm-with-LinkIT-ONE/)|

|Tutorial de IoT AWS|Indicador de Instructables|Haz una Carcasa Acrílica|
|--------------------------|-------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project6.jpg)|
|[¡Hazlo AHORA!](https://www.instructables.com/id/An-AWS-IoT-Tutorial-With-LinkIt-ONE/)|[¡Hazlo AHORA!](https://www.instructables.com/id/Make-a-Instructables-Indicator/)|[¡Hazlo AHORA!](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|

## Descripción General del Hardware

-------------------
![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/1000px-LinkItONE_RESOURCE.png)

### Interruptores de Configuración

Hay 3 interruptores deslizantes en LinkIt ONE que se utilizan para configurar la función/modo de funcionamiento:

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/300px-LinkIt_ONE_Wiki_Button.jpg)

|Interruptor No.| Funcionalidad| Posición 1 - Funcionalidad| Posición 2 - Funcionalidad|
|:------|:-----------------|:-----------------|:-----------------|
|1| Modo de Programa| **MS**： En esta posición, cuando se conecta a la PC, la placa LinkIt One se mostrará como una unidad USB de 10MB. El programa no se ejecutará en este modo. Cualquier archivo que se copie a esta unidad puede ser leído a través del código.| UART：Esta posición se utiliza para configurar la placa en modo de programa. El firmware puede ser cargado en este modo.|
|2| Alimentación| **BAT**： Placa alimentada por batería de iones de litio. Para cargar la batería, configure el interruptor en esta posición y conecte la placa a la PC.| **USB**：Placa alimentada por puerto USB. Configure el interruptor en esta posición cuando no haya batería conectada para programar la placa.|
|3| SD/SPI| **SPI**：Esta posición permite el acceso a los pines SPI externos (D10 - D13) |**SD**：Esta posición permite al código acceder a la tarjeta SD. Este modo también deshabilita el acceso a los pines SPI (D10-D13).|

:::note
    Ten cuidado al manejar el conector USB micro tipo-B, o podrías romper el conector.
:::

## Primeros pasos

### Resumen del procedimiento

|No.| Paso |Leer más|
|:------|:-----------------|:-----------------|
|1| Instalar Arduino IDE 1.5.7 Beta (versión Windows o MAC OS X)| [aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#installing-arduino-ide)
|2|  [Registrarse en MediaTek Labs](https://labs.mediatek.com/dpRegister/create). | |
|3| Descargar [Guía del desarrollador de Linkit](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) y leer. ||
|4| Instalar [LinkIt SDK](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) para Arduino IDE (Windows o MAC OS X).| [aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#installing-mediatek-linkit-one-sdk)|
|5| Instalar controladores de LinkIt ONE.| [aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#installing-drivers)|
|6| Actualizar la versión del firmware integrado.| [aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#updating-firmware)|
|7| Abrir Arduino IDE, seleccionar la placa LinkIt ONE y comenzar a programar.| [aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#uploading-code-blinky)||
|8| Conectar las antenas GSM, GPS y WiFi/BT a la placa LinkIt One| [aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#connecting-antennae)|
|9 |Insertar SIM y tarjeta Micro SD|[aquí](https://wiki.seeedstudio.com/es/LinkIt_ONE/#inserting-sim-card-and-sd-card)|
|10 |¡Explorar ejemplos y feliz creación!|

### Instalación de Arduino IDE

[Descargar el último Arduino IDE](https://www.arduino.cc/en/Main/Software) .Para temas más avanzados, seguir las [instrucciones](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) de MediaTekTM.

### Instalación del SDK de Mediatek LinkIt ONE

- Descargar [LinkIt SDK para Arduino](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp). Al momento de escribir esta guía, se utilizó el SDK de Windows **v1.1.11** (Beta). Leer la guía en video para plataformas Windows OS y MAC OS X  [aquí](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/get-started/index.gsp)
- Extraer los archivos descargados a la carpeta de Arduino IDE.
- Hacer doble clic en el archivo .EXE e instalar.
- Con la instalación del SDK de LinkIt ONE, Arduino IDE funciona como un IDE de LinkIt ONE.

### Instalación de controladores

- Deshabilitar **Driver Signature Enforcement** si estás usando Windows 8/8.1 OS. Leer  [instrucciones](https://wiki.seeedstudio.com/es/Driver_for_Seeeduino/#installing-drivers-for-the-seeeduino-with-window8)

- Poner el interruptor deslizante MS/UART en posición UART y conectar LinkIt ONE a la PC.
- Abrir el Administrador de dispositivos, se mostrarán los siguientes puertos COM.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp1.jpg)

- Instalar el controlador desde la carpeta ..\LinkIt_ONE_IDE\drivers\mtk.
- Después de instalar los controladores, el Administrador de dispositivos debería mostrar los siguientes dos puertos:

   **MTK USB Debug Port** usado para cargar código.

  **MTK USB Modem Port** usado para imprimir mensajes, como Serial.println()

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp2.jpg)  

:::note
    Aún no hay un controlador oficial para Windows 10. Los usuarios de Windows 10 pueden seleccionar manualmente los archivos del controlador de Windows 7 desde **\LinkIt_ONE_IDE\drivers\mtk** desde el **Administrador de dispositivos**. Se sabe que esto funciona en algunas PCs.
:::

### Actualización del firmware

El firmware de la placa LinkIt ONE necesita actualizarse de vez en cuando. El último SDK de LinkIt ONE viene con una versión de firmware.

- Antes de comenzar la actualización del firmware, asegúrate de que los interruptores deslizantes estén en la posición correcta ( **MS/UART** debe estar en posición **MS**. **USB/BAT** en posición **USB**):

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONEUpdateFirmware2.jpg)  

- Ejecutar la aplicación FirmwareUpdater.exe desde la carpeta ..**\LinkIt_ONE_IDE\hardware\tools\mtk**.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware.jpg)  

- Hacer clic en el botón y luego conectar LinkIt ONE a la PC. Esperar 1 minuto para que la actualización se complete exitosamente.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware_ok.jpg)  

### Carga de código (Blinky)

- Los interruptores deslizantes deben configurarse para la carga de firmware (es decir, poner MS/UART en posición UART e interruptor de alimentación en posición USB).

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp3.jpg)

- Abrir **File** -> **Examples** -> **Basics** -> **Blink** en el IDE de LinkIt ONE.
- Seleccionar el número de puerto COM correspondiente al **MTK USB Debug port** en **Tools** -> **Port**.
- Seleccionar la placa haciendo clic en **Tools > Board > LinkIt One**

Si no puedes encontrar el LinkIt One, por favor revisa [Cómo agregar placas Seeed a Arduino IDE](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/)

- Compilar y cargar el código.
- El LED marcado **L** debería parpadear.

### Conexión de antenas

Hay tres antenas proporcionadas con LinkIt ONE. Se usan para:

- GSM/GPRS
- Wi-Fi/BT
- GPS

Conectar la antena como se muestra en la siguiente imagen.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Linkit_one_antenna.jpg)

:::note
    - Al tirar de la antena de la placa, hazlo con cuidado. Por favor no uses fuerza bruta.
    - Trata de usar la fuerza perpendicular a la dirección de la placa, de lo contrario podrías dañar la almohadilla de la antena.
:::

### Inserción de tarjeta SIM y tarjeta SD

LinkIt ONE acepta tarjeta SIM de tamaño estándar y tarjeta Micro SD. Insertarlas según la siguiente imagen:

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONE_SIM_SDCard_Insert.jpg)

### Exploración de ejemplos del SDK de LinkIt ONE

El SDK de LinkIt ONE viene con muchos ejemplos / código de muestra para usar periféricos como GSM, GPRS, WiFi, BT, Audio, GPS, etc. Explorarlos primero y leer sobre la documentación de la API. La documentación de la API está disponible en [Guía del usuario](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) y [sitio de referencias de API](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/api_references/Core_Digital.gsp)

## Groves y Shields Compatibles para LinkIt ONE

- Fabricamos cientos de Groves y Shields, incluyendo sensores, actuadores, pantallas y otros módulos.
- Puedes implementar tus ideas con esos Groves y Shields fácilmente.
- Pero, LinkIt ONE no es compatible con todos ellos.
- Preparamos una lista de Groves y Shields compatibles:

[![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Compatible_Groves_and_Shields_for_LinkIt_ONE.png)](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/LinkIt_ONE_Comparability_Test.xlsx)

## Tutorial del Kit Básico Sidekick para LinkIt ONE

![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/350px-LinkitONESidebox.jpg)

El Kit Básico Sidekick para LinkIt ONE está diseñado para ser usado con tu placa LinkIt ONE. Este kit te ayudará a familiarizarte rápidamente con la plataforma de LinkIt. Incluye muchos de los accesorios más populares para proyectos DIY: como Protoboard, cables de puente, LEDs de colores, resistencias, zumbador, etc. Todo esto viene en una caja práctica, que es fácil de transportar y minimiza el desorden. El kit incluye una guía completa que te familiarizará con una amplia gama de componentes electrónicos mientras creas circuitos pequeños, simples y fáciles de ensamblar. Hay 10 cursos diferentes delineados que ofrecerán la mejor manera para que los principiantes se familiaricen con LinkIt ONE.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2027)

<!-- - [The Basics](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-The_Basics/)
- [Hello World](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Hello_World/)
- [Push Button](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Push_Button/)
- [Marquee](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Marquee/)
- [Colorful World](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Colorful_World/)
- [Analog Interface](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Analog_Interface/)
- [Mini Servo](https://wiki.seeedstudio.com/es/LinkIt-ONE-Tutorial---Mini-Servo/)
- [Light Sensor](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Light-Sensor/)
- [SMS Control the LED](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-SMS_control_the_LED/)
- [Get Temperature with Webpage](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/)
- [Github Repo for Sidekick Basic Kit for LinkIt ONE](https://wiki.seeedstudio.com/es/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/) -->

## Preguntas Frecuentes

**P1: ¿Puedo acceder a la red 3G o 4G con LinkIt ONE?**

R1: No, pero puedes usar la red GPRS.

**P2: No se imprime nada en el monitor serie después de cargar exitosamente la demo GSM.**

R2: Por favor sigue los siguientes pasos.

- Elige el puerto USB del módem para imprimir.
- Elige la velocidad de baudios correcta.
- Usa otra demo para probar.
- Actualiza el firmware y luego inténtalo de nuevo.

**P3: La función GPRS no funciona. Probé el sketch "LGPRS" sin éxito.**

R3: Por favor sigue los siguientes pasos.

- Por favor asegúrate de que tu tarjeta GPRS no esté bloqueada.
- ¿Puedes acceder a la red GPRS con esta tarjeta en tu teléfono?
- ¿Funciona el SMS?

**P4: ¿Por qué no puedo cargar el sketch "Blink" a LinkIt ONE? ¿Está defectuoso?**

R4: Por favor sigue los siguientes pasos.

- Verifica si los dos interruptores están en el lado derecho (Uart & USB)
- Elige el puerto COM correcto (MTK USB DEBUG PORT)
- Actualiza el firmware e inténtalo de nuevo
- Prueba en otra PC
- Prueba otro cable USB

**P5: ¿LinkIt ONE soporta grabación?**

R5: Sí, el conector de audio puede ser la interfaz de entrada para grabación. Su ADC ha sido integrado dentro del MT2502A.

**P6: ¿El módulo WiFi integrado de LinkIt One soporta modo Monitor?**

R6: Por favor consulta la referencia de [API WiFi](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html) de LinkIt One. Hay soporte para RSSI para redes conectadas. No hay modo monitor disponible para redes WiFi no conectadas.

**P7: ¿Puedo aplicar 5v a través del conector de batería en el LinkIt ONE?**

R7: Lo siento, no puedes usar una batería de 5V. La placa Linkit ONE viene con una batería recargable de iones de litio de 3.7V. Se recomienda usar la batería proporcionada con ella.

**P8: ¿Dónde puedo encontrar información sobre conectar LinkIt ONE a la web usando GPRS?**

R8: El IDE de LinkitONE viene con ejemplos para usar GPRS para conectar a la web. Solo instala la última versión del IDE y revisa los ejemplos. Aquí está la [API GPRS](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html).

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**Archivos de Esquemático / Diseño:**

- [Archivo Eagle LinkIt ONE V1.0](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/202000437_PCBA%20Linkit%20ONE_PDF.zip)
- [Esquemático LinkIt ONE V1.0 en PDF](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip)

**Software:**

- [MediaTek_LinkIt_SDK_for_Ardunio](https://labs.mediatek.com/en/platform/linkit-one.html)

**Hojas de Datos y Guías de Usuario:**

- [LinkIt_ONE_Hardware_Reference_Design_v1_0](https://labs.mediatek.com/site/znch/access_denied/access_denied.gsp)
- [Diagrama de Pines LinkIt ONE_v1.0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/LinkIt_ONE_Pinout_Diagram_v1_0.pdf)
- [Guía de Desarrolladores MediaTek_LinkIt_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_LinkIt_ONE_Developers_Guide_v1_3.pdf)
- [Hoja de Datos SOC MediaTek_MT2502A_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT2502A_SOC_Data_Sheet_v1_0.pdf)
- [Hoja de Datos Wi-Fi MediaTek_MT5931_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0.pdf)
- [Hoja de Datos GPS MediaTek_MT3332_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT3332_GPS_Data_Sheet_v1_0.pdf)

**Obtener Ayuda**

- [Foros MediaTek LinkIt ONE](https://labs.mediatek.com/forums/forums/list.page)

**Más**

- [Ver También: Kit Base Sidekick para LinkIt ONE](https://www.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
