---
description: Formato de Payload del SenseCAP T1000 Tracker
title: Formato de Payload
keywords:
- SenseCAP_T1000_tracker
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/T1000_payload
last_update:
  date: 2/21/2023
  author: Jessie
---

## Análisis de Paquetes de Enlace Ascendente

El protocolo de datos del Tracker proporciona diferentes paquetes para corresponder a diferente información, y el número de bytes de cada paquete puede variar. La estructura de la trama se muestra en la imagen a continuación. El contenido de la trama se envía en **orden de bytes big-endian**.

|ID de Datos|Valor de Datos|
| - | :- |
|1 byte|50 bytes (Máx)|

**ID de Datos**: Número de función.
**Valor de Datos**: Posición, datos del sensor y otra información.

### Paquete de Estado del Dispositivo - Modo Evento 0x01

El Paquete de Estado del Dispositivo se carga cuando se une a la red LoRaWAN. El paquete de Estado del Dispositivo tiene dos formatos de paquete en diferentes modos de funcionamiento:

1) Modo Evento, ID=0x01

1) Modo Periódico, ID= 0x02

### Paquete de Estado del Dispositivo - Modo Evento: 0x01

|0x01|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|Nivel de batería|Versión de software|Versión de hardware|Modo de trabajo|Estrategia de posicionamiento|Intervalo de latido|Intervalo de enlace ascendente|

|Byte13~14|Byte15|Byte16|Byte17|Byte18~19|Byte20~21|
| :- | :- | :- | :- | :- | :- |
|Intervalo de enlace ascendente modo evento|Interruptor temp y luz|Modo SOS|Habilitar evento de movimiento|Umbral de movimiento de 3 ejes|Intervalo de inicio de movimiento|

|<a name="ole_link1"></a>Byte22|Byte23~24|Byte25|Byte26~27|Byte28|Byte29~30|
| :- | :- | :- | :- | :- | :- |
|Habilitar evento de inmovilidad|Tiempo de espera de inmovilidad|Habilitar evento de choque|Umbral de choque de 3 ejes|Habilitar evento de temperatura|Intervalo de enlace ascendente evento temperatura|

|Byte31~32|Byte33~34|Byte35~36|Byte37|Byte38|Byte39~40|
| :- | :- | :- | :- | :- | :- |
|Intervalo de muestra de temperatura|Umbral máximo de temperatura|Umbral mínimo de temperatura|Tipo de advertencia de temperatura|Habilitar evento de luz|Intervalo de enlace ascendente evento luz|

|Byte41~42|Byte43~44|Byte45~46|Byte47|
| :- | :- | :- | :- |
|Intervalo de muestra de luz|Umbral máximo de luz|Umbral mínimo de luz|Tipo de advertencia de luz|

**La carga útil sin procesar:**

