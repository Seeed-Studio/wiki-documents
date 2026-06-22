---
description: El diseño de referencia de Wio-LR2021
title: Guía de diseño de PCB de Wio-LR2021
keywords:
  - Wio-LR2021
  - LoRa
  - LR2021
  - Semtech
  - Sub-GHz
  - 2.4GHz
  - LoRaWAN
  - BLE 5.0
  - Transceptor
  - Wio
image: https://files.seeedstudio.com/wiki/Wio-LR2021/img/1-100058045-Seeed-Studio-Wio-LR2021-Wireless-module-masked.jpg
slug: /wio_lr2021_pcb_design_guide
sku: 100058045
sidebar_position: 2
last_update:
  date: 06/03/2026
  author: David Du
createdAt: '2026-06-03'
updatedAt: '2026-06-03'
url: https://wiki.seeedstudio.com/es/wio_lr2021_pcb_design_guide/
---

## 1. Capas

Para maximizar el espacio disponible para el diseño de PCB de RF, recomendamos utilizar un diseño de apilado de PCB con cuatro o más capas, especialmente en aplicaciones con un ruteo denso.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/4layer_2layer_PCB_stack.png" style={{width:900, height:'auto'}}/></div></td>

- Para PCBs de **4 capas**, la capa de cobre inmediatamente debajo del área de RF debe designarse como un plano de tierra. El plano de tierra debe estar completamente rellenado con cobre para garantizar la continuidad del plano de referencia.

- Para PCBs de **2 capas**, asegúrese de que el plano de tierra debajo de toda el área de RF permanezca intacto siempre que sea posible, y minimice cualquier corte o división en el plano de tierra bajo la pista y los componentes de RF para mantener la integridad de la trayectoria de retorno de corriente.

## 2. Diseño de una línea de transmisión de RF de 50Ω

Garantizar que la impedancia característica de la línea de transmisión de RF sea de 50Ω es la clave del diseño de layout de RF. Aquí utilizamos una estructura de **Guía de onda coplanar con tierra (GCPW)** para el diseño de la pista de RF.

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/microstrip_GCPW.png" style={{width:900, height:'auto'}}/></div></td>

<br />

Para lograr una impedancia característica de 50Ω para una línea de RF usando una estructura GCPW, se deben determinar los siguientes cinco parámetros clave:

|Symbol|Description|
|---|---|
|S|Espaciado entre la línea de señal y la línea de tierra adyacente|
|W|Ancho de la línea de señal|
|T|Espesor de cobre del conductor|
|H|Espesor de la capa dieléctrica (distancia desde la capa de señal al plano de tierra de referencia)|
|εr|Permitividad relativa del material dieléctrico|

:::note
1. El ancho de la línea de señal **W** debe permanecer constante a lo largo de toda la trayectoria de RF y no debe cambiar bruscamente.

2. **W** debe coincidir lo más posible con el ancho del pad del componente
Si las condiciones lo permiten, se recomienda diseñar **W** para que sea igual al ancho del pad de los componentes de RF utilizados, a fin de minimizar las discontinuidades de impedancia (aunque esto no siempre es factible).

