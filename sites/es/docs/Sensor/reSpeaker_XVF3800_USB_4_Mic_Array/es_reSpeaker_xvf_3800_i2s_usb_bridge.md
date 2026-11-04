---
description: Firmware de Arduino para un puente de audio y control USB con ESP32-S3 conectado a un reSpeaker XVF3800. Una única conexión USB nativa proporciona captura estéreo, reproducción estéreo y una interfaz serie CDC para el control del reSpeaker XVF3800 a través de I2C.
title: Puente de audio USB reSpeaker XVF3800 con XIAO ESP32S3
keywords:
  - reSpeaker
  - XIAO
  - ESP32S3
  - USB Audio
  - I2S
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/6-ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3.webp
slug: /respeaker_xvf3800_i2s_usb_bridge
last_update:
  date: 10/12/2026
  author: Kasun Thushara
createdAt: '2026-10-12'
updatedAt: '2026-10-12'
url: https://wiki.seeedstudio.com/es/respeaker_xvf3800_i2s_usb_bridge/
---

# Puente de audio USB reSpeaker XVF3800 con XIAO ESP32S3

## Descripción general

Este proyecto proporciona **firmware de Arduino para un puente de audio y control USB con ESP32-S3** conectado a un **reSpeaker XVF3800**. Una única conexión USB nativa proporciona **captura estéreo**, **reproducción estéreo** y una **interfaz serie CDC** para el control del reSpeaker XVF3800 a través de **I2C**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg" alt="reSpeaker XVF3800 with XIAO ESP32S3" width={600} height="auto" /></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/ReSpeaker-XVF3800-4-Mic-Array-With-XIAO-ESP32S3-p-6489.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

## Funciones del firmware

- Captura y reproducción USB Audio Class 1 (UAC1) sobre USB de velocidad completa.
- PCM estéreo con signo de 32 bits little-endian, con ranuras I2S Philips de 32 bits.
- Selección en tiempo de compilación de funcionamiento a 16 kHz o 48 kHz y de la fuente de reloj I2S.
- Captura y reproducción USB simultáneas. USB e I2S usan la misma frecuencia de muestreo nominal.
- Búfer de reproducción y corrección de deriva de reloj por software, con controles de volumen y silencio del host USB para el maestro y los canales individuales.
- Captura sin procesamiento de volumen de reproducción ni remuestreo por software.
- Comandos USB CDC reenviados a la interfaz de control I2C del reSpeaker XVF3800, con una utilidad de host en Python y diagnósticos de audio/USB de solo lectura.
- Un controlador TinyUSB DWC2 local del proyecto y descriptores USB que ajustan audio dúplex y CDC dentro del presupuesto de FIFO de hardware del ESP32-S3.

## Modos de audio

Configura `BRIDGE_MODE` en `bridge_config.h` y luego recompila el sketch completo. **Master y Slave en los nombres de las macros describen el rol del reSpeaker XVF3800.** El ESP32-S3 usa el rol opuesto.

| Modo | Frecuencia de muestreo | Rol de reSpeaker | Rol de ESP32-S3 | Fuente de reloj |
| --- | --- | --- | --- | --- |
| `BRIDGE_I2S_MASTER_48K` | 48 kHz | Master | Slave | reSpeaker |
| `BRIDGE_I2S_MASTER_16K` | 16 kHz | Master | Slave | reSpeaker |
| `BRIDGE_I2S_SLAVE_16K` | 16 kHz | Slave | Master | ESP32-S3 |

El reSpeaker XVF3800 debe ejecutar firmware configurado para la frecuencia de muestreo y el rol I2S correspondientes. El puente no configura ni flashea el reSpeaker. La selección de modo requiere recompilación; no hay cambio de frecuencia en tiempo de ejecución ni conversión entre 16/48 kHz.

## Requisitos

- Una placa ESP32-S3 con USB nativo; el perfil suministrado está dirigido a la Seeed Studio XIAO ESP32S3.
- Arduino IDE o Arduino CLI con el paquete de placas de Espressif disponible.
- Arduino-ESP32 **3.3.11**.

No se requiere una biblioteca de audio USB independiente. Usa la versión fijada del core: la anulación local del controlador USB y los descriptores dependen de su implementación de TinyUSB.

## Ajustes de compilación (Arduino IDE)

Abre `reSpeaker_ESP32S3_USB_BRIDGE.ino`, instala/selecciona Arduino-ESP32 3.3.11 y usa estos ajustes:

