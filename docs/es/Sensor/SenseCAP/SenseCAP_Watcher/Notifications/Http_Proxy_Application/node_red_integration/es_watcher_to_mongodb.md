---
description: Enviar datos desde Watcher & Node-RED a MongoDB
title: Watcher & Node-RED a MongoDB
keywords:
- Watcher
- MongoDB
- Node-RED
image: https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg
slug: /es/watcher_node_red_to_mongodb
last_update:
  date: 07/18/2024
  author: Vincent
---

# Inicio Rápido de Watcher a MongoDB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_MongoDB_Cover.jpg" style={{width:1000, height:'auto'}}/></div>

[**MongoDB**](https://www.mongodb.com/) es una base de datos de documentos potente y multiplataforma que sobresale en el manejo de datos tanto estructurados como no estructurados. Su modelo de datos flexible y sin esquema se basa en documentos similares a JSON, lo que la convierte en una excelente opción para aplicaciones dinámicas que requieren consultas ad hoc e indexación.

Usar MongoDB proporciona un método directo para **almacenar y utilizar datos del Watcher para procesamiento adicional u otras aplicaciones de proyecto.**

Este tutorial te guiará a través del uso de la API de Watcher y Node-RED para enviar datos sin problemas a MongoDB, una configuración perfecta para proyectos que demandan manejo de datos en tiempo real y persistencia.

## Parte 1. Configurar Watcher en Node-RED

### Paso 1. Instalar Node-RED

Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Node-RED es requerido para esta configuración, junto con la API de Watcher. Si no has instalado Node-RED o no lo has conectado con la API de Watcher, comienza aquí: [**Inicio Rápido de Watcher a Node-RED**](https://wiki.seeedstudio.com/es/watcher_to_node_red).

### Paso 2. Preparar datos para MongoDB

Después de integrar el Watcher con Node-RED, el siguiente paso es preparar los datos del Watcher para MongoDB. Usa un nodo de función en Node-RED para formatear los datos apropiadamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_1.png" style={{width:1000, height:'auto'}}/></div>

Para el propósito de este tutorial, simplemente devolveremos todos los datos del Watcher. Sin embargo, te animamos a transformar los datos según sea necesario para tu aplicación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_2.png" style={{width:1000, height:'auto'}}/></div>

#### Ejemplo de Función Node-RED para Formatear Datos

```sh
msg.payload = {
    "tlid": msg.payload.value[0].tlid,
    "tn": msg.payload.value[0].tn,
    "content": msg.payload.value[0].content,
    "image_url": msg.payload.value[0].image_url,
    "timestamp": msg.payload.timestamp,
    "orgId": msg.payload.orgId,
    "eui": msg.payload.eui,
    "channel": msg.payload.channel,
    "measurementID": msg.payload.value[0].measurementID
};
return msg;
```

## Parte 2. Configurar MongoDB

### Paso 3. Crear una cuenta

A continuación, crea una cuenta de MongoDB o inicia sesión si ya tienes una. Si eres nuevo en MongoDB, comienza visitando [**mongodb.com**](https://www.mongodb.com) y regístrate para obtener una cuenta gratuita.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_1.png" style={{width:1000, height:'auto'}}/></div>

### Paso 4. Desplegar un nuevo Clúster

Una vez que hayas iniciado sesión, procede a desplegar un nuevo clúster:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_4.png" style={{width:1000, height:'auto'}}/></div>

1. **Elegir la Configuración del Clúster**: Para desarrollo, recomendamos usar la configuración M0 porque es gratuita y suficiente para pruebas a pequeña escala. Sin embargo, puedes seleccionar una configuración diferente si se alinea mejor con los requisitos de tu proyecto.
2. **Seleccionar un Proveedor de Nube**: Elegimos AWS debido a su amplia disponibilidad y confiabilidad, pero otros proveedores como Google Cloud o Azure son igualmente viables dependiendo de tus requisitos geográficos o técnicos.
3. **Seleccionar una Región**: Esta debe ser la región más cercana a tu base de usuarios principal para minimizar la latencia y mejorar el rendimiento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_5.png" style={{width:1000, height:'auto'}}/></div>

### Paso 5. Configurar la Seguridad de tu Base de Datos

Una vez que tu nodo esté creado, navega al menú **Quickstart** en la barra lateral izquierda bajo **Security**. Aquí crearás un usuario de base de datos especificando un nombre de usuario y contraseña.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_6.png" style={{width:1000, height:'auto'}}/></div>

:::note
Por defecto, los usuarios tienen privilegios de *lectura y escritura* en cualquier base de datos. Tienes la opción de actualizar estos permisos y/o crear usuarios adicionales más adelante.
:::

Después de configurar tu usuario, permanece en la página **Quickstart** y desplázate hacia abajo para agregar tu dirección IP actual a tu Lista de Acceso IP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_7.png" style={{width:1000, height:'auto'}}/></div>

### Paso 6. Crear una Base de Datos y Colección

En la barra lateral izquierda, haz clic en el menú **Databases** bajo la categoría **Deployment**. Luego, haz clic en **Browse Collections** para abrir la página de gestión de base de datos. Aquí es donde se gestionan todas tus bases de datos y colecciones.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_8.png" style={{width:1000, height:'auto'}}/></div>

Dentro del gestor de base de datos, haz clic en **Add My Own Data** para iniciar el proceso de crear una nueva base de datos y colección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_9.png" style={{width:1000, height:'auto'}}/></div>

Aparecerá un mensaje solicitándote que ingreses los nombres para tu nueva base de datos y colección. Completa los nombres deseados para cada una.

Después de ingresar los nombres, haz clic en el botón **Create** para finalizar la creación de tu nueva base de datos y colección.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_10.png" style={{width:1000, height:'auto'}}/></div>

### Paso 7. Obtener tu Hostname

Comienza iniciando sesión en tu panel de MongoDB Atlas. Desde aquí, navega al menú **Database** en la barra lateral izquierda para encontrar tu clúster. Localiza tu clúster deseado y haz clic en el botón **Connect** asociado con él. Esto abrirá una serie de opciones de conexión.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_11.png" style={{width:1000, height:'auto'}}/></div>

En las opciones de conexión presentadas, haz clic en **Shell**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_12.png" style={{width:1000, height:'auto'}}/></div>

Después de seleccionar la opción MongoDB Shell, serás guiado a una sección titulada **Run your connection string in your command line.** Aquí encontrarás tu cadena de conexión completa presentada.

En la cadena de conexión, busca la porción que comienza después de `mongodb+srv://` y continúa hasta que llegues a un carácter `/`. Esta parte es tu hostname. Típicamente contiene el nombre de tu clúster seguido de `.mongodb.net`.

Por ejemplo, si tu cadena de conexión es:

```sh
mongosh "mongodb+srv://my-cluster123.mongodb.net" --apiVersion 1 --username my-username
```

El nombre del host sería:

```sh
my-cluster123.mongodb.net
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/MongoDB_13.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Conectar la Base de Datos MongoDB a Node-RED

### Paso 8. Instalar el módulo MongoDB

Haz clic en el icono de las tres barras y luego haz clic en la opción **Manage palette**. Esto abre una nueva ventana donde puedes agregar o eliminar nodos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_3.png" style={{width:1000, height:'auto'}}/></div>

Cambia a la pestaña **Install** dentro de la ventana de gestión de paleta. En la barra de búsqueda, escribe `mongodb-aleph` para encontrar el módulo. Luego, haz clic en el botón **install** junto a la entrada **node-red-contrib-mongodb-aleph**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_4.png" style={{width:1000, height:'auto'}}/></div>

:::note
El módulo **node-red-contrib-mongodb-aleph** se recomienda por su compatibilidad actual y confiabilidad al momento de escribir este tutorial (julio 2024). Sin embargo, la disponibilidad y funcionalidad de los módulos de Node-RED puede variar con el tiempo. Es recomendable revisar los comentarios de usuarios más recientes y las notas de compatibilidad en la biblioteca de Node-RED o repositorios de GitHub. Si encuentras problemas con este módulo, considera explorar otros módulos de MongoDB listados en la biblioteca de Node-RED para una opción más adecuada.
:::

### Paso 9. Configurar el nodo MongoDB

Una vez que hayas instalado el módulo MongoDB, arrastra el nodo **mongodb - aleph - out** a tu flujo de Node-RED y conéctalo al nodo de función.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_5.png" style={{width:1000, height:'auto'}}/></div>

Haz doble clic en el nodo MongoDB para configurarlo. Luego, haz clic en el icono más junto al campo servidor para agregar una nueva configuración de servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_6.png" style={{width:1000, height:'auto'}}/></div>

1. Ingresa el nombre del host que recuperaste anteriormente.
2. Cambia la topología de conexión a **DNS Cluster \(mongodb+srv://\)** desde el menú desplegable.
3. Ingresa el nombre de tu base de datos MongoDB.
4. Ingresa el nombre de usuario que configuraste en la configuración de seguridad.
5. Ingresa la contraseña correspondiente.
6. Proporciona un nombre descriptivo para tu conexión MongoDB que se usará dentro de Node-RED.

Luego, haz clic en **Add** o **Update** para guardar la configuración del servidor.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_7.png" style={{width:1000, height:'auto'}}/></div>

Con el servidor configurado, ahora puedes especificar los detalles para la inserción de datos:

1. Ingresa el nombre de la colección MongoDB donde quieres insertar los datos.
2. Establece la operación a **Insert**, que agregará nuevos documentos a la colección.

Haz clic en **Done** para completar la configuración.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_8.png" style={{width:1000, height:'auto'}}/></div>

### Paso 10. Desplegar

Finalmente, despliega tu flujo haciendo clic en el botón Deploy en la parte superior derecha de la interfaz de Node-RED. Esta acción activa tus nodos configurados, permitiendo que los datos fluyan desde tu nodo de función hacia MongoDB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Node_RED_9.png" style={{width:1000, height:'auto'}}/></div>

Ahora, verás los datos poblarse en MongoDB.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_mongo_db_image/Watcher_Collection_Finished.png" style={{width:1000, height:'auto'}}/></div>

¡Felicitaciones por integrar exitosamente Watcher con MongoDB! Has abierto la puerta a una amplia gama de oportunidades emocionantes en tus esfuerzos de desarrollo. Prepárate para sumergirte en la creación de aplicaciones innovadoras que aprovechen las robustas capacidades de MongoDB. ¡Esperamos ver las soluciones extraordinarias que desarrollarás a continuación!

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
