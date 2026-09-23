---
description: Control de acceso facial para una puerta sin personal — el hardware que cada opción de cableado necesita, cómo se distribuye y verifica la biblioteca de rostros versionada, los contratos MQTT y HTTP, y exactamente qué límites se han medido en hardware y cuáles no
title: 'Acceso facial para tienda no atendida: hardware, distribución de la biblioteca de rostros y límites medidos'
keywords:
  - control de acceso facial para tienda no atendida
  - acceso a puerta con reconocimiento facial
  - prueba de vida pasiva anti-spoofing
  - distribución de biblioteca de rostros versionada
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
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/unmanned-store-face-access/
generated_from: sensecraft-solutions@e1864ef
---

:::caution[Aviso de uso]
Esto **no es un producto de seguridad certificado ni un sistema de seguridad vital**. La precisión del reconocimiento y el rechazo de spoofing en la prueba de vida dependen del modelo facial que despliegues y de tus propias imágenes de enrolamiento: mídelo en el sitio. Los pesos de referencia de rostros (InsightFace `buffalo_l`) están licenciados solo para investigación no comercial. Trátalo como una implementación sobre la que construir y medir tú mismo, no como un producto que puedas instalar y en el que puedas confiar.

:::

## Qué hace esta solución

Una cámara en una puerta detrás de la cual no hay nadie reconoce un rostro, exige que pase una prueba de vida pasiva, comprueba a la persona contra la biblioteca de rostros actual, el horario y la lista de bloqueo y — solo si todo eso se cumple — activa por pulsos un relé que conmuta una cerradura que funciona con su propia alimentación de 12/24 V. Cada decisión, tanto permitida como denegada, se publica por MQTT y se añade a un registro de auditoría encadenado por hash que la consola puede verificar.

Encaja en la entrada de personal, almacén o puerta trasera de una tienda sin personal o con personal parcial; en una oficina compartida donde el turno cambia semanalmente y el enrolamiento tiene que ser autoservicio; en una sala de equipos donde el registro de quién pasó importa más que el rendimiento; y en un sitio que ya tiene cámaras RTSP en la puerta y no quiere sustituirlas.

- Selección y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/unmanned_store_access)
- Repositorio ascendente: no publicado. El paquete no lleva `intro.links.github`; el código vive en un repositorio interno en el momento del empaquetado.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>El desbloqueo se mantiene fuera de la red en tres de los cinco preajustes</h3>
                <p>El reconocimiento, la prueba de vida y la decisión ocurren en la puerta. Un dispositivo que pierde la nube sigue abriendo con la última biblioteca de rostros que cargó correctamente. Los dos preajustes de relé por MQTT hacen explícitamente la elección opuesta.</p>
            </div>
        </li>
    <li class="info-item">
        <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.959 11.959 0 0112 2.714z" /></svg>
                </div>
            <div class="info-content">
            <h3>La biblioteca de rostros está versionada, se obtiene y se verifica, nunca se envía por push</h3>
                <p>Encuestas periódicas, descarga fragmentada, SHA-256 por archivo, una firma sobre el manifiesto y luego un cambio atómico. Cualquier fallo deja la versión anterior en su lugar. Activación medida en una reCamera estándar: p50 491,6 ms.</p>
                </div>
            </li>
        <li class="info-item">
        <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
                </div>
            <div class="info-content">
            <h3>Una persona eliminada permanece eliminada</h3>
                <p>Eliminar a alguien produce una nueva versión sin esa persona y escribe una barrera de eliminación. Un rollback a cualquier versión que todavía contenga a esa persona se rechaza por nombre.</p>
                </div>
            </li>
        <li class="info-item">
        <div class="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
                </div>
            <div class="info-content">
            <h3>Se ha medido una de siete métricas de límite</h3>
                <p>La latencia de activación de la biblioteca de rostros tiene cifras en dos dispositivos. El FAR/FRR de reconocimiento, el rechazo de spoofing en la prueba de vida, ambas latencias de desbloqueo, la resistencia sin conexión y una prueba de esfuerzo de 72 horas están todas pendientes, cada una con un motivo declarado.</p>
                </div>
            </li>
        </ul>
        </div>

                ### Lo que ve el dispositivo en la puerta

            Reconocimiento en una reCamera Pro: el recuadro facial lleva el id de la persona coincidente y la decisión para ese fotograma. Sin nadie delante, la vista es solo el encuadre.

                <div align="center">
            <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-recognition-ce7667d4.jpg" alt="Vista de aplicación de reCamera Pro: recuadro facial y la decisión para ese fotograma"/>
        </div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/live-no-person-5ee3d054.jpg" alt="El mismo montaje sin nadie presente, usado para comprobar encuadre y exposición"/>
