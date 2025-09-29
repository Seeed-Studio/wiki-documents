---
description: Comenzando con la Placa de Expansión CAN Bus XIAO
title: Placa de Expansión CAN Bus XIAO
keywords:
- Grove
- can bus
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /es/xiao-can-bus-expansion
last_update:
  date: 6/6/2023
  author: Stephen Lo
---

# Placa de Expansión CAN Bus XIAO

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/main.jpg" alt="pir" width={500} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-CAN-Bus-Breakout-Board-for-XIAO-and-QT-Py-p-5702.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

<br />

La Placa de Expansión CAN Bus XIAO está específicamente diseñada para funcionar con la placa de desarrollo Seeed Studio XIAO, proporcionando una forma fácil y conveniente de agregar funcionalidad de comunicación CAN bus a tus proyectos. CAN bus (Controller Area Network) es un protocolo de comunicación ampliamente utilizado en sistemas automotrices, industriales y otros sistemas embebidos, permitiendo un intercambio de datos confiable y robusto entre diferentes nodos.

La integración de los chips controlador MCP2515 y transceptor SN65HVD230 en la placa de expansión asegura una comunicación fluida y eficiente sobre el CAN bus. El controlador MCP2515 maneja la gestión del protocolo, el filtrado de mensajes y el manejo de errores, mientras que el transceptor SN65HVD230 convierte las señales digitales del controlador en las señales diferenciales requeridas para la comunicación CAN bus.

Con la Placa de Expansión CAN Bus XIAO, puedes aprovechar el poder de la placa de desarrollo Seeed Studio XIAO y su extenso ecosistema para crear proyectos que requieran comunicación CAN bus. Ya sea que estés trabajando en aplicaciones automotrices, sistemas de control industrial, proyectos de robótica o dispositivos IoT, esta placa de expansión proporciona una solución confiable y compacta para integrar capacidades CAN bus en tus diseños.

La placa de expansión cuenta con una conexión terminal fácil de usar, permitiéndote conectar fácilmente las líneas CANH y CANL a la red CAN bus. El diseño compacto de la placa asegura compatibilidad con varios gabinetes de proyectos y facilita la integración fluida en tus configuraciones existentes.

Al utilizar la Placa de Expansión CAN Bus XIAO, puedes aprovechar la robustez, confiabilidad y escalabilidad del protocolo CAN bus, habilitando intercambio eficiente de datos, control de sistemas e interconectividad en tus proyectos.

## Introducción

### Características

- Compatibilidad: Diseñada para funcionar perfectamente con la placa de desarrollo Seeed Studio XIAO.
- Controlador MCP2515: El chip MCP2515 integrado proporciona control confiable y manejo de la comunicación CAN bus.
- Transceptor SN65HVD230: El chip SN65HVD230 integrado asegura conversión precisa de señales y comunicación robusta sobre el CAN bus.
- Conexión Terminal: Las líneas CANH y CANL son convenientemente accesibles a través de un terminal de 3 pines, permitiendo conexión fácil al CAN bus.
- Diseño Compacto: La placa de expansión ha sido diseñada con un factor de forma compacto, haciéndola adecuada para varias aplicaciones.

### Especificación

- Compatibilidad: Placa de desarrollo Seeed Studio XIAO.
- Interfaz de Comunicación: CAN bus (Controller Area Network).
- Transceptor CAN: SN65HVD230.
- Controlador CAN: MCP2515.
- Conexión Terminal: Terminal de 2 pines para líneas CANH y CANL.

### Aplicaciones

La Placa de Expansión CAN Bus XIAO puede ser utilizada en varios proyectos que requieren comunicación CAN bus. Aquí hay algunas ideas de aplicación para inspirarte:

- Proyectos Automotrices: Conecta la placa de expansión al XIAO y construye aplicaciones automotrices que requieran comunicación CAN bus, como diagnósticos de vehículos o registro de datos.
- Sistemas de Control Industrial: Utiliza las capacidades CAN bus para interfaz con dispositivos y sistemas industriales, habilitando intercambio eficiente de datos y control.
- Robótica: Incorpora la placa de expansión en tus proyectos robóticos para habilitar comunicación entre diferentes módulos y componentes robóticos.
- Aplicaciones IoT: Integra la placa de expansión con dispositivos IoT para facilitar comunicación e intercambio de datos sobre el protocolo CAN bus.

Por favor consulta la hoja de datos de la Placa de Expansión CAN Bus XIAO y los ejemplos para instrucciones detalladas de uso y muestras de código.

## Descripción General del Hardware

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/hw.jpg" alt="pir" width={500} height="auto" /></p>

1. GND
2. CAN-H
3. CAN-L
4. Indicadores LED para RX/TX
5. SN65NVD230
6. MCP2515

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/3.png" alt="pir" width={500} height="auto" /></p>

