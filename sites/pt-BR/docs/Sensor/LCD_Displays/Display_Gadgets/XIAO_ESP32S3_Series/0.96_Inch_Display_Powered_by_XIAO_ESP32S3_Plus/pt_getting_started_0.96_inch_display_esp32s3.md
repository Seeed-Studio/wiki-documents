---
description: Introdução ao XIAO 0.96'' IPS Display (ESP32-S3).
title: Introdução ao XIAO 0.96'' IPS Display (ESP32-S3)
keywords:
  - XIAO
  - ESP32-S3
  - Display
  - LCD
  - 0.96
image: https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/logo_esp32s3.webp
slug: /getting_started_0.96_inch_display_esp32s3
sku: 100037468
sidebar_label: Introdução
sidebar_position: 1
type: gettingstarted
last_update:
  date: 09/07/2026
  author: FaiyuetCik
createdAt: '2026-08-20'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/getting_started_0.96_inch_display_esp32s3/
---

# Introdução ao XIAO 0.96'' IPS Display (ESP32-S3)

<div class="table-center">
  <table align="center">
    <tr><th>XIAO 0.96'' IPS Display (ESP32-S3)</th></tr>
    <tr><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_hero.jpg" style={{width:600, height:'auto'}}/></div></td></tr>
    <tr><td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/0-96-Inch-Display-Powered-by-XIAO-ESP32-S3-Plus-p-6993.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td></tr>
  </table>
</div>

## Introdução

O 0.96'' IPS Display é uma placa de expansão compacta alimentada pelo XIAO ESP32-S3 Plus. Ele combina um LCD colorido IPS 80×160, um microfone PDM onboard, um IMU de 6 eixos, dois botões de usuário, pads de expansão I2C e I2S e detecção de tensão de bateria em um formato projetado para pequenos dispositivos conectados.

O ESP32-S3 Plus adiciona conectividade Wi-Fi e Bluetooth, tornando a placa adequada para wearables compactos, painéis de sensores portáteis, gadgets de chaveiro e protótipos IoT sem fio.

<div class="table-center">
  <table align="center">
    <tr><th>Especificação</th><th>Detalhe</th></tr>
    <tr><td>Posicionamento do Produto</td><td>Ultra-compacto</td></tr>
    <tr><td>Controlador Principal</td><td>Seeed Studio XIAO ESP32-S3 Plus</td></tr>
    <tr><td>Processador</td><td>ESP32-S3R8, Dual-Core, até 240 MHz</td></tr>
    <tr><td>Memória</td><td>8 MB PSRAM + 16 MB Flash</td></tr>
    <tr><td>Conectividade Sem Fio</td><td>Wi-Fi 2,4 GHz + BLE 5.0</td></tr>
    <tr><td>Tipo de Display</td><td>0.96" IPS TFT LCD</td></tr>
    <tr><td>Resolução</td><td>80 × 160</td></tr>
    <tr><td>Driver do Display</td><td>ST7789</td></tr>
    <tr><td>Interface do Display</td><td>SPI</td></tr>
    <tr><td>Entrada por Toque</td><td>Não</td></tr>
    <tr><td>IMU de 6 Eixos</td><td>Sim</td></tr>
    <tr><td>Microfone Digital PDM</td><td>Sim</td></tr>
    <tr><td>Slot para Cartão MicroSD</td><td>Não</td></tr>
    <tr><td>Conector Grove I2C</td><td>Não</td></tr>
    <tr><td>Botões de Usuário</td><td>2</td></tr>
    <tr><td>Conector de Bateria</td><td>JST de 2 pinos, LiPo 3,7 V</td></tr>
    <tr><td>Monitoramento de Bateria</td><td>Monitoramento da tensão da bateria via D16 ADC; o nível da bateria pode ser estimado a partir da tensão medida. Detecção de status de bateria não é suportada.</td></tr>
    <tr><td>Interfaces de Expansão</td><td>1x Interface I2C, 1x Interface I2S, 1x Interface JTAG, 2x Interfaces de Botão de Usuário</td></tr>
    <tr><td>Tamanho da Placa</td><td>18,8 × 43,6 × 10,6 mm</td></tr>
    <tr><td>Melhor Uso</td><td>Dispositivos IoT minúsculos, wearables, displays de status</td></tr>
  </table>
