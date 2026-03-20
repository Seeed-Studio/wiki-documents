---
description: Este wiki fornece uma introdução abrangente aos recursos de hardware e ao uso das interfaces da placa carrier reComputer Jetson Robotics J501. Ele abrange especificações detalhadas, módulos suportados, instruções de configuração e guias práticos para usar várias interfaces, como dois slots M.2 Key M, Ethernet 10GbE + 4x 1GbE, USB 3.0, quatro interfaces CAN (2 nativas + 2 SPI-para-CAN), UART, DI/DO, I2S e expansão de câmera GMSL2, ajudando os usuários a começar rapidamente com o desenvolvimento de robótica na plataforma J501.
title: Gravar Jetpack && Uso das Interfaces
tags:
  - reComputer Robotics J501
  - Flash Jetpack
  - Robótica
  - Uso das Interfaces
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /ai_robotics_recomputer_j501_robotics_getting_started
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 12/09/2025
  author: Lorraine
createdAt: '2026-01-12'
updatedAt: '2026-03-04'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_j501_robotics_getting_started/
---

# Hardware do Robotics J501 e Primeiros Passos

O reComputer Robotics J501 é uma placa carrier de IA de borda de alto desempenho projetada para aplicações avançadas de robótica e industriais. Compatível com módulos NVIDIA Jetson AGX Orin (32GB/64GB) no modo MAXN, oferece até 275 TOPS de desempenho de IA.

Equipada com amplas opções de conectividade — incluindo 1x 10GbE e 4x portas Ethernet 1GbE, dois slots M.2 Key M para SSDs NVMe, slots M.2 para módulos 5G e Wi‑Fi/BT, múltiplas portas USB 3.0, quatro interfaces CAN (2 nativas + 2 SPI-para-CAN), expansão de câmera GMSL2 e E/S abrangente incluindo DI/DO, I2S, UART e RS485 — ela atua como um poderoso cérebro robótico para fusão de múltiplos sensores complexos e processamento de IA em tempo real.

Pré-instalada com JetPack 6.2.1 e Linux BSP, garante uma implantação perfeita. Com suporte a frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch e ROS 2/1, o J501 conecta a tomada de decisão orientada por modelos de linguagem grandes ao controle físico de robôs, acelerando o desenvolvimento de robôs autônomos com interfaces prontas para uso e frameworks de IA otimizados.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱</font></span></strong>
    </a>
</div>

## Principais Recursos  

- **IA de alto desempenho**: Até 275 TOPS com módulos Jetson AGX Orin 32/64GB, GPU Ampere e mecanismos DLA
- **Conectividade rica**: Dois M.2 Key M (NVMe); Key E (Wi‑Fi/BT) + Key B (5G); 1x 10GbE + 4x 1GbE; 3x USB 3.0; 2x USB‑C
- **Quad CAN-FD**: 2x nativos + 2x interfaces SPI-para-CAN com isolamento elétrico
- **Visão GMSL2**: Interface GMSL2 única (1x) para conexão de câmera em alta velocidade
- **Design industrial**: Entrada DC 19–48V; operação -10~60°C; interfaces isoladas; JetPack 6.2.1 pré-instalado
- **Pronto para robótica**: Suporte a ROS 2/1, Isaac ROS; DI/DO, I2S, UART, RS485; otimizado para AMR e automação

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Módulo Jetson AGX Orin System on Module</th>
    </tr>
    <tr>
      <th style={{width: '25%'}}>Especificações</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5011</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5012</th>
    </tr>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson AGX Orin 32GB</td>
      <td>NVIDIA Jetson AGX Orin 64GB</td>
    </tr>
    <tr>
      <td>Desempenho de IA</td>
      <td>200 TOPS</td>
      <td>275 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1792 núcleos NVIDIA Ampere @ 930 MHz</td>
      <td>2048 núcleos NVIDIA Ampere @ 1,3 GHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 núcleos Arm Cortex-A78AE @ 2,0 GHz</td>
      <td>12 núcleos Arm Cortex-A78AE @ 2,2 GHz</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>32GB 256-bit LPDDR5 @ 204,8 GB/s</td>
      <td>64GB 256-bit LPDDR5 @ 204,8 GB/s</td>
    </tr>
    <tr>
      <td>Codificador de Vídeo</td>
      <td>1x 4K60 / 3x 4K30 / 6x 1080p60 / 12x 1080p30 (H.265)</td>
      <td>2x 4K60 / 6x 4K30 / 8x 1080p60 / 16x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Vídeo</td>
      <td>1x 8K30 / 2x 4K60 / 4x 4K30 / 9x 1080p60 / 18x 1080p30 (H.265)</td>
      <td>1x 8K30 / 3x 4K60 / 7x 4K30 / 11x 1080p60 / 22x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Câmera CSI</td>
      <td colSpan={2}>Até 6 câmeras (16 via canais virtuais)<br/>16 pistas MIPI CSI-2<br/>D-PHY 2.1 (até 40Gbps) / C-PHY 2.0 (até 164Gbps)</td>
    </tr>
    <tr>
      <td>Mecânico</td>
      <td colSpan={2}>100mm x 87mm<br/>Conector Molex Mirror Mezz de 699 pinos<br/>Placa de Transferência Térmica Integrada</td>
    </tr>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa Carrier</th>
    </tr>
    <tr>
      <th>Armazenamento</th>
      <td colSpan={2}>2x M.2 Key-M (SSD NVMe 2280)<br/>1x M.2 Key-B (para módulos 4G/5G)</td>
    </tr>
    <tr>
      <th>Rede</th>
      <td colSpan={2}>1x M.2 Key-E (Wi‑Fi/BT)<br/>1x RJ45 10GbE + 4x RJ45 1GbE</td>
    </tr>
    <tr>
      <th>USB</th>
      <td colSpan={2}>3x USB 3.0 Tipo-A<br/>1x USB 3.0 Tipo-C (Recovery)<br/>1x USB 2.0 Tipo-C (Debug UART)</td>
    </tr]
    <tr>
      <th>DI/DO/CAN</th>
      <td colSpan={2}>1x bloco de terminais 2x10P 3,81mm - 4x DI @12V + 4x DO @40V + 4x CAN (suporta CAN-FD, eletricamente isolado)</td>
    </tr>
    <tr>
      <th>GMSL</th>
      <td colSpan={2}>2x Conectores Mini-Fakra (para 8x câmeras GMSL2) (opcional)</td>
    </tr>
    <tr>
      <th>Serial</th>
      <td colSpan={2}>2x DB9 (RS232/422/485)</td>
    </tr>
    <tr>
      <th>Display</th>
      <td colSpan={2}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <th>Ventoinha</th>
      <td colSpan={2}>1×12 V (2,54 mm), 1×5 V (1,25 mm JST)</td>
    </tr>
    <tr>
      <th>Botão</th>
      <td colSpan={2}>1x Recovery + 1x Reset</td>
    </tr>
    <tr>
      <th>LED</th>
      <td colSpan={2}>3x LED (PWR, SSD e LED de usuário)</td>
    </tr>
    <tr>
      <th>RTC</th>
      <td colSpan={2}>1x suporte para bateria CR1220, 1x header RTC de 2 pinos</td>
    </tr>
    <tr>
      <th>Entrada de Energia</th>
      <td colSpan={2}>19–48V DC via bloco de terminais 5,08mm (adaptador de energia não incluído)</td>
    </tr>
    <tr>
      <th>Consumo de Energia</th>
      <td colSpan={2}>Módulo Jetson AGX Orin: até 60W (modo MAXN)<br/>Pico total do sistema: 75W (incluindo periféricos)</td>
    </tr>
    <tr>
      <th>Software</th>
      <td colSpan={2}>Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th>Mecânico</th>
      <td colSpan={2}>
        Dimensões: 210mm x 180mm x 87mm (com pés)<br/>
        Peso: 200g<br/>
        Montagem: Mesa / Parede / Trilho DIN (suporte DIN incluído nos acessórios)<br/>
        Temperatura de Operação: -10℃~60℃ (25W) / -10℃~55℃ (MAXN)
      </td>
    </tr>
    <tr>
      <th>Garantia</th>
      <td colSpan={2}>2 Anos</td>
    </tr>
    <tr>
      <th>Certificação</th>
      <td colSpan={2}>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>
