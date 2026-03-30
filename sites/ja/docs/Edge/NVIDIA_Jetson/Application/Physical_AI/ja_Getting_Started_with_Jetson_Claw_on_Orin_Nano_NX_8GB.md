---
description: この Wiki では、Jetson Orin Nano 8GB または Orin NX 8GB 上で、nanobot、llama.cpp、ローカルの Qwen3.5 4B GGUF モデル、および Feishu 制御を用いた Jetson-Claw スターター環境を構築する方法を説明します。
title: Orin Nano / NX 8GB での Jetson-Claw 入門
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/openclaw/soarm_claw.webp
slug: /getting_started_with_jetson_claw_on_orin_nano_nx_8gb
sku: 114110312 | 114110313
last_update:
  date: 03/26/2026
  author: Dayu
createdAt: '2026-03-26'
url: https://wiki.seeedstudio.com/ja/getting_started_with_jetson_claw_on_orin_nano_nx_8gb/
updatedAt: '2026-03-26'
---

# Orin Nano / NX 8GB での Jetson-Claw 入門

この Wiki では、**Jetson Orin Nano 8GB** と **Jetson Orin NX 8GB** 向けの実用的な Jetson-Claw スタータービルドを順を追って解説します。スタック全体は Jetson 上でローカルに動作します。`nanobot` をインストールし、モデル読み込みを安全に行うためにスワップ領域を拡張し、CUDA 対応で `llama.cpp` をコンパイルし、`Qwen3.5 4B` GGUF モデルをダウンロードし、`nanobot` のバックエンドをローカルの `llama.cpp` に切り替え、最後にボットを **Feishu** に接続してチャットから制御できるようにします。

より大規模な OpenClaw デプロイと比べると、このエントリーレベルの Jetson-Claw セットアップには **nanobot** の方が適しています。はるかに軽量で起動が速く、コードが読みやすく変更しやすい上に、すでに **Feishu** と **OpenAI 互換のローカルバックエンド** をサポートしているためです。8 GB の Jetson では、ランタイムのオーバーヘッドが小さいほどローカルモデルに割けるメモリが増えます。後から、より大きなプラグインエコシステムや重いマルチコンポーネントワークフローが必要になった場合は、OpenClaw へ移行することもできます。

## 作成するもの

- `nanobot` をベースにした軽量ローカル AI アシスタント
- Jetson 上で動作する `llama.cpp` の OpenAI 互換 HTTP サーバ
- ローカルの `Qwen3.5 4B` GGUF モデル
- プライベートチャットやグループでのメンションから制御できる、Feishu 接続済み Jetson ボット

## 前提条件

- Jetson Orin Nano 8GB または Jetson Orin NX 8GB を 1 台
- JetPack 6.x がすでにインストールされていること
- パッケージおよびモデルをダウンロードするためのインターネット接続
- 少なくとも 20 GB の空きストレージを推奨

このガイドでは、リファレンスとなる Jetson プラットフォームとして **reComputer Super J3011** を使用します：

<div align="center">
    <img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/2/-/2-114110311-recomputer-super-j3010-nano-8g.jpg" style={{width:400, height:'auto'}}/>
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Super-J3011-p-6444.html">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
</div>

:::info
`nanobot` は現在 Python 3.11 以降を必要とするため、このガイドでは Jetson のデフォルトのシステム Python ではなく Miniconda 環境を使用します。
:::

## ステップ 1. nanobot をインストールする

まずシステム依存パッケージと Miniconda をインストールします：

```bash
sudo apt update
sudo apt install -y git curl wget build-essential cmake libcurl4-openssl-dev python3-pip

wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-aarch64.sh
chmod +x Miniconda3-latest-Linux-aarch64.sh
./Miniconda3-latest-Linux-aarch64.sh
source ~/.bashrc
```

クリーンな Python 3.11 環境を作成し、`nanobot` をインストールします：

