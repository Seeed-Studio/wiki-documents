---
description: MT3620 Grove Breakout
title: MT3620 Grove Breakout
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/MT3620_Grove_Breakout
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-front.jpg)

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-back.jpg)

[Azure Sphere MT3620 Development Kit](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html) y [MT3620 Mini Dev Board](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html) están habilitados por la tecnología [Microsoft Azure Sphere](https://azure.microsoft.com/en-us/services/azure-sphere/), MT3620 Grove breakout es una placa de expansión diseñada para la nueva MT3620 Mini Dev Board.
MT3620 Grove breakout permite a los usuarios aplicar rápidamente módulos de sensores -[SeeedStudio Groves](https://www.seeedstudio.com/grove.html) en aplicaciones de prototipado rápido construidas basándose en MT3620 Mini Dev Board.

Dado que [Azure Sphere SDK](http://aka.ms/AzureSphereSDK) aún no ha soportado ADC en MT3620, esta breakout sirve como interfaz entre el puerto I2C de MT3620 y ADC externo, lo que proporciona una forma de leer los datos analógicos desde el puerto analógico. Además del puerto analógico, esta breakout tiene puertos UART, SPI, I2C, GPIO.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- ADC de 12 bits, interfaz serie compatible con I2C
- 8 conectores Grove
  - 2 x UART
  - 2 x I2C
  - 2 x Analógico
  - 2 x Digital (4 GPIO)

## Descripción del Hardware

**Interfaz**

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/103100123_hardware_overview.png)

- **<font face="" size="3" font color="ff0000">①</font> Cabecera de Extensión 1:**
24 pines, consulte el mapa de pines de la placa para la definición detallada de pines.

- **<font face="" size="3" font color="ff0000">②</font> Analógico:**
2 puertos Grove Analógicos, el voltaje de la señal de entrada debe ser menor a 3.3v.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/Analog.png)

- **<font face="" size="3" font color="ff0000">③</font> I2C:**
2 puertos Grove I2C, el puerto I2C comparte el mismo pin con UART1, por lo que solo puede elegir I2C o UART1 a la vez.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C.png)

- **<font face="" size="3" font color="ff0000">④</font> UART:**
2 puertos Grove UART, el puerto I2C comparte el mismo pin que UART1, por lo que solo puede elegir I2C o UART1 a la vez. El puerto SPI0 comparte el mismo pin con UART0, por lo que solo puede elegir SPI0 o UART0 a la vez.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/UART.png)

- **<font face="" size="3" font color="ff0000">⑤</font> Digital:**
4 puertos GPIO digitales, el voltaje de trabajo es 3.3v.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/GPIO.png)

- **<font face="" size="3" font color="ff0000">⑥</font> Cabecera de Extensión 2:**
Es una duplicación de la Cabecera de Extensión 1. Puede soldar cables a la cabecera. Hay 2 pines que no se conectan con la Cabecera de Extensión 1. El Pin1 de J5 está conectado directamente a 3.3v y el Pin6 de J5 no está conectado.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/extention_header_1.png)

- **<font face="" size="3" font color="ff0000">⑦</font> SPI:** El puerto SPI0 comparte el mismo pin con UART0, por lo que solo puede elegir SPI0 o UART0 a la vez.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/SPI.png)

- **<font face="" size="3" font color="ff0000">⑧</font> AD7992BRMZ-1:** MT3620 Mini Dev Board soporta funciones SPI, UART, I2C, Digital, pero no soporta la función ADC. Por lo que MT3620 Grove Breakout incluye el chip [AD7992](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf), que es un ADC de aproximación sucesiva de 12 bits, bajo consumo con una interfaz compatible con I2C. Luego se conecta a la interfaz I2C de MT3620 Mini Dev Board.

![](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C_ADC.png)

- **<font face="" size="3" font color="ff0000">⑨</font> Selección de Dirección I2C:**
Como entrada lógica. Entrada de selección de dirección que selecciona una de tres direcciones I2C para el AD7992. Si está conectado a GND, la dirección I2C es 0x23. Si está conectado a 3.3v, la dirección I2C es 0x24.

**Mapa de Pines de la Placa**

<a href="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png"/></a>

**Dimensiones de la Placa**

L: 57mm A: 52mm H: 10mm

## Aplicaciones

