---
title: Paquete de Controlador de Motor Paso a Paso con Engranajes
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Gear_Stepper_Motor_Driver_Pack/
slug: /es/Gear_Stepper_Motor_Driver_Pack
last_update:
  date: 02/03/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/main.jpg)

El Paquete de Controlador de Motor Paso a Paso con Engranajes incluye un motor paso a paso y una placa controladora de motor. Es un motor paso a paso de cuatro fases y ocho pasos, y puedes controlar fácilmente este motor paso a paso a través de la placa controladora.

Puedes usar este paquete para control de posición.

<p style={{}}><a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Bajo ruido
- Gran torque
- Caja de engranajes integrada

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|5V|
|Fases|4|
|Relación de reducción|1/64|
|Ángulo de Paso|5.625°/64|
|Diámetro|28mm / Nema 11|
|Frecuencia de Tracción en Reposo|>500HZ|
|Frecuencia de Extracción en Reposo|>1000HZ|
|Resistencia|21±7%|
|Ruido|≤40dB|
|Modo de control|cuatro fases ocho pasos|

## Aplicaciones típicas

- Impresoras de escritorio
- Plotters
- Impresoras 3D
- Máquinas de fresado CNC

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_1.jpg)

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/pin_out_2.jpg)

### Dibujo mecánico

puedes hacer clic en él para ver la imagen original.

<p style={{}}><a href="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" target="_blank"><img src="https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/mechanical.jpg" /></a></p>

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::tip
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Paquete de Controlador de Motor Paso a Paso con Engranajes |Cables puente Hembra-Macho|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html" target="_blank">Obtener Uno Ahora</a>|

:::note
**1** Por favor conecta el cable USB con cuidado, de lo contrario podrías dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

**2** Para hacer que el Gear-Stepper-Motor-Driver-Pack funcione con tu Arduino, también se requieren varios jumpers Hembra-Macho. En caso de que no tengas jumpers, puedes hacer clic [aquí](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) para comprar.
:::note

- **Paso 1.** Conecta la Placa Controladora del Motor Paso a Paso con Engranajes a tu seeedunio mediante jumpers.

|Seeeduino|Placa Controladora del Motor Paso a Paso con Engranajes|
|---|---|
|Pin Digital 8|IN1|
|Pin Digital 9|IN2|
|Pin Digital 10|IN3|
|Pin Digital 11|IN4|
|GND|GND|
|VCC_5V|VCC|
|VCC_5V |VM|

:::tip
Puedes conectar el pin VM a VCC_5V o simplemente no usarlo siempre que elijas VCC en el interruptor.
:::

- **Paso 2.** Conecta el motor paso a paso a la Placa Controladora de Motor Paso a Paso con Engranajes.

- **Paso 3.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/connect.jpg)

#### Software

:::note
Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Haz clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp
int pwm1=9;
int pwm2=10;
int ctr_a =9;
int ctr_b =8;
int ctr_c =11;
int ctr_d =10;
int sd =6;
int i=0;
int t=1500;

void setup()
{
    pinMode(ctr_a,OUTPUT);
    pinMode(ctr_b,OUTPUT);
    pinMode(ctr_c,OUTPUT);
    pinMode(ctr_d,OUTPUT); 
    delay(1);     
}


