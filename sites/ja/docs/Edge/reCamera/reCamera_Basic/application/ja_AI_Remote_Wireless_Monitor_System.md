---
title: Wifi HaLow を用いた AI リモート無線監視システム
description: この Wiki ページでは、Wifi Halow を用いた AI リモート無線監視システムのデモを紹介します。ユーザー自身のシステムを構築するためのステップバイステップガイドです。
keywords:
  - Wifi Halow
  - reCamera
  - AI エッジセンシング
slug: /ai_remote_wireless_monitor_system
sku: 102991897, 110070108
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 2
last_update:
  date: 2025-11-19
  author: John Xiang
createdAt: '2025-11-21'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/ja/reCamera/reCamera_Basic/application/ai_remote_wireless_monitor_system/
---

# reCamera と Wifi Halow に基づく AI リモート無線監視システム

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/6.gif" /></div>

もしあなたがアウトドア愛好家なら、野外でネットワークがないこと、従来の WiFi のカバー範囲が限られていること、カメラが長距離でリアルタイム映像を送信できないことに、しばしば悩まされていませんか？この Wiki を通じて、**reCamera シリーズ** と **Wifi Halow** 画像伝送モジュールに基づいた **AI リモート無線監視システム** を自分で実装できます。もちろん、以下に挙げるものに限らず、もっと自由な発想も可能です：

- 敷地全体を無線で監視したいが、配線やルーターは不要にしたい。そのうえで、オンボード AI によって不審な動きを検知したい。

- トラックを所有しており、車両の近くにいる不審者を検知したいが、年間を通してネットワークが不安定でリアルタイムに映像をアップロードできず、一般的なカメラはクラウドに依存してしまう。

- 森林を探索しているとき、キャンプに設置した固定カメラの映像を随時受信して、クマやその他の危険な動物がいないか識別したいが、一般的な無線の到達距離が短すぎる。

**では、なぜ reCamera と Wifi Halow でこのシステムを実現できるのでしょうか？** まず、reCamera はエンド側 AI として 1 Tops の演算性能を提供します。そのため、他のエッジデバイスに依存することなく、このガジェット内部で AI を実行できます。

さらに Node-RED と統合されており、開発プロセスを非常に簡単かつ効率的にしてくれます。rtsp でストリームをプッシュしたり、WebSocket を使ってデータを送信したりしたい場合でも、ノードをドラッグするだけで実装でき、大量のプログラムをゼロから構築する必要はありません。詳細は次のリンクを参照してください：[Node-RED Tutorial on reCamera](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/)

以下は Node-RED 開発の一例です。わずか 3 つのノードをドラッグするだけで、AI ビジョンのワークフローを構築できます：
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_1.png" /></div>

Wi-Fi HaLow に関しては、IoT 向けに設計された低周波数の無線技術であり、長距離、低消費電力、高帯域幅という利点を備えています。902–928 MHz の周波数帯では、8 MHz の帯域幅で最大約 16 Mbps の伝送速度を実現でき、通信距離は最大 1 km に達します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.png" /></div>

従来の 2.4G/5G Wi-Fi と比較して、HaLow はより強力な浸透力と広いカバー範囲を提供します。また、LoRa や Sub-GHz など他の長距離通信方式と比較すると、HaLow はより高い帯域幅を持ち、テキスト、音声、画像、さらにはビデオストリームなど、さまざまなメディアを同時に伝送することができます。

