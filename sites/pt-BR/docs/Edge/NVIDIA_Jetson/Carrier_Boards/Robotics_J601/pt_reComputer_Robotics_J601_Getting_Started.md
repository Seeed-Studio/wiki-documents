---
description: Introdução à placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor.
title: Introdução ao reComputer Robotics J601
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg
slug: /jetson/recomputer_robotics_j601/getting_started
aliases:
  - /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 10/22/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/pt-br/jetson/recomputer_robotics_j601/getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# Introdução ao reComputer Robotics J601

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">Robótica e IA Física · NVIDIA Jetson AGX Thor</span>
    <h2>Conecte percepção e controle em uma única placa carrier para robótica</h2>
    <p>A placa carrier reComputer Robotics J601 oferece suporte aos módulos NVIDIA Jetson AGX Thor T5000 e T4000 para percepção multicâmera, fusão de sensores e desenvolvimento de IA incorporada. Combine Ethernet de alta velocidade, expansão de câmera GMSL2 e I/O de robótica isolado com a plataforma de software Jetson.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">Comprar · Placa carrier J601 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Começar com JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="Placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>Até 2070 TFLOPS</strong><span>Desempenho de IA com um módulo Jetson AGX Thor T5000</span></div>
  <div className="jetson-product-fact"><strong>Até 4× 10GbE</strong><span>Quatro portas RJ45 com T5000; três com T4000</span></div>
  <div className="jetson-product-fact"><strong>Até 8× GMSL2</strong><span>Entrada multicâmera por meio de duas placas de extensão GMSL</span></div>
  <div className="jetson-product-fact"><strong>19–48 V DC</strong><span>Entrada de ampla faixa por meio de um conector de energia XT30</span></div>
</div>

## Escolha sua configuração Jetson

A J601 é uma **placa carrier**. Selecione um módulo Jetson AGX Thor compatível, um SSD NVMe e uma solução de resfriamento para o seu projeto. Os nomes J6015 e J6014 abaixo identificam as configurações específicas de módulo e os pacotes BSP usados neste guia.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuração T5000</span>
    <h3>reComputer Robotics J6015</h3>
    <p>Use o BSP T5000 para a configuração com quatro portas 10GbE ativas e quatro interfaces CAN isoladas.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuração T4000</span>
    <h3>reComputer Robotics J6014</h3>
    <p>Use o BSP T4000 para a configuração com três portas 10GbE ativas e duas interfaces CAN isoladas.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

Módulos compatíveis: [NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) e [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html).

## Por que reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Percepção multicâmera</strong><span>Placas de extensão GMSL suportam até oito câmeras GMSL2 para percepção ao redor e fusão de sensores.</span></div>
  <div className="jetson-product-feature"><strong>Rede de alta velocidade</strong><span>Até quatro conexões RJ45 10GbE transportam dados entre sensores, nós de computação e sistemas de desenvolvimento.</span></div>
  <div className="jetson-product-feature"><strong>I/O para robótica</strong><span>CAN FD isolado, RS-232/422/485, I2C, I2S e I/O digital conectam controladores, sensores e atuadores.</span></div>
  <div className="jetson-product-feature"><strong>Expansão modular</strong><span>M.2 Key M suporta um SSD NVMe 2280; Key E e Key B suportam módulos Wi-Fi/Bluetooth e 4G/5G compatíveis.</span></div>
  <div className="jetson-product-feature"><strong>Conectividade para desenvolvimento</strong><span>Quatro portas USB 3.2 Type-A e HDMI 2.1 conectam periféricos e um monitor, com portas USB-C separadas para depuração e recuperação.</span></div>
  <div className="jetson-product-feature"><strong>Fluxos de trabalho de IA física</strong><span>Desenvolva no Jetson com frameworks como NVIDIA Isaac, ROS, PyTorch e Hugging Face, seguindo os requisitos de plataforma de cada framework.</span></div>
</div>

