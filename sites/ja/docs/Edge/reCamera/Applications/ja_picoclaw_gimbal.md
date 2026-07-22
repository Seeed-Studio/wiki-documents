---
title: reCamera 上での Picoclaw のローカルデプロイ
description: このアプリケーションケースでは、reCamera 上で Picoclaw をローカルデプロイする手順とその活用方法を紹介します。
keywords:
  - reCamera
  - エッジ AI
slug: /recamera_picoclaw
sku: 100029708
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif
sidebar_position: 11
last_update:
  date: 2026-06-24
  author: Sizhao zhou
createdAt: '2026-06-24'
updatedAt: '2026-06-26'
url: https://wiki.seeedstudio.com/ja/recamera_picoclaw/
---


## 1. はじめに
reCamera 上で自分のアイデアを実現したいものの、プログラミングスキルが不足していて実行できないという方は多いと思います。初心者にとても優しい node-red を提供していますが、その機能は比較的シンプルで、複雑な要件には対応できません。そこで、reCamera 上に Picoclaw をローカルデプロイするケースをご用意しました。Picoclaw を使えば、自分でコードを書いたりデバイスをデバッグしたりする必要はなく、Picoclaw に任せることができます。もちろん、コード作成を手伝うだけでなく、オンボードのハードウェアモジュールを直接制御することも可能です。ほかにも、あなたの探索を待っているさまざまな遊び方があります!!

## 2. ハードウェアの準備

- reCamera Gimbal 1 台
- コンピュータ 1 台

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

## 3. 効果デモ
### 3.1 Gimbal に周囲を見回させる 
![look around](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_lookaround.gif)
### 3.2 自然言語でオンボードハードウェアを制御する - LED ライトの制御
![led](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_turn_led.gif)
### 3.3 エージェントに自動でスクリプトを書かせて実行させる
![script](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_write_code.gif)

## 4. デプロイ手順
***openclaw*** は動作に大量のメモリ（2GB 以上）を必要とするため、このプロジェクトでは軽量版 Claw である ***picoclaw*** をデプロイします。これは動作に必要なメモリが 10MB のみであり、本プロジェクトに非常に適しています。
### 4.1 picoclaw のソースコードをダウンロードする
リンクをクリックして picoclaw のソースコード圧縮パッケージ（riscv64 アーキテクチャの reCamera をサポート）をダウンロードします：[picoclaw source code compressed package](https://github.com/sipeed/picoclaw/releases/download/nightly/picoclaw_Linux_riscv64.tar.gz)


### 4.2 reCamera に SSH 接続する
reCamera に接続した後、次のコマンドを入力して ***userdata*** ディレクトリにアクセスし、picoclaw のソースコードを保存するフォルダを作成します。

  ```
  ssh recamera@[IP address of reCamera]
  cd /userdata
  mkdir picoclaw
  ```

### 4.3 ソースコード圧縮パッケージを reCamera にアップロードする
picoclaw のソースコード圧縮パッケージを reCamera の ***/userdata/picoclaw/*** フォルダにアップロードします。

  ```
  scp picoclaw_Linux_riscv64.tar.gz recamera@[IP address of reCamera]:/userdata/picoclaw
  ```

### 4.4 ソースコード圧縮パッケージを解凍する
reCamera 上で次のコマンドを入力し、picoclaw のソースコード圧縮パッケージを解凍します。

  ```
  tar -axvf picoclaw_Linux_riscv64.tar.gz
  ```

### 4.5 picoclaw の Web UI を起動する
reCamera 上で次のコマンドを入力し、picoclaw の Web UI を起動します。

  ```
  ./picoclaw-launcher -no-browser -public
  ```
サービスが起動したら、ブラウザを開き、***http://[reCamera の IP アドレス]:18800*** にアクセスします。下図のようになります。
![ip_login](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_login.png)


## 5. picoclaw 大規模モデルの設定
Web UI 上でパスワードを設定した後、以下の手順に従って picoclaw の大規模モデルを設定します。

### 5.1 左側のサイドバーで ***Model*** オプションを見つけてクリックします。

### 5.2 下にスクロールして ***deepseek-chat*** モデルを見つけ、***Edit*** ボタンをクリックします。下図のようになります。
![model_edit](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_model_edit.png)

### 5.3 API-KEY 入力ボックスに自分の API Key を入力し、***Save*** ボタンをクリックして設定を保存します。

### 5.4 設定が完了したら、右上の ***Start Service*** ボタンをクリックしてモデルを起動します。
![start_service](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_server_start.png)

### 5.5 左側の ***Chat*** オプションをクリックして、モデルとの対話を開始します。

## 6. QQ ロボットに接続する
Web UI 上でパスワードを設定した後、以下の手順に従って QQ ロボットに接続します。
### 6.1 まず [QQ Open Platform](https://q.qq.com/#/) にアクセスし、自分の QQ アカウントでログインします。

### 6.2 左側の ***Robot*** オプションをクリックし、***Create Robot*** ボタンをクリックします。下図のようになります。
![create_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_creat_qq_bot.png)

### 6.3 ロボットを作成したら、チュートリアルに従って設定を行い、対応する Robot ID と Secret Key を取得します。その後 Web UI に戻り、左側の ***Channel*** オプションを見つけてクリックし、下にスクロールして ***QQ*** を見つけて接続をクリックし、ID と Secret Key を入力して Save をクリックします。
![qq_robot](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_config_qq.png)



## 7. 自分だけのスキルを作成する
/home/recamera ディレクトリ内に ***.picoclaw*** フォルダがあります。フォルダに入ると ***workspace*** があり、その中に ***skill*** フォルダがあります——ここが自分のスキルを作成する場所です。

### 7.1 スキル作成フォーマット
```
skill-name/
├── SKILL.md            # Required - Main skill file
├── scripts/            # Optional - Executable scripts
├── references/         # Optional - Reference documents (loaded on demand)
└── assets/             # Optional - Resource files for output (templates, images, etc.)
```


## 8. reCamera スキルをインポートする
reCamera 向けに特別に作成した、いくつかのシンプルなスキルを用意しました--->[Skill Link](https://drive.google.com/drive/folders/1bh-GXnF8QEMQW8UpO1aNcdOcblAF6B5H)
下図の 3 つのファイルが表示されます：
![skill_files](https://files.seeedstudio.com/wiki/reCamera/Applications/Picoclaw&Gimbal/picoclaw_skill.png)

- ***recamera_read_manual***
reCamera のハードウェアリソースを読み取るスキルで、reCamera のナレッジベースのような役割を果たします——これを ***skill*** フォルダに配置するだけです。

- ***recamera_video_record***
動画撮影と写真撮影用のスキル（node-red をベースに実装）——これを ***skill*** フォルダに配置するだけです。

- ***SKILL.md***
reCamera Gimbal の全体的なハードウェアリソースを記述するメインファイルです——これを ***/skill/hardware*** に配置して、元のファイルを上書きします。


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、複数のサポート方法をご用意しています。さまざまなご希望やニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>