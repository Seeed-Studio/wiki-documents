---
description: Guía de inicio de reServer Industrial
title: Guía de inicio de reServer Industrial
keywords:
- reServer
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reServer_Industrial_Getting_Started
last_update:
  date: 09/22/2023
  author: Lakshantha
---

# Guía de inicio con reServer Industrial

<div align="center"><img width ="700" src="https://files.seeedstudio.com/wiki/reServer-Industrial/1.png"/></div>

La serie reServer Industrial ofrece servidores NVR (Network Video Recorder) compactos, sin ventilador y habilitados para IA, que incluyen módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rendimiento de IA de 20 TOPS a 100 TOPS. reServer Industrial viene preinstalado con JetPack 5.1.1, lo que simplifica el desarrollo y resulta ideal para crear un VMS (Video Management System) junto con potentes capacidades de IA, aportando la transformación digital a sectores como ciudades inteligentes, seguridad, automatización industrial y fábricas inteligentes.

reServer Industrial incluye un disipador pasivo y un diseño sin ventilador, lo que lo hace ideal para entornos exigentes. El disipador pasivo permite una refrigeración eficiente sin necesidad de ventilador, reduciendo el riesgo de fallos por polvo u otros contaminantes. El diseño sin ventilador también reduce el ruido y el consumo de energía, lo que lo hace adecuado para entornos sensibles al ruido y ayuda a minimizar los costos energéticos.

reServer Industrial cuenta con 5 puertos RJ45 GbE, de los cuales 4 son puertos PoE PSE para suministrar alimentación a dispositivos como cámaras IP a través de Ethernet. Esto elimina la necesidad de una fuente de alimentación independiente y facilita el despliegue de dispositivos de red en áreas sin tomas de corriente disponibles. El puerto GbE restante se utiliza para conectar a un switch o router de red, habilitando la comunicación con otros dispositivos de la red y el acceso a Internet.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-industrial-J4012-p-5747.html">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consíguelo ahora 🖱️</font></span></strong>
</a></div>

## Características

- **Servidor Edge AI compacto y sin ventilador:** Alimentado por módulos NVIDIA Jetson™ Orin Nano/Orin NX, con un rendimiento de IA de 20 TOPS a 100 TOPS; rango de temperatura de -20 ~ 60 °C con 0.7 m/s de flujo de aire
- **Procesamiento multitrama:** 5× GbE RJ45 (4 para 802.3af PSE), maneja múltiples flujos con procesamiento en tiempo real
- **Almacenamiento ampliable:** 2 bahías para HDD/SSD SATA de 2.5", más un zócalo M.2 2280 para SSD NVMe
- **Interfaces industriales:** Incluye puerto COM, puertos DI/DO, puerto CAN, USB 3.1 y módulo TPM2.0 opcional
- **Conectividad híbrida:** Compatible con 5G/4G/LTE/LoRaWAN® (módulo opcional) con ranura para tarjeta Nano SIM
- **Certificaciones:** FCC, CE, UKCA, ROHS, KC

## Especificaciones

