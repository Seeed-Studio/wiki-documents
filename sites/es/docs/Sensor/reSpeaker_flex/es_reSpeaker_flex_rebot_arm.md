---
description: Este documento te llevará de la mano desde cero para construir un sistema de brazo robótico inteligente que "escucha y se mueve". Incluso si nunca has tocado un brazo robótico ni hecho desarrollo de hardware, mientras sigas los pasos, ¡podrás reproducir este proyecto con éxito!
title: Controlar reBot Arm usando la voz con reSpeaker 
keywords:
  - reSpeaker
  - python
  - reBot Arm
  - DOA
  - groq
image: https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4.jpg
slug: /control_rebot_arm_using_voice_with_respeaker_flex
sku: 114993700
last_update:
  date: 5/22/2026
  author: wuxinrui
createdAt: '2026-05-22'
updatedAt: '2026-05-22'
url: https://wiki.seeedstudio.com/es/control_rebot_arm_using_voice_with_respeaker_flex/
---


# Controlar reBot Arm usando la voz con reSpeaker 

>

> Este documento te llevará de la mano desde cero para construir un sistema de brazo robótico inteligente que "escucha y se mueve". Incluso si nunca has tocado un brazo robótico ni hecho desarrollo de hardware, mientras sigas los pasos, ¡podrás reproducir este proyecto con éxito!

## Hardware necesario

<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reBot Arm B601-DM</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/img_v3_0210p_67d75fe6-a1fe-40a9-b025-ac92efb1bbbg_1.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reBot-Arm-B601-DM-Bundle.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


<div style={{ display: 'flex', justifyContent: 'center' }}>

<table>
  <tr>
    <th>reSpeaker Flex XVF3800 Circular</th>
    <th></th>
    <th>reSpeaker XVF3800</th>
  </tr>

  <tr>
    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/reSpeaker_flex/reSpeakerFlexXVF3800Circular-4withXIAOESP32S3.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>

    <td
      style={{
        textAlign: 'center',
        verticalAlign: 'middle',
        fontSize: '24px',
        fontWeight: 'bold',
        padding: '0 20px'
      }}
    >
      O
    </td>

    <td>
      <div style={{ textAlign: 'center' }}>
        <img
          src="https://files.seeedstudio.com/wiki/respeaker_xvf3800_usb/front-xiao.jpg"
          style={{ width: 500, height: 'auto' }}
        />
      </div>
    </td>
  </tr>

  <tr>
    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/reSpeaker-Flex-XVF3800-Circular-4-p-6737.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>

    <td></td>

    <td>
      <div className="get_one_now_container" style={{ textAlign: 'center' }}>
        <a
          className="get_one_now_item"
          href="https://www.seeedstudio.com/ReSpeaker-XVF3800-USB-Mic-Array-p-6488.html"
          target="_blank"
        >
          <strong>
            <span>
              <font color={'FFFFFF'} size={'4'}>
                Consigue uno ahora 🖱️
              </font>
            </span>
          </strong>
        </a>
      </div>
    </td>
  </tr>
</table>

</div>


## 1. Descripción general del proyecto

### 1.1 ¿Qué es este proyecto?

Este proyecto es un **sistema de control de brazo robótico inteligente impulsado por voz**. Imagina esta escena:

>🎬**Demostración del escenario**

> Cuando le dices "hola" al brazo robótico sobre la mesa, el brazo robótico girará inmediatamente hacia tu dirección y asentirá como un humano. Cuando dices "baila", se balancea alegremente. Si vas al otro lado de la habitación y aplaudes, inmediatamente "oirá" la dirección del sonido y girará para mirarte: ¡este es el robot inteligente que queremos construir!

En resumen, este sistema hace tres cosas:

1. **Escuchar**: captura tu voz a través de la matriz de micrófonos y también puede determinar de qué dirección proviene el sonido

2. **Entender**: identifica lo que dices mediante IA y comprende tu intención

3. **Moverse**: controla el brazo mecánico para realizar acciones correspondientes (girar, asentir, bailar, saludar, etc.)

### **1.2 Dos modos de interacción**

El sistema proporciona dos modos de funcionamiento principales, que puedes elegir según tus necesidades:

| Modo | Nombre | Interacción | Escenario adecuado |
|-----|-----|-----|-----|
| Modo 1 | **Seguimiento de fuente sonora DOA** | Detecta automáticamente la dirección del sonido y gira | Demostración en sala de exposiciones, dispositivo interactivo |
| Modo 2 | **Control por comandos de voz** | Mantén presionada la tecla Enter para controlar | Asistente de voz, demostración didáctica |

### 1.3 ¿Cómo funciona el sistema?

Describe la arquitectura de todo el sistema en términos sencillos:

```
You speak / make a sound
      ↓
[ reSpeaker ] —— An array composed of 4 "ears" can hear and determine the direction of sound.
      ↓
[ Ubuntu ] —— 
      ↓
   There are two paths:
   ├─→ DOA Mode: Locally directly calculate the sound direction → Control the robotic arm to turn
   └─→ Voice mode: Upload to cloud AI for recognition → Understand your intention → Control the movement of the robotic arm
      ↓
[ reBot Arm ] —— An arm composed of 7 "joints" performs various actions.
```

Un diagrama de arquitectura más especializado se describe de la siguiente manera:

**Capa de hardware** (dispositivos que puedes tocar):

- reSpeaker (matriz de 4 micrófonos con controlador XIAO ESP32S3)  

- reBot Arm B601-DM (manipulador de 6 GDL)  

- Ordenador con Ubuntu 22.04 (ejecuta el programa principal)  

**Capa de controladores** (permite que el hardware se comunique):

- Comunicación de audio USB (pyusb/libusb): conecta la matriz de micrófonos  

- Comunicación serie (MotorBridge): conecta el brazo mecánico  

- Web API (Groq Cloud): conecta con servicios de IA en la nube  

**Capa de algoritmos** (el "cerebro" que procesa los datos):

- Localización de fuente sonora DOA (cálculo local en tiempo real)

- Reconocimiento de voz Whisper (Groq Cloud)

- Comprensión de intención con Llama-3.3 (Groq Cloud)

- Planificación de interpolación de movimiento (control local suavizado)

**Capa de aplicación** (donde puedes ver el efecto):

- Modo de seguimiento DOA, modo de control por voz, animación de espera con respiración, difusión de voz

---

## 2. Preparación de hardware

### 2.1 ¿Qué necesitas preparar?

Antes de comenzar, asegúrate de tener listo todo el siguiente hardware. Si es la primera vez que entras en contacto con este tipo de proyecto, se recomienda comprar directamente el paquete completo para evitar problemas de compatibilidad.

| Componente | Modelo | Cantidad | Características aproximadas | Recomendaciones de compra |
|-----|-----|-----|-----|-----|
| Brazo mecánico | reBot Arm B601-DM | 1 juego | El "cuerpo" que ejecuta las acciones | Oficial de Seeed Studio |
| Matriz de micrófonos | reSpeaker  XVF3800 | 1 | Escucha el sonido y determina la dirección | Oficial de Seeed Studio |
| PC principal | PC con Ubuntu 22.04 | 1 | Ejecuta el "cerebro" del programa | Arquitectura x86_64 |
| Cable USB | USB-A a USB-C | 2 | Dispositivos conectados | Generalmente incluido con el dispositivo |
| Mordaza de carpintería | 3 pulgadas o más | 2 | Fija la base del brazo mecánico | Ferretería o incluida en el juego |
| Fuente de alimentación | 24V 15A (interfaz XT30) | 1 | Suministra energía al brazo mecánico | Generalmente incluida en el paquete |

### 2.2 Breve introducción de cada hardware

#### 2.2.1 Brazo reBot Arm B601-DM

Este es un brazo mecánico de escritorio con **7 "articulaciones"** (llamadas profesionalmente 7 grados de libertad), que al igual que un brazo humano puede realizar diversos movimientos flexibles.

**Descripción de las articulaciones** (de arriba hacia abajo):

| Articulación | Nombre coloquial | Qué puede hacer | Rango de movimiento |
|-----|-----|-----|-----|
| J1 | Cintura (rotación de la base) | Rotación izquierda y derecha de todo el cuerpo | ± 149 ° |
| J2 | Elevación del brazo superior | Elevar o bajar el brazo superior | 0 ° ~ -206 ° |
| J3 | Extensión del antebrazo | Extensión o flexión del antebrazo | 0 ° ~ -206 ° |
| J4 | Rotación de muñeca | Rotación izquierda y derecha de la muñeca | ± 85.9 ° |
| J5 | Inclinación de muñeca | Balanceo de la muñeca hacia arriba y hacia abajo | ± 85.9 ° |
| J6 | Guiñada de muñeca | Ajuste de la dirección de la muñeca | ± 85.9 ° |
| J7 | Pinza | Agarra objetos | Control de apertura y cierre |

