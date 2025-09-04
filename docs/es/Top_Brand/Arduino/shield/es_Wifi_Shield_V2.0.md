---
description:  Wifi Shield V2.0
title:  Wifi Shield V2.0
keywords:
-  Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Wifi_Shield_V2.0
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2_0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

Este shield WiFi cuenta con el módulo TCP/IP RN171 para permitir que tu Arduino/Seeeduino se conecte con redes inalámbricas de hasta 802.11b/g.

El protocolo de comunicación predeterminado del shield con el Arduino es UART/Serial, y puedes seleccionar qué pines digitales (D0 a D7) usar para RX y TX con dos filas de jumpers que hemos incorporado. El shield también tiene dos conectores Grove integrados para I2C y Serial para permitir que el shield se use con cualquiera de nuestros dispositivos Grove.

Una antena integrada permite que el shield cubra un rango más amplio y transmita señales más fuertes. El módulo RN171 soporta protocolos de comunicación TCP, UDP, FTP y HTTP para satisfacer las necesidades de la mayoría de proyectos de redes inalámbricas e Internet de las Cosas (IoT), por ejemplo, redes domésticas inteligentes, control de robots, estaciones meteorológicas personales.

El shield está muy bien documentado con nuestros ejemplos a continuación y su [manual de usuario](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Seguimiento de Versiones
------------------------

| Parámetro          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Voltaje            | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Shield Estándar    | Sí                                                                      | Sí                                                                     | Sí                                                                                        |
| Modo de Comunicación | Puerto serie                                                           | Puerto serie                                                           | Puerto serie                                                                              |
| Shield Estándar    | No                                                                      | Sí                                                                     | Sí                                                                                        |
| Tipo de Antena     | antena de mástil                                                        | antena PCB                                                             | <font color="Red">antena integrada</font>                                                |
| Archivo de Librería | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *la misma que v1.2* |

Especificaciones
----------------

| Parámetro                        | Valor                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Voltaje de operación             | 3.3~5.5 V                                                           |
| Placa compatible directamente    | Arduino Uno/Seeeduino                                               |
| Corriente                        | 25~400mA                                                             |
| Potencia de transmisión          | 0-10 dBm                                                             |
| Frecuencia                       | 2402~2480 MHz                                                       |
| Canal                            | 0~13                                                                 |
| Velocidad de red                 | 1-11 Mbps para 802.11b/6-54Mbps para 802.11g                       |
| Dimensión                        | 60X56X19 mm                                                          |
| Peso Neto                        | 24±1 g                                                               |
| Autenticación WiFi segura        | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                             |
| Aplicaciones de red integradas   | Cliente DHCP, cliente DNS, ARP, ping ICMP, FTP, TELNET, HTTP, UDP, TCP |
| Certificación                    | RN171: FCC, CE                                                       |

Descripción General del Hardware
--------------------------------

El shield WiFi es compatible con cualquier placa de desarrollo Arduino/Seeeduino ya que solo requiere dos pines digitales de tu elección entre D0-D7 para comunicación UART/serial. Para instalar, simplemente apila el shield en la placa Arduino/Seeeduino.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1. **Conexiones de Interfaz Periférica Serie (SPI) (MOSI, SCK, MISO):** Estos pines no están conectados a ninguno de los pines del Arduino, son independientes y el nivel lógico de salida/entrada de los mismos es de 3.3V. Pueden ser utilizados para comunicarse con el Arduino vía SPI pero se necesitará un convertidor de nivel lógico de 3.3V entre estos pines y los del Arduino. La velocidad de datos en modo SPI puede alcanzar hasta 2Mbps.

    **RES_Wifi:** El shield WiFi tiene un "Botón de Reinicio" integrado para el módulo RN-171, también puedes reiniciar el RN-171 vía software enviando el comando de reinicio. Adicionalmente, si deseas conectar este pin al pin digital 6 del Arduino, simplemente solda la almohadilla etiquetada "P5" en el shield.

2. **RN171:** Un módulo inalámbrico de consumo de energía súper bajo con pila TCP/IP integrada.
3. **Antena:** Conector I.PEX.
4. **Sección de breakout RN171:** El módulo RN171 tiene sus propios pines de entrada analógica y GPIO, a los cuales el shield proporciona acceso a través de esta sección de breakout. Los pines GPIO (IO3, IO7, IO8, e IO9) toleran 3.3V mientras que los pines de entrada analógica (S_0 y S_1) pueden leer 0-400mV (No exceder 1.2V). El RN171 puede ser configurado para usar estos pines por software o pueden conectarse a otros pines para usar otras funciones del RN171 como el modo adhoc. El voltaje de VCC depende de la alimentación del shield WiFi.
5. **Área de selección UART/Serie:** Dos filas de jumpers para permitirte seleccionar qué pines RX y TX quieres usar para comunicarte con el Arduino.
6. **Conectores Grove:** Grove I2C analógico (si usas Arduino UNO o Seeeduino) para pines A4&A5 y Grove Serie Digital para D8&D9. El voltaje VCC depende de la fuente de alimentación de la placa.

### Pines Utilizados / Compatibilidad del Shield

El shield WiFi usa cualquier dos pines digitales de tu elección entre D0 y D7 para comunicarse con el módulo WiFi RN171, sin embargo ten en cuenta que D0 y D1 son utilizados por el Arduino para propósitos de programación y comunicación serie y usarlos podría interferir con estas dos funciones.

En los códigos de ejemplo en esta página usamos D2 y D3 como RX y TX para el shield. En este caso, los sombreros jumper deberían conectarse como se muestra a continuación:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 seleccionado para WIFI_TX, D3 seleccionado para WIFI_RX*

### Módulo WiFi RN171

El RN-171 es un módulo de red inalámbrica TCP/IP completo e independiente. Debido a su factor de forma pequeño y consumo de energía extremadamente bajo, el RN-171 es perfecto para aplicaciones inalámbricas móviles. Incorpora una radio de 2.4GHz, procesador SPARC de 32 bits, pila TCP/IP, reloj de tiempo real, acelerador criptográfico, gestión de energía e interfaces de sensores analógicos.

En la configuración más simple el hardware solo requiere cuatro conexiones (PWR, TX, RX y GND) para crear una conexión de datos WiFi inalámbrica. Adicionalmente, las entradas de sensores analógicos del RN171 pueden ser utilizadas como pines de entrada analógica, su clasificación es 0-400 mV (No exceder 1.2V DC).

**Alimentación:** El voltaje de operación del módulo RN-171 es típicamente 3.3VDC, por lo que un regulador de voltaje y traductor de nivel lógico están diseñados en el shield WiFi. El regulador LD1117 en el shield convierte a 3.3VDC, que alimenta el módulo RN171. Sin embargo, debido al esquema de juicio automático de fuente de alimentación, el RN-171 puede ser alimentado tanto vía el pin 3V3 como el pin 5V. Pero la alimentación sería de 5v si se proporciona tanto 3.3v como 5v a la placa. Si se usa con una placa Arduino/Seeeduino simplemente apila el shield WiFi en la placa.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_communicate.png)
*Diagrama de cómo el módulo RN171 se interfaza con el Arduino*

