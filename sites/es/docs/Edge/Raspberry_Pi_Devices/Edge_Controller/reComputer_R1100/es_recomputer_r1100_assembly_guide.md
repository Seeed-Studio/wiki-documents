---
description: Guía de Ensamblaje del reComputer R1100
title: Guía de Ensamblaje del reComputer R1100
keywords:
  - Raspberry pi
  - Edge Controller
  - reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer3.jpg
slug: /recomputer_r1100_assembly_guide
last_update:
  date: 2/27/2024
  author: Kasun Thushara
createdAt: '2023-05-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/es/recomputer_r1100_assembly_guide/
---

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

El reComputer R1100 soporta múltiples comunicaciones inalámbricas IoT incluyendo 4G, LoRa®, Wi-Fi/BLE, y Zigbee. Permite la expansión de tarjetas SSD a través del socket M.2 para mayor almacenamiento o acelerador NPU para capacidades de IA. Además, nuestros servicios de ingeniería de hardware incluyen personalización de logotipo, marca de paquete, etiquetado, flasheo de firmware, servicio de imágenes, y más, proporcionando soporte integral para sus necesidades específicas.

Este Wiki le mostrará cómo ensamblar y desensamblar la unidad para instalar componentes periféricos, así como la opción para montaje

## Prerrequisitos de Hardware

Necesita preparar el siguiente hardware

- reComputer R1000 x 1
- Accesorios
- Juego de destornilladores
  - Phillips + 3.5 bit
  - Phillips + 3.0 bit
  - Ranurado - 2.5 bit

## Guía de Desensamblaje del Dispositivo

Siga estos pasos para **desensamblar el dispositivo** de forma segura sin problemas:  

**Paso 1: Retire los Cuatro Tornillos en la Parte Inferior**  

- Localice y desatornille los **cuatro tornillos** en la parte inferior del dispositivo usando un destornillador apropiado.  

**Paso 2: Retire el Panel del Piso**  

- Una vez que los tornillos estén removidos, cuidadosamente **levante el panel del piso** del dispositivo.  

**Paso 3: Retire los Paneles Laterales de Plástico**  

- Identifique los **paneles laterales de plástico** en tres lados del dispositivo.  
- Suavemente **haga palanca o desenganche** cada panel. Si están ajustados firmemente, puede necesitar una herramienta, pero tenga cuidado de no dañarlos.  

**Paso 4: Tenga Cuidado con la Placa de Plástico del Interruptor de Arranque**  

- Tome nota del **interruptor de arranque** en uno de los paneles—puede tener una **pequeña placa de plástico adjunta**.  
- Asegúrese de que esta placa no se caiga o se pierda durante el desensamblaje.  

**Paso 5: Retire la Carcasa Exterior de Aluminio**  

- Con los **paneles laterales removidos**, ahora puede acceder a la **carcasa exterior de aluminio**.  
- Cuidadosamente **levante y retire** la carcasa de aluminio.  

**Paso 6: Retire los Tornillos que Aseguran la PCB**  

- Finalmente, **desatornille los cuatro tornillos** que mantienen la **PCB (Placa de Circuito Impreso) en su lugar**.  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dissambly_guide.PNG" style={{width:600, height:'auto'}}/></div>

## Instalación de una Tarjeta Nano SIM

**Paso 1: Retire la Cubierta Trasera**  

- Siga la **guía de desensamblaje** para retirar cuidadosamente la cubierta trasera.  

**Paso 2: Inserte la Tarjeta Nano SIM**  

- Coloque la **tarjeta Nano SIM** en la **ranura SIM** designada.  

Asegúrese de que la tarjeta SIM esté correctamente alineada antes de asegurar la cubierta de vuelta en su lugar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/sim_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Instalación de un SSD  

**Paso 1: Retirar la Cubierta Trasera**  

- Sigue la **guía de desmontaje** para retirar cuidadosamente la cubierta trasera.  

**Paso 2: Insertar el SSD**  

- Inserta de forma segura el **SSD** en el **socket M.2**.  
- Aprieta los **tornillos** para fijarlo en su lugar.  

Asegúrate de que el SSD esté correctamente asentado antes de volver a ensamblar el dispositivo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ssd_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Instalación de la Antena Wi-Fi/BLE  

**Paso 1: Desmontar el Dispositivo**  

- Sigue la **Sección 4.1 - Guía de Desmontaje** para desmontar cuidadosamente el dispositivo.  

