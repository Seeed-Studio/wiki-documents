---
description: Construye tu asistente de voz Xiaozhi con IA en la nube usando ESP32S3 + reSpeaker
title: Despliega tu asistente de voz Xiaozhi con IA en la nube usando ESP32S3 + reSpeaker
keywords:
  - reSpeaker_XVF3800_USB_4_Mic_Array
  - reSpeaker
  - XIAO
  - ESP32S3
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /respeaker_xvf_3800_xiaozhi
sku: 114993702,114993700
last_update:
  date: 1/29/2026
  author: Mingxi
createdAt: '2026-01-29'
updatedAt: '2026-02-09'
url: https://wiki.seeedstudio.com/es/respeaker_xvf_3800_xiaozhi/
---


> Objetivo: Hacer que ESP32S3 funcione con el reSpeaker XVF3800 y ejecutar el asistente Xiaozhi aprovechando modelos grandes en la nube.
> Fuente del proyecto: https://github.com/Seeed-Projects/Xiaozhi_Esp32S3_reSpeaker
> Seeed-Projects: https://github.com/Seeed-Projects

reSpeaker XVF3800 es un arreglo circular profesional de 4 micrófonos basado en el chip XMOS XVF3800. Proporciona captación de voz confiable en entornos ruidosos con características que incluyen modos duales, captación de campo lejano de 360° (hasta 5 m), cancelación de eco acústico (AEC), control automático de ganancia (AGC), dirección de llegada (DoA), desreverberación, formación de haces y supresión de ruido. Con sus robustas capacidades de captura y reducción de ruido, Xiaozhi obtiene un "oído" mucho mejor.

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## Parte 1: Preparación del firmware de hardware reSpeaker

Esta sección se enfoca en el hardware reSpeaker XVF3800 en sí. El firmware USB predeterminado no soporta salida I2S, por lo que debes flashear un firmware I2S dedicado para usarlo con hosts como XIAO ESP32S3.

