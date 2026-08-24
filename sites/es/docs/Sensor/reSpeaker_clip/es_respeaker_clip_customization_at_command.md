---
description: Una guía concreta y completa de extremo a extremo para añadir un nuevo comando AT al Clip
title: 'Personalización: Añadir un comando AT personalizado'
keywords:
  - reSpeaker clip
  - firmware
  - sdk
  - añadir
  - un
  - personalizado
  - at
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_customization_at_command
sku: 100020126
last_update:
  date: 07/28/2026
  author: Ray
createdAt: '2026-07-27'
updatedAt: '2026-08-07'
url: https://wiki.seeedstudio.com/es/respeaker_clip_customization_at_command/
---

# Personalización: Añadir un comando AT personalizado

Una guía concreta y completa de extremo a extremo para añadir un comando AT **nuevo** al firmware del Clip. Añadimos un comando trivial pero real, `AT+ECHO=<msg>`, que responde:

```json
{"ok":true,"data":{"echo":"<msg>"}}\n
```

La misma receta escala a comandos reales que tocan la configuración, el almacenamiento, el audio o el sistema de eventos.

## Prompt para IA

Puedes copiar este prompt en un agente de programación con IA para reproducir el mismo flujo de trabajo de personalización en el repositorio de firmware:

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

Añadir `AT+ECHO=<msg>` de forma que:

```
AT+ECHO=hello     -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
```

Es intencionadamente mínimo: un único comando SET con una pequeña pista de uso EXEC, sin efectos secundarios, verificable en los tres transportes. `ECHO` no colisiona con ningún comando registrado (consulta el registro en `at_commands_register()` más abajo).

## 2. Flujo de datos actual

Una línea AT entrante recorre estas capas (los nombres de las funciones son reales):

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

Dos puntos importan para quien personaliza:

- **El análisis sintáctico es compartido.** `parse_command()` (at_server.c) posee la gramática `AT+NAME=args` y la detección de tipo `=` y `?`. Nunca analizas tú mismo el prefijo `AT+`: tu manejador recibe `ctx->args` ya separado.
- **Las respuestas se enrutan automáticamente.** La macro `SEND_RESPONSE()` en `at_server.c` despacha según el transporte de origen del comando: `TRANSPORT_TYPE_USB` -> `usb_cdc_send_response()`, `TRANSPORT_TYPE_UDP` -> `transport_udp_send_response()`, en caso contrario -> `transport_send_to(item->transport_type, ...)`. Tu manejador solo rellena el búfer de respuesta; **no** realiza ningún trabajo de transporte, y el mismo JSON sale de forma idéntica por BLE, UDP y USB.

## 3. Punto de extensión: el patrón de registro

Todo lo siguiente está citado de código fuente real. El contrato vive en `applications/clip/include/at_server.h`.

### 3.1 La firma del manejador

De `at_server.h`:

```c
typedef int (*at_cmd_handler_t)(struct at_cmd_ctx *ctx, char *response, size_t len);
```

El contexto que recibe tu manejador (`at_server.h`):

```c
struct at_cmd_ctx {
    const char *name;           /* Command name (e.g., "ECHO") */
    uint8_t type;               /* Command type (SET/QUERY/EXEC) */
    const char *args;           /* Arguments string */
    uint8_t transport_type;     /* Transport type for response */
};
```

`ctx->type` es uno de `AT_CMD_TYPE_TEST` (0), `AT_CMD_TYPE_SET` (1), `AT_CMD_TYPE_EXEC` (2) — también `AT_CMD_TYPE_READ` (3, igual que TEST). Los argumentos viven en `ctx->args` (ya después del `=`). Un manejador real que usa exactamente esta forma es `cmd_mode_handler` (at_commands.c:422):

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

### 3.2 El helper `create_json_response`

De `at_commands.c` (el helper estático que usa cada manejador):

```c
static int create_json_response(bool success, const char *message,
                                const char *data, char *response, size_t len);
```

Comportamiento (leído de su cuerpo):

- Emite `{"ok":true` o `{"ok":false`.
- Si `message` no es NULL, añade `,"msg":"<message>"`.
- Si `data` no es NULL, añade `,"data":<data>` **verbatim** — `data` debe ser un **objeto JSON completo** que tú mismo formateaste (por ejemplo `{"echo":"hello"}`), **no** un valor simple ni una cadena de formato. Este es el error típico.
- Cierra con `}\n` y devuelve la longitud total; devuelve `AT_ERR_NOMEM` en caso de truncamiento. El hilo del servidor trata `ret < 0` como un error y sustituye `at_server_err_msg(-ret)`.

Así que la forma de la respuesta es fija: éxito -> `{"ok":true,...,"data":{...}}`, fallo -> `{"ok":false,...,"msg":"..."}`. No hay códigos de error numéricos ni un campo `error` (consulta [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)).

### 3.3 La estructura del comando y el registro

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

Registro (at_server.c) — ten en cuenta que el registro está limitado a 32 comandos:

```c
int at_server_register_cmd(const struct at_command *cmd);
```

Un bloque de registro real, exactamente como aparece en `at_commands.c:1769`:

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

## 4. Archivos que hay que modificar

Solo un archivo fuente: `applications/clip/src/at_commands.c`.

### 4.1 Añadir el manejador

Colócalo entre las otras definiciones `static int cmd_*_handler(...)` (los manejadores existentes se encuentran por encima de `at_commands_register()`). Basado en `cmd_mode_handler`:

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