</div>

**Especificações da Placa de Extensão GMSL (Opcional)**

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>Deserializador</th>
      <td>MAX96712</td>
    </tr>
    <tr>
      <th>Interface GMSL</th>
      <td>2x Conectores Robotics-Fakra macho</td>
    </tr>
    <tr>
      <th>Entrada GMSL</th>
      <td>Até 8x câmeras GMSL2</td>
    </tr>
    <tr>
      <th>Método de Conexão</th>
      <td>Cabo GMSL2 Fakra 1-para-4 M-M</td>
    </tr>
    <tr>
      <th>Recurso da Interface POC</th>
      <td>Suporta transmissão simultânea de energia e dados</td>
    </tr>
  </tbody>
</table>
</div>

## Visão Geral do Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_2.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_3.png"/>
</div>

## 📦 Gravar o JetPack OS

### Módulo Suportado

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Robotics J501
- Cabo USB Tipo‑C para transmissão de dados

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

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

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
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAXbYCZzHpuRYt4WJFhzqLJAUxZVvEo8cq4OVmZZmEE82E?e=IZ6csg">Download</a></td>
      <td>46167c63566fa07d9882be338becd44<br/>7021c8fc0a73da18d0291c414cf5c6f4a  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAWnjh2iWzeRI1rKN5Bb_HxAX3P3GxPMHSb-60VmCPCgx4?e=a5yyXH">Download</a></td>
      <td>e868fd8c7ad05d3acc8c9808f42e1835<br/>28f11df14f48cb6ae16464adb4f23d1f </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do Jetpack6 tem aproximadamente **14,2GB** de tamanho e deve levar cerca de 60 minutos para ser baixado. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host com Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido na wiki, isso confirma que o firmware que você baixou está completo e íntegro.
:::

⚙️ **Todos os arquivos `.dts` e outros códigos-fonte das carrier boards Jetson da SEEED podem ser baixados em** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### Entrar no modo Force Recovery

:::info
Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.
:::

<details>

<summary> Passo a passo </summary>

**Passo 1.** Conecte um cabo de transmissão de dados USB Tipo‑C entre a porta USB2.0 DEVICE e o PC host com Ubuntu.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/flash_1.png" />
</div>

**Passo 2.** Use um pino e insira no orifício RECOVERY para pressionar o botão de recuperação e, enquanto o mantém pressionado.

**Passo 3.** Conecte a fonte de alimentação.

**Passo 4.** Solte o botão de recuperação.

**Passo 5.** No PC host com Linux, abra uma janela do Terminal e digite o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas, de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

A imagem abaixo é para o AGX Orin 32GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Gravar no Jetson

**Passo 1:** Extraia o arquivo de imagem baixado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-robo-agx-orin-j501x
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem‑sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos.
:::

