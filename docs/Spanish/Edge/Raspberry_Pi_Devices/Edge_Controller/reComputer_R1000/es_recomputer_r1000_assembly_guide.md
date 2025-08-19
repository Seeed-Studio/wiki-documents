---
description: Guía de Ensamblaje para reComputer R1000
title: Guía de Ensamblaje para reComputer R1000
keywords:
  - Edge
  - reComputer R1000
  - Assembly Guide
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/recomputer_r1000_assembly_guide
last_update:
  date: 02/18/2025
  author: Erick González
---
#  Guía de Ensamblaje para reComputer R1000

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/recomputer_r1000_assembly.gif" alt="pir" width="600" height="auto"/></p>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue el Tuyo! 🖱️</font></span></strong>
    </a>
</div>

<br />

El reComputer R1000 admite múltiples comunicaciones inalámbricas para IoT, incluyendo 4G, LoRa®, Wi-Fi/BLE y Zigbee. Permite la expansión de tarjetas SSD a través de un conector M.2 para aumentar el almacenamiento o agregar un acelerador NPU para capacidades de inteligencia artificial. Además, nuestros servicios de ingeniería de hardware incluyen personalización de logotipos, marca de empaques, etiquetado, grabación de firmware, servicio de imágenes y más, brindando soporte integral para tus necesidades específicas.

Este Wiki te mostrará cómo ensamblar y desensamblar la unidad para instalar componentes periféricos, así como las opciones de montaje.

## Requisitos de hardware

Debes preparar el siguiente hardware:

- reComputer R1000 x 1
- Accesorios
- Juego de destornilladores:
  * Phillips + 3.5 bit
  * Phillips + 3.0 bit
  * Plano - 2.5 bit

### Guía de desmontaje

Seguir estos pasos te ayudará a desmontar el dispositivo sin problemas.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Disassembly_guide.gif" /></div>

**PASO 1:** Retirar los cuatro tornillos en la parte inferior y el tornillo de conexión a tierra en los paneles laterales:

- Ubica y desenrosca los cuatro tornillos situados en la parte inferior del dispositivo con un destornillador adecuado.
- Retira y desenrosca el tornillo de conexión a tierra de los paneles laterales.

**PASO 2:** Retirar el panel inferior:

- Una vez retirados los tornillos, levanta con cuidado el panel inferior del dispositivo.

**PASO 3:** Retirar los paneles laterales de plástico:

- Identifica los paneles laterales de plástico en tres lados del dispositivo.
- Con cuidado, desprende o desengancha cada panel lateral del dispositivo. Si están muy ajustados, puedes usar herramientas, pero ten precaución para no dañarlos.

**PASO 4:** Prestar atención a la placa de plástico del interruptor de arranque:

- Ubica el interruptor de arranque en uno de los paneles; puede tener una pequeña placa de plástico adherida.
- Asegúrate de que esta placa no se caiga o se pierda durante el proceso de desmontaje.

**PASO 5:** Retirar la carcasa exterior de aluminio:

- Una vez que los paneles laterales hayan sido retirados, podrás acceder a la carcasa de aluminio.
- Levántala y retírala con cuidado del dispositivo.

**PASO 6:** Retirar los cuatro tornillos que aseguran la PCB en su lugar.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass01.jpg" /></div>



### Ensamblaje de SSD

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/ssd.gif" /></div>

**PASO 1:** Retira la cubierta trasera siguiendo la guía de desmontaje.

**PASO 2:** Inserta la SSD en el conector M.2 y asegúrala con los tornillos.

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass02.jpg" /></div>

### Ensamblaje de la antena Wi-Fi/BLE

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/Wifi_and_ble.gif" /></div>

**PASO 1:** Desmonta el dispositivo completo siguiendo la sección [Guía de desmontaje](/recomputer_r1000_assembly_guide).

**PASO 2:** Conecta la línea de alimentación desde el módulo CM4 hasta el orificio de la antena, siguiendo las ilustraciones a continuación.

**PASO 3:** Ensambla nuevamente el dispositivo para su uso.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass08.jpg" /></div>

### Instalación de la antena LTE y GNSS

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LTE.gif" /></div>

### Ensamblaje del módulo 4G/LoRa®/Zigbee y antena

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/LoRa.gif" /></div>

**PASO 1:** Asegúrate de que el módulo para las ranuras Mini-PCIe esté cargado sobre la tarjeta SSD.

**PASO 2:** Inserta el módulo 4G/LoRa®/Zigbee (siguiendo la relación de cada ranura según la sección "2.2.8") en la ranura Mini-PCIe y asegúralo con los tornillos.

**PASO 3:** Instala la línea de alimentación siguiendo las imágenes a continuación.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass03.jpg" /></div>

### Ensamble del módulo TPM 2.0

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/TPM2_0.gif" /></div>

**PASO 1:** Retira la cubierta trasera siguiendo la guía de desmontaje.

**PASO 2:** Inserta el módulo TPM 2.0 en el conector J13.

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass04.jpg" /></div>

### Ensamble del UPS y el módulo PoE

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/UPS.gif" /></div>

**PASO 1:** Antes de instalar los módulos UPS y PoE en el lado del módulo CM4 de la placa, desmonta completamente el dispositivo siguiendo la guía de desmontaje proporcionada.

