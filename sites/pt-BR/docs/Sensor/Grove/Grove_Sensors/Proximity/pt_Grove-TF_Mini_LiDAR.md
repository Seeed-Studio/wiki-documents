---
title: Grove - TF Mini LiDAR
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-TF_Mini_LiDAR/
slug: /Grove-TF_Mini_LiDAR
sku: 114991434, 101990656, 101990620, 101990388
last_update:
  date: 12/30/2022
  author: gunengyu
createdAt: '2023-01-05'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-TF_Mini_LiDAR/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR.JPG" alt="pir" width={600} height="auto" /></p>

Este produto é baseado no princípio ToF (Time of Flight) e integrado com designs ópticos e elétricos exclusivos, de forma a alcançar detecção de distância estável, precisa, de alta sensibilidade e em alta velocidade.

ToF é a abreviação da tecnologia Time of Flight, e seu princípio de operação é o seguinte: uma luz modulada de infravermelho próximo é enviada pelo sensor e refletida por um objeto; a distância até o objeto a ser medido pode ser convertida pelo sensor calculando a diferença de tempo ou a diferença de fase entre o envio da luz e a reflexão da luz, de modo a produzir a informação de profundidade.

[![Adquira agora](https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/image/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)

:::warning
    Evite que poeira ou qualquer outro corpo estranho entre na lente; caso contrário, isso pode afetar a transmissão de luz.
:::

## Versão

| Versão do Produto              | Alterações                                                                                                                                                                                    | Data de Lançamento |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------|
| Grove-TF Mini LiDAR V1.0 | Inicial | Nov 2017      |

## Especificação

---
| Nome do Produto                              | TFmini                           |
|---------------------------------------------|----------------------------------|
| Faixa de operação                             | 0,3 m–12 m                         |
| Faixa máxima de operação a 10% de refletividade | 5 m                               |
| Consumo médio de energia                   | 0,6 W                            |
| Faixa de tensão aplicável                    | 4,5 V–6 V                          |
| Ângulo de aceitação                            | 2,3°                             |
| Resolução mínima                    | 1 cm                              |
| Frequência                                   | 100 Hz                            |
| Precisão                                    | 1%   (menos de 6 m), 2% (6 m–12 m) |
| Unidade de detecção de distância                     | cm                               |
| Comprimento de onda                                  | 850 nm                            |
| Tamanho                                        | 42 mm × 15 mm × 16 mm                   |
| Temperatura de operação                       | -20℃–60℃                       |
| Sensibilidade à luz                           | 70.000 lux                        |
| Peso                                      | 4,7 g                             |
| Interface de comunicação                     | UART 115200                      |
| Corrente de pico do LED                            | 800 mA                            |
| Nível de tensão TTL da porta serial               | 3,3 V                              |
| Compatibilidade eletromagnética (EMC)          | EN 55032 Classe B                  |

:::tip
    Para mais detalhes sobre módulos Grove, consulte [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Plataformas Suportadas
-------------------

| Arduino                                                                                             | Raspberry Pi                                                                                             |                                                                                                 |                                                                                                          |                                                                                                    |
|-----------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------|
| ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg) | ![](https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg) |

:::caution
    As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as plataformas MCU possíveis. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros Passos

---

### Brincar com Arduino

#### Hardware

- **Passo 1**. Prepare os seguintes itens:

|Seeeduino V4.2| Base Shield|Grove-TF Mini LiDAR|
|--------------|------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR.html)|

- **Passo 2**. Conecte o Grove-TF-Mini-LiDAR à porta **D2** do Base Shield e conecte o Seeeduino ao PC através de um cabo USB.

- **Passo 3**. Baixe o [código de demonstração](https://github.com/Seeed-Studio/Seeed_Arduino_TFlidar/archive/master.zip) e copie todo o arquivo **Seeed_Arduino_TFlidar** e cole-o na pasta de bibliotecas do seu Arduino IDE.

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/hardware_connection2.jpg)

#### Software

