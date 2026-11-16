---
description: Desde los recursos USB del SoC Jetson, el esquema del Hub USB de la carrier board, hasta la topología de `lsusb -t` en Linux, se explica por qué los dispositivos USB 3.0 a veces solo funcionan a USB 2.0 (480M), y cómo depurar capa por capa a lo largo del enlace SuperSpeed.
title: USB de Jetson
keywords:
  - jetson
  - usb
  - usb3
  - usb2
  - 480M
  - super speed
  - lsusb
  - carrier board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /jetson_usb
last_update:
  date: 11/02/2026
  author: youjiang
---

En este artículo, hablemos de un problema muy común y fácil de malinterpretar en Jetson: **USB.**

Por ejemplo, conectas una cámara USB 3.0, pero después de ejecutar `lsusb -t`, descubres que la velocidad es solo `480M`. En otras palabras, este dispositivo que admite USB 3.0 de forma nativa en realidad solo está funcionando a USB 2.0 en el Jetson. En este punto, la primera reacción de muchas personas es: ¿el controlador USB 3.0 no está funcionando? Pero las cosas a menudo no son tan simples. Porque desde el SoC Jetson hasta el dispositivo USB en tu mano, en realidad hay bastantes cosas en medio.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/usb_data_path.png"/></div>

Un problema en cualquiera de estas capas puede hacer que un dispositivo USB 3.x termine funcionando solo a USB 2.0.

Así que en este artículo, en lugar de solo explicar "por qué se convierte en 480M", quiero usar este problema para enlazar **cómo funciona USB en Jetson, cómo la Carrier Board saca el USB y cómo Linux ve estos dispositivos.**

En el contenido siguiente, tomaremos el **reComputer Classic J4012** como ejemplo y desglosaremos paso a paso la lógica subyacente del USB en Jetson. ¡Creo que aprenderás mucho de ello! Primero, permíteme despejar dos dudas:

1. Si tu dispositivo Jetson es de un modelo diferente, no afectará tu lectura del contenido siguiente. El punto clave es el enfoque de análisis cuando ocurre un problema, no el hardware.
2. Si no estás familiarizado con conceptos como `lsusb -t`, USB Hub o UPHY, no te preocupes: los desglosaremos paso a paso junto con registros reales más adelante.

Disfruta la lectura.

---

## ¿Cuántos puertos USB tiene realmente el Jetson Orin NX?

Comencemos con las especificaciones del módulo NVIDIA Jetson. Cada módulo tiene recursos fijos, que normalmente llamamos interfaces nativas.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/jetson_modules.png"/></div>

Fuente de la imagen: https://www.nvidia.com/en-us/autonomous-machines/embedded-systems/

Para el Jetson Orin Nano y el Jetson Orin NX, NVIDIA proporciona 3x USB 3.2 Gen2 y 3x USB 2.0. Puedes encontrar la descripción detallada en el sitio web de NVIDIA. Al ver esto, es fácil desarrollar un malentendido:

```text
[3 × USB3] + [3 × USB2] = 6 USB Connectors?
```

En realidad, no. Lo que se describe aquí es:

> **Los recursos subyacentes de interfaz USB / PHY proporcionados por el módulo Jetson.**

Si finalmente terminan siendo varios puertos Type-A, varios puertos Type-C, o se conectan a un Hub, M.2 o dispositivos a bordo, lo decide la Carrier Board.

En otras palabras, el módulo Jetson proporciona los recursos USB; la Carrier Board decide cómo se usan estos recursos; y solo entonces se convierten en los puertos que vemos.

## ¿Cómo utiliza estos puertos USB el reComputer Classic J401?

En la hoja de datos del J401, la placa finalmente proporciona a los usuarios 4x USB 3.2 Type-A y 1x USB 2.0 Type-C. El puerto Type-C funciona en modo dispositivo y se utiliza principalmente para flashear el sistema; los cuatro puertos Type-A funcionan en modo host para conectar dispositivos periféricos.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_ports.png"/></div>

