---
description: Introdução à XIAO ePaper Display Board(ESP32-S3) - EE04
title: Introdução à EE04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.webp
slug: /epaper_ee04
sidebar_position: 3
sku: 104990861,100075670,100064541,E25102101
last_update:
  date: 09/25/2025
  author: Jason
createdAt: '2025-09-25'
updatedAt: '2026-01-20'
url: https://wiki.seeedstudio.com/pt-br/epaper_ee04/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display Board - EE04

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EE04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO ESP32-S3** Plus, a placa de display EE04 suporta telas ePaper de **24 pinos** e **50 pinos**. Ela possui um conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado e vem com um botão de reset e três botões de usuário. É ideal para projetos de ePaper de baixo consumo, como sinalização digital, etiquetas eletrônicas e quadros de informação portáteis.

### Características

- **Alimentada por XIAO ESP32-S3 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível.
- **Suporte versátil a displays:** Compatível com uma ampla variedade de telas ePaper, suportando interfaces de 24 pinos e 50 pinos, com troca fácil por meio de jumpers.
- **Conector de bateria com chave:** Fornece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
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
      <td>XIAO ESP32-S3 Plus</td>
    </tr>
    <tr>
      <th>Conector ePaper</th>
      <td>FPC 24 pinos 0,5mm<br />FPC 50 pinos 0,5mm</td>
    </tr>
    <tr>
      <th>Conector de bateria</th>
      <td>JST 2,0mm</td>
    </tr>
    <tr>
      <th>Chave</th>
      <td>Alimentação da bateria ON/OFF</td>
    </tr>
    <tr>
      <th>Fonte de alimentação</th>
      <td>- Bateria Li 3,7V<br />- USB Type-C</td>
    </tr>
    <tr>
      <th>Botão</th>
      <td>- 1x botão de reset<br />- 3x botões de usuário</td>
    </tr>
  </tbody>
</table>

### Guia de seleção de placa ePaper

<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>ePaper Display Board EE04</th>
<th><a href="https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/pt-br/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processador</th>
            <td>XIAO ESP32-S3 Plus</td>
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
            <td>FPC 24 pinos, 0,5mm<br />FPC 50 pinos, 0,5mm</td>
            <td>FPC 24 pinos 0,5mm</td>
            <td>FPC 24 pinos 0,5mm</td>
        </tr>
        <tr>
            <th>Conector de bateria</th>
            <td>JST 2,0mm</td>
            <td>/</td>
            <td>JST 2,0mm</td>
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
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Porta de IO de extensão</th>
            <td>/</td>
            <td>conexão de outros controladores</td>
            <td>conexão de sensores adicionais</td>
        </tr>
    </tbody>
</table>

### Aplicações

- **Dashboard de casa inteligente**: Exibe informações em tempo real, como atualizações de clima, eventos de calendário e notificações de vários dispositivos de casa inteligente.
- **Monitoramento de energia**: Mostra dados de consumo de energia de medidores inteligentes, ajudando moradores a acompanhar e gerenciar o uso de energia com mais eficiência.
- **Alertas de segurança**: Exibe alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Display de termostato inteligente**: Mostra níveis de temperatura e umidade, bem como configurações de controle para o seu termostato inteligente.
- **Porta-retratos digital**: Crie um porta-retratos digital com WiFi que pode exibir imagens da sua rede de casa inteligente.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

:::tip

Esta versão XIAO ePaper Display Board(ESP32-S3) - EE04 não suporta funcionalidade NFC.

:::

### ePaper suportado

#### Conector de 24 pinos

