---
description: Grove Base Cape para BeagleBone® v2
title: Grove Base Cape para BeagleBone® v2
keywords:
- Beagle_Bone
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Base_Cape_for_BeagleBone_v2
last_update:
  date: 1/10/2022
  author: jianjing Huang
---


![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_product_view_1200.jpg)

**Grove Base Cape para BeagleBone®** v2 es una placa de expansión del sistema Grove para la plataforma BeagleBone®. Este cape hace conveniente conectar muchos transductores (sensores y actuadores) disponibles como módulos Grove con la plataforma BeagleBone®. Las placas también incluyen una EEPROM Serial de 256kb. Te ahorrará mucho esfuerzo en el proceso de desarrollo de productos con diseño libre de soldadura y puertos compactos plug-and-play.

El cape proporciona 12 conectores Grove fáciles de usar para hacer plug-and-play con la gran familia de módulos Grove. Los conectores incluyen 2x UART, 2x ADC, 4x E/S Digital y 4x I2C que se interfazan con los pines de tu placa BeagleBone®, ofreciendo casi todo lo que necesitas. Hay dos interruptores utilizados para restablecer la dirección I2C en caso de conflictos de direcciones. La placa también integra un interruptor para transición de voltaje - de un 5V normal a 3.3V y viceversa.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Base-Cape-for-Beaglebone-v2.0-p-2644.html)

## Características

---

* Conexión más fácil entre tu BeagleBone® y los Módulos Grove.
* Libre de soldadura
* Ahorra tu tiempo y dinero

## Especificaciones

---
<table>
  <tbody><tr>
      <td> Voltaje de salida </td>
      <td> 3.3 V o 5 V(conmutable)</td>
      </tr>
    <tr>
      <td>  Corriente máxima de salida </td>
      <td> 500 mA a 3.3V, 500 mA a 5V</td>
      </tr>
    <tr>
      <td> Puertos Grove Digitales </td>
      <td> 6 , comparten los mismos pines con UART1(etiquetado) y UART4(etiquetado)</td>
      </tr>
    <tr>
      <td> Puertos Grove Analógicos </td>
      <td> 2</td>
      </tr>
    <tr>
      <td> Puertos Grove I<sup>2</sup>C </td>
      <td> 4</td>
      </tr>
    <tr>
      <td> Puertos Grove UART </td>
      <td> 2 (UART1, UART4)</td>
      </tr>
    <tr>
      <td> EEPROM </td>
      <td> 256kb (Modelo: CAT24C256WI)</td>
      </tr>
    <tr>
      <td> Dimensiones </td>
      <td> 70 mm(Longitud) × 50 mm(ancho)</td>
      </tr></tbody></table>

### Lista de partes

<table>
  <tbody><tr>
      <th>Nombre de partes </th>
      <th> Cantidad</th>
      </tr>
    <tr>
      <td>Grove Base Cape para BeagleBone® v2 </td>
      <td> 1 PCS</td>
      </tr></tbody></table>

## Descripción general del hardware

---
![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_hardware_overview_1200.jpg)

**Interruptor de voltaje de salida**, es un interruptor para controlar el voltaje de salida a los puertos Grove.

**Botón USER**, es un botón que puede ser usado como botón USER de BeagleBone®.