</div>

Ambos fotogramas provienen de la sesión de laboratorio con reCamera Pro del 2026-09-07; la persona que aparece en ellos es un miembro del proyecto que tomó la foto.


  ## Qué hardware necesitas

Tres roles de dispositivo más un host, y una regla que no se dobla.

  **① La cámara en la puerta.** O bien el propio sensor del dispositivo (reCamera Pro o reCamera estándar) o una cámara RTSP existente que alimenta a un host separado. Móntala aproximadamente a la altura de la cara, encuadrada de modo que un rostro llene una parte utilizable del fotograma a la distancia a la que la gente realmente se detiene. Las puertas a contraluz y los reflejos en el vidrio son los modos de fallo habituales: comprueba la posición de montaje frente a ambos.

**② Lo que reconoce y decide.**

| Host de reconocimiento | Dónde se ejecuta el reconocimiento | Forma de instalación | Estado del hardware |
|---|---|---|---|
| reCamera Pro (RV1126B) | En la cámara, junto a su aplicación de reconocimiento facial existente | Un conjunto plano de módulos Python de la biblioteca estándar bajo `/userdata/f1-access`. Buildroot: sin Docker, sin dpkg, sin systemd | Ruta de la biblioteca y lectura de retroalimentación de GPIO de evento sintético ejercitadas |
| reCamera estándar (SG2002 / CV181x) | En la cámara, en un único proceso nativo — detección, embedding, prueba de vida de textura de dos cabezas con fusión de parpadeo, coincidencia | Un pequeño demonio de biblioteca estándar, copiado manualmente. Sin contenedor | Ruta de la biblioteca ejercitada en dos ejecuciones de sondeo |

**③ El relé, y esta es la regla.** La cerradura está siempre detrás de un relé o contacto seco, siempre con su propia alimentación de 12/24 V, separada de la de la placa de cómputo. Una cerradura consume de 300 mA a 1 A; un pin GPIO y una salida digital optoaislada llevan miliamperios. Cuatro ajustes — `active_high`, `pulse_ms`, `relay_contact` y `fail_mode` — se configuran por instalación y deliberadamente no tienen valores predeterminados, porque una cerradura magnética a prueba de fallo cableada a través del contacto normalmente abierto queda permanentemente abierta y parece una instalación funcional hasta que alguien la prueba.

**④ El host en la nube o on‑prem.** Cualquier máquina Linux amd64 o arm64 con Docker; sin GPU. Ejecuta el servicio de biblioteca de rostros, la consola de gestión y el broker MQTT. Debe ser alcanzable desde cada dispositivo de puerta, y su reloj debe ser correcto: los dispositivos sin RTC toman su corrección horaria de la cabecera HTTP `Date`. Ninguna de las imágenes de contenedor se ha subido aún a un registro: los archivos de compose nombran las etiquetas que tendrán y lo indican en la parte superior.

## Cómo desplegar en el sitio

Dos partes, y el orden importa.

### Uno: cablear la puerta — LED, luego relé, luego cerradura

Confirma la polaridad y el ancho de pulso con un LED. Confirma que el contacto hace clic en el relé. Solo entonces pon una cerradura. Una cerradura magnética a prueba de fallo pasa por COM y NC; un resbalón a prueba de intrusión pasa por COM y NO. Hacer esto al revés deja la puerta permanentemente abierta, por lo que `relay_contact` no tiene valor predeterminado.

**No des por hecho que un pin GPIO está libre.** La reCamera Pro inspeccionada ya tenía `gpio131` exportado y controlado por otra aplicación. El actuador se niega a arrancar en un pin cuyo estado actual no coincide con el estado inactivo configurado, y no tomará el control de un pin a menos que se le indique explícitamente. En la baseboard reCamera 2002 HQ PoE, el conector de 6 pines lleva tres líneas IO — D1 = sysfs 490 (la única que no está multiplexada), CLK = 487, SMD = 488 — pero la polaridad de nivel del conector y la corriente de salida disponible no figuran en la documentación del proveedor, así que no se puede cablear ninguna cerradura ahí antes de que un multímetro y un LED las hayan confirmado.
En la J20, la especificación de diseño sitúa DO1–DO4 en sysfs 463/464/465/462; aún es necesario confirmar en hardware si la imagen de destino los expone de esa forma o a través de `Jetson.GPIO`.

