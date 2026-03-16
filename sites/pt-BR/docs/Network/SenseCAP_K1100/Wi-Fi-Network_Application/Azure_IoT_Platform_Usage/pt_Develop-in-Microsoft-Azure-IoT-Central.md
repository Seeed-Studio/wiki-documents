---
description: Desenvolver no Microsoft Azure IoT Central
title: Desenvolver no Microsoft Azure IoT Central
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Develop-in-Microsoft-Azure-IoT-Central
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Develop-in-Microsoft-Azure-IoT-Central/
---
# Desenvolver no Microsoft Azure IoT Central

### Adicionar uma Regra para Enviar um E-mail

As regras no IoT Central funcionam como uma ferramenta de resposta personalizável que é acionada por eventos monitorados ativamente de dispositivos conectados.
Por exemplo, neste demo, podemos configurar o IoT Central para enviar um e-mail quando o nível de intensidade de luz estiver abaixo de 50.

- **ETAPA 1:** Clique em **Rules** no menu de navegação à esquerda no Azure IoT Central.

- **ETAPA 2:** Clique em **+New** ou **Create a rule**

- **ETAPA 3:** Insira um nome para a regra

- **ETAPA 4:** Em **Device template**, selecione **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **ETAPA 5:** Em **Conditions**, ative **time aggregation** e selecione uma **time window** de sua escolha. Aqui vamos defini-la como **5 minutes**

**Nota:** A cada **xx** minutos, a regra é avaliada uma vez sobre os últimos **xx** minutos de dados

- **ETAPA 6:** Em **Telemetry**, selecione a telemetria de sua escolha. Aqui vamos defini-la como **Light intensity**

- **ETAPA 7:** Em **Aggregation**, selecione **Average**. Isso pegará o valor médio durante a **time window** definida anteriormente

- **ETAPA 8:** Em **Operator**, selecione uma condição de sua escolha. Aqui vamos usar a condição **is less than**

- **ETAPA 9:** Em **Value**, digite um valor. Aqui vamos digitar **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **ETAPA 10:** Em **Actions**, clique em **Email**

- **ETAPA 11:** Digite um **Display name**, **To address** e **Note** para o e-mail

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**Nota:** Observe que o **email address** aqui deve ser adicionado a esta **Azure IoT Central Application** e também ter feito login pelo menos uma vez.

- Navegue até `Administration > Users`, clique em **Assign user**, preencha o **Email**, atribua uma **Role** e clique em **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **ETAPA 12:** Clique em **Done**

- **ETAPA 13:** Por fim, clique em **Save**

Agora criamos com sucesso uma regra para enviar um e-mail

### Controlar Hardware a partir do Microsoft Azure IoT Central

Você não só pode visualizar os dados de telemetria no Azure IoT Central, como também usá-los para controlar o hardware. Neste demo, poderemos controlar o buzzer integrado no Wio Terminal e especificar uma duração de tempo na qual o buzzer irá apitar

- **ETAPA 1:** Clique na guia **Command**

- **ETAPA 2:** Insira um **value** dentro da coluna em **Duration**

**Nota:** os valores estão na unidade milissegundos. ex: 1000 = 1000ms = 1s

- **ETAPA 3:** Quando você clicar em **Run**, você ouvirá um som de bip do buzzer pela duração de tempo especificada acima

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## Como Adicionar Outros Sensores?

Você pode adicionar qualquer sensor ao Wio Terminal e enviar dados de telemetria do sensor conectado para o Azure IoT Central. Vamos conectar um [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) ao Wio Terminal e enviar dados de temperatura e umidade para o Azure IoT Central para visualizar em dashboards!

### Configuração do Microsoft Visual Studio Code

#### Baixar, Instalar e Configurar o Visual Studio Code

Se quisermos adicionar mais sensores ao Wio Terminal para enviar dados de telemetria ao Azure IoT Central, não podemos usar facilmente o arquivo .uf2 como fizemos antes. Porque os códigos já estão compilados dentro desse arquivo .uf2. Então, se quisermos adicionar mais códigos ao demo, precisamos usar uma IDE chamada Microsoft Visual Studio Code, adicionar os códigos necessários e finalmente enviá-los ao Wio Terminal.

Então agora, vamos prosseguir para instalar o Microsoft Visual Studio Code no computador

- **ETAPA 1:** Visite code.visualstudio.com e clique em **Download**

**Nota:** Escolha o instalador de acordo com o seu sistema operacional

- **ETAPA 2:** Passe pelo assistente de instalação e conclua a instalação

- **ETAPA 3:** Abra o Visual Studio Code

- **ETAPA 4:** Clique em **Extensions** no menu de navegação à esquerda e digite **platformIO** na caixa de pesquisa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **ETAPA 5:** Clique em **install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Código para o Demo no Visual Studio Code

