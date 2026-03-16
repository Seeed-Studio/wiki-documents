---
description: Configuração do balena OS no EdgeBox RPi 200
title: Configuração do balena OS no EdgeBox RPi 200
keywords:
  - Edge
  - EdgeBox-RPi-200
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edgebox-rpi-200-balena-OS-setup
last_update:
  date: 07/20/2023
  author: Marc Pous & Peter Pan
createdAt: '2023-07-20'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edgebox-rpi-200-balena-OS-setup/
---

## O que é o balena?

balena é uma plataforma de Internet das Coisas (IoT) projetada para ajudar desenvolvedores a criar, implantar e gerenciar aplicações de IoT em uma frota de dispositivos. Ela oferece suporte a uma ampla gama de arquiteturas de dispositivos e inclui recursos para implantação de aplicações conteinerizadas, possibilitando atualizar facilmente o seu software de IoT e o HostOS, corrigir bugs e introduzir novos recursos nas suas aplicações de IoT. balena fornece uma forma unificada de enviar atualizações de código, gerenciar configurações de dispositivos e garantir que os dispositivos funcionem de maneira confiável e segura em campo, independentemente de sua localização ou das condições de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png" alt="pir" width="700" height="auto" /></div>

balenaOS é o componente-chave do ecossistema balena. balenaOS é um sistema operacional de código aberto baseado em Linux, criado pela balena, desenvolvido especificamente para executar aplicações conteinerizadas em dispositivos embarcados por meio do balenaEngine, um engine de contêiner leve, otimizado para dispositivos de IoT. Ele é otimizado para confiabilidade, robustez e segurança, fatores cruciais para ambientes de IoT e computação de borda. Construído sobre o projeto Yocto, o balenaOS oferece suporte a mais de 100 plataformas de hardware diferentes e inclui recursos integrados como atualizações do sistema operacional hospedeiro e uma API de supervisor para controlar aplicações. Ao aproveitar contêineres Docker, o balenaOS garante portabilidade das aplicações e simplifica o processo de desenvolvimento.

balenaCloud fornece um painel central para gerenciar sua frota de dispositivos de IoT. Ele simplifica o gerenciamento de dispositivos com funcionalidades para atualizações remotas, monitoramento de dispositivos e aplicações, solução de problemas e acesso seguro aos dispositivos. Com o balenaCloud, você pode monitorar facilmente como implantar aplicações em um dispositivo ou em milhares de dispositivos com um único `git push`, `balena CLI push` ou por meio da integração e entrega contínuas de sua preferência. balena é uma solução de IoT escalável e robusta para quem deseja gerenciar de forma eficiente uma frota de dispositivos de IoT, o software e o sistema operacional hospedeiro em execução neles.

## Edgebox-RPI-200

<div align="center"><img width ={500} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg
"/></div>

A série EdgeBox-RPI-200 são controladores industriais de computação de borda tudo‑em‑um baseados em Raspberry Pi, combinando múltiplas finalidades industriais. Projetados como hardware industrial robusto e de alta escalabilidade, equipados com ricos recursos de IO e suportados pelo excelente ecossistema de software industrial do Raspberry Pi, são uma escolha ideal para automação inteligente e soluções de Internet Industrial das Coisas (IIoT).

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira o seu agora 🖱️</font></span></strong>
    </a>
</div>

## Pré-requisitos

Neste documento você aprenderá como gravar o balenaOS no Seeed Studio EdgeBox-RPI-200 para reduzir o atrito ao atualizar o software e o sistema operacional hospedeiro em execução na sua frota de EdgeBox-RPI-200.

### Hardware

* [EdgeBox-RPI-200](https://www.seeedstudio.com/EdgeBox-RPi-200-CM4104016-p-5486.html) 
* [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html) usada para gravar o sistema operacional na CM4 do EdgeBox-RPI-200.
* Fonte de alimentação de trilho DIN 24 V (CC); neste caso é utilizada a `Mean Well HDR-100-24 AC-DC`.
* Cabos para conectar a fonte de alimentação ao EdgeBox-RPI-200.

### Software

* Uma conta no [balenaCloud](https://balena.io) (cadastre-se aqui) e obtenha os primeiros 10 dispositivos gratuitamente.
* [balenaEtcher](https://etcher.balena.io/) para gravar a memória da CM4.


## Gravar o balenaOS no EdgeBox RPI200

Para gravar o balenaOS no EdgeBox-RPI-200 você precisará desmontar o dispositivo e pegar o Raspberry Pi Compute Module 4.

**PASSO 1:** Coloque a CM4 do EdgeBox-RPI-200 na [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html). Siga, por favor, [a página da wiki](/pt-br/Raspberry_pi_CM4_update_eeprom/#Colocar-o-armazenamento-emmc-da-cm4-no-modo-de-armazenamento-em-massa-usb) sobre como colocar o armazenamento eMMC da CM4 no modo de armazenamento em massa USB com a [Dual Gigabit Ethernet NICs Carrier Board](https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html).

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png" alt="pir" width={600} height="auto" /></p>

**PASSO 2:** acesse o balenaCloud, crie uma conta gratuita e crie uma frota para os tipos de dispositivo `Raspberry Pi 4` ou `CM4`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/balena_cloud.png" alt="pir" width="700" height="auto" /></div>


**PASSO 3:** Clique em `Add Device` e baixe a imagem do balenaOS com as credenciais da sua rede.

:::note
Lembre-se de que o EdgeBox RPI200 sem antena WiFi não conseguirá se conectar à sua rede WiFi.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/add_new_device.png" alt="pir" width="700" height="auto" /></div>

**PASSO 4**: Usando o [balenaEtcher](https://etcher.balena.io/), grave a CM4 com a imagem do balenaOS baixada do balenaCloud.

**PASSO 5**: Depois que tudo for concluído com êxito, recoloque a CM4 no EdgeBox-RPI-200 e ligue-o com o adaptador de energia de trilho DIN. O dispositivo deverá aparecer no painel do balenaCloud.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud.png" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edgebox_appear_on_cloud_1.png" alt="pir" width="700" height="auto" /></div>

## Configurar o GPIO do conector Phoenix

Para acessar o GPIO do conector Phoenix do EdgeBox-RPI-200 é necessário atualizar os parâmetros da Device Tree da imagem padrão do balenaOS.

Para acessar o GPIO do conector Phoenix por meio de `/dev/ttyACM0` ou `/dev/ttyACM1`, vá para `Device Configuration` e altere as DToverlays

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/config_gpio_on_balena.png" alt="pir" width="700" height="auto" /></div>

A device tree é definida em Define DT overlays como `"dwc2","dr_mode=host","w1-gpio"`. Em Define DT parameters para a sobreposição padrão, adicionei o parâmetro "enable_serial=1".

<div align="center"><img src="https://files.seeedstudio.com/wiki/Edge_Box/balena/edit_dts.png" alt="pir" width="700" height="auto" /></div>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
