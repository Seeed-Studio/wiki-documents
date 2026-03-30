---
description: Este artigo irá guiá-lo para começar rapidamente com o reTerminal D1001.
title: Primeiros Passos com o reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /getting_started_with_reterminal_d1001
sku: 100058144
sidebar_position: 2
last_update:
  date: 03/06/2026
  author: Jackson.Li
createdAt: '2026-03-06'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_d1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Primeiros Passos com o reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução ao Produto

### Visão Geral
O reTerminal D1001 é um terminal inteligente de interação com tela grande, alimentado pelo mais recente chip de alto desempenho **ESP32-P4** da Espressif. Projetado para cenários de aplicação de AIoT que exigem exibição gráfica de alto desempenho, processamento de vídeo e interação por voz, ele aproveita o poderoso processador RISC-V dual-core de 400 MHz do ESP32-P4 e as ricas interfaces de periféricos multimídia para lidar facilmente com tarefas complexas de computação de borda e multimídia.

### Principais Recursos
*   **Processamento poderoso para interfaces ricas**: Alimentado pelo ESP32-P4, um processador RISC-V dual-core de 32 bits (HP Core 400MHz) com 32 MB de PSRAM e engine de codec JPEG integrada, oferece o desempenho necessário para interfaces ricas em gráficos, interação em tempo real suave e tarefas complexas de IA na borda.
*   **Tela Touch de 8 Polegadas com Suporte HMI Rico**: A tela capacitiva de 8 polegadas 800 × 1280, acionada via MIPI-DSI, suporta modos retrato e paisagem (via IMU), fornecendo espaço amplo para construir painéis refinados, painéis de controle inteligentes e outros dispositivos embarcados focados em UI.
*   **Conectividade sem Fio Integrada**: A comunicação sem fio é habilitada por um ESP32-C6 onboard que suporta Wi‑Fi 6 (2,4 GHz) e Bluetooth 5 (LE). O processador principal se comunica com o subsistema de conectividade via interface SDIO, permitindo rede sem fio confiável para dispositivos conectados e aplicações de IoT.
*   **Interface de Câmera para Desenvolvimento de Visão**: Equipado com uma câmera MIPI-CSI de 2 MP (SC2356) que suporta até 1600 × 1200 a 30 fps, a plataforma está pronta para captura de imagem, visualização ao vivo e desenvolvimento de visão embarcada imediatamente ao sair da caixa.
*   **Recursos de Voz e Áudio**: Microfones duplos e um alto-falante integrado permitem entrada de voz, captura de som e reprodução multimídia. Com cancelamento de eco suportado pelo ADC de áudio ES7210, o sistema oferece captura de voz clara para assistentes de IA e aplicações habilitadas por voz.
*   **Expansão Rica**: Fornece GPIO, I2C, UART e outras interfaces de expansão para atender a diversas necessidades de conexão de sensores e atuadores.

<!--
### Target Users & Applications
*   **Target Users**:
    *   **Embedded Developers**: Professionals seeking high-performance, low-cost HMI solutions to replace Linux/Android.
    *   **Smart Home Integrators**: Teams needing customized central control panels and smart switches.
    *   **Geeks & Makers**: Enthusiasts exploring the limits of ESP32 performance and developing desktop gadgets or smart terminals.
*   **Applications**: Smart Home Control Panels, Industrial HMI Panels, AI Voice Assistants, Video Surveillance Terminals, Educational Development Kits.
-->


### Especificações de Hardware

| Módulo de Função | Parâmetros Detalhados | Observações |
| :--- | :--- | :--- |
| **Processador Principal** | **ESP32-P4NRW32** | RISC-V Dual-Core 400MHz, 32MB PSRAM |
| **Armazenamento** | 32MB Nor Flash | Suporta expansão com cartão MicroSD |
| **Conectividade sem Fio** | Wi-Fi 6 & Bluetooth 5 (LE) | Fornecida pelo ESP32-C6 (interface SDIO) |
| **Tela** | Tela Touch MIPI-DSI de 8 polegadas | Resolução: 800x1280 <br /> Luminância: 250 cd/㎡ <br /> CI de Driver: 9365DA-H3 <br /> CI de Touch: GSL3670 (Capacitivo) |
| **Câmera** | 2MP (SC2356) | Resolução: 1608x1208 <br /> Interface: MIPI-CSI |
| **Áudio** | **Codec**: ES8311 <br /> **ADC**: ES7210 <br /> **PA**: NS4150B (2W@8Ω) <br /> **Entrada**: Matriz de Microfone Duplo | Entrada/saída de áudio de alta fidelidade |
| **Expansão de Rede** | Slot mPCIe | Suporta sinal USB 2.0, módulo 4G opcional |
| **Sensores** | IMU de 6 eixos (LSM6DS3TR) | Acelerômetro + Giroscópio, suporta rotação automática de tela |
| **Interfaces & Botões** | USB Type-C (Alimentação/Depuração) <br /> Conector de Expansão de Dupla Fileira 2,54mm <br /> BOOT/Reset (orifício) <br /> Botão de Energia | Suporta toque curto para suspensão / toque longo para ligar/desligar |
| **Gerenciamento de Energia** | Bateria de Lítio 2500mAh <br /> Suporte para Bateria de Moeda RTC | Entrada USB Type-C 5V <br /> LED RGB de Status & Indicador de Carga |


