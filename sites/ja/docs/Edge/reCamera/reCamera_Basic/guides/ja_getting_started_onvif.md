---
description: reCamera に ONVIF をデプロイする
title: reCamera に ONVIF をデプロイする
keywords:
  - reCamera
  - onvif
slug: /reCamera_onvif
sku: 102991896, 108990119, 100029708
sidebar_position: 6
last_update:
  date: 9/14/2026
  author: yylin
createdAt: '2026-09-14'
updatedAt: '2026-09-14'
url: https://wiki.seeedstudio.com/ja/reCamera_onvif/
---

# reCamera に ONVIF をデプロイする

## はじめに

ONVIF は、セキュリティデバイス向けに広く利用されている相互運用標準です。このソリューションをデプロイすると、Home Assistant、Frigate、NVR、VMS などの ONVIF 対応クライアントがローカルネットワーク上で reCamera を自動検出し、デバイス情報、ビデオストリームアドレス、ログイン認証情報を取得できるようになります。

ビデオ自体は引き続き RTSP 経由で配信されます。クライアントは ONVIF を使って reCamera を検出し、返された RTSP アドレスを使用してストリームを再生または録画します。この一連の処理はすべてローカルネットワーク上で行われ、追加のクラウドサービスは不要です。

このガイドでは、次の手順を順に説明します。

1. reCamera 上に ONVIF サービスをデプロイする。
2. RTSP ビデオストリームが正しく再生されることを確認する。
3. ONVIF を通じて reCamera を Home Assistant、NVR、または VMS に追加する。

## 必要なもの

始める前に、以下のデバイスを用意し、同じローカルネットワークに接続されていることを確認してください。

| デバイス | 用途 |
| --- | --- |
| reCamera 1 台 | ONVIF と RTSP サービスを実行します。reCamera 2002 シリーズ、Gimbal、HQ PoE モデルがサポートされています。 |
| Linux コンピュータ 1 台 | SenseCraft Solution をインストールして実行し、ソリューションをデプロイします。以下の例では Ubuntu 24.04 x86_64 を使用します。 |
| Home Assistant、NVR、または VMS（任意） | reCamera を検出し、そのビデオを閲覧または録画します。 |

> **ネットワークに関する注意:** HQ PoE モデルは Wi-Fi をサポートしていません。PoE 対応スイッチに接続して、電源とネットワーク接続の両方を確保してください。どのモデルを使用する場合でも、reCamera とそれを検出するクライアントが同じローカルネットワーク上にあることを確認してください。サブネットをまたいだ検出には、通常、追加のネットワーク設定が必要です。

<table align="center">
 <tr>
  <th>reCamera 2002 Series</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div>
  </td>
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

  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
      <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 🖱️</font></span></strong>
    </a>
    </div>
  </td>
 </tr>
</table>


## SenseCraft Solution をインストールする

