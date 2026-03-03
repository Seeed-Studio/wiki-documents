---
title: Grove - Motor Háptico
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Haptic_Motor/
slug: /Grove-Haptic_Motor
sku: 105020011
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

Grove - Motor háptico es un módulo grove integrado con [DRV2605L](http://www.ti.com/product/DRV2605L) que le dará más sensaciones a tu proyecto. Este motor está especialmente diseñado para varios efectos, como aumentar y disminuir gradualmente el nivel de vibración, para dispositivos portables y otros dispositivos IoT. Ahora mismo hemos desarrollado una biblioteca fácil de usar que simula 123 tipos en total de modos de vibración y esto hará que tu prototipado sea más rápido. Además, puedes desarrollar funciones más avanzadas con el controlador DRV2605L que mejorará el rendimiento del actuador en términos de consistencia de aceleración, tiempo de inicio y tiempo de frenado y es accesible a través de un bus compartible compatible con I2C o señal de entrada PWM.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Haptic-Motor-p-2546.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Más efectos de vibración.
- Acelera el proceso de prototipado de tu proyecto.
- Biblioteca fácil de usar con 123 tipos de modos de vibración.
- Controlador potente para implementar funciones más avanzadas.

:::tip
    Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

## Especificaciones

| Parámetro                      | Valor          |
|--------------------------------|----------------|
| Voltaje de operación           | 3.3~5.0 V      |
| Ondulaciones (a máxima potencia) | 50~100 mV      |
| Potencia máxima                | 750 mW         |
| Velocidad I2C                  | 100 kHz        |
| Efectos de vibración           | 123 tipos      |
| Controlador                    | DRV2605L       |
| Puerto                         | I<sup>2</sup>C |
| Dirección I<sup>2</sup>C por defecto | 0x5A           |

# Plataformas Compatibles

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

## Ideas de aplicación

- Teléfonos móviles, tabletas.
- Dispositivos portátiles.
- Controles remotos, dispositivos habilitados para tacto.
- Interfaces humano-máquina industriales.

## Descripción general del hardware

**Vista frontal:**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg)

**Vista trasera:**
![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_back.jpg)

## Primeros pasos

:::note
    Si esta es la primera vez que trabajas con Arduino, te recomendamos firmemente que veas [Primeros pasos con Arduino](https://wiki.seeedstudio.com/es/Getting_Started_with_Arduino/) antes de comenzar.
:::

### Jugar con Arduino

#### Hardware

- **Paso 1.** Prepara los siguientes elementos:

| Seeeduino V4.2 | Base Shield|  Grove - Motor háptico |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1s.jpg)|
|[Obtener uno ahora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Obtener uno ahora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Obtener uno ahora](https://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html)|

- **Paso 2.** Conecta Grove - Motor háptico al puerto I2C del Grove-Base Shield.
- **Paso 3.** Conecta Grove - Base Shield al Seeeduino.
- **Paso 4.** Conecta el Seeeduino a la PC mediante un cable USB.

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_haptic_motor_connection.jpg)

:::note
 Si no tenemos Grove Base Shield, también podemos conectar directamente Grove - Motor háptico al Seeeduino como se muestra a continuación.
:::

| Seeeduino       | Grove - Motor háptico |
|---------------|-------------------------|
| 5V           | Rojo                     |
| GND           | Negro                   |
|SDA  | Blanco                   |
|SCL             | Amarillo                  |


#### Software

- **Paso 1.** Descarga el [Grove_Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip) desde Github.
- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.
- **Paso 3.** Copia el código en el IDE de Arduino y súbelo. Si no sabes cómo subir el código, por favor revisa [cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

```cpp
#include <drv2605.h>

DRV2605 haptic;

void setup()
{
    Serial.begin(9600);
    /* Software I2C = false, Verbose = true */
    if (haptic.init(false, true) != 0) Serial.println("init failed!");
    if (haptic.drv2605_AutoCal() != 0) Serial.println("auto calibration failed!");
    delay(2000);
}

void loop()
{
/*
    unsigned char i;
    for(i=1;i<124;i++)
    {
        Serial.print("Effect No: ");
        Serial.println(i);
        
        haptic.drv2605_Play_Waveform(i);
        delay(2000);
    }
*/
    haptic.drv2605_Play_Waveform(118);
    delay(2000);
}
```

- **Paso 4.** Veremos la vibración.

:::warning
    Nunca toques el controlador DRV2605L ya que puede causar daños cuando está alimentado.
:::

![](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_cautions.png)

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Librería]** [Librería Grove-Haptic Motor](https://github.com/Seeed-Studio/Grove_Haptic_Motor)
- **[Eagle]** [Esquemático Grove-Haptic Motor](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip)
- **[PDF]** [Esquemático Grove-Haptic Motor](https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_SCH.pdf).
- **[Hoja de Datos]** [Más sobre el circuito controlador DRV2605L](http://www.ti.com/product/DRV2605L).

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
