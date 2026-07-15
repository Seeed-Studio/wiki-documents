---
description: Implantar modelo de IA com Scailable em dispositivos NVIDIA Jetson
title: Primeiros passos com Scailable
tags:
  - Implantação de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Scailable-Jetson-Getting-Started
last_update:
  date: 03/10/2023
  author: Lakshantha
createdAt: '2023-10-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Scailable-Jetson-Getting-Started/
---

# Primeiros passos com Scailable em dispositivos NVIDIA® Jetson

<div align="center"><img width="{1000}" src="https://files.seeedstudio.com/wiki/Scailable/wiki-thumb-4.gif" /></div>

## O que é Scailable?

[Scailable](https://scailable.net) oferece uma plataforma para criar e gerenciar soluções de IA de Borda em escala. Com o Scailable, você pode simplesmente configurar qualquer dispositivo de borda compatível (como um roteador, gateway ou IPC) para transformá-lo em um dispositivo "inteligente". Dispositivos inteligentes podem executar modelos avançados de Inteligência Artificial (IA) e Aprendizado de Máquina (ML) em dados de entrada, como um fluxo de vídeo, para transformar a entrada em algo significativo, como uma contagem do número de carros no vídeo.

## Por que usar Scailable em NVIDIA Jetson?

A plataforma NVIDIA Jetson é uma ótima candidata para executar o Scailable porque, como um dispositivo de IA de Borda que inclui SoMs da NVIDIA, é capaz de oferecer um melhor desempenho de inferência após implantar, em escala, vários pipelines de IA via OTA (over‑the‑air) nesses dispositivos. 

Este wiki mostrará passo a passo como você pode instalar facilmente o Scailable AI Manager na plataforma NVIDIA Jetson e usar a plataforma Scailable para configurar e gerenciar remotamente sua solução de IA em escala.

## Pré‑requisitos

- Dispositivo NVIDIA Jetson executando NVIDIA JetPack 5.0+ e conectado à Internet

  - Testamos este wiki com o [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) executando o [JetPack 5.1.1](https://developer.nvidia.com/embedded/jetpack-sdk-511). Se você quiser explorar mais dispositivos NVIDIA Jetson oferecidos pela Seeed, visite [esta página](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf).
- PC host com Windows, Linux ou Mac e conectado à Internet

## Instalar Scailable AI Manager

**Passo 1:** Execute o comando abaixo para instalar o Scailable AI Manager no dispositivo Jetson Orin 

```sh
sudo bash -ic "$(wget -q -O - https://get.sclbl.net)"
```

:::note
Durante a instalação, você precisa digitar "y" no prompt que pede para habilitar o suporte ao JetPack 5.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/2.jpg
" style={{width:800, height:'auto'}}/></div>

**Passo 2:** Você pode digitar o endereço IP do dispositivo Jetson seguido de **:8081** em um navegador da web ou simplesmente inserir a URL que você verá na linha de comando, como a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/4.jpg
" style={{width:800, height:'auto'}}/></div>

## Registrar uma conta Scailable

**Passo 1:** Quando o Scailable AI Manager aparecer, registre o dispositivo dando um nome a ele e clique no botão **Register**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/1.jpg
" style={{width:1000, height:'auto'}}/></div>

**Passo 3:** Confirme o nome do dispositivo que você criou antes, clique em **Register** e clique em **Return to device**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/7.jpg
" style={{width:650, height:'auto'}}/></div>

Se tudo correu bem, você verá que todas as verificações de status foram bem-sucedidas na guia **Status**, conforme a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/8.jpg
" style={{width:850, height:'auto'}}/></div>

## Executar aplicação de IA

O Scailable vem pré‑carregado com muitos modelos de IA diferentes para você experimentar. No entanto, se quiser usar seu próprio modelo de IA, você também pode importá‑lo.

**Passo 1:** Na guia **Model**, na seção **First Model**, clique em **Assign Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/9.jpg
" style={{width:750, height:'auto'}}/></div>

**Passo 2:** Aqui você pode adicionar seu próprio modelo clicando em **add a model** ou usar um modelo pré‑construído. Aqui escolheremos **Scailable Models**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/10.jpg
" style={{width:900, height:'auto'}}/></div>

**Passo 3:** Como exemplo, vamos escolher o modelo **People counter within a region**. Clique em **Use this model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/12.png
" style={{width:800, height:'auto'}}/></div>

Agora você verá que o modelo está selecionado

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/13.png
" style={{width:750, height:'auto'}}/></div>

**Passo 4:** Na guia **Input**, selecione **Video driver** para o driver de entrada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/14.png
" style={{width:800, height:'auto'}}/></div>

Aqui você pode selecionar um fluxo de vídeo, imagem ou imagem/ vídeo de exemplo pré‑carregado com o Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/16.png
" style={{width:800, height:'auto'}}/></div>

**Passo 5:** Por exemplo, vamos escolher uma fonte de vídeo pré‑carregada que vem com o Scailable, que é **faces**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/15.jpg
" style={{width:800, height:'auto'}}/></div>

**Passo 6:** Na guia **output**, mantenha as configurações como padrão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/17.png
" style={{width:800, height:'auto'}}/></div>

**Passo 7:** Na guia **Options**, mantenha as configurações como padrão

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/18.png
" style={{width:800, height:'auto'}}/></div>

**Passo 7:** Na guia **Test**, clique em **Test configuration**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/19.png
" style={{width:800, height:'auto'}}/></div>

Você verá a seguinte saída se for bem‑sucedido

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/20.png
" style={{width:800, height:'auto'}}/></div>

**Passo 8:** Na guia **Run**, clique em **Run Model**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/21.png
" style={{width:800, height:'auto'}}/></div>

Você verá a seguinte saída se estiver sendo executado com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/22.png
" style={{width:800, height:'auto'}}/></div>

**Passo 9:** Clique em **View live visualization** para visualizar localmente os resultados da inferência 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/23.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/25.png
" style={{width:800, height:'auto'}}/></div>

**Passo 10:** Clique em **View output in cloud** para baixar os resultados nos formatos CSV ou JSON

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/26.png
" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/27.png
" style={{width:800, height:'auto'}}/></div>

## Implantar modelos de IA em escala 

Usando o Scailable, você pode implantar facilmente um único modelo em vários dispositivos em escala

**Passo 1:** Visite [esta página da web](https://admin.sclbl.net/login), faça login na sua conta Scailable e você verá o painel conforme a seguir

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/32.png
" style={{width:800, height:'auto'}}/></div>

**Passo 2:** Depois de clicar em **DEVICES**, você verá todos os seus dispositivos conectados à sua conta Scailable

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/28.png
" style={{width:750, height:'auto'}}/></div>

**Passo 3:** Selecione todos os dispositivos clicando na caixa de seleção, digite um nome para o grupo de dispositivos e clique em **Save new groups**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/29.png
" style={{width:750, height:'auto'}}/></div>

**Passo 4:** Clique em **Assign a model to all devices in group**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/30.png
" style={{width:750, height:'auto'}}/></div>

**Passo 5:** Escolha um modelo como fizemos antes e o modelo será implantado remotamente em todos os dispositivos do grupo

Após implantar o modelo remotamente com sucesso, você verá a seguinte saída

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Scailable/31.jpg
" style={{width:600, height:'auto'}}/></div>

## Saiba mais 

O Scailable oferece documentação muito detalhada e abrangente. Portanto, é altamente recomendável consultá‑la [aqui](https://docs.scailable.net).

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>