---
description: ODYSSEY, STM32MP135D
title: Primeiros passos com ODYSSEY – STM32MP135D
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-STM32MP135D
sku: 102110701,102110859
last_update:
  date: 10/13/2023
  author: Xogium
createdAt: '2023-10-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-STM32MP135D/
---

# Primeiros passos com ODYSSEY – STM32MP135D

ODYSSEY STM32MP135D é um computador de placa única compacto baseado em STM32 MPU que oferece hardware poderoso em um formato pequeno, projetado para uma variedade de usos que vão de casa inteligente a máquinas de venda automática, câmera IP etc. Ele oferece uma ampla gama de opções de conectividade projetadas para facilitar a prototipagem. O hardware está disponível em duas variantes diferentes:

- [ODYSSEY STM32MP135D](https://www.seeedstudio.com/Odyssey-MP135D-p-5727.html), que oferece toda a conectividade com apenas um micro SD básico como opção de armazenamento
- [ODYSSEY STM32MP135D with eMMC](https://www.seeedstudio.com/Odyssey-MP135D-eMMC-p-5728.html), que adiciona um eMMC de 4 GB para armazenamento

Atualmente, apenas o buildroot é suportado como sistema operacional.

## Hardware ##

- SoC: STM32MP135D
  - 32-bit Arm® Cortex®-A7
    - L1 32-Kbyte I / 32-Kbyte D
    - 128-Kbyte unified level 2 cache
    - Arm® NEON™ and Arm® TrustZone®

- Suporta o sistema operacional buildroot.
- Conectividade:
  - 2x portas ethernet de 10/100 Mbit/s,
    - eth1 suporta PoE e WOL.
  - 1x porta usb-a,
  - 1x Conector FPC CSI 30p,
  - 1x Conector FPC LCD 40p,
  - 40 pinos GPIO com pinagem compatível com raspberry pi.
- Armazenamento / memórias:
  - 4 Gbits de DRAM,
  - 256 Kbits de EEPROM com tamanho de página de 64 bytes,
  - Slot para cartão micro SD com suporte a cartões SD, SDHC e SDXC,
  - 4 Gbytes de eMMC (apenas na variante com armazenamento em eMMC)
- Opções de alimentação:
  - PoE através da porta eth1,
  - 5 V de entrada via conector usb-c.
- Dimensões da placa nua: 85x56x17mm
- Peso da placa nua: 36g

## Primeiros passos ##

### Hardware ###

Para começar a usar o hardware, você precisará do seguinte:

- 1x ODYSSEY STM32MP135D,
- 1x cabo usb-c para usb-a OU cabo usb-c para usb-c,
- 1x cabo ethernet,
- 1x cabo usb para uart como [este aqui](https://ftdichip.com/products/ttl-232r-rpi/).

Primeiro, conecte cuidadosamente o cabo usb para uart para que você tenha acesso ao console serial. Consulte a imagem a seguir para ajudar você a conectar os pinos corretamente.
![Top down view of STM32MP135D ODYSSEY board with debug pins next to the boot jumper circled. Pins listed in order of closeness to boot jumpers: WAKE, GND, TX, RX](https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_558688_ff47Pijnl_CdTY5i_1689582643?w=1201&h=801&type=image/png "highlighted uart0 pins")

Usaremos o usb-c para alimentação neste guia. Conecte uma ponta do cabo usb-c à placa e depois conecte a outra ponta ao seu computador. Conecte o cabo ethernet à porta eth1 do ODYSSEY e a outra ponta ao seu roteador ou switch de rede.

>### NOTA: Se você quiser usar o pacote pré-compilado, clique neste [link](http://files.seeedstudio.com/wiki/102110859_ODYSSEY_MP135D_img.zip)

### Software ###

Este guia usará os seguintes componentes de software:

- [buildroot versão 2023.02 ou posterior](https://buildroot.org/download.html).
- A [árvore externa do buildroot](https://github.com/xogium/buildroot-stm32mp135d-odyssey) a ser usada em conjunto com o buildroot principal.
- [snagboot](https://github.com/bootlin/snagboot), que é um conjunto de utilitários que ajuda a operar mais facilmente DFU e armazenamento em massa usb. Ele consiste em snagrecover, que tem como objetivo enviar o fsbl e o ssbl para a DRAM da placa, e em snagflash, que é projetado para realmente gravar dados no armazenamento persistente.

Nota: siga as instruções no repositório do snagboot para configurá-lo corretamente; isso está fora do escopo deste guia.

#### Recursos ####

A árvore externa fornece o seguinte:

- Um único stm32mp135d_odyssey_defconfig que compila um sistema mínimo e genérico consistindo em tf-a, optee, u-boot e o kernel linux para a cadeia de boot. O espaço de usuário é mínimo e consiste em um sistema init simples do busybox e shell.
  - Esse sistema pode ser usado das seguintes maneiras:
    - Gravado e inicializado a partir do eMMC (se o seu hardware o tiver)
    - Gravado e inicializado a partir de um cartão micro SD.
    - Inicializado via NFS.
- Um script pós-compilação é usado para fornecer uma imagem de bootloader facilmente gravável para o eMMC. Ele combina a imagem -tf-a e FIP em um único arquivo, destinado a ser gravado usando DFU, nas regiões de boot desse eMMC.
- Uma configuração genimage gera duas imagens de disco:
  - emmc.img contém uma partição u-boot-env para armazenar facilmente o ambiente do u-boot, juntamente com o rootfs. Espera-se que o bootloader seja armazenado nas regiões de boot do eMMC via DFU.
  - sdcard.img é composta por duas cópias de tf-a nas partições fsbl1 e fsbl2, respectivamente, junto com uma única partição fip que contém a imagem FIP. Há também uma partição u-boot-env igual à de emmc.img, juntamente com um único rootfs.
- A árvore externa fornece um external.mk vazio, Config.in e um diretório packages para serem usados caso você deseje adicionar opções e conteúdo adicionais. Consulte a seção correspondente no manual do buildroot para saber mais.

#### Obtendo os softwares ####

Este exemplo demonstra como obter o buildroot e a árvore externa necessária e depois configurá-los para serem usados:

Primeiro instale as dependências exigidas pelo Buildroot. Veja: [O manual do usuário do buildroot, capítulo 2: Requisitos do sistema](https://buildroot.org/downloads/manual/manual.html#requirement). Em seguida, configure o código-fonte:

```
wget https://buildroot.org/downloads/buildroot-2023.02.5.tar.gz
tar -xf buildroot-2023.02.5.tar.gz
mv buildroot-2023.02.5 buildroot
git clone https://github.com/xogium/buildroot-stm32mp135d-odyssey
```

#### Compilando ####

Quando o código-fonte tiver sido configurado corretamente, você poderá prosseguir com a compilação:

```
cd buildroot
make BR2_EXTERNAL=/absolute/path/to/buildroot-stm32mp135d-odyssey stm32mp135d_odyssey_defconfig
make
```

Se tudo correr bem, você deverá agora ter um sistema compilado com sucesso no diretório output/images da sua árvore do buildroot.

```
ls -1 output/images
combined-tf-a-and-fip.img
emmc.img
fip.bin
rootfs.ext2
rootfs.ext4
rootfs.tar
sdcard.img
stm32mp135d-odyssey.dtb
tee.bin
tee-header_v2.bin
tee-pageable_v2.bin
tee-pager_v2.bin
tf-a-stm32mp135d-odyssey.stm32
u-boot.dtb
u-boot-nodtb.bin
zImage
```

#### Como usar o sistema ####

##### Boot via eMMC #####

Remova o jumper de boot do meio na placa para ter certeza de que o modo DFU está ativo. Certifique-se de abrir o console serial usando minicom ou outro programa similar, você vai precisar dele.

Como exemplo, aqui está como usar o gnu screen para acessar um console serial chamado ttyUSB0. A taxa de transmissão esperada é 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Em seguida, execute o seguinte comando a partir do pacote snagboot e esteja pronto para interromper a sequência de boot ao chegar ao u-boot, pressionando qualquer tecla na janela do console serial:

```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

Quando estiver no prompt do u-boot, digite o seguinte para habilitar a partição de boot do eMMC: ```mmc partconf 1 1 1 1```. Isso habilita a primeira partição de boot do eMMC e garante que seja possível inicializar a partir dela, modificando o registrador ext csd 179. Depois, digite ```dfu 0``` para expor todas as configurações alternativas de DFU para a sua máquina host, incluindo as regiões de boot do eMMC. Elas podem ser listadas usando o comando dfu-util:

```
dfu-util -l
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=4, name="mmc1_boot2", serial="0021001A3232510937393835"
Found DFU: [0483:df11] ver=0200, devnum=7, cfg=1, intf=0, path="3-3", alt=3, name="mmc1_boot1", serial="0021001A3232510937393835"
...
```

Em seguida, use a ferramenta snagflash para gravar a imagem combinada do bootloader em ambas as regiões de boot:

```
snagflash -P dfu -p 0483:df11 --dfu-keep -D 3:combined-tf-a-and-fip.img
snagflash -P dfu -p 0483:df11 -D 4:combined-tf-a-and-fip.img
```

Depois que isso for feito, reinicie a placa e confirme que o boot via eMMC agora funciona como esperado, recolocando o jumper de boot do meio na placa. Ele apresentará erro ao inicializar a partir da partição 0 de mmc1, dado que a área de usuário está em branco, mas isso é normal neste estágio.

Quando você estiver novamente no prompt do u-boot, digite ```ums 0 1``` para expor a área de usuário do eMMC como um dispositivo de armazenamento em massa usb para a sua máquina host. Use lsblk para determinar a qual nó de dispositivo ele foi atribuído e substitua sdX no comando a seguir pelo nó de dispositivo apropriado. Verifique duas vezes para garantir que você irá gravar no dispositivo correto, pois ele será totalmente apagado!

```
snagflash -P ums -s emmc.img -b /dev/sdX
```

Quando a gravação estiver concluída, pressione ctrl+c no prompt do u-boot para encerrar o modo de armazenamento em massa usb. Em seguida, reinicie sua placa novamente e confirme que ela agora está inicializando o linux e que você recebe um prompt de login. Faça login com o usuário root e sem senha.

##### Boot por cartão micro SD #####

Se você deseja gravar o sistema em um cartão micro SD, proceda da seguinte forma, substituindo sdX pelo nó de dispositivo apropriado:

```
sudo dd if=output/images/sdcard.img of=/dev/sdX bs=4M conv=fsync
```

Onde sdX corresponde ao nó de dispositivo do cartão micro SD. Consulte a saída do comando lsblk para ter certeza de que você obteve o nó de dispositivo correto! Caso contrário, ocorrerá perda de dados, pois isso apaga todo o conteúdo do dispositivo de destino.

Use o minicom ou programa similar para se conectar ao console serial da placa. Como exemplo, aqui está como usar o gnu screen para acessar um console serial chamado ttyUSB0. A taxa de transmissão esperada é 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Quando o cartão micro SD tiver sido gravado com sucesso, insira-o no soquete micro SD da placa STM32MP135D ODYSSEY e ajuste os jumpers de boot para inicializar a partir do micro SD (todos os jumpers removidos). Se necessário, reinicie a placa. Faça login com o usuário root e sem senha assim que você receber o prompt de login do buildroot.

##### Boot via Nfs #####

Para inicializar o sistema via NFS, certifique-se de configurar seu /etc/exports conforme demonstrado, substituindo a sub-rede / endereços IP permitidos conforme necessário, fazendo o mesmo para os caminhos exportados:

```
/srv/nfs 192.168.1.0/24(rw,sync,crossmnt,fsid=0)
/srv/nfs/stm32mp135d 192.168.1.0/24(rw,nohide,insecure,no_subtree_check,async,no_root_squash)
```

Também certifique-se de que a configuração do seu servidor NFS habilite o modo UDP, como a seguir:

```
/etc/nfs.conf
[nfsd]
...
udp=y
```

Extraia o tarball de rootfs gerado no diretório apropriado, neste caso /srv/nfs/stm32mp135d:

```
cd output/images
sudo mkdir srv/nfs/stm32mp135d
sudo bsdtar -xpf rootfs.tar -C /srv/nfs/stm32mp135d
```

Remova o jumper de boot do meio para ter certeza de que o modo DFU está ativo. Certifique-se de abrir o console serial usando minicom ou outro programa similar, você vai precisar dele. Como exemplo, veja como usar gnu screen para acessar um console serial chamado ttyUSB0. A taxa de baud esperada é 115200n8.

```
sudo screen /dev/ttyUSB0 115200n8
```

Em seguida, execute o seguinte comando a partir do pacote snagboot e esteja pronto para interromper a sequência de boot ao chegar no u-boot, pressionando qualquer tecla na janela do console serial:

```
cd output/images
snagrecover -s stm32mp13 -f ../../board/stm32mp135d-odyssey/utilities/stm32mp1-stm32mp135d-odyssey.yaml
```

Quando você estiver no prompt do u-boot, poderá fazer boot via NFS fazendo o seguinte:

```
setenv eth1addr 2c:f7:f1:30:2b:62
setenv ethaddr 2c:f7:f1:30:2b:62
dhcp
nfs ${kernel_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/zImage
nfs ${fdt_addr_r} 192.168.1.92:/srv/nfs/stm32mp135d/boot/stm32mp135d-odyssey.dtb
setenv bootargs root=/dev/nfs rootfstype=nfs ip=dhcp nfsroot=192.168.1.92:/srv/nfs/stm32mp135d,tcp,v3 rw quiet console=ttySTM0,115200n8 earlycon
bootz ${kernel_addr_r} - ${fdt_addr_r}
```

Onde 192.168.1.92 neste exemplo é a máquina que hospeda o servidor NFS. O endereço MAC definido também é um exemplo e não deve ser usado no mundo real. Ele é necessário por não haver endereços MAC definidos no OTP da placa, mas pode ser armazenado de forma semipermanente na EEPROM (veja abaixo). Faça login com o usuário root e sem senha.

## EEPROM ##

### Layout ###

A implementação atual para ler endereços MAC da EEPROM espera que o primeiro comece no deslocamento 0 e tenha um comprimento de 6 bytes. O segundo MAC deve ser armazenado no deslocamento 0x10 e também ter um comprimento de 6 bytes.

- Dica: para gerar um MAC aleatório, use um gerador como [este aqui](https://www.hellion.org.uk/cgi-bin/randmac.pl).

Para armazenar o ambiente do u-boot na EEPROM, se você desejar fazê-lo, certifique-se de que o ambiente comece em um novo limite de página. As páginas têm 64 bytes de tamanho. Por exemplo, você pode definir o deslocamento do ambiente para 0x40, o tamanho permanecendo em 0x2000, e o deslocamento redundante para 0x2080. Aqui está um fragmento de configuração de u-boot de exemplo:

```
CONFIG_ENV_IS_IN_EEPROM=y
CONFIG_ENV_OFFSET=0x40
CONFIG_ENV_OFFSET_REDUND=0x2080
CONFIG_I2C_EEPROM=y
CONFIG_SYS_I2C_EEPROM_ADDR=0x50
CONFIG_NVMEM=y
```

Para aplicá-lo, execute ```make menuconfig``` no diretório de nível superior do buildroot. Vá até o menu de bootloaders, role até u-boot e modifique o caminho de fragments de configuração adicionais, por exemplo digitando ```$(BR2_EXTERNAL_STM32MP135D_ODYSSEY_PATH)/board/stm32mp135d-odyssey/configs/uboot.config```.

Em seguida, faça uma recompilação usando ```make clean && make```.

Em última análise, o layout é livre para você usar, exceto pela localização e comprimento dos endereços MAC.

### Como usar a EEPROM ###

Para fazer uso da EEPROM na sua placa, você tem acesso a ela como um dispositivo nvmem, tanto no u-boot quanto no linux. Por exemplo, vamos gravar um endereço MAC nela:

```
printf '\x2c\xf7\xf1\30\x2b\x62'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1
```

Para armazenar um segundo endereço MAC, faça assim:

```
printf '\x2c\xf7\xf1\30\x2b\x63'|dd of=/sys/bus/nvmem/devices/0-00501/nvmem bs=1 seek=16
```

## Como conectar e usar sensores Grove ##

A FAZER

## ✨ Projeto de Contribuidores

- Este projeto é apoiado pelo [Projeto de Contribuidores](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) da Seeed Studio.
- Graças aos [esforços de Casey](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=34112514) e ao seu trabalho, ele será [exibido](https://wiki.seeedstudio.com/pt-br/Honorary-Contributors/).

## Recursos ##

- [Fork do ARM trusted firmware usado na árvore externa do buildroot](https://git.xogium.me/xogium/st-arm-trusted-firmware/tree/v2.8-stm32mp-odyssey-r2)
- [Fork do OP-TEE](https://git.xogium.me/xogium/st-optee_os/tree/3.19.0-stm32mp-odyssey-r2)
- [Fork do U-Boot](https://git.xogium.me/xogium/st-u-boot/tree/v2022.10-stm32mp-odyssey-r2)
- [Fork do kernel Linux](https://github.com/xogium/st-linux/releases/tag/v6.1-stm32mp-odyssey-r3)
