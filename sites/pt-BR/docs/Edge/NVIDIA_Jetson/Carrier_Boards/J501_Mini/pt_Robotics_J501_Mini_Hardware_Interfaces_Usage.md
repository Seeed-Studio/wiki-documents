---
description: Este wiki fornece uma introdução abrangente aos recursos de hardware e ao uso das interfaces da placa carrier Jetson Robotics J501-Mini. Ele cobre especificações detalhadas, módulos suportados, instruções de configuração e guias práticos para usar várias interfaces, como M.2, Ethernet, USB, CAN, UART, DI/DO, I2S e expansão de câmera GMSL2, ajudando os usuários a iniciarem rapidamente o desenvolvimento de robótica na plataforma J501-Mini.
title: Gravar Jetpack && Uso das Interfaces
tags:
  - J501-Robotics carrier board
  - Flash Jetpack
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg
slug: /recomputer_j501_mini_getting_started
sku: 100020039
last_update:
  date: 11/04/2025
  author: Dayu
createdAt: '2025-11-25'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/recomputer_j501_mini_getting_started/
---

# Hardware da placa carrier Robotics J501 e Primeiros Passos

A Robotics J501 Mini carrier é uma placa carrier de borda de IA compacta e de alto desempenho, projetada para robótica avançada. Compatível com módulos NVIDIA Jetson AGX Orin (32GB/64GB) em modo MAXN, oferece até 275 TOPS de desempenho de IA. Equipada com amplas opções de conectividade — incluindo duas portas Ethernet Gigabit, slots M.2 para módulos 5G e Wi‑Fi/BT, 2 portas USB 3.2, CAN, GMSL2 (via expansão opcional), I2C e UART — ela serve como um poderoso cérebro robótico capaz de processar dados complexos de vários sensores. Com JetPack 6.2.1 e Linux BSP pré-instalados, garante uma implantação sem interrupções.​

Com suporte a frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch e ROS 2/1, a Robotics J501 Mini conecta a tomada de decisão baseada em modelos de linguagem de grande porte ao controle físico de robôs, como planejamento de movimento e fusão de sensores. Ideal para o desenvolvimento rápido de robôs autônomos, acelera o tempo de lançamento com interfaces prontas para uso e frameworks de IA otimizados.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱</font></span></strong>
    </a>
</div>

## Visão geral da placa carrier reComputer Jetson Robotics J501-Mini

| **Vista superior** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png) |
| **Vista lateral** |
| ![fig2](https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png) |
| **Vista inferior** |
| ![fig3](https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png) |

## 📝 Lista de Itens

- Placa Carrier Robotics J501-Mini x 1
- Fonte de alimentação e placa de expansão JST x 1
- Cabo XT30 para DC x 1
- Cabo USB, Tipo A para Tipo C x 1
- Dissipador de calor para placa de expansão x 1
- Pino espaçador (M3*30) x 5
- Porca sextavada M3 x 5
- Parafuso (CM2.5*L.4) para Jetson Module e M.2 Key M x3
- Parafuso (CM2*3.0) para M.2 Key E x1
- Pino espaçador (M2*2.0) para M.2 Key B x1
- Parafuso (CM3*4.0) para M.2 Key B x1
- Manual do Usuário x 1

:::note
1.Por favor, projete uma solução de dissipação de calor robusta de acordo com o Guia de Projeto Térmico, quando em fonte de alimentação de alta tensão e temperatura de operação elevada.
2.Por favor, fixe o dissipador de calor no módulo para melhor desempenho.
3.Durante a operação com entrada de alta tensão e alta carga, não toque no dissipador de calor para evitar queimaduras.
4.Recomendação de adaptador de energia para validação: use o adaptador de energia recomendado no site oficial da Seeed.

- Adaptador de Energia 19V/4.74A 5525 Barrel Jack
- Certifique-se de que os requisitos máximos de consumo de energia sejam atendidos.
2.Compatibilidade do Cabo de Alimentação AC
- Compre cabos de alimentação AC tipo trevo específicos para a região, de acordo com sua localização.
3.Compatibilidade de Acessórios
- Use apenas acessórios oficialmente recomendados (por exemplo, módulos sem fio, câmeras, periféricos) para desempenho e compatibilidade ideais.

