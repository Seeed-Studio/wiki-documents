---
description: このWikiは、MLCを使用してエッジで最適化されたAI推論を実現するために、reComputer Jetsonデバイス上でDeepSeekモデルを展開する手順を提供します。
title: MLCを使用してreComputer JetsonでDeepSeekを展開する
keywords:
- reComputer
- Jetson
- LLM
- MLC
- deepseek
image: https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.webp
slug: /ja/deploy_deepseek_on_jetson_with_mlc
last_update:
  date: 05/15/2025
  author: Youjiang
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# MLCを使用してreComputer JetsonでDeepSeekを展開する

## はじめに

DeepSeekは、効率性、精度、リアルタイム処理に最適化された最先端のAIモデルスイートです。エッジコンピューティング向けに高度に最適化されており、Jetsonデバイス上で高速で低遅延のAI推論を直接実現し、クラウドコンピューティングへの依存を減らしながら性能を最大化します。

[以前のWiki](/ja/deploy_deepseek_on_jetson)では、Jetson上でDeepSeekを展開するための簡単なガイドを提供しました。しかし、展開されたモデルは最適な推論速度を達成できませんでした。

このWikiでは、[DeepSeek](https://www.deepseek.com/)をreComputer Jetsonデバイス上で[MLC](https://llm.mlc.ai/)を使用して効率的なエッジAI推論を実現するためのステップバイステップガイドを提供します。

## 前提条件

- 8GB以上のメモリを搭載したJetsonデバイス。
- Jetsonデバイスには、Jetpack [5.1.1](https://wiki.seeedstudio.com/ja/reComputer_Intro/)以降のオペレーティングシステムが事前にフラッシュされている必要があります。

:::note
このWikiでは、[reComputer J4012 - Edge AI Computer with NVIDIA® Jetson™ Orin™ NX 16GB](https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D)を使用してこれらのタスクを達成しますが、他のJetsonデバイスを使用することも可能です。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/j4012.png" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4012-p-5586.html?qid=eyJjX3NlYXJjaF9xdWVyeSI6InJlQ29tcHV0ZXIgSjQwMTIiLCJjX3NlYXJjaF9yZXN1bHRfcG9zIjo0LCJjX3RvdGFsX3Jlc3VsdHMiOjUyLCJjX3NlYXJjaF9yZXN1bHRfdHlwZSI6IlByb2R1Y3QiLCJjX3NlYXJjaF9maWx0ZXJzIjoic3RvcmVDb2RlOltyZXRhaWxlcl0gJiYgcXVhbnRpdHlfYW5kX3N0b2NrX3N0YXR1czpbMV0ifQ%3D%3D" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong></a>
</div>

## 始めるにあたって

### ハードウェア接続
- Jetsonデバイスをネットワーク、マウス、キーボード、モニターに接続します。

:::note
もちろん、ローカルネットワーク経由でSSHを使用してJetsonデバイスにリモートアクセスすることも可能です。
:::

### JetsonのDockerをインストールおよび設定

まず、Jetson AI Labが提供する[チュートリアル](https://www.jetson-ai-lab.com/tips_ssd-docker.html)に従ってDockerをインストールします。

step1. `nvidia-container`パッケージをインストールします。

```bash
sudo apt update
sudo apt install -y nvidia-container
```

:::info
SDK Managerを使用してJetsonに**Jetson Linux (L4T) R36.x (JetPack 6.x)**をフラッシュし、aptを使用してnvidia-containerをインストールした場合、JetPack 6.xではDockerが自動的にインストールされません。

そのため、以下のコマンドを実行してDockerを手動でインストールし、設定する必要があります。
```bash
sudo apt update
sudo apt install -y nvidia-container curl
curl https://get.docker.com | sh && sudo systemctl --now enable docker
sudo nvidia-ctk runtime configure --runtime=docker
```
:::

step2. Dockerサービスを再起動し、ユーザーをdockerグループに追加します。

```bash
sudo systemctl restart docker
sudo usermod -aG docker $USER
newgrp docker
```

step3. `/etc/docker/daemon.json`にデフォルトランタイムを追加します。

```bash
sudo apt install -y jq
sudo jq '. + {"default-runtime": "nvidia"}' /etc/docker/daemon.json | \
  sudo tee /etc/docker/daemon.json.tmp && \
  sudo mv /etc/docker/daemon.json.tmp /etc/docker/daemon.json
```

step4. Dockerを再起動します。

```bash
sudo systemctl daemon-reload && sudo systemctl restart docker
```

### DeepSeekのロードと実行

`Jetson AI Lab`が提供するDockerコンテナを参照して、MLCで量子化されたDeepSeekモデルをJetson上に迅速に展開できます。
[Jetson AI Lab](https://www.jetson-ai-lab.com/index.html)ウェブサイトを開き、展開コマンドを見つけます。

`Models` --> `Orin NX` --> `docker run` --> `copy`

:::info
インストールコマンドをコピーする前に、左側の関連パラメータを変更することができます。
:::

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/deploy_deepseek.png" />
</div>

Jetsonデバイス上でターミナルウィンドウを開き、先ほどコピーしたインストールコマンドをターミナルに貼り付け、キーボードの`Enter`キーを押してコマンドを実行します。
ターミナルウィンドウに以下の内容が表示された場合、DeepSeekモデルがJetsonデバイスに正常にロードされたことを意味します。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/success_install_deepseek.png" />
</div>

この時点で、新しいターミナルウィンドウを開き、以下のコマンドを入力してモデルが正しく推論を実行できるかどうかをテストします。

:::danger
注意：DeepSeekモデルを実行しているターミナルウィンドウを閉じないでください。
:::

```bash
curl http://0.0.0.0:9000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer none" \
  -d '{
    "model": "*",
    "messages": [{"role":"user","content":"Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": false,
    "max_tokens": 100
  }'
```

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/get_response.png" />
</div>

### Open WebUIのインストール

```bash
sudo docker run -d --network=host \
    -v ${HOME}/open-webui:/app/backend/data \
    -e OLLAMA_BASE_URL=http://127.0.0.1:11434 \
    --name open-webui \
    --restart always \
    ghcr.io/open-webui/open-webui:main
```

インストーラーの実行が完了したら、ブラウザでhttp://&lt;jetsonのIP&gt;:8080にアクセスしてUIインターフェースを起動できます。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/install_webui.png" />
</div>

次に、OpenWebUIの大規模モデル推論エンジンを設定する必要があります。

`User(右上隅)` --> `Settings` --> `Admin Settings` --> `Connections`

OpenAI URLをDeepSeekがすでにロードされているローカルMLC推論サーバーに変更します。

例えば、JetsonデバイスのIPアドレスが`192.168.49.241`の場合、URLは`http://192.168.49.241:9000/v1`となります。

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/cfg_model.png" />
</div>

設定を保存した後、新しいチャットウィンドウを作成して、ローカルDeepSeekモデルの非常に高速な推論速度を体験できます！

<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/chat.png" />
</div>

### 推論速度のテスト

ここでは、このPythonスクリプトを使用してモデルの推論速度を大まかにテストできます。

Jetsonデバイス上で、新しいPythonファイル`test_inference_speed.py`を作成し、以下のコードを記入します。

その後、ターミナルで`python test_inference_speed.py`コマンドを実行してスクリプトを実行します。

<details>

<summary> test_inference_speed.py </summary>

```python
import time
import requests


url = "http://0.0.0.0:9000/v1/chat/completions"
headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer none"
}

data = {
    "model": "*",
    "messages": [{"role": "user", "content": "Why did the LLM cross the road?"}],
    "temperature": 0.6,
    "top_p": 0.95,
    "stream": True,
    "max_tokens": 1000
}

start_time = time.time()
response = requests.post(url, headers=headers, json=data, stream=True)

token_count = 0
for chunk in response.iter_lines():
    if chunk:
        token_count += 1
        print(chunk)

end_time = time.time()
elapsed_time = end_time - start_time
tokens_per_second = token_count / elapsed_time

print(f"Total Tokens: {token_count}")
print(f"Elapsed Time: {elapsed_time:.3f} seconds")
print(f"Tokens per second: {tokens_per_second:.2f} tokens/second")
```

</details>


<div align="center">
    <img width={800} 
     src="https://files.seeedstudio.com/wiki/reComputer-Jetson/deepseek/mlc/test_infer_speed.png" />
</div>

計算結果によると、Jetson Orin NXデバイスにデプロイされたMLCコンパイル済みdeepseek1.5Bモデルの推論速度は約**60 tokens/s**です。


## 効果のデモンストレーション

デモンストレーション動画では、Jetsonデバイスがわずか20W未満で動作しながら、驚異的な推論速度を達成している様子が示されています。

<div align="center">
<iframe width="800" height="450" src="https://www.youtube.com/embed/ohd_T95br90" title="deploy deepseek on jetson with mlc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## 参考文献
- https://www.jetson-ai-lab.com/models.html
- https://www.deepseek.com/
- https://wiki.seeedstudio.com/ja/deploy_deepseek_on_jetson/
- https://www.seeedstudio.com/tag/nvidia.html

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>