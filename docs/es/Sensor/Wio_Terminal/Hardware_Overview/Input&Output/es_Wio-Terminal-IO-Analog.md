---
title: Analógico
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/es/Wio-Terminal-IO-Analog/
slug: /es/Wio-Terminal-IO-Analog
last_update:
  date: 01/11/2022
  author: gunengyu
---
# Usando el Puerto Analógico Grove en Wio Terminal

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2011-36-22.2019-12-12%2011_37_02.gif" /></div>

Este repositorio demuestra cómo usar Analógico como entradas en Wio Terminal. Para usar pines analógicos en Wio Terminal, debes usar los pines RPI.

## Pines Analógicos RPI

Los pinouts de Raspberry Pi están definidos como:

- `RPI_A0` -> `RPI_A8`

## Configuraciones del Puerto Grove

Para usar el **Puerto A/D configurable Grove** como puerto Analógico, simplemente defínelo como sigue:

```cpp
void setup() {
    pinMode(A0, INPUT);
}
```

¡Ahora, conecta tu sensor Grove al pin físico!

## Código de Ejemplo

En este ejemplo, se usa un sensor de Sonoridad Grove para demostrar:

```cpp
void setup() {
    Serial.begin(115200);
    pinMode(A0, INPUT);
}
void loop() {
    int loudness = analogRead(A0);
    Serial.print("Loudness: ");
    Serial.println(loudness);
    delay(50);
}
```

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>