**GPIO_6 :** El pin GPIO6 del módulo WiFi RN171 está por defecto solo conectado al LED etiquetado D5 en el shield WiFi. Este LED se usa para mostrar el estado de la conexión del Punto de Acceso (AP). Si sin embargo, deseas conectar GPIO6 al pin digital 5 del Arduino, simplemente solda la almohadilla etiquetada "P6" en el shield WiFi.

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
      <td><strong>APAGADO</strong>: significa que el módulo no está asociado con una red.<br/><strong>Sólido ENCENDIDO</strong>: indica que está asociado y el acceso a Internet está OK</td>
      <td>Conectado a GPIO6 del módulo RN171</td>
    </tr>
    <tr>
      <td>D1</td>
      <td>LED Rojo. Indica el estado de conexión TCP/IP.</td>
      <td><strong>Sólido ENCENDIDO</strong>: conectado sobre TCP.<br/><strong>Alternancia Rápida (2 veces/segundo)</strong>: Sin dirección IP o el módulo está en modo comando.<br/><strong>Alternancia Lenta (una vez/segundo)</strong>: La dirección IP está OK.</td>
      <td>Conectado a GPIO4 del módulo RN171</td>
    </tr>
    <tr>
      <td>RST</td>
      <td>LED Rojo. Estado de reinicio del módulo WiFi.</td>
      <td><strong>Sólido ENCENDIDO</strong>: El botón de reinicio (WIFI_RST) está siendo presionado.</td>
      <td>Conectado al Reset del módulo RN171.</td>
    </tr>
    <tr>
      <td>PWR</td>
      <td>LED Verde. Indica el estado de encendido del módulo WiFi.</td>
      <td><strong>Sólido ENCENDIDO</strong>: El módulo/shield está encendido.</td>
      <td>Conectado a la salida de 3.3V del regulador de voltaje LD1117.</td>
    </tr>
  </tbody>
</table>

Biblioteca WiFi
---------

Hemos creado una biblioteca para ayudarte a interactuar con el shield, en esta sección te mostraremos cómo configurar la biblioteca e introducir algunas de las funciones.

### Configuración

