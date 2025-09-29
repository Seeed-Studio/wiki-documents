---
description: このガイドを使用して、Raspberry Pi を強力なモバイル Wi-Fi ホットスポットに変えましょう。Raspberry Pi 4G LTE Hat を使用して、どこでも簡単にインターネットに接続できます。
title: Raspberry Pi OS 上で Raspberry Pi 4G LTE Hat を使用したホットスポットの設定
keywords:
  - Raspberry Pi Hat
  - 初めての設定
  - ホットスポット
  - モバイルデータ
  - 4G LTE
  - エッジコンピューティング
image: https://files.seeedstudio.com/wiki/4g_hat_raspberry_pi_eg25_gl/1-114993408-LTE-CAT-4-EG25-GL-4G-HAT-for-Raspberry-Pi.webp
slug: /ja/4g_lte_hotspot_on_raspberry_pi_os
last_update:
  date: 05/15/2025
  author: Kasun Thushara
---


## はじめに

このガイドでは、Raspberry Pi と 4G LTE Hat を使用して 4G LTE ホットスポットを設定する方法を説明します。必要なハードウェアおよびソフトウェアコンポーネント（Raspberry Pi、4G LTE Hat、Raspberry Pi OS（Bookworm）を含む）について説明します。4G モジュールの設定方法、Wi-Fi ネットワークの構築方法、インターネット接続を他のデバイスと安全に共有する方法を学びます。

## 前提条件

### ハードウェア要件

<div class="table-center">
  <table align="center">
    <tr>
        <th>Raspberry Pi 5</th>
         <th>Raspberry Pi 4G LTE CAT4 HAT</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102110919-raspberry-pi-5-8gb-45font.jpg" style={{width:250, height:'auto'}}/></div></td>    
         <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/_/1_23_1.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Raspberry-Pi-5-8GB-p-5810.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/LTE-CAT-4-EG25-GL-HAT-for-Raspberry-Pi-p-6325.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### ソフトウェア要件

- Bookworm OS がインストールされた Raspberry Pi が必要です。

- インターネットアクセス用に設定された Quectel LTE 4G モジュール。RNIDS などの設定を使用して LTE 接続が適切に設定されていることを確認してください。[リンク](https://wiki.seeedstudio.com/ja/raspberry_pi_4g_hat_rndis_mobile_internet/)

## ホットスポットを有効にする手順

### LTE ネットワークに接続する

Quectel LTE モジュールが接続され、インターネットアクセスを提供していることを確認してください。以下のコマンドを使用して接続を確認します：

```bash
ping -c 4 google.com
```

### ホットスポットを作成する
内蔵 Wi-Fi モジュールを使用してホットスポットネットワークをブロードキャストするには：

- ターミナルを開きます。
- 以下のコマンドを実行し、`hotspot name` と `hotspot password` を希望する SSID とパスワードに置き換えます：

```bash
 sudo nmcli device wifi hotspot ssid <hotspot name> password <hotspot password> ifname wlan0
```

- **ssid**: ホットスポットネットワークの名前を設定します。
- **password**: ホットスポットにアクセスするためのパスワードを設定します。
- **ifname wlan0**: 使用する Wi-Fi インターフェースを指定します。

## ホットスポットの管理

### ホットスポットを無効にする

ホットスポットを停止し、Wi-Fi インターフェースをクライアントモードに戻すには：

```bash
sudo nmcli device disconnect wlan0
```

### 別の Wi-Fi ネットワークに再接続する

ホットスポットを無効にした後、別の Wi-Fi ネットワークに接続するには：

```bash
sudo nmcli device up wlan0
```

## 追加の注意事項

- Raspberry Pi をポータブルルーターまたは Wi-Fi アクセスポイントとして使用できるようになりました。
- 長時間ホットスポットをブロードキャストする場合は、Raspberry Pi の電源が安定していることを確認してください。
- 詳細については、この[ドキュメント](https://www.raspberrypi.com/tutorials/host-a-hotel-wifi-hotspot/)を参照してください。

## 技術サポートと製品に関する議論

私たちの製品を選んでいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>