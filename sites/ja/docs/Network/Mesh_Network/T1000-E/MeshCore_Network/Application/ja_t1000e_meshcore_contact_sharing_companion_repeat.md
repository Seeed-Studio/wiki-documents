---
description: Public Channel で連絡先を共有し、Companion デバイスに Repeat Mode でメッセージを中継させることで、SenseCAP Card Tracker T1000-E を使って MeshCore の通信経路を一時的に延長します。
title: 連絡先共有と Companion リピート
keywords:
  - MeshCore
  - Card Tracker T1000-E
  - Companion Repeat
  - Contact Sharing
  - Public Channel
  - LoRa Mesh
image: https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png
slug: /t1000e_meshcore_contact_sharing_companion_repeat
sku: 114993369,114993649
sidebar_position: 3
last_update:
  date: 10/16/2026
  author: Advent Jiang
---

# T1000-E で MeshCore ネットワークを拡張する：連絡先共有と Companion リピート

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/t1000e-meshcore-hero.png" alt="MeshCore App と一緒に使用される SenseCAP T1000-E デバイス" width={900} height="auto" /></p>

## はじめに

2 人の MeshCore ユーザー同士が離れすぎていたり、建物や地形によって電波経路が遮られている場合、お互いのメッセージを受信できないことがあります。両方のデバイスから中間地点にある SenseCAP Card Tracker T1000-E に到達できるなら、その中間デバイスで Companion Repeat Mode を有効にし、一時的にメッセージを転送させることができます。

このガイドでは、MeshCore ファームウェアを実行している 3 台の T1000-E デバイスを使用します。Public Channel を介して連絡先 ID を共有する方法、1 台の Companion デバイスで一時的な中継を設定する方法、および中継デバイスの電源を切った場合と入れた場合で通信結果がどのように変化するかを説明します。

## 主な特長

- 専用の固定 Repeater を事前に展開することなく、適切なネットワーク条件下で通信経路を一時的に延長することを試せます。
- 連絡先共有とリピートの切り替えといったすべての設定を、使い慣れた MeshCore App 内で行えるため、小規模チームでもすばやくセットアップできます。
- 中間ノードの電源オン／オフ比較テストを通じて、このノードがノード間通信にどの程度貢献しているかを直接確認できます。

## 動作の仕組み

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-relay-topology.png" alt="3 ノードトポロジ：Companion1 が Companion2 と Companion3 の間を中継" width={900} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion1 は Repeat Mode を有効にして動作し、Companion2 と Companion3 は通常の Companion モードのままです。</i></p>

連絡先共有とメッセージ転送は、異なる 2 つの問題を解決します：

- **連絡先共有** によって、Companion2 と Companion3 は互いの Identity を取得し、連絡先として保存できます。それ自体には電波カバレッジを生み出す効果はありません。
- **Companion Repeat Mode** によって、中間デバイスである Companion1 が、条件が整ったときにパケット転送に参加できるようになります。

Public Channel は、連絡先情報を交換する前からメッセージを運ぶことができます。ID の交換は、主にその後の宛先指定メッセージングに備えてデバイスを準備するためのものです。

## ハードウェアおよびソフトウェア要件

| 項目 | このテストで使用した内容 |
| --- | --- |
| デバイス | SenseCAP Card Tracker T1000-E × 3 |
| ファームウェア / アプリ | MeshCore firmware V1.17.1、MeshCore App V1.47.0 |
| 役割 | Companion1：Repeat Mode ON、Companion2 / Companion3：Repeat Mode OFF |
| 無線設定 | 869.495 MHz、帯域幅 250 kHz、拡散率 10、符号化率 5、送信電力 22 dBm |

:::caution
上記のパラメータは、このテストで使用した設定にすぎず、この周波数や出力がすべての地域で許可されていることを意味しません。無線パラメータは、各地域の無線規制に従って選択してください。初回セットアップ時は、T1000-E 向けの [Get Started with MeshCore](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/) ガイドに従ってください。
:::

## セットアップ手順

### ステップ 1：デバイスと LoRa パラメータを設定する

3 台すべての T1000-E デバイスを、MeshCore App に接続できる Companion デバイスとして設定し、ファームウェアバージョンと LoRa 設定がすべて同一であることを確認します。この例ではカスタム無線パラメータを使用しています。設定を保存したら、各デバイスが新しい構成で動作していることを確認してください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-radio-settings.png" alt="テストで使用した LoRa 無線設定" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>このテストで使用した無線設定。スクリーンショットは Repeat Mode を無効にして動作している Companion2 のものです。</i></p>

