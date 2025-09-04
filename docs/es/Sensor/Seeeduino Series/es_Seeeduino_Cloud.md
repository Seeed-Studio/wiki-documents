---
description: Seeeduino Cloud
title: Seeeduino Cloud
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_Cloud
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_cover.jpg)

Seeeduino Cloud es una placa microcontroladora basada en el [módulo WiFi IoT Dragino HE](http://www.dragino.com/products/linux-module/item/87-he.html) y ATmega32u4. HE es un módulo WiFi de 150M, 2.4G de alto rendimiento y bajo costo que significa "núcleo" en chino y con un sistema OpenWrt de código abierto en su interior. Seeeduino Cloud también es una placa compatible con Arduino, 100% compatible con Grove, shields e IDEs (Arduino IDE 1.5.3 y posteriores). Además de la interfaz normal de Arduino, Seeeduino Cloud tiene soporte integrado para Ethernet y WiFi, un puerto USB-A que la hace muy adecuada para aquellos diseños de prototipos que necesitan conexión de red y almacenamiento masivo. También es una buena idea hacer que Seeeduino Cloud sea una puerta de enlace IoT.

[![enter image description here](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/Seeeduino-Cloud-Arduino-Yun-compatible-openWRT-controller-p-2123.html)

## Ideas de Aplicación

* Internet de las Cosas  
* Casa Inteligente
* Aprendizaje

Aquí tienes algunos proyectos divertidos para tu referencia.

|Mensajero Wi-Fi Simple|Enviar datos a Google Docs|Sistema de Monitoreo de Panel Solar|
|--------|----------|---------|
|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/example_3.jpg)|
|[Hazlo Ahora](https://www.instructables.com/id/Arduino-Yun-Messager/)|[Hazlo Ahora](https://www.instructables.com/id/Google-Docs-and-the-Arduino-Y%C3%BAn/)|[Hazlo Ahora](https://www.instructables.com/id/Arduino-Yun-Solar-Panel-Monitoring-System/)|

## Características

* Compatible con Arduino Yun
* Basado en el módulo WiFi IoT Dragino HE
* Sistema OpenWrt de código abierto en el interior
* Soporte para WiFi de 2.4Ghz, 802.11 b/g/n
* Soporte para Ethernet
* Soporte para USB 2.0
* Conectores Grove integrados

## Especificaciones

Debido a que Seeeduino Cloud tiene dos procesadores, esta sección muestra las características de cada uno en dos tablas separadas.

**Módulo Dragino HE**

|Parámetro|Valor|
|------------|------------|
|CPU|ATHEROS AR9331|
|Velocidad de Reloj|400MHz|
|RAM|64MB|
|Flash|16MB|
|SO|OpenWrt|
|Interfaces|2 x RJ45, 1 x USB Host, 1 x UART, 14 GPIOs multiplex|
|Alimentación|Entrada de Alimentación 3.3V|
|WiFi|Soporte para WiFi 150M 2.4Ghz, 802.11 b/g/n|

**Microcontrolador AVR Arduino**

|Parámetro|Valor|
|------------|-------------|
|Microcontrolador|ATmega32u4|
|Memoria Flash|32KB|
|SRAM|2.5kB|
|EEPROM|1kB|
|Velocidad de Reloj|16MHz|
|Voltaje de Operación|5V|
|Pines E/S Digitales|20|
|Canales PWM|7|
|Canales de Entrada Analógica|12|


## Descripción General del Hardware

Las imágenes a continuación muestran una descripción general de las características del hardware de Seeeduino Cloud. El diagrama de pines y las funciones alternativas de varios pines de Seeeduino Cloud se muestran en el diagrama de pines. Esto podría usarse como referencia rápida.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_hardware.png)

* **Puerto Ethernet RJ45**
El Puerto LAN está conectado al ATHEROS AR9331 y tiene su propia dirección IP que puede usarse para conexión a Internet y gestión del dispositivo.
* **Entrada USB**
El Puerto USB se usa para conectar la placa a tu PC para programación y para alimentación. Micro USB es la versión ubicua de USB, encontrada en la mayoría de teléfonos Android y otros dispositivos. Probablemente tengas docenas de estos cables por tu casa.
* **HOST USB**
Seeeduino Cloud proporciona capacidad de host USB que le permite conectarse a varios dispositivos USB como cámaras web, unidades USB, teclados, joysticks y más.
* **32U4 RST**
Presionar el botón de Reset 32U4 reiniciará el MCU ATmega32U4. Usualmente, se usa para reiniciar tu sketch.
* **SYS RST**
Presionar el botón de Reset del Sistema reiniciará el sistema Linux.
* **Wi-Fi RST**
El botón de Reset Wi-Fi solo soporta presión larga. Cuando se presiona y se libera después de 5 segundos, reiniciará la configuración WiFi. Otras configuraciones se mantendrán. Si el botón se presiona y se libera después de 30 segundos, reiniciará TODAS las configuraciones a los valores predeterminados de fábrica.
* **Conectores Grove**
SeeedStudio tiene una variedad de sensores/dispositivos que pueden hacer uso de esta conexión I2C o UART. Además, vendemos conectores Grove independientes para ayudarte a hacer tus propias conexiones de sensores. El conector Grove I2C también está conectado a los pines analógicos A4 y A5 para SDA y SCL respectivamente si prefieres usar esos pines en su lugar. El conector Grove UART está conectado a los pines digitales 0 y 1 para RX y TX respectivamente.
* **ICSP**
Esta es la conexión ICSP para el ATmega32U4, está ubicada en la posición estándar ICSP/SPI para hardware compatible con Arduino Uno, Due, Mega y Leonardo (ej. shields) que pueden usar este conector. Los pines SPI en este puerto: MISO, SCK y MOSI, también están conectados a los pines digitales 12, 13 y 11 respectivamente igual que los del Arduino Uno.
* **Conector I-PEX**
Este es un Conector I-PEX para una antena externa.
* **Pines**
No es posible acceder a los pines E/S del Atheros AR9331. Todas las líneas E/S están conectadas al ATmega32U4.
Cada uno de los 20 pines digitales en el 32U4 puede usarse como entrada o salida, usando las funciones pinMode(), digitalWrite() y digitalRead(). Operan a 5 voltios. Cada pin puede proporcionar o recibir un máximo de 40 mA y tiene una resistencia pull-up interna (desconectada por defecto) de 20-50 kOhms.
Además, algunos pines tienen funciones especializadas:
  * Serial: 0 (RX) y 1 (TX). Usado para recibir (RX) y transmitir (TX) datos serie TTL usando la capacidad serie por hardware del ATmega32U4. Nota que en el Seeeduino Cloud, la clase Serial se refiere a comunicación USB (CDC); para serie TTL en los pines 0 y 1, usa la clase Serial1. Los puertos serie por hardware del ATmega32U4 y el AR9331 en el Seeeduino Cloud están conectados juntos y se usan para comunicarse entre los dos procesadores. Como es común en sistemas Linux, en el puerto serie del AR9331 se expone la consola para acceso al sistema, esto significa que puedes acceder a los programas y herramientas ofrecidas por Linux desde tu sketch.
  * TWI: 2 (SDA) y 3 (SCL). Soporta comunicación TWI usando la librería Wire.
  * Interrupciones Externas: 3 (interrupción 0), 2 (interrupción 1), 0 (interrupción 2), 1 (interrupción 3) y 7 (interrupción 4). Estos pines pueden configurarse para disparar una interrupción en un valor bajo, un flanco ascendente o descendente, o un cambio en el valor. Ver la función attachInterrupt() para detalles. No se recomienda usar los pines 0 y 1 como interrupciones porque también son el puerto serie por hardware usado para hablar con el procesador Linux. El pin 7 está conectado al procesador AR9331 y puede usarse como señal de handshake en el futuro. Se recomienda tener cuidado con posibles conflictos si intentas usarlo como interrupción.
  * PWM: 3, 5, 6, 9, 10, 11 y 13. Proporcionan salida PWM de 8 bits con la función analogWrite().
  * SPI: en el header ICSP. Estos pines soportan comunicación SPI usando la librería SPI. Nota que los pines SPI no están conectados a ninguno de los pines E/S digitales como lo están en el Uno, Solo están disponibles en el conector ICSP. Esto significa que si tienes un shield que usa SPI, pero NO tiene un conector ICSP de 6 pines que se conecte al header ICSP de 6 pines del Seeeduino Cloud, el shield no funcionará. Los pines SPI también están conectados a los pines gpio del AR9331, donde se ha implementado por software la interfaz SPI. Esto significa que el ATMega32u4 y el AR9331 también pueden comunicarse usando el protocolo SPI.
  * Entradas Analógicas: A0 - A5, A6 - A11 (en los pines digitales 4, 6, 8, 9, 10 y 12). El Seeeduino Cloud tiene 12 entradas analógicas, etiquetadas A0 hasta A11, todas las cuales también pueden usarse como e/s digitales. Los pines A0-A5 aparecen en las mismas ubicaciones que en el Uno; las entradas A6-A11 están en los pines e/s digitales 4, 6, 8, 9, 10 y 12 respectivamente. Cada entrada analógica proporciona 10 bits de resolución (es decir, 1024 valores diferentes). Por defecto las entradas analógicas miden desde tierra hasta 5 voltios, aunque es posible cambiar el extremo superior de su rango usando el pin AREF y la función analogReference().
  * AREF. Voltaje de referencia para las entradas analógicas. Usado con analogReference().

## Comenzando

Seeeduino Cloud tiene dos procesadores a bordo. Uno es un ATmega32U4 como en el Leonardo. El otro es un Atheros 9331, ejecutando Linux y la pila inalámbrica OpenWRT, que permite a la placa conectarse a redes WiFi y Ethernet. Con la [Librería Yun Bridge](https://www.arduino.cc/en/Reference/YunBridgeLibrary), es posible llamar programas o scripts personalizados en el sistema Linux a través del Arduino para conectarse con varios servicios de internet.

### Programar en el lado ATmega32U4

El ATmega32U4 se programa usando el [Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software?setlang=en), si no lo has instalado, por favor haz clic [aquí](https://www.arduino.cc/en/Guide/HomePage) para instrucciones de instalación.

**Instalar el Controlador**

Primero que todo, necesitas:

* **Obtener un cable Micro-USB**
  * Necesitas un cable Micro-USB primero; el cable de datos de un teléfono Android funcionará bien.
Si no puedes encontrar uno, puedes comprar uno [aquí](https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100).

:::caution
Ten cuidado gentil al manejar el conector micro USB, o podrías romper el conector.
:::

* **Conectar la placa**
  * El Seeeduino Cloud automáticamente toma energía ya sea de la conexión USB a la computadora o de una fuente de alimentación externa. Conecta la placa Arduino a tu computadora usando el cable USB. El LED verde de alimentación (etiquetado **PWR**) debería encenderse.

**Para Windows**

La versión de Windows del Software Arduino (IDE) ya contiene los controladores apropiados. Cuando lo instalaste permitiste que el sistema operativo los instalara. Conecta tu Seeeduino Cloud y los controladores se instalarán automáticamente.

**Para MAC**

La primera vez que conectes un Seeeduino Cloud a una Mac, se iniciará el "Asistente de Configuración de Teclado". No hay nada que configurar con el Seeeduino Cloud; puedes cerrar este diálogo haciendo clic en el botón rojo en la parte superior izquierda de la ventana.

**Para Linux**

No hay necesidad de instalar controladores para Ubuntu 10.0.4 y posteriores, pero asegúrate de que el puerto 5353 no esté siendo bloqueado por un firewall.

**Abrir tu primer sketch**

Abre el sketch de ejemplo de parpadeo LED: File > Examples >01.Basics > Blink.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Load_Blink.jpg)

**Seleccionar tu tipo de placa y puerto**

Necesitarás seleccionar la entrada en el menú Tools > Board que corresponda a tu placa Arduino o Genuino.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelBoard.jpg)

Selecciona el dispositivo serial de la placa desde el menú Tools | Serial Port. Es probable que sea COM3 o superior (COM1 y COM2 usualmente están reservados para puertos seriales de hardware). Para averiguarlo, puedes desconectar tu placa y reabrir el menú; la entrada que desaparezca debería ser la placa Arduino o Genuino. Reconecta la placa y selecciona ese puerto serial. Cuando tu placa esté configurada apropiadamente en WiFi, la encontrarás en la lista de Puertos, como en nuestra captura de pantalla.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YUN_SelPort.jpg)

