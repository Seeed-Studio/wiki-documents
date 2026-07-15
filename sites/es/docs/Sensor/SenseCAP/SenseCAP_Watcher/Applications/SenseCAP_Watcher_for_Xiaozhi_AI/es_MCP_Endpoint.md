---
description: Guía para usar el endpoint MCP
title: Endpoint MCP
sidebar_position: 5
keywords:
  - AI
  - SenseCAP
  - Watcher
  - Agent
  - Endpoint
  - Model
  - Context
  - protocol
  - MCP
  - Server
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /mcp_endpoint
last_update:
  date: 10/30/2025
  author: Twelve
translation:
  skip:
    - zh-CN
createdAt: '2025-10-22'
updatedAt: '2025-12-04'
url: https://wiki.seeedstudio.com/es/mcp_endpoint/
---

# Endpoint MCP

## Descripción general

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

**MCP (Model Context Protocol)** es un potente framework que amplía las capacidades de la IA al permitir control remoto, cómputo, operaciones de correo electrónico, búsquedas de conocimiento y más.

MCP permite que los servidores expongan herramientas invocables a los modelos de lenguaje mediante un protocolo bien definido. Estas herramientas permiten que el modelo interactúe con sistemas externos, como consultar bases de datos, invocar APIs o realizar cálculos complejos. Cada herramienta se identifica de forma única por un nombre y se describe mediante metadatos que definen su funcionalidad.

El **Endpoint MCP** sirve como puente entre tu servicio MCP local y el modelo Xiaozhi AI. Proporciona una interfaz para que los dispositivos con voz y otros terminales aprovechen estas capacidades externas sin interrupciones.

## Obtener Endpoint MCP

