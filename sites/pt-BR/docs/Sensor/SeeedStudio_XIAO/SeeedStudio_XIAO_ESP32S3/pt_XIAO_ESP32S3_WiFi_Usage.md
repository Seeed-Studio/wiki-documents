---
description: Uso de WiFi com Seeed Studio XIAO ESP32S3.
title: WiFi para ambas as versões
keywords:
  - esp32s3
  - xiao
  - uso de wifi
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /xiao_esp32s3_wifi_usage
last_update:
  date: 03/27/2023
  author: Citric
createdAt: '2022-11-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_wifi_usage/
---

# Uso de WiFi com Seeed Studio XIAO ESP32S3 (Sense)

<table align="center">
 <tr>
     <th>Seeed Studio XIAO ESP32S3</th>
     <th>Seeed Studio XIAO ESP32S3 Sense</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

O Seeed Studio XIAO ESP32S3 é uma placa de desenvolvimento embarcada que apresenta desempenho RF excepcional, graças ao seu suporte para comunicação sem fio dupla 2,4GHz Wifi - 802.11b/g/n e Bluetooth Low Energy (BLE). Essa capacidade permite que o XIAO ESP32S3 forneça conectividade sem fio confiável e de alta velocidade para uma ampla gama de aplicações de Internet das Coisas (IoT). Além disso, a placa oferece suporte à conexão de antena U.FL, que pode estender o alcance de comunicação para mais de 100 metros, tornando‑a uma escolha ideal para projetos que exigem conectividade sem fio de longo alcance. Neste tutorial, exploraremos como aproveitar os recursos de Wi‑Fi do XIAO ESP32S3 para se conectar a uma rede Wi‑Fi e executar tarefas básicas de rede.

## Primeiros Passos

### Instalação da antena

No canto inferior esquerdo da parte frontal do XIAO ESP32S3, há um "Conector de Antena WiFi/BT" separado. Para obter um sinal melhor de WiFi/Bluetooth, você precisa pegar a antena dentro da embalagem e instalá‑la no conector.

Há um pequeno truque para a instalação da antena: se você apenas pressioná‑la com força diretamente para baixo, perceberá que é muito difícil pressionar e seus dedos vão doer! A maneira correta de instalar a antena é colocar primeiro um lado do conector da antena no bloco do conector e, em seguida, pressionar levemente o outro lado, e a antena será instalada.

Remover a antena também é assim, não use força bruta para puxar a antena diretamente; levantando um lado com cuidado, a antena sai facilmente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/5.gif" style={{width:500, height:'auto'}}/></div>

:::note
Se a antena não estiver instalada, pode não ser possível conectar à rede WiFi.

Se você tiver condições, sugiro usar a antena grande tipo bastão, o que proporcionará uma experiência melhor.
:::

## As interfaces comuns da biblioteca WiFi

O ESP32-S3 fornece uma ampla gama de funções de rede WiFi. Geralmente, podemos ver as funções da biblioteca WiFi no pacote interno do ESP32 e escolher a função correspondente para obter a funcionalidade desejada. A seguir, listaremos algumas interfaces comumente usadas e apresentaremos seu uso.

### Função genérica de WiFi

- `WiFiGenericClass::getHostname()` -- É uma função na biblioteca WiFi para ESP32 que retorna o hostname do dispositivo como uma string. O hostname é um nome exclusivo que identifica o dispositivo na rede. Essa função recupera o hostname definido anteriormente usando `WiFiGenericClass::setHostname()`. Se nenhum hostname tiver sido configurado, o hostname padrão será retornado.

- `WiFiGenericClass::persistent(bool persistent)` -- É um método utilizado para habilitar ou desabilitar o modo persistente da biblioteca WiFi do ESP32. Quando o modo persistente está habilitado, a configuração de Wi‑Fi é armazenada em memória não volátil (NVM) e é mantida mesmo após um ciclo de energia ou reset. Quando o modo persistente está desabilitado, a configuração é armazenada em RAM e é perdida após um ciclo de energia ou reset.

 	- **Parâmetros de Entrada**
  		- **persistent**: Se o argumento for true, o modo persistente é habilitado. Se o argumento for false, o modo persistente é desabilitado.

- `WiFiGenericClass::enableLongRange(bool enable)` -- A função é usada para habilitar ou desabilitar o recurso Long Range (LR) do módulo WiFi. Quando habilitado, o recurso LR permite que o módulo se conecte a redes WiFi que estão mais distantes do que o normal, porém com taxas de dados menores.

 	- **Parâmetros de Entrada**
  		- **enable**: O parâmetro deve ser definido como true para habilitar o recurso e false para desabilitá‑lo.

- `WiFiGenericClass::mode(wifi_mode_t m)` -- A função é usada para definir o modo WiFi do dispositivo.

 	- **Parâmetros de Entrada**
  		- **m**: O parâmetro m especifica o modo a ser definido, que pode ser uma das seguintes constantes definidas no enum wifi_mode_t:
   			- **WIFI_MODE_NULL**: Desabilita tanto o modo estação quanto o modo ponto de acesso WiFi.
   			- **WIFI_MODE_STA**: Habilita o modo estação WiFi para se conectar a uma rede WiFi existente.
   			- **WIFI_MODE_AP**: Habilita o modo ponto de acesso para criar uma nova rede WiFi.
   			- **WIFI_MODE_APSTA**: Habilita tanto o modo estação quanto o modo ponto de acesso WiFi.

