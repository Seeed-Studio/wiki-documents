---
description: Conectar a TTN
title: Conectar a TTN
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Connecting-to-TTN
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Conectando a TTN

En este capítulo, repasaremos el uso básico de la plataforma TTN y cómo retransmitir datos de sensores a través de la plataforma TTN.

## Actualizable a Sensores Industriales

Con el [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) de SenseCAP y el [registrador de datos S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), puedes convertir fácilmente el Grove en un sensor LoRaWAN®. Seeed no solo te ayuda con la creación de prototipos, sino que también te ofrece la posibilidad de expandir tu proyecto con la serie SenseCAP de robustos [sensores industriales](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

La carcasa IP66, configuración Bluetooth, compatibilidad con la red global LoRaWAN®, batería integrada de 19 Ah y el potente soporte de la APP hacen del [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) la mejor opción para aplicaciones industriales. La serie incluye sensores para humedad del suelo, temperatura y humedad del aire, intensidad de luz, CO2, EC, y una estación meteorológica 8 en 1. Prueba el último SenseCAP S210x para tu próximo proyecto industrial exitoso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Datos</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. y Humedad del Aire</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. y Humedad del Aire y CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Humedad y Temp. del Suelo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Humedad y Temp. del Suelo y EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estación Meteorológica 8 en 1</strong></a></td>
    </tr>
  </tbody>
</table>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/27.png" /></div>

Si no tienes experiencia con TTN, te recomendamos que primero leas sobre la consola de TTN.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introducción a TTN</strong><br /><br />En este capítulo, presentaremos los controles de la consola de TTN que utilizamos para obtener una primera impresión de la consola de TTN.<br /><br /><a href="https://wiki.seeedstudio.com/es/TTN-Introduction">Comencemos &gt;</a></td>
    </tr>
  </tbody></table>

:::note
Antes de comenzar esta sección, asegúrate de tener cobertura LoRaWAN® de TTN alrededor de tu entorno de despliegue, de lo contrario no podrás añadir dispositivos a TTN a través de LoRa®. Para más detalles, por favor lee [TTN LoRaWAN®](https://www.thethingsnetwork.org/docs/lorawan/).
:::

## <span id="jump1">Añadiendo dispositivos Grove - Wio-E5 a la consola de TTN</span>

Para retransmitir datos de sensores fuera de TTN, el primer paso que necesitamos es añadir Grove - Wio-E5 a la Aplicación de TTN para construir la conexión entre el dispositivo local y la plataforma TTN.

**Paso 1.** Obtener el DevEUI, AppEUI para Grove - Wio-E5.

Por favor descarga el entorno necesario para Arduino y Wio Terminal en [contenido pre-aprobado](https://wiki.seeedstudio.com/es/K1100-Light-Sensor-Grove-LoRa-E5/#preliminary-preparation).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

Haz clic [aquí](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/example/Get-Grove-LoRa-E5-AppEUI-DevEUI/Get-Grove-LoRa-E5-AppEUI-DevEUI.ino) para descargar el código para el DevEUI, AppEUI que viene con Grove - Wio-E5 y súbelo a Wio Terminal.

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // Open the Serial Monitor to get started or wait for 3.0"

  // init the library, search the Wio-E5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 Init Failed");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 allows querying DevEUI, AppEUI, but not AppKey.
  lorae5.sendATCommand("AT+ID=DevEui","","+ID: ERROR","",1000,false,NULL);
  lorae5.sendATCommand("AT+ID=AppEUI","","+ID: ERROR","",1000,false,NULL);
  delay(30000);
}
```

Abre el monitor del puerto serie del IDE de Arduino, establece la velocidad de baudios a **9600** y observa la configuración.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/95.png" /></div>

Por favor, anota los 16 dígitos después de **DevEUI** y **AppEUI**, que se utilizarán en la sesión de agregar dispositivo de TTN.

**Paso 2.** Agregar una aplicación

Haz clic en el botón **Add application** en la parte superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/31.png" /></div>

Completa los campos con asterisco y solicita el contenido según tu preferencia.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/32.png" /></div>

Luego haz clic en **Create Application**.

**Paso 3.** Agregar dispositivos

Ve a **End devices** en el menú izquierdo y haz clic en **+ Add end device** para llegar a la página de registro de dispositivos finales.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/33.png" /></div>

Para usar el Grove - Wio-E5 en el repositorio de dispositivos, asegúrate de que la pestaña **From the LoRaWAN® Device Repository** esté seleccionada.

Luego, por favor haz clic en las siguientes opciones para seleccionar.

- **Brand** -- SenseCAP
- **Model** -- LoRa-E5 STM32WLE5JC Module
- **Hardware Ver.** -- 1.0
- **Firmware Ver.** -- 1.0
- **Profile (Region)** -- Elige un plan de frecuencia apropiado para tu región.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/29.png" /></div>

:::note
Elige un plan de frecuencia apropiado para tu región. Tu dispositivo y gateway deben usar el mismo plan de frecuencia para comunicarse. Diferentes regiones del mundo usan diferentes [planes de frecuencia](https://www.thethingsindustries.com/docs/reference/frequency-plans/), por ejemplo, 863-870 MHz para Europa, 902-928 MHz para América del Norte, etc.
:::
Aquí, elegiré la banda del gateway de TTN que uso, EU868.

Luego, por favor completa el **DevEUI** y **AppEUI** que acabas de obtener en los campos correspondientes de TTN.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/35.png" /></div>

En cuanto al **AppKey**, haz clic en el botón **Generate** y luego súbelo a Wio Terminal usando el siguiente código para habilitar Grove - Wio-E5.

Ten en cuenta que el AppKey de 32 bits generado por TTN es reemplazado por el contenido en el código.

```c
lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
```

Aquí está el código completo.

```cpp
#include <Arduino.h>
#include "disk91_LoRaE5.h"

Disk91_LoRaE5 lorae5(&Serial); // Where the AT command and debut traces are printed

void setup() {
  Serial.begin(9600);
  uint32_t start = millis();
  while ( !Serial && (millis() - start) < 3000 );  // Open the Serial Monitor to get started or wait for 3.0"

  // init the library, search the Wio-E5 over the different WIO port available
  if ( ! lorae5.begin(DSKLORAE5_SEARCH_WIO) ) {
    Serial.println("Wio-E5 Init Failed");
    while(1); 
  }
}

void loop() {
  //Grove - Wio-E5 allows querying DevEUI, AppEUI, but not AppKey.
  lorae5.sendATCommand("AT+KEY=APPKEY,\"2B7E151628XXXXXXXXXX158809CF4F3C\"","","+KEY: ERROR","",1000,false,NULL);
  delay(30000);
}
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/96.png" /></div>

En este punto, los tres códigos para Grove - Wio-E5 y TTN han sido configurados. Solo haz clic en **Register end device**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/37.png" /></div>

## Escribir función de decodificadores para diferentes sensores

En las secciones anteriores, te instruimos sobre cómo usar el Wio Terminal para leer los valores de los sensores individuales en el kit. Para enviar los valores de los sensores a TTN a través de Grove - Wio-E5, es necesario usar comandos AT para hacerlo. Los datos enviados son recibidos por TTN y necesitan ser decodificados antes de convertirse en datos reales que podamos leer. Esta es la razón por la que escribimos el decodificador.

Además, dado que el formato de datos enviado no es uniforme, con sensores que tienen datos enteros, flotantes, positivos y negativos, etc., el código del decodificador requerido para cada sensor es diferente.

<table align="center">
  <tbody><tr>
      <th>Tipo de Sensor</th>
      <th>Dirección de Descarga</th>
    </tr>
    <tr>
      <td align="center">Sensor de luz integrado del Wio Terminal</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/Wio-Terminal-Light-Sensor-data-decoder.js">Descargar</a></td>
    </tr>
    <tr>
      <td align="center">Sensor IMU integrado del Wio Terminal</td>
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

### Opción 1. Decodificador de datos del sensor de luz Wio Terminal

En la sección anterior [Sensor de luz Wio Terminal](https://wiki.seeedstudio.com/es/K1100-Light-Sensor-Grove-LoRa-E5/), utilizamos una variable entera `light` para almacenar el valor de luz leído por el sensor de luz y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en TTN es poder analizar estos datos enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pegue el siguiente código en la sección de código de TTN. Haga clic en **Save Function** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.light = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

Haz clic en **Formateadores de carga útil** --> **Enlace ascendente** --> **Formateador Javascript personalizado** del dispositivo en orden.

Luego simplemente pega el código del decodificador anterior en el **Código del formateador**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/38.png" /></div>

Podemos introducir los datos del sensor de luz de 8 bits en la ventana **Test** del lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/39.png" /></div>

### Opción 2. Decodificador de datos del sensor Wio Terminal IMU

En la sección anterior [Sensor Wio Terminal IMU](https://wiki.seeedstudio.com/es/K1100-IMU-Sensor-Grove-LoRa-E5/), utilizamos números flotantes `x_values`, `y_values`, `z_values` para almacenar los datos de los tres ejes devueltos por IMU, y multiplicamos estos tres conjuntos de datos por 100 para convertirlos a enteros y luego enviarlos juntos.

En particular, es importante tener en cuenta que estos datos pueden ser tanto positivos como negativos, por lo que también necesitamos analizar esto y restaurarlo a un número flotante.

El código de configuración de su decodificador es el siguiente. Por favor pega el siguiente código en la sección de código de TTN. Haz clic en **Guardar cambios** para guardar este decodificador.

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

Podemos ingresar los datos del sensor IMU de 48 bits en **Test** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/97.png" /></div>

### Opción 3. Decodificador de datos del Sensor de Humedad del Suelo Grove

En la sección anterior [Sensor de Humedad del Suelo Grove](https://wiki.seeedstudio.com/es/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/), utilizamos una variable entera `sensorValue` para almacenar el valor de humedad del suelo leído por el sensor de humedad del suelo y enviamos ese valor usando la función **send_sync()**. Por lo tanto, el objetivo del decodificador que escribimos en TTN es poder analizar estos datos enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pegue el siguiente código en la sección de código de TTN. Haga clic en **Save changes** para guardar este decodificador.

```java
function Decoder(bytes, port) {
 
  var decoded = {};
  if (port == 8) {
    decoded.soil = bytes[0]<<8 | bytes[1];
  }
 
  return decoded;
}
```

Podemos ingresar los datos del sensor de humedad del suelo de 8 bits en **Test** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/23.png" /></div>

### Opción 4. Decodificador de datos del Sensor de Gas VOC y eCO2 Grove (SGP30)

En la sección anterior [Sensor de Gas VOC y eCO2 Grove (SGP30)](https://wiki.seeedstudio.com/es/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/), utilizamos las variables enteras `tvoc_ppb` y `co2_eq_ppm` para almacenar los valores de VOC y eCO2.

El código de configuración de su decodificador es el siguiente. Por favor, pegue el siguiente código en la sección de código de TTN. Haga clic en **Save changes** para guardar este decodificador.

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

Podemos ingresar los datos de 16 bits del SGP30 en **Test** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/24.png" /></div>

### Opción 5. Decodificador de datos del Sensor de Temp&Humedad Grove (SHT40)

En la sección anterior [Sensor de Temp&Humedad Grove (SHT40)](https://wiki.seeedstudio.com/es/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/), utilizamos las variables float `temperature` y `humidity` para almacenar los valores de temperatura y humedad. Y enviamos los dos valores después de haberlos ampliado cien veces convirtiéndolos en enteros.

El código de configuración de su decodificador es el siguiente. Por favor, pegue el siguiente código en la sección de código de TTN. Haga clic en **Save changes** para guardar este decodificador.

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

Podemos ingresar los datos del SHT40 de 32 bits en **Test** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/98.png" /></div>

### Opción 6. Decodificador de datos del Módulo Vision AI Grove

En la sección anterior [Módulo Vision AI Grove](https://wiki.seeedstudio.com/es/K1100-Vision-AI-Module-Grove-LoRa-E5/), utilizamos las variables int `model` y `confi` para almacenar el tipo de modelo identificado y su nivel de confianza.

El código de configuración de su decodificador es el siguiente. Por favor, pegue el siguiente código en la sección de código de TTN. Haga clic en **Save changes** para guardar este decodificador.

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

Podemos ingresar los datos del Vision AI de 16 bits en **Test** en el lado derecho para verificar si el decodificador analiza correctamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/26.png" /></div>

## Subir código para enviar datos a TTN

En las diferentes páginas de sensores proporcionamos códigos detallados para subir datos. También puedes encontrar el código del sensor que deseas usar en la lista a continuación.

:::note
Antes de usar el código proporcionado en esta sección, ten en cuenta que el Device EUI, App EUI y App Key en el código sean consistentes con la información del dispositivo agregada por TTN. Y verifica si la banda de frecuencia configurada para Grove - Wio-E5 es la misma que la banda del gateway en tu área o TTN. No hacerlo puede resultar en falla de acceso a la red.

El código para configurar la banda LoRaWAN® es el siguiente, y la configuración predeterminada es la banda EU868. (La banda EU868 se usa comúnmente en la región europea.)<br />
    `#define Frequency DSKLORAE5_ZONE_EU868`<br />
Banda US915 (La banda US915 se usa comúnmente en América del Norte.)<br />
    `#define Frequency DSKLORAE5_ZONE_US915`<br />
Banda AU915 (La banda AU915 se usa comúnmente en la región de Australia.)<br />
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

El código anterior para enviar datos del sensor puede cargarse directamente al Wio Terminal desde el IDE de Arduino y ejecutarse. En ese momento, por favor enciende el monitor serie y ajusta la velocidad de baudios a 9600 para observar la transmisión de datos en tiempo real.

Para más detalles, por favor regresa a la sección sobre el uso de sensores individuales en el catálogo de referencia.

### Datos en tiempo real

En la pestaña **Application**, podemos hacer clic en **Live data** para ver la información sobre los datos recibidos por TTN.

Podemos ver directamente la información de datos después de la decodificación por el decodificador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/40.png" /></div>

### Análisis del Código Fuente

Si quieres aplicar el contenido de este tutorial al desarrollo de tu propio proyecto, aprender a entender el significado del código es esencial. Aquí usaremos el código del sensor **SHT40** como ejemplo para explicar la lógica de implementación del código.

Al comienzo del programa, necesitamos preparar la información de la tríada necesaria para conectar a TTN y configurar la frecuencia del Wio-E5.

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

A continuación, se define una función `data_decord()`. Esta función convierte los valores del sensor en marcos de datos que pueden ser analizados por el decodificador de TTN y también cumple con el protocolo LoRaWAN®, y los almacena en el array `data[]`.

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

El retraso al final del programa determina con qué frecuencia deseas enviar datos. No recomendamos enviar a una velocidad menor a 10 segundos, ya que enviar a una frecuencia tan alta puede causar que el Wio-E5 funcione de manera anormal, y puede ser reconocido por TTN como un dispositivo anormal y bloqueado debido a la alta frecuencia.

Para aprender más sobre el código y las características de Grove - Wio-E5, consulta el [enlace de GitHub del repositorio](https://github.com/limengdu/Disk91_LoRaE5). Un agradecimiento especial a [**Paul Pinault (disk91)**](https://github.com/disk91) por escribir la biblioteca para Grove - Wio-E5.

¡Mantente atento a más contenido!

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