**Passo 3:** Conecte o Robotics J501 a um monitor usando o adaptador PD para HDMI para conectar a um monitor que suporte entrada HDMI, ou conecte diretamente a um monitor que suporte entrada PD usando o cabo PD, e finalize a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

## 🔌 Uso das Interfaces

A seguir serão apresentadas as várias interfaces da placa Robotics J501 e como usá‑las.

## M.2 Key M

A J501 inclui dois slots M.2 Key M que suportam SSDs NVMe PCIe Gen4x4 para expansão de armazenamento em alta velocidade.

### SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### Conexão de Hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m_1.png"/>
</div>

### Instruções de Uso

Abra o terminal no dispositivo Jetson e insira o seguinte comando para testar a velocidade de leitura e gravação do SSD.

**Passo 1.** Crie o diretório e o arquivo de teste:

```bash
mkdir ssd
touch ~/ssd/test
```

**Passo 2.** Testar o desempenho de gravação:

```bash
dd if=/dev/zero of=/home/$USER/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m2.png"/>
</div>

**Passo 3.** Verificar informações do SSD:

```bash
nvme list
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>

:::danger
Execute o comando sudo rm /home/$USER/ssd/test para excluir os arquivos de cache após a conclusão do teste.
:::

## M.2 Key E (WiFi/BT)

O slot M.2 Key E suporta módulos Wi‑Fi 6 e Bluetooth 5.x para conectividade sem fio.


### Conexão de Hardware

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_1.png"/>
</div>

:::tip

**Nota: Antes de usar a interface, você deve remover os parafusos do gabinete e instalar o módulo correspondente, conforme mostrado na figura abaixo.**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### Instruções de Uso

**Teste de desempenho:**
Para testar o desempenho do Wi‑Fi, use o seguinte comando (substitua o endereço IP pelo do seu servidor de teste):

```bash
# On server: iperf3 -s
# On client:
iperf3 -c 192.168.7.157
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_2.png"/>
</div>

A funcionalidade Bluetooth está disponível através do slot M.2 Key E.
**Teste de Bluetooth:**
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_3.png"/>
</div>

## M.2 Key B (Módulo 4G/5G)

O slot M.2 Key B suporta módulos celulares 4G/5G com suporte a Nano SIM.

### Conexão de Hardware

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/keyb-keye.png"/>
</div>

:::tip

**Nota: Antes de usar a interface, você deve remover os parafusos do gabinete e instalar o módulo correspondente, conforme mostrado na figura abaixo.**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### Instruções de Uso

**Passo 1.** Verificar reconhecimento de hardware

```bash
lsusb 
```

Este comando exibe uma lista de todos os dispositivos USB conectados ao sistema, juntamente com seu fabricante (ID), tipo e outras informações. Por exemplo, a saída pode mostrar um dispositivo da Quectel Wireless Solutions Co., Ltd. EM12‑G, indicando que o módulo 5G está presente.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_1.png"/>
</div>

**Passo 2.** Confirmar o carregamento do driver
É essencial garantir que o driver option, que é necessário para o módulo 5G, esteja carregado. Podemos usar o comando lsmod para verificar.

```bash
lsmod | grep option 
```

Se o driver option for carregado com sucesso, informações relevantes sobre o driver serão exibidas na saída.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_2.png"/>
</div>

**Passo 3.** Configurar o ModemManager
O ModemManager é uma ferramenta para gerenciar dispositivos modem, e precisa ser instalado e reiniciado.

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

O comando apt install é usado para instalar o pacote ModemManager, enquanto o systemctl restart reinicia o serviço ModemManager para garantir que as novas configurações entrem em vigor.

**Passo 4.** Verificar a identificação do módulo
Podemos usar o comando mmcli -L para verificar se o ModemManager consegue identificar corretamente o módulo 5G.

```bash
mmcli -L 
```

Se o módulo 5G for reconhecido, será exibida uma saída semelhante a /org/freedesktop/ModemManager1/Modem/0, indicando o caminho para o dispositivo de modem detectado.
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_3.png"/>
</div>

**Passo 5.** Definir o APN
O APN (Access Point Name) é crucial para conectar um dispositivo móvel à rede. Usaremos o comando nmcli para criar um perfil de bearer. Tomando a China Mobile como exemplo, podemos criar um arquivo de configuração com os seguintes comandos:

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando adiciona uma nova conexão do tipo GSM (Global System for Mobile Communications), especificando o APN como "CMNET" e usando configuração IPv4 automática.

**Passo 6.** Ativar a conexão
Depois de criar o perfil de bearer, precisamos ativar a conexão.

```bash
sudo nmcli con up "gsm" 
```

Este comando ativa a conexão GSM e, se bem‑sucedido, uma mensagem de confirmação será exibida.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_4.png"/>
</div>

**Passo 7.** Re‑verificar a identificação do módulo
Execute novamente o comando mmcli -L para garantir que o módulo continue sendo reconhecido após a configuração do APN.

```bash
mmcli -L 
```

**Passo 8.** Verificar o status do módulo
Por fim, podemos usar o comando mmcli -m 0 para ver informações detalhadas sobre o módulo, como alocação de IP, operadora e status da conexão de rede.

```bash
mmcli -m 0 
```

Este comando fornece detalhes abrangentes sobre o módulo 5G, incluindo seu fabricante, modelo, tecnologias de rede suportadas e atuais, status do dispositivo e operadoras de rede conectadas.
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_5.png"/>
</div>

## Ethernet

O Robotics J501 fornece 1x 10GbE (nativo) e 4x 1GbE (via switch PCIe) portas RJ45. A porta 10GbE possui PHY TI TQSPH‑10G, suportando cinco velocidades: 10/5/2.5/1/0.1 GbE. As portas 1GbE suportam velocidades de 10/100/1000M.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_1.png"/>
</div>

**Indicadores LED por porta:**

- **LED verde:** ON para link de 10G/5G/2.5G/1000M
- **LED Amarelo:** Pisca para atividade de rede

Para testar a velocidade da porta Ethernet, use `iperf3` da seguinte forma:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` é o endereço IP do servidor iperf3. O cliente se conectará a este servidor para realizar um teste de largura de banda.
`<bind_ip>` vincula o endereço IP local especificado como a origem do tráfego de teste.
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_speed.png"/>
</div>

