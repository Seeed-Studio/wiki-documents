---
description: Este wiki presenta las características del producto, las especificaciones y la descripción general del hardware del Seeed AGX Orin Dev Kit (reComputer Classic J501), cómo flashear la imagen del sistema JetPack 7.2 y cómo usar interfaces como M.2 Key M/E, Ethernet 10GbE, USB, el cabezal de expansión de 40 pines (GPIO/I2C/SPI/UART/CAN/PWM), cámara, audio, PCIe y RTC, ayudándote a comenzar rápidamente con el desarrollo de IA de borde e IA encarnada basado en Jetson AGX Orin.
title: Introducción a reComputer Classic J501
tags:
  - reComputer Classic J501
  - Seeed AGX Orin Dev Kit
  - Flashear JetPack
  - Uso de interfaces
  - Jetson AGX Orin
  - IA encarnada
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg
slug: /ai_robotics_seeed_agx_orin_dev_kit_getting_started
sku: 100003716,100006184
last_update:
  date: 08/10/2026
  author: Zuhao
createdAt: '2026-05-26'
updatedAt: '2026-08-10'
url: https://wiki.seeedstudio.com/es/ai_robotics_seeed_agx_orin_dev_kit_getting_started/
---

# Flashear JetPack y uso de interfaces | reComputer Classic J501

El reComputer Classic J501 es un ordenador compacto de IA de borde de alto rendimiento basado en el módulo NVIDIA® Jetson AGX Orin™ (32GB/64GB), que ofrece hasta 275 TOPS de rendimiento de IA como reemplazo directo del NVIDIA Jetson AGX Orin Developer Kit. Incorpora 1x Ethernet 10GbE, 4x puertos USB 3.2 Type-A, ranuras M.2 Key M (NVMe Gen4) y Key E (WiFi/BT), una ranura de expansión PCIe, un cabezal de expansión de 40 pines y expansión de cámara MIPI CSI de 8 carriles, proporcionando capacidades de inferencia en el borde para cargas de trabajo como despliegue de modelos grandes, Vision-Language Navigation (VLN) y Vision-Language Action (VLA).

El producto es compatible con JetPack 7.2 (compatible con JetPack 6.2), admite flashear el BSP oficial de NVIDIA y actualizaciones del sistema mediante `sudo apt upgrade`, y es compatible con toolchains y frameworks como CUDA, TensorRT, DeepStream, Isaac ROS, PyTorch y ROS 2/1, acelerando el desarrollo de sistemas de IA de borde como robots autónomos, visión inteligente y fusión multisensor.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/100006184-gallery_img_1.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue J5011 (32GB) ahora 🖱</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue J5012 (64GB) ahora 🖱</font></span></strong>
    </a>
</div>

## Características clave

- **IA de alto rendimiento**: Equipado con el módulo Jetson AGX Orin de 32/64GB, GPU de arquitectura Ampere + NVDLA v2.0, hasta 275 TOPS (INT8), orientado al despliegue de modelos de lenguaje grandes y aplicaciones de IA encarnada
- **Totalmente compatible con el ecosistema NVIDIA Jetson**: Admite flashear el BSP oficial de NVIDIA, actualizaciones del sistema con `sudo apt upgrade` y configuración del entorno mediante SDK Manager; CUDA / TensorRT / DeepStream funcionan de inmediato
- **Conectividad rica**: M.2 Key M (NVMe Gen4) + M.2 Key E (WiFi/BT); 1x 10GbE; 4x USB 3.2 Type-A; 2x USB Type-C (alimentación / recuperación)
- **Expansión completa**: Ranura PCIe (x8 eléctrica); cabezal de 40 pines (I2C, I2S, SPI, UART, GPIO, CAN, PWM); 8x conectores BTB para cámara CSI
- **Listo para robótica**: Compatible con ROS 2/1 e Isaac ROS; CAN0/CAN1 nativos; optimizado para escenarios de AMR y automatización
- **Diseño fácil de usar**: Adaptador de 19V + entrada de CC de amplio rango 9–20V; temperatura de funcionamiento 0~40°C; encendido automático (puentear los pines 5-6 en el Automation Header)

