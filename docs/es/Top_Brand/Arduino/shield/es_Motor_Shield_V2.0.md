---
description: Motor_Shield_V2.0
title: Motor Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Motor_Shield_V2.0
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg" alt="pir" width={600} height="auto" /></p>

:::note
Este documento funciona para Motor Shield V2.0/2.1/2.2.
:::

El Motor Shield es un módulo controlador para motores que te permite usar Arduino para controlar la velocidad de trabajo y la dirección del motor. Basado en el Chip de Doble Puente Completo L298, es capaz de controlar dos motores DC o un motor paso a paso. El Motor Shield puede ser alimentado directamente por Arduino o por una fuente de alimentación externa de 6V~15V a través de la entrada de terminal. Este módulo puede ser usado para el desarrollo de micro robots y vehículos inteligentes, etc.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Motor-Shield-V2-0.html?queryID=4a07292b83eeca2fc091c32620ff0c76&objectID=1498&indexName=bazaar_retailer_products" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

<table align="center">
 <caption> <h2>Versión</h2> </caption>
  <tbody>
  <tr>
    <td><h3>Revisión</h3></td>
    <td><h3>Descripciones</h3></td>
    <td><h3>Lanzamiento</h3></td>
  </tr>
  <tr>
    <td><h4>v1.0</h4></td>
    <td><h4>Lanzamiento público inicial</h4></td>
    <td><h4>NA</h4></td>
  </tr>
  <tr>
    <td><h4>v2.0</h4></td>
    <td><h4>Habilitar Pin +5V de Arduino/Seeeduino para alimentar motor</h4></td>
    <td><h4>2013-2</h4></td>
  </tr>  
  </tbody></table>

## Características

-------------------

- Distribución de pines estándar de Arduino UNO Shield
- Basado en el IC de puente completo L298
- Controla 2 motores DC o 1 motor paso a paso
- Entrada de alimentación externa disponible
- Indicadores LED
- Disipador de calor para mejor rendimiento
- Biblioteca de Arduino

## Especificaciones

-------------------

<table align="center">
  <tbody>
  <tr>
    <td><h3>Especificación</h3></td>
    <td><h3>Valor</h3></td>
  </tr>
  <tr>
    <td><h4>Voltaje de operación</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>Alimentación externa</h4></td>
    <td><h4>6-15V</h4></td>
  </tr>  
  <tr>
    <td><h4>Corriente de salida</h4></td>
    <td><h4>2.0A Máx @ Cada canal</h4></td>
  </tr>
    <tr>
    <td><h4>Rango PWM</h4></td>
    <td><h4>0-100%</h4></td>
  </tr>
    <tr>
    <td><h4>Salida</h4></td>
    <td><h4>2 canales, 4 puertos</h4></td>
  </tr>
  </tbody></table>

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/700px-MotorShieldHardware.png" alt="pir" width={600} height="auto" /></p>

**1**.Indicador del Canal 1, incluye 3 leds

- EB - habilitación del canal 1, activo en alto
- IN3 - estado de OUT3
- IN4 - estado de OUT4

**2**.Sensor del Canal 1 - Por favor conecte los 2 pines de la izquierda juntos para uso normal.

**Nota** que es una aplicación de alto nivel para detectar la corriente, por favor consulte la hoja de datos y el esquemático para más información.

**3**.SALIDA - Hay 2 canales, cada canal tiene 2 salidas

- Canal 0 - OUT1, OUT2
- Canal 1 - OUT3, OUT4

**4**.Sensor del Canal 0

**5**.Indicador del Canal 0, incluye 3 leds

- EB - habilitación del canal 0, activo en alto
- IN1 - estado de OUT1
- IN2 - estado de OUT2

**6**.Entrada de Alimentación Externa, rango 6-15V

**7**.Indicador de Reset - se pone rojo cuando se presiona el botón Reset

**8**.Botón de Reset - presionar para resetear el shield y Arduino

**9**.Indicador de Alimentación - se pone verde cuando hay alimentación, ya sea interna o externa

**A.** Interruptor de alimentación

- Conectar - Obtener alimentación de Arduino
- Desconectar - Obtener alimentación de fuentes externas

**B.** Pineado estándar de shield Arduino

### Pines Digitales Utilizados

<table align="center">
  <tbody>
  <tr>
    <td><h3>Pin de Arduino</h3></td>
    <td><h3>Función</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>OUT1</h4></td>
  </tr>  
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>Habilitación del Canal0</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>Habilitación del Canal1</h4></td>
  </tr>  
  <tr>
    <td><h4>D11</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>D12</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>D13</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  </tbody></table>

:::note
D8~D13 son utilizados por el Motor Shield. Por favor no uses esos pines para evitar conflictos.
:::

### Pin Analógico Utilizado

<table align="center">
  <tbody>
  <tr>
    <td><h3>Pin de Arduino</h3></td>
    <td><h3>Función</h3></td>
  </tr>
  <tr>
    <td><h4>D0</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D1</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D2</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D3</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D4</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>No Utilizado</h4></td>
  </tr>
  </tbody></table>

