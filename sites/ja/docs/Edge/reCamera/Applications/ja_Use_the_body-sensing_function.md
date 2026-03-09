---
description: 身体感知機能を使用してSubway Surfersを制御します。
title: 身体センサー制御でSubway Surfersをプレイ
keywords:
  - reCamera
  - 感覚制御
  - ゲーム
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /use_the_motion-sensing_function_of_recamera_to_play_games
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
createdAt: '2025-11-27'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/ja/use_the_motion-sensing_function_of_recamera_to_play_games/
---

# 身体センサー制御でSubway Surfersをプレイ

## はじめに

reCameraは、強力なエッジコンピューティング機能を備えたAIカメラです。このデモでは、クラウドに依存することなく、デバイスレベルでYOLO11n-Poseモデルをリアルタイムで実行し、人体のキーポイントと姿勢を正確に識別する能力を紹介します。reCameraでプレイヤーの動きをキャプチャすることで、私たちの体をコントローラーに変換し、自然な身体感覚で「Subway Run」を操作できます：ジャンプ、しゃがみ、左右への回避、すべてがシームレスな動作で実現されます！

このデモを完了した後の使用効果は以下の通りです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## ハードウェア準備

reCamera 1台
コンピューター 1台

<table align="center">
 <tr>
  <th>reCamera 2002 シリーズ</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1. SenseCraftを開き、「GAME」という名前のアプリケーションを見つける

### 1.1 Wikiを開く

SenseCraftのエントリーはWikiインターフェースの右上角にあります。クリックしてSenseCraftに入ります

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 SenseCraftからアプリケーションを開く

sensecraftアプリケーションセクションを開き、左側の入力ボックスに「GAME」と入力し、GAMEアプリケーションをクリックして入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_19.png" /></div>

### 1.3 このアプリケーションをreCameraにデプロイする

ページでDeploy Applicationをクリックし、次にVisit Workspace Via USBをクリックします（この時点で、reCameraをコンピューターに接続する必要があります）

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_23.png" /></div>

その後、Workspaceに入り、Node-REDノードがしばらく読み込まれます。読み込みが完了するまで辛抱強くお待ちください

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

読み込み後、以下のインターフェースが表示されます。Noをクリックして終了します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

右上角のDeployボタンをクリックします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

デプロイが成功すると、ポップアップウィンドウが表示され、その後デプロイボタンがグレーになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

次にDashboardを開いて効果を確認します

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

この時点で、以下のような検出画面を正常に確認できるはずです

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.4 コンピューターのファイアウォールを閉じ、reCameraのIPアドレスを変更する

#### 1.4.1 コンピューターのすべてのファイアウォールをオフにする

ファイアウォールをオフにするのは、後続でreCameraが送信するUDPメッセージが傍受されることを避けるためです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_22.png" /></div>

#### 1.4.2 reCameraのIPアドレスを192.168.42.2に設定する

コンピューターでControl Panel – Network and Internet – Network Connectionsを開き、「UsbNcm Host Device」という名前のデバイスを見つけます。これがあなたのreCameraデバイスです。右クリックしてpropertiesを選択して入ります。

このステップは、reCameraが同じネットワークセグメント内でコンピューターと通信できるようにするためです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_20.png" /></div>

IPV4 – Properties – Use the following IP addressを選択し、IPアドレスを192.168.42.2、サブネットマスクを255.255.255.0に変更し、選択後OKをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_21.png" /></div>

### 1.5 上下左右の4つのアクションのトリガーをテストする

#### 1.5.1 初期状態

これは初期アクション、つまり中央状態への復帰です。reCameraを固定し、角度を調整し、reCameraの前に立ち、両腕を自然に両側に置き、ボールが中心線上で紫の線と緑の領域の間にあるように制御します。この時、他のアクションを実行してテストできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 左

左腕を左に、右腕は静止させ、ボールを中心線の左側に制御します。青色で表示され、この時左と判定されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 右

右腕を右に、左腕は静止させ、ボールを中心線の右側に制御します。黄色で表示され、この時右と判定されます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 上

両腕を上に上げる必要があります。紫の線が黄色の線を超えているのが見えたら、上向きと判定され、ボールは白色のままになります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 下

腕を中央に戻し、自然にしゃがみます。ボールをしゃがみエリアに制御します。ボールが赤色に変わり、この時下向きと判定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
連続して特定のアクションセットをトリガーしたい場合、例えば連続して2回左に行く、または左に行ってから上に行く場合、最初の左アクションを行った後、ボールを中央に戻してから2番目のアクションを行う必要があります。
:::

## 2. 対応するpython制御プログラムをダウンロードして実行する

この[GitHubリンク](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git)をクリックしてください

入った後、このプロジェクトの圧縮パッケージをローカルにダウンロードします

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

解凍後、scket_udp.pyを開き、まずキーボードを制御する依存関係をダウンロードします。

```bash
pip install pynput
```

その後、このpythonプログラムを実行できます。この時、reCamera検出画面を有効に保ち、アクション判定結果の出力が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. ゲームを開く（地下鉄パルクールWeb版を例として）

reCameraの検出とpythonプログラムが実行され、テストアクションの出力に問題がないことを確認した後、[地下鉄パルクールWebページ](https://subway-surfers.gg/)を開き、「Start Game」をクリックしてプレイを開始できます！

:::note
画面には1人だけが表示される必要があります。他の人が侵入すると、アクション判定にエラーが発生します！
:::

## 技術サポートと製品ディスカッション

弊社製品をお選びいただき、ありがとうございます！弊社製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
