---
description: Node-RED デプロイメントのためのドキュメントと情報を提供
title: Node-RED を使用した開発
keywords:
  - Edge
  - reCamera
  - Node-red
  - nodered
image: https://files.seeedstudio.com/wiki/reCamera/develop_with_nodered.webp
slug: /ja/recamera_develop_with_node-red
sidebar_position: 3
last_update:
  date: 05/15/2025
  author: Dawn Yao
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

# Node-RED を使用した reCamera の開発

## Node-RED の概要
Node-RED の目標は、誰でもデータを収集、変換、可視化するアプリケーションを構築できるようにすることです。これにより、フローを構築して自分の世界を自動化できます。そのローコードの特性により、家庭の自動化、産業用制御システム、その他の用途に関わらず、あらゆる背景を持つユーザーが利用しやすくなっています。Node-RED を reCamera と統合することで、初心者にも優しい開発方法を提供し、デバイスをドラッグ＆プレイで簡単に操作できるようになります。

[Node-RED のコンセプト](https://nodered.org/docs/user-guide/concepts#:~:text=A%20Flow%20is%20represented%20as,(sets%20of%20connected%20nodes).) をこちらで学ぶか、[ビデオチュートリアル](https://www.youtube.com/watch?v=DFNv91TTt68) から始めてください。

reCamera には、以下を含む Node-RED 用のパレットがインストールされています：
- SSCMA パレット（すべての OS バージョン）
- Dashboard パレット（すべての OS バージョン）
- reCamera ハードウェア（0.1.6 OS 以上）

また、Node-RED にデフォルトで含まれる function、debug、trigger、mqtt などの他のパレットを使用して、さまざまなコンピュータビジョンアプリケーションを実現するためのフローを構築できます。

## reCamera にフローをインポートする
reCamera にフローをインポートする方法は2つあります：
- ローカルファイルまたは JSON からフローをインポートする。
    - ステップ1：右上隅の `メニューアイコン` をクリックし、「インポート」を選択します。
    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/import_flow_1.png" /></div>

    - ステップ2：「インポート」タブをクリックします。
    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/import_flow_2.png" /></div>

    - ステップ3：フローの JSON コードを貼り付けるか、フローの JSON ファイルをアップロードします。コミュニティや [GitHub](https://github.com/jby5122/OSHW-reCamera-Series/tree/main/Node-RED_Flow) で利用可能なフローを見つけて、reCamera に統合することができます。

    - ステップ4：「インポート」ボタンをクリックします。
  

- SenseCraft reCamera の [公開アプリケーション](https://sensecraft.seeed.cc/ai/#/recamera) からフローをインポートする。

    - ステップ1：公開アプリケーションで興味のあるフローを見つけます。その後、`クローン` をクリックします。
    <div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/sensecraft_clone.png" /></div>

    - ステップ2：USB またはネットワークを介して reCamera に接続する方法を選択します。ネットワーク接続を使用する場合は、テキストボックスに reCamera の正しい IP を入力してから接続をクリックしてください。

    - ステップ3：公開アプリケーションが自動的に reCamera にインポートされます。また、自分のフローをコミュニティに貢献することで、他のユーザーにインスピレーションを与えることができます。

## reCamera にフローをデプロイする
ワークスペースでノードやワイヤーを追加、削除、または変更した場合は、必ず右上隅の `デプロイ` ボタンをクリックして、最新のフローを reCamera にデプロイしてください。

## SSCMA パレット
<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/sscma_palette.png" /></div>

`node-red-contrib-sscma` は、フロー型プログラミングを通じて AI モデルを迅速に展開するために設計された Node-RED ノードコンポーネントです。`sscma` は Seeed SenseCraft Model Assistant の略称です。これにより、AI モデルの出力を他のデバイスとシームレスに統合し、スマートオートメーションやインテリジェントなワークフローを実現できます。

### インストール
このパレットは、Node-RED をインストールするとデフォルトでインストールされます。手動でインストールしたい場合は、以下の手順に従ってください：
1. `ip_address/#/workspace` にアクセスして Node-RED ワークスペースを開きます。
2. 右上の `メニューアイコン` をクリックし、「パレットの管理」を選択します。
3. 「インストール」タブをクリックします。
4. 検索バーに「node-red-contrib-sscma」と入力し、「インストール」ボタンをクリックします。
5. インストールが完了するまで待ちます。デバイスの制限により、ネットワーク速度に応じてダウンロード時間は約 30 秒から 5 分かかる場合があります。

### カメラノード

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/reCamera/camera_node.png" /></div>

このノードはカメラを有効にするために使用されます。カメラモジュールのストリームをキャプチャすることができます。

#### 設定
ノードを初めてドラッグすると、以下の画面が表示されます：

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/add_camera_node.png" /></div>

オーディオ選択は、ビデオストリームを音声付きで出力するかどうかを意味し、音声の音量は調整可能です。ノード上の赤い三角形は、ノードにクライアントが接続する必要があることを示しています。`追加アイコン` をクリックして SSCMA クライアントを追加できます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/new_sscma_config_node.png" /></div>

その後、右上の「追加」ボタンをクリックして、以下のデフォルトパラメータで `sscma config` ノードを追加できます。この設定ノードは、モデルノードなど他のノードにも一度だけ必要です。クライアントが選択されると、赤い三角形は消えます。

#### 入力と出力
`msg.enabled = true` または `msg.enabled = false` をノードに渡すことで、カメラをオンまたはオフにするパラメータを入力できます。例えば、タイムトリガーノードを使用して特定の時間にカメラを有効にし、省電力カメラを作成することができます。（OS バージョン 0.1.5 以上でのみ対応）

カメラノードは、RTSP 用の `stream` ノード、`preview` ノード、またはコンピュータビジョン処理用の `model` ノードに接続できます。

### モデルノード
このモデルノードは、reCamera に Yolo などの異なるビジョン AI モデルをロードし、モデルのパラメータを調整することを可能にします。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/model_node.png" /></div>

#### 設定
クライアントには `sscma` を選択してください。選択後、赤い三角形は消えます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/select_sscma_node.png" /></div>

#### モデル選択
reCamera で異なるモデルを展開する方法は 3 つあります：
1. `オンデバイス` モデルを選択します。いくつかの Yolo モデルが [デフォルトで](https://wiki.seeedstudio.com/ja/recamera_on_device_models) reCamera に含まれています。
2. `SenseCraft Zoo` からモデルを選択します。ジェスチャーやフルーツなどのいくつかの公開モデルを選択できます。ユーザーは独自のモデルをアップロードし、コミュニティに貢献するために公開することもできます。
3. 独自のモデルを reCamera に `アップロード` します。[モデルを reCamera に変換する](https://wiki.seeedstudio.com/ja/convert xxx) 手順に従うことで、独自の AI モデルを INT8 cvimodel フォーマットに変換し、reCamera に適応させることができます。その後、モデルを reCamera にアップロードして展開します。モデルがアップロードされた後、`Labels` フィールドにモデルのクラスをリストしてください。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/model_classes.png" /></div>

#### モデルパラメータ
`Confidence` スライダーは、AI モデルの信頼度を設定するために使用されます。信頼度は、モデルが特定の予測に割り当てる確率または確実性を指します。また、0 から 1 の範囲で信頼度スコアを提供します。信頼度が高いほど、モデルは信頼度の低い予測をフィルタリングします。

`IoU` スライダーは、AI モデルの IoU を設定するために使用されます。IoU は、物体検出タスクにおいて予測されたバウンディングボックスと実際のバウンディングボックスの重なりを測定する指標です。IoU 値は 0 から 1 の範囲で、0 は重なりがないことを、1 は完全一致を意味します。高い IoU 閾値（例：0.5 または 0.7）は、正確な検出に対する厳しい要件を示します。

#### 出力

`base64 image output` チェックボックスは、他のパラメータと一緒に base64 画像コードを出力するかどうかを設定します。

`Trace` チェックボックスは、トラッキングモードを有効にするために使用されます。トラッキングモードが有効になると、検出されたオブジェクトに ID が割り当てられます。

`Counting` チェックボックスは、カウントモードを有効にするために使用されます。カウントモードが有効になると、ノードはカウント情報をコンソールに出力します。

`Splitter` フィールドは、カウントラインを設定するために使用されます。ボックス内に任意の線を描画して、その線を横切るオブジェクトの数をカウントします。

モデルノードをデバッグノードに接続して出力を確認してください。以下は Yolo 11n の出力オブジェクト例です：
```
{
  boxes: [
    0: box_center_x,
    1: box_center_y,
    2: box_width,
    3: box_height,
    4: detected object score,
    5: detected object class ID,
  ],
  count: // 推論回数,
  image: // base64 画像コード,
  labels: [
    0: class name // 例：person
  ],
  perf: [
    0: 0 fps, // 前処理 fps
    1: 40 ms, // 推論時間
    2: 20 ms, // 後処理時間
  ],
  resolution: [ // 画像のピクセルサイズ
    0: 640,
    1: 640,
  ]
}
```
モデルノードは、Node-RED ワークスペースで効果をプレビューするために `preview` ノードに接続できます。また、出力を他のノード（例：`function node`、`mqtt node`、`debug node`、または `Dashboard UI パレット` 内の他のノード）に渡してさらなる処理を行うこともできます。

### プレビューノード
このノードはカメラモジュールのプレビューを有効にするために使用されます。カメラモジュールのビデオストリームをプレビューすることができます。緑色のトグルを使用してプレビューを有効または無効にすることができます。デバイスのCPU制限のため、**同時に**多数のプレビューノードやデバッグノードをドラッグアウトしないでください。デバッグ情報をコンソールに出力する際にCPU負荷が増加します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/preview_node.png" /></div>

### ストリームノード
このノードはカメラモジュールのストリーミングを有効にするために使用されます。カメラモジュールのビデオストリームをサーバーにストリーミングすることができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/stream_node.png" /></div>

#### 設定
クライアントには `sscma` を選択してください。選択後、赤い三角形が消えます。

#### 入力と出力
入力: `camera` ノードを `stream` ノードに接続してストリーミングを有効にします。

出力:
その後、VLCなどの他のアプリケーションを使用して、reCameraからのRTSPストリームを視聴することができます。上記のスクリーンショットの例では、`rtsp://admin:admin@192.168.42.1:554/live` をVLCで使用すると、H.264ストリーミングビデオを見ることができます。
- ビデオパラメータ: デフォルトで1920 * 1800 * 30fps。
- レイテンシー: 使用するエンドアプリケーションによって異なります。例: VLCでは500ms。

### 保存ノード
このノードはカメラモジュールの保存を有効にするために使用されます。カメラモジュールのビデオストリームを保存することができます。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/save_node.png" /></div>

#### 設定
クライアントには `sscma` を選択してください。選択後、赤い三角形が消えます。

#### 入力
入力: `camera` ノードを `save` ノードに接続して保存を有効にします。

#### 保存パラメータ
ストレージ:
- ローカル -> パス: `/userdata/VIDEO`
- 外部 -> SDカードに保存。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/save_node_storage.png" /></div>

**開始チェックボックス**: チェックを入れると保存が即座に開始されます。保存パラメータは以下の `スライス` と `期間` に基づきます。

**スライス**: 保存する各ファイルのビデオ時間長。(バージョン0.1.6以降ではドロップダウンメニューで単位を変更可能)

**期間**: 保存するビデオの総時間長。(バージョン0.1.6以降ではドロップダウンメニューで単位を変更可能)

例: スライスが5分、期間が1時間に設定されている場合、ビデオは5分ごとの12ファイルに保存されます。

### SSCMAノードを使用した例のフロー

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/example_flow.png" /></div>

このフローでは、Yolo 11n Detectionモデルを使用してワークスペース内で検出されたオブジェクトをプレビューし、RTSPを介して元のビデオストリームをストリーミングします。
```
[{"id":"d72dbb768278d92b","type":"tab","label":"Flow 1","disabled":false,"info":"","env":[]},{"id":"291219139b4904ee","type":"sscma","host":"localhost","mqttport":"1883","apiport":"80","clientid":"recamera","username":"","password":""},{"id":"7ee52cad4723fbee","type":"camera","z":"d72dbb768278d92b","option":0,"client":"291219139b4904ee","audio":true,"volume":80,"x":120,"y":220,"wires":[["09b5621ae3fa9d71","0fcaef819aa764e6"]]},{"id":"09b5621ae3fa9d71","type":"model","z":"d72dbb768278d92b","name":"","uri":"/usr/share/supervisor/models/yolo11n_detection_cv181x_int8.cvimodel","model":"YOLO11n Detection","tscore":0.45,"tiou":0.25,"debug":false,"trace":false,"counting":false,"classes":"person,bicycle,car,motorcycle,airplane,bus,train,truck,boat,traffic light,fire hydrant,stop sign,parking meter,bench,bird,cat,dog,horse,sheep,cow,elephant,bear,zebra,giraffe,backpack,umbrella,handbag,tie,suitcase,frisbee,skis,snowboard,sports ball,kite,baseball bat,baseball glove,skateboard,surfboard,tennis racket,bottle,wine glass,cup,fork,knife,spoon,bowl,banana,apple,sandwich,orange,broccoli,carrot,hot dog,pizza,donut,cake,chair,couch,potted plant,bed,dining table,toilet,tv,laptop,mouse,remote,keyboard,cell phone,microwave,oven,toaster,sink,refrigerator,book,clock,vase,scissors,teddy bear,hair drier,toothbrush","splitter":"0,0,0,0","client":"291219139b4904ee","x":270,"y":220,"wires":[["9a4aacf197bedbaa"]]},{"id":"9a4aacf197bedbaa","type":"preview","z":"d72dbb768278d92b","name":"","active":true,"pass":false,"outputs":0,"x":440,"y":220,"wires":[]},{"id":"0fcaef819aa764e6","type":"stream","z":"d72dbb768278d92b","name":"stream","protocol":0,"port":554,"session":"live","username":"admin","password":"admin","client":"291219139b4904ee","x":270,"y":300,"wires":[]}]
```

## Dashboard UI パレット
[***Dashboard 2.0 パレット***](https://dashboard.flowfuse.com/getting-started.html) は、***Flowfuse*** によって Dashboard 1.0 パレットを基に作成されました（この素晴らしい作業に感謝します）。これは、Node-RED 用のノードのコレクションで、データ駆動型のダッシュボードやデータビジュアライゼーションを簡単に作成できます。このパレットを使用すると、ボタン、チャート、テキスト、スライダーなどのコンポーネントを使用して、reCamera 上で直接実行されるインタラクティブなダッシュボードを作成し、効果をプレビューできます。

### インストール
このパレットはデバイスにデフォルトでインストールされています。手動でインストールしたい場合は、以下の手順に従ってください：
1. `ip_address/#/workspace` にアクセスして Node-RED ワークスペースを開きます。
2. 右上の `メニューアイコン` をクリックし、「パレットの管理」を選択します。
3. 「インストール」タブをクリックします。
4. 検索バーに「node-red-contrib-sscma」と入力し、「インストール」ボタンをクリックします。
5. インストールが完了するまで待ちます。デバイスの制限により、ダウンロード時間はネットワーク速度やパッケージサイズに応じて約30秒から5分かかる場合があります。

### Dashboard ノード

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard_nodes_docs.png" /></div>

`button`、`slider`、`switch`、`text`、`template` などの人気のあるノードは、reCamera 用のダッシュボードを構築する際に非常に便利です。各ノードの[詳細なドキュメント](https://dashboard.flowfuse.com/nodes/widgets/ui-button.html)は公式ウェブサイトで確認できます。また、このパレットのノードやウィジェットについてより良い理解を得るために、[初心者向けチュートリアル](https://youtu.be/DFNv91TTt68?si=HjTSh1G8xgCBF0jS)をご覧ください。

### Dashboard ノードを使用した例のフロー
OS バージョン 0.1.4 以上では、デフォルトのダッシュボードフローがデバイスにインストールされており、ユーザーが開始するためのアンボックス例として提供されています。OS バージョンが 0.1.4 未満の場合、デフォルトのダッシュボードフローは含まれていません。

このフローの機能は、モデルの出力をプレビューし、人物、犬、猫、ボトルのカウントなどの異なるデモを提供することです。また、ネットワーク、ターミナル、SSH ページ、CPU、メモリ、ディスク使用量などのデバイス情報をダッシュボードに埋め込む方法の例も提供します。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard_example.png" /></div>

このダッシュボードでは、以下のノードが使用されています：
- `slider` ノード：モデルの信頼度（Confidence）と IoU を制御するために使用。
- `dropdown` ノード：デモを選択するために使用。
- `text` ノード：モデル名やテキスト情報を表示するために使用。
- `template` ノード：Base64 画像コードをレンダリングし、画像上にバウンディングボックスを描画するために使用。
- `function` ノード：モデルノードの出力をテンプレートノードに解析し、他のノードにロジックを追加するために使用。

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboard_flow.png" /></div>

このフローの JSON は以下の通りです：
```
[{"id":"35ee92b6dbd194c1","type":"tab","label":"Dashboard","disabled":false,"info":"","env":[]},{"id":"39f2b91c983d671f","type":"subflow","name":"Device Info Pages","info":"","category":"sscma","in":[],"out":[],"env":[],"meta":{},"color":"#DDAA99"},{"id":"13a0b285aa95568e","type":"subflow","name":"Default Pages","info":"","category":"sscma","in":[],"out":[],"env":[],"meta":{},"color":"#DDAA99"},{"id":"dec794eaeb95589c","type":"sscma","host":"localhost","mqttport":"1883","apiport":"80","clientid":"recamera","username":"","password":""},{"id":"9ab1ee429e233a80","type":"ui-base","name":"My Dashboard","path":"/dashboard","appIcon":"","includeClientData":true,"acceptsClientConfig":["ui-notification","ui-control"],"showPathInSidebar":false,"showPageTitle":true,"navigationStyle":"default","titleBarStyle":"default","showReconnectNotification":true,"notificationDisplayTime":1,"showDisconnectNotification":true},{"id":"866ca6b212de07b4","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094CE","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}},{"id":"234998f63c55af55","type":"ui-theme","name":"Default Theme","colors":{"surface":"#ffffff","primary":"#0094ce","bgPage":"#eeeeee","groupBg":"#ffffff","groupOutline":"#cccccc"},"sizes":{"density":"default","pagePadding":"12px","groupGap":"12px","groupBorderRadius":"4px","widgetGap":"12px"}},{"id":"2788be32a24982e1","type":"ui-page","name":"Network","ui":"9ab1ee429e233a80","path":"/network","icon":"wifi","layout":"grid","theme":"234998f63c55af55","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":2,"className":"","visible":true,"disabled":false},{"id":"15bec593c23e2df1","type":"ui-group","name":"Wi-Fi","page":"2788be32a24982e1","width":"12","height":"1","order":1,"showTitle":false,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"034b986fab50b7bb","type":"ui-page","name":"Device Info","ui":"9ab1ee429e233a80","path":"/Deviceinfo","icon":"cog","layout":"grid","theme":"234998f63c55af55","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":3,"className":"","visible":"true","disabled":"false"},{"id":"cb81f9d78a6a3513","type":"ui-group","name":"Memory","page":"034b986fab50b7bb","width":"6","height":"1","order":4,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"35ddf11ddd1ade60","type":"ui-group","name":"Load","page":"034b986fab50b7bb","width":"6","height":"1","order":3,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"8ee7b1867c318ca3","type":"ui-group","name":"Storage","page":"034b986fab50b7bb","width":"6","height":"1","order":2,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"4b590614656223c2","type":"ui-page","name":"Security","ui":"9ab1ee429e233a80","path":"/security","icon":"security","layout":"grid","theme":"234998f63c55af55","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":4,"className":"","visible":"true","disabled":"false"},{"id":"d3e7dcd4b2447549","type":"ui-page","name":"Terminal","ui":"9ab1ee429e233a80","path":"/terminal","icon":"console","layout":"grid","theme":"234998f63c55af55","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":5,"className":"","visible":true,"disabled":false},{"id":"7f84e6e11f01d5aa","type":"ui-group","name":"Security","page":"4b590614656223c2","width":"12","height":"1","order":1,"showTitle":false,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"62e3f90362f475e5","type":"ui-group","name":"Terminal","page":"d3e7dcd4b2447549","width":"12","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"eb4ea4ad231b87b6","type":"ui-page","name":"Preview","ui":"9ab1ee429e233a80","path":"/preview","icon":"home","layout":"grid","theme":"234998f63c55af55","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":1,"className":"","visible":"true","disabled":"false"},{"id":"853d93c4c0f19c38","type":"ui-group","name":"Power","page":"034b986fab50b7bb","width":"6","height":"1","order":5,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"a2f6b486b575c329","type":"ui-group","name":"Sys Info","page":"034b986fab50b7bb","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"53a493606ee6d430","type":"ui-group","name":"Preview","page":"eb4ea4ad231b87b6","width":"6","height":"1","order":1,"showTitle":true,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"d9c66abde84c734d","type":"ui-group","name":"Model Selection","page":"eb4ea4ad231b87b6","width":"6","height":"1","order":2,"showTitle":false,"className":"","visible":"true","disabled":"false","groupType":"default"},{"id":"0403368ef716b66e","type":"ui-spacer","group":"d9c66abde84c734d","name":"spacer","tooltip":"","order":5,"width":"2","height":"1","className":""},{"id":"f55b8c3e9a243e2d","type":"ui-page","name":"DisplayNone","ui":"9ab1ee429e233a80","path":"/page6","icon":"home","layout":"grid","theme":"866ca6b212de07b4","breakpoints":[{"name":"Default","px":"0","cols":"3"},{"name":"Tablet","px":"576","cols":"6"},{"name":"Small Desktop","px":"768","cols":"9"},{"name":"Desktop","px":"1024","cols":"12"}],"order":6,"className":"","visible":"false","disabled":"false"},{"id":"56e94a4a52495b4e","type":"ui-group","name":"Hidden","page":"f55b8c3e9a243e2d","width":6,"height":1,"order":1,"showTitle":true,"className":"","visible":false,"disabled":"false","groupType":"default"},{"id":"9ca150fa0779ddf5","type":"inject","z":"39f2b91c983d671f","name":"update","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"30","crontab":"","once":true,"onceDelay":"","topic":"","payload":"","payloadType":"date","x":240,"y":320,"wires":[["a7f51d25943cec64","b27627174b2cb1ac","91b465681153a8a9","8614287768526732","eec7b34928fa4d5e","32570c230c544e73"]]},{"id":"92d7c90757d47543","type":"function","z":"39f2b91c983d671f","name":"","func":"msg.payload = msg.payload.memusage;\nreturn msg;","outputs":1,"timeout":"","noerr":0,"initialize":"","finalize":"","libs":[],"x":626,"y":655,"wires":[["d01cf18989f42d3c"]]},{"id":"3483b24989d032a3","type":"function","z":"39f2b91c983d671f","name":"","func":"function formatBytes(bytes,decimals) {\n   if(bytes === 0) return '0 Byte';\n   var k = 1000; // or 1024 for binary\n   var dm = decimals + 1 || 3;\n   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n   var i = Math.floor(Math.log(bytes) / Math.log(k));\n   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n}\n\nmsg.payload = formatBytes(msg.payload.totalmem);\nreturn msg;","outputs":1,"noerr":0,"x":626,"y":695,"wires":[["f72a3db98afc3b6c"]]},{"id":"507876942fdfea09","type":"function","z":"39f2b91c983d671f","name":"","func":"function formatBytes(bytes,decimals) {\n   if(bytes === 0) return '0 Byte';\n   var k = 1000; // or 1024 for binary\n   var dm = decimals + 1 || 3;\n   var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];\n   var i = Math.floor(Math.log(bytes) / Math.log(k));\n   return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];\n}\n\nmsg.payload = formatBytes(msg.payload.freemem);\nreturn msg;","outputs":1,"noerr":0,"x":626,"y":735,"wires":[["7345921066c58fa5"]]},{"id":"47c24b2506364a5a","type":"function","z":"39f2b91c983d671f","name":"","func":"function timeConversion(millisec) {\n\n    var seconds = (millisec / 1000).toFixed(1);\n\n    var minutes = (millisec

また、[Github](https://github.com/jby5122/OSHW-reCamera-Series/tree/main/Node-RED_Flow#:~:text=%F0%9F%8E%A8-,Dashboard%201.0,-%F0%9F%8E%88Preview%20version%20V1.0) および [SenseCraft Platform](https://sensecraft.seeed.cc/ai/home#/recamera) でフローの JSON にアクセスすることもできます。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供できるよう、さまざまなサポートをご用意しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>