---
description: Criando um rastreador de posicionamento global ultracompacto com o XIAO ESP32S3.
title: Rastreador de Geolocalização com XIAO ESP32S3 (Sense)
keywords:
  - localização
  - rastreador
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /geolocation_tracker_with_XIAO_ESP32S3
last_update:
  date: 06/14/2023
  author: Citric
createdAt: '2023-06-14'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/geolocation_tracker_with_XIAO_ESP32S3/
---

# Rastreador de Geolocalização com XIAO ESP32S3

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg" style={{width:1000, height:500}}/></div>

Rastreadores caseiros disponíveis no mercado costumam enfrentar vários problemas. Por exemplo, a precisão de rastreamento é ruim, eles são volumosos e têm requisitos rigorosos para o ambiente em que o rastreador é utilizado. O XIAO atraiu inúmeros criadores com seu excelente controle de tamanho. Então, podemos fazer um Rastreador que possa ser posicionado globalmente usando o XIAO, e apenas o XIAO?

Neste tutorial, exploraremos duas das maneiras mais populares de usar o XIAO (sem o módulo GPS) para criar um rastreador surpreendente.

## Visão Geral

Este artigo apresentará dois tipos de posicionamento: um é obter informações de localização a partir do endereço IP da rede à qual o XIAO está conectado, para realizar o posicionamento. O outro é usando o sistema de posicionamento por Wi-Fi (conhecido como WiPS ou WFPS).

- **Método 1: Localizar por endereço IP**

O princípio de localizar um endereço IP envolve o uso de um banco de dados que mapeia endereços IP para locais físicos. Esse processo é comumente conhecido como geolocalização.

A pesquisa de endereço IP envolve o uso de um lookup DNS reverso para recuperar o nome de domínio associado ao endereço IP. O nome de domínio pode então ser usado para identificar a localização geográfica do servidor que hospeda o site ou serviço.

O mapeamento de endereço IP envolve o uso de um banco de dados que mapeia endereços IP para locais físicos. O banco de dados pode conter informações como cidade, região e país associados a cada endereço IP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/iplocation.png" style={{width:700, height:'auto'}}/></div>

A precisão da geolocalização por endereço IP pode variar dependendo do método utilizado e da qualidade dos dados disponíveis. Em geral, a geolocalização por endereço IP é mais precisa para dispositivos fixos, como computadores de mesa e servidores, que normalmente estão associados a um local físico fixo. Dispositivos móveis, como smartphones e tablets, podem ser mais difíceis de localizar com precisão, pois podem se mover e se conectar a diferentes redes Wi-Fi.

