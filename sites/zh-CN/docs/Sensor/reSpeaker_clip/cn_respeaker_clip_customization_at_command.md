---
description: "一个在 Clip 上添加新 AT 命令的具体端到端演练"
title: "自定义：添加自定义 AT 命令"
keywords:
  - reSpeaker clip
  - 固件
  - sdk
  - 添加
  - 一个
  - 自定义
  - at
image: https://files.seeedstudio.com/wiki/reSpeaker_Clip/clip-banner.jpg
slug: /respeaker_clip_customization_at_command
sku: 100020126
last_update:
  date: 07/27/2026
  author: Ray
createdAt: '2026-07-27'
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/cn/respeaker_clip_customization_at_command/
---

# 自定义：添加自定义 AT 命令

一个在 Clip 固件中添加**新** AT 命令的具体端到端演练。我们添加一个简单但真实的命令 `AT+ECHO=<msg>`，它会回复：

```json
{"ok":true,"data":{"echo":"<msg>"}}\n
```

同样的步骤可以扩展到真正会访问配置、存储、音频或事件系统的命令。

## AI 提示词

你可以将下面的提示词复制到一个 AI 编码代理中，在固件仓库中复现同样的自定义工作流：

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

## 1. 目标

添加 `AT+ECHO=<msg>`，使其：

```
AT+ECHO=hello     -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
```

它是刻意保持最小化的：一个 SET 命令，带一个简短的 EXEC 用法提示，没有副作用，可以在三种传输方式上验证。`ECHO` 不会与任何已注册命令冲突（参见下面 `at_commands_register()` 中的注册表）。

## 2. 当前数据流

一行入站 AT 命令会经过以下这些层（函数名都是真实的）：

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

对自定义开发者来说，有两点很重要：

- **解析是共享的。** `parse_command()`（at_server.c）负责 `AT+NAME=args` 语法以及 `=`、`?` 类型检测。你永远不需要自己解析 `AT+` 前缀——你的处理函数接收到的 `ctx->args` 已经被拆分好了。
- **响应是自动路由的。** `at_server.c` 中的 `SEND_RESPONSE()` 宏会根据命令的来源传输类型进行分发：`TRANSPORT_TYPE_USB` -> `usb_cdc_send_response()`，`TRANSPORT_TYPE_UDP` -> `transport_udp_send_response()`，否则 -> `transport_send_to(item->transport_type, ...)`。你的处理函数只需要填充响应缓冲区；它**不**做任何传输相关的工作，同一份 JSON 会以完全相同的形式通过 BLE、UDP 和 USB 发出。

## 3. 扩展点：注册模式

下面所有内容都摘自真实源码。约定定义在 `applications/clip/include/at_server.h` 中。

### 3.1 处理函数签名

来自 `at_server.h`：

```c
typedef int (*at_cmd_handler_t)(struct at_cmd_ctx *ctx, char *response, size_t len);
```

你的处理函数接收到的上下文（`at_server.h`）：

```c
struct at_cmd_ctx {
    const char *name;           /* Command name (e.g., "ECHO") */
    uint8_t type;               /* Command type (SET/QUERY/EXEC) */
    const char *args;           /* Arguments string */
    uint8_t transport_type;     /* Transport type for response */
};
```

`ctx->type` 取值为 `AT_CMD_TYPE_TEST` (0)、`AT_CMD_TYPE_SET` (1)、`AT_CMD_TYPE_EXEC` (2) 之一——还有 `AT_CMD_TYPE_READ` (3，与 TEST 相同)。参数位于 `ctx->args` 中（已经越过了 `=`）。一个使用完全相同形状的真实处理函数是 `cmd_mode_handler`（at_commands.c:422）：

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

### 3.2 `create_json_response` 辅助函数

来自 `at_commands.c`（每个处理函数都会使用的静态辅助函数）：

```c
static int create_json_response(bool success, const char *message,
                                const char *data, char *response, size_t len);
```

行为（从其函数体中读出）：

- 输出 `{"ok":true` 或 `{"ok":false`。
- 如果 `message` 非 NULL，则追加 `,"msg":"<message>"`。
- 如果 `data` 非 NULL，则**原样**追加 `,"data":<data>` —— `data` 必须是你自己格式化好的**完整 JSON 对象**（例如 `{"echo":"hello"}`），**不能**是裸值或格式化字符串。这是最常见的坑。
- 以 `}\n` 结尾并返回总长度；在截断时返回 `AT_ERR_NOMEM`。服务器线程将 `ret < 0` 视为错误，并用 `at_server_err_msg(-ret)` 进行替换。

因此响应结构是固定的：成功 -> `{"ok":true,...,"data":{...}}`，失败 -> `{"ok":false,...,"msg":"..."}`。没有数字错误码，也没有 `error` 字段（参见 [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)）。

### 3.3 命令结构体与注册

来自 `at_server.h`：

```c
struct at_command {
    const char *name;           /* Command name */
    uint8_t flags;              /* Supported operations */
    at_cmd_handler_t handler;   /* Command handler */
};
```

标志位（位掩码；`at_server.h`）：

```c
#define AT_CMD_SET    (1 << 0)  /* Supports AT+CMD=... */
#define AT_CMD_QUERY  (1 << 1)  /* Supports AT+CMD?      */
#define AT_CMD_EXEC   (1 << 2)  /* Supports AT+CMD       */
```

注册（at_server.c）——注意注册表最多只能容纳 32 个命令：

