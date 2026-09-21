---
description: Sistema de alarma de monitoreo de humedad del suelo
title: Sistema de alarma de monitoreo de humedad del suelo
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1111-Quick-Start-Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/es/K1111-Quick-Start-Guide/
---
# Sistema de alarma de monitoreo de humedad del suelo

En este wiki, mostraremos cómo utilizar el Wio Terminal para enlazar Grove - Wio-E5 y Grove - Soil Moisture Sensor que vienen en el kit, conectándolos a las plataformas Azure IoT Central, para construir un monitor de macetas de jardín en tiempo real y un recordatorio de riego, para echar un vistazo al Internet de las Cosas.

## Actualizable a sensores industriales

Con el [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración por Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte desde la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>Sensor industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y humedad del aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y humedad del aire &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y temp. del suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y temp. del suelo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody></table>

## Requisitos previos

Antes de empezar, debemos cumplir los siguientes requisitos previos:

### Materiales necesarios

<table align="center">
  <tbody>
    <tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Grove Soil Moisture Sensor</td>
    </tr>
  </tbody>
</table>

**Software**

<div>
  - <a href="https://www.arduino.cc/" target="_blank"><span>Arduino</span></a>
</div>

Cargaremos la programación al Wio Terminal a través de Arduino. Si es la primera vez que usas Arduino con Wio Terminal, te recomendamos encarecidamente que consultes
  <a href="https://wiki.seeedstudio.com/es/Preliminary-Preparation/" target="_blank"><span>Primeros pasos con Wio Terminal</span></a>.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**Otros**

- Maceta

En esta demostración de inicio rápido, estamos utilizando un sensor de humedad del suelo. Por lo tanto, una maceta con suficiente profundidad de tierra será lo mejor.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>



### Registro de Azure IoT para notificaciones

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span> </a>
 es un servicio administrado alojado en la nube que actúa como un concentrador central de mensajes para la comunicación entre una aplicación IoT y sus dispositivos conectados.



<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## Introducción al monitor de humedad del suelo

En esta demostración rápida solo necesitamos una conexión LoRa® sencilla con Grove - Soil Moisture Sensor, con el propósito de monitorizar automáticamente la humedad del suelo y generar alertas.

### Puesta en marcha del equipo

- **Paso 1**. Usa el cable Grove para conectar todo, colocando el Grove - Soil Moisture Sensor a la **derecha** del Wio Terminal y el Grove - Wio-E5 a la **izquierda**.

:::note
La posición en la que se encuentra el Grove - Wio-E5 marcará una diferencia en el código cargado.
:::

- **Paso 2**. Conecta un PC y el Wio Terminal con un cable Type-C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>



### Integrar la plataforma Azure IoT

Podemos integrar otra plataforma, **Azure IoT**, para presentar y gestionar nuestros datos, e incluso realizar algunas acciones.

- **Paso 1**. Abre primero la página de la plataforma, haz clic en "Integrations" en la columna izquierda de la página y selecciona "Azure IoT Central".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **Paso 2**. Crea una nueva aplicación en <a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a>
. Y luego integra Azure IoT Central en la plataforma rellenando la siguiente información requerida:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **Paso 3**. Haz clic en "Flows" en la columna izquierda de nuestra página, arrastra el bloque de Azure IoT Central y enlázalo después de la función personalizada; el orden debería ser como:

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **Paso 4**. Ve a la página "Azure IoT Central" y selecciona "Devices" en la parte izquierda. Podemos ver que aparece un dispositivo nombrado con algunos números aleatorios.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **Paso 5**. Selecciona el dispositivo y revisa la información de "Raw data" como se muestra en la figura de abajo. La información contiene todos los datos, incluidos los datos decodificados:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

Tenemos nuestros datos continuos mostrándose, pero ¿es posible mostrarlos en un gráfico y quizá realizar algunas acciones con los datos?

### Función adicional en Azure IoT Central

Podemos gestionar todos los datos desde la plataforma y elegir los que nos interesan para crear una alerta automática por correo electrónico basada en ellos.

- **Paso 1**. Haz clic en "Unformated data" en la página "Devices" y crea una plantilla de dispositivo automática.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **Paso 2**. Ve a "Device template" y podemos ver que la plantilla incluye y hace que los datos del mismo tipo se almacenen por separado en cada bloque:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **Paso 3**. Selecciona "Overview" y podemos ver que se han creado automáticamente algunos gráficos que muestran el valor de los datos.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

Cambia los datos de humedad del suelo que queremos mostrar y renombra el gráfico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

Recuerda hacer clic en **"Save"** y luego en **"Pubilsh"** para guardar la plantilla después de que terminemos:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **Paso 4**. Ve a "Rules" en la parte izquierda y crea una nueva.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **Paso 5**. Rellena la información siguiente para crear una alerta automática por correo electrónico:

La plantilla de dispositivo (normalmente la predeterminada):

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

Configura el tipo de datos y el valor que queremos:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

Rellena el correo electrónico que está registrado en Azure IoT Central y la nota que queremos enviar:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**Resultado**

- Vuelve a "Devices" en la parte izquierda y selecciona el dispositivo; podemos ver que los datos se han mostrado en un gráfico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- Mientras tanto, si el valor que configuramos ha alcanzado el umbral, se enviarán de forma continua al correo electrónico los mensajes que configuramos antes.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

El contenido del correo electrónico es como:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

¡Recuerda regar la maceta!

¡Gracias!

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Actualizable a sensores industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de ampliar tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración por Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte desde la APP hacen que el [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) sea la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de la luz, CO2, EC y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Declaración

- La marca LoRa® es una marca comercial de Semtech Corporation o sus filiales.
- LoRaWAN® es una marca utilizada bajo licencia de la LoRa Alliance®.
