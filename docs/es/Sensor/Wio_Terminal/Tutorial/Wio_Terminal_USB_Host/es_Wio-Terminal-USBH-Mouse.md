---
description: Ratón
title: Ratón
keywords:
- Wio_terminal USB_Host
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-USBH-Mouse
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Usando Ratón USB en Wio Terminal

Este repositorio presenta cómo usar un Ratón USB en Wio Terminal. ¡Puedes implementar este ejemplo para introducir datos desde un Ratón a Wio Terminal!

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108160611.gif"/></div>

## Requisitos

Para trabajar con este ejemplo, necesitarás un **Adaptador USB OTG** y un **Módulo USB a Serial**, donde el adaptador OTG se usa para conectar con el Ratón y el módulo USB a Serial para leer las salidas desde Wio Terminal.

## Procedimientos

1. Sube el código a Wio Terminal usando `Arduino IDE`.

2. Desconecta el cable USB tipo-C de Wio Terminal que se usó para subir el código.

3. Conecta tu **Ratón** al **adaptador OTG** y luego al puerto USB-C de Wio Terminal.
      - **`Ratón`** -> **`Adaptador OTG`** -> **`Wio Terminal(Puerto Tipo-C)`**

4. Conecta el **Módulo USB a Serial** al Wio Terminal como sigue:
      - **`TXD(Módulo USB a Serial)`** -> **`RXD(Pin 10 en Wio Terminal)`**
      - **`RXD(Módulo USB a Serial)`** -> **`TXD(Pin 8 en Wio Terminal)`**
      - **`3.3V(Módulo USB a Serial)`** -> **`3.3V(Pin 1 en Wio Terminal)`**
      - **`GND(Módulo USB a Serial)`** -> **`GND(Pin 6 en Wio Terminal)`**

5. Conecta el Módulo USB a Serial a tu computadora. Dependiendo de qué Módulo USB a Serial uses, **descarga el controlador USB** para el módulo para que tu computadora pueda reconocerlo.

6. Para usuarios de Windows, puedes abrir el Administrador de Dispositivos para verificar si es reconocido. Debería aparecer un nuevo `COM`.
      - Para usuarios de Mac, usa `ls /dev/cu.*` en terminal para verificar la disponibilidad del módulo.

7. Para ver datos desde Serial:
      - **Windows:** Descarga e instala [PuTTY](https://www.putty.org/). Selecciona `Serial` y cambia el `COM` en línea Serial al COM que apareció en el Administrador de Dispositivos, también cambia la Velocidad a `115200` y presiona Abrir. Debería aparecer una Terminal. Ahora, si empiezas a presionar y mover el ratón, ¡deberías ver la salida serial!

      - **Mac:** Abre terminal e instala `screen` usando `brew install screen`. Una vez instalado, usa el comando **`screen /dev/cu.usbserial 115200`** donde `/dev/cu.usbserial` debería coincidir con lo anterior. ¡Deberías poder ver la salida serial desde Wio Terminal!

**Nota Importante:** Debido a que el puerto USB de Wio Terminal está siendo usado para USB, para subir otro programa a Wio Terminal requiere entrar al modo Bootloader presionando el botón de encendido dos veces(el LED se atenuará), entonces deberías poder ver el puerto nuevamente.

## Configuraciones de Host USB

Para habilitar Host USB en Wio Terminal, debes configurar dos pines. Necesitas establecer `PIN_USB_HOST_ENABLE` a **LOW** y `OUTPUT_CTR_5V` a **HIGH**.

Puedes hacer esto simplemente añadiendo el siguiente código en el `void setup()`:

```cpp
digitalWrite(PIN_USB_HOST_ENABLE, LOW);
digitalWrite(OUTPUT_CTR_5V, HIGH);
```

## Complete Code

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
