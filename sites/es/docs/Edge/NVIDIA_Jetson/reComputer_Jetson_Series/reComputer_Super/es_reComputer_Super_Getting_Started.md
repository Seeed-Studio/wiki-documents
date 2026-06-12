---
description: Introducción para reComputer Super
title: Introducción a reComputer Super
keywords:
  - reComputer Super
  - Introducción a reComputer Super
  - Super
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/super2.webp
slug: /recomputer_jetson_super_getting_started
sku: E2025032601,114110314,114110312,114110313,114110311
last_update:
  date: 06/19/2025
  author: Yaohui
createdAt: '2025-03-26'
updatedAt: '2026-05-21'
url: https://wiki.seeedstudio.com/es/recomputer_jetson_super_getting_started/
---

import JetsonLeadQuote from '@site/src/components/JetsonLeadQuote';

# Introducción a reComputer Super

<div align="center">
  <img width ="900" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/super/1.png"/>  
</div>

La Serie reComputer Super potencia la reComputer Classic, ofreciendo hasta un aumento de 1,7x hasta 157 TOPS en rendimiento de IA. Incluye modelos con Jetson Orin Nano (11410311, 11410312) y Jetson Orin NX (11410313, 11410314).
Diseñada tanto para desarrollo como para producción, viene con una amplia gama de interfaces, incluyendo M.2 Key E/M, doble Ethernet RJ45, Mini-PCIe, 4xUSB 3.2, HDMI 2.1, 4xCSI y CAN. Con Jetpack 6.2 y Linux OS BSP preinstalados, permite una entrada inmediata al mercado.
También es compatible con una amplia gama de frameworks de LLM e IA Física, como NVIDIA, Hugging Face, ONNX, PyTorch y ROS2/1 en el edge de forma fluida, incluso combinando estas capacidades multimodales con aplicaciones de robótica para enriquecer el desarrollo de IA Física.

:::note
Opciones de personalización disponibles: branding del logotipo, embalaje y flasheo de firmware.
:::

<div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-Bundle.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong></a>
<a class="get_one_now_item" href="https://www.seeedstudio.com/fusion_branding_firmware.html?utm_source=wiki&utm_medium=button" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>Personaliza ahora ➜</font></span></strong></a>
</div>

## Características clave  

### 🚀 ​**Impulso de rendimiento**  

- ​**Aumento de rendimiento de IA de 1,7x** sobre reComputer Classic, ofreciendo ​**157 TOPS**  
- Impulsado por ​**Jetson Orin Nano** (Modelos: 11410311, 11410312) y ​**Jetson Orin NX** (Modelos: 11410313, 11410314)  

### 🔌 ​**Conectividad e interfaces ricas**  

- ​**M.2 Key E/M** + ​**Mini-PCIe** para ampliación  
- ​**Doble Ethernet RJ45** para redes de alta velocidad  
- ​**4x USB 3.2**, ​**HDMI 2.1**, ​**4x CSI** (Interfaz Serie de Cámara)  
- Compatibilidad con ​**bus CAN** para aplicaciones industriales/robóticas  

### 🛠️ ​**Listo para desarrollo y producción**  

- ​**Jetpack 6.2** y ​**Linux OS BSP** preinstalados para despliegue inmediato  
- Integración fluida de IA en el edge con frameworks:  
  - ​**NVIDIA**, ​**Hugging Face**, ​**ONNX**, ​**PyTorch**  
  - ​**ROS2/1** para aplicaciones de robótica  
- Compatible con desarrollo de ​**IA multimodal** e ​**IA Física**  

### 🤖 ​**Optimizado para IA en el edge y robótica**  

- Combina las capacidades de ​**LLM (Large Language Model)** con ​**IA Física** en el edge  
- Ideal para robótica, automatización industrial e inferencia de IA en tiempo real  
- Acelera la ​**entrada al mercado** con una pila de software preconfigurada  

:::tip

### ⚠️ Directrices de alimentación y accesorios  

#### 1. ​**Adaptador de corriente**  

- ​**Jetson Orin Nano**: 12V 5A (conector cilíndrico 5525)  
- ​**Jetson Orin NX**: 19V 4.74A (conector cilíndrico 5525)  
- Utiliza siempre ​**adaptadores oficiales** y cumple los requisitos de alimentación.  

#### 2. ​**Cable de alimentación de CA**  

- Utiliza cables tipo trébol ​**específicos de la región**.  

#### 3. ​**Accesorios**  

- Solo accesorios ​**oficialmente recomendados** (por ejemplo, cámaras, módulos inalámbricos) para un rendimiento y compatibilidad óptimos.

:::

