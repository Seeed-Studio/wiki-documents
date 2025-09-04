---
description: Entrenamiento de Modelos Integral con Edge Impulse
title: Entrenamiento de Modelos Integral con Edge Impulse
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/One-Stop-Model-Training-with-Edge-Impulse
last_update:
  date: 3/31/2023
  author: Yvonne
---

## Descripción general

En este wiki, te enseñaremos cómo entrenar tu propio modelo de IA para tu aplicación específica con **Edge Impulse** y luego desplegarlo fácilmente en el SenseCAP A1101 - Sensor de Visión AI LoRaWAN. ¡Comencemos!

:::tip
**¿Qué es Edge Impulse?** Edge Impulse es la plataforma de IA edge para equipos empresariales que construyen modelos optimizados en cualquier dispositivo edge. Entrega valor más rápido y logra innovación de productos con características avanzadas de sensores de IA.
:::

## Preparación del hardware

[Seeed SenseCAP A1101](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html) - **Sensor de Visión AI LoRaWAN** es un sensor de IA de reconocimiento de imágenes diseñado para desarrolladores. SenseCAP A1101 - Sensor de Visión AI LoRaWAN combina la tecnología de IA TinyML y la transmisión de largo alcance LoRaWAN para habilitar una solución de dispositivo de IA de bajo consumo y alto rendimiento tanto para uso interior como exterior.<br />Este sensor cuenta con la solución de visión de IA de alto rendimiento y bajo consumo de Himax que soporta el framework Google TensorFlow Lite y múltiples plataformas de IA TinyML.<br />

Es totalmente compatible con Edge Impulse, lo que significa que podrás muestrear datos en bruto de la cámara, construir modelos y desplegar modelos de aprendizaje automático entrenados al módulo directamente desde el estudio sin requerir programación. SenseCAP - Módulo de Visión AI está disponible para compra directamente desde [Seeed Studio Bazaar](https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html).

- SenseCAP A1101 - Sensor de Visión AI LoRaWAN
- Cable USB Type-C
- Windows/ Linux/ Mac con acceso a internet

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p1.jpg"/></div>

## Preparación del software

Para configurar este A1101 en Edge Impulse, necesitarás instalar el siguiente software:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. En Linux:
   - GNU Screen: instalar por ejemplo vía `sudo apt install screen`.
