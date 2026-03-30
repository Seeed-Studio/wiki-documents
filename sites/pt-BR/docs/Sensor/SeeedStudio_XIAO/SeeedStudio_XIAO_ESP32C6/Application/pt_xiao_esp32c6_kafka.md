---
description: Use XIAO ESP32C6 and sensors collect data and send to Apache Kafka
title: Processamento de Dados IoT em Tempo Real em Node Alimentado por Apache Kafka
keywords:
  - xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_kafka
last_update:
  date: 05/21/2024
  author: Allen
createdAt: '2024-05-23'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_kafka/
---

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/kafka_xiao.mp4?autoplay=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Nosso node de processamento de ponta, Kafka-ESP32, combina o poder do Apache Kafka e dos microcontroladores ESP32C6 para fornecer uma solução eficiente para lidar com fluxos de dados de IoT. Usando o XIAO ESP32C6 com o sensor ambiental DHT20, os dados são coletados e enviados perfeitamente para o Apache Kafka via ESP32C6. Os recursos de mensagens de alta taxa de transferência e baixa latência do Kafka permitem o processamento e a análise de dados em tempo real, enquanto sua arquitetura distribuída possibilita escalabilidade sem esforço. O Kafka-ESP32 capacita você a desenvolver aplicações e integrações personalizadas, revolucionando a forma como você gerencia e utiliza seus ativos de IoT no cenário atual orientado a dados.

## Materiais Necessários

Este exemplo vai apresentar o uso do XIAO ESP32C6 com o sensor de temperatura e umidade Grove DHT20 para concluir a tarefa SageMaker do AWS IoT Core. Abaixo estão todos os dispositivos de hardware necessários para concluir esta rotina.

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32C6</th>
			<th>DHT20</th>
			<th>Placa de Extensão</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Temperature-Humidity-Sensor/Tem-humidity-sensor1.jpg" style={{width:250, height:'auto'}}/></div></td><td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/extensionboard.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
            <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Instalação do Docker

Por que usar Docker? Porque o Docker pode simular o ambiente de múltiplos computadores em uma única máquina e implantar aplicações com grande facilidade. Portanto, neste projeto, vamos usar o Docker para configurar o ambiente e melhorar a eficiência.

### Etapa 1. Baixar o Docker

De acordo com o seu computador, baixe o tipo de instalador correspondente. Clique [aqui](https://www.docker.com/products/docker-desktop/) para acessar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/1.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se o seu computador for **Windows**, não instale o Docker até terminar a **Etapa 2**.
:::

### Etapa 2. Instalar o WSL (Windows Subsystem for Linux)

:::tip
Esta etapa é para **Windows**. Você pode pular esta etapa se o seu computador for Mac ou Linux.
:::

1. Execute o seguinte código como administrador.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/3.png" style={{width:1000, height:'auto'}}/></div>

```bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

2. Baixe esta ferramenta por [aqui](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi) e clique duas vezes para instalá-la.

3. Vá até a sua **Microsoft Store** para pesquisar e baixar a versão de Linux que você preferir, aqui eu instalei o Ubuntu.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/4.png" style={{width:1000, height:'auto'}}/></div>

4. Depois de instalar o Linux, você precisa abri-lo e definir seu nome de usuário e senha, e então aguardar um minuto para a inicialização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/5.png" style={{width:1000, height:'auto'}}/></div>

5. Execute os seguintes comandos para usar o **WSL**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/6.png" style={{width:1000, height:'auto'}}/></div>

6. Depois de instalar o WSL, agora você pode clicar duas vezes no instalador do Docker para instalá-lo. Quando você vir a seguinte imagem, significa que está funcionando.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/2.png" style={{width:1000, height:'auto'}}/></div>



## Implantar Serviços

Antes de começarmos, quero apresentar a função de cada serviço neste projeto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/structure.png" style={{width:700, height:'auto'}}/></div>

Aqui está a estrutura de diretórios deste projeto para sua referência. Vou criar esses arquivos um por um nas etapas a seguir. A posição de cada arquivo é muito importante. Eu recomendo fortemente que você consulte esta estrutura de diretórios. Crie um diretório **kafka_xiao_project** e inclua esses arquivos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/30.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 3. Implantar um Servidor Python

Devido à falta de desempenho do dispositivo MCU, ele não pode ser usado diretamente como cliente do Kafka. Então você precisa construir um servidor para fazer o trânsito de dados. Esta etapa é para construir um servidor simples com Python. O XIAO ESP32C6 serve principalmente para coletar dados de ambiente do DHT20 e enviá-los ao servidor.

1. Primeiro precisamos criar o arquivo **app.py**, que é o que o servidor executa.

```python
from flask import Flask
from kafka import KafkaProducer, KafkaConsumer

app = Flask(__name__)

@app.route('/favicon.ico')
def favicon():
    return '', 204

@app.route('/<temperature>/<humidity>')
def send_data(temperature, humidity):
    producer = KafkaProducer(bootstrap_servers='kafka:9092')
    data = f'Temperature: {temperature}, Humidity: {humidity}'
    producer.send('my_topic', data.encode('utf-8'))
    return f'Temperature: {temperature}, Humidity: {humidity}'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
```

2. Crie **requirements.txt**, que é a biblioteca de dependências.

```
flask
kafka-python
```

3. Crie o **Dockerfile**

```
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "app.py"]
```

4. Depois de criar esses 3 arquivos, podemos então construir uma imagem Docker executando o seguinte código.

```
docker build -t pyserver .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/9.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 4. Implantar o Jupyter Notebook

