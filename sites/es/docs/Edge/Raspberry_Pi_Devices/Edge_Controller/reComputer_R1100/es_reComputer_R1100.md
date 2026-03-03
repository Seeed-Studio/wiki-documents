---
description: El reComputer R1100 es una puerta de enlace y controlador IoT con capacidades de IA alimentado por Raspberry Pi CM4. Con 2GB RAM, 8GB eMMC, Ethernet dual, USB, RS485, RS232, DI/DO, y conectividad inalámbrica (4G, LoRa®, Wi-Fi/BLE), es perfecto para automatización industrial y computación en el borde.
title: Introducción al reComputer R1100
keywords:
- Raspberry pi
- Edge Controller
- reComputer R1100
image: https://files.seeedstudio.com/wiki/R1100/recomputer2.jpg
slug: /recomputer_r1100_intro
last_update:
  date: 2/25/2024
  author: Kasun Thushara
---

## Descripción General

El reComputer R1100, alimentado por el Raspberry Pi CM4, es una puerta de enlace IoT de borde versátil con capacidades de IA. Cuenta con una gama completa de interfaces industriales, incluyendo **2x Ethernet, 2x USB, 2x RS485, 2x RS232, 2x DI, y 2x DO**, junto con opciones de conectividad inalámbrica flexibles como **4G, LoRa®, y Wi-Fi/BLE**. Estas características lo convierten en una opción ideal para diversas aplicaciones industriales.
La serie reComputer R1100 se utiliza ampliamente en aplicaciones IoT, incluyendo **adquisición de datos y monitoreo de procesos, control de automatización y robótica, fabricación inteligente, y comunicación y redes industriales**. Su tamaño compacto, flexibilidad, bajo costo y programabilidad proporcionan un fuerte soporte para **automatización, sistemas IoT y más allá**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reComputer-R1125-1.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Obtener Uno Ahora 🖱️</font></span></strong>
    </a>
</div>

## Características

**Diseñado para Sistemas de Automatización e IoT**  

- Soporta protocolos **BACnet, Modbus RTU, Modbus TCP/IP, y KNX**  
- Compatible con **Node-RED, CODESYS, Balena, y más**  
- **Indicadores LED de doble cara** para verificaciones rápidas de estado  
- **Carcasa metálica duradera**, compatible con **montaje en riel DIN y pared**  
- Soporta **Yocto y Buildroot** para un SO personalizado  

**Rendimiento Potente**  

- Alimentado por **Raspberry Pi CM4**  
- **Broadcom BCM2711** quad-core **Cortex-A72 (ARM v8) SoC de 64 bits @ 1.5GHz**  
- Hasta **8GB RAM** y **32GB almacenamiento eMMC**  

**Capacidades Inalámbricas Ricas**  

- **Wi-Fi y BLE integrados**  
- **Mini-PCIe 1**: Soporta **LTE, USB LoRa®, USB Zigbee**  
- **Mini-PCIe 2**: Soporta **SPI LoRa®, USB LoRa®, USB Zigbee**  

**Interfaces Completas**  

- **2x RS485 (aislado), 2x RS232 (aislado), 2x puertos DI aislados, 2x puertos DO aislados**  
- **1x Ethernet 10M/100M/1000M** (soporta **PoE**)  
- **1x Ethernet 10M/100M**  
- **1x HDMI 2.0**  
- **2x USB 2.0 Tipo-A**  
- **1x USB 2.0 Tipo-C** (consola USB para actualizaciones del SO)  
- **1x ranura para tarjeta MicroSD**  
- **1x ranura para tarjeta Nano SIM (interna)**  

**Seguridad y Confiabilidad**  

- **Watchdog de hardware**  
- **Supercondensador UPS opcional**  
- **Carcasa metálica con paneles laterales de PC**  
- **Estándares de Compatibilidad Electromagnética (EMC)**:  
  - **ESD**: EN61000-4-2, Nivel 3  
  - **EFT**: EN61000-4-4, Nivel 2  
  - **Protección contra Sobretensiones**: EN61000-4-5, Nivel 2  
- **Vida Útil de Producción**: El **reComputer R1100** permanecerá en producción **hasta al menos diciembre de 2030**

## Especificación

