---
description: Zigbee Networking with XBee Series 2 and Seeed Products
title: Zigbee Networking with XBee Series 2 and Seeed Products
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products
last_update:
  date: 1/13/2023
  author: shuxu hu
---

<!-- 1.  Este tutorial paso a paso está creado para ayudar a los usuarios a aprender a usar módulos XBee ZB con [ Seeeduino](/Seeeduino_V2.2 "Seeeduino V2.2") / Arduino, [XBee® Shield](/XBee_Shield "XBee® Shield"), [UartSBee_V3.1](/UartSBee_V3.1 "UartSBee_V3.1"), [Grove - XBee Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier"), Seeeduino Stalker v2.0. Estos productos facilitan el trabajo con módulos XBee ZB. -->

2.  Los módulos XBee ZB se pueden usar de muchas maneras diferentes. También proporcionan muchos parámetros de configuración. En este tutorial, hemos tratado de mostrar las configuraciones esenciales en pasos simples.
3.  <font color="darkred"> Por favor, lee todo el tutorial al menos una vez, antes de decidir qué configuración usar para tu aplicación. </font>

4.  Este tutorial hace uso de módulos **XBee Series 2** y no usa los módulos antiguos Series 1. Vendemos módulos Series 2 en nuestro Bazaar.

##  Módulos Zigbee y Red

**Zigbee** es un estándar para dispositivos inalámbricos de baja potencia y corto alcance basado en un estándar **IEEE 802** para redes de área personal(**PAN**). Los módulos Zigbee funcionan en la banda ISM(Industrial Científica Médica) sin licencia. Los dispositivos Zigbee son capaces de comunicación punto a punto, punto a multipunto y en malla. Ofrecen soluciones inalámbricas convenientes de baja potencia para sistemas embebidos donde el consumo de energía es un factor crítico. Una red Zigbee consiste en tres tipos diferentes de dispositivos ZigBee: **coordinador**, **enrutador**, **dispositivo final**. Cada red tiene un **PAN ID** de 16 bits. Todos los dispositivos en una red Zigbee tienen asignado un único PAN ID.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Zigbee_Network_Topology.jpg)

###  Tipos de Dispositivos

*   **Coordinador ZigBee (ZC)**: El dispositivo más capaz, el coordinador forma la raíz del árbol de red y puede hacer puente a otras redes. Debe haber un coordinador ZigBee en cada red ya que es el dispositivo que inicia la red originalmente. El coordinador inicia una Red de Área Personal(PAN) seleccionando un canal RF y PAN ID. ZC también permite que enrutadores y dispositivos finales se unan al PAN. Es capaz de almacenar información sobre la red, incluyendo actuar como el Centro de Confianza y repositorio para claves de seguridad.

*   **Enrutador ZigBee (ZR)**: Además de ejecutar una función de aplicación, un enrutador puede actuar como un enrutador intermedio, pasando datos de otros dispositivos. Un enrutador puede comenzar operación solo cuando ha establecido conexión con **ZC**

*   **Dispositivo Final ZigBee (ZED)**: Contiene solo la funcionalidad suficiente para hablar con el nodo padre (ya sea el coordinador o un enrutador); no puede retransmitir datos de otros dispositivos. Esta relación permite que el nodo esté dormido una cantidad significativa de tiempo, proporcionando así una larga vida útil de la batería. Un ZED debe unirse al PAN como un enrutador antes de enviar cualquier dato de sensor. Un ZED requiere la menor cantidad de memoria, y por lo tanto puede ser menos costoso de fabricar que un ZR o ZC.

###  Direccionamiento de Dispositivos

*   Cuando un dispositivo se conecta a una red Zigbee obtiene una **dirección de Red de 16 bits**.

*   Cada dispositivo(nodo) tiene una **dirección de Dispositivo de 64 bits**. En los módulos XBee ZB, esta dirección de 64 bits es un número permanente único asignado por el fabricante. Este es también el número de serie del dispositivo.

Cualquier dato enviado de un dispositivo Zigbee a otro se envía especificando la Dirección de Red de 16 bits y la Dirección de Dispositivo de 64 bits.

##  Obteniendo módulos Zigbee

