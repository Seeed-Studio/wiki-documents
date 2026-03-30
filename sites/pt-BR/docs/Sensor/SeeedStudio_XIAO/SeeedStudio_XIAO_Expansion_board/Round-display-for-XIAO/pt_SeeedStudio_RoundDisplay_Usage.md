---
description: Este tutorial apresenta o uso da função de placa de expansão da tela circular.
title: Uso de Hardware
keywords:
  - Tela redonda
  - XIAO
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /seeedstudio_round_display_usage
last_update:
  date: 04/27/2023
  author: Citric
createdAt: '2023-04-27'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/seeedstudio_round_display_usage/
---

# Uso da extensão Seeed Studio Round Display

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/79.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
    </a>
</div>

<br />

Este tutorial explicará em detalhes como usar as funções estendidas na Round Display, incluindo o uso da função RTC, função de cartão SD e função de tela.

## Primeiros Passos

O conteúdo deste tutorial é compatível com todos os produtos da série XIAO. Portanto, você pode usar qualquer XIAO para concluir o conteúdo deste Wiki.

Se você estiver usando a Round Display pela primeira vez, talvez queira ler o conteúdo de preparação que escrevemos anteriormente para ela e configurar o ambiente da biblioteca de acordo com esse conteúdo para garantir que você possa usar a Round Display sem problemas.