- **Método 2: Localizar por [WFPS](https://en.wikipedia.org/wiki/Wi-Fi_positioning_system)**

O sistema de posicionamento por Wi-Fi é um sistema de geolocalização que usa as características dos pontos de acesso Wi-Fi próximos e de outros pontos de acesso sem fio para descobrir onde um dispositivo está localizado.

Ele é usado onde a navegação por satélite, como o GPS, é inadequada devido a várias causas, incluindo múltiplos caminhos de sinal e bloqueio de sinal em ambientes internos, ou onde adquirir um sinal de satélite levaria muito tempo. Tais sistemas incluem GPS assistido, serviços de posicionamento urbano por meio de bancos de dados de hotspots e sistemas de posicionamento interno. O posicionamento por Wi-Fi aproveita o crescimento rápido, no início do século 21, de pontos de acesso sem fio em áreas urbanas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/wfps.png" style={{width:700, height:'auto'}}/></div>

A técnica de localização mais comum e difundida usada para posicionamento com pontos de acesso sem fio é baseada na medição da intensidade do sinal recebido (received signal strength indication ou RSSI) e no método de "fingerprinting". Os parâmetros típicos úteis para geolocalizar o ponto de acesso sem fio incluem seu SSID e endereço MAC. A precisão depende do número de pontos de acesso próximos cujas posições foram inseridas no banco de dados. O banco de dados de hotspots Wi-Fi é preenchido correlacionando dados de localização GPS de dispositivos móveis com endereços MAC de hotspots Wi-Fi. As possíveis flutuações de sinal que podem ocorrer podem aumentar erros e imprecisões no caminho do usuário. Para minimizar flutuações no sinal recebido, existem certas técnicas que podem ser aplicadas para filtrar o ruído.

Esta é a base teórica para a capacidade do XIAO de obter uma posição sem a ajuda de um módulo GPS. Também compararemos a melhor maneira de obter o posicionamento com a ajuda dos dois métodos acima, combinados com o uso do Round Display, que exibe as coordenadas como um mapa na tela. Abaixo está o índice e um resumo do artigo.

- [Conectar à rede e obter IP público com o XIAO ESP32S3](#Conectar-à-rede-e-obter-IP-público-com-o-XIAO-ESP32S3)
- [Obter coordenadas de localização com a plataforma ipstack](#Obter-coordenadas-de-localização-com-a-plataforma-ipstack)
- [Baixar imagens estáticas do Google Maps via serviço HTTPS](#Baixar-imagens-estáticas-do-Google-Maps-via-serviço-HTTPS)
- [Exibir o mapa de localização no Round Display](#Exibir-o-mapa-de-localização-no-Round-Display)
- [Posicionamento usando o método WFPS](#Posicionamento-usando-o-método-WFPS)
- [Atualizações em tempo real sobre a localização mais recente](#Atualizações-em-tempo-real-sobre-a-localização-mais-recente)

## Primeiros Passos

Para concluir este projeto com sucesso, talvez você precise usar o seguinte hardware. Qualquer um dos XIAO ESP32 é suportado.

<div style={{textAlign:'center'}}>
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32S3</th>
        <th>Seeed Studio XIAO ESP32S3 Sense</th>
        <th>Seeed Studio Round Display for XIAO</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
          </div>
        </td>
        <td>
          <div style={{textAlign:'center'}}>
            <a href="https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
            </a>
          </div>
        </td>
    </tr>
  </table>
</div>

Além disso, você pode ainda preparar uma pequena bateria de lítio, um cartão microSD e um case, para compor uma forma completa de Rastreador.

<iframe width="100%" height="500" src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/install.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## Conectar à rede e obter IP público com o XIAO ESP32S3

:::tip
Se você não está familiarizado com os recursos de rede do XIAO ESP32S3, pode ler sobre o [uso de WiFi com Seeed Studio XIAO ESP32S3 (Sense)](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_wifi_usage/).
:::

No tutorial sobre o uso básico do XIAO ESP32S3, já dominamos o uso do XIAO ESP32S3 para se conectar à rede.

```cpp
#include <WiFi.h>

// For network
const char* ssid = "<YOUR_WIFI_SSID_HERE>";
const char* password = "<YOUR_WIFI_PW_HERE>";

void setup() {
  Serial.begin(115200);

  Serial.print("Try to connect to ");
  Serial.println(ssid);
  WiFi.begin(ssid, password);
  while(WiFi.status() != WL_CONNECTED){
    Serial.print(".");
  }
  Serial.println("Wi-Fi Connected!");
}

void loop() {
}
```

A essência central de usar endereços IP para buscar locais é obter o endereço IP do XIAO. Pode então parecer natural pensar que precisamos usar a função `WiFi.localIP()` para buscá-lo.

Na realidade, porém, o roteador atribuirá ao XIAO um endereço IP interno, algo como 192.168.xxx.xxx, que não pode ter informações de localização consultadas. O que precisamos é de um IP público. Portanto, precisamos usar o seguinte.

```cpp
// Get local IP address
IPAddress publicIP;
if (WiFi.hostByName("ip-api.com", publicIP)) {
    Serial.print("Public IP address: ");
    Serial.println(publicIP);
} else {
    Serial.println("Failed to get public IP address");
    return;
}
```

Então podemos obter o seguinte efeito, que é o primeiro passo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/7.png" style={{width:600, height:'auto'}}/></div>

## Obter coordenadas de localização com a plataforma ipstack

O uso de endereços IP para localização geralmente exige algumas informações de biblioteca de servidor público. Podemos obter essas informações de servidor com a ajuda da interface de API de alguma plataforma. Por exemplo, neste tutorial, usaremos a plataforma [ipstack](https://ipstack.com).

O ipstack oferece uma poderosa API de IP para geolocalização em tempo real, capaz de buscar dados de localização precisos e avaliar ameaças de segurança originadas de endereços IP de risco. Os resultados são entregues em milissegundos nos formatos JSON ou XML.

O ipstack oferece um serviço de busca gratuito/pago, a [lista de preços](https://ipstack.com/product) pode ser encontrada na imagem abaixo. Neste exemplo, estamos apenas demonstrando exemplos e usar o **serviço gratuito (100 consultas/mês)** é suficiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/8.png" style={{width:800, height:'auto'}}/></div>

### Etapa 1. Obter a Chave de Acesso à API do ipstack

Se esta é a sua primeira vez usando o ipstack, então você precisará [registrar uma nova conta](https://ipstack.com/signup/free).

Depois de se registrar e fazer login, você poderá ver sua Chave de API; copie-a e salve-a em um lugar seguro, pois a usaremos mais tarde.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/9.png" style={{width:800, height:'auto'}}/></div>

### Etapa 2. Aprenda como usar a API do ipstack

O ipstack fornece uma [documentação](https://ipstack.com/documentation) detalhada explicando como usar a API do ipstack.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/10.png" style={{width:800, height:'auto'}}/></div>

Muito simples, certo? Basta enviar o **endereço do servidor + endereço IP + API Key**.

Em seguida, precisamos saber que tipo de mensagem JSON o ipstack irá retornar para nós e extrair as informações de que precisamos, como cidade, país, latitude e longitude.

```json
{
  "ip": "134.201.250.155",
  "hostname": "134.201.250.155",
  "type": "ipv4",
  "continent_code": "NA",
  "continent_name": "North America",
  "country_code": "US",
  "country_name": "United States",
  "region_code": "CA",
  "region_name": "California",
  "city": "Los Angeles",
  "zip": "90013",
  "latitude": 34.0453,
  "longitude": -118.2413,
  "location": {
    "geoname_id": 5368361,
    "capital": "Washington D.C.",
    "languages": [
        {
          "code": "en",
...
```

Então, só precisamos extrair as informações de que precisamos com a ajuda da biblioteca ArduinoJSON.

### Etapa 3. Obter as coordenadas do endereço IP via serviço http

Resumindo, começamos instalando a biblioteca **ArduinoJSON**. Ela pode ser pesquisada e baixada diretamente pela Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/11.png" style={{width:400, height:'auto'}}/></div>

Em seguida, escrevemos a função `getLocation()`, que usamos para obter as informações de país, cidade, latitude e longitude retornadas pelo ipstack e imprimi-las.

```cpp
// For ipstack
const char* IPStack_key = "<YOUR_API_KEY_HERE>";
String ip_address;

// Obtain the approximate coordinate position based on the current IP address of XIAO.
bool getLocation(){
  // Make HTTP request to IPStack API
  HTTPClient http;
  String url = "http://api.ipstack.com/" + String(ip_address) + "?access_key=" + String(IPStack_key);
  Serial.println("Requesting URL: " + url);
  http.begin(url);
  int httpCode = http.GET();

  // Parse JSON response
  if (httpCode == 200) {
    String payload = http.getString();
    Serial.println("Response payload: " + payload);
    DynamicJsonDocument doc(1024);
    deserializeJson(doc, payload);
    String country_name = doc["country_name"].as<String>();
    String region_name = doc["region_name"].as<String>();
    String city = doc["city"].as<String>();
    latitude = doc["latitude"].as<double>();
    longitude = doc["longitude"].as<double>();
    Serial.println("Country: " + country_name);
    Serial.println("Region: " + region_name);
    Serial.println("City: " + city);
    Serial.println("Latitude: " + String(latitude));
    Serial.println("Longitude: " + String(longitude));
    http.end(); // Close connection
    return true;
  } else {
    Serial.println("HTTP error code: " + String(httpCode));
    http.end(); // Close connection
    return false;
  }
}
```

No programa acima, substitua a ipstack API Key pela sua própria.

Em seguida, podemos observar quão precisa é a localização por endereço IP. Os [pontos marcados em vermelho](https://www.google.com/maps/place/22%C2%B034'26.5%22N+113%C2%B054'53.1%22E/@22.5729214,113.9171335,16z/data=!4m4!3m3!8m2!3d22.5740278!4d113.91475?hl=zh-CN&entry=ttu) no mapa abaixo são a localização exata de onde estou de acordo com o endereço IP. E a outra ponta da linha vermelha é a localização real de onde estou. Há uma diferença de 2,4 km entre elas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/1.png" style={{width:1000, height:'auto'}}/></div>

Pode-se ver que o erro nesse tipo de posicionamento está na faixa de quilômetros, o que está longe do que esperaríamos de um rastreador.

## Baixar imagens estáticas do Google Maps via serviço HTTPS

Coordenadas de latitude e longitude não são intuitivas para nós. Mesmo que contenham informações sobre países e cidades. Então nos perguntamos se seria possível marcar essas coordenadas de latitude e longitude em um mapa e exibi-las na tela. Então encontramos o serviço de mapas do Google Cloud.

Antes de começarmos, acho importante que você entenda a [precificação do serviço Google Maps](https://mapsplatform.google.com/pricing/) para decidir se vale a pena prosseguir.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/12.png" style={{width:800, height:'auto'}}/></div>

Se você é um usuário registrado pela primeira vez, terá **US\$300** de crédito gratuito. Aqui estamos usando principalmente a Maps Static API, que custa **US\$2,00 por 1000** chamadas.

### Etapa 4. [Configure seu projeto no Google Cloud](https://developers.google.com/maps/documentation/elevation/cloud-setup) e conclua as instruções de configuração a seguir

### Etapa 5. Ative a Google Maps API

Você precisa de uma chave google API para validar junto à Google API. Vá até o [Google Developers Console](https://console.developers.google.com/apis) para ativar a GeoLocation API. Sem essa chave de API você receberá uma mensagem de erro como resposta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/2.png" style={{width:1000, height:'auto'}}/></div>

Depois de obter a API, mantenha-a em um local seguro, pois iremos usá-la nas etapas de programação posteriores.

:::note
Se você tiver preocupações sobre o ambiente em que está usando a API no momento, pode ativar restrições nas chamadas de API para evitar cobranças adicionais por uso indevido. Ativar certas restrições pode exigir alterações no seu programa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/4.png" style={{width:1000, height:'auto'}}/></div>
:::

## Exibir o mapa de localização no Round Display

:::tip
Se você estiver usando o Round Display for XIAO pela primeira vez, talvez precise consultar o [Wiki aqui](https://wiki.seeedstudio.com/pt-br/get_start_round_display/) para configurar seu ambiente Arduino para a tela redonda.
:::

### Etapa 6. Aprenda como chamar a Google Cloud Static Maps API

Clique [aqui](https://developers.google.com/maps/documentation/maps-static/overview) para ler a documentação da Google Cloud Static Maps API.

A documentação fornece um código de exemplo para usar a API, como segue:

```
https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=YOUR_API_KEY&signature=YOUR_SIGNATURE
```

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/staticmap.png" style={{width:700, height:'auto'}}/></div>

Uma URL da Maps Static API deve ter o seguinte formato:

```
https://maps.googleapis.com/maps/api/staticmap?parameters
```

A Maps Static API define imagens de mapa usando os seguintes parâmetros de URL:

- `center` (obrigatório se não houver marcadores) define o centro do mapa, equidistante de todas as bordas do mapa. Esse parâmetro recebe uma localização como um par `{latitude,longitude}` separado por vírgula (por exemplo, "40.714728,-73.998672") ou um endereço em forma de string (por exemplo, "city hall, new york, ny") identificando uma localização única na superfície da Terra.
- `zoom` (obrigatório se não houver marcadores) define o nível de zoom do mapa, que determina o nível de ampliação do mapa. Esse parâmetro recebe um valor numérico correspondente ao nível de zoom da região desejada.
- `size` (obrigatório) define as dimensões retangulares da imagem do mapa. Esse parâmetro recebe uma string no formato `{horizontal_value}x{vertical_value}`.
- `maptype` (opcional) define o tipo de mapa a ser construído. Há vários valores possíveis para maptype, incluindo roadmap, satellite, hybrid e terrain.
- `markers` (opcional) definem um ou mais marcadores a serem anexados à imagem em locais especificados. Esse parâmetro recebe uma única definição de marcador com parâmetros separados pelo caractere pipe (|). Vários marcadores podem ser colocados dentro do mesmo parâmetro markers desde que apresentem o mesmo estilo; você pode adicionar marcadores adicionais com estilos diferentes adicionando parâmetros markers adicionais. Observe que, se você fornecer marcadores para um mapa, não precisa especificar os parâmetros center e zoom (normalmente obrigatórios).
- `key` (obrigatório) permite monitorar o uso da API pela sua aplicação no Google Cloud Console e garante que o Google possa entrar em contato com você sobre sua aplicação, se necessário.

:::tip
Acima são mostrados apenas os parâmetros mais básicos; se você precisar personalizar esse mapa estático, pode clicar **[aqui](https://developers.google.com/maps/documentation/maps-static/start)** para ler a lista completa de parâmetros.
:::

Em resumo, podemos então juntar tudo para formar uma string completa para envio.

```cpp
// For google static maps
const char * host = "maps.googleapis.com";
const String defaultPath = "/maps/api/staticmap?center=";
const String Googlemaps_key = "<YOUR_API_KEY_HERE>";
int zoomLevel = 14;
double latitude;
double longitude;

// Stitching to form commands sent to Google Maps
String getPath(){
  String newPath = defaultPath;
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&zoom=";
  newPath += String(zoomLevel);
  newPath += "&size=240x240";
  newPath += "&maptype=roadmap";
  newPath += "&markers=size:tiny%7Ccolor:red%7C";
  newPath += latitude;
  newPath += ",";
  newPath += longitude;
  newPath += "&format=jpg-baseline";
  newPath += "&key=";
  newPath += Googlemaps_key;
  Serial.println(newPath);
  return newPath;
}
```

Substitua o código acima pela sua própria Google Cloud Maps API.

### Etapa 7. A imagem retornada é obtida via HTTPS e gravada no cartão microSD

Precisamos de um meio de armazenamento grande o suficiente para guardar as imagens estáticas retornadas, de modo que possam ser lidas no programa que as exibe na tela. O Round Display, por acaso, possui suporte a cartão microSD.

```cpp
// Static images of coordinates from Google Cloud Services
bool getStaticMapImage(const char *host, const char *path, String fileName){
  int contentLength = 0;
  int httpCode;

  WiFiClientSecure client;

  client.setCACert(GlobalSignCA);
  client.connect(host, 443);

  Serial.printf("Trying: %s:443...", host);

  if(!client.connected()){
    client.stop();
    Serial.printf("*** Can't connect. ***\n-------\n");
    return false;
  }

  Serial.println("HTTPS Connected!");
  client.print("GET ");
  client.print(path);
  client.print(" HTTP/1.0\r\nHost: ");
  client.print(host);
  client.print("\r\nUser-Agent: ESP32S3\r\n");
  client.print("\r\n");

  while(client.connected()){
    String header = client.readStringUntil('\n');
    if(header.startsWith(F("HTTP/1."))){
      httpCode = header.substring(9, 12).toInt();
      if(httpCode != 200){
        client.stop();
        return false;
      }
    }
    if(header.startsWith(F("Content-Length: "))){
      contentLength = header.substring(15).toInt();
    }
    if(header == F("\r")){
      break;
    }

  }
  if(!(contentLength > 0)){
    client.stop();
    return false;
  }
  fs::File f = SD.open(fileName, "w");
  if(!f){
    Serial.println(F("FILE OPEN FAILED"));
    client.stop();
    return false;
  }
  int remaining = contentLength;
  int received;
  uint8_t buff[512] = {0};
  while(client.available() && remaining > 0){
    received = client.readBytes(buff, ((remaining > sizeof(buff)) ? sizeof(buff) : remaining));
    f.write(buff, received);
    if(remaining > 0){
      remaining -= received;
    }
    yield();
  }
  f.close();
  client.stop();
  Serial.println("DOWNLOAD END");
  return (remaining == 0 ? true : false);
}
```

### Etapa 8. Exibir imagens JPEG no Round Display

Em geral, a biblioteca gráfica TFT suportada pelo Round Display só permite exibir imagens em formato BMP; se precisarmos exibir imagens em outros formatos, precisamos usar algumas bibliotecas de terceiros; aqui usamos a biblioteca **[TJpg_Decoder](https://github.com/Bodmer/TJpg_Decoder)**.

Baixe esta biblioteca como um arquivo zip e adicione-a ao seu ambiente Arduino.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Bodmer/TJpg_Decoder" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Reescrevemos nosso programa consultando o programa de exemplo fornecido pelo repositório:

```cpp
// This next function will be called during decoding of the jpeg file to
// render each block to the TFT.  If you use a different TFT library
// you will need to adapt this function to suit.
bool tft_output(int16_t x, int16_t y, uint16_t w, uint16_t h, uint16_t* bitmap)
{
   // Stop further decoding as image is running off bottom of screen
  if ( y >= tft.height() ) return 0;

  // This function will clip the image block rendering automatically at the TFT boundaries
  tft.pushImage(x, y, w, h, bitmap);

  // Return 1 to decode next block
  return 1;
}

void setup() {
  // Initialise the TFT
  tft.init();
  tft.setRotation(2);
  tft.fillScreen(TFT_BLACK);
  tft.setSwapBytes(true); // We need to swap the colour bytes (endianess)

  // Initialise SD before TFT
  if (!SD.begin(SD_CS)) {
    Serial.println(F("SD.begin failed!"));
    return;
  }
  Serial.println("\r\nInitialisation done.");

  // The jpeg image can be scaled by a factor of 1, 2, 4, or 8
  TJpgDec.setJpgScale(1);

  // The decoder must be given the exact name of the rendering function above
  TJpgDec.setCallback(tft_output);

  if(WiFi.status() == WL_CONNECTED){
    if(getLocation() && getStaticMapImage(host, getPath().c_str(), mapFile)){
      TJpgDec.drawSdJpg(0, 0, mapFile);
    }
  }
}
```

O programa completo para este projeto pode ser encontrado nesta ocasião.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/IP-address-location-method/IP-address-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Execute o programa e você poderá ver a saída do monitor serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/5.png" style={{width:700, height:'auto'}}/></div>

A tela também exibirá uma imagem do local correspondente ao seu endereço IP.

## Posicionamento usando o método WFPS

Como comparamos nas etapas anteriores, a precisão da localização usando endereços IP é realmente péssima. Então, em seguida, vamos aprimorar o procedimento usando o método WFPS e ver se há alguma mudança na precisão.

Claro, é difícil para nós implementarmos esse algoritmo e ainda dependemos da [Geolocation API](https://developers.google.com/maps/documentation/geolocation/overview) no serviço Google Maps.

A Geolocation API é um serviço que aceita uma solicitação HTTPS com a torre de celular e os pontos de acesso WiFi que um cliente móvel pode detectar. Ela retorna coordenadas de latitude/longitude e um raio indicando a precisão do resultado para cada entrada válida.

Na comunidade, **[gmag11](https://github.com/gmag11)** e sua equipe escreveram bibliotecas que podem chamar esse serviço diretamente. Podemos usá-las diretamente aqui.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/WifiLocation/tree/master" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Enquanto isso, você precisará da biblioteca **QuickDebug** para Mensagens de Depuração.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/gmag11/QuickDebug" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

Em seguida, só precisamos modificar a função `getLocation()`.

```cpp
//For google geolocation
WifiLocation location (Googlemaps_key);

// Set time via NTP, as required for x.509 validation
void setClock () {
    configTime (0, 0, "pool.ntp.org", "time.nist.gov");

    Serial.print ("Waiting for NTP time sync: ");
    time_t now = time (nullptr);
    while (now < 8 * 3600 * 2) {
        delay (500);
        Serial.print (".");
        now = time (nullptr);
    }
    struct tm timeinfo;
    gmtime_r (&now, &timeinfo);
    Serial.print ("\n");
    Serial.print ("Current time: ");
    Serial.print (asctime (&timeinfo));
}

// Get the exact coordinates of XIAO by WiFi location method
void getLocation(){
  setClock();
  location_t loc = location.getGeoFromWiFi();

  Serial.println("Location request data");
  Serial.println(location.getSurroundingWiFiJson()+"\n");
  Serial.println ("Location: " + String (loc.lat, 7) + "," + String (loc.lon, 7));
  latitude = loc.lat;
  longitude = loc.lon;
  Serial.println ("Accuracy: " + String (loc.accuracy));
  Serial.println ("Result: " + location.wlStatusStr (location.getStatus ()));
}
```

Vamos ver como as coordenadas obtidas por meio do WFPS diferem da posição real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/13.png" style={{width:1000, height:'auto'}}/></div>

O desvio de posição já está em torno de 1 km! Este desempenho é ainda melhor do que alguns módulos GPS.

## Atualizações em tempo real da última localização

Então, para a etapa final, vamos finalizar este rastreador de posicionamento global. Deixe-o implementar uma atualização automática do mapa.

:::tip
Tenha uma estimativa do consumo de tarifas do seu serviço Google Cloud ao usar este programa, caso contrário chamadas frequentes à API podem resultar em cobranças elevadas!
:::

```cpp
void loop() {
  // Make sure you pay attention to the number of API calls! This could cost you extra spending!

  if(WiFi.status() == WL_CONNECTED){
    getLocation();
    if(latitude != last_latitude || longitude != last_longitude){  // Update of the location image is performed only when the location is updated
      last_latitude = latitude;
      last_longitude = longitude;
      if(getStaticMapImage(host, getPath().c_str(), mapFile)){
        TJpgDec.drawSdJpg(0, 0, mapFile);
      }
    }
  }
  delay(10000);
}
```

No loop principal, vamos obter a rede ao redor a cada 10 segundos e atualizar as coordenadas da localização atual. Se as coordenadas de localização retornadas forem diferentes das da última vez, o mapa será baixado novamente e atualizado na tela.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/6.png" style={{width:800, height:'auto'}}/></div>

Com nossa carcaça impressa em 3D, não parece mesmo um rastreador!

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/final.jpg" style={{width:800, height:'auto'}}/></div>

Por fim, o código completo do programa para obter o posicionamento via método WFPS está disponível no botão abaixo.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO-ESP32S3-Geolocation/blob/main/WFPS-location-method/WFPS-location-method.ino" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar o Código</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

## Recursos

- **[GITHUB]** [Código-fonte](https://github.com/limengdu/XIAO-ESP32S3-Geolocation)
- **[STP]** [Projeto da carcaça do XIAO ESP32S3 Sense (parte superior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(top).stp)
- **[STP]** [Projeto da carcaça do XIAO ESP32S3 Sense (parte inferior)](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/res/XIAO-ESP32S3-Sense-housing-design(bottom).stp)

## Solução de Problemas

### P1: Por que não estou obtendo o endereço IP exato usando a função `WiFi.hostByName()`?

Ao usar a função WiFi.hostByName() para consultar o endereço IP público do roteador, certifique-se de que o seu roteador possa ser resolvido para o endereço IP correspondente pelo resolvedor de DNS. Se o seu roteador usar servidores DNS fornecidos pelo seu provedor de internet (ISP), você pode encontrar falhas de resolução de DNS. Nesse caso, você pode tentar usar servidores DNS alternativos, como os servidores DNS públicos do Google 8.8.8.8 ou 8.8.4.4.

Se você ainda não conseguir consultar o endereço IP público correto, isso pode ser devido a problemas de conectividade de rede ou outras questões de configuração de rede. Você pode tentar os seguintes métodos para resolver o problema:

1. Tente serviços alternativos de consulta de endereço IP público: Se você estiver usando o serviço api.ipify.org para consultar o endereço IP público e ainda não conseguir obter o endereço IP correto, pode tentar usar serviços alternativos de consulta de IP público, como ip-api.com ou whatismyip.com.

2. Verifique a configuração do roteador: Verifique a configuração do seu roteador para garantir que as funções de NAT e encaminhamento de porta estejam configuradas corretamente e não estejam bloqueando o acesso à rede externa. Você também pode tentar ativar a funcionalidade UPnP no roteador para configurar o encaminhamento de porta automaticamente.

3. Reinicie o roteador e o dispositivo ESP32S3: Às vezes, reiniciar o roteador e o dispositivo ESP32S3 pode resolver problemas de conectividade e configuração de rede.

Se isso ainda não resolver o problema, recomendamos usar o segundo método ou atribuir um valor ao XIAO diretamente após o roteador consultar o IP público.

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
