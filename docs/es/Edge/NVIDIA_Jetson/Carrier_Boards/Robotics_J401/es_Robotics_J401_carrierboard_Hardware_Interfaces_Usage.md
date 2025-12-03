---
description: Esta wiki proporciona una introducción completa a las características de hardware y uso de interfaces de la placa portadora reComputer Jetson Robotics J401. Cubre especificaciones detalladas, módulos compatibles, instrucciones de configuración y guías prácticas para usar varias interfaces como M.2, Ethernet, USB, CAN, UART, I2C y expansión de cámara GMSL2, ayudando a los usuarios a comenzar rápidamente con el desarrollo de robótica en la plataforma J401.
title: Uso de Interfaces
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - Interfaces Usage
  - Interfaces
  - Hardware
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer_robotics1.webp
slug: /es/recomputer_jetson_robotics_j401_getting_started
last_update:
  date: 06/10/2025
  author: Zibo
---

# Hardware de la placa portadora Robotics J401 y Primeros Pasos

El reComputer Robotics J401 es una placa portadora de IA de borde compacta y de alto rendimiento diseñada para robótica avanzada. Compatible con módulos NVIDIA Jetson Orin Nano/Orin NX en modo Super/MAXN, ofrece hasta 157 TOPS de rendimiento de IA. Equipado con amplias opciones de conectividad—incluyendo puertos Ethernet Gigabit duales, ranuras M.2 para módulos 5G y Wi-Fi/BT, 6 puertos USB 3.2, CAN, GMSL2 (vía expansión opcional), I2C y UART—sirve como un cerebro robótico potente capaz de procesar datos complejos de varios sensores. Preinstalado con JetPack 6 y Linux BSP, asegura un despliegue sin problemas.​

Compatible con frameworks como NVIDIA Isaac ROS, Hugging Face, PyTorch y ROS 2/1, el reComputer Robotics J401 conecta la toma de decisiones impulsada por modelos de lenguaje grandes con el control físico de robótica, como planificación de movimiento y fusión de sensores. Ideal para el desarrollo rápido de robots autónomos, acelera el tiempo de comercialización con interfaces listas para usar y frameworks de IA optimizados.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics-carrier-board.png"/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J401-Carrier-Board-optional-accessories.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱</font></span></strong>
    </a>
</div>

## Descripción general de la placa portadora reComputer Jetson Robotics J401

| **Vista Superior** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/top.png) |
| **Vista Superior** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/fornt.png) |
| **Vista Superior** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/carrier_board/bottom.png) |

## Lista de Partes

- Placa Portadora reComputer Robotics J401 x 1
- Fuente de alimentación y placa de expansión JST x 1
- Cable XT30 a DC x 1
- Cable USB, Tipo A a Tipo C x 1
- Disipador de calor para placa de expansión x 1
- Espárrago(M3*30) x 5
- Tuerca hexagonal M3 x 5
- Tornillo(CM2.5*L.4) para módulo Jetson y M.2 Key M x3
- Tornillo(CM2*3.0) para M.2 Key E x1
- Espárrago(M2*2.0) para M.2 Key B x1
- Tornillo(CM3*4.0) para M.2 Key B x1
- Manual de usuario x 1

:::note
1.Por favor diseñe una solución robusta de disipación de calor según la Guía de Diseño Térmico, cuando esté en fuente de alimentación de alto voltaje y temperatura de operación.
2.Por favor adjunte disipador de calor para el módulo para mejor rendimiento.
3.Durante la operación con entrada de alto voltaje y alta carga, por favor no toque el disipador de calor para prevenir quemaduras.
4.Recomendación de Adaptador de Energía para Validación, por favor use el adaptador de energía recomendado en el sitio web oficial de Seeed.

- Adaptador de Energía 19V/4.74A 5525 Barrel Jack
- Asegúrese de que se cumplan los requisitos máximos de consumo de energía.
2.Compatibilidad del Cable de Alimentación AC
- Compre cables de alimentación AC trébol específicos de la región según su ubicación.
3.Compatibilidad de Accesorios
- Use solo accesorios oficialmente recomendados (ej., módulos inalámbricos, cámaras, periféricos) para rendimiento y compatibilidad óptimos.

