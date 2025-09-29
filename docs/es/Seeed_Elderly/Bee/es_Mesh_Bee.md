---
description: Mesh Bee
title: Mesh Bee
keywords:
- Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Mesh_Bee
last_update:
  date: 1/13/2023
  author: shuxu hu
---

## Bienvenido al Wiki de MeshBee

---
Este es un recurso comunitario, destinado a reunir documentación, demostraciones y enlaces a buenas fuentes de información sobre:

 1. Arquitectura del firmware de MeshBee;
 2. Guía de inicio de MeshBee;
 3. Casos de uso y ejemplos de MeshBee;

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Mesh_bee.jpg)

Mesh Bee es un transceptor inalámbrico de 2.4GHz de seeed studio. Está basado en el chip microcontrolador inalámbrico de la nueva serie JN516x de NXP y soporta la pila de red ZigBee Pro. El firmware de fábrica envuelve la operación complicada de la pila ZigBee en unos pocos comandos serie fáciles de usar, y convierte Mesh Bee en un nodo de comunicación serie transparente que puede ser parte de una conexión simple punto a punto o una red de malla compleja. Además, Mesh Bee es totalmente hardware abierto y de código abierto, lo que significa que puedes personalizar el firmware según tus requerimientos. Puedes usar el núcleo ARM de JN516x para controlar cosas y JenOS para simplificar tu desarrollo. El entorno de desarrollo y las herramientas de NXP son todas gratuitas. Mesh Bee te traerá mucha diversión.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/s/Mesh%20Bee%20-%20Open%20Source%20Zigbee%20Pro%20Module%20with%20MCU%20(JN5168).html)

## 2. Características

---

- Alcance: Interior/Urbano: hasta 30m; Exterior línea de vista: hasta 100m;
- Sensibilidad del Receptor: -95dBm
- Velocidad de Transmisión de Datos: 4800, 9600, 19200, 38400, 57600, 115200 (bps)
- Frecuencia de Trabajo: banda de 2.4GHz sin licencia
- Tipo de Comunicación: Punto a Punto o Red Estrella o Red de Malla
- Soporte OTA: actualizar firmware del nodo por aire
- Interfaz Serie Fácil de Usar y puertos extensibles ricos
- Comando AT Fácil de Usar: Configurar red ZigBee, Establecer Velocidad de Baudios Serie, etc.
- Hardware y Firmware de código abierto
- CPU RISC de 32 bits Programable: reloj de 32M, Flash de 256KB, RAM de 32KB, EEPROM de 4KB
- Socket compatible con el Xbee, así que puedes conectarlo en cualquier socket Xbee como un reemplazo rápido.

Nota: Mesh Bee no se comunicará con Xbee ya que las versiones de la pila ZigBee que están usando son diferentes.

## 3. Especificación

---

| Especificación | Valor |
|--------------|-------|
| Microprocesador | JN5168 (CPU RISC de 32 bits, velocidad de reloj de 32MHz) |
| Recursos | 256kB/32kB/4kB (Flash/RAM/EEPROM) |
| Tamaño de PCB | 24.5mmx30.5mmx0.8mm |
| Dimensión del Contorno | 24.5mmx30.5mmx9.77mm |
| Indicadores | No |
| Fuente de alimentación | 3.3V |
| Cantidad de E/S | 12 |
| Entrada ADC | 3(2 multiplexando con E/S) |
| Interfaces | UARTx2, SPI, I2C |
| Interfaz de programa | UART+MISO |
| Conectividad | Socket compatible con XBee |
| Protocolo de Comunicación | Uart(TTL) |
| Banda de Frecuencia de Operación | 2.4GHz |
| Pila/Software | RF4CE, JenNet-IP , ZigBee Pro |

### 3.1 Características Eléctricas

| Especificación | Mín | Típ | Máx | Unidad |
|--------------|-----|-----|-----|------|
| Voltaje de Entrada Máximo | -0.3 | | 3.6 | V |
| Voltaje de Entrada de Trabajo | 2.0 | 3.3 | 3.6 | V |
| Corriente de Transmisión | | 15 | | mA |
| Corriente de Recepción | | 17 | | mA |
| Corriente de Sueño Profundo | | 0.12 | | uA |
| Temperatura de Operación | -40 | | | |

