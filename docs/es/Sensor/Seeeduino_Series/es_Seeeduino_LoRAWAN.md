---
description: Seeeduino LoRaWAN
title: Seeeduino LoRaWAN
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_LoRAWAN
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/cover.png)

Seeeduino LoRaWAN es una placa de desarrollo Arduino con protocolo LoRaWan integrado, a través de la cual puedes comenzar rápidamente a experimentar las ventajas de LoRa en el campo del IoT. Basado en el módulo de comunicación RHF76-052AM, Seeeduino LoRaWAN es compatible con LoRaWAN Clase A/C y soporta una variedad de frecuencias de comunicación.

Los 4 conectores estándar Grove integrados permiten que Seeeduino LoRaWan se conecte convenientemente con cientos de sensores y actuadores Grove de Seeedstudio, como resultado, los usuarios pueden enfocarse más en la aplicación en sí misma sin preocuparse por el problema de compatibilidad entre diferentes módulos. Además, la placa tiene integrado un chip de gestión de batería de litio que permite que la placa se cargue por interfaz USB. En modo de bajo consumo, una batería de litio completamente cargada puede alimentar la placa durante varios meses.

Si quieres construir una aplicación IoT rápidamente, Seeeduino LoRaWAN es tu mejor opción.

<iframe width={800} height={450} src="https://www.youtube.com/embed/4df5kaaKa6I" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

