---
description: Livro de receitas do PlatformIO para a família XIAO ePaper Driver Board (EE0x) – visão geral de hardware, inicialização de projeto, configuração de biblioteca e programação ponta a ponta no ESP32-S3. EE04 é usado como exemplo em execução; EE02 / EE03 / EE05 compartilham o mesmo fluxo de trabalho.
title: Livro de Receitas do PlatformIO
keywords:
  - Display ePaper
  - PlatformIO
  - EE02
  - EE03
  - EE04
  - EE05
  - XIAO ESP32-S3
image: https://files.seeedstudio.com/wiki/Epaper/EE04/pio_show_1.webp
sidebar_position: 2
slug: /ee04_with_platformio
aliases:
  - /ee0x_with_platformio
last_update:
  date: 04/28/2026
  author: Zeller
createdAt: '2025-10-09'
updatedAt: '2026-05-20'
url: https://wiki.seeedstudio.com/pt-br/ee04_with_platformio/
---

# Livro de Receitas do PlatformIO: XIAO ePaper Driver Boards (EE0x)

:::tip Este livro de receitas cobre toda a família EE0x
Aplicável a **EE02 / EE03 / EE04 / EE05**. Como todas as quatro placas compartilham a mesma base XIAO ESP32-S3 e o mesmo pipeline de driver `Seeed_GFX`, a configuração do projeto, a lista de bibliotecas e os padrões de código são idênticos; a única coisa que muda entre elas é o valor `BOARD_SCREEN_COMBO` que você escolhe na [Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/) para o `driver.h`.

**Exemplo prático: EE04 + tela ePaper monocromática 7,5" 800×480.** Substitua o seu próprio par placa + tela em `driver.h` e o restante do fluxo de trabalho (GPIOs dos botões, ADC da bateria, interface do painel, troca de páginas acionada por botões) permanece o mesmo.
:::

:::note Procurando pelo Arduino em vez disso?
Este livro de receitas é **específico para PlatformIO**. Se você preferir usar a **Arduino IDE** (o caminho mais comum para nossa linha de ePaper), consulte **[Work with Arduino](/pt-br/epaper_work_with_arduino)** para o guia em nível de plataforma, o [reTerminal E Series — ePaper Display cookbook](/pt-br/reterminal_e10xx_with_arduino) para exemplos de renderização de display e o [reTerminal E Series — Onboard Peripherals cookbook](/pt-br/reterminal_e10xx_with_arduino_peripherals) para exemplos em nível de hardware (LED, buzzer, botões, SHT4x, bateria, microSD) que também se aplicam às placas EE0x.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:500, height:'auto'}}/></div>

## Introdução ao PlatformIO

PlatformIO é um ecossistema de desenvolvimento poderoso e altamente extensível, projetado para sistemas embarcados. Ele integra de forma transparente o suporte a uma vasta gama de placas de desenvolvimento e microcontroladores, oferecendo flexibilidade incomparável. O que diferencia o PlatformIO é sua notável escalabilidade: mesmo que sua placa específica não seja suportada nativamente, sua arquitetura permite definições de placas personalizadas de forma simples.

De forma crucial, o PlatformIO faz a ponte para desenvolvedores familiarizados com Arduino, permitindo a compilação e implantação de código no estilo Arduino simplesmente incluindo as bibliotecas relevantes.

### Preparação de hardware

Você precisa preparar uma XIAO ePaper Display Board EE04 juntamente com telas do tamanho suportado. A tela de tinta de 24 pinos 800×480 de 7,5 polegadas usada neste tutorial é um exemplo.
<div class="table-center">
<table align="center">
    <tr>
        <th>XIAO ePaper Display Board(ESP32-S3) - EE04</th>
        <th>7.5" Monochrome eInk</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_2.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ePaper-Display-Board-EE04-p-6560.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/7.5-inch-elink_1.jpg" style={{width:300, height:'auto'}}/></div>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://www.seeedstudio.com/7-5-Monochrome-ePaper-Display-with-800x480-Pixels-p-5788.html" target="_blank">
                <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
        </a>
    </div></td>
    </tr>
 </table>
</div>

