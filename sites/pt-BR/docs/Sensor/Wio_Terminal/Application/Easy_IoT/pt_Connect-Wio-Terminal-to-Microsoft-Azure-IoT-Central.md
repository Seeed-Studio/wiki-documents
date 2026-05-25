---
title: Conectar Wio Terminal ao Microsoft Azure IoT Central
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
slug: /Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central/
---
# Conectar Wio Terminal ao Microsoft Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

## Introdução

Neste tutorial, vamos guiá-lo pelo processo de conectar o Wio Terminal ao Microsoft Azure IoT Central e enviar dados de telemetria dos sensores/ hardware integrados no Wio Terminal, como o acelerômetro de 3 eixos, sensor de luz e 3 botões, para o Microsoft Azure IoT Central. Depois disso, você poderá visualizar os dados dos sensores em painéis interativos. Você também poderá usar o Azure IoT Central para controlar hardware, como acionar o buzzer integrado no Wio Terminal. O Microsoft Azure IoT Central oferece suporte aos protocolos HTTP, MQTT e AMQP para comunicação, porém utilizaremos o protocolo MQTT neste tutorial.

### O que é o Microsoft Azure?

[Microsoft Azure](https://azure.microsoft.com) é a plataforma pública de computação em nuvem da Microsoft. Você pode usar o Microsoft Azure para criar, testar, implantar e gerenciar aplicativos e serviços por meio de data centers gerenciados pela Microsoft.

Além disso, ele fornece uma variedade de serviços em nuvem, incluindo computação, análise, armazenamento e rede. O Microsoft Azure oferece software como serviço (SaaS), plataforma como serviço (PaaS), infraestrutura como serviço (IaaS) e serverless. Por fim, ele oferece suporte a diversas linguagens de programação, ferramentas e frameworks.

### O que é o Microsoft Azure IoT?

[Microsoft Azure IoT](https://azure.microsoft.com/en-us/overview/iot) é um conjunto de serviços de nuvem gerenciados pela Microsoft que conectam, monitoram e controlam bilhões de ativos de IoT. Ele inclui segurança e sistemas operacionais para dispositivos e equipamentos, juntamente com dados e análises que ajudam as empresas a criar, implantar e gerenciar aplicações de IoT.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png" alt="pir" width={1200} height="auto" /></p>

### O que é o Microsoft Azure IoT Central?

[Microsoft Azure IoT Central](https://azure.microsoft.com/en-us/services/iot-central) é uma solução global de IoT totalmente gerenciada, no modelo SaaS (software como serviço), que facilita a conexão, o monitoramento e o gerenciamento dos seus ativos de IoT em escala. Ela é altamente segura, acompanha o crescimento do seu negócio, garante que seus investimentos sejam reaproveitáveis e integra-se aos seus aplicativos de negócios existentes. Também faz a ponte entre seus aplicativos de negócios e os dados de IoT. Por fim, oferece gerenciamento centralizado para reconfigurar e atualizar seus dispositivos.

### O que é IoT Plug and Play?

[IoT Plug and Play](https://docs.microsoft.com/en-us/azure/iot-pnp) permite que construtores de soluções integrem dispositivos inteligentes às suas soluções sem qualquer configuração manual. No núcleo do IoT Plug and Play está um modelo de dispositivo que um dispositivo usa para anunciar seus recursos para um aplicativo com IoT Plug and Play habilitado. Ele contém:

- Propriedades: representam o estado somente leitura ou gravável de um dispositivo ou outra entidade
- Telemetria: dados enviados por um dispositivo
- Comandos: descrevem uma função ou operação que pode ser realizada em um dispositivo

Dispositivos certificados como IoT Plug and Play eliminam o incômodo de configurar dispositivos no Azure IoT Central, como criar modelos e adicionar recursos e interfaces.

### Dispositivos Certificados IoT Plug and Play

Dispositivos Certificados IoT Plug and Play são dispositivos listados no [Azure Certified Device Catalog](https://devicecatalog.azure.com) com o selo IoT Plug and Play.

[Wio Terminal](https://www.seeedstudio.com/Wio-Terminal-p-4509.html) é um Dispositivo Certificado IoT Plug and Play.

<p style={{textAlign: 'center'}}><a href="https://devicecatalog.azure.com/devices/8b9c5072-68fd-4fc3-8e5f-5b15e3a20bd9"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Wiki.jpg" alt="pir" width={650} height="auto" /></a></p>

Para ser certificado como IoT Plug and Play, você precisará atender a alguns critérios, um dos quais é publicar um modelo DTDL (Digital Twins Definition Language) que define os recursos do dispositivo no repositório [Azure/ iot-plugandplay-models (DMR)](https://github.com/Azure/iot-plugandplay-models) no GitHub.

Isso permite que serviços em nuvem que usam Dispositivos Certificados IoT Plug and Play aprendam sobre os recursos do dispositivo a partir desse repositório.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/PnP_devices.png" alt="pir" width={850} height="auto" /></p>

## Conectando o Wio Terminal ao Microsoft Azure IoT Central via MQTT

Conforme explicado anteriormente, usaremos MQTT para a comunicação entre o Wio Terminal e o Microsoft Azure IoT Central. No entanto, você também pode usar a ponte HTTP, se essa for a sua necessidade.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_send.png" alt="pir" width={1200} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/WT_client_receive.png" alt="pir" width={1200} height="auto" /></p>

### Configuração do Microsoft Azure IoT Central

Primeiro, você precisa visitar o Microsoft Azure IoT Central, fazer login na sua conta Microsoft e criar um novo aplicativo para o seu projeto.

- **PASSO 1:** Acesse [aqui](https://apps.azureiotcentral.com) para criar um novo aplicativo

- **PASSO 2:** Clique em **Build** no menu de navegação à esquerda e clique em **Custom apps**

**Observação:** Faça login na sua conta Microsoft se for solicitado

- **PASSO 3:** Preencha o **Application name** e escolha **Free** em **Pricing plan**.

**Observação:** A URL do aplicativo será criada automaticamente quando você preencher o nome do aplicativo

- **PASSO 4:** Clique em **Create** para criar o novo aplicativo

Agora você configurou o Azure IoT Central com sucesso!

### Configurar o Wio Terminal

#### Atualizar o Firmware RTL8720

Precisamos atualizar o firmware do núcleo sem fio Realtek RTL8720 no Wio Terminal. Siga [este wiki](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview) para atualizar o firmware RTL8720.

**Observação:** Certifique-se de atualizar o [firmware](https://github.com/SeeedJP/wioterminal-aziot-example/releases) de acordo com a versão especificada na descrição da release.

#### Baixar e Enviar o Código de Demonstração para o Wio Terminal

Primeiro, usaremos um código de demonstração que envia dados de telemetria dos sensores integrados no Wio Terminal para o Microsoft Azure IoT Central.

##### Baixar o Código de Demonstração

- **PASSO 1:** Acesse [este repositório](https://github.com/SeeedJP/wioterminal-aziot-example) no GitHub
- **PASSO 2:** Clique em **Releases**
- **PASSO 3:** Em **Latest release**, clique em **wioterminal-aziot-example.uf2** para baixar o arquivo .uf2

##### Enviar o Código de Demonstração para o Wio Terminal

- **PASSO 1:** Conecte o Wio Terminal ao PC e ligue-o
- **PASSO 2:** Entre no **Bootloader Mode** deslizando o interruptor de energia para baixo, afastando-o ainda mais da posição "ON", solte, deslize novamente e solte

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" alt="pir" width={500} height="auto" /></p>

**Observação:** Quando o Wio Terminal estiver no modo Bootloader, o LED azul começará a pulsar de uma forma diferente do piscar normal

- **PASSO 3:** Abra o Explorador de Arquivos no seu PC e você verá uma nova unidade externa chamada **Arduino**

- **PASSO 4:** Arraste o **arquivo .uf2** baixado anteriormente para essa **unidade Arduino**.

- **PASSO 5:** Desligue o Wio Terminal

Agora enviamos com sucesso o código de demonstração para o Wio Terminal

##### Configuração de Wi-Fi e Azure IoT

Em seguida, vamos prosseguir para configurar a conexão Wi-Fi e Azure IoT

- **PASSO 1:** Mantenha pressionados os 3 botões e ligue o Wio Terminal para entrar no modo de configuração

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASSO 2:** Abra um aplicativo de console serial, como o [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **PASSO 3:** Digite a **porta COM** serial correta, configure **9600** como taxa de baud e conecte-se ao Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASSO 4:** Pressione **ENTER** no teclado e digite **help** no terminal serial para ver o uso da configuração

- **PASSO 5:** Defina o SSID do Wi-Fi digitando **set_wifissid** `your_WI-Fi_network_name`

**Observação:** Certifique-se de adicionar um único espaço entre os campos

- **PASSO 6:** Defina a senha do Wi-Fi digitando **set_wifipwd** `your_WI-Fi_network_password`

**Observação:** Certifique-se de adicionar um único espaço entre os campos

- **PASSO 7:** Defina as informações de conexão do Azure IoT acessando o aplicativo criado anteriormente no [Azure IoT Central](https://apps.azureiotcentral.com)

- **PASSO 8:** Navegue até `Administration > Device Connection` no menu de navegação à esquerda e **copie o ID scope** para o **Bloco de Notas**

- **PASSO 9:** Clique em **SAS-IoT-Devices** e copie a **primary key** para o **Bloco de Notas**

- **PASSO 10:** Volte ao terminal serial aberto anteriormente e digite **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name`

**Observação:** Certifique-se de adicionar um único espaço entre cada campo e você pode definir um `device name` de sua escolha.

- **PASSO 11:** Redefina o Wio Terminal deslizando o interruptor para baixo, afastando-o da posição ON, e soltando

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Agora você verá o LCD do Wio Terminal exibindo que está se conectando ao Wi-Fi e, em seguida, ao Azure IoT Hub. Depois disso, ele mostrará os dados de telemetria sendo enviados para o Azure IoT Central.

### Exibir Dados de Telemetria no Microsoft Azure IoT Central

Vamos prosseguir para exibir os dados de telemetria recebidos do acelerômetro de 3 eixos, sensor de luz e 3 botões do Wio Terminal no Dashboard do Azure IoT Central.

- **PASSO 1:** Abra o Dashboard do Azure IoT Central que você acessou anteriormente

- **ETAPA 2:** Clique em **Devices** no menu de navegação à esquerda

- **ETAPA 3:** Você verá **Seeed Wio Terminal** aparecer em Devices. Clique nele

- **ETAPA 4:** Clique na entrada com o **nome do dispositivo** que você configurou antes.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/wio_demo.png" alt="pir" width={800} height="auto" /></p>

Agora você poderá visualizar os dados do acelerômetro de 3 eixos integrado em um dashboard interativo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/accel_demo.png" alt="pir" width={800} height="auto" /></p>

Esta é a visualização padrão e precisamos fazer algumas alterações para exibir também os outros dados de telemetria.

- **ETAPA 5:** Clique em **Device templates** no menu de navegação à esquerda e clique em **Seeed Wio Terminal** para configurar o template

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/device_template.png" alt="pir" width={400} height="auto" /></p>

- **ETAPA 6:** Clique em **Overview** no menu de navegação à esquerda

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview.png" alt="pir" width={400} height="auto" /></p>

- **ETAPA 7:** Expanda o menu suspenso **select a telemetry** e selecione a telemetria que você deseja visualizar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/overview_edit.png" alt="pir" width={800} height="auto" /></p>

- **ETAPA 8:** Clique em **Add tile** e você verá o tile adicionado ao Dashboard do Azure IoT Central

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_add.png" alt="pir" width={300} height="auto" /></p>

**Nota:** Você pode redimensionar ou alterar a visualização dos tiles de acordo com sua preferência

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/resize.png" alt="pir" width={400} height="auto" /></p>

- **ETAPA 9:** Repita o mesmo para os 3 botões (esquerda, centro, direita)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/draft_visual.png" alt="pir" width={850} height="auto" /></p>

**Nota:** Aqui configuramos o seguinte:

| Nome do Tile | Tamanho do Tile | Visualização do Tile |
|-|-|-|
| Intensidade da Luz | 2 x 2 | Gráfico de linha |
| Botão esquerdo | 1 x 1 | KPI |
| Botão direito | 1 x 1 | KPI |
| Botão central | 2 x 2 | KPI |

- **ETAPA 10:** Clique em **Save** e **Publish**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/save.png" alt="pir" width={600} height="auto" /></p>

- **ETAPA 11:** Volte para o dashboard do Azure IoT Central e você poderá visualizar todos os dados vindos do Wio Terminal.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/final.png" alt="pir" width={750} height="auto" /></p>

- **ETAPA 12:** Você também pode clicar na aba **Raw data** para visualizar todos os dados de telemetria em tempo real.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/raw_data.png" alt="pir" width={700} height="auto" /></p>

#### Adicionar uma Regra para Enviar um E-mail

Regras no IoT Central servem como uma ferramenta de resposta personalizável que é acionada por eventos monitorados ativamente de dispositivos conectados.
Por exemplo, neste demo, podemos configurar o IoT Central para enviar um e-mail quando o nível de intensidade de luz estiver abaixo de 50.

- **ETAPA 1:** Clique em **Rules** no menu de navegação à esquerda no Azure IoT Central.

- **ETAPA 2:** Clique em **+New** ou **Create a rule**

- **ETAPA 3:** Insira um nome para a regra

- **ETAPA 4:** Em **Device template**, selecione **Seeed Wio Terminal**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/rule_1.png" alt="pir" width={830} height="auto" /></p>

- **ETAPA 5:** Em **Conditions**, ative **time aggregation** e selecione uma **time window** de sua escolha. Aqui iremos definir como **5 minutes**

**Nota:** A cada **xx** minutos, a regra é avaliada uma vez sobre os últimos **xx** minutos de dados

- **ETAPA 6:** Em **Telemetry**, selecione a telemetria de sua escolha. Aqui iremos definir como **Light intensity**

- **ETAPA 7:** Em **Aggregation**, selecione **Average**. Isto pegará o valor médio durante a **time window** definida anteriormente

- **ETAPA 8:** Em **Operator**, selecione uma condição de sua escolha. Aqui usaremos a condição **is less than**

- **ETAPA 9:** Em **Value**, digite um valor. Aqui iremos digitar **50**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/conditions_1.png" alt="pir" width={1200} height="auto" /></p>

- **ETAPA 10:** Em **Actions**, clique em **Email**

- **ETAPA 11:** Digite um **Display name**, **To address** e **Note** para o e-mail

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/email_3.png" alt="pir" width={1200} height="auto" /></p>

**Nota:** Por favor note que o **email address** aqui deve ser adicionado a esta **Azure IoT Central Application** e também ter feito login pelo menos uma vez.

- Navegue até `Administration > Users`, clique em **Assign user**, preencha o **Email**, atribua uma **Role** e clique em **Save**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/assign_user.png" alt="pir" width={800} height="auto" /></p>

- **ETAPA 12:** Clique em **Done**

- **ETAPA 13:** Finalmente, clique em **Save**

Agora criamos com sucesso uma regra para enviar um e-mail

### Controlar Hardware a partir do Microsoft Azure IoT Central

Você não apenas pode visualizar os dados de telemetria no Azure IoT Central, mas também usá-los para controlar o hardware. Neste demo, poderemos controlar o buzzer integrado no Wio Terminal e especificar uma duração de tempo na qual o buzzer irá emitir bipes

- **ETAPA 1:** Clique na aba **Command**

- **ETAPA 2:** Insira um **value** dentro da coluna sob **Duration**

**Nota:** os valores estão na unidade milissegundos. ex: 1000 = 1000ms = 1s

- **ETAPA 3:** Quando você clicar em **Run**, você conseguirá ouvir um som de bipe do buzzer pela duração de tempo especificada acima

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/1000.png" alt="pir" width={500} height="auto" /></p>

## Como Adicionar Outros Sensores?

Você pode adicionar qualquer sensor ao Wio Terminal e enviar dados de telemetria do sensor conectado para o Azure IoT Central. Conectaremos um [Grove - Temperature & Humidity Sensor (DHT11)](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html) ao Wio Terminal e enviaremos dados de temperatura e umidade para o Azure IoT Central para visualizar em dashboards!

### Configuração do Microsoft Visual Studio Code

#### Baixar, Instalar e Configurar o Visual Studio Code

Se quisermos adicionar mais sensores ao Wio Terminal para enviar dados de telemetria ao Azure IoT Central, não podemos usar facilmente o arquivo .uf2 como fizemos antes. Porque os códigos já estão compilados dentro desse arquivo .uf2. Então, se quisermos adicionar mais códigos ao demo, precisamos usar uma IDE chamada Microsoft Visual Studio Code, adicionar os códigos necessários e finalmente enviá-los ao Wio Terminal.

Agora, vamos prosseguir para instalar o Microsoft Visual Studio Code no computador

- **ETAPA 1:** Visite code.visualstudio.com e clique em **Download**

**Nota:** Escolha o instalador de acordo com o seu sistema operacional

- **ETAPA 2:** Passe pelo assistente de instalação e conclua a instalação

- **ETAPA 3:** Abra o Visual Studio Code

- **ETAPA 4:** Clique em **Extensions** no menu de navegação à esquerda e digite **platformIO** na caixa de pesquisa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio.png" alt="pir" width={380} height="auto" /></p>

- **ETAPA 5:** Clique em **install**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_install.png" alt="pir" width={550} height="auto" /></p>

#### Código para o Demo no Visual Studio Code

- **ETAPA 1:** Visite [este link](https://github.com/SeeedJP/wioterminal-aziot-example/releases) para encontrar os releases disponíveis dentro do repositório [SeeedJP/wioterminal-aziot-example](https://github.com/SeeedJP/wioterminal-aziot-example)

- **ETAPA 2:** Navegue até o **Latest release** e em **Assets**, clique em **Source code (zip)**. Isso fará o download do código-fonte como um arquivo .zip

- **ETAPA 3:** Extraia o **arquivo .zip**

- **ETAPA 4:** Volte para o Visual Studio Code e navegue até `File > Open Folder...`

- **ETAPA 5:** Escolha a pasta que extraímos antes e clique em **Select Folder**

- **ETAPA 6:** Navegue até `wioterminal-aziot-example-0.10 > include > config.h` no menu de navegação à esquerda

- **ETAPA 7:** Quando **config.h** for aberto, procure por **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** e altere para **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **dtmi:local:wioterminal_aziot_example;5** é o Model ID

- **ETAPA 8:** Navegue até `wioterminal-aziot-example-0.10 > seeedkk-wioterminal-wioterminal_aziot_example.json` no menu de navegação à esquerda

- **ETAPA 9:** Quando **seeedkk-wioterminal-wioterminal_aziot_example.json** for aberto, procure por **"dtmi:seeedkk:wioterminal:wioterminal_aziot_example;5"** e altere também para **"dtmi:local:wioterminal_aziot_example;5"**

**Nota:** **seeedkk-wioterminal-wioterminal_aziot_example.json** é o modelo DTDL que mencionamos antes

Atualmente o modelo está definido para dados de **aceleração, intensidade da luz e contagem de botões**. Vamos em frente adicionar **temperatura e umidade** a este modelo DTDL.

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

**Nota:** Aqui, **name** é o que usaremos para identificar dados específicos de telemetria mais tarde nos códigos, **unit** é a unidade correspondente aos dados, **displayName** é o nome que é exibido no Azure IoT Central ("en" para inglês/ "ja" para japonês) e **schema** é o tipo de dado

- **PASSO 11:** Navegue para `wioterminal-aziot-example-0.10 > platformio.ini` a partir do menu de navegação à esquerda

- **PASSO 12:** Quando **platformio.ini** estiver aberto, em **lib_deps**, adicione **https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor**

```sh
lib_deps = 
    https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor
```

**Nota:** Esta é a biblioteca para o Grove - Temperature and Humidity Sensor (DHT11)

- **PASSO 13:** Navegue para `wioterminal-aziot-example-0.10 > src > main.cpp` a partir do menu de navegação à esquerda

- **PASSO 14:** Quando **main.cpp** estiver aberto, adicione a biblioteca DHT11 após a linha **#include "CliMode.h"**

```cpp
#include "CliMode.h"
#include "DHT.h"
```

- **PASSO 15:** Adicione as definições e inicializações do DHT11 após a linha **LIS3DHTR AccelSensor;**

```cpp
LIS3DHTR<TwoWire> AccelSensor;

#define DHTPIN 0 //Define signal pin of DHT sensor 
// #define DHTPIN PIN_WIRE_SCL //Use I2C port as Digital Port */
#define DHTTYPE DHT11 //Define DHT sensor type 
DHT dht(DHTPIN, DHTTYPE); //Initializing DHT sensor
```

**Nota:** O sensor DHT11 pode ser conectado a ambas as portas Grove no Wio Terminal. Se a **Digital Port** for usada, o pino pode ser definido como **0** e se a **I2C port** for usada, o pino pode ser definido como **PIN_WIRE_SCL**. O diagrama das portas será mostrado mais adiante neste documento

- **PASSO 16:** Adicione os seguintes códigos na função **SendTelemetry()** para analisar o arquivo json juntamente com os dados de telemetria

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

- **PASSO 17:** Adicione os seguintes códigos após a linha **ntp.begin**, para iniciar o sensor DHT11

```cpp
dht.begin(); //start DHT sensor
```

Agora concluímos todos os códigos para esta demonstração.

- **PASSO 18:** Clique no **ícone PlatformIO** no menu de navegação à esquerda e clique em **Build**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformio_build.png" alt="pir" width={400} height="auto" /></p>

Se você vir a seguinte mensagem, o código foi compilado com êxito:

```sh
================================== [SUCCESS] Took 30.56 seconds ==================================
```

### Configuração do Microsoft Azure IoT Central

Agora precisamos criar um modelo de dispositivo personalizado para que os dados do Wio Terminal possam ser visualizados no painel do Azure IoT Central

#### Criando um Novo Modelo de Dispositivo

- **PASSO 1:** Visite o Azure IoT Central e clique em `Device templates` no menu de navegação à esquerda

- **PASSO 2:** Clique em **+ New**, clique em **IoT device** e clique em **Next:Customize**

- **PASSO 3:** Digite um nome dentro da caixa **Device template name** e clique em **Next:Review**

- **PASSO 4:** Clique em **Create**

#### Importando um Modelo de Dispositivo Personalizado

- **PASSO 1:** Clique em **Import a model**

- **PASSO 2:** Navegue até a pasta **wioterminal-aziot-example-0.10** que usamos antes, encontre o arquivo **seeedkk-wioterminal-wioterminal_aziot_example.json** e clique nele

- **PASSO 3:** Clique em **Open**

- **PASSO 4:** Clique em **Views** no menu à esquerda e clique em **Generate default views**

- **PASSO 5:** Clique em **Generate default dashboard view(s)**

- **PASSO 6:** Navegue até **Overview** no menu à esquerda e personalize o painel de acordo com sua preferência.

**Nota:** Já mencionamos anteriormente neste documento como personalizar o painel

- **PASSO 7:** Siga a configuração abaixo

| Nome do Tile | Tamanho do Tile | Visualização do Tile |
|-|-|-|
| Light Intensity | 2 x 2 | Line chart |
| Light Intensity | 1 x 1 | Last Known Value |
| Temperature (C), Humidity (%RH) | 2 x 2 | Line chart |
| Temperature (C) | 1 x 1 | Last Known Value |
| Humidity (%RH) | 1 x 1 | Last Known Value |
| Left button | 1 x 1 | KPI |
| Middle button | 1 x 1 | KPI |
| Right button | 1 x 1 | KPI |

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard.png" alt="pir" width={1000} height="auto" /></p>

- **PASSO 8:** Clique em **Save** e **Publish**

### Configuração do Wio Terminal

#### Configuração de Hardware

- Conecte o **Grove - Temperature and Humidity Sensor (DHT11)** à **Grove Digital Port** no Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/connection.png" alt="pir" width={380} height="auto" /></p>

#### Configuração de Software

##### Fazer Upload do Código para o Wio Terminal

Agora precisamos enviar o código para o Wio Terminal para enviar os dados de telemetria ao Azure IoT Central

- **PASSO 1:** Volte ao VS Code, clique no **ícone PlatformIO** e clique em **Upload**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/platformIO_upload.png" alt="pir" width={380} height="auto" /></p>

##### Configuração de Wi-Fi e Azure IoT

Em seguida, vamos configurar a conexão Wi-Fi e Azure IoT como fizemos antes

- **PASSO 1:** Mantenha pressionados os 3 botões e ligue o Wio Terminal para entrar no modo de configuração

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config.png" alt="pir" width={700} height="auto" /></p>

- **PASSO 2:** Abra um aplicativo de console serial como o [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

- **PASSO 3:** Digite a **porta COM** serial correta, defina **9600** como taxa de transmissão e entre no Wio Terminal

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/config_new.png" alt="pir" width={500} height="auto" /></p>

- **PASSO 4:** Pressione **ENTER** no teclado e digite **help** no terminal serial para ver o uso da configuração

**Nota:** Agora não precisamos inserir o SSID e a senha do Wi-Fi porque eles já estão salvos pela configuração anterior

- **PASSO 5:** Defina as informações de conexão do Azure IoT visitando o aplicativo criado anteriormente no [Azure IoT Central](https://apps.azureiotcentral.com)

- **PASSO 6:** Navegue até `Administration > Device Connection` no menu de navegação à esquerda e **copie o ID scope** para o **notepad**

- **PASSO 7:** Clique em **SAS-IoT-Devices** e copie a **primary key** para o **notepad**

- **PASSO 8:** Visite o terminal serial aberto anteriormente e digite **set_az_iotc** `your_ID_scope` `your_primary_key` `your_device_name`

**Nota:** Certifique-se de adicionar um único espaço entre cada campo e você pode decidir um `device name` de sua escolha.

- **PASSO 9:** Reinicie o Wio Terminal deslizando o interruptor ainda mais para longe da posição ON e soltando

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Reset.png" alt="pir" width={500} height="auto" /></p>

Agora você poderá ver o LCD do Wio Terminal exibindo que está se conectando ao Wi-Fi e depois ao Azure IoT Hub. Depois disso, ele mostrará os dados de telemetria sendo enviados ao Azure IoT Central.

### Visualizar no Azure IoT Central

Volte ao Azure IoT Central e, no menu de navegação à esquerda, clique em **Devices** e clique no seu **Device name**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Azure_IoTc_WT/dashboard_final1.png" alt="pir" width={1000} height="auto" /></p>

Agora você poderá visualizar todos os dados do sensor do Wio Terminal no painel do Microsoft Azure IoT Central!

## Suporte Técnico & Discussão sobre Produtos

 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/).
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