**Paso 2: Conectar la Antena**  

- Conecta la **línea de alimentación** del **módulo CM4** al **orificio de la antena**, consultando las ilustraciones proporcionadas para una alineación adecuada.  

**Paso 3: Volver a Ensamblar el Dispositivo**  

- Una vez que la antena esté conectada de forma segura, **vuelve a ensamblar** el dispositivo para su funcionamiento normal.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wifi_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Ensamblaje del Módulo y Antena 4G/LoRa®/Zigbee

**Paso 1: Verificar la Ubicación del Módulo**  

- Asegúrate de que el **módulo de slot Mini-PCIe** esté posicionado **encima de la tarjeta SSD**.  

**Paso 2: Instalar el Módulo**  

- Inserta el **módulo 4G, LoRa®, o Zigbee** en el **slot Mini-PCIe** apropiado, siguiendo las pautas de coincidencia de la **Sección 2.2.8**.  
- Asegura el módulo en su lugar **apretando los tornillos**.  

**Paso 3: Conectar la Antena**  

- Conecta la **línea de alimentación** al módulo, consultando las ilustraciones proporcionadas para el posicionamiento correcto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/lora_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Ensamblaje del Módulo TPM 2.0

**Paso 1: Retirar la Cubierta Trasera**  

- Sigue la **guía de desmontaje** para separar la cubierta trasera.  

**Paso 2: Instalar el Módulo TPM 2.0**  

- Inserta el **módulo TPM 2.0** en el **socket J13** de forma segura.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/tpm_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Ensamblaje del Módulo UPS y PoE

**Paso 1: Desmontar el Dispositivo**  

- Antes de la instalación, **desmonta completamente el dispositivo** siguiendo la **guía de desmontaje**.  

**Paso 2: Instalar el Módulo UPS**  

- Usa **dos tornillos PM2.0xL5.0** y **separadores M2.0x5.0** para asegurar el **módulo UPS** en los **orificios designados** sin almohadillas de contacto metálico.  
- Asegúrate de que el **módulo UPS** esté **correctamente alineado** y firmemente asegurado con los tornillos y separadores proporcionados.  

**Paso 3: Instalar el Módulo PoE**  

- Alinea el **módulo PoE** con la **ranura designada** en la placa.  
- Cuidadosamente **solda el módulo PoE** en la placa, asegurando precisión para prevenir daños a componentes cercanos.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/ups_dis.PNG" style={{width:600, height:'auto'}}/></div>

## Guía de Montaje

### Guía de Montaje en Riel DIN

El reComputer R1100 soporta múltiples métodos de instalación, incluyendo **montaje en riel DIN**. El **clip de riel DIN** y los **tornillos de instalación** están incluidos en el empaque. Sigue el diagrama para conectar el clip de riel DIN a los orificios de montaje en el lateral del dispositivo. Una vez asegurado, puedes instalar el dispositivo en el riel de montaje.  

#### Pasos de Instalación

- **Posicionar el Dispositivo:**  
  - Coloca el dispositivo y el **clip de riel** en el **borde superior** del **riel DIN** estándar como se muestra en el diagrama.  
  - Empuja el dispositivo **hacia abajo** para alinearlo correctamente.  

- **Asegurar el Clip de Riel:**  
  - Gira el **clip de riel** desde abajo a través del **perfil del riel DIN**.  

- **Bloquear en su Lugar:**  
  - Empuja el dispositivo **hacia el riel** hasta que escuches un **clic**, indicando que está montado de forma segura.  

#### Pasos de Remoción

- **Liberar el Bloqueo:**  
  - Empuja el dispositivo **hacia abajo** hasta que sea liberado por el **clip de riel**.  

- **Separar del Riel:**  
  - Gira el dispositivo **fuera** del **riel DIN**.  

- **Levantar y Retirar:**  
  - Levanta el dispositivo **hacia arriba** para retirarlo completamente del riel de montaje.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dinmount.PNG" style={{width:600, height:'auto'}}/></div>

### Guía de Montaje en Pared

El reComputer R1100 soporta **montaje vertical en pared**, pero los **soportes de montaje** **no están incluidos** en el paquete y deben comprarse por separado.  

#### Pasos de Instalación

- **Conectar los Soportes:**  
  - Coloca los **soportes de montaje** en la **parte trasera** del dispositivo.  