O Jupyter Notebook é usado principalmente para depuração, e é uma ferramenta muito boa de se usar. Além disso, podemos usar Python para operar o Kafka.

1. Primeiro crie o **Dockerfile**.

```
FROM python:3.9

RUN pip install jupyter

WORKDIR /notebook

EXPOSE 8888

CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", "--allow-root"]
```

2. Construa a imagem Docker do Jupyter.
```
docker build -t jupyter .
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/8.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 5. Iniciar o Cluster Docker

Podemos usar **docker-compose.yml** para construir o cluster Docker. Cada serviço no docker-compose representa um computador independente e usamos *kafka-net* para conectá-los entre si.

1. Então primeiro precisamos criar **docker-compose.yml**.

```
services:
  zookeeper:
    container_name: zookeeper
    hostname: zookeeper
    image: docker.io/bitnami/zookeeper
    ports:
      - "2181:2181"
    environment:
      - ALLOW_ANONYMOUS_LOGIN=yes
    networks:
      - kafka-net

  kafka:
    container_name: kafka
    hostname: kafka
    image: docker.io/bitnami/kafka
    ports:
      - "9092:9092"
      - "9093:9093"
    environment:
      - KAFKA_CFG_ZOOKEEPER_CONNECT=zookeeper:2181
      - KAFKA_CFG_BROKER_ID=0
      - ALLOW_PLAINTEXT_LISTENER=yes
      - KAFKA_CFG_LISTENER_SECURITY_PROTOCOL_MAP=INTERNAL:PLAINTEXT,EXTERNAL:PLAINTEXT
      - KAFKA_CFG_LISTENERS=INTERNAL://kafka:9092,EXTERNAL://localhost:9093
      - KAFKA_CFG_ADVERTISED_LISTENERS=INTERNAL://kafka:9092,EXTERNAL://localhost:9093
      - KAFKA_CFG_INTER_BROKER_LISTENER_NAME=INTERNAL
    depends_on:
      - zookeeper
    networks:
      - kafka-net

  jupyter:
    image: jupyter:latest
    depends_on:
      - kafka
    volumes:
      - ./myjupyter:/notebook
    ports:
      - "8888:8888"
    environment:
      - JUPYTER_ENABLE_LAB=yes
    networks:
      - kafka-net

  pyserver:
    image: pyserver:latest
    depends_on:
      - kafka
    volumes:
      - ./myserver/app.py:/app/app.py
    ports:
      - "5001:5001"
    networks:
      - kafka-net

networks:
  kafka-net:
    driver: bridge
```

2. E então iniciamos este cluster Docker executando o seguinte comando. 

```
docker-compose up -d
```

:::tip
É possível que a porta esteja ocupada, você pode alterar a porta de 5001 para 5002 etc., ou fechar o aplicativo que está ocupando a porta.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/10.png" style={{width:1000, height:'auto'}}/></div>

3. Nas próximas operações vamos testar se tudo está funcionando bem. Primeiro abrimos o software **docker desktop** e clicamos em **pyserver**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/11.png" style={{width:1000, height:'auto'}}/></div>

4. Agora o servidor está rodando em `http://127.0.0.1:5001`. Clique neste link para abri‑lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/12.png" style={{width:800, height:'auto'}}/></div>

5. Em seguida, insira dois parâmetros neste formato para testar se o cluster docker está funcionando bem.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/13.png" style={{width:700, height:'auto'}}/></div>

