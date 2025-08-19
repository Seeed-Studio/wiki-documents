---
description: Delves into the customization options available for Watcher's appearance and explores the various tools provided by the SenseCraft platform.
title: Introducción SenseCraft APP
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /es/sensecap_app_introduction
sidebar_position: 1
last_update:
  date: 07/25/2025
  author: Guillermo
---

# Guía de la App SenseCraft

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Comprar Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Ver Video del Watcher</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Repositorio en GitHub</font></span></strong>
    </a>
</div><br />

¡Bienvenido al mundo de la personalización del Watcher y las herramientas de SenseCraft! En esta guía exploraremos las posibilidades para personalizar tu Watcher y aprovechar al máximo las potentes funciones que ofrece la aplicación **SenseCraft**. Ya seas un nuevo usuario que quiere darle un estilo único al Watcher o un entusiasta experimentado en busca de desbloquear su potencial completo, esta guía te proporcionará el conocimiento e inspiración necesarios para hacerlo tuyo.

 

## Configuraciones vía Bluetooth

Para acceder a estas opciones, asegúrate de que el Bluetooth esté activado tanto en tu Watcher como en tu teléfono móvil.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

La configuración Wi-Fi permite conectar el Watcher a redes inalámbricas para acceder a servicios en línea como actualizaciones de firmware, sincronización con la app SenseCraft o transmisión en tiempo real a la nube.

Para configurarlo:
1. Ve al menú de configuración Wi-Fi.
2. Escanea redes disponibles.
3. Selecciona una red e ingresa la contraseña.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
Watcher solo es compatible con redes de **2.4GHz**, no funciona con 5GHz.
:::

### Configuración Básica

Desde el menú de configuración básica puedes ajustar:

- **LED RGB**: Enciende o apaga la luz indicadora.
- **Volumen**: Ajusta el volumen de salida.
- **Brillo**: Modifica el brillo de pantalla para mejorar visibilidad o ahorrar energía.
- **Fecha y hora**: Asegúrate de configurar zona horaria y hora local para registrar eventos correctamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

### Control Remoto SenseCraft

Esta función permite que el Watcher se comunique con los servicios en la nube de SenseCraft. Esto habilita:

- Modelos de lenguaje avanzados
- Notificaciones remotas
- Control desde app incluso fuera del alcance Bluetooth

Si desactivas esta función, el Watcher solo funcionará localmente por Bluetooth.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

### Bloqueo de Mensajes HTTP

El Watcher ofrece una opción de notificaciones completamente locales a través de HTTP, ideal para proteger la privacidad.

