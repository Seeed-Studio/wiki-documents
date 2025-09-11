---
description: このチュートリアルでは、SenseCraftサービスを利用せずにWatcherのAIサービスをローカルでデプロイし、Watcherを使用する方法を案内します。
title: WatcherのAI機能をローカルでデプロイする
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png
slug: /ja/watcher_local_deploy
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# WatcherのAI機能をローカルでデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/87.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherの動画を見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div><br />

SenseCAP Watcherは、空間内の異常を監視し、アクションを実行するためのAIウォッチャーです。WatcherはSenseCraft AIサービスを利用することができますが、ローカルデバイス上でAI機能をデプロイするオプションも提供しており、より高い制御、プライバシー、柔軟性を実現します。

この包括的なガイドでは、WatcherのAIサービスをローカルデバイス上で設定およびデプロイするプロセスを説明します。Windows PC、MacOSマシン、またはNVIDIA® Jetson AGX Orinを使用している場合でも、ステップバイステップの手順を提供し、独自の環境でWatcherのAI機能を活用できるようにします。

このガイドでは、必要なソフトウェアとハードウェアの準備、各対応プラットフォームでのデプロイプロセス、そしてWatcherのローカルAIサービスを効果的に利用する方法について説明します。ガイドの最後には、独自のデバイスでWatcherのAI機能を活用する方法をしっかりと理解し、ニーズに合わせたインテリジェントでパーソナライズされたソリューションを作成する力を得ることができます。

## ソフトウェアの準備

Watcherのローカルデプロイ機能を利用するには、まず必要なソフトウェアをダウンロードする必要があります。このソフトウェアパッケージには、WatcherアプリケーションとデバイスAIサービスコンポーネントが含まれており、ローカルAIサービスの設定と構成を可能にします。

Watcher APPは以下のダウンロードリンクからダウンロードできます：

- **Windows**の場合：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.exe" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Windows用 🖱️</font></span></strong>
    </a>
</div>

- **macOS**の場合：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.dmg" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> macOS用 🖱️</font></span></strong>
    </a>
</div>

- **Linux**の場合：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_arm64_latest.deb" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Linux用 🖱️</font></span></strong>
    </a>
</div><br />

お使いのオペレーティングシステムに応じて適切なダウンロードリンクを選択してください。Watcher APPはWindows、macOS、および主要なLinuxディストリビューションと互換性があり、異なるプラットフォーム間でシームレスな体験を提供します。

## ハードウェア準備 {#hardware-preparation}

WatcherのAI機能をローカルで展開する際にスムーズで最適な体験を確保するためには、デバイスが最低限のハードウェア要件を満たしている必要があります。この要件はオペレーティングシステムによって異なります。以下に、各対応プラットフォームのハードウェア要件を示します。

<div class="table-center">
  <table align="center">
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Mac</th>
      <th>Linux (arm64)</th>
    </tr>
    <tr>
      <th>グラフィックスカード（推奨構成）</th>
      <td align="center">GeForce RTX2070</td>
      <td align="center">Apple M1 16 GB</td>
      <td align="center">GeForce RTX2070</td>
    </tr>
    <tr>
      <th>RAM（最低構成）</th>
      <td align="center">8 GB</td>
      <td align="center">16 GB</td>
      <td align="center">8 GB</td>
    </tr>
    <tr>
      <th>ストレージ（最低構成）</th>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
    </tr>
  </table>
</div>

これらは最低要件であることに注意してください。より高いスペックを持つデバイスを使用することで、WatcherのAIサービスのパフォーマンスと応答性が大幅に向上します。複数のAIサービスを同時に展開したり、大量のデータを処理する予定がある場合は、より高度なハードウェア構成を使用することをお勧めします。

### パフォーマンスに関する考慮事項

WatcherのAIサービスをローカルで展開する際のパフォーマンスは、デバイスのハードウェア仕様によって異なります。以下は一般的なパフォーマンスガイドラインです：

