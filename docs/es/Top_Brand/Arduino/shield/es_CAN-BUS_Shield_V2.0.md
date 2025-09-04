---
description: CAN-BUS_Shield_V2.0
title: CAN-BUS Shield V2.0
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/CAN-BUS_Shield_V2.0
last_update:
  date: 01/10/2023  
  author: Eico 

no_comments: false # for Disqus

---

<div align="center"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/shiyitu1.png" /></div>

**CAN-BUS** es un bus industrial común debido a su larga distancia de transmisión, velocidad de comunicación media y alta confiabilidad. Se encuentra comúnmente en herramientas de máquinas modernas, como un bus de diagnóstico automotriz.

Este CAN-BUS Shield adopta el controlador de bus CAN **MCP2515** con interfaz SPI y el transceptor CAN **MCP2551** para dar a tu Arduino/Seeeduino capacidad CAN-BUS. Con un cable convertidor **OBD-II** añadido y la biblioteca OBD-II importada, estás listo para construir un dispositivo de diagnóstico a bordo o un registrador de datos.

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/vehicle-hacking-tools" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_Car_Hacking.png" /></a></p>
</div>

**Versión**

Este documento se aplica a las siguientes versiones de productos:

<table align="center">
  <tbody>
  <tr>
    <td><h3>Versión</h3></td>
    <td><h3>Fecha de Lanzamiento</h3></td>
    <td><h3>Cómo Comprar</h3></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.0</h4></td>
    <td><h4>Oct 14, 2012</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V1.1</h4></td>
    <td><h4>Aug 10, 2013</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>  
  <tr>
    <td><h4>CAN BUS Shield V1.2</h4></td>
    <td><h4>Jan 5, 2015</h4></td>
    <td><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png" alt="pir" width={200} height="auto" /></p></td>
  </tr>
  <tr>
    <td><h4>CAN BUS Shield V2.0</h4></td>
    <td><h4>Aug 01,2017</h4></td>
    <td><div class="document"><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank" rel="noopener"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" alt="" width={200} height="auto"/></a>
</div></td>
  </tr>
  </tbody></table>

**Opción Alternativa**

Si tu proyecto tiene limitaciones de espacio y tampoco necesitas otras funciones excepto CAN-BUS, aquí tienes un módulo Grove CAN-BUS que es compatible con Arduino, más compacto y rentable, por favor haz clic [aquí](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html) para visitar su página.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png" /></a></p>

**¿Qué pasa si quiero conectar este shield a mi coche?**

Si quieres leer datos o controlar tu coche, hay un cable OBD>DB9 disponible para ti, [este cable](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html) hace más fácil conectar al conector OBD y al conector DB9. Este cable también funcionará con cualquier cosa que tenga un conector OBD. Añadir un interruptor de alimentación hace un clic tan satisfactorio.

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg" /></a></p>

**Analizador USB-CAN**

Si quieres un Analizador de Bus CAN para depurar tu Bus CAN, se recomienda este [Analizador USB-CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html).

 <p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg" /></a></p>

## Características

- Implementa CAN V2.0B con velocidad de hasta **1 Mb/s**
- Velocidad de interfaz SPI de hasta **10 MHz**
- Tramas de datos y remotas estándar (**11 bit**) y extendidas (**29 bit**)
- Dos buffers de recepción con almacenamiento de mensajes priorizados
- Conector DB-9 estándar industrial
- Indicadores LED

:::note
El CAN BUS Shield funciona bien con Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) así como Arduino Leonardo (ATmega32U4).
:::

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png" alt="pir" width={600} height="auto" /></p>

1. **Interfaz DB9** - para conectar a la Interfaz OBDII a través de un Cable DBG-OBD.
2. **V_OBD** - Obtiene alimentación de la Interfaz OBDII (desde DB9)
3. **Indicador Led**:
    - **PWR**: alimentación
    - **TX**: parpadea cuando se están enviando datos
    - **RX**: parpadea cuando hay datos recibiendo
    - **INT**: interrupción de datos
4. **Terminal** - CAN_H y CAN_L
5. **Pines de Arduino UNO**
6. **Conector Grove serial**
7. **Conector Grove I2C**
8. **Pines ICSP**
9. **IC** - MCP2551, un transceptor CAN de alta velocidad ([hoja de datos](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf))
10. **IC** - MCP2515, controlador CAN independiente con interfaz SPI ([hoja de datos](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf))

:::warning
Cuando uses más de dos CAN Bus Shield en una red, debes tomar en consideración la impedancia.
Debes cortar P1 en el PCB con un cuchillo, o simplemente quitar R3 del PCB.
:::

**Mapa de pines**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png" alt="pir" width={600} height="auto" /></p>

