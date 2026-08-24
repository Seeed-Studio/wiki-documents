---
description: Proporcionar un tutorial para integrar reCamera con Wechat work. Depende de Home Assistant.
title: Primeros pasos en Wechat work
keywords:
  - reCamera
  - Wechat work
  - Home Assistant
  - reComputer
image: https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png
slug: /getting_started_in_Wechat_work_with_recamera
sku: 102991896, 108990119, 100029708, 114993560
sidebar_position: 8
last_update:
  date: 11/19/2025
  author: Xinrui Wu
createdAt: '2025-11-19'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/es/getting_started_in_Wechat_work_with_recamera/
---

# Acoplamiento de reCamera Home Assistant Enterprise WeChat

## Introducción

Un sistema inteligente verdaderamente dinámico nunca se trata solo de "ver el mundo", sino que es capaz de comprender eventos, desencadenar acciones y lograr la interconexión entre plataformas. En esta solución, utilizaremos la reCamera basada en IA como dispositivo de detección de front-end, completaremos el análisis y formateo de datos a través de Node-RED y luego usaremos Home Assistant como centro de automatización para presentar los resultados de detección en tiempo real, tomar decisiones y, además, enlazar con el robot de Enterprise WeChat para lograr notificaciones inmediatas. Toda la cadena forma un sistema de escenas inteligentes ampliable, observable y con respuesta automática.
ReCamera utiliza el modelo YOLO para detectar en tiempo real objetos como personas y mascotas; Node-RED procesa los resultados de la detección y los envía a Home Assistant; HA utiliza Webhook para automatizar el proceso de escritura de datos en entidades, realizar juicios de condición y enviar información de alarma al grupo de Enterprise WeChat, logrando alertas en tiempo real entre plataformas. Esta arquitectura no solo demuestra la profunda capacidad de acoplamiento de reCamera y HA, sino que también refleja cómo combinar visión por IA, reglas de automatización y sistemas de notificación a nivel empresarial en aplicaciones prácticas para construir una solución IoT integrada verdaderamente "utilizable e inteligente".

## Preparación de hardware

Una reCamera (puede ser cualquiera de la serie 2002, versión HQ POE o versión con giro e inclinación, pero ten en cuenta que la versión POE no tiene funcionalidad WiFi y requiere un switch con función POE conectado en el mismo segmento de red)  
un reComputer (cualquier versión está bien, aquí uso reComputer AI R2130-12 como ejemplo)  
un ordenador (Enterprise WeChat ya ha sido instalado.)

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
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## 1.Configuración de Enterprise WeChat

### (1) Crear un robot inteligente

Haz clic en Libreta de direcciones - Robot inteligente - Crear robot inteligente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat1.png" /></div>

### (2) Configurar el robot

Después de completar los elementos requeridos, haz clic en Guardar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat2.png" /></div>

### (3) Crear un nuevo chat de grupo

Arrastra al grupo el robot que acabas de crear y a cualquier compañero (porque se necesitan más de 3 personas para crear el grupo, y puedes sacar al compañero del chat de grupo después de que la creación del grupo sea exitosa)

### (4) Configurar el envío de mensajes

Los pasos de configuración se muestran en la siguiente figura. Después de rellenar el nombre y la introducción, haz clic en Guardar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat3.png" /></div>

La dirección Webhook en este paso será útil cuando edites más tarde el configuration.yaml.

Recuerda, ¡asegúrate de **proteger la dirección webhook del envío de buenas noticias** para evitar filtraciones! No la compartas en github, blogs y otros lugares que puedan consultarse públicamente, de lo contrario los malos pueden usar tu envío de mensajes para mandar spam.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat4.png" /></div>

Si quieres ver los detalles de cómo configurar, haz clic en "know how to configure", el oficial de Enterprise WeChat proporciona una rutina de formato de mensajes para que puedas entenderlo mejor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat5.png" /></div>

## 2. Configuración de reComputer AI R2130-12

### (1) Preparación del sistema

#### Actualizar el sistema

```bash
sudo apt update && sudo apt upgrade -y
```

#### Instalar dependencias necesarias

```bash
sudo apt install -y ca-certificates curl gnupg lsb-release
```

---

### (2) Instalar Docker

#### Instalación con script oficial