:::

## Especificaciones

### Especificaciones de la Placa Portadora

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
      <td>1x M.2 KEY M PCIe (M.2 NVMe 2280 SSD 128G incluido)</td>
    </tr>
    <tr>
      <th rowSpan="3">Redes</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B para módulo 5G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <th rowSpan="13">E/S</th>
      <td>USB</td>
      <td>6x USB 3.2 Tipo-A (5Gbps);<br />1x USB 3.0 Tipo-C (Host/DP 1.4);<br />1x USB 2.0 Tipo-C (Modo Dispositivo/Debug)</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td>1x 4 en 1 GMSL2 (mini fakra) (placa opcional)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (Conector GH 1.25 de 4 pines)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x DP1.4 (Tipo C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART Conector GH 1.25 de 4 pines</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C Conector GH 1.25 de 4 pines</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1x Conector de Ventilador de 4 pines (5V PWM);<br />1x Conector de Ventilador de 4 pines (12V PWM)</td>
    </tr>
    <tr>
      <td>Puerto de Extensión</td>
      <td>1x Conector de Expansión de Cámara (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pines;<br />1x Socket RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT y LED de Usuario)</td>
    </tr>
    <tr>
      <td>Botón de Orificio</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>Interruptor DIP</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Orificio de Antena</td>
      <td>5x Orificio de Antena</td>
    </tr>
    <tr>
      <th rowSpan="1">Energía</th>
      <td colSpan="2">19-54V XT30(2+2) (Cable XT30 a 5525 DC Jack incluido)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versión Jetpack</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecánico</th>
      <td>Dimensiones (A x P x H)</td>
      <td>115mm x 115mm x 38mm</td>
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
      <th rowSpan="1">Temperatura de Operación</th>
      <td colSpan="2">-20℃~60℃ (Modo 25W);<br />-20℃~55℃ (Modo MAXN);<br />(con disipador de calor reComputer Robotics con ventilador)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantía</th>
      <td>2 Años</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificación</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## Flashear SO JetPack

### Módulo Compatible

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html)
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html)
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html)
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html)

### Prerrequisitos

- PC host Ubuntu
- Placa Portadora Robotics J401
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Ventilador Activo para módulo Nano/NX
- SSD Interno NVMe M.2 2280
- Cable de transmisión de datos USB Tipo-C

:::info

Recomendamos que uses dispositivos host ubuntu físicos en lugar de máquinas virtuales.
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

Aquí, necesitamos descargar la imagen del sistema a nuestra PC Ubuntu correspondiente al módulo Jetson que estamos usando:

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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eaq3jfzUJiVJpBSdd0UqtKIB8cRP--j90it2K1Vk7Neo3g?e=sYD5S2">Descargar</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee  </td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWIfNPP5Te5CqqiIBwXxilwBeTYuJiXPlO4OVFZxf54-gw?e=fGjs5R">Descargar</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b </td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERskD6LNzTRFkvDuLiSubTsBH8_eEFinmE-mPDvUhYZREg?e=deeaoO">Descargar</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7  </td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETx2PP9D85dHgzljJ_pJH-0Bsss82nPxMbOkJ-JvPA1hrQ?e=cReLPU">Descargar</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a </td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen Jetpack6 tiene aproximadamente **14.2GB** de tamaño y debería tomar alrededor de 60 minutos para descargar. Por favor espere pacientemente a que se complete la descarga.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host Ubuntu, abre la terminal y ejecuta el comando `sha256sum <Archivo>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar al Modo de Recuperación Forzada

:::info
Antes de que podamos continuar con los pasos de instalación, necesitamos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<details>

<summary> Paso a Paso </summary>

**Paso 1.** Cambia el interruptor al modo RESET.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Paso 2.** Enciende la placa portadora conectando el cable de alimentación.

**Paso 3.** Conecta la placa al PC host Ubuntu con un cable de transmisión de datos USB Type-C.

**Paso 4.** En el PC host Linux, abre una ventana de Terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que uses, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La imagen de abajo es para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-6.2-36.4.3-2025-05-23.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta el Robotics J401 a una pantalla usando el adaptador PD a HDMI para conectar a una pantalla que soporte entrada HDMI, o conecta directamente a una pantalla que soporte entrada PD usando el cable PD, y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor completa la **System Configuration** según tus necesidades.
:::

## Uso de Interfaces

Lo siguiente introducirá las diversas interfaces de la placa Robotics J401 y cómo usarlas.

## M.2 Key M

M.2 Key M está diseñado para SSDs NVMe de alta velocidad, proporcionando transferencia de datos ultra rápida para aplicaciones de robótica.

### Los SSDs soportados son los siguientes

- [128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html)
- [256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html)
- [512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html)
- [1TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)
- [2TB NVMe M.2 PCle Gen3x4 2280 Internal SSD](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html)

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ssd_c.jpg"/>
</div>

### Instrucciones de Uso

Abre la terminal en el dispositivo Jetson e ingresa el siguiente comando para probar la velocidad de lectura y escritura del SSD.

```bash
#You need to create a blank test file first
sudo touch /ssd/test
dd if=/dev/zero of=/home/seeed/ssd/test bs=1024M count=5 conv=fdatasync
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/ssd_w.png"/>
</div>