**Seeedstudio Bazaar** actualmente vende dos tipos de módulos Zigbee de [digi](http://www.digi.com/) :

*   [XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142) y

*   [XBee® Pro Series 2 RF module](https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-rf-modules-znet-25-1-mw-chip-antenna-p-226.html?cPath=139_142).

Los módulos [XBee® RF Modules ZNet 2.5 RF Module](https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142) son hardware **Series 2** que viene con **firmware ZNet 2.5**.

En este tutorial vamos a usar **firmware XBee ZB** en un **Módulo XBee Znet 2.5**. Los módulos **XBee ZNet 2.5 Module** pueden actualizarse al firmware **XBee ZB** siguiendo el procedimiento listado en [Converting a XBee/XBee-PRO ZNet 2.5 Module to a ZB Module](http://www.digi.com/support/kbase/kbaseresultdetl.jsp?id=3025). Este procedimiento también se ilustra en la siguiente sección.

##  Hardware XBee ZB y Distribución de Pines

*   El módulo XBee ZB está disponible con una antena de chip.

[https://www.seeedstudio.com/depot/images/product/xbee2.jpg](https://www.seeedstudio.com/depot/images/product/xbee2.jpg)

*   Los pines del módulo XBee ZB se muestran a continuación.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_PinOut.jpeg)

##  Actualizando firmware XBee con UartSBee_V3.1 o Grove - XBee Carrier

<!-- The XBee modules have to be configured with a 3.3V logic UART. Both [UartSBee_V3.1](/UartSBee_V3.1 "UartSBee_V3.1") and [Grove - XBee Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier") comes with **FT232RL based USB to Serial Port** and a XBee compatible socket. -->

###  Instalando controladores para Puerto USB-a-Serie

<!-- *   If you are using [UartSBee_V3.1](/UartSBee_V3.1 "UartSBee_V3.1") set the power switch to 3.3V before connecting to PC. [Grove - XBee Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier") always works 3.3V logic. -->
<!-- *   Connect the **XBee ZB** to XBee socket of [UartSBee_V3.1](/UartSBee_V3.1 "UartSBee_V3.1") or [Grove - XBee Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier") like this : -->
<table>
<tr>
<th>XBee ZB conectado a UartSBee_V3.1 para configuración</th>
<th>XBee ZB conectado a Grove - XBee Carrier para configuración</th>
</tr>
<tr>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_UartSBee.jpg)</td>
<td>![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_Stem-XBee-Carrier.jpg)</td>
</tr>
</table>

*   Instala el controlador necesario para el chip **FT232RL** siguiendo los pasos a continuación:

####  **Windows**

*   En el sistema operativo Windows, la primera vez que conectes el dispositivo (UartSBee o Grove -XBee Carrier), es posible que se te solicite el controlador.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Detected_Windows.JPG)

Descarga e instala el controlador de **puerto COM virtual** desde el sitio web de FTDI:

[https://www.ftdichip.com/Drivers/VCP.htm](https://www.ftdichip.com/Drivers/VCP.htm)

*   Se abre un asistente para instalar el controlador. Elige "Instalar desde una lista o ubicación específica"

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_1.JPG)

*   Elige la ruta del controlador descargado

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.JPG)

*   Si has descargado un controlador sin firmar, aparece la siguiente ventana. Simplemente haz clic en "Continuar de todos modos"

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.1.JPG)

*   El controlador de **UartSBee** se instala exitosamente. Windows asigna un nombre de puerto **COM** al **FT232RL** como **COM10**, **COM11**, etc... Por favor verifica el nombre exacto en el Administrador de dispositivos. En este caso "**COM16**" está asignado para UartSBee

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_3.JPG)

#####  **GNU/Linux**

Todos los **sistemas operativos GNU/Linux** modernos vienen con controladores FT232RL. Para verificar si UartSBee o Grove -XBee Carrier es detectado, ejecuta el comando **lsusb**. Debería aparecer una salida similar a la siguiente.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Lsub.png)

**GNU/Linux** asigna **/dev/ttyUSB0**, **/dev/ttyUSB1**, etc... como nombre del dispositivo.

###  Usando el Software X-CTU (XCTU) de Digi

