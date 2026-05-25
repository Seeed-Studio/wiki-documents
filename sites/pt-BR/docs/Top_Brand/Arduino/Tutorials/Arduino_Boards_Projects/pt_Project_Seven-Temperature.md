---
description: Projeto Sete - Temperatura
title: Projeto Sete - Temperatura
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Seven-Temperature
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Project_Seven-Temperature/
---
<!-- ---
name: Project Seven - Temperature
category: Tutorial
oldwikiname:  Project Seven - TemperatureProject Seven - Temperature
prodimagename:
surveyurl: https://www.research.net/r/Project_Seven-Temperature
--- -->

Em nossa jornada com Grove, o próximo é o sensor de temperatura. Ele é uma forma analógica de entrada e, como descrito anteriormente, retorna um potencial de tensão relativo à temperatura ambiente. Medimos essa tensão usando um pino analógico e a convertemos em uma temperatura.

Conecte o Sensor de Temperatura ao conector de entrada Analógica A0/A1.
A unidade Grove produz uma tensão analógica em sua saída D1, que é conectada à entrada analógica A0 do Arduino no conector de entrada A0/A1.

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Conn-seven.jpg)

_**Agora faça upload do seguinte sketch Arduino:**_

```cpp
// Project Seven - temperature
//

int a;
int del=1000; // duration between temperature readings
float ctemperature;
float ftemperature;
int B=3975;
float resistance;

void setup()
{
  Serial.begin(9600);
}

void loop()
{
  a=analogRead(0);
  resistance=(float)(1023-a)*10000/a;
  ctemperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
  ftemperature=ctemperature*9/5+32;
  Serial.print(ctemperature);
  Serial.print("C ");
  Serial.print(ftemperature);
  Serial.println("F");
  delay(del);
}
```

Você pode copiar e colar as linhas acima para adicionar capacidade de temperatura aos seus próprios sketches.

Depois de ter feito o upload do sketch, abra a janela do monitor serial na IDE do Arduino e você deverá ver uma caixa semelhante a esta:

![](https://files.seeedstudio.com/wiki/Project_Seven-Temperature/img/Aq0PYQjuq.png)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
