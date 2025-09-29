---
description:  Wifi Shield V1.2
title:  Wifi Shield V1.2
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Shield_V1.2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---
<!-- ---
name:  Wifi Shield V1.2
category: Discontinued
bzurl:
oldwikiname: Wifi_shield_v1.2
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Wifi_shield_v1-2
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_front.png)

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_back.png)

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/depot/Wifi-Shield-p-1220.html" target="blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" border={0} /></a></p>

Este shield WiFi cuenta con el módulo TCP/IP RN171 para permitir que tu Arduino/Seeeduino se conecte con redes inalámbricas de hasta 802.11b/g. El protocolo de comunicación predeterminado del shield con el Arduino es UART/Serial, y puedes seleccionar qué pines digitales (D0 a D7) usar para RX y TX con dos filas de jumpers que hemos incorporado. El shield también tiene dos conectores Grove integrados para I2C y Serial para permitir que el shield se use con cualquiera de nuestros dispositivos Grove. Una antena integrada permite que el shield cubra un rango más amplio y transmita señales más fuertes. El módulo RN171 soporta protocolos de comunicación TCP, UDP, FTP y HTTP para satisfacer las necesidades de la mayoría de proyectos de redes inalámbricas e Internet de las Cosas (IoT), por ejemplo, redes domésticas inteligentes, control de robots, estaciones meteorológicas personales. El shield está muy bien documentado con nuestros ejemplos a continuación y su [manual de usuario](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf).

## Especificaciones

<table>
  <tbody>
    <tr>
      <td>Elemento</td>
      <td>Valor</td>
    </tr>
    <tr>
      <td>Voltaje de operación</td>
      <td>3.3~5.5 V</td>
    </tr>
    <tr>
      <td>Placa compatible directamente</td>
      <td>Arduino Uno/Seeeduino</td>
    </tr>
    <tr>
      <td>Corriente</td>
      <td>25~400mA</td>
    </tr>
    <tr>
      <td>Potencia de transmisión</td>
      <td>0-10 dBm</td>
    </tr>
    <tr>
      <td>Frecuencia</td>
      <td>2402~2480 MHz</td>
    </tr>
    <tr>
      <td>Canal</td>
      <td>0~13</td>
    </tr>
    <tr>
      <td>Velocidad de red</td>
      <td>1-11 Mbps para 802.11b/6-54Mbps para 802.11g</td>
    </tr>
    <tr>
      <td>Dimensión</td>
      <td>60X56X19 mm</td>
    </tr>
    <tr>
      <td>Peso neto</td>
      <td>24±1 g</td>
    </tr>
    <tr>
      <td>Autenticación WiFi segura</td>
      <td>WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)</td>
    </tr>
    <tr>
      <td>Aplicaciones de red integradas</td>
      <td>Cliente DHCP, cliente DNS, ARP, ping ICMP, FTP, TELNET, HTTP, UDP, TCP</td>
    </tr>
    <tr>
      <td>Certificación</td>
      <td>RN171 : FCC, CE</td>
    </tr>
  </tbody>
</table>

## Interfaz y Componentes del Shield

El shield WiFi es compatible con cualquier placa de desarrollo Arduino/Seeeduino ya que solo requiere dos pines digitales de tu elección entre D0-D7 para comunicación UART/serie. Para instalarlo, simplemente apila el shield sobre la placa Arduino/Seeeduino.

### Descripción General

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.2_block1.png)

**1.Conexiones de Interfaz Periférica Serie (SPI) (MOSI, SCK, MISO):** Estos pines no están conectados a ninguno de los pines del Arduino, son independientes y el nivel lógico de salida/entrada de los mismos es 3.3V. Pueden usarse para comunicarse con el Arduino vía SPI pero se necesitará un convertidor de nivel lógico de 3.3V entre estos pines y los del Arduino. La velocidad de datos en modo SPI puede alcanzar hasta 2Mbps.
    **RES_Wifi:** El shield WiFi tiene un "Botón de Reinicio" integrado para el módulo RN-171, también puedes reiniciar el RN-171 vía software enviando el comando de reinicio. Adicionalmente, si deseas conectar este pin al pin digital 6 del Arduino, simplemente suelda la almohadilla etiquetada "P5" en el shield.

**2.RN171:** un módulo inalámbrico de consumo de energía súper bajo con pila TCP/IP integrada.

**3.Antena:** conector I.PEX.

**4.Sección de breakout RN171:** El módulo RN171 tiene sus propios pines de entrada analógica y GPIO, a los cuales el shield proporciona acceso a través de esta sección de breakout. Los pines GPIO (IO3, IO7, IO8, e IO9) toleran 3.3V mientras que los pines de entrada analógica (S_0 y S_1) pueden leer 0-400mV (No exceder 1.2V). El RN171 puede configurarse para usar estos pines por software o pueden conectarse a otros pines para usar otras funciones del RN171 como el modo adhoc. El voltaje de VCC depende de la alimentación del shield WiFi.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.2_breakout.png)

**5.Área de Selección UART/Serie:** Dos filas de jumpers para permitirte seleccionar qué pines RX y TX deseas usar para comunicarte con el Arduino.

**6.Conectores Grove:** Grove I2C Analógico (si usas Arduino UNO o Seeeduino) para pines A4&A5 y Grove Serie Digital para D8&D9. El voltaje VCC depende de la fuente de alimentación de la placa.

### Pines Utilizados / Compatibilidad del Shield

El shield WiFi usa cualquier dos pines digitales de tu elección entre D0 y D7 para comunicarse con el módulo WiFi RN171, sin embargo ten en cuenta que D0 y D1 son usados por el Arduino para propósitos de programación y comunicación serie y usarlos podría interferir con estas dos funciones.

En los códigos de ejemplo en esta página usamos D2 y D3 como RX y TX para el shield. En este caso, los sombreros de jumper deberían conectarse como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_pinout.png)

D2 seleccionado para WIFI_TX, D3 seleccionado para WIFI_RX

### Módulo WiFi RN171

El RN-171 es un módulo de red inalámbrica TCP/IP completo e independiente. Debido a su factor de forma pequeño y consumo de energía extremadamente bajo, el RN-171 es perfecto para aplicaciones inalámbricas móviles. Incorpora una radio de 2.4GHz, procesador SPARC de 32 bits, pila TCP/IP, reloj de tiempo real, acelerador criptográfico, gestión de energía e interfaces de sensores analógicos.

