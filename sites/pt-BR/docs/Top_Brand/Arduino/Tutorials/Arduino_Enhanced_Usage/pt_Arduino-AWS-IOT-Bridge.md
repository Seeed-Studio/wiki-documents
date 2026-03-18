---
description: Fazer bridge do Mosiquitto MQTT Broker para o AWS IoT com placas Arduino
title: Fazer bridge do Mosiquitto MQTT Broker para o AWS IoT com placas Arduino
keywords:
  - Sorftware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino-AWS-IOT-Bridge
last_update:
  date: 1/16/2023
  author: jianjing Huang
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arduino-AWS-IOT-Bridge/
---

# Como fazer bridge do Mosiquitto MQTT Broker para o AWS IoT com placas Arduino

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWSIOT.gif"/></div>
<br />

Gateways estão presentes na maioria das discussões de arquitetura, tanto em ambientes de [industrial IoT](https://aws.amazon.com/iot/solutions/industrial-iot/) quanto em casas conectadas. Hoje, mostraremos como implementar o recurso de **Bridge** do agente [**Mosquitto**](https://mosquitto.org/) para possibilitar o uso de gateways por meio de mensagens MQTT, configurando a troca de dados bidirecional com o [**AWS IoT Core**](https://aws.amazon.com/iot-core/). Isso permitirá que seu dispositivo se comunique localmente com o agente Mosquitto e com o AWS IoT Core para se beneficiar do poder da nuvem AWS.

Neste tutorial, o [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) será usado como exemplo para mostrar passo a passo como fazer bridge do Mosquitto MQTT Broker para o AWS IoT.

## Por que fazer bridge do MQTT Broker para o AWS IoT

Se você tem implantações antigas de IoT, pode já ter dispositivos conectados a um broker MQTT, como o [**Mosquitto**](https://mosquitto.org/). Nesse caso, seu agente MQTT pode estar muito próximo da localização do sensor implantado (broker MQTT local) ou em um local remoto como a nuvem. Você pode configurar o gateway local para se comunicar com o AWS IoT Core conforme o diagrama a seguir.

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/AWS-bridge.png"/></div>

## Primeiros Passos

### Construindo o broker AWS Mosquitto usando Docker

#### Passo 1: Configurar a conta AWS

Acesse o [AWS](https://docs.aws.amazon.com/iot/latest/developerguide/iot-console-signin.html) e configure a conta.

Navegue até `User` -> `My Security Credentials` e obtenha o **Access Key ID** e a **Access Key**.

#### Passo 2: Clonar o repositório

Clone este [repositório](https://github.com/ansonhe97/aws_mosquitto_broker) para um local no seu disco.

#### Passo 3: Instalar e configurar o AWS CLI

Instale o AWS CLI a partir [daqui](http://docs.aws.amazon.com/cli/latest/userguide/installing.html).

Execute `aws configure` no terminal e digite sua região, seu Access ID e Keys, como a seguir:

```sh
aws configure
AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
Default region name [None]: eu-central-1
Default output format [None]: json
```

#### Passo 3: Criar uma política IAM para a bridge

Execute o seguinte comando para criar a política para a bridge:

```sh
aws iot create-policy --policy-name bridge --policy-document '{"Version": "2012-10-17","Statement": [{"Effect": "Allow","Action": "iot:*","Resource": "*"}]}'
```

#### Passo 4: Criar certificados

Entre no diretório `aws_mosquitto_broker/config/certs` e execute o seguinte para criar certificados:

```sh
cd aws_mosquitto_broker/config/certs

sudo aws iot create-keys-and-certificate --set-as-active --certificate-pem-outfile cert.crt --private-key-outfile private.key --public-key-outfile public.key --region eu-central-1
```

Em seguida, você pode executar `aws iot list-certificates` para verificar os certificados criados. Copie o ARN no formato `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`:

```sh
aws iot list-certificates
```

Anexe a política ao seu certificado. Substitua `{REPLACE_ARN_CERT}` pelo ARN copiado `arn:aws:iot:eu-central-1:0123456789:cert/xyzxyz`:

```sh
aws iot attach-principal-policy --policy-name bridge --principal {REPLACE_ARN_CERT}
```

Adicione permissões de leitura à **private key**, **public key** e **client cert** (dentro da pasta `certs`):

```sh
sudo chmod 644 private.key && sudo chmod 644 public.key && sudo chmod 644 cert.crt
```

Baixe o certificado raiz Amazon CA também no diretório `certs`:

```sh
sudo curl https://www.websecurity.digicert.com/content/dam/websitesecurity/digitalassets/desktop/pdfs/roots/VeriSign-Class%203-Public-Primary-Certification-Authority-G5.pem -o rootCA.pem
```

#### Passo 5: Editar o arquivo de configuração customizada do mosquitto

Renomeie `awsbridge.conf.sample` para `awsbridge.conf`:

```sh
mv awsbridge.conf.sample awsbridge.conf
```

Edite `config/conf.d/awsbridge.conf` e siga as instruções do awsbridge.conf:

```sh
nano config/conf.d/awsbridge.conf
```

**Nota:** Execute `aws iot describe-endpoint` para obter o endpoint do AWS IoT.

#### Passo 6:  Construir o Dockerfile

Volte para o local raiz `aws_mosquitto_broker` e execute o seguinte:

```sh
docker build -t aws_mqtt_broker .
```

**Nota:** Certifique-se de ter instalado o Docker no seu PC antes.

#### Passo 7: Executar a imagem Docker

```sh
docker run -ti -p 1883:1883 -p 9001:9001 --name mqtt aws_mqtt_broker
```

Saída do console / log:

```sh
1592301141: mosquitto version 1.4.15 (build date 2018-03-04 15:19:39+0000) starting
1592301141: Config loaded from /mosquitto/config/mosquitto.conf.
1592301141: Opening ipv4 listen socket on port 1883.
1592301141: Opening ipv6 listen socket on port 1883.
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic localgateway_to_awsiot
1592301141: Bridge local.bridgeawsiot doing local SUBSCRIBE on topic both_directions
1592301141: Connecting bridge awsiot (aq53tian3vbby.iot.eu-central-1.amazonaws.com:8883)
1592301141: Bridge bridgeawsiot sending CONNECT
1592301144: Received CONNACK on connection local.bridgeawsiot.
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 1, Topic: awsiot_to_localgateway, QoS: 1)
1592301144: Bridge local.bridgeawsiot sending UNSUBSCRIBE (Mid: 2, Topic: localgateway_to_awsiot)
1592301144: Bridge local.bridgeawsiot sending SUBSCRIBE (Mid: 3, Topic: both_directions, QoS: 1)
1592301144: Received SUBACK from local.bridgeawsiot
1592301144: Received UNSUBACK from local.bridgeawsiot
1592301145: Received SUBACK from local.bridgeawsiot
```

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/dockerbroker.png"/></div>

#### Passo 8: Testando o broker local

**Publicar a partir do console AWS IoT**

1.- No AWS Management Console, vá para `AWS IoT Services` -> `Test`

2.- Inscreva-se nos tópicos mencionados em nosso arquivo de configuração: `awsiot_to_localgateway`, `localgateway_to_awsiot` e `both_directions`.

3.- Publique no tópico `awsiot_to_localgateway` (hello world).

4.- Revise o log ou a saída do console em nosso broker local em busca de algo como isto:

`1493564128: Received PUBLISH from local.bridgeawsiot (d0, q0, r0, m0, 'awsiot_to_localgateway', ... (45 bytes))`

**Nota:** Certifique-se de que a região `eu-central-1` esteja selecionada.

**Publicar a partir do host**

Fluxo de trabalho: `Local Broker(Host PC)` -> `Docker Gateway` -> `AWS IoT`.

Execute o seguinte no terminal para publicar do host para o AWS IoT:

`mosquitto_pub -h localhost -p 1883 -q 1 -d -t localgateway_to_awsiot  -i clientid1 -m "{\"key\": \"helloFromLocalGateway\"}"`

:::note
Certifique-se de que você tenha o [mosquitto](https://mosquitto.org/download/) instalado no seu PC.
:::

### Publicando mensagens a partir do Wio Terminal

Agora podemos usar o Wio Terminal como um dos dispositivos finais para publicar ou assinar tópicos!

#### Instalando as bibliotecas dependentes

Este demo depende do núcleo Wi-Fi do Wio Terminal, siga primeiro este [**tutorial**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/).

**PASSO.1 Instalar a biblioteca Pubsubclient**

1. Visite o repositório [pubsubclient](https://github.com/knolleary/pubsubclient) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca FS pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `pubsubclient` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

**PASSO.2 Instalar a biblioteca ArduinoJson**

1. Visite o repositório [ArduinoJson](https://github.com/bblanchon/ArduinoJson) e baixe todo o repositório para o seu disco local.

2. Agora, a biblioteca ArduinoJson pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `ArduinoJson` que você acabou de baixar.

#### Fazer upload do sketch Arduino

Baixe o sketch Arduino a partir [**daqui**](https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_AWSIoT_Bridge/WioTerminal_AWSIoT_Bridge.ino).

- Configure as definições de Wi-Fi `ssid` e `password`.
- Altere o `mqttserver` para o endereço IP do seu MQTT Broker (endereço IP do seu PC).

Envie o código e abra o Serial Monitor para conferir! Agora, se você pressionar o botão no Wio Terminal, ele publicará uma mensagem no AWS IoT e você também poderá ver as mensagens recebidas no console do AWS IoT.

<div align="center"><img src="https://files.seeedstudio.com/wiki/AWSIOT/result.png"/></div>

:::note
Certifique-se de que o broker local em Docker esteja ativo e em execução o tempo todo.
:::

## Recursos

- [How to Bridge Mosquitto MQTT Broker to AWS IoT](https://aws.amazon.com/cn/blogs/iot/how-to-bridge-mosquitto-mqtt-broker-to-aws-iot/)

## Suporte Técnico e Discussão de Produtos

<br/>
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte e garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
