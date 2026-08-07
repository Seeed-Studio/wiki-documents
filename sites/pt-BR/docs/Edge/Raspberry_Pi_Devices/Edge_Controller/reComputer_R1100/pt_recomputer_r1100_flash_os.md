---
description: reComputer R1100 Gravar SO
title: reComputer R1100 Gravar SO
keywords:
  - Edge
  - reComputer R1100
  - Flash OS
image: https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.webp
slug: /recomputer_r1100_flash_os
last_update:
  date: 3/3/2025
  author: Kasun Thushara
createdAt: '2025-03-04'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1100_flash_os/
---


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

O reComputer R1100, equipado com o Raspberry Pi CM4, é um gateway IoT de borda versátil com recursos de IA. Ele possui uma gama abrangente de interfaces industriais, incluindo **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI e 2x DO**, além de opções flexíveis de conectividade sem fio, como **4G, LoRa® e Wi‑Fi/BLE**. Esses recursos o tornam uma escolha ideal para diversas aplicações industriais.
A série reComputer R1100 é amplamente utilizada em aplicações de IoT, incluindo **aquisição de dados e monitoramento de processos, controle de automação e robótica, manufatura inteligente e comunicação e redes industriais**. Seu tamanho compacto, flexibilidade, baixo custo e programabilidade fornecem forte suporte para **automação, sistemas de IoT e além**.

## Requisitos de Hardware

Você precisa preparar o seguinte hardware

- reComputer R1100 x 1
- Computador host (Windows/Mac/Linux) x 1
- Cabo Ethernet x 1
- Adaptador de energia (12V-24V) BYO
- Cabo USB Type-C x 1

## Requisitos de Software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Inicializar a partir do NVME

### Gravar o SO no NVME

