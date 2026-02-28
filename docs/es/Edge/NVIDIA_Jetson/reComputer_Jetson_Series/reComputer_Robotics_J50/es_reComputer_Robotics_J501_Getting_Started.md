---
description: Este wiki proporciona una introducción completa a las características de hardware y al uso de las interfaces de la carrier board reComputer Jetson Robotics J501. Cubre especificaciones detalladas, módulos compatibles, instrucciones de configuración y guías prácticas para usar varias interfaces como ranuras duales M.2 Key M, Ethernet 10GbE + 4x 1GbE, USB 3.0, cuatro interfaces CAN (2 nativas + 2 SPI-to-CAN), UART, DI/DO, I2S y expansión de cámara GMSL2, ayudando a los usuarios a comenzar rápidamente con el desarrollo de robótica en la plataforma J501.
title: Flash Jetpack && Uso de Interfaces
tags:
  - reComputer Robotics J501
  - Flash Jetpack
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /es/ai_robotics_recomputer_j501_robotics_getting_started
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 12/09/2025
  author: Lorraine
---

# Hardware de Robotics J501 y Guía de Inicio

La reComputer Robotics J501 es una carrier board de IA de borde de alto rendimiento diseñada para aplicaciones avanzadas de robótica e industriales. Compatible con módulos NVIDIA Jetson AGX Orin (32GB/64GB) en modo MAXN, ofrece hasta 275 TOPS de rendimiento de IA.

Equipada con amplias opciones de conectividad —incluyendo 1x 10GbE y 4x 1GbE Ethernet, ranuras duales M.2 Key M para SSD NVMe, ranuras M.2 para módulos 5G y Wi-Fi/BT, múltiples puertos USB 3.0, cuatro interfaces CAN (2 nativas + 2 SPI-to-CAN), expansión de cámara GMSL2 y E/S completas que incluyen DI/DO, I2S, UART y RS485— sirve como un potente cerebro robótico para fusión de múltiples sensores complejos y procesamiento de IA en tiempo real.

Con JetPack 6.2.1 y Linux BSP preinstalados, garantiza un despliegue sin inconvenientes. Al ser compatible con frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch y ROS 2/1, la J501 conecta la toma de decisiones impulsada por modelos de lenguaje grandes con el control físico de la robótica, acelerando el desarrollo de robots autónomos con interfaces listas para usar y frameworks de IA optimizados.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J5012-with-GMSL-extension-board-p-6682.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱</font></span></strong>
    </a>
</div>

## Características Clave  

- **IA de alto rendimiento**: Hasta 275 TOPS con módulos Jetson AGX Orin 32/64GB, GPU Ampere y motores DLA
- **Conectividad rica**: Doble M.2 Key M (NVMe); Key E (WiFi/BT) + Key B (5G); 1x 10GbE + 4x 1GbE; 3x USB 3.0; 2x USB-C
- **Quad CAN-FD**: 2x nativo + 2x interfaces SPI-to-CAN con aislamiento eléctrico
- **Visión GMSL2**: Interfaz GMSL2 única (1x) para conexión de cámara de alta velocidad
- **Diseño industrial**: Entrada DC de 19-48V; funcionamiento de -10~60°C; interfaces aisladas; JetPack 6.2.1 preinstalado
- **Lista para robótica**: Compatibilidad con ROS 2/1, Isaac ROS; DI/DO, I2S, UART, RS485; optimizada para AMR y automatización

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Módulo en Sistema Jetson AGX Orin</th>
    </tr>
    <tr>
      <th style={{width: '25%'}}>Especificaciones</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5011</th>
      <th style={{width: '37.5%'}}>reComputer Robotics J5012</th>
    </tr>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson AGX Orin 32GB</td>
      <td>NVIDIA Jetson AGX Orin 64GB</td>
    </tr>
    <tr>
      <td>Rendimiento de IA</td>
      <td>200 TOPS</td>
      <td>275 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1792 núcleos NVIDIA Ampere @ 930 MHz</td>
      <td>2048 núcleos NVIDIA Ampere @ 1.3 GHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 núcleos Arm Cortex-A78AE @ 2.0 GHz</td>
      <td>12 núcleos Arm Cortex-A78AE @ 2.2 GHz</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>32GB 256-bit LPDDR5 @ 204.8 GB/s</td>
      <td>64GB 256-bit LPDDR5 @ 204.8 GB/s</td>
    </tr>
    <tr>
      <td>Codificador de video</td>
      <td>1x 4K60 / 3x 4K30 / 6x 1080p60 / 12x 1080p30 (H.265)</td>
      <td>2x 4K60 / 6x 4K30 / 8x 1080p60 / 16x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de video</td>
      <td>1x 8K30 / 2x 4K60 / 4x 4K30 / 9x 1080p60 / 18x 1080p30 (H.265)</td>
      <td>1x 8K30 / 3x 4K60 / 7x 4K30 / 11x 1080p60 / 22x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Cámara CSI</td>
      <td colSpan={2}>Hasta 6 cámaras (16 mediante canales virtuales)<br/>16 carriles MIPI CSI-2<br/>D-PHY 2.1 (hasta 40Gbps) / C-PHY 2.0 (hasta 164Gbps)</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colSpan={2}>100mm x 87mm<br/>Conector Molex Mirror Mezz de 699 pines<br/>Placa de transferencia térmica integrada</td>
    </tr>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Carrier Board</th>
    </tr>
    <tr>
      <th>Almacenamiento</th>
      <td colSpan={2}>2x M.2 Key-M (NVMe 2280 SSD)<br/>1x M.2 Key-B (para módulos 4G/5G)</td>
    </tr>
    <tr>
      <th>Red</th>
      <td colSpan={2}>1x M.2 Key-E (WiFi/BT)<br/>1x RJ45 10GbE + 4x RJ45 1GbE</td>
    </tr>
    <tr>
      <th>USB</th>
      <td colSpan={2}>3x USB 3.0 Type-A<br/>1x USB 3.0 Type-C (Recovery)<br/>1x USB 2.0 Type-C (Debug UART)</td>
    </tr>
    <tr>
      <th>DI/DO/CAN</th>
      <td colSpan={2}>1x bloque de terminales 2x10P 3.81mm - 4x DI @12V + 4x DO @40V + 4x CAN (compatible con CAN-FD, eléctricamente aislado)</td>
    </tr>
    <tr>
      <th>GMSL</th>
      <td colSpan={2}>2x conector Mini-Fakra (para 8x cámaras GMSL2) (opcional)</td>
    </tr>
    <tr>
      <th>Serie</th>
      <td colSpan={2}>2x DB9 (RS232/422/485)</td>
    </tr>
    <tr>
      <th>Pantalla</th>
      <td colSpan={2}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <th>Ventilador</th>
      <td colSpan={2}>1×12 V (2.54 mm), 1×5 V (1.25 mm JST)</td>
    </tr>
    <tr>
      <th>Botón</th>
      <td colSpan={2}>1x Recovery + 1x Reset</td>
    </tr>
    <tr>
      <th>LED</th>
      <td colSpan={2}>3x LED (PWR, SSD y LED de usuario)</td>
    </tr>
    <tr>
      <th>RTC</th>
      <td colSpan={2}>1x soporte para batería CR1220, 1x header RTC de 2 pines</td>
    </tr>
    <tr>
      <th>Entrada de alimentación</th>
      <td colSpan={2}>19-48V DC mediante bloque de terminales de 5.08mm (adaptador de alimentación no incluido)</td>
    </tr>
    <tr>
      <th>Consumo de energía</th>
      <td colSpan={2}>Módulo Jetson AGX Orin: Hasta 60W (modo MAXN)<br/>Pico total del sistema: 75W (incluyendo periféricos)</td>
    </tr>
    <tr>
      <th>Software</th>
      <td colSpan={2}>Jetpack 6.2.1</td>
    </tr>
    <tr>
      <th>Mecánico</th>
      <td colSpan={2}>
        Dimensiones: 210mm x 180mm x 87mm (con soportes)<br/>
        Peso: 200g<br/>
        Montaje: Escritorio / Pared / Carril DIN (soporte DIN incluido en los accesorios)<br/>
        Temperatura de funcionamiento: -10℃~60℃ (25W) / -10℃~55℃ (MAXN)
      </td>
    </tr>
    <tr>
      <th>Garantía</th>
      <td colSpan={2}>2 años</td>
    </tr>
    <tr>
      <th>Certificación</th>
      <td colSpan={2}>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>
