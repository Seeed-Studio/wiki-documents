---
description: Introdução ao reComputer Robotics J50 Mini
title: Introdução ao reComputer Robotics J50 Mini
keywords:
  - reComputer Robotics
  - reComputer Robotics J50 Mini
  - Jetson
  - Getting Started
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg
slug: /ai_robotics_recomputer_j501_robotics_getting_started
sku: 100085113
last_update:
  date: 11/16/2026
  author: Shijun
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/pt-br/ai_robotics_recomputer_robotics_j50_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';
import { getL4TData } from '@site/src/components/jetson/DownloadLink';

# Introdução ao reComputer Robotics J50 Mini

<div align="center">
  <img width="600" alt="Sistema completo reComputer Mini J501" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" />
</div>

reComputer Robotics J50 Mini (reComputer Mini J501) é um computador compacto de borda com IA para robótica e desenvolvimento de IA embarcada, disponível como **J5011 com NVIDIA Jetson AGX Orin 32GB** e **J5012 com NVIDIA Jetson AGX Orin 64GB**. Ambas as configurações com GMSL incluem um **SSD NVMe de 128GB** e uma **placa de expansão GMSL de oito canais**. O gabinete mede **119 × 119 × 100 mm** e pesa **1325 g**.

A plataforma pode ser usada com NVIDIA Isaac ROS, ROS, PyTorch e outros softwares compatíveis com Jetson para percepção multicâmera, integração de sensores e desenvolvimento de robótica.

:::note
Opções de personalização disponíveis: identidade visual com logotipo, embalagem e gravação de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Comprar J5011 · 32GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Comprar J5012 · 64GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar agora ➜</font></span></strong></a>
</div>

## Recursos

- **Desempenho AGX Orin:** Até 275 TOPS com o módulo de 64GB, suportando cargas de trabalho de percepção e IA de borda.
- **Gabinete compacto:** Pegada de 119 × 119 mm para integração em robôs com restrição de espaço.
- **Conectividade de câmera:** O J5012 com GMSL inclui a placa de expansão GMSL para até oito câmeras GMSL2; use câmeras e drivers compatíveis.
- **Expansão com e sem fio:** Rede 10GbE e 1GbE, além de M.2 Key E para expansão Wi‑Fi/Bluetooth.
- **I/O para robótica:** CAN e RS485 isolados, entradas/saídas digitais, I2S, USB e HDMI.
- **Integração em sistemas 48V:** Entrada de energia XT30 com faixa de operação especificada de 19–48V DC e classificação máxima de entrada de 54V.

