---
description: Introdução à XIAO ePaper Display Board(nRF52840) - EN05
sku: 100085486
title: Introdução à EN05
sidebar_position: 1
image: https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.webp
slug: /epaper_en05
last_update:
  date: 10/20/2026
  author: Nemo
createdAt: '2026-04-08'
url: https://wiki.seeedstudio.com/pt-br/epaper_en05/
updatedAt: '2026-10-20'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Steppers from '@site/src/components/utils/Stepper';

# Introdução à XIAO ePaper Display Board - EN05

<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board EN05</th>
    </tr>
    <tr>
    <td><div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/Epaper/EN05/3_26_1.jpg"/></div>

    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-nRF52840-EN05-p-6756.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

## Introdução

Alimentada pelo **XIAO nRF52840 Plus**, a placa de display EN05 é compatível com uma ampla variedade de displays ePaper de 24 pinos. Ela possui porta de extensão de IO para conexão de sensores adicionais, conector de bateria JST 2,0 mm com chave liga/desliga, CI de carregamento integrado e vem com três botões de usuário. É ideal para projetos de ePaper de ultrabaixo consumo, como crachás inteligentes, etiquetas eletrônicas de preço, sinalização de salas de reunião e quadros de informação portáteis.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/3.jpg" style={{width:800, height:'auto'}}/></div>

### Recursos

- **Alimentada por XIAO nRF52840 Plus:** Funciona imediatamente quando conectada a um display ePaper compatível, com interface NFC onboard para toque‑para‑configurar, pareamento ou acionamento de atualizações de conteúdo.
- **Suporte versátil a displays:** Compatível com uma ampla gama de displays ePaper de 24 pinos, oferecendo suporte a displays ePaper de 24 pinos para diferentes requisitos de projeto.
- **Porta de extensão de IO:** Permite a conexão de sensores adicionais, como sensores de temperatura e umidade, para funcionalidade aprimorada.
- **Conector de bateria com chave:** Fornece conexão simples de bateria e integra uma chave, permitindo gerenciamento eficiente de energia e economia de consumo.
- **Ampla compatibilidade de software:** Seja programando com Arduino ou PlatformIO, esta placa controladora atende às suas necessidades, oferecendo máxima flexibilidade para seus projetos.

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
      <th>Wireless</th>
      <td>Bluetooth 5.0</td>
    </tr>
    <tr>
      <th>Conector ePaper</th>
      <td>SPI FPC 24 pinos 0,5 mm</td>
    </tr>
    <tr>
      <th>Conector de bateria</th>
      <td>JST 2,0 mm (bateria Li 3,7 V)</td>
    </tr>
    <tr>
      <th>Chave</th>
      <td>Chave deslizante de alimentação por hardware</td>
    </tr>
    <tr>
      <th>Botões</th>
      <td>1x botão de reset (montado na lateral)<br />3x botão de usuário (montado na lateral)</td>
    </tr>
    <tr>
      <th>Espessura da PCB</th>
      <td>1,2 mm</td>
    </tr>
  </tbody>
</table>

### Guia de seleção de placas ePaper

<table>
    <thead>
        <tr>
            <th>Produto</th>
            <th>ePaper Display Board EN05</th>