- **[Prep for using Seeed Studio Round Display for XIAO](https://wiki.seeedstudio.com/pt-br/get_start_round_display#Primeiros-Passos)**

### Instalar um cartão microSD

A Round Display é compatível com o uso de cartões microSD com formato **FAT32** e tamanho não superior a **32GB**. Ao instalar um cartão microSD, o terminal dourado do cartão microSD deve ser inserido voltado para a parte interna da placa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/64.jpg" style={{width:500, height:'auto'}}/></div>

### Instalar a bateria do RTC

A Round Display é compatível com a função RTC e possui um chip PCF8563T interno. Se você precisar usar a função RTC, talvez precise de uma bateria tipo moeda para manter o RTC funcionando.

Recomendamos usar baterias tipo botão da série CR927 com o terminal positivo (plano) voltado para fora e o negativo (superfície ligeiramente saliente) voltado para dentro ao instalar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/65.jpg" style={{width:500, height:'auto'}}/></div>

:::note
A imagem acima apenas mostra a direção de instalação da bateria, não a bateria totalmente instalada. A instalação correta da bateria deve ser com ela totalmente inserida no suporte de bateria.
:::

### Instalar a bateria de alimentação

A Round Display é compatível com bateria de lítio externa de 3,7 V. E, com um chip de gerenciamento de energia integrado, a bateria pode ser carregada pela porta USB do XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/77.jpg" style={{width:500, height:'auto'}}/></div>

A Round Display também possui um indicador de carregamento. Ele possui três estados:

1. O indicador fica sempre aceso com baixo brilho quando a bateria de lítio não está conectada.
2. Conecte a bateria de lítio e a luz vermelha fica sempre acesa com alto brilho ao carregar a bateria de lítio.
3. A bateria de lítio está conectada e a luz se apaga quando a bateria está totalmente carregada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/78.jpg" style={{width:500, height:'auto'}}/></div>

### Interruptor da Round Display

Há também um interruptor na Round Display. O interruptor é usado para controlar o ligar/desligar da tela e a alimentação do XIAO. Quando você alterna o interruptor para OFF, a bateria não alimentará o XIAO e a tela será desligada. Quando você alterna o interruptor para ON, a tela acenderá e a bateria alimentará o XIAO (desde que uma bateria de alimentação esteja instalada) para garantir que o programa seja executado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/66.jpg" style={{width:500, height:'auto'}}/></div>

:::note
Alimentar o XIAO na descrição aqui refere-se a alimentá-lo por meio da Round Display. Se você estiver alimentando o XIAO diretamente, então o interruptor na Round Display não poderá desligar a alimentação do XIAO. Se você quiser controlar todo o dispositivo através do interruptor na Round Display, precisa instalar a bateria de alimentação na Round Display.

Observe também que alguns XIAOs (como o XIAO ESP32C3) podem exigir um pressionamento do botão Reset no XIAO para começar a funcionar ao desligar e ligar novamente para executar um programa.
:::

### Projeto de circuito da Round Display

Nesta seção, vamos destacar o esquema de circuito do hardware da Round Display e informar aos usuários quais pinos de IO no XIAO são usados no hardware da Round Display para evitar conflitos no uso de IO.

#### Pinos de medição da tensão da bateria

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/70.png" style={{width:400, height:'auto'}}/></div>

Para o projeto da Round Display, usamos os pinos **A0/D0** no XIAO para conectar ao circuito da bateria on-board. A carga restante da bateria pode ser obtida lendo o valor analógico deste pino.

#### Pinos do circuito do cartão SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/67.png" style={{width:800, height:'auto'}}/></div>

A seção do cartão SD usa as quatro portas de IO no XIAO, que são usadas conforme mostrado na tabela abaixo.

<div class="table-center">
    <table align="center">
        <tr>
            <th align="center">XIAO GPIO</th>
            <th align="center">Slot para cartão microSD</th>
        </tr>
        <tr>
            <td align="center">D2</td>
            <td align="center">CS</td>
        </tr>
        <tr>
            <td align="center">D8</td>
            <td align="center">SCK</td>
        </tr>
        <tr>
            <td align="center">D9</td>
            <td align="center">MISO</td>
        </tr>
        <tr>
            <td align="center">D10</td>
            <td align="center">MOSI</td>
        </tr>
    </table>
</div>

#### Pinos do circuito do RTC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/68.png" style={{width:500, height:'auto'}}/></div>

A função RTC usa o protocolo IIC, portanto ocupa os pinos **D5 (SCL)** e **D4 (SDA)**.

#### Pinos do circuito da tela de toque

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/69.png" style={{width:400, height:'auto'}}/></div>

A seção da tela de toque usa as quatro portas de IO no XIAO, que são usadas conforme mostrado na tabela abaixo.

<div class="table-center">
  <table align="center">
    <tr>
        <th align="center">XIAO GPIO</th>
        <th align="center">Tela de toque</th>
    </tr>
    <tr>
        <td align="center">D4 (SDA)</td>
        <td align="center">Tela de Toque IIC</td>
    </tr>
    <tr>
        <td align="center">D5 (SCL)</td>
        <td align="center">Tela de Toque IIC</td>
    </tr>
    <tr>
        <td align="center">D3</td>
        <td align="center">LCD_DC</td>
    </tr>
    <tr>
        <td align="center">D1</td>
        <td align="center">LCD_CS</td>
    </tr>
    <tr>
        <td align="center">D7</td>
        <td align="center">TP_INT</td>
    </tr>
    <tr>
        <td align="center">D6</td>
        <td align="center">Luz de fundo da tela</td>
    </tr>
  </table>
</div>

## Visão geral da biblioteca Round Display

A grande maioria do desenvolvimento de software da Round Display é baseada no suporte de hardware próprio do XIAO. Os gráficos são baseados na biblioteca TFT, na biblioteca LVGL e na biblioteca Arduino GFX.

Para facilitar o uso das funções na Round Display pelos usuários, escrevemos uma biblioteca separada que chama principalmente as interfaces das bibliotecas acima para reduzir o limite de desenvolvimento independente pelos próprios usuários quando chegarem a uma fase posterior. Neste capítulo, vamos focar em quais são as funções dessas bibliotecas que preparei para a Round Display e como usá-las, respectivamente.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar as Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br></br>

### lv_xiao_round_screen.h

O arquivo `lv_xiao_round_screen.h` é um arquivo de cabeçalho na biblioteca Round Display, que controla as funções de exibição e toque da tela.

Uma verificação de definição de macro é feita no início do arquivo e tem como objetivo exigir que os desenvolvedores que usam a Round Display precisem selecionar a biblioteca gráfica que desejam desenvolver ao desenhar padrões de tela. Existem duas opções, **TFT** e **Arduino GFX**. Se você escolher a biblioteca **TFT**, então ela é a que pode dar suporte a **LVGL**.

```cpp
#if defined(USE_TFT_ESPI_LIBRARY) && defined(USE_ARDUINO_GFX_LIBRARY)
#error "More than one graphics library is defined."
#elif defined(USE_TFT_ESPI_LIBRARY)
#include <TFT_eSPI.h>
TFT_eSPI tft = TFT_eSPI(SCREEN_WIDTH, SCREEN_HEIGHT);
#elif defined(USE_ARDUINO_GFX_LIBRARY)
#include <Arduino_GFX_Library.h>
```

A razão para esse design é que certos XIAO têm suas próprias vantagens ao desenhar padrões em diferentes bibliotecas gráficas. Por exemplo, se você estiver usando o XIAO nRF52840, então poderá ser mais eficiente em memória e estável usando a biblioteca Arduino GFX. Para o XIAO ESP32S3, um XIAO com grande memória tem uma vantagem inerente no manuseio de bibliotecas gráficas como LVGL, e também é capaz de desenhar padrões e interfaces de usuário mais complexos.

Portanto, se você precisar desenhar um padrão usando o Round Display, não se esqueça de selecionar a biblioteca gráfica que deseja usar e defini-la no início do seu programa Arduino.

- Se você quiser usar a biblioteca TFT ou a biblioteca LVGL:

```cpp
#define USE_TFT_ESPI_LIBRARY
```

- Se você quiser usar a biblioteca Arduino GFX:

```cpp
#define USE_ARDUINO_GFX_LIBRARY
```

1. `void xiao_disp_init(void)`: Esta função é usada para inicializar a luz de fundo do display e girar o display para sua posição inicial, com a cor do plano de fundo do dispositivo sendo preto sólido. Esta função geralmente não é usada sozinha, e a função `lv_xiao_disp_init()` é usada em seu lugar quando a inicialização é necessária.

2. `void lv_xiao_disp_init(void)`: Inicializa a luz de fundo e inicializa o driver de display. Normalmente usada para inicialização do display.

3. `bool chsc6x_is_pressed(void)`: Esta função é usada para verificar se a tela foi tocada e retorna `Ture` se a tela for tocada.

4. `void lv_xiao_touch_init(void)`: Esta função é usada para inicializar a tela de toque e seu driver.

5. `void chsc6x_read( lv_indev_drv_t * indev_driver, lv_indev_data_t * data )`: Esta função é usada para obter os pontos de coordenadas da tela de toque.

### lv_hardware_test.h

O arquivo `lv_hardware_test.h` é o arquivo de cabeçalho no exemplo **HardwareTest** na biblioteca Round Display. Este arquivo de cabeçalho prepara a maioria das funções de uso de hardware para o Round Display.

Se você quiser usar as funções dentro deste arquivo de cabeçalho, pode copiar o arquivo diretamente para o mesmo diretório de arquivos do seu arquivo Arduino.

1. `int32_t battery_level_percent(void)`: Chamando esta função, você pode ler e calcular a porcentagem de carga da bateria para exibir o nível de bateria no aplicativo.

2. `void lv_hardware_test(void)`: Esta função é usada para testar todas as funções de hardware, incluindo exibição da tela, toque na tela, relógio RTC e nível de bateria. Você pode se referir a este método de escrita de função para concluir o desenvolvimento da função do Round Display que você deseja.

## Botão KE & GPIO

Na nova versão do Round Display, projetamos um interruptor KE para liberar seletivamente certos GPIOs para uso seletivo pelo usuário.

O interruptor KE é projetado no meio do slot para cartão microSD e da fileira de pinos que se conectam ao XIAO.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/90.jpg" style={{width:400, height:'auto'}}/></div>

O projeto de circuito para este interruptor é mostrado abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/91.png" style={{width:400, height:'auto'}}/></div>

Isso significa que quando o interruptor está fechado **(alternado para o lado ON)** então a função de leitura da tensão da bateria e a função de luz de fundo do display do Round Display se tornam disponíveis.

Quando o interruptor está desconectado **(alternado para o lado digital)**, então os pinos A0 e D6 no XIAO ficam em estado disponível.

## Medir a tensão da bateria

Devido à falta de pinos de E/S no XIAO, a maioria dos XIAO é incapaz de medir a tensão da bateria, embora o chip de gerenciamento de energia esteja configurado em alguns XIAO para permitir baterias externas.

Mas se você optar por usar o Round Dislay e alimentar o XIAO através da tela, então medir a tensão da bateria se tornará uma realidade.

A seguir está um programa de exemplo para medir a tensão da bateria. A função `battery_level_percent()` é selecionada a partir do arquivo `lv_hardware_test.h`.

```cpp
#define NUM_ADC_SAMPLE 20           // Sampling frequency
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge

int32_t battery_level_percent(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  int32_t level = (mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL-BATTERY_DEFICIT_VOL); // 1850 ~ 2100
  level = (level<0) ? 0 : ((level>100) ? 100 : level); 
  return level;
}

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  while(!Serial);

  analogReadResolution(12);
}

void loop() {
  // put your main code here, to run repeatedly:
  int32_t batteryVal = battery_level_percent();
  Serial.print("The percentage of power remaining is: ");
  Serial.print(batteryVal);
  Serial.print(" %");
  Serial.println();
  delay(1000);
}
```

:::tip
Este programa não é um programa universal, e a porcentagem de bateria medida pode não ser precisa. Isso porque cada pessoa usa baterias, chips e placas de desenvolvimento diferentes, então você pode precisar modificar o programa de acordo com a situação real ao executar este programa. Consulte a seção [program annotation](#program-annotation) desta seção para o método de modificação.
:::

Selecione a placa XIAO que você está usando, carregue o programa, abra o monitor serial e defina a taxa de baud para **115200**. Se você tiver a bateria conectada e ligada, deverá conseguir ver a tensão da bateria no monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/80.png" style={{width:700, height:'auto'}}/></div>

### Anotação do programa

Este código usa um ADC para medir a tensão da bateria e calcular a porcentagem do nível de bateria. A implementação varia dependendo da plataforma de hardware:

- Para as plataformas ESP32-S3 e ESP32-C3, a função `analogReadMilliVolts` é usada para ler os valores de tensão analógica, e então o valor médio de múltiplas amostras é obtido para obter a tensão média da bateria.
- Para as plataformas Seeeduino XIAO NRF52840, a função `analogReference` é primeiro usada para especificar a tensão de referência como 2,4V, e então a função analogRead é usada para ler os valores de tensão analógica, e a tensão média da bateria é calculada.
- Para a plataforma Seeeduino XIAO RP2040, a função `analogRead` é usada para ler os valores de tensão analógica, e a tensão média da bateria é calculada.

Em qualquer caso, a tensão média da bateria é calculada e então a porcentagem do nível de bateria é calculada usando a fórmula `(mvolts - BATTERY_DEFICIT_VOL) * 100 / (BATTERY_FULL_VOL - BATTERY_DEFICIT_VOL)`, onde mvolts é a tensão média da bateria, `BATTERY_DEFICIT_VOL` é a tensão mínima de operação da bateria, e `BATTERY_FULL_VOL` é a tensão máxima da bateria. Por fim, o código limita a porcentagem do nível de bateria para garantir que ela esteja entre 0 e 100.

Em resumo, os seguintes parâmetros determinam a precisão da medição de tensão ao usar este programa.

```c
#define RP2040_VREF 3300            // When you use the XIAO RP2040, you need to measure the actual voltage at the 3.3V pin and modify that value. (unit: mV)
#define BATTERY_DEFICIT_VOL 1850    // Battery voltage value at loss of charge
#define BATTERY_FULL_VOL 2450       // Battery voltage value at full charge
```

A primeira coisa que você precisa fazer é obter o valor analógico da bateria que você comprou quando ela estiver em estado de perda de carga/carga completa.

Você pode obter o valor analógico da bateria usando esta função. Você precisa obter o valor uma vez tanto no estado de bateria cheia quanto no estado de bateria em déficit.

```cpp
int32_t battery_test(void)
{
  int32_t mvolts = 0;
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    mvolts += analogReadMilliVolts(D0);
  }
  mvolts /= NUM_ADC_SAMPLE;
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
  analogReference(AR_INTERNAL2V4);  // 0.6V ref  1/4 Gain
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = 2400 * adc_raw / (1<<12);
#elif defined(ARDUINO_SEEED_XIAO_RP2040)
  int32_t adc_raw = 0;
  for(int8_t i=0; i<NUM_ADC_SAMPLE; i++){
    adc_raw += analogRead(D0);
  }
  adc_raw /= NUM_ADC_SAMPLE;
  mvolts = RP2040_VREF * adc_raw / (1<<12);
#endif
  return mvolts;
}
```

:::tip
A função `battery_test()` é na verdade a função `battery_level_percent()` com as duas últimas linhas de código para calcular a porcentagem removidas.
:::

Em seguida, basta modificar o valor do programa correspondente ao valor que você mediu.

Se você estiver usando o **XIAO RP2040**, então uma etapa adicional que você precisará fazer é usar um voltímetro para medir a tensão real no pino de 3,3V do XIAO RP2040. O valor de tensão medido é convertido em unidades de **mV** e o programa correspondente é modificado.

Por exemplo, aqui estão as medições reais que fiz usando meu XIAO RP2040 e bateria.

```c
#define RP2040_VREF 3080
#define BATTERY_DEFICIT_VOL 1541
#define BATTERY_FULL_VOL 1791
```

## Função RTC

Na parte da função RTC, a dividimos principalmente nas quatro seções a seguir para apresentar sua aplicação.

1. Primeiro, para o XIAO sem função de rede, você pode corrigir o RTC definindo manualmente a hora inicial.
2. Em seguida, alimente o RTC com a ajuda de uma bateria tipo moeda para obter continuamente a hora exata.
3. Para o XIAO com função de rede, você pode usar a função de rede para corrigir a hora.
4. Desenhe um mostrador de relógio simples combinando a função de RTC.

### Calibração manual off-line do RTC

A seguir está um programa de exemplo para calibrar manualmente a hora do RTC. As configurações são colocadas na função `Setup()` para garantir que o programa de configuração seja executado apenas uma vez. Este procedimento é a maneira mais eficiente de definir a hora inicial do RTC para o XIAO sem capacidade de rede.

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  while(!Serial);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Set RTC Date
  I2C_BM8563_DateTypeDef dateStruct;
  dateStruct.weekDay = 3;
  dateStruct.month = 4;
  dateStruct.date = 26;
  dateStruct.year = 2023;
  rtc.setDate(&dateStruct);

  // Set RTC Time
  I2C_BM8563_TimeTypeDef timeStruct;
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);

  Serial.println("RTC time calibration complete!");
}