```bash
conda create -y -n jetson-claw python=3.11
conda activate jetson-claw
pip install -U pip
pip install nanobot-ai
```

ランタイムディレクトリを初期化します：

```bash
nanobot onboard
```

初期化後、メインの設定ファイルは次の場所にあります：

```bash
~/.nanobot/config.json
```

:::note
`nanobot` は OpenClaw に着想を得ていますが、Orin Nano / NX 8GB では通常、より良い出発点となります。メモリオーバーヘッドが小さく、起動が速く、デバッグすべきコンポーネントも少ないためです。
:::

## ステップ 2. スワップ領域を増やす

8 GB の Jetson で 4B のローカルモデルを動かす場合、スワップを追加するとはるかに安定します。これはモデルの読み込み、コンパイル、および長いコンテキストでの推論時に役立ちます。

```bash
sudo fallocate -l 8G /var/swapfile
sudo chmod 600 /var/swapfile
sudo mkswap /var/swapfile
sudo swapon /var/swapfile
echo '/var/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
swapon --show
```

より大きなコンテキストサイズや他のモデルを試す予定がある場合は、スワップをさらに増やしてもかまいません。

## ステップ 3. CUDA 対応で llama.cpp をコンパイルする

CUDA のパスを設定します：

```bash
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

`llama.cpp` をクローンしてビルドします：

```bash
git clone https://github.com/ggml-org/llama.cpp.git ~/llama.cpp
cd ~/llama.cpp
cmake -B build -DGGML_CUDA=ON -DCMAKE_BUILD_TYPE=Release
cmake --build build --parallel
```

コンパイル後、メインの実行ファイルは次のディレクトリに配置されます：

```bash
~/llama.cpp/build/bin
```

サーバ用バイナリが準備できているかどうかは、次のコマンドですぐに確認できます：

```bash
~/llama.cpp/build/bin/llama-server --help
```

## ステップ 4. Qwen3.5 4B GGUF の重みをダウンロードする

このガイドでは、8 GB の Jetson デバイスにおけるメモリ使用量と応答品質の実用的なバランスを考慮し、`Q4_K_M` GGUF 量子化を使用します。

Hugging Face CLI をインストールします：

```bash
conda activate jetson-claw
pip install -U "huggingface_hub[cli]"
mkdir -p ~/llama.cpp/models/Qwen3.5-4B-GGUF
```

次に、以下のモデルページを開き、`Q4_K_M` GGUF ファイルを `~/llama.cpp/models/Qwen3.5-4B-GGUF/` にダウンロードします：

- https://huggingface.co/unsloth/Qwen3.5-4B-GGUF/tree/main

Hugging Face のページで **`Qwen3.5-4B.Q4_K_M.gguf`** ファイルを選択します：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/Jetson/claw/gguf.jpg" />
</div>

リポジトリがこのガイドの例と同じファイル名を使用している場合は、次のコマンドでダウンロードすることもできます：

```bash
huggingface-cli download \
  unsloth/Qwen3.5-4B-GGUF \
  Qwen3.5-4B.Q4_K_M.gguf \
  --local-dir ~/llama.cpp/models/Qwen3.5-4B-GGUF
```

ファイル名が異なる場合は、後述の起動コマンド内のパスだけを更新してください。この例では、モデルファイルを次のように仮定します：

```bash
~/llama.cpp/models/Qwen3.5-4B-GGUF/Qwen3.5-4B.Q4_K_M.gguf
```

## ステップ 5. ローカルバックエンドとして llama.cpp を起動する

ローカルの OpenAI 互換 API サーバを起動します：

```bash
conda activate jetson-claw
cd ~/llama.cpp
./build/bin/llama-server \
  -m ~/llama.cpp/models/Qwen3.5-4B-GGUF/Qwen3.5-4B.Q4_K_M.gguf \
  --alias qwen3.5-4b-local \
  -t 6 \
  -c 40960 \
  --n-gpu-layers 40 \
  --reasoning off \
  --reasoning-format none \
  --host 127.0.0.1 \
  --port 8080
