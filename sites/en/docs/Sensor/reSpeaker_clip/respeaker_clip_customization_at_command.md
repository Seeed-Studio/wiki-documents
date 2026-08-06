---
description: A concrete, end-to-end walkthrough of adding a new AT command to the Clip
title: 'Customization: Add a Custom AT Command'
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - add
  - a
  - custom
  - at
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_customization_at_command
sku: 100020126
last_update:
  date: 07/27/2026
  author: Ray
createdAt: '2026-07-27'
updatedAt: '2026-08-05'
url: https://wiki.seeedstudio.com/respeaker_clip_customization_at_command/
---

# Customization: Add a Custom AT Command

A concrete, end-to-end walkthrough of adding a **new** AT command to the Clip firmware. We add a trivial-but-real command, `AT+ECHO=<msg>`, that replies:

```json
{"ok":true,"data":{"echo":"<msg>"}}\n
```

The same recipe scales to real commands that touch config, storage, audio, or the event system.

## AI prompt

You can copy this prompt into an AI coding agent to reproduce the same customization workflow in the firmware repository:

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

## 1. Goal

Add `AT+ECHO=<msg>` so that:

```
AT+ECHO=hello     -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
```

It is intentionally minimal: one SET command with a small EXEC usage hint, no side effects, verifiable on all three transports. `ECHO` does not collide with any registered command (see the registry in `at_commands_register()` below).

## 2. Current data flow

An inbound AT line travels through these layers (function names are real):

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

Two points matter for the customizer:

- **Parsing is shared.** `parse_command()` (at_server.c) owns the `AT+NAME=args` grammar and the `=`, `?` type detection. You never parse the `AT+` prefix yourself — your handler receives `ctx->args` already split out.
- **Responses are auto-routed.** The `SEND_RESPONSE()` macro in `at_server.c` dispatches by the command's originating transport: `TRANSPORT_TYPE_USB` -> `usb_cdc_send_response()`, `TRANSPORT_TYPE_UDP` -> `transport_udp_send_response()`, otherwise -> `transport_send_to(item->transport_type, ...)`. Your handler only fills the response buffer; it does **no** transport work, and the same JSON goes out identically over BLE, UDP, and USB.

## 3. Extension point: the registration pattern

Everything below is quoted from real source. The contract lives in `applications/clip/include/at_server.h`.

### 3.1 The handler signature

From `at_server.h`:

```c
typedef int (*at_cmd_handler_t)(struct at_cmd_ctx *ctx, char *response, size_t len);
```

The context your handler receives (`at_server.h`):

```c
struct at_cmd_ctx {
    const char *name;           /* Command name (e.g., "ECHO") */
    uint8_t type;               /* Command type (SET/QUERY/EXEC) */
    const char *args;           /* Arguments string */
    uint8_t transport_type;     /* Transport type for response */
};
```

`ctx->type` is one of `AT_CMD_TYPE_TEST` (0), `AT_CMD_TYPE_SET` (1), `AT_CMD_TYPE_EXEC` (2) — also `AT_CMD_TYPE_READ` (3, same as TEST). Args live in `ctx->args` (already past the `=`). A real handler using exactly this shape is `cmd_mode_handler` (at_commands.c:422):

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

### 3.2 The `create_json_response` helper

From `at_commands.c` (the static helper every handler uses):

```c
static int create_json_response(bool success, const char *message,
                                const char *data, char *response, size_t len);
```

Behavior (read from its body):

- Emits `{"ok":true` or `{"ok":false`.
- If `message` is non-NULL, appends `,"msg":"<message>"`.
- If `data` is non-NULL, appends `,"data":<data>` **verbatim** — `data` must be a **complete JSON object** you formatted yourself (e.g. `{"echo":"hello"}`), **not** a bare value or a format string. This is the common gotcha.
- Closes with `}\n` and returns the total length; returns `AT_ERR_NOMEM` on truncation. The server thread treats `ret < 0` as an error and substitutes `at_server_err_msg(-ret)`.

So the response shape is fixed: success -> `{"ok":true,...,"data":{...}}`, failure -> `{"ok":false,...,"msg":"..."}`. There are no numeric error codes and no `error` field (see [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)).

### 3.3 The command struct and registration

From `at_server.h`:

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

Registration (at_server.c) — note the registry is capped at 32 commands:

```c
int at_server_register_cmd(const struct at_command *cmd);
```

A real registration block, exactly as it appears in `at_commands.c:1769`:

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

