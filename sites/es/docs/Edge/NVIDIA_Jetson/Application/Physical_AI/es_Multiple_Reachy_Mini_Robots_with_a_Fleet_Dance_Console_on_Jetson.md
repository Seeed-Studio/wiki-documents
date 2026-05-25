---
description: Implementa un servicio de baile de Reachy Mini en Docker en múltiples dispositivos Jetson y controla toda la flota desde una interfaz web basada en un portátil.
title: Controla múltiples robots Reachy Mini con una consola de baile de flota en Jetson
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_reachy_fleet_dance
last_update:
  date: 03/25/2026
  author: Youjiang
keywords:
  - Jetson
  - Reachy Mini
  - Docker
  - Robótica
  - Web UI
  - Control de flota
createdAt: '2026-03-25'
url: https://wiki.seeedstudio.com/es/ai_robotics_reachy_fleet_dance/
updatedAt: '2026-03-25'
---

# Controla múltiples robots Reachy Mini con una consola de baile de flota en Jetson

## Introducción

Este wiki muestra cómo crear una demostración de baile multi-robot con Reachy Mini y dispositivos Jetson.

En este proyecto, cada Jetson ejecuta un servicio local de baile de Reachy Mini en Docker, exponiendo tanto una Web UI como una REST API. Un panel de control de flota independiente, basado en un portátil, puede descubrir múltiples IP de Jetson en la misma LAN y difundir los mismos comandos de baile a todos los robots Reachy Mini conectados al mismo tiempo.

El resultado final es una demo en la que puedes:

- ejecutar un Reachy Mini por dispositivo Jetson
- abrir un panel central en el navegador de tu portátil
- añadir dinámicamente múltiples direcciones IP de Jetson
- iniciar o detener el baile de todos los robots a la vez
- cambiar BPM, estilo de baile y energía para toda la flota
- activar acciones de acento y centrado en todos los robots a la vez

:::note
Este proyecto contiene dos capas:

- `reachy_bpm_dancer`: el servicio de un solo robot que se ejecuta en cada Jetson
- `reachy_fleet_control`: el panel central de flota que se ejecuta en el portátil
:::

## Tabla de contenidos

1. Preparación de hardware
2. Arquitectura del sistema
3. Preparar cada Jetson para Reachy Mini
4. Desplegar el servicio de baile de Reachy Mini en Docker
5. Ejecutar el panel de control de flota en el portátil
6. Controlar múltiples robots Reachy Mini
7. Referencia de la REST API
8. Solución de problemas
9. Referencias

## Preparación de hardware

### Lista de dispositivos

- 1 portátil con Windows o PC de control en la misma LAN
- 1 o más dispositivos Jetson
- 1 Reachy Mini conectado a cada Jetson por USB
- 1 router o switch de red para acceso LAN

Este flujo de trabajo es adecuado para dispositivos de borde basados en Jetson, incluidos los dispositivos de la serie reComputer Jetson de Seeed, siempre que el sistema de destino pueda ejecutar Docker y acceder al Reachy Mini a través de serie USB.

<div class="table-center">
<table style={{ textAlign: 'center' }}>
    <tr>
        <th> Kit reComputer Mini J501 </th>
        <th> Reachy Mini Lite </th>
    </tr>
    <tr>
        <td>
            <div style={{textAlign:'center'}}>
                <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110839-nvidia-jetson-orin-nano-developer-kit.jpg" style={{width:400, height:'auto'}}/>
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
                <a class="get_one_now_item" href="https://www.seeedstudio.com/NVIDIAr-Jetson-Orintm-Nano-Developer-Kit-p-5617.html">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
        <td>
            <div class="get_one_now_container" style={{textAlign: 'center'}}>
                <a class="get_one_now_item" href="https://huggingface.co/reachy-mini">
                    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
                </a>
            </div>
        </td>
    </tr>
</table>
</div>

### Cableado y conexión

Para cada nodo de robot:

- conecta Reachy Mini al Jetson mediante USB
- enciende el Jetson
- asegúrate de que el portátil y todos los dispositivos Jetson estén en la misma LAN

### Lista de comprobación de encendido

En cada Jetson, verifica que el dispositivo serie de Reachy Mini sea visible:

```bash
ls /dev/ttyACM*
```

Si puedes ver un dispositivo como `/dev/ttyACM0`, el enlace de hardware está listo.

## Arquitectura del sistema

Esta demo utiliza un diseño de concentrador y radios:

