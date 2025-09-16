---
description: Introducción a reServer Industrial
title: Introducción a reServer Industrial
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reServer_Industrial_Getting_Started
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# Introducción a reServer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

La serie reServer Industrial ofrece servidores NVR (Grabador de Video en Red) compactos, sin ventilador y habilitados para IA, incluyendo módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rango de 20 TOPS a 100 TOPS de rendimiento de IA. reServer Industrial viene preinstalado con Jetpack 5.1.1, simplifica el desarrollo, ideal para construir VMS (Sistema de Gestión de Video) junto con potentes capacidades de IA, lo que aporta transformación digital a través de industrias de ciudades inteligentes, seguridad, automatización industrial, fábricas inteligentes.

reServer Industrial viene con un disipador de calor pasivo y un diseño sin ventilador, lo que lo hace ideal para su uso en entornos exigentes. El disipador de calor pasivo permite una refrigeración eficiente sin necesidad de un ventilador, reduciendo el riesgo de falla de componentes debido al polvo u otros contaminantes. El diseño sin ventilador también reduce los niveles de ruido y el consumo de energía, haciéndolo adecuado para su uso en entornos sensibles al ruido y minimizando los costos de energía.

reServer industrial tiene 5 puertos RJ45 GbE, 4 de los cuales son puertos PoE PSE para proporcionar alimentación a través de Ethernet a dispositivos como cámaras IP. Esto elimina la necesidad de una fuente de alimentación separada y facilita el despliegue de dispositivos de red en áreas sin tomas de corriente fácilmente disponibles. El puerto GbE restante se utiliza para conectar a un switch de red o router, permitiendo la comunicación con otros dispositivos en la red y acceso a Internet.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
</a></div>

## Características

- **Servidor de IA Edge Compacto sin Ventilador:** Impulsado por módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rango de 20 TOPS a 100 TOPS de rendimiento de IA, rango de temperatura más amplio de -20 ~ 60°C con flujo de aire de 0.7m/s
- **Procesamiento Multi-Stream:** 5× GbE RJ45(4 para 802.3af PSE ), maneja múltiples streams con procesamiento en tiempo real
- **Almacenamiento Expandible:** 2 bahías de unidades para HDD/SSD SATA de 2.5", más un socket M.2 2280 para SSD NVMe
- **Interfaces Industriales:** Incluye puerto COM, puertos DI/DO, puerto CAN, USB 3.1, y módulo TPM2.0 opcional
- **Conectividad Híbrida:** Soporta 5G/4G/LTE/LoRaWAN® (módulo opcional) con ranura para tarjeta Nano SIM
- **Certificaciones:** FCC, CE, UKCA, ROHS, KC