void loop ()
{
   for(i=1500;i>=1;i--)
   {
       digitalWrite(ctr_a,LOW);//A
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,LOW);//AB
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);//B
       digitalWrite(ctr_c,HIGH);
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,LOW);
       digitalWrite(ctr_c,LOW);//BC
        digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//C
       digitalWrite(ctr_d,HIGH);
       delayMicroseconds(t);
       digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,LOW);//CD
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
        digitalWrite(ctr_a,HIGH);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//D
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       digitalWrite(ctr_a,LOW);
       digitalWrite(ctr_b,HIGH);
       digitalWrite(ctr_c,HIGH);//DA
       digitalWrite(ctr_d,LOW);
       delayMicroseconds(t);
       
   }
}
```

- **Paso 2.** Sube la demostración. Si no sabes cómo subir el código, por favor revisa [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
     Si todo va bien, puedes ver el motor funcionar:
:::

![](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/_DAS7726.MOV_20181115_134717.gif)

### Raspberry Pi + Python

#### Materiales requeridos

| Pi Pico | Gear Stepper Motor Driver Pack | Cables puente Hembra-Hembra|
|--------------|-------------|-----------------|
|![A Raspberry Pi Pico](https://files.seeedstudio.com/wiki/Grove_Shield_for_Pi_Pico_V1.0/Picoboard1.jpg)|![Gear Stepper Motor Driver Pack](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/thumbnail.jpg)|![Female-Female jumpers](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/img/jumper.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Gear-Stepper-Motor-Driver-Pack-p-3200.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html" target="_blank">Obtener Uno Ahora</a>|

#### Antecedentes

El motor paso a paso tiene 4 electroimanes separados en su interior que debes alimentar uno por uno en secuencia para hacer girar una muesca en el engranaje. El engranaje tiene 64 muescas, por lo que necesitas hacer esto 64 veces para una revolución completa del eje.

Puedes hacer esto tú mismo alimentando los pines uno por uno, o usando una biblioteca como [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib).

#### Método

1. Si no lo hiciste ya, [sigue esta guía](https://projects.raspberrypi.org/en/pathways/pico-intro) para configurar tu Raspberry Pi Pico ejecutando Python a través de Thonny + picozero en tu computadora.

1. Conecta la Placa Controladora del Motor Paso a Paso con Engranajes a tu Pi Pico usando cables puente.

    |Pi Pico|Placa Controladora del Motor Paso a Paso con Engranajes
    |---|---|
    |VBUS|VCC|
    |GND|GND|
    |GP2|IN1|
    |GP3|IN2|
    |GP4|IN3|
    |GP5|IN4|

1. Mira de cerca tu Placa Controladora del Motor Paso a Paso con Engranajes y verás un interruptor diminuto que dice VCC en un extremo y VM en el otro. Esto te permite elegir si alimentar el motor desde el mismo pin que el controlador (VCC), o una fuente de voltaje separada (VM). Por ahora solo usaremos VCC. Asegúrate de que el interruptor esté en VCC.

1. Conecta tu Pi Pico a tu computadora por USB (o conéctate a él de forma inalámbrica) y abre Thonny.

1. Sube el siguiente código a Thonny y ejecútalo.

```python
from gpiozero import Button, LED
from time import sleep

wait = 0.001 # seconds

ctrA = LED(2) # IN1
ctrB = LED(3) # IN2
ctrC = LED(4) # IN3
ctrD = LED(5) # IN4

while True:
  # A
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # AB
  ctrA.on()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # B
  ctrA.off()
  ctrB.on()
  ctrC.off()
  ctrD.off()
  sleep(wait)

  # BC
  ctrA.off()
  ctrB.on()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # C
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.off()
  sleep(wait)

  # CD
  ctrA.off()
  ctrB.off()
  ctrC.on()
  ctrD.on()
  sleep(wait)

  # D
  ctrA.off()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)

  # DA
  ctrA.on()
  ctrB.off()
  ctrC.off()
  ctrD.on()
  sleep(wait)
```

:::tip
_¿Qué está pasando aquí?_
El motor paso a paso tiene 4 electroimanes separados en su interior. Los estás alimentando uno por uno en un bucle, lo que hace girar el engranaje una muesca. ¡Haz esto 64 veces muy rápido y el eje gira una rotación completa!
:::

#### Usando una biblioteca

También puedes usar bibliotecas como [RpiMotorLib](https://github.com/gavinlyonsrepo/RpiMotorLib) para eliminar la parte difícil:

1. Thonny -> Tools -> Manage packages -> busca `RpiMotorLib` -> instalar

1. Sigue los mismos pasos de cableado de la sección anterior

1. Reemplaza tu código con esto:

```
from RpiMotorLib import RpiMotorLib

GpioPins = [2, 3, 4, 5]
mymotortest = RpiMotorLib.BYJMotor("MyMotorName", "28BYJ")
mymotortest.motor_run(GpioPins, 0.001, 512, False, False, "half", 0.05)
```

:::tip
El "28BYJ" mencionado arriba se refiere al modelo del motor paso a paso que estás usando. Puedes encontrar explicaciones para los otros argumentos [en la documentación de RpiMotorLib.](https://github.com/gavinlyonsrepo/RpiMotorLib/blob/master/Documentation/28BYJ.md) (esto usa una placa controladora diferente pero la mayoría de las cosas son iguales).
:::

## Recursos

- **[Zip]** [Archivos Eagle de la Placa Controladora de Motor Paso a Paso con Engranajes](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/Stepper%20Motor%20Driver.rar)

- **[PDF]** [Hoja de Datos Motor CX28BYJ48](https://files.seeedstudio.com/wiki/Gear-Stepper-Motor-Driver-Pack/res/CX28BYJ48.pdf)

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
