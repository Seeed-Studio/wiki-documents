---
description: CAN-BUS Shield V1.2
title: CAN-BUS Shield V1.2
keywords:
- Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/CAN-BUS_Shield_V1.2
last_update:
  date: 2/16/2023
  author: jianjing Huang
---

<!-- ---
name: CAN-BUS Shield V1.2
category: Shield
bzurl: https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html
oldwikiname: CAN-BUS_Shield_V1.2
prodimagename: Can_bus_shield_all.jpg
surveyurl: https://www.research.net/r/can_bus_shield
sku: 113030021
--- -->

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Can_bus_shield_all.jpg)

**CAN-BUS** es un bus industrial común debido a su larga distancia de transmisión, velocidad de comunicación media y alta confiabilidad. Se encuentra comúnmente en herramientas de máquinas modernas, como un bus de diagnóstico automotriz.

Este CAN-BUS Shield adopta el controlador CAN Bus **MCP2515** con interfaz SPI y el transceptor CAN **MCP2551** para dar a tu Arduino/Seeeduino capacidad CAN-BUS. Con un cable convertidor **OBD-II** agregado y la biblioteca OBD-II importada, estás listo para construir un dispositivo de diagnóstico a bordo o un registrador de datos.

**Versión**

Este documento se aplica a las siguientes versiones de productos:

|Versión|Fecha de Lanzamiento|Cómo Comprar|
|--------|-----------|-----------|
|CAN BUS Shield V1.0 |Oct 14, 2012|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|CAN BUS Shield V1.1 |Aug 10, 2013|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
|CAN BUS Shield V1.2|Jan 5, 2015|![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png)|
| CAN BUS Shield V2.0 | Aug 01,2017    |<a href="https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png" width={200} height={38} border={0} /></a>|

**Qué hay de nuevo en CAN BUS Shield V1.2**

- Pads en la parte posterior del PCBA
- Cambio de resistor terminal a 120 Ohm

**Opción Alternativa**

Si tu proyecto tiene limitaciones de espacio y tampoco necesitas otras funciones excepto CAN-BUS, aquí tienes un módulo Grove CAN-BUS que es compatible con Arduino, más compacto y rentable, por favor haz clic [aquí](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html) para visitar su página.

[![](https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png)](https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html)

**Qué pasa si quiero conectar este shield a mi coche**

Si quieres leer datos o controlar tu coche, hay un cable OBD>DB9 disponible para ti, [este cable](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html) hace más fácil conectar al conector OBD y al conector DB9. Este cable también funcionará con cualquier cosa que tenga un conector OBD. Añadir un interruptor de alimentación hace un clic tan satisfactorio.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg)](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

**Analizador USB-CAN**

Si quieres un Analizador de Bus CAN para depurar tu Bus CAN, se recomienda este [Analizador USB-CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html).

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg)](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)

## Características

-----

- Implementa CAN V2.0B con velocidad de hasta **1 Mb/s**
- Velocidad de interfaz SPI de hasta **10 MHz**
- Tramas de datos y remotas estándar (**11 bit**) y extendidas (**29 bit**)
- Dos buffers de recepción con almacenamiento de mensajes priorizados
- Conector DB-9 estándar industrial
- Indicadores LED

:::note
CAN BUS Shield funciona bien con Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) así como Arduino Leonardo (ATmega32U4).
:::

## Descripción General del Hardware

-----

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png)

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

:::caution
Cuando uses más de dos CAN Bus Shield en una red, debes tomar en consideración la impedancia.
Debes cortar P1 en el PCB con un cuchillo, o simplemente remover R3 en el PCB.
:::

**Mapa de pines**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png)

:::note
    El pin FREE está disponible para otros usos.
:::

**Interfaz DB9&OBDii**

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png)

**Pin CS**

El pin SPI_CS de V1.2 está conectado a **D9** por defecto. Si quieres cambiar a **D10**, por favor sigue las siguientes instrucciones.

- Paso1: Echa un vistazo a la parte posterior del PCBA, encontrarás un pad llamado CS.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_pins_setting.png)

- Paso2: Corta el cable entre el pad9 y el pad del medio.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/cut%20this%20wire%20with%20box%20cutter.png)

- Paso3: Solda el pad del medio y el pad 10.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/sodder%20the%20middle%20pad%20and%20pad%2010.png)

:::caution
Ten cuidado con el cúter, es fácil lastimarte a ti mismo o al PCBA.
:::

**Pines SPI**

Los pines SPI (SCK, MISO, MOSI) están enrutados a los pines ICSP por defecto. Pero para algunas placas, los pines SPI están ubicados en D11~D13. Si esto sucede, necesitas hacer algún cambio al PCBA. Echa un vistazo a la parte posterior del PCBA, hay tres pads, MOSI, MISO y SCK, están conectados a A por defecto. Puedes cambiarlos a B si es necesario.

:::note
Para Arduino UNO, Arduino Mega, Arduino Leonardo y cualquier otra placa Arduino basada en AVR, funciona bien con la configuración por defecto.
:::

