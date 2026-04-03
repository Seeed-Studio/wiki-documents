---
description: Como construir um roteador doméstico por software e um NAS com o ReComputer
title: Como construir um roteador doméstico por software e um NAS com o ReComputer
keywords:
  - ReComputer_Alpha
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How-to-build-a-home-soft-router-and-NAS-With-ReComputer
last_update:
  date: 01/20/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/How-to-build-a-home-soft-router-and-NAS-With-ReComputer/
---

# Como construir um roteador doméstico por software e um NAS com o ReComputer  

## 1. Preparação de hardware  

- **Placa-mãe ReComputer:** 8GB de RAM + 64GB eMMC neste caso.
- **SSD:** Para construir um NAS, precisamos de unidades de disco de alta capacidade além do eMMC original de 64GB. É recomendado usar SSDs, que têm uma vida útil muito maior do que HDDs e assim não há necessidade de considerar RAID. Podemos escolher m.2 SATA SSD, m.2 NVMe SSD, SSD SATA de 2,5", etc.
- **Um ventilador de resfriamento 4 pinos de 8 cm:** Não é suficiente usar dissipadores passivos no verão quente. Precisamos de um ventilador maior porque é mais silencioso e escolher 8010 em vez de 9015 para ter um gabinete mais fino.
- **Um gabinete:** Não se preocupe, documentos de projeto estão disponíveis para todos e você pode copiar um como quiser.
- **Grove - OLED Display 0.96":** Há um microcontrolador para Arduino na placa-mãe do ReComputer. Por que não fazer algo interessante com ele?
- **Alguns cabos,** como cabos de dados SATA, cabos de SSD, cabos de ventilador, cabos Grove, etc. Alguns deles podem precisar ser re-fiados, mas não é difícil.  

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/10.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/11.jpg)

 ![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/12.jpg)

**Gabinete**  

É recomendado escolher chapas de acrílico com menos de 3mm de espessura. Mais detalhes estão no arquivo anexado `ReComputer_DarkBox.dxf`.  

Pilares de suporte: 25mm x 4 e 27mm x 4.  

**Cabos**  

Observe a definição do pino HDD_PWR ao fazer os cabos, pois o ventilador de resfriamento pode ser alimentado pela fonte de alimentação de 12V no pino HDD_PWR.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/13.jpg)

## 2. Montagem  

Passo 1: Instalar o Grove - OLED Display 0.96" no gabinete.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/21.jpg)

Passo 2: Instalar o ventilador de resfriamento no gabinete.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/22.jpg)

Passo 3: Instalar o SSD de 2,5" no gabinete.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/23.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/24.jpg)

Passo 4: Fiação.  

Como mostra o diagrama de pinagem do ventilador de resfriamento de 4 pinos, ele tem um pino de detecção de rotação `TACH` e um pino de controle de rotação `PWM` conectados aos pinos 12 e 13 do microcontrolador para Arduino (na verdade depende da definição no programa).  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25fan_pinout.png)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25.jpg)

Conecte o Grove - OLED Display 0.96" com I2C bem como PWR e GND.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/26.jpg)

Conecte a porta serial do SAMD21 com a porta serial da CPU Intel.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25uart.jpg)

Passo 5: Instale as tampas frontal e traseira e aperte os parafusos.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/27.jpg)

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/28.jpg)

**Remoção de calor**  

O ar frio fornecido pelo ventilador flui através das aletas de resfriamento da CPU e do SSD, removendo assim o calor de forma eficaz.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/29.jpg)

## 3. Instalação e configuração do ambiente virtual Proxmox VE  

Precisamos de um pendrive USB de pelo menos 8GB para a instalação. Aqui está o [Proxmox VE ISO](https://www.proxmox.com/en/downloads) mais recente lançado.  

Grave-o no pendrive USB com o Etcher.  

Conecte teclado, mouse, monitor e pendrive USB. Inicialize o ReComputer e pressione a tecla `F7` continuamente para entrar na interface de seleção do dispositivo de boot. Selecione boot pelo disco U.  

A instalação do PVE é muito simples, mas ATENTE que:  
**PVE NÃO PODE ser instalado no eMMC!**  

Isso porque a equipe do PVE acredita que o eMMC não tem uma vida útil maior que o SSD e não é permitido instalar o PVE no eMMC.  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/pve-grub-menu.png)

(A imagem foi baixada do site do PVE. Meu PVE é a versão 6.0.)  

