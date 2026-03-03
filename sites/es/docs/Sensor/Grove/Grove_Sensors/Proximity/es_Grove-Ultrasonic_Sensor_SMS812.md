---
description: Comenzando con el Sensor Ultrasónico Grove (SMS812)
title: Sensor Ultrasónico Grove (SMS812)
keywords:
- ultrasonic
- sms812
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_ultrasonic_sensor_sms812
sku: 101021097
last_update:
  date: 08/16/2023
  author: ZouXiong.Xiao
---

# Sensor Ultrasónico Grove (SMS812)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/1.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Introducción

El Sensor Ultrasónico Grove (SMS812) es un sensor de medición de distancia miniatura de ultra bajo consumo. El Sensor Ultrasónico Grove (SMS812) está basado en el principio ultrasónico de tiempo de vuelo (ToF), y está diseñado con acústica, electricidad y algoritmos relacionados. Se logra una medición de distancia de alta precisión a través de la diferencia de energía de las señales de eco ultrasónico en la superficie de diferentes materiales, y proporciona información de distancia a nivel de milímetros y su valor de intensidad de energía de eco, y también puede proporcionar bits de bandera para distinguir materiales blandos y duros. Además, puede ser utilizado para robots de limpieza para identificar materiales del suelo y medir distancias dentro de un cierto rango. Es de tamaño pequeño y fácil de instalar.

### Aplicación

- El robot de limpieza reconoce los materiales blandos y duros en el suelo
- Robot de servicio doméstico o aspiradora robot para obtener información del suelo
- Detección de palanca en impresora 3D

### Características

- Precisión de medición de distancia a nivel de milímetros, gran estabilidad de medición
- Reconoce materiales blandos y duros y proporciona información I/O
- La distancia de detección hasta 20-50mm y el área ciega es pequeña
- Soporte para Arduino

### Descripción del Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/2.png" style={{width:600, height:'auto'}}/></div>

1. La estructura de este sensor es cilíndrica y está hecha por moldeo por inyección de plástico.
2. Las dimensiones en la figura anterior están en milímetros.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/3.png" style={{width:600, height:'auto'}}/></div>

Esta interfaz es un conector PH1.0-4P. Y la definición del pin es la siguiente:

<div class="table-center">
    <table align="center">
        <tbody>
            <tr>
                <td align="center">Pin</td>
                <td align="center">Tipo</td>
                <td align="center">Descripción</td>
                <td align="center">Predeterminados</td>
                <td align="center">Flujo de datos</td>
            </tr>
            <tr>
                <td align="center">GND</td>
                <td align="center">Fuente de alimentación</td>
                <td align="center">Negativo</td>
                <td align="center">0V</td>
                <td align="center"/>
            </tr>
            <tr>
                <td align="center">Tx</td>
                <td align="center">Salida</td>
                <td align="center">Salida del puerto serie del sistema</td>
                <td align="center"/>
                <td align="center">Ladar a Periféricos</td>
            </tr>
            <tr>
                <td align="center">Rx</td>
                <td align="center">Entrada</td>
                <td align="center">Entrada del puerto serie del sistema</td>
                <td align="center"/>
                <td align="center">Periféricos a Ladar</td>
            </tr>
            <tr>
                <td align="center">VCC</td>
                <td align="center">Fuente de alimentación</td>
                <td align="center">Positivo</td>
                <td align="center">3.3V</td>
                <td align="center"/>
            </tr>
        </tbody></table>
</div>

## Comenzando

### Preparación del Hardware

Esta rutina introducirá el uso de este radar ultrasónico utilizando el XIAO SAMD21 como control maestro. Para la conveniencia del cableado, también utilizaremos la placa de expansión Grove. Puedes elegir una según tus necesidades reales.

<div class="table-center">
 <table align="center">
  <tr>
   <th>XIAO SAMD21</th>
   <th>Base Grove para XIAO</th>
            <th>Sensor Ultrasónico Grove (SMS812)</th>
  </tr>
        <tr>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png" style={{width:250, height:'auto'}}/></div></td>
            <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/4.jpg" style={{width:250, height:'auto'}}/></div></td>
        </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="/es/grove_ultrasonic_sensor_sms812" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Luego, conecta el radar ultrasónico a la interfaz UART del XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/5.jpg" style={{width:700, height:'auto'}}/></div>

## Descripción General de la Librería de Arduino

:::tip
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) o veas el tutorial simple a continuación:
:::