:::note
El pin FREE está disponible para otros usos.
:::

**Interfaz DB9 y OBDii**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png" alt="pir" width={600} height="auto" /></p>

**Pin CS**

:::caution
Cuando produjimos el nuevo lote de CAN-BUS Shield V2, el cable de las almohadillas traseras fue incrustado dentro del PCB, aunque el cable entre las almohadillas ahora no es visible en el exterior, el interior sigue conectado, si quieres cambiar el cableado de las almohadillas, aún necesitas cortar el cableado en el PCB primero.
:::

El pin SPI_CS de V1.2 está conectado a **D9** por defecto. Si quieres cambiar a **D10**, por favor sigue las siguientes instrucciones.

- Paso1: Echa un vistazo a la parte trasera del PCBA, encontrarás una almohadilla llamada CS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu1.png" alt="pir" width={600} height="auto" /></p>

- Paso2: Corta el cable entre la almohadilla 9 y la almohadilla del medio.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu2.png" alt="pir" width={600} height="auto" /></p>

- Paso3: Solda la almohadilla del medio y la almohadilla 10.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu3.png" alt="pir" width={600} height="auto" /></p>

:::warning
Ten cuidado con el cortador, es fácil lastimarte a ti mismo o al PCBA.
:::

**Pines SPI**

Los pines SPI (SCK, MISO, MOSI) están enrutados a los pines ICSP por defecto. Pero para algunas placas, los pines SPI están ubicados en D11~D13. si esto sucede, necesitas hacer algún cambio al PCBA. Echa un vistazo a la parte trasera del PCBA, hay tres almohadillas, MOSI, MISO y SCK, están conectadas a A por defecto. Puedes cambiarlas a B si es necesario.

:::note
Para Arduino UNO, Arduino Mega, Arduino Leonardo y cualquier otra placa Arduino basada en AVR, funciona bien con la configuración por defecto.
:::

:::warning
Ten cuidado cuando vayas a cambiar los pines SPI, es fácil lastimarte a ti mismo o al PCBA.
:::

## Comenzando

Aquí tienes un ejemplo simple para mostrarte cómo funciona el CAN-BUS Shield. En este ejemplo necesitamos 2 piezas de CAN-BUS Shields así como Arduino o Seeeduino.

:::note
Este ejemplo está construido bajo [Arduino IDE versión 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip).
:::

**PASO 1: Qué necesitamos**

<table align="center">
  <tbody>
  <tr>
    <td><h3>Nombre</h3></td>
    <td><h3>Función</h3></td>
    <td><h3>Cant</h3></td>
    <td><h3>Enlace</h3></td>
  </tr>
  <tr>
    <td><h4>CAN-BUS Shield</h4></td>
    <td><h4>Comunicación CAN Bus</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><span>Enlace</span></a></td>
  </tr>
  <tr>
    <td><h4>Seeeduino V4.2</h4></td>
    <td><h4>Controlador</h4></td>
    <td><h4>2</h4></td>
    <td><a href="https://www.seeedstudio.com/item_detail.html?p_id=2517" target="_blank"><span>Enlace</span></a></td>
  </tr>  
  </tbody></table>

**PASO 2: Conexión de Hardware**

Inserta cada CAN-BUS Shield en Seeeduino V4.2, y conecta los 2 CAN-BUS Shield entre sí mediante 2 cables puente. Se muestra en las imágenes a continuación.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png" alt="pir" width={600} height="auto" /></p>

:::note
CAN_H a CAN_H, CAN_L a CAN_L
:::

**PASO 3: Software**