## 4. Definición de pines

| Nombre del Pin | Funciones Alternativas | Tipo | Descripción |
|----------|-------------------|------|-------------|
| 3V3 | - | Entrada de alimentación | VCC, +3.3V |
| TX1 | D14 | Salida | Puerto Tx de Uart1; E/S Digital 14 |
| RX1 | D15 | Entrada | Puerto Rx de Uart; E/S Digital 15 |
| DO1 | SPIMISO | Entrada/Salida | Salida Digital 1; Entrada Master In Slave Out de SPI |
| !RST | - | Entrada | Puerto de reinicio |
| D11 | PWM1 | Entrada/Salida | E/S Digital 11 (uso predeterminado: Indicador RSSI); Salida PWM1 |
| DO0 | SPICLK | Salida | Salida Digital 0; Salida de Reloj Master de SPI |
| D18 | SPIMOSI | Entrada/Salida | E/S Digital 18; Salida Master Out Slave In de SPI |
| VRef | ADC2 | Entrada | Voltaje de referencia de periférico analógico; entrada ADC 2 |
| GND | - | GND | GND |
| TX0 | D6 | Entrada/Salida | Puerto Tx de Uart0; E/S Digital 6 |
| D12 | CTS0 | Entrada/Salida | E/S Digital 12; Entrada Clear To Send de UART 0 |
| D9 | - | Entrada/Salida | E/S Digital 9 (uso predeterminado: Indicador ON/Sleep de Mesh Bee) |
| RX0 | D7 | Entrada/Salida | Puerto Rx de Uart0; E/S Digital 7 |
| D10 | - | Entrada/Salida | E/S Digital 10 (uso predeterminado: Indicador de Asociación de Red) |
| D13 | RTS0 | Entrada/Salida | E/S Digital 13; Salida Request To Send de UART 0 |
| D1 | SPISEL2; ADC4 | Entrada/Salida | E/S Digital 1; Salida Master Select 2 de SPI; entrada ADC 4 |
| D0 | SPISEL1; ADC3 | Entrada/Salida | E/S Digital 0; Salida Master Select 1 de SPI; entrada ADC 3 |
| D16 | SCL | Entrada/Salida | E/S Digital 16; reloj I2C |
| D17 | SDA | Entrada/Salida | E/S Digital 17; datos I2C |

Nota: Solo se listan las funciones alternativas importantes, puede haber más, por favor consulte la hoja de datos de JN516x.

Nota2: Los pines relacionados con SPI pueden usarse como E/S digital solo si sabes cómo deshabilitar el controlador de flash externo.

## 5. Uso

---

### 5.1 Instalación de Hardware

El Mesh Bee tiene un socket Bee general. Así que puedes usarlo como XBee o RFBee, etc. Una cosa a tener en cuenta es que los pines no son 100% compatibles entre sí, excepto por parte de ellos.
Si eres nuevo en la serie Bee, por favor sigue [este enlace](/Grove_Cape_for_BeagleBone_Series "Grove_Cape_for_BeagleBone_Series") para aprender sobre la Serie Bee y [este enlace](/RFbee_V1.1-Wireless_Arduino_compatible_node#Usage "RFbee V1.1 - Wireless Arduino compatible node") para saber cómo instalar Bee con otro hardware.

### 5.2 Cómo actualizar el firmware

El firmware predeterminado pre-grabado en Mesh Bee es un firmware coordinador debido a la inconveniencia de fabricación y venta. Debes grabar el firmware de router / dispositivo final por ti mismo. Y es lo suficientemente simple para makers como tú.

JN516x tiene una interfaz específica de descarga de firmware con un UART y algunos otros pines, así que necesitas un **programador** para grabarlo. Proporcionamos esto con [UartSBee v5](/UartSBee_v5 "UartSBee v5"). UartSBee v5 tiene la mayoría de las características de v4 y además un programador para Mesh Bee.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/UartSBee_V05.jpg)

