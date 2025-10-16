---
description: MT3620 Mini Dev Board
title: MT3620 Mini Dev Board
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/MT3620_Mini_Dev_Board
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product.png)

MT3620 Mini Dev Board es una versión ligera del anterior [Kit de Desarrollo Azure Sphere MT3620](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) de Seeed. Para una introducción a Azure sphere, consulte este enlace [Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/).

Desarrollamos esta placa para satisfacer las necesidades de desarrolladores que requieren tamaños más pequeños, mayor escalabilidad y costos más bajos. Esta placa de desarrollo está basada en el módulo MT3620, lo que simplifica enormemente la dificultad del diseño de hardware. El [módulo MT3620](https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html) es desarrollado por nuestro socio [AI-Link](http://www.ilinkthings.com/microsoft). Los desarrolladores pueden reutilizar fácilmente este diseño en sus propios proyectos. La placa de desarrollo utiliza dos conectores de pines de fila única para facilitar la conexión en otras placas base o placas de expansión. A diferencia del Kit de Desarrollo Azure Sphere MT3620 con todas las características, esta placa de desarrollo optimiza el diseño reduciendo algunos recursos periféricos de hardware del sistema, y solo proporciona los recursos de hardware necesarios a los desarrolladores. En términos de especificaciones de hardware, solo soportamos Wi-Fi de 2.4G y reducimos I2S y algunos puertos GPIO.

**¿Qué hay de nuevo en el MT3620 Mini Dev Board?**

- Basado en el módulo MT3620 (WF-M620-RSA1)
- Reduce el tamaño de la placa de 50mm*80mm*16mm a 34mm*60mm*19mm
- Mantiene los indicadores LED y botones necesarios
- El factor de forma de la placa es más fácil para uso de complementos

La figura muestra la comparación de tamaños entre la placa de desarrollo con todas las características y la nueva placa de desarrollo mini:

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/compare.png)

El sistema operativo Azure Sphere está preinstalado en el MT3620 y está diseñado para trabajar con el Servicio de Seguridad Azure Sphere para crear una plataforma IoT segura. Juntos, el SO Azure Sphere y el servicio de seguridad proporcionan:

- autenticación de dispositivos basada en certificados para cualquier servicio web
- atestación de software y arranque seguro
- detección de amenazas mediante informes de fallos
- actualizaciones de seguridad continuas
- una solución IoT integral y segura de extremo a extremo
  
El desarrollo de software MT3620 es compatible usando el potente IDE Microsoft Visual Studio: Instale Visual Studio y la extensión Azure Sphere, conecte la placa de desarrollo a una PC por USB, y comience a desarrollar aplicaciones IoT con niveles de seguridad sin precedentes.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

:::caution

1. Política de devoluciones: Este producto solo puede activarse una vez. Seeed no aceptará devoluciones una vez que el paquete haya sido abierto. Consulte Garantía y Devoluciones aquí. Si hay problemas de calidad después de abrir el paquete, póngase en contacto con el Equipo de Soporte de Seeed support@seeed.cc.

2. Licencias de Código Abierto: El software incluido en este producto contiene software con derechos de autor que está licenciado bajo GPL, LGPL u otras licencias de código abierto, listadas en aka.ms/AzureSphereSDK. Puede obtener el código fuente para el software aplicable desde aka.ms/AzureSphereSDK o enviando un correo electrónico a order@seeed.cc.
:::

## Características

- Azure Sphere: Seguridad integral para dispositivos IoT.
- Wi-Fi 802.11 b/g/n.
- Microcontrolador de tres núcleos con RAM y flash integrados.
- Entorno de desarrollo Microsoft Visual Studio.
- Autenticación y actualizaciones en línea durante la vida útil del dispositivo.
- Amplía recursos UART, I2C, SPI, ADC, GPIO en el conector de pines.

## Especificación

**Hardware**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-c3ow{border-color:inherit;:center;vertical-align:top}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <th class="tg-0pky">Descripción</th>
    <th class="tg-0pky">Valor</th>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="2">MCU<br />(usando módulo MT3620)</td>
    <td class="tg-0pky">1 *núcleo ARM Cortex A7 @500MHz , 4MB RAM</td>
  </tr>
  <tr>
