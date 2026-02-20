---
description: Este wiki demuestra cómo usar J501 Mini con el brazo robótico StarAI Viola para tareas de clasificación de frutas usando el framework LeRobot y el modelo ACT.
title: Clasificación de Frutas con J501 Mini y Brazo StarAI Viola

keywords:
- J501 mini
- Robotics
- StarAI
- Viola
- LeRobot
- ACT
- Fruit Sorting
image: https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png
slug: /es/j501_mini_starai_viola_fruit_sorting
sku: 100020039,114090080
last_update:
  date: 2026-2-2
  author: Dayu
---

# 🍎 Clasificación de Frutas con J501 Mini y Brazo StarAI Viola

## 🚀 Introducción

Este wiki demuestra cómo usar el **J501 Mini (Jetson AGX Orin)** con el **brazo robótico StarAI Viola** para realizar tareas de clasificación de frutas usando el **framework LeRobot**. El proyecto muestra un flujo de trabajo de extremo a extremo desde la recolección de datos hasta el despliegue, permitiendo que el robot agarre y organice frutas de manera inteligente.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/j501mini-startai-front.png"/>
</div>

<div class="table-center">
  <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">J501 Mini</th>
      <th class="table-trnobg">StarAI Viola</th>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg" style={{width:300, height:'auto'}}/></div></td>
      <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola.jpg" style={{width:300, height:'auto'}}/></div></td>
    </tr>
    <tr class="table-trnobg"></tr>
    <tr class="table-trnobg">
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J501-Carrier-Board-for-Jetson-Orin-NX-Orin-Nano-p-5976.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ Obtener Uno Ahora</font></span></strong></a></div></td>
      <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Fashionstar-Star-Arm-Viola-Violin-p-6497.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ Obtener Uno Ahora</font></span></strong></a></div></td>
    </tr>
  </table>
</div>

<p></p>

**Lo que aprenderás:**

- 🔧 Configuración de hardware para **J501 Mini** y **brazo StarAI Viola**
- 💻 Configuración del entorno de software para **LeRobot** en **Jetson AGX Orin**
- 🎯 Recolección de datos y teleoperación para tareas de clasificación de frutas
- 🤖 Entrenamiento del modelo de política ACT
- 🚀 Despliegue del modelo entrenado para clasificación autónoma de frutas

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/other/catch-fruit.png"/>
</div>

<p></p>

**📚 Este tutorial proporciona instrucciones paso a paso para ayudarte a construir un sistema inteligente de clasificación de frutas desde cero.**

:::warning
Este wiki está basado en JetPack 6.2.1 y usa el módulo Jetson AGX Orin.
:::

## 🛠️ Requisitos de Hardware

### Componentes Requeridos

- **J501 Mini** con módulo Jetson AGX Orin
- Brazo seguidor **StarAI Viola** (6+1 DoF)
- Brazo líder **StarAI Violin** (6+1 DoF) para teleoperación
- **2x cámaras USB** (640x480 @ 30fps recomendado)
  - Una cámara montada en la muñeca
  - Una cámara de vista en tercera persona
- **Placas de depuración UC-01** (x2, incluidas con los brazos)
- **Fuente de alimentación de 12V** para brazos robóticos
- **Cables USB** para comunicación de brazos
- **Frutas** para demostración de clasificación

### Especificaciones de Hardware

| Componente | Especificación |
|-----------|--------------|
| **J501 Mini** | Jetson AGX Orin, JetPack 6.2.1 |
| **Viola Seguidor** | 6+1 DoF, alcance 470mm, carga útil 300g |
| **Violin Líder** | 6+1 DoF, alcance 470mm, teleoperación |
| **Cámaras** | USB, 640x480 @ 30fps, formato MJPG |
| **Alimentación** | 12V 10A para cada brazo |

## 💻 Configuración del Entorno de Software

### Prerrequisitos

- Ubuntu 22.04 (en J501 Mini con JetPack 6.2.1)
- Python 3.10
- CUDA 12+
- PyTorch 2.6+ (versión GPU)

### Instalar Miniconda

```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

### Crear Entorno LeRobot

```bash
# Create conda environment
conda create -y -n lerobot python=3.10 && conda activate lerobot

