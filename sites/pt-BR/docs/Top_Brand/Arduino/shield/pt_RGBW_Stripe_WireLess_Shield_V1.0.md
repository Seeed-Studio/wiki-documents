---
description: RGBW_Stripe_WireLess_Shield_V1.0
title: Shield Sem Fio para Faixa RGBW V1.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RGBW_Stripe_WireLess_Shield_V1.0
last_update:
  date: 02/02/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/RGBW_Stripe_WireLess_Shield_V1.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_rev1_face.jpg" alt="pir" width={600} height="auto" /></p>

O Shield Sem Fio para Faixa RGBW possui 4 saídas PWM para conectar uma faixa de LED RGBW.
Cada uma pode controlar uma carga de 1,5 A com tensão de 5 a 24 V.
Controle integrado em Arduino 5 permite facilmente fornecer energia a partir da fonte de alimentação de entrada.
O fusível autorregenerativo protege a faixa de LED contra sobrecorrente.
Para o controle remoto da fita RGB é utilizado o transceptor popular nRF24L01+.
O mais interessante é que a placa possui memória, e agora você pode atualizar o firmware do seu Arduino pelo ar!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_top.jpg" alt="pir" width={600} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW_.jpg" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/RGBW-Strip-WireLess-Shield-V10-p-2629.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

* Baseado em arquitetura compatível com Arduino (DualOptiboot)

* Compatibilidade com faixa de LED RGB de 12 - 24V

* 4 saídas PWM (RGBW)

* 64 kb de memória flash SPI / E2prom on-board (para atualizações de firmware OTA)

* LED automático de atividade RF integrado (para nRF24L01 +)

* Mini transceptor 2.4G nRF24L01 +

* Fusível autorregenerativo

* Botão embutido

* Conector compatível com GROVE: I2C

## Layout e esquemáticos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-top.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/RGBW-bottom.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/RGBW_Stripe_WireLess_Shield_V1.0/img/Scheme_RGBW.PNG" alt="pir" width={600} height="auto" /></p>

## Bibliotecas

### Bibliotecas necessárias

### Código de demonstração (exemplo)

```cpp

int L_RED = 6;
int L_GREEN = 9;
int L_BLUE = 3;
int L_WHITE = 5;

int brightness = 0;
int fadeAmount = 5;

void setup()  {
  pinMode(L_RED, OUTPUT);
  pinMode(L_GREEN, OUTPUT);
  pinMode(L_BLUE, OUTPUT);
  pinMode(L_WHITE, OUTPUT);
}

void loop()  {
  // RED
  analogWrite(L_RED, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // GREEN
  analogWrite(L_GREEN, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // BLUE
  analogWrite(L_BLUE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
  // WHITE
  analogWrite(L_WHITE, brightness);
  brightness = brightness + fadeAmount;
  if (brightness == 0 || brightness == 255) {
    fadeAmount = -fadeAmount ;
  }
}
```

## Rastreador de Versões

| Revisão | Descrição | Lançamento |
|----------|-------------|---------|
| 1.0 rev 1 | Versão pública | 19.11.2015 |

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
