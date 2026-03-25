---
description: Referência completa da API para aplicativos Reachy Mini, incluindo classes centrais de app, gerenciamento de apps, informações de apps, assistente de apps e fontes de apps.
title: Referência da API de Apps
slug: /reachymini_api_apps
keywords:
  - api
  - apps
  - gerenciamento de app
  - assistente de app
  - hugging face
  - fontes de app
  - utilitários de app
last_update:
  date: 02/27/2026
  author: Tienjuiwong
translation:
  skip:
    - zh-CN
createdAt: '2026-02-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reachymini_api_apps/
---

# Apps

## Classes Centrais de App

### `reachy_mini.ReachyMiniApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L27)**

Classe base para aplicações Reachy Mini.

### Métodos

#### `run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L143)**

Executa a lógica principal do app.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `reachy_mini` | `ReachyMini` | A instância Reachy Mini com a qual interagir. |
| `stop_event` | `threading.Event` | Um evento que pode ser definido para parar o app de forma graciosa. |

---

#### `stop`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L154)**

Interrompe o app de forma graciosa.

---

#### `wrapped_run`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/app.py#L90)**

Encapsula o método run com o gerenciamento de contexto do Reachy Mini.

---

### `reachy_mini.apps.manager.AppManager`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L51)**

Gerenciador para apps Reachy Mini.

### Métodos

#### `close`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L68)**

Limpa o AppManager, interrompendo qualquer app em execução.

---

#### `current_app_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L276)**

Obtém o status atual do app.

---

#### `install_new_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L306)**

Instala um novo app pelo nome.

---

#### `is_app_running`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L88)**

Verifica se um app está atualmente em execução ou sendo interrompido.

---

#### `list_all_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L283)**

Lista apps disponíveis (async paralelo).

---

#### `list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L290)**

Lista apps disponíveis para um tipo de fonte fornecido.

---

#### `remove_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L317)**

Remove um app instalado pelo nome.

---

#### `restart_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L262)**

Reinicia o app atual.

---

#### `start_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L97)**

Inicia o app como um subprocesso, lança RuntimeError se um app já estiver em execução.

---

#### `stop_current_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L194)**

Interrompe o subprocesso do app atual.

---

#### `update_app`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L328)**

Atualiza um app instalado reinstalando-o a partir do HuggingFace.

Isso preserva as informações de fonte originais e reinstala para obter a versão mais recente.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `app_name` | `str` | Nome do app a ser atualizado. |
| `logger` | `logging.Logger` | Logger para saída de progresso. |

---

## Gerenciamento de App

### `reachy_mini.apps.manager.AppState`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L24)**

Status de um app em execução.

---

### `reachy_mini.apps.manager.AppStatus`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L34)**

Status de um app.

---

### `reachy_mini.apps.manager.RunningApp`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/manager.py#L43)**

Informações sobre um app em execução.

---

## Informações de App

### `reachy_mini.apps.AppInfo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L18)**

Metadados sobre um app.

---

### `reachy_mini.apps.SourceKind`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/__init__.py#L8)**

Tipos de fonte de app.

---

## Assistente de App

### Funções do Assistente

#### `reachy_mini.apps.assistant.validate_app_name`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L21)**

Valida o nome do app.

---

#### `reachy_mini.apps.assistant.is_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L36)**

Verifica se o caminho fornecido está dentro de um repositório git.

---

#### `reachy_mini.apps.assistant.validate_location`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L48)**

Valida o local onde criar o projeto de app.

---

#### `reachy_mini.apps.assistant.validate_location_and_git_repo`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L57)**

Valida o local onde criar o projeto de app, garantindo que não esteja em um repositório git.

---

#### `reachy_mini.apps.assistant.create_cli`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L68)**

Cria um novo projeto de app Reachy Mini usando uma CLI.

---

#### `reachy_mini.apps.assistant.create`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L131)**

Cria um novo projeto de app Reachy Mini com o nome fornecido no caminho especificado.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `console` | `Console` | O objeto de console para imprimir mensagens. |
| `app_name` | `str` | O nome do app a ser criado. |
| `app_path` | `Path` | O diretório onde o projeto do app será criado. |

**Retornos:**

| Tipo | Descrição |
|------|-------------|
| `Path` | O caminho para o projeto de app criado. |

---

#### `reachy_mini.apps.assistant.install_app_with_progress`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L210)**

Instala o app em um ambiente virtual temporário com um indicador de progresso.

---

#### `reachy_mini.apps.assistant.check`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L251)**

Verifica um projeto de app Reachy Mini existente.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `console` | `Console` | O objeto de console para imprimir mensagens. |
| `app_path` | `str` | Caminho local para o app a ser verificado. |

---

#### `reachy_mini.apps.assistant.request_app_addition`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L562)**