### Dos: levantar primero el lado en la nube y luego el lado del dispositivo

Los pasos completos por preajuste están en la página de diseño de referencia, donde responder a unas pocas preguntas sobre el sitio también te da el paquete de aplicación correspondiente para descargar.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descarga 🖱️</font></span></strong>
    </a>
</div><br />
correction from its HTTP `Date` header. Neither container image has been pushed to a
registry yet — the compose files name the tags they will have and say so at the top.

## How to deploy on site

Two parts, and the order matters.

### One: wire the door — LED, then relay, then lock

Confirm polarity and pulse width on an LED. Confirm the contact clicks on the relay. Only
then put a lock on it. A fail-safe magnetic lock goes through COM and NC; a fail-secure
strike through COM and NO. Getting this backwards leaves the door open permanently, which
is why `relay_contact` has no default value.

**Do not assume a GPIO pin is free.** The surveyed reCamera Pro had `gpio131` already
exported and driven by another application. The actuator refuses to start on a pin whose
current state disagrees with the configured idle state, and will not take a pin over
unless told to explicitly. On the reCamera 2002 HQ PoE baseboard the 6-pin header carries
three IO lines — D1 = sysfs 490 (the only one not multiplexed), CLK = 487, SMD = 488 — but
the header's level polarity and available drive current are not in the vendor documentation,
so no lock may be wired there before a meter and an LED have confirmed them.
On the J20 the design spec puts DO1–DO4 at sysfs 463/464/465/462; whether the target image
exposes them that way or through `Jetson.GPIO` still needs confirming on hardware.

### Two: bring up the cloud side, then the device side

Full per-preset steps are on the reference design page, where answering a few questions about the site also gives you the matching application package to download.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/unmanned_store_access" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Pick a configuration and download 🖱️</font></span></strong>
    </a>
</div><br />

El lado en la nube es el servicio de biblioteca de rostros, la consola y un broker, a partir de los archivos compose en `assets/cloud/`. La consola se niega a iniciarse si no hay ningún token configurado, y su puerta de token compartido tiene tres roles: viewer lee, operator emite `unlock` / `hold_open` / `lock`, admin registra, elimina y hace rollback. **Un token compartido sobre HTTP en texto claro no es autenticación**: termina TLS delante de él. La configuración de broker incluida es anónima y en texto claro y es para banco de pruebas; el diseño requiere TLS, identidades por dispositivo y ACLs de topics, y ninguno de los tres está en la configuración incluida.
files in `assets/cloud/`. The console refuses to start with no token configured, and its
shared-token gate has three roles: viewer reads, operator issues `unlock` / `hold_open` /
`lock`, admin enrols, deletes and rolls back. **A shared token over plain HTTP is not
authentication** — terminate TLS in front of it. The bundled broker configuration is
anonymous plaintext and is for a bench; the design calls for TLS, per-device identities
and topic ACLs, and none of the three is in the bundled configuration.

El lado del dispositivo difiere según el preset: contenedores sobre SSH en los presets reComputer, una copia manual de un daemon en ambas reCameras. Los pasos completos por preset están en la guía de despliegue en la página del diseño de referencia.
manual copy of a daemon on both reCameras. The full per-preset steps are in the
deployment guide on the reference design page.

Una vez que el lado en la nube está en marcha, comprueba en la página de dispositivos de la consola que el dispositivo de la puerta está en línea, enviando latidos y con la versión de biblioteca de rostros esperada:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-devices-en-f978d0b3.png" alt="Página de dispositivo de la consola: estado en línea, latido, versión actual de la biblioteca de rostros y estado del actuador"/>
</div>

Luego registra a las personas que pueden pasar en la página de personas. El registro genera una nueva versión de la biblioteca de rostros, que el dispositivo recoge en su siguiente sondeo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-persons-en-8c8db34d.png" alt="Página de personas de la consola: personas registradas y el punto de entrada para el registro"/>
</div>

A continuación se muestra un ciclo completo: registrar a una persona, publicar la versión, el dispositivo la descarga y cambia, la puerta la reconoce.

<div align="center">
  <img class='img-responsive' src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/console-flow-7a02b8a9.gif" alt="Registro hasta que el dispositivo descarga la nueva biblioteca de rostros y reconoce a la persona en la puerta"/>
</div>

