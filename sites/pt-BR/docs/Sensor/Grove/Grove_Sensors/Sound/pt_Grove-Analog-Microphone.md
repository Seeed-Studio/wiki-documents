---
title: Grove - Microfone Analógico
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Analog-Microphone/
slug: /Grove-Analog-Microphone
sku: 101020852
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Analog-Microphone/
---

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/04.png)

O Grove - Microfone Analógico é baseado na tecnologia de alto desempenho **SiSonic MEMS**, oferecendo um microfone extremamente silencioso, de baixa corrente, confiável e pequeno para a indústria de hardware open source, e possui desempenho aprimorado em condições severas.

Grove - Microfone Analógico é uma escolha ideal de sensores de som quando é necessário excelente desempenho de áudio. Ele pode fornecer até 20dB de ganho e também possui baixa corrente, proteção máxima contra RF, o que o torna um microfone perfeito para Arduino e Raspberry Pi. Nosso produto em destaque <a href="https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html">ReSpeaker Core v2.0</a> também adota a tecnologia MEMS e o mesmo microfone que o Grove - Microfone Analógico utiliza. Se você está procurando um microfone sofisticado, esta é a escolha.

<p style={{}}><a href="https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a></p>

## Recursos

- Tecnologia SiSonic MEMS de alto desempenho
- Extremamente silencioso, de baixa corrente e confiável
- Design compacto e elegante

:::warning
    Este sensor de som é usado para detectar se há som ao redor ou não, por favor não use o módulo para coletar sinal de som. Por exemplo, você pode usá-lo para fazer uma lâmpada controlada por som, mas não como um dispositivo de gravação.
:::

## Aplicações

- Sensor de som
- Coleta de sinal de som
- Reconhecimento de voz
- Gravação

## Especificações

|Item|Valor|
|-----|------|
|Dimensões |20mm x 20mm|
|Tensão de Operação |3,3V|
|Corrente de Operação| 5mA|
|Faixa de Temperatura de Operação|-40 °C a 100 °C|

:::tip
    Para mais detalhes sobre os módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

## Plataformas Suportadas

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

:::note
    Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
:::

### Brincar com Arduino

**Hardware**

|Seeeduino V4.2| Base Shield|Grove-Analog Microphone|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

- **Step 1.** Conecte o Grove-Sound Sensor à porta **A0** do Grove-Base Shield.
- **Step 2.** Conecte o Grove - Base Shield ao Seeeduino e conecte o Seeeduino ao PC por meio de um cabo USB.

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/hardware_connection.jpg)

:::note
 If we don't have Grove Base Shield, We also can directly connect Grove-Sound Sensor to Seeeduino as below.
:::

| Seeeduino     | Grove-Sound Sensor      |
|---------------|-------------------------|
| 5V            | Red                     |
| GND           | Black                   |
| A1            | White                   |
| A0            | Yellow                  |

**Software**

- **Step 1.** Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/pt-br/Upload_Code/).

```c
/*
  Analog input, analog output, serial output

  Reads an analog input pin, maps the result to a range from 0 to 255 and uses
  the result to set the pulse width modulation (PWM) of an output pin.
  Also prints the results to the Serial Monitor.
*/

// These constants won't change. They're used to give names to the pins used:
const int analogInPin = A0;  // Analog input pin that the potentiometer is attached to
const int analogOutPin = 9; // Analog output pin that the LED is attached to

int sensorValue = 0;        // value read from the pot
int outputValue = 0;        // value output to the PWM (analog out)

void setup() {             
  Serial.begin(9600);      // initialize serial communications at 9600 bps
}

void loop() {
  sensorValue = analogRead(analogInPin);        // read the analog in value
  outputValue = map(sensorValue, 0, 1023, 0, 255);       // map it to the range of the analog out
  analogWrite(analogOutPin, outputValue);               // change the analog out value

  Serial.println(outputValue);    // print the results to the Serial Monitor

  // wait 2 milliseconds before the next loop for the analog-to-digital
  // converter to settle after the last reading:
  delay(2);
}
```

- **Step 2.** Clique em **Serial > Plotter** para obter a curva de variação do sensor. Por favor, faça um ruído para ver a mudança do valor.

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/outcome.png)

### Brincar com Wio Terminal

**Hardware**

|Wio Terminal|Grove-Analog Microphone|
|--------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png)|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html)|

#### Conexão de Hardware

![](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/connection.jpg)

**Step 1** Conecte o Grove-Analog Microphone ao Wio Terminal por meio de um cabo Grove e também conecte o Wio Terminal ao PC através de um cabo USB.

**Step 2** Copie o código de demonstração para o seu Arduino IDE e faça o upload.

**Software**

```cpp
#include "seeed_line_chart.h" //include the library

TFT_eSPI tft;
#define LINE_DIS 0X00
#define STRING_DIS 0X01
#define max_size 30 //maximum size of data
doubles data;       //Initilising a doubles type to store data
int brightness;
TFT_eSprite spr = TFT_eSprite(&tft); // Sprite

const int MIC = A0; //the microphone amplifier output is connected to pin A0
int adc;
int dB, PdB; //the variable that will hold the value read from the microphone each time
uint8_t mode = LINE_DIS;
void setup()
{
    Serial.begin(9600); //sets the baud rate at 9600 so we can check the values the microphone is obtaining on the Serial Monitor
    pinMode(A0, INPUT);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    pinMode(WIO_BUZZER, OUTPUT);
    tft.begin();
    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);
    spr.setRotation(3);
    tft.setRotation(3);
}

void loop() {

    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(mode);
}

void display(uint8_t mode)
{
    adc = analogRead(MIC); //Read the ADC value from amplifer
    //Serial.println (adc);//Print ADC for initial calculation
    dB = (adc + 83.2073) / 7.003; //Convert ADC value to dB using Regression values

    if(dB > 50)
    {
        analogWrite(WIO_BUZZER, 128);

    }else{
        analogWrite(WIO_BUZZER, 0);
    }

    spr.fillSprite(TFT_WHITE);

    if (data.size() == max_size)
    {
        data.pop(); //this is used to remove the first read variable
    }
    data.push(dB); //read variables and store in data

    //Settings for the line graph title
    auto header = text(0, 0)
                      .value("MIC DB Readings")
                      .align(center)
                      .valign(vcenter)
                      .width(tft.width())
                      .thickness(2);

    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font
    if (LINE_DIS == mode){
    //Settings for the line graph
    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins
    content
        .height(tft.height() - header.height() * 1.5) //actual height of the line chart
        .width(tft.width() - content.x() * 2)         //actual width of the line chart
        .based_on(0.0)                                //Starting point of y-axis, must be a float
        .show_circle(false)                           //drawing a cirle at each point, default is on.
        .value(data)                                  //passing through the data to line graph
        .color(TFT_RED)                               //Setting the color for the line
        .draw();
    } else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        if(dB > 50){
            spr.setTextColor(TFT_RED);
        }else{
            spr.setTextColor(TFT_BLUE);
        }
        spr.drawFloat(dB,2,70,110);
        spr.drawString(" dB",80 + 100,110,1);
    }
    spr.pushSprite(0, 0);
    delay(100);
}
```

:::success
   A imagem será exibida na tela do Wio Terminal se tudo correr bem.
:::

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/02.gif" alt="Grove-Analog Microphone'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [**ZIP**] [Grove-Analog_Microphone_v1.0_SCH&PCB.zip](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip)
- [**PDF**] [SMD Mic OMNI-22DB_Specification.pdf](https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf)

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