3. Descargar el último [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**¿Problemas instalando Edge Impulse CLI?**
Ver la [Guía de instalación y solución de problemas](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Conectando a Edge Impulse

Con todo el software en su lugar, es hora de conectar el A1101 a Edge Impulse.

:::caution **Nota:**
Si compraste el dispositivo después del **30 de marzo de 2023**, entonces no necesitas actualizar el firmware de EI, por favor salta directamente al [PASO 3](https://wiki.seeedstudio.com/es/One-Stop-Model-Training-with-Edge-Impulse/#step-3-setting-keys) Configuración de claves. Ten en cuenta que actualizar el firmware de EI sobrescribirá el modelo predeterminado.
:::

### Paso 1. Actualizar firmware del chip BL702

BL702 es el chip USB-UART que habilita la comunicación entre la PC y el chip Himax. Necesitas actualizar este firmware para que el firmware de Edge Impulse funcione correctamente.

1. Obtén el último firmware del bootloader desde [aquí](https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases): **tinyuf2-sensecap_vision_ai_xxx.bin**.

2. Conecta el A1101 a la PC vía cable USB Type-C mientras mantienes presionado el botón **Boot** en el A1101.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p2.png" /></div>
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p3.png" /></div>

3. Abre el software Bouffalo Lab Dev Cube previamente instalado, selecciona **BL702/704/706**, y luego haz clic en **Finish**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p4.png" /></div>

4. Ve a la pestaña **MCU**. Bajo **Image file**, haz clic en **Browse** y selecciona el firmware que acabas de descargar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p5.png" /></div>

5. Haz clic en **Refresh**, elige el **Port** relacionado con el A1101 conectado, establece **Chip Erase** en **True**, haz clic en **Open UART**, haz clic en **Create & Download** y espera a que el proceso se complete.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p6.png"/></div>

Verás la salida como **All Success** si todo salió bien.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p7.png"/></div>

:::note
Si el flasheo arroja un error, intenta hacer clic en **Create & Download** múltiples veces hasta que veas el mensaje **All Success**.
:::

### Paso 2. Actualizar firmware de Edge Impulse

El A1101 no viene aún con el firmware correcto de Edge Impulse. Para actualizar el firmware:

1. [Descarga el último firmware de Edge Impulse](https://files.seeedstudio.com/wiki/SenseCAP-A1101/ei_sensecap_vision_ai.uf2.zip) y extráelo para obtener el archivo **firmware.uf2**.

2. Conecta el A1101 nuevamente a la PC vía cable USB Type-C y haz doble clic en el botón **Boot** en el A1101 para entrar al **modo de almacenamiento masivo**.

3. Después de esto verás una nueva unidad de almacenamiento mostrada en tu explorador de archivos como **SENSECAP**. Arrastra y suelta el archivo **firmware.uf2** a la unidad SENSECAP.

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p8.png"/></div>

Una vez que el copiado termine, la unidad **SENSECAP** desaparecerá. Así es como podemos verificar si el copiado fue exitoso o no.

### Paso 3. Configuración de claves

Desde un símbolo del sistema o terminal, ejecuta:

```
edge-impulse-daemon
```

Esto iniciará un asistente que te pedirá iniciar sesión y elegir un proyecto de Edge Impulse. Si quieres cambiar de proyecto, ejecuta el comando con `--clean`.

Alternativamente, las versiones recientes de Google Chrome y Microsoft Edge pueden recopilar datos directamente desde tu A1101, sin necesidad del CLI de Edge Impulse. Consulta [esta publicación del blog](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) para más información.

### Paso 4. Verificar que el dispositivo está conectado

¡Eso es todo! Tu dispositivo ahora está conectado a Edge Impulse. Para verificar esto, ve a [tu proyecto de Edge Impulse](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), y haz clic en **Devices**. El dispositivo aparecerá listado aquí.

<div align="center"><img width ={800} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p9.png"/></div>

## Recopilando datos del A1101 - Vision AI

Con todo configurado, ahora puedes construir y ejecutar tu primer modelo de aprendizaje automático con estos tutoriales:

- [Detección de objetos](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Conteo de objetos usando FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Los fotogramas de la cámara integrada pueden capturarse directamente desde el estudio:

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p16.png"/></div>

Finalmente, una vez que un modelo está entrenado, ¡puede desplegarse fácilmente en el A1101 – Vision AI Module para comenzar la inferencia!

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p17.png"/></div>

## Desplegar modelo al A1101 - Vision AI

Después de construir el modelo de aprendizaje automático y descargar el firmware de Edge Impulse desde Edge Impulse Studio, despliega el modelo uf2 al SenseCAP - Vision AI siguiendo los **pasos 1 y 2** bajo la [sección Actualizar firmware de Edge Impulse](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-sensecap-a1101#2.-update-edge-impulse-firmware).
Arrastra y suelta el archivo **firmware.uf2** desde EDGE IMPULSE a la unidad **SENSECAP**.

Cuando ejecutes esto en tu interfaz local:

```
edge-impulse-daemon --debug
```

Te pedirá que hagas clic en una URL, luego verás una vista previa en vivo de la cámara en tu dispositivo.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p33.png"/></div>

## Configura tu modelo en el SenseCap Mate

- Descarga [SenseCAP Mate](https://wiki.seeedstudio.com/es/Cloud_Chain/SenseCAP_Mate_APP/SenseCAP_APP/#docusaurus_skipToContent_fallback)
  - [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
  - [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)
- Abre SenseCAP Mate e inicia sesión

<div align="center"><img width ={600} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p10.png"/></div>

- En la pantalla **Config**, selecciona **Vision AI Sensor**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p11.jpg"/></div>

- Mantén presionado el botón de configuración en el SenseCap A1101 durante 3 segundos para entrar al modo de emparejamiento bluetooth

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p12.jpg"/></div>
<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p13.jpg"/></div>

- Haz clic en **Setup** y comenzará a escanear dispositivos SenseCAP A1101 cercanos- Ve a **Settings** y asegúrate de que **Object Detection** y **User Defined 1** estén seleccionados. Si no es así, selecciónalos y haz clic en **Send**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p14.jpg"/></div>

- Ve a **General** y haz clic en **Detect**

<div align="center"><img width ={300} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/edge-impulse-A1101/p15.jpg"/></div>

- [Haz clic aquí](https://files.seeedstudio.com/grove_ai_vision/index.html) para abrir una ventana de vista previa del flujo de la cámara

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p31.png"/></div>

- Haz clic en el botón **Connect**. Luego verás una ventana emergente en el navegador. Selecciona **SenseCAP Vision AI - Paired** y haz clic en **Connect**

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/p32.png"/></div>

- ¡Ve los resultados de inferencia en tiempo real usando la ventana de vista previa!

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/SenseCAP-A1101/33.png"/></div>

Por ejemplo, como puedes ver arriba, los gatos están siendo detectados con cajas delimitadoras alrededor de ellos. Aquí "0" corresponde a cada detección de la misma clase. Si tienes múltiples clases, se nombrarán como 0,1,2,3,4 y así sucesivamente. ¡También se muestra la puntuación de confianza para cada manzana detectada (0.72 en la demostración anterior)!

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