## Especificaciones

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nombre del Producto </th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">J4012</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J4011-p-5748.html">J4011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3011-p-5750.html">J3011</a></th>
      <th><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">reServer Industrial</a><br /><a href="https://www.seeedstudio.com/reServer-industrial-J3010-p-5749.html">J3010</a></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colSpan={2}>Módulo NVIDIA Jetson</td>
      <td>Orin NX 16GB</td>
      <td>Orin NX 8GB</td>
      <td>Orin Nano 8GB</td>
      <td>Orin Nano 4GB</td>
    </tr>
    <tr>
      <td colSpan={2}>SKU</td>
      <td>114110247</td>
      <td>114110248</td>
      <td>114110249</td>
      <td>114110250</td>
    </tr>
    <tr>
      <td rowSpan={6}>Sistema<br />Procesador</td>
      <td>Rendimiento de IA</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>GPU de arquitectura NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores </td>
      <td>GPU de arquitectura NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 64 bits de 8 núcleos; 2MB L2 + 4MB L3 </td>
      <td colSpan={3}>CPU Arm® Cortex®-A78AE v8.2 de 64 bits de 6 núcleos 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 68 GB/s</td>
      <td>4GB 64-bit LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>Codificación de Video</td>
      <td colSpan={2}>Estándares soportados: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 soportado por 1-2 núcleos de CPU </td>
    </tr>
    <tr>
      <td>Decodificación de Video</td>
      <td colSpan={2}>Estándares soportados: H.265 (HEVC), H.264, VP9, AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>Estándares soportados: H.265 (HEVC), H.264, VP9, AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Almacenamiento</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>Expansión</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD (M.2 NVMe SSD 128G incluido)</td>
    </tr>
    <tr>
      <td rowSpan={9}>E/S</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE(PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Type C(Modo dispositivo), 1× USB2.0 Type C Para Debug UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI,4×DO,3×GND_DI,2×GND_DO,1×GND_ISO,1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={2}>1×HDMI 2.1 Type A 7680x4320 a 30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Type A 3840x2160 a 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 Bahías de Unidades para soportar HDD/SSD SATA de 2.5"(SATA III 6.0Gbps)</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× Ranura para tarjeta Nano SIM</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td colSpan={4}>Botón de Reset, Botón de Recuperación</td>
    </tr>
    <tr>
      <td rowSpan={5}>Expansión</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe para LoRaWAN®/4G/Series Inalámbrico (Módulo opcional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) soporta 4G/5G (Módulo opcional) </td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={4}>Sin ventilador, disipador de calor pasivo; 1×Conectores de ventilador(5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× Conector TPM 2.0 (Módulo opcional)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× Socket RTC (CR1220 incluido),×RTC 2-pin</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentación</td>
      <td>Fuente de Alimentación</td>
      <td colSpan={4}>DC 12V-36V Bloque de terminales de 2 pines</td>
    </tr>
    <tr>
      <td>Adaptador de Alimentación</td>
      <td colSpan={4}>Adaptador de Alimentación 24V /5A(Sin cable de alimentación)</td>
    </tr>
    <tr>
      <td rowSpan={9}>Mecánico</td>
      <td>Dimensiones (A x P x Al)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={4}>Escritorio, Riel DIN, VESA</td>
    </tr>
    <tr>
      <td>Temperatura de Operación</td>
      <td colSpan={4}>-20 ~ 60°C con 0.7m/s</td>
    </tr>
    <tr>
      <td>Humedad de Operación</td>
      <td colSpan={4}>95% @ 40 °C (Sin condensación)</td>
    </tr>
    <tr>
      <td>Temperatura de almacenamiento</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>Humedad de almacenamiento</td>
      <td colSpan={4}>60°C@ 95% RH(Sin condensación)</td>
    </tr>
    <tr>
      <td>Vibración</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz, aleatorio, 1 hr/eje</td>
    </tr>
    <tr>
      <td>Choque</td>
      <td colSpan={4}>Aceleración pico de 50G (duración de 11 msec.,eMMC,microSD, o mSATA)</td>
    </tr>
    <tr>
      <td colSpan={2}>SO</td>
      <td colSpan={4}>Jetpack 5.1.1 preinstalado (superior) (proporciona SO Linux con paquete de soporte de placa) </td>
    </tr>
    <tr>
      <td colSpan={2}>Certificación</td>
      <td colSpan={4}>FCC, CE, RoHS, UKCA, KC</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantía</td>
      <td colSpan={4}>2 Años</td>
    </tr>
  </tbody>
</table>

## Descripción General del Hardware

### Sistema Completo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### Placa Portadora

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## Flashear JetPack

:::danger
El dispositivo vendrá preinstalado con JetPack 5.1.1. Si no hay requisitos especiales, no necesitas volver a flashear el sistema.
:::

reServer Industrial viene preinstalado con JetPack 5.1.1 en un SSD de 128GB junto con los controladores necesarios. Esto incluye componentes SDK como CUDA, CUDNN y TensorRT. Sin embargo, si quieres volver a flashear Jetpack al SSD incluido o a un nuevo SSD, puedes seguir los pasos a continuación. Actualmente solo proporcionamos orientación para JP5.1.1 y seguiremos actualizando esto en el futuro.

:::note
Si quieres usar SSDs con reServer Industrial, solo te recomendamos que elijas las versiones de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html), y [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) de Seeed.
:::

### Prerrequisitos

Necesitas preparar el siguiente hardware antes de comenzar con reServer Industrial

- reServer Industrial
- Adaptador de corriente incluido con cable de alimentación ([versión US](https://www.seeedstudio.com/AC-US-p-5122.html) o [versión EU](https://www.seeedstudio.com/AC-EU-p-5121.html))
- PC Host Ubuntu (nativo o VM usando VMware Workstation Player)
- Cable de transmisión de datos USB Type-C
- Monitor externo
- Cable HDMI
- Teclado y ratón

### Entrar en Modo de Recuperación Forzada

Ahora necesitas entrar en modo de recuperación en la placa reServer Industrial para flashear el dispositivo. Conecta un cable USB Type-C entre el puerto **DEVICE** y tu PC. Usa un pin e insértalo en el orificio **REC** para presionar el botón de recuperación y mientras lo mantienes presionado, conecta el **conector de bloque terminal de 2 pines** incluido al conector de alimentación en la placa (asegúrate de usar los 2 tornillos para atornillar el terminal en su lugar) y conecta el adaptador de corriente incluido con un cable de alimentación para encender la placa

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
Asegúrate de encender el dispositivo mientras mantienes presionado el botón RECOVERY o de lo contrario no entrará en modo de recuperación
:::

En el PC host Ubuntu, abre una ventana de Terminal e ingresa el comando **lsusb**. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que uses, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

### Diferentes Métodos de Flasheo

Aquí ofrecemos 2 métodos diferentes de flasheo.

1. Descargar toda la imagen del sistema que hemos preparado que incluye NVIDIA JetPack, controladores de periféricos de hardware y flashear al dispositivo
2. Descargar el L4T oficial de NVIDIA, usar los controladores de periféricos de hardware incluidos y flashear al dispositivo

:::note
La descarga del primer método es de alrededor de 14GB y la descarga del segundo método es de aproximadamente 3GB
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="Método 1">

#### Descargar Imagen del Sistema

- **Paso 1:** Descarga la imagen del sistema a tu PC Ubuntu correspondiente a la placa que estés usando.

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Dispositivo</th>
        <th>Versión JetPack</th>
        <th>Versión L4T</th>
        <th>Enlace de Imagen</th>
        <th>Enlace de Imagen Alternativo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUVO61wR2NhFqcAQCeWxsBsBWgOf5p_BBTxSgPG4gfAx7g?e=v0Qhhm" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Descarga2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWcp7ma66_9JmfEjnMrxbfEBZk7LxwoJ2YuN-LDWEITE_g?e=NuKvDr" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">Descarga2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbfqyoEzXBBsDycFgKH0lEB05TQNLcZidMt2Py2ZOtLdw?e=4etAqu" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVOMzCf8ulxAgCOCN9jlsUcBNR29X1dB6ILeYngqVHtwVA?e=UVc1qc" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J4011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYMjh00vng9JhG0d26iS1oIBOhHSs4oa19pPd40qrTkD7Q?e=x6zZTH" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Descarga2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcbD8zqcSTpAjBmjHZTAvU8BBd80FekQMV9jMD35xU4Arw?e=DNWcyn" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">Descarga2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EekoAp4j8WJHi9xe-eoJTW4BH-qx2Sttmlh7uljQdNkGXw?e=g7ZNa1" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
            <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeSEdyl9XTNEkea8ntTsqM8B8w_Hs8JV-toT71bgvR3V0A?e=9P4ZAw" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3011</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EelLW5qjyWBEgoJN_SUmKhQBTnkElasNJtxxfSgfVuXXuw?e=c2THTl" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Descarga2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eeg04qGBxQNOjC2Q0hvfvugBx_V05xFkYM5ThVH9ECMZ6A?e=8fDLxZ" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">Descarga2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EahC2mJQOQRBtoqG7fhuIecBSEo7w_Py8nGy_FB51QdtHg?e=W0U23d" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td rowSpan={5}>reServer Industrial J3010</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Descarga1</a>
        </td>
        <td>
        <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">Descargar2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVqo37I8yiNEjpo14kR5kYAB0ZhMNUhIN8X5pZCEjk4f6A?e=0XGC0W" target="_blank" rel="noopener noreferrer">Descargar1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">Descargar1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">Descargar2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">Descargar1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQd4hYwgVPxEk8CtZgfU2SsBzn18zMuQOHXq45yq6gykYw?e=sAoguo" target="_blank" rel="noopener noreferrer">Descargar1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Los archivos de imagen de Descargar1 y Descargar2 son los mismos. Puedes elegir el enlace con la velocidad de descarga más rápida.
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **Paso 2:** Extraer el archivo generado

```sh
tar -xvf <file_name>.tar.gz
```

#### Flashear a Jetson

- **Paso 1:** Navegar al archivo extraído anteriormente y ejecutar el comando de flasheo como sigue

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 2:** Conectar la placa a una pantalla usando el conector HDMI en la placa y completar la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y estará lista para usar!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="Método 2">

#### Descargar y Preparar NVIDIA L4T y rootfs

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### Descargar y Preparar Controladores

- **Paso 1:** Descargar los archivos de controladores a tu PC Ubuntu correspondientes a la placa que estás usando

<table>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de Descarga</th>
      <th>Versión JetPack</th>
      <th>Versión L4T</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={2}>Jetson Orin NX 8GB/ 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Descargar</a></td>
    </tr>
  </tbody>
</table>

- **Paso 2:** Mover los controladores periféricos descargados a la misma carpeta con el directorio **Linux_For_Tegra**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **Paso 3:** Extraer el archivo .zip de controladores descargado. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

Aquí preguntará si reemplazar los archivos. Escribe A y presiona ENTER para reemplazar los archivos necesarios

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Flashear a Jetson

- **Paso 1:** Navegar al directorio **Linux_for_Tegra** y ejecutar el comando de flasheo como sigue

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 2:** Conectar la placa a una pantalla usando el conector HDMI en la placa y completar la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y verás lo siguiente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Paso 3:** Abrir una ventana de terminal dentro del dispositivo, ejecutar lo siguiente, el dispositivo se reiniciará y estará listo para usar!

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Además, si quieres instalar componentes SDK como CUDA, cuDNN, TensorRT, por favor ejecuta lo siguiente

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## Uso de Hardware e Interfaces

:::info
  Para aprender más sobre cómo usar todo el hardware e interfaces en la placa reServer Industrial, necesitas seguir esta [**wiki**](/es/reserver_industrial_hardware_interface_usage):
:::

## Recursos

(cambiar los enlaces)

- [Hoja de Datos reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [Guía de Referencia reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [Comparación de Dispositivos NVIDIA Jetson y Placas Portadoras](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Archivo 3D reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Soporte Técnico

Por favor no dudes en enviar problemas a nuestro [foro](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
