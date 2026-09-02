---
description: reComputer AI Industrial R2000 Gravar OS
title: reComputer AI Industrial R2000 Gravar OS
keywords:
  - Borda
  - reComputer AI Industrial R2000
  - Gravar OS
image: https://files.seeedstudio.com/wiki/reComputer-R2000/reComputer_AI_Industrial_R2135-12.webp
slug: /recomputer_ai_industrial_r2000_flash_os
last_update:
  date: 05/06/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2025-09-02'
url: https://wiki.seeedstudio.com/pt-br/recomputer_ai_industrial_r2000_flash_os/
---
# reComputer AI Industrial R2000 Gravar OS

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/7/-/7-114993595-recomputer-ai-industrial-r2135-12.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

A série reComputer AI Industrial R2000 é alimentada por Raspberry Pi CM5 e acelerador de IA Hailo-8; este sistema compacto de IA de borda oferece 26 TOPS para processamento de visão multicanal em tempo real. Com uma CPU Cortex-A76 quad-core, até 16GB de RAM, 64GB de eMMC e uma interface versátil, garante integração perfeita em aplicações industriais de IA.

## Requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer AI Industrial R2000 x 1
- Computador host (Windows/Mac/Linux) x 1
- Cabo Ethernet x 1
- Adaptador de energia (12V-24V) BYO
- Cabo USB Tipo-C x 1

## Requisitos de Software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Gravar OS

### Para computador host Windows

- **Passo 1.** Baixe o software **Raspberry Pi Imager** a partir **[daqui](https://www.raspberrypi.org/software/)**

- **Passo 2.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

- **Passo 4.** Clique em **CHOOSE OS** e selecione o seu OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outro OS, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 5.** Clique em **CHOOSE STORAGE**

- **Passo 6.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

### Para computador host MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com os passos a seguir.**
Abra um terminal e digite ```brew -V``` para verificar se você configurou corretamente o ambiente do homebrew; você deverá ver a versão do ambiente homebrew que instalou.
:::

- **Passo 1.** Baixe e instale o aplicativo **Raspberry Pi Imager** visitando [este link](https://www.raspberrypi.org/software/)

- **Passo 2.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar Wi-Fi, definir configurações locais** e muito mais

- **Passo 4.** Clique em **CHOOSE OS** e selecione o seu OS preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outro OS, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 5.** Clique em **CHOOSE STORAGE**

- **Passo 6.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

### Para computador host Linux

- **Passo 1.** Baixe o snap

```sh
sudo apt install snap
```

- **Passo 2.** Baixe o **rpi-imager**

```sh
snap install rpi-imager
```

- **Passo 3.** Abra o software Raspberry Pi Imager

```sh
rpi-imager
```

O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar Wi-Fi, definir configurações locais** e muito mais

- **Passo 5.** Clique em **CHOOSE OS** e selecione o seu OS preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTA:** Você pode selecionar outro OS, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 6.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 7.** Por fim, clique em **NEXT** e **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.
O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

## Inicializar a partir de SSD (NVMe via USB)

### Atualizar EEPROM

*Este método funciona se você tiver um SSD e tiver inicializado o dispositivo com sucesso com eMMC. Certifique-se de que seu sistema seja o Raspberry Pi mais recente (Bookworm ou posterior) e que o firmware do seu RPi 5 esteja atualizado para 2023-12-06 (6 de dezembro) ou mais recente, caso contrário ele pode não reconhecer as configurações relacionadas a NVME.*

**Passo 1**: Certifique-se de que seu sistema Raspberry Pi esteja atualizado (Bookworm ou posterior); insira o seguinte comando para atualizar o firmware do RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Role para baixo até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Role para baixo até `Bootloader Version` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

E, por fim, escolha `Latest` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecione `No` aqui - você quer o bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

E saia da ferramenta selecionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Se for solicitado para reiniciar, selecione `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

**Passo 2**：Clique em **Applications** =>**Accessories** =>**SD Card Copier** na tela principal, execute o programa **SD Card Copier** e copie o OS para o SSD NVME como mostrado na figura abaixo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurando o Raspberry Pi para inicializar a partir do SSD

Se você tiver fácil acesso ao slot do cartão SD, pode desligar o seu Pi, remover o cartão SD e (se tudo estiver funcionando como esperado) ele deverá inicializar automaticamente a partir do SSD na próxima vez que você ligá-lo. Se quiser deixar o cartão SD no lugar e ainda assim inicializar a partir do SSD, você precisa alterar a ordem de boot.

**Passo 1**: Insira o seguinte comando:

```shell
  sudo raspi-config
```

Role para baixo até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Passo 2**: Role para baixo até `Boot Order` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Passo 3**: Escolha `NVMe/USB Boot` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

A configuração será confirmada. Pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Passo 4**: Volte para a primeira tela selecionando `Back` ou pressionando a tecla Esc. Em seguida, navegue até Finish usando a tecla de seta para a direita.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Será perguntado se você deseja reiniciar agora. Clique em `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

## Gravar o Ubuntu no SSD (NVMe via USB)

### Primeiro: Atualizar o EEPROM com o cartão SD

Siga [Update EEPROM](#Update-EEPROM) para atualizar o EEPROM.

O SSD usado neste dispositivo é um SSD NVMe conectado por meio de uma ponte USB 3.0. Durante a inicialização, o firmware do Raspberry Pi o detecta como um dispositivo de armazenamento USB, portanto, a prioridade de inicialização correta é uma ordem de boot por USB em vez de uma ordem de boot apenas NVMe nativa. Para definir o SSD como o dispositivo de inicialização de maior prioridade, use o seguinte comando:

```
sudo rpi-eeprom-config --edit
```

Em seguida, altere o rpi-eeprom-config como abaixo:

```
BOOT_UART=1
BOOT_ORDER=0xf14
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Use `Ctrl+X` e digite `y` para salvar o resultado. E o resultado é o seguinte:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/boot_from_usb.jpg" alt="pir" width="700" height="auto" /></div>

### Segundo: Gravar o Ubuntu no SSD

Abra o Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Escolha o sistema Ubuntu:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

Por fim, clique em `Next` e aguarde a conclusão do processo de gravação.

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