**Subir el programa**

Ahora, simplemente haz clic en el botón "Upload" en el entorno. Espera unos segundos - deberías ver los leds RX y TX en la placa parpadeando. Si la subida es exitosa, el mensaje "Done uploading." aparecerá en la barra de estado.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/UNO_Upload.png)

Unos segundos después de que termine la subida, deberías ver el LED(D13) en la placa comenzar a parpadear (en verde). Si lo hace, ¡felicitaciones! Has puesto Arduino en funcionamiento. Si tienes problemas, por favor consulta las sugerencias de solución de problemas.

### Programar en el lado ATHEROS AR9331

**Configurar Red**

El Seeeduino Cloud tiene una interfaz WiFi y un puerto LAN. Cualquiera de ellos tiene una dirección IP que puede ser usada para conexión a internet y gestión del dispositivo.

**1. Modo Wi-Fi AP**

Cuando enciendes el Seeeduino Cloud por primera vez, habrá una red WiFi insegura llamada SeeeduinoCloud-AXXXX mostrada en las conexiones wifi.
Puedes conectar tu computadora a esta red como se muestra abajo. Tu computadora obtendrá una ip de esta red **192.168.240.xxx**. El Seeeduino Cloud tiene una dirección ip predeterminada de **192.168.240.1**.

