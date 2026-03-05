---
description: Introducción a reServer Industrial
title: Introducción a reServer Industrial
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /reServer_Industrial_Getting_Started
sku: 114110247,114110248,114110250,114110249
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# Introducción a reServer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

La serie reServer Industrial ofrece servidores NVR (Network Video Recorder) compactos, sin ventilador y habilitados para IA, que incluyen módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rendimiento de IA que va de 20 TOPS a 100 TOPS. reServer Industrial viene preinstalado con Jetpack 5.1.1, lo que simplifica el desarrollo; es ideal para construir un VMS (Video Management System) junto con potentes capacidades de IA, lo que aporta transformación digital a industrias como ciudades inteligentes, seguridad, automatización industrial y fábricas inteligentes.

reServer Industrial viene con un disipador de calor pasivo y un diseño sin ventilador, lo que lo hace ideal para su uso en entornos exigentes. El disipador de calor pasivo permite una refrigeración eficiente sin necesidad de un ventilador, reduciendo el riesgo de fallos de componentes debido al polvo u otros contaminantes. El diseño sin ventilador también reduce los niveles de ruido y el consumo de energía, lo que lo hace adecuado para su uso en entornos sensibles al ruido y minimiza los costos energéticos.

reServer Industrial tiene 5 puertos RJ45 GbE, 4 de los cuales son puertos PoE PSE para proporcionar alimentación a través de Ethernet a dispositivos como cámaras IP. Esto elimina la necesidad de una fuente de alimentación independiente y facilita el despliegue de dispositivos de red en áreas sin tomas de corriente fácilmente disponibles. El puerto GbE restante se utiliza para conectarse a un switch de red o router, lo que permite la comunicación con otros dispositivos en la red y el acceso a Internet.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
</a></div>

## Características

- **Servidor Edge AI compacto y sin ventilador:** Impulsado por módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rendimiento de IA que va de 20 TOPS a 100 TOPS, rango de temperatura más amplio de -20 ~ 60°C con flujo de aire de 0.7m/s
- **Procesamiento multicanal:** 5× GbE RJ45 (4 para 802.3af PSE), maneja múltiples flujos con procesamiento en tiempo real
- **Almacenamiento ampliable:** 2 bahías para unidades SATA HDD/SSD de 2.5", más un zócalo M.2 2280 para SSD NVMe
- **Interfaces industriales:** Incluye puerto COM, puertos DI/DO, puerto CAN, USB 3.1 y módulo TPM2.0 opcional
- **Conectividad híbrida:** Compatible con 5G/4G/LTE/LoRaWAN® (módulo opcional) con ranura para tarjeta Nano SIM
- **Certificaciones:** FCC, CE, UKCA, ROHS, KC