- `WiFiGenericClass::setSleep(wifi_ps_type_t sleepType)` -- A função define o modo de economia de energia para o módulo WiFi.

 	- **Parâmetros de Entrada**
  		- **sleepType**: O parâmetro sleepType é um tipo enumerado que especifica o tipo de modo de economia de energia a ser usado. Existem três tipos de sleep possíveis:
   			- **WIFI_PS_NONE**: Este é o modo de sleep padrão, no qual o módulo WiFi não entra em modo de economia de energia.
   			- **WIFI_PS_MIN_MODEM**: Neste modo, o módulo WiFi desliga seu modem enquanto mantém a conexão com o ponto de acesso (AP).
   			- **WIFI_PS_MAX_MODEM**: Neste modo, o módulo WiFi desliga tanto o modem quanto a estação, o que resulta em desconexão do AP.

### Funções STA

- `WiFiSTAClass::status()` -- Retorna o status da conexão.

 	- **Saída**: um dos valores definidos em wl_status_t.
  		- **WL_NO_SHIELD**: Este código de status indica que o módulo Wi‑Fi não está presente.
    - **WL_IDLE_STATUS**: Este código de status indica que o módulo Wi‑Fi não está executando nenhuma operação.
    - **WL_NO_SSID_AVAIL**: Este código de status indica que nenhuma rede Wi‑Fi foi encontrada durante a varredura.
    - **WL_SCAN_COMPLETED**: Este código de status indica que a varredura Wi‑Fi foi concluída com sucesso.
    - **WL_CONNECTED**: Este código de status indica que o ESP32 está conectado com sucesso a uma rede Wi‑Fi.
    - **WL_CONNECT_FAILED**: Este código de status indica que a conexão com a rede Wi‑Fi falhou.
    - **WL_CONNECTION_LOST**: Este código de status indica que a conexão com a rede Wi‑Fi foi perdida.
    - **WL_DISCONNECTED**: Este código de status indica que o ESP32 estava anteriormente conectado a uma rede Wi‑Fi, mas no momento não está conectado a nenhuma rede.

- `WiFiSTAClass::begin(const char* wpa2_ssid, wpa2_auth_method_t method, const char* wpa2_identity, const char* wpa2_username, const char *wpa2_password, const char* ca_pem, const char* client_crt, const char* client_key, int32_t channel, const uint8_t* bssid, bool connect)` -- Inicia a conexão Wifi com um AP WPA2 Enterprise.

 	- **Parâmetros de Entrada** (Opcionais)
  		- **ssid**: Ponteiro para a string SSID.
  		- **method**: O método de autenticação WPA2 (WPA2_AUTH_TLS, WPA2_AUTH_PEAP, WPA2_AUTH_TTLS)
  		- **wpa2_identity**: Ponteiro para a entidade
  		- **wpa2_username**: Ponteiro para o nome de usuário
  		- **wpa2_password**: Ponteiro para a senha.
  		- **ca_pem**: Ponteiro para uma string com o conteúdo de um arquivo .pem com o certificado da CA
  		- **client_crt**: Ponteiro para uma string com o conteúdo de um arquivo .crt com o certificado do cliente
  		- **client_key**: Ponteiro para uma string com o conteúdo de um arquivo .key com a chave do cliente
  		- **channel**: Opcional. Canal do AP
  		- **bssid**: Opcional. BSSID / MAC do AP
  		- **connect**: Opcional. chama connect

- `WiFiSTAClass::reconnect()` -- Forçará uma desconexão e então começará a reconectar ao AP.

 	- **Saída**: True/False.

- `WiFiSTAClass::disconnect(bool wifioff, bool eraseap)` -- Desconecta da rede.

 	- **Parâmetros de Entrada**
  		- **wifioff**: wifioff `true` para desligar o rádio Wi‑Fi.
  		- **eraseap**: eraseap `true` para apagar a configuração do AP da memória NVS.

 	- **Saída**: True/False.

- `WiFiSTAClass::config(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dns1, IPAddress dns2)` -- Altera as configurações de IP desabilitando o cliente dhcp.

 	- **Parâmetros de Entrada**
  		- **local_ip**: Configuração de IP estático.
  		- **gateway**: Configuração de gateway estático.
  		- **subnet**: Máscara de Sub-rede estática.
  		- **dns1**: Servidor DNS estático 1.
  		- **dns2**: Servidor DNS estático 2.

- `WiFiSTAClass::setAutoConnect(bool autoConnect)` -- Obsoleto. Define se a estação ESP32 irá se conectar automaticamente ao AP (que está gravado) ao ser ligada. O auto‑connect é habilitado por padrão.

 	- **Parâmetros de Entrada**
  		- **autoConnect**: bool autoConnect.

 	- **Saída**: False.

- `WiFiSTAClass::waitForConnectResult(unsigned long timeoutLength)` -- Aguarda que a conexão WiFi atinja um resultado.

 	- **Parâmetros de Entrada**
  		- **timeoutLength**: O parâmetro especifica o tempo máximo de espera para que uma conexão seja estabelecida, em milissegundos.

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

