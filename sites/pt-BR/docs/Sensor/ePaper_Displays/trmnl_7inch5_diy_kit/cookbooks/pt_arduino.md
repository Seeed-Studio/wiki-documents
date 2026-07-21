---
description: Livro de receitas Arduino ponta a ponta para o TRMNL 7.5" (OG) DIY Kit - utiliza o XIAO ESP32-S3 Plus para acionar diretamente o display ePaper de 7,5" a partir de sketches Arduino personalizados (em vez da plataforma em nuvem TRMNL).
title: Livro de Receitas Arduino
keywords:
  - display ePaper
  - TRMNL
  - Arduino
  - XIAO ESP32-S3 Plus
image: https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/trmnl_head.webp
slug: /ogdiy_kit_works_with_arduino
sidebar_position: 1
last_update:
  date: 04/28/2026
  author: Allen
createdAt: '2025-07-17'
updatedAt: '2026-04-28'
url: https://wiki.seeedstudio.com/pt-br/ogdiy_kit_works_with_arduino/
---

# Livro de Receitas Arduino: TRMNL 7.5" (OG) DIY Kit

:::tip Leia primeiro o guia principal de Arduino
Esta página é o **livro de receitas específico do TRMNL DIY Kit**. O conteúdo comum — configuração da IDE Arduino, pacote de placas ESP32, instalação de `Seeed_GFX`, geração de `driver.h` a partir da Configuration Tool — está em **[Work with Arduino](/pt-br/epaper_work_with_arduino)**. Dê uma olhada nele primeiro se você é novo em Arduino em ePaper da Seeed; esta página foca nas partes específicas do hardware do TRMNL DIY Kit.

Procurando em vez disso pelo fluxo de trabalho do **dashboard em nuvem TRMNL** (sem código personalizado, dashboards controlados por plug-ins)? Veja **[Work with TRMNL](/pt-br/reterminal_e10xx_trmnl)**.
:::

## Introdução

O TRMNL 7.5" (OG) DIY Kit é uma plataforma de desenvolvimento versátil que apresenta o poderoso XIAO ESP32-S3 Plus como seu cérebro. Este DIY Kit combina o poder de processamento do ESP32-S3 com um belo display ePaper de 7,5 polegadas, criando a base perfeita para projetos de exibição de informações de baixo consumo de energia. Este guia foca na programação do TRMNL DIY Kit usando o framework Arduino, fornecendo o conhecimento essencial para utilizar seus diversos recursos de hardware.

## Primeiros Passos

Antes de mergulhar nos recursos específicos, vamos configurar nosso ambiente de desenvolvimento para o TRMNL 7.5" (OG) DIY Kit.

### Instalação do Equipamento

**Passo 1. Conectar o Display à Placa Controladora**  
Alinhe o cabo FPC com o conector na XIAO ePaper Display Board e, em seguida, prenda a trava para garantir uma conexão firme.  

:::tip
O lado metálico do cabo FPC deve ficar voltado para cima, caso contrário, nenhum conteúdo será exibido.

Siga o tutorial de instalação abaixo, muitas pessoas fazem isso de forma incorreta.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/2.jpg" style={{width:600, height:'auto'}}/></div>

**Passo 2. Conectar a Bateria**  
Conecte o cabo da bateria ao conector JST na placa controladora, garantindo a polaridade correta (fio vermelho no +, fio preto no -).  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/3.jpg" style={{width:600, height:'auto'}}/></div>

**Passo 3. Montagem do Gabinete (Opcional)**  