1. *Descarga el [código de la biblioteca como archivo zip](https://github.com/Seeed-Studio/WiFi_Shield) desde la página de github del Wifi Shield.*
2. *Descomprime el archivo descargado en tu carpeta …/arduino/libraries/ .*
3. *Renombra la carpeta descomprimida "WifiShield"*
4. *Inicia el IDE de Arduino (o reinicia si está abierto).*

### Funciones

Estas son las funciones más importantes/útiles de la biblioteca, te invitamos a revisar los archivos .h por ti mismo para ver todas las funciones disponibles.

#### join()

- **Descripción:**
  - Se usa para unirse a un punto de acceso WiFi
- **Sintaxis:**
  - join(const char *ssid, const char*phrase, int auth)
- **Parámetros:**
  - **ssid:** El nombre del punto de acceso al que quieres que el shield se conecte
  - **phrase:** La contraseña/frase del punto de acceso al que quieres que el shield se conecte
  - **auth:** El tipo de autenticación del punto de acceso al que quieres que el shield se conecte. Puede ser una de las siguientes constantes:
    - WIFLY_AUTH_OPEN
    - WIFLY_AUTH_WEP
    - WIFLY_AUTH_WPA1
    - WIFLY_AUTH_WPA1_2
    - WIFLY_AUTH_WPA2_PSK
    - WIFLY_AUTH_ADHOC
- **Devuelve:**
  - **boolean:** true si la conexión al punto de acceso fue exitosa, false en caso contrario.
- **Ejemplo:**

```c
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

:::tip
Los ejemplos están basados en Arduino UNO y tomamos D2/D3 como los pines SoftwareSerial. Si estás usando un Arduino Mega, D2 ya no está disponible. Para más detalles, consulta [Arduino Software Serial](https://www.arduino.cc/en/Tutorial/SoftwareSerialExample)
Aquí tienes un ejemplo.
:::

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/connect_mega.jpg)

En cuanto al código, también necesitas hacer algunos cambios:

```c
SoftwareSerial uart(10, 3); // create a serial connection to the WiFi shield TX and RX pins.
```

#### receive()

- **Descripción:**
  - Se puede usar para leer datos del shield, una alternativa para la función read() de Arduino.
- **Sintaxis:**
  - receive(uint8_t *buf, int len, int timeout)
- **Parámetros:**
  - **buf:** Un array de buffer donde se almacenan los bytes leídos del shield.
  - **len:** La longitud/tamaño del array de buffer
  - **timeout:** Un valor de tiempo de espera para saber cuándo dejar de intentar leer.
- **Devuelve:**
  - **int:** El número de bytes leídos del shield.
- **Ejemplo:**

```c
char c;
while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
}
```

Consulta el sketch File->Examples->WiFi_Shield->wifly_test para ver un ejemplo completo.

#### sendCommand()

- **Descripción:**
  - Algunas de nuestras funciones (por ejemplo, join(), reboot(), save()) actúan como envoltorios para los comandos de texto listados en el manual de usuario del módulo RN171. La función sendCommand() te permite crear tu propia función envoltorio si las nuestras no satisfacen tus necesidades.
- **Sintaxis:**
  - sendCommand(const char *cmd, const char*ack, int timeout)
- **Parámetros:**
  - **cmd:** Cualquier comando del manual de usuario del RN-171.
  - **ack:** La cadena de retorno esperada del comando
  - **timeout:** El tiempo permitido antes de considerar la salida como una solicitud/respuesta incorrecta
- **Devuelve:**
  - **boolean:** true si el shield WiFi respondió con la cadena ack, false en caso contrario.

- **Ejemplo:**

```c
// our join() function is wrapper for the join command, as seen below.
//The string "Associated" is what the user manual says the RN171 will return on success.
if(sendCommand("join\r", "Associated",DEFAULT_WAIT_RESPONSE_TIME*10))
{
    // joined
}else{
    // not able to join
}
```

Consulta el sketch File->Examples->WiFi_Shield->wifly_test para ver un ejemplo completo.

Ejemplos/Aplicaciones del WiFi Shield
------------------------------------

### Ejemplo 1: Enviar Comandos al WiFi Shield y Recibir Respuesta a Través de la Ventana del Monitor Serie de Arduino

El módulo RN-171 del WiFi shield se configura enviándole los comandos que se encuentran en [su hoja de datos](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf). Puedes escribir un sketch para enviar los comandos automáticamente, pero este es un gran ejemplo que recomendamos que revises porque te enseñará exactamente cómo funcionan el WiFi shield y el RN-171.

Para proceder sigue los pasos a continuación, también hemos creado un video si prefieres verlo

[Video - Comenzando con el WiFi Shield de Seeeduino.](https://www.youtube.com/watch?v=8dCrAaN16lE)

**Paso 1: Configuración de Jumpers del WiFi Shield**

Posiciona los jumpers en el WiFi shield de tal manera que el pin digital 2 (D2) esté seleccionado para WIFI_TX, y el pin digital 3 (D3) esté seleccionado para WIFI_RX como se muestra en la foto a continuación. Estos son los pines que usaremos para enviar y recibir información del RN-171.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_front.png)

*Pines D2 para TX, y D3 para RX*

**Paso 2: Software/Código**

En el sketch a continuación hemos creado un objeto UART para permitirnos enviar y recibir datos del RN-171/WiFi Shield. Luego usamos este objeto en conjunto con la librería WiFly para enviar datos al shield. El objeto Serial de Arduino se usa para imprimir los datos que recibimos del shield, y para recibir los comandos que queremos enviar al shield a través del objeto WiFly/UART.

Sube el siguiente código a tu placa Arduino:

```c
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

