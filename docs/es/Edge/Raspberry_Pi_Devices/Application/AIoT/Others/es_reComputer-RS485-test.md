---
description: Aprende cómo usar pruebas de loopback para probar la interfaz RS485 de la serie reComputer.
title: Prueba RS485 de reComputer
keywords:
  - RS485
  - reComputer
  - loopback test
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /es/recomputer_rs485_loopback_test
sku: 113991314,113991274, 113991294, 113991295, 113991334, 113991374, 113991375,100020831, 100045506, 100080766, 100026042, 100061305, 100099044, 100097052, 100091962  
last_update:
  date: 01/14/2026
  author: Jiahao
---

## Introducción

Esta wiki se aplica a todos los dispositivos reComputer con interfaces RS485, incluyendo reComputer R10/R11/R20/R21 y puede usarse para probar si las funciones de recepción y transmisión RS485 están funcionando correctamente.

## Preparación del Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer r1000</th>
  <th>reComputer r1100</th>
  <th>reComputer r2000</th>
  <th>reComputer r2100</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991274-recomputer-r1025-10-0.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-113991375_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1035-10-p-5925.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1113-10-p-6258.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Conexión 

Selecciona un par de interfaces RS485 para probar, por favor conecta A1 a A2 y conecta B1 a B2:

<center><img width={1000} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/RS485_connection.jpg" /></center>

## Preparar software

Usa el siguiente comando para descargar：

```bash
git clone https://github.com/ackPeng/R1100_TEST.git
```

Compilar

```bash
gcc -o serial_test serial_test.c
```

## Prueba

```bash
#From ttyACM0 to ttyACM1, send RS485_1 to RS485_2
./serial_test /dev/ttyACM0 /dev/ttyACM1 115200
```
<center><img width={800} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/compile_and_test.png" /></center>

```bash
# From ttyACM1 to ttyACM0, send RS485_2 to RS485_1
./serial_test /dev/ttyACM1 /dev/ttyACM0 115200
```
<center><img width={1000} src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/RS485/send_test.png" /></center>


## Soporte Técnico

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