</div>

**Especificaciones de la placa de extensión GMSL (opcional)**

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>Deserializador</th>
      <td>MAX96712</td>
    </tr>
    <tr>
      <th>Interfaz GMSL</th>
      <td>2x conector Robotics-Fakra macho</td>
    </tr>
    <tr>
      <th>Entrada GMSL</th>
      <td>Hasta 8x cámaras GMSL2</td>
    </tr>
    <tr>
      <th>Método de conexión</th>
      <td>Cable GMSL2 Fakra 1-a-4 M-M</td>
    </tr>
    <tr>
      <th>Función de la interfaz POC</th>
      <td>Admite transmisión simultánea de energía y datos</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_2.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_3.png"/>
</div>

## 📦 Flashear el sistema operativo JetPack

### Módulo compatible

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Robotics J501
- Cable de transmisión de datos USB Type-C

:::info

Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la tabla siguiente para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> JetPack Version </td>
        <td class="dbon" colspan="3"> Ubuntu Version (Host Computer) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 6.x</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Preparar la imagen de Jetpack

Aquí, necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

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
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDPKrVl7UDaTYXmxi1CoTu2AcsHUPKLqNw_olmvlPBODqQ?e=gWuNzv">Download</a></td>
      <td>ed82745decdf554d82bd93441f1f4ad<br/>149f395a4ba5719664ce2351be8201522  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB3JLwYRpS8SqoqjWuXJmmmAW56Nvpdn8YnbYLW7g5_FHM?e=Gqe1XR">Download</a></td>
      <td>58fa8b76754449b0a49ad7d5f273edd<br/>f3e1d1f458cdb34994f6d8643da7a1249 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de Jetpack6 tiene un tamaño aproximado de **14.2GB** y debería tardar alrededor de 60 minutos en descargarse. Por favor, espera pacientemente a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, confirma que el firmware que descargaste está completo e intacto.
:::

⚙️ **Todos los archivos `.dts` y demás código fuente de las carrier boards Jetson de SEEED se pueden descargar desde** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### Entrar en Force Recovery Mode

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en force recovery mode.
:::

<details>

<summary> Paso a paso </summary>

**Paso 1.** Conecta un cable de transmisión de datos USB Type-C entre el puerto USB2.0 DEVICE y el PC host con Ubuntu.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/flash_1.png" />
</div>

**Paso 2.** Usa un pin e insértalo en el orificio RECOVERY para presionar el botón de recuperación y mantenlo presionado.

**Paso 3.** Conecta la fuente de alimentación.

**Paso 4.** Suelta el botón de recuperación.

**Paso 5.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que uses, entonces la placa está en force recovery mode.

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
# For example: sudo tar xpf mfi_recomputer-robo-agx-orin-32g-j501-6.2.1-36.4.4-2026-02-11.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema JetPack en el SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-robo-agx-orin-j501x
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede tardar entre 2 y 10 minutos.
:::

**Paso 3:** Conecta la Robotics J501 a una pantalla usando el adaptador PD a HDMI para conectarla a una pantalla que admita entrada HDMI, o conéctala directamente a una pantalla que admita entrada PD usando el cable PD, y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **System Configuration** según tus necesidades.
:::

## 🔌 Uso de interfaces

A continuación se presentarán las distintas interfaces de la placa Robotics J501 y cómo utilizarlas.

## M.2 Key M

La J501 incluye dos ranuras M.2 Key M que admiten SSD NVMe PCIe Gen4x4 para expansión de almacenamiento de alta velocidad.

### Los SSD compatibles son los siguientes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### Conexión de hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m_1.png"/>
</div>

