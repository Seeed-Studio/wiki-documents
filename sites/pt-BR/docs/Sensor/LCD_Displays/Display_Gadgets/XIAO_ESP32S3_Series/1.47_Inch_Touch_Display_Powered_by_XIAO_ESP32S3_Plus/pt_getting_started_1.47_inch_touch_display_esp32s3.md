---
description: Introdução ao XIAO 1.47'' IPS Display (ESP32-S3).
title: Introdução ao XIAO 1.47'' IPS Display (ESP32-S3)
keywords:
  - XIAO
  - ESP32-S3
  - IPS Display
  - LCD
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_1.47_inch_touch_display_esp32s3
sku: 100069905
sidebar_label: Introdução
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-11'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/getting_started_1.47_inch_touch_display_esp32s3/
---

# Introdução ao XIAO 1.47'' IPS Display (ESP32-S3)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 1.47'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_display_hardware_heroNEW.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/1-47-Inch-Touch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6996.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introdução

O 1.47'' IPS Display é uma placa de expansão projetada para a série XIAO, alimentada pelo XIAO ESP32-S3 Plus. Ele possui um LCD colorido 172×320 com toque capacitivo, microfone PDM onboard, IMU de 6 eixos (LSM6DS3), slot para cartão MicroSD e medição de tensão da bateria — tudo integrado em um formato compacto.

Essa combinação o torna uma plataforma ideal para aplicações HMI portáteis, dashboards de IoT, dispositivos vestíveis e prototipagem interativa. Com o processador dual-core do ESP32-S3 e os recursos de Wi-Fi e Bluetooth, ele estende o dashboard para um hub conectado sem fio.

<div class="table-center">
  <table align="center">
    <tr><th>Especificação</th><th>Detalhe</th></tr>
    <tr><td>Posicionamento do produto</td><td>Toque e interação completa</td></tr>
    <tr><td>Controlador principal</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>Processador</td><td>ESP32-S3R8, Dual-Core, até 240 MHz</td></tr>
    <tr><td>Memória</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>Conectividade sem fio</td><td>Wi-Fi 2,4 GHz + BLE 5.0</td></tr>
    <tr><td>Tipo de display</td><td>LCD TFT IPS de 1,47"</td></tr>
    <tr><td>Resolução</td><td>172 × 320</td></tr>
    <tr><td>Driver do display</td><td>JD9853A</td></tr>
    <tr><td>Interface do display</td><td>SPI</td></tr>
    <tr><td>Entrada de toque</td><td>Toque capacitivo</td></tr>
    <tr><td>IMU de 6 eixos</td><td>Sim</td></tr>
    <tr><td>Microfone digital PDM</td><td>Sim</td></tr>
    <tr><td>Slot para cartão MicroSD</td><td>Sim</td></tr>
    <tr><td>Conector Grove I2C</td><td>Não</td></tr>
    <tr><td>Botões de usuário</td><td>2</td></tr>
    <tr><td>Conector de bateria</td><td>JST de 2 pinos, LiPo 3,7 V</td></tr>
    <tr><td>Monitoramento da bateria</td><td>Medição da tensão da bateria via D16 ADC; o nível da bateria pode ser estimado a partir da tensão medida. Detecção de status da bateria não é suportada.</td></tr>
    <tr><td>Interfaces de expansão</td><td>1x interface I2C, 1x interface I2S, 1x interface JTAG, 2x interfaces de botão de usuário</td></tr>
    <tr><td>Tamanho da placa</td><td>26,4 × 51,4 × 12,6 mm</td></tr>
    <tr><td>Melhor uso</td><td>Interface por toque, HMI portátil, mídia local e registro de dados</td></tr>
  </table>
</div>

:::note
O ESP32-S3 Plus usa o D16 para medição de tensão. A demonstração de tensão não exibe a porcentagem da bateria, e nenhum sinal de status de carregamento está conectado a um GPIO do ESP32-S3.
:::

## Visão geral de hardware

Antes de começarmos, consulte a imagem a seguir para entender o layout físico do 1.47'' IPS Display.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_display_hardware_overviewNEW.png" style={{width:1000, height:'auto'}}/></div>

### Mapa de pinos

O 1.47'' IPS Display expõe todos os pinos do XIAO ESP32-S3 Plus. A tabela abaixo lista cada pino, seu nome de rede na placa de display, sua função e como ele está conectado aos periféricos onboard.

