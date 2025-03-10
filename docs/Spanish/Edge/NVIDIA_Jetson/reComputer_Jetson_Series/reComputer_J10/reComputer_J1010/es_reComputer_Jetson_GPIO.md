---
description: Cómo utilizar GPIO de 40 pines en placas Jetson de reComputer
title: Cómo utilizar GPIO de 40 pines en placas Jetson de reComputer
keywords:
  - Edge
  - reComputer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reComputer_Jetson_GPIO
last_update:
  date: 04/12/2023
  author: Lakshantha
---

# Cómo utilizar GPIO de 40 pines en placas reComputer Jetson

Esta wiki demuestra cómo acceder y controlar el GPIO de 40 pines de las placas reComputer Jetson. Para esta wiki, hemos utilizado la reComputer J4012 como ejemplo. Sin embargo, los pasos también serán similares para otras placas reComputer Jetson.

## Antes de empezar

Aquí hay información que necesitas saber antes de comenzar a trabajar con el GPIO de 40 pines en dispositivos reComputer Jetson.

-El voltaje de operación por Pin GPIO es de 3.3V
- No se puede volver a alimentar las placas reComputer Jetson a través de GPIO debido a la limitación actual de los pines GPIO.

## Encontrar el nombre del GPIO

**Paso 1:** Abre la hoja de datos de una placa reComputer Jetson. A continuación puedes encontrar hojas de datos de todas las placas reComputer Jetson que están disponibles.