> Nota: El firmware I2S usa I2C DFU (no USB DFU). Si el dispositivo ya tiene firmware I2S pero se comporta de manera anormal, entra primero en "modo seguro" y luego usa USB DFU para recuperar o cambiar el firmware. El modo seguro soporta tanto USB DFU como I2C DFU.
> Ver referencias oficiales:
> - [reSpeaker XVF3800 Getting Started](https://wiki.seeedstudio.com/es/respeaker_xvf3800_xiao_getting_started/)
> - [reSpeaker XVF3800 firmware repo](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
> - [reSpeaker code repo](https://github.com/respeaker)

### 1.1 Preparación

#### Hardware

- reSpeaker XVF3800 USB 4-Mic Array
- Cable de datos USB Type-C (alimentación + datos)
- Computadora: Windows / macOS / Linux
- Si se integra con XIAO ESP32S3, asegurar soldadura adecuada para conexiones I2S / I2C / alimentación

#### Software (instalar dfu-util)

Windows:

1. Descargar y descomprimir un binario `dfu-util` (ej. `D:\dfu-util-0.11-binaries\win64\`).
2. Agregar el directorio que contiene `dfu-util.exe` al PATH.
3. Verificar con `dfu-util -V`.
4. Si `dfu-util -l` devuelve `LIBUSB_ERROR_NOT_SUPPORTED`, usar Zadig para reemplazar el controlador del dispositivo con WinUSB.

macOS (Homebrew):

```bash
brew install dfu-util
dfu-util -l
```

Linux (Debian / Ubuntu / Raspberry Pi OS):

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### Descargar el firmware I2S

- Visitar el repositorio de firmware: https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares
- Descargar un archivo `.bin` con un nombre que comience con `i2s` (ej. `respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin`).

### 1.2 Conectar y entrar en modo DFU

#### Nota de cableado

- Usar el puerto USB-C cerca del conector de auriculares de 3.5mm (el lado XMOS) al conectar a tu computadora; NO usar el puerto del lado XIAO.

#### Entrar en modo seguro (recomendado)

Usar esto cuando: el firmware actual es I2S pero quieres USB, el firmware está corrupto, o se flasheó firmware incorrecto.

1. Remover completamente la alimentación.
2. Mantener presionado el botón "Mute" de la placa.
3. Mientras lo mantienes presionado, reconectar la alimentación.
4. Cuando el LED rojo comience a parpadear, soltar el botón — el dispositivo está ahora en modo seguro.

### 1.3 Flashear el firmware I2S usando dfu-util

#### Confirmar que el dispositivo es visible

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l
# macOS / Windows
dfu-util -l
```

La salida esperada contiene `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`.

#### Comando de flasheo

```bash
# Linux / Raspberry Pi OS (replace path)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
# macOS / Windows (no sudo)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_i2s_dfu_firmware_v1.0.x.bin
```

Parámetros: `-R` (reiniciar), `-e` (borrar), `-a 1` (escribir a Upgrade alt), `-D` (archivo de firmware).

### 1.4 Verificación y solución de problemas

#### Verificar firmware

Después del flasheo, el dispositivo se reiniciará automáticamente y el firmware I2S debería estar activo. Puedes verificar leyendo datos de audio del dispositivo con el ESP32S3 como host I2S.

#### FAQ

- P: ¿`dfu-util -l` no muestra el dispositivo?
  - Verificar cable USB y puerto (debe usar el conector del lado XMOS).
  - Si el dispositivo actualmente ejecuta firmware I2S, entrar en modo seguro antes de flashear.
  - Usuarios de Windows: asegurar controlador WinUSB vía Zadig.
- P: ¿Error durante el flasheo?
  - Probar un cable USB diferente o puerto host, y reintentar en modo seguro.
- P: ¿Sin audio después del flasheo?
  - Verificar configuración del host I2S (frecuencia de muestreo, canales) coincida con la configuración del firmware.

---

## Parte 2: Cambios de adaptación del software Xiaozhi

Esta sección aborda los cambios de código para hacer que el proyecto Xiaozhi soporte el reSpeaker XVF3800.

### 2.1 Resumen de cambios

Cambios principales:

1. Agregado un wrapper de bus I2C compartido para gestionar centralmente el maestro I2C y evitar conflictos.
2. Agregada sonda de hardware durante el inicio: sondear XVF3800 sobre I2C antes del inicio de la aplicación.
3. Configuración a nivel de placa desacoplada: usar macros `config.h` para pines y direcciones para facilitar el portado.
4. Actualizaciones de compilación: incluir los nuevos archivos fuente BSP en la compilación.

### 2.2 Ubicaciones clave de cambios de código

A. Nuevo: bus I2C compartido

- Archivos: `main/shared_i2c_bus.h` / `main/shared_i2c_bus.c`
- Propósito: Proporcionar `shared_i2c_master_bus_get()` que usa la API maestro I2C de ESP-IDF con pull-ups internos habilitados por defecto.

B. Nuevo: inicialización de hardware de audio reSpeaker

- Archivo: `main/audio_bsp.c`
- Función: `audio_hardware_init()`
- Lógica: Adquirir bus I2C compartido, llamar `i2c_master_probe()` para detectar `XVF3800_I2C_ADDR` (0x2C) e imprimir logs de sonda.

C. Cambio: orden de inicio

- Archivo: `main/main.cc`
- Cambio: Llamar `audio_hardware_init()` antes de `Application::GetInstance().Start()`.

D. Cambio: compilación y configuración de placa

- `CMakeLists.txt`: agregar `audio_bsp.c` y `shared_i2c_bus.c` a las fuentes de compilación.
- `boards/xiao-esp32s3-sense/config.h`:
  - Agregar `I2C_SDA_PIN` (5), `I2C_SCL_PIN` (6).
  - Agregar `XVF3800_I2C_ADDR` (0x2C).
  - Completar configuraciones de pines I2S y ancho de bits.

---

## Parte 3: Compilar, flashear y desplegar

Esta sección guía la compilación del firmware adaptado y su flasheo al ESP32S3.

### 3.1 Confirmar conexiones de hardware

Asegurar conexiones entre ESP32S3 y reSpeaker XVF3800:

- Líneas de audio I2S conectadas correctamente.
- Líneas de control I2C conectadas: ESP32S3 GPIO5 (SDA) / GPIO6 (SCL) a XVF3800.

### 3.2 Seleccionar objetivo de compilación

```bash
idf.py set-target esp32s3
```

### 3.3 Menuconfig

```bash
idf.py menuconfig
```

Ajustes requeridos:

1. Seleccionar placa: `Xiaozhi Assistant -> Board Type -> Seeed Studio XIAO ESP32S3 Sense`.
2. Evitar conflictos de pines: si I2S usa GPIO43/44, cambiar salida de consola a USB:
   `Component config -> ESP System Settings -> Channel for console output -> USB Serial/JTAG`.
3. Configuraciones de flash:
   `Serial flasher config -> Flash size -> 8 MB` y
   `Partition Table -> Custom partition CSV file -> partitions/v1/8m.csv`.

### 3.4 Compilar y flashear

```bash
idf.py build
idf.py flash
```

### 3.5 Monitorear logs y verificar

```bash
idf.py monitor
```

---

## Parte 4: Configuración de red y activación

Después del flasheo, el dispositivo necesita configuración de red y vinculación en la nube para usar las características de conversación con IA.

### 4.1 Conectar al hotspot del dispositivo

1. Usar tu teléfono para encontrar el SSID Wi-Fi llamado `Xiaozhi-XXXXXX`.
2. Abrir un navegador e ir a `http://192.168.4.1`.

### 4.2 Configurar Wi-Fi

1. En el portal cautivo esperar ~5s para el escaneo de red.
2. Elegir tu Wi-Fi de 2.4GHz (hotspot de iPhone: habilitar "Max Compatibility").
3. Ingresar la contraseña y hacer clic en "Connect".
4. Después de "Login successful", el dispositivo se reiniciará en ~3 segundos.
  ![configure-wifi](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/wifilist.png)

### 4.3 Agregar el dispositivo al backend de gestión

1. Obtener el ID del dispositivo: después de que el dispositivo esté en línea, despertarlo diciendo "Hello Xiaozhi" y escuchar el código de verificación de 6 dígitos.
2. Ir a https://xiaozhi.me y registrarse / iniciar sesión.
3. En la sección "Agents" o gestión de dispositivos, seleccionar "Add device", ingresar el ID del dispositivo de 6 dígitos y enviar.
  ![login-success-2](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/workbench.png)
  ![history-dialogs](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/history_talk.png)


Una vez completado, tu dispositivo reSpeaker–Xiaozhi debería estar listo y operativo.
¡Y no olvides cambiar el idioma de salida a tu preferencia en la configuración!
![language](https://files.seeedstudio.com/wiki/ReSpeaker-Xiaozhi/xiaozhi_language.png)


## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>




