---
description: Este wiki oferece uma introdução abrangente aos recursos de hardware e ao uso das interfaces da placa carrier reComputer Jetson Robotics J401. Ele cobre especificações detalhadas, módulos compatíveis, instruções de configuração e guias práticos para usar várias interfaces, como expansão de câmera M.2, Ethernet, USB, CAN, UART, I2C e GMSL2, ajudando os usuários a começar rapidamente com o desenvolvimento de robótica na plataforma J401.
title: Uso das Interfaces
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer_robotics1.webp
slug: /recomputer_jetson_robotics_j401_getting_started
sku: 100071398, 100001302, 100010971
last_update:
  date: 06/10/2025
  author: Zibo
createdAt: '2025-04-29'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_jetson_robotics_j401_getting_started/
---

# Placa carrier Robotics J401 – Hardware e Primeiros Passos

A reComputer Robotics J401 é uma placa carrier de IA de borda compacta e de alto desempenho, projetada para robótica avançada. Compatível com módulos NVIDIA Jetson Orin Nano/Orin NX nos modos Super/MAXN, ela oferece até 157 TOPS de desempenho de IA. Equipada com amplas opções de conectividade — incluindo duas portas Gigabit Ethernet, slots M.2 para módulos 5G e Wi‑Fi/BT, 6 portas USB 3.2, CAN, GMSL2 (via expansão opcional), I2C e UART — ela funciona como um poderoso cérebro robótico capaz de processar dados complexos de vários sensores. Pré-instalada com JetPack 6 e Linux BSP, garante uma implantação contínua.​

Com suporte a frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch e ROS 2/1, a reComputer Robotics J401 conecta a tomada de decisão orientada por grandes modelos de linguagem ao controle físico de robôs, como planejamento de movimento e fusão de sensores. Ideal para o desenvolvimento rápido de robôs autônomos, ela acelera o tempo de lançamento com interfaces prontas para uso e frameworks de IA otimizados.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱</font></span></strong>
    </a>
</div>

## Visão geral da placa carrier reComputer Jetson Robotics J401

| **Vista superior** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **Vista superior** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **Vista superior** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

## Lista de componentes

- Placa carrier reComputer Robotics J401 x 1
- Fonte de alimentação e placa de expansão JST x 1
- Cabo XT30 para DC x 1
- Cabo USB, Tipo A para Tipo C x 1
- Dissipador de calor para placa de expansão x 1
- Pino roscado (M3*30) x 5
- Porca sextavada M3 x 5
- Parafuso (CM2.5*L.4) para módulo Jetson e M.2 Key M x3
- Parafuso (CM2*3.0) para M.2 Key E x1
- Pino roscado (M2*2.0) para M.2 Key B x1
- Parafuso (CM3*4.0) para M.2 Key B x1
- Manual do Usuário x 1

:::note
1. Ao utilizar fonte de alimentação de alta tensão e em temperatura de operação elevada, projete uma solução robusta de dissipação de calor de acordo com o Guia de Projeto Térmico.
2. Fixe o dissipador de calor no módulo para obter melhor desempenho.
3. Durante a operação com entrada de alta tensão e alta carga, não toque no dissipador de calor para evitar queimaduras.
4. Recomendação de adaptador de energia para validação: use o adaptador de energia recomendado no site oficial da Seeed.

- Adaptador de energia tipo barril 5525 19V/4.74A
- Certifique-se de que os requisitos máximos de consumo de energia sejam atendidos.
2. Compatibilidade do cabo de alimentação AC
- Compre cabos de alimentação AC tipo trevo específicos para a sua região, de acordo com sua localização.
3. Compatibilidade de acessórios
- Use apenas acessórios oficialmente recomendados (por exemplo, módulos sem fio, câmeras, periféricos) para desempenho e compatibilidade ideais.

:::

## Especificações