Para entrar al modo de comando, sigue estos pasos:

1. Abre el monitor serie de Arduino.
2. Configura el monitor serie a "No line ending", velocidad de baudios a 9600.
3. Escribe "$$$" en el Monitor Serie de Arduino y presiona enter.
4. El módulo responderá con las letras "CMD", indicando que ha entrado al modo de comando.

Vamos a probar algunos comandos, haz lo siguiente:

1. En la ventana del monitor serie de Arduino, selecciona "Carriage return" y una velocidad de baudios de 9600.
2. Ahora escribe cada uno de los comandos en la tabla de abajo en el Monitor Serie de Arduino y presiona enter.
3. El módulo generará una respuesta, como se describe en la tabla, para cada comando.

| Comandos | Descripción                                                                                                                                                                                                                 |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scan     | Este comando realiza un escaneo de sonda activa de puntos de acceso en los 13 canales. Cuando usas este comando, el módulo devuelve la dirección MAC, intensidad de señal, nombre SSID y modo de seguridad de los puntos de acceso que encuentra. |
| get ip   | Este comando muestra la dirección IP y configuraciones del número de puerto                                                                                                                                                               |

Para obtener una lista completa de comandos de configuración, consulte la [Guía de Referencia](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) del RN-171 comenzando en la página 11.

### Ejemplo 2: Conectar a un Punto de Acceso / Router de Internet

En este ejemplo le mostraremos cómo conectar el escudo WiFi a un punto de acceso (su router de internet) con y sin que usted escriba los comandos requeridos:

#### Conectando Escribiendo Comandos

Esta sección le enseñará cómo conectar el escudo WiFi a un punto de acceso usando comandos de la hoja de datos del RN-171, al revisar esta sección sabrá exactamente qué está sucediendo en segundo plano cuando use nuestras librerías WiFi de Arduino.

Haga lo siguiente:

1. Suba el código del Ejemplo Uno a su placa Arduino
2. **Entre al modo de comandos:**
    1. Configure el monitor serie a "No line ending", velocidad de baudios a 9600.
    2. Escriba *$$$* en el Monitor Serie de Arduino y presione enter.

3. Configure el monitor serie a "Carriage return".
4. **Escanee puntos de acceso disponibles:**
    1. Escriba *scan* y presione enter. La ventana del monitor serie de Arduino mostrará una lista de valores separados por comas para cada punto de acceso que el escudo WiFi haya encontrado. De izquierda a derecha el tercer valor es el modo de seguridad, el último valor es el SSID. Este ejemplo muestra un modo de seguridad de 4 con un nombre SSID MySSID: 01,01,-88,**04**,1104,1c,00,45:56:78:be:93:1f,**MySSID**

5. De la lista de puntos de acceso encontrados, encuentre el que corresponde a su router de internet y anote el modo de seguridad y SSID ya que necesitaremos estos dos valores para conectarnos a él.
6. **Configure el modo de seguridad en el escudo:**
    1. Escriba *set wlan auth m*. Reemplace *m* con el número del modo de seguridad (en este ejemplo sería 4) del punto de acceso al que desea conectarse.
    2. Los modos de seguridad soportados por el escudo WiFi se listan en la Figura 1 a continuación.

7. **Configure la frase del punto de acceso**
    1. Escriba *set wlan phrase myPhrase*. Reemplace *myPhrase* con la contraseña/clave de seguridad de su punto de acceso.

    :::note
    Si el tipo de seguridad de su punto de acceso es WEP use *key* en lugar de *phrase* en el comando anterior.
    :::

    2. La frase del punto de acceso (router de internet) es la contraseña que usa para conectarse a él desde su PC. En Windows puede encontrarla como se muestra en la imagen animada a continuación:
    ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/How_to_find_network_security_key_password.gif)
    Cómo encontrar la clave de seguridad/contraseña de una red

