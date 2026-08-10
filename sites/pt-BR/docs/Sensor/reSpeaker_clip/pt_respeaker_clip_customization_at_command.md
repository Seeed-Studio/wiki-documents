---
description: "Um passo a passo concreto e completo de como adicionar um novo comando AT ao Clip"
title: "Customização: Adicionar um Comando AT Personalizado"
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - adicionar
  - um
  - personalizado
  - at
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_customization_at_command
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-27'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/pt-br/respeaker_clip_customization_at_command/
---

# Customização: Adicionar um Comando AT Personalizado

Um passo a passo concreto e completo de como adicionar um comando AT **novo** ao firmware do Clip. Vamos adicionar um comando trivial, mas real, `AT+ECHO=<msg>`, que responde:

```json
{"ok":true,"data":{"echo":"<msg>"}}\n
```

A mesma receita se aplica a comandos reais que mexem com configuração, armazenamento, áudio ou o sistema de eventos.

## Prompt de IA

Você pode copiar este prompt para um agente de codificação com IA para reproduzir o mesmo fluxo de trabalho de customização no repositório de firmware:

```text
You are working in the reSpeaker Clip firmware repository.

Use the repository Skill before editing:
1. Read `skills/clip-dev/SKILL.md` completely and follow it for firmware AT
   command development, build, flash, and validation.
2. For AT protocol work, also read the referenced BLE/AT guidance from that
   Skill when needed.
3. If the new command requires a Python SDK API or CLI support, read
   `skills/clip-sdk/SKILL.md` and update `sdk/` plus `docs/protocol.md`
   according to that Skill.

Task:
Add a new AT command named `ECHO` to the Clip firmware.

Expected behavior:
- `AT+ECHO=hello` returns `{"ok":true,"data":{"echo":"hello"}}`
- `AT+ECHO=` returns `{"ok":false,"msg":"Missing message"}`
- `AT+ECHO` returns `{"ok":false,"msg":"Use AT+ECHO=<msg>"}`

Implementation constraints:
- Modify `applications/clip/src/at_commands.c`.
- Add a `cmd_echo_handler(struct at_cmd_ctx *ctx, char *response, size_t len)`.
- Use `create_json_response(...)` so the response format matches existing
  commands.
- Register the command in `at_commands_register()` with
  `AT_CMD_SET | AT_CMD_EXEC`.
- Keep the example minimal. It may use `%s` for the demo response, but document
  that real free-form string commands must validate or escape JSON-sensitive
  input first.
- Do not change BLE, UDP, or USB transport code unless the source proves it is
  necessary.

Validation:
- Build a pristine firmware image for `clip/nrf5340/cpuapp`.
- If hardware is available, flash the image and test `AT+ECHO=hello`,
  `AT+ECHO=`, and bare `AT+ECHO` over at least one transport.
- Also check representative existing commands such as `AT+GSTAT`, `AT+MODE?`,
  and `AT+VERSION`.
- Report exactly what was tested and do not claim hardware validation unless it
  actually ran on a device.
```

## 1. Objetivo

Adicionar `AT+ECHO=<msg>` para que:

```
AT+ECHO=hello     -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
```

Ele é intencionalmente mínimo: um comando SET com uma pequena dica de uso EXEC, sem efeitos colaterais, verificável em todos os três transportes. `ECHO` não colide com nenhum comando registrado (veja o registro em `at_commands_register()` abaixo).

## 2. Fluxo de dados atual

Uma linha AT de entrada percorre estas camadas (os nomes das funções são reais):

```
transport (BLE / UDP / USB CDC)
  -> at_server_submit_cmd()            applications/clip/src/at_server.c
  -> at_server_thread_func()           dequeues from its k_msgq
  -> parse_command()                   splits name / args / type (SET|TEST|EXEC)
  -> cmd->handler(&ctx, buf, len)       matched in the cmd_registry
  -> create_json_response(...)          builds {"ok":..,"msg":..,"data":..}
  -> SEND_RESPONSE()                    routes the buffer back to the
                                        transport the command arrived on
```

