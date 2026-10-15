---
description: Formato de carga útil del rastreador SenseCAP T2000
title: Formato de carga útil
keywords:
  - Rastreador
  - SenseCAP
image: https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_T2000_Tracker/SenseCAP_T2000_Tracker_QuickStart.webp
slug: /t2000_payload_format
last_update:
  date: 3/12/2026
  author: Janet
createdAt: '2026-03-12'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/es/t2000_payload_format/
---

# Formato de carga útil

## Análisis de paquetes de subida

El protocolo de datos del rastreador proporciona diferentes paquetes para corresponder a distinta información, y el número de bytes de cada paquete puede variar. La estructura de la trama se muestra en la imagen siguiente. El contenido de la trama se envía en **orden de bytes big-endian**.

|ID de datos|Valor de datos|
| - | :- |
|1 byte|50 bytes (máx.)|

**Data ID**: Número de función.<br />
**Data Value**: Posición, datos de sensores y otra información.

### Paquete de encendido (0x27)

El paquete de encendido es enviado por el dispositivo inmediatamente después de arrancar. Contiene los parámetros de configuración actuales y el estado del dispositivo. El ID de trama es `0x27`, y la longitud total es de 46 bytes.

| 0x27 | Byte2 | Byte3~4 | Byte5~6 | Byte7 | Byte8 | Byte9~10 | Byte11~12 |
| :--: | :---: | :-----: | :-----: | :--: | :--: | :------: | :-------: |
| ID | Nivel de batería | Versión de software | Versión de hardware | Modo de trabajo | Estrategia de posicionamiento | Intervalo de latido | Intervalo de subida en modo periódico |

| Byte13~14 | Byte15 | Byte16 | Byte17 | Byte18 | Byte19~20 | Byte21~22 |
| :-------: | :----: | :----: | :----: | :----: | :-------: | :-------: |
| Intervalo de subida en modo de evento | Habilitar acelerómetro de 3 ejes | Habilitar alarma de desmontaje | Tiempo de espera de escaneo GNSS | Habilitar evento de movimiento | Umbral de movimiento de 3 ejes | Intervalo de subida en movimiento |

| Byte23 | Byte24~25 | Byte26 | Byte27~28 | Byte29 | Byte30 | Byte31~46 |
| :----: | :-------: | :----: | :-------: | :----: | :----: | :-------: |
| Habilitar evento de inmovilidad | Tiempo de espera de inmovilidad | Habilitar evento de impacto | Umbral de impacto de 3 ejes | Tiempo de espera de escaneo iBeacon (s) | Bytes válidos del filtro UUID | Filtro UUID (16 bytes) |

**Ejemplo de carga útil en bruto**

`27 56 0100 0101 01 08 02d0 003c 003c 00 01 3c 00 001e 0005 00 0168 00 012c 03 00 00000000000000000000000000000000`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 27 | 27 es el ID del paquete |
| 2 | Nivel de batería | uint8 | 56 | `0x56` = 86(DEC)<br /> El nivel de batería es 86% |
| 3~4 | Versión de software | uint16 | 0100 | `0x0100` = v1.0<br /> La versión de software es v1.0 |
| 5~6 | Versión de hardware | uint16 | 0101 | `0x0101` = v1.1<br /> La versión de hardware es v1.1 |
| 7 | Modo de trabajo | uint8 | 01 | 01 = Modo periódico<br />`00`: Modo de espera<br />`01`: Modo periódico<br />`02`: Modo de evento |
| 8 | Estrategia de posicionamiento | uint8 | 00 | 07 = 0x07, significa que el dispositivo usa la estrategia de posicionamiento Bluetooth + Wi‑Fi + GNSS <br />`00`: Solo GNSS<br />`01`: Solo Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Solo Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 9~10 | Intervalo de latido | uint16 | 02d0 | `0x02D0` = 720 minutos |
| 11~12 | Intervalo de subida en modo periódico | uint16 | 003c | `0x003C` = 60 minutos |
| 13~14 | Intervalo de subida en modo de evento | uint16 | 003c | `0x003C` = 60 minutos |
| 15 | Habilitar acelerómetro de 3 ejes | uint8 | 00 | `00`: Deshabilitar<br />`01`: Habilitar |
| 16 | Habilitar alarma de desmontaje | uint8 | 01 | `00`: Deshabilitar<br />`01`: Habilitar |
| 17 | Tiempo de espera de escaneo GNSS | uint8 | 3c | `0x3C` = 60 segundos |
| 18 | Habilitar evento de movimiento | uint8 | 00 | `00`: Deshabilitar<br />`01`: Habilitar |
| 19~20 | Umbral de movimiento de 3 ejes | uint16 | 001e | `0x001e` = 30 mg |
| 21~22 | Intervalo de subida en movimiento | uint16 | 0005 | `0x05` = 5 minutos |
| 23 | Habilitar evento de inmovilidad | uint8 | 00 | `0x00`: Deshabilitar<br />`0x01`: Habilitar |
| 24~25 | Tiempo de espera de inmovilidad | uint16 | 0168 | `0x0168` = 360 minutos |
| 26 | Habilitar evento de impacto | uint8 | 00 | `00`: Deshabilitar<br />`01`: Habilitar |
| 27~28 | Umbral de impacto de 3 ejes | uint16 | 012c | `0x012c` = 300 mg |
| 29 | Tiempo de espera de escaneo iBeacon (s) | uint8 | 03 | `0x03` = 3 segundos |
| 30 | Bytes válidos del filtro UUID | uint8 | 00 | Número de bytes válidos en el filtro UUID (0–16) |
| 31~46 | Filtro UUID | 16 bytes | 0000000000000000<br />0000000000000000 | Filtro UUID Bluetooth de 16 bytes. Solo los primeros N bytes (definidos por el byte30) son significativos |