0153010501050207001e00050005010000001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Valor**|**Tipo**|**Datos sin procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|01|01 es el ID del paquete.|
|2|Nivel de batería|uint8|53|<p>53 es 0x53 = 83(DEC)</p><p>El nivel de batería es 83%</p>|
|3~4|Versión de software|uint16|0105|<p>0105 es 0x0105 == v1.5</p><p>La versión de software es v1.5</p>|
|5~6|Versión de hardware|uint16|0105|<p>0105 es 0x0105 == v1.5</p><p>La versión de hardware es v1.5</p>|
|7|Modo de trabajo|uint8|02|<p>02 es 0x02, significa que el dispositivo usa "Modo de evento".</p><p>00: Modo de espera</p><p>01: Modo periódico</p><p>02: Modo de evento</p>|
|8|Estrategia de posicionamiento|uint8|07|<p>07 es 0x07, significa que el dispositivo usa la estrategia de posicionamiento Bluetooth + Wi-Fi + GNSS.</p><p>00: Solo GNSS</p><p>01: Solo Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Solo Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|9~10|Intervalo de latido|uint16|001e|001e es 0x001E = 30(DEC), el intervalo de latido es 30 minutos. |
|11~12|Intervalo de enlace ascendente|uint16|0005|0005 es 0x0005 = 5(DEC), el intervalo de enlace ascendente es 5 minutos.|
|13~14|Intervalo de enlace ascendente en modo de evento|uint16|0005|0005 es 0x0005 = 5(DEC), el intervalo de enlace ascendente en modo de evento es 5 minutos.|
|15|Interruptor de temperatura y luz|uint8|01|<p>01 significa abrir el sensor de temperatura y luz.</p><p>00: Cerrar el sensor de temperatura y luz.</p><p>01: Abrir el sensor de temperatura y luz.</p>|
|16|Modo SOS|uint8|00|<p>00 significa usar modo SOS único.</p><p>00: usar modo SOS único.</p><p>01: usar modo SOS continuo.</p>|
|17|Habilitar evento de movimiento|uint8|00|<p>00 significa deshabilitar modo de evento.</p><p>00: deshabilitar modo de evento.</p><p>01: habilitar modo de evento.</p>|
|18~19|Umbral de movimiento de 3 ejes|uint16|001e|<p>001e es 0x001E=30(DEC) mg</p><p>Cuando la aceleración excede 30mg, determina que el dispositivo está en movimiento, cuando está 2 minutos por debajo de este valor, determina que el dispositivo está inmóvil.</p>|
|20~21|Intervalo de inicio de movimiento|uint16|0005|0005 es 0x0005 = 5(DEC), cuando el dispositivo está en movimiento, el intervalo es 5 minutos.|
|22|Habilitar evento de inmovilidad|uint8|00|<p>00 significa deshabilitar evento de inmovilidad.</p><p>00: deshabilitar evento de inmovilidad.</p><p>01: habilitar evento de inmovilidad.</p>|
|23~24|Tiempo de espera de inmovilidad|uint16|0168|0168 es 0x0168 = 360(DEC), cuando el dispositivo está estacionario en una ubicación por más de 360 minutos, se activa un evento de tiempo de espera de inmovilidad.|
|25|Habilitar evento de impacto|uint8|01|<p>01 significa habilitar evento de impacto.</p><p>00: deshabilitar evento de impacto.</p><p>01: habilitar evento de impacto.</p>|
|26~27|Umbral de impacto de 3 ejes|uint16|012c|<p>012c es 0x012C=300(DEC) mg</p><p>Cuando la aceleración excede 300mg, se activa el evento de impacto.</p>|
|28|Habilitar evento de temperatura|uint8|00|<p>00 significa habilitar evento de impacto.</p><p>00: deshabilitar evento de impacto.</p><p>01: habilitar evento de impacto.</p>|
|29~30|Intervalo de enlace ascendente de evento de temperatura|uint16|0005|0005 es 0x0005 = 5(DEC), cuando la temperatura excede el umbral, la ubicación y los datos del sensor se cargarán cada 5 minutos.|
|31~32|Intervalo de muestreo de temperatura|uint16|001e|<p>001e es 0x001E=30(DEC) segundos</p><p>La temperatura se detecta cada 30 segundos. Cuando se activa el umbral, cargar ubicación y datos del sensor.</p>|
|33~34|Umbral máximo de temperatura|int16|0258|<p>0258 es 0x0258 = 600(DEC),</p><p>Umbral máximo =600/10=60.0 ℃</p>|
|35~36|Umbral mínimo de temperatura|int16|0000|<p>0000 es 0x0000 = 0(DEC), </p><p>Umbral mínimo=0/10=0.0 ℃</p>|
|37|Regla de umbral de temperatura|uint8|00|<p>00 significa cuando temperatura ≤ umbral mínimo, el dispositivo cargará ubicación y evento de temperatura.</p><p>00: temp ≤ umbral mínimo</p><p>01: temp ≥ umbral máximo</p><p>02: temp ≤ umbral mínimo y temp ≥ umbral máximo</p><p>03: umbral mínimo≤ temp ≤umbral máximo</p>|
|38|Habilitar evento de luz|uint8|00|<p>00 significa deshabilitar evento de luz.</p><p>00: deshabilitar evento de luz.</p><p>01: habilitar evento de luz.</p>|
|39~40|Intervalo de enlace ascendente de evento de luz|uint16|0005|0005 es 0x0005 = 5(DEC), cuando la luz excede el umbral, la ubicación y los datos del sensor se cargarán cada 5 minutos.|
|41~42|Intervalo de muestreo de luz|uint16|0001|<p>0001es 0x0001=1(DEC) segundos</p><p>La temperatura se detecta cada 1 segundos. Cuando se activa el umbral, cargar ubicación y datos del sensor.</p>|
|43~44|Umbral máximo de luz|uint16|0064|<p>0064 es 0x0064 = 100(DEC) %</p><p>Umbral máximo =100%</p>|
|45~46|Umbral mínimo de luz|uint16|0000|<p>0000 es 0x0000 = 0(DEC) %</p><p>Umbral mínimo=0%</p>|
|47|Tipo de advertencia de luz|uint8|00|<p>00 significa cuando luz ≤ umbral mínimo, el dispositivo cargará ubicación y evento de luz.</p><p>00: luz ≤ umbral mínimo</p><p>01: luz ≥ umbral máximo</p><p>02: luz ≤ umbral mínimo y luz ≥ umbral máximo</p><p>03: umbral mínimo≤ luz ≤umbral máximo</p>|

1. ### <a name="_toc145487499"></a>**Paquete de Estado del Dispositivo - Modo Periódico 0x02**

El paquete de Estado del Dispositivo se carga cuando se une a la red LoRaWAN. El paquete de Estado del Dispositivo tiene dos formatos de paquete en diferentes modos de funcionamiento:

1) Modo de Evento, ID=0x01

1) Modo Periódico, ID= 0x02

### Paquete de Estado del Dispositivo - Modo Periódico: 0x02

|0x02|Byte2|Byte3~4|Byte5~6|Byte7|Byte8|Byte9~10|Byte11~12|
| - | :- | :- | :- | :- | :- | :- | :- |
|ID|nivel de batería|versión de software|versión de hardware|modo de trabajo|estrategia de posicionamiento|intervalo de latido|intervalo de enlace ascendente|