## Especificações

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Módulo de sistema Jetson AGX Orin</th></tr>
    <tr><th colSpan={2}>Especificações</th><th>reComputer Mini J5011</th><th>reComputer Mini J5012</th></tr>
    <tr><td colSpan={2}>Módulo</td><td>NVIDIA Jetson AGX Orin 32GB</td><td>NVIDIA Jetson AGX Orin 64GB</td></tr>
    <tr><td colSpan={2}>Desempenho de IA</td><td>Até 200 TOPS</td><td>Até 275 TOPS</td></tr>
    <tr><td colSpan={2}>GPU</td><td>GPU NVIDIA Ampere com 1792 núcleos<br />56 Tensor Cores</td><td>GPU NVIDIA Ampere com 2048 núcleos<br />64 Tensor Cores</td></tr>
    <tr><td colSpan={2}>Frequência máxima da GPU</td><td>930 MHz</td><td>1,3 GHz</td></tr>
    <tr><td colSpan={2}>CPU</td><td>Arm Cortex-A78AE de 8 núcleos</td><td>Arm Cortex-A78AE de 12 núcleos</td></tr>
    <tr><td colSpan={2}>Frequência máxima da CPU</td><td colSpan={2}>2,2 GHz</td></tr>
    <tr><td colSpan={2}>Memória</td><td>32GB LPDDR5 256-bit<br />204,8 GB/s</td><td>64GB LPDDR5 256-bit<br />204,8 GB/s</td></tr>
    <tr><td colSpan={2}>Armazenamento do módulo</td><td colSpan={2}>64GB eMMC 5.1</td></tr>
    <tr><td colSpan={2}>Codificador de vídeo</td><td>1 × 4K60 / 3 × 4K30 (H.265)<br />6 × 1080p60 / 12 × 1080p30 (H.265)</td><td>2 × 4K60 / 4 × 4K30 (H.265)<br />8 × 1080p60 / 16 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>Decodificador de vídeo</td><td>1 × 8K30 / 2 × 4K60 / 4 × 4K30 (H.265)<br />9 × 1080p60 / 18 × 1080p30 (H.265)</td><td>1 × 8K30 / 3 × 4K60 / 7 × 4K30 (H.265)<br />11 × 1080p60 / 22 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>Potência do módulo</td><td>15W / 40W</td><td>15W / 60W</td></tr>
    <tr><td colSpan={2}>JetPack</td><td colSpan={2}>JetPack 6.2 pré-instalado; suporta JetPack 7.2</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Placa carrier</th></tr>
    <tr><td colSpan={2}>Armazenamento</td><td colSpan={2}>SSD NVMe de 128GB incluído<br />1 × M.2 Key M para SSD NVMe 2280</td></tr>
    <tr><td rowSpan={2} style={{verticalAlign: 'middle'}}>Rede</td><td>Ethernet</td><td colSpan={2}>1 × RJ45 10GbE; 1 × RJ45 1GbE</td></tr>
    <tr><td>Expansão sem fio</td><td colSpan={2}>1 × M.2 Key E para módulo Wi‑Fi/Bluetooth</td></tr>
    <tr><td rowSpan={10} style={{verticalAlign: 'middle'}}>I/O</td><td>USB</td><td colSpan={2}>2 × USB 3.2 Gen 2 Type‑A (10Gbps)<br />1 × USB 2.0 Type‑C (Debug)<br />1 × USB 3.0 Type‑C (Recovery)</td></tr>
    <tr><td>Display</td><td colSpan={2}>1 × HDMI 2.1</td></tr>
    <tr><td>CAN</td><td colSpan={2}>2 × CAN isolado</td></tr>
    <tr><td>RS485</td><td colSpan={2}>1 × RS485 isolado</td></tr>
    <tr><td>I/O digital</td><td colSpan={2}>4 × GPI (3,3V); 4 × GPO (3,3V)</td></tr>
    <tr><td>I2S</td><td colSpan={2}>1 × I2S (3,3V)</td></tr>
    <tr><td>Ventoinha</td><td colSpan={2}>1 × conector de ventoinha de 4 pinos (PWM 12V)</td></tr>
    <tr><td>RTC</td><td colSpan={2}>1 × header RTC de 2 pinos</td></tr>
    <tr><td>Indicadores</td><td colSpan={2}>LEDs PWR, ACT e USR</td></tr>
    <tr><td>Botões</td><td colSpan={2}>1 × Reset; 1 × Recovery</td></tr>
    <tr><td colSpan={2}>Entrada de energia</td><td colSpan={2}>1 × XT30; 19–48V DC; entrada máxima 54V</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Placa de extensão GMSL</th></tr>
    <tr><td colSpan={2}>Conectividade GMSL</td><td colSpan={2}>Incluída em ambas as configurações com GMSL<br />2 × conectores Mini‑Fakra para até 8 câmeras GMSL2</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Outros</th></tr>
    <tr><td rowSpan={3} style={{verticalAlign: 'middle'}}>Mecânico</td><td>Dimensões (L × P × A)</td><td colSpan={2}>119 × 119 × 100 mm</td></tr>
    <tr><td>Peso</td><td colSpan={2}>1325 g</td></tr>
    <tr><td>Instalação</td><td colSpan={2}>Desktop</td></tr>
    <tr><td colSpan={2}>Temperatura de operação</td><td colSpan={2}>−10°C a 60°C</td></tr>
  </tbody>
</table>
</div>

## Visão geral do hardware

<div align="center">
  <img width="800" alt="Visão geral de hardware do reComputer Mini J501 1" src="https://media-cdn.seeedstudio.com/cdn-cgi/image/format=auto%2Cwidth=3840%2Cquality=100/media/wysiwyg/111-photo/1.hard.100020407.png" />
</div>

<div align="center">
  <img width="800" alt="Visão geral de hardware do reComputer Mini J501 2" src="https://www.seeedstudio.com/media/catalog/product/h/a/hardware_img_2.jpg" />
</div>

<div align="center">
  <img width="800" alt="Vista superior da placa carrier Mini J501" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png" />
</div>

<div align="center">
  <img width="800" alt="Vista lateral da placa carrier Mini J501" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png" />
</div>

<div align="center">
  <img width="800" alt="Vista inferior da placa carrier Mini J501" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png" />
</div>


## Gravar o sistema operacional JetPack

