---
description: Grove Cape para la Serie BeagleBone®
title: Grove Cape para la Serie BeagleBone®
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Cape_for_BeagleBone_Series
last_update:
  date: 1/10/2022
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove%20Cape%20for%20BeagleBone.jpg)

Un verdadero hardware abierto, la Serie BeagleBone® es una computadora Linux del tamaño de una tarjeta de crédito que se conecta a Internet y ejecuta software como Android 4.0 y Ubuntu. Con abundante E/S y poder de procesamiento para análisis en tiempo real proporcionado por un procesador ARM® AM335x de 720MHz, BeagleBone® puede complementarse con placas cape plug-in para aumentar la funcionalidad.

Y este Grove - Grove Cape para la Serie BeagleBone® es una placa de expansión para la Serie BeagleBone® para trabajar con abundantes recursos Grove. Hay 6 conectores Grove listos en la placa que cubren funciones como UART, I2C y ADC. Y de esta manera, todos los Módulos Grove son accesibles para la placa BeagleBone®. ¿Quieres hacer algunos proyectos con BeagleBone® y necesitas algunos sensores o pantalla? Este Grove - Grove Cape para la Serie BeagleBone® puede brindarte esta conveniencia.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Cape-for-BeagleBone-Series-p-1718.html)

## Especificaciones

---

* Voltaje：3.3~5V
* Corriente：&lt;0.5uA
* Dimensión：69.9X54.8X17.5 mm
* Protección de voltaje del puerto E/S digital
* Digital permite voltaje de entrada máximo 5V
* Entrada analógica por resistencia de división parcial, Relación de 1.8/5
* Puerto analógico permite voltaje de entrada máximo 5V

## Interfaz

---

![](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/img/Grove_Cape_for_BeagleBone_Series.jpg)

**J1,J5:** pueden usarse para I2C.

**J2,J6,:** pueden usarse para UART.

**J3,J7,:** pueden usarse para ADC.

El mapeo de pines descrito para la placa Grove Cape para la Serie BeagleBone® se muestra a continuación:

| Interfaz Grove | Pin Grove | A/D | I²C | UART | Pin BeagleBone® | función BeagleBone® |
|---|---|---|---|---|---|---|
| J1 | 1 | | SCL1 | | J8.17 | gpio[5]/ |
| J1 | 2 | | SDA1 | | J8.18 | gpio[4]/ |
| J5 | 1 | | SCL2 | | J8.19 | gpio[13]/ |
| J5 | 2 | | SDA2 | | J8.20 | gpio[12]/ |
| J2 | 1 | | | RX1 | J8.26 | gpio[14]/ |
| J2 | 2 | | | TX1 | J8.24 | gpio[15]/ |
| J6 | 1 | | | RX2 | J8.22 | gpio[2]/ |
| J6 | 2 | | | TX2 | J8.21 | gpio[3]/ |
| J3 | 1 | AIN0 | | | J8.39 | |
| J3 | 2 | AIN1 | | | J8.40 | |
| J7 | 1 | AIN2 | | | J8.37 | |
| J7 | 2 | AIN3 | | | J8.38 | |

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Archivo Eagle del Grove Cape para la Serie BeagleBone®](https://files.seeedstudio.com/wiki/Grove_Cape_for_BeagleBone_Series/res/Grove_Cape_for_BeagleBone_Series_V1.0.zip)

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