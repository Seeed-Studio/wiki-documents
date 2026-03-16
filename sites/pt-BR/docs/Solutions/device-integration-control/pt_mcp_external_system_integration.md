---
description: Guia para integrar sistemas de negócios externos com o SenseCAP Watcher via MCP
title: Traga IA de Voz para o Seu Sistema de Negócios (MCP)
sidebar_position: 6
keywords:
  - MCP
  - API
  - Integração
  - Armazém
  - Controle por Voz
  - Watcher
  - Sistema Externo
  - Dispositivos com IA
  - Qwen
  - OA
image: https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.webp
slug: /mcp_external_system_integration
last_update:
  date: 12/23/2025
  author: Spencer
tags:
  - mcp
  - agents
createdAt: '2025-12-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/mcp_external_system_integration/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Visão Geral

Este guia demonstra como usar o Model Context Protocol ([MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)) para conectar IA de Voz ao seu ecossistema de software existente. Ao encapsular suas APIs REST como ferramentas MCP, você permite que o ***SenseCAP Watcher*** interaja diretamente com a sua lógica de negócios — seja um Sistema de Gerenciamento de Armazém (WMS), CRM, ERP ou um painel de TI personalizado.

<table class="table-center">
  <tr>
      <th>Interação Espacial Inteligente</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com.cn/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Pacote de Solução 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeedstudio.com.cn/solutions/voicecollectionanalysis-zh-hans" target="_blank">Interação Espacial Inteligente</a></h2>
      <p>Voz para API: Transforme intenção em ação. Não crie um novo aplicativo do zero. Basta expor seus endpoints WMS existentes para o Watcher para habilitar controle por voz imediato para sua equipe.</p>
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
                <h3>Produtividade Verdadeiramente Mãos Livres</h3>
                <p>Operadores podem consultar estoque ou registrar envios enquanto usam luvas ou dirigem empilhadeiras. Mantenha os olhos na tarefa e as mãos no volante para máxima segurança e eficiência.</p>
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
                <h3>Sincronização de Dados sem Latência</h3>
                <p>Elimine a defasagem dos registros em papel. Comandos de voz disparam chamadas diretas à API do seu ERP, garantindo que os dados de inventário sejam sincronizados no instante em que um item se move.</p>
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
                <h3>Interoperabilidade Universal de Sistemas</h3>
                <p>Se você usa SAP, Oracle ou um backend SQL personalizado, se o seu sistema tiver uma API, o Watcher o controla. Não é necessário migrar sistemas legados para adotar IA.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitetura

Entender o fluxo de dados é essencial antes de escrever código. A integração segue um padrão de ponte em que o **Servidor MCP** atua como um gateway seguro entre a IA e a sua rede interna.

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**Componentes Principais:**

1. **Dispositivo Watcher:** Captura a intenção em linguagem natural (por exemplo, "Verificar estoque") e a envia para a nuvem.
2. **Endpoint MCP (Nuvem):** Um túnel seguro fornecido pela SenseCraft que encaminha a intenção para o seu ambiente local.
3. **Servidor MCP (Ponte Local):** Um script Python leve em execução na sua máquina. Ele traduz a intenção da IA em funções de código específicas.
4. **API de Backend:** Sua aplicação de negócios existente (FastAPI, Flask, etc.) que executa a lógica real.
5. **Infraestrutura:** Banco de dados ou outros serviços dos quais o seu backend depende.

**Cenários de Integração Universal**:

Embora este guia use um **Sistema de Armazém** como implementação de referência, a arquitetura se aplica universalmente:

| **Setor**       | **Comando de Voz**                 | **Ação Subjacente do Sistema** |
| --------------- | --------------------------------- | ------------------------------ |
| **Logística**   | *"Dar entrada em 50 unidades."*   | `POST /api/inventory/add`      |
| **Vendas (CRM)** | *"Atualizar status do negócio para Closed."* | `PUT /api/deals/{id}/status` |
| **Operações de TI**      | *"Reinicie o servidor de staging."*   | `POST /api/servers/restart`  |

## Demo 1: Armazém Controlado por Voz

Vamos simular um ambiente de negócios executando um **Backend de Armazém** e uma **Ponte MCP** na sua máquina local. Esta demo permite:

- 🗣️ **Verificação de Inventário:** "Quantas unidades Xiaozhi Standard nós temos?"
- 🗣️ **Entrada de Dados:** "Dar entrada de 5 unidades de Watcher Xiaozhi."
- 🗣️ **Insight de Negócios:** "Qual é o resumo de inventário de hoje?"

### Pré-requisitos