|Versión del Producto|Fecha de Lanzamiento | Cómo Comprar|
|-------|-------------|----------|
|Seeeduino LoRaWAN |20 Dic, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html)|
|Seeeduino LoRaWAN W/GPS |20 Dic, 2016|[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png)](https://www.seeedstudio.com/Seeeduino-LoRaWAN-W%2FGPS-p-2781.html)|

## Cambio de Versión

|Elemento| Seeeduino LoRaWAN W/GPS | Seeeduino LoRaWAN |
|---|---|---|
|Chip Principal|ATSAMD21|ATSAMD21|
|Comunicación GPS|√|x|
|modular|RHF76-052DM|RHF76-052AM|
|Tiempo de Lanzamiento del Módulo|2018|2018|


:::note
    Por favor actualiza el firmware cuando lo uses por primera vez. Por favor siempre conecta una batería Lipo de 3.7V en caso de que la alimentación USB no sea suficiente.
:::

:::tip
    Seeeduino LoRaWAN W/GPS está compuesto por un módulo GPS.
:::

## Características

* Corriente mínima (batería lipo 3.7V) - 2mA
* Corriente mínima (batería lipo 3.7V y remover LED PWR) - 80 uA

**Arduino/Procesador**

* ATSAMD21G18 @ 48MHz con lógica/alimentación de 3.3V
* Compatible con Arduino (basado en bootloader Arduino Zero)
* Integrado con chip de gestión de batería de litio y LED indicador de estado
* 20 GPIOs
* 4 conectores Grove integrados
* 18 x pines PWM
* 6 x entradas analógicas
* 1 x salida analógica (A0)
* Regulador de 3.3V con salida de 200mA
* Botón de reset

**LoRaWAN/RHF76-052**

* Corriente de reposo de 1.45uA en modo WOR (Especificación de los módulos, no de la placa)
* Alto presupuesto de enlace de 160dB. Sensibilidad de -140dBm y potencia de salida de 19dBm.
* Banda dual, 434/470MHz y 868/915MHz
  * 19dBm@434MHz/470MHz
  * 14dBm@868MHz/915MHz
* Soporte para protocolo LoRaWAN, Clase A/C
* Comunicación de ultra largo alcance
* Consumo de energía ultra bajo
* Actualización de firmware
* Tamaño pequeño: 23mm X 28mm con paquete SMT de 33 pines

:::warning
    A diferencia de la mayoría de placas Arduino & Genuino, la Zero funciona a 3.3V. El voltaje máximo que los pines I/O pueden tolerar es 3.3V. Aplicar voltajes superiores a 3.3V a cualquier pin I/O podría dañar la placa.
:::

## Especificación

| Elemento|Valor|
|--------------|-------------------------------------|
|Microcontrolador |ATSAMD21G18, ARM Cortex M0+ de 32-Bit |
|Voltaje de Operación |3.3V|
|Pines I/O Digitales |20|
|Pines PWM |Todos excepto los pines 2 y 7|
|UART |2 (Nativo y Programación)|
|Pines de Entrada Analógica| 6, canales ADC de 12-bit|
|Pines de Salida Analógica |1, DAC de 10-bit|
|Interrupciones Externas |Todos los pines excepto el pin 4|
|Corriente DC por Pin I/O |7 mA|
|Memoria Flash |256 KB|
|SRAM |32 KB|
|EEPROM |Ninguna|
|Velocidad de Reloj |48 MHz|
|Longitud |68 mm|
|Ancho |53 mm|
|Peso |19.6g(sin GPS), 19.9(con GPS)|

## Ideas de Aplicación

* Internet de las Cosas
* Casa Inteligente
* Seguridad
* Red Inteligente
* Granja Inteligente
* Parque Inteligente

:::tip
    Usa módulos Grove para expandir tu aplicación
:::
Hay 4 conectores Grove en la placa. Si es la primera vez que escuchas sobre Grove, por favor visita [Grove System](https://wiki.seeedstudio.com/es/Grove_System/) para más detalles.
En resumen, Groves son cientos de sensores en estilo estándar, que consiste en sensores, actuadores, pantallas así como comunicación.

## Descripción General del Hardware

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/hw_LoRa.png)

* **1.** Micro USB - Programación y suministro de energía a la placa
* **2.** Conectores Grove
* **3.** Entrada de batería Lipo JST2.0 (3.7V) y led de estado de carga
* **4.** Botón DFU - Botón de modo firmware
* **5.** Botón Reset
* **6.** Pinout Arduino
* **7.** Pines ICSP
* **8.** Led de modo firmware
* **9.** Antena de alambre
* **A.** Antena uFL
* **B.** Módulo RF - RHF76-052AM
* **C.** Procesador ARM Cortex M0 - ATSAMD21G18
* **D.** LEDs
  * ***RX/TX*** - parpadean cuando hay datos en UART(desde/hacia USB)
  * ***L*** - un led conectado a D13
  * ***PWR*** - energía

:::tip
    Si quieres usar los 4 conectores Grove integrados, por favor usa digitalWrite(38, HIGH) para abrir VCC. De lo contrario no puedes proporcionar energía a los módulos Grove.
:::
**Mapa de Pines**

|Nombre Pin|Núm GPIO|Interrupción Externa|PWM|Entrada Analógica|Salida Analógica|Función|
|--------|--------|-----------|---|---------|----------|--------|
|0       |#0      |SÍ        |SÍ|         |          | RX(Serial)|
|1       |#1      |SÍ        |SÍ|         |          | TX(Serial)|
|2       |#2      |SÍ        |   |         |          |        |
|3       |#3      |SÍ        |SÍ|         |          |        |
|4       |#4      |           |SÍ|         |          |        |
|5       |#5      |SÍ        |SÍ|         |          |        |
|6       |#6      |SÍ        |SÍ|         |          |        |
|7       |#7      |SÍ        |   |         |          |        |
|8       |#8      |SÍ        |SÍ|         |          |        |
|9       |#9      |SÍ        |SÍ|         |          |        |
|10      |#10     |SÍ        |SÍ|         |          |        |
|11      |#11     |SÍ        |SÍ|         |          |        |
|12      |#12     |SÍ        |SÍ|         |          |        |
|13      |#13     |SÍ        |SÍ|         |          |        |
|SDA     |#20     |SÍ        |SÍ|         |          |        |
|SCL     |#21     |SÍ        |SÍ|         |          |        |
|A0      |#A0     |SÍ        |SÍ|SÍ      |SÍ       |        |
|A1      |#A1     |SÍ        |SÍ|SÍ      |          |        |
|A2      |#A2     |SÍ        |SÍ|SÍ      |          |        |
|A3      |#A3     |SÍ        |SÍ|SÍ      |          |        |
|A4      |#A4     |SÍ        |SÍ|SÍ      |          |Voltaje de Batería|
|A5      |#A5     |SÍ        |SÍ|SÍ      |          |Estado de Carga|

:::note
    Todos los pines pueden actuar como Entrada y Salida Digital
:::

## Primeros Pasos

:::note
Si esta es tu primera vez usando Arduino, te recomendamos encarecidamente que consultes [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino)
:::

Primero necesitas instalar el IDE de Arduino más reciente, y [AÑADIR Seeeduino LoRa a tu IDE de Arduino](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/).

## Instalar el Controlador (Para Windows)

Cuando insertes la placa por primera vez, deberías obtener un dispositivo COM USB llamado Seeeduino LoRaWAN que necesita instalar un controlador. Haz clic en el botón de abajo para descargar el controlador para la placa.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/driver.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/driver.zip)

