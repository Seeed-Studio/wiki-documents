---
description: Esta guía te ayudará a comenzar con el reBot Arm B601-RS, incluyendo opciones de compra, montaje, calibración y configuración de software.
title: Inicio rápido de reBot Arm B601-RS
keywords:
  - reBot
  - B601-DM
  - B601-RS
  - Brazo robótico
  - Robot
  - Lerobot
  - Pinocchio
  - 6 DOF
image: https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png
slug: /rebot_b601_rs_getting_started
translation:
  skip: [zh-CN]
last_update:
  date: 2026-07-28
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-07-28'
url: https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/
---

# Primeros pasos con reBot Arm B601-RS

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Python Version" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Platform" />
    <img src="https://img.shields.io/badge/Framework-Pinocchio-yellow.svg" alt="Pinocchio" />
</p>

<p align="center">
  <strong>Brazo robótico de 6 GDL · Soporte para múltiples motores · Solucionador de cinemática · Planificación de trayectorias · Totalmente de código abierto</strong>
</p>

El proyecto reBot Arm ha sido liberado como código abierto en [GitHub](https://github.com/Seeed-Projects/reBot-DevArm). Esta guía te llevará a través del inicio rápido del B601-RS, desde el montaje hasta la operación.
El contenido de esta guía se dirige hacia ti a la velocidad de la luz — mantente atento.

## Descargo de responsabilidad de seguridad y aviso de riesgos

<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: "16px" }}>
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/Chinese%20version%20statement.png" />
    <img style={{ width: "calc(50% - 8px)", maxWidth: "420px", height: "auto" }}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/English%20Version%20Statement.png" />
</div>

## Sobre la fuente de alimentación

1. El brazo robótico no se envía con una fuente de alimentación / no incluye una fuente de alimentación por defecto. Puedes conectar una batería por tu cuenta, o comprar nuestra [fuente de alimentación MeanWell de 48V 12.5A de código abierto](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) o en [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1). No compres fuentes de alimentación de fabricantes sin marca o de canales inseguros. Cualquier riesgo o consecuencia que surja de ello será asumido por el propio usuario.

Si el voltaje de tu hogar es 220V, ajusta el interruptor selector de voltaje en el lateral de la fuente de alimentación a 230V. Si el voltaje de tu hogar es 110V, cámbialo a 115V.

| **220V** | **110V** |
|:---:|:---:|
| <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" width="300" /> | <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" width="300" /> |


   <div align="center">
     <img width={800}
     src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" />
   </div>

2. Como alternativa, puedes elegir nuestra carcasa de fuente de alimentación MeanWell de 24V 14.6A de código abierto para montaje propio. Las instrucciones de texto y la lista de materiales (BOM) están publicadas como código abierto en el [repositorio de GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) (recomendado solo para desarrolladores con experiencia relevante en montaje de fuentes de alimentación).

   Vídeo de referencia para el montaje:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## Paso 1: Guía de montaje

- Antes del montaje, lee atentamente las siguientes instrucciones. Para garantizar un proceso de montaje fluido y una experiencia práctica completa, ten paciencia, mantén la concentración y sigue siempre estos puntos clave:
  1. Este kit incluye numerosos tornillos y piezas estructurales, algunas de las cuales se parecen entre sí. Verifica cuidadosamente las especificaciones de los tornillos y los modelos de las piezas, y confirma la orientación de instalación antes de apretar.
  2. El vídeo se grabó a principios de abril. Puede haber pequeños ajustes en las piezas posteriormente, pero esto no afecta a la calidad del montaje si sigues el vídeo. Las piezas finales están sujetas a lo que se envíe.
  3. Para facilitar la instalación y extracción de los tornillos, la BOM de código abierto especifica tornillos estándar. Sin embargo, los tornillos enviados con el kit tienen fijador de roscas aplicado. También puedes usar tus propias herramientas preferidas o un destornillador eléctrico (se recomienda encarecidamente tener uno preparado). Si utilizas una herramienta eléctrica, asegúrate de ajustar el par a un nivel bajo o medio (3–6 kgf·cm) para evitar un par excesivo que pueda barrer los tornillos, causando daños irreversibles que impidan retirar las piezas. Si hay cualquier indicio de que la cabeza se está barriendo, sustituye inmediatamente el tornillo o realinea y vuelve a intentarlo. Los tornillos con fijador de roscas barridos no pueden retirarse con un extractor de tornillos y arruinarán toda la pieza. Por lo tanto, procede con precaución.
  4. Da prioridad a la seguridad durante el montaje para evitar pellizcos en los dedos o lesiones por aplastamiento. Los niños deben completar este proyecto acompañados por un padre, madre o tutor.