:::danger
Por favor ejecuta el comando `sudo rm /home/seeed/ssd/test` para eliminar los archivos de caché después de que la prueba esté completa.
:::

## M.2 Key B

Ranura M.2 Key B para expansión de Módulo 5G, habilitando conectividad celular de alta velocidad para escenarios de robótica e IA de borde.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/5g_c.jpg"/>
</div>

### Instrucciones de Uso

**Paso 1.** Verificar Reconocimiento de Hardware

```bash
lsusb 
```

Este comando muestra una lista de todos los dispositivos USB conectados al sistema, junto con su fabricante (ID), tipo y otra información. Por ejemplo, la salida podría mostrar un dispositivo de Quectel Wireless Solutions Co., Ltd. EM12-G, indicando que el módulo 5G está presente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb.png"/>
</div>

**Paso 2.** Confirmar Carga del Controlador
Es esencial asegurar que el controlador option, que es requerido para el módulo 5G, esté cargado. Podemos usar el comando lsmod para verificar.

```bash
lsmod | grep option 
```

Si el controlador option se carga exitosamente, información relevante sobre el controlador se mostrará en la salida.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsmod.png"/>
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_l.jpg"/>
</div>

**Paso 5.** Configurar el APN
APN (Access Point Name) es crucial para conectar un dispositivo móvil a la red. Usaremos el comando nmcli para crear un perfil bearer. Tomando China Mobile como ejemplo, podemos crear un archivo de configuración con los siguientes comandos:

```bash
sudo nmcli con add type gsm ifname "*" apn "CMNET" ipv4.method  auto 
```

Este comando agrega una nueva conexión tipo GSM (Global System for Mobile Communications), especificando el APN como "CMNET" y usando configuración IPv4 automática.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_con.jpg"/>
</div>

**Paso 6.** Activar la Conexión
Después de crear el perfil bearer, necesitamos activar la conexión.

```bash
sudo nmcli con up "gsm" 
```

Este comando activa la conexión GSM, y si es exitoso, se mostrará un mensaje de confirmación.

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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/nmcli_m.jpg"/>
</div>

## M.2 Key E

La interfaz M.2 Key E es un conector M.2 estándar usado principalmente para conectar módulos inalámbricos, como Wi-Fi y Bluetooth, para expandir las capacidades de comunicación inalámbrica.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/m2_e.jpg"/>
</div>

### Instrucciones de Uso

Para probar el rendimiento de Wi-Fi, usa el siguiente comando (reemplaza la dirección IP con tu servidor de prueba):

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

La placa portadora Robotics j401 cuenta con 2 puertos Ethernet RJ45 de 1Gbps para conectividad de red cableada de alta velocidad.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/eth.jpg"/>
</div>

