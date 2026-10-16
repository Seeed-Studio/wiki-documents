---
description: "Localizar personas y activos en interiores y exteriores en un solo mapa con balizas BLE, GNSS y LoRaWAN: qué dispositivos necesitas, cómo se distribuye un sitio, cómo integrar el flujo WebSocket y datos medidos en el servidor"
title: 'Posicionamiento interior y exterior con BLE + LoRaWAN: implementación, despliegue y resultados medidos'
keywords:
  - sistema de posicionamiento en interiores
  - posicionamiento interior y exterior
  - posicionamiento con balizas BLE
  - seguimiento de activos con LoRaWAN
  - alarma de geovalla
  - georreferenciación de plano de planta
  - mapa base sin conexión
  - PMTiles
  - SenseCAP T1000
  - SenseCAP BC03
  - SenseCAP M2 gateway
  - ChirpStack
  - WebSocket
image: https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png
slug: /solutions/indoor-outdoor-positioning-ble-lorawan
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/indoor-outdoor-positioning-ble-lorawan/
generated_from: sensecraft-solutions@indoor_positioning_ble_lorawan
---

:::caution[Aviso de uso]
Este **no es un sistema certificado de seguridad**: los uplinks LoRaWAN se pueden perder, GNSS no funciona en interiores y el posicionamiento BLE se degrada cerca del metal, por lo que una posición puede llegar tarde, ser errónea o faltar. No lo uses como la única salvaguarda para la seguridad de las personas.
:::

## Qué hace esta solución

Un sitio suele tener tanto un edificio como un área exterior, y la pregunta es la misma en ambos: dónde está esa carretilla elevadora, ese instrumento, esa persona, ahora mismo. Las balizas BLE alimentadas por batería marcan posiciones en el interior; el GNSS propio del rastreador toma el relevo en el exterior; ambos regresan por LoRaWAN, y un panel web los dibuja en un solo mapa. Se puede georreferenciar un plano de planta sobre el mapa exterior, de modo que un recorrido que empieza en un edificio y continúa en el patio permanezca en una sola pantalla.

