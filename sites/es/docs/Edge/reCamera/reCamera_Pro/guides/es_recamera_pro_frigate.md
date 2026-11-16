---
description: Conecta la reCamera Pro a Frigate
title: Conectar reCamera Pro a Frigate
keywords:
  - Edge AI
  - reCamera
  - Frigate
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_pro_frigate
sidebar_position: 1
last_update:
  date: 10/22/2026
  author: yylin
createdAt: 2026-10-22
updatedAt: 2026-10-22
url: https://wiki.seeedstudio.com/es/recamera_pro_frigate/
---

# Integrar reCamera Pro en Frigate

Frigate es una plataforma de NVR y análisis de video de código abierto que puede extraer flujos de video RTSP estándar para detección de objetos, grabación y alertas. La reCamera Pro puede publicar un flujo RTSP directamente desde su interfaz web, por lo que integrarla con Frigate solo requiere dos pasos: habilitar la transmisión RTSP en la reCamera Pro y luego añadir ese flujo como una cámara en Frigate.

:::tip
Esta guía se aplica a la **reCamera Pro**. La serie reCamera 2002 usa un método de conexión diferente; consulta la documentación de conexión de la reCamera 2002.
:::

Toda la integración consta de dos pasos:

1. Habilitar el flujo RTSP en la interfaz web de reCamera Pro;
2. Añadir ese flujo RTSP como una cámara en la interfaz web de Frigate.

## Requisitos previos

- Un dispositivo reCamera Pro, encendido y conectado a tu LAN, con su dirección IP conocida (en esta guía se usa `192.168.3.207` como ejemplo).
- Las credenciales de acceso a la interfaz web del dispositivo (nombre de usuario predeterminado `admin`; la contraseña es la configurada en el dispositivo, `recamera.1` en esta guía).
- Un host en la misma LAN con Frigate instalado (un despliegue en Docker está bien) y con su interfaz web accesible.
- Un ordenador con `ffprobe` / `ffplay` o VLC instalado, usado para verificar el flujo (opcional).

## Habilitar la transmisión RTSP en la reCamera Pro

1. Abre la interfaz web de reCamera Pro en un navegador, por ejemplo `https://192.168.42.1/`, e inicia sesión con el nombre de usuario y la contraseña del dispositivo.
2. Abre **Live View** desde la navegación de la izquierda.
3. En el panel de configuración de la derecha, selecciona la pestaña **Stream Settings**.
4. Activa el interruptor **Streaming Settings**. El panel mostrará entonces el protocolo de transmisión (**RTSP**), la **Stream URL** y las credenciales de **Authentication**. Mantén los valores predeterminados o ajústalos y luego haz clic en **Apply Settings**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/pro_stream_settings.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

5. Copia la **Stream URL** que se muestra en el panel; esta es la dirección que Frigate extraerá. Con la configuración predeterminada es:

```
rtsp://admin:admin@<device-ip>:554/main
```

:::note
El nombre de usuario / contraseña RTSP en el panel Stream Settings son independientes del acceso a la interfaz web. En esta guía la interfaz web usa `admin` / `recamera.1` mientras que el flujo RTSP usa `admin` / `admin`. Si cambias aquí las credenciales RTSP, usa los nuevos valores en Frigate.
:::

La reCamera Pro expone dos flujos:

| Flujo | URL | Formato predeterminado |
| --- | --- | --- |
| Principal | `rtsp://<user>:<password>@<device-ip>:554/main` | 3840x2160 (4K) @ 30fps, H.264, audio G.711A |
| Secundario | `rtsp://<user>:<password>@<device-ip>:554/sub` | 640x480, H.265 |

Para Frigate el flujo principal es la opción adecuada: úsalo tanto para detección como para grabación. Verifícalo desde un ordenador antes de configurar Frigate:

```bash
# Inspect codec / resolution / frame rate
ffprobe -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"

# Play it directly
ffplay  -rtsp_transport tcp "rtsp://admin:admin@192.168.3.207:554/main"
```