### Especificações da placa carrier

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
      <td>1x M.2 KEY M PCIe (inclui SSD M.2 NVMe 2280 de 128G)</td>
    </tr>
    <tr>
      <th rowSpan="3">Rede</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B para módulo 5G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Tipo-A (5Gbps);<br />1x USB 3.0 Tipo-C (Host/DP 1.4);<br />1x USB 2.0 Tipo-C (Modo Device/Depuração)</td>
    </tr>
    <tr>
      <td>Câmera</td>
      <td>1x 4 em 1 GMSL2 (mini fakra) (placa opcional)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (conector GH 4 pinos 1,25)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x DP1.4 (Tipo C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART conector GH 4 pinos 1,25</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C conector GH 4 pinos 1,25</td>
    </tr]
    <tr>
      <td>Ventoinha</td>
      <td>1x conector de ventoinha 4 pinos (PWM 5V);<br />1x conector de ventoinha 4 pinos (PWM 12V)</td>
    </tr>
    <tr>
      <td>Porta de expansão</td>
      <td>1x conector de expansão de câmera (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2 pinos;<br />1x soquete RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT e LED de usuário)</td>
    </tr>
    <tr>
      <td>Botão de agulha</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>Chave DIP</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Orifício para antena</td>
      <td>5x orifício para antena</td>
    </tr>
    <tr>
      <th rowSpan="1">Alimentação</th>
      <td colSpan="2">19-54V XT30(2+2) (inclui cabo XT30 para conector DC 5525)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versão do Jetpack</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecânico</th>
      <td>Dimensões (L x P x A)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>Instalação</td>
      <td>Sobre a mesa, Montagem em parede</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de operação</th>
      <td colSpan="2">-20℃~60℃ (Modo 25W);<br />-20℃~55℃ (Modo MAXN);<br />(com dissipador de calor reComputer Robotics com ventoinha)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantia</th>
      <td>2 anos</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificação</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## Gravar o sistema JetPack OS

### Módulo compatível

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Pré-requisitos

- PC host com Ubuntu
- Placa carrier Robotics J401
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Ventoinha ativa para módulo Nano/NX
- SSD interno NVMe M.2 2280
- Cabo de transmissão de dados USB Tipo-C

:::info

Recomendamos que você use dispositivos físicos host com Ubuntu em vez de máquinas virtuais.
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

### Preparar a imagem do Jetpack

Aqui, precisamos baixar a imagem do sistema para nosso PC Ubuntu, correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de download 1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaq3jfzUJiVJpBSdd0UqtKIB8cRP--j90it2K1Vk7Neo3g?e=sYD5S2">Download</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee  </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWIfNPP5Te5CqqiIBwXxilwBeTYuJiXPlO4OVFZxf54-gw?e=fGjs5R">Download</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERskD6LNzTRFkvDuLiSubTsBH8_eEFinmE-mPDvUhYZREg?e=deeaoO">Download</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7  </td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETx2PP9D85dHgzljJ_pJH-0Bsss82nPxMbOkJ-JvPA1hrQ?e=cReLPU">Download</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
O arquivo de imagem do Jetpack 6 tem aproximadamente **14,2 GB** e o download deve levar cerca de 60 minutos. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e íntegro.
:::

### Entrar no modo Force Recovery

:::info
Antes de prosseguirmos para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.
:::

<details>

<summary> Passo a passo </summary>

**Passo 1.** Altere a chave para o modo RESET.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Passo 2.** Ligue a placa carrier conectando o cabo de alimentação.

**Passo 3.** Conecte a placa ao PC host Ubuntu com um cabo USB Tipo‑C de transmissão de dados.

**Passo 4.** No PC host Linux, abra uma janela do Terminal e digite o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo de recuperação forçada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

A imagem abaixo é para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Gravar no Jetson

**Passo 1:** Extraia o arquivo de imagem baixado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-gmsl-6.2-36.4.3-2026-02-06.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode levar de 2 a 10 minutos.
:::

**Passo 3:** Conecte o Robotics J401 a um monitor usando o adaptador PD para HDMI para conectar a um monitor que suporte entrada HDMI, ou conecte diretamente a um monitor que suporte entrada PD usando o cabo PD e finalize a configuração inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **Configuração do Sistema** de acordo com suas necessidades.
:::

## Uso das Interfaces

A seguir serão apresentadas as várias interfaces da placa Robotics J401 e como usá‑las.

## M.2 Key M

M.2 Key M é projetado para SSDs NVMe de alta velocidade, proporcionando transferência de dados ultrarrápida para aplicações de robótica.

### SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ssd_c.jpg"/>
</div>

### Instruções de Uso

Abra o terminal no dispositivo Jetson e digite o seguinte comando para testar a velocidade de leitura e gravação do SSD.

