---
description: Ejecutar un sistema de gestión de almacén por voz en hardware perimetral: qué dispositivos necesitas, cómo el puente MCP conecta el habla con el inventario, cómo desplegar cada uno de los cinco niveles y resultados de pruebas de carga medidos en un dispositivo de la serie reComputer R2000
title: 'Gestión de almacén por voz en hardware perimetral: construcción, despliegue y resultados medidos'
keywords:
  - sistema de gestión de almacén controlado por voz
  - WMS perimetral
  - inventario de almacén MCP
  - gestión de inventario manos libres
  - asistente de voz sin conexión
  - SenseCAP Watcher
  - reComputer
  - Jetson
  - EdgeLLM
  - Qwen3
  - Model Context Protocol
  - integración ERP WMS
image: https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/og-v1.jpg
slug: /solutions/voice-warehouse-management
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/es/solutions/voice-warehouse-management/
generated_from: sensecraft-solutions@smart_warehouse
---

:::caution[Aviso de uso]
Esto es una ayuda para el operador, no un libro de inventario certificado. La REST API no tiene cola sin conexión: las solicitudes enviadas durante una caída de red o servicio fallan y no se reejecutan después de la recuperación.
:::

## Qué hace esta solución

Un operador en el muelle de recepción dice "registrar 10 cajas de manzanas". El SenseCAP Watcher en la estantería lo escucha y se escribe un registro de entrada de stock en la base de datos del almacén en una pasarela reComputer en el mismo edificio. Pregunta "cuántas manzanas quedan" y la respuesta se devuelve por voz. Sin teclear, sin menús, las manos permanecen en la mercancía.

Diseñado para ubicaciones donde las transacciones ocurren lejos de un teclado: muelles de recepción, pasillos de estanterías, cabinas de montacargas y pequeños almacenes que nunca adoptaron un WMS porque la formación costaba más de lo que ahorraba.