## LED

O J501 possui vários LEDs de status:

- **PWR LED:** Status de energia (verde)
- **ACT LED:** Atividade do sistema (amarelo)
- **USR LED:** Controle via GPIO

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_1.png"/>
</div>

### Instruções de Uso

O seguinte demonstra como controlar os LEDs USER para serem verde, vermelho ou azul.

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
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_test.png"/>
</div>

## USB

O Robotics J501 fornece 4x portas USB 3.2 Tipo-A (através de um hub interno USB 3.1 Gen1, suportando taxas de dados de até 5Gbps para conectar periféricos de alta velocidade, dispositivos de armazenamento ou câmeras) e 1x porta USB 2.0 Tipo-C de depuração (que funciona como um console serial para acessar logs do sistema, depurar problemas de boot e realizar atualizações de firmware).

### Teste de Velocidade USB-A

Crie um script para testar a velocidade do dispositivo USB:

```bash
vim test_usb.sh
```

Cole o seguinte conteúdo:
<details>
<summary> test_usb.sh </summary>
```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF

```

</details>

Torne o script executável e teste:

```bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/USB-A_Speed_Test.png"/>
</div>

:::note
Confirme primeiro o ponto de montagem real do seu dispositivo USB usando o comando `df -h` ou `lsblk`!
:::

### Porta USB 2.0 Tipo-C

Usando esta porta serial, através do cabo de dados USB-C, você pode monitorar as informações de depuração de entrada e saída no lado do PC.

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug.png"/>
</div>

**Passo 1.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo) e crie uma nova sessão.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Passo 2.** Selecione a ferramenta Serial.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Passo 3.** Selecione a porta serial correspondente, defina a taxa de baud para 115200 e clique em "OK".

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_1.png"/>
</div>

**Passo 4.** Faça login no seu reComputer Super com o nome de usuário e a senha.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_2.png"/>
</div>

## Ventoinha

O Robotics J501 fornece dois conectores de ventoinha PWM de 4 pinos projetados para resfriar tanto o módulo Jetson quanto os componentes da placa carrier:

- **Ventoinha 12V**: conector de 2,54 mm, máx. 1,5A, adequado para resfriamento de alto desempenho
- **Ventoinha 5V**: conector JST de 1,25 mm, máx. 1,5A, ideal para resfriamento silencioso de baixa potência

O controle PWM permite ajuste dinâmico e preciso da velocidade com base na temperatura do sistema, possibilitando um resfriamento eficiente enquanto minimiza o ruído e o consumo de energia.

**Pinagem da Ventoinha 12V:**

O conector da ventoinha de 12V (2,54 mm) possui a seguinte pinagem:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan_12v_pinout.png"/>
</div>

### Instruções de Uso

**Controle PWM Manual:**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan.png"/>
</div>

:::note
A política térmica padrão é pré-configurada em `/etc/nvpmodel.conf`. Para perfis personalizados, consulte o [NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta `jtop`.

Você pode inserir o seguinte comando no terminal para instalar o **jtop**.

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Em seguida, reinicie seu reComputer Mini:

```bash
sudo reboot
```

Após instalar o **jtop**, você pode iniciá-lo no terminal:

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## CAN

O reComputer Robotics J501 está equipado com 4 interfaces CAN independentes (CAN 0, CAN 1, CAN 2, CAN 3), que compartilham o conector J25 2x10P com interfaces DI/DO. Essas interfaces suportam tanto os protocolos de comunicação Classic CAN quanto CAN FD, com alta capacidade de anti-interferência e transmissão de dados em tempo real, tornando-as adequadas para cenários de controle industrial, como eletrônica automotiva, automação industrial e robótica.

### Instruções de Uso

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_1.png"/>
</div>
Este é o diagrama esquemático da interface CAN.

### Comunicação CAN

Esta seção demonstra a conexão CAN0↔CAN1 e CAN2↔CAN3 no Jetson e mostra como enviar e receber dados entre esses pares, tanto no modo Classic CAN quanto no modo CAN‑FD.

| Nome do Canal | Tipo de Interface | Nome do Pino | Chip GPIO | Número GPIO | Controle do Resistor de Terminação |
|--------------|------------------|--------------|-----------|-------------|-------------------------------------|
| CAN0         | Nativo           | PAA.04       | gpiochip1 | 4           | gpiochip1 line4 (PAA.04)           |
| CAN1         | Nativo           | PAA.07       | gpiochip1 | 7           | gpiochip1 line7 (PAA.07)           |
| CAN2         | SPI-to-CAN       | -            | gpiochip2 | 10          | gpiochip2 line10                    |
| CAN3         | SPI-to-CAN       | -            | gpiochip2 | 12          | gpiochip2 line12                    |

Os resistores de terminação para CAN0 e CAN1 podem ser controlados através de dois pinos: PAA.04, localizado em gpiochip1 line4, e PAA.07, localizado em gpiochip1 line7.  

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

Consulte os seguintes comandos para definir `PAA.04` e `PAA.07` para 0:

```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

