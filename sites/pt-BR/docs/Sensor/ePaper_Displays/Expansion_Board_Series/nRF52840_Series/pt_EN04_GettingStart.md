---
description: Introdução à XIAO ePaper Display Board(nRF52840) - EN04
title: Introdução à EN04
keywords:
  - epaper
image: https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.webp
sidebar_position: 1
slug: /epaper_EN04
sku: 100003489,E25120101
last_update:
  date: 10/8/2026
  author: Nemo
createdAt: '2025-09-25'
updatedAt: '2026-10-08'
url: https://wiki.seeedstudio.com/pt-br/epaper_EN04/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display Board - EN04

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN04</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_2.jpg"/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN04-p-6589.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO nRF52840** Plus, a placa de display EN04 suporta displays ePaper de **24 pinos** e **50 pinos**. Ela possui um conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado e vem com um botão de reset e três botões de usuário. É ideal para projetos de ePaper de baixo consumo, como sinalização digital, etiquetas eletrônicas e quadros de informação portáteis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/EN04_1.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **Alimentada por XIAO nRF52840 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível.
- **Suporte versátil a displays:** Compatível com uma ampla variedade de telas ePaper, suportando interfaces de 24 pinos e 50 pinos, com comutação fácil por meio de jumpers.
- **Conector BAT com chave:** Fornece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
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
      <td>- 1x botão de reset<br />- 3x botão de usuário</td>
    </tr>
  </tbody>
</table>

### Guia de seleção de placa ePaper

<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>ePaper Display Board EN04</th>
<th><a href="https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/pt-br/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
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
            <th>Porta de extensão IO</th>
            <td>/</td>
            <td>conexão de outros controladores</td>
            <td>conexão de sensores adicionais</td>
        </tr>
        <tr>
            <th>Porta de extensão IO</th>
            <td>/</td>
            <td>connection of others controller</td>
            <td>connection of additional sensors</td>
        </tr>
    </tbody>
</table>


### Aplicações

- **Dashboard de casa inteligente**: Exiba informações em tempo real, como atualizações de clima, eventos de calendário e notificações de vários dispositivos de casa inteligente.
- **Monitoramento de energia**: Mostre dados de consumo de energia de medidores inteligentes, ajudando moradores a acompanhar e gerenciar o uso de energia com mais eficiência.
- **Alertas de segurança**: Exiba alertas e notificações sobre eventos de segurança, como detecção de movimento ou ativação de sensores de porta/janela.
- **Display de termostato inteligente**: Mostre níveis de temperatura e umidade, bem como configurações de controle para o seu termostato inteligente.
- **Porta-retratos digital**: Crie um porta-retratos digital com WiFi que possa exibir imagens da sua rede de casa inteligente.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/hardwareoview.png" style={{width:900, height:'auto'}}/></div>

### Displays ePaper suportados

#### Conector de 24 pinos