## Primeiros Passos com ESP-IDF

Esta seção o orienta na configuração do ambiente de desenvolvimento e na execução do firmware de demonstração de fábrica para experimentar os poderosos recursos do reTerminal D1001.

### Configurar o ambiente de desenvolvimento ESP-IDF

**Passo 1. Instalar o ESP-IDF**

Use a mais recente ferramenta de instalação multiplataforma da Espressif, o **ESP-IDF Installation Manager**.

1.  **Baixar ESP-IDF**: Visite a [Página de Download do ESP-IDF Installation Manager](https://dl.espressif.cn/dl/eim/), selecione a aba **Offline Installer**, escolha a versão para **Windows** (recomendado v5.4.2+), e clique em **Download** para obter ambos os arquivos `.zst` e `.exe`.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **Instalar a partir do Arquivo Compactado**: Execute o instalador (`eim-gui-windows-x64.exe`), selecione **Install from archive** (o pacote offline será detectado automaticamente), escolha um caminho de instalação (recomendado o padrão; evite caracteres chineses ou espaços) e clique em **Start Installation**.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **Concluir a Instalação**: Quando terminar, clique em **Install Driver** para completar a configuração.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**Passo 2. Instalar o Visual Studio Code & Extensão ESP-IDF**

1.  Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/).
    *   Durante a instalação, é recomendado marcar **"Add 'Open with Code' action to Windows Explorer file context menu"** para abrir rapidamente pastas de projetos.
2.  Abra o VS Code, clique no ícone **Extensions** na barra lateral (ou use `Ctrl + Shift + X`) para abrir a visualização de Extensões.
3.  Digite `ESP-IDF` na caixa de pesquisa, encontre a extensão **ESP-IDF** e clique em **Install**.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### Obter o Repositório de Firmware
Baixe o repositório oficial do reTerminal D1001 no GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

### Compilar e Gravar o Firmware de Demonstração
1.  **Abrir Projeto**: Use o VS Code para abrir a pasta clonada `reTerminal-D1001`.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    Certifique-se de abrir o diretório `examples/factory_firmware` dentro do projeto. Abrir o diretório raiz pode causar falhas na compilação.
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **Definir Chip de Destino**:
    *   Na barra de status do VS Code na parte inferior, selecione o chip de destino como `esp32p4`.
    *   Ou execute no terminal: `idf.py set-target esp32p4`.
3.  **Selecionar Modo de Gravação**:
    *   Selecione o modo de gravação correto antes de gravar.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **Compilar, Gravar e Monitorar**:
    *   Conecte o dispositivo ao computador via USB Type-C.
    *   Clique no botão **"Flash" (ícone de chama)** na barra de status do VS Code para compilar, gravar e iniciar o monitor em uma única etapa.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### Experimente os Recursos de Demonstração
Após o firmware ser gravado com sucesso, o dispositivo será reiniciado automaticamente. Você pode interagir com o dispositivo da seguinte forma:

*   **Controle de Energia e Tela**: Pressione e segure o botão verde por mais de 3 segundos para ligar. Pressione rapidamente o botão para desligar a tela e pressione rapidamente novamente para acordá-la.
*   **Interação de UI Suave**: Experimente transições de deslizamento suaves e animações de abertura de aplicativos.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **Pré-visualização da Câmera**: Abra o aplicativo Camera para ver imagens em tempo real.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **Demonstração de Sensor**: Gire o dispositivo para observar o efeito de rotação automática da tela ou verifique outros dados dos sensores.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## Recursos

*   **Documentos de Hardware**:
    *   [Placa Principal reTerminal D1001 V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [Esquemático do reTerminal D1001 (PDF)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
*   **Folhas de dados**:
    *   [Folha de dados ESP32-P4NRW32](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [Folha de dados ESP32-C6](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [Folha de dados do Display (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [Folha de dados do Sensor IMU (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [Folha de dados do Módulo de Câmera (SC2356)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