Antes de instalar una cerradura, confirma en la base PoE que la línea GPIO realmente se puede accionar:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/poe-activation-2de5d904.png" alt="Arranque del actuador en una reCamera 2002 HQ PoE, reclamando la línea GPIO D1"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/unmanned_store_access/gpio-relay-check-ad22020d.png" alt="Lectura de nivel en la misma línea (sysfs 490) después de una decisión de permitir"/>
</div>

<!-- TODO image: the door itself (camera, relay and lock as installed) — needs a field shoot -->

Se permite una URL de biblioteca `http://` en texto claro en una LAN, pero solo con una firma HMAC-SHA256 sobre el manifiesto; sin una clave el dispositivo se niega a arrancar. Esa firma detiene la manipulación en tránsito. No detiene a alguien que haya abierto un dispositivo: cualquier clave de dispositivo filtrada puede falsificar una biblioteca.
signature over the manifest; without a key the device refuses to start. That signature
stops tampering on the wire. It does not stop someone who has opened a device: any leaked
device key can forge a library.

## Cómo conectarlo a tu propio sistema

La interfaz son cinco topics MQTT y dos superficies HTTP.

| Topic / endpoint | Carga útil | Retenido |
|---|---|---|
| `access/v1/events` (MQTT 8883, QoS 1) | Un JSON por decisión: ver más abajo | No |
| `access/v1/status/{device_id}` | Latido cada 30 segundos: estado del actuador, versión de la biblioteca y etiqueta del modelo, si liveness está cargado | Solo last will |
| `access/v1/commands/{door_id}` | `unlock`, `hold_open`, `lock` | **Nunca** |
| `access/v1/receipts/{command_id}` | El estado final de un comando | No |
| `access/v1/relay/{relay_id}/set` and `/state` | Solo presets con relé MQTT; `state` informa del contacto físico, no de si la puerta está abierta | `set` no, `state` sí |
| `GET /v1/facedb/current`, `GET /v1/facedb/{version}` (HTTP 8080) | Toda la superficie de distribución de la biblioteca. `Range` para descargas fragmentadas y reanudables | — |
| `/api/events`, `/api/devices`, `/api/persons`, `/api/audit/verify` (HTTP 8088) | API de la consola detrás de la puerta de token de tres roles. No hay lectura anónima | — |

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

Tres campos determinan la mayoría de las integraciones. **`facedb_version` es `null` antes de la primera sincronización correcta**: eso es "ninguna biblioteca en absoluto", algo distinto de la versión 0, y se informa como su propio motivo de denegación `no_facedb` en lugar de como una no coincidencia. **`threshold` es el valor en vigor para esa decisión**, de modo que un cambio de umbral es visible en el flujo de eventos y no solo en un archivo de configuración. **`clock.valid`** indica si se puede confiar en la marca de tiempo corregida; los dispositivos nunca ajustan su reloj del sistema, solo mantienen un desplazamiento.
successful sync — that is "no library at all", a different thing from version 0, and it
is reported as its own denial reason `no_facedb` rather than as a non-match. **`threshold`
is the value in force for that decision**, so a threshold change is visible in the event
stream rather than only in a config file. **`clock.valid`** says whether the corrected
timestamp can be trusted; devices never set their system clock, they only carry an offset.

### La puerta de comandos

Un comando debe llevar un conjunto de campos exacto, un UUIDv4 `command_id`, un `issued_at` RFC3339 con zona horaria y un TTL dentro de los límites, y se comprueba contra una tabla de repetición por identidad. Un comando reentregado **no abre la puerta por segunda vez**: reproduce el recibo original, de modo que quien llama sigue recibiendo algo contra lo que conciliar. Uno caducado vuelve como `TTL_EXPIRED`. Se rechaza una identidad anónima.
with a timezone, and a TTL within bounds, and it is checked against a per-identity replay
table. A redelivered command **does not open the door a second time** — it replays the
original receipt, so the caller still gets something to reconcile against. An expired one
comes back as `TTL_EXPIRED`. An anonymous identity is refused.

El topic `set` y el topic de comandos nunca se retienen. Un `unlock` retenido se reproduce en cada reconexión, por lo que la puerta se abriría sola después de un corte de energía.
every reconnect, so the door would open by itself after a power cut.

## Para ingenieros: detalles de implementación

### Distribución de la biblioteca de rostros: dos endpoints, sin push

