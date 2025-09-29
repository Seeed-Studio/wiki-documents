---
title: Grove-Shield-for-Wio-Lite
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Grove-Shield-for-Wio-Lite/
slug: /es/Grove-Shield-for-Wio-Lite
last_update:
  date: 01/11/2022
  author: gunengyu
---

![enter image description here](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-wiki.jpg)

El Grove Shield para Wio Lite está diseñado para la Serie Wio Lite de Seeed Studio. Ahora el Wio Lite W600 está disponible, lanzaremos más placas Wio pronto. Además, este Grove Shield puede funcionar con las placas Adafruit Feather. Aporta más de 200 módulos Grove a la comunidad Wio Lite y Feather.


Este Shield puede extraer los pines del procesador del Wio Lite (por ejemplo, es SAM D21 para Wio Lite W600) en forma de conectores de cabecera y Grove. Hay 4 conectores digitales Grove y 4 conectores analógicos Grove, un puerto UART Grove, y un puerto I2C Grove.


<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>


## Especificaciones

| Parámetro             | Valor/Rango    |
|-----------------------|----------------|
| Voltaje de operación  | 3.3 / 5V       |
| Temperatura de operación | -25℃ a +85℃ |
| Puertos analógicos    | 4              |
| Puertos digitales     | 4              |
| Puertos UART          | 1              |
| Puertos I2C           | 1              |
| Tamaño                | 60mm x52mm     |


## Placas compatibles

El Base Shield está probado y es totalmente compatible con las siguientes placas:

- [Wio Lite - W600](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
- [Wio Lite - MG126](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- Placa Feather basada en SAMD21 de Adafruit


Y esta placa también es compatible en factor de forma con otras placas Adafruit Feather. Por favor, haga coincidir el número de pin cuando use este shield con esas placas Adafruit Feather.


## Descripción general del hardware


![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0.jpg)


- **Puertos analógicos**: incluye 4 puertos analógicos, 5 pines analógicos
 
>Puerto A0 incluyendo pines A0 y A1

>Puerto A1 incluyendo pines A1 y A2

>Puerto A2 incluyendo pines A2 y A3

>Puerto A3 incluyendo pines A3 y A4

- **Puertos digitales**: incluye 4 puertos digitales, 5 pines digitales
 
>Puerto D5 incluyendo pines D5 y D6

>Puerto D6 incluyendo pines D6 y D9

>Puerto D9 incluyendo pines D9 y D10

>Puerto D10 incluyendo pines D10 y D11

:::caution
        Dado que los puertos adyacentes contienen el mismo pin, por ejemplo, tanto el puerto A0 como el puerto A1 tienen pines A1, tenga cuidado de no tener conflictos de pines cuando use puertos adyacentes al mismo tiempo. Por ejemplo, si el módulo X usa el pin A1 del puerto A0, entonces no debería usar el pin A1 del puerto A1 para otro módulo.
:::

- **Puerto UART**: 1 puerto UART.

- **Puertos I2C**: 1 puerto I2C.

- **Interruptor de alimentación**: Si usa USB tipo C para alimentar su placa Wio Lite, entonces seleccione el modo 5V, y si usa la batería lipo, por favor seleccione el modo 3.3V.


### Diagrama de pines

Para el diagrama de pines, por favor consulte la serigrafía en la parte posterior de este shield.

![](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/wiki-pinout.jpg)


## Visor de esquemático en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos

- **[ZIP]** [Archivo de esquemático del Grove Shield para Wio Lite](https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip)


## Soporte técnico y discusión del producto
si tiene algún problema técnico. envíe el problema a nuestro [foro](http://forum.seeedstudio.com/).
¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>