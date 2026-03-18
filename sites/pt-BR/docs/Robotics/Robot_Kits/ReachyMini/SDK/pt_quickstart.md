---
description: Guia de início rápido para colocar o Reachy Mini em funcionamento em hardware real ou em simulação, cobrindo pré-requisitos, configuração do daemon e seu primeiro script.
title: Guia de Início Rápido
slug: /reachymini_sdk_quickstart
keywords:
  - quickstart
  - getting started
  - first script
  - daemon
  - prerequisites
  - tutorial
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_quickstart/
---

# Guia de Início Rápido

Siga este guia para colocar seu Reachy Mini em funcionamento, seja em hardware real ou em simulação.

## 1. Pré-requisitos

:::danger Importante
Certifique-se de ter instalado o Reachy Mini no seu computador seguindo nosso [guia de instalação](/pt-br/reachymini_sdk_installation).
:::

:::tip Ambiente Virtual
Certifique-se de que você criou e ativou seu ambiente virtual Python. **Lembre-se de ativá-lo toda vez que abrir um novo terminal!**
:::

:::info Executar o SDK diretamente no Reachy Mini sem fio (Opcional)

Se você quiser executar o SDK diretamente no seu Reachy Mini sem fio em vez de remotamente no seu computador, você pode conectar-se a ele via SSH.

**Passo 1: Conexão SSH**

Abra um terminal e execute:
```bash
ssh pollen@reachy-mini
```

Quando solicitado, use estas **credenciais padrão**:
* Nome de usuário: `pollen`
* Senha: `root`

**Passo 2: Ative o ambiente virtual Python**

Após a conexão, ative o ambiente virtual:
```bash
source /venvs/apps_venv/bin/activate
```

**Passo 3: Execute scripts localmente**

Ao executar scripts no próprio Reachy Mini, use o construtor padrão `ReachyMini()`. O modo automático manterá a conexão em localhost, a menos que você a substitua explicitamente:
```python
from reachy_mini import ReachyMini

with ReachyMini() as mini:
    # Your code here
```

**Benefícios de executar localmente:** menor latência, nenhuma dependência de rede e acesso direto a todos os recursos do robô.

**Desvantagens:** menor poder de CPU e nenhuma GUI disponível.
:::

## 2. Certifique-se de que o Robot Server está em execução (Daemon)

:::info
O **Daemon** é um serviço em segundo plano que lida com a comunicação de baixo nível com motores e sensores. Ele precisa estar em execução para que seu código funcione.
:::

* **No Reachy Mini (Sem fio):** O daemon está em execução quando o robô está ligado. Certifique-se de que seu computador e o Reachy Mini estejam na mesma rede.

:::tip Reachy Mini Lite (USB)
Você tem duas opções:
<!-- * Start the [desktop application](../platforms/reachy_mini_lite/get_started) -->
* Abra um terminal e execute:
  ```bash
  reachy-mini-daemon
  ```
:::

:::tip Simulação (Nenhum robô necessário)
Você tem duas opções:
<!-- * Start the [desktop application](../platforms/reachy_mini_lite/get_started) -->
* Abra um terminal e execute:

**Linux & Windows:**
```bash
reachy-mini-daemon --sim
```

**macOS:**
```bash
mjpython -m reachy_mini.daemon.app.main --sim
```
:::

:::warning Usuários de macOS
`uv` pode ter problemas de compatibilidade com o MuJoCo no macOS. Se você encontrar problemas de instalação ou de execução, recomenda-se usar `pip` diretamente em vez de `uv` para pacotes relacionados ao MuJoCo.
:::

:::success Verificação
Abra [http://localhost:8000](http://localhost:8000) no seu navegador. Se você vir o Reachy Dashboard, está tudo pronto!
:::

## 3. Seu Primeiro Script

:::warning Importante
Mantenha o terminal do daemon aberto e em execução! O daemon deve permanecer ativo para que seu robô funcione.
:::

### Crie seu script Python

:::tip Passo 1
Abra uma nova janela de terminal
:::

:::tip Passo 2
Crie um novo arquivo chamado `hello.py` e copie e cole o código a seguir nele:
:::

:::info
O construtor agora detecta automaticamente Lite vs Sem fio e alterna automaticamente entre localhost e rede. Só o substitua em casos avançados, por exemplo `ReachyMini(connection_mode="network")`.
:::

```python
from reachy_mini import ReachyMini

# Connect to the running daemon
with ReachyMini() as mini:
    print("Connected to Reachy Mini!")

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.5, -0.5], duration=0.5)
    mini.goto_target(antennas=[-0.5, 0.5], duration=0.5)
    mini.goto_target(antennas=[0, 0], duration=0.5)

    print("Done!")
```

:::tip Passo 3
Salve o arquivo e execute seu script:
:::

No seu novo terminal, execute:
```bash
python hello.py
```

🎉 Se tudo correu bem, seu robô agora deve balançar suas antenas!

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Consulte o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**

## Usando um Agente de Programação com IA?

:::info
Se você estiver usando um agente de IA como **Claude Code**, **Codex** ou **Copilot**, pode começar a criar aplicativos imediatamente. Basta colar este prompt:
:::

> *I'd like to create a Reachy Mini app. Start by reading https://github.com/pollen-robotics/reachy_mini/blob/develop/AGENTS.md*

Esse guia fornece ao seu agente de IA tudo o que ele precisa saber sobre o SDK, boas práticas e ferramentas disponíveis.

## Próximos Passos

* **[SDK Python](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Navegue pela Pasta de Exemplos](https://github.com/pollen-robotics/reachy_mini/tree/main/examples)**
* **[Integrações com IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique na Hugging Face.
* **[Conceitos Centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.