6. Vamos entrar no Kafka para ver se os dados foram enviados para o Kafka.
```
docker exec -it kafka bash

cd opt/bitnami/kafka/bin/

kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic my_topic --from-beginning
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/14.png" style={{width:1000, height:'auto'}}/></div>

7. Podemos tentar novamente com parâmetros diferentes e você poderá ver que os dados são enviados ao Kafka imediatamente. Agora, parabéns! Seu cluster docker está funcionando perfeitamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/15.png" style={{width:1000, height:'auto'}}/></div>

### Passo 7. Testar o Kafka com Python

:::tip
Esta etapa é principalmente sobre como usar Python para manipular o Kafka. Você também pode pular esta etapa. Não há impacto nas operações gerais do projeto.
:::

1. Abra o docker desktop e clique em jupyter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/16.png" style={{width:1000, height:'auto'}}/></div>

2. Clique neste link para acessar o jupyter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/17.png" style={{width:1000, height:'auto'}}/></div>

3. Quando você acessar o jupyter com sucesso, verá esta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/18.png" style={{width:1000, height:'auto'}}/></div>

4. Clique com o botão direito do mouse e crie um **New Notebook**, usando Python3(ipykernel).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/19.png" style={{width:800, height:'auto'}}/></div>

5. Instale a biblioteca kafka-python executando ```pip install kafka-python```.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/21.png" style={{width:1000, height:'auto'}}/></div>

6. Depois de instalar essa biblioteca, precisamos reiniciar o jupyter.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/22.png" style={{width:1000, height:'auto'}}/></div>

7. Agora execute o código a seguir para enviar alguns dados para o Kafka usando Python.

```python
from kafka import KafkaProducer, KafkaConsumer

#initialize producer
producer = KafkaProducer(bootstrap_servers='localhost:9093')
#send message
producer.send('my_topic', b'Hello, Kafka2')
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/23.png" style={{width:1000, height:'auto'}}/></div>

8. Você também pode verificar esses dados no kafka.

```python
from kafka import KafkaConsumer

# initialize consumer
consumer = KafkaConsumer(
    'my_topic',
    bootstrap_servers='localhost:9093',
    auto_offset_reset='earliest',
    enable_auto_commit=True,
    group_id='group1'
)

# receive data and print
for message in consumer:
    print(f"Received message: {message.value.decode('utf-8')}")
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/25.png" style={{width:1000, height:'auto'}}/></div>

## XIAO ESP32C6 e Apache Kafka

[Kafka](https://kafka.apache.org/) é uma plataforma de streaming distribuída que possibilita o processamento em tempo real de fluxos de dados em grande escala. Ela permite o envio e recebimento de mensagens de dados entre sistemas no modelo publish-subscribe, oferecendo tolerância a falhas, persistência e alta taxa de transferência. O Kafka é amplamente utilizado para construir pipelines de dados em tempo real e aplicações de streaming em vários domínios.

Agora, vamos usar o XIAO ESP32C6 e o sensor de temperatura e umidade DHT20 para coletar dados e enviá‑los ao Kafka em tempo real.

### Passo 8. Coletar Dados e Enviar para o Apache Kafka

1. Copie o código a seguir para a sua IDE do Arduino.
```cpp
#include <WiFi.h>
#include <HTTPClient.h>

//Change to your wifi name and password here.
const char* ssid = "Maker_2.4G";
const char* password = "15935700";

//Change to your computer IP address and server port here.
const char* serverUrl = "http://192.168.1.175:5001";

void setup() {
  Serial.begin(115200);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    //Create access link
    String url = serverUrl;
    url += "/";
    url += "30.532";  // tempertature
    url += "/";
    url += "60.342";  // humidity

    http.begin(url);

    int httpResponseCode = http.GET();

    //Get http response and print
    if (httpResponseCode == 200) {
      String response = http.getString();
      Serial.println("Server response:");
      Serial.println(response);
    } else {
      Serial.print("HTTP error code: ");
      Serial.println(httpResponseCode);
    }

    http.end();
  } else {
    Serial.println("WiFi disconnected");
  }

  delay(5000);  // access server in every 5s.
}
```

Se você não sabe qual é o endereço IP do seu computador, você pode executar ```ipconfig``` (Windows) ou ```ifconfig | grep net``` (Mac ou Linux) para verificá‑lo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/26.png" style={{width:600, height:'auto'}}/></div>

2. Use o cabo Type‑C para conectar o seu computador ao C6 e use o cabo Grove para conectar a **porta I2C** da placa de extensão XIAO ao sensor DHT20.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/hardware.jpeg" style={{width:600, height:'auto'}}/></div>

3. Escolha sua placa de desenvolvimento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/27.png" style={{width:1000, height:'auto'}}/></div>

4. Faça o upload do código e abra o monitor serial. 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/28.png" style={{width:1000, height:'auto'}}/></div>

5. Abra o Windows PowerShell em que o kafka está em execução. Agora você verá que os dados de ambiente estão sendo enviados para o Kafka. Parabéns! Você executou este projeto com sucesso!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_esp32c6_kafka/29.png" style={{width:1000, height:'auto'}}/></div>

## Recursos

- **[Link]** [Introdução ao Apache Kafka](https://kafka.apache.org/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>