---
description: Wifi Bee
title: Wifi Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_Wifibee_MRF24WB0MA.jpg) ![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/SeeedStudio_Wifibee_ATMega328.jpg)

**Wifi Bee** es un nodo MCU independiente compatible con socket xBee Pro útil para Redes de Sensores Inalámbricas. Integra el módulo transceptor Wi-Fi IEEE 802.11 de Microchip [MRF24WB0MA](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en548014) y un MCU AVR de 8 bits [ATMega328P](http://www.atmel.com/dyn/products/product_card.asp?part_id=4198). El diseño inteligente y compatible con socket xBee Pro hace que sea muy fácil de integrar en tu producto. El **ATMega328P** puede ser programado directamente bajo el IDE de código abierto Arduino cuando lo conectas al [UartSBee](https://seeeddoc.github.io/UartSBee/) o [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/). Los pines SPI en el MCU están conectados a los pines correspondientes del MRF24WB0MA para comunicarse entre sí, mientras que algunos de los otros pines (DIO, AD, PWM, etc.) se extienden a los 20 pines de los conectores macho de 2.0 mm. Ten en cuenta que aún no hay firmware dedicado para Wifi Bee, pero puedes usar el firmware de [WiShield](https://github.com/asynclabs/WiShield) de AsyncLabs. Asegúrate de que puedas usarlo antes de comprarlo.

Modelo: [WLS48188P](https://www.seeedstudio.com/depot/wifi-bee-p-823.html?cPath=139_141&amp;zenid=15bcf2644eb7ecf4b3722eb98c79b074)

## Características ##

- Conectores compatibles con xBee

- Programable usando Arduino IDE

- Bootloader Arduino Duemilanove preprogramado

- Soporta Wi-Fi de bajo consumo y baja velocidad de datos.

- Compatible con 802.11b

- Seguridad WEP, WPA-PSK, WPA2-PSK

- LEDs para indicación de alimentación y conexión Wi-Fi.

## Ideas de Aplicación ##

- Red de Área Local Inalámbrica

- Red de Sensores Inalámbrica usando [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)
- Conectividad a Internet

- Construye aplicaciones de red infinitas con [uIP TCP/IP Stack](https://en.wikipedia.org/wiki/UIP_(micro_IP))
- Ideal para personas que quieren aprender y experimentar con TCP/IP Stack

## Esquemático ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b.png)

[Haz clic aquí para abrir el esquemático en formato PDF](https://wiki.seeedstudio.com/es/images/9/9f/WifiBee_v0.91b.pdf)

## Especificaciones Clave ##

 |Elemento|Mínimo| Típico| Máximo
 |---|---|---|---|
 |Voltaje de operación|3.0V|3.3V|3.6V
 |Temperatura de trabajo|0°C a +70°C|||
 |Frecuencia de trabajo|16MHz|||
 |MCU|ATmega328P||||

## Dimensiones Mecánicas ##

Wifi Bee tiene un tamaño de 27.2mm x 35.7mm.

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Wifi_Bee_v0.91b_pcb.png)

## Hardware ##

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Seeedstudio_WifiBee_Parts.png)
**Wifi Bee** - Partes

### Definición de pines y especificaciones ###

|Pin|#|Tipo de Pad|Descripción|Número de Pin Arduino|
|---|---|---|---|---|
|3V3|1|Entrada de alimentación|VCC, +3.3V|-|
|TX|2|Salida|Puerto Uart Tx|1(DIO)|
|RX|3|Entrada|Puerto Uart Rx|0(DIO)|
|PB0|4|Entrada/Salida|ATmega328P PB0|8(DIO)|
|!RESET|5|Entrada|Puerto Reset ATmega328|||
|PD7|6|Entrada/Salida|ATmega328P PD7|7(DIO)|
|PD6|7|Entrada/Salida|ATmega328P PD6|6(DIO)|
|PD5|8|Entrada/Salida|ATmega328P PD5|5(DIO)|

|!DTR|9|Entrada|Usado para programar el ATmega328P|  -
|GND|10|GND|GND| -|
|PC1|11|Entrada/Salida|ATmega328P PC1|1(Entrada analógica)/15(DIO)|
|PC0|12|Entrada/Salida|ATmega328P PC0|0(Entrada analógica)/14(DIO)|
|AD7|13|Entrada|ATmega328P ADC7|7(Entrada analógica)|
|VREF|14|Entrada|Puerto ATmega328P AREF| -|
|AD6|15|Entrada|ATmega328P ADC6|6(Entrada analógica)|
|INT1|16|Entrada/Salida|ATmega328P PD3|3(DIO)|
|PC3|17|Entrada/Salida|ATmega328P PC3|3(Entrada analógica)/17(DIO)|
|PC2|18|Entrada/Salida|ATmega328P PC2|2(Entrada analógica)/16(DIO)|
|SCLSCL |19 |Entrada/Salida| ATmega328P |PC5 5(Entrada analógica)/19(DIO)|
|SDA |20| Entrada/Salida| ATmega328P PC4 |4(Entrada analógica)/18(DIO)|

## Uso ##

### Instalación de Hardware ###

- La mejor manera de usar Wifi Bee es conectarlo a [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) . [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)  proporciona conectividad USB-UART para programación y suministro de energía con su regulador LDO de 3.3V integrado.

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Twig.jpg)
Grove - XBee Carrier - Conectado a **Wifi Bee** y Alimentado por USB

### Programación ###

#### Configuración de Red Inalámbrica ####

Esta sección proporciona una breve descripción sobre la configuración de una Red Doméstica con un router WiFi adecuado para **Wifi Bee**.

![](https://files.seeedstudio.com/wiki/Wifi_Bee/img/WifiBee_Network_Architecture.jpg)
Red de Sensores Inalámbrica - Arquitectura de Muestra con Nodos Wifi Bee

1.Inicie sesión en la interfaz de configuración web del router WiFi usando un navegador web. Normalmente el fabricante del router proporciona una dirección IP predeterminada como 192.168.0.1 y un ID de inicio de sesión:admin y Contraseña:password. Use esto.

2.En el caso anterior, la dirección IP del router 192.168.0.1 es también la dirección IP de puerta de enlace de la Red Inalámbrica. La máscara de subred para esta dirección IP es 255.255.255.0
3.Establezca un nombre o SSID para la Red Inalámbrica. Establezcámoslo como HOMENETWORK. Este nombre se usará a lo largo del tutorial.

4.Cualquier nodo que se conecte a un router obtiene una dirección IP a través de DHCP. Pero, Wifi Bee no soporta DHCP. Tenemos que asignar una dirección IP estática. Muchos routers proporcionan reserva de direcciones usando dirección MAC para dispositivos de red. En la sección de configuración LAN del router inalámbrico, reserve la dirección IP 192.168.0.4 para **Wifi Bee**.

- 1.Ingrese la dirección IP a reservar como 192.168.0.4. Esta es la dirección IP de **Wifi Bee**
- 2.Necesita ingresar la dirección MAC mostrada en Wifi Bee en la forma AB:CD:EF:GH:IJ:KL
- 3.Asigne el nombre del dispositivo como WIFIBEE. Este nombre puede ser cualquier palabra y no es muy importante.

5.Configure las opciones de Seguridad de la Red. Wifi Bee soporta **Abierto(Seguridad deshabilitada), WEP (Privacidad Equivalente Cableada), WPA-PSK (Acceso Protegido Wi-Fi con Clave Pre-Compartida) y WPA2-PSK (Acceso Protegido Wi-Fi 2 con Clave Pre-Compartida)**. Establezca una opción de seguridad adecuada. Esta configuración es usada por **Wifi Bee** para establecer la conexión.

- 1.Establezcamos la opción de seguridad a WPA-PSK.

- 2.El modo WPA-PSK requiere Clave de Red de Cifrado de Seguridad WPA-PSK. Establezca esta clave a 12345678

6.Consulte la guía del usuario del router para configurar otras configuraciones como conectarse a internet, etc..

#### Descarga y configuración de la Biblioteca para ejecutar los ejemplos de aplicación ####

Los ejemplos de aplicación usan la biblioteca WiSheild de Asynclabs. No hay otro firmware dedicado para **Wifi Bee**. Esta biblioteca usa **pila TCP/IP uip** de Adam Dunkels.
Esta biblioteca se proporciona bajo GPL v2 por el autor original. Por lo tanto, cualquier aplicación que pueda construirse con WiShield también debe ser compatible con GPLv2.

1.Descargue la biblioteca desde [WiShield](https://github.com/asynclabs/WiShield).

2.Extraiga el contenido al directorio **/libraries/WiShield de Arduino**.

3.La biblioteca viene con muchos ejemplos de aplicación. Está escrita de manera configurable tal que solo se construye la funcionalidad requerida. Esto ahorra FLASH.

- Esta configuración se maneja en **/libraries/WiShield/apps-conf.h**.

- Descomente el modo deseado para la aplicación que está construyendo como WEB-SERVER o WEB-CLIENT o Aplicación SOCKET, etc.. en el archivo **/libraries/WiShield/apps-conf.h**.

- Por ejemplo, si quiere construir una Aplicación de Servidor Web, el **#define APP_WEBSERVER** debería haber sido descomentado y todos los otros modos están comentados. Estos cambios requieren reconstruir la biblioteca. Por lo tanto, cierre y vuelva a abrir Arduino IDE.

4.Construyamos el ejemplo WebServer.

- Establezca la configuración de modo como APP_WEBSERVER en **/libraries/WiShield/apps-conf.h**.

- Abra el sketch /libraries/WiShield/examples/WebServer/**WebServer.pde** en Arduino IDE

- Establezca el arreglo **local_ip[]** a **{192,168,0.4}**. Esta es la dirección IP de **Wifi Bee** como se configuró arriba.

- Establezca el arreglo **gateway_ip[]** a **{192,168,0,1}**. Esta es la dirección IP del router como se configuró en la configuración de red arriba.

- Establezca el arreglo **subnet_mask[]** a **{255,255,255,0}**. Esta es la máscara de subred para la red inalámbrica local.

- Establezca **prog_char ssid[]** a **{"HOMENETWORK"}**. Este nombre también fue asignado durante la configuración de red.

- El siguiente paso es establecer el **security_type** a las opciones de seguridad configuradas durante la configuración de red. Establezca a 2 (es decir WPA) como se configuró en el router Wifi.

- `//unsigned char security_type = 2; // 0 - abierto; 1 - WEP; 2 - WPA; 3 - WPA2`

- También establezca ` const prog_char security_passphrase[] PROGMEM = {"12345678"} `

5.El sketch WebServer.pde modificado se ve como el código listado abajo.

6.Establezca el tipo de placa a **Arduino Duemilanove** y compile el sketch.

7.Súbalo a **Wifi Bee** y presione el botón Reset

8.Si todo va bien, el Wifi Bee se conecta a HOMENETWORK y el LED AZUL (LED WIFI) se enciende

9.Abra un navegador web desde una PC conectada a HOMENETWORK y escriba la URL `[http://192.168.0.4]`

10.Obtendría el mensaje `Hello World!! I am WifiBee.`

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

### Ejemplos ###

#### Servidor Web Simple que envía valores de sensor al navegador Web ####

- Usa la configuración de red como se describe arriba.

- Usa el [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/) para programación y alimentación.

- Configura apps-conf.h, de tal manera que solo se use el modo APP_WISERVER.

- Compila y sube el siguiente sketch al **Wifi Bee** usando Arduino IDE como se describe en el ejemplo anterior.

- Presiona el botón de reset. Espera a que el Wifi Bee se conecte a la red WiFi (el LED azul se enciende).

- La información detallada de la comunicación de red se puede ver; si el terminal del puerto serie está abierto en Arduino IDE (con 57600 baudios).

- Abre un navegador web desde una PC conectada a HOMENETWORK y escribe la URL `[http://192.168.0.4]`
- WifiBee sirve el valor del Sensor al navegador. El código HTML está escrito de tal manera que se actualiza automáticamente cada 10 segundos.

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

#### Cliente Web Simple que envía feeds de sensores a Pachube.com ####

` Esta sección será revisada más tarde `

- Usa la configuración de red como se describe arriba.

- Usa el [Grove - XBee Carrier](https://seeeddoc.github.io/Grove-XBee_Carrier/)  para programación y alimentación.

- Configura apps-conf.h, de tal manera que solo se use el modo APP_WISERVER.

- Compila y sube el siguiente sketch al **Wifi Bee** usando Arduino IDE como se describe para el ejemplo anterior.

- Presiona el botón de reset. Espera a que el Wifi Bee se conecte a la red WiFi (el LED azul se enciende).

- La información detallada de la comunicación de red se puede ver; si, el terminal del puerto serie está abierto en Arduino IDE (con 57600 baudios).

- Wifi Bee alimenta periódicamente los datos a Pachube.com

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

## Lista de Materiales (BOM) / lista de partes ##

|Parte|Cantidad|Valor|Paquete|
|---|---|---|---|
|C1|1|10u|C_TAN_3X3.5|
|C2,C3|2|1u|0603|
|C4|1|100n|0603|
|J1|1|CK_2X3_2.0|CK_2X3_2.0|
|PWR|1|rojo|LED0603|
|R1|1|10k|0603|
|R2,R3,R4,R5,R7|5|4.7k|0603|
|R6|1|1k|0603|
|U1|1|OPEN_BEE|XBEE_EXT_SMD|
|U3|1|MRF24WB0MA|MRF24WB0MA|
|U4|1|ATmega328P_MU1040|MLF32X|
|WIFI|1|azul|LED0603|
|X1|1|16MHz|XTAL_3X2|

## Soporte ##

Si tienes preguntas u otras mejores ideas de diseño, puedes ir a nuestro [foro](https://www.seeedstudio.com/forum) o **deseas** discutir.

## Seguimiento de Versiones ##

 |Revisión|Descripciones|Lanzamiento|
 |----|----|----|
 |v0.91b|Lanzamiento público inicial|6 de abril, 2011|
 |v1.0|Cambiar el ancho del cable de señal de 6 mil a 8 mil|13 de diciembre, 2011|

## Visor en Línea del Esquemático WifiBee v1.0

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Visor en Línea del Esquemático WifiBee v0.91b

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/es/images/f/ff/Wifi_Bee_v0.91b_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]**[Archivos Eagle WifiBee v1.0.zip](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee_v1.0_Eagle_Files.zip)
- **[PDF]**[PCB WifiBee v1.0](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20PCB.pdf)
- **[PDF]**[Esquemático WifiBee v1.0](https://files.seeedstudio.com/wiki/Wifi_Bee/res/WifiBee%20v1.0%20Sch.pdf)
- **[PDF]**[Esquemáticos WifiBee v0.91b en formato pdf](https://wiki.seeedstudio.com/es/images/9/9f/WifiBee_v0.91b.pdf)
- **[EAGLE]**[Archivos de diseño Wifi Bee v0.91b en formato Eagle](https://wiki.seeedstudio.com/es/images/f/ff/Wifi_Bee_v0.91b_eagle.zip)
- **[Librería]**[Librería WiShield](https://github.com/asynclabs/WiShield)
- **[Librería]**[una librería WiShield más actualizada, compatible con Arduino 1.0](https://github.com/CapnBry/WiShield_user_contrib)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
