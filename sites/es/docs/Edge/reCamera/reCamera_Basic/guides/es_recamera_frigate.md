---
description: Conecta la serie reCamera 2002 a Frigate
title: Conectar a Frigate
keywords:
  - Edge AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_firgate
sku: 10003420
sidebar_position: 1
last_update:
  date: 10/18/2026
  author: yylin
createdAt: 2026-10-18
updatedAt: 2026-10-18
url: https://wiki.seeedstudio.com/es/recamera_firgate/
---

# Integrar reCamera en Frigate

Frigate es una plataforma NVR y de análisis de video de código abierto que puede extraer flujos de video RTSP estándar para detección de objetos, grabación y alertas. La serie reCamera 2002 puede publicar un flujo RTSP estable, por lo que integrarla con Frigate solo requiere dos pasos: hacer que la reCamera publique un flujo RTSP y luego añadir ese flujo como una cámara en Frigate.

:::tip
Esta guía se aplica solo a la **serie reCamera 2002**. La reCamera Pro usa un método de conexión diferente; consulta la documentación de conexión de la Pro.
:::

Toda la integración consta de dos pasos:

1. Habilitar la transmisión RTSP en la reCamera (elige cualquiera de los tres métodos);
2. Añadir ese flujo RTSP como una cámara en la interfaz web de Frigate.

## Requisitos previos

- Un dispositivo de la serie reCamera 2002, encendido y conectado a tu LAN por Ethernet / Wi-Fi, con su dirección IP conocida (esta guía usa `192.168.4.82` como ejemplo).
- Un host en la misma LAN con Frigate instalado (un despliegue en Docker está bien) y con acceso a su interfaz web.
- Un ordenador con `ffprobe` / `ffplay` o VLC instalado, usado para verificar el flujo (opcional).

## Configurar la salida de video de la reCamera

La serie reCamera 2002 admite las siguientes tres formas de publicar un flujo RTSP. **Elige cualquiera** de ellas. La URL RTSP resultante se usa exactamente de la misma manera en la configuración de Frigate más abajo; solo sustituye tu propia dirección.

| Método | URL del flujo (parámetros predeterminados) | Aspectos destacados |
| --- | --- | --- |
| Método 1: Node-RED | `rtsp://admin:admin@<device-ip>:554/live` | Configuración gráfica, sin compilación, incluida en el firmware |
| Método 2: publicador en C++ | `rtsp://<device-ip>:8554/live0` | 1080p@30fps, sin autenticación, instalación con un solo comando |
| Método 3: Flashear la app ONVIF | `rtsp://<username>:<password>@<device-ip>:8554/onvif` | Detectable por NVR / VMS mediante ONVIF |

:::note
Los tres métodos toman propiedad exclusiva del flujo de la cámara, por lo que solo uno de ellos puede ejecutarse a la vez. Detén el método que se esté ejecutando antes de cambiar a otro.
:::

### Método 1: Habilitar el flujo RTSP con Node-RED

El firmware de la reCamera incluye Node-RED y los nodos SSCMA (`node-red-contrib-sscma`). El **nodo stream** publica la señal de la cámara como RTSP. Para el tutorial completo de desarrollo con Node-RED (referencia de nodos, importación de flujos, despliegue, etc.) consulta:

[Tutorial de desarrollo con Node-RED](https://wiki.seeedstudio.com/es/recamera_develop_with_node-red/)

Pasos rápidos:

1. Abre el editor de Node-RED en un navegador: `http://<device-ip>:1880`.
2. Arrastra un nodo **camera** y un nodo **stream** desde la paleta de la izquierda (ambos bajo la categoría `Vision AI`) y conecta la salida de camera con la entrada de stream.
3. Haz doble clic en cada nodo y, en el campo `Client`, haz clic en el botón de añadir para crear un nodo de configuración **sscma** (los valores predeterminados `host=localhost`, `mqttport=1883`, `apiport=80` están bien). Una vez guardado, el triángulo rojo de los nodos desaparece.
4. En el nodo stream confirma que el protocolo es `RTSP` y ajusta el puerto, el nombre de sesión y las credenciales según sea necesario (los valores predeterminados son puerto `554`, sesión `live`, usuario `admin`, contraseña `admin`).
5. Haz clic en **Deploy** en la esquina superior derecha.

También puedes pegar el flujo JSON mínimo que aparece abajo en el cuadro de diálogo `Import` de Node-RED para crear el cableado en un solo paso:

```json
[
    {"id":"tab-recamera-rtsp","type":"tab","label":"reCamera RTSP","disabled":false,"info":""},
    {"id":"cfg-sscma","type":"sscma","host":"localhost","mqttport":"1883","apiport":"80","clientid":"recamera","username":"","password":""},
    {"id":"node-camera","type":"camera","z":"tab-recamera-rtsp","name":"camera","client":"cfg-sscma","audio":false,"volume":80,"option":0,"fps":15,"mirror":false,"flip":false,"x":220,"y":200,"wires":[["node-stream"]]},
    {"id":"node-stream","type":"stream","z":"tab-recamera-rtsp","name":"stream","protocol":0,"port":554,"session":"live","username":"admin","password":"admin","onvif":false,"client":"cfg-sscma","x":460,"y":200,"wires":[]}
]
```

Después de desplegar, verifica el flujo desde un ordenador (la salida es 1080p; el límite recomendado para transmisión con Node-RED es 1080p@15fps):

```bash
ffplay rtsp://admin:admin@192.168.4.82:554/live
```

La URL que se debe usar en Frigate es: `rtsp://admin:admin@<device-ip>:554/live`.

### Método 2: Desplegar el publicador RTSP en C++

La comunidad proporciona un publicador listo para usar para la reCamera 2002 (SG2002 / CV181X, riscv64) que corrige la limitación de 10 fps del `video_demo` de fábrica y genera un flujo RTSP **1920x1080 H.264 30fps**. No requiere compilación y se instala con un solo comando. Repositorio del proyecto:

[Repositorio del publicador RTSP en C++](https://github.com/yyling0101-a11y/recamera-rtsp30.git)

Como la reCamera no puede acceder directamente a GitHub, ejecuta el script de instalación desde un ordenador que tenga acceso a GitHub y pueda alcanzar el dispositivo a través de la red. El script solicita la IP del dispositivo, el nombre de usuario SSH y la contraseña, luego sube el binario al dispositivo, detiene los servicios que ocupan la cámara (Node-RED / sscma), configura el inicio automático al arrancar y comienza el flujo:

```bash
# Linux
curl -fLO https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-linux.sh
chmod +x install-linux.sh
./install-linux.sh
```

```bash
# Windows PowerShell
Invoke-WebRequest https://raw.githubusercontent.com/yyling0101-a11y/recamera-rtsp30/main/scripts/install-windows.ps1 -OutFile install-windows.ps1
powershell -ExecutionPolicy Bypass -File .\install-windows.ps1
```

Una vez instalado, el flujo está disponible en `rtsp://<device-ip>:8554/live0` (sin autenticación). Verifícalo desde un ordenador:

```bash
ffplay rtsp://192.168.4.82:8554/live0
```

En el dispositivo puedes gestionar el servicio e inspeccionar su estado con:

```bash
/etc/init.d/S99rtsp30 start|stop|restart   # service control (stop uses SIGTERM; never kill -9)
sh /root/rtsp30-status.sh                  # process / pipeline / port / measured fps
tail -f /tmp/rtsp30.log                    # runtime log
```

:::caution
Este publicador es mutuamente excluyente con los métodos Node-RED y ONVIF: al instalarlo se deshabilitan los servicios Node-RED y sscma y toma propiedad exclusiva del puerto 8554 y del flujo de la cámara. Para desinstalarlo ejecuta `sh /root/uninstall-rtsp30.sh`; el comportamiento de fábrica vuelve después de reiniciar.
:::

### Método 3: Flashear la app ONVIF en el dispositivo

Usando el software SenseCraft Solution de Seeed puedes flashear una app ONVIF en la reCamera, de modo que el dispositivo proporcione un flujo RTSP y pueda ser detectado automáticamente por plataformas NVR / VMS compatibles con ONVIF. Para los pasos de flasheo y configuración consulta:

[Guía de flasheo y configuración ONVIF](https://wiki.seeedstudio.com/es/recamera_onvif/)

Después de flashear, la URL del flujo es `rtsp://<username>:<password>@<device-ip>:8554/onvif`, donde el nombre de usuario y la contraseña son las credenciales que configuraste durante el flasheo.

### Verificar el flujo

Sea cual sea el método que hayas elegido, confirma que el flujo funciona desde un ordenador antes de configurar Frigate. Diferentes métodos de configuración corresponden a diferentes URLs de flujo de video.

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp rtsp://192.168.4.82:8554/live0

# Play it directly
ffplay  -rtsp_transport tcp rtsp://192.168.4.82:8554/live0
```

Deberías ver un flujo de video `h264`, `1920x1080` (15fps para el Método 1, 30fps para los Métodos 2 y 3).

## Añadir la cámara en la interfaz de Frigate

La guía siguiente usa como ejemplo la dirección del Método 2 `rtsp://192.168.4.82:8554/live0`. Si usaste el Método 1 o el Método 3, sustituye la URL correspondiente de la tabla anterior (incluye el nombre de usuario y la contraseña en la URL cuando sea necesario).

1. Abre la interfaz web de Frigate e inicia sesión. Si aún no hay cámaras configuradas, el panel mostrará "No Cameras Configured"; haz clic en **Add Camera** para abrir el asistente. También puedes acceder desde **Settings → Global configuration → Camera management** y hacer clic en **Add New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_no_camera.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_management.png" /></div>

2. En el asistente "Add Camera" introduce un nombre de cámara y la IP del dispositivo. Para **Stream Detection Method** elige **Manual selection**, establece **Camera Brand** en **Other** y luego pega la URL RTSP de la reCamera en **Custom Stream URL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_add_camera_rtsp.png" /></div>

:::tip
Si usaste el Método 3 (ONVIF) puedes en su lugar mantener el valor predeterminado **Probe camera**, rellenar el nombre de usuario / contraseña y el puerto ONVIF, y dejar que Frigate descubra las URLs de flujo mediante ONVIF. Introducir la URL RTSP manualmente funciona para los tres métodos.
:::

3. Haz clic en **Continue**. Frigate se conecta a la dirección y prueba el flujo. Si tiene éxito, muestra un fotograma junto con la resolución, la tasa de fotogramas y el códec; confirma y haz clic en **Continue** de nuevo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_test_ok.png" /></div>

4. En la página de configuración del flujo habilita los roles que necesites para este flujo: activa **detect** (detección de objetos) y **record** (grabación). Luego haz clic en **Next**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_roles.png" /></div>

5. El paso final valida el flujo antes de guardarlo e informa del ancho de banda estimado más notas sobre códec / audio. Una vez que el estado muestre **Connected**, haz clic en **Save New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_stream_validate.png" /></div>

6. Después de guardar, la cámara aparece en la lista de gestión de cámaras con su estado establecido en **On**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_saved.png" /></div>


7. Vuelve al panel para ver la transmisión en vivo de reCamera; Frigate ahora ejecuta detección de objetos y grabación en este flujo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_live_view.png" /></div>

### Opcional: ajusta los parámetros de detección

En **Settings → Camera configuration → `camera name` → Object detection** puedes ajustar la resolución de detección y la velocidad de fotogramas. La reCamera genera salida a 1080p, pero la detección no necesita la resolución completa: mantener los valores predeterminados de 1280x720 a 5 fps ofrece una detección estable en la mayoría de las escenas y mantiene bajo el uso de CPU / GPU del host.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/frigate/frigate_camera_detect_settings.png" /></div>

Los pasos de la interfaz anteriores son equivalentes a escribir lo siguiente en `config.yaml`, que los usuarios familiarizados con el archivo de configuración pueden editar directamente:

```yaml
go2rtc:
  streams:
    recamera2002:
      - rtsp://192.168.4.82:8554/live0

cameras:
  recamera2002:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://192.168.4.82:8554/live0
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
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
