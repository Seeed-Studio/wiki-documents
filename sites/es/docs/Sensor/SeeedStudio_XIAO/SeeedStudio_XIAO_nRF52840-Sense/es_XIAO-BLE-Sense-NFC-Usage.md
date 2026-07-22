---
description: Uso de NFC para XIAO nRF52840 (Sense) con la biblioteca XIAO_nRF52840_NFC.
title: Uso de NFC para ambas versiones
keywords:
  - xiao
  - nRF52840
  - NFC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /XIAO-BLE-Sense-NFC-Usage
sku: 102010448, 102010469
last_update:
  date: 07/16/2026
  author: Morgan
createdAt: '2026-05-25'
url: https://wiki.seeedstudio.com/es/XIAO-BLE-Sense-NFC-Usage/
updatedAt: '2026-07-17'
---

# Uso de NFC en Seeed Studio XIAO nRF52840 (Sense)

Ambas **series Seeed Studio XIAO nRF52840** están equipadas con un **módulo NFC (Near Field Communication)** basado en el periférico NFCT (Near Field Communication Tag) integrado del nRF52840. Es compatible con la funcionalidad de etiqueta NFC Tipo 2. Al conectar una antena NFC externa, el XIAO nRF52840 puede actuar como una etiqueta NFC y ser leído por teléfonos inteligentes y otros lectores NFC.

Este wiki te guía a través de todo el flujo de trabajo de uso de NFC: desde la instalación de la biblioteca, la conexión de hardware y el ajuste de la antena, hasta la verificación de la configuración y la creación de tu propia etiqueta NFC.

:::note
Este tutorial se basa en la biblioteca **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)**. La versión **1.1.13** de Seeed nRF52 Boards ha sido probada y aprobada.
:::

## Trabajo preparatorio