En la configuración más simple el hardware solo requiere cuatro conexiones (PWR, TX, RX y GND) para crear una conexión de datos WiFi inalámbrica. Adicionalmente, las entradas de sensores analógicos del RN171 pueden usarse como pines de entrada analógica, su clasificación es 0-400 mV (No exceder 1.2V DC).

**Alimentación:** El voltaje de operación del módulo RN-171 es típicamente 3.3VDC, por lo que un regulador de voltaje y traductor de nivel lógico están diseñados en el shield WiFi. El regulador LD1117 en el shield convierte a 3.3VDC, que alimenta el módulo RN171. Sin embargo, debido al esquema de juicio automático de fuente de alimentación, el RN-171 puede alimentarse tanto vía el pin 3V3 como el pin 5V. Pero la alimentación sería 5v si se proporciona tanto 3.3v como 5v a la placa. Si se usa con una placa Arduino/Seeeduino simplemente apila el shield WiFi sobre la placa.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_communicate.png)

Diagrama de cómo el módulo RN171 se interfaza con el Arduino

**GPIO_6 :** El pin GPIO6 del módulo WiFi RN171 está por defecto solo conectado al LED etiquetado D5 en el shield WiFi. Este LED se usa para mostrar el estado de la conexión del Punto de Acceso (AP). Si sin embargo, deseas conectar GPIO6 al pin digital 5 del Arduino, simplemente suelda la almohadilla etiquetada "P6" en el shield WiFi.

### Indicadores de Estado LED

<table>
  <tbody>
    <tr>
      <td>Etiqueta</td>
      <td>Descripción</td>
      <td>Estado</td>
      <td>Conexión de Hardware</td>
    </tr>
    <tr>
      <td>D5</td>
      <td>LED Verde. Indica el estado de asociación.</td>
      <td><strong>APAGADO</strong>: significa que el módulo no está asociado con una red.<br/><strong>Encendido Sólido</strong>: indica que está asociado y el acceso a Internet está OK</td>
      <td>Conectado a GPIO6 del módulo RN171</td>
    </tr>
    <tr>
      <td>D1</td>
      <td>LED Rojo. Indica el estado de conexión TCP/IP.</td>
      <td><strong>Encendido Sólido</strong>: conectado sobre TCP.<br/><strong>Parpadeo Rápido (2 veces/segundo)</strong>: Sin dirección IP o el módulo está en modo comando.<br/><strong>Parpadeo Lento (una vez/segundo)</strong>: La dirección IP está OK.</td>
      <td>Conectado a GPIO4 del módulo RN171</td>
    </tr>
    <tr>
      <td>RST</td>
      <td>LED Rojo. Estado de reinicio del módulo WiFi.</td>
      <td><strong>Encendido Sólido</strong>: El botón de reinicio (WIFI_RST) está siendo presionado.</td>
      <td>Conectado al Reset del módulo RN171.</td>
    </tr>
    <tr>
      <td>PWR</td>
      <td>LED Verde. Indica el estado de encendido del módulo WiFi.</td>
      <td><strong>Encendido Sólido</strong>:El módulo/shield está encendido.</td>
      <td>Conectado a la salida de 3.3V del regulador de voltaje LD1117.</td>
    </tr>
  </tbody>
</table>

## Biblioteca WiFi

Hemos creado una biblioteca para ayudarte a interactuar con el shield, en esta sección te mostraremos cómo configurar la biblioteca e introduciremos algunas de las funciones.

### Configuración

