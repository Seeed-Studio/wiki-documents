---
description: Enviar datos desde Watcher & Node-RED a WhatsApp
title: Watcher & Node-RED a WhatsApp
keywords:
- Watcher
- WhatsApp
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png
slug: /es/watcher_node_red_to_whatsapp
last_update:
  date: 07/25/2024
  author: Vincent
---

# Inicio Rápido de Watcher a WhatsApp

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/watcher_whatsapp.png" style={{width:1000, height:'auto'}}/></div>

[**WhatsApp**](https://web.whatsapp.com/) es un servicio de mensajería instantánea y voz sobre IP propiedad de Meta. Permite a los usuarios enviar mensajes de texto, voz y video, realizar llamadas de voz y video, y compartir imágenes, documentos, ubicaciones y otro contenido.

Este tutorial te guiará a través de la integración de la API de Watcher con Node-RED para enviar datos sin problemas desde el Watcher a WhatsApp. Esta integración proporciona un método simple y eficiente para **recibir notificaciones y abre la puerta para más aplicaciones e integraciones**.

## Parte 1. Configurar Watcher en Node-RED

### Paso 1. Configurar Node-RED

Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Node-RED es requerido para esta configuración, junto con la API de Watcher. Si no has instalado Node-RED o no lo has conectado con la API de Watcher, comienza aquí: [**Inicio Rápido de Watcher a Node-RED**](https://wiki.seeedstudio.com/es/watcher_to_node_red).

### Paso 2. Obtener datos de Watcher

Después de configurar el Watcher para trabajar con Node-RED, el siguiente paso es preparar los datos del Watcher para WhatsApp. Haz doble clic en el nodo de función para formatear los datos apropiadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para el propósito de este tutorial, estaremos enviando el contenido así como la URL de la imagen. Sin embargo, te animamos a transformar los datos según sea necesario para tu aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Ejemplo de Función Node-RED para Formatear Datos

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## Parte 2. Configurar la API de WhatsApp 

### Paso 3. Registrarse en WhatsApp

Se requiere una cuenta de WhatsApp para continuar. Si aún no tienes una cuenta, por favor [**haz clic aquí**](https://www.whatsapp.com) y completa los pasos para crear una cuenta.

Si ya tienes una cuenta, por favor continúa al [**Paso 4**](#step-4-get-callmebot-api-key).

### Paso 4. Obtener la clave API de CallMeBot

Una vez que tengas tu cuenta de WhatsApp configurada e iniciada sesión, ahora es momento de configurar la API de CallMeBot. Esta es la API que enlazará entre Node-RED y WhatsApp.

Para obtener tu clave API de CallMeBot, sigue estos pasos (tomados de [**este repositorio de Github**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md#create-api-key)):

1. Añade el número de teléfono +34 644 66 32 62 a tus Contactos del Teléfono. (Nómbralo como desees)
2. Envía este mensaje "I allow callmebot to send me messages" al nuevo Contacto creado (usando WhatsApp por supuesto)
3. Espera hasta que recibas el mensaje "API Activated for your phone number. Your APIKEY is 123123" del bot. Como esto aún está en pruebas beta, la activación puede tomar hasta 2 minutos.
4. El mensaje de WhatsApp del bot contendrá la clave API necesaria para enviar mensajes usando la API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_API.png" style={{width:1000, height:'auto'}}/></div>

:::note
Existe la posibilidad de que el número de teléfono proporcionado en este tutorial para la API de CallMeBot esté lleno y no pueda aceptar más solicitudes. Si esto ocurre, CallMeBot te enviará un mensaje de WhatsApp con un número de teléfono alternativo para usar.

En caso de que no recibas tal mensaje y todos los números de teléfono proporcionados estén llenos, es posible que necesites encontrar una API alternativa para enlazar Node-RED con WhatsApp. Asegúrate de verificar las últimas actualizaciones y documentación en el sitio web de CallMeBot o explorar otras APIs de mensajería de WhatsApp compatibles con Node-RED.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Full.png" style={{width:1000, height:'auto'}}/></div>
:::

## Parte 3. Integrar WhatsApp con Node-RED 

### Paso 5. Instalar el módulo de WhatsApp 

Haz clic en el icono de las tres barras y luego haz clic en la opción **Manage palette**. Esto abre una nueva ventana donde puedes añadir o eliminar nodos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Cambia a la pestaña **Install** dentro de la ventana de gestión de paleta. En la barra de búsqueda, escribe `whatsapp` para encontrar el módulo. Luego, haz clic en el botón **install** junto a la entrada **node-red-contrib-whatsapp-cmb**.

También recomendamos revisar la [**documentación del nodo**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb/blob/main/README.md) y el [**repositorio de Github**](https://github.com/PfisterDaniel/node-red-contrib-whatsapp-cmb) asociado si quieres una comprensión más profunda de cómo funciona el módulo y cómo maximizar su potencial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
El módulo **node-red-contrib-whatsapp-cmb** se recomienda por su compatibilidad y confiabilidad actual al momento de escribir este tutorial (julio de 2024). Sin embargo, la disponibilidad y funcionalidad de los módulos de Node-RED puede variar con el tiempo. Es recomendable revisar los comentarios de usuarios más recientes y las notas de compatibilidad en la biblioteca de Node-RED o repositorios de GitHub. Si encuentras problemas con este módulo, considera explorar otros módulos de WhatsApp listados en la biblioteca de Node-RED para una opción más adecuada.
:::

### Paso 6. Configurar el nodo de WhatsApp 

Una vez que hayas instalado el módulo de WhatsApp, arrastra el nodo **Send Message** a tu flujo de Node-RED y conéctalo al nodo de función.

Haz doble clic en el nodo **Send Message** para configurarlo. Luego, haz clic en el icono más junto al campo Account para añadir una nueva configuración de Account.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

1. Ingresa el nombre que te gustaría usar para esta cuenta.
2. Ingresa el número de teléfono asociado con tu cuenta de WhatsApp.
3. Ingresa tu clave API.

Luego, haz clic en **Add** o **Update** para guardar la configuración de Account.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

Con la cuenta configurada, cambia el menú desplegable junto al campo Message a **msg.**, y escribe `payload` en el campo de texto. Finalmente, haz clic en **Done** para completar la configuración del nodo de WhatsApp.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Desplegar

Finalmente, despliega tu flujo haciendo clic en el botón Deploy en la parte superior derecha de la interfaz de Node-RED. Esta acción activa tus nodos configurados, permitiendo que los datos fluyan desde tu nodo de función hacia la API de CallMeBot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

Ahora, recibirás una notificación de WhatsApp cada vez que tu Watcher sea activado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/WhatsApp_Result.png" style={{width:1000, height:'auto'}}/></div>

## Depuración: Errores de Node-RED

Al intentar integrar Node-RED con WhatsApp, es posible que encuentres un error como este. Si esto ocurre, puedes seguir estos pasos para solucionarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_WhatsApp/Node_RED_Error.png" style={{width:300, height:'auto'}}/></div>

Para resolver este problema, podrías intentar los siguientes pasos:

1. Instalar el módulo `aws4` faltante ejecutando en tu directorio de usuario de Node-RED:

   ```sh
   npm install aws4
   ```

2. Si eso no funciona, es posible que necesites reinstalar el paquete `request`:

   ```sh
   npm install request
   ```

3. Si el problema persiste, es posible que necesites reinstalar el nodo de WhatsApp:

   ```sh
   npm install node-red-contrib-whatsapp-cmb
   ```

4. Como último recurso, podrías intentar limpiar tu caché de npm y reinstalar todas las dependencias:

   ```sh
    npm cache clean --force
    npm install
   ```

Después de probar estos pasos, reinicia Node-RED y verifica si el error se ha resuelto. Si aún encuentras problemas, es posible que necesites verificar la compatibilidad entre tu versión de Node.js, la versión de Node-RED y las versiones de los paquetes que estás utilizando.

¡Felicitaciones por integrar exitosamente Watcher con WhatsApp! Has abierto la puerta a una amplia gama de oportunidades emocionantes en tus esfuerzos de desarrollo. Prepárate para sumergirte en la creación de aplicaciones innovadoras que aprovechen las robustas capacidades de WhatsApp. ¡Esperamos ver las soluciones extraordinarias que desarrollarás a continuación!

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
