---
description: Proporciona un tutorial para integrar reCamera con Home Assistant. Home Assistant está instalado en reComputer.
title: Introducción a Home Assistant
keywords:
  - reCamera
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/HA.png
slug: /getting_started_for_home_assistant_with_recamera
sidebar_position: 6
last_update:
  date: 11/11/2025
  author: Xinrui Wu
createdAt: '2025-11-11'
updatedAt: '2025-12-22'
url: https://wiki.seeedstudio.com/es/getting_started_for_home_assistant_with_recamera/
---

# Introducción a Home Assistant con reCamera

## Introducción

Home Assistant es un sistema de plataforma de hogar inteligente de código abierto, y el usuario puede conectar fácilmente sus propios dispositivos de Internet de las Cosas al sistema para una gestión unificada. Sin embargo, el punto especial principal de Home Assistant no es solo realizar la visualización de varios dispositivos de detección, sino realizar la vinculación automática de dispositivos multiplataforma, solo una plataforma de hogar inteligente así es suficiente para tener vitalidad.

## Preparación de Hardware

Una reCamera (puede ser cualquiera de la serie 2002, versión HQ POE, o versión pan-tilt, pero tenga en cuenta que la versión POE no tiene funcionalidad WiFi y requiere un switch con función POE para ser conectado en el mismo segmento de red)  
una reComputer (cualquier versión está bien, aquí uso reComputer AI R2130-12 como ejemplo)  
una computadora

<table align="center">
 <tr>
  <th>reCamera 2002 Serie</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
  <th>reComputer AI R2000 Serie</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_24_1.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Instalación de Home Assistant (tomando la reComputer AI R2130-12 como ejemplo)

### Preparación del sistema

Si Home Assistant ya ha sido instalado, entonces proceda directamente al paso "Encontrar la ruta del archivo de configuración" para la configuración posterior.

1.actualizar sistema

```bash
sudo apt update && sudo apt upgrade -y
```

2.Instalar dependencias necesarias

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

### Instalar Docker

1.Instalación con script oficial

```bash
curl -fsSL https://get.docker.com | sh
```

2.Permitir al usuario actual usar Docker

```bash
sudo usermod -aG docker $USER
```

3.Reiniciar el sistema para que los permisos surtan efecto

```bash
sudo reboot
```

4.Verificar instalación

```bash
docker run hello-world
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

Si ve las palabras "Hello from Docker!", indica que la instalación fue exitosa.

### Instalar Home Assistant (Modo Contenedor)

1. Crear el directorio de montaje
Para el propósito de persistir el archivo de configuración:

```bash
mkdir -p ~/homeassistant/config
```

2. Iniciar el contenedor
Ejecute el siguiente comando para iniciar Home Assistant  
(este paso puede tomar un tiempo, la velocidad depende de su red)

```bash
docker run -d \
  --name homeassistant \
  --privileged \
  --restart=unless-stopped \
  -e TZ=Asia/Shanghai \
  -v ~/homeassistant/config:/config \
  -v /etc/localtime:/etc/localtime:ro \
  --network=host \
  ghcr.io/home-assistant/home-assistant:stable
```

Explicación de Parámetros:
- `--network=host`: Home Assistant puede acceder directamente a la red del host (necesario para el descubrimiento automático de dispositivos)
- `-v ~/homeassistant/config:/config`: Guardar archivos de configuración
- `--restart=unless-stopped`: Reinicio automático
- `--privileged`: Habilitar acceso al hardware (USB Zigbee/Z-Wave, etc.)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### Acceder a Home Assistant

1. Verificar IP

```bash
hostname -I
```

2. Acceder al navegador

Después de que Docker se inicie, espere de 1 a 2 minutos, y luego acceda en el navegador:

```bash
http://<your IP>:8123
```

ej:

```bash
http://192.168.1.88:8123
```

El inicio inicial lo llevará a la interfaz de inicialización. Luego puede comenzar a crear una cuenta y configurar su hogar inteligente.

### Encontrar la ruta del archivo de configuración

Todas las configuraciones de Home Assistant se guardan en:

```bash
/homeassistant/config/
```

Puede verlo a través de las siguientes instrucciones:

```bash
cd /homeassistant/config
ls
```

Verá estos documentos:

```bash
automations.yaml  configuration.yaml  scripts.yaml ...
```

### Configurar automatización para recibir datos de ReCamera

1. Instalar el editor nano

```bash
sudo apt install nano -y
```

2. Editar `automations.yaml`:

```bash
sudo nano /homeassistant/config/automations.yaml
```

Reemplazar el contenido con:

```yaml
- alias: "ReCamera Detection"
  description: "Receive the detection results from ReCamera"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

  mode: single
