---
description: Este artigo irá guiá-lo para começar rapidamente com o reTerminal D1001.
title: Introdução ao reTerminal D1001
image: https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.webp
slug: /getting_started_with_reterminal_d1001
sku: 100058144
sidebar_position: 2
last_update:
  date: 07/07/2026
  author: Jackson.Li
createdAt: '2026-03-06'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_reterminal_d1001/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Introdução ao reTerminal D1001

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1-reTeriminal-D1001.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/catalogsearch/result/?q=D1001" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div><br />

## Introdução ao Produto

### Visão geral
O reTerminal D1001 é um terminal inteligente de interação com tela grande, alimentado pelo mais recente chip de alto desempenho **ESP32-P4** da Espressif. Projetado para cenários de aplicação de AIoT que exigem exibição gráfica de alto desempenho, processamento de vídeo e interação por voz, ele aproveita o poderoso processador RISC-V dual-core de 400 MHz do ESP32-P4 e interfaces periféricas multimídia ricas para lidar facilmente com tarefas complexas de computação de borda e multimídia.

### Principais recursos
*   **Processamento poderoso para interfaces ricas**: Alimentado pelo ESP32-P4, um processador RISC-V dual-core de 32 bits com 32 MB de PSRAM, este dispositivo oferece o desempenho necessário para interfaces ricas em gráficos, interação em tempo real suave e mais aplicações de borda.
*   **Conectividade sem fio integrada**: A comunicação sem fio é habilitada por um ESP32-C6 onboard que suporta Wi-Fi 6, Bluetooth 5 (LE) e 802.15.4 (Zigbee/Thread/Matter). O processador principal se comunica com o subsistema de conectividade via interface SDIO, permitindo uma rede sem fio confiável para dispositivos conectados e aplicações de IoT.
*   **Expansão celular pronta para campo**: Equipado com um slot mPCIe integrado que suporta sinais USB 2.0, o dispositivo permite conectividade 4G LTE perfeita para rede confiável em ambientes remotos. É ideal para implantações em campo, monitoramento remoto e aplicações de borda sempre conectadas, onde a comunicação sem fio estável é essencial.
*   **Tela sensível ao toque de 8 polegadas com amplo suporte a IHM**: A tela LCD capacitiva de 8 polegadas 800 × 1280, acionada via MIPI-DSI e com suporte a modos retrato e paisagem, oferece o espaço para criar painéis refinados, painéis de controle inteligentes e outros dispositivos embarcados focados em UI.
*   **Interface de câmera para desenvolvimento de visão**: Com uma câmera MIPI-CSI baseada no sensor SC2356 e suporte para até 1600 × 1200 a 30 fps, a plataforma está pronta para captura de imagem, visualização ao vivo e desenvolvimento de visão embarcada imediatamente.
*   **Recursos de voz e áudio**: Microfones duplos e um alto-falante integrado permitem entrada de voz, captura de som e reprodução. Com cancelamento de eco suportado pelo conversor de áudio ES7210, o sistema ajuda a fornecer captura de voz mais clara para assistentes de IA e aplicações habilitadas por voz.

### Especificações de hardware

| Categoria | Parâmetro | Descrição |
| :--- | :--- | :--- |
| **Básico** | Processador | ESP32-P4NRW32 com 32MB PSRAM |
| | SoC sem fio | ESP32-C6 |
| | Armazenamento | Flash QSPI de 32MB, suporta cartão Micro SD |
| **Tela** | Tamanho | 8” |
| | Resolução | 800×1280 |
| | Luminância (cd/㎡) | 250 |
| | Ângulo de visão ideal (O’Clock) | TODOS |
| | Interface | MIPI-DSI |
| | CI de driver | 9365DA-H3 |
| | Tipo de toque | Toque capacitivo |
| | CI de toque | GSL3670 |
| | Orientação | Suporte a rotação retrato/paisagem |
| **Câmera** | Sensor | SC2356 |
| | Tamanho da matriz ativa | 1608×1208 |
| | Taxa de quadros máxima | (1600*1200)30fps 10bit |
| | Interface | MIPI-CSI |
| **Áudio** | Microfone | Microfone duplo |
| | Alto-falante | 2W@8Ω NS4150B |
| | CI de áudio | Codec: ES8311 <br /> ADC de áudio: ES7210 |
| **Comunicação sem fio** | Wi-Fi | Wi-Fi 6 (2,4GHz) |
| | BLE | Bluetooth 5 (LE) |
| | Celular | Mini-PCIe para 4G (opcional) |
| | Antena | Antena onboard e antena externa |
| **Alimentação** | Bateria | 2500mAh |
| | Entrada de energia | USB Type-C 5V |
| **Outros** | RTC | PCF8563T (suporta despertar por interrupção temporizada) |
| | Sensor de movimento | LSM6DS3TR de seis eixos |

### Visão geral de hardware
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/hardware.webp" style={{width:800, height:'auto'}}/></div>

### Aplicação
*   **Hub central de casa inteligente**: Um dispositivo IHM tudo-em-um para gerenciar iluminação, segurança e sistemas de automação residencial.
*   **Sistemas de vídeo porteiro**: Comunicação visual em tempo real para entrada inteligente, campainhas e controle de acesso de segurança.
*   **Assistentes de IA interativos**: Telas inteligentes habilitadas por voz que fornecem feedback visual intuitivo e controle responsivo.
*   **Painéis de dados industriais**: Terminais de monitoramento profissionais para rastreamento de equipamentos em tempo real e visualização de dados comerciais.
*   **Terminais de visão de borda**: Soluções compactas para captura de imagem, digitalização e totens interativos de varejo.