- Implementación de código abierto: [github.com/Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>
            </div>
            <div class="info-content">
                <h3>Sin cableado en el lado de sensado</h3>
                <p>Las balizas funcionan con batería y se pegan a una pared; un rastreador informa durante meses con una sola carga. Lo que necesita alimentación de red y una toma de red es la gateway y el host.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Interior y exterior son un solo mapa, con cambio automático</h3>
                <p>Cuando un rastreador entra o sale de un edificio, una máquina de estados en el servidor cambia la capa; nada que conmutar a mano, y un rastreador de pie junto a una ventana no cambia de ida y vuelta.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto, los datos permanecen en tu host</h3>
                <p>El código fuente de la aplicación está en GitHub y se ejecuta como una imagen Docker en tu propio host. Lo único que llega a internet es el mapa base, que se puede sustituir por un archivo PMTiles sin conexión.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Capacidad del servidor medida</h3>
                <p>200 etiquetas concurrentes con P95 extremo a extremo de 828 ms con 0% de pérdida; 500 etiquetas con P95 de 2,35 s. Probado con uplinks reproducidos, sin rastreador ni gateway conectados.</p>
            </div>
        </li>
    </ul>
</div>

### Salida en vivo

La capa de interiores dibuja los rastreadores sobre el plano de planta registrado:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-indoor-22a6ee12.png" alt="Capa de interiores del panel: rastreadores sobre el plano de planta registrado, lista de etiquetas a la izquierda"/>
</div>

La capa de exteriores es la misma página sobre el mismo WebSocket, con teselas de mapa como base:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/map-outdoor-8b31ec6e.png" alt="Capa de exteriores del panel: los mismos rastreadores sobre teselas de mapa"/>
</div>

Un rastreador moviéndose entre ambas:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/web-example-fdbff3c1.gif" alt="El panel cambia de capa por sí solo cuando un rastreador se mueve entre interiores y exteriores"/>
</div>

El cliente en el teléfono muestra los mismos datos:

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/miniprogram-example-34c773a6.gif" alt="Los mismos datos de posición en el cliente mini-programa"/>
</div>


El panel es una sola página en `/web/map` con un cambio de capa explícito entre **Indoor** y **Outdoor**; `/web/map?layer=outdoor` es un enlace directo adecuado para una pantalla mural y se suscribe al mismo WebSocket. Un rastreador se dibuja en exactamente una de las dos vistas a la vez. Cuál de ellas se decide mediante la máquina de estados, y la decisión se transporta en el mensaje como `position.coordSystem` — `metric` para un `{x, y}` de plano de planta, `wgs84` para un `{lat, lon}`.

## Qué hardware necesitas

Tres tipos de dispositivo en el sitio; el número de balizas y rastreadores escala con el despliegue.

**① Balizas BLE**: la referencia de posición en interiores. Alimentadas por batería, montadas en pared, sin cableado. Las áreas cubiertas solo por GNSS (patios, carreteras, aparcamientos) no necesitan ninguna.

**② El rastreador**: llevado por la persona o fijado al activo. Escanea BLE en interiores y usa su propio GNSS en exteriores, y tiene un botón SOS.

**③ La gateway LoRaWAN**: recoge los uplinks y los reenvía a un servidor de red. Pide la gateway y el rastreador para la misma banda regional.

| | Dispositivo | Capacidad nominal | Cuándo elegirlo |
|---|---|---:|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-bc03-bluetooth-beacon.jpg" alt="SenseCAP BC03" width="110" /> | [SenseCAP BC03 Indoor Bluetooth Beacon](https://www.seeedstudio.com/Indoor-Bluetooth-Beacon-BC03-p-6732.html)<br/>Referencia de posición en interiores, Bluetooth LE 5.0 | 2–3 m con 3+ por zona; nivel de habitación con 1 | Cualquier área interior que deba resolverse mejor que “en el edificio” |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114993073-sensecap-card-tracker-t1000-a.jpg" alt="SenseCAP T1000-A" width="110" /> | [SenseCAP LoRaWAN Card Tracker T1000-A](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html)<br/>Escaneo BLE, GNSS, detección de movimiento, SOS | Uno por persona o activo rastreado | La tarjeta identificadora o etiqueta de activo; la misma unidad cubre interiores y exteriores |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/114992981_eu868_1.jpg" alt="SenseCAP M2 Gateway" width="110" /> | [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)<br/>SX1302, variantes de frecuencia regional | Hasta 2 km en línea de vista; 100–200 rastreadores | Una o dos por sitio; sáltala si ya ejecutas LoRaWAN |

Todas las cifras de capacidad de la tabla son **nominales**, procedentes de las hojas de datos de los dispositivos y de la práctica de despliegue con este hardware. La precisión de las balizas depende de la instalación descrita más abajo.

Además de los dispositivos necesitas un host para la aplicación (cualquier máquina que ejecute Docker; las mediciones del lado del servidor usaron una unidad reComputer J30 series como host arm64 sencillo), un servidor de red — **SenseCAP OpenStream** o tu propio **ChirpStack** — y, a menos que construyas el mapa base sin conexión, acceso a internet en el host para las teselas ráster de OpenStreetMap.

### Límites de selección negativa

- **Seguimiento continuo submétrico**: la precisión de las balizas BLE es de 2–3 metros. Para navegación AGV de alta velocidad o maquinaria automatizada que requiera seguimiento continuo submétrico, elige UWB en lugar de BLE.
- **Interbloqueos de seguridad en tiempo real**: la comunicación LoRaWAN implica latencia y restricciones de ciclo de trabajo con un umbral de 15 minutos sin conexión; no la uses para interbloqueos de seguridad de subsegundo.

## Despliegue en el sitio

### 1. Instalar el hardware

:::tip[El diseño de balizas determina la precisión en interiores]
Monta las balizas a **2,5–3 m** de altura con **5–10 m** de separación (la separación recomendada de BC03), y añade balizas donde haya estanterías metálicas. **Tres o más balizas por zona** es lo que supone la cifra nominal de 2–3 m; una sola baliza por zona resuelve a nivel de habitación. Registra la **dirección MAC y ubicación** de cada baliza: las posiciones en interiores se calculan a partir del mapeo baliza–zona, así que actualiza el mapeo siempre que se mueva una baliza, o cada posición derivada de ella se desplazará.
:::

Dimensiona las gateways según la cobertura: el alcance nominal en línea de vista es de 2 km, por lo que una o dos cubren un sitio típico; si añadir una segunda depende de las paredes y la distancia, no del número de tags. La gateway se ofrece en SKUs por banda (US915 / EU868 / AS923, etc.); confirma la **banda de frecuencia** para el país antes de hacer el pedido y haz que coincida con la del rastreador.

### 2. Instala el software: 7 pasos

Los pasos por dispositivo y los paquetes de aplicación están en la página del diseño de referencia. Resumen:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga el paquete 🖱️</font></span></strong>
    </a>
</div><br />

1. **Despliega las balizas BLE**: colócalas, móntalas y registra las direcciones MAC.
2. **Configura la gateway LoRaWAN**: ponla en línea contra SenseCAP OpenStream o tu ChirpStack.
3. **Despliega la aplicación de posicionamiento**: un despliegue Docker, dirigido a la máquina en la que estás o a un host remoto por SSH.
4. **Configura y activa el rastreador**: únelo a la red y establece el intervalo de uplink.
5. **Georreferencia el plano de planta**: sube el plano y luego establece el origen, la rotación y la escala para que caiga en el lugar correcto del mapa exterior. La georreferenciación y las geocercas están ambas en la página de configuración:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/indoor_positioning_ble_lorawan/config-7ff6962d.png" alt="Página de configuración: carga del plano de planta, origen y rotación, y la lista de geocercas"/>
</div>

6. **Configura una alarma de geocerca**: dibuja la cerca en WGS84 y asígnale una regla de alarma.
7. **Abre el panel de control**: comprueba que aparece un rastreador, se mueve y dispara las alarmas que configuraste.

Dificultad **intermedia**, unos **60 minutos**. Los pasos 5 y 6 son solo de configuración de software y no necesitan hardware adicional.

:::caution[Default login]
La imagen está disponible para linux/arm64 y linux/amd64. El inicio de sesión predeterminado del panel es `admin` / `12345678`; cámbialo en Configuration → Authentication después del primer inicio de sesión.
:::

## Interfaces disponibles

Todo lo que expone la aplicación se sirve en el puerto **5173** del host donde la desplegaste. Tres formas de acceso, según quién integre.

- **Una pantalla mural o una segunda pantalla**: abre `/web/map?layer=outdoor` (o `?layer=indoor`). Es la misma página y el mismo WebSocket, así que no hay que configurar nada adicional.
- **Un sistema existente de seguridad, despacho o asistencia**: suscríbete al WebSocket y actúa sobre dos tipos de mensajes: `tracker_sos` para el botón de emergencia, y `tracker_checkin` / `tracker_position_detection` cuando lleven un bloque `geofence` con `transition: enter` o `exit`. Esos son los eventos; el resto es telemetría.
- **Tu propio servicio**: toma la carga útil completa. Cada actualización lleva o bien una posición métrica en un plano de planta o una posición WGS84, etiquetada por `coordSystem`, y los endpoints REST te permiten crear cercas y leer o escribir los parámetros de georreferenciación de forma programática.

### Interfaz y carga útil completas

| Interfaz | Endpoint | Carga útil |
|---|---|---|
| WebSocket | `ws://<host>:5173/ws` | `tracker_update` con `position` = `{x, y, coordSystem: "metric"}` o `{lat, lon, accuracy, coordSystem: "wgs84"}`; `tracker_checkin` / `tracker_position_detection` llevan un bloque `geofence` adicional en enter/exit; también `tracker_sos` y `tracker_offline` |
| REST | `GET/PUT /api/configuration/dashboard/maps/{mapName}/registration` | `{origin_lat, origin_lon, rotation_deg, scale}`. Rechaza `\|lat\|` > 85° y `scale` ≤ 0. Se requiere sesión de administrador; una sesión de invitado recibe **403** |
| REST | `POST /api/geofences`, `POST /api/events` | Geometría de la cerca (polígono GeoJSON, o un punto más `radius_m`) y la regla de alarma que la referencia |
| Uplink LoRaWAN de entrada | SenseCAP OpenStream, o un tema MQTT de ChirpStack | La asignación de campos está en la guía de despliegue |

Una alarma de geocerca viaja en el mismo mensaje que un check-in en lugar de en un canal propio:

```json
{"type": "tracker_checkin", "data": {"2CF7F1C0530004AD": {
  "timestamp": 1788582647214, "map": "Plant A",
  "geofence": {"id": 1, "name": "Plant A", "transition": "enter"},
  "position": {"lat": 22.5362, "lon": 113.9432, "accuracy": null, "coordSystem": "wgs84"},
  "last_detected_beacons": []}}}
```

**Dos campos que hay que manejar con cuidado**: ramifica según `coordSystem`, no según si `lat` está presente, porque el mismo tipo de mensaje puede llevar cualquiera de las dos formas de coordenadas. `accuracy` es **siempre `null`** en este hardware (ni el uplink de SenseCAP ni el de ChirpStack llevan una medida de precisión GNSS); trátalo como desconocido.

## Rendimiento y datos medidos {#appendix}

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>Solution_IndoorPositioning_H5</font></span></strong>
    </a>
</div><br />

Todo lo siguiente se midió en el lado del servidor: se publicaron uplinks sintéticos en un broker MQTT local y los resultados se capturaron desde el WebSocket del panel, sin rastreador T1000 ni gateway en el bucle. La aplicación se ejecutó en una unidad reComputer J30 serie (como un host arm64 simple, GPU sin usar), 2–4 minutos por nivel.

### Capacidad y latencia

| Métrica | Medido | Condiciones |
|---|---|---|
| Capacidad, estable | 200 tags concurrentes, P95 extremo a extremo 828 ms, 0% de pérdida de uplink | 1 uplink por tag cada 30 s, 800 uplinks, 2 min |
| Capacidad, degradando | 500 tags, P95 2,35 s, 0% de pérdida | Igual, 2000 uplinks, 2 min; solo se incumple el presupuesto de latencia de 2 s |
| Capacidad, a 1000 tags | P95 4,1 s, 0% de pérdida, proceso aún sirviendo | Igual; aún sirviendo con normalidad, la carga no se forzó más |
| Frecuencia de actualización | 50 tags con un intervalo de uplink de 2 s, P95 220 ms, 0% de pérdida en 4500 uplinks | 3 min; intervalos de 30 / 10 / 5 s también estables con P95 89 / 163 / 146 ms |
| Latencia de alarma SOS | P50 24 ms, P95 29 ms, máx. 29 ms, n=20 | Un solo tag, sin carga concurrente; marca de tiempo del uplink hasta la difusión por WebSocket |
| Detección de desconexión | 903 s y 950 s | 2 repeticiones; ventana esperada [900 s, 960 s] a partir del umbral de 15 min y sondeo de 60 s |

La capacidad y la frecuencia de actualización cubren solo el servidor; la rapidez con la que puede informar un rastreador depende del intervalo de uplink y del ciclo de trabajo LoRaWAN.

Reproducir: `runs/2026-09-05-orin-nano/boundary.capacity.yaml`, `boundary.update_frequency.yaml`, `boundary.sos_latency.yaml`, `boundary.offline_latency.yaml` en el upstream `indoor_positioning_ble_lorawan` (código de la aplicación `feature/outdoor` @ `443bce6`)

### Geocerca y georreferenciación

| Métrica | Medido | Condiciones |
|---|---|---|
| Latencia de alarma de geocerca | P50 14 ms, máx. 14 ms, 2 alarmas | Herramienta de reproducción y servidor en el mismo host sobre loopback, un solo tag, 17 uplinks |
| Histéresis de geocerca | 6 cambios de entrada y salida en la línea de la cerca produjeron **0 alarmas**; enter y exit se dispararon cada uno en el tercer punto consecutivo | Igual |
| Error de georreferenciación | ≤ 0,21 m en cualquier lugar dentro de 2 km del origen, `\|lat\|` ≤ 60° | Peor caso de un barrido de acimut, cada 15°, radios 500 / 1000 / 2000 m, lat0 ∈ {0, 22.5, 45, 60}; **el presupuesto era 0,7 m**; solo matemáticas de proyección, sin trabajo de campo |

Reproducir: `runs/2026-09-05-geofence-smoke/results.md`, `runs/2026-09-05-georef/results.md`

### Tiempo de ejecución y parámetros clave

El rastreador solo informa de lo que observó (las balizas configuradas que vio, o una solución GNSS); el servidor resuelve eso en una posición. Estos tres parámetros del lado del servidor marcan el ritmo del cambio interior/exterior y de las alarmas:

- **Cambio interior ↔ exterior**: salir al exterior requiere 3 soluciones GNSS en 20 s y no ver ninguna baliza configurada durante 15 s; volver al interior requiere dos escaneos consecutivos, cada uno viendo 2 o más balizas configuradas. Un rastreador junto a una ventana no cambia de estado continuamente.
- **Transición de geocerca**: `enter` / `exit` solo se dispara tras 3 puntos consecutivos en 10 s. En modo geo el campo `time_range` de una regla de alarma no tiene efecto; esta confirmación sustituye a un intervalo de tiempo configurado en la interfaz.
- **Detección de desconexión**: ningún uplink durante 15 min, sondeo de 60 s, **codificado de forma rígida**.
- **Mapa base sin conexión**: un sitio sin internet construye un archivo PMTiles local con `go-pmtiles extract` (solo descarga las teselas dentro del cuadro delimitador); genera el archivo y cárgalo una vez antes de la entrega.

### Degradación conocida

- **La precisión en interiores sigue el diseño de las balizas.** La cifra de 2–3 m es nominal (wiki de BC03) y supone 3 o más balizas por zona a 2,5–3 m de altura y 5–10 m de separación. Una baliza por zona da nivel de habitación. El estanteriado metálico degrada la trilateración; añade balizas allí.
- **La latencia crece con el número de tags**: el P95 extremo a extremo es 2,35 s con 500 tags y 4,1 s con 1000.
- **El error de georreferenciación crece con el radio y la latitud**: el alcance útil es de unos 2 km, y el API rechaza `\|lat\|` por encima de 85°.
- **`accuracy` y `alt` no llevan datos**: la lógica que ramifica según la precisión siempre toma la ruta nula en este hardware, y el motor de geocercas trata una `accuracy` ausente como aprobada.

## Procedencia de datos y recursos

- **Datos medidos**: todas las cifras bajo Rendimiento y datos medidos provienen de `description.md` de `indoor_positioning_ble_lorawan` en el repositorio upstream `sensecraft-solutions`, que cita los archivos de informe por ejecución por ruta. Los datos son trazas de reproducción sintéticas generadas para las ejecuciones; no se involucran datos de sitios de clientes.
- **Device EUIs** que se muestran en las capturas de pantalla y trazas son los sintéticos usados por la herramienta de reproducción.
- **Teselas del mapa base** en cualquier captura de pantalla exterior son © colaboradores de OpenStreetMap, con licencia [ODbL](https://www.openstreetmap.org/copyright). Esta atribución viaja con la página.
- **Planos de planta** en las capturas de georreferenciación son imágenes de prueba sintéticas (un plano de 1000×800 px en un mapa de demostración de 50 m × 40 m), creadas para la ejecución de evaluación y eliminadas después.
- **Código fuente de la aplicación** está en [Seeed-Solution/Solution_IndoorPositioning_H5](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5); consulta el repositorio para conocer sus términos de licencia antes de enviar un producto derivado.
- **Capturas del panel y GIFs de demostración**: tomadas de la propia interfaz de la aplicación (`docs/ui/` y `assets/` en `solution-indoor-positioning`). La capa exterior del mapa base son teselas de OpenStreetMap, atribuidas bajo ODbL; la procedencia está en `gallery/ATTRIBUTION.md` del paquete upstream.
