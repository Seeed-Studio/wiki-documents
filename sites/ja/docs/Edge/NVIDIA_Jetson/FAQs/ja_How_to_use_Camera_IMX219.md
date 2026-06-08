---
description: これは、NVIDIA Jetson デバイスで IMX219 カメラを使用するための FAQ です
title: NVIDIA Jetson デバイスで IMX219 カメラを使用する
keywords:
  - Jetson
  - IMX219 Camera
  - CSI Camera
image: https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg
slug: /how_to_use_camera_imx219
last_update:
  date: 06/03/2026
  auther: Dongxu Jin
  createdAt: '2026-6-3'
  updatedAt: '2025-6-5'
url: https://wiki.seeedstudio.com/ja/how_to_use_camera_imx219/
---

# IMX219 カメラセットアップガイド

IMX219 は広く使用されている 8 メガピクセル CMOS イメージセンサで、15 ピンの CSI フラットケーブルを使用します。

## ハードウェアの取り付け
CSI カメラはホットスワップをサポートしていません。すべての配線作業は、開発ボードの電源を完全に切った状態で行う必要があります。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/IMG_20260602_165135.jpg"/></div>
Jetson ボードの CSI コネクタのラッチを持ち上げます。
CSI フラットケーブルを挿入し、ケーブルの金属端子が Jetson キャリアボード上の端子と正しく合うようにします。
ラッチをしっかり押し下げて、ケーブルを固定します。

## ソフトウェアドライバの設定
NVIDIA の設定ツールを起動します：
 ```bash
  sudo /opt/nvidia/jetson-io/jetson-io.py
```
Configure Jetson Nano CSI Connector に移動します。
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-16-40.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-20.png"/>
    </div>
</div>
Configure for compatible hardware を選択します。
リストから Camera IMX219 Dual を選択します。
<div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'nowrap'}}>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-17-41.png"/>
    </div>
    <div style={{flex: 1, textAlign: 'center'}}>
        <img width="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-07.png"/>
    </div>
</div>
Save pin changes を選択します。
Save and reboot を選択してピンを再設定し、デバイスツリーの変更を適用します。

***💡 ヒント：単眼カメラを接続する場合は、正しく動作させるために「Camera IMX219 Dual」モードを選択する必要があります。逆に、デュアルカメラ構成を接続する場合は「Single」モードを選択してください。***

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-18-36.png"/></div>
デバイスノードの確認
システムが再起動したら、ターミナルを開き、次のコマンドを実行してハードウェアが認識されているか確認します：

```bash
ls /dev/video*
```

出力に `/dev/video0` のようなデバイスノードが含まれていれば、ハードウェア接続は成功しています。その後、最も簡単な方法でカメラをテストできます：
```bash
nvgstcapture
```
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-21-00.png"/></div>
カメラ映像の端に赤みがかって見えることがあります。これは ISP（Image Signal Processing）設定ファイルが不足していることが原因です。

## ISP ファイルの設定
NVIDIA 公式の ISP 設定ファイルをダウンロードしてインストールすることで、色の歪みを修正できます。

ファイルをダウンロードして展開します：
```bash
wget https://files.seeedstudio.com//Driver/Camera_overrides.tar.gz
tar zxvf Camera_overrides.tar.gz
```

ファイルをシステムの Nvidia カメラ設定ディレクトリに移動し、パーミッションを変更します：
```bash
sudo mv camera_overrides.isp /var/nvidia/nvcam/settings/
sudo chmod 664 /var/nvidia/nvcam/settings/camera_overrides.isp
sudo chown root:root /var/nvidia/nvcam/settings/camera_overrides.isp
```

ISP ファイルを置き換えたら、カメラプレビューアプリケーションを再起動します。端の赤みは修正されているはずです。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/imx219/Screenshot from 1970-01-01 08-32-48.png"/></div>

***⚠️ 注意：この ISP 上書きファイルを適用した状態で標準の Raspberry Pi V2 カメラに戻すと、画像の周囲が青みがかって見える場合があります。異なるカメラモジュールを切り替える際は、元の ISP 設定をバックアップまたは復元することを推奨します。***


## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>