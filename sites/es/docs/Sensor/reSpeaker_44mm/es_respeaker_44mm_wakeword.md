---
description: "Convierte el reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus en un satélite de voz JARVIS: WakeNet \"Jarvis\" y nueve comandos se ejecutan sin conexión en la placa, un cerebro en Python en el PC impulsa un HUD de Iron Man en el navegador."
title: Palabra de activación en reSpeaker XVF3800 44mm (JARVIS)
keywords:
  - reSpeaker 44mm
  - reSpeaker XVF3800
  - XIAO ESP32-S3 Plus
  - wake word
  - WakeNet
  - MultiNet
  - ESP-SR
  - JARVIS
  - XMOS
  - ESP32S3
image: https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg
slug: /respeaker_44mm_wakeword
sku: 100066841,100065276
last_update:
  date: 11/24/2026
  author: Kasun Thushara
createdAt: '2026-11-24'
updatedAt: '2026-11-24'
url: https://wiki.seeedstudio.com/es/respeaker_44mm_wakeword/
---

# Satélite de voz Edge AI: KWS y MultiNet NLU con reSpeaker XVF3800 44mm

## Introducción

<div class="video-container">
  <iframe width="800" height="400"
          src="https://www.youtube.com/embed/_1fvV75W3ds"
          title="reSpeaker 44mm XIAO ESP32S3 Plus — KWS and NLU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
  </iframe>
</div>

Di **«Jarvis»**. El anillo parpadea en color menta, suena un breve timbre y durante los siguientes
**6,5 segundos** el XIAO escucha uno de nueve comandos. La palabra de activación y
cada comando se ejecutan **en la placa** con Espressif ESP-SR; no se sube audio
y no se necesita ninguna cuenta.

Lo único que sale de la placa es una línea legible por UDP:

```text
JARVIS 0042 3
```

Un pequeño cerebro en Python en tu PC convierte esa línea en una acción: reproducir música,
contar un chiste, leer el tiempo, mover la cabeza del personaje, y controla un
HUD de **Iron Man / JARVIS** a pantalla completa en el navegador. La respuesta se sintetiza
en el PC y se reproduce a través del propio altavoz del reSpeaker.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/jarvis.jpg" alt="póster" width={700} height="auto" /></p>

```text
4 mics ─► XVF3800 DSP ─► I²S 16 kHz ─► XIAO ESP32-S3 Plus (WakeNet + MultiNet)
                                             │  UDP :9001  "JARVIS <seq> <id>"
                                             ▼
                                PC brain.py ── HTTP :8080 / SSE ──► browser HUD
                                             └── UDP :9100  PCM ────► reSpeaker speaker
```

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reSpeaker_44mm/respeaker_44mm_pcb_xiao.png" alt="reSpeaker XVF3800 44mm con XIAO ESP32-S3 Plus" width={400} height="auto" /></p>

## Lo que dices, lo que pasa

| momento | en la placa | en el PC |
| --- | --- | --- |
| inactivo | anillo en modo DOA, tenue, sigue las voces | HUD en espera; `LINKED` cuando la página alcanza al cerebro |
| «Jarvis» | destello menta, ~0,7 s de timbre, el códec baja del 70 % → 30 % | — |
| +0,8 s | se abre una ventana de comandos durante 6,5 s (MultiNet solo puntúa los primeros 5,8 s) | — |
| comando coincidente | animación del anillo, se envía `JARVIS <seq> <id>`, se espera ACK en 2,5 s | se ejecuta la acción, tarjeta + registro de eventos + respuesta hablada |
| nada coincide | doble parpadeo ámbar | registro: `no command heard (wake fired, phrase not matched)` |

## Por qué está construido de esta manera