3. Utilice software de cálculo gratuito para ayudar a determinar la impedancia de 50Ω
Se pueden utilizar herramientas gratuitas de cálculo de impedancia (como [**AppCAD**](http://www.hp.woodshot.com), [**Saturn PCB Toolkit**](https://saturnpcb.com/saturn-pcb-toolkit/) o la calculadora de impedancia en [**KiCad**](https://www.kicad.org/)) para optimizar los parámetros anteriores, garantizando que la impedancia característica de las líneas de RF en el diseño de la PCB coincida exactamente con 50Ω.
:::

Aquí utilizaremos como ejemplo un **sustrato FR4 estándar de 0.1mm de espesor** con **cobertura de cobre de 1oz** para calcular la GCPW (guía de onda coplanar con tierra) para una impedancia de 50Ω：

|Parameter|Value(mm)|Remark|
|---|---|---|
|S|0.199|Espaciado de la línea de señal|
|**W**|**0.190**|Ancho de la línea de señal de RF|
|T|0.035 (1oz)|Espesor de cobre|
|H|0.1|Espesor dieléctrico|

:::tip Why choose GCPW
1. **Menor diafonía y EMI** – En comparación con las microtiras convencionales o las guías de onda coplanares sin tierra, el plano de tierra a ambos lados y debajo de la línea de señal suprime eficazmente la diafonía entre pistas adyacentes o entre capas, reduciendo así la interferencia electromagnética (EMI). Esto hace que la GCPW sea especialmente adecuada para el ruteo de RF en PCBs de alta densidad y multicapa.

2. **Mejor confinamiento del campo electromagnético** – La estructura, en la que los planos de tierra se colocan adyacentes a la línea de señal, confina significativamente el campo electromagnético. Esto reduce la cantidad de energía de señal de alta frecuencia radiada al espacio circundante, ayudando a cumplir los requisitos de compatibilidad electromagnética (EMC).

3. **Mejor estabilidad y tolerancia de impedancia** – En una estructura GCPW, las trayectorias de retorno de la señal utilizan principalmente los planos de tierra a ambos lados en lugar de depender únicamente de la tierra de referencia inferior. Como resultado, la GCPW ofrece mayor tolerancia a las variaciones de fabricación en el espesor de la placa (H) y proporciona una impedancia de 50Ω más estable.
:::

## 3. Directrices de ruteo de RF

### 1. Restricciones geométricas

#### 1.1. Continuidad en una sola capa

**Capa superior en todo el recorrido** – Desde los pads de los pines de RF del módulo hasta el montaje de la antena, la red de adaptación o el punto de alimentación de la antena, la pista de RF debe rutearse completamente en una sola capa.

**Sin vías de cambio de capa** – El uso de vías para cambiar de capa está prohibido. Las vías introducen discontinuidades inductivas (típicamente 0.5–1.5nH), lo que puede causar saltos significativos de impedancia y degradar la pérdida de retorno.

:::note
Si un cambio de capa es inevitable (no recomendado y solo bajo restricciones extremas de espacio), se debe cumplir lo siguiente:

Coloque una matriz coplanar de vías de GND (al menos cuatro vías, distribuidas simétricamente alrededor de la vía de señal) en el punto de transición de capa.
:::

#### 1.2. Ancho de pista constante

El **ancho de la pista (W)** y las **separaciones (S)** a ambos lados deben permanecer constantes a lo largo de la sección de impedancia característica de 50 Ω, desde los pines de RF del módulo hasta el puerto de la antena.

#### 1.3. Minimizar la longitud de la pista

**Bandas Sub‑GHz (433/868/915 MHz):** Se recomienda que la longitud total de las pistas de RF sea ≤ 20 mm. Superar esta longitud provoca un aumento significativo de la pérdida de la línea de transmisión y de la radiación parasitaria.

**Banda de 2.4 GHz:** Recomendado ≤ `30 mm`. Si se supera, se debe reevaluar el presupuesto de pérdidas de la red de adaptación.

:::note
La longitud total incluye la pista desde la salida del pad del pin del módulo a través de la red de adaptación hasta el pin central del conector de antena, excluyendo el interior del conector de antena y el propio cuerpo de la antena.
:::

#### 1.4. Reglas de curvatura

- Los ángulos rectos de 90° están prohibidos.
- El radio de curvatura debe ser al menos **tres veces** el ancho de la pista (W), siendo ≥ 5W lo óptimo. Las curvas redondeadas proporcionan la transición de impedancia más suave en bandas de frecuencia por debajo de onda milimétrica.
- Dentro de una sola pista de RF, el número de curvas no debe ser superior a dos.

### 2. Puesta a tierra, apantallamiento y cosido con vías

#### 2.1. Espaciado de vías

A lo largo de ambos lados de la pista de RF, se utilizan vías de GND para cortocircuitar la GND coplanar de la capa superior con el plano de tierra interno, formando una pared de apantallamiento electromagnético. El espaciado de las vías (D) viene determinado por la longitud de onda:   **D ≤ λ / 20**

|Operating Band|Center Frequency|λ/20 (Theoretical Value)|Recommended Spacing|
|---|---|---|---|
|EU868|868 MHz|17.3 mm|≤5 mm|
|US915|915 MHz|16.4 mm|≤5 mm|
|AS923|923 MHz|16.3 mm|≤5 mm|
|2.4GHz|2400 MHz|6.25 mm|≤3 mm|

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/via_spacing.png" width="300" alt="appearance" />
</div>

<br />

:::note
El espaciado de vías utilizado en el diseño es significativamente menor que el valor teórico con el fin de suprimir los armónicos de orden superior y las fugas de campo en los bordes.
:::

#### 2.2. Disposición de las vías

- Se recomienda una **disposición escalonada de doble hilera** – Coloque una hilera de vías de GND a cada lado de la pista de RF. Las dos hileras deben estar escalonadas en lugar de directamente enfrentadas entre sí para bloquear de manera más efectiva el efecto de antena de ranura.

- Las vías deben colocarse adyacentes al borde de la pista de RF, con una distancia de ≤ `0.3 mm` (es decir, las vías deben situarse en el borde de la capa de cobre de GND).

- Diámetro de vía recomendado **(0.2–0.3mm)**, para evitar un corte excesivo de la capa de cobre de GND de la capa superior que puede resultar de vías demasiado grandes.

#### 2.3. Cosido en los bordes

Se deben colocar vías de cosido de GND densas a lo largo de los bordes de la PCB (especialmente aquellos que contienen regiones de RF) para evitar que los bordes de la placa actúen como trayectorias de radiación parasitaria.

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/staggered_arrangement.png" width="800" alt="appearance" />
</div>

<br />

### 3. Planos de referencia y restricciones de apilado

#### 3.1. Integridad del plano de GND subyacente

La capa inmediatamente debajo de la pista de RF (Capa 2 en una placa de 4 capas, o la capa inferior en una placa de 2 capas) debe ser un plano de GND completo y sin cortes.

#### 3.2. Requisitos de tierra coplanar

Se debe mantener cobre de GND coplanar en ambos lados de la pista de RF. Los bordes de GND deben ser rectos y continuos, sin bordes irregulares ni huecos.

El ancho de la GND coplanar (F) debe satisfacer: **F > W + G**, donde W es el ancho de la pista y G es la separación entre la pista y la GND. Si F es demasiado pequeño, la distribución del campo se desplazará hacia la capa inferior, provocando un cambio en la constante dieléctrica efectiva y una desviación de la impedancia de 50Ω.

#### 3.3. Aislamiento entre capas

En una placa de 4 capas, las islas de alimentación en la Capa 3 (la capa de alimentación) no deben colocarse directamente debajo de la pista de RF ni superponerse con la Capa 2. Si la Capa 3 debe pasar por debajo de la pista de RF, asegúrese de que cruce la pista de RF perpendicularmente (para minimizar la longitud de acoplamiento) y mantenga un aislamiento de tierra completo entre la Capa 2 y la Capa 3.

### 4. Componentes en derivación y redes de adaptación

#### 4.1. Disposición en línea

- Todos los componentes en derivación deben colocarse directamente en serie con la pista de RF. Esto significa que el lado largo del pad del componente se alinea con la dirección de la pista de RF, y el cuerpo del componente “se tumba” dentro de la trayectoria de RF.

- Se prohíben las derivaciones verticales que se extienden desde la pista de RF para conectarse a componentes en derivación. Las derivaciones verticales actúan como derivaciones en circuito abierto; a 868 MHz, incluso una derivación de 5 mm puede causar reflexiones significativas.

#### 4.2. Vías de tierra

- Los pads de tierra de los componentes en derivación deben conectarse a la Capa 2 mediante al menos `tres` vías de GND, colocadas lo más cerca posible del pad.

- Las vías deben situarse cerca del borde del pad y disponerse en un patrón triangular o lineal para garantizar la trayectoria de tierra más corta y simétrica.

- No taladre vías directamente en el centro del pad del componente. Las vías centrales obstruyen el flujo de la pasta de soldadura durante el refusión SMT, lo que conduce a uniones frías, y también aumentan la inductancia parasitaria.

<br />

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/matching_network.png" width="300" alt="appearance" />
</div>

<br />

#### 4.3. Orientación y separación de componentes

- Varios componentes en derivación dentro de la misma red de adaptación deben disponerse de forma secuencial a lo largo de la dirección de la pista RF para evitar el acoplamiento mutuo causado por la colocación lado a lado.

- El espaciado recomendado entre componentes en derivación adyacentes es ≥ 1,5× la longitud del componente (aproximadamente ≥ `1.0 mm` para encapsulados 0402).

### 5. Aislamiento y separación

#### 5.1. Aislamiento de señales digitales/de alimentación

- Separación en paralelo: la separación entre pistas RF y pistas digitales o de alimentación adyacentes debe ser al menos `three` veces el ancho de la pista (o ≥ 1 mm, lo que sea mayor).

- Límite de longitud en paralelo: si la separación es inferior a `3 mm`, la longitud de las pistas en paralelo debe ser ≤ `10 mm`. Si se supera esta longitud, se debe añadir una tira de aislamiento de GND (parche de cobre GND de ≥ 1 mm de ancho con vías de cosido).

- Cruces verticales: cuando las pistas RF crucen otras pistas de señal, se debe priorizar el cruce perpendicular. El GND de la Capa 2 debe permanecer continuo bajo el punto de cruce.

#### 5.2. Aislamiento de fuentes de interferencia de alta frecuencia

Las pistas RF y las áreas de antena deben mantenerse alejadas de:
- Líneas de reloj de alta velocidad (USB, SPI CLK, SDIO)
- Inductores buck de DC‑DC y nodos de conmutación (SW)
- Osciladores de cristal / TCXO (incluso si un TCXO está integrado en un módulo, otros osciladores de cristal en la placa aún deben mantenerse a distancia)

Distancias mínimas recomendadas:
- Desde inductores DC‑DC: ≥ 20 mm
- Desde líneas diferenciales USB: ≥ 10 mm
- Desde osciladores de cristal de 32 MHz: ≥ 15 mm

## 4. Diseño de referencia

<td><div style={{textAlign:'right'}}><img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/Reference-Design-2.png" style={{width:900, height:'auto'}}/></div></td>

<br />

:::note
1. Coloca `C1 (10uF)` y `C2 (100nF)` lo más cerca posible del pin `VCC_IN`. Una mala colocación degradará el rendimiento RF y puede causar emisiones espurias.

2. Instala resistencias en serie de `470Ω` en todas las **líneas SPI** (NSS, SCK, MOSI, MISO) colocadas lo más cerca posible del módulo para la supresión de armónicos de alta frecuencia. El módulo no admite el modo de trama continua: NSS debe conmutarse entre comandos con un tiempo mínimo en nivel ALTO de 125 ns.
:::

### Interfaz RF (SubG_RF / 2.4G_RF)
El módulo proporciona dos pines de salida RF independientes, uno para la banda **Sub‑GHz** y otro para la banda de **2.4 GHz**. Se ha implementado internamente adaptación de impedancia de **50Ω** para ambas rutas RF. Recomendamos utilizar conectores estándar `IPEX1` o `SMA` como interfaces de antena.


<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/IPEX1_connector.png" width="300" alt="appearance" />
</div>

<div style={{ textAlign: 'center', margin: '20px 0' }}>
  <img src="https://files.seeedstudio.com/wiki/Wio-LR2021/img/SMA_connector.png" width="300" alt="appearance" />
</div>

<br />


## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a distintas preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
