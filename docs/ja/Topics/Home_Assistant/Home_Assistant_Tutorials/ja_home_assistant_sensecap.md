---
description: Home Assistant 用 SenseCAP LoRaWAN センサーの統合
title: Home Assistant 用 SenseCAP 統合
keywords:
- SenseCAP M2 Multi-Platform 
- Home Assistant
- LoRaWAN センサー
slug: /ja/home_assistant_sensecap
last_update:
  date: 05/15/2025
  author: JoJang
---


# SenseCAP センサーを Home Assistant に自動統合

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/overview.jpg" alt="pir" width={800} height="auto" /></p>

## 1. SenseCAP M2 マルチプラットフォームの設定
### 1.1 LoRa ネットワークの設定
**ステップ 1.** **LoRa** をクリックし、**LoRa Network** を選択します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lora_network.png"/></div>

**ステップ 2.** ローカルネットワークサーバーモードを選択し、MQTT ホスト情報を入力します **(ホスト、ユーザー名、パスワード、ポートを含む)**。その後、**Save&&Apply** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/lns.png"/></div>

この時点でサーバーモードの設定が完了し、後で ChirpStack を設定します。

### 1.2 ChirpStack の設定

**ステップ 1.** ChirpStack 設定ページを開き、**Device profiles** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles.png"/></div>

**ステップ 2.** **Add device profile** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_profiles_2.png"/></div>

**ステップ 3.** 最初に、SenseCAP の設定に従ってデバイスプロファイルを入力します: **名前、地域、MAC バージョン**、および **地域パラメータの改訂**。**Expected uplink interval** を **120** に変更する必要があります。この値は必要に応じて調整可能です。次に、上部の **Codec** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chripstack_general.png"/></div>

