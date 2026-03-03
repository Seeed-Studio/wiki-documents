---
description: Motor Shield V1.0
title: Motor Shield V1.0
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Motor_Shield_V1.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name: Motor Shield V1.0
category: Discontinued
bzurl:
oldwikiname: Motor_Shield_V1.0
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Motor-Shield_V1-0
sku: 103030012
tags:

--- -->

El Motor Shield es una plataforma perfecta para aplicaciones robóticas y mecánicas. Permite que Arduino controle dos motores DC con escobillas o un motor paso a paso de dos fases de 4 cables. Basado en el circuito integrado controlador de motor L298N con driver de puente H, requiere una fuente de alimentación de 6V a 15V para alimentar el motor y también incluye un regulador de voltaje de 5V integrado para alimentar la placa Arduino principal. Sensores Grove adicionales plug and play pueden conectarse a los 13 conectores Grove integrados.

Modelo: [SLD80256P](https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132_134)

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Smotoshield2.jpg)

## Características

- Compatible con estándar Arduino

- Modo de control de velocidad modulado por ancho de pulso

- 4 luces indicadoras de dirección

- Compatible con sensores Grove plug and play

- Disipador de calor extra grande ayuda a manejar cargas grandes

- Soporta hasta 14 servos

**PRECAUCIÓN:**

El IC del Driver y el disipador de calor pueden calentarse mucho cuando trabajan con corriente superior a 1000mA.

## Especificaciones

| Elemento | Mín | Típico | Máx | Unidad |
|----------|-----|--------|-----|--------|
| Voltaje de Control Lógico | 4.5 | 5 | 5.5 | V |
| Voltaje de Alimentación del Motor | 6 | / | 15 | V |
| Voltaje de Salida | 0 | / | Ventrada - 1 | V |
| Corriente de Salida (Para Cada Canal) | / | / | 2000 | mA |
| Rango de Ciclo de Trabajo de Salida | 0% - 100% | | | / |
| Dimensión | 68.5×54.5×29.5 | | | mm |
| Peso Neto | 37 | | | g |

- Se recomienda un ciclo de trabajo máximo &lt;50% a carga completa

## Función de la Interfaz

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield-hard3.jpg)

**Conector de Alimentación Externa:** Fuente de alimentación externa para el Motor Shield.

**Interfaz del Motor:** Out 1 y Out 2 (Out 3 y Out 4) pueden conectar el Motor A(B) para motor DC.

**Conector de Habilitación del Motor A:** Conecta las dos interfaces superiores con un puente cuando se conduce el motor DC A.

**Conector de Habilitación del Motor B:** Conecta las dos interfaces inferiores con un puente cuando se conduce el motor DC B.

**Conector de Selección de Alimentación:** La alimentación USB/Externa puede suministrar energía para conducir el Motor. Cuando se conecta el conector usando un puente, la alimentación USB para el motor shield.

La siguiente tabla describe los LEDs indicadores del Motor A/B.

|  Indicadores|Descripción |
|---|---|
| IN1_rojo|se enciende cuando el motor A gira en sentido horario, el pin out1 emite nivel alto  |
| IN2_verde|se enciende cuando el motor A gira en sentido antihorario, el pin out2 emite nivel alto  |
|  IN3_rojo|se enciende cuando el motor B gira en sentido horario, el pin out3 emite nivel alto |
| IN4_verde|se enciende cuando el motor B gira en sentido antihorario, el pin out4 emite nivel alto  |

|  Nombre del Pin|Dirección|Conexión a Arduino|Descripción
|---|---|---|---|
|VCC|/|VCC|Selector de fuente de alimentación   |
|  VS, GND|/|/|Fuente de alimentación para motor, 6V - 15V |
| EA|Entrada|D9|Entrada de habilitación compatible con TTL del puente A  |
|  EB|Entrada|D10|Entrada de habilitación compatible con TTL del puente B |
|  IN1|Entrada|D8|Entradas compatibles con TTL del puente A |
| IN2|Entrada|D11|Entradas compatibles con TTL del puente A  |
|  IN3|Entrada|D12|Entradas compatibles con TTL del puente B |
|  IN4|Entrada|D13|Entradas compatibles con TTL del puente B |  
|  M1-, M1+|Salida|/|Salidas del puente A |
| M2-, M2+|Salida|/|Salidas del puente B  |  

## Uso

### Instalación de Hardware

Conecte el motor DC a los pines de salida del shield de motor M1+ y M1- (M2+ y M2-), si usa un motor paso a paso de 4 cables, asegúrese de que los 4 pines estén conectados correctamente. Conecte el voltaje de alimentación (El voltaje requerido depende del motor utilizado. Consulte la hoja de datos del motor) a los terminales de fuente de alimentación.

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor-basic.jpg)

