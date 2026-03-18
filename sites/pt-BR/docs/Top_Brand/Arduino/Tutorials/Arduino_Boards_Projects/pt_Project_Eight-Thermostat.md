---
description: Projeto Oito - Termostato
title: Projeto Oito - Termostato
keywords:
  - Arduino
  - Arduino_Boards_Projects
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Project_Eight-Thermostat
last_update:
  date: 2/15/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Project_Eight-Thermostat/
---

<!-- ---
name: Project Eight - Thermostat
category: Tutorial
oldwikiname:  Project Eight - Thermostat
prodimagename:  
surveyurl: https://www.research.net/r/Project_Eight-Thermostat
--- -->

O projeto final da nossa série pode parecer complexo, mas é bastante simples. Usamos o potenciômetro para permitir que o usuário insira um valor de temperatura e, utilizando o sensor de temperatura – se a temperatura ambiente subir acima do valor definido pelo potenciômetro, o relé é ativado.

1. Conecte o Sensor de Temperatura ao conector de entrada Analógica A0/A1, como foi feito no Projeto 7.
2. O Grove produz uma tensão analógica em sua saída D1, que é conectada à entrada analógica A0 do Arduino no conector de entrada A0/A1.

3. Conecte o Potenciômetro ao conector de entrada Analógica A4/A5.

4. O Potenciômetro produz uma tensão analógica em sua saída D1, que é conectada à entrada analógica A4 do Arduino no conector de entrada A4/A5.
 Conecte o Relé ao conector de entrada D2/D3.

5. O pino D2 do Arduino envia um sinal para o Relé no conector D1. A luz vermelha do Relé indica se o relé está ligado ou desligado, e o relé emite um som de clique quando comuta.

 ![](https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg)

 _**Agora faça o upload do seguinte sketch Arduino:**_

```cpp
// Project Eight - Thermostat
//

int a,c,d;
int z=3975;
int relaypin=2;
float b, q, resistance, temperature;

void setup()
{
  pinMode(relaypin, OUTPUT);
}

void loop()
{
  a=analogRead(4);
  b=0.0488*a;
  c=int(b);
  q=analogRead(0);
  resistance=(float)(1023-q)*10000/q;
  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;
  d=int(temperature);
  if (d>=c)
  {
    digitalWrite(relaypin, HIGH);
    delay(500);
  }
  if (d<c)
  {
    digitalWrite(relaypin, LOW);
    delay(500);
  }
}
```

Tente girar o potenciômetro para a direita e para a esquerda e veja se o relé liga ou desliga.

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