💡**Puedes entenderlo así**: J1 es como la rotación de la cintura de una persona, J2 es como la elevación del hombro, J3 es como la flexión del codo, J4/J5/J6 son como las diversas rotaciones de la muñeca, y J6 es como un dedo. Combinando estas articulaciones, el brazo robótico puede realizar movimientos muy ricos.

⚠**Advertencia de montaje**: Si compras piezas que necesitan ser ensambladas por ti mismo, presta especial atención:

- El kit contiene una gran cantidad de tornillos y piezas estructurales, y algunas piezas son muy similares en apariencia

- **Se recomienda encarecidamente usar un destornillador eléctrico**, ajustando el par a un rango medio-bajo (3 ~ 6kgf.cm)

- Un par excesivo puede provocar fácilmente que **el tornillo se pase de rosca**

- Presta atención a la seguridad durante el montaje para evitar pellizcos y aplastamientos en las manos

#### 2.2.2 Matriz de micrófonos reSpeaker 

Este es un módulo inteligente de procesamiento de voz con **4 micrófonos**, cuyas características principales son:

- **Diseño dividido**: la placa principal y la placa de la matriz de micrófonos se pueden separar, lo que te permite disponerlas de forma flexible en diferentes dispositivos

- **Captación de 360 °**: los 4 micrófonos están dispuestos en un anillo, pudiendo recibir sonido desde todas las direcciones

- **Procesamiento inteligente integrado**: integra el chip XMOS XVF3800, con funciones de cancelación de eco, supresión de ruido, localización de fuente sonora (DOA), entre otras

- **Interfaz USB dual**: dispone de dos modos de conexión: interfaz USB-C e interfaz con conector de bloqueo PH2.0

- **Amplificador de potencia integrado**: puede impulsar directamente un altavoz de 10W (a través de la interfaz JST)

**Componentes principales**:

| Componente | Función |
|-----|-----|
| Chip XMOS XVF3800 | El "cerebro" responsable de todo el procesamiento de audio |
| Códec TLV320AIC3104 | Convierte señales de sonido analógicas en señales digitales |
| Interfaz FPC de 24 pines | Conecta la placa de matriz de micrófonos y la placa principal |
| Interfaz USB-C | Conecta al ordenador, transmite audio y energía |
| Conector de auriculares de 3,5 mm | Permite conectar auriculares para monitorización |
| Conector de altavoz JST | Se puede conectar a altavoces externos |

💡**Comprensión análoga**: Puedes pensar en él como una "oreja a favor del viento": no solo tiene 4 oídos para escuchar el sonido desde todas las direcciones, sino que también puede analizar de qué dirección proviene el sonido y filtrar el ruido, centrándose solo en el sonido que quieres escuchar.

#### 2.2.3 Ordenador con Ubuntu 22.04

Ubuntu es un sistema operativo libre y de código abierto (similar a Windows, pero más popular entre los desarrolladores). Requisitos de este proyecto:

- **Sistema operativo**: Ubuntu 22.04 LTS (versión de 64 bits)

- **Arquitectura**: x86_64 (es decir, un ordenador normal con procesador Intel/AMD)

- **Recomendaciones de configuración mínima**:

- CPU: 4 núcleos o más

- Memoria: 8 GB o más

- Disco duro: 50 GB de espacio libre

- Red: puede acceder a Internet (se usa para llamar a la IA en la nube)

💡**¿Qué pasa si tu ordenador tiene sistema Windows?**

Tienes dos opciones:

1. **Instalar sistema dual**: mantener Windows y Ubuntu en el ordenador al mismo tiempo (recomendado)

2. **Usar máquina virtual**: ejecutar Ubuntu de forma virtual con software (como VMware) dentro de Windows (habrá cierta pérdida de rendimiento, no recomendado para este proyecto)