### Instrucciones de uso

Abre la terminal en el dispositivo Jetson e introduce el siguiente comando para probar la velocidad de lectura y escritura del SSD.

**Paso 1.** Crea el directorio y archivo de prueba:

```bash
mkdir ssd
touch ~/ssd/test
```

**Paso 2.** Prueba el rendimiento de escritura:

```bash
dd if=/dev/zero of=/home/$USER/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m2.png"/>
</div>

**Paso 3.** Comprueba la información del SSD:

```bash
nvme list
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>

:::danger
Ejecuta el comando sudo rm /home/$USER/ssd/test para eliminar los archivos de caché después de completar la prueba.
:::

## M.2 Key E (WiFi/BT)

La ranura M.2 Key E admite módulos Wi‑Fi 6 y Bluetooth 5.x para conectividad inalámbrica.


### Conexión de hardware

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_1.png"/>
</div>

:::tip

**Nota: Antes de usar la interfaz, debes retirar los tornillos de la carcasa e instalar el módulo correspondiente como se muestra en la figura siguiente.**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### Instrucciones de uso

**Prueba de rendimiento:**
Para probar el rendimiento de Wi‑Fi, usa el siguiente comando (sustituye la dirección IP por la de tu servidor de pruebas):

```bash
# On server: iperf3 -s
# On client:
iperf3 -c 192.168.7.157
```

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_2.png"/>
</div>

La funcionalidad Bluetooth está disponible a través de la ranura M.2 Key E.
**Prueba de Bluetooth:**
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_3.png"/>
</div>

## M.2 Key B (Módulo 4G/5G)

La ranura M.2 Key B admite módulos celulares 4G/5G con soporte para tarjeta Nano SIM.

### Conexión de hardware

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/keyb-keye.png"/>
</div>

:::tip

**Nota: Antes de usar la interfaz, debes retirar los tornillos de la carcasa e instalar el módulo correspondiente como se muestra en la figura siguiente.**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### Instrucciones de uso

**Paso 1.** Comprobar el reconocimiento de hardware

```bash
lsusb 
```

Este comando muestra una lista de todos los dispositivos USB conectados al sistema, junto con su fabricante (ID), tipo y otra información. Por ejemplo, la salida podría mostrar un dispositivo de Quectel Wireless Solutions Co., Ltd. EM12-G, lo que indica que el módulo 5G está presente.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_1.png"/>
</div>

**Paso 2.** Confirmar la carga del driver
Es esencial asegurarse de que el driver option, que se requiere para el módulo 5G, esté cargado. Podemos usar el comando lsmod para comprobarlo.

```bash
lsmod | grep option 
```

Si el driver option se carga correctamente, se mostrará en la salida la información relevante sobre el driver.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_2.png"/>
</div>

**Paso 3.** Configurar ModemManager
ModemManager es una herramienta para gestionar dispositivos módem, y debe instalarse y reiniciarse.

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

El comando apt install se utiliza para instalar el paquete ModemManager, mientras que systemctl restart reinicia el servicio ModemManager para garantizar que la nueva configuración surta efecto.

**Paso 4.** Verificar la identificación del módulo
Podemos usar el comando mmcli -L para comprobar si ModemManager puede identificar correctamente el módulo 5G.

```bash
mmcli -L 
```

Si se reconoce el módulo 5G, se mostrará una salida similar a /org/freedesktop/ModemManager1/Modem/0, lo que indica la ruta al dispositivo módem detectado.
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_3.png"/>
</div>

**Paso 5.** Establecer el APN
El APN (Access Point Name) es crucial para conectar un dispositivo móvil a la red. Usaremos el comando nmcli para crear un perfil bearer. Tomando China Mobile como ejemplo, podemos crear un archivo de configuración con los siguientes comandos:

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando añade una nueva conexión de tipo GSM (Global System for Mobile Communications), especificando el APN como "CMNET" y usando configuración IPv4 automática.

**Paso 6.** Activar la conexión
Después de crear el perfil bearer, necesitamos activar la conexión.

```bash
sudo nmcli con up "gsm" 
```

Este comando activa la conexión GSM y, si tiene éxito, se mostrará un mensaje de confirmación.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_4.png"/>
</div>

**Paso 7.** Volver a verificar la identificación del módulo
Ejecuta de nuevo el comando mmcli -L para asegurarte de que el módulo sigue siendo reconocido después de configurar el APN.

```bash
mmcli -L 
```

**Paso 8.** Comprobar el estado del módulo
Por último, podemos usar el comando mmcli -m 0 para ver información detallada sobre el módulo, como la asignación de IP, el operador y el estado de la conexión de red.

```bash
mmcli -m 0 
```

Este comando proporciona detalles completos sobre el módulo 5G, incluido su fabricante, modelo, tecnologías de red admitidas y actuales, estado del dispositivo y operadores de red conectados.
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_5.png"/>
</div>

## Ethernet

La Robotics J501 proporciona 1x 10GbE (nativo) y 4x 1GbE (mediante switch PCIe) puertos RJ45. El puerto 10GbE incorpora el PHY TI TQSPH-10G, que admite cinco velocidades: 10/5/2.5/1/0.1 GbE. Los puertos 1GbE admiten velocidades de 10/100/1000M.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_1.png"/>
</div>

**Indicadores LED por puerto:**

- **LED verde:** ON para enlace 10G/5G/2.5G/1000M
- **LED amarillo:** Parpadea para la actividad de red

