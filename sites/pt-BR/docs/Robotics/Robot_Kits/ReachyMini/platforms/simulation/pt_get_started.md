---
description: Guia de configuração da simulação do Reachy Mini usando MuJoCo, oferecendo um ambiente de física realista para prototipar e testar aplicações sem hardware físico.
title: Configuração da Simulação do Reachy Mini
slug: /reachymini_platforms_simulation_get_started
keywords:
  - simulation
  - mujoco
  - physics
  - prototype
  - test
  - debug
  - virtual robot
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_simulation_get_started/
---

# Simulação do Reachy Mini - Guia de Configuração

Você não precisa de um robô físico para começar a construir! A simulação do Reachy Mini roda em [MuJoCo](https://mujoco.org) e fornece um ambiente de física realista para prototipar, testar e depurar suas aplicações.

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164646c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. Instalação

:::danger Pré-requisitos
Antes de configurar a simulação, você deve primeiro concluir a instalação básica e a configuração do ambiente virtual seguindo o **[Guia de Instalação](/pt-br/reachymini_sdk_installation)**. Este guia assume que você já tem o Reachy Mini SDK instalado e o seu ambiente virtual ativado.
:::

A simulação exige os bindings Python do `mujoco`. Você pode instalá-los junto com o software do Reachy Mini usando a tag extra `[mujoco]`.

:::tip Com pip
```bash
pip install "reachy-mini[mujoco]"
```
:::

:::tip Com uv
```bash
uv pip install "reachy-mini[mujoco]"
```
:::

## 2. Executando a Simulação

Para iniciar o robô simulado, basta executar o comando do daemon com a flag `--sim`:

:::tip Iniciar simulação
```bash
reachy-mini-daemon --sim
```
:::

Uma janela deve abrir exibindo a visualização 3D do robô. Você pode interagir com a visualização usando o mouse (arraste para girar, clique direito para mover, rolagem para aproximar/afastar o zoom).

### 🍎 Usuários Mac (Apple Silicon / Intel)

:::tip Específico para macOS
No macOS, o MuJoCo requer um launcher específico para funcionar corretamente com a interface gráfica. Em vez do comando acima, use `mjpython`:
:::

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

:::warning Usuários macOS
`uv` pode ter problemas de compatibilidade com o MuJoCo no macOS. Se você encontrar problemas de instalação ou de execução, é recomendado usar `pip` diretamente em vez de `uv` para pacotes relacionados ao MuJoCo.
:::

## 3. Dashboard e Apps

:::info
Você pode acessar o Dashboard em **[http://localhost:8000](http://localhost:8000)**.
:::

* **Apps:** Você pode instalar e executar Apps! Eles serão executados dentro da simulação (por exemplo, o robô se moverá no visualizador 3D).

## 4. Cenas e Opções

:::info Personalização
Você pode personalizar o ambiente de simulação usando o argumento `--scene`.
:::

* **`empty`** (padrão): Apenas o robô no vazio.
* **`minimal`**: Adiciona uma mesa e alguns objetos (maçã, croissant, pato) para brincar.

:::tip Exemplo
```bash
reachy-mini-daemon --sim --scene minimal
```
:::

## 5. Conectando o seu Código

Depois que a simulação estiver em execução, ela se comporta exatamente como um **Reachy Mini Lite** real conectado via USB. O daemon escuta em `localhost`, e você pode executar qualquer script Python do SDK sem modificações:

```python
from reachy_mini import ReachyMini
from reachy_mini.utils import create_head_pose

# Connects to the simulation running on localhost
with ReachyMini() as mini:
    print("Connected to simulation!")

    # Look up and tilt head
    print("Moving head...")
    mini.goto_target(
        head=create_head_pose(z=20, roll=10, mm=True, degrees=True),
        duration=1.0
    )

    # Wiggle antennas
    print("Wiggling antennas...")
    mini.goto_target(antennas=[0.6, -0.6], duration=0.3)
    mini.goto_target(antennas=[-0.6, 0.6], duration=0.3)

    # Reset to rest position
    mini.goto_target(
        head=create_head_pose(),
        antennas=[0, 0],
        duration=1.0
    )
```

## Próximos Passos

:::info Continue aprendendo
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[AI Integrations](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, crie Apps e publique na Hugging Face.
* **[Core Concepts](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.
:::

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**
