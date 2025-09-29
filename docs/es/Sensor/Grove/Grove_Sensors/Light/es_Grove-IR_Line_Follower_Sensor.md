---
description: Grove - Seguidor V3.0
title: Grove-Sensor Seguidor de Línea IR V3.0 
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg
slug: /es/grove_line_follower
last_update:
  date: 10/12/2024
  author: Jason
---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/images/top.jpg" /></div>


## Descripción

Está diseñado para usar con robots seguidores de línea. Tiene 2 LEDs IR y 2 fototransistores sensibles a IR. Los sensores en la placa que parecen ojos son en realidad LEDs IR y fototransistores sensibles. Cuando el fototransistor detecta luz infrarroja reflejada desde los LEDs IR, emite una señal digital que cambia de alto a bajo.


## Características
- Tiempo de respuesta rápido
- Alta analítica
- Longitud de onda de corte visible λp=940nm
- Potenciómetro de ajuste y LED indicador
- Detección dual

                                                                                                                                     
## Especificaciones

| Parámetro                  | Valor/Rango                                                   |
|----------------------------|---------------------------------------------------------------|
| Voltaje de Alimentación    |  3.3V a 5V                                                   |
| Interfaz                   | digital                                                       |
| Consumo de Corriente       |50mA                                                           |
| Rango de Temperatura de Operación| -40°C a +85°C                                                |


## Primeros Pasos

### diagrama de indicación
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/111111.png"/></div>

### Hardware

**Paso 1. Prepare los siguientes elementos:**

- _Jugar con Arduino_

| Seeeduino V4.2 | Base Shield|  Grove - Seguidor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove con Arduino_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/8.png" /></div>

- _Jugar con Serie XIAO ESP32_

| Seeed Studio Grove Base para XIAO| XIAO ESP32-S3|  Grove - Seguidor V3.0 |
|--------------|-------------|-----------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png"/></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove_Line_Finder/img/line_finder_s.jpg" /></div>|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)|

- _Conectar Grove con XIAO ESP32S3_

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/7.png" /></div>

Dos combinaciones diferentes, pero usando el mismo código.

### Software

- Paso 1. Copie el código en Arduino IDE y cárguelo.

```c
#define LEFT 3
#define RIGHT 2

void setup() {
  Serial.begin(9600);
  pinMode(LEFT, INPUT);
  pinMode(RIGHT, INPUT);
}
void loop() {
  int towar_left=digitalRead(LEFT);
  int towar_right=digitalRead(RIGHT);
  Serial.print("line follower : left ");
  Serial.print(towar_left);
  Serial.print("  right ");
  Serial.println(towar_right);
}
```
- Paso 2. Abra el puerto serie para ver el contenido impreso.

Cuando colocamos el sensor en el área negra, el puerto serie imprimirá el siguiente contenido.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/2.png" /></div>

### Uso de demostración

Cuando nos acercamos al área blanca, la luz roja en la placa del sensor se encenderá, y cuando nos acercamos al área negra, la luz roja en la placa del sensor se apagará.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Grove_Line_Follower/5.gif" /></div>


## Recursos

* **[SCH]** [Información de Referencia del Sensor Seguidor de Línea IR Grove](https://files.seeedstudio.com/wiki/Grove_Line_Follower/SCH.pdf)
* **[Hoja de Datos]**  [ITR9909_Datasheet.PDF](https://files.seeedstudio.com/wiki/Grove_Line_Follower/datasheet.pdf)


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a></div>