Consulte os seguintes comandos para definir `PAA.04` e `PAA.07` para 1:

```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```

#### Modo Classic CAN

O script a seguir implementa o teste de comunicação em loopback entre CAN0/CAN1 e CAN2/CAN3, incluindo habilitar o resistor terminal, configurar a taxa de bits e a transmissão bidirecional de dados.

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_2.png"/>
</div>

O diagrama de fiação é mostrado abaixo:

| De | Para |
| --- | --- |
| CAN0_H | CAN1_H |
| CAN0_L | CAN1_L |
| CAN2_H | CAN3_H |
| CAN2_L | CAN3_L |

O diagrama de fiação é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/CAN-connect.png"/>
</div>

Crie `test_can.sh` para testar a transmissão e recepção de dados entre CAN0↔CAN1 e CAN2↔CAN3 no modo padrão:

```bash
touch test_can.sh
sudo chmod +x test_can.sh
sudo ./test_can.sh
```

O código do script para `test_can.sh` é o seguinte:

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffer sizes
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# Set bitrate, 1 Mbps
BITRATE=1000000
echo "$PW" | sudo -S ip link set can0 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can1 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up

echo "$PW" | sudo -S ip link set can2 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can3 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 & # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 & # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 & # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 & # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 & 
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump runs until you Ctrl+C)
wait
```

</details>

:::note
No script de teste CAN, substitua PW pela sua própria senha do Jetson.
:::

A transmissão e recepção de dados entre **CAN0** e **CAN1** serão concluídas:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test.png"/>
</div>

#### Modo CAN-FD

O CAN FD oferece suporte a taxas de transmissão de dados mais altas e comprimentos de quadro de dados maiores. O script a seguir implementa o teste de loopback CAN FD.

Crie `test_canfd.sh` para testar a transmissão e recepção de dados entre **CAN0↔CAN1** e **CAN2↔CAN3** no modo CAN-FD:

```bash
touch test_canfd.sh
sudo chmod +x test_canfd.sh
sudo ./test_canfd.sh
```

O código do script para `test_canfd.sh` é o seguinte:

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffers
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# ---- CAN-FD parameters ----
BITRATE=500000        # Arbitration (nominal) bitrate
DBITRATE=5000000      # Data phase bitrate (FD fast mode)

# Configure CAN-FD: arbitration bitrate + data bitrate + FD on + error reporting + auto restart
echo "$PW" | sudo -S ip link set can0 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can1 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can2 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can3 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100

echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 &   # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 &   # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 &  # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 &  # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 &
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN-FD test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump will run until you Ctrl+C)
wait
```

</details>

:::note
No script de teste CAN, substitua PW pela sua própria senha do Jetson.
:::

A transmissão e recepção de dados entre **CAN0↔CAN1** e **CAN2↔CAN3** serão concluídas:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test_2.png"/>
</div>

## DI/DO

As interfaces DI/DO do reComputer Robotics J501 são integradas no conector J25 2x10P, compartilhando a interface com as interfaces CAN. Elas suportam 4 canais de entrada digital e 4 canais de saída digital, apresentando transmissão de sinal estável e adaptação de tensão em nível industrial, adequadas para conectar sensores digitais, relés e outros dispositivos periféricos.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_test.png"/>
</div>

### Conexão de Hardware

#### Canais de Entrada Digital (DI)

| Nome do Canal | Características de Tensão | Rótulo GPIO | Nome do Pino | Chip GPIO | Número GPIO |
|--------------|---------------------------|-------------|-------------|-----------|-------------|
| DI_12V_1     | Entrada adaptativa de 12V | DI_1_GPIO17 | PP.04       | gpiochip0 | 96          |
| DI_12V_2     | Entrada adaptativa de 12V | DI_1_GPIO18 | PQ.04       | gpiochip0 | 104         |
| DI_12V_3     | Entrada adaptativa de 12V | DI_1_GPIO19 | PN.02       | gpiochip0 | 86          |
| DI_12V_4     | Entrada adaptativa de 12V | DI_1_GPIO33 | PM.07       | gpiochip0 | 83          |

#### Canais de Saída Digital (DO)

| Nome do Canal | Características de Tensão | Rótulo GPIO | Nome do Pino | Chip GPIO | Número GPIO | Informação Adicional |
|--------------|---------------------------|-------------|-------------|-----------|-------------|----------------------|
| DO_40V_1     | Saída open-drain; ~0V (baixo) quando não puxado para alto, 12V (alto) quando puxado para alto | DO_1_GPIO | PAA.04 | gpiochip1 | 4 | Número correspondente: 320 |
| DO_40V_2     | Saída open-drain; ~0V (baixo) quando não puxado para alto, 12V (alto) quando puxado para alto | DO_2_GPIO | PAA.07 | gpiochip1 | 7 | Número correspondente: 323 |
| DO_40V_3     | Saída open-drain; ~0V (baixo) quando não puxado para alto, 12V (alto) quando puxado para alto | DO_3_GPIO | PBB.01 | gpiochip1 | 9 | Número correspondente: 325 |
| DO_40V_4     | Saída open-drain; ~0V (baixo) quando não puxado para alto, 12V (alto) quando puxado para alto | DO_4_GPIO | PBB.00 | gpiochip1 | 8 | Número correspondente: 324 |

As principais definições de pinos para as interfaces DI/DO no conector J25 são as seguintes (a numeração dos pinos corresponde ao conector físico):

