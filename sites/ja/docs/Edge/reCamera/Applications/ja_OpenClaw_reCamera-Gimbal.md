---
description: OpenClaw を使用して reCamera Gimbal を制御する
title: OpenClaw を使用して reCamera Gimbal を制御する
keywords:
  - reCamera Gimbal
  - センシング制御
  - OpenClaw
image: https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_9.png
slug: /use_cpenclaw_to_control_the_recamera_gimbal
sku: 100029708
sidebar_position: 10
last_update:
  date: 03/27/2026
  author: Xinrui Wu
createdAt: '2026-03-27'
updatedAt: '2026-04-20'
url: https://wiki.seeedstudio.com/ja/use_cpenclaw_to_control_the_recamera_gimbal/
---


# OpenClaw を使用して reCamera Gimbal を制御する

## はじめに

このプロジェクトでは、OpenClaw Agent フレームワークと Seeed Studio の reCamera Gimbal エッジ AI カメラを深く統合することで、仮想の大規模モデルと物理世界との間の障壁を打ち破ることに成功しました。  
強力な RISC-V アーキテクチャ、組み込みの Node-RED ローコード環境、そして reCamera の 1 TOPS エッジコンピューティング性能に基づき、OpenClaw 用の専用の低レベルインタラクション Skill を開発しました。  
これにより、大規模モデルはもはや画面上で文字を打つだけの「瓶詰めの脳」ではありません。能動的に 360° 回転できる「首」、物理世界を見ることができる「目」（画像取得 + VLM 解析）、環境を変えられる「手」（LED 制御）、そして双方向のやり取りを行うための「耳と口」（マイクとスピーカー）を持つようになりました。

以下は、このデモを完了した後の動作イメージです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw.gif" /></div>

## ハードウェアの準備

reCamera Gimbal 1 台
コンピュータ 1 台

<table align="center">
 <tr>
  <th>reCamera Gimbal</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## 1. パソコンに OpenClaw をインストールする

:::note
インストール前に Git と nodejs をインストールしておく必要があります。Windows10 ユーザーの場合は、さらに Visual Studio をインストールする必要があります。インストールしていない場合はエラーが発生します。
:::

