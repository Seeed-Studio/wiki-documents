---
description: Este tutorial te mostrará cómo compilar, configurar y grabar balenaOS para recomputer AI Box.
title: Construir balenaOS para reComputer AI R2140
keywords:
  - Edge
  - reComputer R2140
  - balena
image: https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/recomputer_ai_r2140.webp
slug: /es/recomputer_ai_r2140_balena
last_update:
  date: 11/4/2025
  author: JiahaoLi
---

[balena](https://www.balena.io/) es una plataforma de Internet de las Cosas (IoT) diseñada para ayudar a los desarrolladores a construir, desplegar y gestionar aplicaciones IoT a través de una flota de dispositivos. Soporta una amplia gama de arquitecturas de dispositivos e incluye características para el despliegue de aplicaciones en contenedores, haciendo posible actualizar fácilmente tu software IoT y HostOS, corregir errores e introducir nuevas características en tus aplicaciones IoT. balena proporciona una forma unificada de enviar actualizaciones de código, gestionar configuraciones de dispositivos y asegurar que los dispositivos funcionen de manera confiable y segura en el campo, independientemente de su ubicación o condiciones de red.


<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

## Comenzando

Antes de comenzar este proyecto, es posible que necesites preparar tu hardware y software con anticipación como se describe aquí.

### Preparación del Hardware


<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2140</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/q/q/qq_1.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2140-12-p-6431.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

>Nota: Prepara una tarjeta SD y un lector de tarjetas para grabar la imagen.

### Software

- Una cuenta de [balenaCloud](https://balena.io) (regístrate aquí) y obtén los primeros 10 dispositivos gratis.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balena.png" alt="pir" width="800" height="auto" /></div>

- [balenaEtcher](https://etcher.balena.io/) para flashear la memoria del reComputer R2140.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/balenaEtcher.png" alt="pir" width="800" height="auto" /></div>

### Crear flota en balena cloud

Por favor, consulta el proceso en la imagen de abajo para crear la flota：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/creat_fleet.png" alt="pir" width="800" height="auto" /></div>

### Agregar dispositivo

Por favor, consulta el proceso en la imagen de abajo para agregar un nuevo reComputer AI R2140：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/add_device.png" alt="pir" width="800" height="auto" /></div>

### Instalar balena OS

Por favor, consulta el proceso en la imagen de abajo para instalar balena OS：
<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/install_image.png" alt="pir" width="800" height="auto" /></div>


### Flashear balena OS

Por favor, consulta el proceso en la imagen de abajo para flashear balena OS a la tarjeta SD：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/flash_image.png" alt="pir" width="800" height="auto" /></div>


La imagen de abajo muestra cómo se ve después de que el flasheo esté completo：

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/finish_image.png" alt="pir" width="800" height="auto" /></div>


### Probar dispositivo

Inserta la tarjeta SD flasheada en el recomputer AI box, luego enciéndelo y conecta el cable Ethernet. Después de 2 minutos, deberías poder ver el nuevo dispositivo en Balena Cloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/test_device.png" alt="pir" width="800" height="auto" /></div>


Cuando hagas clic en el dispositivo, entrarás a la pantalla mostrada en la imagen de abajo, lo que significa que puedes controlar remotamente el dispositivo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/00_AI_Sensing/Application/balena/recomputer_ai_box/resul.png" alt="pir" width="800" height="auto" /></div>


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