<td class="tg-0pky">2* núcleos ARM Cortex M4 @200MHz , 64KB RAM</td>
  </tr>
  <tr>
    <td class="tg-c3ow" rowspan="4">ISU</td>
    <td class="tg-0pky">ISU 0 configurado como SPI0 o UART0 o I2C0, ISU 1 configurado como SPI1 o UART1 o I2C1</td>
  </tr>
  <tr>
    <td class="tg-0pky">- I2C funciona hasta 1MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- SPI funciona hasta 40MHz</td>
  </tr>
  <tr>
    <td class="tg-0pky">- UART funciona hasta 3Mbps</td>
  </tr>
  <tr>
    <td class="tg-0pky">Conectividad</td>
    <td class="tg-0pky">802.11 b/g/n Wi-Fi</td>
  </tr>
  <tr>
    <td class="tg-0pky">ADC</td>
    <td class="tg-0pky">3 *entradas ADC de 12 bits I/O</td>
  </tr>
  <tr>
    <td class="tg-0pky">RTC</td>
<td class="tg-0pky">1* RTC con soporte de batería CR1220 3V</td>
  </tr>
  <tr>
    <td class="tg-0pky">USB</td>
    <td class="tg-0pky">1 *puerto Micro USB para alimentación y depuración, 5V/1A</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="3">LED</td>
<td class="tg-0pky">1* LED ROJO -&gt; Alimentación</td>
  </tr>
  <tr>
    <td class="tg-0lax">1 *LED VERDE -&gt; estado FTDI</td>
  </tr>
  <tr>
<td class="tg-0lax">1* LED VERDE -&gt; controlado por usuario (puede configurarse como estado Wi-Fi u otro uso)</td>
  </tr>
  <tr>
    <td class="tg-0lax">Botón</td>
    <td class="tg-0lax">1*Botón de Reset</td>
  </tr>
  <tr>
    <td class="tg-0pky">Temperatura de Funcionamiento</td>
    <td class="tg-0pky">-40~85°C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Dimensiones</td>
    <td class="tg-0pky">L:34mm*W:60mm*H:19mm<br /></td>
  </tr>
  <tr>
    <td class="tg-0pky">Certificación</td>
    <td class="tg-0pky">CE / FCC / MIC / RoHS<br /></td>
  </tr>
</table>