- `WiFiAPClass::softAP(const char* ssid, const char* passphrase, int channel, int ssid_hidden, int max_connection, bool ftm_responder)` -- Esta é uma função na biblioteca WiFi do ESP32-S3. Ela é usada para configurar um SoftAP (ponto de acesso por software), que permite que outros dispositivos se conectem ao ESP32-S3 e acessem seus recursos.

 	- **Parâmetros de Entrada**
  		- **ssid**:              Ponteiro para o SSID (máx. 63 caracteres).
    - **passphrase**:        (Para WPA2 mínimo 8 caracteres, para aberta use NULL).
    - **channel**:           Número do canal WiFi, 1 - 13.
    - **ssid_hidden**:       Ocultação de rede (0 = transmitir SSID, 1 = ocultar SSID).
    - **max_connection**:    Máximo de clientes conectados simultaneamente, 1 - 4.

 	- **Saída**: True/False.

- `WiFiAPClass::softAPgetStationNum()` -- Obtém a contagem de estações / clientes que estão conectados à interface softAP.

 	- **Saída**: Contagem de estações.

- `WiFiAPClass::softAPConfig(IPAddress local_ip, IPAddress gateway, IPAddress subnet, IPAddress dhcp_lease_start)` -- Função para configurar o SoftAP.

 	- **Parâmetros de Entrada**
  		- **local_ip**:      IP do ponto de acesso.
  		- **gateway**:       IP do gateway.
  		- **subnet**:        Máscara de sub-rede.

 	- **Saída**: True/False.

- `WiFiAPClass::softAPIP()` -- Obtém o endereço IP da interface softAP.

 	- **Saída**: IPAddress IP do softAP.

- `WiFiAPClass::softAPmacAddress(uint8_t* mac)` -- Obtém o endereço MAC da interface softAP.

 	- **Parâmetros de Entrada**
  		- **mac** (Opcional):   Ponteiro para array de uint8_t com comprimento WL_MAC_ADDR_LENGTH.

 	- **Saída**: Ponteiro para uint8_t* ou String mac.

### Função de Varredura WiFi

- `WiFiScanClass::scanNetworks(bool async, bool show_hidden, bool passive, uint32_t max_ms_per_chan, uint8_t channel, const char * ssid, const uint8_t * bssid)` -- Inicia a varredura das redes WiFi disponíveis.

 	- **Parâmetros de Entrada**
  		- **async**: O parâmetro é um valor booleano que determina se a varredura deve ser realizada de forma assíncrona. Se definido como true, a função retorna imediatamente e os resultados da varredura podem ser obtidos posteriormente chamando a função getScanResults(). Se definido como false, a função ficará bloqueada até que a varredura seja concluída.
  		- **show_hidden**: O parâmetro é um valor booleano que determina se a função deve incluir redes ocultas nos resultados da varredura.
  		- **passive**: O parâmetro é um valor booleano que determina se a função deve realizar uma varredura passiva. Se definido como true, a função não transmitirá nenhum pacote durante a varredura, o que pode demorar mais, mas pode ser útil em certas situações.
  		- **max_ms_per_chan**: O parâmetro é o tempo máximo gasto na varredura de cada canal em milissegundos.
  		- **channel**: O parâmetro é o canal Wi-Fi a ser varrido. Se definido como 0, a função fará a varredura de todos os canais disponíveis.
  		- **ssid**: O parâmetro é um ponteiro para uma string terminada em nulo contendo o SSID da rede a ser procurada. Se definido como nullptr, a função procurará por todas as redes disponíveis.
  		- **bssid**: O parâmetro é um ponteiro para um array de 6 bytes contendo o endereço MAC do ponto de acesso a ser procurado. Se definido como nullptr, a função procurará por todos os pontos de acesso.

 	- **Saída**: O valor de retorno desta função é um inteiro indicando o número de redes varridas.

- `WiFiScanClass::getNetworkInfo(uint8_t i, String &ssid, uint8_t &encType, int32_t &rssi, uint8_t* &bssid, int32_t &channel)` -- Carrega todas as informações de uma rede WiFi varrida nos parâmetros ponteiro.

 	- **Parâmetros de Entrada**
  		- **i**: A função é usada para obter informações sobre uma rede varrida em um índice i especificado.
  		- **ssid**: O parâmetro ssid é uma referência a uma variável String onde a função armazena o SSID da rede.
  		- **encType**: O parâmetro encType é uma referência a uma variável uint8_t onde a função armazena o tipo de criptografia da rede (0 = aberta, 1 = WEP, 2 = WPA_PSK, 3 = WPA2_PSK, 4 = WPA_WPA2_PSK).
  		- **rssi**: O parâmetro rssi é uma referência a uma variável int32_t onde a função armazena a intensidade do sinal recebido (RSSI) da rede.
  		- **bssid**: O parâmetro bssid é uma referência a um ponteiro uint8_t* onde a função armazena o BSSID (endereço MAC) da rede.
  		- **channel**: O parâmetro channel é uma referência a uma variável int32_t onde a função armazena o número do canal da rede.

 	- **Saída**: True/False.

- `WiFiScanClass::SSID(uint8_t i)` -- Retorna o SSID descoberto durante a varredura da rede.

 	- **Parâmetros de Entrada**
  		- **i**: Especifica de qual item de rede se deseja obter a informação.

 	- **Saída**: String SSID do item especificado na lista de redes varridas.

