---
description: Introdução ao XIAO 1.14'' IPS Display (nRF52840).
title: Introdução ao XIAO 1.14'' IPS Display (nRF52840)
sidebar_label: Introdução
keywords:
  - XIAO
  - nRF52840
  - Display
  - LCD
  - 1.14
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /getting_started_1.14_inch_display_nrf52840
sku: 100069374
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/getting_started_1.14_inch_display_nrf52840/
---

# Introdução ao XIAO 1.14'' IPS Display (nRF52840)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.14'' IPS Display (nRF52840)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/NEW114_nRF52840Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-14-Inch-Display-Powered-by-XIAO-nRF52840-Plus-p-6994.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introdução

O 1.14'' IPS Display é uma placa de expansão projetada para a série XIAO, alimentada pelo XIAO nRF52840 Plus. Ele possui um LCD colorido IPS de 135×240, microfone PDM onboard, IMU de 6 eixos (compatível com LSM6DS3), conector Grove I2C, três botões de usuário e gerenciamento de energia da bateria com exibição de porcentagem — tudo integrado em um formato compacto.

Essa combinação o torna uma plataforma ideal para dispositivos vestíveis, nós de sensores compactos, instrumentos portáteis e prototipagem de IoT em que o espaço é um recurso crítico.

<div class="table-center">
  <table align="center">
    <tr><th>Especificação</th><th>Detalhe</th></tr>
    <tr><td>Posicionamento do Produto</td><td>Sensoriamento e Expansão</td></tr>
    <tr><td>Controlador Principal</td><td>Seeed Studio XIAO nRF52840 Plus</td></tr>
    <tr><td>Processador</td><td>Nordic nRF52840, processador ARM® Cortex®-M4 de 32 bits com FPU, 64 MHz</td></tr>
    <tr><td>Memória</td><td>256 KB RAM + 1 MB Flash interna + 2 MB Flash onboard</td></tr>
    <tr><td>Conectividade Sem Fio</td><td>BLE 5.4</td></tr>
    <tr><td>Tipo de Display</td><td>1.14" IPS TFT LCD</td></tr>
    <tr><td>Resolução</td><td>135 × 240</td></tr>
    <tr><td>Driver do Display</td><td>ST7789</td></tr>
    <tr><td>Interface do Display</td><td>SPI</td></tr>
    <tr><td>Entrada por Toque</td><td>Não</td></tr>
    <tr><td>IMU de 6 Eixos</td><td>Sim</td></tr>
    <tr><td>Microfone Digital PDM</td><td>Sim</td></tr>
    <tr><td>Slot para Cartão MicroSD</td><td>Não</td></tr>
    <tr><td>Conector Grove I2C</td><td>Sim</td></tr>
    <tr><td>Botões de Usuário</td><td>3</td></tr>
    <tr><td>Conector de Bateria</td><td>Conector JST 2.0 de 2 pinos para LiPo de 3,7 V</td></tr>
    <tr><td>Monitoramento de Bateria</td><td>Suporte à detecção de status da bateria; a tensão da bateria também pode ser monitorada para estimar o nível de carga.</td></tr>
    <tr><td>Interfaces de Expansão</td><td>1x conector Grove I2C, 1x pads I2C, 1x pads I2S, 1x pads SWD, 3x pads de botão de usuário</td></tr>
    <tr><td>Tamanho da Placa</td><td>26 × 48 × 10,6 mm</td></tr>
    <tr><td>Melhor Uso</td><td>Displays de sensores portáteis, dispositivos Grove, controladores físicos</td></tr>
  </table>
</div>

:::note
Esta placa de display foi projetada para o **XIAO nRF52840 Plus**. Se você estiver usando a versão XIAO ESP32-S3 Plus, consulte o guia XIAO 1.14'' IPS Display (ESP32-S3).
:::

## Visão Geral de Hardware

Antes de começarmos, consulte a imagem a seguir para entender o layout físico do 1.14'' IPS Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_display_hardware_overview.png" style={{width:1000, height:'auto'}}/></div>

### Mapa de Pinos

O 1.14'' IPS Display expõe todos os pinos do XIAO nRF52840 Plus. A tabela abaixo lista cada pino, seu nome de rede na placa de display, sua função e como ele está conectado aos periféricos onboard.

