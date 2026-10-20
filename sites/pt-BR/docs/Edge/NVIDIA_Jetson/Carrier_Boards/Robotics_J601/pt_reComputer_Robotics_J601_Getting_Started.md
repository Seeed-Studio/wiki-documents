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
  date: 10/19/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-19'
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
    <span className="jetson-product-eyebrow">Robótica e IA física · NVIDIA Jetson AGX Thor</span>
    <h2>Conecte percepção e controle em uma única placa carrier de robótica</h2>
    <p>A placa carrier reComputer Robotics J601 aceita os módulos NVIDIA Jetson AGX Thor T5000 e T4000 para percepção com várias câmeras, fusão de sensores e desenvolvimento de IA incorporada. Ela combina Ethernet de alta velocidade, expansão de câmeras GMSL2 e I/O de robótica isolada com a plataforma de software Jetson.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">Comprar · Placa carrier J601 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Começar com o JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="Placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>Até 2070 TFLOPS</strong><span>Desempenho de IA com um módulo Jetson AGX Thor T5000</span></div>
  <div className="jetson-product-fact"><strong>Até 4× 10GbE</strong><span>Quatro portas RJ45 com T5000; três com T4000</span></div>
  <div className="jetson-product-fact"><strong>Até 8× GMSL2</strong><span>Entrada de várias câmeras por meio de duas placas de expansão GMSL</span></div>
  <div className="jetson-product-fact"><strong>19–48 V CC</strong><span>Entrada de ampla faixa por um conector de alimentação XT30</span></div>
</div>

## Escolha a configuração Jetson

A J601 é uma **placa carrier**. Selecione um módulo Jetson AGX Thor compatível, um SSD NVMe e uma solução de refrigeração para o seu conjunto. Os nomes J6015 e J6014 identificam as configurações específicas do módulo e os pacotes BSP usados neste guia.

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

## Por que o reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Percepção com várias câmeras</strong><span>As placas de expansão GMSL aceitam até oito câmeras GMSL2 para percepção surround e fusão de sensores.</span></div>
  <div className="jetson-product-feature"><strong>Rede de alta velocidade</strong><span>Até quatro conexões RJ45 10GbE transportam dados entre sensores, nós de computação e sistemas de desenvolvimento.</span></div>
  <div className="jetson-product-feature"><strong>I/O de robótica</strong><span>CAN FD isolado, RS-232/422/485, I2C, I2S e I/O digital conectam controladores, sensores e atuadores.</span></div>
  <div className="jetson-product-feature"><strong>Expansão modular</strong><span>M.2 Key M aceita um SSD NVMe 2280; Key E e Key B aceitam módulos compatíveis de Wi-Fi/Bluetooth e 4G/5G.</span></div>
  <div className="jetson-product-feature"><strong>Conectividade de desenvolvimento</strong><span>Quatro portas USB 3.2 Type-A e HDMI 2.1 conectam periféricos e um monitor, com portas USB-C separadas para depuração e recuperação.</span></div>
  <div className="jetson-product-feature"><strong>Fluxos de IA física</strong><span>Desenvolva no Jetson com frameworks como NVIDIA Isaac, ROS, PyTorch e Hugging Face, seguindo os requisitos de plataforma de cada um.</span></div>
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
      <td>1x M.2 Key M para SSD PCIe Gen 4 NVMe 2280</td>
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

## Visão geral do hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="Vista lateral 1 do reComputer Robotics J601 · conectores da placa carrier" loading="lazy" />
    <figcaption>Vista lateral 1 · Conectores da placa carrier</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="Vista lateral 2 do reComputer Robotics J601 · interfaces adicionais" loading="lazy" />
    <figcaption>Vista lateral 2 · Interfaces adicionais</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="Vista inferior do reComputer Robotics J601 · slots de expansão e layout da placa" loading="lazy" />
    <figcaption>Vista inferior · Slots de expansão e layout da placa</figcaption>
  </figure>
</div>

| Indicador | Cor | Função |
| --- | --- | --- |
| PWR | Verde | Indicador de alimentação |
| SSD | Verde | Indicador de atividade de armazenamento |
| USR | RGB | LED de status controlável pelo usuário |