La Placa de Expansión XIAO CAN BUS tiene un pad P1 en la parte posterior de la placa, que añadirá una resistencia de terminación al dispositivo después de hacer un cortocircuito. Considerando que algunos dispositivos de comunicación de los usuarios pueden ya tener una resistencia de terminación, XIAO CAN-BUS no cortocircuita P1 por defecto. Si encuentras que la comunicación CAN no puede enviar o recibir mensajes, puedes intentar cortocircuitar el pad P1 para obtener una resistencia de terminación de 120 ohmios.

## Descripción General de la Biblioteca Arduino

Proporcionamos una [biblioteca Arduino para la placa MCP2515](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/Arduino_CAN_BUS_MCP2515" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar las Bibliotecas</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div>

<br />

La biblioteca incluye varios ejemplos, incluyendo:

- ***OBDII-PIDs*** - recuperar datos de la interfaz OBD-II
- ***send*** - enviar una trama al bus CAN
- ***recv*** - recibir una trama del bus CAN
- ***set_mask_filter_recv*** - recibir una trama del bus CAN con configuraciones de máscara y filtro

### 1. Configurar la velocidad de baudios

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

### 2. Configurar Máscara de Recepción y Filtro

El chip controlador tiene 2 registros de máscara de recepción y 5 registros de filtro que se pueden usar para asegurar que los datos se reciban del dispositivo objetivo. Estos registros son particularmente útiles en redes grandes con muchos nodos. Hemos proporcionado dos funciones que te permiten utilizar estos registros de máscara y filtro.

**Máscara:**

```c
init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);
```

**Filtro:**

```c
init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);
```

- **num** representa qué registro usar. Puedes llenar 0 o 1 para máscara y 0 a 5 para filtro.
- **ext** representa el estado de la trama. 0 significa que es una máscara o filtro para una trama estándar. 1 significa que es para una trama extendida.
- **ulData** representa el contenido de la máscara o filtro.

### 3. Verificar Recepción

El chip controlador MCP2515 tiene la capacidad de operar en modo de sondeo o en modo de interrupción. En modo de sondeo, el software verifica regularmente si hay una trama recibida. En modo de interrupción, se pueden usar pines adicionales para señalar que se ha recibido una trama o que la transmisión se ha completado. Esto permite un uso más eficiente de los recursos ya que el procesador no necesita verificar constantemente los datos entrantes.

Esta función se usa para verificar si hay tramas recibidas esperando en el búfer de recepción. Si las hay, la función retornará verdadero, de lo contrario retornará falso. Puedes usar esta función en un bucle para verificar continuamente las tramas recibidas.

```c
INT8U MCP_CAN::checkReceive(void);
```

### 4. Obtener ID CAN

Puedes usar la siguiente función para obtener la longitud de los datos recibidos del nodo "emisor".

```c
INT32U MCP_CAN::getCanId(void)
```

### 5. Enviar una trama

```c
CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);
```

Esta función se utiliza para enviar datos al Bus CAN. Los parámetros son los siguientes:

- **id** - El ID del frame CAN.
- **ext** - Un valor booleano que representa el estado del frame. '0' significa frame estándar. '1' significa frame extendido.
- **len** - La longitud del frame.
- **data_buf** - El contenido del mensaje.

Por ejemplo, en el ejemplo 'send', tenemos:

```c
unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
CAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.
```

### 6. Recibir una trama

La siguiente función se utiliza para recibir datos en el nodo 'receptor':

```c
CAN.readMsgBuf(unsigned char len, unsigned char buf);
```

En condiciones donde se han establecido máscaras y filtros. Esta función solo puede obtener tramas que cumplan con los requisitos de las máscaras y filtros.

- **len** representa la longitud de los datos.
- **buf** es donde almacenas los datos.

## Primeros Pasos

#### Hardware

Este producto no incluye el módulo XIAO, por lo que necesitarás comprar un módulo XIAO por separado. En este ejemplo, usamos el XIAO ESP32C3 para fines de demostración, pero otras versiones del módulo XIAO funcionarán de manera similar. La conexión del hardware es sencilla: simplemente inserta el módulo XIAO en la placa de expansión.

Por favor, consulta el diagrama a continuación para la conexión al XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/connect.jpg" alt="pir" width={500} height="auto" /></p>

#### Software

- **Paso 1.** Descarga la [Librería CAN Bus](https://github.com/limengdu/Arduino_CAN_BUS_MCP2515) desde Github.

- **Paso 2.** Consulta [Cómo instalar una librería](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library) para instalar la librería para Arduino.

- **Paso 3.** Después de descargar e instalar la librería correctamente, puedes encontrar un programa de ejemplo llamado send.ino en la carpeta de ejemplos. Este programa está diseñado para el módulo D7S.

```cpp
#include <mcp_can.h>
#include <SPI.h>

/* Please modify SPI_CS_PIN to adapt to different baords.

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

MCP_CAN CAN(SPI_CS_PIN);                                    // Set CS pin

void setup()
{
    Serial.begin(115200);
    while(!Serial);
    
    // below code need for OBD-II GPS Dev Kit Atemga32U4 version
    // pinMode(A3, OUTPUT);
    // digitalWrite(A3, HIGH);
    
    // below code need for OBD-II GPS Dev Kit RP2040 version
    // pinMode(12, OUTPUT);
    // digitalWrite(12, HIGH);
    
    while (CAN_OK != CAN.begin(CAN_500KBPS))    // init can bus : baudrate = 500k
    {
        Serial.println("CAN BUS FAIL!");
        delay(100);
    }
    Serial.println("CAN BUS OK!");
}

unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};
void loop()
{
    CAN.sendMsgBuf(0x00, 0, 8, stmp);
    delay(100);                       // send data per 100ms
}

// END FILE
```

- **Paso 4.** Sube la demostración. Si no sabes cómo subir el código, por favor consulta [Cómo subir código](https://wiki.seeedstudio.com/es/Upload_Code/).

- **Paso 5.** Después de una subida exitosa del código, notarás que los LEDs RX y TX se encienden, indicando que el bus CAN está transmitiendo datos activamente. Si tu bus CAN está conectado a otros dispositivos, estos LEDs parpadearán en lugar de permanecer constantemente encendidos.

## Visor de Esquemático en Línea

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.rar" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Solución de Problemas

### P1: ¿Cuál es la velocidad de baudios máxima soportada por la Placa de Expansión XIAO CAN Bus?

La velocidad de baudios máxima soportada por el controlador MCP2515 en la placa de expansión es de 1 Mbps. Por favor asegúrate de que la configuración de velocidad de baudios de tu red de bus CAN sea compatible con esta limitación.

### P2: ¿Puedo usar múltiples Placas de Expansión XIAO CAN Bus en la misma red de bus CAN?

Sí, puedes usar múltiples placas de expansión en la misma red de bus CAN. Cada placa de expansión debe tener un ID de nodo único asignado para asegurar una comunicación adecuada y evitar conflictos en el bus.

### P3: ¿Puedo usar la Placa de Expansión XIAO CAN Bus con otros microcontroladores o placas de desarrollo?

La Placa de Expansión XIAO CAN Bus está específicamente diseñada para funcionar con la placa de desarrollo Seeed Studio XIAO. Sin embargo, con el mapeo de pines y configuración adecuados, puede ser posible usarla con otros microcontroladores o placas de desarrollo que soporten los protocolos de comunicación de bus CAN necesarios.

### P4: ¿Hay alguna limitación en la longitud máxima del cable para la conexión del bus CAN?

La longitud máxima del cable para la conexión del bus CAN depende de factores como la velocidad de baudios, la calidad del cable y la interferencia electromagnética. En general, para velocidades de baudios más bajas, se pueden soportar longitudes de cable más largas (hasta varios cientos de metros). Sin embargo, para velocidades de baudios más altas, se recomienda mantener la longitud del cable más corta (dentro de unos pocos metros) para mantener una comunicación confiable.

### P5: ¿Cómo puedo solucionar problemas de comunicación del bus CAN?

Si encuentras algún problema con la comunicación del bus CAN, puedes seguir estos pasos para la solución de problemas:

- Verifica las conexiones físicas de la red de bus CAN, asegurando el cableado correcto y la terminación.
- Revisa la configuración de velocidad de baudios y asegúrate de que coincida en todos los dispositivos conectados al bus CAN.
- Monitorea el tráfico del bus CAN usando un analizador de bus CAN o software de terminal para identificar cualquier error o problema en los mensajes transmitidos.
- Verifica nuevamente el código del programa para la inicialización y configuración adecuada del controlador MCP2515.
- Asegúrate de que el suministro de energía a la placa de desarrollo XIAO y la red de bus CAN sea estable y esté dentro del rango de voltaje especificado.
- Si tienes cualquier otra pregunta o problema no cubierto en esta sección de FAQ, por favor siéntete libre de contactar a nuestro equipo de soporte técnico para asistencia adicional.

## Recursos

- **[ZIP]** [Esquemático y PCB de la placa de expansión XIAO CAN Bus](https://files.seeedstudio.com/wiki/xiao_can_bus_board/CAN_DEV_XIAO.zip)
- **[PDF]** [Hoja de datos - MCP2515](https://files.seeedstudio.com/wiki/xiao_can_bus_board/MCP2515-Stand-Alone-CAN-Controller-with-SPI-200018-708845.pdf)
- **[PDF]** [Hoja de datos - SN65HVD230](https://files.seeedstudio.com/wiki/xiao_can_bus_board/20001667G-1115479.pdf)

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