Para actualizar el firmware, sigue los pasos:

- Paso 1: Descarga el firmware más reciente desde github;

  - [Mesh_Bee#9.1_Firmware_Downloads](/Mesh_Bee#91-firmware-downloads "Mesh Bee")

- Paso 2: Configura el UartSBee v5 con FT_Prog;

  - Descarga FT_Prog: [File:FT Prog v2.8.2.0.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/FT_Prog_v2.8.2.0.zip "File:FT Prog v2.8.2.0.zip") e instala. (Solo Windows)

  - Conecta el UartSBee v5 a la PC, abre FT_Prog y configúralo así:

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/FT_Prog.jpg)

- Paso 3: Cambia el SW1 a la posición "3V3" y SW3 a la posición "Prog";

- Paso 4: Conecta el módulo Mesh Bee en UartSBee v5;

-Paso 5: Graba el firmware con "Jennic Flash Programmer";

Descarga Jennic Flash Programmer: [File:Jennic flash programmer.zip](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Jennic_flash_programmer.zip "File:Jennic flash programmer.zip") y descomprime. (Solo Windows)

Abre "FlashGUI.exe" -&gt; navega al archivo bin del firmware

-&gt; selecciona el puerto COM de UartSBee v5 (si no existe, haz clic en el botón Refresh)

-&gt; otras selecciones como en la siguiente imagen -&gt; marca "Connect"

-&gt; la información del dispositivo y la dirección MAC serán detectadas

-&gt; haz clic en el botón "Program"

-&gt; Una pequeña ventana de herramienta aparecerá y el progreso de descarga se mostrará

-&gt; terminar.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer1.jpg)

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_programmer3.png)

### 5.3 Comandos AT y Configuración

#### 5.3.1 Comandos AT

El Mesh Bee puede configurarse con comandos AT por ahora. El método de configuración de API binaria puede proporcionarse según tus necesidades. Así que por favor publica tus requerimientos en el [grupo de discusión](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group) si necesitas esta característica. Tomaremos la decisión de desarrollo basada en tus opiniones.

**Descarga el manual de comandos AT:** [File:AT command manual for Mesh Bee V1.0.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf "File:AT command manual for Mesh Bee V1.0.pdf")

#### 5.3.2 Configuración

El Mesh Bee soporta el estándar ZigBee Pro que puede construir una red de malla con un gran número de nodos. Puedes necesitar algunos conceptos básicos de ZigBee para configurarlo más efectivamente. Pero aquí hay una guía de cómo formar una red simple punto a punto. Cualquiera puede hacer esto sin ningún conocimiento básico de ZigBee.

<big>Paso 1: Ten listos dos módulos Mesh Bee y un UartSBee v5;</big>

<big>Paso 2: Graba el firmware de Dispositivo Final en uno de los dos Mesh Bee, por favor consulta 5.2 Cómo actualizar el firmware;</big>

<big>Paso 3: Configura el nodo coordinador;</big>

Para configurar un nodo Mesh Bee, primero debes conectarlo a la PC. Hay muchas maneras de hacer esto. Si tienes un UartSBee v5, se vuelve muy fácil. Solo conecta el coordinador en UartSBee v5 y cambia SW3 al lado "Uart".

Además, puedes usar cualquier dispositivo USB-a-TTL. Lo básico es que Mesh Bee se comunica con el exterior a través de UART1(TX1&RX1) y el nivel de voltaje de UART1 es 3.3V. Un voltaje más alto puede dañar la E/S.

Después de la conexión por cable, abre una herramienta serial, selecciona el puerto COM y establece la velocidad de baudios a 115200(predeterminado).

Envía "+++" para poner Mesh Bee en modo de comando AT. Nota que debes configurar tu herramienta serial para enviar el carácter CR.

Envía el comando "ATPA1".

Presiona el botón de reset de UartSBee v5 para reiniciar Mesh Bee.

Espera hasta que el led "ASSOC" de UartSBee v5 se encienda. OK, el coordinador ha terminado la formación de la red ZigBee. Puedes enviar el comando "ATIF" para ver la información de la red.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Configure_coo2.png)