- **ETAPA 1:** Visite [este link](https://github.com/SeeedJP/wioterminal-aziot-example/releases) para encontrar os lançamentos disponíveis dentro do repositório [SeeedJP/wioterminal-aziot-example](https://github.com/SeeedJP/wioterminal-aziot-example)

- **ETAPA 2:** Navegue até o **Latest release** e em **Assets**, clique em **Source code (zip)**. Isso fará o download do código-fonte como um arquivo .zip

- **ETAPA 3:** Extraia o **.zip file**

- **ETAPA 4:** Volte ao Visual Studio Code e navegue até `File > Open Folder...`

- **ETAPA 5:** Escolha a pasta que extraímos antes e clique em **Select Folder**

- **ETAPA 6:** Navegue até `wioterminal-aziot-example-0.10 > include > config.h` no menu de navegação à esquerda

- **ETAPA 7:** Quando **config.h** estiver aberto, procure por **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** e altere para **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **dtmi:local:wioterminal_aziot_example;5** é o Model ID

- **ETAPA 8:** Navegue até `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` no menu de navegação à esquerda

- **ETAPA 9:** Quando **seeedkk-wioterminal-wioterminal_aziot_example.json** estiver aberto, procure por **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** e altere também para **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **seeedkk-wioterminal-wioterminal_aziot_example.json** é o modelo DTDL que mencionamos antes

Atualmente o modelo está definido para dados de **acceleration, light intensity e button count**. Vamos em frente adicionar **temperature and humidity** a este modelo DTDL.

- **ETAPA 10:** Adicione os seguintes códigos abaixo de **"contents": [**:

```sh
  "contents": [
    {
      "@type": [
        "Telemetry",
        "Temperature"
      ],
      "name": "temp",
      "unit": "degreeCelsius",
      "displayName": {
        "en": "Temperature (C)",
        "ja": "温度"
      },
      "schema": "integer"
    },
    {
      "@type": "Telemetry",
      "name": "humi",
      "displayName": {
        "en": "Humidity (%RH)",
        "ja": "湿度"
      },
      "schema": "integer"
    },
```

**Nota:** Aqui, **name** é o que vamos usar para identificar dados de telemetria específicos mais tarde nos códigos, **unit** é a unidade correspondente aos dados, **displayName** é o nome que aparece no Azure IoT Central ("en" para inglês / "ja" para japonês) e **schema** é o tipo de dado

- **ETAPA 11:** Navegue até `wioterminal-aziot-example-0.10 > platformio.ini` no menu de navegação à esquerda

- **ETAPA 12:** Quando **platformio.ini** estiver aberto, em **lib_deps**, adicione **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**Nota:** Esta é a biblioteca para o Grove - Temperature and Humidity Sensor (DHT11)

- **ETAPA 13:** Navegue até `wioterminal-aziot-example-0.10 > src > main.cpp` no menu de navegação à esquerda

- **ETAPA 14:** Quando **main.cpp** estiver aberto, adicione a biblioteca DHT11 após a linha **#include "CliMode.h"**

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **ETAPA 15:** Adicione as definições e inicializações do DHT11 após a linha
**LIS3DHTR  AccelSensor;**

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**Nota:** O sensor DHT11 pode ser conectado a ambas as portas Grove no Wio Terminal. Se a **Digital Port** for usada, o pino pode ser definido como **0** e se a **I2C port** for usada, o pino pode ser definido como **PIN_WIRE_SCL**. O diagrama das portas será mostrado mais adiante neste documento

- **ETAPA 16:** Adicione os seguintes códigos na função **SendTelemetry()** para analisar o arquivo json junto com os dados de telemetria

```cpp
static az_result SendTelemetry()
{
    float accelX;
    float accelY;
    float accelZ;
    AccelSensor.getAcceleration(&accelX, &accelY, &accelZ);

    int light;
    light = analogRead(WIO_LIGHT) * 100 / 1023;

    int temp; //assign variable to store temperature
    int humi; //assign variable to store humidity
    temp = dht.readTemperature(); //read temperature
    humi = dht.readHumidity(); //read humidity

    char telemetry_topic[128];
    if (az_result_failed(az_iot_hub_client_telemetry_get_publish_topic(&HubClient, NULL, telemetry_topic, sizeof(telemetry_topic), NULL)))
    {
        Log("Failed az_iot_hub_client_telemetry_get_publish_topic" DLM);
        return AZ_ERROR_NOT_SUPPORTED;
    }

    az_json_writer json_builder;
    char telemetry_payload[200];
    AZ_RETURN_IF_FAILED(az_json_writer_init(&json_builder, AZ_SPAN_FROM_BUFFER(telemetry_payload), NULL));
    AZ_RETURN_IF_FAILED(az_json_writer_append_begin_object(&json_builder));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("temp")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, temp));
    AZ_RETURN_IF_FAILED(az_json_writer_append_property_name(&json_builder, AZ_SPAN_LITERAL_FROM_STR("humi")));
    AZ_RETURN_IF_FAILED(az_json_writer_append_int32(&json_builder, humi));
```

- **ETAPA 17:** Adicione os seguintes códigos após a linha **ntp.begin**, para iniciar o sensor DHT11

```cpp
dht.begin(); //start DHT sensor
```

Agora concluímos todos os códigos para esta demonstração.

- **ETAPA 18:** Clique no **ícone PlatformIO** no menu de navegação à esquerda e clique em **Build**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

Se você vir a seguinte mensagem, terá compilado o código com sucesso:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Configuração do Microsoft Azure IoT Central

Agora precisamos criar um modelo de dispositivo personalizado para que os dados do Wio Terminal possam ser visualizados no Dashboard do Azure IoT Central

#### Criando um Novo Modelo de Dispositivo

- **ETAPA 1:** Visite o Azure IoT Central e clique em `Device templates` no menu de navegação à esquerda

- **ETAPA 2:** Clique em **+ New**, clique em **IoT device** e clique em **Next:Customize**

- **ETAPA 3:** Digite um nome na caixa **Device template name** e clique em **Next:Review**

- **ETAPA 4:** Clique em **Create**

#### Importando um Modelo de Dispositivo Personalizado

- **ETAPA 1:** Clique em **Import a model**

- **ETAPA 2:** Navegue até a pasta **wioterminal-aziot-example-0.10** que usamos antes, encontre o arquivo **seeedkk-wioterminal-wioterminal_aziot_example.json** e clique nele

- **ETAPA 3:** Clique em **Open**

- **ETAPA 4:** Clique em **Views** no menu à esquerda e clique em **Generate default views**

- **ETAPA 5:** Clique em **Generate default dashboard view(s)**

- **ETAPA 6:** Navegue até **Overview** no menu à esquerda e personalize o dashboard de acordo com sua preferência.

**Nota:** Já mencionamos anteriormente neste documento como personalizar o dashboard

- **ETAPA 7:** Siga a configuração abaixo

| Nome do Bloco | Tamanho do Bloco | Visualização do Bloco |
|-|-|-|
| Intensidade de Luz | 2 x 2 | Gráfico de linhas |
| Intensidade de Luz | 1 x 1 | Último Valor Conhecido |
| Temperatura (C), Umidade (%RH) | 2 x 2 | Gráfico de linhas |
| Temperatura (C) | 1 x 1 | Último Valor Conhecido |
| Umidade (%RH) | 1 x 1 | Último Valor Conhecido |
| Botão esquerdo | 1 x 1 | KPI |
| Botão do meio | 1 x 1 | KPI |
| Botão direito | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **ETAPA 8:** Clique em **Save** e **Publish**

### Configuração do Wio Terminal

#### Configuração de Hardware

- Conecte o **Grove - Temperature and Humidity Sensor (DHT11)** à **Grove Digital Port** no Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### Configuração de Software

##### Fazer Upload do Código para o Wio Terminal

Agora precisamos fazer upload do código para o Wio Terminal para enviar os dados de telemetria ao Azure IoT Central

- **ETAPA 1:** Volte para o VS Code, clique no **ícone PlatformIO** e clique em **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Configuração de Wi-Fi e Azure IoT

Em seguida, vamos configurar a conexão Wi-Fi e Azure IoT exatamente como fizemos antes

- **ETAPA 1:** Mantenha pressionados os 3 botões e ligue o Wio Terminal para entrar no modo de configuração

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **ETAPA 2:** Abra um aplicativo de console serial, como o [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **ETAPA 3:** Digite a **porta COM** serial correta, defina **9600** como taxa de baud e entre no Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **ETAPA 4:** Pressione **ENTER** no teclado e digite **help** no terminal serial para ver o uso da configuração

**Nota:** Agora não precisamos inserir o SSID e a senha do WiFi porque eles já estão salvos a partir da configuração anterior

- **ETAPA 5:** Defina as informações de conexão do Azure IoT visitando o aplicativo criado anteriormente no [Azure IoT Central](https://apps.azureiotcentral.com)

- **ETAPA 6:** Navegue até `Administration > Device Connection` no menu de navegação à esquerda e **copie o ID scope** para o **bloco de notas**

- **ETAPA 7:** Clique em **SAS-IoT-Devices** e copie a **primary key** para o **bloco de notas**

- **ETAPA 8:** Visite o terminal serial aberto anteriormente e digite **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name`

**Nota:** Certifique-se de adicionar um único espaço entre cada campo e você pode decidir um `device name` de sua escolha.

- **ETAPA 9:** Redefina o Wio Terminal deslizando o interruptor para baixo, mais distante da posição ON, e solte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Agora você verá o LCD do Wio Terminal exibindo que está se conectando ao Wi-Fi e depois ao Azure IoT Hub. Depois disso, ele mostrará os dados de telemetria sendo enviados ao Azure IoT Central.

### Visualizar no Azure IoT Central

Volte para o Azure IoT Central e, no menu de navegação à esquerda, clique em **Devices** e clique no seu **Device name**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

Agora você poderá visualizar todos os dados dos sensores do Wio Terminal no Dashboard do Microsoft Azure IoT Central!
