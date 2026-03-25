---
description: Wifi Bee
title: Wifi Bee
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wifi_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wifi_Bee/
---

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_Wifibee_MRF24WB0MA.jpg) ![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/SeeedStudio_Wifibee_ATMega328.jpg)

**Wifi Bee** é um nó MCU autônomo compatível com soquete xBee Pro, útil para Rede de Sensores Sem Fio. Ele integra o módulo transceptor Wi-Fi Microchip IEEE 802.11 [MRF24WB0MA](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en548014) e um MCU AVR de 8 bits [ATMega328P](http://www.atmel.com/dyn/products/product_card.asp?part_id=4198). O visual inteligente e compatível com soquete xBee Pro torna muito fácil integrá‑lo em seu produto. O **ATMega328P** pode ser programado diretamente no Arduino IDE de código aberto quando você o conecta ao [UartSBee](https://seeeddoc.github.io/UartSBee/) ou [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/). Os pinos SPI no MCU são conectados aos pinos correspondentes do MRF24WB0MA para que se comuniquem entre si, enquanto alguns dos outros pinos (DIO, AD, PWM etc.) são conduzidos aos 20 pinos dos cabeçalhos macho de 2,0 mm. Observe que ainda não há firmware dedicado para o Wifi Bee, mas você pode usar o firmware do [WiShield](https://github.com/asynclabs/WiShield) da AsyncLabs. Certifique‑se de que você consegue usá‑lo antes de comprar.

Modelo: [WLS48188P](https://www.seeedstudio.com/depot/wifi-bee-p-823.html?cPath=139_141&amp;zenid=15bcf2644eb7ecf4b3722eb98c79b074)

## Recursos ##

- Cabeçalhos compatíveis com xBee

- Programável usando Arduino IDE

- Bootloader Arduino Duemilanove pré-programado

- Suporta Wi‑Fi de baixo consumo e baixa taxa de dados.

- Compatível com 802.11b

- Segurança WEP, WPA-PSK, WPA2-PSK

- LEDs para indicação de alimentação e conexão Wi‑Fi.

## Ideias de Aplicação ##

- Rede Local Sem Fio

- Rede de Sensores Sem Fio usando [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)
- Conectividade com a Internet

- Crie aplicações de rede infinitas com [uIP TCP/IP Stack](https://en.wikipedia.org/wiki/UIP_(micro_IP))
- Ideal para pessoas que desejam aprender e experimentar com a pilha TCP/IP

## Esquemático ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b.png)

[Clique aqui para abrir o esquemático em formato PDF](https://wiki.seeedstudio.com/pt-br/images/9/9f/WifiBee_v0.91b.pdf)

## Especificação Principal ##

 |Item|Mínimo| Típico| Máximo
 |---|---|---|---|
 |Tensão de operação|3.0V|3.3V|3.6V
 |Temperatura de trabalho|0°C a +70°C|||
 |Frequência de trabalho|16MHz|||
 |MCU|ATmega328P||||

## Dimensões Mecânicas ##

Wifi Bee tem o tamanho de 27,2 mm x 35,7 mm.

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b_pcb.png)

## Hardware ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_WifiBee_Parts.png)
**Wifi Bee** - Partes

### Definição de Pinos e Classificação ###

|Pino|#|Tipo de Pad|Descrição|Número do Pino Arduino|
|---|---|---|---|---|
|3V3|1|Entrada de alimentação|VCC, +3.3V|-|
|TX|2|Saída|Porta Uart Tx|1(DIO)|
|RX|3|Entrada|Porta Uart Rx|0(DIO)|
|PB0|4|Entrada/Saída|ATmega328P PB0|8(DIO)|
|!RESET|5|Entrada|Porta de Reset do ATmega328|||
|PD7|6|Entrada/Saída|ATmega328P PD7|7(DIO)|
|PD6|7|Entrada/Saída|ATmega328P PD6|6(DIO)|
|PD5|8|Entrada/Saída|ATmega328P PD5|5(DIO)|
|!DTR|9|Entrada|Usado para programar o ATmega328P|  -
|GND|10|GND|GND| -|
|PC1|11|Entrada/Saída|ATmega328P PC1|1(Entrada analógica)/15(DIO)|
|PC0|12|Entrada/Saída|ATmega328P PC0|0(Entrada analógica)/14(DIO)|
|AD7|13|Entrada|ATmega328P ADC7|7(Entrada analógica)|
|VREF|14|Entrada|Porta AREF do ATmega328P| -|
|AD6|15|Entrada|ATmega328P ADC6|6(Entrada analógica)|
|INT1|16|Entrada/Saída|ATmega328P PD3|3(DIO)|
|PC3|17|Entrada/Saída|ATmega328P PC3|3(Entrada analógica)/17(DIO)|
|PC2|18|Entrada/Saída|ATmega328P PC2|2(Entrada analógica)/16(DIO)|
|SCLSCL |19 |Entrada/Saída| ATmega328P |PC5 5(Entrada analógica)/19(DIO)|
|SDA |20| Entrada/Saída| ATmega328P PC4 |4(Entrada analógica)/18(DIO)|

## Uso ##

### Instalação de Hardware ###

- A melhor maneira de usar o Wifi Bee é conectá‑lo ao [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/). O [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) fornece conectividade USB-UART para programação e alimentação com seu regulador LDO de 3,3 V integrado.

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Twig.jpg)
Grove - XBee Carrier - Conectado ao **Wifi Bee** e Alimentado por USB

### Programação ###

#### Configuração de Rede Sem Fio ####

Esta seção fornece uma breve visão geral sobre como configurar uma Rede Doméstica com um roteador WiFi adequado para o **Wifi Bee**.

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/WifiBee_Network_Architecture.jpg)
Rede de Sensores Sem Fio - Arquitetura de Exemplo com Nós Wifi Bee

1.Faça login na interface de configuração web do roteador WiFi usando um navegador. Normalmente, um endereço IP padrão como 192.168.0.1 e um ID de login: admin e senha: password são fornecidos pelo fabricante do roteador. Use isso.

2.No caso acima, o endereço IP do roteador 192.168.0.1 também é o Endereço IP do Gateway da Rede Sem Fio. A máscara de sub-rede para esse endereço IP é 255.255.255.0
3.Defina um nome ou SSID para a Rede Sem Fio. Vamos defini‑lo como HOMENETWORK. Este nome será usado em todo o tutorial.

4.Qualquer nó que se conecta a um roteador obtém um endereço IP por DHCP. Mas o Wifi Bee não suporta DHCP. Precisamos atribuir um endereço IP estático. Muitos roteadores fornecem reserva de endereço usando o endereço MAC para dispositivos de rede. Na seção de configuração LAN do roteador sem fio, reserve o endereço IP 192.168.0.4 para o **Wifi Bee**.

- 1.Insira o endereço IP a ser reservado como 192.168.0.4. Este é o endereço IP do **Wifi Bee**
- 2.Você precisa inserir o endereço MAC exibido no Wifi Bee na forma de AB:CD:EF:GH:IJ:KL
- 3.Dê ao dispositivo o nome WIFIBEE. Este nome pode ser qualquer palavra e não é muito importante.

5.Configure as opções de segurança da Rede. O Wifi Bee suporta **Open(Security disabled), WEP (Wired Equivalent Privacy), WPA-PSK (Wi-Fi Protected Access Pre-Shared Key) e WPA2-PSK (Wi-Fi Protected Access 2 with Pre-Shared Key)**. Defina uma opção de segurança adequada. Essa configuração é usada pelo **Wifi Bee** para estabelecer a conexão.

- 1.Vamos definir a opção de segurança para WPA-PSK.

- 2.O modo WPA-PSK requer a Chave de Criptografia de Segurança de Rede WPA-PSK. Defina essa chave como 12345678

6.Consulte o guia do usuário do roteador para configurar outras definições como conexão com a internet, etc.

#### Download e configuração da Biblioteca para executar os exemplos de aplicação ####

Os exemplos de aplicação usam a biblioteca WiSheild da Asynclabs. Não há outro firmware dedicado para o **Wifi Bee**. Esta biblioteca usa a **pilha uip TCP/IP** de Adam Dunkels.
Esta biblioteca é fornecida sob GPL v2 pelo autor original. Portanto, qualquer aplicação que possa ser construída com WiShield também deve ser compatível com GPLv2.

1.Faça o download da biblioteca em [WiShield](https://github.com/asynclabs/WiShield).

2.Extraia o conteúdo para o diretório Arduino **/libraries/WiShield**.

3.A biblioteca vem com muitos exemplos de aplicação. Ela é escrita de forma configurável de modo que apenas a funcionalidade necessária seja compilada. Isso economiza FLASH.

- Essa configuração é tratada em **/libraries/WiShield/apps-conf.h**.

- Descomente o modo desejado para a aplicação que você está construindo, como WEB-SERVER ou WEB-CLIENT ou aplicação SOCKET, etc., no arquivo **/libraries/WiShield/apps-conf.h**.

- Por exemplo, se você quiser construir uma aplicação de Servidor Web, o **#define APP_WEBSERVER** deve ter sido descomentado e todos os outros modos comentados. Essas alterações exigem a recompilação da biblioteca. Portanto, feche e reabra o Arduino IDE.

4.Vamos construir o exemplo WebServer.

- Defina a configuração de modo como APP_WEBSERVER em **/libraries/WiShield/apps-conf.h**.

- Abra o sketch /libraries/WiShield/examples/WebServer/**WebServer.pde** no Arduino IDE

- Defina o array **local_ip[]** para **{192,168,0.4}**. Este é o endereço IP do **Wifi Bee** conforme configurado acima.

- Defina o array **gateway_ip[]** para **{192,168,0,1}**. Este é o endereço IP do roteador conforme configurado na configuração de rede acima.

- Defina o array **subnet_mask[]** para **{255,255,255,0}**. Esta é a máscara de sub-rede para a rede sem fio local.

- Defina **prog_char ssid[]** para **{"HOMENETWORK"}**. Este nome também foi atribuído durante a configuração da rede.

- O próximo passo é definir o **security_type** para as opções de segurança configuradas durante a configuração da rede. Defina como 2 (ou seja, WPA) conforme configurado no roteador WiFi.

- `//unsigned char security_type = 2; // 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2`

- Também defina ` const prog_char security_passphrase[] PROGMEM = {"12345678"} `

5.O sketch WebServer.pde modificado fica como o código listado abaixo.

6.Defina o tipo de placa como **Arduino Duemilanove** e compile o sketch.

7.Envie‑o para o **Wifi Bee** e pressione o botão Reset

8.Se tudo correr bem, o Wifi Bee se conecta à HOMENETWORK e o LED AZUL (LED WIFI) acende

9.Abra um navegador web em um PC conectado à HOMENETWORK e digite a URL `[http://192.168.0.4]`

10.Você receberá a mensagem `Hello World!! I am WifiBee.`

```
/*
 * Web Server: Modified WebServer.pde example.
 * A simple web server example using the WiShield library and WiBee.
 */

#include <WiShield.h>

#define WIRELESS_MODE_INFRA 1
#define WIRELESS_MODE_ADHOC 2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4}; // IP address of Wifi Bee
unsigned char gateway_ip[] = {192,168,0,1}; // router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0}; // subnet mask for the local Wireless network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"}; // max 32 bytes

unsigned char security_type = 2; // 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"}; // max 64 characters. The network name.

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM = { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, // Key 0
     0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Key 1
     0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Key 2
     0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // Key 3
    };

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
//---------------------------------------------------------------------------

void setup()
{
 WiFi.init();
}

// This is the webpage that is served up by the webserver
const prog_char webpage[] PROGMEM = {"HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<center><h1>Hello World!! I am WifiBee.</h1></center>"};

void loop()
{
 WiFi.run();
}
```

### Exemplos ###

#### Servidor Web simples que envia o valor do sensor para o navegador Web ####

- Use a configuração de rede conforme descrito acima.

- Use o [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) para programação e alimentação.

- Configure o apps-conf.h, de forma que apenas o modo APP_WISERVER seja usado.

- Compile e faça o upload do sketch a seguir para o **Wifi Bee** usando a Arduino IDE conforme descrito no exemplo acima.

- Pressione o botão de reset. Aguarde o Wifi Bee conectar-se à rede WiFi (LED azul acende).

- Informações detalhadas da comunicação de rede podem ser vistas se o terminal da porta serial estiver aberto na Arduino IDE (com 57600 baud).

- Abra um navegador web em um PC conectado à HOMENETWORK e digite a URL `[http://192.168.0.4]`
- O WifiBee envia o valor do sensor para o navegador. O código HTML é escrito de forma que ele seja atualizado automaticamente a cada 10 segundos.

```
/*
 * A simple sketch that uses WiServer and Seeedstudios Wifi Bee to serve a webpage.
 * An analog sensor is connected to A2 of Wifi Bee (use Grove - XBee Carrier). This value is sent to the
 * client (a web browser). The HTML page is prepared based on sensor value. It also has direction
 * to refresh itself automatically.
 */

/*This example is based on SimpleServer.pde. Copyrights rests with original author */

/* for this example to work, modify apps-conf.h file as below ; only APP_WISERVER mode is enabled :
--------------------------------------------------------------------

//Here we include the header file for the application(s) we use in our project.
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/

#include <WiServer.h>

#define WIRELESS_MODE_INFRA 1
#define WIRELESS_MODE_ADHOC 2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4}; // IP address of WifiBee
unsigned char gateway_ip[] = {192,168,0,1}; // router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0}; // subnet mask for the local network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"}; // max 32 bytes

unsigned char security_type = 2; // 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"}; // max 64 characters

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM = { 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, // Key 0
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Key 1
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Key 2
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // Key 3
    };

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;
unsigned int  sensorValue;
unsigned char ssid_len;
unsigned char security_passphrase_len;
// End of wireless configuration parameters ----------------------------------------

int counter;
// This is our page serving function that generates web pages
boolean sendMyPage(char* URL) {

    // Check if the requested URL matches "/"
    if (strcmp(URL, "/") == 0) {
        // Use WiServer's print and println functions to write out the page content
        WiServer.print("<html>");

        // Instruct the web broweser to refersh every 10 seconds
        WiServer.print("<head><meta http-equiv=\"refresh\" content=\"10\"> </head>");
        WiServer.println("<H1>WifiBee Connected...<H1>");
        WiServer.print("<H2>Sensor Value = ");
        WiServer.print(sensorValue);  //A2 is connected to an exernal sensor. The RAW value is send to the client.
        WiServer.print("</H2></html>");
        return true;
    }
    // URL not found
    return false;
}

void setup() {

  // Initialize WiServer and have it use the sendMyPage function to serve pages
  WiServer.init(sendMyPage);

  // Enable Serial output and ask WiServer to generate log messages (optional)
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);
}

void loop(){
  sensorValue = analogRead(A2);  //A2 is connected to an exernal sensor via Grove interface in Grove - XBee Carrier .
  // Run WiServer
  WiServer.server_task();
  delay(10);
}
```

#### Cliente Web simples que envia leituras do sensor para Pachube.com ####

` This section will be revised later `

- Use a configuração de rede conforme descrita acima.

- Use o [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)  para programação e alimentação.

- Configure o apps-conf.h, de forma que apenas o modo APP_WISERVER seja usado.

- Compile e faça o upload do sketch a seguir para o **Wifi Bee** usando a Arduino IDE conforme descrito no exemplo acima.

- Pressione o botão de reset. Aguarde o Wifi Bee conectar-se à rede WiFi (LED azul acende).

- Informações detalhadas da comunicação de rede podem ser vistas se o terminal da porta serial estiver aberto na Arduino IDE (com 57600 baud).

- O Wifi Bee envia periodicamente os dados para Pachube.com

```
/*
 * A simple sketch that uses WiServer library and Seeedstudio's WifiBee to send sensor
 * feed to pachube.com ;
 * This is modified version SimpleClient.pde. Copyright rests with original author.
 */

/* for this example to work, modify apps-conf.h file as below ; only APP_WISERVER mode is enabled :
--------------------------------------------------------------------
//Here we include the header file for the application(s) we use in our project.
//#define APP_WEBSERVER
//#define APP_WEBCLIENT
//#define APP_SOCKAPP
//#define APP_UDPAPP
#define APP_WISERVER
----------------------------------------------------------------------
*/


#include <WiServer.h>

#define WIRELESS_MODE_INFRA 1
#define WIRELESS_MODE_ADHOC 2

// Wireless configuration parameters ----------------------------------------
unsigned char local_ip[] = {192,168,0,4}; // IP address of WifiBee
unsigned char gateway_ip[] = {192,168,0,1}; // router or gateway IP address
unsigned char subnet_mask[] = {255,255,255,0}; // subnet mask for the local network
const prog_char ssid[] PROGMEM = {"HOMENETWORK"};// max 32 bytes

unsigned char security_type = 2; // 0 - open; 1 - WEP; 2 - WPA; 3 - WPA2

// WPA/WPA2 passphrase
const prog_char security_passphrase[] PROGMEM = {"12345678"}; // max 64 characters

// WEP 128-bit keys
// sample HEX keys
prog_uchar wep_keys[] PROGMEM =
{ 0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x08, 0x09, 0x0a, 0x0b, 0x0c, 0x0d, // Key 0
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Key 1
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, // Key 2
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 // Key 3
};

// setup the wireless mode
// infrastructure - connect to AP
// adhoc - connect to another WiFi device
unsigned char wireless_mode = WIRELESS_MODE_INFRA;

unsigned char ssid_len;
unsigned char security_passphrase_len;
// End of wireless configuration parameters ----------------------------------------


// Function that prints data from the server
void printData(char* data, int len) {

  // Print the data returned by the server
  // Note that the data is not null-terminated, may be broken up into smaller packets, and
  // includes the HTTP header.
  while (len-- > 0) {
    Serial.print(*(data++));
  }
}

int sensorValue=0;
//Prepare data to the feed
void pachubefeedData()
{
   sensorValue=analogRead(A2);   //Read analog sensor connected to A2 (Use Grove - XBee Carrier interface)
   WiServer.print(sensorValue);
}



// IP Address for pachube.com
uint8 ip[] = {173,203,98,29};

char hostName[] = "www.pachube.com\nX-PachubeApiKey: YOUR_API_KEY_HERE\nConnection: close"; // Replace YOUR_API_KEY_HERE , with your API key
char url[] = "/api/12345.csv?_method=put"; //Replace 12345 with your feed number

// A request that POSTS data to Pachube
POSTrequest postPachubeFeed(ip, 80, hostName, url, pachubefeedData);


void setup() {
    // Initialize WiServer (we'll pass NULL for the page serving function since we don't need to serve web pages)
  WiServer.init(NULL);

  // Enable Serial output and ask WiServer to generate log messages (optional)
  Serial.begin(57600);
  WiServer.enableVerboseMode(true);

  // Have the processData function called when data is returned by the server
  postPachubeFeed.setReturnFunc(printData);
}


// Time (in millis) when the data should be retrieved
long updateTime = 0;

void loop(){

  // Check if it's time to send an update
  if (millis() >= updateTime) {
    postPachubeFeed.submit();    
    // Send another update after a min
    updateTime += 60;
  }

  // Run WiServer
  WiServer.server_task();

  delay(10);
}
```

## Lista de Materiais (BOM) /lista de peças ##

|Peça|Quantidade|Valor|Pacote|
|---|---|---|---|
|C1|1|10u|C_TAN_3X3.5|
|C2,C3|2|1u|0603|
|C4|1|100n|0603|
|J1|1|CK_2X3_2.0|CK_2X3_2.0|
|PWR|1|vermelho|LED0603|
|R1|1|10k|0603|
|R2,R3,R4,R5,R7|5|4.7k|0603|
|R6|1|1k|0603|
|U1|1|OPEN_BEE|XBEE_EXT_SMD|
|U3|1|MRF24WB0MA|MRF24WB0MA|
|U4|1|ATmega328P_MU1040|MLF32X|
|WIFI|1|azul|LED0603|
|X1|1|16MHz|XTAL_3X2|

## Suporte ##

Se você tiver dúvidas ou outras ideias de design melhores, você pode ir ao nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

## Rastreador de Versões ##

 |Revisão|Descrições|Lançamento|
 |----|----|----|
 |v0.91b|Lançamento público inicial|6 de abril de 2011|
 |v1.0|Alterar a largura do fio de sinal de 6 mil para 8 mil|13 de dezembro de 2011|

## Visualizador Online do Esquemático do WifiBee v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visualizador Online do Esquemático do WifiBee v0.91b

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/pt-br/images/f/ff/Wifi_Bee_v0.91b_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]**[Arquivos Eagle do WifiBee v1.0.zip](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip)
- **[PDF]**[PCB do WifiBee v1.0](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20PCB.pdf)
- **[PDF]**[SCH do WifiBee v1.0](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20Sch.pdf)
- **[PDF]**[esquemáticos do WifiBee v0.91b em formato pdf](https://wiki.seeedstudio.com/pt-br/images/9/9f/WifiBee_v0.91b.pdf)
- **[EAGLE]**[arquivos de projeto do Wifi Bee v0.91b em formato Eagle](https://wiki.seeedstudio.com/pt-br/images/f/ff/Wifi_Bee_v0.91b_eagle.zip)
- **[Library]**[Biblioteca WiShield](https://github.com/asynclabs/WiShield)
- **[Library]**[uma biblioteca WiShield mais atualizada, compatível com Arduino 1.0](https://github.com/CapnBry/WiShield_user_contrib)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
