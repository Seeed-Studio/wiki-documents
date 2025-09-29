---
title: Grove - Controlador de Motor I2C (TB6612FNG)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-I2C_Motor_Driver-TB6612FNG/
slug: /es/Grove-I2C_Motor_Driver-TB6612FNG
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/main.jpg)

El Grove - Controlador de Motor I2C (TB6612FNG) puede controlar dos motores DC hasta 12V/1.2A o controlar un motor paso a paso hasta 12V/1.2A. Con el MCU integrado, puede trabajar con Arduino fácilmente a través de la interfaz Grove I2C.

Esta placa controladora está basada en TB6612FNG, que es un IC controlador para motor DC y motor paso a paso con transistor de salida en estructura LD MOS con baja resistencia ON. Dos señales de entrada, IN1 e IN2, pueden elegir uno de cuatro modos como CW, CCW, freno corto y modo de parada.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Controlador de Motor I2C (TB6612FNG) | Inicial                                                                                               | Sep 2018      |

## Características

- MCU integrado
- Modos de función CW/CCW/frenado corto/parada
- Circuito de apagado térmico integrado y circuito de detección de bajo voltaje
- Sistema de espera (ahorro de energía)

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación del MCU|3.3V / 5V|
|Voltaje de Alimentación del Motor|2.5 ~ 13.5 (5V Típico, 15V Máx.)|
|Corriente de Salida|1.2 A(prom)/3.2 A (pico)|
|Frecuencia de Conmutación|100kHz|
|Interfaz Lógica|I2C|
|Dirección I2C|0x14 (por defecto)|
|Rango de Dirección I2C|0x01 ~ 0x7f (Configurable)|
|Tamaño|L: 60mm A: 40mm H: 12mm|
|Peso|13g|
|Tamaño del Paquete|L: 140mm A: 90mm H: 12mm|
|Peso Bruto|20g|

## Aplicaciones típicas

- Control de motor DC
- Control de motor paso a paso

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out.jpg)

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/pin_out_back.jpg)

### Detalle del hardware

___
**Interfaz I2C**

Esta placa utiliza la interfaz I2C para permitir que el MCU integrado se comunique con la computadora host.
>GND: conecta este módulo al GND del sistema  
>VCC: puedes usar 5V o 3.3V para este módulo  
>SDA: datos serie I2C  
>SCL: reloj serie I2C

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/I2C.jpg)

___
**Entrada de alimentación**

Proporciona alimentación DC a los motores, rango de entrada 2.5V ~ 13.5V.
>GND: Conecta al GND del sistema, conecta el "-" de la alimentación  
>VM: Conecta el "+" de la alimentación, suministra energía para el motor.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise1.jpg)

___
**Salida de motor DC**

Esta placa tiene dos canales de salida para motor DC, puede entregar 12V/1.2A por canal. Puedes usar esta placa controladora para controlar dos motores DC al mismo tiempo.
>A1: Canal A salida 1  
>A2: Canal A salida 2  
>B1: Canal B salida 1  
>B2: Canal B salida 2

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

___
**Salida de motor paso a paso**

También puedes usar esta placa para controlar el motor paso a paso de 4 cables, puede entregar hasta 12V/1.2A.
>OUT1: Conectado a una entrada de la bobina 1 del motor paso a paso.  
>OUT2: Conectado a la otra entrada de la bobina 1 del motor paso a paso.  
>OUT3: Conectado a una entrada de la bobina 2 del motor paso a paso.  
>OUT4: Conectado a la otra entrada de la bobina 2 del motor paso a paso.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/huise2.jpg)

:::note
        En realidad el puerto DC y el puerto paso a paso están conectados físicamente juntos. El diagrama de conexión es el siguiente:
:::

|Puerto DC|Puerto paso a paso|
|---|---|
|A1|OUT1|
|A2|OUT2|
|B1|OUT3|
|B2|OUT4|

## Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Primeros Pasos

### Jugar Con Arduino

#### Hardware

**Materiales requeridos**

*Demostración de Motor DC*