Solicita a adição do novo app à loja oficial de apps Reachy Mini.

---

#### `reachy_mini.apps.assistant.try_to_push`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L639)**

Tenta enviar alterações para o repositório remoto.

---

#### `reachy_mini.apps.assistant.publish`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/assistant.py#L656)**

Publica o app na loja de apps Reachy Mini.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `console` | `Console` | O objeto de console para imprimir mensagens. |
| `app_path` | `str` | Caminho local para o app a ser publicado. |
| `commit_message` | `str` | Mensagem de commit para a publicação do app. |
| `official` | `bool` | Solicitação para publicar o app como um app oficial Reachy Mini. |
| `no_check` | `bool` | Não executar verificações antes de publicar o app. |
| `private` | `bool \| None` | Se True, tornar privado. Se False, tornar público. Se None, perguntar. |

---

## Fontes de App

### `reachy_mini.apps.sources.hf_auth.save_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L384)**

Salva com segurança um token de acesso HuggingFace.

Valida o token em relação à API do Hugging Face e, se for válido, o armazena usando o mecanismo padrão de autenticação do Hugging Face para reutilização entre sessões.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `token` | `str` | O token de acesso HuggingFace a ser salvo. |

**Retornos:**

| Tipo | Descrição |
|------|-------------|
| `dict` | Um dicionário contendo: "status" ("success" ou "error"), "username" (o nome de usuário Hugging Face associado se bem-sucedido) e "message" (uma descrição do erro se malsucedido). |

---

### `reachy_mini.apps.sources.hf_auth.get_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L430)**

Obtém o token HuggingFace armazenado.

**Retornos:**

| Tipo | Descrição |
|------|-------------|
| `str \| None` | O token armazenado ou None se nenhum token estiver armazenado. |

---

### `reachy_mini.apps.sources.hf_auth.delete_hf_token`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L440)**

Exclui tokens HuggingFace armazenados.

:::note

logout() sem argumentos desconecta de todos os tokens de acesso salvos.

:::

---

### `reachy_mini.apps.sources.hf_auth.check_token_status`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_auth.py#L454)**

Verifica se um token está armazenado e é válido.

**Retornos:**

| Tipo | Descrição |
|------|-------------|
| `dict` | Dicionário de status com is_logged_in e username. |

---

### `reachy_mini.apps.sources.hf_space.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L35)**

Listar aplicativos disponíveis no Hugging Face Spaces.

---

### `reachy_mini.apps.sources.hf_space.list_all_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/hf_space.py#L78)**

Listar todos os aplicativos disponíveis no Hugging Face Spaces (incluindo os não oficiais).

---

### `reachy_mini.apps.sources.local_common_venv.get_app_site_packages`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L126)**

API pública para obter o diretório `site-packages` do venv de um determinado aplicativo.

:::info

- Para venvs separados: retorna o `site-packages` do venv do aplicativo
- Para ambiente compartilhado (modo SDK): retorna o `site-packages` do ambiente atual

:::

---

### `reachy_mini.apps.sources.local_common_venv.get_app_python`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L145)**

Obter o caminho do executável Python para um aplicativo (multiplataforma).

:::info

- Para venvs separados: retorna o Python do venv do aplicativo
- Para ambiente compartilhado: retorna o interpretador Python atual

:::

---

### `reachy_mini.apps.sources.local_common_venv.list_available_apps`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L344)**

Listar aplicativos disponíveis a partir de entry points ou venvs separados.

---

### `reachy_mini.apps.sources.local_common_venv.install_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L460)**

Instalar um pacote dado um objeto AppInfo, transmitindo os logs.

**Parâmetros:**

| Nome | Tipo | Descrição |
|------|------|-------------|
| `app` | `AppInfo` | AppInfo com detalhes do pacote. |
| `logger` | `logging.Logger` | Logger para saída de progresso. |
| `wireless_version` | `bool` | Se está sendo executado na versão wireless. |
| `desktop_app_daemon` | `bool` | Se está sendo executado como daemon de aplicativo desktop. |
| `force_reinstall` | `bool` | Se True, força reinstalação mesmo que já esteja instalado (para atualizações). |

---

### `reachy_mini.apps.sources.local_common_venv.get_app_module`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L731)**

Obter o nome do módulo de um aplicativo sem carregá-lo (para execução em subprocesso).

---

### `reachy_mini.apps.sources.local_common_venv.uninstall_package`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/sources/local_common_venv.py#L764)**

Desinstalar um pacote dado o nome de um aplicativo.

---

## Utilitários de Aplicativo

### `reachy_mini.apps.utils.running_command`

**[Source](https://github.com/pollen-robotics/reachy_mini/blob/develop/src/reachy_mini/apps/utils.py#L7)**

Executar um comando de shell e transmitir sua saída para o logger fornecido.