**ステップ 4.** このステップでは、センサーモデルに応じてデコーダーを選択する必要があります。コードは [こちら](https://github.com/Seeed-Solution/SenseCAP-Decoder.git) で見つけることができます。**TTN** フォルダー内のコードをデコーダーとして選択します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_decoder.png"/></div>

**ステップ 5.** 次にデバイスを追加します。**Applications** をクリックします。
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_applications.png"/></div>

**ステップ 6.** **Add applications** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_2.png"/></div>

**ステップ 7.** アプリケーション情報を入力し、**Submit** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_application_3.png"/></div>

**ステップ 8.** **SenseCAP Mate APP** を使用してセンサーを設定し、**Platform** を **Other Platform** に設定します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/SenseCAP_Mate.jpg"/></div>

**ステップ 9.** **Add device** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice.png"/></div>

**ステップ 10.** デバイス情報を入力し、**Submit** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_2.png"/></div>

**ステップ 11.** デバイスの **DevEUI** をクリックしてページを開きます。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_adddevice_3.png"/></div>

**ステップ 12.** **OTAA keys** をクリックし、SenseCAP センサーの **Application key** を入力します。その後、**Submit** をクリックします。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_appkey.png"/></div>

**ステップ 13.** SenseCAP センサーをアクティブ化し、自動的に LoRaWAN に接続されるのを待ちます。その後、センサーがアップロードしたデータを **Events** や **LoRaWAN frames** で確認できます。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_data.png"/></div>

**ステップ 14.** この時点で、M2 ゲートウェイのすべての設定が完了しました。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/chirpstack_updata.png"/></div>

:::tip
M2 ゲートウェイにデバイスを **初めて** 追加する際は、**Events** で **up** によって報告されたデータが確認できるまで **2～5 分** 待つ必要があります。その後、デバイス追加の初期化が完了します。その後、Home Assistant プラグインを設定できます。
:::

## 2. Home Assistant 設定
### 2.1 インストール

**1.HACS**
- 初回インストール
  - 1.HACS > Integrations >
  - 2.右上の角をクリック > Custom repositories ： 
    ```
      Repository: https://github.com/Seeed-Solution/home-assistant-SenseCAP.git
      Category: Intergration
    ```
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_2.png"/></div>  

  - 3.「ADD」をクリック
  - 4.HACS > Integrations > ➕ EXPLORE & DOWNLOAD REPOSITORIES > Seeed Studio-SenseCAP > 「DOWNLOAD THIS REPOSITORY」をクリック

  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/custom_repositories_3.png"/></div>  


- コンポーネントの更新
    > HACS > Integrations > [`Seeed Studio-SenseCAP`](https://my.home-assistant.io/redirect/hacs_repository/?owner=Seeed-Solution&repository=https%3A%2F%2Fgithub.com%2FSeeed-Solution%2Fhome-assistant-SenseCAP.git) > UPDATE / Redownload

**2.SSH & Web Terminal アドオンを使用してインストール**

1. SSHターミナルを開き、以下のコマンドを入力します：
```
cd ~/config/custom_components && git clone https://github.com/Seeed-Solution/home-assistant-SenseCAP.git && cd home-assistant-SenseCAP/custom_components && mv sensecap ../../ && cd ../../ && rm -r home-assistant-SenseCAP
```
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/Install.jpg"/></div>

2. HAコアを再起動
3. インテグレーションを追加
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/add_intergration.png"/></div>


### 2.2 設定
1. MQTT情報を入力し、**SUBMIT**をクリック
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_1.png"/></div>

2. 数分待ちます（**アップリンク時間はM2 ChirpstackおよびSenseCAP Mate APPでの設定に依存します**）。その後、左サイドバーの**Notifications**をクリックします。すると、SenseCAPセンサーが自動的にHAに追加されたことが確認できます。**Check it out**をクリックしてインテグレーションに移動します。
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_2.png"/></div>

3. デバイスの1つをクリックすると、すべてのエンティティが自動的に作成され、デバイスに追加されていることが確認できます。**ADD TO DASHBOARD**をクリックすると、デバイス全体のすべてのエンティティをカード形式でダッシュボードに直接追加できます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_3.png"/></div>

4. **Overview**に移動すると、先ほど追加したカードが見つかります。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_4.png"/></div>

5. **Edit dashboard**をクリック

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_5.png"/></div>

6. **EDIT**をクリックして編集

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_6.png"/></div>

7. カードを装飾するためにヘッダー画像を追加できます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_7.png"/></div>

8. お気に入りの画像を表示するためにURLを自分のものに置き換えます

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_8.png"/></div>

9. 修正するエンティティを選択

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_9.png"/></div>

10. センサーエンティティの種類に似たアイコンに変更

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_10.png"/></div>

11. これでプラグイン設定プロセス全体が完了しました。その後、自分の要件に応じてカスタム最適化を行うことができます。

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/IMAGES/SenseCAP/M2_homeassistant/config_11.png"/></div>

12. ここでは、さまざまなモデルのSenseCAPセンサーを追加した後の「Overview」ページでの視覚的な表現を示します。

以上が、SenseCAPをHome Assistantプラットフォームに統合するための完全なステップバイステップのチュートリアルです。Home Assistantは、さまざまなプラットフォームからの異なる種類のデバイスを単一のエコシステムにシームレスに統合する能力を持ち、クロスプラットフォームの相互運用性を促進します。これは、スマートホームエコシステムの包括性にとって非常に重要です。現在、Seeedも広範なHome Assistantコミュニティの一員となり、私たちのSenseCAPデバイスをプラットフォームに統合できるようになりました。この取り組みが、IoTエコシステムのさらなる強化と成長に貢献することを信じています！

:::tip
**Home Assistant用SenseCAPインテグレーションは完全にオープンソースであり、ソースコードプロジェクトをこちらからダウンロードできます**: [https://github.com/Seeed-Solution/home-assistant-SenseCAP.git](https://github.com/Seeed-Solution/home-assistant-SenseCAP.git).
:::

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただきありがとうございます！製品をご利用いただく際に、できるだけスムーズな体験を提供するために、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>