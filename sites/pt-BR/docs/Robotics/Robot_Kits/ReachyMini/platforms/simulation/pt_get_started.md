---
description: Guia de configuração para a simulação do Reachy Mini usando MuJoCo, fornecendo um ambiente de física realista para prototipar e testar aplicações sem hardware físico.
title: Configuração da Simulação do Reachy Mini
slug: /reachymini_platforms_simulation_get_started
keywords:
  - simulação
  - mujoco
  - física
  - protótipo
  - teste
  - depuração
  - robô virtual
last_update:
  date: 05/15/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-05-15'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_simulation_get_started/
---

# Simulação do Reachy Mini - Guia de Configuração

Você não precisa de um robô físico para começar a construir! A simulação do Reachy Mini roda em [MuJoCo](https://mujoco.org) e fornece um ambiente de física realista para prototipar, testar e depurar suas aplicações.

![Simulation](https://camo.githubusercontent.com/ce846352192340e1de0c054dec19d4ca185f45a26d76c3f848e50f3707e8b19c/68747470733a2f2f7777772e706f6c6c656e2d726f626f746963732e636f6d2f77702d636f6e74656e742f75706c6f6164732f323032352f30362f5265616368795f6d696e695f73696d756c6174696f6e2e676966)

## 1. Instalação

> **📋 Pré-requisitos:** Antes de configurar a simulação, você deve primeiro concluir a instalação básica e a configuração do ambiente virtual seguindo o **[Guia de Instalação](/pt-br/reachymini_sdk_installation)**. Este guia assume que você já tem o Reachy Mini SDK instalado e seu ambiente virtual ativado.

A simulação requer os bindings Python do `mujoco`. Você pode instalá-los junto com o software do Reachy Mini usando a tag extra `[mujoco]`.

Com `pip`, execute:
```bash
pip install "reachy-mini[mujoco]"
```
Com `uv`, execute:
```bash
uv pip install "reachy-mini[mujoco]"
```

## 2. Executando a Simulação

Para iniciar o robô simulado, simplesmente execute o comando do daemon com a flag `--sim`:

```bash
reachy-mini-daemon --sim
```

Uma janela deve abrir exibindo a visualização 3D do robô. Você pode interagir com a visualização usando o mouse (arraste para girar, clique com o botão direito para mover, role para dar zoom).

### 🍎 Usuários de Mac (Apple Silicon / Intel)
No macOS, o MuJoCo requer um lançador específico para funcionar corretamente com a interface gráfica. Em vez do comando acima, use `mjpython`:

```bash
mjpython -m reachy_mini.daemon.app.main --sim
```

> **⚠️ Usuários de macOS:** `uv` pode ter problemas de compatibilidade com o MuJoCo no macOS. Se você encontrar problemas de instalação ou execução, é recomendado usar `pip` diretamente em vez de `uv` para pacotes relacionados ao MuJoCo.

## 3. Reachy Mini Control e Apps

Você pode usar o **Reachy Mini Control** para interagir com o robô simulado. Basta abrir o app e conectar à simulação local.

![Control App with local daemon](https://github.com/pollen-robotics/reachy_mini/raw/main/docs/assets/control-app-external-daemon.png)

* **Apps:** Você pode instalar e executar Apps! Eles serão executados dentro da simulação (por exemplo, o robô se moverá no visualizador 3D).

## 4. Cenas e Opções

Você pode personalizar o ambiente de simulação usando o argumento `--scene`.

* **`empty`** (padrão): Apenas o robô no vazio.
* **`minimal`**: Adiciona uma mesa e alguns objetos (maçã, croissant, pato) para brincar.

**Exemplo:**
```bash
reachy-mini-daemon --sim --scene minimal
```

## 5. Conectando seu Código

Quando a simulação estiver em execução, ela se comporta exatamente como um **Reachy Mini Lite** real conectado via USB. O daemon escuta em `localhost`, e você pode executar qualquer script Python do SDK sem modificação:

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
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[AI Integrations](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, construa Apps e publique na Hugging Face.
* **[Core Concepts](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.

## ❓ Solução de Problemas

<details>
<summary><strong>Falha de segmentação de <code>libgstpython.dylib</code> ao usar <code>mjpython</code> (macOS)</strong></summary>

Você pode ver um erro como:

```
ERROR: Caught a segmentation fault while loading plugin file:
.../gstreamer_python/lib/gstreamer-1.0/libgstpython.dylib
```

Este erro de falha de segmentação do plugin GStreamer é um problema conhecido, que também acontece com o robô real, mas ocorre em um processo paralelo e não causa nenhum problema visível. Com `mjpython`, porém, ele derruba o processo principal. A correção é renomear o plugin para que o GStreamer não o carregue mais:

```bash
# Find the file inside your environment (adjust the path to match yours)
mv $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython.dylib')") \
   $(python -c "import gstreamer_python, pathlib; print(pathlib.Path(gstreamer_python.__file__).parent / 'lib/gstreamer-1.0/libgstpython_.dylib')")
```

Isso simplesmente impede que o GStreamer carregue o plugin automaticamente. Isso não afeta a funcionalidade normal de áudio/vídeo.

</details>

Encontrou outro problema? 👉 **[Confira o Guia de Solução de Problemas e FAQ](/pt-br/reachymini_troubleshooting)**