### Paquete de modo periódico (0x28)

El paquete de parámetros de modo periódico contiene la configuración actual del modo de trabajo. El ID de trama es `0x28`, y la longitud total es de 30 bytes.

| 0x28 | Byte2 | Byte3 | Byte4~5 | Byte6~7 | Byte8~9 | Byte10 | Byte11 | Byte12 | Byte13 | Byte14 | Byte15~30 |
| :--: | :---: | :---: | :-----: | :-----: | :-----: | :----: | :----: | :----: | :----: | :----: | :-------: |
| ID | Modo de trabajo | Estrategia de posicionamiento | Intervalo de latido | Intervalo de subida | Intervalo de subida en modo de evento | Habilitar acelerómetro de 3 ejes | Habilitar alarma de desmontaje | Tiempo de espera de escaneo GNSS | Tiempo de espera de escaneo iBeacon | Bytes válidos del filtro UUID | Filtro UUID (16 bytes) |

**Ejemplo de carga útil en bruto**

`28 01 07 02d0 003c 003c 01 00 3c 0a 10 00000000000000000000000000000000`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 28 | 28 es el ID del paquete |
| 2 | Modo de trabajo | uint8 | 01 | 01 = Modo periódico<br />`00`: Modo de espera<br />`01`: Modo periódico<br />`02`: Modo de evento |
| 3 | Estrategia de posicionamiento | uint8 | 07 | 07 = 0x07, significa que el dispositivo usa la estrategia de posicionamiento Bluetooth + Wi‑Fi + GNSS <br />`00`: Solo GNSS<br />`01`: Solo Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Solo Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 4~5 | Intervalo de latido | uint16 | 02d0 | `0x02D0` = 720 minutos |
| 6~7 | Intervalo de subida | uint16 | 003c | `0x003C` = 60 minutos |
| 8~9 | Intervalo de subida en modo de evento | uint16 | 003c | `0x003C` = 60 minutos <br />Cuando no se dispara ningún evento, los datos se subirán cada 60 minutos.<br />|
| 10 | Habilitar acelerómetro de 3 ejes | uint8 | 01 | `00`: Deshabilitar<br />`01`: Habilitar |
| 11 | Habilitar alarma de desmontaje | uint8 | 00 | `00`: Deshabilitar<br />`01`: Habilitar |
| 12 | Tiempo de espera de escaneo GNSS | uint8 | 3c | `0x3C` = 60 segundos |
| 13 | Tiempo de espera de escaneo iBeacon | uint8 | 0a | `0x0A` = 10 segundos |
| 14 | Bytes válidos del filtro UUID | uint8 | 10 | Número de bytes válidos en el filtro UUID (0–16) |
| 15~30 | Filtro UUID | 16 bytes | 0000000000000000<br />0000000000000000 | Filtro UUID Bluetooth de 16 bytes. Solo los primeros N bytes (definidos por el byte14) son significativos |

### Paquete de modo de evento (0x29)

El paquete de parámetros de evento contiene la configuración de los eventos de movimiento, inmovilidad e impacto. El ID de trama es `0x29`, y la longitud total es de 12 bytes.

| 0x29 | Byte2 | Byte3~4 | Byte5~6 | Byte7 | Byte8~9 | Byte10 | Byte11~12 |
| :--: | :---: | :-----: | :-----: | :--: | :-----: | :----: | :-------: |
| ID | Habilitar evento de movimiento | Umbral de movimiento de 3 ejes | Intervalo de subida en movimiento | Habilitar evento de inmovilidad | Tiempo de espera de inmovilidad | Habilitar evento de impacto | Umbral de impacto de 3 ejes |

**Ejemplo de carga útil en bruto**

`29 01 0064 001e 01 012c 00 012c`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 29 | 29 es el ID del paquete |
| 2 | Habilitar evento de movimiento | uint8 | 01 | `00`: Deshabilitar<br />`01`: Habilitar |
| 3~4 | Umbral de movimiento de 3 ejes | uint16 | 0064 | `0x0064` = 100 mg |
| 5~6 | Intervalo de subida en movimiento | uint16 | 001e | `0x001E` = 30 minutos |
| 7 | Habilitar evento de inmovilidad | uint8 | 01 | `0x00`: Deshabilitar<br />`0x01`: Habilitar |
| 8~9 | Tiempo de espera de inmovilidad | uint16 | 012c | `0x012C` = 300 minutos |
| 10 | Habilitar evento de impacto | uint8 | 00 | `0x00`: Deshabilitar<br />`0x01`: Habilitar |
| 11~12 | Umbral de impacto de 3 ejes | uint16 | 0000 | `0x012c` = 300 mg |

### Paquete de latido (0x2A)

El paquete de latido es enviado periódicamente por el dispositivo para informar de su estado actual. Contiene información básica del dispositivo y estados de los sensores. El ID de trama es `0x2A`, y la longitud total es de 6 bytes.

| 0x2A | Byte2 | Byte3 | Byte4 | Byte5 | Byte6 |
| :--: | :---: | :---: | :---: | :---: | :---: |
| ID | Nivel de batería | Modo de trabajo | Estrategia de posicionamiento | Habilitar acelerómetro de 3 ejes | Habilitar alarma de desmontaje |

**Ejemplo de carga útil en bruto**