```

推奨パラメータの補足：

- `--alias qwen3.5-4b-local`: ローカルモデルに `nanobot` 用の分かりやすい API モデル名を付けます
- `-t 6`: エントリーレベルの Jetson デバイス向けに、適度な数の CPU スレッドを使用します
- `-c 40960`: 大きなコンテキストウィンドウを提供しますが、メモリが厳しい場合は減らして構いません
- `--n-gpu-layers 40`: 可能な限り多くのレイヤーを Jetson GPU にオフロードします
- `--reasoning off`: 出力をシンプルに保ち、スターター環境では不要なオーバーヘッドを抑えます

メモリ不足が原因でサーバの起動に失敗する場合は、まず `-c` を `16384` に下げ、それでもだめなら `--n-gpu-layers` をさらに減らしてみてください。

別のターミナルで、API を検証します：

```bash
curl http://127.0.0.1:8080/v1/models
```

## ステップ 6. nanobot を llama.cpp を使うように設定する

設定ファイルを開きます：

```bash
nano ~/.nanobot/config.json
```

次に、以下のセクションを設定にマージします：

```json
{
  "agents": {
    "defaults": {
      "workspace": "~/.nanobot/workspace",
      "model": "qwen3.5-4b-local",
      "provider": "custom",
      "maxTokens": 8192,
      "contextWindowTokens": 40960,
      "temperature": 0.1,
      "maxToolIterations": 40,
      "reasoningEffort": null
    }
  },
  "channels": {
    "sendProgress": true,
    "sendToolHints": false,
    "feishu": {
      "enabled": true,
      "appId": "cli_xxx",
      "appSecret": "xxx",
      "encryptKey": "",
      "verificationToken": "",
      "allowFrom": ["*"],
      "reactEmoji": "THUMBSUP",
      "groupPolicy": "mention",
      "replyToMessage": false
    }
  },
  "providers": {
    "custom": {
      "apiKey": "no-key",
      "apiBase": "http://127.0.0.1:8080/v1",
      "extraHeaders": null
    }
  },
  "gateway": {
    "host": "0.0.0.0",
    "port": 18790
  }
}
```

この設定が機能する理由：

- `provider: "custom"` は、`nanobot` に任意の OpenAI 互換バックエンドを使用するよう指示します
- `apiBase: "http://127.0.0.1:8080/v1"` はローカルの `llama-server` を指します
- `model: "qwen3.5-4b-local"` は、`llama.cpp` 起動時に指定した `--alias` の値と一致させます

:::warning
簡単なテスト用途では、`allowFrom: ["*"]` は便利です。本番利用では、検証後に自分の Feishu の `open_id` に置き換えてください。
:::

## ステップ 7. Feishu を nanobot に接続する

Feishu Open Platform で Feishu アプリケーションを作成します：

- https://open.feishu.cn/app を開く
- ボットアプリケーションを作成するか開く
- **App ID** と **App Secret** をコピーする
- それらを `channels.feishu.appId` と `channels.feishu.appSecret` に貼り付ける

Long Connection モードでは、`encryptKey` と `verificationToken` は空のままで構いません。

後から認証情報が見つからない場合は、次の場所に移動します：

- Feishu Open Platform
- 自分のアプリケーション
- `Credentials & Basic Info`

### Feishu の権限をインポートする

ファイル、画像、リッチメッセージの処理を正しく動作させるには、次の場所で以下の権限セットをインポートします：

- Feishu Open Platform
- 自分のアプリケーション
- `Permission Management`
- `Bulk Import`

```json
{
  "scopes": {
    "tenant": [
      "aily:file:read",
      "aily:file:write",
      "application:application.app_message_stats.overview:readonly",
      "application:application:self_manage",
      "application:bot.menu:write",
      "cardkit:card:write",
      "contact:user.employee_id:readonly",
      "corehr:file:download",
      "docs:document.content:read",
      "event:ip_list",
      "im:chat",
      "im:chat.access_event.bot_p2p_chat:read",
      "im:chat.members:bot_access",
      "im:message",
      "im:message.group_at_msg:readonly",
      "im:message.group_msg",
      "im:message.p2p_msg:readonly",
      "im:message:readonly",
      "im:message:send_as_bot",
      "im:resource",
      "sheets:spreadsheet",
      "wiki:wiki:readonly"
    ],
    "user": [
      "aily:file:read",
      "aily:file:write",
      "im:chat.access_event.bot_p2p_chat:read"
    ]
  }
}
```

権限をインポートしたら：

- 新しいアプリバージョンを作成する
- アプリバージョンを公開する

そうしないと、新しく追加した権限が有効にならない場合があります。

## ステップ 8. nanobot を起動し、Feishu からの制御をテストする

1 つのターミナルで `llama-server` を動かしたまま、別のターミナルで `nanobot` を起動します：

```bash
conda activate jetson-claw
nanobot gateway
```

便利な確認方法：

```bash
nanobot status
nanobot channels status
```

次に、Feishu からボットにメッセージを送信します：

- プライベートチャットでダイレクトメッセージを送る
- グループチャットでは、`groupPolicy: "mention"` を維持している場合はボットにメンションしてください

もし `allowFrom: ["*"]` を使用している場合、ボットはすぐに返信するはずです。後からアクセスを制限したくなったら、まず 1 件メッセージを送り、`nanobot` のログで自分の `open_id` を確認し、その値で `["*"]` を置き換えてください。

## オプション：サンプル Jetson-Claw スキルを追加する

このスターターセットアップを、より実用的な Jetson-Claw デモにしたい場合は、サンプルスキルセットを追加できます：

```bash
git clone https://github.com/jjjadand/JetsonClaw-SKILLS.git ~/JetsonClaw-SKILLS
mkdir -p ~/.nanobot/workspace/skills
cp -r ~/JetsonClaw-SKILLS/person-detection ~/.nanobot/workspace/skills/
```

その後 `nanobot gateway` を再起動し、Jetson に USB カメラを接続して、カメラの前に人が見えているかどうかを Feishu でボットに尋ねてください。

### Feishu 監視フローの例

スキルをインストールした後、Feishu アプリからリクエストを送信して、Jetson-Claw にカメラ映像を確認させることができます：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/Jetson/claw/ask.png" />
</div>

人が検出されない場合、監視結果は次のようになります：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/Jetson/claw/no-person.png" />
</div>

人が検出された場合、Jetson-Claw は Feishu を通じてアラートを返すことができます：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/Jetson/claw/have-person.png" />
</div>

監視スキルは、取得した結果画像を送り返すこともできます：

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/Jetson/claw/monitor-res.jpg" />
</div>

## トラブルシューティング

- `nanobot` のインストールに失敗する：Python 3.11 環境内にいることを確認してください
- モデル読み込み中に `llama-server` が終了する：スワップを増やすか、`-c` を減らしてください
- Feishu ボットが返信しない：App ID、App Secret、インポートした権限、および公開済みアプリバージョンを確認してください
- グループメッセージでボットが反応しない：`groupPolicy` を確認し、ボットにメンションしていることを確認してください
- 応答が遅い：コンテキストサイズを小さくする、同時利用を減らす、またはより小さい量子化モデルを使用してください

## 参考情報

- https://github.com/HKUDS/nanobot
- https://github.com/ggml-org/llama.cpp
- https://huggingface.co/unsloth/Qwen3.5-4B-GGUF/tree/main
- https://open.feishu.cn/app
- https://github.com/jjjadand/JetsonClaw-SKILLS
- https://wiki.seeedstudio.com/ja/local_openclaw_on_recomputer_jetson/

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。弊社は、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