:::tip
Observe que o cabo flexível da tela é muito frágil. Tenha cuidado ao manuseá-lo. Se ele for danificado, toda a tela deixará de funcionar.
:::
Imprima as peças de gabinete open-source a partir da [Resource part](#resources) e monte os componentes dentro.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/4.jpeg" style={{width:600, height:'auto'}}/></div>

Primeiro, monte a placa controladora e a bateria.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/base.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Teste o kit TRMNL para verificar se está funcionando bem.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/test.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Encaixe a tela no gabinete e deixe o FPC sair.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/cable.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Conecte o cabo de extensão FPC e monte todo o gabinete.

<div class="table-center">
<iframe width="600" height="340" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/assembly.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

O gabinete em formato de L é muito semelhante.

<div class="table-center">
<iframe width="300" height="500" src="https://files.seeedstudio.com/wiki/XIAO_Gadget/TRMNL_Kit_Pic/Lshape.mp4?
autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

:::tip
Se o seu kit TRMNL estiver muito longe do roteador, você pode mover a antena para fora do gabinete. Isso trará um desempenho melhor.
:::

### Preparação do Ambiente

Para programar o TRMNL DIY Kit com Arduino, você precisará configurar a IDE Arduino com suporte a ESP32.

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

**Passo 1.** Baixe e instale a [Arduino IDE](https://www.arduino.cc/en/software) e inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
      <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div><br />

**Passo 2.** Adicione o suporte à placa ESP32 na IDE Arduino.

Na IDE Arduino, vá em **File > Preferences** e adicione a seguinte URL ao campo "Additional Boards Manager URLs":

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

**Passo 3.** Instale o pacote de placas ESP32.

Navegue até **Tools > Board > Boards Manager**, procure por "esp32" e instale o pacote ESP32 da Espressif Systems.

**Passo 4.** Selecione a placa correta.

Vá em **Tools > Board > ESP32 Arduino** e selecione "XIAO_ESP32S3_PLUS".

**Passo 5.** Conecte seu TRMNL DIY Kit ao computador usando um cabo USB-C.

**Passo 6.** Selecione a porta correta em **Tools > Port**.

## Exemplos em Arduino

Agora vamos explorar os principais recursos do TRMNL DIY Kit com exemplos de código em Arduino.

### Botões de Usuário

O TRMNL DIY Kit possui três botões programáveis pelo usuário (D1, D2, D4) e um botão de reset. Vamos criar um exemplo simples para detectar pressionamentos de botão.

#### Exemplo de Teste dos Botões

Este exemplo irá ler o estado dos três botões de usuário e imprimir seu status no Serial Monitor.

```cpp
// TRMNL DIY Kit - Button Test Example

// Define button pins
const int BUTTON_D1 = D1;  // First user button
const int BUTTON_D2 = D2;  // Second user button
const int BUTTON_D4 = D4;  // Third user button

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Button Test");

  // Configure button pins as inputs with internal pull-up resistors
  pinMode(BUTTON_D1, INPUT_PULLUP);
  pinMode(BUTTON_D2, INPUT_PULLUP);
  pinMode(BUTTON_D4, INPUT_PULLUP);
}

void loop() {
  // Read button states (buttons are LOW when pressed because of pull-up resistors)
  bool d1Pressed = !digitalRead(BUTTON_D1);
  bool d2Pressed = !digitalRead(BUTTON_D2);
  bool d4Pressed = !digitalRead(BUTTON_D4);

  // Print button states if any button is pressed
  if (d1Pressed || d2Pressed || d4Pressed) {
    Serial.print("Button D1: ");
    Serial.print(d1Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D2: ");
    Serial.print(d2Pressed ? "PRESSED" : "released");
    Serial.print(" | Button D4: ");
    Serial.println(d4Pressed ? "PRESSED" : "released");

    // Add a small delay to avoid repeated readings
    delay(200);
  }
}
```

**Como o Código Funciona:**

1. Definimos constantes de pino para os três botões de usuário (D1, D2, D4).

2. Na função `setup()`, inicializamos a comunicação serial e configuramos os pinos dos botões como entradas com resistores de pull-up internos.

3. Na função `loop()`, lemos o estado de cada botão. Como estamos usando resistores de pull-up, os pinos leem LOW quando os botões são pressionados.

4. Invertimos as leituras (com o operador `!`) para que `true` signifique "pressionado" e `false` signifique "solto".

5. Se qualquer botão for pressionado, imprimimos o estado de todos os botões no Serial Monitor.

6. Um pequeno atraso evita leituras repetidas rápidas quando um botão é mantido pressionado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/6_button_test_serial.png" style={{width:1000, height:'auto'}}/></div>

### Monitoramento da Tensão da Bateria

O TRMNL 7.5" (OG) DIY Kit inclui um circuito para monitoramento da tensão da bateria conectado ao pino D0 (GPIO1). Um recurso importante deste projeto é que ele também inclui um pino de controle (GPIO6) para habilitar/desabilitar a alimentação do ADC, o que ajuda a economizar bateria quando não estiver medindo ativamente.

#### Exemplo de Monitoramento da Tensão da Bateria

```cpp
// TRMNL DIY Kit - Battery Voltage Monitoring Example

#define BATTERY_PIN 1       // GPIO1 (A0) - BAT_ADC
#define ADC_EN_PIN 6        // GPIO6 (A5) - ADC_EN

const float CALIBRATION_FACTOR = 0.968;

void setup() {
  // Initialize serial communication
  Serial.begin(115200);
  while (!Serial) {
    ; // Wait for serial port to connect
  }

  Serial.println("TRMNL DIY Kit - Battery Voltage Monitoring Example");

  // Configure ADC_EN
  pinMode(ADC_EN_PIN, OUTPUT);
  digitalWrite(ADC_EN_PIN, LOW);  // Start with ADC disabled to save power

  // Configure ADC
  analogReadResolution(12);
  analogSetPinAttenuation(BATTERY_PIN, ADC_11db);
}

void loop() {
  // Read battery voltage
  float voltage = readBatteryVoltage();

  // Print the results
  Serial.print("Battery Voltage: ");
  Serial.print(voltage, 2);  // Print with 2 decimal places
  Serial.println("V");

  // Determine battery level
  String batteryStatus;
  if (voltage >= 4.0) {
    batteryStatus = "Full";
  } else if (voltage >= 3.7) {
    batteryStatus = "Good";
  } else if (voltage >= 3.5) {
    batteryStatus = "Medium";
  } else if (voltage >= 3.2) {
    batteryStatus = "Low";
  } else {
    batteryStatus = "Critical";
  }

  Serial.print("Battery Status: ");
  Serial.println(batteryStatus);
  Serial.println();

  // Wait for a while before the next reading
  delay(5000);  // 5 seconds
}

float readBatteryVoltage() {
  // Enable ADC
  digitalWrite(ADC_EN_PIN, HIGH);
  delay(10);  // Short delay to stabilize

  // Read 30 times and average for more stable readings
  long sum = 0;
  for(int i = 0; i < 30; i++) {
    sum += analogRead(BATTERY_PIN);
    delayMicroseconds(100);
  }

  // Disable ADC to save power
  digitalWrite(ADC_EN_PIN, LOW);

  // Calculate voltage
  float adc_avg = sum / 30.0;
  float voltage = (adc_avg / 4095.0) * 3.6 * 2.0 * CALIBRATION_FACTOR;

  return voltage;
}
```

**Como o código funciona:**

1. Definimos dois pinos importantes:

- `BATTERY_PIN` (GPIO1/A0): Conectado ao divisor de tensão da bateria

- `ADC_EN_PIN` (GPIO6/A5): Controla a alimentação do circuito de medição do ADC

2. Definimos um `CALIBRATION_FACTOR` (0.968) para ajustar finamente a precisão da leitura de tensão.

3. Na função `setup()`:

- Inicializamos a comunicação serial

- Configuramos o pino ADC_EN como saída e o definimos como LOW (desativado) para economizar energia

- Definimos a resolução do ADC para 12 bits (0-4095)

- Configuramos a atenuação adequada para o pino da bateria

4. Na função `loop()`:

- Chamamos `readBatteryVoltage()` para obter a tensão atual da bateria

- Imprimimos a tensão no Serial Monitor

- Determinamos e exibimos o status da bateria com base em limites de tensão

- Aguardamos 5 segundos antes de fazer a próxima leitura

5. A função `readBatteryVoltage()`:

- Habilita o circuito do ADC definindo ADC_EN_PIN como HIGH

- Aguarda brevemente para o circuito estabilizar

- Faz 30 leituras e calcula a média para obter resultados mais estáveis

- Desabilita o circuito do ADC para economizar energia

- Calcula a tensão real da bateria usando:

  - A leitura média do ADC
  - A resolução do ADC (4095)
  - Tensão de referência (3,6 V)
  - Fator do divisor de tensão (2,0)
  - Fator de calibração (0,968)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/7_battery_monitor_serial.png" style={{width:1000, height:'auto'}}/></div>

**Projeto para economia de energia:**

Um recurso chave desta implementação é a capacidade de desativar o circuito de medição da bateria quando não está em uso. O TRMNL DIY Kit é projetado para baixo consumo de energia, e essa abordagem ajuda a estender a vida útil da bateria, alimentando o circuito divisor de tensão apenas quando uma medição real é necessária.

O fator de calibração (0,968) compensa as tolerâncias dos componentes no divisor de tensão e ajuda a garantir leituras precisas. Esse valor pode precisar de um pequeno ajuste para a sua placa específica se você perceber que as leituras estão consistentemente diferentes em comparação com a medição de um multímetro.

Fazer múltiplas leituras e calcular a média ajuda a reduzir o ruído e fornece medições de tensão mais estáveis, o que é especialmente importante para o monitoramento de bateria, onde pequenas variações de tensão podem ser significativas para determinar a capacidade restante.

## Display ePaper

O TRMNL 7,5" (OG) DIY Kit possui um belo display ePaper preto e branco de 7,5 polegadas que oferece ótima visibilidade em várias condições de iluminação e consumo de energia ultrabaixo. Nesta seção, vamos explorar como configurar e controlar o display ePaper usando Arduino.

### Configuração de hardware

Antes de começarmos a programar, vamos garantir que o display ePaper esteja devidamente conectado à placa TRMNL:

**Passo 1.** Conecte o display ePaper ao conector de 24 pinos na placa driver. O conector suporta inserção às cegas, então você não conseguirá inseri-lo de forma incorreta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/8_connect_display.png" style={{width:600, height:'auto'}}/></div>

**Passo 2.** Após inserir o cabo flat, prenda-o fechando o mecanismo de travamento.

:::caution
O cabo flat é frágil e pode ser facilmente danificado. Evite dobrá-lo lateralmente o máximo possível.
:::

**Passo 3.** Certifique-se de que o jumper conecte os pinos 24Pin e GND na placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/10_jumper_setting.png" style={{width:700, height:'auto'}}/></div>

### Configuração de software

Para controlar o display ePaper, usaremos a biblioteca Seeed_GFX, que fornece suporte abrangente para vários dispositivos de display da Seeed Studio.

**Passo 1.** Baixe a biblioteca Seeed_GFX do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 2.** Instale a biblioteca adicionando o arquivo ZIP na Arduino IDE. Vá em **Sketch > Include Library > Add .ZIP Library** e selecione o arquivo ZIP baixado.

:::note
Se você já tiver instalado a biblioteca TFT_eSPI, talvez seja necessário removê-la temporariamente ou renomeá-la na pasta de bibliotecas do Arduino para evitar conflitos, pois a Seeed_GFX é um fork da TFT_eSPI com recursos adicionais.
:::

**Passo 3.** Abra o sketch de exemplo da biblioteca Seeed_GFX: **File > Seeed_GFX > Examples > ePaper > Basic > Clock**

**Passo 4.** Crie um novo arquivo chamado `driver.h` na mesma pasta do seu sketch Arduino clicando na seta ao lado da aba do exemplo e selecionando "New Tab".

**Passo 5.** Nomeie o novo arquivo como `driver.h`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/12_create_driver_h.png" style={{width:1000, height:'auto'}}/></div>

**Passo 6.** Acesse a [Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) e selecione "TRMNL 7.5" (OG) DIY Kit" como mostrado na imagem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/13_display_config_tool.png" style={{width:700, height:'auto'}}/></div>

**Passo 7.** Copie o código gerado e cole-o no arquivo `driver.h` que você criou. O código deve se parecer com isto:

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen (UC8179)
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

Passo 8. Agora você pode fazer o upload do exemplo para o seu TRMNL DIY Kit e ver o display ePaper em ação!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/TRMNL_DIY_Kit/18_upload_sketch.jpg" style={{width:700, height:'auto'}}/></div>

### Exemplo básico de display ePaper

Vamos explorar um exemplo simples de relógio analógico que demonstra como desenhar gráficos no display ePaper. [Este exemplo](https://github.com/Seeed-Studio/Seeed_GFX/blob/master/examples/ePaper/Basic/Clock/Clock.ino) cria um mostrador de relógio clássico com ponteiros de horas, minutos e segundos.

```cpp
#include <SPI.h>
#include <TFT_eSPI.h> // Hardware-specific library

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h

EPaper epaper = EPaper(); // Invoke custom library

float sx = 0, sy = 1, mx = 1, my = 0, hx = -1, hy = 0; // Saved H, M, S x & y multipliers
float sdeg = 0, mdeg = 0, hdeg = 0;
uint16_t osx = 120, osy = 120, omx = 120, omy = 120, ohx = 120, ohy = 120; // Saved H, M, S x & y coords
uint16_t x0 = 0, x1 = 0, yy0 = 0, yy1 = 0;
uint32_t targetTime = 0; // for next 1 second timeout

static uint8_t conv2d(const char *p);                                                // Forward declaration needed for IDE 1.6.x
uint8_t hh = conv2d(__TIME__), mm = conv2d(__TIME__ + 3), ss = conv2d(__TIME__ + 6); // Get H, M, S from compile time

bool initial = 1;

#endif

void setup(void)
{
#ifdef EPAPER_ENABLE
  epaper.begin();
  epaper.setRotation(0);

  epaper.fillScreen(TFT_WHITE);

  epaper.setTextColor(TFT_BLACK, TFT_WHITE); // Adding a background colour erases previous text automatically

  // Draw clock face
  epaper.fillCircle(120, 120, 118, TFT_BLACK);
  epaper.fillCircle(120, 120, 110, TFT_WHITE);

  // Draw 12 lines
  for (int i = 0; i < 360; i += 30)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 114 + 120;
    yy0 = sy * 114 + 120;
    x1 = sx * 100 + 120;
    yy1 = sy * 100 + 120;

    epaper.drawLine(x0, yy0, x1, yy1, TFT_BLACK);
  }

  // Draw 60 dots
  for (int i = 0; i < 360; i += 6)
  {
    sx = cos((i - 90) * 0.0174532925);
    sy = sin((i - 90) * 0.0174532925);
    x0 = sx * 102 + 120;
    yy0 = sy * 102 + 120;
    // Draw minute markers
    epaper.drawPixel(x0, yy0, TFT_BLACK);

    // Draw main quadrant dots
    if (i == 0 || i == 180)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
    if (i == 90 || i == 270)
      epaper.fillCircle(x0, yy0, 2, TFT_BLACK);
  }

  epaper.fillCircle(120, 121, 3, TFT_BLACK);

  // Draw text at position 120,260 using fonts 4
  // Only font numbers 2,4,6,7 are valid. Font 6 only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : . - a p m
  // Font 7 is a 7 segment font and only contains characters [space] 0 1 2 3 4 5 6 7 8 9 : .
  epaper.drawCentreString("Time flies", 120, 260, 4);

  epaper.update();

  targetTime = millis() + 1000;
#endif
}

void loop()
{
#ifdef EPAPER_ENABLE
  if (targetTime < millis())
  {
    targetTime += 1000;
    ss++; // Advance second
    if (ss == 60)
    {
      ss = 0;
      mm++; // Advance minute
      if (mm > 59)
      {
        mm = 0;
        hh++; // Advance hour
        if (hh > 23)
        {
          hh = 0;
        }
      }
    }

    // Pre-compute hand degrees, x & y coords for a fast screen update
    sdeg = ss * 6;                     // 0-59 -> 0-354
    mdeg = mm * 6 + sdeg * 0.01666667; // 0-59 -> 0-360 - includes seconds
    hdeg = hh * 30 + mdeg * 0.0833333; // 0-11 -> 0-360 - includes minutes and seconds
    hx = cos((hdeg - 90) * 0.0174532925);
    hy = sin((hdeg - 90) * 0.0174532925);
    mx = cos((mdeg - 90) * 0.0174532925);
    my = sin((mdeg - 90) * 0.0174532925);
    sx = cos((sdeg - 90) * 0.0174532925);
    sy = sin((sdeg - 90) * 0.0174532925);

    if (ss == 0 || initial)
    {
      initial = 0;
      // Erase hour and minute hand positions every minute
      epaper.drawLine(ohx, ohy, 120, 121, TFT_WHITE);
      ohx = hx * 62 + 121;
      ohy = hy * 62 + 121;
      epaper.drawLine(omx, omy, 120, 121, TFT_WHITE);
      omx = mx * 84 + 120;
      omy = my * 84 + 121;
    }

    // Redraw new hand positions, hour and minute hands not erased here to avoid flicker
    epaper.drawLine(osx, osy, 120, 121, TFT_WHITE);
    osx = sx * 90 + 121;
    osy = sy * 90 + 121;
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);
    epaper.drawLine(ohx, ohy, 120, 121, TFT_BLACK);
    epaper.drawLine(omx, omy, 120, 121, TFT_BLACK);
    epaper.drawLine(osx, osy, 120, 121, TFT_BLACK);

    epaper.fillCircle(120, 121, 3, TFT_BLACK);
    epaper.update();
  }
#endif
}

#ifdef EPAPER_ENABLE
static uint8_t conv2d(const char *p)
{
  uint8_t v = 0;
  if ('0' <= *p && *p <= '9')
    v = *p - '0';
  return 10 * v + *++p - '0';
}
#endif
```

**Como o exemplo do relógio funciona:**

Este exemplo elegante cria um relógio analógico clássico no display de ePaper. Vamos detalhar como ele funciona:

1. **Inicialização e configuração:**
   - O código usa compilação condicional com `#ifdef EPAPER_ENABLE` para garantir que ele só seja executado em hardware com suporte a display de e-paper.
   - Declaramos variáveis para rastrear as posições dos ponteiros do relógio e suas posições anteriores.
   - A hora inicial é definida com base na hora de compilação do sketch usando a macro `__TIME__`.

2. **Função setup:**
   - Inicializamos o display de e-paper com `epaper.begin()`.
   - O display é preenchido com branco como plano de fundo usando `epaper.fillScreen(TFT_WHITE)`.
   - Desenhamos o mostrador do relógio como um círculo preto com interior branco.
   - Os marcadores de hora são desenhados como 12 linhas ao redor da circunferência.
   - Os marcadores de minuto são desenhados como 60 pontos com ênfase especial nas posições de quarto de hora.
   - Um pequeno círculo preto é desenhado no centro do mostrador do relógio.
   - O texto "Time flies" é adicionado na parte inferior do display.
   - Por fim, `epaper.update()` é chamado para atualizar o display físico.

3. **Função loop:**
   - A cada segundo (quando `millis()` excede `targetTime`), atualizamos os ponteiros do relógio.
   - Incrementamos os segundos, minutos e horas conforme necessário.
   - Calculamos os ângulos de cada ponteiro com base na hora atual.
   - As posições dos ponteiros são calculadas usando funções trigonométricas:
     - Ponteiro das horas: 30 graus por hora (mais ajuste para os minutos)
     - Ponteiro dos minutos: 6 graus por minuto (mais ajuste para os segundos)
     - Ponteiro dos segundos: 6 graus por segundo
   - Para reduzir atualizações desnecessárias e estender a vida útil do display, apagamos e redesenhamos os ponteiros de hora e minuto apenas uma vez por minuto (quando segundos = 0).
   - O ponteiro de segundos é atualizado a cada segundo apagando sua posição anterior e desenhando-o na nova posição.
   - Depois de desenhar todos os ponteiros, atualizamos o ponto central e chamamos `epaper.update()` para atualizar o display físico.

4. **Função auxiliar:**
   - A função `conv2d` converte uma representação em string de um número em um valor inteiro, usada para analisar os valores de hora, minuto e segundo da hora de compilação.

**Notas importantes sobre este exemplo:**

1. **Atualizações do display:** Diferente de displays LCD ou OLED, displays de ePaper não são projetados para atualizações frequentes. Este exemplo atualiza o display a cada segundo, o que é aceitável para fins de demonstração, mas em uma aplicação real você pode querer atualizar com menos frequência para estender a vida útil do display.

2. **Atualizações parciais:** Este exemplo demonstra atualizações parciais apagando e redesenhando apenas as partes necessárias do display, o que é mais eficiente do que atualizar a tela inteira.

3. **Compilação condicional:** As diretivas `#ifdef EPAPER_ENABLE` garantem que o código só seja compilado e executado se o display de e-paper estiver devidamente configurado no sistema.

4. **Funções de desenho:** O exemplo apresenta várias funções de desenho:
   - `fillCircle()` para criar o mostrador do relógio
   - `drawLine()` para desenhar os ponteiros do relógio e os marcadores de hora
   - `drawPixel()` e `fillCircle()` para marcadores de minuto
   - `drawCentreString()` para texto centralizado

Este exemplo de relógio analógico oferece um ótimo ponto de partida para criar suas próprias aplicações gráficas no display de ePaper do Kit DIY TRMNL 7.5" (OG).

### Funções de desenho e texto

A biblioteca Seeed_GFX fornece muitas funções para desenhar no display:

- `display.drawPixel(x, y, color)`: Desenha um único pixel
- `display.drawLine(x0, y0, x1, y1, color)`: Desenha uma linha
- `display.drawRect(x, y, w, h, color)`: Desenha o contorno de um retângulo
- `display.fillRect(x, y, w, h, color)`: Desenha um retângulo preenchido
- `display.drawCircle(x, y, r, color)`: Desenha o contorno de um círculo
- `display.fillCircle(x, y, r, color)`: Desenha um círculo preenchido
- `display.drawTriangle(x0, y0, x1, y1, x2, y2, color)`: Desenha o contorno de um triângulo
- `display.fillTriangle(x0, y0, x1, y1, x2, y2, color)`: Desenha um triângulo preenchido
- `display.setCursor(x, y)`: Define a posição do cursor de texto
- `display.setTextColor(color)`: Define a cor do texto
- `display.setTextSize(size)`: Define o tamanho do texto (1-6)
- `display.print("text")`: Imprime texto na posição do cursor
- `display.println("text")`: Imprime texto com uma nova linha

As cores disponíveis para este display monocromático são:

- `GxEPD_BLACK`: Pixels pretos
- `GxEPD_WHITE`: Pixels brancos

Lembre-se de chamar `display.update()` após as operações de desenho para atualizar o display físico.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
