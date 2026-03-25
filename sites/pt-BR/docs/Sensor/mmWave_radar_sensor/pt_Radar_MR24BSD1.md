---
description: Monitoramento de Respiração Durante o Sono com mmWave de 24GHz
title: Monitoramento de Respiração Durante o Sono com mmWave de 24GHz
keywords:
  - mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR24BSD1
sku: 101990885
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Radar_MR24BSD1/
---

# Sensor mmWave de 24GHz - Monitoramento de Respiração Durante o Sono (MR24BSD1)

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong></a>
</div>

## Introdução

O módulo de radar MR24BSD1 de 24GHz aplica a teoria de detecção Doppler para implementar o monitoramento da qualidade do sono humano, proporcionando um ambiente de detecção totalmente privado e seguro, independente de outros ruídos. Ele é um sistema de radar de sensor útil, com proteção de privacidade e segurança, em aplicações de casa inteligente, como alarme de segurança do sono e detecção respiratória durante o sono.

### Aplicação

- Casa inteligente
- Hotel inteligente
- Monitor de Qualidade do Sono Humano

### Características

- Teoria habilitada: Implementa detecção baseada em tecnologia de radar Doppler mmWave de 24GHz
- Detecção de sinais vitais: Detecta simultaneamente pessoas em movimento e estacionárias, detecta respiração durante o sono para monitorar a qualidade do sono humano
- Proteção perfeita de privacidade: Aplica tecnologia de monitoramento mmWave para fornecer capacidades de vigilância sem identificação
- Condição de funcionamento amigável à saúde: Potência de saída tão baixa a ponto de ser inofensiva ao corpo humano
- Alta estabilidade: Independente de temperatura, umidade, ruído, fluxo de ar, poeira, luz e outras influências ambientais
- Radar de alta flexibilidade: Suporta desenvolvimento secundário e se adapta a aplicações em vários cenários

### Especificação

| Parâmetros de operação                      |  Valor mínimo |  Valores típicos |  Valor máximo |  Unidade |
|--------------------------------------------|----------------|-----------------|----------------|-------|
|  Tensão de operação (VCC)                  |  4.5           |  5.0            |  6             |  V    |
|  Corrente de operação (ICC)                |  90            |  93             |  100           |  mA   |
|  Corrente de Entrada/Saída de operação (IIO) |  -             |  8              |  20            |  mA   |
|  Temperatura de operação (TOP)             |  -20           |  -              |  +60           |  ℃    |
|  Temperatura de armazenamento (TST)        |  -40           |  -              |  +80           |  ℃    |

## Visão Geral de Hardware

Antes de tudo, é bastante essencial ter alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do radar de Monitoramento de Respiração Durante o Sono.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/pihnout.png"/></div>

:::note
    Temos algumas atualizações sobre o hardware.
:::

1. Há um resistor usado para filtragem RC. Como ele não é usado no módulo, conforme testamos, ele foi removido.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd.png"/></div>

2. Como removemos o LED do módulo, o circuito limitador de resistor aqui também foi cancelado.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarpd2.png"/></div>

## Primeiros Passos

## Visão Geral da Biblioteca Arduino

:::tip
If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O código da biblioteca usado neste exemplo pode ser baixado clicando no ícone abaixo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

### Função

Antes de começarmos a desenvolver um sketch, vamos olhar para as funções disponíveis da biblioteca.

- `void recvRadarBytes()` —— Esta função obtém o comprimento do quadro atual retornado pelo radar. Os quadros são armazenados em um array de acordo com esse comprimento.
**Parâmetros de entrada:** Nenhum
**Valor de retorno:** Nenhum

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— Os dados retornados pelo radar contêm uma grande quantidade de dados físicos. O usuário tem flexibilidade para ajustar as informações de movimento detectado com base nos dados de sinal e no algoritmo de decodificação fornecido pela função. O conteúdo do julgamento será enviado pela porta serial.
**Parâmetros de entrada:**
  - `byte inf[]` —— Quadros de dados enviados pelo radar.
  - `float Move_min` —— Determina o valor de limiar para o usuário estar em um estado estacionário ou desocupado.
  - `float Move_max` —— Determina o valor de limiar para o usuário estar em um estado estacionário ou em um estado em que há alguém em movimento.

    **Valor de retorno:** Nenhum
    Sobre a descrição dos parâmetros de sinal: teoricamente, os valores calculados dos parâmetros de sinal variam de **0 a 100**. Quando o valor calculado é **0**, significa que **ninguém** é detectado no ambiente ao redor. Quando o valor calculado é **1**, significa que o ambiente é detectado como ocupado e em um estado **estacionário**. Um valor calculado de **2 a 100** indica que os arredores são detectados como ocupados e **ativos**.

