---
description: Introdução ao reComputer Rugged J40
title: Introdução ao reComputer Rugged J40
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - Introdução
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg
slug: /jetson/recomputer_rugged_j401/getting_started
aliases:
  - /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 09/30/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/pt-br/jetson/recomputer_rugged_j401/getting_started/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';
import Link from '@docusaurus/Link';

# Introdução ao reComputer Rugged J40

<JetsonProductDocNav {...ruggedJ401DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">IA de borda robusta · NVIDIA Jetson</span>
    <h2>Implante IA onde poeira, água e vibração fazem parte do trabalho</h2>
    <p>O reComputer Rugged J40 combina o desempenho do NVIDIA Jetson Orin com um gabinete sem ventoinha com classificação IP66 e conectividade M12 com trava. Foi projetado para implantação confiável de IA de borda em veículos, portos, fazendas, no mar e em instalações industriais.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">Obter reComputer Rugged J4012 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Começar com o JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg" alt="Computador industrial de IA de borda reComputer Rugged J40" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>IP66</strong><span>Vedado contra poeira e jatos potentes de água</span></div>
  <div className="jetson-product-fact"><strong>Até 100 TOPS</strong><span>Desempenho de IA de borda do Jetson Orin NX 16GB</span></div>
  <div className="jetson-product-fact"><strong>4× PoE GbE</strong><span>Alimenta e conecta câmeras IP industriais</span></div>
  <div className="jetson-product-fact"><strong>−20°C a 60°C</strong><span>Operação sem ventoinha com fluxo de ar de 0,7 m/s</span></div>
</div>

## Escolha a configuração Jetson

As duas configurações usam o mesmo gabinete robusto e o mesmo conjunto de interfaces industriais. Escolha o módulo Jetson de acordo com a carga de trabalho de IA, o requisito de memória e o orçamento de energia da implantação.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuração de desempenho</span>
    <h3>reComputer Rugged J4012</h3>
    <p>Para visão com várias câmeras, modelos de IA maiores e cargas que se beneficiam de mais largura de banda de GPU e memória.</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin NX</span>
      <span>16GB LPDDR5</span>
      <span>100 TOPS</span>
    </div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuração de eficiência</span>
    <h3>reComputer Rugged J3011</h3>
    <p>Para percepção eficiente, monitoramento, telemetria e controle industrial com um perfil de consumo mais baixo.</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin Nano</span>
      <span>8GB LPDDR5</span>
      <span>40 TOPS</span>
    </div>
  </article>
</div>

## Por que o reComputer Rugged J40

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Conectividade M12 selada</strong><span>Conectores com trava ajudam a manter estáveis a alimentação, a rede e a E/S em instalações móveis e externas.</span></div>
  <div className="jetson-product-feature"><strong>Resfriamento passivo sem ventoinha</strong><span>A ausência de uma ventoinha móvel reduz a manutenção em ambientes com poeira e permite operação silenciosa.</span></div>
  <div className="jetson-product-feature"><strong>E/S industrial</strong><span>CAN-FD isolado, RS-232/422/485 e E/S digital conectam-se diretamente a sensores, atuadores e controladores.</span></div>
  <div className="jetson-product-feature"><strong>Rede pronta para câmeras</strong><span>Quatro portas PoE GbE simplificam sistemas com várias câmeras ao transportar dados e energia no mesmo cabo.</span></div>
  <div className="jetson-product-feature"><strong>Expansão sem fio</strong><span>Os slots M.2 Key E e Key B aceitam expansão de Wi-Fi, Bluetooth, 5G e GPS.</span></div>
  <div className="jetson-product-feature"><strong>Implantação veicular e externa</strong><span>Entrada de ampla tensão, resistência à vibração e gabinete IP66 atendem AMRs, veículos, embarcações e equipamentos de campo.</span></div>
</div>

## Especificações

<div className="jetson-product-table-wrap">
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
      <td>1024 núcleos NVIDIA Ampere, 32 Tensor Cores</td>
      <td>1024 núcleos NVIDIA Ampere, 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 núcleos Arm Cortex-A78AE v8.2 64-bit, 2MB L2 + 4MB L3</td>
      <td>6 núcleos Arm Cortex-A78AE v8.2 64-bit, 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memória</td>
      <td>16GB 128-bit LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>Armazenamento</td>
      <td>eMMC</td>
      <td colSpan={2}>—</td>
    </tr>
    <tr>
      <td>Expansão</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB incluído</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE PoE PSE (802.3af, M12 à prova d'água) + 1× GbE (M12 à prova d'água)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Type-A (M12 à prova d'água) + 1× USB 2.0/3.0 Type-C (gravação, tampa à prova d'água) + 1× USB Type-C (debug)</td>
    </tr>
    <tr>
      <td>Display</td>
      <td colSpan={2}>1× HDMI (tampa à prova d'água)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD (isolado, 120 Ω) via M12 A-code 8 pinos</td>
    </tr>
    <tr>
      <td>Serial</td>
      <td colSpan={2}>1× RS-232/422/485 via M12 A-code 8 pinos</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO via M12 12 pinos / 8 pinos</td>
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
      <td colSpan={2}>−20°C a +60°C (com fluxo de ar de 0,7 m/s)</td>
    </tr>
    <tr>
      <td>Umidade</td>
      <td colSpan={2}>10–95% RH (sem condensação)</td>
    </tr>
    <tr>
      <td>Vibração</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz, aleatório, 1 hr/eixo</td>
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
</div>

## Visão geral do hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png" alt="Vista lateral do reComputer Rugged J40 mostrando os conectores industriais" />
    <figcaption>Vista lateral · Conexões de rede, USB, vídeo e antena</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png" alt="Vista lateral oposta do reComputer Rugged J40" />
    <figcaption>Vista lateral · Conexões de alimentação, serial, CAN e E/S digital</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png" alt="Vista inferior do reComputer Rugged J40" />
    <figcaption>Vista inferior · Montagem e layout do gabinete</figcaption>
  </figure>
</div>

### Indicadores LED

| LED | Cor | Status | Descrição |
| --- | --- | --- | --- |
| PWR | Verde | On | Dispositivo está energizado |
| PWR | Verde | Off | Dispositivo não está energizado |
| ACT | Verde | Flashing | Atividade de acesso ao SSD |

Para pinagens dos conectores, configuração de interfaces e instruções de expansão, continue no [guia de hardware e I/O](/jetson/recomputer_rugged_j401/hardware_and_interface_usage/).

## Gravar o JetPack {#flash-jetpack}

Siga o fluxo na ordem indicada. O layout numerado reúne em um só lugar a preparação do host, a operação no modo de recuperação e os comandos de terminal.

<div className="jetson-product-step-flow">
<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Escolha e baixe o BSP</h3>
    <p className="jetson-product-step-label">Passo 1 · Combine a imagem com a configuração exata do Jetson</p>

Abra a página de recursos de gravação do Jetson e verifique a imagem mais recente para o modelo exato do reComputer Rugged e o módulo Jetson.

<div className="jetson-product-actions">
  <Link className="jetson-product-button" to="/flash/jetpack_to_selected_product" target="_blank" rel="noopener noreferrer">Abrir o seletor de imagens JetPack ↗</Link>
</div>

:::warning
Não grave uma imagem de outra placa carrier ou de outro módulo Jetson. Se a configuração exata do reComputer Rugged J4012 ou J3011 não estiver na lista, entre em contato com o suporte da Seeed Studio antes de continuar.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Prepare o equipamento</h3>
    <p className="jetson-product-step-label">Passo 2 · Configure o host Ubuntu e os cabos</p>

Prepare os itens a seguir antes de desconectar ou energizar o dispositivo:

- reComputer Rugged J4012 ou J3011
- Fonte de alimentação de 19–48 V DC
- PC host físico com Ubuntu 20.04 ou 22.04
- Cabo de dados USB Type-C para gravação
- Monitor externo e cabo HDMI
- Teclado e mouse

:::tip
Use um host Ubuntu físico sempre que possível. O repasse de USB em uma máquina virtual pode interromper a gravação.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Entre no modo Force Recovery</h3>
    <p className="jetson-product-step-label">Passo 3 · Conecte a porta DEVICE e verifique o ID USB</p>

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg" alt="Botão de recuperação e porta DEVICE usados para gravar o reComputer Rugged J40" />

1. Conecte um cabo de dados USB Type-C entre a porta **DEVICE** e o host Ubuntu.
2. Pressione e segure o botão **REC**.
3. Enquanto mantém **REC** pressionado, conecte a fonte de alimentação para ligar o dispositivo.
4. Solte o botão **REC**.
5. No host Ubuntu, verifique se o Jetson foi detectado:

```bash
lsusb
```

Saída esperada por configuração:

| Produto | Módulo Jetson | ID USB esperado |
| --- | --- | --- |
| reComputer Rugged J4012 | Orin NX 16GB | `0955:7323 NVidia Corp` |
| reComputer Rugged J3011 | Orin Nano 8GB | `0955:7523 NVidia Corp` |

Se o ID esperado não aparecer, reconecte o cabo USB, tente outra porta USB do host e repita a sequência de recuperação antes de continuar.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>Extraia e grave a imagem</h3>
    <p className="jetson-product-step-label">Passo 4 · Execute o pacote de gravação em massa a partir do host Ubuntu</p>

Mude para o diretório que contém a imagem baixada e extraia-a:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

Entre no diretório extraído e inicie a gravação:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

Aguarde até o terminal informar que a gravação foi concluída com sucesso. Em seguida, desconecte o cabo USB, religue o reComputer, conecte o monitor e os dispositivos de entrada e conclua a configuração inicial do Ubuntu.

  </div>
</section>
</div>

## Aplicações {#applications}

Explore exemplos de aplicação que combinam o hardware do reComputer Rugged J40 com fluxos de trabalho de IA de borda prontos para implantação. Novos exemplos podem ser adicionados a esta coleção quando estiverem disponíveis.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <Link className="jetson-product-application-cover" to="/jetson/recomputer_rugged_j401/industrial_vision/" aria-label="Abrir a aplicação de visão para empilhadeiras industriais">
      <img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="Aplicações de visão para empilhadeiras industriais com o reComputer Rugged J401" />
    </Link>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Recursos da aplicação">
        <span>Detecção</span>
        <span>Benchmark de inferência</span>
      </div>
      <h3><Link to="/jetson/recomputer_rugged_j401/industrial_vision/">Visão para empilhadeiras industriais</Link></h3>
      <p>Implante detecção com várias câmeras, alerta de profundidade, monitoramento do motorista, rastreamento de alvos e cargas de inferência medidas do Jetson no reComputer Rugged J401.</p>
    </div>
  </article>
</div>

## Recursos

Use estes arquivos para integração mecânica, revisão do projeto da placa carrier, desenvolvimento do BSP e seleção da plataforma Jetson.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Folha de dados do produto</strong><small>Especificações elétricas, mecânicas e ambientais</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Esquemático da placa carrier</strong><small>Revise os circuitos e o roteamento de sinais</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PSE</span>
    <span className="jetson-product-resource-copy"><strong>Esquemático da placa PSE</strong><small>Referência de projeto do circuito de alimentação PoE</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>Modelo mecânico 3D</strong><small>Montagem STEP para instalação e planejamento do gabinete</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Código-fonte do Linux_for_Tegra</strong><small>Fontes do BSP Jetson da Seeed e recursos de personalização</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CMP</span>
    <span className="jetson-product-resource-copy"><strong>Comparação de dispositivos Jetson</strong><small>Compare módulos Jetson e plataformas carrier da Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

</div>
