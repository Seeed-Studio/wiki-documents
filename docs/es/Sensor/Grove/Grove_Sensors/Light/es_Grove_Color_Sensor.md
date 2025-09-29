---
description: Grove - Sensor de Color V3.0 - interfaz I2C - basado en VEML6040
title: Grove-Sensor de Color V3.0 - interfaz I2C 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Color/top.jpg 
slug: /es/grove_color_sensor_v3_0_iic
last_update:
  date: 10/12/2024
  author: Jason
---


<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Color/top.jpg" /></div>

## Descripción

Es un sensor para medir la cromaticidad del color de la luz ambiental o el color de los objetos. Con el pin de entrada de sincronización, una fuente de luz pulsada externa puede proporcionar un control de conversión síncrono preciso.


## Características
- Detección de Color: Mide los componentes de luz roja, verde, azul y blanca.
- Interfaz I2C: Fácil integración con microcontroladores a través de I2C para acceso a datos.
- Voltaje de Alimentación: Opera a 3.3V o 5V.
- Sincronización: Puede trabajar con una fuente de luz pulsada externa para lecturas precisas.
- Diseño Compacto: Factor de forma pequeño para fácil integración en varios proyectos.
- Bajo Consumo de Energía: Ideal para dispositivos operados por batería.


## Especificación

| Parámetro                  | Valor/Rango                                                   |
|----------------------------|---------------------------------------------------------------|
| Canales de Color           |   Rojo, verde, azul y claro (blanco)                         |
| Voltaje de Alimentación    |    3.3V a 5V                                                 |
| Interfaz                   |        I2C                                                    |
| Resolución                 |Salida de datos de color de 16 bits                           |
| Rango de Temperatura de Operación|     -40°C a +85°C                                      |
| Consumo de Corriente       |      200μA                                                    |
| Rango máximo de detección seleccionable |515.4, 1031, 2062, 4124, 8248, o 16 496 lux con la sensibilidad más alta de 0.007865 lux/paso|

## Comenzando

### diagrama de indicación
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Grove_Color/22222.png" /></div>

### Hardware

**Paso 1. Prepara los siguientes elementos:**

- _Jugar con Arduino_

| Seeeduino V4.2 | Base Shield| Grove - Color Sensor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove con Arduino_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/0.png" /></div>


- _Jugar con la Serie XIAO ESP32_

| Seeed Studio Grove Base para XIAO| XIAO ESP32-S3| Grove - Sensor de Color V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|


- _Conectar Grove con XIAO ESP32S3_


<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/1.png" /></div>


Dos combinaciones diferentes, pero usando el mismo código.

### Software

- Paso 1. Descargar Librería


Instalar la librería [VEML6040](https://files.seeedstudio.com/wiki/Grove_Color/VEML6040.zip").


- Paso 2. Copiar el código en Arduino IDE y cargar.

```c
#include "Wire.h"
#include "veml6040.h"

VEML6040 RGBWSensor;

void setup() {
  Serial.begin(9600);
  Wire.begin(); 
  if(!RGBWSensor.begin()) {
    Serial.println("ERROR: couldn't detect the sensor");
    while(1){}
  }
   
	RGBWSensor.setConfiguration(VEML6040_IT_320MS + VEML6040_AF_AUTO + VEML6040_SD_ENABLE);
	
  delay(1500);
  Serial.println("Vishay VEML6040 RGBW color sensor auto mode example");
  Serial.println("CCT: Correlated color temperature in \260K");
  Serial.println("AL: Ambient light in lux");
  delay(1500);
}

void loop() {
  Serial.print("RED: ");
  Serial.print(RGBWSensor.getRed());  
  Serial.print(" GREEN: ");
  Serial.print(RGBWSensor.getGreen());  
  Serial.print(" BLUE: ");
  Serial.print(RGBWSensor.getBlue());  
  Serial.print(" WHITE: ");
  Serial.print(RGBWSensor.getWhite()); 
  Serial.print(" CCT: ");
  Serial.print(RGBWSensor.getCCT());  
  Serial.print(" AL: ");
  Serial.println(RGBWSensor.getAmbientLight()); 
  delay(400);
}
```

- Paso 3. Abra el puerto serie para ver el contenido impreso.

Cuando coloqué el sensor de color en el área blanca de nuestro visor, abrimos el puerto serie y encontramos que el valor de WHITE era el más alto

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/12.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Color/4.png" /></div>


## Recursos

* **[SCH]** [Información de Referencia del Sensor de Color Grove](https://files.seeedstudio.com/wiki/Grove_Color/SCH.pdf)
* **[Hoja de Datos]**  [VISHAY_VEML6040A3OG_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Color/314020801_VISHAY_VEML6040A3OG_Datasheet.pdf)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>