---
description: Introducción a la placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor.
title: Introducción a reComputer Robotics J601
keywords:
  - reComputer Robotics J601
  - AGX Thor
  - Jetson
  - Carrier Board
  - Robotics
image: https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg
slug: /jetson/recomputer_robotics_j601/getting_started
aliases:
  - /ai_robotics_recomputer_robotics_j601_carrier_board_getting_started
sku: 100060965
last_update:
  date: 10/22/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-22'
url: https://wiki.seeedstudio.com/es/jetson/recomputer_robotics_j601/getting_started/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {roboticsJ601DocNav} from '@site/src/data/jetson/productDocNavigation';

# Introducción a reComputer Robotics J601

<JetsonProductDocNav {...roboticsJ601DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">Robótica y IA Física · NVIDIA Jetson AGX Thor</span>
    <h2>Conecta percepción y control en una sola placa carrier para robótica</h2>
    <p>La placa carrier reComputer Robotics J601 es compatible con los módulos NVIDIA Jetson AGX Thor T5000 y T4000 para percepción multicámara, fusión de sensores y desarrollo de IA incorporada. Combina Ethernet de alta velocidad, expansión de cámaras GMSL2 e I/O robótico aislado con la plataforma de software Jetson.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">Comprar una · Placa carrier J601 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Comenzar con JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="Placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>Hasta 2070 TFLOPS</strong><span>Rendimiento de IA con un módulo Jetson AGX Thor T5000</span></div>
  <div className="jetson-product-fact"><strong>Hasta 4× 10GbE</strong><span>Cuatro puertos RJ45 con T5000; tres con T4000</span></div>
  <div className="jetson-product-fact"><strong>Hasta 8× GMSL2</strong><span>Entrada multicámara a través de dos placas de extensión GMSL</span></div>
  <div className="jetson-product-fact"><strong>19–48 V CC</strong><span>Entrada de amplio rango mediante un conector de alimentación XT30</span></div>
</div>

## Elige tu configuración Jetson

La J601 es una **placa carrier**. Selecciona un módulo Jetson AGX Thor compatible, un SSD NVMe y una solución de refrigeración para tu montaje. Los nombres J6015 y J6014 que aparecen a continuación identifican las configuraciones específicas de módulo y los paquetes BSP utilizados en esta guía.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuración T5000</span>
    <h3>reComputer Robotics J6015</h3>
    <p>Utiliza el BSP T5000 para la configuración con cuatro puertos 10GbE activos y cuatro interfaces CAN aisladas.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuración T4000</span>
    <h3>reComputer Robotics J6014</h3>
    <p>Utiliza el BSP T4000 para la configuración con tres puertos 10GbE activos y dos interfaces CAN aisladas.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

Módulos compatibles: [NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) y [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html).

## Por qué reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Percepción multicámara</strong><span>Las placas de extensión GMSL admiten hasta ocho cámaras GMSL2 para percepción envolvente y fusión de sensores.</span></div>
  <div className="jetson-product-feature"><strong>Red de alta velocidad</strong><span>Hasta cuatro conexiones RJ45 10GbE transportan datos entre sensores, nodos de cómputo y sistemas de desarrollo.</span></div>
  <div className="jetson-product-feature"><strong>I/O para robótica</strong><span>CAN FD aislado, RS-232/422/485, I2C, I2S e I/O digital conectan controladores, sensores y actuadores.</span></div>
  <div className="jetson-product-feature"><strong>Expansión modular</strong><span>M.2 Key M admite un SSD NVMe 2280; Key E y Key B admiten módulos Wi‑Fi/Bluetooth y 4G/5G compatibles.</span></div>
  <div className="jetson-product-feature"><strong>Conectividad para desarrollo</strong><span>Cuatro puertos USB 3.2 Tipo A y HDMI 2.1 conectan periféricos y una pantalla, con puertos USB‑C separados para depuración y recuperación.</span></div>
  <div className="jetson-product-feature"><strong>Flujos de trabajo de IA física</strong><span>Desarrolla sobre Jetson con frameworks como NVIDIA Isaac, ROS, PyTorch y Hugging Face, siguiendo los requisitos de plataforma de cada framework.</span></div>
</div>

## Especificaciones

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">Interfaz / Propiedad</th><th scope="col">Placa carrier J601</th></tr></thead>
  <tbody>
    <tr>
      <td>Compatibilidad de módulos</td>
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
      <td>4x USB 3.2 Tipo A (10Gbps, Host), 1x USB 2.0 Tipo C (Debug), 1x USB 3.0 Tipo C (Recovery)</td>
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
      <td>1x conector de ventilador de 4 pines (PWM de 12V)</td>
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
      <td>1x botón Recovery y 1x botón Reset</td>
    </tr>
    <tr>
      <td>GMSL</td>
      <td>2x conectores Mini‑Fakra para hasta 8x cámaras GMSL2</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td>De -10°C a 60°C con pasta térmica; de -10°C a 55°C con una almohadilla térmica</td>
    </tr>
    <tr>
      <td>Fuente de alimentación</td>
      <td>XT30, 19V a 48V CC</td>
    </tr>
    <tr>
      <td>JetPack</td>
      <td>JetPack 7.1</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_04.jpg" alt="Vista lateral 1 de reComputer Robotics J601 · conectores de la placa carrier" loading="lazy" />
    <figcaption>Vista lateral 1 · Conectores de la placa carrier</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_05.jpg" alt="Vista lateral 2 de reComputer Robotics J601 · interfaces adicionales" loading="lazy" />
    <figcaption>Vista lateral 2 · Interfaces adicionales</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="Vista inferior de reComputer Robotics J601 · ranuras de expansión y distribución de la placa" loading="lazy" />
    <figcaption>Vista inferior · Ranuras de expansión y distribución de la placa</figcaption>
  </figure>
</div>

| Indicador | Color | Función |
| --- | --- | --- |
| PWR | Verde | Indicador de alimentación |
| SSD | Verde | Indicador de actividad de almacenamiento |
| USR | RGB | LED de estado controlable por el usuario |

Para asignaciones de pines de conectores, cableado, pruebas de interfaz y control del LED RGB, abre [Hardware e I/O](/es/jetson/recomputer_robotics_j601/hardware_and_interface_usage/).

## Flashear JetPack

Este flujo de trabajo instala **JetPack 7.1 (L4T 38.4.0)** en un SSD NVMe en la placa carrier J601. Elige el BSP para el módulo instalado: **J6015 para T5000** o **J6014 para T4000**.

:::caution
El flasheo borra los datos del SSD NVMe de destino. Haz una copia de seguridad de los datos importantes antes de comenzar y mantén la alimentación y el USB conectados hasta que el flasheo se complete.
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Preparar el equipo</h3>
    <p className="jetson-product-step-label">Paso 1 · Configura el host Ubuntu y el hardware de destino</p>

Prepara el siguiente equipo:

- Placa carrier J601 con un módulo Jetson AGX Thor T5000 o T4000 y refrigeración adecuada
- SSD NVMe M.2 2280 instalado en la ranura Key M
- Fuente de alimentación de 19–48 V CC conectada mediante XT30
- PC host físico con Ubuntu **22.04 o 24.04** con **al menos 220 GB** de almacenamiento libre
- Cable USB Tipo C de **datos**
- Pantalla HDMI, teclado y ratón para el primer arranque

:::tip
Un host Ubuntu nativo ofrece la experiencia de flasheo más fiable. Seeed Jetson DevelopTool también es compatible con Windows a través de WSL2; sigue su [guía de instalación](/es/jetson_developtool_installation/) para la configuración del host.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Entrar en el modo de recuperación forzada</h3>
    <p className="jetson-product-step-label">Paso 2 · Conecta J4 y verifica el módulo instalado</p>

1. Con la placa apagada, conecta el PC host al **puerto USB 3.0 Type-C de recuperación/flasheo (J4)**. El puerto USB 2.0 Type-C de depuración (J3) es un conector independiente.
2. Mantén presionado **RECOVERY**.
3. Conecta la fuente de alimentación de CC de 19–48 V a través de XT30.
4. Suelta **RECOVERY** después de dos segundos.
5. Ejecuta el siguiente comando en el host Ubuntu:

```bash
lsusb
```

| Configuración | Módulo | ID USB de recuperación esperado |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="Conexiones del puerto USB-C de flasheo y botón de recuperación del J601" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="Salida de lsusb en el host Ubuntu mientras un J601 está en modo de recuperación forzada" loading="lazy" />

Si falta el ID esperado, comprueba el cable de datos y el puerto de recuperación, y luego repite la secuencia de recuperación antes de continuar.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Preparar el BSP correspondiente</h3>
    <p className="jetson-product-step-label">Paso 3 · Elige flasheo por software o por línea de comandos</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Software Flashing" default>

Instala y ejecuta [Seeed Jetson DevelopTool](/es/jetson_developtool_installation/), luego prepara el firmware:

1. Abre **Flash Center** y selecciona **reComputer J601** y **JetPack 7.1 (L4T 38.4.0)**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="Flash Center de Jetson DevelopTool con reComputer J601 seleccionado" loading="lazy" />

2. Confirma el cableado de recuperación del Paso 2.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="Conexiones de alimentación y USB del J601 para Jetson DevelopTool" loading="lazy" />

3. Haz clic en **Detect Device**, confirma el módulo instalado y haz clic en **Next**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool detectando el módulo AGX Thor" loading="lazy" />

4. Haz clic en **Download / Prepare BSP**. La herramienta descarga el firmware, verifica su suma de comprobación SHA-256 y extrae el paquete.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool descargando y preparando el BSP del J601" loading="lazy" />

<details>
<summary>Mira el tutorial de flasheo de Jetson DevelopTool</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flashear JetPack en reComputer J601 con Seeed Jetson DevelopTool" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="Command-Line Flashing">

Descarga el paquete BSP **específico del módulo** que aparece a continuación. El archivo es grande; la descarga puede tardar alrededor de 60 minutos. Espera a que la descarga termine antes de extraerlo.

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

<div className="jetson-product-table-wrap">
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

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

<div className="jetson-product-table-wrap">
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

</TabItem>
</Tabs>

En el host Ubuntu, verifica el archivo descargado y compara el resultado completo con la suma de comprobación para tu módulo:

```bash
sha256sum <downloaded-archive.tar.gz>
```

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>Flashear el SSD NVMe</h3>
    <p className="jetson-product-step-label">Paso 4 · Usa el mismo método de flasheo y selección de módulo</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Software Flashing" default>

Haz clic en **Start Flash** en Jetson DevelopTool y espera a que la interfaz indique que se ha completado correctamente. Mantén conectados la fuente de alimentación y el cable de datos USB durante todo el proceso.

</TabItem>
<TabItem value="command-line" label="Command-Line Flashing">

Extrae el archivo en el host Ubuntu y luego ejecuta el comando correspondiente a tu módulo instalado. Sustituye `YYYY-MM-DD` por la fecha del nombre de archivo del archivo descargado.

<Tabs groupId="j601-thor-module">
<TabItem value="t5000" label="AGX Thor T5000 (J6015)" default>

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6015-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6015
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6015 external
```

</TabItem>
<TabItem value="t4000" label="AGX Thor T4000 (J6014)">

```bash
cd <path-to-image>
sudo tar xpf mfi_recomputer-thor-carrier-j6014-7.1-38.4.0-YYYY-MM-DD.tar.gz
cd mfi_recomputer-thor-carrier-j6014
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --showlogs --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t264_nvme.xml -S 80GiB --network usb0 recomputer-thor-carrier-j6014 external
```

</TabItem>
</Tabs>

El comando de flasheo suele tardar entre 2 y 10 minutos. Espera a que la terminal indique que el flasheo se ha realizado correctamente.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Ejemplo de salida de la terminal tras un flasheo exitoso de Jetson" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>Completar el primer arranque</h3>
    <p className="jetson-product-step-label">Paso 5 · Configura Ubuntu y comprueba tus interfaces</p>

Conecta la pantalla HDMI, el teclado y el ratón, y completa la configuración inicial del sistema de Ubuntu. Si la pantalla de configuración no aparece después del flasheo, apaga y enciende la placa después de que la herramienta de flasheo indique que se ha completado correctamente.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Ejemplo de pantalla de configuración de primer arranque de Ubuntu en Jetson" loading="lazy" />

Continúa con [Hardware & I/O](/es/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) para verificar tus periféricos, o explora la [demo de percepción](#aplicaciones). El device-tree de la carrier board de Seeed y las fuentes del BSP están disponibles en [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

  </div>
</section>

</div>

:::tip Opcional: explora otras carrier boards Jetson
Después de completar la configuración, puedes explorar las descargas de firmware e instrucciones de flasheo para otras carrier boards Jetson de Seeed.

<div className="jetson-product-actions">
  <a className="jetson-product-button jetson-product-button--secondary" href="/es/flash/jetpack_to_selected_product/" target="_blank" rel="noopener noreferrer">Explorar otras guías de flasheo de Jetson ↗</a>
</div>

:::

## Aplicaciones

Comienza con un ejemplo de percepción con cámara y LiDAR para reComputer Robotics J601.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="Abrir el repositorio de la demo de percepción multicámara y LiDAR del J601">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="Vista previa en video de la demo de percepción con cámara y LiDAR del J601" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Capacidades de la aplicación"><span>Detección</span><span>Fusión de sensores</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Percepción Multicámara y LiDAR</a></h3>
      <p>Reproduce seis flujos de cámara y datos de LiDAR mientras Jetson ejecuta detección con TensorRT, segmentación de carretera, fusión geométrica en vista cenital y mapeo local alineado con la pose, con vistas sincronizadas en el navegador.</p>
    </div>
  </article>
</div>

### Mira la demostración de percepción

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="reComputer J601 multi-camera and LiDAR perception demo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Obtén la guía de demostración y despliegue ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>
</div>

El repositorio documenta la validación en **JetPack 7.2 / L4T R39.2, CUDA 13.2 y TensorRT 10.16.2**. Sigue sus instrucciones de entorno y despliegue; el paquete de flasheo **JetPack 7.1** de esta página es una línea base de software independiente. Compila los motores de TensorRT en el dispositivo de destino para las versiones de software instaladas.

La demostración utiliza datos grabados de nuScenes y fusión geométrica de cámara/LiDAR. Su mapa local usa poses proporcionadas por el conjunto de datos; la precisión de la segmentación en nuScenes no ha sido evaluada. Consulta el repositorio para conocer las condiciones de validación y las licencias del conjunto de datos/modelo.

## Recursos

Utiliza estos recursos para la integración de la placa, el diseño mecánico y el desarrollo del BSP.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Hoja de datos de la Carrier Board</strong><small>Distribución de pines de los conectores, límites eléctricos y especificaciones de la placa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Esquemático de la Carrier Board</strong><small>Circuitos y ruteo de señales de la J601 V1.0</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>Modelo mecánico 3D</strong><small>Modelo STEP para planificación de montaje y carcasa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Código fuente de Linux_for_Tegra</strong><small>BSP de Jetson de Seeed y código fuente del device tree</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>Carrier Board J601</strong><small>Opciones de compra para la carrier board Jetson AGX Thor</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Catálogo de productos Jetson</strong><small>Explora los productos Seeed NVIDIA Jetson</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Casos de éxito con Jetson</strong><small>Ejemplos de despliegue en aplicaciones de IA en el edge</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Jetson AGX en una página</strong><small>Descripción general de la plataforma Jetson AGX de Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Soporte técnico y debate sobre el producto


Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Seeed community forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contact Seeed support"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Seeed Discord community"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Wiki product discussion"></a>
</div>

</div>
