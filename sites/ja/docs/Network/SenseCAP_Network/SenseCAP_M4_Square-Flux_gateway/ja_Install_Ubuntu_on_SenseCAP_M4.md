---
description: USB 経由で SenseCAP M4 に Ubuntu をインストールする
title: USB 経由で SenseCAP M4 に Ubuntu をインストールする
keywords:
  - SenseCAP Network
  - SenseCAP M4
  - Ubuntu
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /install_ubuntu_on_sensecap_m4
sku: E23010412, 110991885, 110991865
last_update:
  date: 08/18/2026
  author: Zhai Chenyang
createdAt: '2026-08-18'
updatedAt: '2026-08-18'
url: https://wiki.seeedstudio.com/ja/install_ubuntu_on_sensecap_m4/
---

# USB 経由で SenseCAP M4 に Ubuntu をインストールする

このガイドでは、USB ドライブを使用して SenseCAP M4 に Ubuntu 24.04 をインストールする方法を説明します。

## インストール要件

1. 容量 4 GB 以上の USB フラッシュドライブ
2. Microsoft Windows XP 以降が動作しているコンピュータ
3. 無料かつオープンソースの USB 作成ツールである Rufus
4. Ubuntu の ISO イメージファイル

## 1. Ubuntu ISO イメージをダウンロードする

ダウンロードするには[こちら](https://releases.ubuntu.com/24.04/)をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-01.png" /></div>

## 2. Rufus をダウンロードする

ダウンロードするには[こちら](https://rufus.ie/en/#download)をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-02.png" /></div>

## 3. 起動可能な USB ドライブを作成する

こちらの[リンク](https://ubuntu.com/tutorials/create-a-usb-stick-on-windows#1-overview)を参照してください。

### 3.1 Rufus を開き、USB ドライブを選択する

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-03.png" /></div>

### 3.2 ISO イメージを選択する

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-04.png" /></div>

### 3.3 ISO イメージの書き込みを開始する

ISO イメージを選択したら、**START** をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-05.png" /></div>

### 3.4 ISO イメージの書き込みモードを選択する

次のポップアップウィンドウが表示されたら、**Write in ISO Image mode (Recommended)** を選択します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-06.png" /></div>

ISO イメージの書き込みを完了するために、Rufus が追加ファイルのダウンロードを必要とする旨のメッセージが表示される場合があります。このダイアログボックスが表示されたら、**Yes** をクリックして続行します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-07.png" /></div>

USB ドライブを消去するかどうか確認されたら、**Yes** をクリックして続行します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-08.png" /></div>

ステータスが **READY** と表示されたら、Rufus を閉じてかまいません。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-09.png" /></div>

## 4. Ubuntu をインストールする

参考として[こちら](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview)を参照してください。

USB ドライブを SenseCAP M4 に挿入し、キーボードとディスプレイを HDMI ポート経由で接続してから電源を入れ、**Delete** キーを押します。

### 4.1 BIOS パスワードを入力する

パスワードを入力します：`QbCuNBAz`

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-10.png" /></div>

### 4.2 USB ドライブから起動する

**Save & Exit** 画面で、**Boot Override** の下に表示される USB ドライブを選択し、**Enter** を押してそこから起動します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-11.png" /></div>

### 4.3 Ubuntu のインストールを開始する

最初のオプションを選択して Ubuntu のインストールを開始します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-12.png" /></div>

### 4.4 言語を選択する

インストール画面に入ったら、希望する言語を選択します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-13.png" /></div>

### 4.5 キーボードレイアウトを選択する

キーボードレイアウトを選択します。デフォルト設定を使用してもかまいません。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-14.png" /></div>

### 4.6 インストールオプションを選択する

Ubuntu をインストールするオプションを選択します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-15.png" /></div>

### 4.7 ネットワークを設定する

ネットワーク接続の手順は、ここではスキップしてもかまいません。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-16.png" /></div>

### 4.8 プロキシを設定する

プロキシ設定の手順もスキップしてかまいません。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-17.png" /></div>

### 4.9 Ubuntu アーカイブミラーを設定する

Ubuntu アーカイブミラーの設定については、デフォルト設定のままにして次のステップへ進みます。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-18.png" /></div>

### 4.10 ストレージを設定する

ストレージを設定し、**Custom storage layout** を選択します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-19.png" /></div>

### 4.11 ディスクをフォーマットする

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-20.png" /></div>

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-21.png" /></div>

### 4.12 パーティションを作成する

必要に応じてパーティションレイアウトをカスタマイズできます。この例では、ルートパーティションとデータパーティションを分けて作成します。

ルートパーティションのサイズを **50 GB** に設定します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-22.png" /></div>

### 4.13 残りの領域を割り当てる

残りの領域をデータパーティションに割り当てます。このフィールドを空白のままにすると、残りのすべての領域が `/data` に割り当てられます。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-23.png" /></div>

### 4.14 パーティションレイアウトを確認する

パーティションの作成が完了したら、**Next** をクリックします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-24.png" /></div>

### 4.15 ユーザーアカウントを設定する

ホスト名、ユーザー名、およびパスワードを入力します。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-25.png" /></div>

### 4.16 Ubuntu Pro をスキップする

Ubuntu Pro へのアップグレードは、ここではスキップしてかまいません。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-26.png" /></div>

### 4.17 OpenSSH をインストールする

ここで OpenSSH をインストールして、SSH 接続を有効にします。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-27.png" /></div>

### 4.18 システムを再起動する

インストールが完了したら、**Reboot Now** を選択します。システムの再起動中に USB ドライブを取り外してかまいません。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-28.png" /></div>

### 4.19 インストールを完了する

インストールが正常に完了しました。

<div align="left"><img width={1000} src="https://files.seeedstudio.com/products/SenseCAP M4/wiki_SenseCAP_M4_Square-Flux_gateway/Install_Ubuntu_on_SenseCAP_M4/_img_Network_SenseCAP_M4_Ubuntu_step-29.png" /></div>

