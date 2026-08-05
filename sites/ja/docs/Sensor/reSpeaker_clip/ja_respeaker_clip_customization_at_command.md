---
description: "Clip に新しい AT コマンドを追加するための、具体的でエンドツーエンドな手順ガイド"
title: "カスタマイズ：カスタム AT コマンドを追加する"
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
updatedAt: '2026-07-27'
url: https://wiki.seeedstudio.com/ja/respeaker_clip_customization_at_command/
---

# カスタマイズ：カスタム AT コマンドを追加する

Clip ファームウェアに **新しい** AT コマンドを追加するための、具体的でエンドツーエンドな手順ガイドです。ここでは、`AT+ECHO=<msg>` という、単純だが実用的なコマンドを追加し、次のような応答を返すようにします：

```json
{"ok":true,"data":{"echo":"<msg>"}}\n
```

同じ手順を使って、設定・ストレージ・オーディオ・イベントシステムに触れる本格的なコマンドにも拡張できます。

## AI プロンプト

このプロンプトを AI コーディングエージェントにコピーすることで、ファームウェアリポジトリ内で同じカスタマイズワークフローを再現できます：

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

## 1. 目標

`AT+ECHO=<msg>` を追加し、次のようになるようにします：

```
AT+ECHO=hello     -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
```

これは意図的に最小構成です：小さな EXEC 用の使用方法ヒントを持つ 1 つの SET コマンドで、副作用はなく、3 つすべてのトランスポートで検証可能です。`ECHO` は、登録済みのどのコマンドとも衝突しません（後述の `at_commands_register()` 内のレジストリを参照してください）。

## 2. 現在のデータフロー

受信した AT 行は、次のレイヤーを通過します（関数名は実際のものです）：

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

カスタマイズする人にとって重要なのは 2 点です：

- **パースは共通化されています。** `parse_command()`（at_server.c）が `AT+NAME=args` の文法と、`=`・`?` によるタイプ検出を担います。`AT+` プレフィックスを自分でパースすることは決してありません — ハンドラが受け取るときには、`ctx->args` はすでに分割済みです。
- **レスポンスは自動ルーティングされます。** `at_server.c` の `SEND_RESPONSE()` マクロは、コマンドが発行されたトランスポートに応じてディスパッチします：`TRANSPORT_TYPE_USB` -> `usb_cdc_send_response()`、`TRANSPORT_TYPE_UDP` -> `transport_udp_send_response()`、それ以外 -> `transport_send_to(item->transport_type, ...)`。ハンドラはレスポンスバッファを埋めるだけで、トランスポート処理は **一切行いません**。同じ JSON が BLE・UDP・USB のすべてで同一に送信されます。

## 3. 拡張ポイント：登録パターン

以下はすべて実際のソースからの引用です。この契約は `applications/clip/include/at_server.h` に定義されています。

### 3.1 ハンドラのシグネチャ

`at_server.h` より：

```c
typedef int (*at_cmd_handler_t)(struct at_cmd_ctx *ctx, char *response, size_t len);
```

ハンドラが受け取るコンテキスト（`at_server.h`）：

```c
struct at_cmd_ctx {
    const char *name;           /* Command name (e.g., "ECHO") */
    uint8_t type;               /* Command type (SET/QUERY/EXEC) */
    const char *args;           /* Arguments string */
    uint8_t transport_type;     /* Transport type for response */
};
```

`ctx->type` は `AT_CMD_TYPE_TEST` (0)、`AT_CMD_TYPE_SET` (1)、`AT_CMD_TYPE_EXEC` (2) のいずれかです — さらに `AT_CMD_TYPE_READ` (3、TEST と同じ) もあります。引数は `ctx->args` に入っています（すでに `=` の後ろの部分です）。まったく同じ形を使っている実際のハンドラが `cmd_mode_handler` です（at_commands.c:422）：

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

### 3.2 `create_json_response` ヘルパー

`at_commands.c` より（すべてのハンドラが使う static ヘルパー）：

```c
static int create_json_response(bool success, const char *message,
                                const char *data, char *response, size_t len);
```

挙動（本体から読み取れる内容）：

