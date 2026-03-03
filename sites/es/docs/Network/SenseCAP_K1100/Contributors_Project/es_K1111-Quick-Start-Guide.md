---
description: Sistema de alarma de monitoreo de humedad del suelo
title: Sistema de alarma de monitoreo de humedad del suelo
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/K1111-Quick-Start-Guide
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Sistema de alarma de monitoreo de humedad del suelo

En esta wiki, te mostraremos cómo utilizar el Wio Terminal para vincular Grove - Wio-E5 y Grove - Sensor de Humedad del Suelo que están en el kit, conectándolos con las plataformas Helium y Azure IoT Central, para construir un monitor de macetas de patio trasero en tiempo real y recordatorio de riego, para un vistazo del Internet de las Cosas.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con el prototipado sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah, y el poderoso soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"></a><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody></table>

## Prerrequisitos

Antes de que todo comience, debemos cumplir con los siguientes prerrequisitos:

### Materiales Requeridos

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
      <td align="center">Grove Sensor de Humedad del Suelo</td>
    </tr>
  </tbody>
</table>

**Software**

<div>
  - <a href="https://www.arduino.cc/" target="_blank"><span>Arduino</span></a>
</div>

Cargaremos la programación al Wio Terminal a través de Arduino. Si esta es tu primera vez usando Arduino con Wio Terminal, te recomendamos encarecidamente que consultes
  <a href="https://wiki.seeedstudio.com/es/Preliminary-Preparation/" target="_blank"><span>Primeros Pasos con Wio Terminal</span></a>.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

**Otros**

- Maceta

En esta demostración de inicio rápido, estamos usando un sensor de humedad del suelo. Por lo tanto, una maceta con tierra lo suficientemente profunda será lo mejor.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit32.png" /></div>

### Registro en Helium para Conectar

<a href="https://console.helium.com/" target="_blank"><span>Helium</span> </a>es una red global y distribuida de Hotspots que crean cobertura inalámbrica pública de largo alcance para dispositivos IoT habilitados para LoRaWAN®.

Nos permite enviar una cierta cantidad de datos a través de LoRa® de forma gratuita y lo conectaremos al Wio Terminal. Toda la información que necesitamos para conectar el Wio Terminal se presenta **en la primera página** después del registro de la cuenta:

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

:::note
El dispositivo generalmente tarda casi 20 minutos en estar realmente listo. Se recomienda agregarlo al principio.
:::

### Registro en Azure IoT para Notificaciones

<a href="https://portal.azure.com/" target="_blank"><span>Azure IoT Central</span> </a>
 es un servicio administrado alojado en la nube que actúa como un centro de mensajes central para la comunicación entre una aplicación IoT y sus dispositivos conectados.

Puede ayudarnos a administrar los datos de LoRa® y realizar algunas acciones de forma gratuita durante una semana al principio. Lo integraremos con Helium para **monitorear datos** y configurar un **recordatorio automático de riego de macetas**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit30.png" /></div>

## Primeros Pasos con el Monitor de Humedad del Suelo

En esta demostración rápida solo requerimos una conexión LoRa® simple con el Grove - Sensor de Humedad del Suelo, con el propósito de monitoreo automático de humedad del suelo y alerta.

### Iniciación del Equipo

- **Paso 1**. Usa el cable Grove para conectar todo junto donde el Grove - Sensor de Humedad del Suelo esté a la **derecha** del Wio Terminal y el Grove - Wio-E5 esté a la **izquierda**.

:::note
La posición donde esté el Grove - Wio-E5 hará una diferencia en el código cargado.
:::

- **Paso 2**. Conecta una PC y el Wio Terminal con un cable Type-C.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

### Conectar Wio Terminal con Helium

- **Paso 1**. Abre la página de <a href="https://console.helium.com/" target="_blank"><span>Helium</span></a>
 en la PC y haz clic en "Devices" en la columna izquierda. **Agrega un nuevo dispositivo**, luego verifica la información a continuación (ejemplo):

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3a.png" /></div>

- **Paso 2**. Descarga el código de Arduino a continuación y ábrelo con Arduino.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></a></div><p />
</div>

- **Paso 3**. Encuentra la línea de código específica y completa la información de conexión de Helium que encontramos en la línea de código donde debemos saber que **solo cambiamos las letras y números**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit4a.png" /></div>

- **Paso 4**. Selecciona la Placa correcta y el Puerto. Podemos proceder a cargarlo haciendo clic en el botón en la esquina superior izquierda.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit3.png" /></div>

- **Paso 5**. Abre el "Monitor Serie" en la parte superior derecha de Arduino, y podemos ver que la conexión está hecha y los datos han sido enviados.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit5a.png" /></div>

- **Paso 6**. Regresa al sitio web de Helium y verifica los "Devices". En la parte inferior podemos ver que efectivamente algunos datos han sido recibidos.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/7.jpg" /></div>

