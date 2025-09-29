---
description: Integrar en Azure IoT Hub
title: Integrar en Azure IoT Hub
keywords:
- SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Integrate-into-Azure-IoT-Hub
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Integrar en Azure IoT Hub

El Internet de las Cosas (IoT) es una red de dispositivos físicos que se conectan e intercambian datos con otros dispositivos y servicios a través de Internet u otra red. Actualmente hay más de diez mil millones de dispositivos conectados en el mundo y se añaden más cada año. Cualquier cosa que pueda ser integrada con los sensores y software necesarios puede ser conectada a través de internet.

Azure IoT Hub es un servicio administrado alojado en la nube que actúa como un centro de mensajes central para la comunicación entre una aplicación IoT y sus dispositivos conectados. Puedes conectar millones de dispositivos y sus soluciones backend de manera confiable y segura. Casi cualquier dispositivo puede ser conectado a un IoT hub.

Se admiten varios patrones de mensajería, incluyendo telemetría de dispositivo a nube, carga de archivos desde dispositivos, y métodos de solicitud-respuesta para controlar tus dispositivos desde la nube. IoT Hub también admite monitoreo para ayudarte a rastrear la creación de dispositivos, conexiones de dispositivos y fallas de dispositivos.

- Para más información sobre el uso de Microsoft Azure IoT Hub, por favor consulta [aquí](https://docs.microsoft.com/en-us/azure/iot-hub/iot-concepts-and-iot-hub).

En este capítulo, necesitarás cambiar a [Microsoft Azure](https://portal.azure.com/#home). Después de eso, tal vez necesites registrarte para obtener una cuenta gratuita. Un nuevo [registro de cuenta](https://azure.microsoft.com/en-gb/free/?v=exp&adobe_mc_sdid=SDID%3D15AD43418726D152-6CD00D48F523D667%7CMCORGID%3DEA76ADE95776D2EC7F000101%40AdobeOrg%7CTS%3D1646905124&adobe_mc_ref=https%3A%2F%2Fazure.microsoft.com%2Fzh-cn%2Ffree%2F) te dará un crédito gratuito de $200, que puedes usar completamente para completar nuestras rutinas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/143.png" /></div>

## Crear grupos de recursos

Un grupo de recursos es un contenedor que mantiene recursos relacionados para una solución de Azure. El grupo de recursos puede incluir todos los recursos para la solución, o solo aquellos recursos que quieres administrar como un grupo. Tú decides cómo quieres asignar recursos a grupos de recursos basándote en lo que tenga más sentido para tu organización. Generalmente, añade recursos que comparten el mismo ciclo de vida al mismo grupo de recursos para que puedas desplegarlos, actualizarlos y eliminarlos fácilmente como un grupo.

Entonces primero, por favor inicia sesión en el [portal de Azure](https://portal.azure.com/) con tu cuenta registrada.

Selecciona **Grupos de recursos**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/144.png" /></div>

Selecciona **Crear**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/145.png" /></div>

Ingresa los siguientes valores:

- **Suscripción**: Selecciona tu suscripción de Azure.

- **Grupo de recursos**: Ingresa un nuevo nombre de grupo de recursos.

- **Región**: Selecciona una ubicación de Azure, como Europa del Norte.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/146.png" /></div>

Selecciona **Revisar + Crear**.

Selecciona **Crear**. Toma unos segundos crear un grupo de recursos.

Selecciona Actualizar desde el menú superior para actualizar la lista de grupos de recursos, y luego selecciona el grupo de recursos recién creado para abrirlo. O selecciona Notificación (el ícono de campana) desde la parte superior, y luego selecciona Ir al grupo de recursos para abrir el grupo de recursos recién creado.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/147.png" /></div>

## Crear un Microsoft Azure IoT Hub

Este paso describe cómo crear y administrar Microsoft Azure IoT Hub usando el portal de Microsoft Azure. Desde la página principal de Microsoft Azure, selecciona el botón **Crear un recurso**, y luego ingresa IoT Hub en el campo Buscar en el Marketplace.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/11.jpg" /></div>

Selecciona IoT Hub de los resultados de búsqueda, y luego selecciona Crear.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/12.jpg" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/13.jpg" /></div>

En la pestaña Básicos, completa los campos de la siguiente manera:

- **Suscripción**: Selecciona la suscripción a usar para tu hub.

- **Grupo de recursos**: Selecciona un grupo de recursos o crea uno nuevo. Para crear uno nuevo, selecciona Crear nuevo y completa el nombre que deseas usar. Para usar un grupo de recursos existente, selecciona ese grupo de recursos. Para más información, consulta [Administrar grupos de recursos de Azure Resource Manager](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal).

- **Región**: Selecciona la región en la que deseas que se ubique tu hub. Selecciona la ubicación más cercana a ti. Algunas características, como [flujos de dispositivos de IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-device-streams-overview), solo están disponibles en regiones específicas. Para estas características limitadas, debes seleccionar una de las regiones compatibles.

- **Nombre de IoT Hub**: Ingresa un nombre para tu hub. Este nombre debe ser globalmente único, con una longitud entre 3 y 50 caracteres alfanuméricos. El nombre también puede incluir el carácter guión ('-').

:::note
Debido a que el IoT hub será públicamente descubrible como un endpoint DNS, asegúrate de evitar ingresar cualquier información sensible o personalmente identificable cuando lo nombres.
:::
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/148.png" /></div>

Selecciona **Siguiente: Redes** para continuar creando tu hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/149.png" /></div>

Selecciona **Siguiente: Administración** para continuar creando tu hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/150.png" /></div>

Puedes aceptar la configuración predeterminada aquí. Si lo deseas, puedes modificar cualquiera de los siguientes campos:

Elige los endpoints que los dispositivos pueden usar para conectarse a tu IoT hub. Puedes seleccionar la configuración predeterminada, Acceso público, o elegir Acceso privado. Acepta la configuración predeterminada para este ejemplo.

- **Nivel de precios y escala**

Tu nivel seleccionado. Puedes elegir entre varios niveles, dependiendo de cuántas características desees y cuántos mensajes envíes a través de tu solución por día. El nivel gratuito está destinado para pruebas y evaluación. Permite que 500 dispositivos se conecten al hub y hasta 8,000 mensajes por día. Cada suscripción de Azure puede crear un IoT hub en el nivel gratuito.

Si estás trabajando en un Inicio rápido para flujos de dispositivos de IoT Hub, selecciona el nivel gratuito.

- **Unidades de IoT Hub**

El número de mensajes permitidos por unidad por día depende del nivel de precios de tu hub. Por ejemplo, si deseas que el hub soporte la entrada de 700,000 mensajes, eliges dos unidades de nivel S1. Para detalles sobre las otras opciones de nivel, consulta [Elegir el nivel correcto de IoT Hub](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-scaling).

- **Microsoft Defender para IoT**

Activa esto para añadir una capa extra de protección contra amenazas a IoT y tus dispositivos. Esta opción no está disponible para hubs en el nivel gratuito. Aprende más sobre recomendaciones de seguridad para IoT Hub en Defender para IoT.

- **Control de acceso basado en roles**

Elige cómo se administra el acceso al IoT hub, si se permiten políticas de acceso compartido o solo se soporta control de acceso basado en roles. Para más información, consulta [Controlar acceso a IoT Hub usando Azure Active Directory](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-dev-guide-azure-ad-rbac).

- **Particiones de dispositivo a nube**

Esta propiedad relaciona los mensajes de dispositivo a nube con el número de lectores simultáneos de los mensajes. La mayoría de los hubs necesitan solo cuatro particiones.

Selecciona **Siguiente: Etiquetas** para continuar a la siguiente pantalla.

Las etiquetas son pares nombre/valor. Puedes asignar la misma etiqueta a múltiples recursos y grupos de recursos para categorizar recursos y consolidar facturación. En este documento, no añadirás ninguna etiqueta. Para más información, consulta [Usar etiquetas para organizar tus recursos de Azure](https://docs.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/151.png" /></div>

Selecciona **Siguiente: Revisar + crear** para revisar tus opciones. Verás algo similar a esta pantalla, pero con los valores que seleccionaste al crear el hub.

Dejamos el resto del contenido como predeterminado y no lo modificamos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/33.jpg" /></div>

Selecciona **Crear** para iniciar el despliegue de tu nuevo hub. Tu despliegue estará en progreso unos minutos mientras se crea el hub. Una vez que el despliegue esté completo, selecciona **Ir al recurso** para abrir el nuevo hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/16.jpg" /></div>

Puedes cambiar la configuración de un IoT hub existente después de que se haya creado desde el panel de IoT Hub.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/17.jpg" /></div>

## Crear clave secreta compartida

Haz clic en **Add Shared Access Policy** y crea una nueva política de acceso con los siguientes permisos: **Registry Read**, **Registry Write**, **Device Connect**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/35.jpg" /></div>

Después de la creación, se generarán automáticamente cuatro conjuntos de claves secretas, la que necesitamos copiar es la **Primary connection string**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/154.png" /></div>

:::note
No filtres tu Primary connection string, de lo contrario otros pueden acceder a tu Azure IoT Hub en cualquier momento y obtener todos los permisos que has configurado para él.
:::

## Integración a Helium

Así que ahora podemos volver a la [consola de Helium](https://console.helium.com/integrations) y crear la integración de Azure a Helium.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/152.png" /></div>

Haz clic en **Add Integration** en la nueva página.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/153.png" /></div>

Completa la **Primary connection string** generada anteriormente en la nueva página y Helium generará automáticamente el resto del contenido.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/155.png" /></div>

Finalmente, solo nombra esta integración.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/156.png" /></div>

## Conexión de Integración

Ahora, usa la interfaz de hacer clic y arrastrar en la Consola de Helium para conectar el dispositivo a la función (Decoder) a la Integración de Azure como se muestra [anteriormente](https://wiki.seeedstudio.com/es/Helium-Introduction/#helium-console-flows).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/21.jpg" /></div>

En este punto, sigue los [pasos anteriores](https://wiki.seeedstudio.com/es/Connecting-to-Helium/#upload-code-send-data-to-helium) para subir el código nuevamente, y Wio Terminal se reconectará a Helium y subirá los datos.

Después de que la integración esté completa y tu dispositivo se una a LoRaWAN® para enviar datos a Helium todo el tiempo. Un dispositivo debería aparecer en el panel de Dispositivos de los hubs de IoT de Azure con el ID de Dispositivo de la Red Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/37.jpg" /></div>

También podemos averiguar sobre el éxito del envío de datos verificando los datos devueltos por el monitor serie.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/24.jpg" /></div>

Cuando hagas clic en "Overview" en IoT Hubs, también deberías ver mensajes fluyendo a través de los hubs de IoT y un dispositivo listado como "Connected".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/23.jpg" /></div>

- **Number of messages used:** Número total de mensajes utilizados (Máx).

- **Device to cloud messages:** Mensajes de telemetría enviados (Cantidad).

- **Connected Devices:** Dispositivos conectados (Máx).

- **Total IoT Devices:** Dispositivos totales (Máx).

Así que en este punto del tutorial, has completado todo el despliegue del sensor local a la nube de Azure. A continuación, tienes la opción de personalizar el procesamiento de los datos según tus necesidades, consulta [aquí](https://docs.microsoft.com/en-us/azure/iot-hub/iot-hub-devguide-messaging).

Por supuesto, también puedes continuar nuestro contenido del tutorial para aprender cómo usar la integración de Web APP de Microsoft para completar la visualización de tus datos.

<table align="center">
  <tbody><tr>
      <td align="cent er"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/webapp.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Configurando Visualización de Web APP</strong><br /><br />Esta sección describe cómo visualizar la información de datos recibida por Microsoft Azure usando la integración gratuita de Web APP.<br /><br /><a href="https://wiki.seeedstudio.com/es/Configuring-Web-APP-Visualization">Comencemos &gt;</a></td>
    </tr>
  </tbody></table>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaración

- La marca LoRa® es una marca comercial de Semtech Corporation o sus subsidiarias.
- LoRaWAN® es una marca utilizada bajo licencia de LoRa Alliance®.
