---
description: Watcherの外観カスタマイズオプションについて詳しく説明し、SenseCraftプラットフォームが提供する様々なツールを探求します。
title: SenseCraft APP Introduction
image: https://files.seeedstudio.com/wiki/watcher_getting_started/sensecraft_app.webp
slug: /ja/sensecap_app_introduction
sidebar_position: 1
last_update:
  date: 10/18/2024
  author: Citric
---

# SenseCraft APP ガイドライン

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/30.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-Watcher-W1-A-p-5979.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://www.youtube.com/watch?v=ny22Z0cAIqE" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Watcher's Video</font></span></strong>
    </a>
    <a class="get_one_now_item" href="https://github.com/Seeed-Studio/OSHW-SenseCAP-Watcher" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}> Github Repository</font></span></strong>
    </a>
</div><br />

WatcherのカスタマイズとSenseCraftツールの世界へようこそ！この記事では、Watcherデバイスをパーソナライズする魅力的な可能性について詳しく説明し、SenseCraft APPが提供する強力な機能を探求します。Watcherにユニークな外観を与えたい新規ユーザーでも、デバイスの潜在能力を最大限に引き出したい経験豊富な愛好家でも、このガイドはWatcherを真にあなた自身のものにするための知識とインスピレーションを提供します。Watcherの表現デザインとSenseCraft APPの設定の秘密を明らかにしながら、創造的な旅に出る準備をしましょう。

## Watcherのブルートゥース設定

この設定部分は、デバイスとスマートフォンの両方でBluetoothが有効になっている必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/31.png" style={{width:250, height:'auto'}}/></div>

### Wi-Fi

WatcherデバイスのWi-Fi設定では、利用可能なワイヤレスネットワークに接続でき、オンラインサービスへのアクセスが可能になります。これは、Watcherのファームウェアを更新したり、SenseCraft APPとデータを同期したり、リアルタイムの監視データをクラウドにストリーミングしたりする際に特に便利です。

WatcherでWi-Fiを設定するには、Wi-Fi設定メニューに移動して利用可能なネットワークをスキャンします。希望するネットワークを選択し、プロンプトが表示されたら対応する認証情報（SSIDとパスワード）を入力します。接続されると、Watcherは範囲内にある限り、保存されたネットワークに自動的に再接続し、安定した信頼性の高い接続を確保します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/32.png" style={{width:700, height:'auto'}}/></div>

:::note
Watcherは2.4GHzネットワークのみをサポートし、5GHzはサポートしていないことにご注意ください。
:::

### 基本設定

WatcherデバイスのBasic Settingsメニューでは、ユーザーエクスペリエンスをカスタマイズするための様々なオプションが提供されます。主要な機能の一つは、WatcherのRGB LEDを制御する機能です。好みや環境に応じて、RGB LEDを簡単にオンまたはオフにできます。これは、バッテリー寿命を節約したり、視覚的な気を散らすものを最小限に抑えたりしたい場合に便利です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/33.png" style={{width:250, height:'auto'}}/></div>

サウンド設定もBasic Settingsメニュー内でアクセスできます。ここでは、ニーズに合わせてWatcherのオーディオ出力の音量を調整できます。大きくて明瞭な通知を好むか、より控えめなオーディオ体験を好むかに関わらず、好みに合わせてサウンド設定を微調整できます。

ディスプレイの明度は、Watcherのユーザーエクスペリエンスのもう一つの重要な側面です。Basic Settingsメニューでは、Watcherのディスプレイの明度を調整でき、様々な照明条件で最適な視認性を確保できます。ディスプレイの明度をカスタマイズすることで、明るい日光の下でWatcherを読みやすくしたり、低照度の状況で暗くしたりでき、必要に応じてバッテリー寿命を節約できます。

最後に、Basic SettingsメニューではWatcherの日付、時刻、タイムゾーンを設定・管理できます。正確な時刻管理は、適切なデータロギングと他のデバイスやサービスとの同期に不可欠です。正しい日付、時刻、タイムゾーンを設定することで、Watcherの監視データが正確にタイムスタンプされ、現地時間と一致することを確保できます。

