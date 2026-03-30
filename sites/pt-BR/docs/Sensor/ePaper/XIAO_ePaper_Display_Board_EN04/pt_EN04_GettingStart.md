---
description: Primeiros passos com a XIAO ePaper Display Board(nRF52840) - EN04
title: Primeiros passos com a XIAO ePaper Display Board(nRF52840) - EN04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 11/25/2025
  author: Allen
createdAt: '2025-09-25'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/epaper_EN04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Primeiros passos com XIAO ePaper Display EN04

<div class="table-center">
<table align="center">
    <tr>
        <th>Placa XIAO ePaper Display EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO nRF52840** Plus, a placa de exibição EN04 suporta displays ePaper de **24 pinos** e **50 pinos**. Ela possui um conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado, função NFC e vem com um botão de reset e três botões de usuário. É bem adequada para projetos de ePaper de baixo consumo, como sinalização digital, etiquetas eletrônicas e painéis de informação portáteis.

### Características

- **Alimentada pelo XIAO nRF52840 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível.
- **Suporte versátil a displays:** Compatível com uma ampla gama de telas ePaper, suportando interfaces de 24 pinos e 50 pinos com comutação fácil por meio de jumpers.
- **Conector BAT com chave:** Fornece conexão simples de bateria e integra uma chave, permitindo gerenciamento de energia eficiente e economia de energia.
- **Botões fáceis de usar:** Inclui 1 botão de reset e 3 botões programáveis pelo usuário, oferecendo flexibilidade para acelerar projetos e funções personalizáveis.

### Especificações

<table>
  <thead>
    <tr>
      <th>Parâmetro</th>
      <th>Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Processador</th>
      <td>XIAO nRF52840 Plus</td>
    </tr>
    <tr>
      <th>Conector ePaper</th>
      <td>FPC 24 Pin 0.5mm<br />FPC 50 Pin 0.5mm</td>
    </tr>
    <tr>
      <th>Conector de bateria</th>
      <td>JST 2.0mm</td>
    </tr>
    <tr>
      <th>Chave</th>
      <td>Alimentação da bateria ON/OFF</td>
    </tr>
    <tr>
      <th>Fonte de alimentação</th>
      <td>- Bateria Li 3,7 V<br />- USB Tipo-C</td>
    </tr>
    <tr>
      <th>Botão</th>
      <td>- 1x botão de reset<br />- 3x botão de usuário</td>
    </tr>
  </tbody>
</table>

### Guia de seleção de placa ePaper

<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>Placa ePaper Display EN04</th>
<th><a href="https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/pt-br/xiao_eink_expansion_board_v2/">Placa controladora ePaper</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processador</th>
            <td>XIAO nRF52840 Plus</td>
            <td>Série XIAO</td>
            <td>Série XIAO</td>
        </tr>
        <tr>
            <th>Displays ePaper compatíveis</th>
            <td>ePaper de 24 pinos<br />ePaper de 50 pinos</td>
            <td>ePaper de 24 pinos</td>
            <td>ePaper de 24 pinos</td>
        </tr>
        <tr>
            <th>Conector ePaper</th>
            <td>FPC 24 Pin, 0.5mm<br />FPC 50 Pin, 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
            <td>FPC 24 Pin 0.5mm</td>
        </tr>
        <tr>
            <th>Conector de bateria</th>
            <td>JST 2.0mm</td>
            <td>/</td>
            <td>JST 2.0mm</td>
        </tr>
        <tr>
            <th>Chave</th>
            <td>Alimentação da bateria ON/OFF</td>
            <td>/</td>
            <td>Alimentação da bateria ON/OFF</td>
        </tr>
        <tr>
            <th>Porta de extensão de IO</th>
            <td>/</td>
            <td>conexão de outros controladores</td>
            <td>conexão de sensores adicionais</td>
        </tr>
        <tr>
            <th>Porta de extensão de IO</th>
            <td>/</td>
            <td>connection of others controller</td>
            <td>connection of additional sensors</td>
        </tr>
    </tbody>
