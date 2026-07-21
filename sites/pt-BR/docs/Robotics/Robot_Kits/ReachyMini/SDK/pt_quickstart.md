---
description: Guia de início rápido para o Reachy Mini cobrindo pré-requisitos, configuração do daemon e seu primeiro script de robô.
title: Guia de Início Rápido
slug: /reachymini_sdk_quickstart
keywords:
  - início rápido
  - primeiro script
  - daemon
  - configuração
  - hello world
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_quickstart/
---

# Guia de Início Rápido

Siga este guia para colocar seu Reachy Mini em funcionamento, seja em hardware real ou em simulação.

## 1. Pré-requisitos

Certifique-se de ter instalado o Reachy Mini no seu computador seguindo nosso [guia de instalação](/pt-br/reachymini_sdk_installation).

:::tip
Certifique-se de ter criado e ativado seu ambiente virtual Python. **Lembre-se de ativá-lo sempre que abrir um novo terminal!**
:::

<details>
<summary><strong>🔧 Executar o SDK diretamente no Reachy Mini sem fio (Opcional)</strong></summary>

Se você quiser executar o SDK diretamente no seu Reachy Mini sem fio em vez de remotamente no seu computador, você pode se conectar a ele via SSH.

### Etapa 1: Conexão SSH

Abra um terminal e execute:

```bash
ssh pollen@reachy-mini
```

Quando solicitado, use estas **credenciais padrão**:
- Nome de usuário: `pollen`
- Senha: `root`

### Etapa 2: Ative o ambiente virtual Python

Após conectar, ative o ambiente virtual:

```bash
source /venvs/apps_venv/bin/activate
```

### Etapa 3: Execute scripts localmente

Ao executar scripts no próprio Reachy Mini, use o construtor padrão `ReachyMini()`. O modo automático manterá a conexão em localhost, a menos que você a substitua explicitamente:

```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

:::tip
Vantagens de executar localmente
Menor latência, nenhuma dependência de rede e acesso direto a todos os recursos do robô.
:::
:::warning
Desvantagens
Menor poder de CPU e nenhuma interface gráfica disponível.
:::

</details>

## 2. Certifique-se de que o Servidor do Robô está em execução (Daemon)

O **Daemon** é um serviço em segundo plano que lida com a comunicação de baixo nível com motores e sensores. Ele deve estar em execução para que seu código funcione.

* **No Reachy Mini (sem fio)**: O daemon é executado quando o robô está ligado. Certifique-se de que seu computador e o Reachy Mini estejam na mesma rede.
* **No Reachy Mini Lite (USB)** - Você tem duas opções:
  - Iniciar o [aplicativo desktop](/pt-br/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control)
  - Abrir um terminal e executar:
    ```bash
    reachy-mini-daemon
    ```
* **Para Simulação (Nenhum robô necessário)** - Você tem duas opções:
  - Iniciar o [aplicativo desktop](/pt-br/reachymini_platforms_reachy_mini_lite_get_started#3--download-reachy-mini-control)
  - Abrir um terminal e executar:
    - **Linux & Windows:**
      ```bash
      reachy-mini-daemon --sim
      ```
    - **macOS:**
      ```bash
      mjpython -m reachy_mini.daemon.app.main --sim
      ```
      > **⚠️ Usuários de macOS:** `uv` pode ter problemas de compatibilidade com o MuJoCo no macOS. Se você encontrar problemas de instalação ou de execução, é recomendado usar `pip` diretamente em vez de `uv` para pacotes relacionados ao MuJoCo.
      >
      > Se você receber uma falha de segmentação de `libgstpython`, consulte a seção de [solução de problemas da simulação](/pt-br/reachymini_platforms_simulation_get_started#-solução-de-problemas).

:::success
Abra [http://localhost:8000/docs](http://localhost:8000/docs) no seu navegador. Se você vir a documentação da API Reachy SDK, está tudo pronto!
:::

## 3. Seu Primeiro Script

:::warning
Mantenha o terminal do daemon aberto e em execução! O daemon deve permanecer ativo para que seu robô funcione.
:::

### Crie seu script Python

**Etapa 1:** Abra uma nova janela de terminal

**Etapa 2:** Crie um novo arquivo chamado `hello.py` e copie e cole o seguinte código nele:

:::tip
O construtor agora detecta automaticamente Lite vs sem fio e alterna entre localhost e rede automaticamente. Substitua-o apenas para casos avançados, por exemplo `ReachyMini(connection_mode="network")`.
:::

```python
from reachy_mini import ReachyMini

# Connect to the running daemon
with ReachyMini() as mini:
    print("Connected to Reachy Mini! ")

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("Done!")
```

**Etapa 3:** Salve o arquivo e execute seu script:

No seu novo terminal, execute:

```bash
python hello.py
```

🎉 Se tudo correu bem, seu robô agora deve balançar suas antenas!

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**


## Usando um Agente de Programação com IA?

Se você estiver usando um agente de IA como **Claude Code**, **Codex** ou **Copilot**, pode começar a criar aplicativos imediatamente. Basta colar este prompt:

> *Eu gostaria de criar um app para o Reachy Mini. Comece lendo https://github.com/pollen-robotics/reachy_mini/blob/main/AGENTS.md*

Este guia fornece ao seu agente de IA tudo o que ele precisa saber sobre o SDK, boas práticas e ferramentas disponíveis.

## Próximos Passos
* **[SDK Python](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Navegue pela Pasta de Exemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integrações com IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique na Hugging Face.
* **[Conceitos Centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.