---
description: Lista de comandos
title: Lista de comandos del módulo inalámbrico Wio-S3
keywords:
  - wio
  - module
  - LoRa
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio-S3/Wio-S3-Wireless-Module-with-IPEX.webp
slug: /wio-s3_wireless_module_command_list
sku: 100020327,100079384
sidebar_position: 2
last_update:
  date: 6/9/2026
  author: Janet Zhang
createdAt: '2026-06-09'
updatedAt: '2026-06-09'
url: https://wiki.seeedstudio.com/es/wio-s3_wireless_module_command_list/
---

## Lista de comandos de depuración serie

### Comando del sistema

**1. `help [<string>] [-v <0|1>]`**

Imprime el resumen de todos los comandos registrados si no se proporcionan argumentos; de lo contrario, imprime el resumen del comando indicado.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<string>` | Nombre del comando | Opcional. Si se proporciona, muestra la descripción del comando especificado |
| `-v, --verbose=<0\|1>` | Si se especifica, lista los comandos de consola con el nivel de detalle indicado | 0 o 1 |

**Ejemplos:**
- `help` : Muestra todos los comandos disponibles.
- `help lora_tx` : Muestra información detallada para el comando `lora_tx`.
- `help -v 1` : Muestra la lista completa de comandos con el modo detallado habilitado.



### Comando LoRa

**1. `lora_tx [-f <f>] [-s <6-12>] [-b <0|1|2>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>] [-n <n>]`**

Envía paquetes de datos LoRa con parámetros de radio configurables.

| Elemento | Descripción | Datos |
|------|-------------|------------------|
| `-f, --freq=<f>` | Establece la frecuencia de radio en Hz | 415000000 ~ 940000000 Hz, <br />predeterminado: 868000000 |
| `-s, --sf=<6-12>` | Establece el SF de LoRa | 6 ~ 12, predeterminado: 7 |
| `-b, --bw=<0\|1\|2>` | Establece el ancho de banda LoRa | 0:125KHz, 1:250KHz, 2:500KHz, <br />predeterminado: 0 |
| `-c, --cr=<1\|2\|3\|4>` | Establece la tasa de codificación LoRa | 1:CR_4_5, 2:CR_4_6, 3:CR_4_7, 4:CR_4_8, predeterminado: 1 |
| `-p, --power=` | Establece la potencia de radio | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, predeterminado: 10 |
| `--crc=<0\|1>` | Establece el CRC de LoRa | 0:DISABLE, 1:ENABLE, predeterminado: 1 |
| `--iq=<0\|1>` | Establece el modo IQ de LoRa | 0:STANDARD, 1:INVERTED, predeterminado: 0 |
| `--net=<0\|1>` | Establece la red pública | 0:Private Network, 1:Public Network, predeterminado: 0 |
| `-i, --interval=<t>` | Establece el intervalo de TX (ms) | predeterminado: 0 |
| `-d, --txt=<d>` | Establece los datos de texto a enviar | predeterminado: hello |
| `-n, --num=<n>` | Número de paquetes enviados | 0: seguir enviando, predeterminado: 1 |

**Ejemplo:** `lora_tx -f 868000000 -s 7 -b 0 -c 1 -p 10 -d hello`  
Envía un paquete LoRa con frecuencia 868000000 Hz, SF7, ancho de banda de 125 kHz, tasa de codificación 4/5 y envía "hello" con una potencia de TX de 10 dB.


**2. `lora_rx [-f <f>] [-s <6~12>] [-b <0|1|2>] [-c <1|2|3|4>] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [--boosted=<0|1>]`**

Recibe paquetes LoRa con parámetros de radio configurables.

| Elemento | Descripción | Datos |
|------|-------------|------------------|
| `-f, --freq=<f>` | Establece la frecuencia de radio en Hz | 415000000 ~ 940000000 Hz, predeterminado: 868000000 |
| `-s, --sf=<6~12>` | Establece el SF de LoRa | 6 ~ 12, predeterminado: 7 |
| `-b, --bw=<0\|1\|2>` | Establece el ancho de banda LoRa | 0:125KHz, 1:250KHz, 2:500KHz, predeterminado: 0 |
| `-c, --cr=<1\|2\|3\|4>` | Establece la tasa de codificación LoRa | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, predeterminado: 1 |
| `--crc=<0\|1>` | Establece el CRC de LoRa | 0:DISABLE, 1:ENABLE, predeterminado: 1 |
| `--iq=<0\|1>` | Establece el modo IQ de LoRa | 0:STANDARD, 1:INVERTED, predeterminado: 0 |
| `--net=<0\|1>` | Establece la red pública | 0:Private Network, 1:Public Network, predeterminado: 0 |

**Ejemplo:** `lora_rx -f 868000000 -s 7 -b 0`  
Recibe paquetes LoRa a una frecuencia de 868000000 Hz, SF7, ancho de banda de 125 kHz en modo RX normal.


**3. `lora_cw [-f <f>] [-p] [-o]`**

Transmite una señal de onda continua para pruebas de RF y medición de espectro.

| Elemento | Descripción | Datos |
|------|-------------|------------------|
| `-f, --freq=<f>` | Establece la frecuencia de radio en Hz | 415000000 ~ 940000000 Hz, predeterminado: 868000000 |
| `-p, --power=<f>` | Establece la potencia de radio | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, predeterminado: 10 |
| `-o, --ocp=<f>` | Establece el paso del límite de corriente | 0 ~ 63, paso 2.5mA, predeterminado: 24 |

**Ejemplo:** `lora_cw -f 868000000 -p 10 -o 24`  
Transmite una señal de onda continua a 868 MHz con 10 dB de potencia de TX y un límite de corriente OCP de 60 mA para pruebas de RF.


**4. `lora_fcc_fhss [-m <0|1>] [-s <6~12>] [-c <1|2|3|4>] [-p] [--crc=<0|1>] [--iq=<0|1>] [--net=<0|1>] [-i <t>] [-d <d>]`**

Transmite paquetes LoRa usando el modo de salto de frecuencia (FHSS) para cumplimiento FCC y pruebas de certificación RF.

| Elemento | Descripción | Datos |
|------|-------------|------------------|
| `-m, --mode=<0\|1>` | Establece el modo FHSS | 0: FHSS_125K_MODE, 1: FHSS_500K_MODE, predeterminado: 0 |
| `-s, --sf=<6~12>` | Establece el SF de LoRa | 6 ~ 12, predeterminado: 10 |
| `-c, --cr=<1\|2\|3\|4>` | Establece la tasa de codificación LoRa | 1:CR_4/5, 2:CR_4/6, 3:CR_4/7, 4:CR_4/8, predeterminado: 1 |
| `-p, --power=<f>` | Establece la potencia de radio | LPA: -17 ~ +14 dB, HPA: -9 ~ +22 dB, predeterminado: 10 |
| `--crc=<0\|1>` | Establece el CRC de LoRa | 0:DISABLE, 1:ENABLE, predeterminado: 1 |
| `--iq=<0\|1>` | Establece el modo IQ de LoRa | 0:STANDARD, 1:INVERTED, predeterminado: 0 |
| `--net=<0\|1>` | Establece la red pública | 0:Private Network, 1:Public Network, predeterminado: 0 |
| `-i, --interval=<t>` | Establece el intervalo de TX (ms) | predeterminado: 0 |
| `-d, --txt=<d>` | Establece los datos de texto a enviar | predeterminado: hello seeed! 1234567 |

**Ejemplo:** `lora_fcc_fhss -m 1 -s 10 -c 1 -p 14 --crc=1 --iq=0 --net=0 -i 1000 -d test`  
Transmite paquetes LoRa FHSS usando FHSS_500K_mode, SF10, tasa de codificación 4/5, potencia de TX de 14 dB, CRC habilitado, modo IQ estándar, modo de red privada y envía la carga útil "test" cada 1000 ms.


### Comando GPIO

**1. `gpio [-p <0~48>] [-d <0|1>] [-v <0|1>]`**

Controla los pines GPIO para pruebas de entrada/salida y validación de hardware.

| Elemento | Descripción | Datos |
|------|-------------|------------------|
| `-p, --pin=<0~48>` | Número de pin GPIO | 0 ~ 48, predeterminado: 0 |
| `-d, --direction=<0\|1>` | Establece la dirección del GPIO | 0: INPUT, 1: OUTPUT, predeterminado: 1 |
| `-v, --value=<0\|1>` | Establece el valor de salida del GPIO | 0: LOW, 1: HIGH, predeterminado: 0 |

**Ejemplo:** `gpio -p 10 -d 1 -v 1`  
Configura el GPIO 10 en modo salida y lleva el pin a nivel alto.


### Comando Flash

**1. `flash [-b <100~1000>]`**

Prueba el rendimiento de lectura y escritura de la memoria flash usando operaciones por bloques.

| Elemento | Descripción | Datos |
|------|-------------|------------------|
| `-b, --block=<100~1000>` | Número de bloques para ejecutar la prueba de lectura/escritura | 100 ~ 1000, predeterminado: 100 |

**Ejemplo:** `flash -b 500`  
Realiza una prueba de lectura/escritura de memoria flash usando 500 bloques de datos.


### Comando WiFi

**1. `ap_set <ssid> [<pass>] [-a <authmode>] [-n <channel>] [-m <max_conn>]`**

Configura el dispositivo para operar en modo WiFi AP con SSID, contraseña, tipo de autenticación y ajustes de canal personalizados.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<ssid>` | SSID del AP | Obligatorio |
| `<pass>` | Contraseña del AP | Opcional |
| `-a, --authmode=<authmode>` | Tipo de autenticación WiFi | open / wep / wpa2 / wpa2_enterprise |
| `-n, --channel=<channel>` | Canal WiFi | Opcional |
| `-m, --max_conn=<max_conn>` | Número máximo de estaciones | predeterminado: 2 |

