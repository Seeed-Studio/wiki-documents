---
title: Grove - Sensor de Movimiento PIR Ajustable
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Adjustable_PIR_Motion_Sensor/
slug: /es/Grove-Adjustable_PIR_Motion_Sensor
last_update:
  date: 01/05/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/main.jpg)

Grove - Sensor de Movimiento PIR Ajustable es un sensor de movimiento infrarrojo pasivo fácil de usar, que puede detectar movimiento de objetos infrarrojos hasta 3 metros. Cualquier objeto infrarrojo que se mueva en su rango de detección hace que el sensor genere una señal HIGH en su pin SIG. Y puedes ajustar el tiempo de señal HIGH hasta 130s mediante el potenciómetro, además, puedes ajustar el rango de detección mediante el otro potenciómetro.

<iframe width={800} height={450} src="https://www.youtube.com/embed/EhZ7uDvoALE" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Sensor de Movimiento PIR Ajustable | Inicial                                                                                               | Sep 2018      |

## Características

- Filtro incorporado, alta inmunidad a RFI
- Tiempo de salida, sensibilidad y rango de detección ajustables
- Bajo voltaje, bajo consumo de energía

## Especificaciones

<div>
  |Elemento|Valor|
  |---|---|
  |Voltaje de Operación|3.3V / 5V|
  |Temperatura de Operación|-30℃ ~ 70℃|
  |Ángulo de Visión|Colocación horizontal 80°<br />Colocación vertical 55°|
  |Respuesta Espectral de Detección(λ)|5nm ~ 14nm|
  |Distancia de Detección|0 ~ 3m|
  |Tiempo de Nivel Alto Encendido| &lt;130s|
  |Interfaz|Digital|
  |Tamaño|L: 40mm A: 20mm H: 15mm|
  |Peso|4.5g|
  |Tamaño del Paquete|L: 140mm A: 90mm H: 15mm|
  |Peso Bruto|10g|
</div>

## Aplicaciones típicas

- Detección de movimiento PIR
- Detección de intrusos
- Detección de ocupación
- Luces con sensor de movimiento
- Sistema de seguridad
- Control automático

## Descripción General del Hardware

### Distribución de Pines

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/pinout_back.jpg)

:::warning
  La lente de Fresnel equipada con el módulo es una pieza de plástico y está prohibido acercarla a altas temperaturas o llamas abiertas.
:::

### Esquemático

**Alimentación**

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/11.jpg)

El voltaje típico del L221D es 3.3V, por lo que usamos el chip [XC6206P332MR](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf) para proporcionar un 3.3V estable. La entrada del XC6206P33 varía de 1.8V a 6.0V, por lo que puedes usar este módulo con tu Arduino tanto en 3.3V como en 5V.

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield |Sensor de Movimiento PIR Ajustable | Grove - LED Azul |
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/led.jpg)|

|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Adjustable-PIR-Motion-Sensor-p-3225.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Blue-LED-p-1139.html" target="_blank">Obtener Uno Ahora</a>

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en su interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta el Grove - Adjustable PIR Motion Sensor al puerto **D2** del Grove-Base Shield, conecta el Grobe - Blue LED al puerto **D4** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/img/connect.jpg)

:::note
        Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       | Grove - Adjustable PIR Motion Sensor |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| SIN conexión            | Blanco              | NC |
| D2           | Amarillo             | SIG |
| Seeeduino      |  Cable Grove       | Grove - Blue LED |
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V     | Rojo                | VCC |
| SIN conexión            | Blanco              | NC |
| D4           | Amarillo             | SIG |


#### Software

:::note
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Simplemente haz clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
/*macro definitions of PIR motion sensor pin and LED pin*/
#define PIR_MOTION_SENSOR 2//Use pin 2 to receive the signal from the module 
#define LED 4//the Grove - LED is connected to D4 of Arduino

void setup()
{
 pinsInit();
}

void loop() 
{
 if(isPeopleDetected())//if it detects the moving people?
  turnOnLED();
 else
  turnOffLED();
}
void pinsInit()
{
 pinMode(PIR_MOTION_SENSOR, INPUT);
 pinMode(LED,OUTPUT);
}
void turnOnLED()
{
 digitalWrite(LED,HIGH);
}
void turnOffLED()
{
 digitalWrite(LED,LOW);
}
/***************************************************************/
/*Function: Detect whether anyone moves in it's detecting range*/
/*Return:-boolean, ture is someone detected.*/
boolean isPeopleDetected()
{
 int sensorValue = digitalRead(PIR_MOTION_SENSOR);
 if(sensorValue == HIGH)//if the sensor value is HIGH?
 {
  return true;//yes,return ture
 }
 else
 {
  return false;//no,return false
 }
}
```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::success
     Si todo va bien, cuando alguien se acerque a este sensor o cuando te acerques a este sensor con tu mano, el LED se encenderá.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - Archivos Eagle del Sensor de Movimiento PIR Ajustable](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Grove%20-%20Adjustable%20PIR%20Motion%20Sensor.zip)

- **[PDF]** [Hoja de Datos L221D](https://files.seeedstudio.com/wiki/Grove-Adjustable_PIR_Motion_Sensor/res/Mini%20SMD%20Digital%20Pyroelectric%20Infrared%20Sensors.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