| Ajuste | Valor |
| --- | --- |
| Board | Seeed Studio XIAO_ESP32S3 |
| USB Mode | USB-OTG (TinyUSB) |
| USB CDC On Boot | Disabled |
| Upload Mode | USB-OTG CDC (TinyUSB) |
| USB Firmware MSC On Boot | Disabled |
| USB DFU On Boot | Disabled |
| CPU Frequency | 240 MHz |
| PSRAM | Disabled |

En resumen: **USB Mode = USB-OTG (TinyUSB); CDC/MSC/DFU On Boot = Disabled; CPU = 240 MHz; PSRAM = Disabled.**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/arduino_settings.jpg" alt="pir" width={400} height="auto" /></p>

El firmware crea su propia interfaz CDC, por lo que CDC On Boot debe permanecer desactivado. En el perfil fijado de CLI, `CDCOnBoot=cdc` corresponde a Disabled. El sketch comprueba estos tres ajustes USB en tiempo de compilación. Upload Mode se comprueba mediante `ARDUINO_FQBN`, porque el core no define una macro de modo de carga independiente. El perfil de CLI selecciona explícitamente `UploadMode=cdc` para solicitar el reinicio a 1200 baudios y esperar al puerto de descarga.

<!-- TODO: add Arduino IDE build settings screenshot here -->

Selecciona **Verify** para compilar y luego **Upload**.

## Descargar e instalar

1. Descarga el firmware desde GitHub: [reSpeaker_ESP32S3_USB_BRIDGE](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE).
2. Copia todo el contenido del repositorio descargado en una nueva carpeta `Documents\Arduino\reSpeaker_ESP32S3_USB_BRIDGE`. Incluye todos los archivos: el `.ino`, cabeceras, archivos `.cpp`, `sketch.yaml`, `host\`, `src\` y `docs`. Copiar solo el archivo `.ino` es insuficiente.
3. Edita `bridge_config.h` en la nueva carpeta para seleccionar el modo de 16 kHz, si estás usando:

```cpp
// #define BRIDGE_MODE BRIDGE_I2S_MASTER_48K
#define BRIDGE_MODE BRIDGE_I2S_SLAVE_16K
```

4. En Arduino IDE, abre **File > Sketchbook > reSpeaker_ESP32S3_USB_BRIDGE** (el nombre de la carpeta ahora coincide con el `.ino`).

## Comprobar la enumeración USB

Desconecta y vuelve a conectar el cable USB. Deberías ver:

- Un **puerto serie CDC** (por ejemplo, `COM5` en Windows); este es el puerto de control.
- Un **dispositivo de audio** llamado `BRIDGE I2S Slave 16k` (estéreo, 32 bits, 16 kHz de entrada y salida).

Cierra cualquier programa (como un monitor serie) que esté manteniendo el puerto antes de continuar.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/device_tree.jpg" alt="pir" width={800} height="auto" /></p>

## Verificar el lado de control (herramienta de host)

Desde el repositorio, entra en la carpeta `host` e instala la dependencia:

```sh
cd host
python -m venv .venv
.venv\Scripts\activate.bat
python -m pip install -r requirements.txt
python bridge_host.py --list-ports
python bridge_host.py --port COMx --ping
python bridge_host.py --port COMx VERSION
```

Sustituye la `x` en `COMx` por tu número real de puerto COM. En Linux o macOS, activa el entorno virtual con `source .venv/bin/activate` y usa una ruta como `/dev/ttyACM0` o `/dev/cu.usbmodemXXXX` en lugar de `COMx`.

Resultados esperados 

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/listports.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/ping.jpg" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/mic_again.jpg" alt="pir" width={800} height="auto" /></p>

<!-- TODO: add host tool output screenshot here -->

## Probar el audio

- **Reproducción:** reproduce un archivo WAV estéreo de 32 bits y 16 kHz en la salida `BRIDGE I2S Slave 16k`; el sonido debería salir del códec/altavoz del reSpeaker.
- **Captura:** graba audio estéreo de 32 bits y 16 kHz desde su entrada.

**Instantánea de referencia de Audacity**
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/usb_i2s_bridge/audio_settings.jpg" alt="pir" width={600} height="auto" /></p>

<!-- TODO: add audio test screenshot here -->

## Recursos

- [Firmware reSpeaker_ESP32S3_USB_BRIDGE (GitHub)](https://github.com/respeaker/reSpeaker_ESP32S3_USB_BRIDGE)
- `README.md` — descripción general del firmware, modos de audio e instrucciones de compilación.
- `PLAYBACK.md` — cableado de audio, búfer de reproducción, diagnósticos y estado de audio/USB.
- `CONTROL.md` — cableado I2C, la utilidad de host en Python y el protocolo serie CDC.

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