**Ejemplo:** `ap_set MyAP 12345678 -a wpa2 -n 6 -m 4`  
Crea un AP WiFi WPA2 llamado "MyAP" en el canal 6 con un máximo de 4 conexiones de cliente.


**2. `ap_query`**

Muestra la configuración actual del AP y desconecta la conexión en modo estación.

**Ejemplo:** `ap_query`


**3. `wifi <action> [--espnow_enc=<int>] [--storage=<str>]`**

Acciones de operación WiFi.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<action>` | Acción de operación WiFi | init / deinit / start / stop / restart / status |
| `--espnow_enc=<int>` | Cifrado ESP-NOW | solo para init / restart |
| `--storage=<str>` | Tipo de almacenamiento WiFi | flash / ram |

**Ejemplo:** `wifi init --storage=flash`  
Inicializa el subsistema WiFi y almacena la configuración en la memoria flash.


**4. `wifi_count [<action>]`**

Estadísticas de conteo WiFi.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<action>` | Operación del contador| query(predeterminado) / clear |

**Ejemplo:** `wifi_count clear` : Borra las estadísticas actuales de conteo WiFi.


**5. `wifi_mode <mode>`**

Establece el modo WiFi.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<mode>` | Modo WiFi | ap / sta / apsta |

**Ejemplo:** `wifi_mode apsta` : Habilita simultáneamente el modo AP y Estación.


**6. `wifi_protocol [<protocol>] [--2g=<2g_proto>] [--5g=<5g_proto>] [-i <interface>]`**

Configura el protocolo WiFi soportado por la interfaz seleccionada (AP o STA).

**Hay dos métodos de configuración disponibles**:
- `<protocol>`: Configura el protocolo WiFi usando `esp_wifi_set_protocol()`
- `--2g / --5g`: Configura por separado los protocolos para las bandas de 2.4 GHz y 5 GHz usando `esp_wifi_set_protocols()`

**Nota**:
- `esp_wifi_set_protocol()` y `esp_wifi_set_protocols()` no se pueden usar simultáneamente.
- Si no se proporcionan parámetros, se mostrará la configuración actual del protocolo WiFi.


| Elemento | Descripción | Datos |
|------|-------------|------|
| `<protocol>` | Configura el protocolo WiFi usando esp_wifi_set_protocol() | Ejemplo: b, b/g, b/g/n <br />g/n no es válido. |
| `--2g=<2g_proto>` | Configura el protocolo de 2.4 GHz usando esp_wifi_set_protocols() | API: esp_wifi_set_protocols. <br />Cadena de protocolo: 'lr', 'b', 'g', 'n', 'ax'<br />Combinar con modo lr: 'lr/b', 'lr/g', etc.<br />Valor de mapa de bits de protocolo: valor de mapa de bits bruto en hex, p. ej.: 0x40
 |
| `--5g=<5g_proto>` | Configura el protocolo de 5 GHz | Mismo formato que --2g |
| `-i, --interface=<interface>` | Selecciona la interfaz WiFi | ap, sta, predeterminado: sta |

**Ejemplo:** `wifi_protocol --2g=lr/b/g/n -i sta`  
Configura la interfaz STA para soportar los protocolos LR, 802.11b, 802.11g y 802.11n en la banda de 2.4 GHz.


**7. `wifi_bandwidth [<cbw>] [--2g=<2g_cbw>] [--5g=<5g_cbw>] [-i <interface>]`**

Configura el ancho de banda WiFi.

**Hay dos métodos de configuración disponibles**:
- `<cbw>`: Configura el ancho de banda usando `esp_wifi_set_bandwidth()`
- `--2g / --5g`: Configura por separado el ancho de banda para las bandas de 2.4 GHz y 5 GHz usando `esp_wifi_set_bandwidths()`

**Nota**:
- `esp_wifi_set_bandwidth()` y `esp_wifi_set_bandwidths()` no se pueden usar simultáneamente.
- Si no se proporcionan parámetros, se mostrará la configuración actual del ancho de banda WiFi.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<cbw>` | Ancho de banda usando esp_wifi_set_bandwidth() | 20, 40 |
| `--2g=<2g_cbw>` | Ancho de banda de 2.4 GHz usando esp_wifi_set_bandwidths() | 20, 40 |
| `--5g=<5g_cbw>` | Ancho de banda de 5 GHz usando esp_wifi_set_bandwidths() | 20, 40 |
| `-i, --interface=<interface>` | Selecciona la interfaz WiFi | ap, sta, predeterminado: sta |