8. **Únase al punto de acceso**
    1. Ahora que hemos configurado el tipo de seguridad y frase del punto de acceso, podemos conectarnos a él.
    2. Escriba *join MySSID*. Reemplace MySSID con el nombre de transmisión de su punto de acceso.
    3. La palabra "Associated!" se mostrará en la ventana del monitor serie de Arduino si es exitoso.

Una descripción de los comandos que ingresó en los pasos anteriores está disponible en la tabla a continuación. Una descripción más detallada de cada comando se puede encontrar en el manual de usuario del RN171.

| Número | Comandos                  | Descripción                                                                                                                                                                                                                                                                          |
|--------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | scan                      | Este comando realiza un escaneo de sonda activa de puntos de acceso en los 13 canales. Cuando usa este comando, el módulo devuelve la dirección MAC, intensidad de señal, nombre SSID y modo de seguridad de los puntos de acceso que encuentra.                                   |
| 2      | set wlan auth 4           | Encuentre el valor que corresponde al protocolo de seguridad en su punto de acceso. Luego, dígale al WiFly qué protocolo de seguridad usar, es el número mostrado en la **Figura 1** que corresponde al protocolo de seguridad del punto de acceso. Aquí elegimos "4".            |
| 3      | set wlan phrase seeed-mkt | Dígale al escudo WiFi su frase de contraseña.                                                                                                                                                                                                                                        |
| 4      | join SEEED-MKT            | Dígale al escudo WiFi que se una, "SEEED-MKT" es el nombre del punto de acceso que elegimos conectar. Después de enviar el comando el módulo debería conectarse ahora e imprimir información sobre la conexión. (Si la conexión falla, trate de enviar el comando otra vez hasta que funcione) |

| Valor | Modo de Autenticación                 |
|-------|---------------------------------------|
| 0     | Abierto (Predeterminado)              |
| 1     | WEP-128                               |
| 2     | WPA1                                  |
| 3     | WPA1 y WPA2-PSK Mixto                 |
| 4     | WPA2-PSK                              |
| 5     | No usado                              |
| 6     | Modo ad hoc (unirse a cualquier red ad hoc) |
| 8     | WPE-64                                |

*Figura 1*

#### Conectando Usando Nuestras Librerías WiFi

Ahora que sabes cómo conectarte a un punto de acceso escribiendo cada comando, es hora de usar las librerías y ejemplos que proporcionamos.

Para ver el código requerido para conectarte a un punto de acceso ve a "File -> Examples -> Wifi_Shield -> wifi_test". Cambia el código para usar tu propio SSID (nombre del punto de acceso), y KEY (la contraseña de tu punto de acceso), luego sube el sketch a tu Arduino IDE.

    #define SSID      " SEEED-MKT "
    #define KEY       " seeed-mkt "

Con el sketch subido a tu placa Arduino, abre la ventana del monitor serie. Si el shield fue exitoso al unirse al punto de acceso se mostrará un mensaje "OK" junto con la información de conexión resultante del comando "get everything". Si el shield falló al unirse al punto de acceso se mostrará un mensaje "Failed".

#### Configurando El Shield para Conectar al Encender

El shield puede ser configurado para conectar al encender, solo tienes que hacer esto una vez:

1. Envía el comando "set wlan ssid mySSID" reemplazando mySSID con tu SSID
2. Envía el comando "set wlan join 1".
3. Envía el comando "save".

Ahora el shield se conectará al punto de acceso automáticamente al encender.

Una descripción de lo que hace cada comando puede encontrarse en la hoja de datos del RN-171 y en la tabla a continuación.

| Número | Comandos                   | Descripción                                                                           |
|--------|----------------------------|---------------------------------------------------------------------------------------|
| 1      | set wlan ssid | "ssid" es el nombre del punto de acceso al que te gustaría conectarte automáticamente |
| 2      | set wlan join 1            | Esto le dice al módulo que trate de conectarse al SSID almacenado en memoria automáticamente.  |
| 3      | save                       | Almacenar/Guardar estas configuraciones en el archivo de configuración del Wifi                                   |

#### Configuración de una Dirección IP Estática

Para que el shield obtenga una dirección IP estática del punto de acceso, una vez conectado al punto de acceso, envía los siguientes comandos:

| Número | Comandos                       | Descripción                   |
|--------|--------------------------------|-------------------------------|
| 1      | set ip dhcp 0                  | Desactivar DHCP .             |
| 2      | set ip address | Establecer la dirección IP que desees . |

### Ejemplo 3: Comunicación Con la Red ()