|Byte13~14|Byte15|Byte16|
| :- | :- | :- |
|intervalo de enlace ascendente en modo de evento|interruptor de temp y luz|modo SOS|

**La carga útil sin procesar:**

025601050105010002d0003c003c0000

|**Byte**|**Valor**|**Tipo**|**Datos sin procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|02|02 es el ID del paquete.|
|2|Nivel de batería|uint8|56|<p>56 es 0x56 = 86(DEC)</p><p>El nivel de batería es 86%</p>|
|3~4|Versión de software|uint16|0105|<p>0105 es 0x0105 == v1.5</p><p>La versión de software es v1.5</p>|
|5~6|Versión de hardware|uint16|0105|<p>0105 es 0x0105 == v1.5</p><p>La versión de hardware es v1.5</p>|
|7|Modo de trabajo|uint8|01|<p>01 es 0x01, significa que el dispositivo usa "Modo periódico".</p><p>00: Modo en espera</p><p>01: Modo periódico</p><p>02: Modo de evento</p>|
|8|Estrategia de posicionamiento|uint8|00|<p>00 es 0x01, significa que el dispositivo usa la estrategia de posicionamiento "Solo GNSS".</p><p>00: Solo GNSS</p><p>01: Solo Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Solo Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|9~10|Intervalo de latido|uint16|02d0|02d0 es 0x02D0 = 720(DEC) minutos, el intervalo de latido es 720 minutos. |
|11~12|Intervalo de enlace ascendente|uint16|003c|003c es 0x003C = 60(DEC) minutos, el intervalo de enlace ascendente es 60 minutos.|
|13~14|Intervalo de enlace ascendente en modo de evento|uint16|003c|003c es 0x003C = 60(DEC), el intervalo de enlace ascendente en modo de evento es 60 minutos.|
|15|Interruptor de temperatura y luz|uint8|00|<p>00 significa abrir el sensor de temperatura y luz.</p><p>00: Cerrar el sensor de temperatura y luz.</p><p>01: Abrir el sensor de temperatura y luz.</p>|
|16|Modo SOS|uint8|00|<p>00 significa usar modo SOS único.</p><p>00: usar modo SOS único.</p><p>01: usar modo SOS continuo.</p>|

### Paquete de Latido -0x05

Cuando el dispositivo no sube datos dentro del intervalo de latido, se activará un paquete de latido. Este paquete solo contiene información de la batería.

|0x05|Byte2|Byte3|Byte4|Byte5|
| - | :- | :- | :- | :- |
|ID|nivel de batería|modo de trabajo|estrategia de posicionamiento|modo SOS|

**La carga útil sin procesar:**

0564010001

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|05|05 es el ID del paquete.|
|2|Nivel de batería|uint8|64|<p>64 es 0x64 = 100(DEC)</p><p>El nivel de batería es 100%</p>|
|3|Modo de trabajo|uint8|01|<p>01 es 0x01, significa que el dispositivo usa "Modo periódico".</p><p>00: Modo en espera</p><p>01: Modo periódico</p><p>02: Modo de evento</p>|
|4|Estrategia de posicionamiento|uint8|00|<p>00 es 0x01, significa que el dispositivo usa la estrategia de posicionamiento "Solo GNSS".</p><p>00: Solo GNSS</p><p>01: Solo Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Solo Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|
|5|Modo SOS|uint8|00|<p>00 significa usar modo SOS único.</p><p>00: usar modo SOS único.</p><p>01: usar modo SOS continuo.</p>|

### Paquete de Ubicación GNSS y Sensor-0x06

El ID 0x06 se utiliza para cargar la ubicación GNSS, datos del sensor y batería.

|0x06|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento|tiempo UTC|longitud|latitud|

|Byte18~19|Byte20~21|Byte22|
| - | :- | :- |
|Temperatura|Luz|nivel de batería|

**La carga útil sin procesar:**

