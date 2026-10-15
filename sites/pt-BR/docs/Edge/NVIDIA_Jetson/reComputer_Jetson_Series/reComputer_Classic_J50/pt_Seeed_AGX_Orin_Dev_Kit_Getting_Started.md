---
description: Este wiki apresenta os recursos do produto, especificações e visão geral de hardware do Seeed AGX Orin Dev Kit (reComputer Classic J501), como gravar a imagem do sistema JetPack 7.2 e como usar interfaces como M.2 Key M/E, Ethernet 10GbE, USB, o conector de expansão de 40 pinos (GPIO/I2C/SPI/UART/CAN/PWM), câmera, áudio, PCIe e RTC, ajudando você a começar rapidamente com desenvolvimento de IA de borda e IA incorporada baseado em Jetson AGX Orin.
title: Introdução ao reComputer Classic J501
tags:
  - reComputer Classic J501
  - Seeed AGX Orin Dev Kit
  - Gravar JetPack
  - Uso de interfaces
  - Jetson AGX Orin
  - IA incorporada
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg
slug: /ai_robotics_seeed_agx_orin_dev_kit_getting_started
sku: 100003716,100006184
last_update:
  date: 08/10/2026
  author: Zuhao
createdAt: '2026-05-26'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_seeed_agx_orin_dev_kit_getting_started/
---

# Gravar JetPack e Uso de Interfaces | reComputer Classic J501

O reComputer Classic J501 é um computador de IA de borda compacto e de alto desempenho, construído em torno do módulo NVIDIA® Jetson AGX Orin™ (32GB/64GB), oferecendo até 275 TOPS de desempenho de IA como um substituto direto para o NVIDIA Jetson AGX Orin Developer Kit. Ele possui 1x Ethernet 10GbE, 4x portas USB 3.2 Type-A, slots M.2 Key M (NVMe Gen4) e Key E (WiFi/BT), um slot de expansão PCIe, um conector de expansão de 40 pinos e expansão de câmera MIPI CSI de 8 pistas, fornecendo capacidades de inferência na borda para cargas de trabalho como implantação de modelos grandes, Vision-Language Navigation (VLN) e Vision-Language Action (VLA).

O produto suporta JetPack 7.2 (compatível com JetPack 6.2), suporta gravação do BSP oficial da NVIDIA e atualizações de sistema via `sudo apt upgrade`, e é compatível com toolchains e frameworks incluindo CUDA, TensorRT, DeepStream, Isaac ROS, PyTorch e ROS 2/1, acelerando o desenvolvimento de sistemas de IA de borda como robôs autônomos, visão inteligente e fusão de múltiplos sensores.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira J5011 (32GB) agora 🖱</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira J5012 (64GB) agora 🖱</font></span></strong>
    </a>
</div>

## Principais recursos

- **IA de alto desempenho**: Equipado com o módulo Jetson AGX Orin 32/64GB, GPU com arquitetura Ampere + NVDLA v2.0, até 275 TOPS (INT8), voltado para implantação de grandes modelos de linguagem e aplicações de IA incorporada
- **Totalmente compatível com o ecossistema NVIDIA Jetson**: Suporta gravação do BSP oficial da NVIDIA, atualizações de sistema `sudo apt upgrade` e configuração de ambiente via SDK Manager; CUDA / TensorRT / DeepStream funcionam imediatamente
- **Conectividade rica**: M.2 Key M (NVMe Gen4) + M.2 Key E (WiFi/BT); 1x 10GbE; 4x USB 3.2 Type-A; 2x USB Type-C (Alimentação / Recuperação)
- **Expansão completa**: Slot PCIe (x8 elétrico); conector de 40 pinos (I2C, I2S, SPI, UART, GPIO, CAN, PWM); 8x conectores BTB de câmera CSI
- **Pronto para robótica**: Suporta ROS 2/1 e Isaac ROS; CAN0/CAN1 nativos; otimizado para cenários de AMR e automação
- **Design amigável ao usuário**: Adaptador de 19V + entrada DC 9–20V de ampla faixa; temperatura de operação de 0~40°C; ligar automático (curto-circuitar os pinos 5-6 no Automation Header)

## Especificações

### System on Module Jetson AGX Orin