Con el jumper J4 insertado, Arduino puede ser alimentado por el voltaje de alimentación a través de un regulador de voltaje integrado, que regula el voltaje de alimentación a 5v.

### Software

Descargue el [código de demostración del shield de motor](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip) y abra el sketch **Motor_shield_demo_code**. Seleccione la placa Arduino correspondiente en **tools-boards** y el puerto serie en **tools-serial port**.

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Motor_shield.png)

Cargue el sketch a su placa arduino, entonces encontrará que los 2 motores comienzan a funcionar. Si alimenta el shield de motor a través del terminal de alimentación y el jumper de alimentación J4 fue insertado, puede quitar el cable USB ahora.

El control de velocidad se logra a través de PWM convencional que se puede obtener de la salida PWM de Arduino D9(EA) y D10(EB). Usando la función **analogWrite()** para generar el PWM de control:

```cpp
int speedpinA=9;//enable motor A
int speedpinB=10;//enable motor B
int speed =127;//define the speed of motor
    ......
analogWrite(speedpinA,speed);//AnalogWrite to Generate PWM to control the motor speed
analogWrite(speedpinB,speed);
```

Y configura los pines digitales D8(IN1) y D11(IN2) para controlar el motor conectado a OUT1/2, mientras que los pines digitales D12(IN3) y D13(IN4) controlan el motor conectado a OUT3/4.

```cpp
int pinI1=8;//define I1 interface
int pinI2=11;//define I2 interface
    ......
digitalWrite(pinI2,HIGH);//turn DC Motor A move clockwise
digitalWrite(pinI1,LOW);
```

Sigue la lógica entre EA(B) e INx con el movimiento del motor:

| EA(B)|IN1(IN3)|IN2(IN4)|Movimiento del MotorA(B)  |
|---|---|---|---|
|   0|x|x|Parar  |
|   1|0|0|Parar |
|   1|0|1|Sentido horario |
|  1|1|0|Sentido antihorario |  
| 1|1|1|Parar  |

```cpp
/*
 SEEED Studio Stepper Motor Control - one revolution

 Adapts the Stepper example for use with the SEEED STUDIO motor shield.
 This program drives a unipolar or bipolar stepper motor
 by using the included Stepper library of the Arduino.
 The motor is attached to the Seeed Studio motor shield and an Arduino.

 The digital pins 8,11,12,13 drive the L298N and are used when creating the stepper object
 Digital pins 9 and 10 must be high to enable the chip.

 The motor should revolves one revolution in one direction, then
 one revolution in the other direction.


 Created 11 Mar. 2007
 Modified 30 Nov. 2009
 by Tom Igoe
 Modified 4 July 2012
 By R. Dumouchelle

 */

#include <Stepper.h>

const int stepsPerRevolution = 200;  // change this to fit the number of steps per revolution
// for your motor

// initialize the stepper library on pins 8 through 11:
Stepper myStepper(stepsPerRevolution, 8,11,12,13);           

void setup() {
  // set the speed at 60 rpm:
  myStepper.setSpeed(60);
  // initialize the serial port:
  Serial.begin(9600);
  pinMode(9,OUTPUT);
  pinMode(10,OUTPUT);
  digitalWrite(9,HIGH);
  digitalWrite(10,HIGH);
}

void loop() {
  // step one revolution  in one direction:
  Serial.println("clockwise");
  myStepper.step(stepsPerRevolution);
  delay(500);

  // step one revolution in the other direction:
  Serial.println("counterclockwise");
  myStepper.step(-stepsPerRevolution);
  delay(500);
}
```

## Rastreador de Versiones

|  Revisión|Descripciones| Lanzamiento  |  
|---|---|---|
| v1.0|Lanzamiento V1.0|2012/3/29  |

## Proyectos Relacionados

### Demo Motor Shield V2.0

![](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/img/Seeed-Recipe-Motor_Shield_V2.0_.png)

Esta es una receta sobre cómo controlar motores individualmente con el motor shield 2.0 de Seeedstudio.

[Quiero hacerlo](https://www.seeedstudio.com/recipe/171-seeed-2-0-motor-shield-individual-control.html).

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Hoja de Datos]** [L298datasheet](https://wiki.seeedstudio.com/es/images/5/5e/L298datasheet.pdf)
- **[EAGLE]**  [Archivos eagle Motor Shield](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motorshield09gerber.zip)
- **[PDF]**[Motor Driver pcb](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver.pdf)
- **[PDF]**[Motor Driver sch](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Motor%20Driver%20SCH.pdf)
- **[Código]**  [Código demo motor shield](https://files.seeedstudio.com/wiki/Motor-Shield_V1.0/res/Grobe-Motor_Shield_Demo_Code.zip)

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
