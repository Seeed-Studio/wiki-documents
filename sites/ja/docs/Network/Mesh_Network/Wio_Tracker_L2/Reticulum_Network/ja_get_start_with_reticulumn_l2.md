---
description: このガイドでは、Seeed Studio L2 Pro を使用して Reticulum メッシュネットワークに接続するために、Reticulous をインストールする方法を説明します。
title: Reticulous を使ってみよう
keywords:
    - reticulum
    - L2 Pro
    - reticulous
    - mesh network
    - network stack
    - LoRa mesh
    - transport-agnostic
image: https://files.seeedstudio.com/wiki/SenseCAP/Wio_Tracker_L2/L2First.png
slug: /reticulum_l2_pro_reticulous
sku: 100029766
sidebar_position: 1
last_update:
  date: 11/27/2026
  author: Michelle Huang
createdAt: '2026-11-27'
updatedAt: '2026-11-27'
url: https://wiki.seeedstudio.com/ja/reticulum_l2_pro_reticulous/
---

# Reticulous を使った L2 Pro 上の Reticulum

## Reticulum とは？

[Reticulum](ihttps://reticulum.network/) はトランスポート非依存のメッシュ _ネットワークスタック_ であり、LoRa のみの使用にとどまらないメッシュネットワークを可能にします。Reticulum を使うと、ノード同士は LoRa、WiFi、Bluetooth BLE、その他利用可能なあらゆる種類の無線（FM、AM、UHF など）だけでなく、インターネットや将来登場するあらゆるものを介して、_すべて同時に_ 相互接続できます。 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/reticulumdescription.png" style={{width:900, height:'auto'}}/>
</div>

Reticulum は、LoRa のみのメッシュネットワークを目指したこれまでの試みとは異なり、単なるメッセージングプロトコルではなく、完全な _ネットワークスタック_ です。プロトコルやアプリケーションは、Reticulum 自体の _上に_ 制限なく構築・利用できます。Reticulum は、メッシュネットワークと通信、そして _ポストインターネット_ 時代のネットワーキングに対する真に新しい[思想](https://reticulum.network/manual/zen.html)です。

Reticulum Network Stack (RNS) には膨大な可能性があり、今まさに探索が始まったばかりです。その[ドキュメント](https://reticulum.network/manual/index.html)は非常に充実しており、Reticulum を深く理解し、その上に構築したい人が最初に読むべき場所です。 

Reticulum を試してみたい人は、任意の OS を実行している任意のコンピュータで利用できます。パッケージマネージャ（apt、pip、pipx）を使って、ベースとなる _reticulum_ パッケージと、ターミナルベースのコンパニオンアプリ _nomadnet_ や GUI プログラム _sideband_ を簡単にインストールするのが良い出発点です。よりモダンで統合された Reticulum への接続方法として、[ratspeak](https://ratspeak.org/) や [meshchatX](https://meshchatx.com/) を好む人もいるでしょう。ローカル WiFi やインターネット経由などで、電話やコンピュータを Reticulum ネットワークに接続できるアプリケーションが多数存在します。

## Reticulous

Reticulum への接続方法のうち、ほとんど事前の技術知識を必要としない、シンプルで統合された方法の 1 つが [Reticulous](https://reticulous.net/) であり、このクイックチュートリアルの対象となるものです。 

Reticulous は ESP32 シリーズのマイコン向けの完全統合スイートであり、フル Reticulum スタック、グラフィカル OS（Web UI を含む）、そしてメッセージ送信、nomadnet ページの閲覧、音声通話、音声会議への参加などを簡単に行える多数のアプリを備え、LoRa、Bluetooth、WiFi を利用します。

Reticulous は主にオランダのインターネット草創期のパイオニアである Rop Gonggrijp によって開発されています。これは慎重に設計され、LLM の利用のみで専らプログラムされています。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/1_reticulous-website.png" style={{width:900, height:'auto'}}/>
</div>

### L2 Pro への Reticulous のインストール


1. _WebSerial_ プロトコルに対応した Web ブラウザを使用します。具体的には、v.151 より新しいバージョンの FireFox（それ以前のバージョンでは [Webserial addon](https://addons.mozilla.org/en-US/firefox/addon/webserial-for-firefox/) のインストールが必要です）、または任意の Chrome 系ブラウザです。

2. ブラウザで [reticulous website](https://reticulous.net) にアクセスし、_"flashing"_ をクリックして [open flashmon](https://reticulous.net/flashmon/) のリンクを開くか、あるいは [flashmon](https://reticulous.net/flashmon/)（Reticulous 用のフラッシングアプリケーション）に直接接続します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_reticulous-flashing.png" style={{width:600, height:'auto'}}/>
</div>

3. デバイスが USB 経由で接続されていることを確認します。ブラウザに _シリアルポートへのアクセス_ を許可する必要があるかもしれませんが、その方法はブラウザや OS によって異なります。 

Linux 系 OS のユーザーの場合、次のコマンドを実行して、ユーザーを _dialout_ グループに追加する必要があります：

```
sudo adduser [name-of-your-user] dialout
``` 

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/2_L2-usb-connect.jpg" style={{width:600, height:'auto'}}/>
</div>

4. フラッシングを行うには、デバイスを DFU モードにする必要があります。デバイス右側中央にある _user_（"U/B"）ボタンを押しながらデバイスの電源を入れるか、すでに電源が入っている場合は _reset_ ボタンを押している間、そのボタンを押し続けてください。画面が黒くなれば、デバイスは DFU モードになっており、フラッシングの準備ができています。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/3_reticulous-flashing-detecting.png" style={{width:600, height:'auto'}}/>
</div>

5. Reticulous Flashmon は正しいデバイスモデルを検出し、ダイアログボックスを表示するはずです。_"Flash Reticulous to seeed-l2pro"_ を押します。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/4_reticulous-flashing-in-progress.png" style={{width:600, height:'auto'}}/>
</div>

6. フラッシュが完了するまで待つと、デバイスは自動的に再起動します。


### Reticulous の設定

フラッシングが成功したら、Reticulous を設定する方法がいくつかあります：

#### 画面上のオンボーディングアプリから

デバイスの画面に、基本的なパラメータの設定を促すメッセージが表示されます。WiFi ネットワークへの接続、デバイスのマスターパスワードの選択、LoRa パラメータの入力などです。

#### WebUI 経由

Reticulous の便利な機能の 1 つが WebUI です。Web ブラウザから reticulous のすべての機能を、デバイス自身の画面よりも広く、簡単に操作できます。これは（屋上やバルコニーのエンクロージャ内に設置された Xiao のような）組み込みデバイスに対してリモートで使用することもできますし、画面やインターフェースを持たないデバイス（Xiao など）のためにも利用できます。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-webui-LXMF.png" style={{width:900, height:'auto'}}/>
</div>

起動後最初の 10 分間、reticulous は名前が _"reticulous_" で始まる WiFi ネットワークを作成します。それに接続し、Web ブラウザで https://reticulous.local を開きます（証明書について警告されるかもしれませんが、これは正常なので、そのまま接続してください）。

ここでは、デバイス本体で操作する場合と同じオンボーディングオプション（マスターパスワード、WiFi 設定、LoRa パラメータなど）が表示されます。 


#### インターフェース

Reticulum における重要な概念の 1 つが _インターフェース_ の概念です。Reticulum はトランスポート非依存であるため、あらゆる手段で接続できます。各 _インターフェース_ は 1 つの接続手段を表します。適切に設定されると、Reticulum は宛先がどこにあるかに応じて、すべてのインターフェースを透過的に経由して情報をルーティングします。あるインターフェースがダウンしても、トラフィックは残りのインターフェースを通じて継続します。

インターフェースは "settings" / "reticulum mesh" / "interfaces" メニューで設定でき、さまざまなタイプがあります：

- _TCP_: インターネット経由で Reticulum に接続するタイプのインターフェースです。Reticulum ネットワークのより広い範囲に接続したい場合の良い出発点です。TCP インターフェースとして使用するアドレスは [RNS recipes directory](https://directory.rns.recipes/) で見つけられます。

- _auto_: "auto" インターフェースは、利用可能な接続性（WiFi、Bluetooth BLE）を使って、範囲内にあり "auto" インターフェースを有効にしている他のデバイスに自動的に接続します。ローカルネットワークで 2 台のデバイスを接続する最も簡単な方法です。

- _LoRa_: LoRa の共通設定として、基本周波数、帯域幅、拡散率（SF）を設定することで、複数のデバイスを長距離で相互接続できます。これらの設定は、地域の規制、周波数の利用状況、およびあなたの具体的なニーズに応じて、ローカルな合意の対象とする必要があります。

- _Bluetooth_: 有効化すると、デバイスは Bluetooth インターフェースを有効にした他のデバイスに接続できます。WiFi や LoRa と比べるとかなり制限がありますが、場合によっては有用です（たとえば nRF52 ベースのデバイスには Bluetooth 接続がないなど…）。

- _rnode_: LoRa 対応デバイスを LoRa 非対応の別デバイスに接続し、そのデバイスに LoRa 機能を提供する特別なタイプのインターフェースです（いわば「LoRa モデム」のようなもの）。Reticulous はこの機能をサポートしているため、L2 Pro デバイスを使って、ラップトップやスマートフォンに _rnode_ インターフェースを提供し、USB ケーブルや Bluetooth 接続を介して LoRa 経由で Reticulum に接続させることができます。rnode インターフェースを使ってデバイス（ラップトップ、スマートフォン）に接続性を提供しつつ、同時に Reticulous の他のすべての機能を利用することができます。 


### Reticulous の利用

#### WebUI 経由

WiFi ネットワークの設定が完了したら、WiFi 設定画面（_"settings"_ メニューから _"wifi"_ サブメニューへ）に戻り、L2 Pro の IP アドレスを確認します。同じネットワークに接続されたコンピュータの Web ブラウザでその IP アドレスを入力すると、WebUI にアクセスできます。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-wifi-settings.png" style={{width:300, height:'auto'}}/>
</div>

_master password_ を入力すると、ブラウザ上のウィンドウ環境で Reticulous のすべての機能にアクセスできます。

#### デバイス上でタッチスクリーンを使用

Reticulous は「スマートフォン風」のインターフェースを備えており、Reticulum ネットワーク上でさまざまなプロトコルを利用するための専用アプリが多数用意されています。各アプリをタップして使用し、_user_ ボタン（デバイス右側中央）を使って、いつでも _アプリドロワー_ に戻ることができます。以下はいくつかのアプリの例です：


<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-main-menu.png" style={{width:300, height:'auto'}}/>
</div>


##### LXMF

LXMF（Lightweight Extensible Message Format）は、Reticulum 経由で暗号化メッセージを送信するために使用されるプロトコルです。相手の LXMF アドレスを入力するか、相手の宛先がアナウンスされて LXMF アプリの _"on the mesh"_ セクションに表示されるのを待ってから、チャットを始めましょう！

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/5_reticulous-touchscreenUI-LXMF.png" style={{width:300, height:'auto'}}/>
</div>


##### Nomadnet

Reticulum 上の一部のノードは Nomadnet ノードであり、_Micron_ マークアップを使った、非常にシンプルなテキストベースのページを提供しています。Nomadnet アプリを使って、そのようなページの _destination_ を手動で入力するか（例えば Aleph Rngit ページは、Reticulum のメインソースコードがその作者 Mark Qvist によって配布されている場所であり、その destination は "a8d24177d946de4f1f0a0fe1af9a1338" です）、あるいは Nomadnet アプリの _on the mesh_ セクションに _announces_ としていくつかの destination が現れるのを待ちます。

<div style={{textAlign:'center'}}>
<img src="https://files.seeedstudio.com/wiki/SenseCAP/Reticulumn/6_reticulous-webui-Nomadnet.png" alt="Nomad Browser displaying a chat room in the Reticulous web UI" style={{width:900, height:'auto'}} />
</div>

##### RRC

RRC は Reticulum Relay Chat の略で、インターネットで使われていた古い IRC プロトコルのようなプロトコルであり、ルーム内でのグループチャットを可能にします。

既知の _hub_ の destination を追加するか（例えば有名な _rnscommunity_ hub の destination は "28c7c1a68c735693aa8e6b8193ed44b2" です）、アプリの _on the mesh_ セクションにアナウンスされて現れるのを待ち、現れたらそれに接続して参加するルームを選ぶか、自分でルームを作成します。


##### 唯一の限界は空だけです！

Reticulous スイート内の他の多くのアプリケーションを探索し、Reticulum とその無限の可能性についてさらに学び、何千人ものユーザーからなるコミュニティに参加し、友人たちと一緒にローカルの公開ミートアップを呼びかけて、ポストインターネット・ネットワークの誕生を目撃しましょう！Reticulum 向けに独自のプロトコルやアプリケーションを開発したくなるかもしれません……しかし、それはこのチュートリアルの範囲を超えます。


### 他のデバイスに接続する

ローカルで他のデバイスに接続したり、（Reticulum ネットワークの残りの部分に接続されていてもいなくても）メッシュネットワークを構築したりするには、次の点を確認する必要があります：

1. 元の Reticulum ソフトウェアは非常にミニマルで倹約的なので、過去 20 年以内のあらゆるコンピュータ上で動作します。ノードとして古いノート PC や古い Raspberry Pi、その他の SBC を使用してください。どんなスマートフォンでも構いません。別の L2 Pro や Xiao のような、他のマイコンベースのデバイスも、完璧な Reticulum ノードになります…

2. 他方のデバイスに Reticulum（または ESP32 ベースのデバイスであれば Reticulous）をインストールします。

3. LoRa を使いたい場合は、両方のデバイスが同様の LoRa パラメータを持っていること、あるいは両方が相互接続されたネットワーク上で Wifi を使用していること、または両方が _"auto"_ インターフェースを使用し、Wi-Fi か Bluetooth が有効になっていること、もしくは両方がインターネットに接続する TCP インターフェースを持っていることを確認します。

4. 両方のデバイスが互いに自分の _destination_ を _announced_ するまで待ち、「on the mesh」リストに相手のデバイスの destination が表示されたら、一方のデバイスで LXMF アプリケーションを使ってその destination をクリックし、チャットを開始します。

TIP: Reticulum Network Stack は、ノードが自分の _destination_ を _announces_ することと、特定の destination への _path_ を見つけようとしてノードが近隣ノードに送る _path requests_ に基づいてルーティングを行います。Reticulum を実行している別のデバイスに接続するには、両方のデバイスが自分の destination を近隣ノードに _announced_ していることを確認してください。通常これは、Reticulous の起動時に自動的に行われ、その後は 30 分ごとに行われます。

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

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>