- Hogar/Edificios/Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno del mundo real, considera [el escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Instalar Azure Sphere

Si tienes una MT3620 Mini Dev Board que aún no ha sido utilizada, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primero para comenzar a funcionar.

## Demostraciones de MT3620 Mini Dev Board

Construimos estas demostraciones que combinan MT3620 Mini Dev Board y [el sistema Seeed Grove](https://wiki.seeedstudio.com/es/Grove_System/).

**Demo#1**: MT3620 Mini Dev Board funciona como un MCU, que se conecta con Grove-Button y adaptador USB a TTL. Luego conectas MT3620 Mini Dev Board y el adaptador USB a TTL a los puertos USB de la PC. Después de descargar el código, presiona Grove-Button e ingresa "Hello World!" desde el adaptador USB a TTL, puedes recibir "Hello World!" desde la ventana de salida de Visual Studio.

**Demo#2**: MT3620 Mini Dev Board funciona como un MCU, que se conecta con Grove-Light Sensor y USB a Grove-Rotary Sensor. Luego conectas MT3620 Mini Dev Board a los puertos USB de la PC. Después de descargar el código, mueves tu mano encima del Grove-Light Sensor o rotas el Grove-Rotary Sensor, puedes ver las salidas analógicas para ambos sensores desde la ventana de salida de Visual Studio.

**Demo#3**: MT3620 Mini Dev Board funciona como un MCU, que se conecta con Grove - OLED Display 1.12". Luego conectas MT3620 Mini Dev Board a los puertos USB de la PC. Después de descargar el código, presionas Grove-Button e ingresas "Hello World!" desde el adaptador USB a TTL, puedes recibir "Hello World!" desde la ventana de salida de Visual Studio.

### Demo#1 Digital y UART

**Lista de Partes**

| MT3620 Mini Dev Board | MT3620 Grove Breakout |  Grove - Button |USB To Uart 5V&3V3 |
|--------------|-------------|-----------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Button-p-766.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html)|

**Conexión de Hardware**

![](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png)

:::caution
Por favor, asegúrate de conectar la MT3620 Mini Dev Board en la MT3620 Grove Breakout de la manera correcta. Hay una serigrafía USB en la MT3620 Grove Breakout y asegúrate de que esté en el mismo lado que el puerto USB de la MT3620 Mini Dev Board.
:::

- Paso 1. Conecta Grove-Button a D1 de la MT3620 Grove Breakout.
- Paso 2. Conecta el adaptador USB To Uart a UART0 de la MT3620 Grove Breakout a través del [Grove-Cable](https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html).
- Paso 3. Conecta la MT3620 Grove Breakout a la MT3620 Mini Dev Board.
- Paso 4. Conecta la MT3620 Mini Dev Board y el adaptador USB to TTL a los puertos USB de la PC.

:::caution
Por favor, asegúrate de que el interruptor de voltaje en el adaptador USB to TTL esté configurado a **5v**. Conectas el RX del adaptador USB to ttl al TX de la MT3620 Grove Breakout, el TX del adaptador USB to ttl al RX de la MT3620 Grove Breakout y GND también. No conectes el 5V.
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
- Paso 9. Abre la herramienta de monitor COM y selecciona el puerto serie del adaptador USB to TTL
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

:::caution
Por favor, asegúrate de conectar la MT3620 Mini Dev Board en la MT3620 Grove Breakout de la manera correcta. Hay una serigrafía USB en la MT3620 Grove Breakout y asegúrate de que esté en el mismo lado que el puerto USB de la MT3620 Mini Dev Board.
:::

- Paso 1. Conecta el Grove-Rotary Angle Sensor al A0 de la MT3620 Grove Breakout.
- Paso 2. Conecta el Grove-Light Sensor al A1 de la MT3620 Grove Breakout.
- Paso 3. Conecta la MT3620 Grove Breakout a la MT3620 Mini Dev Board.
- Paso 4. Conecta la MT3620 Mini Dev Board al puerto USB de la PC.

**Software**

- Paso 1. Descarga [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre **Samples\AD7991_I2C** bajo Azure_Sphere_Demo
- Paso 3. Haz doble clic en **AD7991_I2C.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **down arraw > Edit... > New Line**, modifica la ruta de **AD7991_I2C**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, marca la casilla de **AD7991_I2C**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, marca la casilla y configúrala como **1+Beta1902** si usas la **versión Visual Studio Community** y por favor omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, mueve tu mano sobre el Grove-Light Sensor o rota el Grove-Rotary Angle Sensor, puedes ver las salidas analógicas de ambos sensores desde la ventana de salida de Visual Studio.  

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

:::caution
Por favor, asegúrate de conectar la MT3620 Mini Dev Board en la MT3620 Grove Breakout de la manera correcta. Hay una serigrafía USB en la MT3620 Grove Breakout y asegúrate de que esté en el mismo lado que el puerto USB de la MT3620 Mini Dev Board.
:::

- Paso 1. Conecta Grove-OLED Display 1.12'' V2 al I2C de la MT3620 Grove Breakout.
- Paso 2. Conecta la MT3620 Grove Breakout a la MT3620 Mini Dev Board.
- Paso 3. Conecta la MT3620 Mini Dev Board al puerto USB de la PC.

**Software**

- Paso 1. Descarga [Azure Sphere Demo](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- Paso 2. Abre **Samples\SeeedOLED_I2C** bajo Azure_Sphere_Demo
- Paso 3. Haz doble clic en **SeeedOLED_I2C.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **flecha hacia abajo > Edit... > New Line**, modifica la ruta de **SeeedOLED_I2C**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, haz clic en la casilla de verificación de **SeeedOLED_I2C**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, haz clic en la casilla de verificación y configúralo como **1+Beta1902** si usas la **versión Visual Studio Community** y por favor omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, verás la información mostrada en el oled.

```
Remote debugging from host 192.168.35.1
Seeed oled 96*96 demo.
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Producto]** [Bienvenido a Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Biblioteca]** [Biblioteca de Demostración de Azure Sphere](https://github.com/Seeed-Studio/Azure_Sphere_Demo)
- **[Eagle]** [Esquemático del Breakout Grove MT3620](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip)
- **[PDF]** [Esquemático del Breakout Grove MT3620](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.pdf)
- **[Hoja de Datos]** [Hoja de datos WF-M620 RSC1](https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf)
- **[Hoja de Datos]** [Hoja de datos AD7992](https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/AD7992.pdf)

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