`2a 56 01 07 01 00`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 2A | 2A es el ID del paquete |
| 2 | Nivel de batería | uint8 | 56 | `0x56` = 86(DEC)<br /> El nivel de batería es 86% |
| 3 | Modo de trabajo | uint8 | 01 | 01 = Modo periódico<br />`00`: Modo de espera<br />`01`: Modo periódico<br />`02`: Modo de evento |
| 4 | Estrategia de posicionamiento | uint8 | 07 | 07 = 0x07, significa que el dispositivo usa la estrategia de posicionamiento Bluetooth + Wi‑Fi + GNSS <br />`00`: Solo GNSS<br />`01`: Solo Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Solo Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
| 5 | Habilitar acelerómetro de 3 ejes | uint8 | 01 | `00`: Deshabilitar<br />`01`: Habilitar |
| 6 | Habilitar alarma de desmontaje | uint8 | 00 | `00`: Deshabilitar<br />`01`: Habilitar |

### Paquete de datos de ubicación GNSS (acelerómetro activado, 0x2B)

El paquete de datos de ubicación GPS contiene datos de posicionamiento GNSS junto con información del acelerómetro y de la batería. El ID de trama es `0x2B`, y la longitud total es de 23 bytes.

| 0x2B | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15~18 | Byte19~22 | Byte23 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :------: | :------: | :---: |
| ID | Estado de evento | ID de movimiento | Marca de tiempo UTC | Acelerómetro X | Acelerómetro Y | Acelerómetro Z | Longitud | Latitud | Nivel de batería |

**Ejemplo de carga útil en bruto**

`2b 0100 00 694b3dc6 032f fffe 0241 06ca5098 01587ee4 62`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 2B | 2B es el ID del paquete |
| 2~3 | Estado de evento | uint16 | 0100 | `0x0100` = evento de desmontaje<br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desmontaje <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desmontaje |
| 4 | ID de movimiento | uint8 | 00 | `0`: No necesita registrarse como un movimiento específico.<br />`1~255`: Datos de posicionamiento reportados bajo el mismo estado de movimiento (el mismo ID se refiere al mismo movimiento) |
| 5~8 | Marca de tiempo UTC | uint32 | 694b3dc6 | `0x694B3DC6` = 1766538694(DEC) segundos<br /><br />Convierte esto a hora UTC:<br /> 2025-12-24 01:11:34 |
| 9~10 | Acelerómetro X | int16 | 032f | `0x032F` = 815 mg |
| 11~12 | Acelerómetro Y | int16 | fffe | `0xFFFE` = -2 mg |
| 13~14 | Acelerómetro Z | int16 | 0241 | `0x0241` = 577 mg |
| 15~18 | Longitud | uint32 | 06ca5098 | `0x06CA5098` = 113,922,200 → 113.922200° |
| 19~22 | Latitud | uint32 | 01587ee4 | `0x01587EE4` = 22,576,868 → 22.576868° |
| 23 | Nivel de batería | uint8 | 62 | `0x62` = 98% |

### Paquete de datos de ubicación Wi‑Fi (acelerómetro activado, 0x2C)

El paquete de ubicación Wi‑Fi contiene resultados de escaneo Wi‑Fi junto con información del acelerómetro y de la batería. El ID de trama es `0x2C`, y la longitud total es dinámica según el número de puntos de acceso Wi‑Fi escaneados (23 + (n-1) * 7 bytes, donde n es el número de pares MAC‑RSSI).

| 0x2C | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 | Byte16 | Byte17+(n-1)*7 ~ Byte23+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :---: | :---: | :---------------------------: |
| ID | Estado de evento | ID de movimiento | Marca de tiempo UTC | Acelerómetro X | Acelerómetro Y | Acelerómetro Z | Nivel de batería | Recuento MAC‑RSSI (n) | Pares MAC‑RSSI (n) |

**Formato MAC‑RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Dirección MAC (6 bytes) | RSSI (int8) |

**Ejemplo de carga útil en bruto**