1.[Descarga el código de la biblioteca como un archivo zip desde la página de github del Wifi Shield.](https://github.com/Seeed-Studio/WiFi_Shield)

2.Descomprime el archivo descargado en tu carpeta …/arduino/libraries/ .

3.Renombra la carpeta descomprimida "WifiShield"

4.Inicia el Arduino IDE (o reinicia si está abierto).

### Funciones

Estas son las funciones más importantes/útiles en la biblioteca, te invitamos a que veas los archivos .h por ti mismo para ver todas las funciones disponibles.

#### Join()

* **Descripción:**
  * Se usa para unirse a un punto de acceso WiFi
* **Sintaxis:**
  * join(const char *ssid, const char*phrase, int auth)
* **Parámetros:**
  * **ssid:** El nombre del punto de acceso al que quieres que el shield se conecte
  * **phrase:** La contraseña/frase del punto de acceso al que quieres que el shield se conecte
  * **auth:** El tipo de autenticación del punto de acceso al que quieres que el shield se conecte. Puede ser una de las siguientes constantes:
    * WIFLY_AUTH_OPEN
    * WIFLY_AUTH_WEP
    * WIFLY_AUTH_WPA1
    * WIFLY_AUTH_WPA1_2
    * WIFLY_AUTH_WPA2_PSK
    * WIFLY_AUTH_ADHOC
* **Devuelve:**
  * **boolean:** true si la conexión al punto de acceso fue exitosa, false en caso contrario.
* **Ejemplo:**

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

SoftwareSerial uart(2, 3); // create a serial connection to the WiFi shield TX and RX pins.
WiFly wifly(&uart); // create a WiFly library object using the serial connection to the WiFi shield we created above.

void setup()
{
uart.begin(9600); // start the serial connection to the shield
Serial.begin(9600); // start the Arduino serial monitor window connection
wifly.reset(); // reset the shield
while(wifly.join("mySSID","mySSIDpassword",WIFLY_AUTH_WPA2_PSK) == false)
{
Serial.println("Failed to connect to accesspoint. Will try again.");
}
Serial.println("Connected to access point!");
}

void loop()
{

}
```

#### Receive()

* **Descripción:**
  * Se puede usar para leer datos del shield, una alternativa para la función read() de Arduino.
* **Sintaxis:**
  * receive(uint8_t *buf, int len, int timeout)
* **Parámetros:**
  * **buf:** Un array de buffer donde se almacenan los bytes leídos del shield.
  * **len:** La longitud/tamaño del array de buffer
  * **timeout:** Un valor de tiempo de espera para saber cuándo dejar de intentar leer.
* **Devuelve:**
  * **int:** El número de bytes leídos del shield.
* **Ejemplo:**

    ```C++
      char c;
      while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
        Serial.print((char)c);
      }
    ```

    Ver el sketch File->Examples->WiFi_Shield->wifly_test para un ejemplo completo.

#### SendCommand()

* **Descripción:**
  * Algunas de nuestras funciones (ej. join(), reboot(), save()) actúan como envoltorios para los comandos de texto listados en el manual de usuario del módulo RN171. La función sendCommand() te permite crear tu propia función envoltorio si las nuestras no satisfacen tus necesidades.
* **Sintaxis:**
  * sendCommand(const char *cmd, const char*ack, int timeout)
* **Parámetros:**
  * **cmd:** Cualquier comando del manual de usuario del RN-171.
  * **ack:** La cadena de retorno esperada del comando
  * **timeout:** El tiempo permitido antes de considerar la salida como una solicitud/respuesta incorrecta
* **Devuelve:**
  * **boolean:** true si el shield WiFi respondió con la cadena ack, false en caso contrario.
* **Ejemplo:**

```cpp
// our join() function is wrapper for the join command, as seen below.
//The string "Associated" is what the user manual says the RN171 will return on success.
if(sendCommand("join\r", "Associated",DEFAULT_WAIT_RESPONSE_TIME*10))
{
// joined
}else{
// not able to join
}
```

    Consulta File->Examples->WiFi_Shield->wifly_test sketch para un ejemplo completo.

## Ejemplos/Aplicaciones del WiFi Shield

### Ejemplo 1: Enviar Comandos al WiFi Shield y Recibir Respuesta a Través de la Ventana del Monitor Serie de Arduino

El módulo RN-171 del WiFi shield se configura enviándole los comandos que se encuentran en [su hoja de datos](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf). Puedes escribir un sketch para enviar los comandos automáticamente, pero este es un gran ejemplo que recomendamos que revises porque te enseñará exactamente cómo funcionan el WiFi shield y el RN-171.

Para proceder sigue los pasos a continuación, también hemos creado un video si prefieres verlo

[Video - Comenzando Con el WiFi Shield de Seeeduino.](https://www.youtube.com/watch?v=8dCrAaN16lE)

**Paso 1: Configuración de Jumpers del WiFi Shield**

Posiciona los jumpers en el WiFi shield de tal manera que el pin digital 2 (D2) esté seleccionado para WIFI_TX, y el pin digital 3 (D3) esté seleccionado para WIFI_RX como se muestra en la foto a continuación. Estos son los pines que usaremos para enviar y recibir información del RN-171.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi_shield_v1.1_front.png)

**Paso 2: Software/Código**

En el sketch a continuación hemos creado un objeto UART para permitirnos enviar y recibir datos del RN-171/WiFi Shield. Luego usamos este objeto en conjunto con la librería WiFly para enviar datos al shield. El objeto Serial de Arduino se usa para imprimir los datos que recibimos del shield, y para recibir los comandos que queremos enviar al shield a través del objeto WiFly/UART.

Sube el siguiente código a tu placa Arduino:

```cpp
#include <Arduino.h>

  #include <SoftwareSerial.h>
  #include "WiFly.h"

  // set up a new serial port.
  SoftwareSerial uart(2, 3); // create a serial connection to the WiFi shield TX and RX pins.
  WiFly wifly(&uart); // create a WiFly library object using the serial connection to the WiFi shield we created above.

  void setup()
  {
  uart.begin(9600); // start the serial connection to the shield
  Serial.begin(9600); // start the Arduino serial monitor window connection
  delay(3000); // wait 3 second to allow the serial/uart object to start
  }

  void loop()
  {

  while (wifly.available())  // if there is data available from the shield
    {
    Serial.write(wifly.read()); // display the data in the Serial monitor window.
    }

  while (Serial.available()) // if we typed a command
    {
    wifly.write(Serial.read()); // send the command to the WiFi shield.
    }
  }
  ```

**Paso 3: Entrando al Modo de Comando**

El módulo WiFly RN-171 en el shield WiFi puede operar en dos modos: datos y comando. Cuando está en modo de datos, el shield es capaz de recibir e iniciar conexiones. Cuando está en modo de comando, podemos configurar el módulo usando los comandos listados en su hoja de datos.

**Para entrar al modo de comando, sigue estos pasos:**

1.Abre el monitor serie de Arduino.
2.Configura el monitor serie a "No line ending", velocidad de baudios a 9600.
3.Escribe "$$" en el Monitor Serie de Arduino y presiona enter.
4.El módulo responderá con las letras "CMD", indicando que ha entrado al modo de comando.

**Vamos a probar algunos comandos, haz lo siguiente:**

1.En la ventana del monitor serie de Arduino, selecciona "Carriage return" y una velocidad de baudios de 9600.
2.Ahora escribe cada uno de los comandos en la tabla de abajo en el Monitor Serie de Arduino y presiona enter.
3.El módulo generará una respuesta, como se describe en la tabla, para cada comando.

| Commands | Description |
|---|---|
| scan | Este comando realiza un escaneo de sonda activa de puntos de acceso en los 13 canales. Cuando usas este comando, el módulo devuelve la dirección MAC, intensidad de señal, nombre SSID y modo de seguridad de los puntos de acceso que encuentra. |
| get ip | Este comando muestra la dirección IP y configuraciones del número de puerto |

Para obtener una lista completa de comandos de configuración, consulte la [Guía de Referencia](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf) del RN-171 comenzando en la página 11.

### Ejemplo 2: Conectar a un Punto de Acceso / Router de Internet

En este ejemplo le mostraremos cómo conectar el escudo WiFi a un punto de acceso (su router de internet) con y sin que usted escriba los comandos requeridos:

#### Conectando Escribiendo Comandos

Esta sección le enseñará cómo conectar el escudo WiFi a un punto de acceso usando comandos de la hoja de datos del RN-171, al revisar esta sección sabrá exactamente qué está sucediendo en segundo plano cuando use nuestras librerías WiFi de Arduino.

Haga lo siguiente:

1.Cargue el código del Ejemplo Uno a su placa Arduino

2.**Entre al modo de comandos:**
    1.Configure el monitor serie a "No line ending", velocidad de baudios a 9600.
    2.Escriba *$$* en el Monitor Serie de Arduino y presione enter.

3.Configure el monitor serie a "Carriage return".

4.**Escanee puntos de acceso disponibles:**
    1.Escriba *scan* y presione enter. La ventana del monitor serie de Arduino mostrará una lista de valores separados por comas para cada punto de acceso que el escudo WiFi haya encontrado. De izquierda a derecha el tercer valor es el modo de seguridad, el último valor es el SSID. Este ejemplo muestra un modo de seguridad de 4 con un nombre SSID MySSID: 01,01,-88,**04**,1104,1c,00,45:56:78:be:93:1f,**MySSID**

5.De la lista de puntos de acceso encontrados, encuentre el que corresponde a su router de internet y anote el modo de seguridad y SSID ya que necesitaremos estos dos valores para conectarnos a él.

6.**Configure el modo de seguridad en el escudo:**
    1.Escriba *set wlan auth m*. Reemplace *m* con el número del modo de seguridad (en este ejemplo sería 4) del punto de acceso al que desea conectarse.
    2.Los modos de seguridad soportados por el escudo WiFi se listan en la Figura 1 a continuación.

7.**Configure la frase del punto de acceso**
    1.Escriba *set wlan phrase myPhrase*. Reemplace *myPhrase* con la contraseña/clave de seguridad de su punto de acceso. **Nota:** si el tipo de seguridad de su punto de acceso es WEP use *key* en lugar de *phrase* en el comando anterior.
    2.La frase del punto de acceso (router de internet) es la contraseña que usa para conectarse a él desde su PC. En Windows puede encontrarla como se muestra en la imagen animada a continuación:

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/How_to_find_network_security_key_password.gif)

8.**Únase al punto de acceso**

  1.Ahora que hemos configurado el tipo de seguridad y la frase del punto de acceso, podemos conectarnos a él.

  2.Escriba *join MySSID*. Reemplace MySSID con el nombre de difusión de su punto de acceso.

  3.La palabra "Associated!" se mostrará en la ventana del monitor serie de Arduino si es exitoso.

Una descripción de los comandos que ingresó en los pasos anteriores está disponible en la tabla a continuación. Una descripción más detallada de cada comando se puede encontrar en el manual de usuario del RN171.

| Número | Comandos | Descripción |
|---|---|---|
| 1 | scan | Este comando realiza un escaneo de sonda activa de puntos de acceso en los 13 canales. Cuando usa este comando, el módulo devuelve la dirección MAC, intensidad de señal, nombre SSID y modo de seguridad de los puntos de acceso que encuentra. |
| 2 | set wlan auth 4 | Encuentre el valor que corresponde al protocolo de seguridad en su punto de acceso. Luego, dígale al WiFly qué protocolo de seguridad usar, es el número mostrado en la **Figura 1** que corresponde al protocolo de seguridad del punto de acceso. Aquí elegimos "4". |
| 3 | set wlan phrase seeed-mkt | Dígale al escudo WiFi su frase de contraseña. |
| 4 | join SEEED-MKT | Dígale al escudo WiFi que se una, "SEEED-MKT" es el nombre del punto de acceso que elegimos conectar. Después de enviar el comando el módulo debería conectarse ahora e imprimir información sobre la conexión. (Si la conexión falla, trate de enviar el comando nuevamente hasta que funcione) |

Figura 1

| Valor | Modo de Autenticación |
|---|---|
| 0 | Abierto (Predeterminado) |
| 1 | WEP-128 |
| 2 | WPA1 |
| 3 | WPA1 y WPA2-PSK mixto |
| 4 | WPA2-PSK |
| 5 | No utilizado |
| 6 | Modo ad hoc (unirse a cualquier red ad hoc) |
| 8 | WPE-64 |


#### Conectando Usando Nuestras Librerías WiFi

Ahora que sabes cómo conectarte a un punto de acceso escribiendo cada comando, es hora de usar las librerías y ejemplos que proporcionamos.

Para ver el código requerido para conectarte a un punto de acceso ve a "Archivo -> Ejemplos -> Wifi_Shield -> wifi_test". Cambia el código para usar tu propio SSID (nombre del punto de acceso) y KEY (contraseña de tu punto de acceso), luego sube el sketch a tu Arduino IDE.

```cpp
#define SSID      " SEEED-MKT "
  #define KEY       " seeed-mkt "
