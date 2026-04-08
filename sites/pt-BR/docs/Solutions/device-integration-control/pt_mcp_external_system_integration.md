---
description: Guia para integrar sistemas de negócios externos com o SenseCAP Watcher via MCP
title: Traga IA de Voz para o Seu Sistema de Negócios (MCP)
sidebar_position: 6
keywords:
  - MCP
  - API
  - Integração
  - Armazém
  - Controle por voz
  - Watcher
  - Sistema externo
  - Dispositivos habilitados por IA
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
url: https://wiki.seeedstudio.com/pt-br/mcp_external_system_integration/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Visão geral

Este guia demonstra como usar o Model Context Protocol ([MCP](https://github.com/microsoft/mcp-for-beginners/blob/main/translations/zh/00-Introduction/README.md)) para fazer a ponte entre IA de Voz e o seu ecossistema de software existente. Ao encapsular suas APIs REST como ferramentas MCP, você permite que o ***SenseCAP Watcher*** interaja diretamente com a sua lógica de negócios — seja um Sistema de Gerenciamento de Armazém (WMS), CRM, ERP ou um painel de TI personalizado.

<table class="table-center">
  <tr>
      <th>Interação Espacial Inteligente</th>
  </tr>
  <tr>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/wms-watcher-scenario.png" style={{width:480, height:'auto'}}/></div></td>
  </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeed.cc/solutions/smart-spatial-interaction-zh-hans" target="_blank">
          <strong><span><font color={'FFFFFF'} size={"4"}> Pacote de solução 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

<div class="info-section">
  <div class="section-header">
      <h2><a href="https://www.seeed.cc/solutions/voicecollectionanalysis-zh-hans" target="_blank">Interação Espacial Inteligente</a></h2>
      <p>Voz para API: transforme intenção em ação. Não crie um novo app do zero. Basta expor seus endpoints WMS existentes para o Watcher para habilitar controle por voz imediato para sua equipe.</p>
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
                <h3>Produtividade verdadeiramente mãos livres</h3>
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
                <h3>Sincronização de dados sem latência</h3>
                <p>Elimine a defasagem de registros em papel. Comandos de voz disparam chamadas diretas de API para o seu ERP, garantindo que os dados de inventário sejam sincronizados no instante em que um item se move.</p>
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
                <h3>Interoperabilidade universal de sistemas</h3>
                <p>Quer você use SAP, Oracle ou um backend SQL personalizado, se o seu sistema tiver uma API, o Watcher o controla. Não é necessário migrar sistemas legados para adotar IA.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitetura

Entender o fluxo de dados é essencial antes de escrever código. A integração segue um padrão de ponte onde o **Servidor MCP** atua como um gateway seguro entre a IA e a sua rede interna.

<div align="center">
  <img class='img-responsive' width={480} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/excalidraw-architecture.png" alt="excalidraw-architecture"/>
</div>

**Componentes principais:**

1. **Dispositivo Watcher:** Captura a intenção em linguagem natural (por exemplo, "Checar estoque") e a envia para a nuvem.
2. **Endpoint MCP (Nuvem):** Um túnel seguro fornecido pela SenseCraft que encaminha a intenção para o seu ambiente local.
3. **Servidor MCP (Ponte Local):** Um script Python leve em execução na sua máquina. Ele traduz a intenção da IA em funções de código específicas.
4. **API de backend:** Sua aplicação de negócios existente (FastAPI, Flask, etc.) que executa a lógica real.
5. **Infraestrutura:** Banco de dados ou outros serviços dos quais seu backend depende.

**Cenários de integração universais**:

Embora este guia use um **Sistema de Armazém** como implementação de referência, a arquitetura se aplica de forma universal:

| **Indústria**    | **Comando de voz**                     | **Ação subjacente do sistema** |
| --------------- | --------------------------------- | ---------------------------- |
| **Logística**   | *"Dar entrada em 50 unidades."*            | `POST /api/inventory/add`    |
| **Vendas (CRM)** | *"Atualizar status da negociação para Closed."* | `PUT /api/deals/{id}/status` |
| **Operações de TI**      | *"Reiniciar o servidor de staging."*   | `POST /api/servers/restart`  |

## Demo 1: Armazém controlado por voz

Vamos simular um ambiente de negócios executando um **Backend de Armazém** simulado e uma **Ponte MCP** na sua máquina local. Esta demonstração permite:

- 🗣️ **Verificação de inventário:** "Quantas unidades Xiaozhi Standard nós temos?"
- 🗣️ **Entrada de dados:** "Dar entrada em 5 unidades de Watcher Xiaozhi."
- 🗣️ **Insight de negócios:** "Qual é o resumo de inventário de hoje?"

### Pré-requisitos

- **Hardware:** SenseCAP Watcher, computador com suporte a Docker
- **Software:** Docker ou [Docker Desktop](https://www.docker.com/products/docker-desktop/) (inclui Docker Compose), Git
- **Conta:** conta na [Plataforma de IA SenseCraft](https://sensecraft.seeed.cc/ai/home)

:::note Configuração do Watcher
Garanta que o seu SenseCAP Watcher esteja configurado com **Xiaozhi AI** via [SenseCraft AI Device Center](https://sensecraft.seeed.cc/ai/device/local/37).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/sensecap-setup.png" alt="sensecap-setup"/>
</div>
:::

### Passo 1: Implantar o sistema de armazém

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

- Construir e iniciar o servidor de aplicação de armazém (porta 2125)
- Criar um volume persistente para o seu banco de dados

**3. Verifique a implantação**:

Aguarde cerca de 30 segundos para o contêiner iniciar e então verifique:

```bash
docker-compose -f docker-compose.prod.yml ps
```

Você deve ver o contêiner `warehouse-prod` em execução.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/API_EndPoint.png" alt="API Documentation"/>
</div>

- **Web UI:** Abra `http://localhost:2125` no seu navegador
- **Documentação da API:** Abra `http://localhost:2125/docs` para ver a interface Swagger

### Passo 2: Configuração inicial do sistema

O sistema de armazém inclui autenticação de usuário e gerenciamento de chave de API para segurança. Você precisa configurar isso antes de conectar o MCP.

**1. Criar conta de administrador**:

Abra `http://localhost:2125` no seu navegador. Na primeira visita, você verá um formulário de registro:

- Insira o **nome de usuário** desejado (por exemplo, `admin`)
- Insira uma **senha** (por exemplo, `admin123`)
- Clique em **Register**

:::tip Primeiro usuário é administrador
O primeiro usuário registrado se torna automaticamente o administrador.
:::

**2. Faça login e navegue até Gerenciamento de Usuários**:

Após o registro, faça login com suas credenciais. Clique na aba **User Management** na navegação.

**3. Crie uma chave de API**:

Na seção User Management, encontre a área **API Key Management**:

1. Insira um nome descritivo para a chave (por exemplo, `MCP Bridge`)
2. Clique em **Create API Key**
3. **Importante:** copie a chave de API gerada imediatamente! Ela será exibida apenas uma vez.

A chave de API se parece com: `wh_xxxxxxxxxxxxxxxxxxxx`

:::warning Salve sua chave de API
A chave de API é exibida apenas uma vez quando criada. Armazene-a com segurança — você vai precisar dela no próximo passo.
:::

### Passo 3: Configurar a Ponte MCP

Agora, conectamos o backend à IA. O código da ponte está localizado no diretório `mcp/`.

:::tip Instalar uv
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

**1. Obter o Endpoint MCP**:

Obtenha seu **Endereço de Endpoint MCP** (`wss://...`) na [Plataforma de IA SenseCraft](https://sensecraft.seeed.cc/ai/home) -> Watcher Agent -> Configuration.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/MCP_EndPoint.png" alt="MCP_EndPoint"/>
</div>

**2. Configurar a Chave de API**:

Abra um terminal e navegue até a pasta `mcp`:

```bash
cd mcp

# Copy the example config file
cp config.yml.example config.yml
```

Edite o arquivo `config.yml` com sua chave de API da Etapa 2:

:::caution
O `api_base_url` padrão em `config.yml.example` é `http://localhost:2124/api` (a porta de desenvolvimento local). Como fizemos o deploy com `docker-compose.prod.yml`, que usa a porta **2125**, você deve atualizá-lo de acordo.
:::

```yaml
# Backend API address (change from default 2124 to 2125 for Docker deployment)
api_base_url: "http://localhost:2125/api"

# API key authentication (from User Management -> API Key Management)
auth:
  type: api_key
  key: "wh_your-api-key-here"
```

**3. Iniciar a MCP Bridge**:

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

Se tudo der certo, você verá: `MCP 服务启动成功！` (Serviço MCP iniciado com sucesso)

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

| Comando de voz                                       | Ação esperada                                         |
| ------------------------------------------------------ | ----------------------------------------------------- |
| "Consultar o estoque de Xiaozhi Versão Padrão"         | Chama a ferramenta `query_stock`                      |
| "Quantas unidades de Xiaozhi Versão Profissional nós temos?" | Chama `query_stock` com versão profissional           |
| "Dar entrada em 5 unidades de Watcher Xiaozhi Versão Padrão" | Chama a ferramenta `stock_in` com quantity=5          |
| "Dar saída de 3 unidades Xiaozhi para vendas"          | Chama a ferramenta `stock_out` com quantity=3         |
| "Qual é o resumo de estoque de hoje?"                  | Chama a ferramenta `get_today_statistics`             |
| "Listar todos os produtos Xiaozhi"                     | Chama a ferramenta `search` com entity_type="material" |

**O que acontece nos bastidores?**

| **Componente** | **Ação**                                          |
| -------------- | -------------------------------------------------- |
| **Watcher**    | Envia o áudio de voz para a nuvem.                |
| **MCP Bridge** | Recebe a intenção, determina que a ferramenta é `query_stock`. |
| **Sistema**    | Executa `GET /materials/product-stats` com autenticação por chave de API. |
| **Resultado**  | Watcher fala: *"O estoque atual é de 150 unidades."* |

### Respostas Esperadas

**Consulta de Estoque:**

> "A consulta de estoque foi bem-sucedida. Watcher Xiaozhi Versão Padrão atualmente tem 150 unidades em estoque na localização A-01-01. O status do estoque é normal."

**Entrada de Estoque:**

> "Adicionadas com sucesso 5 unidades de Watcher Xiaozhi Versão Padrão. A quantidade anterior era 150, a nova quantidade é 155."

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/ai-agents/mcp-system-integration/xiaozhi_stock_in.png" alt="mcp-system-integration"/>
</div>

## Personalizando para o Seu Sistema

A demonstração de armazém é apenas um ponto de partida. A MCP bridge usa uma **arquitetura de plugin Provider** — você não precisa modificar nenhum código existente. Em vez disso, você cria um novo Provider para adaptar a bridge ao seu próprio sistema de backend.

### Como Funciona

A bridge possui uma separação clara de responsabilidades:

- **`warehouse_mcp.py`** — Define 6 ferramentas MCP fixas (`query_stock`, `stock_in`, `stock_out`, `search`, `resolve_name`, `get_today_statistics`). **Você não precisa modificar este arquivo.**
- **`providers/base.py`** — Classe base abstrata que define a interface (6 métodos).
- **`providers/default.py`** — Implementação padrão para o backend de armazém de demonstração.
- **Seu provider personalizado** — Um novo arquivo `.py` em `providers/` que adapta os 6 métodos à API do seu sistema.

### 1. Criar um Provider Personalizado

Crie um novo arquivo `mcp/providers/my_erp.py`:

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

A classe base (`BaseProvider`) fornece os helpers `http_get()` e `http_post()` integrados com injeção automática de cabeçalho de autenticação e tratamento de erros — assim, o código do seu provider permanece mínimo.

:::tip Descoberta Automática
Basta colocar o arquivo `.py` em `mcp/providers/`. A bridge descobre e registra automaticamente todas as subclasses de `BaseProvider` — não é necessário registro manual.
:::

### 2. Configurar via `config.yml`

Se ainda não fez isso, crie `config.yml` a partir do template primeiro:

```bash
cd mcp
cp config.yml.example config.yml
```

Depois altere para o seu provider e aponte para o seu servidor real — **sem necessidade de alterações de código**:

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

Você também pode sobrescrever configurações usando variáveis de ambiente: `WAREHOUSE_API_URL`, `WAREHOUSE_API_KEY` e `WAREHOUSE_PROVIDER`.

<details>

<summary>Métodos de Autenticação Suportados</summary>

A classe base oferece suporte nativo a vários tipos de autenticação via `config.yml`:

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

Para autenticação personalizada (por exemplo, assinatura HMAC), sobrescreva o método `get_auth_headers()` no seu provider.

</details>

<details>

<summary>Melhores Práticas para Desenvolvimento de Providers</summary>

### Formato do Valor de Retorno

O valor de retorno é lido pela IA para gerar uma resposta falada. Mantenha-o conciso (tipicamente abaixo de 1024 bytes).

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

### Tratamento de Erros

As funções `http_get()` / `http_post()` da classe base já tratam erros de conexão e códigos de status HTTP. Para erros adicionais de lógica de negócios, retorne um dicionário de erro estruturado:

```Python
return {
    "success": False,
    "error": "Product not found",
    "message": "No matching product in the ERP system."
}
```

### Registro em Log

:::danger Nunca use print()
MCP usa a entrada/saída padrão (stdio) para comunicação. Usar `print()` irá corromper o fluxo de dados do protocolo. Sempre use um logger:
:::

```Python
import logging
logger = logging.getLogger("WarehouseMCP")
logger.info(f"Querying stock for: {product_name}")
```

</details>

### 3. Fazer Deploy para Produção

A demonstração é executada no seu terminal local. Para operação contínua 24/7:

- **Dockerizar:** Empacote a pasta `mcp/` em um contêiner Docker para garantir estabilidade de ambiente.
- **Serviço em segundo plano:** Em vez de executar `./start_mcp.sh` em um terminal aberto, use `systemd` (Linux) ou `NSSM` (Windows) para executar o script como um serviço em segundo plano.
- **Rede:** Garanta que a máquina que executa a MCP Bridge tenha acesso estável à internet para se conectar à SenseCraft Cloud (`wss://...`).

## Solução de Problemas

<details>
<summary>❌ Contêineres Docker não iniciam</summary>

- **Sintoma:** `docker-compose ps` mostra contêineres no estado "Exited".
- **Solução:**
  1. Verifique se o Docker Desktop está em execução
  2. Veja os logs: `docker-compose -f docker-compose.prod.yml logs`
  3. Certifique-se de que a porta 2125 não está em uso
  4. Tente reconstruir: `docker-compose -f docker-compose.prod.yml up -d --build`

</details>

<details>
<summary>❌ Chave de API inválida (401 Unauthorized)</summary>

- **Sintoma:** os logs da MCP bridge mostram `401 Unauthorized` ou "Invalid API Key".
- **Solução:**
  1. Verifique se a chave de API em `mcp/config.yml` está correta
  2. Verifique se a chave de API ainda está ativa em User Management
  3. Certifique-se de que não haja espaços extras ou aspas ao redor da chave
  4. Tente criar uma nova chave de API

</details>

<details>
<summary>❌ Serviço de backend não está em execução</summary>

- **Sintoma:** A IA responde com "Cannot connect to backend service".
- **Solução:**
  1. Verifique se o contêiner está em execução: `docker-compose -f docker-compose.prod.yml ps`
  2. Verifique a integridade do backend: `curl http://localhost:2125/api/dashboard/stats`
  3. Verifique os logs: `docker-compose -f docker-compose.prod.yml logs`

</details>

<details>
<summary>❌ Tempo limite de conexão MCP excedido</summary>

- **Sintoma:** O script fica travado em "Connecting to WebSocket server..." indefinidamente.
- **Solução:**
  1. Verifique se o seu `MCP_ENDPOINT` está correto (confira se há erros de digitação).
  2. Certifique-se de que a URL começa com `wss://` (WebSocket seguro).
  3. Verifique sua conexão com a internet (tráfego de saída para o SenseCraft Cloud).

</details>

<details>
<summary>❌ Ferramenta não reconhecida</summary>

- **Sintoma:** Você fala um comando, mas a IA diz "I don't know how to do that" ou não aciona a ferramenta.
- **Solução:**
  1. **Verifique a nomeação:** Use nomes de funções claros e descritivos em inglês.
  2. **Verifique as docstrings:** Certifique-se de que a docstring descreve explicitamente a *intenção* (por exemplo, "Use this to check stock").
  3. **Reinicie:** Você deve reiniciar o script do servidor MCP após qualquer alteração de código.

</details>

<details>
<summary>❌ Limite de conexão excedido</summary>

- **Sintoma:** O log de erro mostra "Maximum connections reached".
- **Solução:**
  1. Cada Endpoint tem um limite de conexão. Certifique-se de não ter vários terminais executando o script simultaneamente.
  2. Feche outras conexões e aguarde alguns minutos antes de tentar novamente.

</details>

<details>
<summary>❌ Conexão recusada / WebSocket 443 bloqueado</summary>

**Sintoma:**
Você vê `[WinError 1225] Connection refused` ou o script fica travado em `Connecting to WebSocket server...`, mesmo com a URL de Endpoint correta.

**Causa:**
**Firewall corporativo bloqueando.** Muitas redes de escritório (ou VPNs) bloqueiam rigorosamente o tráfego de **WebSocket (wss://)** ou protocolos não padronizados, mesmo na porta 443.

**Soluções rápidas:**

1. **📱 O "Teste do Hotspot" (Recomendado)**
   Desconecte-se da rede do escritório/VPN e conecte seu computador a um **Hotspot móvel (4G/5G)**.
   - *Se funcionar:* Sua rede de escritório está bloqueando a conexão.

2. **🔧 Configurar proxy**
   Se sua empresa exigir um proxy, configure-o antes de executar:
   - **Windows:** `$env:HTTPS_PROXY="http://your-proxy:port"`
   - **Mac/Linux:** `export HTTPS_PROXY="http://your-proxy:port"`

3. **🛡️ Colocar na lista de permissões**
   Peça ao TI para permitir o tráfego de **WebSocket (WSS)** para: `*.seeed.cc`.

</details>

## Recursos

- [Guia de configuração de Endpoint MCP](/pt-br/mcp_endpoint) - Saiba como criar e gerenciar endpoints MCP.
- [Repositório do sistema de armazém](https://github.com/suharvest/warehouse_system) - Código-fonte completo, incluindo exemplos de Provider.
- [Documentação do FastMCP](https://github.com/PrefectHQ/fastmcp) - Aprofunde-se em definições avançadas de ferramentas.

## Suporte técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
