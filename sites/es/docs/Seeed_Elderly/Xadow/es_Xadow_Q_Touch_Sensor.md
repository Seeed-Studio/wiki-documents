---
description: Xadow - Q Touch Sensor
title: Xadow - Q Touch Sensor
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Q_Touch_Sensor
last_update:
  date: 1/13/2023
  author: shuxu hu
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow%20Q%20touch%20sensor.jpg)

El Q Touch Sensor es un dispositivo de entrada táctil de alta sensibilidad y alta inmunidad al ruido. Está basado en el Atmel AT42QT1070.

El AT42QT1070 modula sus ráfagas de manera de espectro disperso para suprimir fuertemente los efectos del ruido externo y suprimir las emisiones de RF. El QT1070 utiliza un método de adquisición de pulso dual. Esto proporciona mayor inmunidad al ruido y elimina la necesidad de condensadores de muestreo externos, permitiendo la detección táctil usando un solo pin.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Xadow-Q-Touch-Sensor-p-1853.html)

## Especificaciones
---
*   Voltaje de Operación: 3 ~ 5.5V
*   Corriente de Operación @3.3V: 1mA
*   Teclas Táctiles: 7 Teclas ; key0 ,key1 ,key2 están en la parte inferior del PCB Xadow
*   Protocolo de Comunicación: I2C
*   Dirección I2C: 0x1B

## Función de la Interfaz
---
![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Xadow-Q_Touch.png)

*   ①：Salida de tecla táctil key3 , key4
*   ②：Salida de tecla táctil key5 , key6

El rango recomendado para la capacitancia de tecla Cx es 1 pF – 30 pF. Valores más grandes de Cx darán sensibilidad reducida.

*   ③：Interfaz Xadow
*   ④：Tecla táctil key0 en la placa
*   ⑤：Tecla táctil key1 en la placa
*   ⑥：Tecla táctil key2 en la placa

## Uso
---
Demo:

Cuando toques la almohadilla de tecla en la placa, verás el mensaje desde un puerto serie.

## Instalación de Hardware
---
- Conecta Xadow - Q Touch Sensor a Xadow - Main Board

## Parte de Software
---
- 1) Descarga la librería [[Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)];

- 2) Descomprímela en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.5\libraries.

- 3) Abre el código directamente por la ruta: File -&gt; Example -&gt; getTouchNumber.ino

- 4) Sube el código. Nota que debes seleccionar el tipo de placa correcto y el puerto COM.

Puedes ver:

![](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/img/Q_Touch_Demo_output.jpg)


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


## Recursos
---
*   [Q Touch Library](https://github.com/Seeed-Studio/Seeed_QTouch)

*   [Esquema pdf](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0.pdf)

*   [Archivo Eagle](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/Xadow-Q_Touch_Sensor_v1.0_sch_pcb.zip)

*   [Hoja de datos AT42QT107](https://files.seeedstudio.com/wiki/Xadow_Q_Touch_Sensor/res/AT42QT1070-MMH.pdf)

<!-- *   [How to detect finger touch?](/es/How_to_detect_finger_touch) -->

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>