Para probar la velocidad del puerto Ethernet, usa `iperf3` de la siguiente manera:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` es la dirección IP del servidor iperf3. El cliente se conectará a este servidor para realizar una prueba de ancho de banda.
`<bind_ip>` vincula la dirección IP local especificada como origen del tráfico de prueba.
:::

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_speed.png"/>
</div>

## LED

El J501 incluye varios LED de estado:

- **PWR LED:** Estado de alimentación (verde)
- **ACT LED:** Actividad del sistema (amarillo)
- **USR LED:** Controlado vía GPIO

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_1.png"/>
</div>

### Instrucciones de uso

A continuación se muestra cómo controlar los LED USER para que sean verdes, rojos o azules.

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

El efecto de control del LED se muestra en la siguiente figura:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_test.png"/>
</div>

## USB

El Robotics J501 proporciona 4 puertos USB 3.2 Type-A (a través de un hub interno USB 3.1 Gen1, que admite tasas de datos de hasta 5Gbps para conectar periféricos de alta velocidad, dispositivos de almacenamiento o cámaras) y 1 puerto USB 2.0 Type-C de depuración (que funciona como una consola serie para acceder a registros del sistema, depurar problemas de arranque y realizar actualizaciones de firmware).

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

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/USB-A_Speed_Test.png"/>
</div>

:::note
Primero confirma el punto de montaje real de tu dispositivo USB usando el comando `df -h` o `lsblk`.
:::

### Puerto USB 2.0 Type-C

Usando este puerto serie, a través del cable de datos USB-C, puedes monitorizar en el PC la información de depuración de entrada y salida.

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug.png"/>
</div>

**Paso 1.** Abre la herramienta de puerto serie (aquí usamos la herramienta MobaXterm como ejemplo) y crea una nueva sesión.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Paso 2.** Selecciona la herramienta Serial.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Paso 3.** Selecciona el puerto serie correspondiente, establece la velocidad en 115200 y haz clic en "OK".

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_1.png"/>
</div>

**Paso 4.** Inicia sesión en tu reComputer Super con el nombre de usuario y la contraseña.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_2.png"/>
</div>

## Ventilador

El Robotics J501 proporciona dos conectores de ventilador PWM de 4 pines diseñados para refrigerar tanto el módulo Jetson como los componentes de la placa portadora:

- **Ventilador de 12V**: conector de 2,54 mm, máx. 1,5A, adecuado para refrigeración de alto rendimiento
- **Ventilador de 5V**: conector JST de 1,25 mm, máx. 1,5A, ideal para refrigeración silenciosa de bajo consumo

El control PWM permite un ajuste dinámico y preciso de la velocidad en función de la temperatura del sistema, lo que posibilita una refrigeración eficiente minimizando el ruido y el consumo de energía.

**Distribución de pines del ventilador de 12V:**

El conector del ventilador de 12V (2,54 mm) tiene la siguiente distribución de pines:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan_12v_pinout.png"/>
</div>

### Instrucciones de uso

**Control PWM manual:**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan.png"/>
</div>

:::note
La política térmica predeterminada está preconfigurada en `/etc/nvpmodel.conf`. Para perfiles personalizados, consulta la [NVIDIA Jetson Linux Developer Guide](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Además, podemos establecer manualmente la velocidad del ventilador usando la herramienta `jtop`.

Puedes introducir el siguiente comando en la terminal para instalar **jtop**.

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Luego reinicia tu reComputer Mini:

```bash
sudo reboot
```

Después de instalar **jtop**, puedes lanzarlo en la terminal:

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## CAN

El reComputer Robotics J501 está equipado con 4 interfaces CAN independientes (CAN 0, CAN 1, CAN 2, CAN 3), que comparten el conector J25 2x10P con las interfaces DI/DO. Estas interfaces admiten tanto los protocolos de comunicación Classic CAN como CAN FD, con alta capacidad de antiinterferencia y transmisión de datos en tiempo real, lo que las hace adecuadas para escenarios de control industrial como electrónica automotriz, automatización industrial y robótica.

### Instrucciones de uso

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_1.png"/>
</div>
Este es el diagrama esquemático de la interfaz CAN.

### Comunicación CAN

Esta sección muestra la conexión CAN0↔CAN1 y CAN2↔CAN3 en el Jetson y cómo enviar y recibir datos entre esos pares tanto en modo Classic CAN como en modo CAN‑FD.

| Nombre del canal | Tipo de interfaz | Nombre del pin | Chip GPIO | Número GPIO | Control de resistencia de terminación |
|--------------|----------------|----------|-----------|-------------|------------------------------|
| CAN0         | Nativa         | PAA.04   | gpiochip1 | 4           | gpiochip1 line4 (PAA.04)    |
| CAN1         | Nativa         | PAA.07   | gpiochip1 | 7           | gpiochip1 line7 (PAA.07)    |
| CAN2         | SPI-to-CAN     | -        | gpiochip2 | 10          | gpiochip2 line10             |
| CAN3         | SPI-to-CAN     | -        | gpiochip2 | 12          | gpiochip2 line12             |

Las resistencias de terminación para CAN0 y CAN1 pueden controlarse mediante dos pines: PAA.04, ubicado en gpiochip1 line4, y PAA.07, ubicado en gpiochip1 line7.  

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

El siguiente script implementa una prueba de comunicación en bucle entre CAN0/CAN1 y CAN2/CAN3, incluyendo la activación de la resistencia terminal, la configuración de la velocidad de transmisión y la transmisión bidireccional de datos.

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_2.png"/>
</div>

El diagrama de cableado se muestra a continuación:

| Desde | Hacia |
| --- | --- |
| CAN0_H | CAN1_H |
| CAN0_L | CAN1_L |
| CAN2_H | CAN3_H |
| CAN2_L | CAN3_L |

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/CAN-connect.png"/>
</div>

Crea `test_can.sh` para probar la transmisión y recepción de datos entre CAN0↔CAN1 y CAN2↔CAN3 en modo estándar:

```bash
touch test_can.sh
sudo chmod +x test_can.sh
sudo ./test_can.sh
```

El código del script para `test_can.sh` es el siguiente:

<details>
<summary> test_can.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffer sizes
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# Set bitrate, 1 Mbps
BITRATE=1000000
echo "$PW" | sudo -S ip link set can0 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can1 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up

echo "$PW" | sudo -S ip link set can2 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can3 type can bitrate ${BITRATE}
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 & # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 & # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 & # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 & # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 & 
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump runs until you Ctrl+C)
wait
```

</details>

:::note
En el script de prueba CAN, reemplaza PW con tu propia contraseña de Jetson.
:::