- `WiFiScanClass::RSSI(uint8_t i)` -- Retorna o RSSI das redes descobertas durante o scanNetworks.

 	- **Parâmetros de Entrada**
  		- **i**: Especifica de qual item de rede se deseja obter a informação.

 	- **Saída**: Valor com sinal do RSSI do item especificado na lista de redes varridas.

### Funções de Cliente WiFi

- `WiFiClient::connect(IPAddress ip, uint16_t port, int32_t timeout)` -- Esta função é usada na biblioteca WiFiClient para conectar a um endereço IP e porta remotos com um valor de timeout especificado.

 	- **Parâmetros de Entrada**
  		- **ip**:   O endereço IP do servidor ao qual conectar.
  		- **port**: O número da porta do servidor ao qual conectar.
  		- **timeout** (Opcional): O tempo máximo de espera para que a conexão seja estabelecida, em milissegundos. Se a conexão não for estabelecida dentro desse tempo, a função retornará um erro. Se timeout for definido como 0, a função aguardará indefinidamente até que a conexão seja estabelecida.

- `WiFiClient::stop()` -- A função é usada para desconectar o cliente do servidor e liberar o socket/porta usado pelo cliente. Uma vez que a função é chamada, o cliente não pode mais enviar ou receber dados.

- `WiFiClient::setTimeout(uint32_t seconds)` -- A função define o número máximo de segundos que o cliente aguardará para que uma conexão seja estabelecida ou para que os dados sejam recebidos. Se a conexão ou transferência de dados levar mais tempo do que o timeout especificado, a conexão será fechada.

 	- **Parâmetros de Entrada**
  		- **seconds**:   O número de segundos para o timeout.

- `WiFiClient::write(uint8_t data)` -- Escreve um único byte de dados para o servidor conectado por meio da instância WiFiClient. Ou `WiFiClient::write(const uint8_t *buf, size_t size)`.

 	- **Parâmetros de Entrada**
  		- **data**:   É um único byte de dados que precisa ser enviado pela conexão de rede estabelecida.

- `WiFiClient::read()` -- A função lê um único byte de dados recebidos do servidor conectado. Ela retorna o byte lido como um valor inteiro. Se não houver dados disponíveis, retorna -1. Ou `read(uint8_t *buf, size_t size)`.

 	- **Saída**: Um valor inteiro indicando o número de bytes recebidos. Se o valor de retorno for 0, significa que o servidor fechou a conexão.

- `WiFiClient::peek()` -- A função é usada para verificar se há algum dado disponível para ser lido do servidor sem realmente lê-lo.

 	- **Saída**: Retorna o próximo byte de dados recebidos sem removê-lo do buffer de recepção. Se não houver dados disponíveis, retorna -1.

- `WiFiClient::available()` -- A função é usada para verificar quantos bytes de dados estão disponíveis para serem lidos do servidor.

 	- **Saída**: Retorna um valor inteiro representando o número de bytes disponíveis para leitura.

### Função de Servidor WiFi

- `WiFiServer::stopAll()` -- Esta função é um método da classe WiFiServer na biblioteca WiFi do Arduino. Este método interrompe todas as instâncias de servidor que são criadas usando a classe WiFiServer. É útil quando você quer parar todos os servidores de uma vez em vez de chamar o método `stop()` para cada instância individualmente.

- `WiFiServer::begin(uint16_t port, int enable)` -- A função é usada para iniciar um servidor na porta especificada. O servidor ficará escutando conexões de clientes de entrada.

 	- **Parâmetros de Entrada**
  		- **port**: O número da porta na qual escutar.
  		- **enable** (Opcional): Uma flag para indicar se o servidor deve ser habilitado imediatamente após ser iniciado. Esta flag é definida como true por padrão.

- `WiFiServer::hasClient()` -- A função é usada para verificar se há alguma conexão de cliente de entrada disponível no servidor. Esta função pode ser usada em um loop para verificar continuamente novas conexões.

 	- **Saída**: Retorna um objeto WiFiClient se um cliente tiver se conectado ou um ponteiro NULL se não houver clientes aguardando para se conectar.

- `WiFiServer::end()` -- A função é usada para parar o servidor e liberar os recursos associados. Uma vez chamada, o servidor não pode mais aceitar novas conexões de clientes. Quaisquer conexões de clientes existentes permanecerão abertas até serem fechadas pelo cliente ou pelo servidor. `WiFiServer::close()` e `WiFiServer::stop()` têm a mesma função.

### Funções de WiFi Múltiplo

- `WiFiMulti::addAP(const char* ssid, const char *passphrase)` -- É usada para adicionar um novo ponto de acesso (AP) à lista de APs disponíveis aos quais o objeto WiFiMulti tentará se conectar.

 	- **Parâmetros de Entrada**
  		- **ssid**: Ponteiro para o SSID (máx. 63 caracteres).
  		- **passphrase**: (para WPA2 mínimo 8 caracteres, para aberta use NULL).

 	- **Saída**: True/False

- `WiFiMulti::run(uint32_t connectTimeout)` -- A função tenta conectar-se a um dos pontos de acesso salvos em ordem sequencial até conseguir conectar-se a um.

 	- **Parâmetros de Entrada**
  		- **connectTimeout**: O parâmetro especifica o tempo máximo de espera por uma conexão em milissegundos. Se connectTimeout for definido como 0, a função não terá timeout e tentará conectar indefinidamente.

 	- **Saída**: status