`2c 0000 00 69685f82 0004 0015 03e5 64 05 107c61841bf8 e4 3447d468f627 e1 a4ba70bc229d d3 9483c46d5dfc d2 4c10d567b467 d0`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 2C | 2C es el ID del paquete |
| 2~3 | Estado de evento | uint16 | 0000 |`0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado|
| 4 | ID de movimiento | uint8 | 00 | `0`: No necesita registrarse como un movimiento específico.<br />`1~255`: Datos de posicionamiento reportados bajo el mismo estado de movimiento (el mismo ID se refiere al mismo movimiento) |
| 5~8 | Marca de tiempo UTC | uint32 | 69685f82 | `0x69685F82` = 1768447874(DEC) segundos<br /><br />Convierte a hora UTC:<br /> 2026-01-15 03:31:14 |
| 9~10 | Acelerómetro X | int16 | 0004 | `0x0004` = 4 mg |
| 11~12 | Acelerómetro Y | int16 | 0015 | `0x0015` = 21 mg |
| 13~14 | Acelerómetro Z | int16 | 03e5 | `0x03E5` = 997 mg |
| 15 | Nivel de batería | uint8 | 64 | `0x64` = 100% |
| 16 | Recuento MAC‑RSSI (n) | uint8 | 05 | Número de puntos de acceso Wi‑Fi detectados (n = 5) |
| 17~23 | Par MAC‑RSSI 1 | 7 bytes | 107c61841bf8 e4 | MAC: `10:7C:61:84:1B:F8`, RSSI: `0xE4` = -28 (int8) |
| 24~30 | Par MAC‑RSSI 2 | 7 bytes | 3447d468f627 e1 | MAC: `34:47:D4:68:F6:27`, RSSI: `0xE1` = -31 (int8) |
| 31~37 | Par MAC‑RSSI 3 | 7 bytes | a4ba70bc229d d3 | MAC: `A4:BA:70:BC:22:9D`, RSSI: `0xD3` = -45 (int8) |
| 38~44 | Par MAC‑RSSI 4 | 7 bytes | 9483c46d5dfc d2 | MAC: `94:83:C4:6D:5D:FC`, RSSI: `0xD2` = -46 (int8) |
| 45~51 | Par MAC‑RSSI 5 | 7 bytes | 4c10d567b467 d0 | MAC: `4C:10:D5:67:B4:67`, RSSI: `0xD0` = -48 (int8) |

### Paquete de datos de ubicación BLE (acelerómetro activado, 0x2D)

El paquete de ubicación BLE contiene resultados de escaneo Bluetooth junto con información del acelerómetro y de la batería. El ID de trama es `0x2D`, y la longitud total es dinámica según el número de dispositivos Bluetooth escaneados (23 + (n-1) * 7 bytes, donde n es el número de pares MAC‑RSSI, máximo n = 5).

| 0x2D | Byte2~3 | Byte4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 | Byte16 | Byte17+(n-1)*7 ~ Byte23+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :-------: | :---: | :---: | :---------------------------: |
| ID | Estado de evento | ID de movimiento | Marca de tiempo UTC | Acelerómetro X | Acelerómetro Y | Acelerómetro Z | Nivel de batería | Recuento MAC‑RSSI (n) | Pares MAC‑RSSI (n) |

**Formato MAC‑RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Dirección MAC (6 bytes) | RSSI (int8) |

**Ejemplo de carga útil en bruto**

`2d 0000 00 69686032 fff9 0015 03df 64 05 c30000564b3b ce c20303003f00 ce 588c81a0fbf2 cc c20303003f03 cb c30000564af2 c7`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 2D | 2D es el ID del paquete |
| 2~3 | Estado de evento | uint16 | 0000 |`0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado|
| 4 | ID de movimiento | uint8 | 00 | `0`: No necesita registrarse como un movimiento específico.<br />`1~255`: Datos de posicionamiento reportados bajo el mismo estado de movimiento (el mismo ID se refiere al mismo movimiento) |
| 5~8 | Marca de tiempo UTC | uint32 | 69686032 | `0x69686032` = 1768448050(DEC) segundos<br /><br />Convierte a hora UTC:<br /> 2026-01-15 03:34:10 |
| 9~10 | Acelerómetro X | int16 | fff9 | `0xFFF9` = -7 mg |
| 11~12 | Acelerómetro Y | int16 | 0015 | `0x0015` = 21 mg |
| 13~14 | Acelerómetro Z | int16 | 03df | `0x03DF` = 991 mg |
| 15 | Nivel de batería | uint8 | 64 | `0x64` = 100% |
| 16 | Recuento MAC‑RSSI (n) | uint8 | 05 | Número de dispositivos Bluetooth detectados (n = 5, máximo 5) |
| 17~23 | Par MAC‑RSSI 1 | 7 bytes | c30000564b3b ce | MAC: `C3:00:00:56:4B:3B`, RSSI: `0xCE` = -50 (int8) |
| 24~30 | Par MAC‑RSSI 2 | 7 bytes | c20303003f00 ce | MAC: `C2:03:03:00:3F:00`, RSSI: `0xCE` = -50 (int8) |
| 31~37 | Par MAC‑RSSI 3 | 7 bytes | 588c81a0fbf2 cc | MAC: `58:8C:81:A0:FB:F2`, RSSI: `0xCC` = -52 (int8) |
| 38~44 | Par MAC‑RSSI 4 | 7 bytes | c20303003f03 cb | MAC: `C2:03:03:00:3F:03`, RSSI: `0xCB` = -53 (int8) |
| 45~51 | Par MAC‑RSSI 5 | 7 bytes | c30000564af2 c7 | MAC: `C3:00:00:56:4A:F2`, RSSI: `0xC7` = -57 (int8) |

### Paquete de datos de ubicación GNSS (acelerómetro desactivado, 0x2E)

El paquete de datos de ubicación GNSS contiene datos de posicionamiento GPS junto con información de la batería. El ID de trama es `0x2E`, y la longitud total es de 17 bytes.

| 0x2E | Byte2~3 | Byte4 | Byte5~8 | Byte9~12 | Byte13~16 | Byte17 |
| :--: | :-----: | :--: | :-----: | :------: | :-------: | :----: |
| ID | Estado de evento | ID de movimiento | Marca de tiempo UTC | Longitud | Latitud | Nivel de batería |

**Ejemplo de carga útil en bruto**

