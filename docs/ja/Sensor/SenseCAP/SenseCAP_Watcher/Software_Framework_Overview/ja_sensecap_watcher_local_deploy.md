---
description: このチュートリアルでは、SenseCraftサービスからWatcherのAIサービスをローカルにデプロイしてWatcherを使用する方法について説明します。
title: WatcherのAI機能をローカルにデプロイする
image: https://files.seeedstudio.com/wiki/watcher_getting_started/watcherAI.png
slug: /ja/watcher_local_deploy
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
---

# WatcherのAI機能をローカルにデプロイする

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/87.png" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherの動画</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div><br />

SenseCAP Watcherは、空間内の異常を監視し、その後アクションを実行するのに役立つAIウォッチャーです。WatcherはSenseCraft AIサービスを利用できますが、独自のデバイスでAI機能をローカルにデプロイするオプションも提供しており、より大きな制御、プライバシー、柔軟性を提供します。

この包括的なガイドでは、ローカルデバイスでWatcherのAIサービスを設定およびデプロイするプロセスを順を追って説明します。Windows PC、macOSマシン、またはNVIDIA® Jetson AGX Orinを使用している場合でも、独自の環境でWatcherのAI機能の力を活用するのに役立つステップバイステップの手順を提供します。

このガイド全体を通して、必要なソフトウェアとハードウェアの準備、サポートされている各プラットフォームのデプロイメントプロセス、およびWatcherのローカルAIサービスを効果的に活用して新しい可能性を解き放ち、生産性を向上させる方法について説明します。このガイドの最後までに、独自のデバイスでWatcherのAI機能を活用する方法をしっかりと理解し、ニーズに合わせてカスタマイズされたインテリジェントでパーソナライズされたソリューションを作成できるようになります。

## ソフトウェアの準備

Watcherのローカルデプロイメント機能を利用するには、ユーザーはまず必要なソフトウェアをダウンロードする必要があります。ソフトウェアパッケージには、Watcherアプリケーションとデバイス AIサービスコンポーネントが含まれており、ユーザーがローカルAIサービスを設定および構成できるようになります。

ユーザーは以下のダウンロードリンクからWatcher APPをダウンロードできます：

- **Windows**用：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.exe" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Windows用 🖱️</font></span></strong>
    </a>
</div>

- **macOS**用：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_latest.dmg" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> macOS用 🖱️</font></span></strong>
    </a>
</div>

- **Linux**用：

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://staticfiles.sensecraft.ai/watcher_service_arm64_latest.deb" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Linux用 🖱️</font></span></strong>
    </a>
</div><br />

お使いのオペレーティングシステムに基づいて適切なダウンロードリンクを選択してください。Watcher APPはWindows、macOS、および主要なLinuxディストリビューションと互換性があり、異なるプラットフォーム間でシームレスなエクスペリエンスを保証します。

## ハードウェア準備

WatcherのAI機能をローカルに展開する際にスムーズで最適な体験を確保するために、お使いのデバイスは最小ハードウェア要件を満たす必要があります。これらの要件はオペレーティングシステムによって異なります。以下は、サポートされている各プラットフォームのハードウェア要件です：

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
      <td align="center">GeForece RTX2070</td>
      <td align="center">Apple M1 16 GB</td>
      <td align="center">GeForece RTX2070</td>
    </tr>
    <tr>
      <th>RAM（最小構成）</th>
      <td align="center">8 GB</td>
      <td align="center">16 GB</td>
      <td align="center">8 GB</td>
    </tr>
    <tr>
      <th>ストレージ（最小構成）</th>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
      <td align="center">20 GB</td>
    </tr>
  </table>
</div>

これらは最小要件であり、より高い仕様を持つことでWatcherのAIサービスのパフォーマンスと応答性を大幅に向上させることができることに注意することが重要です。複数のAIサービスを同時にデプロイしたり、大量のデータを処理したりする予定がある場合は、より高度なハードウェア構成を持つデバイスの使用をお勧めします。

### パフォーマンスに関する考慮事項

WatcherのローカルデプロイされたAIサービスのパフォーマンスは、デバイスのハードウェア仕様によって異なる場合があります。以下は一般的なパフォーマンスガイドラインです：