## 4. Files to modify

Only one source file: `applications/clip/src/at_commands.c`.

### 4.1 Add the handler

Place it among the other `static int cmd_*_handler(...)` definitions (the existing handlers sit above `at_commands_register()`). Modeled on `cmd_mode_handler`:

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

> **Gotcha for real commands:** `ctx->args` is raw user input. Interpolating it with `%s` (as the trivial example does) lets a `"` in the message break the JSON. For any command that accepts free-form strings, validate/escape the input first. The shipped commands that use `%s` (e.g. `MODE`, `LOG`) do so only against a fixed enumeration they already checked.

### 4.2 Register it

Inside `at_commands_register(void)` (at_commands.c:1761) — the single init function that registers every command and is itself called once from `main.c` (`at_commands_register()` at main.c:286). Add the block alongside the others (e.g. right after the `LOG` block near at_commands.c:2030):

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

`AT_CMD_EXEC` is required because the handler intentionally returns a friendly usage message for bare `AT+ECHO`. If the registration only uses `AT_CMD_SET`, the dispatcher rejects `AT+ECHO` before the handler can run. Because the server auto-routes the response (Section 2), no BLE/UDP/USB code changes are needed.

## 5. Compatibility impact

Adding a command is **additive** — existing commands and their JSON shapes are untouched. Keep the response contract intact:

- Success: `{"ok":true,"data":{...}}`
- Failure: `{"ok":false,"msg":"..."}`
- No numeric error codes, no request ID, no `error` field. (See [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md).)

If the new command should also be reachable from the host tooling, you need **Python SDK parity**, not just firmware. Per the `skills/clip-sdk/` rule, read the current `at_commands.c` registrations before changing the SDK, and treat `docs/protocol.md` + firmware source as the protocol contract — update both the SDK (in `sdk/`) and `protocol.md` when the firmware contract changes. Do not emulate removed legacy commands (`BITRATE`, `COMPLEXITY`, `NOISE`, `AGC`, `DEREVERB`, `PURGE`).

## 6. Build

Source the NCS v3.3.0 environment, set the module path as an env var (Kconfig discovery runs before CMake), then build:

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$(pwd)

west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

Per `CLAUDE.md`, the project builds with **zero warnings** — fix any compiler warning before committing. (The handler above introduces none.)

## 7. On-device verify

Flash (note: `west flash --reset` does not work on this board — reset separately):

```sh
west flash --build-dir build-clip && nrfutil device reset
minicom -D /dev/ttyACM0 -b 921600
```

Then exercise the command on each transport and confirm the JSON is identical:

**BLE** (interactive shell — `clip-cli.py terminal` opens an AT prompt over BLE):

```sh
python applications/clip/tests/tools/clip-cli.py terminal
# at the prompt:
AT+ECHO=hello      -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
```

**UDP** (WiFi AP mode — send `AT+WIFI=on` over BLE first, then join the returned SSID/password and target `192.168.4.1:8089`):

```sh
python applications/clip/tests/tools/udp_terminal.py
AT+ECHO=hello
```

**USB CDC** (open the CDC-ACM serial port; USB must be enabled first via `AT+USB=on` over BLE, or hold the user button while plugging in):

```sh
AT+ECHO=hello
```

The response string must match byte-for-byte across all three. Also confirm no existing command regressed — e.g. `AT+GSTAT`, `AT+MODE?`, `AT+VERSION`.

## 8. Recovery

If the new build misbehaves, recover over USB serial DFU (1200-baud trigger into MCUboot recovery, PID `0x8069`), BLE OTA, or a programmer — see [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md). The bootloader partition is never touched by an app OTA; the signature is verified by MCUboot.

## Related

- Source: [at_commands.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_commands.c) (handlers + `at_commands_register()`), [at_server.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_server.c) (`parse_command`, `at_server_register_cmd`, `SEND_RESPONSE`), [at_server.h](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/include/at_server.h) (struct/flag/typedef contract).
- Protocol: [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md) (AT command spec + response contract), [architecture.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/architecture.md) (transport/event system).
- Python parity: [skills/clip-sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-sdk/) (SDK source in `sdk/`, command-registration/protocol-doc rules), [skills/clip-dev/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) (firmware-dev skill — audio/build/ble-at/storage/wifi-udp/mcuboot/power/display/hardware references).
- Build/flash/power/pitfalls: [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md), [custom_app_guide.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/custom_app_guide.md), [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