Dois pontos importam para quem está customizando:

- **O parsing é compartilhado.** `parse_command()` (at_server.c) é responsável pela gramática `AT+NAME=args` e pela detecção de tipo com `=` e `?`. Você nunca analisa o prefixo `AT+` por conta própria — seu handler recebe `ctx->args` já separado.
- **As respostas são roteadas automaticamente.** A macro `SEND_RESPONSE()` em `at_server.c` faz o despacho com base no transporte de origem do comando: `TRANSPORT_TYPE_USB` -> `usb_cdc_send_response()`, `TRANSPORT_TYPE_UDP` -> `transport_udp_send_response()`, caso contrário -> `transport_send_to(item->transport_type, ...)`. Seu handler apenas preenche o buffer de resposta; ele **não** faz nenhum trabalho de transporte, e o mesmo JSON sai de forma idêntica via BLE, UDP e USB.

## 3. Ponto de extensão: o padrão de registro

Tudo abaixo é citado de código-fonte real. O contrato está em `applications/clip/include/at_server.h`.

### 3.1 A assinatura do handler

De `at_server.h`:

```c
typedef int (*at_cmd_handler_t)(struct at_cmd_ctx *ctx, char *response, size_t len);
```

O contexto que o seu handler recebe (`at_server.h`):

```c
struct at_cmd_ctx {
    const char *name;           /* Command name (e.g., "ECHO") */
    uint8_t type;               /* Command type (SET/QUERY/EXEC) */
    const char *args;           /* Arguments string */
    uint8_t transport_type;     /* Transport type for response */
};
```

`ctx->type` é um dentre `AT_CMD_TYPE_TEST` (0), `AT_CMD_TYPE_SET` (1), `AT_CMD_TYPE_EXEC` (2) — também `AT_CMD_TYPE_READ` (3, igual a TEST). Os argumentos ficam em `ctx->args` (já depois do `=`). Um handler real usando exatamente este formato é `cmd_mode_handler` (at_commands.c:422):

```c
static int cmd_mode_handler(struct at_cmd_ctx *ctx, char *response, size_t len)
{
    if (ctx->type == AT_CMD_TYPE_SET) {
        if (!ctx->args || strlen(ctx->args) == 0) {
            return create_json_response(false, "Missing mode value", NULL, response, len);
        }
        /* ...validate, mutate state... */
        char data[32];
        snprintf(data, sizeof(data), "{\"mode\":\"%s\"}", mode_str);
        return create_json_response(true, NULL, data, response, len);
    } else {
        /* AT+MODE? */
        char data[32];
        snprintf(data, sizeof(data), "{\"mode\":\"%s\"}", mode_str);
        return create_json_response(true, NULL, data, response, len);
    }
}
```

### 3.2 O helper `create_json_response`

De `at_commands.c` (o helper estático que todo handler usa):

```c
static int create_json_response(bool success, const char *message,
                                const char *data, char *response, size_t len);
```

Comportamento (lido a partir do corpo da função):

- Emite `{"ok":true` ou `{"ok":false`.
- Se `message` não for NULL, acrescenta `,"msg":"<message>"`.
- Se `data` não for NULL, acrescenta `,"data":<data>` **literalmente** — `data` deve ser um **objeto JSON completo** que você mesmo formatou (por exemplo, `{"echo":"hello"}`), **não** um valor isolado nem uma string de formato. Este é o erro mais comum.
- Fecha com `}\n` e retorna o comprimento total; retorna `AT_ERR_NOMEM` em caso de truncamento. A thread do servidor trata `ret < 0` como erro e substitui por `at_server_err_msg(-ret)`.

Portanto, o formato da resposta é fixo: sucesso -> `{"ok":true,...,"data":{...}}`, falha -> `{"ok":false,...,"msg":"..."}`. Não há códigos de erro numéricos nem campo `error` (veja [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)).