- **RAM**: より多くのRAMにより、スムーズなマルチタスクが可能になり、より複雑なAIモデルと大きなデータセットを処理できます。
- **グラフィックスカード**: RTX2070のような専用グラフィックスカードは、特にコンピュータビジョンと深層学習を含むタスクにおいて、AI計算を大幅に加速できます。
- **ストレージ**: AIモデル、データセット、生成された出力を保存するために十分なストレージ容量が不可欠です。推奨される20GBのストレージは、WatcherのAIサービスに十分なスペースを確保します。

WatcherのAIサービスをローカルにデプロイする際は、特定の使用ケースと使用予定のAIモデルの複雑さを考慮することが重要です。リアルタイム処理が必要な場合や、リソース集約的なタスクを処理する予定がある場合は、最適なパフォーマンスを確保するために、より高性能なハードウェア構成を選択することをお勧めします。

上記のハードウェア要件を満たし、パフォーマンス要因を考慮することで、ローカルデバイスでWatcherのAI機能のスムーズで効率的なデプロイを確保できます。

### デバイスベンチマーク

以下は、一部のデバイスでAIサービスをデプロイした後の応答時間です。

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
      <td align="center">5s</td>
      <td align="center">17m14s</td>
      <td align="center">36s</td>
      <td align="center">18s</td>
    </tr>
    <tr>
      <th>画像分析時間</th>
      <td align="center">4s</td>
      <td align="center">4m10s</td>
      <td align="center">8s</td>
      <td align="center">7s</td>
    </tr>
  </table>
</div>

NVIDIA Jetson AGXシリーズ製品をRTX 4090などのコンシューマーグレードグラフィックスカードとAI関連タスクで比較する場合、Jetson AGXシリーズは以下のような主要な利点を提供します：

1. 産業グレードの信頼性：Jetson AGXシリーズ製品は産業および商業アプリケーション向けに設計されており、これは平均故障間隔（MTBF）がより長いことを意味します。これらは問題を発生させることなく、24時間365日連続動作するように構築されています。対照的に、RTX 4090などのコンシューマーグレードグラフィックスカードは、このような要求の厳しい24時間体制の動作向けに設計されておらず、同レベルの信頼性を提供しない可能性があります。

2. コンパクトサイズと低消費電力：Jetson AGXシリーズ製品は、組み込みおよびエッジコンピューティングアプリケーションを念頭に置いて設計されています。ハイエンドコンシューマーグラフィックスカードと比較して、より小さなフォームファクターを持ち、消費電力も少なくなっています。これにより、スペースに制約のある環境での展開により適しており、全体的な運用コストを削減します。低消費電力はまた、発熱量の減少を意味し、これは組み込みシステムにとって重要であり、冷却要件を最小限に抑えるのに役立ちます。

これらの利点に加えて、Jetson AGXシリーズはAIワークロード向けに最適化された包括的なソフトウェアスタックを提供し、開発者がAIアプリケーションを効率的に作成・展開することを容易にします。産業グレードの信頼性、コンパクトサイズ、低消費電力、最適化されたソフトウェアスタックの組み合わせにより、Jetson AGXシリーズは、特にRTX 4090などのコンシューマーグレードグラフィックスカードと比較した場合、AI関連プロジェクトおよびアプリケーションにとって魅力的な選択肢となります。

## Windowsでの展開

WindowsデバイスでWatcherのAI機能を展開するには、以下の簡単な手順に従ってください。

**ステップ1**. コンピューターのダウンロードフォルダーまたは指定された場所でダウンロードした`.exe`ファイルを見つけます。`.exe`ファイルをダブルクリックしてインストールプロセスを開始します。インストールウィザードがセットアッププロセスをガイドします。インストール中に追加の選択や設定を行う必要はありません。

**ステップ2**. インストールが完了したら、Watcherアプリケーションを起動します。アプリケーションを初回起動すると、使用したいAIモデルを選択するよう求められます。Watcherは2つのオプションを提供します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/88.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA：このオプションを選択すると、Watcherは必要なAIモデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードは**約10GB**のサイズになる可能性があるため、時間がかかる場合があります。中断や不完全なダウンロードを避けるため、モデルダウンロードプロセス中は安定した高速インターネット接続を確保してください。