## Escanear redes WiFi próximas

A seguir está um programa de exemplo que usa o XIAO ESP32S3 para escanear redes WiFi próximas.

No seu Arduino IDE, vá para **File > Examples > WiFi > WiFiScan**. Isso carregará um sketch que faz a varredura das redes WiFi dentro do alcance do seu XIAO ESP32S3.

Isso pode ser útil para verificar se a rede WiFi à qual você está tentando se conectar está dentro do alcance da sua placa ou para outras aplicações. Seu projeto WiFi pode frequentemente não funcionar porque talvez não consiga se conectar ao seu roteador devido à força insuficiente do sinal WiFi.

```c
#include "WiFi.h"

void setup() {
  Serial.begin(115200);

  // Set WiFi to station mode and disconnect from an AP if it was previously connected
  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  delay(100);

  Serial.println("Setup done");
}

void loop() {
  Serial.println("scan start");

  // WiFi.scanNetworks will return the number of networks found
  int n = WiFi.scanNetworks();
  Serial.println("scan done");
  if (n == 0) {
      Serial.println("no networks found");
  } else {
    Serial.print(n);
    Serial.println(" networks found");
    for (int i = 0; i < n; ++i) {
      // Print SSID and RSSI for each network found
      Serial.print(i + 1);
      Serial.print(": ");
      Serial.print(WiFi.SSID(i));
      Serial.print(" (");
      Serial.print(WiFi.RSSI(i));
      Serial.print(")");
      Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN)?" ":"*");
      delay(10);
    }
  }
  Serial.println("");

  // Wait a bit before scanning again
  delay(5000);
}
```

Envie e execute o programa e você deverá ver o monitor serial imprimir as redes WiFi próximas que podem ser pesquisadas pelo XIAO ESP32S3.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/37.png" style={{width:600, height:'auto'}}/></div>

### Anotação do programa

A primeira coisa que você precisa fazer para usar as funcionalidades WiFi do XIAO ESP32S3 é incluir a biblioteca **WiFi.h** no seu código, como segue:

```c
#include <WiFi.h>
```

O XIAO ESP32S3 pode atuar como estação WiFi, ponto de acesso ou ambos. Para definir o modo WiFi, use `WiFi.mode()` e defina o modo desejado como argumento.

```c
WiFi.mode(WIFI_STA);
```

Quando o ESP32 é configurado como uma estação Wi-Fi, ele pode se conectar a outras redes (como o seu roteador).

`WiFi.scanNetworks()` retorna o número de redes encontradas. Após a varredura, você pode acessar os parâmetros de cada rede. `WiFi.SSID()` imprime o SSID de uma rede específica.

`WiFi.RSSI()` retorna o RSSI dessa rede. RSSI significa Received Signal Strength Indicator (Indicador de Força do Sinal Recebido). É uma medida estimada do nível de potência que um dispositivo cliente de RF está recebendo de um ponto de acesso ou roteador.

Por fim, `WiFi.encryptionType()` retorna o tipo de criptografia da rede. Esse exemplo específico coloca um * no caso de redes abertas. No entanto, essa função pode retornar uma das seguintes opções (não apenas redes abertas):

- WIFI_AUTH_OPEN
- WIFI_AUTH_WEP
- WIFI_AUTH_WPA_PSK
- WIFI_AUTH_WPA2_PSK
- WIFI_AUTH_WPA_WPA2_PSK
- WIFI_AUTH_WPA2_ENTERPRISE

## Conectar a uma rede WiFi

Para conectar o ESP32 a uma rede Wi-Fi específica, você deve conhecer o SSID e a senha dela. Além disso, essa rede deve estar dentro do alcance WiFi do ESP32 (para verificar isso, você pode usar o exemplo anterior para escanear redes WiFi).

A seguir está um exemplo de uso do XIAO ESP32S3 para se conectar a uma rede especificada. Nele, a função `initWiFi()` desempenha o papel de conectar-se à rede no programa.

```c
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

}
```

Envie e execute o programa para abrir o monitor serial. Ao conectar à rede, o monitor serial imprimirá uma sequência de pontos até que a conexão seja bem-sucedida; em seguida, o endereço IP do XIAO será exibido.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/38.png" style={{width:600, height:'auto'}}/></div>

### Anotação do programa

Vamos dar uma olhada rápida em como essa função funciona.

Primeiro, defina o modo WiFi. Se o XIAO ESP32S3 for conectado a outra rede (ponto de acesso/hotspot), ele deve estar no modo estação.

```c
WiFi.mode(WIFI_STA);
```

Em seguida, use `WiFi.begin()` para se conectar a uma rede. Você deve passar como argumentos o SSID da rede e sua senha:

```c
WiFi.begin(ssid, password);
```

Conectar-se a uma rede WiFi pode levar um tempo, então geralmente adicionamos um loop while que continua verificando se a conexão já foi estabelecida usando `WiFi.status()`. Quando a conexão é estabelecida com sucesso, ele retorna `WL_CONNECTED`.

Se você quiser obter a intensidade da conexão WiFi, pode simplesmente chamar `WiFi.RSSI()` após uma conexão WiFi.

