---
title: Preguntas frecuentes sobre la serie reComputer Industrial R2x
description: Preguntas frecuentes sobre las series reComputer Industrial R20xx, R21xx y R22xx, incluyendo arranque desde eMMC y SSD, refrigeración industrial, configuración del sistema y expansión.
slug: /recomputer_industrial_r2x_faq
last_update:
  date: 11/10/2026
  author: doublelf
keywords:
  - reComputer Industrial R20xx FAQ
  - reComputer Industrial R21xx FAQ
  - reComputer Industrial R22xx FAQ
  - reComputer Industrial R2x troubleshooting
  - Raspberry Pi CM4
  - Raspberry Pi CM5
  - industrial AI NVR
---

<div class="recomputer-faq-page">

# Preguntas frecuentes sobre la serie reComputer Industrial R2x

Esta página contiene respuestas verificadas para la serie reComputer Industrial R2x. Cada respuesta indica la variante de producto y el modo de firmware al que se aplica, junto con la fecha en que se verificó por última vez frente a las fuentes oficiales actuales.

## Antes de comenzar

- Confirma el modelo exacto: reComputer Industrial R20xx, R21xx o R22xx, y el módulo de cómputo Raspberry Pi instalado.
- Comprueba la versión actual de la imagen de Raspberry Pi OS antes de aplicar pasos específicos de versión.
- Las respuestas de esta página se verificaron por última vez el 2026-11-10; vuelve a comprobar las fuentes oficiales enlazadas si la estás leyendo más tarde.

<!-- RECOMPUTER_FAQ_AUTO_START -->
## Sistema operativo y firmware {#os-and-firmware}

### Después de añadir un módulo UPS a los productos de la serie Raspberry Pi CM, el dispositivo no se enciende cuando la alimentación se restablece inmediatamente después de un corte de energía. ¿Cómo se debe manejar esto? {#industrial-r20xx-ups-power-cycle}

**Aplica a:** reComputer Industrial R20xx (basado en los módulos de cómputo de la serie Raspberry Pi CM), con un módulo UPS añadido y el dispositivo que no se enciende cuando la alimentación se restablece inmediatamente después de un corte de energía

**Última verificación:** 2026-11-01

Esto ocurre porque, una vez instalado el módulo UPS, la función del UPS se solapa con la lógica de apagado preestablecida en el CM5. Cuando esto sucede, simplemente apaga el dispositivo por completo y espera hasta que el UPS se haya descargado totalmente; entonces el dispositivo se podrá encender de nuevo.

**Requisitos previos:**

- Las causas probables de este comportamiento son:

1. La condición para que un CM4/5 se reinicie es que la tensión en el pin GLOBAL_EN se mantenga baja durante más de 1 milisegundo. La condición que hace que el pin GLOBAL_EN se ponga en bajo es que la alimentación del sistema de 5 V caiga por debajo de 1,65 V.
2. Cuando se corta la alimentación externa, el UPS envía una señal de apagado al CM4. Si la alimentación se restablece antes de que el UPS se haya descargado por completo, la tensión VDD_5_SYS se mantiene por encima de 1,65 V y, al mismo tiempo, el dispositivo ya ha recibido la orden de apagado y ha entrado en estado de apagado. En ese caso el pin GLOBAL_EN no puede ir a bajo, por lo que el CM4 no puede reiniciarse.

**Notas:**

- Esto solo ocurre después de que se haya instalado un UPS; en el uso normal no afecta al reinicio del dispositivo. Solo importa cuando la alimentación falla de repente, y entonces hay que prestar atención a cuándo se reinicia el dispositivo (restablecer la alimentación después de aproximadamente 10 a 20 segundos, o 1 a 2 minutos).
- La situación también se puede evitar cambiando la lógica de apagado por software; puedes encontrar la solución correspondiente en la comunidad: https://github.com/lucasnetau/ltc3350-ups

**Referencias:**

