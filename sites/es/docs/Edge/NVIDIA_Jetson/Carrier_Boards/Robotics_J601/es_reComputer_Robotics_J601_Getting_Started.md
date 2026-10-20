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
  date: 10/19/2026
  author: haochen
createdAt: '2026-04-24'
updatedAt: '2026-10-19'
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
    <span className="jetson-product-eyebrow">Robótica e IA física · NVIDIA Jetson AGX Thor</span>
    <h2>Conecta percepción y control en una sola placa carrier de robótica</h2>
    <p>La placa carrier reComputer Robotics J601 admite los módulos NVIDIA Jetson AGX Thor T5000 y T4000 para percepción multicámara, fusión de sensores y desarrollo de IA encarnada. Combina Ethernet de alta velocidad, expansión de cámaras GMSL2 e I/O de robótica aislada con la plataforma de software Jetson.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">Comprar · Placa carrier J601 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Empezar con JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_01.jpg" alt="Placa carrier reComputer Robotics J601 para módulos NVIDIA Jetson AGX Thor" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>Hasta 2070 TFLOPS</strong><span>Rendimiento de IA con un módulo Jetson AGX Thor T5000</span></div>
  <div className="jetson-product-fact"><strong>Hasta 4× 10GbE</strong><span>Cuatro puertos RJ45 con T5000; tres con T4000</span></div>
  <div className="jetson-product-fact"><strong>Hasta 8× GMSL2</strong><span>Entrada multicámara mediante dos placas de extensión GMSL</span></div>
  <div className="jetson-product-fact"><strong>19–48 V CC</strong><span>Entrada de amplio rango a través de un conector de alimentación XT30</span></div>
</div>

## Elige tu configuración Jetson

La J601 es una **placa carrier**. Selecciona un módulo Jetson AGX Thor compatible, un SSD NVMe y una solución de refrigeración para tu equipo. Los nombres J6015 y J6014 identifican las configuraciones específicas del módulo y los paquetes BSP usados en esta guía.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuración T5000</span>
    <h3>reComputer Robotics J6015</h3>
    <p>Usa el BSP T5000 para la configuración con cuatro puertos 10GbE activos y cuatro interfaces CAN aisladas.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T5000</span><span>4× 10GbE</span><span>4× CAN FD</span></div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuración T4000</span>
    <h3>reComputer Robotics J6014</h3>
    <p>Usa el BSP T4000 para la configuración con tres puertos 10GbE activos y dos interfaces CAN aisladas.</p>
    <div className="jetson-product-variant-metrics"><span>AGX Thor T4000</span><span>3× 10GbE</span><span>2× CAN FD</span></div>
  </article>
</div>

Módulos compatibles: [NVIDIA Jetson AGX Thor T5000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T5000-Module-p-6938.html) y [NVIDIA Jetson AGX Thor T4000](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-T4000-Module-p-6939.html).

## Por qué reComputer Robotics J601

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Percepción multicámara</strong><span>Las placas de extensión GMSL admiten hasta ocho cámaras GMSL2 para percepción envolvente y fusión de sensores.</span></div>
  <div className="jetson-product-feature"><strong>Red de alta velocidad</strong><span>Hasta cuatro conexiones RJ45 10GbE transportan datos entre sensores, nodos de cómputo y sistemas de desarrollo.</span></div>
  <div className="jetson-product-feature"><strong>I/O de robótica</strong><span>CAN FD aislado, RS-232/422/485, I2C, I2S e I/O digital conectan controladores, sensores y actuadores.</span></div>
  <div className="jetson-product-feature"><strong>Expansión modular</strong><span>M.2 Key M admite un SSD NVMe 2280; Key E y Key B admiten módulos compatibles de Wi-Fi/Bluetooth y 4G/5G.</span></div>
  <div className="jetson-product-feature"><strong>Conectividad de desarrollo</strong><span>Cuatro puertos USB 3.2 Type-A y HDMI 2.1 conectan periféricos y una pantalla, con puertos USB-C separados para depuración y recuperación.</span></div>
  <div className="jetson-product-feature"><strong>Flujos de IA física</strong><span>Desarrolla sobre Jetson con frameworks como NVIDIA Isaac, ROS, PyTorch y Hugging Face, siguiendo los requisitos de plataforma de cada uno.</span></div>
