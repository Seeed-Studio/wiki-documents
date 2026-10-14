---
description: Concentrador de datos industrial multiprotocolo en un gateway perimetral: fuentes OPC UA, Modbus TCP/RTU, BACnet/IP y MQTT unificadas en un único modelo de puntos, leídas y controladas mediante un único contrato MQTT versionado, con almacenamiento y reenvío hacia el norte
title: 'Concentrador de Datos Industrial Multiprotocolo: Hardware, Despliegue y Resultados Medidos'
keywords:
  - gateway de protocolos industriales
  - concentrador de datos multiprotocolo
  - OPC UA
  - Modbus TCP
  - Modbus RTU
  - BACnet/IP
  - broker MQTT
  - modelo de puntos unificado
  - almacenamiento y reenvío
  - publicación hacia el norte
  - reComputer R1000
  - reComputer R1100
  - reTerminal DM
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg
slug: /solutions/industrial-protocol-gateway
sidebar_position: 4
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/industrial-protocol-gateway/
generated_from: sensecraft-solutions@multi_protocol_gateway
---

:::caution[Aviso de uso]
Esta es una **capa de integración de protocolos y concentrador de datos**, no un sistema certificado de control o medición.
:::

## Qué hace esta solución

Un integrador de gestión de edificios, energía o equipos llega al sitio y descubre que los datos ya existen:
detrás de un controlador OPC UA, un medidor Modbus, un manejador de aire BACnet/IP y un gateway de sensores MQTT, cuatro
esquemas de direccionamiento diferentes y cuatro modos de fallo distintos. Esta solución reúne los cuatro en **un único
registro de puntos en un único host perimetral**, y proporciona al sistema superior un único contrato MQTT de lectura/escritura. En un sitio nuevo
conectas los controladores y asignas los puntos; la capa de protocolo permanece tal como está.

Despliega el contenedor, añade una fuente, deja que el descubrimiento proponga candidatos, confirma los puntos que quieres, verifica
su calidad y luego publícalos: localmente en el puerto 1883, hacia el norte a un broker en la nube en el 8883, o ambos.

- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/multi_protocol_gateway)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Los dispositivos existentes se conectan tal como están</h3>
                <p>Los dispositivos que ya hablan OPC UA, Modbus, BACnet/IP o MQTT no se sustituyen. Se integran en un único registro de puntos en un único host perimetral, y la capa superior obtiene un único contrato MQTT de lectura/escritura.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Descubre y luego confirma</h3>
                <p>La exploración OPC UA, el escaneo de unidades Modbus, el Who-Is de BACnet y la observación de temas MQTT proponen puntos candidatos; un punto pasa a estar gestionado una vez que lo confirmas. Donde el descubrimiento es incompleto, introduce los puntos manualmente.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>2.000 puntos a 349,99 eventos/s</h3>
                <p>Cuatro fuentes de 500 puntos cada una con intervalos de sondeo de 5/10 s, medidos en una ejecución de loopback de 180 s en una serie reComputer R2000.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>El flujo hacia el norte se rellena tras una caída</h3>
                <p>Los eventos se almacenan en cola localmente durante una caída de 300 s del broker en la nube; al reconectar, el relleno es completo (1,000) frente a un broker persistente y 0,9839 frente a uno en memoria.</p>
            </div>
        </li>
    </ul>
</div>

### Lo que muestra la consola

La página Access enumera cada fuente configurada con su estado de ejecución en vivo; después de que el primer controlador esté
cableado, esta es la página que indica si realmente se conectó:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-list-en-9837244f.png" alt="Página Access: protocolo, dirección y estado de ejecución en vivo para cada fuente"/>
</div>

La página Points es una tabla para cada punto gestionado, con calidad, filtrado y control por punto:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/points-en-477df2ca.png" alt="Página Points: valor actual, unidad, calidad y última actualización para cada punto gestionado"/>
</div>

La página Data Service configura el broker integrado y muestra el contrato de temas que publica:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/dataservice-en-2d03bdb5.png" alt="Página Data Service: configuración del broker integrado y el contrato de temas que publica"/>
</div>

Estas capturas muestran la consola ejecutándose contra controladores simulados y de banco. En el sitio, los puntos gestionados y la telemetría en vivo se rellenan directamente a partir de los mapas de registros de los controladores configurados.