- `void Situation_judgment(byte inf[])` —— Esta função detecta se o corpo humano está se aproximando ou se afastando do local onde o radar está e determina o movimento do corpo humano, de acordo com o algoritmo dentro do radar. Essas informações serão enviadas pela porta serial.
**Parâmetros de entrada:**
  - `byte inf[]` —— Quadros de dados enviados pelo radar.

    **Valor de retorno:** Nenhum

- `void Sleep_inf(byte inf[])` —— Esta função conclui a decodificação das informações de sono retornadas pelo radar e imprime os resultados da detecção do radar pela porta serial. As informações de sono incluem: taxa de respiração, condições de respiração, julgamento de cenário, condições e qualidade de sono, e duração do sono, etc.
**Parâmetros de entrada:**
  - `byte inf[]` —— Quadros de dados enviados pelo radar.

    **Valor de retorno:** Nenhum

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— Esta função é usada para gerar a soma de verificação CRC16.
**Parâmetros de entrada:**
  - `unsigned char *lpuc_Frame` —— O quadro de dados que você deseja enviar ao radar (não incluindo o quadro final de soma de verificação de 2 Bytes).
  - `unsigned short int lus_Len` —— O comprimento do quadro de dados que você deseja enviar ao radar.

    **Valor de retorno:** Dígito de verificação do tipo inteiro de 2 Bytes.

- `void SleepTimeCalculate(unsigned char sleeptime[])` —— Esta função é usada para analisar os quadros de dados retornados pelo radar em tempo de sono. O tempo de sono é impresso pela porta serial.
**Parâmetros de entrada:**
  - `unsigned char sleeptime[]` —— Os dados de duração do sono de 4 Bytes retornados pelo radar.

    **Valor de retorno:** Nenhum

- `void SerialInit()` —— Define a taxa de baud da porta serial do radar para 9600. Se for uma placa Seeeduino, define a porta serial por software para RX: 2, TX: 3.
**Parâmetros de entrada:** Nenhum
**Valor de retorno:** Nenhum

### Variáveis Padrão

```c
#define MESSAGE_HEAD 0x55       //Data frame header
#define ACTIVE_REPORT 0x04      //Proactive reporting

#define REPORT_RADAR 0x03       //Report radar information
#define REPORT_OTHER 0x05       //Report other information

#define HEARTBEAT 0x01          //Heartbeat Pack
#define ABNOEMAL 0x02           //Abnormal Reset
#define ENVIRONMENT 0x05        //Environment
#define BODYSIGN 0x06           //Physical parameters
#define CLOSE_AWAY 0x07         //Approach away

#define CA_BE 0x01              //Approach away head frame
#define CA_CLOSE 0x02           //Someone approaches
#define CA_AWAY 0x03            //Some people stay away
#define SOMEBODY_BE 0x01        //Motion state header frame
#define SOMEBODY_MOVE 0x01      //Somebody move
#define SOMEBODY_STOP 0x00      //Somebody stop
#define NOBODY 0x00             //No one here

#define SLEEP_INF 0x05          //Sleep radar data header frames
#define BREATH 0x01             //Breathing parameters
#define SCENARIO 0x03           //Scenario evaluation
#define SLEEP_TIME 0x04         //Duration parameters
#define SLEEP_QUALITY 0x05      //Sleep quality

#define BREATH_RATE 0x01        //Breathing rate
#define CHECK_SIGN 0x04         //Detection signal

#define BREATH_HOLD 0x01        //Breath-holding abnormalities
#define BREATH_NULL 0x02        //None
#define BREATH_NORMAL 0x03      //Normal breathing
#define BREATH_MOVE 0x04        //Movement abnormalities
#define BREATH_RAPID 0x05       //Acute respiratory abnormalities

#define CLOSE_AWAY_BED 0x07     //Getting in and out of bed judgment
#define SLEEP_STATE 0x08        //Sleep state judgment

#define AWAY_BED 0x00           //Leaving the bed
#define CLOSE_BED 0x01          //Get into bed

#define AWAKE 0x00              //sleep state:Awake
#define LIGHT_SLEEP 0x01        //sleep state:Light sleep
#define DEEP_SLEEP 0x02         //sleep state:deep sleep
#define SLEEP_NULL 0x03         //no sleep state

#define AWAKE_TIME 0x01         //Awake time
#define LIGHT_SLEEP_TIME 0x02   //Light sleep time
#define DEEP_SLEEP_TIME 0x03    //Deep sleep time

#define SLEEP_SCORE 0x01        //Sleep quality score

const byte MsgLen = 12;         //Data frame maximum length value
byte dataLen = 12;              //Real data frame length
byte Msg[12];                   //Set a fixed array to receive the first data
boolean newData = false;        //Controlling the reception of a new set of data
```

