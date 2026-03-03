---
description: Un asistente de IA completamente local e interactivo por voz que combina Speech-to-Text (STT), Text-to-Speech (TTS) y Modelos de Lenguaje Grande (LLMs) locales usando Ollama y NVIDIA Riva. Funciona completamente en dispositivos edge como NVIDIA Jetson — permitiendo conversaciones de voz privadas, en tiempo real y naturales sin depender de la nube.
title: Chatbot en Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/local_chatbot_recomputer
last_update:
  date: 01/29/2025
  author: kourosh
---

# Construyendo un Chatbot Interactivo por Voz con LLMs Locales, STT y TTS

Este proyecto hace realidad el sueño de un **asistente de IA completamente interactivo por voz** — funcionando completamente **en hardware local**, sin dependencia de servicios en la nube.  
Al combinar **Speech-to-Text (STT)**, **Text-to-Speech (TTS)** y **Modelos de Lenguaje Grande (LLMs) Locales** usando **Ollama**, el sistema permite conversaciones naturales, privadas y en tiempo real entre humanos y máquinas.

Toda la configuración funciona dentro de contenedores Docker y puede desplegarse en **dispositivos NVIDIA Jetson**, **computadoras edge** o cualquier sistema basado en Linux con aceleración GPU.

---

## Descripción General del Proyecto

El objetivo de este proyecto es crear un **chatbot controlado por voz** capaz de:

- Escuchar tu voz en tiempo real.
- Entender tu habla usando **ASR (Reconocimiento Automático de Voz)** local.
- Generar respuestas inteligentes usando un **LLM local**.
- Hablar esas respuestas naturalmente usando **TTS (Text-to-Speech)**.

Todos los componentes son autónomos y funcionan localmente, dándote control total sobre tus datos — sin dependencias de la nube, sin latencia, sin preocupaciones de privacidad.

---

## Componentes del Sistema

### 1. Módulo Speech-to-Text (STT)

Transforma tu entrada hablada en texto en tiempo real.  
Características clave:

- Transcripción rápida y precisa usando **NVIDIA Riva ASR**.  
- Soporte para múltiples idiomas.  
- Optimizado para dispositivos edge.

### 2. Módulo Text-to-Speech (TTS)

Convierte las respuestas del chatbot en salida de voz de sonido natural.  
Características destacadas:

- Síntesis de voz multilingüe, expresiva y realista.  
- Impulsado por **NVIDIA Riva TTS**.  
- Baja latencia — perfecto para conversaciones interactivas.

### 3. LLM Local (Ollama)

En el corazón del chatbot está **Ollama**, un motor de inferencia local para ejecutar LLMs modernos de manera eficiente.  
Características:

- Operación sin conexión (no se necesita internet).  
- Respuestas en tiempo real incluso en dispositivos Jetson.  
- Retención de contexto para diálogo fluido y coherente.  
- Soporta varios modelos incluyendo Llama, Phi, Gemma, Mistral y más.

### 4. Capa de Interacción del Usuario

Una interfaz simple e intuitiva permite a los usuarios:

- Iniciar o detener la interacción por voz mediante botones o comandos.  
- Ver transcripciones en vivo y respuestas del chatbot.  
- Disfrutar de comunicación fluida y de baja latencia de voz a voz.

---

## Configurando Ollama Localmente