これらの設定にアクセスして変更するには、WatcherデバイスのBasic Settingsメニューに移動し、直感的なインターフェースを使用して希望する変更を行います。

### SenseCraft リモートコントロール

SenseCraft Remote Control機能は、WatcherデバイスがSenseCraftクラウドサービスとどのように通信するかを決定する重要な設定です。有効にすると、この機能はWatcherとSenseCraftクラウド間の通信チャネルを確立し、クラウドベースの大規模言語モデル（LLM）やリモート通知機能などの幅広い高度な機能とサービスにアクセスできるようになります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/34.png" style={{width:250, height:'auto'}}/></div>

ただし、SenseCraft Remote Control機能を無効にすることを選択した場合、WatcherはBluetoothを介してモバイルデバイスとのみ通信します。これはローカル制御と設定には便利ですが、強力なクラウドベースのサービスとリモート通知機能へのアクセスを失うことも意味します。さらに、WatcherがモバイルデバイスのBluetooth範囲外に移動した場合、Watcherの制御を完全に失うリスクがあります。

SenseCraft リモートコントロール設定を管理するには、Watcher デバイスの対応するメニューに移動し、必要に応じて機能をオンまたはオフに切り替えるだけです。ニーズを慎重に検討し、クラウド接続の利点を比較検討することで、Watcher のこの重要な設定をどのように構成するかについて十分な情報に基づいた決定を下すことができます。

### HTTP メッセージブロック

Watcher の HTTP メッセージブロック機能は、RGB アラーム、APP アラーム、UART アラームなどの他のアラーム方法と並行して動作するローカライズされたアラームサービスです。その主な目的は、ユーザーのプライバシーを保護することを目的とした、完全にローカライズされたメッセージプッシュサービスをユーザーに提供することです。外部プラットフォームやサーバーに依存する可能性がある他のアラームサービスとは異なり、HTTP メッセージブロックは、ユーザー自身の HTTP エンドポイントでのみ動作するように設計されており、すべてのデータと通知がユーザーのローカル環境内に留まることを保証します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/83.png" style={{width:250, height:'auto'}}/></div><br />