<th><a href="https://wiki.seeedstudio.com/pt-br/epaper_EN04/">ePaper Display Board EN04</a></th>
<th><a href="https://wiki.seeedstudio.com/pt-br/XIAO-eInk-Expansion-Board/">ePaper Breakout</a></th>
<th><a href="https://wiki.seeedstudio.com/pt-br/xiao_eink_expansion_board_v2/">ePaper Driver Board</a></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>Processador</th>
            <td>XIAO nRF52840 Plus</td>
            <td>XIAO nRF52840 Plus</td>
            <td>Série XIAO</td>
            <td>Série XIAO</td>
        </tr>
        <tr>
            <th>Displays ePaper compatíveis</th>
            <td>ePaper de 24 pinos</td>
            <td>ePaper de 24 pinos<br />ePaper de 50 pinos</td>
            <td>ePaper de 24 pinos</td>
            <td>ePaper de 24 pinos</td>
        </tr>
        <tr>
            <th>Conector ePaper</th>
            <td>FPC 24 pinos, 0,5 mm</td>
            <td>FPC 24 pinos, 0,5 mm<br />FPC 50 pinos, 0,5 mm</td>
            <td>FPC 24 pinos 0,5 mm</td>
            <td>FPC 24 pinos 0,5 mm</td>
        </tr>
        <tr>
            <th>Conector de bateria</th>
            <td>JST 2,0 mm</td>
            <td>JST 2,0 mm</td>
            <td>/</td>
            <td>JST 2,0 mm</td>
        </tr>
        <tr>
            <th>Chave</th>
            <td>Alimentação da bateria ON/OFF</td>
            <td>Alimentação da bateria ON/OFF</td>
            <td>/</td>
            <td>Alimentação da bateria ON/OFF</td>
        </tr>
        <tr>
            <th>Botão</th>
            <td>1x botão de reset<br />3x botão de usuário</td>
            <td>1x botão de reset<br />3x botão de usuário</td>
            <td>/</td>
            <td>/</td>
        </tr>
        <tr>
            <th>Porta de extensão de IO</th>
            <td>conexão de sensores adicionais</td>
            <td>/</td>
            <td>conexão de outros controladores</td>
            <td>conexão de sensores adicionais</td>
        </tr>
    </tbody>
</table>

### Aplicações

- **Crachá inteligente**: Crie um crachá de conferência ou de funcionário de ultrabaixo consumo que exiba nomes, agendas ou códigos QR, com atualizações de conteúdo configuradas por toque via NFC.
- **Etiqueta eletrônica de prateleira**: Construa etiquetas de preço alimentadas por bateria que podem funcionar por meses com uma única carga e atualizar apenas quando o preço mudar.
- **Sinalização de sala de reunião**: Exiba status da sala, informações de reserva e próximos eventos na porta das salas de reunião com consumo mínimo de energia.
- **Dashboard de sensores ambientais**: Combine a porta de extensão de IO com sensores de temperatura e umidade para mostrar dados ambientais em tempo real em uma tela ePaper sempre visível.
- **Quadro de informações portátil**: Leve um display leve e alimentado por bateria para listas de tarefas, anotações ou informações de referência que permanecem legíveis mesmo quando desligado.

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/HardwareOverview_EN05.png" style={{width:900, height:'auto'}}/></div>

### Displays ePaper compatíveis

A EN05 é compatível com os seguintes displays ePaper SPI de 24 pinos:

- [ePaper de 1,54 polegada - Monocromático 200x200](https://www.seeedstudio.com/1-54-Monochrome-ePaper-Display-with-200x200-Pixels-p-5776.html)
- [ePaper de 2,13 polegadas - Monocromático 122x250](https://www.seeedstudio.com/2-13-Monochrome-ePaper-Display-with-122x250-Pixels-p-5778.html)
- [ePaper de 2,13 polegadas - Quatro cores 122x250](https://www.seeedstudio.com/2-13-Quadruple-Color-ePaper-Display-with-122x250-Pixels-p-5779.html)
- [ePaper de 2,9 polegadas - Quatro cores 128x296](https://www.seeedstudio.com/2-9-Quadruple-Color-ePaper-Display-with-128x296-Pixels-p-5783.html)
- [ePaper de 4,2 polegadas - Monocromático 400x300](https://www.seeedstudio.com/4-2-Monochrome-ePaper-Display-with-400x300-Pixels-p-5784.html)
- [ePaper de 4,26 polegadas - Monocromático 800x480](https://www.seeedstudio.com/4-26-Monochrome-SPI-ePaper-Display-p-6398.html)
- [ePaper de 5,83 polegadas - Monocromático 648x480](https://www.seeedstudio.com/5-83-Monochrome-ePaper-Display-with-648x480-Pixels-p-5785.html)
- [ePaper de 7,5 polegadas - Monocromático 800x480](https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html)

### Botões de usuário

A EN05 possui três botões programáveis pelo usuário que podem ser usados para diversas finalidades de controle. Todos os botões são ativos em nível baixo — eles são lidos como LOW quando pressionados e HIGH quando soltos.

Na EN05, os três botões estão conectados ao XIAO nRF52840 Plus da seguinte forma:

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
      <td>D9</td>
    </tr>
  </tbody>
</table>

:::note
Os botões de usuário são programáveis e podem ser configurados para várias funções, como troca de página, seleção de modo ou acionamento de ações específicas no seu projeto com ePaper.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/EN05_Buttons.png" style={{width:700, height:'auto'}}/></div>

### Conector de bateria

A EN05 está equipada com um conector de bateria JST 2,0 mm e um CI de carregamento integrado, o que a torna adequada para projetos de ePaper de baixo consumo alimentados por bateria.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/battery.png" style={{width:700, height:'auto'}}/></div>

## Introdução com Arduino

### Instalar a biblioteca Seeed GFX2

Todos os exemplos de ePaper para a EN05 são baseados na biblioteca Arduino **Seeed_GFX2**, que oferece suporte a todos os displays ePaper listados na seção [Supported ePaper Displays](#displays-epaper-compatíveis). Os exemplos abaixo usam o **ePaper monocromático de 7,5 polegadas (800 x 480)** como exemplo.

**Passo 1. Baixar a biblioteca Seeed_GFX2**

Visite o [repositório Seeed_GFX2 no GitHub](https://github.com/Seeed-Studio/Seeed_GFX2), clique no botão verde **Code** e selecione **Download ZIP** para salvar a biblioteca no seu computador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/14.png" style={{width:800, height:'auto'}}/></div>

**Passo 2. Adicionar a biblioteca à Arduino IDE**

Abra a Arduino IDE, navegue até **Sketch → Include Library → Add .ZIP Library...** e selecione o arquivo ZIP que você acabou de baixar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE02/15.png" style={{width:800, height:'auto'}}/></div>

### Configurar e gravar o programa

1. Navegue até **File → Examples → Seeed_GFX2 → ePaper Displays → Expansion Board Series → nRF52840 Series → XIAO ePaper Display Board - EN05 → 7.5-inch ePaper - Monochrome 800x480 → HelloWorld**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/Arduino_IDE_01.png" style={{width:800, height:'auto'}}/></div>

2. Se você ainda não configurou o suporte à placa XIAO nRF52840, abra **Tools → Board → Boards Manager...**, procure por **Seeed nRF52 Boards** e instale — observe que este é o pacote **Seeed nRF52 Boards** comum, **não** *Seeed nRF52 mbed-enabled Boards*. Para instruções detalhadas de configuração, consulte o [guia de configuração de software do XIAO BLE](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#configuração-de-software).

3. Em **Tools → Board**, selecione **Seeed XIAO nRF52840 Plus**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN04/Arduino_IDE_02.png" style={{width:400, height:'auto'}}/></div>

4. Conecte a placa via USB Type-C, selecione a porta serial correspondente e clique em **Upload**. Quando o upload for concluído, o ePaper será atualizado e exibirá a demonstração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EN05/2.png" style={{width:300, height:'auto'}}/></div>

:::note
Os caminhos de exemplo acima usam o display monocromático de 7,5 polegadas como exemplo. Para outros displays compatíveis, basta escolher a pasta correspondente ao modelo da sua tela em **XIAO ePaper Display Board - EN05** — cada tela é fornecida com os exemplos **HelloWorld**, **Bitmap_&lt;screen_model&gt;** (por exemplo, `Bitmap_7_5_inch_Monochrome`) e **Custom_Demo**.
:::

## Visão geral do software

#### Exemplo básico de leitura de botões

Este exemplo demonstra como detectar os três botões pressionados e imprimir mensagens no monitor serial.

```cpp
#include <Adafruit_TinyUSB.h> // Required for Serial on the Seeed nRF52 Boards core

// Button pin definitions (from the EN05 schematic V1.11)
// KEY1 = D1 / A1 / P0.03
// KEY2 = D2 / A2 / P0.28
// KEY3 = D9
const int KEY1_PIN = 1;
const int KEY2_PIN = 2;
const int KEY3_PIN = 9;

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

## Recursos
- **[PDF]** [XIAO ePaper Display Board Ex05 Schematic](https://files.seeedstudio.com/wiki/Epaper/EE05/XIAO_ePaper_Display_Board_Ex05_V1.0.pdf)
- **[ZIP]** [Seeed Studio XIAO ePaper Display EN05 SCH&PCB](https://files.seeedstudio.com/wiki/Epaper/EN05/XIAO_ePaper_Display_Board_EN05_V1.11_SCH&PCB_260420.zip)

## Solução de problemas

**P1: A tela ePaper não mostra nada após ligar.**

- **Verifique a orientação do cabo FPC.** Certifique-se de que o cabo FPC do ePaper esteja inserido na direção correta. Inverter o conector pode causar tela em branco e pode danificar o display.
- **Pressione o botão RESET.** Após fazer o upload do firmware ou conectar a alimentação, pressione o botão de reset uma vez para acionar a atualização da tela.

**P2: O display mostra conteúdo embaralhado ou atualização parcial.**

- **Confirme a seleção do modelo de tela.** No seu exemplo do Arduino, certifique-se de ter selecionado exatamente o modelo de tela (tamanho e tipo de cor). Escolher o modelo errado causará renderização incorreta.
- **Aguarde uma atualização completa.** Displays ePaper usam um ciclo de atualização completa — efeitos parciais ou de ghosting durante a atualização são normais e desaparecerão quando o ciclo for concluído.

**P3: A placa não liga quando usa bateria.**

- **Verifique a chave de alimentação.** Deslize a chave de alimentação da bateria para a posição ON — a placa não consumirá energia da bateria quando a chave estiver desligada.
- **Verifique a polaridade do conector JST.** Certifique-se de que o conector de bateria JST 2,0 mm esteja conectado com a polaridade correta. A polaridade invertida da bateria pode danificar o hardware. Verifique as marcações +/− do conector antes de conectar.
- **Carregue a bateria.** Se a bateria estiver totalmente descarregada, a placa pode não iniciar. Conecte o USB Type-C para carregar a bateria e tente novamente.

**P4: O computador não detecta a placa ou nenhuma porta serial aparece.**

- **Pressione o botão RESET.** Com a placa conectada via USB, pressione e solte o botão RESET para reenumerar a porta USB e tente novamente.
- **Use um cabo USB com suporte a dados.** Alguns cabos USB fornecem apenas energia e não suportam transferência de dados. Troque para um cabo de dados confiável.
- **Verifique a porta USB.** Tente outra porta USB no seu computador — algumas portas podem ter problemas de energia ou de driver.

**P5: O upload pela Arduino IDE falha.**

- **Selecione a placa correta.** Vá em **Tools** → **Board** e certifique-se de que **Seeed XIAO nRF52840 Plus** esteja selecionada. Não escolha outras variantes de placas XIAO.
- **Selecione a porta correta.** Vá em **Tools** → **Port** e escolha a porta serial correspondente à sua placa. Se nenhuma porta aparecer, verifique o cabo USB e a conexão.
- **Entre no modo bootloader se necessário.** Se o upload falhar continuamente, pressione duas vezes o botão RESET para entrar no modo bootloader, depois selecione novamente a porta e tente fazer o upload outra vez.

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