void loop() {

}
```

Depois de fazer o upload do programa e ligar o monitor serial, o horário do RTC começará a ser calibrado. Quando **RTC time calibration complete!** aparecer, a calibração estará concluída.

### Obter hora do RTC

O programa a seguir obtém a hora do RTC a cada segundo e a imprime no monitor serial.

:::tip
O procedimento para obter a hora do RTC pode ser usado após o procedimento de calibração manual acima. O procedimento de calibração de horário precisa ser executado apenas uma vez e o relógio RTC poderá funcionar continuamente alimentado pela bateria tipo moeda, depois disso você só precisa usar o procedimento de obtenção de horário para obter a hora exata.

Não recomendamos usar o programa para calibrar a hora e obter a hora juntos, pois assim, quando o XIAO for energizado, ambos serão redefinidos de acordo com o horário que você configurou e, então, você nunca obterá a hora correta.
:::

```cpp
#include "I2C_BM8563.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
              dateStruct.year,
              dateStruct.month,
              dateStruct.date,
              timeStruct.hours,
              timeStruct.minutes,
              timeStruct.seconds
              );
#else
  Serial.print(dateStruct.year);
  Serial.print(", ");
  Serial.print(dateStruct.month);
  Serial.print(", ");
  Serial.print(dateStruct.date);
  Serial.print(", ");
  Serial.print(timeStruct.hours);
  Serial.print(", ");
  Serial.print(timeStruct.minutes);
  Serial.print(", ");
  Serial.print(timeStruct.seconds);
  Serial.println();