- [Carrier Board J101](https://files.seeedstudio.com/products/102991694/reComputer%20J101V2%20datasheet.pdf)
    - reComputer J1010

- [Carrier Board A206](https://files.seeedstudio.com/products/114110049/A206%20carrier%20board%20pin%20description.pdf)
    - reComputer J2011
    - reComputer J2012
    - reComputer J1020
    
- [Carrier Board J202](https://files.seeedstudio.com/wiki/reComputer/reComputer-J202-carrier-board-datasheet.pdf)
    - reComputer J2021
    - reComputer J2022
    - reComputer J1020 V2

- [Carrier Board J401](https://files.seeedstudio.com/wiki/reComputer-J4012/reComputer-J401-datasheet.pdf)
    - reComputer J4011
    - reComputer J4012 
    - reComputer J3010
    - reComputer J3011

Para esta wiki elegímos la hoja de datos de la [reComputer J4012](https://files.seeedstudio.com/products/NVIDIA/reComputer-J401x-datasheet.pdf). 

**Paso 2:** Navega a la sección **40 Pin Expansion Header - J10**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/1.png" /></div>

**Paso 3:** Busca el nombre del **Header Pin.°** y asegúrate de que su uso predeterminado sea **GPIO** en la columna **Default Usage / Description**.

Por ejemplo, revisemos el **Header Pin 15**. Su **Default Usage** (Uso predeterminado) es **GPIO**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/2.jpg" /></div>

**Paso 4:** Para el mismo pin, busca el nombre en la columna **Module Pin Name**. En nuestro ejemplo, es el **GPIO12**

## Acceder y contralar el GPIO

Tenemos 2 métodos diferentes para acceder a los GPIO en las placas Jetson según la disponibilidad de las etiquetas GPIO directamente. Usando el primer método, podemos conocer directamente las etiquetas de los pines GPIO después de ejecutar un comando dentro del dispositivo. Sin embargo, si las etiquetas de los pines no se muestran directamente, puedes utilizar el segundo método.

### Método 1

En este método, el archivo dts para GPIO se incluye dentro de la versión JetPack que actualiza y ya tendrá GPIO etiquetado correctamente para que puedas obtener las etiquetas de los pines directamente desde el dispositivo.

**Paso 1:** Ingresa a la terminal del dispositivo Jetson y ejecuta este comando

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**Paso 2:** Busca el **número GPIO** correspondiente al **Module Pin Name** que obtuvimos antes

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/3.png" /></div>

En este caso es **gpio-268** correspondiente a **GPIO12**

**Paso 3:** Ejecuta lo siguiente dentro de la terminal para exportar el pin gpio-268

```sh
cd /sys/class/gpio
echo 268 > export
```

**Paso 4:** Establece la dirección y establece el valor. Aquí la dirección puede ser **entrada/salida** y el valor puede ser **0/1**

Por ejemplo, para configurar el GPIO12 en alto

```sh
cd gpio268
echo "out" > direction
echo 1 > value
```

Para configurar el GPIO12 en bajo

```sh
echo 0 > value
```

**Paso 5:** Para restablecer el pin GPIO que exportaste al estado predeterminado, ejecuta lo siguiente

```sh
cd ..
echo 268 > unexport
```

### Método 2

En este método, el archivo dts para GPIO no está incluido dentro de la versión JetPack que actualiza y no tendrá los GPIO etiquetados correctamente. Por lo tanto, debemos consultar otro documento (pinmux) y obtener la información de la etiqueta del pin. Consulta los enlaces a continuación según el SoM.

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 1:** Descarga el documento pinmux según el SoM que estés utilizando. Aquí elegimos el documento [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 2:** Busca la etiqueta GPIO (en la columna Uso del cliente) correspondiente al nombre del pin del módulo que obtuvimos antes. Por ejemplo, para **GPIO12**, es **GPIO3_PN.01** y aquí nos referimos a **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**Paso 3:** Ingresa a la terminal del dispositivo Jetson y ejecuta este comando

```sh
sudo su
cat /sys/kernel/debug/gpio
```

**Paso 4:** Busca el **número GPIO** correspondiente a la **etiqueta GPIO** que obtuvimos antes

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/5.png" /></div>

En este caso es **gpio-433** correspondiente a **PN.01** que también es igual a **GPIO12**

**Paso 5:** Ejecuta lo siguiente dentro de la terminal para exportar el pin gpio-433

```sh
cd /sys/class/gpio
echo 433 > export
```

**Paso 6:** Establece la dirección y establece el valor. Aquí la dirección puede ser **entrada/salida** y el valor puede ser **0/1**

Por ejemplo, para configurar el GPIO12 en alto

```sh
cd PN.01
echo "out" > direction
echo 1 > value
```

Para configurar el GPIO12 en bajo

```sh
echo 0 > value
```

**Paso 7:** Para restablecer el pin GPIO que exportaste al estado predeterminado, ejecuta lo siguiente

```sh
cd ..
echo 433 > unexport
```

### Para Jetpack6+
De manera similar al método 2, necesitamos consultar otro documento (pinmux) y obtener la información de la etiqueta del pin. Consulta los enlaces a continuación según el SoM.

- [Jetson Nano](https://developer.nvidia.com/jetson-nano-pinmux)
- [Jetson Xavier NX](https://developer.nvidia.com/jetson-xavier-nx-pinmux-configuration-template-v106)
- [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 1:** Descarga el documento pinmux según el SoM que estés utilizando. Aquí elegimos el documento [Jetson Orin NX/ Nano](https://developer.nvidia.com/downloads/jetson-orin-nx-and-orin-nano-series-pinmux-config-template)

**Paso 2:** Busca la etiqueta GPIO (en la columna Uso del cliente) correspondiente al nombre del pin del módulo que obtuvimos antes. Por ejemplo, para **GPIO12**, es **GPIO3_PN.01** y aquí nos referimos a **PN.01**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-GPIO/4.png" /></div>

**Paso 3:** Ingresa a la terminal del dispositivo Jetson y ejecuta este comando

```bash
sudo apt update
sudo apt install gpiod

gpioinfo
```

**Paso 4:** Busca el **número GPIO** correspondiente a la **etiqueta GPIO** que obtuvimos antes

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo1.png" />
  <img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson/gpio/gpioinfo2.png" />
</div>

En este caso, es **gpiochip0 línea85** correspondiente a **PN.01** que también es igual a **GPIO12**

**Paso 5:** Luego podemos usar el comando **gpioset** para configurar el modo de trabajo del GPIO.

```bash
# To set GPIO12 to HIGH
sudo gpioset --mode=wait gpiochip0 85=1
# To set GPIO12 to LOW
sudo gpioset --mode=wait gpiochip0 85=0 
```

:::info
Si deseas obtener más información sobre el comando **gpioset**, consulta esto:
https://www.acmesystems.it/gpiod
:::

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>