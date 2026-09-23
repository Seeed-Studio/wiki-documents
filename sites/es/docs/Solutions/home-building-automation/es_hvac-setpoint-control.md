---
description: Control de consignas de supervisión para HVAC central en una pasarela perimetral (edge gateway): un modelo de punto único sobre OPC UA, Modbus y BACnet/IP más un medidor de energía SDM630, predicción de consignas con KNN y una ruta de escritura que verifica cada escritura leyendo de nuevo el punto
title: 'Control de consignas de HVAC en una pasarela perimetral: construcción, despliegue y resultados medidos'
keywords:
  - control de consignas de HVAC
  - rehabilitación energética de edificios
  - control de supervisión
  - BACnet/IP
  - Modbus TCP
  - Modbus RTU
  - OPC UA
  - Eastron SDM630
  - plantilla de medidor de energía
  - predicción KNN
  - verificación de escritura con lectura de retorno
  - reversión de control
  - reComputer R1100
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/hvac-setpoint-control
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este es un **recomendador de consignas de supervisión**, no un sistema de control certificado en seguridad. Los enclavamientos y controles de seguridad propios de la planta siguen al mando, y cada escritura se mantiene dentro de los límites que aprueba un ingeniero de sitio designado. **En ningún lugar de este paquete se reclama ninguna cifra de ahorro energético**: aún no existe comparación con línea base, normalización por clima u ocupación, ni un periodo de medición definido. Las cifras medidas que aparecen abajo provienen de simuladores de protocolo en hardware de desarrollo, no de un edificio.
interlocks and safety controls stay in charge, and every write stays inside limits a named site engineer
approves. **No energy-saving figure is claimed anywhere in this package** — no baseline comparison, weather
or occupancy normalisation, or defined measurement period exists yet. The measured numbers below come from
protocol simulators on developer hardware, not from a building.
:::

## Qué hace esta solución

Una planta central de HVAC en una oficina, un centro comercial o una fábrica suele funcionar con un horario fijo: la misma consigna tanto si la planta está llena como vacía. Esta solución coloca una pasarela junto a la planta que lee el controlador de HVAC y un medidor de energía en **un modelo de punto único**, aprende una recomendación de consigna a partir de los propios datos históricos de ese edificio y la escribe de vuelta en el controlador, pero solo considera que la escritura se ha aplicado después de que el valor se haya leído de nuevo desde campo y se haya comparado con lo que se envió.
whether the floor is full or empty. This solution puts a gateway beside the plant that reads the HVAC
controller and an energy meter into **one point model**, learns a setpoint recommendation from that
building's own historical data, and writes it back to the controller — but only counts the write as applied
after the value has been read back from the field and compared against what was sent.

Se utiliza en planta central: enfriadoras, unidades de tratamiento de aire y los controladores que tienen delante. No es para aires acondicionados tipo split y no está en el lazo de seguridad.
split-unit air conditioners, and it is not on the safety loop.

- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/smart_hvac_control)
- Repositorio ascendente: no publicado. La clave `intro.links.github` del paquete apunta a `github.com/Seeed-Solution/Solution_HVAC_SmartControl`, que no es accesible públicamente (HTTP 404 el 2026-09-22).

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Un modelo de punto único, cuatro protocolos</h3>
                <p>OPC UA, Modbus TCP, Modbus RTU sobre RS-485 y BACnet/IP llegan al mismo registro: 2.000 puntos, de los cuales hasta 50 pueden ser escribibles.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Una escritura no se aplica hasta que se lee de nuevo</h3>
                <p>El último valor, calidad, marca de tiempo y prioridad conocidos como buenos se congelan antes de la escritura; el punto se vuelve a leer tras un retardo de asentamiento y se compara dentro de una tolerancia. Una lectura de retorno cuya calidad no es buena nunca verifica.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Reversión con cinco disparadores, alarmas identificadas por causa</h3>
                <p>Desajuste en la lectura de retorno, fuente fuera de línea, predicción deshabilitada, aborto por el operador, lote aplicado parcialmente. Cinco tipos de alarma, cada uno identificado por su causa, de modo que una falla repetida reutiliza la alarma abierta.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Capacidad medida: 2.000 puntos a 349,99 eventos/s</h3>
                <p>Frente a un objetivo de 350,0, una ejecución de bucle de retorno de 180 s en una serie reComputer R2000. Las condiciones se detallan en el apéndice.</p>
            </div>
        </li>
    </ul>