| 特徴 | Wi-Fi (2.4/5GHz) | **Wi-Fi HaLow (802.11ah)** | LoRaWAN |
|---------|------------------|-----------------------------|----------|
| 周波数帯 | 2.4GHz / 5GHz | **サブ GHz (902–928MHz)** | サブ GHz (例: 868/915MHz) |
| カバー範囲 | 50–100 m | **最大 約 1 km** | 2–15 km（環境に依存） |
| 浸透能力 | 中程度 | **強い（壁の透過性が高い）** | 非常に強い |
| 典型的なデータレート | 数百 Mbps ～ Gbps | **最大 約 16 Mbps（8 MHz チャネル）** | 非常に低い (0.3–50 kbps) |
| レイテンシ | 低い | **低い（画像/ビデオ対応）** | 高い（秒単位） |
| 消費電力 | 中～高 | **従来の Wi-Fi より低い** | 非常に低い|
| 適したシナリオ | ローカルネットワーク、HD/4K ビデオ | **長距離ビデオ、リモート監視、産業用 IoT** | 長距離センシング、テレメトリ、超低消費電力 IoT |

したがって、このシステムは、インテリジェント監視システムを開発する際の技術的ハードルを下げ、非専門ユーザーでも簡単に始められるようにします。具体的には、次のものを提供します：

1. **エッジ AI モデル**：独自の AI アーキテクチャをゼロから構築する必要はなく、AI チームも不要で、アルゴリズムを理解する必要もありません。電源を入れればすぐに使えます。

2. **内蔵コンピューティングパワー**：ノート PC、デスクトップ、その他のエッジコンピューティングデバイスに依存しません。

3. **Node-RED グラフィカルプログラミングツール**：フロントエンドやバックエンドのプログラミングを習得する必要はなく、コンピュータネットワークやシステムインテグレーションなどの専門知識を深く理解する必要もありません。

4. **リモート無線接続**：複雑な配線やスイッチ/ルーターは不要です。

## 全体アーキテクチャ

システム構成は非常にシンプルです。2 つの HaLow モジュールは、それぞれ Ethernet ケーブルで reCamera と reTerminal に接続します。その後、2 台のデバイスは Wifi HaLow を介して無線通信を行います。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1.png" /></div>

## ハードウェアの準備

このプロジェクトを完了するには、reCamera 2002 シリーズ、reCamera HQ PoE、reCamera Gimbal の 3 種類の reCamera のうち、いずれか 1 台が必要です。

### 📦 reCamera

<table align="center">

<tbody><tr>

<th>Seeed Studio reCamera 2002W 8GB/64GB</th>

<th>Seeed Studio reCamera 2002HQ PoE 64GB</th>

<th>Seeed Studio reCamera Gimbal</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:210, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### reTerminal と拡張ボード

アプリケーションを可搬にしたい場合は、専用の拡張ボード付きの reTerminal を使用できます。拡張ボードには 2 本の 18650 バッテリーが内蔵されています。

:::note

ここでの reTerminal は、ネットワークポートと画面を備えた任意のエッジコンピューティングデバイスに置き換えることができます。ノート PC、デスクトップ、開発ボードなどを含みますが、これらに限定されません。ぜひさまざまなデバイスで試してみてください。このチュートリアルでは reTerminal を用いてデモを行います。reTerminal はネットワークポートなど複数のインターフェースを備えた Raspberry Pi CM4 ターミナルデバイスです。

:::

<table align="center">

<tbody><tr>

<th>Seeed Studio reTerminal - 5'' HMI CM4108032</th>

<th>Seeed Studio reTerminal E10-1 Expansion Board(Optional)</th>

</tr>

<tr>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/ReTerminal/wiki_thumb.png" style={{width:300, height:'auto'}}/></div></td>

<td><div align="center"><img src="https://files.seeedstudio.com/wiki/reTerminal_Bridge/reterminale10overviewnew.jpeg" style={{width:210, height:'auto'}}/></div></td>

</tr>

<tr>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-CM4108032-p-5712.html" target="_blank">

<strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reTerminal-E10-1-p-5376.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> もっと見る🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### Wifi Halow 画像伝送モジュール