Este ejemplo te mostrará cómo un dispositivo como tu PC y/o teléfono puede comunicarse con el shield WiFi.

Sigue estos pasos:

1. Configura el módulo con los pasos 1-7 de la sección *Conectar Escribiendo Comandos* del Ejemplo 2
2. Establece el puerto IP de escucha en "80" enviando el comando "set ip local 80"
3. Conecta/Une tu shield a un punto de acceso como se muestra en el paso 8 de la sección *Conectar Escribiendo Comandos* del Ejemplo 2
4. Guarda estas configuraciones enviando el comando "save"
5. Obtén la dirección IP de tu shield con el comando "get ip". La dirección IP y el puerto se mostrarán a la derecha de "IP=" en la respuesta (ej. IP=192.168.0.10:80)
6. Abre tu navegador web y escribe la dirección IP de tu shield en la barra de URL de tu navegador web y presiona Enter para visitarla.
7. La ventana del monitor serie de tu Arduino mostrará una respuesta HTTP similar a la que se muestra a continuación. Esta es la información que tu navegador envió al shield para solicitar datos.

```
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

**Paso Uno: Código de Arduino**

Sube el siguiente código a tu placa Arduino reemplazando "myssid" y "mypassword" con los valores de tu punto de acceso respectivamente:

```c
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

    delay(5000);

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

**Paso Dos: Obtener la Dirección IP del Shield**

Abre la ventana del monitor serie y espera a que se muestre el mensaje "Web server ready". El monitor serie también mostrará la dirección IP del shield WiFi:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Salida de comunicación serie del programa Arduino. La dirección IP del shield está resaltada.*

**Paso Tres: Visitar la página web**

Ahora visita esa dirección IP en tu navegador web. Debería mostrarse la página web de abajo, contiene un enlace a Yahoo! y Google y un botón que no hace nada (aún):

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-page.png)

*Una página web simple con dos enlaces y un botón servida desde el shield WiFi.*

Cuando se visita la página web, la ventana del monitor serie también mostrará una cadena "New Browser Request!" como se muestra abajo:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-arduino-serial-window-response.png)

*La ventana de comunicación serie de Arduino mostrando que detectó una nueva conexión/solicitud del navegador.*

<div class="admonition note">
<p class="admonition-title">Nota</p>
En el caso de algunos navegadores, como Google Chrome, incluso escribir la URL en la barra envía una solicitud de página web, esto es porque estos navegadores intentan obtener el título de la página web para la conveniencia del usuario incluso antes de que él/ella visite la página web.
</div>

### Ejemplo 5: Controlando Los Pines Digitales de Arduino Desde una Página Web (Alternando LEDs Desde una Página Web)

En este ejemplo crearemos una página web con tres botones para controlar tres pines digitales diferentes en el Arduino.

Para este tutorial sigue los pasos de abajo. También hemos creado un video donde explicamos el código con más detalle.

[Video - Control de Pines Digitales de Arduino con Shield WiFi Desde Página Web](https://www.youtube.com/watch?v=ek63patAl80)

**Paso 1: Hardware**

Conecta tres LEDs y resistencias a los pines digitales 11, 12, y 13 como se muestra en el esquemático de abajo:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-schematic.png)

*Tres LEDs y resistencias de 1k conectados a los pines 11, 12, y 13.*

**Paso 2: Sketch de Arduino**

Sube el siguiente código a tu placa Arduino pero reemplaza "mySSID" y "myPassword" con el nombre SSID y contraseña de tu punto de acceso:

```c
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

    wifly.sendCommand("set ip protocol 2\r"); // set TCP protocol
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

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
        ?
    }
    Serial.println();
    while (wifly.receive((uint8_t *)&c, 1, 300) > 0);;
    Serial.println("Web server ready");
}

void loop()
{
    if(wifly.available())       // the wifi shield has data available
    {

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

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Salida de comunicación serie del programa Arduino. La dirección IP del escudo está resaltada.*

**Paso 4: Visitar la Página Web**

Visita la dirección IP en un navegador web. Debería mostrarse una página web con tres botones, como la que se muestra a continuación. Haz clic en los botones para controlar los LEDs.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-webpage.png)

*Página web de control de LED servida desde el escudo WiFi.*

El Arduino también responderá al navegador web con el estado del pin, el navegador mostrará esto en una ventana de alerta.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-arduino-response.png)

*Diálogo de alerta mostrando el estado del Pin12, La cadena Pin12 is ON fue enviada desde el Arduino.*

La ventana del monitor serie también mostrará cuando un navegador envía una solicitud para visitar la página web o controlar los pines LED.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-response.png)

*Salida de comunicación serie del Arduino cuando se envía una solicitud HTTP al escudo.*

### Ejemplo 6: Escudo WiFi y Aplicación Android

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Androidapp-ethernet-shield-led-toggle.png)

*La aplicación Android que puedes usar para controlar los pines del Arduino a través del Escudo WiFi o Ethernet.*

**Aplicación Android**

Hemos creado una aplicación Android que puede alternar los pines digitales en el Arduino a través del escudo WiFi, para ver cómo funciona la aplicación y aprender sobre el código mira el video en este enlace:

[Video - Aplicación Android del Escudo WiFi para Control de Pines de Arduino](https://www.youtube.com/watch?v=0R709uGvkWM)

**Software**

Descarga el proyecto/código fuente de Android Studio desde este [enlace:](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFiShieldLEDControl.zip "WiFiShieldLEDControl.zip")

### Ejemplo 7: Envío de Datos y Recuperación de Datos desde un Servidor Externo

El módulo RN-171 en el escudo WiFi tiene la capacidad de actuar como un cliente HTML (esencialmente un navegador web basado en texto), esto significa que podemos usar el escudo para enviar y recibir datos desde un servidor web. En este ejemplo aprenderás a usar el escudo con una Interfaz de Programación de Aplicaciones (API) web que muestra datos meteorológicos de cualquier ciudad (es decir, temperatura, humedad, etc).

El nombre de la API que usaremos es [OpenWeatherMap](http://openweathermap.org/api), cuando envías el nombre de una ciudad y país a este sitio web devuelve una cadena JSON con información meteorológica. Si quieres mostrar el clima para Londres Reino Unido por ejemplo, por favor consulta el tutorial en este enlace [http://openweathermap.org/appid](http://openweathermap.org/appid) .A partir del 9 de octubre de 2015, el sitio web requiere que los usuarios se registren para obtener una clave API antes de visitar la API. Una vez que hayas obtenido la clave API, podrás visitar la siguiente URL [http://api.openweathermap.org/data/2.5/weather?q=London,uk](http://api.openweathermap.org/data/2.5/weather?q=London,uk) que devolvería una cadena JSON como la siguiente, donde los datos meteorológicos y otra información están incrustados.

```
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

    http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,US

**Paso 2: El Código de Arduino**

La Sección 13 del [manual WiFly](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) te enseña diferentes formas de conectarte a un servidor web, pero en todos los casos necesitamos especificar el nombre del servidor (o dirección IP si el servidor no tiene un nombre de dominio), y luego los datos que deseamos enviar.

Los comandos que necesitamos enviar al escudo WiFi para recibir la cadena JSON del servidor OpenWeatherMap son los siguientes:

    set ip proto 18 //enable html client
    set dns name api.openweathermap.org //name of your webserver
    set ip address 0 // so WiFly will use DNS
    set ip remote 80 // standard webserver port
    set com remote 0 // turn off the REMOTE string so it does not interfere with the post
    open // to open the connection
    GET /data/2.5/weather?q=San%20Francisco,US \n\n // to send the data

Este es el código de arduino que enviará los comandos:

```c
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

    delay(5000);

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

    wiflyUart.print("GET /data/2.5/weather?q=San%20Francisco,US \n\n");
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

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Open-weather-api-json-string.png)

*Cadena JSON del clima mostrada en la ventana del monitor serie de Arduino.*

### Ejemplo 8: Comunicación TCP Con Terminal

En este ejemplo te mostraremos cómo enviar información desde el shield WiFi a un programa terminal de PC. Haremos una consola simple de Arduino con menús que te dará la opción de ver el estado de los pines digitales de Arduino y alternarlos.

**Paso 1: Descargar un Terminal TCP**

[Descarga e instala RealTerm](http://sourceforge.net/projects/realterm/files/Realterm/2.0.0.70/Realterm_2.0.0.70_setup.exe/download), una utilidad de terminal que nos permitirá conectarnos al shield WiFi.

**Paso 2: Código de Arduino**

Sube el código de abajo a tu placa Arduino reemplazando "mySSID", "myPassword", y el código de autenticación con la información de tu propio punto de acceso:

```c
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

    delay(5000);

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

            // Create the "You want to toggle pin x?? OK..." string.
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

