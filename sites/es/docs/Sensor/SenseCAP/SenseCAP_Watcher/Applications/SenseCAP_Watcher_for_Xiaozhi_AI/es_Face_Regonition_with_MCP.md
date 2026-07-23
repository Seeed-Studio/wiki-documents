---
description: Guía para implementar el reconocimiento facial con la herramienta interna MCP
title: Reconocimiento Facial con MCP
sidebar_position: 7
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Face
  - Model
  - Context
  - protocol
  - recognition
  - MCP
  - reComputer
image: https://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 04/07/2026
  author: Spencer
translation:
  skip: [zh-CN]
createdAt: '2025-11-24'
updatedAt: '2026-04-08'
url: https://wiki.seeedstudio.com/es/face_regonition_with_mcp/
---

# Ampliar el reconocimiento facial con MCP

## Descripción general

Esta guía explica cómo implementar un flujo de trabajo de reconocimiento facial usando **SenseCAP Watcher (Xiaozhi)** junto con un **sistema reComputer Raspberry Pi**.

Al grabar un firmware personalizado en el **SenseCAP Watcher**, Xiaozhi AI obtiene una capacidad de reconocimiento facial impulsada por un **reComputer** con aceleración Hailo-8. Una vez configurado, simplemente pídele al Watcher algo como "comprueba quién es esta persona" y la IA capturará automáticamente una foto, identificará el rostro frente a una base de datos local en el reComputer y responderá con el nombre de la persona y el nivel de confianza.

## Preparación de hardware

<table align="center">
  <tr>
    <th>SenseCAP Watcher para Xiaozhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
  <tr>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
    <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> Consigue uno ahora 🖱️</span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
      <strong><span style={{color: '#FFFFFF', fontSize: '16px'}}> Consigue uno ahora 🖱️</span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Requisitos previos

- Instala el sistema reComputer Raspberry Pi siguiendo: [Introducción a la Serie reComputer R2000](https://wiki.seeedstudio.com/es/r2000_series_getting_start/#flash-os)
- Repositorios de código fuente:
  - [Firmware de reconocimiento facial Xiaozhi](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)
  - [API de reconocimiento facial](https://github.com/suharvest/face_rec_api)

## Proceso de implementación

### Paso 1. Anotar la dirección IP del reComputer

Conecta el reComputer a tu red (p. ej., router) y obtén su dirección IP. La IP de ejemplo usada en esta guía es `192.168.24.10`.

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>

### Paso 2. Grabar el firmware en el Watcher

1. Conecta el PC al Watcher usando un cable Type-C en el puerto inferior.

2. Abre ESP-IDF 5.5 CMD (versión 5.5.1) y clona el repositorio de firmware:

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

3. Abre `main/boards/sensecap-watcher/sscma_camera.cc`, busca `face_rec_url` y cambia la IP por la IP de tu reComputer:

```cpp
// Before (default):
std::string face_rec_url = "http://192.168.10.131:8001/recognize";

// After (your reComputer IP):
std::string face_rec_url = "http://<reComputer_IP>:8001/recognize";
```

4. Compila y graba:

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### Paso 3. Configurar el entorno del reComputer

1. Conectarse mediante SSH:

```bash
ssh <username>@<reComputer_IP>
# Example: ssh recomputer@192.168.24.10
```

:::note
Recomendamos usar la extensión **Remote - SSH** en VS Code para conectarte a tu reComputer.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>
:::

2. Actualizar el software del sistema:

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

3. Instalar el runtime y los controladores de Hailo:

```bash
sudo apt install hailo-all
sudo reboot
```

4. Tras el reinicio, vuelve a conectar por SSH y verifica HailoRT:

```bash
hailortcli scan
hailortcli fw-control identify
```

Si ves una salida similar a la siguiente, el controlador se ha instalado correctamente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

5. Instalar uv:

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source $HOME/.local/bin/env
```

### Paso 4. Clonar la API e instalar dependencias

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```

### Paso 5. Añadir fotos e iniciar el servicio

1. Coloca fotos en la carpeta `photos/`. Cada archivo debe llevar el nombre de la persona (el nombre del archivo sin extensión se usa como nombre de la persona):

```
photos/
├── john_doe.jpg
├── jane_smith.png
└── alice_wang.jpg
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

2. Generar embeddings:

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

3. Iniciar el servicio:

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

El servicio se está ejecutando ahora en el puerto **8001**. El Watcher puede comunicarse con el reComputer para comprobar si un rostro existe en la base de datos. Puedes detener el servicio con `Ctrl + C`.

Puedes añadir una instrucción como: "Cuando se detecte una persona, utiliza la herramienta de reconocimiento facial para comprobar el nombre y la confianza: si la confianza es mayor que 0.40, salúdala por su nombre; de lo contrario, da un saludo genérico."

### Paso 6. Actualizar la base de datos de rostros

Añade nuevas fotos a la carpeta `photos/`, luego vuelve a generar los embeddings y reinicia el servicio:

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

:::tip
También puedes actualizar la base de datos mientras el servicio se está ejecutando llamando al endpoint de recarga:
```bash
curl -X POST http://localhost:8001/reload
```
:::

### Paso 7. Vaciar la base de datos de rostros

1. Elimina todos los archivos de la carpeta `photos/`.
2. Elimina el archivo `embeddings.json` en la carpeta `data/`.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

Después de vaciarla, reinicia el servicio y verás un registro limpio:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## Resultado de la ejecución

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## Preguntas frecuentes

**P: ¿Cómo puedo hacer que Xiaozhi AI llame a la API de reconocimiento facial?**

**R:** Simplemente hazle al Watcher una pregunta como "Comprueba si estoy en el sistema de reconocimiento facial". La IA invocará automáticamente la herramienta de reconocimiento facial.

**P: El servicio no puede conectarse o no reconoce rostros. ¿Qué debo comprobar?**

**R:** Verifica que:
- La dirección IP del reComputer en el firmware coincida con la IP real.
- El servicio de reconocimiento facial se esté ejecutando (`curl http://<reComputer_IP>:8001/health`).
- No haya reglas de firewall que bloqueen el puerto 8001.

**P: Hailo no se detecta después de instalar `hailo-all`. ¿Qué debo hacer?**

**R:** Vuelve a ejecutar `hailortcli scan` después de un reinicio completo. Si aún no se detecta, comprueba la conexión PCIe con `lspci | grep Hailo` y `dmesg | grep -i hailo`.

**P: ¿Puedo implementar el sistema de reconocimiento facial en otros dispositivos?**

**R:** Sí, siempre que el dispositivo ejecute un sistema basado en Linux con hardware Hailo-8. Se recomienda la serie reComputer, ya que esta guía está validada en esa plataforma.

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