```bash
#You need to create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Execute o comando `sudo rm /home/seeed/ssd/test` para excluir os arquivos de cache após a conclusão do teste.
:::

## M.2 Key B

O slot M.2 Key B é para expansão de Módulo 5G, permitindo conectividade celular de alta velocidade para cenários de robótica e IA de borda.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/5g_c.jpg"/>
</div>

### Instruções de Uso

**Passo 1.** Verificar Reconhecimento de Hardware

```bash
lsusb 
```

Este comando exibe uma lista de todos os dispositivos USB conectados ao sistema, juntamente com seu fabricante (ID), tipo e outras informações. Por exemplo, a saída pode mostrar um dispositivo da Quectel Wireless Solutions Co., Ltd. EM12-G, indicando que o módulo 5G está presente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb.png"/>
</div>

**Passo 2.** Confirmar Carregamento do Driver
É essencial garantir que o driver option, que é necessário para o módulo 5G, esteja carregado. Podemos usar o comando lsmod para verificar.

```bash
lsmod | grep option 
```

Se o driver option for carregado com sucesso, informações relevantes sobre o driver serão exibidas na saída.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsmod.png"/>
</div>

**Passo 3.** Configurar o ModemManager
ModemManager é uma ferramenta para gerenciar dispositivos modem, e precisa ser instalado e reiniciado.

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

O comando apt install é usado para instalar o pacote ModemManager, enquanto systemctl restart reinicia o serviço ModemManager para garantir que as novas configurações entrem em vigor.

**Passo 4.** Verificar Identificação do Módulo
Podemos usar o comando mmcli -L para verificar se o ModemManager consegue identificar corretamente o módulo 5G.

```bash
mmcli -L 
```

Se o módulo 5G for reconhecido, uma saída semelhante a /org/freedesktop/ModemManager1/Modem/0 será exibida, indicando o caminho para o dispositivo modem detectado.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_l.jpg"/>
</div>

**Passo 5.** Definir o APN
APN (Access Point Name) é crucial para conectar um dispositivo móvel à rede. Usaremos o comando nmcli para criar um perfil de portador. Tomando a China Mobile como exemplo, podemos criar um arquivo de configuração com os seguintes comandos:

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando adiciona uma nova conexão do tipo GSM (Global System for Mobile Communications), especificando o APN como "CMNET" e usando configuração IPv4 automática.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_con.jpg"/>
</div>

**Passo 6.** Ativar a Conexão
Após criar o perfil de portador, precisamos ativar a conexão.

```bash
sudo nmcli con up "gsm" 
```

Este comando ativa a conexão GSM e, se for bem-sucedido, uma mensagem de confirmação será exibida.

**Passo 7.** Reverificar Identificação do Módulo
Execute novamente o comando mmcli -L para garantir que o módulo continua reconhecido após a configuração do APN.

```bash
mmcli -L 
```

**Passo 8.** Verificar o Status do Módulo
Por fim, podemos usar o comando mmcli -m 0 para ver informações detalhadas sobre o módulo, como alocação de IP, operadora e status da conexão de rede.

```bash
mmcli -m 0 
```

Este comando fornece detalhes abrangentes sobre o módulo 5G, incluindo seu fabricante, modelo, tecnologias de rede suportadas e atuais, status do dispositivo e operadoras de rede conectadas.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_m.jpg"/>
</div>

## M.2 Key E

A interface M.2 Key E é um conector M.2 padrão usado principalmente para conectar módulos sem fio, como Wi‑Fi e Bluetooth, para expandir as capacidades de comunicação sem fio.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/m2_e.jpg"/>
</div>

### Instruções de Uso

Para testar o desempenho do Wi‑Fi, use o seguinte comando (substitua o endereço IP pelo do seu servidor de teste):

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

A funcionalidade Bluetooth está disponível por meio do slot M.2 Key E.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## Ethernet

A placa carrier Robotics j401 possui 2 portas Ethernet RJ45 de 1Gbps para conectividade de rede cabeada em alta velocidade.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>

Para testar a velocidade da porta Ethernet, use `iperf3` da seguinte forma:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` é o endereço IP do servidor iperf3. O cliente se conectará a esse servidor para realizar um teste de largura de banda.
`<bind_ip>` vincula o endereço IP local especificado como a origem do tráfego de teste.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ethnet_speed.png"/>
</div>

## LED

