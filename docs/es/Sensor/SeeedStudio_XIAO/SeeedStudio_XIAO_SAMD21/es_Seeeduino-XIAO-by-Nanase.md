---
description: Seeed Studio XIAO SAMD21 con Nanase
title: Nanase
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-by-Nanase
last_update:
  date: 1/11/2023
  author: shuxu hu
---


# Primeros pasos con Seeed Studio XIAO SAMD21 por Nanase

Este es un documento escrito por [@nanase_coder](https://twitter.com/nanase_coder). (Traducido por Seeed del documento japonés original: [コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)). ¡Gracias Nanase por compartir esto con nosotros!

## Documentaciones

Hay dos documentaciones sobre el uso del **Seeeduino XIAO** que se enfocan en diferentes áreas, consulta la tabla a continuación como referencia:

|[**Documentación por Seeed**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/)|[**Documentación por Nanase**](https://wiki.seeedstudio.com/es/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pines|Interfaz|
|Primeros pasos con Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con tarjeta MicroSD(SPI)|
|Uso de GPIO de Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con GPS(UART)|
|Recursos de Seeed Studio XIAO SAMD21|IOBUS de ciclo único|

## Características

* CPU ARM Cortex M0 + (SAMD21G18) 48MHz
* 256 KB Flash, 32 KB SRAM
* USB Type-C
* SPI, I2C, UART, DMA disponibles
* tamaño de moneda (21mm x 17.8mm)
* Nivel lógico: 3.3V

No hay componentes en la parte posterior de la placa, y todos los pines tienen orificios almenados, lo que facilita la soldadura en otra placa.

### Lista de partes

- 1 x Seeeduino XIAO
- 2 x cabezal de 7 pines
- 4 x pegatinas

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

Orificios almenados:

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## Especificación

|  | Especificación |
| --- | --- |
| CPU | CPU ARM Cortex-M0+ (SAMD21G18) funcionando hasta 48MHz (Multiplicado desde 32.768 kHz) |
| Almacenamiento | 256KB Flash, 32KB SRAM |
| Pines E/S | 14 pines GPIO, 11 pines analógicos, 11 pines digitales, 1 pin de salida DAC |
|Función de pin  |SPI, I2C, UART, PWM, interrupción externa, SWD (Pad de alimentación)  |
| Nivel lógico | 3.3V |
| LEDs: |1 LED de usuario, 1 LED de alimentación, dos LEDs para descarga del puerto serie   |
| Alimentación | Interfaz USB Type-C, pads de alimentación en la parte posterior|
| Tamaño | 21x17.8x3.5mm |

Como puedes ver, es un Arduino tipo SAMD y es similar a la serie Arduino MKR, por lo que técnicamente, cualquier biblioteca escrita para ellos puede usarse en Seeed Studio XIAO SAMD21. Por otro lado, dado que es diferente del Arduino tipo ATmega como Arduino Uno, la biblioteca que depende de algún registro específico de ATmega no puede usarse.

GPIO de 14 pines se refiere a 11 pines en el lateral, pin de reset, y SWD (SWDIO, SWCLK) en la parte posterior.

El UART en la función de pin es diferente del serial vía USB y puede operarse mediante `Serial1`.

## Reinicia tu Placa

Consulta [aquí](https://wiki.seeedstudio.com/es/Seeeduino-XIAO/#software) y aprende cómo agregar Seeed Studio XIAO SAMD21 a tu Arduino IDE.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21 no tiene un botón de reset. En su lugar, hay un pad de reset.
Conecta en corto este pad de reset y aplica GND para reiniciar tu placa.

## Modo Bootloader

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

A veces el programa puede fallar o no es posible cargar el sketch. Puedes reiniciar la placa dos veces y entrar al modo Bootloader. En este modo, los LEDs parpadean lentamente, y el Seeed Studio XIAO SAMD21 es reconocido como un dispositivo de memoria USB. El puerto serial está separado del modo normal, y siempre está en modo de escritura de sketch sin ejecutar el programa anterior en la placa.

Para regresar del modo bootloader al modo normal, carga un sketch o reinícialo dos veces rápidamente otra vez.

Si entras al modo bootloader cuando el Seeed Studio XIAO SAMD21 no es reconocido como un dispositivo USB por la PC, el LED parpadeará rápidamente.

## LCD

Al igual que el Arduino original, selecciona Basics> Blink del sketch de muestra y cárgalo.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  delay(1000);
}
```

Contrario al Arduino original, se enciende en LOW y se apaga en HIGH.

### Dos LEDs Integrados Parpadeantes

El sitio web oficial describe otros dos LEDs integrados como `dos LEDs para descarga del puerto serie`. Sin embargo, mirando el esquemático, no hay un pin físico conectado a estos LEDs RX y TX.

Si miras [USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627) aquí, puedes ver que se encienden mediante `digitalWrite` cada vez que ocurre transmisión / recepción USB serie, lo que significa que los dos LEDs son programables.

```cpp
uint32_t USBDeviceClass::recv(uint32_t ep, void *_data, uint32_t len)
{
    if (!_usbConfiguration)
        return -1;

#ifdef PIN_LED_RXL
    if (rxLEDPulse == 0)
        digitalWrite(PIN_LED_RXL, LOW);

    rxLEDPulse = TX_RX_LED_PULSE_MS;
#endif
```

Los números de pin específicos están en `variant.h / variant.cpp` como en SAMD Arduino, y en el caso de Seeeduino XIAO, están asignados a 11 y 12 como sigue.

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u)
#define PIN_LED_TXL          (11u)
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

A continuación se muestra un boceto de parpadeo de tres LEDs. Los LEDs para RX y TX son azules.

```cpp
void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(PIN_LED2, OUTPUT);
  pinMode(PIN_LED3, OUTPUT);
}

void loop() {
  digitalWrite(LED_BUILTIN, HIGH);
  digitalWrite(PIN_LED2, HIGH);
  digitalWrite(PIN_LED3, HIGH);
  delay(1000);
  digitalWrite(LED_BUILTIN, LOW);
  digitalWrite(PIN_LED2, LOW);
  digitalWrite(PIN_LED3, LOW);
  delay(1000);
}
```

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F94756423-5b1b-e4af-1dac-5fe238689b0a.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=8e0d97933fbf6fbb4ccfe6cd66c1adf0" alt="pir" width={600} height="auto" /></p>

## Interfaz

### Serial sobre USB CDC

A diferencia del Arduino tipo ATmega, el estado real de la comunicación serie del Seeed Studio XIAO SAMD21 es USB CDC. En otras palabras, puede funcionar más rápido que la comunicación serie normal.

Por lo tanto, especificar la velocidad de baudios con `Serial.begin (speed)` no tiene sentido, pero excepto por eso, se puede usar como serie normal.

### Medición de Velocidad

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

Usé [este sketch](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e) para medir la velocidad de transferencia del Seeed Studio XIAO SAMD21 a la PC, y la velocidad de transferencia de la PC al Seeed Studio XIAO SAMD21 debería ser la misma.

El eje horizontal es el tamaño del buffer (envío de una vez usando `Serial.write (buf, len)`).
Si envías 1 byte a la vez, solo obtienes 0.11 Mbps (14.53 KB / s), pero si envías 64 bytes, será significativamente más rápido a 6.30 Mbps (805.86 KB / s). Puedes inferir que el tamaño del buffer interno es de 64 bytes.

Como se mencionó anteriormente, el LED parpadea en la comunicación serie, pero casi no hubo disminución en la velocidad debido a esto.

### SPI (Tarjeta MicroSD)

El Seeed Studio XIAO SAMD21 tiene un nivel lógico de 3.3V. En otras palabras, la tarjeta microSD se puede manejar a través de SPI sin un convertidor de nivel.
Algunas funciones de SPI son diferentes a las del Arduino tipo ATmega, por favor revisa [aquí](https://qiita.com/nanase/items/406a8a848d1b259d3af4) para más información.

Aquí leeremos la tarjeta microSD usando el [kit DIP de ranura para tarjeta micro SD](http://akizukidenshi.com/catalog/g/gK-05488/) de Akizuki Denshi.

Usamos el código de ejemplo de Arduino aquí, pero el parámetro de `SD.begin (cs_pin)` se especifica como `SS`. Según variant.h, SS = 4, que es lo mismo que los pines D4 / A4 / SDA. Por supuesto, puedes especificar otros pines.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fba2f4257-e0ca-a525-4afd-793296235f7b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=122cf093757e673a26309a4c54602956" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fb10e707a-949d-e937-95c3-8c5b3d7f56bc.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1d1117fd8be3286bdd235671098973dd" alt="pir" width={600} height="auto" /></p>

```cpp
#include <SPI.h>
#include <SD.h>

File myFile;

void setup() {
  Serial.begin(9600);
  while (!Serial) ;

  Serial.print("Initializing SD card... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = D4/A4/SDA pin
    Serial.println("initialization failed!");
    while (1) ;
  }
  Serial.println("initialization done.");

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");

    myFile.close();
    Serial.println("done.");
  }
  else
    Serial.println("error opening test.txt");

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    while (myFile.available())
      Serial.write(myFile.read());

    myFile.close();
  }
  else
    Serial.println("error opening test.txt");
}

