---
description: 3D Gesture Tracking Shield para Raspberry Pi MGC3130
title: 3D Gesture Tracking Shield para Raspberry Pi MGC3130
keywords:
- Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130
last_update:
  date: 1/11/2023
  author: jianjing Huang
---

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/preview-wiki.jpg)

Este shield está basado en el chip [MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf) de Microchip, que permite a la Raspberry Pi tener funciones de reconocimiento de gestos 3D y seguimiento de movimiento. Puede capturar información de posición x y z, también puede hacer detección de proximidad y detección táctil, soporta toque y doble clic.

Como se muestra en la figura a continuación, el área de reconocimiento se divide en dos partes: el área de franja distribuida alrededor y un panel central.

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/detect-part.jpg)

<div align="center"><b>Figura 1.</b><i>área de detección</i></div>

Las áreas de franja pueden detectar el cambio de orientación, incluyendo Norte, Sur, Oeste y Este. El área central puede detectar toque, toque simple, doble clic y gestos en el aire por encima. Por eso lo llamamos Shield de Gestos y Seguimiento 3D, ni siquiera necesitas tocar el área central directamente, solo agita tu mano por encima del área central, y este shield puede detectar tus movimientos.

Gracias a la tecnología patentada GestIC® de Microchip, este shield utiliza detección de campo cercano eléctrico para detectar movimientos. El shield genera un campo magnético por encima del panel central cuando la mano se acerca, interferirá con el campo magnético, y el receptor de campo magnético debajo del shield puede detectar el cambio.

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF1.jpg)
<div align="center"><b>Figura 2.</b><i>Campo magnético sin mano</i></div>

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/MF2.jpg)
<div align="center"><b>Figura 3.</b><i>Campo magnético con una mano</i></div>

Este hat se comunica con Raspberry Pi a través de la interfaz I2C, también hemos reservado un conector Grove I2C en caso de que necesites trabajar con otros módulos.

Qué módulo tan increíble, con su ayuda, puedes usar gestos para controlar luces, TV, altavoces... Solo libera tu imaginación y crea proyectos más mágicos.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/iLav34w77ns" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130-p-4073.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Reconocimiento de Gestos de Mano 3D y Datos Posicionales x, y, z
- Detección de Proximidad y Táctil
- Suite de Gestos Colibri Integrada (ejecutándose en el chip)
- Unidad Avanzada de Procesamiento de Señales 3D
- Rango de Detección: 0 a 10 cm
- Auto Calibración en el Chip
- Compatible con varios modelos de Raspberry Pi 2, 3, 4, y zero

## Especificaciones

|Elemento|Valor|
|---|---|
|Voltaje de Operación|3.3V|
|Chip Principal|MGC3130|
|Rango de detección|0 a 10 cm|
|Rango de Temperatura|-20°C a +85°C|
|Sensibilidad del Receptor| &lt;1 fF|
|Tasa de Posición|200 posiciones/seg|
|Resolución Espacial|hasta 150 dpi|
|Frecuencia Portadora|44 kHz a 115 kHz|
|Interfaz de Salida|I2C(Dirección I2C por defecto: 0X42)|
|Peso Bruto|55g|
|Peso Neto|17.6g|
|Tamaño del Paquete|115mm*75mm*25mm|
|Tamaño|65mm*56mm|

## Aplicaciones

- Notebooks/Teclados/Periféricos de PC
- Automatización del Hogar
- Controladores de Juegos
- Control de Audio

## Descripción General del Hardware

### Distribución de Pines

![](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/img/hardware-overview.png)

## Jugar con Raspberry Pi

### Habilitar I2C

- Paso 1. Ejecuta sudo raspi-config.
- Paso 2. Usa la flecha hacia abajo para seleccionar 5 Interfacing Options.
- Paso 3. Flecha hacia abajo hasta P5 I2C.
- Paso 4. Selecciona sí cuando te pregunte si quieres habilitar I2C.
- Paso 5. También selecciona sí si pregunta sobre cargar automáticamente el módulo del kernel.
- Paso 6. Usa la flecha derecha para seleccionar el botón.
- Paso 7. Selecciona sí cuando pregunte si quieres reiniciar.

:::tip
Para más información sobre raspi-config, consulta [https://www.raspberrypi.org/documentation/configuration/raspi-config.md](https://www.raspberrypi.org/documentation/configuration/raspi-config.md).
:::

### Instalar ncurses

**Paso 1**：Descarga desde [aquí](https://invisible-mirror.net/archives/ncurses/)

```
cd ~
wget https://invisible-mirror.net/archives/ncurses/ncurses-6.1.tar.gz
```

**Paso 2**: Instalar ncurses

```
tar -xvf ncurses-6.1.tar.gz
cd ncurses-6.1/
./configure
make
sudo make install
```

**Paso 3**: Verificar si ncurse se instaló correctamente

```
ncurses6-config --version
```

### Ejecutar Demo

**Paso 1**: Instalar mgc3103 y ejecutar mgc3103.

```
cd ~
git clone https://github.com/Seeed-Studio/Seeed_mgc3x30.git
cd Seeed_mgc3x30
make clean && make
./mgc3130
```

**Paso 2**: Aquí está la salida.

```
 *
 *                                                          *
 * Position X : 65534                                       *
 * Position Y : 0                                           *
 * Position Z : 38465                                       *
 *                                                          *
 * Gesture :                                                *
 *                                                          *
 * Airwheel angle : -1530                                   *
 *                                                          *
 * Touch electrode :
 * Tap electrode :
 * Double Tap electrode :
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *                                                          *
 *
```

- **Posición X/Y/Z**: La esquina inferior izquierda es X=0, Y=0. Z es la altura. El máximo es 65535.
- **Gesto**: Agita tus manos sobre el módulo, puedes ver la dirección de la onda como Oeste a Este, Este a Oeste, Sur a Norte y Norte a Sur.
- **Airwheel**: El número aumentará con la dirección de las agujas del reloj y se reducirá con la dirección contraria a las agujas del reloj. Tendrá algo de retraso en la pantalla.
- **Electrodo táctil**: Pon tu dedo en el área específica, obtendrás Centro, Este, Oeste, Sur y Norte.
- **Electrodo de toque**: Toca con tu dedo en el área específica, obtendrás Centro, Este, Oeste, Sur y Norte.  
- **Electrodo de doble toque**: Toca dos veces con tu dedo en el área específica, obtendrás Centro, Este, Oeste, Sur y Norte.  

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/__9Vas2kGHw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- **[Zip]** [Archivos Eagle del Shield de Seguimiento de Gestos 3D para Raspberry Pi MGC3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/3D%20Gesture%20%26%20Tracking%20Shield%20for%20Raspberry%20Pi%20(MGC3130)%20v1.0.zip)

- **[PDF]** [Hoja de Datos MGC3030-3130](https://files.seeedstudio.com/wiki/3D-Gesture-Tracking-Shield-for-Raspberry-Pi-MGC3130/res/MGC3030-3130-datasheet.pdf)

- **[Librería]** [Librería Seeed_mgc3x30](https://github.com/Seeed-Studio/Seeed_mgc3x30)

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