[SenseCraft Solution のダウンロードページ](https://www.seeed.cc/category/reference-designs)を開き、**Deploy** をクリックして、使用しているコンピュータのオペレーティングシステムとプロセッサアーキテクチャに合ったインストーラを選択します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-2.png" /></div>

以下の例では Ubuntu 24.04 x86_64 を使用します。ターミナルを開き、次の手順でアプリケーションをダウンロードしてインストールします。

```bash
wget https://appcenter.seeed.xyz/SenseCraft.Solution/SenseCraft.Solution_amd64.deb

sudo dpkg -i ./SenseCraft.Solution_amd64.deb
```

インストール後、次のコマンドを実行して SenseCraft Solution を起動します。

```bash
sensecraft-solution
```

アプリケーションが起動すると、SenseCraft Solution のホーム画面が表示されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-11.png" /></div>

## reCamera に ONVIF サービスをデプロイする

### SenseCraft Solution を更新する

最新の ONVIF ソリューションを利用できるようにするため、まずローカルのソリューション一覧を更新します。サイドバーから **System Settings** を選択し、更新オプションを見つけて、続行する前に更新を完了させてください。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-12.png" /></div>
### ONVIF ソリューションをデプロイする

1. サイドバーから **Technical Demos** を選択します。
2. デバイスフィルタで **reCamera** を選択します。
3. **reCamera ONVIF Gateway** ソリューションを探して開きます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-13.png" /></div>

ソリューションを開き、対象の reCamera を選択し、表示される指示に従って接続設定を完了します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-14.png" /></div>

デバイスの詳細が正しいことを確認したら、**Deploy** をクリックします。デプロイタスクが成功と表示されるまで待ちます。これで reCamera では ONVIF サービスが有効になり、認証付きの RTSP ビデオストリームが提供されます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-15.png" /></div>

### ビデオストリームを確認する

デプロイが成功したら、デバイスを Home Assistant、Frigate、NVR、または VMS に追加する前に、RTSP ビデオストリームを再生してみてください。これにより、まずネットワークやビデオストリームの問題を切り分けることができます。

ストリームのテストには VLC、または Ubuntu 上の `ffplay` を使用できます。`ffplay` がインストールされていない場合は、先に FFmpeg をインストールします。

```bash
sudo apt install -y ffmpeg

ffplay rtsp://admin:recamera.1@<reCamera_IP>:8554/onvif
```

`<reCamera_IP>` を、ローカルネットワーク上での reCamera の実際の IP アドレスに置き換えてください。たとえば IP アドレスが `192.168.42.1` の場合は、次のように実行します。

```bash
ffplay rtsp://admin:recamera.1@192.168.42.1:8554/onvif
```

ライブ映像が表示されれば、ONVIF サービスと RTSP ストリームの両方が正しく動作しています。その後、クライアント側で ONVIF カメラを追加できます。通常は **Auto Discover** または **Add ONVIF Device** を選択し、reCamera の IP アドレス、ユーザー名、パスワードを入力します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-9.png" /></div>


## デフォルトの認証情報とセキュリティ

認証はデフォルトで有効になっています。デフォルトの認証情報は次のとおりです。

| 項目 | デフォルト値 |
| --- | --- |
| ユーザー名 | `admin` |
| パスワード | `recamera.1` |
| RTSP パス | `/onvif` |

> **重要:** デフォルトパスワードは初期検証のためだけのものです。他の人が reCamera のネットワークにアクセスできる場合は、本番運用前にパスワードを変更して、ビデオストリームへの不正アクセスを防いでください。

ユーザー名やパスワードを変更するには、GitHub から [reCamera SDK](https://github.com/yyling0101-a11y/reCamera_2002w_sdk) をクローンし、`examples/camera_onvif_rtsp` 内の該当する設定を探します。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/guides/image-10.png" /></div>

設定を更新してプロジェクトを再ビルドします。詳細なビルド手順については、リポジトリの [README](https://github.com/yyling0101-a11y/reCamera_2002w_sdk/blob/main/README.md) を参照してください。ビルドされた実行ファイルを reCamera に転送し、実行権限を付与して実行すると、新しい認証情報が使用されます。

## トラブルシューティング

| 問題 | 解決策 |
| --- | --- |
| クライアントが reCamera を検出できない | reCamera と Home Assistant、Frigate、NVR、または VMS が同じローカルネットワーク上にあることを確認します。また、デプロイが正常に完了していることも確認してください。 |
| RTSP ストリームが再生できない | コマンドで reCamera の実際の IP アドレスを使用しているか確認します。ユーザー名、パスワード、パスが `admin`、`recamera.1`、`/onvif` であることを確認してください。 |
| HQ PoE モデルがネットワークに接続できない | スイッチが PoE をサポートしていること、Ethernet ケーブルが電源とネットワーク接続の両方を提供していることを確認してください。 |
| 更新後も ONVIF ソリューションが利用できない | SenseCraft Solution を再起動し、ソリューション一覧の更新が完了していることを確認してから、**Technical Demos > reCamera** を選択します。 |

## 技術サポートと製品ディスカッション

本製品をお選びいただきありがとうございます。できるだけスムーズにご利用いただけるよう、複数のサポートチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
