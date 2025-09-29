---
description: Desplegar modelo de IA con Cochl.Sense en dispositivos NVIDIA Jetson
title: Primeros pasos con Cochl.Sense
tags:
  - AI model deploy
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Cochl.Sense-Jetson-Getting-Started
last_update:
  date: 03/27/2023
  author: Lakshantha
---

# Primeros pasos con Cochl.Sense en dispositivos NVIDIA® Jetson

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif" style={{width:700, height:'auto'}}/></div>

En este tutorial, vas a construir un sistema de reconocimiento de sonido que se ejecuta en la placa NVIDIA Jetson usando Cochl.Sense. [Cochl.Sense](https://www.cochl.ai) es una plataforma de desarrollo de Machine Listening para desplegar aplicaciones de aprendizaje profundo en dispositivos edge como los dispositivos NVIDIA® Jetson.

Machine Listening, también conocido como análisis de audio o reconocimiento de sonido, es un campo en rápido crecimiento que utiliza inteligencia artificial y aprendizaje automático para analizar y comprender datos de audio. Su objetivo es el análisis automatizado y la comprensión de sonidos de música, animales, vehículos, máquinas, ruido urbano, así como el habla humana. Cochl.Sense está construido con un modelo de Machine Listening preentrenado que incluye 37 sonidos objetivo diferentes, como disparos, ladridos de perro, sirena o llanto de bebé.

Entrenar un modelo con grandes cantidades de datos y desarrollar aplicaciones de Machine Listening desde cero requiere conocimiento profundo de Procesamiento de Señales de Audio y Aprendizaje Profundo. Cochl.Sense ha hecho que Machine Listening sea fácilmente accesible para desarrolladores y empresas, por lo que puedes construir e implementar una aplicación de Machine Listening con rendimiento potente con unas pocas líneas de código.

## Características clave de Cochl.Sense

- Puntuación F-1 del 94% medida oficialmente por IEEE
- Modelo preentrenado probado y verificado en el mundo real
- Soporte para multi-etiquetado (detectar múltiples sonidos simultáneamente)
- [Más de 30 sonidos objetivo disponibles](https://docs.cochl.ai/sense/tags)

## Obtener una licencia de prueba

Dado que el SDK de Cochl.Sense viene con todas las características del producto, el acceso se otorga después de revisión. Para acceder al SDK, necesitarás enviar este breve [Formulario de Google](https://forms.gle/Pa2iYWirLJVNS7Pp6) y contarnos cómo planeas usar el SDK. Cochl te enviará una licencia de prueba de 2 semanas a tu correo electrónico.

Si quieres un inicio rápido, también puedes comenzar gratis con la API en la nube que viene con las mismas funcionalidades, pero se ejecuta en la nube. [¡Haz clic aquí](https://www.cochl.ai/product) para explorar!

## Hardware soportado

- NVIDIA Jetson

    - [Sistemas completos con SoMs de NVIDIA por Seeed](https://www.seeedstudio.com/reComputer-J4012-p-5586.html)
    - Kits de desarrollo oficiales por NVIDIA

- Raspberry Pi 3+ o superior
- Google Coral Board

Aunque Cochl.Sense es compatible con múltiples plataformas de hardware, en este wiki, solo nos enfocaremos en usar Cochl.Sense con la plataforma NVIDIA Jetson.

## Prerrequisitos

Para este tutorial necesitarás:

- [reComputer Jetson](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) o cualquier otro dispositivo NVIDIA Jetson ejecutando JetPack 4.6 o superior
- Micrófono USB que soporte audio de profundidad de 16 bits, frecuencia de muestreo de 22,050 Hz

## Flashear JetPack a Jetson

Ahora necesitas asegurarte de que el dispositivo Jetson esté flasheado con un sistema [JetPack](https://developer.nvidia.com/embedded/jetpack) incluyendo componentes SDK como CUDA, TensorRT, cuDNN y más. Puedes usar NVIDIA SDK Manager o línea de comandos para flashear JetPack al dispositivo.

Para las guías de flasheo de dispositivos Jetson de Seeed, por favor consulta los siguientes enlaces:
- [reComputer J1010 | J101](https://wiki.seeedstudio.com/es/reComputer_J1010_J101_Flash_Jetpack)
- [reComputer J2021 | J202](https://wiki.seeedstudio.com/es/reComputer_J2021_J202_Flash_Jetpack)
- [reComputer J1020 | A206](https://wiki.seeedstudio.com/es/reComputer_J1020_A206_Flash_JetPack)
- [reComputer J4012 | J401](https://wiki.seeedstudio.com/es/reComputer_J4012_Flash_Jetpack)
- [A203 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_A203_Flash_System)
- [A205 Carrier Board](https://wiki.seeedstudio.com/es/reComputer_A205_Flash_System)
- [Jetson Xavier AGX H01 Kit](https://wiki.seeedstudio.com/es/Jetson_Xavier_AGX_H01_Driver_Installation)
- [Jetson AGX Orin 32GB H01 Kit](https://wiki.seeedstudio.com/es/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack)

## Comenzando

¡Desplegar tu primer proyecto de escucha automática solo toma un par de minutos! Al final de esta wiki, podrás detectar sonidos en una transmisión de audio en vivo desde un micrófono conectado a un dispositivo Jetson. En este tutorial, aprenderás cómo:

1. Crear un proyecto usando el panel de Cochl
2. Descargar el SDK de Cochl.Sense y el código fuente para la aplicación de ejemplo
3. Autenticar tu aplicación de ejemplo
4. Ejecutar tu aplicación de detección de sonidos

### 1. Crear un proyecto usando el Panel de Cochl

**Paso 1:** Abre un navegador web desde tu Jetson. Para crear un nuevo proyecto, [regístrate](https://dashboard.cochl.ai) para obtener una cuenta gratuita de Cochl e inicia sesión en tu cuenta del Panel.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/2.png" /></div>

**Paso 2:** Después de iniciar sesión, haz clic en el botón **+ Nuevo proyecto**. Nombra tu proyecto, selecciona **Edge SDK** del tipo de producto, y **selecciona etiquetas** para agregar los sonidos objetivo que quieres detectar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/3.png" /></div>

### 2. Descargar SDK y código fuente para la aplicación de ejemplo

**Paso 1:** Haz clic en el proyecto que acabas de crear, y haz clic en **Cochl.Sense SDK** para visitar el enlace externo para descargar el archivo SDK en [Cochl Docs](https://docs.cochl.ai).

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/4.png" /></div>

**Paso 2:** En la página de **Cochl Docs**, haz clic en **Resources** en la pestaña izquierda.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/5.png" /></div>

**Paso 3:** Desplázate hacia abajo para encontrar el **Enlace de Descarga** para el SDK de C++ y el SDK de Python. En este tutorial, estamos descargando el SDK `AArch64` porque estamos usando la plataforma Jetson.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/6.png" /></div>

**Paso 4:** Abre una nueva pestaña, ve a [este repositorio](https://github.com/cochlearai/sense-sdk-cpp-tutorials) para los tutoriales de Sense-sdk C++, y descarga el código fuente.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/7.png" /></div>

**Paso 5:** Extrae lo que acabas de descargar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/8.png" /></div>

**Paso 6:** Mueve la carpeta sense a la carpeta `sense-sdk-cpp-tutorials-main`. A continuación se muestra cómo se ve la carpeta `sense-sdk-cpp-tutorials-main`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/9.png" /></div>

### 3. Autenticar tu aplicación de ejemplo

**Paso 1:** Ve a la carpeta `example`, encuentra el archivo `sense-stream.cc`, y ábrelo con cualquier editor de texto.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/10.png" /></div>

**Paso 2:** Regresa al navegador, abre la página del proyecto, navega a la página de **Settings**, y copia la `Project key`.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/11.png" /></div>

**Paso 3:** Ve al archivo `sense-stream.cc` que abriste con el editor de texto. Pega la `Project Key` que acabas de copiar para reemplazar la línea `"Your project key"` y **guarda** el archivo.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/12.png" /></div>

### 4. Ejecutar tu aplicación de detección de sonidos

**Paso 1:** Abre la Terminal desde tu Jetson.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/13.png" /></div>

**Paso 2:** Ejecuta los siguientes comandos para instalar las dependencias

```sh
sudo apt update
sudo apt install libpulse-dev pulseaudio pulseaudio-utilss
```

**Paso 3:** Ve a la carpeta del código fuente y construye tu aplicación con los siguientes comandos.

```sh
cd Downloads/sense-sdk-cpp-tutorials-main
g++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib
```

**Paso 4:** Ejecuta la aplicación e intenta hacer los sonidos tú mismo o reproducir los sonidos desde otras fuentes como YouTube. Puedes ver los resultados de detección de sonido en tiempo real. Asegúrate de que el micrófono esté conectado al dispositivo Jetson antes de ejecutar la aplicación. 

```sh
./sense-stream 
```

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/14.png" /></div>

:::note
Ten en cuenta que la detección de disparos no se puede detectar bien cuando reproduces desde altavoces, ya que el modelo fue entrenado para funcionar mejor con disparos reales.
:::

**Paso 5:** Para detener la aplicación, presiona **Ctrl+C**.

**Paso 6:** Si quieres ver tus resultados de detección desde la web, ve a tu **Panel de Control** y haz clic en la pestaña Analytics y establece el rango de tiempo junto al botón **Filter**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Cochl.Sense/15.png" /></div>

¡Felicitaciones! Has desplegado exitosamente una aplicación de Escucha Automática en tiempo real. Puedes ir más allá y construir tus aplicaciones personalizadas de Ciudades Inteligentes o Hogar Inteligente o integrar con otras aplicaciones. Si estás interesado en otras tecnologías de Escucha Automática, puedes visitar [esta página](https://labs.cochl.ai) y probar otras soluciones de Cochl como identificación de música, análisis de contenido musical o verificación de hablante.

## Recursos

- [Documentación de Cochl](https://docs.cochl.ai)
- [Sitio web de Cochl](https://www.cochl.ai)
- [Demos basadas en web](https://labs.cochl.ai)

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