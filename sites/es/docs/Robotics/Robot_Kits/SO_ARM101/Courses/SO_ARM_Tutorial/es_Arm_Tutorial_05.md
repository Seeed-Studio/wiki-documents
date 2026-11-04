---
description: "Capítulo 5 del curso para principiantes de SO-ARM Physical AI — configura el entorno de software de LeRobot en Ubuntu x86 o Jetson: Miniforge, el repositorio verificado de Seeed, ffmpeg, PyTorch y las dependencias de motores feetech."
title: Capítulo 5 - Configuración del entorno de software
hide_title: true
keywords:
  - SO-ARM
  - SO-ARM101
  - LeRobot
  - Miniforge
  - entorno
  - curso
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /robotics/soarm_physical_ai_course_chapter_5
displayed_sidebar: SoArmCourseSidebar
translation:
  skip: [zh-CN]
last_update:
  date: 2026-10-19
  author: ZhuYaoHui
createdAt: '2026-10-19'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/robotics/soarm_physical_ai_course_chapter_5/
---

import '/src/css/rebot-wiki-style.css';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">Etapa 2 · Capítulo 5 · Práctica</span>
    <h2>5. Configuración del entorno de software</h2>
    <p>
      Capítulo 5 del curso para principiantes de SO-ARM Physical AI — configura el entorno de software de LeRobot en Ubuntu x86 o Jetson: Miniforge, el repositorio verificado de Seeed, ffmpeg, PyTorch y las dependencias de motores feetech.
    </p>
    <div className="hero-actions">
      <a href="#requirements">Requisitos</a>
      <a href="#install">Instalar LeRobot</a>
      <a href="#verify">Verificar</a>
    </div>
  </div>
</section>

## 5.1 Requisitos del sistema

<section id="requirements" className="section-card">
  <div className="section-title">
    <span>Requisitos</span>
    <h2>5.1 Requisitos del sistema</h2>
  </div>

**Para Ubuntu x86:**

- Ubuntu 22.04
- CUDA 12+
- Python 3.12
- Torch 2.6+

**Para Jetson Orin:**

- Jetson JetPack 6.0 y 6.1 (JetPack 6.2 aún no compatible)
- Python 3.12
- Torch 2.3+

Recuerda del Capítulo 3: evita WSL o Ubuntu en máquina virtual sobre Windows — el Ubuntu nativo o el Jetson te dan la menor cantidad de sorpresas.

</section>

## 5.2 Instalar LeRobot

<section id="install" className="section-card">
  <div className="section-title">
    <span>Paso a paso</span>
    <h2>5.2 Instalar LeRobot</h2>
  </div>

Entornos como PyTorch y torchvision deben instalarse según tu versión de CUDA. Sigue la pestaña de tu dispositivo.

<Tabs defaultValue="X86">

<TabItem value="X86" label="X86 Ubuntu 22.04">

**1. Instalar Miniforge:**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-x86_64.sh
chmod +x Miniforge3-Linux-x86_64.sh
./Miniforge3-Linux-x86_64.sh
# Una vez completada la instalación:
source ~/.bashrc
# Inicializar todos los shells
conda init --all
```

**2. Crear y activar un entorno conda nuevo para LeRobot:**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. Clonar el repositorio verificado de LeRobot:**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. Instalar ffmpeg en tu entorno:**

```bash
conda install ffmpeg -c conda-forge
```

:::tip
Esto suele instalar ffmpeg 7.X compilado con el codificador libsvtav1. Si libsvtav1 no está soportado (verifica con `ffmpeg -encoders`), instala explícitamente ffmpeg 7.1.1:

```bash
conda install ffmpeg=7.1.1 -c conda-forge
```

Esto también corrige el error `No valid stream found in input file` que aparece luego al codificar videos del dataset.
:::

**5. Instalar LeRobot con las dependencias de motores feetech:**

:::tip
En un Ubuntu 22.04 recién configurado — especialmente una instalación mínima — puede faltar `gcc` y otras herramientas de compilación, y el paquete `evdev` del extra feetech fallará al compilar. Instálalas primero:

```bash
sudo apt update
sudo apt install build-essential
```
:::

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

</TabItem>

<TabItem value="Jetson" label="Jetson Orin">

**1. Instalar Miniforge:**

```bash
wget https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Linux-aarch64.sh
chmod +x Miniforge3-Linux-aarch64.sh
./Miniforge3-Linux-aarch64.sh
# Sigue las indicaciones escribiendo 'yes' o pulsando Enter. Al terminar:
source ~/.bashrc
```

**2. Crear y activar un entorno conda nuevo para LeRobot:**

```bash
conda create -y -n lerobot python=3.12 && conda activate lerobot
```

**3. Clonar el repositorio verificado de LeRobot:**

```bash
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
```

**4. Instalar ffmpeg en tu entorno:**

```bash
conda install ffmpeg -c conda-forge
```

**5. Instalar LeRobot con las dependencias de motores feetech:**

```bash
cd ~/lerobot && pip install -e ".[feetech]"
```

**6. Para dispositivos Jetson JetPack 6.0+** (primero instala [PyTorch-gpu y Torchvision](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) desde el paso 5, luego ejecuta):

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Instala OpenCV y otras dependencias vía conda
conda remove opencv                                   # Desinstala el OpenCV de conda
pip3 install opencv-python==4.10.0.84                 # Reinstala opencv-python vía pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0                            # Debe coincidir con torchvision
```

</TabItem>

</Tabs>

</section>

## 5.3 Verificar el entorno

<section id="verify" className="section-card">
  <div className="section-title">
    <span>Verificación</span>
    <h2>5.3 Verificar el entorno</h2>
  </div>

Instalar LeRobot vía pip puede reemplazar el PyTorch y torchvision originales por versiones CPU, así que verifica siempre antes de entrenar. En el entorno conda `lerobot`, ejecuta:

```python
python   # inicia Python en la terminal
import torch
print(torch.cuda.is_available())
exit()   # sale de Python
```

- `False` → el entorno actual usa la versión CPU de PyTorch. Para entrenamiento o inferencia con GPU, reinstala las versiones de PyTorch y torchvision acordes a tu CUDA siguiendo la [guía oficial de PyTorch](https://pytorch.org/index.html).
- `True` → la aceleración GPU está disponible.

:::tip
Las GPU NVIDIA de la serie RTX 50 requieren la versión preliminar de CUDA 12.8 o superior:

```bash
pip install --pre torch torchvision torchaudio --index-url https://download.pytorch.org/whl/nightly/cu128
```
:::

Finalmente, comprueba que las herramientas de línea de comandos de LeRobot están en tu PATH:

```bash
lerobot-find-port --help
```

Si el comando imprime la ayuda, el entorno está listo para el próximo capítulo, donde configuramos los motores y ensamblamos los brazos.

</section>

</div>