詳細なインストールチュートリアルを見るには、OpenClaw の公式サイトをご覧ください：[OpenClaw-Personal AI Assistant](https://openclaw.ai/)

インストール後、ブラウザから直接 Web ページにアクセスしてチャットを試すことができます。この時点で正常に応答が得られれば、OpenClaw のインストールと設定は完了しています。そのまま手順を進めてください。OpenClaw のインストールに問題がある場合は、原因を特定してご自身で解決してください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_2.png" /></div>

左側の "Overview" ページをクリックして、"Status" が正常かどうかを確認することもできます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_3.png" /></div>

## 2. reCamera Gimbal の Skills をインポートする

### 2.1 Skills フォルダを新規作成

OpenClaw をインストールしたフォルダ内で workspace を探し、このパスの下に "skills" という名前の新しいフォルダを作成します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_1.png" /></div>

### 2.2 GitHub から reCamera Gimbal プロジェクトをダウンロードする

プロジェクトのアドレスは次のとおりです：

```
https://github.com/Seeed-Projects/reCamera_Gimbal-OpenClaw
```

ダウンロードして解凍したら、プロジェクト内の "recamera-gimbal" フォルダを、手順 2.1 で作成した "skills" フォルダ内に配置します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_8.png" /></div>

### 2.3 openclaw.json の設定

openclaw.json は、OpenClaw をインストールしたフォルダ内にあります。このファイルには、AI モデルにアクセスするために必要なすべての設定が含まれています。ここでは、reCamera Gimbal に関する以下の内容を openclaw.json に追加する必要があります：

:::note

1. "C :\\ Users\\seeed\\.openclaw\\workspace\\skills" を、実際の skills フォルダのパスに置き換えてください

2. "192.168.31.198" を、実際の reCamera Gimbal の IP アドレスに置き換えてください

3. "recamera.1" を、実際の reCamera Gimbal のパスワードに置き換えてください

:::

```json
"skills": {
    "load": {
      "extraDirs": [
        "C:\\Users\\seeed\\.openclaw\\workspace\\skills"
      ]
    },
    "entries": {
      "recamera-gimbal": {
        "enabled": true,
        "env": {
          "RECAMERA_IP": "192.168.31.198",
          "RECAMERA_PASS": "recamera.1"
        }
      }
    }
  }
```

:::note
独自の Skills を作成したい場合は、公式の作成[仕様](https://agentskills.io/specification#allowed-tools-field)を参照してください
:::

## 3. SenseCraft を開いてアプリケーションをデプロイする

### 3.1 reCamera Gimbal の設定

まず、reCamera Gimbal の電源は接続せず、Type-C を直接コンピュータに接続して 192.168.42.1 にアクセスします。アクセス後、左下の "Login to SenseCraft" をクリックします。ログイン後、WiFi を接続し、接続する WiFi がパソコンと同じであることを確認します。その後、reCamera Gimbal の IP アドレスを確認し、その IP アドレスをコピーしてアクセスし、正常にアクセスできるか確認します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_5.png" /></div>

### 3.2 アプリケーションのデプロイ

SenseCraft AI プラットフォーム上で、**`Applications`** > **`Application Square`** に移動します（または[こちら](https://sensecraft.seeed.cc/ai/application)から直接開きます）。"OpenClaw & reCamera Gimbal" という名前のプロジェクトを見つけ、**`Deploy Application`** > **`Visit Workspace Via USB`** をクリックします。デプロイ後に表示されるワークフローは、次の図のようになっているはずです：

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_4.png" /></div>

## 4. モーターと撮影のテスト

次に Type-C ケーブルを抜き、12V 電源を接続します。reCamera Gimbal の自動キャリブレーションが完了するのを待ってから、先ほどの IP アドレスをブラウザで再度開き、reCamera Gimbal の画面に入り、Node-RED が正常に動作を開始していることを確認します。続いて、引き出した 2 つの HTTP インターフェースが正常に動作するかテストします：

### 4.1 モーターのテスト

まず、パン・チルトモーターが正常かどうかをテストします。"`<DEVICE_IP>`" を、あなたの reCamera Gimbal の実際の IP に置き換えてください：

```http
http://<DEVICE_IP>:1880/api/gimbal?yaw=120&pitch=90
```

すべて正常であれば、この URL にアクセスしたときに reCamera Gimbal のモーターが回転するのが確認できます。また、120 や 90 を他の角度に置き換えることもできます。

### 4.2 撮影のテスト

次に、撮影が正常かどうかをテストします。"`<DEVICE_IP>`" を、あなたの reCamera Gimbal の実際の IP に置き換えてください：

```http
http://<DEVICE_IP>:1880/api/photo
```

すべて正常であれば、この URL にアクセスしたときに、reCamera Gimbal が現在撮影した画像を Web ページ上で確認できます。

:::note
reCamera Gimbal とパソコンが同じ WiFi に接続されていることを確認してください
:::

## 5. OpenClaw でテストする

テストを行う前に、次の 2 点を確認する必要があります：

### 5.1 Skills が正しく設定されていることを確認する

手順 2 に従って Skills を設定していれば、OpenClaw の画面で左側の "Skills" をクリックし、その後 "WORKSPACE SKILLS" をクリックすると、ローカルで設定した "recamera-gimbal" が表示されるはずです。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_6.png" /></div>

### 5.2 モデルが正しく設定されていることを確認する

モデルが正しく設定されていることを確認してください。左側の "Agent" をクリックすると、"Primary model" の下に設定済みのモデルが表示されます。ここでは GLM4.7 モデルを使用しています。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/OpenClaw&Gimbal/openclaw_7.png" /></div>

### 5.3 OpenClaw で reCamera Gimbal の制御を始める

チャットウィンドウで OpenClaw に対して、「カメラの LED を点灯して」「周りを見回して人がいるか確認して」「5 秒間の音声を録音して再生して」などのタスクを直接指示してください。また、「reCamera のセンチネルモードをオンにする（周囲を素早くスキャンし、1 回のスキャンサイクル、つまり 1 周のスキャンを 6 秒以内に収める）。もし画像の中に白い T シャツを着た人がいたら、カメラのライトを点灯し、test.wav の音声を再生し、画像の内容を解析して画像をローカルに保存する」といった、より複雑なタスクを試してみても構いません。その後、しばらく待って reCamera Gimbal の反応を確認してください。

:::note
OpenClaw によるタスクの実行はかなり時間がかかります。複雑な指示の場合、効果が現れるまで 2～3 分ほどかかることがありますので、正常な動作として、焦らずお待ちください。
:::

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