/*
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
?
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

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Tcp-arduino-serial-comm.png)

*Salida de la ventana del monitor serie de Arduino del ejemplo TCP, la dirección ip y el número de puerto están resaltados.*

En la imagen anterior, la Dirección IP y Puerto serían los siguientes:

    192.168.0.10:80

**Paso 4: Configurar el Terminal TCP y Conectar al Shield**

Abre RealTerm y en la pestaña "Display" ingresa "30" para "Rows" y selecciona la opción "Scrollback":

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-display-tab.png)

*Ventana de RealTerm: rows = 30, y opción Scrollback marcada.*

En la pestaña "Port" del programa RealTerm, escribe la dirección IP y puerto de tu shield, por ejemplo 192.168.0.10:80, luego haz clic en el botón "Open", el menú principal codificado del Arduino debería mostrarse en el terminal.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-port-tab.png)

*Ventana de RealTerm. El campo Port tiene la dirección IP y número de puerto del shield WiFi. Se muestra el menú del Arduino*

En la pestaña "Send" selecciona una de las opciones del menú, ya sea "1" o "2", ingrésala en el cuadro de texto y presiona "Send ASCII" para enviar el valor.

Por ejemplo, para alternar el pin 13 ingresa "2" y presiona "Send ASCII", luego cuando se te solicite "Enter the pin number you wish you toggle" ingresa "13" y haz clic en "Send ASCII". El Arduino debería responder "Pin Toggled!" y regresar al menú principal, ahora ingresa "1" y presiona "Send ASCII" para ver el estado actual de los pines.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-send-tab.png)

*Ventana de RealTerm. El estado del pin 13 fue cambiado de OFF a ON como se muestra en el texto amarillo.*

### Ejemplo 9: WiFi Shield y Relay Shield

Ahora que sabes cómo enviar y recibir información hacia y desde el shield WiFi puedes ver qué tan fácil sería controlar cualquier tipo de dispositivo vía web.

Si deseas controlar dispositivos de alta potencia como tu lámpara de escritorio, un motor, o una bomba de agua vía una página web o aplicación de teléfono recomendamos nuestro [Relay Shield V2.0](/es/Relay_Shield_v3).

El Relay Shield V2.0 usa los pines 4, 5, 6, y 7 por lo que es completamente compatible con el código en los ejemplos de esta página.

### Ejemplo 10: Modo Adhoc

Para usar el shield en modo Adhoc, como un punto de acceso, simplemente conecta el pin IO9 del shield al pin 3.3V en el Arduino, como se muestra a continuación, y reinicia el shield si estaba encendido.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-adhoc-mode-hardware-connection.png)

*Conexión del shield requerida para el modo adhoc. Pin IO9 del shield conectado a 3.3V.*

Para obtener el SSID del shield sube el código del Ejemplo 1 a tu Arduino y abre el monitor serie, el shield responderá con su SSID como en el ejemplo a continuación, donde en este caso **WiFly-EZX-1b** es el SSID.

    AP mode as WiFly-EZX-1b on chan 1

Ahora deberías poder conectarte a tu shield WiFi como un punto de acceso, por ejemplo el SSID debería ser visible en la lista de redes WiFi disponibles de tu PC.

Para aprender más sobre el modo adhoc consulta el [Manual de Usuario WiFly RN](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) sección 16 "Adhoc Networking Mode"

## Preguntas Frecuentes

**P1: ¿Cómo configurar cuando se usa el shield WiFi con Mega?**

R1: Por favor sigue las siguientes instrucciones. Más información sobre Software serial consulta [SoftwareSerial Library](https://arduino.cc/en/Reference/SoftwareSerial).

- Conecta D2 a D10 luego D3 a D11 con cables puente
- Modifica el programa: Wifly(2,3); → Wifly(10,11);

**P2: ¿Es el Wifi Shield compatible con Arduino Due?**

R2: El Wifi shield puede funcionar con Arduino Due. En hardware, puedes conectarlos a través de uno de los cuatro puertos serie en Arduino Due (Si usas Serial 1-3, puede que necesites hacer la conexión con cables puente). La biblioteca actual del wifi shield usa SoftwareSerial, deberías modificarla al puerto Serial de Arduino Due.

**P3: ¿Cómo mejorar la conectividad entre el Wifi Shield y el router?**

R3: No coloques plástico o cualquier otro material dieléctrico en contacto con la antena. Cualquier objeto metálico cerca de la antena impedirá que la antena irradie libremente.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Archivos Eagle WiFi Shield V2.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip)
- [PDF del Esquemático](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_shield_v2_schematic.pdf)
- [Hoja de Datos RN-171](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-171.pdf)
- [Biblioteca Wifi Shield](https://github.com/Seeed-Studio/WiFi_Shield)
- [Manual de Usuario del Módulo WiFi](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) *-- Aquí es donde encontrarás todos los comandos para el módulo RN-171 en el shield.*
- [¿Qué es un Seeeduino?](/es/Seeeduino_v4.2)
- [w3schools](http://www.w3schools.com/) Excelente sitio web para aprender HTML, Javascript y JQuery

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Wifi_Shield_V2.0 -->

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