- [LTC3350 SuperCap UPS Monitor](https://github.com/lucasnetau/ltc3350-ups)

### ¿El reComputer Industrial R2245-12 es compatible oficialmente con Ubuntu Server 24.04 LTS y el controlador de Hailo-8? {#r2245-12-ubuntu-server-2404}

**Aplica a:** reComputer Industrial R22xx (reComputer R2245-12 como ejemplo), para casos que necesitan ejecutar el Hailo-8 en Ubuntu Server 24.04 LTS

**Última verificación:** 2026-11-01

La instalación de la imagen oficial de Ubuntu Server 24.04 es compatible, pero debido a que los archivos del device tree pueden faltar, algunas funciones pueden no funcionar correctamente. Se recomienda usar la imagen oficial proporcionada por Seeed; esa imagen incluye todo lo necesario para ejecutar el Hailo-8 preinstalado y se puede usar tal cual.

**Referencias:**

- [Introducción a reComputer Industrial R22xx](https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_getting_start/)
- [Flashear sistema operativo en reComputer Industrial R22xx](https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_flash_os/)

## Conectividad y redes {#connectivity-and-networking}

### ¿El reComputer Industrial R21xx necesita un transceptor CAN adicional para conectar un sensor de ángulo CANopen? {#industrial-r21xx-canopen-transceiver}

**Aplica a:** reComputer Industrial R21xx, para conectar dispositivos de bus de campo como sensores de ángulo CANopen a través de la interfaz CAN integrada

**Última verificación:** 2026-11-01

El reComputer Industrial R21xx tiene un transceptor CAN FD aislado integrado, por lo que no se necesita un transceptor CAN adicional. El CAN-H, CAN-L y la GND de señal del sensor se pueden conectar directamente a los terminales Phoenix CANH/CANL/GND del dispositivo. La alimentación del sensor debe cablearse por separado y no debe mezclarse con las líneas de señal CAN. Se debe montar una resistencia de terminación de 120 Ω en cada extremo del bus CAN; el R21xx no tiene resistencias de terminación integradas. La interfaz es compatible con CAN 2.0 y admite CANopen; se asigna como `can0`/`can1` en Linux y comienza a comunicarse una vez que se configura la velocidad en baudios.

**Referencias:**

- [Introducción a reComputer Industrial R21xx](https://wiki.seeedstudio.com/es/recomputer_industrial_R21xx_getting_start/)

### El reComputer Industrial R2245-12 no tiene salida HDMI y la eMMC no se detecta al flashear por USB. ¿Cómo se debe manejar esto? {#r2245-12-usb-emmc-not-detected}

**Aplica a:** reComputer Industrial R22xx (reComputer R2245-12 como ejemplo), donde el dispositivo no tiene salida HDMI y la eMMC no se detecta al flashear por USB

**Última verificación:** 2026-11-01

Después de entrar en modo BOOT y conectar la placa al ordenador por USB, el sistema detecta automáticamente la eMMC del R2245. Primero comprueba en el Administrador de dispositivos de Windows si aparece un dispositivo de almacenamiento adicional, luego usa Raspberry Pi Imager para seleccionar la imagen y el dispositivo de almacenamiento de destino y escribirla; si la opción está disponible, reescribir una nueva imagen normalmente lo restaura. Si la eMMC sigue sin detectarse, la eMMC o el CM5 pueden estar dañados: puedes abrir la carcasa, sustituir el CM5 y escribir la imagen de nuevo como prueba; si la sustitución tiene éxito, el CM5 original estaba dañado. Registra los pasos y el registro durante la prueba.

**Referencias:**

- [Introducción a reComputer Industrial R22xx](https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_getting_start/)
- [Flashear sistema operativo en reComputer Industrial R22xx](https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_flash_os/)

## Hardware e interfaces {#hardware-and-interfaces}

### ¿Cómo uso la función GPS en los productos de la serie reComputer Industrial R2x? ¿Se puede equipar la función 4G con una antena de diversidad? {#industrial-r2x-gps-4g-antenna}

**Aplica a:** serie reComputer Industrial R2x (reComputer Industrial R20xx / R21xx / R22xx), para casos que necesitan posicionamiento GPS o una antena de diversidad 4G

**Última verificación:** 2026-11-01

La función GPS del dispositivo solo funciona con un módulo 4G y una antena GPS; el producto estándar no incluye ninguno de ellos. Si necesitas la función, puedes solicitar la personalización al hacer el pedido, y Seeed completará la preinstalación antes del envío. En cuanto a la antena de diversidad para la función 4G, el dispositivo puede llevar como máximo 3 antenas al mismo tiempo.

**Referencias:**

- [Introducción a reComputer Industrial R22xx](https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_getting_start/)
- [Introducción a reComputer Industrial R20xx](https://wiki.seeedstudio.com/es/recomputer_industrial_r20xx_getting_start/)

### ¿Se puede seguir usando el dispositivo cuando una pieza se ha soltado en el interior, está suelta o hace ruido al moverse? Después de solicitar una devolución, ¿cómo se gestionan la inspección y el reembolso? {#industrial-r21xx-return-inspection-refund}

**Aplica a:** reComputer Industrial R21xx, para casos de posventa en los que una pieza interna se ha soltado, está suelta o hace ruido y se ha solicitado una devolución

**Última verificación:** 2026-11-01

Si descubres que una pieza se ha soltado dentro del dispositivo, está suelta o hace ruido cuando se mueve el dispositivo, deja de alimentarlo y usarlo inmediatamente, para evitar un cortocircuito o más daños a la placa base. No vuelvas a colocar la pieza por tu cuenta ni sigas desmontando el dispositivo; entrégalo al soporte técnico o al almacén para su inspección. Al gestionar el caso, toma fotos claras de cerca de la etiqueta del embalaje exterior (con el código de barras), el número de serie (SN) del dispositivo, la placa base completa y el lugar donde la pieza se soltó.

**Referencias:**

- [Introducción a reComputer Industrial R21xx](https://wiki.seeedstudio.com/es/recomputer_industrial_R21xx_getting_start/)

### Ninguno de los dos puertos USB-A 3.2 del reComputer Industrial R21 reconoce un dispositivo y el registro de arranque sigue mostrando el error -71. ¿Cómo se debe delimitar y manejar la falla? {#industrial-r21xx-usb-a-error-71}

**Aplica a:** reComputer Industrial R21xx, donde ninguno de los puertos USB-A 3.2 reconoce un dispositivo y el registro de arranque sigue mostrando el error -71

**Última verificación:** 2026-11-01

Si el dispositivo muestra un fallo de lectura del descriptor de dispositivo USB alrededor de los 0,8 segundos tras el arranque, sigue informando del error -71 (EPROTO) y finalmente imprime "unable to enumerate USB device", y el hub USB5744 tampoco se detecta en el bus USB 3.0, primero se debe comprobar el hardware. Si las otras unidades del mismo lote funcionan con normalidad mientras que solo esta unidad sigue informando del error antes de que comience el programa en espacio de usuario, la falla se puede atribuir a un fallo de hardware en la ruta de señal USB 2.0 D+/D- o en el circuito del hub entre el RP1 y el USB5744, en lugar de a un problema ordinario de configuración de software.

**Referencias:**

- [Introducción a reComputer Industrial R21xx](https://wiki.seeedstudio.com/es/recomputer_industrial_R21xx_getting_start/)

## Térmica y alimentación {#thermal-and-power}

### Para productos modulares como el módulo PoE y el módulo térmico, ¿por qué el chip no llega a hacer contacto con el dispositivo de refrigeración durante la instalación? {#industrial-r2xx-module-thermal-contact}

**Aplica a:** reComputer Industrial R20xx (basado en los módulos de cómputo de la serie Raspberry Pi CM), para instalaciones de accesorios opcionales como el módulo PoE y el módulo térmico

**Última verificación:** 2026-11-01

Para esta pregunta habitual, comprueba lo siguiente: 1. si el accesorio es un accesorio que se ajusta al producto correspondiente; 2. si lo instalaste en la interfaz correcta; 3. si el accesorio está completamente instalado (la almohadilla térmica, la carcasa, etc.).

**Referencias:**

- [reComputer Industrial R20xx Primeros pasos](https://wiki.seeedstudio.com/es/recomputer_industrial_r20xx_getting_start/)

<!-- RECOMPUTER_FAQ_AUTO_END -->

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

</div>