## Especificaciones

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Módulo de sistema Jetson Orin Super</th>
    </tr>
    <tr>
      <th>Especificaciones</th>
      <th>reComputer Super J3010</th>
      <th>reComputer Super J3011</th>
      <th>reComputer Super J4011</th>
      <th>reComputer Super J4012</th>
    </tr>
    <tr>
      <td>Módulo</td>
      <td>NVIDIA Jetson Orin™ Nano 4GB</td>
      <td>NVIDIA Jetson Orin™ Nano 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 8GB</td>
      <td>NVIDIA Jetson Orin™ NX 16GB</td>
    </tr>
    <tr>
      <td>Rendimiento de IA</td>
      <td>34 TOPS</td>
      <td>67 TOPS</td>
      <td>117 TOPS</td>
      <td>157 TOPS</td>
    </tr>
    <tr>
      <td>GPU</td>
      <td>GPU NVIDIA Ampere de 512 núcleos con 16 Tensor Cores</td>
      <td colSpan={3}>GPU NVIDIA Ampere de 1024 núcleos con 32 Tensor Cores</td>
    </tr>
    <tr>
      <td>CPU</td>
      <td colSpan={2}>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits<br />1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 6 núcleos y 64 bits 1.5MB L2 + 4MB L3</td>
      <td>CPU Arm® Cortex®-A78AE v8.2 de 8 núcleos y 64 bits 2MB L2 + 4MB L3</td>
    </tr>
    <tr>
      <td>Frecuencia máxima de CPU</td>
      <td colSpan={2}>1.7 GHz (MAXN_SUPER)</td>
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
      <td>Codificador de vídeo</td>
      <td colSpan={2}>1080p30 compatible con 1-2 núcleos de CPU</td>
      <td colSpan={2}>1x 4K60 (H.265) | 3x 4K30 (H.265)<br />6x 1080p60 (H.265) | 12x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>Decodificador de vídeo</td>
      <td colSpan={2}>1x 4K60 (H.265)<br />2x 4K30 (H.265)<br />5x 1080p60 (H.265)<br />11x 1080p30 (H.265)</td>
      <td colSpan={2}>1x 8K30 (H.265)<br />2x 4K60 (H.265)<br />4x 4K30 (H.265)<br />9x 1080p60 (H.265)<br />18x 1080p30 (H.265)</td>
    </tr>
    <tr>
      <td>CSI</td>
      <td colSpan={5}>Hasta 4 cámaras<br />(8 mediante canales virtuales)<br />8 líneas MIPI CSI-2<br />D-PHY 2.1 (hasta 20Gbps)</td>
    </tr>
    <tr>
      <td>Mecánico</td>
      <td colSpan={5}>69.6mm x 45mm<br />Conector SO-DIMM de 260 pines</td>
    </tr>
    <tr>
      <th colSpan={5} style={{ fontSize: '24px', fontWeight: 'bold' }}>Placa portadora</th>
    </tr>
    <tr>
      <td>Almacenamiento</td>
      <td colSpan={4}>1x M.2 KEY M PCIe (incluye SSD M.2 NVMe 2280 de 128G)</td>
    </tr>
    <tr>
      <td rowSpan={3}>Redes</td>
      <td>M.2 KEY E</td>
      <td colSpan={3}>1x M.2 Key E para módulo WiFi/Bluetooth</td>
    </tr>
    <tr>
      <td>Mini PCIe</td>
      <td colSpan={3}>1x mini-PCIe para módulo LTE 4G</td>
    </tr>
    <tr>
      <td>Ethernet</td>
      <td colSpan={3}>2x RJ45 Gigabit Ethernet</td>
    </tr>
    <tr>
      <td rowSpan={11}>E/S</td>
      <td >USB</td>
      <td colSpan={3}>4x USB 3.2 Type-A (5Gbps); <br />1x USB 2.0 Type-C (Modo dispositivo/Depuración);</td>
    </tr>
    <tr>
      <td>Cámara</td>
      <td colSpan={3}>4x mipi CSI(2-lane 15-Pin)</td>
    </tr>
    <tr>
      <td>CAN</td>
      <td colSpan={3}>1 x CAN(Conector de 4 pines)</td>
    </tr>
    <tr>
      <td>Pantalla</td>
      <td colSpan={3}>1x HDMI 2.1</td>
    </tr>
    <tr>
      <td>Ventilador</td>
      <td colSpan={3}>1x conector de ventilador de 4 pines (5V PWM); <br />1x conector de ventilador de 4 pines (12V PWM);</td>
    </tr>
    <tr>
      <td>Puerto de expansión</td>
      <td colSpan={3}>1x cabecera de expansión de 40 pines;<br />1x cabecera de control y UART de 12 pines;</td>
    </tr>
    <tr>
      <td>RTC</td>
      <td colSpan={3}>1x RTC de 2 pines;<br />1x zócalo RTC</td>
    </tr>
    <tr>
      <td>LED</td>
      <td colSpan={3}>2x LED(PWR y ACT)</td>
    </tr>
    <tr>
      <td>Botón de orificio</td>
      <td colSpan={3}>1x PWR;<br />1x RESET;</td>
    </tr>
    <tr>
      <td>Interruptor DIP</td>
      <td colSpan={3}>1x REC</td>
    </tr>
    <tr>
      <td>Agujero para antena</td>
      <td colSpan={3}>4x agujero para antena</td>
    </tr>
    <tr>
      <td>Alimentación</td>
      <td colSpan={4}>Conector de corriente continua cilíndrico 5525 de 12-19V </td>
    </tr>
    <tr>
      <td>Versión de Jetpack</td>
      <td colSpan={4}>Jetpack 6.2 </td>
    </tr>
    <tr>
      <td>Dimensiones mecánicas</td>
      <td colSpan={4}>130mm x 120mm x 66mm</td>
    </tr>
    <tr>
      <td>Instalación</td>
      <td colSpan={4}>Escritorio, montaje en pared</td>
    </tr>
    <tr>
      <td>Temperatura de funcionamiento</td>
      <td colSpan={4}>-10℃~60℃</td>
    </tr>
    <tr>
      <td>Garantía</td>
      <td colSpan={4}>2 años</td>
    </tr>
    <tr>
      <td>Certificación</td>
      <td colSpan={4}>CE,FCC,RoHS,REACH,Telec, KC, Prueba de vibración(GB/T 2423)</td>
    </tr>
  </tbody>
