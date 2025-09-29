---
description: Construye una pantalla HMI para Windows/MacOS usando Wio Terminal
title: Construye una pantalla HMI para Windows/MacOS usando Wio Terminal
keywords:
- Wio_terminal USB_Client
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wio-Terminal-HMI-Usermode-SDK
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# Construye una pantalla HMI para Windows/MacOS usando Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"/></div>

En este wiki, introduciremos cómo usar [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como pantalla HMI usando el **SDK de modo usuario para ejecutar en Windows/Linux/Mac OS.** ¡Esto extiende las posibilidades de Wio Terminal en uso Industrial!

Si quieres usar Wio Terminal con Raspberry Pi como pantalla HMI, por favor revisa este [wiki](https://wiki.seeedstudio.com/es/Wio-Terminal-HMI/).

## Hardware Requerido

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

## Firmware de Wio Terminal

Primero, necesitarás subir un programa de Arduino a tu Wio Terminal a través de tu PC.

- Descarga la librería [**Seeed_Arduino_USBDISP**](https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP) aquí.

Hay dos **ejemplos**, `NullFunctional` y `USBDisplayAndMouseControl`:

1. Si quieres **mayor tasa de refresco de pantalla en Wio Terminal**, sube **`NullFunctional`** a Wio Terminal.
2. Si quieres que **Wio Terminal también actúe como un Mouse USB**, sube **`USBDisplayAndMouseControl`** a Wio Terminal.

:::note
Por favor **asegúrate de leer las notas**, para el SDK de modo usuario, `USBDISP().begin(true);` se convierte en `USBDISP().begin(true, true);`.
:::

### Método `uf2`

Por conveniencia, también proporcionamos métodos `uf2` para subir el firmware de Wio Terminal. Simplemente descarga los archivos `uf2` de abajo.

- Descarga los archivos `uf2` de [NullFunctional](http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2).

- Descarga los archivos `uf2` de [USBDisplayAndMouseControl](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2).

Entra al modo bootloader deslizando el interruptor de encendido dos veces rápidamente. Para más referencia, por favor también ve [aquí](https://wiki.seeedstudio.com/es/Wio-Terminal-Getting-Started/#faq).

Una unidad externa llamada `Arduino` debería aparecer en tu PC. Arrastra los archivos uf2 descargados a la unidad `Arduino`.

## Firmware del Dispositivo Host

Esta vez nuestro dispositivo host se convierte en nuestra PC, ¡veamos cómo puedes usar Wio Terminal como pantalla HMI con el SDK de modo usuario!

### MacOS/Linux OS - SDK de C++

- Descarga el repositorio del firmware:

```sh
cd ~
git clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git
```

- Navega a la ruta del SDK de modo usuario:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src
```

Abre el `rpusbdisp.cc` y **define macros dependiendo del firmware de tu Wio Terminal (Nullfunctional o USBDisplayAndMouseControl)**. Descomenta el que estés usando:

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"/></div>

- Navega de vuelta a la ruta del sdk de modo usuario:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk
```

- Crear y compilar el controlador:

```sh
make
```

:::note
Es posible que necesites alguna biblioteca dependiente como `lisusb`. MacOS puede usar [`brew`](https://brew.sh/) y Linux OS puede usar `apt-get` para instalar.
:::

- Navega al directorio de compilación:

```sh
cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/
```

- Ejecuta la demostración:

```sh
sudo ./rpusbdispdemo --demo 1
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"/></div>

Deberías ver que Wio Terminal comienza a mostrar, los gráficos se dibujan. El código fuente para esto está en: `seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc`.

#### Múltiples Pantallas

Este SDK de C++ también soporta múltiples pantallas (múltiples Wio Terminals), para el uso de 2 pantallas simplemente ejecuta la demo 2:

```sh
sudo ./rpusbdispdemo --demo 2
```

**Nota:** Aquí se proporcionan 4 demos de hasta 4 pantallas, puedes revisar el código fuente para referenciar tus aplicaciones.

### Windows - Python SDK

Para Windows, ¡puedes ejecutar el sdk de modo usuario en Python! Primero, asegúrate de haber instalado python e instala la biblioteca dependiente:

:::note
**Python es multiplataforma y puedes ejecutar esta demo en todas las plataformas, incluyendo Windows/Linux/MacOS**
:::

```sh
pip3 install pyusb
```

- Ve a la ruta python-demo:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- Abre el `simple-test.py` y define las macros correctas con el firmware dentro de tu Wio Terminal, y guarda.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"/></div>

- Ejecuta la demostración de Python:

```sh
python3 simple-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"/></div>

#### Múltiples Pantallas

Este SDK de Python también soporta múltiples pantallas (múltiples Wio Terminals), puedes revisar el `USBDisplay.py` como referencia.

Este ejemplo usa 4 Wio Terminals como pantallas, que tiene un formato que se ve como el siguiente:

```py
devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))
dev1 = devices[0] # device 0
dev2 = devices[1] # device 1
dev3 = devices[2] # device 2
dev4 = devices[3] # device 3
```

## Demostración Simple

Este ejemplo transfiere simplemente una imagen desde el lado de la PC al Wio Terminal usando Python.

- Ve a la ruta de la demostración:

```sh
cd ~/seeed-linux-usbdisp/drivers/python-demo/
```

- Descarga el `image.jpg` y guárdalo en la misma ubicación que `image-test.py`.

**Nota:** Por favor **elige las macros que coincidan con el firmware de tu Wio Terminal**, de lo contrario habrá un error.

- Ejecuta la demostración:

```sh
python3 image-test.py
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"/></div>

## Recursos

- [Documento de protocolos de interfaz rpusbdisp](https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf)

## Soporte Técnico y Discusión de Productos


¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