```

Guardar y Salir:

- **Ctrl + O** → Enter (Guardar)
- **Ctrl + X** (Salir)

3. Editar configuration.yaml:

```bash
sudo nano /homeassistant/config/configuration.yaml
```

Reemplazar el contenido con:

```yaml
# ==========================
# Basic Configuration of Home Assistant
# ==========================

# Load default integration (do not delete)
default_config:

# Load the front-end theme
frontend:
  themes: !include_dir_merge_named themes

# Load the independent configuration file
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera Physical Configuration Section
# ==========================

# Define an "input_text" entity to store the latest detection results from ReCamera.
input_text:
  recamera_people_raw:
    name: Original detection result of ReCamera
    max: 255
    icon: mdi:account-group  # Optional: Display as "Group" icon

# Define a template sensor to display the detection results of ReCamera
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera Personnel Counting Function"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline
```

Guardar y Salir:

- **Ctrl + O** → Enter (Guardar)
- **Ctrl + X** (Salir)

4. Después de guardar y salir, reiniciar Home Assistant

```bash
docker restart homeassistant
```

## La configuración de reCamera (tomando la versión 2002w como ejemplo)

### Después de insertar la reCamera en la computadora, acceder a 192.168.42.1

Si la interfaz no se puede abrir continuamente, consulte la sección [Factory Reset](https://wiki.seeedstudio.com/es/recamera_getting_started/#factory-reset) para restablecer el dispositivo. Después del restablecimiento, visite 192.168.42.1 nuevamente. Después del restablecimiento, se le pedirá que cambie la contraseña.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### Después de iniciar sesión, haga clic en la esquina inferior derecha para ingresar a "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### Después de ingresar al Workspace, configure los nodos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

Se han agregado cuatro nuevos nodos: "debug1", "debug2", "function1" y "HTTP request".  
debug1 y debug2 se usan para observar la información de salida, opcional o no; function1 se usa para procesar datos; el nodo HTTP request se usa para enviar datos a Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

A continuación, necesitamos modificar el nodo original "Model Info Handle" para que solo produzca la cantidad de un objetivo de detección específico.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

Haga doble clic para abrir este nodo y reemplace el código con el siguiente contenido:

```javascript
let currentModel = "Current People";
const object = 'person';

const labels = msg.payload?.data?.labels ?? [];

if (!Array.isArray(labels)) {
    return { payload: '' };
}

const num = labels.filter(label => String(label).toLowerCase() === object).length;
currentModel += ` number: ${num}`;

return { payload: currentModel };
```

Después de hacer las modificaciones, haga clic en el botón "Finish" en la esquina superior derecha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

Este código solo muestra el número de personas detectadas. Si quieres hacer cambios, puedes modificar el objeto de detección.  
Puedes aprender qué tipos de objetos se pueden detectar verificando el nodo del modelo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

A continuación, configura el nodo function1 y reemplaza el código original con el siguiente:

```javascript
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

A continuación, configuraremos el nodo de solicitud HTTP. Aquí, necesitamos hacer cambios en tres áreas:

| **Opción**| **Valor de Configuración**|
|-----------|-----------|
| **Método de Solicitud**| POST|
| **Dirección URL**| `http://<tu IP>:8123/api/webhook/recamera_detection`|
| **Respuesta**| Objeto JSON|

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

Después de configurarlo, haz clic en el botón "Deploy" en la esquina superior derecha. Una vez que el despliegue sea exitoso, habrá un mensaje.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

Aquí, necesitas realizar un paso más, que es conectar WiFi a reCamera. Debe estar en la misma red que la que configuraste para reComputer (ten en cuenta que la versión POE no tiene funcionalidad WiFi y requiere el uso de un switch con función POE para conectarse en el mismo segmento de red).  

Haz clic en el botón "Network" en la esquina superior izquierda para configurar la red.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
¡Por favor recuerda! ¡Asegúrate de conectar reCamera a la red! De lo contrario, no será posible la comunicación.
:::

## Ver la interfaz de resumen de Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

Si aún no se ha observado ningún efecto, primero verifica si el enlace no está conectado correctamente. Es decir, verifica si el Webhook está funcionando correctamente:  
Ejecuta en la terminal de cualquier dispositivo (reCamera o computadora):

```shell
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

Si es exitoso, la notificación de Home Assistant mostrará:
> **Resultados de Detección de reCamera**  
Prueba desde curl

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