</div>

## Especificaciones

<div className="jetson-product-table-wrap">
<table>
  <thead><tr><th scope="col">Interfaz / Propiedad</th><th scope="col">Placa carrier J601</th></tr></thead>
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
    <img src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_06.jpg" alt="Vista inferior de reComputer Robotics J601 · ranuras de expansión y disposición de la placa" loading="lazy" />
    <figcaption>Vista inferior · Ranuras de expansión y disposición de la placa</figcaption>
  </figure>
</div>

| Indicador | Color | Función |
| --- | --- | --- |
| PWR | Verde | Indicador de alimentación |
| SSD | Verde | Indicador de actividad de almacenamiento |
| USR | RGB | LED de estado controlable por el usuario |

Para la asignación de pines, el cableado, las pruebas de interfaz y el control del LED RGB, abre [Hardware e I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/).

## Flashear JetPack {#flash-jetpack}

Este flujo instala **JetPack 7.1 (L4T 38.4.0)** en un SSD NVMe de la placa carrier J601. Elige el BSP del módulo instalado: **J6015 para T5000** o **J6014 para T4000**.

:::caution
El flasheo borra los datos del SSD NVMe de destino. Haz una copia de seguridad de los datos importantes antes de empezar y mantén conectados la alimentación y el USB hasta que termine.
:::

<div className="jetson-product-step-flow">

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Prepara el equipo</h3>
    <p className="jetson-product-step-label">Paso 1 · Prepara el host Ubuntu y el hardware de destino</p>

Prepara el siguiente equipo:

- Placa carrier J601 con un módulo Jetson AGX Thor T5000 o T4000 y una refrigeración adecuada
- SSD NVMe M.2 2280 instalado en la ranura Key M
- Fuente de 19–48 V CC conectada mediante XT30
- PC host Ubuntu **22.04 o 24.04** físico con **al menos 220 GB** de almacenamiento libre
- Cable de **datos** USB Type-C
- Pantalla HDMI, teclado y ratón para el primer arranque

:::tip
Un host Ubuntu nativo ofrece la experiencia de flasheo más fiable. Seeed Jetson DevelopTool también admite Windows mediante WSL2; sigue su [guía de instalación](/jetson_developtool_installation/) para preparar el host.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Entra en el modo Force Recovery</h3>
    <p className="jetson-product-step-label">Paso 2 · Conecta J4 y comprueba el módulo instalado</p>

1. Con la placa apagada, conecta el PC host al **puerto USB 3.0 Type-C de recuperación/flasheo (J4)**. El puerto USB 2.0 Type-C de depuración (J3) es un conector distinto.
2. Mantén pulsado **RECOVERY**.
3. Conecta la fuente de 19–48 V CC mediante XT30.
4. Suelta **RECOVERY** después de dos segundos.
5. Ejecuta el siguiente comando en el host Ubuntu:

```bash
lsusb
```

| Configuración | Módulo | ID USB de recuperación esperado |
| --- | --- | --- |
| J6015 | AGX Thor T5000 | `0955:7026 NVIDIA Corp.` |
| J6014 | AGX Thor T4000 | `0955:7226 NVIDIA Corp.` |

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_03.jpg" alt="Conexiones del puerto USB-C de flasheo y del botón de recuperación de J601" loading="lazy" />

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_02.jpg" alt="Salida de lsusb en el host Ubuntu mientras una J601 está en modo Force Recovery" loading="lazy" />

Si falta el ID esperado, comprueba el cable de datos y el puerto de recuperación, y repite la secuencia antes de continuar.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Prepara el BSP correspondiente</h3>
    <p className="jetson-product-step-label">Paso 3 · Elige el flasheo por software o por línea de comandos</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Flasheo por software" default>