La transmisión y recepción de datos entre **CAN0** y **CAN1** se completará:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test.png"/>
</div>

#### Modo CAN-FD

CAN FD admite mayores tasas de transmisión de datos y longitudes de trama de datos más grandes. El siguiente script implementa una prueba de bucle de retorno CAN FD.

Crea `test_canfd.sh` para probar la transmisión y recepción de datos entre **CAN0↔CAN1** y **CAN2↔CAN3** en modo CAN-FD:

```bash
touch test_canfd.sh
sudo chmod +x test_canfd.sh
sudo ./test_canfd.sh
```

El código del script para `test_canfd.sh` es el siguiente:

<details>
<summary> test_canfd.sh </summary>

```sh
#!/bin/bash
set -e

PW="000000"

echo "$PW" | sudo -S ip link set can0 down || true
echo "$PW" | sudo -S ip link set can1 down || true
echo "$PW" | sudo -S ip link set can2 down || true
echo "$PW" | sudo -S ip link set can3 down || true

# Set socket buffers
echo "$PW" | sudo -S sysctl -w net.core.rmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_max=524288
echo "$PW" | sudo -S sysctl -w net.core.rmem_default=524288
echo "$PW" | sudo -S sysctl -w net.core.wmem_default=524288

# ---- CAN-FD parameters ----
BITRATE=500000        # Arbitration (nominal) bitrate
DBITRATE=5000000      # Data phase bitrate (FD fast mode)

# Configure CAN-FD: arbitration bitrate + data bitrate + FD on + error reporting + auto restart
echo "$PW" | sudo -S ip link set can0 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can1 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can2 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100
echo "$PW" | sudo -S ip link set can3 type can bitrate $BITRATE dbitrate $DBITRATE fd on berr-reporting on restart-ms 100

echo "$PW" | sudo -S ip link set can0 up
echo "$PW" | sudo -S ip link set can1 up
echo "$PW" | sudo -S ip link set can2 up
echo "$PW" | sudo -S ip link set can3 up

sleep 1

# Enable termination resistors
sudo pkill -f gpioset || true
gpioset --mode=time --sec=200000 gpiochip2 8=0 &   # enable CAN1 120R
GPIO1_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 9=0 &   # enable CAN0 120R
GPIO2_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 12=0 &  # enable CAN3 120R
GPIO3_PID=$!
gpioset --mode=time --sec=200000 gpiochip2 10=0 &  # enable CAN2 120R
GPIO4_PID=$!

echo "Start candump on can0 & can1..."
candump can0 &
DUMP0_PID=$!
candump can1 &
DUMP1_PID=$!

echo "Start candump on can2 & can3..."
candump can2 &
DUMP2_PID=$!
candump can3 &
DUMP3_PID=$!

echo "Start cangen on can0 & can1 and can2 & can3 (bi-directional test)..."
# -g 10 sends one frame every 10 ms; adjust as needed
cangen can0 -g 10 &
GEN0_PID=$!
cangen can1 -g 10 &
GEN1_PID=$!
cangen can2 -g 10 &
GEN2_PID=$!
cangen can3 -g 10 &
GEN3_PID=$!

# Cleanup background processes on Ctrl+C
cleanup() {
  echo
  echo "Stopping CAN-FD test..."
  kill $GEN0_PID $GEN1_PID $DUMP0_PID $DUMP1_PID $GPIO1_PID $GPIO2_PID 2>/dev/null || true
  kill $GEN2_PID $GEN3_PID $DUMP2_PID $DUMP3_PID $GPIO3_PID $GPIO4_PID 2>/dev/null || true
  echo "$PW" | sudo -S ip link set can0 down || true
  echo "$PW" | sudo -S ip link set can1 down || true
  echo "$PW" | sudo -S ip link set can2 down || true
  echo "$PW" | sudo -S ip link set can3 down || true
  echo "Done."
}
trap cleanup INT TERM

# Wait for child processes (candump will run until you Ctrl+C)
wait
```

</details>

:::note
En el script de prueba CAN, reemplaza PW con tu propia contraseña de Jetson.
:::

La transmisión y recepción de datos entre **CAN0↔CAN1** y **CAN2↔CAN3** se completará:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test_2.png"/>
</div>

## DI/DO

Las interfaces DI/DO de reComputer Robotics J501 están integradas en el conector J25 2x10P, compartiendo la interfaz con las interfaces CAN. Admiten entrada digital de 4 canales y salida digital de 4 canales, con transmisión de señal estable y adaptación de voltaje de grado industrial, adecuadas para conectar sensores digitales, relés y otros dispositivos periféricos.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_test.png"/>
</div>

### Conexión de hardware

#### Canales de Entrada Digital (DI)

| Nombre del Canal | Características de Voltaje | Etiqueta GPIO | Nombre de Pin | Chip GPIO | Número GPIO |
|--------------|-------------------------|------------|----------|-----------|-------------|
| DI_12V_1     | Entrada de 12V adaptativa      | DI_1_GPIO17 | PP.04    | gpiochip0 | 96          |
| DI_12V_2     | Entrada de 12V adaptativa      | DI_1_GPIO18 | PQ.04    | gpiochip0 | 104         |
| DI_12V_3     | Entrada de 12V adaptativa      | DI_1_GPIO19 | PN.02    | gpiochip0 | 86          |
| DI_12V_4     | Entrada de 12V adaptativa      | DI_1_GPIO33 | PM.07    | gpiochip0 | 83          |

#### Canales de Salida Digital (DO)

