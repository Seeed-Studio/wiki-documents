---
description: Xbox
title: Xbox
keywords:
  - Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBH-Xbox
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-USBH-Xbox/
---

# Usando o Controle Xbox ONE no Wio Terminal

Este repositório apresenta como usar um Controle Xbox ONE no Wio Terminal. Com este exemplo, você pode usar um Controle Xbox para jogar usando o Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"/></div>

## Requisitos

Para trabalhar com este exemplo, você vai precisar de um **Adaptador USB OTG** e de um **Módulo USB para Serial**, onde o adaptador OTG é usado para conectar o controle Xbox e o módulo USB para Serial para ler as saídas do Wio Terminal.

**Nota:** O Controle Xbox ONE é usado neste exemplo. Se estiver usando o controle Xbox 360 ou clones, verifique `XBOXOLD.ino` no exemplo.

## Procedimentos

1. Envie o código para o Wio Terminal usando o `Arduino IDE`.

2. Desconecte o cabo USB tipo-C do Wio Terminal que foi usado para enviar o código.

3. Conecte o seu **Controle Xbox ONE** ao **adaptador OTG** e depois à porta USB-C do Wio Terminal.
      - **`Xbox ONE Controller`** -> **`OTG Adaptor`** -> **`Wio Terminal(Type-C Port)`**

4. Conecte o **Módulo USB para Serial** ao Wio Terminal da seguinte forma:
      - **`TXD(USB to Serial Module)`** -> **`RXD(Pin 10 on Wio Terminal)`**
      - **`RXD(USB to Serial Module)`** -> **`TXD(Pin 8 on Wio Terminal)`**
      - **`3.3V(USB to Serial Module)`** -> **`3.3V(Pin 1 on Wio Terminal)`**
      - **`GND(USB to Serial Module)`** -> **`GND(Pin 6 on Wio Terminal)`**

5. Conecte o Módulo USB para Serial ao seu computador. Dependendo de qual Módulo USB para Serial for usado, **baixe o driver USB** para o módulo para que o seu computador possa reconhecê‑lo.

6. Para usuários Windows, você pode abrir o Gerenciador de Dispositivos para verificar se ele foi reconhecido. Um novo `COM` deve aparecer.
      - Para usuários Mac, use `ls /dev/cu.*` no terminal para verificar a disponibilidade do módulo.

7. Para visualizar os dados da Serial:
      - **Windows:** Baixe e instale o [PuTTY](https://www.putty.org/). Selecione `Serial` e altere o `COM` em Serial line para o COM que apareceu no Gerenciador de Dispositivos, também altere a velocidade para `115200` e pressione Open. Um terminal deve aparecer. Agora, se você começar a pressionar botões no controle Xbox ONE, deverá ver a saída serial!

      - **Mac:** Abra o terminal e instale o `screen` usando `brew install screen`. Assim que estiver instalado, use o comando **`screen /dev/cu.usbserial 115200`** onde `/dev/cu.usbserial` deve corresponder ao visto acima. Você deverá ver a saída serial do Wio Terminal!

**Nota Importante:** Como a porta USB do Wio Terminal está sendo usada para USB, para enviar outro programa ao Wio Terminal é necessário entrar no modo Bootloader pressionando o botão liga/desliga duas vezes (o LED ficará mais fraco), então você deverá conseguir ver a porta novamente.

## Configurações de USB Host

Para habilitar o USB Host no Wio Terminal, você deve configurar dois pinos. É necessário definir `PIN_USB_HOST_ENABLE` para **LOW** e `OUTPUT_CTR_5V` para **HIGH**.

Você pode fazer isso simplesmente adicionando o seguinte código em `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código Completo

```cpp
#include <XBOXONE.h>
#define SerialDebug Serial1

USBHost UsbH;
XBOXONE Xbox(&UsbH);

void setup() {
  SerialDebug.begin(115200);
  if (UsbH.Init()) {
    SerialDebug.print(F("\r\nUSB host did not start"));
    while (1); //halt
  }
  SerialDebug.print(F("\r\nXBOX USB Library Started"));

  //Coqnfigure pins to enable USB Host on Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}
void loop() {
  UsbH.Task();
  if (Xbox.XboxOneConnected) {
    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {
        SerialDebug.print(F("LeftHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {
        SerialDebug.print(F("LeftHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {
        SerialDebug.print(F("RightHatX: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatX));
        SerialDebug.print("\t");
      }
      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {
        SerialDebug.print(F("RightHatY: "));
        SerialDebug.print(Xbox.getAnalogHat(RightHatY));
      }
      SerialDebug.println();
    }

    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {
      if (Xbox.getButtonPress(L2) > 0) {
        SerialDebug.print(F("L2: "));
        SerialDebug.print(Xbox.getButtonPress(L2));
        SerialDebug.print("\t");
      }
      if (Xbox.getButtonPress(R2) > 0) {
        SerialDebug.print(F("R2: "));
        SerialDebug.print(Xbox.getButtonPress(R2));
        SerialDebug.print("\t");
      }
      SerialDebug.println();
    }

    // Set rumble effect
    static uint16_t oldL2Value, oldR2Value;
    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {
      oldL2Value = Xbox.getButtonPress(L2);
      oldR2Value = Xbox.getButtonPress(R2);
      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // Map the trigger values into a byte
      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);
      if (leftRumble > 0 || rightRumble > 0)
        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);
      else
        Xbox.setRumbleOff();
    }

    if (Xbox.getButtonClick(UP))
      SerialDebug.println(F("Up"));
    if (Xbox.getButtonClick(DOWN))
      SerialDebug.println(F("Down"));
    if (Xbox.getButtonClick(LEFT))
      SerialDebug.println(F("Left"));
    if (Xbox.getButtonClick(RIGHT))
      SerialDebug.println(F("Right"));

    if (Xbox.getButtonClick(START))
      SerialDebug.println(F("Start"));
    if (Xbox.getButtonClick(BACK))
      SerialDebug.println(F("Back"));
    if (Xbox.getButtonClick(XBOX))
      SerialDebug.println(F("Xbox"));
    if (Xbox.getButtonClick(SYNC))
      SerialDebug.println(F("Sync"));

    if (Xbox.getButtonClick(L1))
      SerialDebug.println(F("L1"));
    if (Xbox.getButtonClick(R1))
      SerialDebug.println(F("R1"));
    if (Xbox.getButtonClick(L2))
      SerialDebug.println(F("L2"));
    if (Xbox.getButtonClick(R2))
      SerialDebug.println(F("R2"));
    if (Xbox.getButtonClick(L3))
      SerialDebug.println(F("L3"));
    if (Xbox.getButtonClick(R3))
      SerialDebug.println(F("R3"));


    if (Xbox.getButtonClick(A))
      SerialDebug.println(F("A"));
    if (Xbox.getButtonClick(B))
      SerialDebug.println(F("B"));
    if (Xbox.getButtonClick(X))
      SerialDebug.println(F("X"));
    if (Xbox.getButtonClick(Y))
      SerialDebug.println(F("Y"));
  }
  delay(1);
}
```
