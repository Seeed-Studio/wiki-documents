---
description: Guía para integrar sistemas empresariales externos con SenseCAP Watcher mediante MCP
title: Lleva la IA de voz a tu sistema empresarial (MCP)
sidebar_position: 6
keywords:
  - MCP
  - API
  - Integración
  - Almacén
  - Control por voz
  - Watcher
  - Sistema externo
  - Dispositivos con IA
  - Qwen
  - OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /mcp_external_system_integration
last_update:
  date: 04/07/2026
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2025-12-01'
updatedAt: '2026-04-07'
url: https://wiki.seeedstudio.com/es/mcp_external_system_integration/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Descripción general

Esta guía muestra cómo utilizar el Protocolo de Contexto de Modelo ([MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)) para conectar la IA de voz con tu ecosistema de software existente. Al envolver tus API REST como herramientas MCP, permites que ***SenseCAP Watcher*** interactúe directamente con tu lógica de negocio, ya sea un Sistema de Gestión de Almacenes (WMS), CRM, ERP o un panel de TI personalizado.

<table class="table-center">
  <tr>
      <th>Interacción espacial inteligente</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Paquete de solución 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeed.cc/solutions/voicecollectionanalysis-zh-hans" target="_blank">Interacción espacial inteligente</a></h2>
      <p>De voz a API: transforma la intención en acción. No construyas una nueva aplicación desde cero. Simplemente expón tus endpoints WMS existentes al Watcher para habilitar control por voz inmediato para tu personal.</p>
  </div>
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" y1="19" x2="12" y2="23"></line>
                    <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
            </div>
            <div class="info-content">
                <h3>Productividad realmente manos libres</h3>
                <p>Los operarios pueden consultar existencias o registrar envíos mientras llevan guantes o conducen carretillas elevadoras. Mantén la vista en la tarea y las manos en el volante para lograr la máxima seguridad y eficiencia.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                    <path d="M3 3v5h5"></path>
                    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                    <path d="M16 21h5v-5"></path>
                </svg>
            </div>
            <div class="info-content">
                <h3>Sincronización de datos sin latencia</h3>
                <p>Elimina el retraso de los registros en papel. Los comandos de voz disparan llamadas API directas a tu ERP, garantizando que los datos de inventario se sincronicen en el instante en que un artículo se mueve.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
            </div>
            <div class="info-content">
                <h3>Interoperabilidad universal de sistemas</h3>
                <p>Tanto si utilizas SAP, Oracle o un backend SQL personalizado, si tu sistema tiene una API, Watcher lo controla. No es necesario migrar sistemas heredados para adoptar IA.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitectura

Comprender el flujo de datos es esencial antes de escribir código. La integración sigue un patrón de puente donde el **Servidor MCP** actúa como una puerta de enlace segura entre la IA y tu red interna.

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**Componentes clave:**

1. **Dispositivo Watcher:** Captura la intención en lenguaje natural (por ejemplo, "Comprobar existencias") y la envía a la nube.
2. **Endpoint MCP (Nube):** Un túnel seguro proporcionado por SenseCraft que reenvía la intención a tu entorno local.
3. **Servidor MCP (Puente local):** Un script ligero de Python que se ejecuta en tu máquina. Traduce la intención de la IA en funciones de código específicas.
4. **API de backend:** Tu aplicación empresarial existente (FastAPI, Flask, etc.) que ejecuta la lógica real.
5. **Infraestructura:** Base de datos u otros servicios de los que dependa tu backend.

**Escenarios de integración universal**:

Aunque esta guía utiliza un **sistema de almacén** como implementación de referencia, la arquitectura se aplica de forma universal:

| **Industria**    | **Comando de voz**                 | **Acción subyacente del sistema** |
| --------------- | --------------------------------- | ---------------------------------- |
| **Logística**   | *"Ingresar 50 unidades en stock."*            | `POST /api/inventory/add`    |
| **Ventas (CRM)** | *"Actualizar el estado de la oportunidad a Cerrado."* | `PUT /api/deals/{id}/status` |
| **Operaciones de TI**      | *"Reinicia el servidor de staging."*   | `POST /api/servers/restart`  |

## Demo 1: Almacén controlado por voz

Simularemos un entorno empresarial ejecutando un **backend de almacén** simulado y un **puente MCP** en tu máquina local. Esta demostración permite:

- 🗣️ **Consulta de inventario:** "¿Cuántas unidades Xiaozhi Standard tenemos?"
- 🗣️ **Entrada de datos:** "Ingresa en stock 5 unidades de Watcher Xiaozhi."
- 🗣️ **Información de negocio:** "¿Cuál es el resumen de inventario de hoy?"

### Requisitos previos

- **Hardware:** SenseCAP Watcher, ordenador con soporte para Docker
- **Software:** Docker o [Docker Desktop](https://www.docker.com/products/docker-desktop/) (incluye Docker Compose), Git
- **Cuenta:** cuenta en la [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

:::note Configuración de Watcher
Asegúrate de que tu SenseCAP Watcher esté configurado con **Xiaozhi AI** mediante el [Centro de Dispositivos SenseCraft AI](https://sensecraft.seeed.cc/ai/device/local/37).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>
:::

### Paso 1: Desplegar el sistema de almacén

Utilizamos Docker para el despliegue a fin de garantizar un entorno coherente en todas las plataformas (Windows, macOS, Linux).

**1. Clonar el repositorio**:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. Iniciar con Docker Compose**:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

Este único comando hará lo siguiente:

- Compilar y arrancar el servidor de la aplicación de almacén (puerto 2125)
- Crear un volumen persistente para tu base de datos

**3. Verificar el despliegue**:

Espera unos 30 segundos para que el contenedor se inicie y luego comprueba:

```bash
docker-compose -f docker-compose.prod.yml ps
```

Deberías ver el contenedor `warehouse-prod` en ejecución.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="API Documentation"/>
</div>

- **Interfaz web:** Abre `http://localhost:2125` en tu navegador
- **Documentación de la API:** Abre `http://localhost:2125/docs` para ver la interfaz Swagger

### Paso 2: Configuración inicial del sistema

El sistema de almacén incluye autenticación de usuario y gestión de claves API por motivos de seguridad. Debes configurarlo antes de conectar MCP.

**1. Crear cuenta de administrador**:

Abre `http://localhost:2125` en tu navegador. En la primera visita, verás un formulario de registro:

- Introduce el **nombre de usuario** que desees (por ejemplo, `admin`)
- Introduce una **contraseña** (por ejemplo, `admin123`)
- Haz clic en **Register**

:::tip El primer usuario es administrador
El primer usuario registrado se convierte automáticamente en administrador.
:::

**2. Inicia sesión y ve a la gestión de usuarios**:

Después del registro, inicia sesión con tus credenciales. Haz clic en la pestaña **User Management** en la barra de navegación.

**3. Crear una clave API**:

En la sección de gestión de usuarios, busca el área de **API Key Management**:

1. Introduce un nombre descriptivo para la clave (por ejemplo, `MCP Bridge`)
2. Haz clic en **Create API Key**
3. **Importante:** ¡Copia la clave API generada de inmediato! Solo se mostrará una vez.

La clave API tiene este formato: `wh_xxxxxxxxxxxxxxxxxxxx`

:::warning Guarda tu clave API
La clave API solo se muestra una vez cuando se crea. Guárdala de forma segura: la necesitarás en el siguiente paso.
:::

### Paso 3: Configurar el puente MCP

Ahora conectamos el backend con la IA. El código del puente se encuentra en el directorio `mcp/`.

:::tip Instalar uv
El puente MCP utiliza `uv` como su gestor de entornos Python. Instálalo con:

<Tabs>
<TabItem value="mac" label="Linux/macOS" default>

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

</TabItem>
<TabItem value="win" label="Windows (PowerShell)">

```powershell
irm https://astral.sh/uv/install.ps1 | iex
```

</TabItem>
</Tabs>

:::

**1. Obtener el endpoint MCP**:

Obtén tu **dirección de endpoint MCP** (`wss://...`) desde la [plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. Configurar la clave de API**:

Abre una terminal y navega a la carpeta `mcp`:

```bash
cd mcp

# Copy the example config file
cp config.yml.example config.yml
```

Edita `config.yml` con tu clave de API del Paso 2:

:::caution
El `api_base_url` predeterminado en `config.yml.example` es `http://localhost:2124/api` (el puerto de desarrollo local). Como hicimos el despliegue con `docker-compose.prod.yml`, que usa el puerto **2125**, debes actualizarlo en consecuencia.
:::

```yaml
# Backend API address (change from default 2124 to 2125 for Docker deployment)
api_base_url: "http://localhost:2125/api"

# API key authentication (from User Management -> API Key Management)
auth:
  type: api_key
  key: "wh_your-api-key-here"
```

**3. Iniciar el MCP Bridge**:

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

```bash
# Set the MCP Endpoint (replace with your actual address)
export MCP_ENDPOINT="wss://your-endpoint-address"

# Start the Bridge
./start_mcp.sh
```

</TabItem>

<TabItem value="win" label="Windows (PowerShell)">

```powershell
# Set the MCP Endpoint (replace with your actual address)
$env:MCP_ENDPOINT="wss://your-endpoint-address"

# Start the Bridge
./start_mcp.ps1
```

</TabItem>

</Tabs>

Si tiene éxito, verás: `MCP 服务启动成功！` (MCP Service Started Successfully)

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### Paso 4: Verificación

Todo está conectado. Ahora, utiliza el SenseCAP Watcher para interactuar con tu sistema local.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

Ahora podemos probar la integración usando tu dispositivo Watcher.

### Ejemplos de comandos de voz

| Comando de voz                                         | Acción esperada                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Query the stock of Xiaozhi Standard Version"          | Llama a la herramienta `query_stock`                  |
| "How many Xiaozhi Professional Version do we have?"    | Llama a `query_stock` con la versión profesional      |
| "Stock in 5 units of Watcher Xiaozhi Standard Version" | Llama a la herramienta `stock_in` con quantity=5      |
| "Stock out 3 Xiaozhi units for sales"                  | Llama a la herramienta `stock_out` con quantity=3     |
| "What's today's inventory summary?"                    | Llama a la herramienta `get_today_statistics`         |
| "List all Xiaozhi products"                            | Llama a la herramienta `search` con entity_type="material" |

**¿Qué ocurre entre bastidores?**

| **Componente** | **Acción**                                          |
| -------------- | -------------------------------------------------- |
| **Watcher**    | Envía el audio de voz a la nube.                   |
| **MCP Bridge** | Recibe la intención y determina que la herramienta es `query_stock`. |
| **Sistema**    | Ejecuta `GET /materials/product-stats` con autenticación por clave de API. |
| **Resultado**  | Watcher dice: *"Current stock is 150 units."*      |

### Respuestas esperadas

**Consulta de stock:**

> "The stock query was successful. Watcher Xiaozhi Standard Version currently has 150 units in stock at location A-01-01. Stock status is normal."

**Entrada de stock:**

> "Successfully added 5 units of Watcher Xiaozhi Standard Version. Previous quantity was 150, new quantity is 155."

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## Personalizar para tu sistema

La demostración del almacén es solo un punto de partida. El MCP bridge utiliza una **arquitectura de plugins de proveedor** — no necesitas modificar ningún código existente. En su lugar, creas un nuevo proveedor para adaptar el bridge a tu propio sistema backend.

### Cómo funciona

El bridge tiene una clara separación de responsabilidades:

- **`warehouse_mcp.py`** — Define 6 herramientas MCP fijas (`query_stock`, `stock_in`, `stock_out`, `search`, `resolve_name`, `get_today_statistics`). **No necesitas modificar este archivo.**
- **`providers/base.py`** — Clase base abstracta que define la interfaz (6 métodos).
- **`providers/default.py`** — Implementación predeterminada para el backend de almacén de la demo.
- **Tu proveedor personalizado** — Un nuevo archivo `.py` en `providers/` que adapta los 6 métodos al API de tu sistema.

### 1. Crear un proveedor personalizado

Crea un nuevo archivo `mcp/providers/my_erp.py`:

```python
from .base import BaseProvider

class MyERPProvider(BaseProvider):
    """Adapter for My ERP System."""

    PROVIDER_NAME = "my_erp"

    def query_stock(self, product_name, show_batches=False):
        # Call your ERP's inventory API
        return self.http_get(f"/inventory/query", params={"sku": product_name})

    def stock_in(self, product_name, quantity, reason, operator, fuzzy,
                 location=None, contact_id=None, variant=None):
        return self.http_post("/inventory/receive", {
            "sku": product_name, "qty": quantity, "note": reason
        })

    def stock_out(self, product_name, quantity, reason, operator, fuzzy,
                  variant=None):
        return self.http_post("/inventory/ship", {
            "sku": product_name, "qty": quantity, "note": reason
        })

    def search(self, query, entity_type, category, status, contact_type,
               fuzzy, include_batches=False, max_results=0):
        return self.http_get("/search", params={"q": query, "type": entity_type})

    def resolve_name(self, text, entity_type="all"):
        return self.http_get("/fuzzy-match", params={"q": text})

    def get_today_statistics(self):
        return self.http_get("/dashboard/today")
```

La clase base (`BaseProvider`) proporciona los helpers integrados `http_get()` y `http_post()` con inyección automática de cabeceras de autenticación y manejo de errores, de modo que el código de tu proveedor se mantiene mínimo.

:::tip Auto-Discovery
Simplemente deja el archivo `.py` en `mcp/providers/`. El bridge detecta y registra automáticamente todas las subclases de `BaseProvider`, sin necesidad de registro manual.
:::

### 2. Configurar mediante `config.yml`

Si aún no lo has hecho, primero crea `config.yml` a partir de la plantilla:

```bash
cd mcp
cp config.yml.example config.yml
```

Luego cambia a tu proveedor y apunta a tu servidor real — **no se requieren cambios de código**:

```yaml
# Switch to your custom provider
provider: "my_erp"

# Your production API address
api_base_url: "http://192.168.50.10:8080/api/v1"

# Authentication (supports api_key, bearer, basic)
auth:
  type: api_key
  key: "your-production-api-key"
```

También puedes sobrescribir la configuración usando variables de entorno: `WAREHOUSE_API_URL`, `WAREHOUSE_API_KEY` y `WAREHOUSE_PROVIDER`.

<details>

<summary>Métodos de autenticación compatibles</summary>

La clase base admite varios tipos de autenticación de forma nativa mediante `config.yml`:

```yaml
# API Key (default)
auth:
  type: api_key
  header: X-API-Key    # optional, defaults to X-API-Key
  key: "your-key"

# Bearer Token
auth:
  type: bearer
  token: "your-bearer-token"

# Basic Auth
auth:
  type: basic
  username: "admin"
  password: "secret"
```

Para autenticación personalizada (por ejemplo, firma HMAC), sobrescribe el método `get_auth_headers()` en tu proveedor.

</details>

<details>

<summary>Mejores prácticas para el desarrollo de proveedores</summary>

### Formato del valor de retorno

El valor de retorno es leído por la IA para generar una respuesta hablada. Mantenlo conciso (normalmente por debajo de 1024 bytes).

```Python
# Good — concise
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# Bad — too verbose
return {
    "success": True,
    "full_product_details": {...},
    "complete_history": [...]
}
```

### Manejo de errores

Las funciones `http_get()` / `http_post()` de la clase base ya manejan errores de conexión y códigos de estado HTTP. Para errores adicionales de lógica de negocio, devuelve un diccionario de error estructurado:

```Python
return {
    "success": False,
    "error": "Product not found",
    "message": "No matching product in the ERP system."
}
```

### Registro (logging)

:::danger Nunca uses print()
MCP utiliza la entrada/salida estándar (stdio) para la comunicación. Usar `print()` corromperá el flujo de datos del protocolo. Utiliza siempre un logger:
:::

```Python
import logging
logger = logging.getLogger("WarehouseMCP")
logger.info(f"Querying stock for: {product_name}")
```

</details>

### 3. Desplegar para producción

La demo se ejecuta en tu terminal local. Para una operación 24/7 a largo plazo:

- **Dockerizar:** Empaqueta la carpeta `mcp/` en un contenedor Docker para garantizar la estabilidad del entorno.
- **Servicio en segundo plano:** En lugar de ejecutar `./start_mcp.sh` en una terminal abierta, utiliza `systemd` (Linux) o `NSSM` (Windows) para ejecutar el script como un servicio en segundo plano.
- **Red:** Asegúrate de que la máquina que ejecuta el MCP Bridge tenga acceso estable a internet para conectarse a SenseCraft Cloud (`wss://...`).

## Solución de problemas

<details>
<summary>❌ Los contenedores de Docker no se inician</summary>

- **Síntoma:** `docker-compose ps` muestra los contenedores en estado "Exited".
- **Solución:**
  1. Comprueba que Docker Desktop esté en ejecución
  2. Revisa los logs: `docker-compose -f docker-compose.prod.yml logs`
  3. Asegúrate de que el puerto 2125 no esté en uso
  4. Intenta reconstruir: `docker-compose -f docker-compose.prod.yml up -d --build`

</details>

<details>
<summary>❌ Clave de API no válida (401 Unauthorized)</summary>

- **Síntoma:** Los registros de MCP bridge muestran `401 Unauthorized` o "Invalid API Key".
- **Solución:**
  1. Verifica que la clave de API en `mcp/config.yml` sea correcta
  2. Comprueba que la clave de API siga activa en User Management
  3. Asegúrate de que no haya espacios adicionales ni comillas alrededor de la clave
  4. Intenta crear una nueva clave de API

</details>

<details>
<summary>❌ Servicio Backend no se está ejecutando</summary>

- **Síntoma:** La IA responde con "Cannot connect to backend service".
- **Solución:**
  1. Comprueba que el contenedor se está ejecutando: `docker-compose -f docker-compose.prod.yml ps`
  2. Verifica el estado del backend: `curl http://localhost:2125/api/dashboard/stats`
  3. Revisa los registros: `docker-compose -f docker-compose.prod.yml logs`

</details>

<details>
<summary>❌ Tiempo de espera de conexión MCP agotado</summary>

- **Síntoma:** El script se queda colgado en "Connecting to WebSocket server..." indefinidamente.
- **Solución:**
  1. Verifica que tu `MCP_ENDPOINT` sea correcto (revisa errores tipográficos).
  2. Asegúrate de que la URL comience con `wss://` (WebSocket seguro).
  3. Comprueba tu conexión a internet (tráfico saliente hacia SenseCraft Cloud).

</details>

<details>
<summary>❌ Herramienta no reconocida</summary>

- **Síntoma:** Dices un comando, pero la IA dice "I don't know how to do that" o no activa la herramienta.
- **Solución:**
  1. **Comprueba el nombre:** Utiliza nombres de funciones claros y descriptivos en inglés.
  2. **Comprueba los docstrings:** Asegúrate de que el docstring describa explícitamente la *intención* (por ejemplo, "Use this to check stock").
  3. **Reinicia:** Debes reiniciar el script del servidor MCP después de cualquier cambio de código.

</details>

<details>
<summary>❌ Límite de conexión excedido</summary>

- **Síntoma:** El registro de errores muestra "Maximum connections reached".
- **Solución:**
  1. Cada Endpoint tiene un límite de conexiones. Asegúrate de no tener múltiples terminales ejecutando el script simultáneamente.
  2. Cierra otras conexiones y espera unos minutos antes de reintentar.

</details>

<details>
<summary>❌ Conexión rechazada / WebSocket 443 bloqueado</summary>

**Síntoma:**
Ves `[WinError 1225] Connection refused` o el script se queda colgado en `Connecting to WebSocket server...`, incluso con la URL de Endpoint correcta.

**Causa:**
**Firewall corporativo bloqueando.** Muchas redes de oficina (o VPN) bloquean estrictamente el tráfico de **WebSocket (wss://)** o protocolos no estándar, incluso en el puerto 443.

**Soluciones rápidas:**

1. **📱 La "Prueba de zona Wi‑Fi" (recomendada)**
   Desconéctate de la red de la oficina/VPN y conecta tu computadora a una **zona Wi‑Fi móvil (4G/5G)**.
   - *Si funciona:* Tu red de oficina está bloqueando la conexión.

2. **🔧 Configurar proxy**
   Si tu empresa requiere un proxy, configúralo antes de ejecutar:
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ Lista blanca**
   Pide al departamento de TI que permita el tráfico de **WebSocket (WSS)** para: `*.seeed.cc`.

</details>

## Recursos

- [Guía de configuración de Endpoint MCP](/es/mcp_endpoint) - Aprende cómo crear y gestionar endpoints MCP.
- [Repositorio del Sistema de Almacén](https://github.com/suharvest/warehouse_system) - Código fuente completo, incluidos ejemplos de Provider.
- [Documentación de FastMCP](https://github.com/PrefectHQ/fastmcp) - Profundiza en definiciones avanzadas de herramientas.

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
