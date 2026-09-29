---
description: Adicione verificação facial a operações controladas por voz na sua própria plataforma de armazém ou de negócios, para que cada comando seja atribuído ao operador que a câmera reconheceu, e não ao nome que foi pronunciado.
title: Leve Voice AI para o seu sistema de negócios com verificação facial
keywords:
  - MCP
  - Reconhecimento facial
  - SenseCAP Watcher
  - Integração
  - ERP
  - WMS
  - Controle por voz
  - Edge AI
  - Autenticação
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
url: https://wiki.seeedstudio.com/pt-br/solutions/mcp-face-auth-integration/
---

:::note[Notice]
O reconhecimento facial processa dados biométricos, que são especialmente regulamentados em muitos lugares — GDPR na UE e no Reino Unido, BIPA em Illinois e outros. Faça com que sua implantação seja revisada antes de cadastrar uma pessoa real; consulte [Biometric Data](#5-dados-biométricos) para saber o que cabe a você.
:::

## Visão geral

O que fornecemos é um pequeno robô que fica no chão do seu cliente, mantém uma conversa e sabe com quem está falando. Um operador se aproxima com as mãos ocupadas, diz "dar baixa em quarenta unidades dos rolamentos M16", e a transação entra no seu sistema atribuída à pessoa que a câmera reconheceu — não ao nome que foi pronunciado.

Matriz de microfones, palavra de ativação, fala, modelo de linguagem e reconhecimento facial chegam como um único produto ajustado, com uma compilação totalmente local para clientes cujo áudio não pode sair do local. O que resta é a parte que só você pode fazer: conectá-lo à sua plataforma. Essa conexão é um **servidor MCP na frente do seu próprio sistema** — você não adota nossa plataforma. A referência para construir um é nossa plataforma de armazém, com licença MIT e código aberto:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> View on GitHub 🖱️</font></span></strong></a>
</div>

O reconhecimento facial é a peça estrutural, porque um comando de voz não carrega identidade: o nome que um modelo de linguagem escreve em um registro é qualquer um que o locutor declarar, e dizer o nome de outra pessoa já basta para forjar isso. O reconhecimento pode rodar em dois lugares, e escolher entre eles é a principal decisão que esta página ajuda você a tomar.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-face-architecture.png" alt="Watcher captura voz e rosto, SenseCraft encaminha a chamada MCP, seu servidor MCP aplica o filtro facial antes de chegar ao seu backend"/>
</div>

:::info Três nomes nesse diagrama
**MCP** é o [Model Context Protocol](https://github.com/modelcontextprotocol), o padrão aberto pelo qual um modelo de linguagem chama suas funções. **XiaoZhi** é a pilha de assistente de voz de código aberto que o Watcher executa — palavra de ativação, fala e decisão de quais das suas ferramentas chamar. **SenseCraft** é onde você registra um dispositivo e obtém o endpoint MCP que o conecta ao seu servidor.
:::

## Recursos

Controle por voz sem identidade é uma lacuna de auditoria. Estas são as propriedades que a fecham.

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Identidade que não pode ser falada</h3>
                <p>O nome do operador é produzido por correspondência facial, não pelo modelo de linguagem. Um locutor que declara o nome de outra pessoa ainda assim escreve a própria identidade verificada no registro, porque os dois valores trafegam em campos separados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
            </div>
            <div class="info-content">
                <h3>Uma referência funcional, não uma caixa-preta</h3>
                <p>Plataforma inteira em código aberto — camada de ferramentas, filtro de verificação, repositório de embeddings e telas de administração. Você não está integrando contra uma especificação que não pode inspecionar; está copiando código que já está em produção.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M12 5.25v13.5m-3.75-13.5v13.5m-3.75-13.5v13.5m11.25-13.5v13.5m3.75-13.5v13.5m-1.5-13.5H9.75v13.5h9.75V5.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Funciona com ou sem uma caixa de computação</h3>
                <p>Comece no próprio NPU do dispositivo sem hardware extra e depois mova o reconhecimento para um servidor de inferência na LAN quando precisar de um quadro maior de pessoas ou de anti-spoofing. A troca é uma alteração de configuração; suas ferramentas MCP e seu banco de dados permanecem intocados.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Aplicação por operação</h3>
                <p>As regras são definidas por operação e por armazém. Exija rosto para dar baixa em estoque, mas não para consultas de estoque, restrinja uma operação a uma lista de permissão nomeada ou eleve o limiar de correspondência para movimentações de alto valor — sem tocar no código de integração.</p>
            </div>
        </li>
    </ul>
</div>

## Arquitetura do sistema

Coloque o filtro de verificação na **camada de ferramentas MCP**, acima da sua lógica de negócios. Cada ferramenta com filtro chama o filtro primeiro e só então toca nos seus dados. Mantê-lo ali — em vez de dentro de cada método de negócios — é o que faz a garantia valer de forma uniforme.

- **SenseCAP Watcher** captura o comando de voz e, dependendo do caminho que você escolher, ou realiza a correspondência facial em seu próprio NPU ou fornece um quadro de câmera sob demanda.
- **Seu servidor MCP** expõe suas operações de negócios como ferramentas. Antes de executar uma ferramenta com filtro, ele consulta seu endpoint de verificação e respeita o veredito. A política deve ser **fail-closed**: qualquer coisa diferente de uma permissão explícita bloqueia a operação.
- **Seu backend** é o responsável pelas pessoas cadastradas, seus embeddings, as regras e o log de auditoria, e responde à chamada de verificação com um veredito mais o nome da pessoa correspondente.
- **Sua API de negócios existente** permanece intocada. O servidor MCP é uma nova porta de entrada, não uma reescrita.

Na implementação de referência, estes são `mcp/warehouse_mcp.py` (camada de ferramentas mais o filtro `_enforce_face()`), `mcp/mcp_pipe.py` (transporte) e o `/api/face/verify-mcp` do backend, com o orquestrador e o mecanismo de correspondência por trás dele.

### Hardware

Duas peças. **SenseCAP Watcher** é o dispositivo com o qual as pessoas falam e a câmera que as reconhece — sempre obrigatório. Uma **caixa de computação** na mesma LAN executa o serviço de reconhecimento, e é o que você adiciona quando passa de um piloto.

|SenseCAP Watcher para XiaoZhi<br/>*o dispositivo no chão*|Uma caixa de computação<br/>*o serviço de reconhecimento*|
|:---:|:---:|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100051523-sensecap-watcher-xiaozhi-en.jpg" alt="SenseCAP Watcher for XiaoZhi" width={280} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={280} height="auto" />|
|ESP32-S3 com um co-processador de visão Himax WiseEye2<br/>Câmera, microfone e alto-falante · tela sensível ao toque de 1,45 polegada<br/>Wi-Fi 2,4 GHz e BLE 5 · expansão Grove I2C|Executa o modelo facial que seu cadastro e sua correspondência utilizam<br/>Remove o limite de 20 pessoas e adiciona anti-spoofing<br/>Escolha o nível que se encaixa — [opções abaixo](#escolhendo-uma-caixa-de-computação)|
|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html)</p>|<p style={{textAlign: 'center'}}>[Veja as opções](#escolhendo-uma-caixa-de-computação)</p>|

Tecnicamente, a caixa de computação é opcional: o Watcher pode fazer correspondência facial em seu próprio NPU, o que é suficiente para um piloto. Na prática, esse modo limita você a 20 pessoas por dispositivo e não consegue distinguir um rosto de uma fotografia, então implantações em produção quase sempre adicionam a caixa. A [Parte 2](#parte-2--escolha-seu-caminho-de-verificação) cobre totalmente essa troca.

Para colocar o Watcher na rede e pareado com um agente, consulte [SenseCAP Watcher for Xiaozhi AI](/pt-br/sensecap_watcher_for_xiaozhi_ai).

## Experimente antes de construir

Você não precisa ler código para descobrir se isso se encaixa no seu produto. Há três caminhos de entrada, em ordem crescente de esforço.

**Use a instância hospedada — para a metade de voz.** Cadastre-se em [warehouse.seeed.cn](https://warehouse.seeed.cn/) e você estará falando com uma implantação em execução. Emparelhe um Watcher com ela e você poderá exercitar o fluxo de voz para inventário sem instalar nada. Observe que **a verificação facial está desativada em implantações compartilhadas**, então isso mostra a experiência de voz, não a de identidade.

**Implante o design de referência — para a metade de rosto.** O design de referência Smart Warehouse empacota o mesmo sistema para implantação em um clique. Como é uma instância privada, a verificação facial pode ser ativada, então este é o caminho mais curto para ver o verdadeiro assunto desta página funcionando.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_warehouse" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Reference Design 🖱️</font></span></strong></a>
</div>

**Execute você mesmo.** Quando estiver pronto para olhar por dentro e começar a adaptar:

```bash
git clone https://github.com/suharvest/warehouse_system.git
cd warehouse_system
docker-compose -f docker-compose.prod.yml up -d
```

:::note A verificação facial precisa de uma implantação privada
O reconhecimento facial vem desativado por padrão nas compilações em nuvem e hospedadas e é habilitado por implantação. Se você estiver avaliando especificamente o fluxo de rosto, planeje usar o design de referência ou uma instância auto-hospedada em vez de uma compartilhada.
:::

## Parte 1 — Construa seu servidor MCP

Depois de vê-lo funcionar, decida quanto dele irá reutilizar. Existem duas opções honestas.

### Opção A — Reutilizar a ponte, trocar a fonte de dados

Se o seu domínio for armazenagem, o caminho mais rápido é manter a camada de ferramenta de referência e escrever uma classe adaptadora. Você herda as definições de ferramentas, a engenharia de prompt de voz — desambiguação, leitura de candidatos, confirmação de quantidade — e o gate de rosto, e muda apenas de onde vêm os dados.

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

Implemente seis métodos obrigatórios — `resolve_name`, `query_stock`, `stock_in`, `stock_out`, `search`, `get_today_statistics` — mais dois opcionais, `query_batch` e `move_batch_location`.

:::caution Use as assinaturas de `mcp/providers/base.py`
A camada de ferramenta passa esses argumentos **posicionalmente**, então copie cada assinatura do código em vez de qualquer descrição em texto corrido. Uma assinatura que não corresponda gera `TypeError` na primeira chamada.
:::

:::danger Altere o comportamento de erro antes de enviar para produção
A camada de ferramenta de referência volta para o Provider padrão embutido sempre que o seu falha ao carregar ou gera uma exceção — oscilação de rede, arquivo ausente, configuração incorreta — e registra um aviso em vez de falhar de forma ruidosa. Na referência isso é uma conveniência. No seu produto isso é roteamento incorreto de dados: um erro transitório envia as gravações de inventário do seu cliente para o banco de dados errado, silenciosamente.

Faça a falha do adaptador falhar de forma ruidosa e recusar a operação. Este é o único comportamento de referência que você não deve copiar.
:::

### Opção B — Escreva seu próprio servidor MCP

Se o seu domínio não for armazenagem, os seis métodos não servirão. Defina suas próprias ferramentas com FastMCP e mantenha apenas `mcp_pipe.py` como transporte. Você então implementa o gate de rosto por conta própria — veja a [Parte 3](#parte-3--o-que-você-implementa).

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

Restrições que vêm do contexto de voz, todas aprendidas da maneira difícil:

- **Nunca chame `print()`.** stdio é o canal de protocolo; qualquer coisa escrita em stdout corrompe o enquadramento JSON-RPC. Use `logging`, que vai para stderr.
- **Mantenha os valores de retorno pequenos.** Um modelo de linguagem os lê em voz alta. Fique perto de 1 KB; cargas úteis grandes demais atingem o limite de frame do WebSocket e derrubam a conexão.
- **A docstring é a interface de usuário da ferramenta.** O modelo decide quando chamar uma ferramenta e como preencher seus argumentos a partir desse texto. Descreva a intenção, não apenas os tipos.
- **Reinicie após cada alteração.** A lista de ferramentas é informada uma vez, no handshake.

O passo a passo completo da ponte — obtendo um endpoint MCP do SenseCraft, criando uma chave de API, iniciando a ponte e testando com voz — está na página complementar:

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/mcp_external_system_integration/" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}> Guia de configuração do MCP 🖱️</font></span></strong></a>
</div>

## Parte 2 — Escolha seu caminho de verificação

Ambos os caminhos parecem idênticos para suas ferramentas MCP — mesma chamada de verificação, mesmo veredito. Eles diferem em onde a correspondência de rosto acontece e, portanto, em tamanho de lista, robustez e custo de hardware.

Duas configurações controlam isso, e são independentes:

- **`mode`** — *onde* a inferência é executada: `local` (no dispositivo) ou `lan` (em um serviço que você executa).
- **`verify_frequency`** — *com que frequência* a verificação acontece: `always`, ou uma vez por conversa (`session`).

Qualquer combinação é válida.

| | Caminho 1 — No dispositivo | Caminho 2 — Caixa de computação externa |
| :--- | :--- | :--- |
| valor de `mode` | `local` | `lan` |
| Onde a correspondência é executada | Himax WE2 NPU dentro do SenseCAP Watcher | Seu serviço de inferência na LAN |
| Hardware extra | Nenhum | Uma caixa de computação por site |
| Pessoas cadastradas | **20 por dispositivo**, um limite rígido do armazenamento no dispositivo | Sem limite fixo |
| Modelo de rosto | MobileFaceNet, 128-D, INT8 — fixo | Sua escolha |
| Anti-spoofing / detecção de vivacidade | **Não disponível** | Suportado, se o seu serviço o informar |
| Limite de correspondência | Global | Global, com substituição por regra |
| Melhor para | Pilotos e pequenas equipes de um único turno | Produção, listas maiores, múltiplos sites |

:::caution O Caminho 1 não tem detecção de vivacidade, e isso decide a maioria das implantações
O mecanismo de correspondência no dispositivo compara rostos; ele não consegue distinguir um rosto de uma fotografia desse rosto. Qualquer pessoa segurando uma foto impressa de um operador autorizado passa. Isso é aceitável para um piloto ou um ambiente de baixo risco, mas não é um controle antifraude — e dissuadir atribuição deliberada incorreta costuma ser o motivo pelo qual esse recurso recebe financiamento.

Combinado com o teto de 20 pessoas, isso significa que **a maioria das implantações em produção acaba no Caminho 2**. Trate o Caminho 1 como a forma de provar o fluxo de trabalho, não como a versão barata do sistema final.
:::

:::tip Comece local, migre para LAN depois
Ambos os caminhos usam os mesmos registros de cadastro, regras e log de auditoria, e nada nas suas ferramentas MCP muda quando você alterna. A mudança não é gratuita, porém: um modelo diferente significa um `model_tag` diferente, então cada embedding cadastrado precisa ser recalculado. Mantenha a imagem de origem junto com cada embedding e isso se torna uma tarefa em segundo plano em vez de recadastrar todo mundo.
:::

### Caminho 1 — Verificação no dispositivo

O Watcher faz a correspondência de rostos por conta própria. O backend envia uma biblioteca de rostos compacta para o dispositivo pela LAN, o dispositivo a armazena em flash e, no momento da verificação, o backend pergunta ao dispositivo para quem ele está olhando naquele momento.

#### Você ainda precisa de uma fonte de embedding

A correspondência acontece no dispositivo, mas o *cadastro* não. Algo precisa transformar cada foto em um embedding, e isso deve vir do **mesmo modelo que o dispositivo executa** — um embedding de qualquer outro modelo de rosto cai em um espaço vetorial diferente e nunca corresponderá, por melhor que esse modelo seja. Portanto, esse caminho não é “sem inferência do seu lado”; é “inferência apenas no cadastro, e ela deve ser bit-compatível com o firmware”.

A implementação de referência inclui um espelho, no host, do pipeline do dispositivo que é bit-exato em relação ao NPU no dispositivo, publicado sob a tag de modelo `we2-mfnr6-128-v1`. Use-o em processo durante o cadastro ou como um pequeno serviço HTTP — defina `FACE_WE2_SIMULATOR_ENABLED=1` e ele fala o *mesmo* contrato `/infer` que uma caixa de computação externa, o que mantém seu código de cadastro idêntico em ambos os caminhos.

:::caution Dois pontos de atenção na implantação
As rotas do simulador **não têm autenticação** — nunca exponha essa porta além do seu próprio backend. E o runtime INT8 não tem wheel para musl, então o contêiner precisa de uma imagem base com glibc; Alpine falhará ao instalá-lo.
:::

#### O fluxo que você constrói

**1. Cadastre cada operador.** Tire uma ou mais fotos por pessoa, transforme cada uma em um embedding com o modelo compatível com WE2 acima e armazene-o associado a essa pessoa.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-enroll.png" alt="caixa de diálogo de cadastro na implementação de referência: upload de foto e escopo de armazém"/>
</div>

**2. Registre cada dispositivo físico** com seu IP na LAN e, em seguida, envie a biblioteca de rostos para ele. Seu sistema precisa de um lugar para registrar endereços de dispositivos e uma ação de envio por dispositivo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/mcp-devices-push.png" alt="dispositivo físico registrado sob uma conexão de agente, com uma ação de envio de rostos"/>
</div>

**3. Pergunte ao dispositivo no momento da verificação** usando `GET /api/face/current-speaker` — veja [O protocolo de comunicação do dispositivo](#2-o-protocolo-de-comunicação-do-dispositivo).

:::caution O dispositivo deve ser alcançável a partir do seu backend
A verificação pergunta diretamente ao dispositivo. Se o seu backend não conseguir alcançá-lo, o resultado correto é uma negação, não um bypass. Rejeite endereços públicos, de loopback e link-local ao registrar um dispositivo — um gate de rosto que pode ser apontado para um host controlado por um invasor não é um gate.
:::

### Caminho 2 — Caixa de computação externa

O reconhecimento é movido para um serviço HTTP na sua rede. O backend obtém uma imagem — fornecida pelo chamador ou capturada pela câmera do dispositivo —, envia-a para o seu serviço para geração de embedding e realiza a correspondência de cosseno por conta própria em relação à lista cadastrada.

Isso remove o limite de 20 pessoas, permite executar um modelo maior e mais preciso e habilita a detecção de vivacidade.

#### O contrato que seu serviço implementa

Dois endpoints. Ambos aceitam `Authorization: Bearer <token>` quando um token é configurado, e ambos devem responder em **10 segundos**.

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

Comportamentos a serem observados:

- Quando várias faces são retornadas, é usada aquela com o maior `det_score`.
- Retornar `"live": false` bloqueia a operação como uma tentativa de spoofing.
- A dimensão do embedding é de sua escolha, mas deve permanecer constante para um determinado `model_tag`. A correspondência é limitada por tag, portanto mudar seu modelo significa publicar uma nova tag.
- Mantenha a imagem de origem com cada registro. Quando a tag mudar, é isso que permite recalcular toda a lista em segundo plano em vez de reinscrever todo mundo.

#### O Fluxo que Você Constrói

Seu backend obtém uma imagem, a envia para `/infer` e faz a correspondência por cosseno do embedding retornado com sua lista registrada, limitada ao `model_tag` correspondente. Armazene a URL do endpoint e seu token como configuração e dê aos operadores um teste de conexão que chame `/health` e relate a model tag encontrada — veja [A Superfície de Configuração](#3-a-superfície-de-configuração).

:::caution Ajuste o limiar ao seu modelo
O padrão de referência é um limiar de cosseno de `0.45`, escolhido para seu modelo integrado de 128 dimensões. Esse número não tem significado em um espaço de embedding diferente. Meça a distribuição de pontuações do seu próprio modelo em pares genuínos e impostores antes de escolher um limiar e permita uma substituição por regra para que operações de alto valor possam exigir uma correspondência mais rígida.
:::

#### Escolhendo um Computador de Borda

O serviço de inferência é um serviço HTTP simples, portanto qualquer máquina na LAN que possa executar seu modelo serve. Estes são os sistemas prontos para implantar, do mais barato para o mais caro.

|reComputer RK3576-30|reComputer RK3588-30|reComputer AI Industrial R2135-12|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/2/-/2-rk3576.jpg" alt="reComputer RK3576-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/3/5/3588_26_.png" alt="reComputer RK3588-30" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-_r235.jpeg" alt="reComputer AI Industrial R2135-12" width={300} height="auto" />|
|Rockchip RK3576<br/>NPU de 6 TOPS · 8GB LPDDR5<br/>2x GbE — ponto de entrada|Rockchip RK3588<br/>NPU de 6 TOPS · 8GB LPDDR5<br/>2x 2.5GbE, núcleos mais rápidos|Raspberry Pi CM5 + Hailo-8<br/>26 TOPS · 8GB · 32GB eMMC<br/>IP40, -20 a 65 °C, trilho DIN|
|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/reComputer-RK3576-30-p-6815.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/reComputer-RK3588-30-p-6817.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/reComputer-AI-Industrial-R2135-12-p-6432.html)</p>|

Reconhecimento facial é uma carga de trabalho leve, então os computadores de entrada são realmente suficientes para um único site — ambos os modelos Rockchip possuem a mesma NPU de 6 TOPS, e o RK3588 oferece núcleos mais rápidos e 2.5GbE em vez de mais throughput de inferência. Suba para o R2135 para um acelerador Hailo dedicado em um gabinete industrial para trilho DIN.

:::note Atenção aos nomes dos produtos ao fazer o pedido
Nesta família, um nome contendo **AI Industrial** é resfriado ativamente, e a linha **Industrial** simples é sem ventoinha. Eles diferem por uma palavra e são quase idênticos no restante. O computador na tabela acima tem ventoinha; se a implantação precisar de resfriamento passivo, peça o [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html) em vez disso, que envia o mesmo Hailo-8 com um gabinete sem ventoinha.
:::

#### Indo Totalmente On-Premises

Os computadores acima cobrem o reconhecimento facial. Por padrão, a metade de *voz* — reconhecimento de fala, o modelo de linguagem que escolhe a ferramenta, síntese de fala — roda na nuvem. Para clientes cuja resposta a “áudio sai da nossa rede?” precisa ser não, também fornecemos todo esse pipeline para rodar no local, em um computador maior que o hospeda ao lado do modelo de face. A capacidade de memória, não os TOPS, é o que determina o dimensionamento.

|reComputer Robotics J4012|reComputer Mini J5012 with GMSL|NVIDIA Jetson AGX Thor Developer Kit|
|------------------|--------------------------|-----------------------|
|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-114110310-recomputer-robotics_2.jpg" alt="reComputer Robotics J4012" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/0/-/0-100020407-recomputer-mini-j5011-with-gmsl-64g_1.jpg" alt="reComputer Mini J5012 with GMSL" width={300} height="auto" />|<img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image-kit-3.png" alt="NVIDIA Jetson AGX Thor Developer Kit" width={300} height="auto" />|
|Jetson Orin NX 16GB<br/>Até 100 TOPS · 16GB LPDDR5<br/>**Uma conversa por vez**|Jetson AGX Orin 64GB<br/>64GB LPDDR5 · 64GB eMMC<br/>Entrada de 19-48V, 10GbE, GMSL e CAN|Jetson AGX Thor, GPU Blackwell<br/>128GB LPDDR5X a 273GB/s<br/>Maior modelo, maior contexto|
|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/reComputer-Robotics-J4012-p-6505.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/reComputer-Mini-J5012-with-GMSL-Extension-p-6878.html)</p>|<p style={{textAlign: 'center'}}>[Adquira agora!](https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Thor-Developer-Kit-p-9965.html)</p>|

:::caution O J4012 executa a pilha, mas apenas uma sessão por vez
16 GB comportam todo o pipeline, então um único Watcher funciona bem. Ele não atende conversas simultâneas — um segundo operador falando com um segundo dispositivo ao mesmo tempo é o que ele não consegue fazer. Dimensione para o número de dispositivos que estarão em uso simultaneamente, não para o número instalado.
:::

Use o J4012 para um site de estação única, o Mini J5012 quando o computador também precisar funcionar com alimentação de veículo ou planta e se comunicar com barramentos industriais, e o Thor quando você quiser simultaneidade e o maior modelo que uma única máquina pode servir. De qualquer forma, esta é uma oferta combinada de hardware e software — [fale conosco](mailto:solution@seeed.cc) sobre a construção no local em vez de montá-la você mesmo.

## Parte 3 — O que Você Implementa

Cinco componentes ficam do seu lado. A implementação de referência cobre os quatro primeiros, então trate esta seção como um mapa do que ler e reproduzir.

### 1. O Endpoint de Verificação

Seu servidor MCP chama um endpoint antes de cada ferramenta protegida, e seu backend responde a ele. Mantenha o formato abaixo e a camada de ferramenta de referência funcionará com seu sistema sem alterações.

Requisição:

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

Resposta — sempre estas cinco chaves:

```jsonc
{
  "status": "pass" | "deny" | "skipped",
  "failure_reason": "…",           // null when it passed cleanly
  "confidence": 0.87,
  "matched_subject_id": 12,
  "matched_subject_name": "Zhang San"
}
```

`pass` e `skipped` permitem a operação; `deny` a bloqueia.

:::caution Falhe em modo fechado e cuide do orçamento de tempo
Trate todo erro — 404, timeout, corpo malformado — como `deny`, nunca como permissão. E mantenha seu handler bem abaixo do timeout de **18 segundos** do cliente; passado isso, o chamador registra uma falha de transporte e nega de qualquer forma. Reserve tempo para a viagem de ida e volta ao dispositivo dentro disso: aproximadamente 6,5 s para ler o locutor atual, 8 s para capturar um frame, 10 s para alcançar um serviço de inferência na LAN.
:::

Dois valores de `status` que importam para adoção: retorne `skipped` quando o recurso estiver desligado ou nenhuma regra exigir uma face para aquela operação. Isso torna o gate transparente, para que você possa enviar o servidor MCP primeiro e ativar a verificação depois sem tocar no código das ferramentas.

### 2. O Protocolo de Fio do Dispositivo

Esta é a parte que você não pode derivar do seu próprio sistema, porque é falada pelo firmware do dispositivo. Três endpoints, todos sobre HTTP simples na LAN.

**Envie a biblioteca de faces** (apenas Caminho 1) — `POST http://<device-ip>:80/api/face/batch-update`. Observe que a porta é fixa em 80.

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

Os embeddings vão pela rede como `fp16` — 256 bytes para 128 dimensões — enquanto seu banco de dados mantém o `float32` canônico. Um `model_tag` incompatível rejeita todo o lote.

**Ler o locutor atual** — `GET http://<device-ip>/api/face/current-speaker?fresh=0`, cabeçalho `X-Face-Token: <pull_token>`, retorna `{valid, name, subject_id, similarity, mode, age_ms}`. Exija que `valid` seja estritamente true.

**Capturar um frame da câmera** — `GET http://<device-ip>/api/face/capture`, mesmo cabeçalho, retorna `image/jpeg`.

:::caution O endpoint de envio não é autenticado
`batch-update` não tem autenticação no lado do dispositivo. Qualquer pessoa na mesma rede pode sobrescrever a biblioteca de faces. Coloque esses dispositivos em um segmento confiável ou isolado.
:::

### 3. A Superfície de Configuração

Alguém precisa escolher o modo, o limiar e quais operações exigem uma face. Você precisa de telas para isso. As telas da implementação de referência são mostradas aqui **como uma ilustração das decisões que sua própria interface deve expor** — você não está fazendo login na nossa.

Modo de reconhecimento, frequência de verificação, limite de confiança e endpoint remoto:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-config-verify-mode.png" alt="recognition mode, verification frequency, confidence threshold and remote endpoint"/>
</div>

Regras por operação, com escopo por armazém, com uma lista de permissão e uma substituição opcional de limite:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-rules.png" alt="per-operation face rules with warehouse scope, allow-list and threshold override"/>
</div>

Um conjunto de regras que vale a pena copiar:

| Chave da regra | Cobre |
| :--- | :--- |
| `stock_in` | Entrada de estoque |
| `stock_out` | Saída de estoque |
| `move_batch_location` | Realocação de lote |
| `query` | Todas as operações de leitura — consulta de estoque, consulta de lote, busca, estatísticas |

Uma lista de permissão vazia significa que toda pessoa registrada e ativa é aceita. Uma lista não vazia restringe a operação àquelas pessoas, então uma correspondência confiante com qualquer outra ainda é negada.

### 4. A Trilha de Auditoria

Registre cada decisão, não apenas as falhas — as aprovações é que provam que uma operação foi autorizada. Registre a pessoa correspondente, a confiança, o veredito e o motivo.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/mcp-face-auth/face-audit-log.png" alt="face authentication audit log showing matched person, confidence and verdict per operation"/>
</div>

Na sua tabela de transações, mantenha o nome verificado em sua própria coluna:

```sql
-- Snapshot of the operator name resolved by face recognition.
ALTER TABLE <your_inventory_transactions>
  ADD COLUMN actual_operator VARCHAR(255) NULL;
```

Três restrições, e a terceira é o ponto principal:

1. **Deve aceitar nulo.** Quando a verificação está desativada, ou nenhuma regra a exige, o valor é `NULL`.
2. **Armazene o nome, não uma chave estrangeira** — um instantâneo, para que o registro continue legível depois que a pessoa for excluída.
3. **Nunca o mescle com o campo de operador que o modelo preenche.** Esse campo reflete o que o operador *disse* e pode ser falso. Este aqui é o que a câmera *viu*. Mesclá-los colapsa um valor confiável em um não confiável e descarta a única distinção que torna a verificação facial algo que vale a pena construir.

### 5. Dados Biométricos

Como você constrói e hospeda este lado, **você é o controlador de dados**. Quatro decisões a tomar deliberadamente em vez de herdar:

- **Base legal e consentimento** para cada pessoa registrada. Dados biométricos de funcionários no trabalho também podem envolver legislação trabalhista e consulta a conselhos de trabalhadores em algumas jurisdições.
- **Retenção e exclusão.** Excluir uma pessoa deve remover seus embeddings, não apenas desativar uma linha.
- **Se deve manter as fotografias de registro.** Esta página recomenda manter a imagem de origem para que a lista possa ser recomputada quando o modelo mudar. Isso é uma conveniência operacional com um custo de privacidade — é sua decisão, e vale a pena tomá-la explicitamente.
- **Trate embeddings como dados pessoais.** Eles são numéricos, mas identificam uma pessoa e são regulados como tal na maioria das jurisdições.

## Uma Armadilha Que Vale Conhecer

Na implementação de referência, o gate facial e o Provider de dados leem o **mesmo** campo de configuração `api_base_url`.

Aponte `api_base_url` para o seu próprio sistema sem também implementar `/api/face/verify-mcp` lá, e o gate recebe um 404. Como a política é falhar-fechado, **todas as ferramentas param de funcionar, incluindo consultas somente leitura** — uma falha confusa, já que nada no sintoma aponta para reconhecimento facial.

| `api_base_url` aponta para | Resultado do gate | Consequência |
| :--- | :--- | :--- |
| Seu sistema, sem `/face/verify-mcp` | `deny` · `http_404` | Todas as ferramentas bloqueadas |
| Um endereço inacessível | `deny` · `transport_error` | Todas as ferramentas bloqueadas |
| String vazia | `skipped` · `no_api_base` | As ferramentas rodam, mas o Provider também perde sua URL base |
| Um backend que implementa o endpoint | Decidido por suas regras | Correto |

Duas saídas. Implemente o endpoint no seu próprio backend, que é o destino de qualquer forma — retorne primeiro um stub constante `skipped` se você ainda não estiver pronto para verificar:

```python
@app.post("/api/face/verify-mcp")
def verify_mcp():
    return {"status": "skipped", "failure_reason": "feature_disabled",
            "confidence": None, "matched_subject_id": None,
            "matched_subject_name": None}
```

Ou separe os campos, mantendo `api_base_url` para o gate e lendo seu próprio endereço a partir de uma chave personalizada:

```yaml
provider: "my_wms"
api_base_url: "http://your-backend:2124/api"           # serves the face gate
auth:
  type: api_key
  key: "wh_xxx"
wms_base_url: "https://your-wms.example.com/api/v1"    # your business API
wms_token: "your-token"
```

Depois substitua `base_url` no construtor do seu Provider, como na [Parte 1](#opção-a--reutilizar-a-ponte-trocar-a-fonte-de-dados). Os dois conjuntos de credenciais permanecem independentes.

## FAQ

### 1. Um push informa zero rostos enviados

A biblioteca de rostos é filtrada por tag de modelo. Apenas registros que carregam `we2-mfnr6-128-v1` são elegíveis para um push no dispositivo, então registros criados contra um endpoint remoto com uma tag diferente são silenciosamente excluídos — registre novamente ou deixe o recálculo em segundo plano terminar.

### 2. `actual_operator` está sempre vazio em nossos registros

Esperado quando nenhuma regra exige um rosto para essa operação, ou quando a verificação está desligada. Crie uma regra para a operação para começar a registrá-lo.

### 3. Substituímos nossa própria fonte de dados, mas as gravações ainda vão para o banco de dados de referência

A camada de ferramentas de referência volta ao seu Provider padrão em qualquer erro e registra um aviso em vez de falhar de forma ruidosa. Verifique esse aviso no log do MCP — e veja a [Opção A](#opção-a--reutilizar-a-ponte-trocar-a-fonte-de-dados) sobre como mudar esse comportamento antes de enviar.

### 4. A verificação é lenta ou negada de forma intermitente

Três timeouts limitam a cadeia: 18 segundos do cliente MCP para o backend, 10 segundos do backend para um serviço de inferência remoto e aproximadamente 6,5 a 8 segundos do backend para o dispositivo. Esses são tetos, não latências típicas — meça as suas, porque é uma pessoa em pé em um terminal esperando. Se o seu serviço de inferência se aproximar de 10 segundos, reduza o tamanho do modelo ou a resolução da imagem.

### 5. Podemos verificar uma vez por conversa em vez de por operação?

Sim. Defina a frequência de verificação como `session` e a primeira verificação bem-sucedida é armazenada em cache para essa conversa, até um teto de 10 minutos.

Entenda o que você está trocando: por esses 10 minutos, cada operação na conversa é atribuída à pessoa correspondida uma vez no início. Qualquer pessoa que continuar essa conversa herda a identidade. Use `session` quando o ganho for evitar prompts repetidos durante uma longa execução de separação de pedidos, e `always` sempre que uma operação individual precisar ser comprovada de forma independente.

## Recursos

- [warehouse_system no GitHub](https://github.com/suharvest/warehouse_system) — a implementação de referência. Comece com `mcp/README.md` para a camada de integração, `mcp/providers/base.py` para o contrato do adaptador e o orquestrador facial do backend para a lógica de verificação
- [Bring Voice AI to Your Business System (MCP)](/pt-br/mcp_external_system_integration) — a configuração da ponte MCP sobre a qual esta página se baseia
- [Face Recognition with MCP](/pt-br/face_regonition_with_mcp) — o passo a passo no nível do dispositivo: gravação do firmware, implantação de um serviço de reconhecimento acelerado por Hailo e gerenciamento do banco de dados de rostos
- [MCP Endpoint Setup Guide](/pt-br/mcp_endpoint) — criação e gerenciamento de endpoints MCP
- [Model Context Protocol](https://github.com/modelcontextprotocol) — especificação do protocolo

## Suporte Técnico

<div class="button_tech_support_container">
<a href="https://discord.com/invite/kpY74apCWj" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:solution@seeed.cc" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