- **Passo 1**. O Grove-TF Mini LiDAR produz dados em hexadecimal. Cada quadro de dados é codificado com 9 bytes, incluindo 1 dado de distância (Dist). Cada dado de distância possui informação de intensidade de sinal correspondente (Strength). O fim do quadro é o bit de paridade dos dados.

| Byte  | Interpretação da codificação de dados                |
|-------|---------------------------------------------|
| Byte1 | 0x59, cabeçalho do quadro, todos os quadros são iguais |
| Byte2 | 0x59, cabeçalho do quadro, todos os quadros são iguais |
| Byte3 | Dist_L, o valor de distância é um byte inferior de 8 bits.       |
| Byte4 | Dist_H, o valor de distância é um byte superior de 8 bits.      |
| Byte5 | Strength_L é um byte inferior de 8 bits.                  |
| Byte6 | Strength_H é um byte superior de 8 bits.                 |
| Byte7 | Tempo de integração.                           |
| Byte8 | Bytes reservados.                             |
| Byte9 | Verificação de paridade (Checksum).                             |

- **Passo 2**. Copie o código para o Arduino IDE e faça o upload.

```cpp
#include "TFLidar.h"

#define USETFMINI
// #define USETFLUNA

#define SERIAL Serial

#if defined(SEEED_XIAO_M0)
    #define uart  Serial1
#elif defined(SEEED_WIO_TERMINAL)
    #define uart  Serial1
#else
    SoftwareSerial uart(2, 3);
#endif

#ifdef USETFLUNA
TFLuna SeeedTFLuna;
TFLidar SeeedTFLidar(&SeeedTFLuna);
#endif

#ifdef USETFMINI
TFMini SeeedTFMini;
TFLidar SeeedTFLidar(&SeeedTFMini);
#endif 


void setup() {
  // put your setup code here, to run once:
  SERIAL.begin(9600);
  while(!Serial);
  SeeedTFLidar.begin(&uart,115200);
}

void loop() {
  while(!SeeedTFLidar.get_frame_data()){
    delay(1); 
  }
  // put your main code here, to run repeatedly:
  SERIAL.print("dist = ");
  SERIAL.print(SeeedTFLidar.get_distance()); //output measure distance value of LiDAR
  SERIAL.print('\t');
  SERIAL.print("strength = ");
  SERIAL.print(SeeedTFLidar.get_strength()); //output signal strength value
#ifdef USETFLUNA
  SERIAL.print("\t Chip Temprature = ");
  SERIAL.print(SeeedTFLidar.get_chip_temperature());
  SERIAL.print(" celcius degree"); //output chip temperature of Lidar
#endif
  SERIAL.println(" ");
  // delay(1000);
}
```

- **Passo 3**. Veremos a distância exibida no terminal. A **curva azul** é a distância e o **vermelho** é a Strength.

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/curve.png)

:::note
      Você pode excluir da **Linha 41** à **Linha 43** do código de demonstração se apenas a **Distance** for necessária:
:::

```cpp
SERIAL.print("strength = ");
SERIAL.print(SeeedTFLidar.get_strength()); //output signal strength value
```

### Brincar com Wio Terminal

#### Hardware

| Wio Terminal |  Grove-TF-Mini-LiDAR | Jumper |
|--------------|-----------------|----------|
|![enter image description here](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Grove-TF-Mini-LiDAR_S.JPG)|![enter image description here](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Jumper.png)|
|[Adquira agora](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)|[Adquira agora](https://www.seeedstudio.com/Seeedstudio-Grove-TF-Mini-LiDAR-p-2996.html)|[Adquira agora](https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html)|

#### Conexão de Hardware

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/hardware_connection.jpg)

#### Pinagem

<div align="center">
<figure>
<img src="https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/pinout_wio.png" alt="Grove-TF_Mini_LiDAR'' OUTCOME" title="demo" />
<figcaption><b></b><i></i></figcaption>
</figure>
</div>

:::tip
     Consulte as instruções de pinagem acima antes de começar a conectar o Wio Terminal com jumpers.
:::

