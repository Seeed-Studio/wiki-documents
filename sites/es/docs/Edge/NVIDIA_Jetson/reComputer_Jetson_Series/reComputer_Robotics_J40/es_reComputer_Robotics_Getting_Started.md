---
description: "Comienza con reComputer Robotics J401: especificaciones, módulos Orin Nano y NX, flasheo de JetPack 7.2, descripción general del hardware y comprobaciones del primer arranque."
title: Introducción a reComputer Robotics
tags:
  - Placa carrier J401-Robotics
  - Jetson
  - Robótica
  - reComputer
  - reComputer Robotics
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/recomputer-robotics_2.webp
slug: /recomputer_robotics_j401_getting_started
sku: 100071398, 114110310, 100026552
last_update:
  date: 10/19/2026
  author: Zibo
createdAt: '2025-08-06'
updatedAt: '2026-10-19'
url: https://wiki.seeedstudio.com/es/recomputer_robotics_j401_getting_started/
---
<div style={{ textAlign: "justify" }}>
La reComputer Robotics J401 es una placa carrier compacta y de alto rendimiento para computación de borde con IA, diseñada para robótica avanzada. Compatible con los módulos NVIDIA Jetson Orin Nano/Orin NX en modo Super/MAXN, ofrece hasta 157 TOPS de rendimiento de IA. Equipada con amplias opciones de conectividad —incluidos dos puertos Ethernet Gigabit, ranuras M.2 para módulos 5G y Wi‑Fi/BT, 6 puertos USB 3.2, CAN, GMSL2 (mediante expansión opcional), I2C y UART— funciona como un potente cerebro robótico capaz de procesar datos complejos de diversos sensores. Con JetPack 6 y Linux BSP preinstalados, garantiza un despliegue sin complicaciones.​
</div>

<div align="center">
  <img alt="Carcasa de reComputer Robotics J401 con la insignia NVIDIA Jetson Orin Nano / Orin NX, puertos frontales visibles" width ="600" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114110310-recomputer-robotics_2.jpg"/>  
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

<!-- Buy links -->

## Características

- **Diseño de hardware robusto**: Un ordenador compacto y de alto rendimiento para computación de borde con IA, con módulo NVIDIA® Jetson™ Orin™ NX 16GB en modo Super/MAXN, que proporciona hasta 157 TOPS de rendimiento de IA.
- **Múltiples interfaces para robótica**: Incluye doble RJ45, ranuras M.2 para módulos 5G/Wi‑Fi/BT, 6x USB 3.2, 2x CAN, GMSL2 (compra adicional), I2C y UART, funcionando como un potente cerebro robótico.
- **Configuración de software**: Preinstalado con JetPack 6.2 y Linux BSP para un despliegue sin interrupciones.
- **Aplicaciones y ventajas**: Ideal para el desarrollo rápido de robots autónomos, acelerando el tiempo de salida al mercado con interfaces listas para usar y frameworks de IA optimizados.
- **Amplio rango de funcionamiento**: Funciona de forma fiable en un rango de temperatura de -20°C a 60°C en modo de 25W y de -20°C a 50°C en modo de 40W

## Especificación

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
      <th rowSpan="13">E/S</th>
      <td>USB</td>
      <td>6x USB 3.2 Tipo A (5Gbps);<br />1x USB 3.0 Tipo C (Host/DP 1.4);<br />1x USB 2.0 Tipo C (Modo dispositivo/Depuración)</td>
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
      <td>1x DP1.4 (Host Tipo C)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td>1x UART con conector GH 1.25 de 4 pines</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td>2x I2C con conector GH 1.25 de 4 pines</td>
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
      <td colSpan="2">JetPack 6 preinstalado; compatible con JetPack 7.2</td>
    </tr>
    <tr>
      <th rowSpan="3">Mecánico</th>
      <td>Dimensiones (An x Pr x Al)</td>
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
      <td colSpan="2">-20℃~60℃ (Modo 25W);<br />-20℃~55℃ (Modo 40W);<br />-20℃~50℃ (Modo MAXN);<br />(con disipador de calor reComputer Robotics con ventilador)</td>
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
  <img alt="Panel frontal de la reComputer Robotics J401 con CAN0 y CAN1 indicados" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-114110308_1.jpeg"/>  