- **RAM**: RAM容量が多いほど、スムーズなマルチタスクが可能になり、より複雑なAIモデルや大規模なデータセットを処理できます。
- **グラフィックスカード**: RTX2070のような専用グラフィックスカードは、特にコンピュータビジョンやディープラーニングを含むタスクにおいて、AI計算を大幅に高速化します。
- **ストレージ**: AIモデル、データセット、生成された出力を保存するために十分なストレージスペースが必要です。推奨される20 GBのストレージは、WatcherのAIサービスに十分なスペースを提供します。

WatcherのAIサービスをローカルで展開する際には、特定の使用ケースや使用するAIモデルの複雑さを考慮することが重要です。リアルタイム処理が必要な場合やリソース集約型のタスクを処理する予定がある場合は、より高性能なハードウェア構成を選択することをお勧めします。

上記のハードウェア要件を満たし、パフォーマンス要因を考慮することで、WatcherのAI機能をローカルデバイスでスムーズかつ効率的に展開することができます。

### デバイスベンチマーク

以下は、いくつかのデバイスでAIサービスを展開した後の応答時間です。

<div class="table-center">
  <table align="center">
    <tr>
      <th>デバイス</th>
      <th>Windows 10 32GB with GeForce RTX4060 Graphics Card</th>
      <th>Windows 10 16GB with non-Graphics Card</th>
      <th>Mac Mini M1 (16 GB)</th>
      <th>NVIDIA® Jetson AGX Orin 32GB</th>
    </tr>
    <tr>
      <th>タスク分析時間</th>
      <td align="center">5秒</td>
      <td align="center">17分14秒</td>
      <td align="center">36秒</td>
      <td align="center">18秒</td>
    </tr>
    <tr>
      <th>画像分析時間</th>
      <td align="center">4秒</td>
      <td align="center">4分10秒</td>
      <td align="center">8秒</td>
      <td align="center">7秒</td>
    </tr>
  </table>
</div>

NVIDIA Jetson AGXシリーズ製品をRTX 4090のような消費者向けグラフィックスカードと比較した場合、AI関連タスクにおいて以下の重要な利点があります：

1. **産業グレードの信頼性**: Jetson AGXシリーズ製品は産業および商業用途向けに設計されており、平均故障間隔（MTBF）が長いです。これらは24時間365日連続稼働するように設計されており、問題が発生しにくいです。一方、RTX 4090のような消費者向けグラフィックスカードは、このような厳しい連続運転には対応しておらず、同じレベルの信頼性を提供することはできません。

2. **コンパクトなサイズと低消費電力**: Jetson AGXシリーズ製品は組み込みおよびエッジコンピューティング用途を念頭に設計されており、消費者向けの高性能グラフィックスカードと比較して小型で消費電力が少ないです。これにより、スペースが限られた環境での展開に適しており、運用コストを削減できます。低消費電力は熱生成を抑えるため、組み込みシステムにおいて冷却要件を最小限に抑えることができます。

これらの利点に加えて、Jetson AGXシリーズはAIワークロードに最適化された包括的なソフトウェアスタックを提供しており、開発者がAIアプリケーションを効率的に作成および展開するのを容易にします。産業グレードの信頼性、コンパクトなサイズ、低消費電力、最適化されたソフトウェアスタックの組み合わせにより、Jetson AGXシリーズはAI関連プロジェクトやアプリケーションにおいて、RTX 4090のような消費者向けグラフィックスカードと比較して魅力的な選択肢となります。

## Windowsでのデプロイ

WindowsデバイスにWatcherのAI機能をデプロイするには、以下の簡単な手順に従ってください。

**ステップ 1**. ダウンロードした`.exe`ファイルをコンピュータのダウンロードフォルダまたは指定された場所で見つけます。`.exe`ファイルをダブルクリックしてインストールプロセスを開始します。インストールウィザードがセットアッププロセスを案内します。インストール中に追加の選択や設定を行う必要はありません。

**ステップ 2**. インストールが完了したら、Watcherアプリケーションを起動します。初めてアプリケーションを起動すると、使用するAIモデルを選択するよう求められます。Watcherは以下の2つのオプションを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/88.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: このオプションを選択すると、Watcherは必要なAIモデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードは約**10 GB**のサイズになる可能性があるため、モデルのダウンロードプロセス中に安定した高速インターネット接続を確保してください。これにより、ダウンロードの中断や不完全なダウンロードを防ぐことができます。