# Clone LeRobot repository
git clone https://github.com/Seeed-Projects/lerobot.git ~/lerobot
cd ~/lerobot

# Install ffmpeg
conda install ffmpeg -c conda-forge
```

### Instalar PyTorch y Torchvision para Jetson

Para dispositivos Jetson, necesitas instalar la versión GPU de PyTorch y Torchvision antes de instalar LeRobot. Sigue [este tutorial de instalación de PyTorch para Jetson](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/tree/main/3-Basic-Tools-and-Getting-Started/3.5-Pytorch) para instalar PyTorch-gpu y Torchvision.

### Instalar LeRobot y Dependencias

Después de instalar PyTorch-gpu y Torchvision, instala LeRobot:

```bash
cd ~/lerobot && pip install -e .
```

Para dispositivos Jetson JetPack 6.0+, instala dependencias adicionales:

```bash
conda install -y -c conda-forge "opencv>=4.10.0.84"  # Install OpenCV and other dependencies through conda, this step is only for Jetson Jetpack 6.0+
conda remove opencv   # Uninstall OpenCV
pip3 install opencv-python==4.10.0.84  # Then install opencv-python via pip3
conda install -y -c conda-forge ffmpeg
conda uninstall numpy
pip3 install numpy==1.26.0  # This should match torchvision
```

### Instalar Dependencias del Motor StarAI

```bash
pip install lerobot_teleoperator_bimanual_leader
pip install lerobot_robot_bimanual_follower
```

### Verificar PyTorch y Torchvision

Dado que instalar el entorno LeRobot vía pip desinstalará el PyTorch y Torchvision originales e instalará las versiones CPU, necesitas realizar una verificación en Python:

```python
import torch
print(torch.cuda.is_available())  # Should print True
```

Si el resultado impreso es `False`, necesitas reinstalar PyTorch y Torchvision según [este tutorial de Jetson](https://github.com/Seeed-Projects/reComputer-Jetson-for-Beginners/blob/main/3-Basic-Tools-and-Getting-Started/3.3-Pytorch-and-Tensorflow/README.md#installing-pytorch-on-recomputer-nvidia-jetson).

```bash
# Remove brltty if it causes USB port conflicts
sudo apt remove brltty
```

## 🔧 Configuración y Calibración de Hardware

### Configurar Puertos USB

Conecta los brazos robóticos e identifica sus puertos USB:

```bash
cd ~/lerobot
lerobot-find-port
```

Deberías ver una salida como:
- Brazo líder: `/dev/ttyUSB0`
- Brazo seguidor: `/dev/ttyUSB1`

Otorga acceso al puerto USB:

```bash
sudo chmod 666 /dev/ttyUSB*
```

### Posición Inicial del Brazo

Antes de la calibración, mueve ambos brazos a sus posiciones iniciales:

| **Brazo Líder Violin** | **Brazo Seguidor Viola** |
|:---------:|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/violin_init.png) | ![fig2](https://files.seeedstudio.com/wiki/robotics/projects/lerobot/starai/viola_init.png) |

### Calibrar Brazo Líder

```bash
lerobot-calibrate \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader
```

Mueve manualmente cada articulación a sus posiciones máxima y mínima. Presiona Enter para guardar después de calibrar todas las articulaciones.

### Calibrar Brazo Seguidor

```bash
lerobot-calibrate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower
```

:::tip
Los archivos de calibración se guardan en `~/.cache/huggingface/lerobot/calibration/`
:::

### Configurar Cámaras

Encuentra los puertos de tus cámaras:

```bash
lerobot-find-cameras opencv
```

Ejemplo de salida:
```
Camera #0: /dev/video2 (wrist camera)
Camera #1: /dev/video4 (front camera)
```

Monta las cámaras:
- **Cámara de muñeca**: Adjunta al gripper para vista de cerca
- **Cámara frontal**: Posiciona en el escritorio para vista en tercera persona

## 🎮 Prueba de Teleoperación

Prueba la configuración con teleoperación antes de la recolección de datos:

```bash
lerobot-teleoperate \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true
```

:::warning
Para el entrenamiento del modelo ACT, los nombres de las cámaras deben ser `wrist` y `front`. Usar nombres diferentes requerirá modificar el código fuente.
:::

## 📊 Recolección de Datos para Clasificación de Frutas

### Iniciar Sesión en Hugging Face (Opcional)

Si quieres subir conjuntos de datos a Hugging Face Hub:

```bash
huggingface-cli login --token ${HUGGINGFACE_TOKEN} --add-to-git-credential
HF_USER=$(huggingface-cli whoami | head -n 1)
echo $HF_USER
```

### Grabar Conjunto de Datos de Entrenamiento

Recolecta 50 episodios de demostraciones de clasificación de frutas:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --teleop.type=lerobot_teleoperator_violin \
    --teleop.port=/dev/ttyUSB0 \
    --teleop.id=my_violin_leader \
    --display_data=true \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode_time_s=30 \
    --dataset.reset_time_s=30 \
    --dataset.num_episodes=50 \
    --dataset.push_to_hub=true \
    --dataset.single_task="Sort fruits into containers"
```