Instala e inicia [Seeed Jetson DevelopTool](/jetson_developtool_installation/) y prepara el firmware:

1. Abre **Flash Center** y selecciona **reComputer J601** y **JetPack 7.1 (L4T 38.4.0)**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_07.jpg" alt="Flash Center de Jetson DevelopTool con reComputer J601 seleccionado" loading="lazy" />

2. Confirma el cableado de recuperación del paso 2.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_08.jpg" alt="Conexiones de alimentación y USB de J601 para Jetson DevelopTool" loading="lazy" />

3. Haz clic en **Detect Device**, confirma el módulo instalado y haz clic en **Next**.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_09.jpg" alt="Jetson DevelopTool detectando el módulo AGX Thor" loading="lazy" />

4. Haz clic en **Download / Prepare BSP**. La herramienta descarga el firmware, verifica su suma SHA-256 y extrae el paquete.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer_Robotics_J601/Getting_Start/robotics_j601_carrier_board_getting_started_10.jpg" alt="Jetson DevelopTool descargando y preparando el BSP de J601" loading="lazy" />

<details>
<summary>Ver el tutorial de flasheo con Jetson DevelopTool</summary>

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/O2rlSOdYujE" title="Flashear JetPack en reComputer J601 con Seeed Jetson DevelopTool" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

</details>

</TabItem>
<TabItem value="command-line" label="Flasheo por línea de comandos">

Descarga el paquete BSP **específico del módulo** que aparece a continuación. El archivo es grande; la descarga puede tardar unos 60 minutos. Espera a que termine antes de extraerlo.

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

En el host Ubuntu, verifica el archivo descargado y compara el resultado completo con la suma de comprobación de tu módulo:

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
    <h3>Flashea el SSD NVMe</h3>
    <p className="jetson-product-step-label">Paso 4 · Usa el mismo método de flasheo y la misma selección de módulo</p>

<Tabs groupId="j601-flashing-method">
<TabItem value="software" label="Flasheo por software" default>

Haz clic en **Start Flash** en Jetson DevelopTool y espera a que la interfaz informe de que ha tenido éxito. Mantén conectados la fuente de alimentación y el cable de datos USB durante todo el proceso.

</TabItem>
<TabItem value="command-line" label="Flasheo por línea de comandos">

Extrae el archivo en el host Ubuntu y ejecuta el comando del módulo instalado. Sustituye `YYYY-MM-DD` por la fecha del nombre del archivo descargado.

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

El comando de flasheo suele tardar de 2 a 10 minutos. Espera a que el terminal informe de que el flasheo se ha realizado correctamente.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png" alt="Ejemplo de salida del terminal tras un flasheo correcto de Jetson" loading="lazy" />

</TabItem>
</Tabs>

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">5</span>
  <div className="jetson-product-step-content">
    <h3>Completa el primer arranque</h3>
    <p className="jetson-product-step-label">Paso 5 · Configura Ubuntu y comprueba las interfaces</p>

Conecta la pantalla HDMI, el teclado y el ratón, y completa la configuración inicial del sistema de Ubuntu. Si la pantalla de configuración no aparece después del flasheo, apaga y enciende la placa cuando la herramienta indique que ha terminado correctamente.

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png" alt="Ejemplo de la pantalla de configuración del primer arranque de Ubuntu en Jetson" loading="lazy" />

