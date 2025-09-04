---
description: Comenzando con Grove Vision AI V2.
title: Cámara externa compatible
keywords:
- vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/Grove-vision-ai-v2-camera-supported
last_update:
  date: 12/12/2023
  author: Citric
---

# Descripción general de cámaras externas compatibles

Grove Vision AI V2 cuenta con una interfaz CSI estándar y es compatible con cámaras de Raspberry Pi. Al conectar, por favor presta atención a la dirección de la fila de pines y no los conectes al revés.

## Altamente recomendado

Para explorar todo el potencial del Grove Vision AI V2 es posible que desees una cámara CSI por separado, recomendamos el [**Módulo de cámara OV5647-62 FOV para Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg" style={{width:300, height:'auto'}}/></div>


## Más compatibilidades

Actualmente hemos escrito controladores para la serie de cámaras OV5642, por lo que Grove Vision AI V2 es compatible con toda la gama de cámaras Raspberry Pi OV5647, por ejemplo, [la OV5647-67](https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html), y [OV5647-160](https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html), como se muestra a continuación:

<div style={{textAlign:'center'}}> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> </div>

## Las otras cámaras CSI

Las otras cámaras CSI son teóricamente compatibles, pero debido al hecho de que algunas de las cámaras no tienen controladores escritos para ellas o no tienen una unidad de procesamiento de color por sí mismas, puede haber un problema de que el color sea solo verde, y la pérdida de color completo tendrá un posible impacto en la precisión del reconocimiento.

- [Módulo de cámara Raspberry Pi V1](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html)
- [Módulo de cámara Raspberry Pi V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
- [Cámara CSI MIPI de 4 carriles IMX390 2.12MP 118°(H) FOV](https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html)
- [Módulo de cámara CMOS IMX219 M12/CS mount](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

<!-- 'Before', it's d type Device, but will make it work in the future -->
Grove Vision AI V2 ahora es compatible con cámaras de Raspberry Pi para usuarios que compraron después del 21 de febrero de 2024. Sin embargo, los usuarios que compraron antes de esta fecha actualmente no tienen soporte para estos modelos específicos de cámara que funcionan con entrada de imagen. El equipo está trabajando activamente en una solución para extender esta funcionalidad también a los compradores tempranos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Hoja de datos](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [SDK del módulo Seeed Grove Vision AI V2](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## Soporte técnico y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>