---
description: MeshCore ノード上で MeshCore Remote Terminal を使用して MQTT を監視／可視化／実行するためのガイド。
title: MeshCore Remote Terminal を使い始める
keywords:
  - MeshCore
  - ESP32 MeshCore
  - MeshCore mqtt
  - MeshCore Starter Kit
  - MeshCore network
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png
slug: /get_started_with_meshcore_remote_terminal
sku: 102010611,113110064
sidebar_position: 4
last_update:
  date: 4/20/2026
  author: Michelle Huang
createdAt: '2026-04-20'
updatedAt: '2026-07-31'
url: https://wiki.seeedstudio.com/ja/get_started_with_meshcore_remote_terminal/
---
この wiki では、[Remote Terminal for MeshCore](https://github.com/jkingsman/Remote-Terminal-for-MeshCore)（RemoteTerm）を紹介し、[MeshCore](https://meshcore.io/) デバイスがメッセージを送信するためのインターフェースを提供します。本チュートリアルでは、[Seeed XIAO ESP32S3 & SX1262 Kit](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) をコンパニオン無線機として使用し、[Raspberry Pi Zero 2W](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) 上で RemoteTerm を実行するための基本的なセットアップを説明します。これにより、パワーユーザー向けのコンパクトなオールインワン MeshCore ソリューションが実現します。

## RemoteTerm の概要

[RemoteTerm](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) は、MeshCore デバイスを接続したサーバー上で動作するオープンソースアプリケーションです。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/first.png" style={{width:900, height:'auto'}}/></div>

これによりローカル MeshCore ネットワークへのインターフェースが提供され、同じローカルネットワーク上の任意のデバイス（オフグリッドであっても）が無線経由でメッセージを送受信できるようになります。RemoteTerm はモバイル端末との相性が非常に良く、次のような追加機能を利用できます：

- 受信したすべてのパケットのキャッシュ
- 複数の Python ボットの実行
- 無制限のコンタクトとチャンネルの監視 
- ネットワークまたは VPN 経由で無線機へリモートアクセス
- パケットを MQTT、SQS、Apprise などへ転送
- メッシュノードマップの可視化

## セットアップ

### ハードウェア

<table align="center">
<tbody><tr>
<th>XIAO ESP32S3 & Wio-SX1262 Kit</th>
<th>Raspberry Pi Zero 2W</th>
</tr>
<tr>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Applications/Meshtastic/t2.jpg" style={{width:600, height:'auto'}}/></div></td>
<td><div align="center"><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/ZERO2W.jpg" style={{width:600, height:'auto'}}/></div></td>
</tr>
<tr>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html" target="_blank">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div></td>
<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>
<a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html" target="_blank" rel="noopener noreferrer">
<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>
</a>
</div></td>
</tr>
</tbody></table>

メインハードウェアに加えて、以下のアクセサリが必要です：

- 16GB 以上の MicroSD カード
- USB Micro - USB-C ケーブル（無線機を接続するため）
- USB Micro - USB-A または USB-C ケーブル（Raspberry Pi に給電するため）
-  Raspberry Pi 用の安定した電源（5V 2.5A 推奨）

### 無線機のセットアップ

- Seeed の [XIAO ESP32S3 ボード](https://www.seeedstudio.com/Wio-SX1262-with-XIAO-ESP32S3-p-5982.html) と SX1262 モジュールを B2B カプラで接続します。
- LoRa アンテナを SX1262 に取り付けます。
- コンピュータに接続し、[web flasher](https://meshcore.io/flasher) を使って "Seeed Studio Xiao S3 WIO"（Serial Companion）を書き込みます。 

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Firmware.png" style={{width:900, height:'auto'}}/></div>

:::tip
 このチュートリアルでは、シリアルコンパニオンのセットアップ方法を説明します。TCP および Bluetooth コンパニオンも RemoteTerm でサポートされていますが、セットアップはやや複雑です。 
:::

### Pi のセットアップ

- [ここをクリック](https://www.raspberrypi.com/software/)して Raspberry Pi Imager をダウンロードします
- Imager を開き、Raspberry Pi のモデルを選択し、「Raspberry Pi OS Lite (64 bit)」を選択します
- SSH をパスワード（必要に応じて鍵）で有効化し、Wi-Fi 接続を設定します
- ESP32 MeshCore を [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-Zero-2-W-p-5197.html) に接続します 

:::warning
ESP32 LoRa Mesh ノードが `POWER` ポートではなく `USB` に接続されていることを確認してください 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/USB.png" style={{width:900, height:'auto'}}/></div>
:::

右角アダプタを使用した完全な組み立ては、次のようになります：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/HardwareInstallation.png" style={{width:500, height:'auto'}}/></div>

- Pi の `POWER` ポートに電源を接続します
- 自宅のルーターの管理インターフェースを使用して、Raspberry Pi に割り当てられたアドレスを確認します。IP アドレスが変わらないように DHCP 予約を割り当てることを検討してください。

### Pi の設定

- Raspberry Pi へ SSH セッションを開きます
- 無線機が認識されていることを確認します。`find /dev/serial/by-id -maxdepth 1 -type l -print | sort` を実行すると、`/dev/serial/by-id/usb-Espressif_USB_JTAG_serial_debug_unit_XX:XX:XX:XX:XX:XX-if00` のような一覧が表示されるはずです
- 更新とアップグレードを行います
    ```bash
    sudo apt update                        # update package repositories
    sudo apt upgrade -y                    # upgrade packages
    sudo apt-get install -y git            # install git
    curl -fsSL https://get.docker.com | sh # install docker
    ```
- クローンと起動
    ```bash
    git clone https://github.com/jkingsman/Remote-Terminal-for-MeshCore.git
    cd Remote-Terminal-for-MeshCore/

    # configure the docker setup
    ./scripts/setup/install_docker.sh
    ```

#### 設定オプションの解説

[README](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README.md) と [ブログ](https://jacksbrain.com/2026/04/meshcore-management-remoteterm-seeed-xiao-esp32s2-sx1262/) には、より詳細なセットアップ手順が記載されています

### サーバーの起動
#### 設定

セットアップスクリプトで dockerfile の設定が完了したら、次を実行します

```bash
sudo docker compose up -d
```

これでサーバーが起動します。次のコマンドも役に立つかもしれません：

```bash
sudo docker compose up -d    # start RemoteTerm in the background
sudo docker compose logs -f  # follow the container logs live
sudo docker compose down     # stop and remove the running container
sudo docker compose restart  # restart the container without changing the image
sudo docker compose pull && sudo docker compose up -d   # upgrade to the latest published image and restart
```

:::warning
RemoteTerm は無線機を**完全に**管理します。つまり、一度無線機を RemoteTerm に接続すると、すべてのコンタクト／チャンネルが RemoteTerm にインポートおよびオフロードされ、実際にデバイスと同期されるコンタクトは RemoteTerm によって制御されます。 
:::

:::note

**ホットスポット設定（オプション）**

これは任意の設定であり、自宅から離れて使用する無線機にのみ推奨されます。この設定を行うと、無線機は自宅の Wi-Fi から切断されますが、自身の Wi-Fi をブロードキャストし始めるため、インターネット接続がなくてもアクセスできるようになります。

- ホットスポットを設定します

  ```bash
  sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
  ```

- 新しい Wi-Fi ネットワークに接続し、再度 Pi に SSH 接続する必要がある場合があります。Pi の URL は、新しいネットワークに接続した際の Wi-Fi 設定における「デフォルトゲートウェイ」となります。

- 起動時にホットスポットをブロードキャストするように設定します

  ```bash
  nmcli connection
  # grab the UUID of the Hotspot connection
  sudo nmcli connection modify <hotspot UUID> connection.autoconnect yes connection.autoconnect-priority 100
  ```
:::

## RemoteTerm を使い始める

### メイン画面

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/main_screen.png" style={{width:900, height:'auto'}}/></div>

RemoteTerm のメイン画面には、既知のチャンネル、リピーター、ルームサーバーの一覧が表示され、上部にはお気に入り用のスペースがあります。任意のコンタクトまたはチャンネルをクリックするとメッセージの送受信を開始でき、リピーターをクリックするとログインして管理インターフェースを表示できます。画面上部の緑色のボタンからチャンネルやコンタクトを追加できます。

コンタクトリストの上には、次のツールがあります：

|一般項目          |機能|
|---------------|-------------------------|
|Packet Feed   |受信した生パケットを到着順に表示|
|Node Map      |ノードの位置を可視化|
|Mesh Visualizer|ノードとトラフィックをリアルタイムに 3D 表示するカスタマイズ可能なビジュアライザ|
|Trace          |リピーター間でマルチホップトレースを実行し、信号強度情報を取得|
|Message Search |チャンネルおよびメッセージ履歴から単語やフレーズを検索|
|Channel Finder |復号されていないが受信されたパケットに対して、チャンネル名を特定するチャンネルファインダー|

### メッセージング（チャンネル）

チャンネルを作成または参加するには、アプリのメインメニュー左上にある「Add Channel/Contact」ボタンをクリックします。キーのみで識別されるプライベートチャンネルや、名前を #hashtag として指定する Hashtag チャンネルには、表示されるメニューから参加できます。

Public チャンネルは、すべての新しい RemoteTerm インスタンスに自動的に追加されます。ローカルメッシュには、Public、#test や #testing、#bots や #bot など、アクティブなチャンネルが存在することが多いでしょう。これらは、使い始めたり、初心者向けの良いローカルルームを案内してくれる人を見つけたりするのに適した場所です。

チャンネルを選択すると、画面は次のようになります：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/channel.png" style={{width:900, height:'auto'}}/></div>

ステータスバーには次の項目があります：

|アイコン|機能|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|通知を設定します。デスクトップ通知（ブラウザを開いている必要があります）または Web Push（ブラウザを閉じていても配信可能）を選択できます。これらには信頼された HTTPS コンテキストが必要です（インストーラーで利用可能な snakeoil 証明書が通知に十分かどうかは、OS やブラウザによって異なります）|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/earth.png" style={{width:50, height:'auto'}}/></div>|リージョナルルーティングのオーバーライドを有効にし、このチャンネルでメッセージを送信する際に無線機の地域的な範囲を制限します。対応する、または異なるリージョン設定を持つユーザーは、それぞれあなたのメッセージを表示したり自動的に無視したりできます|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/chevrons-left-right.png" style={{width:50, height:'auto'}}/></div>|無線機のデフォルトとは別に、チャンネルごとのホップ幅オーバーライドを設定できます|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|チャンネルをお気に入りに追加または削除します|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|チャンネルを削除しますが、後で再追加した場合に備えてメッセージ履歴は保持されます|
|Room Key|指定されたルームの MeshCore キーを表示します|

左上隅にはチャンネル名と情報アイコンがあり、これをクリックすると、そのチャンネルがどれくらいアクティブか、誰がメッセージを送信しているか、そのキー（上部ステータスバーの「Show key」テキストをクリックしても確認できます）など、チャンネルに関する情報を表示できます：

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_room_analytic.png" style={{width:300, height:'auto'}}/></div>

### メッセージング（ダイレクトメッセージ）

ダイレクトメッセージの送信は、いくつかの異なるオプションがある点を除けば、チャンネルメッセージと同様に動作します。

|アイコン|機能|
|---------------|---------------|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/route.png" style={{width:50, height:'auto'}}/></div>|メッセージがたどるのにより理想的なルーティングパスを見つけるために、コンタクトに対してルーティングされたプローブを送信します|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trace.png" style={{width:50, height:'auto'}}/></div>|リモートおよびローカルのSNRデータを含むダイレクトトレースをコンタクトに送信します|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/bell.png" style={{width:50, height:'auto'}}/></div>|通知を設定します。デスクトップ通知（ブラウザを開いておく必要があります）またはWeb Push（ブラウザが閉じていても配信可能）を選択できます。これらには信頼されたHTTPSコンテキストが必要です（インストーラから利用できるsnakeoil証明書が通知を許可するのに十分かどうかは、OSとブラウザによって異なります）|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/star.png" style={{width:50, height:'auto'}}/></div>|コンタクトをお気に入りに追加または削除します|
|<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/trash-2.png" style={{width:50, height:'auto'}}/></div>|会話を削除しますが、後で再度追加することを選択した場合に備えて、過去のメッセージは保持されます|
|Contact Key|指定されたコンタクトのMeshCoreキーと、最後に検知されたタイミング（アドバタイズ、メッセージなど）、およびその方法（ダイレクトか、パケットがたどった経路か）に関する情報を提供します|

チャンネルと同様に、選択したコンタクトの上部バーにある情報アイコンまたは名前をクリックすると、そのコンタクトの分析情報を表示できます。

## MQTT と自動化

RemoteTermは、自動化システム向けの豊富な統合機能を提供する点で優れています。統合機能は、特定の種類のパケットが検知されたとき（たとえば、チャンネルでメッセージが送信されたときやDMが受信されたとき）にアクションを実行します。これには次のものが含まれます：

- MQTT、パケットをMQTT経由で次の宛先に転送：
  - プライベートブローカー
  - コミュニティアグリゲータ
  - Home Assistant
- Webhook、メッセージデータを含むGETまたはPOSTリクエストを特定のURLに送信
- Apprise、Discord、Telegram、SMS、メールなどに転送できる柔軟な通知ファンアウトツール
- Amazon SQSキューへのパケットまたはメッセージのエンキュー
- Pythonボット

### コミュニティメッシュマッピングのセットアップ

MeshCoreノードの位置、メッセージの流れのパターン、接続性の内訳などを表示することは、MeshCoreネットワークを構築するうえでコミュニティに役立ちます。このデバッグビューを提供するために、コミュニティアグリゲータは *オブザーバ* からの生パケットフィードを取り込みます。

RemoteTermを使うと、メッセージの送受信に使用しているのと同じ無線機を、オブザーバノードとしてこれらのコミュニティマッピングおよび可視化の取り組みに貢献するために簡単に利用できます。

:::warning
MeshCoreは、MQTTノード経由でメッセージがメッシュに入ることを *許可しません*。コミュニティの可観測性の取り組みは読み取り専用です。 
:::

コミュニティオブザーバプラットフォームは多数ありますが、[LetsMesh](https://analyzer.letsmesh.net/) はより一般的なものの1つであり、ここではそれをセットアップします。

1. [ここをクリック](https://analyzer.letsmesh.net/)してLetsMeshにアクセスし、LetsMesh analyzerにログインします。
2. RemoteTermで「Settings」に移動し、「MQTT & Automation」をクリックします。
3. 「Add Integration」をクリックし、左側のリストから「LetsMesh (US)」を選択します。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/LetsMesh_selected_integration.png" style={{width:900, height:'auto'}}/></div>

4. 「Create」をクリックします。
5. LetsMeshへのサインアップに使用したものと同じメールアドレスを入力し、最寄りの空港のIATAコードを入力します。
6. 「Save as Enabled」をクリックします。

緑色の点と「Connected」ステータスが表示されるはずです。正常な統合は次のように表示されます：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_integration.png" style={{width:900, height:'auto'}}/></div>


代わりに琥珀色の点が表示される場合は、「Edit」ボタンの横にある「ⓘ」記号をクリックしてエラーを確認してください。

次に、この[リンク](https://analyzer.letsmesh.net/my-nodes)に移動します。約15分以内に、そこであなたの無線機が緑色で表示され、自身のテレメトリとパケットがLetsMeshに転送されているのが確認できるはずです！
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/healthy_letsmesh.png" style={{width:400, height:'auto'}}/></div>

### ボット

RemoteTermは、自分自身のボットをプログラムするためのインターフェースを提供します。ボットは、コンタクトまたはチャンネルからメッセージを受信するたびに実行されるシンプルなPythonコードで構成されます。 

:::warning
ボットは他のメッセージに応答して自動トラフィックを生成します。これは、ボットがメッシュをフラッディングしたり無限ループしたりしないよう、慎重に記述する責任が *あなた* にあることを意味します。 
:::

#### シンプルなサイコロロールボットのセットアップ

ここでは、標準形式で要求された（例：「3d6」は6面ダイスを3回振ることを意味します）シンプルなサイコロロール機能を持つボットを構築するためのチュートリアルを示します。手順は次のとおりです：

1. RemoteTermで「Settings」に移動し、「MQTT & Automation」をクリックします。
2. 「Add Integration」をクリックし、左側のリストから「Python Bot」を選択します。
3. 「Create」をクリックします。
4. 「Dice Bot」のように、わかりやすい名前をボットに付けます。
5. エディタからコードを消去し、代わりに次のコードを貼り付けます：

```python
import random
import re

def bot(**kwargs) -> str | list[str] | None:
    """Dice roller — responds to !dice NdS in #bot only."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)

    if is_outgoing or channel_name != "#bot":
        return None

    match = re.match(r"^!dice\s+(\d+)d(\d+)$", message_text.strip())
    if not match:
        return None

    count, sides = int(match.group(1)), int(match.group(2))
    if count < 1 or count > 20 or sides < 2 or sides > 100:
        return "I don't know how to roll that! [1-20]d[2-100]"

    rolls = [random.randint(1, sides) for _ in range(count)]
    parts = " + ".join(str(r) for r in rolls)
    name = sender_name or "Someone"
    return f"@[{name}] rolled {parts} = {sum(rolls)}"
```

6. 「Save as Enabled」をクリックします。

別の無線機を使用して **#bot** ルームに移動し、サイコロロールをリクエストします（例：「3d6」）。出力は次のようになります：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/dice_bot_in_action.png" style={{width:900, height:'auto'}}/></div>

期待どおりに応答が表示されない場合は、Dockerコンテナからサーバーログを確認し、Pythonコードの実行時にエラーが報告されていないか確認できます。

#### パス幅ボットのセットアップ

MeshCoreファームウェア v1.14+ では、メッセージがメッシュをどのように通過するかに大きな変更が加えられました。互換性のあるルーターを通過するパケットは、マルチバイトのホップ識別子を運ぶことができるようになりました。 

自分のメッセージにマルチバイトパスが関連付けられているかどうかを判断するのに役立つボットを作成できます。このスクリプトは、ホップ幅メッセージとパケットホップデータ自体を提供することで、複数のメッセージを応答として送信する機能を利用します。

```python
def bot(**kwargs) -> str | list[str] | None:
    """Report the sender's path hop width in #bot."""
    sender_name = kwargs.get("sender_name")
    message_text = kwargs.get("message_text", "")
    channel_name = kwargs.get("channel_name")
    is_outgoing = kwargs.get("is_outgoing", False)
    path = kwargs.get("path")
    path_bytes_per_hop = kwargs.get("path_bytes_per_hop")

    if is_outgoing or channel_name != "#bot":
        return None

    if "!hopwidth" not in message_text.lower():
        return None

    name = sender_name or "Someone"

    if path_bytes_per_hop is None or not path:
        return f"@[{name}]'s hop width is unknown (no path data)"

    hop_count = (len(path) // 2) // path_bytes_per_hop

    if path_bytes_per_hop == 1:
        msg = f"@[{name}]'s hops are 1 byte wide; they might not be on 1.14+ or there may be incompatible repeaters in the path."
    else:
        msg = f"@[{name}]'s hops are {path_bytes_per_hop} bytes wide; they are using firmware v1.14+!"

    return [msg, f"Heard via {hop_count} hop{'s' if hop_count != 1 else ''}"]
```

### MeshCoreチャンネルメッセージをDiscordに転送する

[Apprise](https://appriseit.com/) はRemoteTermでサポートされている柔軟な通知サービスです。Appriseを使用すると、DiscordからTelegram、SMS、メールなど、数百の通知サービスの1つまたは複数を選択して、チャンネルまたはダイレクトメッセージを送信できます。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/Aprise.png" style={{width:900, height:'auto'}}/></div>  

例として、特定のMeshCoreチャンネル内のすべてのメッセージを、RemoteTerm経由でDiscordに転送するためにAppriseを使用します。

1. 管理者権限を持つDiscordのチャンネルを開きます。
2. チャンネル名を右クリックし、「Edit Channel」をクリックします。
3. 左側のメニューで「Integrations」をクリックし、「Create Webhook」をクリックします。
4. Webhookに適切な名前を付け、Webhook URLをコピーします。Webhookは `https://discord.com/api/webhooks/<WebhookID>/<WebhookToken>` の形式になっている必要があります。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_webhook_setup.png" style={{width:900, height:'auto'}}/></div>  

5. RemoteTerm で "Settings" に移動し、"MQTT & Automation" をクリックします。
6. "Add Integration" をクリックし、左側のリストから "Apprise" を選択します。
7. "Create" をクリックします。
8. 入力欄に通知 URL を追加します。[Apprise の Discord ドキュメント](https://appriseit.com/services/discord/) によると、これは `discord://{WebhookID}/{WebhookToken}/` の形式である必要があります。コピーした URL から WebhookID と WebhookToken を使用します。 
9. 利用可能な場合に、設定済みの名前とアバターを使用してユーザーのアイデンティティを保持するかどうかを選択します。
10. メッセージにルーティングパスデータを含めるかどうかを選択します（無効化を推奨）。
11. Discord に転送したい連絡先/チャンネルを選択し、"Save as Enabled" をクリックします。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_configured.png" style={{width:900, height:'auto'}}/></div>  

有効化されると、メッセージのフローが始まるはずです。問題が発生したり、期待したメッセージが表示されない場合は、サーバーログで報告されたエラーを確認するか、すべてのチャンネルを有効にして、少なくとも RemoteTerm ↔ Discord 間の連携が動作していることを確認してください。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/discord_integration_working.png" style={{width:900, height:'auto'}}/></div>   

### RemoteTerm を Home Assistant と連携する

[Home Assistant](https://www.home-assistant.io/) は、使いやすく強力なホームオートメーションのためのフレームワークを提供します。RemoteTerm は、組み込みの MQTT 連携機能を通じて Home Assistant と統合できます。この連携により、メッセージに基づいてオートメーションをトリガーしたり、中継器やローカル無線のテレメトリを監視したり、アドバタイズ内の GPS によって連絡先を追跡したりできます。

中継器テレメトリ追跡を活用するには、目的の中継器を自動テレメトリ取得に登録する必要があります。一度登録すると、RemoteTerm は設定可能な間隔でテレメトリを要求し、履歴値を保持するとともに、最新の値を Home Assistant で参照できるようにします。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/enrolled_repeater.png" style={{width:900, height:'auto'}}/></div>   

:::tip
自動中継器テレメトリ取得にはカスタマイズ可能な間隔があります。1 時間に 1 回から 1 日に 1 回までの頻度を選択できますが、自動取得は 24 時間あたり 24 回を超えることはできません。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/repeatertelemetryintervalcustomization.png" style={{width:900, height:'auto'}}/></div> 

:::

追跡対象の中継器を希望どおりに設定し、Home Assistant で MQTT Discovery が有効になったら、RemoteTerm でインテグレーションを設定してデータフローを開始できます。

1. RemoteTerm で "Settings" に移動し、"MQTT & Automation" をクリックします。
2. "Add Integration" をクリックし、左側のリストから "Home Assistant MQTT Discovery" を選択します。
3. "Create" をクリックします。
4. MQTT ブローカー情報を入力します。ホストとポートに加え、該当する場合はユーザー名/パスワード/TLS 設定も入力します。
5. Home Assistant でアドバタイズの GPS 位置情報を通じて追跡したい連絡先を選択します。
6. Home Assistant で表示したいテレメトリ追跡中継器を選択します。
7. Home Assistant 内でトリガーに使用するメッセージスコープを選択します。
8. "Save as Enabled" をクリックします。

 RemoteTerm のインテグレーション設定画面には、「What gets created in Home Assistant」と「Published Topic Summary」のドロップダウンに、作成されるトピック/エンティティが正確に表示されることに注意してください。

:::warning
追跡対象の連絡先と中継器は Home Assistant 内にエンティティを作成します。Home Assistant が煩雑になるのを避けるため、関心のある連絡先のみに選択を絞りたい場合があるかもしれません。

メッセージイベントはエンティティを *作成せず*、トリガーにのみ使用されます。すべてのメッセージを Home Assistant に流すことについては、一般的に問題はありません。
:::


新しいエンティティを表示するには、Home Assistant の Web インターフェースにログインします。"Settings" をクリックし、次に "Devices & Services"、続いて "MQTT" をクリックします。追跡対象のエンティティが表示されるはずです。 
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_device_list.png" style={{width:900, height:'auto'}}/></div> 

それらをクリックして、利用可能なメトリクスを表示します。中継器の場合、最新の有効なメトリクスが表示されます。自動テレメトリ取得を有効にしたばかりの場合は、すべての中継器および無線テレメトリフィールドが Home Assistant 内で埋まるまで、最大 8 時間待つ必要があるかもしれません。
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example.png" style={{width:900, height:'auto'}}/></div> 

追加の設定ガイダンスについては、RemoteTerm リポジトリ内の [README_HA.md](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md) を参照してください。たとえば、「[Full monitoring dashboard with message feed](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/README_HA.md#full-monitoring-dashboard-with-message-feed)」の手順に従うと、次のようなダッシュボードを利用できます：
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/remoteterminal/example_ha_dashboard.png" style={{width:900, height:'auto'}}/></div> 

## 次のステップ

[公式 MeshCore Discord](https://discord.gg/mr3Pt5s5V9) に参加し、[RemoteTerm の開発スレッド](https://discord.com/channels/1343693475589263471/1477723940951429330) をフォローすることで、RemoteTerm の開発状況を常に把握したり、質問したりできます。コードベースは頻繁に更新されており、[Changelog](https://github.com/jkingsman/Remote-Terminal-for-MeshCore/blob/main/CHANGELOG.md) で最新リリースを確認できます。そしてもちろん、RemoteTerm は永遠に無料・広告なし・オープンソースです — [GitHub](https://github.com/jkingsman/Remote-Terminal-for-MeshCore) でスターを付けてください。

## 技術サポート & 製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
        <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
    </div>
    <div className="button_tech_support_container" style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
        <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
    </div>
</div>