| Item          | reComputer Classic J501 (32G / J5011)                 | reComputer Classic J501 (64G / J5012)                  |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Module        | NVIDIA Jetson AGX Orin 32GB                           | NVIDIA Jetson AGX Orin 64GB                            |
| AI Performance | 200 TOPS (INT8)                                      | 275 TOPS (INT8)                                        |
| GPU           | 1792-core NVIDIA Ampere, 56 Tensor Cores              | 2048-core NVIDIA Ampere, 64 Tensor Cores               |
| CPU           | 8-core Arm Cortex-A78AE, 2MB L2 + 4MB L3              | 12-core Arm Cortex-A78AE, 3MB L2 + 6MB L3              |
| Memory        | 32GB 256-bit LPDDR5 @ 204.8 GB/s                      | 64GB 256-bit LPDDR5 @ 204.8 GB/s                       |
| Video Encode (H.265) | 1×4K60 \| 3×4K30 \| 6×1080p60 \| 12×1080p30    | 2×4K60 \| 4×4K30 \| 8×1080p60 \| 16×1080p30            |
| Video Decode (H.265) | 1×8K30 \| 2×4K60 \| 4×4K30 \| 9×1080p60 \| 18×1080p30 | 1×8K30 \| 3×4K60 \| 7×4K30 \| 11×1080p60 \| 22×1080p30 |
| DL / Vision Accelerator | 2× NVDLA v2.0 / PVA v2.0                      | 2× NVDLA v2.0 / PVA v2.0                               |
| Onboard Storage | 64GB eMMC 5.1                                       | 64GB eMMC 5.1                                          |
| Power         | 15W – 40W                                             | 15W – 60W                                              |

### Especificações da placa carrier

| Item       | Especificação                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Mechanical | 110mm × 110mm × 73mm                                                                                |
| Display    | 1× DP (cabo DP→HDMI incluído)                                                                       |
| Networking | 1× RJ45 10GbE (J17)                                                                                 |
| M.2        | 1× M.2 Key M (J4, NVMe 2280, Gen4, SSD de 128G incluído); 1× M.2 Key E (J5, 2230 WiFi/BT, módulo incluído) |
| USB        | 4× USB 3.2 Type-A (J24/J33); 1× USB 3.0 Type-C (Alimentação); 1× USB 3.0 Type-C (Recuperação); 1× Micro USB (J26, Depuração) |
| PCIe       | 1× slot PCIe (J6, bloco UPHY 1 ×8, controlador nº 5)                                               |
| Expansion IO | Conector de 40 pinos (J30: I2C, I2S, SPI, UART, GPIO, CAN, PWM)                                   |
| Camera     | Conector de câmera BTB (J509, CSI0–CSI7, 8×2 pistas)                                               |
| Fan        | 1× conector de ventoinha PWM 5V de 4 pinos (J9, PWM + TACH)                                        |
| Button / LED | 1× Recovery + 1× RST + 1× Power; 1× LED verde PWR/ACT                                            |
| RTC        | 1× conector RTC de 2 pinos (J13)                                                                   |
| Others     | Conector de painel de áudio (J511); Automation Header (J42); conector JTAG (J502)                  |
| Power Input | Conector DC, DC 9–20V (adaptador de 19V incluído)                                                  |
| Software   | JetPack 7.2 (compatível com JetPack 6.2)                                                           |
| Operating Temperature | 0~40°C                                                                                   |

## Visão geral de hardware

**Vista lateral 1** — Botões / Alimentação / Rede / Display:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_1.png"/>
</div>

1. Botão de alimentação  2. Botão de recuperação  3. Botão de reset  4. LED - Power/ACT  5. USB Type-C - Alimentação  6. DC 5525 9~20V (conector de alimentação DC)  7. 10 GbE (porta Ethernet 10 Gigabit)  8. USB Type-A × 2  9. Display Port

**Vista lateral 2** — Interfaces de expansão:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_2.png"/>
</div>

1. Expansão PCIe x16  2. USB Type-C para gravação  3. Conector de 40 pinos (conector de expansão de 40 pinos)  4. USB 3.2 Type-A × 2

**Vista inferior** — Interfaces internas da placa carrier:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_bottom_view.png"/>
</div>

1. Automation Header (J42)  2. Conector de bateria RTC (J13)  3. Conector JTAG (J502)  4. M.2 Key E (módulo WiFi/BT incluído)  5. Conector de áudio (J511)  6. Conector de câmera (J509)  7. M.2 Key M (SSD de 128G incluído)