</table>
</div>

## Flashear el sistema operativo JetPack

### Módulo compatible

- [NVIDIA® Jetson Orin™ Nano Module 4GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-4GB-Module-p-5553.html)
- [NVIDIA® Jetson Orin™ Nano Module 8GB](https://www.seeedstudio.com/NVIDIA-JETSON-ORIN-NANO-8GB-Module-p-5551.html?___store=retailer)
- [NVIDIA® Jetson Orin™ NX Module 8GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-8GB-p-5522.html)
- [NVIDIA® Jetson Orin™ NX Module 16GB](https://www.seeedstudio.com/NVIDIA-Jetson-Orin-NX-Module-16GB-p-5523.html)

### Requisitos previos

- PC host con Ubuntu
- reComputer Super
- Cable de transmisión de datos USB Type-C

:::info

Recomendamos que utilices dispositivos host físicos con Ubuntu en lugar de máquinas virtuales.
Consulta la siguiente tabla para preparar la máquina host.

<table style={{textAlign: 'center'}}>
  <tbody>
    <tr>
        <td  rowspan="2"> Versión de JetPack </td>
        <td class="dbon" colspan="3"> Versión de Ubuntu (ordenador host) </td>
    </tr>
    <tr>
        <td > 18.04 </td>
        <td > 20.04 </td>
        <td > 22.04 </td>
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

### Preparar la imagen de Jetpack

Aquí, necesitamos descargar la imagen del sistema en nuestro PC con Ubuntu correspondiente al módulo Jetson que estamos utilizando:

<div class="table-center">
<table style={{textAlign: 'center'}}>
  <thead>
    <tr>
      <th>Versión de Jetpack</th>
      <th>Módulo Jetson</th>
      <th>Enlace de descarga1</th>
      <th>SHA256</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowSpan={4}>6.2</td>
      <td> Orin Nano 4GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQC_1-Pv5_FDR4n5j9gQV5KQAZ_mvUQAiacz_5QTE0xdeQ8?e=LkQBPH">Download</a></td>
      <td>7a1f2085f50d77e5d86d3f01ccdc1255<br />c90a7c7d22a6ab7e4c4e3263e3148670</td>
    </tr>
    <tr>
      <td>Orin Nano 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQCkqeSMa1GUQ57Y0K-pz0GtAYgobLanXDHP_d-rJIAzkcY?e=VqEnca">Download</a></td>
      <td>d26cbf4e16b9d5879e4b737754f65bb0<br />ea485b98760a1aa0657e07054efd8877</td>
    </tr>
    <tr>
      <td>Orin NX 8GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAuSOue4x97QKJGLUkBabdzAamlCy6twJd68P69GlaTzws?e=hw82Sw">Download</a></td>
      <td>55a559dc6736650d45c2d787265c7e2c<br />36cd2d7f233ae58b00364aec7d82455c</td>
    </tr>
    <tr>
      <td>Orin NX 16GB</td>
      <td><a href="https://seeedstudio88-my.sharepoint.com/:u:/g/personal/youjiang_yu_seeedstudio88_onmicrosoft_com/IQAdI1ka4kNkRb8wipNloxXOAUAyCwTYci47z_eLpjvh1iQ?e=9YQ5nm">Download</a></td>
      <td>51f816d57dedd6e2305acd0ae8e0ffdc<br />19aec7319e351b7a70489f7eab8d69c6</td>
    </tr>
  </tbody>
</table>
</div>

:::danger
El archivo de imagen de Jetpack6 tiene un tamaño aproximado de **14.1GB** y debería tardar alrededor de 60 minutos en descargarse. Por favor, espera pacientemente a que la descarga se complete.
:::

:::info
Para verificar la integridad del firmware descargado, puedes comparar el valor hash SHA256.

En una máquina host con Ubuntu, abre la terminal y ejecuta el comando `sha256sum <File>` para obtener el valor hash SHA256 del archivo descargado. Si el hash resultante coincide con el hash SHA256 proporcionado en la wiki, se confirma que el firmware que descargaste está completo e intacto.
:::

### Entrar en modo Force Recovery

:::info
Antes de poder continuar con los pasos de instalación, debemos asegurarnos de que la placa esté en modo force recovery.
:::

<details>

<summary> Paso a paso </summary>

**Paso 1.** Cambia el interruptor al modo RESET.

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/reComputer-super/flash.jpg"/>  
</div>

**Paso 2.** Enciende la reComputer Super conectando el cable de alimentación.

**Paso 3.** Conecta la Super al PC host con Ubuntu con un cable de transmisión de datos USB Type-C.

**Paso 4.** En el PC host con Linux, abre una ventana de Terminal e introduce el comando `lsusb`. Si el contenido devuelto tiene una de las siguientes salidas según el Jetson SoM que utilices, entonces la placa está en modo force recovery.

- Para Orin NX 16GB: **0955:7323 NVidia Corp**
- Para Orin NX 8GB: **0955:7423 NVidia Corp**
- Para Orin Nano 8GB: **0955:7523 NVidia Corp**
- Para Orin Nano 4GB: **0955:7623 NVidia Corp**

La siguiente imagen es para Orin Nano 8GB

<div align="center">
  <img width ="1000" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/robotics_j401/lsusb_f.png"/>
</div>

</details>

### Flashear a Jetson

**Paso 1:** Extrae el archivo de imagen descargado:

```bash
cd <path-to-image>
sudo tar xpf mfi_xxxx.tar.gz
# For example: sudo tar xpf mfi_recomputer-super-orin-nx-16g-j401-6.2-36.4.3-2026-02-05.tar.gz
```

**Paso 2:** Ejecuta el siguiente comando para flashear el sistema Jetpack en el SSD NVMe:

```bash
cd mfi_xxxx
sudo ./tools/kernel_flash/l4t_initrd_flash.sh --flash-only --massflash 1 --network usb0  --showlogs
```

Verás la siguiente salida si el proceso de flasheo se realiza correctamente

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-J4012/4.png"/></div>

:::note
El comando de flasheo puede ejecutarse durante 2-10 minutos.
:::

**Paso 3:** Conecta el monitor usando un cable HDMI y completa la configuración de inicialización del sistema de la reComputer Super:

<div align="center">
  <img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/J401/jetpack6_configuration.png"/>
</div>

:::info
Completa la **System Configuration** según tus necesidades.
:::


## Recursos

- [Hoja de datos de reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer_super_user_manual.pdf)
- [Esquemático](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401_v1.0_SCH_PDF_250401.pdf)
- [Archivo 3D](https://files.seeedstudio.com/products/NVIDIA-Jetson/reComputer%20Super%20J401.stp)
- [Documento mecánico - reComputer Super](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super.dxf)
- [Documento mecánico - reComputer Super PCBA](https://files.seeedstudio.com/products/NVIDIA-Jetson/Mechanical_reComputer_Super_PCBA.dxf)
- [Casos de éxito de Seeed Nvidia Jetson](https://www.seeedstudio.com/blog/wp-content/uploads/2023/07/Seeed_NVIDIA_Jetson_Success_Cases_and_Examples.pdf)
- [Seeed Jetson One Pager](https://files.seeedstudio.com/wiki/Seeed_Jetson/Seeed-Jetson-one-pager.pdf)

<JetsonLeadQuote
  buttonText="Request Quote of Customization"
  imageSrc="https://files.seeedstudio.com/wiki/JetsonLeadQuote-Component/NVIDIA_Jetson.jpg"
  imageAlt="Request Quote for Jetson"
  triggerValue={typeof window !== 'undefined' ? window.location.href : ''}
/>

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