El gateway viene en una robusta carcasa industrial para carril DIN que se engancha directamente a un carril estándar de 35 mm dentro de montantes eléctricos o armarios de planta, alimentado por 24 V CC.

## Qué hardware necesitas

Dos cosas: los dispositivos de campo que ya están instalados y un host que pueda alcanzar cada una de sus
redes.

**① Dispositivos de campo**: cualquier cosa que ya hable OPC UA, Modbus (TCP o RTU), BACnet/IP o MQTT. Nada en
el lado de planta se sustituye. Lo que debes tener por fuente: el endpoint y las credenciales OPC UA; el
ID de unidad Modbus, el mapa de registros, el orden de bytes y de palabras; una interfaz de red en la subred BACnet con las
difusiones alcanzándola; y, para MQTT, una asignación explícita de temas a puntos. Modbus RTU además necesita un
adaptador USB a RS-485 a menos que el host lleve RS-485 a bordo.

**② El host del concentrador de datos**: un host Docker sencillo, x86-64 o arm64, que determina qué interfaces de campo obtienes
sin adaptador y si alguien puede operar el sistema sin un portátil en el sitio:

| | Host | E/S de campo integradas | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/113991294-2_1.jpeg" alt="reComputer R1000" width="110" /> | [reComputer R1000 Serie](https://www.seeedstudio.com/reComputer-R1024-10-p-5923.html)<br/>Gateway IoT basado en CM4 | RS-485, Ethernet RJ45 | Todo está en Ethernet, con como máximo una línea RS-485 |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1100" width="110" /> | [reComputer R1100 Serie](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html)<br/>Gateway y controlador IoT basado en CM4 | RS-485, RS-232, DI/DO, Ethernet Gigabit, CAN | El sitio tiene dispositivos RS-232 o contactos secos DI/DO también |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image1.jpeg" alt="reTerminal DM" width="110" /> | [reTerminal DM Serie](https://www.seeedstudio.com/reTerminal-DM-p-5616.html)<br/>HMI de 10,1 pulgadas con los mismos servicios | RS-485, CAN, Ethernet (la variante CM4104032 añade RS-232, DI/DO, bornera) | No hay un ordenador permanente en la sala de planta; la configuración y las comprobaciones diarias se realizan en el dispositivo |

El límite de puntos de software es el mismo en los tres: **2.000 puntos, 50 de ellos escribibles**, aplicado en el código.
Una carga de trabajo de 2.000 puntos no superó la prueba de capacidad en la plataforma de clase CM4 del R1000 (configuración de 2 GB,
probado en una placa de desarrollo), así que elige el R1100 o el reTerminal DM a esa escala; para despliegues más pequeños en R1000
todavía no hay un recuento de puntos medido. El tamaño de la eMMC determina cuánta cola de caída hacia el norte
y cuánta historia de recepción de comandos permanece en la caja; el servicio en sí necesita unos 4 GB libres.

Otros prerrequisitos: Docker Engine 20.10 o más reciente, puertos 8280 y 1883 libres (o elige otros sin uso antes de
desplegar) y alcance de red desde el host a cada red de protocolo.

### Límites de selección negativa

- **Interfaces y número de puntos**: Si el sitio requiere RS-232, señales DI/DO o supera los 1.000 puntos, evita el R1000 (un solo RS-485); elige R1100 o reTerminal DM.
- **Sin pantalla frente a interfaz en el dispositivo**: Si la sala de planta carece de PC y los operadores necesitan configuración in situ, evita los gateways sin pantalla y selecciona el reTerminal DM de 10,1 pulgadas.

## Cómo desplegar en el sitio

### Uno: instalar el hardware: montaje en armario, alimentación y cableado de bus

1. **Montaje en carril DIN y fuente de alimentación**:
   - Fija el gateway a un carril DIN estándar de 35 mm dentro del armario de control o caja de montante utilizando su soporte de montaje integrado.
   - Fuente de alimentación: CC industrial regulada de 12 V/24 V (se admite un amplio rango de entrada de CC de 9–36 V).
   - **Puesta a tierra contra sobretensiones**: Conecta el terminal de tierra de protección (PE) del chasis del gateway al bus de tierra equipotencial del armario utilizando un cable de tierra (≥2,5 mm²) para suprimir el ruido electromagnético de motores y variadores de frecuencia (VFD).