**2. Modo Wi-Fi STA**

Después de conectar SeeeduinoCloud-AXXXX, escribe 172.31.255.254 o 192.168.240.1 en la caja de búsqueda del navegador y te conectarás al Seeeduino Cloud con interfaz web. La contraseña predeterminada es "seeeduino", luego haz clic en LOG IN.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_login.png)

Haz clic en "SYSTEM", selecciona tu red Wi-Fi, ingresa la contraseña y haz clic en "CONFIGURE & RESTART".

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_sta.png)

**3. Ethernet Integrado**

Cuando conectas Seeeduino Cloud a una red cableada con un cable ethernet, intentará conectarse automáticamente vía DHCP. La placa aparecerá en el menú de puertos tal como lo haría por WiFi.

### Firmware Sysupgrade

A continuación se detalla usando el Navegador para actualizar nuevo firmware.

* Grabar File -> Examples -> Birdge -> YunSerialTerminal.ino al Seeeduino Cloud

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/YunSerialTerminal.png)

* Encontrar ip del Seeeduino Cloud escribiendo `ifconfig` en el putty que puede comunicarse con Seeeduino Cloud

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/putty_configure.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/inet_addr.png)

* Visitar Seeeduino Cloud escribiendo la ip del Seeeduino Cloud en el Navegador. y la contraseña es `seeeduino`

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/password.png)