**Software**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
.tg .tg-0lax{:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <td class="tg-0pky">IDE</td>
    <td class="tg-0pky">Visual Studio</td>
  </tr>
  <tr>
    <td class="tg-0lax">Sistema</td>
    <td class="tg-0lax">Windows10</td>
  </tr>
  <tr>
    <td class="tg-0lax">Lenguaje de Programación</td>
    <td class="tg-0lax">C</td>
  </tr>
</table>

## Soportes

Ahora es posible programar todo lo siguiente si se construye una aplicación en tiempo real.

- I2C
- 2xARM Cortex-M4 con FPU
- ADC
- PWM
- I2S （consulte [M4 con FPU](https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf)）

Si se construye una aplicación de SO de alto nivel, es posible usar ADC y PWM.

## Descripción General del Hardware

**Diagrama de la Placa**

<a href="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg"/></a>

**Mapa de Pines de la Placa**

<a href="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg" target="_blank"><img src="https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg"/></a>

## Aplicaciones

- Hogar/Edificios/Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno del mundo real, considere [el escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Instalar Azure Sphere

Si tiene una MT3620 Mini Dev Board que aún no se ha usado, complete [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primero para comenzar a funcionar.

## Demostraciones de MT3620 Mini Dev Board

Construimos estas demostraciones que combinan MT3620 Mini Dev Board y [el sistema Grove de Seeed](https://wiki.seeedstudio.com/es/Grove_System/).

**Demo#1**: MT3620 Mini Dev Board funciona como un MCU, que se conecta con Grove-Button y adaptador USB a TTL. Luego conecta MT3620 Mini Dev Board y el adaptador USB a TTL a los puertos USB de la PC. Después de descargar el código, presiona Grove-Button e ingresa "Hello World!" desde el adaptador USB a TTL, puedes recibir "Hello World!" desde la ventana de salida de Visual Studio.

**Demo#2**: MT3620 Mini Dev Board funciona como un MCU, que se conecta con Grove-Light Sensor y USB a Grove-Rotary Sensor. Luego conecta MT3620 Mini Dev Board a los puertos USB de la PC. Después de descargar el código, mueves tu mano encima del Grove-Light Sensor o rotas el Grove-Rotary Sensor, puedes ver las salidas analógicas para ambos sensores desde la ventana de salida de Visual Studio.

**Demo#3**: MT3620 Mini Dev Board funciona como un MCU, que se conecta con Grove - OLED Display 1.12". Luego conecta MT3620 Mini Dev Board a los puertos USB de la PC. Después de descargar el código, presiona Grove-Button e ingresa "Hello World!" desde el adaptador USB a TTL, puedes recibir "Hello World!" desde la ventana de salida de Visual Studio.

**MT3620 Grove Breakout**：MT3620 Mini Dev Board soporta SPI, UART, I2C, funciones digitales, pero no soporta la función ADC. Así que el MT3620 Grove Breakout incluye el chip [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf), que es un ADC de aproximación sucesiva de 12 bits, bajo consumo con una interfaz compatible con I2C. Luego se conecta a la interfaz I2C de MT3620 Mini Dev Board.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/adc_i2c.png)

### Demo#1 Digital y UART

**Lista de Partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button |USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

- Paso 1. Conecta Grove-Button a D1 del MT3620 Grove Breakout.
- Paso 2. Conecta el adaptador USB a UART al UART0 del MT3620 Grove Breakout a través del [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html).
- Paso 3. Conecta el MT3620 Grove Breakout al MT3620 Mini Dev Board.
- Paso 4. Conecta el MT3620 Mini Dev Board y el adaptador USB a TTL a los puertos USB de la PC.

:::caution
Por favor asegúrate de que el interruptor de voltaje en el adaptador USB a TTL esté configurado a **5v**. Conectas el RX del adaptador USB a TTL al TX del MT3620 Grove Breakout, el TX del adaptador USB a TTL al RX del MT3620 Grove Breakout y GND también. No conectes el 5V.
:::

**Software**

- Paso 1. Descarga [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre **Samples\UART0** bajo Azure_Sphere_Demo
- Paso 3. Haz doble clic en **UART0.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **down arraw > Edit... > New Line**, modifica la ruta de **UART0**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, haz clic en la casilla de verificación de **UART0**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, haz clic en la casilla de verificación y configura como **1+Beta1902** si usas la **versión Visual Studio Community** y por favor omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**.
- Paso 9. Abre la herramienta de monitor COM y selecciona el puerto serie del adaptador USB a TTL
- Paso 10. Presiona el Grove-Button y envía "Hello World!" desde la herramienta de monitor COM.
- Paso 11. Puedes ver el siguiente mensaje desde la ventana de salida de Visual Studio.

```
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
'.
UART received 12 bytes: 'Hello World!'.
UART received 2 bytes: '
```

### Demo#2 Analógico

**Lista de Partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove-Light Sensor |Grove - Rotary Angle Sensor|
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png)

- Paso 1. Conecta el Sensor de Ángulo Rotatorio Grove al A0 del Breakout Grove MT3620.
- Paso 2. Conecta el Sensor de Luz Grove al A1 del Breakout Grove MT3620.
- Paso 3. Conecta el Breakout Grove MT3620 a la Placa de Desarrollo Mini MT3620.
- Paso 4. Conecta la Placa de Desarrollo Mini MT3620 al puerto USB de la PC.

**Software**

- Paso 1. Descarga [Demo de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre **Samples\AD7991_I2C** bajo Azure_Sphere_Demo
- Paso 3. Haz doble clic en **AD7991_I2C.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **flecha hacia abajo > Edit... > New Line**, modifica la ruta de **AD7991_I2C**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, marca la casilla de **AD7991_I2C**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, marca la casilla y configura como **1+Beta1902** si usas la **versión Visual Studio Community** y omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, mueve tu mano sobre el Sensor de Luz Grove o rota el Sensor de Ángulo Rotatorio Grove, puedes ver las salidas analógicas de ambos sensores desde la ventana de Salida de Visual Studio.  

```

A0: 192 A1: 2646
A0: 162 A1: 2644
A0: 1489 A1: 2647
A0: 621 A1: 2644
A0: 227 A1: 2648
A0: 33 A1: 2644
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2647
A0: 0 A1: 2644
A0: 373 A1: 2643
A0: 885 A1: 2646
A0: 1717 A1: 2647
A0: 2057 A1: 2647
```

### Demo#3 I2C

**Lista de Componentes**

| Placa de Desarrollo Mini MT3620 | Breakout Grove MT3620 |  Pantalla OLED Grove 1.12'' V2 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png)

- Paso 1. Conecta Grove-OLED Display 1.12'' V2 al I2C del MT3620 Grove Breakout.
- Paso 2. Conecta MT3620 Grove Breakout a MT3620 Mini Dev Board.
- Paso 3. Conecta MT3620 Mini Dev Board al puerto USB de la PC.

**Software**

- Paso 1. Descarga [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre **Samples\SeeedOLED_I2C** bajo Azure_Sphere_Demo
- Paso 3. Haz doble clic en **SeeedOLED_I2C.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **down arraw > Edit... > New Line**, modifica la ruta de **SeeedOLED_I2C**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, marca la casilla de verificación de **SeeedOLED_I2C**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, marca la casilla de verificación y configura como **1+Beta1902** si usas la **versión Visual Studio Community** y omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, verás la información mostrada en el oled.

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Proyecto de Control Remoto de Puerta

Esta es la Demostración de Cerradura Segura de Azure Sphere. Construimos esta caja con la nueva Placa de Desarrollo Mini MT3620 y su placa de expansión Grove. El MT3620 funciona como un microcontrolador de dispositivo y proporciona acceso seguro a la nube.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure_Sphere_Demo_Secure_Lock.jpg)

<div align="center">Diagrama de Cerradura Segura<b></b><i></i></div>

**1. Descubramos cómo funciona el hardware:**

En la parte superior de la caja, hay una luz de advertencia, que parpadeará cuando la puerta esté abierta. El MT3620 lee el estado del microinterruptor y sabe si la puerta está abierta o no. La puerta está bloqueada por un interruptor electromagnético. Hay dos relés, ambos son controlados por los GPIOs del MT3620. Un relé controla la fuente de alimentación del electroimán, al abrir el relé, el electroimán se abrirá. El otro relé controla la luz de advertencia.

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg)

<div align="center"><b>Vista Frontal</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg)

<div align="center"><b>Vista Superior</b><i></i></div>

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg)

