---
description: reServer X86
title: Introducción al reServer X86
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/reServer-Getting-Started
last_update:
  date: 01/03/2023
  author: w0x7ce

---

<!-- ---
name: reServer
category: reServer
bzurl: 
wikiurl: 
sku: 
--- -->

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/上架01.png" alt="pir" width={600} height="auto" /></p>

reServer, como producto hito de la familia reThings, es extremadamente compacto y potente. Este pequeño servidor inteligente es capaz de trabajar fácil y eficientemente desde el borde hasta la nube.

reServer está basado en una placa ODYSSEY X86 v2 y alimentado por el último procesador Intel® Core™ de 11ª generación e Intel® UHD Graphics o Intel® Iris Xe Graphics, que ofrece alto rendimiento de CPU e IA para diversas aplicaciones. Tiene dos puertos Ethernet de alta velocidad de 2.5 Gigabits y soporta conectividad híbrida incluyendo 5G, LoRa, BLE y WiFi. Mientras tanto, reServer tiene un diseño compacto para trabajar eficientemente en casi cualquier escenario. La estructura ordenada del reServer también hace que sea simple acceder a los discos duros, memoria y ranuras PCIe, lo que permite una instalación, actualizaciones y mantenimiento fáciles.

Teniendo conectores de datos SATA III 6.0Gbps duales, reServer es capaz de equipar hasta dos discos duros internos SATA de 3.5"/2.5" para adquirir más almacenamiento. También tiene conectores M.2 para conectar a varios SSDs para velocidades de lectura y escritura más rápidas.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reServer-X86-i3-8G-256SSD-p-4965.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

- Diseño compacto para un servidor con una dimensión general de 132mm x124mm x233mm
- Alimentado por el último CPU Intel® Core™ de 11ª generación e Intel® UHD Graphics o Intel® Iris Xe Graphics.
- Periféricos ricos incluyendo puertos Ethernet de 2.5 Gigabits duales, puerto USB 3.2 Tipo-A, puerto USB 2.0 Tipo-A, puerto HDMI y puerto DP
- Soporta conectividad híbrida incluyendo 5G, LoRa, BLE y WiFi (5G y LoRa necesitan módulos adicionales)
- Conectores de datos SATA III 6.0 Gbps duales para discos duros SATA de 3.5"/2.5" con suficiente espacio dentro de la carcasa para almacenar ambos
- M.2 B-Key/ M-Key/ E-Key para expandibilidad como SSD, módulos 4G/5G, WiFi 6
- Ventilador de enfriamiento silencioso con un gran disipador de calor VC para excelente disipación de calor
- Fácil de instalar, actualizar y mantener con facilidad de acceso a los componentes internos después de abrir la carcasa
- Windows 10 Enterprise preinstalado (Sin activar), también soporta otros OS Windows y OS Linux

## Especificaciones

<table style={{tableLayout: 'fixed', width: 1173}}>