## Especificações

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">Interface / Propriedade</th><th scope="col">Placa carrier J601</th></tr></thead>
  <tbody>
    <tr>
      <td>Compatibilidade de módulo</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>Tamanho da PCB</td>
      <td>168 mm x 155 mm (sem o módulo Jetson AGX Thor)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A (10Gbps, Host), 1x USB 2.0 Type-C (Debug), 1x USB 3.0 Type-C (Recovery)</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>4x RJ45 10GbE com T5000; 3x RJ45 10GbE com T4000</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M para SSD NVMe 2280 PCIe Gen 4</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E para módulo Wi-Fi M.2 2230</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B para módulo 4G/5G</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td>1x RS-232/422/485 (conector DB9)</td>
    </tr>
    <tr>
      <td>Portas JST</td>
      <td>4x CAN com T5000 ou 2x CAN com T4000, 1x RS-485, 1x I2S, 1x I2C, 4x GPI e 4x GPO</td>
    </tr>
    <tr>
      <td>Áudio</td>
      <td>1x entrada de microfone e 1x saída de áudio</td>
    </tr>
    <tr>
      <td>Ventoinha</td>
      <td>1x conector de ventoinha de 4 pinos (12V PWM)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x header RTC de 2 pinos</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>1x LED PWR verde, 1x LED SSD verde e 1x LED USR RGB</td>
    </tr>
    <tr>
      <td>Botões</td>
      <td>1x botão Recovery e 1x botão Reset</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x conectores Mini-Fakra para até 8x câmeras GMSL2</td>
    </tr>
    <tr>
      <td>Temperatura de operação</td>
      <td>-10°C a 60°C com pasta térmica; -10°C a 55°C com um pad térmico</td>
    </tr>
    <tr>
      <td>Fonte de alimentação</td>
      <td>XT30, 19V a 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## Visão geral de hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="reComputer Robotics J601 vista lateral 1 · conectores da placa carrier" loading="lazy" />
    <figcaption>Vista lateral 1 · Conectores da placa carrier</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="reComputer Robotics J601 vista lateral 2 · interfaces adicionais" loading="lazy" />
    <figcaption>Vista lateral 2 · Interfaces adicionais</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="reComputer Robotics J601 vista inferior · slots de expansão e layout da placa" loading="lazy" />
    <figcaption>Vista inferior · Slots de expansão e layout da placa</figcaption>
  </figure>
</div>

| Indicador | Cor | Função |
| --- | --- | --- |
| PWR | Verde | Indicador de energia |
| SSD | Verde | Indicador de atividade de armazenamento |
| USR | RGB | LED de status controlável pelo usuário |

Para pinagens de conectores, fiação, testes de interface e controle do LED RGB, abra [Hardware & I/O](/pt-br/jetson/recomputer_robotics_j601/hardware_and_interface_usage/).

## Gravar o JetPack

Este fluxo de trabalho instala **JetPack 7.1 (L4T 38.4.0)** em um SSD NVMe na placa carrier J601. Escolha o BSP para o módulo instalado: **J6015 para T5000** ou **J6014 para T4000**.

:::caution
A gravação apaga os dados no SSD NVMe de destino. Faça backup dos dados importantes antes de começar e mantenha a alimentação e o USB conectados até a conclusão da gravação.
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Prepare o equipamento</h3>
    <p className="jetson-product-step-label">Etapa 1 · Configure o host Ubuntu e o hardware de destino</p>

Prepare o seguinte equipamento:

- Placa carrier J601 com um módulo Jetson AGX Thor T5000 ou T4000 e resfriamento adequado
- SSD NVMe M.2 2280 instalado no slot Key M
- Fonte de alimentação de 19–48 V DC conectada via XT30
- PC host físico com Ubuntu **22.04 ou 24.04** com **pelo menos 220 GB** de armazenamento livre
- Cabo USB Type-C **de dados**
- Monitor HDMI, teclado e mouse para o primeiro boot

