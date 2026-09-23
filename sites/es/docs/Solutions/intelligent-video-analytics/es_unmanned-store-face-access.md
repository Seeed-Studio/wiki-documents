---
description: Control de acceso facial para una puerta sin personal: qué hardware necesitas, cómo desplegarlo, qué interfaces expone y tiempos medidos de activación de la biblioteca de rostros, apertura de puerta y rechazos
title: 'Acceso facial para tienda desatendida: hardware, distribución de la biblioteca de rostros y límites medidos'
keywords:
  - control de acceso facial para tienda desatendida
  - acceso a puerta con reconocimiento facial
  - prueba de vida pasiva anti-spoofing
  - distribución versionada de biblioteca de rostros
  - desbloqueo de relé por MQTT
  - registro de auditoría encadenado por hash
  - relé GPIO de reCamera Pro
  - nodo de relé MQTT XIAO ESP32-S3
  - licenciamiento de InsightFace buffalo_l
  - diseño de referencia de control de acceso
image: https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg
slug: /solutions/unmanned-store-face-access
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-23'
url: https://wiki.seeedstudio.com/es/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[Aviso de uso]
No es un producto de seguridad certificado ni un sistema de seguridad vital. Los pesos de referencia de rostros (InsightFace `buffalo_l`) tienen licencia solo para investigación no comercial; un despliegue comercial necesita un modelo con licencia comercial.
:::

## Qué hace esta solución

Una cámara en una puerta detrás de la cual no hay nadie reconoce un rostro, exige que se supere una prueba de vida
pasiva, comprueba a la persona contra la biblioteca de rostros actual, el horario
y la lista de bloqueo y — solo si todo eso se cumple — activa un pulso en un relé que conmuta una cerradura
alimentada por su propia fuente de 12/24 V. Cada decisión, tanto permitida como denegada, se publica
en MQTT y se añade a un registro de auditoría encadenado por hash que la consola puede verificar.

Encaja en la entrada de personal, almacén o puerta trasera de una tienda sin personal o con personal parcial;
en una oficina compartida donde la plantilla cambia semanalmente y el registro debe ser autoservicio; en una
sala de equipos donde el registro de quién pasó importa más que el rendimiento; y en un
sitio que ya tiene cámaras RTSP en la puerta y no quiere sustituirlas.

- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/unmanned_store_access)
- Repositorio ascendente: no publicado; el código está en un repositorio interno.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Abre sin conexión (tres de cinco preajustes)</h3>
                <p>El reconocimiento, la prueba de vida, la decisión y el desbloqueo ocurren todos en la puerta. Un dispositivo que pierde la nube sigue abriendo con la última biblioteca de rostros que cargó correctamente. En los dos preajustes con relé por MQTT, la señal de desbloqueo cruza la red hasta el relé.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
            </div>
            <div class="info-content">
                <h3>Biblioteca de rostros distribuida y verificada automáticamente</h3>
                <p>Los dispositivos consultan si hay nuevas versiones, descargan por fragmentos, comprueban el SHA-256 por archivo y la firma del manifiesto, y luego cambian de forma atómica. Cualquier fallo mantiene la versión anterior. Activación medida en una reCamera estándar: p50 491,6 ms.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Un rollback no puede restaurar a una persona eliminada</h3>
                <p>Eliminar a alguien produce una nueva versión sin esa persona y escribe una barrera de eliminación. Un rollback a cualquier versión que aún contenga a esa persona se rechaza por nombre.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Cada decisión se audita</h3>
                <p>Las decisiones permitidas y denegadas van tanto a MQTT como a un registro de auditoría encadenado por hash. Editar cualquier registro pasado rompe la cadena, y la comprobación de cadena de la consola lo informa.</p>
            </div>
        </li>
    </ul>
</div>

### Lo que ve el dispositivo en la puerta