#endif

  // Wait
  delay(1000);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/71.png" style={{width:700, height:'auto'}}/></div>

### Calibração do horário do RTC via rede

Para o XIAO, que tem capacidades de rede, as coisas parecem ficar muito mais fáceis. Com uma rede, você nem precisa usar uma bateria tipo moeda para manter o RTC funcionando pronto para uso, você só precisa sincronizar o horário via rede toda vez que ligá-lo.

A seguir está um programa de exemplo para sincronização de horário via rede e saída da leitura de horário do RTC no monitor serial.

:::caution
Este programa é aplicável apenas à série XIAO ESP32. Porque somente essa série possui função de rede.
:::

```cpp
#include "I2C_BM8563.h"
#include <WiFi.h>

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

const char* ntpServer = "time.cloudflare.com";
const char *ssid     = "YOUR_SSID";
const char *password = "YOUR_PASSWORD";

void setup() {
  // Init Serial
  Serial.begin(115200);
  delay(50);

  // Connect to an access point
  WiFi.begin(ssid, password);
  Serial.print("Connecting to Wi-Fi ");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println(" CONNECTED");

  // Set ntp time to local
  configTime(9 * 3600, 0, ntpServer);

  // Init I2C
  Wire.begin();

  // Init RTC
  rtc.begin();

  // Get local time
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    // Set RTC time
    I2C_BM8563_TimeTypeDef timeStruct;
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);

    // Set RTC Date
    I2C_BM8563_DateTypeDef dateStruct;
    dateStruct.weekDay = timeInfo.tm_wday;
    dateStruct.month   = timeInfo.tm_mon + 1;
    dateStruct.date    = timeInfo.tm_mday;
    dateStruct.year    = timeInfo.tm_year + 1900;
    rtc.setDate(&dateStruct);
  }
}

void loop() {
  I2C_BM8563_DateTypeDef dateStruct;
  I2C_BM8563_TimeTypeDef timeStruct;

  // Get RTC
  rtc.getDate(&dateStruct);
  rtc.getTime(&timeStruct);

  // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%04d/%02d/%02d %02d:%02d:%02d\n",
                dateStruct.year,
                dateStruct.month,
                dateStruct.date,
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(dateStruct.year);
     Serial.print(", ");
     Serial.print(dateStruct.month);
     Serial.print(", ");
     Serial.print(dateStruct.date);
     Serial.print(", ");
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif

  // Wait
  delay(1000);
}
```

