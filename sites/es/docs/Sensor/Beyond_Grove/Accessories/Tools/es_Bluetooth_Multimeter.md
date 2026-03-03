---
title: Multímetro Bluetooth
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Bluetooth_Multimeter/
slug: /es/Bluetooth_Multimeter
last_update:
  date: 02/03/2022
  author: gunengyu
---


El Multímetro Bluetooth es un periférico inteligente para teléfonos Android, especialmente diseñado para ingenieros. No solo puede recopilar fácilmente datos como voltaje, corriente y resistencia, etc., este multímetro también puede comunicarse con teléfonos a través de bluetooth. Por lo tanto, los datos recopilados se mostrarán en sus teléfonos. La optimización continua del hardware y software garantiza la precisión de medición de este multímetro.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bluetooth_Multimeter.jpg)

¡Tanto su hardware como su software son de código abierto! Además, también proporcionamos API así como instrucciones detalladas, haciendo de este Multímetro Bluetooth una plataforma abierta para que los desarrolladores la usen y re-desarrollen más convenientemente. Puede recopilar datos de varios sensores, como latidos del corazón, y luego transmitirlos a smartphones para monitoreo de datos. La combinación perfecta de hardware y software proporciona posibilidades infinitas para su aplicación y explotación.

Este Multímetro Bluetooth cuenta con una batería de litio incorporada y circuito recargable. El control estricto del consumo de energía en el software asegura la fácil aplicación de este producto. La carcasa acrílica hace que sea fácil de ensamblar por un lado, y hace que el producto sea estable y confiable por el otro lado.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Bluetooth-Multimeter-p-1535.html)

##   Especificaciones
---
<table cellspacing="0" width="80%">
<tr>
<th scope="col">Elemento</th>
<th scope="col">Mín</th>
<th scope="col">Típico</th>
<th scope="col">Máx</th>
<th scope="col">Unidad</th>
</tr>
<tr>
<th scope="row">Rango de Medición de Voltaje</th>
<td>-30</td>
<td>-</td>
<td>30</td>
<td>VDC</td>
</tr>
<tr>
<th scope="row">Precisión de Medición de Voltaje</th>
<td colspan="3">3</td>
<td>%</td>
</tr>
<tr>
<th scope="row">Rango de Medición de Corriente(Máx)</th>
<td colspan="3">1</td>
<td>A</td>
</tr>
<tr>
<th scope="row">Precisión de Medición de Corriente</th>
<td colspan="3">3</td>
<td>%</td>
</tr>
<tr>
<th scope="row">Rango de Medición de Resistencia</th>
<td>10</td>
<td>-</td>
<td>1,000,000</td>
<td>Ω</td>
</tr>
<tr>
<th scope="row">Precisión de Medición de Voltaje</th>
<td colspan="3">5</td>
<td>%</td>
</tr>
<tr>
<th scope="row">Temperatura de Trabajo</th>
<td>0</td>
<td>-</td>
<td>45</td>
<td>℃</td>
</tr>
</table>

##  Descripción del Producto
---
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/产品视图.png)

*   ①： Interfaz USB. No solo puede proporcionar energía, sino también cargar la batería incorporada. Seleccionamos una batería de litio con capacidad de 500mAh, se espera que pueda usarse durante 10h.
*   ②：Conector de programación para Bluetooth Serial.
*   ③：Interruptor de encendido del Multímetro Bluetooth.
*   ④：Indicador de emparejamiento.
<dl><dd>El indicador rojo y el indicador azul parpadearán alternativamente --- durante el emparejamiento</dd><dd>El indicador azul parpadeará --- emparejado</dd></dl>


*   ⑤：Indicador de carga.
<dl><dd>Luz indicadora roja - cargando</dd><dd>Luz indicadora verde - carga completa.</dd></dl>

*   ⑥：Indicador de transferencia de datos. cuando se transfieren datos, parpadeará.
*   ⑦：Conector de Audio para medir la resistencia.
*   ⑧：Conector de Audio para medir el voltaje.
*   ⑨：Conector de Audio para medir la corriente.
*   ⑩：Interruptor de Selección de Rango de Corriente.

##   Diagrama de Funcionamiento
---
El mapa esquemático de funcionamiento del Multímetro Bluetooth y el dispositivo Android se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Multimater_Work_Principle_1.jpg)

