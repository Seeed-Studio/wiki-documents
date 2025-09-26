---
description: Kit de Inicio Grove para Kit de Desarrollo Azure Sphere MT3620
title: Kit de Inicio Grove para Kit de Desarrollo Azure Sphere MT3620
keywords:
- Azure_Sphere_MT3620_Development_Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit
last_update:
  date: 1/13/2023
  author: jianjing Huang
---


![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit.jpg)

Este producto es un kit de inicio básico para el [Kit de desarrollo Azure Sphere MT3620](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html). El kit integra el módulo más popular y listo para usar de SeeedStudio – [Grove](https://www.seeedstudio.com/grove.html), con el objetivo de ayudar a los desarrolladores a comenzar rápidamente y experimentar las soluciones de Azure Sphere.

Microsoft Azure Sphere es una solución para crear dispositivos altamente seguros, conectados y alimentados por MCU. Azure Sphere reúne lo mejor de la experiencia de Microsoft en la nube, software y silicio, resultando en un enfoque único de seguridad que comienza en el silicio y se extiende a la nube. Juntos, los MCU certificados de Azure Sphere, el SO Azure Sphere y el Servicio de Seguridad Azure Sphere te proporcionan la confianza y el poder para reimaginar tu negocio y crear el futuro.

:::caution
Ten en cuenta que el Kit de desarrollo Azure Sphere MT3620 es requerido pero no está incluido en este Kit de Inicio. Puedes comprarlo [aquí](https://www.seeedstudio.com/s/Azure%20Sphere%20MT3620.html).
:::

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Starter-Kit-for-Azure-Sphere-MT3620-Development-Kit-p-3150.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width="210" height="41"  border="0" /></a></p>

## Características

- Azure Sphere: Seguridad de extremo a extremo para dispositivos IoT
- Entorno de desarrollo Microsoft Visual Studio
- Autenticación en línea y actualizaciones durante la vida útil del dispositivo

## Descripción del Hardware

**Shield Grove MT3620**

Dado que el [SDK de Azure Sphere](http://aka.ms/AzureSphereSDK) aún no ha soportado ADC e I2C en MT3620. Este shield sirve como una interfaz entre el puerto UART del MT3620 y dispositivos I2C externos, como el sensor de temperatura I2C. La función básica del shield es ayudar a conectar con dispositivos I2C externos. Al usar un chip ADC compatible con I2C, el desarrollador también puede leer los datos analógicos desde el puerto analógico.

El [Shield Grove MT3620](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html) incluye 2 chips, AD7992(Analógico a I2C) y SC18IM700(I2C a UART) para habilitar la función ADC e I2C desde el lado del hardware. Así que la señal de los sensores analógicos pasa a través del AD7992 y luego del SC18IM700 al UART de la placa de desarrollo. Los sensores I2C pasan a través del SC18IM700 al UART de la placa de desarrollo también.

El [AD7992](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/AD7992.pdf) es un ADC de aproximación sucesiva de 12 bits, bajo consumo con una interfaz compatible con I2C. Transforma la señal analógica A0, A1 a datos I2C.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/ADC_2_I2C.png)

El [SC18IM700](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/SC18IM700.pdf) está diseñado para servir como una interfaz entre el puerto UART estándar de un microcontrolador o microprocesador y el bus I2C serial; esto permite al microcontrolador o microprocesador comunicarse directamente con otros dispositivos del bus I2C. Transforma las señales SDA/SCL a GPIO26_TXD0 y GPIO28_RXD0.

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/I2C_2_UART.png)

![](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/img/MT3620_Grove_Shield-2018-09-11.png)

<div style={{textAlign: 'center'}}>Descripción del Hardware del Shield Grove MT3620</div>

**Lista de Partes**

<!-- <style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-xldj{border-color:inherit;:left}
.tg .tg-0pky{border-color:inherit;:left;vertical-align:top}
</style> -->

<table class="tg">
  <tr>
    <th class="tg-xldj">Categoría</th>
    <th class="tg-xldj">Módulo</th>
    <th class="tg-0pky">Descripción</th>
  </tr>
  <tr>
    <td class="tg-xldj">Shield</td>
    <td class="tg-xldj">Shield Grove MT3620</td>
    <td class="tg-0pky">Ofrece 1 x UART, 2 x I2C, 1 x Analógico, 4 x GPIO</td>
  </tr>
  <tr>
    <td class="tg-xldj" rowspan="2">Entrada Analógica</td>
    <td class="tg-xldj">Grove - Sensor de Ángulo Rotatorio</td>
    <td class="tg-0pky">Produce un valor analógico, que puede ser leído por ADC.</td>
  </tr>
  <tr>
    <td class="tg-xldj">Grove - Sensor de Luz v1.2</td>
    <td class="tg-0pky">Medición de niveles de luz</td>
  </tr>
  <tr>
    <td class="tg-0pky" rowspan="2">Salida Digital</td>
    <td class="tg-0pky">Grove – Buzzer</td>
    <td class="tg-0pky">Controlado por una señal digital y emite un tono</td>
  </tr>
  <tr>
    <td class="tg-0pky">Grove - Relé</td>
    <td class="tg-0pky">Controlado por una señal digital y conmuta voltajes mucho más altos</td>
  </tr>
  <tr>
    <td class="tg-0pky">E/S Digital</td>
    <td class="tg-0pky">Grove - Botón LED Azul</td>
    <td class="tg-0pky">El botón actúa como entrada, el LED como dispositivo de salida</td>
  </tr>
  <tr>
    <td class="tg-0pky">Sensor</td>
    <td class="tg-0pky">Grove - Sensor Temp&amp;Humi(SHT31)</td>
    <td class="tg-0pky">Recolecta temperatura y puede ser leído vía interfaz I2C</td>
  </tr>
  <tr>
    <td class="tg-0pky">Pantalla</td>
    <td class="tg-0pky">Grove - Pantalla OLED 1.12'' V2</td>
    <td class="tg-0pky">OLED puede mostrar caracteres e imágenes</td>
  </tr>
</table>

## Ideas de Aplicación

- Hogar/Edificios/Instalaciones
- Automatización
- Seguridad
- Gestión de Equipos
- Servicios Públicos
- Seguridad Pública

:::tip
Para entender cómo funciona Azure Sphere en un entorno del mundo real, considera [el escenario de Contoso, Ltd](https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere).
:::

## Primeros Pasos

### Prerrequisitos

**Instalar Azure Sphere**

Si tienes un kit de desarrollo de Azure Sphere que aún no ha sido usado, completa [estos pasos](https://docs.microsoft.com/en-us/azure-sphere/install/overview) primero para ponerte en marcha.

**Biblioteca del Shield Grove MT3620**

Esta es la biblioteca para el Shield Grove MT3620 de Azure Sphere, el shield mejora Azure Sphere añadiendo interfaz I2C y entrada analógica. Aquí está el [tutorial](https://github.com/Seeed-Studio/MT3620_Grove_Shield/blob/master/README.md) sobre cómo usar la [Biblioteca del Shield Grove MT3620](https://github.com/Seeed-Studio/MT3620_Grove_Shield).

### Entrada Analógica

Aquí está el ejemplo de cómo leer señal analógica a través del Shield Base MT3620.

**Conexión de Hardware**

| Kits de desarrollo MT3620 | Shield Grove MT3620 |  Grove - Sensor de Ángulo Rotatorio |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/rotation.jpg)|
|[Consigue Uno Ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/Rotation_shield.jpg)

- Paso 1. Conecta Grove - Rotary Angle Sensor al puerto analógico del Grove Shield MT3620.
- Paso 2. Conecta el shield base MT3620 a la placa de desarrollo Azure Sphere MT3620.
- Paso 3. Conecta el cable USB a la placa de desarrollo Azure Sphere MT3620 y al PC.

**Software**

- Paso 1. Descarga la [Biblioteca del Grove Shield MT3620](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- Paso 2. Abre **Samples/GroveRotaryAngleSensor** bajo el Grove Shield MT3620
- Paso 3. Haz doble clic en **GroveRotaryAngleSensor.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **flecha hacia abajo > Edit... > New Line**, modifica la ruta de **MT3620_Grove_Shield_Library**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de la aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, marca la casilla de **MT3620_Grove_Shield_Library**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, marca la casilla y establece como **1** si usas la **versión Visual Studio Community** y omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, luego gira el sensor y verás la salida como se muestra a continuación.

```
Remote debugging from host 192.168.35.1
Application starting
Angle Value 0.85
Angle Value 0.85
Angle Value 0.94
Angle Value 1.00
Angle Value 0.41
Angle Value 0.31
Angle Value 0.00
Angle Value 0.11
Angle Value 0.39
```

### Salida Digital

Aquí está el ejemplo de cómo escribir señal digital a través del MT3620 Base Shield.

**Conexión de Hardware**

| Kits de desarrollo MT3620 | MT3620 Grove Shield |  Grove - Buzzer |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Buzzer-p-768.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/buzzer_shield.jpg)

- Paso 1. Conecta Grove - Buzzer al puerto GPIO del Grove Shield MT3620.
- Paso 2. Conecta el shield base MT3620 a la placa de desarrollo Azure Sphere MT3620.
- Paso 3. Conecta el cable USB a la placa de desarrollo Azure Sphere MT3620 y al PC.

**Software**

- Paso 1. Descarga la [Biblioteca del Grove Shield MT3620](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- Paso 2. Abre **Samples/Grove_Buzzer** bajo el Grove Shield MT3620
- Paso 3. Haz doble clic en **Grove_Buzzer.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **flecha hacia abajo > Edit... > New Line**, modifica la ruta de **MT3620_Grove_Shield_Library**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de la aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, marca la casilla de **MT3620_Grove_Shield_Library**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, marca la casilla y establece como **1** si usas la **versión Visual Studio Community** y omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, verás la salida como se muestra a continuación.

```
Remote debugging from host 192.168.35.1
Application starting
Relay on
Relay off
Relay on
Relay off
```

### I2C

Aquí está el ejemplo de cómo leer la señal I2C del sensor Grove - Temp&Humi Sensor(SHT31) a través del MT3620 Base Shield.

**Conexión de Hardware**

| Kits de desarrollo MT3620 | MT3620 Grove Shield |  Grove - Temp&Humi Sensor(SHT31) |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/azure_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/mt3620groveshieldb_s.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/SHT3_s.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-p-3052.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/MT3620-Grove-Shield-p-3145.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html)|

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/img/sht31_shield.jpg)

- Paso 1. Conecta Grove - Temp&Humi Sensor(SHT31) al puerto I2C del Grove Shield MT3620.
- Paso 2. Conecta el shield base MT3620 a la placa de desarrollo Azure Sphere MT3620.
- Paso 3. Conecta el cable USB a la placa de desarrollo Azure Sphere MT3620 y al PC.

**Software**

- Paso 1. Descarga la [Biblioteca del Grove Shield MT3620](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- Paso 2. Abre **Samples/Temp_and_Humidity_SHT31** bajo el Grove Shield MT3620
- Paso 3. Haz doble clic en **Temp_and_Humidity_SHT31.sln**
- Paso 4. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **Properties > C/C++ > General > Additional Include Directories**
- Paso 5. Haz clic en los iconos **down arraw > Edit... > New Line**, modifica la ruta de **MT3620_Grove_Shield_Library**, haz clic en **Select Folder** > **OK** > **OK**
- Paso 6. Ve al proyecto de la aplicación, haz clic derecho en **References** > **Add References**, selecciona **Projets**, marca la casilla de **MT3620_Grove_Shield_Library**, luego haz clic en **OK**
- Paso 7. Haz clic derecho en el nombre del proyecto de tu aplicación, selecciona **General** > **Target API Set**, marca la casilla y establece como **1** si usas la **versión Visual Studio Community** y omite este paso si usas la versión Enterprise.
- Paso 8. Haz clic en **Remote GDB Debugger**, verás la salida como se muestra a continuación.

```
Remote debugging from host 192.168.35.1
Application starting
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.7%
Hello world
Temperature: 19.1C
Humidity: 53.7%
Hello world
Temperature: 19.2C
Humidity: 53.8%
```

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle&PDF]** [MT3620 Grove Shield v1.0 Esquemático y PCB](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_for_Azure_Sphere_MT3620_Development_Kit/res/MT3620GroveShield%20v1.0.zip)
- **[Librería]** [Librería MT3620 Grove Shield](https://github.com/Seeed-Studio/MT3620_Grove_Shield)
- **[Producto]** [Kit de Desarrollo Azure Sphere MT3620 Resumen del Producto](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/product_document/Azure%20Sphere%20MT3620%20Development%20Kit%20Product%20Brief-2018-09-10.pdf)
- **[Producto]** [Bienvenido a Azure Sphere](https://docs.microsoft.com/en-us/azure-sphere/)
- **[Hoja de Datos]]** [MediaTek MT3620 Resumen del Producto](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/MediaTek%20MT3620%20Product%20Brief.pdf)
- **[Hoja de Datos]** [DS_FT4232H](https://files.seeedstudio.com/wiki/Azure_Sphere_MT3620_Development_Kit/datasheet/DS_FT4232H.pdf)
- **[Mecánico]** [Placa de Desarrollo Azure Sphere MT3620-Dibujo-2D](https://github.com/SeeedDocument/Azure_Sphere_MT3620_Development_Kit/tree/master/mechanical)
- **[Web FAQ]** [Foro Azure Sphere](https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere)
- **[Web FAQ]** [Problemas Github de Azure Sphere](https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

