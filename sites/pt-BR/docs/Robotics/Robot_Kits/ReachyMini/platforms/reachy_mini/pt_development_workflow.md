---
description: Guia de fluxo de trabalho de desenvolvimento para o Reachy Mini sem fio, cobrindo acesso SSH, opções multiplataforma, edição remota e métodos eficientes de teste de código.
title: Fluxo de Trabalho de Desenvolvimento para Reachy Mini Sem Fio
slug: /reachymini_platforms_reachy_mini_development_workflow
keywords:
  - development
  - workflow
  - wireless
  - ssh
  - sshfs
  - remote editing
  - vs code
  - rsync
  - cross-platform
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_platforms_reachy_mini_development_workflow/
---

# Fluxo de Trabalho de Desenvolvimento para Reachy Mini Sem Fio

Este guia aborda fluxos de trabalho eficientes para desenvolver e testar código no Reachy Mini Sem Fio.

## Pré-requisitos

- Acesso SSH ao seu robô (`ssh pollen@reachy-mini.local`, senha: `root`)
- SSHFS instalado no seu computador (`sudo apt install sshfs` no Ubuntu/Debian)
- Endereço IP do seu robô (encontre-o no dashboard, no roteador ou execute `ifconfig` após o SSH)

## Opções Multiplataforma Rápidas

Antes de entrar nos fluxos de trabalho completos, aqui estão duas abordagens multiplataforma mais simples:

### VS Code Remote SSH

A [extensão Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) do VS Code permite editar arquivos diretamente no robô. Conecte-se a `pollen@reachy-mini.local` e abra qualquer pasta. As alterações são salvas diretamente no robô. Isso funciona no Windows, macOS e Linux.

### Rsync

Use `rsync` para sincronizar seu código-fonte local com o site-packages do robô. Isso é rápido e funciona (quase) em qualquer lugar:

```bash
rsync -avz /path/to/your_app/src/your_app/ \
    pollen@reachy-mini.local:/venvs/apps_venv/lib/python3.12/site-packages/your_app/
```

Execute isso após cada edição para enviar as alterações. Adicione `--delete` para remover arquivos que não existam mais localmente.

Para ambas as opções, veja [Etapa 3 da Abordagem A](#Etapa-3-Instalar-e-executar-seu-código-no-robô) para executar seu código no robô.

---

## Abordagem A: Clonar no Robô, Editar Localmente (Recomendado)

Este é o fluxo de trabalho preferido. Seu código fica no robô, mas você o edita a partir do seu computador usando seu IDE favorito ou ferramentas de codificação com IA.

### Etapa 1: Clonar seu repositório no robô

```bash
ssh pollen@reachy-mini.local
cd /home/pollen
git clone https://github.com/YOUR_USER/YOUR_APP.git
```

### Etapa 2: Montar os arquivos do robô na sua máquina local

No seu computador local, crie um ponto de montagem e monte:

```bash
mkdir -p ~/wireless_dev
sshfs pollen@reachy-mini.local:/home/pollen/YOUR_APP ~/wireless_dev \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

Agora você pode abrir `~/wireless_dev` no seu IDE e editar como se os arquivos fossem locais.

### Etapa 3: Instalar e executar seu código no robô

Acesse o robô via SSH e instale/execute seu app:

```bash
ssh pollen@reachy-mini.local
cd /home/pollen/YOUR_APP

# Install in editable mode (changes apply immediately):
/venvs/apps_venv/bin/pip install -e .

# Then run your app:
/venvs/apps_venv/bin/python -m YOUR_MODULE.main

# Or run directly without installing:
/venvs/apps_venv/bin/python your_script.py
```

### Etapa 4: Desmontar quando terminar

```bash
fusermount -u ~/wireless_dev
```

## Abordagem B: Sobrescrever Códigos-Fonte do App Instalado

Se você já instalou um app via dashboard e quer modificar seu código-fonte diretamente montando seus arquivos locais no robô.

### Etapa 1: Localizar o app instalado no robô

Os apps são instalados em:
```
/venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME/
```

### Etapa 2: Montar seu código-fonte local sobre o local instalado

Execute isto **no robô** para montar o código-fonte do seu PC sobre o pacote instalado:

```bash
ssh pollen@reachy-mini.local

# Mount your local src content onto site-packages
sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app/src/your_app \
    /venvs/apps_venv/lib/python3.12/site-packages/YOUR_APP_NAME \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

Importante: Monte apenas o **conteúdo do diretório `src/your_app/`**, não o repositório inteiro. O diretório site-packages contém diretamente o pacote, não a estrutura do repositório.

Agora edite arquivos no seu PC. As alterações são aplicadas imediatamente quando você reinicia o app.

## Abordagem C: Montar Código-Fonte Local e Executar Diretamente

Similar à Abordagem B, mas sem usar pip install ou o dashboard. Você monta seu código-fonte local no robô e executa o app diretamente.

### Etapa 1: Montar seu código-fonte local no robô

Execute isto **no robô**:

```bash
ssh pollen@reachy-mini.local
mkdir -p /home/pollen/my_app_mount

sshfs YOUR_USER@YOUR_PC_IP:/path/to/your_app /home/pollen/my_app_mount \
    -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3
```

### Etapa 2: Executar seu app diretamente

```bash
cd /home/pollen/my_app_mount
/venvs/apps_venv/bin/python main.py
```

Esta abordagem é rápida para testes, mas você não terá o app registrado no dashboard.

## Instalar um Branch ou Versão Específica

Para instalar uma versão específica em todo o sistema:

```bash
ssh pollen@reachy-mini.local
/venvs/apps_venv/bin/python -m pip install --force-reinstall \
    "git+https://github.com/pollen-robotics/MY_AWESOME_APP.git@MY_AWESOME_BRANCH"
```

Substitua `MY_AWESOME_BRANCH` por um nome de branch (`develop`), tag ou hash de commit.

## Armadilhas Comuns

### pip install lento via SSHFS

Se você montar arquivos **do seu computador para o robô** (inverso da Abordagem A), operações de pip install serão extremamente lentas porque o pip lê muitos arquivos pequenos pela rede.

**Solução:** Ou:
- Use a Abordagem A (arquivos ficam no robô, montados no seu computador)
- Ou ignore o pip install e execute manualmente com `python -m your_module`

### Ponto de montagem errado para site-packages

Um repositório git tem esta estrutura:
```
your_app/
  src/
    your_app/
      __init__.py
      main.py
```

Mas o site-packages contém:
```
your_app/
  __init__.py
  main.py
```

Se você montar o repositório inteiro sobre o site-packages, o Python não encontrará seu código. Monte apenas o diretório interno do pacote.


## Referência Rápida

| Tarefa | Comando |
|------|---------|
| SSH para o robô | `ssh pollen@reachy-mini.local` |
| Parar daemon | `sudo systemctl stop reachy-mini-daemon` |
| Iniciar daemon | `sudo systemctl start reachy-mini-daemon` |
| Ver logs do daemon | `journalctl -u reachy-mini-daemon -f` |
| Verificar status do robô | `reachyminios_check` |
| Montar arquivos do robô localmente | `sshfs pollen@IP:/path ~/local_mount -o reconnect,ServerAliveInterval=15,ServerAliveCountMax=3` |
| Desmontar | `fusermount -u ~/local_mount` |

## Veja Também

- [Install Daemon from Branch](/pt-br/reachymini_platforms_reachy_mini_install_daemon_from_branch) - Para testar versões de daemon ainda não lançadas
- [Troubleshooting](/pt-br/reachymini_troubleshooting) - Problemas comuns e correções