Debido a la característica de la comunicación LoRa®, la presentación de datos es una matriz de números y letras que puede confundirnos. Por lo tanto, necesitamos decodificarla para obtener la información verdadera.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

### Datos Recibidos Decodificados en Helium

- **Paso 1**. Haz clic en "Function" en la columna izquierda de la página, y agrega una función personalizada.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

- **Paso 2**. Copia el código a continuación y agrégalo al "CUSTOM SCRIPT", luego guárdalo.

```cpp
function Decoder(bytes, port) {
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
  return decoded;
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit8.png" /></div>

- **Paso 3**. Haz clic en "Flows" a la izquierda y arrastra los bloques "Devices" y "Functions" a la paleta. Conéctalos como se muestra a continuación:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit9.png" /></div>

Esto nos ayuda a traducir nuestros datos para que sean legibles.

- **Paso 4 (opcional)**. Regresa a la página "Function", y podemos <a href="https://wiki.seeedstudio.com/es/Connecting-to-Helium/#upload-code-send-data-to-helium" target="_blank"><span>obtener los datos hexadecimales de entrada</span></a>
 del dispositivo. Selecciona el puerto como '8' y haz clic en el botón "RUN".

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Ahora podemos leer nuestros datos, pero el proceso es un poco complicado y no es fácil de usar. ¿Cómo podemos hacer que los datos se presenten de forma continua?

### Integrar la Plataforma IoT de Azure

Podemos integrar otra plataforma **IoT de Azure** para presentar y gestionar nuestros datos, incluso realizar algunas acciones.

- **Paso 1**. Abre primero la página de Helium, haz clic en "Integrations" en la columna izquierda de la página, y selecciona "Azure IoT Central".

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit15.png" /></div>

- **Paso 2**. Crea una nueva aplicación en <a href="https://apps.azureiotcentral.com/" target="_blank"><span>Azure IoT Central</span></a>
. Y luego integra Azure IoT Central en Helium completando la información requerida a continuación:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit16.png" /></div>

- **Paso 3**. Haz clic en "Flows" en la columna izquierda de nuestra página, arrastra el bloque de Azure IoT Central y conéctalo después de la función personalizada, el orden debe ser como:

<div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit17.png" /></div>

- **Paso 4**. Ve a la página "Azure IoT Central" y selecciona "Devices" a la izquierda. Podemos ver que aparece un dispositivo nombrado con algunos números aleatorios.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit18.png" /></div>

- **Paso 5**. Selecciona el dispositivo y verifica la información de "Raw data" como muestra la figura a continuación. La información contiene todos los datos de Helium, incluyendo los datos decodificados:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit19.png" /></div>

Tenemos nuestros datos mostrándose de forma continua, pero ¿es posible mostrarlos en un gráfico y tal vez realizar algunas acciones con los datos?

### Función Adicional en Azure IoT Central

Podemos gestionar todos los datos de Helium y elegir los que nos interesan para construir una alerta automática por correo electrónico basada en ellos.

- **Paso 1**. Haz clic en "Unformated data" en la página "Devices" y crea una plantilla de dispositivo automática.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit20.png" /></div>

- **Paso 2**. Ve a "Device template" y podemos ver que la plantilla incluye y hace que los datos del mismo tipo se almacenen por separado en cada bloque:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21.png" /></div>

- **Paso 3**. Selecciona "Overview" y podemos ver que se han creado automáticamente algunos gráficos que muestran el valor de los datos.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit21a.png" /></div>

Cambia los datos de humedad del suelo que queremos mostrar y renombra el gráfico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit22.png" /></div>

Recuerda hacer clic en **"Save"** y luego hacer clic en **"Pubilsh"** para guardar la plantilla después de terminar:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit23.png" /></div>

- **Paso 4**. Ve a "Rules" a la izquierda y crea una nueva.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit24.png" /></div>

- **Paso 5**. Completa la información a continuación para crear una alerta automática por correo electrónico:

La plantilla del dispositivo (generalmente la predeterminada):

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit25.png" /></div>

Configura el tipo de datos y el valor que queremos:

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit11.png" /></div>

Completa el correo electrónico que está registrado en Azure IoT Central y la nota que queremos enviar:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit12.png" /></div>

**Resultado**

- Regresa a "Devices" a la izquierda y selecciona el dispositivo, podemos ver que los datos se han mostrado en un gráfico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit31.png" /></div>

- Mientras tanto, si el valor que establecimos ha alcanzado el umbral, se enviarán correos electrónicos continuos que configuramos antes al correo electrónico.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit26.png" /></div>

El contenido del correo electrónico es como:

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit27.png" /></div>

¡Recuerda regar la maceta!

¡Gracias!

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

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) de SenseCAP, puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, la configuración Bluetooth, la compatibilidad con la red global LoRaWAN®, la batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div align="center"><a href="https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP" target="_blank"><img width={800} src="https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png" /></a></div>

## Declaración

- La Marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
