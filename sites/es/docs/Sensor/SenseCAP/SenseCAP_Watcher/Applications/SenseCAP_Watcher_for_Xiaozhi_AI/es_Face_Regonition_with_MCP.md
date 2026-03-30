---
description: Guía para implementar Face_Regonition con la herramienta MCP interna
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
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /face_regonition_with_mcp
last_update:
  date: 11/25/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-11-25'
updatedAt: '2025-11-26'
url: https://wiki.seeedstudio.com/es/face_regonition_with_mcp/
---
# Extendiendo el Reconocimiento Facial con MCP

## Descripción General

Esta guía explica cómo implementar un flujo de trabajo de reconocimiento facial usando **SenseCAP Watcher (Xiaozhi)** junto con un **sistema reComputer Raspberry Pi**. El Watcher captura imágenes y las envía al reComputer para la coincidencia facial contra una base de datos local usando la herramienta MCP interna.

## Preparación del Hardware

<table align="center">
  <tr>
    <th>SenseCAP Watcher para XiaoZhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## Prerrequisitos
Sigue esta guía para instalar el sistema reComputer Raspberry Pi: [Introducción a la Serie reComputer R2000](https://wiki.seeedstudio.com/es/r2000_series_getting_start/#flash-os)

## Resultado de Ejecución

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## Repositorios de Código Fuente:

- [Repositorio de Código del Firmware de Reconocimiento Facial Xiaozhi](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)

- [API de Reconocimiento Facial](https://github.com/suharvest/face_rec_api#)

## Proceso de Implementación

### Paso 1. Anotar la dirección IP del reComputer

- Conecta el reComputer a tu red, como el router

- Obtén su dirección IP, ejemplo de IP usado aquí: 192.168.24.10

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>


### Paso 2. Flashear el firmware en el Watcher

- Conecta la PC al Watcher usando un cable Type-C en el puerto inferior

- Abre ESP-IDF 5.5 CMD (versión 5.5.1) y navega a una carpeta adecuada

- Clona el repositorio del firmware del Watcher

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

- Localiza la sección de código para comunicación con el reComputer
    - Ubicación del archivo: main/boards/sensecap-watcher/sscma_camera.cc (línea 769)

```cpp
std::string face_rec_url = "http://192.168.10.131.80001/recognize"
```

- Cambia la dirección IP a la IP real de tu reComputer

    ```cpp
    std::string face_rec_url = <Your_reComputer_actual_IP>
    ```
    - ejemplo

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr4.png" style={{width:800, height:'auto'}}/></div>

- Compila y flashea el firmware

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### Paso 3. SSH al reComputer y Preparar el Entorno

- Conecta vía SSH (reemplaza el nombre de usuario e IP según sea necesario)

```bash
ssh <Your_reComputer's username>@<Your_reComputer's host IP>
# For example : ssh recomputer@192.168.24.10
```

:::note
Recomendamos usar la extensión **Remote - SSH** en VS Code para conectarte a tu reComputer.
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>

:::

- Instala Docker y configura el usuario de docker

```bash
curl -sSL https://linuxmirrors.cn/docker.sh -o install_docker.sh
sudo bash install_docker.sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

sudo groupadd docker
sudo usermod -aG docker $USER
```

- Actualiza el software del sistema

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

- Instala uv

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### Paso 4. Clonar la API y actualizar dependencias

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```
- Instala DKMS, HailoRT, agrega configuración y reinicia

```bash
sudo apt-get install dkms
sudo dpkg --install hailort-4.21.0/hailort_4.21.0_arm64.deb hailort-4.21.0/hailort-pcie-driver_4.21.0_all.deb
echo "options hailo_pci force_desc_page_size=4096" | sudo tee /etc/modprobe.d/hailo_pci.conf
```

- Verifica el estado de HailoRT

```bash
sudo reboot
hailortcli scan
hailortcli fw-control identify
```
    - Si ves información similar a la siguiente, significa que tu controlador se ha instalado exitosamente

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

### Paso 5. Agregar Fotos e Iniciar el Servicio de Reconocimiento Facial

- Coloca las fotos en la carpeta photos/

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

- Genera embeddings

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

- Da permisos de ejecución e inicia el servicio

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

- El servicio ahora está ejecutándose. El Watcher puede comunicarse con el reComputer para verificar si un rostro existe en la base de datos. Puedes detener el servicio con `Ctrl + C`.

- Puedes agregar un prompt como: "Cuando se detecte una persona, usa la herramienta de reconocimiento facial para verificar el nombre y la confianza: si la confianza es mayor al 40%, salúdala por su nombre; de lo contrario, da un saludo genérico."

### Paso 6. Actualizar la Base de Datos de Rostros

- Después de detener el servicio, agrega nuevas fotos a la carpeta `photos/` y regenera los embeddings y reinicia el servicio.

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

### Paso 7. Limpiar la Base de Datos de Rostros

- Elimina todos los archivos en la carpeta `photos/`.

- Elimina el archivo `embedding.json` en la carpeta `data/`.

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

- Después de limpiar, ejecuta el servicio y verás el mismo log

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## FAQ

**P: ¿Cómo puedo hacer que la IA Xiaozhi llame a la API de reconocimiento facial?**

**R:** Simplemente pregúntale al Watcher algo como: "Verifica si estoy en el sistema de reconocimiento facial."
La IA automáticamente llamará a la herramienta MCP para verificar la base de datos de rostros.

**P: ¿Qué debo hacer si el sistema de reconocimiento facial no puede subir una foto?**

**R:** Por favor verifica que la dirección IP sea correcta y que el servicio de reconocimiento facial esté ejecutándose correctamente.

**P: ¿Puedo implementar el sistema de reconocimiento facial en otros dispositivos?**

**R:** Sí. Siempre que el dispositivo ejecute un sistema basado en Linux y pueda conectarse a la red, puede usarse para la implementación. Sin embargo, la serie reComputer ofrece mejor rendimiento de cómputo.

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