- Implementación de código abierto: [github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system)
- Elegir una configuración y desplegar: [página de diseño de referencia](https://www.seeed.cc/solutions/reference-designs/smart_warehouse)

El habla y la base de datos se conectan mediante **MCP (Model Context Protocol)**. El sistema de almacén publica cada operación de inventario como una herramienta MCP, y el agente de voz en el Watcher se conecta a ese endpoint como un cliente MCP. Añadir una acción de voz significa añadir una herramienta, sin reentrenar el modelo de voz; integrar un ERP/WMS existente significa mapear su interfaz de datos al mismo conjunto de herramientas.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/hero-banner-v4.png" alt="Un operador registra una transacción de almacén hablando con un SenseCAP Watcher montado en la estantería"/>
</div>

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Watcher funciona una vez montado</h3>
                <p>El SenseCAP Watcher incorpora el firmware del agente de voz y de reconocimiento facial. Flashea el dispositivo, móntalo en el puesto y los operadores podrán registrar stock por voz con verificación de identidad.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Los datos se quedan en el sitio</h3>
                <p>La base de datos del almacén se ejecuta en una pasarela reComputer en el sitio. El Nivel 3 también mantiene el reconocimiento, el LLM y la síntesis en las instalaciones y no llama a ningún servicio externo después del despliegue.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Código abierto, se conecta a tu ERP/WMS</h3>
                <p>El sistema de almacén es de código abierto. Conectar un sistema existente significa mapear su interfaz de datos al mismo conjunto de herramientas MCP, del orden de unas pocas docenas de líneas de código de mapeo.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Nuevos comandos sin reentrenar</h3>
                <p>Añadir una acción de voz significa registrar una herramienta MCP. El firmware del Watcher permanece sin cambios.</p>
            </div>
        </li>
    </ul>
</div>

### Qué muestra el panel

Tras una locución, el resultado aparece en el panel de la pasarela. La página de inventario lista la cantidad actual y el último movimiento de cada artículo:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/dashboard-657fc403.png" alt="Panel de almacén: stock actual por artículo, último movimiento y estado"/>
</div>

La página de transacciones lista cada entrada y salida de stock con número de lote, operador y origen (voz o REST):

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/records-944f9e33.png" alt="Historial de transacciones: número de lote, cantidad, operador y origen por registro"/>
</div>

La lista de operadores se mantiene en la página de usuarios, y la verificación facial la utiliza como referencia:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/users-8e30f2d0.png" alt="Página de usuarios: la lista de operadores y permisos que la verificación facial utiliza como referencia"/>
</div>

## Qué hardware necesitas

Tres roles de dispositivo. Cuáles compres depende de dónde se permita ejecutar los datos y la IA de voz.

**① Terminal de voz: SenseCAP Watcher.** Necesario en todos los niveles, uno por puesto de trabajo. Tiene dos procesadores: el ESP32 ejecuta el agente de voz Xiaozhi (palabra de activación, grabación, streaming, cliente MCP), y el Himax WE2 ejecuta el firmware de reconocimiento facial para la verificación del operador.

**② Pasarela perimetral.** Ejecuta el sistema de almacén y, en los niveles autoalojados, también el endpoint MCP. Determina si el reconocimiento facial puede trasladarse a la pasarela y cuántos puestos puede atender un solo host.

**③ Host de IA en las instalaciones.** Solo necesario cuando el reconocimiento, el LLM y la síntesis deben permanecer todos en las instalaciones.

| | Modelo | Rol en este diseño | Cuándo elegirlo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991275-sensecap-watcher-w1-b_1.jpg" alt="SenseCAP Watcher" width="110" /> | [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-B-p-5980.html) | Terminal de voz, cliente MCP, reconocimiento facial en el dispositivo | Siempre, uno por puesto |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html) | Pasarela perimetral que ejecuta el sistema de almacén | Los datos de inventario se quedan en el sitio, hasta 20 operadores, reconocimiento facial en el Watcher |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image_6.jpg" alt="reComputer Industrial R2135-12" width="110" /> | [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html) | Pasarela perimetral con un acelerador Hailo-8 | Más de 20 operadores, o se requiere detección de vida |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | Una sola caja que ejecuta el sistema de almacén, el reconocimiento facial y un servicio de voz autoalojado | 2–3 puestos comparten un host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100032662--recomputer-robotics-j5012-with-gmsl_1__1.jpg" alt="reComputer Robotics J5011" width="110" /> | [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html) | LLM y voz en las instalaciones, sin llamadas a servicios externos | La instalación debe permanecer sin conexión |

El Watcher almacena como máximo **20** plantillas faciales en el dispositivo. Más allá de 20 operadores, el reconocimiento tiene que trasladarse a la pasarela: hasta 20, elige el R1125; por encima de 20, elige el R2135 con Hailo-8.

Otros requisitos previos: el Watcher **solo se conecta a Wi‑Fi de 2,4 GHz** (un SSID solo de 5 GHz no aparece en el escaneo de aprovisionamiento), y la pasarela debe estar en la misma LAN. El prechequeo de despliegue del Nivel 3 verifica el runtime de contenedores de NVIDIA y alrededor de **10 GB** de espacio libre en disco (modelos de voz más archivos del motor LLM).

### Límites de selección negativa

- **Necesidades de LLM totalmente sin conexión**: Si se opera en un almacén clasificado o aislado por aire que requiere interacción con LLM sin conexión, evita los niveles dependientes de la nube; selecciona el Nivel 3 con reComputer J4012 (Orin NX 16GB).
- **Cola en caso de caída de red**: La REST API del almacén actualmente carece de una cola sin conexión del lado del servidor; los clientes deben almacenar en búfer las transacciones localmente si operan sobre una red inalámbrica intermitente.

## Cómo desplegar in situ

Tres pasos: montar y flashear el Watcher, iniciar los contenedores en la pasarela, conectar la ruta de voz.

### Paso 1: montar el Watcher

:::tip[Montarlo en el puesto de trabajo]
Monta el Watcher en el muelle de recepción, el pasillo de estanterías o la cabina de la carretilla elevadora, donde los operarios realmente registran la entrada y salida de existencias. Si se monta en la oficina, obliga a los operarios a recordar las cantidades y caminar hasta allí para introducirlas.
:::

El flasheo se realiza por USB-C; el dispositivo se enumera como un puente WCH USB-UART (`0x1a86:0x55d2`). Dos imágenes de firmware, una por procesador: el agente de voz Xiaozhi va en el ESP32, el firmware de reconocimiento facial en el Himax WE2.

### Paso 2: levantar la pasarela

El sistema de almacén es un servicio Docker. Los pasos de despliegue difieren por nivel; elige una configuración en la página de diseño de referencia y descarga el paquete de aplicación correspondiente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_warehouse" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Elige una configuración y descárgala 🖱️</font></span></strong>
    </a>
</div><br />

El despliegue puede ejecutarse por SSH hacia la pasarela o directamente en la pasarela. El inventario existente puede importarse en el primer arranque con la plantilla de Excel suministrada.

Tras el despliegue, el panel está en `http://GATEWAY_IP:2125`, y la comprobación de estado del contenedor es `GET /health` en el mismo puerto.

### Paso 3: conectar la ruta de voz

Trial, Tier 1 y Tier 2A usan una URL de endpoint MCP emitida por SenseCraft. Los niveles 2B y 3 autoalojan el endpoint MCP en el puerto `18004` y el servidor de voz en `18000` (consola de administración en `18003`). El nivel 3 añade EdgeLLM en `8000` y OpenVoiceStream en `8621`, y no llama a ningún servicio externo después del despliegue.

## Interfaces disponibles

Dos superficies de integración:

**Endpoint MCP (puerto `18004`): para el lado de voz.** Todo lo que el agente puede hacer es una herramienta en este endpoint. Ampliar el conjunto de comandos significa registrar otra herramienta; el firmware del Watcher permanece sin cambios. Integrar un ERP/WMS existente significa implementar la interfaz de datos de tu sistema contra las mismas herramientas, del orden de unas pocas docenas de líneas de código de mapeo. Las variaciones en la formulación se emparejan de forma difusa con el comando registrado más cercano en lugar de ser rechazadas.

**REST API (puerto `2125`): para otros sistemas.** La lista de inventario, el historial de transacciones y el estado del agente están disponibles sobre HTTP.

| Interfaz | Endpoint / puerto | Carga útil |
|---|---|---|
| Panel + REST API | `http://GATEWAY_IP:2125` | Lista de inventario, historial de transacciones, estado de conexión del agente |
| Comprobación de estado | `http://GATEWAY_IP:2125/health` | `200` una vez que el servicio de almacén está listo |
| Endpoint MCP | `18004` | Operaciones de inventario publicadas como herramientas MCP |
| Base de datos de inventario | SQLite en `/data/warehouse.db` en el volumen `warehouse_data` | Montar o volcar para un trabajo BI/ERP externo |
| Servidor de voz | WebSocket `18000`, consola de administración `18003` | Flujo de audio del Watcher (niveles 2B y 3) |
| IA local | `8000` EdgeLLM (compatible con OpenAI), `8621` OpenVoiceStream | Completados de chat; reconocimiento, síntesis y huella de voz (nivel 3) |

El acceso está delimitado por rol de clave de API y por inquilino. Una clave VIEW en un endpoint de escritura devuelve `403`; las lecturas y escrituras entre inquilinos devuelven ambas `403`. Ambas se midieron; consulta "Rendimiento y datos medidos".

## Rendimiento y datos medidos

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>warehouse_system</font></span></strong>
    </a>
</div><br />

### Tiempos de ejecución y parámetros clave

| Despliegue | LLM | TTS / ASR | Red |
|---|---|---|---|
| Nube SenseCraft | Alojado por Seeed | Alojado por Seeed | Requiere Internet |
| Tu propia API | Cualquier endpoint compatible con OpenAI (p. ej. DeepSeek) | OpenAI · Azure Speech · Volcano Engine · Alibaba Cloud · Edge TTS | Requiere Internet |
| Jetson local | EdgeLLM: Qwen3.5-4B, perfil `qwen35-4b-gdn-mtp`, motor 8k | OpenVoiceStream (reconocimiento + síntesis + huella de voz) | Solo LAN |

Las imágenes locales están construidas para JetPack 6.2 / TensorRT 10.3.

- `BUSINESS_RATE_LIMIT`: límite de velocidad para stock-out y otros endpoints de negocio, por defecto 600 solicitudes/minuto, contado por identidad autenticada (clave de API / sesión) y por IP de origen solo cuando no hay identidad disponible. Los límites anti-enumeración en registro, recuperación de contraseña y verificación de dispositivo cuentan por IP.
- Número de lote `batch_no`: formato `YYYYMMDD-NNN`, asignado de forma atómica, por lo que las escrituras de stock-in concurrentes se serializan.

### Mediciones de la REST API de almacén

Dispositivo: reComputer R2000 serie (arm64) ejecutando el contenedor de almacén. Condiciones: 60 s por nivel, 1 almacén, 50 materiales sembrados, backend SQLite; las solicitudes viajan sobre un enlace WAN Tailscale.

| Operación | Nivel | Resultado |
|---|---|---|
| `GET /api/materials/list` | concurrencia 10 | p95 404 ms, p99 2.7 s, 0% errores |
| `GET /api/materials/list` | concurrencia 20 | p95 824 ms, p99 5.3 s, 0% errores |
| `GET /api/materials/list` | concurrencia 50 | p95 5.5 s, p99 8.7 s, 0% errores |
| `POST /api/materials/stock-in` | concurrencia 5 / 10 / 20 | 0% errores en los tres niveles; 1481 lotes creados, 0 números de lote duplicados; p95 634 ms – 4.96 s |
| `POST /api/materials/stock-out` | concurrencia 10 / 20 / 50, dos claves de API compartiendo una IP de salida | 0 HTTP 429 dentro del valor por defecto de 600 solicitudes/minuto; unas 5–6 solicitudes/s por identidad |
| Interrupción del servicio | unos 10 req/s de tráfico de consulta, 34 s de interrupción por un reinicio de contenedor | 100% de las solicitudes fallan durante la interrupción, sin colas ni reintentos; recuperación completa en unos 1 s, sin acumulación, sin datos sucios |
| Aislamiento por rol e inquilino | 4 sondeos de un solo disparo | 4/4 como se esperaba: escritura con clave VIEW `403`, lectura `200`; escritura entre inquilinos `403`, lectura `403` |

Reproducir: `runs/2026-09-05-load/`, `evaluation/runs/2026-09-06-a2-retest/results.md`

### Rendimiento del LLM local

| Dispositivo | Modelo | Rendimiento | Condiciones |
|---|---|---|---|
| reComputer Robotics J5011 | EdgeLLM Qwen3.5-4B | unos 16 tokens/s | Cifra de referencia, sin registro de ejecución adjunto |

### Degradación conocida

- **La latencia de consulta de inventario se degrada a partir de concurrencia 20.** El p95 sube de 404 ms en concurrencia 10 a 824 ms en 20 y 5.5 s en 50, lo cual es demasiado lento para uso interactivo.
- **La REST API no tiene cola offline.** Las solicitudes enviadas durante una interrupción de red o servicio fallan y no se reintentan; la reconexión y el backoff solo cubren el canal WebSocket de voz MCP. Mitigaciones: mantener disponible la red de la pasarela (priorizar cableado, alimentación por SAI, servicio y clientes en la misma LAN) para que la ventana de indisponibilidad se reduzca al tiempo de reinicio del dispositivo; o añadir una cola de escritura en el lado del cliente que reproduzca en orden tras reconectar y desduplique por número de lote (la cola del lado del cliente no está implementada).

### Próximos pasos

- Ejecutar las pruebas de carga de la REST API de almacén en la pasarela reComputer R1125-10.

## Fuentes de datos y recursos

- Cifras de pruebas de carga, condiciones de prueba y límites conocidos: upstream `sensecraft-solutions@smart_warehouse` `description.md`, "Measured Boundaries" y "Known Limitations".
- Rendimiento del LLM local (unos 16 tokens/s, reComputer Robotics J5011): la sección "Preset: Tier 3 · Premium" del `guide.md` upstream.
- Roles de dispositivos, composición de niveles y requisitos de acelerador: `intro.device_catalog` e `intro.presets` en el `solution.yaml` upstream.
- Código fuente del sistema de almacén: [github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system).
- Imágenes de producto: catálogo de productos de Seeed Studio (media-cdn.seeedstudio.com).
- Imágenes de escenas: recursos de soluciones de Seeed Studio (files.seeedstudio.com).