Para asegurarte de que el controlador se instaló correctamente, abre tu Administrador de Dispositivos para ver si existe **Seeeduino LoRaWAN**.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/device_manager.png)

## 1. Blink

Ahora podemos subir nuestra primera demostración - Blink a Seeeduino LoRaWAN.

Abre tu IDE de Arduino y haz clic en **File > Examples > 01.Basics > Blink** para abrir el sketch o copia el código de abajo:

```c
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin 13 as an output.
  pinMode(13, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(13, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);              // wait for a second
  digitalWrite(13, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);              // wait for a second
}
```

Y luego,

* Haz clic en **Tools > Board > Seeeduino LoRaWAN**

Si no puedes encontrar el Seeeduino LoRaWAN, por favor revisa [Cómo agregar placas Seeed al IDE de Arduino](https://wiki.seeedstudio.com/es/Seeed_Arduino_Boards/)

* Haz clic en **Tools > Port** para seleccionar el número de puerto correcto. (*No elijas COM1*)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink1.png)

Luego haz clic en el botón **Upload** en la parte superior izquierda del IDE de Arduino, segundos después el sketch se cargó exitosamente.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink2.png)

Si la carga es exitosa, deberías ver alguna información en rojo y por favor observa el LED integrado, está parpadeando.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/blink3.png)

## 2. Batería

Puedes alimentar la placa mediante una batería Lipo de 3.7V. Hay un cable JST2.0 incluido, úsalo si no puedes conseguir una batería con conector JST2.0.

:::warning
    Asegúrate de que el extremo positivo y negativo de tu batería esté conectado correctamente, de lo contrario la placa puede dañarse.
:::
El pin de estado de carga y el pin positivo de la batería han sido conectados a A4 y A5, lo que te permite detectar el estado de carga y medir el voltaje de la batería mediante código.

Copia y carga el código de abajo para detectar el estado de la batería.

```cpp
// battey of Seeeduino LoRaWAN

const int pin_battery_status  = A5;
const int pin_battery_voltage = A4;

void setup() {
    SerialUSB.begin(115200);
    pinMode(pin_battery_status, INPUT);
}

void loop() {

    int a = analogRead(pin_battery_voltage);
    float v = a/1023.0*3.3*11.0;        // there's an 1M and 100k resistor divider
    SerialUSB.print(v, 2);
    SerialUSB.print('\t');
    SerialUSB.println(digitalRead(pin_battery_status));

    delay(1000);
}
```

:::note
    El estado de carga devuelve 0 mientras está cargando, devuelve 1 cuando la carga está completa o no hay batería insertada.
:::

## 3. Ejemplo de Envío y Recepción