```bash
curl -fsSL https://get.docker.com | sh
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_docker.png" /></div>

#### Permitir que el usuario actual use docker

```bash
sudo usermod -aG docker $USER
```

#### Luego reinicia el sistema para que los permisos surtan efecto

```bash
sudo reboot
```

#### Verificar la instalación

```bash
docker run hello-world
```

Si ves las palabras "Hello from Docker!" significa que la instalación fue exitosa

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/hello_docker.png" /></div>

---

### (3) Instalar Home Assistant (Modo Contenedor)

#### Crear un directorio de montaje

Para persistir el archivo de configuración:

```bash
mkdir -p ~/homeassistant/config
```

#### Iniciar el contenedor

Ejecuta el siguiente comando para iniciar Home Assistant (este paso tomará mucho tiempo, dependiendo de tu red):

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

> Descripción de parámetros:

>>

> - '-- network = host': Home Assistant tiene acceso directo a la red del host (necesario para el descubrimiento automático de dispositivos)

> - '-v ~/homeassistant/config:/config': guardar archivo de configuración

> - '-- restart = unless-stopped': reinicio automático

> - '-- privileged': habilitar acceso al hardware (USB Zigbee/Z-Wave, etc.)

---

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/docker.png" /></div>

### (4) Acceder a Home Assistant

#### Ver IP:

```bash
hostname -I
```

#### Visitar desde el navegador

Espera de 1 a 2 minutos después de que el contenedor se inicie y luego accede desde el navegador:

```
http://<你的IP>:8123
```

Ejemplo:

```
http://192.168.1.88:8123
```

El primer inicio entrará en la interfaz de inicialización, comienza a crear una cuenta y configurar el hogar inteligente

------

### (5) encontrar la ruta del archivo de configuración

Todas las configuraciones de Home Assistant se guardan en:

```
/home/seeed/homeassistant/config/
```

Disponible a través de:

```bash
cd /home/seeed/homeassistant/config
ls
```

Ver:

```
automations.yaml  configuration.yaml  scripts.yaml ...
```

------

### (6) configurar automatización para recibir datos de ReCamera

#### Instalar el editor:

```bash
sudo apt install nano -y
```

#### Editar 'automations.yaml ':

```bash
sudo nano /home/seeed/homeassistant/config/automations.yaml
```

Reemplaza el contenido:

```yaml
- alias: "ReCamera Detection"
  description: "接收来自 ReCamera 的检测结果并更新实体和推送企业微信"
  trigger:
    - platform: webhook
      webhook_id: recamera_detection

  action:
    # 1️⃣ 更新 input_text 实体（UI 上显示）
    - service: input_text.set_value
      target:
        entity_id: input_text.recamera_people_raw
      data:
        value: "{{ trigger.json.payload }}"

    # 2️⃣ 条件判断：人数 >= 2 时推送企业微信
    - condition: template
      value_template: >
        {% set payload = trigger.json.payload %}
        {% set num = payload | regex_findall_index('[0-9]+') | first | int %}
        {{ num >= 2 }}

    - service: rest_command.recamera_wechat_notify
      data:
        message: "ReCamera 检测到多人！当前人数：{{ trigger.json.payload }}"

  mode: single
```

Guardar y salir:

-**Ctrl O** → Enter (Guardar)

-**Ctrl X** (Salir)

#### Editar configuration.yaml:

```bash
sudo nano /home/seeed/homeassistant/config/configuration.yaml
```

Reemplaza el contenido:

```yaml
# ==========================
# Home Assistant 基础配置
# ==========================

# 加载默认集成（请勿删除）
default_config:

# 加载前端主题
frontend:
  themes: !include_dir_merge_named themes

# 加载独立配置文件
automation: !include automations.yaml
script: !include scripts.yaml
scene: !include scenes.yaml


# ==========================
# ReCamera 实体配置部分
# ==========================

# 1️⃣ 定义一个 input_text 实体，用于保存 ReCamera 最新检测结果
input_text:
  recamera_people_raw:
    name: ReCamera 原始检测结果
    max: 255
    icon: mdi:account-group  # 可选：显示为“多人”图标

# 2️⃣ 定义一个模板传感器，用于展示 ReCamera 检测结果
sensor:
  - platform: template
    sensors:
      recamera_people_count:
        friendly_name: "ReCamera 检测人数"
        value_template: "{{ states('input_text.recamera_people_raw') }}"
        icon_template: mdi:camera-outline


# ==========================
# 企业微信机器人推送
# ==========================
rest_command:
  recamera_wechat_notify:
    url: "https://xxxxxx"  #此处填写你在群聊中配置的Webhook地址
    method: POST
    headers:
      Content-Type: "application/json"
    payload: |
      {
        "msgtype": "text",
        "text": {
          "content": "{{ message }}",
          "mentioned_list": ["@all"]
        }
      }