| **Parámetro**          | **Descripción** |
|------------------------|----------------|
| **Especificación de Hardware** | |
| **Serie de Producto** | R11xx-10, R11xx-00 |
| **CPU** | Raspberry Pi CM4, Quad-core Cortex-A72 @ 1.5GHz |
| **Sistema Operativo** | Raspbian, Debian, Yocto, Buildroot |
| **RAM** | 1GB / 2GB / 4GB / 8GB |
| **Almacenamiento eMMC** | 8GB / 16GB / 32GB |
| **Especificación del Sistema** | |
| **Entrada de Alimentación** | DC 9V~36V, Bloque de Terminales de 2 pines |
| **PoE (como dispositivo alimentado)** | IEEE 802.3af Estándar 12.95W PoE* |
| **Protección contra Sobretensión** | 40V |
| **Consumo de Energía** | Inactivo: 2.88W; Carga Completa: 5.52W |
| **Interruptor de Alimentación** | No |
| **Interruptor de Reinicio** | Sí |
| **Interfaz** | |
| **Ethernet** | 1x 10/100/1000Mbps (soporta PoE*), 1x 10/100Mbps IEEE 802.3/802.3u |
| **USB** | 2x USB-A 2.0 Host, 1x USB-C 2.0 (para flashear SO) |
| **RS485** | 2x RS485 (Aislado) |
| **RS232** | 2x RS232 (Aislado) |
| **DI (Entrada Digital)** | 2x Puertos DI Aislados, Voltaje de Entrada: 5~24V DC |
| **DO (Salida Digital)** | 2x Puertos DO Aislados, Voltaje de Salida: &lt;60V DC |
| **Tarjeta SIM** | 1x Ranura para Tarjeta Nano SIM (Interna) |
| **Tarjeta SD** | 1x Ranura para Tarjeta MicroSD |
| **SSD** | 1x Ranura M.2 NVMe SSD (2280-M Key) |
| **Indicadores LED** | 12x Indicadores LED |
| **Zumbador** | 1 |
| **Botón de Reset** | 1 |
| **HDMI** | 1x HDMI 2.0 |
| **Comunicación Inalámbrica** | |
| **Wi-Fi 2.4/5.0GHz** | Wi-Fi integrado* |
| **BLE 5.0** | BLE integrado* |
| **LoRa®** | USB LoRa®*/ SPI LoRa®* |
| **4G Cellular** | 4G LTE* |
| **Zigbee** | USB Zigbee* |
| **Estándares** | |
| **Cumplimiento EMC** | ESD: EN61000-4-2, Nivel 3; EFT: EN61000-4-4, Nivel 2; Surge: EN61000-4-5, Nivel 2 |
| **Certificación** | CE, FCC, TELEC, RoHS, REACH |
| **Condiciones Ambientales** | |
| **Protección de Ingreso** | IP40 |
| **Temperatura de Operación** | -30 ~ 70°C |
| **Humedad de Operación** | 10 ~ 95% RH |
| **Temperatura de Almacenamiento** | -40 ~ 80°C |
| **Otras Características** | |
| **UPS de Supercondensador** | Módulo SuperCAP UPS LTC3350* |
| **Watchdog de Hardware** | 1 ~ 255s |
| **RTC** | RTC de Alta Precisión |
| **Seguridad** | |
| **Chip de Encriptación** | TPM 2.0*, ATECC608A |
| **Sistema de Refrigeración** | Sin ventilador |
| **Garantía** | 2 años |
| **Vida Útil de Producción** | Hasta diciembre de 2030 |
| **Declaración** | Las opciones marcadas con * requieren compra adicional según la lista de accesorios. |
| **Estado de Componentes e Interfaces** | |
| **Reservado** | Designado para uso futuro o expansión. |
| **Opcional** | Componentes no esenciales; los usuarios pueden elegir incluir o excluir. |
| **Ocupado** | Actualmente en uso e integral para la funcionalidad del producto. |
| **Incluido** | Componentes esenciales proporcionados con el paquete estándar. |

**Declaración**: Las opciones marcadas con `*` requieren compra adicional según la lista de accesorios.

## Dimensiones Mecánicas  

| **Parámetro** | **Descripción** |
|--------------|----------------|
| **Dimensión (An x Al x Pr)** | 130 mm x 93 mm x 49.6 mm |
| **Carcasa** | Carcasa de Aleación de Aluminio 6061 con Paneles Laterales de PC Transparente |
| **Montaje** | Riel DIN / Pared |
| **Peso (Neto)** | 560g |

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/dimensions.PNG" style={{width:800, height:'auto'}}/></div>

## Descripción General del Hardware

### Descripción General del Sistema

#### Descripción General de la Interfaz

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/interface.PNG" style={{width:800, height:'auto'}}/></div>

#### Descripción General de la Placa Principal

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/mainboard.PNG" style={{width:800, height:'auto'}}/></div>

#### Diagrama de Alimentación

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power.PNG" style={{width:800, height:'auto'}}/></div>

El reComputer R1100 ofrece dos opciones de fuente de alimentación: un terminal DC y un puerto PoE. Por defecto, se alimenta a través del terminal DC usando el adaptador de corriente regional oficial (SKU: 110061505/110061506). Alternativamente, está disponible una fuente de alimentación PoE opcional (módulo PoE, SKU: 110991925). Esta flexibilidad permite una integración perfecta con diferentes fuentes de alimentación, atendiendo a diversas necesidades de aplicación.

**Terminal de Alimentación de 2 Pines**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

El reComputer R1100 opera con una fuente de voltaje DC que va de 9 a 36V, conectada a través de un bloque de terminales de alimentación de 2 pines. Para la conexión a tierra, el cable de tierra puede fijarse de forma segura al tornillo ubicado en la esquina superior izquierda del terminal de alimentación.

**PoE**

Con el módulo PoE instalado, el puerto ETH0 del reComputer R1100 soporta alimentación PoE, ofreciendo una forma conveniente y eficiente de alimentar el dispositivo a través de Ethernet. Esta opción simplifica la instalación y minimiza el cableado, haciéndola ideal para aplicaciones con fuentes de alimentación limitadas o ubicaciones sin tomas de corriente fácilmente disponibles.

- **Entrada PoE**: 44~57V (Típico: 48V)
- **Salida PoE**: 12V, 1.1A Máx