Reconocimiento en una reCamera Pro: el recuadro del rostro lleva el id de la persona coincidente y la decisión para ese fotograma. Sin nadie delante, la vista es solo el encuadre.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="Vista de aplicación de reCamera Pro: recuadro de rostro y la decisión para ese fotograma"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="El mismo montaje sin nadie presente, usado para comprobar encuadre y exposición"/>
</div>

## Qué hardware necesitas

Tres roles de dispositivo en la puerta, más un host en la nube o en las instalaciones.

**① La cámara en la puerta.** Puede ser el propio sensor del dispositivo (reCamera Pro o
reCamera estándar) o una cámara RTSP existente que alimenta a un host separado. Móntala aproximadamente a la altura del rostro, encuadrada de modo que un rostro llene una parte utilizable del fotograma
a la distancia a la que la gente realmente se detiene. Las puertas a contraluz y los reflejos en el vidrio son causas frecuentes
de fallos de reconocimiento.

**② El elemento que reconoce y decide.**

| Host de reconocimiento | Dónde se ejecuta el reconocimiento | Forma de instalación |
|---|---|---|
| reCamera Pro (RV1126B) | En la cámara, junto a su aplicación de reconocimiento facial existente | Instalado en la cámara, sin contenedor (Buildroot, sin Docker) |
| reCamera estándar (SG2002 / CV181x) | En la cámara, en un único proceso nativo: detección, embedding, prueba de vida y emparejamiento | Un pequeño daemon copiado en la cámara, sin contenedor |
| reComputer Industrial J20 | En contenedores, contra un flujo RTSP existente | Contenedores sobre SSH |
| reComputer J30 / J40 / R2000 | En contenedores, contra un flujo RTSP existente | Contenedores sobre SSH |

**③ El relé.** La cerradura debe estar detrás de un relé o contacto seco, con su propia fuente de
12/24 V, separada de la de la placa de cómputo. Una cerradura consume de 300 mA a 1 A; un pin GPIO y una
salida digital optoaislada transportan miliamperios. Cuatro ajustes — `active_high`, `pulse_ms`,
`relay_contact` y `fail_mode` — se configuran por instalación y no tienen valores predeterminados: una
cerradura magnética a prueba de fallo cableada a través del contacto normalmente abierto queda permanentemente abierta,
y nada lo muestra hasta que se prueba la puerta.

**④ El host en la nube o en las instalaciones.** Cualquier máquina Linux amd64 o arm64 con Docker; sin GPU. Ejecuta
el servicio de biblioteca de rostros, la consola de gestión y el broker MQTT. Debe ser accesible
desde cada dispositivo de puerta, y su reloj debe ser correcto: los dispositivos sin RTC toman su corrección de hora
de la cabecera HTTP `Date`.

## Cómo desplegar en el sitio

Dos partes, y el orden importa.

### Uno: cablear la puerta — LED, luego relé, luego cerradura

Confirma la polaridad y el ancho de pulso con un LED. Confirma que el contacto hace clic en el relé. Solo
entonces conecta una cerradura. Una cerradura magnética a prueba de fallo va a través de COM y NC; una cerradura
a prueba de intrusión va a través de COM y NO. Si esto se conecta al revés, la puerta queda permanentemente abierta, por lo que
`relay_contact` no tiene valor predeterminado.

**Comprueba que el pin GPIO esté libre.** En una reCamera Pro inspeccionada, `gpio131` ya estaba
exportado y controlado por otra aplicación. El actuador se niega a arrancar en un pin cuyo
estado actual no coincide con el estado inactivo configurado, y no tomará el control de un pin
a menos que se le indique explícitamente. En la baseboard reCamera 2002 HQ PoE, el conector de 6 pines lleva
tres líneas IO — D1 = sysfs 490 (la única que no está multiplexada), CLK = 487, SMD = 488 — pero
la polaridad de nivel del conector y la corriente de salida disponible no figuran en la documentación del proveedor,
así que no conectes una cerradura ahí antes de que un multímetro y un LED las hayan confirmado.
En la J20, la especificación de diseño sitúa DO1–DO4 en sysfs 463/464/465/462; si la imagen de destino
las expone de ese modo o a través de `Jetson.GPIO` no se ha confirmado en hardware.