## Especificaciones

### Módulo Jetson AGX Orin System on Module

| Elemento          | reComputer Classic J501 (32G / J5011)                 | reComputer Classic J501 (64G / J5012)                  |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------ |
| Módulo        | NVIDIA Jetson AGX Orin 32GB                           | NVIDIA Jetson AGX Orin 64GB                            |
| Rendimiento de IA | 200 TOPS (INT8)                                      | 275 TOPS (INT8)                                        |
| GPU           | 1792 núcleos NVIDIA Ampere, 56 Tensor Cores            | 2048 núcleos NVIDIA Ampere, 64 Tensor Cores            |
| CPU           | 8 núcleos Arm Cortex-A78AE, 2MB L2 + 4MB L3            | 12 núcleos Arm Cortex-A78AE, 3MB L2 + 6MB L3           |
| Memoria       | 32GB LPDDR5 de 256 bits @ 204.8 GB/s                   | 64GB LPDDR5 de 256 bits @ 204.8 GB/s                   |
| Codificación de vídeo (H.265) | 1×4K60 \| 3×4K30 \| 6×1080p60 \| 12×1080p30    | 2×4K60 \| 4×4K30 \| 8×1080p60 \| 16×1080p30            |
| Decodificación de vídeo (H.265) | 1×8K30 \| 2×4K60 \| 4×4K30 \| 9×1080p60 \| 18×1080p30 | 1×8K30 \| 3×4K60 \| 7×4K30 \| 11×1080p60 \| 22×1080p30 |
| Acelerador DL / Visión | 2× NVDLA v2.0 / PVA v2.0                      | 2× NVDLA v2.0 / PVA v2.0                               |
| Almacenamiento integrado | 64GB eMMC 5.1                                       | 64GB eMMC 5.1                                          |
| Potencia      | 15W – 40W                                             | 15W – 60W                                              |

### Especificaciones de la carrier board

| Elemento       | Especificación                                                                                       |
| ---------- | --------------------------------------------------------------------------------------------------- |
| Mecánico   | 110mm × 110mm × 73mm                                                                                |
| Pantalla   | 1× DP (incluye cable DP→HDMI)                                                                       |
| Red        | 1× RJ45 10GbE (J17)                                                                                 |
| M.2        | 1× M.2 Key M (J4, NVMe 2280, Gen4, SSD de 128G incluido); 1× M.2 Key E (J5, 2230 WiFi/BT, módulo incluido) |
| USB        | 4× USB 3.2 Type-A (J24/J33); 1× USB 3.0 Type-C (alimentación); 1× USB 3.0 Type-C (recuperación); 1× Micro USB (J26, depuración) |
| PCIe       | 1× ranura PCIe (J6, bloque UPHY1 ×8, controlador n.º 5)                                             |
| IO de expansión | Cabezal de 40 pines (J30: I2C, I2S, SPI, UART, GPIO, CAN, PWM)                                   |
| Cámara     | Conector de cámara BTB (J509, CSI0–CSI7, 8×2 carriles)                                              |
| Ventilador | 1× conector de ventilador PWM de 4 pines y 5V (J9, PWM + TACH)                                     |
| Botón / LED | 1× Recovery + 1× RST + 1× Power; 1× LED verde PWR/ACT                                              |
| RTC        | 1× cabezal RTC de 2 pines (J13)                                                                     |
| Otros      | Cabezal de panel de audio (J511); Automation Header (J42); cabezal JTAG (J502)                      |
| Entrada de alimentación | Jack de CC, CC 9–20V (adaptador de 19V incluido)                                         |
| Software   | JetPack 7.2 (compatible con JetPack 6.2)                                                           |
| Temperatura de funcionamiento | 0~40°C                                                                           |

## Descripción general del hardware

**Vista lateral 1** — Botones / Alimentación / Red / Pantalla:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_1.png"/>
</div>

1. Botón de encendido  2. Botón de recuperación  3. Botón de reinicio  4. LED - Power/ACT  5. USB Type-C - alimentación  6. DC 5525 9~20V (conector de alimentación de CC)  7. 10 GbE (puerto Ethernet de 10 Gigabit)  8. USB Type-A × 2  9. Display Port

