---
description: Primeros pasos con reComputer Rugged J40
title: Primeros pasos con reComputer Rugged J40
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - Primeros pasos
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg
slug: /jetson/recomputer_rugged_j401/getting_started
aliases:
  - /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 09/30/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-09-30'
url: https://wiki.seeedstudio.com/es/jetson/recomputer_rugged_j401/getting_started/
---

import JetsonProductDocNav from '@site/src/components/jetson/JetsonProductDocNav';
import {ruggedJ401DocNav} from '@site/src/data/jetson/productDocNavigation';
import Link from '@docusaurus/Link';

# Primeros pasos con reComputer Rugged J40

<JetsonProductDocNav {...ruggedJ401DocNav} />

<div className="jetson-product-page">

<section className="jetson-product-hero">
  <div>
    <span className="jetson-product-eyebrow">IA perimetral reforzada · NVIDIA Jetson</span>
    <h2>Despliega IA donde el polvo, el agua y la vibración forman parte del trabajo</h2>
    <p>reComputer Rugged J40 combina el rendimiento de NVIDIA Jetson Orin con una carcasa sin ventilador con clasificación IP66 y conectividad M12 con bloqueo. Está diseñado para un despliegue fiable de IA perimetral en vehículos, puertos, explotaciones agrícolas, el mar y plantas industriales.</p>
    <div className="jetson-product-actions">
      <a className="jetson-product-button" href="https://www.seeedstudio.com/reComputer-Rugged-J4012-p-6920.html" target="_blank" rel="noopener noreferrer">Obtener reComputer Rugged J4012 ↗</a>
      <a className="jetson-product-button jetson-product-button--secondary" href="#flash-jetpack">Empezar con JetPack ↓</a>
    </div>
  </div>
  <div className="jetson-product-hero-media">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/100046979-gallery_img_2.jpg" alt="Ordenador de IA perimetral industrial reComputer Rugged J40" />
  </div>
</section>

<div className="jetson-product-fact-grid">
  <div className="jetson-product-fact"><strong>IP66</strong><span>Sellado contra el polvo y chorros de agua potentes</span></div>
  <div className="jetson-product-fact"><strong>Hasta 100 TOPS</strong><span>Rendimiento de IA perimetral de Jetson Orin NX 16GB</span></div>
  <div className="jetson-product-fact"><strong>4× PoE GbE</strong><span>Alimenta y conecta cámaras IP industriales</span></div>
  <div className="jetson-product-fact"><strong>−20°C a 60°C</strong><span>Funcionamiento sin ventilador con flujo de aire de 0,7 m/s</span></div>
</div>

## Elige tu configuración Jetson

Ambas configuraciones usan la misma carcasa reforzada y el mismo conjunto de interfaces industriales. Elige el módulo Jetson según la carga de trabajo de IA, el requisito de memoria y el presupuesto de energía de tu despliegue.

<div className="jetson-product-variant-grid">
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuración de rendimiento</span>
    <h3>reComputer Rugged J4012</h3>
    <p>Para visión multicámara, modelos de IA más grandes y cargas que se benefician de un mayor ancho de banda de GPU y memoria.</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin NX</span>
      <span>16GB LPDDR5</span>
      <span>100 TOPS</span>
    </div>
  </article>
  <article className="jetson-product-variant-card">
    <span className="jetson-product-variant-badge">Configuración de eficiencia</span>
    <h3>reComputer Rugged J3011</h3>
    <p>Para percepción eficiente, monitorización, telemetría y control industrial con un perfil de consumo más bajo.</p>
    <div className="jetson-product-variant-metrics">
      <span>Jetson Orin Nano</span>
      <span>8GB LPDDR5</span>
      <span>40 TOPS</span>
    </div>
  </article>
</div>

## Por qué reComputer Rugged J40

