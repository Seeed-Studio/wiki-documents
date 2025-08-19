---
description: reComputer J30でのNEQTO Engine for Linuxの始め方
title: reComputer J30でのNEQTO Engine for Linuxの始め方
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/neqto_engine_for_linux_recomputer
last_update:
  date: 05/15/2025
  author: Kazuhiro Ozuchi
---
:::note
この文書は AI によって翻訳されています。内容に不正確な点や改善すべき点がございましたら、文書下部のコメント欄または以下の Issue ページにてご報告ください。  
https://github.com/Seeed-Studio/wiki-documents/issues
:::

## はじめに

NEQTOは、企業がエッジデバイス上でソフトウェアをリモートでインストールおよび設定できるようにする軽量で安全なソフトウェアパッケージです。NEQTOは、ターンキーのプラットフォームコネクタと組み込みのソフトウェアライフサイクル管理を通じて、エンドユーザーに向けたソフトウェアサービスの向上を可能にします。

NEQTOがインストールされたデバイスは、APIまたはNEQTO Consoleを使用して管理できます。このコンソールには、データストレージ、アラート、ウォッチドッグモニタリングのオプションサービスが含まれています。企業は、任意のLinuxデバイスへのほぼ即時のインストールと、オンプレミスまたはクラウドサーバーとのシームレスなデータ統合を通じて、AIoTを実現できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/header-img_2x.png" alt="pir" width={600} height="auto" /></p>

## 前提条件

### 対応ハードウェア

以下のいずれかを選択できます：

<div class="table-center">
  <table align="center">
    <tr>
        <th>reComputer J3011 - NVIDIA Jetson Orin™ Nano 8GB </th>
        <th>reComputer J4011 - NVIDIA Jetson Orin™ NX 8GB</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image1_1_1.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/i/m/image2.png" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J3011-p-5590.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-J4011-p-5585.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ購入 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

- （任意のLinuxマシン）

:::tip
- 対応アーキテクチャ: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)
- 必要なディスク容量: ≥ 32 MB
- 必要なRAM容量: ≥ 4MB（デフォルト設定時）
- ネットワーク通信インターフェース: 物理ネットワークアダプタが搭載されている必要があります。
- モニター、キーボード、マウス（オプション）
:::

## 始め方

### NEQTOアカウントの登録:

- ステップ1. [公式ページ](https://console.neqto.com/register)にアクセスしてNEQTOアカウントを登録します。
- ステップ2. メールアドレスを入力し、パスワードを作成して進みます。
- ステップ3. 受信したアクティベーションメールからアカウントを確認します。

### NEQTO Linuxのインストール

1. NEQTO Consoleで`Manage API Keys for Linux-based Device`を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eee22eccae06004c6d9459.png" alt="pir" width={20} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65effd1accae06004c6d94a0.png" alt="pir" width={600} height="auto" /></p>

2. `CREATE API KEY`をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff89ccae06004c6d94a6.png" alt="pir" width={600} height="auto" /></p>

すると、APIキーが表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65efff33ccae06004c6d94a5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. curlまたはwgetを使用して`NEQTO Engine Linux Installer`をダウンロードします。

    今回はwgetコマンドを使用します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eeeaa3ccae06004c6d945d.png" alt="pir" width={600} height="auto" /></p>

`Installer of NEQTO Engine for Linux`の`ダウンロードリンク`をコピーし、それを"wget␣"の後に貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00259ccae06004c6d94a8.png" alt="pir" width={600} height="auto" /></p>

インストーラーが正常にダウンロードされます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f002fbccae06004c6d94aa.png" alt="pir" width={600} height="auto" /></p>

4. ダウンロードしたインストーラー（`neqto-daemon-install.latest.sh`）の実行権限をchmodコマンドで変更し、NEQTO Engine for Linuxのインストールを実行します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00369ccae06004c6d94ab.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

5. NEQTO Consoleの`API Keys for NEQTO Engine for Linux`から`APIキー`をコピーし、それを`sudo . /neqto-daemon-install.sh␣-k␣`の後に貼り付けます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00476ccae06004c6d94ae.png" alt="pir" width={600} height="auto" /></p>

6. パスワードを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00529ccae06004c6d94af.png" alt="pir" width={600} height="auto" /></p>

7. 実行直後に重要な注意事項が表示されます。内容を確認し、同意する場合は「agree」と入力してください。その後、デバイス登録が実行され、ソフトウェアのインストールが続行されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f005c1ccae06004c6d94b1.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

8. 最終ステータス `Installation completed successfully!` が表示されるまでお待ちください。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00657ccae06004c6d94b3.png" alt="pir" width={600} height="auto" /></p>

NEQTO コンソールでデバイスが登録されたことを確認します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00722ccae06004c6d94b5.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

### Hello World

1. `GROUPS` の下にある `ADD GROUP` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7b9ccae06004c6d947b.png" alt="pir" width={600} height="auto" /></p>

2. `Name` に `reComputer J30` を入力し、`SAVE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65eef7d6ccae06004c6d947c.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f007ddccae06004c6d94b6.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

3. 作成した `reComputer J30` を選択し、`SCRIPTS` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0392accae06004c6d9518.png" alt="pir" width={600} height="auto" /></p>

4. `ADD SCRIPT` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0379fccae06004c6d9512.png" alt="pir" width={600} height="auto" /></p>

5. `Name` フィールドに `Hello World` を入力し、`SAVE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03861ccae06004c6d9515.png" alt="pir" width={600} height="auto" /></p>

6. NEQTO コンソールのスクリプトエディタに [サンプルコード](https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code) をコピー＆ペーストし、`Save` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f036f4ccae06004c6d950f.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

7. `TEMPLATES` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f035d5ccae06004c6d950d.png" alt="pir" width={600} height="auto" /></p>

その後、`ADD TEMPLATE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03451ccae06004c6d950a.png" alt="pir" width={600} height="auto" /></p>

8. `DEVICE INFORMATION` を以下のように設定します。

    - `Name` フィールドに `reComputer J30 Template` を入力します。

    - `Firmware Type` フィールドに `Linux-based device` を選択します。

    - `Firmware Version` フィールドに最新バージョンを選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03337ccae06004c6d9505.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

9. `OPTIONS` で `Script` フィールドに `Hello World` を選択し、`SAVE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03261ccae06004c6d9501.png" alt="pir" width={600} height="auto" /></p>

10. `NODES` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f0313accae06004c6d94fe.png" alt="pir" width={600} height="auto" /></p>

その後、`ADD NODE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f03019ccae06004c6d94fb.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

11. `META DATA` を以下のように設定します。

    - `Name` フィールドに `reComputer J30` を設定します。

    - `Template` フィールドに `reComputer J30 Template` を設定します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02f56ccae06004c6d94f8.png" alt="pir" width={600} height="auto" /></p>

12. `DEVICE INFORMATION` で登録したデバイスを選択し、`SAVE` をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02e10ccae06004c6d94f5.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02d0dccae06004c6d94f2.png" alt="pir" width={600} height="auto" /></p>

13. reComputer J30 のターミナルで `tail -F /tmp/neqto/log/neqto.log` を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00ac6ccae06004c6d94c8.png" alt="pir" width={600} height="auto" /></p>

<!--<div style="page-break-before:always"></div>-->

14. NEQTO Consoleで`Reload Script`を実行した後、reComputer J30のターミナルに`Hello World!!!`が表示されるのを確認できます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f02b89ccae06004c6d94ef.png" alt="pir" width={600} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_recomputer/65f00bf7ccae06004c6d94cd.png" alt="pir" width={600} height="auto" /></p>

## その他 / トラブルシューティング

- [NEQTO サポート](https://support.neqto.com/hc/en-us)
- [サポートガイドライン](https://docs.neqto.com/docs/en/neqto/support-guidelines)

## リソース

- [NEQTO リソースセンター](https://docs.neqto.com/docs/en/linux/software/requirements)

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>