---
description: Xadow - Compass
title: Xadow - Compass
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Compass
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/X_compass_01.jpg)

Xadow Compass es una Brújula Digital de 3 Ejes que es miembro de la familia Xadow. El módulo está basado en un sensor magnético de campo bajo HMC5883. Cuenta con una precisión de rumbo de brújula de 1° a 2°, y utiliza el bus serie I2C para comunicarse con tu microcontrolador. Xadow Compass es una herramienta útil para ayudarte a obtener información de dirección.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Compass-p-1669.html)

## Especificaciones
---
- Voltaje de funcionamiento: 3.3V
- Linealidad: 0.1(Máx) ±% FS
- Resolución: 10 mili-gauss
- Rango Dinámico Magnético: ±1 ~ ±8 gauss
- Dirección IIC:
  - Dirección de 7 bits: 0x1E
  - Dirección de lectura de 8 bits: 0x3D
  - Dirección de escritura de 8 bits: 0x3C
- Temperatura de Funcionamiento: -30 ~ +85 °C
- Dimensiones: 25.43mm x 20.35mm

## Demostración
---
Esta demostración te mostrará cómo leer datos en bruto, cómo calibrar los datos con tu ángulo de declinación magnética local y cómo obtener el ángulo de rumbo.

**Obtener la declinación magnética local**

En primer lugar, antes de cualquier acción que vayas a tomar, necesitas preparar un parámetro que vas a usar en tu demostración. Esa es tu declinación magnética local.
- Puedes encontrarla en grados a través de la [página web de declinación magnética](http://www.magnetic-declination.com/). Por ejemplo, la mía es -2°37', que es -2.617 grados.
- Luego transfórmala de grados a radianes, y ahí obtienes el "declinationAngle". Por ejemplo, en mi caso, declinationAngle = -2.617 / （2*π）= -0.0456752665 rad. Tres cifras significativas son suficientes. Así que lo acortaría a -0.0456 rad. Y este es el parámetro con el que vas a reemplazar el valor de "declinationAngle" en el código de demostración.

**Descargar código**
- Completa la instalación del hardware:
:::note
    Cuando conectes Xadow Compass a Xadow Main Board, debes preocuparte por la dirección de conexión. El método de conexión es que la esquina no rellena de un módulo Xadow necesita conectarse al ángulo recto de otro módulo (ver las cuatro esquinas de cada módulo Xadow).
:::
- Descarga el archivo de biblioteca: [Digital Compass Library](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass), e instálalo en tu Biblioteca de Arduino. Ver [Cómo instalar la Biblioteca de Arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para aprender el método de instalación.
- Abre la demostración por la ruta: File -> Example -> Digital Compass -> HMC5883L_Example. Reemplaza el valor de la variable "declinationAngle" con el que ya has calculado.

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Xadow_Compass_Code.jpg)

- Sube el Código. Verifica el resultado de salida abriendo el monitor serie.

![](https://files.seeedstudio.com/wiki/Xadow_Compass/img/Digital_Compass2.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Hoja de Datos de Brújula Digital de 3 Ejes HMC5883](https://files.seeedstudio.com/wiki/Xadow_Compass/res/HMC5883.pdf)
- [Archivo Eagle de Xadow Compass](https://files.seeedstudio.com/wiki/Xadow_Compass/res/Xadow_Compass_Eagle_File.zip)
- [Archivo de Biblioteca de Xadow Compass](https://github.com/Seeed-Studio/Grove_3Axis_Digital_Compass)

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