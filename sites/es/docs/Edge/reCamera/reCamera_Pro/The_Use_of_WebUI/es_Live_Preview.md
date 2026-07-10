---
description: recamera_pro_live_preview
title: Vista previa en vivo
keywords:
  - reCamera pro
  - web ui
slug: /recamera_pro_live_preview
sku: 10003420
sidebar_position: 1
last_update:
  date: 07/09/2026
  author: yylin
createdAt: '2026-07-09'
updatedAt: '2026-07-09'
url: https://wiki.seeedstudio.com/es/recamera_pro_live_preview/
---

## Introducción a la Web UI
reCamera Pro cuenta con una interfaz de gestión Web UI integrada, lo que elimina la necesidad de que los usuarios instalen software cliente adicional. Siempre que el ordenador esté en la misma red de área local que reCamera Pro, puedes acceder directamente a la dirección IP de la cámara a través de un navegador para entrar en la página de gestión del dispositivo. El acceso es el siguiente:
```text
http://<reCamera_IP>
```

Después de entrar en la Web UI, tendrás que introducir una contraseña en el primer inicio de sesión. La contraseña inicial (contraseña antigua) es `recamera`. Introduce tu nueva contraseña según sea necesario.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/img_v3_0213c_17e852c5-c73f-4a05-8ede-e02e2c7be6dg.png" />
Inicia sesión usando la nueva contraseña establecida. El nombre de usuario es `admin`.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_a6gnjmMqnt.png" />Después de iniciar sesión con la nueva contraseña, los usuarios pueden realizar vista previa en tiempo real, tomar fotos, grabar vídeos, cambiar de flujo, ver la información del dispositivo, configurar parámetros de imagen y ajustar la configuración relacionada con la inferencia de IA, lo que facilita la depuración rápida del dispositivo y la verificación de funciones.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/2026-07-08 181849.png" />
## Funciones principales
### Vista previa en tiempo real
Los usuarios pueden ver directamente en su navegador el vídeo en tiempo real de reCamera Pro, lo que resulta práctico para la instalación del dispositivo, el ajuste de la lente y la confirmación de la imagen. Haz clic en "Start" para iniciar la reproducción y ver la transmisión en vivo de la cámara.

### Tomar foto
Permite guardar el fotograma actual como una imagen, adecuado para el registro de escenas, archivos de depuración o recopilación de datos. A continuación, los datos de la imagen se descargarán automáticamente en la ruta de descarga predeterminada de tu navegador.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_2XAT0cUJwO.jpg" />

### Grabar vídeo
Permite iniciar o detener la función de grabación a través de la Web UI. Los vídeos se pueden guardar en el almacenamiento local del dispositivo para su posterior visualización y análisis.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_nPNSUbHEOa.jpg" />
Después de iniciar la grabación, el botón "Start Recording" cambiará a "End Recording". Tras hacer clic de nuevo, espera un momento a que reCamera empaquete los datos de imagen. El navegador descargará automáticamente los datos del flujo de vídeo en formato MP4 correspondiente, que podrás encontrar en la ruta de descarga predeterminada de tu navegador.
<img width={800} src="https://files.seeedstudio.com/wiki/reCamera-Pro/web_ui_wiki/msedge_03SDnfmwp5.jpg" />

### Cambio de flujo
Permite cambiar entre el flujo principal y el subflujo. Los usuarios pueden seleccionar el flujo adecuado según el ancho de banda de la red, los requisitos de calidad de imagen o los escenarios de vista previa.

A través de la Web UI integrada, se puede acceder y configurar reCamera Pro sin software adicional, lo que la hace adecuada para el despliegue rápido, la verificación de funciones y el desarrollo de aplicaciones de cámaras de IA en el borde.

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
