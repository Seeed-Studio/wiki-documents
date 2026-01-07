---
description: Grove - Detector EMG
title: Grove - Detector EMG
keywords:
- Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-EMG_Detector
last_update:
  date: 1/6/2023
  author: jianjing Huang
---

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_product.jpg" /></div>

El detector EMG es un puente que conecta el cuerpo humano y la electricidad, el sensor recopila pequeñas señales musculares y luego las procesa con amplificación y filtrado de segundo orden, la señal de salida puede ser reconocida por Arduino. Puedes agregar esta señal a tu sistema de control.

:::note
El sensor no puede ser utilizado para propósitos médicos.
:::

En modo de espera, el voltaje de salida es 1.5V. Cuando detecta actividad muscular, la señal de salida se eleva, el voltaje máximo es 3.3V. Puedes usar este sensor en sistemas de 3.3V o 5V.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-EMG-Detector-p-1737.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png" /></a></p>

Características
--------

- Compatible con Grove
- Conector de 3.5mm
- 6 Electrodos de Superficie Desechables
- Voltaje de alimentación: 3.3V-5V
- Cables de 1000mm
- Sin fuente de alimentación adicional

:::tip
Para más detalles sobre los módulos Grove, consulta [Sistema Grove](https://wiki.seeedstudio.com/es/Grove_System/)
:::

Plataformas Compatibles
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" /></div>|<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg" /></div> | <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg" /></div>| <div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg" /></div>|

:::caution
Las plataformas mencionadas anteriormente como compatibles son una indicación de la compatibilidad de software o teórica del módulo. Solo proporcionamos biblioteca de software o ejemplos de código para la plataforma Arduino en la mayoría de los casos. No es posible proporcionar biblioteca de software / código de demostración para todas las plataformas MCU posibles. Por lo tanto, los usuarios tienen que escribir su propia biblioteca de software.
:::

Descripción del Hardware
------------------

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_EMG_detector.jpg" /></div>

- J2: interfaz grove, conecta a E/S analógica;
- J1: conector de Electrodos de Superficie Desechables EMG.
- U1: INA331IDGKT, amplificador diferencial.
- U2, U3: OPA333, amplificador de deriva cero.

Demostración
-------------

Esta demostración te mostrará cómo usar Grove - LCD RGB Backlight, necesitamos un Seeeduino V3.0, un Grove - LED Bar y Grove - Base Shield.

### Instalación del Hardware

Conecta Grove - Base Shield al Seeeduino, luego conecta Grove - LED Bar a D8, conecta Grove - EMG Sensor a A0.

Finalmente, coloca los tres electrodos en tu músculo, y mantén una distancia entre cada electrodo.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_connect.jpg" /></div>

:::tip
La lista de partes de este producto ha sido actualizada recientemente. Puedes recibir cables de conexión de dos especificaciones, sus funciones son completamente idénticas, solo los colores son diferentes, la relación correspondiente se muestra en el diagrama a continuación.
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/newline.png" /></div>
:::

### Descargar Código y Subir

Puedes descargar el código de demostración en github, haz clic [aquí](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code/), luego extráelo a cualquier lugar.

Luego sube el código al Seeeduino, si tienes algún problema con la subida del código, consulta Getting Started With Seeeduino

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Emg_ide.png" /></div>

### Movimiento

Cuando termines de descargar el código de demostración, tomará aproximadamente 5s para inicializar, debes mantenerte estático durante la inicialización.

Puedes ver que durante la inicialización, la Barra LED irá del nivel 10 al nivel 0. Cuando la Barra LED esté completamente apagada, ya puedes moverte.

Cuando te estés moviendo, puedes encontrar que el nivel de la Barra LED cambiará.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/img/Grove_emg_demo_2.gif" /></div>


<!-- 
# Grove-EMG Sensor v1.1

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div> -->

Recursos
--------

- [Archivo Eagle del Grove-EMG Sensor v1.1](https://files.seeedstudio.com/wiki/Grove-EMG_Detector/res/202000023+PCBA-Grove+EMG+Detector+v1.1.zip)
- [Código de Demostración](https://github.com/Seeed-Studio/Grove_EMG_detector_demo_code)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_EMG_Detector -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