### Parámetros de Grabación

| Parámetro | Descripción |
|-----------|-------------|
| `--dataset.episode_time_s` | Duración de cada episodio (30 segundos) |
| `--dataset.reset_time_s` | Tiempo para reiniciar entre episodios (30 segundos) |
| `--dataset.num_episodes` | Número de episodios a grabar (50) |
| `--dataset.push_to_hub` | Subir a Hugging Face Hub (true/false) |
| `--dataset.single_task` | Descripción de la tarea |

### Controles de Teclado Durante la Grabación

- **Flecha derecha (→)**: Saltar al siguiente episodio
- **Flecha izquierda (←)**: Re-grabar episodio actual
- **ESC**: Detener grabación y guardar conjunto de datos

:::tip
Si los controles del teclado no funcionan, prueba: `pip install pynput==1.6.8`
:::

### Reproducir un Episodio

Prueba los datos grabados reproduciendo un episodio:

```bash
lerobot-replay \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --dataset.episode=0
```

## 🎓 Entrenamiento de la Política ACT

### Configuración de Entrenamiento

Entrena el modelo ACT con tu conjunto de datos recopilado:

```bash
lerobot-train \
    --dataset.repo_id=${HF_USER}/fruit_sorting \
    --policy.type=act \
    --output_dir=outputs/train/fruit_sorting_act \
    --job_name=fruit_sorting_act \
    --policy.device=cuda \
    --wandb.enable=false \
    --policy.repo_id=${HF_USER}/fruit_sorting_policy \
    --steps=100000 \
    --batch_size=8 \
    --eval.batch_size=8 \
    --eval.n_episodes=10 \
    --eval_freq=5000
```

### Parámetros de Entrenamiento

| Parámetro | Descripción |
|-----------|-------------|
| `--policy.type` | Tipo de modelo (act) |
| `--steps` | Pasos totales de entrenamiento (100,000) |
| `--batch_size` | Tamaño del lote de entrenamiento (8) |
| `--eval_freq` | Frecuencia de evaluación (cada 5000 pasos) |
| `--wandb.enable` | Habilitar registro de Weights & Biases |

### Tiempo de Entrenamiento

En J501 Mini (AGX Orin):
- 50 episodios: ~8-10 horas
- 100 episodios: ~16-20 horas

:::tip
Puedes habilitar `--wandb.enable=true` para monitorear el progreso del entrenamiento con Weights & Biases. Asegúrate de ejecutar `wandb login` primero.
:::

### Reanudar Entrenamiento

Si el entrenamiento se interrumpe, reanuda desde el último punto de control:

```bash
lerobot-train \
    --config_path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model/train_config.json \
    --resume=true \
    --steps=200000
```

## 🚀 Despliegue y Evaluación

### Evaluar el Modelo Entrenado

Ejecuta episodios de evaluación para probar la política entrenada:

```bash
lerobot-record \
    --robot.type=lerobot_robot_viola \
    --robot.port=/dev/ttyUSB1 \
    --robot.id=my_viola_follower \
    --robot.cameras="{ wrist: {type: opencv, index_or_path: /dev/video2, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}, front: {type: opencv, index_or_path: /dev/video4, width: 640, height: 480, fps: 30, fourcc: 'MJPG'}}" \
    --display_data=false \
    --dataset.repo_id=${HF_USER}/eval_fruit_sorting \
    --dataset.single_task="Sort fruits into containers" \
    --dataset.num_episodes=10 \
    --policy.path=outputs/train/fruit_sorting_act/checkpoints/last/pretrained_model
```

### Operación Autónoma

Una vez entrenado, el robot puede clasificar frutas de forma autónoma. El video a continuación demuestra el flujo de trabajo completo de clasificación de frutas usando la política ACT entrenada en J501 Mini con el brazo StarAI Viola:

<div class="video-container">
<iframe width="800" height="450" src="https://www.youtube.com/embed/Tk6jazbZZy0" title="Fruit Sorting Demo with J501 Mini and StarAI Viola" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

**Aspectos Destacados de la Demo:**
- El robot identifica y agarra diferentes frutas de forma autónoma
- Movimientos suaves y precisos aprendidos de las demostraciones de teleoperación
- Clasifica exitosamente las frutas en contenedores designados
- Demuestra la efectividad de la política ACT entrenada en J501 Mini

Para ejecutar la clasificación autónoma de frutas:

1. Coloca las frutas en el área de trabajo
2. Ejecuta el comando de evaluación mostrado arriba
3. El robot ejecutará el comportamiento aprendido para agarrar y clasificar frutas

## 🎯 Consejos para Mejor Rendimiento

### Mejores Prácticas de Recopilación de Datos

1. **Entorno Consistente**
   - Mantén las condiciones de iluminación estables
   - Minimiza los cambios de fondo
   - Usa colocación consistente de frutas

2. **Calidad Sobre Cantidad**
   - Recopila demostraciones suaves y deliberadas
   - Evita movimientos bruscos
   - Asegura agarres exitosos en los datos de entrenamiento

3. **Posicionamiento de Cámara**
   - Mantén los ángulos de cámara consistentes
   - Asegura buena visibilidad de frutas y pinza
   - Evita el movimiento de la cámara durante la grabación

### Optimización de Entrenamiento

1. **Tamaño del Conjunto de Datos**
   - Comienza con 50 episodios
   - Agrega más datos si el rendimiento es insuficiente
   - 100-200 episodios típicamente suficientes para tareas simples

2. **Ajuste de Hiperparámetros**
   - Ajusta el tamaño del lote basado en la memoria GPU
   - Aumenta los pasos de entrenamiento para mejor convergencia
   - Monitorea las métricas de evaluación

3. **Consistencia del Entorno**
   - Despliega en condiciones similares al entrenamiento
   - Mantén iluminación consistente
   - Usa tipos similares de frutas y contenedores

## 🔧 Solución de Problemas

### Problemas Comunes

**Puerto USB No Detectado**
```bash
# Remove brltty
sudo apt remove brltty

# Check USB devices
lsusb
sudo dmesg | grep ttyUSB

# Grant permissions
sudo chmod 777 /dev/ttyUSB*
```

**Cámara No Funciona**
- No conectes cámaras a través de hub USB
- Usa conexión USB directa
- Verifica el índice de la cámara con `lerobot-find-cameras opencv`

**Entrenamiento Sin Memoria**
- Reduce el tamaño del lote: `--batch_size=4`
- Reduce la resolución de imagen
- Cierra otras aplicaciones

**Rendimiento de Inferencia Pobre**
- Recopila más datos de entrenamiento
- Asegura entorno consistente
- Verifica el posicionamiento de la cámara
- Verifica la precisión de calibración

## 📚 Referencias

- 🔗 [Documentación de LeRobot](https://github.com/huggingface/lerobot)
- 🔗 [Wiki del Brazo StarAI](https://wiki.seeedstudio.com/es/lerobot_starai_arm/)
- 🔗 [Documentación de J501 Mini](https://wiki.seeedstudio.com/es/recomputer_j501_mini_getting_started/)
- 🔗 [Artículo ACT](https://tonyzhaozh.github.io/aloha/)
- 🔗 [JetPack SDK](https://developer.nvidia.com/embedded/jetpack)

## 🤝 Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