## Uso de softAP

Se você configurar o XIAO ESP32S3 como um ponto de acesso (hotspot), poderá se conectar ao ESP32 usando qualquer dispositivo com recursos WiFi sem a necessidade de se conectar ao seu roteador.

Em palavras simples, quando você configura o XIAO ESP32S3 como um ponto de acesso, você cria a própria rede WiFi dele e dispositivos WiFi próximos (estações) podem se conectar a ela (como seu smartphone ou seu computador).

No Arduino IDE, vá para **File > Examples > WiFi > WiFiAccessPoint**. Este exemplo mostrará como usar o XIAO ESP32S3 para criar um hotspot e controlar o interruptor liga/desliga de uma luz por meio de uma página web simples conectada ao hotspot.

:::note

1. Fizemos algumas pequenas alterações no programa de exemplo comentando o LED_BUILTIN, porque o XIAO ESP32S3 tem seu próprio indicador de usuário e não precisamos de um LED externo.
2. O LED só apagará quando o pino do LED de usuário no XIAO ESP32S3 estiver configurado em nível alto e só acenderá quando o pino estiver configurado em nível baixo.
3. Você também precisa modificar no programa o nome e a senha do hotspot para aqueles que você desejar.

:::

```c
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
const char *ssid = "XIAO_ESP32S3";
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

Depois de carregar e executar o programa, o XIAO ESP32S3 criará um hotspot chamado "XIAO_ESP32S3". Você pode se conectar a essa rede usando seu computador ou celular, com a senha "password". Em seguida, abra "192.168.4.1" em um navegador para acessar a página web que controla o interruptor do LED.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/39.png" style={{width:800, height:'auto'}}/></div>

### Anotação do programa

Há uma seção em `setup()` para configurar o ESP32 como um ponto de acesso usando o método `softAP()`:

```c
WiFi.softAP(ssid, password);
```

Em seguida, precisamos obter o endereço IP do ponto de acesso usando o método softAPIP() e imprimi-lo no Monitor Serial.

```c
IPAddress myIP = WiFi.softAPIP();
Serial.print("AP IP address: ");
Serial.println(myIP);
server.begin();
```

Estes são os trechos de código que você precisa incluir em seus sketches de servidor web para definir o XIAO ESP32S3 como um ponto de acesso.

## Uso de WiFi & MQTT

O XIAO ESP32S3 é uma poderosa placa-mãe que suporta o protocolo MQTT, tornando-o uma excelente escolha para projetos de IoT que exigem comunicação confiável e eficiente entre dispositivos.

```c
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
  client.publish("test/topic", "Hello from XIAO ESP32S3");
  delay(5000);
}
```

Neste programa de exemplo, o XIAO ESP32S3 conecta-se à rede via WiFi e se conecta a um broker MQTT especificado, assina o tópico **test/topic** e publica uma mensagem nesse tópico a cada 5 segundos.

Quando o XIAO ESP32S3 recebe uma mensagem do broker MQTT, ela pode ser processada na função de callback `client.onMessage`. Você precisa substituir as variáveis `ssid`, `password`, `mqtt_server`, etc. no programa de exemplo pelas informações da sua própria rede e servidor MQTT.

:::tip
O endereço do servidor MQTT fornecido no programa de exemplo é `test.mosquitto.org`, apenas para fins de teste. Por favor, não envie nenhuma informação pessoal para esse endereço, pois qualquer pessoa pode usar esse link para obter suas informações.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/41.png" style={{width:800, height:'auto'}}/></div>

## Uso de WiFi & HTTP/HTTPS

Esta parte pode se referir ao exemplo que escrevemos para o XIAO ESP32C3 acessar o ChatGPT, que fornece uma introdução detalhada ao uso de WiFiClient e HTTPClient.

- [Aprenda a usar WiFiClient e HTTPClient no XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT em ação](https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-chatgpt)

## WiFi Mesh

De acordo com a [documentação da Espressif](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-guides/mesh.html):

"ESP-MESH é um protocolo de rede construído sobre o protocolo Wi-Fi. ESP-MESH permite que numerosos dispositivos (chamados de nós) espalhados por uma grande área física (tanto interna quanto externa) sejam interconectados sob uma única WLAN (Wireless Local-Area Network). ESP-MESH é auto-organizável e auto-recuperável, o que significa que a rede pode ser construída e mantida autonomamente."

Em uma arquitetura de rede Wi-Fi tradicional, um único nó (ponto de acesso – geralmente o roteador) é conectado a todos os outros nós (estações). Cada nó pode se comunicar com os outros usando o ponto de acesso. No entanto, isso é limitado à cobertura wi-fi do ponto de acesso. Cada estação deve estar dentro do alcance para se conectar diretamente ao ponto de acesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/42.png" style={{width:800, height:'auto'}}/></div>

Com ESP-MESH, os nós não precisam se conectar a um nó central. Os nós são responsáveis por retransmitir as transmissões uns dos outros. Isso permite que vários dispositivos se espalhem por uma grande área física. Os nós podem se auto-organizar e falar dinamicamente entre si para garantir que o pacote alcance seu nó de destino final. Se algum nó for removido da rede, ela é capaz de se auto-organizar para garantir que os pacotes cheguem ao destino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/43.png" style={{width:800, height:'auto'}}/></div>

A [biblioteca painlessMesh](https://gitlab.com/painlessMesh/painlessMesh) nos permite criar uma rede mesh com as placas ESP32 de maneira fácil.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/44.png" style={{width:800, height:'auto'}}/></div>

Se uma janela aparecer solicitando que façamos o download de alguns pacotes dependentes para usar esta biblioteca, também precisamos baixá-los juntos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/45.png" style={{width:500, height:'auto'}}/></div>

Se essa janela não aparecer, você precisará instalar as seguintes dependências de biblioteca:

- [ArduinoJson](https://github.com/bblanchon/ArduinoJson) (por bblanchon)
- [TaskScheduler](https://github.com/arkhipenko/TaskScheduler)
- [AsyncTCP](https://github.com/me-no-dev/AsyncTCP) (ESP32)

Para começar com ESP-MESH, primeiro vamos experimentar o exemplo básico da biblioteca. Esse exemplo cria uma rede mesh na qual todas as placas transmitem mensagens para todas as outras placas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/46.png" style={{width:700, height:'auto'}}/></div>

Antes de carregar o código, você pode configurar as variáveis `MESH_PREFIX` (é como o nome da rede MESH) e `MESH_PASSWORD` (você pode definir o valor que quiser).

Em seguida, recomendamos que você altere a seguinte linha para cada placa para identificar facilmente o nó que enviou a mensagem. Por exemplo, para o nó 1, altere a mensagem da seguinte forma:

```c
String msg = "Hi from node 1 ";
```

Certo, a seguir usaremos dois XIAO ESP32S3 como exemplo. O diagrama conceitual após a criação da rede é aproximadamente o seguinte.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/47.png" style={{width:700, height:'auto'}}/></div>

Carregue o programa separadamente nos dois XIAO, abra o monitor de porta serial e defina a taxa de baud para 115200. (Se houver dois XIAO, talvez você precise de um software de porta serial adicional). Se o programa rodar sem problemas, você verá os seguintes resultados:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/48.png" style={{width:800, height:'auto'}}/></div>

### Anotação do programa

Comece incluindo a biblioteca painlessMesh. Em seguida, adicione os detalhes da malha (mesh). `MESH_PREFIX` se refere ao nome da malha. `MESH_PASSWORD`, como o nome sugere, é a senha da malha. Todos os nós na malha devem usar o mesmo `MESH_PREFIX` e `MESH_PASSWORD`. `MESH_PORT` se refere à porta TCP na qual você deseja que o servidor da malha seja executado. O padrão é **5555**.

É recomendável evitar o uso de `delay()` no código da rede mesh. Para manter a malha, algumas tarefas precisam ser executadas em segundo plano. Usar `delay()` interromperá essas tarefas e pode fazer com que a malha perca estabilidade/desmorone. Em vez disso, recomenda-se usar `TaskScheduler` para executar suas tarefas, o qual é usado na própria painlessMesh. A linha a seguir cria um novo `Scheduler` chamado `userScheduler`.

```c
Scheduler userScheduler; // to control your personal task
```

Crie um objeto `painlessMesh` chamado mesh para lidar com a rede mesh.

```c
painlessMesh  mesh;
```

Crie uma tarefa chamada `taskSendMessage` responsável por chamar a função `sendMessage()` a cada segundo enquanto o programa estiver em execução.

```c
Task taskSendMessage(TASK_SECOND * 1 , TASK_FOREVER, &sendMessage);
```

A função `sendMessage()` envia uma mensagem para todos os nós na rede de mensagens (broadcast).

```c
void sendMessage() {
  String msg = "Hello from node 1";
  msg += mesh.getNodeId();
  mesh.sendBroadcast( msg );
  taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
}
```

A mensagem contém o texto “Hello from node 1” seguido pelo ID do chip da placa.

Para transmitir (broadcast) uma mensagem, basta usar o método `sendBroadcast()` no objeto mesh e passar como argumento a mensagem (msg) que você deseja enviar.

```c
mesh.sendBroadcast(msg);
```

Sempre que uma nova mensagem é enviada, o código altera o intervalo entre mensagens (de um a cinco segundos).

```c
taskSendMessage.setInterval(random(TASK_SECOND * 1, TASK_SECOND * 5));
```

Em seguida, várias funções de callback são criadas e serão chamadas quando eventos específicos ocorrerem na malha. A função `receivedCallback()` imprime o remetente da mensagem (from) e o conteúdo da mensagem (`msg.c_str()`).

```c
void receivedCallback( uint32_t from, String &msg ) {
  Serial.printf("startHere: Received from %u msg=%s\n", from, msg.c_str());
}
```

A função `newConnectionCallback()` é executada sempre que um novo nó entra na rede. Essa função simplesmente imprime o ID do chip do novo nó. Você pode modificar a função para executar qualquer outra tarefa.

```c
void newConnectionCallback(uint32_t nodeId) {
  Serial.printf("--> startHere: New Connection, nodeId = %u\n", nodeId);
}
```

A função `changedConnectionCallback()` é executada sempre que uma conexão muda na rede (quando um nó entra ou sai da rede).

```c
void changedConnectionCallback() {
  Serial.printf("Changed connections\n");
}
```

A função `nodeTimeAdjustedCallback()` é executada quando a rede ajusta o tempo, para que todos os nós fiquem sincronizados. Ela imprime o desvio.

```c
void nodeTimeAdjustedCallback(int32_t offset) {
  Serial.printf("Adjusted time %u. Offset = %d\n", mesh.getNodeTime(),offset);
}
```

No `setup()`, inicialize o monitor serial. Escolha os tipos desejados de mensagens de depuração:

```c
//mesh.setDebugMsgTypes( ERROR | MESH_STATUS | CONNECTION | SYNC | COMMUNICATION | GENERAL | MSG_TYPES | REMOTE ); // all types on