Ao usar este programa, preencha o nome e a senha da rede de acordo com sua situação real. Depois de fazer o upload do programa, abra o monitor serial e defina a taxa de transmissão para 115200, então você poderá ver a hora exata.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/72.png" style={{width:700, height:'auto'}}/></div>

### Mostrador simples baseado na hora do RTC

O programa a seguir é um programa de mostrador baseado em desenho com relógio RTC.

:::caution
O programa a seguir é compatível apenas com XIAO, exceto o XIAO nRF52840. O XIAO nRF52840 atualmente tem problemas de compatibilidade com TFT. Mas você pode considerar usar a biblioteca Arduino GFX ou LVGL para desenhar os mostradores.
:::

```cpp
#include <Arduino.h>
#include <TFT_eSPI.h>
#include <SPI.h>
#include "I2C_BM8563.h"
#include <Wire.h>

#define USE_TFT_ESPI_LIBRARY

#include "lv_xiao_round_screen.h"

I2C_BM8563 rtc(I2C_BM8563_DEFAULT_ADDRESS, Wire);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
#include "esp_wifi.h"
#include "WiFi.h"

  const char *ntpServer = "time.cloudflare.com";
  const char *ssid     = "YOUR_SSID";
  const char *password = "YOUR_PASSWORD";
#elif defined(ARDUINO_SEEED_XIAO_NRF52840_SENSE) || defined(ARDUINO_SEEED_XIAO_NRF52840)
#error "This procedure is not applicable to XIAO nRF52840 series, please replace other XIAO and try again."
#endif


//TFT_eSPI tft = TFT_eSPI();  // Invoke library, pins defined in User_Setup.h
TFT_eSprite face = TFT_eSprite(&tft);

#define CLOCK_X_POS 0
#define CLOCK_Y_POS 0

#define CLOCK_FG   TFT_SKYBLUE
#define CLOCK_BG   TFT_NAVY
#define SECCOND_FG TFT_RED
#define LABEL_FG   TFT_GOLD

#define CLOCK_R       240.0f / 2.0f // Clock face radius (float type)
#define H_HAND_LENGTH CLOCK_R/2.0f
#define M_HAND_LENGTH CLOCK_R/1.4f
#define S_HAND_LENGTH CLOCK_R/1.3f

// Calculate 1 second increment angles. Hours and minute hand angles
// change every second so we see smooth sub-pixel movement
#define SECOND_ANGLE 360.0 / 60.0
#define MINUTE_ANGLE SECOND_ANGLE / 60.0
#define HOUR_ANGLE   MINUTE_ANGLE / 12.0

// Sprite width and height
#define FACE_W CLOCK_R * 2 + 1
#define FACE_H CLOCK_R * 2 + 1

// Time h:m:s
uint8_t h = 0, m = 0, s = 0;

float time_secs = h * 3600 + m * 60 + s;

// Time for next tick
uint32_t targetTime = 0;

// =========================================================================
// Setup
// =========================================================================
void setup() {
  Serial.begin(115200);
  Serial.println("Booting...");

  // Initialise the screen
  tft.init();

  // Ideally set orientation for good viewing angle range because
  // the anti-aliasing effectiveness varies with screen viewing angle
  // Usually this is when screen ribbon connector is at the bottom
  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);

  // Create the clock face sprite
  //face.setColorDepth(8); // 8 bit will work, but reduces effectiveness of anti-aliasing
  face.createSprite(FACE_W, FACE_H);

  // Draw the whole clock - NTP time not available yet
  renderFace(time_secs);

#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  WiFi.begin(ssid, password);
  while ( WiFi.status() != WL_CONNECTED ) 
  {
    delay ( 500 );
    Serial.print ( "." );
  }
  configTime(8 * 3600, 0, ntpServer);
#endif

  Wire.begin();
  rtc.begin();

//  struct tm timeInfo;
  I2C_BM8563_TimeTypeDef timeStruct;
  I2C_BM8563_DateTypeDef dateStruct;

// In case of XIAO ESP32 series, use network timing.
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
  struct tm timeInfo;
  if (getLocalTime(&timeInfo)) {
    timeStruct.hours   = timeInfo.tm_hour;
    timeStruct.minutes = timeInfo.tm_min;
    timeStruct.seconds = timeInfo.tm_sec;
    rtc.setTime(&timeStruct);
  }
#else
  // Set RTC time, Other XIAOs do not have network functions and require manual time alignment.
  // Please note that the setting time should be set only once.
  timeStruct.hours   = 9;
  timeStruct.minutes = 43;
  timeStruct.seconds = 10;
  rtc.setTime(&timeStruct);
#endif

  targetTime = millis() + 100;
  rtc.getTime(&timeStruct);
  time_secs = timeStruct.hours * 3600 + timeStruct.minutes * 60 + timeStruct.seconds;
}

// =========================================================================
// Loop
// =========================================================================
void loop() {
  // Update time periodically
  if (targetTime < millis()) {

    // Update next tick time in 100 milliseconds for smooth movement
    targetTime = millis() + 100;

    // Increment time by 100 milliseconds
    time_secs += 0.100;

    // Midnight roll-over
    if (time_secs >= (60 * 60 * 24)) time_secs = 0;

    // All graphics are drawn in sprite to stop flicker
    renderFace(time_secs);

    I2C_BM8563_DateTypeDef dateStruct;
    I2C_BM8563_TimeTypeDef timeStruct;

    // Get RTC
    rtc.getTime(&timeStruct);

    // Print RTC
#if defined(CONFIG_IDF_TARGET_ESP32S3) || defined(CONFIG_IDF_TARGET_ESP32C3)
    Serial.printf("%02d:%02d:%02d\n",
                timeStruct.hours,
                timeStruct.minutes,
                timeStruct.seconds
               );
#else
     Serial.print(timeStruct.hours);
     Serial.print(", ");
     Serial.print(timeStruct.minutes);
     Serial.print(", ");
     Serial.print(timeStruct.seconds);
     Serial.println();
#endif
  }
}

// =========================================================================
// Draw the clock face in the sprite
// =========================================================================
static void renderFace(float t) {
  float h_angle = t * HOUR_ANGLE;
  float m_angle = t * MINUTE_ANGLE;
  float s_angle = t * SECOND_ANGLE;

  // The face is completely redrawn - this can be done quickly
  face.fillSprite(TFT_BLACK);

  // Draw the face circle
  face.fillSmoothCircle( CLOCK_R, CLOCK_R, CLOCK_R, CLOCK_BG );

  // Set text datum to middle centre and the colour
  face.setTextDatum(MC_DATUM);

  // The background colour will be read during the character rendering
  face.setTextColor(CLOCK_FG, CLOCK_BG);

  // Text offset adjustment
  constexpr uint32_t dialOffset = CLOCK_R - 10;

  float xp = 0.0, yp = 0.0; // Use float pixel position for smooth AA motion

  // Draw digits around clock perimeter
  for (uint32_t h = 1; h <= 12; h++) {
    getCoord(CLOCK_R, CLOCK_R, &xp, &yp, dialOffset, h * 360.0 / 12);
    face.drawNumber(h, xp, 2 + yp);
  }

  // Add text (could be digital time...)
  face.setTextColor(LABEL_FG, CLOCK_BG);
  face.drawString("TFT_eSPI", CLOCK_R, CLOCK_R * 0.75);

  // Draw minute hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, M_HAND_LENGTH, m_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw hour hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, H_HAND_LENGTH, h_angle);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 6.0f, CLOCK_FG);
  face.drawWideLine(CLOCK_R, CLOCK_R, xp, yp, 2.0f, CLOCK_BG);

  // Draw the central pivot circle
  face.fillSmoothCircle(CLOCK_R, CLOCK_R, 4, CLOCK_FG);

  // Draw cecond hand
  getCoord(CLOCK_R, CLOCK_R, &xp, &yp, S_HAND_LENGTH, s_angle);
  face.drawWedgeLine(CLOCK_R, CLOCK_R, xp, yp, 2.5, 1.0, SECCOND_FG);
  face.pushSprite(0, 0, TFT_TRANSPARENT);
}

// =========================================================================
// Get coordinates of end of a line, pivot at x,y, length r, angle a
// =========================================================================
// Coordinates are returned to caller via the xp and yp pointers
#define DEG2RAD 0.0174532925
void getCoord(int16_t x, int16_t y, float *xp, float *yp, int16_t r, float a)
{
  float sx1 = cos( (a - 90) * DEG2RAD);
  float sy1 = sin( (a - 90) * DEG2RAD);
  *xp =  sx1 * r + x;
  *yp =  sy1 * r + y;
}
```

