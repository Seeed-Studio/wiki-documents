---
description: Grove - Kit de Inicio para mbed
title: Grove - Kit de Inicio para mbed
keywords:
- Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Starter_Kit_for_mbed
last_update:
  date: 2/1/2023
  author: hushuxu
---

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Grove%20Starter%20Kit%20for%20mbed%201.jpg)

**Acerca de mbed y Grove**

mbed es una plataforma de desarrollo de código abierto para prototipado rápido con microcontroladores. Proporciona bibliotecas de software gratuitas, diseños de hardware y herramientas de desarrollo para construir proyectos de manera muy fácil y rápida.

Grove es una plataforma de electrónica modular para prototipado rápido que no involucra soldadura o uso de protoboard.

**Acerca de este kit**

Este kit está diseñado para que puedas comenzar con mbed lo antes posible. Contiene muchos módulos Grove plug-n-play para comenzar a explorar el mundo de mbed. Un objetivo es divertirse y construir confianza con hardware y software en el viaje.

:::tip
    Más detalles sobre los módulos Grove por favor consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::
## Comenzar
---
Todo lo necesario para comenzar es:
- Este kit
- [Un Arch](https://www.seeedstudio.com/Arch-p-1561.html)
- [Un cable USB Micro B](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html)
- Una computadora con Internet

### Hola, mundo

1.Haz clic en este [enlace](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:https://mbed.org/users/viswesr/code/Arch_GPIO_Ex1;platform:Seeeduino-Arch) para **registrarte o iniciar sesión en mbed**, luego obtendrás el compilador en línea de mbed.

2.Importa el programa y abre main.cpp, verás el código.

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Import_arch_gpio_ex1.png)

3.En el IDE en línea de mbed, haz clic en "Compile" de la barra de herramientas superior (o usa CTRL + D) para compilar el código y el archivo binario - Arch_GPIO_Ex1_LPC11U24.bin.

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Compile_mbed_program.png)

4.Conecta la placa Arch a la computadora y **mantén presionado** el botón, aparecerá una unidad USB llamada CRP DISABLD.

5.Elimina firmware.bin y copia Arch_GPIO_Ex1_LPC11U24.bin a la unidad USB.

6.**Presiona rápidamente** el botón, el programa se ejecutará, un LED comenzará a parpadear.

```
#include "mbed.h"

/* Configure a GPIO pin as output for controlling a LED. 'led' is user assigned name and
 'LED1' is a internal name given to a port pin P1_8 in this Arch platform. */
DigitalOut led(LED1);

int main()
{
    while(1) {
        led = 1;    // Switch ON the LED.
        wait(0.5);  // Wait for 0.5 Seconds.
        led = 0;    // Switch OFF the LED.
        wait(0.5);  // Wait for 0.5 Seconds.
    }
}
```

El programa anterior utiliza la clase **DigitalOut** y la función **wait()** del SDK de mbed C/C++. LED1 es un pseudónimo del pin de E/S **P1_8** y está etiquetado como D1 en la placa Arch. El estado de LED1 se cambia escribiendo 0 o 1 en **led**. La función **wait()** produce un retraso en segundos. El estado del **led** se alterna continuamente cada 0.5 segundos dentro del bucle **while()** infinito.

Más detalles de **DigitalOut** se pueden encontrar en la [página DigitalOut del manual de mbed](https://developer.mbed.org/handbook/DigitalOut). De manera similar, la función wait() está documentada en la [página wait](https://developer.mbed.org/handbook/Wait).

### Piano de Frutas

Un piano construido con una canasta de frutas, un microcontrolador y una computadora.

La idea proviene de [Makey Makey](http://makeymakey.com/), pero utiliza hardware y software diferentes. Se utiliza un microcontrolador habilitado para mbed con USB.

![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Piano.png)
![](https://files.seeedstudio.com/wiki/Grove-Starter_Kit_for_mbed/img/Fruit_Piano_Hardware.jpg)

**Hardware**
- Una placa Arch
- Una canasta de frutas
- Una computadora con alimentación AC
- Algunos cables

**Software**
1. Haz clic en este [enlace](https://developer.mbed.org/accounts/login/?next=%2Fcompiler%2F#import:http://mbed.org/teams/Seeed/code/Fruit_Piano;platform:Seeeduino-Arch) para importar el programa al compilador en línea de mbed.
2. Compila el código y descarga el archivo binario - Fruit_Piano_LPC11U24.bin.
3. Conecta la placa Arch a la computadora y mantén presionado el botón, aparecerá una unidad USB llamada CRP DISABLD.
4. Elimina firmware.bin y copia Arch_GPIO_Ex1_LPC11U24.bin a la unidad USB.
5. Presiona rápidamente el botón para ejecutar el programa
6. Conecta algunas manzanas o plátanos a los pines A0 - A5 (P0_11 - P0_14, P0_16, P0_22) de la placa Arch
7. Abre [Fruit Piano](http://xiongyihui.github.io/piano/) y toca.


## Más, Paso a Paso
---
- [Entrada Digital - Botón: usar un botón para controlar un LED](https://developer.mbed.org/teams/Seeed/wiki/Button)
- [Entrada Analógica - Potenciómetro: usar un potenciómetro para controlar el parpadeo de un LED](https://developer.mbed.org/teams/Seeed/wiki/Potentiometer)
- [Detección de Temperatura: usar un sensor de temperatura analógico para hacer un termómetro](https://developer.mbed.org/teams/Seeed/wiki/Analog-Temperature-Sensor)
- [Salida PWM - Zumbador: usar un zumbador para tocar una melodía](https://developer.mbed.org/teams/Seeed/wiki/Grove-Buzzer)
- [Pantalla: hacer un reloj digital](https://developer.mbed.org/teams/Seeed/wiki/Grove-4-Digit-Display)
- [Un termómetro](https://developer.mbed.org/teams/Seeed/wiki/Thermometer)
- [Teclado infrarrojo](https://developer.mbed.org/teams/Seeed/wiki/Infrared-keybaord)
- [Luz colorida](https://developer.mbed.org/teams/Seeed/wiki/Grove-Chainable-RGB-LED)
- [La temperatura controla el color](https://developer.mbed.org/teams/Seeed/wiki/Temperature-Color)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