**Interruptor de dirección del cape**, es un interruptor para elegir la dirección del cape (solo útil cuando múltiples capes están conectados) para evitar colisión de direcciones I2C. Para detalles sobre el uso de más capes, por favor visita [https://beagleboard.org/Support/bone101/#capes](https://beagleboard.org/Support/bone101/#capes) y [http://elinux.org/BeagleBone_Community#Capes](http://elinux.org/BeagleBone_Community#Capes). Puedes usar este interruptor para elegir dirección desde **00**(binario, pulled down para configuraciones de fábrica) hasta **11**(binario, en Grove Base Cape para BeagleBone v2) que corresponden a 0x54 a 0x57 para todos los capes.

**Pin de protección contra escritura**, se usa para deshabilitar la protección contra escritura de la EEPROM de un cape si esos pines están conectados. Por defecto, no está conectado.

**Amplificador operacional LMV324**, es un amplificador operacional de salida rail-to-rail de bajo voltaje para controlar voltaje analógico. [Leer más](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

**TXB0108PW**, es un traductor de nivel de voltaje bidireccional de 8 bits. [Leer más](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf).

**Nota** puedes encontrar dos muescas(esquina redonda con agujeros) en un extremo del Grove Base Cape para BeagleBone® v2.0. Este extremo corresponde al extremo con la misma muesca en BeagleBone® Green. Puedes usar estas muescas para asegurar la orientación adecuada.

## Comenzar

En esta sección, te mostraremos un ejemplo básico para usar esta placa. Puedes encontrar más demostraciones en la página [BeagleBone® Recipes](https://www.seeedstudio.com/recipe/index.php?query=beaglebone). Solo agrega Grove Base Cape for BeagleBone® v2 a esos proyectos para hacer conveniente la conexión de cables.

### Lectura sugerida

* [BeagleBone® Green](/es/BeagleBone_Green)

* [Comunidad BeagleBone®](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

### Materiales requeridos

* Grove Base Cape for BeagleBone® v2 × 1

* [Grove - Button](https://www.seeedstudio.com/item_detail.html?p_id=766) × 1

* [BeagleBone® Green](https://www.seeedstudio.com/item_detail.html?p_id=2504) (totalmente compatible con BeagleBone® Black sin salida HDMI)

* Cable USB (tipo A a tipo B, para Arduino) × 1 o cable USB (Tipo-A a micro Tipo-B, para Seeeduino) × 1

* [Cable Grove](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57) × 1

### Trabajo de codificación

1.Conecta BeagleBone® Green a tu PC o MAC mediante cable USB. Haz clic en [http://192.168.7.2:3000/ide.html](http://192.168.7.2:3000/ide.html) para abrir Cloud9 IDE.

2.Conecta Grove - Button(P) a Grove Base Cape for BeagleBone® v2 con cable Grove. Conecta el cable Grove al pin GPIO 51.

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_1200.jpg)

3.Copia el siguiente código a Cloud9, guárdalo en un archivo **.js**.

```
var b = require('bonescript');
b.pinMode('P9_16', b.INPUT);//GPIO 51 corresponde a P9_16. Más detalles en https://beagleboard.org/Support/bone101/#headers

setInterval(check,1000);

function check(){
    b.digitalRead('P9_16', checkButton);
}

function checkButton(x) {
    console.log(x.value);
    if(x.value == 1){
        console.log("estás presionando el botón Grove");
    }
    else{
        console.log("no estás presionando el botón Grove");
    }
}
```

4.Haz clic en **Run** en Cloud9 IDE para ejecutar el programa en BeagleBone® Green.

5.Espera aproximadamente 10 segundos para ver la salida en la parte inferior de Cloud9 IDE. La salida probablemente se ve como la siguiente captura de pantalla:

![](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/img/Grove_Base_Cape_for_BeagleBone_v2_wiki_demo_result_600_s.png)

## Visor de Esquemáticos en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---

* [Archivos de Esquemáticos y PCB de EAGLE y Esquemático en formato PDF](https://files.seeedstudio.com/wiki/Grove_Base_Cape_for_BeagleBone_v2/res/Grove_Base_Cape_for_BeagleBone_v2.0_Schematics.zip)

* [BeagleBone® Green](/es/BeagleBone_Green)

* [Comunidad BeagleBone®](https://beagleboard.org/)

* [BeagleBone® 101](https://beagleboard.org/support/bone101)

* [BoneScript](https://beagleboard.org/support/bonescript)

* [Cloud9](https://c9.io/)

* [Hoja de datos TXB0108PW](http://www.electroensaimada.com/uploads/9/0/8/9/9089783/txb0108.pdf)

* [Hoja de datos LMV324](http://www.ti.com/lit/ds/symlink/lmv324.pdf)

* Más demostraciones en [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone) y [https://www.seeedstudio.com/recipe/index.php?query=beaglebone](https://www.seeedstudio.com/recipe/index.php?query=beaglebone)

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