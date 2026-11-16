---
title: Referencia de comandos del firmware de fábrica
description: 'Referencia completa de comandos serie para el firmware de fábrica del Wio-LR2021 Dev Kit'
keywords:
  - comando serie
  - firmware de fábrica
image: https://files.seeedstudio.com/wiki/Wio-LR2021_Dev_Kit/img/1-100038329-Wio-LR2021-Dev-Kit.webp
slug: /wio_lr2021_dev_kit_command_reference
sku: 100038329
sidebar_position: 2
last_update:
  date: 11/05/2026
  author: David Du
createdAt: '2026-11-05'
updatedAt: '2026-11-05'
url: https://wiki.seeedstudio.com/es/wio_lr2021_dev_kit_command_reference/
---

## Convenciones de símbolos

| Símbolo | Significado | Ejemplo |
| --- | --- | --- |
| `[ ]` | Parámetro opcional; se aplica el valor predeterminado cuando se omite | `[-p <port>]` |
| `< >` | Un valor concreto que debes proporcionar | `-g <gpio>` |
| `\|` | Elige uno de los valores listados | `<0\|1>` |
| Palabras sin corchetes | Obligatorio | `ping <host>` |
| `cmd>` | Prompt del firmware; no lo escribas | `cmd> help` |

Los valores siempre se escriben como `-flag value`, por ejemplo `gpio_set -g 4 -l 1`. Cuando el firmware también registra una forma larga, la forma larga se muestra junto a la corta en la tabla de parámetros.

## Índice de comandos