:::

## 🔍 Especificação

### Especificações da Placa Carrier

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Categoria</th>
      <th>Item</th>
      <th>Detalhes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">Armazenamento</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (SSD M.2 NVMe 2280)</td>
    </tr>
    <tr>
      <th rowSpan="2">Rede</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>1x RJ45 10GbE && 1x RJ45 1GbE</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>2x USB 3.2 Tipo-A (10Gbps);<br />1x USB 2.0 Tipo C (Debug);<br />1x USB 3.0 Tipo C (Recovery/Debug)</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td>2x Conector GMSL2 Mini-Fakra 4 em 1 (Opcional);</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x Conector CAN JST 4 pinos (GH 1.25);</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>1x Conector DI JST 6 pinos (GH 1.25);<br />1x Conector DO JST 5 pinos (GH 1.25);</td>
    </tr>
      <tr>
      <td>I2S</td>
      <td>1x Conector I2S JST 6 pinos (GH 1.25)</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>1x Conector RS-485 JST 4 pinos (GH 1.25)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x Conector UART JST 6 pinos (Multiplexado com DO)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td>1x Conector de Ventoinha 4 pinos (12V PWM)</td>
    </tr>
    <tr>
      <td>Porta de Extensão</td>
      <td>2x Cabeçalho de Expansão de Câmera (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 pinos;</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x LED PWR, Verde;<br />1x LED SSD, Verde;<br />1x LED USR, RGB</td>
    </tr>
    <tr>
      <td>Botão</td>
      <td>1x Botão Recovery;<br />1x Botão RESET</td>
    </tr>
    <tr>
      <th rowSpan="1">Alimentação</th>
      <td colSpan="2">19-48V XT30 (Cabo XT30 para conector DC 5525 incluído)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versão do Jetpack</th>
      <td colSpan="2">Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecânico</th>
      <td>Dimensões (L x P x A)</td>
      <td>110mm x 110mm x 38mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td>Mesa, Montagem na parede</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de Operação</th>
      <td colSpan="2">-20℃~60℃ (Modo 25W);<br />-20℃~55℃ (Modo MAXN);<br />(com dissipador de calor reComputer Robotics com ventoinha)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantia</th>
      <td colSpan="2">2 Anos</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificação</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## 📦 Gravar o Sistema Operacional JetPack

### Módulo Suportado

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Pré-requisitos

- PC host com Ubuntu
- Placa Carrier Robotics J501 Mini
- Módulo NVIDIA® Jetson AGX Orin
- Ventoinha ativa para módulo Nano/NX
- SSD Interno NVMe M.2 2280
- Cabo de transmissão de dados USB Tipo-C

:::info

Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="3"> Versão do Ubuntu (Computador Host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Preparar a Imagem do Jetpack

Aqui, precisamos baixar a imagem do sistema para nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de Download1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDxBYYGqIfaSZqJT3uPt0alAa47BjjqCGvXWhD5tBsKx1M?e=3SW4Jf">Download</a></td>
      <td>f0efee5f265dbaef49dc14d517b269e<br />7f6582ff9977d9193d377966f36408ec3  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBohA1Z3GuSSJ7tFOQU8v22AYu8NNk9AS-1Cne78jOnSHw?e=dejuH9">Download</a></td>
      <td>0a97cbb6d708776bd97608594c60c3<br />4208b5d5dc6efbfc5553edd9c5a95802f6 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do Jetpack6 tem aproximadamente **14.2GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Por favor, aguarde até a conclusão do download.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware baixado está completo e intacto.
:::

⚙️ **Todos os arquivos `.dts` e outros códigos-fonte das placas carrier Jetson da SEEED podem ser baixados em** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)


### Entrar no Modo Force Recovery

:::info
Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja no modo force recovery.
:::

<details>

<summary> Passo a passo </summary>

**Passo 1.** Continue pressionando o botão para entrar no modo RESET.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/reset.png" />
</div>

**Passo 2.** Ligue a placa carrier conectando o cabo de alimentação e, em seguida, solte o botão **REC**.

**Passo 3.** Conecte a placa ao PC host com Ubuntu usando um cabo de transmissão de dados USB Tipo-C.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/flash-port.png" />
</div>

**Passo 4.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

A imagem abaixo é para AGX Orin 32GB: 

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Gravar no Jetson

**Etapa 1:** Extraia o arquivo de imagem baixado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Etapa 2:** Execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j501 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos.
:::

**Etapa 3:** Conecte a Robotics J501-Mini a um monitor usando o adaptador PD para HDMI para conectar a um monitor que suporte entrada HDMI, ou conecte diretamente a um monitor que suporte entrada PD usando o cabo PD, e conclua a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

## 🔌 Uso das Interfaces

A seguir serão apresentadas as várias interfaces da placa Robotics j501-Mini e como usá-las.

## M.2 Key M

M.2 Key M é projetado para SSDs NVMe de alta velocidade, fornecendo transferência de dados ultrarrápida para aplicações de robótica.

### SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Conexão de Hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-real.png"/>
</div>

### Instruções de Uso

Antes de testar a velocidade de leitura/gravação do SSD, você precisa inserir o seguinte no terminal do Jetson:

```bash
sudo apt update
sudo apt install smartmontools
sudo smartctl -i /dev/nvme0n1
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t.png"/>
</div>


Crie um arquivo de script para testar a velocidade de leitura/gravação do SSD:


```bash
#You need to create a blank test file first
cat <<'EOF' | sudo tee test_nvme.sh >/dev/null
#!/usr/bin/env bash
set -e

sudo dd if=/dev/zero of=test bs=1000M count=1 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=test of=/dev/null bs=1000M count=1
sudo rm -rf test
EOF
```

Execute o script para testar a velocidade de leitura/gravação do SSD:
```bash
sudo chmod +x test_nvme.sh
./test_nvme
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>



## M.2 Key E

A interface M.2 Key E é um conector M.2 padrão usado principalmente para conectar módulos sem fio, como Wi-Fi e Bluetooth, para expandir as capacidades de comunicação sem fio.

### Conexão de Hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/KEY-E.png"/>
</div>

### Instruções de Uso

Para testar o desempenho do Wi-Fi, use o seguinte comando (substitua o endereço IP pelo do seu servidor de teste):

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

A funcionalidade Bluetooth está disponível através do slot M.2 Key E.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## Ethernet

A placa-carregadora Robotics j501-Mini possui uma porta Ethernet RJ45 de 1Gbps e outra de 10Gbps para conectividade de rede com fio de alta velocidade.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-real.png"/>
</div>

Para testar a velocidade da porta Ethernet, use `iperf3` da seguinte forma:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` é o endereço IP do servidor iperf3. O cliente se conectará a esse servidor para realizar um teste de largura de banda.
`<bind_ip>` associa o endereço IP local especificado como a origem do tráfego de teste.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-speed.png"/>
</div>

## LED

A J501 mini possui dois LEDs que podem ser controlados. A seguir é demonstrado como controlar os LEDs para serem **verdes**, **vermelhos** ou **azuis**.

<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div> -->

### Instruções de Uso

Os comandos de referência para controlar os LEDs são os seguintes:

```bash
#change to red
echo 1 | sudo tee /sys/class/leds/on-board:red/brightness
echo 0 | sudo tee /sys/class/leds/on-board:red/brightness
#change to green
echo 1 | sudo tee /sys/class/leds/on-board:green/brightness
echo 0 | sudo tee /sys/class/leds/on-board:green/brightness

#change to blue
echo 1 | sudo tee /sys/class/leds/on-board:blue/brightness
echo 0 | sudo tee /sys/class/leds/on-board:blue/brightness

```

O efeito de controle do LED é mostrado na figura abaixo:

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-rg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-gg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-bg.jpg"/>
</div>

## USB

A placa-carregadora Robotics j501-Mini está equipada com uma variedade de portas USB, incluindo 2 portas USB 3.2 Type-A (10Gbps), uma porta USB 3.0 Type-C e uma porta USB 2.0 Type-C para modo dispositivo/depuração, oferecendo opções de conectividade versáteis.

### Teste de Velocidade USB-A

Crie um script para testar a velocidade do dispositivo USB:

```bash
sudo vim test_usb
```

Cole o seguinte conteúdo:

```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
EOF
```

Torne o script executável e teste: 

```bash
sudo chmod +x test_usb
./test_usb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/usba-test.png"/>
</div>



### Porta USB 2.0 Type-C

Utilizando esta porta serial, através do cabo de dados USB-C, você pode monitorar as informações de depuração de entrada e saída no lado do PC.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/debug-port-real.png"/>
</div>


No seu PC (não no Jetson), instale uma ferramenta de login de porta serial e faça login em `/dev/ttyUSB0` (também pode ser `ttyUSB1`, 2):

```bash
sudo apt update
sudo apt install screen
screen /dev/ttyUSB0 115200
```

Você poderá então controlar o terminal do Jetson pela porta serial em outro host Linux, como mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/login-usb.png"/>
</div>


## Ventoinha

O reComputer Jetson Robotics j501-Mini está equipado com: 

- 1x Conector de Ventoinha de 4 pinos (12V PWM): Compatível com ventoinhas PWM de 12V padrão, também suporta controle preciso de velocidade, sendo ideal para requisitos de resfriamento de alto desempenho.

### Conexão de Hardware

A Robotics J501 Mini fornece um cabeçalho padrão de 4 pinos para a ventoinha. 

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan0.png"/>
</div>

O diagrama esquemático do datasheet da **Ventoinha** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan1.png"/>
</div>

As definições de pinos para **J1** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan2.png"/>
</div>

:::note
Para mais informações, verifique [aqui](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

### Instruções de Uso

**Crie um script para definir a velocidade da ventoinha:**

```bash
cat test_fanSpeedSet
```

Cole o seguinte conteúdo:

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```


Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta `jtop`.


## CAN

CAN (Controller Area Network) é um padrão robusto de barramento veicular que permite que microcontroladores e dispositivos se comuniquem entre si sem um computador host.  

A J501 Mini fornece duas interfaces CAN integradas no conector JST de 4 pinos (GH1.25). Além disso, ambas as interfaces CAN **suportam CAN-FD**, com CAN0 e CAN1 mostradas abaixo:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-real.png"/>
</div>

As definições de pinagem para **CAN0** e **CAN1** são semelhantes, e o diagrama da interface é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-jst.png"/>
</div>

**CAN0** corresponde a **J6**, e as definições de pinos são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can0-ds.png"/>
</div>

**CAN1** corresponde a **J7**, e as definições de pinos são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can1-ds.png"/>
</div>

### Comunicação CAN
Esta seção conecta CAN0 e CAN1 no Jetson para demonstrar como enviar e receber dados entre CAN0 e CAN1 no `Classic CAN mode` e no `CAN-FD mode`.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/CAN-connect.png"/>
</div>

Os resistores de terminação para CAN0 e CAN1 podem ser controlados por dois pinos: PAA.04, localizado em gpiochip1 linha 4, e PAA.07, localizado em gpiochip1 linha 7.  

O controle do resistor de terminação segue estas regras:  
```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

Digite o seguinte comando para visualizar os pinos no gpiochip 1:
```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>


Consulte os seguintes comandos para definir `PAA.04` e `PAA.07` como 0:
```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

Consulte os seguintes comandos para definir `PAA.04` e `PAA.07` como 1:
```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```



#### Modo Classic CAN

Crie `test_can.sh` para testar a transmissão e recepção de dados entre **CAN0** e **CAN1** no modo padrão:

```bash
touch test_can.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
O código do script para `test_can.sh` é o seguinte:

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash

echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S ip link set can1 down

# set buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288

 #set to 2M bps
echo "000000" | sudo -S ip link set can0 type can bitrate 2000000
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 type can bitrate 2000000
echo "000000" | sudo -S ip link set can1 up

sleep 2

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

cangen can1 &
candump can0
```

</details>

A transmissão e recepção de dados entre **CAN0** e **CAN1** será concluída:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can_normal.jpg"/>
</div>


#### Modo CAN-FD

Na [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf), você pode encontrar o diagrama de fiação para a interface **CAN0/CAN1** como mostrado abaixo:


<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div> -->

<!-- Here we will demonstrate to you how to conduct data communication using the CAN1 interface, by utilizing the [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html). -->

Crie `test_canfd.sh` para testar a transmissão e recepção de dados entre CAN0 e CAN1 no modo CAN-FD:

```bash
touch test_canfd.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
O código do script para `test_canfdfd.sh` é o seguinte:

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash

# configure CAN FD mode
#CAN bus rate set to 500 kbps, data rate set to 5 Mbps.
echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 down
echo "000000" | sudo -S sudo ip link set can1 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can1 up


# config buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288


# check CAN FD status
echo "CAN0 status:"
ip -details link show can0

echo "CAN1 status:"
ip -details link show can1

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

candump can0 &
cangen can1 -f

```

</details>

A transmissão e recepção de dados entre CAN0 e CAN1 será concluída:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-fd.jpg"/>
</div>


## GPI && GPO

### GPI

O Robotics J501 Mini fornece um conector JST padrão de 6 pinos para GPI. 

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-real.png"/>
</div>

O esquema do datasheet de **GPI** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-jst.png"/>
</div>

As definições de pinos para **J12** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-ds.png"/>
</div>


Habilite **GPI 1** a **GPI 4** para ler o status de entrada:
```bash
sudo gpioset --mode=wait 0 131=0
```


Para ler a entrada de **GPI 1** a **GPI 4**, consulte os seguintes comandos:
```bash
sudo gpioget 0 96  #read the input of GPI 1
sudo gpioget 0 104 #read the input of GPI 2
sudo gpioget 0 86  #read the input of GPI 3
sudo gpioget 0 83  #read the input of GPI 4
```

Quando um nível alto for lido, ele retornará 1; quando um nível baixo for lido, ele retornará 0.

### GPO

O Robotics J501 Mini fornece um conector JST padrão de 6 pinos para GPO. 

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-real.png"/>
</div>


O esquema do datasheet de **GPO** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

As definições de pinos para **J14** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>

Habilite **GPO 1** a **GPO 4** para status de saída:
```bash
sudo gpioset --mode=wait 0 79=1
```


Para configurar a saída de **GPO 1** a **GPO 4**, consulte os seguintes comandos:

```bash
sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to high voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to high voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to high voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to high voltag


sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to low voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to low voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to low voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to low voltag
```


## UART

O Robotics J501 Mini fornece um conector JST padrão de 6 pinos para comunicação serial UART. 
UART e GPO utilizam a mesma interface JST. Esta interface é padrão para a funcionalidade GPO. **Se você precisar alternar para a funcionalidade UART, deverá apontar para uma nova device tree e reiniciar o dispositivo para que a alteração tenha efeito.**


Para comunicação **UART**, siga a seguinte fiação. Aqui, usamos a ferramenta USB para TTL como exemplo.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-real.png"/>
</div>

O esquema do datasheet de **UART** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

As definições de pinos para **J14** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>



:::warning
UART e GPO compartilham a mesma interface física. Por padrão, esta interface funciona como GPO. Se você precisar alternar para UART, consulte o conteúdo desta seção.
:::

Para diferentes módulos, você precisa baixar o arquivo de device tree correspondente.

Link de download `.dtb` para AGX Orin 32G:  
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb)  

Link de download `.dtb` para AGX Orin 64G:  
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb)  

