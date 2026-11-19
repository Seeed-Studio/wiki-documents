---
description: Primeros pasos con reComputer Robotics J50 Mini
title: Primeros pasos con reComputer Robotics J50 Mini
keywords:
  - reComputer Robotics
  - reComputer Robotics J50 Mini
  - Jetson
  - Primeros pasos
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg
slug: /ai_robotics_recomputer_j501_robotics_getting_started
sku: 100085113
last_update:
  date: 11/16/2026
  author: Shijun
createdAt: '2026-11-16'
updatedAt: '2026-11-16'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_robotics_j50_mini_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';
import { getL4TData } from '@site/src/components/jetson/DownloadLink';

# Primeros pasos con reComputer Robotics J50 Mini

<div align="center">
  <img width="600" alt="reComputer Mini J501 complete system" src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" />
</div>

reComputer Robotics J50 Mini (reComputer Mini J501) es un ordenador compacto de IA en el borde para robótica y desarrollo de IA embebida, disponible como **J5011 con NVIDIA Jetson AGX Orin 32GB** y **J5012 con NVIDIA Jetson AGX Orin 64GB**. Ambas configuraciones con GMSL incluyen un **SSD NVMe de 128GB** y una **placa de expansión GMSL de ocho canales**. La carcasa mide **119 × 119 × 100 mm** y pesa **1325 g**.

La plataforma se puede utilizar con NVIDIA Isaac ROS, ROS, PyTorch y otro software compatible con Jetson para percepción multicámara, integración de sensores y desarrollo de robótica.

:::note
Opciones de personalización disponibles: branding del logotipo, embalaje y flasheo de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5011-with-GMSL-Extension-p-6876.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Comprar J5011 · 32GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Comprar J5012 · 64GB 🖱️</font></span></strong></a>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Personalizar ahora ➜</font></span></strong></a>
</div>

## Características

