---
description: El reComputer Industrial R22xx es un NVR de grado industrial impulsado por IA, basado en Raspberry Pi CM5 y equipado con un acelerador de IA Hailo-8 que ofrece hasta 26 TOPS. Con 4 puertos Ethernet Gigabit con soporte PoE PSE más un puerto Ethernet Gigabit adicional, permite transmisión de video de gran ancho de banda y un despliegue PoE simplificado para cámaras IP. Ofrece abundantes E/S industriales, conectividad inalámbrica flexible, diseño térmico sin ventilador y un amplio rango de temperatura de funcionamiento de –20 °C a 50 °C, garantizando análisis de video con IA fiables y un funcionamiento continuo y estable en escenarios exigentes.
title: Guía de ensamblaje de reComputer Industrial R22xx
keywords:
  - Controlador de Borde
  - Raspberry pi
  - Controlador de Borde
  - reComputer Industrial R22xx
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image_6.jpg
slug: /recomputer_industrial_r22xx_assembly_guide
sku: 100077451,100079040
last_update:
  date: 02/09/2026
  author: Nolan Chen
createdAt: '2023-05-22'
updatedAt: '2026-04-23'
url: https://wiki.seeedstudio.com/es/recomputer_industrial_r22xx_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-recomputer-industrial-r2200_2.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Industrial-R2235-12-p-6654.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
    </a>
</div>

El reComputer Industrial R22xx admite una variedad de comunicaciones inalámbricas IoT, incluidas 4G, 5G, LoRa® y Wi-Fi/BLE. Admite expansión mediante una ranura M.2 para almacenamiento SSD o capacidades de IA mediante un acelerador NPU. Si decides incluir el acelerador de IA directamente en tu compra, obtendrás 26 TOPS adicionales de potencia de cómputo. Además, nuestros servicios de ingeniería de hardware incluyen personalización de logotipo, marca del embalaje, etiquetado, grabación de firmware y servicios de imagen, proporcionando un soporte integral adaptado a tus necesidades específicas.

Este Wiki te mostrará cómo ensamblar y desensamblar la unidad para instalar componentes periféricos, así como las opciones de montaje.

## Requisitos de hardware

Debes preparar el siguiente hardware

- reComputer Industrial R22xx x 1
- Accesorios
- Juego de destornilladores
  - Punta Phillips + 3.5
  - Punta Phillips + 3.0
  - Punta plana - 2.5

## Guía de desensamblaje del dispositivo

Seguir estos pasos debería ayudarte a desensamblar el dispositivo sin ningún problema.

**Paso 1:** Retira los cuatro tornillos de la parte inferior y quita los paneles frontal y trasero:

- Localiza y desenrosca los cuatro tornillos situados en la parte inferior del dispositivo utilizando un destornillador adecuado.
- Una vez retirados los tornillos, levanta con cuidado los paneles frontal y trasero del dispositivo.

**Paso 2:**  Desenrosca las tuercas de los conectores de antena laterales y retira el panel inferior.

**Paso 3:**  Retira la placa de expansión.

**Paso 4:** Retira los cuatro tornillos que fijan la PCB en su lugar

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.1-1.png" style={{width:800, height:'auto'}}/></div>

## Instalación de una tarjeta Nano SIM

**Paso 1:** Inserta la tarjeta Nano SIM en la ranura SIM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.2-1.png" style={{width:800, height:'auto'}}/></div>

## Instalación de un SSD  

**Paso 1:** Retira la tapa trasera siguiendo la guía de desensamblaje.

**Paso 2:** Inserta el SSD en el zócalo M.2 y aprieta los tornillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.3-1.png" style={{width:800, height:'auto'}}/></div>

## Ensamblar el acelerador de IA M.2

**Paso 1:** Desensambla todo el dispositivo siguiendo la sección 4.1 "Guía de desensamblaje".
**Paso 2:** Inserta el acelerador de IA en el zócalo M.2 y aprieta los tornillos.


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.4-1.png" style={{width:800, height:'auto'}}/></div>

## Ensamblar el módulo y la antena 5G/4G/LoRa®

**Paso 1:** Retira la placa de expansión y coloca el módulo 4G/módulo LoRa® en la ranura Mini-PCIe/M.2 B-KEY y aprieta los tornillos.

**Paso 2:** Conecta el alimentador al orificio de la antena en la carcasa como se muestra en el siguiente diagrama.

**Paso 3:** Instala el alimentador en la base de antena del módulo correspondiente.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.5-1.png" style={{width:800, height:'auto'}}/></div>


## Ensamblar el módulo TPM 2.0

**Paso 1:** Retira la tapa trasera siguiendo la guía de desensamblaje.

