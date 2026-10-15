---
description: "Crea un sistema local de alertas de zona restringida, cruce de línea y merodeo para una planta, almacén o puerta de sala de servidores: qué hardware necesitas, cómo desplegarlo, qué interfaces expone y los tiempos y el rendimiento medidos en tres hosts."
title: "Alertas de seguridad en el borde: zonas restringidas, cruce de línea y merodeo en el edge"
keywords:
  - seguridad en el edge
  - detección de intrusiones
  - seguridad perimetral
  - detección de cruce de línea
  - detección de merodeo
  - detección de personas
  - IA en el edge
  - reComputer
  - Jetson
  - RK3588
  - Hailo-8
  - MQTT
  - RTSP
image: https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png
slug: /solutions/edge-security
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/edge-security/
generated_from: sensecraft-solutions@edge_security
---

:::caution[Antes de confiar en esto]
Solo alerta asistida. No es un producto de seguridad certificado ni un sustituto de las rondas de vigilancia o de un sistema de control de acceso.
:::

## Qué hace esta solución

Dibuja una zona restringida o un cable trampa en la vista de la cámara; entrar o cruzar dispara una alerta, y permanecer dentro demasiado tiempo añade una alerta de merodeo. La detección, el veredicto, la evidencia y la distribución suceden todos en el host de borde en el sitio. El vídeo nunca sale, y sigue funcionando sin conexión a internet; el editor de reglas y el muro también obtienen su imagen del dispositivo in situ, con el navegador hablando con el host local.