| Nombre del Canal | Características de Voltaje | Etiqueta GPIO | Nombre de Pin | Chip GPIO | Número GPIO | Información Adicional |
|--------------|-------------------------|------------|----------|-----------|-------------|-----------------|
| DO_40V_1     | Salida de drenador abierto; ~0V (bajo) cuando no está tirado a alto, 12V (alto) cuando está tirado a alto | DO_1_GPIO | PAA.04 | gpiochip1 | 4 | Número correspondiente: 320 |
| DO_40V_2     | Salida de drenador abierto; ~0V (bajo) cuando no está tirado a alto, 12V (alto) cuando está tirado a alto | DO_2_GPIO | PAA.07 | gpiochip1 | 7 | Número correspondiente: 323 |
| DO_40V_3     | Salida de drenador abierto; ~0V (bajo) cuando no está tirado a alto, 12V (alto) cuando está tirado a alto | DO_3_GPIO | PBB.01 | gpiochip1 | 9 | Número correspondiente: 325 |
| DO_40V_4     | Salida de drenador abierto; ~0V (bajo) cuando no está tirado a alto, 12V (alto) cuando está tirado a alto | DO_4_GPIO | PBB.00 | gpiochip1 | 8 | Número correspondiente: 324 |

Las definiciones de pines clave para las interfaces DI/DO en el conector J25 son las siguientes (la numeración de pines corresponde al conector físico):

| Número de Pin | Etiqueta de Función | Descripción |
|------------|----------------|-------------|
| 1          | DI_12V_1       | Canal de Entrada Digital 12V 1 |
| 3          | DI_12V_2       | Canal de Entrada Digital 12V 2 |
| 5          | DI_12V_3       | Canal de Entrada Digital 12V 3 |
| 7          | DI_12V_4       | Canal de Entrada Digital 12V 4 |
| 9          | GND_DI         | Tierra para Canales de Entrada Digital |
| 2          | DO_40V_1       | Canal de Salida Digital 40V 1 |
| 4          | DO_40V_2       | Canal de Salida Digital 40V 2 |
| 6          | DO_40V_3       | Canal de Salida Digital 40V 3 |
| 8          | DO_40V_4       | Canal de Salida Digital 40V 4 |
| 10         | GND_DO         | Tierra para Canales de Salida Digital |

:::note
Para el pinout completo (incluyendo interfaces CAN), consulta la documentación de hardware de reComputer Robotics J501 para evitar conexiones incorrectas.
:::

### Instrucciones de uso

**Operación de Salida Digital (DO)**

Las interfaces DO adoptan salida de drenador abierto. Puedes configurar el nivel de salida (alto/bajo) mediante comandos para controlar periféricos como relés y LEDs.

Ejecuta el siguiente comando para habilitar el canal DO (salida de 12V, alimentado por la resistencia de pull-up externa y la fuente de alimentación de 12V):

```
# Enable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=1

# Enable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=1

# Enable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=1

# Enable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=1
```

DO antes de tirar a alto:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_before.png"/>
</div>

DO después de tirar a alto:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/do_after.png"/>
</div>

Ejecuta el siguiente comando para deshabilitar el canal DO (salida ~0V):

```
# Disable DO_40V_1 (gpiochip1 4)
sudo gpioset --mode=wait 1 4=0

# Disable DO_40V_2 (gpiochip1 7)
sudo gpioset --mode=wait 1 7=0

# Disable DO_40V_3 (gpiochip1 9)
sudo gpioset --mode=wait 1 9=0

# Disable DO_40V_4 (gpiochip1 8)
sudo gpioset --mode=wait 1 8=0
```

**Operación de Entrada Digital (DI)**

Utiliza el comando `gpioget` para leer el nivel de entrada del canal DI (valor de retorno `1` = nivel alto, `0` = nivel bajo) y obtener el estado de los dispositivos periféricos.

El comando para leer el nivel del canal DI es el siguiente:

```
# Read DI_12V_1 (gpiochip0 96) status
gpioget gpiochip0 96

# Read DI_12V_2 (gpiochip0 104) status
gpioget gpiochip0 104

# Read DI_12V_3 (gpiochip0 86) status
gpioget gpiochip0 86

# Read DI_12V_4 (gpiochip0 83) status
gpioget gpiochip0 83
```

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_set.png"/>
</div>

## SPI

### Conexión de hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi.png"/>
</div>

### Instrucciones de uso

Utiliza cables Dupont para conectar los pines centrales del canal SPI de destino (toma /dev/spidev2.0 como ejemplo):
Conecta el pin MOSI de SPI2.0 a su pin MISO (para realizar transmisión/recepción de datos en bucle de retorno).

El diagrama de cableado es el siguiente:
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_conn_2.png"/>
</div>

:::note
Para usar SPI, retira la tapa lateral del dispositivo con un destornillador como se muestra arriba.
:::

**Paso 1: Cargar el Módulo del Kernel SPI (Requisito previo)**
Antes de operar la interfaz SPI, asegúrate de que el módulo del kernel `spidev` esté cargado (el sistema predeterminado puede precargarlo, pero se recomienda verificarlo manualmente):

```bash
sudo modprobe spidev
```

:::note
Si el comando se ejecuta sin mensajes de error, significa que el módulo se cargó correctamente; si el módulo ya está cargado, el comando no devolverá ninguna información, lo cual es un fenómeno normal.
:::

**Paso 2: Ver nodos de dispositivo SPI**
Introduce el siguiente comando en la terminal para ver el nombre de dispositivo asignado por la interfaz SPI de reComputer Robotics J501:

```bash
ls /dev/spidev*
```

Si no se muestra ningún nodo de dispositivo, significa que el módulo `spidev` no se ha cargado correctamente. Vuelve a ejecutar `sudo modprobe spidev` y revisa el registro del sistema para la resolución de problemas.

**Paso 3: Obtener y compilar el código de prueba SPI**
Obtén el código de prueba `spidev-test` desde GitHub y compílalo:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Paso 4: Ejecutar el programa de prueba SPI**
Introduce el siguiente comando en la terminal para ejecutar el programa de prueba SPI (toma `/dev/spidev2.0` como ejemplo):

```bash
sudo ./spidev_test -v -D /dev/spidev2.0 -s 100000
```

**Paso 5: Verificar el resultado de la prueba**
Después de ejecutar el comando de prueba, puedes observar en la terminal el estado de transmisión y recepción de datos de la interfaz SPI2.0. La salida principal es la siguiente:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_out.png"/>
</div>

