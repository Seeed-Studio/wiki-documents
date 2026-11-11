---
description: Wio Tracker L2 Pro で Ripple UI を使い始めましょう。ファームウェアの書き込み、MeshCore ネットワークの設定、メッセージ送信、地図と GPS トラックの利用、有料機能のアンロック方法を学びます。
title: Ripple を使い始める
keywords:
  - Ripple
  - Ripple UI
  - MeshCore
  - Wio Tracker L2 Pro
image: https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png
slug: /get_started_with_ripple_l2_pro
sidebar_position: 2
last_update:
  date: 11/06/2026
  author: Michelle Huang
---

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

## Ripple とは？

Ripple UI は L2 Pro 用のタッチスクリーンファームウェアです。連絡先の追加、メッセージの送受信、地図の表示、GPS トラックの記録を、これらの作業に電話を使うことなく、デバイス上で直接行うことができます。

### Ripple と MeshCore の関係

MeshCore はメッシュ通信を処理します。Ripple UI を使うことで、L2 Pro のタッチスクリーンから直接 MeshCore を操作できます。

| Name | Purpose |
| --- | --- |
| MeshCore | LoRa メッシュ通信 |
| Ripple UI firmware | 単体で動作するタッチスクリーン操作 |
| MeshCore Companion firmware | 電話やその他のクライアントを介した操作 |

Ripple UI を直接書き込みます。事前に Companion をインストールする必要はありません。

:::note

更新されたファームウェアは MeshCore プロファイルを使用し、New Network 画面で Ripple を提供しなくなりました。

:::

### Ripple の対象ユーザー

- 電話を常時接続せずに、デバイス上で直接チャットしたいユーザー。

- オフライン地図と、自分のルートの記録を行いたいアウトドアユーザー。

- 異なる MeshCore ネットワークプロファイルを切り替えて使いたいユーザー。

- MeshCore リピーター、Room Server、センサーノードを管理する必要がある上級ユーザー。一部の管理機能には有料のアンロックコードが必要です。

## 機能

- **スタンドアロンメッセージング：** タッチスクリーンからダイレクトメッセージやグループメッセージを送信します。

- **複数のネットワークプロファイル：** 無線設定、ID、連絡先、各種設定をプロファイルごとに分けて保持できます。

- **カスタマイズ可能なホーム画面：** 連絡先、チャンネル、設定へのショートカットを追加できます。

- **地図：** microSD から地図を読み込み、ドラッグでパンし、ボタンをタップしてズームします。

- **GPS トラック：** 位置とタイムスタンプを記録し、地図上で自分のルートを表示できます。

- **スクリーンショット：** 画面左上を長押しして、現在の表示をキャプチャします。

- **リモート管理：** 対象ノードの認可を得て、ノード管理機能をアンロックします。

## ファームウェアを書き込む

お使いのデバイスに、ここで説明するバージョンの Ripple UI がすでに入っている場合は、**初回セットアップ**までスキップしてください。

2 種類のファームウェアバリアントがあります：

- **Ripple GUI: data on SD card (-SD)：** 設定とデータを microSD カードに保存します。使用前に、32 GB 以下の FAT32 形式のカードを挿入してください。

- **Ripple GUI (Internal)：** 設定とデータをデバイスの内部フラッシュに保存します。

**ステップ 1: Web フラッシャーを開く**

