---
description: reComputer R1000 Gravar OS
title: reComputer R1000 Gravar OS
keywords:
  - Edge
  - reComputer R1000
  - Flash OS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01_1.webp
slug: /recomputer_r1000_flash_OS
sku: 113991274,E24010521
last_update:
  date: 10/25/2024
  author: Parker Hu
createdAt: '2023-04-24'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_flash_OS/
---
# reComputer R1000 Raspbian OS para eMMC

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

<br />

O controlador edge IoT reComputer R1000 é construído sobre a plataforma de alto desempenho Raspberry Pi CM4, com um processador A72 quad-core com suporte máximo de 8GB de RAM e 32GB de eMMC. Equipado com duas interfaces Ethernet que podem ser configuradas de forma flexível, também inclui 3 canais RS485 isolados que suportam os protocolos BACnet, Modbus RTU, Modbus TCP/IP e KNX.
Com robustas capacidades de comunicação em rede IoT, a série R1000 suporta múltiplas opções de comunicação sem fio, incluindo 4G, LoRa®, Wi-Fi/BLE, permitindo configurações flexíveis para atuar como gateways sem fio correspondentes. Este controlador é ideal para gerenciamento remoto de dispositivos, gerenciamento de energia e vários outros cenários no campo de edifícios inteligentes.

## Requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer R1000 x 1
- Computador Host (Windows/Mac/Linux) x 1
- Cabo Ethernet x 1
- Adaptador de energia (12V-24V) BYO
- Cabo USB Tipo-C x 1

## Requisitos de Software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Inicializar a partir de NVME

### Gravar o sistema operacional no NVME

