---
description: Guía para integrar sistemas empresariales externos con SenseCAP Watcher a través de MCP
title: Integración MCP con Sistemas Externos
sidebar_position: 6
keywords:
- MCP
- API
- Integration
- Warehouse
- Voice Control
- Watcher
- External System
- Enterprise
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /es/mcp_external_system_integration
last_update:
  date: 11/27/2025
  author: Harvest

---

# Integración MCP con Sistemas Externos

## Descripción General

Esta guía demuestra cómo integrar sus sistemas empresariales existentes con **SenseCAP Watcher** a través de **MCP (Model Context Protocol)**. A diferencia del ejemplo básico de calculadora, este tutorial se enfoca en un caso de uso industrial: **gestión de almacén controlada por voz**.

Al final de este tutorial, podrás:

- Entender la arquitectura MCP para integración de sistemas empresariales
- Envolver tus APIs REST existentes como herramientas MCP
- Habilitar comandos de voz como *"Consultar el stock de Xiaozhi Standard Version"* o *"Ingresar 5 unidades de Watcher Xiaozhi"*

### Caso de Uso: Gestión de Almacén Controlada por Voz

Imagina un operador de almacén que necesita verificar inventario o registrar movimientos de stock mientras sus manos están ocupadas. Con la integración MCP, simplemente puede hablar al dispositivo Watcher:

- **"¿Cuántos Xiaozhi Standard Version tenemos en stock?"**
- **"Ingresar 5 unidades de Watcher Xiaozhi Standard Version"**
- **"¿Cuál es el resumen de inventario de hoy?"**

El Watcher procesa el comando de voz, llama a la herramienta MCP apropiada, que luego consulta o actualiza tu sistema de gestión de almacén.

### Descripción General de la Arquitectura

```bash
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                  │     │                 │     │                 │
│  Watcher Device │────▶│   MCP Endpoint   │────▶│   MCP Server    │────▶│  Backend API    │
│  (Voice Input)  │     │  (Cloud Bridge)  │     │  (Your Code)    │     │  (Your System)  │
│                 │     │                  │     │                 │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘     └─────────────────┘
                                                                                  │
                                                                                  ▼
                                                                         ┌─────────────────┐
                                                                         │                 │
                                                                         │    Database     │
                                                                         │                 │
                                                                         └─────────────────┘
```

**Componentes Clave:**

- **Dispositivo Watcher**: Captura comandos de voz y los envía al modelo de IA
- **MCP Endpoint**: Servicio en la nube que conecta tu servidor MCP local con el modelo de IA
- **Servidor MCP**: Tu código Python que envuelve la lógica empresarial como herramientas invocables
- **API Backend**: Tu API REST existente (FastAPI, Flask, etc.)
- **Base de Datos**: Tu almacenamiento de datos empresariales

## Prerrequisitos

### Hardware

- Dispositivo SenseCAP Watcher (configurado con Xiaozhi AI)
- Una computadora (Windows/macOS/Linux) para ejecutar el sistema backend y el servidor MCP

### Software

