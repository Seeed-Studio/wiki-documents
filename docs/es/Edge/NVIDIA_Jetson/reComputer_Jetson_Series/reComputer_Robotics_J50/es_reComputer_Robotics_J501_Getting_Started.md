---
description: Este wiki proporciona una introducción completa a las características de hardware y uso de interfaces de la placa portadora reComputer Jetson Robotics J501. Cubre especificaciones detalladas, módulos compatibles, instrucciones de configuración y guías prácticas para usar varias interfaces como ranuras duales M.2 Key M, 10GbE + 4x 1GbE Ethernet, USB 3.0, cuatro interfaces CAN (2 nativas + 2 SPI-to-CAN), UART, DI/DO, I2S y expansión de cámara GMSL2, ayudando a los usuarios a comenzar rápidamente con el desarrollo de robótica en la plataforma J501.
title: Flash Jetpack && Uso de Interfaces
tags:
  - reComputer Robotics J501
  - Flash Jetpack
  - Robótica
  - Uso de Interfaces
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg
slug: /es/ai_robotics_recomputer_j501_robotics_getting_started
sku: 100090853,100076722,100060802,100032662
last_update:
  date: 12/09/2025
  author: Lorraine
---

# Hardware Robotics J501 y Primeros Pasos

El reComputer Robotics J501 es una placa portadora de IA de borde de alto rendimiento diseñada para aplicaciones avanzadas de robótica e industriales. Compatible con módulos NVIDIA Jetson AGX Orin (32GB/64GB) en modo MAXN, ofrece hasta 275 TOPS de rendimiento de IA.

Equipado con amplias opciones de conectividad—incluyendo 1x 10GbE y 4x 1GbE puertos Ethernet, ranuras duales M.2 Key M para SSDs NVMe, ranuras M.2 para módulos 5G y Wi-Fi/BT, múltiples puertos USB 3.0, cuatro interfaces CAN (2 nativas + 2 SPI-to-CAN), expansión de cámara GMSL2, y E/S integral incluyendo DI/DO, I2S, UART y RS485—sirve como un cerebro robótico poderoso para fusión compleja de múltiples sensores y procesamiento de IA en tiempo real.

Preinstalado con JetPack 6.2.1 y Linux BSP, asegura un despliegue sin problemas. Compatible con frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch y ROS 2/1, el J501 conecta la toma de decisiones impulsada por modelos de lenguaje grandes con el control físico de robótica, acelerando el desarrollo de robots autónomos con interfaces listas para usar y frameworks de IA optimizados.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hardware_overview.png.jpg"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Características Clave  

- **IA de alto rendimiento**: Hasta 275 TOPS con módulos Jetson AGX Orin 32/64GB, GPU Ampere y motores DLA
- **Conectividad rica**: M.2 Key M dual (NVMe); Key E (WiFi/BT) + Key B (5G); 1x 10GbE + 4x 1GbE; 3x USB 3.0; 2x USB-C
- **CAN-FD cuádruple**: 2x nativas + 2x interfaces SPI-to-CAN con aislamiento eléctrico
- **Visión GMSL2**: Interfaz GMSL2 única (1x) para conexión de cámara de alta velocidad
- **Diseño industrial**: Entrada DC 19-48V; operación -10~60°C; interfaces aisladas; JetPack 6.2.1 preinstalado
- **Listo para robótica**: Soporte ROS 2/1, Isaac ROS; DI/DO, I2S, UART, RS485; optimizado para AMR y automatización

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Módulo Sistema en Chip Jetson AGX Orin</th>
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
      <td>Rendimiento IA</td>
      <td>200 TOPS</td>
      <td>275 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1792-core NVIDIA Ampere @ 930 MHz</td>
      <td>2048-core NVIDIA Ampere @ 1.3 GHz</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8-core Arm Cortex-A78AE @ 2.0 GHz</td>
      <td>12-core Arm Cortex-A78AE @ 2.2 GHz</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>32GB 256-bit LPDDR5 @ 204.8 GB/s</td>
      <td>64GB 256-bit LPDDR5 @ 204.8 GB/s</td>
    </tr>
    <tr>
      <td>Codificador de Video</td>
      <td>1x 4K60 / 3x 4K30 / 6x 1080p60 / 12x 1080p30 (H.265)</td>
      <td>2x 4K60 / 6x 4K30 / 8x 1080p60 / 16x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de Video</td>
      <td>1x 8K30 / 2x 4K60 / 4x 4K30 / 9x 1080p60 / 18x 1080p30 (H.265)</td>
      <td>1x 8K30 / 3x 4K60 / 7x 4K30 / 11x 1080p60 / 22x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Cámara CSI</td>
      <td colSpan={2}>Hasta 6 cámaras (16 vía canales virtuales)<br/>16 carriles MIPI CSI-2<br/>D-PHY 2.1 (hasta 40Gbps) / C-PHY 2.0 (hasta 164Gbps)</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colSpan={2}>100mm x 87mm<br/>Conector Molex Mirror Mezz de 699 pines<br/>Placa de Transferencia Térmica Integrada</td>
    </tr>
    <tr>
      <th colSpan={3} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa Portadora</th>
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
      <td colSpan={2}>1x 2x10P 3.81mm Bloque Terminal - 4x DI @12V + 4x DO @40V + 4x CAN (CAN-FD compatible, eléctricamente aislado)</td>
    </tr>
    <tr>
      <th>GMSL</th>
      <td colSpan={2}>2x Conector Mini-Fakra (Para 8x Cámaras GMSL2) (opcional)</td>
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
      <td colSpan={2}>3x LED (PWR, SSD, y LED de Usuario)</td>
    </tr>
    <tr>
      <th>RTC</th>
      <td colSpan={2}>1x Soporte de Batería CR1220, 1x Header RTC de 2 Pines</td>
    </tr>
    <tr>
      <th>Entrada de Alimentación</th>
      <td colSpan={2}>19-48V DC vía Bloque Terminal de 5.08mm (Adaptador de corriente no incluido)</td>
    </tr>
    <tr>
      <th>Consumo de Energía</th>
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
        Montaje: Escritorio / Pared / Riel DIN (soporte DIN incluido en accesorios)<br/>
        Temperatura de Operación: -10℃~60℃ (25W) / -10℃~55℃ (MAXN)
      </td>
    </tr>
    <tr>
      <th>Garantía</th>
      <td colSpan={2}>2 Años</td>
    </tr>
    <tr>
      <th>Certificación</th>
      <td colSpan={2}>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>
