---
description: Watcherの外観カスタマイズオプションを掘り下げ、SenseCraftプラットフォームが提供するさまざまなツールを探ります。
title: SenseCraft APP 紹介
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /ja/sensecap_app_introduction
sidebar_position: 1
last_update:
  date: 05/15/2025
  author: Citric
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# SenseCraft APP ガイドライン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcherのビデオを見る</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Githubリポジトリ</font></span></strong>
    </a>
</div><br />

WatcherのカスタマイズとSenseCraftツールの世界へようこそ！この記事では、Watcherデバイスを個性的にするためのエキサイティングな可能性と、SenseCraft APPが提供する強力な機能を探ります。Watcherにユニークな外観を与えたい新しいユーザーでも、デバイスの可能性を最大限に引き出したい経験豊富な愛好家でも、このガイドはWatcherを真に自分のものにするための知識とインスピレーションを提供します。Watcherの表現デザインとSenseCraft APP設定の秘密を明らかにしながら、創造的な旅に出る準備をしてください。

## WatcherのBluetoothベースの設定

この設定を行うには、デバイスとスマートフォンの両方でBluetoothが有効になっている必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

WatcherデバイスのWi-Fi設定を使用すると、利用可能な無線ネットワークに接続し、オンラインサービスにアクセスできます。これは、Watcherのファームウェアを更新したり、SenseCraft APPとデータを同期したり、リアルタイムの監視データをクラウドにストリームしたりする際に特に便利です。

WatcherでWi-Fiを設定するには、Wi-Fi設定メニューに移動し、利用可能なネットワークをスキャンします。希望するネットワークを選択し、プロンプトが表示されたら対応する認証情報（SSIDとパスワード）を入力します。一度接続すると、Watcherは範囲内にある場合に保存されたネットワークに自動的に再接続し、安定した信頼性のある接続を確保します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
Watcherは2.4GHzネットワークへの接続のみをサポートしており、5GHzには対応していません。
:::

### 基本設定

Watcherデバイスの基本設定メニューでは、ユーザー体験をカスタマイズするためのさまざまなオプションが提供されています。主要な機能の1つは、WatcherのRGB LEDを制御する機能です。環境や好みに応じてRGB LEDを簡単にオンまたはオフにすることができます。これにより、バッテリー寿命を節約したり、視覚的な干渉を最小限に抑えたりすることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

基本設定メニューでは、音量設定にもアクセスできます。ここでは、Watcherのオーディオ出力の音量を調整してニーズに合わせることができます。通知を大音量で明確にしたい場合でも、より控えめなオーディオ体験を好む場合でも、音量設定を微調整することができます。

ディスプレイの明るさもWatcherのユーザー体験において重要な要素です。基本設定メニューでは、Watcherのディスプレイの明るさを調整して、さまざまな照明条件で最適な視認性を確保できます。ディスプレイの明るさをカスタマイズすることで、明るい日光の下で読みやすくしたり、暗い環境で明るさを抑えたりすることができ、必要に応じてバッテリー寿命を節約することも可能です。

最後に、基本設定メニューでは、Watcherの日付、時刻、タイムゾーンを設定および管理することができます。正確な時刻の管理は、適切なデータ記録や他のデバイスやサービスとの同期に不可欠です。正しい日付、時刻、タイムゾーンを設定することで、Watcherの監視データが正確にタイムスタンプされ、ローカル時間と一致するようになります。

これらの設定にアクセスして変更するには、Watcherデバイスの基本設定メニューに移動し、直感的なインターフェースを使用して希望する変更を行います。

### SenseCraftリモートコントロール

SenseCraftリモートコントロール機能は、WatcherデバイスがSenseCraftクラウドサービスと通信する方法を決定する重要な設定です。この機能を有効にすると、WatcherとSenseCraftクラウド間に接続チャネルが確立され、クラウドベースの大規模言語モデル（LLM）やリモート通知機能など、幅広い高度な機能やサービスにアクセスできます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

ただし、SenseCraftリモートコントロール機能を無効にすると、WatcherはBluetoothを介してのみモバイルデバイスと通信します。これはローカルでの制御や設定には便利ですが、強力なクラウドベースのサービスやリモート通知機能へのアクセスを失うことを意味します。また、WatcherがモバイルデバイスのBluetooth範囲外に移動すると、Watcherの制御を完全に失うリスクがあります。

SenseCraftリモートコントロール設定を管理するには、Watcherデバイスの対応するメニューに移動し、必要に応じて機能をオンまたはオフに切り替えるだけです。クラウド接続の利点を慎重に検討し、自分のニーズを考慮することで、この重要な設定をどのように構成するかについて情報に基づいた決定を下すことができます。