El botón de abajo te llevará directamente a nuestra librería de programas de Arduino para el Sensor Ultrasónico Grove (SMS812).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/SeeedStudio_SMS812_Sensor/tree/main" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la Librería</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

### Función

Antes de comenzar a desarrollar un sketch, veamos las funciones disponibles de la librería.

- `void setIOMode()` —— Esta función se usa para configurar el radar en modo IO, que se utiliza principalmente para detectar el material objetivo.

- `void setUARTMode()` —— Esta función se usa para configurar el radar en modo UART, el radar en modo UART reportará activamente información de distancia y material.

- `void setUARTREQMode()` —— Esta función se usa para configurar el radar en modo UART REQ, en el cual la información de distancia y material solo puede consultarse enviando un comando de consulta.

- `void checkUARTREQ(int delaytime = 0, bool showSwitch = true)` —— Esta función se usa en modo UART REQ para consultar el material detectado y la distancia.

    **Parámetros de Entrada**

  - `delaytime`: El valor predeterminado es 0. Este parámetro controla el tiempo en milisegundos para que se emita el comando de consulta.
  - `showSwitch`: El predeterminado está activado. Este parámetro controla si se imprime la trama de datos original.

- `bool getFrame(bool showSwitch = true)` —— Esta función se usa para obtener la trama de datos original.

    **Parámetros de Entrada**

  - `showSwitch`: El predeterminado está activado. Este parámetro controla si se imprime la trama de datos original.

- `bool parseDatagram(bool showSwitch = false)` —— Esta función se usa para analizar la trama de datos original.

    **Parámetros de Entrada**

  - `showSwitch`: El predeterminado está desactivado. Este parámetro controla si se imprime la trama de datos original.

### Instalación

Ya que has descargado la Librería zip, abre tu Arduino IDE, haz clic en **Sketch > Include Library > Add .ZIP Library**. Elige el archivo zip que acabas de descargar, y si la librería se instala correctamente, verás **Library added to your libraries** en la ventana de notificación. Lo que significa que la librería se instaló exitosamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

## Ejemplo XIAO

**Paso 1.** Necesitas instalar un software de Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Paso 2.** Ejecuta la aplicación Arduino.

<div align="center"><img width ="{700}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Paso 3.** Selecciona tu modelo de placa de desarrollo y añádelo al IDE de Arduino.

- Si quieres usar **Seeeduino V4.2** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/)** para completar la adición.

- Si quieres usar **XIAO SAMD21(Seeeduino XIAO)** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software)** para completar la adición.

- Si quieres usar **XIAO RP2040** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO-RP2040-with-Arduino/#software-setup)** para completar la adición.

- Si quieres usar **XIAO nRF52840** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup)** para completar la adición.

- Si quieres usar **XIAO ESP32C3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_ESP32C3_Getting_Started/#software-setup)** para completar la adición.