</div>

### Lo que muestra la consola

La consola en ejecución representa la tabla de puntos con calidad por punto, la página de acceso con cada fuente y su recuento de puntos registrados, y un libro mayor de recepción de comandos. El libro mayor es donde la ruta de escritura es visible: cada fila lleva el valor solicitado, el valor efectivo, el actor, el acuse de recibo del protocolo y, tras el retardo de asentamiento, el resultado de la lectura de retorno. Una escritura cuyo registro se haya cambiado por fuera se lee como `mismatched, compensated` con el valor que se encontró, y el comando de compensación emitido por `plugin:prediction:rollback` aparece como la siguiente fila.
its registered point count, and a command-receipt ledger. The ledger is where the write path is visible:
each row carries the requested value, the effective value, the actor, the protocol acknowledgement and —
after the settle delay — the readback result. A write whose register was changed out of band reads
`mismatched, compensated` with the value that was found, and the compensation command issued by
`plugin:prediction:rollback` appears as the next row.

La página de acceso enumera cada fuente con su recuento de puntos registrados; este es el primer lugar donde el cableado se muestra como operativo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-en-9837244f.png" alt="Página de acceso: protocolo, dirección, estado en línea y recuento de puntos registrados para cada fuente"/>
</div>

La tabla de puntos incluye la calidad por punto, de modo que un punto que no esté leyendo `good` es visible aquí:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-en-477df2ca.png" alt="Tabla de puntos: nombre, valor actual, unidad, calidad y última actualización"/>
</div>

La página de tiempo de ejecución de la predicción muestra las consignas recomendadas de esta ronda, la ventana de historial que hay detrás de ellas y el modo de control actual:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-en-9217f059.png" alt="Página de tiempo de ejecución de la predicción: consignas recomendadas de esta ronda, ventana de historial y modo de control"/>
</div>

La ruta de escritura es visible en el libro mayor de recepción de comandos: el valor solicitado, el valor efectivo, el actor, el acuse de recibo del protocolo y la lectura de retorno tienen cada uno su columna:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-en-ae5581de.png" alt="Paso dos del despacho de comandos: confirmar el valor a escribir, el punto de destino y los límites de seguridad"/>
</div>

En todas las capturas anteriores los dispositivos de campo son los propios simuladores de protocolo del repositorio, no un medidor o controlador físico: la lógica de pasarela que hay detrás de ellos es real.

## Qué hardware necesitas

Tres cosas: un controlador que ya tengas, un medidor y un host Docker.

**① El controlador de HVAC**: cualquiera que ya esté delante de la planta, siempre que hable OPC UA, Modbus TCP/RTU o BACnet/IP. Para una prueba en seco sin planta conectada, el paquete incluye un simulador OPC UA en el puerto 4841.
TCP/RTU or BACnet/IP. For a dry run with no plant attached, the package ships an OPC UA simulator on port
4841.

**② El medidor de energía**: un Eastron SDM630 con el mapa de registros Modbus V2, sobre Modbus TCP, una pasarela Modbus TCP o RS-485. Diez puntos de solo lectura: tensión y corriente trifásicas, potencia activa total (kW), factor de potencia total, frecuencia, energía activa importada (kWh).
gateway, or RS-485. Ten read-only points: three-phase voltage and current, total active power (kW), total
power factor, frequency, imported active energy (kWh).

**③ El host de la pasarela**: esta es la única decisión de compra. El servicio es una carga de trabajo Docker en x86-64 o arm64, por lo que una máquina Linux que ya esté en la red de la planta es un destino compatible.
arm64, so a Linux machine already on the plant network is a supported target.

| | Pasarela | Almacenamiento | Cuándo elegirla |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB RAM, RS-485 / RS-232 / DI / DO integrados | 16 GB eMMC | El historial vive en un servidor; la pasarela mantiene una ventana local corta |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>misma placa, eMMC más grande | 32 GB eMMC | Meses de historial de operación permanecen en la pasarela; el conjunto de entrenamiento puede reimportarse localmente |

La serie R1100 incorpora RS-485 a bordo, por lo que un medidor en RS-485 no necesita adaptador USB. El **servicio en sí necesita alrededor de 1 GB de disco**: la columna de almacenamiento trata de hasta qué punto hacia atrás puedes mirar sin un servidor, no de si la aplicación cabe.
needs about 1 GB of disk** — the storage column is about how far back you can look without a server, not
about whether the application fits.

