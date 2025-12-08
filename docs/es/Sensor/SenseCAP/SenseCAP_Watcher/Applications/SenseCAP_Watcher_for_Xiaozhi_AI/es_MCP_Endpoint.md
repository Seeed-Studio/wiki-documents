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
slug: /es/mcp_endpoint
last_update:
  date: 10/30/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---

# Endpoint MCP

## Descripción General

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

**MCP (Model Context Protocol)** es un marco poderoso que extiende las capacidades de la IA al permitir control remoto, computación, operaciones de correo electrónico, búsquedas de conocimiento y más.

MCP permite a los servidores exponer herramientas invocables a los modelos de lenguaje a través de un protocolo bien definido. Estas herramientas permiten al modelo interactuar con sistemas externos, como consultar bases de datos, invocar APIs o realizar cálculos complejos. Cada herramienta se identifica únicamente por un nombre y se describe mediante metadatos que definen su funcionalidad.

**Endpoint MCP** sirve como el puente entre tu servicio MCP local y el modelo Xiaozhi AI. Proporciona una interfaz para dispositivos habilitados por voz y otros terminales para aprovechar estas capacidades externas sin problemas.

## Obtener Endpoint MCP

1. Ingresa a la [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

2. Para acceder al Panel de Control, haz clic en Watcher Agent en la esquina superior derecha de la página.

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>

3. Abre la configuración del agente

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

4. Haz clic en `MCP Setting` y `Get MCP Endpoint`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

5. Obtén la dirección del Endpoint y el Estado de Conexión

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## Ejemplo MCP

Agradecimientos especiales a [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por sus contribuciones de código abierto que hicieron posible este proyecto.

Puedes obtener el siguiente código desde [Código de Ejemplo MCP en Github](https://github.com/78/mcp-calculator)

### Ejemplo de código del servidor MCP

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

### Explicación del Código

A continuación se presenta una explicación detallada de algunas partes clave del ejemplo del servidor MCP:

- `@mcp.tool()` : Registra la siguiente función como una herramienta MCP que puede ser llamada remotamente por el modelo de IA.

- `def calculator(python_expression: str) -> dict`: Define una herramienta que recibe una expresión matemática del modelo.

- `result = eval(python_expression)` : Usa eval() de Python para evaluar la expresión. Se pueden usar librerías como math y random porque fueron importadas arriba.

- `mcp.run(transport="stdio")` : Inicia el servidor. El transporte stdio le permite comunicarse con el Watcher Agent o tu cliente MCP.

### Inicio Rápido

- Requisitos
  - [Código de Ejemplo MCP en Github](https://github.com/78/mcp-calculator)
  - Python 3.7+
  - websockets>=11.0.3
  - python-dotenv>=1.0.0
  - mcp>=1.8.1
  - pydantic>=2.11.4
  - mcp-proxy>=0.8.2

- Paso1. Clona el repositorio y navega a la carpeta del proyecto

  ```bash
  git clone https://github.com/78/mcp-calculator.git
  cd mcp-calculator
  ```

- Paso2. Instala las dependencias

  ```bash
  pip install -r requirements.txt
  ```

- Paso3. Configura las variables de entorno
  - Para Linux/macOS
    ```bash
    export MCP_ENDPOINT=<your_mcp_endpoint>
    ```
  - Para windows(PowerShell)
    ```bash
    $env:MCP_ENDPOINT="<your_mcp_endpoint>"
    ```
  - Para windows(CMD)
    ```bash
    set MCP_ENDPOINT=<your_mcp_endpoint>
    ```

- Paso4. Ejecuta el ejemplo de calculadora
  ```bash
  python mcp_pipe.py calculator.py
  ```

- O ejecuta todos los servidores configurados
  ```bash
  python mcp_pipe.py
  ```

  :::note
  Esto requiere un archivo de configuración mcp_config.json que defina la configuración del servidor.
  :::

### Resultado de Ejecución

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

- Estado de Conexión: Muestra si tu conexión MCP está funcionando correctamente.
- Icono de actualización: Actualiza el estado de tu conexión mcp.
- Servicios Habilitados: Lista todos los servicios mcp que tu watcher puede usar.
- Dirección del Endpoint: Tu dirección mcp_endpoint_address (No compartas esto con nadie a menos que sea requerido por el soporte técnico oficial)

### Registro de Conversación

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### Precauciones
#### 1. Nomenclatura de herramientas y parámetros en MCP

Los nombres de las herramientas y sus parámetros deben ser claros para que el modelo grande entienda su propósito. 
Evita usar abreviaciones siempre que sea posible, y proporciona un comentario explicando la función de la herramienta y cuándo debe usarse. 

Por ejemplo, una herramienta llamada calculator le permite al modelo saber que es una calculadora, y el parámetro python_expression indica que el modelo debe ingresar una expresión de Python.

Si estás escribiendo una herramienta bing_search, el nombre del parámetro debería ser keywords.

#### 2. Guía de docstring de función

El docstring (usando """...""") guía al modelo sobre cuándo usar la herramienta.

También puede mencionar que se pueden usar funciones de las librerías math y random en la expresión.

Estas dos librerías ya han sido importadas en el código de ejemplo.

#### 3. Logging en lugar de printing

Dado que la entrada/salida estándar en este ejemplo de Servidor MCP se usa para transmisión de datos, no puedes usar print para mostrar información. 

Usa logger para depuración y logging en su lugar.

#### 4. Valores de retorno

Los valores de retorno de MCP son usualmente una cadena o JSON. En el ejemplo, el resultado del cálculo se devuelve en un campo JSON llamado result.

La longitud de los valores de retorno está usualmente limitada, similar a los comandos de dispositivos IoT, típicamente dentro de 1024 bytes.

#### 5. Límite de lista de herramientas

La lista de herramientas MCP tiene un límite superior. 

Más tarde se mostrará en la página de configuración, calculado basado en el conteo de tokens.

Nota: Tener demasiadas herramientas puede afectar la eficiencia de programación del dispositivo.

#### 6. Límite de conexión

Cada endpoint MCP tiene un número máximo de conexiones concurrentes.

Nota: Exceder este límite o tener demasiadas conexiones simultáneas puede reducir el rendimiento del dispositivo.

## Seleccionar servicios mcp pre-proporcionados

Los siguientes cuatro servicios MCP están disponibles para que elijas desde MCP Setting mencionado anteriormente.

Después de guardar la configuración y reiniciar el dispositivo, los servicios seleccionados tomarán efecto automáticamente.

Puedes remover el servicio haciendo clic en `×`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>

## Soporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