<table>
  <thead>
    <tr>
      <th colSpan={2}>Nombre del producto</th>
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
      <td colSpan={3}>GPU NVIDIA de arquitectura Ampere con 1024 núcleos y 32 Tensor Cores</td>
      <td>GPU NVIDIA de arquitectura Ampere con 512 núcleos y 16 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos y 64 bits; 2 MB L2 + 4 MB L3</td>
      <td colSpan={3}>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits; 1.5 MB L2 + 4 MB L3</td>
    </tr>
    <tr>
      <td>Memoria</td>
      <td>16GB 128-bit LPDDR5 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 102.4 GB/s</td>
      <td>8GB 128-bit LPDDR5 68 GB/s</td>
      <td>4GB 64-bit LPDDR5 34 GB/s</td>
    </tr>
    <tr>
      <td>Codificación de vídeo</td>
      <td colSpan={2}>Estándares compatibles: H.265 (HEVC), H.264, AV1 1×4K60 (H.265) | 3×4K30 (H.265) | 6×1080p60 (H.265) | 12×1080p30 (H.265)</td>
      <td colSpan={2}>1080p30 compatible mediante 1–2 núcleos de CPU</td>
    </tr>
    <tr>
      <td>Decodificación de vídeo</td>
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
      <td colSpan={4}>M.2 Key M (2280) SSD PCIe Gen4.0 (incluye M.2 NVMe SSD 128 G)</td>
    </tr>
    <tr>
      <td rowSpan={9}>E/S</td>
      <td>Ethernet</td>
      <td colSpan={4}>1× LAN0 RJ45 GbE (10/100/1000 Mbps)</td>
    </tr>
    <tr>
      <td> </td>
      <td colSpan={4}>4× LAN RJ45 GbE PoE (PSE 802.3af 15 W, 10/100/1000 Mbps)</td>
    </tr>
    <tr>
      <td>USB</td>
      <td colSpan={4}>4× USB3.1, 1× USB2.0 Type-C (modo dispositivo), 1× USB2.0 Type-C para Debug UART &amp; RP2040</td>
    </tr>
    <tr>
      <td>DI/DO</td>
      <td colSpan={4}>4×DI, 4×DO, 3×GND_DI, 2×GND_DO, 1×GND_ISO, 1×CAN</td>
    </tr>
    <tr>
      <td>COM</td>
      <td colSpan={4}>1× DB9 (RS232/RS422/RS485)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={2}>1× HDMI 2.1 Tipo A 7680×4320 a 30 Hz</td>
      <td colSpan={2}>1× HDMI 1.4 Tipo A 3840×2160 a 30 Hz</td>
    </tr>
    <tr>
      <td>SATA</td>
      <td colSpan={4}>2 bahías para 2.5" SATA HDD/SSD (SATA III 6.0 Gbps)</td>
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
      <td colSpan={4}>Mini PCIe para LoRaWAN®/4G/serie inalámbrica (módulo opcional)</td>
    </tr>
    <tr>
      <td>M.2 Key B</td>
      <td colSpan={4}>M.2 Key B (3042/3052) compatible con 4G/5G (módulo opcional)</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={4}>Sin ventilador, disipador pasivo; 1× conector de ventilador (5 V PWM)</td>
    </tr>
    <tr>
      <td>TPM</td>
      <td colSpan={4}>1× conector TPM 2.0 (módulo opcional)</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={4}>1× zócalo RTC (incluye CR1220), ×RTC de 2 pines</td>
    </tr>
    <tr>
      <td rowSpan={2}>Alimentación</td>
      <td>Fuente de alimentación</td>
      <td colSpan={4}>DC 12 V–36 V, bornera de 2 pines</td>
    </tr>
    <tr>
      <td>Adaptador de corriente</td>
      <td colSpan={4}>Adaptador de 24 V / 5 A (sin cable de alimentación)</td>
    </tr>
    <tr>
      <td rowSpan={9}>Mecánico</td>
      <td>Dimensiones (An × Pr × Al)</td>
      <td colSpan={4}>194.33 mm × 187 mm × 95.5 mm</td>
    </tr>
    <tr>
      <td>Peso</td>
      <td colSpan={4}>2.8 kg</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={4}>Escritorio, riel DIN, VESA</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td colSpan={4}>-20 ~ 60 °C con 0.7 m/s</td>
    </tr>
    <tr>
      <td>Humedad de funcionamiento</td>
      <td colSpan={4}>95% @ 40 °C (sin condensación)</td>
    </tr>
    <tr>
      <td>Temperatura de almacenamiento</td>
      <td colSpan={4}>-40 ~ 85 °C</td>
    </tr>
    <tr>
      <td>Humedad de almacenamiento</td>
      <td colSpan={4}>60 °C @ 95% HR (sin condensación)</td>
    </tr>
    <tr>
      <td>Vibración</td>
      <td colSpan={4}>3 Grms @ 5 ~ 500 Hz, aleatorio, 1 h/eje</td>
    </tr>
    <tr>
      <td>Impacto</td>
      <td colSpan={4}>50 G de aceleración pico (11 ms de duración, eMMC, microSD o mSATA)</td>
    </tr>
    <tr>
      <td colSpan={2}>Sistema operativo</td>
      <td colSpan={4}>JetPack 5.1.1 preinstalado (o superior) (se proporciona Linux OS con paquete de compatibilidad de placa)</td>
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
El dispositivo viene preinstalado con JetPack 5.1.1. Si no hay requisitos especiales, no es necesario volver a flashear el sistema.
:::

