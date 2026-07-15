---
title: Introdução ao Seeed Studio XIAO RA4M1
description: |
  XIAO RA4M1 - Menor placa de desenvolvimento baseada em Renesas RA4M1 de 32 bits, compatível com Arduino IDE, 19 GPIOs, LED RGB, CAN BUS, USB 2.0
image: https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/1-102010551-Seeed-Studio-XIAO-RA4M1.jpg
slug: /getting_started_xiao_ra4m1
sku: 102010551,102010638
keywords:
  - XIAO
  - RA4M1
last_update:
  date: 08/15/2024
  author: Carla
sidebar_position: 0
createdAt: '2024-08-06'
updatedAt: '2026-05-27'
url: https://wiki.seeedstudio.com/pt-br/getting_started_xiao_ra4m1/
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Product Description -->

<div style={{ textAlign: 'center' }}>
  <img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{ width: 480, height: 'auto', "border-radius": '12.8px' }} />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
  <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
  </a>
</div><br></br>

## Introdução

O XIAO RA4M1 integra o chip RA4M1 da Renesas (MCU ARM® Cortex®-M4 de 32 bits de até 48 MHz) no formato clássico do XIAO. Esta placa de desenvolvimento oferece 256KB de Flash, 32KB de SRAM, 8KB de EEPROM, um conector USB 2.0, botões de reset e boot, 3 LEDs, um conversor A/D de 14 bits, um conversor D/A de 12 bits e uma interface CAN BUS. Com circuito de carregamento integrado e modos de baixo consumo (até 45μA), é ideal para aplicações alimentadas por bateria. Compartilhando o mesmo microcontrolador de 32 bits R7FA4M1AB3CNE do Arduino Uno R4, é nativamente compatível com o Arduino IDE e com a ampla gama de acessórios XIAO, tornando-se o ponto de partida perfeito para projetos de eletrônica.

### Recursos

<!-- Key Features with bullet -->

- **Microcontrolador popular onboard:** Alimentado pelo Renesas RA4M1, um MCU R7FA4M1AB3CNE ARM® Cortex®-M4 de 32 bits operando a até 48 MHz, com 256 KB de memória Flash e 32 KB de SRAM.
- **Recursos destacados onboard:** Equipado com ADC de 14 bits, DAC de 12 bits, CAN BUS, USB 2.0 e um LED RGB onboard.
- **8 novos IOs expandidos:** Adiciona 8 novos pinos de IO na parte traseira em comparação com as placas XIAO anteriores (19 GPIOs no total), permitindo aplicações mais complexas.
- **Recursos de segurança avançados:** Criptografia por hardware integrada, boot seguro, armazenamento de chaves e outras funções para garantir a segurança da aplicação.
- **Compatibilidade de software:** Totalmente compatível com o Arduino IDE para desenvolvimento e prototipagem de projetos sem complicações.
- **Projeto de energia eficiente:** Oferece 4 modos de operação com consumo de energia tão baixo quanto 45μA em deep sleep e suporta gerenciamento de carga de bateria de lítio.
- **Design compacto do tamanho de um polegar:** Medindo 21 x 17,8 mm, adotando o formato clássico XIAO da Seeed Studio, ideal para aplicações com restrição de espaço.
- **Amigável para produção:** Design SMD (Surface Mount Device) com todos os componentes na parte frontal e furos em forma de selo em ambos os lados, facilitando a produção em massa eficiente.

### Especificações

