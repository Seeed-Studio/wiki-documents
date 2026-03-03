---
description: reComputer-FAQ
title: インストールのトラブルシューティング
#keywords:
image: https://files.seeedstudio.com/wiki/wiki-platform/S.png
slug: /ja/Troubleshooting_Installation
last_update:
  date: 2023/6/30
  author: Seraphina
---


### NVIDIA SDK Managerでのインストールのトラブルシューティング

様々なインストールエラーには多くの原因があります。以下は一般的なインストール問題のチェックリストで、破損したインストールからの復旧に役立つ可能性があります。

1. サマリーテーブルを確認して、どのコンポーネントが失敗したかを特定します。

    a. 「Error」ステータスのグループを展開します。

    b. 失敗したコンポーネントを見つけたら、Install Errorの右側にある詳細アイコンをクリックして、正確なエラーを表示するTerminalタブにリダイレクトされます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png" /></div>

2. エラーが破損したaptリポジトリや不足している前提条件などの環境問題に関連している場合は、手動で修正してから、Retry Failed Itemsボタンをクリックしてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png" /></div>

3. インストールの再試行は他の2つの方法でも利用できます：

    a. **SDK Managerを使用したeMMCへのフラッシュ -- ステップ3**から、Repair/UninstallボタンでManage NVIDIA SDKsページに移動します。必要に応じて、「Broken」ステータスのSDKを展開し、関連する部分（HostまたはTarget）のRepairをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png" /></div>

4. **SDK Managerを使用したeMMCへのフラッシュ -- ステップ3**で、必要なSDKを選択して再度インストールを実行します。

5. 最後に、関連するSDKをアンインストールして再インストールしてみてください。

### コマンドラインを使用したインストールのトラブルシューティング

コマンドラインインストール方法は比較的シンプルで、強制リカバリモードが使用されるシナリオでエラーが発生しやすいことがよくあります。

**コマンドラインを使用したeMMCへのフラッシュ -- ステップ2**で以下に示すエラーが発生した場合、おそらくJetson-101キャリアボードを強制リカバリモードに正常に入れることができませんでした。特に注意してください。Jetson-101キャリアボードの電源が入った状態で強制リカバリモードに入らないでください。これは無効です。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg" /></div>

**コマンドラインを使用したeMMCへのフラッシュ -- ステップ3**でシステムに入ることができず、起動表示コマンドラインで止まっている場合、おそらく強制リカバリモードを終了していません。同様に、Jetson-101キャリアボードの電源が入っている間にジャンパーを抜いて強制リカバリモードを終了することは無効です。これらはすべて電源を切った状態で行う必要があります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg" /></div>

:::note
より多くのストレージ容量が必要な場合は、SDカードを使用して容量を拡張するか、SDカードにシステムを書き込むことができます。推奨ソリューション[SDカードにシステムをフラッシュ](https://wiki.seeedstudio.com/ja/J1010_Boot_From_SD_Card/)を参照してください。
:::