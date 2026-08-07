---
description: Introdução ao reComputer Rugged J40
title: Introdução ao reComputer Rugged J40
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - Introdução
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 03/04/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_rugged_j40_getting_started/
---

# Introdução ao reComputer Rugged J40

:::note
Este produto está atualmente em desenvolvimento. As especificações e a disponibilidade estão sujeitas a alterações.
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

O reComputer Rugged J40 é um computador de borda de IA sem ventoinha, com classificação IP66, alimentado por módulos NVIDIA Jetson Orin NX/Nano. Projetado para ambientes externos severos, incluindo aplicações marítimas, veiculares e industriais, ele oferece até 100 TOPS de desempenho de IA em um gabinete compacto, com resfriamento passivo e conectores M12 totalmente à prova d'água.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Adquira agora 🖱️</font></span></strong>
  </a>
</div>

## Recursos

- **À prova d'água IP66**: Gabinete totalmente vedado com conectores M12 à prova d'água para todas as interfaces externas
- **Resfriamento passivo sem ventoinha**: Operação silenciosa entre -20°C e +60°C com fluxo de ar de 0,7 m/s
- **Robusto e resistente a vibrações**: 3 Grms @ 5–500 Hz, 1 h/eixo — adequado para uso veicular e marítimo
- **I/O industrial rico**: CAN-FD (isolado), RS-232/422/485, DI/DO, todos via conectores M12 A-code
- **Rede flexível**: 4× PoE GbE + 1× GbE (M12), M.2 Key E (Wi-Fi/BT), M.2 Key B (5G/GPS)
- **Entrada de tensão ampla**: 19–48 V DC via conector M12 B/A-code
- **Certificações**: CE, FCC, RoHS, REACH

## Especificações

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nome do produto</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>Módulo NVIDIA Jetson</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>Sistema de processamento</td>
      <td>Desempenho de IA</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024-core NVIDIA Ampere, 32 Tensor Cores</td>
      <td>1024-core NVIDIA Ampere, 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8-core Arm Cortex-A78AE v8.2 64-bit, 2MB L2 + 4MB L3</td>
      <td>6-core Arm Cortex-A78AE v8.2 64-bit, 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>16GB 128-bit LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>Armazenamento</td>
      <td>eMMC</td>
      <td colSpan={2}>-</td>
    </tr>
    <tr>
      <td>Expansão</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB incluído</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE RJ45 PoE PSE (802.3af, M12 à prova d'água) + 1× GbE RJ45 (M12 à prova d'água)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Tipo-A (M12 à prova d'água) + 1× USB 2.0/3.0 Tipo-C (gravação, tampa à prova d'água) + 1× USB Tipo-C (debug)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={2}>1× HDMI (tampa à prova d'água)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD (isolado, 120 Ω) via M12 A-code de 8 pinos</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td colSpan={2}>1× RS-232/422/485 via M12 A-code de 8 pinos</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO via M12 de 12 pinos / 8 pinos</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× slot para cartão Nano SIM</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td colSpan={2}>4× conectores de antena SMA à prova d'água</td>
    </tr>
    <tr>
      <td rowSpan={2}>Expansão</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Módulo Wi-Fi / Bluetooth (opcional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>Módulo 5G / GPS (opcional)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentação</td>
      <td>Entrada</td>
      <td colSpan={2}>19–48 V DC via conector M12 B/A-code</td>
    </tr>
    <tr>
      <td>Consumo</td>
      <td colSpan={2}>Típico 25 W, fusível 10 A</td>
    </tr>
    <tr>
      <td rowSpan={6}>Ambiente</td>
      <td>Grau de proteção</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>Temperatura de operação</td>
      <td colSpan={2}>-20°C a +60°C (com fluxo de ar de 0,7 m/s)</td>
    </tr>
    <tr>
      <td>Umidade</td>
      <td colSpan={2}>10–95% UR (sem condensação)</td>
    </tr>
    <tr>
      <td>Vibração</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz, aleatório, 1 h/eixo</td>
    </tr>
    <tr>
      <td>Dimensões</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>Cor</td>
      <td colSpan={2}>Cinza-prata (estrutura intermediária prata, dissipador preto)</td>
    </tr>
    <tr>
      <td colSpan={2}>Certificação</td>
      <td colSpan={2}>CE, FCC, RoHS, REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantia</td>
      <td colSpan={2}>2 anos</td>
    </tr>
  </tbody>
</table>

## Visão geral do hardware

:::note
As imagens da visão geral de hardware serão adicionadas assim que o produto for finalizado.
:::

**Indicadores LED:**

| LED | Cor | Status | Descrição |
|-----|-------|--------|-------------|
| PWR | Verde | On | Dispositivo está ligado |
| PWR | Verde | Off | Dispositivo não está ligado |
| ACT | Verde | Flashing | Atividade de acesso ao SSD |

## Gravar o JetPack

:::note
As instruções de gravação serão adicionadas assim que o BSP estiver disponível. O processo de gravação segue o mesmo procedimento de outros dispositivos da série reComputer J40.
:::

Consulte a página [Flash BSP with Jetpack to Selected Jetson](/pt-br/flash/jetpack_to_selected_product) para o guia de gravação mais recente.

### Pré-requisitos

- reComputer Rugged J40
- Fonte de alimentação (19–48 V DC)
- PC host Ubuntu (20.04 ou 22.04)
- Cabo de dados USB Tipo-C (para gravação)
- Monitor externo + cabo HDMI
- Teclado e mouse

### Entrar no modo Force Recovery

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg"/>
</div>

1. Conecte um cabo USB Tipo-C entre a porta **DEVICE** e o seu PC host Ubuntu.
2. Pressione e segure o botão **REC** (Recovery).
3. Enquanto mantém o REC pressionado, conecte a fonte de alimentação para ligar a placa.
4. Solte o botão Recovery.

No PC host Ubuntu, verifique o modo de recuperação com:

```bash
lsusb
```

Saída esperada por módulo:
- Orin NX 16GB: `0955:7323 NVidia Corp`
- Orin Nano 8GB: `0955:7523 NVidia Corp`

## Extrair e gravar

**Passo 1:** Extraia o arquivo de imagem baixado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

**Passo 2:** Entre no diretório extraído e execute o comando de gravação:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## Recursos

- [reComputer Rugged J40 Datasheet](#) *(em breve)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [NVIDIA Jetson Devices Comparison](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