No código acima você precisará fazer algumas pequenas modificações dependendo do tipo de placa de desenvolvimento que estiver usando. Se estiver usando um XIAO com recursos de rede, será necessário configurar o nome e a senha do WiFi. Caso contrário, você precisa ajustar manualmente o horário em tempo real.

Envie o programa e você verá o ponteiro do mostrador se mover automaticamente de acordo com o horário definido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/75.gif" style={{width:500, height:'auto'}}/></div>

## Função do cartão SD

O Round Display oferece suporte ao uso de cartões microSD para leitura e gravação de dados. Antes de usar o cartão microSD, formate-o para o formato **FAT32** para garantir que ele possa ser reconhecido e usado corretamente.

### Toda a série XIAO (além da série XIAO nRF52840)

Esta seção se aplica a todos os XIAO (além da série XIAO nRF52840), sendo um programa simples para leitura e gravação de arquivos.

```cpp
#include <SPI.h>
#include <SD.h>
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();

File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(115200);
  while(!Serial);

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  pinMode(D2, OUTPUT);
  if (!SD.begin(D2)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("/test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

Este programa criará um novo arquivo chamado **test.txt** em seu cartão microSD e escreverá o conteúdo **testing 1, 2, 3.**. Por fim, ele lê o arquivo e imprime o conteúdo do arquivo pelo monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/83.png" style={{width:700, height:'auto'}}/></div>

:::caution
Você perceberá que a inicialização da tela TFT é usada no programa para o cartão SD. Por favor, não pense que isso é inútil e pode ser removido, pois na verdade é necessário para usar o cartão SD, caso contrário você receberá uma mensagem de erro informando que a montagem do cartão microSD falhou.

Devido ao projeto de hardware, alguns dos pinos ficam em nível baixo por padrão, o que fará com que o programa de montagem do microSD entenda que não há resistor de pull-up, levando a falha na montagem. Portanto, ao usar a função de cartão SD com o Round Display, certifique-se de inicializar a tela antes de inicializar o cartão SD.
:::

### XIAO nRF52840

Se você estiver usando a série XIAO nRF52840, talvez precise baixar separadamente a [biblioteca SdFat](https://github.com/greiman/SdFat) para poder usar a função do cartão SD.

```cpp
#include <SPI.h>
#include "SdFat.h"
#include <TFT_eSPI.h>