### 3.3 A struct de comando e o registro

De `at_server.h`:

```c
struct at_command {
    const char *name;           /* Command name */
    uint8_t flags;              /* Supported operations */
    at_cmd_handler_t handler;   /* Command handler */
};
```

Flags (bitmask; `at_server.h`):

```c
#define AT_CMD_SET    (1 << 0)  /* Supports AT+CMD=... */
#define AT_CMD_QUERY  (1 << 1)  /* Supports AT+CMD?      */
#define AT_CMD_EXEC   (1 << 2)  /* Supports AT+CMD       */
```

Registro (at_server.c) — note que o registro é limitado a 32 comandos:

```c
int at_server_register_cmd(const struct at_command *cmd);
```

Um bloco de registro real, exatamente como aparece em `at_commands.c:1769`:

```c
/* GSTAT - Get device status */
static const struct at_command gstat_cmd = {
    .name = "GSTAT",
    .flags = AT_CMD_EXEC,
    .handler = cmd_gstat_handler,
};
err = at_server_register_cmd(&gstat_cmd);
if (err) return err;
```

## 4. Arquivos a modificar

Apenas um arquivo fonte: `applications/clip/src/at_commands.c`.

### 4.1 Adicionar o handler

Coloque-o entre as outras definições `static int cmd_*_handler(...)` (os handlers existentes ficam acima de `at_commands_register()`). Baseado em `cmd_mode_handler`:

```c
/* ECHO Command Handler - customization example.
 * AT+ECHO=<msg> -> {"ok":true,"data":{"echo":"<msg>"}} */
static int cmd_echo_handler(struct at_cmd_ctx *ctx, char *response, size_t len)
{
    if (ctx->type != AT_CMD_TYPE_SET) {
        return create_json_response(false, "Use AT+ECHO=<msg>", NULL, response, len);
    }
    if (!ctx->args || strlen(ctx->args) == 0) {
        return create_json_response(false, "Missing message", NULL, response, len);
    }

    char data[160];
    int n = snprintf(data, sizeof(data), "{\"echo\":\"%s\"}", ctx->args);
    if (n < 0 || n >= (int)sizeof(data)) {
        return AT_ERR_NOMEM;
    }
    return create_json_response(true, NULL, data, response, len);
}
```

> **Pegadinha para comandos reais:** `ctx->args` é entrada bruta do usuário. Interpolá-la com `%s` (como o exemplo trivial faz) permite que um `"` na mensagem quebre o JSON. Para qualquer comando que aceite strings de texto livre, valide/escape a entrada primeiro. Os comandos fornecidos que usam `%s` (por exemplo, `MODE`, `LOG`) o fazem apenas contra uma enumeração fixa que eles já verificaram.

### 4.2 Registrá-lo

Dentro de `at_commands_register(void)` (at_commands.c:1761) — a única função de inicialização que registra todos os comandos e que por sua vez é chamada uma vez a partir de `main.c` (`at_commands_register()` em main.c:286). Adicione o bloco junto com os outros (por exemplo, logo após o bloco de `LOG` perto de at_commands.c:2030):

```c
/* ECHO - echo a message back (customization example) */
static const struct at_command echo_cmd = {
    .name = "ECHO",
    .flags = AT_CMD_SET | AT_CMD_EXEC,
    .handler = cmd_echo_handler,
};
err = at_server_register_cmd(&echo_cmd);
if (err) return err;
```

`AT_CMD_EXEC` é obrigatório porque o handler intencionalmente retorna uma mensagem de uso amigável para um `AT+ECHO` simples. Se o registro usar apenas `AT_CMD_SET`, o despachante rejeita `AT+ECHO` antes que o handler possa ser executado. Como o servidor roteia a resposta automaticamente (Seção 2), não são necessárias alterações no código de BLE/UDP/USB.

## 5. Impacto na compatibilidade

