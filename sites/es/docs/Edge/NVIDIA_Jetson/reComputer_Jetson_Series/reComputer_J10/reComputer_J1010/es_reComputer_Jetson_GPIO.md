---
description: Cómo usar el GPIO de 40 pines en las placas reComputer Jetson
title: Cómo usar el GPIO de 40 pines en las placas reComputer Jetson
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
---

# Cómo usar el GPIO de 40 pines en las placas reComputer Jetson

Este wiki demuestra cómo acceder y controlar el GPIO de 40 pines de las placas reComputer Jetson. Para este wiki, hemos usado reComputer J4012 como ejemplo. Sin embargo, los pasos serán similares para otras placas reComputer Jetson también.

## Antes de comenzar

Aquí hay información que necesitas saber antes de comenzar a trabajar con el GPIO de 40 pines en los dispositivos reComputer Jetson.

- El nivel de voltaje por pin GPIO es 3.3V
- No puedes alimentar las placas reComputer Jetson a través del GPIO debido a la limitación de corriente de los pines GPIO

## Encontrar el nombre del GPIO

**Paso 1:** Abre la hoja de datos de una placa reComputer Jetson. A continuación puedes encontrar las hojas de datos de todas las placas reComputer Jetson que están disponibles.

- [Placa portadora J101](https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf)
    - reComputer J1010

- [Placa portadora A206](https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf)
    - reComputer J2011
    - reComputer J2012
    - reComputer J1020
    
- [Placa portadora J202](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf)
    - reComputer J2021
    - reComputer J2022
    - reComputer J1020 V2

- [Placa portadora J401](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf)
    - reComputer J4011
    - reComputer J4012 
    - reComputer J3010
    - reComputer J3011

Aquí hemos elegido la hoja de datos del [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf).

**Paso 2:** Navega a la sección **Cabecera de expansión de 40 pines - J10**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**Paso 3:** Encuentra el nombre del **Pin de cabecera #** asegurándote de que su uso predeterminado sea **GPIO** bajo la columna **Uso predeterminado / Descripción**

Por ejemplo, verifica el **Pin de cabecera 15**. Su **Uso predeterminado** es **GPIO**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**Paso 4:** Para el mismo pin, encuentra el nombre bajo la columna **Nombre del pin del módulo**. En nuestro ejemplo, es **GPIO12**

## Acceder y controlar el GPIO

Ahora tenemos 2 métodos diferentes para acceder a los GPIOs en las placas Jetson basados en la disponibilidad de las etiquetas GPIO directamente. Usando el primer método, podemos conocer directamente las etiquetas de los pines GPIO después de ejecutar un comando dentro del dispositivo. Sin embargo, si las etiquetas de los pines no se muestran directamente, puedes usar el segundo método.

### Método 1

En este método, el archivo dts para GPIO está incluido dentro de la versión de JetPack que flasheas y tendrá el GPIO etiquetado apropiadamente ya para que puedas obtener las etiquetas de los pines directamente desde el dispositivo.

**Paso 1:** Ingresa al terminal del dispositivo Jetson y ejecuta este comando

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**Paso 2:** Encuentra el **número GPIO** correspondiente al **Nombre del Pin del Módulo** que obtuvimos antes

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

En este caso, es **gpio-268** correspondiente a **GPIO12**

**Paso 3:** Ejecuta lo siguiente dentro de la terminal para exportar el pin gpio-268

```sh
cd /sys/class/gpio
echo 268 > export
```

**Paso 4:** Establece la dirección y establece el valor. Aquí la dirección puede ser **in/ out** y el valor puede ser **0/ 1** 

Por ejemplo, para establecer GPIO12 en HIGH

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

Para establecer GPIO12 en LOW

```sh
echo 0 > value
```

**Paso 5:** Para establecer el pin GPIO que exportaste de vuelta al estado predeterminado, ejecuta lo siguiente

```sh
cd ..
echo 268 > unexport
```

### Método 2

En este método, el archivo dts para GPIO no está incluido dentro de la versión de JetPack que flasheas y no tendrá GPIO etiquetado correctamente. Por lo tanto, necesitamos referirnos a otro documento (pinmux) y obtener esta información de etiquetas de pines. Consulta los enlaces a continuación según el SoM.

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 1:** Descarga el documento pinmux según el SoM que estés usando. Aquí elegimos el documento [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 2:** Encuentra la etiqueta GPIO (bajo la columna Customer Usage) correspondiente al Module Pin Name que obtuvimos antes. Por ejemplo, para **GPIO12**, es **GPIO3_PN.01** y aquí nos referimos a **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**Paso 3:** Ingresa al terminal del dispositivo Jetson y ejecuta este comando

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**Paso 4:** Encuentra el **número de GPIO** correspondiente a la **etiqueta de GPIO** que obtuvimos antes

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

En este caso, es **gpio-433** correspondiente a **PN.01** que también es igual a **GPIO12**

**Paso 5:** Ejecuta lo siguiente dentro de la terminal para exportar el pin gpio-433

```sh
cd /sys/class/gpio
echo 433 > export
```

**Paso 6:** Establece la dirección y establece el valor. Aquí la dirección puede ser **in/ out** y el valor puede ser **0/ 1** 

Por ejemplo, para establecer GPIO12 en HIGH

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

Para establecer GPIO12 en LOW

```sh
echo 0 > value
```

**Paso 7:** Para establecer el pin GPIO que exportaste de vuelta al estado predeterminado, ejecuta lo siguiente

```sh
cd ..
echo 433 > unexport
```

### Para Jetpack6+
Similar al método 2, necesitamos referirnos a otro documento (pinmux) y obtener esta información de etiqueta de pin. Consulta los enlaces a continuación según el SoM.

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 1:** Descarga el documento pinmux según el SoM que estés usando. Aquí elegimos el documento [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 2:** Encuentra la etiqueta GPIO (bajo la columna Customer Usage) correspondiente al Module Pin Name que obtuvimos antes. Por ejemplo, para **GPIO12**, es **GPIO3_PN.01** y aquí nos referimos a **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**Paso 3:** Ingresa al terminal del dispositivo Jetson y ejecuta este comando

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**Paso 4:** Encuentra el **número de GPIO** correspondiente a la **etiqueta de GPIO** que obtuvimos antes

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

En este caso, es **gpiochip0 line85** correspondiente a **PN.01** que también es igual a **GPIO12**

**Paso 5:** Luego podemos usar el comando **gpioset** para configurar el modo de funcionamiento del GPIO.

```bash
# To set GPIO12 to HIGH
sudo gpioset --mode=wait gpiochip0 85=1
# To set GPIO12 to LOW
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info
Si deseas aprender más sobre el comando **gpioset**, por favor consulta esto:
https://www.acmesystems.it/gpiod
:::

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>