- [ePaper de 1,54 polegadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2,13 polegadas - Flexível monocromático 212x104](https://www.seeedstudio.com/2-13-Flexible-Monochrome-ePaper-Display-with-212x104-Pixels-p-5781.html)
- [ePaper de 2,13 polegadas - Quádruplo 212x104](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2,9 polegadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [ePaper de 2,9 polegadas - Quádruplo colorido 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [ePaper de 7,5 polegadas - Tricolor 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/37.png" style={{width:800, height:'auto'}}/></div>

:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de configurar o jumper de acordo com o tipo de display ePaper:

- Para displays ePaper de 24 pinos → ajuste o jumper para 24 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

#### Conector de 50 pinos

- [ePaper Spectra6 de 7,3 polegadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/36.png" style={{width:800, height:'auto'}}/></div>
:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de configurar o jumper de acordo com o tipo de display ePaper:
- Para displays ePaper de 50 pinos → ajuste o jumper para 50 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar.

:::

## Visão geral de software

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

Selecione o tipo do seu dispositivo e ele irá gerar algum código. Copie esse código e iremos usá-lo depois.

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.

Portanto, certifique-se do tipo dos seus dispositivos ou componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/38.png" style={{width:800, height:'auto'}}/></div>

Após baixar a biblioteca, vá em **Sketch** -> **Include Library** -> **Add .ZIP Library** e selecione a biblioteca baixada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/51.png" style={{width:800, height:'auto'}}/></div>

Existem 4 exemplos básicos, abra um exemplo básico de que você goste:

1. Bitmap: Exibe uma imagem bitmap.
2. Clock: Exibe um relógio.
3. Clock_digital: Exibe um relógio digital.
4. Shape: Exibe tamanhos diferentes de palavras e formas aleatoriamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_075inch_epaper_panel/fix5.jpg" style={{width:800, height:'auto'}}/></div>

## Primeiros passos

Aqui, usamos um display de 5,83 polegadas como exemplo. As etapas são as mesmas para todas as telas de 24 pinos; a única diferença é selecionar o tamanho de tela apropriado no driver.

Crie um **novo arquivo "driver.h"** e cole esse código nele. O código deve ser assim:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/40.png" style={{width:1000, height:'auto'}}/></div>

```cpp
#define BOARD_SCREEN_COMBO 503 // 5.86 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Depois disso, vá para **Tools** -> **Board** -> **XIAO ESP32S3** e **Tools** -> **Port** -> **Select the port your board is connected to**. Em seguida, clique em **Upload** para enviar o código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.png" style={{width:1000, height:'auto'}}/></div>

Agora você verá o retorno na sua tela de epaper! A seguir estão os resultados dos exemplos de Helloworld.

:::tip
⚠️ Nota: Orientação do cabo do ePaper
Ao conectar o display ePaper à XIAO ePaper Display Board, certifique-se de que o cabo FPC seja inserido na direção correta.

⚠️ Não inverta o conector! Inserir o cabo de cabeça para baixo pode fazer com que o ePaper deixe de exibir ou até danifique a tela/placa.
A imagem abaixo mostra a conexão correta:
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/32.jpg" style={{width:500, height:'auto'}}/></div>

### Botões de usuário na XIAO ePaper Display Board(ESP32-S3) - EE04

A EE04 possui três botões programáveis pelo usuário que podem ser usados para vários propósitos de controle. Esta seção demonstra como ler os estados dos botões e responder aos pressionamentos usando Arduino.

Na EE04, os três botões estão conectados ao XIAO ESP32-S3 Plus:

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

Exemplo básico de leitura de botão

Este exemplo demonstra como detectar pressionamentos de botões e imprimir mensagens no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
// reTerminal E Series - Button Test
// Based on hardware schematic

// Define button pins according to schematic
const int BUTTON_KEY0 = 2;   // KEY0 - GPIO2
const int BUTTON_KEY1 = 3;   // KEY1 - GPIO3
const int BUTTON_KEY2 = 5;   // KEY2 - GPIO5

// Button state variables
bool lastKey0State = HIGH;
bool lastKey1State = HIGH;
bool lastKey2State = HIGH;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    delay(10); // Wait for serial port to connect
  }

  Serial.println("=================================");
  Serial.println("Press any button to see output");
  Serial.println();

  // Configure button pins as inputs
  // Hardware already has pull-up resistors, so use INPUT mode
  pinMode(BUTTON_KEY0, INPUT_PULLUP);
  pinMode(BUTTON_KEY1, INPUT_PULLUP);
  pinMode(BUTTON_KEY2, INPUT_PULLUP);

  // Read initial states
  lastKey0State = digitalRead(BUTTON_KEY0);
  lastKey1State = digitalRead(BUTTON_KEY1);
  lastKey2State = digitalRead(BUTTON_KEY2);

  Serial.println("Setup complete. Ready to detect button presses...");
}

void loop() {
  // Read current button states
  bool key0State = digitalRead(BUTTON_KEY0);
  bool key1State = digitalRead(BUTTON_KEY1);
  bool key2State = digitalRead(BUTTON_KEY2);

  // Check KEY1
  if (key0State != lastKey0State) {
    if (key0State == LOW) {
      Serial.println("KEY0 (GPIO2) pressed!");
    } else {
      Serial.println("KEY0 (GPIO2) released!");
    }
    lastKey0State = key0State;
    delay(50); // Debounce delay
  }

  // Check KEY2
  if (key1State != lastKey1State) {
    if (key1State == LOW) {
      Serial.println("KEY1 (GPIO3) pressed!");
    } else {
      Serial.println("KEY1 (GPIO3) released!");
    }
    lastKey1State = key1State;
    delay(50); // Debounce delay
  }

  // Check KEY3
  if (key2State != lastKey2State) {
    if (key2State == LOW) {
      Serial.println("KEY2 (GPIO5) pressed!");
    } else {
      Serial.println("KEY2 (GPIO5) released!");
    }
    lastKey2State = key2State;
    delay(50); // Debounce delay
  }

  delay(10); // Small delay to prevent excessive CPU usage
}
```

### Bateria do usuário na XIAO ePaper Display Board(ESP32-S3) - EE04

Ao operar com alimentação por bateria:

- O dispositivo entrará automaticamente em modo de baixo consumo entre as atualizações

- A vida útil da bateria depende da frequência de atualização (tipicamente 3 meses com uma carga completa usando as configurações padrão)

- O dispositivo exibirá um ícone de bateria fraca no canto superior direito quando o nível da bateria estiver abaixo de 20%

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10 ms antes da função analogRead().
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/ee04battery.jpg" style={{width:700, height:'auto'}}/></div>

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

### Exibindo imagens personalizadas na XIAO ePaper Display Board (ESP32-S3) - EE04

Encontre o exemplo Bitmap na biblioteca GFX e selecione-o.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image1.png" style={{width:700, height:'auto'}}/></div>

Observe que você precisa criar um arquivo driver.h dentro do diretório do seu projeto.[Para detalhes, clique para Saiba mais.](#install-seeed-gfx-library).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image2.png" style={{width:700, height:'auto'}}/></div>

Em seguida, navegue até a SenseCraft HMI Tool em https://sensecraft.seeed.cc/hmi/tools/dither e envie a imagem que você deseja exibir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image3m.png" style={{width:700, height:'auto'}}/></div>

Depois de enviar a imagem, gere o array em C (dados da imagem).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image4.png" style={{width:700, height:'auto'}}/></div>

Copie o conteúdo do array. Tome cuidado para copiar apenas os dados hexadecimais e não incluir caracteres irrelevantes.

:::tip 
Se as cores no seu display parecerem invertidas em comparação com o seu design original, selecione a opção Invert Colors na ferramenta HMI antes de gerar o código.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image5.png" style={{width:700, height:'auto'}}/></div>

Substitua o array existente no arquivo image.c ou image.h dentro do seu sketch Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image6.png" style={{width:700, height:'auto'}}/></div>

Por fim, envie o programa para o seu XIAO ESP32-S3. Agora você deverá ver sua imagem personalizada exibida na tela ePaper.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/show_custom_image7.png" style={{width:700, height:'auto'}}/></div>

## Recursos

- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_SCH_V1.2.pdf)
- **[PDF]** [Seeed Studio XIAO ePaper Display EE04 Grabcad 3D File](https://grabcad.com/library/xiao-epaper-display-board-esp32-s3-ee04-1)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EE04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EE04/XIAO_ePaper_Display_Board_EE04_V1.2_SCH&PCB.zip)



## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
