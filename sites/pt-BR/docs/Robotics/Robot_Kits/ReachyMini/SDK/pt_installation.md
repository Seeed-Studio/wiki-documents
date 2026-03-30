---
description: Guia abrangente de instalação do Reachy Mini Python SDK e daemon em Linux, macOS e Windows, cobrindo pré‑requisitos, configuração de ambiente virtual e solução de problemas.
title: Guia de Instalação
slug: /reachymini_sdk_installation
keywords:
  - instalação
  - configuração
  - python
  - ambiente virtual
  - uv
  - git
  - pré-requisitos
  - multiplataforma
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_sdk_installation/
---

# 📦 Guia de Instalação

:::note Bem-vindo ao Reachy Mini!
Este guia ajudará você a instalar o Python SDK e o daemon para começar a controlar seu robô.
:::

<div align="center">

| 🐧 **Linux** | 🍎 **macOS** | 🪟 **Windows** |
|:---:|:---:|:---:|
| ✅ Suportado | ✅ Suportado | ✅ Suportado |

</div>

**Precisa de ajuda?** Sinta-se à vontade para abrir uma [issue](https://github.com/pollen-robotics/reachy_mini/issues) se encontrar qualquer problema.

## Primeira vez usando a linha de comando? 🖥️

:::note Novo na linha de comando?
Uma **linha de comando** (também chamada de terminal ou prompt de comando) é uma interface baseada em texto onde você pode digitar comandos para interagir com o computador. Não se preocupe — é mais simples do que parece!

**Como abrir a linha de comando:**
* **Windows:** Pressione `Win + R`, digite `cmd` ou `powershell` e pressione Enter
* **macOS:** Pressione `Cmd + Space`, digite `Terminal` e pressione Enter
* **Linux:** Pressione `Ctrl + Alt + T` ou procure por "Terminal" em seus aplicativos

**Dicas básicas:**
* Digite os comandos exatamente como mostrados nas instruções
* Pressione `Enter` após digitar cada comando para executá-lo
* Você pode copiar e colar comandos (clique com o botão direito para colar na maioria das interfaces de linha de comando)
:::

:::tip
_Não se intimide!_ A linha de comando é apenas outra forma de dar instruções ao seu computador. Siga os comandos passo a passo e você estará controlando seu Reachy Mini em pouco tempo!
:::

## 1. 📋 Pré-requisitos

<div align="center">

| Ferramenta | Versão | Finalidade |
|------|---------|---------|
| 🐍 **Python** | 3.10 - 3.12 | Executar Reachy Mini SDK |
| 📂 **Git** | Mais recente | Baixar código-fonte e aplicativos |
| 📦 **Git LFS** | Mais recente | Baixar recursos de modelos |

</div>

### 🐍 Instalar Python

Usaremos o `uv` — um gerenciador de pacotes Python rápido que torna a instalação simples!

#### Etapa 1: Instalar uv

:::tip Linux / macOS
No seu terminal, execute:
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
:::

:::tip Windows
No seu terminal, execute:
```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```
:::

:::success Verificar instalação
Quando a instalação estiver concluída, feche seu terminal e abra um novo. Você pode verificar se tudo correu bem com:
```bash
uv --version
```
:::

#### Etapa 2: Instalar Python

No seu terminal, execute:
```bash
uv python install 3.12 --default
```

:::tip
Recomendamos o Python 3.12, pois é a versão mais recente suportada para o Reachy Mini.
:::

### 📂 Instalar Git e Git LFS

:::info Linux
#### Instalar Git e Git LFS

No seu terminal, execute:
```bash
sudo apt install git git-lfs
```
:::

:::info macOS
#### 1. Instalar Homebrew (se ainda não estiver instalado)

No seu terminal, execute:
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Para Apple Silicon (M1, M2, etc.), você também será solicitado a executar:

```zsh
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```

:::success Verificar Homebrew
Quando a instalação estiver concluída, você pode verificar se deu tudo certo com:
```zsh
brew --version
```
:::

#### 2. Instalar Git e Git LFS

No seu terminal, execute:
```zsh
brew install git git-lfs
```
:::

:::info Windows
#### Baixar e instalar Git para Windows

Baixe e instale o Git para Windows:
https://git-scm.com/install/windows
:::

:::success Finalizar instalação
Por fim, o Git LFS precisa ser inicializado com o comando:
```bash
git lfs install
```
:::

## 2. 🏠 Configurar um Ambiente Virtual

:::tip Por que usar um ambiente virtual?
Ele mantém sua instalação do Reachy Mini isolada e evita conflitos com outros projetos Python. O desenvolvimento moderno em Python exige isso!
:::

### Criar o ambiente

No seu terminal, execute:
```bash
uv venv reachy_mini_env --python 3.12
```

### Ativar o ambiente

:::info Linux / macOS
No seu terminal, execute:
```bash
source reachy_mini_env/bin/activate
```
:::

:::warning Windows - Configuração da primeira vez
Antes de poder ativar seu ambiente virtual, o Windows precisa de permissão para executar scripts. Você só precisa fazer isso uma vez!

**Etapa 1:** Abra o terminal como Administrador
- Pressione `Win + R`, digite `powershell`
- Clique com o botão direito em "Windows PowerShell" e selecione "Executar como administrador"

**Etapa 2:** Habilitar execução de scripts

No terminal de administrador, execute:
```powershell
powershell Set-ExecutionPolicy RemoteSigned
```

**Etapa 3:** Feche o terminal de administrador e abra um terminal comum

Agora você pode ativar seu ambiente virtual executando:
```powershell
reachy_mini_env\Scripts\activate
```
:::

:::success Indicador de sucesso
Você deve ver `(reachy_mini_env)` no início do seu prompt de linha de comando!
:::

## 3. 🚀 Instalar Reachy Mini

Escolha seu método de instalação:

<div align="center">

| 📦 **Instalação via PyPI** | 🔧 **Instalação a partir do código-fonte** |
|:---:|:---:|
| **Para todos** | **Para desenvolvedores** |
| Pronto para uso | Modificar o código |

</div>

### 📦 Opção A: Instalar a partir do PyPI

:::tip Recomendado para a maioria dos usuários
Só quer controlar seu robô? Esta opção é para você!
:::

No seu terminal, execute:
```bash
uv pip install "reachy-mini"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Se você quiser usar o modo de simulação, precisa adicionar o extra `mujoco`:
```bash
uv pip install "reachy-mini[mujoco]"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

:::note
A pós-instalação do gstreamer se deve a um [problema](https://github.com/pypi/support/issues/8847#issuecomment-3899714506) com o PyPi e deverá ser resolvida no futuro.
:::

### 🔧 Opção B: Instalar a partir do código-fonte

:::info Para desenvolvedores
Quer modificar o SDK ou contribuir? Escolha esta opção!
:::

No seu terminal, execute:
```bash
git clone https://github.com/pollen-robotics/reachy_mini
cd reachy_mini
uv pip install -e .
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Se você quiser usar o modo de simulação, precisa adicionar o extra `mujoco`:
```bash
uv pip install -e ".[mujoco]"
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

### 🐧 Usuários Linux

:::info Linux + conexão USB?
Você precisa conceder acesso à porta serial do Reachy Mini.

Execute estes comandos no seu terminal:
```bash
echo 'SUBSYSTEM=="usb", ATTRS{idVendor}=="1a86", ATTRS{idProduct}=="55d3", MODE="0666", GROUP="dialout"
SUBSYSTEM=="usb", ATTRS{idVendor}=="38fb", ATTRS{idProduct}=="1001", MODE="0666", GROUP="dialout"' \
| sudo tee /etc/udev/rules.d/99-reachy-mini.rules

sudo udevadm control --reload-rules && sudo udevadm trigger
sudo usermod -aG dialout $USER
```
:::

:::warning
Saia da sessão e entre novamente para que as alterações tenham efeito!
:::

:::tip PortAudio
Certifique-se de que o portaudio esteja instalado no seu sistema para habilitar recursos de áudio com o backend padrão.

Execute este comando no seu terminal:
```bash
sudo apt-get install libportaudio2
```
:::

#### Gstreamer

O gerenciamento de mídia é realizado pela biblioteca GStreamer. Usuários de Windows e MacOSX podem usar pip para instalá-la:
```bash
uv pip install --upgrade --index-url https://gitlab.freedesktop.org/api/v4/projects/1340/packages/pypi/simple gstreamer==1.28.0
```

Usuários Linux têm etapas extras a seguir:

<div align="center">

[![GStreamer Installation Guide](https://img.shields.io/badge/📖-GStreamer%20Installation%20Guide-blue?style=for-the-badge)](/reachymini_sdk_gstreamer-installation)

</div>

## 🎉 Parabéns!

Você instalou o Reachy Mini com sucesso! Seu robô está pronto para ganhar vida.

## ❓ Solução de Problemas

Encontrou algum problema? 👉 **[Confira o Guia de Solução de Problemas & FAQ](/pt-br/reachymini_troubleshooting)**

## Próximos Passos

* **[Guia de Início Rápido](/pt-br/reachymini_sdk_quickstart)**: Execute seu primeiro comportamento no Reachy Mini
* **[Python SDK](/pt-br/reachymini_sdk_python-sdk)**: Aprenda a mover, ver, falar e ouvir.
* **[Integrações de IA](/pt-br/reachymini_sdk_integration)**: Conecte LLMs, construa Apps e publique na Hugging Face.
* **[Conceitos Centrais](/pt-br/reachymini_sdk_core-concept)**: Arquitetura, sistemas de coordenadas e limites de segurança.