- **Asegurar los Soportes:**  
  - Fija los **soportes** usando los **tornillos suministrados**.  

- **Montar en la Pared:**  
  - Marca los **orificios de perforación** en la pared.  
  - Perfora los **orificios** requeridos.  
  - Asegura el dispositivo a la pared usando **dos tornillos**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/wallmount.PNG" style={{width:600, height:'auto'}}/></div>

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
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-SPI-US915-SKY66420-p-5455.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN Opcional por Región(SPI)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992969</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX126-SPI-EU868-p-5847.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN Opcional por Región(SPI)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114993268</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-Without-SX1262-USB-US915-p-5602.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN Opcional por Región(USB)-US915</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992991</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/WM1302-LoRaWAN-Gateway-Module-USB-EU868-p-4892.html" target="_blank" rel="noopener noreferrer">Módulo Gateway LoRaWAN Opcional por Región(USB)-EU868</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992628</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena LoRa®</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/48.png" /></td>
      <td><a href="https://www.seeedstudio.com/LoRa-Antenna-Kit-for-reTerminal-DM-p-5714.html" target="_blank" rel="noopener noreferrer">Kit de Antena LoRa - 868-915 MHz</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061501</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Wi-Fi/BLE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/49.png" /></td>
      <td><a href="https://www.seeedstudio.com/Compute-Module-CM4-Antenna-kit-p-4717.html" target="_blank" rel="noopener noreferrer">Kit de Antena para Raspberry Pi Compute Module 4</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>114992364</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Módulo Zigbee</td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}></td>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Módulo Zigbee USB Mini-PCIe</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110992005</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena Zigbee</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/50.png" /></td>
      <td data-style="height: 18px; width: 37.5%;" colSpan={1} style={{height: 18, width: '37.5%'}}>Kit de Antena Zigbee para reComputer R</td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061641</td>
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
      <td><a href="https://www.seeedstudio.com/4G-Antenna-Kit-for-reTerminal-DM-p-5713.html" target="_blank" rel="noopener noreferrer">Kit de Antena 4G para módulo 4G</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061502</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>Antena GPS</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/53.png" /></td>
      <td><a href="https://www.seeedstudio.com/GPS-Antenna-Kit-for-reTerminal-DM-4G-Module-p-5774.html" target="_blank" rel="noopener noreferrer">Kit de Antena GPS para Módulo 4G EC25</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061521</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>UPS Supercondensador</td>
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
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-1TB-p-5767.html" target="_blank" rel="noopener noreferrer">SSD NVMe M.2 2280 1TB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990267</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-512GB-p-5334.html" target="_blank" rel="noopener noreferrer">SSD Interno NVMe M.2 PCle Gen3x4 2280 de 512GB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990247</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/NVMe-M-2-2280-SSD-256GB-p-5333.html" target="_blank" rel="noopener noreferrer">SSD Interno NVMe M.2 PCle Gen3x4 2280 de 256GB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990246</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/M-2-2280-SSD-128GB-p-5332.html" target="_blank" rel="noopener noreferrer">SSD Interno NVMe M.2 PCle Gen3x4 2280 de 128GB</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>112990226</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} style={{height: 18, width: '20%'}}>PoE</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/57.png" /></td>
      <td><a href="https://www.seeedstudio.com/POE-Module-Kit-for-reTerminal-DM-p-5707.html" target="_blank" rel="noopener noreferrer">Kit de Módulo PoE MQ7813T120 para reTerminal DM</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110991925</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td data-style="height: 18px; width: 20%;" colSpan={1} rowspan={2} style={{height: 18, width: '20%'}}>Adaptador de Corriente</td>
      <td data-style="height: 18px; width: 30%;" colSpan={1} rowspan={2} style={{height: 18, width: '30%'}}><img width={700} src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/58.png" /></td>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html" target="_blank" rel="noopener noreferrer">Adaptador de Corriente-Americano</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061505</td>
    </tr>
    <tr data-style="height: 18px;" style={{height: 18}}>
      <td><a href="https://www.seeedstudio.com/Power-Adapter-12V-2A-EU-p-5732.html" target="_blank" rel="noopener noreferrer">Adaptador de Corriente-Europeo</a></td>
      <td data-style="height: 18px; width: 12.5%;" colSpan={1} style={{height: 18, width: '12.5%'}}>110061506</td>
    </tr>

  </tbody>
</table>
</div>

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
