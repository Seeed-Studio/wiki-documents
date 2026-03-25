---
title: Uso de WiFi
description: Uso de WiFi com Seeed Studio XIAO ESP32-C5
keywords:
  - xiao
  - esp32c5
  - wifi_usage
image: https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_1.webp
slug: /xiao_esp32c5_wifi_usage
sidebar_class_name: hidden
last_update:
  date: 01/06/2026
  author: Zeller
createdAt: '2025-12-30'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_wifi_usage/
---

# Uso de WiFi com Seeed Studio XIAO ESP32-C5

<div class="table-center">
 <table>
  <tr>
   <th>Seeed Studio XIAO ESP32-C5</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/Seeed-Studio-XIAO-ESP32C5_Start.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-ESP32C5-p-6609.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

O Seeed Studio XIAO ESP32-C5 oferece suporte a Wi-Fi de banda dupla 2,4 GHz e 5 GHz, com um rádio Wi-Fi 6 (802.11ax) de banda dupla com compatibilidade retroativa com os padrões 802.11a/b/g/n/ac. Além disso, esta placa de desenvolvimento oferece suporte à conectividade de antena U.FL, que foi projetada para aprimorar o desempenho de conexão sem fio do XIAO ESP32-C5. Neste tutorial, exploraremos como aproveitar a funcionalidade Wi-Fi do XIAO ESP32-C5 para se conectar a uma rede Wi-Fi e executar tarefas de rede básicas.<br/>
O tutorial a seguir usa a Arduino IDE para compilação e upload. Se você ainda não tem experiência com a Arduino IDE, visite [Introdução ao Seeed Studio XIAO ESP32-C5](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_getting_started/).<br/>

## Primeiros Passos

### Instalação da antena

Dentro da embalagem do Seeed Studio XIAO ESP32-C5, há um **conector de Antena Wi-Fi/BT** dedicado. Para obter a força ideal do sinal WiFi/Bluetooth, você precisa retirar a antena incluída no pacote e conectá-la ao conector.<br/>
:::tip
Se você quiser obter um efeito de ganho de sinal mais forte, pode adquirir e instalar a **Antena Externa 2.4G/5G com Conector RP-SMA Macho** — ela oferece um ganho muito maior do que a antena FPC interna incluída no pacote!
:::
<div class="table-center">
 <table>
  <tr>
   <th>Antena Externa 2.4G/5G com Conector RP-SMA Macho</th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-2.4g5g-external-antenna-with-rp-sma-male-connector-45font_1.jpg" style={{width:400, height:'auto'}}/></div></td>
  </tr>
  <tr>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/2-4G-5G-External-Antenna-with-RP-SMA-Male-Connector-and-1-13-Coaxial-Cable-130mm-Set-p-6316.html
        " target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
   </div></td>
  </tr>
 </table>
</div>

## As interfaces comuns da biblioteca WiFi

- O XIAO ESP32-C5 fornece uma ampla gama de funções de rede Wi-Fi. Em geral, podemos ver as funções da biblioteca WiFi no pacote interno do ESP32 e escolher a função correspondente para obter a funcionalidade desejada. A seguir, listaremos algumas interfaces comumente usadas e apresentaremos seu uso.