Para probar la velocidad del puerto Ethernet, usa `iperf3` como sigue:

```bash
iperf3 -c <server_ip> -B <bind_ip>
```

:::info
`<server_ip>` es la dirección IP del servidor iperf3. El cliente se conectará a este servidor para realizar una prueba de ancho de banda.
`<bind_ip>` vincula la dirección IP local especificada como fuente del tráfico de prueba.
:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/ethnet_speed.png"/>
</div>

## LED

El reComputer Jetson Robotics J401 cuenta con 3 indicadores LED (PWR, ACT y User LED) que proporcionan retroalimentación clara de estado para alimentación, actividad del sistema y funciones definidas por el usuario.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/led.jpg"/>
</div>

### Instrucciones de Uso

El User LED es un LED RGB que puede mostrar diferentes colores para indicar varios estados, necesita ser definido por el usuario.

Aquí hay un script de prueba para controlar el LED RGB:

```bash
touch rgb_test
chmod +x rgb_test
vi rgb_test
```

Pega el siguiente contenido:

```bash
#!/bin/bash
# RED ON
gpioset --mode=time --sec=1 2 0=1
sleep 2
# RED OFF
gpioset --mode=time --sec=1 2 0=0

# Blue ON
gpioset --mode=time --sec=1 2 1=1
sleep 2
# Blue OFF
gpioset --mode=time --sec=1 2 1=0

# Green ON
gpioset --mode=time --sec=1 2 2=1
sleep 2
# Green OFF
gpioset --mode=time --sec=1 2 2=0
```

Ejecuta el script para probar el LED RGB.

<div align="center">
  <img width="400" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/rgb_led.gif"/>
</div>

## USB

La placa portadora Robotics j401 está equipada con una variedad de puertos USB, incluyendo 6 puertos USB 3.2 Type-A (5Gbps), un puerto USB 3.0 Type-C con DP 1.4 (modo Host), y un puerto USB 2.0 Type-C para modo dispositivo/depuración, ofreciendo opciones de conectividad versátiles.

### Prueba de Velocidad USB

Crea un script para probar la velocidad del dispositivo USB:

```bash
sudo vim test_usb
```

Pega el siguiente contenido:

```bash
#!/bin/bash
sudo dd if=/dev/zero of=/dev/$1 bs=1000M count=2 conv=fdatasync
sleep 1
sudo sh -c "sync && echo 3 > /proc/sys/vm/drop_caches"
sleep 1
sudo dd if=/dev/$1 of=/dev/null bs=1000M count=2
```

Haz el script ejecutable:

```bash
sudo chmod +x test_usb
```

Ejecuta el script con el nombre de tu dispositivo USB como argumento.

### Puerto USB 2.0 Type-C

Usando este puerto serie, a través del cable de datos USB C, puedes monitorear la información de depuración de entrada y salida en el lado del PC.

**Paso 1.** Cambia el interruptor al modo de depuración.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug.jpg"/>
</div>

