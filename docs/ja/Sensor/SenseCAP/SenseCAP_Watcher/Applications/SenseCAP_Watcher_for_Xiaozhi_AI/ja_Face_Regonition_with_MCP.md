---
description: 内部MCPツールを使用した顔認識のデプロイガイド
title: MCPを使用した顔認識
sidebar_position: 7
keywords:
- AI
- SenseCAP
- Watcher
- Agent
- Face
- Model
- Context
- protocol
- recognition
- MCP
- reComputer
image: http://files.seeedstudio.com/wiki/SenseCAP-Watcher-for-Xiaozhi-AI/Watcher_Agent.webp
slug: /ja/face_regonition_with_mcp
last_update:
  date: 11/25/2025
  author: Twelve
translation:
  skip: [ zh-CN ]
---
# MCPを使用した顔認識の拡張

## 概要

このガイドでは、**SenseCAP Watcher（Xiaozhi）**と**reComputer Raspberry Piシステム**を組み合わせて顔認識ワークフローをデプロイする方法を説明します。Watcherが画像をキャプチャし、内部MCPツールを使用してローカルデータベースとの顔照合のためにreComputerに送信します。

## ハードウェア準備

<table align="center">
  <tr>
    <th>SenseCAP Watcher for XiaoZhi</th>
    <th>reComputer AI R2130-12</th>
  </tr>
      <tr>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Grove/Grove4.png" style={{width:230, height:'auto'}}/></div></td>
          <td><div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr1.png" style={{width:350, height:'auto'}}/></div></td>
      </tr>
  <tr>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-XIAOZHI-EN-p-6532.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
    <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-AI-R2130-12-p-6368.html" target="_blank">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div></td>
  </tr>
</table>

