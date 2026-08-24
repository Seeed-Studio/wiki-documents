---
description: 体感機能を使って Subway Surfers を操作します。
title: 体感センサー操作で Subway Surfers をプレイする
keywords:
  - reCamera
  - 体感操作
  - ゲーム
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_title.gif
slug: /use_the_motion-sensing_function_of_recamera_to_play_games
sku: 102991896, 108990119, 100029708
sidebar_position: 9
last_update:
  date: 11/27/2025
  author: Xinrui Wu
createdAt: '2025-11-27'
updatedAt: '2026-07-22'
url: https://wiki.seeedstudio.com/ja/use_the_motion-sensing_function_of_recamera_to_play_games/
---

# 体感センサー操作で Subway Surfers をプレイする

## はじめに

reCamera は強力なエッジコンピューティング機能を備えた AI カメラです。このデモでは、クラウドに依存せずデバイスレベルでリアルタイムに YOLO11n-Pose モデルを実行し、人の身体のキーポイントや姿勢を高精度に認識できることを紹介します。reCamera でプレイヤーの動きを捉えることで、私たちの身体そのものをコントローラーに変え、自然な体の動きで「Subway Run」を操作できます。ジャンプ、しゃがみ、左右への回避を、ひと続きのスムーズな動作で行えます。

このデモを完了したあとの使用イメージは次のとおりです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_text.gif" /></div>

## ハードウェアの準備

reCamera 1 台
コンピュータ 1 台

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

## 1. SenseCraft を開き、「GAME」という名前の Applications を探す

### 1.1 Wiki を開く

SenseCraft への入り口は Wiki 画面の右上にあります。クリックして SenseCraft に入ります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_1.png" /></div>

### 1.2 SenseCraft からアプリケーションを開く

SenseCraft のアプリケーションセクションを開き、左側の入力ボックスに「GAME」と入力し、その後 GAME アプリケーションをクリックして開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_19.png" /></div>

### 1.3 このアプリケーションを reCamera にデプロイする

ページ上の Deploy Application をクリックし、その後 Visit Workspace Via USB をクリックします（この時点で reCamera をコンピュータに接続しておく必要があります）。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_23.png" /></div>

すると Workspace に入り、Node-RED ノードがしばらくロードされます。ロードが完了するまでしばらくお待ちください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_5.png" /></div>

ロード完了後、次の画面が表示されるので、No をクリックして終了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_6.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_7.png" /></div>

右上の Deploy ボタンをクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_8.png" /></div>

デプロイが成功するとポップアップウィンドウで通知され、その後 Deploy ボタンがグレーに変わります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_9.png" /></div>

その後、Dashboard を開いて動作を確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_10.png" /></div>

この時点で、次のような検出画面が正常に表示されているはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_11.png" /></div>

### 1.4 コンピュータのファイアウォールを無効にし、reCamera の IP アドレスを変更する

#### 1.4.1 コンピュータ上のすべてのファイアウォールをオフにする

ファイアウォールをオフにするのは、後続で reCamera から送信される UDP メッセージがブロックされるのを防ぐためです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_22.png" /></div>

#### 1.4.2 reCamera の IP アドレスを 192.168.42.2 に設定する

コンピュータでコントロールパネルを開き、「ネットワークとインターネット」→「ネットワーク接続」と進み、「UsbNcm Host Device」という名前のデバイスを探します。これが reCamera デバイスなので、右クリックしてプロパティを選択し、画面に入ります。   

この手順は、reCamera とコンピュータが同じネットワークセグメントで通信できるようにするためのものです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_20.png" /></div>

IPV4 → プロパティ → 次の IP アドレスを使う を選択し、IP アドレスを 192.168.42.2、サブネットマスクを 255.255.255.0 に変更し、選択後 OK をクリックします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_21.png" /></div>

### 1.5 上・下・左・右の 4 つの動作トリガーをテストする

#### 1.5.1 初期状態

これは初期動作、つまり中央に戻った状態です。reCamera を固定し角度を調整したら、reCamera の前に立ち、両腕を自然に体の横に下ろし、ボールがセンターライン上で紫の線と緑のエリアの間に来るようにします。この状態になったら、他の動作を行ってテストできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_12.png" /></div>

#### 1.5.1 左

左腕を左側に伸ばし、右腕は動かさずに、ボールをセンターラインの左側に移動させます。ボールは青色で表示され、このとき「左」と判定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_13.png" /></div>

#### 1.5.2 右

右腕を右側に伸ばし、左腕は動かさずに、ボールをセンターラインの右側に移動させます。ボールは黄色で表示され、このとき「右」と判定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_14.png" /></div>

#### 1.5.3 上

両腕を上に上げます。紫の線が黄色の線を越えたのが見えたとき、「上」と判定され、ボールは白色のままです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_15.png" /></div>

#### 1.5.4 下

腕を中央の位置に戻してから自然にしゃがみます。ボールをしゃがみエリアに移動させると、ボールは赤色に変わります。このとき「下」と判定されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_16.png" /></div>

:::note
例えば左に 2 回連続で移動したり、左に移動してから上に移動したりと、ある一連の動作を続けてトリガーしたい場合は、最初の左の動作を行ったあと、いったんボールを中央に戻してから 2 回目の動作を行ってください。
:::

## 2. 対応する Python 制御プログラムをダウンロードして実行する

この [GitHub リンク](https://github.com/xr686/Receive-the-information-from-the-reCamera-to-control-the-computer-through-body-sensing..git) をクリックします。

移動後、このプロジェクトの圧縮パッケージをローカルにダウンロードします。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_17.png" /></div>

解凍後、scket_udp.py を開き、まずキーボードを制御するための依存パッケージを 1 つダウンロードします。

```bash
pip install pynput
```

その後、この Python プログラムを実行できます。このとき、reCamera の検出画面を有効な状態に保っておく必要があります。すると、動作判定の結果が出力されるのが確認できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Game/game_18.png" /></div>

## 3. ゲームを開く（例として Subway Surfers の Web 版を使用）

reCamera の検出と Python プログラムが実行中であり、テスト動作の出力に問題がないことを確認したら、[subway parkour の Web ページ](https://subway-surfers.gg/) を開き、「Start Game」をクリックするとプレイを開始できます。

:::note
画面内に表示できるのは 1 人だけです。ほかの人が画面に入り込むと、動作判定が誤ってしまいます。
:::

## 技術サポート & 製品ディスカッション

当社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
