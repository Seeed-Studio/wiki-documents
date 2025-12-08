---
description: Uso de NFC para XIAO nRF52840 (Sense)
title: Uso de NFC para ambas versiones
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/XIAO-BLE-Sense-NFC-Usage
last_update:
  date: 05/31/2023
  author: Matthew
---

# Uso de NFC en Seeed Studio XIAO nRF52840 (Sense)

<!-- :::note
La función NFC para la placa Seeed Studio XIAO nRF52840 no está funcionando temporalmente. El nuevo wiki se actualizará tan pronto como sea posible, una vez que salga la nueva biblioteca NFC.
::: -->

:::note
Las versiones Seeed nRF52 Boards 1.1.3 y Seeed nRF52 mbed-enabled Boards 2.9.2 han sido probadas y aprobadas.
:::

Tanto el **Seeed Studio XIAO nRF52840** como el **Seeed Studio XIAO nRF52840 Sense** están equipados con un **módulo NFC (Near Field Communication)**. Este wiki te ayudará a comenzar a usar NFC en estas placas. Aquí demostraremos un ejemplo básico donde enviamos una cadena de texto desde la placa al teléfono después de colocar el teléfono sobre la antena NFC.

## Trabajo preparatorio

> La función NFC funcionará bien cuando usemos la "Biblioteca Seeed nRF52 mbed-enabled Boards".

Para la instalación de las bibliotecas de la placa, consulta [este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#software-setup) para completar la instalación. Si ya las has instalado, podemos continuar y procesar el proyecto.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png" /></div>


## Hardware requerido

- 1 x [Seeed Studio XIAO nRF52840](https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html) o [Seeed Studio XIAO nRF52840 Sense](https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html)
- 1 x Antena NFC
- 1 x Cable USB Type-C
- 1 x Smartphone

## Software requerido

- [NFC TagInfo App (Android)](https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US)
- [NFC TagInfo App (Apple)](https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596)

## Conexión de hardware y descripción general

Solda la antena NFC al Seeed Studio XIAO nRF52840 (Sense) de la siguiente manera:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3(1).png" alt="pir" width={550} height="auto" /></p>

- **Naturaleza**: Puertos diferenciales de 13.56 MHz impulsados por corriente del nRF52840 (NFC1 = P0.09, NFC2 = P0.10); deben usarse como par.
- **Diferencia**: Solo fase opuesta; sin función separada. Es posible intercambiar pero invierte el UID.
- **Precaución**: Pines desnudos, sin ESD/TVS. Usa una pulsera antiestática antes de soldar, ambos pads son obligatorios, nunca usar como GPIO.

## Enviar cadena de texto con NFC

- **Paso 1.** Abre Arduino IDE y sube los siguientes códigos

```cpp
#include <NFCT.h>

void setup() { 
  // set the NFC message as first parameter and the language code as second
  NFC.setTXTmessage("Hello World!", "en");
  // start the NFC module
  NFC.start();
}

void loop() {
}

```

Aquí simplemente enviamos la cadena de texto "Hello World!"

- **Paso 2.** Abre la aplicación móvil "NFC TagInfo" y haz clic en **Scan & Launch**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg" alt="pir" width={300} height="auto" /></p>


- **Paso 3.** Coloca la antena NFC cerca del teléfono y verás la siguiente salida

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png" alt="pir" width={850} height="auto" /></p>

## Sintonización de antena


  Todas las operaciones descritas a continuación se basan en la lógica central de este documento.**[Diseño de Antena NFC Oficial de Nordic](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**
 - La portadora NFC está fija en 13.56 MHz; el chip entrega potencia completa solo cuando ve una **carga diferencial de 100 Ω en resonancia**.

- Sintonización = usar dos capacitores para lograr **resonancia y transformación de impedancia** simultáneamente, para que la bobina aparezca **exactamente 100 Ω**.

**1.Tres números "Que nunca cambian"**

| Elemento | Valor fijo | Fuente |
|---|---|---|
| Frecuencia de operación f | 13.56 MHz | Estándar NFC global, codificado en nRF52840 |
| Carga que el chip quiere ver | 100 Ω (diferencial) | Documento técnico Nordic nWP_026 |

**2.Dos cantidades a medir**

   **Inductancia de la bobina L** – medir con DMM / medidor LCR / VNA a 100 kHz, valor en µH.

   **Resistencia de pérdida de la bobina R** – leer la resistencia en serie de la misma pantalla, en Ω (cable más grueso y área más grande → R más baja).

**3  Pre-verificación: ¿Está bien el tamaño de la bobina?**
Usando la fórmula de transformación de impedancia:


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="pir" width={250} height="auto" /></p>

Objetivo: 90–120 Ω, cuanto más cerca de 100 Ω mejor.

| Resultado | Significado | Siguiente paso |
|---|---|---|
| < 60 Ω | Antena "demasiado pequeña" | Agregar vueltas o ampliar área |
| 90 – 120 Ω | **APROBADO** | Ir al Paso 4 |
| > 150 Ω | Antena "demasiado grande" | Quitar vueltas o reducir área |

> Solo después de pasar esta puerta calculas los capacitores; de lo contrario cualquier valor de capacitor es inútil.

**4  Calcular capacitancia resonante C**

Fórmula con 13.56 MHz fijo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="pir" width={250} height="auto" /></p>


→ Da **capacitancia total**; para red π dividir igualmente:

**C1 = C2 = C / 2**  
Elige el valor E12 más cercano (39 pF, 47 pF, 56 pF, 68 pF …).

