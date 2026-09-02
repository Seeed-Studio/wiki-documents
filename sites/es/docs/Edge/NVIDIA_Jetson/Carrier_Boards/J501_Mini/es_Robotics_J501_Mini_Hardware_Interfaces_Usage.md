---
description: Este wiki proporciona una introducción completa a las características de hardware y al uso de las interfaces de la placa carrier Jetson Mini J501. Diseñada para escenarios de IA en el borde y robótica, cubre especificaciones detalladas, módulos compatibles, instrucciones de configuración y guías prácticas para usar interfaces como M.2, Ethernet, USB, CAN, UART, DI/DO, I2S y expansión de cámara GMSL2.
title: Mini J501 Flashear JetPack y Uso de Interfaces
tags:
  - Placa carrier Mini J501
  - Flashear JetPack
  - Robótica
  - Uso de interfaces
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg
slug: /recomputer_j501_mini_getting_started
sku: 100020039
last_update:
  date: 07/09/2026
  author: Dayu
createdAt: '2025-11-25'
updatedAt: '2026-08-17'
url: https://wiki.seeedstudio.com/es/recomputer_j501_mini_getting_started/
---
# Hardware de la placa carrier Mini J501 e Introducción

La Mini J501 es una placa carrier compacta y de alto rendimiento para IA en el borde, destinada a módulos NVIDIA Jetson AGX Orin (32GB/64GB). Ofrece hasta 275 TOPS de rendimiento de IA en modo MAXN y proporciona amplias opciones de conectividad, incluyendo puertos Ethernet Gigabit dobles, ranuras M.2 para módulos 5G y Wi‑Fi/Bluetooth, 2 puertos USB 3.2, CAN, GMSL2 mediante expansión opcional, I2C y UART. Con JetPack 6.2.1 y Linux BSP preinstalados, admite un despliegue rápido para aplicaciones de IA en el borde.

La Mini J501 también puede utilizarse en escenarios de robótica. Con compatibilidad para frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch y ROS 2/1, puede conectar la toma de decisiones basada en modelos con el control físico de la robótica, incluyendo planificación de movimiento, fusión de sensores y percepción multicámara.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-100020039-reComputer-Mini-J501---Carrier-Board-for-Jetson-AGX-Orin.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J501-Carrier-Board-with-GMSL-Bundle-for-Jetson-AGX-Orintm.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱</font></span></strong>
    </a>
</div>

## Descripción general de la placa carrier reComputer Jetson Mini J501

| **Vista superior** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png) |
| **Vista lateral** |
| ![fig2](https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png) |
| **Vista inferior** |
| ![fig3](https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png) |

## 📝 Lista de componentes

- Placa carrier Mini J501 x 1
- Fuente de alimentación y placa de expansión JST x 1
- Cable XT30 a DC x 1
- Cable USB, Tipo A a Tipo C x 1
- Disipador para placa de expansión x 1
- Espárrago (M3*30) x 5
- Tuerca hexagonal M3 x 5
- Tornillo (CM2.5*L.4) para módulo Jetson y M.2 Key M x3
- Tornillo (CM2*3.0) para M.2 Key E x1
- Espárrago (M2*2.0) para M.2 Key B x1
- Tornillo (CM3*4.0) para M.2 Key B x1
- Manual de usuario x 1

:::note
1. Diseñe una solución de disipación de calor robusta de acuerdo con la Guía de Diseño Térmico cuando utilice una fuente de alimentación de alto voltaje y a temperatura de funcionamiento elevada.
2. Coloque un disipador en el módulo para obtener un mejor rendimiento.
3. Durante el funcionamiento con entrada de alto voltaje y alta carga, no toque el disipador para evitar quemaduras.
4. Recomendación de adaptador de corriente para validación: utilice el adaptador de corriente recomendado en el sitio web oficial de Seeed.

- Adaptador de corriente con conector cilíndrico 5525 de 19V/4.74A
- Asegúrese de que se cumplan los requisitos de consumo máximo de energía.
2. Compatibilidad del cable de alimentación de CA
- Compre cables de alimentación de CA tipo trébol específicos de la región según su ubicación.
3. Compatibilidad de accesorios
- Utilice solo accesorios recomendados oficialmente (por ejemplo, módulos inalámbricos, cámaras, periféricos) para un rendimiento y compatibilidad óptimos.