### Instalação

**Passo 1.** Você precisa instalar um Software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Passo 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à IDE do Arduino.

- Se você quiser usar **Seeeduino V4.2** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para concluir a adição.

- Se você quiser usar **Seeeduino XIAO** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para concluir a adição.

- Se você quiser usar **XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO BLE** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a adição.

**Passo 4.** Instale a biblioteca de código do Arduino.

Comece obtendo a base de código no [GitHub](https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar) e fazendo o download para o seu computador local.

Como você baixou a biblioteca em formato zip, abra a sua IDE do Arduino, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

## Exemplo Arduino

Agora que temos nossa biblioteca instalada e entendemos as funções básicas, vamos executar alguns exemplos com o nosso XIAO BLE para ver como ele se comporta.

### Materiais Necessários

Antes de concluir os exemplos a seguir, você precisará preparar os seguintes materiais.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.jpeg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**24GHz mmWave Radar Sensor**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Sleep-Breathing-Monitoring-Module-p-5304.html?queryID=c2e8ac7c8c6fb3833f49a1a3b5083a04&objectID=5304&indexName=bazaar_retailer_products)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products)|**Cabo flat passo 2mm para 2,54mm**|

**Passo 1.** Conecte o dispositivo ao computador por meio da placa principal. O diagrama de fiação é mostrado na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/20.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor de Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">D6</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">D7</td>
    </tr>
  </tbody></table>
<br />

**Passo 2.** Na barra de menu no canto superior esquerdo da IDE do Arduino, selecione **tool**, escolha o tipo de placa de desenvolvimento que você está usando e selecione a porta serial correspondente.

:::tip
Se você estiver usando **MacOS**, o nome da porta serial do dispositivo geralmente começará com **/dev/cu.usbmodem xxx**, terminando com o nome do dispositivo. Se você estiver usando **Windows**, o nome da porta serial do dispositivo geralmente começará com **COM**, também terminando com o nome do dispositivo.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

Neste exemplo, demonstraremos como o radar funciona com o nosso produto popular XIAO BLE.

### Demo1 Decodificar os dados do algoritmo de radar embutido que fornecem o status do ambiente

O radar possui um conjunto completo de algoritmos integrados que podem fornecer diretamente as condições ambientais obtidas pelo julgamento do radar. Esta rotina descreverá como imprimir diretamente as condições ambientais detectadas pelo radar por meio da porta serial via código.

O código deste exemplo é o seguinte.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/4.png"/></div>

```cpp
//Human_State_Data_Decoding_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved

    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Situation_judgment(dataMsg);         //Use radar built-in algorithm to output human motion status
  }
}
```

No código `setup()`, ligamos a **porta Serial** e a **porta Serial1** no XIAO BLE. Serial é usada para impressão de dados e Serial1 é usada para comunicação entre o XIAO BLE e o radar. De acordo com a taxa de transmissão do radar, definimos a taxa de transmissão de ambas as portas seriais para 9600. Quando estiver pronto, o monitor serial imprimirá **Ready**.

