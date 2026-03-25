---
description: Guia para usar o endpoint MCP
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
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mcp_endpoint/
---

# Endpoint MCP

## Visão geral

Agradecimentos especiais ao [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por suas contribuições de código aberto que tornaram este projeto possível.

**MCP (Model Context Protocol)** é um framework poderoso que estende as capacidades da IA ao permitir controle remoto, computação, operações de e-mail, pesquisas de conhecimento e muito mais.

O MCP permite que servidores exponham ferramentas chamáveis para modelos de linguagem por meio de um protocolo bem definido. Essas ferramentas permitem que o modelo interaja com sistemas externos, como consultar bancos de dados, invocar APIs ou realizar cálculos complexos. Cada ferramenta é identificada exclusivamente por um nome e descrita por metadados que definem sua funcionalidade.

O **Endpoint MCP** serve como ponte entre o seu serviço MCP local e o modelo Xiaozhi AI. Ele fornece uma interface para dispositivos com voz e outros terminais aproveitarem perfeitamente essas capacidades externas.

## Obter o Endpoint MCP

1. Acesse a [SenseCraft AI Platform](https://sensecraft.seeed.cc/ai/home)

2. Para acessar o Painel de Controle, clique em Watcher Agent no canto superior direito da página.

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/navigate.jpg" style={{width:800, height:'auto'}}/></div>

3. Abra a configuração do agent

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Panel/agent%20conf.jpg" style={{width:300, height:'auto'}}/></div> 

4. Clique em `MCP Setting` e `Get MCP Endpoint`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI14.png" style={{width:800, height:'auto'}}/></div>

5. Obtenha o endereço do Endpoint e o Status da Conexão

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI15.png" style={{width:400, height:'auto'}}/></div>

## Exemplo de MCP

Agradecimentos especiais ao [XiaoZhi AI Chatbot](https://github.com/78/xiaozhi-esp32) por suas contribuições de código aberto que tornaram este projeto possível.

Você pode obter o seguinte código no [MCP Example Code Github](https://github.com/78/mcp-calculator)

### Exemplo de código de servidor MCP

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

### Explicação do código

Abaixo está uma explicação detalhada de algumas partes principais do exemplo de servidor MCP:

- `@mcp.tool()` : Registra a função seguinte como uma ferramenta MCP que pode ser chamada remotamente pelo modelo de IA.

- `def calculator(python_expression: str) -> dict`: Define uma ferramenta que recebe uma expressão matemática do modelo.

- `result = eval(python_expression)` : Usa o eval() do Python para avaliar a expressão. Bibliotecas como math e random podem ser usadas porque foram importadas acima.

- `mcp.run(transport="stdio")` : Inicia o servidor. O transporte stdio permite que ele se comunique com o Watcher Agent ou com o seu cliente MCP.

### Início rápido

- Requisitos
  - [MCP Example Code Github](https://github.com/78/mcp-calculator)
  - Python 3.7+
  - websockets>=11.0.3
  - python-dotenv>=1.0.0
  - mcp>=1.8.1
  - pydantic>=2.11.4
  - mcp-proxy>=0.8.2

- Passo 1. Clone o repositório e navegue até a pasta do projeto

  ```bash
  git clone https://github.com/78/mcp-calculator.git
  cd mcp-calculator
  ```

- Passo 2. Instale as dependências

  ```bash
  pip install -r requirements.txt
  ```

- Passo 3. Configure as variáveis de ambiente
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

- Passo 4. Execute o exemplo da calculadora
  ```bash
  python mcp_pipe.py calculator.py
  ```

- Ou execute todos os servidores configurados
  ```bash
  python mcp_pipe.py
  ```

  :::note
  Isso requer um arquivo de configuração mcp_config.json definindo as configurações do servidor.
  :::

### Resultado da execução

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

### Status do Endpoint MCP

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP1.png" style={{width:400, height:'auto'}}/></div>

- Connection Status: Mostra se a sua conexão MCP está funcionando corretamente.
- Ícone de atualização: Atualiza o status da sua conexão MCP.
- Enabled Services: Lista todos os serviços MCP que o seu watcher pode usar.
- Endpoint Address: Seu mcp_endpoint_address (não compartilhe isso com ninguém, a menos que seja exigido pelo suporte técnico oficial)

### Log de conversas

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP2.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/MCP/MCP3.png" style={{width:800, height:'auto'}}/></div>

### Precauções
#### 1. Nomeação de ferramentas e parâmetros no MCP

Os nomes das ferramentas e de seus parâmetros devem ser claros para que o modelo grande entenda seu propósito. 
Evite usar abreviações sempre que possível e forneça um comentário explicando a função da ferramenta e quando ela deve ser usada. 

Por exemplo, uma ferramenta chamada calculator permite que o modelo saiba que se trata de uma calculadora, e o parâmetro python_expression indica que o modelo deve inserir uma expressão Python.

Se você estiver escrevendo uma ferramenta bing_search, o nome do parâmetro deve ser keywords.

#### 2. Orientação via docstring da função

A docstring (usando """...""") orienta o modelo sobre quando usar a ferramenta.

Ela também pode mencionar que funções das bibliotecas math e random podem ser usadas na expressão.

Essas duas bibliotecas já foram importadas no código de exemplo.

#### 3. Fazer log em vez de imprimir

Como a entrada/saída padrão neste exemplo de Servidor MCP é usada para transmissão de dados, você não pode usar print para exibir informações. 

Use logger para depuração e registro em log.

#### 4. Valores de retorno

Os valores de retorno MCP geralmente são uma string ou JSON. No exemplo, o resultado do cálculo é retornado em um campo JSON chamado result.

O comprimento dos valores de retorno costuma ser limitado, semelhante a comandos de dispositivos IoT, normalmente dentro de 1024 bytes.

#### 5. Limite da lista de ferramentas

A lista de ferramentas MCP possui um limite máximo. 

Mais tarde, ela será exibida na página de configuração, calculada com base na contagem de tokens.

Observação: Ter ferramentas demais pode afetar a eficiência de agendamento do dispositivo.

#### 6. Limite de conexão

Cada endpoint MCP possui um número máximo de conexões simultâneas.

Observação: Exceder esse limite ou ter conexões simultâneas em excesso pode reduzir o desempenho do dispositivo.

## Selecionar serviços MCP pré-fornecidos

Os quatro serviços MCP a seguir estão disponíveis para você escolher em MCP Setting, mencionado anteriormente.

Depois de salvar a configuração e reiniciar o dispositivo, os serviços selecionados entrarão em vigor automaticamente.

Você pode remover o serviço clicando em `×`

  <div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/SenseCraftAI/SenseCraftAI16.png" style={{width:800, height:'auto'}}/></div>

## Suporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