Verifique o [documento de instalação](https://pve.proxmox.com/wiki/Installation) se tiver problemas com isso.  

O ReComputer tem duas portas de rede. Defina qualquer uma das duas como rede de gerenciamento do PVE e a outra como porta WAN do sistema de roteador por software.  

## 4. Programas Arduino  

O SAMD21 (compatível com Seeeduino Cortex-M0+) na placa do ReComputer é usado para controlar dinamicamente a rotação do ventilador de acordo com a temperatura da CPU. Algumas informações do sistema PVE são exibidas simultaneamente na tela OLED.  

Minhas ideias de projeto:  

- PVE é uma caixa Debian Linux, de modo que podemos obter a temperatura da CPU programando de forma flexível.
- É possível gravar o programa via porta USB do SAMD21, já que ele está conectado à porta USB da CPU Intel.
- Outra porta serial do SAMD21, Serial1, já foi conectada à porta serial da CPU Intel, de modo que é possível se comunicar por ela. (Acredito que a porta serial de hardware seja mais confiável do que a porta USB.)
- Escrever um programa Arduino simples para ler a temperatura da CPU via Serial1, controlar a rotação do ventilador e acionar a atualização do display OLED.  

Realmente simples, não é? Aqui está o [programa Arduino](https://github.com/KillingJacky/DarkBox).  

### 4.1 Compilação  

O que fazemos primeiro é abrir o programa na Arduino IDE. Selecione `Seeeduino Cortex-M0+` e encontre o arquivo bin com o log de compilação.  

![image-20191112210126228](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/401.png)

![image-20191112210342437](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/402.png)

### 4.2 Gravação  

Use o comando `scp` para copiar o `ReComputer.ino.bin` gerado pela Arduino IDE e colá-lo no PVE.  

```
scp ReComputer.ino.bin root@192.168.1.x:~
```  

Execute o SSH.

```
ssh root@192.168.1.x
```  

Baixe a ferramenta de gravação `bosaac`  

```
wget http://downloads.arduino.cc/tools/bossac-1.7.0-x86_64-linux-gnu.tar.gz
tar zxvf bossac-1.7.0-x86_64-linux-gnu.tar.gz
cp bossac-1.7.0/bossac /usr/bin/
chmod a+x /usr/bin/bossac
```  

Coloque o Arduino em modo bootloader fazendo curto-circuito entre Reset e Gnd duas vezes.  

![image-20191113230804316](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/resetArduino.png)

Grave o programa Arduino com a ferramenta de gravação.  

```
bossac -i -d --port=/dev/ttyACM0 -U true -e -w -v ReComputer.ino.bin -R
```  

Você verá isto exibido na tela:  

![](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/oled_gui.jpg)  

A temperatura da CPU e a rotação do ventilador são exibidas na tela. O ventilador vai parar de funcionar se a temperatura estiver abaixo de 45℃.  

O histórico de carga do sistema e o uso atual de memória também são exibidos.  

Aliás, não se esqueça de instalar o script no PVE. Consulte o `README` para mais detalhes no repositório Github.  

Agora já concluímos nosso trabalho de hardware e construímos um pequeno servidor PVE com um sistema de resfriamento inteligente e uma unidade de disco de 2TB, que é suficiente para várias máquinas virtuais e armazenamento NAS.  

## 5. Instalando o sistema de roteamento por software  

A placa-mãe ReComputer possui duas portas Ethernet Gigabit, o que torna fácil construir um sistema de roteamento por software. Um sistema de roteamento por software tem funções mais poderosas do que roteadores normais, proporcionando a você um ambiente de rede doméstica mais profissional.  

Eu escolhi o sistema `lede(OpenWrt)` comum na comunidade e não difícil de usar.  

Aqui está o diagrama de topologia de rede:  

![image-20191116233322566](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/500networkArch.png)

Passo 1: Baixe e instale a imagem a partir [daqui](https://drive.google.com/file/d/1-R5mJOu43bKWHv8ViK2V1dtE4zBLDYyU/view?usp=sharing).  

Isto vem de código-fonte modificado de terceiros do lede.  

Passo 2: Envie a imagem para o PVE.  

```
scp /PATH/TO/openwrt-x86-64-combined-squashfs.qcow2 root@192.168.32.222:~
```  

O arquivo .qcow2 foi exportado quando compilei a imagem. Se você tiver baixado o arquivo .img, use este comando para transformá-lo.  

```
qemu-img convert -f raw -O qcow2 lede-xxxxxxx-combined-ext4.img vm-100-disk-1.qcow2
```  

Passo 3: Crie uma máquina virtual e importe a imagem.  

Crie uma porta de rede WAN e reinicie o PVE para habilitar a WAN adicionada.  

![image-20191117161646454](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503createWanBridge.png)

![image-20191117164131776](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503wanActive.png)

Crie uma máquina virtual e configure-a como abaixo (após o assistente, adicione manualmente a segunda placa de rede e exclua o disco rígido).  

![image-20191117161819910](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/504ledeSummary.png)

Importe a imagem de disco lede.  

```
root@pve-home:~# qemu-img check openwrt-x86-64-combined-squashfs.qcow2
No errors were found on the image.
685/2824 = 24.26% allocated, 0.00% fragmented, 0.00% compressed clusters
Image end offset: 45219840
root@pve-home:~# qemu-img info openwrt-x86-64-combined-squashfs.qcow2
image: openwrt-x86-64-combined-squashfs.qcow2
file format: qcow2
virtual size: 177M (185073664 bytes)
disk size: 43M
cluster_size: 65536
Format specific information:
    compat: 1.1
    lazy refcounts: false
    refcount bits: 16
    corrupt: false
root@pve-home:~# qm importdisk 100 openwrt-x86-64-combined-squashfs.qcow2 local-lvm
  Rounding up size to full physical extent 180.00 MiB
  Logical volume "vm-100-disk-0" created.
    (100.00/100%)
```  

Observe que 100 é o número de id da máquina virtual criada. Ele pode ser modificado em seu computador.  

Então podemos ver o disco que acabamos de importar em `local-lvm`.  

![image-20191117163326117](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/505diskImported.png)

O disco é exibido na lista de hardware da máquina virtual ao mesmo tempo.  

![image-20191117163523743](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/506diskImported2.png)

Clique duas vezes para adicioná-lo.  

![image-20191117163625885](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/507addDisk.png)

A lista de discos deve ficar assim:  

![image-20191117163718793](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/508finalHardwareSummary.png)

Inicie a máquina virtual, abra o Console e verifique o log do Kernel. Quando `random: crng init done` for impresso, clique em Enter. Ver `shell` significa que a inicialização foi bem-sucedida.  

![image-20191117164609593](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/509ledeBootup.png)

O IP da intranet do lede é `192.168.1.1`. Precisamos que o nosso computador esteja conectado à porta de rede LAN do ReComputer para acessar esse IP configurando o endereço IP para IP estático 192.168.1.x.  

![image-20191117165532300](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/510configLaptopNetwork.png)

Digite `192.168.1.1` no navegador para acessar a interface de login do OpenWrt. O nome de usuário é `root` e a senha é `password` por padrão.  

![image-20191117165632253](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20191220134207.png)

Como usar o OpenWrt está além do escopo deste artigo. Apenas estude e divirta-se!  

## 6. Instalando o sistema NAS  

O NAS se tornou um dos serviços cada vez mais importantes na rede doméstica. Ele pode ser facilmente instalado no ambiente virtual PVE. Neste caso, o sistema NAS de código aberto `openmediavault` é selecionado.  

Passo 1: Baixe e instale a imagem a partir [daqui](https://sourceforge.net/projects/openmediavault/files/5.0.5/openmediavault_5.0.5-amd64.iso/download).  

Passo 2: Envie a imagem para o PVE.  

![image-20191114152513579](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/602uploadInstaller.png)

Passo 3: Crie uma máquina virtual e configure-a como abaixo:  

![image-20191117110324189](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/603omvConfig.png)

Passo 4: Inicialize a máquina virtual criada há pouco e instale o openmediavault. Clique em `Continue` ou `OK` até que a instalação seja concluída.  

![image-20191117110717036](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/604installOMV.png)

![image-20191117111323934](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/605installOMVDone.png)

Após a conclusão da instalação, a janela acima será exibida na sua tela. Agora a imagem ISO na máquina virtual deve ser removida.  

![image-20191117111506366](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/606removeCDROM.png)

Volte ao Console e clique em Enter para reiniciar sua máquina virtual.  

![image-20191117111854853](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/607omvFirstBoot.png)

Copie o endereço IP mostrado na tela e digite-o no navegador para acessar a interface de login do OpenWrt. O nome de usuário é `admin` e a senha é `openmediavault` por padrão.  

![image-20191117112155601](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/608loginOMV.png)

![image-20191117112400979](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/609omvWebUIFirstView.png)

A instalação do sistema openmediavault já foi concluída. O que devemos fazer em seguida é passar o SSD diretamente para melhorar a eficiência de leitura e gravação do sistema OMV.  

Passo 5: Pass-through do disco rígido.  

Primeiro é necessário habilitar o IOMMU de acordo com a documentação do PVE. Depois de acessar o PVE usando SSH, execute:  

```
root@pve-home:~# vim /etc/default/grub
```  

Adicione `intel_iommu=on` após `1GRUB_CMDLINE_LINUX_DEFAULT`.  

```
GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"
```  

Execute `update-grub`.  

```
root@pve-home:~# update-grub
Generating grub configuration file ...
Found linux image: /boot/vmlinuz-5.0.15-1-pve
Found initrd image: /boot/initrd.img-5.0.15-1-pve
Found memtest86+ image: /boot/memtest86+.bin
Found memtest86+ multiboot image: /boot/memtest86+_multiboot.bin
Adding boot menu entry for EFI firmware configuration
done
```  

Você tem que se certificar de que os seguintes módulos estão carregados. Isso pode ser feito adicionando-os a ‘*/etc/modules*’

```
vfio
 vfio_iommu_type1
 vfio_pci
 vfio_virqfd
```  

Depois de alterar qualquer coisa relacionada a módulos, você precisa atualizar seu `initramfs`. No Proxmox VE isso pode ser feito executando:  

```
root@pve-home:~# update-initramfs -u -k all
```  

Por fim, reinicie para que as alterações entrem em vigor e verifique se ele realmente foi habilitado.

```
[    1.810500] DMAR: Setting RMRR:
[    1.810644] DMAR: Setting identity map for device 0000:00:02.0 [0x77800000 - 0x7fffffff]
[    1.810794] DMAR: Setting identity map for device 0000:00:15.0 [0x75935000 - 0x75954fff]
[    1.810805] DMAR: Prepare 0-16MiB unity mapping for LPC
[    1.810891] DMAR: Setting identity map for device 0000:00:1f.0 [0x0 - 0xffffff]
[    1.810959] DMAR: Intel(R) Virtualization Technology for Directed I/O
```  

Se você vir as saídas acima, o IOMMU está habilitado.  

Verifique em qual interface PCI está o disco rígido que queremos passar diretamente. O controlador SATA conectado à interface SATA3 está na interface 00: 12.0.  

```
root@pve-home:~# lspci -nn
00:00.0 Host bridge [0600]: Intel Corporation Device [8086:31f0] (rev 03)
00:02.0 VGA compatible controller [0300]: Intel Corporation Device [8086:3185] (rev 03)
00:0c.0 Network controller [0280]: Intel Corporation Device [8086:31dc] (rev 03)
00:0e.0 Audio device [0403]: Intel Corporation Device [8086:3198] (rev 03)
00:0f.0 Communication controller [0780]: Intel Corporation Celeron/Pentium Silver Processor Trusted Execution Engine Interface [8086:319a] (rev 03)
00:12.0 SATA controller [0106]: Intel Corporation Device [8086:31e3] (rev 03)
00:13.0 PCI bridge [0604]: Intel Corporation Device [8086:31d8] (rev f3)
00:14.0 PCI bridge [0604]: Intel Corporation Device [8086:31d6] (rev f3)
00:14.1 PCI bridge [0604]: Intel Corporation Device [8086:31d7] (rev f3)
00:15.0 USB controller [0c03]: Intel Corporation Device [8086:31a8] (rev 03)
00:17.0 Signal processing controller [1180]: Intel Corporation Device [8086:31b4] (rev 03)
00:17.1 Signal processing controller [1180]: Intel Corporation Device [8086:31b6] (rev 03)
00:17.2 Signal processing controller [1180]: Intel Corporation Device [8086:31b8] (rev 03)
00:18.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31bc] (rev 03)
00:18.1 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31be] (rev 03)
00:18.2 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31c0] (rev 03)
00:18.3 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31ee] (rev 03)
00:19.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO SPI Host Controller [8086:31c2] (rev 03)
00:1c.0 SD Host controller [0805]: Intel Corporation Celeron/Pentium Silver Processor SDA Standard Compliant SD Host Controller [8086:31cc] (rev 03)
00:1e.0 SD Host controller [0805]: Intel Corporation Device [8086:31d0] (rev 03)
00:1f.0 ISA bridge [0601]: Intel Corporation Device [8086:31e8] (rev 03)
00:1f.1 SMBus [0c05]: Intel Corporation Celeron/Pentium Silver Processor Gaussian Mixture Model [8086:31d4] (rev 03)
01:00.0 Non-Volatile memory controller [0108]: Samsung Electronics Co Ltd NVMe SSD Controller SM961/PM961 [144d:a804]
02:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
03:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)
```  

Volte à Web UI no PVE. Selecione `Hardware -> Add PCI Device` na máquina virtual OMV.  

![image-20191117114829217](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/610pciPassthrough.png)

![image-20191117155102090](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/611selectPCI.png)

Depois disso, reinicie a máquina virtual e veremos que o disco rígido foi identificado no OMV.  

![image-20191117155433087](https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/612seeTheNewDisk.png)

Verifique a documentação do openmediavault para mais detalhes e aproveite!
