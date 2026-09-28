---
description: Control de consignas de supervisión para climatización centralizada (HVAC) en un gateway perimetral — un modelo de punto único sobre OPC UA, Modbus y BACnet/IP más un analizador de energía SDM630, predicción de consignas con KNN y una ruta de escritura que verifica cada escritura leyendo de nuevo el punto
title: 'Control de consignas HVAC en un gateway perimetral: hardware, despliegue y resultados medidos'
keywords:
  - control de consignas HVAC
  - rehabilitación energética de edificios
  - control de supervisión
  - BACnet/IP
  - Modbus TCP
  - Modbus RTU
  - OPC UA
  - Eastron SDM630
  - plantilla de analizador de energía
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
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/solutions/hvac-setpoint-control/
generated_from: sensecraft-solutions@cbbfa60
---

:::caution[Aviso de uso]
Este es un **recomendador de consignas de supervisión**, no un sistema de control certificado para seguridad: los enclavamientos y controles de seguridad propios de la planta tienen prioridad, y no se proporciona ninguna cifra de ahorro energético.
:::

## Qué hace esta solución

Una planta central de HVAC en una oficina, un centro comercial o una fábrica suele funcionar con un horario fijo: la misma consigna tanto si la planta está llena como si está vacía. Esta solución coloca un gateway junto a la planta que lee el controlador de HVAC y un analizador de energía en **un modelo de punto único**, aprende una recomendación de consigna a partir de los datos históricos propios de ese edificio y la escribe de vuelta en el controlador; una escritura se considera aplicada solo después de que el valor se haya leído de nuevo desde campo y coincida con lo que se envió.

Se utiliza en planta central: enfriadoras, unidades de tratamiento de aire y los controladores que tienen delante. No es para aires acondicionados tipo split, y no está en el lazo de seguridad.

- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/smart_hvac_control)
- Repositorio de código fuente: no publicado. `github.com/Seeed-Solution/Solution_HVAC_SmartControl` no es accesible públicamente.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Los controladores y analizadores existentes se conectan tal como están</h3>
                <p>Los controladores que hablan OPC UA, Modbus TCP, Modbus RTU sobre RS-485 o BACnet/IP no se sustituyen, y el analizador SDM630 tiene una plantilla integrada. Hasta 2.000 puntos, de los cuales hasta 50 pueden ser escribibles.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Cada escritura se lee de nuevo y se verifica</h3>
                <p>El último valor, calidad, marca de tiempo y prioridad conocidos como correctos se congelan antes de la escritura; el punto se vuelve a leer tras un retardo de asentamiento y se compara dentro de una tolerancia. Una lectura de retorno cuya calidad no sea buena no pasa.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <div class="info-content">
                <h3>Reversión automática y alarmas ante fallos</h3>
                <p>La discrepancia en la lectura de retorno, la fuente fuera de línea, la predicción deshabilitada, la cancelación por parte del operador y un lote aplicado parcialmente desencadenan todos una reversión. Las alarmas se indexan por causa, de modo que un fallo recurrente reutiliza la alarma abierta.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Capacidad medida: 2.000 puntos a 349,99 eventos/s</h3>
                <p>Frente a un objetivo de 350,0, medido en una ejecución de loopback de 180 s en una reComputer R2000 Serie. Las condiciones están en el apéndice.</p>
            </div>
        </li>
    </ul>
</div>

### Lo que muestra la consola

La consola en ejecución representa la tabla de puntos con la calidad por punto, la página de acceso con cada fuente y su recuento de puntos registrados, y un libro mayor de recepción de comandos. El libro mayor es donde la ruta de escritura es visible: cada fila lleva el valor solicitado, el valor efectivo, el actor, el acuse de recibo del protocolo y — tras el retardo de asentamiento— el resultado de la lectura de retorno. Una escritura cuyo registro se haya cambiado por fuera se lee como `mismatched, compensated` con el valor que se encontró, y el comando de compensación emitido por `plugin:prediction:rollback` aparece como la fila siguiente.

La página de acceso enumera cada fuente con su recuento de puntos registrados; este es el primer lugar donde el cableado se muestra como operativo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-list-en-9837244f.png" alt="Página de acceso: protocolo, dirección, estado en línea y recuento de puntos registrados para cada fuente"/>
</div>

La tabla de puntos lleva la calidad por punto, de modo que un punto que no esté leyendo `good` es visible aquí:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/points-en-477df2ca.png" alt="Tabla de puntos: nombre, valor actual, unidad, calidad y última actualización"/>
</div>