:::tip
Um host Ubuntu nativo oferece a experiência de gravação mais confiável. O Seeed Jetson DevelopTool também oferece suporte ao Windows por meio do WSL2; siga seu [guia de instalação](/pt-br/jetson_developtool_installation/) para configurar o host.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Entrar no modo Force Recovery</h3>
    <p className="jetson-product-step-label">Etapa 2 · Conecte J4 e verifique o módulo instalado</p>

1. Com a placa desligada, conecte o PC host à **porta USB 3.0 Type-C de recuperação/gravação (J4)**. A porta USB 2.0 Type-C de depuração (J3) é um conector separado.
2. Pressione e segure **RECOVERY**.
3. Conecte a fonte de alimentação CC de 19–48 V através do conector XT30.
4. Solte **RECOVERY** após dois segundos.
5. Execute o seguinte comando no host Ubuntu:

```bash
lsusb
```

| Configuração | Módulo | ID USB de recuperação esperado |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="Conexões da porta USB-C de gravação e botão de recuperação da J601" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="Saída do comando lsusb no host Ubuntu enquanto uma J601 está em Force Recovery Mode" loading="lazy" />

Se o ID esperado não aparecer, verifique o cabo de dados e a porta de recuperação e repita a sequência de recuperação antes de continuar.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Preparar o BSP correspondente</h3>
    <p className="jetson-product-step-label">Etapa 3 · Escolha gravação via software ou linha de comando</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Gravação via Software" default>

Instale e inicie o [Seeed Jetson DevelopTool](/pt-br/jetson_developtool_installation/), depois prepare o firmware:

1. Abra **Flash Center** e selecione **reComputer J601** e **JetPack 7.1 (L4T 38.4.0)**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="Flash Center do Jetson DevelopTool com reComputer J601 selecionado" loading="lazy" />

2. Confirme a fiação de recuperação da Etapa 2.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="Conexões de energia e USB da J601 para o Jetson DevelopTool" loading="lazy" />

3. Clique em **Detect Device**, confirme o módulo instalado e clique em **Next**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool detectando o módulo AGX Thor" loading="lazy" />

4. Clique em **Download / Prepare BSP**. A ferramenta faz o download do firmware, verifica o checksum SHA-256 e extrai o pacote.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool baixando e preparando o BSP da J601" loading="lazy" />

<details>
<summary>Assista ao tutorial de gravação com o Jetson DevelopTool</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Gravar o JetPack na reComputer J601 com o Seeed Jetson DevelopTool" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="Gravação via Linha de Comando">

Baixe o pacote BSP **específico do módulo** abaixo. O arquivo compactado é grande; o download pode levar cerca de 60 minutos. Aguarde o término do download antes de extraí-lo.

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

<div className="jetson-product-table-wrap">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Módulo Jetson</th>
      <th>Produto</th>
      <th>Link para Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

<div className="jetson-product-table-wrap">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Versão do JetPack</th>
      <th>Módulo Jetson</th>
      <th>Produto</th>
      <th>Link para Download</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

</TabItem>
</Tabs>

No host Ubuntu, verifique o arquivo compactado baixado e compare o resultado completo com o checksum do seu módulo:

```bash
sha256sum <downloaded-archive.tar.gz>
```

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>Gravar o SSD NVMe</h3>
    <p className="jetson-product-step-label">Etapa 4 · Use o mesmo método de gravação e seleção de módulo</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Gravação via Software" default>

Clique em **Start Flash** no Jetson DevelopTool e aguarde até que a interface indique sucesso. Mantenha a fonte de alimentação e o cabo de dados USB conectados durante todo o processo.

</TabItem>
<TabItem value="command-line" label="Gravação via Linha de Comando">

Extraia o arquivo compactado no host Ubuntu e execute o comando correspondente ao módulo instalado. Substitua `YYYY-MM-DD` pela data presente no nome do arquivo baixado.

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

</TabItem>
</Tabs>

