---
description: Guía completa de instalación de GStreamer para Reachy Mini en Linux, macOS y Windows, incluyendo la configuración del plugin WebRTC para transmisión de video y audio.
title: Instalación de GStreamer
slug: /es/reachymini_sdk_gstreamer-installation
keywords:
- gstreamer
- installation
- webrtc
- video streaming
- audio streaming
- linux
- macos
- windows
- dependencies
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
---

# 📡 Instalación de GStreamer

> Esta guía te ayudará a instalar [GStreamer](https://gstreamer.freedesktop.org) para recibir flujos de video y audio desde tu Reachy Mini. Consulta la [arquitectura de medios](media-architecture.md) para entender cómo se accede a los flujos local o remotamente según la configuración.

Los wheels de Python están disponibles para las plataformas Windows y macOS y se incluyen en las dependencias del proyecto. Todo debería funcionar directamente. Para usuarios de Linux, se requiere una instalación manual.

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ⚠️ Instalación manual | ✅ Wheels de Python | ✅ Wheels de Python |

</div>

## 🔧 Instalar GStreamer

<hfoptions id="gstreamer-install">
<hfoption id="Linux">

### Paso 1: Instalar GStreamer

**Para sistemas basados en Ubuntu/Debian:**

En tu terminal, ejecuta:

```bash
sudo apt-get update
sudo apt-get install -y \
    libgstreamer-plugins-bad1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer1.0-dev \
    libglib2.0-dev \
    libssl-dev \
    libgirepository1.0-dev \
    libcairo2-dev \
    libportaudio2 \
    libnice10 \
    gstreamer1.0-plugins-good \
    gstreamer1.0-alsa \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-nice \
    python3-gi \
    python3-gi-cairo
```

**Solo para Ubuntu 22.04:** La versión predeterminada de GStreamer es demasiado antigua. Se requiere GStreamer >=1.22. Necesitas añadir un PPA para obtener GStreamer 1.24.x:

```bash
sudo add-apt-repository ppa:savoury1/multimedia
sudo apt update
sudo apt install \
    libgstreamer1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer-plugins-good1.0-dev \
    libgstreamer-plugins-bad1.0-dev
```

Verifica que tengas la versión correcta:
```bash
pkg-config --modversion gstreamer-1.0
# Should output 1.24.x or higher
```

### Paso 2: Instalar Rust

En Linux, el plugin WebRTC no está habilitado por defecto y debe compilarse manualmente a partir del código fuente en Rust. Instala Rust desde la línea de comandos usando `rustup`:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### Paso 3: Compilar e instalar el plugin WebRTC

Para compilar e instalar el plugin WebRTC, ejecuta los siguientes comandos:

```bash
# Clone the GStreamer Rust plugins repository
git clone https://gitlab.freedesktop.org/gstreamer/gst-plugins-rs.git
cd gst-plugins-rs
git checkout 0.14.1

# Install the cargo-c build tool
cargo install cargo-c

# Create installation directory
sudo mkdir -p /opt/gst-plugins-rs
sudo chown $USER /opt/gst-plugins-rs

# Build and install the WebRTC plugin (this may take several minutes)
cargo cinstall -p gst-plugin-webrtc --prefix=/opt/gst-plugins-rs --release

# Add plugin path to your environment
echo 'export GST_PLUGIN_PATH=/opt/gst-plugins-rs/lib/x86_64-linux-gnu:$GST_PLUGIN_PATH' >> ~/.bashrc
source ~/.bashrc
```

> **💡 Nota:** Para sistemas ARM64 (como Raspberry Pi), reemplaza `x86_64-linux-gnu` por `aarch64-linux-gnu` en el comando de export.


</hfoption>
<hfoption id="macOS">

No es necesario instalar GStreamer manualmente ya que se proporcionan los wheels. Sin embargo, aún es posible evitar usar los wheels y depender de la instalación del sistema.

### Usando Homebrew

```bash
brew install gstreamer libnice-gstreamer
```

El plugin WebRTC está habilitado por defecto en el paquete de Homebrew.


</hfoption>
<hfoption id="Windows">

No es necesario instalar GStreamer manualmente ya que se proporcionan los wheels. Sin embargo, aún es posible evitar usar los wheels y depender de la instalación del sistema.

### Paso 1: Instalar GStreamer usando el instalador oficial

<div align="center">

[![Download GStreamer for Windows](https://img.shields.io/badge/Download-GStreamer%20for%20Windows-blue?style=for-the-badge&logo=windows&logoColor=white)](https://gstreamer.freedesktop.org/download/)

</div>

1. Descarga el instalador **runtime** (versión MSVC)
2. Instala con la opción de instalación **Complete**
3. Edita las variables de entorno y añade al PATH del sistema: `C:\Program Files\gstreamer\1.0\msvc_x86_64\bin`
4. Añade a PYTHONPATH: `C:\Program Files\gstreamer\1.0\msvc_x86_64\lib\site-packages`

> **💡 Importante:** Reemplaza `C:\Program Files\gstreamer` por tu carpeta real de instalación de GStreamer si lo instalaste en una ubicación diferente.

</hfoption>
</hfoptions>

## ✅ Verificar la instalación

Finalmente, puedes probar tu instalación de GStreamer de la siguiente manera:

```bash
# Check version
gst-launch-1.0(.exe) --version

# Test basic functionalities
gst-launch-1.0 videotestsrc ! autovideosink

# Verify WebRTC plugin
gst-inspect-1.0 webrtcsrc
```

También deberías poder importar las bibliotecas de GStreamer en un entorno de Python:
```bash
python -c "import gi"
```


## Resolución de problemas y pruebas unitarias

Si encuentras problemas con el flujo, puedes probar los componentes individualmente de la siguiente manera.

**Prueba 1: Crear manualmente el servidor WebRTC**
Ejecuta este pipeline de GStreamer en el robot para verificar la cámara y la pila del codificador:

```bash
gst-launch-1.0 webrtcsink run-signalling-server=true meta="meta,name=reachymini" name=ws libcamerasrc ! capsfilter caps=video/x-raw,width=1280,height=720,framerate=60/1,format=YUY2,colorimetry=bt709,interlace-mode=progressive ! queue !  v4l2h264enc extra-controls="controls,repeat_sequence_header=1" ! 'video/x-h264,level=(string)4' ! ws. alsasrc device=hw:4 ! queue ! audioconvert ! audioresample ! opusenc ! audio/x-opus, rate=48000, channels=2 ! ws.
```