これは本プロジェクトで使用した Wifi Halow モジュールです。動作周波数帯は 902～928 MHz、帯域幅は 8 MHz、最大速度は 16 Mbps、最大通信距離は 1 km に達し、送信電力は 20 dBm です。デバイスは IPEX アンテナインターフェース、10/100 Mbps ネットワークポート、TTL シリアルポート（最大 350 kbps）を備え、WPA2-PSK AES 暗号化、5V/12V 電源に対応し、-20 ℃～70 ℃ の範囲で安定動作し、平均消費電力は 1.5 W です。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.jpg" /></div>

## ツールの準備

- **PC**：reCamera に接続してデバッグするために使用します。後続の操作では、reCamera のバックエンドにログインし、reTerminal 用にストロベリーパイのオペレーティングシステムを書き込む必要があります。同時に、PC 上で問題が発生した場合もデバッグがより便利で、各種ソフトウェアツールも一通り揃っています。

- **USB-C ケーブル 3 本**：

1 本は reCamera を PC に接続して給電し、残り 2 本は Wifi Halow モジュールへの給電に使用します。

- **キーボード/マウス**：reTerminal に接続してデバッグします。

- **5V3A USB-C 電源アダプタ** reTerminal に給電するための Strawberry Pi 4/5 と同じ電源です。購入リンク：[5V3A USB-C Power Supply](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)

- **（オプション）12V DC 電源アダプタ** reTerminal 拡張ボードに電源を供給するために使用します。購入リンク: [12V DC Power Supply(US/EU)](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)

- **（オプション）reCamera 三脚ブラケット** 購入リンク: [Mini Tripod](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)

:::note

拡張ボードを使用する場合、デバイス用の電源や Raspberry Pi 4/5 用の電源について悩む必要はありません。reTerminal は同時に使用でき、12V DC 電源だけでよく、もはや 5V3A USB-C 電源は不要です。reTerminal は拡張ボードから直接電源を取得できるためです。

:::

## 詳細チュートリアル: reCamera Wifi HaLow モジュール設定 reTerminal 設定

システム全体の基本的な考え方は、reCamera が Wifi HaLow を介して端末機器とネットワークを形成することです。まず、端末機器（reTerminal）と reCamera に静的 IP を設定します。屋外またはモバイルアプリケーションではルーターを使用できず、DHCP サービスがないため、IP を手動で割り当てる必要があります。

IP を割り当てた後、これらのデバイスは「ローカルエリアネットワーク」を形成し、IP を介して相互にアクセスできます。このとき、Node-RED 上の reCamera にストリームノードと WebSocket ノードを作成し、rtsp プッシュストリームの形式でビデオストリームを送信し、yolo 検出結果を WebSocket 経由で送信します。

最後に、Windows/Linux 上の VLC Media Player などの端末機器でビデオストリームと AI 検出結果にアクセスします。このチュートリアルでは、Linux 上の ffplay を通じて rtsp プッシュストリームを取得する方法を説明します。

### フェーズ 1: reCamera の設定

#### ステップ 1.1 reCamera にログイン

USB-C ケーブルで reCamera をコンピュータに接続します。電源投入直後はデバイスの起動に少し時間がかかります。1～2 分待ってから任意の Web ブラウザを開き、** 192.68.42.1 ** と入力して reCamera システムに入ります。

初回ログイン時には独自のパスワードを設定する必要があります。パスワードを忘れないようにし、後で使用してください。reCamera システムに入ると、次のページが表示されるはずです:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t2.png" /></div>

:::note

このページが表示されない場合は、ブラウザを更新してください。

デバイスが以前に使用または設定されている場合は、直接 Workspace にジャンプする可能性があります。このとき、Web サイトは: 'http:// 192.168.42.1/#/workspace' です。次のステップに進んでください。いずれにせよ、Workspace に入れば問題ありません。

更新しても解決しない場合は、デバイスをリセットするか、技術サポートに連絡して解決してください。

:::

#### ステップ 1.2 カメラノードの設定

ページ右下の緑色のボタンをクリックして Workspace に入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3.png" /></div>

Workspace ページ表示

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_0.png" /></div>