## Especificaciones

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nombre del producto </th>
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
      <td rowSpan={6}>Procesador<br />Sistema</td>
      <td>Rendimiento de IA</td>
      <td>100 TOPS</td>
      <td>70 TOPS</td>
      <td>40 TOPS</td>
      <td>20 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores </td>
      <td>GPU NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos, 64 bits; 2MB L2 + 4MB L3 </td>
      <td colSpan={3}>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos, 64 bits, 1.5MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>16GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4GB/s</td>
      <td>8GB 128-bit LPDDR5 68 GB/s</td>
      <td>4GB 64-bit LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>Codificación de video</td>
      <td colSpan={2}>Estándares compatibles: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 compatible con 1-2 núcleos de CPU </td>
    </tr>
    <tr>
      <td>Decodificación de video</td>
      <td colSpan={2}>Estándares compatibles: H.265 (HEVC), H.264, VP9, AV1 1×8K30 (H.265) | 2×4K60 (H.265) | 4×4K30 (H.265) | 9×1080p60 (H.265) | 18×1080p30 (H.265)</td>
      <td colSpan={2}>Estándares compatibles: H.265 (HEVC), H.264, VP9, AV1 1×4K60 (H.265) | 2×4K30 (H.265) | 5×1080p60 (H.265) | 11×1080p30 (H.265)</td>
    </tr>
    <tr>
      <td rowSpan={2}>Almacenamiento</td>
      <td>eMMC</td>
      <td colSpan={4}>-</td>
    </tr>
    <tr>
      <td>Expansión</td>
      <td colSpan={4}>M.2 Key M (2280) PCIe Gen4.0 SSD (incluye M.2 NVMe SSD 128G)</td>
    </tr>
    <tr>
      <td rowSpan={9}>E/S</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE (PSE 802.3 af 15 W, 10/100/1000Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Type C (modo dispositivo), 1× USB2.0 Type C para Debug UART y RP2040</td>
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
      <td colSpan={2}>1×HDMI 2.1 Tipo A 7680x4320 a 30 Hz</td>
      <td colSpan={2}>1×HDMI 1.4 Tipo A 3840x2160 a 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 bahías para unidades que admiten HDD/SSD SATA de 2.5" (SATA III 6.0Gbps)</td>
    </tr>
    <tr>
      <td>SIM</td>
      <td colSpan={4}>1× ranura para tarjeta Nano SIM</td>
    </tr>
    <tr>
      <td>Botón</td>
      <td colSpan={4}>Botón de reinicio, botón de recuperación</td>
    </tr>
    <tr>
      <td rowSpan={5}>Expansión</td>
      <td>Mini PCIe</td>
      <td colSpan={4}>Mini PCIe para LoRaWAN®/4G/Serie inalámbrica (módulo opcional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) compatible con 4G/5G (módulo opcional) </td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={4}>Sin ventilador, disipador de calor pasivo; 1× conector de ventilador (5V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× conector TPM 2.0 (módulo opcional)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× zócalo RTC (incluye CR1220),×RTC de 2 pines</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentación</td>
      <td>Fuente de alimentación</td>
      <td colSpan={4}>Bloque de terminales de 2 pines DC 12V-36V</td>
    </tr>
    <tr>
      <td>Adaptador de corriente</td>
      <td colSpan={4}>Adaptador de corriente 24V /5A (sin cable de alimentación)</td>
    </tr>
    <tr>
      <td rowSpan={9}>Mecánico</td>
      <td>Dimensiones (W x D x H)</td>
      <td colSpan={4}>194.33mm×187mm×95.5mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={4}>2.8kg</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={4}>Escritorio, carril DIN, VESA</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td colSpan={4}>-20 ~ 60°C con 0.7m/s</td>
    </tr>
    <tr>
      <td>Humedad de funcionamiento</td>
      <td colSpan={4}>95% @ 40 °C (sin condensación)</td>
    </tr>
    <tr>
      <td>Temperatura de almacenamiento</td>
      <td colSpan={4}>-40 ~ 85°C</td>
    </tr>
    <tr>
      <td>Humedad de almacenamiento</td>
      <td colSpan={4}>60°C@ 95% HR (sin condensación)</td>
    </tr>
    <tr>
      <td>Vibración</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz, aleatoria, 1 hr/eje</td>
    </tr>
    <tr>
      <td>Choque</td>
      <td colSpan={4}>Aceleración máxima de 50G (duración de 11 mseg, eMMC, microSD o mSATA)</td>
    </tr>
    <tr>
      <td colSpan={2}>SO</td>
      <td colSpan={4}>Jetpack 5.1.1 (o superior) preinstalado (proporciona sistema operativo Linux con paquete de soporte para la placa) </td>
    </tr>
    <tr>
      <td colSpan={2}>Certificación</td>
      <td colSpan={4}>FCC, CE, RoHS, UKCA, KC</td>
    </tr>
    <tr>
      <td colSpan={2}>Garantía</td>
      <td colSpan={4}>2 años</td>
    </tr>
  </tbody>
</table>

## Descripción general del hardware

### Sistema completo

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/2.jpg"/></div>

### Placa portadora

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/3.jpg"/></div>

## Flashear JetPack

:::danger
El dispositivo vendrá preinstalado con JetPack 5.1.1. Si no hay requisitos especiales, no es necesario volver a flashear el sistema.
:::

reServer Industrial viene preinstalado con JetPack 5.1.1 en un SSD de 128GB junto con los controladores necesarios. Esto incluye componentes del SDK como CUDA, CUDNN y TensorRT. Sin embargo, si deseas volver a flashear Jetpack en el SSD incluido o en un nuevo SSD, puedes seguir los pasos a continuación. Actualmente solo proporcionamos instrucciones para JP5.1.1 y seguiremos actualizándolas en el futuro.

:::note
Si deseas utilizar SSD con reServer Industrial, solo te recomendamos que elijas las versiones de [128GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) y [1TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) de Seeed.
:::

### Requisitos previos

Debes preparar el siguiente hardware antes de comenzar con reServer Industrial

- reServer Industrial
- Adaptador de corriente suministrado con cable de alimentación ([versión US](https://www.seeedstudio.com/AC-US-p-5122.html) o [versión EU](https://www.seeedstudio.com/AC-EU-p-5121.html))
- PC host con Ubuntu (nativo o VM usando VMware Workstation Player)
- Cable de transmisión de datos USB tipo C
- Monitor externo
- Cable HDMI
- Teclado y ratón

### Entrar en modo de recuperación forzada

Ahora debes entrar en modo de recuperación en la placa reServer Industrial para poder flashear el dispositivo. Conecta un cable USB tipo C entre el puerto **DEVICE** y tu PC. Usa un pin e insértalo en el orificio **REC** para pulsar el botón de recuperación y, mientras lo mantienes presionado, conecta el **conector de alimentación de bloque de terminales de 2 pines** incluido al conector de alimentación de la placa (asegúrate de usar los 2 tornillos para fijar el terminal en su lugar) y conecta el adaptador de corriente incluido con un cable de alimentación para encender la placa

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
Asegúrate de encender el dispositivo mientras mantienes presionado el botón RECOVERY, de lo contrario no entrará en modo de recuperación
:::

En el PC host con Ubuntu, abre una ventana de Terminal e introduce el comando **lsusb**. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

### Diferentes métodos de flasheo

Aquí ofrecemos 2 métodos diferentes de flasheo.

1. Descargar la imagen completa del sistema que hemos preparado, que incluye NVIDIA JetPack, controladores de periféricos de hardware y flashearla al dispositivo
2. Descargar el NVIDIA L4T oficial, usar los controladores de periféricos de hardware incluidos y flashear al dispositivo

:::note
La descarga del primer método es de alrededor de 14GB y la descarga del segundo método es de aproximadamente 3GB
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="Método 1">

#### Descargar imagen del sistema

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estás utilizando.

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Dispositivo</th>
        <th>Versión de JetPack</th>
        <th>Versión de L4T</th>
        <th>Enlace de imagen</th>
        <th>Enlace de imagen alternativo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUVO61wR2NhFqcAQCeWxsBsBWgOf5p_BBTxSgPG4gfAx7g?e=v0Qhhm" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQApYwrXCs7WTqZPvGNHA7YuAdAS_5YcEIXv-gnenja-Szk?e=Ub9Pvc" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EV0nlnSfW3NEmcDq4l3u1M4BrzThb0-y44qa4hGXk-XfWg?e=G9ub1C" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdCn0yi0ArRKivHb3mKLrwcBmBEKXlGKLCnNkRQNzyylAw?e=QTnhQa" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWbfqyoEzXBBsDycFgKH0lEB05TQNLcZidMt2Py2ZOtLdw?e=4etAqu" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDs10njGAUER7nbpqF6dI7ZAceK7lnySeHU9k7KIySj6HA?e=iMWtO8" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EYMjh00vng9JhG0d26iS1oIBOhHSs4oa19pPd40qrTkD7Q?e=x6zZTH" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDP0PJc34WXRLzV7VqXzinRAWDanqL6CzmSPfSILTojKBI?e=XYR9ee" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZlrBLKGf5VDiczIJaPNpNoBcby3urzv85oWmS34pKtcGg?e=u7aWDL" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EQJBb6D2ISBEnoUnUkqVEgkB9npGJ48jw5p2DXFIWaNJxA?e=lOJiFM" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EekoAp4j8WJHi9xe-eoJTW4BH-qx2Sttmlh7uljQdNkGXw?e=g7ZNa1" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
            <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQDoOdZqBdvLQaQ45yKI9a7zAVwIdyxIrU_Sk2xicLYy6QE?e=cepk9Z" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EelLW5qjyWBEgoJN_SUmKhQBTnkElasNJtxxfSgfVuXXuw?e=c2THTl" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQA4HdvfMZwTQY0Aceq3uygRAVlGI13-oGlSRHRxDpxanUU?e=fCJ8ww" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY0cen9MPIhJpM2LBfm2edEBZtw53n2C9PwqsY2XaiSH_w?e=LWQren" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EdqRMLVCzHtIkHUShgZ91xoBK367uzXyC_mTGQOzlfJhyQ?e=wgOhwj" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EUnzsQBX-jxJkHZNxkYdoFsBN0coyFSY50_5LspOv8kfew?e=2baOzY" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBZKkQtQMJiRYcOfA3DzOtEAV7O4ayXgVWrMKAclHYO-HQ?e=LWfgcH" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ETo-G6kS2atGpfsWK6uX2HIBcrwsAboHjDBB_rypE4iyTA?e=GZyglq" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">Descargar2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQADLFrAQ2RAQb74nXNq6MlnAeaN-qPzaTk0Sg21ZqawFxA?e=KXkWZZ" target="_blank" rel="noopener noreferrer">Descargar1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQBUl_MHgm8YSY6OQyCuNEf-AfgUPNTd9-rd2I6pimkcraE?e=KzSPtW" target="_blank" rel="noopener noreferrer">Descargar1</a>
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

- **Paso 2:** Extrae el archivo generado

```sh
tar -xvf <file_name>.tar.gz
```

#### Flashear a Jetson

- **Paso 1:** Navega hasta el archivo extraído anteriormente y ejecuta el comando de flasheo como se indica a continuación

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 2:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y estará lista para usar.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

---

</TabItem>
<TabItem value="method2" label="Método 2">

#### Descargar y preparar NVIDIA L4T y rootfs

```sh
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/jetson_linux_r35.3.1_aarch64.tbz2
wget https://developer.nvidia.com/downloads/embedded/l4t/r35_release_v3.1/release/tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2
tar xf jetson_linux_r35.3.1_aarch64.tbz2
sudo tar xpf tegra_linux_sample-root-filesystem_r35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/
cd Linux_for_Tegra/
sudo ./apply_binaries.sh
sudo ./tools/l4t_flash_prerequisites.sh
```

#### Descargar y preparar controladores

- **Paso 1:** Descarga los archivos del controlador en tu PC con Ubuntu correspondientes a la placa que estás utilizando

<table>
  <thead>
    <tr>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga</th>
      <th>Versión de JetPack</th>
      <th>Versión de L4T</th>
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

- **Paso 2:** Mueve los controladores periféricos descargados a la misma carpeta que el directorio **Linux_For_Tegra**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **Paso 3:** Extrae el archivo .zip del controlador descargado. Aquí instalamos adicionalmente el paquete **unzip** que es necesario para descomprimir el archivo .zip

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Replace xxxx with the driver file name
```

Aquí se te preguntará si deseas reemplazar los archivos. Escribe A y presiona ENTER para reemplazar los archivos necesarios

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Flashear a Jetson

- **Paso 1:** Navega al directorio **Linux_for_Tegra** y ejecuta el comando de flasheo como se indica a continuación

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

Ahora comenzará a flashear la imagen del sistema a la placa. Si el flasheo es exitoso, verás la siguiente salida

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 2:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y verás lo siguiente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Paso 3:** Abre una ventana de terminal dentro del dispositivo, ejecuta lo siguiente, el dispositivo se reiniciará y estará listo para usar.

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Además, si quieres instalar componentes del SDK como CUDA, cuDNN, TensorRT, ejecuta lo siguiente

```sh
sudo apt update
sudo apt install nvidia-jetpack -y
```

---

</TabItem>
</Tabs>

<!-- Code END -->

## Uso del hardware e interfaces

:::info
  Para aprender más sobre cómo usar todo el hardware e interfaces en la placa reServer Industrial, debes seguir esta [**wiki**](/es/reserver_industrial_hardware_interface_usage):
:::

## Recursos

(cambiar los enlaces)

- [Hoja de datos de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [Guía de referencia de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [Comparación de dispositivos NVIDIA Jetson y carrier boards](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Archivo 3D de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Soporte técnico

No dudes en enviar incidencias en nuestro [foro](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