`2e 0100 01 64f1a2b3 06ca5098 01587ee4 62`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 2E | 2E es el ID del paquete |
| 2~3 | Estado de evento | uint16 | 0000 |`0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado|
| 4 | ID de movimiento | uint8 | 00 | `0`: No necesita registrarse como un movimiento específico.<br />`1~255`: Datos de posicionamiento reportados bajo el mismo estado de movimiento (el mismo ID se refiere al mismo movimiento) |
| 5~8 | Marca de tiempo UTC | uint32 | 64f1a2b3 | `0x64f1a2b3` = 1693557427(DEC) segundos<br /><br />Convierte a hora UTC:<br /> 2023-09-01 08:37:07 |
| 9~12 | Longitud | uint32 | 06ca5098 | `0x06CA5098` = 113,922,200 → 113.922200° |
| 13~16 | Latitud | uint32 | 01587ee4 | `0x01587EE4` = 22,576,868 → 22.576868° |
| 17 | Nivel de batería | uint8 | 62 | `0x62` = 98% |

### Paquete de datos de ubicación Wi‑Fi (acelerómetro desactivado, 0x2F)

El paquete de datos de ubicación Wi‑Fi contiene resultados de escaneo Wi‑Fi junto con información de la batería. El ID de trama es `0x2F`, y la longitud total es dinámica según el número de puntos de acceso Wi‑Fi escaneados (17 + (n-1) * 7 bytes, donde n es el número de pares MAC‑RSSI, máximo n = 5).

| 0x2F | Byte2~3 | Byte4 | Byte5~8 | Byte9 | Byte10 | Byte11+(n-1)*7 ~ Byte16+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :---: | :----: | :---------------------------: |
| ID | Estado de evento | ID de movimiento | Marca de tiempo UTC | Nivel de batería | Recuento MAC‑RSSI (n) | Pares MAC‑RSSI (n) |

**Formato MAC‑RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Dirección MAC (6 bytes) | RSSI (int8) |

**Ejemplo de carga útil en bruto**

`2f 0000 00 69685f82 64 05 107c61841bf8 e4 3447d468f627 e1 a4ba70bc229d d3 9483c46d5dfc d2 4c10d567b467 d0`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 2F | 2F es el ID del paquete |
| 2~3 | Estado de evento | uint16 | 0000 |`0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado|
| 4 | ID de movimiento | uint8 | 00 | `0`: No necesita registrarse como un movimiento específico.<br />`1~255`: Datos de posicionamiento reportados bajo el mismo estado de movimiento (el mismo ID se refiere al mismo movimiento) |
| 5~8 | Marca de tiempo UTC | uint32 | 69685f82 | `0x69685F82` = 1768447874(DEC) segundos<br /><br />Convierte a hora UTC:<br /> 2026-01-15 03:31:14 |
| 9 | Nivel de batería | uint8 | 64 | `0x64` = 100% |
| 10 | Recuento MAC‑RSSI (n) | uint8 | 05 | Número de puntos de acceso Wi‑Fi detectados (n = 5, máximo 5) |
| 11~17 | Par MAC‑RSSI 1 | 7 bytes | 107c61841bf8 e4 | MAC: `10:7C:61:84:1B:F8`,<br /> RSSI: `0xE4` = -28 (int8) |
| 18~24 | Par MAC‑RSSI 2 | 7 bytes | 3447d468f627 e1 | MAC: `34:47:D4:68:F6:27`,<br /> RSSI: `0xE1` = -31 (int8) |
| 25~31 | Par MAC‑RSSI 3 | 7 bytes | a4ba70bc229d d3 | MAC: `A4:BA:70:BC:22:9D`,<br /> RSSI: `0xD3` = -45 (int8) |
| 32~38 | Par MAC‑RSSI 4 | 7 bytes | 9483c46d5dfc d2 | MAC: `94:83:C4:6D:5D:FC`,<br /> RSSI: `0xD2` = -46 (int8) |
| 39~45 | Par MAC‑RSSI 5 | 7 bytes | 4c10d567b467 d0 | MAC: `4C:10:D5:67:B4:67`,<br /> RSSI: `0xD0` = -48 (int8) |

### Paquete de datos de ubicación BLE (acelerómetro desactivado, 0x30)

El paquete de datos de ubicación BLE contiene resultados de escaneo Bluetooth junto con información de la batería. El ID de trama es `0x30`, y la longitud total es dinámica según el número de dispositivos Bluetooth escaneados (17 + (n-1) * 7 bytes, donde n es el número de pares MAC-RSSI, máximo n = 5).

| 0x30 | Byte2~3 | Byte4 | Byte5~8 | Byte9 | Byte10 | Byte11+(n-1)*7 ~ Byte16+(n-1)*7 |
| :--: | :-----: | :--: | :-----: | :---: | :----: | :---------------------------: |
| ID | Estado de evento | ID de movimiento | Marca de tiempo UTC | Nivel de batería | Recuento MAC-RSSI (n) | Pares MAC-RSSI (n) |

**Formato MAC-RSSI**

| Byte0~5 | Byte6 |
| :-----: | :---: |
| Dirección MAC (6 bytes) | RSSI (int8) |

**Ejemplo de carga útil en bruto**

