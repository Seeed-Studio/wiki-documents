---
description: Explora el desarrollo de audio local en el Wio Tracker L2 Pro, incluyendo proyectos de control por voz, almacenamiento de audio y reproducción con Cairn. La transmisión de voz a través de MeshCore no es compatible en este flujo de trabajo.
title: Desarrollo de audio
keywords:
  - Wio Tracker L2 Pro
  - MeshCore
  - Cairn
  - Audio
  - I2S
image: https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg
slug: /meshcore_audio_development_l2
sku: 100029766
sidebar_position: 2
last_update:
  date: 11/16/2026
  author: Michelle Huang
createdAt: 2026-09-19T00:00:00.000Z
updatedAt: '2026-09-24'
url: https://wiki.seeedstudio.com/es/meshcore_audio_development_l2/
---

## Comprender el límite del desarrollo de audio

Un micrófono y un altavoz permiten que un dispositivo capture y reproduzca sonido. Enviar mensajes de voz a otro dispositivo también requiere suficiente tiempo de aire de radio.

| Caso de uso | Principio | Límite de desarrollo |
| --- | --- | --- |
| Reproducir música o archivos grabados | Audio local<br/>No requiere LoRa| ✅ |
| Grabar notas de voz | Audio local<br/>No requiere LoRa | ✅ |
| Desarrollar controles de voz locales | Reconocimiento en el dispositivo y acciones locales<br/>Requiere implementación de firmware personalizada | ✅ |
| Enviar un clip de voz corto a través de MeshCore | El tráfico de audio puede saturar el canal compartido y bloquear mensajes urgentes | ❌ |
| Llamadas de voz continuas o transmisión tipo walkie-talkie | El tráfico de audio puede saturar el canal compartido y bloquear mensajes urgentes | ❌ |

### Alcance compatible para el desarrollo de audio

El desarrollo de audio en L2 Pro está actualmente limitado a **procesamiento, almacenamiento y reproducción locales**. Las direcciones de desarrollo compatibles incluyen:

- **Control de voz local:** Reconocer un comando en el dispositivo y usarlo para activar una acción local.
- **Grabación y almacenamiento de audio:** Capturar la entrada del micrófono y guardar grabaciones en la microSD.
- **Reproducción de audio:** Reproducir música y notas de voz grabadas.
- **Sonidos de notificación locales:** Reproducir un sonido almacenado localmente cuando llega un mensaje de texto u otro evento, sin transmitir el archivo de sonido por LoRa.

:::warning
**La transmisión de mensajes de voz a través de la red MeshCore no es compatible en este flujo de trabajo de desarrollo de audio para L2 Pro.

Los nodos LoRa mesh comparten un tiempo de aire de radio limitado. Las transferencias de audio pueden ocupar el canal durante períodos prolongados; el enrutamiento y las retransmisiones añaden más carga. Esto puede causar una congestión grave y detener la comunicación de la malla, dejando los mensajes urgentes sin acceso al canal o sin llegar a tiempo.

Mantén la captura de audio, el procesamiento de voz, el almacenamiento y la reproducción en el dispositivo. No envíes cargas útiles de audio a través de la red mesh.
:::

### Consejos para el desarrollo de audio local

Para una aplicación de audio local personalizada, planifica:

- **Entrada y salida:** Valida por separado las rutas de micrófono y altavoz, incluyendo la ganancia del micrófono y el volumen de reproducción.
- **Reconocimiento de voz local:** Elige un motor de reconocimiento en el dispositivo que se ajuste al presupuesto de procesamiento y memoria del ESP32-S3.
- **Almacenamiento:** Selecciona un formato de muestreo y una duración de grabación que se ajusten al espacio disponible en la microSD, y gestiona las condiciones de tarjeta llena o fallos de escritura.
- **Planificación de tareas:** Evita que el procesamiento de audio y el acceso a archivos bloqueen el manejo de paquetes mesh o la interfaz táctil.

## Base de hardware en L2 Pro

### Rutas de señal de audio

El subsistema de audio del L2 Pro utiliza una interfaz I2S, circuitería de códec y una ruta de micrófono.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/l2_audio_hardware_schematic.png" style={{width:600, height:'auto'}}/>
</div>

### Asignación de pines de audio

| Interfaz | Señal de la placa | GPIO del ESP32-S3 | Propósito |
| --- | --- | --- | --- |
| I2S | `CODEC_I2S0_MCLK` | GPIO10 | Reloj maestro |
| I2S | `CODEC_I2S0_SCLK` | GPIO11 | Reloj de bits, también llamado BCLK |
| I2S | `CODEC_I2S0_LRCK` | GPIO12 | Reloj de palabra/marco, también llamado WS |
| I2S | `CODEC_I2S0_DSDIN` | GPIO16 | ESP32-S3 TX → entrada de datos del códec; reproducción |
| I2S | `CODEC_I2S0_SDOUT` | GPIO15 | Salida de datos de audio → ESP32-S3 RX; grabación |
| I²C | `IIC0_SDA` | GPIO47 | Datos de configuración de periféricos |
| I²C | `IIC0_SCL` | GPIO48 | Reloj de configuración de periféricos |


## Instalar Cairn en L2 Pro

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_page.png" style={{width:600, height:'auto'}}/>
</div>

### Acerca de Cairn

