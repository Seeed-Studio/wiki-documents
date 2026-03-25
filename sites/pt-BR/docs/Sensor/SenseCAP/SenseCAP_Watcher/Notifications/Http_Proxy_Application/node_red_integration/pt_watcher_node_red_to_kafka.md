---
description: Enviar mensagem do Watcher & Node-RED para o Kafka
title: Watcher & Node-RED para Kafka
keywords:
  - watcher
  - kafka
image: https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png
slug: /watcher_node_red_to_kafka
last_update:
  date: 07/24/2024
  author: Allen
createdAt: '2024-07-26'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/watcher_node_red_to_kafka/
---

# Guia Rápido: Watcher & Node-RED para Kafka

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/head_image.png" style={{width:1000, height:'auto'}}/></div>

## Parte 1. O que é o [Kafka](https://kafka.apache.org/)

Apache Kafka é uma plataforma distribuída de streaming de eventos projetada para processamento de dados com alta taxa de transferência e tolerância a falhas. Ela permite fluxos de dados em tempo real, permitindo que produtores publiquem mensagens em tópicos, enquanto consumidores podem assinar esses tópicos para processar os dados. Kafka é amplamente utilizado para construir pipelines de dados, análises em tempo real e integração de várias fontes de dados. Sua arquitetura robusta garante escalabilidade e durabilidade, tornando-o uma escolha popular para aplicações modernas orientadas a dados.

## Parte 2. Construir um cluster Kafka no Docker

Por que usar Docker? Porque o Docker pode simular o ambiente de vários computadores em uma única máquina e implantar aplicações com grande facilidade. Portanto, neste projeto, usaremos o Docker para configurar o ambiente e melhorar a eficiência.

### Passo 1. Baixar o Docker

De acordo com o seu computador, baixe o tipo de instalador correspondente. Clique [aqui](https://www.docker.com/products/docker-desktop/) para ir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se o seu computador é **Windows**, não instale o Docker até concluir o **Passo 2**.
:::

### Passo 2. Instalar o WSL (Windows Subsystem for Linux)

:::tip
Este passo é para **Windows**. Você pode pular este passo se o seu computador for Mac ou Linux.
:::

1. Execute o código a seguir como administrador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. Baixe esta ferramenta [aqui](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) e clique duas vezes para instalá-la.

3. Vá até a **Microsoft Store** para buscar e baixar a versão de Linux que você quiser, aqui eu instalei Ubuntu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. Depois de instalar o Linux, você precisa abri-lo e definir seu nome de usuário e senha, e então aguardar um minuto para inicializar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. Execute os seguintes comandos para usar o **WSL**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. Após instalar o WSL, agora você pode clicar duas vezes no instalador do Docker para instalá-lo. Quando você vir a imagem a seguir, isso significa que ele está funcionando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>

### Passo 3. Construir a imagem do Kafka e executar

1. Encontre um local para criar o arquivo **docker-compose.yml** e copie os códigos a seguir para dentro dele.

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

2. Execute o Kafka no contêiner e acesse-o
```
docker-compose up -d

docker exec -it kafka /bin/bash
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/1.png" style={{width:1000, height:'auto'}}/></div>

3. Crie um novo tópico, produza algo e consuma algo. Para testar se o Kafka funciona bem.
```
kafka-topics.sh --create --topic watcher --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1

kafka-console-producer.sh --topic=watcher --broker-list kafka:9092

kafka-console-consumer.sh --bootstrap-server kafka:9092 --from-beginning --topic watcher
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/2.png" style={{width:1000, height:'auto'}}/></div>

## Parte 3. Executar o módulo de mensagens Kafka no Node-RED

### Passo 4. Instalar o módulo de mensagens Kafka

1. Clique em **Manage palette**. Se você ainda não instalou o Node-RED, [clique aqui](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/3.png" style={{width:600, height:'auto'}}/></div>

2. Pesquise por **kafka-manager** e instale-o

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/4.png" style={{width:600, height:'auto'}}/></div>

### Passo 5. Configurar o módulo de mensagens Kafka

1. Arraste esses módulos (**inject, kafka producer, kafka consumer, debug**) para o espaço de trabalho

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/5.png" style={{width:800, height:'auto'}}/></div>

2. Clique duas vezes em **Kafka Producer** para configurá-lo. Quando fizer o passo 3, você deve **adicionar um novo broker**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/6.png" style={{width:800, height:'auto'}}/></div>

3. Clique duas vezes em **Kafka Consumer** para configurá-lo como abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/7.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/12.png" style={{width:600, height:'auto'}}/></div>

4. Quando terminar a configuração, clique no botão **Deploy** para implantá-la.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/8.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Sempre que houver qualquer alteração, você deve clicar no botão **Deploy**.
:::

5. Clique no **botão quadrado** para enviar um carimbo de data/hora e testar se todo o processo funciona. Se funcionar bem, você deverá receber o carimbo de data/hora no lado do **kafka consumer**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/9.png" style={{width:1000, height:'auto'}}/></div>

## Parte 4. Executar uma tarefa no Watcher

1. Antes de tudo, você precisa executar uma tarefa no Watcher seguindo o vídeo abaixo. Se quiser saber mais, [clique aqui](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/).

<div class="table-center">
<iframe width="600" height="338" src="https://files.seeedstudio.com/wiki/watcher_to_open_interpreter_image/run_task.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

2. Quando você terminar de executar uma tarefa no Watcher, você deve [consultar este link](https://wiki.seeedstudio.com/pt-br/watcher_to_node_red/) para enviar a mensagem do Watcher para o Node-RED.

## Parte 5. Receber dados no Kafka

1. Substitua o módulo **timestamp** pelos módulos **OpenStream** e **function** e clique duas vezes para configurá-los. Lembre-se de fazer o Deploy.

```javascript
node.send({ payload: msg.payload.value[0].content });

node.send({ payload: msg.payload.value[0].image_url });
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/10.png" style={{width:1000, height:'auto'}}/></div>

2. Eu executo um modelo de **People Detection** no Watcher. Então o Watcher enviará mensagens para o Kafka quando detectar pessoas e você verá a foto ao abrir o link.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_to_kafka_image/11.png" style={{width:1000, height:'auto'}}/></div>

Parabéns por concluir a aplicação de Watcher para Kafka! Há uma grande variedade de recursos úteis no Kafka esperando para você explorar. Continue com o ótimo trabalho e mergulhe nas empolgantes possibilidades à frente!

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>