---
description: reTerminal DM Gravar OS
title: reTerminal DM Gravar OS
keywords:
  - Edge
  - reTerminal-DM
  - Flash OS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reterminal-dm-flash-OS
sku: 114070201,114070221,E23010420,114070262
last_update:
  date: 04/23/2023
  author: Peter Pan
createdAt: '2023-04-24'
updatedAt: '2026-05-29'
url: https://wiki.seeedstudio.com/pt-br/reterminal-dm-flash-OS/
---
# Gravar Raspbian OS na eMMC do reTerminal DM

<p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg" alt="pir" width="600" height="auto"/></p>

O reTerminal DM é uma IHM industrial open-source de 10,1" – um Dispositivo Mestre Integrado para unificar o fluxo de dados e gerenciar o dispositivo local.

Baseado no Raspberry Pi CM4 e, como um dispositivo tudo‑em‑um de Panel PC, IHM, CLP e gateway IIoT, o reTerminal DM é uma nova geração de hub interativo de sensoriamento com uma tela grande de grau industrial IP65.

Ele é equipado com rica escalabilidade e conectividade híbrida, suportando barramento CAN, RS485, RS232, porta Ethernet Gigabit e outras interfaces, bem como poderosos recursos de comunicação sem fio, como 4G, LoRa®, WiFi e BLE.