Esta seção mostra como gravar a imagem de sistema Mini J501 no SSD NVMe do reComputer Robotics J50 Mini.

### Módulos NVIDIA Jetson compatíveis

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Pré-requisitos

- PC host com Ubuntu
- reComputer Robotics J50 Mini com seu módulo Jetson AGX Orin, SSD NVMe e fonte de alimentação compatível
- Cabo de transmissão de dados USB Type‑C

:::info

Recomendamos que você use dispositivos host físicos com Ubuntu em vez de máquinas virtuais.
Consulte a tabela abaixo para preparar a máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowSpan="2"> Versão do JetPack </td>
        <td class="dbon" colSpan="4"> Versão do Ubuntu (computador host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Nota:</strong> Para o JetPack 7.2, o Ubuntu 24.04 é suportado apenas para gravação e instalação de componentes no dispositivo de destino. Use Ubuntu 20.04 ou 22.04 se você precisar de componentes de desenvolvimento no host.</p>

:::

### Preparar a imagem JetPack

Aqui, precisamos baixar a imagem de sistema para o nosso PC com Ubuntu correspondente ao módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Link de download1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Os arquivos de imagem do JetPack são grandes e podem levar cerca de 60 minutos para serem baixados. Aguarde até que o download seja concluído.
:::

:::info
Para verificar a integridade do firmware baixado, você pode comparar o valor de hash SHA256.

Em uma máquina host Ubuntu, abra o terminal e execute o comando `sha256sum <File>` para obter o valor de hash SHA256 do arquivo baixado. Se o hash resultante corresponder ao hash SHA256 fornecido no wiki, isso confirma que o firmware que você baixou está completo e intacto.
:::



### Entrar no modo Force Recovery

:::info
Antes de podermos prosseguir para as etapas de instalação, precisamos garantir que a placa esteja em modo force recovery.
:::

<details>

<summary> Passo a passo </summary>

**Passo 1.** Pressione e segure o botão **REC**.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface2.png" />
</div>

**Passo 2.** Ligue a carrier board conectando o cabo de alimentação e, em seguida, solte o botão **REC**.

**Passo 3.** Conecte a placa ao PC host Ubuntu com um cabo de transmissão de dados USB Type-C.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface1.png" />
</div>

**Passo 4.** No PC host Linux, abra uma janela do Terminal e insira o comando `lsusb`. Se o conteúdo retornado tiver uma das seguintes saídas de acordo com o Jetson SoM que você usa, então a placa está em modo force recovery.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

A imagem abaixo é para AGX Orin 32GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Gravar no Jetson passo a passo

**Passo 1:** Extraia o arquivo de imagem baixado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Passo 2:** Execute o seguinte comando para gravar o sistema JetPack no SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Você verá a seguinte saída se o processo de gravação for bem-sucedido

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
O comando de gravação pode ser executado por 2 a 10 minutos.
:::

**Passo 3:** Conecte o reComputer Robotics J50 Mini a um monitor via HDMI e, em seguida, conclua a configuração inicial do sistema:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Conclua a **System Configuration** de acordo com suas necessidades.
:::

**Passo 4 (opcional):** Instale o NVIDIA JetPack SDK. Abra um terminal no Jetson e execute:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso das interfaces de hardware

:::info[Guia de interface de hardware]
**Clique no botão abaixo para abrir o guia de interface da Mini J501 para pinagem de conectores, fiação e instruções de uso passo a passo.**
:::

<div style={{display: 'flex', justifyContent: 'center', margin: '1rem 0'}}>
  <a className="button button--primary button--lg" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.4', padding: '0.9rem 1.5rem'}} href="https://wiki.seeedstudio.com/pt-br/recomputer_j501_mini_getting_started/#-interfaces-usage" target="_blank" rel="noopener noreferrer">
    <span>Abrir guia de interface de hardware ↗</span>
  </a>
</div>

## Recursos

- [Código-fonte do Seeed Jetson BSP](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Manual do usuário do sistema completo e ficha técnica](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Mini_J501_Datasheet.pdf)
- [Esquemático da carrier board Mini J501](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Mini%20J501%20Carrier%20Board_Rev1.0_SCH_251027.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Para suporte técnico e discussões sobre produtos, use os seguintes canais.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum" aria-label="Seeed Studio forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email" aria-label="Contact Seeed Studio"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord" aria-label="Seeed Studio Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion" aria-label="GitHub discussions"></a>
</div>
