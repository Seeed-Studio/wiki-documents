---
description: Executando um sistema de gerenciamento de armazém por voz em hardware de borda — quais dispositivos você precisa, como a ponte MCP conecta fala ao estoque, como implantar cada um dos cinco níveis e resultados de teste de carga medidos em um dispositivo da série reComputer R2000
title: 'Gerenciamento de Armazém por Voz em Hardware de Borda: Construção, Implantação e Resultados Medidos'
keywords:
  - sistema de gerenciamento de armazém controlado por voz
  - WMS de borda
  - inventário de armazém MCP
  - gerenciamento de inventário mãos livres
  - assistente de voz offline
  - SenseCAP Watcher
  - reComputer
  - Jetson
  - EdgeLLM
  - Qwen3
  - Model Context Protocol
  - integração ERP WMS
image: https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/og-v1.jpg
slug: /solutions/voice-warehouse-management
sidebar_position: 3
last_update:
  date: 09/07/2026
  author: seeed-solutions-hub
createdAt: '2026-09-07'
updatedAt: '2026-09-07'
url: https://wiki.seeedstudio.com/pt-br/solutions/voice-warehouse-management/
generated_from: sensecraft-solutions@smart_warehouse
---

:::caution[Usage notice]
Este é um auxílio ao operador, não um livro de registro de inventário certificado. A REST API não possui fila offline: solicitações enviadas durante uma falha de rede ou serviço são rejeitadas e não são reproduzidas após a recuperação.
:::

## O que esta solução faz

Um operador na doca de recebimento diz "dar entrada em 10 caixas de maçãs". O SenseCAP Watcher no rack ouve, e um registro de entrada de estoque é gravado no banco de dados do armazém em um gateway reComputer no mesmo prédio. Pergunte "quantas maçãs restam" e a resposta é falada de volta. Sem digitação, sem menus, as mãos permanecem nos produtos.

Feito para locais onde as transações acontecem longe de um teclado: docas de recebimento, corredores de racks, cabines de empilhadeiras e pequenos armazéns que nunca adotaram um WMS porque o treinamento custava mais do que economizava.

