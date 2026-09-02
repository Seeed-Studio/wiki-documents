---
description: Introducción a la placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor.
title: Introducción a reComputer Robotics J601
sidebar_label: Flashear JetPack
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robótica
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 08/28/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-08-28'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_robotics_j601_carrier_board_getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import J601DemoGrid from '@site/src/components/jetson/J601DemoGrid';

# Introducción a reComputer Robotics J601

<div align="center">
  <img width="1000" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg"/>
</div>

La reComputer J601 es una placa carrier de IA de borde compacta pero potente para Jetson AGX Thor, que ofrece hasta 2070 TFLOPS. Diseñada para desarrollo y producción, incorpora M.2 Key E/M/B, 4x 10Gb RJ45, 4×USB 3.2, HDMI 2.1, 8×GMSL y varias E/S, garantizando una integración fluida. Puede servir como el cerebro de un humanoide. Al ser compatible con frameworks de LLM y Physical AI como NVIDIA Isaac, Hugging Face, PyTorch y ROS2/1, conecta la IA con la robótica. Con un procesamiento en tiempo real optimizado, ejecuta visión por IA, transformers y modelos multimodales, desbloqueando IA avanzada para dispositivos de borde.

## Características

- Compatible con módulos **NVIDIA Jetson AGX Thor T5000 y T4000**
- Hasta **2070 TFLOPS** de rendimiento de IA
- Hasta **4x 10GbE RJ45** puertos
- **4x USB 3.2 Type-A** puertos de hasta 10Gbps
- Salida de pantalla **HDMI 2.1**
- **M.2 Key M** para SSD NVMe 2280 PCIe Gen 4
- **M.2 Key E** para módulos Wi‑Fi M.2 2230
- **M.2 Key B** para módulos 4G/5G
- Hasta **8x cámaras GMSL2** mediante dos conectores Mini-Fakra y placas de extensión GMSL
- E/S para robótica que incluye CAN aislado, RS-232/422/485, I2C, I2S, GPI y GPO
- Entrada de **19V a 48V DC** de amplio rango a través de XT30
- Plataforma de software: **JetPack 7.1**

## Especificaciones

<div class="table-center">
<table>
  <tbody>
    <tr>
      <td>Compatibilidad de módulo</td>
      <td>NVIDIA Jetson AGX Thor T5000 / T4000</td>
    </tr>
    <tr>
      <td>Tamaño de PCB</td>
      <td>168 mm x 155 mm (sin el módulo Jetson AGX Thor)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>USB</td>
      <td>4x USB 3.2 Type-A (10Gbps, Host), 1x USB 2.0 Type-C (Debug), 1x USB 3.0 Type-C (Recovery)</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td>4x RJ45 10GbE con T5000; 3x RJ45 10GbE con T4000</td>
    </tr>
    <tr>
      <td>M.2 Key M</td>
      <td>1x M.2 Key M para SSD NVMe 2280 PCIe Gen 4</td>
    </tr>
    <tr>
      <td>M.2 Key E</td>
      <td>1x M.2 Key E para módulo Wi‑Fi M.2 2230</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td>1x M.2 Key B para módulo 4G/5G</td>
    </tr>
    <tr>
      <td>Serie</td>
      <td>1x RS-232/422/485 (conector DB9)</td>
    </tr>
    <tr>
      <td>Puertos JST</td>
      <td>4x CAN con T5000 o 2x CAN con T4000, 1x RS-485, 1x I2S, 1x I2C, 4x GPI y 4x GPO</td>
    </tr>
    <tr>
      <td>Audio</td>
      <td>1x entrada de micrófono y 1x salida de audio</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td>1x conector de ventilador de 4 pines (12V PWM)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td>1x cabecera RTC de 2 pines</td>
    </tr>
    <tr>
      <td>LEDs</td>
      <td>1x LED PWR verde, 1x LED SSD verde y 1x LED USR RGB</td>
    </tr>
    <tr>
      <td>Botones</td>
      <td>1x botón de Recovery y 1x botón de Reset</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x conectores Mini-Fakra para hasta 8x cámaras GMSL2</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td>-10°C a 60°C con pasta térmica; -10°C a 55°C con una almohadilla térmica</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>XT30, 19V a 48V DC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

| **Vista lateral 1** |
|:---------:|
| ![fig1](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg) |
| **Vista lateral 2** |
| ![fig2](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg) |
| **Vista inferior** |
| ![fig3](https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg) |

## Flashear JetPack

Aquí mostraremos cómo flashear JetPack en un SSD NVMe conectado a la reComputer Robotics J6014 / J6015. Ambos dispositivos utilizan la placa carrier J601 y el procedimiento de flasheo es el mismo.