`30 0000 00 69686032 64 05 c30000564b3b ce c20303003f00 ce 588c81a0fbf2 cc c20303003f03 cb c30000564af2 c7`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 30 | 30 es el ID del paquete |
| 2~3 | Estado de evento | uint16 | 0000 |`0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado|
| 4 | ID de movimiento | uint8 | 00 | `0`: No necesita registrarse como un movimiento específico.<br />`1~255`: Datos de posicionamiento reportados bajo el mismo estado de movimiento (el mismo ID se refiere al mismo movimiento) |
| 5~8 | Marca de tiempo UTC | uint32 | 69686032 | `0x69686032` = 1768448050(DEC) segundos<br /><br />Convierte esto a hora UTC:<br /> 2026-01-15 03:34:10 |
| 9 | Nivel de batería | uint8 | 64 | `0x64` = 100% |
| 10 | Recuento MAC-RSSI (n) | uint8 | 05 | Número de dispositivos Bluetooth detectados (n = 5, máximo 5) |
| 11~17 | Par MAC-RSSI 1 | 7 bytes | c30000564b3b ce | MAC: `C3:00:00:56:4B:3B`,<br /> RSSI: `0xCE` = -50 (int8) |
| 18~24 | Par MAC-RSSI 2 | 7 bytes | c20303003f00 ce | MAC: `C2:03:03:00:3F:00`,<br /> RSSI: `0xCE` = -50 (int8) |
| 25~31 | Par MAC-RSSI 3 | 7 bytes | 588c81a0fbf2 cc | MAC: `58:8C:81:A0:FB:F2`,<br /> RSSI: `0xCC` = -52 (int8) |
| 32~38 | Par MAC-RSSI 4 | 7 bytes | c20303003f03 cb | MAC: `C2:03:03:00:3F:03`,<br /> RSSI: `0xCB` = -53 (int8) |
| 39~45 | Par MAC-RSSI 5 | 7 bytes | c30000564af2 c7 | MAC: `C3:00:00:56:4A:F2`,<br /> RSSI: `0xC7` = -57 (int8) |

### Paquete de estado de posicionamiento con acelerómetro (0x31)

El paquete de estado de posicionamiento contiene el estado de posicionamiento junto con datos del acelerómetro, estado de evento e información de la batería. El ID de trama es `0x31`, y la longitud total es de 15 bytes.

| 0x31 | Byte2 | Byte3~4 | Byte5~8 | Byte9~10 | Byte11~12 | Byte13~14 | Byte15 |
| :--: | :---: | :-----: | :-----: | :------: | :-------: | :-------: | :---: |
| ID | Estado de posicionamiento | Estado de evento | Marca de tiempo UTC | Acelerómetro X | Acelerómetro Y | Acelerómetro Z | Nivel de batería |

**Ejemplo de carga útil en bruto**

`31 00 0100 694b3db0 003a 039d fe84 62`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 31 | 31 es el ID del paquete |
| 2 | Estado de posicionamiento | uint8 | 00 |`0x00`: localización correcta.<br />`0x01`: El escaneo GNSS agotó el tiempo de espera.<br />`0x02`: El escaneo Wi‑Fi agotó el tiempo de espera.<br />`0x03`: El escaneo Wi‑Fi + GNSS agotó el tiempo de espera.<br />`0x04`: El escaneo GNSS + Wi‑Fi agotó el tiempo de espera.<br />`0x05`: El escaneo Bluetooth agotó el tiempo de espera.<br />`0x06`: El escaneo Bluetooth + Wi‑Fi agotó el tiempo de espera.<br />`0x07`: El escaneo Bluetooth + GNSS agotó el tiempo de espera.<br />`0x08`: El escaneo Bluetooth + Wi‑Fi + GNSS agotó el tiempo de espera.<br />`0x09`: El servidor de localización no pudo analizar la ubicación GNSS.<br />`0x0A`: El servidor de localización no pudo analizar la ubicación Wi‑Fi.<br />`0x0B`: El servidor de localización no pudo analizar la ubicación Bluetooth.<br />`0x0C`: No se pudo analizar la ubicación debido a la baja precisión.<br />`0x0D`: Falló la sincronización de hora.<br />`0x0E`: Falló debido al Almanaque antiguo.<br />`0x0F`: El escaneo GNSS + Bluetooth agotó el tiempo de espera. |
| 3~4 | Estado de evento | uint16 | 0000 |`0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado |
| 5~8 | Marca de tiempo UTC | uint32 | 694B3DB0 | `0x694B3DB0` = 1766538672(DEC) segundos<br /><br />Convierte esto a hora UTC:<br /> 2025-12-24 01:11:12 |
| 9~10 | Acelerómetro X | int16 | 003a | `0x003A` = 58 mg |
| 11~12 | Acelerómetro Y | int16 | 039d | `0x039D` = 925 mg |
| 13~14 | Acelerómetro Z | int16 | fe84 | `0xFE84` = -380 mg |
| 15 | Nivel de batería | uint8 | 62 | `0x62` = 98% |

### Paquete de estado de posicionamiento (acelerómetro desactivado, 0x32)

El paquete de estado de posicionamiento contiene el estado de posicionamiento junto con el estado de evento y la información de la batería. El ID de trama es `0x32`, y la longitud total es de 9 bytes.

| 0x32 | Byte2 | Byte3~4 | Byte5~8 | Byte9 |
| :--: | :---: | :-----: | :-----: | :---: |
| ID | Estado de posicionamiento | Estado de evento | Marca de tiempo UTC | Nivel de batería |

**Ejemplo de carga útil en bruto**

`32 00 0100 694b3db0 62`

| Byte | Valor | Tipo | Datos en bruto | Descripción |
| :---: | :--- | :---: | :---: | :--- |
| 1 | ID de trama | uint8 | 32 | 32 es el ID del paquete |
| 2 | Estado de posicionamiento | uint8 | 00 |`0x00`: localización correcta.<br />`0x01`: El escaneo GNSS agotó el tiempo de espera.<br />`0x02`: El escaneo Wi‑Fi agotó el tiempo de espera.<br />`0x03`: El escaneo Wi‑Fi + GNSS agotó el tiempo de espera.<br />`0x04`: El escaneo GNSS + Wi‑Fi agotó el tiempo de espera.<br />`0x05`: El escaneo Bluetooth agotó el tiempo de espera.<br />`0x06`: El escaneo Bluetooth + Wi‑Fi agotó el tiempo de espera.<br />`0x07`: El escaneo Bluetooth + GNSS agotó el tiempo de espera.<br />`0x08`: El escaneo Bluetooth + Wi‑Fi + GNSS agotó el tiempo de espera.<br />`0x09`: El servidor de localización no pudo analizar la ubicación GNSS.<br />`0x0A`: El servidor de localización no pudo analizar la ubicación Wi‑Fi.<br />`0x0B`: El servidor de localización no pudo analizar la ubicación Bluetooth.<br />`0x0C`: No se pudo analizar la ubicación debido a la baja precisión.<br />`0x0D`: Falló la sincronización de hora.<br />`0x0E`: Falló debido al Almanaque antiguo.<br />`0x0F`: El escaneo GNSS + Bluetooth agotó el tiempo de espera. |
| 3~4 | Estado de evento | uint16 | 0100 | `0x0000` = No se han activado eventos <br />Bit 0: falso<br />Bit 1: Evento de inicio de movimiento<br />Bit 2: Evento de fin de movimiento<br />Bit 3: Evento de inmovilidad<br />Bit 4: Evento de impacto<br />Bit 5: Evento de temperatura <br />Bit 6: Evento de luz<br />Bit 7: Evento SOS<br />Bit 8: Evento de pulsación única<br />Bit 9: Evento de desensamblado <br /><br />Convertir a hexadecimal:<br />`0x0001`: Evento de inicio de movimiento<br />`0x0002`: Evento de fin de movimiento<br />`0x0004`: Evento de inmovilidad<br />`0x0008`: Evento de impacto<br />`0x0010`: Evento de temperatura<br />`0x0020`: Evento de luz<br />`0x0040`: Evento SOS<br />`0x0080`: Evento de pulsación única<br />`0x0100`: Evento de desensamblado |
| 5~8 | Marca de tiempo UTC | uint32 | 694B3DB0 | `0x694B3DB0` = 1766538672(DEC) segundos<br /><br />Convierte esto a hora UTC:<br /> 2025-12-24 01:11:12 |
| 9 | Nivel de batería | uint8 | 62 | `0x62` = 98% |

