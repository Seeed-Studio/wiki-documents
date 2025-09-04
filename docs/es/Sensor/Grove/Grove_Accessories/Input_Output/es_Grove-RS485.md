---
description: Grove - RS485
title: Grove - RS485
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-RS485
last_update:
  date: 2/22/2023
  author: jianjing Huang
---
<!-- ---
name: Grove - RS485
category: 
bzurl: 
oldwikiname: 
prodimagename: 
surveyurl: 
sku: 103020193
--- -->

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/preview.png)

El Grove RS-485 permite que tu Arduino se conecte fácilmente con dispositivos RS-485, solo necesitas conectar y usar. Este módulo es altamente estable y soporta transmisión sin errores de 500k bps.

RS485 es una solución rentable en comunicación serie, puede ser usado para velocidad de datos de 10Mbit/s o distancia de hasta 1200m a menor velocidad.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-RS485-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - RS485 | Inicial                                                                                               | Nov 2018      |

## Características

- Voltaje de alimentación: 3.3V/5V
- Interfaz: UART
- Transmisión sin errores a 500k bps

## Especificaciones

|Parámetro|Valor|
|---|---|
|Tamaño|L: 40mm A: 20mm H: 12mm|
|Peso|4.9g|
|Tamaño del paquete|L: 135mm A: 85mm H: 13mm|
|Peso bruto|11g|


## Descripción general del hardware

### Diagrama de pines

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Grove-RS485/img/pinout.jpg" /></a></p>
  <figcaption><b>Figura 1</b>. <i>Diagrama de pines</i></figcaption>
</figure>
</div>

## Primeros pasos

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

El Grove - NFC soporta I2C y UART, [Seeed Arduino NFC Library](https://github.com/Seeed-Studio/Seeed_Arduino_NFC) es compatible con Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan y Arduino Leonardo/Seeeduino Lite.

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

- [Seeeduino V4.2(ATMega328P)](https://www.seeedstudio.com/Seeeduino-V4-2-p-2517.html) x1
- [Seeeduino Lotus V1.1](https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html) x1
- [Grove - RS485](https://www.seeedstudio.com/Grove-RS485-p-2924.html) x1
- [Grove Base Shield V2.0](https://www.seeedstudio.com/Base-Shield-V2.html) x1

**Conexión de materiales**

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/connect.png)

- **Paso 1.** Conecta tanto el Seeeduino Lotus como el Seeeduino V4.2 a la PC.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino Lite.

- **Paso 3.** Usando el puerto 6 y puerto 7 como puerto suave RX y TX conecta las dos placas con dos Grove Rs485.

#### Software

- **Paso 1.**  Abre dos ventanas del IDE de Arduino y copia estos códigos como se muestra a continuación por separado. Uno de los dispositivos se usa como dispositivo maestro y el otro se usa como dispositivo esclavo.

```cpp
/*      Slave     */
#include <SoftwareSerial.h>
SoftwareSerial Slave(6, 7);  
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Slave is ready!");
  Slave.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Slave.write(val);
  }

  while(Slave.available()) {
    val = Slave.read();
    Serial.write(val);
  }
}
```

```cpp
/*      Master      */
#include <SoftwareSerial.h>
SoftwareSerial Master(6, 7);
char val;

void setup() {
  Serial.begin(38400);   
  Serial.println("Master is ready!");
  Master.begin(38400);
}

void loop() {
  while (Serial.available()) {
    val = Serial.read();
    Master.write(val);
  }

  while(Master.available()) {
    val = Master.read();
    Serial.write(val);
  }
}
```

- **Paso 2.** Elige diferentes puertos para diferentes dispositivos mientras usas el Grove RS485.

- **Paso 3.** Envía el mensaje y verifica los resultados.

![](https://files.seeedstudio.com/wiki/Grove-RS485/img/image.png)

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[ZIP]** [Archivo esquemático Grove - RS485](https://files.seeedstudio.com/wiki/Grove-RS485/res/Grove%20-%20RS485.zip)
- **[PDF]** [Hoja de datos Max13478E](https://files.seeedstudio.com/wiki/Grove-RS485/res/Max13478.pdf)

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