</table>

### Aplicações

- **Dashboard de casa inteligente**: Exibir informações em tempo real, como atualizações de clima, eventos de calendário e notificações de vários dispositivos de casa inteligente.
- **Monitoramento de energia**: Mostrar dados de consumo de energia de medidores inteligentes, ajudando os moradores a acompanhar e gerenciar o uso de energia de forma mais eficiente.
- **Alertas de segurança**: Exibir alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Display de termostato inteligente**: Mostrar níveis de temperatura e umidade, bem como configurações de controle do seu termostato inteligente.
- **Porta-retratos digital**: Criar um porta-retratos digital com Wi-Fi que possa exibir imagens da sua rede de casa inteligente.

## Visão geral do hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

<!-- :::tip

This version XIAO ePaper Display Board(nRF52840) - EN04 does not support NFC functionality.

::: -->

### ePaper suportado

#### Conector de 24 pinos

- [Display ePaper de 1,54" - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display ePaper de 2,13" - Flexível monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [Display ePaper de 2,13" - Quádruplo 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display ePaper de 2,9" - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display ePaper de 2,9" - Quádruplo colorido 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Display ePaper de 4,2" - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display ePaper de 4,26" - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display ePaper de 5,83" - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper de 7,5" - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [Display ePaper de 7,5" - Três cores 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.jpg" style={{width:600, height:'auto'}}/></div>

:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de ajustar o jumper de acordo com o tipo de display ePaper:

- Para displays ePaper de 24 pinos → ajuste o jumper para 24 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

#### Conector de 50 pinos

- [ePaper Spectra6 de 7,3"](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.jpg" style={{width:600, height:'auto'}}/></div>
:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de ajustar o jumper de acordo com o tipo de display ePaper:
- Para displays ePaper de 50 pinos → ajuste o jumper para 50 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

## Visão geral do software

### Instalar a biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você tiver instalado a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Baixe e instale a biblioteca Seeed GFX a partir do GitHub.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix1.jpg" style={{width:800, height:'auto'}}/></div>

<div align="center">
<a href="https://github.com/Seeed-Studio/Seeed_Arduino_LCD" target="_blank">
<p style={{textAlign: 'center'}}><button type="button" className="download" style={{backgroundColor: '#00A418', borderRadius: '8px', border: 'none', color: '#fff', padding: '12px 24px', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '16px', margin: '4px 2px', cursor: 'pointer'}}>Clique aqui para baixar</button></p>
</a>
</div>

Role para baixo e abra este link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix2.jpg" style={{width:800, height:'auto'}}/></div>

Selecione o tipo do seu dispositivo e algum código será gerado. Copie esse código e o usaremos mais tarde.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se do tipo de seus dispositivos ou componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/6.jpg" style={{width:800, height:'auto'}}/></div>

Depois de baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Existem 4 exemplos básicos; abra um exemplo básico de que você goste:

1. Bitmap: exibir uma imagem bitmap.
2. Clock: exibir um relógio.
3. Clock_digital: exibir um relógio digital.
4. Shape: exibir palavras e formas de tamanhos diferentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## Início rápido

Aqui, usamos um display de 7,5" como exemplo. As etapas são as mesmas para todas as telas de 24 pinos; a única diferença é selecionar o tamanho de tela adequado no driver.

Crie um **novo arquivo "driver.h"** e cole esse código nele. O código deve ser algo como:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EN04
```

Depois disso, vá para **Tools** -> **Board** -> **XIAO ESP32S3** e **Tools** -> **Port** -> **Select the port your board is connected to**. Em seguida, clique em **Upload** para enviar o código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/7.jpg" style={{width:1000, height:'auto'}}/></div>

Agora você verá o feedback na sua tela de epaper! A seguir estão os resultados dos exemplos Helloworld. (Se nada aparecer, clique no botão de reset)

:::tip
⚠️ Nota: Orientação do Cabo do ePaper
Ao conectar o display ePaper à XIAO ePaper Display Board, certifique-se de que o cabo FPC seja inserido na direção correta.

⚠️ Não inverta o conector! Inserir o cabo de cabeça para baixo pode fazer com que o ePaper não exiba nada ou até danificar a tela/placa.
A imagem abaixo mostra a conexão correta:
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.jpg" style={{width:500, height:'auto'}}/></div>

### Botões de Usuário na XIAO ePaper Display Board(nRF52840) - EN04

A EN04 possui três botões programáveis pelo usuário que podem ser usados para vários propósitos de controle. Esta seção demonstra como ler os estados dos botões e responder aos pressionamentos usando Arduino.

Na EN04, os três botões estão conectados ao XIAO nRF52840 Plus:

<table>
  <thead>
    <tr>
      <th>KEY1</th>
      <th>KEY2</th>
      <th>KEY3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>GPIO2_D1/A1</th>
      <th>GPIO3_D2/A2</th>
      <th>GPIO5_D4/A4</th>
    </tr>
  </tbody>
</table>


Todos os botões são ativos em nível baixo, o que significa que eles leem LOW quando pressionados e HIGH quando soltos.

Exemplo Básico de Leitura de Botão

Este exemplo demonstra como detectar pressionamentos de botões e imprimir mensagens no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.jpg" style={{width:500, height:'auto'}}/></div>

<br></br>

```cpp
// Define button pin (GPIO2 corresponds to Arduino digital pin 2)
const int KEY_PIN = 2;

void setup() {
  // Initialize serial port (baud rate 9600, nRF52840 compatible with default Serial)
  Serial.begin(9600);
  // Wait for serial port initialization to complete (for nRF52840 Bluetooth module serial buffer)
  while (!Serial) delay(10);

  // Configure button pin as input mode with internal pull-up resistor enabled
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Button Detection Program Started");
  Serial.println("Press the button connected to GPIO2 to see output...");
}

void loop() {
  // Read button state (INPUT_PULLUP mode: LOW = pressed, HIGH = not pressed)
  int keyState = digitalRead(KEY_PIN);

  // Detect if button is pressed (low level)
  if (keyState == LOW) {
    // 50ms delay for debounce handling (avoids false triggers from mechanical button bounce)
    delay(50);
    // Read state again to confirm (ensure stable press)
    if (digitalRead(KEY_PIN) == LOW) {
      // Print specified content via serial port
      Serial.println("Hello. This is key1");

      // Wait for button release (prevent repeated printing during long press)
      while (digitalRead(KEY_PIN) == LOW) {
        delay(10); // Short delay to reduce CPU usage
      }
    }
  }

  // Short delay in main loop for performance optimization
  delay(10);
}
```

### Bateria do Usuário na XIAO ePaper Display Board(nRF52840) - EN04

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (normalmente 3 meses com carga completa nas configurações padrão)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10 ms antes da função analogRead().
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.jpg" style={{width:600, height:'auto'}}/></div>

```cpp
#define VOLTAGE_PIN A0 //GPIO1
#define ADC_ENABLE_PIN A5 //GPIO6

void setup() {
  Serial.begin(115200);
  delay(10);

  pinMode(VOLTAGE_PIN, INPUT);
  pinMode(ADC_ENABLE_PIN, OUTPUT);
  digitalWrite(ADC_ENABLE_PIN , HIGH);
}


void loop() {
  analogReadResolution(12); 
  int adcValue = analogRead(VOLTAGE_PIN);
  float voltage = (adcValue / 4096.0) *7.16;
  Serial.print("ADC Value: ");
  Serial.print(adcValue);
  Serial.print(" Voltage: ");
  Serial.print(voltage, 3);
  Serial.println(" V");
  delay(10);
}
```



## Recursos
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