O reComputer Jetson Robotics J401 possui 3 indicadores LED (PWR, ACT e User LED) que fornecem feedback claro de status para energia, atividade do sistema e funções definidas pelo usuário.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div>

### Instruções de Uso

O User LED é um LED RGB que pode exibir cores diferentes para indicar vários estados, precisando ser definido pelo usuário.

Aqui está um script de teste para controlar o LED RGB:

```bash
touch rgb_test
chmod +x rgb_test
vi rgb_test
```

Cole o seguinte conteúdo:

```bash
#!/bin/bash
# RED ON
gpioset --mode=time --sec=1 2 0=1
sleep 2
# RED OFF
gpioset --mode=time --sec=1 2 0=0

# Blue ON
gpioset --mode=time --sec=1 2 1=1
sleep 2
# Blue OFF
gpioset --mode=time --sec=1 2 1=0

# Green ON
gpioset --mode=time --sec=1 2 2=1
sleep 2
# Green OFF
gpioset --mode=time --sec=1 2 2=0
```

Execute o script para testar o LED RGB.

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/rgb_led.gif"/>
</div>

## USB

A placa carrier Robotics j401 está equipada com uma variedade de portas USB, incluindo 6 portas USB 3.2 Tipo‑A (5Gbps), uma porta USB 3.0 Tipo‑C com DP 1.4 (modo Host) e uma porta USB 2.0 Tipo‑C para modo dispositivo/depuração, oferecendo opções de conectividade versáteis.

### Teste de Velocidade USB

Crie um script para testar a velocidade do dispositivo USB:

```bash
sudo vim test_usb
```

Cole o seguinte conteúdo:

```bash
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
```

Torne o script executável:

```bash
sudo chmod +x test_usb
```

Execute o script com o nome do seu dispositivo USB como argumento.

### Porta USB 2.0 Type-C

Usando esta porta serial, via o cabo de dados USB C, você pode monitorar as informações de depuração de entrada e saída no lado do PC.

**Passo 1.** Coloque a chave na posição de modo de depuração.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug.jpg"/>
</div>

**Passo 2.** Conecte o PC por meio de um cabo de dados USB, baixe o [CP210X Driver](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) no seu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Passo 3.** Conecte o PC por meio de um cabo de dados USB, extraia o arquivo baixado e instale o driver no seu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Passo 4.** Abra o Gerenciador de Dispositivos no seu PC com Windows e verifique o número da porta COM atribuída ao reComputer Super. Ele deve aparecer em "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", onde X é o número da porta COM.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Passo 5.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo), crie uma nova sessão.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Passo 6.** Selecione a ferramenta Serial.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Passo 7.** Selecione a porta serial correspondente, defina a taxa de transmissão para 115200 e clique em "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Passo 8.** Faça login no seu reComputer Super com o nome de usuário e a senha.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

### Câmera USB

Usando uma câmera USB através das portas USB 3.2 Type-A, instale e execute `guvcview`:

```bash
sudo apt-get install guvcview
guvcview -d /dev/video0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/usb_camera.png"/>
</div>

## Ventoinha

O reComputer Jetson Robotics J401 é equipado com dois tipos de conectores de ventoinha para atender a diferentes necessidades de tensão e resfriamento:

- 1x Conector de Ventoinha de 4 Pinos (5V PWM): projetado para ventoinhas silenciosas de baixa tensão e baixa potência, este conector suporta controle de velocidade por PWM, permitindo ajuste inteligente da velocidade da ventoinha com base na temperatura do sistema para melhorar a eficiência energética e reduzir o ruído.

- 1x Conector de Ventoinha de 4 Pinos (12V PWM): compatível com ventoinhas PWM padrão de 12V, também suporta controle preciso de velocidade, sendo ideal para necessidades de resfriamento de alto desempenho.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/fan.png"/>
</div>

:::note
Para mais informações, verifique [aqui](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

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

> Observação: Para Jetson Nano 4G, o caminho da ventoinha é `/sys/devices/platform/pwm-fan/hwmon/hwmon0/pwm1`.

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta jtop.

## Botão de Pinhole

A placa-mãe Robotics J401 possui um Botão de Pinhole para interação do usuário, incluindo um botão de Energia (PWR) e um botão de Redefinição (RESET). Esses botões são essenciais para ligar/desligar o dispositivo e realizar reinicializações do sistema, respectivamente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pinhole_button.jpg"/>
</div>

## CAN

CAN (Controller Area Network) é um padrão robusto de barramento veicular que permite que microcontroladores e dispositivos se comuniquem entre si sem um computador host.
O Robotics J401 oferece uma interface CAN0 integrada ao conector de alimentação XT30 (2+2) para transmissão conveniente de energia e dados. Além disso, oferece 3 interfaces CAN1 por meio de dois conectores JST padrão de 4 pinos para conectividade flexível ao barramento CAN.

### Comunicação CAN

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf), você pode encontrar o diagrama de fiação para a interface CAN0/CAN1, conforme mostrado abaixo:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div>

Aqui demonstraremos como realizar comunicação de dados usando a interface CAN1, utilizando o [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html).

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c.png"/>
</div>

De acordo com o método de conexão mostrado na figura abaixo, conecte o CANL, CANH e GND do CAN1 às portas CANL, CANH e GND correspondentes da ferramenta USB para CAN, respectivamente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c1.png"/>
</div>

No nosso caso, de acordo com o adaptador que usamos, baixamos e instalamos o software que pode ser encontrado [aqui](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program).

**Passo 1.** Configure a interface CAN1:

```bash
#Set the bit rate
sudo ip link set can1 type can bitrate 500000
#Enable CAN1
sudo ip link set can1 up
```

**Passo 2.** Configure o software de recebimento de dados no PC.
Por favor, configure as definições de comunicação conforme mostrado na figura a seguir.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_software.png"/>
</div>

**Passo 3.** O Jetson envia dados para o PC:

```bash
cansend can1 123#abcdabcd
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pc_rcan1.png"/>
</div>

**Passo 3.** O PC envia dados para o Jetson:

```bash
#CAN1 monitors PC data
candump can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1.png"/>
</div>

Pode-se ver que o terminal Jetson recebeu os dados enviados pelo PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_r.png"/>
</div>

### Modo CAN FD

Aqui, utilizo o CAN0 para conectar ao CAN1 para demonstrar como vários dispositivos Jetson podem se comunicar via interface CAN.

### Conexão de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can0_can1_c.jpg"/>
</div>

**Passo 1.** Remova a tampa inferior e coloque ambos os resistores de terminação de 120Ω na posição ​ON.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/on.jpg"/>
</div>

**Passo 2.** Configure as interfaces CAN0 e CAN1:

```bash
#close the interface

sudo ip link set can0 down
sudo ip link set can1 down

#Set to FD mode

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

#open the interface
sudo ip link set can0 up
sudo ip link set can1 up

```

**Passo 3.** Abra um novo terminal para escutar o CAN1 e, via CAN0, envie dados para o CAN1:

```bash
#open a new terminal and run
candump can1

#another terminal sends data
cansend can0 123##011112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF
```

:::info

- `123` é o ID
- `##` Indica quadro CAN FD
- O seguinte é 64 bytes de dados (um total de 128 caracteres hexadecimais)

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_fd.png"/>
</div>

## UART

O Robotics J401 fornece um conector JST padrão de 4 pinos para comunicação serial UART.

### Conexão de Hardware

Para comunicação UART, siga a fiação a seguir. Aqui, usamos a ferramenta USB para TTL como exemplo.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_c.jpg"/>
</div>

### Instruções de Uso

**Passo 1.** Abra o terminal no dispositivo Jetson e execute o seguinte comando para habilitar a interface UART:

```bash
gpioset --mode=time --sec=100 2 5=0
```

**Passo 2.** Conecte a ferramenta USB para TTL à porta UART do Robotics J401 e ao PC.

**Passo 3.** Abra a ferramenta de porta serial no lado do PC (aqui usamos a ferramenta xcom como exemplo) e defina a taxa de transmissão para 115200.

**Passo 4.** Crie um script Python simples para comunicação serial:

