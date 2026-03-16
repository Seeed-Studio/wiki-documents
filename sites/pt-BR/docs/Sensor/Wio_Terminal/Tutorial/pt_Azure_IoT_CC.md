---
title: Codecraft conectando Azure IoT com Wio Terminal
nointro: null
keywords:
  - Tutorial Wio_terminal
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /Azure_IoT_CC
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Azure_IoT_CC/
---
# Codecraft conectando Azure IoT com Wio Terminal

## Introdução

Aqui vamos mostrar como conectar o Codecraft com o Azure IoT com base no Wio Terminal e aplicar sensores em projetos de IoT. O [Codecraft](https://ide.tinkergen.com/) é um aplicativo de programação gráfica que pode ser usado online e offline, produzido pela Seeed. O [Azure IoT](https://apps.azureiotcentral.com/) é uma plataforma de aplicativos de IoT hospedada, segura, que escala conforme o crescimento do seu negócio e se integra com seus aplicativos de negócios existentes, produzida pela Microsoft.

<div align="center"><img src="https://files.seeedstudio.com/wiki/CCandAzure/jihe.png" /></div>

## Primeiros passos

### Hardware

**Hardware necessário**

Neste demo você vai precisar dos dispositivos listados abaixo:

- [WioTerminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) x1
- Cabo Type-C x1
- Computador x1

**Conexão de hardware**

Ele é conectado a um computador através do cabo Type-C.

### Software

**Software necessário**

- [Codecraft](https://ide.tinkergen.com/)
- [Azure IoT](https://apps.azureiotcentral.com/)

### Tutorial

Aqui vamos mostrar como aplicar o Wio Terminal no Codecraft e depois conectar o Codecraft com o Azure IoT para treinar um modelo de Machine Learning e usá‑lo. O projeto é baseado na plataforma Arduino, o que significa que o Arduino IDE e várias bibliotecas Arduino são necessários. Se esta é a sua primeira vez usando o Wio Terminal, recomendamos um guia para rapidamente [começar com o Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/).

- **Passo 1** Conecte o Wio Terminal ao PC.
- **Passo 2** Abra o [site do Codecraft](https://ide.tinkergen.com/) e conecte‑o ao Wio Terminal

Selecione "Wio Terminal"

![](https://files.seeedstudio.com/wiki/CCandAzure/cc1.png)

Escolha "Connect", pode ser necessário instalar o CodecraftAssistant se for a primeira vez que você usa o Codecraft.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc2.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/cc3.png)

- **Passo 3** Arraste os blocos à esquerda para construir um programa pronto como o abaixo:

![](https://files.seeedstudio.com/wiki/CCandAzure/cc5.png)

Como você pode ver, o Wi‑Fi e o **Azure IoT Central scope id** aqui precisam ser configurados. O Wi‑Fi deve estar no mesmo ambiente que o seu e no próximo passo vamos preencher as informações do Azure IoT.

![](https://files.seeedstudio.com/wiki/CCandAzure/cc6.png)

- **Passo 4** Abra o [site do Azure](https://ide.tinkergen.com/) e **crie um novo app**

Clique em **"Build"** no lado esquerdo, as informações aqui são personalizadas e não muito importantes.

![](https://files.seeedstudio.com/wiki/CCandAzure/az.png)

- **Passo 5** Clique em **“Administration”-->"Device connection"-->"SAS-IoT-Device"** para adicionar o Wio Terminal

![](https://files.seeedstudio.com/wiki/CCandAzure/az3.png)

- **Passo 6** Copie as informações de que precisamos no Codecraft e cole‑as no programa que construímos

Aqui estão as informações essenciais **"ID Scope", "Primary key", "Device ID"** para o Codecraft

![](https://files.seeedstudio.com/wiki/CCandAzure/az5.png)

![](https://files.seeedstudio.com/wiki/CCandAzure/az6.png)

- **Passo 7** Faça o upload do programa e veja os resultados

Clique em "upload" e faça o upload do programa

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png)

Às vezes leva bastante tempo para fazer o upload, por favor seja paciente.

Vá para a página do Azure IoT e clique em "Device" --> "SAS-IoT-Device"

Os resultados devem ser como:

![](https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png)

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