2. OpenAI: OpenAIのモデルを使用する場合は、事前にOpenAI APIキーを準備する必要があります。有効なAPIキーとOpenAIモデルを使用するための十分なクレジットを確保してください。プロンプトが表示されたら、APIキーを入力してWatcherをOpenAIのサービスに設定します。

ニーズとリソースに最適なオプションを選択してください。十分なストレージ容量と信頼性の高いインターネット接続がある場合は、Llama 3.1 + LLaVAオプションが自己完結型のソリューションを提供します。OpenAIのモデルの柔軟性とパワーを好み、APIキーを準備している場合は、OpenAIオプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

モデルファイルがダウンロードおよびインストールされると、WatcherはWindowsデバイスで使用可能になります。

## MacOSでのデプロイ

macOSデバイスにWatcherのAI機能をデプロイするには、以下の手順に従ってください。

**ステップ 1**. ダウンロードした`.dmg`ファイルをコンピュータのダウンロードフォルダまたは指定された場所で見つけます。`.dmg`ファイルをダブルクリックして開きます。インストールパッケージの内容を表示する新しいウィンドウが表示されます。

**ステップ 2**. 新しいウィンドウにはWatcherアプリケーションアイコンとアプリケーションフォルダのエイリアスが表示されます。このウィンドウ内でWatcherアプリケーションアイコンをアプリケーションフォルダのエイリアスにドラッグします。この操作により、Watcherアプリケーションがコンピュータのアプリケーションフォルダにコピーされます。コピー処理が完了したら、`.dmg`ウィンドウを閉じることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/89.png" style={{width:600, height:'auto'}}/></div>

**ステップ 3**. 初めてアプリケーションを起動すると、Watcherは必要なAIモデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードは約10 GBのサイズになる可能性があるため、モデルのダウンロードプロセス中に安定した高速インターネット接続を確保してください。これにより、ダウンロードの中断や不完全なダウンロードを防ぐことができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/90.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: このオプションを選択すると、Watcherは必要なAIモデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードは約**10 GB**のサイズになる可能性があるため、モデルのダウンロードプロセス中に安定した高速インターネット接続を確保してください。これにより、ダウンロードの中断や不完全なダウンロードを防ぐことができます。

2. OpenAI: OpenAIのモデルを使用する場合は、事前にOpenAI APIキーを準備する必要があります。有効なAPIキーとOpenAIモデルを使用するための十分なクレジットを確保してください。プロンプトが表示されたら、APIキーを入力してWatcherをOpenAIのサービスに設定します。

ニーズとリソースに最適なオプションを選択してください。十分なストレージ容量と信頼性の高いインターネット接続がある場合は、Llama 3.1 + LLaVAオプションが自己完結型のソリューションを提供します。OpenAIのモデルの柔軟性とパワーを好み、APIキーを準備している場合は、OpenAIオプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

モデルファイルがダウンロードおよびインストールされると、WatcherはmacOSデバイスで使用可能になります。

## NVIDIA® Jetson AGX Orin / Linux へのデプロイ

NVIDIA® Jetson AGX Orin または Linux デバイスに Watcher の AI 機能をデプロイするには、以下の手順に従ってください。

**ステップ 1**. Jetson AGX Orin または Linux デバイスでターミナルウィンドウを開きます。

**ステップ 2**. `cd` コマンドを使用して、ダウンロードした `.deb` ファイルが保存されているディレクトリに移動します。以下のコマンドを実行して Watcher をインストールします。

```
sudo dpkg -i watcher_service_x.x.x_arm64.deb
```

`watcher_service_x.x.x_arm64.deb` を実際にダウンロードした `.deb` ファイルの名前に置き換えてください。インストールプロセスが開始されます。インストールを承認するためにシステムパスワードの入力を求められる場合があります。インストールが完了するまで待ちます。ターミナルには進行状況や追加情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/91.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3**. インストールが完了したら、ターミナルで `watcher` と入力するか、アプリケーションランチャーで Watcher を見つけて起動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/92.png" style={{width:800, height:'auto'}}/></div>