void loop() { }
```

Resultado:

```
Initializing SD card...initialization done.
Writing to test.txt...done.
test.txt:
testing 1, 2, 3.
```

### I2C

I2C también está disponible. Los dispositivos de 3.3V se pueden conectar directamente sin un convertidor de nivel.

Esta vez, utilizamos BME280 para medir temperatura, humedad y presión atmosférica. El BME280 opera a 3.3V, por lo que se puede conectar sin un convertidor de nivel. Consulta [aquí](https://qiita.com/nanase/items/f34e03c29410add9c4d0) para obtener instrucciones detalladas sobre la conexión entre Arduino y BME280.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F19f35ca3-f9a6-33d6-124b-a37cf9d1344c.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=1f51b8fa4b19fbe4df4707da8ef9ec58" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9fc6d103-1dce-e367-7ef4-ba1be6ee50b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26e6b8e99374c545265758ea41ba218c" alt="pir" width={600} height="auto" /></p>

```cpp
#include <Wire.h>
#include "SparkFunBME280.h"

BME280 sensor;

void setup() {
  Serial.begin(9600);
  Wire.begin();
  sensor.beginI2C(); // Wire を用いて I2C 接続開始
}

void loop() {
  Serial.print("Temp: ");
  Serial.print(sensor.readTempC(), 2);

  Serial.print(" °C, Humidity: ");
  Serial.print(sensor.readFloatHumidity(), 2);

  Serial.print(" %, Pressure: ");
  Serial.print(sensor.readFloatPressure() / 100.0, 1);
  Serial.println(" hPa");

  delay(5000);
}
```

Resultado:

```
Temp: 22.05 °C, Humidity: 44.99 %, Pressure: 1009.0 hPa
Temp: 22.05 °C, Humidity: 44.72 %, Pressure: 1008.9 hPa
Temp: 22.06 °C, Humidity: 44.81 %, Pressure: 1008.9 hPa
```

### UART

Como se mencionó anteriormente, los pines UART físicos son diferentes de los del USB CDC. `Serial1` se utiliza para la comunicación serie usando los pines TX y RX.

Esta vez, conectamos el Seeed Studio XIAO SAMD21 al kit receptor GPS y obtenemos información NMEA desde la PC. Es un trabajo muy simple cuando se usa Xiao, que es solo un puente entre el kit gps y el puerto serie de la pc.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Ff304a688-f887-a7f4-5cd1-17be3f39815b.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=74e3abdb6a325a7076b4260b14ac0ef8" alt="pir" width={600} height="auto" /></p>

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F6fbef634-ae29-3a9b-1760-d3419524df31.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=3fea2b970a346d758a31bf8a4ff77c3a" alt="pir" width={600} height="auto" /></p>

```cpp
void setup() {
  Serial.begin(9600);
  Serial1.begin(9600);
}

