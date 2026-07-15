---
description: Guia abrangente de instalação do GStreamer para Reachy Mini em Linux, macOS e Windows, incluindo configuração do plugin WebRTC para transmissão de vídeo e áudio.
title: Instalação do GStreamer
slug: /reachymini_sdk_gstreamer-installation
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
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-02-28'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_gstreamer-installation/
---

# 📡 Instalação do GStreamer

> Este guia ajudará você a instalar o [GStreamer](https://gstreamer.freedesktop.org) para receber fluxos de vídeo e áudio do seu Reachy Mini. Consulte a [arquitetura de mídia](/pt-br/reachymini_sdk_media-architecture) para entender como os fluxos são acessados localmente ou remotamente, dependendo da configuração.

Wheels Python estão disponíveis para as plataformas Windows e macOS e estão incluídos nas dependências do projeto. Tudo deve funcionar imediatamente. Para usuários Linux, é necessária uma instalação manual.

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ⚠️ Instalação manual | ✅ Wheels Python | ✅ Wheels Python |

</div>

## 🔧 Instalar o GStreamer

<hfoptions id="gstreamer-install">
<hfoption id="Linux">

### Etapa 1: Instalar o GStreamer

**Para sistemas baseados em Ubuntu/Debian:**

No seu terminal, execute:

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

**Apenas para Ubuntu 22.04:** A versão padrão do GStreamer é muito antiga. É necessário GStreamer >=1.22. Você precisa adicionar um PPA para obter o GStreamer 1.24.x:

```bash
sudo add-apt-repository ppa:savoury1/multimedia
sudo apt update
sudo apt install \
    libgstreamer1.0-dev \
    libgstreamer-plugins-base1.0-dev \
    libgstreamer-plugins-good1.0-dev \
    libgstreamer-plugins-bad1.0-dev
```

Verifique se você tem a versão correta:
```bash
pkg-config --modversion gstreamer-1.0
# Should output 1.24.x or higher
```

### Etapa 2: Instalar o Rust

No Linux, o plugin WebRTC não é habilitado por padrão e precisa ser compilado manualmente a partir do código-fonte em Rust. Instale o Rust pela linha de comando usando `rustup`:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

### Etapa 3: Compilar e instalar o plugin WebRTC

Para compilar e instalar o plugin WebRTC, execute os seguintes comandos:

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

> **💡 Observação:** Para sistemas ARM64 (como Raspberry Pi), substitua `x86_64-linux-gnu` por `aarch64-linux-gnu` no comando de exportação.

## ✅ Verificar a instalação

Por fim, você pode testar sua instalação do GStreamer da seguinte forma:

```bash
# Check version
gst-launch-1.0(.exe) --version

# Test basic functionalities
gst-launch-1.0 videotestsrc ! autovideosink

# Verify WebRTC plugin
gst-inspect-1.0 webrtcsrc
```

Você também deve conseguir importar as bibliotecas do GStreamer em um ambiente Python:
```bash
python -c "import gi"
```

</hfoption>
</hfoptions>

## Solução de problemas e testes de unidade

Se você encontrar problemas com o fluxo, pode testar os componentes individualmente da seguinte forma.

**Teste 1: Criar manualmente o servidor WebRTC**
Execute este pipeline do GStreamer no robô para verificar a pilha de câmera e codificador:

```bash
gst-launch-1.0 webrtcsink run-signalling-server=true meta="meta,name=reachymini" name=ws libcamerasrc ! capsfilter caps=video/x-raw,width=1280,height=720,framerate=60/1,format=YUY2,colorimetry=bt709,interlace-mode=progressive ! queue !  v4l2h264enc extra-controls="controls,repeat_sequence_header=1" ! 'video/x-h264,level=(string)4' ! ws. alsasrc device=hw:4 ! queue ! audioconvert ! audioresample ! opusenc ! audio/x-opus, rate=48000, channels=2 ! ws.
```
