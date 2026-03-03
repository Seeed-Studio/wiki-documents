---
description: Pantalla Táctil de 4 pulgadas
title: Pantalla Táctil de 4 pulgadas
keywords:
- SenseCAP Indicator ESP32 Development Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen
last_update:
  date: 5/23/2023
  author: Thomas
---
# **Pantalla Táctil de 4 pulgadas**

El SenseCAP Indicator está equipado con una pantalla táctil de 4 pulgadas, que puede personalizar la interfaz de usuario que necesite.
En este tutorial, le guiaremos sobre cómo usar la biblioteca gráfica LvGL (Light and Versatile Graphics Library) para SenseCAP Indicator.

**Sistemas de Coordenadas de Píxeles**

Una imagen digital 2-D está compuesta por filas y columnas de píxeles. Un píxel en la imagen se especifica indicando en qué columna y en qué fila se encuentra el píxel. En términos simples, un píxel puede ser identificado por un par de enteros que proporcionan el número de columna y el número de fila.

Convencionalmente, las columnas se numeran desde la parte superior izquierda hacia la derecha, comenzando desde cero, pero en algunos casos, también puede comenzar desde otras esquinas (configurando la rotación).

**Modelo de color de 16 bits**

Los píxeles también se expresan en forma de color, por lo que también es mejor cubrir algunos modelos de color. El modelo de color de 16 bits es bueno para que los MCU trabajen con él, por lo que este es un buen comienzo. El modelo de color consiste en 3 componentes de color - Rojo, Verde y Azul. Dependiendo del modelo de color, estos 3 componentes de color se almacenarán en una variable de 16 bits.

| Bit  | 15   | 14   | 13   | 12   | 11   | 10   | 9   | 8   | 7   | 6   | 5   | 4   | 3   | 2   | 1   | 0   |
| ---  | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: | :-----: |
| **Datos** | Rojo   | Rojo   | Rojo   | Rojo   | Rojo   | Verde   | Verde   | Verde   | Verde   | Verde   | Verde   | Azul   | Azul   | Azul   | Azul   | Azul   |

**Inicialización de la Pantalla LCD**

Para inicializar la pantalla LCD en SenseCAP Indicator:

```c
lcd init:
bsp_board_init()
```

# **Soporte Técnico**

¡No se preocupe, lo tenemos cubierto! Por favor visite nuestro [Canal Oficial de Discord de Seeed](https://discord.com/invite/QqMgVwHT3X) para hacer sus preguntas!

Si tiene pedidos grandes o requisitos de personalización, por favor contacte iot@seeed.cc
