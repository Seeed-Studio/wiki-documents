---
description: Comenzando con el Expansion Board CAN Bus para XIAO  
title: XIAO CAN Bus Expansion Board
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao-can-bus-expansion
last_update:
  date: 02/16/2025
  author: Guillermo
---

# XIAO CAN Bus Expansion Board

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
    </a>
</div>

<br />

La XIAO CAN Bus Expansion Board está diseñada específicamente para trabajar con la placa de desarrollo Seeed Studio XIAO, proporcionando una manera fácil y conveniente de agregar comunicación CAN bus a tus proyectos. CAN bus (Controller Area Network) es un protocolo de comunicación ampliamente utilizado en la industria automotriz, sistemas industriales y otros sistemas embebidos, permitiendo un intercambio de datos confiable y robusto entre diferentes nodos.  

La integración del controlador MCP2515 y el transceptor SN65HVD230 en la tarjeta de expansión garantiza una comunicación eficiente y sin interrupciones a través del bus CAN. El controlador MCP2515 maneja la gestión del protocolo, el filtrado de mensajes y la gestión de errores, mientras que el transceptor SN65HVD230 convierte las señales digitales del controlador en señales diferenciales necesarias para la comunicación CAN bus.  

Con la XIAO CAN Bus Expansion Board, puedes aprovechar el poder de la placa de desarrollo Seeed Studio XIAO y su extenso ecosistema para crear proyectos que requieran comunicación CAN bus. Ya sea que trabajes en aplicaciones automotrices, sistemas de control industrial, proyectos de robótica o dispositivos IoT, esta tarjeta de expansión ofrece una solución confiable y compacta para integrar capacidades de comunicación CAN bus en tus diseños.  

La tarjeta cuenta con un terminal de conexión fácil de usar, lo que permite conectar fácilmente las líneas CANH y CANL a la red CAN bus. Su diseño compacto garantiza compatibilidad con diversas carcasas y facilita su integración en tus proyectos existentes.  

Al utilizar la XIAO CAN Bus Expansion Board, puedes aprovechar la robustez, confiabilidad y escalabilidad del protocolo CAN bus, permitiendo un intercambio eficiente de datos, control de sistemas e interconectividad en tus proyectos.  

## Introducción  

### Características  

- **Compatibilidad:** Diseñada para funcionar perfectamente con la placa de desarrollo Seeed Studio XIAO.  
- **Controlador MCP2515:** El chip MCP2515 integrado proporciona un control confiable y eficiente de la comunicación CAN bus.  
- **Transceptor SN65HVD230:** Garantiza una conversión precisa de señales y una comunicación robusta a través del bus CAN.  
- **Conexión mediante terminal:** Las líneas CANH y CANL están accesibles a través de un terminal de 3 pines, facilitando la conexión al bus CAN.  
- **Diseño compacto:** Su factor de forma compacto la hace adecuada para una amplia variedad de aplicaciones.  

### Especificaciones  

- **Compatibilidad:** Placa de desarrollo Seeed Studio XIAO.  
- **Interfaz de comunicación:** CAN bus (Controller Area Network).  
- **Transceptor CAN:** SN65HVD230.  
- **Controlador CAN:** MCP2515.  
- **Conexión mediante terminal:** Terminal de 2 pines para las líneas CANH y CANL.  

### Aplicaciones  

La XIAO CAN Bus Expansion Board se puede utilizar en diversos proyectos que requieran comunicación CAN bus. Aquí tienes algunas ideas de aplicación:  

- **Proyectos automotrices:** Conecta la tarjeta de expansión a la XIAO y desarrolla aplicaciones automotrices que requieran comunicación CAN bus, como diagnóstico de vehículos o registro de datos.  
- **Sistemas de control industrial:** Utiliza las capacidades CAN bus para interactuar con dispositivos y sistemas industriales, permitiendo un intercambio eficiente de datos y control.  
- **Robótica:** Incorpora la tarjeta de expansión en tus proyectos de robótica para habilitar la comunicación entre diferentes módulos y componentes robóticos.  
- **Aplicaciones IoT:** Integra la tarjeta de expansión con dispositivos IoT para facilitar la comunicación e intercambio de datos a través del protocolo CAN bus.  

Consulta la hoja de datos y los ejemplos de la XIAO CAN Bus Expansion Board para obtener instrucciones detalladas sobre su uso y muestras de código.  

## Descripción del Hardware  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND
2. CAN-H
3. CAN-L
4. Indicadores LED de RX/TX
5. SN65NVD230
6. MCP2515

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

