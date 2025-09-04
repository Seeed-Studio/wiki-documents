---
description: Enviar mensaje desde Watcher & Node-RED a kafka
title: Watcher & Node-RED a kafka
keywords:
- watcher
- kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /es/watcher_node_red_to_kafka
last_update:
  date: 07/24/2024
  author: Allen
---

# Inicio Rápido de Watcher & Node-RED a Kafka

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## Parte 1. ¿Qué es [Kafka](https://kafka.apache.org/)?

Apache Kafka es una plataforma de transmisión de eventos distribuida diseñada para el procesamiento de datos de alto rendimiento y tolerante a fallos. Permite feeds de datos en tiempo real al permitir que los productores publiquen mensajes en temas, mientras que los consumidores pueden suscribirse a estos temas para procesar los datos. Kafka se usa ampliamente para construir pipelines de datos, análisis en tiempo real e integrar varias fuentes de datos. Su arquitectura robusta garantiza escalabilidad y durabilidad, convirtiéndolo en una opción popular para aplicaciones modernas basadas en datos.

## Parte 2. Construir clúster Kafka en Docker

¿Por qué usar Docker? Porque Docker puede simular el entorno de múltiples computadoras en una sola máquina y desplegar aplicaciones con gran facilidad. Por lo tanto, en este proyecto, usaremos Docker para configurar el entorno y mejorar la eficiencia.

### Paso 1. Descargar Docker

Según tu computadora, descarga diferentes tipos de instalador. Haz clic [aquí](https://www.docker.com/products/docker-desktop/) para ir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Si tu computadora es **Windows**, por favor no instales docker hasta que termines el **Paso 2**.
:::

### Paso 2. Instalar WSL(Subsistema de Windows para Linux)

:::tip
Este paso es para **Windows**. Puedes omitir este paso si tu computadora es Mac o Linux.
:::

1. Ejecuta el siguiente código como administrador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. Descarga esta herramienta desde [aquí](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) y haz doble clic para instalarla.

3. Ve a tu **Microsoft Store** para buscar y descargar la versión de linux que te guste, aquí instalé Ubuntu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. Después de instalar Linux, necesitas abrirlo y configurar tu nombre de usuario y contraseña, y luego necesitas esperar un minuto para que se inicialice.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. Ejecuta las siguientes instrucciones para usar **WSL**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. Después de instalar WSL, ahora puedes hacer doble clic en tu instalador de docker para instalarlo. Cuando veas la siguiente imagen significa que funciona.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

### Paso 3. Construir imagen de Kafka y ejecutar

1. Encuentra un lugar para crear el archivo **docker-compose.yml** y copia los siguientes códigos en él.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/15.png" style={{width:1000, height:'auto'}}/></div>


```yml
services:
  zookeeper:
    image: wurstmeister/zookeeper   ## image
    container_name: zookeeper
    ports:
      - "2181:2181"                 ## Externally exposed port number
  kafka:
    image: wurstmeister/kafka       ## image
    container_name: kafka
    volumes: 
        - ./volume:/volume ## Mounting location
    ports:
      - "9092:9092"
    environment:
      KAFKA_ADVERTISED_HOST_NAME: 127.0.0.1         ## Host machine IP
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181       ## Running Kafka is base to zookeeper
      KAFKA_ADVERTISED_PORT: 9092
      KAFKA_LOG_RETENTION_HOURS: 120
      KAFKA_MESSAGE_MAX_BYTES: 10000000
      KAFKA_REPLICA_FETCH_MAX_BYTES: 10000000
      KAFKA_GROUP_MAX_SESSION_TIMEOUT_MS: 60000
      KAFKA_NUM_PARTITIONS: 3
      KAFKA_DELETE_RETENTION_MS: 1000
  kafka-manager:
    image: sheepkiller/kafka-manager                ## image: open source web manage interface about kafka cluster
    container_name: kafka-manager
    environment:
        ZK_HOSTS: 127.0.0.1                         ## host machine IP
    ports:  
      - "9009:9000"                                 ## exposed port
```

2. Ejecutar Kafka en contenedor y acceder a él
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. Crea un nuevo tema, produce algo y consume algo. Para probar si Kafka funciona bien.
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Ejecutar el módulo de mensajes Kafka en Node-RED

### Paso 4. Instalar el módulo de mensajes Kafka

1. Haz clic en **Manage palette**. Si aún no has instalado Node_RED, [por favor haz clic aquí](https://wiki.seeedstudio.com/es/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. Busca **kafka-manager** e instálalo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### Paso 5. Configurar el módulo de mensajes Kafka

1. Arrastra esos módulos (**inject, kafka producer, kafka consumer, debug**) al espacio de trabajo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. Haz doble clic en **Kafka Producer** para configurarlo. Cuando hagas el paso 3, debes **agregar un nuevo broker**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. Haz doble clic en **Kafka Consumer** para configurarlo como se muestra a continuación.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. Cuando termines la configuración, haz clic en el botón **Deploy** para desplegarlo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Para cualquier cambio, debes hacer clic en el botón **Deploy**.
:::

5. Haz clic en el **botón cuadrado** para enviar una marca de tiempo y probar si todo el proceso funciona. Si funciona bien, deberías recibir la marca de tiempo en el extremo del **kafka consumer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## Parte 4. Ejecutar una tarea en Watcher

1. Primero que todo, necesitas ejecutar una tarea en Watcher siguiendo el video a continuación. Si quieres saber más [por favor haz clic aquí](https://wiki.seeedstudio.com/es/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. Cuando termines de ejecutar una tarea en watcher, debes [consultar este enlace](https://wiki.seeedstudio.com/es/watcher_to_node_red/) para enviar mensajes de watcher a Node-RED.

## Parte 5. Recibir datos en Kafka

1. Reemplaza el módulo **timestamp** por los módulos **OpenStream** y **function** y haz doble clic para configurarlos. Recuerda desplegarlo.

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. Ejecuto un modelo de **Detección de Personas** en Watcher. Así que cuando Watcher detecte personas enviará un mensaje a Kafka y verás la foto cuando abras el enlace.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

¡Felicitaciones por completar la aplicación de watcher a Kafka! Hay una gran cantidad de características útiles en Kafka esperando que las explores. ¡Sigue con el excelente trabajo y sumérgete en las emocionantes posibilidades que te esperan!

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