---
description: Uso de WiFi com o Seeed Studio XIAO ESP32C6.
title: Uso de WiFi
keywords:
  - esp32c6
  - xiao
  - arduino
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_wifi_usage_esp32c6
sidebar_position: 3
last_update:
  date: 04/11/2024
  author: Spencer
createdAt: '2022-11-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_wifi_usage_esp32c6/
---

# Uso de WiFi com Seeed Studio XIAO ESP32C6

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO ESP32C6</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/xiaoc6.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C6-p-5884.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

O Seeed Studio XIAO ESP32C6 é uma placa de desenvolvimento embarcada que oferece desempenho RF excepcional, graças ao suporte para comunicação sem fio dupla 2.4GHz Wifi - 802.11b/g/n e Bluetooth Low Energy (BLE) 5.0. Essa capacidade permite que o XIAO ESP32C6 forneça conectividade sem fio confiável e de alta velocidade para uma ampla gama de aplicações de Internet das Coisas (IoT). A placa possui uma antena cerâmica integrada, o que elimina a necessidade de uma antena externa e simplifica o processo de projeto. O chip ESP32C6 também oferece baixo consumo de energia, tornando-o adequado para dispositivos IoT alimentados por bateria. Neste tutorial, vamos explorar como aproveitar os recursos de Wi-Fi do XIAO ESP32C6 para se conectar a uma rede Wi-Fi e executar tarefas básicas de rede.

:::tip
O GPIO14 é usado para selecionar entre o uso da antena interna ou de uma antena externa. Antes disso, você precisa definir o nível baixo no GPIO3 para ativar essa função. Se o GPIO14 for definido em nível baixo, é usada a antena interna; se for definido em nível alto, é usada a antena externa. O padrão é nível baixo. Se você quiser defini-lo como alto, pode consultar o código abaixo.

```cpp
void setup() {
  pinMode(3, OUTPUT);
  digitalWrite(3, LOW);//turn on this function
  delay(100);
  pinMode(14, OUTPUT); 
  digitalWrite(14, HIGH);//use external antenna
}
```

:::

## As interfaces mais comuns da biblioteca WiFi

O ESP32-C6 oferece uma ampla gama de funções de rede WiFi. Em geral, podemos ver as funções da biblioteca WiFi no pacote interno do ESP32 e escolher a função correspondente para obter a funcionalidade desejada. A seguir, listaremos algumas interfaces comumente usadas e apresentaremos seu uso.

### Funções genéricas de WiFi

- `WiFiGenericClass::getHostname()` -- É uma função na biblioteca WiFi para ESP32 que retorna o hostname do dispositivo como uma string. O hostname é um nome exclusivo que identifica o dispositivo na rede. Essa função obtém o hostname que foi previamente definido usando `WiFiGenericClass::setHostname()`. Se nenhum hostname tiver sido definido, o hostname padrão será retornado.

- `WiFiGenericClass::persistent(bool persistent)` -- É um método usado para habilitar ou desabilitar o modo persistente da biblioteca WiFi do ESP32. Quando o modo persistente está habilitado, a configuração de Wi-Fi é armazenada em memória não volátil (NVM) e é mantida mesmo após um ciclo de energia ou reset. Quando o modo persistente está desabilitado, a configuração é armazenada na RAM e é perdida após um ciclo de energia ou reset.

 	- **Parâmetros de entrada**
  		- **persistent**: Se o argumento for true, o modo persistente é habilitado. Se o argumento for false, o modo persistente é desabilitado.

- `WiFiGenericClass::enableLongRange(bool enable)` -- A função é usada para habilitar ou desabilitar o recurso Long Range (LR) do módulo WiFi. Quando habilitado, o recurso LR permite que o módulo se conecte a redes WiFi que estão mais distantes do que o normal, porém com taxas de dados menores.

 	- **Parâmetros de entrada**
  		- **enable**: O parâmetro deve ser definido como true para habilitar o recurso e false para desabilitá-lo.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- A função é usada para definir o modo WiFi do dispositivo.

 	- **Parâmetros de entrada**
  		- **m**: O parâmetro m especifica o modo a ser definido, que pode ser uma das seguintes constantes definidas no enum wifi_mode_t:
   			- **WIFI_MODE_NULL**: Desabilita tanto o modo estação WiFi quanto o modo ponto de acesso.
   			- **WIFI_MODE_STA**: Habilita o modo estação WiFi para se conectar a uma rede WiFi existente.
   			- **WIFI_MODE_AP**: Habilita o modo ponto de acesso para criar uma nova rede WiFi.
   			- **WIFI_MODE_APSTA**: Habilita tanto o modo estação quanto o modo ponto de acesso WiFi.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- A função define o modo de economia de energia para o módulo WiFi.

 	- **Parâmetros de entrada**
  		- **sleepType**: O parâmetro sleepType é um tipo enumerado que especifica o tipo de modo de economia de energia a ser usado. Existem três tipos possíveis:
   			- **WIFI_PS_NONE**: Este é o modo de suspensão padrão, no qual o módulo WiFi não entra em modo de economia de energia.
   			- **WIFI_PS_MIN_MODEM**: Nesse modo, o módulo WiFi desliga seu modem enquanto mantém a conexão com o ponto de acesso (AP).
   			- **WIFI_PS_MAX_MODEM**: Nesse modo, o módulo WiFi desliga tanto o modem quanto a estação, o que resulta em desconexão do AP.