La página de tiempo de ejecución de la predicción muestra las consignas recomendadas de esta ronda, la ventana de historial que las respalda y el modo de control actual:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/prediction-runtime-en-9217f059.png" alt="Página de tiempo de ejecución de la predicción: consignas recomendadas de esta ronda, ventana de historial y modo de control"/>
</div>

La ruta de escritura es visible en el libro mayor de recepción de comandos: el valor solicitado, el valor efectivo, el actor, el acuse de recibo del protocolo y la lectura de retorno tienen cada uno su columna:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/control-step2-en-ae5581de.png" alt="Paso dos del envío de comandos: confirmar el valor a escribir, el punto de destino y los límites de seguridad"/>
</div>

Las capturas anteriores están conectadas a los propios simuladores de protocolo del paquete, no a un analizador o controlador físico; el lado del gateway ejecuta el software suministrado.

## Qué hardware necesitas

Tres cosas: un controlador que ya tengas, un analizador y un host Docker.

**① El controlador de HVAC**: cualquiera que ya esté delante de la planta, siempre que hable OPC UA, Modbus TCP/RTU o BACnet/IP. Para una prueba en vacío sin planta conectada, el paquete incluye un simulador OPC UA en el puerto 4841.

**② El analizador de energía**: un Eastron SDM630 con el mapa de registros Modbus V2, sobre Modbus TCP, un gateway Modbus TCP o RS-485. Diez puntos de solo lectura: tensión y corriente trifásicas, potencia activa total (kW), factor de potencia total, frecuencia, energía activa importada (kWh).

**③ El host gateway**: el único dispositivo que necesitas elegir. El servicio es una carga de trabajo Docker en x86-64 o arm64, por lo que una máquina Linux que ya esté en la red de la planta es un destino compatible.

| | Gateway | Almacenamiento | Cuándo elegirlo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991374.jpg" alt="reComputer R1124-10" width="110" /> | [reComputer R1124-10](https://www.seeedstudio.com/reComputer-R1124-10-p-6257.html)<br/>4 GB RAM, RS-485 / RS-232 / DI / DO integrados | 16 GB eMMC | El historial vive en un servidor; el gateway mantiene una ventana local corta |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>misma placa, eMMC más grande | 32 GB eMMC | Meses de historial de operación permanecen en el gateway; el conjunto de entrenamiento puede volver a importarse localmente |

La serie R1100 incorpora RS-485 a bordo, por lo que un analizador en RS-485 no necesita adaptador USB. El **servicio en sí necesita alrededor de 1 GB de disco**; el almacenamiento determina cuánta historia puedes consultar localmente sin un servidor.

Otros requisitos previos: Docker Engine 20.10 o más reciente, los puertos 8280 y 4841 libres en el host, y al menos una semana de operación histórica en CSV o Excel con columnas de marca de tiempo, consigna, temperatura medida y consumo de energía.

## Cómo desplegar en sitio

### 1. Instalar el hardware: cableado

:::tip[Comprueba primero el orden de bytes y palabras del analizador]
La plantilla integrada del SDM630 usa por defecto bytes y palabras big-endian, tomada del valor por defecto publicado por el proveedor. Lee un registro con un valor físico conocido y compáralo con la propia pantalla del analizador. Una tensión y frecuencia que sean cercanas pero incorrectas, o una energía importada que salta hacia atrás, suelen significar un error en el ajuste del orden de palabras; comprueba el orden de palabras antes de cablear.
:::

Pon el gateway en la misma red que el controlador y el analizador (o su gateway Modbus TCP). Para Modbus RTU, haz coincidir la velocidad en baudios, la paridad y el id de unidad con aquello para lo que esté configurado el analizador; un desajuste muestra solo como un tiempo de espera, sin mensaje de error. Usa el **perfil de despliegue serial-device**: el perfil estándar de Docker no adjunta ningún dispositivo serie del host, por lo que no hay `/dev/ttyUSB0` dentro del contenedor.

### 2. Software: tres pasos

Los campos del formulario por paso y los paquetes de aplicación están en la página del diseño de referencia; elige una configuración para tu sitio y descárgala.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_hvac_control" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descárgala 🖱️</font></span></strong>
    </a>
</div><br />

Resumen:

1. **Despliega el servicio** — despliegue con Docker, ya sea en la máquina que ejecuta la herramienta de despliegue o por SSH a un dispositivo en la red de la planta. El formulario incluye el transporte del medidor, el endpoint OPC UA, los límites de seguridad, el modo de control y los umbrales de alarma.
2. **Abre la consola** — crea el primer administrador y confirma que ambas fuentes están en línea con sus conteos de puntos esperados. El asistente de acceso pide dirección e intervalo de sondeo por protocolo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/access-wizard-step1-en-7a3d57a8.png" alt="Primer paso del asistente de acceso: elige el protocolo, rellena la dirección y el intervalo de sondeo"/>
</div>

