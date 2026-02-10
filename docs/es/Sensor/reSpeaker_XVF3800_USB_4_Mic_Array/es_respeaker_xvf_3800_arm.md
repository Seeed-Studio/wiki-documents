---
description: Construye tu brazo robótico inteligente controlado por voz con reSpeaker + HorizonArm-Mark
title: Desplegando Tu Brazo Robótico Inteligente Controlado por Voz con reSpeaker + HorizonArm-Mark
keywords:
- reSpeaker_XVF3800_USB_4_Mic_Array
- reSpeaker
image: https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.webp
slug: /es/respeaker_xvf_3800_arm
sku: 114993702,114993700
last_update:
  date: 2/6/2026
  author: Mingxi
---


> **Objetivo**: Hacer que el brazo robótico HorizonArm-Mark funcione con reSpeaker XVF3800 para lograr la operación del brazo robótico controlado por voz.
> 
> **Seeed-Projects**: https://github.com/Seeed-Projects

reSpeaker XVF3800 es un arreglo circular profesional de 4 micrófonos basado en el chip XMOS XVF3800. Cuenta con modo dual, captación de campo lejano de 360° (hasta 5 metros), Cancelación de Eco Acústico (AEC), Control Automático de Ganancia (AGC), Dirección de Llegada (DoA), desreverberación, formación de haz y supresión de ruido, proporcionando captación de voz confiable en entornos ruidosos. Con sus potentes capacidades de captura de audio y reducción de ruido, proporciona excelentes "oídos" para aplicaciones de control por voz.

![reSpeaker banner](https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/respeaker-banner.jpg)

---

## Parte 1: Preparación de Hardware y Firmware de reSpeaker

Esta sección explica cómo flashear el firmware USB para el reSpeaker XVF3800. El firmware USB soporta modo plug-and-play, permitiendo conexión directa a PCs, Raspberry Pi y otros dispositivos.
El firmware USB solo soporta USB DFU (no I2C DFU). Si el dispositivo está ejecutando actualmente firmware I2S, por favor ingrese al **Modo Seguro** primero, luego flashee el firmware USB usando USB DFU. El Modo Seguro soporta tanto USB DFU como I2C DFU.