Los dispositivos consultan `current`, comparan la versión y solo entonces descargan archivos, con `Range` para descargas fragmentadas y reanudables. Por lo tanto, la latencia de activación es igual al periodo de sondeo: 30 s por defecto. Ese es el precio que se paga por un lado de dispositivo que no necesita nada más que un cliente HTTP, y por no tener nunca un estado de "notificación perdida pero biblioteca cambiada".
chunked and resumable downloads. Activation latency therefore equals the poll period —
30 s by default. That is the price paid for a device side that needs nothing but an HTTP
client, and for never having a "notification lost but library changed" state.

La secuencia completa: sondeo → comparación → descarga fragmentada → SHA-256 por archivo → firma del manifiesto → cargar el nuevo comparador → **cambio atómico** → escritura de la galería → ack `op:reload`. Un fallo en cualquier paso deja la versión anterior en su lugar. En ambas unidades de hardware, una versión con un byte cambiado en `gallery.json` y un manifiesto firmado con la clave equivocada fue rechazada en el dispositivo, que se mantuvo en la versión anterior; una descarga interrumpida se reanudó.
signature → load the new matcher → **atomic switch** → gallery write → `op:reload` ack.
A failure at any step leaves the previous version in place. On both hardware units a
version with one byte changed in `gallery.json` and a manifest signed with the wrong key
were rejected on the device, which stayed on the previous version; an interrupted download
resumed.

El manifiesto de cada versión lleva cinco campos de licencia — `license_id`, `use_scope`, `redistributable`, `source_revision`, `sha256` — de modo que los términos viajan con el artefacto en lugar de vivir solo en un documento. Una licencia que aún se está confirmando se registra como `license_id: unverified` con `use_scope: internal-only`; nunca se escribe como permisiva y se corrige más tarde.
`redistributable`, `source_revision`, `sha256` — so the terms travel with the artefact
rather than living only in a document. A licence still being confirmed is recorded as
`license_id: unverified` with `use_scope: internal-only`; it is never written as
permissive and corrected later.

### Barreras de eliminación, y por qué un rollback no es suficiente

Eliminar a una persona genera una nueva versión sin ella y escribe una barrera de eliminación. Hacer rollback a cualquier versión que todavía la contenga se rechaza por nombre. Sin la barrera, un solo rollback readmite silenciosamente a todo el que haya sido eliminado alguna vez, que es el modo de fallo que hace que una biblioteca versionada sea peligrosa en lugar de útil.
back to any version that still contains them is refused by name. Without the barrier, one
rollback quietly re-admits everyone who has ever been removed — which is the failure mode
that makes a versioned library dangerous rather than useful.

### Liveness no se puede desactivar en silencio

El servicio de reconocimiento upstream se degrada a "seguir reconociendo, omitir liveness" cuando falta el archivo de modelo. Para una puerta, esa degradación es una puerta abierta, así que el adaptador sondea `/health` al arrancar y se niega a ejecutarse a menos que liveness informe como cargado. Un valor `live` de `null` se trata como un **fallo**, no como un pase: significa que la comprobación no se ejecutó, y aparece como el motivo distinto `liveness_unknown`.
model file is missing. For a door that degradation is an open door, so the adapter probes
`/health` at startup and refuses to run unless liveness reports as loaded. A `live` value
of `null` is treated as a **failure**, not a pass: it means the check did not run, and it
surfaces as the distinct reason `liveness_unknown`.

Una laguna de cobertura registrada. El liveness del backend RKNN no está implementado upstream, por lo que un preset que se ejecute en RKNN no puede cumplir "liveness aplicado" y su límite de liveness no debe rellenarse desde esa vía.
so a preset running on RKNN cannot satisfy "liveness enforced" and its liveness boundary
must not be filled from that path.

### El registro de auditoría

NDJSON solo de anexado, cada registro llevando el hash del registro anterior. Cambiar una decisión pasada de denegada a permitida rompe la cadena, y `/api/audit/verify` lo informa. En el bucle de software, una cadena de 13 registros se verificó y falló después de que una denegación se editara a aprobación.
decision from denied to allowed breaks the chain, and `/api/audit/verify` reports it. In
the software loop a 13-record chain verified, and failed after one denial was edited into
an approval.

### Registro y la brecha de espacio de modelo en reCamera Pro