3. **Puesta en servicio** — registra el medidor, ejecuta predicciones en modo de observación, inyecta fallos a propósito y solo entonces habilita las escrituras. Antes de que salga un lote, confirma en la página de selección exactamente qué puntos cubre:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_hvac_control/batch-select-en-9bd95ba4.png" alt="Selección de envío por lotes: los puntos cubiertos por este lote y sus valores actuales"/>
</div>

<!-- TODO imagen: gateway instalado en la sala de máquinas junto a la unidad — necesita una sesión de fotos en campo -->
<!-- TODO imagen: un medidor físico y un controlador tal como están cableados (todas las capturas aquí están detrás de un simulador de protocolo) — necesita una sesión de fotos en campo -->

**Deja Control Mode en `observe` y deja Safety Baseline Approved By en blanco.** Mientras el aprobador esté en blanco, la línea base aparece como no aprobada; introducir un nombre significa que ese ingeniero aprueba los límites de seguridad.

La estimación hasta una consola en ejecución con lectura de puntos es de unos **60 minutos**. La puesta en servicio lleva más tiempo, porque incluye un ciclo completo de ocupación de predicciones en modo de observación revisadas por quien opera la planta.

:::caution[Qué cubre la imagen publicada]
La imagen publicada `missionpack-knn:v1.6.5` **no** incluye la plantilla SDM630, el coordinador de rollback ni el sobre de alarma. En la v1.6.5 los subpasos de modo de observación siguen aplicando; los subpasos de medidor, rollback y alarma no se pueden completar.
:::

## Interfaces disponibles

Todo lo que expone el despliegue se encuentra detrás de un puerto HTTP en el host gateway. Nada sale de la red de la planta a menos que la publicación hacia el norte esté activada.

- **Operadores** — la consola en el navegador en `8280`: tabla de puntos con calidad por punto, registro de medidores, ejecuciones de predicción, acuses de recibo de comandos, banner de alarmas.
- **Supervisión** — `GET /system/runtime-metrics`. Con la publicación hacia el norte activada incluye `northbound.spool.queued` y `northbound.spool.dropped`; `queued` de vuelta a 0 con `dropped` sin cambios es la comprobación que pide el paso de puesta en servicio.
- **Tu propio sistema** — la misma superficie de API de la consola detrás de `8280`, más el endpoint de salud que el despliegue espera al arrancar.

### Lista completa de endpoints

| Puerto / endpoint | Qué sirve | Necesita internet |
|---|---|---|
| `8280` `/` | Consola en el navegador | No |
| `8280` `/system/runtime-metrics` | Contadores de tiempo de ejecución, contadores del spool hacia el norte | No |
| `8280` `/api/v1/health` | Comprobación de salud; el arranque permite 30 s | No |
| `4841` | Simulador OPC UA integrado, para una prueba en seco | No |

**En un acuse de recibo de comando, lee la columna de readback**: `protocol_acknowledged` solo significa que el controlador aceptó la trama. La columna de readback (`matched`, o `mismatched, compensated` con el valor encontrado) es lo que realmente hay en campo. Una compensación emitida por el coordinador de rollback aparece como su propio acuse inmediatamente después de la escritura que deshizo, de modo que el rastro de auditoría se lee en orden sin unir dos tablas.

Los logs del contenedor rotan a 10 MB con cuatro copias de seguridad (`docker logs missionpack_knn`). Exporta el rastro de auditoría de comandos, el diario de rollback y el historial de alarmas antes de que caduquen.

### Alcance del protocolo hacia el sur

Todos los puntos se encuentran en un único registro, limitado a **2.000 puntos**, de los cuales como máximo **50 pueden ser escribibles**. Los 10 puntos del medidor SDM630 son de solo lectura; cuentan para los 2.000 y no para los 50.

| Transporte | Función | Restricciones |
|---|---|---|
| OPC UA | Lectura y escritura en el controlador HVAC | Endpoint establecido por despliegue; simulador integrado en 4841 |
| Modbus TCP | Medidor y controladores | ID de unidad y puerto por fuente; directo o a través de un gateway TCP |
| Modbus RTU (RS-485) | Medidor | Necesita el perfil de despliegue serial-device; el perfil estándar no adjunta dispositivos serie del host |
| BACnet/IP | Lectura y escritura en manejadoras de aire | Las escrituras usan una prioridad y liberación con `Null`. **La suscripción COV, el registro BBMD y MS-TP no están implementados** |

## Rendimiento y datos medidos {#datos-medidos}

