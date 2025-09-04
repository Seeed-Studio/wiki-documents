---
description: Grove-Mega_Shield
title: Grove-Mega Shield

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove-Mega_Shield
last_update:
  date: 01/30/2023  
  author: Eico 

no_comments: false # for Disqus

---
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/500px-Megashieldn1_03.jpg" alt="pir" width={600} height="auto" /></p>

Grove - Mega Shield es una placa de extensión para Arduino Mega y Google ADK. Hemos estandarizado todos los conectores en conectores de 4 pines (Señal 1, Señal 2, VCC y GND) de 2mm y mantenemos algunos de los headers de 3 pines (Señal, VCC y GND) de 2.54mm para Servo y Electronic Bricks, lo que simplifica el cableado de proyectos electrónicos. Los conectores abrochados de 4 pines también hacen que la situación de cableado sea más estable. El Mega Shield incluye Digital 0 - 21 y Analógico 0 - 15; Abandonamos Digital 22 - 53 para instalar fácilmente Mega Shield con Xduino Mega/Google ADK.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-Mega-Shield-v12-p-2539.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características
---
- Compatible con Arduino Mega1280/2560
- Compatible con Grove
- Compatible con Google ADK
- Dimensiones: 92.8 mm X 57.2 mm.

## Bloque de Funciones
---
El propósito del Grove - Mega Shield es permitir la conexión fácil de los pines de entrada y salida de Xduino Mega/Google ADK a las unidades Grove.

Cada socket está claramente etiquetado con su pin I/O correspondiente. el Grove - Mega Shield puede dividirse en cuatro secciones: Botón de Reset, Área Analógica, Área Digital y Área de Alimentación.
Por favor considere el siguiente diagrama:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield001.jpg" alt="pir" width={600} height="auto" /></p>

El Área Digital del Grove - Mega Shield también puede dividirse en cuatro secciones según la función diferente de GPIO: IIC( 3 conectores ), UART( UART0-3 ), PWM ( PWM2-13 ) e ICSP( sin conector ). Por favor tenga en cuenta que PWM tiene dos formas de apariencia: Header de 3 Pines de 2.54mm y nuestro conector estándar de 4 Pines de 2mm. Estas dos formas de apariencia sirven diferentes propósitos, los conectores de 4 Pines de 2mm pueden conectarse a nuestros Groves estándar mientras que el Header de 3 Pines de 2.54mm puede conectarse a Servo, módulo de medición de rango Ultra Sónico y Electronic Bricks. Por favor tenga en cuenta que cuando use módulos de 3 Pines y 4 Pines en PWM al mismo tiempo, Preste atención extra en caso de usar múltiples veces el mismo GPIO. Por favor refiérase al siguiente diagrama:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/img/Megashield002.jpg" alt="pir" width={600} height="auto" /></p>

# Grove - Mega Shield
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


# Grove - Mega Shield v1.1
<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
- [Archivo Eagle del Grove - Mega Shield.](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield.zip)
- [Archivo Eagle del Grove - Mega Shield v1.1.](https://files.seeedstudio.com/wiki/Grove-Mega_Shield/res/Eagle_file_of_Megashield_v1.1.zip)

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