### Dos: levantar primero el lado en la nube y luego el lado del dispositivo

Los pasos completos por preajuste están en la página de diseño de referencia, donde responder a unas pocas preguntas sobre el sitio también te da el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga 🖱️</font></span></strong>
    </a>
</div><br />

El lado en la nube es el servicio de biblioteca de rostros, la consola y un broker, a partir de los archivos de compose
en `assets/cloud/`. La consola se niega a arrancar sin un token configurado.
**Un token compartido sobre HTTP plano no es autenticación**; termina TLS en un proxy inverso delante de ella. La configuración del broker
incluida es texto plano anónimo y es solo para pruebas; producción necesita TLS,
identidades por dispositivo y ACL de temas, nada de lo cual está en la configuración incluida.

El lado del dispositivo difiere por preajuste: contenedores sobre SSH en los preajustes reComputer,
una copia de un daemon en ambas reCamera.

Una vez que el lado en la nube esté en marcha, comprueba en la página de dispositivos de la consola que el dispositivo de la puerta está en línea, enviando latidos y con la versión de biblioteca de rostros esperada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-en-f978d0b3.png" alt="Página de dispositivo de la consola: estado en línea, latido, versión actual de la biblioteca de rostros y estado del actuador"/>
</div>

Después registra a las personas que puedan pasar en la página de personas. El registro genera una nueva versión de la biblioteca de rostros, que el dispositivo recoge en su siguiente sondeo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-en-8c8db34d.png" alt="Página de personas de la consola: personas registradas y el punto de entrada para el registro"/>
</div>

A continuación se muestra un ciclo completo: registrar a una persona, publicar la versión, el dispositivo la descarga y cambia, la puerta la reconoce.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="Registro hasta que el dispositivo descarga la nueva biblioteca de rostros y reconoce a la persona en la puerta"/>
</div>

Antes de instalar una cerradura, confirma en la placa base PoE que la línea GPIO realmente se puede accionar:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="Arranque del actuador en una reCamera 2002 HQ PoE, reclamando la línea GPIO D1"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="Lectura de nivel en la misma línea (sysfs 490) tras una decisión de permitir"/>
</div>

<!-- TODO image: the door itself (camera, relay and lock as installed) — needs a field shoot -->

Se permite una URL de biblioteca en texto plano `http://` en una LAN, pero solo con una firma
HMAC-SHA256 sobre el manifiesto; sin una clave el dispositivo se niega a arrancar. La firma
protege contra manipulaciones en tránsito; cualquier clave de dispositivo filtrada puede usarse para falsificar una biblioteca.

## Qué interfaces expone

La interfaz son cinco temas MQTT y dos superficies HTTP.

| Tema / endpoint | Carga útil | Retenido |
|---|---|---|
| `access/v1/events` (MQTT 8883, QoS 1) | Un JSON por decisión: ver más abajo | No |
| `access/v1/status/{device_id}` | Latido cada 30 segundos: estado del actuador, versión de la biblioteca y etiqueta del modelo, si la detección de vida está cargada | Solo último testamento |
| `access/v1/commands/{door_id}` | `unlock`, `hold_open`, `lock` | **Nunca** |
| `access/v1/receipts/{command_id}` | El estado final de un comando | No |
| `access/v1/relay/{relay_id}/set` y `/state` | Solo presets de relé vía MQTT; `state` informa del contacto físico y no refleja si la puerta está abierta | `set` no, `state` sí |
| `GET /v1/facedb/current`, `GET /v1/facedb/{version}` (HTTP 8080) | Toda la superficie de distribución de la biblioteca. `Range` para descargas fragmentadas y reanudables | — |
| `/api/events`, `/api/devices`, `/api/persons`, `/api/audit/verify` (HTTP 8088) | API de la consola protegida por el token de tres roles. Sin lectura anónima | — |