Tutorial de instalación de Ubuntu 22.04: [https://ubuntu.com/download/desktop](https://ubuntu.com/download/desktop)

### 2.3 Diagrama de conexión de hardware

Antes de comenzar, familiarízate con cómo deben conectarse todos los dispositivos. La conexión general es muy sencilla, solo se requieren dos cables USB:

```
          ┌─────────────────────────────────────┐
          │          Ubuntu 22.04            │
          │   ┌──────────┐                      │
          │   │  Python  │  ←── Run the main program       │
          │   │  3.10    │                      │
          │   └──────────┘                      │
          │          │                          │
          │   ┌──────┴──────┐                  │
          │   │  Groq API   │  ←── Cloud AI Service    │
          │   │  (Internet)   │                  │
          │   └─────────────┘                  │
          └─────┬────────┬────────────────────┘
                │        │
            USB-C Cable   USB-C Cable
                │        │
          ┌─────┴──┐  ┌─┴──────────┐
          │reSpeaker│  │ reBot Arm  │
          │         │  │ B601-DM    │
       │(Microphone) │  │ (Robot Arm)   │
          │        │  │            │
    │ 4-Microphone Array │  │ 7DOF    │
          └────────┘  └────────────┘
                │
          ┌─────┴──────┐
       │  Speaker/Headphone  │  (Optional, used for voice broadcast)
          └─────────────┘
```

**Pasos de conexión**:

1. Conecta el reSpeaker al ordenador mediante un cable USB-C

2. Conecta el reBot Arm al ordenador mediante un cable USB-C

3. (Opcional) conecta altavoces o auriculares al conector de salida de audio del reSpeaker

4. Asegúrate de que el ordenador esté conectado a Internet

---

## 3. Preparación del entorno

Antes de instalar el software, necesitamos confirmar si el entorno de tu sistema cumple los requisitos. Abre la terminal de Ubuntu (Terminal, similar al "símbolo del sistema" de Windows) y luego sigue los pasos siguientes para comprobar uno por uno.

### 3.1 Confirmar versión de Ubuntu

```bash
# Enter the following command in the terminal to view the system version
lsb_release -a
```

✅**Salida esperada** (algo como esto):

```
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04 LTS
Release:        22.04
Codename:       jammy
```

💡**¿Qué pasa si no muestra Ubuntu 22.04?**

- Si es Ubuntu 20.04 u otras versiones, se recomienda actualizar a 22.04, porque este proyecto se ha probado en esta versión

- Si no es Ubuntu, necesitas instalar Ubuntu 22.04

### 3.2 Confirmar versión de Python

```bash
# Check the default Python version in the system
python3 --version
```

✅**Salida esperada**:

```
Python 3.10.12
```

Siempre que la versión sea **3.10.x** (x es cualquier número).

💡**¿Qué pasa si no es Python 3.10?**

No te preocupes, más adelante usaremos Miniforge para crear un entorno especial de Python 3.10, lo cual no afectará al Python predeterminado del sistema.

### 3.3 Comprobar puerto USB

Antes de conectar el hardware, asegúrate de que el ordenador pueda reconocer normalmente el dispositivo USB:

```bash
# View the list of currently connected USB devices
lsusb
```

✅**Salida esperada** (algo como esto, mostrando tu dispositivo USB):

```
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 002 Device 003: ID 2886:0018 Seeed Studio reSpeaker Flex  ← Microphone Array
Bus 002 Device 005: ID 1234:5678 STMicroelectronics Virtual COM Port  ← Robot Arm
```

💡**¿Qué pasa si no veo el dispositivo?**

No te asustes, puede que el dispositivo aún no se haya conectado. Continúa con el siguiente paso y vuelve a comprobar después de instalar el software.

### 3.4 Comprobar conexión de red

```bash
# Test whether the Internet can be accessed
ping -c 3 baidu.com
```

✅**Salida esperada**:

```
PING baidu.com (xxx.xxx.xxx.xxx) 56(84) bytes of data.
64 bytes from ...: icmp_seq=1 ttl=54 time=25.3 ms
64 bytes from ...: icmp_seq=2 ttl=54 time=24.8 ms
64 bytes from ...: icmp_seq=3 ttl=54 time=25.1 ms
```

💡**¿Y si no puedes acceder a Internet?**

El modo de voz requiere conexión a la red para llamar a la Groq API, asegúrate de que la red sea fluida. Si se trata de una red de campus/empresa, puede que se requiera una configuración de proxy adicional (se explicará más adelante).

---

## 4. Instalación de software

⚠️ **Nota importante**: Todos los siguientes comandos deben ejecutarse en la terminal. Se recomienda confirmar que no haya errores después de cada paso antes de continuar con el siguiente.

### 4.1 Paso 1: Instalar Miniforge (herramienta de gestión de entornos de Python)

**¿Qué es Miniforge?**

Miniforge es una herramienta de gestión de entornos de Python, similar a un "gestor de versiones tipo App Store" para Python. Puede ayudarte a:

- Crear un entorno independiente de Python 3.10 sin afectar al Python predeterminado del sistema

- Instalar con un solo clic todas las dependencias del proyecto

- Cambiar entre diferentes versiones de Python para distintos proyectos

**Comando de instalación**:

```bash
# Download the Miniforge installation script
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"

# Perform the installation (follow the prompts)
bash Miniforge3-$(uname)-$(uname -m).sh
```

Después de la ejecución aparecerá el asistente de instalación:

1. Pulsa 'Enter' para ver el acuerdo de licencia

2. Escribe 'yes' para aceptar el acuerdo

3. Pulsa 'Enter' para confirmar la ruta de instalación (predeterminada)

4. Escribe 'yes' para inicializar conda (recomendado)

Después de completar la instalación, **cierra la ventana de terminal actual y abre una nueva terminal** para que la variable de entorno surta efecto.

✅**Verificar instalación**:

```bash
# Enter in the new terminal
conda --version
```

Salida esperada: 'conda 24.x.x' (el número de versión puede ser diferente, mientras se pueda mostrar la versión, la instalación se ha realizado correctamente)

### 4.2 Paso 2: Clonar la base de código del proyecto

```bash
# Download the main codebase of the project (voice control part)
git clone https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git

# Enter the project directory
cd reBot-Arm-reSpeaker-Flex
```

✅**Salida esperada**:

```
Cloning into 'reBot-Arm-reSpeaker-Flex'...
remote: Enumerating objects: ...
...
Resolving deltas: 100% (...)
```

💡**¿Qué pasa si git clone es lento o falla?**

Puede ser un problema de red, puedes intentar:

```bash
# Use domestic mirroring for acceleration (if available)
git clone https://ghproxy.com/https://github.com/xr686/reBot-Arm-reSpeaker-Flex.git
```

### 4.3 Paso 3: Crear un entorno Conda

El proyecto proporciona un archivo 'environment.yml' que enumera todos los paquetes de dependencias necesarios. Solo necesitamos un comando para instalar automáticamente todas las dependencias:

```bash
# Make sure you are in the reBot-Arm-reSpeaker-Flex directory.
# One-click to create an environment and install all dependencies
conda env create -f environment.yml
```

Este proceso puede tardar **10-30 minutos**, dependiendo de la velocidad de tu red. Hará automáticamente lo siguiente:

- Crear un entorno Python 3.10.2 llamado 'flex'

- Instalar pinocchio, numpy y otras bibliotecas de computación científica desde el canal conda-forge

- Instalar pyusb para la comunicación USB

✅**Señal de instalación exitosa** (las últimas líneas se ven así):

```
Executing transaction: ... done
#
# To activate this environment, use
#
#     $ conda activate flex
#
# To deactivate an active environment, use
#
#     $ conda deactivate
#
```

### 4.4 Paso 4: Activar el entorno Conda

```bash
# Activate the newly created flex environment
conda activate flex
```

✅**Indicador de activación exitosa**: aparece '(flex)' delante del prompt de la terminal:

```bash
(flex) user@computer:~/reBot-Arm-reSpeaker-Flex$
```

💡**Recordatorio importante**: Cada vez que abras una nueva terminal, necesitas volver a ejecutar 'conda activate flex' para activar el entorno.

### 4.5 Paso 5: Instalar dependencias del sistema

```bash
# Update the system package list and install ffmpeg
sudo apt-get update && sudo apt-get install -y ffmpeg
```

**¿Qué es ffmpeg?**

ffmpeg es una herramienta de procesamiento de audio y vídeo; este proyecto la utiliza para procesar archivos de audio después de la síntesis de voz. En pocas palabras, es "para permitir que el ordenador reproduzca y procese sonido".

✅**Señal de instalación exitosa**:

```
ffmpeg is already the newest version (x.x.x).
```

### 4.6 Paso 6: Instalar uv (herramienta de gestión de paquetes de Python)

```bash
# Install uv (a fast Python package management tool)
curl -LsSf https://astral.sh/uv/install.sh | sh
```

**¿Por qué necesitas UV?**

uv es una herramienta de gestión de paquetes de Python muy rápida que se puede utilizar para instalar paquetes en formato pip. La biblioteca 'motorbridge' utilizada en el proyecto necesita instalarse a través de uv.

✅**Después de que la instalación sea exitosa**, cierra la terminal y vuelve a abrirla.

### 4.7 Paso 7: Clonar la biblioteca de control del brazo robótico

```bash
# Cloning robotic arm control library
git clone https://github.com/vectorBH6/reBotArm_control_py.git

# Enter the robotic arm control library directory
cd reBotArm_control_py

# Use uv to install dependencies
uv sync
```

✅**Salida esperada**: Muestra el progreso de la instalación sin informar ningún error.

### 4.8 Paso 8: Configurar variables de entorno PYTHONPATH

```bash
# Add the robotic arm control library to the Python search path
export PYTHONPATH="$PWD:$PYTHONPATH"
```

**¿Qué significa eso?**

Cuando Python importa una biblioteca, busca en el directorio especificado por PYTHONPATH. Este comando le dice a Python que "busque en este directorio además de la ruta de búsqueda predeterminada".

⚠️ **Recordatorio importante**: 'export PYTHONPATH' ¡Esta configuración **se volverá inválida cada vez que se cierre la terminal**! Necesitas:

**Esquema A (temporal, para ejecutar cada vez)**: Ejecutar manualmente el comando export anterior cada vez que se abra una nueva terminal

**Esquema B (recomendado, permanente)**: Escribir esta configuración en el archivo '~/.bashrc':

```bash
# Write environment variables to the configuration file so that they will be automatically set every time the terminal is opened.
echo 'export PYTHONPATH="'$PWD':$PYTHONPATH"' >> ~/.bashrc

# Make the configuration take effect immediately
source ~/.bashrc
```

### 4.9 Paso 9: Configurar permisos del puerto serie

Para que el usuario actual pueda acceder al dispositivo serie USB (utilizado para comunicarse con el brazo robótico), es necesario configurar permisos:

```bash
# Set USB serial device permissions (to allow the current user to access without sudo)
sudo chmod 666 /dev/ttyACM*
```

✅**No se debe informar ningún error después de la ejecución**.

💡**¿Por qué necesitas esto?**

El sistema Linux tiene una gestión de permisos estricta para los dispositivos de hardware. De forma predeterminada, los usuarios normales no pueden acceder directamente a los dispositivos serie. Este comando permite que todos los usuarios lean y escriban en estos dispositivos.

⚠️ **Esta configuración será inválida después de reiniciar**. Si quieres que sea permanente, puedes añadir tus usuarios al grupo 'dialout':

```bash
# Add the current user to the dialout group (permanently resolve the permission issue)
sudo usermod -a -G dialout $USER
```

La modificación requiere **cerrar sesión y volver a iniciarla** para que surta efecto.

### 4.10 Paso 10: Configurar la clave de API de Groq

Este proyecto utiliza el servicio de IA en la nube de Groq para el reconocimiento de voz y la comprensión de intenciones. Necesitas registrar una cuenta de Groq y obtener la clave de API.

**Para obtener la clave de API**:

1. Abre el navegador y visita https://console.groq.com/keys

2. Registra una cuenta (puedes usar correo electrónico o cuenta de GitHub)

3. Después de iniciar sesión, haz clic en "Create API Key"

4. Copia la clave generada (el formato es similar a 'gsk_xxxxxxxxxxxx)

**Configura la clave de API en el código**:

```bash
# First return to the main project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Edit the main program file
nano sound_tracking_arm.py
```

Encuentra la siguiente sección en el archivo (aproximadamente alrededor de la línea 60):

```python
VOICE_CFG = {
    "api_key": "12345678",   # ← Replace this line with your actual API Key
    ...
}
```

Reemplaza '"12345678"' con la clave de API que acabas de copiar, por ejemplo:

```python
    "api_key": "gsk_aBcDeFgHiJkLmNoPqRsTuVwXyZ",
```

Guarda el archivo: Presiona 'Ctrl O', luego 'Enter', y después 'Ctrl X' para salir.

⚠️ **Recordatorio de seguridad**:

- **No** compartas tu clave de API en un repositorio de código público o foro

- **No** envíes capturas de pantalla de la clave de API a redes sociales

- Si la clave de API se filtra, elimínala en la consola de Groq y genera una nueva.

### 4.11 Paso 11: Configuración de proxy de red (si es necesario)

Si estás en China continental o en ciertos entornos de red, es posible que no puedas acceder directamente a los servicios de Groq. Pruébalo primero:

```bash
# Test whether Groq can be accessed
ping console.groq.com -c 3
```

Si puedes recibir una respuesta (muestra el tiempo), significa que la red es normal y puedes omitir este paso.

Si se muestra 'unknown host' o 'Request Timeout', es necesario configurar el proxy.

**Cómo configurar el proxy**:

Edita de nuevo 'sound_tracking_arm.py' y encuentra la entrada 'proxy' en 'VOICE_CFG:

```python
VOICE_CFG = {
    ...
    "proxy": None,   # ← Change it to your proxy address
}
```

Por ejemplo, si tu dirección de proxy es 'http:// 192.168.4.7:7897':

```python
    "proxy": "http://192.168.4.7:7897",
```

💡**¿Cómo sé mi dirección de proxy?**

- Si usas Clash: normalmente en 'http:// 127.0.0.1:7890'

- Si usas v2rayN: normalmente en 'http:// 127.0.0.1:10809'

- Si es un servidor proxy de LAN: Pregunta al administrador de red

- El formato del proxy suele ser: 'http:// dirección IP: número de puerto'

---

## 5. conexión y montaje del hardware

### 5.1 pasos de conexión del hardware

Ahora que todo el software ha sido instalado, conectemos el hardware.

**Paso 1: Conectar reSpeaker**

1. Conecta reSpeaker al ordenador con un cable USB-A a USB-C

2. Después de la conexión, el indicador luminoso en el reSpeaker debería encenderse

3. Introduce 'lsusb' en la terminal y deberías poder ver el dispositivo de Seeed Studio.

**Paso 2: Conectar el reBot Arm**

1. Asegúrate de que la base del brazo mecánico se haya fijado firmemente en el escritorio con una mordaza de carpintería

2. Conecta el brazo robótico al ordenador con un cable USB-A a USB-C

3. Conecta la fuente de alimentación de 24V (interfaz XT30), pero **no enciendas todavía**

⚠️ **Lista de verificación de seguridad antes de encender**:

- [ ] La base del brazo mecánico se ha fijado firmemente (sujeta con una mordaza de carpintería)

- [ ] No hay obstáculos en el rango de movimiento del brazo robótico

- [ ] No hay personal cerca del rango de movimiento del brazo robótico

- [ ] Cable USB conectado

- [ ] Cableado de la fuente de alimentación correcto

**PASO 3: ENCENDER E INICIAR**

1. Después de la comprobación, enciende el interruptor de alimentación de 24V

2. El brazo mecánico emitirá un ligero sonido de encendido del motor

3. Introduce 'ls /dev/ttyUSB *' en la terminal, y deberías poder ver dispositivos similares a '/dev/ttyUSB0'

### 5.2 Verificar conexiones de hardware

```bash
# View USB audio device (reSpeaker)
arecord -l
```

✅**Salida esperada** (similar):

```
**** List of CAPTURE Hardware Devices ****
card 2: XVF3800 [reSpeaker XVF3800], device 0: USB Audio [USB Audio]
  Subdevices: 1/1
  Subdevice #0: subdevice #0
```

```bash
# View USB serial device (robotic arm)
ls -la /dev/ttyUSB0
```

O:

```bash
ls -la /dev/ttyACM0
```

✅**Salida esperada**:

```
crw-rw-rw- 1 root dialout 188, 0 ... /dev/ttyUSB0
```

💡**¿Si no puedes ver el dispositivo?**

- Comprueba si el cable USB está bien conectado

- Intenta cambiar a otro puerto USB

- Comprueba si el cable es un cable de datos (algunos cables solo pueden cargar y no transmitir datos)

- consulta la [9. guía de resolución de problemas](#9-guía-de-resolución-de-problemas-faq)

---

## 6. primera ejecución

### Verificación antes de la operación 6.1

Antes del inicio oficial, hagamos algunas verificaciones simples para asegurarnos de que todos los componentes funcionen correctamente.

#### Validación 1: Comprobar dependencias de Python

Asegúrate de estar en el entorno 'flex' y en el directorio principal del proyecto:

```bash
# Activate the environment
conda activate flex

# Enter the project directory
cd ~/reBot-Arm-reSpeaker-Flex

# Verify pyusb and numpy
python -c "import usb.core; import numpy; print('pyusb + numpy OK')"
```

✅**Salida esperada**:

```
pyusb + numpy OK
```

#### Validación 2: Validar la biblioteca del brazo robótico

```bash
# Ensure that PYTHONPATH is set
export PYTHONPATH="$HOME/reBotArm_control_py:$PYTHONPATH"

# Verify the robotic arm library
python -c "from reBotArm_control_py.actuator import RobotArm; print('Robot Arm Library OK')"
```

✅**Salida esperada**:

```
Robot Arm Library OK
```

💡**¿Si el error es 'ModuleNotFoundError'?**

Significa que PYTHONPATH no está configurado correctamente. Por favor confirma:

1. El directorio reBotArm_control_py sí existe.

2. Se ejecutó el comando 'export PYTHONPATH'

3. Si no, intenta usar la ruta completa:

   ```bash
   export PYTHONPATH="/home/Your username/reBotArm_control_py:$PYTHONPATH"
   ```

#### Verificación 3: Probar el micrófono

```bash
# Record a 3-second test audio
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav

# Play the recorded audio (if a speaker/headphone is connected)
aplay -D plughw:2,0 /tmp/test.wav
```

Si puedes escuchar el sonido grabado, la matriz de micrófonos está funcionando correctamente.

### 6.2 Procedimiento de inicio

Después de que todas las verificaciones se hayan superado, ¡se puede iniciar oficialmente el programa!

```bash
# Ensure in the flex environment
cd ~/reBot-Arm-reSpeaker-Flex

# Start the program (a mode selection menu will pop up)
python sound_tracking_arm.py
```

✅**Salida esperada**:

```
==================================================
  reBot Arm B601-DM + reSpeaker Flex
  Please select the operating mode:
==================================================
  [1] DOA Interaction Mode (Sound Source Tracking + Standby Animation)
  [2] Voice control mode (button trigger + AI LLM control)
==================================================
Please enter the mode number (1 or 2):
```

En este momento, introduce '1' para entrar en el modo de seguimiento de fuente de sonido DOA, o introduce '2' para entrar en el modo de control por voz.

#### Especificar directamente el modo de inicio

También puedes especificar el modo directamente en el comando de inicio, omitiendo el menú de selección:

```bash
# DOA Sound Source Tracking Mode
python sound_tracking_arm.py --mode doa

# Voice command control mode
python sound_tracking_arm.py --mode voice
```

### 6.3 Prueba de la primera ejecución

#### Prueba del modo DOA

Cuando se selecciona el Modo 1, el programa:

1. Inicializa el dispositivo USB

2. Conecta el brazo mecánico

3. Entra en estado de espera

**Método de prueba**: Ponte al lado del brazo robótico y habla o aplaude para observar si el brazo robótico:

- Gira en la dirección en la que estás

- Realiza movimientos de asentimiento

- Luego vuelve a espera

#### Prueba del modo de voz

Cuando se selecciona el modo 2, el programa:

1. Inicializa todos los componentes

2. Espera a que presiones Enter

**Método de prueba**:

1. Pulsa la tecla 'Enter'

2. Después de ver el mensaje de "recording", di "hello" o "say hello"

3. Espera unos 5 segundos

4. Observa si:

- Reconoce tu voz

- El brazo mecánico realiza la acción de saludo

- Escuchas la respuesta de la locución de voz

---

## 7. Explicación detallada de la función

### 7.1 modo 1: modo de seguimiento de fuente de sonido DOA

#### ¿Qué es DOA?

El nombre completo de DOA es **Direction of Arrival** (dirección de llegada de la onda sonora), que en pocas palabras es: **juzgar desde qué dirección viene el sonido**. Así como puedes usar ambos oídos para determinar aproximadamente si el sonido está a la izquierda o a la derecha, reSpeaker usa cuatro micrófonos para calcular la dirección del sonido con mayor precisión.

#### Flujo de trabajo

```
Start the system
    ↓
Initialize USB device
    ↓
Connect reSpeaker  ←──→ Connect reBot Arm
    ↓
Loop Execution:
    ├─ Read DOA angle data (0°~360°)
    ├─ Is a valid sound source detected?
    │   ├─ No → Breathing Standby Animation → Continue Reading
    │   └─ Yes → 4-frame Angle Buffer Queue → Calculate Weighted Average Angle
    │           → Cosine Similarity Smoothing Filtering
    │           → Angle change > Trigger Threshold?
    │               ├─ No → Continue Reading
    │               └─ Yes → The robotic arm turns towards the target direction
    │                       → Perform a nodding motion
    │                       → Enter Cool Down
    │                       → Continue Reading
    ↓
Exit (Press Ctrl+C)
```

#### Explicación detallada de los puntos técnicos clave

**Cola de búfer de ángulo de 4 fotogramas**

Imagina que estás escuchando a una persona en movimiento hablar, y si cada fotograma (unos 50 milisegundos) de cambio angular impulsa directamente el brazo robótico, este temblará y vibrará. El sistema utiliza un "búfer circular" para almacenar los datos del ángulo DOA de los últimos 4 fotogramas y luego promedia para que el movimiento sea más suave.

**Filtro de suavizado por similitud de coseno**

A veces el micrófono juzgará mal la dirección (como por un ruido repentino). Este filtro comprobará si los ángulos de los últimos fotogramas son "coherentes"; si la diferencia es demasiado grande, puede tratarse de un juicio erróneo y no responderá. Igual que cuando oyes un sonido, confirmarás la dirección antes de girar la cabeza.

**Umbral de disparo**

Solo cuando el cambio de ángulo supera el umbral establecido (15 ° por defecto) se activará el movimiento del brazo. Esto evita movimientos frecuentes debidos a pequeñas fluctuaciones de ángulo.

**Período de enfriamiento**

Después de cada acción, el sistema entrará en un período de enfriamiento (3 segundos por defecto), durante el cual no responderá a nuevas fuentes de sonido. Esto evita que el brazo robótico tiemble debido a disparos continuos.

**Animación de espera de respiración**

Cuando nadie está hablando, el brazo robótico no estará completamente quieto, sino que entrará en un estado de "respiración", ligeramente similar al de un ser humano. Esto es a la vez estético y permite al usuario saber que el sistema está en funcionamiento.

### 7.2 Modo 2: Modo de control por voz

#### Bucle cerrado de interacción completa

El modo de control por voz admite el bucle cerrado completo de **grabación → reconocimiento → comprensión → ejecución → difusión**.

#### Flujo de trabajo

```
The user presses the Enter key.
    ↓
arecord starts recording (6 channels, 16kHz, 5 seconds)
    ↓
User releases Enter → Stop recording
    ↓
NumPy Audio Normalization Processing (Extract First Channel + Gain Amplification)
    ↓
Upload to Groq API
    ↓
Whisper model performs speech-to-text (STT) recognition
    ↓
Obtain text commands (e.g., "turn left")
    ↓
Send to Llama-3.3-70B large language model
    ↓
LLM understands intent + outputs JSON structured results
    ↓
Analysis results
    ├─ Invalid → Broadcast "Sorry, I didn't catch that. Could you please repeat?"
    └─ Valid → Execute the corresponding robotic arm action
              ↓
         Edge-TTS Voice Announcement Execution Result
              ↓
         Return to standby state
```

#### Comandos de voz compatibles

| Tipo de instrucción | Ejemplo de frase | Acción ejecutada | Descripción |
|-----|-----|-----|-----|
| girar a la izquierda | "turn left"/"look left"/"turn left" | la base del brazo robótico gira 45 grados hacia la izquierda | el ángulo se puede ajustar mediante parámetros |
| girar a la derecha | "turn right"/"look right"/"turn right" | la base del brazo robótico gira 45 grados hacia la derecha | igual que arriba |
| saludo | "say hello"/"hello"/"hi" | realiza un saludo con asentimiento | asiente dos veces seguidas |
| saludar con la mano | "Wave"/"Say Goodbye"/"Bye" | realiza un gesto de despedida con la mano | agita la mano 2 veces a izquierda y derecha |
| volver a cero | "return to initial position"/"reset"/"return to zero" | todas las articulaciones vuelven a la posición cero | vuelve a la postura inicial |
| detener | "Stop"/"Don't move"/"Stop" | detiene la acción actual inmediatamente | comando de parada de emergencia |

#### Ejemplo de interacción

```bash
$ python sound_tracking_arm.py --mode voice

========================================
  🤖 reBot Arm Voice Control System has been activated
  Press Enter to start recording, release to stop.
  Press Ctrl+C to exit
========================================

[Interaction] >>> 🟢 System is idle, please press Enter to start recording... <<< [User presses Enter]
🔴 Recording... Please speak (5 seconds)
[User says: "Turn to the left a bit"]
[User releases Enter]
🟢 Recording completed, processing...

   --- Speech Recognition ---
   📝 Recognition result: "turn left"

   --- Intent Understanding ---
   🤖 Parsed action: turn_left, parameters: {"angle": 45}

   --- Execute Action ---
   => Start executing action: turn_left

   --- Voice Announcement ---
=======================================================
 🤖 [Voice Output] Okay, turning left.
=======================================================

[Interaction] >>> 🟢 System is idle, press Enter to start recording... <<< [Waiting for next input]
```

#### ¿Cómo entiende la IA tus palabras?

El proyecto utiliza un Prompt bien diseñado que permite a un modelo de lenguaje grande (Llama-3.3-70B) comprender diversas expresiones en lenguaje natural y traducirlas en instrucciones estructuradas.

Por ejemplo, si dices "help me turn my head to the left", la IA lo entenderá así:

```json
{"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
```

La ventaja de este diseño es que no necesitas decir palabras de comando fijas, ¡solo habla de forma natural como si estuvieras charlando!

---

## 8. parámetros de línea de comandos

### 8.1 tabla completa de parámetros

Cuando inicies el programa, puedes añadir varios parámetros para personalizar el comportamiento:

```bash
python sound_tracking_arm.py [Parameter]
```

| Parámetro | Corto | Predeterminado | Descripción |
|-----|-----|-----|-----|
| '-- mode' | '-m' | 'doa' | Modo de funcionamiento: 'doa' (seguimiento de fuente de sonido) o 'voice' (control por voz) |
| '-- device' | '-d' | '0' | ID de dispositivo USB de reSpeaker |
| '-- port' | '-p' | '/dev/ttyUSB0' | Ruta del dispositivo de puerto serie del brazo mecánico |
| '-- threshold' | '-t' | '15' | Umbral de disparo del ángulo DOA (en grados) |
| '-- cooldown' | '-c' | '3' | Período de enfriamiento de la acción (en segundos) |
| '-- buffer-size' | '-B ' | '4' | Fotogramas del búfer de ángulo DOA |
| '-- groq-key' | '-k' | 'None' | Clave de API de Groq (también se puede configurar por código) |
| '-- tts-voice' | '-v' | 'zh-CN-XiaoxiaoNeural | Voz de Edge-TTS |
| '-- debug' | - | 'False' | Habilitar salida de registro de depuración |

### 8.2 ejemplo de uso

#### Uso básico

```bash
# DOA Tracking Mode (Default)
python sound_tracking_arm.py

# Voice control mode
python sound_tracking_arm.py --mode voice
```

#### Ajustar la sensibilidad del DOA

```bash
# Increase the trigger threshold (requires a larger change in sound direction to respond, reducing false triggers)
python sound_tracking_arm.py --threshold 25

# Lower the trigger threshold (more sensitive, but also more prone to false triggering)
python sound_tracking_arm.py --threshold 10

# Extend Cool Down (longer "rest time" after action)
python sound_tracking_arm.py --cooldown 5

# Adjust multiple parameters simultaneously
python sound_tracking_arm.py --threshold 20 --cooldown 5
```

#### Especificar el dispositivo de hardware

```bash
# The robotic arm is connected to different serial ports.
python sound_tracking_arm.py --port /dev/ttyACM0

# Specify Groq API Key (command-line input will override the configuration in the code)
python sound_tracking_arm.py --mode voice --groq-key gsk_xxxxxxxxxxx
```

#### Cambiar el timbre de voz

```bash
# Use Chinese male voice (Yun Jian)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-YunjianNeural

# Use Chinese female voice (Xiaoxiao, default)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoNeural

# Use Chinese female voice (Xiaoxiao, multi-emotional)
python sound_tracking_arm.py --mode voice --tts-voice zh-CN-XiaoxiaoMultilingualNeural
```

Lista completa de voces compatibles con Edge-TTS:[https://github.com/rany2/edge-tts#changing-the-voice](https://github.com/rany2/edge-tts#changing-the-voice)

#### Habilitar el modo de depuración

```bash
# Enable detailed log output (helpful for troubleshooting)
python sound_tracking_arm.py --debug
```

---

## 9. guía de resolución de problemas FAQ

Esta sección recopila los problemas y soluciones más comunes que encuentran los usuarios principiantes. Si no puedes encontrar tu problema aquí, comprueba si la conexión de hardware es correcta y luego revisa el mensaje de error que muestra el terminal.

### 9.1 problemas en la fase de instalación

#### P1: 'conda command not found'

**Problema**: Después de instalar Miniforge, al introducir el comando 'conda' aparece el mensaje de que no se encuentra.

**Causa**: La variable de entorno no está configurada correctamente.

**Solución**:

```bash
# Option 1: Reinitialize the shell
~/miniforge3/bin/conda init bash
# Then close the terminal and reopen it.

# Option 2: Manual Activation
source ~/miniforge3/etc/profile.d/conda.sh
conda activate base
```

#### P2: Error al crear el entorno para 'environment.yml'

**Problema**: Se informa de un error cuando ejecutas 'conda env create -f environment.yml.

**Posibles causas y soluciones**:

1. **Problemas de red** (lo más común):

```bash
# Switch to domestic mirroring source
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
conda config --add channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
conda config --set show_channel_urls yes
# Then try again
conda env create -f environment.yml
```

2. **Espacio en disco insuficiente**:

```bash
# Check disk space
df -h
# Ensure there is at least 5GB of available space.
```

3. **La versión de conda es demasiado antigua**:

```bash
conda update conda
```

#### P3: 'uv: command not found'

**Problema**: Después de instalar uv, el sistema no puede encontrar el comando.

**Solución**:

```bash
# Check if uv is installed
ls ~/.cargo/bin/uv

# If it exists, add it to PATH
echo 'export PATH="$HOME/.cargo/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

#### P4: 'uv sync' informó un error

**Problema**: Falló la ejecución de 'uv sync' en el directorio 'reBotArm_control_py.

**Posibles causas**:

1. No estás en el directorio correcto

2. La versión de Python no coincide.

**Solución**:

```bash
# Confirm that the directory is correct
ls -la pyproject.toml

# If it doesn't exist, it means you're not in the correct directory.
cd ~/reBotArm_control_py

# Confirm the Python version
python --version  # 应该是 3.10.x
```

### 9.2 Problema de reconocimiento de dispositivo USB

#### P5: 'lsusb' no ve reSpeaker

**Pasos de diagnóstico**:

1. **Comprueba si el cable USB está bien conectado**: Vuelve a conectar el cable USB-C

2. **Cambia de puerto USB**: Prueba otros puertos USB de tu ordenador (especialmente el puerto azul USB 3.0)

3. **Comprueba el cable**: Asegúrate de que estás usando un cable de datos (algunos cables solo sirven para cargar)

4. **Ver el registro del sistema**:

```bash
# View USB connection logs
dmesg | tail -20
```

5. **Comprueba si se requiere un controlador**:

```bash
# View detailed information of USB devices
lsusb -v -d 2886:
```

#### P6: 'lsusb' no ve el brazo

**Pasos de diagnóstico**:

1. Confirma que el cable USB está conectado correctamente

2. Confirma que la alimentación del brazo robótico está encendida (interruptor de alimentación de 24V)

3. Comprueba si el indicador de encendido está encendido

4. Ver registros del sistema:

```bash
dmesg | grep -i "ttyUSB\|ttyACM\|usb"
```

#### P7: 'Permission denied: /dev/ttyUSB0'

**Problema**: No tienes permiso para acceder al dispositivo serie.

**Solución**:

```bash
# Temporary solution
sudo chmod 666 /dev/ttyUSB0

# Permanently resolve (recommended)
sudo usermod -a -G dialout $USER
# Then log out and log back in.
```

### 9.3 Problemas de ejecución de Python

#### P8: 'ModuleNotFoundError: No module named 'usb.core''

**Problema**: No se encuentra el módulo Pyusb.

**Solución**:

```bash
# Confirm in the flex environment
conda activate flex

# Manually install pyusb
conda install -c conda-forge pyusb

# If it still doesn't work, check the Python path.
which python  # Confirm that the output contains miniforge3/envs/flex
```

#### P9: 'ImportError: cannot import name 'RobotArm''

**Problema**: No se puede encontrar la biblioteca de control del brazo robótico.

**Solución**:

```bash
# Confirm that reBotArm_control_py has been correctly cloned
ls ~/reBotArm_control_py

# Confirm that PYTHONPATH has been set
echo $PYTHONPATH  # should include the path to reBotArm_control_py

# If not, set it manually
export PYTHONPATH="/home/your_username/reBotArm_control_py:$PYTHONPATH"

# Or directly verify the path using Python
python -c "import sys; print(sys.path)"
```

#### P10: 'libusb-1.0.so. 0: cannot open shared object file'

**Problema**: Falta la biblioteca de sistema libusb.

**Solución**:

```bash
# Install the libusb development library
sudo apt-get update
sudo apt-get install -y libusb-1.0-0-dev

# If it still doesn't work, try
conda install -c conda-forge libusb
```

### 9.4 Problemas de red/API

#### P11: 'Groq API Key not set'

**Problema**: El programa indica que la API Key no está configurada.

**Solución**:

1. Comprueba si VOICE_CFG["api_key"] en "sound_tracking_arm.py" ha sido modificado

2. Confirma que el formato de la API Key es correcto (debe comenzar con 'gsk_')

3. También puedes configurar variables de entorno:

```bash
export GROQ_API_KEY="gsk_xxxxxxxxxxxx"
```

#### P12: Cuando 'Connection error' o 'Timeout' al llamar a Groq API

**Problema**: No se puede conectar con el servidor de Groq.

**Pasos de diagnóstico**:

1. **Probar la conectividad de red**:

```bash
ping console.groq.com -c 3
```

2. - - Si el ping falla, necesitas configurar un proxy **:

Edita 'VOICE_CFG en 'sound_tracking_arm.py ':

```python
proxy": "http://your proxy IP:port",  # e.g., "http://127.0.0.1:7890
```

3. **Si el proxy no funciona, comprueba si el proxy está funcionando correctamente**:

```bash
# Test via proxy
curl -x http://your_proxy_IP:port https://console.groq.com
```

#### P13: 'Rate limit exceeded' / 'Quota exceeded'

**Problema**: La frecuencia de llamadas a la API supera el límite o se ha agotado la cuota.

**Solución**:

1. Accede a https://console.groq.com/settings/limits para ver los límites

2. Las cuentas gratuitas de Groq tienen un límite en el número de solicitudes por minuto, reduce la frecuencia de uso.

3. Si es un problema de cuota, puede que necesites actualizar a una cuenta de pago.

#### P14: 'TTS broadcast failure'/'aplay not found'

**Problema**: La función de difusión de voz no funciona con normalidad.

**Solución**:

```bash
# Install alsa-utils (including aplay)
sudo apt-get install -y alsa-utils

# Check audio output device
aplay -l

# If the device is not visible, you may need to configure the default audio output.
```

### 9.5 Problema del brazo mecánico

#### P15: El brazo mecánico no responde/no se mueve

**Pasos de diagnóstico**:

1. **Comprobar el dispositivo serie**:

```bash
ls -la /dev/ttyUSB*
# or
ls -la /dev/ttyACM*
```

2. **Comprobar permisos**:

```bash
# Ensure read and write permissions
ls -la /dev/ttyUSB0  # should show crw-rw-rw-
```

3. **Comprobar la fuente de alimentación**: Confirma que la fuente de alimentación de 24V está encendida

4. Comprueba el registro del programa: ¿Hay algún mensaje de error sobre 'ArmCtrl' al ejecutar el programa?

5. **Intenta especificar el puerto serie correcto**:

```bash
python sound_tracking_arm.py --port /dev/ttyACM0
# or
python sound_tracking_arm.py --port /dev/ttyUSB1
```

#### P16: Movimiento anormal/jitter del brazo mecánico

**Posibles causas**:

1. El brazo mecánico no está bien fijado: comprueba si la base es firme

2. Hay obstáculos en el rango de movimiento: despeja el espacio de movimiento

3. Ángulo articular anormal: intenta restablecerlo: di "volver a la posición inicial" o reinicia el programa

#### P17: Calentamiento anormal del motor

⚠️**Advertencia**: Si el motor se calienta de forma anormal, ¡apaga la alimentación inmediatamente!

**Posibles causas**:

- El brazo mecánico está bloqueado por una fuerza externa y el motor sigue haciendo fuerza

- Movimiento demasiado rápido

- Funcionamiento continuo prolongado

**Solución**:

1. Apaga la alimentación y espera a que el motor se enfríe

2. Comprueba si hay obstrucciones mecánicas

3. Reduce la frecuencia de movimiento

### 9.6 Problemas relacionados con el audio

#### P18: No hay sonido en la grabación del micrófono

**Pasos de diagnóstico**:

1. **Comprueba si el dispositivo es reconocido**:

```bash
arecord -l  # Should see reSpeaker XVF3800
```

2. **Comprobar el número de dispositivo**:

```bash
# View detailed device information
cat /proc/asound/cards
```

3. **Prueba de grabación manual**:

```bash
# Record with a specified device number (adjust the card and device numbers according to the actual situation)
arecord -D plughw:2,0 -c 6 -r 16000 -f S16_LE -d 3 /tmp/test.wav
```

4. **Comprueba si la matriz de micrófonos está conectada correctamente**: Confirma que el cable FPC está bien conectado

#### P19: Ángulo DOA no estable/saltos

**Posibles causas y soluciones**:

1. **El entorno es demasiado ruidoso**: Haz la prueba en un entorno silencioso

2. **La matriz de micrófonos no está plana**: Asegúrate de que el reSpeaker esté colocado en posición horizontal

3. **Fuerte interferencia de fuentes de sonido cercanas**: Aléjate de ventiladores, altavoces y otros equipos

4. Ajusta el umbral de disparo: Aumenta el parámetro '-- threshold'.

### 9.7 Otras preguntas

#### P20: Ctrl C no puede salir

**Solución**:

```bash
# Try pressing Ctrl+C multiple times
# Or open another terminal
killall python
```

#### P21: Bloqueo durante la ejecución del programa

**Pasos de diagnóstico**:

1. Consulta los últimos mensajes de error antes del bloqueo.

2. Usa el modo '-- debug' para obtener más registros

3. Comprueba si hay memoria insuficiente: 'free -h'

4. Comprueba si la conexión USB es inestable

#### P22: Cómo empezar de nuevo por completo

Si quieres volver a configurar desde cero:

```bash
# 1. Delete Conda Environment
conda activate base
conda env remove -n flex

# 2. Delete the code directory
rm -rf ~/reBot-Arm-reSpeaker-Flex
rm -rf ~/reBotArm_control_py

# 3. Re-execute the installation steps according to this Wiki.
```

---

## 10. Precauciones de seguridad

⚠️ **Cuando utilices este producto, asegúrate de leer atentamente todas las siguientes instrucciones de seguridad. Un uso inadecuado puede provocar daños en el equipo o lesiones personales.**

### 10.1 Seguridad del brazo mecánico

#### Reglas básicas de seguridad

| Regla | Descripción | Consecuencias |
|-----|-----|-----|
| No muevas el brazo mecánico a la fuerza | La articulación del brazo mecánico está accionada por un motor de precisión, y la rotación manual forzada puede causar daños en los engranajes | Daño del motor, alto coste de mantenimiento |
| Asegura que el rango de movimiento esté libre de obstáculos | Antes de la operación, comprueba que no haya personas, paredes u otros objetos en el rango de movimiento del brazo robótico | Las colisiones causan daños al brazo robótico o a los objetos circundantes |
| Desconecta el cable USB en caso de emergencia | En caso de emergencia, desconecta inmediatamente el cable USB del brazo mecánico para cortar la señal de control | El brazo mecánico deja de moverse |
| La carga no debe superar los 1500g | No sujetes objetos que superen 1,5kg con las pinzas | Daño por sobrecarga del motor |
| Mantén una distancia de seguridad de 1,5m | Mantén una distancia de al menos 1,5m cuando el brazo robótico esté en funcionamiento | Evitar lesiones por colisión |

#### Límites de ángulo de las articulaciones

El sistema tiene protección integrada de límite de articulación, la siguiente tabla es para referencia. Ten en cuenta que en el código se utiliza la unidad de radianes (rad).

| Articulación | Nombre | Mín (Ángulo) | Máx (Ángulo) | Descripción |
|-----|-----|-----|-----|-----|
| J1 | Rotación de la base | -149.0 ° | 149.0 ° | Rotación horizontal, rango máximo |
| J2 | Inclinación del hombro | -206.3 ° | 0 ° | Pluma hacia arriba, solo hacia arriba |
| J3 | Inclinación del codo | -206.3 ° | 0 ° | Antebrazo extendido, solo hacia adelante |
| J4 | Rotación de la muñeca | -85.9 ° | 85.9 ° | Rotación del extremo izquierda y derecha |
| J5 | Inclinación de la muñeca | -85.9 ° | 85.9 ° | Balanceo del extremo arriba y abajo |
| J6 | Guiñada de la muñeca | -85.9 ° | 85.9 ° | Dirección de ajuste fino del extremo |
| J7 | Apertura y cierre de la garra | -320.9 | 0 | Control de la garra, el número negativo es abrir |

### 10.2 Seguridad eléctrica

- **No enchufar ni desenchufar con tensión**: Antes de enchufar y desenchufar la interfaz de alimentación XT30 2 2, primero se debe apagar la alimentación

- **No conectar en caliente el motor**: No enchufes ni desenchufes el cable del motor cuando la alimentación esté encendida

- **Usar la fuente de alimentación correcta**: Solo se puede usar una fuente de alimentación de 24V 15A, usar otras fuentes puede causar daños al equipo

- **Evitar ambientes húmedos**: No usar en entornos húmedos, polvorientos y de alta temperatura

- **Comprobar el cable**: Antes de usar, comprueba si el cable de alimentación y la línea de señal están intactos y sin daños

### 10.3 Seguridad del entorno de uso

- **Los menores deben usarlo bajo la supervisión de un adulto**: el brazo mecánico tiene cierta fuerza, un uso inadecuado puede causar lesiones

- **Banco de trabajo estable**: Asegúrate de que el brazo robótico esté fijado en una mesa horizontal estable

- **Espacio suficiente**: Se debe reservar al menos 1 metro de espacio seguro alrededor del brazo robótico

- **Buena iluminación**: Facilita observar el estado de funcionamiento del brazo robótico

- **Mantenerse alejado de fuentes de agua**: El equipo electrónico y el agua no deben entrar en contacto

### 10.4 Instrucciones de seguridad para el reinicio del motor

Antes de reiniciar el motor:

- 2 útiles de fijación (tamaño ≥ 3 pulgadas)

- Mantener una distancia de seguridad de al menos 1 m durante la puesta en marcha y el funcionamiento

- Está prohibido conectar en caliente el motor; se debe desconectar la alimentación antes de enchufar y desenchufar la interfaz XT30 2 2

- Prohibir la sobrecarga del motor y el funcionamiento a exceso de velocidad

- Comprobar el cableado y los elementos de fijación antes de arrancar el equipo

- No usar en entornos húmedos, de alta temperatura o polvorientos

---

## 11. Introducción a los principios técnicos

Esta sección presenta brevemente los principios técnicos centrales implicados en el proyecto para ayudar a los usuarios interesados a entender la "magia que hay detrás". No es necesario comprenderlo por completo para usar este proyecto.

### 11.1 Principio de localización de fuente sonora DOA

#### Pregunta: ¿Cómo saber de qué dirección viene el sonido?

reSpeaker tiene 4 micrófonos dispuestos en un anillo. Cuando el sonido proviene de cierta dirección, hay una ligera diferencia en el tiempo de llegada a los distintos micrófonos (llamada "diferencia de tiempo" o TDOA).

**Explicación popular**: Igual que cuando cierras los ojos, si alguien aplaude a tu izquierda, tu oído izquierdo escuchará primero y tu oído derecho escuchará un poco más tarde. Basándose en esta diferencia de tiempo, el cerebro puede saber que el sonido está a la izquierda.

El chip XVF3800 integrado en reSpeaker hace precisamente esto:

1. Recibe 4 micrófonos al mismo tiempo

2. El chip analiza la diferencia de fase/diferencia de tiempo de las 4 señales

3. Calcula la dirección (0 ° ~ 360 °) de la que es más probable que provenga el sonido.

4. Envía los datos del ángulo DOA al ordenador a través de USB

### 11.2 Proceso de reconocimiento de voz

#### Pregunta: ¿Cómo convertir lo que dices en palabras?

El proyecto utiliza el modelo Whisper de OpenAI y usa llamadas de API aceleradas de Groq. El proceso general es:

1. **Grabación**: se recogen 6 canales de audio de 16kHz mediante arecord desde la matriz de micrófonos

2. **Preprocesamiento**: Usar NumPy para extraer el primer canal (la señal después del beamforming), normalizar y amplificar la ganancia

3. **Subida**: Subir el archivo de audio procesado al servidor de Groq

4. Reconocimiento: El modelo Whisper transcribe las formas de onda de audio en texto.

5. **Devolución**: Obtener el resultado del reconocimiento (por ejemplo, "gira a la izquierda")

El modelo Whisper es uno de los modelos de reconocimiento de voz más avanzados, admite múltiples idiomas y tiene una alta precisión de reconocimiento.

### 11.3 Principio de comprensión de intención

#### Pregunta: ¿Cómo puede la IA entender lo que quieres que haga el brazo mecánico?

El proyecto utiliza el gran modelo de lenguaje Llama-3.3-70B de Meta, llamado a través de la API de Groq.

**Tecnología central**: Ingeniería de prompts

En el código, damos a la IA una "plantilla de instrucciones" detallada y le indicamos:

- Qué acciones se pueden realizar (girar a la izquierda, girar a la derecha, saludar, etc.)

- El significado de cada acción

- Requisitos de formato de salida (JSON)

Por ejemplo, cuando el usuario dice "ayúdame a girar la cabeza hacia la izquierda":

1. El texto se envía a Llama-3.3-70B

2. La IA, combinada con los prompts del sistema, entiende la intención

3. Produce un JSON estructurado:

   ```json
   {"action": "turn_left", "params": {"angle": 45}, "reply": "Okay, turning left."}
   ```

4. El programa analiza el JSON y ejecuta la acción correspondiente

### 11.4 Principio de control del manipulador

#### Pregunta: ¿Cómo controla el ordenador el brazo mecánico?

**Cinemática (Kinematics)**:

El núcleo del control del brazo robótico es la cinemática: dado el ángulo de articulación objetivo, calcular la posición del extremo del brazo robótico en el espacio (cinemática directa); o, a la inversa, dado la posición objetivo del extremo, calcular cuánto debe girar cada articulación (cinemática inversa).

El proyecto utiliza la biblioteca **Pinocchio** para cálculos cinemáticos y planificación de trayectorias.

**Interpolación de movimiento**:

El manipulador no "salta" directamente del punto A al punto B, sino que realiza una transición suave mediante un algoritmo de interpolación. En el código se utiliza la función de suavizado coseno (cosine easing):

```python
# Easing formula: makes motion smoother and more natural
ease = -(math.cos(math.pi * t) - 1) / 2.0
```

Esto hace que el brazo robótico comience acelerando lentamente y desacelere lentamente antes de detenerse, como un movimiento humano natural.

**Protección de límite de articulación**:

Todos los ángulos de articulación objetivo se recortan dentro de un rango seguro:

```python
np.clip(target_angle, JOINT_LIMITS_MIN, JOINT_LIMITS_MAX)
```

Esto garantiza que el brazo robótico no exceda los límites físicos, evitando daños.

---

## 12. Referencias

### 12.1 Enlaces relacionados con el proyecto

| Recurso | Enlace | Descripción |
|-----|-----|-----|
| Repositorio principal del proyecto | https://github.com/xr686/reBot-Arm-reSpeaker-Flex | Programa maestro de control por sonido |
| Biblioteca de control del brazo robótico | https://github.com/vectorBH6/reBotArm_control_py | Biblioteca de control del brazo robótico en Python |
| reBot Arm Oficial | https://www.rebotix.com/ | Sitio web oficial del brazo robótico |
| Seeed Studio | https://www.seeedstudio.com/ | Compra de reSpeaker Flex y soporte técnico |

### 12.2 Wiki relacionada con reSpeaker Flex

| Recursos | Enlaces |
|-----|-----|
| Wiki oficial de reSpeaker Flex | https://wiki.seeedstudio.com/es/reSpeaker_USB_Mic_Array/ |
| Documentación técnica de XMOS XVF3800 | https://www.xmos.com/xvf3800 |
| Guía de usuario de XVF3800 | https://www.xmos.com/download/XVF3800-User-Guide (1).pdf |
| Descripción del algoritmo DOA de la matriz de micrófonos | Ver la documentación oficial de reSpeaker Flex |

### 12.3 Wiki relacionada con el brazo robótico

| Recurso | Enlace |
|-----|-----|
| reBot-DevArm GitHub | https://github.com/Seeed-Projects/reBot-DevArm |
| Guía de montaje de ReBot Arm | Ver la Wiki oficial de Seeed Studio |
| Biblioteca de cinemática Pinocchio | https://github.com/stack-of-tasks/pinocchio |

### 12.4 Documentación de API y herramientas

| Recurso | Enlace | Descripción |
|-----|-----|-----|
| Consola de Groq | https://console.groq.com/keys | Gestión de API Key |
| Documentación de Groq API | https://console.groq.com/docs | Instrucciones de la API |
| Comunidad de desarrolladores de Groq | https://discord.gg/groq | Comunidad de soporte técnico |
| Proyecto Edge-TTS | https://github.com/rany2/edge-tts | Herramienta de síntesis de voz |
| Artículos de Whisper | https://arxiv.org/abs/2212.04356 | Artículos técnicos de reconocimiento de voz |
| Modelo Llama | https://ai.meta.com/llama/ | Modelo de lenguaje grande oficial |

### 12.5 Recursos de aprendizaje tecnológico

| Temas | Recursos recomendados |
|-----|-----|
| Conceptos básicos de Python | https://docs.python.org/zh-cn/3/tutorial/ |
| Uso de Conda | https://docs.conda.io/projects/conda/en/latest/user-guide/getting-started.html |
| Conceptos básicos de Ubuntu | https://ubuntu.com/tutorials/command-line-for-beginners |
| Conceptos básicos de Git | https://www.progit.cc/ |
| Introducción a la robótica | Modern Robotics (Kevin Lynch) |
| Introducción al reconocimiento de voz | Curso de Deep Learning de Andrew Ng - Modelo de secuencia |

### 12.6 Comunidad y soporte

- **GitHub Issues**: Si encuentras un problema que no está cubierto por este documento, puedes enviar un Issue en el repositorio GitHub del proyecto.

- **Foro de Seeed Studio**:https://forum.seeedstudio.com/ (discusiones técnicas relacionadas con reSpeaker)

- **Groq Discord**:https://discord.gg/groq (problemas relacionados con la API)

---

## Escrito al final

¡Felicidades por haber llegado al final del documento! Si sigues esta Wiki paso a paso, creo que has construido con éxito tu propio sistema de brazo robótico de voz inteligente.

Este proyecto implica tecnologías de procesamiento de sonido, interacción de voz con IA, control de movimiento de robots y otros campos, y es un buen proyecto de práctica integral para principiantes. Espero que puedas seguir explorando lo siguiente:

- Intenta modificar los comandos de voz para añadir más acciones personalizadas

- Ajusta los parámetros DOA para que el seguimiento de la fuente sonora sea más sensible

- Explora el despliegue del proyecto en dispositivos embebidos como Raspberry Pi

- Añade un módulo de visión para que el brazo robótico "vea"

Si tienes cualquier pregunta o sugerencia, eres bienvenido a enviar tus comentarios a través de GitHub Issue. ¡Diviértete!🤖

---

> **Descargo de responsabilidad**: Este documento se basa en el código de fuente abierta del proyecto y es solo para referencia. La operación del brazo mecánico es peligrosa, por favor comprenda completamente las precauciones de seguridad antes de operarlo. El autor no es responsable de ningún daño al equipo ni de lesiones personales causadas por el uso de este documento.

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerle diferentes tipos de soporte para garantizar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
