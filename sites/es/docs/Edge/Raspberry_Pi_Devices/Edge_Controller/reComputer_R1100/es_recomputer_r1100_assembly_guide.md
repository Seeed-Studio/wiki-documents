---
description: Guía de ensamblaje de reComputer R1100
title: Guía de ensamblaje de reComputer R1100
keywords:
  - Raspberry pi
  - Controlador de borde
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
createdAt: '2023-05-22'
updatedAt: '2025-09-15'
url: https://wiki.seeedstudio.com/es/recomputer_r1100_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

reComputer R1100 es compatible con múltiples comunicaciones inalámbricas de IoT, incluyendo 4G, LoRa®, Wi‑Fi/BLE. Permite la expansión de tarjetas SSD mediante un zócalo M.2 para aumentar el almacenamiento o añadir un acelerador NPU para capacidades de IA. Además, nuestros servicios de ingeniería de hardware incluyen personalización de logotipo, marca del embalaje, etiquetado, grabación de firmware, servicio de imagen y más, proporcionando soporte integral para tus necesidades específicas.

Este Wiki te mostrará cómo ensamblar y desensamblar la unidad para instalar componentes periféricos, así como la opción de montaje.

## Requisitos de hardware

Debes preparar el siguiente hardware

- reComputer R1100 x 1
- Accesorios
- Juego de destornilladores
  - Punta Phillips + 3.5
  - Punta Phillips + 3.0
  - Punta plana - 2.5

## Guía de desensamblaje del dispositivo

Sigue estos pasos para **desensamblar el dispositivo** de forma segura y sin problemas:  

**Paso 1: Retira los cuatro tornillos de la parte inferior**  

- Localiza y desenrosca los **cuatro tornillos** en la parte inferior del dispositivo usando un destornillador adecuado.  

**Paso 2: Retira el panel inferior**  

- Una vez retirados los tornillos, **levanta con cuidado el panel inferior** del dispositivo.  

**Paso 3: Retira los paneles laterales de plástico**  

- Identifica los **paneles laterales de plástico** en tres lados del dispositivo.  
- **Haz palanca o desencájalos suavemente** uno por uno. Si están muy ajustados, puedes necesitar una herramienta, pero ten cuidado de no dañarlos.  

**Paso 4: Ten en cuenta la placa de plástico del interruptor de arranque**  

- Ten en cuenta el **interruptor de arranque** en uno de los paneles; puede tener **una pequeña placa de plástico unida**.  
- Asegúrate de que esta placa no se caiga ni se pierda durante el desensamblaje.  

**Paso 5: Retira la carcasa exterior de aluminio**  

- Con los **paneles laterales retirados**, ahora puedes acceder a la **carcasa exterior de aluminio**.  
- **Levanta y retira con cuidado** la carcasa de aluminio.  

**Paso 6: Retira los tornillos que fijan la PCB**  

- Finalmente, **desenrosca los cuatro tornillos** que sujetan la **PCB (placa de circuito impreso) en su lugar**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## Instalación de una tarjeta Nano SIM

**Paso 1: Retira la tapa trasera**  

- Sigue la **guía de desensamblaje** para retirar con cuidado la tapa trasera.  

**Paso 2: Inserta la tarjeta Nano SIM**  

- Coloca la **tarjeta Nano SIM** en la **ranura SIM** designada.  

Asegúrate de que la tarjeta SIM esté correctamente alineada antes de volver a colocar la tapa.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Instalación de un SSD  

**Paso 1: Retira la tapa trasera**  

- Sigue la **guía de desensamblaje** para retirar con cuidado la tapa trasera.  

**Paso 2: Inserta el SSD**  

- Inserta firmemente el **SSD** en el **zócalo M.2**.  
- Ajusta los **tornillos** para fijarlo en su lugar.  

Asegúrate de que el SSD esté correctamente asentado antes de volver a ensamblar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Instalación de la antena Wi‑Fi/BLE  

**Paso 1: Desensambla el dispositivo**  

- Sigue la **Sección 4.1 - Guía de desensamblaje** para desmontar el dispositivo con cuidado.  

**Paso 2: Conecta la antena**  

- Conecta la **línea de alimentación** desde el **módulo CM4** al **orificio de la antena**, consultando las ilustraciones proporcionadas para una alineación correcta.  

**Paso 3: Vuelve a ensamblar el dispositivo**  

- Una vez que la antena esté conectada de forma segura, **vuelve a ensamblar** el dispositivo para su funcionamiento normal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Ensamblaje del módulo y la antena 4G/LoRa®

**Paso 1: Comprueba la colocación del módulo**  

- Asegúrate de que el **módulo de ranura Mini‑PCIe** esté colocado **encima de la tarjeta SSD**.  

**Paso 2: Instala el módulo**  

- Inserta el **4G, LoRa®** en la **ranura Mini‑PCIe** correspondiente, siguiendo las pautas de coincidencia de la **Sección 2.2.8**.  
- Asegura el módulo en su lugar **apretando los tornillos**.  

**Paso 3: Conecta la antena**  

