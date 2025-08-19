---
description: reTerminalでのLinux向けNEQTO Engineの始め方
title: reTerminalでのLinux向けNEQTO Engineの始め方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/neqto_engine_for_linux_reTerminal
last_update:
  date: 05/15/2025
  author: Kazuhiro Ozuchi
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

NEQTOは、企業がエッジデバイスにソフトウェアをリモートでインストールおよび構成できる軽量で安全なソフトウェアパッケージです。NEQTOは、ターンキーのプラットフォームコネクタと組み込みのソフトウェアライフサイクル管理を通じて、エンドユーザーに向けたソフトウェアサービスを向上させることを可能にします。

NEQTOがインストールされたデバイスは、APIまたはすぐに使用可能なNEQTO Consoleを通じて管理することができ、データストレージ、アラート、ウォッチドッグモニタリングのオプションサービスを含みます。企業は、ほぼ瞬時に任意のLinuxデバイスにインストールし、オンプレミスまたはクラウドサーバーとのシームレスなデータ統合を実現することでAIoTを有効化できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## 前提条件

### 対応ハードウェア

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reTerminal</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

- (任意のLinuxマシン)

:::tip
- 対応アーキテクチャ: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- 必要なディスク容量: ≥ 32 MB
- 必要なRAM容量: ≥ 4MB (デフォルト設定の場合)
- ネットワーク通信インターフェース: 物理ネットワークアダプタが搭載されている必要があります。
- モニター、キーボード、マウス (オプション)
:::

## 始め方
### ハードウェア接続
reTerminalの始め方 (https://wiki.seeedstudio.com/ja/reTerminal/) を参照してください。

### NEQTOアカウントの登録:
- ステップ1. このページ (https://console.neqto.com/register) にアクセスしてNEQTOアカウントを登録します。
- ステップ2. メールアドレスを入力し、パスワードを作成して続行します。
- ステップ3. 受信したアクティベーションメールからアカウントを確認します。

### NEQTO Linuxのインストール

1. NEQTO Consoleで`Manage API Keys for Linux-based Device`を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. `CREATE API KEY`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

するとAPIキーが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

3. curlまたはwgetを使用して`NEQTO Engine Linux Installer`をダウンロードします。

    今回はwgetコマンドを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

`Installer of NEQTO Engine for Linux`の`ダウンロードリンク`をコピーし、"wget "の後に貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbce4ccae06004c6d9812.png" alt="pir" width={600} height="auto" /></p>

インストーラーが正常にダウンロードされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd0cccae06004c6d9813.png" alt="pir" width={600} height="auto" /></p>

4. ダウンロードしたインストーラー (`neqto-daemon-install.latest.sh`) の実行権限をchmodコマンドで変更し、NEQTO Engine for Linuxのインストールを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd27ccae06004c6d9814.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. NEQTO Consoleの`API Keys for NEQTO Engine for Linux`から`APIキー`をコピーし、`sudo ./neqto-daemon-install.latest.sh -k `の後に貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd4dccae06004c6d9815.png" alt="pir" width={600} height="auto" /></p>

6. 実行直後に重要な注意事項が表示されます。内容を確認し、同意する場合は「agree」と入力してください。その後、デバイス登録が実行され、ソフトウェアのインストールが続行されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd63ccae06004c6d9816.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. 最終ステータス`Installation completed successfully!`が表示されるまでお待ちください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd7accae06004c6d9817.png" alt="pir" width={600} height="auto" /></p>

NEQTOコンソールでデバイスが登録されたことの確認

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd9cccae06004c6d9819.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. `GROUPS`の下にある`ADD GROUP`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9d61ccae06004c6d97b9.png" alt="pir" width={600} height="auto" /></p>

2. `Name`に`reTerminal`を入力し、`SAVE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9e99ccae06004c6d97bd.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9ebbccae06004c6d97bf.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 作成した`reTerminal`を選択し、`SCRIPTS`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbde5ccae06004c6d981a.png" alt="pir" width={600} height="auto" /></p>

4. `ADD SCRIPT`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe00ccae06004c6d981b.png" alt="pir" width={600} height="auto" /></p>

5. `Name`フィールドに`Hello World`を入力し、`SAVE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe19ccae06004c6d981c.png" alt="pir" width={600} height="auto" /></p>

6. NEQTOコンソールのスクリプトエディタに[Getting Started](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code)のサンプルコードをコピー＆ペーストし、`Save`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe2bccae06004c6d981d.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. `TEMPLATES`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe46ccae06004c6d981e.png" alt="pir" width={600} height="auto" /></p>

その後、`ADD TEMPLATE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe5dccae06004c6d981f.png" alt="pir" width={600} height="auto" /></p>

8. `DEVICE INFORMATION`を以下のように設定します。

    - `Name`フィールドに`reTerminal Template`を入力します。

    - `Firmware Type`フィールドに`Linux-based device`を選択します。

    - `Firmware Version`フィールドに最新バージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe7cccae06004c6d9820.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. `OPTIONS`で`Script`フィールドに`Hello World`を選択し、`SAVE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe98ccae06004c6d9821.png" alt="pir" width={600} height="auto" /></p>

10. `NODES`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbea7ccae06004c6d9823.png" alt="pir" width={600} height="auto" /></p>

その後、`ADD NODE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbeb4ccae06004c6d9824.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. `META DATA`を以下のように設定します。

    - `Name`フィールドに`reTerminal`を設定します。

    - `Template`フィールドに`reTerminal Template`を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbec5ccae06004c6d9825.png" alt="pir" width={600} height="auto" /></p>

12. `DEVICE INFORMATION`で登録したデバイスを選択し、`SAVE`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca55ccae06004c6d982a.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca62ccae06004c6d982b.png" alt="pir" width={600} height="auto" /></p>

13. reTerminalのターミナルで`tail -F /tmp/neqto/log/neqto.log`を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbef2ccae06004c6d9826.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. NEQTOコンソールで`Reload Script`を実行した後、reTerminalのターミナルで`Hello World!!!`が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbf0dccae06004c6d9828.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fa3e0ccae06004c6d97e8.png" alt="pir" width={600} height="auto" /></p>

## さらに詳しく / トラブルシューティング

- [NEQTO サポート](https://support.neqto.com/hc/ja)
- [サポートガイドライン](https://docs.neqto.com/docs/ja/neqto/support-guidelines)

## リソース

- [NEQTO リソースセンター](https://docs.neqto.com/docs/ja/linux/software/requirements)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しております。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>