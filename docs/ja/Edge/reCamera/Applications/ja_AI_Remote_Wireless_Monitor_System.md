---
title: Wifi HaLow を使用した AI リモート無線監視システム
description: このwikiページでは、Wifi Halowを使用したAIリモート無線監視システムのデモを紹介します。ユーザー独自のシステムを構築するためのステップバイステップガイドです。
keywords:
    - Wifi Halow
    - reCamera
    - AI edge sensing
slug: /ja/ai_remote_wireless_monitor_system_with_wifi_haLow
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 1
last_update:
    date: 2025-11-19
    author: John Xiang
---

# reCamera と Wifi Halow に基づく AI リモート無線監視システム

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/6.gif" /></div>

アウトドア愛好家の方は、野外でのネットワーク不足、従来のWiFiの限られたカバレッジ、カメラが長距離でリアルタイム画像を送信できないことに悩まされることがよくありませんか？このWikiを通じて、**reCamera シリーズ**と**Wifi Halow**画像伝送モジュールに基づいた独自の**AIリモート無線監視システム**を実装できます。もちろん、以下を含むがこれに限定されない、より多くの想像力を持つことができます：

- 配線やルーターを必要とせずに、敷地全体の無線監視を行い、オンボードAIで不審な活動を検出したい場合。

- トラックを所有しており、車両に近づく不審者を検出したいが、年中ネットワークが不安定でリアルタイムでビデオをアップロードできない、または通常のカメラはクラウドに依存する必要がある場合。

- 森を探索している際に、キャンプの固定カメラ画像をいつでも受信して、クマやその他の危険な動物がいるかどうかを識別したいが、通常の無線距離が短すぎる場合。

**では、なぜreCamera と Wifi Halow がこのシステムを実現できるのでしょうか？** まず、reCamera は 1Tops の計算能力でエンドサイド AI を提供します。そのため、他のエッジデバイスに依存することなく、ガジェット内部で AI を実行できます。

また、Node-RED と統合されており、開発プロセスを非常に便利で効率的にします。rtsp でストリームをプッシュしたり、WebSocket を使用してデータを送信したりしたい場合は、ノードをドラッグするだけで実装でき、ゼロから大量のプログラムを構築する必要はありません。詳細については、こちらのリンクをご確認ください：[reCamera での Node-RED チュートリアル](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/)

Node-RED 開発の例を以下に示します：3つのノードを単純にドラッグするだけで AI ビジョンワークフローを構築できます：
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_1.png" /></div>

Wi-Fi HaLow に関しては、これはモノのインターネット向けに設計された低周波無線技術で、長距離、低消費電力、高帯域幅の利点を提供します。902–928 MHz 周波数帯域で、8 MHz 帯域幅の下で最大約 16 Mbps の伝送速度を実現でき、通信距離は最大 1 km に達します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.png" /></div>

従来の 2.4G/5G Wi-Fi と比較して、HaLow はより強い浸透力とより広いカバレッジを提供し、LoRa や Sub-GHz などの他の長距離通信方法と比較して、HaLow はより高い帯域幅を提供し、テキスト、オーディオ、画像、さらにはビデオストリームを含む様々なメディアの同時送信をサポートできます。

| 機能 | Wi-Fi (2.4/5GHz) | **Wi-Fi HaLow (802.11ah)** | LoRaWAN |
|---------|------------------|-----------------------------|----------|
| 周波数帯域 | 2.4GHz / 5GHz | **Sub-GHz (902–928MHz)** | Sub-GHz (例：868/915MHz) |
| カバレッジ範囲 | 50–100 m | **最大約1 km** | 2–15 km（環境依存） |
| 浸透能力 | 中程度 | **強力（より良い壁浸透）** | 非常に強力 |
| 典型的なデータレート | 数百Mbps〜Gbps | **最大約16 Mbps（8 MHzチャネル）** | 非常に低い（0.3–50 kbps） |
| レイテンシ | 低い | **低い（画像/ビデオをサポート）** | 高い（秒単位） |
| 消費電力 | 中程度〜高い | **従来のWi-Fiより低い** | 非常に低い |
| 適用シナリオ | ローカルネットワーク、HD/4Kビデオ | **長距離ビデオ、リモート監視、産業IoT** | 長距離センシング、テレメトリ、超低消費電力IoT |

