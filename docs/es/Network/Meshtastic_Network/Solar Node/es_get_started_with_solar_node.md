---
description: Comenzar con SenseCAP Solar Node para Meshtastic y LoRa
title: Comenzar con SenseCAP Solar Node
keywords:
- Meshtastic
- Solar
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/solar-node.webp
slug: /es/get_started_with_meshtastic_solar_node
sidebar_position: 2
last_update:
  date: 4/27/2025
  author: Jessie
---


## Comenzar

Antes del despliegue formal, por favor pruebe y configure el nodo primero.

### Flashear Firmware

Visite [Meshtastic Web Flasher](https://flasher.meshtastic.org/).

Seleccione el dispositivo objetivo como `Seeed SenseCAP Solar Node` y elija el firmware más reciente, luego haga clic en `Flash`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/select-solar.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/3-steps.png" alt="pir" width={800} height="auto" /></p>

Haga clic en `Enter DFU Mode`, aparecerá un puerto serie llamado `XIAO-xxx`, haga clic y conéctelo, y debería aparecer un controlador llamado `XIAO-xxx`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/52840-connect.png" alt="pir" width={800} height="auto" /></p>

Arrastre el archivo UF2 a la unidad DFU. El firmware debería flashearse después de que el archivo se descargue y el dispositivo se reinicie.

### Instalar Batería y Módulo GPS (Opcional)

:::tip
Batería Recomendada: Batería de Iones de Litio 18650 3.6V (Polo Positivo Plano).
:::

La versión P1-Pro tiene batería y módulo GPS integrados, para la versión P1, el usuario necesita instalar la batería y el módulo GPS manualmente si es necesario.

- Paso 1: Retire todos los tornillos y la cubierta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

- Paso 2: Instale la batería y el módulo GPS.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/install-bat-gps.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/gps_install.png" alt="pir" width={800} height="auto" /></p>

- Paso 3: Ensamble la carcasa.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.png" alt="pir" width={800} height="auto" /></p>

:::caution note
Asegúrese de que la carcasa esté montada correctamente y los tornillos estén firmemente apretados para mantener la integridad impermeable del dispositivo.
:::

### Encender el dispositivo

Conecte el cable USB para activar el dispositivo.

### Conectar vía App

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="ios" label="App IOS">

- Seleccione el dispositivo objetivo en el panel de Bluetooth.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-radio.png" alt="pir" width={300} height="auto" /></p>

- Ingrese el código (el código predeterminado es `123456`) y luego haga clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/pair1.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">

- Haga clic en `+` y elija el dispositivo objetivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-choose.png" alt="pir" width={600} height="auto" /></p>

- Ingrese el código (el código predeterminado es `123456`) y luego haga clic en `OK` para conectar el dispositivo.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/click-ok.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

### Configurar los Parámetros

Para comenzar a comunicarse a través de la malla, debe establecer su región. Esta configuración controla qué rango de frecuencia usa su dispositivo y debe establecerse según su ubicación regional.

<Tabs>
<TabItem value="ios" label="App IOS">

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/set-region.png" alt="pir" width={600} height="auto" /></p>

</TabItem>

<TabItem value="android" label="App Android">
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/an-region.png" alt="pir" width={300} height="auto" /></p>

</TabItem>
</Tabs>

**Lista de Regiones**

|**Código de Región**|**Descripción**|**Rango de Frecuencia (MHz)**|**Ciclo de Trabajo (%)**|**Límite de Potencia (dBm)**|
| :-: | :-: | :-: | :-: | :-: |
|UNSET|Sin establecer|N/A|N/A|N/A|
|US|Estados Unidos|902.0 - 928.0|100|30|
|EU_868|Unión Europea 868MHz|869.4 - 869.65|10|27|

Consulta [Región LoRa por País](https://meshtastic.org/docs/configuration/region-by-country/) para una lista más completa.

:::info
**EU_868** debe cumplir con una limitación de ciclo de trabajo por hora del 10%, calculada cada minuto en una base móvil de 1 hora. Tu dispositivo dejará de transmitir si lo alcanzas, hasta que se permita nuevamente.
:::

Ahora que has configurado la región LoRa en tu dispositivo, puedes continuar configurando cualquier [Configuración LoRa](https://meshtastic.org/docs/configuration/radio/lora/) para satisfacer tus necesidades.

## Instalación

:::danger note
Dado que el dispositivo se utilizará al aire libre durante períodos prolongados, evita instalar el panel en posición horizontal. Se recomienda una instalación inclinada o diagonal para prevenir la acumulación de agua. Además, asegúrate de que todos los tornillos estén bien apretados y la cubierta esté correctamente instalada. Para una protección impermeable mejorada, también puedes considerar aplicar medidas de sellado adicionales.
:::

- **Lista de Partes**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/part-list.png" alt="pir" width={800} height="auto" /></p>

- Paso 1: Conecta la parte 1 a la parte inferior del dispositivo usando arandelas y tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Universal-Joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 2: Conecta la junta universal (parte 2) y el soporte (parte 3) con tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/joint.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 3: Conecta el cable RF (parte 4) y la antena (parte 5).

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 3: Instala el anillo de aro en la posición apropiada.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/hoop-ring.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 4: Conecta el soporte de la junta universal.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connector.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 5: Afloja los tornillos, ajusta la junta universal a la posición apropiada, y luego aprieta los tornillos.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/screws.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

- Paso 6: Conecta la antena al dispositivo.

<div class="table-center">
<iframe width="730" height="500" src="https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/connect-antenna2.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

## FAQ

### Consumo de Energía

El consumo de energía depende principalmente de factores como la frecuencia de transmisión de datos y la tasa de actualización del GPS.
Las cifras a continuación son solo de referencia; el consumo real puede variar según las condiciones de uso del mundo real.

- **Consumo de Energía en Modo de Suspensión de Apagado**

|Descripción|Consumo|
|---|---|
|Corriente de trabajo GPS_LED|1.02 mA|
|Encendido pero no activado|56.195 μA|
|Encendido y activado|611 μA|

**Ejemplo:**

|Capacidad de batería |Vida útil de la batería|
|---|---|
|3350|136.8|
|12000|490.2|

- **Consumo de Energía en Modo Activo**

|Modo|Corriente|
|---|---|
|Corriente Estática|10.65 mA|
|Corriente de Transmisión EU868|157.74 mA|
|Corriente de Transmisión US915|205.22 mA|
|Corriente de Operación GPS|50 mA|
|Corriente de Operación GPS_LED|1.02 mA|

Para más detalles consulta [Tabla de Cálculo de Vida Útil de Batería del Nodo Solar](https://files.seeedstudio.com/wiki/SenseCAP/Meshtastic/Solar%20Node%20Battery%20Life%20Calculation%20Table.xlsx)
