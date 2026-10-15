---
description: Mouse
title: Mouse
keywords:
  - Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBH-Mouse
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-USBH-Mouse/
---

# Usando Mouse USB no Wio Terminal

Este repositório apresenta como usar um Mouse USB no Wio Terminal. Você pode implementar este exemplo para inserir dados de um Mouse no Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108160611.gif"/></div>

## Requisitos

Para trabalhar com este exemplo, você precisará de um **Adaptador USB OTG** e de um **Módulo USB para Serial**, onde o adaptador OTG é usado para conectar o Mouse e o módulo USB para Serial para ler as saídas do Wio Terminal.

## Procedimentos

1. Envie o código para o Wio Terminal usando o `Arduino IDE`.

2. Desconecte o cabo USB tipo C do Wio Terminal que foi usado para enviar o código.

3. Conecte o seu **Mouse** ao **adaptador OTG** e depois à porta USB-C do Wio Terminal.
      - **`Mouse`** -> **`OTG Adaptor`** -> **`Wio Terminal(Type-C Port)`**

4. Conecte o **Módulo USB para Serial** ao Wio Terminal da seguinte forma:
      - **`TXD(USB to Serial Module)`** -> **`RXD(Pin 10 on Wio Terminal)`**
      - **`RXD(USB to Serial Module)`** -> **`TXD(Pin 8 on Wio Terminal)`**
      - **`3.3V(USB to Serial Module)`** -> **`3.3V(Pin 1 on Wio Terminal)`**
      - **`GND(USB to Serial Module)`** -> **`GND(Pin 6 on Wio Terminal)`**

5. Conecte o Módulo USB para Serial ao seu computador. Dependendo de qual Módulo USB para Serial for usado, **faça o download do driver USB** para o módulo para que o seu computador possa reconhecê‑lo.

6. Para usuário Windows, você pode abrir o Device Manager para verificar se ele foi reconhecido. Um novo `COM` deverá aparecer.
      - Para usuário Mac, use `ls /dev/cu.*` no terminal para verificar a disponibilidade do módulo.

7. Para visualizar os dados da Serial:
      - **Windows:** Baixe e instale o [PuTTY](https://www.putty.org/). Selecione `Serial` e altere o `COM` em Serial line para o COM que apareceu no Device Manager, também altere a Speed para `115200` e pressione Open. Um Terminal deverá aparecer. Agora, se você começar a clicar e mover o mouse, deverá ver a saída serial!

      - **Mac:** Abra o terminal e instale o `screen` usando `brew install screen`. Uma vez instalado, use o comando **`screen /dev/cu.usbserial 115200`** em que `/dev/cu.usbserial` deve corresponder ao de cima. Você deverá ver a saída serial do Wio Terminal!

**Nota Importante:** Como a porta USB do Wio Terminal está sendo usada para USB, para enviar outro programa ao Wio Terminal é necessário entrar no modo Bootloader pressionando o botão liga/desliga duas vezes (o LED ficará fraco), então você deverá conseguir ver a porta novamente.

## Configurações de USB Host

Para habilitar o USB Host no Wio Terminal, você deve configurar dois pinos. É necessário definir `PIN_USB_HOST_ENABLE` para **LOW** e `OUTPUT_CTR_5V` para **HIGH**.

Você pode fazer isso simplesmente adicionando o seguinte código em `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código Completo

```cpp
#include <MouseController.h>
#define SerialDebug Serial1

uint32_t lastUSBstate = 0;

// Initialize USB Controller
USBHost usb;

// Attach mouse controller to USB
MouseController mouse(usb);

// variables for mouse button states
bool leftButton = false;
bool middleButton = false;
bool rightButton = false;

// This function intercepts mouse movements
void mouseMoved() {
  SerialDebug.print("Move: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// This function intercepts mouse movements while a button is pressed
void mouseDragged() {
  SerialDebug.print("DRAG: ");
  SerialDebug.print(mouse.getXChange());
  SerialDebug.print(", ");
  SerialDebug.println(mouse.getYChange());
}

// This function intercepts mouse button press
void mousePressed() {
  SerialDebug.print("Pressed: ");
  if (mouse.getButton(LEFT_BUTTON)) {
    SerialDebug.print("L");
    leftButton = true;
  }
  if (mouse.getButton(MIDDLE_BUTTON)) {
    SerialDebug.print("M");
    middleButton = true;
  }
  if (mouse.getButton(RIGHT_BUTTON)) {
    SerialDebug.print("R");
    rightButton = true;
  }
  SerialDebug.println();
}

// This function intercepts mouse button release
void mouseReleased() {
  SerialDebug.print("Released: ");
  if (!mouse.getButton(LEFT_BUTTON) && leftButton == true) {
    SerialDebug.print("L");
    leftButton = false;
  }
  if (!mouse.getButton(MIDDLE_BUTTON) && middleButton == true) {
    SerialDebug.print("M");
    middleButton = false;
  }
  if (!mouse.getButton(RIGHT_BUTTON) && rightButton == true) {
    SerialDebug.print("R");
    rightButton = false;
  }
  SerialDebug.println();
}

void setup()
{
  SerialDebug.begin( 115200 );
  SerialDebug.println("Mouse Controller Program started");

  if (usb.Init())
      SerialDebug.println("USB host did not start.");

  delay( 20 );

  //Coqnfigure pins to enable USB Host on Wio Terminal
  digitalWrite(PIN_USB_HOST_ENABLE, LOW);
  digitalWrite(OUTPUT_CTR_5V, HIGH);

}

void loop()
{
  // Process USB tasks
  usb.Task();

  uint32_t currentUSBstate = usb.getUsbTaskState();
  if (lastUSBstate != currentUSBstate) {
    SerialDebug.print("USB state changed: 0x");
    SerialDebug.print(lastUSBstate, HEX);
    SerialDebug.print(" -> 0x");
    SerialDebug.println(currentUSBstate, HEX);
    switch (currentUSBstate) {
      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("Device Attached"); break;
      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("Detached, waiting for Device"); break;
      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("Resetting Device"); break;
      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("Reset complete"); break;
      case USB_STATE_CONFIGURING: SerialDebug.println("USB Configuring"); break;
      case USB_STATE_RUNNING: SerialDebug.println("USB Running"); break;
    }
    lastUSBstate = currentUSBstate;
  }
}
```
