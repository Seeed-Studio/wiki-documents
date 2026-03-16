---
description: reTerminal-FAQ
title: Como inicializar um SO a partir de uma unidade flash USB
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Boot_OS_from_USB_flash_drive
last_update:
  date: 6/21/2023
  author: Seraphina
createdAt: '2023-06-21'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Boot_OS_from_USB_flash_drive/
---

<!-- Q7: How can I boot an OS from USB Flash Drive -->

Você pode inicializar um sistema operacional a partir de uma unidade flash USB seguindo as etapas abaixo. Aqui nós mudamos a ordem de boot para **Inicialização por USB > Inicialização por eMMC**, o que significa que, se a inicialização por USB falhar, ele será inicializado a partir do eMMC.

:::caution
Você terá que usar **Ubuntu** ou **MacOS** como PC host para este método.
:::

- **Passo 1.** Remova as 4 tampas de borracha e abra a carcaça traseira do reTerminal desaparafusando os 4 parafusos sob elas

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-1.png" alt="pir" width={450} height="auto" /></p>

- **Passo 2.** Remova os 2 parafusos para desmontar o dissipador de calor e também os 4 parafusos restantes para separar toda a caixa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/remove-screw-3.jpg" alt="pir" width={500} height="auto" /></p>

- **Passo 3.** Abaixe o **boot mode switch** de acordo com o diagrama abaixo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/flip-switch.jpg" alt="pir" width={700} height="auto" /></p>

- **Passo 4.** Abra uma janela do **Terminal** no PC Host depois de conectar ao reTerminal e digite o seguinte para atualizar a **lista de pacotes**

```sh
sudo apt update
```

- **Passo 5.** Instale o **Git** com o seguinte comando

```sh
sudo apt install git
```

- **Passo 6.** O Git pode gerar um erro se a data não estiver configurada corretamente. Digite o seguinte para corrigir isso

```sh
sudo date MMDDhhmm
```

**NOTA:** Onde **MM** é o mês, **DD** é o dia, e **hh** e **mm** são, respectivamente, horas e minutos.

- **Passo 7.** Clone e entre no repositório da ferramenta **usbboot**

```sh
git clone --depth=1 https://github.com/raspberrypi/usbboot
cd usbboot
```

- **Passo 8.** Insira o seguinte para instalar o **libusb**

```sh
sudo apt install libusb-1.0-0-dev
```

- **Passo 9.** Compile e instale a ferramenta usbboot

```sh
make
```

- **Passo 10.** Abra o arquivo de configuração do bootloader

```sh
sudo nano recovery/boot.conf
```

- **Passo 11.** Altere o campo **BOOT_ORDER** para o seguinte

```sh
BOOT_ORDER=0xf15
```

Observe que o padrão do reTerminal é diferente do arquivo recovery/boot.conf clonado.
Os padrões para o reTerminal são os seguintes.
Reescreva o recovery/boot.conf conforme necessário.

```
[all]
BOOT_UART=0
WAKE_ON_GPIO=0
POWER_OFF_ON_HALT=1

# Try  SD- > USB PCIe MSD -> USB 2.0 BCM XHCI -> Network ->  Loop
BOOT_ORDER=0xf2541

# Set to 0 to prevent bootloader updates from USB/Network boot
# For remote units EEPROM hardware write protection should be used.
ENABLE_SELF_UPDATE=1
```

**NOTA:** Aqui, se a Inicialização por USB falhar, ela muda para a inicialização por eMMC

- **Passo 12.** Execute o seguinte para atualizar a imagem da EEPROM

```sh
cd recovery
./update-pieeprom.sh
```

O arquivo pieeprom.bin agora está pronto para ser gravado no Compute Module 4

- **Passo 13.** Navegue de volta para o diretório **usbboot**

```sh
cd ..
```

- **Passo 14.** Execute a ferramenta usbboot para gravar a EEPROM do bootloader

```sh
sudo ./rpiboot -d recovery
```

- **Passo 15.** Conecte o reTerminal ao PC por meio de um cabo USB Tipo C

Agora levará alguns segundos para transferir os arquivos necessários para o reTerminal.

- **Passo 16.** Desligue o reTerminal, volte o Boot Mode switch para a posição original e monte novamente a carcaça do reTerminal

- **Passo 17.** Conecte uma unidade flash USB inicializável com um sistema operacional adequado, conecte-a a uma das portas USB do reTerminal e ligue o reTerminal

Agora você verá o reTerminal inicializando a partir da unidade USB conectada