Continúa con [Hardware e I/O](/jetson/recomputer_robotics_j601/hardware_and_interface_usage/) para comprobar los periféricos, o explora la [demo de percepción](#applications). Las fuentes del device tree y del BSP de la placa carrier de Seeed están disponibles en [Linux_for_Tegra](https://github.com/Seeed-Studio/Linux_for_Tegra).

  </div>
</section>

</div>

## Aplicaciones {#applications}

Empieza con un ejemplo de percepción con cámara y LiDAR para reComputer Robotics J601.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <a className="jetson-product-application-cover" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer" aria-label="Abrir el repositorio de la demo de percepción multicámara y LiDAR de J601">
      <img src="https://img.youtube.com/vi/gFFaiGvRdtg/hqdefault.jpg" alt="Vista previa del vídeo de la demo de percepción con cámara y LiDAR de J601" loading="lazy" />
    </a>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Capacidades de la aplicación"><span>Detección</span><span>Fusión de sensores</span><span>BEV</span></div>
      <h3><a href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Percepción multicámara y LiDAR</a></h3>
      <p>Reproduce seis flujos de cámara y datos LiDAR mientras Jetson ejecuta detección con TensorRT, segmentación de la carretera, fusión geométrica en vista de pájaro y mapeo local alineado con la pose, con vistas sincronizadas en el navegador.</p>
    </div>
  </article>
</div>

### Ver la demo de percepción

<div className="video-container" style={{paddingBottom: '56.25%'}}>
  <iframe src="https://www.youtube.com/embed/gFFaiGvRdtg" title="Demo de percepción multicámara y LiDAR de reComputer J601" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
</div>

<div className="jetson-product-actions">
  <a className="jetson-product-button" href="https://github.com/jjjadand/recomputer-j601-bev-demo" target="_blank" rel="noopener noreferrer">Obtener la demo y la guía de despliegue ↗</a>
  <a className="jetson-product-button jetson-product-button--secondary" href="https://youtu.be/gFFaiGvRdtg" target="_blank" rel="noopener noreferrer">Ver en YouTube ↗</a>
</div>

El repositorio documenta la validación en **JetPack 7.2 / L4T R39.2, CUDA 13.2 y TensorRT 10.16.2**. Sigue sus instrucciones de entorno y despliegue; el paquete de flasheo **JetPack 7.1** de esta página es una línea base de software distinta. Compila los motores TensorRT en el dispositivo de destino para las versiones de software instaladas.

La demo usa datos nuScenes grabados y fusión geométrica de cámara/LiDAR. Su mapa local usa las poses proporcionadas por el conjunto de datos; la precisión de la segmentación en nuScenes no se ha evaluado. Consulta el repositorio para las condiciones de validación y las licencias del conjunto de datos y de los modelos.

## Recursos {#resources}

Usa estos recursos para la integración de la placa, el diseño mecánico y el desarrollo del BSP.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Hoja de datos de la placa carrier</strong><small>Asignación de pines, límites eléctricos y especificaciones de la placa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20J601%20Carrier%20Board_V1.0_SCH_260612.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Esquema de la placa carrier</strong><small>Circuitos y enrutado de señales de J601 V1.0</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_J601.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>Modelo mecánico 3D</strong><small>Modelo STEP para el montaje y el diseño de la carcasa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Código fuente de Linux_for_Tegra</strong><small>Fuentes del BSP Jetson de Seeed y del device tree</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/reComputer-J601-Carrier-Board-for-Jetson-AGX-Thortm-T5000-T4000.html" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SHOP</span>
    <span className="jetson-product-resource-copy"><strong>Placa carrier J601</strong><small>Opciones de compra de la placa carrier Jetson AGX Thor</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-NVIDIA_Jetson_Catalog_V1.4.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Catálogo de productos Jetson</strong><small>Consulta los productos NVIDIA Jetson de Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CASE</span>
    <span className="jetson-product-resource-copy"><strong>Casos de éxito de Jetson</strong><small>Ejemplos de despliegue en aplicaciones de IA perimetral</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/wiki/reComputer-Jetson/seeed_jetson_agx_new_series.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Resumen de una página de Jetson AGX</strong><small>Visión general de la plataforma Jetson AGX de Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum" aria-label="Foro de la comunidad Seeed"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email" aria-label="Contactar con el soporte de Seeed"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord" aria-label="Comunidad de Discord de Seeed"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion" aria-label="Debate de productos de la wiki"></a>
</div>

</div>
