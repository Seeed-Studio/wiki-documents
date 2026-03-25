---
description: Grafana para reTerminal
title: Grafana para reTerminal
keywords:
  - Edge
  - Aplicativo reTerminal
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /weather-dashboard-with-Grafana-reTerminal
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/weather-dashboard-with-Grafana-reTerminal/
---

# Crie Seu Próprio Dashboard de Clima Usando Grafana

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)

## Introdução

Aqui vamos apresentar como criar seu próprio dashboard de clima no seu reTerminal usando Grafana, com crédito para [Michaelm Klementsk](https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/).

[InflexDB](https://www.influxdata.com/) é um [banco de dados](https://en.wikipedia.org/wiki/Time_series_database) de [série temporal](https://en.wikipedia.org/wiki/Time_series_database) (TSDB) [open-source](https://en.wikipedia.org/wiki/Open-source_software) desenvolvido pela empresa InfluxData. Ele é escrito na [linguagem de programação Go](https://en.wikipedia.org/wiki/Go_(programming_language)) para armazenamento e recuperação de dados de [série temporal](https://en.wikipedia.org/wiki/Time_series) em áreas como monitoramento de operações, métricas de aplicações, dados de sensores da [Internet das Coisas](https://en.wikipedia.org/wiki/Internet_of_Things) e análises em tempo real. Ele também oferece suporte para processamento de dados a partir do [Graphite](https://en.wikipedia.org/wiki/Graphite_(software)).

[Grafana](https://grafana.com/) é um aplicativo web de análise e [visualização interativa](https://en.wikipedia.org/wiki/Interactive_visualization) [open source](https://en.wikipedia.org/wiki/Open_source) e [multiplataforma](https://en.wikipedia.org/wiki/Multi-platform). Ele fornece gráficos, diagramas e alertas para a web quando conectado a fontes de dados compatíveis. Uma versão licenciada Grafana Enterprise com capacidades adicionais também está disponível como instalação auto-hospedada ou como uma conta no serviço em nuvem Grafana Labs. Ele é expansível por meio de um [sistema de plug-ins](https://en.wikipedia.org/wiki/Plug-in_(computing)). Usuários finais podem criar dashboards de monitoramento complexos usando construtores de consultas interativos. O Grafana é dividido em [front-end e back-end](https://en.wikipedia.org/wiki/Front_end_and_back_end), escritos em [TypeScript](https://en.wikipedia.org/wiki/TypeScript) e [Go](https://en.wikipedia.org/wiki/Go_(programming_language)), respectivamente.

Vamos usar um ESP32 para coletar leituras de temperatura, umidade e pressão. Elas serão então enviadas para um banco de dados de séries temporais no [InfluxDB](https://www.influxdata.com/products/influxdb-cloud/). O InfluxDB pode ser executado localmente em um Raspberry Pi ou no servidor em nuvem deles; nós vamos usar o servidor em nuvem. Em seguida, vamos usar um aplicativo de análise e visualização chamado [Grafana](https://grafana.com/) para exibir as informações que foram armazenadas no banco de dados. O Grafana também pode ser executado localmente em nosso Raspberry Pi (ou reTerminal, neste caso) ou no servidor em nuvem deles. Vamos instalá‑lo e executá‑lo localmente no nosso reTerminal. Você não precisa usar um Pi separado para o InfluxDB e o Grafana, você pode executar ambos localmente no seu reTerminal se quiser – eu só não quero ter que deixar o reTerminal ligado o tempo todo para coletar os dados.

![Data Processing Between ESP32 and Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg)

## Materiais Necessários

- [reTerminal](https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html)
- Fonte de Alimentação
- ESP32
- [Sensores Grove do Beginner Kit](https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html)
- Protoboard
- Jumpers para Protoboard

## Configuração do Azure e InflexDB

Precisamos criar primeiro uma máquina virtual.

- **Passo 1.** Abra a página a seguir e faça login nos seus serviços [Microsoft Azure](https://portal.azure.com/#home). Clique em `Virtual machines` e clique em `Create`.

![image-20220124131855082](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png)

- **Passo 2.** Selecione o sistema Ubuntu 18.04 como sistema padrão na máquina virtual. Clique em `Review + create` e vá para a próxima página.

![image-20220124132225793](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png)

- **Passo 3.** Com todas as configurações selecionadas, clique em `Create`.

![image-20220124132800871](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png)

O progresso levará um tempo; quando estiver concluído, clique no botão `Go to resource`.

![image-20220124133101855](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png)

Em seguida, será exibida a página abaixo. Clique em `Networking`, escolha `Add inbound port rule` e adicione a porta `8086` com qualquer destino.

<img src="https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png" alt="image-20220124133706479" />

- **Passo 4.** Copie estes comandos para instalar o Docker e habilitá‑lo.

```bash
sudo apt udpate
sudo apt install docker docker-compose -y
sudo systemctl enable --now docker && sudo systemctl start docker
sudo systemctl status docker
```

![image-20220124134313484](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png)

- **Passo 5.** Use o comando para baixar a imagem do InfluxDB.

```bash
sudo docker pull influxdb:2.1.1
```

![image-20220124134409253](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png)

- **Passo 6.** Aplique o comando para executar o InfluxDB em segundo plano.

```bash
sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1
```

![image-20220124135326814](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png)

- **Passo 7.** Abra o seu navegador e então digite `http://yourip:8086` (Seu IP). Clique em "Get Started" para usá‑lo.

![image-20220124135533274](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png)

- **Passo 8.** Anote o seu `Organization Name` e `Bucket Name` e então clique em "Continue"

![image-20220124135632177](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png)

- **Passo 9.** Clique em `Data > API Tokens`

![image-20220124140028985](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png)

Azure e InflexDB agora estarão configurados; em seguida vamos passar para o ESP32.

## Configuração do ESP32

Para coletar os dados do clima, vamos usar um ESP32 com um sensor DHT11 conectado ao pino 4 e um sensor de pressão BMP280 conectado à interface I2C (pinos 21 e 22). O exemplo aqui usa dois módulos de sensores Grove do [beginner kit](https://amzn.to/31my42U), pois eles já têm toda a eletrônica necessária integrada (resistores adicionais etc.).

![ESP32 Circuit Diagram](https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg)

- **Passo 1.** Abra a [Arduino IDE](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) e [instale as bibliotecas](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/). Aqui fornecemos duas instalações.

1. Usar o Library Manager

```
1. Open the Arduino IDE and click to the "Sketch" menu and then Include Library > Manage Libraries.
2. Type 'influxdb' in the search box
3. Install the 'InfluxDBClient for Arduino' library
```

2. Instalação Manual

```
1. cd <arduino-sketch-location>/library.
2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino
3. Restart the Arduino IDE
```

- **Passo 2.** Copie os códigos a seguir para o sketch.

```cpp
#include <Wire.h>                                                   //Import the required libraries
#include "DHT.h"
#include "Seeed_BMP280.h"
#include <WiFiMulti.h>
WiFiMulti wifiMulti;
#define DEVICE "ESP32"

#include <InfluxDbClient.h>
#include <InfluxDbCloud.h>

#define WIFI_SSID "xxxxxxxx"                                            //Network Name
#define WIFI_PASSWORD "xxxxxxxxxx"                                        //Network Password
#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //InfluxDB v2 server url, e.g. https://eu-central-1-1.aws.cloud2.influxdata.com (Use: InfluxDB UI -> Load Data -> Client Libraries)
#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //InfluxDB v2 server or cloud API token (Use: InfluxDB UI -> Data -> API Tokens -> <select token>)
#define INFLUXDB_ORG "xxxxxxx"                                                                                               //InfluxDB v2 organization id (Use: InfluxDB UI -> User -> About -> Common Ids )
#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //InfluxDB v2 bucket name (Use: InfluxDB UI ->  Data -> Buckets)
#define TZ_INFO "JST-9"                                                                                                //InfluxDB v2 timezone

DHT dht(4,DHT11);                                                   //DHT and BMP sensor parameters
BMP280 bmp280;

int temp = 0;                                                       //Variables to store sensor readings
int humid = 0;
int pressure = 0;

//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 //InfluxDB client instance with preconfigured InfluxCloud certificate
InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); 

Point sensor("weather");                                            //Data point

void setup() 
{
  Serial.begin(115200);                                             //Start serial communication

  dht.begin();                                                      //Connect to the DHT Sensor
  if(!bmp280.init())                                                //Connect to pressure sensor
    Serial.println("bmp280 init error!");

  WiFi.mode(WIFI_STA);                                              //Setup wifi connection
  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);

  Serial.print("Connecting to wifi");                               //Connect to WiFi
  while (wifiMulti.run() != WL_CONNECTED) 
  {
    Serial.print(".");
    delay(100);
  }
  Serial.println();

  sensor.addTag("device", DEVICE);                                   //Add tag(s) - repeat as required
  sensor.addTag("SSID", WIFI_SSID);

  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //Accurate time is necessary for certificate validation and writing in batches

  if (client.validateConnection())                                   //Check server connection
  {
    Serial.print("Connected to InfluxDB: ");
    Serial.println(client.getServerUrl());
  } 
  else 
  {
    Serial.print("InfluxDB connection failed: ");
    Serial.println(client.getLastErrorMessage());
  }
}

void loop()                                                          //Loop function
{
  temp = dht.readTemperature();                                      //Record temperature
  humid = dht.readHumidity();                                        //Record temperature
  pressure = bmp280.getPressure()/100;                               //Record pressure

  sensor.clearFields();                                              //Clear fields for reusing the point. Tags will remain untouched

  sensor.addField("temperature", temp);                              // Store measured value into point
  sensor.addField("humidity", humid);                                // Store measured value into point
  sensor.addField("pressure", pressure);                             // Store measured value into point


  if (wifiMulti.run() != WL_CONNECTED)                               //Check WiFi connection and reconnect if needed
    Serial.println("Wifi connection lost");

  if (!client.writePoint(sensor))                                    //Write data point
  {
    Serial.print("InfluxDB write failed: ");
    Serial.println(client.getLastErrorMessage());
  }

  Serial.print("Temp: ");                                            //Display readings on serial monitor
  Serial.println(temp);
  Serial.print("Humidity: ");
  Serial.println(humid);
  Serial.print("Pressure: ");
  Serial.println(pressure);
  delay(1000);                                                      //Wait 60 seconds
}
```

**Nota:** Os códigos não estão finalizados. Se você configurar seu token de API e bucket, o código gerado na página de interface do Arduino acessada a partir do seu painel InfluxDB já conterá as informações de configuração corretas, então você só precisará copiá-lo para o seu código.

![InfluxDB Arduino Interface Instructions](https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg)

- **Passo 3.** Faça o upload dos códigos e verifique os resultados.

![image-20220124140133524](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png)

Depois de um tempo, podemos ver que as informações agora estão disponíveis em nosso banco de dados InfluxDB, então sabemos que nosso ESP32 está funcionando corretamente. Agora podemos prosseguir para instalar o Grafana no nosso reTerminal e configurá-lo para exibir as informações em nosso banco de dados.

## Instalar e Configurar o Grafana no reTerminal

Em seguida, vamos instalar o Grafana seguindo as instruções do terminal descritas em seu site para uma [instalação no Debian ou Ubuntu](https://grafana.com/docs/grafana/latest/installation/debian/). Então só precisamos iniciar o Grafana e configurá-lo para reiniciar na inicialização.

![Installing Grafana](https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg)

- **Passo 1.**  Acesse a interface web do Grafana abrindo uma nova aba no navegador, apontando para localhost, porta 3000. Você pode abrir o navegador no seu reTerminal e digitar `http://localhost:3000`

![Grafana Web Interface Localhost3000](https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg)

Em seguida, precisamos configurá-lo para ler os dados do InfluxDB inserindo as informações do servidor e da autenticação. Tudo isso pode ser encontrado por meio da sua interface web do InfluxDB e é bastante semelhante às informações para as quais o seu ESP32 está publicando dados.

- **Passo 2.**  Clique no botão `Setting` e escolha `Data sources`.

![image-20220124144300849](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png)

- **Passo 3.**  Digite `InfluxDB` no filtro e escolha `InfluxDB`.

![image-20220124144322352](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png)

Agora instalamos e configuramos o Grafana no reTerminal

## [Configurar o Grafana para usar Flux](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux)

Com **Flux** selecionado como a linguagem de consulta em sua fonte de dados InfluxDB, vamos configurar a conexão InfluxDB:

- **Passo 1.**  Defina a **Connection** e clique em **Save & Test**. As informações, respectivamente, são:

  - **URL**: Seu [URL do InfluxDB](https://docs.influxdata.com/influxdb/v2.0/reference/urls/).

     ```sh
     http://yourip:8086/
     ```

     [Alterar URL do InfluxDB](https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#)
  - **Organization**: Seu [nome da organização **ou** ID](https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/) do InfluxDB.
  - **Token**: Seu [token de API](https://docs.influxdata.com/influxdb/v2.0/security/tokens/) do InfluxDB.
  - **Default Bucket**: O [bucket](https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/) padrão a ser usado nas consultas Flux.
  - **Min time interval**: O [intervalo de tempo mínimo do Grafana](https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval).

![img](https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png)

O Grafana deve se conectar à fonte de dados InfluxDB 2.0 e retornar os resultados do teste.

- **Passo 2.**  Adicione o painel aqui.

![image-20220124143542830](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png)

- **Passo 3.**  Volte para o `InfluxDB`, siga as instruções abaixo e então crie o script.

![image-20220124143752559](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png)

- **Passo 4.**  Copie os scripts e cole-os no reTerminal.

![image-20220124143812005](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png)

![image-20220124151052928](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png)

- **Passo 5.** Verifique os resultados no reTerminal e as informações devem ser exibidas como abaixo.

![image-20220124164221791](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png)

![image-20220124151124558](https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png)