* Obtener [newest_Firmware](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* Actualizar a través del botón de actualización.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade.png)

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/upgrade_configure.png)

### Terminal

Podrías acceder al terminal del Seeeduino Cloud vía SSH para Programar o configurar en el lado ATHEROS AR9331.

* Descargar un cliente SSH como [putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html)
* Usar la dirección IP del Seeeduino Cloud y ejecutar el cliente SSH.

```
username: root
password: seeeduino
```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/seeeduino_cloud_terminal.png)

### Biblioteca Yun Bridge

La Biblioteca Bridge simplifica la comunicación entre la Placa Arduino y Dragino HE. Los comandos Bridge del AVR (Placa Arduino) son interpretados por Python en el HE.
Su función es

* ejecutar programas en el lado GNU/Linux cuando lo solicite Arduino,
* proporcionar un espacio de almacenamiento compartido para compartir datos como lecturas de sensores entre el Arduino e Internet
* recibir comandos de Internet y pasarlos directamente al Arduino.
Hay explicaciones detalladas y muchos ejemplos para mostrar cómo usar Bridge en el [Sitio Web Oficial de Arduino](https://www.arduino.cc/en/Reference/YunBridgeLibrary). A continuación se muestran algunos ejemplos que usan la Biblioteca Bridge.

**Ejemplo 1: Saluda a Linux**

Este ejemplo es una prueba de saludo entre el Arduino y Seeeduino Cloud. El ejemplo se puede encontrar en el IDE de Arduino--> Archivo --> Ejemplos --> Bridge --> ConsoleRead. Un tutorial de este ejemplo se puede encontrar [aquí](https://www.arduino.cc/en/Tutorial/ConsoleRead). Puedes ver el código a continuación con algunos detalles adicionales para entenderlo con el Seeeduino Cloud:

```
#include <Console.h>

String name;

void setup() {
    // Initialize Console and wait for port to open:
    Bridge.begin();
    Console.begin();

    // Wait for Console port to connect
    while (!Console);

    Console.println("Hi, what's your name?");
}

void loop() {
    if (Console.available() > 0) {
        char c = Console.read(); // read the next char received
        // look for the newline character, this is the last character in the string
        if (c == '\n') {
            //print text with the name received
            Console.print("Hi ");
            Console.print(name);
            Console.println("! Nice to meet you!");
            Console.println();
            // Ask again for name and clear the old name
            Console.println("Hi, what's your name?");
            name = "";  // clear the name string
        }
        else {       // if the buffer is empty Cosole.read() returns -1
            name += c; // append the read char from Console to the name string
        }
    }
}

```

**Ejemplo 2: Registrar Datos en USB flash**

Este ejemplo muestra cómo registrar datos en un USB flash. El sketch utilizado en este ejemplo es el mismo que [aquí](http://wiki.dragino.com/index.php?title=Arduino_Yun_examples#Log_sensor_data_to_USB_flash). Y el código fuente se puede encontrar allí.
El Seeeduino Cloud montará automáticamente el USB flash en el directorio /mnt/sda1. Y el sketch añadirá los datos del sensor al archivo /mnt/sda1/data/datalog.csv. Así que asegúrate de que existe tal archivo en el USB flash antes de ejecutar el sketch.

```
#include <FileIO.h>     //FileIO class allow user to operate Linux file system
#include <Console.h>    //Console class provide the interactive between IDE and Yun Shield
void setup() {
    // Initialize the Console
    Bridge.begin();
    Console.begin();
    FileSystem.begin();
    while(!Console);   // wait for Serial port to connect.
    Console.println("Filesystem datalogger\n");
}
void loop () {
    // make a string that start with a timestamp for assembling the data to log:
    String dataString;
    dataString += getTimeStamp();
    dataString += " , ";
    // read three sensors and append to the string:
    for (int analogPin = 0; analogPin < 3; analogPin++) {
        int sensor = analogRead(analogPin);
        dataString += String(sensor);
        if (analogPin < 2) {
            dataString += ",";    // separate the values with a comma
        }
    }
    // open the file. note that only one file can be open at a time,
    // so you have to close this one before opening another.
    // The USB flash card is mounted at "/mnt/sda1" by default
    File dataFile = FileSystem.open("/mnt/sda1/data/datalog.csv", FILE_APPEND);
    // if the file is available, write to it:
    if (dataFile) {
        dataFile.println(dataString);
        dataFile.close();
        // print to the serial port too:
        Console.println(dataString);
    }
    // if the file isn't open, pop up an error:
    else {
        Console.println("error opening datalog.csv");
    }
    delay(15000);  //Write every 15 seconds
}
// getTimeStamp function return a string with the time stamp
// Yun Shield will call the Linux "date" command and get the time stamp
String getTimeStamp() {
    String result;
    Process time;
    // date is a command line utility to get the date and the time
    // in different formats depending on the additional parameter
    time.begin("date");
    time.addParameter("+%D-%T");   // parameters: D for the complete date mm/dd/yy
    //              T for the time hh:mm:ss
    time.run();   // run the command
    // read the output of the command
    while(time.available()>0) {
        char c = time.read();
        if(c != '\n')
        result += c;
    }
    return result;
}

```

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/img/500px-SeeeduinoCloud_Sketch_USB.png)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

* **Esquemas**
  * [Archivo Eagle de Seeeduino Cloud](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_v1.0.zip)
  * [Archivo PDF de Seeeduino Cloud](https://files.seeedstudio.com/wiki/Seeeduino_Cloud/res/Seeeduino_Cloud_PDF.pdf)

* **Firmware**
  * [Firmware de Seeeduino Cloud](http://www.dragino.com/downloads/index.php?dir=motherboards/ms14/Firmware/Yun/Newest_Firmware/)

* **Referencias**
  * [Primeros Pasos con Arduino](https://www.arduino.cc/en/Guide/HomePage)
  * [Referencia del Lenguaje Arduino](https://www.arduino.cc/en/Reference/HomePage)
  * [Descargar el Software Arduino (IDE)](https://www.arduino.cc/en/Main/Software)
  * [Preguntas Frecuentes de Arduino](https://www.arduino.cc/en/Main/FAQ)
  * [Introducción a Arduino](https://www.arduino.cc/en/guide/introduction)
  * [Página de Wikipedia para Arduino](https://en.wikipedia.org/wiki/Arduino)
  * [Wiki de Arduino Yun](https://www.arduino.cc/en/Main/ArduinoBoardYun)
  * [Primeros pasos con Arduino Yun](https://www.arduino.cc/en/Guide/ArduinoYun#toc2)
  * [Librería Yun Bridge](https://www.arduino.cc/en/Reference/YunBridgeLibrary)

## Preguntas Frecuentes

* ¿Qué es la Librería Yun Bridge?

La Librería Yun Bridge es el mecanismo utilizado en Arduino Yun para la comunicación entre una MPU y una MCU. Seeeduino Cloud soporta la Librería Yun Bridge para facilitar a los usuarios de Arduino la construcción de sus proyectos IoT.

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