### ステップ 2：中間デバイスで Companion Repeat Mode を有効にする

Companion1 の Radio Settings で **Enable Repeat Mode** をオンにして保存します。Companion2 と Companion3 では Repeat Mode を無効のままにしておきます。Repeat Mode を有効にできる周波数範囲は、ファームウェアと App によって制限されている点に注意してください。設定が拒否された場合は、サポートされており、かつ地域の規制で許可されている構成を使用してください。

### ステップ 3：連絡先関係を確立する

Companion1 に、Companion2 および Companion3 とそれぞれ個別に ID 情報を交換させます。これが完了すると、Companion1 の連絡先リストには両方の端末が表示されますが、この時点では Companion2 と Companion3 は互いを連絡先としてまだ保存していません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-list.png" alt="Companion1 の連絡先リストに表示された Companion2 と Companion3" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>Companion1 の連絡先リストには Companion2 と Companion3 の両方が含まれています。</i></p>

### ステップ 4：Public Channel 経由で連絡先を共有する

Public Channel で、Companion2 と Companion3 の連絡先カードを共有します。受信側デバイスでは **Add Contact** をタップして、相手デバイスの ID を保存します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-sharing.png" alt="Public Channel で共有された連絡先カードと追加確認" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>チャンネル内の連絡先カードと、それが追加されたことを示す確認画面。</i></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-contact-before-after.png" alt="連絡先追加前後の Companion3" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>連絡先を追加する前後の Companion3。</i></p>

### ステップ 5：メッセージ中継を検証する

この配置では、2 台の端末同士は、直接かつ安定しては到達できません。まず Companion1 の電源を切り、Companion2 から Public メッセージを送信します：Companion3 はそれを受信しません。次に Companion1 の電源を入れ直し、同じメッセージテストを繰り返すと、ノード間の Public 通信が復活します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Meshcore/T1000-E/application/meshcore-repeat-result.png" alt="MeshCore App で Heard 1 Repeat と表示されている送信側ステータス" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><i>送信側には「Heard 1 Repeat」と表示されています。メッセージが実際に配信されたかどうかは、常に受信側デバイスの表示によって判断する必要があります。</i></p>

## テスト結果

このテスト環境では、Companion1 が各端末と連絡先関係を確立した後、Public Channel を通じて連絡先カードが共有され、Companion2 と Companion3 は互いの ID 情報を問題なく保存できました。

比較テストでは：

- Companion1 の電源を切った状態では、Companion2 が送信した Public メッセージは Companion3 に受信されませんでした。
- Repeat Mode を有効にした状態で Companion1 の電源を入れ直すと、Companion3 は Companion2 から送信された Public メッセージを受信し、送信側には「Heard 1 Repeat」ステータスが表示されました。

なお、この比較は Repeat Mode のチェックボックスだけを切り替えるのではなく、Companion1 の電源をオフ／オンすることで行いました。この配置において、中間ノードが一時的なリレーとして機能したことが明確に示されています。

## 想定される利用シーン

- **一時的な屋外グループ**：固定 Repeater インフラが利用できない場合に、手元にあるデバイスで通信経路を補完することを試せます。
- **一時的なイベントやフィールド展開**：連絡先をすばやく共有し、分散したメンバーに短期的な通信手段を提供します。
- **MeshCore の学習と実験**：最小限の 3 ノード構成により、ID 共有とパケット転送の違いを分かりやすく確認できます。

## 制約事項と注意点

- Companion Repeat は、専用の固定 Repeater を置き換えるものではなく、それを補完するための機能です。
- 転送性能は、ノード配置、干渉、電源供給、ネットワーク規模に依存します。
- 人が多い公共のメッシュ環境で安易に Repeat Mode を有効にすることは推奨されません。
- 連絡先の追加が成功しても、動作する無線経路が保証されるわけではなく、「Heard 1 Repeat」ステータスも、宛先がメッセージを受信したことを示す確認応答ではありません。

## リソース

- [SenseCAP T1000-E で MeshCore を始める](https://wiki.seeedstudio.com/ja/sensecap_t1000_e_meshcore/)

## 技術サポートと製品ディスカッション

<p style={{textAlign: 'center'}}>
  <a href="https://www.facebook.com/groups/1755190828846458" target="_blank">
    <img 
      src="https://files.seeedstudio.com/wiki/SenseCAP/MeshTrackerX1/BannerQRCode_FBNew.jpg" 
      border="0" 
      style={{width: '90%', maxWidth: '800px', height: 'auto'}} 
    />
  </a>
</p>

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