HTTP メッセージブロックを設定するには、ユーザーは 2 つの重要な情報を構成する必要があります：**HTTP URL** と **HTTP Token** です。これらの詳細は、ユーザー自身の HTTP サーバーまたは [Watcher APP](https://wiki.seeedstudio.com/ja/watcher_local_deploy/#software-preparation) などのローカルにデプロイされたソフトウェアによって提供されます。独自の HTTP サーバーを使用することを選択した場合は、正しく設定され、必要な URL とトークンを提供することを確認してください。または、Watcher APP を選択した場合、ソフトウェアがこれらの構成詳細を生成し、管理します。構成データを独自のサーバーまたは Watcher APP のローカルに保持することで、Watcher はユーザーに高いレベルのプライバシーとセキュリティを維持し、機密情報がユーザーの制御下に留まることを保証します。

:::caution
SenseCraft を経由せずに完全にローカルな通知サービスを使用したい場合は、メッセージ通知を構成する際に **APP プッシュ通知** にチェックを入れ**ない**でください。そうしないと、通知は依然として SenseCraft を経由してアプリにプッシュされます。そして **HTTP プッシュ通知オプション** にチェックを入れることを忘れないでください。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/84.jpg" style={{width:300, height:'auto'}}/></div>
:::

### デバイス AI サーバー

Watcher のデバイス AI サービスは、ユーザーが PC や Jetson などの高性能マシンなどのローカルデバイスに AI 機能を直接デプロイできる強力な機能です。デバイス AI サービスを設定するには、ユーザーは付属のデバイス AI サービスソフトウェアのユーザーインターフェースに表示される URL と Watcher サービストークンを提供する必要があります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/82.png" style={{width:250, height:'auto'}}/></div>

構成が完了すると、デバイス AI サービスにより、Watcher はユーザーのローカルコンピューティングリソースを活用して、音声インタラクション、タスク分解、画像解析、チャットボットサービスなど、さまざまな AI 駆動機能を実現できます。

AI サービスをローカルで実行する柔軟性と制御を重視するユーザーにとって、Watcher のデバイス AI サービスは包括的でカスタマイズ可能なソリューションを提供します。デバイス AI サービスの設定と構成に関する詳細情報、および各 AI 機能の詳細な説明は、**[Watcher の AI 機能をローカルにデプロイする](https://wiki.seeedstudio.com/ja/watcher_local_deploy/)** で確認できます。

:::caution
以前にプライベート Watcher サービスをクリックした場合、SenseCraft のクラウドサービスを使用できなくなります。突然クラウドサービスからメッセージを受信できないことに気づいた場合は、**SenseCraft** が選択されていないかどうかを確認してください。
:::

### デバイス設定の復元

デバイス設定の復元機能により、Watcher を工場出荷時のデフォルト設定にリセットできます。これは、他の手段では解決できない問題に遭遇した場合や、クリーンな状態で新たに開始したい場合に便利です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/35.png" style={{width:250, height:'auto'}}/></div>

ただし、この機能を使用する際は注意が必要です。カスタマイズ、履歴アラート記録、カスタム表現を含む Watcher のすべての設定が永続的に失われるためです。組み込みのバックアップ機能はないため、復元プロセスを開始すると、以前の設定とデータは回復できません。

デバイス設定の復元機能にアクセスするには、Watcher デバイスの対応するメニューに移動します。復元プロセスを確認する前に、Watcher を工場出荷時のデフォルトにリセットすることが絶対に必要かどうかを慎重に検討してください。続行する場合、Watcher は元の状態に復元され、ニーズに応じて再構成およびカスタマイズする準備が整います。

:::tip
デバイス復元後、アプリで対応するデバイスを手動で削除してから、再度追加する必要があります。
:::

## その他の設定

以下の設定は、スマートフォンとのBluetooth接続に依存せず、Watcherとスマートフォンがインターネットに接続されており、SenseCraftリモートコントロール機能がオンになっていることを確認するだけです。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription2.png" style={{width:250, height:'auto'}}/></div>

### デバイス名とデバイスグループ

デバイス名とデバイスグループの設定により、Watcherをパーソナライズし、複数のデバイスを整理してより簡単に管理できます。Watcherに固有の名前を割り当てることで、Bluetooth経由で接続する際やSenseCraft APPを通じて管理する際に素早く識別できます。これは、複数のWatcherデバイスを所有している場合に特に役立ちます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/37.png" style={{width:250, height:'auto'}}/></div>

さらに、Watcherを特定のデバイスグループに割り当てることができます。これは、異なる目的や場所で多数のデバイスを管理する際に便利です。例えば、家庭、オフィス、屋外監視用に別々のデバイスグループを作成することができます。Watcherデバイスを論理的にグループ化することで、指定された目的や場所に基づいて簡単に見つけ、設定し、制御できます。

### サブスクリプション

サブスクリプションにより、高度な言語モデル機能にアクセスできます。画像を分析したり、インテリジェントな会話を行いたい場合でも、当社のプラットフォームがサポートします。機能の全範囲を探索し、当社の技術がどのようにあなたの体験を向上させるかをご覧ください。詳細はクリックしてください！

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price.png" style={{width:250, height:'auto'}}/></div>

### アップデート確認

アップデート確認機能により、Watcherが常に最新のファームウェアとソフトウェアバージョンで動作することが保証されます。定期的にアップデートを確認することで、新機能、パフォーマンスの改善、バグ修正、セキュリティ強化が利用可能になり次第アクセスできます。

アップデートを確認するには、Watcherデバイスのアップデート確認メニューまたはSenseCraft APP内で操作してください。アップデートが利用可能な場合、ダウンロードとインストールを促すプロンプトが表示されます。最適なパフォーマンス、安定性、セキュリティを確保するため、Watcherを最新の状態に保つことをお勧めします。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/57.png" style={{width:250, height:'auto'}}/></div>

:::tip
一部のOTAバージョンでは、Watcherユーザーが継続して使用するために強制アップデートが必要な場合があります。これは、重大なソフトウェアバグの修正やバックグラウンドでのサービスアップグレードが原因である可能性があります。
:::

### 検出履歴の削除

検出履歴の削除機能により、SenseCraft APP内に保存されている過去のアラートデータをクリアできます。これは、アラート履歴を整理したり、最近のイベントをより集中して表示したい場合に便利です。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/38.png" style={{width:250, height:'auto'}}/></div>

検出履歴を削除するには、SenseCraft APP内の検出履歴の削除メニューにアクセスしてください。削除を確認する前に、この操作は元に戻せず、すべての過去のアラートデータがAPPから永続的に消去されるため、影響を慎重に検討してください。

### デバイスの削除

デバイスの削除機能は、SenseCraftアカウントまたはBluetooth接続からWatcherデバイスを削除したい場合に使用されます。これは、特定のWatcherを使用する必要がなくなった場合、デバイスの所有権を譲渡したい場合、または新たに開始する必要がある持続的な問題が発生した場合に必要になることがあります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/39.png" style={{width:250, height:'auto'}}/></div>

デバイスを削除するには、Watcherの設定またはSenseCraft APP内でデバイスの削除オプションを見つけてください。削除を確認する前に、このプロセスが元に戻せないことを理解していることを確認してください。デバイスを削除すると、そのデバイスはアカウントに関連付けられなくなり、将来再び使用したい場合は再度追加する必要があります。

:::note
アプリでデバイスを削除した後、デバイスを再バインドしたい場合は、デバイスの設定で工場出荷時リセットも実行する必要があります。
:::

## Watcher アニメーション

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/44.png" style={{width:650, height:'auto'}}/></div>

Watcher デバイスは、カスタムアニメーションを通じて監視体験をパーソナライズするユニークで魅力的な方法を提供します。独自の画像をアップロードすることで、あなたのスタイルを反映し、特定のメッセージを伝え、または単純に Watcher のステータスインジケーターに楽しさを加える、オーダーメイドの表現を作成できます。

### カスタムアニメーションの作成

あなたのスキルと好みに応じて、Watcher 用のカスタムアニメーションを作成する方法はいくつかあります：

- **アニメーションソフトウェアの使用**: Adobe After Effects や Lottie などのアニメーションソフトウェアに慣れている場合は、ゼロから独自のアニメーションを作成できます。最大5フレームでアニメーションをデザインし、各フレームが約500ms表示されることを念頭に置いてください。アニメーションを作成したら、最大5つのキーフレームを選択し、スクリーンショットを撮って、SenseCraft APP を使用してアップロードします。

- **グラフィックデザインソフトウェアの使用**: Figma や Adobe Illustrator などのグラフィックデザインソフトウェアでの作業を好む場合は、一連の静止画像を作成してアニメーションを形成できます。最大5フレームをデザインし、各フレームが約500ms表示されることを念頭に置いてください。デザインを個別の PNG 画像としてエクスポートし、SenseCraft APP を使用してアップロードします。

- **既存の GIF の使用**: Watcher のカスタムアニメーションに使用したい GIF をオンラインで見つけた場合は、それを一連の PNG 画像に簡単に変換できます。[EZGif](https://www.ezgif.com/split) などの無料オンラインツールを使用して、GIF を個別のフレームに分割します。実現したいアニメーションを最もよく表現する最大5フレームを選択し、これらの PNG 画像を SenseCraft APP を使用してアップロードします。

選択する方法に関係なく、各画像は **PNG** 形式で、Watcher の画面で最適な表示品質を確保するために **412x412** ピクセルの解像度である必要があります。アップロードされると、これらの画像が組み合わされてシームレスなアニメーションを形成し、パーソナライズされた表現で Watcher に命を吹き込みます。

### 画像の変換とリサイズ

希望する画像がすでに PNG 形式でない場合や、必要な 412x412 解像度を満たしていない場合は、さまざまなツールを使用して簡単に変換およびリサイズできます：

- **Adobe Photoshop**: Photoshop で画像を開き、「画像」>「画像解像度」に移動し、幅と高さを412ピクセルに設定し（アスペクト比を維持）、画像を PNG ファイルとして保存します。

- **GIMP**: GIMP で画像を開き、「画像」>「画像の拡大・縮小」に移動し、幅と高さの両方のフィールドに412を入力し（アスペクト比を維持）、画像を PNG ファイルとしてエクスポートします。

- **オンラインツール**: [Resize Image](https://www.resizeimage.net) や [CloudConvert](https://www.cloudconvert.com) などのウェブサイトを使用して、画像を 412x412 ピクセルにリサイズし、PNG 形式に変換します。

### カスタムアニメーションのアップロード

PNG 画像のシリーズが準備できたら、Watcher でカスタムアニメーションに命を吹き込む時です。Watcher を SenseCraft APP に接続し、「Animation」ページに移動します。ここでは、**Standby**、**Listening**、**Speaking**、**Watching Space**、**Greeting** など、アニメーションのカスタマイズが可能な複数の Watcher 状態を見つけることができます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/43.png" style={{width:250, height:'auto'}}/></div>

Watching Space や Greeting 状態のアニメーションを置き換えるには、希望する状態を選択し、プロンプトに従って PNG 画像をアップロードするだけです。シームレスなアニメーション体験を確保するために、各状態の例に示されているのと**同じ数の画像をアップロード**するようにしてください。

:::caution
カスタムアニメーションをアップロードする際は、各画像が **PNG** 形式で、Watcher の画面で最適な表示品質を得るために **412x412** ピクセルの解像度である必要があることを念頭に置いてください。アップロードされた画像は、選択された Watcher 状態のデフォルトアニメーションを置き換え、デバイスの表現をパーソナライズし、監視体験にユニークなタッチを加えることができます。
:::

## デザイナーへの呼びかけ：あなたの創造性を輝かせましょう

SenseCraftでは、創造性とコラボレーションの力が素晴らしいイノベーションにつながると信じています。そのため、あらゆる背景を持つデザイナーの皆様に、独自の視点とスキルを貢献していただき、Watcherのアニメーション可能性の拡張にご協力いただきたいと考えています。

魅力的で表現豊かなアニメーション制作に情熱を持つデザイナーの方は、ぜひこのエキサイティングな機会にご参加ください。あなたの創造的なアイデアとデザインを共有することで、Watcherのアニメーション機能の未来を形作り、より活気に満ちた個人化されたユーザー体験に貢献することができます。

キャラクターアニメーション、モーショングラフィックス、またはその他のスタイルを専門とされている方でも、あなたの専門知識と想像力は大きな影響を与えることができます。喜びや興奮から静寂や瞑想まで、幅広い感情を伝えるアニメーション、そしてWatcherの独特な機能と可能性を示すデザインを歓迎いたします。

参加するには、上記のガイドラインに従ってカスタムアニメーションを作成し、SenseCraftコミュニティと共有してください。SenseCraft APPから直接デザインをアップロードするか、ハッシュタグ`#WatcherAnimations`を使用してソーシャルメディアで共有することができます。才能豊かなデザイナーコミュニティの皆様が生み出す素晴らしいアイデアとデザインを見るのが楽しみです！

協力し合い、コラボレーションの力を活用することで、Watcherのアニメーション機能で可能なことの境界を押し広げることができます。創造性を自由に発揮し、あなたの独特なビジョンを共有し、Watcherアニメーションの未来を形作ることに参加してください。一緒に、世界中のWatcherユーザーにとって、より表現豊かで魅力的、そして個人化された監視体験を創造しましょう。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/42.png" style={{width:250, height:'auto'}}/></div>

### ショーケースとインスピレーション

Watcherアニメーションショーケースで創造性とインスピレーションの世界を発見してください！ここは、デザイナーコミュニティの素晴らしい才能と想像力を称える場所で、Watcher用に作成された最も美しく革新的なカスタムアニメーションの一部を紹介しています。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/45.png" style={{width:1000, height:'auto'}}/></div>

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験が可能な限りスムーズになるよう、さまざまなサポートを提供いたします。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