| Categoría | Comandos | Qué verifica | Sección |
| --- | --- | --- | --- |
| General | 1 | Enlace serie y ayuda en el dispositivo | [General](#general) |
| LoRa / RF | 7 | Transmisión, recepción, CW y FLRC en sub-GHz y 2,4 GHz | [LoRa / RF](#lora-rf) |
| BLE | 2 | Estado de advertising y estado de conexión | [BLE](#ble) |
| Wi-Fi y red | 14 | Modos STA y AP, escaneo, versión de protocolo, ping | [Wi-Fi y red](#wifi-y-red) |
| Expansor de E/S | 8 | Niveles de pin, escaneo de bus y raíles conmutados | [Expansor de E/S](#expansor-de-es) |
| Batería | 1 | Tensión de celda y estimación de carga | [Batería](#bateria) |
| OLED | 3 | Patrones de visualización y estado del panel | [OLED](#oled) |
| Cámara | 5 | Inicialización, estado y vista previa HTTP | [Cámara](#camara) |
| Audio | 7 | Grabar, reproducir y hacer streaming | [Audio](#audio) |
| Flash | 3 | ID JEDEC, velocidad y resistencia | [Flash](#flash) |

## General {#general}

### 1. help

Enumera todos los comandos registrados con una descripción de una línea.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
help
```

## LoRa / RF {#lora-rf}

Estos siete comandos controlan el transceptor LR2021 integrado mediante dos esquemas de modulación: LoRa para alcance y FLRC para velocidad. Cada comando de transmisión necesita una antena en el conector correspondiente: `SUB-1G` para frecuencias portadoras sub-GHz y `LR-2.4G` para la banda de 2400 ~ 2500 MHz. Una prueba de enlace entre dos placas necesita parámetros de radio idénticos en ambos lados.

**Nota**: `lora_rx`, `flrc_rx`, `lora_tx -n 0` y `flrc_tx -c 0` se ejecutan hasta que pulses `Ctrl+C`.

### 1. lora_tx

**`lora_tx [-f <freq_hz>] [-s <5-12>] [-b <0-9>] [-c <1-7>] [-p <dbm>] [--crc <0|1>] [--hdr <0|1>] [--iq <0|1>] [--net <0|1>] [-i <interval_ms>] [-d <text>] [-n <count>] [-hp <n>] [-dc <n>] [-lf <n>]`**

Envía paquetes LoRa con la frecuencia, factor de dispersión y potencia configurados.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-f <freq_hz>` | Frecuencia de transmisión | `150000000 ~ 2500000000` Hz; predeterminado: `868000000` |
| `-s <5-12>` | Factor de dispersión | `5 ~ 12`; valores más altos son más lentos y alcanzan más lejos; predeterminado: `7` |
| `-b <0-9>` | Índice de ancho de banda | `0`=31k, `1`=41k, `2`=62k, `3`=125k (predeterminado), `4`=200k, `5`=250k, `6`=400k, `7`=500k, `8`=800k, `9`=1000k |
| `-c <1-7>` | Tasa de codificación | `1 ~ 7`; `1`=4/5 es la más rápida, `4`=4/8 la más robusta; predeterminado: `1` |
| `-p <dbm>` | Potencia de transmisión | Sub-GHz `-10 ~ +22` dBm, 2,4 GHz `-17 ~ +12` dBm; predeterminado: `10` |
| `--crc <0\|1>` | Comprobación CRC | `0`=apagado, `1`=encendido; predeterminado: `1` |
| `--hdr <0\|1>` | Tipo de cabecera | `0`=implícita, `1`=explícita; predeterminado: `1` |
| `--iq <0\|1>` | Modo IQ | `0`=estándar, `1`=invertido; predeterminado: `0` |
| `--net <0\|1>` | Tipo de red y palabra de sincronización | `0`=privada (palabra de sincronización `0x12`), `1`=pública (palabra de sincronización `0x34`); predeterminado: `1` |
| `-i <interval_ms>` | Intervalo entre paquetes | Milisegundos; predeterminado: `200`; `0`=espalda con espalda |
| `-d <text>` | Texto de la carga útil | Predeterminado: `hello` |
| `-n <count>` | Número de paquetes | `0`=enviar hasta `Ctrl+C`; predeterminado: `10` |
| `-hp <n>` | Registro de media potencia del PA | Solo depuración; déjalo sin establecer en uso normal |
| `-dc <n>` | Registro de ciclo de trabajo del PA | Solo depuración; déjalo sin establecer en uso normal |
| `-lf <n>` | Registro de porción de baja frecuencia del PA | Solo depuración; déjalo sin establecer en uso normal |

**Ejemplo:**

```bash
lora_tx -f 868000000 -s 7 -b 3 -p 14 -d hello -n 10
```

:::note
Coloca primero la antena y arranca `lora_rx` con los mismos valores de `-f`, `-s`, `-b`, `-c`, `--hdr`, `--crc`, `--iq` y `--net` en la segunda placa. Un valor fuera de rango muestra una advertencia `out of bounds` y el comando vuelve a un valor de reserva: `-f` a la frecuencia predeterminada, `-s` a `7`, `-b` a `3`, `-c` a `1`; `-p` se limita al máximo de la banda. Un `-f` no numérico, o un `-i` o `-n` negativos, abortan el comando y no envían nada.
:::

### 2. lora_rx

**`lora_rx [-f <freq_hz>] [-s <5-12>] [-b <0-9>] [-c <1-7>] [--crc <0|1>] [--hdr <0|1>] [--plen <0-255>] [--iq <0|1>] [--net <0|1>]`**

Recibe paquetes LoRa de forma continua y los cuenta.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-f <freq_hz>` | Frecuencia de recepción | `150000000 ~ 2500000000` Hz; predeterminado: `868000000` |
| `-s <5-12>` | Factor de dispersión | `5 ~ 12`; predeterminado: `7` |
| `-b <0-9>` | Índice de ancho de banda | `0`=31k, `3`=125k (predeterminado), `9`=1000k |
| `-c <1-7>` | Tasa de codificación | `1 ~ 7`; predeterminado: `1` |
| `--crc <0\|1>` | Comprobación CRC | `0`=apagado, `1`=encendido; predeterminado: `1` |
| `--hdr <0\|1>` | Tipo de cabecera | `0`=implícita, `1`=explícita; predeterminado: `1` |
| `--plen <0-255>` | Longitud de carga útil que espera el receptor | Bytes; `0`=cualquier longitud en modo explícito, el modo implícito asume `5` cuando se omite; predeterminado: `0` |
| `--iq <0\|1>` | Modo IQ | `0`=estándar, `1`=invertido; predeterminado: `0` |
| `--net <0\|1>` | Tipo de red y palabra de sincronización | `0`=privada (`0x12`), `1`=pública (`0x34`); predeterminado: `1` |

**Ejemplo:**

```bash
lora_rx -f 868000000 -s 7 -b 3
```

:::note
El comando bloquea la consola hasta `Ctrl+C`, que muestra `rx_done`, `rx_hdr_err` y `rx_crc_err`. Ambas placas deben usar el mismo valor de `--hdr`; implícito en un lado y explícito en el otro nunca recibe. En modo implícito establece `--plen` a la longitud de carga útil del transmisor: un valor más largo añade basura al final y uno más corto la recorta. El modo implícito con `--crc 1` produjo fallos de CRC en las pruebas, así que combina `--hdr 0` con `--crc 0`. Largas series de `hdr err` a corta distancia significan que los paquetes llegan espalda con espalda; sube el `-i` del transmisor a `100` ~ `200` y mantenlo más largo que el tiempo en aire de un paquete.
:::

### 3. lora_cw

**`lora_cw [-f <freq_hz>] [-p <dbm>]`**

Transmite una onda continua no modulada para mediciones de potencia RF.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-f <freq_hz>` | Frecuencia portadora | `150000000 ~ 2500000000` Hz; predeterminado: `868000000`; un valor fuera de rango o no numérico aborta el comando |
| `-p <dbm>` | Potencia de transmisión | Sub-GHz `-10 ~ +22` dBm, 2,4 GHz `-17 ~ +12` dBm; predeterminado: `10`; limitado al máximo de la banda |

**Ejemplo:**

```bash
lora_cw -f 868000000 -p 10
```

:::note
La portadora se mantiene hasta que se introduce `lora_cw_stop`. Para cambiar la potencia o la frecuencia a mitad de la prueba, ejecuta `lora_cw` de nuevo con el nuevo valor; la configuración se reinicia por sí sola.
:::

### 4. lora_cw_pa

**`lora_cw_pa [-f <freq_hz>] [-p <dbm>] [-h <n>] [-d <0-31>] [-l <0-15>]`**

Transmite una onda continua con control directo de los registros del PA.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-f <freq_hz>` | Frecuencia portadora | `150000000 ~ 2500000000` Hz; predeterminado: `868000000` |
| `-p <dbm>` | Potencia de transmisión | Sub-GHz `-10 ~ +22` dBm, 2,4 GHz `-17 ~ +12` dBm; predeterminado: `10` |
| `-h <n>` | Valor de media potencia del PA | Pasos de 0,5 dB; sub-GHz `-19 ~ 44`, 2,4 GHz `-39 ~ 24` |
| `-d <0-31>` | Ciclo de trabajo del PA | `0 ~ 31` |
| `-l <0-15>` | Porciones de baja frecuencia del PA | `0 ~ 15` |

**Ejemplo:**

```bash
lora_cw_pa -f 868000000 -h 22 -d 0 -l 0
```

:::note
Proporcionar cualquiera de `-h`, `-d` o `-l` cambia el comando al modo de parámetros directos y anula la tabla de potencias. Los valores fuera de rango se limitan al máximo de la banda con una advertencia `out of bounds`. Detén la portadora con `lora_cw_stop`.
:::

### 5. lora_cw_stop

**`lora_cw_stop`**

Detiene una onda continua iniciada por `lora_cw` o `lora_cw_pa`.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
lora_cw_stop
```

### 6. flrc_tx

**`flrc_tx [-f <freq_hz>] [-p <dbm>] [-b <0-7>] [-l <1-255>] [-c <count>]`**

Envía paquetes FLRC con una carga útil incremental, un paquete por segundo.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-f <freq_hz>` | Frecuencia de transmisión | `415000000 ~ 940000000` Hz; predeterminado: `915000000`; fuera de rango vuelve al valor predeterminado |
| `-p <dbm>` | Potencia de transmisión | `-10 ~ +22` dBm; predeterminado: `22`; limitado al máximo |
| `-b <0-7>` | Combinación de tasa y ancho de banda | `0`=2,6 Mbps (más rápida) hasta `7`=0,26 Mbps; predeterminado: `0`; fuera de rango vuelve a `7` |
| `-l <1-255>` | Longitud del paquete | Bytes; predeterminado: `200`; fuera de rango vuelve al valor predeterminado |
| `-c <count>` | Número de paquetes | Predeterminado: `100`; `0`=enviar hasta `Ctrl+C`; los valores por encima de `500` se limitan a `500` |

**Ejemplo:**

```bash
flrc_tx -f 868000000 -p 14 -l 200 -c 100
```

:::note
Sale un paquete cada segundo, así que una ejecución de un minuto envía unos sesenta paquetes. Establece `-c 0` para transmitir sin parada hasta `Ctrl+C`.
:::

### 7. flrc_rx

**`flrc_rx [-f <freq_hz>] [-b <0-7>]`**

Recibe paquetes FLRC y cuenta los paquetes correctos, errores de cabecera y errores de CRC.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-f <freq_hz>` | Frecuencia de recepción | `415000000 ~ 940000000` Hz; predeterminado: `915000000`; fuera de rango vuelve al valor predeterminado |
| `-b <0-7>` | Combinación de tasa y ancho de banda | `0 ~ 7`; predeterminado: `0`; fuera de rango vuelve a `7` |

**Ejemplo:**

```bash
flrc_rx -f 868000000 -b 0
```

:::note
`Ctrl+C` detiene el receptor y muestra los contadores.
:::

## BLE {#ble}

Bluetooth no se inicia al arrancar. El primer `ble -a 1` inicializa la pila BLE y comienza a hacer advertising; `ble -a 0` detiene el advertising y descarga la pila para liberar su memoria. El nombre del dispositivo comienza con `wio-lr2021-` y el anuncio acepta conexiones.

### 1. ble

**`ble -a <0|1>`**

Activa o desactiva el advertising de Bluetooth.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-a <0\|1>` | Interruptor de advertising | `1`=iniciar advertising (inicializa la pila en el primer uso), `0`=detener advertising y liberar la pila; obligatorio |

**Ejemplo:**

```bash
ble -a 1
```

:::note
Busca `wio-lr2021-` desde un teléfono con nRF Connect; el dispositivo está en buen estado cuando aparece en la lista. Después de conectarte, la app puede enviar comandos al dispositivo y leer las líneas de registro que imprime.
:::

### 2. ble_status

**`ble_status`**

Imprime el nombre del dispositivo, la dirección MAC, la potencia de transmisión, los parámetros de advertising y el estado de la conexión.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
ble_status
```

:::note
Si Bluetooth no se ha inicializado, el comando te pide que ejecutes primero `ble -a 1`.
:::

## Wi-Fi y red {#wifi-network}

Wi-Fi se inicializa y se inicia automáticamente al arrancar, por lo que ninguno de estos comandos necesita un `wifi init` manual. La mayoría envuelven el componente de pruebas de Wi-Fi de Espressif y tienen muchas opciones; las tablas de parámetros siguientes enumeran las documentadas. Unirse a un router requiere tu propio punto de acceso de 2,4 GHz y su contraseña.

### 1. wifi

**`wifi <status|stop|start|restart|init|deinit>`**

Consultar el estado de Wi-Fi o iniciar, detener y reinicializar la radio.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `status` | Muestra el estado de inicialización e información de conexión | Consulta más común |
| `stop, start` | Detiene o inicia la radio, el driver se mantiene | Pruebas de potencia y eliminación de interferencias |
| `restart` | Reinicio completo: stop, deinit, init, start | Recuperación después de `deinit` |
| `init, deinit` | Inicializa o descarga el driver | Solo depuración de I+D |

**Ejemplo:**

```bash
wifi status
```

:::note
Ejecutar `wifi init` en un sistema ya inicializado se omite con una única advertencia `WiFi already initialise.`. `wifi deinit` detiene primero la radio cuando aún está en funcionamiento, y `wifi status` imprime `initialized` y `started` por separado.
:::

### 2. wifi_count

**`wifi_count [query|clear]`**

Imprime o reinicia los contadores de paquetes transmitidos y recibidos por Wi-Fi.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `query` | Imprime los contadores | Predeterminado cuando no se da ningún argumento |
| `clear` | Reinicia ambos contadores a cero | — |

**Ejemplo:**

```bash
wifi_count
```

### 3. wifi_mode

**`wifi_mode <sta|ap|apsta>`**

Establece el rol Wi-Fi del dispositivo.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `sta` | Se une a otro hotspot, como un teléfono | — |
| `ap` | Actúa como hotspot | — |
| `apsta` | Ambos roles a la vez | — |

**Ejemplo:**

```bash
wifi_mode sta
```

### 4. wifi_protocol

**`wifi_protocol [protocol] [-i <ap|sta>]`**

Consulta o establece la combinación de protocolos 802.11.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<protocol>` | Combinación de protocolos | `b`, `b/g`, `b/g/n`; predeterminado: consulta el valor actual |
| `-i <ap\|sta>` | Interfaz a la que aplicar el ajuste | `ap` o `sta`; predeterminado: `sta` |

**Ejemplo:**

```bash
wifi_protocol b/g/n
```

### 5. wifi_bandwidth

**`wifi_bandwidth [20|40] [-i <ap|sta>]`**

Consulta o establece el ancho de banda del canal.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<20\|40>` | Ancho de banda del canal en MHz | `20` o `40`; predeterminado: consulta el valor actual |
| `-i <ap\|sta>` | Interfaz a la que aplicar el ajuste | `ap` o `sta`; predeterminado: `sta` |

**Ejemplo:**

```bash
wifi_bandwidth 20
```

### 6. wifi_ps

**`wifi_ps <0|1|2>`**

Establece el nivel de ahorro de energía de Wi-Fi.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `0` | Sin ahorro de energía, máximo rendimiento | Requerido |
| `1` | Ahorro moderado | — |
| `2` | Ahorro máximo | — |

**Ejemplo:**

```bash
wifi_ps 0
```

### 7. wifi_country

**`wifi_country [code] [-s <start_channel>] [-n <channel_count>] [-p <auto|manual>]`**

Consulta o establece el código de país y el rango de canales utilizables.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<code>` | Código de país de dos letras | Por ejemplo `US`; predeterminado: consulta el valor actual |
| `-s <start_channel>` | Primer canal del rango permitido | Número de canal; predeterminado: no establecido |
| `-n <channel_count>` | Número de canales en el rango | Cantidad; predeterminado: no establecido |
| `-p <auto\|manual>` | Selección del plan de canales | `auto` o `manual`; predeterminado: no establecido |

**Ejemplo:**

```bash
wifi_country US
```

### 8. ap_set

**`ap_set <ssid> [pass] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

Convierte el dispositivo en un hotspot Wi-Fi para que un teléfono o PC pueda unirse a él.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<ssid>` | Nombre del hotspot | Requerido |
| `<pass>` | Contraseña del hotspot | Al menos 8 caracteres; opcional |
| `-a <authmode>` | Modo de seguridad | `open`, `wep`, `wpa2`; un nombre no reconocido se informa y el hotspot vuelve a `open`; predeterminado: no establecido |
| `-n <channel>` | Canal del hotspot | Número de canal; predeterminado: no establecido |
| `-m <max_conn>` | Máximo de clientes simultáneos | Predeterminado: `2` |

**Ejemplo:**

```bash
ap_set MyTestAP 12345678
```

**Alias**: `ap` (igual que `ap_set`).

:::note
Cambia la contraseña antes de dejar el hotspot activo en una red compartida, y deténlo cuando termine la prueba.
:::

### 9. ap_query

**`ap_query`**

Muestra la configuración actual del hotspot y cuántos clientes están conectados.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
ap_query
```

### 10. sta_connect

**`sta_connect <ssid> <pass> [-n <channel>]`**

Se une, como estación, a un hotspot Wi-Fi que tú proporcionas.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<ssid>` | Nombre del hotspot | Requerido |
| `<pass>` | Contraseña del hotspot | Requerido |
| `-n <channel>` | Canal al que unirse | Opcional; un canal conocido acelera la conexión |

**Ejemplo:**

```bash
sta_connect MyHomeWiFi 12345678
```

**Salida esperada:**

```bash
got ip:192.168.<x>.<y>
```

La dirección IP cambia con cada red; el criterio de éxito es la línea `got ip:`, que aparece entre las líneas de registro de la conexión.

**Alias**: `sta` (igual que `sta_connect`).

:::note
Wi-Fi debe estar inicializado y en marcha, que es el estado al arrancar. Después de `wifi stop` o `wifi deinit`, el comando se rechaza con una sugerencia de ejecutar primero `wifi restart`. Ejecuta `sta_disconnect` antes de unirte a una red diferente.
:::

### 11. sta_disconnect

**`sta_disconnect`**

Se desconecta de la red actual y detiene la reconexión automática.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
sta_disconnect
```

**Alias**: `disconnect` (igual que `sta_disconnect`).

### 12. sta_scan

**`sta_scan [<ssid>] [-n <channel>] [-h]`**

Escanea los hotspots cercanos e imprime nombre, intensidad de señal y canal.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<ssid>` | Muestra solo el hotspot con este nombre | Filtro opcional |
| `-n <channel>` | Escanea un único canal | Número de canal; opcional |
| `-h` | Incluye redes ocultas; la forma larga `--show-hidden` hace lo mismo | Sin valor |

**Ejemplo:**

```bash
sta_scan
```

**Alias**: `wifi_scan` y `scan` (igual que `sta_scan`).

:::note
Un escaneo es la comprobación más rápida de la antena Wi-Fi y de la ruta de recepción: una lista vacía significa que la radio no está recibiendo.
:::

### 13. wifi_txpower

**`wifi_txpower [-u <value>] [--reset]`**

Lee o establece la potencia de transmisión de Wi-Fi.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-u <value>` | Potencia de transmisión en unidades de 0,25 dBm | Por ejemplo `80` = 20 dBm; predeterminado: lee el valor actual |
| `--reset` | Restaura la potencia predeterminada | Sin valor |

**Ejemplo:**

```bash
wifi_txpower -u 68
```

### 14. ping

**`ping <host> [-c <count>] [-i <interval_s>] [-s <bytes>] [-W <timeout_s>] [--abort]`**

Envía solicitudes de eco ICMP a un host e informa de la latencia.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `<host>` | Dirección IP o dominio de destino | Requerido |
| `-c <count>` | Número de solicitudes de eco | Predeterminado: `5` |
| `-i <interval_s>` | Segundos entre solicitudes | Predeterminado: `1` |
| `-s <bytes>` | Tamaño de la carga útil por solicitud | Predeterminado: `64` |
| `-W <timeout_s>` | Tiempo de espera de la respuesta en segundos | Predeterminado: no establecido |
| `--abort` | Detiene un ping en ejecución | Sin valor |

**Ejemplo:**

```bash
ping 192.168.1.1 -c 4 -i 1
```

:::note
Wi-Fi se inicializa al arrancar; ejecuta primero `sta_connect` para que el dispositivo tenga una dirección y una ruta.
:::

## Expansor de E/S {#io-expander}

Los números de GPIO son números de GPIO del ESP32-S3; las funciones de los pines se enumeran en el [Mapa de pines del Wio-LR2021 Dev Kit](/es/wio_lr2021_dev_kit_getting_started). El expansor de E/S es el PCA9535 en la dirección I²C `0x21`. Expone 16 pines numerados del 0 al 15; cuatro de ellos conmutan los raíles de la cámara, audio, OLED y Grove.

:::note
Un pin que ningún periférico reclama permanece como entrada flotante tras el encendido (resistencias de pull desactivadas), por lo que un `gpio_get` en bruto lee ruido. Ejecuta primero `gpio_config`: `-m 0` para entrada con una resistencia de pull opcional, `-m 1` para salida push-pull, `-m 2` para salida de drenador abierto.
:::

### 1. gpio_set

**`gpio_set -g <gpio> -l <0|1>`**

Fuerza un GPIO a nivel alto o bajo.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-g <gpio>` | Número de GPIO | Requerido |
| `-l <0\|1>` | Nivel de salida | `1`=alto (unos 3,3 V), `0`=bajo (0 V); requerido |

**Ejemplo:**

```bash
gpio_set -g 4 -l 1
```

:::note
Configura la dirección con `gpio_config -m 1` antes de forzar el pin, y verifica el nivel con un multímetro o un cable de bucle de retorno hacia otro GPIO.
:::

### 2. gpio_get

**`gpio_get -g <gpio>`**

Lee el nivel actual de un GPIO.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-g <gpio>` | Número de GPIO | Requerido |

**Ejemplo:**

```bash
gpio_get -g 4
```

### 3. gpio_config

**`gpio_config -g <gpio> -m <0|1|2> [-p <0|1|2|3>]`**

Establece la dirección y las resistencias de pull de un GPIO.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-g <gpio>` | Número de GPIO | Requerido |
| `-m <0\|1\|2>` | Dirección | `0`=entrada, `1`=salida, `2`=salida de drenador abierto; requerido |
| `-p <0\|1\|2\|3>` | Resistencias de pull | `0`=flotante (predeterminado), `1`=pull-up, `2`=pull-down, `3`=ambas activadas |

**Ejemplo:**

```bash
gpio_config -g 5 -m 0 -p 1
```

### 4. i2c_scan

**`i2c_scan [-b <0|1>]`**

Escanea uno o ambos buses I²C y lista las direcciones que responden.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-b <0\|1>` | Número de bus a escanear | `0` o `1`; predeterminado: escanea ambos |

**Ejemplo:**

```bash
i2c_scan -b 0
```

:::note
En una placa en buen estado, el bus 0 muestra el PCA9535 en `0x21` y, una vez que el raíl de la pantalla está encendido, el OLED en `0x3D`. Una dirección ausente significa que el chip no está soldado, no está alimentado o no responde.
:::

### 5. io_exp_set

**`io_exp_set -i <0-15> -l <0|1>`**

Lleva un pin del expansor de E/S a nivel alto o bajo.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-i <0-15>` | Número de pin del expansor | `0 ~ 15`; obligatorio |
| `-l <0\|1>` | Nivel de salida | `1`=alto, `0`=bajo; obligatorio |

**Ejemplo:**

```bash
io_exp_set -i 3 -l 1
```

:::note
Los pines `0 ~ 3` conmutan los raíles de periféricos; accionarlos cambia el estado de alimentación de la cámara, el audio, la OLED y los conectores Grove.
:::

### 6. io_exp_get

**`io_exp_get -i <0-15>`**

Lee un pin del expansor de E/S.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-i <0-15>` | Número de pin del expansor | `0 ~ 15`; obligatorio |

**Ejemplo:**

```bash
io_exp_get -i 3
```

### 7. io_exp_config

**`io_exp_config -i <0-15> -m <0|1>`**

Configura un pin del expansor de E/S como entrada o salida.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-i <0-15>` | Número de pin del expansor | `0 ~ 15`; obligatorio |
| `-m <0\|1>` | Dirección | `0`=entrada, `1`=salida; obligatorio |

**Ejemplo:**

```bash
io_exp_config -i 3 -m 1
```

### 8. io_exp_print

**`io_exp_print`**

Imprime la dirección y el nivel de los 16 pines del expansor en una tabla.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
io_exp_print
```

## Batería {#battery}

### 1. battery_get

**`battery_get`**

Lee el voltaje de la celda en milivoltios y estima el estado de carga.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
battery_get
```

:::note
Se debe conectar una celda al conector `BAT-3.7V` para obtener una lectura significativa; el cargador informa de su propio estado en los pines 11 y 12 del expansor.
:::

## OLED {#oled}

El primer comando OLED de una sesión alimenta el raíl de la pantalla e inicializa el panel, por lo que no se necesita un paso de preparación separado. El panel es de 128 × 64 píxeles y está en el bus I²C interno en `0x3D`.

### 1. oled_test

**`oled_test -m <mode>`**

Dibuja un patrón de prueba en el panel OLED.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-m <mode>` | Patrón a dibujar | `clear`=todos los píxeles apagados<br />`solid`=todos los píxeles encendidos<br />`checker`=damero<br />`stripes`=rayas verticales<br />`border`=fondo negro con un borde<br />`text`=texto de estado como `OLED OK` y la resolución<br />`scan`=líneas de escaneo; obligatorio |

**Ejemplo:**

```bash
oled_test -m text
```

:::note
`-m text` es la comprobación de aprobado/suspenso más rápida del panel: el patrón de texto lo dibuja el mismo controlador que dibuja cualquier otro patrón.
:::

### 2. oled_line_demo

**`oled_line_demo -m <checker|scan>`**

Refresca el panel segmento por segmento mediante un pequeño búfer de línea.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-m <checker\|scan>` | Patrón a refrescar | `checker`=damero, `scan`=líneas de escaneo; obligatorio |

**Ejemplo:**

```bash
oled_line_demo -m checker
```

### 3. oled_cycle

**`oled_cycle [-d <dwell_ms>]`**

Reproduce seis patrones de prueba en secuencia y termina por sí solo.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-d <dwell_ms>` | Tiempo que cada patrón permanece en pantalla | Milisegundos; por defecto: `800` |

**Ejemplo:**

```bash
oled_cycle -d 1500
```

:::note
La secuencia es clear, border, text, checkerboard, stripes y scan lines. Un solo ciclo cubre todo el panel, por lo que la línea de producción lo usa para la inspección visual.
:::

## Cámara {#camera}

La cámara es la GC2145 de 2 MP en el Media HAT; el firmware de fábrica la lee como RGB565 y transmite fotogramas JPEG. `camera_http_start` es la comprobación de extremo a extremo más corta porque levanta el hotspot, la cámara y el servidor web con un solo comando.

### 1. camera_start

**`camera_start [-q <1-100>] [-r <qqvga|qvga|vga>] [-F <hz>]`**

Enciende e inicializa la cámara.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-q <1-100>` | Calidad de compresión JPEG | `1 ~ 100`; por defecto: `80` |
| `-r <qqvga\|qvga\|vga>` | Resolución de captura | `qqvga`=160×120, `qvga`=320×240 (por defecto), `vga`=640×480 |
| `-F <hz>` | Reloj del bus de control de la cámara (I²C) | Hz; por defecto: `100000` |

**Ejemplo:**

```bash
camera_start -r vga
```

:::note
Ejecutar `camera_start` de nuevo con un `-r` o `-F` diferente reinicia la cámara y cambia el ajuste. Los primeros fotogramas tras el arranque se descartan como calentamiento. El comando también es la forma más rápida de confirmar que la cámara se inicializa.
:::

### 2. camera_stop

**`camera_stop`**

Detiene la cámara y la apaga.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
camera_stop
```

### 3. camera_http_start

**`camera_http_start [-s <ssid>] [-p <pwd>] [-c <1-13>] [-q <1-100>] [-f <1-30>] [-P <port>] [-r <qqvga|qvga|vga>] [-F <hz>]`**

Inicia el hotspot, la cámara y la previsualización web MJPEG con un solo comando.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-s <ssid>` | Nombre del hotspot | Por defecto: `wio-lr2021-camera` |
| `-p <pwd>` | Contraseña del hotspot | 8 ~ 63 caracteres, vacío para una red abierta; por defecto: `12345678` |
| `-c <1-13>` | Canal del hotspot | `1 ~ 13`; por defecto: `1` |
| `-q <1-100>` | Calidad JPEG | Más alto es más nítido y usa más ancho de banda; por defecto: `80` |
| `-f <1-30>` | Límite de frecuencia de fotogramas | Fotogramas por segundo; por defecto: `20` |
| `-P <port>` | Puerto del servidor web | El flujo de vídeo usa este puerto más uno; cambiarlo mientras se está ejecutando reinicia el servicio web, y un valor fuera de rango avisa y vuelve al valor anterior; por defecto: `80` |
| `-r <qqvga\|qvga\|vga>` | Resolución del flujo | Por defecto: `qvga` |
| `-F <hz>` | Reloj del bus de control de la cámara (I²C) | Hz; por defecto: `100000` |

**Ejemplo:**

```text
camera_http_start -q 60 -f 10
```

:::note
Después de cambiar `-s`, `-p` o `-c` y ejecutar el comando de nuevo, desconecta y vuelve a conectar el teléfono o el PC del hotspot. De lo contrario, el cliente seguirá mostrando una conexión mientras la placa no es accesible.
:::

**Uso**: conéctate al hotspot `wio-lr2021-camera` con la contraseña `12345678`, luego abre `http://192.168.4.1` en un navegador. Una imagen en vivo significa que la cámara y la ruta Wi‑Fi funcionan.

:::note
La página web no tiene autenticación. Mantén el hotspot fuera de cualquier red compartida o de oficina, y ciérralo con `camera_http_stop`.
:::

### 4. camera_http_stop

**`camera_http_stop`**

Detiene el servidor web y apaga la cámara y el hotspot.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
camera_http_stop
```

### 5. camera_status

**`camera_status`**

Imprime el estado de la cámara, el hotspot y el servidor web, la resolución y la calidad.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
camera_status
```

## Audio {#audio}

Una ranura de audio es un búfer de grabación en RAM, por lo que no se necesita tarjeta SD: graba en la ranura, luego reprodúcela o transmítela a un PC a través del hotspot del dispositivo.

### 1. audio_init

**`audio_init`**

Enciende el circuito de audio e inicializa el códec y el micrófono.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
audio_init
```

:::note
El firmware ejecuta esto una vez al arrancar; úsalo para recuperarte después de `audio_deinit`.
:::

### 2. audio_deinit

**`audio_deinit`**

Apaga el circuito de audio.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
audio_deinit
```

:::note
La grabación y la reproducción permanecen no disponibles hasta que `audio_init` se ejecute de nuevo. Úsalo para mediciones de consumo de energía. Si el audio nunca se inicializó desde el arranque, el comando se rechaza, por lo que un segundo `audio_deinit` seguido no hace nada.
:::

### 3. audio_slot_record

**`audio_slot_record [-d <100-60000>] [-m <20.0-37.5>]`**

Graba desde el micrófono en la ranura de audio.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-d <100-60000>` | Duración de la grabación | Milisegundos; `100 ~ 60000`; por defecto: `10000` |
| `-m <20.0-37.5>` | Ganancia del micrófono | dB; `20.0 ~ 37.5`; por defecto: `37.5` (máxima) |

**Ejemplo:**

```bash
audio_slot_record -d 5000 -m 30
```

:::note
La ranura contiene datos de micrófono en bruto sin procesamiento por software. Habla cerca del micrófono durante la grabación. El audio se inicializa al arrancar; después de `audio_deinit`, ejecuta primero `audio_init` o el comando será rechazado.
:::

### 4. audio_slot_play

**`audio_slot_play [-v <0-100>]`**

Reproduce la ranura grabada a través del altavoz.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-v <0-100>` | Volumen de reproducción | `0 ~ 100`; por defecto: mantener el volumen actual |

**Ejemplo:**

```bash
audio_slot_play -v 80
```

:::note
Conecta un altavoz al conector `SPK` del Media HAT. El comando reproduce lo que la ranura contenga en ese momento, así que graba primero; se rechaza cuando el audio no está inicializado o la ranura está vacía.
:::

### 5. audio_slot_send

**`audio_slot_send [-p <port>]`**

Transmite la ranura a un PC como un archivo WAV a través del hotspot del dispositivo.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-p <port>` | Puerto TCP al que se conecta el PC | Por defecto: `3444` |

**Ejemplo:**

```bash
audio_slot_send
```

**Uso**: conéctate desde el PC al hotspot `wio-lr2021-audio` (contraseña `12345678`), luego ejecuta `python tools/recv_wav_from_device.py -o slot.wav`. El script se conecta a `192.168.4.1:3444`, lee una cabecera de 8 bytes (magia `AUDF` más la longitud del audio) y luego los bytes de audio; el archivo se puede reproducir tan pronto como se escribe.

:::note
El comando devuelve inmediatamente y la transferencia se ejecuta en segundo plano. El hotspot no se cierra cuando termina la transferencia, por lo que se pueden enviar varias grabaciones seguidas; deténlo con `audio_slot_stop`.
:::

### 6. audio_slot_stop

**`audio_slot_stop`**

Detiene cualquier transferencia en curso y cierra el hotspot de audio.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
audio_slot_stop
```

:::note
Es seguro ejecutarlo sin que haya una transferencia en curso; el único efecto es cerrar el hotspot.
:::

### 7. audio_slot_info

**`audio_slot_info`**

Imprime el estado de la ranura: si existe una grabación, su longitud, frecuencia de muestreo, canales, duración y memoria libre.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
audio_slot_info
```

## Flash {#flash}

Las pruebas de resistencia y velocidad de la flash solo funcionan dentro de la partición dedicada `flashtest`, por lo que la imagen de firmware y los datos de usuario nunca se tocan. `flash_endurance` se ejecuta como una tarea en segundo plano y sigue escribiendo mientras la consola permanece utilizable.

### 1. flash_info

**`flash_info`**

Lee el ID JEDEC de la flash, el proveedor y la capacidad y verifica el inicio y el final de la partición de prueba.

Este comando no acepta parámetros.

**Ejemplo:**

```bash
flash_info
```

:::note
El código de retorno `0` significa aprobado; la comprobación de escritura en el límite detecta un chip flash con una capacidad sobrestimada.
:::

### 2. flash_endurance

**`flash_endurance -a <start|stop|status> [-m <minutes>] [-s <sectors>] [-d <ms>]`**

Ejecuta una prueba intensiva de borrado, escritura y lectura en la partición de prueba de la memoria flash.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-a <start\|stop\|status>` | Acción | `start`, `stop` o `status`; obligatorio |
| `-m <minutes>` | Duración de la ejecución | Minutos; `0` se ejecuta hasta que se detenga; valor predeterminado: `1440` |
| `-s <sectors>` | Sectores escritos por ronda | `0`=toda la partición de prueba; valor predeterminado: `0` |
| `-d <ms>` | Retardo entre sectores | Milisegundos; `0`=máxima velocidad; valor predeterminado: `0` |

**Ejemplo:**

```bash
flash_endurance -a start -m 60
```

:::note
El comando devuelve inmediatamente y la prueba intensiva se ejecuta en segundo plano; comprueba el progreso con `-a status` y termínala con `-a stop`. Cada ronda desgasta la memoria flash, así que ejecútala en muestras en lugar de en todas las placas.
:::

### 3. flash_speed

**`flash_speed [-t <kb>]`**

Mide el tiempo de programación de página, el tiempo de borrado de sector y el rendimiento de lectura/escritura.

| Elemento | Descripción | Datos |
| --- | --- | --- |
| `-t <kb>` | Cantidad de datos usada para la prueba de rendimiento | KB; valor predeterminado: `64` |

**Ejemplo:**

```bash
flash_speed -t 128
```

:::note
El código de retorno `0` significa que cada medición está dentro de los límites de la hoja de datos.
:::

## Alias

Se registran cinco alias de compatibilidad. Llaman exactamente a la misma función que el comando principal; usa el nombre principal en scripts y documentación.

| Alias | Comando principal | Nota |
| --- | --- | --- |
| `ap` | `ap_set` | Misma función; se prefiere el nombre principal. |
| `sta` | `sta_connect` | Misma función; se prefiere el nombre principal. |
| `disconnect` | `sta_disconnect` | Misma función; se prefiere el nombre principal. |
| `wifi_scan` | `sta_scan` | Misma función; se prefiere el nombre principal. |
| `scan` | `sta_scan` | Misma función; se prefiere el nombre principal. |

## Cadenas de resultado y códigos de retorno

El firmware informa de los resultados como líneas de texto plano en el puerto serie y luego vuelve al prompt `cmd>`. Los marcadores siguientes son los documentados para el firmware V2.1.0; el inventario completo de prefijos de registro está pendiente de una captura serie en hardware.

| Marcador | Dónde aparece | Significado |
| --- | --- | --- |
| `cmd>` | Cada comando | Prompt; el firmware está listo para el siguiente comando |
| `got ip:` | `sta_connect` | La estación obtuvo una dirección; la conexión se realizó correctamente |
| Código de retorno `0` | `flash_info`, `flash_speed` | Todas las comprobaciones pasaron; cualquier otro código es un fallo |
| `AUDF` | Cabecera de recepción de `audio_slot_send` | Valor mágico al inicio de la cabecera de 8 bytes, seguido de la longitud del audio |
| `Alias of` | Listado de `help` | La entrada es un alias de compatibilidad, no un comando independiente |
| `out of bounds` | Advertencias de parámetros | El valor fue limitado o reemplazado; el comando sigue ejecutándose |
| `rx_done` / `rx_hdr_err` / `rx_crc_err` | Salida de `lora_rx` | Contadores de recepción impresos después de `Ctrl+C` |
| `WiFi already initialise.` | `wifi init` | El controlador ya estaba inicializado, por lo que la llamada se omite |

Un valor que no se puede analizar aborta el comando e imprime una línea de error en inglés; un valor fuera de rango normalmente registra `out of bounds` y vuelve a un valor predeterminado documentado. La redacción difiere según el comando, así que corrige el valor marcado y ejecuta el comando de nuevo en lugar de hacer coincidencias sobre la frase.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
