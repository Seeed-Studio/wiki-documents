---
description: Tutorial de Xadow - Detector de Aceleración
title: Tutorial de Xadow - Detector de Aceleración
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Tutorial_Acceleration_Detector
last_update:
  date: 1/13/2023
  author: shuxu hu
---
Hemos creado un detector de aceleración que detecta la aceleración y recuerda a los usuarios mediante vibración. Cuando la aceleración cambia, el Xadow Vibration vibrará y el OLED mostrará el valor del acelerómetro. También puedes ver el voltaje actual de la batería en la pantalla OLED.

Esta demostración requiere:

<!-- 
*   [Xadow Main Board](/es/Xadow_Main_Board/)

*   [Xadow OLED](/es/Xado_OLED_128multiply64)

*   [Xadow Vibrator Motor](https://wiki.seeedstudio.com/es/Xadow_Vibrator_Motor/)

*   [Xadow Accelerometer](/es/Xadow_3_Aixs_Accelerometer/) -->


![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Untitled2.jpg)

Para completar la demostración, necesitas:

*   Conectar Xadow Main Board, Xadow OLED, Xadow Vibrator y Xadow Accelerometer en la misma dirección con cables FFC.

<!-- *   Connect Xadow Main Board to PC with a Micro USB cable. Before uploading code, you need to install Xadow driver. Please click [here](/es/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board) to learn the specific operation. -->

*   Cuando veas "Ahora, puedes programar y usar el Xadow como usas otras placas Arduino", significa que has terminado los preparativos.

*   Descargar [el archivo: biblioteca acceleDetector](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip) y abrir directamente el archivo INO acceleDetector.

:::note
    Antes de compilar, debes asegurarte de que están [la biblioteca:OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/OLED_Display12864.zip) y [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/Sleep_FromArduino.zip) en la Biblioteca de Arduino. Si no, por favor descárgalas y ponlas en el archivo libraries del IDE de Arduino en la ruta: ..\arduino-1.0.1\libraries después de descomprimir._
:::
*   Compilar el código y subirlo a la placa xadow. Necesitas seleccionar Seeed Xadow desde el menú Herramientas | Placa del entorno Arduino.
*   Entonces puedes ver la siguiente imagen:

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Demo_1_effect_picture.jpg)

Cambia el valor de aceleración agitando el sensor, verás el valor del sensor en el módulo OLED

##  Recursos

[Código Demo1 acceleDetectoe](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para proporcionarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>