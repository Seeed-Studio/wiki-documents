---
title: Alerta de foto activada por sonido con integración de reCamera Pro y Home Assistant
description: Este wiki explica cómo integrar reCamera Pro con Home Assistant para enviar automáticamente un mensaje personalizado y una instantánea actual de la cámara al panel de Home Assistant cuando se detecta un sonido específico.
keywords:
  - reCamera
  - Home Assistant
  - MQTT
  - Detección de sonido
  - Edge AI
image: https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif
slug: /recamera_pro_ha_sound_alert
sidebar_position: 2
last_update:
  date: 2026-07-27T00:00:00.000Z
  author: Sizhao zhou
createdAt: "2026-07-27"
updatedAt: "2026-07-27"
url: https://wiki.seeedstudio.com/es/recamera_pro_ha_sound_alert/
---

# Integración de reCamera Pro y Home Assistant: alerta de foto activada por sonido

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/getting_started/reCamera_Pro_LOG.png" /></div>

## Introducción

Este wiki explica cómo integrar reCamera Pro con Home Assistant (HA) para enviar automáticamente un mensaje personalizado y una instantánea actual de la cámara al panel de Home Assistant cuando se detecta un sonido específico. Usando el protocolo MQTT para la comunicación bidireccional, cuando reCamera Pro detecta un sonido especificado (por ejemplo, "help") con un nivel de confianza que supera un umbral, envía automáticamente un mensaje de alerta y una imagen en vivo a HA.
<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/reCamera-Pro/Application/reCamera_HA_Voice_Capture/reCamera-PRO_Voice_Capture.gif" /></div>

## Preparación de hardware

- Un host que ejecute Home Assistant (admite despliegue con Docker, HA OS o venv)
- Un dispositivo reCamera Pro

<table align="center">
 <tr>
  <th>reCamera Pro</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/g/a/gallery_img_1_1.png" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-Pro-2GB.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Buy Now 🖱️</font></span></strong>
   </a>
  </div></td>
 </tr>
</table>

## Instalación del complemento de reCamera en HA

Añadiremos un complemento de reCamera a Home Assistant para mostrar mensajes e imágenes de reCamera Pro en HA. Hay dos métodos de instalación disponibles: script de instalación automática (recomendado) e instalación manual.

### Método 1: script de instalación automática (recomendado)

Descarga el [script install.py](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link), ejecútalo e introduce el directorio de configuración de HA para completar automáticamente toda la instalación.

```bash
# Download install.py (includes all files, no additional downloads needed)
python3 install.py

# Or specify the configuration directory directly (non-interactive)
python3 install.py /home/zsz/HA/config
```

El script hará automáticamente lo siguiente:
1. Copiar el código de la integración a `custom_components/recamera_chat/`
2. Copiar los archivos de frontend a `www/recamera_chat/`
3. Añadir las configuraciones de `recamera_chat` y `panel_custom` a `configuration.yaml` (realiza automáticamente una copia de seguridad del original)
4. Verificar que todos los archivos estén en su lugar

:::tip
El script es compatible con Linux / Windows / macOS y funciona con todos los métodos de despliegue, incluidos Docker, HA OS y venv.
:::