- **Hardware:** SenseCAP Watcher, computador com suporte a Docker
- **Software:** Docker ou [Docker Desktop](https://www.docker.com/products/docker-desktop/) (inclui Docker Compose), Git
- **Conta:** conta na [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home)

:::note Configuração do Watcher
Certifique-se de que o seu SenseCAP Watcher está configurado com **Xiaozhi AI** via [SenseCraft AI Device Center](https://sensecraft.seeed.cc/ai/device/local/37).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>
:::

### Etapa 1: Implantar o Sistema de Armazém

Usamos Docker para implantação a fim de garantir um ambiente consistente em todas as plataformas (Windows, macOS, Linux).

**1. Clone o repositório**:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
```

**2. Inicie com Docker Compose**:

```bash
docker-compose -f docker-compose.prod.yml up -d
```

Este único comando irá:

- Criar e iniciar o servidor de API de backend (porta 2124)
- Criar e iniciar a interface web frontend (porta 2125)
- Criar um volume persistente para o seu banco de dados

**3. Verifique a implantação**:

Aguarde cerca de 30 segundos para os contêineres iniciarem e então verifique:

```bash
docker-compose -f docker-compose.prod.yml ps
```

Você deverá ver ambos os contêineres `warehouse-backend-prod` e `warehouse-frontend-prod` em execução.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="API Documentation"/>
</div>

- **Interface Frontend:** Abra `http://localhost:2125` no seu navegador
- **Documentação da API:** Abra `http://localhost:2124/docs` para ver o Swagger UI

### Etapa 2: Configuração Inicial do Sistema

O sistema de armazém inclui autenticação de usuário e gerenciamento de chave de API para segurança. Você precisa configurar isso antes de conectar o MCP.

**1. Crie Conta de Administrador**:

Abra `http://localhost:2125` no seu navegador. Na primeira visita, você verá um formulário de registro:

- Insira o **nome de usuário** desejado (por exemplo, `admin`)
- Insira uma **senha** (por exemplo, `admin123`)
- Clique em **Register**

:::tip Primeiro Usuário é Administrador
O primeiro usuário registrado se torna automaticamente o administrador.
:::

**2. Faça login e navegue até Gerenciamento de Usuários**:

Após o registro, faça login com suas credenciais. Clique na aba **User Management** na navegação.

**3. Crie uma Chave de API**:

Na seção User Management, encontre a área **API Key Management**:

1. Insira um nome descritivo para a chave (por exemplo, `MCP Bridge`)
2. Clique em **Create API Key**
3. **Importante:** Copie a chave de API gerada imediatamente! Ela será exibida apenas uma vez.

A chave de API se parece com: `wh_xxxxxxxxxxxxxxxxxxxx`

:::warning Salve Sua Chave de API
A chave de API é exibida apenas uma vez quando criada. Armazene-a com segurança - você vai precisar dela na próxima etapa.
:::

### Etapa 3: Configurar a Ponte MCP

Agora vamos conectar o backend à IA. O código da ponte está no diretório `mcp/`.

:::tip Instale o uv
A ponte MCP usa `uv` como seu gerenciador de ambiente Python. Instale-o com:

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

**1. Obtenha o Endpoint MCP**:

Obtenha o seu **Endereço de Endpoint MCP** (`wss://...`) na [Plataforma SenseCraft AI](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. Configure a Chave de API**:

Abra um terminal e navegue até a pasta `mcp`:

```bash
cd mcp

# Copy the example config file
cp config.yml.example config.yml
```

Edite `config.yml` com sua chave de API da Etapa 2:

```yaml
# Backend API address
api_base_url: "http://localhost:2124/api"

# API key (from User Management -> API Key Management)
api_key: "wh_your-api-key-here"
```

**3. Inicie a Ponte MCP**:

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

Se tudo der certo, você verá: `MCP Service Started Successfully!`

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/mcp-bridge-start-successfully.png" alt="mcp-bridge-start-successfully"/>
</div>

### Etapa 4: Verificação

Tudo está conectado. Agora, use o SenseCAP Watcher para interagir com o seu sistema local.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_connected.png" alt="MCP_connected"/>
</div>

Agora podemos testar a integração usando o seu dispositivo Watcher!

### Exemplos de Comandos de Voz

| Comando de Voz                                        | Ação Esperada                                         |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Consultar o estoque da Xiaozhi Versão Padrão"         | Chama a ferramenta `query_xiaozhi_stock`              |
| "Quantas Xiaozhi Versão Profissional nós temos?"       | Chama `query_xiaozhi_stock` com versão profissional   |
| "Dar entrada em 5 unidades de Watcher Xiaozhi Versão Padrão" | Chama a ferramenta `stock_in` com quantity=5      |
| "Dar saída de 3 unidades Xiaozhi para vendas"          | Chama a ferramenta `stock_out` com quantity=3         |
| "Qual é o resumo do estoque de hoje?"                  | Chama a ferramenta `get_today_statistics`             |
| "Listar todos os produtos Xiaozhi"                     | Chama a ferramenta `list_xiaozhi_products`            |

**O que acontece nos bastidores?**

| **Componente** | **Ação**                                          |
| -------------- | -------------------------------------------------- |
| **Watcher**    | Envia o áudio de voz para a nuvem.                |
| **MCP Bridge** | Recebe a intenção, determina que a ferramenta é `query_stock`. |
| **Sistema**    | Executa `GET /materials/product-stats` com autenticação por chave de API. |
| **Resultado**  | Watcher fala: *"O estoque atual é de 150 unidades."* |

### Respostas Esperadas

**Consulta de Estoque:**

> "A consulta de estoque foi bem-sucedida. Watcher Xiaozhi Versão Padrão possui atualmente 150 unidades em estoque na localização A-01-01. O status do estoque é normal."

**Entrada de Estoque:**

> "Adicionadas com sucesso 5 unidades de Watcher Xiaozhi Versão Padrão. A quantidade anterior era 150, a nova quantidade é 155."

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## Personalizando para o Seu Sistema

A demonstração do armazém é apenas um modelo. Para integrar seu próprio **Sistema de Gestão de Pedidos**, **CRM** ou **Painel de TI**, siga estas etapas para modificar o código da ponte.

### 1. Aponte para Seu Servidor Real

Abra `mcp/warehouse_mcp.py`. A primeira etapa é informar à ponte onde sua API real está.

```python
# Change this line to point to your actual production server IP/Domain
# API_BASE_URL = "http://localhost:2124/api"
API_BASE_URL = "http://192.168.50.10:8080/api/v1"
```

Ou, melhor, use o arquivo `config.yml`:

```yaml
api_base_url: "http://192.168.50.10:8080/api/v1"
api_key: "your-production-api-key"
```

### 2. Defina Ferramentas Personalizadas

Para adicionar um novo comando de voz, você não precisa treinar um modelo. Você só precisa escrever uma função Python.

Use o decorador `@mcp.tool()` para encapsular suas chamadas de API.

**Fluxo de Trabalho:**

1. **Identifique as Operações:** Quais ações você quer controlar por voz? (por exemplo, "Checar Pedido", "Reiniciar Servidor").
2. **Documente a API:** Garanta que você conhece a URL do endpoint e os parâmetros (por exemplo, `GET /orders/{id}`).
3. **Escreva o Wrapper:** Crie a função Python usando o padrão abaixo.

**Exemplo: Adaptando para um Sistema de Gestão de Pedidos**:

:::tip A "Docstring" é a Mágica
A IA lê a **docstring** do Python (o texto dentro de `""" ... """`) para decidir **quando** chamar sua função. Seja descritivo\!
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

<summary>Melhores Práticas para Definir Ferramentas Personalizadas</summary>

Escrever boas ferramentas MCP é diferente de escrever funções Python padrão. A IA depende fortemente da estrutura do seu código para entender o que fazer.

### 1. A Nomenclatura é Importante

Os nomes das ferramentas e parâmetros devem ser descritivos. A IA os lê para "adivinhar" qual ferramenta escolher.

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

### 2. A Docstring é a Interface do Usuário

A docstring **não** é apenas um comentário; ela é a **Interface do Usuário** para o modelo de IA. Ela orienta a IA sobre *quando* e *como* usar a ferramenta.

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

### 3. Logger vs. Print (Crucial!)

:::danger Nunca use print()

O MCP usa E/S padrão (stdio) para comunicação entre a ponte e o agente de IA. Usar print() vai corromper o fluxo de dados do protocolo e causar a quebra da conexão.

:::

Sempre use um logger para depuração:

```Python
import logging
logger = logging.getLogger(__name__)

# ✅ Good - Logs to file/stderr, safe for MCP
logger.info(f"Processing stock in: {product_name}")

# ❌ Bad - Breaks MCP communication
print(f"Processing stock in: {product_name}")
```

### 4. Otimize os Valores de Retorno

O valor de retorno é lido pela IA para gerar uma resposta falada. Mantenha-o conciso para reduzir a latência e o uso de tokens (tipicamente abaixo de 1024 bytes).

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

### 5. Tratamento de Erros

Sua API pode estar offline ou retornar 404. Trate isso de forma elegante para que a IA possa explicar o problema ao usuário em vez de travar.

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

### 3. Implantar em Produção

A demonstração é executada no seu terminal local. Para operação contínua 24/7:

- **Dockerizar:** Empacote a pasta `mcp/` em um contêiner Docker para garantir estabilidade do ambiente.
- **Serviço em Segundo Plano:** Em vez de executar `./start_mcp.sh` em um terminal aberto, use `systemd` (Linux) ou `NSSM` (Windows) para executar o script como um serviço em segundo plano.
- **Rede:** Garanta que a máquina executando a Ponte MCP tenha acesso estável à internet para se conectar à SenseCraft Cloud (`wss://...`).

## Solução de Problemas

<details>
<summary>❌ Contêineres Docker Não Iniciam</summary>

- **Sintoma:** `docker-compose ps` mostra os contêineres em estado "Exited".
- **Solução:**
  1. Verifique se o Docker Desktop está em execução
  2. Veja os logs: `docker-compose -f docker-compose.prod.yml logs`
  3. Certifique-se de que as portas 2124 e 2125 não estão em uso
  4. Tente reconstruir: `docker-compose -f docker-compose.prod.yml up -d --build`

</details>

<details>
<summary>❌ Chave de API Inválida (401 Unauthorized)</summary>

- **Sintoma:** Logs da ponte MCP mostram `401 Unauthorized` ou "Invalid API Key".
- **Solução:**
  1. Verifique se a chave de API em `mcp/config.yml` está correta
  2. Verifique se a chave de API ainda está ativa no Gerenciamento de Usuários
  3. Certifique-se de que não há espaços extras ou aspas ao redor da chave
  4. Tente criar uma nova chave de API

</details>

<details>
<summary>❌ Serviço de Backend Não Está em Execução</summary>

- **Sintoma:** A IA responde com "Cannot connect to backend service".
- **Solução:**
  1. Verifique se os contêineres Docker estão em execução: `docker-compose -f docker-compose.prod.yml ps`
  2. Verifique a integridade do backend: `curl http://localhost:2124/api/dashboard/stats`
  3. Verifique os logs do backend: `docker-compose -f docker-compose.prod.yml logs backend`

</details>

<details>
<summary>❌ Tempo de Conexão do MCP Esgotado</summary>

- **Sintoma:** O script fica travado em "Connecting to WebSocket server..." indefinidamente.
- **Solução:**
  1. Verifique se o seu `MCP_ENDPOINT` está correto (confira se há erros de digitação).
  2. Certifique-se de que a URL começa com `wss://` (WebSocket Seguro).
  3. Verifique sua conexão com a internet (tráfego de saída para a SenseCraft Cloud).

</details>

<details>
<summary>❌ Ferramenta não reconhecida</summary>

- **Sintoma:** Você fala um comando, mas a IA diz "I don't know how to do that" ou não aciona a ferramenta.
- **Solução:**
  1. **Verifique a nomeação:** Use nomes de funções claros, descritivos e em inglês.
  2. **Verifique as docstrings:** Certifique-se de que a docstring descreve explicitamente a *intenção* (por exemplo, "Use this to check stock").
  3. **Reinicie:** Você deve reiniciar o script do servidor MCP após qualquer alteração no código.

</details>

<details>
<summary>❌ Limite de conexão excedido</summary>

- **Sintoma:** O log de erro mostra "Maximum connections reached".
- **Solução:**
  1. Cada Endpoint tem um limite de conexões. Certifique-se de que você não tenha vários terminais executando o script simultaneamente.
  2. Feche outras conexões e aguarde alguns minutos antes de tentar novamente.

</details>

<details>
<summary>❌ Conexão recusada / WebSocket 443 bloqueado</summary>

**Sintoma:**
Você vê `[WinError 1225] Connection refused` ou o script fica travado em `Connecting to WebSocket server...`, mesmo com a URL de Endpoint correta.

**Causa:**
**Firewall corporativo bloqueando.** Muitas redes de escritório (ou VPNs) bloqueiam rigidamente o tráfego de **WebSocket (wss://)** ou protocolos não padrão, mesmo na porta 443.

**Soluções rápidas:**

1. **📱 O "Teste do Hotspot" (Recomendado)**
   Desconecte da rede corporativa/VPN e conecte seu computador a um **Hotspot Móvel (4G/5G)**.
   - *Se funcionar:* Sua rede corporativa está bloqueando a conexão.

2. **🔧 Configurar proxy**
   Se sua empresa exigir um proxy, defina-o antes de executar:
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ Lista de permissões (whitelist)**
   Peça ao TI para permitir o tráfego **WebSocket (WSS)** para: `*.seeed.cc`.

</details>

## Recursos

- [Guia de Configuração de Endpoint MCP](/pt-br/mcp_endpoint) - Aprenda como criar e gerenciar endpoints MCP.
- [Documentação do FastMCP](https://github.com/jlowin/fastmcp) - Aprofunde-se em definições avançadas de ferramentas.

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
