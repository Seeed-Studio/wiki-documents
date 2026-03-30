---
description: Guia de desenvolvimento abrangente para agentes de IA ajudarem usuários a criar aplicativos Reachy Mini, cobrindo o essencial do SDK, REST API, compatibilidade de plataforma e boas práticas.
title: Guia de Desenvolvimento do Reachy Mini para Agentes de IA
slug: /reachymini_agents
keywords:
  - ai agents
  - development guide
  - sdk
  - rest api
  - platform compatibility
  - app development
  - best practices
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reachymini_agents/
---

# Guia de Desenvolvimento do Reachy Mini para Agentes de IA

Este guia ajuda agentes de IA a auxiliar usuários no desenvolvimento de aplicativos para o Reachy Mini.

---

## Comportamento do Agente

### PRIMEIRO: Verificar agents.local.md

**Antes de fazer qualquer outra coisa**, procure por `agents.local.md` no diretório atual:

```
IF agents.local.md exists:
    Read it immediately
    It contains user configuration and session context
ELSE:
    → Run skills/setup-environment.md to set up the environment
```

Este arquivo armazena o tipo de robô do usuário, preferências e status de configuração. Sempre verifique-o primeiro.

### Seja um Professor

A menos que o usuário peça explicitamente o contrário:
- Explique os conceitos à medida que avança
- Incentive perguntas ("Avise se quiser mais detalhes sobre qualquer parte disso")
- Guie usuários não técnicos em cada etapa
- Não suponha conhecimento prévio

### Sempre Crie Apps em Python

Ao criar apps:
- **Sempre use Python** - apps em Python podem ser descobertos e compartilhados via a loja de apps do robô
- **NUNCA crie pastas de app manualmente** - use sempre o assistente de app (ele lida com metadados, pontos de entrada, estrutura)
- **Se o comando falhar** - peça ao usuário para executá-lo no terminal; não tente soluções alternativas complexas
- **Interfaces web vão em `static/`** - apps em Python podem ter frontends web

```bash
# Default template (minimal app - good for most cases):
reachy-mini-app-assistant create <app_name> <path> --publish

# Conversation template (for LLM integration, speech, making robot talk):
reachy-mini-app-assistant create --template conversation <app_name> <path> --publish
```

Veja `skills/create-app.md` para detalhes. Apps somente em JS ainda não são suportados para descoberta/compartilhamento.

### Sempre Criar plan.md Antes de Programar

Antes de implementar qualquer app:
1. Crie `plan.md` no diretório do app
2. Escreva seu entendimento sobre o que o usuário deseja
3. Liste sua abordagem técnica
4. Faça perguntas de esclarecimento e forneça campos de resposta dentro de `plan.md`
5. Aguarde as respostas antes de programar

### Mantenha Notas em agents.local.md

Use `agents.local.md` para armazenar:
- Tipo de robô do usuário (Lite/Wireless)
- Preferências de ambiente
- Contexto útil para sessões futuras
- Mantenha conciso

---

## Noções Básicas do Robô

**Reachy Mini** é um pequeno robô expressivo:

| Componente | Descrição |
|-----------|-------------|
| **Cabeça** | 6 DOF: x, y, z, roll, pitch, yaw (via plataforma Stewart) |
| **Corpo** | Rotação em torno do eixo vertical |
| **Antenas** | 2 motores, também utilizáveis como botões físicos |

**Variantes de hardware:**
- **Lite**: conexão USB ao laptop (potência de computação total)
- **Wireless**: CM4 embarcado, conecta via WiFi (computação limitada)

---

## Essenciais do SDK

### Conexão

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

### Dois Métodos de Movimento

| Método | Use quando |
|--------|----------|
| `goto_target()` | **Padrão** - interpolação suave para gestos que duram pelo menos 0,5s cada |
| `set_target()` | Laços de controle em tempo real (por exemplo, rastreamento) a 10Hz+ |

### Exemplo Básico

Veja e execute `examples/minimal_demo.py` - demonstra conexão, movimento da cabeça e controle das antenas.

### Antes de Escrever Código

- Leia `docs/source/SDK/python-sdk.md` para uma visão geral da API
- Passe os olhos em `src/reachy_mini/reachy_mini.py` para ver assinaturas de métodos e docstrings
- Verifique `examples/` para padrões de código executáveis

---

## REST API

O daemon expõe uma API HTTP/WebSocket em `http://{daemon-ip}:8000/api`.

- **Lite**: `localhost:8000` (o daemon roda na sua máquina)
- **Wireless**: `reachy-mini.local:8000` ou o endereço IP do robô

**Use a REST API para:** interfaces web, clientes não Python, controle remoto, integração de IA/LLM via HTTP. => Nota: para que o app possa ser descoberto, ele deve ser um app em Python por enquanto; isso mudará em uma versão futura.

**Documentação interativa:** `http://{daemon-ip}:8000/docs` (quando o daemon estiver em execução)

Veja `skills/rest-api.md` para detalhes.

---

## Compatibilidade de Plataforma