mesh.setDebugMsgTypes( ERROR | STARTUP );  // set before init() so that you can see startup messages
```

Inicialize a malha com os detalhes definidos anteriormente.

```c
mesh.init(MESH_PREFIX, MESH_PASSWORD, &userScheduler, MESH_PORT);
```

Atribua todas as funções de callback aos eventos correspondentes.

```c
mesh.onReceive(&receivedCallback);
mesh.onNewConnection(&newConnectionCallback);
mesh.onChangedConnections(&changedConnectionCallback);
mesh.onNodeTimeAdjusted(&nodeTimeAdjustedCallback);
```

Por fim, adicione a função taskSendMessage ao userScheduler. O scheduler é responsável por lidar com as tarefas e executá-las no momento certo.

```c
userScheduler.addTask(taskSendMessage);
```

Por fim, habilite a taskSendMessage, para que o programa comece a enviar as mensagens para a malha.

```c
taskSendMessage.enable();
```

Para manter a malha em execução, adicione `mesh.update()` ao `loop()`.

```c
void loop() {
  // it will run the user scheduler as well
  mesh.update();
}
```

## Solução de Problemas

### P1: Por que não consigo me conectar ao hotspot do XIAO ESP32S3 quando estou usando o exemplo softAP?

Isso pode ser causado pela força de antena insuficiente do XIAO ESP32S3 ou pelo superaquecimento do XIAO ESP32S3. Após testes, o chip do XIAO ESP32S3 pode atingir uma temperatura máxima de 50 graus Celsius ao usar este exemplo. Isso pode levar a anormalidades de rede se for executado por muito tempo. Nesse momento, você pode resfriar o dispositivo e tentar novamente.

Se a causa de superaquecimento for descartada, então é possível que o sinal da antena seja a causa do problema. A força da antena incluída geralmente não consegue suportar trabalho de rede de alta intensidade, portanto você pode comprar uma antena tipo bastão adequada para usar, se necessário.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/40.jpg" style={{width:600, height:'auto'}}/></div>

### P2: Por que o XIAO ESP32-S3 Plus tem sinal de rede mais fraco do que o XIAO ESP32-S3? Existem soluções?

:::tip Lote do Produto
Se você comprou o produto antes de **agosto de 2025**, pode enfrentar problemas de sinal de rede fraco. Produtos comprados após essa data tiveram esse problema resolvido e não exigem correção de software.
:::

É possível adicionar um segmento de código para ajuste de potência em todos os códigos que usam WiFi e, ajustando a potência de transmissão, a força do sinal pode ser significativamente melhorada.

Como o seguinte trecho de código, que é adicionado para ajustar a potência da função dentro do `Setup()`.

```cpp
    // 1. Set WiFi to Station mode
    WiFi.mode(WIFI_STA);

    // 2. Adjust WiFi transmit power (Key correction)
    int8_t power_dbm = 15;
    int8_t power_param = (int8_t)(power_dbm / 0.25);
    esp_err_t err = esp_wifi_set_max_tx_power(power_param);

    if (err == ESP_OK) {
        Serial.print("Successfully set WiFi TX Power to: ");
        Serial.print(power_dbm);
        Serial.println(" dBm");
    } else {
        Serial.println("Failed to set WiFi TX Power.");
    }

    // 3. Start connecting to WiFi
    WiFi.begin(ssid, password);

    Serial.print("Connecting to WiFi network: ");
    Serial.println(ssid);