<!-- Technical Specifications | Table | or bullet -->
| Produto | XIAO RA4M1 |
|---------|-----------|
| **Processador** | [RA4M1 - 32-bit Microcontrollers with 48MHz Arm Cortex-M4 and LCD Controller and Cap Touch for HMI - Renesas](https://www.renesas.com/us/en/products/microcontrollers-microprocessors/ra-cortex-m-mcus/ra4m1-32-bit-microcontrollers-48mhz-arm-cortex-m4-and-lcd-controller-and-cap-touch-hmi) <br/>Núcleo Arm® Cortex®-M4 de 48 MHz com FPU <br/>|
| **RAM** | 32 KB SRAM |
| **Flash** | 256 KB |
| **LEDs** | 1x LED de usuário<br/>1x LED de alimentação<br/>1x LED RGB |
| **Interfaces** | 19 IOs:<br/>6x Analógico<br/>19x Digital<br/>2x IIC<br/>2x UART<br/>2x SPI |
| **Botões** | 1x Botão RESET<br/>1x Botão BOOT |
| **Segurança** | AES128/256 |
| **Baixo consumo (típ.)** | `42.6μA@3.7V` |
| **Compatibilidade de software** | Arduino IDE |
| **Temperatura de trabalho** | -20°C~70°C |
| **Dimensões** | 21×17,8 mm |

## Visão geral de hardware

Antes de tudo, é essencial conhecer alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Seeed Studio XIAO RA4M1.

### Frente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_front_pinout.png" style={{width:1000, height:'auto'}}/></div>

### Verso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/XIAO_RA4M1_back_pinout.png" style={{width:1000, height:'auto'}}/></div>

## **Mapa de pinos**
| Pino XIAO        | Função         | Pino do chip  | Funções alternativas                  | Descrição                          | Nome Arduino |
| :-------------: | :-------------: | :-------: | :---------------------------------: | :---------------------------------: | :----------: |
| 5V              | VBUS             |           |                                     | Entrada/Saída de energia                   |             |
| GND             |                  |           |                                     |                                      |              |
| 3V3             | 3V3_OUT          |           |                                     | Saída de energia                         |              |
| D0              | Analógico          | P014      | AN009                               | GPIO, ADC                            |       0   |
| D1              | Analógico          | P000      | AN000                               | GPIO, ADC                            |          1     |
| D2              | Analógico          | P001      | AN001                               | GPIO, ADC                            |        2       |
| D3              | Analógico          | P002      | AN002                              | GPIO, ADC                            |        3   |
| D4              | SDA1      | P206      |                                            | GPIO, dados I2C             |               4   |
| D5              | Analógico,SCL1      | P100      |                                     | GPIO, clock I2C, ADC                 |     5    |
| D6              | TXD2             | P302      | SDA2                                | GPIO, transmissão UART,I2C              |    6     |
| D7              | RXD2             | P301      | SCL2                                | GPIO, recepção UART,I2C               |       7  |
| D8              | SPI1_SCK         | P111      |                                     | GPIO, clock SPI                      |   8      |
| D9              | SPI1_MISO        | P110      | CRX0                                | GPIO, dados SPI,UART                  |   9      |
| D10             | SPI1_MOSI        | P109      | CTX0                                | GPIO, dados SPI,UART                  |    10    |
| D11             | RX9              | P408      |                                     | GPIO, UART                           |        |
| D12             | TX9              | P409      |                                     | GPIO,UART                            |        |
| D13             | GPIO             | P013      |                                     | GPIO                                 |        |
| D14             | GPIO             | P012      |                                     | GPIO                                 |        |
| D15             | TXD0             | P101      | SDA0,AN021,SPI0_MOSI                | GPIO, transmissão UART, ADC,SPI,I2C     |       |
| D16             | RXD0             | P104      | SCL0,SPI0_MISO                      | GPIO,UART, SPI,I2C                   |       |
| D17             | CRX0             | P102      | AN020,SPI0_SCK                      | GPIO, UART , ADC,SPI                 |       |
| D18             | CTX0             | P103      | AN019                               | GPIO, SPI ,ADC,UART                  |       |
| ADC_BAT         |                  | P015      |                                     | Ler o valor de tensão da bateria           |       |
| Reset           |                  | RES       |                                     | RESET                                |       |
| Boot            |                  | P201      |                                     | Entrar no modo Boot                      |       |
| RGB LED         |                  | P112      |                                     | LED RGB                              |    20   |
| RGB LED         |                  | P500      |                                     | LED RGB   EN                            |    21   |
| CHARGE_LED      |                  | VBUS      |                                     | CHG-LED_Vermelho                          |       |
| USER_LED        |                  | P011      |                                     | Luz de usuário (Y)                      |    19    |
## Primeiros passos

### Preparação de hardware

Você precisa preparar o seguinte:

- 1 x [Seeed Studio XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1)
- 1 x Computador
- 1 x Cabo USB Type-C

<br></br>

:::tip
Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode conferir o [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::

### Preparação de software

A ferramenta de programação recomendada para o XIAO RA4M1 é o Arduino IDE, portanto, como parte da preparação de software, você precisará concluir a instalação do Arduino.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

- **Passo 1.** Baixe e instale a versão estável do Arduino IDE de acordo com o seu sistema operacional.

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong></a>
</div>

- **Passo 2.** Inicie o aplicativo Arduino.

- **Passo 3.** Adicione o pacote de placa RA4M1 ao seu Arduino IDE.

    Navegue até **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
    *https://files.seeedstudio.com/arduino/package_renesas_1.2.0_index.json*

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/arduino_preference.png" style={{width:800, height:'auto'}}/></div>

    Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave **RA4M1** na caixa de pesquisa, selecione a versão mais recente de **Seeed Renesas Board** e instale-a.

    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/board_manager.png" style={{width:600, height:'auto'}}/></div>
- **Passo 4.** Selecione sua placa e porta.

    Na parte superior da Arduino IDE, você pode pesquisar por **xiao** na placa de desenvolvimento à esquerda, selecionar XIAO_RA4M1 e selecionar diretamente a porta.
    <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/select_port.png" style={{width:800, height:'auto'}}/></div>

## Modo BootLoader

Às vezes, usar o programa errado pode fazer com que o XIAO perca sua porta ou não funcione corretamente. Problemas comuns incluem:

- O XIAO está conectado ao computador, mas nenhum número de porta é encontrado.
- O XIAO está conectado e um número de porta aparece, mas o envio do programa falha.

Quando você encontrar as duas situações acima, pode tentar colocar o XIAO no modo BootLoader, o que pode resolver a maioria dos problemas de dispositivos não reconhecidos e falhas de upload. O método específico é:

- **Método 1.** Pressione e segure o botão `BOOT` no XIAO RA4M1 sem soltá-lo.
- **Método 2.** Mantenha o botão `BOOT` pressionado e, em seguida, conecte ao computador via cabo de dados. Solte o botão BOOT após conectar ao computador.

## Reset

Quando o programa é executado de forma anormal, você pode pressionar `Reset` uma vez durante a energização para que o XIAO execute novamente o programa enviado.
Quando você pressiona e mantém pressionada a tecla `BOOT` enquanto liga e, em seguida, pressiona a tecla `Reset` uma vez, você também pode entrar no modo BootLoader.

## Execute seu primeiro programa Blink

Até agora, acredito que você já tenha uma boa compreensão dos recursos e do hardware do XIAO RA4M1. Em seguida, vamos pegar o programa Blink mais simples como exemplo e realizar o primeiro piscar para o seu XIAO RA4M1!

- **Passo 1.** Inicie o aplicativo Arduino.
- **Passo 2.** Navegue até **File > Examples > 01.Basics > Blink** e abra o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink_code.png" style={{width:700, height:'auto'}}/></div>

- **Passo 3.** Selecione o modelo de placa como **XIAO RA4M1** e selecione o número de porta correto para enviar o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/choose_board.png" style={{width:700, height:'auto'}}/></div>

Depois que o programa for enviado com sucesso, você verá a seguinte mensagem de saída e poderá observar que o LED laranja no lado direito do XIAO RA4M1 está piscando.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/blink.gif" style={{width:700, height:'auto'}}/></div>

Parabéns, você aprendeu como escrever e enviar programas para o XIAO RA4M1!
:::note
O LED só apagará quando o pino do LED de usuário no XIAO RA4M1 estiver configurado para nível alto, e só acenderá quando o pino estiver configurado para nível baixo.
:::

## Brinque com LEDs RGB

O XIAO RA4M1 vem com um LED RGB integrado que você pode controlar; a seguir está um exemplo de como alterar suavemente a cor do LED entre vermelho, verde e azul.

- **Passo 1.** Baixe a biblioteca `Adafruit_NeoPixel`

Navegue até **Sketch > Include Liarbry > Manage Libraries...** e pesquise **Adafruit_NeoPixel**, instale a versão mais recente.

- **Passo 2.** Copie o código a seguir para um novo sketch:

```cpp
#include <Adafruit_NeoPixel.h>

#define LED_PIN RGB_BUILTIN  // Define the pin for the built-in RGB LED
#define NUM_PIXELS 1         // Number of WS2812 LEDs

Adafruit_NeoPixel pixels(NUM_PIXELS, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  pinMode(PIN_RGB_EN, OUTPUT); // Set up the power pin
  digitalWrite(PIN_RGB_EN, HIGH); //Turn on power to the LED
  pixels.begin();  // Initialize the NeoPixel library
}

void loop() {
    // Transition from Red to Green
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(255 - i, i, 0));  // Red decreases, Green increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Green to Blue
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(0, 255 - i, i));  // Green decreases, Blue increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }

  // Transition from Blue to Red
  for (int i = 0; i <= 255; i++) {
    pixels.setPixelColor(0, pixels.Color(i, 0, 255 - i));  // Blue decreases, Red increases
    pixels.show();
    delay(10);  // Adjust delay for smoothness
  }
}

```

- **Passo 3.** Selecione o modelo de placa como **XIAO RA4M1** e selecione o número de porta correto para enviar o programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/rgb_led.gif" style={{width:600, height:'auto'}}/></div>

## Bateria e Gerenciamento de Energia

É possível ler a tensão da bateria sem componentes extras? Sim, com o XIAO RA4M1 isso é mais fácil do que nunca. Em membros anteriores da família XIAO, como o [XIAO ESP32C3](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#check-the-battery-voltage), a leitura da tensão da bateria exigia conexão manual ao A0 com um resistor.

Mas com o XIAO RA4M1, esse processo é simplificado. Agora você pode usar diretamente o pino `BAT_DET_PIN/P015` para ler o nível de tensão da bateria, simplificando seu projeto e desenvolvimento. Apenas lembre-se de definir o pino `BAT_READ_EN/P400` para alto, pois é necessário para habilitar a leitura do nível da bateria.

- **Passo 1.** Preparação de hardware

<table align="center">
 <tr>
     <th>Seeed Studio XIAO RA4M1</th>
        <th>Seeed Studio Expansion Base for XIAO with Grove OLED</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:500, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html?utm_source=seeed&utm_medium=wiki&utm&product=xiao-ra4m1" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

O display OLED na placa de expansão XIAO usa o protocolo I2C e está conectado à interface I2C do XIAO através do circuito I2C na placa. Portanto, podemos conectar diretamente o XIAO na placa de expansão e programá-lo para exibir conteúdo na tela.

- **Passo 2.** Instale a biblioteca u8g2.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/olikraus/U8g2_Arduino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

- **Passo 3.** Copie o código e cole na Arduino IDE.

```cpp
#include <Arduino.h>
#include <U8x8lib.h>
#include <Wire.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/* clock=*/ WIRE_SCL_PIN, /* data=*/ WIRE_SDA_PIN, /* reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

#define enablePin  BAT_READ_EN  // Pin for enabling battery voltage reading
#define adcPin BAT_DET_PIN     // Analog input pin (GPIO29 in your case)
const float referenceVoltage = 3.3;  // Reference voltage for the ADC
const float voltageDivider = 2.0;    // Voltage divider factor

void setup() {
  Serial.begin(9600);          // Initialize serial communication at 9600 baud
  pinMode(enablePin, OUTPUT);  // Set the enable pin as an output
  digitalWrite(enablePin, HIGH); // Set the pin high to enable battery voltage reading
  u8x8.begin();
  u8x8.setFlipMode(1);   // set number from 1 to 3, the screen word will rotary 180
  u8x8.setFont(u8x8_font_chroma48medium8_r);
}

void loop() {
  int rawValue = analogRead(adcPin);    // Read the analog input value
  float voltage = rawValue * (referenceVoltage / 1023.0) * voltageDivider; // Calculate the voltage
  // Print the raw value and the calculated voltage
  u8x8.setCursor(0, 0);
  u8x8.print("Raw value:0x");
  u8x8.print(rawValue, HEX);
  u8x8.setCursor(0, 2);
  u8x8.print("Voltage:");
  u8x8.print(voltage, 2);
  u8x8.print("V");

  delay(500); // Delay for 500 milliseconds
}

```

- **Passo 4.** Selecione o modelo de placa como **XIAO RA4M1** e selecione o número de porta correto para fazer o upload do programa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/voltage.png" style={{width:600, height:'auto'}}/></div>

## Recursos

**Design de Hardware**
- **📄[Datasheet]** [Renesas RA4M1 Datasheet](https://www.renesas.com/us/en/document/dst/ra4m1-group-datasheet )
- **📄[Esquemático]** [XIAO RA4M1 Schematic](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/XIAO%20RA4M1%20V1.01_SCH_PDF_260114%20.pdf.pdf )
- **🗃️[Arquivos de Design de PCB]** [XIAO RA4M1 KiCad Project](https://files.seeedstudio.com/wiki/XIAO-R4AM1/res/202003977_XIAO%20RA4M1%20v1.01_SCH&PCB_260114.zip )
- **🗃️[Bibliotecas de Design de PCB]** 
  - [Footprints KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/New_XIAO_Series_Footprints.zip )
  - [Símbolos SCH KiCad da Série XIAO](https://files.seeedstudio.com/wiki/XIAO-KiCad-Library/XIAO_Series_SCH_Symbols.zip )
## Solução de Problemas

### P1: O que devo observar ao soldar pinos

Devido ao tamanho reduzido do XIAO RA4M1, tenha cuidado ao soldar os headers, não junte pinos diferentes e não deixe a solda encostar no shield ou em outros componentes. Caso contrário, isso pode fazer com que o XIAO entre em curto-circuito ou não funcione corretamente, e as consequências causadas por isso serão de responsabilidade do usuário.

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