Otros requisitos previos: Docker Engine 20.10 o más reciente, los puertos 8280 y 4841 libres en el host, y al menos una semana de operación histórica en CSV o Excel con columnas de marca de tiempo, consigna, temperatura medida y consumo de energía.
historical operation as CSV or Excel with timestamp, setpoint, measured temperature and power consumption
columns.

## Cómo desplegar en sitio

Tres pasos, y el tercero es el que decide si el despliegue es confiable.

### 1. Cableado: lo que decide el éxito

:::tip[Confirma el orden de bytes y palabras del medidor antes de creer cualquier valor]
La plantilla SDM630 incorporada usa por defecto bytes y palabras big-endian porque ese es el valor predeterminado publicado por el proveedor, **no** porque se haya verificado contra un medidor físico. Lee un registro con un valor físico conocido y compáralo con la propia pantalla del medidor. Una tensión y frecuencia que parecen plausibles pero incorrectas, y una energía importada que salta hacia atrás, son ambos síntomas de orden de palabras, no fallos de cableado.
default — **not** because it has been verified against a physical meter. Read a register with a known
physical value and compare against the meter's own display. Voltage and frequency that look plausible but
wrong, and imported energy that jumps backwards, are both word-order symptoms, not wiring faults.
:::

Coloca la gateway en la misma red que el controlador y el medidor (o su gateway Modbus TCP). Para
Modbus RTU, haz coincidir la velocidad en baudios, la paridad y el id de unidad con la configuración del medidor: una discrepancia se lee
como un tiempo de espera, no como un mensaje de error, y usa el **perfil de despliegue serial-device**: el perfil
Docker estándar no adjunta ningún dispositivo serie del host, por lo que `/dev/ttyUSB0` simplemente no existirá dentro del contenedor.

### 2. Software: tres pasos

Los formularios de cada paso y sus campos están en la página del diseño de referencia, donde responder a unas pocas preguntas sobre el sitio también te da el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descárgala 🖱️</font></span></strong>
    </a>
</div><br />

El esquema es:

1. **Desplegar el servicio**: despliegue con Docker, ya sea en la máquina que ejecuta la herramienta de despliegue o
   por SSH a un dispositivo en la red de planta. El formulario incluye el transporte del medidor, el endpoint OPC UA,
   los límites de seguridad, el modo de control y los umbrales de alarma.
2. **Abrir la consola**: crea el primer administrador y confirma que ambas fuentes están en línea con sus
   recuentos de puntos esperados. El asistente de acceso pide dirección e intervalo de sondeo por protocolo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-en-7a3d57a8.png" alt="Primer paso del asistente de acceso: elige el protocolo, rellena la dirección y el intervalo de sondeo"/>
</div>

3. **Puesta en servicio**: registra el medidor, ejecuta predicciones en modo de observación, inyecta fallos a propósito y solo
   entonces habilita las escrituras. Antes de que salga un lote, confirma en la página de selección exactamente qué puntos cubre:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-en-9bd95ba4.png" alt="Selección de envío por lotes: los puntos cubiertos por este lote y sus valores actuales"/>
</div>

<!-- TODO image: gateway installed in the plant room next to the unit — needs a field shoot -->
<!-- TODO image: a physical meter and controller as wired (every capture here is behind a protocol simulator) — needs a field shoot -->

**Deja Control Mode en `observe` y deja Safety Baseline Approved By en blanco.** Un campo de aprobador en blanco es
lo que mantiene la línea base informando como no aprobada; rellenarlo es una firma, no una formalidad.

La estimación para llegar a una consola en ejecución con lectura de puntos es de unos **60 minutos**. La puesta en servicio lleva más tiempo,
porque incluye un ciclo completo de ocupación con predicciones en modo de observación revisadas por quien opera la
planta.

:::caution[Comprueba primero la etiqueta de la imagen]
`docker inspect -f '{{.Config.Image}}' missionpack_knn`. La etiqueta publicada `missionpack-knn:v1.6.5`
**no** incluye la plantilla SDM630, el coordinador de rollback ni el sobre de alarmas. La imagen que sí lo hace
no se ha construido ni subido y su etiqueta inmutable aún está por asignarse. En la v1.6.5 los subpasos de modo de observación
siguen aplicando; los subpasos de medidor, rollback y alarma no se pueden completar.
:::