```

Foi verificado que definir a potência conforme o código acima oferece os melhores resultados.

## Citações e Referências

Este artigo se baseia no conteúdo da web de **[Random Nerd Tutorials](https://randomnerdtutorials.com/)** sobre ESP32 e foi utilizado e verificado no Seeed Studio XIAO ESP32S3.

Agradecimentos especiais aos autores do **Random Nerd Tutorials** por seu trabalho árduo!

A seguir está o link de referência para o artigo original; você é bem-vindo para aprender mais sobre redes ESP32 por meio do seguinte link para o artigo original.

- [Funções Úteis da Biblioteca Wi-Fi do ESP32 (Arduino IDE)](https://randomnerdtutorials.com/esp32-useful-wi-fi-functions-arduino/)
- [ESP32 MQTT – Publicar e Assinar com Arduino IDE](https://randomnerdtutorials.com/esp32-mqtt-publish-subscribe-arduino-ide/)
- [ESP-MESH com ESP32 e ESP8266: Primeiros Passos (biblioteca painlessMesh)](https://randomnerdtutorials.com/esp-mesh-esp32-esp8266-painlessmesh/)

Para mais informações sobre o uso da placa de desenvolvimento ESP32, leia o site oficial do Random Nerd Tutorials.

- [Random Nerd Tutorials](https://randomnerdtutorials.com/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