> **Advertencia para comandos reales:** `ctx->args` es entrada sin procesar del usuario. Interpolarla con `%s` (como hace el ejemplo trivial) permite que una `"` en el mensaje rompa el JSON. Para cualquier comando que acepte cadenas de texto de forma libre, valida/escapa primero la entrada. Los comandos incluidos que usan `%s` (por ejemplo `MODE`, `LOG`) lo hacen solo contra una enumeración fija que ya han comprobado.

### 4.2 Registrarlo

Dentro de `at_commands_register(void)` (at_commands.c:1761), la única función de inicialización que registra cada comando y que a su vez se llama una vez desde `main.c` (`at_commands_register()` en main.c:286). Añade el bloque junto a los demás (por ejemplo justo después del bloque `LOG` cerca de at_commands.c:2030):

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

`AT_CMD_EXEC` es obligatorio porque el manejador devuelve intencionadamente un mensaje de uso amigable para un `AT+ECHO` simple. Si el registro solo usa `AT_CMD_SET`, el despachador rechaza `AT+ECHO` antes de que el manejador pueda ejecutarse. Como el servidor enruta automáticamente la respuesta (Sección 2), no se necesitan cambios en el código BLE/UDP/USB.

## 5. Impacto en la compatibilidad

Añadir un comando es **aditivo**: los comandos existentes y sus formas JSON permanecen intactos. Mantén intacto el contrato de respuesta:

- Éxito: `{"ok":true,"data":{...}}`
- Error: `{"ok":false,"msg":"..."}`
- Sin códigos de error numéricos, sin ID de solicitud, sin campo `error`. (Consulta [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md).)

Si el nuevo comando también debe ser accesible desde las herramientas del host, necesitas **paridad con el SDK de Python**, no solo con el firmware. Según la regla de `skills/clip-sdk/`, lee los registros actuales de `at_commands.c` antes de cambiar el SDK y trata `docs/protocol.md` + el código fuente del firmware como el contrato del protocolo: cuando cambie el contrato del firmware, actualiza tanto el SDK (en `sdk/`) como `protocol.md`. No emules comandos heredados eliminados (`BITRATE`, `COMPLEXITY`, `NOISE`, `AGC`, `DEREVERB`, `PURGE`).

## 6. Compilación

Carga el entorno de NCS v3.3.0, establece la ruta del módulo como una variable de entorno (el descubrimiento de Kconfig se ejecuta antes de CMake) y luego compila:

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$(pwd)

west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

Según `CLAUDE.md`, el proyecto se compila con **cero advertencias**: corrige cualquier advertencia del compilador antes de hacer commit. (El controlador anterior no introduce ninguna).

## 7. Verificación en el dispositivo

Flashea (nota: `west flash --reset` no funciona en esta placa; reinicia por separado):

```sh
west flash --build-dir build-clip && nrfutil device reset
minicom -D /dev/ttyACM0 -b 921600
```

Luego prueba el comando en cada transporte y confirma que el JSON es idéntico:

**BLE** (shell interactiva: `clip-cli.py terminal` abre un prompt AT sobre BLE):

```sh
python applications/clip/tests/tools/clip-cli.py terminal
# at the prompt:
AT+ECHO=hello      -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
```

**UDP** (modo punto de acceso WiFi: primero envía `AT+WIFI=on` por BLE, luego conéctate al SSID/contraseña devueltos y apunta a `192.168.4.1:8089`):

```sh
python applications/clip/tests/tools/udp_terminal.py
AT+ECHO=hello
```

**USB CDC** (abre el puerto serie CDC-ACM; primero se debe habilitar USB mediante `AT+USB=on` por BLE, o mantén pulsado el botón de usuario mientras conectas el cable):

```sh
AT+ECHO=hello
```

La cadena de respuesta debe coincidir byte por byte en los tres casos. Confirma también que ningún comando existente haya sufrido regresiones, por ejemplo `AT+GSTAT`, `AT+MODE?`, `AT+VERSION`.

## 8. Recuperación

Si la nueva compilación se comporta de forma incorrecta, recupérala mediante DFU serie USB (disparo a 1200 baudios para entrar en recuperación MCUboot, PID `0x8069`), OTA por BLE o un programador; consulta [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md). La partición del bootloader nunca se toca con una OTA de aplicación; la firma es verificada por MCUboot.

## Relacionado

- Código fuente: [at_commands.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_commands.c) (controladores + `at_commands_register()`), [at_server.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_server.c) (`parse_command`, `at_server_register_cmd`, `SEND_RESPONSE`), [at_server.h](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/include/at_server.h) (contrato de struct/flag/typedef).
- Protocolo: [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md) (especificación de comandos AT + contrato de respuesta), [architecture.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/architecture.md) (sistema de transporte/eventos).
- Paridad con Python: [skills/clip-sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-sdk/) (código fuente del SDK en `sdk/`, reglas de registro de comandos/documentación de protocolo), [skills/clip-dev/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/) (skill de desarrollo de firmware: referencias de audio/compilación/ble-at/almacenamiento/wifi-udp/mcuboot/energía/pantalla/hardware).
- Compilación/flasheo/energía/puntos conflictivos: [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md), [custom_app_guide.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/custom_app_guide.md), [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md).

## Soporte técnico y debate sobre el producto

Gracias por elegir nuestros productos. Estamos aquí para ofrecerte distintos tipos de soporte y garantizar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para adaptarnos a diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
