---
title: Grove - Controlador de Motor I2C V1.3
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-I2C_Motor_Driver_V1.3/
slug: /es/Grove-I2C_Motor_Driver_V1.3
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New.jpg)

El Grove - Controlador de Motor I2C V1.3 (versión más reciente) puede controlar directamente un Motor Paso a Paso o Motor DC. Su núcleo es un chip controlador de puente H de doble canal (L298N) que puede manejar corriente hasta 2A por canal, controlado por un Atmel ATmega8L que maneja la comunicación I2C con plataformas como Arduino. Ambos motores pueden ser controlados simultáneamente mientras se configuran a diferente velocidad y dirección. Puede alimentar dos motores DC con escobillas o un motor paso a paso de dos fases de 4 cables. Requiere una fuente de alimentación de 6V a 15V para alimentar el motor y tiene un regulador de voltaje de 5V integrado que puede alimentar el bus I2C y el Arduino (seleccionable por jumper). Todas las líneas del controlador están protegidas por diodos contra la FEM inversa.

En contraste con el [Grove - controlador de motor I2C V1.2](https://wiki.seeedstudio.com/es/Grove-I2C_Motor_Driver_V1.2/), el V1.3 permite a los usuarios controlar el motor paso a paso más fácilmente. Ya no necesitas controlar los steppers todo el tiempo, simplemente envía un comando al controlador de motor I2C V1.3 para manejar un motor paso a paso, y actuará según tu comando, lo que ahorrará recursos de tu Arduino y simplificará tu código.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)

## Versión

| Revisión | Descripciones                                    | Lanzamiento    |
|----------|--------------------------------------------------|----------------|
| v1.0     | Lanzamiento público inicial                      | 17 de mayo, 2012 |
| v1.2     | Modificar la dirección I2C establecida por hardware | 2 de julio, 2012 |
| v1.3     | Modificar el firmware para soportar Stepper fuera de línea | 18 de febrero, 2013 |

## Características

- Compatible con Grove
- Interfaz I2C
- Velocidad del motor y dirección de rotación ajustables
- Dirección esclava cambiable por hardware

:::tip
    Más detalles sobre los módulos Grove consulte [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Elemento
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidad
</th>
</tr>
<tr>
<th scope="row">
Voltaje de Trabajo
</th>
<td>
6
</td>
<td align="center" >
-
</td>
<td>
15
</td>
<td>
VDC
</td>
</tr>
<tr>
<th scope="row">
Corriente Máxima de Salida por canal
</th>
<td colspan="3" align="center">
0.5
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
Corriente Total Máxima
</th>
<td colspan="3" align="center" >
1.0
</td>
<td>
A
</td>
</tr>
<tr>
<th scope="row">
Voltaje de entrada/salida en bus I2C
</th>
<td colspan="3" align="center" >
5
</td>
<td>
V
</td>
</tr>
<tr>
<th scope="row">
Protocolo de comunicación
</th>
<td colspan="3" align="center" >
I2C
</td>
<td>
/
</td>
</tr>
</table>

:::note
    Si quieres usar múltiples dispositivos I2C, por favor consulta [Software I2C](https://wiki.seeedstudio.com/es/Arduino_Software_I2C_user_guide/).
:::

## Plataformas Soportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Descripción General del Hardware

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-1.jpg)

**IC 78M05:** Regulador de voltaje de 5V

**IC L298:** Controlador de puente completo dual

**IC ATmega8:** Controla la rotación del motor.

<div class="admonition note">
<p class="admonition-title">Nota</p>
El voltaje de entrada en los terminales de tornillo se regula a 5V y se conecta a I2C +5V a través de un puente (J4). Retire el puente si se utilizan tanto alimentación externa a través de los terminales de tornillo como alimentación a través del conector I2C. Use el puente si se debe suministrar 5V al bus I2C.
</div>

## Ideas de Aplicación

- Robots
- Coches RC caseros
- Ventiladores de carcasa
- Iluminación LED de alta potencia

<div class="admonition danger">
<p class="admonition-title">Precaución</p>
¡La placa se calentará mucho mientras opere por encima de 1 Amperio. ¡Mantenga sus manos alejadas!
</div>

## Primeros Pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, recomendamos firmemente que veas [Primeros Pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Demostración

El Controlador de Motor I2C puede controlar motores basado en el chip L298. El L298 no es solo un controlador de motor dual, es un puente H dual. Un puente H es básicamente una configuración específica de transistores que te permite cambiar la dirección de la corriente. Conectarlo a un motor significa que puedes hacerlo girar en ambas direcciones; y con entrada PWM, puedes usar tu Arduino para hacerlos girar a cualquier velocidad. Debido a que el L298 tiene 2 puentes H, puedes hacer que un robot gire haciendo girar cada rueda en diferentes direcciones, y por supuesto ir hacia adelante y hacia atrás.

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - I2C Motor Driver V1.3 |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver_New_small.jpg)|
|[Obtener Uno Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener Uno Ahora](https://www.seeedstudio.com/Grove-I2C-Motor-Driver-p-907.html)|

- **Paso 2.** Configurar la dirección del Controlador de Motor I2C

- Configurar la dirección mediante el interruptor de dial es una nueva función añadida al nuevo Controlador de Motor I2C.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-9.jpg)

- Luego mantén la configuración de dirección en el programa igual que la configuración de dirección en el controlador de motor I2C. La configuración de dirección predeterminada en el programa es 0x0f.
- **Paso 3.** Conecta Grove - I2C Motor Driver V1.3 al puerto I2C del Grove-Base Shield.
- **Paso 4.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 5.** Conecta Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - I2C Motor Driver V1.3 al Seeeduino como se muestra a continuación.
:::
| Seeeduino       | Grove - I2C Motor Driver V1.3 |
|-----------------|-------------------------|
| 5V              | Rojo                    |
| GND             | Negro                   |
| SDA             | Blanco                  |
| SCL             | Amarillo                |


#### Software

- **Paso 1.** Descarga la [Librería Grove_I2C_Motor_Driver_v1_3](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip) desde Github.
- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Copia el código en Arduino IDE y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```c
// default I2C address is 0x0f
#define I2C_ADDRESS 0x0f

void setup()
{
    Motor.begin(I2C_ADDRESS);
}
```

<div class="admonition note">
<p class="admonition-title">Nota</p>
Lo primero que hay que tener en cuenta es que necesitas una fuente de alimentación externa para tus motores DC. El pin de 5V del Arduino no puede proporcionar suficiente energía para mover 2 motores, puedes dañar tu Arduino si lo haces.
</div>

- Hay 2 funciones para controlar motores DC:

```c
// Set the speed of a motor, speed is equal to duty cycle here
void speed(unsigned char motor_id, int _speed);

// Stop one motor
void stop(unsigned char motor_id);

```

Con la función speed(), puedes hacer funcionar un motor a la velocidad que desees.

- **motor_id** representa qué motor usar. Puedes completar MOTOR1 o MOTOR2.

- **_speed** representa la velocidad que estableces para el motor. Puedes completar -100~100 aquí. Cuando _speed&gt;0, el motor DC gira en sentido horario, mientras que _speed&lt;0, el motor DC gira en sentido antihorario. Y cuanto mayor sea el valor absoluto de _speed, más rápida será la velocidad del motor DC.

Con la función stop(), puedes detener un motor DC en funcionamiento.

- **motor_id** representa qué motor usar. Puedes completar MOTOR1 o MOTOR2.

**Controlar un Motor Paso a Paso**

Tomando como ejemplo el [Motor Paso a Paso 24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171), la instalación del hardware se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg)