| Número do Pino | Rótulo de Função | Descrição |
|----------------|------------------|-----------|
| 1              | DI_12V_1         | Canal de Entrada Digital 12V 1 |
| 3              | DI_12V_2         | Canal de Entrada Digital 12V 2 |
| 5              | DI_12V_3         | Canal de Entrada Digital 12V 3 |
| 7              | DI_12V_4         | Canal de Entrada Digital 12V 4 |
| 9              | GND_DI           | Terra para Canais de Entrada Digital |
| 2              | DO_40V_1         | Canal de Saída Digital 40V 1 |
| 4              | DO_40V_2         | Canal de Saída Digital 40V 2 |
| 6              | DO_40V_3         | Canal de Saída Digital 40V 3 |
| 8              | DO_40V_4         | Canal de Saída Digital 40V 4 |
| 10             | GND_DO           | Terra para Canais de Saída Digital |

:::note
Para o pinout completo (incluindo interfaces CAN), consulte a documentação de hardware do reComputer Robotics J501 para evitar conexões incorretas.
:::

### Instruções de Uso

**Operação de Saída Digital (DO)**

As interfaces DO adotam saída open-drain. Você pode definir o nível de saída (alto/baixo) por meio de comandos para controlar periféricos como relés e LEDs.

Execute o seguinte comando para habilitar o canal DO (saída de 12V, alimentada pelo resistor de pull-up externo e fonte de alimentação de 12V):

```
# Enable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=1

# Enable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=1

# Enable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=1

# Enable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=1
```

DO antes de puxar para alto:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_before.png"/>
</div>

DO após puxar para alto:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/do_after.png"/>
</div>

Execute o seguinte comando para desabilitar o canal DO (saída ~0V):

```
# Disable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=0

# Disable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=0

# Disable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=0

# Disable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=0
```

**Operação de Entrada Digital (DI)**

Use o comando `gpioget` para ler o nível de entrada do canal DI (valor de retorno `1` = nível alto, `0` = nível baixo) e obter o status dos dispositivos periféricos.

O comando para ler o Nível do Canal DI é o seguinte:

```
# Read DI_12V_1 (gpiochip0 96) status
gpioget gpiochip0 96

# Read DI_12V_2 (gpiochip0 104) status
gpioget gpiochip0 104

# Read DI_12V_3 (gpiochip0 86) status
gpioget gpiochip0 86

# Read DI_12V_4 (gpiochip0 83) status
gpioget gpiochip0 83
```

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_set.png"/>
</div>

## SPI

### Conexão de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi.png"/>
</div>

### Instruções de Uso

Use fios Dupont para conectar os pinos principais do canal SPI de destino (tomando /dev/spidev2.0 como exemplo):
Conecte o pino MOSI do SPI2.0 ao seu pino MISO (realizando transmissão/recepção de dados em loopback).

O diagrama de fiação é o seguinte:
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_conn_2.png"/>
</div>

:::note
Para usar o SPI, remova a tampa lateral do dispositivo com uma chave de fenda, como mostrado acima.
:::

**Passo 1: Carregar o Módulo de Kernel SPI (Pré-requisito)**
Antes de operar a interface SPI, certifique-se de que o módulo de kernel `spidev` esteja carregado (o sistema padrão pode pré-carregá-lo, mas é recomendável verificar manualmente):

```bash
sudo modprobe spidev
```

:::note
Se o comando for executado sem mensagens de erro, significa que o módulo foi carregado com sucesso; se o módulo já estiver carregado, o comando não retornará nenhuma informação, o que é um fenômeno normal.
:::

**Passo 2: Ver Visualizar os Nós de Dispositivo SPI**
Digite o seguinte comando no terminal para visualizar o nome do dispositivo mapeado pela interface SPI do reComputer Robotics J501:

```bash
ls /dev/spidev*
```

Se nenhum nó de dispositivo for exibido, isso significa que o módulo `spidev` não foi carregado com sucesso. Execute novamente `sudo modprobe spidev` e verifique o log do sistema para solução de problemas.

**Etapa 3: Obter e Compilar o Código de Teste SPI**
Obtenha o código de teste `spidev-test` do GitHub e compile-o:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Etapa 4: Executar o Programa de Teste SPI**
Digite o seguinte comando no terminal para executar o programa de teste SPI (tomando `/dev/spidev2.0` como exemplo):

```bash
sudo ./spidev_test -v -D /dev/spidev2.0 -s 100000
```

**Etapa 5: Verificar o Resultado do Teste**
Após executar o comando de teste, você pode observar no terminal o status de transmissão e recepção de dados da interface SPI2.0. A saída principal é a seguinte:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_out.png"/>
</div>

> Padrão de julgamento principal: Os dados TX (transmitidos) são consistentes com os dados RX (recebidos), indicando que o teste de loopback SPI foi bem-sucedido e que a função da interface SPI está normal.

## UART

O reComputer Robotics J501 está equipado com 2 interfaces UART independentes (UART1 e UART2) que suportam os modos de comunicação RS232, RS422 e RS485, apresentando transmissão de sinal estável e ampla compatibilidade com dispositivos periféricos.

### Conexão de Hardware

#### Canais da Interface UART

| Nome do Canal | Nó do Dispositivo | Modos Suportados | Taxa de Baud Padrão | Comando de Habilitação de GPIO | Método de Troca de Modo |
|--------------|-------------------|------------------|---------------------|-------------------------------|--------------------------|
| UART1 (DB9-1) | /dev/ttyTHS1      | RS232, RS422, RS485 | RS232: 115200 bps; RS422/RS485: 9600 bps | `gpioset --mode=wait gpiochip0 2=0` | Chave DIP SW3 (DIP de 8 pinos) |
| UART2 (DB9-2) | /dev/ttyTHS4      | RS232 (padrão)   | 115200 bps          | `gpioset --mode=wait gpiochip2 15=0` | RS232 fixa (sem chave) |

