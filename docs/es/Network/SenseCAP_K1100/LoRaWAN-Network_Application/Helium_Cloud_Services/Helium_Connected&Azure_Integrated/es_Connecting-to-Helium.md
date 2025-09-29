---
description: Conectar a Helium
title: Conectar a Helium
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connecting-to-Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
---

# Conectando a Helium

En este capítulo, repasaremos el uso básico de la plataforma Helium y cómo transmitir datos de sensores a través de la plataforma Helium.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP) robustos.

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<div>
  <table style={{marginLeft: 'auto', marginRight: 'auto'}}>
    <tbody>
      <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
        <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
      </tr>
      <tr>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
        <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
      </tr>
    </tbody>
  </table>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/28.png" /></div>
Si no tienes experiencia con Helium, te recomendamos que primero leas sobre la consola de Helium.
<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a Helium</strong><br /><br />En este capítulo, presentaremos los controles de la consola de Helium que utilizamos para obtener una primera impresión de la consola de Helium.<br /><br /><a href="https://wiki.seeedstudio.com/es/Helium-Introduction">Comencemos &gt;</a></td>
    </tr>
  </tbody></table>
</div>

:::note
Antes de comenzar esta sección, asegúrate de tener cobertura Helium LoRaWAN® alrededor de tu entorno de despliegue, de lo contrario no podrás añadir dispositivos a Helium vía LoRa®. Para más detalles, por favor lee [Helium LoRaWAN®](https://www.helium.com/lorawan).
:::

## <span id="jump1">Añadiendo dispositivos Grove - Wio-E5 a la consola de Helium</span>

Para retransmitir datos de sensores fuera de Helium, el primer paso que necesitamos es añadir Grove - Wio-E5 a la consola de Helium para construir la conexión entre el dispositivo local y la plataforma Helium.

Para añadir Grove - Wio-E5, ve a **Devices** y haz clic en el icono **+** Add Device en la parte superior derecha de la ventana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/125.png" /></div>

Como se describió anteriormente para el dispositivo de la consola de Helium, una terna de datos -- **DevEUI**, **AppEUI**, y **AppKey** se genera automáticamente en este punto.

Comenzaremos llenando el nombre del dispositivo, aquí lo nombraré **lora wio terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/129.png" /></div>

:::note
Por favor descarga el entorno necesario para Arduino y Wio Terminal en [contenido pre-aprobado](https://wiki.seeedstudio.com/es/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation).
:::
   <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Grove - Wio-E5 permite a los usuarios establecer su propio **DevEUI**, **AppEUI**, y **AppKey**, así que podemos llenar la información de la terna generada por Helium arriba bajo las columnas correspondientes.

Abre el Arduino IDE y copia el siguiente código en el Arduino IDE.

```c
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */

char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";

void setup() {

  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 1500 );  // Open the Serial Monitor to get started or wait for 1.5"

  // init the library, search the LORAE5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("LoRa E5 Init Failed");
    while(1); 
  }

  // Setup the LoRaWan Credentials
  if ( ! lorae5.setup(
        Frequency,     // LoRaWan Radio Zone EU868 here
        deveui,
        appeui,
        appkey
     ) ){
    Serial.println("LoRa E5 Setup Failed");
    while(1);         
  }
}

void loop() {

}
```

:::note
El código anterior no tiene restricciones en la conexión del Grove - Wio-E5, buscará automáticamente el puerto Grove al que está conectado el Grove - Wio-E5, pero el proceso de búsqueda puede tomar un tiempo (aproximadamente un minuto más o menos).
:::
Por favor selecciona la banda LoRaWAN® que deseas usar. Esta banda debe ser consistente con la banda del gateway que estás usando. Las bandas de frecuencia disponibles están en los comentarios del código a continuación. En los tutoriales que usamos, por defecto es la banda **EU868**.

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
```

:::tip
La banda **EU868** se usa comúnmente en la región **Europea**.<br />
La banda **US915** se usa comúnmente en **América del Norte**.<br />
La banda **AU915** se usa comúnmente en la región de **Australia**.
:::
Por favor, reemplaza el **DevEUI**, **AppEUI** y **AppKey** generados por Helium con el código a continuación.

```c
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/89.png" /></div>

Sube el código para Wio Terminal y abre el monitor del puerto serie del IDE de Arduino, establece la velocidad de baudios a 9600 y observa la configuración.

<div align="center"><img width="{700}" src="https://files.seeedstudio.com/wiki/K1100/90.png" /></div>

Después de asegurarte de que la información anterior esté completa, haz clic en **Save Device** abajo para terminar de agregar el dispositivo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/130.png" /></div>

Por favor espera pacientemente a que se agregue el dispositivo. (Esto tomará aproximadamente 20 minutos.)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/131.png" /></div>

## Escribir función de decodificadores para diferentes sensores

En las secciones anteriores, te instruimos sobre cómo usar el Wio Terminal para leer los valores de los sensores individuales en el kit. Para enviar los valores de los sensores a Helium a través de Grove - Wio-E5, es necesario usar comandos AT para hacerlo. Los datos enviados son recibidos por Helium y necesitan ser decodificados antes de convertirse en datos reales que podamos leer. Esta es la razón por la que escribimos el decodificador.

Además, dado que el formato de datos enviado no es uniforme, con sensores que tienen datos enteros, flotantes, positivos y negativos, etc., el código del decodificador requerido para cada sensor es diferente.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-IMU-Sensor-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Humedad del Suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gas VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SGP30-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temp&amp;Humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/SHT40-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/VisionAI-data-decoder.js">Descargar</a></td>
    </tr>
  </tbody></table>

### Opción 1. Decodificador de datos del sensor de luz del Wio Terminal

Creamos un nuevo Script Personalizado y lo nombramos Light_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/132.png" /></div>

En la sección anterior [Sensor de Luz del Wio Terminal](https://wiki.seeedstudio.com/es/K1100-Light-Sensor-Grove-LoRa-E5/), utilizamos una variable entera `light` para almacenar el valor de luz leído por el sensor de luz y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en Helium es poder analizar estos datos enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pegue el siguiente código en la sección de código de Helium. Haga clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/133.png" /></div>

Podemos introducir los datos del sensor de luz de 8 bits en **SCRIPT VALIDATOR** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/134.png" /></div>

Regresa a Flows y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/180.png" /></div>

### Opción 2. Decodificador de datos del sensor IMU de Wio Terminal

Creamos un nuevo Custom Script y lo nombramos IMU_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/135.png" /></div>

En la sección anterior [Sensor IMU de Wio Terminal](https://wiki.seeedstudio.com/es/K1100-IMU-Sensor-Grove-LoRa-E5/), usamos números flotantes `x_values`, `y_values`, `z_values` para almacenar los tres ejes de datos devueltos por IMU, y multiplicamos estos tres conjuntos de datos por 100 para convertirlos a enteros y luego enviarlos juntos.

En particular, es importante tener en cuenta que estos datos pueden ser tanto positivos como negativos, por lo que también necesitamos analizar esto y restaurarlo a un número flotante.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    if (value >= 32768) {
      value = 32768 - value;
    }
    value = value/100.0;
    return value;
  }
    
  if (port == 8) {
    decoded.x = transformers(bytes.slice(0,2));
    decoded.y = transformers(bytes.slice(2,4));
    decoded.z = transformers(bytes.slice(4,6));
  }
  
  return decoded;
}
```

Podemos ingresar los datos del sensor IMU de 48 bits en **SCRIPT VALIDATOR** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/91.png" /></div>

Regresa a Flows y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/179.png" /></div>

### Opción 3. Decodificador de datos del Sensor de Humedad del Suelo Grove

Creamos un nuevo Custom Script y lo nombramos Soil_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/184.png" /></div>

En la sección anterior [Sensor de Humedad del Suelo Grove](https://wiki.seeedstudio.com/es/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), usamos una variable entera `sensorValue` para almacenar el valor de humedad del suelo leído por el sensor de humedad del suelo y enviamos ese valor usando la función **send_sync()**. Entonces, el objetivo del decodificador que escribimos en Helium es poder analizar estos datos enteros.

El código de configuración de su decodificador es el siguiente. Por favor pega el siguiente código en la sección de código de Helium. Haz clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

Podemos ingresar los datos del sensor de humedad del suelo de 8 bits en **SCRIPT VALIDATOR** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/185.png" /></div>

Regresa a Flows y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/186.png" /></div>

### Opción 4. Decodificador de datos del Sensor de Gas VOC y eCO2 Grove (SGP30)

Creamos un nuevo Custom Script y lo nombramos SGP30_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/173.png" /></div>

En la sección anterior [Sensor de Gas VOC y eCO2 Grove (SGP30)](https://wiki.seeedstudio.com/es/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), utilizamos las variables enteras `tvoc_ppb` y `co2_eq_ppm` para almacenar los valores de VOC y eCO2.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.voc = transformers(bytes.slice(0,2));
    decoded.eco2 = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

Podemos ingresar los datos de 16 bits del SGP30 en **SCRIPT VALIDATOR** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/174.png" /></div>

Regresa a Flows y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/181.png" /></div>

### Opción 5. Decodificador de datos del Sensor de Temp&Humedad Grove (SHT40)

Creamos un nuevo Custom Script y lo nombramos SHT40_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/189.png" /></div>

En la sección anterior [Sensor de Temp&Humedad Grove (SHT40)](https://wiki.seeedstudio.com/es/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), utilizamos las variables float `temperature` y `humidity` para almacenar los valores de temperatura y humedad. Y enviamos los dos valores después de haberlos ampliado cien veces en enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pega el siguiente código en la sección de código de Helium. Haz clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes){
        value = bytes[0] * 256 + bytes[1];
        if (value >= 32768) {
        value = 32768 - value;
        }
        value = value/100.0;
        return value;
    }

    if (port == 8) {
        decoded.temp = transformers(bytes.slice(0, 2));
        decoded.humi = transformers(bytes.slice(2, 4));
    }

    return decoded;
}
```

Podemos ingresar los datos de 32 bits del SHT40 en **SCRIPT VALIDATOR** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/92.png" /></div>

Regresa a Flows y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/190.png" /></div>

### Opción 6. Decodificador de datos del Módulo Vision AI Grove

Creamos un nuevo Custom Script y lo nombramos AI_Version_data.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/195.png" /></div>

En la sección anterior [Módulo Vision AI Grove](https://wiki.seeedstudio.com/es/K1100-Vision-AI-Module-Grove-LoRa-E5/), usamos las variables int `model` y `confi` para almacenar el tipo de modelo identificado y su nivel de confianza.

El código de configuración de su decodificador es el siguiente. Por favor pega el siguiente código en la sección de código de Helium. Haz clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  
  function transformers(bytes){
    value = bytes[0] * 256 + bytes[1];
    return value;
  }
  
  if (port == 8) {
    decoded.model = transformers(bytes.slice(0,2));
    decoded.confidence = transformers(bytes.slice(2,4));
  }
 
  return decoded;
}
```

Podemos ingresar los datos del Vision AI de 16 bits en **SCRIPT VALIDATOR** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/200.png" /></div>

Regresa a Flows y conecta el dispositivo al decodificador.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/196.png" /></div>

## Subir código para enviar datos a Helium

En las diferentes páginas de sensores proporcionamos códigos detallados para subir datos. También puedes encontrar el código del sensor que deseas usar en la lista a continuación.

:::note
Antes de usar el código proporcionado en esta sección, ten en cuenta que el Device EUI, App EUI y App Key en el código sean consistentes con la información del dispositivo agregado por Helium. Y verifica si la banda de frecuencia configurada para Grove - Wio-E5 es la misma que la banda del gateway en tu área o Helium. No hacerlo puede resultar en falla de acceso a la red.

El código para configurar la banda LoRaWAN® es el siguiente, y la configuración predeterminada es la banda EU868. (La banda EU868 se usa comúnmente en la región europea.)
    `#define Frequency DSKLORAE5_ZONE_EU868`
Banda US915 (La banda US915 se usa comúnmente en América del Norte.)
    `#define Frequency DSKLORAE5_ZONE_US915`
Banda AU915 (La banda AU915 se usa comúnmente en la región de Australia.)
    `#define Frequency DSKLORAE5_ZONE_AU915`
:::
<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Lightsensor-send-data">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado de Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Humedad del Suelo</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Gas VOC y eCO2 (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor de Temp&amp;Humedad (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Módulo Vision AI</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/AI-Module-send-data">Descargar</a></td>
    </tr>
  </tbody></table>

El código anterior para enviar datos del sensor puede cargarse directamente al Wio Terminal desde el IDE de Arduino y ejecutarse. En ese momento, por favor enciende el monitor serie y ajusta la velocidad de baudios a **9600** para observar la transmisión de datos en tiempo real.

Para más detalles, por favor regresa a la sección sobre el uso de sensores individuales en el catálogo de referencia.

### Datos en tiempo real y depuración

Una vez que tenemos el dispositivo conectado, puedes comenzar a ver las transferencias de datos en los paquetes en tiempo real y el registro de eventos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/93.png" /></div>

:::note
En la última versión de la actualización de Helium, Helium ya no regala 10,000 DATA CREDITS a nuevos usuarios, solo **250 DATA CREDITS**. Eres libre de ajustar la frecuencia de envío de datos para reducir el consumo de DC, o comprarlo a tu elección.
:::
En la pestaña **My Devices**, podemos hacer clic en el **botón beetle** en el lado derecho de la pantalla para ver la información sobre los datos recibidos por Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/172.png" /></div>

Podemos prestar especial atención a la información en las siguientes secciones.

- payload: Información sobre los datos enviados a Helium en formato base64.

- port: El número de puerto donde se recibieron los datos.

:::note
En nuestro código, el número de puerto para enviar mensajes está configurado en **8**, por lo que en la ventana de depuración, todos los mensajes sobre el sensor deberían ser payload para el puerto **8**. Para leer y decodificar el payload, puedes hacerlo con la ayuda de este [sitio web de decodificación](https://cryptii.com/pipes/base64-to-hex).
:::
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/175.png" /></div>

### Análisis del Código Fuente

Si quieres aplicar el contenido de este tutorial al desarrollo de tu propio proyecto, aprender a entender el significado del código es esencial. Aquí usaremos el código del sensor **SHT40** como ejemplo para explicar la lógica de implementación del código.

Al comienzo del programa, necesitamos preparar la información de la tríada necesaria para conectar a Helium y configurar la frecuencia del Wio-E5.

```cpp
#define Frequency DSKLORAE5_ZONE_EU868
/*
Select your frequency band here.
DSKLORAE5_ZONE_EU868
DSKLORAE5_ZONE_US915
DSKLORAE5_ZONE_AS923_1
DSKLORAE5_ZONE_AS923_2
DSKLORAE5_ZONE_AS923_3
DSKLORAE5_ZONE_AS923_4
DSKLORAE5_ZONE_KR920
DSKLORAE5_ZONE_IN865
DSKLORAE5_ZONE_AU915
 */
 
char deveui[] = "2CF7FXXXXXX0A49F";
char appeui[] = "80000XXXXXX00009";
char appkey[] = "2B7E151628XXXXXXXXXX158809CF4F3C";
```

A continuación, se define una función `data_decord()`. Esta función convierte los valores del sensor en marcos de datos que pueden ser analizados por el decodificador de Helium y también cumplen con el protocolo LoRaWAN®, y los almacena en el array `data[]`.

En general, para prevenir el desbordamiento de datos, necesitamos considerar los valores máximos y mínimos que el sensor puede leer. Y dividir en números hexadecimales que no se desbordarán.

```cpp
void data_decord(int val_1, int val_2, uint8_t data[4])
{
  int val[] = {val_1, val_2};

  for(int i = 0, j = 0; i < 2; i++, j += 2)
  {
    if(val[i] < 0)
    {
      val[i] = ~val[i] + 1;
      data[j] = val[i] >> 8 | 0x80;
      data[j+1] = val[i] & 0xFF;
    }
    else
    {
      data[j] = val[i] >> 8 & 0xFF;
      data[j+1] = val[i] & 0xFF;
    }
  }
}
```

Para el sensor SHT40, tendrá dos datos, uno es el dato de temperatura y otro es el dato de humedad, y hay valores positivos y negativos, por lo que los números negativos necesitan ser procesados, y también los lugares decimales necesitan ser procesados.

```cpp
int_temp = temperature*100;
int_humi = humidity*100;
```

El siguiente paso es la inicialización del SHT40 y la configuración inicial del Wio-E5. Todo esto se ejecutará en la función `setup()`.

```cpp
lorae5.begin(DSKLORAE5_SWSERIAL_WIO_P2)
```

En el código de inicialización, `DSKLORAE5_SWSERIAL_WIO_P2` representa la interfaz Grove en el lado **derecho** del Wio Terminal, mientras que `DSKLORAE5_SWSERIAL_WIO_P1` representa la interfaz Grove en el lado **izquierdo**. Para otros proyectos sin sensores externos, también puedes usar `DSKLORAE5_SEARCH_WIO`, que buscará automáticamente la interfaz Grove a la que está conectado tu Wio-E5.

```cpp
lorae5.send_sync(              //Sending the sensor values out
        8,                     // LoRaWan Port
        data,                  // data array
        sizeof(data),          // size of the data
        false,                 // we are not expecting a ack
        7,                     // Spread Factor
        14                     // Tx Power in dBm
       ) 
```

El papel importante de la función `send_sync()` es enviar los valores del sensor a través de LoRaWAN®. El primer parámetro indica el número de canal para enviar los datos, el segundo parámetro indica el contenido de los datos enviados, y el tercer parámetro indica la longitud de los datos enviados. En general, solo necesitamos enfocarnos en el contenido de los primeros tres parámetros.

```cpp
delay(15000);
```

El retraso al final del programa determina con qué frecuencia deseas enviar datos. No recomendamos enviar a una velocidad menor a 10 segundos, ya que enviar a una frecuencia tan alta puede causar que el Wio-E5 funcione de manera anormal, y puede ser reconocido por Helium como un dispositivo anormal y bloqueado debido a la alta frecuencia.

Para aprender más sobre el código y las características de Grove - Wio-E5, por favor consulta el [enlace de GitHub del repositorio](https://github.com/limengdu/Disk91_LoRaE5). Un agradecimiento especial a [**Paul Pinault (disk91)**](https://github.com/disk91) por escribir la biblioteca para Grove - Wio-E5.

La sección anterior es una guía paso a paso sobre cómo usar el dispositivo para conectarse a Helium y recibir datos. Sin embargo, desde un punto de vista práctico, los datos actualmente enviados a Helium no son legibles para humanos. Si tienes un requisito para visualización de datos, entonces puedes consultar los siguientes pasos para completar el tutorial sobre integrar Helium en los centros de IoT de Microsoft Azure, que te llevará a través del proceso de mostrar los datos de manera gráfica.

<div>
  <table align="center">
    <tbody><tr>
        <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/azure.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integrar Helium en Azure IoT Hub</strong><br /><br />Esta sección describe cómo configurar Microsoft Azure e integrar con Helium para subir datos a la plataforma de Microsoft Azure.<br /><br /><a href="https://wiki.seeedstudio.com/es/Integrate-into-Azure-IoT-Hub">Comencemos &gt;</a></td>
      </tr>
    </tbody></table>
  Además de esto, puedes elegir más plataformas según tus necesidades.
  <table align="center">
    <tbody><tr>
        <td colSpan={2} bgcolor="8FBC8F"><b>Sección de Plataforma en la Nube</b></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/Google-Sheets.jpeg" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integración de Helium con Google Sheets</strong><br /><br />Esta sección presenta el uso de Google Forms en la integración con Helium. y el uso de Google Forms para almacenar datos de sensores.<br /><br /><a href="https://wiki.seeedstudio.com/es/Configuring-Web-APP-Visualization">Ir al capítulo &gt;</a></td>
      </tr>
      <tr>
        <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/AWS.png" alt="pir" width={500} height="auto" /></p></td>
        <td align="left"><strong>Integración de Helium con AWS IOT Core</strong><br /><br />Esta sección describe cómo visualizar la información de datos recibida por Microsoft Azure usando la integración gratuita de Web APP.<br /><br /><a href="https://wiki.seeedstudio.com/es/Configuring-Web-APP-Visualization">Ir al capítulo &gt;</a></td>
      </tr>
    </tbody></table>
</div>

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

## Declaración

- La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