1. **Llama 3.1 + LLaVA**: このオプションを選択すると、Watcher は必要な AI モデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードには時間がかかる場合があり、サイズは約 **10 GB** です。モデルのダウンロード中に中断や不完全なダウンロードを避けるため、安定した高速インターネット接続を確保してください。

2. **OpenAI**: OpenAI のモデルを使用する場合は、事前に OpenAI API キーを準備する必要があります。有効な API キーと十分なクレジットを持っていることを確認してください。プロンプトが表示されたら、API キーを入力して Watcher を OpenAI のサービスを使用するように設定します。

ニーズとリソースに最適なオプションを選択してください。十分なストレージスペースと信頼性の高いインターネット接続がある場合は、Llama 3.1 + LLaVA オプションが自己完結型のソリューションを提供します。一方、OpenAI のモデルの柔軟性とパワーを好み、API キーを準備している場合は、OpenAI オプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Windows および macOS のインストールと同様に、Watcher は必要な AI モデルと関連ファイルのダウンロードを自動的に開始します。

## SenseCraft APP でローカル AI サービスを設定する

SenseCraft APP で Watcher が提供するローカル AI サービスを使用するには、以下の簡潔な手順に従ってください。

**ステップ 1**. デバイスで Watcher APP を開き、左中央セクションにある **CLICK TO START SERVICE** ボタンをクリックします。ボタンが **SERVICE IS STARTED** に変わるのを待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/94.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2**. SenseCraft APP で Watcher インターフェースに移動し、右上隅の設定ボタンをタップします。設定メニューから **Device AI Service** を選択します。

**ステップ 3**. Watcher APP のホーム画面から URL とトークンをコピーします。

**ステップ 4**. SenseCraft APP の **Device AI Service** 設定内のそれぞれのフィールドに URL とトークンを貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/93.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 5**. SenseCraft APP を通じて Watcher にタスクを割り当てることができ、Watcher はローカルにデプロイされた AI 機能を使用してそれらを処理します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/95.png" style={{width:800, height:'auto'}}/></div>

:::caution
お使いのコンピュータが **[ハードウェア準備](#hardware-preparation)** に記載された推奨構成を満たしていることを確認することが重要です。推奨構成を下回る場合、コンピュータが画像の解析に全力を注いでいる間に Watcher が常に観察状態にあるように見えるため、認識結果やアラームメッセージをタイムリーに受け取れない可能性があります。
:::

これらの手順を完了することで、デバイス上で Watcher の AI サービスの力を活用できるようになります。これにより、プライバシーが強化され、独自の統合システムを便利にカスタマイズすることが可能になります。Watcher の AI 機能をローカルで実行することで、データを自分で管理しながら、高度なタスク、分析、オートメーションを安全かつ効率的に実行できます。

**[HTTP メッセージブロック](https://wiki.seeedstudio.com/ja/getting_started_with_watcher_look_tool/#http-message-block)** を使用したローカルデプロイ後のメッセージプッシュに関するチュートリアルをアプリケーションディレクトリに追加し続けますので、ぜひご期待ください！

## FAQ

### SenseCap Watcher Serviceが動作しない

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq1.png" style={{width:800, height:'auto'}}/></div>

Service HostのIPアドレスは、あなたのコンピュータのIPアドレスである必要があります。そうでない場合、SenseCAP Watcher Serviceは動作しません。以下の手順に従って修正してください。

1. Win + Rを押す > "ncpa.cpl"と入力 > Enterを押す。

2. "Wi-Fi"またはEthernetを右クリック > "プロパティ"を選択。

3. IPv4またはIPv6をダブルクリック > "詳細設定"をクリック。

4. "自動メトリック"のチェックを外す > 1（または希望する番号）を入力 > OKをクリック。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq2.png" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、スムーズな体験を提供するため、さまざまなサポートをご用意しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>