```

Guardar y salir:

-**Ctrl O** → Enter (Guardar)

-**Ctrl X** (Salir)

#### Después de guardar y salir, reinicia Home Assistant:

```bash
docker restart homeassistant
```

------

## 3. Configuración de reCamera del 2002w

### (1) Después de insertar la reCamera en el ordenador, accede a 192.168.42.1

Si te has quedado atascado y no puedes abrir la interfaz, consulta la sección "Restaurar la configuración de fábrica" para restablecer el dispositivo. Después de restablecerlo, visita de nuevo 192.168.42.1. Tras el restablecimiento, debes modificar la contraseña.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/reset.png" /></div>

### (2) Después de iniciar sesión en la interfaz, haz clic en la esquina inferior derecha para entrar en "Workspace"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/logging_in.png" /></div>

### (3) Configura el nodo después de entrar en el Workspace

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_1.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_2.png" /></div>

Se han añadido estos cuatro nuevos nodos: debug1 y debug2 se utilizan para observar la información de salida, sean necesarios o no; function1 se utiliza para procesar datos; el nodo Http request se utiliza para enviar datos a Home Assistant

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_3.png" /></div>

A continuación, modifica el nodo original "Model Info Handle" para que solo emita el número de un determinado objetivo de detección.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_4.png" /></div>

Haz doble clic para abrir el nodo y sustituye el código por el siguiente:

```
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

Haz clic en "Finish" en la esquina superior derecha después de la modificación"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_5.png" /></div>

Este código solo emite el número de personas detectadas. Si quieres modificarlo, puedes cambiar el objeto detectado.

Puedes ver qué tipos de objetos se pueden detectar mirando el nodo del modelo

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_6.png" /></div>

A continuación, configura el nodo function1 y sustituye el código original:

```
return {
    payload: {
        payload: msg.payload  
    }
};
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_7.png" /></div>

A continuación, configura el nodo http request. Aquí necesitamos modificar tres lugares:

| Opciones | Valor configurado |
| ------------ | ----------------------------------------- |
| **Request Method** | POST |
| **URL address** | 'http://YOUR_IP:8123/api/webhook/recamera_detection'|
| **Return** | JSON Object |

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_8.png" /></div>

Después de la configuración, haz clic en "Deploy" en la esquina superior derecha, y se proporcionará un aviso después de que la implementación sea exitosa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_9.png" /></div>

Aquí aún necesitas hacer un paso más, que es conectar la reCamera al WiFi y conectar la reComputer contigo bajo la misma red.

Haz clic en "Network" en la esquina superior izquierda para configurar la red

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/workspace_ha_10.png" /></div>

:::note
¡Por favor recuerda! ¡Asegúrate de conectar Recamera a la red! De lo contrario, no será posible la comunicación.
:::

## 4. Ver el efecto

En este momento, se deberían ver los siguientes efectos en el enterprise micro:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/wechat_bot.png" /></div>

En consecuencia, la pantalla de vista general de Home Assistant debería mostrar lo siguiente:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/HA.png" /></div>

Si no has visto el efecto, primero comprueba si el enlace no funciona, es decir, verifica si el Webhook es normal:

En cualquier dispositivo (ReCamera, PC, etc.):

```bash
curl -X POST http://192.168.100.109:8123/api/webhook/recamera_detection \
-H "Content-Type: application/json" \
-d '{"payload":"Test from curl"}'
```

Si tiene éxito, aparecerá lo siguiente en la notificación de Home Assistant:

> **ReCamera Test Results**
>
> Test from curl

------

## Lógica del sistema

```
┌────────────────────────────────────────────────────────────────────────┐
│ ReCamera (AI Camera)                                                   │
│ └─ YOLO Model Detects Objects (e.g., person, cat)                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Node-RED Flow                                                          │
│                                                                        │
│ [Model Info Handle]                                                    │
│ └─ Parse detection results, count objects                              │
│    Output:                                                             │
│    payload = "Current people number: 1"                                │
│                                                                        │
│ [Function Node]                                                        │
│ └─ Pack into JSON format:                                              │
│    payload = { payload: "Current people number: 1" }                   │
│                                                                        │
│ [HTTP Request Node]                                                    │
│ └─ POST → HA Webhook                                                   │
│    URL: http://<HA_IP>:8123/api/webhook/recamera_detection             │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ Home Assistant (HA)                                                    │
│                                                                        │
│ [Webhook Trigger]                                                      │
│ └─ Receive data sent from Node-RED                                     │
│                                                                        │
│ [Automation]                                                           │
│ ├─ Write payload into input_text.recamera_people_raw                   │
│ │    → Display detected people count in real time on HA frontend       │
│ │                                                                      │
│ ├─ Condition check: if count ≥ 2                                       │
│ │      → Trigger rest_command to call WeCom Bot                        │
│ │                                                                      │
│ └─ Call rest_command.recamera_wechat_notify                            │
│       POST detection information to WeCom Webhook                      │
└────────────────────────────────────────────────────────────────────────┘
                                      │                                  
                                      ▼                                  
┌────────────────────────────────────────────────────────────────────────┐
│ WeCom Bot (Group Chat)                                                 │
│                                                                        │
│ Message received:                                                      │
│   "ReCamera detected multiple people! Current count:                   │
│    Current people number: 3"                                           │
│                                                                        │
│ → Instant alert to group members                                       │
└────────────────────────────────────────────────────────────────────────┘

```

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