| Seeeduino V4.2 | Base Shield | Grove - Controlador de Motor I2C (TB6612FNG) |Motor DC|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** También necesitas preparar al menos 2 jumpers, en caso de que no tengas, puedes hacer clic [aquí](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) para comprar.
:::

- **Paso 1.** Conecta el motor DC al puerto **DC Motor Output** de la placa controladora, conecta la alimentación DC externa al puerto **Power In**.

- **Paso 2.** Conecta el Grove - I2C Motor Driver (TB6612FNG) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect1.jpg)

*Demo de Motor Paso a Paso*

| Seeeduino V4.2 | Base Shield | Grove - I2C Motor Driver (TB6612FNG) |Motor Paso a Paso|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/Motor%2024BYJ48_02.jpg)|
|<a href="https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Base-Shield-V2-p-1378.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html" target="_blank">Obtener Uno Ahora</a>|

- **Paso 1.** Conecta el motor paso a paso con el puerto **Stepper Motor Output** de la placa controladora, conecta la alimentación DC externa al puerto **Power In**.

:::tip
        Esta placa controladora es adecuada para motores paso a paso de 4 cables. Dependiendo del motor paso a paso que uses, el color del cableado es diferente. Usamos el motor 24BYJ48, el cableado se muestra en la tabla a continuación:
:::

|Nombre del Pin| Cable del Motor Paso a Paso|Color del cable(24BYJ48)|
|---|---|---|
|OUT1|un extremo de la bobina 1 |Naranja|
|OUT2|el otro extremo de la bobina 1|Azul|
|OUT3|un extremo de la bobina 2|Rosa|
|OUT4|el otro extremo de la bobina 2|Amarillo|

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/pin-out/p%2Blogo/coil.jpg)

- **Paso 2.** Conecta el Grove - I2C Motor Driver (TB6612FNG) al puerto **I^2^C** del Grove-Base Shield.

- **Paso 3.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect2.jpg)

:::note
        Dado que el puerto DC y el puerto del motor paso a paso están conectados físicamente entre sí, también puedes usar los dos puertos DC para controlar tu motor paso a paso. El diagrama de conexión es el siguiente:
:::
![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/connect3.jpg)

:::note
        Si no tenemos el Grove Base Shield, también podemos conectar directamente este módulo al Seeeduino como se muestra a continuación.
:::

| Seeeduino      |  Cable Grove       |Grove - I2C Motor Driver (TB6612FNG)|
|--------------- |--------------------|-----|
| GND            | Negro              | GND |
| 5V o 3.3V      | Rojo               | VCC |
| SDA            | Blanco             | SDA |
| SCL            | Amarillo           | SCL |

#### Software