<div class="table-center">
  <table align="center">
    <tr><th>Pino XIAO</th><th>Nome de Rede</th><th>Descrição da Função</th><th>Notas de Conexão de Hardware</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Clock do microfone digital PDM</td><td>Conectado internamente ao microfone PDM</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Dados do microfone digital PDM</td><td>Conectado internamente ao microfone PDM</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>Sinal de seleção de chip da tela</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>Comutação dados/comando da tela</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D4</td><td>SDA</td><td>Barramento de dados I2C</td><td>Compartilhamento de barramento: conectado internamente ao IMU; exposto externamente ao conector Grove I2C</td></tr>
    <tr><td>D5</td><td>SCL</td><td>Barramento de clock I2C</td><td>Compartilhamento de barramento: conectado internamente ao IMU; exposto externamente ao conector Grove I2C</td></tr>
    <tr><td>D6</td><td>BTN_A</td><td>Botão físico A (esquerda)</td><td>Conectado internamente ao microswitch frontal esquerdo com pull-up externo de 1 KΩ. Exposto externamente como pad de teste U1</td></tr>
    <tr><td>D7</td><td>BTN_B</td><td>Botão físico B (direita)</td><td>Conectado internamente ao microswitch frontal direito com pull-up externo de 1 KΩ. Exposto externamente como pad de teste U2</td></tr>
    <tr><td>D8</td><td>SCK</td><td>Clock SPI de hardware</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D9</td><td>NC</td><td>Flutuante (reservado)</td><td>Sem conexão física</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>Saída de dados SPI de hardware</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>Saída de dados de áudio</td><td>Exposto externamente ao pad de expansão inferior</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>Clock de bits de áudio</td><td>Exposto externamente ao pad de expansão inferior</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>Seleção de palavra de áudio</td><td>Exposto externamente ao pad de expansão inferior</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>Interrupção de hardware de movimento do IMU</td><td>Conectado internamente ao IMU de 6 eixos para wake-up assíncrono</td></tr>
    <tr><td>D15</td><td>NC</td><td>Ponto de teste reservado</td><td>Pad de teste em cobre exposto reservado na PCB</td></tr>
    <tr><td>D16</td><td>NC</td><td>Flutuante (reservado)</td><td>Sem conexão física</td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>Reset por software da tela</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>Controle de retroiluminação da tela</td><td>Conectado internamente ao circuito driver da retroiluminação</td></tr>
    <tr><td>D19</td><td>BTN_C</td><td>Botão físico C (lateral)</td><td>Conectado internamente ao microswitch lateral com pull-up externo de 1 KΩ. Exposto externamente como pad de teste U3</td></tr>
  </table>
</div>


## Introdução

Este guia faz o upload de um sketch mínimo **"Hello, XIAO"** para a placa de display: a tela liga a retroiluminação, preenche de preto e imprime **"Hello,"** e **"XIAO"** como duas linhas centralizadas de texto grande em verde. É a maneira mais rápida de confirmar que a tela e o seu ambiente de desenvolvimento estão funcionando antes de mergulhar nas demos individuais de periféricos.

### Preparação de Software

Você precisará das seguintes ferramentas e bibliotecas:

- **Arduino IDE** (versão 1.8 ou posterior)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **Seeed nRF52 Boards (1.1.13)** — adicione a seguinte URL em **File > Preferences > Additional Boards Manager URLs**:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

Em seguida, vá em **Tools > Board > Boards Manager**, pesquise por **Seeed nRF52** e instale a versão **1.1.13**.