```c
int at_server_register_cmd(const struct at_command *cmd);
```

一个真实的注册代码块，与 `at_commands.c:1769` 中完全一致：

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

## 4. 需要修改的文件

只有一个源文件：`applications/clip/src/at_commands.c`。

### 4.1 添加处理函数

把它放在其他 `static int cmd_*_handler(...)` 定义之间（现有处理函数位于 `at_commands_register()` 之上）。以 `cmd_mode_handler` 为模板：

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

> **针对真实命令的注意事项：** `ctx->args` 是原始用户输入。像这个简单示例那样用 `%s` 进行插值，会让消息中的 `"` 破坏 JSON。对于任何接受自由文本字符串的命令，都要先校验/转义输入。已发布的使用 `%s` 的命令（例如 `MODE`、`LOG`）只会针对它们已经检查过的固定枚举值这样做。

### 4.2 注册它

在 `at_commands_register(void)`（at_commands.c:1761）内部——这是唯一一个注册所有命令的初始化函数，它本身只会从 `main.c` 中被调用一次（`main.c:286` 的 `at_commands_register()`）。把该代码块与其他命令一起添加（例如紧跟在 at_commands.c:2030 附近的 `LOG` 代码块之后）：

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

需要 `AT_CMD_EXEC`，因为处理函数在裸 `AT+ECHO` 时会有意返回一个友好的用法提示。如果注册时只使用 `AT_CMD_SET`，分发器会在处理函数运行前就拒绝 `AT+ECHO`。由于服务器会自动路由响应（第 2 节），因此不需要对 BLE/UDP/USB 代码做任何修改。

## 5. 兼容性影响

添加命令是**增量式**的——现有命令及其 JSON 结构保持不变。请保持响应约定不变：

- 成功：`{"ok":true,"data":{...}}`
- 失败：`{"ok":false,"msg":"..."}`
- 没有数字错误码、没有请求 ID、没有 `error` 字段。（参见 [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)。）

如果新命令也需要通过主机工具访问，你需要的是**Python SDK 一致性**，而不仅仅是固件。根据 `skills/clip-sdk/` 规则，在修改 SDK 之前先阅读当前的 `at_commands.c` 注册内容，并将 `docs/protocol.md` 加上固件源码视为协议契约——当固件契约发生变化时，同时更新 SDK（位于 `sdk/`）和 `protocol.md`。不要模拟已移除的旧版命令（`BITRATE`、`COMPLEXITY`、`NOISE`、`AGC`、`DEREVERB`、`PURGE`）。

## 6. 构建

加载 NCS v3.3.0 环境，将模块路径设置为环境变量（Kconfig 发现阶段在 CMake 之前运行），然后进行构建：

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$(pwd)

west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

根据 `CLAUDE.md`，项目构建时必须**零警告**——在提交之前修复任何编译器警告。（上面的处理程序不会引入任何警告。）

## 7. 设备端验证

烧录（注意：`west flash --reset` 在此开发板上无效——需要单独复位）：

```sh
west flash --build-dir build-clip && nrfutil device reset
minicom -D /dev/ttyACM0 -b 921600
```

然后在每种传输方式上测试该命令，并确认 JSON 完全一致：

**BLE**（交互式 shell——`clip-cli.py terminal` 会通过 BLE 打开一个 AT 提示符）：

```sh
python applications/clip/tests/tools/clip-cli.py terminal
# at the prompt:
AT+ECHO=hello      -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
```

**UDP**（WiFi AP 模式——先通过 BLE 发送 `AT+WIFI=on`，然后加入返回的 SSID/密码，并以 `192.168.4.1:8089` 为目标）：

```sh
python applications/clip/tests/tools/udp_terminal.py
AT+ECHO=hello
```

**USB CDC**（打开 CDC-ACM 串口；必须先通过 BLE 发送 `AT+USB=on` 启用 USB，或者在插入时按住用户按键）：

```sh
AT+ECHO=hello
```

三个通道上的响应字符串必须逐字节完全一致。同时确认现有命令没有回退——例如 `AT+GSTAT`、`AT+MODE?`、`AT+VERSION`。

## 8. 恢复

如果新构建行为异常，可通过 USB 串口 DFU 恢复（1200 波特触发进入 MCUboot 恢复模式，PID 为 `0x8069`）、BLE OTA 或编程器——参见 [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md)。引导加载程序分区不会被应用 OTA 覆盖；其签名由 MCUboot 验证。

## 相关文档

- 源码：[at_commands.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_commands.c)（处理程序 + `at_commands_register()`）、[at_server.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_server.c)（`parse_command`、`at_server_register_cmd`、`SEND_RESPONSE`）、[at_server.h](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/include/at_server.h)（结构体/标志/typedef 契约）。
- 协议：[protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)（AT 命令规范 + 响应契约）、[architecture.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/architecture.md)（传输/事件系统）。
- Python 一致性：[skills/clip-sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-sdk/)（`sdk/` 中的 SDK 源码、命令注册/协议文档规则）、[skills/clip-dev/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/)（固件开发技能——音频/构建/ble-at/存储/wifi-udp/mcuboot/电源/显示/硬件参考）。
- 构建/烧录/电源/常见问题：[CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md)、[custom_app_guide.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/custom_app_guide.md)、[usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md)。

## 技术支持与产品讨论

感谢您选择我们的产品！我们将为您提供多种支持，确保您在使用我们产品的过程中尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
