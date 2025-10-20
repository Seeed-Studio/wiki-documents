---
description: Grove - Sensor de Barómetro (SPA06-003)
title: Grove - Sensor de Barómetro (SPA06-003)
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/show.webp
slug: /es/grove_barometer_sensor_spa06_003
last_update:
  date: 05/13/2025
  author: robben
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/SPA06-003.jpg" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Descripción

**Grove - Sensor de Temperatura y Barómetro (SPA06-003)** es un sensor ambiental de alta precisión y bajo consumo que mide la temperatura y el barómetro. Soporta comunicación tanto I2C como SPI y proporcionamos la biblioteca Arduino SPA06-003.

:::note

Como el sensor es bastante sensible a las condiciones ambientales, **por favor NO lo toques con los dedos**.
:::

## Características

- **Amplio rango de medición:**  Las mediciones de presión van desde 300hPa - 1100hPa y las mediciones de temperatura van desde -40℃ - +85℃.
- **Alta precisión:** La precisión absoluta de ±0.3 hPa para medición de presión y precisión de ±1 ℃ para medición de temperatura.
- **Largo tiempo de espera**: El uso del FIFO permite que el procesador anfitrión permanezca en modo de suspensión por períodos más largos entre lecturas, reduciendo el consumo total de energía del sistema y logrando una corriente de espera tan baja como 0.5 μA.
- **Interfaz Grove:** Cuenta con un [conector Grove de 4 pines, asegurando una experiencia "Plug and Play"](https://wiki.seeedstudio.com/es/Grove_System/) para conectar con plataformas de hardware principales como Arduino, Raspberry Pi, Micro:bit y muchas más.

:::tip
Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/).
:::

## Especificaciones

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>Parámetro</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>Voltaje de Alimentación</td>
      <td>3.3V</td>
    </tr>
    <tr>
      <td>Interfaz</td>
      <td>I2C y SPI</td>
    </tr>
    <tr>
      <td>Dirección I2C</td>
     <td>0x77 (por defecto)<br />0x76</td>
    </tr>
    <tr>
      <th colspan="2">Medición de Presión Barométrica</th>
    </tr>
    <tr>
      <td>Rango</td>
      <td>300~1100 hPa</td>
    </tr>
    <tr>
      <td>Precisión Absoluta</td>
      <td>±0.3 hPa</td>
    </tr>
    <tr>
      <th colspan="2">Medición de Temperatura</th>
    </tr>
    <tr>
      <td>Rango</td>
      <td>-40℃ a +85℃</td>
    </tr>
    <tr>
      <td>Precisión</td>
      <td>±1℃</td>
    </tr>
    <tr>
      <td>Dimensiones</td>
      <td>40mm x 20mm x 6.5mm</td>
    </tr>
  </table>
</div>

### **BMP280 vs. BME280 vs. DPS310 vs. SPA06-003**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>ELEMENTO</th>
      <th>Grove-BMP280</th>
      <th>Grove-BME280</th>
      <th>Grove-DPS310</th>
      <th>Grove-SPA06-003</th>
    </tr>
    <tr>
      <td>Rango de Presión</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1100 hPa</td>
      <td>300 ~ 1200 hPa</td>
      <td>300 ~ 1100 hPa</td>
    </tr>
    <tr>
      <td>Rango de Temperatura</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 ℃</td>
      <td>-40 ~ 85 °C</td>
      <td>-40 ~ 85 °C</td>
    </tr>
    <tr>
      <td>Precisión de Presión</td>
      <td>-</td>
      <td>-</td>
      <td>± 0.002 hPa (o ±0.02 m)</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Exactitud de Presión (Absoluta)</td>
      <td>± 1 hPa (o ±8 m)</td>
      <td>± 1 hPa (o ±8 m)</td>
      <td>± 1 hPa (o ±8 m)</td>
      <td>± 0.3 hPa</td>
    </tr>
    <tr>
      <td>Exactitud de Presión (Relativa)</td>
      <td>± 0.12 hPa</td>
      <td>± 0.12 hPa</td>
      <td>± 0.06 hPa (o ±0.5 m)</td>
      <td>± 0.03 hPa (o ±0.25 m)</td>
    </tr>
    <tr>
      <td>Resolución de Presión</td>
      <td>0.18 Pa</td>
      <td>0.18 Pa</td>
      <td>0.06 Pa</td>
      <td>0.06 Pa</td>
    </tr>
    <tr>
      <td>Humedad</td>
      <td>-</td>
      <td>0 ~ 100%</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Comunicación</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
      <td>I2C/SPI</td>
    </tr>
    <tr>
      <td>Precio</td>
      <td>\$9.8</td>
      <td>\$18.7</td>
      <td>\$7.5</td>
      <td>\$4.5</td>
    </tr>
  </table>