Adicionar um comando é **aditivo** — os comandos existentes e seus formatos JSON permanecem intocados. Mantenha o contrato de resposta intacto:

- Sucesso: `{"ok":true,"data":{...}}`
- Falha: `{"ok":false,"msg":"..."}`
- Sem códigos de erro numéricos, sem ID de requisição, sem campo `error`. (Consulte [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md).)

Se o novo comando também precisar ser acessível a partir das ferramentas do host, você precisa de **paridade com o SDK em Python**, não apenas firmware. De acordo com a regra de `skills/clip-sdk/`, leia os registros atuais em `at_commands.c` antes de alterar o SDK e trate `docs/protocol.md` + o código-fonte do firmware como o contrato de protocolo — atualize tanto o SDK (em `sdk/`) quanto o `protocol.md` quando o contrato de firmware mudar. Não emule comandos legados removidos (`BITRATE`, `COMPLEXITY`, `NOISE`, `AGC`, `DEREVERB`, `PURGE`).

## 6. Compilar

Carregue o ambiente NCS v3.3.0, defina o caminho do módulo como uma variável de ambiente (a descoberta do Kconfig é executada antes do CMake) e então compile:

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$(pwd)

west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

De acordo com o `CLAUDE.md`, o projeto compila com **zero avisos** — corrija qualquer aviso do compilador antes de fazer o commit. (O handler acima não introduz nenhum.)

## 7. Verificação no dispositivo

Grave o firmware (observação: `west flash --reset` não funciona nesta placa — faça o reset separadamente):

```sh
west flash --build-dir build-clip && nrfutil device reset
minicom -D /dev/ttyACM0 -b 921600
```

Em seguida, exercite o comando em cada transporte e confirme que o JSON é idêntico:

**BLE** (shell interativo — `clip-cli.py terminal` abre um prompt AT via BLE):

```sh
python applications/clip/tests/tools/clip-cli.py terminal
# at the prompt:
AT+ECHO=hello      -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
```

**UDP** (modo WiFi AP — envie `AT+WIFI=on` via BLE primeiro, depois conecte ao SSID/senha retornados e aponte para `192.168.4.1:8089`):

```sh
python applications/clip/tests/tools/udp_terminal.py
AT+ECHO=hello
```

**USB CDC** (abra a porta serial CDC-ACM; o USB deve ser habilitado primeiro via `AT+USB=on` por BLE, ou mantenha pressionado o botão de usuário enquanto conecta o cabo):

```sh
AT+ECHO=hello
```

A string de resposta deve coincidir byte a byte nos três casos. Confirme também que nenhum comando existente regrediu — por exemplo, `AT+GSTAT`, `AT+MODE?`, `AT+VERSION`.

## 8. Recuperação

Se a nova compilação se comportar de forma incorreta, recupere via DFU serial USB (gatilho de 1200 baud para entrar em recuperação MCUboot, PID `0x8069`), OTA por BLE ou um programador — consulte [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md). A partição do bootloader nunca é tocada por uma OTA de aplicativo; a assinatura é verificada pelo MCUboot.

## Relacionados

- Código-fonte: [at_commands.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_commands.c) (handlers + `at_commands_register()`), [at_server.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_server.c) (`parse_command`, `at_server_register_cmd`, `SEND_RESPONSE`), [at_server.h](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/include/at_server.h) (contrato de struct/flag/typedef).
- Protocolo: [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md) (especificação de comandos AT + contrato de resposta), [architecture.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/architecture.md) (sistema de transporte/eventos).
- Paridade com Python: [skills/clip-sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-sdk/) (código-fonte do SDK em `sdk/`, regras de registro de comandos/documentação de protocolo), [skills/clip-dev/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) (skill de desenvolvimento de firmware — referências de áudio/compilação/ble-at/armazenamento/wifi-udp/mcuboot/energia/display/hardware).
- Compilação/gravação/energia/armadilhas: [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md), [custom_app_guide.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/custom_app_guide.md), [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md).

## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
