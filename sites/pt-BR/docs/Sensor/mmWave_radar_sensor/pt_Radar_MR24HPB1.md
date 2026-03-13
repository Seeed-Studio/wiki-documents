---
description: Presença Humana Estática com mmWave de 24GHz
title: Presença Humana Estática com mmWave de 24GHz
keywords:
  - mmWave_radar_sensor
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Radar_MR24HPB1
last_update:
  date: 1/12/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Radar_MR24HPB1/
---

# Sensor mmWave de 24GHz - Módulo de Presença Humana Estática (MR24HPB1)

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg)

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

## Introdução

O Sensor de Presença Humana Estática por Radar é um módulo mmWave autônomo, com proteção de privacidade e seguro, operando em 24GHz. Com o radar Doppler Infineon aprimorado e o algoritmo padrão, o módulo é uma solução ideal para aplicações individuais como casa inteligente, hotel inteligente e alarme de perigo.

### Aplicação

- Casa inteligente

### **Recursos**

- Tecnologia confiável: radar industrial Infineon mmWave FMCW
- Teoria habilitada: aplica tecnologia de radar Doppler com Near Distance Sensor (NDS) operando em 24GHz
- Algoritmo padrão: distingue condições ocupado/desocupado e identifica atividades humanas em um ambiente de auto-adaptação
- Perfeita proteção de privacidade: fornece recursos de vigilância sem identificação
- Local de instalação flexível: opera corretamente independentemente dos bloqueios de abrigo
- Estado de funcionamento inofensivo: saída de energia inofensiva de 10 dBm
- Alta precisão: reduz a interferência de objetos inanimados e os resultados de saída atingem mais de 95% de precisão
- Alta robustez: mantém o funcionamento adequado em um ambiente complexo contendo diferentes temperaturas, umidade, ruído, correntes de ar, poeira, luz e assim por diante.
- Antena de alto desempenho: detecta até micromovimentos em um padrão de feixe de leque onde Horizontal 90°/ Vertical 60°
- Distância de medição:
  - Distância máxima de percepção de movimento: até 12 metros
  - Distância máxima de percepção de micromovimento: até 5 metros
  - Distância máxima de percepção do corpo: até 3 metros
- Tempo de detecção:
  - Estado desocupado para ocupado: dentro de 0,5 segundos
  - Estado ocupado para desocupado: acima de 1 minuto
- Radar personalizável: suporta desenvolvimento secundário incluindo parâmetro de radar, protocolo, antena, função

### **Visão Geral de Hardware**

