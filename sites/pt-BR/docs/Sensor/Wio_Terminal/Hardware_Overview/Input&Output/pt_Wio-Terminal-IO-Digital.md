---
title: Digital
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IO-Digital/
slug: /Wio-Terminal-IO-Digital
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IO-Digital/
---
# Usando a Porta Digital Grove no Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif" /></div>

Este repositório demonstra como usar as Portas Grove no Wio Terminal como Portas Digitais. Você pode simplesmente usar essa funcionalidade para brincar com o Ecossistema Grove!

## Pinos Digitais do RPI

Os pinouts do Raspberry Pi são definidos como:

- `RPI_D0` -> `RPI_D8`

## Configurações da Porta Grove

Para usar a **Porta Grove configurável A/D** como porta Digital, basta defini-la da seguinte forma:

```cpp
void setup() {
    pinMode(D0, INPUT); //Configure UART TX as Digital port
}
```

### Usando a Porta Grove I2C como Porta Digital

A **porta Grove I2C** também pode ser usada como Porta Digital no Wio Terminal:

```cpp
void setup() {
    pinMode(PIN_WIRE_SCL, INPUT); //Defined SCL of I2C port as Digital Input
```

Agora, conecte seu sensor Grove à Porta Grove física!

**Observação:** Para nomes de pinos de variantes mais definidos, consulte o Esquemático e `variant.h`

## Código de Exemplo

Neste exemplo, um Grove Button e um Grove LED são usados para demonstrar:

```cpp
#define BUTTON D0 //Button to Grove UART Port
#define LED PIN_WIRE_SCL //LED to Grove I2C Port

void setup() {
  Serial.begin(115200);
  pinMode(BUTTON, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  int buttonState = digitalRead(BUTTON);
  Serial.print("Button State: ");
  Serial.println(buttonState);

  if (buttonState == HIGH) {
    digitalWrite(LED, HIGH);
  }
  else {
    digitalWrite(LED, LOW);
  }
  delay(50);
}
```

## Código de Exemplo de Saída PWM (Servo)

Neste exemplo, um Grove Servo é usado para demonstrar a saída PWM:

```cpp
#include <Servo.h>
Servo myservo;

int pos = 0;

void setup() {
  myservo.attach(D0); //Connect servo to Grove Digital Port
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) {
    // in steps of 1 degree
    myservo.write(pos);
    delay(15);
  }
  for (pos = 180; pos >= 0; pos -= 1) {
    myservo.write(pos);
    delay(15);
  }
}
```

**Observação:** Para usar a biblioteca Servo com o Wio Terminal, inclua a [versão da Adafruit](https://github.com/PaintYourDragon/Servo) para compatibilidade com SAMD51.

## UART Serial

- A Serial USB no Wio Terminal: `Serial`

- A porta UART exposta: `Serial1`

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
