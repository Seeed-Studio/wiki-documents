---
description: Este artículo proporciona una guía de inicio rápido para la reComputer Mini (basada en la plataforma NVIDIA Jetson Orin), incluidas las especificaciones del dispositivo y los pasos para la configuración inicial.
title: Primeros pasos con la reComputer Mini
keywords:
  - reComputer
  - reComputer mini
  - Computadora embebida
  - robots
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.webp
slug: /es/recomputer_jetson_mini_getting_started
last_update:
  date: 12/11/2024
  author: Youjiang
---

# Primeros pasos con la reComputer Mini

<!-- change image -->
<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini.jpg"/>  
</div>

La reComputer Mini es una pequeña computadora con IA impulsada por el módulo NVIDIA Jetson Orin Nano/Orin NX, que ofrece un rendimiento de IA de hasta 100 TOPS. Está equipada con un puerto PCIe en la parte inferior para brindar amplias capacidades de expansión, que también se pueden personalizar de manera flexible. Todo el sistema está diseñado para integrarse en máquinas autónomas como drones, robots de patrulla, robots de reparto, etc. Puede ocupar directamente una entrada de 54 V CC, lo que puede usarse ampliamente en sistemas alimentados por baterías.


<!-- Buy links -->

## Características

- **Brillante rendimiento de IA para producción:** logra hasta **100 TOPS** rendimiento de IA con baja potencia y latencia, creado por NVIDIA Orin SoC que combina la arquitectura de GPU NVIDIA Ampere™ con capacidad operativa de 64 bits, procesamiento de imágenes y video multifunción avanzado integrado y aceleradores de aprendizaje profundo NVIDIA.
- **Dispositivo de IA de borde del tamaño de una mano:** Tamaño compacto de **63 mm * 95 mm * 42 mm**, con un módulo NVIDIA Jetson Orin NX de 16 GB, Carrier Board Mini J401, ventilador y gabinete. Soporta montaje en escritorio y pared.
- **Ampliable con E/S enriquecidas:** Incluye hasta 7 USB, DP 2.1, 2 CSI, 1 RJ45 para GbE, M.2 Key E, M.2 Key M, CAN de doble canal y GPIO.
- **Acelera la comercialización de soluciones:** **JetPack 6.1.1** preinstalado en SSD NVMe de 128 GB, sistema operativo Linux BSP, compatible con el software Jetson y las principales librerías de desarrollo de IA. 
- **Escala para implementar:** admite OTA y servicios de administración remota impulsados ​​por Allxon y Balena.
- **Personalización flexible:** incluye el cambio de módulos de accesorios, logotipo y modificación de interfaces de hardware según el diseño original de la reComputer Mini J4012.


## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Jetson Orin SoM</th>
    </tr>
    <tr>
      <th>Especificaciones</th>
      <th>reComputer Mini J3010</th>
      <th>reComputer Mini J3011</th>
      <th>reComputer Mini J4011</th>
      <th>reComputer Mini J4012</th>
    </tr>
    <tr>
      <td>Módulo</td>
      <td>Jetson Orin Nano 4GB</td>
      <td>Jetson Orin Nano 8GB</td>
      <td>Jetson Orin NX 8GB</td>
      <td>Jetson Orin NX 16GB</td>
    </tr>
    <tr>
      <td>Rendimiento IA</td>
      <td>20 TOPS</td>
      <td>40 TOPS</td>
      <td>70 TOPS</td>
      <td>100 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>512-core Arquitectura GPU NVIDIA Ampere con 16 núcleos Tensor</td>
      <td colSpan={3}>1024-core Arquitectura GPU NVIDIA Ampere con 32 núcleos Tensor</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU<br />1.5MB L2 + 4MB L3</td>
      <td>6-core Arm® Cortex®-A78AE v8.2 64-bit CPU 1.5MB L2 + 4MB L3</td>
      <td>8-core Arm® Cortex®-A78AE v8.2 64-bit CPU 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia máxima CPU</td>
      <td colSpan={2}>1.5 GHz</td>
      <td colSpan={2}>2 GHz</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>4GB 64-bit LPDDR5<br />34 GB/s</td>
      <td>8GB 128-bit LPDDR5<br />68 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
    </tr>
    <tr>
      <td>Acelerador DL</td>
      <td colSpan={2}>/</td>
      <td>1x NVDLA v2</td>
      <td>2x NVDLA v2</td>
    </tr>
    <tr>
      <td>Encoder de Video</td>
      <td colSpan={2}>1080p30 soportado por 1-2 CPU cores</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de video</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Carrier Board</th>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan={4}>128GB NVMe SSD</td>
    </tr>
    <tr>
      <td>Redes</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x Módulo M.2 Key E for WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td rowSpan={7}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>2x USB 3.2 Tipo-A (10Gbps)<br />1x USB 2.0 Micro-B (Modo dispositivo)<br />1x USB 2.0 Tipo-C (Modo host)<br />1x USB 2.0 JST-4pin (Modo host)</td>
    </tr>
    <tr>
      <td>UART</td>
      <td colSpan={3}>1x UART; 1x UART para depuración</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={3}>1x DP 2.1 (incluido en el conector tipo C)</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x 4 conector para ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td colSpan={3}>1x Botón de reset; 1x Botón de recuperación</td>
    </tr>
    <tr>
      <td>Puerto de extensión</td>
      <td colSpan={3}>2x 60 pin conector de alta velocidad (para placa de expansión)<br />1x 10 pin conector de alimentación (para una placa de extensión)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC 2-pin</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>1x Conector XT30 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa de extensión</td>
    </tr>
    <tr>
      <td>Redes</td>
      <td>Ethernet</td>
      <td colSpan={3}>1x RJ-45 Gigabit Ethernet (10/100/1000M)</td>
    </tr>
    <tr>
      <td rowSpan={5}>I/O</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Tipo-A (10 Gbps)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1x CAN JST 4pin (3.3V); 1x CAN (XT30 2+2) </td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x 4 pin conector de ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>I2C</td>
      <td colSpan={3}>2x I2C JST 4pin (3.3V)</td>
    </tr>
    <tr>
      <td>SPI</td>
      <td colSpan={3}>1x I2S JST 6pin (3.3V)</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>2x Conector XT30 2+2 (12-54V DC)</td>
    </tr>
    <tr>
      <td colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Otross</td>
    </tr>
    <tr>
      <td rowSpan={3}>Mecánica</td>
      <td >Dimensiones (W x D x H)</td>
      <td colSpan={3}>63mm * 95mm * 42mm (Sin extensión)<br />63mm * 95mm * 66.7mm (Con extensión)</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={3}>345g (Sin extensión)<br />462g (Con extensión)</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={3}>escritorio, montaje en muros</td>
    </tr>
    <tr>
      <td>Temperatura de operación</td>
      <td colSpan={4}>-10℃ ~ 50℃</td>
    </tr>
    <tr>
      <td>Garantía</td>
      <td colSpan={4}>1 año</td>
    </tr>
  </tbody>
</table>
</div>

## Descripción general de Hardware

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/hardware.png"/>  
</div>


## Flashear JetPack OS

