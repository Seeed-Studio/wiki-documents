---
description: Añade verificación facial a las operaciones controladas por voz en tu propio almacén o plataforma empresarial, de modo que cada comando se atribuya al operador que la cámara reconoció y no al nombre que se pronunció.
title: Lleva la IA de voz a tu sistema empresarial con verificación facial
keywords:
  - MCP
  - Reconocimiento facial
  - SenseCAP Watcher
  - Integración
  - ERP
  - WMS
  - Control por voz
  - Edge AI
  - Autenticación
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /solutions/mcp-face-auth-integration
sidebar_position: 7
last_update:
  date: 07/31/2026
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2026-07-31'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/es/solutions/mcp-face-auth-integration/
---

:::note[Notice]
El reconocimiento facial procesa datos biométricos, que están especialmente regulados en muchos lugares — el RGPD en la UE y el Reino Unido, BIPA en Illinois y otros. Haz que tu despliegue sea revisado antes de inscribir a una persona real; consulta [Biometric Data](#5-datos-biométricos) para ver qué recae sobre ti.
:::

## Descripción general

Lo que proporcionamos es un pequeño robot que se coloca en las instalaciones de tu cliente, mantiene una conversación y sabe con quién está hablando. Un operario se acerca con las manos ocupadas, dice "sacar de stock cuarenta unidades de los rodamientos M16", y la transacción llega a tu sistema atribuida a la persona que la cámara reconoció — no al nombre que se pronunció.

La matriz de micrófonos, la palabra de activación, el habla, el modelo de lenguaje y el reconocimiento facial llegan como un único producto ajustado, con una compilación totalmente local para clientes cuyo audio no puede salir del sitio. Lo que queda es la parte que solo tú puedes hacer: conectarlo a tu plataforma. Esa conexión es un **servidor MCP delante de tu propio sistema** — no adoptas nuestra plataforma. La referencia para construir uno es nuestra plataforma de almacén, con licencia MIT y de código abierto:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub 🖱️</font></span></strong></a>
</div>

El reconocimiento facial es la pieza estructural, porque un comando de voz no lleva identidad: el nombre que un modelo de lenguaje escribe en un registro es cualquiera que el hablante haya declarado, y decir el nombre de otra persona basta para falsificarlo. El reconocimiento puede ejecutarse en dos lugares, y elegir entre ellos es la principal decisión que esta página te ayuda a tomar.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-face-architecture.png" alt="Watcher captures voice and face, SenseCraft routes the MCP call, your MCP server applies the face gate before reaching your backend"/>
</div>

:::info Tres nombres en ese diagrama
**MCP** es el [Model Context Protocol](https://github.com/modelcontextprotocol), el estándar abierto mediante el cual un modelo de lenguaje llama a tus funciones. **XiaoZhi** es la pila de asistente de voz de código abierto que ejecuta el Watcher — palabra de activación, habla y decisión de qué herramientas tuyas llamar. **SenseCraft** es donde registras un dispositivo y obtienes el endpoint MCP que lo conecta con tu servidor.
:::

## Funciones

El control por voz sin identidad es una brecha de auditoría. Estas son las propiedades que la cierran.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Identidad que no se puede pronunciar</h3>
                <p>El nombre del operario se obtiene mediante coincidencia facial, no por el modelo de lenguaje. Un hablante que afirma ser otra persona sigue escribiendo su propia identidad verificada en el registro, porque los dos valores viajan en campos separados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="info-content">
                <h3>Una referencia funcional, no una caja negra</h3>
                <p>Toda la plataforma es de código abierto — capa de herramientas, puerta de verificación, almacén de embeddings y pantallas de administración. No estás integrando contra una especificación que no puedes inspeccionar; estás copiando código que ya se está ejecutando.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona con o sin caja de cómputo</h3>
                <p>Empieza en la propia NPU del dispositivo sin hardware adicional y luego mueve el reconocimiento a un servidor de inferencia en la LAN cuando necesites una lista más grande o anti-spoofing. El cambio es una modificación de configuración; tus herramientas MCP y tu base de datos no se tocan.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Aplicación por operación</h3>
                <p>Las reglas se establecen por operación y por almacén. Exige una cara para la salida de stock pero no para las consultas de stock, restringe una operación a una lista de permitidos con nombre o eleva el umbral de coincidencia para movimientos de alto valor — sin tocar el código de integración.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitectura del sistema

Coloca la puerta de verificación en la **capa de herramientas MCP**, por encima de tu lógica de negocio. Cada herramienta con puerta llama primero a la puerta y solo entonces toca tus datos. Mantenerla ahí — en lugar de dentro de cada método de negocio — es lo que hace que la garantía se mantenga de forma uniforme.

- **SenseCAP Watcher** captura el comando de voz y, según la ruta que elijas, realiza la coincidencia facial en su propia NPU o proporciona un fotograma de cámara cuando se le solicita.
- **Tu servidor MCP** expone tus operaciones de negocio como herramientas. Antes de ejecutar una herramienta con puerta, consulta tu endpoint de verificación y respeta el veredicto. La política debe ser **fail-closed**: cualquier cosa que no sea un permiso explícito bloquea la operación.
- **Tu backend** es el propietario de las personas inscritas, sus embeddings, las reglas y el registro de auditoría, y responde a la llamada de verificación con un veredicto más el nombre de la persona coincidente.
- **Tu API de negocio existente** permanece intacta. El servidor MCP es una nueva puerta de entrada, no una reescritura.

En la implementación de referencia estos son `mcp/warehouse_mcp.py` (capa de herramientas más la puerta `_enforce_face()`), `mcp/mcp_pipe.py` (transporte) y el `/api/face/verify-mcp` del backend con el orquestador y el comparador detrás.

### Hardware

Dos piezas. **SenseCAP Watcher** es el dispositivo con el que la gente habla y la cámara que los reconoce — siempre obligatorio. Una **caja de cómputo** en la misma LAN ejecuta el servicio de reconocimiento, y es lo que añades cuando pasas de un piloto.

|SenseCAP Watcher for XiaoZhi<br/>*the device on the floor*|A compute box<br/>*the recognition service*|
|:---:|:---:|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100051523-sensecap-watcher-xiaozhi-en.jpg" alt="SenseCAP Watcher for XiaoZhi" width={280} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={280} height="auto" />|
|ESP32-S3 con un coprocesador de visión Himax WiseEye2<br/>Cámara, micrófono y altavoz · Pantalla táctil de 1,45 pulgadas<br/>Wi-Fi 2,4 GHz y BLE 5 · Expansión Grove I2C|Ejecuta el modelo facial que usan tu inscripción y coincidencia<br/>Elimina el límite de 20 personas y añade anti-spoofing<br/>Elige el nivel que encaje — [opciones abajo](#elegir-una-caja-de-cómputo)|
|<p style={{textAlign: 'center'}}>[Consigue uno ahora!](https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html)</p>|<p style={{textAlign: 'center'}}>[Ver las opciones](#elegir-una-caja-de-cómputo)</p>|

Estríctamente hablando, la caja de cómputo es opcional: el Watcher puede hacer coincidencia facial en su propia NPU, lo cual es suficiente para un piloto. En la práctica ese modo te limita a 20 personas por dispositivo y no puede distinguir una cara de una fotografía de la misma, por lo que los despliegues en producción casi siempre añaden la caja. [Parte 2](#parte-2--elige-tu-ruta-de-verificación) cubre el intercambio completo.

Para poner el Watcher en la red y emparejarlo con un agente, consulta [SenseCAP Watcher for Xiaozhi AI](/es/sensecap_watcher_for_xiaozhi_ai).

## Pruébalo antes de construir

No tienes que leer código para averiguar si esto encaja con tu producto. Hay tres formas de entrar, en orden creciente de esfuerzo.

**Usa la instancia alojada — para la parte de voz.** Regístrate en [warehouse.seeed.cn](https://warehouse.seeed.cn/) y estarás hablando con un despliegue en funcionamiento. Empareja un Watcher con ella y podrás ejercitar el flujo de voz a inventario sin instalar nada. Ten en cuenta que **la verificación facial está desactivada en los despliegues compartidos**, por lo que esto te muestra la experiencia de voz, no la de identidad.

**Despliega el diseño de referencia — para la parte facial.** El diseño de referencia de Smart Warehouse empaqueta el mismo sistema para un despliegue con un solo clic. Como es una instancia privada, la verificación facial puede activarse, por lo que este es el camino más corto para ver en funcionamiento el verdadero tema de esta página.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_warehouse" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Reference Design 🖱️</font></span></strong></a>
</div>

**Pruébalo tú mismo.** Cuando estés listo para mirar dentro y empezar a adaptarlo:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
docker-compose -f docker-compose.prod.yml up -d
```

:::note La verificación facial necesita un despliegue privado
El reconocimiento facial está desactivado de forma predeterminada en las compilaciones en la nube y alojadas, y se habilita por despliegue. Si estás evaluando específicamente el flujo facial, planifica usar el diseño de referencia o una instancia autoalojada en lugar de una compartida.
:::

## Parte 1 — Crea tu servidor MCP

Una vez que lo hayas visto funcionar, decide cuánto quieres reutilizar. Hay dos opciones sinceras.

### Opción A — Reutilizar el puente, cambiar la fuente de datos

Si tu dominio es la gestión de almacenes, el camino más rápido es mantener la capa de herramientas de referencia y escribir una clase adaptadora. Heredas las definiciones de herramientas, la ingeniería de prompts de voz — desambiguación, lectura de candidatos, confirmación de cantidad — y la compuerta facial, y solo cambias de dónde vienen los datos.

```python
from .base import BaseProvider


class MyWmsProvider(BaseProvider):
    PROVIDER_NAME = "my_wms"

    def __init__(self, config: dict):
        super().__init__(config)
        # Point the HTTP helpers at your own system.
        self.base_url = config.get("wms_base_url", "").rstrip("/")
        self._token = config.get("wms_token", "")

    def get_auth_headers(self) -> dict:
        return {"Authorization": f"Bearer {self._token}"}
```

Implementa seis métodos obligatorios — `resolve_name`, `query_stock`, `stock_in`, `stock_out`, `search`, `get_today_statistics` — más dos opcionales, `query_batch` y `move_batch_location`.

:::caution Toma las firmas de `mcp/providers/base.py`
La capa de herramientas pasa estos argumentos **posicionalmente**, así que copia cada firma desde el código y no desde ninguna descripción en texto. Una firma que no coincida lanza `TypeError` en la primera llamada.
:::

:::danger Cambia el comportamiento de error antes de lanzar a producción
La capa de herramientas de referencia recurre a su Provider predeterminado integrado siempre que el tuyo falle al cargarse o lance una excepción — fallo de red, archivo ausente, configuración incorrecta — y registra una advertencia en lugar de fallar de forma ruidosa. En la referencia eso es una comodidad. En tu producto es un enrutamiento incorrecto de datos: un error transitorio envía las escrituras de inventario de tu cliente a la base de datos equivocada, en silencio.

Haz que el fallo del adaptador falle de forma ruidosa y rechace la operación. Esta es la única parte del comportamiento de referencia que no deberías copiar.
:::

### Opción B — Escribe tu propio servidor MCP

Si tu dominio no es la gestión de almacenes, los seis métodos no encajarán. Define tus propias herramientas con FastMCP y conserva solo `mcp_pipe.py` como transporte. Entonces implementas tú mismo la compuerta facial — consulta la [Parte 3](#Parte-3--lo-que-implementas).

```python
@mcp.tool()
def check_order_status(order_id: str) -> dict:
    """
    Check the status of a customer order.
    Use this when the user asks about order tracking or delivery status.

    Args:
        order_id: The unique order identifier (e.g., "ORD-2024-001")
    """
    return api_get(f"/orders/{order_id}/status")
```

Restricciones que provienen del contexto de voz, todas aprendidas por las malas:

- **Nunca llames a `print()`.** stdio es el canal del protocolo; cualquier cosa escrita a stdout corrompe el enmarcado JSON-RPC. Usa `logging`, que va a stderr.
- **Mantén pequeños los valores de retorno.** Un modelo de lenguaje los lee en voz alta. Mantente cerca de 1 KB; cargas útiles demasiado grandes alcanzan el límite de frame de WebSocket y cortan la conexión.
- **El docstring es la interfaz de usuario de la herramienta.** El modelo decide cuándo llamar a una herramienta y cómo rellenar sus argumentos a partir de ese texto. Describe la intención, no solo los tipos.
- **Reinicia después de cada cambio.** La lista de herramientas se informa una sola vez, en el handshake.

La guía completa del puente — obtener un endpoint MCP de SenseCraft, crear una clave de API, iniciar el puente y probar con voz — está en la página complementaria:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/es/mcp_external_system_integration/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Guía de configuración de MCP 🖱️</font></span></strong></a>
</div>

## Parte 2 — Elige tu ruta de verificación

Ambas rutas se ven idénticas para tus herramientas MCP — misma llamada de verificación, mismo veredicto. Difieren en dónde ocurre la comparación facial y, por tanto, en el tamaño del registro, la robustez y el coste de hardware.

Dos ajustes controlan esto, y son independientes:

- **`mode`** — *dónde* se ejecuta la inferencia: `local` (en el dispositivo) o `lan` (en un servicio que tú ejecutas).
- **`verify_frequency`** — *con qué frecuencia* ocurre la verificación: `always`, o una vez por conversación (`session`).

Cualquier combinación es válida.

| | Ruta 1 — En el dispositivo | Ruta 2 — Caja de cómputo externa |
| :--- | :--- | :--- |
| Valor de `mode` | `local` | `lan` |
| Dónde se ejecuta la comparación | NPU Himax WE2 dentro de SenseCAP Watcher | Tu servicio de inferencia en la LAN |
| Hardware adicional | Ninguno | Una caja de cómputo por sitio |
| Personas registradas | **20 por dispositivo**, un límite rígido del almacén en el dispositivo | Sin límite fijo |
| Modelo facial | MobileFaceNet, 128-D, INT8 — fijo | A tu elección |
| Anti-spoofing / detección de vida | **No disponible** | Compatible, si tu servicio lo informa |
| Umbral de coincidencia | Global | Global, con anulación por regla |
| Mejor para | Pilotos y pequeños equipos de un solo turno | Producción, registros más grandes, múltiples sitios |

:::caution La Ruta 1 no tiene detección de vida, y eso decide la mayoría de los despliegues
El comparador en el dispositivo compara caras; no puede distinguir una cara de una fotografía de esa cara. Cualquiera que sostenga una foto impresa de un operador autorizado pasa. Eso es aceptable para un piloto o un entorno de baja amenaza, pero no es un control antifraude — y disuadir la atribución deliberadamente incorrecta suele ser la razón por la que se financia esta función.

Combinado con el límite de 20 personas, esto significa que **la mayoría de los despliegues en producción terminan en la Ruta 2**. Trata la Ruta 1 como la forma de demostrar el flujo de trabajo, no como la versión barata del sistema terminado.
:::

:::tip Empieza en local, muévete a LAN más tarde
Ambas rutas usan los mismos registros de inscripción, reglas y registro de auditoría, y nada en tus herramientas MCP cambia cuando haces el cambio. Sin embargo, el movimiento no es gratuito: un modelo diferente implica un `model_tag` diferente, por lo que cada embedding inscrito tiene que volver a calcularse. Conserva la imagen de origen junto a cada embedding y eso se convierte en una tarea en segundo plano en lugar de volver a inscribir a todo el mundo.
:::

### Ruta 1 — Verificación en el dispositivo

El Watcher compara las caras por sí mismo. El backend envía una biblioteca de caras compacta al dispositivo a través de la LAN, el dispositivo la almacena en la flash y, en el momento de la verificación, el backend le pregunta al dispositivo a quién está mirando en ese momento.

#### Aún necesitas una fuente de embeddings

La comparación ocurre en el dispositivo, pero la *inscripción* no. Algo tiene que convertir cada foto en un embedding, y debe provenir del **mismo modelo que ejecuta el dispositivo** — un embedding de cualquier otro modelo facial cae en un espacio vectorial diferente y nunca coincidirá, por bueno que sea ese modelo. Así que esta ruta no es "sin inferencia de tu lado"; es "inferencia solo en la inscripción, y debe ser bit-compatible con el firmware".

La implementación de referencia incluye un espejo en el host del pipeline del dispositivo que es bit-exacto con respecto a la NPU en el dispositivo, publicado bajo la etiqueta de modelo `we2-mfnr6-128-v1`. Úsalo ya sea en el mismo proceso durante la inscripción, o como un pequeño servicio HTTP — establece `FACE_WE2_SIMULATOR_ENABLED=1` y habla el *mismo* contrato `/infer` que una caja de cómputo externa, lo que mantiene tu código de inscripción idéntico en ambas rutas.

:::caution Dos trampas de despliegue
Las rutas del simulador no llevan **ninguna autenticación** — nunca expongas ese puerto más allá de tu propio backend. Y el runtime INT8 no tiene wheel para musl, así que el contenedor necesita una imagen base con glibc; Alpine fallará al instalarlo.
:::

#### El flujo que construyes

**1. Inscribe a cada operador.** Toma una o más fotos por persona, convierte cada una en un embedding con el modelo compatible con WE2 anterior y guárdalo asociado a esa persona.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-enroll.png" alt="diálogo de inscripción en la implementación de referencia: carga de foto y ámbito de almacén"/>
</div>

**2. Registra cada dispositivo físico** con su IP de LAN y luego envíale la biblioteca de caras. Tu sistema necesita algún lugar donde registrar las direcciones de los dispositivos y una acción de envío por dispositivo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-devices-push.png" alt="dispositivo físico registrado bajo una conexión de agente, con una acción de envío de caras"/>
</div>

**3. Pregunta al dispositivo en el momento de la verificación** usando `GET /api/face/current-speaker` — consulta [El protocolo de comunicación del dispositivo](#2-el-protocolo-de-comunicación-del-dispositivo).

:::caution El dispositivo debe ser alcanzable desde tu backend
La verificación pregunta directamente al dispositivo. Si tu backend no puede alcanzarlo, el resultado correcto es una denegación, no un bypass. Rechaza direcciones públicas, de loopback y de enlace local al registrar un dispositivo — una compuerta facial que puede apuntarse a un host controlado por un atacante no es una compuerta.
:::

### Ruta 2 — Caja de cómputo externa

El reconocimiento se traslada a un servicio HTTP en tu red. El backend obtiene una imagen — proporcionada por quien llama, o tomada de la cámara del dispositivo — la envía a tu servicio para obtener el embedding y realiza él mismo la comparación de coseno contra el registro inscrito.

Esto elimina el límite de 20 personas, te permite ejecutar un modelo más grande y preciso, y habilita la detección de vida.

#### El contrato que implementa tu servicio

Dos endpoints. Ambos aceptan `Authorization: Bearer <token>` cuando se configura un token, y ambos deben responder en **10 segundos**.

```http
POST {endpoint}/infer
Content-Type: application/json

{"image_b64": "<base64-encoded image>"}
```

```jsonc
// Response
{
  "faces": [
    {
      "embedding": "<base64 float32 little-endian>",
      "det_score": 0.93,
      "live": true,
      "liveness_score": 0.9
    }
  ],
  "face_count": 1,
  "model_tag": "your-model-v1",
  "processing_time_ms": 12.3
}
```

```http
GET {endpoint}/health
```

```jsonc
// Response
{"status": "ok", "backend": "...", "model_tag": "your-model-v1",
 "capabilities": ["detect", "embed"], "embedding_dim": 512,
 "embedding_dtype": "float32"}
```

Comportamientos a tener en cuenta:

- Cuando se devuelven varias caras, se usa la que tiene el `det_score` más alto.
- Devolver `"live": false` bloquea la operación como un intento de suplantación.
- La dimensión del embedding la eliges tú, pero debe permanecer constante para un `model_tag` dado. La coincidencia se delimita por etiqueta, así que cambiar tu modelo implica publicar una etiqueta nueva.
- Conserva la imagen de origen con cada registro. Cuando cambie la etiqueta, eso es lo que te permite volver a calcular todo el registro en segundo plano en lugar de volver a registrar a todo el mundo.

#### El flujo que construyes

Tu backend obtiene una imagen, la envía por POST a `/infer` y compara mediante coseno el embedding devuelto con tu registro de inscritos, limitado al `model_tag` correspondiente. Guarda la URL del endpoint y su token como configuración, y ofrece a los operadores una prueba de conexión que llame a `/health` e informe de la etiqueta de modelo que encontró; consulta [La superficie de configuración](#3-la-superficie-de-configuración).

:::caution Ajusta el umbral a tu modelo
La referencia por defecto es un umbral de coseno de `0.45`, elegido para su modelo integrado de 128 dimensiones. Ese número no significa nada en un espacio de embedding diferente. Mide la distribución de puntuaciones de tu propio modelo en pares genuinos e impostores antes de elegir un umbral, y permite una anulación por regla para que las operaciones de alto valor puedan exigir una coincidencia más estricta.
:::

#### Elegir una caja de cómputo

El servicio de inferencia es un servicio HTTP sencillo, así que cualquier máquina en la LAN que pueda ejecutar tu modelo sirve. Estos son los sistemas listos para desplegar, de más baratos a más caros.

|reComputer RK3576-30|reComputer RK3588-30|reComputer AI Industrial R2135-12|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-rk3576.jpg" alt="reComputer RK3576-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={300} height="auto" />|
|Rockchip RK3576<br/>NPU de 6 TOPS · 8GB LPDDR5<br/>2x GbE — punto de entrada|Rockchip RK3588<br/>NPU de 6 TOPS · 8GB LPDDR5<br/>2x 2.5GbE, núcleos más rápidos|Raspberry Pi CM5 + Hailo-8<br/>26 TOPS · 8GB · 32GB eMMC<br/>IP40, de -20 a 65 °C, carril DIN|
|<p style={{textAlign: 'center'}}>[Consigue uno ahora](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)</p>|<p style={{textAlign: 'center'}}>[Consigue uno ahora](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)</p>|<p style={{textAlign: 'center'}}>[Consigue uno ahora](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html)</p>|

El reconocimiento facial es una carga ligera, así que las cajas de entrada son realmente suficientes para un único sitio: ambos modelos Rockchip llevan la misma NPU de 6 TOPS, y el RK3588 te da núcleos más rápidos y 2.5GbE en lugar de más rendimiento de inferencia. Sube al R2135 para un acelerador Hailo dedicado en una carcasa industrial para carril DIN.

:::note Fíjate en los nombres de producto cuando hagas el pedido
En esta familia, un nombre que contenga **AI Industrial** tiene refrigeración activa, y la línea **Industrial** a secas es sin ventilador. Se diferencian por una palabra y por lo demás son casi idénticos. La caja de la tabla anterior tiene ventilador; si el despliegue necesita refrigeración pasiva, pide en su lugar [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html), que envía el mismo Hailo-8 con una carcasa sin ventilador.
:::

#### Pasar a totalmente local (on‑premises)

Las cajas anteriores cubren el reconocimiento facial. Por defecto la mitad de *voz* — reconocimiento de voz, el modelo de lenguaje que elige la herramienta, síntesis de voz — se ejecuta en la nube. Para clientes cuya respuesta a «¿sale audio de nuestra red?» deba ser no, también suministramos toda esa canalización para ejecutarse in situ, en una caja más grande que la aloja junto al modelo de cara. La capacidad de memoria, no los TOPS, es lo que determina la dimensión.

|reComputer Robotics J4012|reComputer Mini J5012 with GMSL|NVIDIA Jetson AGX Thor Developer Kit|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110310-recomputer-robotics_2.jpg" alt="reComputer Robotics J4012" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" alt="reComputer Mini J5012 with GMSL" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-kit-3.png" alt="NVIDIA Jetson AGX Thor Developer Kit" width={300} height="auto" />|
|Jetson Orin NX 16GB<br/>Hasta 100 TOPS · 16GB LPDDR5<br/>**Una conversación a la vez**|Jetson AGX Orin 64GB<br/>64GB LPDDR5 · 64GB eMMC<br/>Entrada de 19-48V, 10GbE, GMSL y CAN|Jetson AGX Thor, GPU Blackwell<br/>128GB LPDDR5X a 273GB/s<br/>Modelo más grande, contexto más largo|
|<p style={{textAlign: 'center'}}>[Consigue uno ahora](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)</p>|<p style={{textAlign: 'center'}}>[Consigue uno ahora](https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html)</p>|<p style={{textAlign: 'center'}}>[Consigue uno ahora](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)</p>|

:::caution El J4012 ejecuta la pila, pero solo una sesión a la vez
Los 16 GB contienen toda la canalización, así que un único Watcher funciona bien. No atiende conversaciones concurrentes: lo que no puede hacer es que un segundo operador hable con un segundo dispositivo en el mismo momento. Dimensiona según el número de dispositivos que estarán en uso simultáneamente, no el número instalado.
:::

Elige el J4012 para un sitio de una sola estación, el Mini J5012 cuando la caja también tenga que funcionar con alimentación de vehículo o planta y hablar con buses industriales, y Thor cuando quieras concurrencia y el modelo más grande que una sola máquina pueda servir. En cualquier caso, se trata de una oferta combinada de hardware y software: [habla con nosotros](mailto:solution@seeed.cc) sobre la construcción in situ en lugar de montarla tú mismo.

## Parte 3 — Lo que implementas

Cinco piezas viven de tu lado. La implementación de referencia cubre las cuatro primeras, así que trata esta sección como un mapa de qué leer y reproducir.

### 1. El endpoint de verificación

Tu servidor MCP llama a un endpoint antes de cada herramienta protegida, y tu backend le responde. Mantén la forma que sigue y la capa de herramientas de referencia funcionará contra tu sistema sin cambios.

Solicitud:

```jsonc
POST /api/face/verify-mcp
{
  "operation": "stock_out",        // required — the rule key
  "warehouse_id": 1,
  "request_id": "…",               // for audit correlation
  "image_b64": "…",                // server-inference path
  "embedding_b64": "…",            // or a precomputed embedding
  "embedding_model_tag": "…",
  "device_id": "…"                 // from the transport, never from the model
}
```

Respuesta — siempre estas cinco claves:

```jsonc
{
  "status": "pass" | "deny" | "skipped",
  "failure_reason": "…",           // null when it passed cleanly
  "confidence": 0.87,
  "matched_subject_id": 12,
  "matched_subject_name": "Zhang San"
}
```

`pass` y `skipped` permiten la operación; `deny` la bloquea.

:::caution Falla en modo cerrado y cuida el presupuesto de tiempo
Trata cualquier error — 404, timeout, cuerpo mal formado — como `deny`, nunca como permitir. Y mantén tu manejador bien por debajo del timeout de cliente de **18 segundos**; pasado ese tiempo, el llamador registra un fallo de transporte y deniega de todos modos. Reserva presupuesto para el viaje de ida y vuelta al dispositivo dentro de ese tiempo: aproximadamente 6,5 s para leer al hablante actual, 8 s para capturar un fotograma, 10 s para llegar a un servicio de inferencia en la LAN.
:::

Dos valores de `status` que importan para la adopción: devuelve `skipped` cuando la función está desactivada o ninguna regla requiere una cara para esa operación. Eso hace que la compuerta sea transparente, de modo que puedas desplegar primero el servidor MCP y activar la verificación más tarde sin tocar el código de las herramientas.

### 2. El protocolo de cable del dispositivo

Esta es la parte que no puedes derivar de tu propio sistema, porque la habla el firmware del dispositivo. Tres endpoints, todos sobre HTTP simple en la LAN.

**Enviar la biblioteca de caras** (solo Ruta 1) — `POST http://<device-ip>:80/api/face/batch-update`. Ten en cuenta que el puerto está fijado en 80.

```jsonc
{
  "model_tag": "we2-mfnr6-128-v1",
  "embedding_format": "fp16",
  "faces": [{"name": "Zhang San", "subject_id": 12, "embedding_b64": "…"}],
  "match_threshold": 45,              // int, 0-100
  "identify_mode": "local",           // or "lan"
  "identify_endpoint": "…",
  "identify_token": "…",
  "pull_token": "…"                   // per-device, you generate it
}
```

Los embeddings van por el cable como `fp16` — 256 bytes para 128 dimensiones — mientras que tu base de datos conserva el `float32` canónico. Un `model_tag` que no coincida rechaza todo el lote.

**Leer al hablante actual** — `GET http://<device-ip>/api/face/current-speaker?fresh=0`, cabecera `X-Face-Token: <pull_token>`, devuelve `{valid, name, subject_id, similarity, mode, age_ms}`. Exige que `valid` sea estrictamente true.

**Extraer un fotograma de cámara** — `GET http://<device-ip>/api/face/capture`, misma cabecera, devuelve `image/jpeg`.

:::caution El endpoint de envío no está autenticado
`batch-update` no tiene autenticación en el lado del dispositivo. Cualquiera en la misma red puede sobrescribir la biblioteca de caras. Coloca estos dispositivos en un segmento de red de confianza o aislado.
:::

### 3. La superficie de configuración

Alguien tiene que elegir el modo, el umbral y qué operaciones requieren una cara. Necesitas pantallas para esto. Las pantallas de la implementación de referencia se muestran aquí **como una ilustración de las decisiones que tu propia interfaz debe exponer**: no estás iniciando sesión en la nuestra.

Modo de reconocimiento, frecuencia de verificación, umbral de confianza y endpoint remoto:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-config-verify-mode.png" alt="recognition mode, verification frequency, confidence threshold and remote endpoint"/>
</div>

Reglas por operación, con alcance por almacén, con una lista de permitidos y una anulación opcional del umbral:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-rules.png" alt="per-operation face rules with warehouse scope, allow-list and threshold override"/>
</div>

Un conjunto de reglas que vale la pena copiar:

| Clave de regla | Cubre |
| :--- | :--- |
| `stock_in` | Entrada de stock |
| `stock_out` | Salida de stock |
| `move_batch_location` | Reubicación de lote |
| `query` | Todas las operaciones de lectura — consulta de stock, consulta de lote, búsqueda, estadísticas |

Una lista de permitidos vacía significa que se acepta a toda persona registrada y activa. Una lista no vacía restringe la operación a esas personas, de modo que una coincidencia con alta confianza en cualquier otra persona sigue siendo denegada.

### 4. El Registro de Auditoría

Registra cada decisión, no solo los fallos: los aciertos son los que demuestran que una operación fue autorizada. Registra la persona coincidente, la confianza, el veredicto y el motivo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-audit-log.png" alt="face authentication audit log showing matched person, confidence and verdict per operation"/>
</div>

En tu tabla de transacciones, mantén el nombre verificado en su propia columna:

```sql
-- Snapshot of the operator name resolved by face recognition.
ALTER TABLE <your_inventory_transactions>
  ADD COLUMN actual_operator VARCHAR(255) NULL;
```

Tres restricciones, y la tercera es todo el punto:

1. **Debe permitir valores nulos.** Cuando la verificación está desactivada, o ninguna regla la requiere, el valor es `NULL`.
2. **Almacena el nombre, no una clave externa**: una instantánea, para que el registro siga leyéndose correctamente después de que la persona sea eliminada.
3. **Nunca lo fusiones con el campo de operador que rellena el modelo.** Ese campo refleja lo que la persona *dijo* y puede ser falso. Este refleja lo que la cámara *vio*. Fusionarlos colapsa un valor confiable en uno no confiable y descarta la única distinción que hace que valga la pena construir la verificación facial.

### 5. Datos Biométricos

Como tú construyes y alojas este lado, **tú eres el responsable del tratamiento de datos**. Cuatro decisiones que tomar deliberadamente en lugar de heredarlas:

- **Base jurídica y consentimiento** para cada persona registrada. Los datos biométricos de empleados en el trabajo también pueden implicar el derecho laboral y la consulta con el comité de empresa en algunas jurisdicciones.
- **Conservación y eliminación.** Eliminar a una persona debe eliminar sus embeddings, no solo desactivar una fila.
- **Si conservar o no las fotografías de registro.** Esta página recomienda conservar la imagen de origen para que la lista pueda volver a calcularse cuando cambie el modelo. Eso es una comodidad operativa con un coste de privacidad: es tu decisión, y vale la pena tomarla explícitamente.
- **Trata los embeddings como datos personales.** Son numéricos, pero identifican a una persona y están regulados como tales en la mayoría de las jurisdicciones.

## Una Trampa que Conviene Conocer

En la implementación de referencia, la puerta facial y el proveedor de datos leen el **mismo** campo de configuración `api_base_url`.

Apunta `api_base_url` a tu propio sistema sin implementar también `/api/face/verify-mcp` allí, y la puerta recibe un 404. Como la política es de fallo-cerrado, **todas las herramientas dejan de funcionar, incluidas las consultas de solo lectura**: un fallo confuso, ya que nada en el síntoma apunta al reconocimiento facial.

| `api_base_url` apunta a | Resultado de la puerta | Consecuencia |
| :--- | :--- | :--- |
| Tu sistema, sin `/face/verify-mcp` | `deny` · `http_404` | Todas las herramientas bloqueadas |
| Una dirección inaccesible | `deny` · `transport_error` | Todas las herramientas bloqueadas |
| Cadena vacía | `skipped` · `no_api_base` | Las herramientas se ejecutan, pero el Provider también pierde su URL base |
| Un backend que implementa el endpoint | Decidido por tus reglas | Correcto |

Dos salidas. Implementa el endpoint en tu propio backend, que es el destino de todos modos: devuelve primero un stub constante `skipped` si aún no estás listo para verificar:

```python
@app.post("/api/face/verify-mcp")
def verify_mcp():
    return {"status": "skipped", "failure_reason": "feature_disabled",
            "confidence": None, "matched_subject_id": None,
            "matched_subject_name": None}
```

O separa los campos, manteniendo `api_base_url` para la puerta y leyendo tu propia dirección desde una clave personalizada:

```yaml
provider: "my_wms"
api_base_url: "http://your-backend:2124/api"           # serves the face gate
auth:
  type: api_key
  key: "wh_xxx"
wms_base_url: "https://your-wms.example.com/api/v1"    # your business API
wms_token: "your-token"
```

Luego anula `base_url` en el constructor de tu Provider, como en [Parte 1](#opción-a--reutilizar-el-puente-cambiar-la-fuente-de-datos). Los dos conjuntos de credenciales permanecen independientes.

## Preguntas Frecuentes

### 1. Un push informa que se enviaron cero rostros

La biblioteca de rostros se filtra por etiqueta de modelo. Solo los registros que llevan `we2-mfnr6-128-v1` son aptos para un push en el dispositivo, por lo que los registros creados contra un endpoint remoto con una etiqueta diferente se excluyen silenciosamente: vuelve a registrar, o deja que termine el recálculo en segundo plano.

### 2. `actual_operator` siempre está vacío en nuestros registros

Es lo esperado cuando ninguna regla requiere un rostro para esa operación, o cuando la verificación está desactivada. Crea una regla para la operación para empezar a registrarlo.

### 3. Sustituimos nuestra propia fuente de datos pero las escrituras siguen llegando a la base de datos de referencia

La capa de herramientas de referencia recurre a su Provider predeterminado ante cualquier error y registra una advertencia en lugar de fallar de forma ruidosa. Revisa el registro del MCP para ver esa advertencia, y consulta la [Opción A](#opción-a--reutilizar-el-puente-cambiar-la-fuente-de-datos) sobre cómo cambiar este comportamiento antes de publicar.

### 4. La verificación es lenta o se deniega de forma intermitente

Tres tiempos de espera acotan la cadena: 18 segundos desde el cliente MCP hasta el backend, 10 segundos desde el backend hasta un servicio de inferencia remoto, y aproximadamente de 6,5 a 8 segundos desde el backend hasta el dispositivo. Estos son techos, no latencias típicas: mide las tuyas, porque se trata de una persona de pie frente a un terminal esperando. Si tu servicio de inferencia se acerca a los 10 segundos, reduce el tamaño del modelo o la resolución de la imagen.

### 5. ¿Podemos verificar una vez por conversación en lugar de por operación?

Sí. Establece la frecuencia de verificación en `session` y la primera comprobación exitosa se almacena en caché para esa conversación, hasta un máximo de 10 minutos.

Entiende lo que estás intercambiando: durante esos 10 minutos, cada operación de la conversación se atribuye a la persona que coincidió una vez al principio. Cualquiera que continúe esa conversación hereda la identidad. Usa `session` cuando la ventaja sea evitar avisos repetidos durante una larga ronda de picking, y `always` donde cada operación individual deba demostrarse de forma independiente.

## Recursos

- [warehouse_system en GitHub](https://github.com/suharvest/warehouse_system): la implementación de referencia. Comienza con `mcp/README.md` para la capa de integración, `mcp/providers/base.py` para el contrato del adaptador y el orquestador facial del backend para la lógica de verificación
- [Bring Voice AI to Your Business System (MCP)](/es/mcp_external_system_integration): la configuración del puente MCP sobre la que se basa esta página
- [Face Recognition with MCP](/es/face_regonition_with_mcp): la guía a nivel de dispositivo: flashear el firmware, poner en marcha un servicio de reconocimiento acelerado por Hailo y gestionar la base de datos de rostros
- [MCP Endpoint Setup Guide](/es/mcp_endpoint): creación y gestión de endpoints MCP
- [Model Context Protocol](https://github.com/modelcontextprotocol): especificación del protocolo

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
