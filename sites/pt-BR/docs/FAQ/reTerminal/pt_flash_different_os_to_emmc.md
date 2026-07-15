---
description: reTerminal-FAQ
title: Como gravar Raspberry Pi OS/ Ubuntu OS 64-bit ou outro sistema operacional na eMMC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /flash_different_os_to_emmc
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/flash_different_os_to_emmc/
---

<!-- ### Flash Raspberry Pi OS/ 64-bit Ubuntu OS or Other OS to eMMC -->

Podemos gravar **Raspberry Pi OS/ Ubuntu OS 64-bit ou outro sistema operacional** no **armazenamento eMMC** do CM4 no reTerminal. Depois que os drivers necessários forem instalados, você só precisa conectar a porta USB Type‑C do reTerminal ao seu PC, e ele será exibido como um drive externo. Comece removendo a tampa traseira do reTerminal.

## Etapas de Desmontagem de Hardware

- **Passo 1.** Remova as 4 tampas de borracha e abra a tampa traseira do reTerminal desparafusando os 4 parafusos abaixo delas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width="450" height="auto"/></p>

- **Passo 2.** Remova os 2 parafusos para desmontar o dissipador de calor

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/remove-screw-heatsink-2.jpg" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Desloque para baixo a **chave de modo de boot** de acordo com o diagrama abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki1/boot-switch-2.jpg" alt="pir" width="600" height="auto"/></p>

Agora vamos passar para a configuração de software. Siga as etapas de acordo com o seu sistema operacional desejado

## Configuração de Software

### Para Windows

- **Passo 1.** Baixe o **instalador de configuração do rpiboot** clicando **[neste link](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar os drivers necessários e a ferramenta de boot

- **Passo 2.** Conecte o reTerminal ao PC por meio de um cabo USB Type‑C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 3.** Procure pela ferramenta **rpiboot** que instalamos antes e abra-a

- **Passo 4.** Abra o **Explorador de arquivos** e você verá a eMMC do Compute Module 4 exibida como um **dispositivo de armazenamento em massa USB**

:::caution
Se você gravar **o Raspberry Pi OS que foi originalmente enviado com o reTerminal**, por favor volte para este [Wiki](/pt-br/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). <br/>
Caso contrário, prossiga com as etapas a seguir.
:::

- **Passo 5.** Baixe o software **Raspberry Pi Imager** acessando **[este link](https://www.raspberrypi.org/software/)**

- **Passo 6.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 7.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Opções avançadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações de localidade** e muito mais

- **Passo 8.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outros sistemas operacionais como **Ubuntu 64-bit** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 9.** Clique em **CHOOSE STORAGE** e selecione o drive eMMC conectado

- **Passo 10.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 11.** Coloque a **chave de modo de boot** de volta na posição original e monte novamente a carcaça do reTerminal

Agora você pode pular para **[aqui](/pt-br/log_rpios_use_ssh_over_wifi_ethernet)**

### Para MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com as etapas a seguir.**
Por favor, abra um terminal e digite ```brew -V``` para verificar se você configurou o ambiente homebrew corretamente; você deverá ver a versão do ambiente homebrew que instalou.
:::

- **Passo 1.** Clone o repositório **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 2.** Instale o **libusb**

```sh
brew install libusb
```

- **Passo 3.** Instale o **pkg-config**

```sh
brew install pkg-config
```

- **Passo 4.** Compile usando make

```sh
make
```

- **Passo 5.** Rode o binário

```sh
sudo ./rpiboot
```

- **Passo 6.** Conecte o reTerminal ao seu computador Mac por meio de um cabo USB Type‑C

:::caution
Se você gravar **o Raspberry Pi OS que foi originalmente enviado com o reTerminal**, por favor volte para este [Wiki](/pt-br/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal). <br/>
Caso contrário, prossiga com as etapas a seguir.
:::

- **Passo 7.** Baixe e instale o aplicativo **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

- **Passo 8.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 9.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Opções avançadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações de localidade** e muito mais

- **Passo 10.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar sistemas operacionais como **Ubuntu 64-bit** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 11.** Clique em **CHOOSE STORAGE** e selecione o drive eMMC conectado

- **Passo 12.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 13.** Coloque a **chave de modo de boot** de volta na posição original e monte novamente a carcaça do reTerminal

Agora você pode pular para **[aqui](#log-in-to-raspberry-pi-os-ubuntu-os-or-other-os-using-ssh-over-wi-fi-ethernet)**

### Para Linux

Usaremos o Git para obter o código-fonte do **rpiboot**, então certifique‑se de que o Git esteja instalado

- **Passo 1.** Abra uma janela de **Terminal** e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Passo 2.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Passo 3.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia e **hh** e **mm** são, respectivamente, as horas e os minutos.

- **Passo 4.** Clone o repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 5.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 6.** Execute a ferramenta usbboot e ela aguardará uma conexão

```sh
sudo ./rpiboot
```

- **Passo 7.** Conecte o reTerminal ao PC por meio de um cabo USB Type‑C

:::caution
Se você gravar **o Raspberry Pi OS que foi originalmente enviado com o reTerminal**, por favor volte para este [Wiki](/pt-br/reterminal_black_screen/#flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal).<br/>
Caso contrário, prossiga com as etapas a seguir.
:::

- **Passo 8.** Baixe o software **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

- **Passo 9.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 10.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Opções avançadas**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações de localidade** e muito mais

- **Passo 11.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar sistemas operacionais como **Ubuntu 64-bit** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 12.** Clique em **CHOOSE STORAGE** e selecione o drive eMMC conectado

- **Passo 13.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 14.** Coloque a **chave de modo de boot** de volta na posição original e monte novamente a carcaça do reTerminal
