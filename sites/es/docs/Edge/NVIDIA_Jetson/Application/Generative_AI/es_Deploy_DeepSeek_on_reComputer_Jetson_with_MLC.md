---
description: Este wiki proporciona una guía paso a paso para desplegar el modelo DeepSeek en dispositivos reComputer Jetson usando MLC para inferencia de IA optimizada en el edge.
title: Desplegar DeepSeek en reComputer Jetson con MLC
keywords:
  - reComputer
  - Jetson
  - LLM
  - MLC
  - deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /deploy_deepseek_on_jetson_with_mlc
last_update:
  date: 02/13/2025
  author: Youjiang
createdAt: '2025-09-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/deploy_deepseek_on_jetson_with_mlc/
---


# Desplegar DeepSeek en reComputer Jetson con MLC

## Introducción

DeepSeek es una suite de modelos de IA de vanguardia optimizada para eficiencia, precisión y procesamiento en tiempo real. Con optimización avanzada para computación en el edge, DeepSeek permite inferencia de IA rápida y de baja latencia directamente en dispositivos Jetson, reduciendo la dependencia de la computación en la nube mientras maximiza el rendimiento.

En un [wiki anterior](/es/deploy_deepseek_on_jetson), hemos proporcionado una guía rápida para desplegar DeepSeek en Jetson. Sin embargo, el modelo desplegado exitosamente no logró una velocidad de inferencia óptima.

Este wiki proporciona una guía paso a paso para desplegar [DeepSeek](https://www.deepseek.com/) en dispositivos reComputer Jetson con [MLC](https://llm.mlc.ai/) para inferencia de IA eficiente en el edge.

## Prerrequisitos

- Dispositivo Jetson con más de 8GB de memoria.
- El dispositivo jetson necesita estar pre-flasheado con el sistema operativo jetpack [5.1.1](https://wiki.seeedstudio.com/es/reComputer_Intro/) o posterior.

:::note
En este wiki, lograremos las siguientes tareas usando el [reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D), pero también puedes intentar usar otros dispositivos Jetson.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Comenzando

### Conexión de Hardware

- Conecta el dispositivo Jetson a la red, ratón, teclado y monitor.

:::note
Por supuesto, también puedes acceder remotamente al dispositivo Jetson vía SSH a través de la red local.
:::

### Instalar y Configurar Docker de Jetson

Primero, necesitamos seguir el [tutorial](https://www.jetson-ai-lab.com/tips_ssd-docker.html) proporcionado por el Jetson AI Lab para instalar Docker.

paso1. Instalar el paquete `nvidia-container`.

```bash
sudo apt update
sudo apt install -y nvidia-container
```

:::info
Si flasheas **Jetson Linux (L4T) R36.x (JetPack 6.x) en tu Jetson usando SDK Manager, e instalas nvidia-container usando apt, en JetPack 6.x ya no instala automáticamente Docker.

Por lo tanto, necesitas ejecutar lo siguiente para instalar manualmente Docker y configurarlo.

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
```

:::

paso2. Reinicia el servicio Docker y añade tu usuario al grupo docker.

```bash
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
```

paso3. Añadir el runtime predeterminado en `/etc/docker/daemon.json`.

```bash
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
```

paso4. Reinicia Docker.

```bash
sudo systemctl daemon-reload && sudo systemctl restart docker
```

### Cargar y Ejecutar DeepSeek

Podemos referirnos al contenedor Docker proporcionado por el `Jetson AI Lab` para desplegar rápidamente el modelo DeepSeek cuantizado con MLC en Jetson.
Abre el sitio web de [Jetson AI Lab](https://www.jetson-ai-lab.com/index.html) y encuentra el comando de despliegue.

`Models` --> `Orin NX` --> `docker run` --> `copy`

:::info
Antes de copiar los comandos de instalación, podemos modificar los parámetros relevantes en la izquierda.
:::

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.png" />
</div>

Abre la ventana de terminal en el dispositivo Jetson, pega el comando de instalación que acabamos de copiar en el terminal, y presiona la tecla `Enter` en el teclado para ejecutar el comando.
Cuando veamos el siguiente contenido en la ventana del terminal, significa que el modelo deepseek ha sido cargado exitosamente en el dispositivo Jetson.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/success_install_deepseek.png" />
</div>

En este punto, podemos abrir una nueva ventana de terminal e ingresar el siguiente comando para probar si el modelo puede realizar inferencia correctamente.

:::danger
Por favor nota, no cierres la ventana de terminal que está ejecutando el modelo deepseek.
:::

```bash
curl http://0.0.0.0:9000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer none" \
  -d '{
    "model": "*",
    "messages": [{"role":"user","content":"Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": false,
    "max_tokens": 100
  }'
```

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/get_response.png" />
</div>

### Instalar Open WebUI

```bash
sudo docker run -d --network=host \
    -v ${HOME}/open-webui:/app/backend/data \
    -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
    --name open-webui \
    --restart always \
    ghcr.io/open-webui/open-webui:main
```

Después de que el instalador termine de ejecutarse, puedes ingresar `http://<ip_of_jetson>:8080` en el navegador para lanzar la interfaz de usuario.

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/install_webui.png" />
</div>

Luego, necesitamos configurar el motor de inferencia del modelo grande para OpenWebUI.

`Usuario (esquina superior derecha)` --> `Configuración` --> `Configuración de Administrador` --> `Conexiones`

Cambia la URL de OpenAI al servidor de inferencia MLC local donde DeepSeek ya está cargado.

Por ejemplo, si la dirección IP de mi dispositivo Jetson es `192.168.49.241`, mi URL debería ser `http://192.168.49.241:9000/v1`

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/cfg_model.png" />
</div>

Después de guardar la configuración, podemos crear una nueva ventana de chat para experimentar la velocidad de inferencia extremadamente rápida del modelo local DeepSeek!

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/chat.png" />
</div>

### Probar Velocidad de Inferencia

Aquí, podemos usar este script de Python para probar aproximadamente la velocidad de inferencia del modelo.

En el dispositivo Jetson, crea un nuevo archivo Python llamado `test_inference_speed.py` y llénalo con el siguiente código.

Luego, ejecuta el script ejecutando el comando `python test_inference_speed.py` en la terminal.

<details>

<summary> test_inference_speed.py </summary>

```python
import time
import requests


url = "http://0.0.0.0:9000/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer none"
}

data = {
    "model": "*",
    "messages": [{"role": "user", "content": "Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": True,
    "max_tokens": 1000
}

start_time = time.time()
response = requests.post(url, headers=headers, json=data, stream=True)

token_count = 0
for chunk in response.iter_lines():
    if chunk:
        token_count += 1
        print(chunk)

end_time = time.time()
elapsed_time = end_time - start_time
tokens_per_second = token_count / elapsed_time

print(f"Total Tokens: {token_count}")
print(f"Elapsed Time: {elapsed_time:.3f} seconds")
print(f"Tokens per second: {tokens_per_second:.2f} tokens/second")
```

</details>

<div align="center">
    <img width={800}
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/test_infer_speed.png" />
</div>

Los resultados del cálculo muestran que la velocidad de inferencia del modelo deepseek1.5B compilado con MLC desplegado en el dispositivo Jetson Orin NX es de aproximadamente **60 tokens/s**.

## Demostración del Efecto

En el video de demostración, el dispositivo Jetson opera con poco menos de 20W pero logra una velocidad de inferencia impresionante.

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/ohd_T95br90" title="deploy deepseek on jetson with mlc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Referencias

- https://www.jetson-ai-lab.com/models.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/es/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/tag/nvidia.html

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