### Módulo compatible

- [Módulo NVIDIA Jetson T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html)
- [Módulo NVIDIA Jetson T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Robotics J6014 o J6015
- SSD interno NVMe M.2 2280
- Cable de transmisión de datos USB Type-C
- Al menos 220 GB de almacenamiento libre en el PC host

:::info
Recomendamos utilizar un host físico con Ubuntu en lugar de una máquina virtual. Seeed Jetson DevelopTool también es compatible con Windows a través de WSL2, pero un host nativo con Ubuntu ofrece la experiencia de flasheo más fiable.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (ordenador host) </td>
    </tr>
    <tr>
        <td > 20.04 </td>
        <td > 22.04 </td>
        <td > 24.04 </td>
    </tr>
    <tr>
        <td >JetPack 7.1</td>
        <td > </td>
        <td > ✅ </td>
        <td > ✅ </td>
    </tr>
  </tbody>
</table>

:::

### Elige un método de flasheo

Selecciona a continuación el flujo de trabajo gráfico de Seeed Jetson DevelopTool o el flujo de trabajo por línea de comandos.

<Tabs groupId="j601-flashing-method">

<TabItem value="software" label="Flasheo por software" default>

Seeed Jetson DevelopTool proporciona un flujo de trabajo gráfico guiado que descarga, verifica, extrae y flashea el firmware sin necesidad de comandos BSP. Instala la herramienta siguiendo la [guía de instalación de Seeed Jetson DevelopTool](/es/jetson_developtool_installation).

#### Tutorial en vídeo

<div class="video-container">
<iframe width="1071" height="803" src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flash Jetpack for reCompurer J601 by Jetson Develop Tool!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Flujo de trabajo de flasheo por software

<details>

<summary> Paso a paso </summary>

**Paso 1.** Inicia Seeed Jetson DevelopTool y abre **Flash Center**. Selecciona **reComputer J601** y **JetPack 7.1 (L4T 38.4.0)**.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg"/></div>

**Paso 2.** Conecta el PC host al **puerto de flasheo USB 3.0 Type-C**. Mantén pulsado el botón **RECOVERY**, conecta la fuente de alimentación de 19V a 48V DC a través de XT30 y suelta el botón después de dos segundos.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg"/></div>

**Paso 3.** Haz clic en **Detect Device**. Confirma que el módulo Jetson conectado se detecta (por ejemplo, **AGX Thor T5000**) y luego haz clic en **Next**.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg"/></div>

**Paso 4.** Haz clic en **Download / Prepare BSP**. La herramienta descarga el firmware, verifica su checksum SHA256 y extrae automáticamente el BSP.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg"/></div>

**Paso 5.** Haz clic en **Start Flash** y espera hasta que la interfaz indique que el flasheo se ha completado. No desconectes la fuente de alimentación ni el cable USB durante este proceso.

:::caution
El flasheo borra los datos del SSD NVMe de destino. Haz una copia de seguridad de los datos importantes antes de comenzar.
:::

**Paso 6.** Conecta la reComputer Robotics J601 a una pantalla HDMI y completa la configuración inicial del sistema.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</details>

</TabItem>

<TabItem value="command-line" label="Flasheo por línea de comandos">

Descarga y flashea la imagen de JetPack que coincida con el módulo Jetson de tu placa. Ambos productos utilizan la misma placa carrier J601; selecciona la pestaña correspondiente a tu módulo:

<Tabs groupId="j601-thor-module">

<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

#### Preparar la imagen de JetPack

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Módulo Jetson</th>
      <th>Producto</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T5000</td>
      <td>reComputer Robotics J6015</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAq5ofKK9Y1RaCzAfJ8-3J4ARhePBbGBc-mcjQ1bNAP0bY?e=CbmAN9" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>3f75780b43f6559bc950b6a97aa38fd6f61d4d001cce870bdfb498f64e6d18e5</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de JetPack es grande y puede tardar alrededor de 60 minutos en descargarse. Espera a que la descarga termine antes de extraer el archivo.
:::

Para verificar el firmware descargado, ejecuta `sha256sum <file>` en el host Ubuntu y compara el resultado con el valor SHA256 de la tabla.

#### Entrar en modo Force Recovery

:::info
Antes de flashear, asegúrate de que la placa esté en modo Force Recovery.
:::

**Paso 1.** Conecta el PC host con Ubuntu al **puerto de flasheo USB 3.0 Type-C** usando un cable de datos USB Type-C.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**Paso 2.** Mantén presionado el botón **RECOVERY**.

**Paso 3.** Conecta la fuente de alimentación (19V a 48V DC a través de XT30).

**Paso 4.** Suelta el botón **RECOVERY** después de dos segundos.

**Paso 5.** En el PC host, ejecuta `lsusb`. La siguiente entrada confirma que la placa está en modo Force Recovery:

- **0955:7026 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Flashear a Jetson

**Paso 1.** Extrae la imagen descargada:

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**Paso 2.** Flashea JetPack en el SSD NVMe:

```bash
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

El comando de flasheo suele tardar de 2 a 10 minutos. La siguiente salida indica un flasheo exitoso:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**Paso 3.** Conecta el reComputer Robotics J6015 a una pantalla HDMI y completa la configuración inicial del sistema.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

#### Preparar la imagen de JetPack

<div class="table-center">
<table style={{textAlign: 'center', tableLayout: 'fixed', width: '100%'}}>
  <colgroup>
    <col style={{width: '18%'}} />
    <col style={{width: '22%'}} />
    <col style={{width: '20%'}} />
    <col style={{width: '14%'}} />
    <col style={{width: '26%'}} />
  </colgroup>
  <thead>
    <tr>
      <th>Versión de JetPack</th>
      <th>Módulo Jetson</th>
      <th>Producto</th>
      <th>Enlace de descarga</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>7.1 (L4T 38.4.0)</td>
      <td>AGX Thor T4000</td>
      <td>reComputer Robotics J6014</td>
      <td>
        <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBofCO4bWF9SLdbLQE1V8DgAS1tW6-UmQGEH3ULOZ7W16o?e=zdnK3s" target="_blank" rel="noopener noreferrer">Download</a>
      </td>
      <td style={{overflowWrap: 'anywhere'}}>c63eddfe7005a088ab439c64fb5d3bf9a52b85d62d377c6a4bf829295f7222ef</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de JetPack es grande y puede tardar alrededor de 60 minutos en descargarse. Espera a que la descarga termine antes de extraer el archivo.
:::

Para verificar el firmware descargado, ejecuta `sha256sum <file>` en el host Ubuntu y compara el resultado con el valor SHA256 de la tabla.

#### Entrar en modo Force Recovery

:::info
Antes de flashear, asegúrate de que la placa esté en modo Force Recovery.
:::

**Paso 1.** Conecta el PC host con Ubuntu al **puerto de flasheo USB 3.0 Type-C** usando un cable de datos USB Type-C.

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg"/></div>

**Paso 2.** Mantén presionado el botón **RECOVERY**.

**Paso 3.** Conecta la fuente de alimentación (19V a 48V DC a través de XT30).

**Paso 4.** Suelta el botón **RECOVERY** después de dos segundos.

**Paso 5.** En el PC host, ejecuta `lsusb`. La siguiente entrada confirma que la placa está en modo Force Recovery:

- **0955:7226 NVIDIA Corp.**

<div align="center"><img width="700" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg"/></div>

#### Flashear a Jetson

**Paso 1.** Extrae la imagen descargada:

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
```

**Paso 2.** Flashea JetPack en el SSD NVMe:

```bash
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

El comando de flasheo suele tardar de 2 a 10 minutos. La siguiente salida indica un flasheo exitoso:

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

**Paso 3.** Conecta el reComputer Robotics J6014 a una pantalla HDMI y completa la configuración inicial del sistema.

<div align="center"><img width="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/></div>

</TabItem>

</Tabs>

⚙️ **Todos los archivos `.dts` y demás código fuente de las placas carrier Jetson de Seeed se pueden descargar desde** [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

</TabItem>

</Tabs>

:::info
Completa la **Configuración del sistema** según tus necesidades después del primer arranque.
:::

Para un uso detallado de las interfaces, consulta [Uso de interfaces de hardware de Robotics J601](/es/recomputer_jetson_robotics_j601_interfaces_usage).

## ¿Qué puedes hacer con J601?

Después de flashear JetPack, explora los wikis de demostración a continuación para ver qué puedes construir en reComputer Robotics J601. Estas tarjetas se generan automáticamente a partir de wikis publicados de **Application** de Jetson y **Other Devices** que mencionan **J601** o **Jetson Thor**.

<J601DemoGrid />

## Recursos

- [Hoja de datos de la placa carrier reComputer J601](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf)
- [Esquemático de la placa carrier reComputer J601](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf)
- [Archivo 3D de reComputer J601](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp)
- [Catálogo de productos Seeed NVIDIA Jetson](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf)
- [Casos de éxito de Seeed NVIDIA Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Hoja informativa Seeed Jetson AGX](https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf)
- [Código fuente del BSP Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Página de producto de la placa carrier reComputer J601](https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thor-p-6937.html)

## Soporte técnico

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