```

Con el sketch subido a tu placa Arduino, abre la ventana del monitor serie. Si el shield tuvo éxito al unirse al punto de acceso, se mostrará un mensaje "OK" junto con la información de conexión resultante del comando "get everything". Si el shield falló al unirse al punto de acceso, se mostrará un mensaje "Failed".

#### Configurando El Shield para Conectarse al Encender

El shield puede configurarse para conectarse al encender, solo tienes que hacer esto una vez:

1.Envía el comando "set wlan ssid mySSID" reemplazando mySSID con tu SSID

2.Envía el comando "set wlan join 1".

3.Envía el comando "save".

Ahora el shield se conectará al punto de acceso automáticamente al encender.

Una descripción de lo que hace cada comando se puede encontrar en la hoja de datos del RN-171 y en la tabla a continuación.

| Número | Comandos | Descripción |
|---|---|-----|
| 1 | set wlan  | "ssid" es el nombre del punto de acceso al que te gustaría conectarte automáticamente |
| 2 | set wlan join 1 | Esto le dice al módulo que trate de conectarse al SSID almacenado en memoria automáticamente. |
| 3 | save | Almacenar/Guardar estas configuraciones en el archivo de configuración del Wifi |

#### Configuración de una Dirección IP Estática

Para que el shield obtenga una dirección IP estática del punto de acceso, una vez conectado al punto de acceso, envía los siguientes comandos:

| Número | Comandos | Descripción |
|---|---|---|
| 1 | set ip dhcp 0 | Desactivar DHCP . |
| 2 | set ip address  | Establecer la dirección IP que deseas . |


### Ejemplo 3: Comunicación Con la Red (Introducción)

Este ejemplo te mostrará cómo un dispositivo como tu PC y/o teléfono puede comunicarse con el shield WiFi.

**Sigue estos pasos:**

1.Configura el módulo con los pasos 1-7 en la sección *Conectando Escribiendo Comandos* del Ejemplo 2

2.Establece el puerto IP de escucha a "80" enviando el comando "set ip local 80"

3.Conecta/Une tu shield a un punto de acceso como se muestra en el paso 8 en la sección *Conectando Escribiendo Comandos* del Ejemplo 2

4.Guarda estas configuraciones enviando el comando "save"

5.Obtén la dirección IP de tu shield con el comando "get ip". La dirección IP y el puerto se mostrarán a la derecha de "IP=" en la respuesta (ej. IP=192.168.0.10:80)

6.Abre tu navegador web y escribe la dirección IP de tu shield en la barra de URL de tu navegador web y presiona Enter para visitarla.

7.La ventana del monitor serie de tu Arduino mostrará una respuesta HTTP similar a la que se muestra a continuación. Esta es la información que tu navegador envió al shield para solicitar datos.

```cpp
*OPEN*GET / HTTP/1.1
Host: 192.168.0.10
Connection: keep-alive
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
```

El navegador ahora está esperando datos, el módulo WiFi puede enviar valores de sensores, servir páginas web, o cualquier otro dato directamente de vuelta al navegador. En este caso, el navegador está esperando una página web. Si el módulo WiFi responde con una página con formato HTML, el navegador la mostrará. Los siguientes ejemplos te enseñarán cómo hacer todas estas cosas divertidas.

### Ejemplo 4: Usando el Shield WiFi como Servidor Web (Sirviendo Páginas Web Desde el Shield)

Como viste en el Ejemplo 3, un navegador de internet/web es capaz de conectarse al shield WiFi. Una vez que se ha establecido una conexión (cuando el navegador envía su solicitud HTTP), el shield WiFi puede entonces enviar de vuelta código HTML para que el navegador lo muestre como una página web. En este ejemplo aprenderás qué se necesita para que el shield responda a un navegador web.

**Paso 1: Código de Arduino**

Sube el siguiente código a tu placa Arduino reemplazando "myssid" y "mypassword" con los valores de tu punto de acceso respectivamente:

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "myssid"
#define KEY       "mypassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class

void setup()
{
  wiflyUart.begin(9600); // start wifi shield uart port

  Serial.begin(9600); // start the arduino serial port
  Serial.println("--------- WIFLY Webserver --------");

  // wait for initilization of wifly
  delay(1000);

  wifly.reset(); // reset the shield
  delay(1000);
  //set WiFly params

  wifly.sendCommand("set ip local 80\r"); // set the local comm port to 80
  delay(100);

  wifly.sendCommand("set comm remote 0\r"); // do not send a default string when a connection opens
  delay(100);

  wifly.sendCommand("set comm open *OPEN*\r"); // set the string that the wifi shield will output when a connection is opened
  delay(100);

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("get ip\r");
  char c;

  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // print the response from the get ip command
    Serial.print((char)c);
  }

  Serial.println("Web server ready");

}

void loop()
{

  if(wifly.available())
  { // the wifi shield has data available

    if(wiflyUart.find("*OPEN*")) // see if the data available is from an open connection by looking for the *OPEN* string
    {
      Serial.println("New Browser Request!");
      delay(1000); // delay enough time for the browser to complete sending its HTTP request string

      // send HTTP header
      wiflyUart.println("HTTP/1.1 200 OK");
      wiflyUart.println("Content-Type: text/html; charset=UTF-8");
      wiflyUart.println("Content-Length: 244"); // length of HTML code
      wiflyUart.println("Connection: close");
      wiflyUart.println();

      // send webpage's HTML code
      wiflyUart.print("<html>");
      wiflyUart.print("<head>");
      wiflyUart.print("<title>My WiFI Shield Webpage</title>");
      wiflyUart.print("</head>");
      wiflyUart.print("<body>");
      wiflyUart.print("<h1>Hello World!</h1>");
      wiflyUart.print("<h3>This website is served from my WiFi module</h3>");
      wiflyUart.print("<a href=\"http://yahoo.com\">Yahoo!</a> <a href=\"http://google.com\">Google</a>");
      wiflyUart.print("<br/><button>My Button</button>");
      wiflyUart.print("</body>");
      wiflyUart.print("</html>");

    }
  }

}
```