**Paso 2:** Inserta el módulo TPM 2.0 en el zócalo J26.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.6-1.png" style={{width:800, height:'auto'}}/></div>

## Ensamblar el módulo UPS y PoE

**Paso 1:** Antes de instalar el módulo UPS y PoE en el lado del módulo CM5 de la placa, desensambla todo el dispositivo siguiendo la guía de desensamblaje proporcionada.

**Paso 2:** Instala el módulo UPS**  

- Utilizando dos tornillos PM2.0xL5.0 y separadores M2.0x5.0, fija el módulo UPS en dos orificios sin almohadillas de contacto metálicas.
- Asegúrate de que el módulo UPS esté correctamente alineado y firmemente sujeto utilizando los tornillos y separadores proporcionados.

**Paso 3: Instalar el módulo PoE**  

- Alinea el **módulo PoE** con la **ranura designada** en la placa.  
- **Suelda con cuidado el módulo PoE** en la placa, asegurando precisión para evitar daños a los componentes cercanos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.7-1.png" style={{width:800, height:'auto'}}/></div>

## Guía de montaje

### Guía de montaje en carril DIN

reComputer Industrial R21xx ofrece varios métodos de instalación. El clip para carril DIN y los tornillos de instalación están incluidos en el embalaje. Sigue el diagrama para fijar correctamente el clip para carril DIN a los orificios de montaje en el lateral del dispositivo. Una vez que los tornillos estén bien apretados, podrás instalar el dispositivo en el carril de montaje.

#### Pasos de instalación

- **Paso 1:** Coloca el dispositivo y el clip de carril en el borde superior del carril de perfil estándar en la posición mostrada y empuja el dispositivo hacia abajo.
- **Paso 2:** Gira el clip de carril del dispositivo desde abajo a través del carril de perfil estándar.
- **Paso 3:** Empuja el dispositivo en la dirección del carril de perfil estándar. Oirás que el dispositivo encaja en su lugar.

#### Pasos de desmontaje

- **Paso 1:** Empuja hacia abajo el dispositivo hasta que sea liberado por el clip de carril.
- **Paso 2:** Gira el dispositivo fuera del carril de perfil estándar.
- **Paso 3:** Levanta el dispositivo hacia arriba y retíralo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.1_din-rail_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

### Guía de montaje en pared

El método de montaje vertical también es adecuado para reComputer Industrial R2000; sin embargo, los soportes de montaje no están incluidos en la caja y deben adquirirse por separado.

#### Pasos de instalación

- **Paso 1:** Coloca los soportes de montaje en la parte trasera del dispositivo.
- **Paso 2:** Fija los soportes con los tornillos suministrados.
- **Paso 3:** Marca los orificios de perforación, taladra los orificios necesarios en la pared y fija el dispositivo a la pared utilizando dos tornillos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/4.8.2_wall_mounting_guide_1.png" style={{width:1000, height:'auto'}}/></div>

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo de puerta de enlace LoRaWAN opcional por región (SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo de puerta de enlace LoRaWAN opcional por región (SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo de puerta de enlace LoRaWAN opcional por región (USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo de puerta de enlace LoRaWAN opcional por región (USB)-EU868</a></td>
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
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2000/GPS_Antenna.png" /></td>
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
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={5} style={{height: 18, width: '20%'}}>Tarjeta SSD</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={5} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/56.png" /></td>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-2TB-p-6265.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 2TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
     <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">NVMe M.2 2280 SSD 1TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">SSD interno 512GB NVMe M.2 PCle Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">SSD interno 256GB NVMe M.2 PCle Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">SSD interno 128GB NVMe M.2 PCle Gen3x4 2280</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={6} style={{height: 18, width: '20%'}}>Adaptador de corriente</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.8.2-table-23.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-3P-Black-19V-4-74A-AC-p-6377.html" target="_blank" rel="noopener noreferrer">Adaptador de corriente 3P-Negro-19V-4.74A/7.4*5mm</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313080684</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={5} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-AI-Industrial/R2200/4.8.2-table-24.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Cable de alimentación AC tipo trébol - US</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313990332</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/AC-UK-p-5124.html" target="_blank" rel="noopener noreferrer">Cable de alimentación AC tipo trébol - UK</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>313990328</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-JP-0-5m-p-6386.html" target="_blank" rel="noopener noreferrer">Cable de alimentación AC tipo trébol - JP</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990469</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-EU-0-5m-p-6385.html" target="_blank" rel="noopener noreferrer">Cable de alimentación AC tipo trébol - EU</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990468</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Cord-CN-0-5m-p-6387.html" target="_blank" rel="noopener noreferrer">Cable de alimentación AC tipo trébol - CN</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>106990470</td>
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