Hay una biblioteca bien escrita para los módulos LoRaWAN, para aplicaciones simples ni siquiera necesitas saber mucho sobre el protocolo de LoRa, que es complejo y difícil de leer.
Y ten en cuenta que aún necesitas algunos conocimientos sobre el protocolo LoRa si quieres una aplicación avanzada.
No necesitas descargar la biblioteca, ya está incluida en el paquete. Puedes abrirla en **Archivo > Ejemplos > LoRaWAN**. Esos ejemplos incluyen:

* p2p-tx
* p2p-rx
* ABP
* OTAA

Necesitas 2 piezas de Seeeduino LoRaWAN para completar este ejemplo, una para enviar y otra para recibir.

### 3.1 Envío P2P

Abre tu Arduino IDE y haz clic en **Archivo > Ejemplos > LoRaWAN > p2p_tx** para abrir el sketch o puedes copiar el código a continuación.
Este sketch transmitirá la cadena "Hello World!" cada 3000 ms.

```
// Seduino LoRaWAN - TX example
#include <LoRaWan.h>

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    lora.transferPacketP2PMode("Hello World!");
    SerialUSB.println("Send string.");
    delay(3000);
}
```

### 3.2 Recepción P2P

Abre tu Arduino IDE y haz clic en **File > Examples > LoRaWAN > p2p_rx** para abrir el sketch o puedes copiar el código a continuación.

```
// Seduino LoRaWAN - RX example
#include <LoRaWan.h>

unsigned char buffer[128] = {0, };

void setup(void)
{
    SerialUSB.begin(115200);
    lora.init();
    lora.initP2PMode(433, SF12, BW125, 8, 8, 20);
}

void loop(void)
{
    short length = 0;
    short rssi = 0;

    memset(buffer, 0, 128);
    length = lora.receivePacketP2PMode(buffer, 128,  &rssi, 1);

    if(length)
    {
        SerialUSB.print("Length is: ");
        SerialUSB.println(length);
        SerialUSB.print("RSSI is: ");
        SerialUSB.println(rssi);
        SerialUSB.print("Data is: ");
        for(unsigned char i = 0; i < length; i ++)
        {
            SerialUSB.print("0x");
            SerialUSB.print(buffer[i], HEX);
            SerialUSB.print(" ");
        }
        SerialUSB.println();
    }
}
```

Después de que ambos sketches estén bien cargados, abre el monitor serie de la placa receptora, verifica si puedes obtener algunos datos como se muestra a continuación.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/monitor_rx.png)

### 3.3 ABP

