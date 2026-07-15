---
description: Use XIAO ESP32C6 and sensors with AWS IoT Core to implement AI devices that can do anomaly detection.
title: Potencializando a IA com AWS IoT Core para o XIAO ESP32C6
keywords:
  - xiao esp32c6
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32c6_aws_iot
sku: 113991254,102010636,101991470
last_update:
  date: 03/29/2024
  author: Citric
createdAt: '2024-03-13'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_aws_iot/
---

# Potencializando a IA com AWS IoT Core para o XIAO ESP32C6

Este Wiki serve como um guia abrangente para implantar um sistema IoT avançado que aproveita o poder dos serviços da AWS e do microcontrolador XIAO ESP32C6 para monitorar e analisar dados ambientais. Começando com a coleta contínua de dados de sensores, esta documentação navega pelas complexidades de transmitir e armazenar essas informações no AWS IoT Core e no AWS Analytics, respectivamente. Ela aprofunda-se na utilização do AWS Sagemaker para treinar modelos de aprendizado de máquina com padrões ambientais normais, enfatizando a capacidade do sistema de aprender e se adaptar ao seu contexto operacional para maior eficiência.

Além disso, o Wiki descreve a implementação de detecção de anomalias em tempo real usando o XIAO ESP32C6, um componente crítico que analisa ativamente desvios em relação ao padrão e aciona alertas rapidamente. Ele encapsula o processo de ponta a ponta de configurar um mecanismo de alerta que notifica as partes interessadas sobre condições anormais, garantindo atenção e ação imediatas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/0.jpg" style={{width:1000, height:'auto'}}/></div>