:::note
Not Used significa que puedes usar esos pines libremente.
:::

## Primeros Pasos

-------------------

### Controlar un motor DC

#### Conexión

Aquí te mostraremos cómo funciona este Motor Shield a través de una demostración simple. Primero que nada, necesitas preparar los siguientes elementos:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>Motor DC</h3></td>
    <td><h3>Motor Shield</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/130%20DC%20Motor_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Consigue UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank"><span>Consigue UNO Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>Consigue UNO Ahora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Configura **SEN_A** y **SEN_B**, conecta los 2 pines de la izquierda juntos con un jumper.
- Conecta **MB_EN** junto con un jumper, ya que no vamos a usar una fuente de alimentación externa.
- Conecta el motor DC al Canal 0 (OUT1 y OUT2).
- Conecta el Motor Shield al Arduino.
- Conecta Arduino a la PC mediante un cable USB.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/DC%20connection.jpg" alt="pir" width={600} height="auto" /></p>

#### Software

- Haz clic en el botón de abajo para descargar la biblioteca del motor shield.
- Por favor sigue los procedimientos de [cómo instalar una biblioteca de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar la biblioteca.

<p style={{textAlign: 'center'}}><a href="https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip" target="_blank"><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/400px-Motor_shield_v2_library.png" /></a></p>

- Sube el código al Seeeduino V4.

```cpp
//  Demo function:The application method to drive the DC motor.
//  Author:Loovee (luweicong@seeed.cc)
//  2016-3-11

#include "MotorDriver.h"

MotorDriver motor;

void setup()
{
    // initialize
    motor.begin();
}

void loop()
{
    motor.speed(0, 100);            // set motor0 to speed 100
    delay(1000);
    motor.brake(0);                 // brake
    delay(1000);
    motor.speed(0, -100);           // set motor0 to speed -100
    delay(1000);
    motor.stop(0);                  // stop
    delay(1000);
}
// END FILE
```

- Entonces verás que tu motor se mueve (1s), se detiene (1s), se mueve hacia atrás (1s), se detiene (1s), y se repite en bucle.

Si no pasa nada, por favor asegúrate de que:

- Hemos subido el código exitosamente
- El motor está conectado correctamente
- Los indicadores LED parpadean correctamente

### Controlar un Motor Paso a Paso

#### Conexión

Aquí te mostraremos cómo funciona este Motor Shield a través de una demostración simple. Primero que nada, necesitas preparar las siguientes cosas:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Seeeduino V4</h3></td>
    <td><h3>Motor Paso a Paso</h3></td>
    <td><h3>Motor Shield</h3></td>
  </tr>
  <tr>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/Motor%2024BYJ48_s.jpg" alt="pir" width={200} height="auto" /></p></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4><a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank"><span>Obtener Uno Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank"><span>Obtener Uno Ahora</span></a></h4></td>
    <td><h4><a href="https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html" target="_blank"><span>Obtener Uno Ahora</span></a></h4></td>
  </tr>  
  </tbody></table>

- Configura **SEN_A** y **SEN_B**, conecta los 2 pines de la izquierda juntos con un puente.
- Conecta **MB_EN** junto con un puente, ya que no vamos a usar una fuente de alimentación externa.
- Encuentra las definiciones de pines de tu motor paso a paso, y conéctalo a la SALIDA del shield. Como se muestra a continuación:

<table align="center">
  <tbody>
  <tr>
    <td><h3>motor paso a paso</h3></td>
    <td><h3>OUT1</h3></td>
  </tr>
  <tr>
    <td><h4>A+</h4></td>
    <td><h4>OUT2</h4></td>
  </tr>
  <tr>
    <td><h4>A-</h4></td>
    <td><h4>OUT3</h4></td>
  </tr>
  <tr>
    <td><h4>B+</h4></td>
    <td><h4>OUT4</h4></td>
  </tr>
  <tr>
    <td><h4>B-</h4></td>
    <td><h4>No Usado</h4></td>
  </tr>
  </tbody></table>

- Conecta el Motor Shield al Arduino.
- Conecta el Arduino a la PC mediante un cable USB.

#### Software

Copia el código de abajo al IDE de Arduino y súbelo al Seeeduino V4, luego verás que tu motor paso a paso se mueve.

```cpp
/*
 * Stepper test for Seeed Motor Shield V2
 * loovee @ 15 Mar, 2016
 */

#include <Stepper.h>

// change this to the number of steps on your motor
#define STEPS 200

// create an instance of the stepper class, specifying
// the number of steps of the motor and the pins it's
// attached to
Stepper stepper(STEPS, 8, 11, 12, 13);

// the previous reading from the analog input
int previous = 0;

void step(int steps)
{
    digitalWrite(9, HIGH);
    digitalWrite(10, HIGH);
    stepper.step(steps);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
}

void setup()
{
    // set the speed of the motor to 30 RPMs
    pinMode(9, OUTPUT);
    pinMode(10, OUTPUT);
    digitalWrite(9, LOW);
    digitalWrite(10, LOW);
    stepper.setSpeed(30);
}

void loop()
{
    step(1000);
    step(-1000);
}

// END FILE
```

Si no ocurre nada, por favor verifica dos veces si has conectado el cable correctamente.

## APIs de la Biblioteca

---------

### APIs del Motor DC

#### begin

**Descripción**

```Javascript
void begin();
```

#### velocidad

**Descripción**

```Javascript
void move(int motor_id, int speed);
```

- motor_id
  - 0 - Canal 0
  - 1 - Canal 1
- speed: -100~100, cuanto mayor sea, más rápido, 0 para parar

**stop**

```Javascript
void stop(unsigned char motor_id);
```

**frenar**

```Javascript
void brake(unsigned char motor_id);
```

#### Motor paso a paso

**Nota** que usamos la biblioteca proporcionada por Arduino IDE para controlar un motor paso a paso.

Hay algo que necesita ser modificado, por favor consulta los ejemplos.

## Preguntas frecuentes

**P1: El propósito del jumper MB_EN**

R1: Puedes ver un jumper de alimentación (MB_EN) en el shield del motor. Si lo mueves, el Arduino puede proporcionar energía al Shield, pero el shield (si el shield está conectado a una fuente de alimentación externa) no puede proporcionar energía al Arduino.

Si el jumper existe, uno puede proporcionar energía al otro bajo dos situaciones:

- USB al Arduino: si no hay alimentación externa conectada al Shield por separado, el Arduino proporcionará energía al Shield a través del pin VCC.

- Alimentación externa conectada al Shield: Si el shield tiene una alimentación separada, el voltaje pasaría primero por un rectificador (78M05), y luego proporcionaría energía al Arduino. En esta situación, ninguna corriente del Arduino podría pasar del Arduino al Shield a través del 78M05.

Así que el propósito de este jumper es una opción de si quieres usar el shield para proporcionar energía al Arduino o no.

**P2: ¿Hay un conflicto de pines entre el shield de tarjeta SD (103030005) y el shield del Motor (105030001) en Arduino UNO? ¿Cómo usarlos juntos?**

R2: Hay un conflicto de pines entre el shield del Motor y el shield de tarjeta SD en los pines digitales D11, D12, D13 del Arduino Uno. Así que no puedes apilarlos juntos con la placa Arduino Uno. Aquí está la solución para usarlos juntos.

- Paso 1. Apila el shield de tarjeta SD al Arduino.
- Paso 2. Modifica la biblioteca de Motordriver.h como sigue.

```cpp
/******Pins definitions*************/
#define MOTORSHIELD_IN1    8
#define MOTORSHIELD_IN2    7
#define MOTORSHIELD_IN3    6
#define MOTORSHIELD_IN4    5
#define SPEEDPIN_A        9
#define SPEEDPIN_B        10
```

**P3. No apiles el shield del motor sino haz las conexiones por separado como sigue desde el Arduino usando cables puente.**

R3: Aquí está la conexión.

<table align="center">
  <tbody>
  <tr>
    <td><h3>Arduino</h3></td>
    <td><h3>Shield del motor</h3></td>
  </tr>
  <tr>
    <td><h4>5V</h4></td>
    <td><h4>5V</h4></td>
  </tr>
  <tr>
    <td><h4>GND</h4></td>
    <td><h4>GND</h4></td>
  </tr>
  <tr>
    <td><h4>D5</h4></td>
    <td><h4>D13</h4></td>
  </tr>
  <tr>
    <td><h4>D6</h4></td>
    <td><h4>D12</h4></td>
  </tr>
  <tr>
    <td><h4>D7</h4></td>
    <td><h4>D11</h4></td>
  </tr>
  <tr>
    <td><h4>D8</h4></td>
    <td><h4>D8</h4></td>
  </tr>
  <tr>
    <td><h4>D9</h4></td>
    <td><h4>D9</h4></td>
  </tr>
  <tr>
    <td><h4>D10</h4></td>
    <td><h4>D10</h4></td>
  </tr>
  </tbody></table>

## Visor en Línea del Esquemático del Archivo Eagle del Motor Shield V2.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor en Línea del Esquemático del Archivo Eagle del Motor shield V2.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-------------------

- **[Eagle]** [Archivo Eagle del Motor Shield V2.0](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip)
- **[Eagle]** [Archivo Eagle del Motor shield V2.1](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar)
- **[PDF]** [Esquemáticos del Motor Shield 2.0](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.0.pdf)
- **[PDF]** [Esquemáticos del Motor Shield 2.1](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.pdf)
- **[PDF]** [Esquemáticos del Motor Shield 2.2](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor%20Shield%20v2.2.pdf)
- **[Library]** [Librería del Motor Shield](https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip)
- **[Datasheet]** [Hoja de Datos del L298](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/L298.pdf)
- **[Datasheet]** [Hoja de Datos del 78M05](https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/78M05_datasheet.pdf)

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