La XIAO CAN Bus Expansion Board tiene un pad marcado como **P1** en la parte posterior de la tarjeta, el cual permite agregar una resistencia de terminación al dispositivo al ser puenteado. Dado que algunos dispositivos de comunicación pueden ya contar con una resistencia de terminación, la XIAO CAN-BUS **no tiene P1 corto por defecto**. Si experimentas problemas en la comunicación CAN, como la imposibilidad de enviar o recibir mensajes, puedes intentar **cortar el pad P1** para activar una resistencia de terminación de **120 ohmios**.  

## Biblioteca de Arduino  

Proporcionamos una [biblioteca de Arduino para la placa MCP2515](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) que facilita la integración y uso del bus CAN en tus proyectos.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

La biblioteca incluye varios ejemplos, entre ellos:  

- **OBDII-PIDs** - Recupera datos de la interfaz OBD-II.  
- **send** - Envía un frame al bus CAN.  
- **recv** - Recibe un frame del bus CAN.  
- **set_mask_filter_recv** - Recibe un frame del bus CAN utilizando configuraciones de máscara y filtro.  

### 1. Configuración de la Tasa de Baudios  

Esta función se usa para inicializar la velocidad de transmisión del sistema CAN Bus.  

Las tasas de baudios disponibles son las siguientes:

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

### 2. Configuración de Máscara y Filtro de Recepción  

El chip controlador tiene **2 registros de máscara de recepción** y **5 registros de filtro**, que pueden usarse para garantizar que los datos sean recibidos solo del dispositivo objetivo. Estos registros son especialmente útiles en redes grandes con múltiples nodos.  

Hemos proporcionado dos funciones que permiten utilizar estos registros de máscara y filtro.  

**Máscara:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filtrar:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** representa qué registro usar. Puedes colocar 0 o 1 para la máscara y de 0 a 5 para el filtro.  
- **ext** representa el estado del frame. 0 significa que es una máscara o filtro para un frame estándar. 1 significa que es para un frame extendido.  
- **ulData** representa el contenido de la máscara o filtro.  

### 3. Verificar Recepción  

El chip controlador MCP2515 tiene la capacidad de operar en modo de sondeo o en modo de interrupción. En el modo de sondeo, el software revisa regularmente si se ha recibido un frame. En el modo de interrupción, se pueden usar pines adicionales para señalar que un frame ha sido recibido o que la transmisión ha finalizado. Esto permite un uso más eficiente de los recursos, ya que el procesador no necesita verificar constantemente la llegada de datos.

Esta función se utiliza para verificar si hay algún frame recibido esperando en el búfer de recepción. Si hay, la función devolverá **true**, de lo contrario, devolverá **false**. Puedes usar esta función dentro de un ciclo para verificar continuamente si hay frames recibidos.

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. Obtener el ID del CAN  

Puedes usar la siguiente función para obtener la longitud de los datos recibidos del nodo que envió el mensaje.

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. Enviar un frame

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

Esta función se utiliza para enviar datos al Bus CAN. Los parámetros son los siguientes:

- **id** - El ID del frame CAN.
- **ext** - Un valor booleano que representa el estado del frame. '0' significa frame estándar. '1' significa frame extendido.
- **len** - La longitud del frame.
- **data_buf** - El contenido del mensaje.

Por ejemplo, en el ejemplo de 'send', tenemos:

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //Enviar el mensaje 'stmp' al bus y decirle a otros dispositivos que este es un marco estándar de 0x00.
```

### 6. Recibir un frame

La siguiente función se utiliza para recibir datos en el nodo 'receive':

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

En condiciones en las que se han configurado máscaras y filtros, esta función solo podrá obtener los frames que cumplan con los requisitos de las máscaras y filtros.

- **len** representa la longitud de los datos.
- **buf** es donde se almacenan los datos.

## Empezando

#### Hardware

Este producto no incluye el módulo XIAO, por lo que necesitarás comprar un módulo XIAO por separado. En este ejemplo, usamos el XIAO ESP32C3 para fines de demostración, pero otras versiones del módulo XIAO funcionarán de manera similar. La conexión de hardware es sencilla: simplemente inserta el módulo XIAO en la placa de expansión.

Por favor, consulta el diagrama a continuación para la conexión con el XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### Software

- **Paso 1.** Descarga la [biblioteca CAN Bus](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) desde Github.

- **Paso 2.** Consulta [Cómo instalar una biblioteca](https://wiki.seeedstudio.com/How_to_install_Arduino_Library) para instalar la biblioteca en Arduino.

- **Paso 3.** Después de descargar e instalar correctamente la biblioteca, podrás encontrar un programa de ejemplo llamado send.ino en la carpeta de ejemplos. Este programa está diseñado para el módulo D7S.

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* Por favor, modifica SPI_CS_PIN para adaptarlo a diferentes placas.

   CANBed V1        - 17
   CANBed M0        - 3
   CAN Bus Shield   - 9
   CANBed 2040      - 9
   CANBed Dual      - 9
   OBD-2G Dev Kit   - 9
   OBD-II GPS Kit   - 9
   Hud Dev Kit      - 9
*/

#define SPI_CS_PIN  D7

MCP_CAN CAN(SPI_CS_PIN);                                    // Configura el pin CS

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // El siguiente código es necesario para OBD-II GPS Dev Kit versión Atemga32U4
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // El siguiente código es necesario para OBD-II GPS Dev Kit versión RP2040
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // inicializa el bus CAN : baudrate = 500k
    {
        Serial.println("¡FALLO EN EL BUS CAN!");
        delay(100);
    }
    Serial.println("¡BUS CAN OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // envía datos cada 100ms
}

// FIN DEL ARCHIVO
```

