---
description: O reComputer Industrial R22xx é um NVR industrial com IA integrado, baseado no Raspberry Pi CM5 equipado com um acelerador de IA Hailo-8 oferecendo até 26 TOPS. Com 4 portas Ethernet Gigabit com suporte PoE PSE mais uma porta Ethernet Gigabit adicional, ele possibilita transmissão de vídeo de alta largura de banda e implantação PoE simplificada para câmeras IP. Oferece ricas E/S industriais, conectividade sem fio flexível, design térmico sem ventoinha e ampla faixa de temperatura de operação de –20 °C a 50 °C, garantindo análises de vídeo com IA confiáveis e operação contínua e estável em cenários exigentes.
title: reComputer Industrial R22xx Gravar OS
keywords:
  - Controlador de Borda
  - Raspberry pi
  - Controlador de Borda
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg
slug: /recomputer_industrial_r22xx_flash_os
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2025-01-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_industrial_r22xx_flash_os/
---


# reComputer Industrial R22xx Gravar OS

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Compre Agora 🖱️</font></span></strong>
    </a>
</div>

A série reComputer Industrial R22xx é alimentada por Raspberry Pi CM5 e acelerador de IA Hailo-8; este sistema compacto de borda com IA fornece 26 TOPS para processamento de visão multicanal em tempo real. Com uma CPU Cortex-A76 quad-core, até 16GB de RAM, 64GB eMMC e uma interface versátil, garante integração perfeita em aplicações industriais de IA.

## Requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer Industrial R22xx x 1
- Computador Host (Windows/Mac/Linux) x 1
- Cabo Ethernet x 1
- Adaptador de energia (12V-24V) BYO

## Requisitos de Software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Gravar OS

### Para computador host Windows

- **Passo 1.** Clique no link abaixo para baixar o [arquivo de imagem](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file) do dispositivo
Selecione o último e clique no link de data para fazer o download:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-1.png" style={{width:800, height:'auto'}}/></div>