![](https://files.seeedstudio.com/wiki/mmWave-radar/yinjiaotu.png)

1. Saída S1: nível alto - ocupado, nível baixo - desocupado.
2. Saída S2: nível alto - ativo, nível baixo - estacionário
3. GP1 a GP4 são controles de seleção de parâmetros, que podem ser redefinidos de acordo com os requisitos do usuário.
4. Os sinais de saída desta interface são todos em nível de 3,3V.

:::caution  
O consumo de energia do produto é de 500mW, o que não é adequado para alimentação de longo prazo.
:::

### **Características**

![](https://files.seeedstudio.com/wiki/mmWave-radar/radar1.png)

## Primeiros Passos

### Visão Geral da Biblioteca Arduino

:::tip
Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

O código da biblioteca usado neste exemplo pode ser baixado clicando no ícone abaixo.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor" target="_blank"><div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png" /></div></a></p>

Antes de começarmos a desenvolver um sketch, vamos olhar para as funções disponíveis da biblioteca.

- `void recvRadarBytes()` —— Esta função obtém o comprimento do quadro atual retornado pelo radar. Os quadros são armazenados em um array de acordo com esse comprimento.
**Parâmetros de entrada:** Nenhum
**Valor de retorno:** Nenhum

- `void Bodysign_judgment(byte inf[], float Move_min, float Move_max)` —— Os dados retornados pelo radar contêm uma grande quantidade de dados físicos. O usuário tem flexibilidade para ajustar as informações de movimento detectadas com base nos dados de sinal e no algoritmo de decodificação fornecido pela função. O conteúdo do julgamento será enviado pela porta serial.
**Parâmetros de entrada:**
  - `byte inf[]` —— Quadros de dados enviados pelo radar.
  - `float Move_min` —— Determina o valor limite de o usuário estar em um estado estacionário ou desocupado.
  - `float Move_max` —— Determina o valor limite para o usuário estar em um estado estacionário ou em um estado em que alguém está em movimento.

    **Valor de retorno:** Nenhum
    Sobre a descrição dos parâmetros de sinal: teoricamente, os valores calculados dos parâmetros de sinal variam de **0 a 100**. Quando o valor calculado é **0**, significa que **ninguém** é detectado no ambiente ao redor. Quando o valor calculado é **1**, significa que o ambiente é detectado como ocupado e em um **estado estacionário**. Um valor calculado de **2 a 100** indica que os arredores são detectados como ocupados e **ativos**.

- `void Situation_judgment(byte inf[])` —— Esta função detecta se o corpo humano está se aproximando ou se afastando do local onde o radar está localizado e determina o movimento do corpo humano, de acordo com o algoritmo interno do radar. Essas informações serão enviadas pela porta serial.
**Parâmetros de entrada:**
  - `byte inf[]` —— Quadros de dados enviados pelo radar.

    **Valor de retorno:** Nenhum

- `void Fall_inf(byte inf[])` —— Esta função completa a decodificação das informações de detecção de queda retornadas pelo radar e imprime os resultados da detecção do radar pela porta serial.
**Parâmetros de entrada:**
  - `byte inf[]` —— Quadros de dados enviados pelo radar.

    **Valor de retorno:** Nenhum

- `unsigned short int us_CalculateCrc16(unsigned char *lpuc_Frame, unsigned short int lus_Len)` —— Esta função é usada para gerar o checksum CRC16.
**Parâmetros de entrada:**
  - `unsigned char *lpuc_Frame` —— O quadro de dados que você deseja enviar ao radar (não incluindo o quadro final de checksum de 2 Bytes).
  - `unsigned short int lus_Len` —— O comprimento do quadro de dados que você deseja enviar ao radar.

    **Valor de retorno:** dígito de verificação do tipo inteiro de 2 Bytes.

    **Valor de retorno:** Nenhum

- `void SerialInit()` —— Define a taxa de baud da porta serial do radar para 9600. Se for uma placa Seeeduino, define a porta serial por software para RX: 2, TX: 3.
**Parâmetros de entrada:** Nenhum
**Valor de retorno:** Nenhum

### Instalação

**Passo 1.** Você precisa instalar o software Arduino.

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></div></a></p>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Passo 3.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar **Seeeduino V4.2** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para concluir a adição.

- Se você quiser usar **Seeeduino XIAO** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para concluir a adição.

- Se você quiser usar **XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para concluir a adição.

- Se você quiser usar **XIAO BLE** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a adição.

**Passo 4.** Instale a biblioteca de código Arduino.

Comece obtendo a base de código do [GitHub](https://github.com/limengdu/Seeed_24GHz_mmWave_Radar_Sensor) e fazendo o download para o seu computador local.

Como você baixou a biblioteca zip, abra seu Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar, e se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. O que significa que a biblioteca foi instalada com sucesso.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"/></div>

### Materiais Necessários

Antes de concluir os exemplos a seguir, você precisará preparar os seguintes materiais.

|              |              |              |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radar.jpg"/></div>| <div align="center"><img width ="{210}" src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"/></div>| <div align="center"><img width ="{150}" src="https://files.seeedstudio.com/wiki/60GHzradar/dupont.jpg"/></div>|
|[**Sensor de Radar mmWave de 24GHz**](https://www.seeedstudio.com/24GHz-mmWave-Radar-Sensor-Human-Static-Presence-Module-p-5267.html)|[**Seeed XIAO BLE nRF52840 Sense**](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)|**Cabo Flat de Passo 2mm para 2,54mm**|

**Passo 1.** Conecte o dispositivo ao computador através da placa principal. O diagrama de fiação é mostrado na tabela abaixo.

<table align="center">
  <tbody><tr>
      <td colSpan={4}><div align="center"><img width="{800}" src="https://files.seeedstudio.com/wiki/mmWave-radar/radarconnect.png" /></div></td>
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

**Passo 2.** Na barra de menu no canto superior esquerdo da Arduino IDE, selecione **tool**, escolha o tipo de placa de desenvolvimento que você está usando e selecione a porta serial correspondente.

:::tip
Se você estiver usando **MacOS**, o nome da porta serial do dispositivo geralmente começará com **/dev/cu.usbmodem xxx**, terminando com o nome do dispositivo. Se você estiver usando **Windows**, o nome da porta serial do dispositivo geralmente começará com **COM**, também terminando com o nome do dispositivo.
:::

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/3.png"/></div>

Neste exemplo, demonstraremos como o radar funciona com o nosso produto popular XIAO BLE.

### Demo1 Obtendo movimento humano usando análise de parâmetros de característica

Entre a grande quantidade de dados retornados pelo radar, as informações de dados físicos constituem a maior parte das informações. Às vezes, confiar demais nos próprios algoritmos do radar pode produzir resultados menos satisfatórios em alguns cenários. Então, podemos optar por usar as informações retornadas pelo radar para fazer ajustes adequados de acordo com os cenários de aplicação reais.

O código neste exemplo é o seguinte.

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

Uma vez obtido o array dataMsg, podemos passar os dados desse array como o primeiro argumento para a função `Bodysign_judgment()`, que analisa os parâmetros de sinais vitais.

O segundo e o terceiro parâmetros da função `Bodysign_judgment()` são, respectivamente, os valores críticos para julgar o ambiente como desocupado e o corpo humano em repouso, e os valores críticos para o corpo humano em repouso e em movimento.

(1, 15) significa que, quando o valor calculado do sinal corporal é menor que 1, a saída indica que não há ninguém no ambiente. Quando o valor somático é maior ou igual a 1 e menor que 15, a saída indica que o ambiente atual está ocupado por alguém em estado estacionário. Quando o valor do sinal corporal é maior ou igual a 35, a saída indica que há alguém se movendo no ambiente.

Carregue o programa. Ao abrir o monitor serial com baud rate de 9600, o resultado deve ser exibido. A saída deve se parecer com a imagem abaixo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/2.png"/></div>

:::tip
Os valores após o quadro de dados de saída representam os valores de sinais calculados.
:::

### Demo 2 Enviando dados para o radar

O radar disponibiliza um número muito grande de interfaces para obtermos informações e configurar a sensibilidade ou o cenário do radar. Esta rotina irá instruir o usuário sobre como usar o manual do usuário para enviar mensagens de dados ao radar para ajustar os parâmetros do radar ou obter as informações de dados desejadas.

**Passo 1.** Obtenha quadros de dados com base na consulta desejada.

Baixe o [manual do usuário](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) na área de Recursos e, no **Capítulo 8.2**, encontre o conteúdo dos quadros que você precisa consultar ou configurar e organize-os.

Neste exemplo, supondo que você queira consultar o ID do dispositivo de radar, você deve conseguir obter o código de função desejado, o código de endereço 1 e o código de endereço 2.

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/60GHzradar/11.png"/></div>

**Passo 2.** Abra o código de exemplo na Arduino IDE.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/9.png"/></div>

O código neste exemplo é o seguinte.

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

**Passo 3.** Modifica o conteúdo do quadro de dados para gerar o quadro de dados completo enviado ao radar.

O que precisamos modificar é o array `data[]` no loop.

```c
//Please fill in the data frame you want to set according to the datasheet(Excluding 2 Byte checksum frames)
unsigned char data[] = {0x55, 0x08, 0x00, 0x05, 0x01, 0x04, 0x03};
```

Os locais que precisamos modificar são o segundo elemento, do quarto até o último elemento. O quadro de cabeçalho 0x55 é fixo e não precisa ser modificado. O segundo quadro é o quadro de comprimento; modifique-o de acordo com o comprimento dos dados que você envia. O terceiro quadro é fixo em 0x00. O quarto quadro é o código de função, o quinto quadro é o código de endereço 1, e assim por diante.

:::tip
Sobre o método de cálculo do quadro de comprimento:<br />
Comprimento = Comprimento dos Dados + Código de Função + Código de Endereço 1 + Código de Endereço 2 + Dados + Checksum. (Quadros de cabeçalho não são contados)

Consulte o Capítulo 8 do [manual do usuário](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-Sleep-monitorng-user-manual.pdf) para mais informações sobre formatos e regras de quadros.
:::

Carregue o programa. Ao abrir o monitor serial com baud rate de 9600, o resultado deve ser exibido. A saída deve se parecer com a imagem abaixo.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/10.png"/></div>

Os dados completos que precisam ser enviados ao radar serão exibidos no monitor serial.

**Outras maneiras**

Se você não quiser usar nenhum mestre para gerar quadros de dados completos, também pode colar o código abaixo em um editor que consiga executar programas em C. Siga o procedimento acima e preencha os dados do array com o conteúdo dos seus quadros.

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

Após a execução do editor, também é possível gerar as tramas de dados completas que precisam ser enviadas ao radar.

<div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/8.png"/></div>

**Passo 4.** Envie tramas de dados para o radar.

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

Use um software como assistente de depuração serial para selecionar a porta serial onde o radar está localizado.

<div align="center"><img width ="{300}" src="https://files.seeedstudio.com/wiki/60GHzradar/17.png"/></div>

:::caution
O radar de 24GHz precisa de uma fonte de alimentação de 5V, caso contrário o radar pode não funcionar corretamente.
:::

Após uma conexão bem-sucedida, você verá o radar enviando um fluxo constante de mensagens.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/16.png"/></div>

Cole a trama de dados completa que obtivemos no **passo3** na área de envio do software. Em seguida, clique em Send.

<div align="center"><img width ="{800}" src="https://files.seeedstudio.com/wiki/60GHzradar/18.png"/></div>

Você pode procurar por um conjunto de dados retornado com o terceiro elemento sendo 0x03. Esse conjunto de dados é a informação obtida após a consulta. Se você enviar dados que ajustem os parâmetros do radar, ele também retornará essas informações.

:::caution
Se você escolher **ASCII** como formato para envio de dados, cada conjunto de dados precisa ser prefixado com **0x**. Se você escolher **HEX**, então cada conjunto de dados não precisa ser prefixado com **0x**.
:::

## Solução de Problemas

**FAQ1: Como aplicar o código ao Seeeduino (ou Arduino)?**

> Devido ao diferente projeto de hardware, a porta serial da série XIAO ou do Wio Terminal é chamada de Serial1, enquanto o Seeeduino ou o Arduino precisam usar porta serial por software. Se você quiser usar o radar com o Seeeduino, pode alterar a porta serial por software ou usar os pinos 2 (RX) e 3 (TX).
> <div align="center"><img width ="{600}" src="https://files.seeedstudio.com/wiki/60GHzradar/19.png"/></div>

**FAQ2: O que devo fazer se o XIAO BLE e o Radar coletarem dados por muito tempo e não conseguirem fazer upload do código?**

> Nesse momento, você pode usar o dedo para pressionar levemente o botão de reset na parte superior do XIAO BLE para reenviar o programa para execução.

## Recursos

- **[PDF]** [Manual do Usuário de Presença Humana](https://files.seeedstudio.com/wiki/mmWave-radar/Human_Presence_User_Manual.pdf)
- **[ZIP]** [Esquemático respiratório de 24GHz](https://files.seeedstudio.com/wiki/60GHzradar/24GHz-respiratory-schematic.zip)
- **[PPTX]** [Seeed série de sensores mmWave V2.0](https://files.seeedstudio.com/wiki/mmWave-radar/Seeed-mmWave-sensor-series-V2.0.pptx)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