<div class="table-center">
  <table align="center">
    <tr><th>Pino XIAO</th><th>Nome de rede</th><th>Descrição da função</th><th>Observações de conexão de hardware</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>MIC_CLK</td><td>Clock do microfone digital PDM</td></tr>
    <tr><td>D1</td><td>MIC_DATA</td><td>Dados do microfone digital PDM</td><td>Conectado internamente ao microfone PDM</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>Sinal de seleção de chip da tela</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>Comutação dados/comando da tela</td><td>Conectado internamente ao CI driver do LCD</td></tr>
    <tr><td>D4</td><td>SDA</td><td>Barramento de dados I2C</td><td>Compartilhamento de barramento: conectado internamente ao IMU e CI de toque; exposto externamente como pads de expansão I2C</td></tr>
    <tr><td>D5</td><td>SCL</td><td>Barramento de clock I2C</td><td>Compartilhamento de barramento: conectado internamente ao IMU e CI de toque; exposto externamente como pads de expansão I2C</td></tr>
    <tr><td>D6</td><td>SD_CS</td><td>Sinal de seleção de chip do cartão SD</td><td>Conectado internamente ao slot de cartão MicroSD</td></tr>
    <tr><td>D7</td><td>TOUCH_INT</td><td>Sinal de interrupção de toque</td><td>Conectado internamente ao CI de toque para despertar assíncrono</td></tr>
    <tr><td>D8</td><td>SCK</td><td>Clock SPI de hardware</td><td>Conectado internamente ao LCD e ao slot de cartão SD</td></tr>
    <tr><td>D9</td><td>MISO</td><td>Entrada de dados SPI de hardware</td><td>Conectado internamente ao slot de cartão SD</td></tr>
    <tr><td>D10</td><td>MOSI</td><td>Saída de dados SPI de hardware</td><td>Conectado internamente ao LCD e ao slot de cartão SD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>Linha de dados de áudio</td><td>Corresponde ao mapeamento padrão I2S_SD, exposto ao grupo de pads inferiores</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>Clock de bits de áudio</td><td>Corresponde ao mapeamento padrão I2S_SCK, exposto ao grupo de pads inferiores</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>Seleção de palavra de áudio</td><td>Corresponde ao mapeamento padrão I2S_WS, exposto ao grupo de pads inferiores</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>Interrupção de movimento da IMU</td><td>Reatribuição de função: usado para despertar por movimento e detecção de toque duplo</td></tr>
    <tr><td>D15</td><td>BTN_B</td><td>Botão físico 2 (USR2)</td><td>Reatribuição de função: botão de usuário 2. Exposto externamente como pad de expansão de botão</td></tr>
    <tr><td>D16</td><td>BAT_ADC</td><td>Detecção de tensão da bateria</td><td>Conectado internamente ao circuito divisor de tensão (316K / 160K). <strong>Não use externamente</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>Sinal de reset da tela</td><td>Controle GPIO independente para inicialização confiável</td></tr>
    <tr><td>D18</td><td>LCD_BL</td><td>Controle de retroiluminação da tela</td><td>Suporta ajuste de brilho por PWM de hardware</td></tr>
    <tr><td>D19</td><td>BTN_A</td><td>Botão físico 1 (USR1)</td><td>Botão de usuário 1. Exposto externamente como pad de expansão de botão</td></tr>
  </table>
</div>


## Primeiros passos

Este guia faz o upload de um sketch mínimo **"Hello, XIAO"** para a placa de display: a tela liga a retroiluminação, preenche de preto e imprime **"Hello,"** e **"XIAO"** como duas linhas centralizadas de texto grande em verde. É a maneira mais rápida de confirmar que a tela e o seu ambiente de desenvolvimento estão funcionando antes de mergulhar nas demos individuais de periféricos.

### Preparação de software

Você vai precisar das seguintes ferramentas e bibliotecas:

- **Arduino IDE** (versão 1.8 ou posterior)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — adicione a seguinte URL em **File > Preferences > Additional Boards Manager URLs**:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

Em seguida, vá em **Tools > Board > Boards Manager**, pesquise por **esp32** e instale a versão **3.3.11**.

