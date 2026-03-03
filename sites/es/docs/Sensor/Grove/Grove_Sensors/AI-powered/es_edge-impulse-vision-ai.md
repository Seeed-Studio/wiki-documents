---
description: Entrena y Despliega Tu Propio Modelo de IA con Edge Impulse
title: Entrena y Despliega Tu Propio Modelo de IA con Edge Impulse
keywords:
- Sensor Vision_AI
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/edge-impulse-vision-ai
last_update:
  date: 1/31/2023
  author: jianjing Huang
---


# Entrenamiento rápido de modelos para Grove Vision AI usando Edge Impulse

[Grove - Vision AI Module](https://wiki.seeedstudio.com/es/Grove-Vision-AI-Module) es una placa del tamaño de un pulgar basada en el procesador Himax HX6537-A que está equipada con una cámara OV2640 de 2 megapíxeles, micrófono, acelerómetro de 3 ejes y giroscopio de 3 ejes. Ofrece almacenamiento con flash SPI de 32 MB, viene preinstalado con algoritmos ML para reconocimiento facial y detección de personas y también admite modelos personalizados. Es compatible con el ecosistema XIAO y Arduino, todo lo cual lo hace perfecto para comenzar con proyectos de cámara con IA!

Es totalmente compatible con Edge Impulse, lo que significa que podrás muestrear datos en bruto de la cámara, construir modelos y desplegar modelos de aprendizaje automático entrenados al módulo directamente desde el estudio sin requerir programación. Grove - Vision AI Module está disponible para compra directamente desde [Seeed Studio Bazaar](https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html).

<div align="center"><img width ={400} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"/></div>

El firmware de Edge Impulse para esta placa es de código abierto y está alojado en GitHub: [edgeimpulse/firmware-seeed-vision-ai-internal](https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware)

Enlaces de acceso rápido:

- Código fuente del firmware: [Repositorio de GitHub](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai)
- Firmware precompilado: [seeed-grove-vision-ai.zip](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip)

## Instalación de dependencias

Para configurar esta placa en Edge Impulse, necesitarás instalar el siguiente software:

1. [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
2. En Linux:
   - GNU Screen: instalar por ejemplo vía `sudo apt install screen`.
3. Descargar el último [Bouffalo Lab Dev Cube](https://dev.bouffalolab.com/download)

:::tip
**¿Problemas instalando Edge Impulse CLI?**
Consulta la [Guía de instalación y solución de problemas](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation).
:::

## Conectando a Edge Impulse

Con todo el software en su lugar, es hora de conectar la placa a Edge Impulse.

### Paso 1. Actualizar el firmware del chip BL702

BL702 es el chip USB-UART que permite la comunicación entre la PC y el chip Himax. Necesitas actualizar este firmware para que el firmware de Edge Impulse funcione correctamente.

1. descarga la última versión del archivo BootLoader en el enlace de abajo. El nombre del BootLoader es usualmente `tinyuf2-grove_vision_ai_vx.x.x.bin`.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar el Firmware</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

2. Conecta la placa a la PC vía cable USB Type-C mientras mantienes presionado el botón **Boot** en la placa.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg" /></div>

3. Abre el software Bouffalo Lab Dev Cube previamente instalado, selecciona **BL702/704/706**, y luego haz clic en **Finish**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png" /></div>

4. Ve a la pestaña **MCU**. Bajo **Image file**, haz clic en **Browse** y selecciona el firmware que acabas de descargar.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png" /></div>

5. Haz clic en **Refresh**, elige el **Port** relacionado con la placa conectada, establece **Chip Erase** en **True**, haz clic en **Open UART**, haz clic en **Create & Download** y espera a que el proceso se complete.

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"/></div>

Verás la salida como **All Success** si todo salió bien.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"/></div>

:::note
Si el flasheo arroja un error, intenta hacer clic en **Create & Download** múltiples veces hasta que veas el mensaje **All Success**.
:::

### Paso 2. Actualizar el firmware de Edge Impulse

La placa aún no viene con el firmware correcto de Edge Impulse. Para actualizar el firmware:

1. [Descarga el último firmware de Edge Impulse](https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip) y extráelo para obtener el archivo **firmware.uf2**.

2. Conecta la placa nuevamente a la PC vía cable USB Type-C y haz doble clic en el botón **Boot** en la placa para entrar al **modo de almacenamiento masivo**.

3. Después de esto verás una nueva unidad de almacenamiento mostrada en tu explorador de archivos como **GROVEAI**. Arrastra y suelta el archivo **firmware.uf2** a la unidad GROVEAI.

<div align="center"><img width ={200} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"/></div>

Una vez que termine la copia, la unidad **GROVEAI** desaparecerá. Así es como podemos verificar si la copia fue exitosa o no.

### Paso 3. Configuración de claves

Desde un símbolo del sistema o terminal, ejecuta:

```
edge-impulse-daemon
```

Esto iniciará un asistente que te pedirá que inicies sesión y elijas un proyecto de Edge Impulse. Si quieres cambiar de proyecto, ejecuta el comando con `--clean`.

Alternativamente, las versiones recientes de Google Chrome y Microsoft Edge pueden recopilar datos directamente desde tu placa, sin necesidad del CLI de Edge Impulse. Consulta [esta publicación del blog](https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser) para más información.

### Paso 4. Verificar que el dispositivo está conectado

¡Eso es todo! Tu dispositivo ahora está conectado a Edge Impulse. Para verificar esto, ve a [tu proyecto de Edge Impulse](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), y haz clic en **Devices**. El dispositivo aparecerá listado aquí.

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"/></div>

## Recopilando datos del Grove - Vision AI

Con todo configurado, ahora puedes construir y ejecutar tu primer modelo de aprendizaje automático con estos tutoriales:

- [Añadiendo vista a tus sensores](https://docs.edgeimpulse.com/docs/tutorials/image-classification).
- [Detección de objetos](https://docs.edgeimpulse.com/docs/tutorials/object-detection).
- [Contando objetos usando FOMO](https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo).

Los fotogramas de la cámara integrada pueden capturarse directamente desde el estudio:

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"/></div>

Finalmente, una vez que se entrena un modelo, ¡puede desplegarse fácilmente al Módulo Grove – Vision AI para comenzar la inferencia!

<div align="center"><img width ={700} src="https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"/></div>

## Desplegar modelo al Grove - Vision AI

Después de construir el modelo de aprendizaje automático y descargar el firmware de Edge Impulse desde Edge Impulse Studio, despliega el modelo uf2 al Grove - Vision AI siguiendo los pasos 1 y 2 bajo la [sección Actualizar firmware de Edge Impulse](https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware).

## Compilar firmware de Edge Impulse desde el código fuente

Si quieres compilar el firmware de Edge Impulse desde el código fuente, puedes visitar [este repositorio de GitHub](https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai) y seguir las instrucciones incluidas en el README. El modelo usado para el firmware oficial se puede encontrar en este [proyecto público](https://studio.edgeimpulse.com/public/87291/latest).

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