TFT_eSPI tft = TFT_eSPI();
SdFat SD;

#define SD_CS_PIN D2
File myFile;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // Display initialization
  tft.init();

  Serial.print("Initializing SD card...");

  if (!SD.begin(SD_CS_PIN)) {
    Serial.println("initialization failed!");
    return;
  }
  Serial.println("initialization done.");

  // open the file. note that only one file can be open at a time,
  // so you have to close this one before opening another.
  myFile = SD.open("/test.txt", FILE_WRITE);

  // if the file opened okay, write to it:
  if (myFile) {
    Serial.print("Writing to test.txt...");
    myFile.println("testing 1, 2, 3.");
    // close the file:
    myFile.close();
    Serial.println("done.");
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }

  // re-open the file for reading:
  myFile = SD.open("test.txt");
  if (myFile) {
    Serial.println("test.txt:");

    // read from the file until there's nothing else in it:
    while (myFile.available()) {
      Serial.write(myFile.read());
    }
    // close the file:
    myFile.close();
  } else {
    // if the file didn't open, print an error:
    Serial.println("error opening test.txt");
  }
}

void loop() {
  // nothing happens after setup
}
```

### XIAO ESP32S3 & XIAO ESP32S3 Sense & XIAO ESP32C3

Como a série ESP32 possui um suporte de sistema de arquivos muito poderoso, escrevemos uma série de exemplos para o XIAO ESP32 sobre como usar o sistema de arquivos e salvar no cartão microSD, que você pode aprender a usar nos links abaixo.

- **[File System and XIAO ESP32S3 Sense](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_sense_filesystem)**

Os tutoriais deste Wiki se aplicam à série XIAO ESP32, mas como agora você deseja usar o slot de cartão SD do Round Display e o tutorial acima foca no uso do slot de cartão SD no XIAO ESP32S3 Sense, será necessário modificar a inicialização do cartão SD para a linha abaixo.

```c
// Display initialization
tft.init();