**X-CTU** es la **U**tilidad de **C**onfiguración y **P**rueba de **X**Bee. Se utiliza principalmente para configurar **Módulos XBee** de **Digi** y también para actualizar el firmware del MCU integrado. Viene con una **Terminal Serie** para interactuar con el módem XBee usando comandos **AT**. X-CTU es una aplicación de Windows. Sin embargo, se sabe que funciona bajo GNU/Linux usando [Wine ](http://www.winehq.org/).

*   Descarga X-CTU desde la [Página X-CTU de Digi](http://www.digi.com/support/productdetl.jsp?pid=3352&amp;osvid=57&amp;s=316&amp;tp=5&amp;tp2=0)

*   Instala X-CTU.

*   Abre X-CTU --&gt; Pestaña PC Settings.

*   Selecciona Puerto Serie USB (que está conectado a UartSBee / Grove - XBee Carrier).

*   Haz clic en el botón Test / Query

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU1.jpeg)

*   Un cuadro de diálogo muestra el **Tipo de Módem**, **Versión del firmware del Módem** y **Número de Serie**.

*   En este caso, el módem XBee ZNet 2.5 se muestra como **XB24-B**. Este debe actualizarse al firmware **XB24-ZB**.

*   Abre la pestaña Modem Configuration.

*   Haz clic en el botón Download New Versions.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_Update_Firmware.jpeg)

*   Esto abre el siguiente cuadro de diálogo:

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Sources.jpeg)

*   Haz clic en el botón Web. Esto descarga todos los firmwares de dispositivos desde el servidor de digi.

*   Una vez que se descargan los últimos firmwares, se muestra un resumen de actualización. Esto indica que la actualización ocurrió sin ningún problema. Si no obtienes este cuadro de diálogo, repite los pasos anteriores.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Summary.jpeg)

*   Abre la pestaña Modem Configuration.

*   Haz clic en Modem Parameters and Firmware --&gt; botón Read.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZNet2.5_firmware_detected.jpeg)

*   Se detecta el firmware XBee ZNet 2.5 XB24-B y se muestran todos sus parámetros configurados.

*   También muestra el **Function Set** del firmware como **ZIGBEE ROUTER/END DEVICE AT** y la versión como **1220**.

*   El **Function Set** decide qué firmware ya está programado / va a ser programado al Módulo XBee. Los dispositivos Serie 2 pueden usarse en muchos modos diferentes (**ZC o ZR, ZED**). Tenemos que elegir el conjunto de funciones de firmware apropiado.

*   Ahora, actualiza el firmware a **XB24-ZB**. (<font color="redorange">Por favor nota, no estamos usando el firmware **XB24-B**, estamos usando un conjunto de firmware diferente compatible con el Hardware del Módulo XBee ZNet 2.5</font>)

*   Selecciona Modem:XBEE como **XB24-ZB**

*   Selecciona Function Set como **ZIGBEE COORDINATOR AT**.
    *   Nota: **ZIGBEE COORDINATOR AT** es un conjunto de funciones que usaremos en la siguiente sección. Puedes elegir cualquier conjunto de funciones que sea adecuado para tu aplicación.

*   Selecciona la última versión del firmware. Al momento de escribir esta guía, es **208C**

*   Haz clic en el botón Write. Esto escribe permanentemente el firmware al módulo XBee.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZB_Firmware_Upgrade.jpeg)

##  Demo de UART inalámbrico usando módulos XBee ZB y PC

Esta demostración configura dos módulos XBee para conectarse entre sí automáticamente al encenderse y transmitir-recibir datos continuamente. Esta configuración puede usarse como UART inalámbrico para conectar dos PCs o dos MCUs con puertos serie.

<!-- *   Use two [UartSBee_V3.1](/UartSBee_V3.1 "UartSBee_V3.1") or two [Grove - XBee Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier") with two XBee ZB modules. -->

*   Conecte estos módulos al puerto serie de las PCs y asegúrese de que los controladores estén instalados.

*   Abra X-CTU, seleccione los puertos USB-Serie del dispositivo como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_1.png)

*   Programe un módulo con firmware de conjunto de funciones **COORDINATOR AT** y otro módulo con firmware de conjunto de funciones **ROUTER AT**. Siempre use la versión más reciente del firmware. Vea la sección anterior sobre cómo programar firmware.

*   Ahora, abra la pestaña Modem Configuration y configure las direcciones de destino de ambos módulos como sigue:

    *   Configure la dirección de destino alta del COORDINATOR al número de serie alto del ROUTER.

        *   Configure la dirección de destino baja del COORDINATOR al número de serie bajo del ROUTER.

        *   Configure la dirección de destino alta del ROUTER al número de serie alto del COORDINATOR.
    *   Configure la dirección de destino baja del ROUTER al número de serie bajo del COORDINATOR.

        *   Escriba estos parámetros a los módulos.