## Paquete de enlace descendente, FPort=5

El rastreador es compatible con LoRaWAN para enviar por enlace descendente algunos comandos para ajustar parámetros. Si el dispositivo está en hibernación, el comando de enlace descendente surtirá efecto la próxima vez que el dispositivo se despierte para subir datos. 

Debido a LoRaWAN Clase A, donde las ventanas de enlace descendente solo se abren después de un enlace ascendente, los comandos no son en tiempo real. Por ejemplo, si el intervalo de reporte se establece en 10 minutos, puede tardar hasta 10 minutos para que el dispositivo reciba el comando de enlace descendente durante su próxima ventana de transmisión.

**Nota: FPort=5**

### Paquete de solicitud de estado del dispositivo (0x8F)

|0x8F|
| - |
|ID|

Ejemplo:

8F: Solicita el último paquete de estado y ubicación del dispositivo.

### Configuración del modo de trabajo y estrategia de posicionamiento (0x90)

|0x90|Byte2|Byte3|Byte4~5|Byte6~7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Modo de trabajo|Estrategia de posicionamiento|Intervalo de latido|Intervalo de enlace ascendente en modo periódico|Intervalo de enlace ascendente en modo de evento|

|Byte10|Byte11|Byte12|Byte13|Byte14|Byte15~30|
| - | - | - | - | - | :- |
|Habilitar acelerómetro de 3 ejes|Habilitar alarma de desensamblado|Tiempo de espera de escaneo GNSS (s)|Tiempo de espera de escaneo iBeacon (s)|Byte válido de filtro UUID|Filtro UUID|

Nota:  
Unidad de Intervalo de latido / Intervalo de enlace ascendente en modo periódico / Intervalo de enlace ascendente en modo de evento: **minutos**

Ejemplo:

`90 01 01 02d0 0014 0005 01 01 1e 0a 10 00000000000000000000000000000000`


|**Byte**|**Valor**|**Tipo**|**Datos en bruto**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|90|90 es el ID del paquete|
|2|Modo de trabajo|uint8|01|01 = Modo periódico<br />`00`: Modo de espera<br />`01`: Modo periódico<br />`02`: Modo de evento|
|3|Estrategia de posicionamiento|uint8|01|`00`: Solo GNSS<br />`01`: Solo Wi‑Fi<br />`02`: Wi‑Fi + GNSS<br />`03`: GNSS + Wi‑Fi<br />`04`: Solo Bluetooth<br />`05`: Bluetooth + Wi‑Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi‑Fi + GNSS<br />`08`: GNSS + Bluetooth |
|4~5|Intervalo de latido | uint16 | 02d0 | `0x02D0` = 720 minutos|
|6~7|Intervalo de enlace ascendente en modo periódico|uint16|0014|`0x0014` = 20 minutos |
|8~9|Intervalo de enlace ascendente en modo de evento|uint16|0005|`0x0005` = 5 minutos<br />Cuando no se activa ningún evento, los datos se subirán cada 5 minutos.<br />|
|10|Habilitar acelerómetro de 3 ejes|uint8|01|`00`: Desactivar<br />`01`: Activar|
|11|Habilitar alarma de desensamblado|uint8|01|`00`: Desactivar<br />`01`: Activar|
|12|Tiempo de espera de escaneo GNSS|uint8|1E|`0x1E` = 30 segundos |
|13|Tiempo de espera de escaneo iBeacon|uint8|0A|`0x0A` = 10 segundos |
|14|Bytes válidos de filtro UUID|uint8|10| Número de bytes válidos en el filtro UUID (0–16)|
|15~30|Filtro UUID| 16 bytes | 0000000000000000<br />0000000000000000 | Filtro UUID Bluetooth de 16 bytes. Solo los primeros N bytes (definidos por el byte30) son significativos|


### Configuración del umbral del modo de evento (0x91)

|0x91|Byte2|Byte3~4|Byte5~6|Byte7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Habilitar evento de movimiento|Umbral de movimiento de 3 ejes|Intervalo de subida en movimiento|Habilitar evento de inmovilidad|Tiempo de espera de inmovilidad|

|Byte10|Byte11~12|
| - | :- |
|Habilitar evento de impacto|Umbral de impacto de 3 ejes|


Ejemplo:

`91 01 001e 0005 01 01 2c`