**Passo 1** Conecte o Grove-TF-Mini-LiDAR ao Wio Terminal por meio de jumpers e também conecte o Wio Terminal ao PC através de um cabo USB.

**Passo 2** Baixe o [código de demonstração](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart/archive/master.zip) e copie todo o arquivo **Seeed_Arduino_Linechart** e cole-o na pasta de bibliotecas do seu Arduino IDE.

**Passo 3** Copie o código de demonstração para o seu Arduino IDE.

#### Software

```cpp
#include"seeed_line_chart.h" //include the library
#include "TFLidar.h"
#define LINE_DIS 0X00
#define STRING_DIS 0X01
TFMini SeeedTFMini;
TFLidar SeeedTFLidar(&SeeedTFMini);
#define uart  Serial1

TFT_eSPI tft;

#define max_size 10 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 

void setup() {
    Serial.begin(115200);
    pinMode(WIO_KEY_C, INPUT_PULLUP);
    tft.begin();
    tft.setRotation(3);
    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);
    SeeedTFLidar.begin(&uart,115200);
}
uint8_t mode = LINE_DIS;
void loop() {

    if (digitalRead(WIO_KEY_C) == LOW) {
        mode ++;
        if(mode > STRING_DIS ) mode = LINE_DIS;
        while(!digitalRead(WIO_KEY_C));
    }
    display(get_Lidar_data(),mode);
    delay(50);
}

uint16_t get_Lidar_data()
{
    while(!SeeedTFLidar.get_frame_data()){
        delay(1); 
    }
    return SeeedTFLidar.get_distance();
}

void display(uint16_t lidar_data,uint8_t mode){

    spr.fillSprite(TFT_WHITE);
    //Settings for the line graph title
    auto header =  text(0, 0)
                .value("Lidar Terminal")
                .align(center)
                .valign(vcenter)
                .width(tft.width())
                .color(green)
                .thickness(3);
    header.height(header.font_height() * 2);
    header.draw(); //Header height is the twice the height of the font
    if (LINE_DIS == mode){
        if (data.size() == max_size) {
            data.pop();//this is used to remove the first read variable
        }
        data.push(lidar_data); //read variables and store in data
    //Settings for the line graph
        auto content = line_chart(10, header.height()); //(x,y) where the line graph begins
            content
                    .height(tft.height() - header.height() * 1.5) //actual height of the line chart
                    .width(tft.width() - content.x() * 2) //actual width of the line chart
                    .based_on(0.0) //Starting point of y-axis, must be a float
                    .show_circle(false) //drawing a cirle at each point, default is on.
                    .value(data) //passing through the data to line graph
                    .color(TFT_RED) //Setting the color for the line
                    .draw();
    }
    else if (STRING_DIS == mode){
        for(int8_t line_index = 0;line_index < 5 ; line_index++)
        {
            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);
        }        
        auto header =  text(0, 0)
                    .thickness(1);
        spr.setFreeFont(&FreeSansBoldOblique24pt7b); 
        spr.setTextColor(TFT_BLUE);
        spr.drawFloat(lidar_data / 100.00,2,80,110);
        spr.drawString(" M",80 + 90,110,1);

    }
    spr.pushSprite(0, 0);

}
```

:::success
     Uma imagem será exibida na tela do Wio Terminal como abaixo se tudo correr bem.
:::

![](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/img/Outcome_wio.jpg)

## Recursos

---

- **[Datasheet]** [Grove-TF-Mini-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/SJ-PM-TF-Luna-A03-Product-Manual.pdf)
- **[Datasheet]** [Grove-TF-Luna-LiDAR
](https://files.seeedstudio.com/wiki/Grove-TF_Mini_LiDAR/res/DE-LiDAR%20TFmini%20Datasheet-V1.7-EN.pdf)
- **[ZIP]** [Seeed_Arduino_TFlidar](https://github.com/Seeed-Studio/Seeed_Arduino_TFlidar/archive/master.zip)
- **[ZIP]** [Seeed_Arduino_Linechart](https://github.com/Seeed-Studio/Seeed_Arduino_Linechart/archive/master.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
