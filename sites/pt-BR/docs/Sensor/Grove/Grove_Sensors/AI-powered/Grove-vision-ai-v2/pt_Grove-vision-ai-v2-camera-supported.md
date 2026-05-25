---
description: Introdução ao Grove Vision AI V2.
title: Suporte a Câmera Externa
keywords:
  - vision ai
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Grove-vision-ai-v2-camera-supported
last_update:
  date: 12/12/2023
  author: Citric
createdAt: '2024-01-13'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/Grove-vision-ai-v2-camera-supported/
---

# Visão geral do suporte a Câmera Externa

O Grove Vision AI V2 possui uma interface CSI padrão e é compatível com câmeras Raspberry Pi. Ao conectar, preste atenção à orientação da fileira de pinos e não conecte invertido.

## Altamente Recomendado

Para explorar todo o potencial do Grove Vision AI V2 você pode querer uma câmera CSI separada; recomendamos o [**Módulo de Câmera OV5647-62 FOV para Raspberry Pi**](https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html).

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg" style={{width:300, height:'auto'}}/></div>


## Mais Suportes

Atualmente escrevemos drivers para a série de câmeras OV5642, portanto o Grove Vision AI V2 suporta toda a linha de câmeras Raspberry Pi OV5647, por exemplo, [a OV5647-67](https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html) e [OV5647-160](https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html), conforme mostrado abaixo:

<div style={{textAlign:'center'}}> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg" style={{width:300, height:'auto'}}/> </div>

## Outras Câmeras CSI

As outras câmeras CSI são teoricamente suportadas, mas devido ao fato de que algumas câmeras não têm drivers escritos para elas ou não possuem uma unidade de processamento de cor própria, pode haver um problema em que a cor seja apenas verde, e a perda de cor total poderá ter um impacto potencial na precisão do reconhecimento.

- [Raspberry Pi Camera Module V1](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html)
- [Raspberry Pi Camera Module V2](https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html)
- [IMX390 2.12MP 118°(H) FOV 4-lane MIPI CSI Camera](https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html)
- [IMX219 M12/CS mount CMOS Camera Module](https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html)

<!-- 'Before', it's d type Device, but will make it work in the future -->
O Grove Vision AI V2 agora oferece suporte a câmeras Raspberry Pi para usuários que comprarem após 21 de fevereiro de 2024. No entanto, os usuários que compraram antes dessa data atualmente não têm suporte para esses modelos específicos de câmera que funcionam com entrada de imagem. A equipe está trabalhando ativamente em uma solução para estender essa funcionalidade também aos primeiros compradores.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/cameraList.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Ficha técnica](https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf)
- **[GitHub]** [SDK do Seeed Grove Vision AI Module V2](https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