**Paso 2: Obtener la Dirección IP del Shield**

Abre la ventana del monitor serie y espera a que se muestre el mensaje "Web server ready". El monitor serie también mostrará la dirección IP del shield WiFi:

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-serial-comm-window.png)

**Paso 3: Visitar la página web**

Ahora visita esa dirección IP en tu navegador web. Debería mostrarse la página web de abajo, contiene un enlace a Yahoo! y Google y un botón que no hace nada (aún):

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-simple-webserver-page.png)

Cuando se visita la página web, la ventana del monitor serie también mostrará una cadena "New Browser Request!" como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-simple-webserver-arduino-serial-window-response.png)

**Nota:** En el caso de algunos navegadores, como Google Chrome, incluso escribir la URL en la barra envía una solicitud de página web, esto es porque estos navegadores intentan obtener el título de la página web para la conveniencia del usuario incluso antes de que él/ella visite la página web.

### Ejemplo 5: Controlando Los Pines Digitales del Arduino Desde una Página Web (Alternando LEDs Desde una Página Web)

En este ejemplo crearemos una página web con tres botones para controlar tres pines digitales diferentes en el Arduino.

Para este tutorial sigue los pasos de abajo. También hemos creado un video donde explicamos el código con más detalle.

**Paso 1: Hardware**

Conecta tres LEDs y resistencias a los pines digitales 11, 12, y 13 como se muestra en el esquemático de abajo:

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-webpage.png)

**Paso 2: Sketch de Arduino**

Sube el siguiente código a tu placa Arduino pero reemplaza "mySSID" y "myPassword" con el nombre SSID y contraseña de tu punto de acceso:

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class
char ip[16];

void setup()
{
  pinMode(11,OUTPUT);
  digitalWrite(11,LOW);

  pinMode(12,OUTPUT);
  digitalWrite(12,LOW);

  pinMode(13,OUTPUT);
  digitalWrite(13,LOW);

  wiflyUart.begin(9600); // start wifi shield uart port

  Serial.begin(9600); // start the arduino serial port
  Serial.println("--------- WIFLY Webserver --------");

  // wait for initilization of wifly
  delay(1000);

  wifly.reset(); // reset the shield
  delay(1000);
  //set WiFly params

  wifly.sendCommand("set ip local 80\r"); // set the local comm port to 80
  delay(100);

  wifly.sendCommand("set comm remote 0\r"); // do not send a default string when a connection opens
  delay(100);

  wifly.sendCommand("set comm open *OPEN*\r"); // set the string that the wifi shield will output when a connection is opened
  delay(100);

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("get ip\r");


  wiflyUart.setTimeout(500);
  if(!wiflyUart.find("IP="))
  {
    Serial.println("can not get ip");
    while(1);;
  }else
  {
    Serial.print("IP:");
  }

  char c;
  int index = 0;
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // print the response from the get ip command
    if(c == ':')
    {
      ip[index] = 0;
      break;
    }
    ip[index++] = c;
    Serial.print((char)c);

  }
  Serial.println();
  while (wifly.receive((uint8_t *)&c, 1, 300) > 0);;

  Serial.println("Web server ready");

}