06000008006462248d06ca502801587ec6<a name="ole_link3"></a>00fe000057

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|06|06 es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que esto es un movimiento.</p>|
|6~9|Tiempo UTC|uint32|6462248d|<p>6462248d es 0x6462248D = 1684153485(DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-05-15 20:24:45</p>|
|10~13|Longitud|int32|06ca5028|06ca5028 es 0x06CA5028 = 113922088(DEC), la longitud= 113922088/1000000=113.922088|
|14~17|Latitud|int32|01587ec6|01587ec6 es 0x01587EC6 = 22576838(DEC), la Latitud = 22576838/1000000=22.576838|
|18~19|Temperatura|int16|00fe|00fe es 0x00FE = 254(DEC), temperatura=254/10=25.4℃|
|20~21|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, la luz=0=0%|
|22|Nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|

1. ### <a name="_toc145487502"></a>**Paquete de Ubicación Wi-Fi y Sensor-0x07**

El ID 0x07 se utiliza para cargar direcciones Mac de Wi-Fi, datos del sensor y batería.

|0x07|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento|tiempo UTC|dirección MAC 1|El RSSI de la dirección MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|
| :- | :- | :- | :- | :- | :- |
|dirección MAC 2|El RSSI de la dirección MAC 2, int8|dirección MAC 3|El RSSI de la dirección MAC 3, int8|dirección MAC 4|El RSSI de la dirección MAC 4, int8|

|Byte38~39|Byte40~41|Byte42|
| - | :- | :- |
|Temperatura|Luz|nivel de batería|

**La carga útil sin procesar:**

070000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b900fe000057

|**Byte**|**Valor**|**Tipo**|**Datos sin procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|07|07 es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de impacto.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de impacto.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando el movimiento comienza, el conteo aumenta en 1. Registra que esto es un movimiento.</p>|
|6~9|Tiempo UTC|uint32|64622472|<p>64622472 es 0x64622472 = 1684153458 (DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-05-15 20:24:18</p>|
|10~15|Dirección MAC 1|----|487397162234|<p>487397162234 </p><p>la dirección MAC (HEX)= 48:73:97:16:22:34</p>|
|16|El RSSI de la dirección MAC 1|int8|bb|<p>bb es 0xBB = -69(DEC), el tipo es int8</p><p>el RSSI = -69</p>|
|17~22|Dirección MAC 2|----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>la dirección MAC (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|El RSSI de la dirección MAC 2|int8|bc|<p>bc es 0xBC = -68(DEC), el tipo es int8</p><p>el RSSI = -68</p>|
|24~29|Dirección MAC 3|----|74cf002f3ad0|<p>74cf002f3ad0</p><p>la dirección MAC (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|El RSSI de la dirección MAC 3|int8|a9|<p>a9 es 0xA9 = -87(DEC), el tipo es int8</p><p>el RSSI = -87</p>|
|31~36|Dirección MAC 4|----|ec26ca022958|<p>ec26ca022958</p><p>la dirección MAC (HEX)= EC:26:CA:02:29:58</p>|
|37|El RSSI de la dirección MAC 4|int8|b9|<p>b9 es 0xA9 = -71(DEC), el tipo es int8</p><p>el RSSI = -71</p>|
|38~39|Temperatura|int16|00fe|00fe es 0x00FE = 254(DEC), temperatura=254/10=25.4℃|
|40~41|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, la luz=0=0%|
|42|nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|

### Paquete de Ubicación Bluetooth y Sensor-0x08

El ID 0x08 se utiliza para cargar direcciones MAC de Bluetooth Beacon, datos de sensores y batería.

|0x08|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento|tiempo UTC|dirección MAC 1|El RSSI de la dirección MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~32|Byte33~34|Byte 35|
| :- | :- | :- | :- | :- | :- | :- |
|dirección MAC 2|El RSSI de la dirección MAC 2, int8|dirección MAC 3|El RSSI de la dirección MAC 3, int8|Temperatura|luz|nivel de batería|

**La carga útil sin procesar:**

0800000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c900fa000057

|**Byte**|**Valor**|**Tipo**|**Datos sin procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|08|08 es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de impacto.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de impacto.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que esto es un movimiento.</p>|
|6~9|Tiempo UTC|uint32|646225bb|<p>646225bb es 0x646225BB = 1684153787 (DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-05-15 20:29:47</p>|
|10~15|Dirección MAC 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>la dirección MAC (HEX)=51:62:D2:C1:B9:D3</p>|
|16|El RSSI de la dirección MAC 1|int8|c0|<p>c0 es 0xC0 = -64(DEC), el tipo es int8</p><p>el RSSI = -64</p>|
|17~22|Dirección MAC 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>la dirección MAC (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|El RSSI de la dirección MAC 2|int8|bc|<p>bc es 0xBC = -68(DEC), el tipo es int8</p><p>el RSSI = -68</p>|
|24~29|Dirección MAC 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>la dirección MAC (HEX)= D0:E2:D7:05:29:E8</p>|
|30|El RSSI de la dirección MAC 3|int8|c9|<p>c9 es 0xC9 = -55(DEC), el tipo es int8</p><p>el RSSI = -55</p>|
|31~32|Temperatura|int16|00fa|00fa es 0x00FA = 250(DEC), temperatura=254/10=25.0℃|
|33~34|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, la luz=0=0%|
|35|nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|

### Paquete de Solo Ubicación GNSS-0x09

Cuando el sensor está apagado, el dispositivo no carga el valor de medición del sensor. Solo se cargan los datos de ubicación.

|0x09|Byte2~4|Byte5|Byte6~9|Byte10~13|Byte14~17|Byte18|
| - | :- | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento |tiempo UTC|longitud|latitud|nivel de batería|

**La carga útil sin procesar:**

09000000006463186806ca506801587e4c56

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|09|09 es el ID del paquete.|
|2~4|estado del evento|uint24|000000|<p>000000 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que esto es un movimiento.</p>|
|6~9|Tiempo UTC|uint32|64631868|<p>64631868 es 0x64631868 = 1684215912 (DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-05-16 13:45:12</p>|
|10~13|Longitud|int32|06ca5068|06ca5068 es 0x06CA5068 = 113922152 (DEC), la longitud= 113922152/1000000=113.922152|
|14~17|Latitud|int32|01587e4c|01587e4c es 0x01587E4C = 22576716 (DEC), la Latitud = 22576716/1000000=22.576716|
|18|Nivel de batería|uint8|56|<p>56 es 0x56 = 86(DEC)</p><p>El nivel de batería es 86%</p>|

### Paquete Solo de Ubicación Wi-Fi-0x0A

|0x0A|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento |tiempo UTC|dirección MAC 1|El RSSI de la dirección MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31~36|Byte37|Byte38|
| :- | :- | :- | :- | :- | :- | :- |
|dirección MAC 2|El RSSI de la dirección MAC 2, int8|dirección MAC 3|El RSSI de la dirección MAC 3, int8|dirección MAC 4|El RSSI de la dirección MAC 4, int8|nivel de batería|

**La carga útil sin procesar:**

0A0000080064622472487397162234bb3ccd5798fd2ebc74cf002f3ad0a9ec26ca022958b957

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|0A|0A es el ID del paquete.|
|2~4|estado del evento|uint32|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que esto es un movimiento.</p>|
|6~9|tiempo UTC|uint32|64622472|<p>64622472 es 0x64622472 = 1684153458 (DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-05-15 20:24:18</p>|
|10~15|dirección MAC 1|-----|487397162234|<p>487397162234 </p><p>la dirección MAC (HEX)= 48:73:97:16:22:34</p>|
|16|El RSSI de la dirección MAC 1|int8|bb|<p>bb es 0xBB = -69(DEC), el tipo es int8</p><p>el RSSI = -69</p>|
|17~22|dirección MAC 2|-----|3ccd5798fd2e|<p>3ccd5798fd2e </p><p>la dirección MAC (HEX)= 3C:CD:57:98:FD:2E</p>|
|23|El RSSI de la dirección MAC 2|int8|bc|<p>bc es 0xBC = -68(DEC), el tipo es int8</p><p>el RSSI = -68</p>|
|24~29|dirección MAC 3|-----|74cf002f3ad0|<p>74cf002f3ad0</p><p>la dirección MAC (HEX)= 74:CF:00:2F:3A:D0</p>|
|30|El RSSI de la dirección MAC 3|int8|a9|<p>a9 es 0xA9 = -87(DEC), el tipo es int8</p><p>el RSSI = -87</p>|
|31~36|dirección MAC 4|-----|ec26ca022958|<p>ec26ca022958</p><p>la dirección MAC (HEX)= EC:26:CA:02:29:58</p>|
|37|El RSSI de la dirección MAC 4, int8|int8|b9|<p>b9 es 0xA9 = -71(DEC), el tipo es int8</p><p>el RSSI = -71</p>|
|38|nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|

### Paquete Solo de Ubicación Bluetooth-0x0B

|<a name="ole_link4"></a>0x0B|Byte2~4|Byte5|Byte6~9|Byte10~15|Byte16|
| - | :- | :- | :- | :- | :- |
|ID|estado del evento|número de segmento de movimiento |tiempo UTC|dirección MAC 1|El RSSI de la dirección MAC 1, int8|

|Byte17~22|Byte23|Byte24~29|Byte30|Byte31|
| :- | :- | :- | :- | :- |
|dirección MAC 2|El RSSI de la dirección MAC 2, int8|dirección MAC 3|El RSSI de la dirección MAC 3, int8|nivel de batería|

**La carga útil sin procesar:**

0B00000800646225bb5162d2c1b9d3ca1b5bd2afeae5c0d0e2d70529e8c957

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|0B|0B es el ID del paquete.|
|2~4|estado del evento|uint24|000008|<p>000008 es 0x000008, 0x0000XX está reservado y 0x08 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|5|Número de segmento de movimiento|uint8|00|<p>00 es 0x00 == 0.</p><p>Cuando comienza el movimiento, el conteo aumenta en 1. Registra que esto es un movimiento.</p>|
|6~9|tiempo UTC|uint32|646225bb|<p>646225bb es 0x646225BB = 1684153787 (DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-05-15 20:29:47</p>|
|10~15|dirección MAC 1|-----|5162d2c1b9d3|<p>5162d2c1b9d3</p><p>la dirección MAC (HEX)=51:62:D2:C1:B9:D3</p>|
|16|El RSSI de la dirección MAC 1, int8|int8|c0|<p>c0 es 0xC0 = -64(DEC), el tipo es int8</p><p>el RSSI = -64</p>|
|17~22|dirección MAC 2|-----|1b5bd2afeae5|<p>1b5bd2afeae5</p><p>la dirección MAC (HEX)= 1B:5B:D2:AF:EA:E5</p>|
|23|El RSSI de la dirección MAC 2, int8|int8|bc|<p>bc es 0xBC = -68(DEC), el tipo es int8</p><p>el RSSI = -68</p>|
|24~29|dirección MAC 3|-----|d0e2d70529e8|<p>d0e2d70529e8</p><p>la dirección MAC (HEX)= D0:E2:D7:05:29:E8</p>|
|30|El RSSI de la dirección MAC 3, int8|int8|c9|<p>c9 es 0xC9 = -55(DEC), el tipo es int8</p><p>el RSSI = -55</p>|
|31|nivel de batería|uint8|57|<p>57 es 0x57 = 87(DEC)</p><p>El nivel de batería es 87%</p>|

### Paquete de Código de Error-0x0D

El paquete ID 0x0D se utiliza para cargar el código de error.

**La carga útil sin procesar:**

0D00000001

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|0D|0D es el ID del paquete.|
|2~5|Código de error|uint32|00000001|<p>0x00000001: Falló la adquisición de tiempo UTC</p><p>0x00000002: Almanaque demasiado antiguo</p><p>0x00000003: Error de Doppler</p>|

### Paquete de Estado de Posicionamiento y Sensor-0x11

El ID 0x11 se utiliza para cargar el estado de posicionamiento, datos del sensor y batería.

**La carga útil sin procesar:**

110100000064a763a0014100002f

|**Byte**|**Valor**|**Tipo**|**Datos Sin Procesar**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|11|11 es el ID del paquete.|
|2|Estado de posicionamiento|uint8|01|<p>00: Posicionamiento exitoso</p><p>01: El escaneo GNSS agotó el tiempo de espera y falló al obtener la ubicación.</p><p>02: El escaneo Wi-Fi agotó el tiempo de espera y falló al obtener la ubicación.</p><p>03: El escaneo Wi-Fi + GNSS agotó el tiempo de espera y falló al obtener la ubicación.</p><p>04: El escaneo GNSS + Wi-Fi agotó el tiempo de espera y falló al obtener la ubicación.</p><p>05: El escaneo Bluetooth agotó el tiempo de espera y falló al obtener la ubicación.</p><p>06: El escaneo Bluetooth + Wi-Fi agotó el tiempo de espera y falló al obtener la ubicación.</p><p>07: El escaneo Bluetooth + GNSS agotó el tiempo de espera y falló al obtener la ubicación.</p><p>08: El escaneo Bluetooth + Wi-Fi + GNSS agotó el tiempo de espera y falló al obtener la ubicación.</p><p>09: El Servidor de Ubicación falló al analizar la ubicación GNSS.</p><p>0A: El Servidor de Ubicación falló al analizar la ubicación Wi-Fi.</p><p>0B: El Servidor de Ubicación falló al analizar la ubicación Bluetooth.</p><p>0C: Falló al analizar la ubicación GNSS debido a la pobre precisión.</p><p>0D: Falló la sincronización de tiempo.</p><p>0E: Falló al obtener posicionamiento debido al Almanaque antiguo.</p>|
|3～5|Estado del evento|uint24|000000|<p>000000 es 0x000000, 0x0000XX está reservado y 0x00 es el estado del evento. Este byte tiene 8 bits, cada uno representando un evento.</p><p>Bit1: Evento de inicio de movimiento.</p><p>Bit2: Evento de fin de movimiento.</p><p>Bit3: Evento de inmovilidad.</p><p>Bit4: Evento de choque.</p><p>Bit5: Evento de temperatura.</p><p>Bit6: Evento de luz.</p><p>Bit7: Evento SOS.</p><p>Bit8: Evento de presionar una vez.</p><p></p><p>Convertir a hexadecimal:</p><p>0x000000: sin evento</p><p>0x000001: Evento de inicio de movimiento.</p><p>0x000002: Evento de fin de movimiento.</p><p>0x000004: Evento de inmovilidad.</p><p>0x000008: Evento de choque.</p><p>0x000010: Evento de temperatura.</p><p>0x000020: Evento de luz.</p><p>0x000040: Evento SOS.</p><p>0x000080: Evento de presionar una vez.</p>|
|6～9|Marca de Tiempo UTC|uint32|64a763a0|<p>64a763a0 es 0x64a763a0 = 1688691616 (DEC) segundos.</p><p>Convertirlo a Hora de Beijing: 2023-07-07 09:00:16</p>|
|10～11|Temperatura|int16|0141|0141 es 0x0141 = 321(DEC), temperatura=321/10=32.1℃|
|12～13|Luz|uint16|0000|0000 es 0x0000 = 0(DEC) minutos, la luz=0=0%|
|14|Nivel de batería|uint8|2F|<p>2F es 0x2F = 47(DEC)</p><p>El nivel de batería es 47%</p>|

## Paquete de Enlace Descendente, FPort=5

El rastreador soporta LoRaWAN para enviar algunos comandos de enlace descendente para ajustar parámetros. Si el dispositivo está hibernado, el comando de enlace descendente toma efecto la próxima vez que el dispositivo se despierte para subir datos.

**Nota: FPort=5**

### Configuración del Modo SOS -0x80

|0x80|Byte2|
| - | :- |
|ID|<p>Modo SOS</p><p>0: modo único</p><p>1: modo continuo</p>|

8000: configurar SOS a modo único.

8001: configurar SOS a modo continuo.

### Configuración del Intervalo de Enlace Ascendente -0x81

|0x81|Byte2~3|Byte4~5|Byte6~7|
| - | :- | :- | :- |
|ID|<p>Intervalo de enlace ascendente de latido</p><p>0000: Mantener configuración actual</p><p>Unidad: minutos</p>|<p>Intervalo de enlace ascendente en modo periódico</p><p>0000: Mantener configuración actual</p><p>Unidad: minutos </p>|<p>Intervalo de enlace ascendente en modo evento</p><p>0000: Mantener configuración actual</p><p>Unidad: minutos</p>|

**Ejemplo**: establecer el intervalo del modo periódico a 30 minutos

Comando: 810000001E0000

### Abrir el zumbador -0x82

Después de enviar este comando, se activará un tono de alarma del zumbador después de que el dispositivo se despierte y continuará sonando durante 1 minuto.

|0x82|Byte2|
| - | :- |
|ID|<p>Abrir el zumbador.</p><p>00: cerrar</p><p>01: abrir</p>|

8200: cerrar el zumbador<br/>
8201: abrir el zumbador<br/>

### Configurar el Modo de Trabajo -0x83

|0x83|Byte2|
| - | :- |
|ID|<p>Abrir el zumbador.</p><p>00: modo en espera</p><p>01: modo periódico</p><p>02: modo de evento</p>|

8300: establecer modo de trabajo a modo de espera<br/>
8301: establecer modo de trabajo a modo periódico <br/>
8302: establecer modo de trabajo a modo de evento

### Configuración del Modo de Trabajo -0x84

|0x84|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|habilitar evento de movimiento|umbral de movimiento de 3 ejes|intervalo de inicio de movimiento|habilitar evento de inmovilidad|tiempo de espera de inmovilidad|

|Byte10|Byte11~12|Byte13|Byte14~15|Byte16~17|Byte18~19|
| - | - | - | - | :- | :- |
|habilitar evento de impacto|umbral de impacto de 3 ejes|habilitar evento de temperatura|intervalo de enlace ascendente de evento de temperatura|intervalo de muestreo de temperatura|umbral máximo de temperatura|

|Byte20~21|Byte22|Byte23|Byte24~25|Byte26~27|Byte28~29|
| - | - | - | - | :- | :- |
|Umbral mínimo de temperatura|Tipo de advertencia de temperatura|Habilitar evento de luz|intervalo de enlace ascendente de evento de luz|intervalo de muestreo de luz|umbral máximo de luz|

|Byte30~31|Byte32|
| - | - |
|umbral mínimo de luz|tipo de advertencia de luz|

**El comando:**

8400001e000500016801012c000005001e025800000000000500010064000000

|**Byte**|**Valor**|**Tipo**|**Datos en Bruto**|**Descripción**|
| - | - | - | - | - |
|1|ID de Trama|uint8|84|84 es el ID del paquete.|
|2|Habilitar evento de movimiento|uint8|00|<p>00 significa deshabilitar modo de Evento.</p><p>00: deshabilitar modo de Evento.</p><p>01: habilitar modo de Evento.</p>|
|3~4|Umbral de movimiento de 3 ejes|uint16|001e|<p>001e es 0x001E=30(DEC) mg</p><p>Cuando la aceleración excede 30mg, determina que el dispositivo está en movimiento, cuando está 2 minutos por debajo de este valor, determina que el dispositivo está inmóvil.</p>|
|5~6|Intervalo de inicio de movimiento|uint16|0005|0005 es 0x0005 = 5(DEC), cuando el dispositivo está en movimiento, el intervalo es de 5 minutos.|
|7|Habilitar evento de inmovilidad|uint8|00|<p>00 significa deshabilitar evento de inmovilidad.</p><p>00: deshabilitar evento de inmovilidad.</p><p>01: habilitar evento de inmovilidad.</p>|
|8~9|Tiempo de espera de inmovilidad|uint16|0168|0168 es 0x0168 = 360(DEC), cuando el dispositivo está estacionario en una ubicación por más de 360 minutos, se activa un evento de tiempo de espera de inmovilidad.|
|10|Habilitar evento de impacto|uint8|01|<p>01 significa habilitar evento de impacto.</p><p>00: deshabilitar evento de impacto.</p><p>01: habilitar evento de impacto.</p>|
|11~12|Umbral de impacto de 3 ejes|uint16|012c|<p>012c es 0x012C=300(DEC) mg</p><p>Cuando la aceleración excede 300mg, se activa el evento de impacto.</p>|
|13|Habilitar evento de temperatura|uint8|00|<p>00 significa habilitar evento de impacto.</p><p>00: deshabilitar evento de impacto.</p><p>01: habilitar evento de impacto.</p>|
|14~15|Intervalo de enlace ascendente de evento de temperatura|uint16|0005|0005 es 0x0005 = 5(DEC), cuando la temperatura excede el umbral, la ubicación y los datos del sensor se cargarán cada 5 minutos.|
|16~17|Intervalo de muestreo de temperatura|uint16|001e|<p>001e es 0x001E=30(DEC) segundos</p><p>La temperatura se detecta cada 30 segundos. Cuando se activa el umbral, cargar ubicación y datos del sensor.</p>|
|18~19|Umbral máximo de temperatura|int16|0258|<p>0258 es 0x0258 = 600(DEC),</p><p>Umbral máximo =600/10=60.0 ℃</p>|
|20~21|Umbral mínimo de temperatura|int16|0000|<p>0000 es 0x0000 = 0(DEC), </p><p>Umbral mínimo=0/10=0.0 ℃</p>|
|22|Regla de umbral de temperatura|uint8|00|<p>00 significa cuando temperatura ≤ umbral mínimo, el dispositivo cargará ubicación y evento de temperatura.</p><p>00: temp ≤ umbral mínimo</p><p>01: temp ≥ umbral máximo</p><p>02: temp ≤ umbral mínimo y temp ≥ umbral máximo</p><p>03: umbral mínimo≤ temp ≤umbral máximo</p>|
|23|Habilitar evento de luz|uint8|00|<p>00 significa deshabilitar evento de luz.</p><p>00: deshabilitar evento de luz.</p><p>01: habilitar evento de luz.</p>|
|24~25|Intervalo de enlace ascendente de evento de luz|uint16|0005|0005 es 0x0005 = 5(DEC), cuando la luz excede el umbral, la ubicación y los datos del sensor se cargarán cada 5 minutos.|
|26~27|Intervalo de muestreo de luz|uint16|0001|<p>0001es 0x0001=1(DEC) segundos</p><p>La temperatura se detecta cada 1 segundos. Cuando se activa el umbral, cargar ubicación y datos del sensor.</p>|
|28~29|Umbral máximo de luz|uint16|0064|<p>0064 es 0x0064 = 100(DEC) %</p><p>Umbral máximo =100%</p>|
|30~31|Umbral mínimo de luz|uint16|0000|<p>0000 es 0x0000 = 0(DEC) %</p><p>Umbral mínimo=0%</p>|
|32|Tipo de advertencia de luz|uint8|00|<p>00 significa cuando luz ≤ umbral mínimo, el dispositivo cargará ubicación y evento de luz.</p><p>00: luz ≤ umbral mínimo</p><p>01: luz ≥ umbral máximo</p><p>02: luz ≤ umbral mínimo y luz ≥ umbral máximo</p><p>03: umbral mínimo≤ luz ≤umbral máximo</p>|

### Solicitar Ubicación -0x85

El rastreador de solicitudes inicia la ubicación y carga basándose en la configuración actual. Generalmente se usa en modo de espera.

|0x85|
| - |
|ID|

Ejemplo:

85: solicitar ubicación.

### Configurar Estrategia de Posicionamiento -0x86

|0x86|Byte2|
| - | :- |
|ID|<p>Estrategia de posicionamiento</p><p>00: Solo GNSS</p><p>01: Solo Wi-Fi</p><p>02: Wi-Fi+GNSS</p><p>03: GNSS + Wi-Fi</p><p>04: Solo Bluetooth</p><p>05: Bluetooth + Wi-Fi</p><p>06: Bluetooth + GNSS</p><p>07: Bluetooth + Wi-Fi + GNSS</p>|

Ejemplo:

8600: Establece la estrategia de posicionamiento en "Solo GNSS".

### Parámetros del Evento de Solicitud -0x87

|0x87|
| - |
|ID|

Ejemplo:

87: solicitar parámetros del evento.

### Paquete de Solicitud de Estado del Dispositivo -0x88

|0x88|
| - |
|ID|

Ejemplo:

88: solicitar paquete de Estado del Dispositivo (0x01 o 0x02).

### Reiniciar Dispositivo -0x89

|0x89|
| - |
|ID|

Ejemplo:

89: Después de enviar el comando, el dispositivo se reinicia y se une a la red nuevamente. Por favor, use este comando con precaución.

### Habilitar Sensor de Temperatura y Luz -0x8C

Habilita la recolección de datos y carga para el sensor de temperatura y luz.

|0x8C|Byte2|
| - | :- |
|ID|<p>Abrir el sensor de temperatura y luz.</p><p>00: Cerrar el sensor de temperatura y luz.</p><p>01: Abrir el sensor de temperatura y luz.</p>|

Ejemplo:

8C00: Cerrar el sensor de temperatura y luz.<br/>
8C01: Abrir el sensor de temperatura y luz.

### Habilitar Alarma SOS -0x8D

Habilitar el modo continuo SOS, cargar posicionamiento rápidamente, una vez por minuto, detener después de 30 veces consecutivas, acompañado de alarma sonora y luminosa.

Apagar SOS cerrando el comando o haciendo doble clic en la tecla.

|0x8D|Byte2|
| - | :- |
|ID|<p>Abrir el SOS.</p><p>00: Cerrar.</p><p>01: Abrir.</p>|

Ejemplo:

8D00: Cerrar la alarma SOS.<br/>
8D01: Abrir la alarma SOS.