| decisión | motivo |
| --- | --- |
| la palabra de activación y los comandos se ejecutan **en el XIAO** | funciona aunque el WiFi del lugar caiga, sin latencia, sin problema de privacidad, sin factura de nube |
| **9** comandos, no treinta | MultiNet se confunde a medida que crece la tabla; nueve frases con un verbo distinto cada una se reconocen de forma fiable |
| un paquete de **texto** por comando | un comando es `JARVIS 0042 3` — 14 bytes, legible en Wireshark, trivial de reintentar |
| la palabra de activación vive en la **partición del modelo** | los paquetes WakeNet son de ~3,3 MB; van en la partición `esp_sr_16`, no en el sketch |
| HUD en el **PC** | el XIAO no tiene pantalla, y un navegador es la pantalla 1080p más barata |

## Requisitos previos

**Hardware**

| elemento | recomendación | por qué |
| --- | --- | --- |
| reSpeaker **XVF3800 44mm** con XIAO | SKU 100066841 o 100065276 (con carcasa) | micrófonos, DSP XVF3800, anillo LED, códec, amplificador y cableado I²S están en la placa |
| Seeed **XIAO ESP32-S3 Plus** | 16 MB flash / 8 MB PSRAM, pre-soldado | la partición del modelo necesita 4 MB y el anillo de audio vive en PSRAM |
| cable **de datos** USB-C | no solo de carga | flasheas el puerto del XIAO, no el puerto XMOS |
| altavoz | la unidad de 5 W 4 Ω en el conector JST | las respuestas y la música salen del robot |
| WiFi de 2,4 GHz | WPA2, **sin aislamiento de clientes** | el ESP32-S3 no tiene radio de 5 GHz, y el aislamiento bloquea PC ↔ placa |
| PC | Windows 10/11 para respuestas habladas, Chrome o Edge | ejecuta el cerebro y el HUD |

**Software**

| software | versión | nota |
| --- | --- | --- |
| Arduino IDE 2 o `arduino-cli` | 1.5.1 | ESP_SR viene dentro del core, sin paso en Library Manager |
| núcleo esp32 | **3.3.11** | la API de ESP-SR y la partición `esp_sr_16` están ligadas a esta versión |
| Python | **3.11** | cerebro |
| `numpy`, `soundfile`, `scipy` | recientes | decodifican MP3 a PCM de 16 kHz para el altavoz del robot |
| Git | 2.50+ | clonar el proyecto |

