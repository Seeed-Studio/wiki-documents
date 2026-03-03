---
description: Enviar datos desde Watcher & Node-RED a Discord
title: Watcher & Node-RED a Discord
keywords:
- Watcher
- Discord
- Node-RED
image: https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png
slug: /es/watcher_node_red_to_discord
last_update:
  date: 08/02/2024
  author: Vincent
---

# Inicio Rápido de Watcher a Discord

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Watcher_Discord_Cover.png" style={{width:1000, height:'auto'}}/></div>

[**Discord**](https://discord.com/) es una plataforma social de mensajería instantánea y VoIP que facilita la comunicación a través de llamadas de voz, videollamadas, mensajería de texto y compartir medios. Las conversaciones en Discord pueden ser privadas o ocurrir dentro de comunidades virtuales conocidas como "servidores".

Este tutorial te guiará a través de la integración de la API de Watcher con Node-RED para enviar datos sin problemas desde el Watcher a Discord. Esta integración proporciona un método simple y eficiente para **recibir notificaciones y abre la puerta para más aplicaciones e integraciones**.

## Parte 1. Configurar Watcher en Node-RED

### Paso 1. Configurar Node-RED

Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Node-RED es requerido para esta configuración, junto con la API de Watcher. Si no has instalado Node-RED o no lo has conectado con la API de Watcher, comienza aquí: [**Inicio Rápido de Watcher a Node-RED**](https://wiki.seeedstudio.com/es/watcher_to_node_red).

### Paso 2. Preparar datos desde Watcher

Después de configurar el Watcher para trabajar con Node-RED, el siguiente paso es preparar los datos del Watcher para Discord. Haz doble clic en el nodo de función para formatear los datos apropiadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para el propósito de este tutorial, estaremos enviando el contenido así como la imagen. Sin embargo, se te anima a transformar los datos según sea necesario para tu aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.png" style={{width:700, height:'auto'}}/></div>

#### Ejemplo de Función Node-RED para Formatear Datos

```sh
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

## Parte 2. Configurar Bot de Discord

### Paso 3. Registrarse en Discord

Se requiere una cuenta de Discord para continuar. Si aún no tienes una cuenta, por favor [**haz clic aquí**](https://discord.com) y completa los pasos para crear una cuenta.

Si ya tienes una cuenta, por favor procede al [**Paso 4**](#paso-4-crear-aplicación-de-desarrollo).

Si ya tienes un bot de Discord que te gustaría configurar en Node-RED, por favor salta a la [**Parte 3**](#parte-3-integrar-discord-con-node-red).

### Paso 4. Crear Aplicación de Desarrollo

Una vez que tengas tu cuenta de Discord configurada e iniciada sesión, procede al [**Portal de Desarrolladores de Discord**](https://discord.com/developers/applications) y crea una nueva aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_1.png" style={{width:1000, height:'auto'}}/></div>

Ingresa un nombre para tu aplicación, acepta los [**Términos de Servicio para Desarrolladores**](https://support-dev.discord.com/hc/articles/8562894815383-Discord-Developer-Terms-of-Service) y la [**Política para Desarrolladores**](https://support-dev.discord.com/hc/articles/8563934450327-Discord-Developer-Policy) de Discord, luego haz clic en **Crear**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_2.png" style={{width:1000, height:'auto'}}/></div>

:::note
Necesitarás una dirección de correo electrónico válida vinculada a tu cuenta de Discord para continuar. Si no tienes un correo electrónico asociado con tu cuenta de Discord, por favor sigue estas instrucciones: [Cómo Cambiar la Dirección de Correo Electrónico de tu Cuenta](https://support.discord.com/hc/en-us/articles/4423385681175-How-to-Change-Your-Account-s-Email-Address)
:::

### Paso 5. Configurar Ajustes del Bot

Ahora configuraremos los ajustes del bot. Para hacerlo, sigue estos pasos:

1. En la barra lateral izquierda de la página de tu aplicación, haz clic en la pestaña **Bot** bajo **Configuración**.

2. En la sección **Intenciones de Gateway Privilegiadas**, verás varias opciones. Para este tutorial, solo necesitamos habilitar la **INTENCIÓN DE CONTENIDO DE MENSAJE**. Esto permite que tu bot lea el contenido de los mensajes. Activa el interruptor junto a **INTENCIÓN DE CONTENIDO DE MENSAJE** para habilitarlo. Cuando esté habilitado, el interruptor se volverá azul.

Cada vez que hagas un cambio a tu bot, aparecerá una ventana emergente en la parte inferior, solicitándote **Guardar Cambios**. Por favor asegúrate de hacer esto antes de continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_3.png" style={{width:1000, height:'auto'}}/></div>

:::note
Dependiendo de lo que pretendas hacer con tu aplicación, es posible que necesites habilitar intenciones adicionales. Para funcionalidades de bot más complejas, podrías necesitar habilitar otras intenciones como **INTENCIÓN DE PRESENCIA** o **INTENCIÓN DE MIEMBROS DEL SERVIDOR**. Sin embargo, para el propósito de este tutorial donde solo estamos enviando mensajes, habilitar la **INTENCIÓN DE CONTENIDO DE MENSAJE** es suficiente.
:::

Mientras estés en la página del Bot, también verás una sección titulada **Token** hacia la parte superior de la página. Haz clic en el botón **Restablecer Token** para generar un nuevo token para tu bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_4.png" style={{width:1000, height:'auto'}}/></div>

Ten en cuenta que restablecer tu token hará que tu bot deje de funcionar hasta que actualices el token en el código de tu bot. Asegúrate de estar preparado para actualizar la configuración de tu bot antes de proceder con el restablecimiento.

Es posible que se te solicite autenticación multifactor. Si es así, completa este paso según sea requerido antes de continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_5.png" style={{width:1000, height:'auto'}}/></div>

Copia este token y mantenlo seguro. Necesitarás este token para autenticar tu bot en Node-RED más tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_6.png" style={{width:1000, height:'auto'}}/></div>

:::warning
Nunca compartas tu token de bot públicamente. Cualquiera con tu token puede controlar tu bot. Si accidentalmente expones tu token, restablécelo inmediatamente en esta página.
:::

### Paso 6. Configurar Ajustes OAuth2

Ahora, cambia a la pestaña **OAuth2** bajo **Configuración** y desplázate hacia abajo hasta que veas **Generador de URL OAuth2**. Aquí, marcaremos el alcance **bot** ya que estamos creando una aplicación de bot.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_7.png" style={{width:1000, height:'auto'}}/></div>

Después de seleccionar el alcance del bot, aparecerá una nueva caja que te permite seleccionar **Permisos del Bot**. Para los propósitos de este tutorial, vamos a darle al bot permisos de **Administrador**, lo cual proporciona al bot acceso a todas las funcionalidades.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_8.png" style={{width:1000, height:'auto'}}/></div>

:::warning
Otorgar permisos de Administrador a un bot le da acceso completo a todas las funcionalidades del servidor. En un entorno de producción, se recomienda seguir el principio de menor privilegio y solo otorgar los permisos específicos que tu bot necesita para sus funciones previstas.
:::

Finalmente, desplázate hacia abajo para ver tu URL recién generada. Copia esta URL y pégala en la barra de direcciones de tu navegador web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_9.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Otorgar Acceso del Bot al Servidor

Se te pedirá que selecciones un servidor donde quieras agregar el bot. Elige el servidor apropiado del menú desplegable y haz clic en **Continuar**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_10.png" style={{width:1000, height:'auto'}}/></div>

En la siguiente pantalla, verás una lista completa de permisos que estás otorgando al bot. Estos permisos se basan en lo que seleccionaste en el Generador de URL OAuth2 en el [**Paso 6**](#step-6-configure-oauth2-settings). Revisa cada permiso cuidadosamente, luego haz clic en **Authorize**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_11.png" style={{width:1000, height:'auto'}}/></div>

Similar al [**Paso 5**](#step-5-configure-bot-settings), es posible que se te solicite autenticación multifactor nuevamente. Si es así, completa este paso según sea necesario antes de continuar.

Después de la autorización exitosa, verás un mensaje de confirmación indicando que el bot ha sido añadido a tu servidor de Discord seleccionado. Ahora, regresa a tu servidor de Discord para continuar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_12.png" style={{width:1000, height:'auto'}}/></div>

### Paso 8. Obtener ID del Canal

Una vez que llegues a tu servidor de Discord, haz clic en el ícono de engranaje (⚙️) cerca de la parte inferior de la pantalla, junto a la información de tu perfil. Esto abrirá tu Configuración de Usuario.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_13.png" style={{width:1000, height:'auto'}}/></div>

En la barra lateral de Configuración de Usuario, desplázate hacia abajo hasta la sección **Configuración de Aplicación** y haz clic en **Avanzado**. Asegúrate de que el interruptor **Modo Desarrollador** esté activado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_14.png" style={{width:1000, height:'auto'}}/></div>

Cierra la Configuración de Usuario y regresa a tu servidor de Discord. Haz clic derecho en el canal que quieres usar (en este tutorial, estamos usando el canal **general**). En la parte inferior del menú contextual que aparece, haz clic en **Copiar ID del Canal**. Guarda este ID del Canal para usarlo en tu flujo de Node-RED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_15.png" style={{width:1000, height:'auto'}}/></div>

:::note
El ID del Canal es un identificador único para cada canal de Discord. Asegúrate de mantenerlo seguro y no lo compartas públicamente.
:::

## Parte 3. Integrar Discord con Node-RED

### Paso 9. Instalar módulo de Discord

Haz clic en el ícono de tres barras y luego haz clic en la opción **Manage palette**. Esto abre una nueva ventana donde puedes añadir o eliminar nodos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_2.5.png" style={{width:1000, height:'auto'}}/></div>

Cambia a la pestaña **Install** dentro de la ventana de gestión de paleta. En la barra de búsqueda, escribe `discord` para encontrar el módulo. Luego, haz clic en el botón **install** junto a la entrada **node-red-contrib-discord-advanced**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

También recomendamos revisar la [**documentación del nodo**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced/blob/main/README.md) y el [**repositorio de Github**](https://github.com/Markoudstaal/node-red-contrib-discord-advanced) asociado si quieres una comprensión más profunda de cómo funciona el módulo y cómo maximizar su potencial.

:::note
El módulo **node-red-contrib-discord-advanced** se recomienda por su compatibilidad actual y confiabilidad al momento de escribir este tutorial (agosto 2024). Sin embargo, la disponibilidad y funcionalidad de los módulos de Node-RED puede variar con el tiempo. Es recomendable revisar los comentarios de usuarios más recientes y las notas de compatibilidad en la biblioteca de Node-RED o repositorios de GitHub. Si encuentras problemas con este módulo, considera explorar otros módulos de Discord listados en la biblioteca de Node-RED para una opción más adecuada.
:::

### Paso 10. Configurar nodo de Discord

Después de instalar el módulo de Discord, arrastra el nodo **discordMessageManager** a tu flujo de Node-RED y conéctalo al nodo de función

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

Haz doble clic en el nodo **discordMessageManager** para abrir su panel de configuración. Haz clic en el ícono más junto al campo **token** para añadir una nueva configuración de token de API de Discord.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_5.png" style={{width:700, height:'auto'}}/></div>

En la nueva ventana, ingresa la siguiente información:
- Token: Ingresa el token que obtuviste en el [**Paso 5**](#step-5-configure-bot-settings)
- Name: Dale un nombre a tu configuración de token

Luego, haz clic en **Add** o **Update** para guardar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.png" style={{width:700, height:'auto'}}/></div>

En el campo **Channel**, ingresa el ID del Canal que obtuviste en el [Paso 8](#step-8-obtain-channel-id). Luego, haz clic en **Done** para cerrar el panel de configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_6.5.png" style={{width:700, height:'auto'}}/></div>

:::note
Para configuraciones más complejas con múltiples canales y condiciones de activación, puedes dejar el campo Channel en blanco y usar `msg.channel` para establecer el canal dinámicamente. Sin embargo, para este tutorial básico, usaremos un ID de canal estático.
:::

### Paso 11. Desplegar

Finalmente, haz clic en el botón **Deploy** en la parte superior derecha de la interfaz de Node-RED. Una vez desplegado, tu Watcher enviará mensajes a Node-RED, que luego los reenviará a tu canal de Discord.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Discord_16.png" style={{width:1000, height:'auto'}}/></div>

¡Felicidades! Has configurado exitosamente tu Watcher para enviar mensajes a Discord a través de Node-RED. Esta configuración asegura que recibas notificaciones en tiempo real en tu canal de Discord cada vez que tu Watcher se active. Al hacerlo, has desbloqueado una gran cantidad de oportunidades emocionantes para tus proyectos de desarrollo. ¡Esperamos con ansias las soluciones innovadoras que crearás a continuación!

## Solución de problemas

Al integrar Discord con Node-RED, podrías encontrar algunos errores. Aquí hay dos errores comunes y pasos detallados para resolverlos:

### Error: Used disallowed intents

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_1.png" style={{width:1000, height:'auto'}}/></div>

Este error ocurre cuando tu bot está tratando de usar intents que no han sido habilitados en el Portal de Desarrolladores de Discord. Para solucionarlo:

1. Ve al [**Portal de Desarrolladores de Discord**](https://discord.com/developers/applications).
2. Selecciona tu aplicación.
3. Haz clic en **Bot** en la barra lateral izquierda.
4. Desplázate hacia abajo hasta la sección **Privileged Gateway Intents**.
5. Habilita los intents que tu bot necesita (comúnmente **Presence Intent**, **Server Members Intent**, y **Message Content Intent**).
6. Haz clic en **Save Changes** en la parte inferior de la página.
7. Vuelve a desplegar tu flujo de Node-RED.

### DiscordAPIError&#91;50001&#93;: Missing Access

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Watcher_Discord_Node_Red/Node_RED_Error_2.png" style={{width:1000, height:'auto'}}/></div>

Este error sugiere que tu bot no tiene los permisos necesarios para realizar la acción. Para resolverlo:

1. Asegúrate de que tu bot haya sido invitado al servidor con los permisos correctos:
- Ve al [**Portal de Desarrolladores de Discord**](https://discord.com/developers/applications).
- Selecciona tu aplicación y ve a la sección **OAuth2**.
- En **URL Generator**, selecciona **bot** bajo **SCOPES**.
- Bajo **BOT PERMISSIONS**, selecciona los permisos que tu bot necesita (como mínimo, **Send Messages** y **View Channels**).
- Copia la URL generada y ábrela en una nueva pestaña para invitar al bot a tu servidor con estos permisos.

2. Verifica los permisos del canal:
- En Discord, haz clic derecho en el canal al que estás tratando de enviar mensajes.
- Haz clic en **Edit Channel** > **Permissions**.
- Asegúrate de que el rol de tu bot tenga los permisos necesarios, especialmente **View Channel** y **Send Messages**.

3. Verifica el ID del Canal:
- Verifica dos veces que el ID del Canal en tu configuración de Node-RED sea correcto.
- Asegúrate de estar usando el ID de un canal de texto, no de un canal de voz o categoría.

4. Verifica el token de tu bot:
- Asegúrate de que el token en tu configuración de Node-RED sea correcto y esté actualizado.
- Si no estás seguro, puedes regenerar el token en el Portal de Desarrolladores de Discord bajo la sección **Bot**.

5. Vuelve a desplegar tu flujo de Node-RED después de hacer estos cambios.

Si continúas experimentando problemas después de intentar estos pasos, considera revisar la [**documentación de la API de Discord**](https://discord.com/developers/docs/reference) o buscar ayuda en la [**comunidad de desarrolladores de Discord**](https://discord.com/invite/discord-developers) para solución de problemas más específica.

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