2. **Red y subred BACnet/IP**:
   :::tip[El host necesita una interfaz en la subred BACnet]
   El descubrimiento BACnet/IP se basa en difusión. El host necesita una interfaz en la subred BACnet, y las difusiones no deben ser filtradas por los switches de red. Los despliegues remotos en Linux deben usar red de host (`network_mode: host`). Las configuraciones en puente de Docker Desktop pueden descartar difusiones UDP; en ese caso, especifica manualmente las IP de los dispositivos de destino.
   :::

3. **Cableado Modbus RTU / RS-485 y paso directo del puerto serie**:
   - **Cableado del bus**: Usa cables de par trenzado apantallado (STP). Conecta A+ y B- a los terminales correspondientes del controlador. Conecta a tierra la lámina de apantallamiento solo en el lado de la pasarela. Mantén una topología en cadena (daisy-chain) sin ramas en estrella; termina ambos extremos del bus con resistencias de 120Ω.
   - **Paso directo del puerto serie en Docker**: La configuración predeterminada de Docker no monta los dispositivos serie del host. Al usar un adaptador USB-a-RS-485 o un puerto serie integrado, asigna explícitamente el nodo de dispositivo en `docker-compose.yml`:
     ```yaml
     services:
       gateway:
         devices:
           - "/dev/ttyUSB0:/dev/ttyUSB0"  # Or /dev/ttyAMA0 for on-board port
         group_add:
           - "20"  # dialout GID to allow non-root container serial access
     ```
   Antes de habilitar escrituras en producción, verifica la lectura con IDs de esclavo reales y direcciones de registro en la consola local.

### Dos: instala el software e incorpora la primera fuente

Los pasos por dispositivo y los paquetes de aplicación están en la página del diseño de referencia; elige una configuración para
tu sitio y descárgala.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/multi_protocol_gateway" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descárgala 🖱️</font></span></strong>
    </a>
</div><br />

1. **Despliega**: el destino local se instala en la máquina que ejecuta SenseCraft Solution; el destino remoto
   se instala por SSH en una reComputer R2000 serie o reTerminal DM en la red del controlador.
2. **Crea el primer administrador**: no se requiere un token de registro en la primera ejecución.
3. **Añade una fuente**: OPC UA, Modbus, BACnet/IP o MQTT, luego ejecuta el descubrimiento donde esté disponible: exploración OPC UA,
   escaneo de unidades Modbus TCP, BACnet Who-Is, observación de temas MQTT. Cada uno produce **candidatos**.
   El asistente solicita la dirección y el intervalo de sondeo por protocolo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/multi_protocol_gateway/access-wizard-step1-en-7a3d57a8.png" alt="Paso uno del asistente de acceso: elige el protocolo, rellena la dirección y el intervalo de sondeo"/>
</div>

4. **Confirma los puntos**: solo los candidatos confirmados se convierten en puntos gestionados. Cuando el descubrimiento es incompleto o
   no está disponible, introduce los puntos a mano.
5. **Verifica la calidad antes de conceder acceso de escritura**: comprueba primero los valores en vivo y la calidad por punto en la página Points.
   6. **Configura el servicio de datos**: el broker integrado y, opcionalmente, el publicador hacia el norte.

Dificultad **intermedia**, unos **15 minutos** hasta una consola en ejecución; incorporar el primer controlador y
comprobar la calidad de sus datos lleva más tiempo.

## Interfaces disponibles

Los datos salen del host a través de tres interfaces:

- **Operadores**: la consola del navegador en HTTP **8280**: gestión de fuentes, tabla de puntos, acuses de
  recibo de comandos, gestión de plugins.
  - **Sistemas in situ (SCADA, plataforma energética, tu propio servicio)**: suscríbete al broker integrado en
  **1883**. La telemetría de puntos llega bajo `missionpack/v1/{gateway}/points/{point_id}`, con temas de presencia,
  comandos y acuses de recibo bajo el mismo contrato.
  - **Sistemas en la nube o centrales**: habilita la publicación hacia el norte a un broker externo en **8883**. La telemetría
  se agrupa en lotes con QoS 1, el estado de salud por fuente y el estado de última voluntad se conservan, y un latido QoS 0 se ejecuta
  en paralelo. **La imagen publicada actualmente no tiene publicador hacia el norte.**