1. Accede al panel de control de Watcher Agent a través de **[`SenseCraft AI`](https://sensecraft.seeed.cc/ai)** > **`Models`** > **`Workspace`** > **`SenseCAP Watcher`** > **`Watcher Agent`**, o utiliza el [enlace directo al espacio de trabajo](https://sensecraft.seeed.cc/ai/device/local/37) y luego haz clic en **`Watcher Agent`** en la barra lateral izquierda.

  <div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCraft_AI/watcher_agent_workspace.png" style={{width:800, height:'auto'}}/></div>

2. Abre la configuración del agente

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

3. Haz clic en `MCP Setting` y `Get MCP Endpoint`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

4. Obtén la dirección del Endpoint y el estado de la conexión

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## Ejemplo de MCP

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Puedes obtener el siguiente código desde [MCP Example Code Github](https://github.com/78/mcp-calculator)

### Ejemplo de código de servidor MCP

```python
  # server.py
  from mcp.server.fastmcp import FastMCP
  import logging
  logger = logging.getLogger('test_mcp')

  import math
  import random

  # Create an MCP server
  mcp = FastMCP("Calculator")

  # Add an addition tool
  @mcp.tool()
  def calculator(python_expression: str) -> dict:
      """For mathamatical calculation, always use this tool to calculate the result of a python expression. `math` and `random` are available."""
      result = eval(python_expression)
      logger.info(f"Calculating formula: {python_expression}, result: {result}")
      return {"success": True, "result": result}

  # Start the server
  if __name__ == "__main__":
      mcp.run(transport="stdio")
```

### Explicación del código

A continuación se muestra una explicación detallada de algunas partes clave del ejemplo de servidor MCP:

- `@mcp.tool()` : Registra la siguiente función como una herramienta MCP que puede ser llamada de forma remota por el modelo de IA.

- `def calculator(python_expression: str) -> dict`: Define una herramienta que recibe una expresión matemática del modelo.

- `result = eval(python_expression)` : Usa la función eval() de Python para evaluar la expresión. Se pueden usar bibliotecas como math y random porque se importaron anteriormente.

- `mcp.run(transport="stdio")` : Inicia el servidor. El transporte stdio le permite comunicarse con Watcher Agent o con tu cliente MCP.

### Inicio rápido

- Requisitos
  - [MCP Example Code Github](https://github.com/78/mcp-calculator)
  - Python 3.7+
  - websockets>=11.0.3
  - python-dotenv>=1.0.0
  - mcp>=1.8.1
  - pydantic>=2.11.4
  - mcp-proxy>=0.8.2

- Paso 1. Clona el repositorio y navega a la carpeta del proyecto

  ```bash
  git clone https://github.com/78/mcp-calculator.git
  cd mcp-calculator
  ```

- Paso 2. Instala las dependencias

  ```bash
  pip install -r requirements.txt
  ```

- Paso 3. Configura las variables de entorno
  - Para Linux/macOS
    ```bash
    export MCP_ENDPOINT=<your_mcp_endpoint>
    ```
  - Para Windows (PowerShell)
    ```bash
    $env:MCP_ENDPOINT="<your_mcp_endpoint>"
    ```
  - Para Windows (CMD)
    ```bash
    set MCP_ENDPOINT=<your_mcp_endpoint>
    ```

- Paso 4. Ejecuta el ejemplo de calculadora
  ```bash
  python mcp_pipe.py calculator.py
  ```

- O ejecuta todos los servidores configurados
  ```bash
  python mcp_pipe.py
  ```

  :::note
  Esto requiere un archivo de configuración mcp_config.json que defina los ajustes del servidor.
  :::

### Resultado de la ejecución

```bash
export MCP_ENDPOINT=<mcp_endpoint_address_get_from_your_agent_configuration>
python mcp_pipe.py calculator.py
2025-05-16 09:07:09,009 - MCP_PIPE - INFO - Connecting to WebSocket server...
2025-05-16 09:07:09,096 - MCP_PIPE - INFO - Successfully connected to WebSocket server
2025-05-16 09:07:09,097 - MCP_PIPE - INFO - Started test.py process
Processing request of type ListToolsRequest
Processing request of type CallToolRequest
Calculating formula: 3.14159 * (8 / 2) ** 2, result: 50.26544
Processing request of type CallToolRequest
Calculating formula: math.comb(10, 3), result: 120
```

### Estado del Endpoint MCP

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP1.png" style={{width:400, height:'auto'}}/></div>

- Estado de la conexión: Muestra si tu conexión MCP está funcionando correctamente.
- Icono de actualización: Actualiza el estado de tu conexión MCP.
- Servicios habilitados: Enumera todos los servicios MCP que tu Watcher puede usar.
- Dirección del Endpoint: Tu mcp_endpoint_address (no lo compartas con nadie a menos que sea requerido por el soporte técnico oficial)

### Registro de conversación

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### Precauciones
#### 1. Nombres de herramientas y parámetros en MCP

Los nombres de las herramientas y de sus parámetros deben ser claros para que el modelo grande entienda su propósito. 
Evita usar abreviaturas siempre que sea posible y proporciona un comentario que explique la función de la herramienta y cuándo debe utilizarse. 

Por ejemplo, una herramienta llamada calculator permite al modelo saber que es una calculadora, y el parámetro python_expression indica que el modelo debe introducir una expresión de Python.

Si estás escribiendo una herramienta bing_search, el nombre del parámetro debe ser keywords.

#### 2. Guía mediante docstring de la función

El docstring (usando """...""") guía al modelo sobre cuándo usar la herramienta.

También puede mencionar que en la expresión se pueden usar funciones de las bibliotecas math y random.

Estas dos bibliotecas ya se han importado en el código de ejemplo.

#### 3. Registro en lugar de impresión

Dado que la entrada/salida estándar en este ejemplo de servidor MCP se utiliza para la transmisión de datos, no puedes usar print para mostrar información. 

Utiliza logger para depuración y registro en su lugar.

#### 4. Valores de retorno

Los valores de retorno de MCP suelen ser una cadena o JSON. En el ejemplo, el resultado del cálculo se devuelve en un campo JSON llamado result.

La longitud de los valores de retorno suele estar limitada, similar a los comandos de dispositivos IoT, normalmente dentro de 1024 bytes.

#### 5. Límite de la lista de herramientas

La lista de herramientas MCP tiene un límite máximo. 

Más adelante se mostrará en la página de configuración, calculado en función del recuento de tokens.

Nota: Tener demasiadas herramientas puede afectar la eficiencia de programación del dispositivo.

#### 6. Límite de conexiones

Cada endpoint MCP tiene un número máximo de conexiones simultáneas.

Nota: Superar este límite o tener demasiadas conexiones simultáneas puede reducir el rendimiento del dispositivo.

## Seleccionar servicios MCP preproporcionados

Los siguientes cuatro servicios MCP están disponibles para que los elijas en MCP Setting mencionado anteriormente.

Después de guardar la configuración y reiniciar el dispositivo, los servicios seleccionados se activarán automáticamente.

Puedes eliminar el servicio haciendo clic en `×`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>

## Soporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