void loop() {
  if (Serial.available()) {
    char c = (char)Serial.read();
    Serial1.write(c);
  }

  if (Serial1.available()) {
    char c = (char)Serial1.read();
    Serial.write(c);
  }
}
```

Esta vez usamos GPSFox para navegar por la información NMEA. Las coordenadas se pueden medir fácilmente.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>

## Otros

### DMA

Como una de las características del Arduino tipo SAMD, puedes usar DMA en Xiao. Consulta [aquí](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma) para más información sobre DMA.

### Single Cycle IOBUS

Cortex M0+ tiene una función llamada [Single Cycle IOBUS](https://microchipdeveloper.com/32arm:samd21-iobus-overview) que puede operar la salida GPIO en un ciclo de reloj. Escribir en un registro específico puede invertir la lógica, deshabilitar el pin o cambiar la corriente de manejo del pin.

### DigitalWrite

Puedes usar digitalWrite para crear un pulso, que es un método que funciona con cualquier placa Arduino - solo repitiendo la sobrecarga.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                     \
  digitalWrite(PIN_A7, HIGH); \
  digitalWrite(PIN_A7, LOW);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Usar Registros

También puedes crear un pulso operando directamente el registro sin usar `digitalWrite`.

```cpp
void setup() {
  pinMode(PIN_A7, OUTPUT);
}

#define P                                                             \
  digitalPinToPort(PIN_A7)->OUTSET.reg = digitalPinToBitMask(PIN_A7); \
  digitalPinToPort(PIN_A7)->OUTCLR.reg = digitalPinToBitMask(PIN_A7);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

### Use Single Cycle IOBUS

We use `IOBUS.h` introduced [here](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/).

```cpp
#include "IOBUS.h"

#define digitalPinToIOPin(P) ((g_APinDescription[P].ulPort << 5) + g_APinDescription[P].ulPin)
#define PIN_NUM digitalPinToIOPin(PIN_A7)

void setup() {
  IOBUS::pinMode(PIN_NUM, OUTPUT, true);
}

#define P IOBUS::toggleOutput(PIN_NUM);

#define W P P P P P P P P P P P P P P P P
void loop() { W W W W W W W W W W W W W W W W }
```

|  | DigitalWrite | Registros | Single Cycle IOBUS |
| --- | --- | --- | --- |
| Forma de onda |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| frecuencia | 333 kHz | 6 MHz | 24 MHz |
| Número de ciclos de reloj necesarios para crear un pulso | 144 | 8 | 2 |

La lógica puede ciertamente invertirse en un ciclo (48MHz).

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
