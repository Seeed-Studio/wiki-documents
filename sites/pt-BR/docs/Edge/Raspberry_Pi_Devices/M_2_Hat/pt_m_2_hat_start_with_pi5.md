---
description: Este tutorial apresenta principalmente a configuração de conexão de hardware do M.2 Hat e do dual Hat e como fazer o Raspberry Pi inicializar a partir do SSD.
title: Raspberry Pi 5 usa PCIe hat/dual hat
keywords:
  - M.2 hat
  - dual hat
  - Raspberry Pi
image: https://files.seeedstudio.com/wiki/M.2_Hat/new/m.2-dual-hat-for-raspberry-pi-5.webp
slug: /raspberry_pi_5_uses_pcie_hat_dual_hat
sku: 103110064,103110063,E2024082901,103110065
last_update:
  date: 12/24/2024
  author: Jiahaoli
createdAt: '2024-08-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/raspberry_pi_5_uses_pcie_hat_dual_hat/
---

## Introdução

Este tutorial apresenta principalmente a configuração de conexão de hardware do M.2 Hat/Dual Hat e como inicializar o Raspberry Pi a partir de um SSD. Ele também aborda dois métodos de instalação: com e sem gabinete, e testa as velocidades de leitura/gravação do SSD em diferentes condições.

## Primeiros Passos

### Preparação de Hardware

<div class="table-center">
 <table align="center">
 <tr>
  <th>Raspberry Pi5 8GB</th>
  <th>M.2 Hat/dual Hat</th>
 </tr>
    <tr>
      <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-102110919-raspberry-pi-5-8gb-font.jpg" style={{width:600, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3-103110064-pcie-to-m.2-dual-hat-for-raspberry-pi-5-fonmt.jpg" style={{width:600, height:'auto'}}/></div></td>
    </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/PCIe-to-dual-M-2-hat-for-Raspberry-Pi-5-p-5973.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

Para instalação sem gabinete, você precisa preparar os seguintes materiais:

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ Dispositivos PCIe SSD/AI Kit
- ④ Parafuso de fixação dos dispositivos PCIe
- ⑤ Cabo de conexão PCIe entre o M.2 Hat e o Raspberry Pi
- ⑥ Bucha, parafusos longos e porcas

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1.jpg" alt="pir" width="700" height="auto" /></div>

Para instalação com gabinete, você precisa preparar os seguintes materiais:

- ① Raspberry Pi 5
- ② M.2 Hat/dual Hat
- ③ Dispositivos PCIe SSD/AI Kit
- ④ Parafuso de fixação dos dispositivos PCIe
- ⑤ Cabo de conexão PCIe entre o M.2 Hat e o Raspberry Pi
- ⑥ Parafusos longos e porcas
- ⑦ [gabinete externo](https://files.seeedstudio.com/wiki/M.2_Hat/Seeed%20M.2%20hat%20with%20Pi5%20case_sam-20240827.stp)

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/1_2.jpg" alt="pir" width="700" height="auto" /></div>

### Instalação

> **Note:** This is a note. `Wipe pogo pin and GPIO pad with alcohol cotton, and then connect it before you using M.2 dual Hat on raspberrypi`

<!-- <div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/hat.jpg" alt="pir" width="700" height="auto" /></div>

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/pi5_GPIO_Pad.png" alt="pir" width="700" height="auto" /></div> -->

![](https://files.seeedstudio.com/wiki/M.2_Hat/new/hat_installation.gif)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Method 1" label="Instalação sem gabinete">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 1**: Insira o cabo de conexão PCIe no M.2 Hat, prestando atenção à direção de inserção do cabo. Insira a interface PCIe do M.2 Hat com o lado metálico voltado para baixo, como mostrado na figura após a inserção:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 2**: Insira o cabo de conexão PCIe no Raspberry Pi 5.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

Por favor, preste atenção à direção de inserção do cabo. Insira a interface PCIe do Raspberry Pi 5 com o lado metálico voltado para cima, como mostrado na figura após a inserção:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 3**: Sobreponha o Raspberry Pi 5 com o M.2 Hat e insira a bucha no parafuso.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/6.jpg" alt="pir" width="700" height="auto" /></div>

Em seguida, insira os parafusos nos orifícios de fixação do Raspberry Pi 5 e do M.2 Hat, como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/7.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 4**: Rosqueie o espaçador no parafuso e fixe o parafuso na placa de circuito, como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/8.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 5**: Insira o SSD e o AI Kit no M.2 dual Hat

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/10.jpg" alt="pir" width="700" height="auto" /></div>

Em seguida, insira os parafusos de fixação para prender o SSD e o AI Kit no M.2 Hat, como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/11.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>

<TabItem value="Method 2" label="Instalação com gabinete">
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/2.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 1**: Insira o cabo de conexão PCIe no M.2 Hat. Por favor, preste atenção à direção de inserção do cabo. Insira o lado metálico voltado para baixo na interface PCIe do M.2 Hat. Após a inserção, como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/3.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 2**: Conecte o cabo de conexão PCIe ao Raspberry Pi 5.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/4.jpg" alt="pir" width="700" height="auto" /></div>

Por favor, preste atenção à direção de inserção do cabo. Conecte-o à interface PCIe do Raspberry Pi 5 com o lado metálico voltado para cima. Após a inserção, fica como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/5.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 3**: Sobreponha o Raspberry Pi 5 e o M.2 Hat e prepare o gabinete, parafusos, porcas e dispositivos PCIe

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/12.jpg" alt="pir" width="700" height="auto" /></div>

Coloque o M.2 Hat e o Raspberry Pi sobrepostos dentro do gabinete, com o Raspberry Pi na parte superior, como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/13.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 4**: Rosqueie os parafusos nos orifícios de fixação reservados no gabinete. Este orifício irá conectar o M.2 Hat e o Raspberry Pi, fixando assim o M.2 Hat, o Raspberry Pi 5 e o gabinete.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/14.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 5**: Rosqueie os espaçadores nos parafusos para fixar o M.2 Hat, o Raspberry Pi 5 e o gabinete

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/15.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 6**: Insira o SSD e o AI Kit no M.2 Hat, como mostrado na figura:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/16.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 7**: Rosqueie os parafusos de fixação para prender o SSD no M.2 Hat

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/17.jpg" alt="pir" width="700" height="auto" /></div>

**Passo 8**: Instale o restante do gabinete

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/18.jpg" alt="pir" width="700" height="auto" /></div>
</TabItem>
</Tabs>

### Use a ferramenta SD Card Copier para gravar o SO no NVME SSD no Raspberry Pi OS

*Este método funciona se você tiver um cartão SD e tiver inicializado o dispositivo com sucesso. Certifique-se de que seu sistema seja a versão mais recente do Raspberry Pi (Bookworm ou posterior) e que o firmware do seu RPi 5 esteja atualizado para 2023-12-06 (6 de dezembro) ou mais recente, caso contrário ele pode não reconhecer as configurações relacionadas ao NVME.*

**Passo 1**: Certifique-se de que seu sistema Raspberry Pi esteja atualizado (Bookworm ou posterior), insira o seguinte comando para atualizar o firmware do RPi 5:

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

**Etapa 2**: Clique em **Applications** => **Accessories** => **SD Card Copier** na tela principal, execute o programa **SD Card Copier** e copie o SO para o SSD NVME como mostrado na figura abaixo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurando o Raspberry Pi para inicializar a partir do SSD NVMe

Se você tiver fácil acesso ao slot do cartão SD, poderá desligar o seu Pi, ejetar o cartão SD e (se tudo estiver funcionando como esperado) ele deverá inicializar automaticamente a partir da sua unidade NVMe na próxima vez que você ligá‑lo. Porém, se quiser deixar o cartão SD onde está e ainda assim inicializar a partir do NVMe, você precisará alterar a ordem de boot.

**Etapa 1**: Digite o seguinte comando:

```shell
  sudo raspi-config
```

Role para baixo até `Advanced Options` e pressione Enter:
<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_1.png" alt="pir" width="700" height="auto" /></div>

**Etapa 2**: Role para baixo até `Boot Order` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_2.png" alt="pir" width="700" height="auto" /></div>

**Etapa 3**: Escolha `NVMe/USB Boot` e pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_3.png" alt="pir" width="700" height="auto" /></div>

A configuração será confirmada. Pressione Enter:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_4.png" alt="pir" width="700" height="auto" /></div>

**Etapa 4**: Volte para a primeira tela selecionando `Back` ou pressionando a tecla Esc. Em seguida, navegue até Finish usando a tecla de seta para a direita.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_5.png" alt="pir" width="700" height="auto" /></div>

Você será perguntado se deseja reiniciar agora. Clique em `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

### Modificar PCIe

<Tabs>
<TabItem value="Method 1" label="M.2 Hat">
M.2 Hat oferece suporte aos modos PCIe Gen 2 e PCIe Gen 3

**Etapa 1**: Digite o seguinte comando para abrir o arquivo `/boot/firmware/config.txt`

```shell
sudo nano /boot/firmware/config.txt
```

**Etapa 2**: Adicione o seguinte à seção [all] no final do arquivo `/boot/firmware/config.txt`:

```shell
dtparam=pciex1_gen=3
```

Salve o arquivo e reinicie novamente, você poderá notar um aumento de velocidade!.
</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

PCIe2.0 M.2 dual Hat oferece suporte a PCIe Gen 2, e PCIe3.0 M.2 dual Hat oferece suporte a PCIe Gen 2 e PCIe 3.

**Etapa 1**: Digite o seguinte comando para abrir o arquivo `/boot/firmware/config.txt`

```shell
sudo nano /boot/firmware/config.txt
```

**Etapa 2**: Adicione o seguinte à seção [all] no final do arquivo `/boot/firmware/config.txt`:

```shell
dtparam=pciex1
dtparam=pciex1_gen=3
dtoverlay=pciex1-compat-pi5,no-mip,mmio-hi 

```

</TabItem>
</Tabs>

### Benchmark de Velocidade

<Tabs>
<TabItem value="Method 1" label="M.2 hat">

Este teste mostra que o Raspberry Pi inicializa a partir do cartão SD e usa o SSD como armazenamento de backup:

```
# write speed command
sudo dd if=/dev/zero of=/mnt/nvme/testfile bs=1M count=1024 oflag=direct

# read speed command
sudo dd if=/mnt/nvme/testfile of=/dev/null bs=1M iflag=direc
```

| M.2 hat | Velocidade de Leitura | Velocidade de Gravação |
|:-------------|:--------------:|--------------:|
| PCIe 3.0       | 822MB/s       | 716MB/s         |
| PCIe 2.0       | 431 MB/s      | 389MB/s         |

</TabItem>

<TabItem value="Method 2" label="M.2 dual Hat">

Este teste mostra que o Raspberry Pi inicializa a partir do SSD e usa outro SSD como armazenamento de backup:

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat | Leitura & Leitura | Gravação & Gravação | Leitura & Gravação |
|:-------------|:--------------:|--------------:|--------------:|
| PCIe 3.0       | média de 454MB/s      | média de 407MB/s        |   697MB/s 663MB/s|
| PCIe 2.0       | média de 234MB/s      | média de 214MB/s        |      414MB/s 324MB/s|

</TabItem>

<TabItem value="Method 3" label="M.2 dual Hat with hailo8">

Este teste mostra que o Raspberry Pi inicializa a partir do SSD e do acelerador de IA Hailo8:

```
# write speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 oflag=direct
# read speed command
dd if=/dev/zero of=tempfile bs=1M count=1024 
```

| M.2 dual Hat with hailo8| Leitura | Leitura & Hailo8 | Gravação |Gravação & Hailo8|
|:-------------|:--------------:|--------------:|--------------:|--------------:|
| PCIe 3.0       | 812MB/S     | 416MB/S 187FPS      |   701MB/s |  340MB/s  188FPS|
| PCIe 2.0       | 429MB/S      | 233MB/S/s 128FPS       |      372MB/S|  273MB/S 111FPS|

> **Nota:** Para testar o Hailo8, consulte este [link](https://github.com/hailo-ai/hailo-rpi5-examples) e prepare um vídeo com 240 FPS.

</TabItem>
</Tabs>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