Copie a device tree para o caminho especificado:
```bash
# AGX Orin 32G
sudo cp tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb /boot/

# AGX Orin 64G
sudo cp tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb /boot/
```

Faça backup e modifique `/boot/extlinux/extlinux.conf`, adicionando uma linha para apontar para o novo arquivo `.dtb`:

```bash
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
sudo vim /boot/extlinux/extlinux.conf
```

Com base no nome do arquivo de device tree que você está usando, adicione uma linha `FDT=/your_path` em `extlinux.conf`. Tomando AGX Orin 32G como exemplo:

```python
LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      FDT=/boot/tegra234-j501x-0000+p3701-0004-recomputer-mini.dtb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-edit.png"/>
</div>


O conector JST de 6 pinos **UART** é mapeado para `/dev/ttyTHS1` no Jetson. Você pode usar `minicom` para visualizar a transmissão e recepção de dados pela porta serial:

```bash
sudo apt install minicom
sudo minicom -D /dev/ttyTHS1
```


## RS485

A interface RS485 fornece um canal de comunicação diferencial robusto e resistente a ruídos, comumente utilizado em ambientes industriais. Ela suporta comunicação serial multidrop de longa distância e é ideal para conectar sensores, controladores de motor, CLPs e outros dispositivos industriais. 

### Conexão de Hardware

A Robotics J501-Mini fornece um conector JST de 4 pinos (GH 1.25) para RS485.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-real.png"/>
</div>

O diagrama esquemático do datasheet de **RS485** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-jst.png"/>
</div>

As definições dos pinos de **J8** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-ds.png"/>
</div>



### Instruções de Uso
Consulte os seguintes comandos para habilitar a interface **RS485**:

```bash
sudo gpioset --mode=wait 1 9=0  # Enable 120R resistance

