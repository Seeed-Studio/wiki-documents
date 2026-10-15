---
description: Guia para desenvolvedores instalarem o daemon do Reachy Mini a partir de um branch específico do GitHub para testar novos recursos e correções de bugs.
title: Instalar o Daemon a partir de um Branch Específico
slug: /reachymini_platforms_reachy_mini_install_daemon_from_branch
keywords:
  - daemon
  - branch
  - instalar
  - testes
  - desenvolvimento
  - ssh
  - git
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip: [zh-CN]
createdAt: '2026-02-27'
updatedAt: '2026-05-19'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch/
---

# Instalar o Daemon a partir de um Branch Específico

:::warning
_⚠️ Apenas para Desenvolvedores e Testadores_

Este guia explica como instalar o daemon do Reachy Mini a partir de um branch específico do GitHub antes de ele ser oficialmente lançado. Use isto para testar novos recursos ou correções de bugs.
:::

## Pré-requisitos

- Acesso SSH ao seu robô Reachy Mini (`pollen@reachy-mini.local`, senha: `root`)
- O robô deve estar conectado à sua rede Wi-Fi (ou acessível por meio do seu hotspot)

## Opção A: Ambiente de Desenvolvimento Local

:::info
Esta opção é destinada a desenvolvimento ativo e ciclos rápidos de depuração. Ela permite testar alterações com segurança sem afetar a instalação em todo o sistema.

⚠️ Evite instalar apps com esta opção, pois quaisquer alterações feitas na versão local de `reachy_mini` não serão propagadas corretamente.
:::

### Passos:

1. **Conecte-se ao robô via SSH:**
   ```bash
   ssh pollen@reachy-mini.local
   # Password: root
   ```

2. **Clone o repositório Reachy Mini com o branch específico:**
   ```bash
   git clone -b <branch-name> https://github.com/pollen-robotics/reachy_mini.git
   cd reachy_mini
   ```

3. **Configure o ambiente virtual:**
   ```bash
   uv venv --python /venvs/mini_daemon/bin/python .venv
   source .venv/bin/activate
   uv sync --extra gstreamer --extra wireless-version
   ```

4. **Pare o serviço de daemon do sistema:**
   ```bash
   sudo systemctl stop reachy-mini-daemon
   ```

:::tip
Esta etapa deve ser repetida após cada reinicialização, pois o serviço do sistema é reiniciado automaticamente.
:::

5. **Inicie o daemon local para testes:**
   ```bash
   reachy-mini-daemon --wireless-version
   ```

Agora você pode modificar o código em `~/reachy_mini` e testar suas alterações sem afetar a instalação do sistema.

## Opção B: Instalação Personalizada em Todo o Sistema

:::info
Esta opção instala uma build de branch do reachy-mini como daemon em todo o sistema. Ela é mais adequada para testes completos de ponta a ponta e oferece suporte à instalação transparente de apps a partir do Reachy Mini Control.
:::

### Passos:

1. **Conecte-se ao robô via SSH:**
   ```bash
   ssh pollen@reachy-mini.local
   # Password: root
   ```

2. **Ative o ambiente virtual do daemon:**
   ```bash
   source /venvs/mini_daemon/bin/activate
   ```

3. **Instale o branch específico:**
   ```bash
   pip install --no-cache-dir --force-reinstall \
     "reachy_mini[gstreamer,wireless-version] @ git+https://github.com/pollen-robotics/reachy_mini.git@<branch-name>"
   ```
   Substitua `<branch-name>` pelo branch que você deseja testar (por exemplo, `develop`, `feature/my-feature`, `bugfix/issue-123`).

Precisamos usar `pip` aqui e não `uv` porque `uv pip install` [não funciona corretamente com `git lfs`](https://github.com/astral-sh/uv/issues/3312).

4. **(Apenas para versões ≤ 1.2.13)** Repita os passos 2 e 3 usando `/venvs/apps_venv`.

5. **Reinicie o serviço do daemon:**
   ```bash
   sudo systemctl restart reachy-mini-daemon
   ```

6. **Verifique se a instalação foi bem-sucedida:**
   ```bash
   pip show reachy-mini | grep Version
   ```
   Isso deve exibir a versão correspondente ao branch que você instalou.

## Reverter para a Versão de Fábrica

Se você encontrar problemas com a instalação do branch, pode restaurar o daemon de fábrica:

1. **Dispare o comando SOFTWARE_RESET** via Bluetooth para reinstalar o daemon original de fábrica
2. **Consulte o [Guia de Redefinição](/pt-br/reachymini_platforms_reachy_mini_reset)** para instruções detalhadas passo a passo

## Notas Importantes

- **Faça backup do seu trabalho** antes de alternar entre diferentes instalações de branch
- **Teste exaustivamente** no modo de desenvolvimento local antes de fazer instalações em todo o sistema
- **Monitore os logs do sistema** após a instalação: `journalctl -u reachy-mini-daemon -f`
- **Impacto no desempenho:** Alguns branches de desenvolvimento podem ter desempenho ou estabilidade reduzidos