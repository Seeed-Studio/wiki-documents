---
description: Tutorial de Xadow - Comunicación vía BLE
title: Tutorial de Xadow - Comunicación vía BLE
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Xadow_Tutorial_Communicate_via_BLE
last_update:
  date: 1/13/2023
  author: shuxu hu
---
¿Alguna vez has pensado en esta escena: Abrir el teléfono, puedo ver la presión barométrica actual o la aceleración del movimiento. El módulo Xadow puede ayudarte a lograr esto.

Para esta demostración, necesitas usar:

*   Xadow Main Board

*   Xadow OLED

*   Xadow Accelerometer

*   Xadow BLE Slave

Si has aprendido a realizar la Demo 1 y Demo 2, solo necesitas conectar los módulos Xadow Main Board, Xadow OLED, Xadow Accelerometer y Xadow BLE Slave y descargar [el código:BLE_Slave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip).

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/BLEUsage.jpg)

Ahora puedes abrir el archivo INO BLE_Slave, compilar y cargar.

<!-- Si estás empezando a usar, por favor instala el controlador Xadow refiriéndote a [aquí](/es/Xadow_Main_Board#Get_Start_with_Xadow_Main_Board). Y prepárate para descargar la librería:[DigitalAccelerometer_ADX345](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/DigitalAccelerometer_ADXL345.zip) y [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/Sleep_FromArduino.zip) y ponlas en el archivo de librerías del IDE de Arduino por la ruta: ..\arduino-1.0.1\libraries después de descomprimir._ -->
<!-- Ahora puedes abrir el bluetooth de tu teléfono para observar datos. Cuando el valor del acelerómetro cambie, entonces el serial bluetooth mostrará datos en tiempo real. Ten en cuenta que el bluetooth de tu teléfono debe ser bluetooth 4.0 (iphone4S o superior) y necesitas descargar herramientas de serial bluetooth. Para más información, por favor consulta [el uso de Xadow BLE Slave](/es/Xadow_BLE_Slave#Usage). -->

![](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/img/Phone_and_BLE_Slave_Communicate.jpg)

Puedes ver que hay dos comandos (ledon y ledoff) en la pantalla del teléfono. Se usan para controlar el estado del indicador VERDE. ¡Inténtalo!

##  Recursos

[Código Demo3 BLESlave](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Communicate_via_BLE/res/BLE_Slave.zip)

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