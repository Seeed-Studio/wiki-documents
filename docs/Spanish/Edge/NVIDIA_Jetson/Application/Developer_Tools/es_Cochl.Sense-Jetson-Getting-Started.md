---
description: Implementa un modelo de IA con Cochl.Sense en dispositivos NVIDIA Jetson
title: Introducción a Cochl.Sense
tags:
  - Despliegue de modelo de IA
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
---

# Primeros pasos con Cochl.Sense en dispositivos NVIDIA® Jetson

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

En este tutorial, crearás un sistema de reconocimiento de sonido que se ejecutará en una NVIDIA Jetson utilizando Cochl.Sense. [Cochl.Sense](https://www.cochl.ai) es una plataforma de desarrollo de Machine Listening para implementar aplicaciones de aprendizaje profundo en dispositivos de borde como los dispositivos NVIDIA® Jetson. 

Machine Listening, también conocida como análisis de audio o reconocimiento de sonido, es un campo en rápido crecimiento que utiliza inteligencia artificial y aprendizaje automático para analizar y comprender datos de audio. Su objetivo es el análisis automatizado y la comprensión de los sonidos de musicales, de animales, vehículos, máquinas, ruido urbano y de habla humana. Cochl.Sense está construido con un modelo de escucha automática previamente entrenado que incluye 37 sonidos de clases diferentes, como disparos, ladridos de perros, sirenas o llantos de bebés.

Entrenar un modelo con grandes cantidades de datos y desarrollar aplicaciones de Machine Listening desde cero requiere un conocimiento profundo de Procesamiento de Señales de Audio y Aprendizaje Profundo. Cochl.Sense ha hecho que el Machine Listening sea fácilmente accesible para desarrolladores y empresas, de modo que puedas crear e implementar una aplicación de Machine Listening con un rendimiento potente con unas pocas líneas de código.

## Características principales de Cochl.Sense

- 94% de puntuación F-1 medida oficialmente por la IEEE
- Modelo pre entrenado probado y verificado en el mundo real
- Compatible con etiquetado múltiple (detección de múltiples sonidos simultáneamente)
- [Más de 30 clases de sonidos disponibles](https://docs.cochl.ai/sense/tags)

## Obtener una licencia de prueba

Dado que Cochl.Sense SDK viene con todas las funciones del producto, el acceso se otorga después de la revisión. Para acceder al SDK, deberás enviar este breve [formulario de Google](https://forms.gle/Pa2iYWirLJVNS7Pp6) y decirnos cómo planeas utilizar el SDK. Cochl te enviará una licencia de prueba de 2 semanas a tu correo electrónico.

Si deseas un comienzo rápido, también puedes comenzar gratis con la API de la nube que viene con las mismas funcionalidades, pero se ejecuta en la nube. [Haz click aquí](https://www.cochl.ai/product) para explorar la opción.

## Hardware soportado

- NVIDIA Jetson

    - [NVIDIA SoMs de Seeed](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - Kits de desarrollo oficiales de NVIDIA

- Raspberry Pi 3+ o superior
- Placa de desarrollo Google Coral

Aunque Cochl.Sense es compatible con múltiples plataformas de hardware, en esta wiki solo nos centraremos en el uso de Cochl.Sense con la plataforma NVIDIA Jetson.

## Prerequisitos

Para este tutorial necesitarás:

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) o cualquier dispositiov NVIDIA Jetson con JetPack 4.6 o superior
- Micrófono USB que admita audio de profundidad de 16 bits, con una frecuencia de muestreo de 22,050 Hz

## Flashear JetPack en la Jetson

Ahora debes asegurarte de que el dispositivo Jetson esté actualizado con un sistema [JetPack](https://developer.nvidia.com/embedded/jetpack) que incluya componentes SDK como CUDA, TensorRT, cuDNN y más. Puedes utilizar NVIDIA SDK Manager o la línea de comandos para actualizar JetPack al dispositivo.

Para obtener guías de actualización de dispositivos impulsados ​​por Seeed Jetson, consulta los enlaces a continuación:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## Primeros pasos

¡Implementar tu primer proyecto de escucha automática solo te llevará un par de minutos! Al finalizar esta wiki, podrás detectar sonidos en una transmisión de audio en vivo desde un micrófono conectado a un dispositivo Jetson. En este tutorial, aprenderás a: 

1. Crear un proyecto utilizando el dashboard de Cochl
2. Descargar el Cochl.Sense SDK y el código fuente para el periodo de prueba 
3. Autentificar tu periodo de prueba
4. Crear tu propia aplicación de Machine Listening

### 1. Crear un proyecto utilizando el dashboard de Cochl

**Paso 1:** Abre un navegador web desde tu Jetson. Para crear un nuevo proyecto, [regístrate aquí](https://dashboard.cochl.ai) para obtener una cuenta Cochl gratuita e inicia sesión en tu cuenta del dashboard.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**Paso 2:** Después de iniciar sesión, haz click en el botón **+ New Project**. Asigna un nombre a tu proyecto, selecciona **Edge SDK** en **Product Type** y **select tags** para agregar los tipos sonidos que deseas detectar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. Descargar el Cochl.Sense SDK y el código fuente para el periodo de prueba

**Paso 1:** Haz click en el proyecto que acabas de crear y haz click en **Cochl.Sense SDK** para visitar el enlace externo y descargar el archivo SDK en [Cochl Docs](https://docs.cochl.ai).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**Paso 2:** En la página de **Cochl Docs**, haz click en la pestaña de **Resources**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**Paso 3:** Desplázate hacia abajo para encontrar el **Download Link** para C++ SDK y Python SDK. En este tutorial, descargamos el SDK `AArch64` porque estamos usando un dispositivo Jetson.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**Paso 4:** Abre una nueva pestaña, ve a [este repositorio](https://github.com/cochlearai/sense-sdk-cpp-tutorials) para ver los tutoriales de Sense-sdk C++ y descarga el código fuente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**Paso 5:** Extrae el contenido de la descarga

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**Paso 6:** Mueve la carpeta "sense" a la carpeta `sense-sdk-cpp-tutorials-main`. A continuación se muestra cómo se ve la carpeta `sense-sdk-cpp-tutorials-main`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. Autentificar tu periodo de prueba

**Paso 1:** Ve a la carpeta `example`, busca el archivo `sense-stream.cc` y ábrelo con cualquier editor de texto.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**Paso 2:** Vuelve al navegador, abre la página del proyecto, navega hasta la página **Settings** y copia la "Project Key" (clave del proyecto).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**Paso 3:** Ve al archivo `sense-stream.cc` que abriste con el editor de texto. Pega la `Project Key` (Clave del proyecto) que acabas de copiar para reemplazar la línea `"Your Project Key"` y haz click en **save** el archivo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. Crear tu propia aplicación de Machine Listening

**Paso 1:** Abre una terminal en tu dispositivo Jetson

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**Paso 2:** Ejecuta los siguiente comandos para instalar todas las dependencias:

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**Paso 3:** Ve a la carpeta del código fuente y crea tu aplicación con los siguientes comandos.

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**Paso 4:** Ejecuta la aplicación e intenta crear los sonidos tu mismo o reproducirlos de otras fuentes como YouTube. Puedes ver los resultados de la detección de sonido en tiempo real. Asegúrate de que el micrófono esté conectado al dispositivo Jetson antes de ejecutar la aplicación.

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::nota
Ten en cuenta que la detección de disparos no se puede detectar bien cuando se reproduce desde altavoces, ya que el modelo fue entrenado para funcionar mejor con disparos reales.
:::

**Paso 5:** Para parar la ejecución de la aplicación presiona **Ctrl+C**.

**Paso 6:** Si deseas ver los resultados de tu detección desde la web, ve a tu **Dashboard**, haz click en la pestaña Análisis y establece el rango de tiempo junto al botón **Filter**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

¡Felicidades! Has implementado con éxito una aplicación de escucha automática en tiempo real. Puedes ir más allá y crear tus aplicaciones personalizadas de Smart Cities o Smart Home e integrarlas con otras aplicaciones. Si estás interesado en otras tecnologías de escucha automática, puedes visitar [esta página](https://labs.cochl.ai) y probar otras soluciones de Cochl como identificación de música, análisis de contenido musical o verificación de altavoz.

## Recursos

- [Cochl Docs](https://docs.cochl.ai)
- [Cochl Website](https://www.cochl.ai)
- [Web-based Demos](https://labs.cochl.ai)

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