Consulte este [link](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_flash_OS/#steps-for-flashing-raspbian-os) e, em seguida, insira-o no slot M.2.

### Inicializar a partir da eMMC e atualizar o EEPROM

Use um comando como o abaixo para abrir o arquivo

```
sudo nano /etc/default/rpi-eeprom-update
```

Modifique como mostrado abaixo:

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```

Use `Ctrl`+`x` para salvar o arquivo.

Use um comando como o abaixo para abrir o arquivo

```
sudo nano /boot/firmware/config.txt
```

Modifique a parte `[cm4]` como mostrado abaixo:

```
[cm4]
dtparam=spi=on
dtoverlay=audremap
dtoverlay=spi-gpio40-45
```

Use `Ctrl`+`x` para salvar o arquivo e reinicie a máquina com o comando:

```
sudo reboot
```

Em seguida, atualize o EEPROM usando um comando como o abaixo:

```
sudo rpi-eeprom-update -a
```

A saída é como abaixo:

```
recomputer@reComputer-R100x:~ $ sudo rpi-eeprom-update -a
BOOTLOADER: up to date
   CURRENT: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
    LATEST: Tue Feb 11 05:00:13 PM UTC 2025 (1739293213)
   RELEASE: latest (/usr/lib/firmware/raspberrypi/bootloader-2711/latest)
            Use raspi-config to change the release.

  VL805_FW: Using bootloader EEPROM
     VL805: up to date
   CURRENT: 
    LATEST: 
```

### Gravar o EEPROM mais recente e modificar a ordem de boot

Use um comando como o abaixo para abrir o raspi-config:

```
sudo raspi-config 
```

Role até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Role até `Bootloader Version` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

E finalmente escolha `Latest` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecione `No` aqui - você quer o bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

E saia da ferramenta selecionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Se for solicitado para reiniciar, selecione `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

Em seguida, modifique a ordem de boot com um comando como o abaixo:

```
sudo -E rpi-eeprom-config --edit
```

Modifique o arquivo como abaixo:

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=1
POWER_OFF_ON_HALT=0
BOOT_ORDER=0xf416
```

Use `Ctrl`+`x` para salvar o arquivo e depois reinicie sua máquina.

## Etapas para Gravar o Raspbian OS

> **Nota:** A imagem de sistema mais recente empacotada pela Seeed, incluindo os drivers apropriados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Passo 1.** Verifique se a chave está definida para `Flash mode` de acordo com o diagrama abaixo:

<div class="table-center">

| Posição da chave                                              | Modo        | Descrição          | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | ------------------ | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Inicializar da eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Inicializar do USB  | High      |

</div>

- **Passo 2.** Use o cabo de dados USB Tipo-C para conectar à porta Tipo-C no reComputer R1000, como mostrado na imagem abaixo,

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/33.png" /></div>

- **Passo 3.** Conecte o cabo de alimentação da fonte de energia à porta de alimentação do reComputer R1000.

<div style={{ textAlign: 'left', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas AC e DC. Isso garante que, independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados, o circuito não será danificado. Ao usar um retificador em ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade DC de entrada, proporcionando uma proteção eficaz contra polaridade reversa.
:::

Agora vamos passar para a configuração de software no seu computador host. Siga as etapas de acordo com o sistema operacional desejado

### Para Windows

- **Passo 1.** Baixe o **instalador de configuração do rpiboot** clicando **[aqui](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar os drivers necessários e a ferramenta de boot

- **Passo 2.** Conecte o reComputer R1000 ao PC via cabo USB Tipo-C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 3.** Procure pela ferramenta **rpiboot** que instalamos antes e abra-a

- **Passo 4.** Abra o **explorador de arquivos** e você verá a eMMC do Computer Module 4 exibida como um **dispositivo de armazenamento em massa USB**

- **Passo 5.** Baixe o software **Raspberry Pi Imager** **[aqui](https://www.raspberrypi.org/software/)**

- **Passo 6.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 7.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar wiFi, definir configurações de localidade** e mais

:::note
O sistema tem um nome de usuário e senha predefinidos. Defina o nome de usuário padrão como "**recomputer**" e a senha padrão como "**12345678**" ao fazer login. Se você definir credenciais diferentes e encontrar problemas, por favor grave novamente o sistema operacional se você comprou o primeiro lote do reComputer R1000.
:::

- **Passo 8.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outro sistema operacional, como **Ubuntu 64-bit**, navegando em **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 9.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 10.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 11.** Mude a **chave Boot Mode** de volta para a posição **Normal mode**

Agora você pode pular para **[aqui](#install-drivers)**

### Para MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com as etapas a seguir.**
Abra um terminal e digite ```brew -v``` para verificar se você configurou corretamente o ambiente homebrew; você deverá ver a versão do ambiente homebrew que instalou.
:::

- **Passo 1.** Clone o repositório **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 2.** Instale **libusb**

```sh
brew install libusb
```

- **Passo 3.** Instale **pkg-config**

```sh
brew install pkg-config
```

- **Passo 4.** Compile usando make

```sh
make
```

- **Passo 5.** Execute o binário

```sh
sudo ./rpiboot
```

- **Passo 6.** Conecte o reComputer R1000 ao seu computador Mac via cabo USB Tipo-C

- **Passo 7.** Baixe e instale o aplicativo **Raspberry Pi Imager** visitando [este link](https://www.raspberrypi.org/software/)

- **Passo 8.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 9.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar Wi-Fi, definir configurações de localidade** e muito mais
:::note
O sistema já possui um nome de usuário e senha predefinidos. Defina o nome de usuário padrão como "**recomputer**" e a senha padrão como "**12345678**" ao fazer login. Se você definir credenciais diferentes e encontrar problemas, por favor grave o sistema novamente se você comprou o primeiro lote do reComputer R1000.
:::

- **Passo 10.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outros sistemas operacionais como **Ubuntu 64-bit** navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 11.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 12.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 13.** Mova o **Boot Mode switch** de volta para a posição de **Normal mode**

Agora você pode pular para **[aqui](#instalar-drivers)**

### Para Linux

Usaremos o Git para obter o código-fonte do **rpiboot**, então certifique-se de que o Git esteja instalado

- **Passo 1.** Abra uma janela do **Terminal** e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Passo 2.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git pkg-config make gcc libusb-1.0-0-dev
```

- **Passo 3.** O Git pode produzir um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia, e **hh** e **mm** são horas e minutos respectivamente.

- **Passo 4.** Faça o clone do repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 5.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 6.** Conecte o reComputer R1000 ao PC via cabo USB Tipo-C

- **Passo 7.** Execute a ferramenta usbboot e ela aguardará uma conexão

```sh
sudo ./rpiboot
```

O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 8.** Baixar o snap

```sh
sudo apt install snap
```

- **Passo 9.** Baixar o **rpi-imager**

```sh
snap install rpi-imager
```

- **Passo 10.** Abra o software Raspberry Pi Imager

```sh
rpi-imager
```

O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 11.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

Defina um hostname, defina uma senha, configure Wi-Fi, defina configurações de localidade

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilite SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar Wi-Fi, definir configurações de localidade** e muito mais
:::note
O sistema já possui um nome de usuário e senha predefinidos. Defina o nome de usuário padrão como "**recomputer**" e a senha padrão como "**12345678**" ao fazer login. Se você definir credenciais diferentes e encontrar problemas, por favor grave o sistema novamente se você comprou o primeiro lote do reComputer R1000.
:::

- **Passo 11.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Você pode selecionar outros sistemas operacionais como **Ubuntu 64-bit** navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntun for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 12.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 13.** Por fim, clique em **NEXT** e **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.
O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Passo 14.** Mova o **Boot Mode switch** de volta para a posição de **Normal mode**

## Instalar Drivers

### Acessar o reComputer R1000 via SSH

:::note

Os passos a seguir exigem algum conhecimento básico da linha de comando do Linux. Prepare uma xícara de café e fique pronto.

:::

Seguindo os passos de gravação do sistema acima, o reComputer R1000 deve ter o SSH habilitado com o hostname `raspberrypi.local`.

Agora conecte o cabo Ethernet ao reComputer R1000 e a um roteador que esteja na mesma rede que o seu computador host.

:::tip

Para testar se o seu reComputer R1000 está na mesma rede que o computador host, você pode usar `ping raspberrypi.local`

se você vir a seguinte saída após o comando ping, isso significa que ambos os dispositivos estão na mesma rede:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Passo 1.** Abra o **Command Prompt** e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **Passo 2.** Digite **yes** para o prompt

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Passo 3.** Insira a senha como a seguir

```sh
raspberry
```

- **Passo 4.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Passo 1.** Abra o **Terminal** no computador e digite o seguinte

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Passo 2.** Digite **yes** para a seguinte mensagem

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Passo 3.** Quando for solicitada a senha, digite o seguinte

```sh
# password for user
raspberry
```

- **Passo 4.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar drivers do reComputer R1000 após gravar novo Raspbian OS

O reComputer R1000 vem com os drivers necessários pré-instalados de fábrica, então você não precisa instalar drivers adicionais. No entanto, se você gravar um novo sistema operacional por conta própria, precisará instalar os drivers necessários separadamente.

:::tip

**Para instalar o driver para sistema operacional de 32 bits, siga cuidadosamente os passos abaixo:**

O sistema operacional pré-instalado no reComputer R1000 é de 64 bits; se você quiser instalar um sistema operacional de 32 bits, use o método a seguir para instalar os drivers DTS.

Siga o passo [**Acessar o reComputer R1000 via SSH**](#acessar-recomputer-r1000-via-ssh) e então insira o seguinte comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Em seguida, continue o processo de [**Instalar drivers após gravar novo Raspbian OS**](#instalar-recomputer-r1000-drivers-apos-flashing-new-raspbian-os)

:::

- **Passo 1.** Faça o clone do seguinte repositório no shell SSH em que você se conectou ao reComputer R1000 nos passos acima

```sh
sudo apt install git -y
git clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays
```

- **Passo 2.** Entre no repositório

```sh
cd seeed-linux-dtoverlays
```

- **Passo 3.** Digite o seguinte para instalar os drivers

```sh
sudo ./scripts/reTerminal.sh --device reComputer-R100x
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Passo 4.** Reinicie o reComputer R1000

```sh
sudo reboot
```

Este processo garantirá que seus drivers estejam atualizados antes de atualizar o firmware.
:::tip
<div style={{ color: 'red', fontWeight: 'bold' }}>
  Nota: Para o reComputer R1000 V1.0, é necessário alterar o arquivo /boot/firmware/config.txt após reiniciar e inserir o seguinte comando:
</div>
:::

```shell
 sudo nano /boot/firmware/config.txt
```

Modifique o conteúdo final do arquivo para:

```shell
  enable_uart=1
  dtoverlay=dwc2,dr_mode=host
  dtoverlay=vc4-kms-v3d
  dtoverlay=reComputer-R100x,uart2
```

Em seguida, reinicie:

```shell
  sudo reboot
```

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