```c
radar.recvRadarBytes();
if (radar.newData == true) {
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;
    frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];
    radar.newData = false;
}
```

No loop, primeiro usamos a função `recvRadarBytes()` para armazenar os dados enviados pelo radar em um array de comprimento fixo `Msg[12]`. Devido à complexidade dos dados do radar, um único array de comprimento fixo não é suficiente para a nossa tarefa de processamento de dados, então precisamos de um array que possa ser redimensionado para armazenar o conjunto de dados de acordo com o comprimento atual do quadro de dados. É aqui que entra o array `dataMsg[dataLen]`, visto que `dataLen` é o comprimento real do quadro de dados atual.

```c
radar.Situation_judgment(dataMsg);
```

Quando a lista dataMsg é completamente obtida, ela será usada como parâmetro da função `Situation_judgment()` para completar a saída dos dados de monitoramento ambiental, e o resultado da saída será impresso diretamente no monitor serial.

Envie o programa. Ao abrir o monitor serial com uma taxa de transmissão de 9600, o resultado deverá ser mostrado. A saída deverá se parecer com a imagem abaixo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/5.png"/></div>

:::tip
Se você não vir dados após abrir o monitor serial, isso pode ser normal. A aquisição desta parte dos dados do radar depende das mudanças no movimento humano dentro do alcance de monitoramento do radar. Somente quando o movimento da pessoa dentro do alcance muda, o radar enviará dados, e só então os dados serão impressos.
:::

    Se você quiser ver quais dados são retornados pelo radar, pode remover o comentário de `radar.ShowData(dataMsg);`, o que irá fornecer o conjunto completo de quadros de dados recebidos pelo monitor serial.

### Demo2 Obtenção do movimento humano usando análise de parâmetro de característica

Entre a grande quantidade de dados retornados pelo radar, as informações sobre dados físicos compõem a maior parte das informações. Às vezes, a dependência excessiva dos próprios algoritmos do radar pode produzir resultados menos satisfatórios em alguns cenários. Então, podemos optar por usar as informações retornadas pelo radar para fazer ajustes adequados de acordo com os cenários de aplicação reais.

O código deste exemplo é o seguinte.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/1.png"/></div>

```cpp
//Physical_Parameters_Example.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved

    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Bodysign_judgment(dataMsg, 1, 15); //Output of human movement using sign parameters
  }
}
```

```c
radar.Bodysign_judgment(dataMsg, 1, 15);
```

Uma vez obtido o array dataMsg, podemos passar os dados desse array como primeiro argumento para a função `Bodysign_judgment()`, que analisa os parâmetros de sinais corporais.

O segundo e o terceiro parâmetros da função `Bodysign_judgment()` são, respectivamente, os valores críticos para julgar a ausência de ocupação e o corpo humano em repouso, e os valores críticos para o corpo humano em repouso e em movimento.

(1, 15) significa que quando o valor calculado do sinal corporal for menor que 1, a saída indica que não há ninguém no ambiente. Quando o valor somático for maior ou igual a 1 e menor que 15, a saída indica que o ambiente atual está ocupado por alguém em estado estacionário. Quando o valor do sinal corporal for maior ou igual a 35, a saída indica que há alguém se movendo no ambiente.

Envie o programa. Ao abrir o monitor serial com uma taxa de baud de 9600, o resultado deverá ser exibido. A saída deve se parecer com a imagem abaixo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
Os valores após o quadro de dados de saída representam os valores de sinal calculados.
:::

### Demo 3 Obter dados de detecção de sono

A detecção do sono, como uma função especial do radar de respiração e sono de 24GHz, pode ter a saída dos dados de detecção concluída pelo exemplo de código a seguir.

O código deste exemplo é o seguinte.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/6.png"/></div>

```cpp
//Sleep_Breathing_Data_Decoding.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
 radar.recvRadarBytes();                       //Receive radar data and start processing
 if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]
    byte dataMsg[radar.dataLen+1] = {0x00};
    dataMsg[0] = 0x55;                         //Add the header frame as the first element of the array
    for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer
    radar.newData = false;                     //A complete set of data frames is saved

    //radar.ShowData(dataMsg);                 //Serial port prints a set of received data frames
    radar.Sleep_inf(dataMsg);                  //Sleep information output
  }
}
```

