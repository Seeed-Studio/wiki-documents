---
description: Primeiros Passos com Machinechat JEDI
title: Primeiros Passos com Machinechat JEDI
keywords:
  - reTerminal DM
  - Primeiros passos
  - IIoT
  - Industrial
  - Jedi MachineChat
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reTerminalDM_Introduction_Jedi_MachineChat
last_update:
  date: 3/28/2024
  author: Kasun Thushara
createdAt: '2024-03-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reTerminalDM_Introduction_Jedi_MachineChat/
---

# reTerminal DM & Machinechat JEDI: Sua Potência para IoT Industrial

## Introdução

[Machinechat JEDI](https://www.machinechat.io/jedi) é um software de gerenciamento de dados de IoT (Internet das Coisas) poderoso e versátil. Ele foi projetado para simplificar o processo de coleta, visualização, monitoramento e resposta a dados em tempo real de uma ampla variedade de dispositivos, sensores e máquinas. O reTerminal DM da Seeed e o software Machinechat JEDI permitem que você crie dashboards personalizados em menos de 30 minutos. Acompanhe operações, analise tendências, melhore a eficiência e receba alertas em tempo hábil para evitar interrupções dispendiosas

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot1.PNG" /></center>

## Primeiros Passos

Antes de começar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

### Preparação de hardware

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal DM</th>
      <th class="table-trnobg">XIAO ESP32C3</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reTerminalDM/ML/edgeimpulse/reterminaldm.png" style={{width:300, height:'auto'}}/></div></td>
            <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:100, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-DM-p-5616.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
          <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

### Preparação de software

Recomendamos instalar a versão **Bullesye** do sistema operacional Raspberry Pi 64 bits a partir do site oficial.

## Instalar o Machinechat JEDI no reTerminal DM

### Baixar o JEDI

Visite o site da Machinechat e escolha a JEDI Free Edition ou a JEDI Lite Trial Edition.

Digite seu endereço de e-mail. Você receberá um e-mail com as informações da sua licença e links de download para todos os sistemas operacionais compatíveis. Clique no link de download apropriado para o seu sistema operacional. **Neste caso, Raspberry Pi 64 bits**

### Descompactar e Iniciar

O arquivo baixado é um arquivo ZIP. Extraia o conteúdo para um local de sua escolha no reTerminal DM.

Abra o Terminal e execute. Substitua este **/path/to/jedi/folder** pelo local da pasta.

```sh
cd /path/to/jedi/folder
```

Iniciar o JEDI

```sh
./mcjedi.bin
```

### Acessando a Interface Web do JEDI

Abra um navegador web no reTerminal DM e digite

```sh
http://localhost:9123
```

### Configuração e Ativação

Leia e aceite o EULA e preencha o formulário, fornecendo um nome de usuário, senha e respostas para perguntas de desafio (usadas para recuperação de senha).

Use as credenciais recém-criadas.

Insira a chave de licença fornecida no e-mail de download. O JEDI se conectará brevemente à internet para validar e ativar sua licença.

## Teste Rápido

### Criar um Data Pipeline

Abra seu IDE Python favorito no seu laptop (como PyCharm/VS Code).
copie e cole.

```sh
import requests
import json

url = 'http://<jedi_ip>:8100/v1/data/mc'  # Replace <jedi_ip> with your reTerminal DM IP address

payload = {
    "context": {
        "target_id": "my_PC",
        "target_ip": "192.168.1.10"  #PC IP
    },
    "data": {
        "temperature": 25.5,
        "humidity": 68
    }
}

headers = {'Content-Type': 'application/json'}
response = requests.post(url, data=json.dumps(payload), headers=headers)

if response.status_code == 200:
    print('Data sent successfully')
else:
    print('Error sending data:', response.text)

```

### Visualizar e Explorar

Hora do Dashboard! No Painel de Navegação clique em Data Dashboard. Este dashboard foi pré-criado para você. Agora vamos adicionar um gráfico do tipo Gauge a este dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/webinterface1.PNG" /></center>

- Clique em **ADD CHART** para adicionar um novo gráfico ao **Data Dashboard**.
- Clique em **Name** e insira um nome para o gráfico.
- Clique em **Chart Type** e selecione **Gauge**.
- Clique em **Source** e selecione o **target_id** que foi enviado com os dados. Se você usou o código de exemplo ou payload fornecido acima, verá **my_PC** na lista.
- Clique em **Property** e selecione uma propriedade (por exemplo, temperatura ou umidade).
- Clique em **ADD** para salvar a configuração e adicionar o gráfico ao dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/Gaugeconfig.PNG" /></center>

Você poderá ver um Gauge no dashboard.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/gauge.png" /></center>

## Coletor de Dados MQTT

O JEDI oferece uma gama robusta de coletores de dados pré-configurados, prontos para uso imediato. Esses coletores atendem a situações típicas de IoT e abrangem:

- **HTTP**: Permite o recebimento de dados de dispositivos, scripts e outros aplicativos via HTTP API.
- **MQTT Broker**: Facilita a aquisição de dados de sensores e dispositivos por meio de MQTT, um protocolo de mensagens de IoT amplamente utilizado.
- **TCP**: Permite a recuperação de dados de dispositivos que se comunicam por conexões TCP brutas.
- **Serial**: Estabelece conexões com dispositivos que transmitem dados por portas seriais (por exemplo, placas Arduino, receptores GPS, etc.).

Portanto, vamos discutir o protocolo MQTT mais popular.

### Prepare seu Xiao

Antes de enviar o código, configure **SSID** **Senha do WiFi** **IP do Servidor MQTT (IP do JEDI)** **Nome de Usuário MQTT** **Senha MQTT**. Neste exemplo, vamos enviar alguns dados fictícios para o Machine Chat JEDI.

```sh
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "ABC";
const char* password = "XXXXX";
const char* mqtt_server = "192.XXX.X.XXX";  // Replace with your MQTT broker's IP
const int mqtt_port = 1883;  // Default MQTT port
const char* mqtt_username = "ABC";
const char* mqtt_password = "ABC123";

WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);
  client.setCallback(callback);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");
  client.setServer(mqtt_server, mqtt_port);
}

void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  // Generate random values for each lab: VOC, human presence, temperature, and humidity
  for (int lab = 1; lab <= 3; lab++) {
    int voc = random(60, 80);
    int presence = random(0, 3); // Assuming presence is represented as a boolean (0 for no presence, 1 for presence)
    bool acState = false; // Default A/C state is off
    float temperature = random(18, 30); // Assuming temperature is in Celsius
    int humidity = random(30, 70); // Assuming humidity is a percentage
    bool fire = false;

    // Check if temperature is greater than 25 and human presence is true
    if (temperature > 25 && presence) {
      acState = true; // Turn on the A/C
    }

    // Construct payload
    String payload = "{\"lab\":" + String(lab) + ",\"voc\":" + String(voc) + ",\"presence\":" + String(presence) + ",\"acState\":" + String(acState) + ",\"temperature\":" + String(temperature) + ",\"humidity\":" + String(humidity) +",\"fire\":" + String(fire) + "}";

    // Publish payload for the current lab
    client.publish(("Lab" + String(lab) + "/data").c_str(), payload.c_str());
  }

  delay(10000); // Wait for 10 seconds before sending next data
}

void reconnect() {
  while (!client.connected()) {
    Serial.println("Attempting MQTT connection...");
    if (client.connect("ESP32Client", mqtt_username, mqtt_password)) {
      Serial.println("connected");
      // Subscribe to topics if needed
       client.subscribe("rpi/data");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived in topic: ");
    Serial.println(topic);

    Serial.print("Message:");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}
```

### Habilitar o MQTT Broker

- Navegue até **Settings** -> **Data Collectors**.

- Clique no botão **ADD CONNECTOR** para adicionar um novo coletor.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt1.PNG" /></center>

- Selecione "MQTT Broker" como o tipo de coletor.

- Opções Avançadas de Configuração:

- Listen IP: O endereço IP no qual o MQTT broker escuta. Endereço IP do Jedi.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt2.PNG" /></center>

:::note

**Username/Password**: Ative esta opção e configure nome de usuário e senha para autenticação do cliente. Os clientes precisarão fornecer credenciais válidas para se conectar ao MQTT broker, portanto você precisa substituí-las no código Arduino.

:::

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/mqtt3.PNG" /></center>

No dashboard de dispositivos, você verá que nosso dispositivo MQTT (ESP32Client) foi adicionado.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/devicedashboard.PNG" /></center>

## Preparação do Dashboard

### Criar painel de dados personalizado

Os painéis do Machinechat JEDI oferecem um método robusto e adaptável para converter dados brutos de IoT em visualizações informativas. Por meio de uma interface intuitiva de arrastar e soltar, os usuários podem criar com facilidade painéis personalizados para atender às suas necessidades específicas, dando vida, de forma eficaz, às histórias contadas por seus dados.

Esses painéis estão disponíveis em vários tipos, incluindo **Data Dashboards** para layouts personalizáveis baseados em grade, **Device Dashboards** para exibição em tempo real de dados de dispositivos e sensores, e **System Dashboards** para sobrepor dados em imagens de fundo, ideais para criar diagramas de processo ou interfaces no estilo IHM.

- Navegue até a seção **Dashboard Manager** na interface web do JEDI.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard1.PNG" /></center>

- Em seguida, clique em **ADD DASHBOARD**

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard2.PNG" /></center>

- Escolha um tipo de painel (neste caso é Data view), o Nome e a Descrição e salve.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard3.PNG" /></center>

Depois disso, você notará a adição do novo painel à barra lateral. Vamos adicionar alguns widgets. Primeiro, vamos adicionar um gráfico de linhas.

### Adicionar gráfico de linhas

- Clique em **ADD CHART**

- Dê um Nome como desejar e **Select Chart type** como **Line**. E clique no **plus mark** para adicionar fontes de dados.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/dashboard8.PNG" /></center>

- Adicione a Source, a Property tag e forneça um nome e unidades adequados.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/linecjhart.PNG" /></center>

- Depois de clicar em **ADD** na janela Add data source e na janela New chart, você poderá ver um belo gráfico de linhas.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/chart1.PNG" /></center>

### Adicionar um gráfico de linhas empilhadas

- Novamente, clique em **Add graph**.

- Dê o **Name** que desejar e selecione **Chart type as Line**. Também ative o **Multiple Y axis mode**. Usaremos um para "Temperature" e outro para "Humidity". Em seguida, clique no **plus mark** para adicionar fontes de dados.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline.PNG" /></center>

- **Add Source**, a **property tag**, forneça um nome e unidades adequados e clique no botão **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline2.PNG" /></center>

- Adicionando a segunda métrica: clique no ícone **plus** para adicionar outra métrica ao mesmo gráfico de linhas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline3.PNG" /></center>

- Novamente, adicione a **Source**, a **Property tag**, forneça um nome e unidades adequados e também selecione **Y Axis on Right**. Em seguida clique em **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline4.PNG" /></center>

- Por fim, clique em **Add**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline5.PNG" /></center>

E é isso!! Você conseguirá obter um gráfico de linhas empilhadas.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/multiline6.PNG" /></center>

Em conclusão, o Machinechat JEDI com o reTerminal DM se apresenta como uma solução transformadora, revolucionando o cenário das operações industriais e da gestão de infraestrutura inteligente. Ao integrar perfeitamente recursos de IIoT, isso capacita os usuários a aproveitar dados em tempo real de dispositivos conectados, oferecendo percepções incomparáveis sobre processos de manufatura, logística da cadeia de suprimentos e eficiência operacional.

<center><img width={1000} src="https://files.seeedstudio.com/wiki/reTerminalDM/JEDI/screenshot2.PNG" /></center>

## Recursos

- **[Web Page]** [Documentação oficial do Machinechat](https://docs.machinechat.io/)

## Suporte técnico

Agradecemos por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