### Funções STA

- `WiFiSTAClass::status()` -- Retorna o status da conexão.

 	- **Saída**: um dos valores definidos em wl_status_t.
  		- **WL_NO_SHIELD**: Este código de status indica que o módulo Wi-Fi não está presente.
    - **WL_IDLE_STATUS**: Este código de status indica que o módulo Wi-Fi não está executando nenhuma operação.
    - **WL_NO_SSID_AVAIL**: Este código de status indica que nenhuma rede Wi-Fi foi encontrada durante a varredura.
    - **WL_SCAN_COMPLETED**: Este código de status indica que a varredura Wi-Fi foi concluída com sucesso.
    - **WL_CONNECTED**: Este código de status indica que o ESP32 está conectado com sucesso a uma rede Wi-Fi.
    - **WL_CONNECT_FAILED**: Este código de status indica que a conexão com a rede Wi-Fi falhou.
    - **WL_CONNECTION_LOST**: Este código de status indica que a conexão com a rede Wi-Fi foi perdida.
    - **WL_DISCONNECTED**: Este código de status indica que o ESP32 estava previamente conectado a uma rede Wi-Fi, mas atualmente não está conectado a nenhuma rede.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia a conexão WiFi com um AP WPA2 Enterprise.

 	- **Parâmetros de entrada** (Opcionais)
  		- **ssid**: Ponteiro para a string SSID.
  		- **method**: O método de autenticação do WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
  		- **wpa2_identity**: Ponteiro para a entidade
  		- **wpa2_username**: Ponteiro para o nome de usuário
  		- **wpa2_password**: Ponteiro para a senha.
  		- **ca_pem**: Ponteiro para uma string com o conteúdo de um arquivo .pem com o certificado da CA
  		- **client_crt**: Ponteiro para uma string com o conteúdo de um arquivo .crt com o certificado do cliente
  		- **client_key**: Ponteiro para uma string com o conteúdo de um arquivo .key com a chave do cliente
  		- **channel**: Opcional. Canal do AP
  		- **bssid**: Opcional. BSSID / MAC do AP
  		- **connect**: Opcional. chama connect

- `WiFiSTAClass::reconnect()` -- Forçará uma desconexão e então iniciará a reconexão ao AP.

 	- **Saída**: True/False.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Desconecta da rede.

 	- **Parâmetros de entrada**
  		- **wifioff**: wifioff `true` para desligar o rádio Wi-Fi.
  		- **eraseap**: eraseap `true` para apagar a configuração do AP da memória NVS.

 	- **Saída**: True/False.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Altera as configurações de IP desabilitando o cliente dhcp.

 	- **Parâmetros de entrada**
  		- **local_ip**: Configuração de IP estático.
  		- **gateway**: Configuração de gateway estático.
  		- **subnet**: Máscara de sub-rede estática.
  		- **dns1**: Servidor DNS estático 1.
  		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Obsoleto. Configura a estação ESP32 para se conectar automaticamente ou não ao AP (que está registrado) quando ligada. A conexão automática é habilitada por padrão.

 	- **Parâmetros de entrada**
  		- **autoConnect**: bool autoConnect.

 	- **Saída**: False.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Aguarda a conexão WiFi atingir um resultado.

 	- **Parâmetros de entrada**
  		- **timeoutLength**: O parâmetro especifica o tempo máximo de espera para que uma conexão seja estabelecida, em milissegundos.

 	- **Saída**: um dos valores definidos em wl_status_t.

- `WiFiSTAClass::localIP()` -- Obtém o endereço IP da interface estação.

 	- **Saída**: IPAddress IP da estação.

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- Obtém o endereço MAC da interface estação.

 	- **Parâmetros de entrada**
  		- **mac** (Opcional): Ponteiro para o array uint8_t com comprimento WL_MAC_ADDR_LENGTH.

 	- **Saída**: Ponteiro para uint8_t *.

- `WiFiSTAClass::SSID()` -- Retorna o SSID atual associado à rede.

 	- **Saída**: SSID.

