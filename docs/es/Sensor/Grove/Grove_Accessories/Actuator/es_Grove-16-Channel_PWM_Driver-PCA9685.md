---
title: Grove - Controlador PWM de 16 Canales (PCA9685)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-16-Channel_PWM_Driver-PCA9685/
slug: /es/Grove-16-Channel_PWM_Driver-PCA9685
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/main.jpg)

El Grove - Controlador PWM de 16 Canales está basado en el NXP PCA9685, que es un controlador PWM I2C de 16 canales y 12 bits. Esta placa puede controlar hasta 16 servos con la fuente de alimentación externa. Puedes controlar esta placa con Arduino fácilmente a través de la interfaz I2C Grove. Además, puedes usar esta placa como un controlador de LED.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-(PCA9685)-p-3221.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Versión

| Versión del Producto  | Cambios                                                                                               | Fecha de Lanzamiento |
|------------------|-------------------------------------------------------------------------------------------------------|---------------|
| Grove - Controlador PWM de 16 Canales (PCA9685) | Inicial                                                                                               | Sep 2018      |

## Característica

- Bus I2C compatible con modo rápido Plus de 1 MHz
- 6 pines de dirección de hardware permiten conectar 62 dispositivos PCA9685 al mismo bus I2C
- Baja corriente en espera
- Filtro de ruido en entradas SDA/SCL

## Especificación

|Elemento|Valor|
|---|---|
|Voltaje de Operación del MCU|3.3V / 5V|
|Voltaje de Alimentación PWM|2.3V ~ 5.5V|
|Entradas Tolerantes|5.5V|
|Corriente de Salida en pin LEDn|25mA|
|Corriente de Alimentación de Tierra|400mA|
|Temperatura de operación|-40～85℃|
|Interfaz|I2C|
|Rango de Dirección I2C|0x40 ~ 0x7f(predeterminado)|
|Tamaño|L: 60mm A: 40mm H: 18mm|
|Peso|14.3g|
|Tamaño del paquete|L: 135mm A: 85mm H: 19mm|
|Peso bruto|21g|

## Aplicaciones típicas

- Controlador de servos
- Controlador de LED RGB o RGBA

## Descripción general del hardware

### Distribución de pines

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin_out.jpg)

:::caution
    No se admite intercambio en caliente, es posible que desee desconectar arduino de la fuente de alimentación antes de cualquier reemplazo o cambio.
:::

### Detalle del hardware

___
**Interfaz I2C**

Esta placa utiliza la interfaz I2C para permitir que el MCU a bordo se comunique con la computadora host.
>GND: conecte este módulo al GND del sistema  
>VCC: puede usar 5V o 3.3V para este módulo  
>SDA: datos serie I2C  
>SCL: reloj serie I2C

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-1.jpg)

___
**Entrada de alimentación**

Proporciona alimentación DC de 5V para el servo.

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-2.jpg)

___
**Salida PWM**

Hay 16 grupos de pines (1 - 16) en esta placa, cada grupo de pines contiene un pin de señal PWM, un pin de fuente de alimentación de 5V y un pin para tierra.
![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/pin-out/pin-out-0.jpg)

---
**Dirección I2C**

*puede hacer clic en la siguiente figura para ver el archivo original*

Las 6 almohadillas seleccionables en la parte posterior de esta placa, todas tienen 64 direcciones I2C opcionales.

<!-- [![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg)](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg) -->
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad.jpg" alt="pir" width={600} height="auto" /></p>

Como se muestra en la figura anterior, todas las almohadillas de dirección están conectadas al nivel alto por defecto. Las reglas de dirección son como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/i2c_ad_1.jpg)

La dirección consta de 7 bits y el bit más alto está fijo en 1. Cuando convertimos la dirección a un número hexadecimal, necesitamos agregar un 0 a la izquierda del bit más alto.

Entonces la dirección por defecto es **111 1111**, cuando agregamos un 0, se convierte en **0111 1111** que es 0x7f.  
Y si conectamos todas las almohadillas de dirección a tierra, se convierte en **100 0000**, cuando agregamos un 0, se convierte en **0100 0000**. Que es 0x40.

## Principio de funcionamiento

## Plataformas compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

## Comenzando

### Jugar con Arduino

#### Hardware

**Materiales requeridos**