![Tres personas están dentro de la zona restringida roja al final del pasillo mientras una cuarta cruza la línea ámbar, cuya flecha marca la dirección en la que la regla cuenta](https://files.seeedstudio.com/wiki/reference-design/edge_security/corridor-overlay-63abe979.jpg)

Las tres reglas:

| Regla | Se dispara cuando |
|---|---|
| Zona restringida | el centroide de una persona rastreada entra en el polígono que dibujaste |
| Merodeo | esa persona permanece dentro más allá del tiempo de permanencia que configuraste: **se suma a** la alerta de intrusión en lugar de reemplazarla |
| Cruce de línea | la trayectoria de esa persona cruza la línea que dibujaste; la línea puede contar solo en una dirección, así que el paso en sentido contrario permanece en silencio |

Las reglas se almacenan en coordenadas normalizadas, por lo que un cambio de resolución no requiere volver a dibujar. Mover la cámara sí lo requiere, porque las reglas se dibujan sobre esa vista.

El sistema son dos procesos. El **detector** realiza la detección de personas y el seguimiento por persona, y publica por MQTT en un formato de mensaje publicado. El **hub** se suscribe, evalúa las reglas, almacena las alertas y sirve el banco de trabajo. Una placa nueva solo necesita un detector nuevo, sin cambiar nada en la parte del veredicto.

Alcance: solo personas — vehículos, paquetes y herramientas necesitan un modelo de detección diferente y una validación nueva. Cada alerta almacena un fotograma, no un clip de vídeo; no hay grabación con valor probatorio.

- Implementación de código abierto: [github.com/suharvest/edge-security-kit](https://github.com/suharvest/edge-security-kit)
- Selección de hardware y despliegue: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/edge_security)

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Veredictos en el edge, el vídeo permanece en el sitio</h3>
                <p>La detección, el seguimiento y los veredictos de zona suceden en la caja local. Las alertas y las instantáneas cruzan el cable; el vídeo en bruto nunca sale.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div class="info-content">
                <h3>Las cámaras RTSP existentes se aprovechan</h3>
                <p>Ingiere flujos estándar RTSP H.264. Despliega sin reemplazar el hardware de cámara existente ni tender nuevo cable.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Autónomo, sin servidor en la nube</h3>
                <p>El broker, el motor de reglas y el banco de trabajo web se ejecutan en la caja. Se gestiona mediante navegador local sin suscripciones ni servidores en la nube.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" /></svg>
            </div>
            <div class="info-content">
                <h3>Multiplataforma y de código abierto</h3>
                <p>Compatible con Jetson (TensorRT), RK3588 (RKNN) y Hailo-8 (HailoRT). Los scripts de contenedores compose y de modelos son totalmente abiertos.</p>
            </div>
        </li>
    </ul>
</div>

### El banco de trabajo

**Muro de vídeo**: la imagen en vivo de cada flujo se organiza en una cuadrícula, con cajas de detección (id de pista y puntuación), el polígono de zona y la línea dirigida dibujados encima; una franja inferior cuenta los flujos en línea y las alertas pendientes y reconocidas.

![Muro de cuatro mosaicos: cajas superpuestas y formas de reglas en cada mosaico, un control deslizante de confianza por flujo y un mosaico fuera de línea bajo su velo](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-4up-en-25c00317.png)

*Captura de demostración: la fuente de vídeo es la fuente de barras de color del repositorio, usada para mostrar la interfaz, las superposiciones y los números.*

La cuadrícula se adapta al número de flujos, pasando a 3x3 por encima de cuatro.

![Muro de nueve mosaicos](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-9up-zh-0b724776.png)

*Captura de demostración.*

Pulsa `F` para pantalla completa: la barra superior se pliega y los mosaicos llenan la pantalla, para una pantalla HDMI en una sala de control.

![Modo de pantalla completa: la barra superior ha desaparecido y nueve mosaicos llenan la pantalla](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-fullscreen-zh-2509b6e9.png)

*Captura de demostración.*

**Dibujar reglas**: el fondo de la página de reglas es la propia imagen de la cámara, reenviada por el hub desde el endpoint de vista previa del detector, de modo que el límite que dibujas y el fotograma que el detector evalúa comparten el mismo espacio de coordenadas. Haz clic varias veces para cerrar un polígono (una zona restringida) o dos veces para trazar una línea; una línea cuenta en ambos sentidos, solo hacia adelante o solo hacia atrás. El merodeo es el tiempo de permanencia configurado en la zona. El botón Simulate ejecuta una alerta a través de toda la cadena (almacenada y enviada); las alertas simuladas se marcan y omiten el enfriamiento.

![Editor de reglas: cerrando un polígono de zona restringida y trazando una línea dirigida sobre la imagen en vivo](https://files.seeedstudio.com/wiki/reference-design/edge_security/rules-editor-4c1e3847.jpg)

**Ajustar de nuevo la confianza**: el umbral de cada flujo se cambia en el muro, sin editar un archivo de configuración ni reiniciar. 200 significa que el detector ya lo está usando; un rechazo explícito es 409; sin acuse de recibo a tiempo es 504, y la interfaz no se redibuja como si hubiera funcionado.

![Un control deslizante de confianza a mitad de cambio, con cuatro flujos leyendo cuatro valores diferentes](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-confidence-en-1f517542.png)

*Captura de demostración.*

**Añadir una cámara**: el cuadro de diálogo Add Camera adjunta un nuevo flujo en tiempo de ejecución, sin re-despliegue. El hub bloquea un id de flujo duplicado antes de que se envíe nada; un detector de flujo único responde con `ok:false` y la interfaz informa 409 con el motivo; cuando no llega acuse de recibo, el cuadro de diálogo permanece abierto y dice que el resultado es desconocido.

![El cuadro de diálogo de añadir cámara, con la contraseña RTSP enmascarada en la línea de eco](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-en-aff6fa40.png)

*Captura de demostración.*

![Tiempo de espera al añadir cámara: el detector no respondió, así que el cuadro de diálogo permanece abierto y dice que el resultado es desconocido](https://files.seeedstudio.com/wiki/reference-design/edge_security/wall-add-camera-timeout-zh-99ae7cc2.png)

*Captura de demostración.*

**Gestionar las alertas**: la lista se ejecuta de la más reciente a la más antigua, cada fila con el fotograma capturado cuando se disparó más dispositivo, flujo, nombre de regla, id de pista y puntuación. El reconocimiento registra el operador y la hora; la lista se filtra por dispositivo, flujo, nombre de regla y rango de tiempo, y las filas filtradas se exportan a CSV.

![Banco de trabajo de alertas: la lista de alertas con controles de disposición y la barra de deshacer](https://files.seeedstudio.com/wiki/reference-design/edge_security/workbench-alerts-9a0d30e9.jpg)

![Detalle de alerta: el fotograma capturado a tamaño completo y todos los campos de esa fila](https://files.seeedstudio.com/wiki/reference-design/edge_security/alert-detail-bd474e60.jpg)

## Qué hardware necesitas

### La cámara

Una cámara IP de montaje fijo por flujo, y **debe producir H.264**: la ruta de decodificación de cada canal está construida para ello. RTSP estándar, así que las cámaras que ya posees se quedan donde están.

### El host

Una sola máquina es suficiente: la detección, los veredictos y el banco de trabajo se ejecutan todos en ella.

| | Host | Acelerador | Decodificación de vídeo | Puertos usados | Disco libre |
|---|---|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/1/110110147.jpg" alt="reComputer J3011" width="110" /> | [reComputer J3011 / J4012](https://www.seeedstudio.com/reComputer-J3011-p-5590.html)<br/>Módulo Jetson Orin | GPU Jetson (TensorRT) | Decodificación por hardware NVDEC | 8090 / 1883 / 8099 | ~10 GB, incluida la construcción del motor |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26__1.png" alt="reComputer RK3588" width="110" /> | [reComputer RK3588 Series](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)<br/>NPU Rockchip | NPU Rockchip (RKNN) | Decodificación por hardware MPP integrada | 8090 / 1883 / 8099 | ~6 GB |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-recomputer-industrail-r2000.jpg" alt="reComputer Industrial R2035-12" width="110" /> | [reComputer Industrial R2035-12](https://www.seeedstudio.com/reComputer-Industrial-R2035-12-p-6542.html)<br/>Caja industrial sin ventilador | Hailo-8 (HailoRT) | Decodificación por software en CPU | 8090 / 1883 / 8099 | ~6 GB |

Requisitos previos específicos de la ruta:

- **Jetson**: el detector carga un motor TensorRT compilado en el propio dispositivo de destino, y el primer despliegue lo compila allí — medido en 361 s. La decodificación va por NVDEC, así que un host que no sea Jetson falla en las comprobaciones previas y no recurre a decodificación por software.
- **RK3588**: la placa necesita `/usr/lib/librknnrt.so`, un `python3` que pueda importar `rknn_toolkit_lite2`, y el nodo de decodificación por hardware `/dev/mpp_service`. Si falta cualquiera de ellos, la fase de despliegue falla de inmediato.
- **Hailo-8**: HailoRT debe coincidir con el driver (medido en 4.21.0). Los contextos del acelerador son exclusivos: ningún otro proceso puede mantener `/dev/hailo0`.

**Una lista de alertas para varios sitios**: despliega el preset de hub compartido — broker, motor de reglas y workbench en una máquina siempre encendida sin detector propio — y luego apunta el `mqtt_host` de cada detector hacia él. Los detectors no tienen que coincidir.

El hub no necesita un servidor propio: se midió en 3.7% de un núcleo y 52.8 MB de RSS en una placa RK3588 que también llevaba un detector.

### Límites de selección negativa

- **Número de flujos y carga**: para más de 8 canales de 1080p o 16 canales de 720p con seguimiento de fotograma completo, evita el J3011 de entrada; elige J4012 o RK3588 con decodificadores de vídeo por hardware.
- **Riesgo del enlace inalámbrico**: la analítica de vídeo perimetral es sensible a la pérdida de paquetes; evita Wi‑Fi monobanda para subidas RTSP multi‑flujo y asegúrate de tener Ethernet Gigabit por cable.

## Cómo desplegar en el sitio

Montaje: la puerta, pasillo o zona que estás protegiendo queda completamente dentro del encuadre, y una persona que pasa no queda oculta durante mucho tiempo detrás de estanterías, armarios o un pilar. Una vez ajustada, la cámara no debe moverse.

Los cuatro presets (caja única Jetson, caja única RK3588, caja única Hailo, hub compartido) son dos pasos: desplegar el stack y luego abrir el workbench. Las opciones completas de configuración y los paquetes están en la página del diseño de referencia:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/edge_security" target="_blank">
        <strong>Ver selección completa y pasos de despliegue en la página del diseño de referencia</strong>
    </a>
</div>

### Paso 1: desplegar el stack

Introduce la dirección del host y la URL RTSP de la cámara. Se levantan tres contenedores: `mosquitto` (broker), `hub` (motor de reglas y workbench) y `detector`.

El paso imprime la respuesta de salud del hub y la contraseña de administrador generada en el primer arranque — **no hay un valor predeterminado fijo**. La generada también se escribe en `/data/initial-password.txt` dentro del contenedor del hub. Luego imprime la ruta de decodificación que el detector negoció realmente; la decodificación por hardware es lo que quieres: `mppvideodec` en RK3588, `nvv4l2decoder` en Jetson.

### Paso 2: abrir el workbench

Navega a `http://<host>:8090`, inicia sesión como `admin` con la contraseña impresa y establece una nueva cuando se te solicite.

![Página de dispositivos: una fila por detector con disponibilidad, la ruta de decodificación realmente en uso y la versión del modelo](https://files.seeedstudio.com/wiki/reference-design/edge_security/devices-table-a04ae23a.jpg)

En la página **Devices**, confirma que el host está en línea y que la columna de decodificación muestra `hw`. El detector lee ese valor de las caps de GStreamer negociadas por el pipeline en vivo, no de un archivo de configuración.

## Qué interfaces expone

Tres formas de entrar:

- **Usar el workbench**: la sala de control vigila el muro y gestiona las alertas; la lista de alertas filtrada se exporta a CSV (`/api/alerts/export.csv`).
- **Extraer alertas a un sistema de negocio**: llama al endpoint REST del hub `GET /api/alerts`, filtrando por estado, dispositivo, flujo, nombre de regla y rango de tiempo; `after_id` recupera de forma incremental.
- **Traer tu propio detector o suscribirte a las detecciones**: los detectores publican `sensecraft.detection/1` sobre MQTT; el control en tiempo de ejecución usa `cmd/control` / `cmd/ack`.

En los presets de caja única el broker está ligado a loopback. Un suscriptor externo necesita que se abra el puerto y que se añada un archivo de contraseñas; ambos son obligatorios.

### El enlace ascendente de detección

Cada detector publica `sensecraft.detection/1`: las coordenadas son `frame_norm` (normalizadas al fotograma original); `track_id` empieza en 1, y dado que la permanencia y el cruce son estado por pista, un detector sin seguimiento no puede alimentar reglas del lado del hub; `session_id` cambia en cada inicio de proceso, de modo que el hub puede identificar un dispositivo reiniciado y restablecer el estado de sus reglas.

```json
{
  "version": "1.0",
  "device_id": "edge-sec-j4012-01",
  "stream_id": "camera_gate_north",
  "session_id": "sess_8f2a9c10",
  "timestamp": 1729000000.123,
  "detections": [
    {
      "track_id": 14,
      "class": "person",
      "confidence": 0.92,
      "bbox_norm": [0.42, 0.35, 0.58, 0.82]
    }
  ]
}
```

### El enlace descendente de control en tiempo de ejecución

La confianza de un flujo y las cámaras que un detector vigila pueden cambiarse en tiempo de ejecución sin reinicio. Los comandos viajan como `sensecraft.command/1` en `cmd/control` y se responden con `sensecraft.ack/1` en `cmd/ack`.

| `command` | `params` requeridos | Efecto |
|---|---|---|
| `set_conf_threshold` | `stream_id`, `conf_threshold` (0-1) | el detector del flujo funciona al nuevo umbral a partir de su siguiente fotograma |
| `add_stream` | `stream_id`, `source`; opcionales `name`, `rtsp_transport` | se inicia un nuevo flujo y aparece en el siguiente mensaje de estado |
| `remove_stream` | `stream_id` | ese flujo se detiene y desaparece del mensaje de estado |

Semántica de los acks:

- **`ok: true` significa que el cambio está en vigor**; un cambio que solo surte efecto tras reiniciar responde con `ok: false` indicando el motivo.
- **Las peticiones y los acks se emparejan por `request_id`**; un `request_id` repetido se aplica una vez y se confirma dos veces, de modo que un comando QoS 1 reentregado no añade un flujo dos veces.
- **`applied` es autoritativo**: el detector informa de lo que realmente hizo; `persisted` indica si el cambio se escribió de vuelta a la configuración y sobrevive a un reinicio.
- **La ausencia de respuesta cuenta como fallo**: la capa REST del hub responde 504. `cmd/control` es opcional, así que un detector sin canal de control aún puede conectarse; un detector que implemente solo algunos comandos confirma los demás con `ok: false`, indicando la capacidad que falta.

### El API REST del hub

| Método | Ruta | Notas |
|---|---|---|
| GET | `/api/alerts` | Filtra por `state`, `device_id`, `stream_id`, `event_type`, `rule_name` y un rango de fechas; 50 filas por defecto, las más recientes primero. Con `after_id` devuelve ids superiores en orden ascendente, de modo que una reconexión WebSocket pueda ponerse al día |
| GET | `/api/alerts/export.csv` | El mismo análisis de parámetros, como CSV UTF-8 con BOM |
| PUT | `/api/rules/{device_id}/{stream_id}` | Guarda reglas; el `rev` se incrementa |
| POST | `/api/rules/{device_id}/{stream_id}/simulate` | Ejecuta una alerta marcada como simulada a través de toda la cadena, omitiendo el cooldown y sin solicitar snapshot |
| PUT | `/api/devices/{device_id}/streams/{stream_id}/conf` | Retoca el umbral, con la semántica 200 / 409 / 504 anterior |
| POST | `/api/devices/{device_id}/streams` | Adjunta un flujo en tiempo de ejecución; 201 en caso de éxito |
| DELETE | `/api/devices/{device_id}/streams/{stream_id}` | Desadjunta un flujo |
| GET | `/api/devices/{device_id}/streams/{stream_id}/preview.jpg` | Proxy de previsualización de un solo fotograma, en caché 1.5 s. Un dispositivo inalcanzable o un cuerpo que no sea JPEG es un 502, no un marcador gris |

Todo excepto `/api/health` y la ruta de inicio de sesión requiere una sesión por cookie. La tabla de sesiones se persiste, por lo que las sesiones que no han expirado sobreviven a un reinicio del hub.

## Rendimiento y datos medidos

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/edge-security-kit" target="_blank">
        <strong>Ver código fuente y archivos Compose en GitHub</strong>
    </a>
</div>

### Tiempos de reglas

| Host de detección | Error de cruce de línea | Error de zona restringida | Error de merodeo | Dirección | Snapshots |
|---|---|---|---|---|---|
| reComputer J40 Serie (J4012, Orin NX 16GB) | 0.109-0.268 s | 0.090 s | 0.090-0.290 s | 8/8 correctas | 8/8 decodificables |
| reComputer RK3588 Serie | 0.085-0.248 s | 0.056-0.057 s | 0.080-0.233 s | 8/8 correctas | 8/8 decodificables |
| reComputer R2000 Serie (R2135-12, Hailo-8) | 0.006-0.189 s | 0.001 s | 0.004-0.200 s | 8/8 correctas | 8/8 decodificables |

Condiciones: los tres hosts ejecutaron la misma fuente de verdad H.264 de 1280x720 a 5 fps durante una ventana de observación de 130 s; el error es la diferencia entre la alerta y el instante de verdad, con una tolerancia de +/-0.5 s. Ningún host disparó en la dirección equivocada.

Reproducir: [edge-security-kit](https://github.com/suharvest/edge-security-kit).

| Métrica | Valor | Condiciones |
|---|---|---|
| Fotograma juzgado a alerta almacenada | p50 **23.8 ms** / p95 206.2 ms | reComputer R2000 Serie |
| Fotograma juzgado a alerta almacenada | p50 **117.4 ms** / p95 297.0 ms | reComputer J40 Serie |
| Alineación de trayectoria (cajas normalizadas frente a la trayectoria de verdad) | media 0.00115, máx. 0.00298 | reComputer J40 Serie |
| Alineación de trayectoria (cajas normalizadas frente a la trayectoria de verdad) | media 0.00204, p95 0.00322, máx. 0.00463 | reComputer RK3588 Serie |

### Rendimiento de un solo flujo

| Host de detección | Inferencia p50 | p95 | Pipeline completo p50 | CPU del detector | RSS | Decodificación |
|---|---:|---:|---:|---:|---:|---|
| reComputer J40 Serie (J4012, Orin NX 16GB) | 4.16 ms | 4.19 ms | 6.99 ms | 5.5% de un núcleo | 310 MB | NVDEC, confirmado en kernel |
| reComputer RK3588 Serie | 36.2-44.5 ms | 55.8-56.2 ms | 38.1-46.3 ms | 16.4-17.9% de un núcleo | 214 MB | Rockchip MPP, confirmado en kernel |
| reComputer R2000 Serie (R2135-12, Hailo-8) | 7.7 ms | 8.4 ms | 9.5 ms | 8.7-13.0% de un núcleo | 127-131 MB | Decodificación por software en CPU |

Condiciones: 30 s de calentamiento y luego una muestra de 120 s; `inference_time_ms` y `pipeline_ms` se leen de los campos del mensaje, con definiciones idénticas en todas las plataformas; la CPU es un porcentaje de un núcleo en ventanas de 5 s. El reComputer R2000 Serie no tiene decodificador H.264 por hardware, por lo que sus cifras de pipeline completo y CPU incluyen decodificación por software: la columna de inferencia se compara con los otros dos hosts, la columna de pipeline completo no, y la diferencia se amplía con la resolución. La latencia de un bucle de benchmark a máxima carga resulta optimista: el bucle es un 8% más rápido que el pipeline real en Jetson y entre un 6% y un 66% más rápido en RK3588.

Reproducir: [edge-security-kit](https://github.com/suharvest/edge-security-kit).

### Multitransmisión

Se midió la reComputer RK3588 Serie hasta 32 transmisiones:

| Transmisiones (720p @ 5 fps) | Resultado |
|---|---|
| 16 | **Tasa de origen completa**, peor p95 46.9 ms, NPU al 41% de su capacidad de tres núcleos, 1.4 de ocho núcleos de CPU, 7.3 GB de RAM libre |
| 24 | 119.9 inferencias/s, cuatro transmisiones pierden de uno a tres fotogramas; los tres núcleos de la NPU leen 79.5 / 61.3 / 42.6% |
| 32 | 157 de 160 solicitadas entregadas, catorce transmisiones pierden fotogramas, la p50 de inferencia sube de 33 a 99 ms |

- **RGA se satura antes que la NPU.** La pérdida de fotogramas a 32 transmisiones es `RGA_BLIT fail` en el escalador en tiempo de decodificación, y el recuento de fallos por transmisión coincide con las transmisiones que pierden fotogramas. La decodificación por hardware nunca hizo fallback; las 32 transmisiones se ejecutaron en `mppvideodec`.
- **Las implementaciones multitransmisión están limitadas por la memoria.** Los procesos recién iniciados ocupan 173-226 MB, pero los ciclos de referencia de rknnlite hacen que un proceso crezca: un detector que había estado ejecutándose durante dos días midió 1839 MB, y dieciséis de esos no caben en 16 GB. Usa el backend ctypes o un `gc.collect()` periódico para multitransmisión.
- Dos detectores concurrentes es la configuración más grande medida en un único hub compartido.

### Tiempos de ejecución y parámetros clave

El tiempo de ejecución y la ruta de decodificación de cada host están en la tabla de hosts bajo "Qué hardware necesitas". Parámetros que cambian el comportamiento de la implementación:

- `require_hw_decode` (activado por defecto): el detector rechaza la decodificación por CPU. Una página de dispositivo que muestra decodificación `sw` significa que se desactivó.
- `conf_threshold` por transmisión (0-1, ajustable en la pared en tiempo de ejecución): cuando un modelo int8 produce cajas adicionales de baja confianza, sube primero el umbral y vuelve a fp16 solo si eso no es suficiente.
- `preview_advertise_host`: debe ser la dirección LAN del host para que el hub pueda hacer proxy de un fotograma desde el puerto 8099; de lo contrario, el fondo de la página de reglas es gris.

### Degradación conocida

- La p50 de inferencia de la reComputer RK3588 Serie varía alrededor de 8 ms entre ejecuciones; la p95 es reproducible.
- Cuando el detector no puede seguir el ritmo de la transmisión, el rastreador sigue emitiendo nuevos IDs de seguimiento y una persona estacionaria genera alertas repetidas. Compara la tasa de detección en la página del dispositivo con la tasa de fotogramas de la cámara.

## Fuentes de datos y recursos

- El clip de verdad de temporización de reglas se compone mediante un script a partir de una trayectoria definida en segundos, por lo que los instantes reales de cruce y entrada se conocen antes de la ejecución.
- La fuente de vídeo en las capturas de pantalla del banco de trabajo es la fuente de prueba de barras de color del repositorio.
- El código de tiempo de ejecución puede incorporarse a un producto comercial, pero los modelos de detección de personas mantienen sus propios términos. Confirma que la licencia de los pesos de detección que uses se ajusta a tu producto, o sustituye por un modelo con licencia compatible.
