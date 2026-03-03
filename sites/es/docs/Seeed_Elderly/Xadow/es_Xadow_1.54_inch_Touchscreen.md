---
description: Xadow - Pantalla Táctil de 1.54 pulgadas
title:  Xadow - Pantalla Táctil de 1.54 pulgadas
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_1.54_inch_Touchscreen
last_update:
  date: 1/13/2023
  author: shuxu hu
---

---
Si has usado o escuchado sobre Rephone, el primer teléfono modular y de código abierto del mundo, no te resultará extraño el producto del que vamos a hablar. ¡Sí! La Pantalla Táctil Xadow de 1.54'' es exactamente la pantalla táctil que usa Rephone.

Esta Pantalla TFT contiene 240 x 240 píxeles que pueden controlarse individualmente para mostrar hasta 262K colores. Sobre la pantalla hay una capa de pantalla táctil capacitiva, que ofrece un área activa de 29.4mm x 29.4mm en el centro de la pantalla. Como pantalla táctil de un solo toque, puede detectar presiones de dedos en cualquier lugar dentro del área activa durante operaciones normales. El controlador TFT tiene el IC Driver ST7789S en su interior con interfaz serie de datos de 2 bits y control de 4 bits, mientras que el controlador de pantalla táctil capacitiva usa I2C.

![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.JPG)

:::note
    Tenemos algunas modificaciones en la biblioteca de la Pantalla Táctil Xadow de 1.54". Por favor consulta la sección **Aviso** para información detallada.
:::
### Seguimiento de Versiones

|Producto |Versión|	Fecha de lanzamiento|	Estado de soporte|	Notas|
|---|---|---|---|---|
|Pantalla Táctil Xadow 1.54"|(v1.0, versión anterior)|	Oct 2015	|Soportada	|Ninguna|
|Pantalla Táctil Xadow 1.54"|(v1.1, versión más reciente)|	Junio 2016	|Soportada|	Ninguna|

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Xadow-1.54-inch-Touchscreen-p-2553.html)

## Características
---
- Resolución de 240 x 240
- Muestra hasta 262K colores
- 4 orificios de montaje de 2mm/0.9"
- Conectores Xadow integrados para cables FPC enchufables fáciles
- Opción perfecta para tu proyecto de teléfono DIY

## Especificaciones
---

|General|Valor|
|---|---|
|**Controlador TFT**|	ST7789S|
|**Pantalla táctil** |Tipo	Capacitiva|
|**Retroiluminación**|	3 LEDs blancos ajustables|
|**Consumo de corriente**|	~ 100mA con retroiluminación completa|
|**Resolución**|240 × 240 píxeles|

|**Conectores**|2 × Conectores Xadow de 35 PINES para Xadow / GSM+BLE & Xadow Audio
|**Interfaces**| Interfaz serie de cuatro hilos para pantalla TFT / I2C para pantalla táctil

**Dimensiones**

|Elemento |Unidad(mm)|Unidad(pulgadas)|
|---|---|---|
|Placa | 50.22mm × 47.21mm   |1.98" × 1.86"|
|Pantalla táctil | 38.1mm × 37.8mm |1.51"× 1.51"|
|Área activa | 27.72mm × 27.72mm  |1.09" × 1.09"|
|Orificios de montaje|4 × 2mm|4 x 0.9"|


## Descripción general del hardware
---
![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/Xadow_1.54%E2%80%99%E2%80%99_Touchscreen.png)

:::warning
    Por favor inserte el controlador, como Xadow GSM+BLE en el puerto **DERECHO**, e inserte el módulo de Audio en el puerto **IZQUIERDO**.
:::

## Aviso
---
- El producto no es tan resistente como parece, así que trate de usarlo en un ambiente estable ya que una variación abrupta de temperatura y humedad puede causar mal funcionamiento del panel.
- Trate de mantener la superficie del panel limpia y evite cualquier adhesivo aplicado en la superficie, si tiene que limpiar la pantalla, le recomendamos que use un paño limpio y suave con detergente neutro o alcohol isopropílico.
- Tenga en cuenta que tenemos pocas modificaciones a la librería de Xadow 1.54" Touchscreen para la versión más nueva. Si está usando Xadow 1.54" Touchscreen v1.1:
  - Para el entorno de desarrollo de JavaScript, Lua, y Arduino o usando el código fuente de RePhone Create Kit, necesita comentar la línea correspondiente #define _TOUCH_SCREEN_V1_0_ y des-comentar(habilitar) la línea //#define _TOUCH_SCREEN_V1_1_. Hemos proporcionado esas líneas correspondientes en:
    - https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone/blob/master/hardware/arduino/mtk/libraries/LDisplay/utility/lcd_sitronix_st7789s.h.
    - https://github.com/Seeed-Studio/JavaScript_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h.
    - https://github.com/Seeed-Studio/Lua_for_RePhone/blob/master/src/lcd_sitronix_st7789s.h
    - https://github.com/WayenWeng/RePhone_Create_Kit_Source_Code/blob/master/RePhone_Create_Source_Code/lcd_sitronix_st7789s.h
  - Para el archivo .VXP de RePhone Create Kit, por favor cambie la línea App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_x.vxp para que sea App=C:\MRE\RePhone_Create_Kit_v6_4_TP_v1_1.vxp en https://github.com/WayenWeng/RePhone_Create_Kit_VXP/blob/master/RePhone%20Create%20Kit%20VXP/autostart.txt
  - Para el entorno de desarrollo de Eclipse, no tiene que cambiar nada.

## Comunidad Rephone
---
[![](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/images/300px-RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Hemos estado buscando un mejor lugar donde nuestros patrocinadores (Usuarios de RePhone) puedan sentarse juntos, cálida y cómodamente, tener conversaciones sobre RePhone, discutir problemas técnicos, compartir ideas/proyectos, y dar retroalimentación sobre el desarrollo de los módulos en el futuro. Y entonces aquí vamos, la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone).

¡Ahora únete a nosotros en la [Comunidad RePhone](https://community.seeedstudio.com/discover.html?t=RePhone)! Juntos buscamos respuestas, hacemos cosas interesantes, nos preocupamos unos por otros, y compartimos nuestras experiencias.


## Visor de esquemas en línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos
---
El diagrama esquemático del Xadow 1.54" Touchscreen se proporciona en el siguiente enlace:

- [Archivos esquemáticos del Xadow 1.54"Touchscreen](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/resources/202000724_PCBA%3BXadow%201.54''Touchscreen%20v1.0%20schematic%20files.zip)

Consulta más información sobre la pantalla TFT y la pantalla táctil capacitiva:

- [Hoja de datos de la pantalla TFT](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/Datasheet-Capacitive_touchscreen.pdf)
- [Hoja de datos de la pantalla táctil capacitiva](https://files.seeedstudio.com/wiki/Xadow_1.54_Inch_Touchscreen/res/TFT_Display.rar)

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