したがって、このシステムはインテリジェント監視システムを開発するための技術的ハードルを下げ、非専門ユーザーでも簡単に始められるようにします。具体的には、以下を提供します：

1. **エッジAIモデル**：ゼロから独自のAIアーキテクチャを構築する必要がなく、AIチームも必要なく、アルゴリズムを理解する必要もなく、電源を入れるだけで使用できます。

2. **内蔵計算能力**：ノートパソコン、デスクトップ、その他のエッジコンピューティングデバイスに依存しません

3. **Node-REDグラフィカルプログラミングツール**：フロントエンドとバックエンドのプログラミングを習得する必要がなく、コンピューターネットワーク、システム統合などの専門知識を深く理解する必要がありません

4. **リモート無線接続**：複雑な配線、スイッチ/ルーターが不要です

## 全体アーキテクチャ

システム構造は非常にシンプルです。2つのHaLowモジュールがイーサネットケーブルを使用してreCamera と reTerminal をそれぞれ接続します。その後、2つのデバイスは Wifi HaLow を通じて無線で送信します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1.png" /></div>

## ハードウェア準備

このプロジェクトを完了するには、3つのreCamera のいずれか - reCamera 2002 シリーズ、reCamera HQ PoE、reCamera Gimbal が必要です。

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

<strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認🖱️</font></span></strong>

</a>

</div></td>

<td align="center"><div class="get_one_now_container" style={{textAlign: 'center'}}>

<a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">

<strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### reTerminal と拡張ボード

アプリケーションを移動したい場合は、専用の拡張ボード付きのreTerminalを使用できます。拡張ボードには2つの18650バッテリーが内蔵されています。

:::note

ここでのreTerminalは、ネットワークポートと画面を持つ任意のエッジコンピューティングデバイスに置き換えることができます。ノートパソコン、デスクトップ、開発ボードなどを含みますが、これらに限定されません。より多くの試行をお勧めします。このチュートリアルではreTerminalを使用してデモンストレーションを行います。reTerminalは、ネットワークポートなどの複数のインターフェースを持つRaspberry Pi CM4ターミナルデバイスです。

:::

<table align="center">

<tbody><tr>

<th>Seeed Studio reTerminal - 5'' HMI CM4108032</th>

<th>Seeed Studio reTerminal E10-1 拡張ボード（オプション）</th>

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

<strong><span><font color={'FFFFFF'} size={"4"}> 詳細を確認🖱️</font></span></strong>

</a>

</div></td>

</tr>

</tbody></table>

### Wifi Halow 画像伝送モジュール

これは、プロジェクトで使用したWifi Halowモジュールです。動作周波数帯域は902-928 MHz、帯域幅は8 MHz、最大速度は16 Mbps、最大通信距離は1kmに達し、送信電力は20 dBmです。デバイスはIPEXアンテナインターフェース、10/100 Mbpsネットワークポート、TTLシリアルポート（最大350 kbps）を提供し、WPA2-PSK AES暗号化をサポートし、5V/12V電源供給、-20°Cから70°Cでの信頼性のある動作、平均消費電力1.5Wです。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t1_2.jpg" /></div>

## ツール準備

- **PC**：デバッグのためにreCamera に接続するために使用します。後続の操作では、reCamera のバックエンドにログインし、reTerminal 用にRaspberry Pi OSをフラッシュする必要があります。同時に、PCで問題が発生した場合のデバッグがより便利になり、あらゆる種類のソフトウェアツールが完備されています。

- **USB-Cケーブル3本**：

1つはreCamera をPCに接続して電源を供給し、他の2つはWifi Halowモジュールに電源を供給するために使用します。

- **キーボード/マウス**：デバッグのためにreTerminal に接続します。