<div className="jetson-product-feature-grid">
  <div className="jetson-product-feature"><strong>Conectividad M12 sellada</strong><span>Los conectores con bloqueo ayudan a mantener estables la alimentación, la red y la E/S en instalaciones móviles y exteriores.</span></div>
  <div className="jetson-product-feature"><strong>Refrigeración pasiva sin ventilador</strong><span>La ausencia de un ventilador móvil reduce el mantenimiento en entornos con polvo y permite un funcionamiento silencioso.</span></div>
  <div className="jetson-product-feature"><strong>E/S industrial</strong><span>CAN-FD aislado, RS-232/422/485 y E/S digital se conectan directamente a sensores, actuadores y controladores.</span></div>
  <div className="jetson-product-feature"><strong>Red preparada para cámaras</strong><span>Cuatro puertos PoE GbE simplifican los sistemas multicámara al transportar datos y alimentación por el mismo cable.</span></div>
  <div className="jetson-product-feature"><strong>Expansión inalámbrica</strong><span>Las ranuras M.2 Key E y Key B admiten expansión de Wi-Fi, Bluetooth, 5G y GPS.</span></div>
  <div className="jetson-product-feature"><strong>Despliegue en vehículos y exteriores</strong><span>La entrada de amplio voltaje, la resistencia a la vibración y la carcasa IP66 se adaptan a AMR, vehículos, embarcaciones y equipos de campo.</span></div>
</div>

## Especificaciones