Deberías ver un flujo de video `h264`, `3840x2160`, 30fps más una pista de audio `pcm_alaw`.

## Añadir la cámara en la interfaz de Frigate

1. Abre la interfaz web de Frigate e inicia sesión. Si aún no hay cámaras configuradas, el panel mostrará "No Cameras Configured"; haz clic en **Add Camera** para abrir el asistente. También puedes acceder desde **Settings → Global configuration → Camera management** y hacer clic en **Add New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_no_camera.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_management.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

2. En el asistente "Add Camera" introduce un nombre de cámara y la IP del dispositivo. Para **Stream Detection Method** elige **Manual selection**, establece **Camera Brand** en **Other** y luego pega la URL del flujo principal de reCamera Pro (incluyendo las credenciales RTSP) en **Custom Stream URL**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_add_camera_rtsp.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

3. Haz clic en **Continue**. Frigate se conecta a la dirección y prueba el flujo. Si tiene éxito, muestra un fotograma junto con la resolución, la tasa de fotogramas, el códec y el audio (3840x2160, 30 FPS, h264, pcm_alaw); confirma y haz clic en **Continue** de nuevo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_test_ok.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

4. En la página de configuración del flujo habilita los roles que necesites para este flujo: activa **detect** (detección de objetos) y **record** (grabación). Deja **audio** desactivado (consulta la nota más abajo). Luego haz clic en **Next**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_roles.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

5. El paso final valida el flujo antes de guardarlo. Informa del ancho de banda estimado (unos 3,4 GB por hora para el flujo principal 4K) y dos avisos que puedes aceptar sin problema:
   - *The AAC audio codec is required to support audio in recordings*: el flujo principal Pro transporta audio G.711A (`pcm_alaw`), que Frigate no puede almacenar en las grabaciones. Como el rol **audio** está desactivado, las grabaciones simplemente no contienen sonido; nada más se ve afectado.
   - *A resolution of 3840x2160 may cause increased resource usage*: algo esperado para un flujo 4K. La detección se ejecuta sobre un fotograma reducido a 1280x720 (ver más abajo), y la decodificación acelerada por hardware mantiene la carga del host moderada.

   Una vez que el estado muestre **Connected**, haz clic en **Save New Camera**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_stream_validate.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

6. Después de guardar, la cámara aparece en la lista de gestión de cámaras con su estado establecido en **On**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_saved.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

7. Vuelve al panel para ver la transmisión en vivo de reCamera Pro; Frigate ahora ejecuta detección de objetos y grabación sobre este flujo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_live_view.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

### Opcional: ajustar los parámetros de detección

En **Settings → Camera configuration → `<camera name>` → Object detection** puedes ajustar la resolución y la tasa de fotogramas de detección. La Pro genera 4K, pero la detección no necesita la resolución completa: mantener los valores predeterminados de 1280x720 a 5 fps ofrece una detección estable en la mayoría de las escenas y mantiene bajo el uso de CPU / GPU del host.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/guides/frigate/frigate_camera_detect_settings.png" alt="Flujo de trabajo de habilidades de desarrollo de reCamera Pro" /></div>

:::tip
Si tu host tiene dificultades con la decodificación 4K, reduce la resolución del flujo principal en la interfaz web de reCamera Pro (Live View → Basic Settings), o añade el flujo secundario (`rtsp://<user>:<password>@<device-ip>:554/sub`) como una segunda entrada dedicada al rol **detect** mientras mantienes el flujo principal para **record**.
:::

Los pasos de la interfaz anteriores equivalen a escribir lo siguiente en `config.yaml`, que los usuarios familiarizados con el archivo de configuración pueden editar directamente:

```yaml
go2rtc:
  streams:
    recamera_pro:
      - rtsp://admin:admin@192.168.3.207:554/main

cameras:
  recamera_pro:
    enabled: true
    ffmpeg:
      inputs:
        - path: rtsp://admin:admin@192.168.3.207:554/main
          roles:
            - detect
            - record
    detect:
      width: 1280
      height: 720
```

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