##   Demostración
---
Este Multímetro Bluetooth es un multímetro portátil, un dispositivo que recopila el voltaje, la resistencia y la corriente. Y puede enviar estos datos a otros dispositivos vía Bluetooth, para que podamos observar los datos a través de otros dispositivos. A continuación te demostraremos cómo usarlo.

**Emparejar teléfono y Multímetro Bluetooth  **

*   1) Descarga [el paquete del programa de aplicación:SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip) e instálalo.

*   2) Luego haz clic en los iconos de la aplicación SmartMeter para ejecutar, en este momento aparecerá una solicitud de permisos de Bluetooth cuando no hayas abierto el bluetooth del teléfono. Haz clic en "SÍ" para abrir bluetooth.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_request.JPG)

*   3) Después de entrar a la interfaz de usuario, enciende el interruptor rojo de la aplicación, mostrará 0.0 en la pantalla.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_Switch.jpg)

*   4) Haz clic en el icono de Bluetooth para seleccionar dispositivo.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_device.jpg)

*   5) Por favor selecciona el dispositivo BT MULTIMETER para emparejar con tu teléfono. Mientras el dispositivo BT MULTIMETER no exista, necesitas hacer clic en "Buscar dispositivo" para buscarlo.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Bt_list_device.JPG)

Nota: Mientras no haya dispositivo BT MULTIMETER para seleccionar ni la opción "Buscar dispositivo" para buscar, puedes primero usar el teléfono para emparejar con el Multímetro Bluetooth y ejecutar la aplicación después de emparejado.

*   6) Ingresa "0000"(predeterminado para multímetro bluetooth) o "1234" para el emparejamiento bluetooth. y es mejor que observes el indicador de emparejamiento, te ayuda a juzgar si el emparejamiento fue exitoso.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Pair.JPG)

*   7) Felicitaciones por completar el emparejamiento.
![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_Interface.jpg)

**Medir  **

Como otros Multímetros, el multímetro bluetooth tiene varias notas en el uso, por ejemplo: no midas resistencia cuando le suministres energía. Así que te sugerimos encarecidamente que leas las notas de los multímetros por temor a que el dispositivo no pueda usarse normalmente.

**Medir Resistencia**
 Ahora midamos resistencia. Cuando la App de Android y el Multímetro están conectados, elige resistencia (es decir, mueve el cursor a Ω), la línea de Audio se conecta al conector (marcado R) del Multímetro Bluetooth.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Om.JPG)

**Medir Voltaje**
 Es muy simple medir el voltaje. Solo mueve el cursor de la App de Android a V, y mueve la línea de Audio al conector VOL, entonces puedes ver el valor del voltaje.

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/V.JPG)

 El método para medir corriente es igual que otros multímetros. Necesito recordarte que selecciones el rango de corriente correcto.

<font color="blue">Nota: Es necesario verificar si la línea de audio está conectada al conector correspondiente y el cursor está en el lugar correcto para obtener datos precisos.</font>

##   Referencia
---
###   La Interfaz de Usuario

Tenemos tres interfaces de usuario de la App de Android para el Multímetro Bluetooth.

|UI 1.jpg|UI 2.jpg|UI 3.jpg|
|---|---|---|
|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_1.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_2.jpg)|![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/UI_3.jpg)|

Acordamos consistentemente que el color de las dos versiones anteriores no es brillante, debería usar los tonos universales de multímetro naranja y negro o rojo y negro; Al mismo tiempo, aumentamos el botón Hold, botón Range, dial (mA, A, Ω, V, OFF (opcional) cinco posiciones) en la versión amarilla. Y publicamos sobre qué versión te gusta. A continuación está la información de retroalimentación:

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Red_Version.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/GreenSumsung.jpg)

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Yellow.jpg)

###   La Estructura y Apariencia

**Dibujo de Efecto**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/BT_effect.jpg)

**Imagen Impresa**

![](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/img/Printed_Picture.jpg)


## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos
---
- [Archivo Eagle del Multímetro Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/Bluetooth_Multimater_Eagle_File.zip)
- [Archivo: Biblioteca del Multímetro Bluetooth](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMultimeter_Library.zip)
- [El paquete del programa de aplicación:SmartMeter](https://files.seeedstudio.com/wiki/Bluetooth_Multimeter/res/SmartMeterWithUI_Installation_package.zip)

## Soporte Técnico y Discusión del Producto
 si tienes algún problema técnico. envía el problema a nuestro [foro](http://forum.seeedstudio.com/). 
¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>