## 📦 Gravando o sistema operacional JetPack

### Módulos suportados

- [Módulo NVIDIA® Jetson AGX Orin™ 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [Módulo NVIDIA® Jetson AGX Orin™ 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Classic J501
- Cabo USB Type-C para transmissão de dados
- Adaptador de alimentação de 19V

:::info

Recomendamos que você use dispositivos host Ubuntu físicos em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> Versão do JetPack </td>
        <td class="dbon" colspan="3"> Versão do Ubuntu (computador host) </td>
    </tr>
    <tr>
        <td> 20.04 </td>
        <td> 22.04 </td>
        <td> 24.04 </td>
    </tr>
    <tr>
        <td> JetPack 7.2 </td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Nota:</strong> Para JetPack 7.2, o Ubuntu 24.04 é suportado apenas para gravação e instalação de componentes no dispositivo de destino. Use Ubuntu 20.04 ou 22.04 se você precisar de componentes de desenvolvimento no host.</p>

:::

### Preparando a imagem do JetPack

Aqui, precisamos baixar a imagem do sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Módulo Jetson</th>
      <th>Link para download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td>AGX Orin 64GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBO6K-vbZtNQrhyL3ZfEJH2AUCoIRVNqDCcmA9QsbABiJA">Download</a></td>
      <td>07bb83b8b0fced67a71126ada26076a0<br />76bdefee394d0647429ef9c15bab0f6b</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCQ4t5XnL9sS7StIWTe2d08AQy2N6Su32eg5pZ3IrvfFBs">Download</a></td>
      <td>55e2acfbec97313dbacb04c80c668442<br />2e169c1e5299228d424f8807bd7be4bd</td>
    </tr>
  </tbody>
</table>
</div>

:::note
O Classic J501 **não possui interface GMSL**. O exemplo de gravação neste artigo é baseado na versão de **64GB**. O nome do arquivo de imagem está no formato `mfi_seeed-agx-orin-64g-<JetPack version>-<L4T version>-<date>.tar.gz`, e após a extração você obtém um diretório com o mesmo nome (o exemplo abaixo usa `mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04`; consulte o nome do arquivo realmente baixado).
:::

:::danger
Os arquivos de imagem do JetPack são grandes e podem levar cerca de 60 minutos para serem baixados. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e íntegro.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_sha256sum.png"/>
</div>
:::

⚙️ **Todos os arquivos `.dts` e outros códigos-fonte das placas carrier Jetson da SEEED podem ser baixados em** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### Entrando no modo Force Recovery

<details>

<summary> Instruções passo a passo </summary>

Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.

📌 Principais localizações de hardware (veja também "Hardware Overview" neste artigo):

| Componente           | Localização                                            | Descrição                                                                     |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Botão de Recovery   | Vista lateral 1, rótulo #2                             | 1× botão de Recovery na placa carrier (mesmo lado de Power e Reset)          |
| Porta USB-C Recovery| Vista lateral 2, rótulo #2 (USB Type-C para gravação)  | Porta USB Type-C dedicada para gravação de firmware, rotulada como 1× USB 3.0 Type-C (Recovery) no datasheet, usada para gravação |
| Outras portas USB   | Type-C (Power) / Micro-B (Debug) / 4× USB 3.2 Type-A   | **Não conecte à porta Recovery errada**                                      |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_recovery_button.png"/>
</div>

**Passo 1.** Conecte a porta **USB Type-C para gravação** na placa carrier (Vista lateral 2, rótulo #2) ao PC host Ubuntu usando um cabo de dados USB Type-C.

**Passo 2.** Pressione o botão de recovery (Vista lateral 1, rótulo #2) e mantenha-o pressionado.

**Passo 3.** Conecte a fonte de alimentação (DC 5525, 9–20V / adaptador de 19V).

**Passo 4.** Solte o botão de recovery.

**Passo 5.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para AGX Orin 64GB: **0955:7023 NVidia Corp**
- Para AGX Orin 32GB: **0955:7223 NVidia Corp**

A imagem abaixo é um exemplo para o AGX Orin 64GB:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_lsusb_recovery.png"/>
</div>

</details>

### Gravando no Jetson

**Passo 1:** Extraia o arquivo de imagem baixado (tomando a versão de 64GB como exemplo):

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04.tar.gz
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_extract_image.png"/>
</div>

**Passo 2:** Execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_start.png"/>
</div>

Se o processo de gravação for bem-sucedido, você verá a seguinte saída (`Successfully flashed the QSPI` / `Successfully flashed the eMMC` / `Flashing success`):

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_success.png"/>
</div>

:::note
O comando de gravação pode ser executado por 2 a 10 minutos.
:::

**Passo 3:** Conecte um monitor usando um cabo DP (ou o cabo DP→HDMI incluído), ligue o dispositivo e conclua a configuração inicial do sistema (idioma, nome de usuário, rede, etc.).

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_boot_desktop.png"/>
</div>

## 🔌 Uso das interfaces

A seguir serão apresentadas as várias interfaces na placa reComputer Classic J501 e como usá-las.

## M.2 Key M

O J501 inclui 1x slot M.2 Key M (J4), com suporte a **SSDs NVMe PCIe Gen4 x4** (tamanho 2280), com um SSD de 128G incluído no pacote.

### SSDs compatíveis são os seguintes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### Conexão de hardware

A localização do M.2 Key M é mostrada na vista inferior da "Hardware Overview", rótulo 7. Após remover os parafusos do gabinete, insira o SSD NVMe no slot e fixe-o com o parafuso.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_m_ssd.jpg"/>
</div>

### Instruções de uso

Abra o terminal no dispositivo Jetson e insira os seguintes comandos para testar o status do SSD e a velocidade de leitura/gravação.

**Passo 1.** Verificar informações básicas do SSD:

```bash
nvme list
```

**Passo 2.** Verificar o status de saúde do SSD (informações SMART):

```bash
sudo nvme smart-log /dev/nvme0n1
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_nvme_status.png"/>
</div>

**Passo 3.** Testar desempenho de gravação:

```bash
mkdir -p ~/ssd
dd if=/dev/zero of=~/ssd/test bs=1024M count=5 conv=fdatasync
```

**Passo 4.** Testar desempenho de leitura (limpe primeiro o cache de página para evitar leitura da memória):

```bash
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
dd if=~/ssd/test of=/dev/null bs=1024M
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_ssd_speed.png"/>
</div>

:::danger
Execute o comando `sudo rm ~/ssd/test` para excluir o arquivo de teste após a conclusão do teste.
:::

## M.2 Key E (WiFi/BT)

O slot M.2 Key E (J5) suporta módulos M.2 2230 Wi-Fi / Bluetooth para conectividade sem fio, com um módulo WiFi/BT incluído no pacote.

### Conexão de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_e_wifi.jpeg"/>
</div>

:::tip

**Observação: Antes de usar esta interface, você deve remover os parafusos do gabinete, instalar o módulo WiFi/BT no slot M.2 Key E (veja a vista inferior da "Hardware Overview", rótulo 4) e conectar as antenas.**
:::

### Instruções de uso

**Passo 1.** Verificar o reconhecimento PCIe do módulo WiFi:

```bash
lspci | grep -i network
```

**Passo 2.** Verificar o status atual da conexão:

```bash
iw dev <wlanX> link
```

**Passo 3.** Escanear redes WiFi próximas:

```bash
nmcli -f active,ssid,signal,freq dev wifi list
```

**Passo 4.** Confirmar as faixas de frequência suportadas pelo módulo (Banda 1 = 2.4GHz, Banda 2 = 5GHz):

```bash
iw phy phy0 info | grep -E "Band [0-9]"
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2e_wifi_test.png"/>
</div>

**Teste de desempenho:**
Para testar o desempenho do Wi-Fi, use o seguinte comando (substitua o endereço IP pelo do seu servidor de teste):

```bash
# On server: iperf3 -s
# On client:
iperf3 -c your_server_ip
```

A funcionalidade Bluetooth está disponível através do slot M.2 Key E (escanear/parear com `bluetoothctl`).

## Ethernet

O Classic J501 fornece 1x porta RJ45 10GbE (J17), com suporte a Ethernet de 10 Gigabit e compatibilidade retroativa com velocidades inferiores.

**LEDs indicadores por porta (status de funcionamento normal):**

- **LED verde:** ACESO indica que o link está estabelecido
- **LED piscando:** indica atividade de rede

Use `ethtool` para verificar se o PHY está funcionando corretamente e visualizar os modos de velocidade suportados (é normal que "Link detected" apareça como no quando nenhum cabo estiver conectado):

```bash
sudo ip link set end0 up
sudo ethtool end0
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_ethernet_ethtool.png"/>
</div>

Para testar a velocidade da porta Ethernet, use `iperf3` como segue (é necessário um cabo Ethernet conectado a um servidor par):

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` é o endereço IP do servidor iperf3. O cliente se conectará a esse servidor para realizar um teste de largura de banda.
`<bind_ip>` vincula o endereço IP local especificado como a origem do tráfego de teste.
:::

## LED

O J501 está equipado com um LED indicador de status:

- **LED PWR/ACT:** Status de alimentação / atividade do sistema (verde)

## USB

O Classic J501 fornece 4x portas USB 3.2 Type-A (J24/J33, 10Gbps, apenas modo host, para conectar periféricos de alta velocidade, dispositivos de armazenamento ou câmeras), 1x porta de alimentação USB 3.0 Type-C, 1x porta USB 3.0 Type-C Recovery (porta de gravação) e 1x porta Micro USB de depuração (J26).

### Topologia do barramento USB

Use `lsusb -t` para visualizar a árvore de dispositivos e verificar o status da conexão e a velocidade negociada de cada porta USB e periférico:

```bash
lsusb -t
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_usb_topology.png"/>
</div>

### Teste de velocidade USB-A

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

:::note
Primeiro confirme o ponto de montagem real do seu dispositivo USB usando o comando `df -h` ou `lsblk`!
:::

### Porta serial de depuração Micro USB

Usando esta porta serial e um cabo Micro-USB, você pode monitorar no PC as informações de depuração de entrada e saída.

**Passo 1.** Abra a ferramenta de porta serial (aqui usamos a ferramenta MobaXterm como exemplo) e crie uma nova sessão.

**Passo 2.** Selecione a ferramenta Serial.

**Passo 3.** Selecione a porta serial correspondente, defina a taxa de baud para **115200** e clique em "OK".

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_mobaxterm_serial_session.png"/>
</div>

**Passo 4.** Faça login no seu reComputer Classic J501 com o nome de usuário e a senha.

## Ventoinha

O Classic J501 fornece 1x conector de ventoinha PWM de 4 pinos 5V (J9), com o pinout definido como GND / Power / FAN_TACH (detecção de velocidade) / FAN_PWM (controle de velocidade). O controle PWM permite ajuste dinâmico e preciso da velocidade com base na temperatura do sistema, alcançando resfriamento eficiente enquanto minimiza o ruído e o consumo de energia.

### Instruções de uso

**Controle PWM manual:**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

:::note
A política térmica padrão é pré-configurada em `/etc/nvpmodel.conf`. Para perfis personalizados, consulte o [NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Além disso, podemos definir manualmente a velocidade da ventoinha usando a ferramenta `jtop`.

Você pode inserir o seguinte comando no terminal para instalar o **jtop**:

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Em seguida, reinicie o seu reComputer Classic J501:

```bash
sudo reboot
```

Após instalar o **jtop**, você pode iniciá-lo no terminal:

```bash
jtop
```

## Conector de expansão de 40 pinos (GPIO / I2C / SPI / UART / CAN / I2S / PWM)

O cabeçalho de 40 pinos do Classic J501 (J30, veja a Vista Lateral 2 da "Visão geral do hardware", rótulo 3) é compatível com o formato de cabeçalho do Raspberry Pi, fornecendo: 2x I2C (I2C2/I2C4), SPI1 (dupla seleção de chip), UART1 (TX/RX/RTS/CTS), I2S2, **CAN0/CAN1 nativos**, PWM01 e vários GPIOs.

A posição física do cabeçalho é mostrada na figura abaixo (indicada pela seta verde, ao lado das portas USB Type-A):

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_photo.png"/>
</div>

O pinout é mostrado na figura abaixo:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_pinout.png"/>
</div>

:::note
Os rótulos GPIOxx na figura são números compatíveis com Raspberry Pi; alguns rótulos são inconsistentes com a tabela de pinos J30 no datasheet (por exemplo, os ícones para os pinos 3/5 mostram I2C5 enquanto o datasheet indica I2C4, abreviações de I2S, etc.). A nomenclatura oficial segue a tabela de pinos do datasheet (os pinos 3/5 correspondem às posições das esferas do módulo E60/D61 = I2C4_DAT/CLK).
:::

### Operação de GPIO

Use as ferramentas libgpiod para operar os GPIOs (primeiro consulte os números de chip e linha com `gpioinfo`):

```bash
gpioinfo
sudo gpioset --mode=wait <gpiochipX> <line>=1   # set output high
sudo gpioget <gpiochipX> <line>                 # read input
```

### Teste de loopback SPI

**Passo 1.** Carregue o módulo spidev: `sudo modprobe spidev`

**Passo 2.** Verifique os nós de dispositivo: `ls /dev/spidev*`

**Passo 3.** Obtenha e compile o código de teste:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Passo 4.** Faça o curto entre MOSI e MISO do SPI selecionado (loopback) e execute o teste (o SPI1 de 40 pinos geralmente é `/dev/spidev0.0`; consulte o nó real a partir de `ls /dev/spidev*`):

```bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000
```

**Passo 5.** O teste de loopback é bem-sucedido se os dados de TX e RX forem consistentes.

### Teste de UART

O UART1 no cabeçalho de 40 pinos (pinos 8/10/11/36) pode ser conectado a um adaptador USB-serial e testado usando o CuteCom:

```bash
sudo apt-get install cutecom
sudo cutecom
```

Parâmetros da porta serial: dispositivo `/dev/ttyTHS1` (UART1 de 40 pinos, consulte o nó real), taxa de baud 115200, 8N1, sem controle de fluxo.

### Comunicação CAN

O cabeçalho de 40 pinos fornece CAN0 (pinos 29/31) e CAN1 (pinos 33/37). Esses 4 pinos são sinais do controlador CAN em **nível TTL de 3,3V** conectados diretamente ao módulo AGX Orin (CANx_DOUT = TX do controlador, CANx_DIN = RX do controlador). **Não há transceptor CAN onboard na placa carrier**, e não há CAN_H/CAN_L diretamente conectáveis no cabeçalho; é necessário um transceptor CAN externo de 3,3V (por exemplo, SN65HVD230 / TCAN332, sendo o SN65HVD230 oficialmente recomendado pela NVIDIA) antes de formar a rede.

O teste de loopback requer 2 transceptores: no lado TTL, conecte o transceptor TXD→CANx_DOUT, RXD←CANx_DIN, VCC→3,3V (pinos 1/17), GND→terra; faça o cruzamento no lado do barramento (CAN0_H↔CAN1_H, CAN0_L↔CAN1_L, com resistores de terminação de 120Ω em ambas as extremidades do barramento), então o teste de loopback pode ser realizado:

:::note
Confirmado (com base na tabela de pinos de 40 pinos do datasheet): os pinos CAN do J30 são sinais de conexão direta das posições das esferas do módulo (CAN0_DIN=F58, CAN0_DOUT=D59, CAN1_DOUT=H61, CAN1_DIN=B61); nenhum transceptor onboard é marcado em qualquer lugar no datasheet, o que é consistente com a definição de 40 pinos do NVIDIA AGX Orin DevKit; a documentação oficial da NVIDIA exige explicitamente um transceptor CAN externo de ≥3,3V.
:::

#### Modo CAN clássico

```bash
# Configure and bring up the interfaces (Classic CAN, 1 Mbps example)
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can0 up
sudo ip link set can1 up

# One terminal receives, the other sends
candump can1 &
cangen can0 -g 10
```

#### Modo CAN-FD

```bash
sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 fd on berr-reporting on restart-ms 100
sudo ip link set can0 up
```

## Conector de câmera

O Classic J501 disponibiliza CSI0–CSI7 (8 portas MIPI CSI de 2 vias) por meio de um conector BTB de 120 pinos (J509, veja a vista inferior da "Visão geral do hardware", rótulo 6), e fornece I2C da câmera, clock mestre (MCLK), Powerdown/Reset, sincronização de quadro (FRSYNC) e alimentação da câmera de 2,8V/1,8V/3,3V, adequado para soluções de percepção multicâmera sincronizada.

### Conexão de hardware

Esta interface é na forma BTB (board-to-board) e requer uma placa adaptadora de câmera/FPC cable da Seeed ou desenvolvida por você.

### Instruções de uso

**Passo 1.** Verifique os nós de dispositivo: `ls /dev/video*`

**Passo 2.** Faça a pré-visualização usando GStreamer (exemplo):

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
video/x-raw,width=1920,height=1080,framerate=30/1 ! \
videoconvert ! xvimagesink
```

## Interface de áudio

Conector de painel de áudio de 10 pinos (J511, veja a vista inferior da "Visão geral do hardware", rótulo 5): entradas de microfone duplas (IN1P/IN2P), saída de fone de ouvido estéreo (HPO_L/HPO_R), detecção de conector/presença.

Após conectar a placa de painel de áudio, você pode selecionar os dispositivos de entrada/saída correspondentes nas configurações de som do Ubuntu para testes de gravação e reprodução:

```bash
arecord -l   # list capture devices
aplay -l     # list playback devices
arecord -d 5 test.wav && aplay test.wav
```

## Display (DP)

O Classic J501 está equipado com 1x interface DisplayPort. Você pode conectar um monitor diretamente com um cabo DP ou usar o **cabo DP→HDMI** incluído para conectar um monitor HDMI, suportando saída de renderização de vídeo de desktop e multi-stream.

## Slot de expansão PCIe

O slot PCIe onboard (J6, veja a Vista Lateral 2 da "Visão geral do hardware", rótulo 1) é fisicamente no formato x16 e eletricamente **x8** (bloco UPHY 1 Lane 0–7, controlador PCIe nº 5), apresentando alimentação de 12V/3,3V e sinais de controle completos (PERST#/CLKREQ#/WAKE#/detecção de presença), e pode ser usado para expandir placas de rede, placas de captura, placas adaptadoras NVMe e mais.

```bash
sudo lspci            # check whether the PCIe device is detected
sudo lspci -vvv -s <BDF>
```

## RTC

O Classic J501 mantém a contagem de tempo durante a perda de energia conectando uma bateria de backup externa por meio do cabeçalho RTC de 2 pinos (J13, PMIC_BBATT, veja a vista inferior da "Visão geral do hardware", rótulo 2).

**Passo 1.** Conecte a bateria do RTC (observe a polaridade).

**Passo 2.** Ligue o dispositivo, vá para `Settings > Date & Time`, conecte-se a uma rede e selecione **Automatic Date & Time** (ou defina manualmente).

:::note
Se você não tiver se conectado à internet, poderá definir manualmente a data/hora aqui.
:::

**Passo 3.** Abra uma janela de terminal e execute o seguinte comando para verificar a hora do relógio de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Passo 4.** Desconecte a conexão de rede e reinicie o dispositivo para verificar a retenção de horário.

## Conector de Automação (Ligar Automaticamente / Controle Remoto de Energia)

O conector de automação J42 (veja a vista inferior em "Hardware Overview", rótulo 1) fornece sinais incluindo FORCE_RECOVERY_N (pino 2), SYS_RESET_N (pino 3), o sinal do botão de energia (pino 4), saída do controlador PD/ACOK (pinos 5/6), MODULE_SLEEP_N (pino 7), indicação de sobrecorrente SYSTEM_OC_N (pino 8) e Wake on LAN (pino 9, GPIO38).

:::note
**Curte os pinos 5 e 6** para habilitar o Ligar Automaticamente, adequado para dispositivos sem supervisão.
:::

## Recursos

- [Página do Produto reComputer Classic J5011 (32GB)](https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html)
- [Página do Produto reComputer Classic J5012 (64GB)](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html)
- [Folha de Dados do reComputer Classic J501 (Download em PDF)](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_j501_datasheet.pdf)
- [Folha de Dados do Módulo NVIDIA Jetson AGX Orin (Download em PDF)](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/AGX_P3737_A05_V1_20260605.pdf)
- [Modelo 3D do reComputer Classic J501 (Download STP)](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_J501.stp)
- [Catálogo de Produtos Seeed NVIDIA Jetson](https://www.seeedstudio.com/nvidia.html)
- [Código-fonte do L4T (Linux_for_Tegra) da Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Documentação do NVIDIA Jetson AGX Orin](https://developer.nvidia.com/embedded/jetson-agx-orin)

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