- **Paso 4.** Sube el demo. Si no sabes cómo cargar el código, consulta [Cómo cargar el código](https://wiki.seeedstudio.com/Upload_Code/).

- **Paso 5.** Después de cargar el código con éxito, notarás que los LED de RX y TX se encienden, lo que indica que el bus CAN está transmitiendo datos activamente. Si tu bus CAN está conectado a otros dispositivos, estos LEDs parpadearán en lugar de permanecer encendidos de manera continua.

## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Solución de Problemas

### P1: ¿Cuál es la velocidad de baudios máxima soportada por la tarjeta de expansión XIAO CAN Bus?

La velocidad máxima de baudios soportada por el controlador MCP2515 en la tarjeta de expansión es de 1 Mbps. Asegúrate de que la configuración de la velocidad de baudios de tu red CAN sea compatible con esta limitación.

### P2: ¿Puedo usar múltiples tarjetas de expansión XIAO CAN Bus en la misma red CAN?

Sí, puedes usar múltiples tarjetas de expansión en la misma red CAN. Cada tarjeta de expansión debe tener un ID de nodo único asignado para garantizar una comunicación adecuada y evitar conflictos en el bus.

### P3: ¿Puedo usar la tarjeta de expansión XIAO CAN Bus con otros microcontroladores o placas de desarrollo?

La tarjeta de expansión XIAO CAN Bus está diseñada específicamente para funcionar con la placa de desarrollo Seeed Studio XIAO. Sin embargo, con la asignación adecuada de pines y configuración, puede ser posible usarla con otros microcontroladores o placas de desarrollo que soporten los protocolos de comunicación CAN necesarios.

### P4: ¿Existen limitaciones en la longitud máxima del cable para la conexión del bus CAN?

La longitud máxima del cable para la conexión del bus CAN depende de factores como la velocidad de baudios, la calidad del cable y la interferencia electromagnética. En general, para velocidades de baudios más bajas, se pueden soportar longitudes de cable más largas (hasta varios cientos de metros). Sin embargo, para velocidades de baudios más altas, se recomienda mantener la longitud del cable más corta (dentro de unos pocos metros) para mantener una comunicación confiable.

### P5: ¿Cómo puedo solucionar problemas de comunicación en el bus CAN?

Si encuentras problemas con la comunicación en el bus CAN, puedes seguir estos pasos para la solución de problemas:

- Verifica las conexiones físicas de la red CAN, asegurando el cableado correcto y la terminación adecuada.
- Revisa la configuración de la velocidad de baudios y asegúrate de que coincida en todos los dispositivos conectados al bus CAN.
- Monitorea el tráfico del bus CAN usando un analizador de bus CAN o software de terminal para identificar errores o problemas en los mensajes transmitidos.
- Revisa el código del programa para una correcta inicialización y configuración del controlador MCP2515.
- Asegúrate de que la fuente de alimentación de la placa de desarrollo XIAO y de la red CAN esté estable y dentro del rango de voltaje especificado.
- Si tienes más preguntas o problemas no cubiertos en esta sección de preguntas frecuentes, no dudes en contactar con nuestro equipo de soporte técnico para obtener más ayuda.

## Recursos

- **[ZIP]** [XIAO CAN Bus Expansion board SCH&PCB](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [Datasheet - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [Datasheet - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes opciones de soporte y asegurarnos de que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