- Implementação de código aberto: [github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system)
- Escolhendo uma configuração e implantando: [página de design de referência](https://www.seeed.cc/solutions/reference-designs/smart_warehouse)

A fala e o banco de dados são conectados por meio do **MCP (Model Context Protocol)**. O sistema de armazém publica cada operação de inventário como uma ferramenta MCP, e o agente de voz no Watcher se conecta a esse endpoint como um cliente MCP. Adicionar uma ação de voz significa adicionar uma ferramenta, sem retreinamento do modelo de fala; integrar um ERP/WMS existente significa mapear sua interface de dados para o mesmo conjunto de ferramentas.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/Solution/landpage_asset/smart-warehouse-management/hero-banner-v4.png" alt="Um operador registra uma transação de armazém falando com um SenseCAP Watcher montado no rack"/>
</div>

<div class="info-section">
    <ul class="info-list">
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <div class="info-content">
                <h3>Watcher funciona assim que é montado</h3>
                <p>O SenseCAP Watcher carrega o firmware do agente de voz e de reconhecimento facial. Grave o firmware, monte-o na estação e os operadores podem registrar estoque por voz com a identidade verificada.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>
            </div>
            <div class="info-content">
                <h3>Os dados permanecem no local</h3>
                <p>O banco de dados do armazém é executado em um gateway reComputer no local. O Nível 3 também mantém o reconhecimento, o LLM e a síntese nas instalações e não chama nenhum serviço externo após a implantação.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" /></svg>
            </div>
            <div class="info-content">
                <h3>Código aberto, conecta ao seu ERP/WMS</h3>
                <p>O sistema de armazém é de código aberto. Conectar um sistema existente significa mapear sua interface de dados para as mesmas ferramentas MCP, na ordem de algumas dezenas de linhas de código de mapeamento.</p>
            </div>
        </li>
        <li class="info-item">
            <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>
            </div>
            <div class="info-content">
                <h3>Novos comandos sem retreinamento</h3>
                <p>Adicionar uma ação de voz significa registrar uma ferramenta MCP. O firmware do Watcher permanece inalterado.</p>
            </div>
        </li>
    </ul>
</div>

### O que o dashboard mostra

Após uma fala, o resultado aparece no dashboard do gateway. A página de inventário lista a quantidade atual e o último movimento de cada item:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/dashboard-657fc403.png" alt="Dashboard do armazém: estoque atual por item, último movimento e status"/>
</div>

A página de transações lista cada entrada e saída de estoque com número de lote, operador e origem (voz ou REST):

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/records-944f9e33.png" alt="Histórico de transações: número de lote, quantidade, operador e origem por registro"/>
</div>

A lista de operadores é mantida na página de usuários, e a verificação facial confere com ela:

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/reference-design/smart_warehouse/users-8e30f2d0.png" alt="Página de usuários: a lista de operadores e permissões que a verificação facial utiliza como referência"/>
</div>

## De que hardware você precisa

Três funções de dispositivo. Quais você compra depende de onde os dados e a IA de voz podem ser executados.

**① Terminal de voz: SenseCAP Watcher.** Necessário em todos os níveis, um por estação de trabalho. Ele possui dois processadores: o ESP32 executa o agente de voz Xiaozhi (palavra de ativação, gravação, streaming, cliente MCP), e o Himax WE2 executa o firmware de reconhecimento facial para verificação do operador.

**② Gateway de borda.** Executa o sistema de armazém e, nos níveis auto-hospedados, também o endpoint MCP. Ele determina se o reconhecimento facial pode ser movido para o gateway e quantas estações um host pode atender.

**③ Host de IA local.** Necessário apenas quando o reconhecimento, o LLM e a síntese precisam permanecer todos nas instalações.

| | Modelo | Função neste design | Quando escolhê-lo |
|---|---|---|---|
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991275-sensecap-watcher-w1-b_1.jpg" alt="SenseCAP Watcher" width="110" /> | [SenseCAP Watcher](https://www.seeedstudio.com/SenseCAP-Watcher-W1-B-p-5980.html) | Terminal de voz, cliente MCP, reconhecimento facial no dispositivo | Sempre, um por estação |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-113991334.jpg" alt="reComputer R1125-10" width="110" /> | [reComputer R1125-10](https://www.seeedstudio.com/reComputer-R1125-10-p-6256.html) | Gateway de borda executando o sistema de armazém | Dados de inventário permanecem no local, até 20 operadores, reconhecimento facial no Watcher |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/i/m/image_6.jpg" alt="reComputer Industrial R2135-12" width="110" /> | [reComputer Industrial R2135-12](https://www.seeedstudio.com/reComputer-Industrial-R2135-12-p-6547.html) | Gateway de borda com um acelerador Hailo-8 | Mais de 20 operadores, ou quando é necessária detecção de vivacidade |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-110110145-recomputer_j4012.jpg" alt="reComputer J4012" width="110" /> | [reComputer J4012](https://www.seeedstudio.com/reComputer-J4012-p-5586.html) | Um único equipamento executando o sistema de armazém, reconhecimento facial e um serviço de voz auto-hospedado | 2–3 estações compartilham um host |
| <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/961a49e1875f8c1f40e5990d74e68365/1/-/1-100032662--recomputer-robotics-j5012-with-gmsl_1__1.jpg" alt="reComputer Robotics J5011" width="110" /> | [reComputer Robotics J5011](https://www.seeedstudio.com/reComputer-Robotics-J5011-with-GMSL-extension-board-p-6681.html) | LLM e voz locais, sem chamadas a serviços externos | A instalação precisa permanecer offline |

O Watcher armazena no máximo **20** modelos faciais no dispositivo. Acima de 20 operadores, o reconhecimento precisa ser movido para o gateway: até 20, escolha o R1125; acima de 20, escolha o R2135 com Hailo-8.

Outros pré-requisitos: o Watcher **conecta-se apenas a Wi-Fi de 2,4 GHz** (um SSID somente 5 GHz não aparece na varredura de provisionamento), e o gateway deve estar na mesma LAN. A pré-verificação de implantação do Nível 3 verifica o runtime de contêiner NVIDIA e cerca de **10 GB** de espaço livre em disco (modelos de fala mais arquivos do mecanismo LLM).

### Limites de Seleção Negativa

- **Necessidades de LLM totalmente offline**: Se estiver operando em um armazém classificado ou isolado em air gap que exija interação com LLM offline, evite níveis dependentes de nuvem; selecione o Nível 3 com reComputer J4012 (Orin NX 16GB).
- **Fila em caso de falha de rede**: A REST API do armazém atualmente não possui uma fila offline no servidor; os clientes devem armazenar transações localmente em buffer se operarem sobre conexão sem fio intermitente.

## Como implantar no local

Três etapas: montar e gravar o Watcher, iniciar os containers no gateway, conectar o caminho de voz.

### Etapa 1: montar o Watcher

:::tip[Monte-o na estação de trabalho]
Monte o Watcher na doca de recebimento, no corredor de racks ou na cabine da empilhadeira, onde os operadores realmente registram a entrada e saída de estoque. Se for montado no escritório, obriga os operadores a lembrar as quantidades e caminhar até lá para inseri-las.
:::

A gravação é feita via USB-C; o dispositivo é enumerado como uma ponte WCH USB-UART (`0x1a86:0x55d2`). Duas imagens de firmware, uma por processador: o agente de voz Xiaozhi vai no ESP32, o firmware de reconhecimento facial no Himax WE2.

### Etapa 2: iniciar o gateway

O sistema de armazém é um serviço Docker. As etapas de implantação variam por nível; escolha uma configuração na página de design de referência e baixe o pacote de aplicativo correspondente.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeed.cc/solutions/reference-designs/smart_warehouse" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}>Escolha uma configuração e faça o download 🖱️</font></span></strong>
    </a>
</div><br />

A implantação pode ser executada via SSH para o gateway ou diretamente no gateway. O estoque existente pode ser importado na primeira inicialização com o modelo Excel fornecido.

Após a implantação, o dashboard fica em `http://GATEWAY_IP:2125`, e o health check do container é `GET /health` na mesma porta.

### Etapa 3: conectar o caminho de voz

Trial, Tier 1 e Tier 2A usam uma URL de endpoint MCP emitida pela SenseCraft. Os níveis 2B e 3 fazem o self-host do endpoint MCP na porta `18004` e do servidor de voz na `18000` (console de administração em `18003`). O nível 3 adiciona EdgeLLM em `8000` e OpenVoiceStream em `8621`, e não chama nenhum serviço externo após a implantação.

## Interfaces disponíveis

Duas superfícies de integração:

**Endpoint MCP (porta `18004`): para o lado de voz.** Tudo o que o agente pode fazer é uma ferramenta neste endpoint. Estender o conjunto de comandos significa registrar outra ferramenta; o firmware do Watcher permanece inalterado. Integrar um ERP/WMS existente significa implementar a interface de dados do seu sistema contra as mesmas ferramentas, na ordem de algumas dezenas de linhas de código de mapeamento. Variações na formulação são associadas de forma aproximada ao comando registrado mais próximo em vez de serem rejeitadas.

**REST API (porta `2125`): para outros sistemas.** Lista de inventário, histórico de transações e status do agente estão disponíveis via HTTP.

| Interface | Endpoint / porta | Payload |
|---|---|---|
| Dashboard + REST API | `http://GATEWAY_IP:2125` | Lista de inventário, histórico de transações, status de conexão do agente |
| Health check | `http://GATEWAY_IP:2125/health` | `200` assim que o serviço de armazém estiver pronto |
| Endpoint MCP | `18004` | Operações de inventário publicadas como ferramentas MCP |
| Banco de dados de inventário | SQLite em `/data/warehouse.db` no volume `warehouse_data` | Montar ou exportar para um job externo de BI/ERP |
| Servidor de voz | WebSocket `18000`, console de administração `18003` | Fluxo de áudio do Watcher (níveis 2B e 3) |
| IA on-premise | `8000` EdgeLLM (compatível com OpenAI), `8621` OpenVoiceStream | Chat completions; reconhecimento, síntese e voiceprint (nível 3) |

O acesso é limitado por função de chave de API e por tenant. Uma chave VIEW em um endpoint de escrita retorna `403`; leituras e escritas entre tenants retornam `403`. Ambos foram medidos; consulte "Performance e dados medidos".

## Performance e dados medidos

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/suharvest/warehouse_system" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}>warehouse_system</font></span></strong>
    </a>
</div><br />

### Tempos de execução e parâmetros principais

| Implantação | LLM | TTS / ASR | Rede |
|---|---|---|---|
| Nuvem SenseCraft | Hospedado pela Seeed | Hospedado pela Seeed | Requer Internet |
| Sua própria API | Qualquer endpoint compatível com OpenAI (por exemplo, DeepSeek) | OpenAI · Azure Speech · Volcano Engine · Alibaba Cloud · Edge TTS | Requer Internet |
| Jetson local | EdgeLLM: Qwen3.5-4B, profile `qwen35-4b-gdn-mtp`, mecanismo 8k | OpenVoiceStream (reconhecimento + síntese + voiceprint) | Apenas LAN |

As imagens locais são construídas para JetPack 6.2 / TensorRT 10.3.

- `BUSINESS_RATE_LIMIT`: limite de taxa para endpoints de saída de estoque e outros endpoints de negócio, padrão 600 requisições/minuto, contado por identidade autenticada (chave de API / sessão) e por IP de origem apenas quando nenhuma identidade estiver disponível. Os limites anti-enumeração em registro, recuperação de senha e verificação de dispositivo contam por IP.
- Número de lote `batch_no`: formato `YYYYMMDD-NNN`, alocado de forma atômica, portanto gravações de entrada de estoque concorrentes são serializadas.

### Medições da Warehouse REST API

Dispositivo: reComputer série R2000 (arm64) executando o container do sistema de armazém. Condições: 60 s por nível, 1 armazém, 50 materiais semeados, backend SQLite; as requisições trafegam por um link WAN Tailscale.

| Operação | Nível | Resultado |
|---|---|---|
| `GET /api/materials/list` | concorrência 10 | p95 404 ms, p99 2,7 s, 0% de erros |
| `GET /api/materials/list` | concorrência 20 | p95 824 ms, p99 5,3 s, 0% de erros |
| `GET /api/materials/list` | concorrência 50 | p95 5,5 s, p99 8,7 s, 0% de erros |
| `POST /api/materials/stock-in` | concorrência 5 / 10 / 20 | 0% de erros em todos os três níveis; 1481 lotes criados, 0 números de lote duplicados; p95 634 ms – 4,96 s |
| `POST /api/materials/stock-out` | concorrência 10 / 20 / 50, duas chaves de API compartilhando um IP de saída | 0 HTTP 429 dentro do padrão de 600 requisições/minuto; cerca de 5–6 requisições/s por identidade |
| Interrupção de serviço | cerca de 10 req/s de tráfego de consulta, 34 s de interrupção a partir de um restart de container | 100% das requisições falham durante a interrupção, sem enfileiramento ou repetição; recuperação completa em cerca de 1 s, sem backlog, sem dados corrompidos |
| Isolamento por função e tenant | 4 sondagens pontuais | 4/4 conforme esperado: chave VIEW escrita `403`, leitura `200`; escrita entre tenants `403`, leitura `403` |

Reproduzir: `runs/2026-09-05-load/`, `evaluation/runs/2026-09-06-a2-retest/results.md`

### Vazão do LLM local

| Dispositivo | Modelo | Vazão | Condições |
|---|---|---|---|
| reComputer Robotics J5011 | EdgeLLM Qwen3.5-4B | cerca de 16 tokens/s | Número de referência upstream, sem log de execução anexado |

### Degradações conhecidas

- **A latência de consulta de inventário se degrada a partir de concorrência 20.** O p95 sobe de 404 ms em concorrência 10 para 824 ms em 20 e 5,5 s em 50, o que é lento demais para uso interativo.
- **A REST API não possui fila offline.** Requisições enviadas durante uma interrupção de rede ou serviço falham e não são repetidas; reconexão e backoff cobrem apenas o canal WebSocket de voz MCP. Mitigações: manter a rede do gateway disponível (priorizar cabeado, energia com UPS, serviço e clientes na mesma LAN) para que a janela de indisponibilidade se reduza ao tempo de reinicialização do dispositivo; ou adicionar uma fila de escrita no lado do cliente que reproduza em ordem após reconectar e faça deduplicação por número de lote (a fila no lado do cliente não está implementada).

### Próximos passos

- Executar os testes de carga da REST do sistema de armazém no gateway reComputer R1125-10.

## Fontes de dados e assets

- Números de teste de carga, condições de teste e limites conhecidos: upstream `sensecraft-solutions@smart_warehouse` `description.md`, "Measured Boundaries" e "Known Limitations".
- Vazão do LLM local (cerca de 16 tokens/s, reComputer Robotics J5011): a seção "Preset: Tier 3 · Premium" do `guide.md` upstream.
- Funções de dispositivo, composição de níveis e requisitos de acelerador: `intro.device_catalog` e `intro.presets` em `solution.yaml` upstream.
- Código-fonte do sistema de armazém: [github.com/suharvest/warehouse_system](https://github.com/suharvest/warehouse_system).
- Imagens de produto: catálogo de produtos Seeed Studio (media-cdn.seeedstudio.com).
- Imagens de cena: assets de soluções Seeed Studio (files.seeedstudio.com).