|**Byte**|**Valor**|**Tipo**|**Datos en bruto**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|91|91 es el ID del paquete|
|2|Habilitar evento de movimiento|uint8|01|`00`: Disable<br />`01`: Enable|
|3~4|Umbral de movimiento de 3 ejes|uint16|001e|`0x001E` = 30 mg<br />Cuando la aceleración supera 30 mg, el dispositivo determina que está en movimiento<br />|
|5~6|Intervalo de subida en movimiento|uint16|0005|`0x0005` = 5 minutes<br />Cuando se detecta movimiento, el intervalo de informe es de 5 minutos<br />|
|7|Habilitar evento de inmovilidad|uint8|01|`00`: Disable<br />`01`: Enable|
|8~9|Tiempo de espera de inmovilidad|uint16|012c|`0x012C` = 300 minutes<br />Si el dispositivo permanece inmóvil durante más de 300 minutos, se activará un evento de inmovilidad<br />|
|10|Habilitar evento de impacto|uint8|01|`00`: Disable<br />`01`: Enable|
|11~12|Umbral de impacto de 3 ejes|uint16|012c|`0x012C` = 300 mg<br />Cuando la aceleración supera 300 mg, se activará el evento de impacto<br />|

### Paquete de solicitud de estado del dispositivo (0x92)

|0x92|
| - |
|ID|

Ejemplo:

92: Forzar una fijación de ubicación GNSS.

### Configuración del modo de trabajo, estrategia de posicionamiento y umbral del modo de evento (0x97)

|0x97|Byte2|Byte3|Byte4~5|Byte6~7|Byte8~9|
| - | :- | :- | :- | :- | :- |
|ID|Modo de trabajo|Estrategia de posicionamiento|Intervalo de latido|Intervalo de subida en modo periódico|Intervalo de subida en modo de evento|

|Byte10|Byte11|Byte12|Byte13|Byte14|Byte15~30|
| - | :- | :- | :- | :- | :- |
|Habilitar acelerómetro de 3 ejes|Habilitar alarma de desmontaje|Tiempo de espera de escaneo GNSS|Tiempo de espera de escaneo iBeacon|Bytes válidos del filtro UUID|Filtro UUID|

#### Configuración de eventos de movimiento
|Byte31|Byte32~33|Byte34~35|
| - | :- | :- |
|Habilitar evento de movimiento|Umbral de movimiento de 3 ejes|Intervalo de subida en movimiento|

#### Configuración de eventos de inmovilidad
|Byte36|Byte37~38|
| - | :- |
|Habilitar evento de inmovilidad|Tiempo de espera de inmovilidad|


#### Configuración de eventos de impacto
|Byte39|Byte40~41|
| - | :- |
|Habilitar evento de impacto|Umbral de impacto de 3 ejes|

Ejemplo:

`97 01 02 003c 001e 000a 01 01 0a 05 10 00000000000000000000000000000000 01 001e 0005 01 012c 01 012c`

|**Byte**|**Valor**|**Tipo**|**Datos en bruto**|**Descripción**|
| - | - | - | - | - |
|1|ID de trama|uint8|97|97 es el ID del paquete|
|2|Modo de trabajo|uint8|01|`00`: Standby Mode<br />`01`: Periodic Mode<br />`02`: Event Mode|
|3|Estrategia de posicionamiento|uint8|02|`00`: Only GNSS<br />`01`: Only Wi-Fi<br />`02`: Wi-Fi + GNSS<br />`03`: GNSS + Wi-Fi<br />`04`: Only Bluetooth<br />`05`: Bluetooth + Wi-Fi<br />`06`: Bluetooth + GNSS<br />`07`: Bluetooth + Wi-Fi + GNSS<br />`08`: GNSS + Bluetooth |
|4~5|Intervalo de latido|uint16|003c|`0x003C` = 60 seconds|
|6~7|Intervalo de subida en modo periódico|uint16|001e|`0x001E` = 30 seconds|
|8~9|Intervalo de subida en modo de evento|uint16|000a|`0x000A` = 10 minutes<br />Cuando no se activa ningún evento, los datos se subirán cada 10 minutos.<br />|
|10|Habilitar acelerómetro de 3 ejes|uint8|01|`00`: Disable<br />`01`: Enable|
|11|Habilitar alarma de desmontaje|uint8|01|`00`: Disable<br />`01`: Enable|
|12|Tiempo de espera de escaneo GNSS|uint8|0a|`0x0A` = 10 seconds|
|13|Tiempo de espera de escaneo iBeacon|uint8|05|`0x05` = 5 seconds|
|14|Bytes válidos del filtro UUID|uint8|10|`0x10` = 16 bytes|
|15~30|Filtro UUID|byte[16]|0000000000000000<br />0000000000000000|Valor del filtro UUID (16 bytes)<br />|
|31|Habilitar evento de movimiento|uint8|01|`00`: Disable<br />`01`: Enable|
|32~33|Umbral de movimiento de 3 ejes|uint16|001e|`0x001E` = 30 mg |
|34~35|Intervalo de subida en movimiento|uint16|0005|`0x0005` = 5 minutes<br />Cuando se detecta movimiento, el intervalo de informe es de 5 minutos|
|36|Habilitar evento de inmovilidad|uint8|01|`00`: Disable<br />`01`: Enable|
|37~38|Tiempo de espera de inmovilidad|uint16|012c|`0x012C` = 300 minutes |
|39|Habilitar evento de impacto|uint8|01|`00`: Disable<br />`01`: Enable|
|40~41|Umbral de impacto de 3 ejes|uint16|012c|`0x012C` = 300 mg |

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>