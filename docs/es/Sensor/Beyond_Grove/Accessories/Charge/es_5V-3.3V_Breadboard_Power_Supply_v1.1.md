---
title: Fuente de Alimentación para Protoboard 5V-3.3V v1.1
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/5V-3.3V_Breadboard_Power_Supply_v1.1/
slug: /es/5V-3.3V_Breadboard_Power_Supply_v1.1
last_update:
  date: 02/03/2022
  author: gunengyu
---


![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Supply.jpg)

Fuente de alimentación para protoboard de 5V/3.3V diseñada por SeeedStudio. Puede tomar energía directamente de un adaptador de pared DC y proporciona un voltaje regulado seleccionable de 5V o 3.3V.
Comparado con otros diseños de fuentes de alimentación para protoboard, este incluye un puerto mini-USB como el seeeduino, puedes alternar el interruptor y seleccionar tu fuente de energía. La fuente de alimentación para protoboard de 5V/3.3V incluye puerto mini-USB y puerto jack de alimentación. Esta fuente de alimentación se ajusta al protoboard que tiene 5.3cm de ancho como [Bread board Clear - 8.2 x 5.3cm](https://www.seeedstudio.com/depot/bread-board-clear-82-x-53cm-p-262.html?cPath=175_176), y también puede ajustarse al protoboard de 5.5cm de ancho [Basic Bread board - 16.5*5.5 cm](https://www.seeedstudio.com/depot/basic-bread-board-16555-cm-p-4.html?cPath=175_176), pero queda un poco ajustado.

Con esta placa, puedes enviar energía a ambos carriles de alimentación del protoboard, y cada lado tiene un interruptor de encendido/apagado.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/5V-3.3V-Breadboard-Power-Supply-p-566.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características  

* Voltaje regulado de 5V/3.3V
* Salida de doble carril
* Selección de energía separada para cada carril
* Entrada de puerto de alimentación dual
* Diseño especial para uso en protoboard

## Especificaciones  

<table>
  <tbody><tr>
      <th> Especificación</th>
      <th> Condiciones</th>
      <th> Mín</th>
      <th> Típ</th>
      <th> máx</th>
      <th> Unidad</th>
</tr>
    <tr>
      <td width={200}> Voltaje de entrada</td>
      <td width={400}></td>
      <td width={100}> 5.0</td>
      <td width={100}> 6.5</td>
      <td width={100}> 12.0</td>
      <td width={100}> V</td>
</tr>
    <tr>
      <td rowSpan={2}> Voltaje de Salida</td>
      <td> Canal 3.3V</td>
      <td> 3.235</td>
      <td> 3.3</td>
      <td> 3.365</td>
      <td> V</td>
</tr>
    <tr>
      <td> Canal 5V: 10mA≤IOUT≤600mA, 6.5V≤VIN ≤12V</td>
      <td> 4.9000</td>
      <td> 5.0</td>
      <td> 5.100</td>
      <td> V</td>
</tr>
    <tr>
      <td> Corriente de Salida</td>
      <td></td>
      <td></td>
      <td></td>
      <td> 800</td>
      <td> mA</td>
</tr></tbody></table>

## Uso  

### Instalación de Hardware  

1. Alinea la polaridad del conector de pines con el protoboard. (Usualmente Rojo para +, Azul para -)
2. Conecta completamente la placa de alimentación al protoboard.

Ahora puedes desactivar la alimentación mediante los dos jumpers, o ajustar los interruptores verticales para seleccionar diferentes voltajes. El interruptor horizontal se usa para seleccionar el conector Jack o el cable mini USB como entrada.

![](https://files.seeedstudio.com/wiki/5V-3.3V_Breadboard_Power_Supply_v1.1/img/Breadboard_power.jpg)

## Soporte  

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o [wish](http://wish.seeedstudio.com) para discutir.

## Seguimiento de Versiones  

<table>
  <tbody><tr>
      <th> Revisión</th>
      <th> Descripciones</th>
      <th> Lanzamiento</th>
</tr>
    <tr>
      <td width={300}> v1.0b</td>
      <td width={500}> Lanzamiento público inicial</td>
      <td width={200}> Nov 16, 2009</td>
</tr>
    <tr>
      <td width={300}> v1.1</td>
      <td width={500}> Conector de alimentación Jst convertido a conector DC Jack</td>
      <td width={200}> Sept 20,2011</td>
</tr></tbody></table>

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* [Eagle](https://files.seeedstudio.com/wiki/Bazzar_Files/106100000/Res/5V-3.3V_Breadboard_Power_Supply_v1_1.rar)

## Licencias  

Esta documentación está licenciada bajo Creative Commons [Attribution-ShareAlike License 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las librerías están licenciadas bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

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