[Wio Tracker L2 Web Flasher](https://flasher.meshcore.io/wio-tracker-l2/) を開き、L2 用の Ripple UI ファームウェアとストレージバリアントを選択します。Chrome や Edge など、シリアルアクセスをサポートするデスクトップブラウザを使用してください。

`Seeed Studio Wio Tracker L2 Pro` を選択し、Ripple GUI バリアントを選び、ファームウェアバージョンを選択します。下のスクリーンショットは v12.3 を示しています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_flasher.png" alt="Web フラッシャーで L2 Pro、Ripple GUI バリアント、ファームウェアバージョンを選択している画面" width={1000} height="auto" /></p>

**ステップ 2: 手動でダウンロードモードに入る**

USB データケーブルを接続しながら `U/B` ボタンを押し続け、その後 `RST` を押してファームウェアダウンロードモードに入ります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_enterdfu.gif" alt="U/B ボタンと RST ボタンを使ってダウンロードモードに入る様子" width={400} height="auto" /></p>

**ステップ 3: ポートを選択して書き込む**

`Flash!` をクリックし、シリアルポートダイアログでデバイスを選択して接続します。画面の指示に従って書き込みを完了してください。

:::warning

上記の `Erase device` オプションは、アンロック状態を含め、内部フラッシュ内のデータと設定を消去します。消去する前に、重要なデータをバックアップし、Unlock Code を控えておいてください。

:::

**ステップ 4: 再起動**

書き込みが完了したら、`RST` を押して Ripple UI を起動します。

:::tip

`Flash` をクリックしても先に進めない場合は、デバイスがダウンロードモードになっているか確認してください。また、USB データケーブル、ブラウザのシリアル権限、他のアプリケーションがポートを使用していないかも確認してください。

:::

## 初回セットアップ

初回起動時に表示されるタッチスクリーンとボタンのチュートリアルに従ってください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/Ripple_boot.png" alt="Seeed Studio と MeshCore Ripple UI の起動画面" width={700} height="auto" /></p>

### ネットワークプロファイルを作成する

1. 初回起動時に表示されるタッチスクリーンと Select ボタンのチュートリアルを完了します。

2. お住まいの地域に適した無線プリセットを選択するか、ローカルネットワークで使用されている周波数、拡散率 (SF)、その他のパラメータを入力します。

3. プロファイル名を、スペースを含まない英数字で設定します。

4. プロファイルを保存します。求められた場合は、設定を反映するためにデバイスを再起動します。

2 台でテストする場合は、両方のデバイスで一致する無線設定を使用してください。同じプリセットを選ぶのが最も簡単です。カスタム設定を使う場合は、周波数と SF だけでなく、帯域幅、符号化率などのパラメータも一致しているか確認してください。

### 自分の名前を設定する

1. 左側の `L` をタップし、現在のネットワークプロファイルを開いて `Identity` を選択します。

2. デフォルト名を、`micha` や `michb` など認識しやすい名前に変更します。名前は最大 12 文字まで使用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ChangeDeviceName.png" alt="ネットワークプロファイルを開き、Identity を選択してデバイス名を変更する画面" width={1000} height="auto" /></p>

## インターフェースを見てみる

画面左側の `G`、`L`、`M` をタップして、3 つのホームページを切り替えます。

<Tabs>

<TabItem value="grid" label="G: Grid" default>

`G` は 3 × 4 のグリッドを持つカスタマイズ可能なホーム画面です。

- 空のセルを長押しして、連絡先、グループチャンネル、設定へのショートカットを追加します。

- 既存のショートカットを長押しして削除します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_G.jpg" alt="Ripple UI の Grid ホームページ" width={500} height="auto" /></p>

</TabItem>

<TabItem value="list" label="L: List">

`L` には、ネットワークプロファイル、連絡先、グループチャンネル、`Discover` が一覧表示されます。このページから連絡先の追加、Identity の編集、会話の開始を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_L.png" alt="Ripple UI の List ページ" width={500} height="auto" /></p>

スクリーンショットにはテスト時に使用した名前が表示されています。実際の一覧は、あなたのプロファイルと連絡先によって異なります。

</TabItem>

<TabItem value="map" label="M: Map">

`M` では、地図、位置情報、読み込まれた GPS トラックが表示されます。

- 画面をドラッグしてパンします。

- `+` または `−` をタップしてズームします。ピンチズームには対応していません。

- 位置追従ボタンをタップすると、地図が自分の位置を中心に保つようになります。ボタンが有効なときはオレンジ色になり、画面はオンのままになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_M.jpg" alt="Ripple UI の地図とズームコントロール" width={500} height="auto" /></p>

</TabItem>

<TabItem value="extra" label="Extra">

左下のホーム画面メニューを開き、`Extra` にアクセスすると、デバイス設定やツールを利用できます。

- **Display：** フォントサイズ、テーマ、アニメーション、アクセントカラーを調整します。

- **Wi-Fi：** 接続と地図ダウンロードを設定します。地図のダウンロードにはアンロックコードが必要です。

- **Networks：** ネットワークプロファイルを作成および管理します。

- **GPS Config：** GPS 通信設定を構成します。通常はデフォルト設定で L2 Pro で動作します。

- **Timezone：** ローカルの UTC オフセットを設定します。

- **SX1262：** LoRa 無線の初期化状態を確認します。`code=0` は成功を意味します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_Extra.jpg" alt="Ripple UI Extra のシステム設定" width={500} height="auto" /></p>

</TabItem>

</Tabs>

### タイトルバーとシステムメニュー

| Area | Function |
| --- | --- |
| タイトルバー左側をタップ | ネットワークプロファイルを変更する `Switch To` を開きます |
| 左上を長押し | スクリーンショットを撮影します |
| タイトルバー中央 | クイックスイッチを開きます |
| タイトルバー右側 | GPS 情報を開きます |
| ホーム画面左下のメニュー | Display、Wi-Fi、Networks、Timezone などのシステム設定を開きます |

### スクリーンショットを撮る

**画面左上を長押し**して、現在の表示をキャプチャします。スクリーンショットは、設定を共有したり問題を報告したりする際に利用できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_screenshot.gif" alt="画面左上を長押ししてスクリーンショットを撮る様子" width={500} height="auto" /></p>

キャプチャされたスクリーンショットは、下図のように日時を含むファイル名の BMP ファイルとして保存されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_bmp_screenshot.png" alt="日時付きファイル名で保存された BMP スクリーンショット" width={800} height="auto" /></p>

## 最初のメッセージを送る

### デバイスを検出可能にする

1. 両方のデバイスを、同じ MeshCore 無線設定で構成します。
2. 各デバイスに異なる `Identity` 名を付けます。
3. `Advert` を `On` に設定して、Identity のアドバタイズを許可します。
4. `L` ページから `Discover` を開き、近くのノードが表示されるのを待ちます。

Identity アドバタイズをすぐに送信するには、`Discover` メニューを開きます：

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_discover.bmp" alt="Scan Local、Send ID Local、Send ID Broadcast を含む Discover メニュー" width={400} height="auto" /></p>


| Option | Function |
| --- | --- |
| `Send ID Local` | 近くのデバイスにゼロホップの Identity アドバタイズを送信します |
| `Send ID Broadcast` | メッシュ全体に自分の Identity をブロードキャストします |
| `Scan Local` | 近くにあり、ディスカバリ応答をサポートするノードからの応答を要求します。リピーターの検出によく使用されます |

`Scan Local` はすべてのデバイスを一覧表示するわけではありません。ノードは通信範囲内にあり、応答するよう設定されている必要があります。

### 連絡先を追加する

1. `Discover` で対象ノードを選択します。

2. 右上のメニューを開き、`Add to Contacts` を選択します。

3. `L` に戻り、連絡先が一覧に表示されていることを確認します。

4. もう一方のデバイスでも同じ操作を行います。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_contact.png" alt="近くのノードを検出し、ノードを連絡先に追加し、連絡先リストで表示する" width={1100} height="auto" /></p>

### ダイレクトメッセージを送信する

1. 連絡先を開きます。

2. 入力フィールドをタップしてメッセージを入力します。

3. `ENTER` を押して送信し、応答を待ちます。

4. もう一方のデバイスで会話を開き、返信します。

ダイレクトメッセージは、受信側からの確認応答（ACK）を待ちます。送信に失敗した場合は、無線設定と距離を確認してから再試行してください。以前の経路が使えなくなっている場合は、`Path` で `Flood (reset)` を選択して新しい経路を探索します。

## マップと GPS トラック

### オフラインマップを準備する

1. 32 GB 以下の FAT32 形式の microSD カードを用意します。

2. カード上に次のフォルダ構造を使ってラスターマップタイルを保存します：

```text

/tiles/{zoom}/{x}/{y}.png

```

3. カードを挿入し、デバイスを起動して `M` を開きます。

4. タイルが用意されているエリアまでパンし、利用可能なズームレベルを選択します。

`zoom` はズームレベル、`x` と `y` はタイル座標です。ロックされたデバイスは **ズームレベル 1～9** のみを描画します。より詳細なズームレベルにはアンロックコードが必要です。

### Wi-Fi 経由でマップをダウンロードする（アンロックが必要）

1. 以下の手順に従ってデバイスをアンロックします。

2. ホーム画面のシステムメニューから `Wi-Fi` を開きます。

3. ネットワーク名とパスワードを入力し、マップのダウンロードを有効にします。

4. `ENTER` を押して保存し、表示されたら再起動します。

5. Wi-Fi メニューにオレンジ色の接続インジケータが表示されていることを確認します。

6. マップを開き、必要なエリアまでパンまたはズームします。タイルはオンデマンドでダウンロードされ、SD カードにキャッシュされます。

### 広告で使用する位置情報を設定する

| Advert Location 設定 | 使用される位置情報 |
| --- | --- |
| `GPS` | デバイスの GPS で取得した位置 |
| `Manual` | マップ上で `Advert Loc` を使って選択した固定位置 |

マップ上で選択したポイントを使用するには、まず `Advert Location` を `Manual` に設定します。GPS モードでは、広告は引き続き GPS 位置を使用します。

## プレミアム機能をアンロックする

アンロックコードを購入する前に、基本的なメッセージングを試すことができます。詳細なマップ、Wi-Fi マップダウンロード、より長いトラック、または高度な管理機能が必要になったらデバイスをアンロックしてください。

### デバイスのシリアル番号を確認する

デバイスメニューで `Unlock` を探して開きます。その画面に表示される **Serial number** を控えてください。購入時には、MAC アドレスの末尾数文字や Pair Device PIN ではなく、この完全なシリアル番号を使用してください。

### アンロックコードを取得する

Scott の [Ripple Ultra Unlock Code ページ](https://buymeacoffee.com/ripplebiz/e/249834)を開き、購入手順に従って、デバイスに表示されているシリアル番号を入力します。ライセンスはデバイスごとに発行されるため、1 つのライセンスにつき 1 台分のシリアル番号のみ入力してください。

デバイスに該当するアンロックコードが同梱されている場合は、次のステップに進んでください。

### デバイスにコードを入力する

1. シリアル番号に対応する Unlock Code を受け取ったら、再度 `Unlock` を開きます。

2. コード全体を入力して送信します。

3. 有効化に成功すると、`Unlock` オプションは表示されなくなります。

4. 使用したいプレミアム機能を開き、利用可能になっていることを確認します。

コードは、そのデバイスのシリアル番号と一緒に保管してください。テストでは、`erase_flash` でフラッシュを消去してファームウェアを再インストールした際に、デバイスのアンロックコードを再入力する必要がありました。

### プレミアム機能

- **自動テレメトリ：** ダイレクトパスで会話を開くとテレメトリを要求します。相手ノードが GPS テレメトリを許可している場合、位置、方向、距離を表示します。

- **Room Admin CLI：** 管理者パスワードを使って Room Server のコマンドラインにアクセスします。

- **リピーター管理：** リピーターの状態を確認し、ノードをリモート管理します。

- **センサー管理：** センサーコマンド、テレメトリ、および権限管理にアクセスします。

- **より詳細なマップズーム：** ズームレベル 9 を超えるマップタイルを表示します。

- **Wi-Fi ダウンロード：** マップタイルをオンデマンドでダウンロードし、SD カードにキャッシュします。

- **より長い GPS トラック：** ロックされたデバイスで許可されている 64 GPS ポイントを超えて記録します。

## 上級者向けの使い方

### ネットワークプロファイルを作成して切り替える

1. ホーム画面のシステムメニューを開き、`Networks` を選択します。

2. `New Network` を選択し、無線設定を構成してプロファイルに名前を付けます。

3. 表示されたら保存して再起動します。

4. タイトルバーの左側をタップし、`Switch To` でプロファイルを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_new_network.jpg" alt="Networks で MeshCore ネットワークプロファイルを作成する" width={500} height="auto" /></p>

各プロファイルは、それぞれ独自の ID、連絡先、設定を持ちます。別のプロファイルに属する連絡先を開くと、プロファイルの切り替えを促される場合があります。このプロンプトは、デバイスが相手ノードが現在使用しているネットワークを検出したことを意味するものではありません。

## FAQ

### SX1262 ステータスコード

この画面には、LoRa 無線の初期化から返される RadioLib のリターンコードが表示されます。`0` は初期化が成功したことを意味します。この画面は無線の診断を目的としています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Ripple/L2_Pro/ripple_lora_normal.jpg" alt="SX1262 initialization code=0 は成功を示す" width={500} height="auto" /></p>

### 他のデバイスを検出できない

- 両方のデバイスが、無線設定が一致する互換性のある MeshCore プロファイルを使用していることを確認します。

- 相手側のデバイスで Advert を有効にするか、`Send ID Local` を送信してもらいます。

- まずは見通しの良い場所で短距離テストから始めます。

- `Scan Local` は、探索要求に応答したノードのみを一覧表示します。すべてのデバイスからの ID 広告を代替するものではありません。

### マップが空白なのはなぜですか

SD カードのフォーマット、タイルパス、および表示中のエリアにタイルが存在するかを確認してください。ロックされたデバイスでは、ズームレベルが 1～9 の範囲内であることも確認します。有効な GPS 位置があっても、マップタイルがダウンロードされているとは限りません。

## リソース

- [Ripple プロジェクトと開発者向けアップデート](https://buymeacoffee.com/ripplebiz)

- [Ripple Ultra Unlock Code](https://buymeacoffee.com/ripplebiz/e/249834)

- [MeshCore プロジェクトとドキュメント](https://github.com/meshcore-dev/MeshCore)

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

<div className="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" className="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