void loop()
{

  if(wifly.available())
  { // the wifi shield has data available

    if(wiflyUart.find("*OPEN*")) // see if the data available is from an open connection by looking for the *OPEN* string
    {
      Serial.println("New Browser Request!");
      delay(1000); // delay enough time for the browser to complete sending its HTTP request string

      if(wiflyUart.find("pin=")) // look for the string "pin=" in the http request, if it's there then we want to control the LED
      {
        Serial.println("LED Control");

        // the user wants to toggle the LEDs
        int pinNumber = (wiflyUart.read()-48); // get first number i.e. if the pin 13 then the 1st number is 1
        int secondNumber = (wiflyUart.read()-48);
        if(secondNumber>=0 && secondNumber<=9)
        {
          pinNumber*=10;
          pinNumber +=secondNumber; // get second number, i.e. if the pin number is 13 then the 2nd number is 3, then add to the first number
        }

        digitalWrite(pinNumber, !digitalRead(pinNumber)); // toggle pin

        // Build pinstate string. The Arduino replies to the browser with this string.
        String pinState = "Pin ";
        pinState+=pinNumber;
        pinState+=" is ";
        if(digitalRead(pinNumber)) // check if the pin is ON or OFF
        {
          pinState+="ON"; // the pin is on
        }
        else
        {
         pinState+="OFF";  // the pin is off
        }
        // build HTTP header Content-Length string.
        String contentLength="Content-Length: ";
        contentLength+=pinState.length(); // the value of the length is the lenght of the string the Arduino is replying to the browser with.

        // send HTTP header
        wiflyUart.println("HTTP/1.1 200 OK");
        wiflyUart.println("Content-Type: text/html; charset=UTF-8");
        wiflyUart.println(contentLength); // length of HTML code
        wiflyUart.println("Connection: close");
        wiflyUart.println();
        // send response
        wiflyUart.print(pinState);
      }
      else
      {
        // send HTTP header
        wiflyUart.println("HTTP/1.1 200 OK");
        wiflyUart.println("Content-Type: text/html; charset=UTF-8");
        wiflyUart.println("Content-Length: 540"); // length of HTML code
        wiflyUart.println("Connection: close");
        wiflyUart.println();

        // send webpage's HTML code
        wiflyUart.print("<html>");
        wiflyUart.print("<head>");
        wiflyUart.print("<title>WiFi Shield Webpage</title>");
        wiflyUart.print("</head>");
        wiflyUart.print("<body>");
        wiflyUart.print("<h1>LED Toggle Webpage</h1>");
     // In the <button> tags, the ID attribute is the value sent to the arduino via the "pin" GET parameter
        wiflyUart.print("<button id=\"11\" class=\"led\">Toggle Pin 11</button> "); // button for pin 11
        wiflyUart.print("<button id=\"12\" class=\"led\">Toggle Pin 12</button> "); // button for pin 12
        wiflyUart.print("<button id=\"13\" class=\"led\">Toggle Pin 13</button> "); // button for pin 13
        wiflyUart.print("<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>");
        wiflyUart.print("<script type=\"text/javascript\">");
        wiflyUart.print("$(document).ready(function(){");
        wiflyUart.print("$(\".led\").click(function(){");
        wiflyUart.print("var p = $(this).attr('id');"); // get id value (i.e. pin13, pin12, or pin11)
        // send HTTP GET request to the IP address with the parameter "pin" and value "p", then execute the function
   // IMPORTANT: dont' forget to replace the IP address and port with YOUR shield's IP address and port
        wiflyUart.print("$.get(\"http://");
        wiflyUart.print(ip);
        wiflyUart.print(":80/a\", {pin:p},function(data){alert(data)});");// execute get request. Upon return execute the "function" (display an alert with the "data" send back to the browser.
        wiflyUart.print("});");
        wiflyUart.print("});");
        wiflyUart.print("</script>");
        wiflyUart.print("</body>");
        wiflyUart.print("</html>");
      }
      Serial.println("Data sent to browser");
    }
  }

}
```

**Paso 3: Ventana del Monitor Serie**

Abre la ventana del monitor serie y espera a que se muestre el mensaje "Web server ready". El monitor serie también mostrará la dirección IP del escudo WiFi:

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-serial-comm-window.png)

**Paso 4: Visitar La Página Web**

Visita la dirección IP en un navegador web. Debería mostrarse una página web con tres botones, como la que se muestra a continuación. Haz clic en los botones para controlar los LEDs.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-webpage.png)

El Arduino también responderá al navegador web con el estado del pin, el navegador mostrará esto en una ventana de alerta.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-arduino-response.png)

La ventana del monitor serie también mostrará cuando un navegador envía una solicitud para visitar la página web o controlar los pines LED.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-led-control-serial-comm-response.png)

### Ejemplo 6: Escudo WiFi y Aplicación Android

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Androidapp-ethernet-shield-led-toggle.png)

**Aplicación Android**

Hemos creado una aplicación Android que puede alternar los pines digitales en el Arduino a través del escudo WiFi, para ver cómo funciona la aplicación y aprender sobre el código mira el video en este enlace:

**Software**

Descarga el proyecto/código fuente de Android Studio desde este enlace:

[File:WiFiShieldLEDControl.zip](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFiShieldLEDControl.zip)

### Ejemplo 7: Envío de Datos y Recuperación de Datos Desde un Servidor Externo

El módulo RN-171 en el escudo WiFi tiene la capacidad de actuar como un cliente HTML (esencialmente un navegador web basado en texto), esto significa que podemos usar el escudo para enviar y recibir datos desde un servidor web. En este ejemplo aprenderás a usar el escudo con una Interfaz de Programación de Aplicaciones (API) web que muestra los datos meteorológicos de cualquier ciudad (es decir, temperatura, humedad, etc).

El nombre de la API que usaremos es [OpenWeatherMap](http://openweathermap.org/api), cuando envías el nombre de una ciudad y país a este sitio web devuelve una cadena JSON con información meteorológica. Si quieres mostrar el clima para Londres Reino Unido por ejemplo visitarías la siguiente URL [http://api.openweathermap.org/data/2.5/weather?q=London,uk](http://api.openweathermap.org/data/2.5/weather?q=London,uk) que devolvería una cadena JSON como la siguiente, donde los datos meteorológicos y otra información están incrustados.

```cpp
{
"coord":{"lon":-0.13,"lat":51.51},
"sys":{"type":3,"id":60992,"message":0.0079,"country":"GB","sunrise":1421395087,"sunset":1421425352},
"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],
"base":"cmc stations",
"main":{
  "temp":277.25,"humidity":79,"pressure":998.4,
  "temp_min":277.25,"temp_max":277.25
},
"wind":{
"speed":2,"gust":5,"deg":180},
"rain":{"3h":0},"clouds":{"all":32},
"dt":1421372140,"id":2643743,"name":"London","cod":200
}
```

**Paso 1: La URL**

Procedamos a recuperar la cadena JSON del clima para San Francisco, US. La URL que nuestro escudo WiFi necesita visitar es la siguiente (puedes probarla en tu navegador web):

[http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,US](http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,US)

**Paso 2: El Código de Arduino**

La sección 13 del [manual WiFly](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf) te enseña diferentes formas de conectarte a un servidor web, pero en todos los casos necesitamos especificar el nombre del servidor (o dirección IP si el servidor no tiene un nombre de dominio), y luego los datos que deseamos enviar.

Los comandos que necesitamos enviar al escudo WiFi para recibir la cadena JSON del servidor OpenWeatherMap son los siguientes:

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class

void setup()
{


  wiflyUart.begin(9600); // start wifi shield uart port

  Serial.begin(9600); // start the arduino serial port
  Serial.println("--------- OpenWeatherMap API --------");

  // wait for initilization of wifly
  delay(3000);

  wifly.reset(); // reset the shield

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }


  wifly.sendCommand("set ip proto 18\r"); //enable html client
  delay(100);

  wifly.sendCommand("set dns name api.openweathermap.org\r"); // name of the webserver we want to connect to
  delay(100);

  wifly.sendCommand("set ip address 0\r"); // so WiFly will use DNS
  delay(100);

  wifly.sendCommand("set ip remote 80\r"); /// standard webserver port
  delay(100);

  wifly.sendCommand("set com remote 0\r"); // turn off the REMOTE string so it does not interfere with the post
  delay(100);  

  wifly.sendCommand("open\r"); // open connection
  delay(100);  

  wiflyUart.print("GET data_2_5_weather?q=San%20Francisco,US \n\n");
  delay(1000);

}

void loop()
{
 //As soon as the data  received from the Internet ,output the data through the UART Port .
 while (wifly.available())
   {
   Serial.write(wifly.read());
   }
}
```