reServer Industrial viene preinstalado con JetPack 5.1.1 en un SSD de 128 GB junto con los controladores necesarios. Esto incluye componentes del SDK como CUDA, cuDNN y TensorRT. Sin embargo, si deseas reflashear JetPack en el SSD incluido o en uno nuevo, puedes seguir los pasos a continuación. Actualmente solo ofrecemos orientación para JP5.1.1 y seguiremos actualizándola en el futuro.

:::note
Si quieres usar SSD con reServer Industrial, te recomendamos únicamente las versiones de [128 GB](https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html), [256 GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html), [512 GB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html) y [1 TB](https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html) de Seeed.
:::

### Requisitos previos

Debes preparar el siguiente hardware antes de comenzar con reServer Industrial:

- reServer Industrial
- Adaptador de corriente incluido con cable de alimentación ([versión US](https://www.seeedstudio.com/AC-US-p-5122.html) o [versión EU](https://www.seeedstudio.com/AC-EU-p-5121.html))
- PC anfitrión con Ubuntu (nativo o VM usando VMware Workstation Player)
- Cable de transmisión de datos USB Type-C
- Monitor externo
- Cable HDMI
- Teclado y ratón

### Entrar en modo de recuperación forzada

Ahora necesitas entrar en modo de recuperación en la placa reServer Industrial para flashear el dispositivo. Conecta un cable USB Type-C entre el puerto **DEVICE** y tu PC. Usa un pin e insértalo en el orificio **REC** para presionar el botón de recuperación y, mientras lo mantienes presionado, conecta el **conector de alimentación de bornera de 2 pines** incluido al conector de alimentación de la placa (asegúrate de usar los 2 tornillos para fijar la bornera) y conecta el adaptador de corriente incluido con un cable de alimentación para encender la placa.

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reServer-Industrial/4.jpg"/></div>

:::note
Asegúrate de encender el dispositivo mientras mantienes presionado el botón de RECOVERY; de lo contrario, no entrará en modo de recuperación.
:::

En el PC con Ubuntu, abre una ventana de Terminal y ejecuta el comando **lsusb**. Si el contenido devuelto muestra una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo de recuperación forzada.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

### Diferentes métodos de flasheo

Aquí ofrecemos 2 métodos diferentes para flashear.

1. Descargar la imagen completa del sistema que hemos preparado (incluye NVIDIA JetPack y controladores de periféricos de hardware) y flashearla al dispositivo
2. Descargar el NVIDIA L4T oficial, usar los controladores de periféricos incluidos y flashear el dispositivo

:::note
La descarga del primer método es de alrededor de 14 GB y la del segundo método es de aproximadamente 3 GB.
:::

<!-- Code -->

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="method1" label="Método 1">

#### Descargar imagen del sistema

- **Paso 1:** Descarga la imagen del sistema en tu PC con Ubuntu correspondiente a la placa que estés usando.

<div class="table-center">
  <table style={{textAlign: 'center'}}>
    <thead>
      <tr>
        <th>Dispositivo</th>
        <th>Versión de JetPack</th>
        <th>Versión de L4T</th>
        <th>Enlace de imagen</th>
        <th>Enlace alternativo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowSpan={5}>reServer Industrial J4012</td>
        <td>5.1.1</td>
        <td>35.3.1</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWoMiCYaghJGsmgX8ki3lrwB67RFYkI9zvBW6t86w_7chg?e=afbbOs" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EWxVw3rZF-JPuKp0ksJZkGABWmsSxVizaJIqQBL5TDL1JA?e=4JJ2XV" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EWcp7ma66_9JmfEjnMrxbfEBZk7LxwoJ2YuN-LDWEITE_g?e=NuKvDr" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVOMzCf8ulxAgCOCN9jlsUcBNR29X1dB6ILeYngqVHtwVA?e=UVc1qc" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EY9t48fwnJVLraZyoVzYe2gB5RMb9FMXqKxVT9_WBFnnzQ?e=rcBfY5" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EW5Dood6aQ9DpT6ZaXWF50QBmyAyOowCktzqZj48sQeyhw?e=VVP56J" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EcbD8zqcSTpAjBmjHZTAvU8BBd80FekQMV9jMD35xU4Arw?e=DNWcyn" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeSEdyl9XTNEkea8ntTsqM8B8w_Hs8JV-toT71bgvR3V0A?e=9P4ZAw" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EZDbctjmL2tAtpW_gaqhylABEE5UT2chlro5vi20sFKygA?e=yE5NfC" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/Eb6xTuWGRdlDpJfgLSWS7S4BpnKYxkI9RKl6tJbU0xI4FQ?e=m84vbP" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/Eeg04qGBxQNOjC2Q0hvfvugBx_V05xFkYM5ThVH9ECMZ6A?e=8fDLxZ" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EahC2mJQOQRBtoqG7fhuIecBSEo7w_Py8nGy_FB51QdtHg?e=W0U23d" target="_blank" rel="noopener noreferrer">Download1</a>
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
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EeCYmkCdhqRGrh2idfcueV0B4btw0JAzCt8i7ePWZwSeng?e=XH9HDx" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EfzhFgx4V3NGu3q1MBtdqFkBdIxC0emeKmE22AHQL1GxhQ?e=KNHsQm" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>5.1.3</td>
        <td>35.5.0</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EVqo37I8yiNEjpo14kR5kYAB0ZhMNUhIN8X5pZCEjk4f6A?e=0XGC0W" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.0</td>
        <td>36.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQgrBDUICyZCnKBI_qVeupoBYqQJ1dP7_lcxUwxUphg6Qw?e=ObUzPI" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          <a href="https://szseeedstudio-my.sharepoint.cn/:u:/g/personal/youjiang_yu_szseeedstudio_partner_onmschina_cn/EXxmIAk7sGdOnPcaZHvz7ykB36pGkNwZscpdu3ZytrfD0Q?e=ElJ2bb" target="_blank" rel="noopener noreferrer">Download2</a>
        </td>
      </tr>
      <tr>
        <td>6.1</td>
        <td>36.4</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/ET-LxPOYaNtIjoJQ4I-gKEcBxU-AmFX9R-mWPH1p-eyBdA?e=EpAopw" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
      <tr>
        <td>6.2</td>
        <td>36.4.3</td>
        <td>
          <a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/EQd4hYwgVPxEk8CtZgfU2SsBzn18zMuQOHXq45yq6gykYw?e=sAoguo" target="_blank" rel="noopener noreferrer">Download1</a>
        </td>
        <td>
          -
        </td>
      </tr>
    </tbody>
  </table>
</div>

<p style={{ fontSize: '0.9em', color: 'yellow' , textAlign: 'center'}}>
  * Los archivos de imagen de Download1 y Download2 son los mismos. Puedes elegir el enlace con mayor velocidad de descarga.
</p>

<!-- The source code for the above images can be found [here](https://github.com/Seeed-Studio/Linux_for_Tegra) -->

- **Paso 2:** Extrae el archivo generado

```sh
tar -xvf <file_name>.tar.gz
````

#### Flashear en Jetson

- **Paso 1:** Navega al archivo extraído y ejecuta el comando de flasheo como se muestra:

```sh
cd mfi_reserver-orin-industrial
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0 --showlogs
```

Ahora comenzará el flasheo de la imagen del sistema en la placa. Si el proceso es exitoso, verás la siguiente salida:

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 2:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de esto, la placa se reiniciará y ¡estará lista para usarse!

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

- **Paso 1:** Descarga los archivos de controladores en tu PC con Ubuntu según la placa que estés usando

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
      <td rowSpan={2}>Jetson Orin NX 8GB / 16GB</td>
      <td rowSpan={2}><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nx-8-16-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
      <td rowSpan={4}>5.1.1</td>
      <td rowSpan={4}>35.3.1</td>
    </tr>
    <tr>
    </tr>
    <tr>
      <td>Jetson Orin Nano 8GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-8-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
    <tr>
      <td>Jetson Orin Nano 4GB</td>
      <td><a href="https://sourceforge.net/projects/nvidia-jetson/files/reServer-Industrial/orin-nano-4-reserver-industrial.zip/download" target="_blank" rel="noopener noreferrer">Download</a></td>
    </tr>
  </tbody>
</table>

- **Paso 2:** Mueve los controladores de periféricos descargados a la misma carpeta donde está el directorio **Linux_For_Tegra**

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/29.jpg"/></div>

- **Paso 3:** Extrae el archivo .zip del controlador descargado. Aquí instalamos adicionalmente el paquete **unzip**, necesario para descomprimir el archivo .zip

```sh
sudo apt install unzip
sudo unzip xxxx.zip # Reemplaza xxxx con el nombre del archivo de controladores
```

Se te preguntará si deseas reemplazar archivos. Escribe **A** y presiona ENTER para reemplazar los archivos necesarios.

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/reServer-Industrial/30.png"/></div>

#### Flashear en Jetson

- **Paso 1:** Navega al directorio **Linux_for_Tegra** y ejecuta el comando de flasheo como sigue:

```sh
cd Linux_for_Tegra
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_nvme.xml -S 80GiB  -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml --no-systemimg" --network usb0  reserver-orin-industrial external
```

Ahora comenzará el flasheo de la imagen del sistema en la placa. Si el proceso es exitoso, verás la siguiente salida:

<div align="center"><img width ="650" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/99.png"/></div>

- **Paso 2:** Conecta la placa a una pantalla usando el conector HDMI de la placa y completa la configuración inicial.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/104.png"/></div>

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/105.png"/></div>

Después de eso, la placa se reiniciará y verás lo siguiente:

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Industrial/106.png"/></div>

- **Paso 3:** Abre una terminal dentro del dispositivo y ejecuta lo siguiente; el dispositivo se reiniciará y quedará listo para usarse:

```sh
systemctl disable nvgetty.service
sudo depmod -a
sudo reboot
```

Además, si deseas instalar componentes del SDK como CUDA, cuDNN y TensorRT, ejecuta lo siguiente:

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
  Para aprender más sobre cómo usar todo el hardware y las interfaces en la placa reServer Industrial, debe seguir este [**wiki**](/es/reserver_industrial_hardware_interface_usage):
:::

## Recursos

(cambia los enlaces)

- [Hoja de datos de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Datasheet.pdf)
- [Guía de referencia de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-Reference-Guide.pdf)
- [Comparativa de dispositivos y placas base NVIDIA Jetson](https://files.seeedstudio.com/products/NVIDIA/NVIDIA-Jetson-Devices-and-carrier-boards-comparision.pdf)
- [Archivo 3D de reServer Industrial](https://files.seeedstudio.com/wiki/reServer-Industrial/reServer-Industrial-3D.stp)

## Soporte técnico

No dudes en enviar incidencias en nuestro [foro](https://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