:::tip
Se você quiser iniciar o tutorial de uso de Wi-Fi diretamente, pode pular para [Exemplos de Uso de WiFi](#Exemplos-de-Uso-de-WiFi).
:::

### Função genérica de WiFi

- `WiFiGenericClass::getHostname()` -- É uma função na biblioteca WiFi para ESP32 que retorna o hostname do dispositivo como uma string. O hostname é um nome exclusivo que identifica o dispositivo na rede. Esta função recupera o hostname que foi definido anteriormente usando `WiFiGenericClass::setHostname()`. Se nenhum hostname tiver sido definido, o hostname padrão será retornado.

- `WiFiGenericClass::persistent(bool persistent)` -- É um método usado para habilitar ou desabilitar o modo persistente da biblioteca WiFi do ESP32. Quando o modo persistente está habilitado, a configuração de Wi-Fi é armazenada na memória não volátil (NVM) e é mantida mesmo após um ciclo de energia ou reset. Quando o modo persistente está desabilitado, a configuração é armazenada na RAM e é perdida após um ciclo de energia ou reset.

 	- **Parâmetros de Entrada**
  		- **persistent**: Se o argumento for true, o modo persistente será habilitado. Se o argumento for false, o modo persistente será desabilitado.

- `WiFiGenericClass::enableLongRange(bool enable)` -- A função é usada para habilitar ou desabilitar o recurso Long Range (LR) do módulo WiFi. Quando habilitado, o recurso LR permite que o módulo se conecte a redes WiFi que estão mais distantes do que o usual, porém com taxas de dados menores.

 	- **Parâmetros de Entrada**
  		- **enable**: O parâmetro deve ser definido como true para habilitar o recurso e false para desabilitá-lo.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- A função é usada para definir o modo WiFi do dispositivo.

 	- **Parâmetros de Entrada**
  		- **m**: O parâmetro m especifica o modo a ser definido, que pode ser uma das seguintes constantes definidas no enum wifi_mode_t:
   			- **WIFI_MODE_NULL**: Desabilita os modos estação WiFi e ponto de acesso.
   			- **WIFI_MODE_STA**: Habilita o modo estação WiFi para se conectar a uma rede WiFi existente.
   			- **WIFI_MODE_AP**: Habilita o modo ponto de acesso para criar uma nova rede WiFi.
   			- **WIFI_MODE_APSTA**: Habilita tanto o modo estação WiFi quanto o modo ponto de acesso.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- A função define o modo de economia de energia para o módulo WiFi.

 	- **Parâmetros de Entrada**
  		- **sleepType**: O parâmetro sleepType é um tipo enumerado que especifica o tipo de modo de economia de energia a ser usado. Existem três tipos de suspensão possíveis:
   			- **WIFI_PS_NONE**: Este é o modo de suspensão padrão, no qual o módulo WiFi não entra em modo de economia de energia.
   			- **WIFI_PS_MIN_MODEM**: Neste modo, o módulo WiFi desliga seu modem enquanto mantém a conexão com o ponto de acesso (AP).
   			- **WIFI_PS_MAX_MODEM**: Habilita o modo de economia de energia de Wi-Fi mais agressivo. Ele pode aumentar significativamente o tempo de suspensão, mas pode introduzir maior latência e menor throughput e, em algumas redes, pode afetar a estabilidade da conexão.

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
    - **WL_DISCONNECTED**: Este código de status indica que o ESP32 estava anteriormente conectado a uma rede Wi-Fi, mas atualmente não está conectado a nenhuma rede.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia a conexão WiFi com um AP WPA2 Enterprise.

 	- **Parâmetros de Entrada** (Opcionais)
  		- **ssid**: Ponteiro para a string SSID.
  		- **method**: O método de autenticação do WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
  		- **wpa2_identity**: Ponteiro para a entidade
  		- **wpa2_username**: Ponteiro para o nome de usuário
  		- **wpa2_password**: Ponteiro para a senha.
  		- **ca_pem**: Ponteiro para uma string com o conteúdo de um arquivo .pem com o certificado CA
  		- **client_crt**: Ponteiro para uma string com o conteúdo de um arquivo .crt com o certificado do cliente
  		- **client_key**: Ponteiro para uma string com o conteúdo de um arquivo .key com a chave do cliente
  		- **channel**: Opcional. Canal do AP
  		- **bssid**: Opcional. BSSID / MAC do AP
  		- **connect**: Opcional. chama connect

- `WiFiSTAClass::reconnect()` -- Forçará uma desconexão e, em seguida, começará a reconectar ao AP.

 	- **Saída**: True/False.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Desconecta da rede.

 	- **Parâmetros de Entrada**
  		- **wifioff**: wifioff `true` para desligar o rádio Wi-Fi.
  		- **eraseap**: eraseap `true` para apagar a configuração do AP da memória NVS.

 	- **Saída**: True/False.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Altera as configurações de configuração de IP desativando o cliente dhcp.

 	- **Parâmetros de Entrada**
  		- **local_ip**: Configuração de IP estático.
  		- **gateway**: Configuração de gateway estático.
  		- **subnet**: Máscara de Sub-rede estática.
  		- **dns1**: Servidor DNS estático 1.
  		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Obsoleto. Define se a estação ESP32 deve se conectar automaticamente ao AP (que está gravado) ao ser ligada. Ativa a conexão automática por padrão.

 	- **Parâmetros de Entrada**
  		- **autoConnect**: bool autoConnect.

 	- **Saída**: False.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Aguarda que a conexão WiFi atinja um resultado.

 	- **Parâmetros de Entrada**
  		- **timeoutLength**: O parâmetro especifica a quantidade máxima de tempo para esperar até que uma conexão seja estabelecida, em milissegundos.

 	- **Saída**: um dos valores definidos em wl_status_t.

- `WiFiSTAClass::localIP()` -- Obtém o endereço IP da interface estação.

 	- **Saída**: IPAddress IP da estação.

- `WiFiSTAClass::macAddress(uint8_t* mac)` -- Obtém o endereço MAC da interface estação.

 	- **Parâmetros de Entrada**
  		- **mac** (Opcional): Ponteiro para o array uint8_t com comprimento WL_MAC_ADDR_LENGTH.

 	- **Saída**: Ponteiro para uint8_t *.

- `WiFiSTAClass::SSID()` -- Retorna o SSID atual associado à rede.

 	- **Saída**: SSID.

- `WiFiSTAClass::RSSI(void)` -- Retorna o RSSI atual da rede.

 	- **Saída**: RSSI.

### Funções de AP

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta é uma função na biblioteca WiFi do XIAO ESP32-C5. Ela é usada para configurar um SoftAP (ponto de acesso por programa), que permite que outros dispositivos se conectem ao XIAO ESP32-C5 e acessem seus recursos.

 	- **Parâmetros de entrada**
  		- **ssid**:              Ponteiro para o SSID (máx. 63 caracteres).
    - **passphrase**:        (Para WPA2 mínimo de 8 caracteres, para aberta use NULL).
    - **channel**:           Número do canal WiFi, 1 - 13.
    - **ssid_hidden**:       Ocultação de rede (0 = transmitir SSID, 1 = ocultar SSID).
    - **max_connection**:    Número máximo de clientes conectados simultaneamente, 1 - 4.

 	- **Saída**: True/False.

- `WiFiAPClass::softAPgetStationNum()` -- Obtém a contagem de estações / clientes que estão conectados à interface softAP.

 	- **Saída**: Contagem de estações.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Uma função para configurar o SoftAP.

 	- **Parâmetros de entrada**
  		- **local_ip**:      IP do ponto de acesso.
  		- **gateway**:       IP do gateway.
  		- **subnet**:        Máscara de sub-rede.

 	- **Saída**: True/False.

- `WiFiAPClass::softAPIP()` -- Obtém o endereço IP da interface softAP.

 	- **Saída**: IPAddress do IP do softAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtém o endereço MAC da interface softAP.

 	- **Parâmetros de entrada**
  		- **mac** (Opcional):   Ponteiro para um array uint8_t com comprimento WL_MAC_ADDR_LENGTH.

 	- **Saída**: Ponteiro para uint8_t* ou String mac.

### Função de varredura WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Inicia a varredura das redes WiFi disponíveis.

 	- **Parâmetros de entrada**
  		- **async**: O parâmetro é um valor booleano que determina se a varredura deve ser realizada de forma assíncrona. Se definido como true, a função retorna imediatamente e os resultados da varredura podem ser obtidos posteriormente chamando a função getScanResults(). Se definido como false, a função ficará bloqueada até que a varredura seja concluída.
  		- **show_hidden**: O parâmetro é um valor booleano que determina se a função deve incluir redes ocultas nos resultados da varredura.
  		- **passive**: O parâmetro é um valor booleano que determina se a função deve realizar uma varredura passiva. Se definido como true, a função não transmitirá nenhum pacote durante a varredura, o que pode levar mais tempo, mas pode ser útil em certas situações.
  		- **max_ms_per_chan**: O parâmetro é o tempo máximo gasto na varredura de cada canal em milissegundos.
  		- **channel**: O parâmetro é o canal Wi-Fi a ser varrido. Se definido como 0, a função fará a varredura de todos os canais disponíveis.
  		- **ssid**: O parâmetro é um ponteiro para uma string terminada em nulo contendo o SSID da rede a ser buscada. Se definido como nullptr, a função fará a varredura de todas as redes disponíveis.
  		- **bssid**: O parâmetro é um ponteiro para um array de 6 bytes contendo o endereço MAC do ponto de acesso a ser buscado. Se definido como nullptr, a função fará a varredura de todos os pontos de acesso.

 	- **Saída**: O valor de retorno desta função é um inteiro indicando o número de redes varridas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carrega todas as informações de uma rede WiFi varrida nos parâmetros de ponteiro.

 	- **Parâmetros de entrada**
  		- **i**: A função é usada para obter informações sobre uma rede varrida em um índice i especificado.
  		- **ssid**: O parâmetro ssid é uma referência a uma variável String onde a função armazena o SSID da rede.
  		- **encType**: O parâmetro encType é uma referência a uma variável uint8_t onde a função armazena o tipo de criptografia da rede (0 = aberta, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
  		- **rssi**: O parâmetro rssi é uma referência a uma variável int32_t onde a função armazena a intensidade do sinal recebido (RSSI) da rede.
  		- **bssid**: O parâmetro bssid é uma referência a um ponteiro uint8_t* onde a função armazena o BSSID (endereço MAC) da rede.
  		- **channel**: O parâmetro channel é uma referência a uma variável int32_t onde a função armazena o número do canal da rede.

 	- **Saída**: True/False.

- `WiFiScanClass::SSID(uint8_t i)` -- Retorna o SSID descoberto durante a varredura de rede.

 	- **Parâmetros de entrada**
  		- **i**: Especifica de qual item de rede se deseja obter a informação.

 	- **Saída**: String SSID do item especificado na lista de redes varridas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Retorna o RSSI das redes descobertas durante o scanNetworks.

 	- **Parâmetros de entrada**
  		- **i**: Especifica de qual item de rede se deseja obter a informação.

 	- **Saída**: Valor com sinal de RSSI do item especificado na lista de redes varridas.

### Funções de cliente WiFi

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta função é usada na biblioteca WiFiClient para se conectar a um endereço IP e porta remotos com um valor de timeout especificado.

 	- **Parâmetros de entrada**
  		- **ip**:   O endereço IP do servidor ao qual se conectar.
  		- **port**: O número da porta do servidor ao qual se conectar.
  		- **timeout** (Opcional): O tempo máximo a esperar até que a conexão seja estabelecida, em milissegundos. Se a conexão não for estabelecida dentro desse tempo, a função retornará um erro. Se timeout for definido como 0, a função aguardará indefinidamente até que a conexão seja estabelecida.

- `WiFiClient::stop()` -- A função é usada para desconectar o cliente do servidor e liberar o socket/porta usado pelo cliente. Após a chamada da função, o cliente não poderá mais enviar ou receber dados.

- `WiFiClient::setTimeout(uint32_t timeout_ms)` -- A função define o número máximo de milissegundos que o cliente aguardará até que uma conexão seja estabelecida ou que dados sejam recebidos. Se a conexão ou transferência de dados levar mais tempo que o timeout especificado, a conexão será encerrada.

 	- **Parâmetros de entrada**
  		- **timeout_ms**:   O número de milissegundos para o timeout.

- `WiFiClient::write(uint8_t data)` -- Escreve um único byte de dados para o servidor conectado por meio da instância WiFiClient. Ou `WiFiClient::write(const uint8_t *buf, size_t size)`.

 	- **Parâmetros de entrada**
  		- **data**:   É um único byte de dados que precisa ser enviado pela conexão de rede estabelecida.

- `WiFiClient::read()` -- A função lê um único byte de dados recebidos do servidor conectado. Ela retorna o byte lido como um valor inteiro. Se não houver dados disponíveis, retorna -1. Ou `read(uint8_t *buf, size_t size)`.

 	- **Saída**: Um valor inteiro indicando o número de bytes recebidos. Se o valor de retorno for 0, significa que o servidor fechou a conexão.

- `WiFiClient::peek()` -- A função é usada para verificar se há algum dado disponível para ser lido do servidor sem realmente lê-lo.

 	- **Saída**: Retorna o próximo byte de dados recebidos sem removê-lo do buffer de recepção. Se nenhum dado estiver disponível, retorna -1.

- `WiFiClient::available()` -- A função é usada para verificar quantos bytes de dados estão disponíveis para serem lidos do servidor.

 	- **Saída**: Retorna um valor inteiro representando o número de bytes disponíveis para leitura.

### Função de servidor WiFi

- `WiFiServer::stopAll()` -- Esta função é um método da classe WiFiServer na biblioteca WiFi do Arduino. Este método interrompe todas as instâncias de servidor que foram criadas usando a classe WiFiServer. É útil quando você quer parar todos os servidores de uma vez em vez de chamar o método `stop()` para cada instância individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- A função é usada para iniciar um servidor na porta especificada. O servidor ficará escutando por conexões de clientes.

 	- **Parâmetros de entrada**
  		- **port**: O número da porta na qual escutar.
  		- **enable** (Opcional): Uma flag para indicar se o servidor deve ser habilitado imediatamente após ser iniciado. Esta flag é definida como true por padrão.

- `WiFiServer::hasClient()` -- A função é usada para verificar se há alguma conexão de cliente chegando disponível no servidor. Esta função pode ser usada em um loop para verificar continuamente por novas conexões.

 	- **Saída**: Retorna um objeto WiFiClient se um cliente tiver se conectado ou um ponteiro NULL se não houver clientes aguardando conexão.

- `WiFiServer::end()` -- A função é usada para parar o servidor e liberar os recursos associados. Uma vez chamada, o servidor não poderá mais aceitar novas conexões de clientes. Quaisquer conexões de clientes existentes permanecerão abertas até serem fechadas pelo cliente ou pelo servidor. `WiFiServer::close()` e `WiFiServer::stop()` têm a mesma função.

### Funções WiFi múltiplas

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- É usada para adicionar um novo ponto de acesso (AP) à lista de APs disponíveis aos quais o objeto WiFiMulti tentará se conectar.

 	- **Parâmetros de entrada**
  		- **ssid**: Ponteiro para o SSID (máx. 63 caracteres).
  		- **passphrase**: (para WPA2 mínimo de 8 caracteres, para aberta use NULL).

 	- **Saída**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- A função tenta se conectar a um dos pontos de acesso salvos em ordem sequencial até que se conecte com sucesso a um.

 	- **Parâmetros de entrada**
  		- **connectTimeout**: O parâmetro especifica o tempo máximo de espera por uma conexão em milissegundos. Se connectTimeout for definido como 0, a função não terá timeout e tentará se conectar indefinidamente.

 	- **Saída**: status

## Exemplos de uso de WiFi

Em seguida, usaremos o XIAO ESP32-C5 para demonstrar como usar algumas funções básicas de Wi-Fi.

### Escanear Rede

O XIAO ESP32-C5 suporta Wi-Fi dual-band de 2,4 GHz e 5 GHz, e pode escanear as redes Wi-Fi de 2,4 GHz e 5 GHz ao redor, bem como suas intensidades de sinal, no modo de varredura.

#### Programa

Abaixo está um programa de exemplo para mostrar como o XIAO ESP32-C5 realiza a varredura das redes Wi-Fi ao redor.

- Código de Referência

<details>

<summary>WiFiScan.ino</summary>

```cpp
/*
 *  This sketch demonstrates how to scan WiFi networks. For chips that support 5GHz band, separate scans are done for all bands.
 *  The API is based on the Arduino WiFi Shield library, but has significant changes as newer WiFi functions are supported.
 *  E.g. the return value of `encryptionType()` different because more modern encryption is supported.
 */
#include "WiFi.h"

void setup() {
  Serial.begin(115200);
  // Enable Station Interface
  WiFi.STA.begin();
  Serial.println("Setup done");
}

void ScanWiFi() {
  Serial.println("Scan start");
  // WiFi.scanNetworks will return the number of networks found.
  int n = WiFi.scanNetworks();
  Serial.println("Scan done");
  if (n == 0) {
    Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    Serial.println("Nr | SSID                             | RSSI | CH | Encryption");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.printf("%2d", i + 1);
      Serial.print(" | ");
      Serial.printf("%-32.32s", WiFi.SSID(i).c_str());
      Serial.print(" | ");
      Serial.printf("%4ld", WiFi.RSSI(i));
      Serial.print(" | ");
      Serial.printf("%2ld", WiFi.channel(i));
      Serial.print(" | ");
      switch (WiFi.encryptionType(i)) {
        case WIFI_AUTH_OPEN:            Serial.print("open"); break;
        case WIFI_AUTH_WEP:             Serial.print("WEP"); break;
        case WIFI_AUTH_WPA_PSK:         Serial.print("WPA"); break;
        case WIFI_AUTH_WPA2_PSK:        Serial.print("WPA2"); break;
        case WIFI_AUTH_WPA_WPA2_PSK:    Serial.print("WPA+WPA2"); break;
        case WIFI_AUTH_WPA2_ENTERPRISE: Serial.print("WPA2-EAP"); break;
        case WIFI_AUTH_WPA3_PSK:        Serial.print("WPA3"); break;
        case WIFI_AUTH_WPA2_WPA3_PSK:   Serial.print("WPA2+WPA3"); break;
        case WIFI_AUTH_WAPI_PSK:        Serial.print("WAPI"); break;
        default:                        Serial.print("unknown");
      }
      Serial.println();
      delay(10);
    }
  }

  // Delete the scan result to free memory for code below.
  WiFi.scanDelete();
  Serial.println("-------------------------------------");
}
void loop() {
  Serial.println("-------------------------------------");
  Serial.println("Default wifi band mode scan:");
  Serial.println("-------------------------------------");
#if ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5, 4, 2)
  WiFi.setBandMode(WIFI_BAND_MODE_AUTO);
#endif
  ScanWiFi();
#if CONFIG_SOC_WIFI_SUPPORT_5G
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("2.4 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_2G_ONLY);
  ScanWiFi();
  // Wait a bit before scanning again.
  delay(1000);
  Serial.println("-------------------------------------");
  Serial.println("5 Ghz wifi band mode scan:");
  Serial.println("-------------------------------------");
  WiFi.setBandMode(WIFI_BAND_MODE_5G_ONLY);
  ScanWiFi();
#endif
  // Wait a bit before scanning again.
  delay(10000);
}
```

</details>

#### Apresentação do Efeito

- Após enviar o programa, abra o Serial Monitor da Arduino IDE, e serão exibidas as informações das redes Wi-Fi escaneadas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_1.png" style={{width:800, height:'auto'}}/></div>

### Conectando a uma Rede Wi-Fi

Dentro da área de cobertura do Wi-Fi, você pode se conectar a uma rede Wi-Fi específica por meio do modo STA suportado pelo XIAO ESP32-C5, desde que conheça o SSID e a PASSWORD da rede Wi-Fi de destino.

#### Programa

Em seguida, é fornecido um programa de exemplo para mostrar como o XIAO ESP32-C5 se conecta a uma rede Wi-Fi especificada.

:::tip
O XIAO ESP32-C5 suporta Wi-Fi dual-band (2,4 GHz e 5 GHz), permitindo que você escolha a conexão com base na sua rede doméstica.
:::

- Código de Referência

```cpp
#include <WiFi.h>

// Replace with your network credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

void setup() {
    Serial.begin(115200);

    // Explicitly set mode to Station
    WiFi.mode(WIFI_STA);

    Serial.printf("Connecting to %s ", ssid);
    WiFi.begin(ssid, password);

    // Wait for connection
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("\nCONNECTED!");

    // Print connection details
    Serial.print("IP Address: ");
    Serial.println(WiFi.localIP());
    Serial.print("Subnet Mask: ");
    Serial.println(WiFi.subnetMask());
    Serial.print("Gateway IP: ");
    Serial.println(WiFi.gatewayIP());
    Serial.print("DNS IP: ");
    Serial.println(WiFi.dnsIP());

    // C5 Specific: Check which band and channel we are on
    Serial.print("Channel: ");
    Serial.println(WiFi.channel());
    Serial.print("RSSI (Signal Strength): ");
    Serial.println(WiFi.RSSI());
}

void loop() {
    // Check if WiFi is still connected
    if (WiFi.status() != WL_CONNECTED) {
        Serial.println("WiFi lost. Reconnecting...");
        WiFi.disconnect();
        WiFi.reconnect();
    }
    delay(5000);
}
```

#### Apresentação do Efeito

- Após enviar o programa, abra o Serial Monitor da Arduino IDE, e serão exibidas informações como o endereço IP da rede Wi-Fi conectada.
- Eu estou conectado à rede de 5 GHz no meu ambiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_2.png" style={{width:800, height:'auto'}}/></div>

### Modo AP

O XIAO ESP32-C5 pode funcionar como um ponto de acesso para outros dispositivos se conectarem. Em outras palavras, você pode usar dispositivos com Wi-Fi para se conectar ao XIAO ESP32-C5 sem precisar conectá-lo ao seu roteador.

Simplificando, quando você configura o XIAO ESP32-C5 como um ponto de acesso, você cria a sua própria rede Wi-Fi independente, à qual dispositivos Wi-Fi próximos (estações) podem se conectar (como seu smartphone ou computador).

#### Programa

Em seguida, é apresentado um programa de exemplo para mostrar como o XIAO ESP32-C5 cria um hotspot e permite que outros dispositivos se conectem a ele.

- Código de Referência

```cpp
#include <WiFi.h>

const char* ap_ssid = "XIAO ESP32-C5";
const char* ap_password = "password1234";

int previous_station_count = 0;

void setup() {
    Serial.begin(115200);

    // Initialize built-in LED pin
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, LOW); // Initial state: LED off

    // Set mode to Access Point
    WiFi.mode(WIFI_AP);

    // Configure AP
    // Arguments: SSID, Password, Channel (1-13 for 2.4G), Hidden (0/1), Max Connections
    // Note: Forcing 5GHz AP usually requires lower-level IDF calls in current Arduino Core,
    // so this will likely default to 2.4GHz.
    bool result = WiFi.softAP(ap_ssid, ap_password, 1, 0, 4);

    if (result) {
        Serial.println("AP Started Successfully");
    } else {
        Serial.println("AP Start Failed");
    }

    // Print IP Address of the AP (Default is usually 192.168.4.1)
    Serial.print("AP IP Address: ");
    Serial.println(WiFi.softAPIP());
}

void loop() {
    // Get current number of connected stations
    int current_station_count = WiFi.softAPgetStationNum();
    Serial.printf("Stations connected: %d\n", current_station_count);

    // Check if any device has connected or disconnected
    if (current_station_count > 0 && previous_station_count == 0) {
        // New device connected, turn on LED
        digitalWrite(LED_BUILTIN, HIGH);
        Serial.println("Device connected - LED ON");
    } else if (current_station_count == 0 && previous_station_count > 0) {
        // All devices disconnected, turn off LED
        digitalWrite(LED_BUILTIN, LOW);
        Serial.println("All devices disconnected - LED OFF");
    }

    previous_station_count = current_station_count;
    delay(2000);
}
```

#### Apresentação do Efeito

- Após compilar e enviar o programa, você poderá descobrir o hotspot AP por meio da função WLAN.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_3.png" style={{width:800, height:'auto'}}/></div>

- Quando a conexão for bem-sucedida, o Serial Monitor imprimirá o endereço IP, e o LED USER onboard acenderá simultaneamente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_4.png" style={{width:800, height:'auto'}}/></div>

### Uso de WiFi & MQTT

O protocolo MQTT é amplamente utilizado em dispositivos de IoT, e o XIAO ESP32-C5 suporta esse protocolo — o que significa que você pode usar o XIAO ESP32-C5 para desenvolver muitos projetos de IoT interessantes.

#### Programa

Em seguida, será apresentado um programa de referência para mostrar como usar o protocolo MQTT com o XIAO ESP32-C5.

- Instale a biblioteca `PubSubClient`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_1.png" style={{width:600, height:'auto'}}/></div>

- Código de Referência

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// Using a public MQTT broker for demonstration
const char* mqtt_server = "broker.emqx.io";
const int mqtt_port = 1883;

WiFiClient espClient;
PubSubClient client(espClient);

// Callback function: Executed when a message is received
void callback(char* topic, byte* payload, unsigned int length) {
    Serial.print("Message arrived [");
    Serial.print(topic);
    Serial.print("] ");
    for (int i = 0; i < length; i++) {
        Serial.print((char)payload[i]);
    }
    Serial.println();
}

void reconnect() {
    // Loop until we're reconnected
    while (!client.connected()) {
        Serial.print("Attempting MQTT connection...");
        String clientId = "ESP32C5Client-";
        clientId += String(random(0xffff), HEX);

        // Attempt to connect
        if (client.connect(clientId.c_str())) {
            Serial.println("connected");
            // Once connected, subscribe to a topic
            client.subscribe("esp32c5/test/topic");
        } else {
            Serial.print("failed, rc=");
            Serial.print(client.state());
            Serial.println(" try again in 5 seconds");
            delay(5000);
        }
    }
}

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nWiFi Connected");

    // Configure MQTT Server
    client.setServer(mqtt_server, mqtt_port);
    client.setCallback(callback);
}

void loop() {
    if (!client.connected()) {
        reconnect();
    }
    client.loop();

    // Publish a message every 2 seconds
    static unsigned long lastMsg = 0;
    unsigned long now = millis();
    if (now - lastMsg > 2000) {
        lastMsg = now;
        Serial.println("Publishing message...");
        client.publish("esp32c5/test/topic", "Hello from XIAO ESP32-C5");
    }
}
```

#### Apresentação do Efeito

- Baixe qualquer software que ofereça suporte ao cliente broker MQTTX; aqui é usado o MQTTX  [MQTTx](https://mqttx.app/downloads)

- Abra o MQTTX e adicione as informações do cliente. Aqui é usado o endereço de cliente padrão, então você só precisa adicionar o ID do cliente `ESP32C5Client` e definir o nome do cliente de teste; o restante das configurações pode ser mantido como padrão.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_5.png" style={{width:800, height:'auto'}}/></div><br/>

- Faça o upload do código e conecte usando o MQTTX. Após uma conexão bem-sucedida, clique em `New Subscription` no lado esquerdo para adicionar uma assinatura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_6.png" style={{width:800, height:'auto'}}/></div><br/>

- Configure as informações da assinatura: insira `esp32c5/test/topic` e selecione 0 ou 1 para QoS.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_7.png" style={{width:800, height:'auto'}}/></div><br/>

- Após a configuração bem-sucedida, você poderá ver as mensagens publicadas pelo XIAO ESP32-C5 (atuando como cliente) a cada 2 segundos. Você também pode enviar mensagens para o cliente depois de selecionar um tópico, e o cliente as publicará após o recebimento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_8.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
broker.emqx.io é um broker público compartilhado por todos os usuários. Qualquer pessoa que assinar o mesmo tópico poderá visualizar suas mensagens. Ele se destina apenas a fins de teste e não é adequado para transmitir dados sensíveis.
:::

### WiFi & HTTP /HTTPS

- Você pode consultar o exemplo que escrevemos para o XIAO ESP32C3 para acessar o ChatGPT, que detalha como usar WiFiClient e HTTPClient: [Learn to use WiFiClient and HTTPClient on XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT in action](https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-chatgpt/)

- Se você quiser apenas explorar o uso simples de HTTP, também pode seguir as etapas abaixo para teste e verificação.

#### Programa

- Instale a biblioteca `HTTPClient`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_2.png" style={{width:600, height:'auto'}}/></div><br/>

- Código de Referência

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <WiFiClientSecure.h> // Required for HTTPS

const char* ssid = "YOUR_SSID";
const char* password = "YOUR_PASSWORD";

// HTTPS Endpoint
const char* serverUrl = "https://jsonplaceholder.typicode.com/todos/1";

// Root CA Certificate (Optional for simple testing if setInsecure is used)
// To be secure, you should use the actual root CA of the website.
// For this example, we will use setInsecure().

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }
    Serial.println("\nConnected");
}

void loop() {
    if ((WiFi.status() == WL_CONNECTED)) {

        // 1. Create WiFiClientSecure object
        WiFiClientSecure client;

        // IGNORE SSL certificate validation (Good for testing, NOT for production)
        client.setInsecure(); 

        // 2. Create HTTPClient object
        HTTPClient http;

        Serial.print("[HTTPS] begin...\n");

        // 3. Initialize connection
        if (http.begin(client, serverUrl)) { 
            Serial.print("[HTTPS] GET...\n");

            // 4. Send GET request
            int httpCode = http.GET();

            // 5. Check return code
            if (httpCode > 0) {
                Serial.printf("[HTTPS] GET... code: %d\n", httpCode);

                if (httpCode == HTTP_CODE_OK || httpCode == 301 || httpCode == 302) {
                    String payload = http.getString();
                    Serial.println(payload);
                }
            } else {
                Serial.printf("[HTTPS] GET... failed, error: %s\n", http.errorToString(httpCode).c_str());
            }

            // 6. Close connection
            http.end();
        } else {
            Serial.printf("[HTTPS] Unable to connect\n");
        }
    }

    delay(10000);
}
```

#### Apresentação do Efeito

:::tip
`https://jsonplaceholder.typicode.com` é um serviço gratuito de teste de API REST simulada, projetado especificamente para fins de desenvolvimento e teste. Ele não oferece suporte à modificação permanente ou persistência de dados reais.
:::

- Faça o upload do código, então você pode abrir `https://jsonplaceholder.typicode.com/todos/1` e a ferramenta Serial Monitor na IDE Arduino para verificar se as informações são consistentes.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_9.png" style={{width:800, height:'auto'}}/></div>

### WiFi-Mesh

A seguir está a introdução oficial do **ESP-WIFI-MESH** pela Espressif Systems:

ESP-WIFI-MESH é uma rede de comunicação sem fio com nós organizados em uma topologia mesh usando o recurso AP-STA simultâneo nos SoCs da Espressif. Ela fornece uma rede de autoformação e autorrecuperação, com facilidade de implantação. A topologia de rede do ESP-WIFI-MESH pode escalar até 1000 nós em grandes áreas, sem exigir qualquer suporte específico de infraestrutura Wi-Fi. O ESP-WIFI-MESH também pode ser usado para cobrir pontos cegos de Wi-Fi em cenários de implantação doméstica onde o sinal Wi-Fi não consegue alcançar.

Para informações mais detalhadas, consulte o link oficial da Espressif Systems:

- [ESP-Wi-Fi-MESH](https://www.espressif.com/en/products/sdks/esp-wifi-mesh/overview)
- [ESP-IDF Programming Guide](https://docs.espressif.com/projects/esp-idf/en/stable/esp32/api-guides/esp-wifi-mesh.html)

Em seguida, mostrarei um exemplo de ESP-Mesh e, para este exemplo, você precisa preparar pelo menos dois dispositivos ESP32.

#### Programa

- Instale a biblioteca `Alteriom PainlessMesh`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_3.png" style={{width:600, height:'auto'}}/></div>

- Instale a biblioteca `AsyncTCP`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_4.png" style={{width:600, height:'auto'}}/></div>

- Código de Referência

```cpp
#include "painlessMesh.h"

#define   MESH_PREFIX     "ESP32_C5_MESH"
#define   MESH_PASSWORD   "mesh_password123"
#define   MESH_PORT       5555

painlessMesh  mesh;
Scheduler userScheduler; // to control your personal task

void sendMessage(); // Prototype

// Define a task to send messages every 1 second
Task taskSendMessage(1000, TASK_FOREVER, &sendMessage);

void sendMessage() {
    String msg = "Hello from node ";
    msg += mesh.getNodeId();
    mesh.sendBroadcast(msg);
    Serial.printf("Sent broadcast: %s\n", msg.c_str());
}

// Callback: When a message is received
void receivedCallback( uint32_t from, String &msg ) {
    Serial.printf("Received from %u msg=%s\n", from, msg.c_str());
}

// Callback: When a new connection is established
void newConnectionCallback(uint32_t nodeId) {
    Serial.printf("New Connection, nodeId = %u\n", nodeId);
}

// Callback: When connection changes
void changedConnectionCallback() {
    Serial.printf("Changed connections\n");
}

// Callback: Time adjustment
void nodeTimeAdjustedCallback(int32_t offset) {
    Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(), offset);
}

void setup() {
    Serial.begin(115200);

    // Debug messages
    mesh.setDebugMsgTypes( ERROR | STARTUP );  

    // Initialize Mesh
    mesh.init( MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT );

    // Register Callbacks
    mesh.onReceive(&receivedCallback);
    mesh.onNewConnection(&newConnectionCallback);
    mesh.onChangedConnections(&changedConnectionCallback);
    mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);

    // Add task to scheduler
    userScheduler.addTask( taskSendMessage );
    taskSendMessage.enable();
}

void loop() {
    // Keep the mesh network running
    mesh.update();
}
```

#### Apresentação do Efeito

- Faça o upload do código para dois dispositivos XIAO ESP32-C5 e abra qualquer ferramenta de porta serial para verificar os resultados.

O dispositivo 1 do XIAO ESP32-C5 inicia a formação da rede e envia mensagens.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_10.png" style={{width:800, height:'auto'}}/></div><br/>

O dispositivo 2 do XIAO ESP32-C5 entra na rede e recebe mensagens enviadas pelo Dispositivo 1.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_11.png" style={{width:800, height:'auto'}}/></div>

### Exemplo: Hub de Casa Inteligente IoT

A partir dos exemplos de Wi-Fi acima, você já deve ter dominado como usar o Wi-Fi no XIAO ESP32-C5. Em seguida, será apresentado um exemplo para mostrar como implementar um hub de controle de casa inteligente usando o modo Wi-Fi AP e serviços de rede HTTP — especificamente, como usar o XIAO ESP32-C5 como um hub de controle de casa inteligente para monitorar o status da sua casa.

- Instale a biblioteca `ESPAsyncWebServer`

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_library_5.png" style={{width:600, height:'auto'}}/></div><br/>

- Faça o upload do código e conecte-se ao hotspot `XIAO ESP32-C5`.

<details>

<summary>Código de Referência</summary>

```cpp
#include <WiFi.h>
#include <AsyncTCP.h>
#include <ESPAsyncWebServer.h>
#include <DNSServer.h>

const char* ssid = "XIAO ESP32-C5";  // Hotspot name
const char* password = "12345678";  // Hotspot password (empty for no password, configurable)

DNSServer dnsServer;
AsyncWebServer server(80);

// HTML content for temporary website (You can modify the content here, e.g., add redirect to external website)
// const char index_html[] PROGMEM = R"rawliteral(
// <!DOCTYPE html>
// <html>
// <head>
//     <title>Temporary Website</title>
//     <meta charset="UTF-8">
//     <!-- Optional: Add automatic redirect to external website -->
//     <!-- <meta http-equiv="refresh" content="5;url=https://example.com"> -->
// </head>
// <body>
//     <h1>Welcome to XIAO ESP32-C5 Temporary Website!</h1>
//     <p>You have connected to XIAO-ESP32-C5 hotspot. This is custom content.</p>
//     <form action="/" method="POST">
//         <input type="submit" value="Continue">
//     </form>
// </body>
// </html>
// )rawliteral";

const char index_html[] PROGMEM = R"rawliteral(
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
  <title>XIAO ESP32-C5 Control Center</title>
  <style>
    :root {
      --bg-color: #121212;
      --card-bg: #1e1e1e;
      --text-main: #e0e0e0;
      --text-sub: #a0a0a0;
      --accent: #00e5ff; /* Neon Blue */
      --active: #00ff9d; /* Active Green */
      --danger: #ff4081; /* Warning Red */
    }

    body {
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      background-color: var(--bg-color);
      color: var(--text-main);
      margin: 0;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 100vh;
    }

    h1 {
      font-weight: 300;
      letter-spacing: 1.5px;
      margin-bottom: 10px;
      text-align: center;
    }

    p.subtitle {
      color: var(--text-sub);
      font-size: 0.9rem;
      margin-top: 0;
      margin-bottom: 30px;
      text-align: center;
    }

    /* Container Layout */
    .container {
      width: 100%;
      max-width: 400px; /* Suitable width for mobile devices */
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Status Panel */
    .status-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
    }

    .card {
      background-color: var(--card-bg);
      border-radius: 12px;
      padding: 15px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0,0,0,0.3);
      border: 1px solid #333;
      transition: transform 0.2s;
    }

    .card:active {
      transform: scale(0.98);
    }

    .card-icon {
      font-size: 24px;
      margin-bottom: 5px;
      display: block;
    }

    .card-value {
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--accent);
    }

    .card-label {
      font-size: 0.8rem;
      color: var(--text-sub);
    }

    /* Control Button Area */
    .control-group {
      background-color: var(--card-bg);
      border-radius: 16px;
      padding: 20px;
      border: 1px solid #333;
    }

    .control-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #333;
    }

    .control-item:last-child {
      border-bottom: none;
      margin-bottom: 0;
      padding-bottom: 0;
    }

    /* Switch Style */
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 26px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #333;
      transition: .4s;
      border-radius: 34px;
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 18px;
      width: 18px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: var(--accent);
      box-shadow: 0 0 10px var(--accent);
    }

    input:checked + .slider:before {
      transform: translateX(24px);
    }

    /* Main Button */
    .main-btn {
      width: 100%;
      padding: 15px;
      background: linear-gradient(45deg, var(--accent), #00b8d4);
      border: none;
      border-radius: 30px;
      color: #000;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      margin-top: 20px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .main-btn:active {
      opacity: 0.9;
      transform: scale(0.98);
    }

  </style>
</head>
<body>

  <div class="container">
    <header>
      <h1>XIAO ESP32-C5</h1>
      <p class="subtitle">IoT Smart Home Hub</p>
    </header>

    <div class="status-grid">
      <div class="card">
        <span class="card-icon">📡</span>
        <div class="card-value">Online</div>
        <div class="card-label">System Status</div>
      </div>
      <div class="card">
        <span class="card-icon">🌡️</span>
        <div class="card-value" id="temp-val">26.5°C</div>
        <div class="card-label">Indoor Temperature</div>
      </div>
      <div class="card">
        <span class="card-icon">💧</span>
        <div class="card-value">58%</div>
        <div class="card-label">Air Humidity</div>
      </div>
      <div class="card">
        <span class="card-icon">⏱️</span>
        <div class="card-value">12ms</div>
        <div class="card-label">Latency</div>
      </div>
    </div>

    <div class="control-group">
      <div class="control-item">
        <span>Living Room Main Light</span>
        <label class="switch">
          <input type="checkbox" id="btn-light" onchange="toggleDevice('light', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Air Purifier</span>
        <label class="switch">
          <input type="checkbox" id="btn-fan" onchange="toggleDevice('fan', this)">
          <span class="slider"></span>
        </label>
      </div>

      <div class="control-item">
        <span>Auto Mode</span>
        <label class="switch">
          <input type="checkbox" checked onchange="toggleDevice('auto', this)">
          <span class="slider"></span>
        </label>
      </div>
    </div>

    <form action="/" method="POST">
       <button type="submit" class="main-btn">Enter Advanced Settings</button>
    </form>

  </div>

  <script>
    // Simple JavaScript for demo interaction
    function toggleDevice(device, element) {
      var state = element.checked ? "ON" : "OFF";
      console.log(device + " is now " + state);

      // You can add fetch request to send to ESP32 here
      // fetch('/toggle?device=' + device + '&state=' + state);
    }

    // Simulate dynamic data fluctuation effect
    setInterval(() => {
        const temp = 26 + (Math.random() * 0.5);
        document.getElementById('temp-val').innerText = temp.toFixed(1) + "°C";
    }, 3000);
  </script>
</body>
</html>
)rawliteral";

// Handle all requests and redirect to temporary page
class CaptiveRequestHandler : public AsyncWebHandler {
public:
    CaptiveRequestHandler() {}
    virtual ~CaptiveRequestHandler() {}

    bool canHandle(AsyncWebServerRequest *request) {
        return true;  // Handle all requests
    }

    void handleRequest(AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);  // Return HTML content
    }
};

void setup() {
    Serial.begin(115200);
    delay(10);

    // Set to AP (Access Point) mode
    WiFi.mode(WIFI_AP);
    WiFi.softAP(ssid, password);

    Serial.println("Hotspot created: " + String(ssid));
    Serial.print("IP Address: ");
    Serial.println(WiFi.softAPIP());

    // Start DNS server, redirect all domains to local IP
    dnsServer.start(53, "*", WiFi.softAPIP());

    // Configure Web Server: redirect all not found requests to temporary page
    server.addHandler(new CaptiveRequestHandler()).setFilter(ON_AP_FILTER);  // Only in AP mode
    server.onNotFound([](AsyncWebServerRequest *request) {
        request->send_P(200, "text/html", index_html);
    });

    server.begin();
    Serial.println("Web Server started");

    server.on("/toggle", HTTP_GET, [](AsyncWebServerRequest *request){
    String device = request->getParam("device")->value();
    String state = request->getParam("state")->value();

    Serial.print("Device: ");
    Serial.print(device);
    Serial.print(" State: ");
    Serial.println(state);

    if(device == "light" && state == "ON") {
        digitalWrite(LED_BUILTIN, LOW); // Assume LOW level turns on the LED
    } else {
        digitalWrite(LED_BUILTIN, HIGH);
    }

    request->send(200, "text/plain", "OK");
});
}

void loop() {
    dnsServer.processNextRequest();  // Process DNS requests
    delay(10);
}
```

</details>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_12.png" style={{width:800, height:'auto'}}/></div><br/>

- Digite o endereço IP para acessar a página da web.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_ESP32C5/Getting_started/wifi_usage_13.png" style={{width:800, height:'auto'}}/></div><br/>

:::tip
Os controles e sensores exibidos na página da web são personalizáveis. Você pode adicionar novos e modificar a página gerada de acordo com suas necessidades específicas. Para referência: [ESPAsyncWebServer](https://github.com/lacamera/ESPAsyncWebServer)
:::

:::tip
O hotspot AP gerado pelo XIAO ESP32-C5 não consegue se conectar à internet por padrão. Se for necessário acesso à internet, você pode adotar um dos dois métodos a seguir:<br/>
Método 1: Conectar o XIAO ESP32-C5 ao Home Assistant. Para referência: [Connecting XIAO ESP32-C5 to Home Assistant](https://wiki.seeedstudio.com/pt-br/xiao_esp32c5_homeassistant/)<br/>
Método 2: Usar um serviço MQTT para enviar dados para um servidor em nuvem. Observe que esse método pode exigir a compra de uma certa quantidade de créditos de serviço. Para referência: [Goole Cloud](https://cloud.google.com/)<br/>
:::

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