[Cairn](https://github.com/cvhviz/CAIRN) es un fork desarrollado por la comunidad del firmware complementario de MeshCore con su propia interfaz en el dispositivo. Su compilación para L2 Pro combina mensajería mediante pantalla táctil con herramientas de audio locales y funciona con los clientes oficiales de MeshCore. Consulta las [notas de la versión](https://github.com/cvhviz/CAIRN/releases) cuando uses otra compilación. 

### Preparación

Prepara:

- Un **Wio Tracker L2 Pro** con su antena LoRa conectada.

- Un **cable de datos** USB-C y un ordenador con Chrome o Edge.

- Una tarjeta microSD para música y grabaciones. Cairn recomienda **SDHC de 8–32 GB formateada como FAT32**; exFAT no es compatible con su flujo de trabajo documentado para tarjetas en L2 Pro.

- Un archivo MP3 o WAV corto para una prueba de reproducción.


### Flasheo del firmware

**Paso 1: Descargar el firmware para L2 Pro**

Abre [Cairn Releases](https://github.com/cvhviz/CAIRN/releases) y despliega **Assets**. Selecciona el archivo que contenga **`WioL2Pro`**.

Para este tutorial de primera instalación, descarga **`-full.bin`**. Ya incluye la aplicación; no escribas también `-update.bin`.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_firmware.png" style={{width:900, height:'auto'}}/>
</div>

**Paso 2: Entrar en modo de descarga**

1. Conecta el L2 Pro al ordenador y enciende su interruptor de alimentación.

2. Mantén pulsado **User/Boot**.

3. Mientras lo mantienes pulsado, presiona y suelta **RST**.

4. Suelta **User/Boot**.

**Paso 3: Flashear a través del navegador**

1. Abre [Espressif's Web Flasher](https://espressif.github.io/esptool-js/).

2. Haz clic en **Connect** y selecciona el puerto serie del dispositivo.

3. Selecciona **Erase Flash** y espera a que termine.

4. Establece la dirección del firmware en **`0x0`** y selecciona el archivo `-full.bin` de L2 Pro descargado.

5. Haz clic en **Program** y espera a que finalice la escritura.

6. Desconecta la herramienta de flasheo y presiona **RST** para iniciar Cairn.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Carin_web_flasher.png" style={{width:900, height:'auto'}}/>
</div>

## Explorar la interfaz de audio de Cairn

### Abrir el hub de Audio

Inserta la tarjeta microSD preparada. Desde **Home**, desliza hacia abajo para encontrar la tarjeta **Audio**, o abre **Audio** desde el panel rápido. El hub proporciona acceso al reproductor y a la grabadora.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_audio_hub.jpg" style={{width:600, height:'auto'}}/>
</div>

### Reproducir música desde la microSD

1. Crea una carpeta llamada **`music`** en la raíz de la tarjeta.

2. Copia en ella un archivo MP3 o WAV corto y expulsa la tarjeta de forma segura del ordenador.

3. Inserta la tarjeta en el L2 Pro, abre el reproductor y selecciona el archivo desde **Library → Music**.

4. Comienza con un volumen bajo y comprueba la reproducción.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_music.jpg" style={{width:600, height:'auto'}}/>
</div>

### Grabar una nota de voz

1. Abre **Recorder** desde el hub de Audio.

2. Abre sus ajustes para elegir la calidad de grabación, la ganancia del micrófono y un límite de tiempo.

3. Inicia una grabación corta, habla cerca del micrófono y luego detén la grabación.

4. Abre **Library → Recordings** para escucharla.

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Cairn/Cairn_record.jpg" style={{width:600, height:'auto'}}/>
</div]

La grabadora guarda archivos WAV en **`Recordings`**, usando fechas y horas cuando el reloj está configurado. Ofrece grabación a 8 o 16 kHz, **Voice start** para comenzar al detectar sonido y marcadores. La barra de estado muestra **MIC** o **REC** mientras el micrófono está activo.


### Probar sonidos de notificación personalizados

Copia un MP3 o WAV corto en una carpeta **`Sounds`** en la raíz. Abre **Settings → Hardware → Sound**, selecciona un evento y elige un archivo de la lista de sonidos de la tarjeta.


### Otras funciones de Cairn que vale la pena probar

- **Mensajería autónoma:** Usa el teclado táctil, las respuestas rápidas y los emoji para conversaciones en canales y directas.

- **Mapas y posicionamiento:** Explora mapas en el dispositivo, información GPS y posiciones de nodos cercanos; prepara la cobertura sin conexión antes de salir.

- **Inspección de radio:** Inspecciona el tráfico de paquetes, la información de señal y los escaneos de espectro/banda para comprender la actividad de radio local.

- **Acceso a archivos:** Prueba la transferencia por Wi‑Fi o el modo de unidad USB para gestionar el contenido de la microSD sin retirar la tarjeta.

- **Personalización del dispositivo:** Explora temas, acciones de botones y la visualización del historial de la batería.

## Soporte técnico y debate sobre el producto

- **El navegador no puede encontrar el dispositivo:** Comprueba el cable de datos USB, cierra otras aplicaciones serie y repite la secuencia User/Boot + RST.


- **Los archivos de música no aparecen:** Comprueba el formateo FAT32, la carpeta `Music` en la raíz y el formato MP3/WAV. Usa la página de almacenamiento para inspeccionar o volver a escanear la tarjeta.


- **Una grabación está en silencio:** Comprueba la ganancia y los ajustes de grabación. Para firmware personalizado, verifica la inicialización del micrófono y la ruta RX de GPIO15 por separado de la reproducción.

## Soporte técnico y debate sobre el producto

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