Envía el comando "ATEX" para salir del modo AT y entrar al modo de transmisión de datos. Ahora el nodo coordinador está configurado.

<big>Paso 4: Configura el nodo dispositivo final;</big>

Primero, conéctate al UART1 del dispositivo final con velocidad de baudios 115200. Nota que si solo tienes 1 UartSBee v5 y quieres configurar el dispositivo final con el mismo, debes encender el coordinador nuevamente después de desconectarlo de UartSBee v5. El coordinador siempre debe estar encendido porque mantiene la red ZigBee creada. Si se apaga, la red desaparece.

Envía "+++" al dispositivo final.

-&gt; Luego envía el comando "ATAJ1".

-&gt; Envía el comando "ATRS"

-&gt; Espera unos segundos

-&gt; El led "ASSOC" de UartSBee v5 se enciende (configurar con UartSBee v5).

-&gt; Envía el comando "ATIF", revisa el "PANID" de la sección "3. belonging to", si "PANID" no es 0x0000, entonces el dispositivo final se ha unido a la red ZigBee.

Ahora envía el comando "ATEX" para salir del modo AT.

OK, el dispositivo final está bien configurado.

<big>Paso 5: Prueba la conexión;</big>

Conecta los dos nodos (coordinador y dispositivo final) con una herramienta serie. Envía datos en un lado y verifica si los mismos datos se reciben en el otro lado.

La información de conexión se guardará de forma persistente después del apagado.

### 5.4 Guía OTA

Mesh Bee soporta actualización de firmware por aire. Es decir, una vez que hayas terminado la configuración de red, el firmware del router/dispositivo final puede ser actualizado por OTA.

<big>Paso 1: Flashear un nuevo firmware en la memoria flash externa del coordinador. </big>

Para lograr este paso todo lo que debes hacer es muy similar a [5.2 Cómo actualizar firmware](/Mesh_Bee#52-how-to-update-firmware "Mesh Bee"), la única diferencia es elegir "External" para "Flash Select".

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Flash_External.jpg)

<big>Paso 2: Asegúrate de que la red esté configurada correctamente y los nodos puedan comunicarse con otros.</big>

Configura los nodos de red como se describe en [5.3.2_Configuration](/Mesh_Bee#53-at-commands--configuration "Mesh Bee"). Envía el comando "ATLA" para ver los nodos en la red.

<big>Paso 3: Activar el proceso OTA. </big>

Envía el comando "ATDAxxxx" para establecer la dirección de destino (xxxx es la dirección corta del nodo cuyo firmware será actualizado)

-&gt; Envía "ATOR200" para establecer el intervalo de paquetes ota a 200ms/paquete. Más lento será mejor.

-&gt; Envía "ATOT" para activar el proceso de descarga OTA

-&gt; Envía "ATOS" para monitorear el procesamiento de descarga, o envía "ATOA" para abortar la descarga si quieres.

Cuando la descarga termine, el nodo objetivo se reiniciará y el nuevo firmware tomará su lugar. Puedes enviar el comando "ATLA" para confirmar la versión de FW del objetivo.

### 5.5 Ejemplo

Este ejemplo solo es compatible con firmware v1.0, para versiones posteriores de firmware, por favor consulta el Cook Book que puede descargarse en la sección de Recursos.

Este es un ejemplo simple sobre control remoto con 2 nodos Mesh Bee.

<big>Paso 1: Preparar los materiales</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example0.jpg)

Son:

- [Seeeduino v3](https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7) x2