- **Seeed_GFX2 (instalação manual)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 1.** Clique no botão acima para baixar `Seeed_GFX2` v1.0.0 como um arquivo ZIP (fixado em uma tag de release para que o tutorial permaneça reprodutível). Como alternativa, clone o repositório em [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Passo 2.** No Arduino IDE, vá em **Sketch > Include Library > Add .ZIP Library...** e selecione o ZIP baixado. O IDE lê `library.properties` e o instala automaticamente na pasta `Seeed_GFX2` correta — você não precisa renomear a pasta extraída. (Para instalar manualmente em vez disso, descompacte o arquivo e renomeie a pasta extraída para `Seeed_GFX2` antes de colocá-la em `Documents/Arduino/libraries/`.)

**Passo 3.** Reinicie o Arduino IDE para que a nova biblioteca seja detectada.

:::tip
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demonstração inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** contém o mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 172×320, a ordem de cores (BGR) e a orientação. Não é necessário `driver.h` nem configuração manual de pinos.
- Nesta placa o sketch usa `Board_XIAO_1inch47_Touch_Display<13, 12>` (RST=13, BL=12) com `Config_Seeed_1inch47_Touch_JD9853A`.
:::

### Baixar o código

O sketch de exemplo está disponível no GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_147_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o código</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navegue até `code_GFX2/getting_started_code/xiao_esp32s3_147_hello/` e abra `xiao_esp32s3_147_hello.ino` na Arduino IDE. **Baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

### Fazer upload do sketch

**Passo 1.** Conecte o XIAO ESP32-S3 Plus ao seu computador pela porta USB-C.

**Passo 2.** Na Arduino IDE, selecione a placa: **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

**Passo 3.** Selecione a **Port** correta em **Tools > Port**.

**Passo 4.** Clique no botão **Upload** (→). O sketch será compilado e enviado para a placa.

### Saída esperada

Após o upload, a tela acende com um fundo preto e mostra duas linhas centralizadas de texto verde grande — **"Hello,"** na primeira linha e **"XIAO"** na segunda. A saudação permanece na tela sem redesenho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/147_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

Se o display não inicializar, o sketch imprime a mensagem de erro da biblioteca no monitor serial a **115200** baud. Abra **Tools > Serial Monitor** e defina a taxa de baud para 115200 para lê-la.

## O que vem a seguir

A placa de display reúne vários periféricos onboard. A página [Function](/pt-br/function_1.47_inch_touch_display_esp32s3) fornece uma demonstração independente para cada um:

<div class="table-center">
  <table align="center">
    <tr><th>Periférico</th><th>Demo</th></tr>
    <tr><td>Tela</td><td>[GraphicTest](/pt-br/function_1.47_inch_touch_display_esp32s3#tela-display--graphictest) — dez primitivas gráficas com medições de tempo</td></tr>
    <tr><td>Toque</td><td>[Touch Circle](/pt-br/function_1.47_inch_touch_display_esp32s3#toque--touch-circle) — toque para desenhar círculos persistentes; toque em CLEAR para apagá-los</td></tr>
    <tr><td>Cartão SD</td><td>[BMP Reader](/pt-br/function_1.47_inch_touch_display_esp32s3#cartão-sd--bmp-reader) — exibir um BMP do cartão MicroSD</td></tr>
    <tr><td>Microfone e alto-falante</td><td>[Volume Bar + SD Recorder](/pt-br/function_1.47_inch_touch_display_esp32s3#microfone--alto-falante) — medidor de nível PDM em tempo real e gravação no SD</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/pt-br/function_1.47_inch_touch_display_esp32s3#imu) — efeitos de movimento de 6 eixos e despertar por movimento</td></tr>
    <tr><td>Botões</td><td>[User Button](/pt-br/function_1.47_inch_touch_display_esp32s3#user-button) — ler pressionamentos e fazer debounce com interrupções</td></tr>
    <tr><td>Bateria</td><td>[Battery Voltage Detection](/pt-br/function_1.47_inch_touch_display_esp32s3#battery-voltage-detection) — medir a tensão do divisor</td></tr>
  </table>
</div>

## FAQ

### A placa não aparece no menu Tools > Board

Certifique-se de que você adicionou o pacote de placas ESP32 à Arduino IDE:

1. Vá em **File > Preferences** e cole a URL abaixo em **Additional Boards Manager URLs**:
   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```
2. Vá em **Tools > Board > Boards Manager**, pesquise por **esp32** e instale a versão **3.3.11**.
3. Após a instalação, **Tools > Board > esp32 > XIAO_ESP32S3_PLUS** deve aparecer no menu.

Se a placa ainda não aparecer, reinicie a Arduino IDE e tente novamente.

## Recursos

- **🗃️[Arquivos de design de PCB]** [XIAO 1.47'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 1.47'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 1.47'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%201.47%27%27%20IPS%20Display.step)
- **📄[Datasheet]** [1.47 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/1.47%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 1.47'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%201.47%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

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