## Paso 2: Calibrar el brazo robótico y comenzar

1. Explora nuestra plataforma **MotorBridge**. Esta plataforma es una solución integral de ventanilla única que admite la expansión continua de tipos de motores, cubriendo [motores Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [motores Robstride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [motores Hightorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [motores Myactuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow y más. También es compatible con productos de brazo robótico en actualización continua como reBot. La plataforma es fácil de usar para principiantes y también proporciona un SDK de Python con funcionalidad totalmente consistente para desarrolladores.

2. Experimenta las nuevas funciones y detalles de MotorBridge adaptados específicamente al brazo robótico reBot, incluyendo calibración del punto cero con un clic, escritura de parámetros, control de motores mediante arrastrar y soltar a través de la interfaz de usuario, y una interfaz integrada de visualización de modelos.

3. Esta herramienta es totalmente compatible con los sistemas operativos **Windows, Ubuntu y macOS**.

:::tip
1. Se ha verificado que el rendimiento de las máquinas virtuales es insuficiente para ejecutar las demostraciones y existen problemas de configuración. Se recomienda usar una máquina física con Ubuntu para controlar el brazo robótico.

2. (Versión beta) Deja que un agente te ayude a inicializar el brazo robótico. Copia el siguiente contenido y envíaselo al agente:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

  Nota: Si compraste un kit preensamblado, dile al agente durante el paso de escritura de ID de motor: "Compré un kit preensamblado, por favor escanea los motores 1–7 para verificar que todos estén en línea, no reescribas los ID de los motores."

3. El agente utiliza comandos CLI para completar la escritura de los ID de los motores, mientras que la wiki utiliza un método de interacción mediante interfaz web. Ambos enfoques funcionan.

:::

Deberías haber completado la preparación preliminar para el montaje del brazo robótico siguiendo el vídeo. A continuación, presentaremos los pasos para escribir los ID de los motores y calibrar el brazo robótico.


Consulta el vídeo y el tutorial en texto. Antes de controlar el brazo robótico, necesitas restablecer el punto cero de nuevo.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>



### 1. Instalar Miniforge (recomendado) (Compatible con Windows\Ubuntu\macOS\Jetson\Raspberry Pi)

1. Instala Miniforge y crea un entorno virtual para evitar conflictos con otros paquetes de entorno que puedan causar fallos en las demostraciones.

Ubuntu\Jetson\Raspberry Pi:

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

o macOS:
```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

o Windows:

Abre la página de lanzamientos de Miniforge en tu navegador, busca la última versión de `Miniforge3-Windows-x86_64.exe` y haz clic para descargarla:

```text
https://github.com/conda-forge/miniforge/releases
```

2. Crea un entorno virtual de Python 3.12:

:::tip
  **Usuarios de Git Bash**: Si el comando `conda` no se encuentra, significa que Git Bash no ha cargado el entorno de conda. Primero necesitas inicializarlo:

  ```bash
  # Temporary (current terminal only), replace <install_path> with the actual path
  source <install_path>/etc/profile.d/conda.sh

  # Permanent (write to bashrc, run once)
  echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
  source ~/.bashrc
  ```

  Para que PowerShell active automáticamente el entorno de conda:

  ```bash
  conda init powershell
  ```

:::

```bash
conda create -y -n rebot python=3.12
```

3. Activa el entorno virtual. **Necesitas volver a ejecutar este comando de activación cada vez que abras una terminal para usar las funciones relacionadas con reBot**:

```bash
conda activate rebot
```

### 2. Instalar Motorbridge

Después de activar el entorno virtual de reBot, ejecuta el siguiente comando para instalar motorbridge:

:::tip Nota para usuarios de macOS
Si experimentas bajas tasas de fotogramas durante la teleoperación en macOS, puede deberse a una versión desactualizada del controlador WCH CH34x. Para **macOS 10.14 y posteriores**, el sistema incluye un controlador integrado `AppleUSBCHC0M`. Puedes desinstalar el controlador antiguo y cambiar al controlador integrado de macOS, lo que debería mejorar eficazmente la tasa de fotogramas.
:::


```bash
pip install motorbridge
```

### 3. PCAN-USB

Haz que el dispositivo PCAN-USB funcione en el bus CAN a 1 Mbps para la comunicación con el brazo robótico.

Ubuntu\Jetson\Raspberry Pi:

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000 restart-ms 100
sudo ip link set can0 up
```

o macOS:

Si no se puede cargar libPCBUSB.dylib, instala primero PCBUSB:
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

Configura `DYLD_LIBRARY_PATH` para asegurarte de que motorbridge-gateway pueda encontrar la biblioteca PCBUSB en tiempo de ejecución. Crea un script de activación en el entorno conda para que surta efecto automáticamente cada vez que ejecutes `conda activate rebot`:

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_LIBRARY_PATH="/usr/local/lib${DYLD_LIBRARY_PATH:+:$DYLD_LIBRARY_PATH}"
EOF

echo $DYLD_LIBRARY_PATH
```

Comprueba si está listo:
```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Optional: Check if PCBUSB runtime is loadable
python3 -c "import ctypes; ctypes.CDLL('libPCBUSB.dylib'); print('PCBUSB load OK')"
```

o Windows:

Visita [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) para instalar el controlador de PCAN-USB.

:::tip Atención
Si **PCAN-USB** no se detecta en el Administrador de dispositivos después de instalar el controlador, despliega la sección siguiente, descarga el firmware de PCAN y sigue los pasos de recuperación.
:::

<details>

<summary>Descarga del firmware de PCAN y pasos para la recuperación del controlador</summary>

Si PCAN-USB sigue sin funcionar después de instalar el controlador y el Administrador de dispositivos no muestra el dispositivo **PCAN-USB** como se ilustra a continuación, descarga el paquete de firmware de PCAN y sigue estos pasos para instalar el controlador DFU y volver a flashear el firmware.

![PCAN-USB detectado en el Administrador de dispositivos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [Descargar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### Instalar el controlador DFU

1. Extrae el paquete descargado. Contiene las carpetas `Dfu tool` y `pcan`.

![Carpetas Dfu tool y pcan extraídas del paquete](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. Abre la carpeta `Dfu tool` y ejecuta el instalador `.exe`. Después de la instalación, anota la ruta de instalación del controlador, por ejemplo:

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![Instalador DfuSe y ruta de instalación del controlador](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. Ajusta el interruptor DIP del módulo USB2CAN a **BOOT** y, a continuación, conecta el módulo a tu ordenador.

![Ajusta el interruptor DIP del USB2CAN a BOOT](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. Abre el **Administrador de dispositivos**, localiza **Otros dispositivos → STM32 BOOTLOADER**, haz clic con el botón derecho, selecciona **Actualizar controlador** y, a continuación, selecciona **Buscar controladores en el equipo**.

![STM32 BOOTLOADER en el Administrador de dispositivos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![Selecciona Buscar controladores en el equipo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. Pega la ruta del controlador DfuSeDemo anotada anteriormente en el campo de ubicación, selecciona **Incluir subcarpetas** y haz clic en **Siguiente**.

![Introduce la ruta del controlador DfuSeDemo y selecciona Incluir subcarpetas](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. Desconecta y vuelve a conectar el módulo USB2CAN. Si ahora se identifica como **STM Device in DFU Mode**, la actualización del controlador se ha realizado correctamente.

7. Abre **DfuSeDemo** y confirma que detecta correctamente el módulo USB2CAN.

![DfuSeDemo detecta correctamente el módulo USB2CAN](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### Flashear el firmware de PCAN

1. En DfuSeDemo, haz clic en **Upgrade or Verify Action → Choose...** y selecciona el firmware de la carpeta `pcan` extraída.
2. Haz clic en **Upgrade**, haz clic en **Yes** en el cuadro de diálogo de confirmación y espera a que finalice el proceso de flasheo del firmware. A continuación, puedes cerrar DfuSeDemo.

![Selecciona el firmware de PCAN y haz clic en Upgrade en DfuSeDemo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![Actualización de firmware completada](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### Restaurar y verificar el dispositivo

Desconecta el módulo USB2CAN, ajusta el interruptor DIP a **120R** y vuelve a conectarlo al ordenador. Abre el Administrador de dispositivos. Si el dispositivo se identifica como **PCAN-USB**, el problema se ha resuelto y puedes continuar con esta guía.

![PCAN-USB detectado correctamente en el Administrador de dispositivos](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

<details>
<summary>Descarga de firmware de PCAN y pasos de reparación del controlador - Ubuntu</summary>

Los usuarios de Ubuntu, consulta esta guía

1.> 📦 [Haz clic para descargar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Cambia USB2CAN a BOOT

3.Extrae el archivo USB2CAN.zip del paso 1 y coloca flash_pcan_ubuntu.sh y pcan_canable_hw.bin (desde el interior de USB2CAN.zip) en el mismo directorio

[Haz clic para descargar flash_pcan_ubuntu.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

Si se transfiere desde otro ordenador (por ejemplo, scp):

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
O simplemente cópialo en una unidad flash USB y conéctala al equipo con Ubuntu; siempre que los archivos terminen en ~/Downloads, el directorio actual o /tmp, el script los encontrará automáticamente.

4.Ejecuta:

```text
bash flash_pcan_ubuntu.sh
```

Introduce tu contraseña; espera a que termine

Después de terminar, cambia de nuevo a "120R"

Vuelve a conectar el USB.

</details>

<details>
<summary>Descarga de firmware de PCAN y pasos de reparación del controlador - MAC</summary>

Los usuarios de MAC, consulta esta guía

1.> 📦 [Haz clic para descargar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Cambia USB2CAN a BOOT

3.Extrae el archivo USB2CAN.zip del paso 1 y coloca flash_pcan_mac.sh y pcan_canable_hw.bin (desde el interior de USB2CAN.zip) en el mismo directorio

[Haz clic para descargar flash_pcan_mac.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

Si se transfiere desde otro ordenador (por ejemplo, scp):

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

O simplemente cópialo en una unidad flash USB y conéctala al MAC; siempre que los archivos terminen en ~/Downloads, el directorio actual o /tmp, el script los encontrará automáticamente.

4.Ejecuta:

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

El comando anterior asume que los archivos se colocan en la ruta de Descargas del Mac; ajústalo según tu ruta real

Introduce tu contraseña; espera a que termine

Después de terminar, cambia de nuevo a "120R"

Vuelve a conectar el USB.

</details>

<!-- ### 3. Write Motor IDs

:::tip Pre-assembled kit users, please skip this step
:::

Use a screwdriver to disconnect all motor cables, then connect a single motor to the USB-to-CAN module.

Run the following command to scan whether the motor is detected. The factory ID may be 127.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 126 --end-id 127 --timeout-ms 300
```

After confirming the motor's current ID, run the modification command (note: do not connect multiple motors at the same time, as this will cause all of them to be overwritten):

```bash
# Example: Change ID 127 to 5
motorbridge-cli id-set --vendor robstride --channel can0 --motor-id 127 --new-motor-id 5
```

Repeat the above steps until all motor IDs have been successfully written. Then connect all motor cables and run the following command to make a final confirmation. If 7 motors are detected, you are done.

```bash
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
``` -->


### 4. Iniciar MotorBridge-gateway para escribir puntos cero y depurar

#### Antes del reinicio del motor

Antes de la configuración de los parámetros del motor, ten en cuenta las siguientes preparaciones y normas de seguridad:

- Prepara 2 abrazaderas de sujeción (tamaño ≥3 pulgadas) y una fuente de alimentación conmutada de 48 V con salida XT30 (elige una marca de buena reputación; no utilices fuentes de alimentación de mala calidad).
- Durante la depuración y el funcionamiento, mantén una distancia de seguridad de al menos 1 metro.
- No conectes ni desconectes los motores en caliente; desconecta la fuente de alimentación antes de enchufar o desenchufar el conector XT30 2+2.
- No sobrecargues ni hagas funcionar los motores a exceso de velocidad; comprueba el cableado y los elementos de fijación antes de arrancar; no los utilices en entornos húmedos, de alta temperatura o con polvo.
- Configura parámetros de programa razonables y una función de parada de emergencia para evitar que el equipo se descontrole.
- **Sigue estrictamente las reglas anteriores. El vendedor no se hace responsable de ningún riesgo o pérdida causada por operaciones no conformes o errores humanos.**


#### Escritura y depuración del punto cero mediante la interfaz web

Abre la dirección [motorbridge-studio](https://motorbridge.github.io/motorbridge-studio/) en tu navegador, haz clic en la opción Help, copia el comando correspondiente según tu sistema operativo y placa controladora, verifica la dirección IP y el número de puerto y, a continuación, pulsa Intro en la terminal para ejecutarlo.


```bash
motorbridge-gateway --bind 127.0.0.1:9002  
```

macOS:

```bash
motorbridge-gateway --bind 127.0.0.1:9002 
```

o

```bash
DYLD_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### Inicializar parámetros de control del motor RS

:::warning Completa la inicialización de parámetros antes del primer uso

La mayoría de los ejemplos de reBot Arm B601-RS se ejecutan en modo MIT. El modo de Posición nativa (`pos_vel`) utiliza directamente la ganancia del lazo de posición `loc_kp` y la velocidad máxima `vel_max`. Su comportamiento de movimiento también se ve afectado por la ganancia del lazo de velocidad `spd_kp` y el parámetro de aceleración `acc_rad`. Si los parámetros recomendados del B601-RS no se han inicializado, o si los parámetros guardados en cada articulación son inconsistentes, el modo de Posición puede mostrar una respuesta, velocidad o comportamiento de aceleración y desaceleración anómalos.

Primero selecciona `rebot-arm-robstride` en **Robot Model** en [MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/), escanea y confirma que las articulaciones 1-7 están todas en línea, y completa la calibración de cero del brazo robótico descrita anteriormente. Luego realiza los siguientes pasos:

1. Haz clic en **Read Parameters** para leer los parámetros guardados actualmente en todas las articulaciones en línea. Esta operación solo lee datos y no modifica los motores. Espera hasta que la página indique que los parámetros de control se han leído correctamente y conserva los valores actuales como registro.
2. Haz clic en **Apply Default Template** y confirma que la página indica que la plantilla de parámetros predeterminada de reBot Arm RobStride se ha aplicado a las articulaciones 1-7. Esta operación solo carga los valores recomendados en la página; aún no los escribe en los motores.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="Leer los parámetros del motor B601-RS y aplicar la plantilla predeterminada" />
</div>

3. Haz clic en **Write Parameters**. Confirma que el brazo robótico está apoyado de forma segura y que no hay personas ni obstáculos cerca, y luego confirma la operación de escritura en el cuadro de diálogo. No desconectes la alimentación ni conectes o desconectes cables de motor mientras se están escribiendo los parámetros.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="Confirmar la escritura de los parámetros del motor B601-RS" />
</div>

4. Una vez completada la escritura, MotorBridge Studio lee automáticamente de nuevo los parámetros. La inicialización se realiza correctamente cuando la página indica que la verificación de lectura posterior a la escritura coincide.

:::