La conexión entre el Motor Paso a Paso [24BYJ48](https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171) y el Controlador de Motor I2C se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg)

- Proporcionamos una función para controlar un motor paso a paso.

```c
// Drive a stepper motor
void StepperRun(int _step);
```

- **_step** representa los pasos que configuras para que el motor paso a paso funcione. Puedes llenar -1024~1024. Cuando _step&gt;0, el motor paso a paso gira en sentido horario, mientras que _step&lt;0, el motor paso a paso gira en sentido antihorario. Cuando _step es 512/-512, el motor paso a paso dará una vuelta completa y si _step es 1024/-1024, el motor paso a paso dará 2 vueltas. El motor paso a paso se detendrá automáticamente después de completar sus pasos.

### Jugar con Codecraft

#### Hardware

**Paso 1.** Usando un cable Grove conecta Grove - I2C Motor Driver al puerto I2C de Seeeduino. Si estás usando Arduino, por favor aprovecha un Base Shield.

**Paso 2.** Conecta Seeedino/Arduino a tu PC mediante un cable USB.

#### Software

**Paso 1.** Abre [Codecraft](https://ide.chmakered.com/), añade soporte para Arduino, y arrastra un procedimiento principal al área de trabajo.

:::note
    Si esta es tu primera vez usando Codecraft, consulta también [Guía para Codecraft usando Arduino](https://wiki.seeedstudio.com/es/Guide_for_Codecraft_using_Arduino/).
:::
**Paso 2.** Arrastra bloques como en la imagen de abajo o abre el archivo cdc que se puede descargar al final de esta página.

![cc](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/cc_I2C_Motor_Driver.png)

Sube el programa a tu Arduino/Seeeduino.

:::tip
    Cuando el código termine de subirse, verás que los motores DC que están conectados al Motor Driver están funcionando.
:::

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Eagle]** [Grove - I2C Motor Driver V1.3 Esquemático](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove-I2C_Motor_Driver_v1.3_Eagle_File.zip)

- **[PDF]** [Grove - I2C Motor Driver V1.3 PCB en Formato PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b%20PCB.pdf)

- **[PDF]** [Grove - I2C Motor Driver V1.3 Esquemático en Formato PDF](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove%20-%20I2C%20Motor%20Driver%20%20v1.3b.pdf)

- **[Library]** [Grove - I2C Motor Driver V1.3 Biblioteca](https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3)

- **[Firmware]** [Firmware en Chip para controlador de motor I2C](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/On-Chipfirmware_for_Motor_driver.zip)

- **[Datasheet]** [Hoja de Datos L298](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/L298datasheet.pdf)

- **[Datasheet]** [Hoja de Datos 78M05](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/ST_78M05DataSheet.pdf)

- **[Codecraft]** [Archivo CDC](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/res/Grove_I2C_Motor_Driver_CDC_File.zip)

<!-- Este archivo Markdown fue creado desde https://www.seeedstudio.com/wiki/Grove_-_I2C_Motor_Driver_V1.3 -->

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
