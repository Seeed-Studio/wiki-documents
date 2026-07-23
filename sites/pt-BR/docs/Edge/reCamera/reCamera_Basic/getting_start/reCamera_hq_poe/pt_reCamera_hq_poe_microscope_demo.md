---
description: Este é um projeto de demonstração de microscópio baseado no reCamera HQ PoE, que oferece suporte à inspeção de PCB e observação de amostras biológicas, incluindo guia de montagem de hardware e aplicações de modelos de IA.
title: Demo de Microscópio
keywords:
  - Edge
  - reCamera
  - reCamera HQ POE
  - POE
  - HQ
  - M12
  - Microscópio
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_hq_poe_microscope_demo
sku: 100041077,100018917,100029708,100074316
sidebar_position: 3
last_update:
  date: 11/08/2025
  author: Parker Hu
createdAt: '2025-11-10'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recamera_hq_poe_microscope_demo/
---

# reCamera_Microscope

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/4.gif" /></div>

## 🔥O que é o reCamera_Microscope?

reCamera_Microscope é um projeto de código aberto baseado na [série reCamera 2002](https://www.seeedstudio.com/reCamera-2002w-64GB-p-6249.html) e na [Placa de Sensor GC2053](https://www.seeedstudio.com/reCamera-2002-Sensor-Board-GC2053-p-6556.html). Você também pode usar a [versão reCamera 2002 HQ PoE](https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html) para concluir este projeto.

## 💡Para que o reCamera_Microscope pode ser usado?

Para que o reCamera_Microscope pode ser usado?<br />
O reCamera_Microscope suporta a troca de lentes com diferentes níveis de ampliação, permitindo capturar imagens de objetos como PCBs (Placas de Circuito Impresso), componentes eletrônicos, células, insetos e amostras de plantas.<br />
A série reCamera Sg2002 vem com um poder de computação integrado de 1 TOPS, permitindo executar o modelo YoloV11. Quando combinado com modelos de detecção ou segmentação de objetos, ele pode ser aplicado a cenários como detecção de defeitos em PCBs, classificação de componentes eletrônicos, bem como classificação e contagem de células, insetos e amostras de plantas.<br />
Mais direções de aplicação ainda estão para ser exploradas por todos vocês.

## 📷Prévia 


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-2.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-3.png" /></div>


 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-4.png" /></div>

## 🔧Composição de Hardware do reCamera_Microscope

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-5.png" /></div>

1. reCamera POE
2. Impressora 3D x2
3. Lente M12 x2
4. Suporte de Extensão de Lente M12 x3
5. suporte de microscópio
6. Fonte de alimentação 12V
7. Cabo Type-C

## Etapas de Instalação

**Conforme mostrado na figura, monte o suporte, conecte-o à fonte de alimentação de 12V e instale a peça impressa em 3D.**

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-7.png" /></div>

Conforme mostrado na figura, o kit de microscópio contém duas lentes. Você precisa remover a lente grande-angular e substituí-la pelas outras duas lentes.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-8.png" /></div>

### 🎨Opção 1: Lente 1: Uso da lente de microscópio

Conforme mostrado na figura, remova a lente do microscópio, instale três adaptadores de extensão de lente e, em seguida, instale a lente 1.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-9.png" /></div>

Conforme mostrado na figura, **conecte o computador usando um cabo USB.**

 Visite `192.168.42.1` para visualizar a página de carregamento do reCamera. O **usuário** logado é: `root` ; a **senha** é: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-10.png" /></div>

Você pode comprar lâminas de amostras de plantas, animais ou microrganismos e colocá-las na mesa do microscópio. Ajustando as posições da câmera e do objeto, você poderá ver imagens do mundo microscópico.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-11.png" /></div>

### 🎨Opção 2: Lente 2: Usar micro-lente para PCB

Conforme mostrado na figura, remova a lente do microscópio, instale um adaptador de extensão de lente e, em seguida, instale a lente 2.

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-12.png" /></div>

Conforme mostrado na figura, **conecte o computador usando um cabo USB.**

 Visite `192.168.42.1` para visualizar a página de carregamento do reCamera. O **usuário** logado é: `root` ; a **senha** é: `recamera.1`

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-14.png" /></div>

Há dois modelos pré-treinados disponíveis aqui, que podem ser usados para identificar componentes eletrônicos em PCBs ou detectar defeitos em PCBs.

| [Modelo de Detecção de Componentes Eletrônicos em PCB](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/readme.md) | [Download](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Electronic/yolo11n_electronic.cvimodel)     |
| ---------------------------------------- | ------------ |
| [**Modelo de Detecção de Defeitos em PCB**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/readme.md)          | [**Download**](https://github.com/Seeed-Studio/OSHW-reCamera-Series/blob/main/yolo11n_models/PCB_Defect_Detection/yolo11n_PCB_Defect.cvimodel) |

 <div align="center"><img width={450} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/microscope/image-1.png" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>