> Criterio clave de evaluación: Los datos TX (transmitidos) son consistentes con los datos RX (recibidos), lo que indica que la prueba de bucle cerrado SPI se ha realizado correctamente y que la función de la interfaz SPI es normal.

## UART

El reComputer Robotics J501 está equipado con 2 interfaces UART independientes (UART1 y UART2) que admiten modos de comunicación RS232, RS422 y RS485, con transmisión de señal estable y amplia compatibilidad con dispositivos periféricos.

### Conexión de hardware

#### Canales de interfaz UART

| Nombre del canal | Nodo de dispositivo | Modos compatibles | Velocidad en baudios predeterminada | Comando de habilitación GPIO | Método de cambio de modo |
|--------------|-------------|-----------------|-------------------|--------------------|-------------------|
| UART1 (DB9-1) | /dev/ttyTHS1 | RS232, RS422, RS485 | RS232: 115200 bps; RS422/RS485: 9600 bps | `gpioset --mode=wait gpiochip0 2=0` | Interruptor DIP SW3 (DIP de 8 pines) |
| UART2 (DB9-2) | /dev/ttyTHS4 | RS232 (predeterminado) | 115200 bps | `gpioset --mode=wait gpiochip2 15=0` | RS232 fijo (sin conmutador) |

**Definición de pines (conector DB9)**

La función de cada pin DB9 varía según el modo de comunicación. Consulta la siguiente tabla para realizar un cableado correcto (la numeración de pines sigue las especificaciones estándar del conector DB9 macho):

| Número de pin DB9 | Función en modo RS232 | Función en modo RS422 | Función en modo RS485 |
|----------------|---------------------|---------------------|---------------------|
| 1              | -                   | TXD- (Transmit Data-) | Data- (Differential Data-) |
| 2              | RXD (Receive Data)  | TXD+ (Transmit Data+) | Data+ (Differential Data+) |
| 3              | TXD (Transmit Data) | RXD+ (Receive Data+) | -                   |
| 4              | -                   | RXD- (Receive Data-) | -                   |
| 5              | GND (Ground)        | GND (Ground)        | GND (Ground)        |
| 6              | -                   | -                   | -                   |
| 7              | RTS (Request to Send) | -                   | -                   |
| 8              | CTS (Clear to Send) | -                   | -                   |
| 9              | -                   | -                   | -                   |

**Configuración de modo (interruptor DIP SW3)**

Solo UART1 (DB9-1) admite el cambio de modo mediante el interruptor DIP SW3 (UART2 está fijado en RS232). El interruptor es de tipo DIP de 8 pines, con los pines de configuración principales etiquetados como MODE_0, MODE_1 y MODE_2 en el esquema.

La interfaz se muestra en la siguiente figura:
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/Switch.png"/>
</div>

**Reglas de configuración**

| Modo de trabajo | Combinación del interruptor DIP (MODE_2, MODE_1, MODE_0) | Operación del estado del interruptor |
|--------------|------------------------------------------------|------------------------|
| RS232        | 0 (OFF), 0 (OFF), 1 (ON)                       | MODE_0: Cambiar a ON; MODE_1/MODE_2: Mantener en OFF |
| RS422        | 0 (OFF), 0 (OFF), 0 (OFF) o 1 (ON), 0 (OFF), 0 (OFF) | MODE_0/MODE_1: Mantener en OFF; MODE_2: Opcional (ON/OFF) |
| RS485        | 0 (OFF), 1 (ON), 0 (OFF) o 1 (ON), 1 (ON), 0 (OFF) | MODE_1: Cambiar a ON; MODE_0/MODE_2: Opcional (ON/OFF) |

:::note
Después de completar la conexión de hardware, utiliza un software de terminal (por ejemplo, CuteCom) para probar la función de comunicación UART. Si CuteCom no está instalado, ejecuta `sudo apt-get install cutecom` para instalarlo. Asegúrate de que el canal UART se haya habilitado mediante el comando GPIO.
:::

### Instrucciones de uso

**Comandos de habilitación GPIO**

Antes de conectar, ejecuta el comando de habilitación GPIO en la terminal para activar el canal UART correspondiente:

```bash
# Enable UART1 (ttyTHS1)
sudo gpioset --mode=wait gpiochip0 2=0

# Enable UART2 (ttyTHS4)
sudo gpioset --mode=wait gpiochip2 15=0
```

#### Prueba en modo RS232