</div>

:::note
Esta placa de display foi projetada para o **XIAO ESP32-S3 Plus**. Se você estiver usando a versão XIAO nRF52840 Plus, consulte o guia [XIAO 0.96'' IPS Display (nRF52840)](/pt-br/getting_started_0.96_inch_display_nrf52840).
:::

:::note
A versão ESP32-S3 Plus usa D16 para medir a tensão do divisor da bateria; ela não fornece um indicador de estado de carregamento.
:::

## Visão Geral de Hardware

Consulte a visão a seguir para identificar os conectores e componentes onboard antes de conectar o hardware de expansão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hardware_overviewNEW.png" style={{width:1000, height:'auto'}}/></div>

### Mapa de Pinos

A tabela abaixo lista os pinos do XIAO ESP32-S3 Plus usados pela placa de display e seus periféricos onboard.

<div class="table-center">
  <table align="center">
    <tr><th>Pino XIAO</th><th>Nome da Rede</th><th>Descrição da Função</th><th>Observações de Conexão de Hardware</th></tr>
    <tr><td>D0</td><td>PDM_CLK</td><td>Clock do microfone PDM</td><td>Conectado internamente ao microfone PDM onboard</td></tr>
    <tr><td>D1</td><td>PDM_DATA</td><td>Dados do microfone PDM</td><td>Conectado internamente ao microfone PDM onboard</td></tr>
    <tr><td>D2</td><td>LCD_CS</td><td>Chip select do LCD</td><td>Conectado internamente ao LCD</td></tr>
    <tr><td>D3</td><td>LCD_DC</td><td>Seleção de dados/comando do LCD</td><td>Conectado internamente ao LCD</td></tr>
    <tr><td>D4</td><td>I2C_SDA</td><td>Dados I2C</td><td>Compartilhado pelo IMU onboard e pelo pad de teste I2C traseiro</td></tr>
    <tr><td>D5</td><td>I2C_SCL</td><td>Clock I2C</td><td>Compartilhado pelo IMU onboard e pelo pad de teste I2C traseiro</td></tr>
    <tr><td>D6</td><td>BTN_USR1</td><td>Botão de usuário 1</td><td>Ativo em nível baixo</td></tr>
    <tr><td>D7</td><td>BTN_USR2</td><td>Botão de usuário 2</td><td>Ativo em nível baixo</td></tr>
    <tr><td>D8</td><td>LCD_SCK</td><td>Clock SPI de hardware</td><td>Conectado internamente ao LCD</td></tr>
    <tr><td>D9</td><td>NC</td><td>Não conectado</td><td>Nenhuma conexão física</td></tr>
    <tr><td>D10</td><td>LCD_MOSI</td><td>Saída de dados SPI de hardware</td><td>Conectado internamente ao LCD</td></tr>
    <tr><td>D11</td><td>I2S_SD</td><td>Dados de áudio I2S</td><td>Exposto externamente ao pad de expansão inferior</td></tr>
    <tr><td>D12</td><td>I2S_SCK</td><td>Clock de bits I2S</td><td>Exposto externamente ao pad de expansão inferior</td></tr>
    <tr><td>D13</td><td>I2S_WS</td><td>Seleção de palavra I2S</td><td>Exposto externamente ao pad de expansão inferior</td></tr>
    <tr><td>D14</td><td>IMU_INT</td><td>Interrupção do IMU</td><td>Conectado internamente ao LSM6DS3 para eventos de movimento e toque duplo</td></tr>
    <tr><td>D15</td><td>NC</td><td>Não conectado</td><td>Nenhuma conexão física</td></tr>
    <tr><td>D16</td><td>VBAT_ADC</td><td>Detecção de tensão da bateria</td><td>Conectado ao divisor de 316 kΩ / 160 kΩ. <strong>Não use externamente</strong></td></tr>
    <tr><td>D17</td><td>LCD_RST</td><td>Reset do LCD</td><td>Conectado internamente ao LCD</td></tr>
    <tr><td>D18</td><td>LCD_BL_PWM</td><td>Controle de retroiluminação do LCD</td><td>Conectado internamente ao circuito driver da retroiluminação</td></tr>
    <tr><td>D19</td><td>NC</td><td>Não conectado</td><td>Nenhuma conexão física</td></tr>
  </table>