- **Seeed_GFX2 (Instalação Manual)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 1.** Clique no botão acima para baixar `Seeed_GFX2` v1.0.0 como um arquivo ZIP (fixado em uma tag de release para que o tutorial permaneça reprodutível). Como alternativa, clone o repositório em [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Passo 2.** No Arduino IDE, vá em **Sketch > Include Library > Add .ZIP Library...** e selecione o ZIP baixado. O IDE lê `library.properties` e o instala automaticamente na pasta `Seeed_GFX2` correta — você não precisa renomear a pasta extraída. (Para instalar manualmente, em vez disso, descompacte o arquivo e renomeie a pasta extraída para `Seeed_GFX2` antes de colocá-la em `Documents/Arduino/libraries/`.)

**Passo 3.** Reinicie o Arduino IDE para que a nova biblioteca seja detectada.

:::tip
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** contém o mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 135×240, a ordem de cores (BGR) e a orientação. Nenhum `driver.h` ou configuração manual de pinos é necessária.
- Nesta placa, o sketch usa `Board_XIAO_1inch14_LCD<38, 37>` (RST=38, BL=37) com `Config_Seeed_1inch14_LCD_ST7789`.
- A biblioteca **Adafruit TinyUSB** usada pelo sketch vem incluída no pacote **Seeed nRF52 Boards**, portanto não precisa ser instalada separadamente.
:::

### Baixar o código

O sketch de exemplo está disponível no GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_nrf52840_114_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o código</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navegue até `code_GFX2/getting_started_code/xiao_nrf52840_114_hello/` e abra `xiao_nrf52840_114_hello.ino` na Arduino IDE. **Baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

### Enviar o sketch

**Passo 1.** Conecte o XIAO nRF52840 Plus ao seu computador pela porta USB-C.

**Passo 2.** Na Arduino IDE, selecione a placa: **Tools > Board > Seeed nRF52 Boards > Seeed XIAO nRF52840 Plus**.

**Passo 3.** Selecione a **Porta** correta em **Tools > Port**.

**Passo 4.** Clique no botão **Upload** (→). O sketch será compilado e enviado para a placa.

:::note
Se você encontrar problemas de upload, clique duas vezes no botão de reset para entrar no modo bootloader. O LED USR ficará pulsando em vermelho e uma unidade **NRF52BOOT** aparecerá no seu computador, indicando que a placa está em modo bootloader.
:::

### Saída esperada

Após o upload, a tela acende com um fundo preto e mostra duas linhas centralizadas de texto grande em verde — **"Hello,"** na primeira linha e **"XIAO"** na segunda. A saudação permanece na tela sem redesenho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/114_nRF52840Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

Se o display não inicializar, o sketch imprime a mensagem de erro da biblioteca no monitor serial a **115200** baud. Abra **Tools > Serial Monitor** e defina a taxa de baud para 115200 para lê-la.

## O que vem a seguir

A placa de display reúne vários periféricos onboard. A página [Function](/pt-br/function_1.14_inch_display_nrf52840) fornece uma demonstração independente para cada um:

<div class="table-center">
  <table align="center">
    <tr><th>Periférico</th><th>Demo</th></tr>
    <tr><td>Tela</td><td>[GraphicTest](/pt-br/function_1.14_inch_display_nrf52840#screen-display--graphictest) — dez primitivas gráficas com medições de tempo</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/pt-br/function_1.14_inch_display_nrf52840#imu) — efeitos de movimento de 6 eixos e despertar por movimento</td></tr>
    <tr><td>Microfone e alto-falante</td><td>[Voice Bar + Flash Recorder](/pt-br/function_1.14_inch_display_nrf52840#microphone--speaker) — medidor de nível PDM em tempo real e gravação com reprodução I2S</td></tr>
    <tr><td>Grove I2C</td><td>[SHT31 Temperature & Humidity](/pt-br/function_1.14_inch_display_nrf52840#grove-i2c) — leitura de um sensor Grove SHT31</td></tr>
    <tr><td>Botões</td><td>[User Buttons](/pt-br/function_1.14_inch_display_nrf52840#user-buttons) — leitura de pressionamentos e eliminação de bouncing com interrupções</td></tr>
    <tr><td>Bateria</td><td>[Battery Status](/pt-br/function_1.14_inch_display_nrf52840#battery-status) — medição de tensão e conversão para porcentagem</td></tr>
  </table>
</div>

## FAQ

### E se o upload falhar ou a placa não for detectada?

Clique duas vezes no botão de reset no XIAO nRF52840 Plus. O LED USR ficará pulsando em vermelho e uma unidade chamada **NRF52BOOT** aparecerá no seu computador. Arraste o arquivo `.uf2` compilado para a unidade **NRF52BOOT**. A placa será programada e reiniciará automaticamente.

### [Sobre o firmware de fábrica - DashBoard]

#### Posso conectar e desconectar dispositivos I2C com o dashboard em execução?

Não — recomendamos fortemente **não conectar ou desconectar a quente** dispositivos na interface I2C enquanto o dashboard estiver em execução. Sempre desligue a placa antes de conectar ou desconectar qualquer coisa no conector Grove I2C ou nos pads de breakout SDA/SCL. Conectar a quente pode travar o barramento I2C.

## Recursos

- **🗃️[Arquivos de projeto da PCB]** [XIAO 1.14'' IPS Display (nRF52840) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.14'' IPS Display (nRF52840) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.14'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.14%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.14 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.14%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.14'' IPS Display (nRF52840) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.14%27%27%20IPS%20Display%20%28nRF52840%29%20Factory%20Firmware.uf2)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
