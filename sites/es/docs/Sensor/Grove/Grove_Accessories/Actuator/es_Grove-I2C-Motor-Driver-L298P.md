---
title: Grove - Controlador de Motor I2C (L298P)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-I2C-Motor-Driver-L298P/
slug: /es/Grove-I2C-Motor-Driver-L298P
sku: 105020093
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png)

Grove - Controlador de Motor I2C (L298P) es un controlador de motor de uso común para motor paso a paso y servomotor. Incorpora un chip STM32 para grabar el código que controla el controlador de motor. Este es un controlador de motor de 2 canales, cada canal puede soportar hasta 1A de corriente. También puedes usar la interfaz I2C para transmitir datos desde el microcontrolador periférico. La dirección I2C predeterminada es 0x0f y puedes cambiar la dirección del controlador de motor conectando el puente de cables I2C. La dirección I2C es seleccionable desde 0x00 hasta 0x0f.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
  </a>
</div>

## Características

- MCU: Microcontrolador STM32f030f4P6 para grabar el código y controlar el Controlador de Motor.
- Chip controlador de motor L298P: de uso común para controlador de motor y puede manejar motor paso a paso y servomotor.
- Dirección I2C seleccionable: cambia la conexión del puente de cables para obtener la dirección I2C desde 0x00 hasta 0x0f, la dirección I2C predeterminada es 0x0f.
- Salida de 2 canales: capaz de soportar 1A de corriente en cada canal, máximo 2A de corriente; Necesita entrada de voltaje DC de 6V-12V.
- LED de usuario: LED verde encendido para la dirección horaria y LED rojo encendido para la dirección antihoraria para cada canal.

## Especificaciones

|Elemento|Valor|
|---|---|
|MCU|STM32f030f4P6|
|Fuente de Alimentación|6-12V DC|
|Interfaz|Grove I2C|
|Dirección I2C|Predeterminada 0x0f, se puede cambiar conectando el puente de cables|
|Canal|2|
|Corriente de salida|MÁX 2A, 1A para cada canal|
|Voltaje de salida|5V|

## Plataforma Soportada

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Usar la plataforma Arduino

#### Materiales Requeridos

| Seeeduino V4.2 | Base Shield|  Grove - Controlador de Motor I2C (L298P)|
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html)|


#### Conexión de hardware

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg" style={{width:'auto', height:400}}/>
</div>

- **Paso 1** Conecta Grove - Controlador de Motor I2C (L298P) al puerto I2C del Grove-Base Shield.

- **Paso 2** Conecta Grove - Base Shield al Seeeduino.

- **Paso 3** Conecta el Seeeduino a la PC mediante un cable USB.

#### Código de Software 1 - Motor DC

```cpp
#include "Grove_I2C_Motor_Driver.h"

#define I2C_ADDRESS 0x0f /* default I2C address is 0x0f */

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
}

void loop() {
    // Set speed of MOTOR1, Clockwise, speed: -100~100
    Motor.speed(MOTOR1, 50);
    // Set speed of MOTOR2, Anticlockwise
    Motor.speed(MOTOR2, -70);
    delay(2000);
    // Change speed and direction of MOTOR1
    Motor.speed(MOTOR1, -100);
    // Change speed and direction of MOTOR2
    Motor.speed(MOTOR2, 100);
    delay(2000);
    // Stop MOTOR1 and MOTOR2
    Motor.stop(MOTOR1);
    Motor.stop(MOTOR2);
    delay(2000);
}
```

- **Paso 1** Descarga la [Librería Grove_I2C_Motor_Driver_v1_3](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip) desde Github.

- **Paso 2** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

Con la función speed(), puedes controlar un motor a la velocidad que desees.

- **motor_id** representa qué motor usar. Puedes llenar MOTOR1 o MOTOR2.

- **_speed** representa la velocidad que estableces para el motor. Puedes llenar -100~100 aquí. Cuando _speed&gt;0, el motor DC gira en sentido horario, mientras que _speed&lt;0, el motor DC gira en sentido antihorario. Y mientras mayor sea el valor absoluto de _speed, más rápida será la velocidad del motor DC.

Con la función stop(), puedes detener un motor DC en funcionamiento.

- **motor_id** representa qué motor usar. Puedes llenar MOTOR1 o MOTOR2.

#### Código de Software 2 - Motor Paso a Paso

```cpp
#include <Grove_I2C_Motor_Driver.h>

#define I2C_ADDRESS 0x0f // default I2C address is 0x0f

void setup() {
    Serial.begin(9600);
    Motor.begin(I2C_ADDRESS);
    // Drive a stepper motor
    // \_step: -1024~1024, when \_step>0, stepper motor runs clockwise; \_step<0, stepper
// motor runs anticlockwise; when \_step is 512, the stepper motor will run a complete
    // turn; if step is 1024, the stepper motor will run 2 turns.
    Motor.StepperRun(-1024);
    Motor.StepperRun(512);
}

void loop() {
    // your code here
}
```

Tome el [Motor Paso a Paso 24BYJ48](https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html) como ejemplo, la instalación del hardware se muestra a continuación:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg" style={{width:600, height:'auto'}}/>
</div>

La conexión entre el **Motor Paso a Paso 24BYJ48** y el Controlador de Motor I2C se muestra a continuación:

<div style={{textAlign:'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg" style={{width:'auto', height:'auto'}}/>
</div>


- **_step** representa los pasos que estableces para que el motor paso a paso funcione. Puedes llenar -1024~1024. Cuando _step&gt;0, el motor paso a paso gira en sentido horario, mientras que _step&lt;0, el motor paso a paso gira en sentido antihorario. Cuando _step es 512/-512, el motor paso a paso dará una vuelta completa y si _step es 1024/-1024, el motor paso a paso dará 2 vueltas. El motor paso a paso se detendrá automáticamente después de completar sus pasos.

:::note

Si encuentras una situación donde la frecuencia PWM no se puede cambiar y permanece fija en 24Hz, es necesario actualizar el firmware usando un Jlink o ST-link. Puedes encontrar el nuevo firmware aquí:

[https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin](https://github.com/Seeed-Studio/grove_stm32f030/blob/master/firmware/grove_i2c_motor_driver_stm32f030.ino.bin)

Para cambiar la frecuencia PWM, usa `Motor.frequence(50)` donde el valor es la frecuencia, hasta un máximo de 255Hz.

:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[PDF]** [Hoja de Datos STM32f030f4P6](https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [Hoja de Datos L298P](https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf)

- **[PDF]** [Esquema de hardware](https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf)

- **[Zip]** [Librería del Controlador de Motor](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip)

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
