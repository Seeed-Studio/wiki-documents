---
title: Analógico
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IO-Analog/
slug: /Wio-Terminal-IO-Analog
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IO-Analog/
---
# Usando a Porta Analógica Grove no Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif" /></div>

Este repositório demonstra como usar analógico como entradas no Wio Terminal. Para usar pinos analógicos no Wio Terminal, você deve usar pinos RPI.

## Pinos Analógicos RPI

Os pinos do Raspberry Pi são definidos como:

- `RPI_A0` -> `RPI_A8`

## Configurações da Porta Grove

Para usar a **Porta A/D configurável Grove** como porta analógica, simplesmente defina-a da seguinte forma:

```cpp
void setup() {
    pinMode(A0, INPUT);
}
```

Agora, conecte seu sensor Grove ao pino físico!

## Código de Exemplo

Neste exemplo, um sensor de Ruído Grove é usado para demonstrar:

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);
}
void loop() {
    int loudness = analogRead(A0);
    Serial.print("Loudness: ");
    Serial.println(loudness);
    delay(50);
}
```

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