<div className="jetson-product-table-wrap">
<table>
  <thead>
    <tr>
      <th colSpan={2}>Nombre del producto</th>
      <th>reComputer Rugged J4012</th>
      <th>reComputer Rugged J3011</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>100046979</td>
      <td>100002634</td>
    </tr>
    <tr>
      <td colSpan={2}>Módulo NVIDIA Jetson</td>
      <td>Orin NX 16GB</td>
      <td>Orin Nano 8GB</td>
    </tr>
    <tr>
      <td rowSpan={4}>Sistema de procesador</td>
      <td>Rendimiento de IA</td>
      <td>100 TOPS</td>
      <td>40 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>1024 núcleos NVIDIA Ampere, 32 Tensor Cores</td>
      <td>1024 núcleos NVIDIA Ampere, 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>8 núcleos Arm Cortex-A78AE v8.2 de 64 bits, 2MB L2 + 4MB L3</td>
      <td>6 núcleos Arm Cortex-A78AE v8.2 de 64 bits, 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>16GB LPDDR5 de 128 bits @ 102.4 GB/s</td>
      <td>8GB LPDDR5 de 128 bits @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>Almacenamiento</td>
      <td>eMMC</td>
      <td colSpan={2}>—</td>
    </tr>
    <tr>
      <td>Expansión</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB incluidos</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE PoE PSE (802.3af, M12 impermeable) + 1× GbE (M12 impermeable)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={2}>4× USB 3.2 Tipo A (M12 impermeable) + 1× USB 2.0/3.0 Tipo C (flasheo, tapa impermeable) + 1× USB Tipo C (depuración)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={2}>1× HDMI (tapa impermeable)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={2}>2× CAN-FD (aislado, 120 Ω) mediante M12 con código A de 8 pines</td>
    </tr>
    <tr>
      <td>Serie</td>
      <td colSpan={2}>1× RS-232/422/485 mediante M12 con código A de 8 pines</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={2}>2× DI + 2× DO mediante M12 de 12 pines / 8 pines</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={2}>1× ranura para tarjeta Nano SIM</td>
    </tr>
    <tr>
      <td>Antena</td>
      <td colSpan={2}>4× conectores de antena SMA impermeables</td>
    </tr>
    <tr>
      <td rowSpan={2}>Expansión</td>
      <td>M.2 Key E</td>
      <td colSpan={2}>Módulo Wi-Fi / Bluetooth (opcional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={2}>Módulo 5G / GPS (opcional)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentación</td>
      <td>Entrada</td>
      <td colSpan={2}>19–48 V CC mediante conector M12 con código B/A</td>
    </tr>
    <tr>
      <td>Consumo</td>
      <td colSpan={2}>Típico 25 W, fusible 10 A</td>
    </tr>
    <tr>
      <td rowSpan={6}>Entorno</td>
      <td>Protección de ingreso</td>
      <td colSpan={2}>IP66</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td colSpan={2}>−20°C a +60°C (con flujo de aire de 0,7 m/s)</td>
    </tr>
    <tr>
      <td>Humedad</td>
      <td colSpan={2}>10–95% HR (sin condensación)</td>
    </tr>
    <tr>
      <td>Vibración</td>
      <td colSpan={2}>3 Grms @ 5–500 Hz, aleatoria, 1 hr/eje</td>
    </tr>
    <tr>
      <td>Dimensiones</td>
      <td colSpan={2}>210 mm × 190 mm × 93 mm</td>
    </tr>
    <tr>
      <td>Color</td>
      <td colSpan={2}>Gris plateado (marco central plateado, disipador negro)</td>
    </tr>
    <tr>
      <td colSpan={2}>Certificación</td>
      <td colSpan={2}>CE, FCC, RoHS, REACH</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantía</td>
      <td colSpan={2}>2 años</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general del hardware

<div className="jetson-product-hardware-gallery">
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw1.png" alt="Vista lateral de reComputer Rugged J40 que muestra sus conectores industriales" />
    <figcaption>Vista lateral · Conexiones de red, USB, pantalla y antena</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw2.png" alt="Vista lateral opuesta de reComputer Rugged J40" />
    <figcaption>Vista lateral · Conexiones de alimentación, serie, CAN y E/S digital</figcaption>
  </figure>
  <figure>
    <img src="https://files.seeedstudio.com/wiki/rugged_J401/hardware_veiw3.png" alt="Vista inferior de reComputer Rugged J40" />
    <figcaption>Vista inferior · Montaje y disposición de la carcasa</figcaption>
  </figure>
</div>

### Indicadores LED

| LED | Color | Estado | Descripción |
| --- | --- | --- | --- |
| PWR | Verde | On | El dispositivo está alimentado |
| PWR | Verde | Off | El dispositivo no está alimentado |
| ACT | Verde | Flashing | Actividad de acceso al SSD |

Para ver la asignación de pines, la configuración de interfaces y las instrucciones de expansión, continúa con la [guía de hardware e I/O](/jetson/recomputer_rugged_j401/hardware_and_interface_usage/).

## Flashear JetPack {#flash-jetpack}

Sigue el flujo de trabajo en orden. La disposición numerada reúne en un solo lugar la preparación del host, la operación en modo de recuperación y los comandos de terminal.

<div className="jetson-product-step-flow">
<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">1</span>
  <div className="jetson-product-step-content">
    <h3>Elige y descarga el BSP</h3>
    <p className="jetson-product-step-label">Paso 1 · Adapta la imagen a la configuración exacta de Jetson</p>

Abre la página de recursos de flasheo de Jetson y comprueba la imagen más reciente para tu modelo exacto de reComputer Rugged y tu módulo Jetson.

<div className="jetson-product-actions">
  <Link className="jetson-product-button" to="/flash/jetpack_to_selected_product" target="_blank" rel="noopener noreferrer">Abrir el selector de imágenes JetPack ↗</Link>
</div>

:::warning
No flashes una imagen de otra placa portadora o de otro módulo Jetson. Si tu configuración exacta de reComputer Rugged J4012 o J3011 no aparece en la lista, contacta con el soporte de Seeed Studio antes de continuar.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">2</span>
  <div className="jetson-product-step-content">
    <h3>Prepara el equipo</h3>
    <p className="jetson-product-step-label">Paso 2 · Configura el host Ubuntu y los cables</p>

Prepara los siguientes elementos antes de desconectar o alimentar el dispositivo:

- reComputer Rugged J4012 o J3011
- Fuente de alimentación de 19–48 V CC
- PC host físico con Ubuntu 20.04 o 22.04
- Cable de datos USB Tipo C para el flasheo
- Monitor externo y cable HDMI
- Teclado y ratón

:::tip
Usa un host Ubuntu físico siempre que sea posible. El paso a través de USB en una máquina virtual puede interrumpir el flasheo.
:::

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">3</span>
  <div className="jetson-product-step-content">
    <h3>Entra en modo Force Recovery</h3>
    <p className="jetson-product-step-label">Paso 3 · Conecta el puerto DEVICE y verifica el ID USB</p>

<img className="jetson-product-step-image" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg" alt="Botón de recuperación y puerto DEVICE usados para flashear reComputer Rugged J40" />

1. Conecta un cable de datos USB Tipo C entre el puerto **DEVICE** y el host Ubuntu.
2. Mantén pulsado el botón **REC**.
3. Mientras mantienes pulsado **REC**, conecta la fuente de alimentación para encender el dispositivo.
4. Suelta el botón **REC**.
5. En el host Ubuntu, verifica que Jetson se detecta:

```bash
lsusb
```

Salida esperada según la configuración:

| Producto | Módulo Jetson | ID USB esperado |
| --- | --- | --- |
| reComputer Rugged J4012 | Orin NX 16GB | `0955:7323 NVidia Corp` |
| reComputer Rugged J3011 | Orin Nano 8GB | `0955:7523 NVidia Corp` |

Si falta el ID esperado, vuelve a conectar el cable USB, prueba otro puerto USB del host y repite la secuencia de recuperación antes de continuar.

  </div>
</section>

<section className="jetson-product-step-item">
  <span className="jetson-product-step-number">4</span>
  <div className="jetson-product-step-content">
    <h3>Extrae y flashea la imagen</h3>
    <p className="jetson-product-step-label">Paso 4 · Ejecuta el paquete de flasheo masivo desde el host Ubuntu</p>

Cambia al directorio que contiene la imagen descargada y extráela:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

Entra en el directorio extraído e inicia el flasheo:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh \
  --flash-only --massflash 1 --network usb0 --showlogs
```

Espera hasta que el terminal indique que el flasheo se completó correctamente. Después, desconecta el cable USB, reinicia la alimentación del reComputer, conecta el monitor y los dispositivos de entrada, y completa la configuración inicial de Ubuntu.

  </div>
</section>
</div>

## Aplicaciones {#applications}

Explora ejemplos de aplicación que combinan el hardware de reComputer Rugged J40 con flujos de trabajo de IA perimetral listos para desplegar. Los nuevos ejemplos pueden añadirse a esta colección cuando estén disponibles.

<div className="jetson-product-application-grid">
  <article className="jetson-product-application-card">
    <Link className="jetson-product-application-cover" to="/jetson/recomputer_rugged_j401/industrial_vision/" aria-label="Abrir la aplicación de visión para montacargas industriales">
      <img src="https://files.seeedstudio.com/wiki/rugged/rugged_banner.png" alt="Aplicaciones de visión para montacargas industriales con reComputer Rugged J401" />
    </Link>
    <div className="jetson-product-application-body">
      <div className="jetson-product-application-labels" aria-label="Capacidades de la aplicación">
        <span>Detección</span>
        <span>Benchmark de inferencia</span>
      </div>
      <h3><Link to="/jetson/recomputer_rugged_j401/industrial_vision/">Visión para montacargas industriales</Link></h3>
      <p>Despliega detección multicámara, advertencia de profundidad, monitorización del conductor, seguimiento de objetivos y cargas de inferencia medidas de Jetson en reComputer Rugged J401.</p>
    </div>
  </article>
</div>

## Recursos

Usa estos archivos para la integración mecánica, la revisión del diseño de la placa portadora, el desarrollo del BSP y la selección de la plataforma Jetson.

<div className="jetson-product-resource-grid">
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_rugged_J401_datasheet.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PDF</span>
    <span className="jetson-product-resource-copy"><strong>Hoja de datos del producto</strong><small>Especificaciones eléctricas, mecánicas y ambientales</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20Carrier%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">SCH</span>
    <span className="jetson-product-resource-copy"><strong>Esquemático de la placa portadora</strong><small>Revisa los circuitos y el enrutado de señales</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Rugged%20J401%20PSE%20Board%20V1.1_SCH.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">PSE</span>
    <span className="jetson-product-resource-copy"><strong>Esquemático de la placa PSE</strong><small>Referencia de diseño del circuito de alimentación PoE</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_Rugged_asm.stp" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">3D</span>
    <span className="jetson-product-resource-copy"><strong>Modelo mecánico 3D</strong><small>Ensamblaje STEP para la instalación y la planificación de la carcasa</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://github.com/Seeed-Studio/Linux_for_Tegra" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">GIT</span>
    <span className="jetson-product-resource-copy"><strong>Código fuente de Linux_for_Tegra</strong><small>Fuentes del BSP Jetson de Seeed y recursos de personalización</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
  <a className="jetson-product-resource-card" href="https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf" target="_blank" rel="noopener noreferrer">
    <span className="jetson-product-resource-icon" aria-hidden="true">CMP</span>
    <span className="jetson-product-resource-copy"><strong>Comparación de dispositivos Jetson</strong><small>Compara módulos Jetson y plataformas portadoras de Seeed</small></span>
    <span className="jetson-product-resource-arrow" aria-hidden="true">↗</span>
  </a>
</div>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>

</div>