Aquí, tse mostraremos cómo actualizar [Jetpack 6.0](https://developer.nvidia.com/embedded/jetson-linux-archive) en un SSD NVMe conectado a la reComputer Mini.

### Módulo Nvidia Jetson compatible

- [Módulo NVIDIA® Jetson Orin™ Nano 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5554.html) 
- [Módulo NVIDIA® Jetson Orin™ Nano 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5552.html) 
- [Módulo NVIDIA® Jetson Orin™ NX 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5523.html) 
- [Módulo NVIDIA® Jetson Orin™ NX 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5524.html) 

### Prerequisitos

- PC Host con Ubunto OS
- reComputer Mini J4012/ J4011/ J3010 o J3011
- Cable de datos USB Micro-B

:::info

Te recomendamos que utilices dispositivos host físicos de Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.
        
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (PC host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
    </tr>
    <tr>
        <td >JetPack 5.x</td>
        <td > ✅ </td>
        <td > ✅ </td>
        <td > </td>
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

### Prepare la imagen de Jetpack

Aquí, necesitamos descargar la imagen del sistema a nuestra PC con Ubuntu correspondiente al módulo Jetson que estamos usando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th>Link de descarga</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.0</td>
      <td>Orin Nx 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZojl6PUN4FFkshyt9a8kFEBUVVrQVO669V-pB_PNJvCuQ?e=YzFd1Z" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>Orin Nx 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUNTXrMsDcJCnIN2RvmXg6EBBLY6PRZiegvUjqI_N2i0YQ?e=SXEXXz" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EabRgwAjKaJFv11KtK2r06QB_fn91IFoC97qV0LGKGPyWQ?e=fy7LwO" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
    <tr>
      <td>Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVGTsdS4n-RLhFxn6tx1NFgB4axESjVlifNXHaFzNAsmWw?e=1oNQeE" target="_blank" rel="noopener noreferrer">Descarga</a></td>
    </tr>
  </tbody>
</table>
</div>

:::peligro
El archivo de imagen Jetpack6 tiene un tamaño aproximado de **16,7 GB** y su descarga debería tardar unos 60 minutos. Espera a que se complete la descarga.
:::

### Entra a modo de recuperación forzada

:::info
Antes de continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo de recuperación forzada.
:::

<div align="center">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/HEIXFkizP5Y" title="Enter Force Recovery Mode (reComputer Mini)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

<details>

<summary> Paso a paso </summary>

<div align="center">
  <img width="{600}" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/mini/reComputer_mini_rec.png" />
</div>

- **Paso 1.** Conecta un cable USB Micro-B entre el puerto DISPOSITIVO USB2.0 y la PC host de Ubuntu.
- **Paso 2.** Utiliza un alfiler e insértalo en el orificio de RECUPERACIÓN para presionar el botón de recuperación y mientras lo mantienes presionado.
- **Step 3.**  Conecta la fuente de alimentación.
- **Step 4.**  Suelta el botón de recuperación.

</details>

En la PC host de Linux, abre una ventana de Terminal e ingresa el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según la Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.
- Para Orin NX 16GB: 0955:7323 NVidia Corp
- Para Orin NX 8GB: 0955:7423 NVidia Corp
- Para Orin Nano 8GB: 0955:7523 NVidia Corp
- Para Orin Nano 4GB: 0955:7623 NVidia Corp

La siguiente imagen es para la Orin Nx 16GB:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/3.png"/>
</div>


### Flashea la Jetson con un solo comando.

<details>

<summary> Flashea el dispositivo con un único comando </summary>

La reComputer Jetson J30/40 Mini ha lanzado un script de actualización con un solo click, que admite la actualización de Jetpack 6.0.

```bash
wget -O ./flashing.sh https://files.seeedstudio.com/OSHW_Jetson/flashing.sh  && sudo chmod 777 ./flashing.sh && ./flashing.sh
```

<iframe width="560" height="315" src="https://www.youtube.com/embed/ZFBzTlyOjhE?si=uNN-l5VVGbAyGnot" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

:::Precaución
El script de flasheo con un solo click tiene como objetivo hacer que el flasheo de jetpack sea más rápido. La versión actual es una beta y puede tener muchos problemas. Esperamos tu comprensión. Si hay problemas de flasheo, sigue "Actualizar el dispositivo paso a paso" mostrado a continuación y envía tus comentarios en nuestro [canal Discord Jetson](https://discord.com/channels/862602258452578314/930732339624026152). Los solucionaremos rápidamente y mejoraremos esta función en un futuro próximo.
:::

</details>


### Flashear la Jetson Paso a paso

**Paso 1:** Extrae el archivo de imagen descargado en la PC host de Ubuntu:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-orin-nano-8g-j401-6.0-36.3.0-2024-06-07.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para actualizar el sistema jetpack al SSD NVMe:

```bash
cd mfi_xxxx
# For example: cd mfi_recomputer-orin-j401
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás el siguiente resultado si el proceso de actualización es exitoso

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando flash puede ejecutarse durante 2 a 10 minutos.
:::

**Paso 3:** Conecta el J501 a una pantalla usando el conector HDMI en la placa y finaliza la configuración inicial:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **Configuración del sistema** según tus necesidades.
:::

**Paso 4 (opcional):** Instala el SDK de Nvidia Jetpack

Abre la terminal en el dispositivo Jetson y ejecuta los siguientes comandos:

```bash
sudo apt update
sudo apt install nvidia-jetpack
```

## Uso de interfaces de hardware

:::info
Si deseas obtener más información sobre las especificaciones detalladas y el uso de la interfaz de hardware, consulta [esta wiki](https://wiki.seeedstudio.com/recomputer_jetson_mini_hardware_interfaces_usage/).
:::

## Soporte Tech y discusión del producto

¡Gracias por elegir nuestros productos! Estamos aquí para darte soporte y asegurar que tu experiencia con nuestros productos sea la mejor posible. Tenemos diversos canales de comunicación para adaptarnos distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