```c
radar.Sleep_inf(dataMsg);
```

Quando a lista dataMsg for completamente obtida, ela será usada como parâmetro da função `Sleep_inf()` para concluir a saída dos dados de monitoramento do sono, e o resultado da saída será impresso diretamente no monitor serial.

Envie o programa. Ao abrir o monitor serial com uma taxa de baud de 9600, o resultado deverá ser exibido. A saída deve se parecer com a imagem abaixo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/7.png"/></div>

### Demo 4 Enviando dados para o radar

O radar abre um número muito grande de interfaces para obtermos informações e definir a sensibilidade ou o cenário do radar. Esta rotina irá instruir o usuário sobre como usar o manual do usuário para enviar mensagens de dados ao radar para ajustar os parâmetros do radar ou obter as informações de dados desejadas.

**Passo 1.** Obter quadros de dados com base na consulta desejada.

Baixe o [manual do usuário](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) na área de Recursos e, no **Capítulo 8.2**, encontre o conteúdo dos quadros que você precisa consultar ou configurar e organize-os.

Neste exemplo, supondo que você queira consultar o ID do dispositivo de radar, você deverá conseguir o código de função desejado, o código de endereço 1 e o código de endereço 2.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Passo 2.** Abra o código de exemplo na IDE do Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

O código deste exemplo é o seguinte.

```c
//CRC_Checksum_Generation.ino

#include <sleepbreathingradar.h>

SleepBreathingRadar radar;
char buff[30];

void setup()
{
  radar.SerialInit();
  Serial.begin(9600);
  delay(1500);
  Serial.println("Readly");
}

void loop()
{
  //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
  unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};

  unsigned int length = sizeof(data)/sizeof(unsigned char);
  unsigned char datas[length + 2];
  for (int n = 0; n < length; n++)datas[n] = data[n];
  unsigned short int crc_data = radar.us_CalculateCrc16(data, length);
  sprintf(buff, "The CRC16 values is: %04x", crc_data);
  Serial.println(buff);
  datas[length] = (crc_data & 0xff00) >> 8;
  datas[length+1] = crc_data & 0xff;
  Serial.print("The datas send to the radar: ");
  for (int n = 0; n < length + 2; n++){
    char buffsend[1];
    sprintf(buffsend, "0x%02x ", datas[n]);
    Serial.print(buffsend);
  }
  Serial.println();
  delay(6000);
}
```

**Passo 3.** Modificar o conteúdo do quadro de dados para gerar o quadro de dados completo enviado ao radar.

O que precisamos modificar é o array `data[]` no loop.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

Os locais que precisamos modificar são o segundo elemento e do quarto até o último elemento. O quadro de cabeçalho 0x55 é fixo e não precisa ser modificado. O segundo quadro é o quadro de comprimento; modifique-o de acordo com o comprimento dos dados que você enviar. O terceiro quadro é fixo em 0x00. O quarto quadro é o código de função, o quinto quadro é o código de endereço 1 e assim por diante.

:::tip
Sobre o método de cálculo do quadro de comprimento:<br />
Comprimento = Comprimento dos Dados + Código de Função + Código de Endereço 1 + Código de Endereço 2 + Dados + Checksum. (Quadros de cabeçalho não são contados)

Consulte o Capítulo 8 do [manual do usuário](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) para mais informações sobre formatos e regras de quadros.
:::

Envie o programa. Ao abrir o monitor serial com uma taxa de baud de 9600, o resultado deverá ser exibido. A saída deve se parecer com a imagem abaixo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

Os dados completos que precisam ser enviados ao radar serão exibidos no monitor serial.

**Outras formas**

Se você não quiser usar nenhum master para gerar quadros de dados completos, também pode colar o código abaixo em um editor que possa executar programas em C. Siga o procedimento acima e preencha os dados do array com o conteúdo de seus quadros.