Para la instalación de las bibliotecas de placas, consulta **[este tutorial](https://wiki.seeedstudio.com/es/XIAO_BLE/#configuración-de-software)** para terminar de instalar las Seeed nRF52 Boards. Si ya las has instalado, podemos continuar.

<div align="center"><img width={900} src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-selecting-board-NRF52840-for-nfc.png" /></div>

:::note
Asegúrate de seleccionar la placa **Seeed XIAO nRF52840** en el Boards Manager. La biblioteca antigua "Seeed nRF52 mbed-enabled Boards" **ya no se mantiene** y no debe utilizarse.
:::

## Hardware necesario

<div class="table-center">
  <table align="center">
    <tr>
        <th>Seeed Studio XIAO nRF52840</th>
        <th>Seeed Studio XIAO nRF52840 Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/nrf52840_front.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840plus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Plus-p-6359.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
    <tr>
        <th>Seeed Studio XIAO nRF52840 Sense</th>
        <th>Seeed Studio XIAO nRF52840 Sense Plus</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840sence.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/xiaonrf52840senceplus.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
    <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-Studio-XIAO-nRF52840-Sense-Plus-p-6360.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Consigue uno ahora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

:::tip
La funcionalidad NFC básica funciona solo con la antena soldada a NFC1/NFC2. Después de las pruebas de la comunidad (agradecimientos especiales a **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** del foro de Seeed), ambas antenas siguientes funcionaron inmediatamente después de soldarlas, sin necesidad de un ajuste adicional del circuito:

- **MOLEX 1462360051**
- **TAOGLAS FXR.07.A.DG**

Más tarde, añadimos dos condensadores de **43 pF** de sintonía desde cada pad NFC (D14, D15) a GND para la TAOGLAS FXR.07.A.DG para mejorar aún más la distancia de interrogación. El valor del condensador de ~40 pF se calculó a partir del subapartado **"6.14.10 NFCT antenna recommendations"** en la hoja de datos de especificaciones del producto del MCU nRF52840.

Si experimentas un comportamiento inestable (ventanas emergentes incompletas, detección intermitente), añadir condensadores de adaptación mejorará significativamente la fiabilidad. Consulta [Antenna Tuning](#sintonización-de-antena) para más detalles.

Para obtener más información de pruebas en el mundo real, consulta el [debate original en el foro](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696).
:::

## Software necesario

<div class="table-center">
  <table align="center">
    <tr>
        <th>Elemento</th>
        <th>Versión / Notas</th>
    </tr>
    <tr>
        <td>Arduino IDE</td>
        <td>1.8.x o posterior</td>
    </tr>
    <tr>
        <td>Seeed nRF52 Boards</td>
        <td><strong>1.1.13</strong> (instalar mediante Arduino IDE Boards Manager)</td>
    </tr>
    <tr>
        <td><a href="https://github.com/limengdu/XIAO_nRF52840_NFC">XIAO_nRF52840_NFC</a> Library</td>
        <td>Descargar desde <a href="https://github.com/limengdu/XIAO_nRF52840_NFC">GitHub</a>, instalar mediante <strong>Sketch &gt; Include Library &gt; Add .ZIP Library</strong> (ver abajo)</td>
    </tr>
    <tr>
        <td>App NFC Tools</td>
        <td><a href="https://play.google.com/store/apps/details?id=com.wakdev.wdnfc">Android</a> / <a href="https://apps.apple.com/us/app/nfc-tools/id1252962749">Apple</a></td>
    </tr>
  </table>
</div>

### Instalación de la biblioteca XIAO_nRF52840_NFC

Esta biblioteca **no** está incluida en el Arduino Library Manager: debes instalarla manualmente desde GitHub.

- **Paso 1.** Ve al repositorio de GitHub **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)**, haz clic en el botón verde **Code** y selecciona **Download ZIP**.

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/limengdu/XIAO_nRF52840_NFC" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Descargar la biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

<!-- TODO: Screenshot of GitHub Download ZIP button -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-download-zip.png" style={{width:800, height:'auto'}}/></div>

- **Paso 2.** Abre Arduino IDE, ve a **Sketch > Include Library > Add .ZIP Library...**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-installed.png" style={{width:800, height:'auto'}}/></div>

- **Paso 3.** Selecciona el archivo ZIP descargado (`XIAO_nRF52840_NFC-main.zip`). Deberías ver **"Library added to your libraries"** en la barra de estado.

- **Paso 4.** Reinicia Arduino IDE. Después de reiniciar, deberías ver los ejemplos en **File > Examples > XIAO_nRF52840_NFC**.

<!-- TODO: Screenshot of examples menu showing XIAO_nRF52840_NFC -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-lib-examples.png" style={{width:1000, height:'auto'}}/></div>

## Conexión de hardware

Los pines NFC del XIAO nRF52840 se encuentran en la parte posterior de la placa, etiquetados como **P0.09** y **P0.10**:

```
D14 (P0.09) — NFC1 — Antenna end A
D15 (P0.10) — NFC2 — Antenna end B
```

Suelda la antena NFC a P0.09 y P0.10 como se muestra a continuación:

En este tutorial, utilizamos el **Seeed Studio XIAO nRF52840** con una antena NFC recomendada por Nordic para la demostración.

**Vista frontal:**

<!-- TODO: Photo of antenna soldered to XIAO (front) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-F.jpg" alt="Antenna soldered to XIAO front view" width={550} height="auto" /></p>

**Vista trasera:**

<!-- TODO: Photo of antenna soldered to XIAO (back) -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-board-with-A-B.jpg" alt="Antenna soldered to XIAO back view" width={550} height="auto" /></p>

:::caution

- La antena NFC es una señal diferencial y **no tiene polaridad**: cualquiera de los extremos puede ir a D14 o D15.
- Los dos pines se envían de fábrica en modo de antena NFC (UICR = `0xFFFFFFFF`) en **XIAO nRF52840** y **XIAO nRF52840 Sense**. En **XIAO nRF52840 Plus** y **XIAO nRF52840 Sense Plus**, pueden estar configurados como GPIO por defecto: comprueba primero el UICR (consulta el [Paso 1](#paso-1-comprobar-la-configuración-de-pines-uicr)).
- Se recomienda medir la resistencia en CC a través de los terminales de la antena con un multímetro antes de soldar (normalmente 1–3 Ω) para confirmar la continuidad y descartar cortocircuitos.

:::

### Sintonización de antena

NFC se basa en un circuito resonante de tanque LC. La bobina de la antena proporciona la inductancia (L) y los condensadores de adaptación proporcionan la capacitancia (C). Juntos forman un circuito resonante a la frecuencia objetivo:

```
f = 1 / (2π√(LC))
```

El objetivo es **13.56 MHz**. Sin condensadores externos, solo participa la capacitancia parasitaria interna de ~4 pF del nRF52840: el punto de resonancia queda muy lejos de 13.56 MHz. La función NFC seguirá funcionando, pero la comunicación puede ser inestable: en el teléfono pueden aparecer ventanas emergentes con el mensaje "NFC tag detected" sin mostrar todo el contenido, y pueden aparecer códigos de error en la salida serie. Al añadir condensadores de adaptación, el circuito tanque LC entra en resonancia y la fiabilidad mejora drásticamente.

:::tip
Todas las operaciones siguientes se basan en el documento **[Nordic Official NFC Antenna Design](https://docs.nordicsemi.com/bundle/nwp_026/page/WP/nwp_026/nWP_026_intro.html)**. El chip entrega toda la potencia solo cuando ve una **carga diferencial de 100 Ω en resonancia**.
:::

#### Parámetros fijos

<div class="table-center">
  <table align="center">
    <tr>
        <th>Elemento</th>
        <th>Valor fijo</th>
        <th>Fuente</th>
    </tr>
    <tr>
        <td>Frecuencia de funcionamiento f</td>
        <td>13.56 MHz</td>
        <td>Estándar NFC global, codificado por hardware en el nRF52840</td>
    </tr>
    <tr>
        <td>Impedancia de carga</td>
        <td>100 Ω (diferencial)</td>
        <td>White paper de Nordic nWP_026</td>
    </tr>
  </table>
</div>

#### Medidas necesarias

- **Inductancia de la bobina L**: mídela con un multímetro, medidor LCR o VNA a 100 kHz, valor en µH.
- **Resistencia de pérdidas de la bobina R**: lee la resistencia serie en la misma pantalla, en Ω.

#### Paso 1: Comprobación previa de impedancia

Usando la fórmula de transformación de impedancia:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC1.png" alt="Impedance formula" width={250} height="auto" /></p>

Objetivo: **90–120 Ω**, cuanto más cerca de 100 Ω, mejor.

<div class="table-center">
  <table align="center">
    <tr>
        <th>Resultado</th>
        <th>Significado</th>
        <th>Siguiente paso</th>
    </tr>
    <tr>
        <td>&lt; 60 Ω</td>
        <td>Antena demasiado pequeña</td>
        <td>Añade espiras o agranda el área de la bobina</td>
    </tr>
    <tr>
        <td>90 – 120 Ω</td>
        <td><strong>APTO</strong></td>
        <td>Ve al Paso 2</td>
    </tr>
    <tr>
        <td>&gt; 150 Ω</td>
        <td>Antena demasiado grande</td>
        <td>Quita espiras o reduce el área de la bobina</td>
    </tr>
  </table>
</div>

> Solo después de pasar esta puerta se calculan los condensadores; de lo contrario, cualquier valor de condensador es inútil.

#### Paso 2: Calcular la capacitancia de resonancia

Fórmula con 13.56 MHz fijo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NFC2.png" alt="Capacitance formula" width={250} height="auto" /></p>

Esto da la **capacitancia total** necesaria. Para una red en π, divídela en partes iguales:

**C1 = C2 = C / 2**

Elige el valor E12 más cercano (por ejemplo, 39 pF, 47 pF, 56 pF, 68 pF …).

#### Antena recomendada

Si no tienes un medidor LCR y prefieres un punto de partida conocido, una antena de bobina NFC estándar de 13.56 MHz funciona bien con la XIAO nRF52840. A continuación se muestra la antena que usamos durante las pruebas:

<!-- Antenna photo: see Hardware Connection section (NRF52840NFC-final-output-successfully.jpg) -->

<div class="table-center">
  <table align="center">
    <tr>
        <th>Parámetro</th>
        <th>Valor</th>
    </tr>
    <tr>
        <td>Tipo</td>
        <td>Bobina NFC de 13.56 MHz</td>
    </tr>
    <tr>
        <td>Resistencia en CC</td>
        <td>~2.3 Ω</td>
    </tr>
    <tr>
        <td>Conexión</td>
        <td>Suelda directamente a NFC1 / NFC2</td>
    </tr>
  </table>
</div>

:::note
La antena mostrada arriba no es un producto de Seeed Studio. Puedes usar cualquier antena de bobina NFC de 13.56 MHz con especificaciones similares. Lo clave es medir la inductancia y calcular el valor del condensador de adaptación usando las fórmulas anteriores.
:::

## Configuración NFC y ejemplos

El siguiente flujo de trabajo primero verifica la configuración de hardware NFC y luego te guía para crear tu propia etiqueta NFC. Usamos la biblioteca **[XIAO_nRF52840_NFC](https://github.com/limengdu/XIAO_nRF52840_NFC)**, que envuelve el periférico NFCT del nRF52840 en una API de Arduino limpia.

La biblioteca incluye seis ejemplos de sketches:

<div class="table-center">
  <table align="center">
    <tr>
        <th>Categoría</th>
        <th>Ejemplo de sketch</th>
        <th>Propósito</th>
    </tr>
    <tr>
        <td rowspan="2"><strong>Verificación</strong></td>
        <td><code>xiao-nrf52840-nfc-probe</code></td>
        <td>Comprobar la configuración de pines UICR + verificar el enlace RF</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-restore-uicr</code></td>
        <td>Restaurar los pines NFC si se cambiaron a GPIO</td>
    </tr>
    <tr>
        <td rowspan="1"><strong>Corrección Plus</strong></td>
        <td><code>xiao-nrf52840-plus-bootloader-verify</code></td>
        <td>Verificar el bootloader en variantes Plus antes de restaurar el UICR</td>
    </tr>
    <tr>
        <td rowspan="3"><strong>Demostración</strong></td>
        <td><code>xiao-nrf52840-nfc-tag-readonly</code></td>
        <td>Etiqueta de solo lectura: el teléfono lee una URL fija</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-writable</code></td>
        <td>Etiqueta grabable: el teléfono puede escribir datos en la etiqueta</td>
    </tr>
    <tr>
        <td><code>xiao-nrf52840-nfc-tag-persistent</code></td>
        <td>Etiqueta persistente: los datos sobreviven a los ciclos de alimentación (almacenados en Flash)</td>
    </tr>
  </table>
</div>

### Paso 1: Comprobar la configuración de pines UICR

**Propósito**: Confirmar que P0.09/P0.10 están configurados como pines de antena NFC.

Abre **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-probe** y súbelo a tu placa. (Los pasos 1 y 2 comparten el mismo sketch: una sola carga hace ambos.)

Abre el Monitor Serie a **115200 baudios**. Las primeras líneas muestran el estado actual del UICR:

<!-- TODO: Screenshot of Serial Monitor showing UICR check PASS -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result.png" style={{width:1000, height:'auto'}}/></div>

**Cómo interpretar la salida:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Valor UICR</th>
        <th>Significado</th>
        <th>Acción</th>
    </tr>
    <tr>
        <td><code>0xFFFFFFFF</code></td>
        <td>Modo de antena NFC ✅</td>
        <td>Continúa con el Paso 2</td>
    </tr>
    <tr>
        <td><code>0xFFFFFFFE</code></td>
        <td>Modo GPIO ❌</td>
        <td>Primero sube <code>xiao-nrf52840-plus-bootloader-verify</code> (variantes Plus), luego sube <code>xiao-nrf52840-nfc-restore-uicr</code>, envía <code>RESTORE_NFC</code> en el Monitor Serie, confirma <code>Verify result: PASS</code> y después apaga y vuelve a encender la placa</td>
    </tr>
  </table>
</div>

:::note
**XIAO nRF52840** y **XIAO nRF52840 Sense** salen de fábrica con UICR = `0xFFFFFFFF` (modo NFC). En la mayoría de los casos, este paso se supera y no se necesita ninguna acción. **XIAO nRF52840 Plus** y **XIAO nRF52840 Sense Plus** pueden salir en modo GPIO; si la salida muestra `0xFFFFFFFE`, sigue la acción de restauración que se indica a continuación.
:::

### Paso 2: Sonda — Verificar el enlace RF

**Propósito**: Confirmar que las tramas de comandos NFC del teléfono pueden llegar a la placa.

Después de la comprobación del UICR, el mismo sketch entra automáticamente en **modo Probe**. En este modo, la etiqueta **no** responde a ninguna trama: solo escucha. Esto aísla la dirección de recepción y facilita confirmar si el enlace RF está activo.

Coloca la zona NFC de tu teléfono cerca de la antena durante unos segundos y luego comprueba la salida del Monitor Serie:

<!-- TODO: Screenshot of Serial Monitor showing Probe results with phone -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-probe-result-with-phone.png" style={{width:800, height:'auto'}}/></div>

**Indicadores clave:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Contador</th>
        <th>Significado</th>
        <th>Criterio de aprobación</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Campo RF de 13.56 MHz del teléfono detectado</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FIELD_LOST</code></td>
        <td>Campo RF desaparecido</td>
        <td>Cercano a FIELD_DETECT</td>
    </tr>
    <tr>
        <td><code>READER_FRAMES</code></td>
        <td>Tramas de comandos NFC recibidas desde el teléfono</td>
        <td><strong>&gt; 0</strong> (crítico)</td>
    </tr>
  </table>
</div>

> `READER_FRAMES > 0` significa que las tramas de comandos del teléfono llegaron correctamente a la placa y que el enlace RF bidireccional está establecido. El teléfono **no** debería mostrar una ventana emergente en esta etapa (el modo Probe no responde).

**Códigos de error comunes:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Código de error</th>
        <th>Nombre</th>
        <th>Significado</th>
    </tr>
    <tr>
        <td><code>0x01</code></td>
        <td><code>FRAMEDELAYTIMEOUT</code></td>
        <td>Tiempo de espera de trama agotado: la etiqueta no recibió el siguiente comando dentro del intervalo esperado</td>
    </tr>
    <tr>
        <td><code>0x02</code></td>
        <td><code>NFCANTENNAERROR</code></td>
        <td>NFCT no puede excitar la antena: normalmente causado por desajuste de impedancia o ausencia de antena</td>
    </tr>
    <tr>
        <td><code>0x80</code></td>
        <td>Error de recepción de trama RX</td>
        <td>Trama recibida pero la comprobación CRC/paridad falló (puede aparecer en la etapa Readonly)</td>
    </tr>
  </table>
</div>

## Demostración 1: Etiqueta de solo lectura

**Propósito**: Una etiqueta NFC sencilla que emite una URL fija. El teléfono la lee y muestra una ventana emergente: el caso de uso NFC más común.

Abre **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-readonly** y súbelo. Coloca tu teléfono sobre la antena durante 2–3 segundos.

<!-- TODO: Screenshot of Serial Monitor showing Readonly results -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-readonly-output.png" style={{width:1000, height:'auto'}}/></div>

El teléfono debería mostrar una ventana emergente que contenga el enlace `https://seeedstudio.com`.

<!-- TODO: Photo of antenna soldered to XIAO + phone showing NFC pop-up -->
 <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-final-output-successfully.png" alt="Antena soldada y ventana emergente NFC del teléfono" width={300} height="auto" /></p>

**Indicadores clave:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Contador</th>
        <th>Significado</th>
        <th>Criterio de aprobación</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Campo RF de 13.56 MHz del teléfono detectado</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>El teléfono completó el flujo de anticolisión + apretón de manos SELECT</td>
        <td><strong>&gt; 0</strong> (indicador principal)</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>El teléfono leyó correctamente las páginas de datos NDEF</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>Número de solicitudes FAST_READ recibidas</td>
        <td>0 o pequeño (normal)</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>El teléfono envió un comando no compatible</td>
        <td>Unos pocos es normal</td>
    </tr>
  </table>
</div>

> `SELECTED > 0` es el umbral clave: el flujo de anticolisión se completó y el teléfono reconoció la etiqueta Tipo 2. `READ > 0` significa que las páginas NDEF se leyeron realmente. La verificación final es que el teléfono muestre la ventana emergente con la URL completa.
:::note
La URL está codificada de forma fija en el sketch. Para cambiarla, abre el sketch y modifica el mensaje NDEF, luego vuelve a subirlo. Los datos de la etiqueta se almacenan en la RAM y se perderán después de un ciclo de alimentación.
:::

## Demo 2: Etiqueta grabable

**Propósito**: Una etiqueta NFC que el teléfono puede tanto leer como escribir. La etiqueta comienza con un URI predeterminado (`https://seeedstudio.com`), y el teléfono puede sobrescribirlo con nuevo contenido NDEF usando la app **NFC Tools**.

Abre **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-writable** y súbelo.

**Pasos de prueba:**

- **Paso 1.** Abre el Monitor Serie a **115200 baudios**. El registro de arranque muestra la identidad de la etiqueta (NFCID1), el volcado de memoria inicial y el URI predeterminado (`https://seeedstudio.com`).

<!-- TODO: Screenshot of Serial Monitor showing Writable boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log.png" style={{width:1000, height:'auto'}}/></div>

El registro de arranque también imprime el URI predeterminado que la etiqueta emitirá:

<!-- TODO: Screenshot of Serial Monitor showing default URI in boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-boot-log-of-URI.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 2.** Lee primero la etiqueta con tu teléfono. El teléfono debería detectar `https://seeedstudio.com`.

- **Paso 3.** Abre **NFC Tools** (o cualquier app de escritura NFC) y escribe en la etiqueta el contenido que quieras. En este ejemplo, escribimos un texto sencillo: `hello!`. Después de introducir tu contenido, haz clic en **"Write / XX Bytes"** — el número de bytes depende de la longitud de tu contenido.

<!-- TODO: Screenshot of NFC Tools write screen -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-writable-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **Paso 4.** Vuelve a leer la etiqueta. El teléfono ahora debería mostrar el contenido recién escrito (`hello!`).

<!-- TODO: Screenshot of phone showing written content -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-final-output.png" style={{width:300, height:'auto'}}/></div>

Después de que el teléfono salga del campo NFC, el Monitor Serie muestra los indicadores clave actualizados que reflejan la sesión completa de lectura después de escritura:

<!-- TODO: Screenshot of Serial Monitor showing key indicators after reading written tag -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-writable-result-with-phone.png" style={{width:1000, height:'auto'}}/></div>

**Indicadores clave:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Contador</th>
        <th>Significado</th>
        <th>Criterio de aprobación</th>
    </tr>
    <tr>
        <td><code>FIELD_DETECT</code></td>
        <td>Campo RF de 13.56 MHz del teléfono detectado</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>SELECTED</code></td>
        <td>El teléfono completó el flujo de anticolisión + apretón de manos SELECT</td>
        <td><strong>&gt; 0</strong> (indicador principal)</td>
    </tr>
    <tr>
        <td><code>READ</code></td>
        <td>El teléfono leyó correctamente las páginas de datos NDEF</td>
        <td>&gt; 0</td>
    </tr>
    <tr>
        <td><code>WRITE</code></td>
        <td>El teléfono escribió correctamente datos en la etiqueta</td>
        <td><strong>&gt; 0</strong> (indicador principal)</td>
    </tr>
    <tr>
        <td><code>FAST_READ</code></td>
        <td>Número de solicitudes FAST_READ recibidas</td>
        <td>0 o pequeño (normal)</td>
    </tr>
    <tr>
        <td><code>WRITE_REJECTED</code></td>
        <td>Intentos de escritura rechazados (páginas protegidas)</td>
        <td>0 (nunca debería ocurrir con apps estándar)</td>
    </tr>
    <tr>
        <td><code>UNSUPPORTED</code></td>
        <td>El teléfono envió un comando no compatible</td>
        <td>Unos pocos es normal</td>
    </tr>
  </table>
</div>

> `WRITE > 0` es el umbral clave para la etiqueta grabable: el teléfono escribió correctamente datos en la etiqueta. `WRITE_REJECTED` siempre debería ser `0` — si aumenta, algo salió mal durante la sesión de escritura.

:::note
Los datos escritos se almacenan solo en **RAM** y se perderán después de un ciclo de alimentación, restaurando el URI predeterminado — lo que facilita realizar pruebas de escritura repetidas. Para datos que necesiten sobrevivir a ciclos de alimentación, usa la demo de **Etiqueta persistente** de abajo.
:::

## Demo 3: Etiqueta persistente

**Propósito**: Una etiqueta NFC cuyos datos sobreviven a los ciclos de alimentación. El contenido NDEF se almacena en la memoria Flash interna del nRF52840 (LittleFS), por lo que persiste incluso después de apagar y encender de nuevo la placa — ideal para despliegues a largo plazo.

Abre **File > Examples > XIAO_nRF52840_NFC > xiao-nrf52840-nfc-tag-persistent** y súbelo.

**Pasos de prueba:**

- **Paso 1.** En el primer arranque, abre el Monitor Serie a **115200 baudios**. El registro de arranque muestra el URI predeterminado y `Storage state: no stored content, using default URI`.

<!-- TODO: Screenshot of Serial Monitor showing Persistent first boot log -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-first.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 2.** Lee la etiqueta con tu teléfono. En el primer arranque, el teléfono detecta `https://seeedstudio.com`.

- **Paso 3.** Abre **NFC Tools** (o cualquier app de escritura NFC) y escribe en la etiqueta un nuevo registro de texto o URL. En este ejemplo, escribimos un texto sencillo: `hi!`. Después de introducir tu contenido, haz clic en **"Write / XX Bytes"** — el número de bytes depende de la longitud de tu contenido.

<!-- TODO: Screenshot of NFC Tools writing "hi!" -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-nfc-tools-write.png" style={{width:300, height:'auto'}}/></div>

- **Paso 4.** Después de que el teléfono salga del campo NFC, el Monitor Serie imprime `Storage: tag content saved to flash`, confirmando que el contenido se ha escrito en la Flash interna.

<!-- TODO: Screenshot of Serial Monitor showing saved to flash -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-saved-to-flash.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 5.** **Cicla la alimentación de la placa** — desconecta el cable USB y vuelve a conectarlo.

- **Paso 6.** Después del reinicio, el Monitor Serie imprime `Storage state: previous content restored from flash`, confirmando que el contenido escrito ha sobrevivido al ciclo de alimentación.

<!-- TODO: Screenshot of Serial Monitor showing restored from flash after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-boot-log-restored.png" style={{width:1000, height:'auto'}}/></div>

- **Paso 7.** Vuelve a leer la etiqueta con tu teléfono. El teléfono debería mostrar el contenido escrito en el Paso 3 — incluso después del ciclo de alimentación.

<!-- TODO: Screenshot of phone showing "hi!" after reboot -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-phone-hi-after-reboot.png" style={{width:300, height:'auto'}}/></div>

<!-- TODO: Screenshot of phone showing restored content after reboot + serial indicators -->
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/NRF52840NFC-nfc-persistent-result-after-reboot.png" style={{width:1000, height:'auto'}}/></div>

**Indicadores clave:**

Los indicadores clave son los mismos que para la etiqueta grabable — consulta la [tabla de la etiqueta grabable](#demo-2-etiqueta-grabable) para ver la lista completa.

> `Storage state: previous content restored from flash` en el registro de arranque es la confirmación principal para la etiqueta persistente: los datos sobrevivieron al ciclo de alimentación. `Storage: tag content saved to flash` confirma que cada escritura se guardó en la Flash.

:::note
En el Paso 7, el teléfono solo **lee** el contenido restaurado — no escribe nada. Por lo tanto, `WRITE` seguirá siendo `0` en los contadores, lo cual es esperado. Solo verás `WRITE > 0` durante la sesión de escritura anterior (Pasos 3–4).
:::

:::note

- El contenido almacenado reside en el **sistema de archivos de la Flash interna** (`/nfc-tag-data.bin`), separado del área del sketch — sobrevive a nuevas subidas del sketch.
- Para restaurar el URI predeterminado en cualquier momento, envía `RESET_TAG` en el Monitor Serie.
- El guardado en Flash ocurre una vez por sesión de escritura después de que el teléfono sale del campo. Si retiras el teléfono demasiado pronto, el contenido puede quedar incompleto — simplemente vuelve a escribir para corregirlo.

:::

:::tip
**Resumen de las tres demos:**

<div class="table-center">
  <table align="center">
    <tr>
        <th>Demo</th>
        <th>Almacenamiento de datos</th>
        <th>Sobrevive al ciclo de alimentación</th>
        <th>Escribible por teléfono</th>
    </tr>
    <tr>
        <td>Etiqueta de solo lectura</td>
        <td>RAM</td>
        <td>❌</td>
        <td>❌</td>
    </tr>
    <tr>
        <td>Etiqueta escribible</td>
        <td>RAM</td>
        <td>❌</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Etiqueta persistente</td>
        <td>Flash</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
  </table>
</div>
:::

## Recursos

- **[GitHub]** [XIAO_nRF52840_NFC Library](https://github.com/limengdu/XIAO_nRF52840_NFC) — La biblioteca NFC de código abierto utilizada en este tutorial

## Agradecimientos especiales

Agradecimientos especiales a **[andriandreo](https://forum.seeedstudio.com/u/andriandreo/summary)** por las exhaustivas pruebas en el mundo real de antenas NFC (MOLEX 1462360051 y TAOGLAS FXR.07.A.DG) en la XIAO nRF52840, y a **[PJ_Glasso](https://forum.seeedstudio.com/u/PJ_Glasso/summary)** por la guía en el cálculo de condensadores y la resolución de problemas de compatibilidad con iPhone.

Si encuentras problemas con NFC que no se tratan aquí, puedes encontrar consejos útiles en el hilo original del foro:

- [XIAO nRF52840 NFC Antenna Insights](https://forum.seeedstudio.com/t/xiao-nrf52840-nfc-antenna-insights/277696)

## Soporte técnico y debate sobre productos

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte diferentes tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="table-center">
  <div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
  </div>

  <div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
  </div>
</div>