> \*Os módulos 4G e LoRa® não acompanham o reTerminal DM por padrão, compre os módulos relevantes de acordo com a necessidade, para
> [4G bundle](https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

:::note
O Sensecraft Edge OS pode ser baixado a partir de [**Here**](https://sourceforge.net/projects/reterminal-dm/files/Sensecraft-edge-OS-V0.3.10.tar.gz/download), observe que este Sensecraft Edge OS é atualmente desenvolvido com base no reTerminal DM e funciona apenas com a versão de Produção do reTerminal DM
:::

## Requisitos de hardware

Você precisa preparar o seguinte hardware

- reTerminal DM x 1
- Computador host (Windows/Mac/Linux) x 1
- Cabo Ethernet x 1
- Adaptador de energia (12V-24V) BYO
- Cabo USB Type-C x 1

## Requisitos de software

- [usbboot tool](https://github.com/raspberrypi/usbboot)
- [Raspberry Pi Imager APP](https://www.raspberrypi.com/software/)

## Etapas para gravar o Raspbian OS

> **Nota:** A imagem de sistema mais recente empacotada pela Seeed, incluindo os drivers apropriados: [pi-gen-expand](https://github.com/Seeed-Studio/pi-gen-expand)

- **Passo 1.** Acione o `boot mode switch` localizado próximo à porta USB Type-C, certifique‑se de que a chave esteja ajustada para `disable eMMC boot mode` de acordo com o diagrama abaixo:

 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/flash.png" alt="pir" width="800" height="auto"/></p>

- **Passo 2.** Use o cabo de dados USB Type-C para conectar à porta Type-C no reTerminal DM, como mostrado na imagem acima,

- **Passo 3.** Conecte o cabo de alimentação da fonte de energia à porta de alimentação do reTerminal DM.

:::danger

Certifique‑se de que você conectou o cabo de alimentação com a polaridade correta.

:::

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/power.png" alt="pir" width="800" height="auto"/></p>

Agora vamos passar para a configuração de software no seu computador host. Siga as etapas de acordo com o sistema operacional desejado

### Para Windows

- **Passo 1.** Baixe o **rpiboot setup installer** clicando **[here](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe)** para instalar os drivers necessários e a ferramenta de boot

- **Passo 2.** Conecte o reTerminal DM ao PC via cabo USB Type-C

O Windows agora encontrará o hardware e instalará os drivers necessários

- **Passo 3.** Procure pela ferramenta **rpiboot** que instalamos antes e abra‑a

- **Passo 4.** Abra o **explorador de arquivos** e você verá a eMMC do Compute Module 4 exibida como um **dispositivo de armazenamento em massa USB**

- **Passo 5.** Baixe o software **Raspberry Pi Imager** a partir **[here](https://www.raspberrypi.org/software/)**

- **Passo 6.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 7.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar wiFi, definir configurações de localidade** e muito mais

- **Passo 8.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outros sistemas operacionais, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 9.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 10.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 11.** Acione o **Boot Mode switch** de volta para a posição original

Agora você pode pular para **[here](#instalar-drivers)**

:::note

Depois que as etapas acima forem concluídas e você tiver reaplicado a energia ao reTerminal DM, o LED de energia deverá acender na cor amarela e o LED ACT deverá piscar na cor verde, mas a tela ficará em branco e sem luz de fundo. Não entre em pânico, você só precisa seguir as etapas de [install drivers](#instalar-drivers) para reviver a tela.

:::

### Para MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com as etapas a seguir.**
Abra um terminal e digite ```brew -V``` para verificar se você configurou corretamente o ambiente homebrew; você deverá ver a versão do ambiente homebrew que instalou.
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

- **Passo 6.** Conecte o reTerminal ao seu computador Mac via cabo USB Type-C

- **Passo 7.** Baixe e instale o aplicativo **Raspberry Pi Imager** visitando [this link](https://www.raspberrypi.org/software/)

- **Passo 8.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 9.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar wifi, definir configurações de localidade** e muito mais

- **Passo 10.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar sistemas operacionais como **64-bit Ubuntu** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 11.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 12.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 13.** Acione o **Boot Mode switch** de volta para a posição original

Agora você pode pular para **[here](#instalar-drivers)**

:::note

Depois que as etapas acima forem concluídas e você tiver reaplicado a energia ao reTerminal DM, você deverá perceber que o LED de energia acende na cor amarela e o LED ACT pisca na cor verde, mas a tela fica em branco e sem luz de fundo. Não entre em pânico, você só precisa seguir as etapas de [install drivers](#instalar-drivers) para reviver a tela.

:::

### Para Linux

Usaremos o Git para obter o código‑fonte do **rpiboot**, portanto, certifique‑se de que o Git esteja instalado

- **Passo 1.** Abra uma janela de **Terminal** e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt-get update
```

- **Passo 2.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git libusb-1.0-0-dev pkg-config build-essential
```

- **Passo 3.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia e **hh** e **mm** são, respectivamente, horas e minutos.

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

O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/result_of_command.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 7.** Conecte o reTerminal ao PC via cabo USB Type-C

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
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="600" height="auto"/></p>

- **Passo 11.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

Defina um hostname, defina uma senha, configure o Wi‑Fi, defina as configurações de localidade

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/cltaltx.png" alt="pir" width="600" height="auto"/></p>

Habilite SSH

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/enable_ssh.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir as configurações de localidade** e muito mais

- **Passo 11.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar sistemas como **64-bit Ubuntu** navegando até **Other general purpose OS**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg" alt="pir" width="1000" height="auto"/></p>

- **Passo 12.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 13.** Por fim, clique em **NEXT** e **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.
O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Passo 14.** Coloque o **Boot Mode Switch** de volta na posição original

:::note

Depois que as etapas acima forem concluídas e você religar a alimentação do reTerminal DM, você deverá perceber que o LED de energia ficará amarelo e o LED ACT ficará piscando em verde, mas a tela ficará em branco e sem luz de fundo. Por favor, não entre em pânico, você só precisa seguir as etapas de [install drivers](#install-drivers) para reativar a tela.

:::

## Instalar drivers

### Acessar o reTerminal DM via SSH

:::note

As etapas a seguir exigem algum conhecimento básico de linha de comando Linux. Por favor, prepare uma xícara de café e fique pronto.

:::

Seguindo as etapas de gravação do sistema operacional acima, o reTerminal DM deve ter SSH habilitado com o hostname `raspberrypi.local`.

Agora conecte o cabo Ethernet ao reTerminal DM e a um roteador que esteja na mesma rede que o seu computador host.

:::tip

Para testar se o seu reTerminal DM está na mesma rede que o computador host, você pode usar `ping raspberrypi.local`

se você vir a seguinte saída após o comando ping, isso significa que ambos os dispositivos estão na mesma rede:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ping.png" alt="pir" width="600" height="auto"/></p>

:::

##### Para Windows

- **Passo 1.** Abra o **Command Prompt** e digite o seguinte

```sh
# ssh username@hostname
ssh pi@raspberrypi.local
```

- **Passo 2.** Digite **yes** quando solicitado

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png" alt="pir" width="750" height="auto"/></p>

- **Passo 3.** Insira a senha da seguinte forma

```sh
raspberry
```

- **Passo 4.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png" alt="pir" width="1000" height="auto"/></p>

##### Para Mac/Linux

- **Passo 1.** Abra o **Terminal** no computador e digite o seguinte

```sh
ssh pi@raspberrypi.local
```

- **Passo 2.** Digite **yes** para a seguinte mensagem

```sh
ECDSA key fingerprint is SHA256:XXXXXXX.
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

- **Passo 3.** Quando for solicitada a senha, digite o seguinte

```sh
raspberry
```

- **Passo 4.** Se você tiver feito login com sucesso no Raspberry Pi OS, verá a seguinte saída

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png" alt="pir" width="900" height="auto"/></p>

### Instalar drivers do reTerminal após gravar um novo Raspbian OS

O reTerminal DM vem com os drivers necessários pré-instalados de fábrica, então você não precisa instalar drivers adicionais. No entanto, se você gravar um novo sistema operacional por conta própria, precisará instalar os drivers necessários separadamente.

:::tip

**Para instalar o driver do sistema operacional de 32 bits, siga cuidadosamente as etapas abaixo:**

O sistema operacional pré-instalado no reTerminal DM é de 64 bits; se você desejar instalar um sistema operacional de 32 bits, use o método a seguir para instalar os drivers DTS.

>⚠️Nota: Reinicie o seu reTerminal DM depois de gravar o sistema operacional de 32 bits.

Siga a etapa [**Access reTerminal DM via SSH**](#access-reterminal-dm-via-ssh) e, em seguida, insira o seguinte comando:

```sh
echo arm_64bit=0 | sudo tee -a /boot/config.txt
```

Em seguida, continue o processo de [**Install drivers after flashing new Raspbian OS process**](#install-reterminal-drivers-after-flashing-new-raspbian-os)

Enquanto isso, se você estiver usando a versão oficial mais recente do Raspberry Pi OS de 32 bits, o novo kernel é incompatível com este produto, o que resultará em falhas na atualização dos drivers e em uma tela em branco. Se você realmente precisar de uma imagem de sistema operacional de 32 bits para desenvolvimento, recomendamos usar uma versão de imagem de 32 bits mais antiga.
:::

- **Passo 1.** Clone o seguinte repositório no shell SSH que você conectou ao reTerminal DM nas etapas acima

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
sudo ./scripts/reTerminal.sh --device reTerminal-DM
```

<!-- You will see the following output if you have successfully installed the drivers

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/driver-success.png" alt="pir" width="1000" height="auto"/></p> -->

- **Passo 4.** Reinicie o reTerminal DM

```sh
sudo reboot
```

Agora a sua tela deve acender e funcionar normalmente.

## FAQ

### Orientação da tela sensível ao toque

**P: A orientação do painel de toque da tela é diferente da exibição da tela?**

**R: Siga cuidadosamente as etapas abaixo:**

Siga a etapa [access reTerminal DM via SSH](#access-reterminal-dm-via-ssh) e, em seguida, insira o seguinte comando:

```sh
echo 'ATTRS{name}=="gt9271", ENV{LIBINPUT_CALIBRATION_MATRIX}="0  1.0  0 -1.0 0 1.0 0 0 1.0"' | sudo tee -a /etc/udev/rules.d/98-touchscreen-cal.rules
```

Em seguida, reinicie:

```sh
sudo reboot
```

Se a orientação da tela ainda estiver incorreta, opções adicionais para `ENV{LIBINPUT_CALIBRATION_MATRIX}` podem ser encontradas [aqui](https://wayland.freedesktop.org/libinput/doc/1.11.3/udev_config.html).

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
