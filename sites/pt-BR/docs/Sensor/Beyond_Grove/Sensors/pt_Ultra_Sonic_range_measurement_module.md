---
title: Módulo de medição de distância ultrassônica
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Ultra_Sonic_range_measurement_module/
slug: /Ultra_Sonic_range_measurement_module
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Ultra_Sonic_range_measurement_module/
---
![](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/front.jpg)

O sensor ultrassônico da Seeed é um módulo de medição de distância sem contato, que também é compatível com electronic brick.
Ele é projetado para fácil uso em projetos modulares
com desempenho industrial.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)

##   Recursos

*   Faixa de detecção: 3cm-4m
*   Melhor em ângulo de 30 graus
*   Interface compatível com electronic brick
*   Fonte de alimentação de 5VDC
*   Compatível com breadboard
*   Transdutor duplo
*   Biblioteca Arduino pronta

##   Especificação

<table>
<tr>
<td width="400px"> Tensão de alimentação</td>
<td width="200px"> 5V</td>
</tr>
<tr>
<td> Consumo global de corrente</td>
<td> 15 mA</td>
</tr>
<tr>
<td>Frequência ultrassônica</td>
<td> 40k Hz</td>
</tr>
<tr>
<td> Alcance máximo</td>
<td> 400 cm</td>
</tr>
<tr>
<td> Alcance mínimo</td>
<td> 3 cm</td>
</tr>
<tr>
<td> Resolução</td>
<td> 1 cm</td>
</tr>
<tr>
<td> Largura do pulso de disparo</td>
<td> 10 μs</td>
</tr>
<tr>
<td> Dimensões externas</td>
<td> 43x20x15 mm</td>
</tr>
</table>

## Primeiros passos


Um curto pulso ultrassônico é transmitido no tempo 0 e refletido por um objeto. O sensor recebe esse sinal e o converte em um sinal elétrico. O próximo pulso pode ser transmitido quando o eco desaparecer. Esse período de tempo é chamado de período de ciclo. O período de ciclo recomendado não deve ser inferior a 50ms. Se um pulso de disparo com largura de 10μs for enviado ao pino de sinal, o módulo ultrassônico irá emitir oito sinais ultrassônicos de 40kHz e detectar o eco de volta. A distância medida é proporcional à largura do pulso de eco e pode ser calculada pela fórmula acima. Se nenhum obstáculo for detectado, o pino de saída fornecerá um sinal em nível alto de 38ms.

### Brincando com Arduino

#### Hardware

- **Passo 1.** Prepare os itens abaixo:

| Seeeduino V4.2 | Base Shield| Ultra_Sonic_range_measurement_module |
|--------------|-------------|-----------------|
|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Ultra_Sonic_range_measurement_module/img/45d_small.jpg)|
|[Adquira agora](https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html)|[Adquira agora](https://www.seeedstudio.com/Base-Shield-V2-p-1378.html)|[Adquira agora](https://www.seeedstudio.com/ultra-sonic-range-measurement-module-p-626.html?cPath=144_149)|

- **Passo 2.** Conecte o Ultra_Sonic_range_measurement_module à porta **D2** do Grove-Base Shield.
- **Passo 3.** Conecte o Grove - Base Shield ao Seeeduino.
- **Passo 4.** Conecte o Seeeduino ao PC por meio de um cabo USB.

:::note
	Se não tivermos o Grove Base Shield, também podemos conectar este módulo diretamente ao Seeeduino conforme abaixo.
:::
| Seeeduino       |  ??? |
|---------------|-------------------------|
| 5V           | Vermelho                     |
| GND           | Preto                   |
| Not Conencted | Branco                   |
| D2            | Amarelo                  |

#### Software

**Passo 1.** Copie o código e grave-o na placa controladora.
**Passo 2.**  Faça o upload do código e abra a janela do monitor.

```cpp
#include "Arduino.h"
class Ultrasonic
{
    public:
    Ultrasonic(int pin);
    void DistanceMeasure(void);
    double microsecondsToCentimeters(void);
    double microsecondsToInches(void);
    private:
    int this_pin;//pin number of Arduino that is connected with SIG pin of Ultrasonic Ranger.
    long duration;// the Pulse time received;
};
Ultrasonic::Ultrasonic(int pin)
{
    this_pin = pin;
}
/*Begin the detection and get the pulse back signal*/
void Ultrasonic::DistanceMeasure(void)
{
    pinMode(this_pin, OUTPUT);
    digitalWrite(this_pin, LOW);
    delayMicroseconds(2);
    digitalWrite(this_pin, HIGH);
    delayMicroseconds(5);
    digitalWrite(this_pin,LOW);
    pinMode(this_pin,INPUT);
    duration = pulseIn(this_pin,HIGH);
}
/*The measured distance from the range 0 to 400 Centimeters*/
double Ultrasonic::microsecondsToCentimeters(void)
{
    return duration/29.0/2.0;
}
/*The measured distance from the range 0 to 157 Inches*/
double Ultrasonic::microsecondsToInches(void)
{
    return duration/74.0/2.0;
}

Ultrasonic ultrasonic(2);
void setup()
{
    Serial.begin(9600);
}
void loop()
{
    double RangeInInches;
    double RangeInCentimeters;
    ultrasonic.DistanceMeasure();// get the current signal time;
    RangeInInches = ultrasonic.microsecondsToInches();//convert the time to inches;
    RangeInCentimeters = ultrasonic.microsecondsToCentimeters();//convert the time to centimeters
    Serial.println("The distance to obstacles in front is: ");
    Serial.print(RangeInInches);//0~157 inches
    Serial.println(" inch");
    Serial.print(RangeInCentimeters);//0~400cm
    Serial.println(" cm");
    delay(1000);
}
```

## Suporte técnico e discussão de produtos
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>