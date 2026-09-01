---
title: Guia de Uso dos Pinos GPIO do reCamera Pro
description: Este artigo descreve como exportar, configurar e usar pinos GPIO no reCamera Pro via interface sysfs, e fornece a fórmula de cálculo do número do pino e um código de referência em Python.
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
url: https://wiki.seeedstudio.com/pt-br/recamera_pro_gpio_guide/
---

# Guia de Uso dos Pinos GPIO do reCamera Pro

## Introdução

Este artigo descreve como usar os pinos GPIO no reCamera Pro. Você aprenderá como determinar o pino GPIO alvo usando a fórmula de cálculo do número do pino, exportar e configurar a direção e o nível do pino via interface sysfs, e usar scripts em Python para controlar saídas GPIO ou ler níveis de entrada.

:::note
No reCamera Pro, há apenas dois GPIOs de uso geral expostos, e sua tensão de saída varia de 12 V a 21 V (dependendo da entrada DC-IN), o que não é adequado para a maioria dos dispositivos. No entanto, você pode reconfigurar os pinos UART ou CAN na interface de expansão como GPIOs de uso geral. Esses pinos fornecem um nível padrão de 3,3 V.
:::

## Localizando os Pinos GPIO

Primeiro, consulte as imagens abaixo para encontrar as posições dos pinos GPIO de que você precisa:

![Diagrama da Interface de Expansão](https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera-PRO_Expansion_CON.jpg)
![Diagrama dos Pinos CAN](https://files.seeedstudio.com/wiki/reCamera-Pro/Hardware_Usage/recamera_pro_can_gpio.jpg)

## Fórmula de Cálculo do Número do Pino

O número do pino GPIO é calculado usando a seguinte fórmula:

```
GPIO bank × 32 + offset within bank
```

O deslocamento dentro do banco é calculado como: `número do grupo × 8 + número do pino dentro do grupo`.

Por exemplo, para **GPIO5_A2**:

- O número do banco é 5
- O deslocamento dentro do banco é `0 × 8 + 2 = 2`

Portanto, o número do pino é:

```
5 × 32 + 2 = 162
```

O mapeamento de letras de banco para números é o seguinte:

| Letra | Número |
| ------ | ------ |
| A      | 0      |
| B      | 1      |
| C      | 2      |
| D      | 3      |
| ...    | ...    |

## Exportando um Pino GPIO

Primeiro, você precisa acessar o terminal do dispositivo. Você pode fazer isso de uma das seguintes maneiras:

1. Conectar-se ao dispositivo via SSH
2. Usar o recurso de terminal no WebUI

### Navegar até a Interface sysfs do GPIO

```bash
cd /sys/class/gpio
```

### Exportar o Pino GPIO

```bash
echo 162 > export
```

### Definir a Direção do Pino GPIO

A direção do pino oferece suporte aos seguintes dois modos:

- Saída: `out`
- Entrada: `in` (modo padrão)

```bash
echo out > direction
```

### Definir o Nível do Pino GPIO

O nível oferece suporte aos seguintes dois estados:

- Nível alto: `1`
- Nível baixo: `0`

```bash
echo 1 > value
```

## Referência de Código em Python

O script em Python a seguir demonstra como controlar um pino GPIO para gerar níveis alto e baixo:

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

- [Documentação Oficial do reCamera Pro](https://wiki.seeedstudio.com/cn/recamera_pro_getting_started/)

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes opções de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
