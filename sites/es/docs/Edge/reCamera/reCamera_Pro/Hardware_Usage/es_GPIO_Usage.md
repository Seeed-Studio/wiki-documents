---
title: Guía de uso de pines GPIO de reCamera Pro
description: Este artículo describe cómo exportar, configurar y usar los pines GPIO en la reCamera Pro a través de la interfaz sysfs, y proporciona la fórmula de cálculo del número de pin y una referencia de código en Python.
keywords:
  - reCamera
  - reCamera Pro
  - GPIO
  - sysfs
  - Linux
image: https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png
slug: /recamera_pro_gpio_guide
sku: 10003420
sidebar_position: 5
last_update:
  date: 07/09/2026
  author: Sizhao zhou
createdAt: "2026-08-25"
updatedAt: "2026-08-25"
url: https://wiki.seeedstudio.com/es/recamera_pro_gpio_guide/
---

# Guía de uso de pines GPIO de reCamera Pro

## Introducción

Este artículo describe cómo usar los pines GPIO en la reCamera Pro. Aprenderás cómo determinar el pin GPIO objetivo usando la fórmula de cálculo del número de pin, exportar y configurar la dirección y el nivel del pin a través de la interfaz sysfs, y usar scripts de Python para controlar salidas GPIO o leer niveles de entrada.

:::note
En la reCamera Pro, solo hay dos GPIO de propósito general expuestos, y su tensión de salida va de 12 V a 21 V (dependiendo de la entrada DC-IN), lo cual no es adecuado para la mayoría de los dispositivos. Sin embargo, puedes reconfigurar los pines UART o CAN de la interfaz de expansión como GPIO de propósito general. Estos pines entregan un nivel estándar de 3,3 V.
:::

## Localización de pines GPIO

Primero, consulta las siguientes imágenes para encontrar las posiciones de los pines GPIO que necesitas:

![Diagrama de la interfaz de expansión](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-PRO_Expansion_CON.jpg)
![Diagrama de pines CAN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/recamera_pro_can_gpio.jpg)

## Fórmula de cálculo del número de pin

El número de pin GPIO se calcula usando la siguiente fórmula:

```
GPIO bank × 32 + offset within bank
```

El desplazamiento dentro del banco se calcula como: `número de grupo × 8 + número de pin dentro del grupo`.

Por ejemplo, para **GPIO5_A2**:

- El número de banco es 5
- El desplazamiento dentro del banco es `0 × 8 + 2 = 2`

Por lo tanto, el número de pin es:

```
5 × 32 + 2 = 162
```

La correspondencia entre letras de banco y números es la siguiente:

| Letra | Número |
| ------ | ------ |
| A      | 0      |
| B      | 1      |
| C      | 2      |
| D      | 3      |
| ...    | ...    |

## Exportar un pin GPIO

Primero, necesitas acceder al terminal del dispositivo. Puedes hacerlo de cualquiera de las siguientes maneras:

1. Conectarte al dispositivo mediante SSH
2. Usar la función de terminal en la WebUI

### Navegar a la interfaz sysfs de GPIO

```bash
cd /sys/class/gpio
```

### Exportar el pin GPIO

```bash
echo 162 > export
```

### Establecer la dirección del pin GPIO

La dirección del pin admite los siguientes dos modos:

- Salida: `out`
- Entrada: `in` (modo predeterminado)

```bash
echo out > direction
```

### Establecer el nivel del pin GPIO

El nivel admite los siguientes dos estados:

- Nivel alto: `1`
- Nivel bajo: `0`

```bash
echo 1 > value
```

## Referencia de código en Python

El siguiente script de Python muestra cómo controlar un pin GPIO para que entregue niveles altos y bajos:

```python
import os
import time

GPIO = 162  # The GPIO pin number calculated earlier

GPIO_PATH = f"/sys/class/gpio/gpio{GPIO}"

def write_file(path, value):
    with open(path, "w") as f:
        f.write(str(value))

# 1. Export the GPIO
if not os.path.exists(GPIO_PATH):
    write_file("/sys/class/gpio/export", GPIO)
    time.sleep(0.1)  # Wait for export to complete

# 2. Set to output mode (use 'in' for input mode)
write_file(f"{GPIO_PATH}/direction", "out")

# 3. Set high level
write_file(f"{GPIO_PATH}/value", 1)
time.sleep(1)

# 4. Set low level
write_file(f"{GPIO_PATH}/value", 0)
time.sleep(1)

# To read the pin level, you can use the following code:
# with open(f"/sys/class/gpio/gpio{GPIO}/value", "r") as f:
#     value = f.read().strip()
#     print(value)
```

## Recursos

- [Documentación oficial de reCamera Pro](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes opciones de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