| Seeeduino V4.2 | Base Shield| Grove - 16-Channel PWM Driver| LED|
|--------------|-------------|-----------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/thumbnail.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/red_led.jpg)
|[Obtener UNO Ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/Grove-16-Channel-PWM-Driver-PCA968-p-3221.html)|[Obtener UNO Ahora](https://www.seeedstudio.com/3mm-LED-Red-25-PCs-p-1588.html)

:::note
    **1** Por favor conecta el cable USB con cuidado, de lo contrario puedes dañar el puerto. Por favor usa el cable USB con 4 cables internos, el cable de 2 cables no puede transferir datos. Si no estás seguro sobre el cable que tienes, puedes hacer clic [aquí](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) para comprar

    **2** Cada módulo Grove viene con un cable Grove cuando lo compras. En caso de que pierdas el cable Grove, puedes hacer clic [aquí](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) para comprar.

    **3** También necesitas preparar al menos 2 cables jumper, en caso de que no tengas, puedes hacer clic [aquí](https://www.seeedstudio.com/20-pin-dual-female-splittable-jumper-wire-300mm-p-629.html) para comprar.
:::

- **Paso 1.** Conecta el LED rojo a GND y P1 usando cables jumper dual-hembra.

- **Paso 2.** Conecta el Grove - 16-Channel PWM Driver al puerto **I^2^C** del Grove-Base Shield.

- **Paso 2.** Conecta el Grove - Base Shield al Seeeduino.

- **Paso 3.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect1.jpg)

:::note
        En este ejemplo para LED, como no estamos usando el pin '5V' en el grupo de salida no necesitamos alimentar el puerto de entrada de energía. Si quieres usar servo, necesitas conectar el pin 5V al pin de alimentación del servo, y necesitas ofrecer alimentación externa para el puerto **Power In**.
:::
Si quieres usar servo, puedes conectar como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/connect2.jpg)

#### Software

:::caution
        Si esta es la primera vez que trabajas con Arduino, te recomendamos encarecidamente que veas [Comenzando con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de empezar.
:::

- **Paso 1.** Descarga la librería [Grove-16-Channel_PWM_Driver-PCA9685](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip) desde Github.

- **Paso 2.** Consulta [Cómo instalar librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Reinicia el IDE de Arduino. Abre el ejemplo, puedes abrirlo de las siguientes tres maneras：
    1. Ábrelo directamente en el IDE de Arduino a través de la ruta: **File --> Examples -->Seeed_PCA9685 --> led**.
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard1.jpg)

    2. Ábrelo en tu computadora haciendo clic en **basic_demo.ino** que puedes encontrar en la carpeta **XXXX\Arduino\libraries\Seeed_PCA9685\examples\led\led.ino**, **XXXX** es la ubicación donde instalaste el IDE de Arduino.
    ![](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/img/ard2.jpg)

    3. O, puedes simplemente hacer clic en el icono ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg) en la esquina superior derecha del bloque de código para copiar el siguiente código en un nuevo sketch en el IDE de Arduino.

```cpp

#include "PCA9685.h"
#include <Wire.h>

PCA9685 led;


void setup()
{
    // join I2C bus (I2Cdev library doesn't do this automatically)
    Wire.begin();
    Serial.begin(9600);
    led.init(0x7f);
    // Set freq to 100Hz, range from 24Hz~1526hz
    led.setFrequency(100);

    for (int i=1;i<17;i++){
        led.setPwm(i, 0, 1024);
    }
}

void loop()
{
}

```

:::caution
        El archivo de biblioteca puede actualizarse. Este código puede no ser aplicable al archivo de biblioteca actualizado, por lo que recomendamos que uses los primeros dos métodos.
:::

:::tip
        Si todo va bien, podrás ver que el LED se enciende.
:::

## Visor Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Grove - 16 Channel PWM Driver (PCA9685) Archivos Eagle](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/Grove%20-%2016-Channel%20PWM%20Driver%20(PCA9685).zip)

- **[Zip]** [Biblioteca de Software Seeed_PCA9685](https://github.com/Seeed-Studio/Seeed_PCA9685/archive/master.zip)

- **[PDF]** [Hoja de Datos PCA9685](https://files.seeedstudio.com/wiki/Grove-16-Channel_PWM_Driver-PCA9685/res/PCA9685.pdf)

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