### Baixar o VS Code

Baixe o [Vscode](https://code.visualstudio.com/download) de acordo com o sistema que você está usando

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VSCode_1.png" style={{width:800, height:'auto'}}/></div>

### Instalar o PlatformIO

Abra o VSCode, clique em Extensões, depois pesquise por PlatformIO e selecione para instalar. Após a conclusão da instalação, reinicie o VSCode.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_VScode_2.png" style={{width:800, height:'auto'}}/></div>

### Novo projeto

- Abra a interface PIO Home e selecione `New Project`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_1.png" style={{width:800, height:'auto'}}/></div>

- Name: Dê um nome ao seu projeto
- Board: Selecione Seeed Studio XIAO ESP32S3
- Framework: Selecione Ardunio
- Location: O caminho dos arquivos do projeto pode ser definido como um caminho personalizado ou você pode selecionar o caminho padrão.
- Clique em "Finish" e aguarde a conclusão da criação. Em seguida, abra o arquivo do projeto no workspace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_new_project_2.png" style={{width:800, height:'auto'}}/></div>

### Adicionar a biblioteca Seeed GFX

:::tip
Esta biblioteca tem a mesma função que a biblioteca TFT e não é compatível com ela. Se você instalou a biblioteca TFT ou outras bibliotecas de display semelhantes, desinstale-as primeiro.
:::

Usaremos a biblioteca Seeed_GFX, que fornece suporte abrangente para vários dispositivos de display da Seeed Studio.

**Passo 1.** Baixe a biblioteca Seeed_GFX do GitHub:

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_GFX" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Library</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

**Passo 2.** Mova os arquivos extraídos para o diretório `lib` dos arquivos do projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_library_1.png" style={{width:800, height:'auto'}}/></div>

**Passo 3.** Adicionar o arquivo `driver.h`

[Seeed GFX Configuration Tool](https://seeed-studio.github.io/Seeed_GFX/)

- Na página da ferramenta, selecione a especificação de tela que você está usando. Aqui, a opção selecionada é uma tela e-paper monocromática de 7,5 polegadas.
- Selecione a XIAO ePaper Display Board EE04 para a placa de driver e, em seguida, o código de driver correspondente será gerado.

```cpp
#define BOARD_SCREEN_COMBO 502 // 7.5 inch monochrome ePaper Screen （UC8179）
#define USE_XIAO_EPAPER_DISPLAY_BOARD_EE04
```

:::tip
Se você fizer a escolha errada, a tela não exibirá nada.
Portanto, certifique-se do tipo dos seus dispositivos ou componentes.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_1.png" style={{width:800, height:'auto'}}/></div>

- Crie uma nova pasta `driver` no diretório `lib` do arquivo de projeto do PlatfromIO e, em seguida, adicione o arquivo `driver.h`. Copie o código do arquivo de cabeçalho gerado e pressione Ctrl + S para salvar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_add_driver_2.png" style={{width:800, height:'auto'}}/></div>

### Upload

Copie o código para `main.cpp`, clique em `Build` e, após a conclusão, faça o upload.

```cpp
#include "TFT_eSPI.h"

#ifdef EPAPER_ENABLE // Only compile this code if the EPAPER_ENABLE is defined in User_Setup.h
EPaper epaper;
#endif

void setup()
{
#ifdef EPAPER_ENABLE
    epaper.begin();
    epaper.fillScreen(TFT_WHITE);

    epaper.fillCircle(25, 25, 15, TFT_BLACK);
    epaper.fillRect(epaper.width() - 40,  10, 30, 30, TFT_BLACK);

    for (int i = 0; i < epaper.height() / 80; i++)
    {
        epaper.setTextSize(i + 1);
        epaper.drawLine(10, 70 + 60 * i, epaper.width() - 10, 70 + 60 * i, TFT_BLACK);
        epaper.drawString("Hello EE04", 10, 80 + 60 * i);
    }

    epaper.update(); // update the display

#endif
}

void loop()
{
    // put your main code here, to run repeatedly:
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_upload_2.png" style={{width:800, height:'auto'}}/></div>

- Demonstração do efeito

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/EEZStudio/pio_show_1.jpg" style={{width:800, height:'auto'}}/></div>

### Botão de usuário

O EE04 possui três botões programáveis pelo usuário que podem ser usados para vários propósitos de controle. Esta seção demonstra como ler os estados dos botões e responder a pressionamentos de botões usando Arduino.

No EE04, os três botões estão conectados ao ESP32-S3:

- KEY1 (GPIO2_D1/A1)
- KEY2 (GPIO3_D2/A2)
- KEY3 (GPIO5_D4/A4)

Todos os botões são ativos em nível baixo, o que significa que leem LOW quando pressionados e HIGH quando soltos.

Exemplo básico de leitura de botão

Este exemplo demonstra como detectar pressionamentos de botões e imprimir mensagens no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/39.jpg" style={{width:700, height:'auto'}}/></div>

<br></br>

```cpp
#include <Arduino.h>
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

Explicação do código:

- **Análise das funções principais**

1. **`pinMode(pin, mode)`**  
   - Função: configura o modo do pino.  
   - O modo `INPUT_PULLUP` é usado aqui para habilitar o resistor de pull-up interno. Isso faz com que o pino tenha nível alto (HIGH) por padrão quando o botão não é pressionado, e nível baixo (LOW) quando o botão é pressionado (pois é conectado ao GND).

2. **`digitalRead(pin)`**  
   - Função: lê o estado de nível (HIGH ou LOW) do pino especificado.  
   - É usada no loop para obter em tempo real o estado atual do botão, o que ajuda a determinar se o botão foi acionado.

3. **`Serial.begin(baud)`** e **`Serial.println()`**  
   - A primeira inicializa a comunicação serial (com taxa de 115200 baud), enquanto a segunda envia informações de texto para a porta serial. Isso é usado para exibir o estado do botão no monitor.

4. **`delay(ms)`**  
   - Função: pausa o programa por um número especificado de milissegundos.  
   - Aqui é usada em dois cenários: primeiro, para aguardar a conexão da porta serial em `setup()`; segundo, para atrasar 50 ms após a mudança de estado do botão. Isso realiza o debounce de hardware ao “esperar o fim do ruído”, evitando disparos falsos.

- **Análise da lógica principal**

1. **Detecção por comparação de estado**  
   - Registre o “estado anterior” de cada botão (como `lastKey0State`) e leia o “estado atual” no loop.  
   - Se o “estado atual ≠ estado anterior”, isso indica que o botão foi acionado (pressionado ou solto).

2. **Julgamento da ação do botão**  
   - Quando o estado muda de HIGH para LOW: é determinado como “pressionado” (imprime "pressed").  
   - Quando o estado muda de LOW para HIGH: é determinado como “solto” (imprime "released").  
   - Após cada mudança de estado, atualize o “estado anterior” para o estado atual, que servirá como referência para a próxima comparação.

3. **Execução em loop**  
   - A função `loop()` roda em um laço infinito, executando repetidamente o processo de “ler o estado → comparar o estado → exibir o resultado” para obter detecção em tempo real.

- Demonstração do efeito:

O Serial Monitor pode exibir o status da porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_button_1.png" style={{width:800, height:'auto'}}/></div>

### Tensão da bateria

- A XIAO ePaper Display Board EE04 é alimentada por uma bateria de lítio de 3,7 V - 4,2 V. Além disso, há uma interface ADC para você medir a tensão e monitorar a tensão da bateria em tempo real.
- O pino de medição do ADC é `A0 (GPIO1)` e o pino de habilitação do ADC é `D5 (GPIO_6)`.

Conexão：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_0.png" style={{width:600, height:'auto'}}/></div><br/>

Programa para monitorar a tensão da bateria. É apenas para referência.

```cpp
#include <Arduino.h>

#define BATTERY_ADC A0  // Battery voltage ADC pin
#define ADC_EN 6        // ADC enable pin
#define VOLTAGE_DIVIDER_RATIO 2.0  // Voltage divider ratio (adjust based on your resistor values) ((R1+R2)/R2) 

// Function to read battery voltage
static float readBatteryVoltage() {
  int sum = 0;
  // Read multiple samples for better accuracy
  for (int i = 0; i < 10; i++) {
    sum += analogRead(BATTERY_ADC);
    delay(2);
  }
  int adcValue = sum / 10;

  // Calculate actual battery voltage
  // Formula: voltage = (ADC_value / 4095) * 3.3V * divider_ratio
  float voltage = (adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO;

  return voltage;
}

void setup() {
  Serial.begin(115200);
  delay(1000);

  analogReadResolution(12);  // Set ADC resolution to 12 bits
  pinMode(BATTERY_ADC, INPUT);

  pinMode(ADC_EN, OUTPUT);
  digitalWrite(ADC_EN, HIGH);  // Enable ADC
}

void loop() {
  float batteryVoltage = readBatteryVoltage();

  Serial.print("Battery Voltage: ");
  Serial.print(batteryVoltage, 2);
  Serial.println(" V");

  delay(500);  // Read every 0.5 seconds
}
```

Explicação do código:

- Funções principais:

  - **Aquisição da tensão da bateria**: lê a tensão da bateria dividida por resistores através do pino ADC (a tensão da bateria pode exceder a tensão de referência do ADC do Arduino, exigindo divisão antes).
  - **Otimização de precisão**: reduz a interferência de ruído do circuito por meio da média de múltiplas amostras.
  - **Conversão de tensão**: converte o sinal digital do ADC na tensão real da bateria (considerando a razão do divisor de tensão e a tensão de referência).
  - **Saída serial**: imprime periodicamente a tensão medida via porta serial para que dispositivos externos (por exemplo, computador) possam visualizar.

- Funções principais e seus papéis

  - `setup()` (Função de inicialização)

    - **Papel**: é executada uma vez na inicialização do programa para configurar o hardware e os parâmetros.
    - **Operações principais**:
      - `Serial.begin(115200)`: inicializa a comunicação serial (taxa de 115200 baud) para saída dos dados de tensão.
      - `analogReadResolution(12)`: define a resolução do ADC para 12 bits (faixa de leitura: 0~4095) para maior precisão.
      - `pinMode(BATTERY_ADC, INPUT)`: define o pino de detecção da bateria (A0) como entrada para sinais analógicos.
      - `pinMode(ADC_EN, OUTPUT)` & `digitalWrite(ADC_EN, HIGH)`: habilita o módulo ADC (para baixo consumo: ligar apenas ao medir).

  - `loop()` (Função de loop principal)

    - **Papel**: é executada repetidamente após a inicialização para detecção e saída periódica da tensão.
    - **Operações principais**:
      - Chamar `readBatteryVoltage()` para obter a tensão atual da bateria.
      - Usar `Serial.print()`/`Serial.println()` para imprimir a tensão formatada (2 casas decimais, por exemplo, "Battery Voltage: 3.82 V").
      - `delay(500)`: define um intervalo de 0,5 segundo entre as medições.

  - `readBatteryVoltage()` (Função principal de medição)

    - **Papel**: ler os sinais do ADC, otimizar os resultados e converter para a tensão real.
    - **Operações principais**:
      - **Amostragem média**: lê o ADC 10 vezes, soma e depois faz a média (reduz o ruído).
      - `analogRead(BATTERY_ADC)`: lê a tensão analógica do pino A0 (retorna 0~4095).
      - `delay(2)`: intervalo de 2 ms entre as amostras para maior estabilidade.
      - **Cálculo da tensão**: usa a fórmula `(adcValue / 4095.0) * 3.3 * VOLTAGE_DIVIDER_RATIO` para obter a tensão real da bateria.
      - Retorna a tensão calculada (tipo float) para uso em `loop()`.

- Demonstração do efeito:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_battery_1.png" style={{width:800, height:'auto'}}/></div>

## Design de UI

A EE04 permite que você realize vários designs criativos, como painéis e exibição de imagens. Ao combinar com botões, ela possibilita a alternância entre várias páginas. Aqui está um exemplo de painel.

:::tip
Nesta rotina, a operação de desenhar o painel é realizada com base na biblioteca LVGL.

Documentação oficial da LVGL: [LVGL docs](https://docs.lvgl.io/master/examples.html#get-started)
:::

### Software

- Adicione a biblioteca LVGL. Na ferramenta Library da interface PIO Home, pesquise por LVGL e selecione para adicionar a biblioteca ao projeto atual. Recomenda-se escolher uma versão LVGL 9.0 ou superior.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_1.png" style={{width:800, height:'auto'}}/></div>

- No diretório **lib**
  - Crie a pasta **dashboard** e então crie os arquivos `dashboard_ui.cpp` e `dashboard_ui.h`. Esses arquivos são usados principalmente para armazenar o código de desenho para LGVL.
  - Crie a pasta **e1001_display** e adicione os arquivos de driver da tela `e1001_display.c` e `e1001_display.h`
  - Crie a pasta **lvgl_conf** e adicione o arquivo de configuração `lv_conf.h` da LVGL.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_2.png" style={{width:800, height:'auto'}}/></div><br/>

Código de referência completo: [EE04_Dashboard_ui.zip](https://files.seeedstudio.com/wiki/Epaper/EE04/EE04_dashboard_ui.zip)

<details>

<summary>Código main.cpp</summary>

```cpp
/*
 * Seeed reTerminal E1001 Multi-UI Demo
 * - All hardware I/O and e-paper driver work happens here.
 * - All runtime parameters and debug logs live here.
 * - dashboard_ui.cpp is a pure LVGL UI layer (no driver calls, no runtime params).
 *
 * UI switching:
 *   KEY0 (GPIO2) → Vehicle Dashboard
 *   KEY1 (GPIO3) → Smart Home
 *   KEY2 (GPIO5) → Super Mario (default)
 */

#include <TFT_eSPI.h>
#include <lvgl.h>

#include "dashboard_ui.h"  // Pure UI layer
#include "e1001_display.h" // E1001 e-paper driver (init/refresh in this file only)

/* ============ Global driver object ============ */
static e1001_driver_t e1001_driver;

/* ============ Current UI ============ */
static UIType current_ui = UI_SUPER_MARIO;

/* ============ Smart Home runtime parameters (tuned here) ============ */
static String smh_location = "New York";
static String smh_weather = "Sunny";
static float smh_temperature = 22.5f;
static int smh_humidity = 45;
static float smh_batt_voltage = 12.4f;
static int smh_batt_capacity = 85;
static int smh_wifi_signal = 4; // 0..4

/* ============ Vehicle runtime parameters (tuned here) ============ */
static int veh_speed = 85;        // km/h
static int veh_rpm = 2800;        // RPM
static int veh_fuel = 75;         // %
static int veh_engine_temp = 82;  // °C
static char veh_gear = 'D';       // gear char
static long veh_odometer = 86531; // km
static bool veh_seatbelt = true;  // indicator example

/* ---------------------------------------------------------------
 * LVGL periodic tick (moved here from dashboard_ui.cpp)
 * --------------------------------------------------------------- */
void ui_update_loop()
{
    lv_timer_handler();
    delay(50);
}

/* ---------------------------------------------------------------
 * Rebuild the active screen for a given UI type (moved here)
 * --------------------------------------------------------------- */
void load_ui(UIType type)
{
    lv_obj_clean(lv_scr_act());
    current_ui = type;

    switch (type)
    {
    case UI_VEHICLE_DASHBOARD:
        create_vehicle_dashboard_ui();
        break;
    case UI_SMART_HOME:
        create_smarthome_ui();
        break;
    case UI_SUPER_MARIO:
    default:
        create_supermario_ui();
        break;
    }
}

/* ---------------------------------------------------------------
 * Helper to apply Smart Home params to the active UI (if loaded)
 * --------------------------------------------------------------- */
static void apply_smarthome_params()
{
    update_temperature(smh_temperature);
    update_humidity(smh_humidity);
    update_battery_voltage(smh_batt_voltage);
    update_battery_capacity(smh_batt_capacity);
    update_wifi_signal(smh_wifi_signal);
    update_weather_status(smh_weather.c_str());
    update_location(smh_location.c_str());

    // Example to-do placeholders (UI has checkboxes already)
    add_todo_item("Water plants");
    add_todo_item("Check security");
    add_todo_item("Update firmware");
    add_todo_item("Check smart plugs");
}

/* -------------------------------------------------------------
 * Helper to apply Vehicle params to the active UI (if loaded)
 * ------------------------------------------------------------- */
static void apply_vehicle_params()
{
    update_speed_gauge(veh_speed);
    update_rpm_gauge(veh_rpm);
    update_fuel_level(veh_fuel);
    update_engine_temp(veh_engine_temp);
    update_gear_position(veh_gear);
    update_odometer(veh_odometer);
    set_warning_indicator(0, veh_seatbelt);
}

/* -------------------------------------------------------------
 * Switch UI (rebuilds the UI and applies current parameters)
 * ------------------------------------------------------------- */
static void switch_ui(UIType next_ui)
{
    if (next_ui == current_ui)
        return;

    current_ui = next_ui;
    load_ui(current_ui);

    if (current_ui == UI_VEHICLE_DASHBOARD)
    {
        Serial.println("[UI] Loaded Vehicle Dashboard");
        apply_vehicle_params();
    }
    else if (current_ui == UI_SMART_HOME)
    {
        Serial.println("[UI] Loaded Smart Home");
        apply_smarthome_params();
    }
    else
    {
        Serial.println("[UI] Loaded Super Mario");
    }

    // Trigger an e-paper refresh immediately after rebuilding UI
    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Setup
 * ------------------------------------------------------------- */
void setup()
{
    Serial.begin(115200);
    Serial.println("LVGL Multi-UI + E1001 e-paper demo starting...");

    // Configure keys (active LOW due to INPUT_PULLUP)
    pinMode(BUTTON_KEY0, INPUT_PULLUP);
    pinMode(BUTTON_KEY1, INPUT_PULLUP);
    pinMode(BUTTON_KEY2, INPUT_PULLUP);

    // Initialize e-paper (includes LVGL/timer/display config handled by your driver)
    Serial.println("Initializing E1001 e-paper driver...");
    e1001_display_init(&e1001_driver);
    Serial.println("E1001 init done.");

    // Default UI: Super Mario
    current_ui = UI_SUPER_MARIO;
    load_ui(current_ui);
    Serial.println("Default UI created: Super Mario");

    e1001_display_refresh(&e1001_driver);
}

/* -------------------------------------------------------------
 * Loop: button-based UI switching + LVGL ticks + e-paper refresh
 * ------------------------------------------------------------- */
void loop()
{
    // Handle UI switching (debounced)
    if (digitalRead(BUTTON_KEY0) == LOW)
    { // Vehicle
        switch_ui(UI_VEHICLE_DASHBOARD);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY1) == LOW)
    { // Smart Home
        switch_ui(UI_SMART_HOME);
        delay(300);
    }
    else if (digitalRead(BUTTON_KEY2) == LOW)
    { // Super Mario
        switch_ui(UI_SUPER_MARIO);
        delay(300);
    }

    // Drive LVGL internal timers only (no driver I/O in UI layer)
    ui_update_loop();

    // Check if e-paper refresh is needed (driver logic stays here)
    if (e1001_display_should_refresh(&e1001_driver))
    {
        Serial.println("Refreshing e-paper display...");
        e1001_display_refresh(&e1001_driver);
        Serial.println("Display refresh complete.");
    }
}
```

</details>

### Demonstração do efeito

Pressionar os botões na placa EE04 pode alternar para a interface de UI correspondente:

- KEY1: Painel de veículo
- KEY2: Painel de casa inteligente
- KEY3: Super Mario
- Padrão: Super Mario

<div class="table-center">
<table align="center">
    <tr>
        <th>Super Mario</th>
        <th>Veículo</th>
        <th>Casa inteligente</th>
    </tr>
    <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_1.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_2.jpg" style={{width:300, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Epaper/EE04/pio_dashboard_ui_3.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
 </table>
</div>

### Recurso

- **Gabinete eInk monocromático de 7,5" (modelo 3D)**: [Download from Printables](https://www.printables.com/model/1361112-upgrated-triangular-prism-3d-enclosure-for-trmnl-7)


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