Pero aquí hay una pregunta muy interesante: el Orin NX solo tiene 3 puertos USB3 nativos, entonces ¿por qué el J401 tiene 4 puertos USB3 Type-A?

La respuesta ya se da en el [esquema](https://files.seeedstudio.com/wiki/J401/reComputer_J401_SCH_V1.0.pdf) de la placa de código abierto: **un USB Hub.**

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/j401_blockdiagram.png"/></div>

La carrier board expande un canal USB3.2 en cuatro puertos USB 3.2 Type-A. Mirando más a fondo el esquema, puedes ver que este Hub es un `VL822-Q7`.

Ten en cuenta que aunque los cuatro puertos admiten 10 Gbps, en última instancia comparten el **uplink desde el Hub hasta el Jetson**. En otras palabras, los cuatro puertos USB comparten un total de 10 Gbps de ancho de banda.

---

## Los puertos USB3 siguen conteniendo USB2

Si solo miras la apariencia, los USB 2.0 Type-A y USB 3.x Type-A son casi idénticos, y los dispositivos USB3 también se pueden conectar directamente a puertos USB2.

Así que es fácil tener la intuición de que USB3 simplemente actualiza la velocidad de USB2 de 480 Mbps a 5 Gbps o 10 Gbps.

Pero en realidad no es así. Para seguir siendo compatible con USB2, USB3 no simplemente "actualiza" las señales originales de USB2. En su lugar, además de mantener el cableado USB2, añade un conjunto independiente de señales de alta velocidad dedicadas a SuperSpeed.

Un puerto USB2 Type-A normalmente tiene 4 hilos: VBUS, D+, D- y GND. Un puerto USB3 Type-A añade señales SuperSpeed adicionales sobre esos pines: SSTX+ / SSTX- y SSRX+ / SSRX-.

Así que aunque USB2 y USB3 Type-A son **físicamente compatibles**, las señales que se usan realmente internamente no son exactamente las mismas.

Puedes entenderlo de forma sencilla como:

```text
              USB 3.x Type-A Connector
                         │
          ┌──────────────┴──────────────┐
          ↓                             ↓
       USB 2.0                       USB 3.x
      Original pins               New high-speed pins
          │                             │
       D+ / D-                     SSTX / SSRX
          │                             │
      USB2 PHY                        UPHY
          │                             │
        480M                         5G / 10G
```

En otras palabras, un puerto USB3 Type-A en realidad contiene dos rutas de datos al mismo tiempo. El mayor beneficio de este diseño es la **compatibilidad hacia atrás**.

Esto también explica un fenómeno muy importante: **incluso si el enlace SuperSpeed de un dispositivo USB3 tiene un problema, aún puede ser reconocido por el sistema a través de los pines USB2 D+ / D-. En muchos casos, que sea utilizable no significa que esté funcionando con normalidad.**

Volvamos al esquema de la carrier board. El VL822-Q7 tiene tanto HSD0+/HSD0- como SSTX0+/SSTX0- y SSRX0+/SSRX0-. Aquí, HSD corresponde al canal USB2 de alta velocidad, mientras que SSTX / SSRX corresponden al canal USB SuperSpeed.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/vl822_schematic.png"/></div>

Así que la arquitectura USB real del J401 en realidad se parece más a:

```text
                     Jetson Orin NX

                USB2                USB3
                  │                   │
                D+/D-             TX / RX
                  │                   │
                  └────────┬──────────┘
                           ↓
                        VL822-Q7
                           │
              ┌────────────┴────────────┐
              ↓                         ↓
           USB2 Path                USB3 Path
              │                         │
           HSD1~4                 SSTX/SSRX 1~4
              │                         │
              └────────────┬────────────┘
                           ↓
                      4 × USB-A
```

En otras palabras: **detrás de cada puerto USB3 Type-A en el J401, hay tanto una ruta USB2 como una ruta SuperSpeed.** Este punto es muy importante para el análisis de fallos posterior.

---

## ¿Cómo ve Linux estos dispositivos USB?

Después de analizar el circuito, volvamos a Linux y veamos cómo el sistema finalmente ve estos dispositivos USB.

Primero, un comando complementario: al depurar USB en Linux, un comando muy utilizado es `lsusb -t`. Puede mostrar directamente:

```text
USB Topology
Hub
Driver
Interface
Link Speed
```

Las velocidades más comunes se pueden entender de la siguiente manera:

| Visualización de lsusb -t | Enlace USB correspondiente |
|---|---|
| 1.5M | Low-Speed |
| 12M | Full-Speed |
| 480M | USB 2.0 High-Speed |
| 5000M | USB 3.x SuperSpeed 5 Gbps |
| 10000M | USB 3.x SuperSpeed 10 Gbps |

Nota:

> **Lo que se muestra aquí es la velocidad del enlace USB, no el rendimiento real de datos del dispositivo.**

Por ejemplo, `5000M` significa que este enlace USB está funcionando en modo SuperSpeed de 5 Gbps; no significa que la cámara pueda realmente mantener 5000 Mbps de datos efectivos.

En mi reComputer Classic J4012, conecté una cámara Orbbec que admite USB 3.0 y ejecuté el comando `lsusb -t`, que devolvió la información que se muestra en la figura siguiente.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_camera.png"/></div>

Aquí puedes ver claramente dos buses, que corresponden a las dos topologías lógicas del Root Hub USB2 y del Root Hub SuperSpeed.

Analicemos juntos la salida del terminal.

```text
/:  Bus 02.Port 1: Dev 1, Class=root_hub, Driver=tegra-xusb/4p, 10000M
    |__ Port 1: Dev 2, If 0, Class=Hub, Driver=hub/4p, 10000M
        |__ Port 3: Dev 3, If 0, Class=Video, Driver=uvcvideo, 5000M
        |__ Port 3: Dev 3, If 1, Class=Video, Driver=uvcvideo, 5000M
        ...
```

Por ahora no te preocupes por las muchas líneas `If 0 / If 1 / If 2`; solo miramos las tres capas principales:

```text
Jetson XUSB Root Hub
       10000M
          ↓
   J401 VL822 Hub
       10000M
          ↓
    Orbbec Camera
        5000M
```

Esto en realidad corresponde exactamente al esquema que analizamos antes.

```text
Driver=tegra-xusb/4p, 10000M
```

Aquí, `tegra-xusb` es el controlador de host USB de Jetson. Y `10000M` significa que el Root Hub de este lado admite SuperSpeed de 10 Gbps.

```text
Class=Hub, Driver=hub/4p, 10000M
```

Este Hub corresponde al `VL822-Q7` que vimos antes en el esquema del J401. También muestra `10000M`, lo que significa que **el uplink SuperSpeed entre el Jetson y el Hub VL822 se ha establecido correctamente.**

```text
Class=Video, Driver=uvcvideo, 5000M
```

Puedes ver que la velocidad de enlace actual de la cámara es `5000M`, lo que significa que esta cámara Orbbec ha establecido correctamente un enlace SuperSpeed de 5 Gbps.

Así que la cadena completa se puede dibujar como:

```text
Jetson XUSB
   │
   │ 10000M
   ↓
J401 VL822 Hub
   │
   │ 5000M
   ↓
Orbbec Camera
```

Aquí alguien puede preguntar: el Hub es claramente `10000M`, entonces ¿por qué la cámara solo es `5000M`?

Esto es completamente normal. Porque `10000M` describe la capacidad del segmento **Jetson ↔ Hub**, mientras que `5000M` describe la velocidad negociada en el segmento **Hub ↔ Camera**. Diferentes segmentos pueden absolutamente funcionar a diferentes velocidades.

---

## ¿Por Qué la Misma Cámara Muestra Tantas Líneas?

Permíteme aprovechar esta oportunidad para explicar un problema que se malinterpreta fácilmente. Solo conecté una cámara, entonces ¿por qué hay múltiples líneas de información?

En el registro, `Dev 3` aparece muchas veces. Esto no significa que haya 8 dispositivos USB conectados. Significa: **el mismo dispositivo compuesto USB ha expuesto múltiples interfaces USB.** Mi cámara de profundidad tiene muchas funciones, y cada función que se puede usar de forma independiente tiene una interfaz. Linux vincula el controlador correspondiente a cada una de estas interfaces. Así que `Dev` se puede entender como un dispositivo USB, mientras que `If` representa las diferentes interfaces dentro de ese dispositivo.

---

## Ahora Veamos el Bus de 480M

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/technical_deep_dives/jetson_usb/lsusb_480m.png"/></div>

Ten en cuenta que hay más abajo:

```bash
Port 3: Dev 3, If 0, Class=Wireless, Driver=btusb, 12M
```

Este es un dispositivo Bluetooth. Pero no conecté ningún dispositivo Bluetooth a mi puerto USB Type-A, entonces ¿cómo descubrió Linux este dispositivo? Al principio, cuando miramos el esquema de la placa portadora, aprendimos que USB2_D está conectado a la ranura M.2 Key E. El `btusb` que aparece aquí en realidad está conectado en la interfaz M.2.

## Enfoque de Resolución de Problemas: Cuando un Dispositivo USB3 se Convierte en USB2

Ahora por fin podemos responder la pregunta del principio. Desde la perspectiva de la resolución de problemas, una comprensión más precisa de "un dispositivo USB3 degradado a USB2" es: **el enlace USB2 es normal, pero el enlace SuperSpeed no se estableció.** Así que si un dispositivo que admite USB3 de forma nativa solo muestra `480M` en `lsusb -t`, debes rastrear hacia atrás a lo largo de la cadena de comunicación USB. Para mi escenario de prueba actual, si ves:

```text
Hub      10000M
Camera    480M
```

significa que el enlace SuperSpeed `Jetson → VL822` es normal. Entonces es más probable que el problema esté en:

```text
VL822 Downstream Port --> USB Connector --> Cable --> Camera
```

En este punto, las prioridades deberían ser:

- Comprobar si hay un HUB externo y si el HUB externo admite USB3.x
- Probar con otro puerto USB Type-A para descartar un único puerto USB Type-A defectuoso
- Comprobar si el cable de datos que se está utilizando admite USB3.x
- Probar con otro dispositivo USB3 conocido como bueno para descartar un problema con el propio dispositivo USB
- ...

Por el contrario, si incluso el `Hub 10000M` ha desaparecido y solo puedes ver el `Hub 480M` de USB2, entonces el problema está más cerca del lado ascendente:

```text
Jetson --> UPHY --> Carrier Board
```

En este caso, necesitas comprobar:

- Si el sistema flasheado es el proporcionado por el fabricante del dispositivo
- Si compilaste el firmware tú mismo, comprueba si la configuración de UPHY, el Device Tree y otros archivos de configuración son correctos
- Si el diseño de la placa portadora es razonable y el cableado del HUB USB es normal
- ...

---

## Conclusión

Por último, permíteme resumir rápidamente el contenido central de este artículo. Cuando un dispositivo USB3 solo muestra 480M, por lo general no es que "todo el USB esté roto", sino que el enlace USB2 es normal mientras que el enlace SuperSpeed no se estableció. Al solucionar problemas, primero usa `lsusb -t` para determinar hasta dónde llegó correctamente el enlace SuperSpeed y luego ve acotando el alcance capa por capa a lo largo del cable, el Hub, la placa portadora, UPHY y el BSP.

## Soporte Técnico y Debate sobre el Producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