:::note
El módulo PoE incluido cumple con el estándar IEEE 802.3af y proporciona una salida de potencia máxima de 12.95W. Sin embargo, para periféricos de alta potencia como SSDs o módulos 4G, la alimentación PoE puede no ser suficiente. En tales casos, se recomienda usar el terminal DC para la alimentación para asegurar una operación estable y confiable del dispositivo.
:::

**Consumo de Energía**

La tabla a continuación proporciona los valores de consumo de energía probados para el reComputer R1100, basados en mediciones realizadas en el laboratorio de Seeed Studio. Tenga en cuenta que estos valores son solo para referencia, ya que las variaciones en los métodos de prueba y las condiciones ambientales pueden afectar los resultados.  

| **Estado**   | **Voltaje** | **Corriente** | **Consumo de Energía** | **Descripción** |
|-------------|------------|------------|----------------------|----------------|
| **Apagado** | 24V | 51mA | 1.224W | Prueba de consumo de energía estático en estado de apagado y sin alimentación. |
| **Inactivo** | 24V | 120mA | 2.88W | Mide la corriente de entrada al suministrar alimentación de 24V sin ejecutar ningún programa de prueba. |
| **Carga Completa** | 24V | 230mA | 5.52W | La CPU funciona a carga completa usando el comando `"stress -c 4"`, sin dispositivos externos conectados. |

**Encendido y Apagado**  
El reComputer R1100 no incluye un botón de encendido por defecto. El sistema se enciende automáticamente cuando se conecta a una fuente de alimentación.  

- Para apagar, utilice la opción de apagado en el sistema operativo y espere a que el proceso se complete antes de desconectar la alimentación.  
- Para reiniciar el sistema, simplemente vuelva a conectar la fuente de alimentación.  

Esto garantiza un funcionamiento seguro y previene la pérdida potencial de datos o problemas del sistema.

#### Diagrama de Bloques

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/power_terminal.PNG" style={{width:400, height:'auto'}}/></div>

#### Diagrama IIC

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/IIC.PNG" style={{width:600, height:'auto'}}/></div>

## Descripción de Interfaces

| **Interfaz** | **Descripción** |
|--------------|----------------|
| **Ethernet** | 1 × 10/100/1000 Mbps (soporta PoE*) , 1 × 10/100 Mbps (IEEE 802.3/802.3u) |
| **USB** | 2 × USB-A 2.0 (Host) , 1 × USB-C 2.0 (para flashear SO) |
| **RS485** | 2 × RS485 (Aislado) |
| **RS232** | 2 × RS232 (Aislado) |
| **DI (Entrada Digital)** | 2 × Puertos DI Aislados , Voltaje de Entrada: 5~24V DC |
| **DO (Salida Digital)** | 2 × Puertos DO Aislados ,  Voltaje de Salida: < 60V DC |
| **HDMI** | 1 × HDMI 2.0 |
| **Ranura para Tarjeta SD** | Soporta Tarjeta MicroSD |
| **Ranura para Tarjeta SIM** | Soporta Tarjeta Nano SIM |
| **Ranura M.2** | Soporta M.2 NVMe SSD |
| **Indicadores LED** | 12 × Indicadores LED |
| **Zumbador** | 1 |
| **Botón de Reinicio** | 1 |

### Estado de los Indicadores LED

El Computador R1100 cuenta con 12 LEDs para indicación del estado del sistema. Sus funciones específicas se describen en la tabla a continuación.

Aquí está la tabla **Estado de los Indicadores LED** en formato estructurado:  

| **Indicador LED** | **Color** | **Estado** | **Descripción** |
|------------------|---------|-----------|----------------|
| **PWR** | Verde | Encendido | El dispositivo está conectado a la alimentación. |
| | | Apagado | El dispositivo no está conectado a la alimentación. |
| **ACT** | Verde | Parpadeando | Indica acceso a eMMC bajo Linux. Si ocurre un error durante el arranque, parpadea con un patrón de error (consulte la documentación de Raspberry Pi). |
| **USER** | Verde/Rojo/Azul | Definido por el usuario | Puede ser programado por el usuario. |
| **4G** | Verde | Encendido | La marcación es exitosa y la conexión es normal. |
| | | Apagado | La señal 4G no está conectada, o el dispositivo no está encendido. |
| **DI1** | Verde | Encendido/Parpadeo | Señal de entrada detectada. |
| | | Apagado | Sin alimentación o sin transmisión de datos. |
| **DI2** | Verde | Encendido/Parpadeo | Señal de entrada detectada. |
| | | Apagado | Sin alimentación o sin transmisión de datos. |
| **DO1** | Verde | Encendido/Parpadeo | Señal de salida detectada. |
| | | Apagado | Sin alimentación o sin transmisión de datos. |
| **DO2** | Verde | Encendido/Parpadeo | Señal de salida detectada. |
| | | Apagado | Sin alimentación o sin transmisión de datos. |
| **COM1 (RS485 Canal 1)** | Verde | Encendido/Parpadeo | Recibiendo o enviando datos. |
| | | Apagado | Sin transferencia de datos en RS485 Canal 1. |
| **COM2 (RS485 Canal 2)** | Verde | Encendido/Parpadeo | Recibiendo o enviando datos. |
| | | Apagado | Sin transferencia de datos en RS485 Canal 2. |
| **COM3 (RS232 Canal 1)** | Verde | Encendido/Parpadeo | Recibiendo o enviando datos. |
| | | Apagado | Sin transferencia de datos en RS232 Canal 1. |
| **COM4 (RS232 Canal 2)** | Verde | Encendido/Parpadeo | Recibiendo o enviando datos. |
| | | Apagado | Sin transferencia de datos en RS232 Canal 2. |