- **Rendimiento AGX Orin:** Hasta 275 TOPS con el módulo de 64GB, compatible con cargas de trabajo de percepción e IA en el borde.
- **Carcasa compacta:** Huella de 119 × 119 mm para integración en robots con limitaciones de espacio.
- **Conectividad de cámara:** El J5012 con GMSL incluye la placa de expansión GMSL para hasta ocho cámaras GMSL2; utilice cámaras y controladores compatibles.
- **Expansión cableada e inalámbrica:** Redes de 10GbE y 1GbE, además de M.2 Key E para expansión Wi‑Fi/Bluetooth.
- **E/S para robótica:** CAN y RS485 aislados, entradas/salidas digitales, I2S, USB y HDMI.
- **Integración en sistemas de 48V:** Entrada de alimentación XT30 con un rango de funcionamiento especificado de 19–48V CC y una tensión máxima de entrada de 54V.

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Módulo de sistema Jetson AGX Orin</th></tr>
    <tr><th colSpan={2}>Especificaciones</th><th>reComputer Mini J5011</th><th>reComputer Mini J5012</th></tr>
    <tr><td colSpan={2}>Módulo</td><td>NVIDIA Jetson AGX Orin 32GB</td><td>NVIDIA Jetson AGX Orin 64GB</td></tr>
    <tr><td colSpan={2}>Rendimiento de IA</td><td>Hasta 200 TOPS</td><td>Hasta 275 TOPS</td></tr>
    <tr><td colSpan={2}>GPU</td><td>GPU NVIDIA Ampere de 1792 núcleos<br />56 Tensor Cores</td><td>GPU NVIDIA Ampere de 2048 núcleos<br />64 Tensor Cores</td></tr>
    <tr><td colSpan={2}>Frecuencia máxima de GPU</td><td>930 MHz</td><td>1.3 GHz</td></tr>
    <tr><td colSpan={2}>CPU</td><td>Arm Cortex-A78AE de 8 núcleos</td><td>Arm Cortex-A78AE de 12 núcleos</td></tr>
    <tr><td colSpan={2}>Frecuencia máxima de CPU</td><td colSpan={2}>2.2 GHz</td></tr>
    <tr><td colSpan={2}>Memoria</td><td>32GB LPDDR5 de 256 bits<br />204.8 GB/s</td><td>64GB LPDDR5 de 256 bits<br />204.8 GB/s</td></tr>
    <tr><td colSpan={2}>Almacenamiento del módulo</td><td colSpan={2}>64GB eMMC 5.1</td></tr>
    <tr><td colSpan={2}>Codificador de vídeo</td><td>1 × 4K60 / 3 × 4K30 (H.265)<br />6 × 1080p60 / 12 × 1080p30 (H.265)</td><td>2 × 4K60 / 4 × 4K30 (H.265)<br />8 × 1080p60 / 16 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>Decodificador de vídeo</td><td>1 × 8K30 / 2 × 4K60 / 4 × 4K30 (H.265)<br />9 × 1080p60 / 18 × 1080p30 (H.265)</td><td>1 × 8K30 / 3 × 4K60 / 7 × 4K30 (H.265)<br />11 × 1080p60 / 22 × 1080p30 (H.265)</td></tr>
    <tr><td colSpan={2}>Potencia del módulo</td><td>15W / 40W</td><td>15W / 60W</td></tr>
    <tr><td colSpan={2}>JetPack</td><td colSpan={2}>JetPack 6.2 preinstalado; compatible con JetPack 7.2</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Placa portadora</th></tr>
    <tr><td colSpan={2}>Almacenamiento</td><td colSpan={2}>Incluye SSD NVMe de 128GB<br />1 × M.2 Key M para SSD NVMe 2280</td></tr>
    <tr><td rowSpan={2} style={{verticalAlign: 'middle'}}>Redes</td><td>Ethernet</td><td colSpan={2}>1 × RJ45 10GbE; 1 × RJ45 1GbE</td></tr>
    <tr><td>Expansión inalámbrica</td><td colSpan={2}>1 × M.2 Key E para un módulo Wi‑Fi/Bluetooth</td></tr>
    <tr><td rowSpan={10} style={{verticalAlign: 'middle'}}>E/S</td><td>USB</td><td colSpan={2}>2 × USB 3.2 Gen 2 Tipo A (10Gbps)<br />1 × USB 2.0 Tipo C (Depuración)<br />1 × USB 3.0 Tipo C (Recuperación)</td></tr>
    <tr><td>Pantalla</td><td colSpan={2}>1 × HDMI 2.1</td></tr>
    <tr><td>CAN</td><td colSpan={2}>2 × CAN aislado</td></tr>
    <tr><td>RS485</td><td colSpan={2}>1 × RS485 aislado</td></tr>
    <tr><td>E/S digital</td><td colSpan={2}>4 × GPI (3.3V); 4 × GPO (3.3V)</td></tr>
    <tr><td>I2S</td><td colSpan={2}>1 × I2S (3.3V)</td></tr>
    <tr><td>Ventilador</td><td colSpan={2}>1 × conector de ventilador de 4 pines (12V PWM)</td></tr>
    <tr><td>RTC</td><td colSpan={2}>1 × cabecera RTC de 2 pines</td></tr>
    <tr><td>Indicadores</td><td colSpan={2}>LED PWR, ACT y USR</td></tr>
    <tr><td>Botones</td><td colSpan={2}>1 × Reset; 1 × Recovery</td></tr>
    <tr><td colSpan={2}>Entrada de alimentación</td><td colSpan={2}>1 × XT30; 19–48V CC; entrada máxima 54V</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Placa de expansión GMSL</th></tr>
    <tr><td colSpan={2}>Conectividad GMSL</td><td colSpan={2}>Incluida en ambas configuraciones con GMSL<br />2 × conectores Mini‑Fakra para hasta 8 cámaras GMSL2</td></tr>
    <tr><th colSpan={4} style={{fontSize: '24px', fontWeight: 'bold'}}>Otros</th></tr>
    <tr><td rowSpan={3} style={{verticalAlign: 'middle'}}>Mecánico</td><td>Dimensiones (W × D × H)</td><td colSpan={2}>119 × 119 × 100 mm</td></tr>
    <tr><td>Peso</td><td colSpan={2}>1325 g</td></tr>
    <tr><td>Instalación</td><td colSpan={2}>Escritorio</td></tr>
    <tr><td colSpan={2}>Temperatura de funcionamiento</td><td colSpan={2}>−10°C a 60°C</td></tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 1" src="https://media-cdn.seeedstudio.com/cdn-cgi/image/format=auto%2Cwidth=3840%2Cquality=100/media/wysiwyg/111-photo/1.hard.100020407.png" />
</div>

<div align="center">
  <img width="800" alt="reComputer Mini J501 hardware overview 2" src="https://www.seeedstudio.com/media/catalog/product/h/a/hardware_img_2.jpg" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board top view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/top.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board side view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/side.png" />