pinMode(D2, OUTPUT);
SD.begin(D2);
```

:::tip
Não se esqueça de que você também precisa inicializar primeiro a tela TFT para usar a função do cartão SD.
:::

## Função de tela

Na parte de uso da tela, os dois principais componentes são divididos em toque e exibição.

### Função de toque

A função de toque é um recurso especial do Round Display. Você pode usar a função de toque para realizar algumas operações de toque e manter exibido.

O programa a seguir pode ser usado para gerar o resultado de se a tela foi tocada ou não.

```cpp
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed()){
    Serial.println("The display is touched.");
  }
  else
    Serial.println("The display is not touched.");
  delay(50);
}
```

O programa a seguir é um exemplo simples de uma função de toque combinada com uma função de exibição. Envie o programa a seguir e toque na tela: um pequeno círculo será desenhado no local onde a tela for tocada.

:::caution
Se você estiver usando XIAO nRF52840, então o programa a seguir, baseado na exibição pela biblioteca TFT, pode não funcionar corretamente; você precisa modificar o programa para usar a biblioteca Arduino GFX.
:::

```cpp
#include <TFT_eSPI.h>
#include <SPI.h>
#define USE_TFT_ESPI_LIBRARY
#include "lv_xiao_round_screen.h"

lv_coord_t touchX, touchY;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);

  pinMode(TOUCH_INT, INPUT_PULLUP);
  Wire.begin();

  // Initialise the screen
  tft.init();

  tft.setRotation(0);
  tft.fillScreen(TFT_BLACK);
}

void loop() {
  // put your main code here, to run repeatedly:
  if(chsc6x_is_pressed())
  {
    Serial.println("The display is touched.");
    chsc6x_get_xy(&touchX, &touchY);
    tft.drawCircle(touchX, touchY, 15, TFT_WHITE);
  }

  delay(50);
}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/81.gif" style={{width:500, height:'auto'}}/></div>

### Funções de exibição

Sobre a parte de exibição, apresentamos principalmente o uso da biblioteca LVGL e da biblioteca TFT. Devido à questão de espaço, entraremos em detalhes sobre como desenhar mostradores complexos usando as bibliotecas gráficas compatíveis em um novo Wiki.

[Using LVGL and TFT on the Seeed Studio Round Display for XIAO](https://wiki.seeedstudio.com/pt-br/using_lvgl_and_tft_on_round_display)

Claro, se você quiser apenas implementar alguns exemplos simples, a biblioteca gráfica também possui um conjunto muito rico de exemplos para sua referência.

- [Exemplos da biblioteca TFT](https://github.com/Bodmer/TFT_eSPI/tree/master/examples)

- [Exemplos da biblioteca Arduino GFX](https://github.com/moononournation/Arduino_GFX/tree/master/examples)

- [Exemplos da biblioteca LVGL](https://github.com/lvgl/lvgl/tree/master/examples)

Se você já tiver essas bibliotecas instaladas, poderá encontrar facilmente os exemplos em **File->Example->nome da biblioteca** na IDE do Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/82.png" style={{width:800, height:'auto'}}/></div>

:::tip
Os exemplos aqui são apenas para referência e nem todo exemplo funcionará necessariamente. Talvez você precise modificar o programa para ser compatível com o mapeamento de pinos e a definição de hardware do Round Display.
:::

## Suporte Técnico & Discussão sobre o Produto

### P1: Por que recebo um erro quando uso XIAO nRF52840 (Sense)?

Ao usar o conteúdo deste tutorial, dois tipos diferentes de problemas podem ocorrer para o XIAO nRF52840.

1. Problemas de compatibilidade entre o nRF52840 e a biblioteca TFT.

  Se você estiver usando a biblioteca TFT, a compilação e o envio ocorrem sem qualquer erro, de forma bem tranquila. Mas, ao exibir, você percebe que não há imagem. Então você pode ter encontrado um problema de compatibilidade entre o nRF52840 e a biblioteca TFT. Isso significa que você só pode substituir o XIAO ou usar a biblioteca Arduino GFX para concluir a exibição da imagem.

2. Erro de compilação causado pela escolha incorreta da placa de desenvolvimento.

Se você estiver tendo problemas no processo de compilação, a mensagem de erro geralmente será sobre um erro de SPI, por exemplo `'SPI_X' was not declared in this scope`. Isso significa que você está escolhendo o tipo errado de placa de desenvolvimento. Para usar todo este tutorial, você precisa usar a versão **non-mbed** do XIAO nRF52840. -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>

### P2: Ao enviar um programa para o XIAO RP2040, ocorre o erro: unaligned opcodes detected in executable segment?

Modifique as opções de upload do XIAO RP2040 de acordo com as configurações na imagem abaixo. Todas as opções funcionam bem, exceto a padrão **Small (-Os) (standard)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/74.png" style={{width:600, height:'auto'}}/></div>

### P3: Por que recebo um erro de definição de pinos ao compilar um programa de tela circular para o XIAO SAMD21?

Quando você encontrar esse erro, atualize o pacote de placa de desenvolvimento **Seeed SAMD** para a versão mais recente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/76.png" style={{width:700, height:'auto'}}/></div>

### P4: Por que a tela não exibe nada depois que eu envio o programa para o XIAO ESP32C3?

Se não houver problema com o programa e nada for exibido após o upload, pode ser que seja necessário resetar. Basta pressionar o botão de reset no XIAO ESP32C3.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