`face_rec_api` `buffalo_l` es el embedder equivocado para la Pro operativamente, independientemente de la licencia: el reconocedor propio del dispositivo ejecuta `rv1126b:scrfd500m+mbf512@fp16`, y la similitud de coseno entre los dos espacios de modelo es aproximadamente cero. Ningún embedder en la nube hoy produce vectores en el espacio de modelo del dispositivo, por lo que **la ruta de registro empaquetada aún no produce una biblioteca de rostros utilizable en producción en ese dispositivo**. Corregirlo requiere o bien un embedder en la nube reconciliado con el espacio de modelo del dispositivo o una ruta de registro asistida por el dispositivo. Upstream se está moviendo hacia la segunda forma — enviar imágenes y recomputar el embedding en el dispositivo — pero la versión empaquetada distribuye vectores calculados en la nube, y eso es lo que describe esta página. La ruta estándar de reCamera no se ve afectada: hace el embedding en el dispositivo y no registra a través de esta consola.
of licence: the device's own recognizer runs `rv1126b:scrfd500m+mbf512@fp16`, and cosine
similarity between the two model spaces is approximately zero. No cloud-side embedder
today produces vectors in the device's model space, so **the packaged registration path
does not yet produce a face library usable in production on that device**. Fixing it needs
either a cloud embedder reconciled to the device's model space or a device-assisted
enrolment path. Upstream is moving to the second shape — sending images and recomputing
the embedding on the device — but the packaged version distributes cloud-computed vectors,
and that is what this page describes. The standard reCamera path is not affected: it
embeds on-device and does not enrol through this console.

## Apéndice: datos medidos {#appendix-measured-data}

### Qué se ha medido y qué no

Siete métricas límite están definidas upstream. Una está medida; seis llevan `status: pending` con todos los niveles vacíos, cada una con el motivo registrado.

| Métrica límite | Estado | Por qué está abierta |
|---|---|---|
| Activación de la biblioteca de rostros | **measured** | Se ejecutó en una reCamera estándar (dos ejecuciones de sondeo) y en una reCamera Pro (una ejecución) |
| FAR / FRR de reconocimiento | pending | No hay modelo de rostro real en el bucle de software; no hay pares positivos/negativos; nadie delante de ninguna de las lentes |
| Rechazo de spoof de liveness / falso rechazo de vivo | pending | Necesita muestras de spoof reales — fotografías, pantallas, máscaras — y Silent-Face ejecutándose realmente |
| Latencia p95 de desbloqueo por ruta directa | pending | Necesita la cadena completa de cámara a relé en hardware |
| Latencia p95 de desbloqueo por relé MQTT | pending | No se ha cableado ningún relé en el gateway |
| Resistencia sin conexión | pending | Necesita un dispositivo funcionando desconectado durante un periodo largo |
| Prueba de resistencia de 72 horas: aperturas erróneas / fallos | pending | Necesita 72 horas de funcionamiento ininterrumpido en hardware |
| 72-hour soak: wrong opens / crashes | pending | Needs 72 hours of uninterrupted operation on hardware |

### Latencia de activación de la biblioteca de rostros

**Este es el tiempo desde que se publica una nueva versión de la biblioteca hasta que el dispositivo la está ejecutando.
No es una latencia de apertura de puerta.** El tiempo de apertura de puerta se mide por separado más abajo.

| Plataforma | Activación completa | Condiciones |
|---|---|---|
| reCamera estándar (SG2002 / CV181x riscv64, firmware 0.2.2) | **p50 491.6 ms, p95 507.8 ms** (n=20) | USB-RNDIS, 2 personas, biblioteca de 16.5 KB. Viaje de ida y vuelta `op:reload` p50 100.0 ms (n=25) |
| reCamera Pro (RV1126B, Buildroot 2023.02.6) | 62.2 ms (v1), 45.4 ms (v2); ronda no-op al día 6.2 ms | Ethernet, 1–2 personas, biblioteca de menos de 20 KB. Puerta de consistencia `problems: []` |
| reCamera PoE | — | Hardware pendiente; el código del lado del dispositivo solo está auto-probado |
| Bucle de software en macOS | 11.6 ms el más lento de tres (v1/v2/v3: 11.6 / 3.7 / 3.5 ms) | Loopback HTTP, sin TLS, sin autenticación, pérdida cero, 4 personas × 3 incrustaciones de 128 dimensiones, una sola ejecución. **No es una cifra del lado del dispositivo** |

**Cómo escala.** Dos puntos de escala en la reCamera estándar, una ejecución cada uno: 402 personas /
2.86 MB en 9 801.7 ms, y 1502 personas / 10.66 MB en 22 278.7 ms. La activación sigue
el tamaño de la biblioteca, así que una biblioteca grande es una primera sincronización lenta: planifica el primer despliegue en consecuencia
en lugar de asumir que la cifra de 491.6 ms se mantiene a escala.