- `{"ok":true` または `{"ok":false` を出力します。
- `message` が非 NULL の場合、`,"msg":"<message>"` を追加します。
- `data` が非 NULL の場合、`,"data":<data>` を **そのまま** 追加します — `data` は自分で整形した **完全な JSON オブジェクト**（例：`{"echo":"hello"}`）でなければならず、生の値やフォーマット文字列であっては **いけません**。ここがよくある落とし穴です。
- 最後に `}\n` で閉じて合計長を返します。切り詰めが発生した場合は `AT_ERR_NOMEM` を返します。サーバースレッドは `ret < 0` をエラーとして扱い、代わりに `at_server_err_msg(-ret)` を差し込みます。

したがってレスポンスの形は固定です：成功時 -> `{"ok":true,...,"data":{...}}`、失敗時 -> `{"ok":false,...,"msg":"..."}`。数値のエラーコードや `error` フィールドは存在しません（[protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md) を参照）。

### 3.3 コマンド構造体と登録

`at_server.h` より：

```c
struct at_command {
    const char *name;           /* Command name */
    uint8_t flags;              /* Supported operations */
    at_cmd_handler_t handler;   /* Command handler */
};
```

フラグ（ビットマスク；`at_server.h`）：

```c
#define AT_CMD_SET    (1 << 0)  /* Supports AT+CMD=... */
#define AT_CMD_QUERY  (1 << 1)  /* Supports AT+CMD?      */
#define AT_CMD_EXEC   (1 << 2)  /* Supports AT+CMD       */
```

登録処理（at_server.c） — レジストリは 32 コマンドに制限されている点に注意してください：

```c
int at_server_register_cmd(const struct at_command *cmd);
```

実際の登録ブロック（`at_commands.c:1769` にそのまま存在するもの）：

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

## 4. 変更するファイル

ソースファイルは 1 つだけです：`applications/clip/src/at_commands.c`。

### 4.1 ハンドラを追加する

他の `static int cmd_*_handler(...)` 定義の中に配置します（既存のハンドラは `at_commands_register()` の上にあります）。`cmd_mode_handler` をモデルにします：

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

> **実際のコマンドでの注意点:** `ctx->args` は生のユーザー入力です。この単純な例のように `%s` で埋め込むと、メッセージ内の `"` によって JSON が壊れる可能性があります。自由形式の文字列を受け付けるコマンドでは、まず入力を検証／エスケープしてください。`MODE` や `LOG` など、出荷済みのコマンドで `%s` を使っているものは、あらかじめ検証済みの固定列挙値に対してのみ使用しています。

### 4.2 登録する

`at_commands_register(void)` 内（at_commands.c:1761）— すべてのコマンドを登録する単一の初期化関数であり、自身は `main.c` から 1 回だけ呼ばれます（main.c:286 の `at_commands_register()`）。他のブロックと並べて追加します（例：at_commands.c:2030 付近の `LOG` ブロックの直後など）：

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

`AT_CMD_EXEC` は必須です。これは、ハンドラが素の `AT+ECHO` に対して、使いやすい使用方法メッセージを返すように意図されているためです。登録で `AT_CMD_SET` のみを指定した場合、ディスパッチャはハンドラが実行される前に `AT+ECHO` を拒否してしまいます。サーバーはレスポンスを自動ルーティングするため（セクション 2 参照）、BLE/UDP/USB のコード変更は不要です。

## 5. 互換性への影響

コマンドの追加は **加算的** な変更です — 既存のコマンドやその JSON 形式には一切手を加えません。レスポンスの契約はそのまま維持してください：

- 成功: `{"ok":true,"data":{...}}`
- 失敗: `{"ok":false,"msg":"..."}`
- 数値のエラーコードなし、リクエスト ID なし、`error` フィールドなし。（[protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md) を参照。）

