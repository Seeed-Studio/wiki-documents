---
description: El reComputer Robotics J401 es una placa portadora de IA de borde de alto rendimiento diseñada para aplicaciones robóticas avanzadas. Soporta módulos NVIDIA Jetson Orin Nano y Orin NX en modo Super/MAXN, entregando hasta 157 TOPS de potencia de cómputo de IA. La placa ofrece amplias opciones de conectividad, incluyendo Ethernet Gigabit dual, múltiples puertos USB 3.2, CAN, ranuras M.2 para módulos 5G/Wi-Fi/BT, y soporte opcional para cámaras GMSL2. Pre-instalado con JetPack 6, asegura un despliegue sin problemas para el desarrollo robótico. El diseño robusto soporta amplias temperaturas de operación e incluye un disipador de calor pre-instalado con ventilador. La configuración involucra flashear el OS JetPack en un SSD NVMe usando una PC host Ubuntu compatible, seguido de configuración de hardware y uso de interfaces. Se proporcionan especificaciones detalladas de hardware, dibujos mecánicos y recursos técnicos para desarrolladores, junto con canales de soporte comunitario y técnico para resolución de problemas y discusión.
title: Introducción al reComputer Robotics
tags:
  - J401-Robotics carrier board
  - Jetson
  - Robotics
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /es/recomputer_robotics_j401_getting_started
last_update:
  date: 08/06/2025
  author: Zibo
---

<div style={{ textAlign: "justify" }}>
El reComputer Robotics J401 es una placa portadora de IA de borde compacta y de alto rendimiento diseñada para robótica avanzada. Compatible con módulos NVIDIA Jetson Orin Nano/Orin NX en modo Super/MAXN, entrega hasta 157 TOPS de rendimiento de IA. Equipado con amplias opciones de conectividad—incluyendo puertos Ethernet Gigabit duales, ranuras M.2 para módulos 5G y Wi-Fi/BT, 6 puertos USB 3.2, CAN, GMSL2 (vía expansión opcional), I2C, y UART—sirve como un cerebro robótico poderoso capaz de procesar datos complejos de varios sensores. Pre-instalado con JetPack 6 y Linux BSP, asegura un despliegue sin problemas.​
</div>

<div align="center">
  <img width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Características

- **Diseño de Hardware Robusto**: Una computadora de IA de borde compacta y de alto rendimiento con módulo NVIDIA® Jetson™ Orin™ NX 16GB en modo Super/MAXN, proporcionando hasta 157 TOPS de rendimiento de IA.
- **Múltiples Interfaces para robótica**: Incluyendo RJ45 dual, ranuras M.2 para módulos 5G/Wi-Fi/BT, 6x USB 3.2, 2x CAN, GMSL2(compra adicional), I2C, y UART, funcionando como un cerebro robótico poderoso.
- **Configuración de Software**: Pre-instalado con JetPack 6.2 y Linux BSP para despliegue sin problemas.
- **Aplicación y Beneficio**: Ideal para desarrollo rápido de robots autónomos, acelerando el tiempo de comercialización con interfaces listas para usar y marcos de IA optimizados.
- **Amplio Rango de Operación**: Opera de manera confiable en un rango de temperatura de -20°C a 60°C en modo 25W y -20°C a 50°C en modo 40W

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
      <td>6x USB 3.2 Type-A (5Gbps);<br />1x USB 3.0 Type-C (Host/DP 1.4);<br />1x USB 2.0 Type-C (Modo Dispositivo/Debug)</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td>1x 4 en 1 GMSL2 (mini fakra) (placa opcional)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td>2x CAN0 (XT30(2+2));<br />3x CAN1 (4-Pin GH 1.25 Header)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x DP1.4 (Type C Host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART 4-Pin GH 1.25 Header</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C 4-Pin GH 1.25 Header</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1x Conector de Ventilador 4-Pin (5V PWM);<br />1x Conector de Ventilador 4-Pin (12V PWM)</td>
    </tr>
    <tr>
      <td>Puerto de Extensión</td>
      <td>1x Header de Expansión de Cámara (para placa GMSL2)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x RTC 2-pin;<br />1x Socket RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td>3x LED (PWR, ACT, y LED de Usuario)</td>
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
      <th rowSpan="1">Alimentación</th>
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
      <td>1100g</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td>Escritorio, Montaje en pared</td>
    </tr>
    <tr>
      <th rowSpan="1">Temperatura de Operación</th>
      <td colSpan="2">-20℃~55℃ (Modo 25W);<br />-20℃~50℃ (Modo MAXN);<br />(con disipador de calor reComputer Robotics con ventilador)</td>
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

## Descripción General del Hardware

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-_J4011-3.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## Flashear OS JetPack

### Módulo Soportado

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Prerrequisitos

- PC host Ubuntu
- reComputer Robotics
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Cable de transmisión de datos USB Type-C

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
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWqAOoqYYxNAky0Dbo847q0BDWsiSBUmyrxAMzNV9SQyNw?e=ZuOFnx">Descargar</a></td>
      <td>c63d1219531245abecc7bbdcafc73d3<br />4f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ERy0O0zUQGlKh8cDHZIoSPEBcHFJOGY6rE0gVBGCE6tBvA?e=eDw71c">Descargar</a></td>
      <td>5d1f3cd28eb44ca60132c87ccce5aca<br />f806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EewEJTne6ltJlP0IDzahaCYB9rJWUIvKXe5b0p76rlYr_A?e=tsuNbP">Descargar</a></td>
      <td>e7f0c8e6b578d411f81122879f92c76<br />66adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EdXbblXVvqZDv3DqdJOR8u8BXV6rW6BVwoss0EMC-sLcfQ?e=WiW2F9">Descargar</a></td>
      <td> b08cbdad8ab6e50222146d3175a9d2<br />627d499bf1d67cfaf69cc737b5bfa9e33a</td>
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

### Entrar en Modo de Recuperación Forzada

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

**Paso 3.** Conecta la placa a la PC host Ubuntu con un cable de transmisión de datos USB Type-C.

**Paso 4.** En la PC host Linux, abre una ventana de Terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el SoM Jetson que uses, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La imagen a continuación es para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extraer el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-robo-orin-nano-8g-j401-6.2-36.4.3-2025-05-23.tar.gz
```

**Paso 2:** Ejecutar el siguiente comando para flashear el sistema jetpack al SSD NVMe:

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

**Paso 3:** Conectar el Robotics J401 a una pantalla usando el adaptador PD a HDMI para conectar a una pantalla que soporte entrada HDMI, o conectar directamente a una pantalla que soporte entrada PD usando el cable PD, y completar la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor completa la **Configuración del Sistema** según tus necesidades.
:::

## Uso de Interfaces de Hardware

:::info
Si quieres aprender más sobre las especificaciones detalladas y el uso de la interfaz de hardware, por favor consulta [este wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_robotics_j401_getting_started/#interfaces-usage).
:::

## Recursos

- [Esquemático de la Placa Portadora reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Hoja de Datos de la Placa Portadora reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
- [Archivo 3D de reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/recomputer_robotics_j401.stp)
- [Documento Mecánico-PCBA reComputer Robotics](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Robotics_PCBA.dxf)
- [Catálogo de Productos NVIDIA Jetson de Seeed](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed_NVIDIA_Jetson_Catalog_in_Robotics_and_Edge_AI.pdf)
- [Comparación de Nvidia Jetson](https://www.seeedstudio.com/blog/nvidia-jetson-comparison-nano-tx2-nx-xavier-nx-agx-orin/)
- [Casos de Éxito de Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Hoja Informativa de Seeed Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

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