Por favor sigue los procedimientos de [cómo instalar una librería de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar la librería del CAN BUS shield.

- Descarga la librería de Arduino [**Seeed_Arduino_CAN**](https://github.com/Seeed-Studio/Seeed_Arduino_CAN) aquí.

Instala la librería en tu Arduino IDE cuando esté descargada.

Uno de los nodos (un nodo significa Seeeduino + CAN_BUS Shield) actúa como maestro, el otro actúa como esclavo. El maestro enviará datos al esclavo constantemente.

:::note
Cada nodo puede actuar como maestro antes de que el código sea cargado.
:::

Abre el ejemplo **send** (**File > Examples > Seeed_Arduino_CAN > send**) y cárgalo al **maestro**.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/example.png" alt="pir" width={600} height="auto" /></p>

O copia lo siguiente al Arduino IDE y cárgalo:

```cpp
#include <SPI.h>
#include "mcp2515_can.h"

/*SAMD core*/
#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE
    #define SERIAL SerialUSB
#else
    #define SERIAL Serial
#endif

const int SPI_CS_PIN = 9;
mcp2515_can CAN(SPI_CS_PIN); // Set CS pin

void setup() {
    SERIAL.begin(115200);
    while(!Serial){};

    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // init can bus : baudrate = 500k
        SERIAL.println("CAN BUS Shield init fail");
        SERIAL.println(" Init CAN BUS Shield again");
        delay(100);
    }
    SERIAL.println("CAN BUS Shield init ok!");
}

unsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};
void loop() {
    // send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf
    stmp[7] = stmp[7] + 1;
    if (stmp[7] == 100) {
        stmp[7] = 0;
        stmp[6] = stmp[6] + 1;

        if (stmp[6] == 100) {
            stmp[6] = 0;
            stmp[5] = stmp[6] + 1;
        }
    }

    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
    SERIAL.println("CAN BUS sendMsgBuf ok!");
}
```

**PASO 4: Ver Resultado**

Abre el Monitor Serie del IDE de Arduino (**esclavo**), obtendrás los datos enviados desde el maestro.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png" alt="pir" width={600} height="auto" /></p>

## APIs

### 1.Establecer la velocidad de baudios

Esta función se utiliza para inicializar la velocidad de baudios del sistema CAN Bus.

Las velocidades de baudios disponibles se listan a continuación:

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31K25BPS 5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83K3BPS  10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666kbps  17
#define CAN_1000KBPS 18
```

### 2.Configurar Máscara de Recepción y Filtro

Hay **2** registros de máscara de recepción y **5** registros de filtro en el chip controlador que garantizan que obtengas datos del dispositivo objetivo. Son especialmente útiles en una red grande que consiste en numerosos nodos.

Proporcionamos dos funciones para que utilices estos registros de máscara y filtro. Son:

**Máscara:**

```cpp
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filtro:**

```cpp
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** representa qué registro usar. Puedes llenar 0 o 1 para máscara y 0 a 5 para filtro.
- **ext** representa el estado de la trama. 0 significa que es una máscara o filtro para una trama estándar. 1 significa que es para una trama extendida.
- **ulData** representa el contenido de la máscara o filtro.

### 3.Verificar Recepción

El MCP2515 puede operar en modo de sondeo, donde el software verifica si hay una trama recibida, o usando pines adicionales para señalar que se ha recibido una trama o se ha completado la transmisión.

Usa la siguiente función para sondear tramas recibidas.

```cpp
INT8U MCP_CAN::checkReceive(void);
```

La función devolverá 1 si llega una trama, y 0 si no llega nada.

### 4.Obtener ID CAN

Cuando llegan algunos datos, puedes usar la siguiente función para obtener el ID CAN del nodo "emisor".

```cpp
INT32U MCP_CAN::getCanId(void)
```

### 5.Enviar Datos

```cpp
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

Es una función para enviar datos al bus. En la cual:

- **id** representa de dónde provienen los datos.
- **ext** representa el estado del marco. '0' significa marco estándar. '1' significa marco extendido.
- **len** representa la longitud de este marco.
- **data_buf** es el contenido de este mensaje.

Por ejemplo, en el ejemplo 'send', tenemos:

```cpp
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6.Recibir Datos

La siguiente función se utiliza para recibir datos en el nodo 'receptor':

```cpp
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

En condiciones donde se han establecido máscaras y filtros. Esta función solo puede obtener tramas que cumplan con los requisitos de las máscaras y filtros.

- **len** representa la longitud de los datos.
- **buf** es donde almacenas los datos.

### 7.init_CS

es muy útil para ti usar dos shields CAN-BUS con un Arduino. proporcionamos el pin CS_CAN para que selecciones. si no puedes saber cómo usar el pin CS_CAN, puedes ir a [pin CS_CAN](https://wiki.seeedstudio.com/es/CAN-BUS_Shield_V2.0/#cs_can-pin) para aprender.

```cpp
void MCP_CAN::init_CS(byte _CS)
```

- **_CS** representa el pin que selecciones.(9 o 10)

## Generar una Nueva Velocidad de Baudios

Hemos proporcionado muchas velocidades de baudios de uso frecuente, como se muestra a continuación:

```cpp
#define CAN_5KBPS    1
#define CAN_10KBPS   2
#define CAN_20KBPS   3
#define CAN_25KBPS   4
#define CAN_31KBPS   5
#define CAN_33KBPS   6
#define CAN_40KBPS   7
#define CAN_50KBPS   8
#define CAN_80KBPS   9
#define CAN_83KBPS   10
#define CAN_95KBPS   11
#define CAN_100KBPS  12
#define CAN_125KBPS  13
#define CAN_200KBPS  14
#define CAN_250KBPS  15
#define CAN_500KBPS  16
#define CAN_666KBPS  17
#define CAN_1000KBPS 18
```

Sin embargo, es posible que aún no puedas encontrar la velocidad que deseas. Aquí proporcionamos un software para ayudarte a calcular la velocidad de baudios que necesitas.

Haz clic [aquí](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip) para descargar el software, está en chino, pero no te preocupes, es fácil de usar.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg" alt="pir" width={200} height="auto" /></p>

Abre el software, lo que necesitas hacer es establecer la velocidad de baudios que deseas, y luego hacer algunas configuraciones simples, después haz clic en **calcular**.

Entonces obtendrás algunos datos, cfg1, cfg2 y cfg3.

Necesitas añadir algo de código a la biblioteca.

Abre **mcp_can_dfs.h**, necesitas añadir el código de abajo aproximadamente en la línea 272:

```cpp
#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx is the baud rate you need
#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
#define MCP_16MHz_xxxkBPS_CFG3 (cfg2)
```

Luego vamos a la línea 390 aproximadamente, añade el siguiente código:

```cpp
#define CAN_xxxKBPS NUM       // xxx is the baudrate you need, and NUM is a number, you need to get a different from the other rates.
```

Abre **mcp_can.cpp**, ve a la función **mcp2515_configRate** (alrededor de la línea 190), luego añade el siguiente código:

```cpp
case (CAN_xxxKBPS):
    cfg1 = MCP_16MHz_xxxkBPS_CFG1;
    cfg2 = MCP_16MHz_xxxkBPS_CFG2;
    cfg3 = MCP_16MHz_xxxkBPS_CFG3;
    break;
```

Entonces puedes usar la velocidad de baudios que necesites. Y por favor hazme un pull request en github cuando uses una nueva velocidad, para que pueda añadirla a la librería y ayudar a otros usuarios.

## Proyectos

Si quieres hacer algunos proyectos increíbles con el shield CAN-BUS, aquí tienes algunos proyectos de referencia.

### Juegos CAN BUS de Volkswagen

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG" alt="pir" width={600} height="auto" /></p>
¿Alguna vez quisiste jugar un simulador de coche/camión con un tablero real en tu PC? ¡Yo también! Estoy intentando controlar un tablero de VW Polo 6R vía CAN Bus con un Arduino Uno y un Seeed CAN Bus Shield. Inspirado por Silas Parker. ¡Gracias Sepp e Is0-Mick por su gran apoyo!

<p style={{textAlign: 'center'}}><a href="https://community.seeedstudio.com/project_detail.html?id=291" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

### Hackea el CAN-BUS de tu vehículo

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg" alt="pir" width={600} height="auto" /></p>
Los vehículos modernos vienen equipados con un CAN-BUS Controller Area Network. En lugar de tener un millón de cables yendo de un lado a otro desde varios dispositivos en tu coche hasta la batería, está haciendo uso de un sistema más inteligente.

Todas las funciones electrónicas están conectadas al TIPM (Módulo de Potencia Totalmente Integrado), como solenoides/relés para bloquear las puertas o mini motores para subir las ventanas, etc.

Desde cada nodo (es decir, el panel de interruptores que controla tus ventanas o cerraduras eléctricas de puertas) transmite un mensaje a través del CAN. Cuando el TIPM detecta un mensaje válido reaccionará en consecuencia como bloquear las puertas, encender luces y así sucesivamente.

<p style={{textAlign: 'center'}}><a href="https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/" target="_blank"><img src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png" /></a></p>

## FAQ

------
**P1: No puedo obtener datos de otro dispositivo CAN.**

- Verifica si la conexión es correcta
- Verifica si la configuración de velocidad de baudios es correcta

**P2: El monitor serie imprime Init Fail.**

- Verifica si la configuración del pin CS coincide con el código. Para CAN Bus Shield V1.1/1.2, el pin CS está conectado a D9, otros están a D10.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-----

- **[PDF]**[Esquemas CAN-BUS Shield V2.0](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.pdf)
- **[Eagle]**[Esquema y PCB del CAN-BUS Shield V2.0](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar)
- **[Library]**[Librería Arduino para CAN-BUS Shield](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **[Datasheet]**[Hoja de datos MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **[Datasheet]**[Hoja de datos MCP2551](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **[Demo]**[Una Demo OBD](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **[Tool]**[Herramienta de Velocidad de Baudios MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **[Tool]**[Analizador USB-CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **[Cable]**[Cable DB9 a OBD2](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)
- **[Drawing]**[Dibujo CAN BUS Shield v2.0 en PDF](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.pdf)
- **[Drawing]**[Dibujo CAN BUS Shield v2.0 en DXF](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.dxf.zip)

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
