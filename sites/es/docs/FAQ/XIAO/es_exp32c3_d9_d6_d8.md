---
description: XIAOESP32C3-FAQ
title: Nota sobre la asignación de E/S del XIAO ESP32C3
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/exp32c3_d9_d6_d8
last_update:
  date: 6/28/2023
  author: cheng.tang
---


El ESP32C3 tiene múltiples modos de arranque, qué modo arrancar al encender se controla por GPIO2, GPIO8 y GPIO9. Por ejemplo, cuando GPIO2=0, GPIO8=0 y GPIO9=0, C3 entrará en modo UART_BOOT.
XIAO esp32c3 solo hace pull-up en GPIO9 y añade un botón para controlarlo. GPIO8 y GPIO2 no tienen pull-up/down, lo que causará que los clientes entren en modo UART_BOOT en algunos escenarios de uso especiales, resultando en que los clientes no puedan subir programas

### D9

El D9 del XIAO ESP32C3 se conecta al GPIO9 (15) del ESP32-C3, resistencia pull-up (R6) y botón BOOT. El botón BOOT (y botón RESET) te permite cambiar manualmente el Modo de Arranque del ESP32-C3.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/10.png" alt="pir" width={600} height="auto" /></div>

Presionar el botón BOOT conecta D9 a GND. **Por lo tanto es mejor usar D9 como entrada de interruptor**.

### D6

D6 del XIAO ESP32C3 está conectado a U0TXD (28) del ESP32-C3. El estado operativo del bootloader de 1ra/2da etapa se envía como texto a U0TXD.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/11.png" alt="pir" width={400} height="auto" /></div>

D6 se configura como salida UART al inicio, por lo que si usas D6 como entrada, podrías generar accidentalmente una corriente alta. **Por lo tanto se recomienda usar el pin D6 solo en modo salida**.

Sin embargo, dado que este D6 es una salida UART, tienes que tener cuidado con algunas cosas: una es que está en HIGH en modo standby cuando no se está comunicando. La otra es la salida de texto del bootloader de 1ra/2da etapa. La señal oscila HIGH/LOW inmediatamente después del inicio y debe ser contrarrestada si es necesario.

Así que trata de no usar D6. (Está bien usarlo después de que lo entiendas, por supuesto.)

### D8

D8 del Seeed Studio XIAO ESP32C3 está conectado a GPIO8 (14) del ESP32-C3.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/12.png" alt="pir" width={300} height="auto" /></div>

GPIO8 se referencia cuando el modo de arranque se configura para download boot manteniendo presionado el botón BOOT y debe estar en HIGH en ese momento. ([Aquí](https://www.espressif.com/sites/default/files/documentation/esp32-c3_datasheet_en.pdf) dice: "La combinación de strapping de GPIO8 = 0 y GPIO9 = 0 es inválida y desencadenará comportamiento inesperado.")

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/13.png" alt="pir" width={700} height="auto" /></div>

Si usas download boot, **añade una resistencia pullup para hacer GPIO8 HIGH en el momento del arranque**.

Un agradecimiento especial al colega de SeeedJP **matsujirushi** por probar y contribuir a esta sección. Aquí está el enlace de referencia al artículo original.

- [Seeed Studio XIAO ESP32C3のI/O割り付けに注意](https://lab.seeed.co.jp/entry/2023/04/03/120000)