</div>

### **Lista de Componentes**

<div class="table-center">
  <table align="center" border="1" cellpadding="6" cellspacing="0">
    <tr>
      <th>Artículo</th>
      <th>Cantidad</th>
    </tr>
    <tr>
      <td>Grove Sensor de Temperatura y Barómetro (SPA06-003)</td>
      <td>×1</td>
    </tr>
    <tr>
      <td>Grove - Cable de 20cm</td>
      <td>×1</td>
    </tr>
  </table>
</div>

## Aplicación

- Estación Meteorológica y Sensado del Clima
- Medir Temperatura, Presión y Altitud

## Primeros Pasos

### Diagrama de indicaciones

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/Grove-Barometer_Sensor-SPA06-003-Components.png" style={{width:800, height:'auto'}}/></div>

- **Pads de soldadura SPI**.
- **Pads de selección de bus de interfaz**, para seleccionar el bus I<sup>2</sup>C, conecta los dos pads soldando (esto está conectado por defecto); para seleccionar el bus SPI, corta los dos pads con un cuchillo afilado o un soldador.
- **Pads de selección de dirección de placa esclava**, para seleccionar la dirección de la placa esclava y evitar colisión de direcciones.

:::tip

- Si has seleccionado el bus I2C, la dirección por defecto para la placa esclava es 0x77 (los dos pads de la derecha están conectados). Si quieres usar la dirección 0x76, conecta solo los dos de la izquierda (desconecta los dos de la derecha) soldando.
- Puedes desconectar los pads simplemente con un cuchillo afilado.
- Si has seleccionado el bus SPI, la dirección por defecto para la placa esclava es 0x77 (los dos pads de la derecha están conectados). Si quieres usar la dirección 0x76, desconecta los tres pads.

:::

### Hardware

**Prepara los siguientes elementos:**

- *Jugar con Arduino*