**Definição de Pinout (Conector DB9)**

A função de cada pino DB9 varia de acordo com o modo de comunicação. Consulte a tabela abaixo para o cabeamento correto (a numeração dos pinos segue as especificações padrão do conector DB9 macho):

| Número do Pino DB9 | Função no Modo RS232 | Função no Modo RS422 | Função no Modo RS485 |
|--------------------|----------------------|----------------------|----------------------|
| 1                  | -                    | TXD- (Transmit Data-) | Data- (Differential Data-) |
| 2                  | RXD (Receive Data)   | TXD+ (Transmit Data+) | Data+ (Differential Data+) |
| 3                  | TXD (Transmit Data)  | RXD+ (Receive Data+)  | -                    |
| 4                  | -                    | RXD- (Receive Data-)  | -                    |
| 5                  | GND (Ground)         | GND (Ground)         | GND (Ground)         |
| 6                  | -                    | -                    | -                    |
| 7                  | RTS (Request to Send) | -                   | -                    |
| 8                  | CTS (Clear to Send)  | -                    | -                    |
| 9                  | -                    | -                    | -                    |

**Configuração de Modo (Chave DIP SW3)**

Somente a UART1 (DB9-1) suporta troca de modo por meio da chave DIP SW3 (UART2 é fixa em RS232). A chave é do tipo DIP de 8 pinos, com pinos de configuração principais rotulados como MODE_0, MODE_1 e MODE_2 no esquema.

A interface é mostrada na figura abaixo:
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/Switch.png"/>
</div>

**Regras de Configuração**

| Modo de Operação | Combinação da Chave DIP (MODE_2, MODE_1, MODE_0) | Operação do Estado da Chave |
|------------------|----------------------------------------------------|------------------------------|
| RS232            | 0 (OFF), 0 (OFF), 1 (ON)                           | MODE_0: alternar para ON; MODE_1/MODE_2: manter OFF |
| RS422            | 0 (OFF), 0 (OFF), 0 (OFF) ou 1 (ON), 0 (OFF), 0 (OFF) | MODE_0/MODE_1: manter OFF; MODE_2: opcional (ON/OFF) |
| RS485            | 0 (OFF), 1 (ON), 0 (OFF) ou 1 (ON), 1 (ON), 0 (OFF) | MODE_1: alternar para ON; MODE_0/MODE_2: opcional (ON/OFF) |

:::note
Após concluir a conexão de hardware, use um software de terminal (por exemplo, CuteCom) para testar a função de comunicação UART. Se o CuteCom não estiver instalado, execute `sudo apt-get install cutecom` para instalá-lo. Certifique-se de que o canal UART foi habilitado por meio do comando GPIO.
:::

### Instruções de Uso

**Comandos de Habilitação de GPIO**

Antes de conectar, execute o comando de habilitação de GPIO no terminal para ativar o canal UART correspondente:

```bash
# Enable UART1 (ttyTHS1)
sudo gpioset --mode=wait gpiochip0 2=0

# Enable UART2 (ttyTHS4)
sudo gpioset --mode=wait gpiochip2 15=0
```

#### Teste em Modo RS232