**Paso 2.** Conecta el PC a través de un cable de datos USB, descarga el [Controlador CP210X](https://www.silabs.com/developer-tools/usb-to-uart-bridge-vcp-drivers?tab=downloads) en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/download_driver.png"/>
</div>

**Paso 3.** Conecta el PC a través de un cable de datos USB, extrae el archivo descargado e instala el controlador en tu PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/install_driver.png"/>
</div>

**Paso 4.** Abre el Administrador de Dispositivos en tu PC con Windows y verifica el número de puerto COM asignado al reComputer Super. Debería aparecer bajo "Ports (COM & LPT)" como "Silicon Labs CP210x USB to UART Bridge (COMX)", donde X es el número del puerto COM.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/com4.png"/>
</div>

**Paso 5.** Abre la herramienta de puerto serie (Aquí, usamos la herramienta MobaXterm como ejemplo), crea una nueva sesión.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/1.png"/>
</div>

**Paso 6.** Selecciona la herramienta Serial.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/2.png"/>
</div>

**Paso 7.** Selecciona el puerto serie correspondiente, establece la velocidad de baudios a 115200 y haz clic en "OK".

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug1.png"/>
</div>

**Paso 8.** Inicia sesión en tu reComputer Super con el nombre de usuario y contraseña.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/debug2.png"/>
</div>

### Cámara USB

Usando una cámara USB a través de los puertos USB 3.2 Type-A, instala y ejecuta `guvcview`:

```bash
sudo apt-get install guvcview
guvcview -d /dev/video0
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/usb_camera.png"/>
</div>

## Ventilador

El reComputer Jetson Robotics J401 está equipado con dos tipos de conectores de ventilador para satisfacer diferentes necesidades de voltaje y refrigeración:

- 1x Conector de Ventilador de 4 Pines (5V PWM): Diseñado para ventiladores silenciosos de bajo voltaje y baja potencia, este conector soporta control de velocidad PWM, permitiendo el ajuste inteligente de la velocidad del ventilador basado en la temperatura del sistema para mejorar la eficiencia energética y reducir el ruido.

- 1x Conector de Ventilador de 4 Pines (12V PWM): Compatible con ventiladores PWM estándar de 12V, también soporta control de velocidad preciso, haciéndolo ideal para requisitos de refrigeración de alto rendimiento.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/fan.png"/>
</div>

:::note
Para más información, por favor consulta [aquí](https://docs.nvidia.com/jetson/archives/r35.4.1/DeveloperGuide/text/SD/PlatformPowerAndPerformance/JetsonOrinNanoSeriesJetsonOrinNxSeriesAndJetsonAgxOrinSeries.html?highlight=fan#fan-profile-control).
:::

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

> Nota: Para Jetson Nano 4G, la ruta del ventilador es `/sys/devices/platform/pwm-fan/hwmon/hwmon0/pwm1`.

Adicionalmente, podemos establecer manualmente la velocidad del ventilador usando la herramienta jtop.

## Botón de Orificio

La placa portadora Robotics J401 cuenta con un Botón de Orificio para la interacción del usuario, incluyendo un botón de Encendido (PWR) y un botón de Reinicio (RESET). Estos botones son esenciales para encender/apagar el dispositivo y realizar reinicios del sistema, respectivamente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pinhole_button.jpg"/>
</div>

## CAN

CAN (Controller Area Network) es un estándar robusto de bus vehicular que permite a los microcontroladores y dispositivos comunicarse entre sí sin una computadora host.
El Robotics J401 proporciona una interfaz CAN0 integrada en el conector de alimentación XT30 (2+2) para una transmisión conveniente de energía y datos. Adicionalmente, ofrece 3 interfaces CAN1 a través de dos conectores JST estándar de 4 pines para conectividad flexible del bus CAN.

### Comunicación CAN

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf), puedes encontrar el diagrama de cableado para la interfaz CAN0/CAN1 como se muestra a continuación:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_datasheet.png"/>
</div>

Aquí te demostraremos cómo realizar comunicación de datos usando la interfaz CAN1, utilizando el [Adaptador Analizador USB a CAN](https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html).

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c.png"/>
</div>

Según el método de conexión mostrado en la figura a continuación, conecta CANL, CANH y GND de CAN1 a los puertos correspondientes CANL, CANH y GND de la herramienta USB a CAN respectivamente.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_c1.png"/>
</div>

En nuestro caso, según el adaptador que usamos, hemos descargado e instalado el software que se puede encontrar [aquí](https://github.com/SeeedDocument/USB-CAN-Analyzer/tree/master/res/Program).

**Paso 1.** Configura la interfaz CAN1:

```bash
#Set the bit rate
sudo ip link set can1 type can bitrate 500000
#Enable CAN1
sudo ip link set can1 up
```

**Paso 2.** Configura el software de recepción de datos del PC.
Por favor configura los ajustes de comunicación como se muestra en la siguiente imagen.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_software.png"/>
</div>

**Paso 3.** Jetson envía datos al PC:

```bash
cansend can1 123#abcdabcd
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/pc_rcan1.png"/>
</div>

**Paso 3.** PC envía datos al Jetson:

```bash
#CAN1 monitors PC data
candump can1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1.png"/>
</div>

Se puede ver que la terminal de Jetson ha recibido los datos enviados por el PC.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can1_r.png"/>
</div>

### Modo CAN FD

Aquí, uso CAN0 para conectar a CAN1 para demostrar cómo múltiples dispositivos Jetson pueden comunicarse a través de la interfaz CAN.

### Conexión de Hardware

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can0_can1_c.jpg"/>
</div>

**Paso 1.** Retira la cubierta inferior y establece ambas resistencias de terminación de 120Ω en la posición ON.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/on.jpg"/>
</div>

**Paso 2.** Configura las interfaces CAN0 y CAN1:

```bash
#close the interface

sudo ip link set can0 down
sudo ip link set can1 down

#Set to FD mode

sudo ip link set can0 type can bitrate 500000 dbitrate 2000000 fd on
sudo ip link set can1 type can bitrate 500000 dbitrate 2000000 fd on

#open the interface
sudo ip link set can0 up
sudo ip link set can1 up

```

**Paso 3.** Abre una nueva terminal para escuchar CAN1 y a través de CAN0 envía datos a CAN1:

```bash
#open a new terminal and run
candump can1

#another terminal sends data
cansend can0 123##011112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF112233445566778899AABBCCDDEEFF
```

:::info

- `123` es el ID
- `##` Indica trama CAN FD
- Lo siguiente son 64 bytes de datos (un total de 128 caracteres hexadecimales)

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/can_fd.png"/>
</div>

## UART

El Robotics J401 proporciona un conector JST estándar de 4 pines para comunicación serie UART.

### Conexión de Hardware

Para la comunicación UART, por favor sigue el siguiente cableado. Aquí, usamos la herramienta USB a TTL como ejemplo.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_c.jpg"/>
</div>

### Instrucciones de Uso

**Paso 1.** Abre la terminal en el dispositivo Jetson y ejecuta el siguiente comando para habilitar la interfaz UART:

```bash
gpioset --mode=time --sec=100 2 5=0
```

**Paso 2.** Conecta la herramienta USB a TTL al puerto UART del Robotics J401 y al PC.

**Paso 3.** Abre la herramienta de puerto serie en el lado del PC (Aquí, usamos la herramienta xcom como ejemplo.) y establece la velocidad de baudios a 115200.

**Paso 4.** Crea un script simple de Python para comunicación serie:

```python

import serial
import time

ser = serial.Serial('/dev/ttyTHS1', 115200, timeout=1)
ser.write(b'Hello Jetson!\n')
while True:

    if ser.in_waiting:
        data = ser.readline()
        print("get:", data.decode('utf-8').strip())
    time.sleep(0.1)

ser.close()
```

**Paso 5.** Ejecuta el script de Python en el dispositivo Jetson:

```bash
python3 uart_test.py
```

**Paso 6.** Ahora puedes ver la salida en el lado de la PC, y también puedes enviar datos desde la PC al dispositivo Jetson:

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_s.jpg"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/uart_r.png"/>
</div>

## I2C

Robotics J401 proporciona dos interfaces I2C (IIC0 e IIC1) a través de conectores JST estándar de 4 pines.
Permite la conexión fácil de sensores y periféricos para la expansión del sistema.

### Conexión de Hardware

El Robotics J401 cuenta con dos interfaces IIC GH-1.25 de 4 pines, IIC0 e IIC1.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic.jpg"/>
</div>

En la [hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf), puedes encontrar el diagrama de cableado para la interfaz IIC0/IIC1 GH-1.25 de 4 pines como se muestra a continuación:
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/12c.png"/>
</div>
Selecciona un dispositivo de interfaz IIC para pruebas; la elección depende de ti. Aquí, usamos un [Arduino-Uno-Rev4-Minima](https://www.seeedstudio.com/Arduino-Uno-Rev4-Minima-p-5716.html) para probar I2C0/I2C1.

El proceso de prueba aquí implica escanear las direcciones de los dispositivos conectados externamente en IIC0/IIC1.
:::info
Por favor conecta los dispositivos (IIC0/IIC1 ↔ Dispositivo) según las siguientes conexiones:

- Alimentación → Alimentación

- SDA → SDA

- SCL → SCL

- Tierra → Tierra

:::

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_connect.jpg"/>
</div>

### Instrucciones de Uso

**Paso 1.** Descarga el [Arduino IDE](https://www.arduino.cc/en/software/) para subir el código.

**Paso 2.** Selecciona el tipo de placa de desarrollo.

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/slect_board.png"/>
</div>

**Paso 3.** Reinicia el IDE y sube tu código.

```bash
#code example
#include <Wire.h>

void setup() {
  Wire.begin(0x08); // Set the I2C slave address to 0x08
  Wire.onReceive(receiveEvent);
  Wire.onRequest(requestEvent);
}

void loop() {
  delay(100);
}

void receiveEvent(int howMany) {
  // Callback when receiving host data
  while (Wire.available()) {
    char c = Wire.read();
    // Data received can be processed here.
  }
}

void requestEvent() {
  // Callback when the host requests data
  Wire.write("A"); // Return a byte of data
}
```

**Paso 4.** Jetson instala las herramientas para pruebas IIC.

```bash
sudo apt update
sudo apt-get install i2c-tools
```

**Paso 5.** Ejecuta el siguiente comando en la terminal para ver los nombres mapeados en el bus IIC:

```bash
i2cdetect -l
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_l.png"/>
</div>

**Paso 6.** Ejecuta los siguientes comandos para escanear en IIC0:

```bash
sudo i2cdetect -y -r 1
```

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/iic_detect.png"/>
</div>

Podemos ver que el dispositivo conectado a IIC0 está configurado en la dirección 0x08.

## Puerto de Expansión

La placa portadora Robotics j401 cuenta con un Conector de Expansión de Cámara para placa de extensión GMSL. Puede conectar y operar simultáneamente cuatro cámaras GMSL al mismo tiempo.

### Conexión de Hardware

Aquí está la ranura de conexión de la placa de expansión de cámara GMSL de la placa portadora Robotics j401 (necesitas preparar una placa de extensión con anticipación):

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/exb.png"/>
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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p1.png"/>
</div>

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/io_p2.png"/>
</div>

:::note
Hay tres archivos overlay en total, a saber Seeed GMSL 1X4 3G, Seeed GMSL 1X4 6G, Seeed GMSL 1X4, y Orbbec Gemini 335Lg. Estos corresponden a la cámara 3G de SG3S, la cámara 6G de SG2 y SG8S, y la cámara de Orbbec respectivamente. Como se muestra en la Figura 3, por favor configura el archivo io según el modelo de tu cámara.
:::

**paso 2.** Instala las herramientas de configuración de interfaz de video.

```bash
sudo apt update
sudo apt install v4l-utils
```

### Usar la cámara de Gemini 335Lg

```bash
#Download the Orbbec Gemini 335Lg visualization tool
wget https://github.com/orbbec/OrbbecSDK_v2/releases/download/v2.4.8/OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
#unzip and run the UI tool
unzip OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64.zip
cd OrbbecViewer_v2.4.8_202507031357_a1355db_linux_aarch64
./OrbbecViewer
```

La primera vez que lo enciendas, es posible que necesites actualizar el firmware.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/update.png"/>
</div>

Abriendo el flujo de datos, puedes ver el video de la cámara.
<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/g_camera.png"/>
</div>

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
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/camera1.png"/>
</div>

## Pantalla

El reComputer Jetson Robotics J401 está equipado con un DP1.4 (incluido en Type-C Host) para salida de pantalla de alta resolución.

## Recursos

- [Esquemático de la Placa Portadora reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Hoja de Datos de la Placa Portadora reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [Archivo 3D de reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Documento Mecánico-reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Catálogo de Productos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparación Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de Éxito Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson Una Página](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para atender diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