O comando de gravação geralmente leva de 2 a 10 minutos. Aguarde até o terminal indicar que a gravação foi concluída com sucesso.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Exemplo de saída do terminal após gravação bem-sucedida do Jetson" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>Concluir a primeira inicialização</h3>
    <p className="jetson-product-step-label">Etapa 5 · Configure o Ubuntu e verifique suas interfaces</p>

Conecte o monitor HDMI, o teclado e o mouse e conclua a configuração inicial do sistema Ubuntu. Se a tela de configuração não aparecer após a gravação, desligue e ligue a placa novamente depois que a ferramenta de gravação indicar sucesso.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Exemplo de tela de configuração do Ubuntu na primeira inicialização do Jetson" loading="lazy" />

Continue em [Hardware & I/O](/pt-br/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) para verificar seus periféricos ou explore a [demonstração de percepção](#applications). Os device trees da placa-carregadora da Seeed e os fontes do BSP estão disponíveis em [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

  </div>
</section>

</div>

:::tip Opcional: explore outras carrier boards Jetson
Após concluir a configuração, você pode explorar downloads de firmware e instruções de gravação para outras carrier boards Jetson da Seeed.

<div className="jetson-product-actions">
  <a className="jetson-product-button jetson-product-button--secondary" href="/pt-br/flash/jetpack_to_selected_product/" target="_blank" rel="noopener noreferrer">Navegar por outros guias de gravação Jetson ↗</a>
</div>

:::

## Aplicações

Comece com um exemplo de percepção com câmera e LiDAR para o reComputer Robotics J601.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="Abrir o repositório da demonstração de percepção com múltiplas câmeras e LiDAR da J601">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="Prévia em vídeo da demonstração de percepção com câmera e LiDAR da J601" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Recursos da aplicação"><span>Detecção</span><span>Fusão de Sensores</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Percepção com Múltiplas Câmeras e LiDAR</a></h3>
      <p>Reproduza seis fluxos de câmera e dados de LiDAR enquanto o Jetson executa detecção com TensorRT, segmentação de pista, fusão geométrica em visão de cima (bird's-eye view) e mapeamento local alinhado à pose, com visualizações sincronizadas no navegador.</p>
    </div>
  </article>
</div>

### Assista à demonstração de percepção

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 multi-camera and LiDAR perception demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Obtenha a demonstração e o guia de implantação ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">Assista no YouTube ↗</a>
</div>

O repositório documenta a validação em **JetPack 7.2 / L4T R39.2, CUDA 13.2 e TensorRT 10.16.2**. Siga as instruções de ambiente e implantação dele; o pacote de gravação **JetPack 7.1** desta página é uma base de software separada. Gere os engines do TensorRT no dispositivo de destino para as versões de software instaladas.

A demonstração usa dados gravados do nuScenes e fusão geométrica de câmera/LiDAR. Seu mapa local usa poses fornecidas pelo conjunto de dados; a precisão da segmentação no nuScenes não foi avaliada. Consulte o repositório para condições de validação e licenças de conjunto de dados/modelo.

## Recursos

Use estes recursos para integração da placa, projeto mecânico e desenvolvimento de BSP.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Datasheet da Carrier Board</strong><small>Mapeamento de pinos dos conectores, limites elétricos e especificações da placa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Esquemático da Carrier Board</strong><small>Circuitos e roteamento de sinais da J601 V1.0</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>Modelo mecânico 3D</strong><small>Modelo STEP para planejamento de fixação e gabinete</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Código-fonte do Linux_for_Tegra</strong><small>Fontes do BSP Jetson da Seeed e device tree</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>Carrier Board J601</strong><small>Opções de compra para a carrier board Jetson AGX Thor</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Catálogo de produtos Jetson</strong><small>Navegue pelos produtos Seeed NVIDIA Jetson</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Casos de sucesso com Jetson</strong><small>Exemplos de implantação em aplicações de IA de borda</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Resumo Jetson AGX (One Pager)</strong><small>Visão geral da plataforma Seeed Jetson AGX</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Suporte técnico e discussão sobre o produto


Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