Comenzaremos instalando [Jetson Containers](https://github.com/dusty-nv/jetson-containers) para gestionar y desplegar fácilmente nuestros servicios dentro de Docker.

```bash
# Install Jetson Container tools
git clone https://github.com/dusty-nv/jetson-containers
bash jetson-containers/install.sh
```

Una vez instalado, descarga y ejecuta el contenedor **Ollama**:

```bash
jetson-containers run --name ollama $(autotag ollama)
ollama run llama3.2:1b
```

💡 **Consejo:** Comienza con modelos más pequeños (como `llama3.2:1b`) para probar tu configuración, luego escala hacia arriba.

Modelos disponibles en [ollama.com/library](https://ollama.com/library):

| Modelo | Parámetros | Tamaño | Comando |
|--------|------------|--------|---------|
| Llama 3.2 | 3B | 2.0 GB | `ollama run llama3.2` |
| Llama 3.2 | 1B | 1.3 GB | `ollama run llama3.2:1b` |
| Llama 3.2 Vision | 11B | 7.9 GB | `ollama run llama3.2-vision` |
| Phi 3 Mini | 3.8B | 2.3 GB | `ollama run phi3` |
| Gemma 2 | 9B | 5.5 GB | `ollama run gemma2` |
| Mistral | 7B | 4.1 GB | `ollama run mistral` |

Si estás usando un **NVIDIA Jetson AGX**, puedes ejecutar cómodamente modelos medianos a grandes. Para Jetsons más pequeños, mantente con modelos ligeros (1B–3B).

Ejecuta Ollama ya sea directamente en terminal o a través del script Python proporcionado `ollama_run.py`.

```bash
python3 ollama_run.py
```

**Ejemplos:**

Uso en terminal  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/terminal_ollama.gif" width="700"/>

Integración con Python  
<img src="https://files.seeedstudio.com/wiki/reComputer/Application/Multimodal_ai/local_voice_chatbot/ollama_python.gif" width="700"/>

---

## NVIDIA Riva: STT y TTS

Para habilitar la interacción de voz real, usamos **NVIDIA Riva**, un kit de herramientas acelerado por GPU que proporciona:

- **Reconocimiento Automático de Voz (ASR)**  
- **Text-to-Speech (TTS)**  
- **Traducción Automática Neural (NMT)** (opcional)

Puede desplegarse en cualquier lugar — desde la nube hasta dispositivos embebidos como la **serie Jetson**.

### Paso 1: Obtén tu Clave API de NGC

1. Inicia sesión en [NVIDIA NGC](https://catalog.ngc.nvidia.com/).
2. Crea una **clave API** y guárdala localmente — la necesitarás para acceder a los recursos de Riva.

### Paso 2: Configura NGC en Jetson

```bash
cd ~ && mkdir ngc_setup && cd ngc_setup
wget --content-disposition https://api.ngc.nvidia.com/v2/resources/nvidia/ngc-apps/ngc_cli/versions/3.36.0/files/ngccli_arm64.zip
unzip ngccli_arm64.zip 
chmod u+x ngc-cli/ngc
echo "export PATH=\"$PATH:$(pwd)/ngc-cli\"" >> ~/.bash_profile && source ~/.bash_profile
ngc config set
```

Usa tu clave API cuando se te solicite.

### Paso 3: Instala Riva en Jetson

Asegúrate de estar ejecutando **JetPack 6.0** (o verifica la compatibilidad en la [Matriz de Soporte](https://docs.nvidia.com/deeplearning/riva/user-guide/docs/support-matrix.html)).

```bash
cd ~ && mkdir riva_setup && cd riva_setup
ngc registry resource download-version nvidia/riva/riva_quickstart_arm64:2.16.0
cd riva_quickstart_v2.13.1
```

En `config.sh`, deshabilita los servicios no utilizados para ahorrar recursos:

```bash
service_enabled_nlp=false
service_enabled_nmt=false
```

Luego configura Docker para usar el runtime de NVIDIA editando `/etc/docker/daemon.json`:

```json
{
  "default-runtime": "nvidia",
  "runtimes": {
    "nvidia": {
      "path": "nvidia-container-runtime",
      "runtimeArgs": []
    }
  }
}
```

Reinicia Docker:

```bash
sudo systemctl restart docker
```

Finalmente, inicializa e inicia Riva:

```bash
sudo bash riva_init.sh
sudo bash riva_start.sh
```

---

## Ejecutando el Chatbot

Una vez que todo esté listo, ejecuta la aplicación principal:

```bash
git clone https://github.com/kouroshkarimi/local_chatbot_jetson.git
cd local_chatbot_jetson
python3 app.py --list-input-devices
python3 app.py --list-output-devices
python3 app.py --input-device <your_input_id> --output-device <your_output_id>
```

Ahora puedes **hablar con tu asistente**, y **escuchará, pensará y te responderá** — todo localmente, impulsado por tu Jetson.

---

## Ventajas Clave

- 🔒 100% privado – ningún dato sale de tu dispositivo  
- ⚡ Respuesta en tiempo real – optimizado para baja latencia  
- 🌐 Multilingüe – soporta múltiples idiomas y acentos  
- 🧩 Modular – cada componente puede ser reemplazado o extendido  
- 🖥️ Amigable para edge – desplegable en Jetson o sistemas Linux estándar

---

## Mejoras Futuras

- Integración con **módulos de visión** para interacción multimodal  
- Soporte para **clonación de voz personalizada** en TTS  
- **Persistencia de memoria** entre sesiones para diálogo más natural  
- Interfaz web o móvil

---

## 🎉 ¡Disfruta tus Conversaciones!

Felicitaciones — acabas de construir tu propio **asistente de IA habilitado por voz y que prioriza la privacidad**.  
Ahora siéntate, habla con tu robot y diviértete explorando el futuro de la interacción humano-IA. 🤖💬

> "TEN UNA BUENA CONVERSACIÓN CON ROBOTS :)"

---

## Referencias

1. [RAG Local basado en Jetson con LlamaIndex](https://wiki.seeedstudio.com/es/Local_RAG_based_on_Jetson_with_LlamaIndex/)
2. [Chatbot de Voz Local: Despliega Riva y Llama2 en reComputer](https://wiki.seeedstudio.com/es/Local_Voice_Chatbot/)
3. [ChatTTS](https://github.com/2noise/ChatTTS)
4. [Speech to Text (STT) y Text to Speech (TTS)](https://www.librechat.ai/docs/configuration/stt_tts)
5. [Ollama](https://github.com/ollama/ollama)

---

## ✨ Proyecto de Colaborador

- Este proyecto está respaldado por el [Proyecto de Colaborador](https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479) de Seeed Studio.
- Un agradecimiento especial a [kourosh karimi](https://github.com/orgs/Seeed-Studio/projects/6/views/1?filterQuery=Building+a+Voice-Interactive+Chatbot+with+STT%2C+TTS%2C+and+Local+LLMs%21&pane=issue&itemId=74620249&issue=Seeed-Studio%7Cwiki-documents%7C1553) por sus esfuerzos dedicados. Tu trabajo será [exhibido](https://wiki.seeedstudio.com/es/contributors/).

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