Para pinagem, fiação, testes de interface e controle do LED RGB, abra [Hardware e I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/).

## Gravar o JetPack {#flash-jetpack}

Este fluxo instala o **JetPack 7.1 (L4T 38.4.0)** em um SSD NVMe na placa carrier J601. Escolha o BSP do módulo instalado: **J6015 para T5000** ou **J6014 para T4000**.

:::caution
A gravação apaga os dados do SSD NVMe de destino. Faça backup dos dados importantes antes de começar e mantenha a alimentação e o USB conectados até a gravação terminar.
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Prepare o equipamento</h3>
    <p className="jetson-product-step-label">Etapa 1 · Prepare o host Ubuntu e o hardware de destino</p>

Prepare o seguinte equipamento:

- Placa carrier J601 com um módulo Jetson AGX Thor T5000 ou T4000 e refrigeração adequada
- SSD NVMe M.2 2280 instalado no slot Key M
- Fonte de 19–48 V CC conectada pelo XT30
- PC host Ubuntu **22.04 ou 24.04** físico com **pelo menos 220 GB** de armazenamento livre
- Cabo de **dados** USB Type-C
- Monitor HDMI, teclado e mouse para a primeira inicialização

:::tip
Um host Ubuntu nativo oferece a experiência de gravação mais confiável. O Seeed Jetson DevelopTool também oferece suporte ao Windows pelo WSL2; siga o [guia de instalação](/jetson_developtool_installation/) para preparar o host.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Entre no modo Force Recovery</h3>
    <p className="jetson-product-step-label">Etapa 2 · Conecte o J4 e confirme o módulo instalado</p>

1. Com a placa desligada, conecte o PC host à **porta USB 3.0 Type-C de recuperação/gravação (J4)**. A porta USB 2.0 Type-C de depuração (J3) é um conector separado.
2. Mantenha **RECOVERY** pressionado.
3. Conecte a fonte de 19–48 V CC pelo XT30.
4. Solte **RECOVERY** após dois segundos.
5. Execute o comando a seguir no host Ubuntu:

```bash
lsusb
```

| Configuração | Módulo | ID USB de recuperação esperado |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="Conexões da porta USB-C de gravação e do botão de recuperação da J601" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="Saída do lsusb no host Ubuntu enquanto uma J601 está no modo Force Recovery" loading="lazy" />

Se o ID esperado não aparecer, verifique o cabo de dados e a porta de recuperação e repita a sequência antes de continuar.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Prepare o BSP correspondente</h3>
    <p className="jetson-product-step-label">Etapa 3 · Escolha a gravação por software ou por linha de comando</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Gravação por software" default>

Instale e inicie o [Seeed Jetson DevelopTool](/jetson_developtool_installation/) e prepare o firmware:

1. Abra o **Flash Center** e selecione **reComputer J601** e **JetPack 7.1 (L4T 38.4.0)**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="Flash Center do Jetson DevelopTool com reComputer J601 selecionado" loading="lazy" />

2. Confirme a fiação de recuperação da etapa 2.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="Conexões de alimentação e USB da J601 para o Jetson DevelopTool" loading="lazy" />

3. Clique em **Detect Device**, confirme o módulo instalado e clique em **Next**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool detectando o módulo AGX Thor" loading="lazy" />

4. Clique em **Download / Prepare BSP**. A ferramenta baixa o firmware, verifica o checksum SHA-256 e extrai o pacote.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool baixando e preparando o BSP da J601" loading="lazy" />

<details>
<summary>Assistir ao tutorial de gravação com o Jetson DevelopTool</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Gravar o JetPack no reComputer J601 com o Seeed Jetson DevelopTool" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="Gravação via linha de comando">

Baixe o pacote BSP **específico do módulo** abaixo. O arquivo é grande; o download pode levar cerca de 60 minutos. Espere o download terminar antes de extraí-lo.

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
      <th>Link de download</th>
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
      <th>Link de download</th>
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

No host Ubuntu, verifique o arquivo baixado e compare o resultado completo com o checksum do seu módulo:

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
    <h3>Grave o SSD NVMe</h3>
    <p className="jetson-product-step-label">Etapa 4 · Use o mesmo método de gravação e a mesma seleção de módulo</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Gravação por software" default>