- **Passo 2.** Baixe o software **Raspberry Pi Imager** a partir **[daqui](https://www.raspberrypi.org/software/)**

- **Passo 3.** Abra o software Raspberry Pi Imager

- a.Faça o download do instalador rpiboot clicando aqui para instalar os drivers necessários e a ferramenta de boot.
- b.Conecte o reComputer R2200 ao PC via cabo USB Type-C.
- c.O Windows agora encontrará o hardware e instalará os drivers necessários.
- d.Procure pela ferramenta rpiboot que instalamos antes e abra-a.
- e.Abra o explorador de arquivos e você verá o eMMC do Compute Module 5 mostrado como um dispositivo de armazenamento em massa USB.
- f.Baixe o software Raspberry Pi Imager em https://www.raspberrypi.org/software/ .
- g.Abra o software Raspberry Pi Imager.


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-2.png" alt="pir" width="800" height="auto"/></p>

- **Passo 4.** Selecione o arquivo de imagem baixado.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-3.png" alt="pir" width="800" height="auto"/></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-4.png" alt="pir" width="800" height="auto"/></p>

- **Passo 5.** Na aba Storage, selecione o dispositivo de armazenamento no qual gravar a imagem. Selecione Next.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-5.png" alt="pir" width="800" height="auto"/></p>

- **Passo 6.** Raspberry Pi OS e alguns sistemas operacionais de terceiros suportam personalização. Se você estiver instalando um desses sistemas operacionais, pode usar o próximo conjunto de etapas no Imager para personalizá-lo. Estas etapas são opcionais e podem ser ignoradas escolhendo Skip customisation. Para mais instruções de configuração, consulte **[aqui](https://www.raspberrypi.com/documentation/computers/getting-started.html#advanced-options)**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-6.png" alt="pir" width="800" height="auto"/></p>

Continue gravando a imagem até que seja concluída com sucesso.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/3.1-7.png" alt="pir" width="800" height="auto"/></p>

Desconecte a porta USB-C, pressione o botão de boot novamente e desligue/ligue a alimentação. Se você conseguir fazer login no sistema normalmente, a imagem foi gravada com sucesso e pode ser usada normalmente.

### Para computador host MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com os seguintes passos.**
Abra um terminal e digite ```brew -V``` para verificar se você configurou corretamente o ambiente homebrew; você deverá ver a versão do ambiente homebrew que instalou.
:::

- **Passo 1.** Baixe e instale o aplicativo **Raspberry Pi Imager** visitando [este link](https://github.com/Seeed-Studio/pi-gen-expand/tree/main?tab=readme-ov-file)

- **Passo 2.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="800" height="auto"/></p>

- **Passo 3.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar wifi, definir configurações locais** e muito mais

- **Passo 4.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="800" height="auto"/></p>

**NOTA:** Você pode selecionar outro sistema operacional como **64-bit Ubuntu** navegando em **Other general purpose OS**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 5.** Clique em **CHOOSE STORAGE**

- **Passo 6.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="800" height="auto"/></p>

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="800" height="auto"/></p>

- **Passo 4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="800" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar wifi, definir configurações locais** e muito mais

- **Passo 5.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

**NOTA:** Você pode selecionar outro sistema operacional como **64-bit Ubuntu** navegando em **Other general purpose OS**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 6.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 7.** Finalmente, clique em **NEXT** e **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="800" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.
O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="800" height="auto"/></p>

## Inicializar a partir do NVME

### Atualizar EEPROM

*Este método funciona se você tiver um SSD e tiver inicializado o dispositivo com sucesso usando o eMMC. Certifique-se de que seu sistema seja o Raspberry Pi mais recente (Bookworm ou posterior) e que o firmware do seu RPi 5 esteja atualizado para 2023-12-06 (6 de dezembro) ou mais recente, caso contrário ele pode não reconhecer as configurações relacionadas ao NVME.*

**Passo 1**:Certifique-se de que seu sistema Raspberry Pi esteja atualizado (Bookworm ou posterior); insira o seguinte comando para atualizar o firmware do RPi 5:

```shell
  sudo apt update && sudo apt upgrade -y
  sudo rpi-eeprom-update  # If it is not post-December 2023 type the following into a terminal to start the configuration tool
  sudo raspi-config
```

Role para baixo até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="800" height="auto" /></div>

Role para baixo até `Bootloader Version` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="800" height="auto" /></div>

E finalmente escolha `Latest`, e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="800" height="auto" /></div>

Selecione `No` aqui - você quer o bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="800" height="auto" /></div>

E saia da ferramenta selecionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="800" height="auto" /></div>

Se for solicitado para reiniciar, selecione `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="800" height="auto" /></div>

**Passo 2**: Clique em **Applications** => **Accessories** => **SD Card Copier** na tela principal, execute o programa **SD Card Copier** e copie o sistema operacional para o SSD NVME como mostrado na figura abaixo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="800" height="auto" /></div>

### Configurando o Raspberry Pi para inicializar a partir do SSD NVMe

Se você tiver fácil acesso ao slot do cartão SD, pode desligar o seu Pi, ejetar o cartão SD e (se tudo estiver funcionando como esperado) ele deverá iniciar automaticamente a partir da sua unidade NVMe na próxima vez que ligá‑lo. Porém, se você quiser deixar o cartão SD onde está e ainda assim inicializar a partir do NVMe, será necessário alterar a ordem de boot.

**Passo 1**: Digite o seguinte comando:

```shell
  sudo raspi-config
```

Role para baixo até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="800" height="auto" /></div>

**Passo 2**: Role para baixo até `Boot Order` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="800" height="auto" /></div>

**Passo 3**: Escolha `NVMe/USB Boot` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="800" height="auto" /></div>

A configuração será confirmada. Pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="800" height="auto" /></div>

**Passo 4**: Volte para a primeira tela selecionando `Back` ou pressionando a tecla Esc. Em seguida, navegue até Finish usando a tecla de seta para a direita.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="800" height="auto" /></div>

Será perguntado se você deseja reiniciar agora. Clique em `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="800" height="auto" /></div>


## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