- XBee shield x2 , versión 1/2, la imagen arriba muestra [XBee Shield v1](https://www.seeedstudio.com/depot/xbee-shield-p-419.html?cPath=73) y [XBee Shield v2](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

- Mesh Bee x2 (la imagen arriba muestra la versión prototipo, la versión de lanzamiento puede ser diferente en color)

- UartSBee v5 x1

- [Rotary Angle](https://www.seeedstudio.com/depot/grove-rotary-angle-sensor-p-770.html?cPath=85_52) x1

- [Servo](https://www.seeedstudio.com/depot/grove-servo-p-1241.html?cPath=39_41) x1

- Cables

<big>Paso 2: Configurar nodos Mesh Bee</big>

Consulta [5.3.2_Configuration](/Mesh_Bee#532-configuration "Mesh Bee") para configurar una conexión p2p.

<big>Paso 3: Ensamblar el lado del Servo (ser controlado) </big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example1.jpg)

Conecta la línea de señal del servo (amarilla) al Digital 10, línea roja a VCC y línea negra/marrón a GND

-&gt; Conecta "XB_TX" con D0 y conecta "XB_RX" con D1 (significa usar el UART de hardware del seeeduino)

-&gt; Conecta Mesh Bee (coordinador) en el socket Bee del XBee shield

-&gt; No olvides conectar el XBee shield al Seeeduino D:

<big>Paso 4: Ensamblar el lado de control</big>

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example2.jpg)

Conecta la línea de señal del ángulo rotatorio (amarilla) a A0, línea roja a VCC y línea negra a GND

-&gt; Cambia el interruptor "USB_UART_M..8" del XBee Shield v1 al lado derecho (M..8) y el interruptor "D11/12_XBEE_UART" al lado derecho (X_RX_X_TX)

-&gt; Conecta Mesh Bee (dispositivo final) en el socket Bee del XBee shield

-&gt; Conecta el XBee Shield al Seeeduino

<big>Paso 5: Programar</big>

MeshBeeDemo_servo:

```
#include <Servo.h>
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(11, 12); // RX, TX

Servo myservo;  // create servo object to control a servo
// a maximum of eight servo objects can be created

int pos = 0;    // variable to store the servo position
unsigned int sensorValue = 0;  // variable to store the value coming from the sensor
unsigned char cmd;
unsigned int lastSensorValue = 0;

void setup()
{
    Serial.begin(115200);
    //mySerial.begin(9600);
    myservo.attach(10);  // attaches the servo on pin 9 to the servo object

    //config Mesh Bee
    Serial.println("atex");

}


void loop()
{
    if (read_msg(&cmd, &sensorValue))
    {
        if (cmd ==  CMD_POS)
        {

            if (lastSensorValue != sensorValue)
            {
                lastSensorValue = sensorValue;
                //Serial.println(sensorValue);
                pos = map(sensorValue, 0, 1023, 0, 180);
                myservo.write(pos);
            }
        }
    }
    //delay(10);
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                //available packet
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

MeshBeeDemo_entradaAnalógica:

```
#include <SoftwareSerial.h>

#define CMD_POS    1

#define COMM_SER    Serial

//SoftwareSerial mySerial(10, 11); // RX, TX

int sensorPin = A0;    // select the input pin for the potentiometer
int sensorValue = 0;  // variable to store the value coming from the sensor
int lastSensorValue = 0;

void send_msg(unsigned char cmd, unsigned int msg);
boolean read_msg(unsigned char *cmd, unsigned int *msg);

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(115200);

    Serial.println("+++");
    Serial.println("ATTM1");  //set Mesh Bee into unicast tx mode
    Serial.println("ATDA0000");  //set the unicast address to COO
    Serial.println("ATEX");  //exit the AT command mode

    // set the data rate for the SoftwareSerial port
    //mySerial.begin(9600);
    //mySerial.println("Hello, world?");
}

void loop() // run over and over
{
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    if (sensorValue != lastSensorValue || 1)
    {
        //Serial.println(sensorValue);
        send_msg(CMD_POS, (unsigned int)sensorValue);
        lastSensorValue = sensorValue;
        delay(50);
    }
}

void send_msg(unsigned char cmd, unsigned int msg)
{
    unsigned char buff[4];
    buff[0] = cmd;
    buff[1] = (unsigned char)(msg & 0xff);
    buff[2] = (unsigned char)((msg >> 8) & 0xff);
    buff[3] = buff[0]+buff[1]+buff[2];
    COMM_SER.write("SS");
    COMM_SER.write(buff, 4);
}

boolean read_msg(unsigned char *cmd, unsigned int *msg)
{
    unsigned char buff[4];

    if (COMM_SER.find("SS"))
    {
        while (COMM_SER.available() < 4);
        if (COMM_SER.available() >= 4)
        {
            COMM_SER.readBytes((char *)buff, 4);
            if (buff[0] + buff[1] + buff[2] == buff[3])
            {
                //available packet
                *cmd = buff[0];
                *msg = (unsigned int)((buff[1]) | (buff[2] << 8));
                return true;
            }
        }
    }
    return false;
}
```

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/Example3.gif)

### 5.6 Nota de Uso

ZigBee es un protocolo de transmisión en red de baja potencia y baja velocidad. Por lo tanto, no está diseñado para situaciones de alta velocidad.

La especificación de velocidad de datos de la red Mesh Bee con 2~3 nodos:

| Dirección de Transmisión | Método de Transmisión | Período de Paquete (ms) | Longitud Máxima de Paquete (bytes) |
|----------------------|-----------------|-------------------|------------------------|
| COO/ROU | Difusión | 250 | 50 |
| COO/ROU -> END | Unidifusión | 40 | 50 |
| END | Difusión | 150 | 50 |
| END -> COO/ROU | Unidifusión | 20 | 25 |
| END -> COO/ROU | Unidifusión | 40 | 50 |

La velocidad de datos será menor para una red más grande.

## 6. Desarrollo

La característica más importante que queremos introducir es que Mesh Bee soporta reprogramación. Qué emocionante tener un módulo ZigBee programable con un precio tan razonable.

Mesh Bee utiliza el chip llamado JN5168 con un núcleo RISC de 32 bits y recursos abundantes:

- Flash/RAM/EEPROM: 256kB/32kB/4kB

- Puerto SPI maestro con tres salidas de selección

- Puerto SPI esclavo

- 2x UART's

- 5x PWM (4x temporizador &amp; 1x contador)

- I2C

- ADC de 10 bits de 4 canales

- Comparador

- Sensor de batería y temperatura

Con nuestro UartSBee v5 puedes reprogramar fácilmente Mesh Bee. Solo hay un pequeño paso de aprender algunos documentos de NXP antes de jugar bien.

### 7.1 Arquitectura de software

Esta es la arquitectura de software de Mesh Bee.

Puedes desarrollar una aplicación independiente en AUPS. La aplicación de usuario consiste en dos funciones de estilo arduino en el nivel superior: setup & loop, que actúan igual que las de arduino.

También introdujimos Suli. Suli significa Seeed Unified Library Interface. Cambiaremos a Suli para nuestros futuros lanzamientos de controladores/bibliotecas de módulos. Eso significa que nuestra biblioteca/controlador compatible con suli se adaptará a todas las plataformas que suli soporte. Por favor echa un vistazo a [https://github.com/Seeed-Studio/Suli](https://github.com/Seeed-Studio/Suli) para más información.

![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeArchitecture0603.jpg)

### 7.2 Entorno de Desarrollo

NXP proporciona un entorno de desarrollo completo, herramientas y documentos. El entorno de desarrollo consiste en la cadena de herramientas SDK y el SDK de la pila ZigBee.

Por favor ve al sitio web de NXP para tener todos estos recursos con una página de descripción detallada: [http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

Nota: El firmware de fábrica de Mesh Bee está desarrollado sobre el perfil Smart Energy.

Para crear el entorno de desarrollo debes descargar:

- JN-SW-4041    Cadena de Herramientas SDK

- JN-SW-4064    SDK ZigBee Smart Energy

- JN-SW-4067-JN516x SDK ZigBee Home Automation

y luego instalarlos en una PC con Windows (instala JN-SW-4064 después de JN-SW-4041).

Para editar el archivo .oscfgdiag y el archivo .zpscfg, debes instalar los plugins de eclipse según la guía en la sección 6.2.2 en &lt;[SDK Installation and User Guide.pdf](https://files.seeedstudio.com/wiki/Mesh_Bee/res/SDK_Installation_and_User_Guide.pdf)&gt;.

Nota2: La desgracia es que solo se presenta la cadena de herramientas de Windows ahora. Para usuarios de linux y Mac, una VM de Windows puede ser tu opción.

### 7.3 Guía de Programación

Programar JN5168 necesita algunos conocimientos base, así que es difícil explicar en pocas palabras. Profundizar en los documentos oficiales tal vez sea imprescindible.

Recursos oficiales de NXP:

Guías de Usuario

- **JN-UG-3048 &lt;ZigBee PRO Stack User Guide&gt; Introduce conceptos esenciales de ZigBee PRO y detalla las APIs de ZigBee PRO para desarrollar aplicaciones.**

- JN-UG-3059 &lt;ZigBee PRO Smart Energy API User Guide&gt; Introduce ZigBee Smart Energy (SE) y detalla la API SE para desarrollar aplicaciones.

- **JN-UG-3075 &lt;JenOS User Guide&gt;       Detalla las APIs de JenOS utilizadas en el código de aplicación ZigBee PRO para gestionar recursos del SO.**

- JN-UG-3077 &lt;ZigBee Cluster Library User Guide&gt; Describe la implementación de NXP de la ZigBee Cluster Library (ZCL).

Notas de Aplicación

- JN-AN-1135 &lt;Smart Energy HAN Solutions Application Note&gt; Proporciona y describe soluciones de ejemplo de Smart Energy Home Area Network

Documentación Relacionada

- **JN-DS-JN516x &lt;JN516x Datasheet&gt; Detalla la serie JN516x de microcontroladores.**

- **JN-UG-3087 &lt;JN516x Integrated Peripherals API User Guide&gt; Detalla la API de Periféricos Integrados JN516x, utilizada en código de aplicación para interactuar con periféricos en chip JN516x.**

Página de descarga: [http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html](http://www.nxp.com/techzones/wireless-connectivity/smart-energy.html)

### 7.4 Contribución

[![](https://files.seeedstudio.com/wiki/Mesh_Bee/img/MeshBeeFirmwareProject.png)](https://seeed-studio.github.io/Mesh_Bee/)

## 8. Grupo de Discusión

Creamos un grupo de Google para la discusión general de Mesh Bee y temas relacionados con el desarrollo. Por favor sigue este enlace para ver qué está pasando allí: [https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group](https://groups.google.com/forum/#!forum/seeedstudio-mesh-bee-discussion-group)

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## 9. Recursos

- [Archivo Eagle para Mesh Bee v1.0](https://files.seeedstudio.com/wiki/Mesh_Bee/res/Mesh_Bee_v1.0_eagle.zip)

- [Manual de comandos AT para Mesh Bee V1.0](https://files.seeedstudio.com/wiki/Mesh_Bee/res/AT_command_manual_for_Mesh_Bee_V1.0.pdf)

- [Hoja de datos JN5168](https://files.seeedstudio.com/wiki/Mesh_Bee/res/JN516X.pdf)

- [Libro de Recetas para v1004](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_Cook_Book.pdf)

- [Manual de Usuario para v1004](https://files.seeedstudio.com/wiki/Mesh_Bee/res/MeshBee_User_Manual_v0.3.pdf)

### 9.1 Descargas de Firmware

**v1001 (firmware de fábrica, la versión más estable hasta ahora):**

Firmware del coordinador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/COO_JN5168.bin)

Firmware del enrutador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/ROU_JN5168.bin)

Firmware del dispositivo final: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.01/Build/END_JN5168.bin)

**v1004**

Firmware del coordinador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/COO_JN5168.bin)

Firmware del enrutador: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/ROU_JN5168.bin)

Firmware del dispositivo final: [https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin](https://github.com/Seeed-Studio/Mesh_Bee/raw/v1.0.4/build/output/END_JN5168.bin)

**Sincronízate con nuestro desarrollo y lanzamientos:**

[https://github.com/Seeed-Studio/Mesh_Bee/releases](https://github.com/Seeed-Studio/Mesh_Bee/releases)

**Más información sobre el firmware de Mesh Bee:**

- [Código fuente del firmware de Mesh Bee en Github](https://github.com/Seeed-Studio/Mesh_Bee)

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