| Configuração | Computação | Câmera | Observações |
|-------|---------|--------|-------|
| **Lite** | Total (laptop) | USB direto | Mais flexível, melhor para desenvolvimento |
| **Wireless (local)** | Limitada (CM4) | Direta | Memória/CPU limitadas |
| **Wireless (streamed)** | Total (laptop) | Via rede | Alguma perda de qualidade de rastreamento |
| **Simulação** | Total | N/A | Não é possível testar recursos de câmera |

---

## Limites de Segurança

| Junta | Alcance |
|-------|-------|
| Pitch/roll da cabeça | [-40, +40] graus |
| Yaw da cabeça | [-180, +180] graus |
| Yaw do corpo | [-160, +160] graus |
| Delta de yaw (cabeça - corpo) | Diferença máxima de 65° |

Colisões suaves com o corpo são seguras. O SDK limita os valores automaticamente.

Para sistemas de coordenadas e detalhes de arquitetura, veja `docs/source/SDK/core-concept.md`.

---

## Apps de Exemplo

| App | Padrões principais | Código-fonte |
|-----|--------------|--------|
| **reachy_mini_conversation_app** | Integração de IA, laços de controle, ferramentas de LLM | [GitHub](https://github.com/pollen-robotics/reachy_mini_conversation_app) |
| **marionette** | Gravação de movimento, torque seguro, dataset no HF | [HF Space](https://huggingface.co/spaces/RemiFabre/marionette) |
| **fire_nation_attacked** | Cabeça como controle, placares, jogos | [HF Space](https://huggingface.co/spaces/RemiFabre/fire_nation_attacked) |
| **spaceship_game** | Cabeça como joystick, botões das antenas | [HF Space](https://huggingface.co/spaces/apirrone/spaceship_game) |
| **reachy_mini_radio** | Padrão de interação com antena | [HF Space](https://huggingface.co/spaces/pollen-robotics/reachy_mini_radio) |
| **reachy_mini_simon** | Padrão sem GUI (antena para iniciar) | [HF Space](https://huggingface.co/spaces/apirrone/reachy_mini_simon) |
| **hand_tracker_v2** | Laço de controle baseado em câmera | [HF Space](https://huggingface.co/spaces/pollen-robotics/hand_tracker_v2) |
| **reachy_mini_dances_library** | Definição simbólica de movimento | [GitHub](https://github.com/pollen-robotics/reachy_mini_dances_library) |

---

## Documentação

A documentação completa do SDK está em `docs/source/`:

| Tópico | Arquivo |
|-------|------|
| Início rápido | `docs/source/SDK/quickstart.md` |
| Python SDK | `docs/source/SDK/python-sdk.md` |
| Conceitos centrais | `docs/source/SDK/core-concept.md` |
| Integração de IA | `docs/source/SDK/integration.md` |
| Solução de problemas | `docs/source/troubleshooting.md` |

Para guias específicos de plataforma (Lite, Wireless, Simulação), veja `docs/source/platforms/`.

---

## Referência de Skills

Leia estes arquivos em `skills/` quando precisar de conhecimento detalhado:

| Skill | Quando usar |
|-------|-------------|
| **setup-environment.md** | Primeira sessão, quando não existe `agents.local.md` |
| **create-app.md** | Criação de um novo app com `reachy-mini-app-assistant` |
| **control-loops.md** | Construção de apps reativos em tempo real (rastreamento, jogos) |
| **motion-philosophy.md** | Escolha entre `goto_target` e `set_target` |
| **safe-torque.md** | Ativar/desativar motores sem movimento brusco |
| **ai-integration.md** | Construção de apps com LLM |
| **symbolic-motion.md** | Definição de movimento matematicamente (danças, ritmos) |
| **interaction-patterns.md** | Uso das antenas como botões, cabeça como controle |
| **debugging.md** | Quedas de app, problemas de conectividade, verificações básicas |
| **testing-apps.md** | Testes antes da entrega (sim vs físico) |
| **rest-api.md** | HTTP/WebSocket API para clientes não Python |
| **deep-dive-docs.md** | Quando ler a documentação completa do SDK |

---

## Referência Rápida

**Nomes dos motores:** `body_rotation`, `stewart_1-6`, `right_antenna`, `left_antenna`

**Métodos de interpolação:** `linear`, `minjerk` (padrão), `ease_in_out`, `cartoon`

**Biblioteca de emoções:**
```python
from reachy_mini.motion.recorded_move import RecordedMoves
moves = RecordedMoves("pollen-robotics/reachy-mini-emotions-library")
mini.play_move(moves.get("happy"), initial_goto_duration=1.0)
```

---

## Comunidade

- **Guia de apps**: https://huggingface.co/blog/pollen-robotics/make-and-publish-your-reachy-mini-apps
- **Código-fonte**: https://github.com/pollen-robotics/reachy_mini
- **Apps da comunidade**: https://huggingface.co/spaces?q=reachy_mini
- **Discord**: https://discord.gg/Y7FgMqHsub