:::caution
        Si esta es la primera vez que trabajas with Arduino, te recomendamos encarecidamente que veas [Getting Started with Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

- **Paso 1.** Descarga la librería [Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) desde Github.

- **Paso 2.** Consulta [How to install library](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo predeterminado, proporcionamos dos ejemplos para ti

>dc_motor: Demo para motor DC  
>stepper_motor_2phase: Demo para motor paso a paso de 4 hilos, 2 fases.

Puedes abrirlos de las siguientes dos maneras (tomando dc_motor como ejemplo)：  
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples --> Grove - Motor Driver(TB6612FNG) --> dc_motor**.
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path1.jpg)  
    2. Ábrelo en tu computadora haciendo clic en **dc_motor.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Grove_Motor_Driver_TB6612FNG-master\examples\dc_motor**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/path2.jpg)

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [How to upload code](https://wiki.seeedstudio.com/es/Upload_Code/).

:::tip
        Si todo va bien, cuando enciendas el puerto de alimentación externa, el motor funcionará.
:::

### Jugar con Raspberry Pi 4 Computer

#### Hardware

**Materiales requeridos**

*Demo de Motor DC*

| Raspberry Pi 4 Computer | Grove Base Hat for Raspberry Pi | Grove - I2C Motor Driver (TB6612FNG) |Motor DC|
|--------------|-------------|-----------------|----|
|![enter image description here](https://files.seeedstudio.com/products/102110421/raspberrypi4.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/BaseHat.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/thumbnail.jpg)|![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/DC_Motor_01.jpg)|
|<a href="https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/Grove-I2C-Motor-Driver-(TB6612FNG)-p-3220.html" target="_blank">Obtener Uno Ahora</a>|<a href="https://www.seeedstudio.com/130-DC-Motor-p-2023.html" target="_blank">Obtener Uno Ahora</a>|

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables en el interior, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** También necesitas preparar al menos 2 jumpers, en caso de que no tengas, puedes hacer clic [aquí](https://www.seeedstudio.com/1-Pin-Female-Male-Jumper-Wire-125mm-50pcs-pac-p-1319.html) para comprar.
:::

- **Paso 1.** Conecta el motor DC al puerto **DC Motor Output** de la placa controladora, conecta la alimentación DC externa al puerto **Power In**.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect1.jpg)

- **Paso 2.** Conecta el Grove - I2C Motor Driver (TB6612FNG) al puerto **I^2^C** del Grove Base Hat para Raspberry Pi.

- **Paso 3.** Conecta el Grove Base Hat para Raspberry Pi en la Raspberry Pi 4 Computer.

- **Paso 4.** Conecta la Raspberry Pi 4 Computer a una pantalla.

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/hardwareconnect2.jpg)

:::note
        Si esta es tu primera vez usando Raspberry Pi, por favor consulta [Comenzando con Raspberry](https://wiki.seeedstudio.com/es/Grove_Base_Kit_for_Raspberry_Pi/#getting-started) antes de comenzar.
:::

#### Software

:::caution
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
Gracias a MarkusBansky por proporcionar la biblioteca de software y recurso de aprendizaje para el Grove_Motor_Driver_TB6612FNG para Raspberry Pi 4 y python3.
Este es un puerto de [Grove Arduino LIbrary](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG) para [Grove I2C Motor Driver on TB6612FNG](https://wiki.seeedstudio.com/es/Grove-I2C_Motor_Driver-TB6612FNG/).
:::

#### Requisitos

* Imagen linux de RaspberryPi
- Python 3.6+
- biblioteca smbus
- biblioteca time
- biblioteca math

:::note
    La biblioteca contiene 6 funciones de suavizado para el arranque suave de motores.
    Las funciones de suavizado actualmente solo pueden usarse en un motor a la vez.
    Contiene funciones IN y OUT.
:::

#### Cómo usar la biblioteca

:::caution
     Si estás usando **Raspberry Pi con Raspberrypi OS >= Bullseye**, tienes que usar esta línea de comandos **solo con Python3**.
  Primero que todo asegúrate de que estás ejecutando la última versión lanzada de **pip**. Esta biblioteca requiere que agregues un `index-url` adicional a **pip.conf** para poder instalarla. Puedes hacer esto editando tu archivo de configuración con `sudo nano/etc/pip.conf` e insertando esta línea justo después de la sección `[global]`:
:::

  ```
  index-url=https://pypi.python.org/
  ```

Ahora puedes instalar el paquete como de costumbre, para python3 usa algo como por ejemplo:

```
python3 -m pip install raspberry-i2c-tb6612fng
```

Después de instalar la biblioteca exitosamente, por favor ingresa al archivo raspberry-i2c-tb6612fng usando el código de abajo.

```
cd raspberry-i2c-tb6612fng
```

El último paso es ejecutar el código de prueba.

```
python3 test.py
```

![](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/img/putty.png)

:::tip
        Si todo va bien, cuando escribas `python3 test.py`, el motor funcionará.
:::

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - I2C Motor Driver (TB6612FNG) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/Grove%20-%20I2C%20Motor%20Driver%20(TB6612FNG).zip)

- **[Zip]** [Biblioteca de Software Grove_Motor_Driver_TB6612FNG](https://github.com/Seeed-Studio/Grove_Motor_Driver_TB6612FNG/archive/master.zip)

- **[PDF]** [Hoja de Datos TB6612FNG](https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver-TB6612FNG/res/TB6612FNG.pdf)

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