<div align="center"><b>Vista Lateral</b><i></i></div>

**2. Placa de Desarrollo Mini MT3620**

- Paso 1. Descargar [Demostración de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo).
- Paso 2. Seguir las Guías de Inicio Rápido para Azure Sphere para abrir el proyecto **Azure_Sphere_Demo\Demostrations\RemoteControlDoor\RemoteControlDoor.sln**.
- Paso 3. Abrir el main.c bajo Source Files.
- Paso 4. Modificar wifiSsid y wifiPsk en las líneas 28 y 29.
- Paso 5. Conectar la demostración a Azure IoT.
- Paso 6. Hacer clic en Build -> Rebuild Solution directamente al dispositivo.
- Paso 7. Usar la Herramienta de Depuración Remota para acceder al dispositivo.
- Paso 8. Seguir el video para operar el ejemplo de 3 maneras diferentes.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NgH3Ot9pM1Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Recursos

<!-- - **[Product]** [MT3620 Mini Dev Board Product Brief](https://files.seeedstudio.com/products/102110267/document/MT3620_Mini_Dev_Board_Product_Brief-2019-03-15.pdf)链接有误 -->
- **[Producto]** [Bienvenido a Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Biblioteca]** [Biblioteca de Demostración de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[PDF]** [Esquemático de la Placa de Desarrollo Mini MT3620](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MT3620%20Dev%20Board%20V2.pdf)
- **[Hoja de Datos]** [Resumen del Producto MediaTek MT3620](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[Hoja de Datos]** [Hoja de datos WF-M620 RSC1](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[Web de FAQ]** [Foro de Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[Web de FAQ]** [Problemas de Github de Azure Sphere](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión de Productos


Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