* Paso 1. Por favor consulta [LoRa/LoRaWAN Gateway Kit](https://wiki.seeedstudio.com/es/LoRa_LoRaWan_Gateway_Kit/) para configurar primero el gateway.  
* Paso 2. Conecta el [Grove-Temperature_and_Humidity_Sensor_Pro](https://wiki.seeedstudio.com/es/Grove-Temperature_and_Humidity_Sensor_Pro/) al puerto D2 del shield base.
* Paso 3. Conecta el shield base al Seeeduino Lorawan.
* Paso 4. Descarga la [Librería DHT](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/DHT.zip) y descomprímela en la carpeta de librerías de arduino.
* Paso 5. Copia el código de abajo al IDE de arduino y súbelo.

```cpp

#include <LoRaWan.h>
#include "DHT.h"

#define DHTPIN            2   
#define DHTTYPE           DHT22
DHT dht(DHTPIN, DHTTYPE);
unsigned char data[2] = {1, 2};
char buffer[256];

void setup(void)
{     
    dht.begin();
    
    SerialUSB.begin(115200);
    //while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWABP);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 867.7);
    lora.setChannel(1, 867.9);
    lora.setChannel(2, 868.8);
    
    lora.setReceiceWindowFirst(0, 867.7);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
}

void loop(void)
{   
    bool result = false;

    delay(2000);
    int h = dht.readHumidity();
    int t = dht.readTemperature();
    
    //result = lora.transferPacket("Hello World!", 10);
    result = lora.transferPacket(data, 2, 10);
    data[0] = h;
    data[1] = t;
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}

```

* Paso 6. Para servidor local, haz clic en Application->Seeed(el nombre de la Aplicación que acabas de añadir)->View application data, verás los datos que acabas de enviar desde el Seeeduino_LoRAWAN. Para Loriot Server, ve a Dashboard -> Applications -> SampleApp ->Device, haz clic en el Node Device EUI o DevAddr, encontrarás los datos que acabas de enviar aquí.

### 3.4 OTAA

* Paso 1. Por favor consulta el [Manual de Usuario](https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/res/RHF-UM01649-IoT-Discovery-User-Manual-seeed-v2.1.pdf) Sesión 3.2.3 para configurar el gateway.
* Paso 2. Para seeeduino Lorawan, por favor abre tu Arduino IDE y haz clic en **File > Examples > LoRaWAN > OTAA** y consulta el código.

```cpp
#include <LoRaWan.h>


unsigned char data[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 0xA,};
char buffer[256];


void setup(void)
{
    SerialUSB.begin(115200);
    while(!SerialUSB);
    
    lora.init();
    
    memset(buffer, 0, 256);
    lora.getVersion(buffer, 256, 1);
    SerialUSB.print(buffer); 
    
    memset(buffer, 0, 256);
    lora.getId(buffer, 256, 1);
    SerialUSB.print(buffer);
    
    lora.setKey("2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C", "2B7E151628AED2A6ABF7158809CF4F3C");
    
    lora.setDeciveMode(LWOTAA);
    lora.setDataRate(DR0, EU868);
    
    lora.setChannel(0, 868.1);
    lora.setChannel(1, 868.3);
    lora.setChannel(2, 868.5);
    
    lora.setReceiceWindowFirst(0, 868.1);
    lora.setReceiceWindowSecond(869.5, DR3);
    
    lora.setDutyCycle(false);
    lora.setJoinDutyCycle(false);
    
    lora.setPower(14);
    
    while(!lora.setOTAAJoin(JOIN));
}

void loop(void)
{   
    bool result = false;
    
    result = lora.transferPacket("Hello World!", 10);
    //result = lora.transferPacket(data, 10, 10);
    
    if(result)
    {
        short length;
        short rssi;
        
        memset(buffer, 0, 256);
        length = lora.receivePacket(buffer, 256, &rssi);
        
        if(length)
        {
            SerialUSB.print("Length is: ");
            SerialUSB.println(length);
            SerialUSB.print("RSSI is: ");
            SerialUSB.println(rssi);
            SerialUSB.print("Data is: ");
            for(unsigned char i = 0; i < length; i ++)
            {
                SerialUSB.print("0x");
                SerialUSB.print(buffer[i], HEX);
                SerialUSB.print(" ");
            }
            SerialUSB.println();
        }
    }
}
```

## 4. Datos GPS

:::note
    Este capítulo funciona solo con Seeeduino LoRaWAN W/GPS.
:::

### 4.1 NMEA

* Paso 1. Copia el código de abajo a tu Seeeduino LoRaWAN W/GPS.

```cpp
void setup()
{
    Serial2.begin(9600);
    Serial.begin(115200);
}
 
void loop()
{
    while(Serial2.available())
    {
        Serial.write(Serial2.read());
    }
    while(Serial.available())
    {
        Serial2.write(Serial.read());
    }
}
```

* Paso 2. Abre el Monitor Serie y obtendrás datos del GPS.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/gps.png)

### 4.2 Lat y Lng

Gracias a **Todd Krein** por compartir el ejemplo en Github. Por favor descarga la [librería TinyGPS++](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/TinyGPSPlus-master.zip) y luego copia el código de abajo al Seeeduino Lorawan.

```cpp
#define USE_GPS 1
 
#include "LoRaWan.h"
 
#ifdef USE_GPS
#include "TinyGPS++.h"
TinyGPSPlus gps;
#endif
 
 
void setup(void)
{
 
    char c;
#ifdef USE_GPS
    bool locked;
#endif
 
    SerialUSB.begin(115200);
    while(!SerialUSB);
 
    lora.init();
    lora.setDeviceReset();
 
#ifdef USE_GPS
    Serial2.begin(9600);     // open the GPS
    locked = false;
 
    // For S&G, let's get the GPS fix now, before we start running arbitary
    // delays for the LoRa section
 
    while (!gps.location.isValid()) {
      while (Serial2.available() > 0) {
        if (gps.encode(c=Serial2.read())) {
          displayInfo();
          if (gps.location.isValid()) {
//            locked = true;
            break;
          }
        }
//        SerialUSB.print(c);
      }
 
//      if (locked)
//        break;
 
      if (millis() > 15000 && gps.charsProcessed() < 10)
      {
        SerialUSB.println(F("No GPS detected: check wiring."));
        SerialUSB.println(gps.charsProcessed());
        while(true);
      } 
      else if (millis() > 20000) {
        SerialUSB.println(F("Not able to get a fix in alloted time."));     
        break;
      }
    }
#endif
}
 
 
void loop(void)
{
//displayInfo();
//delay(1000);
}
 
void displayInfo()
{
  SerialUSB.print(F("Location: ")); 
  if (gps.location.isValid())
  {
    SerialUSB.print(gps.location.lat(), 6);
    SerialUSB.print(F(","));
    SerialUSB.print(gps.location.lng(), 6);
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }
 
  SerialUSB.print(F("  Date/Time: "));
  if (gps.date.isValid())
  {
    SerialUSB.print(gps.date.month());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.day());
    SerialUSB.print(F("/"));
    SerialUSB.print(gps.date.year());
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }
 
  SerialUSB.print(F(" "));
  if (gps.time.isValid())
  {
    if (gps.time.hour() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.hour());
    SerialUSB.print(F(":"));
    if (gps.time.minute() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.minute());
    SerialUSB.print(F(":"));
    if (gps.time.second() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.second());
    SerialUSB.print(F("."));
    if (gps.time.centisecond() < 10) SerialUSB.print(F("0"));
    SerialUSB.print(gps.time.centisecond());
  }
  else
  {
    SerialUSB.print(F("INVALID"));
  }
 
  SerialUSB.println();
}

```

## 5. Bajo Consumo

La corriente mínima es de 80uA (para Seeeduino LoRaWAN) bajo nuestras pruebas.
Por favor sigue los pasos a continuación.

1. Remueve el LED PWR (Si no remueves este LED, la corriente será > 2mA)
2. Remueve el LED CHG
3. Sube el código a continuación a tu placa.

```
#include <LoRaWan.h>
#include <EnergySaving.h>

EnergySaving nrgSave;

void blink()
{
    for(unsigned char i = 0; i < 5; i ++)
    {
        digitalWrite(13,HIGH);
        delay(500);
        digitalWrite(13,LOW);
        delay(500);
    }
}

void setup()
{
    for(unsigned char i = 0; i < 26; i ++)      // important, set all pins to HIGH to save power
    {
        pinMode(i, OUTPUT);
        digitalWrite(i, HIGH);
    }

    lora.init();
    blink();    
    lora.setDeviceLowPower();
    blink();    
    nrgSave.begin(WAKE_EXT_INTERRUPT, 7, dummy);    // buton on D7 to wake up the board
    nrgSave.standby();
}

void loop()
{
    blink();
    nrgSave.standby();
}

void dummy(void)
{
    // do something
}

// END File
```

## 6. Actualizar firmware

Si quieres verificar la versión de tu placa, por favor sube el siguiente código a tu placa.

```cpp
void setup()
{
    Serial1.begin(9600);
    SerialUSB.begin(115200);
}

void loop()
{
    while(Serial1.available())
    {
        SerialUSB.write(Serial1.read());
    }
    while(SerialUSB.available())
    {
        Serial1.write(SerialUSB.read());
    }
}
```

Abre tu Monitor Serie e INGRESA

```
AT+VER
```

Entonces obtendrás la versión de tu placa.

:::note
    Si tu placa Seeeduino LoRawan es una versión AM, no puede soportar el firmware V3, necesitas la versión DM para actualizar el firmware a la versión 3.0 o superior. Porque el firmware V3 es demasiado grande, la memoria flash AM es demasiado pequeña.
:::  

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/VER.png)