**Ejemplo:** `wifi_bandwidth --2g=20 -i sta`  
Configura la banda de 2.4 GHz para usar un ancho de canal de 20 MHz.


**8. `wifi_ps <type>`**

Establece el modo de energía de WiFi. Este comando configura el modo de ahorro de energía WiFi del dispositivo. Los diferentes modos equilibran de forma distinta el consumo de energía y el rendimiento de la red.

| Tipo | Modo | Latencia | Descripción |
|------|------|---------|-------------|
| 0 | WIFI_PS_NONE | Más baja | Sin ahorro de energía, máximo rendimiento |
| 1 | WIFI_PS_MIN_MODEM | Media | Ahorro de energía y rendimiento equilibrados |
| 2 | WIFI_PS_MAX_MODEM | Más alta | Máximo ahorro de energía, mayor retraso |

**Ejemplo:** `wifi_ps 1` : Establece el modo de ahorro de energía WiFi al ahorro mínimo de energía del módem.


**9. `wifi_country [<code>] [-s <int>] [-n <int>] [-p <str>]`**

Establece u obtiene la configuración de país de WiFi. Este comando configura el dominio regulatorio WiFi, incluidos los canales permitidos y las reglas de transmisión según las normativas del país.

| Elemento | Descripción | Datos |
|------|-------------|------|
| `<code>` | Configuración del código de país (o consulta el país actual si no se proporciona) | CN / US / JP / etc. |
| `-s, --schan=<int>` | Número de canal WiFi inicial | Entero (p. ej. 1) |
| `-n, --nchan=<int>` | Número total de canales soportados | Entero (p. ej. 13) |
| `-p, --policy=<str>` | Modo de política de país | auto (predeterminado) / manual |