</div>

**Especificaciones de la Placa de Extensión GMSL (Opcional)**

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th>Deserializador</th>
      <td>MAX96712</td>
    </tr>
    <tr>
      <th>Interfaz GMSL</th>
      <td>2x Conector Robotics-Fakra Macho</td>
    </tr>
    <tr>
      <th>Entrada GMSL</th>
      <td>Hasta 8x Cámaras GMSL2</td>
    </tr>
    <tr>
      <th>Método de Conexión</th>
      <td>Cable GMSL2 Fakra 1-a-4 M-M</td>
    </tr>
    <tr>
      <th>Característica de Interfaz POC</th>
      <td>Soporta transmisión simultánea de energía y datos</td>
    </tr>
  </tbody>
</table>
</div>

## Visión General del Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_2.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/hw_overview_3.png"/>
</div>

## 📦 Flash JetPack OS

### Módulo Compatible

- [NVIDIA® Jetson AGX Orin™ Module 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [NVIDIA® Jetson AGX Orin™ Module 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Prerrequisitos

- PC host Ubuntu
- reComputer Robotics J501
- Cable de transmisión de datos USB Type-C

:::info

Recomendamos que uses dispositivos host Ubuntu físicos en lugar de máquinas virtuales.
Por favor consulta la tabla a continuación para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión JetPack </td>
        <td class="dbon" colspan="3"> Versión Ubuntu (Computadora Host) </td>
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

### Preparar la Imagen Jetpack

Aquí, necesitamos descargar la imagen del sistema a nuestro PC Ubuntu correspondiente al módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión Jetpack</th>
      <th>Módulo Jetson</th>
      <th> GMSL </th>
      <th>Enlace de Descarga1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDPKrVl7UDaTYXmxi1CoTu2AcsHUPKLqNw_olmvlPBODqQ?e=gWuNzv">Descargar</a></td>
      <td>ed82745decdf554d82bd93441f1f4ad<br/>149f395a4ba5719664ce2351be8201522  </td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB3JLwYRpS8SqoqjWuXJmmmAW56Nvpdn8YnbYLW7g5_FHM?e=Gqe1XR">Descargar</a></td>
      <td>58fa8b76754449b0a49ad7d5f273edd<br/>f3e1d1f458cdb34994f6d8643da7a1249 </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen Jetpack6 tiene aproximadamente **14.2GB** de tamaño y debería tomar alrededor de 60 minutos para descargar. Por favor espera pacientemente a que se complete la descarga.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargaste está completo e intacto.
:::

⚙️ **Todos los archivos `.dts` y otro código fuente para las placas portadoras Jetson de SEEED se pueden descargar desde** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)

### Entrar en Modo de Recuperación Forzada

:::info
Antes de poder continuar con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<details>

<summary> Paso a Paso </summary>

**Paso 1.** Conecta un cable de transmisión de datos USB Type-C entre el puerto USB2.0 DEVICE y la PC host Ubuntu.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/flash_1.png" />
</div>

**Paso 2.** Usa un alfiler e insértalo en el orificio RECOVERY para presionar el botón de recuperación y mantenerlo presionado.

**Paso 3.** Conecta la fuente de alimentación.

**Paso 4.** Suelta el botón de recuperación.

**Paso 5.** En la PC host Linux, abre una ventana de Terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que uses, entonces la placa está en modo de recuperación forzada.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

La imagen de abajo es para AGX Orin 32GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-agx-orin-32g-j501-6.2.1-36.4.4-2025-11-01.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-robo-agx-orin-j501x
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta el Robotics J501 a una pantalla usando el adaptador PD a HDMI para conectar a una pantalla que soporte entrada HDMI, o conecta directamente a una pantalla que soporte entrada PD usando el cable PD, y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor completa la **Configuración del Sistema** según tus necesidades.
:::

## 🔌 Uso de Interfaces

Lo siguiente introducirá las diversas interfaces de la placa Robotics J501 y cómo usarlas.

## M.2 Key M

El J501 incluye ranuras duales M.2 Key M que soportan SSD NVMe PCIe Gen4x4 para expansión de almacenamiento de alta velocidad.

### Los SSD soportados son los siguientes

- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [SSD Interno NVMe M.2 PCle Gen3x4 2280 de 2TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-5768.html)

### Conexión de Hardware

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m_1.png"/>
</div>

### Instrucciones de Uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

**Paso 1.** Crear directorio y archivo de prueba:

```bash
mkdir ssd
touch ~/ssd/test
```

**Paso 2.** Probar rendimiento de escritura:

```bash
dd if=/dev/zero of=/home/$USER/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_m2.png"/>
</div>

**Paso 3.** Verificar información del SSD:

```bash
nvme list
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/nvme-t2.png"/>
</div>

:::danger
Por favor ejecuta el comando sudo rm /home/$USER/ssd/test para eliminar los archivos de caché después de que la prueba esté completa.
:::

## M.2 Key E (WiFi/BT)

La ranura M.2 Key E soporta módulos Wi-Fi 6 y Bluetooth 5.x para conectividad inalámbrica.


### Conexión de Hardware

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_e_1.png"/>
</div>

:::tip

**Nota: Antes de usar la interfaz, debes quitar los tornillos de la carcasa e instalar el módulo correspondiente como se muestra en la figura de abajo.**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### Instrucciones de Uso

**Prueba de Rendimiento:**
Para probar el rendimiento de Wi-Fi, usa el siguiente comando (reemplaza la dirección IP con tu servidor de prueba):

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

La ranura M.2 Key B soporta módulos celulares 4G/5G con soporte para tarjeta Nano SIM.

### Conexión de Hardware

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/keyb-keye.png"/>
</div>

:::tip

**Nota: Antes de usar la interfaz, debes quitar los tornillos de la carcasa e instalar el módulo correspondiente como se muestra en la figura de abajo.**
<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/open-board.png"/>
</div>
:::

### Instrucciones de Uso

**Paso 1.** Verificar Reconocimiento de Hardware

```bash
lsusb 
```

Este comando muestra una lista de todos los dispositivos USB conectados al sistema, junto con su fabricante (ID), tipo y otra información. Por ejemplo, la salida podría mostrar un dispositivo de Quectel Wireless Solutions Co., Ltd. EM12-G, indicando que el módulo 5G está presente.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_1.png"/>
</div>

**Paso 2.** Confirmar Carga del Controlador
Es esencial asegurarse de que el controlador option, que es requerido para el módulo 5G, esté cargado. Podemos usar el comando lsmod para verificar.

```bash
lsmod | grep option 
```

Si el controlador option se carga exitosamente, se mostrará información relevante sobre el controlador en la salida.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_2.png"/>
</div>

**Paso 3.** Configurar ModemManager
ModemManager es una herramienta para gestionar dispositivos módem, y necesita ser instalado y reiniciado.

```bash
sudo apt install modemmanager 
sudo systemctl restart ModemManager 
```

El comando apt install se usa para instalar el paquete ModemManager, mientras que systemctl restart reinicia el servicio ModemManager para asegurar que las nuevas configuraciones tomen efecto.

**Paso 4.** Verificar Identificación del Módulo
Podemos usar el comando mmcli -L para verificar si el ModemManager puede identificar correctamente el módulo 5G.

```bash
mmcli -L 
```

Si el módulo 5G es reconocido, se mostrará una salida similar a /org/freedesktop/ModemManager1/Modem/0, indicando la ruta al dispositivo módem detectado.
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_3.png"/>
</div>

**Paso 5.** Configurar el APN
APN (Access Point Name) es crucial para conectar un dispositivo móvil a la red. Usaremos el comando nmcli para crear un perfil de portador. Tomando China Mobile como ejemplo, podemos crear un archivo de configuración con los siguientes comandos:

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando agrega una nueva conexión tipo GSM (Global System for Mobile Communications), especificando el APN como "CMNET" y usando configuración automática IPv4.

**Paso 6.** Activar la Conexión
Después de crear el perfil de portador, necesitamos activar la conexión.

```bash
sudo nmcli con up "gsm" 
```

Este comando activa la conexión GSM, y si es exitoso, se mostrará un mensaje de confirmación.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_4.png"/>
</div>

**Paso 7.** Re-verificar Identificación del Módulo
Ejecuta el comando mmcli -L nuevamente para asegurar que el módulo permanezca reconocido después de configurar el APN.

```bash
mmcli -L 
```

**Paso 8.** Verificar Estado del Módulo
Finalmente, podemos usar el comando mmcli -m 0 para ver información detallada sobre el módulo, como asignación de IP, operador y estado de conexión de red.

```bash
mmcli -m 0 
```

Este comando proporciona detalles completos sobre el módulo 5G, incluyendo su fabricante, modelo, tecnologías de red soportadas y actuales, estado del dispositivo y operadores de red conectados.
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/key_b_5.png"/>
</div>

## Ethernet

El Robotics J501 proporciona 1x 10GbE (nativo) y 4x 1GbE (vía switch PCIe) puertos RJ45. El puerto 10GbE cuenta con TI TQSPH-10G PHY, soportando cinco velocidades: 10/5/2.5/1/0.1 GbE. Los puertos 1GbE soportan velocidades 10/100/1000M.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/eth_1.png"/>
</div>

**Indicadores LED por puerto:**

- **LED Verde:** ENCENDIDO para enlace 10G/5G/2.5G/1000M
- **LED Amarillo:** Parpadea para actividad de red

Para probar la velocidad del puerto Ethernet, usa `iperf3` como sigue:

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

El J501 cuenta con múltiples LEDs de estado:

- **LED PWR:** Estado de alimentación (verde)
- **LED ACT:** Actividad del sistema (amarillo)
- **LED USR:** Vía control GPIO

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_1.png"/>
</div>

### Instrucciones de Uso

Lo siguiente demuestra cómo controlar los LEDs USER para que sean verde, rojo o azul.

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

El efecto de control del LED se muestra en la figura a continuación:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/led_test.png"/>
</div>

## USB

El Robotics J501 proporciona 4x puertos USB 3.2 Tipo-A (a través de un hub USB 3.1 Gen1 interno, soportando hasta 5Gbps de velocidad de datos para conectar periféricos de alta velocidad, dispositivos de almacenamiento o cámaras) y 1x puerto de depuración USB 2.0 Tipo-C (que funciona como consola serie para acceder a registros del sistema, depurar problemas de arranque y realizar actualizaciones de firmware).

### Prueba de Velocidad USB-A

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

Haz el script ejecutable y prueba:

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
¡Por favor confirma primero el punto de montaje real de tu dispositivo USB usando el comando `df -h` o `lsblk`!
:::

### Puerto USB 2.0 Tipo-C

Usando este puerto serie, a través del cable de datos USB-C, puedes monitorear la información de depuración de entrada y salida en el lado del PC.

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug.png"/>
</div>

**Paso 1.** Abre la herramienta de puerto serie (Aquí, usamos la herramienta MobaXterm como ejemplo), crea una nueva sesión.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Paso 2.** Selecciona la herramienta Serial.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Paso 3.** Selecciona el puerto serie correspondiente, establece la velocidad de baudios a 115200 y haz clic en "OK".

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_1.png"/>
</div>

**Paso 4.** Inicia sesión en tu reComputer Super con el nombre de usuario y contraseña.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/usb_debug_2.png"/>
</div>

## Ventilador

El Robotics J501 proporciona dos conectores de ventilador PWM de 4 pines diseñados para enfriar tanto el módulo Jetson como los componentes de la placa base:

- **Ventilador 12V**: Conector de 2.54 mm, máx. 1.5A, adecuado para refrigeración de alto rendimiento
- **Ventilador 5V**: Conector JST de 1.25 mm, máx. 1.5A, ideal para refrigeración silenciosa de bajo consumo

El control PWM permite ajuste dinámico y preciso de la velocidad basado en la temperatura del sistema, habilitando refrigeración eficiente mientras minimiza el ruido y el consumo de energía.

**Pinout del Ventilador 12V:**

El conector del ventilador de 12V (2.54 mm) tiene el siguiente pinout:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan_12v_pinout.png"/>
</div>

### Instrucciones de Uso

**Control PWM Manual:**

```bash
# Set fan speed (0-255)
sudo -i
echo 200 > /sys/bus/platform/devices/pwm-fan/hwmon/hwmon1/pwm1
```

<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/fan.png"/>
</div>

:::note
La política térmica predeterminada está preconfigurada en `/etc/nvpmodel.conf`. Para perfiles personalizados, consulta la [Guía del Desarrollador de NVIDIA Jetson Linux](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

Adicionalmente, podemos establecer manualmente la velocidad del ventilador usando la herramienta `jtop`.

Puedes ingresar el siguiente comando en la terminal para instalar **jtop**.

```bash
sudo apt update
sudo apt install python3-pip -y
sudo pip3 install jetson-stats
```

Luego reinicia tu reComputer Mini:

```bash
sudo reboot
```

Después de instalar **jtop**, puedes ejecutarlo en la terminal:

```bash
jtop
```

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/jtop.png"/>
</div>

## CAN

El reComputer Robotics J501 está equipado con 4 interfaces CAN independientes (CAN 0, CAN 1, CAN 2, CAN 3), que comparten el conector J25 2x10P con las interfaces DI/DO. Estas interfaces soportan tanto protocolos de comunicación CAN Clásico como CAN FD, presentando alto rendimiento anti-interferencia y transmisión de datos en tiempo real, haciéndolas adecuadas para escenarios de control industrial como electrónica automotriz, automatización industrial y robótica.

### Instrucciones de Uso

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_hw_1.png"/>
</div>
Este es el diagrama esquemático de la interfaz CAN.

### Comunicación CAN

Esta sección demuestra la conexión CAN0↔CAN1 y CAN2↔CAN3 en el Jetson y muestra cómo enviar y recibir datos entre esos pares tanto en modo CAN Clásico como en modo CAN‑FD.

| Nombre del Canal | Tipo de Interfaz | Nombre del Pin | Chip GPIO | Número GPIO | Control de Resistor de Terminación |
|------------------|------------------|----------------|-----------|-------------|-------------------------------------|
| CAN0             | Nativo           | PAA.04         | gpiochip1 | 4           | gpiochip1 line4 (PAA.04)           |
| CAN1             | Nativo           | PAA.07         | gpiochip1 | 7           | gpiochip1 line7 (PAA.07)           |
| CAN2             | SPI-a-CAN        | -              | gpiochip2 | 10          | gpiochip2 line10                   |
| CAN3             | SPI-a-CAN        | -              | gpiochip2 | 12          | gpiochip2 line12                   |

Los resistores de terminación para CAN0 y CAN1 pueden ser controlados a través de dos pines: PAA.04, ubicado en gpiochip1 line4, y PAA.07, ubicado en gpiochip1 line7.

El control del resistor de terminación sigue estas reglas:

```
When `PAA.04 = 1`, the 120 Ω termination resistor of CAN0 is **disconnected**;  
when `PAA.04 = 0`, the 120 Ω termination resistor of CAN0 is **connected**.

When `PAA.07 = 1`, the 120 Ω termination resistor of CAN1 is **disconnected**;  
when `PAA.07 = 0`, the 120 Ω termination resistor of CAN1 is **connected**.
```

Ingresa el siguiente comando para ver los pines en gpiochip 1:

```bash
gpioinfo gpiochip1
```

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/gpiochip1-can.png"/>
</div>

Consulta los siguientes comandos para establecer `PAA.04` y `PAA.07` a 0:

```bash
sudo gpioset --mode=wait gpiochip1 4=0
sudo gpioset --mode=wait gpiochip1 7=0
```

Consulta los siguientes comandos para establecer `PAA.04` y `PAA.07` a 1:

```bash
sudo gpioset --mode=wait gpiochip1 4=1
sudo gpioset --mode=wait gpiochip1 7=1
```

#### Modo CAN Clásico

El siguiente script implementa pruebas de comunicación de bucle de retorno entre CAN0/CAN1 y CAN2/CAN3, incluyendo habilitar el resistor terminal, configurar la velocidad de bits y transmisión de datos bidireccional.

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

Se completará la transmisión y recepción de datos entre **CAN0** y **CAN1**:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test.png"/>
</div>

#### Modo CAN-FD

CAN FD soporta tasas de transmisión de datos más altas y longitudes de trama de datos más grandes. El siguiente script implementa pruebas de bucle de retorno CAN FD.

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

Se completará la transmisión y recepción de datos entre **CAN0↔CAN1** y **CAN2↔CAN3**:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/can_test_2.png"/>
</div>

## DI/DO

Las interfaces DI/DO del reComputer Robotics J501 están integradas en el conector J25 2x10P, compartiendo la interfaz con las interfaces CAN. Soportan 4 canales de entrada digital y 4 canales de salida digital, con transmisión de señal estable y adaptación de voltaje de grado industrial, adecuadas para conectar sensores digitales, relés y otros dispositivos periféricos.

<div align="center">
  <img width="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_test.png"/>
</div>

### Conexión de Hardware

#### Canales de Entrada Digital (DI)

| Nombre del Canal | Características de Voltaje | Etiqueta GPIO | Nombre del Pin | Chip GPIO | Número GPIO |
|------------------|----------------------------|---------------|----------------|-----------|-------------|
| DI_12V_1         | Adaptativo a entrada 12V   | DI_1_GPIO17   | PP.04          | gpiochip0 | 96          |
| DI_12V_2         | Adaptativo a entrada 12V   | DI_1_GPIO18   | PQ.04          | gpiochip0 | 104         |
| DI_12V_3         | Adaptativo a entrada 12V   | DI_1_GPIO19   | PN.02          | gpiochip0 | 86          |
| DI_12V_4         | Adaptativo a entrada 12V   | DI_1_GPIO33   | PM.07          | gpiochip0 | 83          |

#### Canales de Salida Digital (DO)

| Nombre del Canal | Características de Voltaje | Etiqueta GPIO | Nombre del Pin | Chip GPIO | Número GPIO | Información Adicional |
|------------------|----------------------------|---------------|----------------|-----------|-------------|----------------------|
| DO_40V_1         | Salida de drenaje abierto; ~0V (bajo) cuando no se eleva, 12V (alto) cuando se eleva | DO_1_GPIO | PAA.04 | gpiochip1 | 4 | Número correspondiente: 320 |
| DO_40V_2         | Salida de drenaje abierto; ~0V (bajo) cuando no se eleva, 12V (alto) cuando se eleva | DO_2_GPIO | PAA.07 | gpiochip1 | 7 | Número correspondiente: 323 |
| DO_40V_3         | Salida de drenaje abierto; ~0V (bajo) cuando no se eleva, 12V (alto) cuando se eleva | DO_3_GPIO | PBB.01 | gpiochip1 | 9 | Número correspondiente: 325 |
| DO_40V_4         | Salida de drenaje abierto; ~0V (bajo) cuando no se eleva, 12V (alto) cuando se eleva | DO_4_GPIO | PBB.00 | gpiochip1 | 8 | Número correspondiente: 324 |

Las definiciones clave de pines para las interfaces DI/DO en el conector J25 son las siguientes (la numeración de pines corresponde al conector físico):

| Número de Pin | Etiqueta de Función | Descripción |
|---------------|---------------------|-------------|
| 1             | DI_12V_1            | Canal 1 de Entrada Digital 12V |
| 3             | DI_12V_2            | Canal 2 de Entrada Digital 12V |
| 5             | DI_12V_3            | Canal 3 de Entrada Digital 12V |
| 7             | DI_12V_4            | Canal 4 de Entrada Digital 12V |
| 9             | GND_DI              | Tierra para Canales de Entrada Digital |
| 2             | DO_40V_1            | Canal 1 de Salida Digital 40V |
| 4             | DO_40V_2            | Canal 2 de Salida Digital 40V |
| 6             | DO_40V_3            | Canal 3 de Salida Digital 40V |
| 8             | DO_40V_4            | Canal 4 de Salida Digital 40V |
| 10            | GND_DO              | Tierra para Canales de Salida Digital |

:::note
Para el pinout completo (incluyendo interfaces CAN), consulta la documentación de hardware del reComputer Robotics J501 para evitar conexiones incorrectas.
:::

### Instrucciones de Uso

**Operación de Salida Digital (DO)**

Las interfaces DO adoptan salida de drenaje abierto. Puedes establecer el nivel de salida (alto/bajo) mediante comandos para controlar periféricos como relés y LEDs.

Ejecuta el siguiente comando para habilitar el canal DO (salida 12V, alimentado por la resistencia pull-up externa y fuente de alimentación de 12V):

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

DO Antes de Elevar:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/di_do_before.png"/>
</div>

DO Después de Elevar:

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

Usa el comando `gpioget` para leer el nivel de entrada del canal DI (valor de retorno `1` = nivel alto, `0` = nivel bajo) y obtener el estado de dispositivos periféricos.

El comando para leer el Nivel del Canal DI es el siguiente:

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

### Conexión de Hardware

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi.png"/>
</div>

### Instrucciones de Uso

Usa cables Dupont para conectar los pines principales del canal SPI objetivo (toma /dev/spidev2.0 como ejemplo):
Conecta el pin MOSI de SPI2.0 a su pin MISO (realiza transmisión/recepción de datos en bucle de retorno).

El diagrama de cableado es el siguiente:
<div align="center">
  <img width ="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_conn_2.png"/>
</div>

:::note
Para usar SPI, retira la cubierta lateral del dispositivo con un destornillador como se muestra arriba.
:::

**Paso 1: Cargar Módulo del Kernel SPI (Prerrequisito)**
Antes de operar la interfaz SPI, asegúrate de que el módulo del kernel `spidev` esté cargado (el sistema predeterminado puede precargarlo, pero se recomienda verificar manualmente):

```bash
sudo modprobe spidev
```

:::note
Si el comando se ejecuta sin mensajes de error, significa que el módulo se cargó exitosamente; si el módulo ya está cargado, el comando no devolverá información, lo cual es un fenómeno normal.
:::

**Paso 2: Ver Nodos de Dispositivo SPI**
Ingresa el siguiente comando en la terminal para ver el nombre del dispositivo mapeado por la interfaz SPI del reComputer Robotics J501:

```bash
ls /dev/spidev*
```

Si no se muestra ningún nodo de dispositivo, significa que el módulo `spidev` no se cargó correctamente. Vuelve a ejecutar `sudo modprobe spidev` y verifica el registro del sistema para solucionar problemas.

**Paso 3: Obtener y Compilar el Código de Prueba SPI**
Descarga el código de prueba `spidev-test` desde GitHub y compílalo:

```bash
git clone https://github.com/rm-hull/spidev-test
cd spidev-test
gcc spidev_test.c -o spidev_test
```

**Paso 4: Ejecutar el Programa de Prueba SPI**
Ingresa el siguiente comando en la terminal para ejecutar el programa de prueba SPI (tomando `/dev/spidev2.0` como ejemplo):

```bash
sudo ./spidev_test -v -D /dev/spidev2.0 -s 100000
```

**Paso 5: Verificar el Resultado de la Prueba**
Después de ejecutar el comando de prueba, puedes observar el estado de transmisión y recepción de datos de la interfaz SPI2.0 en la terminal. La salida principal es la siguiente:
<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/spi_out.png"/>
</div>

> Criterio de evaluación clave: Los datos TX (transmitidos) son consistentes con los datos RX (recibidos), indicando que la prueba de bucle de retorno SPI es exitosa, y la función de la interfaz SPI es normal.

## UART

El reComputer Robotics J501 está equipado con 2 interfaces UART independientes (UART1 y UART2) que soportan modos de comunicación RS232, RS422 y RS485, con transmisión de señal estable y amplia compatibilidad con dispositivos periféricos.

### Conexión de Hardware

#### Canales de Interfaz UART

| Nombre del Canal | Nodo del Dispositivo | Modos Soportados | Velocidad de Baudios por Defecto | Comando de Habilitación GPIO | Método de Cambio de Modo |
|------------------|----------------------|------------------|----------------------------------|------------------------------|--------------------------|
| UART1 (DB9-1) | /dev/ttyTHS1 | RS232, RS422, RS485 | RS232: 115200 bps; RS422/RS485: 9600 bps | `gpioset --mode=wait gpiochip0 2=0` | Interruptor dip SW3 (DIP de 8 pines) |
| UART2 (DB9-2) | /dev/ttyTHS4 | RS232 (por defecto) | 115200 bps | `gpioset --mode=wait gpiochip2 15=0` | RS232 fijo (sin interruptor) |

**Definición de Pines (Conector DB9)**

La función de cada pin DB9 varía según el modo de comunicación. Consulta la tabla a continuación para un cableado preciso (la numeración de pines sigue las especificaciones estándar del conector DB9 macho):

| Número de Pin DB9 | Función Modo RS232 | Función Modo RS422 | Función Modo RS485 |
|-------------------|--------------------|--------------------|-------------------|
| 1              | -                   | TXD- (Datos de Transmisión-) | Data- (Datos Diferenciales-) |
| 2              | RXD (Datos de Recepción)  | TXD+ (Datos de Transmisión+) | Data+ (Datos Diferenciales+) |
| 3              | TXD (Datos de Transmisión) | RXD+ (Datos de Recepción+) | -                   |
| 4              | -                   | RXD- (Datos de Recepción-) | -                   |
| 5              | GND (Tierra)        | GND (Tierra)        | GND (Tierra)        |
| 6              | -                   | -                   | -                   |
| 7              | RTS (Solicitud de Envío) | -                   | -                   |
| 8              | CTS (Listo para Enviar) | -                   | -                   |
| 9              | -                   | -                   | -                   |

**Configuración de Modo (Interruptor Dip SW3)**

Solo UART1 (DB9-1) soporta cambio de modo a través del interruptor dip SW3 (UART2 está fijo a RS232). El interruptor es de tipo DIP de 8 pines, con pines de configuración principales etiquetados como MODE_0, MODE_1 y MODE_2 en el esquemático.

La interfaz se muestra en la figura a continuación:
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/Switch.png"/>
</div>

**Reglas de Configuración**

| Modo de Trabajo | Combinación de Interruptor Dip (MODE_2, MODE_1, MODE_0) | Operación de Estado del Interruptor |
|-----------------|----------------------------------------------------------|-------------------------------------|
| RS232        | 0 (OFF), 0 (OFF), 1 (ON)                       | MODE_0: Cambiar a ON; MODE_1/MODE_2: Mantener OFF |
| RS422        | 0 (OFF), 0 (OFF), 0 (OFF) o 1 (ON), 0 (OFF), 0 (OFF) | MODE_0/MODE_1: Mantener OFF; MODE_2: Opcional (ON/OFF) |
| RS485        | 0 (OFF), 1 (ON), 0 (OFF) o 1 (ON), 1 (ON), 0 (OFF) | MODE_1: Cambiar a ON; MODE_0/MODE_2: Opcional (ON/OFF) |

:::note
Después de completar la conexión de hardware, usa software de terminal (ej., CuteCom) para probar la función de comunicación UART. Si CuteCom no está instalado, ejecuta `sudo apt-get install cutecom` para instalarlo. Asegúrate de que el canal UART haya sido habilitado a través del comando GPIO.
:::

### Instrucciones de Uso

**Comandos de Habilitación GPIO**

Antes de conectar, ejecuta el comando de habilitación GPIO en la terminal para activar el canal UART correspondiente:

```bash
# Enable UART1 (ttyTHS1)
sudo gpioset --mode=wait gpiochip0 2=0

# Enable UART2 (ttyTHS4)
sudo gpioset --mode=wait gpiochip2 15=0
```

#### Prueba de Modo RS232

Aquí puedes usar un adaptador USB a RS232 para probar la interfaz. Hemos usado [UGREEN USB to RS232 Adapter](https://www.amazon.com/UGREEN-Converter-Adapter-Chipset-Windows/dp/B00QUZY4UG?th=1) para nuestras pruebas.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_1.png"/>
</div>

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/232-PC.png"/>
</div>

**Paso 1: Iniciar CuteCom**
Ejecuta `sudo cutecom` para iniciar el software de terminal CuteCom.

**Paso 2: Configurar Parámetros del Puerto Serie**
Configura el puerto serie con los siguientes parámetros:

- Dispositivo: `/dev/ttyTHS1` (UART1) o `/dev/ttyTHS4` (UART2)
- Velocidad de Baudios: 115200 bps
- Bits de Datos: 8, Paridad: Ninguna, Bits de Parada: 1, Control de Flujo: Ninguno

**Paso 3: Abrir Puerto Serie**
Haz clic en "Open Device" para abrir el puerto serie.

**Paso 4: Enviar Datos de Prueba**
Envía datos de prueba (ej., "232 test from jetson") y verifica la recepción de datos desde el dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_2.png"/>
</div>
<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs232_3.png"/>
</div>

#### Prueba de Modo RS485

Aquí puedes usar un adaptador USB a RS485 para probar la interfaz. Hemos usado [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**Paso 1: Iniciar CuteCom**
Ejecuta `sudo cutecom` para iniciar el software de terminal CuteCom.

**Paso 2: Configurar Parámetros del Puerto Serie**
Configura el puerto serie con los siguientes parámetros:

- Dispositivo: `/dev/ttyTHS1`
- Velocidad de Baudios: 9600 bps
- Bits de Datos: 8, Paridad: Ninguna, Bits de Parada: 1, Control de Flujo: Ninguno

**Paso 3: Abrir Puerto Serie**
Haz clic en "Open Device" para abrir el puerto serie.

**Paso 4: Enviar Datos de Prueba**
Envía datos de prueba (ej., "485 test from jetson") y verifica la recepción de datos desde el dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs485_1.png"/>
</div>

#### Prueba de Modo RS422

Aquí puedes usar un adaptador USB a RS422 para probar la interfaz. Hemos usado [DTech USB to RS485 Adapter](https://www.amazon.com/Adapter-Serial-Terminal-Ferrite-Windows/dp/B08SM5MX8K) para nuestras pruebas.

El diagrama de cableado se muestra a continuación:

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/422-485.png"/>
</div>

**Paso 1: Iniciar CuteCom**
Ejecuta `sudo cutecom` para iniciar el software de terminal CuteCom.

**Paso 2: Configurar Parámetros del Puerto Serie**
Configura el puerto serie con los siguientes parámetros:

- Dispositivo: `/dev/ttyTHS1`
- Velocidad de Baudios: 9600 bps
- Bits de Datos: 8, Paridad: Ninguna, Bits de Parada: 1, Control de Flujo: Ninguno

**Paso 3: Abrir Puerto Serie**
Haz clic en "Open Device" para abrir el puerto serie.

**Paso 4: Enviar Datos de Prueba**
Envía datos de prueba (ej., "422 test from jetson") y verifica la recepción de datos desde el dispositivo periférico.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rs422.png"/>
</div>

## RTC

El reComputer Robotics J501 incluye un RTC de hardware con respaldo de batería para mantener la hora con precisión. Hay dos formas de proporcionar energía de respaldo al RTC:

1. Usando el soporte de batería de moneda CR1220 (J14)
2. Usando el Header de 2 Pines RTC - J4 para conexión de energía externa

### Conexión de Hardware

**Método 1: Usando Soporte de Batería de Moneda CR1220**

Conecta una batería de moneda CR1220 de 3V al socket RTC en la placa como se muestra a continuación. Asegúrate de que el extremo positivo (+) de la batería esté mirando hacia arriba.

<div align="center">
  <img width="300" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_0.png"/>
</div>

**Método 2: Usando Header de 2 Pines RTC**

El Header de 2 Pines RTC proporciona una forma alternativa de conectar energía externa al RTC.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2pin_pinout.png"/>
</div>

### Instrucciones de Uso

**Paso 1.** Conecta una batería RTC como se mencionó anteriormente.

**Paso 2.** Enciende el reComputer Robotics J501.

**Paso 3.** En el Escritorio de Ubuntu, haz clic en el menú desplegable en la esquina superior derecha, navega a `Settings > Date & Time`, conéctate a una red a través de un cable Ethernet y selecciona **Automatic Date & Time** para obtener la fecha/hora automáticamente.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_1.png"/>
</div>

:::note
Si no te has conectado a internet a través de Ethernet, puedes configurar manualmente la fecha/hora aquí.
:::

**Paso 4.** Abre una ventana de terminal y ejecuta el siguiente comando para verificar la hora del reloj de hardware:

```bash
cat /sys/devices/platform/bpmp/bpmp\:i2c/i2c-4/4-003c/nvvrs-pseq-rtc/rtc/rtc0/time
```

**Paso 5.** Desconecta la conexión de red y reinicia el dispositivo. Encontrarás que la hora del sistema ha perdido energía pero aún funciona normalmente.
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/rtc_2.png"/>
</div>

## Pantalla

El Robotics J501 está equipado con un HDMI para salida de pantalla de alta resolución.

## Puerto de Extensión

La placa portadora Robotics J501 cuenta con un Header de Expansión de Cámara para placa de extensión GMSL. Puede conectar y operar simultáneamente cuatro cámaras GMSL al mismo tiempo.

### Conexión de Hardware

Aquí están las ranuras de conexión de la placa de expansión de cámara GMSL de la placa portadora Robotics J501 (necesitas preparar una placa de extensión con anticipación):

<div style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_1.png"/>
  </div>
  <div>
    <img width="500" src="https://files.seeedstudio.com/wiki/recomputer_robotic_j501/gmsl_conn_2.png"/>
  </div>
</div>

Los siguientes son los modelos de cámara GMSL que ya hemos soportado:

- [SG3S-ISX031C-GMSL2F](https://www.seeedstudio.com/SG3S-ISX031C-GMSL2F-p-6245.html)
- SG2-AR0233C-5200-G2A
- SG2-IMX390C-5200-G2A
- SG8S-AR0820C-5300-G2A
- [Orbbec Gemini 335Lg](https://www.seeedstudio.com/Orbbec-Gemini-335LG-3D-Camera-p-6541.html)

### Instrucciones de Uso

:::note
Antes de habilitar la funcionalidad GMSL, por favor asegúrate de haber instalado una versión de JetPack con el controlador de la placa de expansión GMSL.
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
Hay tres archivos overlay en total, a saber Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4, y Orbbec Gemini 335Lg. Estos corresponden a la cámara 3G de SG3S, la cámara 6G de SG2 y SG8S, y la cámara de Orbbec respectivamente. Como se muestra en la Figura 3, por favor configura el archivo io según el modelo de tu cámara.
:::

**paso 2.** Instala las herramientas de configuración de interfaz de video.

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

**paso 1.** Configurar el modo de sincronización de fotogramas (¡No está habilitado por defecto!).

:::info
Aquí demostramos cómo configurar cámaras de diferentes modelos y resoluciones.
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

`--set-fmt-video` sigue la resolución que se selecciona basada en la cámara que está conectada. Actualmente, hay tres opciones de sensor_mode, cada una correspondiente a una resolución diferente.

- sensor_mode=0 -------> YUYV8_1X16/1920x1536
- sensor_mode=1 -------> YUYV8_1X16/1920x1080
- sensor_mode=2 -------> YUYV8_1X16/3840x2160

:::

**paso 2.** Iniciar la cámara.

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

- [Esquemático de la Placa Portadora reComputer Robotics J501](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer%20Robotics%20J501%20Main%20Board%20for%20Jetson%20AGX%20Orin_V1.0_SCH_2512161.pdf)
- [Hoja de Datos de la Placa Portadora reComputer Robotics J501](https://files.seeedstudio.com/wiki/recomputer_robotic_j501/reComputer_robotics_J501_datasheet.pdf)
- [Catálogo de Productos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparación de Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de Éxito de Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Hoja Informativa de Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)
- [Código fuente del L4T de Seeed](https://github.com/Seeed-Studio/Linux_for_Tegra)

<!-- - [reComputer Robotics 3D file](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp) -->
<!-- - [Mechanical Document-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf) -->
## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
