---
description: Guia para desenvolvedores instalarem o daemon Reachy Mini a partir de um branch específico do GitHub para testar novos recursos e correções de bugs.
title: Instalar o Daemon a partir de um Branch Específico
slug: /reachymini_platforms_reachy_mini_install_daemon_from_branch
keywords:
  - daemon
  - branch
  - install
  - testing
  - development
  - ssh
  - git
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch/
---

# Instalar o Daemon a partir de um Branch Específico

:::warning Apenas para Desenvolvedores e Testadores
Este guia explica como instalar o daemon Reachy Mini a partir de um branch específico do GitHub antes de ele ser oficialmente lançado. Use isto para testar novos recursos ou correções de bugs.
:::

:::tip
A partir da v1.3.0, você pode instalar um branch diretamente em _Settings → Reachy Mini Update_ no painel web.
:::

## Pré-requisitos

* Acesso SSH ao seu robô Reachy Mini (`pollen@reachy-mini.local`, senha: `root`)
* O robô deve estar conectado à sua rede Wi-Fi (ou acessível por meio do seu hotspot)

## Opção A: Ambiente de Desenvolvimento Local

:::info
Esta opção é destinada a desenvolvimento ativo e ciclos rápidos de depuração. Ela permite que você teste alterações com segurança sem afetar a instalação em todo o sistema.

Evite instalar apps do painel com esta opção — quaisquer alterações feitas na versão local `reachy_mini` não serão propagadas corretamente.
:::

### Etapas:

**Etapa 1:** Conecte-se ao robô via SSH:
```bash
ssh pollen@reachy-mini.local
# Password: root
```

**Etapa 2:** Clone o repositório Reachy Mini com o branch específico:
```bash
git clone -b <branch-name> https://github.com/pollen-robotics/reachy_mini.git
cd reachy_mini
```

**Etapa 3:** Configure o ambiente virtual:
```bash
uv venv --python /venvs/mini_daemon/bin/python .venv
source .venv/bin/activate
uv sync --extra gstreamer --extra wireless-version
```

**Etapa 4:** Pare o serviço do daemon do sistema:
```bash
sudo systemctl stop reachy-mini-daemon
```

:::tip
Esta etapa deve ser repetida após cada reinicialização, pois o serviço do sistema é reiniciado automaticamente.
:::

**Etapa 5:** Inicie o daemon local para testes:
```bash
reachy-mini-daemon --wireless-version
```

Agora você pode modificar o código em `~/reachy_mini` e testar suas alterações sem afetar a instalação do sistema.

## Opção B: Instalação Personalizada em Todo o Sistema

:::info
Esta opção instala uma build de branch do reachy-mini como o daemon em todo o sistema. Ela é mais adequada para testes completos de ponta a ponta e oferece suporte à instalação transparente de apps a partir do painel.
:::

### Etapas:

**Etapa 1:** Conecte-se ao robô via SSH:
```bash
ssh pollen@reachy-mini.local
# Password: root
```

**Etapa 2:** Ative o ambiente virtual do daemon:
```bash
source /venvs/mini_daemon/bin/activate
```

**Etapa 3:** Instale o branch específico:
```bash
pip install --no-cache-dir --force-reinstall \
  "reachy_mini[gstreamer,wireless-version] @ git+https://github.com/pollen-robotics/reachy_mini.git@<branch-name>"
```
Substitua `<branch-name>` pelo branch que você deseja testar (por exemplo, `develop`, `feature/my-feature`, `bugfix/issue-123`).

:::note
Precisamos usar `pip` aqui e não `uv` porque `uv pip install` [não funciona corretamente com `git lfs`](https://github.com/astral-sh/uv/issues/3312).
:::

**Etapa 4:** (Apenas para versões ≤ 1.2.13) Repita as etapas 2 e 3 usando `/venvs/apps_venv`.

**Etapa 5:** Reinicie o serviço do daemon:
```bash
sudo systemctl restart reachy-mini-daemon
```

**Etapa 6:** Verifique se a instalação foi bem-sucedida:
```bash
pip show reachy-mini | grep Version
```
Isto deve exibir a versão correspondente ao branch que você instalou.

## Revertendo para a Versão de Fábrica

Se você encontrar problemas com a instalação do branch, pode restaurar o daemon de fábrica:

:::info Reversão
**Etapa 1:** Acione o comando SOFTWARE_RESET** via Bluetooth para reinstalar o daemon original de fábrica

**Etapa 2:** Consulte o [Guia de Reset](/pt-br/reachymini_platforms_reachy_mini_reset) para instruções detalhadas passo a passo
:::

## Notas Importantes

:::warning
* **Faça backup do seu trabalho** antes de alternar entre diferentes instalações de branch
* **Teste minuciosamente** no modo de desenvolvimento local antes de fazer instalações em todo o sistema
* **Monitore os logs do sistema** após a instalação: `journalctl -u reachy-mini-daemon -f`
* **Impacto na performance:** Alguns branches de desenvolvimento podem ter performance ou estabilidade reduzidas
:::