sudo gpioset --mode=wait 0 126=0 # Enable RS485
```


A interface **RS485** é mapeada para `/dev/ttyTHS4` no Jetson. Você pode usar `cutecom` para testar a transmissão e recepção de dados seriais com um PC:

```bash
sudo apt install cutecom
sudo cutecom
```

Selecione `/dev/ttyTHS4`, configure tanto o Jetson quanto o PC para uma taxa de baud de 9600 e conecte o Jetson e o PC por meio de um módulo RS485 para USB.
O efeito da transmissão e recepção de dados seriais é mostrado na figura abaixo:

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_jetson.png" alt="Jetson side" height={200} />
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_PC.png" alt="PC side" height={200} />
</div>

## I2S

A interface I2S fornece um barramento de comunicação de áudio digital projetado para transmitir dados de áudio estéreo entre dispositivos. A Robotics J501-Mini suporta sinalização I2S padrão, permitindo entrada e saída de áudio de alta qualidade e baixa latência para aplicações como interação por voz, localização de som e processamento de áudio em tempo real.

### Conexão de Hardware
A Robotics J501-Mini fornece 1 conector JST de 5 pinos (GH 1.25) para **I2S**. 

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/I2S-real.png"/>
</div>


O diagrama esquemático do datasheet de **I2S** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-jst.png"/>
</div>


As definições dos pinos de **J9** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-ds.png"/>
</div>


### Instruções de Uso

Para habilitar **I2S**, você precisa configurá-lo em `jetson-io.py`. Execute o seguinte no terminal:

```bash
sudo python /opt/nvidia/jetson-io/jetson-io.py
```

Em seguida, consulte as quatro etapas abaixo para habilitar a interface I2S:

- etapa 1: Selecione a opção **Jetson 40-pin header**  
- etapa 2: Selecione **Configure header pins manually**  
- etapa 3: Selecione `i2s2`; após a seleção, ele será marcado com `[*]`  
- etapa 4: Salve as configurações e reinicie o Jetson  

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: '10px', 
  justifyContent: 'center', 
  alignItems: 'center' 
}}>

  <!-- Step 1 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 1</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/1-i2s.png" 
         alt="Step 1" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 3 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 3</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/3-i2s.png" 
         alt="Step 3" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 2 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 2</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-i2s.png" 
         alt="Step 2" 
         height={500} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 4 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 4</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/4-i2s.png" 
         alt="Step 4" 
         height={460} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

</div>


Após habilitar **I2S**, esta seção demonstra como usar I2S para acionar um alto-falante de dois canais. Primeiro, insira o seguinte no terminal:

```bash
amixer -c APE cset name="I2S2 Mux" "ADMAIF1" # Speaker
```

Se você estiver usando um microfone:
```bash
amixer -c APE cset name="ADMAIF2 Mux" "I2S2" # Microphone
```

Consulte o comando abaixo para acionar o alto-falante, onde `-c` deve ser alterado para o número de canais do alto-falante que você está usando:

```bash
speaker-test -t sine -f 440 -c 2
```

Você pode ver a saída no terminal quando o alto-falante é acionado normalmente, como mostrado na figura abaixo.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-speaker.png"/>
</div>

## RTC


A Robotics J501-Mini fornece um conector padrão de 2 pinos para **RTC** (3V). 

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc0.png"/>
</div>

O diagrama esquemático do datasheet de **RTC** é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc1.png"/>
</div>

As definições dos pinos de **J15** são as seguintes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc2.png"/>
</div>



Depois de conectar a bateria externa, você pode verificar o status de operação de `rtc0` (RTC principal, correspondente à bateria onboard) no terminal:

```bash
cat /sys/class/rtc/rtc0/power/runtime_status
```


## Porta de Expansão - GMSL

A placa carrier Robotics j501-Mini possui um conector de Expansão de Câmera para placa de extensão GMSL. Ela pode conectar e operar simultaneamente quatro câmeras GMSL ao mesmo tempo.

### Conexão de Hardware

A seguir estão os slots de conexão da placa de expansão de câmera GMSL da placa carrier Robotics j501-Mini (é necessário preparar uma placa de extensão com antecedência):

<div align="center">
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real1.png"/>
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real2.png"/>
</div>

A seguir estão os modelos de câmeras GMSL que já suportamos:

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A

### Instruções de Uso

:::note
Antes de habilitar a funcionalidade GMSL, certifique-se de que você instalou uma versão do JetPack com o driver da placa de expansão GMSL.
:::

### Configurar o arquivo Jetson IO

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p2.png"/>
</div>

:::note
Existem três arquivos de overlay no total, a saber, Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4 e Orbbec Gemini 335Lg. Eles correspondem respectivamente à câmera 3G do SG3S, à câmera 6G do SG2 e SG8S e à câmera da Orbbec. Como mostrado na Figura 3, configure o arquivo io de acordo com o modelo da sua câmera.
:::

**etapa 2.** Instale as ferramentas de configuração da interface de vídeo.

```bash
sudo apt update
sudo apt install v4l-utils
```

<!-- ### Use the camera of Gemini 335Lg

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### Usar as câmeras da Série SGxxx

**etapa 1.** Defina o formato do canal para o serializador e desserializador. O número da interface na figura corresponde ao número do serializador/desserializador.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-Interface.png"/>
</div>

```bash
  media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'

