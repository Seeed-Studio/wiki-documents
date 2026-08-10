---
description: Introducción a reComputer Rugged J40
title: Introducción a reComputer Rugged J40
keywords:
  - reComputer Rugged
  - IP66
  - Jetson
  - Introducción
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ai_robotics_recomputer_rugged_j40_getting_started
sku: 100046979,100002634
last_update:
  date: 03/04/2026
  author: Dayu,Dongxu Jin
createdAt: '2026-03-04'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/es/ai_robotics_recomputer_rugged_j40_getting_started/
---

# Introducción a reComputer Rugged J40

:::note
Este producto se encuentra actualmente en desarrollo. Las especificaciones y la disponibilidad están sujetas a cambios.
:::

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png"/>
</div>

El reComputer Rugged J40 es un ordenador de borde de IA sin ventilador con clasificación IP66, impulsado por módulos NVIDIA Jetson Orin NX/Nano. Diseñado para entornos exteriores hostiles, incluidos despliegues marinos, montados en vehículos e industriales, ofrece hasta 100 TOPS de rendimiento de IA en un chasis compacto con refrigeración pasiva y conectores M12 totalmente impermeables.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}>Consigue uno ahora 🖱️</font></span></strong>
  </a>
</div>

## Características

- **Impermeabilidad IP66**: Carcasa totalmente sellada con conectores M12 impermeables para todas las interfaces externas
- **Refrigeración pasiva sin ventilador**: Funcionamiento silencioso entre -20°C y +60°C con un flujo de aire de 0,7 m/s
- **Robusto y resistente a vibraciones**: 3 Grms @ 5–500 Hz, 1 hr/eje — adecuado para uso en vehículos y aplicaciones marinas
- **Amplio I/O industrial**: CAN-FD (aislado), RS-232/422/485, DI/DO, todo a través de conectores M12 con código A
- **Redes flexibles**: 4× PoE GbE + 1× GbE (M12), M.2 Key E (Wi-Fi/BT), M.2 Key B (5G/GPS)
- **Entrada de voltaje amplia**: 19–48 V CC mediante conector M12 con código B/A
- **Certificaciones**: CE, FCC, RoHS, REACH

## Especificaciones

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
      <td>16GB 128-bit LPDDR5 @ 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 @ 68 GB/s</td>
    </tr>
    <tr>
      <td rowSpan={2}>Almacenamiento</td>
      <td>eMMC</td>
      <td colSpan={2}>-</td>
    </tr>
    <tr>
      <td>Expansión</td>
      <td colSpan={2}>M.2 Key M (2280) NVMe SSD — 128 GB incluidos</td>
    </tr>
    <tr>
      <td rowSpan={8}>I/O</td>
      <td>Ethernet</td>
      <td colSpan={2}>4× GbE RJ45 PoE PSE (802.3af, M12 impermeable) + 1× GbE RJ45 (M12 impermeable)</td>
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
      <td colSpan={2}>-20°C a +60°C (con flujo de aire de 0,7 m/s)</td>
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

## Descripción general del hardware

:::note
Se añadirán imágenes de la descripción general del hardware una vez que el producto esté finalizado.
:::

**Indicadores LED:**

| LED | Color | Estado | Descripción |
|-----|-------|--------|-------------|
| PWR | Verde | On | El dispositivo está alimentado |
| PWR | Verde | Off | El dispositivo no está alimentado |
| ACT | Verde | Flashing | Actividad de acceso al SSD |

## Flashear JetPack

:::note
Se añadirán instrucciones de flasheo una vez que el BSP esté disponible. El proceso de flasheo sigue el mismo procedimiento que otros dispositivos de la serie reComputer J40.
:::

Consulta la página [Flash BSP with Jetpack to Selected Jetson](/es/flash/jetpack_to_selected_product) para obtener la guía de flasheo más reciente.

### Requisitos previos

- reComputer Rugged J40
- Fuente de alimentación (19–48 V CC)
- PC host con Ubuntu (20.04 o 22.04)
- Cable de datos USB Tipo C (para flasheo)
- Monitor externo + cable HDMI
- Teclado y ratón

### Entrar en modo Force Recovery

<div align="center">
  <img width="700" src="https://files.seeedstudio.com/wiki/rugged_J401/1.jpg"/>
</div>

1. Conecta un cable USB Tipo C entre el puerto **DEVICE** y tu PC host con Ubuntu.
2. Mantén pulsado el botón **REC** (Recovery).
3. Mientras mantienes pulsado REC, conecta la fuente de alimentación para encender la placa.
4. Suelta el botón Recovery.

En el PC host con Ubuntu, verifica el modo de recuperación con:

```bash
lsusb
```

Salida esperada por módulo:
- Orin NX 16GB: `0955:7323 NVidia Corp`
- Orin Nano 8GB: `0955:7523 NVidia Corp`

## Extraer y flashear

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
```

**Paso 2:** Entra en el directorio extraído y ejecuta el comando de flasheo:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

## Recursos

- [Hoja de datos de reComputer Rugged J40](#) *(próximamente)*
- [Linux_for_Tegra Source Code](https://github.com/Seeed-Studio/Linux_for_Tegra)
- [Comparación de dispositivos NVIDIA Jetson](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