Después de la instalación, salta a [Paso 4: Reiniciar Home Assistant](#step-4-restart-home-assistant).

### Método 2: instalación manual

#### Paso 1: descargar el paquete de despliegue

Descarga el paquete de despliegue [recamera_chat.zip](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link) y extráelo. La estructura del directorio extraído es la siguiente:

```
recamera_chat/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
└── configuration_snippet.yaml
```

#### Paso 2: copiar archivos al directorio de configuración de HA

Copia las carpetas `custom_components` y `www` al directorio de configuración de Home Assistant.

:::note
La ubicación del directorio de configuración de HA depende de tu método de instalación:
- **HA OS**: accesible mediante Samba o SSH en `/config`
- **Docker**: el directorio de configuración montado (por ejemplo, `/home/zsz/HA/config`)
- **venv**: tu directorio de instalación de HA
:::

:::danger
`www/` y `custom_components/` son **directorios hermanos** y ambos deben colocarse directamente en el directorio raíz de configuración. No pongas `www/` dentro de `custom_components/`, de lo contrario la barra lateral no se mostrará.
:::

**Ejemplo de despliegue con Docker:**

```bash
# Assuming the HA configuration directory is /home/zsz/HA/config
cd /home/zsz/HA/config

# Copy the integration files
cp -r recamera_chat/custom_components/recamera_chat custom_components/

# Copy the frontend files
cp -r recamera_chat/www/recamera_chat www/
```

La estructura del directorio después de copiar:

```
/config/
└── custom_components/
    └── recamera_chat/
        └── __init__.py
        └── const.py
        └── manifest.json
        └── services.yaml
└── www/
    └── recamera_chat/
        └── panel.js
        └── panel.html
        └── images/          # Images are automatically saved here
└── configuration.yaml
```

#### Paso 3: editar configuration.yaml

Añade la siguiente configuración al archivo `configuration.yaml` de HA:

```yaml
# ===== reCamera Chat (MQTT Bidirectional Chat) =====
recamera_chat:
  broker: 127.0.0.1       # MQTT broker address (127.0.0.1 if HA and broker are on the same host)
  port: 1883              # MQTT broker port
  # username: youruser    # Uncomment and fill in if authentication is required
  # password: yourpass
  topic_in: recamera/chat/to_ha       # reCamera publishes to this topic -> HA receives
  topic_out: recamera/chat/to_camera  # HA panel sends -> reCamera subscribes to this topic
  message_field: ""       # Leave empty = auto-extract message/text/payload/msg/content
  max_history: 200        # Maximum number of message history entries

panel_custom:
  - name: recamera-chat
    sidebar_title: reCamera
    sidebar_icon: mdi:camera
    url_path: recamera-chat
    module_url: /local/recamera_chat/panel.js?v=13
    require_admin: false
```

:::warning
El número de versión en `module_url` (por ejemplo, `?v=13`) debe coincidir con el número de versión en el archivo `panel.js`. Si los números de versión no coinciden, el navegador puede cargar una caché antigua, lo que hará que el panel no se muestre.
:::

#### Paso 4: reiniciar Home Assistant

Reinicia HA para aplicar la configuración:

- Interfaz web: Settings -> System -> icono de encendido (arriba a la derecha) -> Restart
- Línea de comandos (Docker): `docker restart homeassistant`

#### Paso 5: verificar el despliegue

1. Una vez completado el reinicio, la pestaña **reCamera** (con un icono de cámara) debería aparecer en la barra lateral de HA.
2. Haz clic en ella para ver la interfaz de chat, con un estado **Connected** en la esquina superior derecha.
3. Escribe texto en el cuadro de entrada y pulsa Enter o haz clic en el botón **Send**.
4. El lado de reCamera que se suscribe a `recamera/chat/to_camera` debería recibir el mensaje.

:::warning
Si la pestaña de reCamera no aparece en la barra lateral después de reiniciar, soluciona el problema en el siguiente orden:
1. Comprueba si `www/recamera_chat/panel.js` se encuentra bajo el directorio `www/` en la raíz de configuración (no bajo `custom_components/www/`)
2. Comprueba si `configuration.yaml` contiene el bloque de configuración `panel_custom`
3. Comprueba si el número de versión `?v=13` en `panel.js` coincide con el número de versión en `module_url` en `configuration.yaml`
4. Pulsa Ctrl+F5 para forzar la actualización del navegador y limpiar la caché
:::

## Configuración de reCamera Pro

Dado que este ejemplo requiere que la cámara tome fotos, primero debes detener el proceso principal de reCamera Pro para liberar los recursos de la cámara. Ejecuta el siguiente comando:

```bash
pkill -x rkipc
```

Después de detener el proceso principal, descarga el programa en Python: [Programa de reCamera](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)

### Modificar los parámetros de configuración del programa

Después de descargar el programa, debes modificar los siguientes parámetros para que se ejecute correctamente:

```python
# ===================== MQTT Configuration =====================

MQTT_HOST = "192.168.6.215"         # MQTT Broker Address
MQTT_PORT = 1883                    # MQTT Broker Port
TARGET_SOUND = "help"               # Name of the sound to detect
CONFIDENCE_THRESHOLD = 94.0         # Trigger threshold, unit: percentage
MQTT_MESSAGE = "Someone is calling for help!!"  # Message to send when triggered
```

- **MQTT_HOST**: dirección del broker MQTT, introduce la dirección IP de tu host de HA
- **MQTT_PORT**: puerto del broker MQTT, introduce 1883
- **TARGET_SOUND**: nombre del sonido a detectar, introduce `"help"`
- **CONFIDENCE_THRESHOLD**: umbral de activación, unidad: porcentaje, introduce `94.0`. Solo se enviarán mensajes e imágenes si la confianza supera este valor.
- **MQTT_MESSAGE**: mensaje que se enviará cuando se active, puedes introducir el contenido que quieras mostrar en el panel de HA.

### Subir el código a reCamera Pro y ejecutarlo

1. Sube el código modificado a reCamera Pro usando el siguiente comando:

```bash
scp voice_capture.py root@<device_IP>:/userdata
```

2. Ejecuta el siguiente comando para correr el código:

```bash
python3 ./voice_capture.py
```

## Resultados esperados

1. Después de iniciar el programa de detección de sonido, reCamera Pro supervisa continuamente los sonidos ambientales.
2. Cuando se detecta el sonido especificado (por ejemplo, "help") con un nivel de confianza que supera el umbral, captura automáticamente la escena actual.
3. Envía un mensaje de alerta personalizado y una imagen a Home Assistant a través de MQTT.
4. El panel de reCamera en la barra lateral de HA muestra el mensaje y la imagen recibidos.

## Solución de problemas

| Problema | Posible causa | Solución |
| --- | --- | --- |
| No hay pestaña de reCamera en la barra lateral de HA | Ruta de archivo incorrecta o configuración no aplicada | Comprueba la ruta de `www/recamera_chat/panel.js` y la configuración de `configuration.yaml` |
| El panel muestra "Disconnected" | Falló la conexión MQTT | Comprueba si la dirección y el puerto del broker MQTT son correctos |
| La detección de sonido no responde | Micrófono no conectado o permisos insuficientes | Confirma que el micrófono USB está conectado, comprueba el dispositivo de audio en reCamera Pro |
| La imagen no se muestra | Recurso de la cámara ocupado | Confirma que se ha ejecutado `pkill -x rkipc` para liberar la cámara |

## Recursos

- [Página de producto de reCamera Pro](https://www.seeedstudio.com/reCamera-Pro-2GB.html)
- [Documentación oficial de Home Assistant](https://www.home-assistant.io/)
- [Paquete de despliegue de reCamera Chat](https://drive.google.com/file/d/1UgukqGPetQhh_klJBN13dTUfxcCZCAMY/view?usp=drive_link)
- [Programa de detección de sonido de reCamera](https://drive.google.com/file/d/1hQZNFvYzIFAPasy6_DWrxtMavjDmzrV_/view?usp=drive_link)
- [Script de instalación automática](https://drive.google.com/file/d/1nFBHJNkOUPqcAAUCYw43IhGhDWIYNhUX/view?usp=drive_link)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos niveles de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos múltiples canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>