### HTTPメッセージブロック

WatcherのHTTPメッセージブロック機能は、RGBアラーム、APPアラーム、UARTアラームなどの他のアラーム方法と連携して動作するローカライズされたアラームサービスです。この機能の主な目的は、ユーザーのプライバシーを保護するために完全にローカライズされたメッセージプッシュサービスを提供することです。他のアラームサービスが外部プラットフォームやサーバーに依存する可能性があるのに対し、HTTPメッセージブロックはユーザー自身のHTTPエンドポイントでのみ動作するように設計されており、すべてのデータと通知がユーザーのローカル環境内に留まることを保証します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div><br />

HTTPメッセージブロックを設定するには、ユーザーは**HTTP URL**と**HTTPトークン**という2つの重要な情報を構成する必要があります。これらの詳細は、独自のHTTPサーバーまたはローカルにデプロイされたソフトウェア（例：[Watcher APP](https://wiki.seeedstudio.com/ja/watcher_local_deploy/#software-preparation)）によって提供されます。独自のHTTPサーバーを使用する場合は、正しく設定され、必要なURLとトークンを提供することを確認してください。あるいは、Watcher APPを選択した場合、ソフトウェアがこれらの構成詳細を生成および管理します。構成データを独自のサーバーまたはWatcher APPのローカルに保持することで、Watcherはユーザーのプライバシーとセキュリティの高いレベルを維持し、機密情報がユーザーの管理下に留まることを保証します。

:::caution
完全にローカルな通知サービスをSenseCraftを介さずに使用したい場合は、メッセージ通知を構成する際に**APPプッシュ通知**を選択しないでください。そうしないと、通知がSenseCraftを経由してアプリにプッシュされます。また、**HTTPプッシュ通知オプション**を選択することを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### デバイスAIサーバー

WatcherのデバイスAIサービスは、PCやJetsonのような高性能マシンなど、ローカルデバイス上でAI機能を展開できる強力な機能です。デバイスAIサービスを設定するには、付属のデバイスAIサービスソフトウェアのユーザーインターフェースに表示されるURLとWatcherサービストークンを提供する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

設定が完了すると、デバイスAIサービスはユーザーのローカルコンピューティングリソースを活用して、音声インタラクション、タスク分解、画像分析、チャットボットサービスなど、さまざまなAI機能を実現します。

AIサービスをローカルで実行する柔軟性と制御を重視するユーザーにとって、WatcherのデバイスAIサービスは包括的でカスタマイズ可能なソリューションを提供します。デバイスAIサービスの設定と構成に関する詳細情報、および各AI機能の詳細な説明については、**[WatcherのAI機能をローカルにデプロイする](https://wiki.seeedstudio.com/ja/watcher_local_deploy/)**をご覧ください。

:::caution
以前にプライベートWatcherサービスをクリックした場合、SenseCraftのクラウドサービスを使用することはできません。クラウドサービスからメッセージを受信できなくなった場合は、**SenseCraft**が選択されていないかどうかを確認してください。
:::

### デバイス設定の復元

デバイス設定の復元機能を使用すると、Watcherをデフォルトの工場出荷時設定にリセットできます。この機能は、他の方法では解決できない問題が発生した場合や、クリーンな状態から再スタートしたい場合に役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

ただし、この機能を使用する際には注意が必要です。Watcherの設定（カスタマイズ、履歴アラート記録、カスタム表現を含む）はすべて永久に失われます。組み込みのバックアップ機能はないため、復元プロセスを開始すると、以前の設定やデータを回復することはできません。

デバイス設定の復元機能にアクセスするには、Watcherデバイスの対応するメニューに移動します。復元プロセスを確認する前に、Watcherを工場出荷時設定にリセットする必要が本当にあるかどうかを慎重に検討してください。進める場合、Watcherは元の状態に復元され、必要に応じて再構成およびカスタマイズする準備が整います。

:::tip
デバイスを復元した後、アプリ内で対応するデバイスを手動で削除し、再度追加する必要があります。
:::

## その他の設定

以下の設定は、電話との Bluetooth 接続に依存しません。Watcher と電話の両方がインターネットに接続されており、SenseCraft リモートコントロール機能がオンになっていることを確認してください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### デバイス名 & デバイスグループ

デバイス名 & デバイスグループの設定を使用すると、Watcher を個別にカスタマイズし、複数のデバイスを整理して管理を簡単にすることができます。Watcher にユニークな名前を割り当てることで、Bluetooth 経由で接続する際や SenseCraft アプリを通じて管理する際に、すぐに識別できるようになります。これは、複数の Watcher デバイスを所有している場合に特に便利です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

さらに、Watcher を特定のデバイスグループに割り当てることができます。これは、異なる目的や場所で多数のデバイスを管理する際に役立ちます。たとえば、自宅、オフィス、または屋外監視用に別々のデバイスグループを作成することができます。Watcher デバイスを論理的にグループ化することで、指定された目的や場所に基づいて簡単に検索、設定、制御することが可能になります。

### サブスクリプション

サブスクリプションに登録することで、当社の高度な言語モデル機能にアクセスできます。画像を分析したり、インテリジェントな会話を楽しんだりする場合でも、当社のプラットフォームがサポートします。すべての機能を探索し、当社の技術がどのように体験を向上させるかをご確認ください。詳細はこちらをクリック！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### アップデートの確認

アップデートの確認機能により、Watcher が常に最新のファームウェアおよびソフトウェアバージョンで動作するようにします。定期的にアップデートを確認することで、新機能、パフォーマンスの向上、バグ修正、およびセキュリティ強化をすぐに利用できるようになります。

アップデートを確認するには、Watcher デバイスまたは SenseCraft アプリ内のアップデート確認メニューに移動します。アップデートが利用可能な場合、ダウンロードとインストールを促されます。Watcher の最適なパフォーマンス、安定性、およびセキュリティを確保するために、常に最新の状態に保つことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
一部の OTA バージョンでは、Watcher ユーザーが強制的にアップデートを行う必要がある場合があります。これは、重大なソフトウェアバグの修正やバックグラウンドでのサービスアップグレードが原因である可能性があります。
:::

### 検出履歴の削除

検出履歴の削除機能を使用すると、SenseCraft アプリ内に保存されている過去のアラートデータをクリアできます。これにより、アラート履歴を整理したり、最近のイベントに集中したビューを維持したりするのに役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

検出履歴を削除するには、SenseCraft アプリ内の検出履歴削除メニューにアクセスします。削除を確認する前に、この操作が不可逆的であり、すべての過去のアラートデータがアプリから完全に削除されることを慎重に確認してください。

### デバイスの削除

デバイスの削除機能は、Watcher デバイスを SenseCraft アカウントまたは Bluetooth 接続から削除したい場合に使用します。特定の Watcher を使用する必要がなくなった場合、デバイスの所有権を移転したい場合、または新たに開始する必要がある持続的な問題が発生した場合に必要となることがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

デバイスを削除するには、Watcher の設定または SenseCraft アプリ内のデバイス削除オプションを見つけます。削除を確認する前に、このプロセスが不可逆的であることを理解していることを確認してください。一度デバイスを削除すると、アカウントに関連付けられなくなり、再度使用する場合は再追加する必要があります。

:::note
アプリでデバイスを削除した後、デバイスを再度バインドしたい場合は、デバイスの設定で工場出荷時リセットを行う必要があります。
:::

## Watcher アニメーション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

Watcher デバイスは、カスタムアニメーションを通じてモニタリング体験を個性的で魅力的なものにするユニークな方法を提供します。独自の画像をアップロードすることで、スタイルを反映したり、特定のメッセージを伝えたり、単に Watcher のステータスインジケーターに楽しさを加えたりするオリジナルの表現を作成できます。

### カスタムアニメーションの作成

スキルや好みに応じて、Watcher 用のカスタムアニメーションを作成する方法はいくつかあります：

- **アニメーションソフトウェアを使用する**: Adobe After Effects や Lottie などのアニメーションソフトウェアに精通している場合は、ゼロから独自のアニメーションを作成できます。最大 5 フレームのアニメーションをデザインし、各フレームが約 500ms 表示されることを考慮してください。アニメーションを作成したら、最大 5 つのキーフレームを選択し、スクリーンショットを撮って SenseCraft APP を使用してアップロードします。

- **グラフィックデザインソフトウェアを使用する**: Figma や Adobe Illustrator などのグラフィックデザインソフトウェアを使用する方が好みの場合は、静的な画像のシリーズを作成してアニメーションを形成できます。最大 5 フレームをデザインし、各フレームが約 500ms 表示されることを考慮してください。デザインを個別の PNG 画像としてエクスポートし、SenseCraft APP を使用してアップロードします。

- **既存の GIF を使用する**: インターネットで見つけた GIF を Watcher のカスタムアニメーションとして使用したい場合は、それを簡単に PNG 画像のシリーズに変換できます。[EZGif](https://www.ezgif.com/split) のような無料のオンラインツールを使用して GIF を個々のフレームに分割します。アニメーションに最適な最大 5 フレームを選択し、これらの PNG 画像を SenseCraft APP を使用してアップロードします。

どの方法を選んでも、各画像は **PNG** 形式で、解像度が **412x412** ピクセルである必要があります。これにより、Watcher の画面で最適な表示品質が保証されます。アップロードされた画像はシームレスなアニメーションとして結合され、個性的な表現で Watcher を生き生きとさせます。

### 画像の変換とサイズ変更

希望する画像が PNG 形式でない場合や、必要な解像度 412x412 を満たしていない場合は、さまざまなツールを使用して簡単に変換およびサイズ変更できます：

- **Adobe Photoshop**: Photoshop で画像を開き、「画像」>「画像サイズ」に移動し、幅と高さを 412 ピクセルに設定（アスペクト比を維持）して、画像を PNG ファイルとして保存します。

- **GIMP**: GIMP で画像を開き、「画像」>「画像の拡大縮小」に移動し、幅と高さのフィールドに 412 を入力（アスペクト比を維持）して、画像を PNG ファイルとしてエクスポートします。

- **オンラインツール**: [Resize Image](https://www.resizeimage.net) や [CloudConvert](https://www.cloudconvert.com) のようなウェブサイトを使用して、画像を 412x412 ピクセルにサイズ変更し、PNG 形式に変換します。

### カスタムアニメーションのアップロード

PNG 画像のシリーズが準備できたら、Watcher にカスタムアニメーションを実現する準備が整います。Watcher を SenseCraft APP に接続し、「アニメーション」ページに移動します。ここでは、**待機中**、**リスニング中**、**話している状態**、**宇宙を見ている状態**、**挨拶**など、アニメーションをカスタマイズできるいくつかの Watcher 状態が表示されます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

宇宙を見ている状態や挨拶状態のアニメーションを置き換えるには、希望する状態を選択し、プロンプトに従って PNG 画像をアップロードします。各状態の例に示されている画像数と同じ数の画像をアップロードすることで、シームレスなアニメーション体験を確保してください。

:::caution
カスタムアニメーションをアップロードする際は、各画像が **PNG** 形式で、解像度が **412x412** ピクセルであることを忘れないでください。アップロードされた画像は選択した Watcher 状態のデフォルトアニメーションを置き換え、デバイスの表現を個性的にし、モニタリング体験にユニークなタッチを加えることができます。
:::

## デザイナーへの呼びかけ：創造性を輝かせよう！

SenseCraftでは、創造性とコラボレーションの力が驚くべきイノベーションを生み出すと信じています。そのため、あらゆるバックグラウンドを持つデザイナーの皆さんに、Watcherのアニメーションの可能性を広げるために、独自の視点とスキルを提供していただきたいと考えています。

魅力的で表現力豊かなアニメーションを作ることに情熱を持つデザイナーの皆さん、このエキサイティングな機会にぜひ参加してください。あなたのクリエイティブなアイデアやデザインを共有することで、Watcherのアニメーション機能の未来を形作り、より活気に満ちた、個性的なユーザー体験に貢献することができます。

キャラクターアニメーション、モーショングラフィックス、その他どのようなスタイルでも、あなたの専門知識と想像力が大きな影響を与えることができます。喜びや興奮、穏やかさや熟考といった幅広い感情を伝えるアニメーションや、Watcherのユニークな機能と可能性を示すデザインを歓迎します。

参加するには、上記のガイドラインに従ってカスタムアニメーションを作成し、SenseCraftコミュニティと共有してください。SenseCraft APPを通じて直接デザインをアップロードするか、ソーシャルメディアでハッシュタグ `#WatcherAnimations` を使用して共有できます。才能あふれるデザイナーコミュニティが生み出す素晴らしいアイデアやデザインを見るのが待ちきれません！

協力し合い、コラボレーションの力を活用することで、Watcherのアニメーション機能の可能性を押し広げることができます。創造性を存分に発揮し、あなたのユニークなビジョンを共有し、Watcherアニメーションの未来を共に形作りましょう。共に、世界中のWatcherユーザーにとって、より表現力豊かで魅力的、かつ個性的なモニタリング体験を創り出しましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### ショーケースとインスピレーション

Watcher Animation Showcaseで、創造性とインスピレーションの世界を発見しましょう！ここでは、デザイナーコミュニティの素晴らしい才能と想像力を称え、Watcherのために作られた最も美しく革新的なカスタムアニメーションを紹介しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートをご提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>