## Introdução ao ESP-IDF

Esta seção orienta você na configuração do ambiente de desenvolvimento e na execução do firmware de demonstração de fábrica para experimentar os poderosos recursos do reTerminal D1001.

### Configurar o ambiente de desenvolvimento ESP-IDF

**Passo 1. Instalar o ESP-IDF**

Use a mais recente ferramenta de instalação multiplataforma da Espressif, o **ESP-IDF Installation Manager**.

1.  **Baixar o ESP-IDF**: Visite a [página de download do ESP-IDF Installation Manager](https://dl.espressif.cn/dl/eim/), selecione a aba **Offline Installer**, escolha a versão para **Windows** (recomendada v5.4.2+), e clique em **Download** para obter os arquivos `.zst` e `.exe`.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/1.png" style={{width:600, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/2.png" style={{width:600, height:'auto'}}/></div>

2.  **Instalar a partir do arquivo compactado**: Execute o instalador (`eim-gui-windows-x64.exe`), selecione **Install from archive** (o pacote offline será detectado automaticamente), escolha um caminho de instalação (padrão recomendado; evite caracteres chineses ou espaços) e clique em **Start Installation**.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/3.png" style={{width:800, height:'auto'}}/></div>
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/4.png" style={{width:800, height:'auto'}}/></div>
3.  **Concluir a instalação**: Quando terminar, clique em **Install Driver** para concluir a configuração.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/0_5.png" style={{width:800, height:'auto'}}/></div>

**Passo 2. Instalar o Visual Studio Code e a extensão ESP-IDF**

1.  Baixe e instale o [Visual Studio Code](https://code.visualstudio.com/).
    *   Durante a instalação, é recomendável marcar **"Add 'Open with Code' action to Windows Explorer file context menu"** para abrir rapidamente pastas de projeto.
2.  Abra o VS Code, clique no ícone **Extensions** na barra lateral (ou use `Ctrl + Shift + X`) para abrir a visualização de extensões.
3.  Digite `ESP-IDF` na caixa de pesquisa, encontre a extensão **ESP-IDF** e clique em **Install**.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/5.png" style={{width:600, height:'auto'}}/></div>

### Obter o repositório de firmware
Baixe o repositório oficial do reTerminal D1001 no GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/6.png" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/reTerminal-D1001" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

### Compilar e gravar o firmware de demonstração
1.  **Abrir o projeto**: Use o VS Code para abrir a pasta clonada `reTerminal-D1001`.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/7.png" style={{width:600, height:'auto'}}/></div>

    :::tip
    Certifique-se de abrir o diretório `examples/factory_firmware` dentro do projeto. Abrir o diretório raiz pode causar falhas de compilação.
    :::

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/8.png" style={{width:800, height:'auto'}}/></div>
2.  **Definir o chip de destino**:
    *   Na barra de status do VS Code na parte inferior, selecione o chip de destino como `esp32p4`.
    *   Ou execute no terminal: `idf.py set-target esp32p4`.
3.  **Selecionar o modo de gravação**:
    *   Selecione o modo de gravação correto antes de gravar.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/uart.jpg" style={{width:800, height:'auto'}}/></div>
4.  **Compilar, gravar e monitorar**:
    *   Conecte o dispositivo ao computador via USB Type-C.
    *   Clique no botão **"Flash" (ícone de chama)** na barra de status do VS Code para compilar, gravar e iniciar o monitor em uma única etapa.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/9.jpg" style={{width:800, height:'auto'}}/></div>

### Experimente os recursos de demonstração
Após o firmware ser gravado com sucesso, o dispositivo será reiniciado automaticamente. Você pode interagir com o dispositivo da seguinte forma:

*   **Controle de energia e tela**: Pressione e segure o botão verde por mais de 3 segundos para ligar. Pressione rapidamente o botão para desligar a tela e pressione rapidamente novamente para despertá-la.
*   **Interação de UI suave**: Experimente transições de deslizamento suaves e animações de inicialização de aplicativos.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/UI.gif" style={{width:300, height:'auto'}}/></div>
*   **Pré-visualização da câmera**: Abra o aplicativo Camera para visualizar imagens em tempo real.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/10.jpg" style={{width:300, height:'auto'}}/></div>
*   **Demonstração de sensores**: Gire o dispositivo para observar o efeito de rotação automática da tela ou verifique outros dados de sensores.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminal_d10xx/sensor.gif" style={{width:300, height:'auto'}}/></div>


## Recursos

*   **Documentos de hardware**:
    *   [Placa principal reTerminal D1001 V1.0 SCH & PCB](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal_D1001_main_board_V1.0_SCH_&_PCB_251128.zip)
    *   [Esquemático do reTerminal D1001 (PDF)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/reTerminal%20D1001_sch.pdf)
    *   [Arquivo STP do modelo 3D geral do exterior](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/D1001_asm.stp)
*   **Folhas de dados**:
    *   [Folha de dados do ESP32-P4NRW32](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/Espressif_ESP32-P4NRW32_Datasheet.pdf)
    *   [Folha de dados do ESP32-C6](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/esp32-c6_datasheet_en.pdf)
    *   [Folha de dados do display (GJX080C13-31BY)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/GangJingXin_GJX080C13-31BY_Datasheet.pdf.pdf)
    *   [Folha de dados do sensor IMU (LSM6DS3TR)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ST_LSM6DS3TR_Datasheet.pdf)
    *   [Folha de dados do módulo de câmera (SC2356)](https://files.seeedstudio.com/wiki/reTerminal_d10xx/res/ZD2481-D1001-V2.0_Datasheet.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
