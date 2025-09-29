---
description: Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo con Carcasa
title: Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo con Carcasa
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Finger-clip_Heart_Rate_Sensor_with_shell
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell.JPG" /></div>

Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo con Carcasa está basado en PAH8001EI-2G, un sensor óptico de proceso CMOS de alto rendimiento y bajo consumo con LED Verde y DSP integrado que sirve como sensor de Detección de Frecuencia Cardíaca (HRD). Este módulo está basado en tecnología óptica que mide la variación del movimiento de la sangre humana en el vaso. El bajo consumo de energía y el modo de ahorro de energía flexible lo hacen adecuado para dispositivos portátiles. Debido a que el chip del sensor de frecuencia cardíaca necesita alta velocidad de procesamiento para el algoritmo de datos de frecuencia cardíaca, este módulo integra un STM32, la interfaz SWD reservada permite a los usuarios reprogramar el STM32. Este módulo está equipado con una carcasa y dos bandas que permiten a los usuarios fijar el módulo en el dedo, muñeca o brazo fácilmente.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-with-shell-p-2420.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificaciones

---

* Consumo de energía ultra-bajo, modo de ahorro de energía durante el tiempo sin movimiento de contacto

* Control flexible de la tasa de suspensión

* STM32F103 integrado

* Interfaz I2C

* Área del sensor de frecuencia cardíaca de solo 3.0 x 4.7mm

* Interfaz SWD reservada

* equipado con carcasa y bandas

* Temperatura de funcionamiento: -20 a +60℃

## Función de la Interfaz

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Interfaz Grove

* 2: Interfaz SWD Reservada para programación al STM32

* 3: Sensor de Frecuencia Cardíaca

## Uso

---
Aquí, proporcionaremos un ejemplo para mostrarle cómo usar este sensor.

### Instalación del Hardware

Conecte el Sensor al puerto I2C del Seeeduino con el Cable Grove.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_with_shell_connect.jpg" /></div>

Cuando use la banda para fijar este módulo en su dedo o muñeca, por favor mantenga el área del sensor en buen contacto con la piel y manténgase sin movimiento, como en la imagen.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch.jpg" /></div>

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_touch2.JPG" /></div>

### Parte del Software

### Con Arduino

Copie el siguiente código en un nuevo sketch de Arduino y suba el sketch, luego puede obtener la frecuencia cardíaca desde el Monitor Serie.
Puede tomar alrededor de un minuto obtener una frecuencia cardíaca válida después de tocar su dedo con el sensor.

```
#include <Wire.h>
void setup() {
    Serial.begin(9600);
    Serial.println("heart rate sensor:");
    Wire.begin();
}
void loop() {
    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device
    while(Wire.available()) {          // slave may send less than requested
        unsigned char c = Wire.read();   // receive heart rate value (a byte)
        Serial.println(c, DEC);         // print heart rate value
    }
    delay(500);
}
```

### Con Mbed

Lee un byte del dispositivo I2C 0xA0 (dirección de 8 bits), es la frecuencia cardíaca.

```
#include "mbed.h"

I2C i2c(I2C_SDA, I2C_SCL);
const int addr = 0xA0;

int main() {
    char heart_rate;
    while (1) {
        i2c.read(addr, &heart_rate, 1);
        printf("heart rate: = %d\r\n", heart_rate);
    }
}
```

#### Actualizar firmware

Podemos actualizar el firmware del sensor de frecuencia cardíaca a través de su bootloader.

* El bootloader está ubicado en 0x08000000 - 0x08002000

* La aplicación está ubicada en 0x08002000 - 0x08020000

* Para arrancar en bootloader, conecta SWDIO a GND y reinicia para ejecutar

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/img/Grove-Finger-clip_Heart_Rate_Sensor_boot_set.jpg" /></div>

* Interfaz: UART (el conector Grove soporta I2C y UART), cuando se actualiza el firmware, la interfaz Grove funciona en modo UART.

VCC  -  VCC

GND  -  GND

SDA  -  TX

SCL  -  RX

* Velocidad de Baudios UART: 115200

* Protocolo: ymodem (La herramienta recomendada es Tera Term)

:::note
El Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo proporciona mediciones de frecuencia cardíaca. Sin embargo, no es un dispositivo médico. Para usar el sensor de detección de frecuencia cardíaca en tu muñeca, dedo o palma, debes:
:::

* (1)Sujetar el sensor firmemente para que haga contacto estrecho con tu piel y mantenerlo estable (sin movimiento) mientras mides para adquirir una frecuencia cardíaca precisa. Si el sensor no hace buen contacto con la piel o hay movimiento extremo mientras se mide, la frecuencia cardíaca no se medirá correctamente.
* (2)El rendimiento del sensor está optimizado con mayor flujo sanguíneo. En días fríos o usuarios con mala circulación (ej: manos frías, dedos y pies fríos) el rendimiento del sensor (precisión de frecuencia cardíaca) puede verse afectado debido al menor flujo sanguíneo en la posición de medición.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Archivo eagle del Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove%20-%20Finger-clip%20Heart%20Rate%20Sensor%20eagle%20file.rar)

* [Archivo bin del Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor_with_shell/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