Clique em **Start Flash** no Jetson DevelopTool e aguarde a interface informar sucesso. Mantenha a fonte de alimentação e o cabo de dados USB conectados durante todo o processo.

</TabItem>
<TabItem value="command-line" label="Gravação via linha de comando">

Extraia o arquivo no host Ubuntu e execute o comando do módulo instalado. Substitua `YYYY-MM-DD` pela data no nome do arquivo baixado.

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

O comando de gravação costuma levar de 2 a 10 minutos. Aguarde o terminal informar que a gravação foi concluída com sucesso.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Exemplo de saída do terminal após uma gravação bem-sucedida do Jetson" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>Conclua a primeira inicialização</h3>
    <p className="jetson-product-step-label">Etapa 5 · Configure o Ubuntu e verifique as interfaces</p>

Conecte o monitor HDMI, o teclado e o mouse e conclua a configuração inicial do sistema Ubuntu. Se a tela de configuração não aparecer depois da gravação, desligue e ligue a placa depois que a ferramenta informar sucesso.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Exemplo da tela de configuração da primeira inicialização do Ubuntu no Jetson" loading="lazy" />

Continue em [Hardware e I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) para verificar os periféricos, ou explore a [demo de percepção](#applications). As fontes de device tree e BSP da placa carrier da Seeed estão disponíveis em [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

  </div>
</section>

</div>

## Aplicações {#applications}

Comece com um exemplo de percepção por câmera e LiDAR para o reComputer Robotics J601.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="Abrir o repositório da demo de percepção com várias câmeras e LiDAR da J601">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="Prévia em vídeo da demo de percepção por câmera e LiDAR da J601" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Recursos da aplicação"><span>Detecção</span><span>Fusão de sensores</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Percepção com várias câmeras e LiDAR</a></h3>
      <p>Reproduz seis fluxos de câmera e dados de LiDAR enquanto o Jetson executa detecção com TensorRT, segmentação de estrada, fusão geométrica em visão aérea e mapeamento local alinhado à pose, com visualizações sincronizadas no navegador.</p>
    </div>
  </article>
</div>

### Assistir à demo de percepção

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="Demo de percepção com várias câmeras e LiDAR do reComputer J601" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Obter a demo e o guia de implantação ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">Assistir no YouTube ↗</a>
</div>

O repositório documenta a validação em **JetPack 7.2 / L4T R39.2, CUDA 13.2 e TensorRT 10.16.2**. Siga as instruções de ambiente e implantação dele; o pacote de gravação **JetPack 7.1** desta página é uma linha de base de software separada. Compile os engines TensorRT no dispositivo de destino para as versões de software instaladas.

A demo usa dados nuScenes gravados e fusão geométrica de câmera/LiDAR. O mapa local usa poses fornecidas pelo conjunto de dados; a precisão da segmentação no nuScenes não foi avaliada. Consulte o repositório para as condições de validação e as licenças do conjunto de dados e dos modelos.

## Recursos {#resources}

Use estes recursos para integração da placa, projeto mecânico e desenvolvimento do BSP.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Datasheet da placa carrier</strong><small>Pinagem dos conectores, limites elétricos e especificações da placa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Esquema da placa carrier</strong><small>Circuitos e roteamento de sinais da J601 V1.0</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>Modelo mecânico 3D</strong><small>Modelo STEP para montagem e planejamento do gabinete</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Código-fonte do Linux_for_Tegra</strong><small>Fontes do BSP Jetson da Seeed e da device tree</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>Placa carrier J601</strong><small>Opções de compra da placa carrier Jetson AGX Thor</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Catálogo de produtos Jetson</strong><small>Veja os produtos NVIDIA Jetson da Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Casos de sucesso Jetson</strong><small>Exemplos de implantação em aplicações de IA de borda</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Resumo de uma página do Jetson AGX</strong><small>Visão geral da plataforma Jetson AGX da Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Fórum da comunidade Seeed"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Falar com o suporte da Seeed"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Comunidade Discord da Seeed"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Discussão de produtos da wiki"></a>
</div>

</div>