</div>

<div align="center">
  <img width="800" alt="Mini J501 carrier board bottom view" src="https://files.seeedstudio.com/wiki/recomputer-j501-mini/bottom.png" />
</div>


## Flashear el sistema operativo JetPack

Esta sección muestra cómo flashear la imagen del sistema Mini J501 en el SSD NVMe de reComputer Robotics J50 Mini.

### Módulos NVIDIA Jetson compatibles

- [Módulo NVIDIA® Jetson AGX Orin™ 64GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-64GB-p-5957.html)
- [Módulo NVIDIA® Jetson AGX Orin™ 32GB](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Orin-Module-32GB-p-5956.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Robotics J50 Mini con su módulo Jetson AGX Orin, SSD NVMe y fuente de alimentación compatible
- Cable de transmisión de datos USB Tipo C

:::info

Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowSpan="2"> Versión de JetPack </td>
        <td class="dbon" colSpan="4"> Versión de Ubuntu (ordenador host) </td>
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

### Preparar la imagen de JetPack

Aquí necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
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
      <td><a href={getL4TData("j501mini-agx-orin-64g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "39.2.0").mainlink}>Download</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "39.2.0").sha256}</code></td>
    </tr>
    <tr>
      <td rowSpan={2}>6.2.1</td>
      <td> AGX Orin 64GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").mainlink}>Descargar</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-64g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
    <tr>
      <td>AGX Orin 32GB</td>
      <td>✅</td>
      <td><a href={getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").mainlink}>Descargar</a></td>
      <td><code style={{overflowWrap: 'anywhere'}}>{getL4TData("j501mini-agx-orin-32g", "36.4.4 (GMSL✅)").sha256}</code></td>
    </tr>
  </tbody>
</table>
</div>

:::danger
Los archivos de imagen de JetPack son grandes y pueden tardar alrededor de 60 minutos en descargarse. Espera a que la descarga se complete.
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

**Paso 1.** Mantén presionado el botón **REC**.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface2.png" />
</div>

**Paso 2.** Enciende la carrier board conectando el cable de alimentación y luego suelta el botón **REC**.

**Paso 3.** Conecta la placa al PC host con Ubuntu con un cable de transmisión de datos USB Type-C.

<div align="center">
  <img width="600" src="https://files.seeedstudio.com/wiki/other/recomputer-mini-j501-flash-Interface1.png" />
</div>

**Paso 4.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo force recovery.

- Para AGX Orin 32GB: **0955:7223 NVidia Corp**
- Para AGX Orin 64GB: **0955:7023 NVidia Corp**

La siguiente imagen es para AGX Orin 32GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J501/lsusb.png"/>
</div>

</details>

### Flashear a Jetson paso a paso

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
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta reComputer Robotics J50 Mini a una pantalla mediante HDMI y luego completa la configuración inicial del sistema:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **System Configuration** según tus necesidades.
:::

**Paso 4 (opcional):** Instala el NVIDIA JetPack SDK. Abre una terminal en el Jetson y ejecuta:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso de interfaces de hardware

:::info[Guía de interfaces de hardware]
**Haz clic en el botón de abajo para abrir la guía de interfaces de la Mini J501 para distribuciones de pines de conectores, cableado e instrucciones de uso paso a paso.**
:::

<div style={{display: 'flex', justifyContent: 'center', margin: '1rem 0'}}>
  <a className="button button--primary button--lg" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: '1.4', padding: '0.9rem 1.5rem'}} href="https://wiki.seeedstudio.com/es/recomputer_j501_mini_getting_started/#-interfaces-usage" target="_blank" rel="noopener noreferrer">
    <span>Abrir guía de interfaces de hardware ↗</span>
  </a>
</div>

## Recursos

- [Código fuente del BSP de Seeed Jetson](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Manual de usuario del sistema completo y hoja de datos](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Mini_J501_Datasheet.pdf)
- [Esquemático de la carrier board Mini J501](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Mini%20J501%20Carrier%20Board_Rev1.0_SCH_251027.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Para soporte técnico y debates sobre el producto, utiliza los siguientes canales.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum" aria-label="Seeed Studio forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email" aria-label="Contact Seeed Studio"></a>
</div>

<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord" aria-label="Seeed Studio Discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion" aria-label="GitHub discussions"></a>
</div>