</div>


:::caution
D4 e D5 são compartilhados com o IMU onboard. Qualquer dispositivo I2C externo conectado ao pad de teste deve usar um endereço exclusivo e suportar lógica de 3,3 V.
:::

## Introdução

:::caution
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_handing_tips.png" style={{width:600, height:'auto'}}/></div>
:::

Este guia faz o upload de um sketch mínimo **"Hello, XIAO"** para a placa de display: a tela liga a retroiluminação, preenche de preto e imprime **"Hello,"** e **"XIAO"** como duas linhas centralizadas de texto grande em verde. É a maneira mais rápida de confirmar que a tela e o seu ambiente de desenvolvimento estão funcionando antes de mergulhar nas demos individuais de periféricos.

### Preparação de Software

Você precisará das seguintes ferramentas e bibliotecas:

- **Arduino IDE** (versão 1.8 ou posterior)

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div><br />

- **esp32 Boards by Espressif (3.3.11)** — adicione a seguinte URL em **File > Preferences > Additional Boards Manager URLs**:

```
https://espressif.github.io/arduino-esp32/package_esp32_index.json
```

Em seguida, vá em **Tools > Board > Boards Manager**, pesquise por **esp32** e instale a versão **3.3.11**.

- **Seeed_GFX2 (Instalação Manual)** — esta biblioteca não está disponível no Library Manager e deve ser instalada manualmente:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX2/archive/refs/tags/v1.0.0.zip" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Download Seeed_GFX2</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 1.** Clique no botão acima para baixar `Seeed_GFX2` v1.0.0 como um arquivo ZIP (fixado em uma tag de release para que o tutorial permaneça reprodutível). Alternativamente, clone o repositório em [Seeed-Studio/Seeed_GFX2](https://github.com/Seeed-Studio/Seeed_GFX2).

**Passo 2.** No Arduino IDE, vá em **Sketch > Include Library > Add .ZIP Library...** e selecione o ZIP baixado. O IDE lê `library.properties` e o instala automaticamente na pasta `Seeed_GFX2` correta — você não precisa renomear a pasta extraída. (Para instalar manualmente em vez disso, descompacte o arquivo e renomeie a pasta extraída para `Seeed_GFX2` antes de colocá-la em `Documents/Arduino/libraries/`.)

**Passo 3.** Reinicie o Arduino IDE para que a nova biblioteca seja detectada.

:::tip
- **Seeed_GFX2** é a biblioteca gráfica da Seeed Studio construída sobre uma arquitetura em camadas `Board` + `Panel Config`. Cada demo inicializa o display com uma única chamada `display.begin<Board_..., Config_...>()` — o template **Board** contém o mapa de pinos (CS/DC/SCK/MOSI/RST/BL), e o **Panel Config** incorpora a resolução 80×160, a ordem de cores (BGR) e a orientação. Nenhum `driver.h` ou configuração manual de pinos é necessária.
- Nesta placa, o sketch usa `Board_XIAO_0inch96_LCD<13, 12>` (RST=13, BL=12) com `Config_Seeed_0inch96_LCD_ST7789`.
:::

### Baixar o código

O sketch de exemplo está disponível no GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/Display-Gadgets/tree/main/code_GFX2/getting_started_code/xiao_esp32s3_096_hello" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o código</font></span></strong>
    <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Navegue até `code_GFX2/getting_started_code/xiao_esp32s3_096_hello/` e abra `xiao_esp32s3_096_hello.ino` na Arduino IDE. **Baixe a pasta completa** em vez de copiar o código-fonte `.ino` da visualização web do GitHub.

### Enviar o sketch

**Passo 1.** Conecte o XIAO ESP32-S3 Plus ao seu computador através de USB-C.

**Passo 2.** Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

**Passo 3.** Selecione a **Porta** correta em **Tools > Port**.

**Passo 4.** Clique em **Upload**. O sketch será compilado e enviado para a placa.

### Saída esperada