Todo lo aquí descrito se midió contra el simulador de protocolo sobre loopback; no hay datos de un edificio real, y cada cifra proviene de una sola ejecución salvo que se indique lo contrario.

### Capacidad

| Métrica | Valor | Condiciones |
|---|---:|---|
| Rendimiento de muestreo | 349,99 eventos/s (99,99% del objetivo de 350,0) | 2.000 puntos, 4 fuentes de protocolo |
| Tasa de predicción | 0,939 ciclos/s | Misma ejecución |
| Pico de RSS del grupo de procesos | 217,3 MiB | Misma ejecución |

Condiciones para las tres filas: 2.000 puntos en 4 fuentes de protocolo, OPC UA y Modbus muestreados cada 5 s, BACnet cada 10 s, solo loopback, ejecución de **180 s**, en una reComputer R2000 serie (arm64).

Reproducir: upstream `b5fe4cc`, captura `capacity-smoke` r14

### Latencia

| Métrica | Valor | Condiciones |
|---|---:|---|
| Latencia del ciclo de predicción | 46,27 ms máx. | n = 4 ciclos, sin carga |
| Latencia de admisión de control | 1,41 ms máx. | n = 2 ciclos, sin carga |

Ambas reflejan solo el coste de la propia ruta de código.

Reproducir: upstream `f831bae`, línea base de tiempo de ejecución de `northbound-smoke`

### Tiempo de ejecución y parámetros clave

El modelo de predicción es KNN, entrenado con el propio historial operativo del edificio (CSV o Excel con columnas de marca de tiempo, punto de consigna, temperatura medida y potencia); el servicio es una carga de trabajo Docker en x86-64 o arm64. Cada predicción puede revisarse en la consola antes de que llegue al controlador.

- **Modo de control y límites de seguridad**: el modo de control se entrega como `observe`, por lo que no se escribe ningún punto hasta que un operador lo cambie. El mínimo / máximo del punto de consigna de 18 / 30 °C, el cambio máximo de 1,0 °C por 300 s y la lista blanca de modos off / fan / cool / heat / auto son todos **marcadores de posición**; rellénalos para la planta.
- **La verificación de readback está desactivada por defecto**: la configuración de ejecución de predicción (creada en la consola) debe indicar `"rollback": { "enabled": true, "settle_seconds": 2.5 }` explícitamente; una configuración sin sección `rollback` se trata como `enabled: false`.
- **`settle_seconds`** (0–30, por defecto 1,0) **debe ser mayor que el intervalo de muestreo de la fuente**, o el readback verá el valor previo a la escritura e informará de una discrepancia que no existe.

### Degradación conocida

- **La tasa de predicción tiene un techo estructural (no corregido)**: el bucle de predicción duerme un intervalo fijo después de cada ciclo, por lo que su tasa es `1/(1.0 + t_cycle)`. A 2.000 puntos `t_cycle` es de unos **0,119 s**, lo que sitúa el techo cerca de **0,894 ciclos/s**, por debajo del umbral de 0,90 que exige la prueba de resistencia.
- **Solo las escrituras Modbus se verifican por readback**: una salida BACnet no tiene prioridad de escritura disponible y se omite.
- **Orden de bytes**: hasta que se compruebe frente a la propia pantalla del medidor, los puntos del medidor se decodifican con el orden de palabras por defecto del proveedor (big-endian) y pueden ser incorrectos.

### Próximos pasos

- Lectura/escritura con readback independiente contra dispositivos reales OPC UA, Modbus TCP, Modbus RTU (USB-a-RS-485) y BACnet/IP en un reComputer R10 serie o reTerminal DM.
- Una ejecución desatendida de 72 horas en los mismos hosts de destino, con simulacros de recuperación de red, broker, procesos y dispositivos durante la ejecución.

## Fuentes de datos y activos

- **Mapa de registros SDM630** — documento publicado por Eastron sobre el protocolo Modbus (mapa de registros Modbus V2, registros de entrada float32 IEEE-754). Las direcciones siguen ese documento; el orden de bytes y palabras big-endian es el valor por defecto del proveedor.
- **Datos históricos de operación** — suministrados por el sitio que realiza el despliegue. No se distribuye nada con el paquete, y no se usa ni se requiere ningún conjunto de datos público.
- **Capturas de la consola** — capturas de pantalla originales del software empaquetado ejecutándose contra los propios simuladores de protocolo del paquete. La configuración del simulador, el host de captura y los checksums se registran en `gallery/ATTRIBUTION.md` del paquete. No se incluye ningún recurso, marca de terceros ni imagen de stock.
- **Diagrama de arquitectura** — dibujado a partir de un IR de arquitectura estructurada; trabajo original, sin arte de terceros.