Aqui você pode usar um adaptador USB para RS232 para testar a interface. Utilizamos o [Adaptador UGREEN USB para RS232](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nossos testes.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_1.png"/>
</div>

O diagrama de fiação é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/232-PC.png"/>
</div>

**Etapa 1: Iniciar o CuteCom**
Execute `sudo cutecom` para iniciar o software de terminal CuteCom.

**Etapa 2: Configurar Parâmetros da Porta Serial**
Configure a porta serial com os seguintes parâmetros:

- Dispositivo: `/dev/ttyTHS1` (UART1) ou `/dev/ttyTHS4` (UART2)
- Taxa de Baud: 115200 bps
- Bits de Dados: 8, Paridade: Nenhuma, Bits de Parada: 1, Controle de Fluxo: Nenhum

**Etapa 3: Abrir a Porta Serial**
Clique em "Open Device" para abrir a porta serial.

**Etapa 4: Enviar Dados de Teste**
Envie dados de teste (por exemplo, "232 test from jetson") e verifique a recepção de dados pelo dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_2.png"/>
</div>
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_3.png"/>
</div>

#### Teste em Modo RS485

Aqui você pode usar um adaptador USB para RS485 para testar a interface. Utilizamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

O diagrama de fiação é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**Etapa 1: Iniciar o CuteCom**
Execute `sudo cutecom` para iniciar o software de terminal CuteCom.

**Etapa 2: Configurar Parâmetros da Porta Serial**
Configure a porta serial com os seguintes parâmetros:

- Dispositivo: `/dev/ttyTHS1`
- Taxa de Baud: 9600 bps
- Bits de Dados: 8, Paridade: Nenhuma, Bits de Parada: 1, Controle de Fluxo: Nenhum

**Etapa 3: Abrir a Porta Serial**
Clique em "Open Device" para abrir a porta serial.

**Etapa 4: Enviar Dados de Teste**
Envie dados de teste (por exemplo, "485 test from jetson") e verifique a recepção de dados pelo dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs485_1.png"/>
</div>

#### Teste em Modo RS422

Aqui você pode usar um adaptador USB para RS422 para testar a interface. Utilizamos o [Adaptador DTech USB para RS485](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nossos testes.

O diagrama de fiação é mostrado abaixo:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**Etapa 1: Iniciar o CuteCom**
Execute `sudo cutecom` para iniciar o software de terminal CuteCom.

**Etapa 2: Configurar Parâmetros da Porta Serial**
Configure a porta serial com os seguintes parâmetros:

- Dispositivo: `/dev/ttyTHS1`
- Taxa de Baud: 9600 bps
- Bits de Dados: 8, Paridade: Nenhuma, Bits de Parada: 1, Controle de Fluxo: Nenhum

**Etapa 3: Abrir a Porta Serial**
Clique em "Open Device" para abrir a porta serial.

**Etapa 4: Enviar Dados de Teste**
Envie dados de teste (por exemplo, "422 test from jetson") e verifique a recepção de dados pelo dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs422.png"/>
</div>

## RTC

O reComputer Robotics J501 inclui um RTC de hardware com bateria de backup para manter a hora com precisão. Existem duas maneiras de fornecer energia de backup ao RTC:

1. Usando o suporte para bateria tipo moeda CR1220 (J14)
2. Usando o conector RTC de 2 pinos - J4 para conexão de alimentação externa

### Conexão de Hardware

**Método 1: Usando o Suporte para Bateria Tipo Moeda CR1220**

Conecte uma bateria tipo moeda CR1220 de 3 V ao soquete RTC na placa, como mostrado abaixo. Certifique-se de que a extremidade positiva (+) da bateria esteja voltada para cima.

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_0.png"/>
</div>

**Método 2: Usando o Conector RTC de 2 Pinos**

O conector RTC de 2 pinos fornece uma maneira alternativa de conectar alimentação externa ao RTC.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2pin_pinout.png"/>
</div>

### Instruções de Uso

**Etapa 1.** Conecte uma bateria ao RTC conforme mencionado acima.

**Etapa 2.** Ligue o reComputer Robotics J501.

**Etapa 3.** No desktop do Ubuntu, clique no menu suspenso no canto superior direito, navegue até `Settings > Date & Time`, conecte-se a uma rede por meio de um cabo Ethernet e selecione **Automatic Date & Time** para obter a data/hora automaticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_1.png"/>
</div>

:::note
Se você não tiver se conectado à internet via Ethernet, poderá definir a data/hora manualmente aqui.
:::

**Etapa 4.** Abra uma janela de terminal e execute o comando abaixo para verificar a hora do relógio de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Passo 5.** Desconecte a conexão de rede e reinicie o dispositivo. Você verá que o horário do sistema perdeu a alimentação, mas ainda funciona normalmente.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2.png"/>
</div>

## Exibição

O Robotics J501 é equipado com uma interface HDMI para saída de vídeo em alta resolução.

## Porta de Extensão

A placa carrier Robotics J501 possui um conector de expansão de câmera para placa de extensão GMSL. Ela pode conectar e operar simultaneamente quatro câmeras GMSL ao mesmo tempo.

### Conexão de Hardware

A seguir estão os slots de conexão da placa de expansão de câmera GMSL da placa carrier Robotics J501 (é necessário preparar uma placa de extensão com antecedência):

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_1.png"/>
  </div>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_2.png"/>
  </div>
</div>

A seguir estão os modelos de câmeras GMSL que já suportamos:

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Instruções de Uso

:::note
Antes de habilitar a funcionalidade GMSL, verifique se você instalou uma versão do JetPack com o driver da placa de expansão GMSL.
:::

### Configurar o arquivo Jetson IO

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_1.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_2.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_3.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_4.png"/>
</div>

:::note
Existem ao todo três arquivos de overlay, a saber, Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4 e Orbbec Gemini 335Lg. Estes correspondem, respectivamente, à câmera 3G da SG3S, às câmeras 6G da SG2 e SG8S e à câmera da Orbbec. Conforme mostrado na Figura 3, configure o arquivo io de acordo com o modelo da sua câmera.
:::

**passo 2.** Instale as ferramentas de configuração da interface de vídeo.

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
```
<!-- 
### Use the camera of Gemini 335Lg

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### Usar as câmeras da Série SGxxx

**passo 1.** Defina o modo de sincronização de quadros (não é habilitado por padrão!).

:::info
Aqui mostramos como configurar câmeras de diferentes modelos e resoluções.
:::

```bash
#enables frame synchronization
v4l2-ctl -d /dev/video0 --set-ctrl=trig_mode=1
#Set the frame rate of the camera
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 --stream-mmap -d /dev/video0
#Set the camera format
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 -d /dev/video0
```

:::note
`trig_mode = 1` habilita a sincronização de quadros, enquanto `trig_mode = 0` desabilita a sincronização de quadros. A configuração padrão é desabilitar a sincronização de quadros.

`--set-fmt-video` segue a resolução que é selecionada com base na câmera conectada. Atualmente, há três opções de sensor_mode, cada uma correspondendo a uma resolução diferente.

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**passo 2.** Inicie a câmera.

```bash
gst-launch-1.0 \
    v4l2src device=/dev/video0 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video1 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video2 ! \
    video/x-raw,format=YUY2,width=1536,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video3 ! \
    video/x-raw,format=YUY2,width=3840,height=2160,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_preview.png"/>
</div>

## Recursos

- [Esquemático da Placa Carrier reComputer Robotics J501](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer%20Robotics%20J501%20Main%20Board%20for%20Jetson%20AGX%20Orin_V1.0_SCH_2512161.pdf)
- [Datasheet da Placa Carrier reComputer Robotics J501](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer_robotics_J501_datasheet.pdf)
- [Catálogo de Produtos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparação Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de Sucesso Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Código-fonte do L4T da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

<!-- - [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp) -->
<!-- - [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf) -->
## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