`{gateway}` es el id de la pasarela que estableces en el momento del despliegue, de modo que varios hubs puedan publicar en un solo broker sin
colisionar.

### El contrato de temas

| Tema / puerto | Carga útil | Retenido |
|---|---|---|
| HTTP `8280` `/` | Consola del navegador | — |
| `missionpack/v1/{gateway}/points/{point_id}` (1883) | Telemetría de puntos versionada: valor, calidad, marcas de tiempo, revisiones | No |
| temas de presencia / comando / acuse de recibo con el mismo prefijo (1883) | Presencia de fuentes y pasarela, comandos emitidos y el acuse de recibo de cada uno | Presencia retenida |
| `missionpack/v1/{gateway}/telemetry` (8883) | Sobre de telemetría agrupada hacia el norte, QoS 1 | No |
| temas de salud por fuente y de última voluntad (8883) | Salud de la fuente y estado de la pasarela | Sí |

El sobre hacia el norte es `missionpack.northbound.v1`:

__CODE_LINE_PLH__
```json
{
  "schema_version": "missionpack.northbound.v1",
  "message_id": "0f3a...",
  "gateway_id": "gw-01",
  "created_at": "2026-09-05T05:01:19.045514Z",
  "samples": [
    {
      "source_id": "ahu-bacnet",
      "point_id": "analog-value:12",
      "ts": "2026-09-05T05:01:18.900000Z",
      "quality": "good",
      "value": 23.5,
      "source_revision": 4,
      "point_revision": 7
    }
  ]
}

**`source_revision` y `point_revision`**: la revisión cambia cuando se vuelve a asignar un punto, lo que distingue un
cambio de configuración de un cambio de valor de campo. Un consumidor que no los comprueba une datos de
antes y después de un cambio de configuración en una sola serie.

Dos límites del contrato:

- **El protocolo es MissionPack v1; esta versión no es compatible con Sparkplug B**, por lo que una aplicación
  host Sparkplug necesita un paso de traducción.
  - **MQTT simple es solo para telemetría.** Habilita TLS y una identidad de control autorizada antes de permitir
  comandos remotos.

### Alcance del protocolo hacia el sur

| Protocolo | Descubrimiento | Lectura | Escritura | No implementado |
|---|---|---|---|---|
| OPC UA | Exploración del espacio de direcciones | Sí | Sí | — |
| Modbus TCP | Escaneo de unidades | Sí | Sí | — |
| BACnet/IP | Who-Is | ReadProperty | WriteProperty con prioridad, liberación con `Null` | Suscripción COV, registro BBMD / Foreign-Device, BACnet MS-TP |
| MQTT (como fuente) | Observación de temas | Sí, mediante asignación explícita de tema a punto | — | Asignación implícita; los temas deben asignarse a mano |

## Rendimiento y datos medidos {#rendimiento-y-datos-medidos}

La carga se generó con un **simulador de cuatro protocolos** y se midió sobre loopback en un dispositivo por nivel; no hay datos de despliegue en sitio.

### Ciclo de actualización a 2.000 puntos

Condiciones para los tres niveles: 2.000 puntos en 4 fuentes (500 cada una), duración de la ejecución según se indica, solo loopback, en una reComputer R2000 serie (arm64).

| Nivel | Intervalos de muestreo | Resultado |
|---|---|---|
| Estable | OPC UA/Modbus 5 s, BACnet 10 s, ejecución de 180 s | **349,99 eventos/s** frente a un objetivo de 350,0 (99,99%), predicción 0,939 ciclos/s, pico de RSS del grupo de procesos 217,3 MiB, pico de CPU de 1 minuto 22,1%, 0 deltas de muestras fallidas |
| Degradado | OPC UA/Modbus 2 s, BACnet 4 s | Ejecutó los 900 s completos a **718,9 eventos/s** (99,1%), pero la predicción cayó a 0,872 ciclos/s y la compuerta falló con `PREDICTION_CYCLE_RATE_LOW` |
| Fallo | OPC UA/Modbus 1 s, BACnet 2 s | `PREDICTION_WRITE_CHAIN_TIMEOUT` a los **148,2 s** frente a un objetivo de 900 s; 2 puntos de entrada Modbus ya faltaban en el primer ciclo de calentamiento |

Reproducir: commit upstream `b5fe4cc` con el simulador de cuatro protocolos; los registros de ejecución en bruto se citan en el `description.md` del paquete upstream.

### Recuperación tras una caída hacia el norte

Condiciones: una caída de 300 s del broker en la nube (un proceso o contenedor de broker detenido, no un enlace degradado) a unos 350 eventos/s, límites de spool 512 MB / 86.400 s, ejecución de 1.800 s, en un host arm64.

| Métrica | Valor | Condiciones |
|---|---|---|
| Crecimiento del spool durante la caída | 60,1 KB/s de bytes en cola; 18,33 MB / 325 lotes en el pico | Se vació hasta cero tras la reconexión |
| Reinicio del broker hasta el primer mensaje reproducido | 1,2–2,2 s | Medido de reinicio a primera reproducción, un límite superior de CONNACK a primera reproducción |
| Integridad de la reproducción, broker persistente | 1,000 | Sesión de suscriptor duradera, intersección del conjunto de IDs de mensaje |
| Integridad de la reproducción, broker en memoria | 0,9839 ▲ | Misma caída de 300 s |

▲ Los 58 mensajes que faltaban llegaron 0,496–1,058 s después del reinicio del broker, antes del SUBACK del suscriptor de prueba a los 1,069 s: una ventana ciega antes de que existiera la suscripción; la pasarela no los descartó.

Reproducir: commit upstream `f831bae`; los registros de ejecución en bruto se citan en el `description.md` del paquete upstream.

### Tiempo de ejecución y parámetros clave

El tiempo de ejecución se distribuye como una imagen de contenedor (x86-64 y arm64) desde `sensecraft-missionpack.seeed.cn`; aún no hay un repositorio de código público.

- **Límite de puntos**: 2.000 puntos gestionados, 50 de ellos escribibles, aplicado en código.
- **Intervalo de muestreo**: decide si 2.000 puntos se ejecutan de forma estable; consulta la tabla anterior: OPC UA/Modbus 5 s con BACnet 10 s pasa, mientras que 2 s / 4 s ya falla.
- **Spool hacia el norte**: los límites de tamaño y antigüedad (512 MB / 86.400 s en las ejecuciones medidas) determinan cuánto tiempo de caída puede absorber el host; el tamaño de lote y el latido QoS 0 también son configurables.

### Degradación conocida

- **Cada paso de muestreo más estricto** mueve el resultado de aprobado a degradado y luego a abortado; todas las métricas de fallo provienen del plugin de predicción (`PREDICTION_*`).
- **El plugin de predicción tiene un límite estructural de tasa (no corregido)**: el bucle duerme un intervalo fijo después de cada ciclo, por lo que su tasa es `1/(1.0 + t_cycle)`. A 2.000 puntos `t_cycle` es de unos 0,119 s, situando el límite cerca de 0,894 ciclos/s, por debajo de la compuerta de 0,90 que requiere la prueba de resistencia.

### Próximos pasos

- Lectura/escritura con lectura independiente contra dispositivos reales OPC UA, Modbus TCP, Modbus RTU (USB-a-RS-485) y BACnet/IP en una reComputer R10 serie o reTerminal DM.
- Una ejecución desatendida de 72 horas en los mismos hosts de destino, con simulacros de recuperación de red, broker, procesos y dispositivos durante la ejecución.

## Fuentes de datos y activos

- **Resultados medidos**: carga del simulador de cuatro protocolos, en una reComputer R2000 serie (arm64) y una estación de trabajo Linux x86_64, commits upstream `b5fe4cc` y `f831bae`. Reproducido desde el propio
  `description.md` del paquete upstream; los registros de ejecución en bruto residen en el proyecto upstream.
  - **Imágenes de producto y enlaces**: catálogo de productos de Seeed (`media-cdn.seeedstudio.com`), SKUs que coinciden con los
  paquetes en la página del diseño de referencia.
  - **Diagrama de arquitectura**: dibujado a partir de la topología `solution.yaml` upstream; es un
  esquema de la composición del dispositivo, no una captura de pantalla.
  - La imagen del contenedor de tiempo de ejecución se distribuye desde `sensecraft-missionpack.seeed.cn`, no desde este wiki.
- The runtime container image is distributed from `sensecraft-missionpack.seeed.cn`, not from this wiki.
