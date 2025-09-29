---
description: Esta wiki introduce una solución de motor controlado por voz basada en la plataforma Jetson, detallando el hardware requerido, métodos de conexión y pasos de implementación de software.
title: Control de Motor por Voz LLM en Jetson
keywords:
- reComputer
- Jetson
- LLM
- Motor
- Qwen
- Function Calling
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.webp
slug: /es/control_motor_by_voice_llm_on_jetson
last_update:
  date: 08/19/2025
  author: Youjiang
---


# Control de Motor por Voz LLM en Jetson

## Introducción

Esta wiki construye un sistema de control de motor por voz de extremo a extremo basado en la plataforma Jetson (reComputer Robotics J4012), integrando reconocimiento de voz, comprensión de intención de modelo de lenguaje grande (LLM) de borde y control de hardware para habilitar interacción humano-máquina natural—los usuarios pueden controlar Motores MyActuator Serie X con comandos de voz simples (ej., "Rotar 90 grados en sentido horario").

## Prerrequisitos
- reComputer Robotics J4012
- reSpeaker XVF3800
- Motores MyActuator Serie X

<table align="center">
    <tr>
        <th>reComputer Robotics J4012</th>
        <th>reSpeaker XVF3800</th>
        <th>Motores MyActuator Serie X</th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-respeaker-xvf3800-4-mic-array-with-xiao-esp32s3.jpg" style={{width:250, height:'auto'}}/>
            </div>
        </td>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image-motor.png" style={{width:250, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>

## Conexión de Hardware

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/hardware_connect.jfif" />
</div>

## Comenzando

El flujo de trabajo de todo el sistema involucra tres pasos:

1. ASR: El micrófono captura comandos de audio del usuario y los convierte en texto usando Whisper.
2. Function Calling: El modelo de lenguaje grande genera parámetros de control del motor que cumplen los requisitos basados en las instrucciones de entrada del usuario.
3. Control del Motor: Se llama al programa de control apropiado para hacer que el motor rote a la posición especificada.

A continuación, explicaremos la implementación de cada paso en detalle.

### Instalar Servidor Whisper

Primero, necesitamos instalar el servicio Whisper para habilitar la funcionalidad ASR. Por favor abra una ventana de terminal en el dispositivo Jetson y ejecute el siguiente comando.

```bash
git clone https://github.com/jjjadand/whisper-stable4curl
cd whisper-stable4curl
export PATH=/usr/local/cuda-12.6/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.6/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
cmake --build build -j --config Release
```

Si todo va bien, verá los siguientes logs en la ventana de terminal.

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/whisper.png" />
</div>

Luego lanzamos el servicio de inferencia Whisper:

```bash
./build/bin/whisper-stream -m ./models/ggml-base.en-q5_1.bin -t 8 --step 0 --length 7000 -vth 0.7 --keep 1200
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/launch_whisper.png" />
</div>

### Instalar Ollama

Ollama es un framework de inferencia LLM de computación de borde extremadamente amigable que puede ser desplegado en Jetson con solo un comando. Abra una nueva ventana de terminal en su dispositivo Jetson y ejecute:

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama pull qwen2.5
```

:::info
Aquí, usamos el modelo de lenguaje grande Qwen 2.5 para entender la intención del usuario.
:::

### Instalar Script de Control del Motor

Ejecute el siguiente comando para iniciar el script de control del motor:

```bash
git clone https://github.com/yuyoujiang/voice_control.git
cd voice_control
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
python app.py
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/voice_control/motor_control.png" />
</div>


## Demostración del Efecto


<div class="video-container">
    <iframe width="800" height="450" src="https://www.youtube.com/embed/ORv8x0aSXfQ" title="🤖 Voice-Controlled Robot: Full Pipeline from Speech Recognition to Motor Control!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>


## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>