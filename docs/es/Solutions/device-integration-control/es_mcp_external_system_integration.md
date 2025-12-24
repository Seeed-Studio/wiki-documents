---
description: Guía para integrar sistemas empresariales externos con SenseCAP Watcher a través de MCP
title: Lleva la IA de Voz a tu Sistema Empresarial (MCP)
sidebar_position: 6
keywords:
- MCP
- API
- Integration
- Warehouse
- Voice Control
- Watcher
- External System
- AI Enabled Devices
- Qwen
- OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /es/mcp_external_system_integration
last_update:
  date: 12/06/2025
  author: Spencer
tags:
  - mcp
  - agents
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Descripción General

Esta guía demuestra cómo usar el Protocolo de Contexto de Modelo ([MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)) para conectar la IA de Voz con tu ecosistema de software existente. Al envolver tus APIs REST como herramientas MCP, permites que ***SenseCAP Watcher*** interactúe directamente con tu lógica empresarial —- ya sea un Sistema de Gestión de Almacén (WMS), CRM, ERP, o un panel de TI personalizado.

<table class="table-center">
  <tr>
      <th>Interacción Espacial Inteligente</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Paquete de Solución 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com.cn/solutions/voicecollectionanalysis-zh-hans" target="_blank">Interacción Espacial Inteligente</a></h2>
      <p>Voz a API: Transforma la Intención en Acción. No construyas una nueva aplicación desde cero. Simplemente expone tus endpoints WMS existentes al Watcher para habilitar control de voz inmediato para tu fuerza laboral.</p>
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
                <h3>Verdadera Productividad Manos Libres</h3>
                <p>Los operadores pueden consultar inventario o registrar envíos mientras usan guantes o conducen montacargas. Mantén los ojos en la tarea y las manos en el volante para máxima seguridad y eficiencia.</p>
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
                <h3>Sincronización de Datos de Latencia Cero</h3>
                <p>Elimina el retraso de los registros en papel. Los comandos de voz activan llamadas directas a la API de tu ERP, asegurando que los datos de inventario se sincronicen al instante que un artículo se mueve.</p>
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
                <h3>Interoperabilidad Universal de Sistemas</h3>
                <p>Ya sea que ejecutes SAP, Oracle, o un backend SQL personalizado, si tu sistema tiene una API, Watcher lo controla. No necesitas migrar sistemas heredados para adoptar IA.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitectura

Entender el flujo de datos es esencial antes de escribir código. La integración sigue un patrón de puente donde el **Servidor MCP** actúa como una puerta de enlace segura entre la IA y tu red interna.

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**Componentes Clave:**

1. **Dispositivo Watcher:** Captura la intención en lenguaje natural (ej., "Verificar inventario") y la envía a la nube.
2. **Endpoint MCP (Nube):** Un túnel seguro proporcionado por SenseCraft que reenvía la intención a tu entorno local.
3. **Servidor MCP (Puente Local):** Un script Python ligero ejecutándose en tu máquina. Traduce la intención de la IA en funciones de código específicas.
4. **API Backend:** Tu aplicación empresarial existente (FastAPI, Flask, etc.) que ejecuta la lógica real.
5. **Infraestructura:** Base de datos u otros servicios de los que depende tu backend.

**Escenarios de Integración Universal**:

Mientras esta guía usa un **Sistema de Almacén** como implementación de referencia, la arquitectura se aplica universalmente:

| **Industria**   | **Comando de Voz**                | **Acción del Sistema Subyacente** |
| --------------- | --------------------------------- | --------------------------------- |
| **Logística**   | *"Ingresar 50 unidades."*         | `POST /api/inventory/add`         |
| **Ventas (CRM)** | *"Actualizar estado del trato a Cerrado."* | `PUT /api/deals/{id}/status` |
| **Ops de TI**   | *"Reiniciar el servidor de staging."* | `POST /api/servers/restart`   |

## Demo 1: Almacén Controlado por Voz

Simularemos un entorno empresarial ejecutando un **Backend de Almacén** simulado y un **Puente MCP** en tu máquina local. Esta demo habilita:

- 🗣️ **Verificación de Inventario:** "¿Cuántas unidades Xiaozhi Standard tenemos?"
- 🗣️ **Entrada de Datos:** "Ingresar 5 unidades de Watcher Xiaozhi."
- 🗣️ **Información Empresarial:** "¿Cuál es el resumen de inventario de hoy?"