- cada Jetson aloja un contenedor de baile de Reachy Mini
- cada contenedor expone la Web UI local del robot y la REST API en el puerto `8042`
- el portátil ejecuta una aplicación web de control de flota en el puerto `8060`
- el portátil consulta todas las APIs de Jetson y distribuye los mismos comandos de control a todos los robots en línea

:::info
El servicio del lado Jetson está diseñado para control de movimiento simbólico de baja latencia. Utiliza un bucle ligero `set_target()` y no depende de entrada de micrófono ni de cámara.
:::

Diseño de red sugerido:

```text
Laptop (Fleet Control, port 8060)
    |- Jetson A -> Reachy Mini A -> http://<jetson-a-ip>:8042
    |- Jetson B -> Reachy Mini B -> http://<jetson-b-ip>:8042
    |- Jetson C -> Reachy Mini C -> http://<jetson-c-ip>:8042
```

## Preparar cada Jetson para Reachy Mini

Ejecuta los siguientes pasos en cada Jetson que vaya a controlar un Reachy Mini.

```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
sudo systemctl daemon-reload && sudo systemctl restart docker
```

## Desplegar el servicio de baile de Reachy Mini en Docker

### Descargar y ejecutar la imagen de Docker
Descarga la imagen de Docker desde [aquí](https://seeedstudio88-my.sharepoint.com/:f:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IgB5HfoKnB8eSa-ERVUZ0J9hAUT572CBk0tShhJdqwQ_qMo?e=g2DHYe).

Si recibiste una imagen empaquetada como `reachy-bpm-dancer_20260323_linux-arm64.tar.gz`:

```bash
docker load -i reachy-bpm-dancer_20260323_linux-arm64.tar.gz

docker run -d \
  --name reachy-bpm-dancer \
  --restart unless-stopped \
  -p 8042:8042 \
  -p 8000:8000 \
  --device /dev/ttyACM0:/dev/ttyACM0 \
  -e REACHY_SERIAL_PORT=/dev/ttyACM0 \
  reachy-bpm-dancer:20260323-arm64
```

### Verificar el servicio del lado Jetson

Abre la interfaz local de un solo robot:

```text
http://<jetson-ip>:8042/
```

Abre la documentación de la API:

```text
http://<jetson-ip>:8042/docs
```

Comprueba el estado del robot desde la terminal:

```bash
curl http://127.0.0.1:8042/api/status
```

Inicia el baile del robot:

```bash
curl -X POST http://127.0.0.1:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":124,"style":"anthem","energy":1.15}'
```

Detén el robot:

```bash
curl -X POST http://127.0.0.1:8042/api/dance/stop
```

:::note
El servicio del lado Jetson expone:

- Web UI en el puerto `8042`
- REST API en el puerto `8042`
- demonio de Reachy Mini en el puerto `8000`
:::

## Ejecutar el panel de control de flota en el portátil

El panel de control de flota se ejecuta por separado en tu portátil y te permite gestionar todos los nodos Jetson desde un solo navegador.

### Preparar el entorno local de Python

En el portátil:

```powershell
git clone https://github.com/yuyoujiang/reachy_fleet_control
cd reachy_fleet_control
python -m venv .venv
.\.venv\Scripts\python -m pip install -e .
```

:::info
Esta demostración utiliza Windows. Si tu PC ejecuta un sistema operativo diferente, utiliza los comandos correspondientes para instalar el entorno.
:::

### Iniciar la Web UI de control de flota

```powershell
.\.venv\Scripts\python -m uvicorn reachy_fleet_control.main:app --host 0.0.0.0 --port 8060
```

Luego abre:

```text
http://127.0.0.1:8060/
```

O accede desde otro dispositivo en la LAN:

```text
http://<laptop-ip>:8060/
```

<div align="center">
    <img width={900} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reachy_fleet_control/fleet_ui.png" />
</div>

### Funciones del panel de flota

El panel admite:

- añadir IP de Jetson, `host:port` o URLs completas
- eliminar nodos Jetson fuera de línea o sin uso
- monitorizar el estado en línea y la latencia por robot
- difundir comandos de baile a cada Reachy Mini registrado
- mantener la lista de dispositivos en un archivo de estado local

La lista de dispositivos se almacena localmente en Windows en:

```text
C:\Users\<username>\.reachy_fleet_control\fleet_state.json
```

## Controlar múltiples robots Reachy Mini

Una vez que ambas capas estén en ejecución, el flujo de trabajo multi-robot es sencillo.

### Paso 1. Añadir dispositivos Jetson

En la página de Fleet Control:

- introduce una IP de Jetson como `192.168.1.130`
- opcionalmente añade una etiqueta
- haz clic en **Add Device**

Repite el mismo paso para cada Jetson en la LAN.

### Paso 2. Comprobar el estado en línea

Cada tarjeta de dispositivo mostrará:

- endpoint
- etiqueta
- estado en línea o fuera de línea
- BPM actual
- conteo de beats
- latencia

Si un dispositivo está fuera de línea, el panel lo mantendrá en la lista y seguirá consultándolo hasta que vuelva.

### Paso 3. Difundir un comando de baile

Utiliza los controles compartidos para actualizar todos los robots a la vez:

- **Start Dance**
- **Pause Dance**
- **Accent All**
- **Center All**
- preajustes de BPM: `82`, `124`, `135`
- selección de estilo: `groove`, `bounce`, `sway`, `anthem`
- control deslizante de energía

### Paso 4. Observar la flota

Cuando la difusión se realiza correctamente:

- todos los robots Reachy Mini en línea cambian al mismo BPM deseado
- el estilo seleccionado se aplica a todos los robots
- el recuento de dispositivos activos se actualiza en el panel
- cada Jetson continúa generando movimiento localmente, por lo que un pequeño jitter de red no detiene el bucle de baile

## Demostración del efecto

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/NWoJMN_IWH0" title="Reachy Fleet Control" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



## Referencia de la REST API

Este proyecto expone dos capas de API.

### API de un solo robot del lado Jetson

URL base:

```text
http://<jetson-ip>:8042
```

Endpoints disponibles:

- `GET /api`
- `GET /api/status`
- `GET /api/styles`
- `GET /api/presets`
- `POST /api/settings`
- `POST /api/dance/start`
- `POST /api/dance/stop`
- `POST /api/dance/accent`
- `POST /api/dance/center`

Ejemplo:

```bash
curl -X POST http://<jetson-ip>:8042/api/dance/start \
  -H "Content-Type: application/json" \
  -d '{"bpm":135,"style":"anthem","energy":1.2}'
```

### API de flota del lado del portátil

URL base:

```text
http://<laptop-ip>:8060
```

Endpoints disponibles:

- `GET /api`
- `GET /api/fleet/status`
- `POST /api/fleet/devices`
- `DELETE /api/fleet/devices?endpoint=<host:port>`
- `POST /api/fleet/settings`
- `POST /api/fleet/dance/start`
- `POST /api/fleet/dance/stop`
- `POST /api/fleet/dance/accent`
- `POST /api/fleet/dance/center`

Añadir un dispositivo Jetson:

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/devices" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"target":"192.168.1.130","label":"Stage Left"}'
```

Iniciar todos los robots:

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/start" `
  -Method Post `
  -ContentType "application/json" `
  -Body '{"bpm":124,"style":"anthem","energy":1.15}'
```

Detener todos los robots:

```powershell
Invoke-RestMethod `
  -Uri "http://127.0.0.1:8060/api/fleet/dance/stop" `
  -Method Post
```

## Solución de problemas

### Reachy Mini no se detecta en el Jetson

Comprueba que el nodo serie USB existe:

```bash
ls /dev/ttyACM*
```

Si es necesario, actualiza la asignación de dispositivos de Docker y el valor de `REACHY_SERIAL_PORT`.

### El puerto `8042` o `8060` ya está en uso

Detén el proceso antiguo o elige un puerto diferente antes de iniciar el servicio de nuevo.

### El panel de control de la flota muestra un dispositivo como desconectado

Comprueba lo siguiente:

- el portátil y el Jetson están en la misma LAN
- el servicio de Jetson se está ejecutando
- el cortafuegos de Jetson no bloquea el puerto `8042`
- la dirección IP introducida en el panel es correcta

### El robot no se mueve pero la API responde

Comprueba los registros del contenedor en el Jetson:

```bash
docker compose logs -f
```

Confirma también que:

- Reachy Mini está conectado al Jetson
- la ruta del dispositivo serie coincide con la configuración del contenedor
- el robot no está siendo utilizado por otro proceso

## Referencias

- [Configurar Docker en Jetson](https://www.jetson-ai-lab.com/tutorials/ssd-docker-setup/)
- [Repositorio de GitHub de Reachy Mini](https://github.com/pollen-robotics/reachy_mini)
- [Reachy Mini AGENTS.md](https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
