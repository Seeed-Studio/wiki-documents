---
description: Grove - Kit de Câmera Serial
title: Grove - Kit de Câmera Serial
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-Serial_Camera_Kit
last_update:
  date: 2/22/2023
  author: jianjing Huang
createdAt: '2023-02-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Serial_Camera_Kit/
---
<!-- ---
name: Grove - Serial Camera Kit
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Serial-Camera-Kit-p-1608.html
oldwikiname:  Grove - Serial Camera Kit
prodimagename: GSCK_Introduction.jpg
surveyurl: https://www.research.net/r/Grove_Serial_Camera_Kit
sku:  101020000
--- -->

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Introduction.jpg)

Grove - Kit de Câmera Serial inclui uma placa de controle e duas lentes intercambiáveis, uma é uma lente padrão e a outra é uma lente grande angular. É uma ótima câmera para projetos de reconhecimento de imagem baseados em Arduino, porque 300 mil pixels não serão excessivos para o Arduino, de modo que o reconhecimento de imagem em tempo real é possível. Para torná-la mais divertida e versátil, lentes de duas especificações são fornecidas neste kit. A padrão é para fotos comuns e a grande angular é especialmente adequada para projetos de monitoramento.

## Especificações

---

* Tensão de Entrada: 5V

* Pixels: 300.000

* Resolução: 640*480, 320*240, 160*120

* Taxa de Baud Uart: 9600~115200

* Comunicação: RS485 e RS232

* Compressão JPEG de foto, opções de níveis alto, médio e baixo

* AGC

* Controle de Evento de Exposição Automática

* Controle Automático de Balanço de Branco

* Foco ajustável

## Demonstração

---
Esta demonstração mostrará como usar o Grove - Kit de Câmera Serial. Precisamos de um [Seeeduino](https://www.seeedstudio.com/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7), um [SD Card Shield](https://www.seeedstudio.com/sd-card-shield-v40-p-1381.html?cPath=105) e um [Grove - Button](/pt-br/Grove-Button). Quando o botão for pressionado, tiramos uma foto e a salvamos no cartão SD.

Siga os passos abaixo, um por um, você poderá facilmente usar seu Grove - Kit de Câmera Serial. Então vamos lá.

### Instalação de Hardware

Podemos ver que há duas interfaces Grove no SD Card Shield V4.0, então não precisamos de uma Base Shield, apenas conecte o Button ao Grove I2C e a Camera ao Grove Uart.

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Hardware.jpg)

### Baixar Código e Fazer Upload

Você pode baixar o código de demonstração no GitHub, clique [aqui](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)

Em seguida, faça o upload do código, e ele funcionará.

### Tirar uma Foto

Depois de terminar o upload do código de demonstração, podemos tirar uma foto agora, basta pressionar o botão, então aguardar alguns segundos, uma foto será salva no cartão SD.

A imagem a seguir é o teto do meu escritório usando a lente de ângulo reto.

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_60.jpg)

### Substituindo uma Lente

Há outra lente grande angular, vou mostrar como substituí-la.

Primeiro você deve ter uma chave de fenda：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step1.jpg)

Depois, desparafuse os parafusos na lateral da lente:

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step2.jpg)

Tente girar a lente, ela pode ser desparafusada：

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_Step3.jpg)

Usamos a lente grande angular para tirar uma foto; também é o teto do meu escritório!

Encontrou alguma diferença em relação à imagem anterior do teto?

![](https://files.seeedstudio.com/wiki/Grove-Serial_Camera_Kit/img/GSCK_90.jpg)

### Como Focar

Lentes rosqueadas em profundidades diferentes representam diferentes distâncias focais, você pode experimentar.

## Recursos

* **[Library]** [Demo Code](https://github.com/Seeed-Studio/Grove_Serial_Camera_Kit)
* **[Datasheet]** [CJ OV528](https://files.seeedstudio.com/wiki/Grove-Serial-Camera-Kit/res/cj-ov528_protocol.pdf)

## Projeto

**Grove Camera -> PHPoC -> Web Application** Este projeto mostra como ler dados da câmera Grove e enviar os dados para um aplicativo web via WebSocket.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/phpoc_man/grove-camera-phpoc-web-application-1dfd63/embed' width='350'></iframe>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