- **5V3A USB-C電源アダプター** Raspberry Pi 4/5と同じ電源でreTerminal に電源を供給します。購入リンク：[5V3A USB-C電源](https://www.seeedstudio.com/Wall-Adapter-Power-Supply-5VDC-3A-Type-C-p-4103.html)

- **（オプション）12V DC電源** reTerminal 拡張ボードに電源を供給するために使用します。購入リンク：[12V DC電源（US/EU）](https://www.seeedstudio.com/Power-Adapter-12V-2A-US-p-5731.html)

- **（オプション）reCamera 三角ブラケット** 購入リンク：[Mini Tripod](https://www.seeedstudio.com/Mini-Tripod-p-5978.html)

:::note

デバイスの電源供給に悩む必要はありません。Raspberry Pi 4/5 の電源供給は、拡張ボードを使用する予定がある場合、reTerminal と同時に使用できます。12V DC 電源のみで、5V3A USB-C 電源はもう必要ありません。reTerminal は拡張ボードから直接電力を得ることができるからです。

:::

## 詳細チュートリアル：reCamera Wifi Halow モジュール設定 reTerminal 設定

システム全体の一般的なアイデアは、reCamera を Wifi HaloW を通じて端末機器とネットワークを形成させることです。まず、端末機器（reTerminal）と reCamera で静的 IP を設定します。屋外やモバイルアプリケーションではルーターがなく、DHCP サービスがないため、IP を手動で割り当てる必要があります。

IP が割り当てられた後、これらのデバイスは「ローカルエリアネットワーク」を形成し、IP を通じて相互にアクセスできます。この時点で、Node-RED を通じて reCamera でストリームノードと WebSocket ノードを作成し、rtsp プッシュストリームの形でビデオストリームを送信し、WebSocket 経由で yolo 検出結果を送信します。

最後に、端末デバイスでビデオストリームと AI 検出結果にアクセスします。例えば、Windows/Linux の VLC Media Player などです。このチュートリアルでは、Linux で ffplay を通じて rtsp プッシュストリームを取得する方法を実演します。

### フェーズ 1：reCamera の設定

#### ステップ 1.1 reCamera にログイン

USB-C ケーブルで reCamera をコンピューターに接続します。電源投入直後はデバイスの起動に時間がかかります。1-2 分待った後、任意のウェブブラウザを開き、**192.68.42.1** を入力して reCamera システムに入ります。

初回ログイン時には独自のパスワードを設定する必要があります。パスワードを覚えておき、後で使用してください。reCamera システムに入ると、このページが表示されるはずです：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t2.png" /></div>

:::note

このページが表示されない場合は、ブラウザを更新してください。

デバイスが以前に使用または設定されている場合、直接 Workspace にジャンプする可能性があります。この時、ウェブサイトは：'http://192.168.42.1/#/workspace' です。次のステップにジャンプしてください。とにかく、Workspace に入ってください。

更新しても解決しない場合は、デバイスをリセットするか、技術サポートに連絡して解決してください。

:::

#### ステップ 1.2 カメラノードの設定

ページ右下の緑色のボタンをクリックして Workspace に入ります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3.png" /></div>

Workspace ページの表示

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_0.png" /></div>

カメラノードをダブルクリックして設定ページに入ります。流暢性を確保するため、カメラノードを **480P、5 フレーム** として設定します。より高い解像度やフレームレートを試すことができますが、遅延が高くなる可能性があります。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_1.png" /></div>

#### ステップ 1.3 ストリームノードの設定

前述のとおり、Node-RED 上で RTSP のプッシュ配信を設定する必要があります。左側のノード一覧で「stream」ノードを検索するか、マウスホイールで一番下までスクロールして Stream ノードを見つけてください。設定方法については、以下を参照してください：[Node-Red Stream Node Configuration](https://wiki.seeedstudio.com/ja/recamera_develop_with_node-red/#stream-node) 設定後、以下の結果が得られるはずです：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_3.png" /></div>

Node-RED チュートリアルに完全に従って、出力が sscma になることを確認してください。最終的なビデオストリームは rtsp://admin:admin@192.168.xxx.xxx:554/live に出力されます。ここで 192.168.xxx.xxx は reCamera の静的 IP アドレスです。静的 IP は自由に設定できます。ここでは実演のために 192.168.10.100 を使用します。

#### ステップ 1.4.1 WebSocket ノードの設定

端末機器で yolo によって検出された結果を表示するために、WebSocket 経由で検出結果を送信する必要があります。WebSocket ノードのタイプは 'listen' ではなく 'connect' として設定する必要があります。

ここで WebSocket ノードの URL を設定する際、ws://192.168.
nnn.nnn:9000 として設定する必要があります。実際、192.168.nnn.nnn は reTerminal または他の端末機器の静的 IP アドレスであり、上記の reCamera 静的 IP アドレスではありません。ここでは実演のために 192.168.10.3 を使用します。最終結果は以下の通りです：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t3_5.png" /></div>

#### ステップ 1.5. 設定ページに入る

または、Node RED を修正したばかりの Workspace ページで、左上の "Setting" をクリックします

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t4_1.png" /></div>

> 図 4：Workspace Setting フレーム

#### ステップ 1.6 reCamera ターミナルに入る

設定ページに入った後、'Terminal' を選択して reCamera コマンドラインに入ります

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t5.png" /></div>

> 図 5：設定ページ Terminal フレーム

Terminal をクリックした後、再度ログインする必要があります。ユーザー名：'recamera' を入力し、設定したパスワードを入力して Terminal を使用します。効果は以下の通りです。パスワードを忘れた場合は、以下のチュートリアルを参照してデバイスをリセットしてください：[reCamera Factory Reset](https://wiki.seeedstudio.com/ja/recamera_getting_started/#factory-reset)

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t6.png" /></div>

> 図 6：ログイン後の Terminal ページの効果

#### ステップ 1.7 reCamera 静的 IP の設定

reCamera では、従来の Linux ネットワークシステム（ifupdown）を通じてネットワークを設定する必要があります。方法は非常に簡単です。ネットワーク設定ファイルに入り、reCamera のイーサネットポートを希望する静的 IP：192.168.xxx.xxx.xxx に設定するだけです。ここでは静的 IP を設定します

192.168.10.100 まず vi エディターを通じてネットワーク設定ファイルに入り、reCamera ターミナルで以下のコマンドを入力します：

```bash
sudo vi /etc/network/interfaces
```

ファイルの最後に以下を追加してください：

```bash
auto eth0
iface eth0 inet static
address 192.168.10.100
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_0.png" /></div>

これらのコードは、reCamera のイーサネットポートを静的 IP 192.168.10.100、サブネットマスク 255.255.255.0、ゲートウェイ 192.168.10.1 に設定します。もちろん、特定の IP の自由設定には 192.168.3.xxx や 192.168.42.xxx を使用できます。ただし、reTerminal または端末機器と同じネットワークセグメントにあることを確認してください。例えば、reCamera が 192.168.33 の場合、reTerminal は 192.168.33.nnn として設定する必要があります。reTerminal の静的 IP が 192.168.32.nnn や 192.168.34.nnn になると、通信できません。

上記のコードを追加した後、''':wq''' を入力して vi エディターを終了し、reCamera ターミナルに戻ります。その後、'''sudo reboot''' を入力して reCamera を再起動します。

:::note

静的 IP が設定された後、reCamera はネットワークケーブルで PC に接続する必要があることに注意してください。同時に、reCamera に再度ログインする前に PC で静的 IP を設定する必要があります。ログイン時には新しく設定された reCamera 静的 IP を使用します。ここでは実演として Windows を使用して静的 IP を設定します。繰り返しますが、静的 IP で設定されたすべてのデバイスについて、同じネットワークセグメントにあることを確認する必要があります。例えば、reCamera-192.168.10.100 と reTerminal-192.168.10.3、ラップトップ（Windows）-192.168.10.2 のように。そうでなければ、相互に通信できません。Windows での参考設定は以下の通りです：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/tx.png" /></div>

:::

#### ステップ 1.8 静的 IP 設定の確認

ステップ 1.5 を繰り返して reCamera Settings に戻り、静的 IP が正常に設定されているかを確認します：

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t7_1.png" /></div>

良いですね！これで reCamera に静的 IP が設定されました。次の段階に進みましょう

### フェーズ 2：Wifi HaLow 画像伝送モジュールの設定

#### ステップ 2.1 2つの HaLow モジュールの動作モードを設定

まず、Wifi HaloW モジュールの一つを AP モードに、もう一つを STA モードに設定します。AT または STA モジュールが reCamera/ターミナルのどちらに接続されているかは気にしないでください。順序は重要ではありませんが、少なくとも一つの STA と一つの AP モードモジュールが保証されています。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t8.png" /></div>

#### ステップ 2.2 HaLow モジュールのペアリング

今度は両方のモジュールのペアリングボタンを同時に押します：
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t9.png" /></div>
その後、2つのモジュールの緑色 LED が点滅します。点滅が停止し、緑色 LED が常時点灯すると、モジュールのペアリングが成功です。

素晴らしい！2つの Wifi Halow モジュールのペアリングに成功しました。これらはネットワークケーブルの両端として見ることができ、reCamera と端末機器を接続するために使用できます。

### フェーズ 3：エンドデバイス（reTerminal）の設定

これから reTerminal で静的 IP を設定します。理論的には、NetworkManager など多くの方法があります。NetworkManager は Linux システムのネットワーク管理デーモンで、Wi-Fi/イーサネット/IP アドレス/DHCP/ホットスポット/ルーティングなどのすべてのネットワーク接続ツールを自動的に管理してくれます。NetworkManager を通じて試すことができます。ただし、学習コストを削減するため、reCamera と同じ方法を使用し、'/etc/network/interfaces' を通じて静的 IP アドレスを設定します。

:::note

繰り返しになりますが、reTerminal は、ネットワークポートと画面を持つ任意の（エッジ）コンピューティングデバイスに置き換えることができます。これには、ラップトップ、デスクトップ、開発ボードなどが含まれますが、これらに限定されません。固定位置での監視には、Windows ラップトップ/デスクトップを使用できます。モバイル展開には、画面付きの Raspberry Pi ベースの端末デバイスを使用できます。このチュートリアルでは、reTerminal reTerminal E10 拡張ボード（屋外電源用拡張ボード）を使用します。独自の電源を選択できます。

:::

#### ステップ 3.1 reTerminal を起動する

reTerminal は工場出荷時にシステムが搭載されており、理論的には直接 Raspbian に入ることができます。ただし、電源投入後に左下の緑色 LED が点灯/点滅するが画面が黒い場合は、以下のチュートリアルを参照してシステムを再書き込みしてください。このステップには外部ディスプレイでのデバッグが必要です。[reTerminal 初期化チュートリアル](https://wiki.seeedstudio.com/ja/reTerminal/#flash-raspberry-pi-os-with-drivers-from-seeed-to-emmc)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t10.jpg" /></div>

#### ステップ 3.2 NetworkManager サービスを無効にする

キーボードとマウスを reTerminal に接続し、**Ctrl Alt T** を押してターミナルを開きます。NetworkManager が上記の方法と競合するため、NetworkManager サービスを無効にする必要があります。reTerminal ターミナルで実行します：

```bash
sudo systemctl stop NetworkManager
sudo systemctl disable NetworkManager
```

#### ステップ 3.3 reTerminal 静的 IP を設定する

ステップ 1.7 と同様に、reTerminal ターミナルで：

```bash
sudo nano /etc/network/interfaces
```

ネットワーク設定ファイルに移動し、ファイルの最後に以下を追加します。ここでは reTerminal 静的 IP を **192.168.10.3** に設定します：

```bash
auto eth0
iface eth0 inet static
address 192.168.10.3
netmask 255.255.255.0
gateway 192.168.10.1
```

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t11.jpg" /></div>

:::note

将来 NetworkManager を再利用したい場合は、'/etc/network/interfaces' で新しく追加した 'auto eth0' の 4 行、合計 5 行を削除するだけです。

その後、実行します：

```bash
sudo systemctl enable NetworkManager
sudo systemctl restart NetworkManager
```

:::

ctrl s で保存し、ctrl x で終了します。その後、'''reboot''' を入力して reTerminal を再起動します。

#### ステップ 3.4 静的 IP 設定を確認する

reTerminal ターミナルに戻り、次のコマンドを実行します：'''ifconfig''' で静的 IP アドレスが正常に設定されているかを確認します。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t12.png" /></div>

'eth0' で IP = **192.168.10.3** が表示されれば成功です。

完璧です！すべての機器が設定されました。次の段階に進むことができます :)

### フェーズ 4：接続と実行

ステップ 1.2 で rtsp プッシュストリームノードを設定したことを覚えていますか？'''rtsp://admin:admin@192.168.xxx.xxx:554/live''' に既に rtsp ビデオストリームがあります。ここで '192.168.xxx.xxx' は、ステップ 1.6 で手動設定した **reCamera 静的 IP** であり、reTerminal 静的 IP ではありません。私の場合、対応する rtsp プッシュストリームは：

```
rtsp://admin:admin@192.168.10.100:554/live
```

実際には、**VLC Player** などの任意のソフトウェア方法を使用してビデオストリームを開くことができます。

ただし、使いやすさのため、ffmpeg の **ffplay コマンド** を使用してターミナルで直接 rtsp ビデオストリームを開きます。

#### ステップ 4.1 reTerminal 拡張ボードをインストールする

参考チュートリアル：[reTerminal E10 インストールガイド](https://wiki.seeedstudio.com/ja/reTerminal_Mount_Options/)

拡張ボードをインストールした後、reTerminal の usbc ポートを使用して HaLow モジュールに電源を供給でき、2 つの usba ポートにマウスとキーボードを接続できます。

#### ステップ 4.2 Wifi HaLow 画像伝送モジュールをインストールする

マッチした 2 つの画像伝送モジュールを reCamera と reTerminal にインストールします

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_1.jpg" /></div>

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t13_2.jpg" /></div>

#### ステップ 4.3 ffmpeg と nmap を reTerminal にインストールする

ffmpeg は rtsp プッシュストリームの取得に使用され、nmap はリスト表示に使用されます。reTerminal ターミナルで実行します：

```bash
sudo apt install ffmpeg
sudo apt install nmap
```

#### ステップ 4.4 rtsp ビデオストリームを再生する

ffplay コマンドを実行して reCamera rtsp ストリームを取得します（ffmpeg コマンドに属します）：

```bash
ffplay -rtsp_transport udp -max_delay 20000 -probesize 2M rtsp://admin:admin@192.168.10.100:554/live
```

ffplay コマンドのパラメータの説明は以下の通りです：

-'-rtsp_transport udp'：UDP 転送プロトコルの使用を指定します。reCamera はデフォルトで UDP ストリーミングを使用するためです。

-'-max_delay 20000'：ネットワーク遅延を処理するために最大遅延を 20 秒に設定します。

-'-probesize 2M'：ビデオストリームの再生速度を向上させるためにプローブサイズを 2MB に設定します。

-'rtsp://admin:admin@192.168.10.100:554/live'：これは reCamera rtsp 取得アドレスです。独自のアドレスに置き換えてください。

この時点で新しいウィンドウがポップアップし、rtsp ビデオストリームが内部に表示されます。ウィンドウをダブルクリックするとフルスクリーン再生できます。

:::note
または、VLC Player や GStreamer を使用して rtsp ビデオストリームを開くこともできます。reTerminal ターミナルで次のコマンドを実行して GStreamer をインストールします：

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

その後、コマンドを実行して rtsp ビデオストリームを再生します：

```bash
gst-launch-1.0 rtspsrc location=rtsp://admin:admin@192.168.10.100:554/live latency=2000 ! rtph264depay ! h264parse ! avdec_h264 ! videoconvert ! autovideosink
```

:::
bus

#### ステップ 4.5 Yolo テスト結果を監視する

reTerminal で **Ctrl + Alt + T** を押して新しいターミナルを開きます。AI 検出結果を受信するために WebSocket サーバーを開始します。次のコマンドを実行します：

```bash
wscat -l 9000
```

サーバーが開始されると、次のように表示されます：

```bash
Listening on port 9000 (press CTRL+C to quit)
```

reCamera からプッシュされた検出結果を表示するために、このターミナルを開いたままにしておきます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/t15.jpg" /></div>
上の画像は、GStreamer による RTSP ストリーミングと WebSocket によるテキスト AI 検出結果を示しています。

左側のターミナルは検出結果を示しています：

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

**おめでとうございます！独自のリモート AI 検出システムを実装しました。**

## 可能性を探る

冒頭で述べたように、このプロジェクトはリモート AI 検出の簡単な例に過ぎません。より複雑なシナリオに拡張することができます。ここではいくつかの例を紹介します。これらの例はすべて後で Github に更新される予定です。

### ケース 1：野生キャンプ熊警告システム

熊検出モデルを reCamera にアップロードし、森林キャンプサイトの固定位置にデバイスを配置して、潜在的な熊の侵入を検出します。reTerminal や他のデバイスを通じて遠距離からエリアを監視でき、野生動物に近づきすぎることを避け、危険のリスクを軽減できます。

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/ta_1.jpg" /></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">

<a href="https://forum.seeedstudio.com/" class="button_forum"></a>

<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>

</div>

<div class="button_tech_support_container">

<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>

<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>

</div>