2. OpenAI：OpenAIのモデルを使用したい場合は、事前にOpenAI APIキーを準備する必要があります。有効なAPIキーとOpenAIモデルを使用するのに十分なクレジットがあることを確認してください。プロンプトが表示されたら、APIキーを入力してWatcherがOpenAIのサービスを使用するよう設定します。

ニーズとリソースに最適なオプションを選択してください。十分なストレージスペースと信頼できるインターネット接続がある場合、Llama 3.1 + LLaVAオプションは自己完結型のソリューションを提供します。OpenAIモデルの柔軟性とパワーを好み、APIキーの準備ができている場合は、OpenAIオプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

モデルファイルがダウンロードされインストールされると、WatcherはWindowsデバイスで使用する準備が整います。

## macOSでのデプロイメント

macOSデバイスでWatcherのAI機能をデプロイするには、以下の手順に従ってください。

**ステップ1**. コンピュータのダウンロードフォルダまたは指定された場所でダウンロードした`.dmg`ファイルを見つけます。`.dmg`ファイルをダブルクリックして開きます。新しいウィンドウが表示され、インストールパッケージの内容が表示されます。

**ステップ2**. 新しいウィンドウで、WatcherアプリケーションアイコンとApplicationsフォルダのエイリアスが表示されます。Watcherアプリケーションアイコンをクリックしてドラッグし、ウィンドウ内のApplicationsフォルダエイリアスにドロップします。この操作により、WatcherアプリケーションがコンピュータのApplicationsフォルダにコピーされます。
コピープロセスが完了したら、`.dmg`ウィンドウを閉じることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/89.png" style={{width:600, height:'auto'}}/></div>

**ステップ3**. アプリケーションを初回起動すると、Watcherは必要なAIモデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードは約10GBのサイズになる可能性があるため、時間がかかる場合があります。モデルダウンロードプロセス中は、中断や不完全なダウンロードを避けるため、安定した高速インターネット接続を確保してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/90.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: このオプションを選択すると、Watcherは必要なAIモデルと関連ファイルのダウンロードを自動的に開始します。これらの追加ダウンロードは約**10GB**のサイズになる可能性があるため、時間がかかる場合があります。モデルダウンロードプロセス中は、中断や不完全なダウンロードを避けるため、安定した高速インターネット接続を確保してください。

2. OpenAI: OpenAIのモデルを使用したい場合は、事前にOpenAI APIキーを準備する必要があります。有効なAPIキーとOpenAIモデルを使用するのに十分なクレジットがあることを確認してください。プロンプトが表示されたら、APIキーを入力してWatcherがOpenAIのサービスを使用するように設定します。

ニーズとリソースに最適なオプションを選択してください。十分なストレージ容量と信頼できるインターネット接続がある場合、Llama 3.1 + LLaVAオプションは自己完結型のソリューションを提供します。OpenAIモデルの柔軟性とパワーを好み、APIキーが準備できている場合は、OpenAIオプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

モデルファイルがダウンロードされインストールされると、WatcherはmacOSデバイスで使用する準備が整います。

## NVIDIA® Jetson AGX Orin / Linuxでのデプロイメント

NVIDIA® Jetson AGX OrinまたはLinuxデバイスでWatcherのAI機能をデプロイするには、以下の手順に従ってください。

**ステップ1**. Jetson AGX OrinまたはLinuxデバイスでターミナルウィンドウを開きます。

**ステップ2**. `cd`コマンドを使用して、ダウンロードした`.deb`ファイルが配置されているディレクトリに移動します。以下のコマンドを実行してWatcherをインストールします。

```
sudo dpkg -i watcher_service_x.x.x_arm64.deb
```

`watcher_service_x.x.x_arm64.deb` を実際にダウンロードした `.deb` ファイルの名前に置き換えてください。インストールプロセスが開始されます。インストールを承認するためにシステムパスワードの入力を求められる場合があります。インストールが完了するまで待ちます。ターミナルには進行状況と追加情報が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/91.png" style={{width:800, height:'auto'}}/></div>

**ステップ 3**. インストールが完了したら、ターミナルで watcher と入力するか、アプリケーションランチャーで見つけることで Watcher を起動できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/92.png" style={{width:800, height:'auto'}}/></div>

