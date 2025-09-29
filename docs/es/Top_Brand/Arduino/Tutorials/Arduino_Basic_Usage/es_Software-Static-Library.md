---
description: Uso de Bibliotecas Arduino Precompiladas
title: Uso de Bibliotecas Arduino Precompiladas
keywords:
- Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Software-Static-Library
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

<!-- # Tutoriales de Arduino - Cómo Usar Bibliotecas Estáticas (Precompiladas) en Arduino -->

Para mejorar el tiempo de compilación de proyectos grandes en Arduino, puedes usar una de las características más nuevas introducidas en Arduino IDE (>=1.8.6), **bibliotecas estáticas (precompiladas)** para tus Sketches de Arduino.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Banner.png"/></div>

**¿Por qué usar bibliotecas precompiladas?**

- La biblioteca precompilada permite compartir las funciones de la biblioteca sin exponer el código fuente.

- La única limitación de las bibliotecas precompiladas es que solo son válidas para placas o MCUs para las que han sido compiladas.

## Primeros Pasos

Tomemos una biblioteca de Arduino como ejemplo y convirtámosla a biblioteca precompilada. Aquí usaré [**Seeed_Arduino_LIS3DHTR**](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR) como biblioteca de Arduino y [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) como opción de placa.

**PASO 1. Configuraciones de la Biblioteca de Arduino**

Navega a la ruta raíz de la biblioteca y abre el archivo `library.properties` y añade lo siguiente y guarda el archivo.

```properties
dot_a_linkage=true
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/dot.png"/></div>

**PASO 2 Configuración del IDE de Arduino**

Abre el IDE de Arduino y navega a **Configuración**. Asegúrate de que las opciones "**Mostrar salida detallada durante: compilación y carga**" estén marcadas.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/Arduino-IDE.png"/></div>

**PASO 3 Obtención de la Ubicación de Compilación Temporal y la Bandera del Framework de la Placa**

Selecciona **Wio Terminal** como Placa. Compila cualquier sketch que tenga una **directiva #include para tu librería**. Esto podría ser simplemente un sketch mínimo. En mi caso, es `#include<LIS3DHTR.h>`.

Después de la compilación, revisa las ventanas de registro de compilación y encuentra la ubicación de la carpeta de compilación temporal. Esto debería imprimirse en el comando final de la salida. Por ejemplo, en mi caso el comando es:

```sh
/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-size -A /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343/pre-compile.ino.elf
```

Y así la **ruta de construcción temporal** es:

```sh
/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/buildpath.png"/></div>

Copia esta ruta y se utilizará más adelante. También hay que tener en cuenta una cosa más: encontrar la bandera **`-mcpu=`** para obtener la bandera del framework de la placa compilada para la placa seleccionada. En mi caso, Wio Terminal está etiquetado como:

```sh
-mcpu=cortex-m4
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/mcu.png"/></div>

**PASO 4 Copiar el archivo `.a` a la Carpeta de Biblioteca**

Navega a la carpeta de ruta de compilación temporal, y navega a `libraries` -> `Seeed_Arduino_LIS3DHTR` y deberías ver un archivo `Seeed_Arduino_LIS3DHTR.a`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/a.png"/></div>

Copia el archivo `Seeed_Arduino_LIS3DHTR.a` desde la carpeta &#123;carpeta de compilación temporal&#125;/libraries/&#123;nombre de biblioteca&#125; a la subcarpeta **Arduino/libraries/&#123;nombre de biblioteca&#125;/src/&#123;Bandera de Framework de Placa&#125;** de tu carpeta de biblioteca. En mi caso, se coloca bajo **`src/cortex-m4`**.

Renombra el archivo `.a`, agregando "lib" al inicio del nombre. En mi caso, se convierte en `libSeeed_Arduino_LIS3DHTR.a`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/library.png"/></div>

**PASO 5 Agregar Bandera Pre-Compilada**

Ahora, podemos navegar de vuelta al `library.properties` y eliminar `dot_a_linkage=true` y agregar las siguientes banderas:

```properties
precompiled=true
ldflags=-lSeeed_Arduino_LIS3DHTR
```

donde el `ldflags` es `-l+{nombre de la biblioteca}`.

:::note
    Ten en cuenta que no especificas la parte "lib" del nombre del archivo en la bandera.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/pre-compiled.png"/></div>

¡Ahora puedes eliminar los archivos **`.cpp`** del `src` de las carpetas de la biblioteca y el IDE de Arduino usará la biblioteca precompilada!

### ¿Tienes Problemas?

Por algunas razones, algunas placas pueden requerir el archivo `.a` más adentro del archivo `src`. Por ejemplo, Wio Terminal es el caso. Si tienes el mismo problema, por favor sigue adelante.

Revisando la información del registro de compilación, verás que hay una ruta que el IDE está buscando:

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/path.png"/></div>

```
/Users/ansonhe/Documents/Arduino/libraries/Seeed_Arduino_LIS3DHTR/src/cortex-m4/fpv4-sp-d16-hard" does not exist
```

Así que solo necesitas poner el archivo `libSeeed_Arduino_LIS3DHTR.a` dentro de `fpv4-sp-d16-hard` bajo `cortex-m4`.

<div align="center"><img src="https://files.seeedstudio.com/wiki/StaticLibraries/finalpath.png"/></div>

¡Ahora, Arduino tomará la ruta de la biblioteca precompilada!

Aquí también proporcionaremos un ejemplo que usa biblioteca estática [**aquí**](https://github.com/Seeed-Studio/Seeed_Arduino_MG126). Por favor, úsalo también como referencia.

## Recursos

- [Bibliotecas Compartidas (dinámicas) vs. Bibliotecas Estáticas —Diferencias en rendimiento](https://medium.com/@nickteixeira/shared-dynamic-libraries-vs-static-libraries-differences-in-performance-2716f5b3c826#:~:text=Advantages%3A,is%20already%20present%20in%20memory)

## FAQ

- Una cosa a tener en cuenta es que, esta característica de biblioteca precompilada solo es compatible con Arduino IDE >= **`1.8.6`**, así que por favor actualiza a la última versión de Arduino IDE para evitar este error.

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