### Evento de reconocimiento a lectura de pin GPIO (reCamera Pro)

n=22, p50 1.448 ms, p95 2.709 ms. **Léelo como un límite superior en un solo eslabón, no como una cifra
de puerta.** La entrada fueron eventos de reconocimiento sintéticos inyectados en lugar de una persona, la
lectura de retorno es vía sysfs así que los valores son un límite superior solo para la ruta de software, y no
se conectó ningún circuito externo. La identidad física de `gpio130` está confirmada por evidencia pinctrl
del device tree como uno de los pines UART4 M0 del puerto de expansión reconfigurado como GPIO — la
familia de 3.3 V, no una de las dos salidas nativas de 12–21 V de la placa — y su nivel y
corriente de salida disponible se miden en tu propia unidad; los umbrales llevan
`calibration = pending`.

### Tiempo de apertura de puerta y rechazos (reCamera Pro, vídeo reproducido)

**Tiempo de apertura de puerta** — desde el primer fotograma reproducido entregado a la app hasta que el pin GPIO es
llevado a su nivel activo, a través de captura, detección, liveness, emparejamiento, política y la
escritura del pin, según el tamaño de la biblioteca de rostros. p50, p95 entre paréntesis, 12 ejecuciones por punto — con n=12 lee la
columna p95 como un límite superior.

| Cámara / host | 10 personas | 1 000 personas |
|---|---|---|
| reCamera Pro (RV1126B), f1-access 0.1.1 | **0.62 s** (0.67) | **0.66 s** (0.68) |

El pin se activó en 24 de 24 ejecuciones. Condiciones: reCamera Pro ejecutando la propia app `f1-access`
0.1.1, fotogramas 1280x720 reproducidos a 12.5 fps, liveness activado, cara mínima 40 px,
umbral de coincidencia 0.40; la sonda es un clip de vídeo estándar reproducido a través del propio
pipeline del dispositivo, no una persona en vivo. El mantenimiento de contacto de 1 500 ms que sigue a la escritura del pin no se
cuenta. No hay relé ni cerradura conectados, así que estas cifras no contienen ninguna
respuesta mecánica. La diferencia medida de p50 entre la biblioteca de 10 personas y la de 1 000 personas es de
37 ms.

**Rechazos** — 20 ejecuciones por fila, mismo dispositivo y app. 40 ejecuciones son una persona no registrada;
60 son una pantalla sostenida delante de la lente.

| Ejecución | Biblioteca de rostros | Pin activado |
|---|---|---|
| Persona no registrada | 9 identidades sintéticas | 0 / 20 |
| Persona no registrada | 999 identidades sintéticas | 0 / 20 |
| Reproducción en pantalla de teléfono, clip A | 10, plantilla construida a partir del clip de ataque | 0 / 20 |
| Reproducción en pantalla de teléfono, clip B | 10, plantilla construida a partir del clip de ataque | 0 / 20 |
| Imagen fija en pantalla | 10, plantilla construida a partir del clip de ataque | 0 / 20 |

En las dos filas de persona no registrada la biblioteca contiene solo vectores sintéticos, así que la persona
del clip no está registrada. En las tres filas de pantalla la plantilla se construye a partir del propio clip de
ataque, así que la cara en la biblioteca y la cara en la pantalla son la misma persona. La
fila de pantalla fija es un fotograma de visualización mantenido inmóvil; no se probó ninguna fotografía impresa.

**Servicio de reconocimiento en host de IA (reComputer J40 Serie).** En Orin NX 16 GB con JetPack 6 el
servicio de reconocimiento construye sus motores TensorRT en la propia caja en 61 s + 62 s + 73 s y responde
a su endpoint de salud 214 s después del arranque. Un fotograma de un flujo RTSP 1280x720 vuelve con un
cuadro de cara, un veredicto de liveness y una incrustación de 512 d en 24-26 ms de tiempo de servidor (30.3 ms p50
sobre HTTP, 12 peticiones). La reCamera estándar y el host de IA no tienen cifra de apertura de puerta: el
reconocedor de la cámara estándar es un proceso nativo cerrado sin forma de alimentarle un fotograma, y
la caja de pruebas del host de IA no tiene un segundo pin de cabecera para leer de vuelta el contacto del relé.

### Lo que estableció el bucle de software

