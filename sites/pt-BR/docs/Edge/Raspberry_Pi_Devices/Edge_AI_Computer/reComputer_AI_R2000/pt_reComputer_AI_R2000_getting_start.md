---
description: O reComputer AI R2000 é um poderoso computador de borda para IA baseado no Raspberry Pi 5. Com processador Arm Cortex-A76 quad-core, 8GB de RAM, suporte a M.2 SSD e um módulo de aceleração de IA Hailo-8 fornecendo até 26 TOPS, possibilita inferência de IA em tempo real, com baixa latência e alta eficiência. É a escolha perfeita para uma ampla gama de aplicações de IA, incluindo análise de vídeo com IA, visão computacional e computação inteligente de borda.
title: Introdução ao reComputer AI R2000 Series
keywords:
  - Raspberry pi
  - Computador de Borda para IA
  - reComputer R2000
image: https://files.seeedstudio.com/wiki/recomputer-r2000-getting-start/1_24_1.webp
slug: /r2000_series_getting_start
sku: 114993560, 114993627
last_update:
  date: 1/09/2025
  author: Jiahao Li
createdAt: '2025-01-09'
updatedAt: '2026-04-16'
url: https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

A série reComputer AI R2000 é um poderoso computador de borda para IA baseado no Raspberry Pi 5. Com processador Arm Cortex-A76 quad-core, 8GB de RAM, suporte a M.2 SSD e um módulo de aceleração de IA Hailo-8 fornecendo até 26 TOPS, possibilita inferência de IA em tempo real, com baixa latência e alta eficiência. É a escolha perfeita para uma ampla gama de aplicações de IA, incluindo análise de vídeo com IA, visão computacional e computação inteligente de borda.

## Recursos

- **Capacidades de resfriamento poderosas**: o design compacto e a arquitetura térmica otimizada o tornam altamente adequado para implantação em ambientes com recursos limitados, oferecendo excelente desempenho de resfriamento.

- **Alto desempenho**: alimentado por Raspberry Pi 5 com CPU Cortex-A76 quad-core e até 8GB de RAM.

- **26 Tera-Operações por Segundo**: alimentado pelo acelerador de IA Hailo, oferecendo poder de computação integrado de até 26 TOPS.
Interfaces extensas: 2x HDMI 4Kp60, 1x porta Ethernet, 2x USB 3.0, 2x USB 2.0.

- **Conectividade sem fio**: Wi-Fi dual-band e Bluetooth 5.0/BLE.
Opções de armazenamento flexíveis: o slot PCIe2.0 M.2 duplo suporta tanto acelerador de IA quanto armazenamento SSD.

## Especificações

| **Parâmetros**        | **Descrição**                                                          |
|-----------------------|--------------------------------------------------------------------------|
| **Especificação de hardware**      |                                                                          |
| **CPU**                | Raspberry Pi 5, Arm Cortex-A76 quad-core de 64 bits a 2,4GHz                    |
| **GPU**                | Raspberry Pi 5, VideoCore VII                                             |
| **Processador de IA**       | Módulo de aceleração Hailo-8 M.2, 26 Tera-Operações por Segundo           |
| **RAM**                | 8GB SDRAM                                                                |
| **Sistema operacional**   | Raspberry Pi OS, Ubuntu                                                  |
| **Especificação do sistema**        |                                                                          |
| **Fonte de alimentação**       | Alimentação DC 5V/5A via USB-C, compatível com Power Delivery                       |
| **Decodificador de vídeo**      | Decodificador HEVC 4Kp60                                                       |
| **Wi-Fi**              | Wi-Fi® 802.11ac dual-band                                                |
| **Bluetooth**          | Bluetooth 5.0/ BLE                                                       |
| **Botão de energia**       | On/Off incluído                                                          |
| **Interface**          |                                                                          |
| **Armazenamento**            | 1 x slot para cartão microSD, com suporte ao modo de alta velocidade SDR104           |
| **Slot M.2**           | 2 x slot M.2, suporta M.2 NVMe SSD/Módulo de Aceleração Hailo M.2        |
| **Portas USB**          | 2 × portas USB 3.0                                                        |
|                       | 2 × portas USB 2.0                                                        |
| **Ethernet**           | 1 x 10/100/1000 Mbps                                                     |
| **Câmera/Display**     | 2 × transceptores MIPI de 4 vias para câmera/display                               |
| **Saída de vídeo**     | 2 x portas micro HDMI (4Kp60)                                             |
| **Condições ambientais** |                                                                          |
| **Grau de proteção** | IP40                                                                     |
| **Temperatura de operação** | 0-45°C                                                                  |
| **Outros**             |                                                                          |
| **Garantia**           | 1 ano                                                                   |
| **Vida útil de produção**| Até pelo menos janeiro de 2036                                              |
| **Certificação**      | CE, FCC, Telec, RoHS, REACH                                              |