- [Display ePaper de 1,54 polegadas - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [Display ePaper de 2,13 polegadas - Monocromático 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [Display ePaper de 2,13 polegadas - Quatro cores 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [Display ePaper de 2,9 polegadas - Monocromático 128x296](https://www.seeedstudio.com/2-9-Monochrome-ePaper-Display-with-296x128-Pixels-p-5782.html)
- [Display ePaper de 2,9 polegadas - Quatro cores 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [Display ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [Display ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [Display ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [Display ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)
- [Display ePaper de 7,5 polegadas - Três cores 800x480](https://www.seeedstudio.com/7-5-3-Color-SPI-ePaper-Display-p-6399.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/5.png" style={{width:800, height:'auto'}}/></div>

:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de configurar o jumper de acordo com o tipo de display ePaper:

- Para displays ePaper de 24 pinos → ajuste o jumper para 24 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar a alimentação.

:::

#### Conector de 50 pinos

- [ePaper Spectra6 de 7,3 polegadas](https://www.seeedstudio.com/7-3inch-Six-Color-eInk-ePaper-Display-with-800x480-Pixels-p-6567.html)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/4.png" style={{width:800, height:'auto'}}/></div>

:::tip
Ao usar a XIAO ePaper Display Board, certifique-se de configurar o jumper de acordo com o tipo de display ePaper:

- Para displays ePaper de 50 pinos → ajuste o jumper para 50 pinos

⚠️ Usar a configuração de jumper incorreta pode fazer com que o ePaper não exiba nada ou mostre conteúdo anormal. Sempre verifique a posição do jumper antes de ligar a alimentação.

:::

### Botões de usuário

A EN04 possui três botões programáveis pelo usuário que podem ser usados para várias finalidades de controle. Todos os botões são ativos em nível baixo — eles leem LOW quando pressionados e HIGH quando soltos.

Na EN04, os três botões estão conectados ao XIAO nRF52840 Plus da seguinte forma:

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
      <td>D1 / A1</td>
      <td>D2 / A2</td>
      <td>D4 / A4</td>
    </tr>
  </tbody>
</table>

:::note
Os botões de usuário são programáveis e podem ser configurados para várias funções, como troca de página, seleção de modo ou acionamento de ações específicas no seu projeto com ePaper.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/3.png" style={{width:700, height:'auto'}}/></div>

### Conector de bateria

A EN04 está equipada com um conector de bateria JST 2,0 mm e um CI de carregamento integrado, tornando-a adequada para projetos ePaper de baixo consumo alimentados por bateria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/2.png" style={{width:700, height:'auto'}}/></div>

## Introdução ao Arduino

### Instalar a biblioteca Seeed GFX2

Todos os exemplos de ePaper para a EN04 são baseados na biblioteca Arduino **Seeed_GFX2**, que oferece suporte a todos os displays ePaper listados na seção [Supported ePaper Displays](#Supported-ePaper-Displays). Os exemplos abaixo usam o **ePaper monocromático de 7,5 polegadas (800 x 480)** como exemplo.

**Passo 1. Baixar a biblioteca Seeed_GFX2**

Visite o [repositório Seeed_GFX2 no GitHub](https://github.com/Seeed-Studio/Seeed_GFX2), clique no botão verde **Code** e selecione **Download ZIP** para salvar a biblioteca no seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**Passo 2. Adicionar a biblioteca à Arduino IDE**

Abra a Arduino IDE, navegue até **Sketch → Include Library → Add .ZIP Library...** e selecione o arquivo ZIP que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### Configurar e gravar o programa

1. Navegue até **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN04 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_01.png" style={{width:800, height:'auto'}}/></div>

2. Em **Tools → Board**, selecione **Seeed XIAO nRF52840 Plus**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:400, height:'auto'}}/></div>

3. Conecte a placa via USB Type-C, selecione a porta serial correspondente e clique em **Upload**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/1.png" style={{width:300, height:'auto'}}/></div>

:::note
Os caminhos de exemplo acima usam o display monocromático de 7,5 polegadas como exemplo. Para outros displays compatíveis, basta escolher a pasta que corresponde ao modelo da sua tela em **XIAO ePaper Display Board - EN04** — cada tela é fornecida com os exemplos **HelloWorld**, **Bitmap** e **Custom_Demo** (exceto o modelo Tri-Color de 7,5 polegadas, que vem com **HelloWorld** e **Custom_Demo**).
:::

## Visão geral do software

#### Exemplo básico de leitura de botões

Este exemplo demonstra como detectar os três botões pressionados e imprimir mensagens no monitor serial.

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (verified on hardware)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D4 / A4 / P0.04
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 4;

void setup() {
  // Initialize serial port
  Serial.begin(9600);
  while (!Serial) delay(10);

  // Configure all button pins as input with internal pull-up
  // Pin is HIGH when not pressed, LOW when pressed
  pinMode(KEY1_PIN, INPUT_PULLUP);
  pinMode(KEY2_PIN, INPUT_PULLUP);
  pinMode(KEY3_PIN, INPUT_PULLUP);

  Serial.println("nRF52840 Three-Button Detection Program Started");
  Serial.println("Press KEY1 / KEY2 / KEY3 to see output...");
}

// Helper function: check if a button is pressed (with debounce)
bool isButtonPressed(int pin) {
  if (digitalRead(pin) == LOW) {
    delay(50); // debounce
    if (digitalRead(pin) == LOW) {
      // Wait for release to prevent repeated triggers
      while (digitalRead(pin) == LOW) {
        delay(10);
      }
      return true;
    }
  }
  return false;
}

void loop() {
  if (isButtonPressed(KEY1_PIN)) {
    Serial.println("Hello. This is KEY1");
  }
  if (isButtonPressed(KEY2_PIN)) {
    Serial.println("Hello. This is KEY2");
  }
  if (isButtonPressed(KEY3_PIN)) {
    Serial.println("Hello. This is KEY3");
  }

  delay(10);
}
```

#### Exemplo de leitura da tensão da bateria

Este exemplo demonstra como ler a tensão da bateria e imprimi-la no monitor serial.

:::tip
Se você quiser escrever algum código por conta própria para ler a tensão da bateria, será mais preciso adicionar um atraso de 10 ms antes da função analogRead().
:::

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

#define VOLTAGE_PIN A0 //P0.02
#define ADC_ENABLE_PIN A5 //P0.05

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

## Solução de problemas

**P1: A tela ePaper não mostra nada após ligar.**

- **O kit DIY não possui firmware pré-instalado.** O XIAO EN04 DIY Kit não é fornecido com firmware de ePaper — uma tela em branco ou preta na primeira energização é normal.
- **Verifique a orientação do cabo FPC.** Certifique-se de que o cabo FPC do ePaper esteja inserido na direção correta. Inverter o conector pode causar tela em branco e pode danificar o display.
- **Pressione o botão RESET.** Após fazer o upload do firmware ou conectar a alimentação, pressione o botão de reset uma vez para acionar a atualização da tela.

**P2: O display mostra conteúdo embaralhado ou atualização parcial.**

- **Verifique a configuração do jumper.** A EN04 é compatível com displays ePaper de 24 pinos e 50 pinos — o jumper deve corresponder ao tipo da sua tela. Defina como 24 Pin para telas de 24 pinos e 50 Pin para telas de 50 pinos.
- **Confirme a seleção do modelo de tela.** No seu exemplo do Arduino, certifique-se de ter selecionado exatamente o modelo de tela (tamanho e tipo de cor). Escolher o modelo errado causará renderização incorreta.
- **Aguarde uma atualização completa.** Displays ePaper usam um ciclo de atualização completa — efeitos parciais ou de ghosting durante a atualização são normais e desaparecerão quando o ciclo for concluído.

**P3: A placa não liga quando usa bateria.**

- **Verifique a chave de alimentação.** Deslize a chave de alimentação da bateria para a posição ON — a placa não consumirá energia da bateria quando a chave estiver desligada.
- **Verifique a polaridade do conector JST.** Certifique-se de que o conector de bateria JST 2,0 mm esteja conectado com a polaridade correta. A polaridade invertida da bateria pode danificar o hardware. Verifique as marcações +/− do conector antes de conectar a bateria.
- **Carregue a bateria.** Se a bateria estiver totalmente descarregada, a placa pode não iniciar. Conecte o USB Type-C para carregar a bateria e tente novamente.

**P4: O Seeedash Firmware Flasher não consegue detectar a placa.**

- **Pressione o botão RESET.** Com a placa conectada via USB, pressione e solte o botão RESET para reenumerar a porta USB e tente detectar novamente.
- **Use um cabo USB com suporte a dados.** Alguns cabos USB fornecem apenas energia e não suportam transferência de dados. Troque para um cabo de dados confiável.
- **Verifique a porta USB.** Tente outra porta USB no seu computador — algumas portas podem ter problemas de energia ou de driver.

**P5: O upload pela Arduino IDE falha.**

- **Selecione a placa correta.** Vá em **Tools** → **Board** e certifique-se de que **Seeed XIAO nRF52840 Plus** esteja selecionada. Não escolha outras variantes de placas XIAO.
- **Selecione a porta correta.** Vá em **Tools** → **Port** e escolha a porta serial correspondente à sua placa. Se nenhuma porta aparecer, verifique o cabo USB e a conexão.
- **Entre no modo bootloader se necessário.** Se o upload falhar continuamente, pressione duas vezes o botão RESET para entrar no modo bootloader, depois selecione novamente a porta e tente fazer o upload.

## Recursos
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN04 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN04/202004502_XIAO_ePaper_Display_Board_EN04_V1_SCH_and_PCB.zip)


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
