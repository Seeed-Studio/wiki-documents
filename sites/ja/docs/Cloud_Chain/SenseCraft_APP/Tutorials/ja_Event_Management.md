---
sidebar_position: 1
description: SenseCraft App Event Version 2.9.0 ユーザーマニュアル
title: イベント管理
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/sensecraft-app/tutorials/event-management
aliases:
  - /ja/sensecap_mate_app_event
last_update:
  date: 03/20/2023
  author: Matthew
---

# SenseCraft App でのイベント管理

## イベント機能

SenseCraft App バージョン 2.9.0 では、新しいイベントアラーム機能が導入されました。この機能により、ユーザーはイベントを作成し、デバイスのトリガー条件を設定できます。デバイスがこれらの条件を満たすと、アラームメッセージがユーザーにプッシュされます。デバイスページには新しいメッセージセンター機能が含まれており、デバイスによってトリガーされたアラームメッセージやシステム通知を表示でき、リアルタイムアラート、リモート監視、リモート管理を可能にします。

### SenseCraft App V2.9.0 のインストール

- SenseCraft App でアカウントにログインし、イベントページに移動します
- 以下の手順に従ってイベントアラートを設定します：

#### ステップ 1: イベントアラートの作成

追加アイコンまたは「イベントを追加」ボタンをクリックして、イベントアラートを作成します。イベント追加ページで、条件に移動して条件オプションを追加し、追加ボタンをクリックしてデバイスを選択します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_2.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ 2: デバイスと条件の設定

デバイスを選択し、測定タイプを選択します。「より大きい」や「より小さい」などのオプションを選択してアラーム条件を設定し、プログレスバーをドラッグして閾値を設定します。「次のステップ」をクリックして続行します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_3.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ 3: 復旧アクションの設定

イベント追加ページで、デバイスが正常な条件に戻ったときの「正常復帰アクション」を設定します。通知を送信するかどうかを選択し、「保存」をクリックします。イベント名を入力し、「送信」をクリックしてイベントアラームの追加を完了し、イベントリストに戻ります。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_4.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ 4: アラームメッセージの表示

デバイスページで「メッセージセンター」をクリックしてアラームメッセージを表示します。これには2種類のメッセージが表示されます：

- **デバイス警告**: デバイスによってトリガーされたアラーム通知
- **システム通知**: システムメッセージ

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_5.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ 5: アラームメッセージの管理

デバイスが設定された条件をトリガーしたときに、アラームメッセージをクリックして詳細を表示します。表示後、アラームリストに戻ると、ステータスが「既読」に変わります。編集ボタンをクリックしてメッセージを選択し、既読にマークしたり削除したりするなど、さまざまな操作を実行できます。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_6.png" style={{width:1000, height:'auto'}}/></div>

#### ステップ 6: システムメッセージの表示

システムメッセージに移動し、クリックして詳細なシステム通知を表示します。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/sensecap_mate_app/mate_app_7.png" style={{width:1000, height:'auto'}}/></div>