Los tres roles de token de la consola: el visor lee, el operador emite `unlock` / `hold_open` / `lock`, el administrador registra, elimina y revierte. `/api/audit/verify` comprueba la cadena de hashes del registro de auditoría: el registro es NDJSON de solo anexado, cada registro lleva el hash del registro anterior y cualquier modificación de un registro histórico se informa.

### La carga útil del evento

```json
{
  "schema": "access-event/v1",
  "event_id": "6f1a2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
  "time": "2026-09-06T03:20:11Z",
  "device_id": "door-front-01",
  "person_id": "p_alice",
  "anonymous_id": null,
  "score": 0.7412,
  "threshold": 0.62,
  "liveness": { "passed": true, "score": 0.958 },
  "decision": { "allow": true, "reason": "allowed" },
  "door_action": "pulse",
  "actuator_id": "door-front",
  "facedb_version": 3,
  "model_sha": "3a7f...",
  "clock": { "valid": true, "reason": null, "offset_ms": 12 }
}
```

Tres campos a vigilar al integrar. **`facedb_version` es `null` antes de la primera
sincronización correcta**, lo que significa que el dispositivo aún no tiene biblioteca (no es lo mismo que la versión 0); el
motivo de denegación se informa por separado como `no_facedb`. **`threshold` es el valor en vigor
para esa decisión**, así que un cambio de umbral aparece en el flujo de eventos. **`clock.valid`** indica si se puede confiar en la marca de tiempo corregida; los dispositivos nunca ajustan su reloj del sistema, solo mantienen un desplazamiento. Un resultado de detección de vida `null` significa que la comprobación no se ejecutó; se trata como un fallo y se informa como `liveness_unknown`.

### La puerta de comandos

Un comando debe llevar un conjunto de campos exacto, un `command_id` UUIDv4, un `issued_at`
RFC3339 con zona horaria y un TTL dentro de los límites, y se comprueba contra una tabla de
repetición por identidad. Un comando reenviado **no abre la puerta por segunda vez**; el dispositivo devuelve el
recibo original para que el llamador lo concilie. Uno caducado
se devuelve como `TTL_EXPIRED`. Se rechaza una identidad anónima.

Los temas `set` y de comandos nunca se retienen. Un desbloqueo retenido se reproduce en
cada reconexión, por lo que la puerta se abriría sola después de un corte de energía.

### Distribución de la biblioteca de rostros

El dispositivo sondea `current`, compara versiones y solo descarga archivos cuando la versión ha cambiado, con fragmentación y reanudación mediante `Range` estándar. Cada archivo se comprueba con SHA-256 y se verifica la firma del manifiesto antes de un cambio atómico; un fallo en cualquier paso deja la versión antigua en su lugar. Eliminar a una persona produce una nueva versión sin ella más una barrera de eliminación, y cualquier reversión posterior a una versión que aún la contenga se rechaza por nombre.

El manifiesto de cada versión lleva cinco campos de licencia — `license_id`, `use_scope`, `redistributable`,
`source_revision`, `sha256` — de modo que las condiciones de la licencia viajan con el artefacto.

## Rendimiento y datos medidos

### Latencia de activación de la biblioteca de rostros

El tiempo desde que se publica una nueva versión de la biblioteca hasta que el dispositivo la ejecuta.

| Plataforma | Activación completa | Condiciones |
|---|---|---|
| reCamera estándar (SG2002 / CV181x riscv64, firmware 0.2.2) | **p50 491.6 ms, p95 507.8 ms** (n=20) | USB-RNDIS, 2 personas, biblioteca de 16.5 KB. Viaje de ida y vuelta `op:reload` p50 100.0 ms (n=25) |
| reCamera Pro (RV1126B, Buildroot 2023.02.6) | 62.2 ms (v1), 45.4 ms (v2); ciclo sin cambios cuando está al día 6.2 ms | Ethernet, 1–2 personas, biblioteca de menos de 20 KB |