- `WiFiSTAClass::RSSI(void)` -- Retorna o RSSI da rede atual.

 	- **Saída**: RSSI.

### Funções AP

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta é uma função da biblioteca WiFi do ESP32-C6. Ela é usada para configurar um SoftAP (ponto de acesso por software), que permite que outros dispositivos se conectem ao ESP32-C6 e acessem seus recursos.

 	- **Parâmetros de entrada**
  		- **ssid**:              Ponteiro para o SSID (máx. 63 caracteres).
    - **passphrase**:        (Para WPA2, mínimo 8 caracteres; para aberto use NULL).
    - **channel**:           Número do canal WiFi, 1 - 13.
    - **ssid_hidden**:       Ocultação de rede (0 = transmitir SSID, 1 = ocultar SSID).
    - **max_connection**:    Máximo de clientes conectados simultaneamente, 1 - 4.

 	- **Saída**: True/False.

- `WiFiAPClass::softAPgetStationNum()` -- Obtenha a contagem de estações / clientes que estão conectados à interface softAP.

 	- **Output**: Contagem de estações.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Uma função para configurar o SoftAP.

 	- **Input Parameters**
  		- **local_ip**:      IP do ponto de acesso.
  		- **gateway**:       IP do gateway.
  		- **subnet**:        Máscara de sub-rede.

 	- **Output**: True/False.

- `WiFiAPClass::softAPIP()` -- Obtenha o endereço IP da interface softAP.

 	- **Output**: IPAddress IP do softAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtenha o endereço MAC da interface softAP.

 	- **Input Parameters**
  		- **mac** (Optional):   Ponteiro para o array uint8_t com comprimento WL_MAC_ADDR_LENGTH.

 	- **Output**: Ponteiro para uint8_t* ou String mac.