**Paso 3: Resultado**

Abre la ventana del monitor serie, deberías poder ver la misma cadena JSON que viste en el navegador.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Open-weather-api-json-string.png)

### Ejemplo 8: Comunicación TCP Con Terminal

En este ejemplo te mostraremos cómo enviar información desde el shield WiFi a un programa terminal de PC. Haremos una consola simple de Arduino con menús que te dará la opción de ver el estado de los pines digitales de Arduino y alternarlos.

**Paso 1: Descargar un Terminal TCP**

[Descarga e instala RealTerm](http://sourceforge.net/projects/realterm/files/Realterm/2.0.0.70/Realterm_2.0.0.70_setup.exe/download), una utilidad de terminal que nos permitirá conectarnos al shield WiFi.

**Paso 2: Código de Arduino**

Sube el código de abajo a tu placa Arduino reemplazando "mySSID", "myPassword", y el código de autenticación con la información de tu propio punto de acceso:

```cpp
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

#define FLAG_MAIN_MENU 1
#define FLAG_SUB_MENU_2 2


int flag = FLAG_MAIN_MENU;

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class

void setup()
{

  // define the pins we can control
  pinMode(11,OUTPUT);
  digitalWrite(11,LOW);

  pinMode(12,OUTPUT);
  digitalWrite(12,LOW);

  pinMode(13,OUTPUT);
  digitalWrite(13,LOW);

  pinMode(7,OUTPUT);
  digitalWrite(7,LOW);


  wiflyUart.begin(9600); // start wifi shield uart port

  Serial.begin(9600); // start the arduino serial port
  Serial.println("--------- TCP Communication --------");

  // wait for initilization of wifly
  delay(1000);

  wifly.reset(); // reset the shield
  delay(1000);

  wifly.sendCommand("set ip local 80\r"); // set the local comm port to 80
  delay(100);

  wifly.sendCommand("set comm remote 0\r"); // do not send a default string when a connection opens
  delay(100);

  wifly.sendCommand("set comm open *\r"); // set the string or character that the wifi shield will output when a connection is opened "*"
  delay(100);

  wifly.sendCommand("set ip protocol 2\r"); // set TCP protocol
  delay(100);

  Serial.println("Join " SSID );
  if (wifly.join(SSID, KEY, AUTH)) {
    Serial.println("OK");
  } else {
    Serial.println("Failed");
  }

  wifly.sendCommand("get ip\r");
  char c;

  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // print the response from the get ip command
    Serial.print((char)c);
  }

  Serial.println("TCP Ready");


}

void loop()
{

  if(wifly.available())
  {
    delay(1000); // wait for all the characters to be sent to the WiFi shield
    char val = wiflyUart.read(); // read the first character

    if(flag == FLAG_MAIN_MENU)
    {
          switch(val)
          {
            case '*': // search for the new connection string
              printMainMenu();
            break;
            case '1': // the user typed 1, display the pin states
             printPinStates();
             printMainMenu();
            break;
            case '2': // the user typed 2, display the sub menu (option to select a particular pin)
             printSubMenu2();
            flag = FLAG_SUB_MENU_2; // flag to enter the sub menu
            break;
            default:
            wiflyUart.print("INVALID SUBMENU\r\n");
            break;
          }
    }
    else if(flag == FLAG_SUB_MENU_2)
    {
        int pinNumber = val-48; // get first number i.e. if the pin 13 then the 1st number is 1
        int secondNumber = (wiflyUart.read()-48);
        if(secondNumber>=0 && secondNumber<=9)
        {
          pinNumber*=10;
          pinNumber +=secondNumber; // get second number, i.e. if the pin number is 13 then the 2nd number is 3, then add to the first number
        }

        // Create the "You want to toggle pin x ? OK..." string.
        String response = "\r\nYou want to toggle pin ";
        response+=pinNumber;
        response+="? OK...\r\n";

        wiflyUart.print(response);

        digitalWrite(pinNumber, !digitalRead(pinNumber)); // toggle pin

        wiflyUart.print("Pin Toggled!\r\n"); // let user know the pin was toggled.
        printMainMenu();
        flag = FLAG_MAIN_MENU;
    }

  }

}

/**
* Prints the main menu options
*/
void printMainMenu()
{
  wiflyUart.print("\r\n\r\n");
  wiflyUart.print("Arduino Console Menu: \r\n");
  wiflyUart.print("1. Show digital pin states\r\n");
  wiflyUart.print("2. Toggle a digital pin's state\r\n");
  wiflyUart.print("\r\n\r\n");
}

// displays the pin states
void printPinStates()
{

    String pinState = "Pin 7 is ";
    pinState+=getPinState(7);
    pinState+="\r\n";

    pinState += "Pin 11 is ";
    pinState+=getPinState(11);
    pinState+="\r\n";

    pinState += "Pin 12 is ";
    pinState+=getPinState(12);
    pinState+="\r\n";

    pinState += "Pin 13 is ";
    pinState+=getPinState(13);
    pinState+="\r\n";

    wiflyUart.print(pinState);
}

// prints the option to enter a pin number
void printSubMenu2()
{
  wiflyUart.print("\r\nEnter the pin number you wish to toggle: ");
}

// get a pin state as a string.
String getPinState(int pinNumber)
{
  if(digitalRead(pinNumber)) // check if the pin is ON or OFF
  {
    return "ON"; // the pin is on
  }
  else
  {
    return "OFF";  // the pin is off
  }
}
```

**Paso 3: Obtener la Dirección IP y Puerto del Shield**

Abre la ventana del monitor serie de Arduino para obtener la dirección IP y el número de puerto del WiFiShield, resaltados en la imagen a continuación.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Tcp-arduino-serial-comm.png)