:::note
La matriz debe estar ejecutando el **firmware I²S de 16 kHz**
(`respeaker_44mm_i2s_c16k2ch_v1.0.0.bin`, XVF3800 como maestro I²S, 2 canales).
Con la imagen de 48 kHz el XIAO ve silencio o basura y ESP-SR nunca se carga.
Actualízalo desde [Update Firmware](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/#update-firmware)
y confirma con el sketch `firmware/audio_rms` del proyecto: el habla debería mostrar
RMS en los cientos en el canal izquierdo.
:::

Presupuesto de tiempo en una máquina nueva: toolchain 20 min, comprobación XMOS 10 min, palabras clave
y primer flasheo 15 min, cerebro y HUD 5 min, verificación en vivo 10 min.

## Configura el IDE

Instala el core **explícitamente**; “latest” no es contra lo que se construyó este firmware.

__CODE_LINE_PLH__
```powershell
arduino-cli core update-index
arduino-cli core install esp32:esp32@3.3.11
arduino-cli board list

`board list` debería mostrar tu puerto con el core S3 adjunto. No esperes que
nombre un XIAO: el core no tiene tal entrada, así que imprime algo como

__CODE_LINE_PLH__
```text
COM9 serial Serial Port (USB) ESP32 Family Device esp32:esp32:esp32_family
                             Ozobot DRVKit        esp32:esp32:ozobot_drvkit

El nombre de la placa es cosmético: el FQBN de abajo es lo que decide la compilación. Cierra cualquier
monitor serie antes de flashear.

Luego clona el proyecto:

__CODE_LINE_PLH__
```powershell
git clone https://github.com/KasunThushara/reSpeaker_44_wakeword.git
cd reSpeaker_44_wakeword

El FQBN no es opcional. El core instalado no tiene entrada de placa `XIAO_ESP32S3_Plus`,
y solo el esquema `esp_sr_16` tiene la partición del modelo.

__CODE_LINE_PLH__
```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"


& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo

| opción | motivo |
| --- | --- |
| `FlashSize=16M,PSRAM=opi` | XIAO ESP32-S3 **Plus**: 16 MB flash, 8 MB PSRAM octal (el anillo de audio de 3 s) |
| `PartitionScheme=esp_sr_16` | crea la partición de ~4 MB para el paquete ESP-SR de 3,3 MB |
| `CDCOnBoot=cdc` | `Serial` debe salir por USB nativo, porque GPIO43 (UART0 RX) es el pin de datos I²S |
| objetivo `esp32s3` | el XIAO es un ESP32-S3 simple, no una variante Plus con su propio archivo de placa |

En el IDE, selecciona **ESP32S3 Dev Module** y ajusta Flash Size a 16 MB, PSRAM
**OPI PSRAM**, Partition Scheme **ESP SR 16MB**, USB CDC On Boot **Enabled**:
estos deben coincidir exactamente con el FQBN.

## Configura las palabras clave

Aquí se llaman “keyword” a dos cosas distintas:

| qué | dónde vive | cambiarla requiere |
| --- | --- | --- |
| la palabra de activación **«Jarvis»** | paquete de modelo `build/srmodels_jarvis.bin` | un reflasheo del modelo |
| los **nueve comandos** | `sr_commands[]` en `firmware/wake_demo/wake_demo.ino` | recompilar y reflashear |

### La palabra de activación

La palabra está en el modelo, no en el sketch. Esta compilación usa
`wakenet9l_tts1h8_Jarvis_3_0.627_0.632`, medido en 4/4 a 30–50 cm y 3/3 a
1,5–2 m. Los paquetes confirmados en `build/` son:

| paquete | tamaño | uso |
| --- | --- | --- |
| `srmodels_jarvis.bin` | 3,340,189 B | **el que hay que flashear**: “Jarvis”, umbrales `0.627_0.632` |
| `srmodels_stock_backup.bin` | 3,340,296 B | “Hi ESP” de fábrica, último recurso para volver atrás |

Una palabra de activación diferente implica un modelo WakeNet diferente — ya sea otro paquete del
zoológico de modelos de Espressif o uno que entrenes tú — y nada en el sketch cambia. Los
números en el nombre del modelo son sus umbrales de detección; viven dentro del
paquete, así que la sensibilidad se ajusta reempaquetando, no editando el sketch.

:::note Otras palabras de activación, otras listas de palabras clave
El mismo repositorio incluye una segunda demo con una palabra de activación diferente y su propia
lista de ocho frases: consulta
[`pc_brain_walle/`](https://github.com/KasunThushara/reSpeaker_44wakeword/tree/main/pc_brain_walle)
(frases como “go straight ahead” y “charge your battery”) y su propio paquete en
`build/`. Leerlo es la forma más rápida de ver cómo se cablea otro conjunto de palabras clave:
pero esta página se queda en **Jarvis** y los nueve comandos de abajo, porque ese par
es con el que el HUD, los ids del cerebro y `build/srmodels_jarvis.bin` están alineados.
:::

### Los comandos

Abre `firmware/wake_demo/wake_demo.ino` y sustituye las dos tablas cerca de la parte superior
por este bloque. Los ids deben permanecer idénticos a `COMMANDS` en
`pc_brain/brain.py`; son el contrato entre placa, cerebro y HUD, y
**no** son índices de array.

__CODE_LINE_PLH__
```cpp
static const sr_cmd_t sr_commands[] = {
  {1, "play some music"},
  {2, "stop the music"},
  {3, "move your head"},
  {4, "tell me a joke"},
  {5, "change the mood"},
  {6, "show me the weather"},
  {7, "open my tasks"},
  {8, "shut it down"},
  {9, "ask the model"},


static const char *PHRASE_TEXT[] = {
  "play some music", "stop the music", "move your head", "tell me a joke",
  "change the mood", "show me the weather", "open my tasks", "shut it down",
  "ask the model"
};

El clon trae una tabla de ocho frases de relleno para que el sketch compile
tal cual; sustitúyela literalmente por el bloque de arriba. Nada más en el sketch conoce
las frases.

Reglas de frases aprendidas a base de prueba y error:

- **tres o más palabras, un verbo distinto cada una**: play / stop / move / tell /
  change / show / open / shut / ask
  - evita pares mínimos (“show me the weather” y “show me the time” se roban
  las coincidencias entre sí)
  - evita formas en `-ing` y palabras fuera de vocabulario; “todo” no puede ser pronunciado por
  el G2P de MultiNet, por eso la frase es **“open my tasks”** y no
  MultiNet's G2P, which is why the phrase is **“open my tasks”** and not
  “muestra mis tareas”
- una frase nueva con un id que no existe en `brain.py` es inofensiva pero no
  hace
- **9 frases es el límite cómodo** para esta tabla

:::note El aro sigue encendiéndose, pero no distingue los comandos
`animForId()` en el mismo sketch asigna animaciones por **rango de id**, un remanente
de la demo para la que se escribió el sketch. Con los nueve ids anteriores, **1–6**
reproducen la rueda de color de “reproduce algo de música” y **7–9** reproducen el arcoíris de chiste;
`A_WEATHER`, `A_SHUT` y `A_ASK` nunca se alcanzan. Eso es solo cosmético: el
destello de activación, el timbre y el paquete no se ven afectados. Si la demo necesita una animación
diferente por comando, sustituye `animForId()` por una tabla de nueve entradas en lugar
del switch por rangos.
:::

### Personaliza el log (opcional)

El pack y el sketch se comparten con la otra demo del repositorio, así que las cadenas que
la placa imprime al arrancar siguen nombrando esa demo. Nada funcional depende de ellas,
pero el log de arranque en esta página dice JARVIS, y hacer que coincida facilita mucho
la resolución de problemas. Tres lugares en `wake_demo.ino`:

Sustituye las cuatro líneas `Serial.println` que abren `setup()`:

```cpp
  Serial.println(F("=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ==="));
  Serial.println(F("say \"Jarvis\", then one of the 9 voice actions:"));
  Serial.println(F("  play some music / stop the music / move your head"));
  Serial.println(F("  tell me a joke / change the mood / show me the weather"));
  Serial.println(F("  open my tasks / shut it down / ask the model"));
```

la línea `ready -` justo después de `ESP_SR: ok`:

```cpp
  Serial.println(F("ready - say Jarvis, then a command right away"));
```

y el banner de activación:

```cpp
    Serial.printf("\n[%6lu ms] *** \"HI JARVIS\" #%lu ***\n",
```

Sáltate esto y la placa funcionará de forma idéntica: simplemente registra `walle`, `Hi Walle`,
`8 voice actions` y `*** "HI WALLE" #1 ***`, lo cual resulta confuso si estás
comparando con el ejemplo de abajo.

### Pon el modelo en el directorio de build

El hook posterior a la compilación del core copia `srmodels.bin` solo si encuentra
`{build.path}\libraries\ESP_SR`; nunca lo hace, porque ESP-SR se compila in situ.
Copia el pack a mano antes de subirlo, o la placa arrancará con el pack de fábrica
“Hi ESP”.

```powershell
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force
```

## Añade WiFi, la dirección del PC y los puertos

Edita el bloque encima de `setup()`:

```cpp
#define WIFI_SSID "YOUR_2G_SSID"
#define WIFI_PASS "YOUR_PASSWORD"
#define PC_IP     "192.168.7.217"
#define PC_PORT   9001
```

El clon se envía con `WIFI_SSID` y `WIFI_PASS` **vacíos**, y un par vacío no es una
vía de error que puedas arreglar después: la placa arranca solo en local, imprime
`WiFi: no credentials - edit WIFI_SSID / WIFI_PASS`, y nunca envía un paquete.
Rellena ambos antes del primer flasheo.

- **Solo 2.4 GHz**, WPA2, ambos dispositivos en la misma subred, sin aislamiento
  AP/cliente.
- Asigna al PC una dirección **fija** (reserva DHCP). El cerebro aprende la
  dirección de la placa a partir de los paquetes entrantes, pero la placa necesita la dirección del PC al
  arrancar.
- No hay portal de configuración: cambiar el WiFi o la dirección del PC implica recompilar
  y reflashear.

:::note No uses ping para comprobar el enlace
En una red de recinto con más de un punto de acceso la placa puede acabar en la
otra mitad de la subred: un bridge `/23` que reparte `192.168.6.x` a la radio de 2.4 GHz
y `192.168.7.x` a la de 5 GHz es normal. El ICMP entre dos clientes inalámbricos
suele descartarse incluso cuando el UDP fluye bien, así que `ping` informa
“Destination host unreachable” en un enlace que sí funciona.

Juzga el enlace por el propio log de la placa: `-> PC  JARVIS 0001 4` seguido de
`<- ACK 1` significa que ambas direcciones están arriba. Si el ACK nunca llega, entonces mira
el firewall.
:::

:::caution La dirección del PC también está escrita como octetos
`PC_IP` solo se usa en la línea de log. El destino UDP son tres llamadas separadas
a `IPAddress(192, 168, 7, 217)` — el datagrama de calentamiento ARP, `sendCommand()`
y `resendCommand()`. Sustituye los octetos en las tres, o la placa hablará con
el PC equivocado mientras el log imprime la dirección correcta.
:::

| dirección | protocolo | puerto | usado para |
| --- | --- | --- | --- |
| placa → PC | UDP | **9001** | `JARVIS <seq> <id>`, el ACK vuelve al puerto origen de la placa |
| PC → placa | UDP | **9100** | música PCM de 16 kHz y TTS, más paquetes de volumen `JV <pct>` |
| navegador → PC | TCP | **8080** | HUD, API, SSE |

Abre los puertos una vez, en PowerShell como Administrador:

```powershell
New-NetFirewallRule -DisplayName "JARVIS UDP in"  -Direction Inbound -Protocol UDP -LocalPort 9001,9100 -Action Allow -Profile Private
New-NetFirewallRule -DisplayName "JARVIS HTTP in" -Direction Inbound -Protocol TCP -LocalPort 8080 -Action Allow -Profile Private
```

En una red que Windows ya confía a menudo esto es redundante: la primera vez que
`python.exe` vincula 9001 aparece un aviso y “Allow” es suficiente. Añade las reglas si
ese aviso se descartó, si el perfil de LAN es Público, o si la placa registra
`no ACK` mientras el PC no muestra nada.

## Flashear

Compila → copia el modelo → sube, como una sola secuencia. Subir contra un
directorio de build obsoleto flashea una app *y* un modelo obsoletos.

```powershell
$cli  = "C:\Users\<you>\AppData\Local\Programs\Arduino IDE\resources\app\lib\backend\resources\arduino-cli.exe"
$fqbn = "esp32:esp32:esp32s3:FlashSize=16M,PSRAM=opi,PartitionScheme=esp_sr_16,CDCOnBoot=cdc"

& $cli compile --fqbn $fqbn --output-dir build\wake_demo firmware\wake_demo
Copy-Item build\srmodels_jarvis.bin build\wake_demo\srmodels.bin -Force
& $cli upload -p COM9 --fqbn $fqbn --input-dir build\wake_demo
```

Sustituye `COM9` por tu puerto (`/dev/cu.usbmodem*` en macOS, `/dev/ttyACM*` en
Linux). Si el flasheo no puede conectar, mantén pulsado **BOOT**, toca **RESET**, suelta
**BOOT** y reintenta.

Abre el monitor a **115200**. Lo que importa:

```text
=== wake_demo jarvis: Jarvis -> chime -> action -> PC + LED -> DOA ===
say "Jarvis", then one of the 9 voice actions:
  play some music / stop the music / move your head
  tell me a joke / change the mood / show me the weather
  open my tasks / shut it down / ask the model
WiFi: joining YOUR_2G_SSID......
WiFi: ip=192.168.7.205 rssi=-52 dBm -> PC 192.168.7.217:9001
volume: 70% (-3.0 dB, DAC 0x06) boot
i2s full duplex: ok
audio: ring 96000 bytes (ok)
audio: listening on 9100
audio tuning: AGCMAXGAIN=64, ASROUTGAIN=1.5, ASR on
  -> DOA idle (boot)
MC Quantized vadnet1:vadnet1_mediumv1_Speech_1_0.5_0.1, min speech:128 ms, min noise:992 ms, mode:0, threshold:0.500, channel:1, tigger:v1
MC Quantized wakenet9: wakenet9l_tts1h8_Jarvis_3_0.627_0.632, tigger:v4, mode:0, p:0
Build fst from commands.
Quantized MultiNet7:rnnt_ctc_2.0, name:mn7_en
Quantized MultiNet7 search method: 2, time out:5.8 s
Build fst from commands.
ESP_SR: ok
ready - say Jarvis, then a command right away
  DOA 183 deg
```

- `WiFi: ip=…` — si esto falla, las credenciales o la banda son incorrectas
- la **línea wakenet** debe decir `Jarvis` y `0.627_0.632`; si dice `Hi ESP`,
  se saltó el paso de copiar el modelo
- `ESP_SR: ok` — si se queda colgado o se reinicia aquí, falta el modelo en el
  directorio de build
- `DOA … deg` sigue repitiéndose unas diez veces por segundo; eso es el aro
  siguiendo voces, no un error. El log es locuaz por diseño

Di **“Jarvis”** una vez. El aro parpadea, suena el timbre y el log imprime
`*** "HI JARVIS" #1 ***`. Di un comando inmediatamente después y la placa responde
con la frase que ha emparejado:

```text
[197851 ms] *** "HI JARVIS" #1 ***
[198520 ms] chime done
[198671 ms] command mode open
[198997 ms] listening for a command (6.5 s)
[200773 ms] raw id=4 phrase=4 -> "tell me a joke" -> cmd 4
[200774 ms] -> PC  JARVIS 0001 4
     <-     ACK 1
```

Si tu log dice `HI WALLE` en su lugar, te saltaste el paso de personalización: la activación y
los comandos están bien de cualquier modo.

| síntoma | causa | solución |
| --- | --- | --- |
| `Sketch too big` | esquema de particiones incorrecto | usa `PartitionScheme=esp_sr_16` |
| sin salida serie | `CDCOnBoot` no establecido | añade `CDCOnBoot=cdc`, vuelve a flashear |
| `ESP_SR: FAILED` o bucle de reinicio | modelo ausente en `build\wake_demo` | copia `srmodels_jarvis.bin` de nuevo |
| se activa con “Hi ESP” | pack de serie flasheado | repite el paso de copia, comprueba la línea wakenet |
| la activación salta, no pasa nada en el PC | frases o ids distintos de los nueve anteriores | corrige `sr_commands[]` y `brain.py` juntos |
| `no ACK for seq …` en el log de la placa | octetos del PC o firewall | corrige las tres llamadas `IPAddress(...)`, permite UDP 9001 |
| HUD vivo pero el log de eventos nunca se actualiza | un `brain.py` más antiguo aún posee 9001/8080 | detén todos los procesos de python, arranca un solo brain |

## Abre la interfaz

Instala la parte de Python y luego ejecuta el lanzador:

```powershell
py -3.11 -m pip install numpy soundfile scipy
cd reSpeaker_44_wakeword\pc_brain
.\start_demo.bat
```

`start_demo.bat` inicia el brain y abre Chrome (Edge como alternativa) en modo
kiosco en **http://localhost:8080** con reproducción automática permitida, así que el primer sonido no
necesita un clic. Ruta manual: `python brain.py`, luego abre la misma URL.
**Alt+F4** sale del modo kiosco; cierra la ventana minimizada “JARVIS brain” para detener el UDP.

:::caution Solo puede ejecutarse un brain a la vez
El lanzador no busca una instancia existente. Un `brain.py` que quedó de una
ejecución anterior mantiene UDP 9001 y TCP 8080, la copia nueva toma el puerto que
siga libre, y el HUD sigue sirviendo en silencio al proceso *antiguo*: la página parece
viva, el log de eventos nunca se actualiza y los paquetes van al brain equivocado. Antes de una
demo, cierra la ventana anterior de “JARVIS brain”, o:

```powershell
Get-Process python | Stop-Process -Force
```
:::

{/* TODO(image): añade aquí una captura del HUD — busto de Iron Man, reactor arc, nueve botones de comando, log de eventos. */}

En pantalla:

- el **busto wireframe de Iron Man** con un reactor arc que palpita con la música
- **izquierda**: nueve botones de comando etiquetados con la frase exacta que hay que decir; las teclas
  **1–9** envían los mismos ids, que es como se prueba sin hablar
- **arriba a la izquierda**: estado y la frase que la placa escuchó; **arriba a la derecha**:
  `LINKED` / `NO LINK`, la dirección del PC y un reloj
- **abajo a la derecha**: registro de eventos, el más reciente primero; **abajo en el centro**: tarjetas para
  el clima, tareas, chistes y respuestas del modelo

¿No tienes una placa a mano? El cerebro se puede controlar directamente:

```powershell
python sim.py 1        # play music
python sim.py 4        # tell a joke
python sim.py demo     # 1 -> 2 -> 4 -> 5 with pauses
```

`config.json` contiene la configuración del lugar: `esp_ip` (última dirección conocida de la placa,
actualizada automáticamente), `audio_sink` (`speaker` transmite al robot, `pc`
reproduce localmente), `default_track`, `weather_lat` / `weather_lon`, y
`openrouter_key` — deja la clave vacía y los chistes/respuestas usarán líneas predefinidas.
Prefiere la variable de entorno `OPENROUTER_API_KEY` en lugar de escribirla en el
archivo.

La lista de modelos incluida son todas rutas `:free`, y estas están muy congestionadas:
`HTTP 429 … rate-limited upstream` en el registro es normal, no una clave incorrecta. El cerebro
revisa `openrouter_model` → `openrouter_fallbacks` → una línea predefinida, así que **“preguntar al
modelo” puede tardar 15–25 s** antes de responder, y a veces responde desde la
lista sin conexión. Verifica la clave en sí con `curl` contra
`https://openrouter.ai/api/v1/key` en lugar de observando una sola respuesta.

:::note Las respuestas habladas necesitan Windows
El cerebro sintetiza voz con Windows **System.Speech** y transmite el WAV
al reSpeaker. En macOS o Linux la palabra de activación, los comandos, las tarjetas, el
registro y la música siguen funcionando — pero JARVIS no hablará.
:::

## Límites

- **Solo inglés** — el modelo MultiNet en esta compilación es `mn7_en`.
- **16 kHz en todas partes** — aproximadamente una banda de audio de 8 kHz; suficiente para voz y señales,
  no para alta fidelidad.
- **Un flujo a la vez** — un sonido nuevo detiene el anterior.
- **Se necesita WiFi al arrancar** para cualquier cosa que llegue al PC; la placa aún
  se activa y parpadea sin conexión, pero no llega ninguna acción.
- **El modelo de activación está entrenado con TTS** y es más sensible a la pronunciación que
  “Hi ESP”. Recalibra los umbrales para una sala ruidosa.

## Recursos

- Proyecto (firmware, cerebro y HUD): [KasunThushara/reSpeaker_44_wakeword](https://github.com/KasunThushara/reSpeaker_44_wakeword)
- Introducción a la placa y actualización de firmware: [reSpeaker XVF3800 44mm](https://wiki.seeedstudio.com/es/respeaker_44mm_introduction/)
- Imágenes de firmware XMOS: [reSpeaker_XVF3800_4MIC_44mm](https://github.com/respeaker/reSpeaker_XVF3800_4MIC_44mm)
- Configuración de XIAO: [XIAO ESP32-S3 Getting Started](https://wiki.seeedstudio.com/es/xiao_esp32s3_getting_started/)
- Modelos y API de ESP-SR: [espressif/esp-sr](https://github.com/espressif/esp-sr)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