**Recursos de Referencia**:
- [Guía de Introducción reSpeaker XVF3800](https://wiki.seeedstudio.com/es/respeaker_xvf3800_introduction/)
- [Repositorio de Firmware reSpeaker XVF3800](https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares)
- [Repositorio de Código reSpeaker](https://github.com/respeaker)

### 1.1 Preparación

#### Requisitos de Hardware

| Elementos | Descripción |
|------|------|
| reSpeaker XVF3800 USB 4-Mic Array | Arreglo de micrófonos controlador principal |
| Cable USB Type-C | Usado para alimentación y transmisión de datos |
| Computadora | Compatible con Windows / macOS / Linux |

#### Preparación de Software (Instalando dfu-util)

**Windows**:

1. Descarga y extrae los binarios de `dfu-util` (ej., `D:\dfu-util-0.11-binaries\win64\`)
2. Agrega el directorio que contiene `dfu-util.exe` al PATH del sistema
3. Abre un símbolo del sistema y ejecuta `dfu-util -V` para verificar la instalación
4. Si `dfu-util -l` devuelve `LIBUSB_ERROR_NOT_SUPPORTED`, por favor usa Zadig para reemplazar el controlador del dispositivo con WinUSB

**macOS (Homebrew)**:

```bash
brew install dfu-util
dfu-util -l
```

**Linux (Debian / Ubuntu / Raspberry Pi OS)**:

```bash
sudo apt update
sudo apt install dfu-util
sudo dfu-util -l
```

#### Descargar Firmware USB

Visita el repositorio de firmware: https://github.com/respeaker/reSpeaker_XVF3800_USB_4MIC_ARRAY/tree/master/xmos_firmwares

Selecciona uno de los siguientes firmwares USB según tus necesidades (la versión de 2 canales es generalmente suficiente):

| Firmware | Canales | Descripción |
|------|--------|------|
| `respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin` | 2 | Salida de doble canal procesada<br />Canal 0: Conferencia<br />Canal 1: ASR |
| `respeaker_xvf3800_usb_dfu_firmware_6chl_v2.0.x.bin` | 6 | Canal 0: Audio procesado (Conferencia)<br />Canal 1: Audio procesado (ASR)<br />Canales 2-5: Datos en bruto para Micrófonos 0-3 |

### 1.2 Conectar e Ingresar al Modo DFU

#### Instrucciones de Cableado

Al conectar a una computadora, por favor usa el **puerto USB-C cerca del conector de auriculares de 3.5mm** (lado XMOS). No uses el puerto del lado XIAO.

#### Ingresando al Modo Seguro

El modo seguro es requerido en las siguientes situaciones:
- El firmware actual está en modo I2S y necesita cambiarse a modo USB
- El firmware está corrupto o se flasheó firmware incorrecto

**Pasos de Operación**:

1. Desconecta completamente el dispositivo de la alimentación
2. Mantén presionado el botón **Mute** de la placa
3. Mientras mantienes el botón presionado, reconecta la alimentación
4. Cuando el LED rojo comience a parpadear, suelta el botón — el dispositivo ha ingresado al Modo Seguro

### 1.3 Flashear Firmware USB Usando dfu-util

#### Confirmar Visibilidad del Dispositivo

Ejecuta el siguiente comando para verificar si el dispositivo es reconocido:

```bash
# Linux / Raspberry Pi OS
sudo dfu-util -l

# macOS / Windows
dfu-util -l
```

La salida esperada debe incluir: `Found DFU: [2886:001a] ... alt=1, name="reSpeaker DFU Upgrade"`

#### Ejecutar Comando de Flasheo

```bash
# Linux / Raspberry Pi OS (needs sudo)
sudo dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin

# macOS / Windows (no sudo needed)
dfu-util -R -e -a 1 -D /path/to/respeaker_xvf3800_usb_dfu_firmware_v2.0.x.bin
```

**Descripción de Parámetros**:
- `-R`: Reiniciar/rebootear el dispositivo después de que el flasheo esté completo
- `-e`: Borrar firmware original
- `-a 1`: Escribir a la partición de Actualización
- `-D`: Especificar la ruta al archivo de firmware

Después de que el flasheo esté completo, el dispositivo se reiniciará automáticamente y cargará el firmware USB.

### 1.4 Verificación y Solución de Problemas

#### Verificar Firmware

Después de flashear el firmware USB, puedes verificarlo de la siguiente manera:

1. **Detección del Administrador de Dispositivos**
   - **Windows**: Abre el Administrador de Dispositivos; deberías ver "reSpeaker 3800" bajo "Sonido, vídeo y controladores de juegos"
   - **macOS/Linux**: Ejecuta el comando `lsusb` para verificar si el dispositivo es reconocido como un dispositivo de audio USB

   ![usbset](https://files.seeedstudio.com/wiki/reSpeaker-arm/respeaker_usb.png)

2. **Prueba de Grabación**
   - Usa Audacity u otro software de grabación
   - Selecciona "reSpeaker 3800" como el dispositivo de grabación
   - Establece la frecuencia de muestreo a 16000 Hz y el número de canales según el firmware flasheado (2 o 6 canales)
   - Inicia la grabación y prueba la captura de voz

#### Preguntas Comunes

**P: ¿No puedes detectar el dispositivo con `dfu-util -l`?**
- Verifica el cable USB y el puerto (debes usar el conector del lado XMOS, el puerto USB-C cerca del conector de auriculares de 3.5mm)
- Si el dispositivo está ejecutando actualmente firmware I2S, por favor ingresa al Modo Seguro primero
- Usuarios de Windows: Asegúrate de que el controlador WinUSB sea usado vía Zadig

**P: ¿Error durante el flasheo?**
- Intenta cambiar el cable USB o el puerto del host
- Re-flashea en Modo Seguro

**P: ¿La computadora no reconoce el dispositivo después del flasheo?**
- Asegúrate de estar usando el archivo de firmware USB (el nombre del archivo comienza con `usb`), no el firmware I2S
- Intenta reconectar el dispositivo o cambiar el puerto USB

**P: ¿Sin sonido o sonido anormal durante la grabación?**
- Verifica si la frecuencia de muestreo del software de grabación está establecida a 16000 Hz
- Confirma que el conteo de canales coincida con el firmware (2 o 6 canales)
- Verifica si el micrófono está silenciado (ve si el LED rojo de silencio está encendido; presiona el botón de silencio para desactivar el silencio)

---

## Parte 2: Configuración de Software y Conexión

### 2.1 Conexión de Hardware

Asegúrate de que la computadora de control esté conectada tanto al brazo robótico como al arreglo de micrófonos vía USB.

### 2.2 Conectando el Brazo Robótico

1. Abre el software de control del brazo robótico, HorizonArm
2. Haz clic en el botón **Connect** en la esquina superior izquierda
3. Selecciona el puerto serie correspondiente (ej., COM3) y la velocidad de baudios (500000)
4. Selecciona **Motor ID Settings** → **Robotic Arm** → **Custom ID**, y confirma que muestre: 1, 2, 3, 4, 5, 6
5. Haz clic en **Connect**

![armset](https://files.seeedstudio.com/wiki/reSpeaker-arm/armset.png)

Una vez que la conexión sea exitosa, puedes ver el estado del brazo robótico en la interfaz de HorizonArm. Haz clic en **Go to Zero** para devolver el brazo a su posición inicial (estado recto de 90 grados).

### 2.3 Configurando el Sistema de IA

1. Haz clic en la interfaz **Embodied Intelligence**
2. Configura parámetros:
   - Ingresa la dirección API y la clave para el LLM (Modelo de Lenguaje Grande)
   - Selecciona el ID de Cámara (usualmente 1, o 0 para algunos modelos)
3. Haz clic en **Initialize AI System**
4. Ingresa a la interfaz **Embodied Drive** para comenzar a usarla

![aiset](https://files.seeedstudio.com/wiki/reSpeaker-arm/aiset.png)

### 2.4 Operación de Control por Voz

Después de ingresar a la interfaz de ejecución, verás cuatro botones de control:

![monitor](https://files.seeedstudio.com/wiki/reSpeaker-arm/monitor.png)

**Métodos de Operación**:

| Función | Instrucciones de Operación |
|------|----------|
| **Execute Command** | Ingresa un comando en la caja de texto y haz clic en el botón para ejecutarlo |
| **Run Dialogue** | Similar a una función de grabación:<br />• Primer clic: Iniciar grabación<br />• Segundo clic: Terminar grabación<br />La grabación será enviada al LLM para procesamiento, los resultados se mostrarán en la interfaz, y el brazo robótico realizará acciones basadas en las instrucciones |
| **Enable Dialogue Mode** | El brazo robótico ingresa a un estado de escucha continua. Después de decir la palabra de activación **"Mark"**, el habla subsecuente será reconocida como un comando y ejecutada |

---

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestro producto! Proporcionamos múltiples canales de comunicación para asegurar que tengas una experiencia fluida con el producto.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