| Seeeduino V4.2                                               | Base Shield                                                  | Grove-Sensor Barómetro SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg" alt="pir" width="400" height="auto" /></p> | <p><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" alt="pir" width="350" height="auto" /></p> |
| [Consigue Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html) | [Consigue Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html) | [Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

- *Jugar con Serie XIAO*

| Seeed Studio Grove Base para XIAO                             | XIAO ESP32-S3                                                | Grove-Sensor Barómetro SPA06-003                             |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div> | <div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div> | <div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/small.jpg" /></div> |
| [Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html) | [Consigue Uno Ahora](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) | [Consigue Uno Ahora](https://www.seeedstudio.com/Grove-Temperature-and-Barometer-Sensor-SPA06-003-p-6441.html) |

### Software

**Paso 1.** Inicia la aplicación Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Descargar Arduino IDE</font></span></strong>
    </a>
</div>

<br></br>

**Paso 2.** Selecciona tu modelo de placa de desarrollo y añádelo al Arduino IDE.

- Si quieres usar **Seeed Studio XIAO SAMD21** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RP2350** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_rp2350_arduino/#setting-up-the-software)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started#software-setup)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32C6** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32c6_getting_started/#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO RA4M1** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/getting_started_xiao_ra4m1/#software-preparation)** para terminar de añadirlo.

- Si quieres usar **Seeed Studio XIAO MG24** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_mg24_getting_started/#software-preparation)** para terminar de añadirlo.

**Paso 3.** Descarga la librería desde Github, y consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_SPA06" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

#### Usar Bus I2C

**Paso 1.** Conecta tu Grove con el controlador

- *Conectar Grove con Arduino*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_arduino.png" /></div>

- *Conectar Grove y XIAO*

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/grove_with_esp32.png" /></div>

Dos combinaciones diferentes, pero usando el mismo código.

:::tip

No toques, agites o dejes este producto en vibración cuando funcione. Esto causará interferencia y afectará la precisión de los datos recopilados.

:::

Esta tabla de conexión se aplica a todas las placas con soporte I2C.

<div className="table-center" style={{ textAlign: 'center' }}>
  <table style={{ borderCollapse: 'collapse', margin: 'auto' }} border="1" cellPadding="6">
    <thead>
      <tr>
        <th>Placas</th>
        <th>Grove-Barometer_Sensor-SPA06-003</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>3.3V</td>
        <td>VCC</td>
      </tr>
      <tr>
        <td>GND</td>
        <td>GND</td>
      </tr>
      <tr>
        <td>SDA</td>
        <td>SDA</td>
      </tr>
      <tr>
        <td>SCL</td>
        <td>SCL</td>
      </tr>
    </tbody>
  </table>
</div>

**Paso 2.** Crea un nuevo sketch de Arduino y pega el código a continuación o abre el código directamente por la ruta: File -> Example ->Seeed Arduino SPA06>Example1_BasicRead

**Paso 3.** Sube el código. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Paso 4.** Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica y altitud.

:::success
El resultado se mostrará en el **Puerto Serie** como se muestra a continuación si todo va bien.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/outcome.png" style={{width:400, height:'auto'}}/></div>

**Aquí está el código:**

```cpp
/*
 * Author: Kennan / Kenneract
 * GitHub: https://github.com/Kenneract/SPL07-003-Arduino-Library
 * Created: Mar.15.2025
 * Updated: Apr.14.2025, V1.0.0
 * Purpose: Example usage for the SPL07-003 sensor library. Connects
 *          to the sensor, configures the measurement and oversampling
 *          rate, sets the SPL07-003 to continuous sampling mode, then
 *          prints pressure/temperature measurements to the serial monitor.
 */

#include <Wire.h>
#include "SPL07-003.h"

// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start I2C
  //Wire.setSDA(PB7); //for STM32F103C8Tx
  //Wire.setSCL(PB6); //for STM32F103C8Tx
  Wire.begin();

  // Connect to SPL07-003
  if (spl.begin(SPL07_ADDR) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()
```

#### Usar Bus SPI

**Paso 1.** Conecta el Sensor Barómetro Grove SPA06-003 con tu controlador

<div align="center"><img width="500" src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/connect_grove_with_xiao.png" /></div>

:::tip

- Para seleccionar el bus SPI, por favor usa un cuchillo afilado o un soldador para cortar las dos almohadillas en el Área de Configuración del Bus de Interfaz.

- No toques, agites o permitas que este producto esté en vibración cuando funcione. Esto causará interferencia y afectará la precisión de los datos recolectados.

:::

**Paso 2.** Crea un nuevo sketch de Arduino y pega los códigos debajo o abre el código directamente por la ruta: File -> Example ->Seeed Arduino SPA06>Example3_SPIRead

**Paso 3.** Sube el código. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

**Paso 4.** Abre el monitor serie para recibir los datos del sensor incluyendo temperatura, valor de presión barométrica y altitud.

:::success
El resultado se mostrará en el **Puerto Serie** como sigue si todo va bien.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/img/spi_outcome.png" style={{width:400, height:'auto'}}/></div>

**Aquí está el código:**

```cpp
#include <SPI.h>
#include "SPL07-003.h"


// Define SPL07-006 I2C address
#define SPL07_ADDR SPL07_ADDR_DEF // Default I2C address (SDO=high)
// #define SPL07_ADDR SPL07_ADDR_ALT // Alternate I2C address (SDO=low)
#define SS 1 //Define your own SPI pins

// Create SPL07-003 sensor instance
SPL07_003 spl;

//HardwareSerial SerialOut(PA10, PA9); //for STM32F103C8Tx

// Runs at startup
void setup() {

  // Begin Serial
  Serial.begin(115200);

  // Configure & start SPI
  SPI.begin();

  // Connect to SPL07-003
  if (spl.begin(SS,&SPI) == false) {
    Serial.println("Error initializing SPL07-003 :(");
    while (1) {}
  }//if
  Serial.println("Connected to SPL07-003! :)");

  // Set pressure & temperature sampling settings
  spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES);
  spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE);

  // Set SPL07-003 to continuous measurements
  spl.setMode(SPL07_CONT_PRES_TEMP);

}//setup()


// Runs continuously
void loop() {

  // Wait for available reading
  if (spl.pressureAvailable() || spl.temperatureAvailable()) {
    // Read latest values
    double pres = spl.readPressure();
    double temp = spl.readTemperature();
    double altitude = spl.calcAltitude();
    // Print to serial
    Serial.print("Pres: ");
    Serial.print(pres, 3);
    Serial.print(" Pa, Temp: ");
    Serial.print(temp, 3);
    Serial.print(" C, Altitude: ");
    Serial.print(altitude, 3);
    Serial.println(" m");
  }//if

}//loop()

```

#### Función

Las siguientes funciones se utilizan en el código de ejemplo anterior.

```cpp
spl.begin(SPL07_ADDR) / spl.begin(SS,&SPI)
```

Inicializa el sensor SPL07-003. Devuelve false si el sensor no se encuentra en el bus.

```cpp
spl.setPressureConfig(SPL07_4HZ, SPL07_32SAMPLES)
```

Configura el sensor de presión con:

- Velocidad de datos de salida de 4 Hz
- Promedio de 32 muestras para reducción de ruido

Un mayor número de muestras mejora la precisión pero aumenta el tiempo de respuesta.

```cpp
spl.setTemperatureConfig(SPL07_4HZ, SPL07_1SAMPLE)
```

Configura el sensor de temperatura con:

- Tasa de actualización de 4 Hz
- Promedio de 1 muestra (respuesta más rápida, menos suavizado)

```cpp
spl.setMode(SPL07_CONT_PRES_TEMP)
```

Configura el SPL07-003 en modo de medición continua de presión y temperatura, por lo que actualiza los datos automáticamente sin activación manual.

```cpp
spl.pressureAvailable(), spl.temperatureAvailable()
```

Verifica si una nueva medición de presión o temperatura está disponible desde el sensor. Estas devuelven true cuando hay datos frescos listos para leer.

```cpp
spl.readPressure()
```

Lee el último valor de presión del sensor en Pascales (Pa).

```cpp
spl.readTemperature()
```

Lee la temperatura actual en grados Celsius (°C).

```cpp
spl.calcAltitude()
```

Estima la altitud (en metros) basándose en la lectura de presión actual utilizando el modelo de atmósfera estándar.
Útil en aplicaciones como estimación de altitud barométrica para drones o estaciones meteorológicas.

## Recursos

- **[KiCAD]** [Grove-Barometer Sensor SPA06-003 SCH&PCB](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/SCH&PCB.zip)
- **[Hoja de datos]** [Hoja de datos SPA06-003](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-SPA06-003/res/Datasheet.PDF)
- **[Referencias]** [Guía I<sup>2</sup>C para Arduino](https://www.arduino.cc/en/Reference/Wire)

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