- Python 3.10 o superior
- Gestor de paquetes [uv](https://docs.astral.sh/uv/) (recomendado) o pip
- Git

### Cuenta

- Cuenta de SenseCraft AI Platform con acceso a MCP Endpoint
- Consulta la [Guía de MCP Endpoint](/es/mcp_endpoint) para obtener tu dirección de MCP Endpoint

### Nota de Despliegue

El servidor MCP puede ejecutarse en la misma máquina que tu sistema backend, o en una máquina diferente. Simplemente configura la URL del endpoint de la API en `mcp/warehouse_mcp.py`:

```python
# Backend API address - change this to your actual backend URL
API_BASE_URL = "http://localhost:2124/api"  # Same machine
# API_BASE_URL = "http://192.168.1.100:2124/api"  # Different machine
```

## Parte 1: Configurar el Sistema de Almacén de Demostración

Proporcionamos un sistema completo de gestión de almacén de demostración que puedes usar como referencia. Esto incluye:

- Un backend FastAPI con APIs REST
- Un panel de control basado en web
- Datos de muestra pre-poblados (productos Watcher Xiaozhi)

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

### Paso 2: Instalar Dependencias

Usando uv (recomendado):

```bash
# Install uv if you haven't
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install project dependencies
uv sync
```

O usando pip:

```bash
pip install fastapi uvicorn requests pydantic fastmcp websockets
```

### Paso 3: Iniciar el Servicio Backend

```bash
uv run python run_backend.py
```

Deberías ver:

```bash
INFO:     Uvicorn running on http://0.0.0.0:2124
INFO:     Database initialized with sample data
```

### Paso 4: Verificar la API

Abre una nueva terminal y prueba la API:

```bash
curl http://localhost:2124/api/materials/xiaozhi
```

Respuesta esperada:

```json
[
  {
    "id": 1,
    "name": "watcher-xiaozhi(标准版)",
    "sku": "WX-STD-001",
    "category": "mainboard",
    "quantity": 150,
    "unit": "个",
    "safe_stock": 50,
    "location": "A-01-01"
  },
  ...
]
```

También puedes explorar la documentación interactiva de la API en: http://localhost:2124/docs

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="mcp-system-integration"/>
</div>

## Parte 2: Envolver APIs como Herramientas MCP

El sistema de demostración ya tiene APIs REST para operaciones de almacén. Ahora vamos a envolverlas como herramientas MCP para control por voz.

:::tip
Después de ejecutar el servidor backend, puedes explorar todas las APIs disponibles a través de la documentación interactiva en http://localhost:2124/docs (Swagger UI). El código completo del servidor MCP está en `mcp/warehouse_mcp.py` en el repositorio.
:::

### Concepto Central: API a Herramienta MCP

El patrón es sencillo:

1. **Crear un servidor MCP** con `FastMCP`
2. **Definir funciones de herramientas** con el decorador `@mcp.tool()`
3. **Llamar a tus APIs existentes** dentro de las funciones de herramientas
4. **Devolver resultados estructurados** para que la IA los interprete

### Recorrido del Código Clave

#### 1. Inicializar Servidor MCP

```python
from fastmcp import FastMCP
import requests

mcp = FastMCP("Warehouse System")  # Server name shown in MCP Endpoint
API_BASE_URL = "http://localhost:2124/api"  # Your backend URL
```

#### 2. Definir una Herramienta con `@mcp.tool()`

```python
@mcp.tool()
def query_xiaozhi_stock(product_name: str = "watcher-xiaozhi(标准版)") -> dict:
    """
    Query stock information for watcher-xiaozhi products.
    Use this tool when user asks about inventory levels or stock quantity.

    Args:
        product_name: Product name to query (e.g., "watcher-xiaozhi(标准版)")
    """
    # Call your existing API
    response = requests.get(f"{API_BASE_URL}/materials/product-stats",
                           params={"name": product_name})
    data = response.json()

    # Return structured result
    return {
        "success": True,
        "quantity": data["current_stock"],
        "message": f"{data['name']} has {data['current_stock']} {data['unit']} in stock"
    }
```

**Puntos Clave:**

- **Nombre de función** (`query_xiaozhi_stock`) → Nombre de herramienta que ve la IA
- **Docstring** → Guía a la IA sobre cuándo usar esta herramienta
- **Parámetros** → Lo que la IA necesita extraer del comando de voz
- **Valor de retorno** → Lo que la IA lee de vuelta al usuario

#### 3. Iniciar el Servidor

```python
if __name__ == "__main__":
    mcp.run(transport="stdio")
```

### Herramientas en Esta Demostración

El `warehouse_mcp.py` define 5 herramientas:

| Nombre de Herramienta   | Ejemplo de Activación por Voz     | API Llamada                    |
| ----------------------- | --------------------------------- | ------------------------------ |
| `query_xiaozhi_stock`   | "Verificar stock de Xiaozhi Standard" | GET `/materials/product-stats` |
| `stock_in`              | "Ingresar 5 unidades de Xiaozhi"     | POST `/materials/stock-in`     |
| `stock_out`             | "Sacar 3 Xiaozhi para ventas"   | POST `/materials/stock-out`    |
| `list_xiaozhi_products` | "Listar todos los productos Xiaozhi"       | GET `/materials/xiaozhi`       |
| `get_today_statistics`  | "Resumen de inventario de hoy"       | GET `/dashboard/stats`         |

### Iniciar el Servidor

```python
if __name__ == "__main__":
    mcp.run(transport="stdio")
```

## Parte 3: Conectar al MCP Endpoint

### Paso 1: Obtener tu MCP Endpoint

1. Inicia sesión en [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)
2. Haz clic en **Watcher Agent** en la esquina superior derecha
3. Abre **Agent Configuration** → **MCP Setting**
4. Haz clic en **Get MCP Endpoint** para obtener tu dirección de endpoint única

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="mcp-system-integration"/>
</div>

:::warning
Mantén tu dirección de MCP Endpoint privada. No la compartas públicamente.
:::

### Paso 2: Configurar Variable de Entorno

**Para Linux/macOS:**

```bash
export MCP_ENDPOINT="wss://your-endpoint-address"
```

**Para Windows (PowerShell):**

```powershell
$env:MCP_ENDPOINT="wss://your-endpoint-address"
```

**Para Windows (CMD):**

```cmd
set MCP_ENDPOINT=wss://your-endpoint-address
```

### Paso 3: Iniciar el Servidor MCP

Navega al directorio mcp y ejecuta el script de inicio:

```bash
cd mcp
./start_mcp.sh
```

Salida esperada:

```shell
================================
  MCP Service Startup Script
================================

MCP Endpoint: wss://your-endpoint-address

Checking backend service...
Backend service running normally (port 2124)

Starting MCP service...

================================
  MCP Service Started Successfully!
================================

Press Ctrl+C to stop the service
```

### Paso 4: Verificar Estado de Conexión

Regresa a la Plataforma SenseCraft AI y verifica el estado de conexión MCP. Deberías ver:

- **Estado de Conexión**: Conectado
- **Servicios Habilitados**: Sistema de Almacén

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="mcp-system-integration"/>
</div>

## Parte 4: Probar Comandos de Voz

¡Ahora puedes probar la integración usando tu dispositivo Watcher!

### Ejemplos de Comandos de Voz

| Comando de Voz                                         | Acción Esperada                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Consultar el stock de Xiaozhi Versión Estándar"      | Llama a la herramienta `query_xiaozhi_stock`         |
| "¿Cuántos Xiaozhi Versión Profesional tenemos?"       | Llama a `query_xiaozhi_stock` con versión profesional |
| "Ingresar 5 unidades de Watcher Xiaozhi Versión Estándar" | Llama a la herramienta `stock_in` con cantidad=5     |
| "Sacar 3 unidades Xiaozhi para ventas"                | Llama a la herramienta `stock_out` con cantidad=3    |
| "¿Cuál es el resumen de inventario de hoy?"            | Llama a la herramienta `get_today_statistics`        |
| "Listar todos los productos Xiaozhi"                  | Llama a la herramienta `list_xiaozhi_products`       |

### Respuestas Esperadas

**Consultar Stock:**

> "La consulta de stock fue exitosa. Watcher Xiaozhi Versión Estándar actualmente tiene 150 unidades en stock en la ubicación A-01-01. El estado del stock es normal."

**Ingreso de Stock:**

> "Se agregaron exitosamente 5 unidades de Watcher Xiaozhi Versión Estándar. La cantidad anterior era 150, la nueva cantidad es 155."

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## Mejores Prácticas

### 1. Nomenclatura de Herramientas y Parámetros

Los nombres de herramientas y parámetros deben ser claros y descriptivos para que el modelo de IA entienda su propósito:

```python
# Good - Clear and descriptive
@mcp.tool()
def query_xiaozhi_stock(product_name: str) -> dict:
    ...

# Bad - Unclear abbreviations
@mcp.tool()
def qry_stk(pn: str) -> dict:
    ...
```

### 2. Docstrings Completos

El docstring guía al modelo de IA sobre cuándo y cómo usar la herramienta:

```python
@mcp.tool()
def stock_in(product_name: str, quantity: int) -> dict:
    """
    Record stock intake for watcher-xiaozhi products.
    Use this tool when the user wants to add inventory.

    Args:
        product_name: The exact product name (e.g., "watcher-xiaozhi(标准版)")
        quantity: Number of units to add (must be positive integer)

    Returns:
        Success status and updated inventory information
    """
```

### 3. Usar Logger en Lugar de Print

Dado que MCP usa stdio para comunicación, nunca uses `print()` para depuración:

```python
# Good - Use logger
logger.info(f"Processing stock in: {product_name}")

# Bad - Will break MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. Límites de Valores de Retorno

Mantén los valores de retorno concisos (típicamente menos de 1024 bytes):

```python
# Good - Concise response
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# Bad - Too verbose
return {
    "success": True,
    "full_product_details": {...},  # Avoid large nested objects
    "complete_history": [...]  # Avoid long arrays
}
```

### 5. Manejo de Errores

Siempre maneja los errores de manera elegante y devuelve mensajes significativos:

```python
try:
    result = api_post("/materials/stock-in", data)
    return result
except Exception as e:
    logger.error(f"Stock in failed: {str(e)}")
    return {
        "success": False,
        "error": str(e),
        "message": "Failed to record stock intake. Please try again."
    }
```

## Solución de Problemas

### Servicio Backend No Ejecutándose

**Síntoma:** Las herramientas MCP devuelven "No se puede conectar al servicio backend"

**Solución:**

1. Asegúrate de que el backend esté ejecutándose: `uv run python run_backend.py`
2. Verifica si el puerto 2124 está disponible: `curl http://localhost:2124/api/dashboard/stats`

### Tiempo de Espera de Conexión MCP

**Síntoma:** "Conectando al servidor WebSocket..." se cuelga indefinidamente

**Solución:**

1. Verifica que tu MCP_ENDPOINT sea correcto
2. Revisa tu conexión de red
3. Asegúrate de que la URL del endpoint comience con `wss://`

### Herramienta No Reconocida

**Síntoma:** El comando de voz no activa la herramienta esperada

**Solución:**

1. Verifica la nomenclatura de herramientas - usa nombres claros y descriptivos
2. Verifica que el docstring describa cuándo usar la herramienta
3. Reinicia el servidor MCP después de cambios en el código

### Límite de Conexiones Excedido

**Síntoma:** Error "Máximo de conexiones alcanzado"

**Solución:**

1. Cierra otras conexiones MCP
2. Espera unos minutos e inténtalo de nuevo
3. Cada endpoint tiene un límite de conexiones

## Adaptando para Tu Propio Sistema

Para integrar tu propio sistema empresarial:

1. **Identificar Operaciones Clave**: ¿Qué acciones necesitan los usuarios por voz?
2. **Documentar tus APIs**: Asegúrate de que tu backend tenga endpoints REST para estas operaciones
3. **Crear Herramientas MCP**: Envuelve cada endpoint de API como una función `@mcp.tool()`
4. **Escribir Docstrings Claros**: Ayuda a la IA a entender cuándo usar cada herramienta
5. **Probar Exhaustivamente**: Verifica que los comandos de voz activen las herramientas correctas

### Ejemplo: Adaptando para un Sistema Diferente

Si tienes un sistema de gestión de pedidos:

```python
@mcp.tool()
def check_order_status(order_id: str) -> dict:
    """
    Check the status of a customer order.
    Use this when the user asks about order tracking or delivery status.

    Args:
        order_id: The unique order identifier (e.g., "ORD-2024-001")

    Returns:
        Order status, estimated delivery date, and tracking information
    """
    return api_get(f"/orders/{order_id}/status")
```

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