### Prerrequisitos

- **Hardware:** SenseCAP Watcher, Computadora (Windows/macOS/Linux).
- **Software:** Python 3.10+, Git.
- **Cuenta:** Cuenta de [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home).

:::note Configuración
Asegúrate de que tu SenseCAP Watcher esté configurado con **Xiaozhi AI** a través del [Centro de Dispositivos SenseCraft AI](https://sensecraft.seeed.cc/ai/device/local/37).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>

:::

### Paso 1: Desplegar Sistema Objetivo

Primero, necesitamos iniciar el backend empresarial simulado. Proporcionamos scripts automatizados para manejar dependencias (usando `uv`) e inicio de servicios.

:::tip instalar uv
Usa el siguiente comando para instalar uv, un gestor de entornos Python ligero:

```shell
curl -LsSf https://astral.sh/uv/install.sh | sh
```

:::

**1. Clonar el repositorio**:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. Iniciar el Servicio**:

Elige tu sistema operativo para instalar dependencias e iniciar el backend automáticamente.

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

Ejecuta el script shell para iniciar el backend y frontend:

```shell
# Navigate to the project directory warehouse_system
chmod +x start.sh
./start.sh # which runs the run_backend and frontend/app.py
```

</TabItem>

<TabItem value="win" label="Windows">

Ejecuta el script PowerShell para iniciar el backend y frontend:

```powershell
# Navigate to the project directory warehouse_system
.\start.ps1
```

</TabItem>

</Tabs>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/running-warehouse-demo-successfully.png" alt="running-warehouse-demo-successfully"/>
</div>

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="specific-location-management"/>
</div>

- **Verificar:** Abre tu navegador y visita `http://localhost:2124/docs`. Si ves la página de documentación de la API (como se muestra arriba), tu "Sistema Empresarial" está ejecutándose.

### Paso 2: Configurar Puente MCP

Ahora, conectamos el backend a la IA. El código del puente reside en el directorio `mcp/`.

**1. Obtener Endpoint MCP**:

Obtén tu **Dirección de Endpoint MCP** (`wss://...`) desde la [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. Configurar y Ejecutar**:

Abre una **nueva ventana de terminal** (mantén el terminal del backend anterior ejecutándose) y navega a la carpeta `mcp`.

<Tabs>

<TabItem value="mac" label="Linux/macOS" default>

```Bash
cd mcp

# 1. Set the Endpoint (Replace with your actual address)
export MCP_ENDPOINT="wss://your-endpoint-address"

# 2. Start the Bridge
./start_mcp.sh
```

</TabItem>

<TabItem value="win" label="Windows (PowerShell)">

```PowerShell
cd mcp

# 1. Set the Endpoint (Replace with your actual address)
$env:MCP_ENDPOINT="wss://your-endpoint-address"

# 2. Start the Bridge
./start_mcp.ps1
```

</TabItem>

</Tabs>

Si es exitoso, verás un mensaje: `MCP Service Started Successfully!`.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### Paso 3: Verificación

Todo está conectado. Ahora, usa el SenseCAP Watcher para interactuar con tu sistema local.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

¡Ahora podemos probar la integración usando tu dispositivo Watcher!

### Comandos de Voz de Ejemplo

| Comando de Voz                                         | Acción Esperada                                       |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Consultar el stock de Xiaozhi Versión Estándar"      | Llama a la herramienta `query_xiaozhi_stock`         |
| "¿Cuántos Xiaozhi Versión Profesional tenemos?"       | Llama a `query_xiaozhi_stock` con versión profesional |
| "Ingresar 5 unidades de Watcher Xiaozhi Versión Estándar" | Llama a la herramienta `stock_in` con cantidad=5     |
| "Sacar 3 unidades de Xiaozhi para ventas"             | Llama a la herramienta `stock_out` con cantidad=3    |
| "¿Cuál es el resumen de inventario de hoy?"            | Llama a la herramienta `get_today_statistics`        |
| "Listar todos los productos Xiaozhi"                  | Llama a la herramienta `list_xiaozhi_products`       |

**¿Qué sucede detrás de escena?**

| **Componente** | **Acción**                                         |
| -------------- | -------------------------------------------------- |
| **Watcher**    | Envía audio de voz a la nube.                     |
| **MCP Bridge** | Recibe intención, determina que la herramienta es `query_stock`. |
| **Sistema**    | Ejecuta `GET /materials/product-stats`.           |
| **Resultado**  | Watcher habla: *"El stock actual es de 150 unidades."* |

### Respuestas Esperadas

**Consultar Stock:**

> "La consulta de stock fue exitosa. Watcher Xiaozhi Versión Estándar actualmente tiene 150 unidades en stock en la ubicación A-01-01. El estado del stock es normal."

**Ingreso de Stock:**

> "Se agregaron exitosamente 5 unidades de Watcher Xiaozhi Versión Estándar. La cantidad anterior era 150, la nueva cantidad es 155."

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## Personalización para Tu Sistema

La demostración del almacén es solo una plantilla. Para integrar tu propio **Sistema de Gestión de Pedidos**, **CRM**, o **Panel de TI**, sigue estos pasos para modificar el código del puente.

### 1. Apuntar a Tu Servidor Real

Abre `mcp/warehouse_mcp.py`. El primer paso es decirle al puente dónde vive tu API real.

```python
# Change this line to point to your actual production server IP/Domain
# API_BASE_URL = "http://localhost:2124/api" 
API_BASE_URL = "http://192.168.50.10:8080/api/v1" 
```

### 2. Definir Herramientas Personalizadas

Para agregar un nuevo comando de voz, no necesitas entrenar un modelo. Solo necesitas escribir una función de Python.

Usa el decorador `@mcp.tool()` para envolver tus llamadas a la API.

**Flujo de trabajo:**

1. **Identificar Operaciones:** ¿Qué acciones quieres controlar por voz? (ej., "Verificar Pedido", "Reiniciar Servidor").
2. **Documentar API:** Asegúrate de conocer la URL del endpoint y los parámetros (ej., `GET /orders/{id}`).
3. **Escribir el Wrapper:** Crea la función de Python usando el patrón de abajo.

**Ejemplo: Adaptación para un Sistema de Gestión de Pedidos**:

:::tip El "Docstring" es la Magia
La IA lee el **docstring** de Python (el texto dentro de `""" ... """`) para decidir **cuándo** llamar tu función. ¡Sé descriptivo!
:::

```Python
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
    # Call your real API
    return api_get(f"/orders/{order_id}/status")
```

<details>

<summary>Mejores Prácticas para Definir Herramientas Personalizadas</summary>

Escribir buenas herramientas MCP es diferente de escribir funciones estándar de Python. La IA depende mucho de la estructura de tu código para entender qué hacer.

### 1. Los Nombres Importan

Los nombres de las herramientas y parámetros deben ser descriptivos. La IA lee estos para "adivinar" qué herramienta elegir.

```Python
# ✅ Good - Clear and descriptive
@mcp.tool()
def query_xiaozhi_stock(product_name: str) -> dict:
    ...

# ❌ Bad - Unclear abbreviations
@mcp.tool()
def qry_stk(pn: str) -> dict:
    ...
```

### 2. El Docstring es la Interfaz de Usuario

El docstring **no** es solo un comentario; es la **Interfaz de Usuario** para el modelo de IA. Guía a la IA sobre *cuándo* y *cómo* usar la herramienta.

```Python
@mcp.tool()
def stock_in(product_name: str, quantity: int) -> dict:
    """
    Record stock intake for watcher-xiaozhi products.
    Use this tool when the user wants to add inventory.  <-- Tells AI "When"

    Args:
        product_name: The exact product name             <-- Tells AI "How"
        quantity: Number of units (must be integer)
    """
```

### 3. Logger vs. Print (¡Crucial!)

:::danger Nunca uses print()

MCP usa entrada/salida estándar (stdio) para la comunicación entre el puente y el agente de IA. Usar print() corromperá el flujo de datos del protocolo y causará que la conexión se rompa.

:::

Siempre usa un logger para depuración:

```Python
import logging
logger = logging.getLogger(__name__)

# ✅ Good - Logs to file/stderr, safe for MCP
logger.info(f"Processing stock in: {product_name}")

# ❌ Bad - Breaks MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. Optimizar Valores de Retorno

El valor de retorno es leído por la IA para generar una respuesta hablada. Manténlo conciso para reducir la latencia y el uso de tokens (típicamente bajo 1024 bytes).

```Python
# ✅ Good - Concise
return {
    "success": True,
    "quantity": 150,
    "message": "Stock query successful"
}

# ❌ Bad - Too verbose (AI doesn't need the full database history)
return {
    "success": True,
    "full_product_details": {...}, 
    "complete_history": [...] 
}
```

### 5. Manejo de Errores

Tu API podría estar fuera de línea o devolver 404. Maneja estos casos con gracia para que la IA pueda explicar el problema al usuario en lugar de fallar.

```Python
try:
    result = api_post("/materials/stock-in", data)
    return result
except Exception as e:
    logger.error(f"Stock in failed: {str(e)}")
    return {
        "success": False,
        "error": str(e),
        "message": "Failed to record stock. Please try again."
    }
```

</details>

### 3. Desplegar para Producción

La demostración se ejecuta en tu terminal local. Para operación a largo plazo 24/7:

- **Dockerizar:** Empaqueta la carpeta `mcp/` en un contenedor Docker para asegurar estabilidad del entorno.
- **Servicio en Segundo Plano:** En lugar de ejecutar `./start_mcp.sh` en una terminal abierta, usa `systemd` (Linux) o `NSSM` (Windows) para ejecutar el script como un servicio en segundo plano.
- **Red:** Asegúrate de que la máquina que ejecuta el MCP Bridge tenga acceso estable a internet para conectarse a SenseCraft Cloud (`wss://...`).

## Solución de Problemas

<details>
<summary>❌ Servicio Backend No Ejecutándose</summary>

- **Síntoma:** La IA responde con "No se puede conectar al servicio backend".
- **Solución:**
  1. Asegúrate de que el backend esté ejecutándose: `uv run python run_backend.py`.
  2. Verifica la disponibilidad del puerto: `curl http://localhost:2124/api/dashboard/stats`.

</details>

<details>
<summary>❌ Tiempo de Espera de Conexión MCP</summary>

- **Síntoma:** El script se cuelga en "Connecting to WebSocket server..." indefinidamente.
- **Solución:**
  1. Verifica que tu `MCP_ENDPOINT` sea correcto (revisa errores tipográficos).
  2. Asegúrate de que la URL comience con `wss://` (WebSocket Seguro).
  3. Verifica tu conexión a internet (tráfico saliente a SenseCraft Cloud).

</details>

<details>
<summary>❌ Herramienta No Reconocida</summary>

- **Síntoma:** Hablas un comando, pero la IA dice "No sé cómo hacer eso" o no activa la herramienta.
- **Solución:**
  1. **Verificar Nombres:** Usa nombres descriptivos claros en inglés para las funciones.
  2. **Verificar Docstrings:** Asegúrate de que el docstring describa explícitamente la *intención* (ej., "Usa esto para verificar stock").
  3. **Reiniciar:** Debes reiniciar el script del servidor MCP después de cualquier cambio de código.

</details>

<details>
<summary>❌ Límite de Conexiones Excedido</summary>

- **Síntoma:** El log de errores muestra "Máximo de conexiones alcanzado".
- **Solución:**
  1. Cada Endpoint tiene un límite de conexiones. Asegúrate de no tener múltiples terminales ejecutando el script simultáneamente.
  2. Cierra otras conexiones y espera unos minutos antes de reintentar.

</details>

<details>
<summary>❌ Conexión Rechazada / WebSocket 443 Bloqueado</summary>

**Síntoma:**  
Ves `[WinError 1225] Connection refused` o el script se cuelga en `Connecting to WebSocket server...`, incluso con la URL de Endpoint correcta.

**Causa:**  
**Firewall Corporativo Bloqueando.** Muchas redes de oficina (o VPNs) bloquean estrictamente el tráfico de **WebSocket (wss://)** o protocolos no estándar, incluso en el puerto 443.

**Soluciones Rápidas:**

1. **📱 La "Prueba de Hotspot" (Recomendado)**  
   Desconéctate de la red de oficina/VPN y conecta tu computadora a un **Hotspot Móvil (4G/5G)**.  
   - *Si funciona:* Tu red de oficina está bloqueando la conexión.

2. **🔧 Configurar Proxy**  
   Si tu empresa requiere un proxy, configúralo antes de ejecutar:
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ Lista Blanca**  
   Pide a TI que permita tráfico de **WebSocket (WSS)** para: `*.seeed.cc`.

</details>

## Recursos

- [Guía de Configuración de MCP Endpoint](/es/mcp_endpoint) - Aprende cómo crear y gestionar endpoints MCP.
- [Documentación de FastMCP](https://github.com/jlowin/fastmcp) - Profundiza en definiciones avanzadas de herramientas.

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