Aquí puedes utilizar un adaptador USB a RS232 para probar la interfaz. Hemos utilizado el [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nuestras pruebas.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_1.png"/>
</div>

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/232-PC.png"/>
</div>

**Paso 1: Iniciar CuteCom**
Ejecuta `sudo cutecom` para iniciar el software de terminal CuteCom.

**Paso 2: Configurar los parámetros del puerto serie**
Configura el puerto serie con los siguientes parámetros:

- Device: `/dev/ttyTHS1` (UART1) o `/dev/ttyTHS4` (UART2)
- Baud Rate: 115200 bps
- Data Bits: 8, Parity: None, Stop Bits: 1, Flow Control: None

**Paso 3: Abrir el puerto serie**
Haz clic en "Open Device" para abrir el puerto serie.

**Paso 4: Enviar datos de prueba**
Envía datos de prueba (por ejemplo, "232 test from jetson") y verifica la recepción de datos desde el dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_2.png"/>
</div>
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_3.png"/>
</div>

#### Prueba en modo RS485

Aquí puedes utilizar un adaptador USB a RS485 para probar la interfaz. Hemos utilizado el [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**Paso 1: Iniciar CuteCom**
Ejecuta `sudo cutecom` para iniciar el software de terminal CuteCom.

**Paso 2: Configurar los parámetros del puerto serie**
Configura el puerto serie con los siguientes parámetros:

- Device: `/dev/ttyTHS1`
- Baud Rate: 9600 bps
- Data Bits: 8, Parity: None, Stop Bits: 1, Flow Control: None

**Paso 3: Abrir el puerto serie**
Haz clic en "Open Device" para abrir el puerto serie.

**Paso 4: Enviar datos de prueba**
Envía datos de prueba (por ejemplo, "485 test from jetson") y verifica la recepción de datos desde el dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs485_1.png"/>
</div>

#### Prueba en modo RS422

Aquí puedes utilizar un adaptador USB a RS422 para probar la interfaz. Hemos utilizado el [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**Paso 1: Iniciar CuteCom**
Ejecuta `sudo cutecom` para iniciar el software de terminal CuteCom.

**Paso 2: Configurar los parámetros del puerto serie**
Configura el puerto serie con los siguientes parámetros:

- Device: `/dev/ttyTHS1`
- Baud Rate: 9600 bps
- Data Bits: 8, Parity: None, Stop Bits: 1, Flow Control: None

**Paso 3: Abrir el puerto serie**
Haz clic en "Open Device" para abrir el puerto serie.

**Paso 4: Enviar datos de prueba**
Envía datos de prueba (por ejemplo, "422 test from jetson") y verifica la recepción de datos desde el dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs422.png"/>
</div>

## RTC

El reComputer Robotics J501 incluye un RTC de hardware con batería de respaldo para un cronometraje preciso. Hay dos formas de proporcionar alimentación de respaldo al RTC:

1. Usar el portapilas de botón CR1220 (J14)
2. Usar el conector RTC de 2 pines - J4 para conexión de alimentación externa

### Conexión de hardware

**Método 1: Usar el portapilas de botón CR1220**

Conecta una batería de botón CR1220 de 3 V al zócalo RTC de la placa como se muestra a continuación. Asegúrate de que el extremo positivo (+) de la batería esté orientado hacia arriba.

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_0.png"/>
</div>

**Método 2: Usar el conector RTC de 2 pines**

El conector RTC de 2 pines proporciona una forma alternativa de conectar alimentación externa al RTC.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2pin_pinout.png"/>
</div>

### Instrucciones de uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Enciende el reComputer Robotics J501.

**Paso 3.** En el escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Settings > Date & Time`, conéctate a una red mediante un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha y hora automáticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_1.png"/>
</div>

:::note
Si no te has conectado a internet mediante Ethernet, puedes configurar la fecha y hora manualmente aquí.
:::

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para comprobar la hora del reloj de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Verás que la hora del sistema ha perdido la alimentación pero sigue funcionando con normalidad.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2.png"/>
</div>

## Pantalla

El Robotics J501 está equipado con un HDMI para salida de pantalla de alta resolución.

## Puerto de expansión

La placa portadora Robotics J501 incluye un encabezado de expansión de cámara para la placa de extensión GMSL. Puede conectar y operar simultáneamente cuatro cámaras GMSL al mismo tiempo.

### Conexión de hardware

A continuación se muestra la ranura de conexión de la placa de expansión de cámara GMSL de la placa portadora Robotics J501 (es necesario preparar una placa de extensión con antelación):

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_1.png"/>
  </div>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_2.png"/>
  </div>
</div>

Los siguientes son los modelos de cámaras GMSL que ya hemos soportado:

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Instrucciones de uso

:::note
Antes de habilitar la funcionalidad GMSL, asegúrate de haber instalado una versión de JetPack con el controlador de la placa de expansión GMSL.
:::

### Configurar el archivo Jetson IO

```bash
sudo /opt/nvidia/jetson-io/jetson-io.py
```

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_1.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_2.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_3.png"/>
</div>

<div align="center">
  <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_4.png"/>
</div>

:::note
En total hay tres archivos de superposición, a saber, Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4 y Orbbec Gemini 335Lg. Estos corresponden respectivamente a la cámara 3G de SG3S, la cámara 6G de SG2 y SG8S, y la cámara de Orbbec. Como se muestra en la Figura 3, configura el archivo io de acuerdo con el modelo de tu cámara.
:::

**step 2.** Instala las herramientas de configuración de la interfaz de vídeo.

```bash
sudo apt update
sudo apt install v4l-utils wmctrl
```
<!-- 
### Use the camera of Gemini 335Lg

The first time you turn it on, you might need to update the firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Opening the data stream, you can view the video from the camera.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div> -->

### Usar las cámaras de la Serie SGxxx

**step 1.** Configura el modo de sincronización de fotogramas (¡no está habilitado por defecto!).

:::info
Aquí mostramos cómo configurar cámaras de diferentes modelos y resoluciones.
:::

```bash
#enables frame synchronization
v4l2-ctl -d /dev/video0 --set-ctrl=trig_mode=1
#Set the frame rate of the camera
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 --stream-mmap -d /dev/video0
#Set the camera format
v4l2-ctl -V --set-fmt-video=width=1920,height=1536 -c sensor_mode=0 -d /dev/video0
```

:::note
`trig_mode = 1` habilita la sincronización de fotogramas, mientras que `trig_mode = 0` deshabilita la sincronización de fotogramas. La configuración predeterminada es deshabilitar la sincronización de fotogramas.

`--set-fmt-video` sigue la resolución que se selecciona en función de la cámara conectada. Actualmente, hay tres opciones de sensor_mode, cada una correspondiente a una resolución diferente.

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**step 2.** Inicia la cámara.

```bash
gst-launch-1.0 \
    v4l2src device=/dev/video0 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video1 ! \
    video/x-raw,format=YUY2,width=1920,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video2 ! \
    video/x-raw,format=YUY2,width=1536,height=1080,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink

gst-launch-1.0 \
    v4l2src device=/dev/video3 ! \
    video/x-raw,format=YUY2,width=3840,height=2160,framerate=30/1 ! \
    videoconvert ! \
    videoscale ! \
    xvimagesink
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_preview.png"/>
</div>

## Recursos

- [Esquemático de la placa portadora reComputer Robotics J501](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer%20Robotics%20J501%20Main%20Board%20for%20Jetson%20AGX%20Orin_V1.0_SCH_2512161.pdf)
- [Hoja de datos de la placa portadora reComputer Robotics J501](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer_robotics_J501_datasheet.pdf)
- [Catálogo de productos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparación de Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de éxito de Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Código fuente de L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

<!-- - [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp) -->
<!-- - [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf) -->
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