1. Llama 3.1 + LLaVA: このオプションを選択すると、Watcher は必要な AI モデルと関連ファイルの自動ダウンロードを開始します。これらの追加ダウンロードは約 **10 GB** のサイズになる可能性があるため、時間がかかる場合があります。モデルのダウンロードプロセス中は、中断や不完全なダウンロードを避けるために、安定した高速インターネット接続があることを確認してください。

2. OpenAI: OpenAI のモデルを使用したい場合は、事前に OpenAI API キーを準備する必要があります。有効な API キーと OpenAI モデルを使用するのに十分なクレジットがあることを確認してください。プロンプトが表示されたら、API キーを入力して Watcher が OpenAI のサービスを使用するように設定してください。

ニーズとリソースに最適なオプションを選択してください。十分なストレージ容量と信頼できるインターネット接続がある場合、Llama 3.1 + LLaVA オプションは自己完結型のソリューションを提供します。OpenAI モデルの柔軟性とパワーを好み、API キーが準備できている場合は、OpenAI オプションを選択してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/96.png" style={{width:800, height:'auto'}}/></div>

Windows と macOS のインストールと同様に、Watcher は必要な AI モデルと関連ファイルの自動ダウンロードを開始します。

## SenseCraft APP でローカル AI サービスの使用を設定する

SenseCraft APP で Watcher が提供するローカル AI サービスを使用するには、以下の簡潔な手順に従ってください：

**ステップ 1**. デバイスで Watcher APP を開き、中央左部分の **CLICK TO START SERVICE** ボタンをクリックします。ボタンが **SERVICE IS STARTED** に変わるまで待ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/94.png" style={{width:800, height:'auto'}}/></div>

**ステップ 2**. SenseCraft APP で、Watcher インターフェースに移動し、右上角の設定ボタンをタップします。設定メニューから **Device AI Service** を選択します。

**ステップ 3**. Watcher APP のホーム画面から URL と Token をコピーします。

**ステップ 4**. SenseCraft APP の **Device AI Service** 設定内で、URL と Token をそれぞれのフィールドに貼り付けます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/93.png" style={{width:250, height:'auto'}}/></div><br />

**ステップ 5**. これで SenseCraft APP を通じて Watcher にタスクを割り当てることができ、Watcher はローカルにデプロイされた AI 機能を使用してそれらを処理します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/95.png" style={{width:800, height:'auto'}}/></div>

:::caution
**[ハードウェア準備](#hardware-preparation)** で推奨されているコンピュータ構成をお使いのコンピュータが満たしていることを確認することが重要です。推奨構成を下回る場合、コンピュータが画像の1つを全力で分析している可能性があるため、認識結果とアラームメッセージを時間通りに受信できない場合があります。この時点で Watcher は常に観察状態にあるように見えます。
:::

これらの手順を完了することで、デバイス上で直接 Watcher の AI サービスの力を活用でき、プライバシーの強化と独自の統合システムを便利にカスタマイズする能力を確保できます。Watcher の AI 機能がローカルで実行されることで、データを自分の管理下に置きながら、高度なタスク、分析、自動化を安全かつ効率的に実行できます。

アプリケーションディレクトリでローカライズされたデプロイメント後のメッセージプッシュに **[HTTP Message Block](https://wiki.seeedstudio.com/integrate_watcher_to_ha/#step-6-place-the-task-and-configure-the-http-message-block)** を使用するチュートリアルを引き続き追加していきますので、ご期待ください！

## FAQ

### SenseCap Watcher Service が動作しない

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq1.png" style={{width:800, height:'auto'}}/></div>

Service Host の IP はあなたのコンピューターの IP アドレスである必要があります。そうでない場合、SenseCAP Watcher Service は動作しません。以下の手順に従って修正する必要があります。

1. Win + R を押す > "ncpa.cpl" と入力 > Enter。

2. "Wi-Fi" または Ethernet を右クリック > "プロパティ" を選択。

3. IPv4 または IPv6 をダブルクリック > "詳細設定" をクリック。

4. 自動メトリックのチェックを外す > 1（または希望する数値）を入力 > OK をクリック。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/faq2.png" style={{width:800, height:'auto'}}/></div>

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
