---
description: Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo
title: Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Finger-clip_Heart_Rate_Sensor
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor.jpg" /></div>

Grove - Sensor de Frecuencia Cardíaca con Clip para Dedo está basado en PAH8001EI-2G, un sensor óptico de proceso CMOS de alto rendimiento y bajo consumo con LED Verde y DSP integrado que sirve como sensor de Detección de Frecuencia Cardíaca (HRD). Este módulo está basado en tecnología óptica que mide la variación del movimiento de la sangre humana en el vaso sanguíneo. El bajo consumo de energía y el modo de ahorro de energía flexible lo hacen adecuado para dispositivos portátiles. Debido a que el chip sensor de frecuencia cardíaca necesita alta velocidad de procesamiento para el algoritmo de datos de frecuencia cardíaca(), este módulo integra un STM32, con interfaz SWD reservada que permite a los usuarios reprogramar el STM32.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Especificaciones

---

* Consumo de energía ultra bajo, modo de ahorro de energía durante el tiempo sin movimiento de contacto

* Control flexible de la tasa de suspensión

* STM32F103 integrado

* Interfaz I2C

* Área del sensor de frecuencia cardíaca de solo 3.0 x 4.7mm

* Interfaz SWD reservada

* Temperatura de funcionamiento: -20 ~ +60℃

## Función de la Interfaz

---
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg" /></div>
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg" /></div>

* 1: Interfaz Grove

* 2: Interfaz SWD Reservada para programación del STM32

* 3: Sensor de Frecuencia Cardíaca

## Uso

---
Aquí, proporcionaremos un ejemplo para mostrarle cómo usar este sensor.

### Instalación del Hardware

Conecte el Sensor al puerto I2C del Seeeduino con el Cable Grove.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Connect.jpg" /></div>

### Parte del Software

#### Con Arduino

**Serial por Hardware**

Copie el siguiente código en un nuevo sketch de Arduino y suba el sketch, luego puede obtener la frecuencia cardíaca desde el Monitor Serie.
Puede tomar alrededor de un minuto obtener una frecuencia cardíaca válida después de tocar su dedo con el sensor.

```cpp
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

**Software Serial**

La biblioteca I2C estándar para Arduino es la Wire Library. Aunque esta biblioteca no funciona cuando los pines I2C SDA/SCL ya están en uso para otros propósitos. Por lo tanto, puedes usar el SoftwareI2C. Puedes conectar el SCL a D2 y SDA a D3. Por favor descarga la [biblioteca SoftI2CMaster](https://github.com/felias-fogg/SoftI2CMaster) y sigue [Cómo instalar biblioteca de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para configurar la biblioteca. Copia el siguiente código en un nuevo sketch de Arduino y sube el sketch, luego puedes obtener la frecuencia cardíaca desde el Monitor Serie.
Puede tomar alrededor de un minuto obtener una frecuencia cardíaca válida después de que toques tu dedo con el sensor.

```cpp
#define SDA_PORT PORTD
#define SDA_PIN 3
#define SCL_PORT PORTD
#define SCL_PIN 2
#include <SoftI2CMaster.h>
#include <SoftWire.h>
SoftWire Wire = SoftWire();

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

#### Con Mbed

Lee un byte del dispositivo I2C 0xA0 (dirección de 8 bits), es la frecuencia cardíaca.

```cpp
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

##### Conexión de Hardware

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_Connection.jpg" /></div>

* Se requiere un [adaptador USB a serial](https://www.seeedstudio.com/CH340G-USB-to-Serial-%28TTL%29-Module%26Adapter-p-2359.html)
* UART (el conector Grove soporta I2C y UART), cuando se actualiza el firmware, la interfaz Grove funciona en modo UART.

| Grove-Finger-clip_Heart_Rate_Sensor | USB to Serial (TTL) Module&Adapter |
|-------------------------------------|------------------------------------|
| VCC                                 | VCC                                |
| GND                                 | GND                                |
| SDA                                 | TX                                 |
| SCL                                 | RX                                 |

##### Software

* Descargar el software [Tera Term](https://ttssh2.osdn.jp/index.html.en)
* Configurar la velocidad de baudios UART como 115200

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/BaudRate_Setting.png" /></div>

* Descargar [firmware](ttps://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

* Seleccionar Grove - Finger-clip Heart Rate Sensor.bin

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Select_firmware.png" /></div>

* Descargando el firmware al Grove-Finger-clip_Heart_Rate_Sensor

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_download.png" /></div>

* Descarga de firmware exitosa

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finish_Downloading.png" /></div>

:::note
Grove - Finger-clip Heart Rate Sensor proporciona mediciones de frecuencia cardíaca. Sin embargo, no es un dispositivo médico. Para usar el sensor de detección de frecuencia cardíaca en su muñeca, dedo o palma, debe:
:::

* Asegurar el sensor firmemente para que haga contacto estrecho con su piel y mantenerlo estable (sin movimiento) mientras mide para adquirir una
 frecuencia cardíaca precisa. Si el sensor no hace buen contacto con la piel o tiene movimiento extremo mientras mide, la frecuencia cardíaca no se
 medirá correctamente.

* El rendimiento del sensor está optimizado con mayor flujo sanguíneo. En días fríos o usuarios que tienen mala circulación (ej: manos frías,
 dedos y pies fríos) el rendimiento del sensor (precisión de la frecuencia cardíaca) puede verse afectado debido al menor flujo sanguíneo en la
 posición de medición.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Archivo eagle de Grove - Finger-clip Heart Rate Sensor](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip)

* [Archivo bin de Grove - Finger-clip Heart Rate Sensor](https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