**PASO 2:**
- Usa dos tornillos PM2.0xL5.0 y separadores M2.0x5.0 para asegurar el módulo UPS en dos orificios sin contactos metálicos.
- Asegúrate de que el módulo UPS esté correctamente alineado y firmemente sujeto con los tornillos y separadores proporcionados.

**PASO 3:** Instalar el módulo PoE
- Alinea el módulo PoE con la apertura designada en la placa.
- Suelda cuidadosamente el módulo PoE en la placa. Debido a la naturaleza compacta de la placa, ten precaución al soldar para evitar dañar los componentes cercanos.

<div align="left"><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/Assembly_Guide/POE-AE.gif" /></div>


:::note
Instala correctamente el módulo PoE, asegurándote de colocar los puntos blancos orientados hacia adentro, junto a un capacitor.
:::

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass05.jpg" /></div>

<div align="left"><img width={350} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/POE.png" /></div>

## Guía de Montaje

### Guía de Montaje en Riel DIN

El reComputer R1000 ofrece varios métodos de instalación. El clip para riel DIN y los tornillos de instalación están incluidos en el paquete. Sigue el diagrama para fijar correctamente el clip del riel DIN en los orificios de montaje en el lateral del dispositivo. Una vez que los tornillos estén bien ajustados, puedes instalar el dispositivo en el riel de montaje.

**PASO 1:** Coloca el dispositivo y el clip del riel en el borde superior del riel de perfil estándar en la posición mostrada y empuja el dispositivo hacia abajo.
**PASO 2:** Gira el clip del riel del dispositivo desde abajo a través del riel de perfil estándar.
**PASO 3:** Empuja el dispositivo en dirección al riel de perfil estándar hasta que escuches un "clic" que indique que está asegurado.

*Para retirar el dispositivo:*

**PASO 1:** Presiona el dispositivo hacia abajo hasta que el clip del riel lo libere.
**PASO 2:** Gira el dispositivo para sacarlo del riel de perfil estándar.
**PASO 3:** Levanta el dispositivo y retíralo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass06.jpg" /></div>

### Guía de Montaje en Pared

El montaje vertical también es adecuado para el reComputer R1000, sin embargo, los soportes de montaje **no están incluidos** en la caja y deben adquirirse **por separado**.

**PASO 1:** Coloca los soportes de montaje en la parte trasera del dispositivo.
**PASO 2:** Asegura los soportes con los tornillos suministrados.
**PASO 3:** Marca los orificios, perfora los agujeros necesarios en la pared y fija el dispositivo a la pared con dos tornillos.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/ass07.jpg" /></div>

## Lista de Accesorios

<div class="table-center">

<table >
  <tbody>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}><strong>Artículo</strong></td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><strong>Producto</strong></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}><strong>Nombre del Producto</strong></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}><strong>SKU</strong></td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>Módulo LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/47.png" /></td>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Region optional LoRaWAN Gateway Module(SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Region optional LoRaWAN Gateway Module(SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Region optional LoRaWAN Gateway Module(USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Region optional LoRaWAN Gateway Module(USB)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/48.png" /></td>
      <td><a href="https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html" target="_blank" rel="noopener noreferrer">LoRa Antenna Kit - 868-915 MHz</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Wi-Fi/BLE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/49.png" /></td>
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">Raspberry Pi Compute Module 4 Antenna Kit</a></td>      
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Módulo Zigbee</td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}></td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Mini-PCIe USB Zigbee Module</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Zigbee</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/50.png" /></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Zigbee Antenna Kit for reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>Módulo 4G</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={6} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/51.png" /></td>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AFXGA-mini-PCIe-p-5668.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AFXGA-Mini-PCIe Module - for North American</a></td>    
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991134</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EUX-mini-PCIe-p-5669.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EUXGR-Mini-PCIe Module - for EMEA and Thai</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991135</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-AUXGR-mini-PCIe-p-5885.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-AUXGR-Mini-PCIe Module - for Australia</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991174</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EFA-mini-PCIe-p-5824.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EFA-Mini-PCIe Module - for Thai</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991214</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-EMGA-mini-PCIe-p-5831.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-EMGA-Mini-PCIe Module - for Malaysia</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991234</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/LTE-Cat-4-EC25-JFA-mini-PCIe-p-5899.html" target="_blank" rel="noopener noreferrer">LTE Cat 4 EC25-JFA-mini-PCIe</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>113991296</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena 4G</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/52.png" /></td>
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">4G Antenna Kit for 4G module</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena GPS</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">GPS Antenna Kit for EC25 4G Module</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>UPS por Supercapacitor</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/54.png" /></td>
      <td><a href="https://www.seeedstudio.com/SuperCAP-UPS-LTC3350-Module-p-5934.html" target="_blank" rel="noopener noreferrer">SuperCAP UPS LTC3350 Module</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992004</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Plataforma de Encripción TPM 2.0</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/55.png" /></td>
      <td><a href="https://www.seeedstudio.com/TPM2-0-Module-with-infineon-SLB9670-p-5711.html" target="_blank" rel="noopener noreferrer">TPM 2.0 Module with infineon SLB9670</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993114</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={4} style={{height: 18, width: '20%'}}>Tarjeta SSD</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={4} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">512GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">256GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">128GB NVMe M.2 PCle Gen3x4 2280 Internal SSD</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">MQ7813T120 PoE Module Kit for reTerminal DM</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>Adaptador de Corriente</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">Power Adapter-American</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Power Adapter-European</a></td> 
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>

  </tbody>
</table>

</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>