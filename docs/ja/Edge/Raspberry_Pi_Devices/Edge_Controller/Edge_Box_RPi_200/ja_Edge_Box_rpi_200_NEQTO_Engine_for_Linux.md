---
description: EdgeBox-RPI-200でのNEQTO Engine for Linuxの開始方法
title: EdgeBox-RPI-200でのNEQTO Engine for Linuxの開始方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/NEQTO_Engine_for_Linux_EdgeBox-RPI-200
last_update:
  date: 04/25/2024
  author: Kazuhiro Ozuchi
---

## はじめに

NEQTOは、企業がエッジデバイス上でソフトウェアをリモートでインストールおよび設定できる軽量で安全なソフトウェアパッケージです。NEQTOは、ターンキープラットフォームコネクタと組み込みソフトウェアライフサイクル管理を通じて、企業がエンドユーザーに改善されたソフトウェアサービスを提供することを可能にします。

NEQTOがインストールされたデバイスは、APIまたはすぐに使用できるNEQTO Consoleを通じて管理できます。これには、データストレージ、アラート、ウォッチドッグ監視のオプションサービスが含まれています。企業は、任意のLinuxデバイスでのほぼ瞬時のインストールと、オンプレミスまたはクラウドサーバーとのシームレスなデータ統合により、AIoTを有効にできます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## 前提条件

### サポートされているハードウェア

<div class="table-center">
 <table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">EdgeBox-RPI-200</th>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first.jpg" style={{width:300, height:'auto'}}/></div></td>
  </tr>
    <tr class="table-trnobg"></tr>
  <tr class="table-trnobg">
   <td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入取 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>

</div>

- (任意のLinuxマシン)

:::tip

- サポートされているアーキテクチャ: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- 必要なディスク容量: ≥ 32 MB
- 必要なRAM容量: ≥ 4MB (デフォルト設定時)
- ネットワーク通信インターフェース: 物理ネットワークアダプターが搭載されている必要があります。
- モニター、キーボード、マウス (オプション)

:::

## はじめに

### ハードウェア接続

Edge Box RPI-200 はじめに (https://wiki.seeedstudio.com/Edge_Box_introduction/) を参照してください

### NEQTOアカウントのサインアップ

- ステップ 1. このページ (https://console.neqto.com/register) にアクセスしてNEQTOアカウントにサインアップします
- ステップ 2. メールアドレスを入力し、パスワードを作成して進みます
- ステップ 3. 受信した認証メールからアカウントを確認します

### NEQTO Linuxのインストール

1. NEQTOコンソールで

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

から `Manage API Keys for Linux-based Device` を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. `CREATE API KEY` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

するとAPI Keyが表示されます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

3. curlまたはwgetで `NEQTO Engine Linux Installer` をダウンロードします。

    今回はwgetコマンドを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

`Installer of NEQTO Engine for Linux` の `Download link` をコピーして、"wget " の後に貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be384ccae06004c6d972d.png" alt="pir" width={600} height="auto" /></p>

インストーラーのダウンロードが正常に完了しました

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be2f5ccae06004c6d9725.png" alt="pir" width={600} height="auto" /></p>

4. NEQTO Engine for Linuxのインストールを実行する前に、chmodコマンドでダウンロードしたインストーラー（`neqto-daemon-install.latest.sh`）の実行権限を変更します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be308ccae06004c6d9726.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. NEQTOコンソールの `API Keys for NEQTO Engine for Linux` から `API Key` をコピーして、`sudo ./neqto-daemon-install.latest.sh -k` の後に貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be313ccae06004c6d9727.png" alt="pir" width={600} height="auto" /></p>

6. 実行直後に重要な注意事項が表示されます。確認して同意する場合は「agree」と入力してください。その後、デバイス登録が実行され、ソフトウェアのインストールが続行されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be31dccae06004c6d9728.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 最終ステータス `Installation completed successfully!` が表示されるまでお待ちください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be329ccae06004c6d9729.png" alt="pir" width={600} height="auto" /></p>

NEQTOコンソールでデバイスが登録されたことの確認

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc577ccae06004c6d9713.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. `GROUPS` の下にある `ADD GROUP` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9ee5ccae06004c6d96bf.png" alt="pir" width={600} height="auto" /></p>

2. `Name` に `EdgeBox-RPI-200` と入力し、`SAVE` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9f21ccae06004c6d96c1.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660a9fa0ccae06004c6d96c2.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 作成した `EdgeBox-RPI-200` を選択し、`SCRIPTS` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bc9b3ccae06004c6d9714.png" alt="pir" width={600} height="auto" /></p>

4. `ADD SCRIPT` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd119ccae06004c6d9715.png" alt="pir" width={600} height="auto" /></p>

5. `Name` フィールドに `Hello World` と入力し、`SAVE` をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd134ccae06004c6d9716.png" alt="pir" width={600} height="auto" /></p>

6. `Getting Started` から[サンプルコード](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code)をNEQTO Consoleスクリプトエディターにコピー＆ペーストし、`Save`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd142ccae06004c6d9717.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. `TEMPLATES`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd156ccae06004c6d9718.png" alt="pir" width={600} height="auto" /></p>

次に`ADD TEMPLATE`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd166ccae06004c6d9719.png" alt="pir" width={600} height="auto" /></p>

8. `DEVICE INFORMATION`を以下のように設定します

    - `Name`フィールドに`EdgeBox-RPI-200 Template`を入力します

    - `Firmware Type`フィールドで`Linux-based device`を選択します

    - `Firmware Version`フィールドで最新バージョンを選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd177ccae06004c6d971a.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. `OPTIONS`で、`Script`フィールドの`Hello World`を選択し、`SAVE`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd186ccae06004c6d971b.png" alt="pir" width={600} height="auto" /></p>

10. `NODES`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd195ccae06004c6d971c.png" alt="pir" width={600} height="auto" /></p>

次に`ADD NODE`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd19eccae06004c6d971d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. `META DATA`を以下のように設定します

    - `Name`フィールドを`EdgeBox-RPI-200`に設定します

    - `Template`フィールドを`EdgeBox-RPI-200 Template`に設定します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1adccae06004c6d971e.png" alt="pir" width={600} height="auto" /></p>

12. `DEVICE INFORMATION`で先ほど登録したデバイスを選択し、`SAVE`をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1baccae06004c6d971f.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1c8ccae06004c6d9720.png" alt="pir" width={600} height="auto" /></p>

13. EdgeBox-RPI-200のターミナルで`tail -F /tmp/neqto/log/neqto.log`と入力します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660be347ccae06004c6d972b.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. NEQTO Consoleで`Reload Script`を実行した後、EdgeBox-RPI-200のターミナルで`Hello World!!!`が表示されることを確認できます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660bd1eaccae06004c6d9721.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_EdgeBox-RPI-200/660aad1accae06004c6d96fb.png" alt="pir" width={600} height="auto" /></p>

## その他 / トラブルシューティング

- [NEQTO Support](https://support.neqto.com/hc/en-us)
- [Support Guidelines](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## リソース

- [NEQTO Resource Center](https://docs.neqto.com/docs/en/linux/software/requirements)

## 技術サポート & 製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちは、お客様の製品体験が可能な限りスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
