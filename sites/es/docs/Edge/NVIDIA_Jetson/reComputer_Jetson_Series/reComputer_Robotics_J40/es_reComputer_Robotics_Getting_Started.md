---
description: La reComputer Robotics J401 es una placa portadora de IA de borde de alto rendimiento diseñada para aplicaciones avanzadas de robótica. Es compatible con los módulos NVIDIA Jetson Orin Nano y Orin NX en modo Super/MAXN, ofreciendo hasta 157 TOPS de potencia de cómputo de IA. La placa ofrece amplias opciones de conectividad, incluyendo doble Ethernet Gigabit, múltiples puertos USB 3.2, CAN, ranuras M.2 para módulos 5G/Wi-Fi/BT y compatibilidad opcional con cámaras GMSL2. Con JetPack 6 preinstalado, garantiza un despliegue fluido para el desarrollo de robótica. El diseño robusto admite amplios rangos de temperatura de funcionamiento e incluye un disipador de calor con ventilador preinstalado. La configuración implica grabar el sistema operativo JetPack en un SSD NVMe usando un PC host Ubuntu compatible, seguido de la configuración del hardware y el uso de las interfaces. Se proporcionan especificaciones detalladas de hardware, dibujos mecánicos y recursos técnicos para los desarrolladores, junto con canales de soporte técnico y de comunidad para la resolución de problemas y discusión.
title: Introducción a reComputer Robotics
tags:
  - Placa portadora J401-Robotics
  - Jetson
  - Robótica
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
sku: 100071398, 114110310, 100026552
last_update:
  date: 08/06/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
La reComputer Robotics J401 es una placa portadora de IA de borde compacta y de alto rendimiento diseñada para robótica avanzada. Compatible con los módulos NVIDIA Jetson Orin Nano/Orin NX en modo Super/MAXN, ofrece hasta 157 TOPS de rendimiento de IA. Equipada con amplias opciones de conectividad —incluidos dos puertos Ethernet Gigabit, ranuras M.2 para módulos 5G y Wi-Fi/BT, 6 puertos USB 3.2, CAN, GMSL2 (mediante expansión opcional), I2C y UART— funciona como un potente cerebro robótico capaz de procesar datos complejos de varios sensores. Con JetPack 6 y Linux BSP preinstalados, garantiza un despliegue fluido.​
</div>

<div align="center">
  <img width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Características

- **Diseño de hardware robusto**: Un ordenador de IA de borde compacto y de alto rendimiento con módulo NVIDIA® Jetson™ Orin™ NX 16GB en modo Super/MAXN, que proporciona hasta 157 TOPS de rendimiento de IA.
- **Múltiples interfaces para robótica**: Incluye doble RJ45, ranuras M.2 para módulos 5G/Wi-Fi/BT, 6x USB 3.2, 2x CAN, GMSL2 (compra adicional), I2C y UART, funcionando como un potente cerebro robótico.
- **Configuración de software**: Con JetPack 6.2 y Linux BSP preinstalados para un despliegue fluido.
- **Aplicaciones y ventajas**: Ideal para el desarrollo rápido de robots autónomos, acelerando el tiempo de salida al mercado con interfaces listas para usar y marcos de IA optimizados.
- **Amplio rango de funcionamiento**: Funciona de forma fiable en un rango de temperatura de -20°C a 60°C en modo de 25W y de -20°C a 50°C en modo de 40W

## Especificación