```c
#include <stdio.h>

const unsigned char cuc_CRCHi[256]= {
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x00, 0xC1, 0x81, 0x40,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40, 0x01, 0xC0, 0x80, 0x41, 0x01, 0xC0, 0x80, 0x41,
  0x00, 0xC1, 0x81, 0x40
};

const unsigned char  cuc_CRCLo[256]= {
  0x00, 0xC0, 0xC1, 0x01, 0xC3, 0x03, 0x02, 0xC2, 0xC6, 0x06, 0x07, 0xC7,
  0x05, 0xC5, 0xC4, 0x04, 0xCC, 0x0C, 0x0D, 0xCD, 0x0F, 0xCF, 0xCE, 0x0E,
  0x0A, 0xCA, 0xCB, 0x0B, 0xC9, 0x09, 0x08, 0xC8, 0xD8, 0x18, 0x19, 0xD9,
  0x1B, 0xDB, 0xDA, 0x1A, 0x1E, 0xDE, 0xDF, 0x1F, 0xDD, 0x1D, 0x1C, 0xDC,
  0x14, 0xD4, 0xD5, 0x15, 0xD7, 0x17, 0x16, 0xD6, 0xD2, 0x12, 0x13, 0xD3,
  0x11, 0xD1, 0xD0, 0x10, 0xF0, 0x30, 0x31, 0xF1, 0x33, 0xF3, 0xF2, 0x32,
  0x36, 0xF6, 0xF7, 0x37, 0xF5, 0x35, 0x34, 0xF4, 0x3C, 0xFC, 0xFD, 0x3D,
  0xFF, 0x3F, 0x3E, 0xFE, 0xFA, 0x3A, 0x3B, 0xFB, 0x39, 0xF9, 0xF8, 0x38,
  0x28, 0xE8, 0xE9, 0x29, 0xEB, 0x2B, 0x2A, 0xEA, 0xEE, 0x2E, 0x2F, 0xEF,
  0x2D, 0xED, 0xEC, 0x2C, 0xE4, 0x24, 0x25, 0xE5, 0x27, 0xE7, 0xE6, 0x26,
  0x22, 0xE2, 0xE3, 0x23, 0xE1, 0x21, 0x20, 0xE0, 0xA0, 0x60, 0x61, 0xA1,
  0x63, 0xA3, 0xA2, 0x62, 0x66, 0xA6, 0xA7, 0x67, 0xA5, 0x65, 0x64, 0xA4,
  0x6C, 0xAC, 0xAD, 0x6D, 0xAF, 0x6F, 0x6E, 0xAE, 0xAA, 0x6A, 0x6B, 0xAB,
  0x69, 0xA9, 0xA8, 0x68, 0x78, 0xB8, 0xB9, 0x79, 0xBB, 0x7B, 0x7A, 0xBA,
  0xBE, 0x7E, 0x7F, 0xBF, 0x7D, 0xBD, 0xBC, 0x7C, 0xB4, 0x74, 0x75, 0xB5,
  0x77, 0xB7, 0xB6, 0x76, 0x72, 0xB2, 0xB3, 0x73, 0xB1, 0x71, 0x70, 0xB0,
  0x50, 0x90, 0x91, 0x51, 0x93, 0x53, 0x52, 0x92, 0x96, 0x56, 0x57, 0x97,
  0x55, 0x95, 0x94, 0x54, 0x9C, 0x5C, 0x5D, 0x9D, 0x5F, 0x9F, 0x9E, 0x5E,
  0x5A, 0x9A, 0x9B, 0x5B, 0x99, 0x59, 0x58, 0x98, 0x88, 0x48, 0x49, 0x89,
  0x4B, 0x8B, 0x8A, 0x4A, 0x4E, 0x8E, 0x8F, 0x4F, 0x8D, 0x4D, 0x4C, 0x8C,
  0x44, 0x84, 0x85, 0x45, 0x87, 0x47, 0x46, 0x86, 0x82, 0x42, 0x43, 0x83,
  0x41, 0x81, 0x80, 0x40
};

static unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len){
  unsigned char luc_CRCHi = 0xFF;
  unsigned char luc_CRCLo = 0xFF;
  int li_Index=0;
  while(lus_Len--){
    li_Index = luc_CRCLo ^ *( lpuc_Frame++);
    luc_CRCLo = (unsigned char)( luc_CRCHi ^ cuc_CRCHi[li_Index]);
    luc_CRCHi = cuc_CRCLo[li_Index];
  }
  return (unsigned short int )(luc_CRCLo << 8 | luc_CRCHi);
}

int main() {
    //Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
    unsigned char data[] = {0x55, 0x07, 0x00, 0x01, 0x01, 0x01};

    unsigned short int crc_data = 0x0000;
    unsigned int length = sizeof(data)/sizeof(unsigned char);
    unsigned char datas[length + 2];
    for (int n = 0; n < length; n++)datas[n] = data[n];
    printf("The data frame length is: %d\n", length);
    crc_data = us_CalculateCrc16(data, length);
    datas[length] = (crc_data & 0xff00) >> 8;
    datas[length+1] = crc_data & 0xff;
    printf("The last two CRC check digits are: %04x\n", crc_data);
    printf("The datas send to the radar: ");
    for (int n = 0; n < length + 2; n++){
        printf("0x%02x ", datas[n]);
    }
    printf("\n");
    return 0;
}
```

