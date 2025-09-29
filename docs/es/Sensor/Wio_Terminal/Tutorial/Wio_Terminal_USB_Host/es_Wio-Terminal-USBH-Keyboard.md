---
description: Teclado
title: Teclado
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Keyboard
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Usando Teclado USB en Wio Terminal

Este repositorio presenta cómo usar un teclado USB en Wio Terminal. ¡Puedes implementar este ejemplo para introducir datos desde un teclado a Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108143407.gif"/></div>

## Requisitos

Para trabajar con este ejemplo, necesitarás un **Adaptador USB OTG** y un **Módulo USB a Serie**, donde el adaptador OTG se usa para conectar con el teclado y el módulo USB a Serie para leer las salidas de Wio Terminal.

## Procedimientos

1. Sube el código a Wio Terminal usando `Arduino IDE`.

2. Desconecta el cable USB tipo-C de Wio Terminal que se usó para subir el código.

3. Conecta tu **teclado** al **adaptador OTG** y luego al puerto USB-C de Wio Terminal.
      - **`Teclado`** -> **`Adaptador OTG`** -> **`Wio Terminal(Puerto Tipo-C)`**

4. Conecta el **Módulo USB a Serie** al Wio Terminal como sigue:
      - **`TXD(Módulo USB a Serie)`** -> **`RXD(Pin 10 en Wio Terminal)`**
      - **`RXD(Módulo USB a Serie)`** -> **`TXD(Pin 8 en Wio Terminal)`**
      - **`3.3V(Módulo USB a Serie)`** -> **`3.3V(Pin 1 en Wio Terminal)`**
      - **`GND(Módulo USB a Serie)`** -> **`GND(Pin 6 en Wio Terminal)`**

5. Conecta el Módulo USB a Serie a tu computadora. Dependiendo de qué Módulo USB a Serie uses, **descarga el controlador USB** para el módulo para que tu computadora pueda reconocerlo.

6. Para usuarios de Windows, puedes abrir el Administrador de Dispositivos para verificar si es reconocido. Debería aparecer un nuevo `COM`.
      - Para usuarios de Mac, usa `ls /dev/cu.*` en terminal para verificar la disponibilidad del módulo.

7. Para ver datos desde Serie:
      - **Windows:** Descarga e instala [PuTTY](https://www.putty.org/). Selecciona `Serial` y cambia el `COM` en línea Serie al COM que apareció en el Administrador de Dispositivos, también cambia la Velocidad a `115200` y presiona Abrir. Debería aparecer una Terminal. Ahora, si empiezas a escribir en el teclado conectado, ¡deberías ver la salida serie!

      - **Mac:** Abre terminal e instala `screen` usando `brew install screen`. Una vez instalado, usa el comando **`screen /dev/cu.usbserial 115200`** donde `/dev/cu.usbserial` debería coincidir con lo anterior. ¡Deberías poder ver la salida serie de Wio Terminal!

**Nota Importante:** Debido a que el puerto USB de Wio Terminal está siendo usado para USB, para subir otro programa a Wio Terminal requiere entrar al modo Bootloader presionando el botón de encendido dos veces(el LED se atenuará), entonces deberías poder ver el puerto nuevamente.

## Configuraciones de Host USB

Para habilitar Host USB en Wio Terminal, debes configurar dos pines. Necesitas establecer `PIN_USB_HOST_ENABLE` a **LOW** y `OUTPUT_CTR_5V` a **HIGH**.

Puedes hacer esto simplemente añadiendo el siguiente código en el `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Código Completo

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