</div>

<div align="center">
  <img alt="Vista trasera de la placa carrier J401 etiquetada con el módulo Orin, 2x XT30, cabeceras CAN, UART, IIC y los conectores de ventilador PWM de 5V/12V" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-1.jpeg"/>  
</div>

<div align="center">
  <img alt="Vista superior de la placa carrier J401 etiquetada con los USB, RTC, ranuras M.2 Key B/E/M, RJ45, cabecera de expansión de cámara e interruptor DIP" width ="1000" src="https://media-cdn.seeedstudio.com/media/wysiwyg/upload/image-robotic-2.jpeg"/>  
</div>

## Flashear el sistema operativo JetPack

### Módulo compatible

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Robotics
- Módulo NVIDIA® Jetson Orin™ Nano/NX
- Cable de transmisión de datos USB Tipo C

:::info

Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="4"> Versión de Ubuntu (ordenador host) </td>
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

<p><strong>Nota:</strong> Para JetPack 7.2, Ubuntu 24.04 solo es compatible para el flasheo y la instalación de componentes en el dispositivo de destino. Utiliza Ubuntu 20.04 o 22.04 si necesitas componentes de desarrollo en el host.</p>

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
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBwi3AQXJiaTZiPQaKocDSkAciLsok9znKGnAPczuZ_IfY?e=S2v5QV">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>c63d1219531245abecc7bbdcafc73d34<br />f75547454c7af85de40f08396a87e5ee</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQB8NF028_DESZJ9WwSg2Q34AVCNXeZFkwJi8pbvCOcX4cI?e=Zahpfm">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>5d1f3cd28eb44ca60132c87ccce5acaf<br />806ee945b486df9061a34de73fbb582b</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAakIBc6l2wS7qKAy-1ZeHPAbTtT8XLYaIgITvBGy8vezo?e=mPygXS">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>e7f0c8e6b578d411f81122879f92c766<br />6adfada5ed493a4cc458dc169ca8c1b7</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBnWlTaU6nIQLDOcM2KRQM6AQ6A-ODC8DnWFKRSfW8vRmc?e=1AAVH8">Download</a></td>
      <td style={{overflowWrap: 'anywhere'}}>b08cbdad8ab6e50222146d3175a9d262<br />7d499bf1d67cfaf69cc737b5bfa9e33a</td>
    </tr>
    <tr>
      <td rowSpan={4}>7.2</td>
      <td> Orin Nano 4GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCXU7mPG_OyR7z-VhF3E5j8AcmgsCPAZAuXSdKduZUKtHQ">Download</a></td>
      <td>6c499899d6c00a1661a48974d4dfc734<br />e9cbfefc06fc9c5c02ac7040dd1f2eb8</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBxz11HG6naSak2wIytiRbXAaqxhsgIWFaVR9H9GfGWqus">Download</a></td>
      <td>23b68b43e630d166e5079f72509c71ea<br />0e13f76e372ddd06fe22df5494ad3f41</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBw84cKdsnuRYQLA1pkfg3mAY1x0HW0UMppZbnaDBaV6XI">Descargar</a></td>
      <td>2712fe373afb3dff8202cdd9288b266f<br />080b76837eb13161918efd80111d9035</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td>✅</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/dayu_li_seeedstudio88_onmicrosoft_com/IQA9PyE77GhDQLTpgDmAZ8kzAU2JC-fRK_GfqDy8ureIs1o?e=hYSAit">Descargar</a></td>
      <td>f09b3465e7de1032f625ae0f816a2f3c<br />fa2a470ee5fdd215840375529a8771db</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de JetPack es grande y puede tardar alrededor de 60 minutos en descargarse. Por favor, espera a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en el wiki, confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar en modo de recuperación forzada

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<details>

