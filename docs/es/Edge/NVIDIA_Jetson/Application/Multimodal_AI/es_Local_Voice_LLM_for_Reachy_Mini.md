---
description: Este wiki detalla cómo desplegar y operar un asistente robótico interactivo por voz completamente local utilizando la combinación de hardware de reComputer Mini J501 y Reachy Mini Lite. La guía recorre la instalación del servidor Ollama, la configuración de modelos de voz locales y aplicaciones de conversación, logrando finalmente un sistema de conversación por voz sin conexión y de baja latencia que no requiere conexión a internet. Presenta un proyecto completo de extremo a extremo, cubriendo la configuración de hardware, el despliegue de software y una demostración final del sistema funcionando.
title: ¡Despliega LLM de voz local en reComputer Mini para Reachy Mini!
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/local_voice_llm_on_recomputer_jetson_for_reachy_mini
last_update:
  date: 01/06/2026
  author: youjiang
---

¡Doble Mini! Este proyecto construirá un sistema de asistente robótico interactivo por voz completamente localizado, de baja latencia y alta privacidad. Centrado en el dispositivo de computación de borde reComputer Mini J501, despliega servicios locales de reconocimiento de voz, modelo de lenguaje grande y síntesis de voz. Utilizando la plataforma robótica de código abierto Reachy Mini como terminal físico para la interacción humano-computadora, logra una experiencia de interacción inteligente encarnada que es perceptiva, conversacional y accionable.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/workflow.png" />
</div>

## Prerrequisitos
- Kit reComputer Mini J501
- Reachy Mini Lite

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> Kit reComputer Mini J501 </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-100020039-recomputer-mini-j501---carrier-board-for-jetson-agx-orin.jpg" style={{width:400, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/world_frame.png" style={{width:400, height:'auto'}}/>
            </div>
        </td>
    </tr>
    <tr>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.pollen-robotics.com/reachy-mini/#order">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

:::info
Por favor, asegúrate de que tu dispositivo Jetson incluya la [placa portadora](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html), el módulo Jetson y el [sistema de refrigeración](https://www.seeedstudio.com/reComputer-Mini-J501-heatsink-with-fan-p-6605.html), y que el sistema operativo JP6.2 esté instalado.
:::

:::info
Antes de configurar el software, por favor conecta el Reachy Mini al puerto Type-A del reComputer Mini J501.
:::


## Desplegar Aplicaciones de Software

**Paso1.** Instalar y ejecutar el servidor de inferencia ollama en reComputer Jetson.

Ejecuta el siguiente comando en la ventana de terminal (`Ctrl + Alt + T`) en reComputer Jetson.

```bash
# Install Ollama (visit https://ollama.ai for platform-specific instructions)
curl -fsSL https://ollama.com/install.sh | sh

# Pull the required model
ollama pull llama3.2-vision:11b
```
:::note
La descarga del modelo tomará aproximadamente 10 minutos. Por favor, espera pacientemente.
:::

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/ollama.png" />
</div>

**Paso2.** Instalar aplicación de conversación.

Ejecuta el siguiente comando en la ventana de terminal en reComputer Jetson.

:::note
Si quieres configurar el entorno de ejecución en un entorno virtual conda, por favor usa el comando `conda activate <name>` para activar el entorno objetivo antes de ejecutar los siguientes comandos de instalación.
:::

```bash
cd Downloads
git clone https://github.com/Seeed-Projects/reachy-mini-loacl-conversation.git
cd reachy-mini-loacl-conversation
pip install -r requirements.txt -i https://pypi.jetson-ai-lab.io/
pip install "reachy-mini"
```

:::info
Por favor, consulta [aquí](https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/tree/master) para más información de instalación.
:::


**Paso3.** Lanzar aplicación.

Ejecuta el siguiente comando en la ventana de terminal en reComputer Jetson para lanzar el daemon de reachy mini.

```bash
reachy-mini-daemon
```

Abre otra terminal y ejecuta:

```bash
# Set environment variables
export OLLAMA_HOST="http://localhost:11434"
export OLLAMA_MODEL="qwen2.5:7b"
export COQUI_MODEL_NAME="tts_models/zh-CN/baker/tacotron2-DDC-GST"
export DEFAULT_VOLUME="1.5"

# Start the voice assistant
python main.py
```
<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_mini/launch_app.png" />
</div>

:::info
Aquí, se utiliza un modelo chino para la demostración. Puedes reemplazarlo con modelos en otros idiomas según tus necesidades.
:::


## Demostración del Efecto

Después de que el programa se inicie normalmente, podemos usar las teclas `R` y `S` en el teclado para controlar el inicio y parada de la grabación. Una vez que se detiene la grabación, el programa llamará al modelo de lenguaje grande local para generar una respuesta.

<div class="video-container">
  <iframe width="801" height="450" src="https://www.youtube.com/embed/broyI7PLm_g" title="Double Mini! Deploy local voice LLM on reComputer Mini for Reachy Mini!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias

- https://ollama.com/download/linux
- https://github.com/modelscope/FunASR
- https://github.com/coqui-ai/TTS
- https://github.com/Seeed-Projects/reachy-mini-loacl-conversation/

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