<thead>
  <tr>
    <th colspan="2">Versiones</th>
    <th colspan="3">Versiones Básicas</th>
    <th colspan="2">Versiones de Alto Rendimiento</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Plataforma</td>
    <td>Procesador</td>
    <td>Intel® Core™ 11th Gen. i3 1115G4</td>
    <td>Intel® Core™ 11th Gen. i3 1125G4</td>
    <td>Intel® Core™ 11th Gen. i5 1135G7</td>
    <td>Intel® Core™ vPro® 11th Gen. i5 1145GRE</td>
    <td>Intel® Core™ vPro® 11th Gen. i7 1185GRE </td>
  </tr>
  <tr>
    <td>Núcleos/Hilos del procesador</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>Co-procesador</td>
    <td colspan="3">Microchip® ATSAMD21G18 32-Bit ARM® Cortex-M0+ @ 48MHz </td>
    <td colspan="2">Raspberry Pi® RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td rowspan="3">Memoria</td>
    <td>Tecnología</td>
    <td colspan="5">Dual Channels DDR4-3200</td>
  </tr>
  <tr>
    <td>Capacidad</td>
    <td colspan="3">8GB; 16GB (Soporta hasta 64GB)</td>
    <td colspan="2">Soporta hasta 64GB</td>
  </tr>
  <tr>
    <td>Memoria ECC Soportada</td>
    <td colspan="3">NO</td>
    <td colspan="2">SÍ</td>
  </tr>
  <tr>
    <td>Gráficos</td>
    <td>Controlador</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td rowspan="2">Tecnologías Avanzadas</td>
    <td>Intel®  vPro®</td>
    <td colspan="3">NO</td>
    <td colspan="2">SÍ</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">NO</td>
    <td colspan="2">SÍ</td>
  </tr>
  <tr>
    <td>Red</td>
    <td>Controlador</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td rowspan="2">Inalámbrico</td>
    <td>WiFi</td>
    <td colspan="5">M.2 E-Key(PCIE &amp; CNVi Support), Intel® Wi-Fi 6 AX201(Opcional)</td>
  </tr>
  <tr>
    <td>Bluetooth</td>
    <td colspan="5">Bluetooth 5.0, BLE(Opcional)</td>
  </tr>
  <tr>
    <td rowspan="4">Pantalla</td>
    <td>LCD</td>
    <td colspan="5">eDP 40-Pin 4 Lane Connector</td>
  </tr>
  <tr>
    <td>HDMI</td>
    <td colspan="5">1 x HDMI 2.0b, hasta 4Kx2Kx24bpp@60Hz</td>
  </tr>
  <tr>
    <td>DP</td>
    <td colspan="5">1 x DP1.4a 7680x4320x24bpp@60Hz</td>
  </tr>
  <tr>
    <td>Pantalla Múltiple</td>
    <td colspan="5">4 pantallas simultáneas con cada combinación de interfaz de pantalla</td>
  </tr>
  <tr>
    <td rowspan="7">E/S Externa</td>
    <td>Ethernet</td>
    <td colspan="5">2 x puertos LAN 2.5GbE (RJ45, soporta 10/100/1000/2500 Mbps), Intel® i225</td>
  </tr>
  <tr>
    <td>HDMI/DP</td>
    <td colspan="5">Uno/Uno</td>
  </tr>
  <tr>
    <td>USB Type-C</td>
    <td colspan="3">N/A</td>
    <td colspan="2">USB PD / USB 4.0 / Thunderbolt 4</td>
  </tr>
  <tr>
    <td>USB Type-A</td>
    <td colspan="3">USB2.0 Type A x1 ; USB3.2 Type A x1</td>
    <td colspan="2">USB2.0 Type A x2 ; USB3.2 Type A x1</td>
  </tr>
  <tr>
    <td>LED</td>
    <td colspan="5">Estado de Alimentación</td>
  </tr>
  <tr>
    <td>Fuente de Alimentación</td>
    <td colspan="5">1x5.5x2.5mm DC Jack / Wafer 2.0mm 8pin</td>
  </tr>
  <tr>
    <td>Ranura para Tarjeta Micro Sim</td>
    <td colspan="5">1</td>
  </tr>
  <tr>
    <td rowspan="10">E/S Interna</td>
    <td>SATA</td>
    <td colspan="5">2 x Conectores de Datos SATA Gen III 6.0 Gb/s + 3 x Conectores de Alimentación SATA</td>
  </tr>
  <tr>
    <td>Puerto COM</td>
    <td colspan="5">1 x RS-232/422/485, 1 x RS-232</td>
  </tr>
  <tr>
    <td>GPIO</td>
    <td colspan="3">28-Pin Arduino Co-processor 2.54mm header</td>
    <td colspan="2">30-Pin Raspberry Pi Co-processor 2.54mm header</td>
  </tr>
  <tr>
    <td>Audio</td>
    <td colspan="5">Realtek High Definition Audio, Conector Combo Micrófono + auriculares</td>
  </tr>
  <tr>
    <td>USB2.0</td>
    <td colspan="5">USB2.0 9-pin Header x2 480Mbps</td>
  </tr>
  <tr>
    <td>Ventilador</td>
    <td colspan="5">2 x 12V 4-wire Fan header, Control PWM</td>
  </tr>
  <tr>
    <td>Control del Panel Frontal</td>
    <td colspan="5">Encendido, Reset, LED de Estado de Alimentación, LED de Estado SATA</td>
  </tr>
  <tr>
    <td>S/PDIF</td>
    <td colspan="5">3-Pin 2.54mm Header</td>
  </tr>
  <tr>
    <td>Alimentación SATA</td>
    <td colspan="5">WAFER4-Pin 2.0 pitch Connector</td>
  </tr>
  <tr>
    <td>Puerto de Depuración Co-CPU</td>
    <td colspan="5">6-Pin 0.5mm FPC Connector (SWD)</td>
  </tr>
  <tr>
    <td rowspan="4">Expansión</td>
    <td>M.2 M-Key</td>
    <td colspan="5">1 x M-Key 2242/2280(PCIe 3.0 x4）</td>
  </tr>
  <tr>
    <td>M.2 E-Key</td>
    <td colspan="5">1 x E-Key 2230(PCIe 3.0 x1; USB2.0 x1;Intel CNVi)</td>
  </tr>
  <tr>
    <td>M.2 B-Key</td>
    <td colspan="5">1 x B-Key2242/2252/2280(PCIe 3.0 x2; USB2.0 x1)</td>
  </tr>
  <tr>
    <td>E/S de Alta Velocidad</td>
    <td colspan="3">1 X PCIe x4 Gen4 </td>
    <td colspan="2">1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO etc.</td>
  </tr>
  <tr>
    <td rowspan="2">Alimentación</td>
    <td>Voltaje de Suministro</td>
    <td colspan="3">DC Jack: 12V</td>
    <td colspan="2">DC Jack: 12V-19V</td>
  </tr>
  <tr>
    <td>Batería RTC</td>
    <td colspan="5">Litio 3V/210mAH</td>
  </tr>
  <tr>
    <td>Certificación</td>
    <td>EMC</td>
    <td colspan="5">CE,FCC,TELEC</td>
  </tr>
  <tr>
    <td rowspan="3">Mecánico</td>
    <td>Dimensión</td>
    <td colspan="5">132mm*124mm*233mm</td>
  </tr>
  <tr>
    <td>Solución Térmica</td>
    <td colspan="5">Ensamblajes de Tubos de Calor/Ensamblajes de Cámara de Vapor de Dispersión de Calor</td>
  </tr>
  <tr>
    <td>Peso</td>
    <td colspan="5">1800g</td>
  </tr>
</tbody>
</table>

## Comparación

<table style={{tableLayout: 'fixed', width: 1354}}>
<thead>
  <tr>
    <th>Versión</th>
    <th colspan="3">Versiones Básicas</th>
    <th colspan="2">Versiones de Alto Rendimiento</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Apariencia</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%E4%BD%8E%E9%85%8D.png" alt="reserver basic" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png" alt="reserver high" width={150} height={100} />
</td>
    <td><img src="https://files.seeedstudio.com/products/102110559/reserver%20%E9%AB%98%E9%85%8D.png" alt="reserver high" width={150} height={100} />
</td>
  </tr>
  <tr>
    <td>Procesador</td>
    <td>Intel® Core™ 11th Gen. i3 1115G4</td>
    <td>Intel® Core™ 11th Gen. i3 1125G4</td>
    <td>Intel® Core™ 11th Gen. i5 1135G7</td>
    <td>Intel® Core™ vPro® 11th Gen. i5 1145GRE</td>
    <td>Intel® Core™ vPro® 11th Gen. i7 1185GRE </td>
  </tr>
  <tr>
    <td>Núcleos/Hilos del procesador</td>
    <td>2C/4T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
    <td>4C/8T</td>
  </tr>
  <tr>
    <td>Co-procesador</td>
    <td colspan="3">Microchip® ATSAMD21G18 32-Bit ARM® Cortex-M0+ @ 48MHz </td>
    <td colspan="2">Raspberry Pi® RP2040 32-Bit Dual ARM Cortex-M0+ @ 133MHz</td>
  </tr>
  <tr>
    <td>Intel®  vPro®</td>
    <td colspan="3">NO</td>
    <td colspan="2">SÍ</td>
  </tr>
  <tr>
    <td>Intel® Total Memory Encryption</td>
    <td colspan="3">NO</td>
    <td colspan="2">SÍ</td>
  </tr>
  <tr>
    <td>Gráficos</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® UHD Graphics 48EUs (400 - 1250MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 80EUs(400-1300MHz)</td>
    <td>Intel® Iris Xe Graphics G7 96EUs(400-1300MHz)</td>
  </tr>
  <tr>
    <td>Memoria</td>
    <td colspan="5">Canales Duales DDR4-3200(Soporta hasta 64GB en total)</td>
  </tr>
  <tr>
    <td>Memoria ECC Soportada</td>
    <td colspan="3">NO</td>
    <td colspan="2">SÍ</td>
  </tr>
  <tr>
    <td>Controlador de Red</td>
    <td colspan="3">Intel® Ethernet Controller I225-V</td>
    <td colspan="2">Intel® Ethernet Controller I225-LM</td>
  </tr>
  <tr>
    <td>Expansión</td>
    <td colspan="3">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe x4 Gen4 </td>
    <td colspan="2">M.2 M-Key; M.2 B-Key; M.2 E-Key; 1 X PCIe 3.0 x4/SMBus/LPC/USB 2.0/CPU GPIO etc.</td>
  </tr>
  <tr>
    <td>E/S Externa</td>
    <td colspan="3">USB Type-A(USB2.0 Type-A x1 ; USB3.2 Type-A x1);  HDMI; DP; Puertos LAN 2.5GbE x2; Conector de Audio; Conector DC(12V);</td>
    <td colspan="2"><div>
  USB Type-C(USB PD / USB 4.0 / Thunderbolt 4);<br />USB Type-A(USB2.0 Type-A x2 ; USB3.2 Type-A x1);  HDMI;DP; Puertos LAN 2.5GbE x2; Conector de Audio; Conector DC(12V-19V);
</div>
</td>
  </tr>
  <tr>
    <td>Conectividad Inalámbrica</td>
    <td colspan="5">WIFI, BLE y Soporte LTE/4G/5G/LoRaWAN</td>
  </tr>
</tbody>
</table>

## Descripción General del Hardware

Hay dos versiones diferentes de reServer, versión Básica y versión de Alto rendimiento, que tienen diferentes configuraciones de hardware.

### Versión básica

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09%20%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reServer%20mainboard%20.png" alt="pir" width={1000} height="auto" /></p>

### Versión de alto rendimiento

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/09-%E9%AB%98%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

### Información de pines

#### Conector de Alimentación de 8 Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/8P_power_connector.png" alt="pir" width={800} height="auto" /></p>

#### Pinout Arduino de 28 Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/28P_arduino.png" alt="pir" width={800} height="auto" /></p>

#### Pinout COM de 9 Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_COM_pinout.png" alt="pir" width={800} height="auto" /></p>

#### Pinout USB2.0 de 9 Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_USB2.0_pinout.png" alt="pir" width={800} height="auto" /></p>

#### Pinout del Panel Frontal de 9 Pines

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/9P_front_panel_pinout.png" alt="pir" width={800} height="auto" /></p>

## Dimensiones

Ambas versiones tienen las mismas dimensiones.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/102110559/10-%E4%BD%8E%E9%85%8D.png" alt="pir" width={1000} height="auto" /></p>

## Inicio Rápido con reServer

Si quieres comenzar con reServer de la manera más rápida y fácil, puedes seguir la guía a continuación.

### Hardware Requerido

Necesitas preparar el siguiente hardware antes de comenzar con reServer.

- reServer
- Adaptador de Alimentación (incluido)
- Monitor externo
- Cable HDMI/DP
- Teclado y Ratón

### Instalación de Hardware

Para esta parte, introduciremos cómo instalar o reemplazar algún hardware dentro de reServer. Si no hay necesidades para ti, por favor omítelo.
Podrías seguir el **Manual de Guía de Ensamblaje** adjunto al final de esta página para acceder a la placa principal de reServer antes de leer esta parte.

#### Instalación de DDR4

Puedes añadir una nueva DDR4 para expandir la memoria. Las ranuras SO-DIMM de doble canal soportan DDR4-3200MT/s hasta 64GB en total.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/ddr4.png" alt="pir" width={800} height="auto" /></p>

#### Instalación de SSD

El M.2 M-Key 2242/2280(PCIe 3.0 x4) te permite añadir SSD.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20M-Key.png" alt="pir" width={800} height="auto" /></p>

#### Instalación del Módulo WiFi

Puedes seguir los pasos a continuación para añadir el Módulo WiFi.

- **Paso 1.** Retira el SSD de la ranura M.2 M-Key.

- **Paso 2.** Quita el cable de la antena WiFi y retira el Módulo WiFi preinstalado del M.2 E-Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key.png" alt="pir" width={800} height="auto" /></p>

- **Paso 3.** Instala el nuevo Módulo WiFi y conecta el cable de la antena WiFi de vuelta a él.

- **Paso 4.** Instala el SSD de vuelta al M.2 M-Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20E-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**Nota:** reServer se envía con dos Antenas WiFi de 2.4/5GHz, puedes conectar la antena al adaptador que se conecta con el cable de antena del módulo WiFi dentro del reServer para lograr mejor conectividad WiFi.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/antenna.png" alt="pir" width={800} height="auto" /></p>

#### Instalación del Módulo 4G/5G/LoRaWAN

reServer soporta instalar Módulo 4G/5G/LoRaWAN en M.2 B-Key 2242/2252/2280(PCIe 3.0 x2; USB2.0 x1). **(El Módulo 4G/5G/LoRaWAN no está incluido en reServer)**
Por favor siéntete libre de seguir los pasos para añadir el Módulo 4G/5G/LoRaWAN.

- **Paso 1.** Instala el Módulo 4G/5G/LoRaWAN al M.2 B-Key.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key.png" alt="pir" width={800} height="auto" /></p>

- **Paso 2.** Conecta el cable de la antena al Módulo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/M.2%20B-Key%20antenna.png" alt="pir" width={800} height="auto" /></p>

**Nota:** Tienes que insertar una tarjeta SIM estándar en la ranura de tarjeta micro SIM para habilitar 5G/4G.

#### Instalación de HDD

reServer soporta instalar dos discos duros internos de 3.5"/2.5" para adquirir más almacenamiento. **(Los HDDs no están incluidos en reServer)**
Por favor sigue los pasos para instalar los HDDs.

- **Paso 1.** Retira los tornillos y saca los soportes

- **Paso 2.** Conecta los HDDs a los soportes con tornillos

- **Paso 3.** Empuja los soportes de HDD hacia abajo para conectar los HDDs con los puertos SATA.

- **Paso 4.** Fija los soportes de HDD con tornillos

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/07.png" alt="pir" width height="auto" /></p>

### Conexión de Hardware

Para esta parte, introduciremos la conexión de interfaces de reServer.
Hay dos versiones de reServer. Por favor nota que diferentes versiones podrían tener diferentes interfaces.

#### Conexión de Pantalla

Hay tres métodos para que reServer se conecte a una pantalla mientras que el tercer método es solo para versiones de Alto rendimiento.
**Método 1.** Puerto HDMI

**Método 2.** Puerto DP

**Método 3.** USB Type-C (Disponible solo con versiones de Alto rendimiento)

Versión básica
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/DIsplay%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

Versión de alto rendimiento
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20display.png" alt="pir" width={800} height="auto" /></p>

#### Conexión de Teclado y Ratón

Conecta el teclado y ratón a través de los puertos USB. Hay un puerto USB 3.2 y un puerto USB 2.0 para las versiones básicas, mientras que hay un puerto USB 3.2 y dos puertos USB 2.0 para las versiones de alto rendimiento.
Versión básica
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/USB%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

Versión de alto rendimiento
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20usb.png" alt="pir" width={800} height="auto" /></p>

#### Conexión de Audio

Para las versiones básicas, el conector de audio está en el panel de E/S del lado izquierdo, mientras que para las versiones de alto rendimiento, está en el panel de E/S del lado derecho.

Versión básica
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Audio%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

Versión de alto rendimiento
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20audio.png" alt="pir" width={800} height="auto" /></p>

#### Conexión de Alimentación

Hay dos métodos para encender el reServer, y el segundo solo está disponible para las versiones de alto rendimiento.

**Método 1.** Simplemente conecta el adaptador de alimentación AC-DC (incluido en la caja del producto) con el cable de alimentación AC (fuera de la caja del producto pero aún en el paquete), luego conéctalo al conector DC de 12V del reServer.

**Método 2.** Conecta el cable de carga USB Type-C (no incluido en el reServer) al puerto USB Type-C Thunderbolt 4 (este puerto solo está disponible en las versiones de alto rendimiento)

Versión básica
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/Power%20Basic%20version.png" alt="pir" width={800} height="auto" /></p>

Versión de alto rendimiento
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/reServer/wiki/reserver%20high%20power.png" alt="pir" width={800} height="auto" /></p>

### Instalación del Sistema Operativo

Para todas las versiones del reServer, Windows 10 Enterprise (sin activar) ha sido preinstalado, puedes simplemente iniciarlo y activar el SO. Sin embargo, el reServer aún soporta otros SO de Windows y también SO Linux, por lo que puedes reemplazar el SO preinstalado con el que desees.

## Recursos

- **[PDF]** [Guía de Ensamblaje del reServer](https://files.seeedstudio.com/wiki/reServer/Assembly%20Guide%20of%20reServer.pdf)
- **[PDF]** [Atmel-SAMD21-datasheet](https://files.seeedstudio.com/wiki/reServer/wiki/Atmel-SAMD21-datasheet.pdf)

## Soporte Técnico y Discusión del Producto

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