*   El PAN ID no fue modificado durante la configuración de parámetros. Se dejó en 0, ya que solo hay una red Zigbee en las cercanías. Podría querer cambiar estos PAN IDs (de ambos módulos) a un número de 16 bits.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_2.png)

*   Abra las pestañas Terminal para ambos módulos y haga clic en los botones Show Hex.

*   Escriba un mensaje en la terminal COORDINATOR y será enviado al ROUTER vía inalámbrica. Similarmente, cualquier texto escrito en la terminal ROUTER es enviado a la terminal COORDINATOR.

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_3.png)

##  Demo de UART inalámbrico usando módulos XBee ZB y Arduinos

##  Demo de Redes de Sensores Inalámbricos(WSN) con módulos XBee ZB

<!-- ###  Configuring a standalone sensor nodes using XBee ZB module and [Grove - XBee Carrier](/Grove-XBee_Carrier "Grove - XBee Carrier")

###  Configuring a Zigbee Coordinator using XBee ZB module, Seeeduino and [XBee® Shield](/XBee_Shield "XBee® Shield") -->

<!-- ###  Using Seeeduino as Internet Gateway using XBee ZB module,[Wifi Bee](/Wifi_Bee "Wifi Bee") and [Bees Shield](/Bees_Shield "Bees Shield") -->

##  Referencias

*   Página Wikipedia de Zigbee - [Tipos de dispositivos ](https://en.wikipedia.org/wiki/ZigBee#Device_types) (CC-BY-SA)

##  Proyectos Relacionados

Si quiere hacer algunos proyectos increíbles con XBee, aquí hay algunos proyectos para referencia.

###  Hummingbird

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot.JPG)

<!-- This is an interesting demo made by XBee and [Grove](/Grove_System "Grove System"). -->

Este proyecto usa una malla zigbee y tarjeta GPRS SIM900 para comunicarse con un servidor. El servidor conduce un análisis de los datos y proporciona al usuario información en tiempo real así como pronósticos.

[<font color="#FF0000">**Quiero hacerlo.**</font>](https://www.seeedstudio.com/recipe/265-hummingbird.html)

###  Proyecto de Caldera Solar de Agua Caliente

![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot1.JPG)

<!-- This is an IoT demo made by XBee and [Grove](/Grove_System "Grove System"). -->

Una caldera solar es genial porque te da agua caliente usando energía solar gratuita, pero ¿qué pasa si no hay suficiente sol o alguien ya usó toda el agua caliente? Este proyecto te ayuda a tomar la decisión correcta. Te advierte cuando te quedas sin agua caliente y te permite encender la calefacción eléctrica. ¡También te permite saber cuándo puedes tomar un baño o ducha!

[<font color="#FF0000">**Quiero hacerlo.**</font>](https://www.seeedstudio.com/recipe/168-hot-water-solar-boiler-project.html)

###   Comparte Tus Proyectos Increíbles con Nosotros

Nacido con el espíritu de hacer y compartir, eso es lo que creemos que hace a un maker.

Y solo por esto, la comunidad de código abierto puede ser tan próspera como es hoy.

No importa lo que seas y lo que hayas hecho, hacker, maker, artista e ingenieros,

mientras comiences a compartir tus trabajos con otros,

estás siendo parte de la comunidad de código abierto y estás haciendo tus contribuciones.

Ahora comparte tus proyectos increíbles con nosotros en [Recipe](https://www.seeedstudio.com/recipe/), y gana una oportunidad de convertirte en Usuario Principal de Seeed.

*   Los Usuarios Principales, son aquellos que muestran altos intereses y contribuciones significativas en productos Seeed.
*   Cooperamos con nuestros Usuarios Principales en el desarrollo de nuestro nuevo producto, esto, en otras palabras, los Usuarios Principales tendrán la oportunidad de experimentar cualquier nuevo producto de Seeed antes de su lanzamiento oficial, y a cambio esperamos retroalimentación valiosa de ellos para ayudarnos a mejorar el rendimiento del producto y la experiencia del usuario. Y para la mayoría de casos si nuestros Usuarios Principales tienen buenas ideas para hacer cosas, ofreceremos piezas de hardware, servicios PCBA así como soporte técnico. Además, cooperación comercial adicional con los Usuarios Principales es altamente posible.

<font color="#FF0000">Obtenga más información sobre Usuario Principal por favor envíe un email a: recipe@seeed.cc</font>

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