<summary> Paso a paso </summary>

**Paso 1.** Cambia el interruptor al modo RESET.

<div align="center">
  <img alt="Placa portadora J401 con el interruptor ajustado al modo RESET y el puerto de flasheo USB Type-C marcado" width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/flash1.jpg" />
</div>

**Paso 2.** Enciende la placa portadora conectando el cable de alimentación.

**Paso 3.** Conecta la placa al PC host con Ubuntu con un cable USB Type-C de transmisión de datos.

**Paso 4.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que uses, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es para Orin Nano 8GB

<div align="center">
  <img alt="Salida de lsusb con el dispositivo NVIDIA Corp. APX resaltado, confirmando que la placa está en modo de recuperación" width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
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

<div align="center"><img alt="Registro de la terminal del script de flasheo que termina con el mensaje de que el flasheo se completó" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta el Robotics J401 a una pantalla usando el adaptador de PD a HDMI para conectarlo a una pantalla que admita entrada HDMI, o conéctalo directamente a una pantalla que admita entrada PD usando el cable PD, y completa la configuración inicial:

<div align="center">
  <img alt="Asistente de configuración de primer arranque de JetPack 6 en una pantalla conectada por HDMI" width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Por favor, completa la **Configuración del sistema** según tus necesidades.
:::

## Uso de interfaces de hardware

:::info
Si quieres obtener más información sobre las especificaciones detalladas y el uso de la interfaz de hardware, consulta [este wiki](https://wiki.seeedstudio.com/es/recomputer_jetson_robotics_j401_getting_started/#uso-de-interfaces).
:::

## Preguntas frecuentes

**¿Qué viene preinstalado en el dispositivo?**
JetPack 6.2 con el Seeed Linux BSP viene preinstalado, por lo que la unidad arranca en el escritorio de Ubuntu sin necesidad de flashear. JetPack 7.2 es compatible, pero debe flashearse desde un PC host.

**¿Qué variantes de módulo puedo pedir?**
Orin Nano 4GB, Orin Nano 8GB, Orin NX 8GB y Orin NX 16GB. Las unidades construidas con una placa de expansión de cámara GMSL usan una imagen JetPack 6.2 independiente que incluye el controlador GMSL.

**¿Qué versión de Ubuntu host debo usar para flashear JetPack 7.2?**
Ubuntu 20.04, 22.04 y 24.04 funcionan para el flasheo y los componentes del lado del objetivo. Ubuntu 24.04 se limita a esos dos pasos: usa 20.04 o 22.04 si el host también necesita componentes de desarrollo.

**¿Necesito un paso de recuperación por separado antes de flashear?**
Sí. Mueve el interruptor al modo RESET, conecta el cable de datos USB Type-C al host y confirma que el módulo aparece en `lsusb` antes de ejecutar el script de flasheo.

**¿Dónde están los pinouts de las interfaces y los comandos de prueba?**
Se encuentran en la página de interfaces de hardware, enlazada en Recursos relacionados. Cubre M.2 Key M/B/E, CAN y CAN FD, UART, I2C, USB, Ethernet y el conector de 40 pines.

## Recursos relacionados

- [Uso de interfaces de hardware de reComputer Robotics J401](/es/recomputer_robotics_j401_getting_started/)
- [Ejecutar múltiples cámaras GMSL en Jetson con la placa de expansión GMSL](/es/multiple_cameras_with_jetson/)
- [Implementar comunicación EtherCAT en reComputer](/es/recomputer_ethercat_communication/)
- [Página de producto de reComputer Robotics J4012](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)
- [Repositorio y debates de wiki-documents](https://github.com/Seeed-Studio/wiki-documents/discussions/69)

## Recursos

- [Esquemático de la placa portadora reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Robotics%20J401_V1.0_SCH_250421.pdf)
- [Hoja de datos de la placa portadora reComputer Robotics J401](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_robotics_J401_datasheet.pdf)
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