**Escalado con el tamaño de la biblioteca.** Dos puntos de escala en la reCamera estándar, una ejecución cada uno:
402 personas / 2.86 MB en 9 801.7 ms, y 1502 personas / 10.66 MB en 22 278.7 ms. El tiempo de activación
crece con el tamaño de la biblioteca; usa estas dos cifras para planificar la primera sincronización de una biblioteca grande.

Reproducir: en el repositorio ascendente `unmanned-store-access`, `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md` y `evaluation/runs/2026-09-07-recamera-pro-p1/results.md`.

### Tiempo de apertura de puerta (reCamera Pro, vídeo reproducido)

Desde el primer fotograma reproducido entregado a la aplicación hasta que el pin GPIO se lleva a su nivel activo, pasando por captura, detección, detección de vida, emparejamiento, política y la escritura del pin. p50, p95 entre paréntesis, 12 ejecuciones por punto (con n=12 lee la columna p95 como un límite superior).

| Cámara / host | 10 personas | 1 000 personas |
|---|---|---|
| reCamera Pro (RV1126B), f1-access 0.1.1 | **0.62 s** (0.67) | **0.66 s** (0.68) |

Condiciones: fotogramas 1280x720 reproducidos a 12.5 fps, detección de vida activada, rostro mínimo 40 px, umbral de coincidencia 0.40; la sonda es un clip de vídeo estándar reproducido a través del propio flujo de procesamiento del dispositivo, no una persona en vivo. El pin se activó en 24 de 24 ejecuciones. La retención de contacto de 1 500 ms tras la escritura del pin no se cuenta; no hay relé ni cerradura conectados, por lo que estas cifras no incluyen respuesta mecánica.

### Rechazos (reCamera Pro, vídeo reproducido)

20 ejecuciones por fila, mismo dispositivo y aplicación.

| Ejecución | Biblioteca de rostros | Pin activado |
|---|---|---|
| Persona no registrada | 9 identidades sintéticas | 0 / 20 |
| Persona no registrada | 999 identidades sintéticas | 0 / 20 |
| Reproducción en pantalla de teléfono, clip A | 10, plantilla construida a partir del clip de ataque | 0 / 20 |
| Reproducción en pantalla de teléfono, clip B | 10, plantilla construida a partir del clip de ataque | 0 / 20 |
| Imagen fija en pantalla | 10, plantilla construida a partir del clip de ataque | 0 / 20 |

Condiciones: en las dos filas de persona no registrada la biblioteca contiene solo vectores sintéticos, por lo que la persona del clip no está registrada; en las tres filas de pantalla la plantilla se construye a partir del propio clip de ataque, por lo que el rostro en la biblioteca y el rostro en la pantalla son la misma persona; la fila de pantalla fija es un fotograma de visualización mantenido inmóvil.

### Otras mediciones

| Métrica | Valor | Condiciones |
|---|---|---|
| Evento de reconocimiento a lectura del pin GPIO | p50 1.448 ms, p95 2.709 ms (n=22) | reCamera Pro, eventos de reconocimiento sintéticos inyectados, lectura vía sysfs, sin circuito externo; un límite superior en un eslabón de la ruta de software, acción de la puerta no incluida |
| Servicio de reconocimiento, un fotograma: caja de rostro + veredicto de detección de vida + embedding de 512 dimensiones | 24-26 ms de tiempo de servidor, 30.3 ms p50 sobre HTTP (12 peticiones) | reComputer J40 Serie (Orin NX 16 GB, JetPack 6), un fotograma de un flujo RTSP 1280x720 |
| Primer arranque del servicio de reconocimiento | Motores TensorRT construidos en el equipo en 61 s + 62 s + 73 s; el endpoint de salud responde 214 s después del arranque | reComputer J40 Serie (Orin NX 16 GB, JetPack 6) |

La lectura de `gpio130` en la reCamera Pro es de uno de los pines UART4 M0 del puerto de expansión reconfigurado como GPIO — la familia de 3.3 V, no una de las dos salidas nativas de 12–21 V de la placa.

Reproducir (lectura GPIO): `evaluation/runs/2026-09-07-recamera-pro-p1/results.md`.