### Especificaciones de la placa portadora

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
      <td>1x M.2 KEY M PCIe (incluye SSD M.2 NVMe 2280 de 128G)</td>
    </tr>
    <tr>
      <th rowSpan="3">Red</th>
      <td>M.2 KEY E</td>
      <td>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>M.2 KEY B</td>
      <td>1x M.2 Key B para módulo 5G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>2x RJ45 Ethernet Gigabit</td>
    </tr>
    <tr>
      <th rowSpan="13">I/O</th>
      <td>USB</td>
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Device Mode/Debug)</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td>1x 4 en 1 GMSL2 (mini fakra) (placa opcional)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (conector GH 1.25 de 4 pines)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x DP1.4 (Host Type C)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART conector GH 1.25 de 4 pines</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C conector GH 1.25 de 4 pines</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1x conector de ventilador de 4 pines (5V PWM);<br />1x conector de ventilador de 4 pines (12V PWM)</td>
    </tr>
    <tr>
      <td>Puerto de expansión</td>
      <td>1x cabecera de expansión de cámara (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC de 2 pines;<br />1x zócalo RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT y LED de usuario)</td>
    </tr>
    <tr>
      <td>Botón de orificio</td>
      <td>1x PWR;<br />1x RESET</td>
    </tr>
    <tr>
      <td>Interruptor DIP</td>
      <td>1x REC</td>
    </tr>
    <tr>
      <td>Agujero para antena</td>
      <td>5x agujero para antena</td>
    </tr>
    <tr>
      <th rowSpan="1">Alimentación</th>
      <td colSpan="2">19-54V XT30(2+2) (incluye cable XT30 a conector DC 5525)</td>
    </tr>
    <tr>
      <th rowSpan="1">Versión de Jetpack</th>
      <td colSpan="2">Jetpack 6</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecánico</th>
      <td>Dimensiones (W x D x H)</td>
      <td>115mm x 115mm x 38mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td>1100g</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td>Escritorio, montaje en pared</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de funcionamiento</th>
      <td colSpan="2">-20℃~55℃ (modo 25W);<br />-20℃~50℃ (modo MAXN);<br />(con disipador de calor reComputer Robotics con ventilador)</td>
    </tr>
    <tr>
      <th rowSpan="1">Garantía</th>
      <td>2 años</td>
    </tr>
    <tr>
      <th rowSpan="1">Certificación</th>
      <td>RoHS, REACH, CE, FCC, UKCA, KC</td>
    </tr>
  </tbody>
</table>

## Descripción general del hardware

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-_J4011-3.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## Grabar el sistema operativo JetPack

### Módulo compatible

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Robotics
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Cable de transmisión de datos USB Type-C

:::info

Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (ordenador host) </td>
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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td>3dc9d5b27e01f223e6d75b50a8cd5fa3<br />3b0fb259018011418f0692ff0eb91a54</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td>9b8a11bfb335fd159bbc2f29ef47f3d0<br />0d94a88c190a58ea94762954c476c176</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td>dade14539ef525506dba4f59a2e99254<br />48621d89db52b8a94417f438c0cf8024</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">Download</a></td>
      <td>2ed5792564202430c1550183158d2f4a<br />6c47d65af248a634cf1d4d13ee465bf4</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de Jetpack6 tiene un tamaño aproximado de **14.2GB** y debería tardar alrededor de 60 minutos en descargarse. Por favor, espera pacientemente a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar en modo Force Recovery

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo force recovery.
:::

<details>

<summary> Paso a paso </summary>

**Paso 1.** Cambia el interruptor al modo RESET.

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Paso 2.** Enciende la placa portadora conectando el cable de alimentación.

**Paso 3.** Conecta la placa al PC host con Ubuntu con un cable de transmisión de datos USB Type-C.

**Paso 4.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto incluye una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo force recovery.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-gmsl-6.2-36.4.3-2026-02-06.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema JetPack en el SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-robotics-j401 
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta el Robotics J401 a una pantalla usando el adaptador de PD a HDMI para conectarlo a una pantalla que admita entrada HDMI, o conéctalo directamente a una pantalla que admita entrada PD usando el cable PD, y completa la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **System Configuration** según tus necesidades.
:::

## Uso de interfaces de hardware

:::info
Si quieres aprender más sobre las especificaciones detalladas y el uso de la interfaz de hardware, consulta [este wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_robotics_j401_getting_started/#uso-de-interfaces).
:::

## Recursos

- [Esquemático de la Carrier Board reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Hoja de datos de la Carrier Board reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [Archivo 3D de reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Documento mecánico - reComputer Robotics PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Catálogo de productos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparación de Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de éxito de Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