1. Proporciona una **URL HTTP** y un **Token** desde tu propio servidor o el software local [Watcher APP](https://wiki.seeedstudio.com/watcher_local_deploy/#software-preparation).
2. Asegúrate de **NO activar** las notificaciones por app si deseas mantener todo local.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div>

:::caution
Si deseas usar un servicio completamente local, **NO marques** "APP Push Notification", y asegúrate de marcar **HTTP Push Notification**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### Servidor AI Local

Puedes conectar el Watcher a un servidor AI local (PC o Jetson, por ejemplo) para tareas como:

- Reconocimiento de voz
- Análisis de imágenes
- Chatbots locales

Proporciona la **URL del servidor AI** y el **Token de Servicio** generado por el software correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

:::caution
Si habilitas "Private Watcher Service", **no podrás usar los servicios en la nube de SenseCraft**. Verifica esta opción si no recibes notificaciones.
:::

### Restaurar Configuración

Esta opción restablece el Watcher a su estado de fábrica.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

**Precaución:** Esta acción borra todas tus configuraciones, expresiones personalizadas y registros de alertas. No hay forma de recuperar esta información.

:::tip
Después de restaurar el dispositivo, elimina el Watcher de la app y vuelve a agregarlo.
:::

 

## Configuraciones vía Internet (sin Bluetooth)

Estas configuraciones requieren que el Watcher y el teléfono estén conectados a Internet, con el Control Remoto de SenseCraft activado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### Nombre del Dispositivo y Grupo

Personaliza el nombre de tu Watcher para identificarlo fácilmente y organízalo en grupos según su función o ubicación (ej. casa, oficina, monitoreo exterior).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

### Suscripción

Suscribirte te brinda acceso a capacidades avanzadas como:

- Modelos de lenguaje (LLM)
- Análisis de imágenes
- Diálogos inteligentes

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### Buscar Actualizaciones

Mantén el Watcher actualizado con las últimas versiones de firmware y software. Esto garantiza nuevas funciones, correcciones de errores y mejoras de seguridad.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
Algunas actualizaciones OTA pueden ser obligatorias para continuar usando ciertos servicios.
:::

### Borrar Historial de Detección

Limpia los registros de alertas almacenados en la app SenseCraft. Esta acción es permanente e irreversible.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

### Eliminar Historial de Detección

Para eliminar el historial de detección, accede al menú **Eliminar historial detectado** dentro de la app SenseCraft. Antes de confirmar, ten en cuenta que esta acción es irreversible: todos los registros históricos de alertas serán eliminados permanentemente de la aplicación.

 

### Eliminar Dispositivo

La función **Eliminar dispositivo** te permite quitar un Watcher de tu cuenta SenseCraft o de las conexiones Bluetooth. Esto es útil si:

- Ya no necesitas usar ese Watcher.
- Quieres transferir la propiedad a otra persona.
- Estás resolviendo problemas persistentes y necesitas una nueva configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

Para eliminarlo:
1. Ve a la configuración del Watcher o a la app SenseCraft.
2. Selecciona **Eliminar Dispositivo** y confirma.

**Nota:** Después de eliminar el dispositivo desde la app, si deseas volver a enlazarlo, deberás realizar un **Restablecimiento de Fábrica** en el Watcher.

:::note
Después de eliminar el dispositivo en la app, realiza un restablecimiento de fábrica en el Watcher para poder volver a enlazarlo correctamente.
:::

## Animaciones del Watcher

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

Watcher permite personalizar tu experiencia de monitoreo con **animaciones personalizadas**. Puedes cargar tus propias imágenes para crear expresiones que reflejen tu estilo o transmitan mensajes únicos.

### Crear Animaciones Personalizadas

Puedes crear animaciones de 1 a 5 cuadros (frames), con una duración aproximada de **500 ms por cuadro**. Existen varios métodos:

- **Software de animación** (After Effects, Lottie): crea una animación y selecciona hasta 5 fotogramas clave. Captura imágenes y cárgalas desde la app SenseCraft.
- **Software de diseño gráfico** (Figma, Illustrator): diseña hasta 5 imágenes estáticas y guárdalas como PNG.
- **GIF existentes**: usa [EZGif](https://www.ezgif.com/split) para dividir un GIF en imágenes. Elige 5 cuadros y súbelos en formato PNG.

:::caution
Todas las imágenes deben estar en formato **PNG** y con una resolución de **412x412 píxeles**.
:::

### Conversión y Redimensionado de Imágenes

Si tus imágenes no cumplen con el formato y tamaño requeridos, usa estas herramientas:

- **Adobe Photoshop**: Menú `Imagen` > `Tamaño de imagen` > 412x412 px > Guardar como PNG.
- **GIMP**: `Imagen` > `Escalar imagen` > 412x412 px > Exportar como PNG.
- **Herramientas en línea**:
  - [ResizeImage](https://www.resizeimage.net)
  - [CloudConvert](https://www.cloudconvert.com)

### Subir Animaciones Personalizadas

1. Abre la app SenseCraft.
2. Ve a la sección **Animación**.
3. Selecciona un estado del Watcher: `Standby`, `Listening`, `Speaking`, `Watching Space`, o `Greeting`.
4. Carga tus imágenes PNG (una por cuadro).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

**Importante:** Usa el mismo número de cuadros que las animaciones de ejemplo para cada estado.

## ¡Llamado a Diseñadores Creativos!

SenseCraft invita a diseñadores de todas las disciplinas a contribuir con **animaciones creativas** para el Watcher. Tus diseños pueden:

- Reflejar emociones: alegría, calma, entusiasmo.
- Mostrar expresividad personalizada del dispositivo.
- Ser compartidos en redes con el hashtag `#WatcherAnimations`.

Puedes enviar tus animaciones a través de la app o en redes sociales. ¡Queremos ver tu estilo!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### Galería de Inspiración

¡Explora la galería de animaciones del Watcher! Aquí mostramos trabajos sobresalientes de la comunidad que ayudan a inspirar nuevas ideas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## Soporte Técnico y Comunidad

Gracias por elegir nuestros productos. Estamos aquí para ayudarte y asegurarnos de que tengas una excelente experiencia. Contamos con diferentes canales de comunicación para resolver dudas, compartir ideas y recibir soporte técnico.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

