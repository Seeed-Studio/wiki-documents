---
description: Este wiki demonstra como usar o ollama para implantar o LLM DeepSeek no Raspberry Pi AI Box.
title: Implantar DeepSeek no Raspberry Pi AI Box & Industrial box
keywords:
  - Edge
  - RasberryPi 5
  - Deepseek
  - Ollama
image: https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.webp
slug: /deploy_deepseek_on_raspberry_pi_ai_box
last_update:
  date: 03/11/2025
  author: Jiahao
no_comments: false
createdAt: '2025-03-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/deploy_deepseek_on_raspberry_pi_ai_box/
---

# Implantar DeepSeek no Raspberry Pi AI Box & Industrial box

## Introdução

Este wiki explica como implantar o modelo [DeepSeek](https://github.com/deepseek-ai/DeepSeek-LLM) em um Raspberry Pi AI Box usando o framework de deployment [Ollama](https://ollama.com/). O Ollama simplifica o processo de instalação e execução de modelos de IA em hardwares compactos como o Raspberry Pi, cuidando do gerenciamento de dependências e da configuração do sistema. Neste guia, você encontrará instruções claras, passo a passo, sobre como configurar seu ambiente, instalar o software necessário e iniciar o modelo DeepSeek. Este recurso é voltado para desenvolvedores e entusiastas de IA que desejam aproveitar o poder da IA em dispositivos de baixo consumo.


## Preparar hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>reComputer AI R2130</th>
  <th>reComputer AI Industrial R2145</th>
  <th>reComputer Industrial R20xx</th>
  <th>reComputer Industrial R21xx</th>
 </tr>
    <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-r2145.jpeg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrail-r2000_1.jpg" style={{width:600, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-Industrial-R2145-12-p-6486.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## Preparar software

### Atualizar o sistema:

```
sudo date -s "$(wget -qSO- --max-redirect=0 google.com 2>&1 | grep Date: | cut -d' ' -f5-8)Z"
sudo apt update
sudo apt full-upgrade
```

### Instalar Ollama 

Abra um terminal com `Ctrl+Alt+T` e insira o comando abaixo para instalar o ollama:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_ollama.png" alt="pir" width={1000} height="auto"/></p>

```
curl -fsSL https://ollama.com/install.sh | sh
```

### Instalar e executar o modelo deepseek

Em seguida, insira o comando abaixo para instalar e executar o modelo deepseek 7b:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/AI_box_deepseek/install_deepseek.png" alt="pir" width={1000} height="auto"/></p>

```
ollama run deepseek-r1
```

## Resultado

Nesta demonstração, usei o modelo DeepSeek 1.5b. Você pode escolher qual modelo usar com base em suas necessidades e na capacidade do seu hardware.

<div class="video-container">
<iframe width="800" height="400" src="https://www.youtube.com/embed/qo2iv5RLgbA" title="How to deploy deepseek on raspberry pi AI box?  #deepseek #raspberrypi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>