- [**Capturar dados de sensores para o AWS IoT Core**](#capturar-dados-de-sensores-para-o-aws-iot-core).
- [**Armazenar os dados usando o AWS Analytics**](#armazenar-os-dados-usando-o-aws-analytics).
- [**Usar o AWS Sagemaker para treinar dados em ambientes normais**](#usar-o-aws-sagemaker-para-treinar-dados-em-ambientes-normais).
- [**XIAO ESP32C6 para detecção de ambiente anormal**](#xiao-esp32c6-para-deteccão-de-ambiente-anormal).
- [**Notificação de mensagem de status anormal**](#notificação-de-mensagem-de-status-anormal).

Ao explorar este Wiki, os usuários obterão uma compreensão detalhada do papel de cada componente na criação de um sistema de monitoramento ambiental inteligente, responsivo e robusto, completo com percepções práticas sobre configuração e manutenção.

## Materiais Necessários

Este exemplo apresentará o uso do XIAO ESP32C6 com o sensor de temperatura e umidade Grove DHT20 para concluir a tarefa SageMaker do AWS IoT Core. Abaixo estão todos os dispositivos de hardware necessários para concluir esta rotina.

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

## Capturar dados de sensores para o AWS IoT Core

Aproveitamos uma multiplicidade de sensores conectados à placa XIAO ESP32C6 para coletar dados ambientais em tempo real e enviá-los para o AWS IoT Core. Isso nos fornece um método confiável e seguro para lidar com os vastos fluxos de dados provenientes dos diversos sensores.

Para se registrar no AWS IoT Core e criar uma Thing chamada "XIAO_ESP32C6", siga as etapas abaixo. Observe que este processo pressupõe que você já tenha uma conta na Amazon Web Services. Se não tiver, será necessário [criar uma](https://aws.amazon.com/) antes de prosseguir.

### Etapa 1. Criar uma Thing

Abra o seu navegador e acesse o [AWS Management Console](https://aws.amazon.com/console/). Faça login usando as credenciais da sua conta AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/1.png" style={{width:1000, height:'auto'}}/></div>

Quando estiver no AWS Management Console, localize o menu suspenso **Services** na parte superior da página. No menu **Services**, clique em **IoT Core**. Se não conseguir encontrá-lo, use a barra de pesquisa na parte superior para procurar por **IoT Core**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/2.png" style={{width:1000, height:'auto'}}/></div>

No painel do AWS IoT Core, clique em **All devices** no painel de navegação à esquerda para expandir as opções. Clique em **Things**. Clique no botão **Create things** no canto da página "Things".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/3.png" style={{width:1000, height:'auto'}}/></div>

Escolha **Create a single thing** para prosseguir com o registro de uma Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/5.png" style={{width:800, height:'auto'}}/></div>

Na página **Create a thing**, insira **XIAO_ESP32C6** como o nome da sua Thing. (Opcional) Você também pode adicionar tipos, grupos ou atributos à sua Thing, se necessário. Para uma configuração simples, você pode ignorar essas opções. Clique em "Next".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/6.png" style={{width:900, height:'auto'}}/></div>

Agora você estará na página **Configure device certificate**. O AWS IoT Core requer que os dispositivos usem certificados para comunicação segura. Selecione **Auto-generate a new certificate (recommended)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/7.png" style={{width:1000, height:'auto'}}/></div>

Na página **Attach policies to certificate**, se você não tiver uma política, será necessário criar uma clicando em **Create policy**. Você será levado a uma nova página onde poderá criar uma política que define as permissões para sua Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/8.png" style={{width:1000, height:'auto'}}/></div>

Depois de criar e nomear sua política, anexe-a ao certificado recém-criado marcando a caixa ao lado do nome da política e clicando em **Create**.

Precisamos das seguintes permissões:

- **iot:Publish**
- **iot:Connect**
- **iot:Receive**
- **iot:Subscribe**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/9.png" style={{width:1000, height:'auto'}}/></div>

Depois que sua Thing for registrada, você será redirecionado para a página de detalhes da Thing, onde poderá visualizar as informações da sua Thing.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/10.png" style={{width:1000, height:'auto'}}/></div>

Configure seu dispositivo (neste caso, XIAO_ESP32C6) para usar o certificado e a chave privada que você baixou ao criar a Thing. Você precisará seguir as instruções para o seu dispositivo específico para configurar o AWS IoT SDK e estabelecer uma conexão segura com o AWS IoT Core.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/11.png" style={{width:600, height:'auto'}}/></div>

Depois que sua Thing estiver configurada e conectada ao AWS IoT Core, você poderá interagir com ela assinando tópicos, publicando mensagens e usando o mecanismo de regras do AWS IoT Core para processar dados de IoT.

Lembre-se de manter seus certificados e chaves em sigilo e siga as melhores práticas de segurança. A documentação do AWS IoT Core fornece guias e tutoriais detalhados para configurar e gerenciar dispositivos IoT.

### Etapa 2. Preparação de cabeçalhos com base em certificados

Crie um novo arquivo de cabeçalho chamado **secrets.h** e cole o seguinte modelo de código no arquivo de cabeçalho.

```cpp
#include <pgmspace.h>

#define SECRET
#define THINGNAME "DHTsensor"

const char WIFI_SSID[] = "YOUR_SSID";              //change this
const char WIFI_PASSWORD[] = "YOUR_PASSWORD";           //change this
const char AWS_IOT_ENDPOINT[] = "YOUR_AWS_IOT_ENDPOINT";       //change this

// Amazon Root CA 1
static const char AWS_CERT_CA[] PROGMEM = R"EOF(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----
)EOF";

// Device Certificate                                               //change this
static const char AWS_CERT_CRT[] PROGMEM = R"KEY(
-----BEGIN CERTIFICATE-----

-----END CERTIFICATE-----


)KEY";

// Device Private Key                                               //change this
static const char AWS_CERT_PRIVATE[] PROGMEM = R"KEY(
-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----


)KEY";
```

Este modelo de código C++ é projetado para um dispositivo IoT que se conecta a uma rede Wi-Fi e se comunica com o serviço AWS IoT. O modelo inclui espaços reservados para várias strings que você precisa substituir por suas credenciais e certificados reais. Veja como você deve preencher cada parte:

1. **Credenciais de Wi-Fi**:
   - `WIFI_SSID`: Substitua `"YOUR_SSID"` pelo SSID (nome) da sua rede Wi-Fi.
   - `WIFI_PASSWORD`: Substitua `"YOUR_PASSWORD"` pela senha da sua rede Wi-Fi.

2. **Endpoint do AWS IoT**:
   - `AWS_IOT_ENDPOINT`: Substitua `"YOUR_AWS_IOT_ENDPOINT"` pelo seu endpoint exclusivo do AWS IoT. Este endpoint é específico para a sua conta e região do AWS IoT. Você pode encontrá-lo nas configurações do console do AWS IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/12.png" style={{width:1000, height:'auto'}}/></div>

3. **Amazon Root CA 1 (Certificate Authority)**:
   - `AWS_CERT_CA`: Entre os marcadores `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----`, cole todo o certificado Amazon Root CA 1 fornecido pela AWS. Este certificado permite que seu dispositivo confie na identidade do servidor.

4. **Certificado do Dispositivo**:
   - `AWS_CERT_CRT`: Substitua o espaço reservado entre `-----BEGIN CERTIFICATE-----` e `-----END CERTIFICATE-----` pelo certificado do seu dispositivo em formato PEM. Este certificado é exclusivo do seu dispositivo e é usado para autenticar o seu dispositivo com o AWS IoT.

5. **Chave Privada do Dispositivo**:
   - `AWS_CERT_PRIVATE`: Entre os marcadores `-----BEGIN RSA PRIVATE KEY-----` e `-----END RSA PRIVATE KEY-----`, cole a chave privada do seu dispositivo em formato PEM. Esta chave deve ser mantida em segredo e nunca deve ser compartilhada, pois é usada para provar a identidade do seu dispositivo ao se comunicar com o AWS IoT.

:::caution
**Amazon Root CA 1** corresponde às informações do arquivo baixado **RSA 2048 bit key:Amazon Root CA 1**.
**Certificado do Dispositivo** corresponde às informações do arquivo baixado **Device certificate**.
**Chave Privada do Dispositivo** corresponde às informações do arquivo baixado **Private key file**.

Como este código contém informações sensíveis, como credenciais de Wi-Fi e chaves privadas, é fundamental mantê-lo seguro. Não compartilhe o código modificado publicamente nem o envie para repositórios públicos.
:::

### Etapa 3. Carregar programa de aquisição de dados para o XIAO ESP32C6

Conecte o sensor Grove DHT20 à interface IIC do XIAO ESP32C6. Se você quiser comodidade, recomendamos que compre o [Grove Base for XIAO](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html).

Em seguida, crie um novo projeto no Arduino e salve-o localmente. Pegue o arquivo **secrets.h** que criamos na **Etapa 2** e copie-o para o mesmo diretório do arquivo .ino. Depois, envie o código abaixo para o XIAO ESP32C6 e os dados serão enviados para o tópico especificado via MQTT com base nas credenciais da AWS que você forneceu.

<details>
<summary>Clique aqui para visualizar o código completo</summary>

```cpp
#include "secrets.h"
#include <WiFiClientSecure.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include "WiFi.h"
#include "Wire.h"

//DHT setup
#include "DHT.h"
#define DHTTYPE DHT20   // DHT 20
/*Notice: The DHT10 and DHT20 is different from other DHT* sensor ,it uses i2c interface rather than one wire*/
/*So it doesn't require a pin.*/
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin

//MQTT setup
#define AWS_IOT_PUBLISH_TOPIC   "xiao_esp32c6/pub"
#define AWS_IOT_SUBSCRIBE_TOPIC "xiao_esp32c6/sub"

//store temp and humi data
float h;
float t;

//network setup
WiFiClientSecure net = WiFiClientSecure();
PubSubClient client(net);

#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void connectAWS()
{
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);

  Serial.println("Connecting to Wi-Fi");

  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
  }

  // Configure WiFiClientSecure to use the AWS IoT device credentials
  net.setCACert(AWS_CERT_CA);
  net.setCertificate(AWS_CERT_CRT);
  net.setPrivateKey(AWS_CERT_PRIVATE);

  // Connect to the MQTT broker on the AWS endpoint we defined earlier
  client.setServer(AWS_IOT_ENDPOINT, 8883);

  // Create a message handler
  client.setCallback(messageHandler);

  Serial.println("Connecting to AWS IOT");

  while (!client.connect(THINGNAME))
  {
    Serial.print(".");
    delay(100);
  }

  if (!client.connected())
  {
    Serial.println("AWS IoT Timeout!");
    return;
  }

  // Subscribe to a topic
  client.subscribe(AWS_IOT_SUBSCRIBE_TOPIC);

  Serial.println("AWS IoT Connected!");
}

void publishMessage()
{
  StaticJsonDocument<200> doc;
  doc["humidity"] = h;
  doc["temperature"] = t;
  char jsonBuffer[512];
  serializeJson(doc, jsonBuffer); // print to client

  client.publish(AWS_IOT_PUBLISH_TOPIC, jsonBuffer);
}

void messageHandler(char* topic, byte* payload, unsigned int length)
{
  Serial.print("incoming: ");
  Serial.println(topic);

  StaticJsonDocument<200> doc;
  deserializeJson(doc, payload);
  const char* message = doc["message"];
  Serial.println(message);
}

void setup() {

    debug.begin(115200);
    debug.println("DHTxx test!");
    Wire.begin();

    connectAWS();
    dht.begin();
}

void loop() {
    h = dht.readHumidity();
    t = dht.readTemperature();

    if (isnan(h) || isnan(t) )  // Check if any reads failed and exit early (to try again).
    {
      Serial.println(F("Failed to read from DHT sensor!"));
      return;
    }

    Serial.print(F("Humidity: "));
    Serial.print(h);
    Serial.print(F("%  Temperature: "));
    Serial.print(t);
    Serial.println(F("°C "));

    publishMessage();
    client.loop();
    delay(1000);
}
```

</details>

### Etapa 4. Cliente de teste MQTT

No AWS IoT Core, precisamos assinar o tópico publicado pelo XIAO ESP32C6 no cliente de teste MQTT para determinar se os dados do sensor foram carregados com sucesso para a conta de destino da AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/13.png" style={{width:1000, height:'auto'}}/></div>

Se o programa estiver funcionando corretamente, você deverá ver um conjunto de mensagens de dados de temperatura e umidade a cada 1s.

```json
{
    "humidity": 58,
    "temperature": 23.6
}
```

## Armazene os dados usando o AWS Analytics

Os dados coletados são então encaminhados para o serviço AWS Analytics, que não apenas armazena os dados brutos, mas também nos fornece poderosas ferramentas de processamento e análise de dados. Essas ferramentas nos ajudam a extrair insights valiosos dos dados coletados.

### Etapa 5. Configurar o AWS IoT Analytics

Navegue até o AWS IoT Analytics no Console da AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/14.png" style={{width:1000, height:'auto'}}/></div>

Em **Get started with AWS IoT Analytics**, preencha o nome do recurso recém-criado e insira o seu tópico de assinatura (por exemplo, `xiao_esp32c6/pub`).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/15.png" style={{width:1000, height:'auto'}}/></div>

Aguarde um momento (cerca de dez minutos) para que todos os recursos sejam criados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/16.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 6. Criar uma regra

De volta ao AWS IoT Core, clique em **Rules** em **Message routing** na barra de menu à esquerda. Clique em **Create rule**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/17.png" style={{width:1000, height:'auto'}}/></div>

Forneça um nome para a sua Regra e uma descrição opcional para ajudar a identificar o seu propósito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/18.png" style={{width:1000, height:'auto'}}/></div>

Defina a Instrução de Consulta da Regra usando a sintaxe AWS IoT SQL. Esta instrução especifica os critérios para filtrar e processar as mensagens MQTT recebidas. Você pode usar curingas, funções e operadores para corresponder a tópicos específicos, extrair dados do payload da mensagem e aplicar transformações.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/19.png" style={{width:1000, height:'auto'}}/></div>

Selecione o canal do IoT Analytics que você criou como destino para a Ação da Regra. Clique no botão **Create Role**. No console, forneça um nome para a função, como **XIAO_ESP32C6_Role**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/20.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/21.png" style={{width:1000, height:'auto'}}/></div>

Revise a configuração da sua Regra e clique no botão "Create Rule" para salvar e ativar a Regra.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/22.png" style={{width:1000, height:'auto'}}/></div>

Depois que a Regra é criada, ela começa a processar as mensagens MQTT recebidas que correspondem à Instrução de Consulta da Regra definida. As Ações da Regra são executadas sempre que a Regra é acionada, permitindo que você encaminhe e processe os dados de acordo com seus requisitos específicos.

Você pode criar várias Regras no AWS IoT para lidar com diferentes cenários e necessidades de processamento de dados. As Regras fornecem uma forma flexível e escalável de integrar seus dispositivos IoT com vários serviços da AWS e construir aplicações IoT poderosas.

### Etapa 7. Armazena fluxos de dados de sensores

Navegue até o serviço AWS IoT Analytics. No painel do AWS IoT Analytics, clique na opção **Datasets** na barra lateral esquerda. Localize o dataset que contém os dados que você deseja baixar e clique em seu nome para abrir a página de detalhes do dataset.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/25.png" style={{width:1000, height:'auto'}}/></div>

Antes de baixar o conteúdo do dataset, você precisa acionar manualmente a geração do dataset. Selecione **Run now**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/26.png" style={{width:1000, height:'auto'}}/></div>

O AWS IoT Analytics processará os dados e preparará o conteúdo do dataset com base no intervalo de tempo especificado. Com base no reporte de dados do sensor uma vez por segundo, recomendamos um tempo de coleta de dados de pelo menos maior ou igual a uma hora em um ambiente normal. Isso garante a precisão dos dados.

Aguarde a conclusão da geração do dataset. Você pode monitorar o progresso na página de detalhes do dataset. Quando o status mudar para "SUCCEEDED", o conteúdo do dataset estará pronto para download.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/28.png" style={{width:1000, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/23.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se o programa do XIAO estiver funcionando bem, mas você não vir nenhuma informação de dados em Dataset, você pode clicar com o botão direito do mouse na aba de Dataset e abri-la em uma nova página do navegador; isso pode resolver o seu problema.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/27.png" style={{width:500, height:'auto'}}/></div>

Na página de detalhes do dataset, você verá informações sobre o dataset, incluindo seu nome, status e horário da última atualização.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/24.png" style={{width:1000, height:'auto'}}/></div>
:::

## Use o AWS Sagemaker para treinar dados em ambientes normais

Com o AWS Sagemaker, treinamos modelos de machine learning para reconhecer padrões indicativos de um ambiente normal. O Sagemaker oferece uma plataforma abrangente que facilita o desenvolvimento, treinamento e implantação de modelos de machine learning, permitindo o processamento inteligente de dados ambientais.

### Etapa 8. Crie uma nova instância de notebook

Navegue até o serviço Amazon SageMaker no AWS Management Console.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/29.png" style={{width:1000, height:'auto'}}/></div>

Clique em **Notebook instances** no painel do SageMaker. Clique no botão **Create notebook instance**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/30.png" style={{width:1000, height:'auto'}}/></div>

Preencha as informações necessárias, como tipo de instância e função IAM. Certifique-se de que a função IAM tenha **permissões necessárias para acessar o bucket S3** onde seus dados estão armazenados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/34.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/31.png" style={{width:1000, height:'auto'}}/></div>

Quando o status da instância for **InService**, abra a interface do Jupyter Notebook clicando no link **Open Jupyter**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/32.png" style={{width:1000, height:'auto'}}/></div>

Depois de aberto, selecionamos **conda_python3** como nosso ambiente de código.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/45.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, precisamos fazer upload do nosso dataset coletado. Este dataset nós baixamos localmente para o nosso computador na **Etapa 7**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/46.png" style={{width:1000, height:'auto'}}/></div>

Depois, podemos inserir nosso programa preparado dentro do Jupyter Notebook. Ou você pode optar por fazer upload diretamente do programa que fornecemos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Jupyter_Notebook.ipynb" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Execute a primeira seção do programa para verificar se os dados de coleta que você importou estão OK. Talvez seja necessário alterar o nome do arquivo no código para o nome do seu arquivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/47.png" style={{width:600, height:'auto'}}/></div>

### Etapa 9: Execute todo o Jupyter Notebook

S3 é usado para armazenar datasets de treinamento, datasets de teste, artefatos de modelo, etc. No SageMaker, as fontes de dados normalmente vêm de buckets S3.
Armazenamento de modelo: modelos treinados também são salvos no S3 para posterior implantação e inferência.

Em seguida, copie o segundo bloco de código e dê o nome ao campo **bucket_name**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/48.png" style={{width:600, height:'auto'}}/></div>

Depois disso, basta executar os blocos no Jupyter Notebook um por um.

:::note
Há alguns caminhos ou nomes no Jupyter Notebook que precisam ser modificados conforme a seguir antes que possam ser executados.

1. O valor de **ENDPOINT_NAME** no bloco de código **In[22]** é o resultado após executar o bloco de código **In[19]**.
2. Defina o **bucket_name** dos blocos de código **In[3]** e **In[10]** para o mesmo nome.
3. Para **API_ENDPOINT** do último bloco de código, use seus próprios valores.

:::

### Etapa 10. Configurar o AWS Lambda

O Lambda pode ser usado como um gatilho para fluxos de trabalho do SageMaker. Por exemplo, quando os dados são enviados para o S3, isso pode acionar uma função Lambda para iniciar um job de treinamento ou processamento do SageMaker.

Faça login no AWS Management Console e navegue até o serviço AWS Lambda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/37.png" style={{width:1000, height:'auto'}}/></div>

Clique no botão **Create function**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/38.png" style={{width:1000, height:'auto'}}/></div>

Escolha a opção **Author from scratch**. Forneça um nome para sua função Lambda, por exemplo, **XIAO-ESP32C6-FUNCTION**.
Selecione o runtime desejado **Python3.9**. Escolha uma função de execução para sua função Lambda. Você pode criar uma nova função ou usar uma existente. Se estiver criando uma nova função, selecione **Create a new role with basic Lambda permissions**. Clique no botão **Create function** para criar sua função Lambda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/39.png" style={{width:1000, height:'auto'}}/></div>

Navegue até o console IAM (Identity and Access Management).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, encontre o nome da função Lambda que acabamos de criar e clique nela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

Na página da função IAM, clique no botão **Attach policies**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

Forneça um nome para a política, por exemplo, **AmazonSageMakerFullAccess**. Clique no botão **Add perminassions** para adicionar permissões.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/43.png" style={{width:1000, height:'auto'}}/></div>

Volte para a página de configuração da função Lambda. Crie um novo evento de teste ou use um existente. Invoque a função Lambda com o evento de teste para garantir que ela seja executada com sucesso. Monitore os logs de execução e as saídas da função Lambda para verificar seu comportamento.

```
{"data": [62.93016434, 24.31583405]}
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/44.png" style={{width:1000, height:'auto'}}/></div>

Copie [o seguinte trecho](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/Lambda.ipynb) em **Code**.

```python
#lambda function with sns
import boto3
import json

ENDPOINT_NAME = 'randomcutforest-2024-03-18-10-47-37-165'# your endpoint past here
runtime = boto3.client('runtime.sagemaker')
email_client = boto3.client('sns')

def lambda_handler(event, context):
    input = event['data']

    serialized_input = ','.join(map(str, input))

    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME, 
                                       ContentType='text/csv', 
                                       Body=serialized_input)

    result_str = response['Body'].read().decode()
    result_json = json.loads(result_str)
    inference = result_json['scores'][0]['score']

    try:
        if(inference>3):
            response_sns = email_client.publish(
                TopicArn='arn:aws:sns:us-east-1:381491976713:dhco2Topic2',# your sns topic past here
                Message='Enviroment data is abnormal',
                Subject='Enviroment Status'
            )
    except Exception as e:
        print(f"error: {e}")

    return inference
```

:::caution
Tome cuidado para modificar o conteúdo no código para ser o seu próprio.
:::

Em seguida, clique no botão **Deploy**.

### Considerações Adicionais

- Certifique-se de que você tem as funções e políticas IAM corretas configuradas para que o SageMaker acesse os dados no S3.
- Considere utilizar o Automatic Model Tuning do SageMaker para encontrar a melhor versão do seu modelo.
- Acompanhe os custos, pois o treinamento de modelos e a implantação de endpoints no SageMaker podem gerar cobranças significativas dependendo dos recursos de computação usados.

Consulte sempre a documentação mais recente da AWS para obter instruções detalhadas e melhores práticas, pois a interface e as funcionalidades dos serviços da AWS são atualizadas com frequência.

## Notificação de mensagem de status anormal

Ao detectar um estado anormal, o sistema envia imediatamente um alerta por meio de um mecanismo de notificação por mensagens para a equipe de manutenção, garantindo intervenção oportuna e as ações necessárias.

### Etapa 11. Configurando o Amazon SNS

Navegue até o serviço Amazon SNS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/49.png" style={{width:1000, height:'auto'}}/></div>

Clique no botão **Create topic**. Forneça um nome para o seu tópico, por exemplo, "XIAO_ESP32C6_Topic".

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/50.png" style={{width:1000, height:'auto'}}/></div>

No painel do tópico SNS, clique no tópico recém-criado. Clique no botão **Create subscription**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/51.png" style={{width:1000, height:'auto'}}/></div>

Escolha o protocolo para a assinatura, como "Email", "SMS", "HTTP/HTTPS", "AWS Lambda" ou "Amazon SQS".

Forneça os detalhes do endpoint com base no protocolo selecionado. Por exemplo:

- Para assinaturas de email, insira o endereço de email.
- Para assinaturas de SMS, insira o número de telefone.
- Para assinaturas HTTP/HTTPS, insira o endpoint de URL.
- Para assinaturas AWS Lambda, selecione a função Lambda.
- Para assinaturas Amazon SQS, selecione a fila SQS.

Clique no botão **Create subscription** para criar a assinatura. Repita as etapas 2–5 para adicionar mais assinaturas ao tópico, se necessário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/52.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, voltamos ao código do Lambda e substituímos o campo **TopicArn** no código pelo **campo ARN no SNS**.

### Etapa 12. Conceder permissões do SNS ao Lambda

Navegue até o console do IAM (Identity and Access Management).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/40.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, encontre o nome da função Lambda que acabamos de criar e clique nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/41.png" style={{width:1000, height:'auto'}}/></div>

Na página da função do IAM, clique no botão **Attach policies**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/42.png" style={{width:1000, height:'auto'}}/></div>

Forneça um nome para a política, por exemplo, **AmazonSNSFullAccess**. Clique no botão **Add perminassions** para adicionar perminassions.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/53.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 13. Configurando o API Gateway

Navegue até o serviço Amazon API Gateway no Console de Gerenciamento da AWS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/54.png" style={{width:1000, height:'auto'}}/></div>

Clique no botão **Create API**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/55.png" style={{width:1000, height:'auto'}}/></div>

Selecione **REST API** como o tipo de API e clique em **Build**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/56.png" style={{width:1000, height:'auto'}}/></div>

Forneça um nome para sua API, por exemplo, "XIAO_ESP32C6_API". Escolha o tipo de endpoint **Regional** para sua API. Clique no botão **Create API** para criar sua REST API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/57.png" style={{width:1000, height:'auto'}}/></div>

No painel do API Gateway, selecione sua API recém-criada. Selecione **Create Resource**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/58.png" style={{width:1000, height:'auto'}}/></div>

Forneça um nome para o seu recurso, por exemplo, "XIAO_ESP32C6_Resource". Clique no botão **Create Resource** para criar o recurso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/59.png" style={{width:1000, height:'auto'}}/></div>

Com o recurso recém-criado selecionado, selecione **Create Method**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/60.png" style={{width:1000, height:'auto'}}/></div>

Escolha **POST** como o método HTTP na lista suspensa. Selecione **Lambda Function** como o tipo de integração. Escolha a região onde sua função Lambda está localizada. Digite o nome da sua função Lambda, por exemplo, "XIAO_ESP32C6_Function".
Clique no botão **Create method** para salvar as configurações de integração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/61.png" style={{width:1000, height:'auto'}}/></div>

Clique em **Deploy API**. Escolha um estágio de implantação (por exemplo, "prod", "dev") ou crie um novo. Forneça uma descrição para a implantação, se desejar. Clique no botão "Deploy" para implantar sua API.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/63.png" style={{width:500, height:'auto'}}/></div>

No painel do API Gateway, selecione sua API e navegue até a seção "Stages". Expanda o estágio de implantação e clique no método POST para o seu recurso. Na seção **Invoke URL**, copie a URL fornecida.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/xiao-esp32c6-aws/64.png" style={{width:1000, height:'auto'}}/></div>

Por fim, copie e cole o [código do api_gateway](https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/TrainingModel/api_gateway.ipynb) no final do SageMaker Jupyter Notebook (crie um novo trecho) e substitua o campo **API_ENDPOINT** no código pelo **Invoke URL**.

## XIAO ESP32C6 para detecção de ambiente anormal

Depois que um modelo de dados do ambiente normal é estabelecido, o XIAO ESP32C6 monitora continuamente os dados do sensor para detectar possíveis anomalias. Como um microcontrolador poderoso, ele é capaz de responder rapidamente quando os dados indicam uma situação anormal.

### Etapa 14. Carregar o programa de relatório de dados em tempo real para o XIAO ESP32C6

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Projects/XIAO_ESP32C6_AWS_DHT20_Project/blob/main/GetResult/GetResult.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Download the Code</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Obtenha o programa abaixo e substitua o campo api no código pelo seu. Depois, compile e faça o upload para o XIAO ESP32C6. Então, parabéns, tendo concluído as etapas até este ponto, você finalizou com sucesso todas as etapas do projeto. Assim que houver uma anomalia no ambiente, você receberá um email de alerta enviado a você pelo serviço AWS SNS.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