:::

## 🔍 Especificación

### Especificaciones de la placa carrier

<table border="1" cellPadding="8" cellSpacing="0">
  <thead>
    <tr>
      <th>Categoría</th>
      <th>Elemento</th>
      <th>Detalles</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowSpan="1">Almacenamiento</th>
      <td>M.2 KEY M PCIe</td>
      <td>1x M.2 KEY M PCIe (SSD M.2 NVMe 2280)</td>
    </tr>
    <tr>
      <th rowSpan="2">Red</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>1x RJ45 10GbE && 1x RJ45 1GbE</td>
    </tr>
    <tr>
      <th rowSpan="13">E/S</th>
      <td>USB</td>
      <td>2x USB 3.2 Tipo A (10Gbps);<br />1x USB 2.0 Tipo C (Depuración);<br />1x USB 3.0 Tipo C (Recuperación/Depuración)</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td>2x Conector Mini-Fakra GMSL2 4 en 1 (Opcional);</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x Conector CAN JST de 4 pines (GH 1.25);</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td>1x Conector DI JST de 6 pines (GH 1.25);<br />1x Conector DO JST de 5 pines (GH 1.25);</td>
    </tr>
      <tr>
      <td>I2S</td>
      <td>1x Conector I2S JST de 6 pines (GH 1.25)</td>
    </tr>
    <tr>
      <td>RS485</td>
      <td>1x Conector RS-485 JST de 4 pines (GH 1.25)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x Conector UART JST de 6 pines (Multiplexado con DO)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1x Conector de ventilador de 4 pines (12V PWM)</td>
    </tr>
    <tr>
      <td>Puerto de expansión</td>
      <td>2x Cabecera de expansión de cámara (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pines;</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>1x LED PWR, Verde;<br />1x LED SSD, Verde;<br />1x LED USR, RGB</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td>1x Botón de recuperación;<br />1x Botón RESET</td>
    </tr>
    <tr>
      <th rowSpan="1">Alimentación</th>
      <td colSpan="2">19-48V XT30 (incluye cable XT30 a conector DC 5525)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versión de Jetpack</th>
      <td colSpan="2">Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecánico</th>
      <td>Dimensiones (An x Pr x Al)</td>
      <td>110mm x 110mm x 38mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>200g</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td>Escritorio, Montaje en pared</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de funcionamiento</th>
      <td colSpan="2">-20℃~60℃ (Modo 25W);<br />-20℃~55℃ (Modo MAXN);<br />(con un disipador compatible con ventilador)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantía</th>
      <td colSpan="2">2 años</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificación</th>
      <td colSpan="2">RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## 📦 Flashear el SO JetPack

### Módulo compatible

- [Módulo NVIDIA® Jetson AGX Orin™ 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [Módulo NVIDIA® Jetson AGX Orin™ 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Requisitos previos

- PC host con Ubuntu
- Placa carrier Mini J501
- Módulo NVIDIA® Jetson AGX Orin
- Ventilador activo para módulo Nano/NX
- SSD interno NVMe M.2 2280
- Cable de transmisión de datos USB Tipo C

:::info

Recomendamos que utilice dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulte la tabla siguiente para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="4"> Versión de Ubuntu (Ordenador host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
    </tr>
    <tr>
        <td >JetPack 7.2</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

<p><strong>Nota:</strong> Para JetPack 7.2, Ubuntu 24.04 solo es compatible para el flasheo y la instalación de componentes en el dispositivo de destino. Utilice Ubuntu 20.04 o 22.04 si necesita componentes de desarrollo en el host.</p>

:::

### Preparar la imagen de Jetpack

Aquí necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Enlace de descarga1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>7.2</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBraqxVv-rUQKkcwG2EXybtAUKJgIvgi77ze4eig_Hj3Ns">Download</a></td>
      <td>1cd0d7004f426a524a55761bf01dd22280829b9834cbd11d4094b29865f46fe9</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBj3DRU7fhETozDjV3BAOG2Ac69rCRZhqNqr_RXuCliXXM">Download</a></td>
      <td>c369b02c979a8d0e1bd926725e94eba19be0e1b6a1a145e03a1179e77b72c5fd</td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAUQ4ithrVMQLSE274ftNcLAdScXb2OFE8LXfabvKzaGS8">Download</a></td>
      <td>53859b314aba332c417c7295d9f6b6711bc7d8c4352dad55aa917af80757330c</td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBvVrfoK43HRL2Y3PDLtz8wAUzka-auuvvWTx0J4QCrtwc">Download</a></td>
      <td>16408ec8d3b8b0e01eb7edd81b0367357f7dddfdee09388da4c74591d31f917a</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Los archivos de imagen de JetPack son grandes y pueden tardar alrededor de 60 minutos en descargarse. Espere a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puede comparar el valor hash SHA256.

En una máquina host con Ubuntu, abra la terminal y ejecute el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargó está completo e intacto.
:::

⚙️ **Todos los archivos `.dts` y demás código fuente para las placas carrier Jetson de SEEED se pueden descargar desde** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)


### Entrar en modo de recuperación forzada

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<details>

<summary> Paso a paso </summary>

**Paso 1.** Mantenga presionado el botón **REC**.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/reset.png" />
</div>

**Paso 2.** Enciende la placa carrier conectando el cable de alimentación y luego suelta el botón **REC**.

**Paso 3.** Conecta la placa al PC host con Ubuntu mediante un cable USB Type-C de transmisión de datos.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/flash-port.png" />
</div>

**Paso 4.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

La siguiente imagen es para AGX Orin 32GB: 

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For JetPack 7.2 example: sudo tar xpf mfi_recomputer-mini-agx-orin-j501x-32g-7.2.0-39.2.0-2026-06-25.tar.gz
# For JetPack 6.2.1 example: sudo tar xpf mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema JetPack en el SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-mini-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede tardar entre 2 y 10 minutos.
:::

**Paso 3:** Conecta la Mini J501 a una pantalla usando el adaptador PD a HDMI, o conéctala directamente a una pantalla que admita entrada PD usando el cable PD, y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **Configuración del sistema** según tus necesidades.
:::

## 🔌 Uso de interfaces

Las siguientes secciones presentan las diversas interfaces de la placa Mini J501 y cómo utilizarlas.

## M.2 Key M

M.2 Key M está diseñado para SSD NVMe de alta velocidad, proporcionando transferencia de datos ultrarrápida para aplicaciones de robótica.

### Los SSD compatibles son los siguientes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Conexión de hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-real.png"/>
</div>

### Instrucciones de uso

Antes de probar la velocidad de lectura/escritura del SSD, debes introducir lo siguiente en la terminal de Jetson:

```bash
sudo apt update
sudo apt install smartmontools
sudo smartctl -i /dev/nvme0n1
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t.png"/>
</div>


Crea un archivo de script para probar la velocidad de lectura/escritura del SSD:


```bash
#You need to create a blank test file first
cat <<'EOF' | sudo tee test_nvme.sh >/dev/null
#!/usr/bin/env bash
set -e

sudo dd if=/dev/zero of=test bs=1000M count=1 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=test of=/dev/null bs=1000M count=1
sudo rm -rf test
EOF
```

Ejecuta el script para probar la velocidad de lectura/escritura del SSD:
```bash
sudo chmod +x test_nvme.sh
./test_nvme
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>



## M.2 Key E

La interfaz M.2 Key E es un conector M.2 estándar utilizado principalmente para conectar módulos inalámbricos, como Wi‑Fi y Bluetooth, para ampliar las capacidades de comunicación inalámbrica.

### Conexión de hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/KEY-E.png"/>
</div>

### Instrucciones de uso

Para probar el rendimiento de Wi‑Fi, utiliza el siguiente comando (reemplaza la dirección IP con la de tu servidor de pruebas):

```bash
iperf3 -c 192.168.6.191
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/wifi_speed.png"/>
</div>

La funcionalidad Bluetooth está disponible a través de la ranura M.2 Key E.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/bluetooth.png"/>
</div>

## Ethernet

La placa carrier Mini J501 incluye un puerto Ethernet RJ45 de 1Gbps y otro de 10Gbps para conectividad de red cableada de alta velocidad.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-real.png"/>
</div>

Para probar la velocidad del puerto Ethernet, utiliza `iperf3` de la siguiente manera:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` es la dirección IP del servidor iperf3. El cliente se conectará a este servidor para realizar una prueba de ancho de banda.
`<bind_ip>` vincula la dirección IP local especificada como origen del tráfico de prueba.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/ethernet-speed.png"/>
</div>

## LED

La Mini J501 tiene dos LED que se pueden controlar. A continuación se muestra cómo controlar los LED para que sean **verdes**, **rojos** o **azules**.

<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div> -->

### Instrucciones de uso

Los comandos de referencia para controlar los LED son los siguientes:

```bash
#change to red
echo 1 | sudo tee /sys/class/leds/on-board:red/brightness
echo 0 | sudo tee /sys/class/leds/on-board:red/brightness
#change to green
echo 1 | sudo tee /sys/class/leds/on-board:green/brightness
echo 0 | sudo tee /sys/class/leds/on-board:green/brightness

#change to blue
echo 1 | sudo tee /sys/class/leds/on-board:blue/brightness
echo 0 | sudo tee /sys/class/leds/on-board:blue/brightness

```

El efecto de control de los LED se muestra en la siguiente figura:

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-rg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-gg.jpg"/>
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/led-bg.jpg"/>
</div>

## USB

La placa carrier Mini J501 está equipada con una variedad de puertos USB, incluidos 2 puertos USB 3.2 Type‑A (10Gbps), un puerto USB 3.0 Type‑C y un puerto USB 2.0 Type‑C para modo dispositivo/depuración, ofreciendo opciones de conectividad versátiles.

### Prueba de velocidad USB‑A

Crea un script para probar la velocidad del dispositivo USB:

```bash
sudo vim test_usb
```

Pega el siguiente contenido:

```bash
cat <<'EOF' | sudo tee test_usb.sh >/dev/null
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
EOF
```

Haz que el script sea ejecutable y pruébalo: 

```bash
sudo chmod +x test_usb
./test_usb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/usba-test.png"/>
</div>



### Puerto USB 2.0 Type‑C

Usando este puerto serie, a través del cable de datos USB‑C, puedes monitorizar en el PC la información de depuración de entrada y salida.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/debug-port-real.png"/>
</div>


En tu PC (no en el Jetson), instala una herramienta de inicio de sesión por puerto serie e inicia sesión en `/dev/ttyUSB0` (también podría ser `ttyUSB1`, 2):

```bash
sudo apt update
sudo apt install screen
screen /dev/ttyUSB0 115200
```

A continuación, puedes controlar la terminal del Jetson a través del puerto serie en otro host Linux, como se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/login-usb.png"/>
</div>


## Ventilador

El reComputer Jetson Mini J501 está equipado con:

- 1x conector de ventilador de 4 pines (12V PWM): Compatible con ventiladores PWM estándar de 12V, también admite control de velocidad preciso, lo que lo hace ideal para requisitos de refrigeración de alto rendimiento.

### Conexión de hardware

La Mini J501 proporciona un header estándar de 4 pines para el ventilador.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan0.png"/>
</div>

El esquema de la hoja de datos del **ventilador** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan1.png"/>
</div>

Las definiciones de pines para **J1** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/fan2.png"/>
</div>

:::note
Para más información, consulta [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

### Instrucciones de uso

**Crea un script para establecer la velocidad del ventilador:**

```bash
cat test_fanSpeedSet
```

Pega el siguiente contenido:

```bash
#!/bin/bash
sudo systemctl stop nvfancontrol
sleep 2
echo "000000" | sudo -S chmod 777 /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
echo $1 > /sys/devices/platform/pwm-fan/hwmon/hwmon1/pwm1
```


Además, podemos establecer manualmente la velocidad del ventilador usando la herramienta `jtop`.


## CAN

CAN (Controller Area Network) es un estándar robusto de bus para vehículos que permite que microcontroladores y dispositivos se comuniquen entre sí sin un ordenador host.

El Mini J501 proporciona dos interfaces CAN integradas en el conector JST de 4 pines (GH1.25). Además, ambas interfaces CAN **son compatibles con CAN-FD**, con CAN0 y CAN1 como se muestra a continuación:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-real.png"/>
</div>

Las definiciones de pines para **CAN0** y **CAN1** son similares, y el diagrama de la interfaz se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-jst.png"/>
</div>

**CAN0** corresponde a **J6**, y las definiciones de pines son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can0-ds.png"/>
</div>

**CAN1** corresponde a **J7**, y las definiciones de pines son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can1-ds.png"/>
</div>

### Comunicación CAN
En esta sección se conectan CAN0 y CAN1 en el Jetson para demostrar cómo enviar y recibir datos entre CAN0 y CAN1 en `Classic CAN mode` y `CAN-FD mode`.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/CAN-connect.png"/>
</div>

Las resistencias de terminación para CAN0 y CAN1 se pueden controlar mediante dos pines: PAA.04, ubicado en gpiochip1 línea 4, y PAA.07, ubicado en gpiochip1 línea 7.  

El control de la resistencia de terminación sigue estas reglas:  
```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

Introduce el siguiente comando para ver los pines en gpiochip 1:
```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>


Consulta los siguientes comandos para establecer `PAA.04` y `PAA.07` en 0:
```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

Consulta los siguientes comandos para establecer `PAA.04` y `PAA.07` en 1:
```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```



#### Modo Classic CAN

Crea `test_can.sh` para probar la transmisión y recepción de datos entre **CAN0** y **CAN1** en modo estándar:

```bash
touch test_can.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
El código del script para `test_can.sh` es el siguiente:

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash

echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S ip link set can1 down

# set buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288

 #set to 2M bps
echo "000000" | sudo -S ip link set can0 type can bitrate 2000000
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 type can bitrate 2000000
echo "000000" | sudo -S ip link set can1 up

sleep 2

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

cangen can1 &
candump can0
```

</details>

Se completará la transmisión y recepción de datos entre **CAN0** y **CAN1**:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can_normal.jpg"/>
</div>


#### Modo CAN-FD

En la [datasheet](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf), puedes encontrar el diagrama de cableado para la interfaz **CAN0/CAN1** como se muestra a continuación:


<!-- <div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div> -->

<!-- Here we will demonstrate to you how to conduct data communication using the CAN1 interface, by utilizing the [USB to CAN Analyzer Adapter](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html). -->

Crea `test_canfd.sh` para probar la transmisión y recepción de datos entre CAN0 y CAN1 en modo CAN-FD:

```bash
touch test_canfd.sh
chmod +x test_can.sh
sudo ./tets_can.sh
```
El código del script para `test_canfdfd.sh` es el siguiente:

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash

# configure CAN FD mode
#CAN bus rate set to 500 kbps, data rate set to 5 Mbps.
echo "000000" | sudo -S ip link set can0 down
echo "000000" | sudo -S sudo ip link set can0 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can0 up

echo "000000" | sudo -S ip link set can1 down
echo "000000" | sudo -S sudo ip link set can1 type can bitrate 500000 dbitrate 5000000 berr-reporting on fd on restart-ms 100
echo "000000" | sudo -S ip link set can1 up


# config buffer size
echo "000000" | sudo -S sysctl -w net.core.rmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_max=524288
echo "000000" | sudo -S sysctl -w net.core.rmem_default=524288
echo "000000" | sudo -S sysctl -w net.core.wmem_default=524288


# check CAN FD status
echo "CAN0 status:"
ip -details link show can0

echo "CAN1 status:"
ip -details link show can1

#Enable 5s to test
sudo pkill -f gpioset
gpioset --mode=time --sec=200000 gpiochip1 7=0 &
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip1 4=0 &
GPIO2_PID=$!

candump can0 &
cangen can1 -f

```

</details>

Se completará la transmisión y recepción de datos entre CAN0 y CAN1:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/can-fd.jpg"/>
</div>


## GPI && GPO

### GPI

El Mini J501 proporciona un conector JST estándar de 6 pines para GPI.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-real.png"/>
</div>

El esquema del datasheet de **GPI** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-jst.png"/>
</div>

Las definiciones de pines para **J12** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPI-ds.png"/>
</div>


Habilita **GPI 1** a **GPI 4** para leer el estado de entrada:
```bash
sudo gpioset --mode=wait 0 131=0
```


Para leer la entrada de **GPI 1** a **GPI 4**, consulta los siguientes comandos:
```bash
sudo gpioget 0 96  #read the input of GPI 1
sudo gpioget 0 104 #read the input of GPI 2
sudo gpioget 0 86  #read the input of GPI 3
sudo gpioget 0 83  #read the input of GPI 4
```

Cuando se lee un nivel alto, devolverá 1; cuando se lee un nivel bajo, devolverá 0.

### GPO

El Mini J501 proporciona un conector JST estándar de 6 pines para GPO.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-real.png"/>
</div>


El esquema del datasheet de **GPO** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

Las definiciones de pines para **J14** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>

Habilita **GPO 1** a **GPO 4** para el estado de salida:
```bash
sudo gpioset --mode=wait 0 79=1
```


Para configurar la salida de **GPO 1** a **GPO 4**, consulta los siguientes comandos:

```bash
sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to high voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to high voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to high voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to high voltag


sudo gpioset --mode=wait 0 110=1  #set output of GPO 1 to low voltag
sudo gpioset --mode=wait 0 112=1  #set output of GPO 2 to low voltag
sudo gpioset --mode=wait 0 111=1  #set output of GPO 3 to low voltag
sudo gpioset --mode=wait 0 113=1  #set output of GPO 4 to low voltag
```


## UART

El Mini J501 proporciona un conector JST estándar de 6 pines para la comunicación serie UART.
UART y GPO utilizan la misma interfaz JST. Esta interfaz tiene por defecto la funcionalidad de GPO. **Si necesitas cambiar a la funcionalidad UART, debes apuntar a un nuevo device tree y reiniciar el dispositivo para que el cambio surta efecto.**


Para la comunicación **UART**, sigue el siguiente cableado. Aquí utilizamos como ejemplo la herramienta USB a TTL.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-real.png"/>
</div>

El esquema del datasheet de **UART** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-jst.png"/>
</div>

Las definiciones de pines para **J14** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/GPO-ds.png"/>
</div>



:::warning
UART y GPO comparten la misma interfaz física. De forma predeterminada, esta interfaz funciona como GPO. Si necesitas cambiar a UART, consulta el contenido de esta sección.
:::

Para diferentes módulos, necesitas descargar el archivo de device tree correspondiente.

Enlace de descarga `.dtb` para AGX Orin 32G:  
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb)  

Enlace de descarga `.dtb` para AGX Orin 64G:  
[https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb](https://files.seeedstudio.com/wiki/recomputer-j501-mini/tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb)  

Copia el device tree a la ruta especificada:
```bash
# AGX Orin 32G
sudo cp tegra234-j501x-0000%2Bp3701-0004-recomputer-mini.dtb /boot/

# AGX Orin 64G
sudo cp tegra234-j501x-0000%2Bp3701-0005-recomputer-mini.dtb /boot/
```

Haz una copia de seguridad y modifica `/boot/extlinux/extlinux.conf`, añadiendo una línea que apunte al nuevo archivo `.dtb`:

```bash
sudo cp /boot/extlinux/extlinux.conf /boot/extlinux/extlinux.conf.bak
sudo vim /boot/extlinux/extlinux.conf
```

Según el nombre del archivo del device tree que estés usando, añade una línea `FDT=/your_path` en `extlinux.conf`. Tomando AGX Orin 32G como ejemplo:

```python
LABEL primary
      MENU LABEL primary kernel
      LINUX /boot/Image
      INITRD /boot/initrd
      FDT=/boot/tegra234-j501x-0000+p3701-0004-recomputer-mini.dtb
```
<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/uart-edit.png"/>
</div>


El conector JST de 6 pines **UART** está mapeado a `/dev/ttyTHS1` en la Jetson. Puedes usar `minicom` para ver la transmisión y recepción de datos del puerto serie:

```bash
sudo apt install minicom
sudo minicom -D /dev/ttyTHS1
```


## RS485

La interfaz RS485 proporciona un canal de comunicación diferencial robusto y resistente al ruido, comúnmente utilizado en entornos industriales. Admite comunicación serie multidrop a larga distancia y es ideal para conectar sensores, controladores de motor, PLC y otros dispositivos industriales. 

### Conexión de hardware

La Mini J501 proporciona un conector JST de 4 pines (GH 1.25) para RS485.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-real.png"/>
</div>

El esquema del datasheet de **RS485** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-jst.png"/>
</div>

Las definiciones de pines para **J8** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485-ds.png"/>
</div>



### Instrucciones de uso
Consulta los siguientes comandos para habilitar la interfaz **RS485**:

```bash
sudo gpioset --mode=wait 1 9=0  # Enable 120R resistance

sudo gpioset --mode=wait 0 126=0 # Enable RS485
```


La interfaz **RS485** está mapeada a `/dev/ttyTHS4` en la Jetson. Puedes usar `cutecom` para probar la transmisión y recepción de datos serie con un PC:

```bash
sudo apt install cutecom
sudo cutecom
```

Selecciona `/dev/ttyTHS4`, configura tanto la Jetson como el PC a una velocidad en baudios de 9600 y conecta la Jetson y el PC mediante un módulo de RS485 a USB.
El efecto de la transmisión y recepción de datos serie se muestra en la figura siguiente:

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_jetson.png" alt="Jetson side" height={200} />
  <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/485_PC.png" alt="PC side" height={200} />
</div>

## I2S

La interfaz I2S proporciona un bus de comunicación de audio digital diseñado para transmitir datos de audio estéreo entre dispositivos. La Mini J501 admite señalización I2S estándar, lo que permite entrada y salida de audio de alta calidad y baja latencia para aplicaciones como interacción por voz, localización de sonido y procesamiento de audio en tiempo real.

### Conexión de hardware
La Mini J501 proporciona 1 conector JST de 5 pines (GH 1.25) para **I2S**.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/I2S-real.png"/>
</div>


El esquema del datasheet de **I2S** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-jst.png"/>
</div>


Las definiciones de pines para **J9** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-ds.png"/>
</div>


### Instrucciones de uso

Para habilitar **I2S**, necesitas configurarlo en `jetson-io.py`. Ejecuta lo siguiente en la terminal:

```bash
sudo python /opt/nvidia/jetson-io/jetson-io.py
```

A continuación, consulta los cuatro pasos siguientes para habilitar la interfaz I2S:

- paso 1: Selecciona la opción **Jetson 40-pin header**  
- paso 2: Selecciona **Configure header pins manually**  
- paso 3: Selecciona `i2s2`; después de la selección, se marcará con `[*]`  
- paso 4: Guarda la configuración y reinicia la Jetson  

<div style={{ 
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: '10px', 
  justifyContent: 'center', 
  alignItems: 'center' 
}}>

  <!-- Step 1 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 1</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/1-i2s.png" 
         alt="Step 1" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 3 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 3</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/3-i2s.png" 
         alt="Step 3" 
         height={300} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 2 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 2</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/2-i2s.png" 
         alt="Step 2" 
         height={500} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

  <!-- Step 4 -->
  <div style={{ position: 'relative' }}>
    <div style={{
      position: 'absolute',
      top: '5px',
      left: '5px',
      padding: '2px 6px',
      background: 'rgba(0,0,0,0.6)',
      color: 'white',
      borderRadius: '4px',
      fontSize: '12px'
    }}>Step 4</div>
    <img src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/4-i2s.png" 
         alt="Step 4" 
         height={460} 
         style={{ width: '100%', objectFit: 'contain' }}
    />
  </div>

</div>


Después de habilitar **I2S**, esta sección muestra cómo usar I2S para controlar un altavoz de doble canal. Primero, introduce lo siguiente en la terminal:

```bash
amixer -c APE cset name="I2S2 Mux" "ADMAIF1" # Speaker
```

Si estás usando un micrófono:
```bash
amixer -c APE cset name="ADMAIF2 Mux" "I2S2" # Microphone
```

Consulta el siguiente comando para controlar el altavoz, donde `-c` debe cambiarse al número de canales de altavoz que estés usando:

```bash
speaker-test -t sine -f 440 -c 2
```

Puedes ver la salida en la terminal cuando el altavoz se controla con normalidad, como se muestra en la figura siguiente.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/i2s-speaker.png"/>
</div>

## RTC


La Mini J501 proporciona un conector estándar de 2 pines para **RTC** (3V).

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc0.png"/>
</div>

El esquema del datasheet de **RTC** se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc1.png"/>
</div>

Las definiciones de pines para **J15** son las siguientes:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/rtc2.png"/>
</div>



Después de conectar la batería externa, puedes comprobar el estado de funcionamiento de `rtc0` (RTC principal, correspondiente a la batería integrada) en la terminal:

```bash
cat /sys/class/rtc/rtc0/power/runtime_status
```


## Puerto de expansión - GMSL

La placa carrier Mini J501 incluye un conector de expansión de cámara para la placa de expansión GMSL. Puede conectar y operar simultáneamente cuatro cámaras GMSL al mismo tiempo.

### Conexión de hardware

A continuación se muestran las ranuras de conexión de la placa de expansión de cámara GMSL de la placa carrier Mini J501 (debes preparar una placa de expansión con antelación):

<div align="center">
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real1.png"/>
  <img width="450" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-real2.png"/>
</div>

A continuación se muestran los modelos de cámara GMSL que ya hemos soportado:

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A

### Instrucciones de uso

:::note
Antes de habilitar la funcionalidad GMSL, asegúrate de haber instalado una versión de JetPack con el controlador de la placa de expansión GMSL.
:::

### Configurar el archivo Jetson IO

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p2.png"/>
</div>

:::note
Hay tres archivos overlay en total, a saber, Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4 y Orbbec Gemini 335Lg. Estos corresponden respectivamente a la cámara 3G de SG3S, la cámara 6G de SG2 y SG8S, y la cámara de Orbbec. Como se muestra en la Figura 3, configura el archivo io según el modelo de tu cámara.
:::

**step 2.** Instala las herramientas de configuración de la interfaz de vídeo.

```bash
sudo apt update
sudo apt install v4l-utils
```

<!-- ### Use the camera of Gemini 335Lg

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Al abrir el flujo de datos, puedes ver el vídeo de la cámara.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### Usar las cámaras de la Serie SGxxx

**paso 1.** Configura el formato de canal para el serializador y el deserializador. El número de interfaz en la figura corresponde al número de serializador/deserializador.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gmsl-Interface.png"/>
</div>

```bash
  media-ctl -d /dev/media0 --set-v4l2 '"ser_0_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_1_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_2_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_3_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_0_ch_3":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_4_ch_0":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_0":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_5_ch_1":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_1":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_6_ch_2":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_2":0[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"ser_7_ch_3":1[fmt:YUYV8_1X16/1920x1536]'
  media-ctl -d /dev/media0 --set-v4l2 '"des_1_ch_3":0[fmt:YUYV8_1X16/1920x1536]'

```

:::note
`ser_0_ch_0` es el primer canal del decodificador, `des_ch_0` es el serializador de la primera cámara, y lo mismo se aplica a las demás. Si la cámara conectada tiene una resolución diferente, entonces la configuración aquí se basará en el formato real de la cámara.
Necesitamos configurar el formato de canal para el serializador y el deserializador cada vez que el dispositivo se reinicia.
:::

**paso 2.** Configura la resolución de la cámara.

:::info
Aquí mostramos cómo configurar cámaras de diferentes modelos y resoluciones.
:::

```bash
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video0
v4l2-ctl -V --set-fmt-video=width=1920,height=1080 -c sensor_mode=1  -d /dev/video1
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0  -d /dev/video2
v4l2-ctl -V --set-fmt-video=width=3840,height=2160 -c sensor_mode=2  -d /dev/video3 
```

:::note
`--set-fmt-video` va seguido de la resolución que se selecciona según la cámara conectada. El `sensor_mode` también se elige en consecuencia. Actualmente, hay tres opciones de `sensor_mode`, cada una correspondiente a una resolución diferente.

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**paso 3.** Inicia la cámara.

```bash
gst-launch-1.0 v4l2src device=/dev/video0 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video1 ! \
'video/x-raw,width=1920,height=1080,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video2 ! \
'video/x-raw,width=1920,height=1536,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev

gst-launch-1.0 v4l2src device=/dev/video3 ! \
'video/x-raw,width=3840,height=2160,framerate=30/1,format=UYVY' ! \
videoconvert ! autovideosink -ev
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## Pantalla

El Mini J501 está equipado con un HDMI para salida de pantalla de alta resolución.

## Recursos

- [Esquemático de la placa portadora reComputer Mini J501](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_mini_J501_datasheet.pdf)

<!-- - [reComputer Mini J501 Carrier Board Datasheet]() -->

- [Código fuente de L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