- Conecta la **línea de alimentación** al módulo, consultando las ilustraciones proporcionadas para una posición correcta.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Ensamblaje del módulo TPM 2.0

**Paso 1: Retira la tapa trasera**  

- Sigue la **guía de desensamblaje** para separar la tapa trasera.  

**Paso 2: Instala el módulo TPM 2.0**  

- Inserta el **módulo TPM 2.0** firmemente en el **zócalo J13**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Ensamblaje del módulo UPS y PoE

**Paso 1: Desensambla el dispositivo**  

- Antes de la instalación, **desensambla todo el dispositivo** siguiendo la **guía de desensamblaje**.  

**Paso 2: Instala el módulo UPS**  

- Usa **dos tornillos PM2.0xL5.0** y **separadores M2.0x5.0** para fijar el **módulo UPS** en los **orificios designados** sin almohadillas de contacto metálicas.  
- Asegúrate de que el **módulo UPS** esté **correctamente alineado** y firmemente sujeto con los tornillos y separadores proporcionados.  

**Paso 3: Instala el módulo PoE**  

- Alinea el **módulo PoE** con la **ranura designada** en la placa.  
- **Suelda con cuidado el módulo PoE** en la placa, asegurando precisión para evitar daños a los componentes cercanos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Guía de montaje

### Guía de montaje en carril DIN

El reComputer R1100 admite múltiples métodos de instalación, incluido el **montaje en carril DIN**. El **clip para carril DIN** y los **tornillos de instalación** están incluidos en el embalaje. Sigue el diagrama para fijar el clip de carril DIN a los orificios de montaje en el lateral del dispositivo. Una vez fijado, puedes instalar el dispositivo en el carril de montaje.  

#### Pasos de instalación

- **Coloca el dispositivo:**  
  - Coloca el dispositivo y el **clip de carril** en el **borde superior** del **carril DIN** estándar como se muestra en el diagrama.  
  - Empuja el dispositivo **hacia abajo** para alinearlo correctamente.  

- **Asegura el clip de carril:**  
  - Gira el **clip de carril** desde abajo a través del perfil del **carril DIN**.  

- **Bloquea en su lugar:**  
  - Empuja el dispositivo **hacia el carril** hasta que escuches un **clic**, lo que indica que está montado de forma segura.  

#### Pasos de desmontaje

- **Libera el bloqueo:**  
  - Empuja el dispositivo **hacia abajo** hasta que sea liberado por el **clip de carril**.  

- **Sepáralo del carril:**  
  - Gira el dispositivo **hacia afuera** del **carril DIN**.  

- **Levanta y retira:**  
  - Levanta el dispositivo **hacia arriba** para retirarlo completamente del carril de montaje.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### Guía de montaje en pared

El reComputer R1100 admite **montaje vertical en pared**, pero los **soportes de montaje** **no están incluidos** en el paquete y deben comprarse por separado.  

#### Pasos de instalación

- **Fija los soportes:**  
  - Coloca los **soportes de montaje** en la **parte trasera** del dispositivo.  

- **Asegura los soportes:**  
  - Fija los **soportes** usando los **tornillos suministrados**.  

- **Monta en la pared:**  
  - Marca los **orificios de perforación** en la pared.  
  - Taladra los **orificios** necesarios.  
  - Fija el dispositivo a la pared usando **dos tornillos**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

## Lista de accesorios

<div class="table-center">
<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}><strong>Ítem</strong></td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><strong>Producto</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Nombre del producto</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>Módulo LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/47.png" /></td>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo de puerta de enlace LoRaWAN (SPI) con región opcional - US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo de puerta de enlace LoRaWAN (SPI) con región opcional - EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo de Gateway LoRaWAN opcional por región (USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo de Gateway LoRaWAN opcional por región (USB)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/48.png" /></td>
      <td><a href="https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html" target="_blank" rel="noopener noreferrer">Kit de antena LoRa - 868-915 MHz</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Wi-Fi/BLE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/49.png" /></td>
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">Kit de antena para Raspberry Pi Compute Module 4</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>Módulo 4G</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-AFXGA-Mini-PCIe - para Norteamérica</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-EUXGR-Mini-PCIe - para EMEA y Tailandia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-AUXGR-Mini-PCIe - para Australia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-EFA-Mini-PCIe - para Tailandia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">Módulo LTE Cat 4 EC25-EMGA-Mini-PCIe - para Malasia</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-mini-PCIe</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena 4G</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/52.png" /></td>
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">Kit de antena 4G para módulo 4G</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena GPS</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">Kit de antena GPS para módulo 4G EC25</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Supercondensador UPS</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">Módulo SuperCAP UPS LTC3350</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Chip de cifrado TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">Módulo TPM 2.0 con infineon SLB9670</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>Tarjeta SSD</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">SSD interno 512GB NVMe M.2 PCIe Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">SSD interno 256GB NVMe M.2 PCIe Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">SSD interno 128GB NVMe M.2 PCIe Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">Kit de módulo PoE MQ7813T120 para reTerminal DM</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>Adaptador de corriente</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">Adaptador de corriente - americano</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Adaptador de corriente - europeo</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>
  </tbody>
</table>
</div>

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