La versión del firmware es 2.0.10, si quieres actualizar el firmware, necesitas seguir algunos pasos.

* Paso 1. Copia y sube el siguiente código a tu placa.

```c
// Update firmware to RHF76-052AM
#include <Arduino.h>

void setup()
{
    SerialDBG.begin(115200);
    SerialUSB.begin(115200);
}

void loop()
{
    while(SerialDBG.available())
    {
        SerialUSB.write(SerialDBG.read());
    }
    while(SerialUSB.available())
    {
        SerialDBG.write(SerialUSB.read());
    }
}

```

* Paso 2. Retira la placa del USB y conéctala nuevamente, luego presiona el Botón DFU, después de que el LED del modo Firmware parpadee puedes ir al siguiente paso.

* Paso 3. Haz clic para descargar el firmware más reciente, que es un archivo .bin.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_bin.png)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin%202.bin)

* Paso 4. Abre PuTTy y conéctate a la placa

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_1.png)

:::tip
    Puedes encontrar la versión más reciente de PuTTy aquí: [http://www.extraputty.com/download.php](http://www.extraputty.com/download.php)
:::

* Paso 5. Después de conectar tu placa a PuTTy exitosamente, encontrarás el carácter 'C' imprimiéndose en el monitor continuamente.
Haz clic en **Files Transfer > Ymodem > Send**, y selecciona el archivo .bin que descargamos en el Paso4.

* Paso 6. Entonces la actualización comienza.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/img/firmware_4.png)