Consulte este [link](https://wiki.seeedstudio.com/pt-br/recomputer_r1100_assembly_guide/#installing-an-ssd) e, em seguida, insira-o no slot M.2.

### Inicializar a partir do eMMC e atualizar o EEPROM

Use um comando como abaixo para abrir o arquivo

```
sudo nano /etc/default/rpi-eeprom-update
```

Modifique conforme mostrado abaixo:

```
FIRMWARE_RELEASE_STATUS="latest"
RPI_EEPROM_USE_FLASHROM=1
CM4_ENABLE_RPI_EEPROM_UPDATE=1
```

Use `Ctrl`+`x` para salvar o arquivo.

Use um comando como abaixo para abrir o arquivo

```
sudo nano /boot/firmware/config.txt
```

Modifique a parte `[cm4]` conforme mostrado abaixo:

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

Em seguida, atualize o EEPROM usando um comando como abaixo:

```
sudo rpi-eeprom-update -a
```

A saída será como abaixo:

```
recomputer@reComputer-R110x:~ $ sudo rpi-eeprom-update -a
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

Use um comando como abaixo para abrir o raspi-config:

```
sudo raspi-config 
```

Role até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_1.png" alt="pir" width="700" height="auto" /></div>

Role até `Bootloader Version` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_2.png" alt="pir" width="700" height="auto" /></div>

E, por fim, escolha `Latest` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_3.png" alt="pir" width="700" height="auto" /></div>

Selecione `No` aqui – você quer o bootloader `latest`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_4.png" alt="pir" width="700" height="auto" /></div>

E saia da ferramenta selecionando `Finish`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_5.png" alt="pir" width="700" height="auto" /></div>

Se for solicitado para reiniciar, selecione `Yes`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/g_6.png" alt="pir" width="700" height="auto" /></div>

Em seguida, modifique a ordem de boot com um comando como abaixo:

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

Use `Ctrl`+`x` para salvar o arquivo e, em seguida, reinicie sua máquina.

## Etapas para Gravar o Raspbian OS

- **Passo 1.** Certifique-se de que o switch esteja definido para `Flash mode` de acordo com o diagrama abaixo:

<div class="table-center">

| Posição do switch                                            | Modo        | Descrição      | nRPI-BOOT |
| ------------------------------------------------------------ | ----------- | -------------- | --------- |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png" alt="image" width="80"/> | Normal mode | Inicializar do eMMC | Low       |
| <img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png" alt="image" width="80"/>  | Flash mode  | Inicializar do USB  | High      |

</div>

- **Passo 2.** Use o cabo de dados USB Type-C para conectar à porta Type-C do reComputer R1100, como mostrado na imagem abaixo,

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/R1100/r11_usb.jpg"/></div>

- **Passo 3.** Conecte o cabo de alimentação da fonte de energia à porta de alimentação do reComputer R1100.

<div style={{ textAlign: 'center', marginLeft: '40px' }}>
    <img
        width="100"
        src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig18.png"
        style={{ transform: 'rotate(90deg)' }}
    />
</div>

<br></br>

- **Passo 4.** Clique [aqui](https://github.com/Seeed-Studio/pi-gen-expand) para baixar a imagem oficial mais recente adaptada para dispositivos reComputer R1100 da Seeed, que já vem com os drivers correspondentes pré-instalados.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/download_preferredOS.png" alt="pir" width="600" height="auto"/></p>

:::note
A solução de alimentação utiliza um diodo retificador de ponte para proteção contra polaridade reversa e é compatível com entradas AC e DC. Isso garante que, independentemente de como os terminais positivo e negativo da fonte de alimentação sejam conectados, o circuito não será danificado. Ao usar um retificador de ponte, a polaridade da tensão de saída permanece fixa, independentemente da polaridade DC de entrada, proporcionando proteção eficaz contra polaridade reversa.
:::

Agora vamos passar para a configuração de software no seu computador host. Siga as etapas de acordo com o sistema operacional desejado

### Para Windows

- **Passo 1.** Baixe o **rpiboot setup installer** clicando **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar os drivers necessários e a ferramenta de boot

- **Passo 2.** Conecte o reComputer R1100 ao PC via cabo USB Type-C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 3.** Procure pela ferramenta **rpiboot** que instalamos antes e abra-a

- **Passo 4.** Abra o **explorador de arquivos** e você verá o eMMC do Computer Module 4 exibido como um **dispositivo de armazenamento em massa USB**

- **Passo 5.** ** Clique **[here](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** para baixar diretamente a versão para Windows do Raspberry Pi Imager 2.0.7 (usado no procedimento a seguir), ou visite o **[site oficial](https://www.raspberrypi.com/software/)** para selecionar a versão apropriada para o seu sistema.

- **Passo 6.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar Wi‑Fi, definir configurações de localidade** e muito mais

:::note
O sistema possui um nome de usuário e senha predefinidos. Defina o nome de usuário padrão como "**recomputer**" e a senha padrão como "**12345678**" ao fazer login. Se você definir credenciais diferentes e encontrar problemas, por favor, regrave o SO se você comprou o primeiro lote do reComputer R1100.
:::

- **Passo 7.** Clique em "**OS**" e selecione **"Use custom"**, depois selecione o arquivo de imagem que você acabou de baixar na janela pop-up.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Alternativamente, você pode selecionar outro SO, como **Ubuntu 64‑bit**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntu para Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 8.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/select_device.png" alt="pir" width="600" height="auto"/></p>

- **Passo 9.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-updata/Raspberry Pi Devices/Edge Controller/reComputer R1100/reComputer R1100 Flash OS/write.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 10.** Coloque o **switch Boot Mode** de volta na posição **Normal mode**

Agora você pode pular para **[here](#install-drivers)** para acessar o reComputer R1100 via SSH

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

- **Passo 5.** Execute o binário

```sh
sudo ./rpiboot
```

- **Passo 6.** Conecte o reComputer R1100 ao seu computador Mac via cabo USB Type-C

- **Passo 7.** Baixe e instale o aplicativo **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

- **Passo 8.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 9.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi-Fi, definir configurações de localidade** e muito mais
:::note
O sistema já possui um nome de usuário e senha predefinidos. Defina o nome de usuário padrão como "**recomputer**" e a senha padrão como "**12345678**" ao fazer login. Se você definir credenciais diferentes e encontrar problemas, por favor regrave o sistema operacional se você comprou o primeiro lote de reComputer R1100.
:::

- **Passo 10.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outros sistemas operacionais, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 11.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 12.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 13.** Coloque o **Boot Mode switch** de volta na posição de **Normal mode**

Agora você pode pular para **[aqui](#install-drivers)** para acessar o reComputer R1100 via SSH

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

- **Passo 3.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia, e **hh** e **mm** são, respectivamente, horas e minutos.

- **Passo 4.** Clone o repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 5.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 6.** Conecte o reComputer R1100 ao PC via cabo USB Type-C

- **Passo 7.** Execute a ferramenta usbboot e ela aguardará uma conexão

```sh
sudo ./rpiboot
```

O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 8.** Baixe o snap

```sh
sudo apt install snap
```

- **Passo 9.** Baixe o **rpi-imager**

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

Defina um hostname, defina uma senha, configure o Wi-Fi, defina configurações de localidade

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilite o SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi-Fi, definir configurações de localidade** e muito mais
:::note
O sistema já possui um nome de usuário e senha predefinidos. Defina o nome de usuário padrão como "**recomputer**" e a senha padrão como "**12345678**" ao fazer login. Se você definir credenciais diferentes e encontrar problemas, por favor regrave o sistema operacional se você comprou o primeiro lote de reComputer R1100.
:::

- **Passo 11.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Você pode selecionar outros sistemas operacionais, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntu for Raspberry Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 12.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 13.** Por fim, clique em **NEXT** e **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.
O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Passo 14.** Coloque o **Boot Mode switch** de volta na posição de **Normal mode**

## Instalar drivers

### Acessar o reComputer R1100 via SSH

:::note

Os passos a seguir exigem algum conhecimento básico de linha de comando Linux. Por favor, prepare uma xícara de café e fique pronto.

:::

Seguindo os passos de gravação do sistema operacional acima, o reComputer R1100 deve ter o SSH habilitado com o hostname `raspberrypi.local`.

Agora conecte o cabo Ethernet ao reComputer R1100 e a um roteador que esteja na mesma rede que o seu computador host.

:::tip

Para testar se o seu reComputer R1100 está na mesma rede que o computador host, você pode usar `ping raspberrypi.local`

se você vir a seguinte saída após o comando ping, isso significa que ambos os dispositivos estão na mesma rede:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Passo 1.** Abra o **Command Prompt** e digite o seguinte

```sh
ssh <your username>@raspberrypi.local
```
Se você estiver usando a imagem oficial pré-compilada da Seeed fornecida na seção de criação do cartão acima, o nome de usuário é **recomputer** e a senha é **12345678**.

```sh
ssh reComputer@raspberrypi.local
```

- **Passo 2.** Digite **yes** quando solicitado

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Passo 3.** Insira a senha da seguinte forma

```sh
12345678
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

### Instalar drivers do reComputer R1100 após gravar um novo Raspbian OS

O reComputer R1100 vem com os drivers necessários pré-instalados de fábrica, então você não precisa instalar drivers adicionais. No entanto, se você gravar um novo sistema operacional por conta própria, precisará instalar os drivers necessários separadamente.

:::tip

**Instalar driver para sistema operacional de 32 bits, por favor siga cuidadosamente os passos abaixo:**

O sistema operacional pré-instalado no reComputer R1100 é de 64 bits; se você desejar instalar um sistema operacional de 32 bits, use o seguinte método para instalar os drivers DTS.

Por favor, siga o passo [**Acessar o reComputer R1100 via SSH**](#access-recomputer-r1100-via-ssh) e, em seguida, insira o seguinte comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Depois continue o processo de [**Instalar drivers após gravar um novo Raspbian OS**](#install-recomputer-r1100-drivers-after-flashing-new-raspbian-os)

:::

- **Passo 1.** Clone o seguinte repositório no shell ssh com o qual você se conectou ao reComputer R1100 nos passos acima

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
sudo ./scripts/reTerminal.sh --device reComputer-R110x
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Passo 4.** Reinicie o reComputer R1100

```sh
sudo reboot
```

Este processo garantirá que seus drivers estejam atualizados antes de atualizar o firmware.

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