新しいコマンドをホストツールからも利用可能にする必要がある場合、必要なのはファームウェアだけでなく **Python SDK との同等性** です。`skills/clip-sdk/` のルールに従い、SDK を変更する前に現在の `at_commands.c` の登録内容を読み、`docs/protocol.md` とファームウェアソースをプロトコル契約として扱ってください — ファームウェアの契約が変わった場合は、SDK（`sdk/` 内）と `protocol.md` の両方を更新します。削除されたレガシーコマンド（`BITRATE`、`COMPLEXITY`、`NOISE`、`AGC`、`DEREVERB`、`PURGE`）をエミュレートしないでください。

## 6. ビルド

NCS v3.3.0 の環境を source し、モジュールパスを環境変数として設定してからビルドします（Kconfig の検出は CMake より前に実行されます）:

```sh
source ~/ncs/v3.3.0/zephyr/zephyr-env.sh
export ZEPHYR_EXTRA_MODULES=$(pwd)

west build --build-dir build-clip --pristine --board clip/nrf5340/cpuapp applications/clip
```

`CLAUDE.md` に従い、このプロジェクトは **警告ゼロ** でビルドされます — コミットする前に、コンパイラ警告は必ず修正してください。（上記のハンドラは警告を一切追加しません。）

## 7. デバイス上での検証

フラッシュします（注意: `west flash --reset` はこのボードでは動作しません — リセットは別途行ってください）:

```sh
west flash --build-dir build-clip && nrfutil device reset
minicom -D /dev/ttyACM0 -b 921600
```

その後、各トランスポートでコマンドを実行し、JSON が同一であることを確認します:

**BLE**（対話型シェル — `clip-cli.py terminal` は BLE 経由で AT プロンプトを開きます）:

```sh
python applications/clip/tests/tools/clip-cli.py terminal
# at the prompt:
AT+ECHO=hello      -> {"ok":true,"data":{"echo":"hello"}}
AT+ECHO           -> {"ok":false,"msg":"Use AT+ECHO=<msg>"}
AT+ECHO=          -> {"ok":false,"msg":"Missing message"}
```

**UDP**（WiFi AP モード — まず BLE 経由で `AT+WIFI=on` を送信し、返された SSID/パスワードに接続して `192.168.4.1:8089` をターゲットにします）:

```sh
python applications/clip/tests/tools/udp_terminal.py
AT+ECHO=hello
```

**USB CDC**（CDC-ACM シリアルポートを開きます。USB を有効にするには、事前に BLE 経由で `AT+USB=on` を送信するか、接続時にユーザーボタンを押し続けます）:

```sh
AT+ECHO=hello
```

レスポンス文字列は、3 つすべてでバイト単位で一致していなければなりません。また、既存のコマンドにリグレッションがないことも確認してください — 例: `AT+GSTAT`、`AT+MODE?`、`AT+VERSION`。

## 8. リカバリ

新しいビルドの動作がおかしい場合は、USB シリアル DFU（1200 ボーントリガーで MCUboot リカバリに入る、PID `0x8069`）、BLE OTA、またはプログラマ経由で復旧します — [usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md) を参照してください。ブートローダパーティションはアプリの OTA では決して書き換えられません。署名は MCUboot によって検証されます。

## 関連情報

- ソース: [at_commands.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_commands.c)（ハンドラ + `at_commands_register()`）、[at_server.c](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/src/at_server.c)（`parse_command`、`at_server_register_cmd`、`SEND_RESPONSE`）、[at_server.h](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/applications/clip/include/at_server.h)（struct/flag/typedef 契約）。
- プロトコル: [protocol.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/protocol.md)（AT コマンド仕様 + レスポンス契約）、[architecture.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/architecture.md)（トランスポート/イベントシステム）。
- Python との同等性: [skills/clip-sdk/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-sdk/)（`sdk/` 内の SDK ソース、コマンド登録/プロトコルドキュメントのルール）、[skills/clip-dev/](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/skills/clip-dev/)（ファームウェア開発スキル — audio/build/ble-at/storage/wifi-udp/mcuboot/power/display/hardware への参照）。
- ビルド/フラッシュ/電源/落とし穴: [CLAUDE.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/CLAUDE.md)、[custom_app_guide.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/custom_app_guide.md)、[usb_dfu.md](https://github.com/Seeed-Studio/reSpeaker_Clip/blob/main/docs/usb_dfu.md)。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
