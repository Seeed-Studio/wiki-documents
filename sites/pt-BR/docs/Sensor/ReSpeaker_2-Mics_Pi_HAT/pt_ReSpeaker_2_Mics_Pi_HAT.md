---
description: Visão geral
title: Visão geral
keywords:
  - ReSpeaker_2-Mics_Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ReSpeaker_2_Mics_Pi_HAT
sku: 107100001
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT/
---

![](https://files.seeedstudio.com/products/107100001/01.png)

ReSpeaker 2-Mics Pi HAT é uma placa de expansão de dois microfones para Raspberry Pi projetada para aplicações de IA e voz. Isso significa que você pode construir um produto de voz mais poderoso e flexível que integra Amazon Alexa Voice Service, Google Assistant e assim por diante.

A placa é desenvolvida com base no WM8960, um codec estéreo de baixo consumo. Existem 2 microfones em ambos os lados da placa para coletar sons e ela também fornece 3 LEDs RGB APA102, 1 botão de usuário e 2 interfaces Grove on-board para expandir suas aplicações. Além disso, o conector de áudio de 3,5 mm ou a saída para alto-falante JST 2.0 estão disponíveis para saída de áudio.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

## Recursos

* Compatível com Raspberry Pi (Suporta Raspberry Pi Zero e Zero W, Raspberry Pi B+, Raspberry Pi 2 B, Raspberry Pi 3 B, Raspberry Pi 3 B+, Raspberry Pi 3 A+ e Raspberry Pi 4)
* 2 Microfones
* 2 Interfaces Grove
* 1 Botão de Usuário
* Conector de Áudio de 3,5 mm
* Saída para Alto-falante JST2.0
* Taxa Máxima de Amostragem: 48Khz

## Ideias de Aplicação

* Aplicação de Interação por Voz
* Assistente de IA

## Visão Geral de Hardware

![](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/img/mic_hatv1.0.png)

* BUTTON: um botão de usuário, conectado ao GPIO17
* MIC_L e MIC_R: 2 microfones em ambos os lados da placa
* RGB LED: 3 LEDs RGB APA102, conectados à interface SPI
* WM8960: um codec estéreo de baixo consumo
* Headers de 40 pinos do Raspberry Pi: suportam Raspberry Pi Zero, Raspberry Pi 1 B+, Raspberry Pi 2 B , Raspberry Pi 3 B e Raspberry Pi 3 B+
* POWER: porta Micro USB para alimentar o ReSpeaker 2-Mics Pi HAT, por favor alimente a placa para fornecer corrente suficiente ao usar o alto-falante.
* I2C: porta Grove I2C, conectada ao I2C-1
* GPIO12: porta digital Grove, conectada ao GPIO12 e GPIO13
* JST 2.0 SPEAKER OUT: para conectar alto-falante com conector JST 2.0
* 3.5mm AUDIO JACK: para conectar fone de ouvido ou alto-falante com plugue de áudio de 3,5 mm

## Plataformas Suportadas

<div align="center"><img src="https://files.seeedstudio.com/products/107100001/01.png"/></div>

* **[Comece com Raspberry Pi](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT_Raspberry)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/JetsonNano-2MICS.png"/></div>

* **[Comece com Nvidia Jetson Nano Série](https://wiki.seeedstudio.com/pt-br/ReSpeaker_2_Mics_Pi_HAT_Jetson)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/IMX6-2MIC-removebg-preview.png"/></div>

* **[Comece com NPi i.MX6ULL Dev Board Linux SBC](https://wiki.seeedstudio.com/pt-br/NPi-i.MX6ULL-Dev-Board-Linux-SBC/#iis)**

<div align="center"><img src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/STM32-2MIC-removebg-preview.png"/></div>

* **[Comece com ODYSSEY – STM32MP157C](https://wiki.seeedstudio.com/pt-br/ODYSSEY-STM32MP157C/#i2s-on-odyssey-stm32mp157c)**

## Habilitando Reconhecimento de Voz na Borda com Picovoice

<div align="center"><img width = "{700}" src="https://files.seeedstudio.com/wiki/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/banner.gif"/></div>

[**Picovoice**](https://picovoice.ai/) **permite que empresas inovem e se diferenciem rapidamente com IA de voz privada**. Construa uma estratégia de IA unificada em torno da sua marca e produtos com nosso reconhecimento de fala e [**tecnologias de compreensão de linguagem natural (NLU)**](https://searchenterpriseai.techtarget.com/definition/natural-language-understanding-NLU).

**A Seeed fez parceria com a Picovoice para oferecer uma solução de reconhecimento de fala na borda usando o [ReSpeaker 2-Mic Pi HAT](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html) para desenvolvedores.**

Picovoice é uma plataforma de ponta a ponta para construir produtos de voz sob seus próprios termos. Ela permite criar experiências de voz semelhantes à Alexa e ao Google. Mas roda inteiramente 100% no dispositivo. Há vantagens do Picovoice:

* **Privado**: Tudo é processado offline. Intrinsecamente compatível com HIPAA e GDPR.
* **Confiável**: Funciona sem precisar de conectividade constante.
* **Zero Latência**: A arquitetura focada na borda elimina atrasos de rede imprevisíveis.
* **Preciso**: Resistente a ruídos e reverberações. Supera alternativas baseadas em nuvem por grandes margens.
* **Multiplataforma**: Projete uma vez, implemente em qualquer lugar. Construa usando linguagens e frameworks familiares.

## Detecção de Palavra-chave Open-source com Mycroft Precise

Além do Picovoice, fornecemos suporte limitado para Mycroft Precise - um pacote open-source de detecção de palavra-chave em tempo real. Mycroft Precise é totalmente open source e pode ser treinado para reconhecer qualquer coisa, de um nome a uma tosse. O Precise é projetado para rodar em Linux. Ele é conhecido por funcionar em uma variedade de distribuições Linux, incluindo Debian, Ubuntu e Raspbian. De acordo com o arquivo README oficial, "ele provavelmente opera em outras distribuições *nx."

Mycroft Precise é um projeto com licença Apache-2.0, o que significa que você pode modificá-lo e distribuí-lo, inclusive para fins comerciais - o único requisito é que você preserve a licença original.

**Você pode encontrar exemplos tanto para os produtos Picovoice quanto para o Mycroft Precise na documentação de Primeiros Passos para a plataforma correspondente.**

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/ReSpeaker 2-Mics Pi HAT.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.zip)
* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.zip)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_SCH](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_SCH.pdf)
* **[PDF]** [Respeaker_2_Mics_Pi_HAT_PCB](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT_PCB.pdf)
* **[3D]** [ReSpeaker 2 Mics Pi HAT 3D](https://files.seeedstudio.com/wiki/MIC_HATv1.0_for_raspberrypi/src/ReSpeaker%202-Mics%20Pi%20HAT.zip)
* **[Driver]** [Seeed-Voice Driver](https://github.com/respeaker/seeed-voicecard)
* **[Algorithms]** [Algorithms includes DOA, VAD, NS](https://github.com/respeaker/mic_array)
* **[Voice Engine]** [Voice Engine project, provides building blocks to create voice enabled objects](https://github.com/voice-engine/voice-engine)
* **[Algorithms]** [AEC](https://github.com/voice-engine/ec)

* **[Eagle]** [Respeaker_2_Mics_Pi_HAT_SCH_v2](https://files.seeedstudio.com/wiki/ReSpeaker_2_Mics_Pi_HAT/202004059_ReSpeaker-2-Mics-Pi-HAT-V2.0_SCH_PDF_241121.pdf)


## Projetos

**Construa seu próprio Amazon Echo usando um RPI e ReSpeaker HAT**: Como construir seu próprio Amazon Echo usando um Raspberry Pi e ReSpeaker 2-Mics HAT.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/idreams/build-your-own-amazon-echo-using-a-rpi-and-respeaker-hat-7f44a0/embed' width='350'></iframe>

**Seu barista pessoal em casa ganha vida com esta máquina de café habilitada por voz**: Uma máquina de café open-source, com privacidade por design, que mantém em sigilo seu café favorito e sua programação de cafeína.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/4gN1bvl24ZM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## Suporte Técnico e Discussão sobre o Produto



Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