:::caution
Ten cuidado cuando vayas a cambiar los pines SPI, es fácil lastimarte a ti mismo o al PCBA.
:::

## Primeros Pasos

-----
Aquí tienes un ejemplo simple para mostrarte cómo funciona el CAN-BUS Shield. En este ejemplo necesitamos 2 piezas de CAN-BUS Shields así como Arduino o Seeeduino.

:::note
Este ejemplo está construido bajo [Arduino IDE versión 1.6.9](https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip).
:::

**PASO 1: Qué necesitamos**

|Nombre|Función|Cant|Enlace|
|----|--------|---|----|
|CAN-BUS Shield|Comunicación CAN Bus | 2 | [enlace](https://www.seeedstudio.com/depot/CANBUS-Shield-V12-p-2256.html) |
|Seeeduino V4.2|Controlador|2|[enlace](https://www.seeedstudio.com/item_detail.html?p_id=2517)|
|Cable Puente|conexión|2|[enlace](https://www.seeedstudio.com/item_detail.html?p_id=234)|

**PASO 2: Conexión de Hardware**

Inserta cada CAN-BUS Shield en Seeeduino V4.2, y conecta los 2 CAN-BUS Shield entre sí mediante 2 cables puente. Se muestra en las imágenes a continuación.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png)

:::note
    CAN_H a CAN_H, CAN_L a CAN_L
:::

**PASO 3: Software**

Por favor sigue los procedimientos de [cómo instalar una librería de arduino](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/) para instalar la librería del CAN BUS shield.

Haz clic en el botón de abajo para descargar la librería.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/download_library.png)](https://github.com/Seeed-Studio/CAN_BUS_Shield)

Instala la librería en tu Arduino IDE cuando esté descargada.

Uno de los nodos (un nodo significa Seeeduino + CAN_BUS Shield) actúa como maestro, el otro actúa como esclavo. El maestro enviará datos al esclavo constantemente.

:::note
Cada nodo puede actuar como maestro antes de que el código sea cargado.
:::

Abre el ejemplo **send** (**File > Examples > CAN_BUS_Shield-master > send**) y cárgalo al **maestro**.
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/send%20example.png)
Abre el ejemplo **receive_check** (**File > Examples > CAN_BUS_Shield-master > receive_check**) y cárgalo al **esclavo**.
![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/receive%20check%20example.png)

**PASO 4: Ver Resultado**

Abre el Monitor Serie del Arduino IDE(**esclavo**), obtendrás los datos enviados desde el maestro.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png)

## APIs

-----

### 1. Establecer la velocidad de baudios

Esta función se utiliza para inicializar la velocidad de baudios del sistema CAN Bus.

Las velocidades de baudios disponibles se listan a continuación:

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

### 2. Establecer Máscara y Filtro de Recepción

Hay **2** registros de máscara de recepción y **5** registros de filtro en el chip controlador que garantizan que obtengas datos del dispositivo objetivo. Son útiles especialmente en una red grande que consiste en numerosos nodos.

Proporcionamos dos funciones para que utilices estos registros de máscara y filtro. Son:

**Máscara:**

 init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);

**Filtro:**

 init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);

- **num** representa qué registro usar. Puedes llenar 0 o 1 para máscara y 0 a 5 para filtro.
- **ext** representa el estado del marco. 0 significa que es una máscara o filtro para un marco estándar. 1 significa que es para un marco extendido.
- **ulData** representa el contenido de la máscara o filtro.

### 3. Verificar Recepción
El MCP2515 puede operar en modo de sondeo, donde el software verifica un marco recibido, o usando pines adicionales para señalar que un marco ha sido recibido o la transmisión completada.

Usa la siguiente función para sondear marcos recibidos.

    INT8U MCP_CAN::checkReceive(void);

La función retornará 1 si llega un marco, y 0 si no llega nada.

### 4. Obtener ID CAN
Cuando llegan algunos datos, puedes usar la siguiente función para obtener el ID CAN del nodo "send".

    INT32U MCP_CAN::getCanId(void)

### 5. Enviar Datos

    CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);

Es una función para enviar datos al bus. En la cual:

- **id** representa de dónde vienen los datos.
- **ext** representa el estado del marco. '0' significa marco estándar. '1' significa marco extendido.
- **len** representa la longitud de este marco.
- **data_buf** es el contenido de este mensaje.

Por ejemplo, en el ejemplo 'send', tenemos:

    unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
    CAN.sendMsgBuf(0x00, 0, 8, stmp); //envía el mensaje 'stmp' al bus y dice a otros dispositivos que este es un marco estándar desde 0x00.

### 6. Recibir Datos

La siguiente función se utiliza para recibir datos en el nodo 'receive':

    CAN.readMsgBuf(unsigned char len, unsigned char buf);
En condiciones donde las máscaras y filtros han sido establecidos. Esta función solo puede obtener marcos que cumplan los requisitos de máscaras y filtros.

