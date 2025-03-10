---
description: XIAO SAMD21 de Seeed Studio con Nanase
title: XIAO SAMD21 de Seeed Studio con Nanase
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino-XIAO-by-Nanase
last_update:
  date: 02/18/2025
  author: Guillermo
---


# Seeed Studio XIAO SAMD21 Comenzar con Nanase

Este es un documento escrito por [@nanase_coder](https://twitter.com/nanase_coder). (Traducido por Seeed del documento original en japonés: [コインサイズ Arduino互換機 Seeed Studio XIAO SAMD21 を使ってみた](https://qiita.com/nanase/items/0fed598975c49b1d707e#spi-microsd%E3%82%AB%E3%83%BC%E3%83%89)). ¡Gracias Nanase por compartir esto con nosotros!

## Documentación

Hay dos documentaciones sobre el uso de **Seeeduino XIAO** que se enfocan en diferentes áreas, consulta la tabla a continuación para más detalles:

|[**Documentación de Seeed**](https://wiki.seeedstudio.com/Seeeduino-XIAO/)|[**Documentación de Nanase**](https://wiki.seeedstudio.com/Seeeduino-XIAO-by-Nanase/)|
|---|---|
|Diagrama de pines|Interfaz|
|Comenzar con Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con tarjeta MicroSD (SPI)|
|Uso de GPIO en Seeed Studio XIAO SAMD21|Seeed Studio XIAO SAMD21 con GPS (UART)|
|Recursos de Seeed Studio XIAO SAMD21|IOBUS de ciclo único|

## Características

* CPU ARM Cortex M0 + (SAMD21G18) 48MHz
* 256 KB de Flash, 32 KB de SRAM
* USB Tipo-C
* SPI, I2C, UART, DMA disponibles
* Tamaño de moneda (21mm x 17.8mm)
* Nivel lógico: 3.3V

No hay componentes en la parte posterior de la placa y todos los pines tienen agujeros estriados, lo que facilita la soldadura a otra placa.

### Lista de piezas

- 1 x Seeeduino XIAO
- 2 x encabezados de 7 pines
- 4 x pegatinas

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F65443a20-c82c-09b8-10e9-6b067e055cb3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=6dd2a53df162d5676a9f8436b91bb7a2" alt="pir" width={600} height="auto" /></p>

Agujeros castellados:

<!-- ![image](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Castellated-holes-of-xiao-jp.jpg" alt="pir" width={600} height="auto" /></p>

## Especificaciones

|  | Especificación |
| --- | --- |
| CPU | CPU ARM Cortex-M0+ (SAMD21G18) funcionando a hasta 48MHz (multiplicado desde 32.768 kHz) |
| Almacenamiento | 256KB de Flash, 32KB de SRAM |
| PINS de I/O | 14 pines GPIO, 11 pines analógicos, 11 pines digitales, 1 pin de salida DAC |
| Función de pines | SPI, I2C, UART, PWM, interrupción externa, SWD (Power Pad) |
| Nivel lógico | 3.3V |
| LEDs: | 1 LED de usuario, 1 LED de alimentación, dos LEDs para descarga por puerto serial |
| Alimentación | Interfaz USB Tipo-C, pads de alimentación en la parte posterior |
| Tamaño | 21x17.8x3.5mm |

Como puedes ver, es un Arduino de tipo SAMD y es similar a la serie Arduino MKR, por lo que técnicamente cualquier biblioteca escrita para ellos puede ser utilizada en Seeed Studio XIAO SAMD21. Por otro lado, como es diferente al Arduino tipo ATmega, como el Arduino Uno, la biblioteca que depende de algún registro específico de ATmega no puede ser utilizada.

El GPIO de 14 pines se refiere a los 11 pines del lado, el pin de reinicio y el SWD (SWDIO, SWCLK) en la parte posterior.

El UART en la función de pines es diferente del serial a través de USB y puede ser operado por `Serial1`.

## Restablecer tu placa

Consulta [aquí](https://wiki.seeedstudio.com/Seeeduino-XIAO/#software) para aprender cómo agregar Seeed Studio XIAO SAMD21 a tu Arduino IDE.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fd8ff0409-7841-0a07-f9aa-ee49fef757b3.jpeg?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=c44f4d6b316014dd3a10476ad49311fd" alt="pir" width={600} height="auto" /></p>

Seeed Studio XIAO SAMD21 no tiene un botón de reinicio. En su lugar, tiene un pad de reinicio.  
Conecta brevemente este pad de reinicio y aplica GND para reiniciar tu placa.

## Modo de arranque

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a0107ab-2584-1251-c3c3-184ef2a216ee.gif?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=f688d27c6a82bc7e51932b4504ebd9e1" alt="pir" width={600} height="auto" /></p>

A veces, el programa puede fallar o no ser posible cargar el sketch. Puedes reiniciar la placa dos veces y entrar en el modo Bootloader. En este modo, los LEDs parpadean lentamente, y el Seeed Studio XIAO SAMD21 es reconocido como un dispositivo de almacenamiento USB. El puerto serial se separa del modo normal y siempre está en modo de escritura de sketch, sin ejecutar el programa anterior en la placa.

Para volver del modo bootloader al modo normal, sube un sketch o reinicia la placa rápidamente dos veces de nuevo.

Si entras en el modo bootloader y el Seeed Studio XIAO SAMD21 no es reconocido como un dispositivo USB por el PC, el LED parpadeará rápidamente.

## LCD

Al igual que el Arduino original, selecciona **Basics > Blink** desde el sketch de ejemplo y súbelo.

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

A diferencia del Arduino original, se enciende en LOW y se apaga en HIGH.

### Dos LEDs incorporados que parpadean

El sitio web oficial describe otros dos LEDs incorporados como "dos LEDs para la descarga por puerto serial". Sin embargo, al revisar el esquema, no hay un pin físico conectado a estos LEDs RX y TX.

Si miras [USBCore.cpp](https://github.com/Seeed-Studio/ArduinoCore-samd/blob/1.7.2/cores/arduino/USB/USBCore.cpp#L622-L627), puedes ver que se encienden mediante `digitalWrite` cada vez que ocurre una transmisión / recepción serial USB, lo que significa que los dos LEDs son programables.

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

Los números de pin específicos se encuentran en `variant.h / variant.cpp` al igual que en los Arduino SAMD, y en el caso de Seeeduino XIAO, se asignan a los pines 11 y 12 de la siguiente manera.

```cpp
#define PIN_LED_13  (13u)
#define PIN_LED     PIN_LED_13
#define LED_BUILTIN PIN_LED

#define PIN_LED_RXL          (12u)
#define PIN_LED_TXL          (11u)
#define PIN_LED2             PIN_LED_RXL
#define PIN_LED3             PIN_LED_TXL
```

A continuación se muestra un sketch para hacer parpadear tres LEDs. Los LEDs para RX y TX son de color azul.

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

A diferencia de los Arduinos de tipo ATmega, el estado actual de la comunicación serial del Seeed Studio XIAO SAMD21 es USB CDC. En otras palabras, puede realizar comunicaciones más rápidas que la comunicación serial normal.

Por lo tanto, especificar la velocidad en baudios con `Serial.begin (velocidad)` no tiene sentido, pero fuera de eso, se puede usar como una comunicación serial normal.

### Medición de velocidad

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2Fc18063f3-999d-6d2a-a5ad-01a137309f9a.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=26eda0dc6f1070e2085a15821ec6b4b9" alt="pir" width={600} height="auto" /></p>

Usé [este sketch](https://gist.github.com/nanase/6cc57e14a572196baefd893ade67d32e) para medir la velocidad de transferencia desde el Seeed Studio XIAO SAMD21 hacia la PC, y la tasa de transferencia desde la PC hacia el Seeed Studio XIAO SAMD21 debería ser la misma.

El eje horizontal es el tamaño del búfer (enviado todo de una vez usando `Serial.write (buf, len)`).
Si envías 1 byte a la vez, solo obtendrás 0.11 Mbps (14.53 KB/s), pero si envías 64 bytes, será significativamente más rápido, alcanzando los 6.30 Mbps (805.86 KB/s). Se puede inferir que el tamaño del búfer interno es de 64 bytes.

Como se mencionó anteriormente, el LED parpadea durante la comunicación serial, pero casi no hubo disminución de velocidad debido a esto.

### SPI (Tarjeta microSD)

El Seeed Studio XIAO SAMD21 tiene un nivel lógico de 3.3V. En otras palabras, la tarjeta microSD puede ser manejada a través de SPI sin un convertidor de nivel.
Algunas funciones de SPI son diferentes de las de los Arduinos tipo ATmega, por favor consulta [aquí](https://qiita.com/nanase/items/406a8a848d1b259d3af4) para más información.

Aquí leeremos la tarjeta microSD usando el [kit de ranura para microSD DIP](http://akizukidenshi.com/catalog/g/gK-05488/) de Akizuki Denshi.

Usamos el código de ejemplo de Arduino, pero el parámetro de `SD.begin (cs_pin)` se especifica como `SS`. Según variant.h, SS = 4, que es el mismo que los pines D4 / A4 / SDA. Por supuesto, puedes especificar otros pines.

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

  Serial.print("Inicializando la tarjeta SD... ");

  if (!SD.begin(SS)) { // <-------------------------------- SS = Pin D4/A4/SDA
    Serial.println("¡La inicialización falló!");
    while (1) ;
  }
  Serial.println("Inicialización completada.");

  myFile = SD.open("test.txt", FILE_WRITE);

  if (myFile) {
    Serial.print("Escribiendo en test.txt...");
    myFile.println("probando 1, 2, 3.");

    myFile.close();
    Serial.println("Hecho.");
  }
  else
    Serial.println("Error al abrir test.txt");

  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    while (myFile.available())
      Serial.write(myFile.read());

    myFile.close();
  }
  else
    Serial.println("Error al abrir test.txt");
}

void loop() { }
```

Resultado:

```
Inicializando la tarjeta SD... Inicialización completa.
Escribiendo en test.txt... Hecho.
test.txt:
probando 1, 2, 3.
```

### I2C

También está disponible I2C. Los dispositivos de 3.3V pueden conectarse directamente sin un convertidor de nivel.

En esta ocasión, usamos el BME280 para medir la temperatura, la humedad y la presión atmosférica. El BME280 funciona a 3.3V, por lo que se puede conectar sin un convertidor de nivel. Consulta [aquí](https://qiita.com/nanase/items/f34e03c29410add9c4d0) para obtener instrucciones detalladas sobre la conexión entre Arduino y el BME280.

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

Como se mencionó anteriormente, los pines físicos UART son diferentes a los del USB CDC. Se utiliza `Serial1` para la comunicación serial utilizando los pines TX y RX.

En esta ocasión, conectamos el Seeed Studio XIAO SAMD21 al kit receptor GPS y obtenemos información NMEA desde la PC. Es un trabajo muy sencillo cuando se usa el Xiao, que funciona simplemente como un puente entre el kit GPS y el serial de la PC.

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

En esta ocasión, usamos GPSFox para explorar la información NMEA. Las coordenadas se pueden medir fácilmente.

<!-- ![image](https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308) -->
  <p style={{textAlign: 'center'}}><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F76361d26-4036-aea5-bcdd-d38f30cf16e3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=e346fb482f4d33f4b368c9b812a94308" alt="pir" width={600} height="auto" /></p>

## Otros

### DMA

Como una de las características del Arduino tipo SAMD, puedes usar DMA en Xiao. Consulta [aquí](https://qiita.com/nanase/items/406a8a848d1b259d3af4#dma) para más información sobre DMA.

### Single Cycle IOBUS

El Cortex M0+ tiene una función llamada [Single Cycle IOBUS](https://microchipdeveloper.com/32arm:samd21-iobus-overview) que puede operar la salida GPIO en un ciclo de reloj. Escribir a un registro específico puede invertir la lógica, deshabilitar el pin o cambiar la corriente de conducción del pin.

### DigitalWrite

Puedes usar digitalWrite para crear un pulso, que es un método que funciona con cualquier placa Arduino, simplemente repitiendo la sobrecarga.

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

### Uso de Registros

También puedes crear un pulso operando directamente el registro sin utilizar `digitalWrite`.

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

### Usar Single Cycle IOBUS

Usamos `IOBUS.h` introducido [aquí](https://lab.sasapea.mydns.jp/2020/03/16/seeeduino-xiao/).

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

|  | DigitalWrite | Registros | Iobus de un solo ciclo |
| --- | --- | --- | --- |
| Forma de onda |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F9a269f4e-5bd0-8eb4-127e-14b8d239a6a3.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=7099c88e5d117efd215ba24fefa7448b" alt="pir" width={600} height="auto" /></p> |<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F84a04db3-c854-8862-d253-6ff8fc94aa8f.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d20b7a169be510b3f73e0bea1c97f2bf" alt="pir" width={600} height="auto" /></p>|<p><img src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fqiita-image-store.s3.ap-northeast-1.amazonaws.com%2F0%2F30370%2F4358d74f-285c-6d16-1cc3-809946c42125.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=d2e46ad06befc79f8b897fc538f1de89" alt="pir" width={600} height="auto" /></p> |
| frecuencia | 333 kHz | 6 MHz | 24 MHz |
| Número de ciclos de reloj necesarios para crear un pulso | 144 | 8 | 2 |

La lógica ciertamente puede invertirse en un ciclo (48 MHz).

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
