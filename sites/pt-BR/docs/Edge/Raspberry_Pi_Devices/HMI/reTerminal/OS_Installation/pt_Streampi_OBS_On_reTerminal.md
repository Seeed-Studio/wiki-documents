---
description: Stream-pi e OBS Studio para reTerminal
title: Stream-pi e OBS Studio para reTerminal
keywords:
  - Edge
  - reTerminal OS_Installation
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Streampi_OBS_On_reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Streampi_OBS_On_reTerminal/
---


# Seeed reTerminal com streampi para controle do OBS Studio e controle conveniente

## Introdução

### O que é o reTerminal 🤔

O [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html) é uma placa tudo‑em‑um Raspberry Pi, alimentada pelo módulo Raspberry Pi Compute Module 4 (CM4), integrada com uma tela multitoque do tipo painel IPS, equipada com Wi‑Fi de banda dupla 2,4 GHz/5 GHz e Bluetooth 5.0, sistema Linux baseado em Raspberry Pi pré‑instalado, fornecendo armazenamento com 4 GB de RAM e 32 GB eMMC. Graças ao design modular, a placa é equipada com vários componentes acessíveis e conectores de alta velocidade. Ela pode ser usada de forma organizada em aplicações de assistente doméstico e desenvolvimento de IA individual, além de executar funções em nível industrial adequadas para ser uma instalação industrial.

Recursos

- Placa Tudo em Um Raspberry Pi: Alimentada por RPi CM4 32GB, integrada com tela multitoque IPS, Wi‑Fi de banda dupla e Bluetooth, sistema Linux compatível pré‑instalado

- Design Modular: Possui interface industrial de expansão de alta velocidade e conector de 40 pinos compatível com Raspberry Pi

- Interfaces e Componentes Ricos: Equipada com portas USB Tipo‑A, Ethernet Gigabit, micro‑HDMI, slot para cartão micro‑SD, interface para câmera MIPI, sensor de luz, acelerômetro, buzzer, RTC e botões programáveis

- Assistente Pessoal Organizado: Aproveite vários projetos de dashboard ou IA interessantes da Seeed e das comunidades utilizando sensores e componentes integrados

- Ótima Instalação Industrial: Beneficie‑se do sistema operacional estável baseado em Raspberry Pi, múltiplos conectores industriais expandidos, coprocessador criptográfico e placa de expansão oficial Seeed reTerminal E10-1

### O que é o streampi 🤔

Stream-Pi é um software robusto de teclado macro para artistas, criadores, gamers e geeks.

Stream-Pi existe como uma verdadeira alternativa open source, pois oferece um sistema de temas rico, que os usuários podem usar para personalizar cada cantinho da interface do usuário com CSS.

Stream-Pi também oferece uma API rica, que os desenvolvedores podem usar para escrever seus próprios plug-ins personalizados – assim como algumas opções pagas e proprietárias atualmente disponíveis. A grande diferença aqui é que o Stream-Pi é completamente gratuito e open source!

### O que é o OBS Studio 🤔

OBS Studio é um aplicativo gratuito e open source para captura de tela e transmissão ao vivo. Escrito em C/C++ e construído com Qt, o OBS Studio fornece captura em tempo real, composição de cenas, gravação, codificação e transmissão via Real Time Messaging Protocol (RTMP). Ele pode transmitir vídeos para qualquer destino compatível com RTMP, incluindo YouTube, Twitch, Instagram e Facebook.

### As razões pelas quais fazemos isso 🤨

Descobrimos que a tela integrada do reTerminal, o excelente desempenho e o suporte ao ecossistema relacionado ao Raspberry Pi tornam fácil implementar controles inteligentes e convenientes como uma ferramenta de produtividade.

Então, siga conosco e experimente! 😊

## Instalação 🐱‍🚀

- Preparação de hardware
  - reTerminal
  - PC

Para garantir a estabilidade, nosso tutorial é baseado no Ubuntu 18.04, também disponível para outros sistemas, como Windows, macOS e outras distribuições Linux.

### Instalar o OBS Studio ⌛

Existem duas maneiras de fazer isso, usando um pacote pré‑compilado ou compilando você mesmo; a **maneira recomendada é usar um pacote pré‑compilado**, que é testado e está sempre disponível. Se você quiser testar os recursos mais recentes, pode seguir o processo oficial de compilação do OBS; no entanto, isso pode ter alguns problemas imprevistos devido à dependência de um grande número de pacotes.