カメラノードをダブルクリックして設定ページに入ります。スムーズさを確保するため、カメラノードを **480P、5 フレーム** に設定します。より高い解像度やフレームレートを試すこともできますが、レイテンシが高くなる可能性があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_1.png" /></div>

#### ステップ 1.3 ストリームノードの設定

前述のように、Node-RED 上で rtsp プッシュストリームを設定する必要があります。左側のノードリストで 'stream' ノードを検索するか、マウスホイールを一番下までスクロールして Stream ノードを見つけます。設定方法については、こちらを参照してください: [Node-Red Stream Node Configuration](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/#ストリーム-ノード)設定後、次のような結果になるはずです:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_3.png" /></div>

Node-RED チュートリアルに完全に従い、出力先が sscma になっていることを確認してください。最終的なビデオストリームは rtsp:// admin:admin@192.168.xxx.xxx:554/live に出力されます。ここで 192.168.xxx.xxx は reCamera の静的 IP アドレスです。静的 IP は自由に設定できます。ここでは 192.168.10.100 を例として使用します。

#### ステップ 1.4.1 WebSocket ノードの設定

端末機器に yolo で検出された結果を表示するために、WebSocket 経由で検出結果を送信する必要があります。WebSocket ノードのタイプは 'listen' ではなく 'connect' に設定する必要があります。

ここで WebSocket ノードの URL を設定する際には、ws://192.168.
nnn.nnn:9000 と設定する必要があります。実際には、192.168.nnn.nnn は reTerminal または他の端末機器の静的 IP アドレスであり、上記の reCamera の静的 IP アドレスではありません。ここでは 192.168.10.3 を例として使用します。最終的な結果は次のとおりです:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_5.png" /></div>

#### ステップ 1.5 設定ページに入る

または、先ほど Node RED を変更した Workspace ページで、左上の "Setting" をクリックします'

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t4_1.png" /></div>

> 図 4: Workspace 設定画面

#### ステップ 1.6 reCamera ターミナルに入る

設定ページに入ったら、'Terminal' を選択して reCamera のコマンドラインに入ります

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t5.png" /></div>

> 図 5: 設定ページの Terminal 画面

Terminal をクリックした後、再度ログインする必要があります。ユーザー名: 'recamera' を入力し、その後設定したパスワードを入力して Terminal を使用します。効果は次のとおりです。パスワードを忘れた場合は、次のチュートリアルを参照してデバイスをリセットしてください: [reCamera Factory Reset](https://wiki.seeedstudio.com/ja/recamera_getting_started/#ファクトリー-リセット)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t6.png" /></div>

> 図 6: ログイン後の Terminal ページの表示

#### ステップ 1.7 reCamera 静的 IP の設定

reCamera では、従来の Linux ネットワークシステム（ifupdown）を通じてネットワークを設定する必要があります。方法は非常に簡単で、ネットワーク設定ファイルに入り、reCamera 上のイーサネットポートを希望する静的 IP、つまり 192.168.xxx.xxx.xxx に設定するだけです。ここでは静的 IP を

102.168.10.100 に設定します。まず vi エディタを使用してネットワーク設定ファイルに入り、reCamera ターミナルで次のコマンドを入力します:

```bash
sudo vi /etc/network/interfaces
```

ファイルの末尾に次を追加してください:

```bash
auto eth0
iface eth0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_0.png" /></div>

これらのコードは、設定された reCamera のイーサネットポートを静的 IP 192.168.10.100、サブネットマスクを 255.255.255.0、ゲートウェイを 192.168.10.1 に設定します。もちろん、具体的な IP は 192.168.3.xxx や 192.168.42.xxx などを自由に使用できます。ただし、reTerminal や端末機器と同じネットワークセグメントであることを必ず確認してください。例えば、reCamera が 192.168.33 の場合、reTerminal は 192.168.33.nnn に設定する必要があります。reTerminal の静的 IP が 192.168.32.nnn や 192.168.34.nnn になると、通信できません。

上記のコードを追加した後、''':wq''' と入力して vi エディタを終了し、reCamera ターミナルに戻ります。その後、'''sudo reboot ''' と入力して reCamera を再起動します。

:::note

静的 IP を設定した後は、reCamera を必ずネットワークケーブルで PC に接続する必要があることに注意してください。同時に、reCamera に再度ログインする前に PC 側でも静的 IP を設定する必要があります。ログイン時には新しく設定した reCamera の静的 IP を使用します。ここでは Windows を使用して静的 IP を設定する例を示します。繰り返しになりますが、静的 IP を設定したすべてのデバイスは、reCamera-192.168.10.100、reTerminal-192.168.10.3、ノート PC（Windows）-192.168.10.2 のように、同じネットワークセグメント上にあることを必ず確認してください。そうでない場合、相互に通信できません。Windows 上での参考設定は次のとおりです:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/tx.png" /></div>

:::

#### ステップ 1.8 静的 IP 設定の確認

ステップ 1.5 を繰り返して reCamera 設定に戻り、静的 IP が正しく設定されているか確認します:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_1.png" /></div>

よし、これで reCamera に静的 IP が設定されました。次のステージに進みましょう

### フェーズ 2: Wifi HaLow 画像伝送モジュールの設定

#### ステップ 2.1 2 つの HaLow モジュールの動作モードを設定

まず、2 つの Wifi HaLow モジュールのうち一方を AP モード、もう一方を STA モードに設定します。AT モジュールまたは STA モジュールのどちらが reCamera/端末に接続されているかは気にしないでください。順序は重要ではありませんが、少なくとも 1 つは STA、もう 1 つは AP モードのモジュールであることを保証してください。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t8.png" /></div>

#### ステップ 2.2 HaLow モジュールのペアリング

次に、両方のモジュールのペアリングボタンを同時に押します:
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t9.png" /></div>
その後、2 つのモジュール上の緑色 LED が点滅します。点滅が止まり、緑色 LED が常時点灯になったら、モジュールのペアリングは成功です。

とても良いです！2 つの Wifi HaLow モジュールのペアリングに成功しました。これらは現在、ネットワークケーブルの両端として見なすことができ、reCamera と端末機器を接続するために使用できます。

### フェーズ 3: 端末機器（reTerminal）の設定

ここから reTerminal に静的 IP を設定します。理論的には NetworkManager など多くの方法があります。NetworkManager は Linux システムのネットワーク管理デーモンで、Wi-Fi/イーサネット/IP アドレス/DHCP/ホットスポット/ルーティングなど、すべてのネットワーク接続ツールを自動的に管理してくれます。NetworkManager を使用してみることもできます。しかし、学習コストを下げるために、ここでは reCamera と同じ方法を使用し、'/etc/network/interfaces を通じて静的 IP アドレスを設定します。

:::note

繰り返しになりますが、reTerminal はネットワークポートと画面を備えた任意の（エッジ）コンピューティングデバイス、例えばノート PC、デスクトップ PC、開発ボードなどに置き換えることができます。固定場所での監視には Windows ノート PC / デスクトップ PC を使用できます。モバイル展開の場合は、画面付きの Raspberry Pi ベースのエンドデバイスを使用できます。本チュートリアルでは、reTerminal と reTerminal E10 拡張ボード（屋外電源供給用拡張ボード）を使用します。電源は任意のものを選択できます。

:::

#### ステップ 3.1 reTerminal を起動する

reTerminal には工場出荷時にシステムが搭載されており、理論上はそのまま Raspbian に入ることができます。しかし、電源投入後に左下の緑色 LED が点灯 / 点滅しているにもかかわらず画面が真っ黒な場合は、以下のチュートリアルを参照してシステムを書き直してください。このステップでは外部ディスプレイでのデバッグが必要です。 [reTerminal Initialization Tutorial](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-with-drivers-from-seeed-to-emmc)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t10.jpg" /></div>

#### ステップ 3.2 NetworkManager サービスを無効化する

キーボードとマウスを reTerminal に接続し、**Ctrl Alt T** を押してターミナルを開きます。NetworkManager は上記の方法と競合するため、NetworkManager サービスを無効化する必要があります。reTerminal のターミナルで次を実行します：

```bash
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
```

#### ステップ 3.3 reTerminal の静的 IP を設定する

ステップ 1.7 と同様に、reTerminal のターミナルで次を実行します：

```bash
sudo nano /etc/network/interfaces
```

ネットワーク設定ファイルを開き、ファイルの末尾に次の内容を追加します。ここでは reTerminal の静的 IP を **192.168.10.3** に設定しています：

```bash
auto eth0
iface eth0 inet static
address 192.168.10.3
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t11.jpg" /></div>

:::note

将来的に NetworkManager を再利用したい場合は、'/etc/network/interfaces' 内で新たに追加した 'auto eth0' を含む 4 行、合計 5 行を削除するだけで構いません。

その後、次を実行します：

```bash
sudo systemctl enable NetworkManager
sudo systemctl restart NetworkManager
```

:::

ctrl s で保存し、ctrl x で終了します。その後 '''reboot''' と入力して reTerminal を再起動します。

#### ステップ 3.4 静的 IP 設定を検証する

reTerminal のターミナルに戻り、次のコマンド '''ifconfig''' を実行して、静的 IP アドレスが正しく設定されているか確認します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t12.png" /></div>

'eth0' に IP = **192.168.10.3** が表示されていれば成功です。

完璧です！すべての機器のセットアップが完了したので、次のステージに進みましょう :)

### フェーズ 4: 接続して再生する

ステップ 1.2 で rtsp プッシュストリームノードを設定したことを覚えていますか？すでに次の場所に rtsp ビデオストリームがあります：'''rtsp:// admin:admin@192.168.xxx.xxx:554/live''' ここで '192.168.xxx.xxx' はステップ 1.6 で手動設定した **reCamera の静的 IP** であり、reTermnial の静的 IP ではありません。私の環境では、対応する rtsp プッシュストリームは次のとおりです：

```
rtsp://admin:admin@192.168.10.100:554/live
```

実際には、**VLC Player** など任意のソフトウェアを使用してビデオストリームを開くことができます。

しかし、利便性のため、ffmpeg の **ffplay コマンド** を使用して、ターミナル上で直接 rtsp ビデオストリームを開きます。

#### ステップ 4.1 reTerminal 拡張ボードを取り付ける

参考チュートリアル: [reTerminal E10 Install Guide](https://wiki.seeedstudio.com/ja/reTerminal_Mount_Options/)

拡張ボードを取り付けた後、reTerminal 上の usbc ポートを使用して HaLow モジュールに電源を供給でき、2 つの usba ポートにはマウスとキーボードを接続できます。

#### ステップ 4.2 Wifi HaLow 映像伝送モジュールを取り付ける

ペアになっている 2 つの映像伝送モジュールを reCamera と reTerminal にそれぞれ取り付けます

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_1.jpg" /></div>

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_2.jpg" /></div>

#### ステップ 4.3 reTerminal に ffmpeg と nmap をインストールする

ffmpeg は rtsp プッシュストリームを取得するために使用し、nmap は一覧表示に使用します。reTerminal のターミナルで次を実行します：

```bash
sudo apt install ffmpeg
sudo apt install nmap
```

#### ステップ 4.4 rtsp ビデオストリームを再生する

ffplay コマンド（ffmpeg コマンドの一部）を実行して、reCamera の rtsp ストリームを取得します：

```bash
ffplay -rtsp_transport udp -max_delay 20000 -probesize 2M rtsp://admin:admin@192.168.10.100:554/live
```

ここで ffplay コマンド内の各パラメータについて説明します：

-'-rtsp_transport udp'：reCamera がデフォルトで UDP ストリーミングを使用しているため、UDP 転送プロトコルを使用するよう指定します。

-'-max_delay 20000'：ネットワーク遅延に対処するため、最大遅延を 20 秒に設定します。

-'-probesize 2M'：プローブサイズを 2MB に設定し、ビデオストリームの再生開始を高速化します。

-'rtsp:// admin:admin@192.168.10.100:554/live'：これは reCamera の rtsp 取り込みアドレスです。自分のアドレスに置き換えてください。

この時点で新しいウィンドウがポップアップし、その中に rtsp ビデオストリームが表示されます。ウィンドウをダブルクリックすると全画面再生ができます。

:::note
別の方法として、VLC Player や GStreamer を使用して rtsp ビデオストリームを開くこともできます。reTerminal のターミナルで次のコマンドを実行して GStreamer をインストールします：

```bash
sudo apt update
sudo apt install -y \
    gstreamer1.0-tools \
    gstreamer1.0-plugins-base \
    gstreamer1.0-plugins-good \
    gstreamer1.0-plugins-bad \
    gstreamer1.0-plugins-ugly \
    gstreamer1.0-libav \
    gstreamer1.0-rtsp \
    gstreamer1.0-x \
    gstreamer1.0-gl \
    gstreamer1.0-alsa \
    gstreamer1.0-pulseaudio

```

その後、次のコマンドを実行して rtsp ビデオストリームを再生します：

```bash
gst-launch-1.0 rtspsrc location=rtsp://admin:admin@192.168.10.100:554/live latency=2000 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink
```

:::
bus

#### ステップ 4.5 Yolo テスト結果をモニタリングする

reTerminal で **Ctrl + Alt + T** を押して新しいターミナルを開きます。ここでは WebSocket サーバーを起動して、AI 検出結果を受信します。次のコマンドを実行します：

```bash
wscat -l 9000
```

サーバーが起動すると、次のように表示されます：

```bash
Listening on port 9000 (press CTRL+C to quit)
```

このターミナルは開いたままにしておき、reCamera からプッシュされる検出結果を表示させます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t15.jpg" /></div>
上の画像は、GStreamer による RTSP ストリーミングと、WebSocket によるテキスト形式の AI 検出結果を示しています。

左側のターミナルには、検出結果が次のように表示されています：

```bash
< counts=person:1; person(682,359,1175,704)
< counts=person:1; person(649,359,1247,704)
< counts=person:1; person(678,359,1188,704)
< counts=person:1; person(652,359,1240,704)
< counts=person:1; person(656,359,1227,704)
< counts=person:1; person(648,359,1236,704)
< counts=person:1; person(648,359,1243,704)
< counts=person:1; person(650,359,1227,703)
< counts=person:1; person(652,359,1241,704)
< counts=person:1; person(646,359,1246,704)
< counts=person:1; person(647,359,1244,704)
< counts=person:1; person(653,359,1252,704)
< counts=person:1; person(650,359,1238,704)
```

**おめでとうございます！独自のリモート AI 検出システムを実装できました。**

## 可能性を探る

冒頭で述べたように、このプロジェクトはリモート AI 検出のシンプルな例に過ぎません。これをより複雑なシナリオへ拡張することができます。ここではいくつかの例を紹介します。これらの例はすべて後ほど Github に更新されます。

### ケース 1: 野営地のクマ警報システム

クマ検出モデルを reCamera にアップロードし、森林キャンプ場の固定位置にデバイスを設置して、クマの侵入の可能性を検知します。reTerminal やその他のデバイスを通じて離れた場所からエリアを監視できるため、野生動物に近づきすぎることを避け、危険のリスクを減らすことができます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/ta_1.jpg" /></div>

## 技術サポート & 製品ディスカッション

当社の製品をお選びいただきありがとうございます！私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