## Cómo conectarlo a tu propio sistema

Todo lo que expone el despliegue se encuentra detrás de un puerto HTTP en el host de la gateway. Nada sale de la red de
planta a menos que la publicación hacia el norte esté activada.

- **Operadores**: la consola en el navegador en `8280`: tabla de puntos con calidad por punto, registro del medidor,
  ejecuciones de predicción, recibos de comandos, banner de alarmas.
- **Supervisión**: `GET /system/runtime-metrics`. Con la publicación hacia el norte activada incluye
  `northbound.spool.queued` y `northbound.spool.dropped`; `queued` de vuelta a 0 con `dropped` sin cambios es
  la comprobación que pide el paso de puesta en servicio.
- **Tu propio sistema**: la misma superficie de API de la consola detrás de `8280`, más el endpoint de salud que el despliegue
  espera al arrancar.

### Lista completa de endpoints

| Puerto / endpoint | Qué sirve | Necesita internet |
|---|---|---|
| `8280` `/` | Consola en el navegador | No |
| `8280` `/system/runtime-metrics` | Contadores de tiempo de ejecución, contadores del spool hacia el norte | No |
| `8280` `/api/v1/health` | Comprobación de salud; el arranque permite 30 s | No |
| `4841` | Simulador OPC UA integrado, para una prueba en seco | No |

**El campo que más a menudo se interpreta mal es el resultado de readback en un recibo de comando.** `protocol_acknowledged` significa
que el controlador aceptó la trama. No significa que la planta se haya movido. Solo la columna de readback — `matched`,
o `mismatched, compensated` con el valor encontrado — informa de lo que realmente contiene el campo. Una compensación
emitida por el coordinador de rollback aparece como su propio recibo inmediatamente después de la escritura que deshizo, de modo que el
rastro de auditoría se lea en orden sin unir dos tablas.

Los logs del contenedor rotan a 10 MB con cuatro copias de seguridad (`docker logs missionpack_knn`). Exporta el rastro de auditoría de comandos,
el diario de rollback y el historial de alarmas antes de que caduquen.

## Para ingenieros: detalles de implementación

### El modelo de puntos

Un único registro contiene todos los puntos independientemente de cómo hayan llegado. El límite es de **2.000 puntos**, de los cuales como
máximo **50 pueden ser escribibles**. Los diez puntos del medidor SDM630 son de solo lectura y cuentan dentro de los 2.000, no
dentro de los 50.

| Transporte | Papel en este diseño | Restricciones |
|---|---|---|
| OPC UA | Lectura y escritura del controlador HVAC | Endpoint configurado por despliegue; simulador integrado en 4841 |
| Modbus TCP | Medidor y controlador | Id de unidad y puerto por fuente; directo o a través de un gateway TCP |
| Modbus RTU (RS-485) | Medidor | Requiere el perfil de despliegue serial-device; el perfil estándar no adjunta ningún dispositivo serie del host |
| BACnet/IP | Lectura y escritura del manejador de aire | Las escrituras usan una prioridad y liberación con `Null`. **COV subscription, BBMD registration y MS-TP no están implementados** |

Las plantillas de dispositivo — incluida la integrada de SDM630 — generan un **CSV estricto limitado a 256 filas**, y una
plantilla integrada pasa por el mismo analizador que una escrita a mano. Una plantilla personalizada que exceda
ese límite es rechazada por ese mismo analizador.

### La ruta de escritura: congelar, escribir, leer de nuevo, comparar

La secuencia para cada escritura, en orden:

1. Congelar el último valor bueno conocido, la calidad, la marca de tiempo y la prioridad BACnet para el punto.
2. Emitir la escritura a través de la ruta de escritura autorizada, sujeta a la bandera de habilitación de escritura y a la
   política de escritura, a las que también está sujeta una compensación.
3. Esperar `settle_seconds` después de que el lote se complete.
4. Volver a leer el punto y comparar dentro de `readback tolerance`.
5. Un readback cuya **calidad no sea `good` nunca verifica**, sea cual sea el valor que lleve.