### Códigos de Estado ACT

Aquí tienes una tabla estructurada para los **Códigos de Estado ACT**:  

| Destellos Largos | Destellos Cortos | Descripción del Estado |
|-------------|--------------|--------------------|
| 0 | 3 | Fallo genérico al arrancar |
| 0 | 4 | `start*.elf` no encontrado |
| 0 | 7 | Imagen del kernel no encontrada |
| 0 | 8 | Fallo de SDRAM |
| 0 | 9 | SDRAM insuficiente |
| 0 | 10 | En estado HALT |
| 2 | 1 | Partición no es FAT |
| 2 | 2 | Fallo al leer de la partición |
| 2 | 3 | Partición extendida no es FAT |
| 2 | 4 | Discrepancia de firma/hash del archivo (Pi 4) |
| 4 | 4 | Tipo de placa no compatible |
| 4 | 5 | Error fatal del firmware |
| 4 | 6 | Fallo de alimentación tipo A |
| 4 | 7 | Fallo de alimentación tipo B |

**Notas Adicionales:**  

- Si el **LED ACT parpadea en un patrón regular de cuatro parpadeos**, indica que falta el código de arranque (`start.elf`).  
- Si el **LED ACT parpadea en un patrón irregular**, el proceso de arranque ha comenzado.  
- Si el **LED ACT no parpadea en absoluto**, el código EEPROM podría estar corrupto. Intenta arrancar sin ningún periférico conectado.  
- Para más detalles, consulta el **Foro de Raspberry Pi**: [¿Tu Pi no arranca? (Problemas de Arranque Sticky)](https://forums.raspberrypi.com//viewtopic.php?f=28&t=58151).

**Indicador USER**

El reComputer R1100 incluye un indicador **USER**, que puede ser personalizado según los requisitos del usuario.  

**Nota:**  
Para detalles sobre las pruebas del **LED USER**, por favor consulta [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/#control-led-indicators).

### Zumbador

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/buzzer.PNG" style={{width:600, height:'auto'}}/></div>

El reComputer R1100 está equipado con un zumbador activo, que puede ser usado para alarmas y notificaciones de eventos.  

Para verificar el GPIO correspondiente a **Buzzer_EN**, ingresa el siguiente comando en la terminal:  

```
cat /sys/kernel/debug/gpio
```

Esto generará **gpio587** como el GPIO asignado para el zumbador.

**Nota:**  
Para obtener detalles sobre **pruebas del zumbador**, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/#controlling-the-buzzer-via-gpio).

### RS485

La serie reComputer R1100 cuenta con **dos puertos RS485** con **terminales Phoenix de 6 pines con espaciado de 3.5mm**. Cada puerto RS485 está etiquetado con la notación de serigrafía **"A/B/GND"** para facilitar la identificación.

**Definiciones de Pines**  
Las asignaciones de pines del terminal son las siguientes:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485.PNG" style={{width:600, height:'auto'}}/></div>

| **ID del Pin** | **Nombre del Pin**  |  
|-----------|-------------|  
| 1         | RS485-1_A   |  
| 2         | RS485-2_A   |  
| 3         | RS485-1_B   |  
| 4         | RS485-2_B   |  
| 5         | GND         |  
| 6         | GND         |

Conectando Cables
El diagrama esquemático del cableado RS485 es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs485_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
El empaque del producto incluye resistencias terminales de 120 Ohm, que pueden usarse según sea necesario para la comunicación RS485.
:::

Para detalles sobre las pruebas de RS485, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/#rs485-testing).

### RS232

La serie reComputer R1100 cuenta con 2x puertos RS232 con terminales Phoenix de 6 pines con espaciado de 3.5mm.
El etiquetado de serigrafía para un solo puerto RS232 es **TX/RX/GND**.

**Definición de Pines**

Los pines del terminal se definen de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285.PNG" style={{width:600, height:'auto'}}/></div>

Aquí está la tabla para las definiciones de pines RS232:

| **ID del Pin** | **Nombre del Pin**  |
|-----------|--------------|
| 13        | R232-3_RX    |
| 14        | R232-4_RX    |
| 15        | R232-3_TX    |
| 16        | R232-4_TX    |
| 17        | GND          |
| 18        | GND          |

**Conectando Cables**

El diagrama esquemático del cableado RS232 se muestra a continuación:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/rs285_connection.PNG" style={{width:600, height:'auto'}}/></div>

:::note
Para instrucciones detalladas de prueba RS232, consulte Para detalles sobre las pruebas de RS485, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/#rs232-testing).

:::

### DI (Entrada Digital)

La serie reComputer R1100 incluye 2x puertos DI con terminales Phoenix de 3 pines con espaciado de 3.5mm.  
El etiquetado de serigrafía para un puerto DI individual es **"DI/G_DI"**.  

**Definición de Pines**

Los pines del terminal se definen de la siguiente manera:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI.PNG" style={{width:600, height:'auto'}}/></div>

Aquí está la tabla para la **Definición de Pines DI (Entrada Digital)**:  

| **ID de Pin** | **Nombre de Pin** |
|-----------|------------|
| 7         | DI1        |
| 9         | DI2        |
| 11        | G_DI       |

**Conectando Cables**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DI_connect.PNG" style={{width:600, height:'auto'}}/></div>

Aquí está la tabla para los **Parámetros DI (Entrada Digital)**:  

| **Parámetro**           | **Descripción**    |
|------------------------|-------------------|
| Tipo de Entrada            | PNP               |
| Protección de Aislamiento  | 5 kV              |
| DI a G_DI (estado ON) | 5~30 VDC          |

:::note
Para detalles sobre las pruebas de DI, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/#di-digital-input-testing).
:::

### DO (Salida Digital)

El equipo de la serie reComputer R1100 incluye 2x puertos DO, terminales phoenix de 3 pines con espaciado de 3.5mm. La serigrafía de DO individual es **"DO/G_DO".**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO.PNG" style={{width:600, height:'auto'}}/></div>

**Tabla de Definición de Pines**

| ID de Pin | Nombre de Pin |  
|--------|------------|  
| 8      | DO1       |  
| 10     | DO2       |  
| 12     | G_DO      |

**Conectando Cables**

El diagrama esquemático de un solo cable DO es el siguiente:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/DO_connect.PNG" style={{width:600, height:'auto'}}/></div>

**Parámetros del Puerto DO**

| Parámetro            | Descripción     |  
|----------------------|----------------|  
| Tipo de Salida      | Transistor      |  
| Protección de Aislamiento | 5 kV           |  
| Nota de Salida      | &lt; 60VDC         |

:::note
Para detalles sobre las pruebas DO, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_configure_system/#do-digital-output).
:::

### Interruptor de Arranque

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/Boot.PNG" style={{width:200, height:'auto'}}/></div>

El Interruptor de Arranque en el reComputer R1100 está vinculado al pin nRPI_BOOT del módulo CM4. Este interruptor permite a los usuarios seleccionar la fuente de arranque entre eMMC y USB.

- **Modo Normal:** Coloque el interruptor **alejado** de la etiqueta "BOOT" para arrancar desde eMMC.
- **Modo de Flasheo:** Coloque el interruptor **hacia** la etiqueta "BOOT" para arrancar desde la interfaz USB Type-C para el flasheo de imagen del sistema.

Aquí está la tabla para las posiciones del Interruptor de Arranque y sus modos correspondientes:

| **Posición del Interruptor** | **Modo**       | **Descripción**      | **nRPI-BOOT** |
|---------------------|---------------|----------------------|---------------|
| Alejado de "BOOT"   | Modo Normal    | Arrancar desde eMMC       | Bajo           |
| Hacia "BOOT"     | Modo Flash     | Arrancar desde USB        | Alto          |

### USB

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/usb.PNG" style={{width:200, height:'auto'}}/></div>

El reComputer R1100 cuenta con un puerto USB Type-C y dos puertos USB Type-A. La tabla a continuación describe sus funciones y descripciones.

Aquí está la tabla para los puertos USB y sus funciones:

| **Tipo**   | **Cantidad** | **Protocolo** | **Función**   | **Descripción** |
|-----------|------------|------------|--------------|---------------|
| Type-C   | 1          | USB 2.0    | USB-Device   | Utilizado para depuración de puerto serie, grabación de imágenes, etc. |
| Type-A   | 2          | USB 2.0    | USB-Host     | Conecta diferentes dispositivos USB como unidades flash, teclados USB o ratones. |

### Ranura SD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SD.PNG" style={{width:200, height:'auto'}}/></div>

El equipo de la serie reComputer R1100 incluye una ranura para tarjeta micro SD, que se utiliza para instalar una tarjeta micro SD para almacenar datos del usuario.

### Ranura SIM (Interna)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/simslot.PNG" style={{width:600, height:'auto'}}/></div>

La serie reComputer R1100 incluye una ranura interna para tarjeta Nano SIM, diseñada para instalar una tarjeta Nano SIM para habilitar la conectividad 4G. La tabla a continuación ilustra las diferencias de tamaño entre las tarjetas SIM estándar, Micro SIM y Nano SIM.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SIMsizes.PNG" style={{width:400, height:'auto'}}/></div>

:::note
La versión estándar del reComputer R1100 no incluye un módulo 4G integrado. Si se requiere funcionalidad 4G, se debe comprar por separado un módulo 4G adicional. Para más detalles, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/#optional-interfaces-and-modules).
:::

### Ranura SSD

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/SSD.PNG" style={{width:600, height:'auto'}}/></div>

El reComputer R1100 está equipado con una **ranura SSD NVMe M.2 2280**, que soporta capacidades de almacenamiento de **128GB, 256GB, 512GB y 1TB**. Esta ranura permite la expansión de almacenamiento de alta velocidad, permitiendo a los usuarios mejorar tanto el **rendimiento** como la **capacidad** de su sistema.  

**Nota:**  
Hay dos usos principales para las tarjetas SSD:  

1. **Almacenamiento de Alta Capacidad** – Los SSD pueden utilizarse para necesidades de almacenamiento grandes.  
2. **Unidad de Arranque con Imagen del Sistema** – Algunos SSD pueden utilizarse tanto como almacenamiento de alta capacidad como unidad de arranque para el sistema.  

Sin embargo, no todos los SSD soportan funcionalidad de arranque. Si planea usar un SSD como unidad de arranque y no está seguro de qué modelo comprar, recomendamos el **SSD de 1TB (SKU112990267)**, ya que ha sido probado y verificado para funcionalidad de arranque. Esto reduce los problemas de compatibilidad y minimiza los costos de prueba y error.

### Ranuras Mini-PCIe en reComputer R1100

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/pci.PNG" style={{width:600, height:'auto'}}/></div>

El reComputer R1100 está equipado con **dos ranuras Mini-PCIe**, que soportan varios protocolos de comunicación. La tabla a continuación describe los protocolos soportados para cada ranura:  

| **Ranura**       | **Protocolos Soportados**   |  
|---------------|--------------------------|  
| **Mini-PCIe 1** | 4G LTE, USB LoRa®, USB Zigbee |  
| **Mini-PCIe 2** | SPI LoRa®, USB LoRa®, USB Zigbee |

Estas ranuras permiten a los usuarios expandir las opciones de conectividad, habilitando la integración con módulos **4G LTE, LoRa®, y Zigbee** según sea necesario.

Este dispositivo incluye dos **interfaces Mini-PCIe**: **Ranura 1** y **Ranura 2**.  

- **La Ranura Mini-PCIe 1** está vinculada a la **ranura de tarjeta SIM** y soporta **protocolos USB**, haciéndola adecuada para conectar módulos **4G LTE, USB LoRa®, y USB Zigbee**.  
- **La Ranura Mini-PCIe 2** soporta **tanto protocolos USB como SPI** pero **no está conectada** a la ranura de tarjeta SIM. Puede acomodar dispositivos **SPI LoRa®, USB LoRa®, y USB Zigbee**.  

Estas ranuras proporcionan opciones de expansión flexibles para varios módulos de comunicación inalámbrica.

### Orificio de Reinicio  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/reset.PNG" style={{width:200, height:'auto'}}/></div>

El reComputer R1100 cuenta con un **Interruptor de Botón Pulsador Mini** ubicado dentro del orificio de reinicio. Al presionar este botón con un objeto delgado, los usuarios pueden **reiniciar el CM4**.  

- Cuando este pin está **alto**, indica que el **CM4 ha iniciado**.  
- Cuando este pin es **llevado a bajo**, **reinicia el módulo**.

### Ethernet RJ45  

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/eth.PNG" style={{width:200, height:'auto'}}/></div>

El **reComputer R1100** está equipado con dos puertos Ethernet:  

| Nombre | Tipo                         | Velocidades         | Soporte PoE               |
|--------|------------------------------|---------------------|---------------------------|
| ETH0   | Gigabit Ethernet Nativo CM4  | 10/100/1000 Mbit/s  | Soportado (con módulo adicional) |
| ETH1   | Convertido desde USB         | 10/100 Mbit/s       | No Soportado             |

El **reComputer R1100** está equipado con dos puertos Ethernet RJ45:

- **ETH0**: Una interfaz **Gigabit Ethernet nativa del CM4** que soporta velocidades de **10/100/1000 Mbit/s**. Puede actualizarse con un **módulo PoE** adicional para habilitar **Power over Ethernet (PoE)** para alimentar el dispositivo.
- **ETH1**: Una interfaz **Ethernet convertida por USB** que soporta velocidades de **10/100 Mbit/s**, pero **PoE no es compatible**.

**Nota**
Para más detalles sobre PoE, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/#poe-power-over-ethernet).

### HDMI

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/display.PNG" style={{width:200, height:'auto'}}/></div>

El reComputer R1100 cuenta con una interfaz HDMI nativa del CM4, soportando salida de video de hasta **4K@60fps**. Es ideal para aplicaciones que requieren múltiples pantallas, permitiendo a los usuarios mostrar contenido en pantallas externas grandes.

### RTC

El reComputer R1100 incluye un **circuito RTC (Reloj de Tiempo Real)** con una **batería CR2032** preinstalada, asegurando un cronometraje preciso incluso durante pérdidas de energía.

:::note
Para detalles sobre las pruebas de RTC, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/#rtc-real-time-clock-testing).
:::

### Watchdog

El reComputer R1100 cuenta con un **circuito watchdog de hardware independiente** que reinicia automáticamente el sistema en caso de un fallo. Este watchdog se implementa a través del **RTC** y permite **tiempos de alimentación flexibles que van de 1 a 255 segundos**.

:::note
Para detalles sobre las pruebas de watchdog, consulte [Esta Sección](https://wiki.seeedstudio.com/es/recomputer_r/#watchdog).
:::

## Interfaces y Módulos Opcionales

El reComputer R1100 soporta una **amplia gama de módulos de expansión y accesorios**, haciéndolo adaptable a varios casos de uso. Si está interesado en personalizar el reComputer R1100, contacte **odm@seeed.cc** para más información.

#### Lista de Accesorios y Módulos Opcionales

Aquí está la tabla formateada para mejor legibilidad:

| **Observación**                                     | **Artículo**               | **Nombre del Producto**                                      | **SKU**         |
|------------------------------------------------|------------------------|------------------------------------------------------|----------------|
| **Debe usarse junto para la función LoRa® WAN** | Módulo LoRa®           | Módulo Gateway LoRaWAN opcional por región (SPI) - US915 | 114992969      |
|                                                |                        | Módulo Gateway LoRaWAN opcional por región (SPI) - EU868 | 114993268      |
|                                                |                        | Módulo Gateway LoRaWAN opcional por región (USB) - US915 | 114992991      |
|                                                |                        | Módulo Gateway LoRaWAN opcional por región (USB) - EU868 | 114992628      |
| **Antena LoRa®**                              | Antena LoRa®          | Kit de Antena LoRa - 868-915MHz                        | 110061501      |
| **Módulo Zigbee**                              | Módulo Zigbee         | Módulo Zigbee USB Mini-PCIe                          | 110992005      |
| **Antena Zigbee**                             | Antena Zigbee        | Kit de Antena Zigbee para reComputer R1100             | 110061641      |
| **Este accesorio es requerido para la función Wi-Fi** | Antena Wi-Fi/BLE     | Kit de Antena Raspberry Pi Compute Module 4           | 114992364      |
| **Antena 4G con módulo 4G para función 4G, Antena GPS con módulo 4G para función GPS** | Módulo 4G | Módulo Mini-PCIe LTE Cat 4 EC25-AFXGA - América del Norte | 113991134      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-EUXGR - EMEA y Tailandia  | 113991135      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-AUXGR - Australia    | 113991174      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-EFA - Tailandia       | 113991214      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-EMGA - Malasia      | 113991234      |
|                                                |                        | Módulo Mini-PCIe LTE Cat 4 EC25-JFA - Japón          | 113991296      |
| **Antena 4G**                                 | Antena 4G            | Kit de Antena 4G para módulo 4G                        | 110061502      |
| **Antena GPS**                                | Antena GPS           | Kit de Antena GPS para Módulo 4G EC25                  | 110061521      |
| **Chip de Cifrado**                            | TPM 2.0               | Módulo TPM 2.0 con Infineon SLB9670                | 114993114      |
| **Almacenamiento SSD**                                | Tarjeta SSD              | SSD NVMe M.2 2280 1TB                               | 112990267      |
|                                                |                        | SSD Interno NVMe M.2 PCIe Gen3x4 2280 de 512GB        | 112990247      |
|                                                |                        | SSD Interno NVMe M.2 PCIe Gen3x4 2280 de 256GB        | 112990246      |
|                                                |                        | SSD Interno NVMe M.2 PCIe Gen3x4 2280 de 128GB        | 112990226      |
| **Este módulo necesita ser soldado en la placa portadora del reComputer R1100** | PoE | Kit de Módulo PoE MQ7813T120 para reTerminal DM | 110991925 |
| **UPS**                                        | UPS                   | Módulo UPS SuperCAP LTC3350                         | 110992004      |

La placa base del **reComputer R1100** tiene **dos ranuras Mini-PCIe** con la siguiente compatibilidad:

- **Ranura Mini-PCIe 1** soporta:
  - **Módulo 4G** (protocolo USB)
  - **Módulo LoRa®** (protocolo USB)
  - **Módulo Zigbee** (protocolo USB)

- **Ranura Mini-PCIe 2** soporta:
  - **Módulo LoRa®** (protocolo USB y SPI)
  - **Módulo Zigbee** (protocolo USB)

:::note
 **Los módulos 4G y LoRa® no se pueden usar al mismo tiempo.**
 **No puedes conectar dos módulos LoRa® en la placa.**

:::

Esto significa que necesitas elegir entre usar **4G o LoRa®**, y solo puedes tener **un** módulo LoRa® instalado a la vez.

### Wi-Fi/BLE

El **reComputer R1100-10** está alimentado por el **CM4** con una **versión Wi-Fi/BLE integrada**, proporcionando los mismos parámetros Wi-Fi/BLE que el CM4. Para especificaciones detalladas, consulta el **sitio web oficial de Raspberry Pi**.

### Módulo 4G

La placa base del **reComputer R1100** cuenta con **dos ranuras Mini-PCIe**, con la **Ranura Mini-PCIe 1** soportando un **módulo 4G a través del protocolo USB**. El **módulo 4G Quectel EC25** ha sido completamente probado para compatibilidad con el reComputer R1100.

:::note
Si requieres **funcionalidad 4G**, debes **comprar el módulo 4G correspondiente y una antena externa**, y seguir las instrucciones en [Ensamblar Módulo 4G/LoRa®/Zigbee y Antena](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna).
:::

### Módulo LoRa®

Ambas **ranuras Mini-PCIe** soportan **módulos LoRa® a través del protocolo USB**. Adicionalmente, la **Ranura Mini-PCIe 2** soporta un **módulo LoRa® usando el protocolo SPI**. El **módulo WM1302 de Seeed Studio** ha sido completamente probado para compatibilidad con el reComputer R1100.

:::note
Si requieres **funcionalidad LoRa®**, debes **comprar el módulo LoRa® correspondiente y una antena externa**, y seguir las instrucciones en [Ensamblar Módulo 4G/LoRa®/Zigbee y Antena](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna).
:::

### Módulo Zigbee

Las ranuras Mini-PCIe soportan **módulos Zigbee usando el protocolo USB**, permitiendo la integración perfecta de la funcionalidad Zigbee en dispositivos compatibles. Esto permite comunicación y control eficientes dentro de redes Zigbee, mejorando la versatilidad y conectividad del sistema. Con dos ranuras Mini-PCIe disponibles para módulos Zigbee, los usuarios tienen la flexibilidad de implementar aplicaciones diversas para mayor confiabilidad.

:::note
 Si requieres **funcionalidad Zigbee**, debes **comprar el módulo Zigbee correspondiente y una antena externa**, y seguir las instrucciones en [Ensamblar Módulo 4G/LoRa®/Zigbee y Antena](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-4glorazigbee-module-and-antenna).
:::

### PoE (Power over Ethernet)

El **reComputer R1100 soporta el estándar IEEE 802.3af PD (Powered Devices)** agregando un **módulo de fuente de alimentación PoE**. El **conector PoE está pre-soldado en la placa**, pero los usuarios deben **desensamblar el dispositivo para instalar el módulo PoE** para la funcionalidad PoE de Ethernet.

Para orientación sobre desensamblaje, consulta [Guía de Desensamblaje](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-ups-and-poe-module)

:::note

- El **reComputer R1100 soporta alimentación PoE, pero el producto estándar no incluye un módulo PoE por defecto.**
- **Seeed ofrece servicios de soldadura y ensamblaje PoE para pedidos de personalización por lotes.**
- Para pruebas de muestra, los clientes deben **soldar y ensamblar el módulo PoE ellos mismos**. Las instrucciones están disponibles en **"Ensamblar Módulo PoE"**.

:::

### SSD (Expansión de Almacenamiento)

El **reComputer R1100 soporta SSDs NVMe 2280** a través de una **ranura PCIe (J62) ubicada debajo de las dos ranuras Mini-PCIe en la placa**.

:::note

- La **interfaz PCIe del CM4 es Gen 2.0**, con una **velocidad teórica máxima de 5Gbps**.
- Si usas un **SSD Gen 3.0 o superior**, puede que no alcance su velocidad máxima.
- **Resultados de prueba del reTerminal DM muestran:**
  - **Velocidad máxima de escritura:** 230MB/s
  - **Velocidad máxima de lectura:** 370MB/s
- La compatibilidad de SSD puede variar, por lo que se **recomienda comprar SSDs de la lista de accesorios aprobados**.

:::

**Escenarios de Uso de SSD:**

- **Almacenamiento de Alta Capacidad** – Los SSDs pueden usarse para expandir el espacio de almacenamiento.
- **Unidad de Arranque con Imagen del Sistema** – Algunos SSDs pueden almacenar imágenes del sistema y **arrancar directamente desde el SSD**.

:::note
**¡No todos los SSDs soportan funcionalidad de arranque!**
Si necesitas un SSD para arranque y no estás seguro de cuál comprar, Seeed **recomienda el SSD de 1TB (SKU: 112990267)**, que ha sido **probado y verificado para funcionalidad de arranque**, minimizando riesgos de compatibilidad y costos de resolución de problemas.
:::

### Chip de Encriptación - TPM 2.0

El reComputer R1100 soporta el **OPTIGA™ TPM SLB9670 de Infineon**, que cumple con la especificación **Trusted Computing Group (TCG) TPM 2.0**.

**Características Clave:**

- **Chip de encriptación para seguridad**
- **Interfaz SPI** (conectada al **puerto J13** en la placa)
- **Proporciona una raíz de confianza** para:
  - **Integridad de plataforma**
  - **Atestación remota**
  - **Servicios criptográficos**

:::note
Para instrucciones de instalación, consulta [Ensamblar Módulo TPM 2.0](https://wiki.seeedstudio.com/es/recomputer_r1100_intro/recomputer_r1100_assembly_guide/#assembling-the-tpm-20-module)

:::

### Módulo UPS (Fuente de Alimentación Ininterrumpible)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/R1100/UPS.PNG" style={{width:600, height:'auto'}}/></div>

El **módulo UPS** en el reComputer R1100 es un sistema de respaldo de energía **basado en supercondensador 7F** que opera **en serie**.

**Cómo Funciona:**

1. Posicionado entre la **fuente de alimentación DC 5V** y el **CM4**.
2. Usa una **señal GPIO** para notificar a la **CPU** cuando la **fuente de alimentación de 5V falla**.
3. La CPU ejecuta un **script de emergencia** antes del agotamiento de energía.
4. El script ejecuta un comando **"$ shutdown"** para un apagado seguro del sistema.

**Duración de Respaldo:**  
El **tiempo de funcionamiento del UPS** depende de la **carga del sistema**. A continuación se muestran los resultados de las pruebas con:  

- **CM4 (4GB RAM, 32GB eMMC, módulo Wi-Fi).**  

## Recursos Adicionales

- [Archivo 3D del reComputer R1100](https://files.seeedstudio.com/R11/reComputer%20R1100_3D.stp)
- [Diseño Esquemático del reComputer R1100, Diseño PCB](https://files.seeedstudio.com/R11/reComputer%20R1100_schematic_design_files.zip)
- [Folleto del reComputer R1100](https://files.seeedstudio.com/wiki/reComputer-R1000/reComputer-R1100/reComputer-R1100-flyer.pdf)
- [Manual de Usuario](https://files.seeedstudio.com/R11/reComputer%20R1100%20User%20Manual-V1.0.pdf)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarle diferentes tipos de soporte para asegurar que su experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