### Função de varredura WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Inicia a varredura das redes WiFi disponíveis.

 	- **Input Parameters**
  		- **async**: O parâmetro é um valor booleano que determina se a varredura deve ser realizada de forma assíncrona. Se definido como true, a função retorna imediatamente e os resultados da varredura podem ser obtidos posteriormente chamando a função getScanResults(). Se definido como false, a função será bloqueada até que a varredura seja concluída.
  		- **show_hidden**: O parâmetro é um valor booleano que determina se a função deve incluir redes ocultas nos resultados da varredura.
  		- **passive**: O parâmetro é um valor booleano que determina se a função deve realizar uma varredura passiva. Se definido como true, a função não transmitirá nenhum pacote durante a varredura, o que pode demorar mais, mas pode ser útil em determinadas situações.
  		- **max_ms_per_chan**: O parâmetro é o tempo máximo gasto verificando cada canal, em milissegundos.
  		- **channel**: O parâmetro é o canal Wi-Fi a ser verificado. Se definido como 0, a função verificará todos os canais disponíveis.
  		- **ssid**: O parâmetro é um ponteiro para uma string terminada em nulo contendo o SSID da rede a ser procurada. Se definido como nullptr, a função irá procurar por todas as redes disponíveis.
  		- **bssid**: O parâmetro é um ponteiro para um array de 6 bytes contendo o endereço MAC do ponto de acesso a ser procurado. Se definido como nullptr, a função irá procurar por todos os pontos de acesso.

 	- **Output**: O valor de retorno desta função é um inteiro indicando o número de redes varridas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carrega todas as informações de um WiFi varrido nos parâmetros ponteiro.

 	- **Input Parameters**
  		- **i**: A função é usada para obter informações sobre uma rede varrida em um índice especificado i.
  		- **ssid**: O parâmetro ssid é uma referência para uma variável String onde a função armazena o SSID da rede.
  		- **encType**: O parâmetro encType é uma referência para uma variável uint8_t onde a função armazena o tipo de criptografia da rede (0 = aberta, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
  		- **rssi**: O parâmetro rssi é uma referência para uma variável int32_t onde a função armazena a indicação de intensidade de sinal recebido (RSSI) da rede.
  		- **bssid**: O parâmetro bssid é uma referência para um ponteiro uint8_t* onde a função armazena o BSSID (endereço MAC) da rede.
  		- **channel**: O parâmetro channel é uma referência para uma variável int32_t onde a função armazena o número do canal da rede.

 	- **Output**: True/False.

- `WiFiScanClass::SSID(uint8_t i)` -- Retorna o SSID descoberto durante a varredura de rede.

 	- **Input Parameters**
  		- **i**: Especifica de qual item de rede deseja obter a informação.

 	- **Output**: String SSID do item especificado na lista de redes varridas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Retorna o RSSI das redes descobertas durante o scanNetworks.

 	- **Input Parameters**
  		- **i**: Especifica de qual item de rede deseja obter a informação.

 	- **Output**: Valor com sinal do RSSI do item especificado na lista de redes varridas.

### Funções de cliente WiFi

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta função é usada na biblioteca WiFiClient para se conectar a um endereço IP e porta remotos com um valor de tempo limite especificado.

 	- **Input Parameters**
  		- **ip**:   O endereço IP do servidor ao qual se conectar.
  		- **port**: O número da porta do servidor ao qual se conectar.
  		- **timeout** (Optional): O tempo máximo de espera para que a conexão seja estabelecida, em milissegundos. Se a conexão não for estabelecida dentro desse tempo, a função retornará um erro. Se timeout for definido como 0, a função aguardará indefinidamente até que a conexão seja estabelecida.

- `WiFiClient::stop()` -- A função é usada para desconectar o cliente do servidor e liberar o socket/porta usado pelo cliente. Uma vez que a função é chamada, o cliente não pode mais enviar ou receber dados.

- `WiFiClient::setTimeout(uint32_t seconds)` -- A função define o número máximo de segundos que o cliente aguardará para que uma conexão seja estabelecida ou dados sejam recebidos. Se a conexão ou transferência de dados levar mais do que o tempo limite especificado, a conexão será encerrada.

 	- **Input Parameters**
  		- **seconds**:   O número de segundos para o tempo limite.

- `WiFiClient::write(uint8_t data)` -- Escreve um único byte de dados para o servidor conectado por meio da instância WiFiClient. Ou `WiFiClient::write(const uint8_t *buf, size_t size)`.

 	- **Input Parameters**
  		- **data**:   É um único byte de dados que precisa ser enviado pela conexão de rede estabelecida.

- `WiFiClient::read()` -- A função lê um único byte de dados recebidos do servidor conectado. Ela retorna o byte lido como um valor inteiro. Se nenhum dado estiver disponível, retorna -1. Ou `read(uint8_t *buf, size_t size)`.

 	- **Output**: Um valor inteiro indicando o número de bytes recebidos. Se o valor de retorno for 0, significa que o servidor fechou a conexão.

- `WiFiClient::peek()` -- A função é usada para verificar se há algum dado disponível para ser lido do servidor sem realmente lê-lo.

 	- **Output**: Retorna o próximo byte de dados recebidos sem removê-lo do buffer de recepção. Se nenhum dado estiver disponível, retorna -1.

- `WiFiClient::available()` -- A função é usada para verificar quantos bytes de dados estão disponíveis para serem lidos do servidor.

 	- **Output**: Retorna um valor inteiro que representa o número de bytes disponíveis para leitura.

### Função de servidor WiFi

- `WiFiServer::stopAll()` -- Esta função é um método da classe WiFiServer na biblioteca Arduino WiFi. Este método interrompe todas as instâncias de servidor que são criadas usando a classe WiFiServer. É útil quando você deseja parar todos os servidores de uma vez em vez de chamar o método `stop()` para cada instância individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- A função é usada para iniciar um servidor na porta especificada. O servidor irá escutar por conexões de clientes.

 	- **Input Parameters**
  		- **port**: O número da porta na qual escutar.
  		- **enable** (Optional): Um sinalizador para indicar se o servidor deve ser habilitado imediatamente após ser iniciado. Este sinalizador é true por padrão.

- `WiFiServer::hasClient()` -- A função é usada para verificar se há alguma conexão de cliente de entrada disponível no servidor. Esta função pode ser usada em um loop para verificar continuamente por novas conexões.

 	- **Output**: Retorna um objeto WiFiClient se um cliente tiver se conectado ou um ponteiro NULL se não houver clientes aguardando conexão.

- `WiFiServer::end()` -- A função é usada para parar o servidor e liberar os recursos associados. Uma vez chamada, o servidor não pode mais aceitar novas conexões de clientes. Quaisquer conexões de clientes existentes permanecerão abertas até que sejam fechadas pelo cliente ou pelo servidor. `WiFiServer::close()` e `WiFiServer::stop()` têm a mesma função.

### Funções múltiplas WiFi

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- É usada para adicionar um novo ponto de acesso (AP) à lista de APs disponíveis aos quais o objeto WiFiMulti tentará se conectar.

 	- **Input Parameters**
  		- **ssid**: Ponteiro para o SSID (máx. 63 caracteres).
  		- **passphrase**: (para WPA2 mínimo 8 caracteres, para aberta use NULL).

 	- **Output**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- A função tenta se conectar a um dos pontos de acesso salvos em ordem sequencial até conectar-se com sucesso a um.

 	- **Input Parameters**
  		- **connectTimeout**: O parâmetro especifica o tempo máximo de espera por uma conexão em milissegundos. Se connectTimeout for definido como 0, a função não terá tempo limite e tentará se conectar indefinidamente.

 	- **Output**: status

## Verificar redes WiFi próximas

A seguir está um programa de exemplo que usa o XIAO ESP32C6 para procurar redes WiFi próximas.

:::info
XIAO C6 suporta apenas a banda `2.4GHz`.
:::

No seu Arduino IDE, vá para **File > Examples > WiFi > WiFiScan**. Isso irá carregar um sketch que verifica redes WiFi dentro do alcance do seu XIAO ESP32C6.

Isso pode ser útil para verificar se a rede WiFi à qual você está tentando se conectar está dentro do alcance da sua placa ou para outras aplicações. Seu projeto WiFi pode frequentemente não funcionar porque talvez não consiga se conectar ao seu roteador devido à força insuficiente do sinal WiFi.

```cpp
#include <WiFi.h>

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("Starting Wi-Fi scan...");

  // WiFi.scanNetworks will return the number of networks found
  int numNetworks = WiFi.scanNetworks();
  Serial.println("Scan done");

  if (numNetworks == 0) {
    Serial.println("No networks found");
  } else {
    Serial.print(numNetworks);
    Serial.println(" networks found");
    for (int i = 0; i < numNetworks; i++) {
      // Print SSID and RSSI for each network found
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
      delay(10);
    }
  }
  Serial.println("");

  // Wait a bit before scanning again
  delay(5000);
}
```

Carregue e execute o programa, e você deverá ver o monitor serial imprimir as redes WiFi próximas que podem ser pesquisadas pelo XIAO ESP32C6.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### Anotação do programa

A primeira coisa que você precisa fazer para usar as funcionalidades de WiFi do XIAO ESP32C6 é incluir a biblioteca **WiFi.h** no seu código, como segue:

```cpp
#include <WiFi.h>
```

O XIAO ESP32C6 pode atuar como estação WiFi, ponto de acesso ou ambos. Para definir o modo WiFi, use `WiFi.mode()` e defina o modo desejado como argumento.

```cpp
WiFi.mode(WIFI_STA);
```

Quando o ESP32 é definido como uma estação Wi-Fi, ele pode se conectar a outras redes (como o seu roteador).

`WiFi.scanNetworks()` retorna o número de redes encontradas. Após a varredura, você pode acessar os parâmetros de cada rede. `WiFi.SSID()` imprime o SSID de uma rede específica.

`WiFi.RSSI()` retorna o RSSI dessa rede. RSSI significa Received Signal Strength Indicator (Indicador de Força de Sinal Recebido). É uma medida estimada do nível de potência que um dispositivo cliente RF está recebendo de um ponto de acesso ou roteador.

Por fim, `WiFi.encryptionType()` retorna o tipo de criptografia da rede. Esse exemplo específico coloca um * no caso de redes abertas. Entretanto, essa função pode retornar uma das seguintes opções (não apenas redes abertas):

- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## Conectar a uma rede WiFi

Para conectar o ESP32 a uma rede Wi-Fi específica, você deve saber o SSID e a senha dela. Além disso, essa rede deve estar dentro do alcance WiFi do ESP32 (para verificar isso, você pode usar o exemplo anterior para escanear redes WiFi).

A seguir está um exemplo de uso do XIAO ESP32C6 para conectar a uma rede especificada. Nele, a função `initWiFi()` desempenha o papel de conectar à rede no programa.

> Para conectar a uma rede Wi-Fi, você pode usar a função `WiFi.begin()`. Essa função recebe o SSID e a senha da rede como argumentos.

```cpp
#include "WiFi.h"

// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";

void initWiFi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi ..");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print('.');
    delay(1000);
  }
  Serial.println();
  Serial.println(WiFi.localIP());
}

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  initWiFi();
}

void loop() {
  // Your code here
}
```

Carregue e execute o programa para abrir o monitor serial. Ao conectar à rede, o monitor serial imprimirá uma sequência de pontos até que a conexão seja bem‑sucedida e, então, o endereço IP do XIAO será impresso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### Anotação do programa

Vamos dar uma olhada rápida em como essa função funciona.

Primeiro, defina o modo WiFi. Se o XIAO ESP32C6 for conectado a outra rede (ponto de acesso/hotspot), ele deve estar em modo estação.

```cpp
WiFi.mode(WIFI_STA);
```

Em seguida, use `WiFi.begin()` para se conectar a uma rede. Você deve passar como argumentos o SSID da rede e sua senha:

```cpp
WiFi.begin(ssid, password);
```

Conectar a uma rede WiFi pode levar algum tempo, então geralmente adicionamos um laço while que continua verificando se a conexão já foi estabelecida usando `WiFi.status()`. Quando a conexão é estabelecida com sucesso, ela retorna `WL_CONNECTED`.

Se você quiser obter a intensidade da conexão WiFi, basta chamar `WiFi.RSSI()` após uma conexão WiFi.

## Uso de softAP

Se você definir o XIAO ESP32C6 como um ponto de acesso (hotspot), poderá se conectar ao ESP32 usando qualquer dispositivo com capacidade WiFi sem a necessidade de se conectar ao seu roteador.

Em termos simples, quando você define o XIAO ESP32C6 como um ponto de acesso, você cria sua própria rede WiFi e dispositivos WiFi próximos (estações) podem se conectar a ela (como seu smartphone ou seu computador).

No seu Arduino IDE, vá para **File > Examples > WiFi > WiFiAccessPoint**. Este exemplo mostrará como usar o XIAO ESP32C6 para criar um hotspot e controlar a chave liga/desliga de uma luz por meio de uma página web simples conectada ao hotspot.

:::note

1. Fizemos algumas pequenas alterações no programa de exemplo comentando o LED_BUILTIN, porque o XIAO ESP32C6 possui seu próprio indicador de usuário e não precisamos de um LED externo.
2. O LED só será desligado quando o pino do LED de usuário no XIAO ESP32C6 for configurado em nível alto, e só será ligado quando o pino for configurado em nível baixo.
3. Você também precisa modificar o nome e a senha do hotspot no programa para os desejados.

:::

```cpp
/*
  WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

  Steps:
  1. Connect to the access point "yourAp"
  2. Point your web browser to http://192.168.4.1/H to turn the LED on or http://192.168.4.1/L to turn it off
     OR
     Run raw TCP "GET /H" and "GET /L" on PuTTY terminal with 192.168.4.1 as IP address and 80 as port

  Created for arduino-esp32 on 04 July, 2018
  by Elochukwu Ifediora (fedy0)
*/

#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

//#define LED_BUILTIN 2   // Set the GPIO pin where you connected your test LED or comment this line out if your dev board has a built-in LED

// Set these to your desired credentials.
const char *ssid = "XIAO_ESP32C6";
const char *password = "password";

WiFiServer server(80);


void setup() {
  pinMode(LED_BUILTIN, OUTPUT);

  Serial.begin(115200);
  Serial.println();
  Serial.println("Configuring access point...");

  // You can remove the password parameter if you want the AP to be open.
  WiFi.softAP(ssid, password);
  IPAddress myIP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(myIP);
  server.begin();

  Serial.println("Server started");
}

void loop() {
  WiFiClient client = server.available();   // listen for incoming clients

  if (client) {                             // if you get a client,
    Serial.println("New Client.");           // print a message out the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        if (c == '\n') {                    // if the byte is a newline character

          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println();

            // the content of the HTTP response follows the header:
            client.print("Click <a href=\"/H\">here</a> to turn ON the LED.<br>");
            client.print("Click <a href=\"/L\">here</a> to turn OFF the LED.<br>");

            // The HTTP response ends with another blank line:
            client.println();
            // break out of the while loop:
            break;
          } else {    // if you got a newline, then clear currentLine:
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }

        // Check to see if the client request was "GET /H" or "GET /L":
        if (currentLine.endsWith("GET /H")) {
          digitalWrite(LED_BUILTIN, LOW);                 // GET /H turns the LED on
        }
        if (currentLine.endsWith("GET /L")) {
          digitalWrite(LED_BUILTIN, HIGH);                // GET /L turns the LED off
        }
      }
    }
    // close the connection:
    client.stop();
    Serial.println("Client Disconnected.");
  }
}
```

Após carregar e executar o programa, o XIAO ESP32C6 criará um hotspot chamado "XIAO_ESP32C6". Você pode se conectar a essa rede usando seu computador ou telefone, com a senha "password". Em seguida, abra "192.168.4.1" em um navegador para acessar a página web que controla o interruptor do LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### Anotação do programa

Há uma seção no `setup()` para definir o ESP32 como um ponto de acesso usando o método `softAP()`:

```cpp
WiFi.softAP(ssid, password);
```

Em seguida, precisamos obter o endereço IP do ponto de acesso usando o método softAPIP() e imprimi‑lo no Monitor Serial.

```cpp
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

Estes são os trechos de código que você precisa incluir em seus sketches de servidor web para definir o XIAO ESP32C6 como um ponto de acesso.

## Uso de WiFi & MQTT

O XIAO ESP32C6 é uma poderosa placa‑mãe que suporta o protocolo MQTT, tornando‑o uma excelente escolha para projetos de IoT que exigem comunicação confiável e eficiente entre dispositivos.

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

// Replace with your network credentials
const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";

// MQTT broker IP address
const char* mqtt_server = "test.mosquitto.org";

// Initialize the WiFi and MQTT client objects
WiFiClient espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);

  // Connect to WiFi network
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }

  Serial.println("Connected to WiFi");

  // Set the MQTT broker server IP address and port
  client.setServer(mqtt_server, 1883);

  // Connect to MQTT broker
  while (!client.connected()) {
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
    } else {
      Serial.print("Failed to connect to MQTT broker, rc=");
      Serial.print(client.state());
      Serial.println(" retrying in 5 seconds");
      delay(5000);
    }
  }

  // Subscribe to MQTT topic
  client.subscribe("test/topic");
}

void loop() {
  // Check if the MQTT client is connected
  if (!client.connected()) {
    // Reconnect to MQTT broker
    if (client.connect("ESP32Client")) {
      Serial.println("Connected to MQTT broker");
      // Subscribe to MQTT topic after reconnection
      client.subscribe("test/topic");
    }
  }

  // Handle MQTT messages
  client.loop();

  // Publish a message to the MQTT broker
  client.publish("test/topic", "Hello from XIAO ESP32C6");
  delay(5000);
}
```

Neste programa de exemplo, o XIAO ESP32C6 se conecta à rede via WiFi e se conecta a um broker MQTT especificado, assina o tópico **test/topic** e publica uma mensagem no tópico a cada 5 segundos.

Quando o XIAO ESP32C6 recebe uma mensagem do broker MQTT, ela pode ser processada na função de callback `client.onMessage`. Você precisa substituir as variáveis `ssid`, `password`, `mqtt_server`, etc. no programa de exemplo pelas informações da sua própria rede e servidor MQTT.

:::tip
O endereço do servidor MQTT fornecido no programa de exemplo é `test.mosquitto.org`, apenas para fins de teste. Por favor, não envie nenhuma informação pessoal para este endereço, pois qualquer pessoa pode usar este link para obter suas informações.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>

## Uso de WiFi & HTTP/HTTPS

Esta parte pode se referir ao exemplo que escrevemos para o XIAO ESP32C3 acessar o ChatGPT, que fornece uma introdução detalhada ao uso de WiFiClient e HTTPClient.

- [Aprenda a usar WiFiClient e HTTPClient no XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT em ação](https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-chatgpt)

## WiFi Mesh

De acordo com a [documentação da Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html):

"ESP-MESH é um protocolo de rede construído sobre o protocolo Wi-Fi. ESP-MESH permite que inúmeros dispositivos (chamados nós) espalhados por uma grande área física (tanto interna quanto externa) sejam interconectados sob uma única WLAN (Wireless Local-Area Network). ESP-MESH é auto-organizável e auto-recuperável, o que significa que a rede pode ser construída e mantida de forma autônoma."

Em uma arquitetura tradicional de rede Wi-Fi, um único nó (ponto de acesso – geralmente o roteador) é conectado a todos os outros nós (estações). Cada nó pode se comunicar com os demais usando o ponto de acesso. No entanto, isso é limitado à cobertura Wi-Fi do ponto de acesso. Cada estação deve estar no alcance para se conectar diretamente ao ponto de acesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/42.png" style={{width:800, height:'auto'}}/></div>

Com o ESP-MESH, os nós não precisam se conectar a um nó central. Os nós são responsáveis por retransmitir as transmissões uns dos outros. Isso permite que vários dispositivos se espalhem por uma grande área física. Os nós podem se auto-organizar e se comunicar dinamicamente entre si para garantir que o pacote atinja seu nó de destino final. Se qualquer nó for removido da rede, ela é capaz de se auto-organizar para garantir que os pacotes cheguem ao destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32C6/img/43.png" style={{width:800, height:'auto'}}/></div>

A [biblioteca painlessMesh](https://gitlab.com/painlessMesh/painlessMesh) nos permite criar uma rede mesh com as placas ESP32 de maneira fácil.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

Se uma janela aparecer solicitando que façamos o download de alguns pacotes dependentes para usar esta biblioteca, também precisamos baixá-los juntos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

Se esta janela não aparecer, você precisará instalar as seguintes dependências de biblioteca:

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (por bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

Para começar com o ESP-MESH, primeiro experimentaremos o exemplo básico da biblioteca. Este exemplo cria uma rede mesh na qual todas as placas transmitem mensagens para todas as outras placas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

Antes de enviar o código, você pode configurar as variáveis `MESH_PREFIX` (é como o nome da rede MESH) e `MESH_PASSWORD` (você pode defini-la como quiser).

Em seguida, recomendamos que você altere a seguinte linha para cada placa a fim de identificar facilmente o nó que enviou a mensagem. Por exemplo, para o nó 1, altere a mensagem da seguinte forma:

```cpp
String msg = "Hi from node 1 ";
```

Certo, em seguida usaremos dois XIAO ESP32C6 como exemplo. O diagrama conceitual após a formação da rede é aproximadamente o seguinte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

Envie o programa separadamente para os dois XIAO, abra o monitor serial e ajuste a taxa de baud para 115200. (Se houver dois XIAO, você pode precisar de um software de porta serial adicional). Se o programa rodar normalmente, você verá os seguintes resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### Anotação do programa

Comece incluindo a biblioteca painlessMesh. Em seguida, adicione os detalhes da mesh. `MESH_PREFIX` refere-se ao nome da rede mesh. `MESH_PASSWORD`, como o nome indica, é a senha da mesh. Todos os nós na mesh devem usar o mesmo `MESH_PREFIX` e `MESH_PASSWORD`. `MESH_PORT` refere-se à porta TCP na qual você deseja que o servidor mesh seja executado. O padrão é **5555**.

É recomendável evitar o uso de `delay()` no código da rede mesh. Para manter a mesh, algumas tarefas precisam ser executadas em segundo plano. Usar `delay()` impedirá que essas tarefas ocorram e pode fazer com que a mesh perca a estabilidade/colapse. Em vez disso, é recomendável usar `TaskScheduler` para executar suas tarefas, que é usado na própria painlessMesh. A linha a seguir cria um novo `Scheduler` chamado `userScheduler`.

```cpp
Scheduler userScheduler; // to control your personal task
```

Crie um objeto `painlessMesh` chamado mesh para lidar com a rede mesh.

```cpp
painlessMesh  mesh;
```

Crie uma tarefa chamada `taskSendMessage` responsável por chamar a função `sendMessage()` a cada segundo enquanto o programa estiver em execução.

```cpp
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

A função `sendMessage()` envia uma mensagem para todos os nós na rede de mensagens (broadcast).

```cpp
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

A mensagem contém o texto “Hello from node 1” seguido pelo ID do chip da placa.

Para transmitir uma mensagem em broadcast, basta usar o método `sendBroadcast()` no objeto mesh e passar como argumento a mensagem (`msg`) que você deseja enviar.

```cpp
mesh.sendBroadcast(msg);
```

Cada vez que uma nova mensagem é enviada, o código altera o intervalo entre as mensagens (de um a cinco segundos).

```cpp
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

Em seguida, são criadas várias funções de callback que serão chamadas quando eventos específicos ocorrerem na mesh. A função `receivedCallback()` imprime o remetente da mensagem (from) e o conteúdo da mensagem (`msg.c_str()`).

```cpp
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

A função `newConnectionCallback()` é executada sempre que um novo nó entra na rede. Esta função simplesmente imprime o ID do chip do novo nó. Você pode modificar a função para executar qualquer outra tarefa.

```cpp
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

A função `changedConnectionCallback()` é executada sempre que uma conexão muda na rede (quando um nó entra ou sai da rede).

```cpp
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

A função `nodeTimeAdjustedCallback()` é executada quando a rede ajusta o tempo, para que todos os nós fiquem sincronizados. Ela imprime o deslocamento.

```cpp
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

No `setup()`, inicialize o monitor serial. Escolha os tipos de mensagem de depuração desejados:

```cpp
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // set before init() so that you can see startup messages
```

Inicialize a mesh com os detalhes definidos anteriormente.

```cpp
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

Atribua todas as funções de callback aos seus eventos correspondentes.

```cpp
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

Por fim, adicione a função taskSendMessage ao userScheduler. O scheduler é responsável por gerenciar e executar as tarefas no momento certo.

```cpp
userScheduler.addTask(taskSendMessage);
```

Por fim, habilite a taskSendMessage, para que o programa comece a enviar as mensagens para a mesh.

```cpp
taskSendMessage.enable();
```

Para manter a mesh em execução, adicione `mesh.update()` à `loop()`.

```cpp
void loop() {
  // it will run the user scheduler as well
  mesh.update();
}
```

## Citações & Referências

Este artigo se baseia no conteúdo da web do **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 e o utiliza verificado no Seeed Studio XIAO ESP32C6.

Agradecimentos especiais aos autores do **Random Nerd Tutorials** por seu trabalho árduo!

A seguir está o link de referência para o artigo original; você é bem-vindo para aprender mais sobre rede ESP32 por meio do seguinte link para o artigo original.

- [ESP32 Useful Wi-Fi Library Functions (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publish and Subscribe with Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH with ESP32 and ESP8266: Getting Started (painlessMesh library)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

Para mais informações sobre o uso da placa de desenvolvimento ESP32, leia o site oficial da Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

E consulte estas documentações para mais detalhes sobre a API do Arduino:

- [WiFi - Arduino Reference](https://www.arduino.cc/en/Reference/WiFi)
- [Wi-Fi API - Arduino ESP32](https://docs.espressif.com/projects/arduino-esp32/en/latest/api/wifi.html)

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