El readback y la compensación se ejecutan **después** del lote, no dentro de él, por lo que no entran en la latencia del ciclo.
El siguiente lote sí espera a que el anterior alcance un estado terminal, lo que mantiene como máximo una
escritura en curso por punto.

**Solo se verifican los puntos Modbus.** Se omite una salida BACnet, porque el ciclo de producción no proporciona
una prioridad de escritura para ella y una compensación no sabría qué prioridad liberar.

### Rollback y alarmas

Cinco disparadores de rollback: discrepancia en el readback, fuente fuera de línea, predicción deshabilitada, aborto por el operador y
lote aplicado parcialmente. Los puntos BACnet se liberan con `Null` en la prioridad a la que se escribieron;
los puntos Modbus se restauran en el orden inverso al que se aplicaron.

Cinco tipos de alarma, cada uno **identificado por su causa en lugar de por el evento**, de modo que un fallo repetido reutiliza
la alarma abierta en lugar de abrir una segunda:

| Alarma | Severidad | Motivo |
|---|---|---|
| `source-offline` | aviso | La planta mantiene su punto de consigna anterior |
| `stale-sample` | aviso | Igual |
| `write-failed` | aviso | Igual |
| `readback-mismatch` | aviso | Igual |
| `compensation-failed` | **crítica** | La planta queda en un estado desconocido |

Reconocer una alarma registra que un operador la vio; **solo una recuperación la borra**, y la recuperación
incluye el id de la alarma que borra. Si ves que la misma falla abre una alarma nueva cada vez, los campos de causa
difieren: compara los ids de fuente y de punto.

### Parámetros y sus valores distribuidos

Formulario de despliegue (`devices/deploy.yaml`):

| Parámetro | Valor predeterminado distribuido | Nota |
|---|---|---|
| Control Mode | `observe` | No se escribe nada hasta que un operador cambie esto |
| Minimum / Maximum Setpoint | 18 / 30 °C | **Marcador de posición** |
| Maximum Change / Change Window | 1.0 °C / 300 s | **Marcador de posición** |
| Mode whitelist | off / fan / cool / heat / auto | **Marcador de posición** |
| Safety Baseline Approved By | *(blank)* | En blanco es lo que mantiene la línea base informando como no aprobada |
| Readback Delay | 10 s | |
| Readback Tolerance | 0.05 | |
| Stale Sample Threshold | 60 s | |
| Meter TCP Port / Unit ID | 502 / 1 | |
| Serial device / baud | `/dev/ttyUSB0` / 9600 | 19200 y 38400 también seleccionables |

Configuración de ejecución de predicción, creada en la consola en lugar de mediante una variable de despliegue:

```json
{
  "schema_version": "prediction-run.v3",
  "interval_seconds": 60,
  "rollback": { "enabled": true, "settle_seconds": 2.5 }
}
```

**La verificación de escritura de retorno está desactivada a menos que la configuración de ejecución la solicite.** Una configuración sin
sección `rollback` migra a `enabled: false` en lugar de obtener silenciosamente una nueva ruta de escritura: define la
sección explícitamente cuando inicies la ejecución. `settle_seconds` (0–30, por defecto 1.0) **debe ser mayor que el
intervalo de recopilación de la fuente**, o el readback verá el valor de antes de la escritura e informará de una discrepancia
que nunca ocurrió.

El modelo de predicción es KNN sobre los propios datos históricos de operación del edificio, importados como CSV o Excel
con columnas de marca de tiempo, punto de consigna, temperatura medida y consumo de energía. Aprende de ese edificio
en lugar de a partir de una curva genérica, y las predicciones son visibles en la consola antes de que se permita que ninguna de ellas
llegue al controlador.

## Apéndice: datos medidos {#measured-data}

Esta sección es para lectores que revisan las cifras; omitirla no afecta al despliegue. Todo lo que aparece aquí
se midió con **simuladores de protocolo en hardware de desarrollador**, no en un edificio. Cada cifra es una
muestra única salvo que se indique lo contrario, y ninguna se ha reproducido de forma independiente.

### Qué se midió

| Elemento | Estado |
|---|---|
| Rendimiento de muestreo a 2.000 puntos | **Medido**, una ejecución de 180 s |
| Latencia del ciclo de predicción | **Medición preliminar**, n = 4 ciclos |
| Latencia de admisión de control | **Medición preliminar**, n = 2 ciclos |
| Ejecución continua de 24 h | **Pendiente.** Se realizó una prueba de resistencia del 2026-09-05 al 2026-09-06 en el mismo host; el veredicto aún no está. No se ha iniciado ninguna ejecución de 7 días ni de 30 días |
| Reversión y alarmas de extremo a extremo | **Cableadas en el ciclo de predicción, ejercitadas solo contra simuladores de protocolo** |