**Ejemplo:** `wifi_country CN -s 1 -n 13 -p auto`  
Establece el país WiFi en CN, habilita los canales 1-13 y utiliza la política regulatoria automática.


**10. `sta_connect <ssid> [<pass>] [-b <bssid>] [-n <channel>] [-no-disconnect] [-no-reconnect] [-full-scan] [-failure_retry=<int>] [-5g-offset=<rssi_5g_offset>]`**

Conecta el dispositivo en modo STA a un punto de acceso WiFi especificado.
| Elemento | Descripción | Datos |
| :--- | :--- | :--- |
| `<ssid>` | SSID del AP WiFi | Cadena (nombre WiFi) |
| `<pass>` | Contraseña del AP | Cadena (contraseña WiFi) |
| `-b, --bssid=<bssid>` | Dirección MAC específica del AP | Dirección MAC (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<channel>` | Canal WiFi del AP | Entero |
| `--no-disconnect` | Para pruebas: no ejecutar `esp_wifi_disconnect` antes de conectar | / |
| `--no-reconnect` | Deshabilita la reconexión automática en el manejador de desconexión WiFi | / |
| `--full-scan` | Habilita el escaneo de todos los canales durante la conexión STA | / |
| `--failure_retry=<int>` | Número de intentos de reintento tras un fallo de conexión | Entero |
| `--5g-offset=<rssi_5g_offset>` | Valor de compensación para SSID de 5G al realizar conexión con escaneo completo | Entero |

**Ejemplo:** `sta_connect MyWiFi 12345678 -n 6 --failure_retry=3 --full-scan` : 
Conecta en modo STA al AP WiFi especificado con control opcional de escaneo, reintentos y comportamiento de conexión.


**11. `sta_disconnect`**

Desconecta el dispositivo del AP WiFi actual o detiene la reconexión.

**Ejemplo:** `sta_disconnect`


**12. `sta_scan [-h] [<ssid>] [-b <bssid>] [-n <int>] [--max=<int>] [--min=<int>] [--passive] [--passive-time=<int>] [--dwell=<int>] [-2 <int/hex>] [-5 <int/hex>] [--count-only]`**

Escanea los puntos de acceso WiFi disponibles en modo estación.

| Elemento | Descripción | Datos |
| :--- | :--- | :--- |
| `<ssid>` | SSID del AP WiFi | Cadena (nombre WiFi) |
| `-b, --bssid=<bssid>` | BSSID del AP | Dirección MAC (xx:xx:xx:xx:xx:xx) |
| `-n, --channel=<int>` | Canal del AP | Entero |
| `-h, --show-hidden` | Muestra AP ocultos | / |
| `--max=<int>` | Tiempo máximo de escaneo activo | Entero (ms) |
| `--min=<int>` | Tiempo mínimo de escaneo activo | Entero (ms) |
| `--passive` | Establece el tipo de escaneo a pasivo | / |
| `--passive-time` | Tiempo de escaneo pasivo | Entero (ms) |
| `--dwell=<int>` | Tiempo de permanencia en el canal principal | Entero (ms) |
| `-2, --bitmap-2g=<int/hex>` | Mapa de bits de canales de escaneo de 2.4GHz | Hex/entero (p. ej. 0x842 para ch1/6/11) |
| `-5, --bitmap-5g=<int/hex>` | Mapa de bits de canales de escaneo de 5GHz | Hex/entero (p. ej. 0x6 para ch36/40) |
| `--count-only` | Para pruebas: solo contar el número de AP escaneados. | / |

**Ejemplo:** `sta_scan -h --passive --passive-time=120 --dwell=30 -2 0x842 -5 0x6`  
Realiza un escaneo WiFi pasivo completo mostrando AP ocultos, escaneando canales seleccionados de 2.4GHz y 5GHz.


**13. `wifi_txpower [-u <unit>] [--reset]`**

Establece la potencia de transmisión WiFi o la restablece al valor predeterminado.

| Elemento | Descripción |
|------|-------------|
| `-u, --unit` | Valor de potencia TX, cada unidad = 0.25 dBm (p. ej. 8 = 2 dBm) |
| `--reset` | Restablece la potencia TX al valor predeterminado de la configuración del SDK |

**Ejemplo:** `wifi_txpower -u 8` : Establece la potencia de transmisión WiFi en 2 dBm.


### Comando de Red

**1. `ping [-W <timeout>] [-i <interval>] [-s <size>] [-c <count>] [-Q <n>] [host] [--abort]`**

Envía paquetes ICMP ECHO_REQUEST a un host de red.

| Elemento | Descripción | Datos |
| :--- | :--- | :--- |
| `-W, --timeout=<timeout>` | Tiempo de espera de la respuesta | Entero (segundos) |
| `-i, --interval=<interval>` | Intervalo entre el envío de paquetes | Flotante/entero (segundos) |
| `-s, --packetsize=<size>` | Usa `<size>` como número de bytes de datos a enviar | Entero (bytes) |
| `-c, --count=<count>` | Número de paquetes a enviar, se detiene tras `<count>` respuestas | Entero, predeterminado: 5 |
| `-Q, --tos=<n>` | Valor del campo IP Type of Service | Entero |
| `host` | Dirección IP de destino o nombre de dominio | Cadena |
| `--abort` | Detiene el proceso de ping en ejecución | ping abort -> esp_ping_stop |


**Ejemplo:** `ping -c 4 8.8.8.8` : Envía 4 solicitudes ICMP echo a 8.8.8.8.


**2. `iperf [-suV] [-c <host>] [-p <port>] [-l <length>] [-i <interval>] [-t <time>] [-b <bandwidth>] [-f <format>] [--abort]`**

Mide el rendimiento de la red (throughput, ancho de banda y latencia) usando TCP o UDP.

| Elemento | Descripción | Datos |
| :--- | :--- | :--- |
| `-c, --client` | Ejecuta en modo cliente y se conecta al servidor | IP/dominio |
| `-s, --server` | Ejecuta en modo servidor | / |
| `-u, --udp` | Usa UDP en lugar de TCP | / |
| `-V, --ipv6_domain` | Usa el protocolo IPv6 | / |
| `-p, --port=<port>` | Número de puerto del servidor | Entero |
| `-l, --len=<length>` | Longitud del búfer para la transmisión | Entero (bytes), Predeterminados: TCP=16384, IPv4 UDP=1470, IPv6 UDP=1450 |
| `-i, --interval=<interval>` | Segundos entre informes periódicos de ancho de banda | Flotante/entero (segundos) |
| `-t, --time=<time>` | Duración de la prueba | Entero (segundos), predeterminado 10s |
| `-b, --bandwidth=<bandwidth>` | Ancho de banda objetivo | Mbits/seg |
| `-f, --format=<format>` | Formato de salida | Cadena, k = Kbits/seg, m = Mbits/seg |
| `--abort` | Detiene la prueba iperf en ejecución | / |

**Ejemplo:** `iperf -c 192.168.1.10 -t 10 -i 1`: 
Ejecuta una prueba de ancho de banda TCP durante 10 segundos contra el servidor 192.168.1.10, informando resultados cada 1 segundo.


### Comando BLE

**1. `ble [-a <0|1>]`**

Controla el estado de advertising BLE para pruebas y descubrimiento Bluetooth.

| Elemento | Descripción | Datos |
| :--- | :--- | :--- |
| `-a, --adv=<0\|1>` | Control de advertising BLE | 0: Advertising Stop, 1: Advertising Begin, predeterminado: 0 |

**Ejemplo:** `ble -a 1` : Inicia el modo de advertising BLE para descubrimiento del dispositivo.


### Comando de Modo de Energía

**1. `sleep [-m <0|1|2>]`**

Configura el modo de suspensión del dispositivo para pruebas de bajo consumo.

| Elemento | Descripción | Datos |
| :--- | :--- | :--- |
| `-m, --mode=<0\|1\|2>` | Configura el modo de suspensión del dispositivo para pruebas de bajo consumo. | 0: standby, 1: light sleep, 2: deep sleep, predeterminado: 0 |

**Ejemplo:** `sleep -m 2` : Cambia el dispositivo al modo de deep sleep.


## Soporte Técnico y Discusión de Productos

Por favor, envía cualquier problema técnico a nuestro [foro](http://forum.seeedstudio.com/).

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>