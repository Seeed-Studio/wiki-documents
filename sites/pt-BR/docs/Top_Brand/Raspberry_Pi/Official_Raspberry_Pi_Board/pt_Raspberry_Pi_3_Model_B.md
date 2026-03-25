---
description: Raspberry Pi 3 Model B
title: Raspberry Pi 3 Model B
keywords:
  - Raspberry_Pi
  - Official_Raspberry_Pi_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_3_Model_B
sku: 110060867
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_3_Model_B/
---
<!-- ---
name: Raspberry Pi getting started
category: MakerPro
bzurl: https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html
oldwikiname:  Raspberry Pi 3 Model B
prodimagename:  rpi4.png
surveyurl: https://www.research.net/r/Raspberry_Pi_3_Model_B
sku:     110061131
--- -->

**Raspberry Pi®** é um **SBC** (Single Board Computer, computador de placa única) do tamanho de um cartão de crédito baseado em **ARM**, criado pela [Raspberry Pi Foundation](http://www.raspberrypi.org). O Raspberry Pi roda o sistema operacional **GNU/Linux** baseado em Debian [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) e existem portes de muitos outros sistemas para este SBC.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rpi4.png)

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)

## PRIMEIROS PASSOS

### Requisitos

- [Raspberry Pi 4](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)/[3B+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B--p-3037.html)/[3B](https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html)/[3](https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-3-p-2848.html)/[3A+](https://www.seeedstudio.com/Raspberry-Pi-3-Model-p-3216.html)/[2B](https://www.seeedstudio.com/Raspberry-Pi-2-Model-B-w-ARMv7-Quad-Core-1GB-RAM-p-2289.html)/[B](https://www.seeedstudio.com/Raspberry-Pi-Model-B-p-1634.html)/[Zero](https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html)
- Rede Wi‑Fi/ponto de acesso móvel
- Cartão SD de 4 GB (ou maior) e leitor de SD
- PC ou Mac
- Adaptador USB 5 V 3 A para alimentação (opcional)  
- Um cabo de dados USB‑C (usamos o Pi 4 como exemplo)

:::note
Insira o cabo USB com cuidado, caso contrário a interface poderá ser danificada. Use um cabo USB com 4 fios internos. O cabo USB com 2 fios internos não pode transferir dados. Se você não tiver certeza sobre o seu cabo, pode comprar um [aqui](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html).
:::

### Inicializar a partir do cartão SD

#### Como gravar um Raspberry Pi OS

**1. Download do Raspberry Pi OS Stretch**

Baixe o [Raspberry Pi OS](https://www.raspberrypi.org/downloads/raspberry-pi-os/) no site oficial do Raspberry Pi e selecione a versão “with desktop and recommended software”.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rspberrypios.png)

**2. Etcher**

Clique para baixar o <a href="https://etcher.io/">Etcher</a> aqui e grave o arquivo ```*.img.xz``` diretamente no seu cartão SD com o Etcher. Ou descompacte o arquivo ```*.img.xz``` para um arquivo ```*.img``` e então grave‑o no cartão SD com outras ferramentas de gravação de imagem.
<br />

- Clique no ícone de mais para adicionar a imagem que você acabou de baixar; o software selecionará automaticamente o cartão SD que você conectou. Em seguida, clique em Flash! para começar a gravação. Levará cerca de 10 minutos para terminar.
- Saia do gravador e ejete o cartão SD.
- Depois de gravar a imagem no cartão SD, insira o cartão SD no Raspberry Pi. Use o adaptador USB e a interface USB‑C para alimentá‑lo. Não remova o cartão SD durante o processo de gravação. O Raspberry Pi iniciará a partir do cartão SD.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/etcher.png)

#### Configuração básica

**Conexão sem fio e SSH**

**1.** Crie um arquivo chamado "wpa_supplicant.conf" na pasta /boot e copie o seguinte código.

```txt
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
ssid="WiFi-name"
psk="WiFi-password"
key_mgmt=WPA-PSK
priority=1
}
```

:::note
O nome e a senha do Wi‑Fi devem ser os mesmos da sua rede Wi‑Fi local à qual o seu PC está conectado (certifique‑se de que o seu PC e o Raspberry Pi estejam na mesma LAN).
:::

**2.** Crie um arquivo em branco chamado "ssh" na pasta /boot.

**3.** Insira o cartão SD com o Raspberry Pi OS no Raspberry Pi.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg)

**4.** Conecte o Raspberry Pi à fonte de alimentação e ligue‑o.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg)

**5.** Abra o PuTTY para conectar o PC ao Raspberry Pi.

Baixe o PuTTY: [https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png)

**Raspberry Pi**
Nome de usuário padrão: pi
Senha padrão: raspberry

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg)

**Configuração do VNC**

**1.** Abra o raspi-config digitando o seguinte comando no terminal.

```bash
sudo raspi-config
```

Use a seta para baixo até 5 Interfacing Options e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png)

Use a seta para baixo até P3 VNC e pressione "enter" para selecionar.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png)

Selecione "Yes" para ativá‑lo.

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png)

Selecione "Ok".

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png)

**2.** Instale o VNC Viewer

Baixe o [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/)

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png)

Abra o VNC Viewer e digite o endereço IP do Raspberry Pi. Você pode encontrar o endereço IP digitando o comando `ifconfig` no terminal do Raspberry Pi (ou pode digitar raspberrypi.local).

:::note

Se você usar raspberrypi.local para fazer login no seu Pi, deve se certificar de que há apenas um Raspberry Pi em uso na sua LAN.
:::

Digite o nome de usuário e a senha padrão, e agora você pode acessar a área de trabalho remota do Raspberry Pi!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png)

Sucesso!

![](https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG)

## Habilitar UART

- habilitar miniuart-bt

## Usar com GrovePi

Consulte o wiki [Grove Base Hat for Raspberry Pi](https://wiki.seeedstudio.com/pt-br/Grove_Base_Hat_for_Raspberry_Pi/).

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