- **len** representa la longitud de los datos.
- **buf** es donde almacenas los datos.

## Generar una Nueva Velocidad de Baudios

Hemos proporcionado muchas velocidades de baudios de uso frecuente, como se muestra a continuación:

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

Sin embargo, es posible que aún no puedas encontrar la velocidad que deseas. Aquí proporcionamos un software para ayudarte a calcular la velocidad de baudios que necesitas.

Haz clic [aquí](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip) para descargar el software, está en chino, pero no te preocupes, es fácil de usar.

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg)

:::note
Este software solo es compatible con el sistema Windows. Si no puedes abrirlo, no dudes en contactar a loovee@seeed.cc para obtener soporte.
:::

Abre el software, lo que necesitas hacer es establecer la velocidad de baudios que deseas, y luego hacer algunas configuraciones simples, después haz clic en **calcular**.

Entonces obtendrás algunos datos, cfg1, cfg2 y cfg3.

Necesitas agregar algo de código a la biblioteca.

Abre **mcp_can_dfs.h**, necesitas agregar el código siguiente alrededor de la línea 272:

 #define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx es la velocidad de baudios que necesitas
 #define MCP_16MHz_xxxkBPS_CFG2 (cfg2)
 #define MCP_16MHz_xxxkBPS_CFG3 (cfg2)

Luego vamos a la línea 390 aproximadamente, agrega el código siguiente:

 #define CAN_xxxKBPS NUM       // xxx es la velocidad de baudios que necesitas, y NUM es un número, necesitas obtener uno diferente de las otras velocidades.

Abre **mcp_can.cpp**, ve a la función **mcp2515_configRate**(alrededor de la línea 190), luego agrega el código siguiente:

 case (CAN_xxxKBPS):
     cfg1 = MCP_16MHz_xxxkBPS_CFG1;
     cfg2 = MCP_16MHz_xxxkBPS_CFG2;
     cfg3 = MCP_16MHz_xxxkBPS_CFG3;
     break;

Entonces puedes usar la velocidad de baudios que necesitas. Y por favor hazme un pull request en github cuando uses una nueva velocidad, así puedo agregarla a la biblioteca para ayudar a otros usuarios.

## Proyectos

-----

Si quieres hacer algunos proyectos increíbles con el shield CAN-BUS, aquí hay algunos proyectos de referencia.

### Juegos CAN BUS de Volkswagen

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG)

¿Alguna vez quisiste jugar un simulador de coche/camión con un tablero real en tu PC? ¡Yo también! Estoy tratando de controlar un tablero de VW Polo 6R vía CAN Bus con un Arduino Uno y un Seeed CAN Bus Shield. Inspirado por Silas Parker. ¡Gracias Sepp e Is0-Mick por su gran apoyo!

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=291)

### Hackea el CAN-BUS de tu vehículo

![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg)

Los vehículos modernos vienen equipados con un CAN-BUS Controller Area Network, en lugar de tener un millón de cables corriendo de ida y vuelta desde varios dispositivos en tu coche hasta la batería, está haciendo uso de un sistema más inteligente.

Todas las funciones electrónicas están conectadas al TIPM, (Módulo de Potencia Totalmente Integrado), como solenoides/relés para bloquear las puertas o mini motores para subir las ventanas, etc.

Desde cada nodo (es decir, el panel de interruptores que controla tus ventanas o cerraduras eléctricas de puertas) transmite un mensaje a través del CAN. Cuando el TIPM detecta un mensaje válido reaccionará en consecuencia como, bloquear las puertas, encender las luces y así sucesivamente.

[![](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png)](https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/)

## FAQ

------
**P1: No puedo obtener datos de otro dispositivo CAN.**

- Verifica si la conexión es correcta
- Verifica si la configuración de la velocidad de baudios es correcta

**P2: El monitor serie imprime Init Fail.**

- Verifica si la configuración del pin CS coincide con el código. Para CAN Bus Shield V1.1/1.2, el pin CS está conectado a D9, otros están conectados a D10.

**P3. ¿Dónde puedo encontrar soporte técnico si tengo otros problemas?**

- Puedes publicar una pregunta en [Seeed Forum](https://forum.seeedstudio.com/).

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

-----

- **【PDF】**[Esquemáticos CAN-BUS Shield V1.2](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2.pdf)
- **【Eagle】**[Esquemático de CAN-BUS Shield V1.2](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip)
- **【Librería】**[Librería Arduino para CAN-BUS Shield](https://github.com/Seeed-Studio/CAN_BUS_Shield)
- **【Hoja de datos】**[Hoja de datos MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf)
- **【Hoja de datos】**[Hoja de datos MCP2551](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf)
- **【Demo】**[Una Demo OBD](https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE)
- **【Herramienta】**[Herramienta de Velocidad de Baudios MCP2515](https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip)
- **【Herramienta】**[Analizador USB-CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html)
- **【Cable】**[Cable DB9 a OBD2](https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html)

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