## Introdução ao Hailo

### Introdução ao hardware

[Hailo](https://hailo.ai/) oferece processadores de IA de ponta, exclusivamente voltados para aplicações de deep learning de alto desempenho em dispositivos de borda. As soluções da empresa se concentram em viabilizar a próxima era de IA generativa na borda, juntamente com percepção e aprimoramento de vídeo, impulsionados por aceleradores de IA avançados e processadores de visão. E o reComputer_R2000, equipado com o acelerador NPU Hailo-8 que fornece 26 TOPS de desempenho de IA, é capaz de atingir mais de 200 FPS com YOLOv8s.

### Introdução ao software

![](https://seeed-projects.github.io/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero/assets/images/architecture-2bfc6ed440e1add56388738e87558050.png)

O Hailo AI Software Suite fornece ferramentas poderosas para executar modelos de IA de forma eficiente em aceleradores de hardware. Ele é projetado para se integrar perfeitamente com estruturas de deep learning existentes, oferecendo fluxos de trabalho contínuos para desenvolvedores. O processo envolve gerar um HEF (Hailo Executable Binary File) a partir de um arquivo ONNX no ambiente de construção de modelo (Model Build Environment). Depois de criado, o arquivo HEF é transferido para a máquina de inferência (Runtime Environment), onde é usado para executar a inferência com a HailoRT API. O script fornecido facilita a conversão de um arquivo ONNX em um arquivo HEF dentro do Model Build Environment.

> **Nota:**
> **Se você quiser saber mais sobre exemplos de uso do Hailo NPU, clique neste [link](https://github.com/Seeed-Projects/Tutorial-of-AI-Kit-with-Raspberry-Pi-From-Zero-to-Hero).**

## Visão geral do hardware

![image1](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image3_1.jpeg)
![image2](https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image4_1.jpeg)

## Gravar o sistema operacional

*Você precisa de um cartão SD e um leitor de cartões. Insira o cartão SD no leitor de cartões e, em seguida, conecte a interface USB do leitor de cartões à porta USB da sua máquina host.*

### Para computador host Windows

- **Passo 1.** Clique **[aqui](https://downloads.raspberrypi.com/imager/imager_2.0.7.exe)** para baixar diretamente a versão para Windows do Raspberry Pi Imager 2.0.7 (usada no procedimento a seguir), ou visite o **[site oficial](https://www.raspberrypi.com/software/)** para selecionar a versão apropriada para o seu sistema.


- **Passo 2.** Abra o software Raspberry Pi Imager

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_1.png" alt="pir" width="600" height="auto"/></p>


- **Passo 3.** Clique em **CHOOSE OS** e selecione o sistema operacional de sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_2.png" alt="pir" width="600" height="auto"/></p>      

**NOTA1:** Recomendamos gravar, por enquanto, a imagem [64-bit Raspberry Pi OS Debian 12 Bookworm](https://downloads.raspberrypi.com/raspios_oldstable_full_arm64/images/raspios_oldstable_full_arm64-2025-10-02/2025-10-01-raspios-bookworm-arm64-full.img.xz). O recém-lançado Raspberry Pi OS baseado no Debian 13 “Trixie” ainda não atualizou o pacote hailo-all, portanto o Bookworm oferecerá suporte completo ao Hailo imediatamente.
Baixar [link](https://www.raspberrypi.com/software/operating-systems/).

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-Industrial/homepage/OS.png" alt="pir" width="600" height="auto"/></p>

Em seguida, grave-a no seu cartão SD usando o Imager com a opção Use custom.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_3.png" alt="pir" width="600" height="auto"/></p>

Se você ainda quiser testar a imagem mais recente, **será necessário instalar o software Hailo manualmente em vez de usar o método hailo-all de um único comando;** siga este [link](https://wiki.seeedstudio.com/pt-br/tutorial_of_ai_kit_with_raspberrypi5_about_yolov8n_object_detection/#instalar-software-hailo).

**NOTA2:** Você pode selecionar outros sistemas operacionais, como **Ubuntu 64-bit**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntu para raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 4.** Clique em **STORAGE** e selecione o dispositivo de armazenamento de destino preparado para a gravação do sistema operacional.

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/reComputer-R2000/frigateHA/piimager_show_4.png" alt="pir" width="600" height="auto"/></p>

- **Passo 5.** Por fim, clique em **WRITE**

Aguarde alguns minutos até que o processo de gravação seja concluído.

- **Passo 6.** Corrigir o driver do M.2 Dual Hat

Coloque o cartão SD gravado no seu reComputer e ligue-o. Siga as instruções em [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#corrigir-driver-m2-dual-hat).

### Para computador host MAC

:::caution
**Você precisa instalar o [homebrew](https://brew.sh/) antes de prosseguir com as etapas a seguir.**
Abra um terminal e digite ```brew -V``` para verificar se você configurou corretamente o ambiente do homebrew; você deverá ver a versão do ambiente homebrew que instalou.
:::

- **Passo 1.** Baixe e instale o aplicativo **Raspberry Pi Imager** acessando [este link](https://www.raspberrypi.org/software/)

- **Passo 2.** Abra o aplicativo **Raspberry Pi Imager**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png" alt="pir" width="600" height="auto"/></p>

- **Passo 3.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações locais** e muito mais

- **Passo 4.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p>

**NOTA:** Você pode selecionar outros sistemas operacionais, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar este link para baixar o arquivo de imagem:

[Ubuntu for raspberry-pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 5.** Clique em **CHOOSE STORAGE**

- **Passo 6.** Por fim, clique em **WRITE**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png" alt="pir" width="600" height="auto"/></p>

- **Passo 7.** Corrigir o driver do M.2 Dual Hat

Insira o cartão SD gravado no seu reComputer e inicialize-o. Siga as instruções em [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#fix-m2-dual-hat-driver).

### Para computador host Linux

- **Passo 1.** Baixar o snap

```sh
sudo apt install snap
```

- **Passo 2.** Baixar o **rpi-imager**

```sh
snap install rpi-imager
```

- **Passo 3.** Abrir o software Raspberry Pi Imager

```sh
rpi-imager
```

O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/linux_interface.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 4.** Pressione **CTRL + SHIFT + X** no teclado para abrir a janela de **Advanced options**

<p style={{textAlign: 'center'}}><img src="http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png" alt="pir" width="600" height="auto"/></p>

Aqui você pode **definir um hostname, habilitar SSH, definir uma senha, configurar o Wi‑Fi, definir configurações locais** e muito mais

- **Passo 5.** Clique em **CHOOSE OS** e selecione o seu sistema operacional preferido

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/system.png" /></div>

<!-- <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png" alt="pir" width="600" height="auto"/></p> -->

**NOTA:** Você pode selecionar outros sistemas operacionais, como **64-bit Ubuntu**, navegando até **Other general purpose OS**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/35.png" /></div>

Ou você pode usar o link de download manual: [Ubuntu24.04 for Raspberry-Pi](https://ubuntu.com/download/raspberry-pi/thank-you?version=24.04&architecture=desktop-arm64+raspi)

- **Passo 6.** Clique em **CHOOSE STORAGE** e selecione a unidade eMMC conectada

- **Passo 7.** Por fim, clique em **NEXT** e **YES**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/next-yes.png" alt="pir" width="600" height="auto"/></p>

Aguarde alguns minutos até que o processo de gravação seja concluído.
O resultado é mostrado abaixo:
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/flash_finish.png" alt="pir" width="600" height="auto"/></p>

- **Passo 8.** Corrigir o driver do M.2 Dual Hat

Insira o cartão SD gravado no seu reComputer e inicialize-o. Siga as instruções em [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#fix-m2-dual-hat-driver).


## Inicializar a partir do NVME

### Atualizar o EEPROM

*Este método funciona se você tiver um cartão SD e tiver inicializado o dispositivo com sucesso. Certifique-se de que o seu sistema seja o sistema Raspberry Pi mais recente (Bookworm ou posterior) e que o firmware do seu RPi 5 esteja atualizado para 2023-12-06 (6 de dezembro) ou mais recente, caso contrário ele pode não reconhecer as configurações relacionadas ao NVME.*

**Passo 1**: Certifique-se de que o seu sistema Raspberry Pi esteja atualizado (Bookworm ou posterior), insira o seguinte comando para atualizar o firmware do RPi 5:

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

**Passo 2**：Clique em **Applications** => **Accessories** => **SD Card Copier** na tela principal, execute o programa **SD Card Copier** e copie o sistema operacional para o SSD NVME, como mostrado na figura abaixo.

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/copy.gif" alt="pir" width="700" height="auto" /></div>

### Configurando o Raspberry Pi para inicializar a partir do SSD NVMe

Se você tiver fácil acesso ao slot do cartão SD, pode desligar o seu Pi, ejetar o cartão SD e (se tudo estiver funcionando como esperado) ele deverá inicializar automaticamente a partir da sua unidade NVMe na próxima vez que você ligá-lo. Porém, se você quiser deixar o cartão SD onde está e ainda assim inicializar a partir do NVMe, será necessário alterar a ordem de boot.

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

Você será perguntado se deseja reiniciar agora. Clique em `Yes`:

<div align="center"><img src="https://files.seeedstudio.com/wiki/M.2_Hat/new/s_6.png" alt="pir" width="700" height="auto" /></div>

**Passo 5**: Após reiniciar, o Raspberry Pi irá inicializar a partir do SSD NVMe. Você precisa seguir as instruções em [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#fix-m2-dual-hat-driver) para instalar o overlay `pcie-fix.dtbo` e corrigir o driver do M.2 Dual Hat.

## Gravar o Ubuntu no NVME

### Primeiro: Atualizar o EEPROM com cartão SD

Consulte este [link](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#update-eeprom).

Para definir a ordem de boot do NVMe como a prioridade mais alta, use o seguinte comando:

```
sudo rpi-eeprom-config --edit
```

Em seguida, altere o rpi-eeprom-config como abaixo:

```
BOOT_UART=1
BOOT_ORDER=0xf461
NET_INSTALL_AT_POWER_ON=1
PCIE_PROBE=1
```

Use `Ctrl+X` e digite `y` para salvar o resultado. E o resultado é o seguinte:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/chang_eeprom.png" alt="pir" width="700" height="auto" /></div>

### Segundo: Gravar o Ubuntu no NVMe

Abra o Raspberry Pi Imager:

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos1.png" alt="pir" width="700" height="auto" /></div>

Escolha o sistema Ubuntu:
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R2000/flashos2.png" alt="pir" width="700" height="auto" /></div>

Por fim, clique em `Next` e aguarde a conclusão do processo de gravação.

Após inicializar o Ubuntu, você precisa seguir as instruções em [Fix M.2 Dual Hat Driver](https://wiki.seeedstudio.com/pt-br/r2000_series_getting_start/#fix-m2-dual-hat-driver) para instalar o overlay `pcie-fix.dtbo` e corrigir o driver do M.2 Dual Hat.

## Corrigir o driver do M.2 Dual Hat

Após gravar uma nova imagem de sistema operacional, instale o overlay `pcie-fix.dtbo` para corrigir o driver do M.2 Dual Hat.

Entre no sistema operacional gravado e execute os seguintes comandos no terminal:

```shell
cd /tmp
wget https://files.seeedstudio.com/wiki/reComputer-R2000/pcie-fix.dtbo
sudo cp pcie-fix.dtbo /boot/firmware/overlays/
echo "dtoverlay=pcie-fix" | sudo tee -a /boot/firmware/config.txt
sudo reboot
```

## Consumo de energia e temperatura

:warning: **Nota:** O estado de espera foi testado sob as seguintes condições: a interface gráfica foi desativada, o Bluetooth foi desligado e o Wi‑Fi foi desativado. O comando é mostrado abaixo:

```
sudo ifconfig wlan0 down
sudo systemctl stop bluetooth
sudo systemctl stop lightdm
```

| **Condição**        | **Consumo de energia** | **Temperatura** |
|----------------------|----------------------|----------------------|
|**Espera**|5.9w   |   cpu:46°C|
|**Operação normal**|6.3w|cpu:53°C|
|**Carga máxima**|16.2w|cpu:75°C hailo8:81°C|

## Aplicação

### Frigate

Frigate é um NVR (Network Video Recorder) de código aberto projetado para detecção de objetos em tempo real usando IA. Ele se integra a câmeras existentes e utiliza modelos de aprendizado de máquina, como TensorFlow e Coral, para realizar detecção de objetos em fluxos de vídeo. Frigate é otimizado para processamento de vídeo de baixa latência e alto desempenho, oferecendo recursos como detecção de movimento, transmissões de vídeo ao vivo e alertas automatizados.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/thmI3dz9Ugs" title="Cost-Effective AI Surveillance: Frigate on Raspberry Pi 5 with Hailo8 on PCIe3.0 to Dual M.2 hat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Nota:**
> **Se você quiser saber mais sobre este projeto, consulte este [link](https://wiki.seeedstudio.com/pt-br/frigate_nvr_with_raspberrypi_5/).**

### YOLO

A série de modelos YOLO (You Only Look Once) é uma família de modelos de detecção de objetos em tempo real projetados para velocidade e precisão. Diferente dos métodos tradicionais de detecção de objetos, que realizam proposta de regiões e classificação separadamente, o YOLO executa ambas as tarefas em uma única passagem direta pela rede neural, tornando-o muito mais rápido. Os modelos YOLO dividem a imagem em uma grade e preveem caixas delimitadoras e probabilidades de classe para cada célula da grade. Ao longo dos anos, o YOLO evoluiu por várias versões, com melhorias em precisão, velocidade e capacidade de detectar objetos menores. YOLOv4, YOLOv5 e os recentes modelos YOLOv7 e YOLOv8 são amplamente utilizados em aplicações como vigilância, veículos autônomos e robótica.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/olaSVKmt9YI" title="Raspberry Pi AI: YOLOv8 Object Detection - 240fps Video Input, Pi 5 PCIe Gen2 vs Gen3 Benchmark" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Nota:**
> **Se você quiser saber mais sobre este projeto, consulte este [link](https://wiki.seeedstudio.com/pt-br/yolov8_object_detection_on_recomputer_r1000_with_hailo_8l/)**.

### Clip

CLIP (Contrastive Language-Image Pretraining) é um modelo de aprendizado de máquina desenvolvido pela OpenAI que consegue compreender imagens e texto em conjunto. Ele é treinado para associar imagens a descrições textuais correspondentes, permitindo que execute tarefas que envolvem ambas as modalidades. O CLIP é capaz de aprendizado zero-shot, o que significa que pode reconhecer objetos e conceitos em imagens sem precisar ser especificamente treinado nessas categorias. Ele demonstrou forte desempenho em uma variedade de tarefas, como classificação de imagens, detecção de objetos e até geração de descrições textuais de imagens.

<div class="video-container">
<iframe width="800" height="500" src="https://www.youtube.com/embed/JMHtqSmAGCA" title="CLIP Zero Shot Classification on Raspberry Pi 5 with Hailo AI Accelerator" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

> **Nota:**
> **Se você quiser saber mais sobre este projeto, consulte este [link](https://wiki.seeedstudio.com/pt-br/clip_application_on_rpi5_with_ai_kit/).**

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
