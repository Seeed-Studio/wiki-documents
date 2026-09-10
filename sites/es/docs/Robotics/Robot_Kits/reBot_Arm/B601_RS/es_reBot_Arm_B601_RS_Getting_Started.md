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
  date: 2026-08-17
  author: LiuJunjie
createdAt: '2026-05-26'
updatedAt: '2026-08-27'
url: https://wiki.seeedstudio.com/es/rebot_b601_rs_getting_started/
---

import '/src/css/rebot-wiki-style.css';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import RebotRsDocNav from '@site/src/components/robotics/RebotRsDocNav';

# Primeros pasos con reBot Arm B601-RS

<RebotRsDocNav />

<div align="center">
    <img width={800}
    src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS5_56.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reBot-Arm-B601-RS-Disassembly-Kit-Version-with-Power-Supply-Bundle.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<p align="center">
    <a href="./LICENSE">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="Licencia: MIT" />
    </a>
    <img src="https://img.shields.io/badge/Python-3.10+-blue.svg" alt="Versión de Python" />
    <img src="https://img.shields.io/badge/Platform-Linux%20%7C%20Ubuntu-orange.svg" alt="Plataforma" />
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

1. El brazo robótico no se envía con una fuente de alimentación / no incluye una fuente de alimentación por defecto. Puedes conectar una batería por tu cuenta o comprar nuestra [fuente de alimentación MeanWell de 48V 12.5A](https://www.seeedstudio.com/Power-Adapter-Kit-for-reBot-Arm-B601-RS-p-6873.html) de código abierto o en [Amazon](https://www.amazon.com/LRS-600-48-Switching-Upgrade-Version-SE-600-48/dp/B0BV5XFYNS/ref=sr_1_1?crid=2MK5Y1UI66CW9&dib=eyJ2IjoiMSJ9.FAt8rrpVeLIbeU2px5Bpe3WU2xsHpE3Kw1Fc6ZdPBFrIpRsaASOwU1dL9jPUNnpXO5u67hvlSXTsKCXH7jehZ8VWfiSFbcHmsVhJY_ua86iPUltJFeWlT9LIXphFER27jHWGnaJb2NdRIpPBMVdae8qgIllUI1J-Q8pZranpyjkkiJP2RmiEdhUBXTvvH3-vhk8z2uhf7BJrGW7hjRbjyCO7WHwwBQ3tMcnEKwto2doy9qus35djHRzODSFPbMuiA66PdgPuib4VL1aQghehDEiceMIpTUiCHHeRHfpB71M._yrosm8mVfpUq-5PjNTLSaYPgv8Dot6YbQTaGULjlLQ&dib_tag=se&keywords=LRS-600-48&qid=1781762081&s=electronics&sprefix=lrs-600-48%2Celectronics%2C351&sr=1-1). No compres fuentes de alimentación de fabricantes sin marca o de canales inseguros. Cualquier riesgo o consecuencia que surja de ello será asumido por el propio usuario.

Si el voltaje de tu hogar es de 220V, ajusta el interruptor selector de voltaje en el lateral de la fuente de alimentación a 230V. Si el voltaje de tu hogar es de 110V, cámbialo a 115V.

<div className="rebot-power-gallery">
  <figure className="rebot-power-gallery-item">
    <figcaption>220V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/230V.jpg" alt="Selector de voltaje de la fuente de alimentación ajustado a 230V" />
  </figure>
  <figure className="rebot-power-gallery-item">
    <figcaption>110V</figcaption>
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/115V.jpg" alt="Selector de voltaje de la fuente de alimentación ajustado a 115V" />
  </figure>
  <figure className="rebot-power-gallery-item rebot-power-gallery-item--wide">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100054289-gallery-6.jpg" alt="Adaptador de corriente MeanWell para reBot Arm B601-RS" />
  </figure>
</div>

### Montar la fuente de alimentación

Como alternativa, puedes elegir nuestra carcasa de fuente de alimentación MeanWell de 24V 14.6A de código abierto para montaje propio. Las instrucciones de texto y la lista de materiales (BOM) están publicadas como código abierto en el [repositorio de GitHub](https://github.com/LAN-GER/reBot-DevArm/tree/main/hardware/reBot_B601_RS) (recomendado solo para desarrolladores con experiencia relevante en montaje de fuentes de alimentación).

Video de referencia para el montaje:

   <div class="video-container">
     <iframe width="900" height="600" src="https://www.youtube.com/embed/5GitUWT9gx0?si=I_dnd2bSNHbB95BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>

## Guía de montaje

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>Monta el reBot Arm</h4>
      <p className="rebot-step-label">Paso 1</p>

<Tabs>
<TabItem value="unassembled" label="Versión sin montar">

<div class="video-container">
  <iframe width="900" height="600" src="https://www.youtube.com/embed/Bv60NPO0TRo?list=PLpH_4mf13-A38iXew5DxqswGLjPQ0BflR&amp;index=6" title="reBot Arm B601-RS assembly video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

- Antes del montaje, lee atentamente las siguientes instrucciones. Para garantizar un proceso de montaje fluido y una experiencia práctica completa, ten paciencia, mantén la concentración y sigue siempre estos puntos clave:
  1. Este kit incluye numerosas tuercas y piezas estructurales, algunas de las cuales se parecen entre sí. Verifica cuidadosamente las especificaciones de los tornillos y los modelos de las piezas, y confirma la orientación de instalación antes de apretar.
  2. El video se grabó a principios de abril. Puede haber pequeños ajustes en las piezas posteriormente, pero esto no afecta la calidad del montaje si sigues el video. Las piezas finales están sujetas a lo que se envíe.
  3. Para facilitar la instalación y extracción de los tornillos, la BOM de código abierto especifica tornillos estándar. Sin embargo, los tornillos enviados con el kit tienen fijador de roscas aplicado. También puedes usar tus propias herramientas preferidas o un destornillador eléctrico (se recomienda encarecidamente tener uno preparado). Si utilizas una herramienta eléctrica, asegúrate de ajustar el par de apriete a un nivel bajo o medio (3–6 kgf·cm) para evitar un par excesivo que pueda barrer los tornillos, causando daños irreversibles que impidan retirar las piezas. Si hay cualquier indicio de que la cabeza se está barriendo, sustituye inmediatamente el tornillo o realinea y vuelve a intentarlo. Los tornillos con fijador de roscas barridos no pueden retirarse con un extractor de tornillos y arruinarán toda la pieza. Por lo tanto, procede con precaución.
  4. Da prioridad a la seguridad durante el montaje para evitar pellizcos en los dedos o lesiones por aplastamiento. Los niños deben completar este proyecto acompañados por un padre, madre o tutor.

</TabItem>
<TabItem value="assembled" label="Versión montada">

Conecta los cables del brazo robótico y luego utiliza MotorBridge Studio para escribir los parámetros del motor y establecer la posición cero.

Para este paso, consulta el video de unboxing e inicio rápido del reBot Arm B601-RS que aparece a continuación.

Conecta el Motor 1 y el Motor 2 como se muestra a continuación.

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/RS_m1m2_c.jpg" alt="Conecta el Motor 1 y el Motor 2 en el reBot Arm B601-RS" />
</div>

Luego conecta el módulo USB-a-CAN, la placa divisora de potencia y señal, el cable de alimentación XT30 y el cable XT30 2+2 como se muestra a continuación. Conecta el otro extremo del cable XT30 2+2 al Motor 1 y conecta el cable de alimentación a la fuente de alimentación de 48 V.

<div align="center">
  <img width={400} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/rs_connecting_cable.jpg" alt="Conecta el módulo USB-a-CAN y los cables de alimentación al reBot Arm B601-RS" />
</div>

</TabItem>
</Tabs>

</div>
</section>
</div>

Deberías haber completado la preparación preliminar para el montaje del brazo robótico siguiendo el video. A continuación, presentaremos los pasos para escribir los ID de los motores y calibrar el brazo robótico.


Consulta el video y el tutorial en texto. Antes de controlar el brazo robótico, debes restablecer el punto cero de nuevo.

<div class="video-container">
<iframe width="900" height="600" src="https://www.youtube.com/embed/llSa6qn3yrY?si=hMuZKVDY9yqx3qHx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## Usa MotorBridge para calibrar el brazo y completar la primera ejecución

:::tip
1. Explora nuestra plataforma **MotorBridge**. Esta solución integral admite una gama cada vez mayor de motores, incluidos [Damiao](https://www.seeedstudio.com/DIP-Servo-Motor-24V-120RPM-Brushless-98-9mm-4P-L56-W56-H46mm-p-6660.html), [RobStride](https://www.seeedstudio.com/Robostride-00-Actuator-p-6664.html), [HighTorque](https://www.seeedstudio.com/Hightorque-HTDW-4438-30-NE-Gear-Motor-p-6482.html), [MyActuator](https://www.seeedstudio.com/Myactuator-X4-P36-Planetary-Actuator-p-6469.html), Hexfellow y brazos robóticos en continua actualización como reBot. Es fácil de usar para principiantes y proporciona a los desarrolladores un SDK de Python que coincide con las funciones de la interfaz web.

2. Las funciones de MotorBridge diseñadas para reBot incluyen calibración de cero con un clic, escritura de parámetros, control de motores mediante arrastrar y soltar, y visualización de modelos integrada.

3. MotorBridge es compatible con **Windows, Ubuntu y macOS**.
:::

:::tip
1. Las máquinas virtuales no proporcionan un rendimiento suficiente para un funcionamiento fiable de la demo y pueden introducir problemas de configuración. Utiliza siempre que sea posible una máquina física con Ubuntu.

2. (Beta) Puedes pedirle a un agente que inicialice el brazo robótico. Envíale la siguiente instrucción:

```text
Please follow the process in AGENTS.md (https://github.com/Welt-liu/reBot-B601-Agent-Guide/blob/main/en/AGENTS.md) to help the user complete the initialization of a new robotic arm.
```

Si compraste un kit preensamblado, dile al agente durante el paso de identificación de motores: "I purchased a pre-assembled kit. Scan motors 1–7 and verify that they are online. Do not rewrite the motor IDs."

3. El agente escribe los IDs de los motores mediante comandos CLI, mientras que este Wiki utiliza la interfaz web. Ambos métodos funcionan.
:::

### Flujo de trabajo de configuración de software y calibración

Sigue estos pasos en orden para instalar Miniforge y crear un entorno aislado de Python para el desarrollo de reBot.

<div className="rebot-step-flow">
<section className="rebot-step-item">
    <span className="rebot-step-number">1</span>
<div className="rebot-step-content">
      <h4>Instalar Miniforge</h4>
      <p className="rebot-step-label">Paso 1</p>

Descarga e instala Miniforge para tu sistema operativo:

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Jetson\Raspberry Pi">

```bash
wget "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-$(uname)-$(uname -m).sh"
bash Miniforge3-$(uname)-$(uname -m).sh
```

Durante la instalación, pulsa <kbd>Enter</kbd> para continuar, introduce `yes` para aceptar los términos e introduce `yes` cuando se te pregunte si deseas inicializar Conda.

Reinicia la terminal y verifica la instalación con `conda --version`.

:::tip Si no se encuentra `conda`
Carga Miniforge e inicializa Bash:

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init bash
```
:::

</TabItem>
<TabItem value="macOS" label="macOS">

```bash
curl -L -O "https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-MacOSX-$(uname -m).sh"
bash Miniforge3-MacOSX-$(uname -m).sh
```

Durante la instalación, pulsa <kbd>Enter</kbd> para continuar, introduce `yes` para aceptar los términos e introduce `yes` cuando se te pregunte si deseas inicializar Conda.

Reinicia la terminal y verifica la instalación con `conda --version`.

:::tip Si no se encuentra `conda`
Carga Miniforge e inicializa Zsh, la shell predeterminada en las versiones actuales de macOS:

```bash
source ~/miniforge3/etc/profile.d/conda.sh
conda init zsh
```
:::

</TabItem>
<TabItem value="windows" label="Windows">

Abre la [página de lanzamientos de Miniforge](https://github.com/conda-forge/miniforge/releases), busca el último `Miniforge3-Windows-x86_64.exe` y descárgalo.

:::tip Inicializa Conda para tu terminal
**Usuarios de Git Bash:** Si no se encuentra `conda`, primero carga Conda:

```bash
# Temporary: replace <install_path> with the actual path
source <install_path>/etc/profile.d/conda.sh

# Permanent: add it to bashrc once
echo 'source <install_path>/etc/profile.d/conda.sh' >> ~/.bashrc
source ~/.bashrc
```

Para PowerShell, inicializa Conda con:

```bash
conda init powershell
```
:::

</TabItem>
</Tabs>

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">2</span>
<div className="rebot-step-content">
      <h4>Desactivar la activación automática de base (opcional)</h4>
      <p className="rebot-step-label">Paso 2</p>

Después de que Miniforge inicialice Conda, cada nueva terminal activa automáticamente el entorno `(base)`. Si prefieres iniciar en el entorno del sistema, desactiva la activación automática de base:

```bash
conda config --set auto_activate_base false
```

**Verificar:** Cierra la terminal actual y abre una nueva. El prefijo `(base)` ya no debería aparecer. Activa el entorno de reBot manualmente cuando sea necesario con `conda activate rebot`.

**Restaurar el valor predeterminado:** Ejecuta `conda config --set auto_activate_base true` para volver a habilitar la activación automática de base.

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">3</span>
<div className="rebot-step-content">
      <h4>Crear el entorno de Python</h4>
      <p className="rebot-step-label">Paso 3</p>

Crea el entorno de Python 3.12:

```bash
conda create -y -n rebot python=3.12
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">4</span>
<div className="rebot-step-content">
      <h4>Activar el entorno</h4>
      <p className="rebot-step-label">Paso 4</p>

Ejecuta este comando cada vez que abras una nueva terminal para reBot:

```bash
conda activate rebot
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">5</span>
<div className="rebot-step-content">
      <h4>Instalar Motorbridge</h4>
      <p className="rebot-step-label">Paso 5</p>

Después de activar el entorno virtual de reBot, ejecuta el siguiente comando para instalar motorbridge:

:::tip Nota para usuarios de macOS
Si experimentas bajas tasas de fotogramas durante la teleoperación en macOS, puede deberse a una versión obsoleta del controlador WCH CH34x. Para **macOS 10.14 y posteriores**, el sistema incluye un controlador integrado `AppleUSBCHC0M`. Puedes desinstalar el controlador antiguo y cambiar al controlador integrado de macOS, lo que debería mejorar eficazmente las tasas de fotogramas.
:::


```bash
pip install motorbridge
```

</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">6</span>
<div className="rebot-step-content">
      <h4>Configurar PCAN-USB</h4>
      <p className="rebot-step-label">Paso 6</p>

Haz que el dispositivo PCAN-USB funcione en el bus CAN a 1 Mbps para la comunicación con el brazo robótico.

<Tabs>
<TabItem value="Ubuntu" label="Ubuntu\Raspberry Pi">

```bash
# The kit includes PCAN-USB, which should normally show up as can0 or can1
sudo modprobe peak_usb
ip -br link

# If can0 appears, set the bitrate
sudo ip link set can0 down 2>/dev/null
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can0 up
```


:::tip Atención
Si el dispositivo PCAN tiene un firmware incorrecto después de la instalación del controlador, despliega la sección siguiente, descarga el firmware de PCAN y sigue los pasos de recuperación.
:::

<details>
<summary>Descarga de firmware de PCAN y pasos de reparación del controlador - Ubuntu</summary>

Los usuarios de Ubuntu, por favor consulten esta guía

1.> 📦 [Haz clic para descargar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Cambia USB2CAN a BOOT

3.Extrae el archivo USB2CAN.zip del paso 1 y coloca flash_pcan_ubuntu.sh y pcan_canable_hw.bin (desde dentro de USB2CAN.zip) en el mismo directorio

[Haz clic para descargar flash_pcan_ubuntu.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_ubuntu.sh)

Si lo transfieres desde otro ordenador (por ejemplo, con scp):

```text
scp flash_pcan_ubuntu.sh pcan_canable_hw.bin seeed@your_Ubuntu_IP:~/Downloads/
```
O simplemente cópialo en una memoria USB y conéctala al equipo con Ubuntu; siempre que los archivos terminen en ~/Downloads, el directorio actual o /tmp, el script los encontrará automáticamente.

4.Ejecuta:

```text
bash flash_pcan_ubuntu.sh
```

Introduce tu contraseña; espera a que termine

Después de terminar, cambia de nuevo a "120R"

Vuelve a conectar el USB.

</details>

</TabItem>

<TabItem value="Jetson" label="Jetson">

Descarga el archivo: [peak-linux-driver-9.2.0.tar.gz](https://www.peak-system.com/quick/PCAN-Linux-Driver?_gl=1*1shem7p*_up*MQ..*_gs*MQ..&gclid=CjwKCAjwj7HTBhBiEiwA8s35OkNgKcwSr95URUncy5ADLlO-AjdZSFxtqTgof7UY2-LgkXWyoHMX3RoC0i4QAvD_BwE&gbraid=0AAAAAD_YjBa3gnuD4t8dG6dxnFEdZOcTz)

- Eliminar brltty
En Jetson, brltty puede ocupar el puerto serie USB utilizado por el líder. Elimínalo primero:
```bash
sudo apt remove -y brltty
```

- Instalar dependencias
```bash
sudo apt update
sudo apt install -y \
    build-essential \
    gcc \
    g++ \
    make \
    libpopt-dev \
    can-utils \
    ethtool \
    nvidia-l4t-kernel-headers
```
Verifica que el directorio de cabeceras del kernel actual exista:
```bash
ls -l /lib/modules/$(uname -r)/build
```

- Compilar el controlador PEAK SocketCAN
Descarga y extrae PEAK Linux Driver 9.2.0 y luego entra en el directorio del código fuente:
```bash
tar -xvf peak-linux-driver-9.2.0.tar.gz
cd ~/peak-linux-driver-9.2.0
```
Limpia los artefactos de compilaciones anteriores:
```bash
make clean
```
Compila en modo netdev:
```bash
make netdev
```
El modo netdev registra PCAN-USB como una interfaz de red Linux SocketCAN.
**No** uses `make` a secas. `make` a secas compila en modo chardev, mientras que LeRobot y motorbridge-cli dependen de interfaces SocketCAN.

- Instalar y cargar el controlador
Instala el controlador:
```bash
sudo make install
sudo depmod -a
```
Carga el módulo del kernel pcan:
```bash
sudo modprobe pcan
```
Habilita la carga automática al arrancar:
```bash
echo pcan | sudo tee /etc/modules-load.d/pcan.conf
```
Confirma que el controlador está cargado:
```bash
ip -br link | grep can
```
Salida esperada:
```
can0             DOWN           <NOARP,ECHO>
can1             DOWN           <NOARP,ECHO>
.....
```

- Encontrar qué interfaz PCAN corresponde a tu brazo robótico
```bash
for i in /sys/class/net/can*; do [ "$(basename "$(readlink -f "$i/device/driver" 2>/dev/null)")" = "pcan" ] && basename "$i"; done
```
Las interfaces listadas aquí son dispositivos PEAK PCAN-USB, por ejemplo:
```
can2
```

- Hacer persistente el comando `pcan_refresh`
Las variables de entorno de Linux no sobreviven a un reinicio y la numeración de las interfaces PCAN puede cambiar. Un enfoque más fiable es definir permanentemente una función de actualización y ejecutarla después de abrir una terminal.

Añade la función a `~/.bashrc`:
```bash
grep -q '^pcan_refresh()' ~/.bashrc || cat >> ~/.bashrc <<'EOF'

pcan_refresh() {
    local iface
    iface=$(sudo setup-pcan-if) || return 1
    export PCAN_IF="$iface"
    echo "PCAN_IF=$PCAN_IF"
}
EOF
```
```bash
source ~/.bashrc
```
Ejecuta esto después de reiniciar o de volver a conectar PCAN-USB:
```bash
pcan_refresh
```
Si tiene éxito, mostrará:
```
PCAN_IF=can1
```
Utiliza `$PCAN_IF` en todos los comandos posteriores en lugar de fijar `can1` o `can2` de forma rígida.

```bash
sudo modprobe peak_usb
ip -br link

# If $PCAN_IF appears, set the bitrate
sudo ip link set $PCAN_IF down 2>/dev/null
sudo ip link set $PCAN_IF type can bitrate 1000000 restart-ms 100
sudo ip link set $PCAN_IF up
```

</TabItem>
<TabItem value="macos" label="macOS">

Si no se puede cargar `libPCBUSB.dylib`, instala primero PCBUSB:
```zsh
curl -L -o macOS_Library_for_PCANUSB_v0.13.tar.gz \
  https://raw.githubusercontent.com/tianrking/motorbridge/main/third_party/pcan/macos/macOS_Library_for_PCANUSB_v0.13.tar.gz
tar -xzf macOS_Library_for_PCANUSB_v0.13.tar.gz
cd PCBUSB
sudo ./install.sh
```

`install.sh` solo crea `libPCBUSB.dylib`. El cargador nativo de motorbridge hace `dlopen` del nombre simple `PCBUSB`, así que añade este enlace simbólico. Sin él, la conexión con el brazo falla con `load PCBUSB failed` incluso cuando una comprobación con `libPCBUSB.dylib` mediante ctypes pasaría:

```zsh
sudo ln -sf /usr/local/lib/libPCBUSB.dylib /usr/local/lib/PCBUSB
```

Configura `DYLD_FALLBACK_LIBRARY_PATH` para que motorbridge-gateway pueda encontrar PCBUSB en tiempo de ejecución. Es preferible usar FALLBACK en lugar de `DYLD_LIBRARY_PATH`: este último anula el orden de búsqueda predeterminado de dyld para todo el proceso y puede romper software no relacionado. Crea un script de activación en el entorno conda para que surta efecto automáticamente cada vez que ejecutes `conda activate rebot`:

```bash
mkdir -p "$CONDA_PREFIX/etc/conda/activate.d"
cat > "$CONDA_PREFIX/etc/conda/activate.d/env_vars.sh" << 'EOF'
export DYLD_FALLBACK_LIBRARY_PATH="/usr/local/lib${DYLD_FALLBACK_LIBRARY_PATH:+:$DYLD_FALLBACK_LIBRARY_PATH}"
EOF

echo $DYLD_FALLBACK_LIBRARY_PATH
```

Opcional, sin sudo (máquinas compartidas): instala en `~/.local/lib`. Si tienes el árbol de código fuente de motorbridge:

```bash
./scripts/setup_pcbusb_macos.sh --user-local
ln -sf "$HOME/.local/lib/libPCBUSB.dylib" "$HOME/.local/lib/PCBUSB"
```

Apunta el script de activación de conda a `$HOME/.local/lib` en lugar de `/usr/local/lib`.

Comprueba si está listo. Conecta primero el adaptador PCAN. `ctypes.CDLL('libPCBUSB.dylib')` no es una comprobación de tiempo de ejecución válida: motorbridge nunca carga ese nombre.

```zsh
# Check Python package and CLI are ready
python3 -c "import motorbridge; print('motorbridge OK')"
motorbridge-cli --help

# Native loader dlopens the bare name PCBUSB
python3 -c "import ctypes; ctypes.CDLL('PCBUSB'); print('PCBUSB load OK')"

# Real runtime check (can0 maps to PCAN_USBBUS1 on macOS)
motorbridge-cli scan --vendor robstride --channel can0 --start-id 1 --end-id 7 --timeout-ms 300
```


:::tip Atención
Si el dispositivo PCAN tiene un firmware incorrecto después de la instalación del controlador, despliega la sección siguiente, descarga el firmware de PCAN y sigue los pasos de recuperación.
:::

<details>
<summary>Descarga de firmware de PCAN y pasos de reparación del controlador - macOS</summary>

Los usuarios de MAC, por favor consulten esta guía

1.> 📦 [Haz clic para descargar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

2.Cambia el USB2CAN a BOOT

3.Extrae el archivo USB2CAN.zip del paso 1 y coloca flash_pcan_mac.sh y pcan_canable_hw.bin (desde dentro de USB2CAN.zip) en el mismo directorio

[Haz clic para descargar flash_pcan_mac.sh](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/flash_pcan_mac.sh)

Si se transfiere desde otro ordenador (por ejemplo, scp):

```text
scp flash_pcan_mac.sh pcan_canable_hw.bin seeed@your_MAC_IP:~/Downloads/
```

O simplemente cópialo en una memoria USB y conéctala al MAC; mientras los archivos terminen en ~/Downloads, el directorio actual o /tmp, el script los encontrará automáticamente.

4.Ejecuta:

```text
bash /Users/"your_username"/Downloads/flash_pcan_mac.sh "/Users/"your_username"/Downloads/pcan_canable_hw.bin"
```

El comando anterior asume que los archivos se colocan en la ruta de Descargas del Mac; ajústalo según tu ruta real

Introduce tu contraseña; espera a que termine

Tras finalizar, cambia de nuevo a "120R"

Vuelve a conectar el USB.

</details>

</TabItem>
<TabItem value="windows" label="Windows">

Visita [pcan-usb](https://www.peak-system.com/products/hardware/external-pc-interfaces/pcan-usb/) para instalar el controlador PCAN-USB.


:::tip Atención
Si **PCAN-USB** no se detecta en el Administrador de dispositivos después de instalar el controlador, despliega la sección siguiente, descarga el firmware de PCAN y sigue los pasos de recuperación.
:::

<details>

<summary>Descarga de firmware de PCAN y pasos de reparación del controlador - Windows</summary>

Si PCAN-USB sigue sin funcionar después de instalar el controlador y el Administrador de dispositivos no muestra el dispositivo **PCAN-USB** como se ilustra a continuación, descarga el paquete de firmware de PCAN y sigue estos pasos para instalar el controlador DFU y volver a flashear el firmware.

![PCAN-USB detected in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/01-pcan-usb-device.png)

> 📦 [Descargar USB2CAN.zip](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/USB2CAN.zip)

### Instalar el controlador DFU

1. Extrae el paquete descargado. Contiene las carpetas `Dfu tool` y `pcan`.

![Dfu tool and pcan folders extracted from the package](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/02-extracted-folders.png)

2. Abre la carpeta `Dfu tool` y ejecuta el instalador `.exe`. Después de la instalación, anota la ruta de instalación del controlador, por ejemplo:

```text
C:\Program Files (x86)\STMicroelectronics\Software\DfuSe v3.0.6\Bin\Driver
```

![DfuSe installer and driver installation path](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/03-dfuse-install-location.png)

3. Ajusta el interruptor DIP del módulo USB2CAN a **BOOT** y, a continuación, conecta el módulo a tu ordenador.

![Set the USB2CAN DIP switch to BOOT](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/04-usb2can-boot-switch.jpg)

4. Abre el **Administrador de dispositivos**, localiza **Otros dispositivos → STM32 BOOTLOADER**, haz clic derecho sobre él, selecciona **Actualizar controlador** y luego selecciona **Buscar controladores en mi equipo**.

![STM32 BOOTLOADER in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/05-stm32-bootloader.png)

![Select Browse my computer for drivers](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/06-update-driver.png)

5. Pega la ruta del controlador DfuSeDemo anotada anteriormente en el campo de ubicación, selecciona **Incluir subcarpetas** y haz clic en **Siguiente**.

![Enter the DfuSeDemo driver path and select Include subfolders](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/07-driver-path.png)

6. Desconecta y vuelve a conectar el módulo USB2CAN. Si ahora se identifica como **STM Device in DFU Mode**, la actualización del controlador se realizó correctamente.

7. Abre **DfuSeDemo** y confirma que detecta correctamente el módulo USB2CAN.

![DfuSeDemo correctly detects the USB2CAN module](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/08-dfuse-detects-usb2can.png)

### Flashear el firmware de PCAN

1. En DfuSeDemo, haz clic en **Upgrade or Verify Action → Choose...** y selecciona el firmware de la carpeta `pcan` extraída.
2. Haz clic en **Upgrade**, haz clic en **Yes** en el cuadro de confirmación y espera a que finalice el proceso de flasheo del firmware. Después puedes cerrar DfuSeDemo.

![Select the PCAN firmware and click Upgrade in DfuSeDemo](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/09-select-pcan-firmware.png)

![Firmware upgrade completed](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/10-firmware-upgrade-complete.png)

### Restaurar y verificar el dispositivo

Desconecta el módulo USB2CAN, ajusta el interruptor DIP a **120R** y vuelve a conectarlo al ordenador. Abre el Administrador de dispositivos. Si el dispositivo se identifica como **PCAN-USB**, el problema se ha resuelto y puedes continuar con esta guía.

![PCAN-USB successfully detected in Device Manager](https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/pcan_firmware/11-pcan-usb-recognized.png)

</details>

</TabItem>



</Tabs>
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


</div>
</section>

<section className="rebot-step-item">
    <span className="rebot-step-number">7</span>
<div className="rebot-step-content">
      <h4>Escribir puntos cero y depurar con MotorBridge Gateway</h4>
      <p className="rebot-step-label">Paso 7</p>

#### Antes del reinicio del motor

Antes de la configuración de parámetros del motor, ten en cuenta las siguientes preparaciones y normas de seguridad:

- Prepara 2 abrazaderas de sujeción (tamaño ≥3 pulgadas) y una fuente de alimentación conmutada de 48 V con salida XT30 (elige una marca de confianza; no utilices fuentes de alimentación de mala calidad).
- Durante la depuración y el funcionamiento, mantén una distancia de seguridad de al menos 1 metro.
- No conectes ni desconectes los motores en caliente; desconecta la fuente de alimentación antes de enchufar o desenchufar el conector XT30 2+2.
- No sobrecargues ni hagas funcionar los motores a exceso de velocidad; comprueba el cableado y los elementos de fijación antes de arrancar; no lo utilices en entornos húmedos, de alta temperatura o con polvo.
- Establece parámetros de programa razonables y una función de parada de emergencia para evitar que el equipo se descontrole.
- **Sigue estrictamente las reglas anteriores. El vendedor no se hace responsable de ningún riesgo o pérdida causados por operaciones no conformes o errores humanos.**


#### Escritura de puntos cero y depuración mediante la interfaz web

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
DYLD_FALLBACK_LIBRARY_PATH=/usr/local/lib motorbridge-gateway --bind 127.0.0.1:9002 
```

#### Inicializar parámetros de control del motor RS

:::warning Completa la inicialización de parámetros antes del primer uso

La mayoría de los ejemplos de reBot Arm B601-RS se ejecutan en modo MIT. El modo de Posición nativa (`pos_vel`) utiliza directamente la ganancia del lazo de posición `loc_kp` y la velocidad máxima `vel_max`. Su comportamiento de movimiento también se ve afectado por la ganancia del lazo de velocidad `spd_kp` y el parámetro de aceleración `acc_rad`. Si los parámetros recomendados del B601-RS no se han inicializado, o si los parámetros guardados en cada articulación son inconsistentes, el modo de Posición puede mostrar una respuesta, velocidad o comportamiento de aceleración y desaceleración anormales.

Primero selecciona `rebot-arm-robstride` en **Robot Model** en [MotorBridge Studio](https://motorbridge.github.io/motorbridge-studio/), escanea y confirma que las articulaciones 1-7 están todas en línea, y completa la calibración a cero del brazo robótico descrita anteriormente. Luego realiza los siguientes pasos:

1. Haz clic en **Read Parameters** para leer los parámetros guardados actualmente en todas las articulaciones en línea. Esta operación solo lee datos y no modifica los motores. Espera hasta que la página indique que los parámetros de control se han leído correctamente y conserva los valores actuales como registro.
2. Haz clic en **Apply Default Template** y confirma que la página indica que la plantilla de parámetros predeterminados de reBot Arm RobStride se ha aplicado a las articulaciones 1-7. Esta operación solo carga los valores recomendados en la página; aún no los escribe en los motores.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_read_params.png" alt="Leer los parámetros del motor B601-RS y aplicar la plantilla predeterminada" />
</div>

3. Haz clic en **Write Parameters**. Confirma que el brazo robótico está apoyado de forma segura y que no hay personas ni obstáculos cerca, luego confirma la operación de escritura en el cuadro de diálogo. No desconectes la alimentación ni conectes o desconectes cables de motor mientras se están escribiendo los parámetros.

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/robotics/projects/rebot_arm/Getting_start/en_b601_rs_motorbridge_write_params.png" alt="Confirmar la escritura de los parámetros del motor B601-RS" />
</div>

4. Una vez completada la escritura, MotorBridge Studio lee automáticamente de nuevo los parámetros. La inicialización se realiza correctamente cuando la página indica que la verificación de lectura posterior a la escritura coincide.

:::

</div>
</section>
</div>