- Si quieres usar **XIAO ESP32S3** para las rutinas posteriores, por favor consulta **[este tutorial](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started#software-preparation)** para completar la adición.

:::caution
Para **XIAO nRF52840**, por favor selecciona **Seeed nRF52 mbed-enabled Boards**, de lo contrario puede reportarse un error al ejecutar programas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png" style={{width:600, height:'auto'}}/></div>

:::

**Paso 4.** Instala la biblioteca de código de Arduino.

### Demo 1: Uso del Modo IO

Este ejemplo te guiará a través del proceso de imprimir los bits de bandera para distinguir materiales blandos y duros. Aquí está el código de referencia para arduino:

```c
#include "sms812.h"

const int radarPin = A7;

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A6
//#define TX_Pin A7

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  pinMode(radarPin, INPUT);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setIOMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  int value = analogRead(radarPin); // Read level status of D7 pin
  Serial.println(value);
  delay(500);
}

```

Después de activar el modo IO, debes saber que si el sensor US5 reconoce el material blando, su pin TX enviará los bits de bandera `0x01` a la placa, de lo contrario, el material duro es `0x00`, por lo que debes configurar el `radarPin` como **A0** (que conecta el pin TX del sensor) o el pin que soporte entradas analógicas.

El valor alto por encima de 1000 significa reconocer el material duro, y el valor por debajo de 20 significa reconocer el material blando o aire.

Entonces, cuando muevas el sensor frente a la pared... verás la salida serie como se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/6.png" style={{width:700, height:'auto'}}/></div>

### Demo 2: Uso del Modo UART

Para el modo UART, el radar emite mediciones a una velocidad de 100Hz. El formato del telegrama de datos se muestra en la tabla a continuación.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Trama de encabezado</th>
   <th>Trama de comando</th>
            <th>Trama de longitud de datos</th>
            <th>Trama de datos</th>
            <th>Trama de suma de verificación</th>
  </tr>
  <tr>
   <td align="center">0xAA 0xAA</td>
   <td align="center">0xFD</td>
            <td align="center">0x04</td>
            <td align="center">--</td>
            <td align="center">CS</td>
  </tr>
 </table>
</div>

Los bits de datos ocupan 4 Bytes. El primer 1 Byte es el bit de bandera del material, 0 significa material duro y 1 significa material blando. Para materiales blandos, será imposible medir la distancia. Luego está el valor de distancia, que ocupa 2 Bytes en milímetros. El último 1 Byte es el valor de intensidad, indicando la fuerza de la señal ultrasónica recibida.

<div class="table-center">
 <table align="center">
  <tr>
   <th>Bit de bandera del material</th>
   <th>Valor de distancia</th>
            <th>Intensidad</th>
  </tr>
  <tr>
   <td align="center">1 Byte</td>
   <td align="center">2 Byte</td>
            <td align="center">1 Byte</td>
  </tr>
 </table>
</div>

En este ejemplo, usaremos las funciones de la biblioteca para analizar las tramas de datos recibidas e imprimir todos los datos de características reportados por el Sensor activo a través del puerto serie.

El **puerto serie por hardware** en la placa XIAO SAMD21 es el pin de interfaz UART **A6** y **A7**. También puedes usar cualquier dos pines como el puerto serie por software.

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  
  Serial1.begin(115200);
  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.
  Serial.println("Ready");

  radar.setUARTMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  
  // Prints only the acquired raw data frames
//   radar.getFrame();
//   delay(1);                //Add time delay to avoid program jam

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.parseDatagram(true)){
    if(radar.material == 0x00){
      Serial.println("No blankets detected.");
      Serial.print("The measured distance is: ");
      Serial.print(radar.distance);
      Serial.println(" mm");
      Serial.print("The ultrasonic signal strength is: ");
      Serial.println(radar.strength);
    }
  }
  delay(1);                //Add time delay to avoid program jam
}
```

Después de cargar el código a la placa, mueves el sensor frente al **material duro** (el material blando no generará los datos analizados), puedes ver los datos analizados a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

### Demo 3: Uso del Modo UART REQ

En este ejemplo, establecemos el parámetro delaytime en 1000, lo que significa que sondeamos durante 1 segundo para enviar una consulta de comando. Y el sensor retroalimentará el resultado de medición de distancia mediante el mensaje sin procesar, cuya longitud es de 9 bytes.

```c
#include "sms812.h"

//#include <SoftwareSerial.h>
// Choose any two pins that can be used with SoftwareSerial to RX & TX
//#define RX_Pin A2
//#define TX_Pin A3

//SoftwareSerial mySerial = SoftwareSerial(RX_Pin, TX_Pin);

// we'll be using software serial
//SMS812_Sensor radar = SMS812_Sensor(&mySerial);

// can also try hardware serial with
SMS812_Sensor radar = SMS812_Sensor(&Serial1);

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(115200);
  pinMode(A7, INPUT);

  //  mySerial.begin(115200);

  while(!Serial);   //When the serial port is opened, the program starts to execute.

  Serial.println("Ready");

  radar.setUARTREQMode();
}

void loop() {
  // put your main code here, to run repeatedly:
  radar.checkUARTREQ(1000, true);      // Check radar information every second. And turn on raw data frame display.

  // Parses the contents of the data frame. If the function parseDatagram is given a true argument, the raw data frame display is enabled.
  if(radar.material == 0x00){
    Serial.println("No blankets detected.");
    Serial.print("The measured distance is: ");
    Serial.print(radar.distance);
    Serial.println(" mm");
    Serial.print("The ultrasonic signal strength is: ");
    Serial.println(radar.strength);
  }
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ultrasonic-sms812/7.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Manual de Desarrollo Alpha V0.2.0](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_Development_Manual_Alpha_V0.2.0.pdf)
- **[PDF]** [Hoja de Datos Alpha V0.1.3](https://files.seeedstudio.com/wiki/ultrasonic-sms812/sms812_DataSheet_Alpha_V0.1.3.pdf)

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