Após a execução do editor, também é possível gerar os quadros de dados completos que precisam ser enviados ao radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Passo 4.** Envie quadros de dados para o radar.

Conecte o radar diretamente à porta USB do computador por meio de um dispositivo [**UART to USB**](https://www.seeedstudio.com/USB-To-Uart-5V-p-1833.html?queryID=588a892811a774ad3005ea0d31427532&objectID=1111&indexName=bazaar_retailer_products). A fiação é mostrada na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/22.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Sensor de Radar</td>
      <td align="center" />
      <td align="center">Placa Principal</td>
    </tr>
    <tr>
      <td align="center">5V</td>
      <td align="center">--&gt;</td>
      <td align="center">5V</td>
    </tr>
    <tr>
      <td align="center">GND</td>
      <td align="center">--&gt;</td>
      <td align="center">GND</td>
    </tr>
    <tr>
      <td align="center">RX</td>
      <td align="center">--&gt;</td>
      <td align="center">TX</td>
    </tr>
    <tr>
      <td align="center">TX</td>
      <td align="center">--&gt;</td>
      <td align="center">RX</td>
    </tr>
  </tbody></table>

Use um software como um assistente de depuração serial para selecionar a porta serial onde o radar está localizado.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
O radar de 24GHz precisa de uma fonte de alimentação de 5V, caso contrário o radar pode não funcionar corretamente.
:::

Após uma conexão bem-sucedida, você verá o radar enviando um fluxo constante de mensagens.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Cole o quadro de dados completo que obtivemos no **passo3** na área de envio do software. Em seguida, clique em Send.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

Você pode ficar atento a um conjunto de dados retornado em que o terceiro elemento é 0x03. Esse conjunto de dados é a informação obtida após a consulta. Se você enviar dados que ajustem os parâmetros do radar, ele também retornará essas informações.

:::caution
Se você escolher **ASCII** como formato para envio de dados, cada conjunto de dados precisa ser prefixado com **0x**. Se você escolher **HEX**, então cada conjunto de dados não precisa ser prefixado com **0x**.
:::

## Solução de Problemas

**FAQ1: Como aplicar o código ao Seeeduino (ou Arduino)?**

> Devido ao diferente projeto de hardware, a porta serial da série XIAO ou do Wio Terminal é chamada Serial1, enquanto o Seeeduino ou Arduino precisam usar porta serial por software. Se você quiser usar o radar com o Seeeduino, pode alterar a porta serial por software ou usar os pinos 2 (RX) e 3 (TX).
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: O que devo fazer se o XIAO BLE e o Radar coletarem dados por muito tempo e não for possível enviar o código?**

> Nesse momento, você pode usar o dedo para pressionar levemente o botão de reset na parte superior do XIAO BLE para reenviar o programa para execução.

## Recursos

- **[PDF]** [Sleep Breathing Radar Sensor Datasheet](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_Datasheet.pdf)
- **[PDF]**    [24GHz Sleep Breathing Radar Sensor User Manual](https://files.seeedstudio.com/wiki/mmWave-radar/MR24BSD1_User_Manual.pdf)
- **[ZIP]** [Esquemático de respiratório de 24GHz](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Seeed mmWave sensor series V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## Suporte Técnico & Discussão de Produtos



Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