Após o envio, a tela acende com um fundo preto e mostra duas linhas centralizadas de texto grande em verde — **"Hello,"** na primeira linha e **"XIAO"** na segunda. A saudação permanece na tela sem redesenho.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Display_Gadgets/imgs/096_ESP32S3Plus_display_hello.gif" style={{width:500, height:'auto'}}/></div>

Se o display não inicializar, o sketch imprime a mensagem de erro da biblioteca no monitor serial a **115200** baud. Abra **Tools > Serial Monitor** e defina a taxa de baud para 115200 para lê-la.

## O que vem a seguir

A placa de display reúne vários periféricos onboard. A página [Function](/pt-br/function_0.96_inch_display_esp32s3) fornece uma demonstração independente para cada um:

<div class="table-center">
  <table align="center">
    <tr><th>Periférico</th><th>Demo</th></tr>
    <tr><td>Tela</td><td>[GraphicTest](/pt-br/function_0.96_inch_display_esp32s3#tela-display--graphictest) — dez primitivas gráficas com medições de tempo</td></tr>
    <tr><td>IMU</td><td>[Electronic Quicksand + Raise to Wake](/pt-br/function_0.96_inch_display_esp32s3#imu) — efeitos de movimento de 6 eixos e despertar por movimento</td></tr>
    <tr><td>Microfone e alto-falante</td><td>[Flash Recorder](/pt-br/function_0.96_inch_display_esp32s3#microphone--speaker--flash-recorder) — gravar e reproduzir áudio</td></tr>
    <tr><td>Botões</td><td>[User Buttons](/pt-br/function_0.96_inch_display_esp32s3#user-buttons) — ler pressionamentos e fazer debounce com interrupções</td></tr>
    <tr><td>Bateria</td><td>[Battery Voltage Detection](/pt-br/function_0.96_inch_display_esp32s3#battery-voltage-detection) — medir a tensão do divisor</td></tr>
  </table>
</div>

## FAQ

### A placa não aparece no menu Tools > Board

1. Abra **File > Preferences** e adicione a URL do ESP32 Boards Manager:

   ```
   https://espressif.github.io/arduino-esp32/package_esp32_index.json
   ```

2. Abra **Tools > Board > Boards Manager**, pesquise por **esp32** e instale a versão **3.3.11**.
3. Selecione **Tools > Board > esp32 > XIAO_ESP32S3_PLUS**.

Reinicie a Arduino IDE se a entrada da placa ainda não aparecer.

### Como devo segurar a placa?

Segure a placa perto dos botões e não toque no módulo **XIAO**. Em vez disso, segure a placa pela área dos botões.

### [Sobre o firmware de fábrica - DashBoard]

#### Por que minha tela não fica brilhante quando conecto o cabo USB-C?

A luz de fundo da tela pode estar desligada. Pressione o botão **USR2 (D7)** para alternar a luz de fundo de volta para ligada — o display acenderá normalmente.

## Recursos

- **🗃️[Arquivos de design de PCB]** [XIAO 0.96'' IPS Display (ESP32-S3) KiCad Project](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/kicad/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20KiCad%20Project.zip)
- **📄[Esquemático]** [XIAO 0.96'' IPS Display (ESP32-S3) Schematic](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/schematic/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Schematic.pdf)
- **📦[Modelo 3D]** [XIAO 0.96'' IPS Display (STEP)](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/3d-model/XIAO%200.96%27%27%20IPS%20Display.step)
- **🖨️[Gabinete impresso em 3D]** [XIAO 0.96'' IPS Display Enclosure (by gokul)](https://www.printables.com/model/1843001-enclosure-for-xiao-096-ips-display-esp32nrf52840/files)
- **📄[Datasheet]** [0.96 Inch Display Datasheet](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/datasheet/0.96%20Inch%20Display%20Datasheet.pdf)
- **💾[Firmware de fábrica]** [XIAO 0.96'' IPS Display (ESP32-S3) Factory Firmware](https://files.seeedstudio.com/wiki/Display_Gadgets/resources/firmware/XIAO%200.96%27%27%20IPS%20Display%20%28ESP32-S3%29%20Factory%20Firmware.zip)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

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
