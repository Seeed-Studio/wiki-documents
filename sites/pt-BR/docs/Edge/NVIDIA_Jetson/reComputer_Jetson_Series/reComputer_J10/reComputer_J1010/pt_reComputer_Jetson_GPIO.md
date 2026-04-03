---
description: Como usar o GPIO de 40 pinos nas placas reComputer Jetson
title: Como usar o GPIO de 40 pinos nas placas reComputer Jetson
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
createdAt: '2023-04-12'
updatedAt: '2026-03-24'
url: https://wiki.seeedstudio.com/pt-br/reComputer_Jetson_GPIO/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Como usar o GPIO de 40 pinos nas placas reComputer Jetson

Este wiki demonstra como acessar e controlar o GPIO de 40 pinos das placas reComputer Jetson. Para este wiki, usamos o reComputer J4012 como exemplo. Porém, as etapas serão semelhantes para outras placas reComputer Jetson também.

## Antes de começar 

Aqui estão algumas informações que você precisa saber antes de começar a trabalhar com o GPIO de 40 pinos em dispositivos reComputer Jetson.

- O nível de tensão por pino GPIO é 3,3 V
- Você não pode alimentar as placas reComputer Jetson via GPIO por causa da limitação de corrente dos pinos GPIO

## Encontrar o nome do GPIO

**Passo 1:** Abra o datasheet de uma placa reComputer Jetson. Abaixo você pode encontrar os datasheets de todas as placas reComputer Jetson disponíveis.

- [J101 Carrier Board](https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf)
    - reComputer J1010

- [A206 Carrier Board](https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf)
    - reComputer J2011
    - reComputer J2012
    - reComputer J1020

- [J202 Carrier Board](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf)
    - reComputer J2021
    - reComputer J2022
    - reComputer J1020 V2

- [J401 Carrier Board](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf)
    - reComputer J4011
    - reComputer J4012 
    - reComputer J3010
    - reComputer J3011

Aqui escolhemos o datasheet do [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf). 

**Passo 2:** Navegue até a seção **40 Pin Expansion Header - J10**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**Passo 3:** Encontre o nome do **Header Pin #**, certificando-se de que o uso padrão é **GPIO** na coluna **Default Usage / Description**

Por exemplo, verifique o **Header Pin 15**. O **Default Usage** dele é **GPIO**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**Passo 4:** Para o mesmo pino, encontre o nome na coluna **Module Pin Name**. No nosso exemplo, é **GPIO12**

## Acessar e controlar o GPIO

Agora temos 2 métodos diferentes para acessar os GPIOs nas placas Jetson com base na disponibilidade dos rótulos de GPIO diretamente. Usando o primeiro método, podemos saber diretamente os rótulos dos pinos GPIO depois de executar um comando no dispositivo. No entanto, se os rótulos dos pinos não forem mostrados diretamente, você pode usar o segundo método.

### Método 1

Neste método, o arquivo dts para GPIO está incluído dentro da versão do JetPack que você grava e já terá os GPIOs rotulados corretamente para que você possa obter os rótulos dos pinos diretamente do dispositivo.

**Passo 1:** Entre no terminal do dispositivo Jetson e execute este comando

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**Passo 2:** Encontre o **número do GPIO** correspondente ao **Module Pin Name** que obtivemos antes

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

Neste caso, é **gpio-268** correspondente a **GPIO12**

**Passo 3:** Execute o seguinte no terminal para exportar o pino gpio-268

```sh
cd /sys/class/gpio
echo 268 > export
```

**Passo 4:** Defina a direção e o valor. Aqui a direção pode ser **in/ out** e o valor pode ser **0/ 1** 

Por exemplo, para definir o GPIO12 como HIGH

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

Para definir o GPIO12 como LOW

```sh
echo 0 > value
```

**Passo 5:** Para definir o pino GPIO que você exportou de volta ao estado padrão, execute o seguinte

```sh
cd ..
echo 268 > unexport
```

### Método 2

Neste método, o arquivo dts para GPIO não está incluído dentro da versão do JetPack que você grava e não terá os GPIOs rotulados corretamente. Portanto, precisamos consultar outro documento (pinmux) e obter essas informações de rótulo de pino. Consulte os links abaixo de acordo com o SoM.

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Passo 1:** Baixe o documento pinmux de acordo com o SoM que você está usando. Aqui escolhemos o documento [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Passo 2:** Encontre o rótulo do GPIO (na coluna Customer Usage) correspondente ao Module Pin Name que obtivemos antes. Por exemplo, para **GPIO12**, é **GPIO3_PN.01** e aqui nos referimos a **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**Passo 3:** Entre no terminal do dispositivo Jetson e execute este comando

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**Passo 4:** Encontre o **número do GPIO** correspondente ao **rótulo do GPIO** que obtivemos antes

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

Neste caso, é **gpio-433** correspondente a **PN.01**, que também é igual a **GPIO12**

**Passo 5:** Execute o seguinte no terminal para exportar o pino gpio-433

```sh
cd /sys/class/gpio
echo 433 > export
```

**Passo 6:** Defina a direção e o valor. Aqui a direção pode ser **in/ out** e o valor pode ser **0/ 1** 

Por exemplo, para definir o GPIO12 como HIGH

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

Para definir o GPIO12 como LOW

```sh
echo 0 > value
```

**Passo 7:** Para definir o pino GPIO que você exportou de volta ao estado padrão, execute o seguinte

```sh
cd ..
echo 433 > unexport
```

### Para Jetpack6+
Semelhante ao método 2, precisamos consultar outro documento (pinmux) e obter essas informações de rótulo de pino. Consulte os links abaixo de acordo com o SoM.

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Passo 1:** Baixe o documento pinmux de acordo com o SoM que você está usando. Aqui escolhemos o documento [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Passo 2:** Encontre o rótulo do GPIO (na coluna Customer Usage) correspondente ao Module Pin Name que obtivemos antes. Por exemplo, para **GPIO12**, é **GPIO3_PN.01** e aqui nos referimos a **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**Passo 3:** Entre no terminal do dispositivo Jetson e execute este comando

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**Passo 4:** Encontre o **número do GPIO** correspondente ao **rótulo do GPIO** que obtivemos antes

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

Neste caso, é **gpiochip0 line85** correspondente a **PN.01**, que também é igual a **GPIO12**

**Passo 5:** Então podemos usar o comando **gpioset** para configurar o modo de funcionamento do GPIO.

```bash
# To set GPIO12 to HIGH
sudo gpioset --mode=wait gpiochip0 85=1
# To set GPIO12 to LOW
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info
Se você quiser saber mais sobre o comando **gpioset**, consulte isto:
https://www.acmesystems.it/gpiod
:::



## Recursos

<JetsonLeadQuote
  buttonText="Solicitar orçamento personalizado"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>