En una máquina de desarrollo macOS, con un actuador falso, un broker en memoria y un reconocedor
falso: 52 de 52 comprobaciones superadas a lo largo de tres versiones de biblioteca construidas, publicadas,
extraídas, verificadas por SHA y conmutadas atómicamente; la política denegando una fotografía
(`liveness_failed`), un resultado de liveness nulo (`liveness_unknown`), una persona en la lista de bloqueo, un
desconocido por debajo del umbral, un fotograma vacío y una repetición dentro de la ventana de anti-rebote; exactamente
dos pulsos de desbloqueo a lo largo de diez fotogramas, ambos en los 1500 ms configurados; una reversión a dos
versiones diferentes rechazada por la barrera de eliminación con la versión actual sin cambios; un
desbloqueo remoto aceptado y ejecutado, uno caducado rechazado con `TTL_EXPIRED`, una repetición
que devuelve el recibo original sin un segundo pulso, y una identidad anónima rechazada;
un último testamento retenido entregado tras una caída; una cadena de auditoría de 13 registros verificando y fallando
después de que se editara una denegación convirtiéndola en aprobación; y los tres roles de la consola comportándose.

Nada de eso mide qué tan bien el sistema reconoce rostros o rechaza engaños. Mide
si el protocolo y la máquina de estados hacen lo que afirman.

### Licencias

El código de este paquete y del repositorio upstream es Apache-2.0. **Los pesos del modelo
no lo son.** La detección de rostros y la incrustación usan `buffalo_l` de InsightFace; la propia
declaración de InsightFace es que el código es MIT sin limitación de uso comercial, pero que los
datos de entrenamiento — y los modelos entrenados con esos datos — están disponibles solo para fines de investigación
no comerciales. `buffalo_l` es uno de esos modelos: `license_id: non-commercial`,
`use_scope: non-commercial`, `redistributable: false`. Los pesos no se distribuyen aquí.

Dos consecuencias que vale la pena exponer antes de que se descubran tarde. Un despliegue comercial
debe sustituir el backbone de rostros por uno con licencia comercial. Y sustituirlo significa
**reconstruir cada versión de la biblioteca de rostros**, porque las incrustaciones no son comparables entre
modelos — una biblioteca construida con un backbone puntúa aproximadamente cero frente a otro, así que
las versiones antiguas están muertas en lugar de simplemente obsoletas. La protección `model_tag` en el manifiesto es
lo que impide que un dispositivo cargue una por error.

El modelo de liveness pasivo, Silent-Face-Anti-Spoofing de MiniVision, es Apache-2.0:
`use_scope: commercial`, redistribuible, usado sin modificar.

### Lo que esto no puede decirte

- **Si reconocerá a las personas en tu puerta.** El umbral incluido es un punto de partida; barre pares positivos y negativos en la cámara instalada y ajústalo a partir de eso.
- **Si rechazará una fotografía.** Liveness nunca se ha ejercitado contra muestras reales de engaño.
- **Qué tan rápido se abre la puerta con un relé y una cerradura cableados.** La cifra de apertura de puerta anterior se detiene en el pin de disparo; la respuesta del relé y de la cerradura no está incluida.
- **Si sobrevivirá una semana.** La resistencia offline y la prueba de esfuerzo de 72 horas están ambas abiertas.

## Fuentes de datos y recursos

Todas las rutas siguientes están en el repositorio upstream `unmanned-store-access`.

- Activación de la biblioteca de rostros, reCamera estándar: `evaluation/runs/2026-09-06-recamera-std-p3-r2/results.md` §2 y `boundary.facedb-activation.yaml` junto a él
- Activación de la biblioteca de rostros y lectura GPIO, reCamera Pro: `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` y los dos `boundary.*.yaml` junto a él
- Bucle de software y los seis límites pendientes: `evaluation/runs/2026-09-06-c1-software/results.md` y `boundary.{recognition,liveness,latency-direct,latency-p3,offline,soak72h}.yaml`
- Brecha de espacio de modelo de registro: upstream `docs/user-guide.md` §5.1 y `evaluation/runs/2026-09-07-recamera-pro-p1/results.md` §9.2
- Términos de licencia: `gallery/ATTRIBUTION.md` en el paquete de la solución, y la sección de licencias de la descripción del paquete
- Las capturas de pantalla de la consola en la página de diseño de referencia son **datos de demostración sintéticos**: las personas, puntuaciones y eventos son datos ficticios, no resultados de campo