En la imagen anterior, la Dirección IP y Puerto serían los siguientes:

192.168.0.10:80

**Paso 4: Configurar el Terminal TCP y Conectarse al Shield**

Abre RealTerm y en la pestaña "Display" ingresa "30" para "Rows" y selecciona la opción "Scrollback":

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Realterm-display-tab.png)

En la pestaña "Port" del programa RealTerm, escribe la dirección IP y puerto de tu shield, por ejemplo 192.168.0.10:80, luego haz clic en el botón "Open", el menú principal codificado del Arduino debería mostrarse en el terminal.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Realterm-port-tab.png)

En la pestaña "Send" selecciona una de las opciones del menú, ya sea "1" o "2", ingrésala en el cuadro de texto y presiona "Send ASCII" para enviar el valor.

Por ejemplo, para alternar el pin 13 ingresa "2" y presiona "Send ASCII", luego cuando se te solicite "Enter the pin number you wish you toggle" ingresa "13" y haz clic en "Send ASCII". El Arduino debería responder "Pin Toggled!" y regresar al menú principal, ahora ingresa "1" y presiona "Send ASCII" para ver el estado actual de los pines.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Realterm-send-tab.png)

### Ejemplo 9: WiFi Shield y Relay Shield

Ahora que sabes cómo enviar y recibir información hacia y desde el WiFi shield puedes ver qué tan fácil sería controlar cualquier tipo de dispositivo a través de la web.

Si deseas controlar dispositivos de alta potencia como tu lámpara de escritorio, un motor, o una bomba de agua a través de una página web o aplicación de teléfono, recomendamos nuestro [Relay Shield V2.0](https://seeeddoc.github.io/Relay_Shield_V2.0/).

El Relay Shield V2.0 usa los pines 4, 5, 6, y 7 por lo que es completamente compatible con el código en los ejemplos de esta página.

### Ejemplo 10: Modo Adhoc

Para usar el shield en modo Adhoc, como punto de acceso, simplemente conecta el pin IO9 del shield al pin 3.3V en el Arduino, como se muestra a continuación, y reinicia el shield si estaba encendido.

![](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/img/Wifi-shield-adhoc-mode-hardware-connection.png)

Para obtener el SSID del shield sube el código del Ejemplo 1 a tu Arduino y abre el monitor serie, el shield responderá con su SSID como en el ejemplo a continuación, donde en este caso **WiFly-EZX-1b** es el SSID.

```cpp
AP mode as WiFly-EZX-1b on chan 1
```

Ahora deberías poder conectarte a tu escudo WiFi como un punto de acceso, por ejemplo, el SSID debería ser visible en la lista de redes WiFi disponibles de tu PC.

Para aprender más sobre el modo adhoc, consulta el [Manual de Usuario WiFly RN](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf) sección 16 "Modo de Red Adhoc"

## Lectura Relacionada

* [Qué es un Seeeduino](https://seeeddoc.github.io/Seeeduino_v3.0/)

* [w3schools](http://www.w3schools.com/) (Excelente sitio web para aprender HTML, Javascript y JQuery

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi_shield_v1.2_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **[Eagle]**  [Archivos Eagle del Escudo WiFi v1.2](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi_shield_v1.2_eagle.zip)
* **[PDF]**[Escudo Wifi v1.2 pdf](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi%20Shield%20v1.2.pdf)
* **[EAGLE]**[Escudo Wifi v1.2 sch](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi%20Shield%20v1.2.sch)
* **[PDF]**  [PDF del esquemático del Escudo Wifi v1.2](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/Wifi_Shield_V1.2_schematic.pdf)
* **[Hoja de Datos]**  [Hoja de Datos RN-171](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-171.pdf)
* **[Biblioteca]**  [Biblioteca del Escudo Wifi](https://github.com/Seeed-Studio/WiFi_Shield)
* **[Manual]**  [Manual de Usuario del Módulo WiFi](https://files.seeedstudio.com/wiki/Wifi_shield_v1.2/res/WiFly-RN-UM.pdf) - Aquí es donde encontrarás todos los comandos para el módulo RN-171 en el escudo.

## Soporte

* [FAQ sobre el Escudo Wifi](http://support.seeedstudio.com/knowledgebase/articles/456737-wifi-shield)： *Haz clic aquí para ver si tus preguntas han sido resueltas.*

## Licencias

Esta documentación está licenciada bajo Creative Commons [Licencia Attribution-ShareAlike 3.0](http://creativecommons.org/licenses/by-sa/3.0/) El código fuente y las bibliotecas están licenciados bajo [GPL/LGPL](http://www.gnu.org/licenses/gpl.html), consulta los archivos de código fuente para más detalles.

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