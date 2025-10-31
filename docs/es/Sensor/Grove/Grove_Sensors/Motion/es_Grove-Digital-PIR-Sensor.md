---
description: Grove - Sensor PIR Digital
title: Grove - Sensor PIR Digital
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Digital-PIR-Sensor
last_update:
  date: 1/6/2023
  author: shuxu hu
---

<!-- 
![](https://files.seeedstudio.com/products/101020793/img/101020793wiki.png) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki.png" alt="pir" width={600} height="auto" /></p>

El sensor PIR es un sensor IR para detectar movimientos humanos. Este Grove Sensor PIR Digital es el sensor PIR más económico en las familias PIR, sin embargo, es capaz de dar una respuesta rápida y generar una señal alta desde el Pin "sig".

Con la interfaz Grove, el Grove sensor PIR digital es fácil de conectar y usar. Y no necesita ninguna librería de Arduino.

<!-- <p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width="200" height="38"  border=0 /></a></p>  -->
[<p><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)

## Características

- Económico: menos de 3 dólares
- Intuitivo: detecta movimiento y emite solo señales digitales 'alto' y 'bajo'
- Simple: no requiere librería externa de arduino
- Interfaz: Grove

## Especificaciones

|Elemento|Valor|
|---|---|
|Rango de voltaje|3V–5V|
|Ángulo de detección|100 grados|
|Distancia de detección|3.2m-12m|
|Tiempo de respuesta|< 1s|
|Temperatura de trabajo|-20-85 C|
|Interfaz|Grove|
|Dimensiones|20mm *20mm* 11.5mm|
|Peso|3g|
|Batería|Excluida|

## Plataforma Soportada

<!-- | Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) | -->
|Arduino|Raspberry Pi|
|---|---|
|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" alt="pir" width={200} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" alt="pir" width={200} height="auto" /></p>|

## Comenzando

### Comenzando con Arduino

#### Materiales Requeridos

|Seeeduino XIAO|Grove Breadboard|Grove Digital PIR Motion Sensor|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue uno ahora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Breadboard-p-4034.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### Conexión de Hardware

<!-- ![](https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/Hardware_Connection.jpg" alt="pir" width={600} height="auto" /></p>

La interfaz Grove en la placa de pruebas y en el Sensor PIR digital Grove están conectadas por el cable Grove.

#### Software

- **Paso1** Copia el código de abajo al IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
#define digital_pir_sensor 5 // connect to Pin 5

void setup()
{
  Serial.begin(9600);  // set baud rate as 9600
  pinMode(digital_pir_sensor,INPUT); // set Pin mode as input
}

void loop()
{
  bool state = digitalRead(digital_pir_sensor); // read from PIR sensor
  if (state == 1)
  Serial.println("A Motion has occured");  // When there is a response
  else
  Serial.println("Nothing Happened");  // Far from PIR sensor
}
```

- **Paso 2** Abre el puerto Serie y verás el valor cambiando cuando hagas un movimiento alrededor del sensor PIR.

### Primeros Pasos con Raspberry Pi

#### Materiales Requeridos

|Raspberry Pi 4B(4GB)|Grove Base Hat para Raspberry Pi|Grove Sensor de Movimiento PIR Digital|
|--------|-----------------------|-------------------------------------------------------------|
|<p><img src="https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|<p><img src="https://files.seeedstudio.com/products/101020793/img/101020793wiki210x157.jpg" alt="pir" width={600} height="auto" /></p>|
|[Consigue uno ahora](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html)|[Consigue uno ahora](https://www.seeedstudio.com/Grove-Digital-PIR-Motion-Sensor-p-4524.html)|

#### Conexión de Hardware

<!-- ![](https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/101020793/img/pi_PIR_demo.jpg" alt="pir" width={600} height="auto" /></p>

Conecta el sensor PIR con "D5" en el Grove Base Hat.

#### Código

- **Paso 1** Actualiza la versión del sistema de Raspberry Pi.

```
sudo apt-get update
```

- **Paso 2** Instala wiringPi.

```
sudo pip install wiringPi
```

Si usas Pi 4, por favor selecciona la versión de wiringPi

```
sudo pip install wiringPi==2.52.0
```

- **Paso 3** Obtén el Pin correcto al que te estás conectando.

```
gpio readall
```

aquí viene una tabla, encuentra la definición Pim del Pin 5 en la definición de cableado, en esta demostración, la definición del pin es 21.

```
gpio read 21
```

Puedes leer el valor del sensor PIR, cuando hay movimiento, el valor es "1", de lo contrario, el valor es "0".

## Visor Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/101020793/document/Grove_Digital_PIR_Motion_Sensor_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Especificación BS312](https://files.seeedstudio.com/products/101020793/document/BS312规格书.pdf)
- **[PDF]** [Esquemático de hardware](https://files.seeedstudio.com/products/101020793/document/Hardware_Schematic_SCH.pdf)

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
