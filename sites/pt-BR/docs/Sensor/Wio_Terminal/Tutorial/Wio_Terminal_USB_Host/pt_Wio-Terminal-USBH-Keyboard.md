---
description: Teclado
title: Teclado
keywords:
  - Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-USBH-Keyboard
last_update:
  date: 1/17/2023
  author: jianjing Huang
createdAt: '2023-01-17'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-USBH-Keyboard/
---

# Usando Teclado USB no Wio Terminal

Este repositório apresenta como usar um teclado USB no Wio Terminal. Você pode implementar este exemplo para inserir dados de um teclado no Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif"/></div>

## Requisitos

Para trabalhar com este exemplo, você vai precisar de um **adaptador USB OTG** e de um **módulo USB para serial**, onde o adaptador OTG é usado para conectar o teclado e o módulo USB para serial para ler as saídas do Wio Terminal.

## Procedimentos

1. Envie o código para o Wio Terminal usando o `Arduino IDE`.

2. Desconecte o cabo USB tipo C do Wio Terminal que foi usado para enviar o código.

3. Conecte o seu **teclado** ao **adaptador OTG** e então à porta USB-C do Wio Terminal.
      - **`Keyboard`** -> **`OTG Adaptor`** -> **`Wio Terminal(Type-C Port)`**

4. Conecte o **módulo USB para serial** ao Wio Terminal da seguinte forma:
      - **`TXD(USB to Serial Module)`** -> **`RXD(Pin 10 on Wio Terminal)`**
      - **`RXD(USB to Serial Module)`** -> **`TXD(Pin 8 on Wio Terminal)`**
      - **`3.3V(USB to Serial Module)`** -> **`3.3V(Pin 1 on Wio Terminal)`**
      - **`GND(USB to Serial Module)`** -> **`GND(Pin 6 on Wio Terminal)`**

5. Conecte o módulo USB para serial ao seu computador. Dependendo de qual módulo USB para serial for usado, **baixe o driver USB** para o módulo para que o seu computador possa reconhecê-lo.

6. Para usuários Windows, você pode abrir o Gerenciador de Dispositivos para verificar se ele foi reconhecido. Um novo `COM` deve aparecer.
      - Para usuários Mac, use `ls /dev/cu.*` no terminal para verificar a disponibilidade do módulo.

7. Para visualizar os dados da serial:
      - **Windows:** Baixe e instale o [PuTTY](https://www.putty.org/). Selecione `Serial` e altere o `COM` em Serial line para o COM que apareceu no Gerenciador de Dispositivos, e também altere a velocidade para `115200` e pressione Open. Um terminal deve aparecer. Agora, se você começar a digitar no teclado conectado, deverá ver a saída serial!

      - **Mac:** Abra o terminal e instale o `screen` usando `brew install screen`. Uma vez instalado, use o comando **`screen /dev/cu.usbserial 115200`** onde `/dev/cu.usbserial` deve corresponder ao mostrado acima. Você deverá ver a saída serial do Wio Terminal!

**Nota importante:** Como a porta USB do Wio Terminal está sendo usada para USB, para enviar outro programa para o Wio Terminal é necessário entrar no modo Bootloader pressionando o botão de energia duas vezes (o LED ficará mais fraco); então você deverá conseguir ver a porta novamente.

## Configurações de USB Host

Para habilitar o USB Host no Wio Terminal, você deve configurar dois pinos. É necessário definir `PIN_USB_HOST_ENABLE` para **LOW** e `OUTPUT_CTR_5V` para **HIGH**.

Você pode fazer isso simplesmente adicionando o seguinte código em `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código completo

```cpp
#include <KeyboardController.h>
#define SerialDebug Serial1


// Initialize USB Controller
USBHost usb;

// Attach keyboard controller to USB
KeyboardController keyboard(usb);

void printKey();

// This function intercepts key press
void keyPressed() {
  SerialDebug.print("Pressed:  ");
  printKey();
}

// This function intercepts key release
void keyReleased() {
  SerialDebug.print("Released: ");
  printKey();
}

void printKey() {
  // getOemKey() returns the OEM-code associated with the key
  SerialDebug.print(" key:");
  SerialDebug.print(keyboard.getOemKey());

  // getModifiers() returns a bits field with the modifiers-keys
  int mod = keyboard.getModifiers();
  SerialDebug.print(" mod:");
  SerialDebug.print(mod);

  SerialDebug.print(" => ");

  if (mod & LeftCtrl)
    SerialDebug.print("L-Ctrl ");
  if (mod & LeftShift)
    SerialDebug.print("L-Shift ");
  if (mod & Alt)
    SerialDebug.print("Alt ");
  if (mod & LeftCmd)
    SerialDebug.print("L-Cmd ");
  if (mod & RightCtrl)
    SerialDebug.print("R-Ctrl ");
  if (mod & RightShift)
    SerialDebug.print("R-Shift ");
  if (mod & AltGr)
    SerialDebug.print("AltGr ");
  if (mod & RightCmd)
    SerialDebug.print("R-Cmd ");

  // getKey() returns the ASCII translation of OEM key
  // combined with modifiers.
  SerialDebug.write(keyboard.getKey());
  SerialDebug.println();
}

uint32_t lastUSBstate = 0;

void setup()
{
  SerialDebug.begin( 115200 );
  SerialDebug.println("Keyboard Controller Program started");

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
