---
description: Grove - Sensor de Fuerza Redondo FSR402
title: Grove - Sensor de Fuerza Redondo FSR402
keywords:
- Grove Grove_Sensors Touch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Round_Force_Sensor_FSR402
last_update:
  date: 1/19/2023
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/main.jpg)

El Grove-Sensor de Fuerza Redondo(FSR402) es un módulo sensible a la fuerza. En el extremo del sensor hay una resistencia sensible a la fuerza redonda, cuya resistencia depende de la presión aplicada a esta resistencia.
Simplemente dicho, a mayor presión, menor resistencia. Sin embargo, la salida de este sensor no es estrictamente lineal, por lo que no lo recomendamos para mediciones precisas. Para más detalles sobre el diagrama presión-resistencia, por favor consulte la
[Hoja de datos FSR402](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

Como puedes ver, este módulo está basado en FSR402, la Serie FSR® 400 de Interlink Electronics es parte de la familia de Resistencias Sensibles a la Fuerza® de zona única. Las Resistencias Sensibles a la Fuerza, o FSR's, son dispositivos robustos de película gruesa de polímero (PTF) que exhiben una disminución en la resistencia con el aumento de la fuerza aplicada a la superficie del sensor. Esta sensibilidad a la fuerza está optimizada para uso en dispositivos de interfaz humano-máquina incluyendo electrónica automotriz, sistemas médicos, controles industriales y robótica.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove-Sensor de Fuerza Redondo(FSR402) | Inicial                                                                                               | Jun 2018      |

## Características

- Salida analógica
- Estructura mecánica confiable  
- Alta durabilidad:

    Probado a 10 millones de actuaciones, 1kg, 4Hz / -10% cambio promedio de resistencia

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de trabajo|3.3V/5V|
|Rango de Sensibilidad de Fuerza|0.2N--20N|
|Resolución de Fuerza|Continua (analógica)|
|Salida analógica|0-650|
|Resistencia No Actuada|>10 MΩ|
|Resistencia Mínima|1 KΩ|
|Tiempo de Subida del Dispositivo|&lt;3 Microsegundos|
|Tamaño|L: 75mm A: 20mm H: 11mm|
|Peso|2.5g|
|Tamaño del paquete|L: 140mm A: 90mm H: 10mm|
|Peso bruto|10g|

:::tip
Si quieres medir la Resistencia No Actuada, por favor retira esta cosa del sensor
:::

## Aplicaciones

- electrónica automotriz
- sistemas médicos
- controles industriales
- robótica.

## Descripción General del Hardware

### Mapa de Pines

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/pin_map.jpg)

### Esquemático

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/hardware.png)

Este módulo usa un chip DC-DC XC6206P332MR para proporcionar un 3.3V estable, como puedes ver lo llamamos 3V3. Puedes considerar el Sensor de Fuerza **J1** como una resistencia variable, digamos **R<sub>f<sub></sub></sub>** . Cuanto mayor sea la presión, menor será el valor de **R<sub>f<sub></sub></sub>**.

Hay dos partes en la imagen de arriba, para la parte izquierda:

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>IN</sub> = (3.3 × 30K) / (30K + R<sub>f</sub>)</div>

Para la parte derecha, es un seguidor emisor, usamos el amplificador U1 para aislar los circuitos de pre-etapa y post-etapa.

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>out</sub> = V<sub>IN</sub></div>

Entonces, la salida es:

<div style={{color:'#EE9A00',fontWeight:'bold',textAlign:'center',padding:'10px',backgroundColor:'var(--ifm-color-emphasis-100)',border:'1px solid var(--ifm-color-emphasis-300)',borderRadius:'5px',margin:'15px 0'}}>V<sub>out</sub> = (3.3 × 30K) / (30K + R<sub>f</sub>)</div>

:::tip
En esta sección solo te mostramos parte del esquemático, para el documento completo por favor consulta los [Recursos](#resources)
:::

### Dibujo Mecánico

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_A.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Mechanical_B.jpg)
![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Exploded_View.jpg)

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove-Sensor de Fuerza Redondo(FSR402) |Grove-LED|
|--------------|-------------|-----------------|--------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/Red%20LED.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Round-Force-Sensor-%28FSR402%29-p-3110.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove---Red-LED-p-1142.html" target="_blank">Obtener Uno Ahora</a>|

:::note
 **1** Por favor, conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor, usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.
:::

- **Paso 1.** Conecta Grove-Round Force Sensor(FSR402) al puerto **A0** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove-LED al puerto **D3** del Grove-Base Shield.

- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/img/connect.jpg)

:::note
Si no tenemos Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino     | Grove-Round Force Sensor(FSR402)|
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| A0           | Amarillo                  |
| Seeeduino     | Grove-LED|
|---------------|-------------------------|
| 5V            | Rojo                     |
| GND           | Negro                   |
| No Conectado | Blanco                   |
| D3            | Amarillo                  |


#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Abre el IDE de Arduino y crea un nuevo archivo, luego copia el siguiente código en el nuevo archivo.

```cpp
/* How to use a Force sensitive resistor to fade an LED with Arduino
   More info: http://www.ardumotive.com/how-to-use-a-force-sensitive-resistor-en.html
   Dev: Michalis Vasilakis // Date: 22/9/2015 // www.ardumotive.com  */

//Constants:
const int ledPin = 3;     //pin 3 has PWM funtion
const int sensorPin = A0; //pin A0 to read analog input

//Variables:
int value; //save analog value


void setup(){
    
  pinMode(ledPin, OUTPUT);  //Set pin 3 as 'output'
  Serial.begin(9600);       //Begin serial communication

}

void loop(){
  
  value = analogRead(sensorPin);       //Read and save analog value from potentiometer
  Serial.println(value);               //Print value
  value = map(value, 0, 1023, 0, 255); //Map value 0-1023 to 0-255 (PWM)
  analogWrite(ledPin,255-value);          //Send PWM value to led
  delay(100);                          //Small delay
  
}

```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 3.** Abre el **Monitor Serie** del IDE de Arduino haciendo clic en **Herramienta-> Monitor Serie**. O presiona las teclas ++ctrl+shift+m++ al mismo tiempo. Si todo va bien, obtendrás la salida de A0. Además, verás que el LED se vuelve más brillante cuando presiones el Sensor de Fuerza Redondo con más fuerza.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivo eagle del Grove-Sensor de Fuerza Redondo(FSR402)](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/Grove-Round_Force_Sensor_FSR402.zip)
- **[Zip]** [Adafruit_NeoPixel-master](https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip)
- **[PDF]** [Hoja de datos del FSR402](https://files.seeedstudio.com/wiki/Grove-Round_Force_Sensor_FSR402/res/FSR402.pdf)

## Proyecto

Este es el Video de introducción de este producto, demostraciones simples, puedes intentarlo.

<div class="video-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/55WQ3ia52JM?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Soporte Técnico y Discusión del Producto


¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
