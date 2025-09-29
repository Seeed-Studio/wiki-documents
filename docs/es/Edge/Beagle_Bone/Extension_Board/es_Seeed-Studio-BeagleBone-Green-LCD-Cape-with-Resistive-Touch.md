---
description: Seeed Studio BeagleBone® Green LCD Cape con Pantalla Táctil Resistiva
title: Seeed Studio BeagleBone® Green LCD Cape con Pantalla Táctil Resistiva
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08ddkssqrw2lfthpq0phlecp1r.jpg)

**Green LCD Cape con Pantalla Táctil Resistiva** está diseñado para SeeedStudio Beagle bone® Green o Beagle bone Black con una pantalla LCD compacta de 5 pulgadas que es más pequeña que una de 7 pulgadas pero proporciona una resolución de 800x480 usando una capa de pantalla táctil resistiva de 4 cables para interacciones del usuario. Es fácil de configurar simplemente conectando los conectores de 2x46 pines a SeeedStudioBeaglebone®Green/Beaglebone®Black, que proporciona todo lo que el cape requiere como suministro de energía y señales de pantalla. Además, el cape puede ser alimentado por el micro USB integrado en la parte posterior. Los botones debajo de la pantalla, IZQUIERDA, DERECHA, ARRIBA, ABAJO y ENTER, proporcionan una forma alternativa de interactuar con tu pantalla. Dos LEDs se utilizan para indicación de estado de energía y usuario.

**5 Pulgadas**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2642.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

**7 Pulgadas**

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/7-Inch-BeagleBone-Green-LCD-Cape-with-Resistive-Touch-p-2643.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

--------

- Resolución hasta 800x480 (5 pulgadas) / 1024x600 (7 pulgadas)
- Pantalla táctil resistiva
- 5 botones incluyendo IZQUIERDA, DERECHA, ARRIBA, ABAJO y ENTER
- Compatible con Debian
- Retroiluminación ULP
- 4 orificios de montaje de 3mm
- Suministro de energía USB integrado

## Especificaciones

-------------

| Nombre                | Valor                                                                                                  |
|--------------------------|--------------------------------------------------------------------------------------------------------|
| Dimensión            | 200mm x130mm x50mm                                                                                              |
| Peso | P.B 120g                                  |
|Voltaje de Trabajo|5V |
|Corriente de Trabajo|110mA |
|Potencia|0.55W |

## Aplicación

-----------------

Úsalo con BeagleBone® para mostrar cualquier cosa que desees.

## Hardware

-----------------

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-08za8h5rzwtbm1lq3n3oydkcxp.jpg)

**SN74HC245**

- Gran rango de corriente de manejo de IO

**Interruptor de dirección I2C del Cape**

- Interruptor de configuración de dirección I2C

**CAT4139TD**

- Retroiluminación, corriente y voltaje constante

### Lista de partes

|                            |          |
|----------------------------|----------|
| **Nombre**             | Cantidad |
|  Green LCD Cape con Pantalla Táctil Resistiva | 1        |

## Primeros Pasos

-----------

***Se te mostrará cómo comenzar paso a paso en esta sección.***

### Preparación

- Placa BeagleBone® Green o placa BeagleBone® black (con [instalación](https://beagleboard.org/getting-started) del SO) × 1.
- Cables USB (tipo A a micro tipo B) × 2.

### Conexión de Hardware

![](https://www.seeedstudio.site/media/catalog/product/cache/ef3164306500b1080e8560b2e8b5cc0f/h/t/httpsstatics3.seeedstudio.comseeedimg2016-086yqt2uwelst8w5mwuaklys12.jpg)

:::note
Tanto la placa BeagleBone® Green como el Green LCD Cape con Pantalla Táctil Resistiva necesitan estar conectados por USB para un manejo suficiente.
:::

### Configuración de Software

1. Verifica qué puerto COM está usando la placa BeagleBone® Green en el Administrador de Dispositivos

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/com-show.png)

2. Accede al sistema de la placa BeagleBone® Green usando putty con el puerto COM.

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/putty-config.png)

cuenta: debian, contraseña: temppwd

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/BBG-start.png)

3. Modifica las configuraciones en `/boot/uEnv.txt`

```bash
sudo nano /boot/uEnv.txt
```

Para pantalla de 7 pulgadas:

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/7-inch-config.png)

Para pantalla de 5 pulgadas:

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/5-inch-config.png)

Para dispositivos de pantalla que usan BeagleBone® HDMI, descomenta `disable_uboot_overlay_video=1`

![](https://files.seeedstudio.com/wiki/BBG-LCD-Cape-with-Resistive-Touch/img/HDMI-config.png)

4. Reinicia el sistema. El LED está parpadeando y verás esta ventana

![](https://files.seeedstudio.com/wiki/BeagleBone_Green_HDMI_Cape/img/Bbb_vnc.jpg)

## Recursos

---------

- **[Esquemático]** [Archivos de esquemático](https://statics3.seeedstudio.com/assets/file/bazaar/product/5INCH_BBG_00A2_SCH.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>