### Tiempos de ejecución y parámetros clave

| Host de reconocimiento | Modelo de reconocimiento y dónde se ejecuta |
|---|---|
| reCamera Pro | El propio modelo de reconocimiento del dispositivo, `rv1126b:scrfd500m+mbf512@fp16` |
| reCamera estándar | Un proceso nativo en el dispositivo realiza detección, embedding, detección de vida y emparejamiento |
| Presets de reComputer | Un servicio de reconocimiento en un contenedor; los motores TensorRT se construyen en el equipo en el primer arranque |
| reComputer presets | A recognition service in a container; TensorRT engines are built on the box at first start |

La verificación de vivacidad está aplicada: si el servicio de reconocimiento no informa que la vivacidad está cargada, el adaptador se niega a ejecutarse.

Parámetros que cambian el comportamiento del despliegue:

- Intervalo de sondeo de la biblioteca de rostros (30 s por defecto): el dispositivo consulta nuevas versiones en este intervalo, por lo que la latencia de activación de la biblioteca depende de él.
- Umbral de coincidencia: el umbral suministrado es un valor inicial; ajústalo barriendo pares positivos y negativos en la cámara instalada. El `threshold` del evento informa del valor en vigor para cada decisión.
- Los cuatro ajustes del relé `active_high`, `pulse_ms`, `relay_contact`, `fail_mode`: sin valores predeterminados; se configuran por instalación.

### Degradaciones conocidas

- **Registro para reCamera Pro.** El `buffalo_l` usado para el registro en la nube y el propio `rv1126b:scrfd500m+mbf512@fp16` del dispositivo se sitúan en espacios de modelo cuya similitud coseno es aproximadamente cero, por lo que la ruta de registro incluida aún no puede producir una biblioteca utilizable en producción para este dispositivo. La reCamera estándar calcula las incrustaciones en el dispositivo y no se ve afectada.
- **La vivacidad en el backend RKNN no está implementada upstream.** Los presets que se ejecutan en RKNN no pueden cumplir con "liveness enforced".
- **Cambiar el backbone de rostro implica reconstruir todas las versiones de la biblioteca de rostros.** Las incrustaciones no son comparables entre modelos, por lo que todas las versiones antiguas se vuelven inutilizables; la protección `model_tag` en el manifiesto impide que un dispositivo cargue una por error.

### Próximos pasos

- Una prueba de bucle de contacto con un Grove Relay en reCamera Pro (20 ciclos), registrando la latencia de cierre de contacto y el tiempo de retención, antes de conectar un controlador de puerta.

## Fuentes de datos y recursos

**Licencias.** El código del paquete de la solución y del repositorio upstream es Apache-2.0. **Los pesos del modelo
no lo son.** La detección de rostros y las incrustaciones usan el `buffalo_l` de InsightFace; la propia
declaración de InsightFace es que el código es MIT sin limitación de uso comercial, pero que los
datos de entrenamiento —y los modelos entrenados con esos datos— están disponibles solo para fines de investigación
no comerciales. `buffalo_l` es uno de esos modelos: `license_id: non-commercial`,
`use_scope: non-commercial`, `redistributable: false`. El paquete de la solución no incluye los pesos, y un despliegue comercial debe sustituir el backbone de rostro por uno con licencia comercial.

El modelo de vivacidad pasiva, Silent-Face-Anti-Spoofing de MiniVision, es Apache-2.0:
`use_scope: commercial`, redistribuible, usado sin modificar.

- Términos de la licencia: `gallery/ATTRIBUTION.md` en el paquete de la solución, y la sección de licencias de la descripción del paquete.
- Brecha de espacio de modelo de registro: upstream `docs/user-guide.md` §5.1.
- Los fotogramas de reconocimiento de puerta provienen de una reCamera Pro; la persona que aparece en ellos es un miembro del proyecto que tomó la foto.
- Las capturas de pantalla de la consola son **datos de demostración sintéticos**; las personas, puntuaciones y eventos no son resultados de campo.