## FAQ

**P1: Seeeduino Lorawan dejó de ser reconocido por la PC**

**R1:** Presiona rápidamente dos veces el botón de reset para recuperar la placa.

**P2：Seeeduino Lorawan no tiene Examples > LoRaWAN**

**R2:** Haz clic [aquí](https://github.com/SeeedDocument/seeeduino_LoraWan) para obtenerlo.

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Esquemáticos en Eagle](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/202001246 Seeeduino LoRaWAN Eagle.zip)
* [Archivo Sketchup(3D)](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/Seeeduino LoRaWAN.skp)
* [Certificación CE de RHF 76-052](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/ce-rhf76-052.pdf)
* [Firmware RHF76-052 V2.0.10](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.0.10-20160923.ebin 2.bin)
* [Firmware RHF76-052 V2.1.16AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.16-20171203.ebin.bin)
* [Firmware RHF76-052 V2.1.19AM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052am-v2.1.19-20180525.ebin.bin)
* [Firmware RHF76-052 V3.3.1DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.3.1-20180707.ebin(1).bin)
* [Firmware RHF76-052 V3.5.13DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf76-052dm-v3.5.13-20190916.ebin.bin)
* [Hoja de Datos de RHF76-052AM/DM](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/rhf-ds01500_rhf76-052_datasheet_v03.pdf)
* [Hoja de Datos del Chip GPS L70B-M39](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/L70B-M39.pdf)
* [Azure IoT Edge LoRaWAN](https://github.com/Azure/iotedge-lorawan-starterkit/)
* [[RHF-PS01709]Especificación de Comandos AT LoRaWAN Clase ABC](https://files.seeedstudio.com/wiki/Seeeduino_LoRa/res/AT-Command-Specificationv1.2.pdf)

## Proyectos

**LoRa IoTea**: Un sistema automático de recolección de información aplicado a plantaciones de té. Es parte de la recolección inteligente de información agrícola.

<iframe frameBorder={0} height="327.5" scrolling="no" src="https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed" width={350} />

## Soporte Técnico y Discusión de Productos

   <br />
 ¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