```python

import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:

    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

**Passo 5.** Execute o script em Python no dispositivo Jetson:

```bash
python3 uart_test.py
```

**Passo 6.** Agora você pode ver a saída no PC, e também pode enviar dados do PC para o dispositivo Jetson:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_s.jpg"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_r.png"/>
</div>

## I2C

O Robotics J401 fornece duas interfaces I2C (IIC0 e IIC1) por meio de conectores padrão JST de 4 pinos.
Permite a fácil conexão de sensores e periféricos para expansão do sistema.

### Conexão de Hardware

O Robotics J401 possui duas interfaces IIC GH-1.25 de 4 pinos, IIC0 e IIC1.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic.jpg"/>
</div>

No [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf), você pode encontrar o diagrama de fiação para a interface IIC0/IIC1 GH-1.25 de 4 pinos, como mostrado abaixo:
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/12c.png"/>
</div>
Selecione um dispositivo de interface IIC para teste; a escolha é sua. Aqui, usamos um [Arduino-Uno-Rev4-Minima](https://www.seeedstudio.com/Arduino-Uno-Rev4-Minima-p-5716.html) para testar I2C0/I2C1.

O processo de teste aqui envolve a varredura dos endereços dos dispositivos conectados externamente em IIC0/IIC1.
:::info
Conecte os dispositivos (IIC0/IIC1 ↔ Dispositivo) de acordo com as seguintes conexões:

- Alimentação → Alimentação

- SDA → SDA

- SCL → SCL

- Terra → Terra

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_connect.jpg"/>
</div>

### Instruções de Uso

**Passo 1.** Baixe o [Arduino IDE](https://www.arduino.cc/en/software/) para enviar o código.

**Passo 2.** Selecione o tipo de placa de desenvolvimento.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/slect_board.png"/>
</div>

**Passo 3.** Reinicie o IDE e envie o seu código.

```bash
#code example
#include <Wire.h>

void setup() {
  Wire.begin(0x08); // Set the I2C slave address to 0x08
  Wire.onReceive(receiveEvent);
  Wire.onRequest(requestEvent);
}

void loop() {
  delay(100);
}

void receiveEvent(int howMany) {
  // Callback when receiving host data
  while (Wire.available()) {
    char c = Wire.read();
    // Data received can be processed here.
  }
}

void requestEvent() {
  // Callback when the host requests data
  Wire.write("A"); // Return a byte of data
}
```

**Passo 4.** No Jetson, instale as ferramentas para teste de IIC.

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**Passo 5.** Execute o seguinte comando no terminal para visualizar os nomes mapeados no barramento IIC:

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_l.png"/>
</div>

**Passo 6.** Execute os seguintes comandos para fazer a varredura em IIC0:

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_detect.png"/>
</div>

Podemos ver que o dispositivo conectado a IIC0 está configurado para o endereço 0x08.

## Porta de Extensão

A placa carrier Robotics j401 possui um conector de expansão de câmera para placa de extensão GMSL. Ela pode conectar e operar simultaneamente quatro câmeras GMSL ao mesmo tempo.

### Conexão de Hardware

Aqui estão os slots de conexão da placa de expansão de câmera GMSL da placa carrier Robotics j401 (é necessário preparar uma placa de extensão com antecedência):

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/exb.png"/>
</div>

A seguir estão os modelos de câmeras GMSL que já suportamos:

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Instruções de Uso

:::note
Antes de habilitar a funcionalidade GMSL, certifique-se de ter instalado uma versão do JetPack com o driver da placa de expansão GMSL.
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
Existem três arquivos de overlay no total, a saber, Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4 e Orbbec Gemini 335Lg. Estes correspondem, respectivamente, à câmera 3G do SG3S, à câmera 6G do SG2 e SG8S e à câmera da Orbbec. Como mostrado na Figura 3, configure o arquivo io de acordo com o modelo da sua câmera.
:::

**Passo 2.** Instale as ferramentas de configuração da interface de vídeo.

```bash
sudo apt update
sudo apt install v4l-utils
```

### Usar a câmera Gemini 335Lg

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

Na primeira vez que você ligá-la, talvez seja necessário atualizar o firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Ao abrir o fluxo de dados, você pode visualizar o vídeo da câmera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div>

### Usar as câmeras da Série SGxxx

**Passo 1.** Defina o modo de sincronização de quadros (não está habilitado por padrão!). 

:::info
Aqui demonstramos como configurar câmeras de diferentes modelos e resoluções.
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

**Passo 2.** Inicie a câmera.

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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## Display

O reComputer Jetson Robotics J401 está equipado com uma DP1.4 (incluída no Type-C Host) para saída de exibição em alta resolução.

## Recursos

- [Esquema da Placa Carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Datasheet da Placa Carrier reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [Arquivo 3D do reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Documento Mecânico - reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Catálogo de Produtos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparação Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de Sucesso Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