**Vista lateral 2** — Interfaces de expansión:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_side_view_2.png"/>
</div>

1. Expansión PCIe x16  2. USB Type-C para flasheo  3. Conector de 40 pines (cabezal de expansión de 40 pines)  4. USB 3.2 Type-A × 2

**Vista inferior** — Interfaces internas de la carrier board:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_bottom_view.png"/>
</div>

1. Automation Header (J42)  2. Conector de batería RTC (J13)  3. Cabezal JTAG (J502)  4. M.2 Key E (módulo WiFi/BT incluido)  5. Cabezal de audio (J511)  6. Conector de cámara (J509)  7. M.2 Key M (SSD de 128G incluido)

## 📦 Flasheo del sistema operativo JetPack

### Módulos compatibles

- [Módulo NVIDIA® Jetson AGX Orin™ 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [Módulo NVIDIA® Jetson AGX Orin™ 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Classic J501
- Cable de transmisión de datos USB Type-C
- Adaptador de alimentación de 19V

:::info

Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (ordenador host) </td>
    </tr>
    <tr>
        <td> 20.04 </td>
        <td> 22.04 </td>
        <td> 24.04 </td>
    </tr>
    <tr>
        <td> JetPack 7.2 </td>
        <td> ✅ </td>
        <td> ✅ </td>
        <td> ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Nota:</strong> Para JetPack 7.2, Ubuntu 24.04 solo es compatible para flasheo e instalación de componentes en el dispositivo de destino. Usa Ubuntu 20.04 o 22.04 si necesitas componentes de desarrollo en el host.</p>

:::

### Preparar la imagen de JetPack

Aquí necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td>AGX Orin 64GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBO6K-vbZtNQrhyL3ZfEJH2AUCoIRVNqDCcmA9QsbABiJA">Download</a></td>
      <td>07bb83b8b0fced67a71126ada26076a0<br />76bdefee394d0647429ef9c15bab0f6b</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCQ4t5XnL9sS7StIWTe2d08AQy2N6Su32eg5pZ3IrvfFBs">Download</a></td>
      <td>55e2acfbec97313dbacb04c80c668442<br />2e169c1e5299228d424f8807bd7be4bd</td>
    </tr>
  </tbody>
</table>
</div>

:::note
La Classic J501 **no tiene una interfaz GMSL**. El ejemplo de flasheo de este artículo se basa en la versión de **64GB**. El nombre del archivo de imagen tiene la forma `mfi_seeed-agx-orin-64g-<JetPack version>-<L4T version>-<date>.tar.gz`, y tras la extracción se obtiene un directorio con el mismo nombre (el ejemplo siguiente usa `mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04`; consulta el nombre del archivo que hayas descargado realmente).
:::

:::danger
Los archivos de imagen de JetPack son grandes y pueden tardar alrededor de 60 minutos en descargarse. Espera a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_sha256sum.png"/>
</div>
:::

⚙️ **Todos los archivos `.dts` y demás código fuente para las carrier boards Jetson de SEEED se pueden descargar desde** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### Entrar en modo Force Recovery

<details>

<summary> Instrucciones paso a paso </summary>

Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo force recovery.

📌 Ubicaciones clave de hardware (consulta también "Hardware Overview" en este artículo):

| Componente          | Ubicación                                              | Descripción                                                                  |
| ------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| Botón de Recovery   | Vista lateral 1, etiqueta #2                           | 1× botón de Recovery en la carrier board (mismo lado que Power y Reset)     |
| Puerto USB-C Recovery | Vista lateral 2, etiqueta #2 (USB Type-C para flasheo) | Puerto USB Type-C dedicado para flasheo de firmware, etiquetado como 1× USB 3.0 Type-C (Recovery) en la hoja de datos, usado para flasheo |
| Otros puertos USB   | Type-C (Power) / Micro-B (Debug) / 4× USB 3.2 Type-A   | **No conectes al puerto Recovery equivocado**                                |

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_recovery_button.png"/>
</div>

**Paso 1.** Conecta el puerto **USB Type-C para flasheo** en la carrier board (Vista lateral 2, etiqueta #2) al PC host Ubuntu usando un cable de datos USB Type-C.

**Paso 2.** Pulsa el botón de recovery (Vista lateral 1, etiqueta #2) y mantenlo presionado.

**Paso 3.** Conecta la fuente de alimentación (DC 5525, 9–20V / adaptador de 19V).

**Paso 4.** Suelta el botón de recovery.

**Paso 5.** En el PC host Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que uses, entonces la placa está en modo force recovery.

- Para AGX Orin 64GB: **0955:7023 NVidia Corp**
- Para AGX Orin 32GB: **0955:7223 NVidia Corp**

La imagen siguiente es un ejemplo para el AGX Orin 64GB:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_lsusb_recovery.png"/>
</div>

</details>

### Flashear al Jetson

**Paso 1:** Extrae el archivo de imagen descargado (tomando como ejemplo la versión de 64GB):

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04.tar.gz
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_extract_image.png"/>
</div>

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema JetPack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_seeed-agx-orin-64g-7.2.0-39.2.0-2026-08-04
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_start.png"/>
</div>

Si el proceso de flasheo se completa correctamente, verás la siguiente salida (`Successfully flashed the QSPI` / `Successfully flashed the eMMC` / `Flashing success`):

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_success.png"/>
</div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta una pantalla usando un cable DP (o el cable DP→HDMI incluido), enciende el dispositivo y completa la configuración inicial del sistema (idioma, nombre de usuario, red, etc.).

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/flash_boot_desktop.png"/>
</div>

## 🔌 Uso de interfaces

A continuación se presentarán las distintas interfaces de la placa reComputer Classic J501 y cómo utilizarlas.

## M.2 Key M

La J501 incluye 1× ranura M.2 Key M (J4), que admite **SSD NVMe PCIe Gen4 x4** (tamaño 2280), con un SSD de 128G incluido en el paquete.

### Los SSD compatibles son los siguientes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### Conexión de hardware

La ubicación de M.2 Key M se muestra en la vista inferior de "Hardware Overview", etiqueta 7. Tras retirar los tornillos de la carcasa, inserta el SSD NVMe en la ranura y fíjalo con el tornillo.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_m_ssd.jpg"/>
</div>

### Instrucciones de uso

Abre la terminal en el dispositivo Jetson e introduce los siguientes comandos para probar el estado del SSD y su velocidad de lectura/escritura.

**Paso 1.** Comprobar la información básica del SSD:

```bash
nvme list
```

**Paso 2.** Comprobar el estado de salud del SSD (información SMART):

```bash
sudo nvme smart-log /dev/nvme0n1
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_nvme_status.png"/>
</div>

**Paso 3.** Probar el rendimiento de escritura:

```bash
mkdir -p ~/ssd
dd if=/dev/zero of=~/ssd/test bs=1024M count=5 conv=fdatasync
```

**Paso 4.** Probar el rendimiento de lectura (primero limpia la caché de página para evitar leer desde memoria):

```bash
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
dd if=~/ssd/test of=/dev/null bs=1024M
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2m_ssd_speed.png"/>
</div>

:::danger
Ejecuta el comando `sudo rm ~/ssd/test` para eliminar el archivo de prueba después de completar la prueba.
:::

## M.2 Key E (WiFi/BT)

La ranura M.2 Key E (J5) admite módulos M.2 2230 Wi‑Fi / Bluetooth para conectividad inalámbrica, con un módulo WiFi/BT incluido en el paquete.

### Conexión de hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/hardware_m2_key_e_wifi.jpeg"/>
</div>

:::tip

**Nota: Antes de usar esta interfaz, debes retirar los tornillos de la carcasa, instalar el módulo WiFi/BT en la ranura M.2 Key E (consulta la vista inferior de "Hardware Overview", etiqueta 4) y conectar las antenas.**
:::

### Instrucciones de uso

**Paso 1.** Comprobar el reconocimiento PCIe del módulo WiFi:

```bash
lspci | grep -i network
```

**Paso 2.** Comprobar el estado actual de la conexión:

```bash
iw dev <wlanX> link
```

**Paso 3.** Escanear redes WiFi cercanas:

```bash
nmcli -f active,ssid,signal,freq dev wifi list
```

**Paso 4.** Confirmar las bandas de frecuencia admitidas por el módulo (Banda 1 = 2.4GHz, Banda 2 = 5GHz):

```bash
iw phy phy0 info | grep -E "Band [0-9]"
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_m2e_wifi_test.png"/>
</div>

**Prueba de rendimiento:**
Para probar el rendimiento de Wi‑Fi, usa el siguiente comando (sustituye la dirección IP por la de tu servidor de prueba):

```bash
# On server: iperf3 -s
# On client:
iperf3 -c your_server_ip
```

La funcionalidad Bluetooth está disponible a través de la ranura M.2 Key E (escaneo/emparejamiento con `bluetoothctl`).

## Ethernet

La Classic J501 proporciona 1× puerto RJ45 10GbE (J17), que admite Ethernet de 10 Gigabits y es retrocompatible con velocidades inferiores.

**Indicadores LED por puerto (estado de funcionamiento normal):**

- **LED verde:** ON indica que el enlace está establecido
- **LED parpadeando:** indica actividad de red

Usa `ethtool` para verificar que el PHY funciona correctamente y ver los modos de velocidad admitidos (es normal que "Link detected" muestre no cuando no hay cable conectado):

```bash
sudo ip link set end0 up
sudo ethtool end0
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_ethernet_ethtool.png"/>
</div>

Para probar la velocidad del puerto Ethernet, usa `iperf3` como se indica a continuación (se requiere un cable Ethernet conectado a un servidor par):

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` es la dirección IP del servidor iperf3. El cliente se conectará a este servidor para realizar una prueba de ancho de banda.
`<bind_ip>` vincula la dirección IP local especificada como origen del tráfico de prueba.
:::

## LED

La J501 está equipada con un LED indicador de estado:

- **LED PWR/ACT:** Estado de alimentación / actividad del sistema (verde)

## USB

La Classic J501 proporciona 4× puertos USB 3.2 Type-A (J24/J33, 10Gbps, solo modo host, para conectar periféricos de alta velocidad, dispositivos de almacenamiento o cámaras), 1× puerto de alimentación USB 3.0 Type-C, 1× puerto USB 3.0 Type-C Recovery (puerto de flasheo) y 1× puerto Micro USB de depuración (J26).

### Topología del bus USB

Usa `lsusb -t` para ver el árbol de dispositivos y comprobar el estado de la conexión y la velocidad negociada de cada puerto USB y periférico:

```bash
lsusb -t
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_usb_topology.png"/>
</div>

### Prueba de velocidad USB-A

Crea un script para probar la velocidad del dispositivo USB:

```bash
vim test_usb.sh
```

Pega el siguiente contenido:

<details>
<summary> test_usb.sh </summary>

```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
set -e

MOUNT_POINT="$1"
TEST_FILE="$MOUNT_POINT/test_usb_speed.bin"

if [ -z "$MOUNT_POINT" ]; then
  echo "Usage: $0 <mount_point>"
  echo "Example: $0 /media/seeed/USB"
  exit 1
fi

if [ ! -d "$MOUNT_POINT" ]; then
  echo "Error: $MOUNT_POINT is not a directory"
  exit 1
fi

echo "Write test..."
dd if=/dev/zero of="$TEST_FILE" bs=1M count=2048 conv=fdatasync status=progress

echo
echo "Drop caches..."
sync
echo 3 | sudo tee /proc/sys/vm/drop_caches >/dev/null

echo "Read test..."
dd if="$TEST_FILE" of=/dev/null bs=1M count=2048 status=progress

echo
echo "Cleaning up..."
rm -f "$TEST_FILE"
EOF
```

</details>

Haz que el script sea ejecutable y pruébalo:

```bash
sudo chmod +x test_usb.sh
./test_usb.sh /mnt          # If your USB drive is mounted at /mnt
# Or
./test_usb.sh /media/usb    # If your USB drive is mounted at /media/usb
# Or
./test_usb.sh /path/to/your/usb/mount_point
```

:::note
¡Primero confirma el punto de montaje real de tu dispositivo USB usando el comando `df -h` o `lsblk`!
:::

### Puerto serie de depuración Micro USB

Usando este puerto serie y un cable Micro-USB, puedes monitorizar en el PC la información de depuración de entrada y salida.

**Paso 1.** Abre la herramienta de puerto serie (aquí usamos la herramienta MobaXterm como ejemplo) y crea una nueva sesión.

**Paso 2.** Selecciona la herramienta Serial.

**Paso 3.** Selecciona el puerto serie correspondiente, establece la velocidad en baudios a **115200** y haz clic en "OK".

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_mobaxterm_serial_session.png"/>
</div>

**Paso 4.** Inicia sesión en tu reComputer Classic J501 con el nombre de usuario y la contraseña.

## Ventilador

El Classic J501 proporciona 1 conector de ventilador PWM de 4 pines y 5 V (J9), con la asignación de pines definida como GND / Power / FAN_TACH (detección de velocidad) / FAN_PWM (control de velocidad). El control PWM permite un ajuste dinámico y preciso de la velocidad en función de la temperatura del sistema, logrando una refrigeración eficiente mientras se minimizan el ruido y el consumo de energía.

### Instrucciones de uso

**Control PWM manual:**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

:::note
La política térmica predeterminada está preconfigurada en `/etc/nvpmodel.conf`. Para perfiles personalizados, consulta la [Guía para desarrolladores de NVIDIA Jetson Linux](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Además, podemos configurar manualmente la velocidad del ventilador usando la herramienta `jtop`.

Puedes introducir el siguiente comando en la terminal para instalar **jtop**:

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Luego reinicia tu reComputer Classic J501:

```bash
sudo reboot
```

Después de instalar **jtop**, puedes iniciarlo en la terminal:

```bash
jtop
```

## Cabecera de expansión de 40 pines (GPIO / I2C / SPI / UART / CAN / I2S / PWM)

La cabecera de 40 pines del Classic J501 (J30, ver Vista lateral 2 de la "Descripción general del hardware", etiqueta 3) es compatible con el factor de forma de la cabecera de Raspberry Pi y proporciona: 2x I2C (I2C2/I2C4), SPI1 (doble selección de chip), UART1 (TX/RX/RTS/CTS), I2S2, **CAN0/CAN1 nativos**, PWM01 y múltiples GPIO.

La ubicación física de la cabecera se muestra en la figura siguiente (indicada por la flecha verde, junto a los puertos USB Type-A):

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_photo.png"/>
</div>

La asignación de pines se muestra en la figura siguiente:

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/interface_40pin_header_pinout.png"/>
</div>

:::note
Las etiquetas GPIOxx de la figura son números compatibles con Raspberry Pi; algunas etiquetas no son coherentes con la tabla de pines J30 de la hoja de datos (por ejemplo, los iconos de los pines 3/5 muestran I2C5 mientras que la hoja de datos indica I2C4, abreviaturas de I2S, etc.). La nomenclatura oficial sigue la tabla de pines de la hoja de datos (los pines 3/5 corresponden a las posiciones de bola del módulo E60/D61 = I2C4_DAT/CLK).
:::

### Operación de GPIO

Usa las herramientas libgpiod para operar los GPIO (primero consulta los números de chip y línea con `gpioinfo`):

```bash
gpioinfo
sudo gpioset --mode=wait <gpiochipX> <line>=1   # set output high
sudo gpioget <gpiochipX> <line>                 # read input
```

### Prueba de bucle de retorno SPI

**Paso 1.** Carga el módulo spidev: `sudo modprobe spidev`

**Paso 2.** Comprueba los nodos de dispositivo: `ls /dev/spidev*`

**Paso 3.** Obtén y compila el código de prueba:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Paso 4.** Puentea MOSI y MISO del SPI seleccionado (bucle de retorno) y ejecuta la prueba (el SPI1 de 40 pines suele ser `/dev/spidev0.0`; consulta el nodo real con `ls /dev/spidev*`):

```bash
sudo ./spidev_test -v -D /dev/spidev0.0 -s 100000
```

**Paso 5.** La prueba de bucle de retorno es satisfactoria si los datos TX y RX son coherentes.

### Prueba de UART

El UART1 de la cabecera de 40 pines (pines 8/10/11/36) se puede conectar a un adaptador USB-a-serie y probar usando CuteCom:

```bash
sudo apt-get install cutecom
sudo cutecom
```

Parámetros del puerto serie: dispositivo `/dev/ttyTHS1` (UART1 de 40 pines, consulta el nodo real), velocidad en baudios 115200, 8N1, sin control de flujo.

### Comunicación CAN

La cabecera de 40 pines proporciona CAN0 (pines 29/31) y CAN1 (pines 33/37). Estos 4 pines son señales del controlador CAN de **nivel TTL de 3,3 V** conectadas directamente al módulo AGX Orin (CANx_DOUT = TX del controlador, CANx_DIN = RX del controlador). **No hay un transceptor CAN integrado en la placa portadora**, y no hay CAN_H/CAN_L cableables directamente en la cabecera; se requiere un transceptor CAN externo de 3,3 V (por ejemplo, SN65HVD230 / TCAN332, siendo el SN65HVD230 el recomendado oficialmente por NVIDIA) antes de realizar la conexión en red.

La prueba de bucle de retorno requiere 2 transceptores: en el lado TTL, conecta el transceptor TXD→CANx_DOUT, RXD←CANx_DIN, VCC→3,3 V (pines 1/17), GND→tierra; cruza el cableado en el lado del bus (CAN0_H↔CAN1_H, CAN0_L↔CAN1_L, con resistencias de terminación de 120 Ω en ambos extremos del bus), y entonces se puede realizar la prueba de bucle de retorno:

:::note
Confirmado (basado en la tabla de pines de 40 pines de la hoja de datos): los pines CAN de J30 son señales de conexión directa desde las posiciones de bola del módulo (CAN0_DIN=F58, CAN0_DOUT=D59, CAN1_DOUT=H61, CAN1_DIN=B61); en ningún lugar de la hoja de datos se marca un transceptor integrado, lo cual es coherente con la definición de 40 pines del NVIDIA AGX Orin DevKit; la documentación oficial de NVIDIA exige explícitamente un transceptor CAN externo de ≥3,3 V.
:::

#### Modo CAN clásico

```bash
# Configure and bring up the interfaces (Classic CAN, 1 Mbps example)
sudo ip link set can0 down
sudo ip link set can1 down
sudo ip link set can0 type can bitrate 1000000
sudo ip link set can1 type can bitrate 1000000
sudo ip link set can0 up
sudo ip link set can1 up

# One terminal receives, the other sends
candump can1 &
cangen can0 -g 10
```

#### Modo CAN-FD

```bash
sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 fd on berr-reporting on restart-ms 100
sudo ip link set can0 up
```

## Conector de cámara

El Classic J501 saca CSI0–CSI7 (8 puertos MIPI CSI de 2 líneas) a través de un conector BTB de 120 pines (J509, ver vista inferior de la "Descripción general del hardware", etiqueta 6), y proporciona I2C de cámara, reloj maestro (MCLK), Powerdown/Reset, sincronización de fotogramas (FRSYNC) y alimentación de cámara de 2,8 V/1,8 V/3,3 V, adecuado para soluciones de percepción multicámara sincronizada.

### Conexión de hardware

Esta interfaz es de tipo BTB (placa a placa) y requiere una placa adaptadora de cámara/cable FPC de Seeed o de desarrollo propio.

### Instrucciones de uso

**Paso 1.** Comprueba los nodos de dispositivo: `ls /dev/video*`

**Paso 2.** Previsualiza usando GStreamer (ejemplo):

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
video/x-raw,width=1920,height=1080,framerate=30/1 ! \
videoconvert ! xvimagesink
```

## Interfaz de audio

Conector de panel de audio de 10 pines (J511, ver vista inferior de la "Descripción general del hardware", etiqueta 5): entradas de micrófono duales (IN1P/IN2P), salida de auriculares estéreo (HPO_L/HPO_R), detección de conector/presencia.

Después de conectar la placa de panel de audio, puedes seleccionar los dispositivos de entrada/salida correspondientes en la configuración de sonido de Ubuntu para realizar pruebas de grabación y reproducción:

```bash
arecord -l   # list capture devices
aplay -l     # list playback devices
arecord -d 5 test.wav && aplay test.wav
```

## Pantalla (DP)

El Classic J501 está equipado con 1 interfaz DisplayPort. Puedes conectar una pantalla directamente con un cable DP, o usar el **cable DP→HDMI** incluido para conectar una pantalla HDMI, admitiendo salida de renderizado de escritorio y de vídeo de flujo múltiple.

## Ranura de expansión PCIe

La ranura PCIe integrada (J6, ver Vista lateral 2 de la "Descripción general del hardware", etiqueta 1) tiene físicamente un factor de forma x16 y eléctricamente **x8** (bloque UPHY 1 Línea 0–7, controlador PCIe n.º 5), y cuenta con alimentación de 12 V/3,3 V y señales de control completas (PERST#/CLKREQ#/WAKE#/detección de presencia), y puede utilizarse para ampliar tarjetas de red, tarjetas de captura, tarjetas adaptadoras NVMe y más.

```bash
sudo lspci            # check whether the PCIe device is detected
sudo lspci -vvv -s <BDF>
```

## RTC

El Classic J501 mantiene la medición del tiempo durante los cortes de alimentación conectando una batería de respaldo externa a través del conector RTC de 2 pines (J13, PMIC_BBATT, ver vista inferior de la "Descripción general del hardware", etiqueta 2).

**Paso 1.** Conecta la batería RTC (presta atención a la polaridad).

**Paso 2.** Enciende el dispositivo, ve a `Settings > Date & Time`, conéctate a una red y selecciona **Automatic Date & Time** (o configúralo manualmente).

:::note
Si no te has conectado a Internet, puedes configurar manualmente la fecha y la hora aquí.
:::

**Paso 3.** Abre una ventana de terminal y ejecuta el siguiente comando para comprobar la hora del reloj de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Paso 4.** Desconecta la conexión de red y reinicia el dispositivo para verificar la retención de la hora.

## Encabezado de automatización (Encendido automático / Control de encendido remoto)

El encabezado de automatización J42 (consulta la vista inferior de la "Descripción general del hardware", etiqueta 1) proporciona señales que incluyen FORCE_RECOVERY_N (pin 2), SYS_RESET_N (pin 3), la señal del botón de encendido (pin 4), salida del controlador PD/ACOK (pines 5/6), MODULE_SLEEP_N (pin 7), indicación de sobrecorriente SYSTEM_OC_N (pin 8) y Wake on LAN (pin 9, GPIO38).

:::note
**Cortocircuita los pines 5 y 6** para habilitar el encendido automático, adecuado para dispositivos desatendidos.
:::

## Recursos

- [Página de producto de reComputer Classic J5011 (32GB)](https://www.seeedstudio.com/reComputer-Classic-J5011-p-6880.html)
- [Página de producto de reComputer Classic J5012 (64GB)](https://www.seeedstudio.com/reComputer-Classic-J5012-p-6881.html)
- [Hoja de datos de reComputer Classic J501 (Descarga PDF)](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_j501_datasheet.pdf)
- [Hoja de datos del módulo NVIDIA Jetson AGX Orin (Descarga PDF)](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/AGX_P3737_A05_V1_20260605.pdf)
- [Modelo 3D de reComputer Classic J501 (Descarga STP)](https://files.seeedstudio.com/wiki/reComputer-Jetson/Classic_J501/reComputer_classic_J501.stp)
- [Catálogo de productos NVIDIA Jetson de Seeed](https://www.seeedstudio.com/nvidia.html)
- [Código fuente del L4T (Linux_for_Tegra) de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Documentación de NVIDIA Jetson AGX Orin](https://developer.nvidia.com/embedded/jetson-agx-orin)

## Soporte técnico y debate sobre el producto

¡Gracias por elegir nuestros productos! Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