```

:::note
`ser_0_ch_0` é o primeiro canal do decodificador, `des_ch_0` é o serializador na primeira câmera, e o mesmo se aplica aos outros. Se a câmera conectada tiver uma resolução diferente, então a configuração aqui será baseada no formato real da câmera.
Precisamos definir o formato do canal para o serializador e o desserializador toda vez que o dispositivo reiniciar.
:::

**passo 2.** Defina a resolução da câmera.

:::info
Aqui demonstramos como configurar câmeras de diferentes modelos e resoluções.
:::

```bash
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video0
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video1
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0  -d /dev/video2
v4l2-ctl -V --set-fmt-video=width=3840,height=2160 -c sensor_mode=2  -d /dev/video3 
```

:::note
`--set-fmt-video` segue a resolução que é selecionada com base na câmera conectada. O sensor_mode também é escolhido de acordo. Atualmente, há três opções de sensor_mode, cada uma correspondendo a uma resolução diferente.

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**passo 3.** Inicie a câmera.

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video1 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video2 ! \
'video/x-raw,width=1920,height=1536,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video3 ! \
'video/x-raw,width=3840,height=2160,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## Tela

O Robotics J501 Mini está equipado com uma porta HDMI para saída de vídeo em alta resolução.

## Recursos

- [Esquemático da Placa Carrier reComputer Robotics J501-Mini](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_J501_datasheet.pdf)

<!-- - [reComputer Robotics J501-Mini Carrier Board Datasheet]() -->

- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