### Capacidad

| Métrica | Valor | Condiciones |
|---|---:|---|
| Rendimiento de muestreo | 349,99 eventos/s (99,99% de un objetivo de 350,0) | 2.000 puntos, cuatro fuentes de protocolo |
| Tasa de predicción | 0,939 ciclos/s | Misma ejecución |
| Pico de RSS del grupo de procesos | 217,3 MiB | Misma ejecución |

Condiciones para las tres filas: 2.000 puntos en cuatro fuentes de protocolo, OPC UA y Modbus muestreados a 5 s
y BACnet a 10 s, solo loopback, **180 s**, en un reComputer R2000 series (arm64), captura `capacity-smoke` r14,
upstream `b5fe4cc`. Una sola ejecución de esa duración es una prueba de capacidad preliminar, no un resultado de estabilidad.

### Latencia

| Métrica | Valor | Condiciones |
|---|---:|---|
| Latencia del ciclo de predicción | 46,27 ms máximo | n = 4 ciclos |
| Latencia de admisión de control | 1,41 ms máximo | n = 2 ciclos |

Ambas son métricas de tiempo de ejecución de la línea base del banco de pruebas `northbound-smoke`, upstream `f831bae`. **Dos y cuatro
muestras no describen nada sobre un sistema cargado**: acotan la ruta de código, no el despliegue.

### Un defecto conocido y abierto

El bucle de predicción duerme un intervalo fijo después de cada ciclo, por lo que su tasa es `1/(1.0 + t_cycle)`. A 2.000
puntos `t_cycle` es aproximadamente **0,119 s**, lo que sitúa el techo estructural cerca de **0,894 ciclos/s**, por debajo del
umbral de 0,90 que hace cumplir el arnés de prueba de resistencia. Esto se reprodujo en todas las ejecuciones de la ronda 3, incluida una sin fallo
inyectado. O el bucle o el umbral tienen que cambiar; ninguno lo ha hecho.

### Dónde será peor que esto

- **Dispositivos de campo reales, no simuladores.** Cada cifra anterior se tomó contra los propios
  simuladores de protocolo de este repositorio sobre loopback. Un controlador real añade latencia de red, reintentos y timeouts.
- **Orden de bytes.** Hasta que un paso de puesta en servicio lo confirme frente a la propia pantalla del medidor, los puntos
  de medidor escalados son solo tan confiables como el valor predeterminado publicado por el proveedor.
- **Reversión y alarmas en tu planta.** Ambas están cableadas en el ciclo de predicción upstream, pero un
  simulador que siempre responde no es una planta que a veces no lo hace. Ejercita deliberadamente las condiciones de origen fuera de línea,
  discrepancia en la lectura de retorno y muestra obsoleta antes de habilitar escrituras.
- **Cualquier cosa más allá de 180 segundos.** El veredicto de la prueba de resistencia de 24 h aún no está, y no se ha iniciado ninguna ejecución más larga.

## Fuentes de datos y activos

- **Mapa de registros SDM630**: documento publicado por Eastron sobre el protocolo Modbus (mapa de registros Modbus V2, registros de entrada
  float32 IEEE-754). Las direcciones siguen ese documento; el orden de bytes y palabras big-endian es el
  valor predeterminado del proveedor: confírmalo frente a tu propio medidor.
- **Datos históricos de operación**: suministrados por el sitio que realiza el despliegue. No se distribuye nada con el paquete,
  y no se usa ni se requiere ningún conjunto de datos público.
- **Capturas de consola**: capturas de pantalla originales del software empaquetado ejecutándose contra los
  propios simuladores de protocolo de este repositorio. La configuración del simulador, el host de captura y las sumas de comprobación están
  registradas en `gallery/ATTRIBUTION.md` del paquete. No se incluye ningún recurso, marca comercial ni imagen de stock de terceros.
  - **Diagrama de arquitectura**: dibujado para este diseño de referencia a partir de un IR de arquitectura estructurada; trabajo
  original, sin arte de terceros.