## 前提条件
reComputer Raspberry Piシステムをインストールするには、このガイドに従ってください：[reComputer R2000 系列入門ガイド](https://wiki.seeedstudio.com/ja/r2000_series_getting_start/#flash-os)

## 実行結果

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr11.png" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr12.png" style={{width:400, height:'auto'}}/></div>

## ソースコードリポジトリ：

- [Xiaozhi顔認識ファームウェアコードリポジトリ](https://github.com/suharvest/xiaozhi-esp32/tree/face_rec_api)

- [顔認識API](https://github.com/suharvest/face_rec_api#)

## デプロイプロセス

### ステップ1. reComputerのIPアドレスをメモする

- reComputerをルーターなどのネットワークに接続します

- IPアドレスを取得します。ここで使用する例のIP：192.168.24.10

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr2.png" style={{width:400, height:'auto'}}/></div>


### ステップ2. Watcherにファームウェアをフラッシュする

- 底部ポートでType-Cケーブルを使用してPCをWatcherに接続します

- ESP-IDF 5.5 CMD（バージョン5.5.1）を開き、適切なフォルダに移動します

- Watcherファームウェアリポジトリをクローンします

```bash
git clone -b face_rec_api --single-branch https://github.com/suharvest/xiaozhi-esp32.git
cd xiaozhi-esp32
```

- reComputerとの通信用のコードセクションを見つけます
    - ファイルの場所：main/boards/sensecap-watcher/sscma_camera.cc（769行目）

```cpp
std::string face_rec_url = "http://192.168.10.131.80001/recognize"
```

- IPアドレスをreComputerの実際のIPに変更します

    ```cpp
    std::string face_rec_url = <Your_reComputer_actual_IP>
    ```
    - 例

    <div style={{textAlign:'left'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr4.png" style={{width:800, height:'auto'}}/></div>

- ファームウェアをコンパイルしてフラッシュします

```bash
idf.py set-target esp32s3
idf.py menuconfig    # Select SenseCAP Watcher board
idf.py build flash
```

### ステップ3. reComputerにSSH接続して環境を準備する

- SSH経由で接続します（必要に応じてユーザー名とIPを置き換えてください）

```bash
ssh <Your_reComputer's username>@<Your_reComputer's host IP>
# For example : ssh recomputer@192.168.24.10
```

:::note
reComputerへの接続には、VS Codeの**Remote - SSH**拡張機能の使用をお勧めします。
<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr10.png" style={{width:400, height:'auto'}}/></div>

:::

- Dockerをインストールしてdockerユーザーを設定します

```bash
curl -sSL https://linuxmirrors.cn/docker.sh -o install_docker.sh
sudo bash install_docker.sh
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)

sudo groupadd docker
sudo usermod -aG docker $USER
```

- システムソフトウェアを更新します

```bash
sudo apt update && sudo apt full-upgrade
sudo rpi-eeprom-update
```

- uvをインストールします

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

### ステップ4. APIをクローンして依存関係を更新する

```bash
git clone https://github.com/suharvest/face_rec_api.git
cd face_rec_api/
uv sync
```
- DKMS、HailoRTをインストールし、設定を追加して再起動します

```bash
sudo apt-get install dkms
sudo dpkg --install hailort-4.21.0/hailort_4.21.0_arm64.deb hailort-4.21.0/hailort-pcie-driver_4.21.0_all.deb
echo "options hailo_pci force_desc_page_size=4096" | sudo tee /etc/modprobe.d/hailo_pci.conf
```

- HailoRTのステータスを確認します

```bash
sudo reboot
hailortcli scan
hailortcli fw-control identify
```
    - 以下のような情報が表示されれば、ドライバーが正常にインストールされています

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr3.png" style={{width:700, height:'auto'}}/></div>

### ステップ5. 写真を追加して顔認識サービスを開始する

- photos/フォルダに写真を配置します

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr5.png" style={{width:400, height:'auto'}}/></div>

- 埋め込みを生成します

```bash
uv run scripts/batch_process.py
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr6.png" style={{width:600, height:'auto'}}/></div>

- 実行権限を付与してサービスを開始します

```bash
chmod +x start_standalone.sh
./start_standalone.sh
```

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr7.png" style={{width:600, height:'auto'}}/></div>

- サービスが実行中です。WatcherはreComputerと通信して、顔がデータベースに存在するかどうかを確認できます。`Ctrl + C`でサービスを停止できます。

- 次のようなプロンプトを追加できます：「人が検出されたら、顔認識ツールを使用して名前と信頼度を確認してください：信頼度が40%を超える場合は名前で挨拶し、そうでなければ一般的な挨拶をしてください。」

### ステップ6. 顔データベースを更新する

- サービスを停止した後、`photos/`フォルダに新しい写真を追加し、埋め込みを再生成してサービスを再起動します。

```bash
uv run scripts/batch_process.py
./start_standalone.sh
```

### ステップ7. 顔データベースをクリアする

- `photos/`フォルダ内のすべてのファイルを削除します。

- `data/`フォルダ内の`embedding.json`ファイルを削除します。

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr8.png" style={{width:400, height:'auto'}}/></div>

- クリア後、サービスを実行すると同じログが表示されます

<div style={{textAlign:'center'}}><img src="http://files.seeedstudio.com/wiki/Watcher_Agent/Face_recognition/fr9.png" style={{width:600, height:'auto'}}/></div>

## FAQ

**Q: Xiaozhi AIに顔認識APIを呼び出させるにはどうすればよいですか？**

**A:** Watcherに「顔認識システムに私が登録されているか確認してください」のような質問をするだけです。
AIは自動的にMCPツールを呼び出して顔データベースを確認します。

**Q: 顔認識システムが写真をアップロードできない場合はどうすればよいですか？**

**A:** IPアドレスが正しく、顔認識サービスが正常に動作していることを確認してください。

**Q: 顔認識システムを他のデバイスにデプロイできますか？**

**A:** はい。デバイスがLinuxベースのシステムを実行し、ネットワークに接続できる限り、デプロイに使用できます。ただし、reComputer系列はより優れた計算性能を提供します。

## 技術サポート

<div class="button_tech_support_container">
<a href="https://discord.com/invite/QqMgVwHT3X" class="button_tech_support_sensecap"></a>
<a href="https://support.sensecapmx.com/portal/en/home" class="button_tech_support_sensecap3"></a>
</div>

<div class="button_tech_support_container">
<a href="mailto:support@sensecapmx.com" class="button_tech_support_sensecap2"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