#### Usando pacotes pré‑compilados

```bash
sudo apt update 
sudo apt install wget git 
```

```bash
wget https://github.com/obsproject/obs-studio/releases/download/27.2.4/obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install ./obs-studio_27.2.4-0obsproject1.bionic_amd64.deb
sudo apt install -f
```

#### OBS personalizado

```bash
sudo apt install build-essential checkinstall cmake git libmbedtls-dev libasound2-dev libavcodec-dev libavdevice-dev libavfilter-dev libavformat-dev libavutil-dev libcurl4-openssl-dev libfontconfig1-dev libfreetype6-dev libgl1-mesa-dev libjack-jackd2-dev libjansson-dev libluajit-5.1-dev libpulse-dev libqt5x11extras5-dev libspeexdsp-dev libswresample-dev libswscale-dev libudev-dev libv4l-dev libvlc-dev libx11-dev libx11-xcb1 libx11-xcb-dev libxcb-xinput0 libxcb-xinput-dev libxcb-randr0 libxcb-randr0-dev libxcb-xfixes0 libxcb-xfixes0-dev libx264-dev libxcb-shm0-dev libxcb-xinerama0-dev libxcomposite-dev libxinerama-dev pkg-config python3-dev qtbase5-dev libqt5svg5-dev swig libwayland-dev qtbase5-private-dev libpci-dev
```

```bash
git clone https://github.com/obsproject/obs-studio.git -b release/27.2 obs_27.2
cd obs-studio
git submodule update --init --recursive
```

```bash
mkdir build
cd build
cmake -DBUILD_BROWSER=OFF ..
```

### Instalar o plugin websocket para o OBS Studio

```bash
wget https://github.com/obsproject/obs-websocket/releases/download/4.9.0/obs-websocket_4.9.0-1_amd64.deb
```

```bash
sudo apt update 
sudo apt install ./obs-websocket_4.9.0-1_amd64.deb
sudo apt install -f
```

### Instalando o servidor stream pi (aqui no PC)

[Recommended Versions](https://github.com/stream-pi/server/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

```bash
sudo apt install ./stream-pi-server-linux-x64-2.0.0-SNAPSHOT.deb
```

### Instalando o cliente stream pi (aqui no reTerminal)

[Recommended Versions](https://github.com/stream-pi/client/releases/tag/2.0.0-SNAPSHOT)

```bash
wget https://github.com/stream-pi/server/releases/download/2.0.0-SNAPSHOT/stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip
```

```bash
mkdir Stream_pi_client 
unzip stream-pi-server-linux-aarch64-2.0.0-SNAPSHOT-executable.zip -d Stream_pi_client
```

## Interação cliente-servidor do streampi

### Iniciar serviços

No nosso reTerminal

```bash
cd Stream_pi_client
./run_desktop
```

No nosso PC (Ubuntu)

Basta clicar no ícone

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/01.jpg"/></div>

### Definir a função 😏

1. Abra o servidor streampi

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/02.jpg"/></div>

2. Clique em file -> setting -> general

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/03.jpg"/></div>

3. Defina o endereço do servidor streampi, o tamanho da caixa e clique em salvar

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/04.jpg"/></div>

4. Conectando aos serviços do OBS

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/06.jpg"/></div>
<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/05.jpg"/></div>

5. No cliente do reTerminal, configure o endereço do servidor como o endereço IP do PC e clique em salvar e conectar.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/09.jpg"/></div>

6. Volte para o servidor streampi e arraste a aba correspondente para a caixa correspondente para obter a função correspondente

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/07.jpg"/></div>

7. Também podemos escrever comandos diretamente para implementar chamadas de programas, alterar ícones de exibição, alterar nomes de exibição, tamanhos de caixa e alcançar mais

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/11.jpg"/></div>

8. Adicionando uma visualização de tela e a fonte de imagem correspondente no software OBS Studio

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/08.jpg"/></div>

9. Finalmente, podemos clicar no reTerminal para concluir o controle correspondente 👍👍👍

    - Esta é a interface que temos no reTerminal

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/10.jpg"/></div>

    - Esta é a interface que temos no PC

    <div align="center"><video width={500} controls><source src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/demo.mkv"/></video></div>

    - Aparência do reTerminal

    <div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/ReTerminal/Streampi/12.jpg"/></div>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
