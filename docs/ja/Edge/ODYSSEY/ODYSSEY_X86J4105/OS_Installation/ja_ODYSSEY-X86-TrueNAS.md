---
description: ODYSSEY - X86J4105
title: TrueNAS インストール
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/ODYSSEY-X86-TrueNAS
last_update:
  date: 05/15/2025
  author: w0x7ce

---


<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/1.png" alt="pir" width={1000} height="auto" /></p>

このガイドでは、ODYSSEY-X86 を TrueNAS をインストールしてネットワーク接続ストレージ (NAS) に変える方法を説明します。それでは始めましょう！

## TrueNAS とは？

[TrueNAS](https://www.truenas.com) は、iXsystems によって開発された無料かつオープンソースのネットワーク接続ストレージ (NAS) オペレーティングシステムです。FreeBSD と Linux をベースにしており、OpenZFS ファイルシステムを使用しています。ほぼすべての X86 ベースのハードウェアで動作可能です。

TrueNAS にはいくつかのエディションがあり、TrueNAS CORE (以前は FreeNAS として知られていたもの)、TrueNAS Enterprise (商用エディション)、TrueNAS SCALE (Linux エディション) が含まれます。それらの違いについて詳しく知りたい場合は [こちらのリンク](https://www.truenas.com/compare-editions) を訪問してください。

TrueNAS は、Windows、macOS、Linux など複数のオペレーティングシステムを実行するクライアントをサポートしています。また、SMB、AFP、NFS、iSCSI、SSH、rsync、FTP/TFTP プロトコルを使用して XenServer や VMware などのさまざまな仮想化ホストを提供します。さらに、フルディスク暗号化やサードパーティソフトウェア用のプラグインアーキテクチャなどの高度な機能も含まれています。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/2.png" alt="pir" width={400} height="auto" /></p>

## 必要条件

- [ODYSSEY-X86](https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html)
- USB フラッシュドライブ (>1GB)
- イーサネットケーブルと空きポートがあるルーター
- 外部ストレージメディア (ODYSSEY-X86 に内蔵された eMMC を使用する場合、それを利用することも可能)

  - NVMe SSD または
  - SATA SSD または
  - SATA HDD または
  - Micro-SD カード または
  - USB フラッシュドライブ (>1GB)

## 始めるにあたって

それでは、ODYSSEY-X86 に TrueNAS をインストールする手順を見ていきましょう。ここでは TrueNAS Core を例にしてインストール手順を説明します。

### TrueNAS イメージを USB フラッシュドライブに書き込む

- **ステップ 1.** [こちらのリンク](https://www.truenas.com/download-truenas-core) を訪問して TrueNAS Core のダウンロードページを開きます

**注意:** TrueNAS SCALE をダウンロードしたい場合は [こちらのリンク](https://www.truenas.com/download-truenas-scale) を訪問してください

- **ステップ 2.** TrueNAS ニュースレターに登録するか、そのステップをスキップすることができます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/3.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3.** **Stable** バージョンをダウンロードします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/4.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** [こちらのリンク](https://www.balena.io/etcher) を訪問して OS に応じた **BalenaEtcher** をダウンロードしてインストールし、開きます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/3.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** USB フラッシュドライブを PC に接続し、**Flash from file** をクリックして、先ほどダウンロードしたファイルを選択します。その後、**Select target** をクリックして接続された USB フラッシュドライブを選択し、**Flash** をクリックします

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/5.jpg" alt="pir" width={1000} height="auto" /></p>

### フラッシュドライブから TrueNAS を起動し、外部ドライブにインストールする

- **ステップ 1.** TrueNAS イメージを書き込んだ USB フラッシュドライブを ODYSSEY-X86 の USB ポートのいずれかに接続します

- **ステップ 2.** TrueNAS をインストールするための外部ストレージドライブを接続します。ODYSSEY-X86 には以下のようなストレージオプションがあります：

  - NVMe SSD
  - SATA SSD
  - SATA HDD
  - Micro-SD カード
  - USB フラッシュドライブ (>1GB)

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png" alt="pir" width={650} height="auto" /></p>

**注意:** 信頼性のために TrueNAS をインストールするには M.2 SSD を選択し、残りの M.2 および SATA ポートをファイルストレージ用の他のドライブに接続することをお勧めします

- **ステップ 3.** イーサネットケーブルの片方を ODYSSEY-X86 のイーサネットポートのいずれかに接続し、もう片方をルーターに接続します

- **ステップ 4.** ODYSSEY-X86 の電源を入れ、**DELETE** キーを連続して押して BIOS に入ります

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/5.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** **Boot** タブに移動し、**Boot Option #1** を選択して **UEFI: USB, Partition 2** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/6.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 6.** **Save & Exit** タブに移動し、**Save Changes and Reset** を選択してポップアップウィンドウで **Yes** を選択します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/OPNsense/8.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 7.** ODYSSEY-X86 が TrueNAS に正常に起動したら、デフォルトでハイライトされている **Install/Upgrade** オプションを進めるために **ENTER** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/7.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 8.** **矢印キー** を使用してナビゲートし、**SPACE** を押して TrueNAS をインストールするドライブを選択します。その後、**ENTER** を押して次のステップに進みます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/8.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 9.** 再度 **ENTER** を押して進みます

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/9.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 10.** 次に **root パスワード** を変更するよう求められます。これは **推奨** されます。パスワードを入力して **ENTER** を押します

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/10.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 11.** ODYSSEY-X86 は UEFI ブートをサポートしているため、**UEFI 経由でブート**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/11.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 12.** パフォーマンス向上のために**スワップ領域を作成**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/12.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 13.** TrueNAS のインストールが完了したら、**ENTER** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/13.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 14.** **システムを再起動**を選択し、再度 **ENTER** を押します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/14.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 15.** システムが再度起動を開始したら、USB フラッシュドライブを取り外し、BIOS に入り、接続された外部ドライブをブートデバイスとして選択して再度起動します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/15.png" alt="pir" width={1000} height="auto" /></p>

これで ODYSSEY-X86 は外部ドライブから TrueNAS を起動し、正常に起動した場合は以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/16.png" alt="pir" width={1000} height="auto" /></p>

### TrueNAS のセットアップ

次に TrueNAS ソフトウェアをセットアップします。

#### GUI にアクセス

- **ステップ 1.** ブラウザで表示された IP アドレスを入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/17.jpg" alt="pir" width={500} height="auto" /></p>

- **ステップ 2.** ユーザー名を **root**、パスワードを以前に設定したものを入力して **ログイン** します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/18.png" alt="pir" width={1000} height="auto" /></p>

最終的に TrueNAS ダッシュボード GUI にアクセスできるようになります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/19.png" alt="pir" width={1000} height="auto" /></p>

ここでは多くの設定を構成したり、多くの機能を探索することができます。詳細については [TrueNAS 公式ドキュメント](https://www.truenas.com/docs) を参照してください。

#### ストレージプールのセットアップ

このセクションでは、接続された HDD を使用してストレージプールをセットアップする方法を説明します。

- **ステップ 1.** まずストレージプールを作成する必要があります。`Storage > Pools` に移動し、**ADD** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/20.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** **CREATE POOL** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/21.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3.** プールの**名前**を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/22.png" alt="pir" width={550} height="auto" /></p>

- **ステップ 4.** 利用可能なすべてのディスクを選択し、ディスクを追加するために**右向き矢印**をクリックします。ここでは 1 台の HDD のみ接続していますが、複数の HDD を接続することも可能で、それらはすべてここに表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/23.png" alt="pir" width={1000} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/24.png" alt="pir" width={1000} height="auto" /></p>

1 台の HDD のみ接続しているため、**ストライプ**構成のみが可能です。ただし、複数のディスクが接続されている場合は、データ冗長性を重視した**RAID**オプションが利用可能になります。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/25.png" alt="pir" width={500} height="auto" /></p>

- **ステップ 5.** **データ損失**に関する警告（1 台のドライブの場合）を無視して **Force** をチェックし、**Confirm** をクリックして最後に **CONTINUE** をクリックします。複数のドライブが接続されている場合、この警告は表示されません。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/26.jpg" alt="pir" width={600} height="auto" /></p>

- **ステップ 6.** **CREATE** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/27.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 7.** **Confirm** をチェックし、**CREATE POOL** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/28.jpg" alt="pir" width={350} height="auto" /></p>

プールが作成されると、以下の出力が表示されます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/29.png" alt="pir" width={1000} height="auto" /></p>

#### ユーザーアカウントの作成

次に、新しいユーザーアカウントを作成し、そのユーザーアカウントをデータセットに関連付けます。

- **ステップ 1.** `Accounts > Users` に移動し、**ADD** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/30.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** **フルネーム**、**ユーザー名**、**パスワード**を入力します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/31.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3.** **Microsoft Account** をチェックし、**SUBMIT** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/32.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 4.** 再度 **Pools** に移動し、作成したプールの横にある **3点メニュー** をクリックして **Add Dataset** を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/33.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 5.** データセットの名前を入力し、**SUBMIT** をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/34.png" alt="pir" width={450} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/35.png" alt="pir" width={450} height="auto" /></p>

- **ステップ 6.** 新しく作成したデータセットの横にある**3点メニュー**をクリックし、**Edit Permissions**（権限を編集）を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/36.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 7.** ドロップダウンメニューから、先ほど作成したユーザー名を**User**（ユーザー）および**Group**（グループ）として選択し、**Apply User**（ユーザーを適用）と**Apply Group**（グループを適用）にチェックを入れ、最後に**SAVE**（保存）をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/37.png" alt="pir" width={1000} height="auto" /></p>

#### SMB共有を設定してPCからアクセスする

次に、このストレージスペースをPCからアクセス可能にする方法を説明します。

- **ステップ 1.** `Sharing > Windows Shares (SMB)`に移動し、**ADD**（追加）をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/38.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 2.** 最後に作成したデータセットを選択し、**SUBMIT**（送信）をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/39.png" alt="pir" width={1000} height="auto" /></p>

- **ステップ 3.** ポップアップウィンドウで**CONFIGURE NOW**（今すぐ設定）をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/40.png" alt="pir" width={350} height="auto" /></p>

- **ステップ 4.** **RESTRICTED**（制限付き）を選択し、**CONTINUE**（続行）をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/41.png" alt="pir" width={350} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/42.png" alt="pir" width={350} height="auto" /></p>

- **ステップ 5.** **SAVE**（保存）をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/43.png" alt="pir" width={1000} height="auto" /></p>

これでSMB共有の設定が完了しました。

- **ステップ 6.** PCの**ファイルエクスプローラー**を開き、**3点メニュー**から**ネットワークドライブの割り当て**を選択します。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/44.jpg" alt="pir" width={1000} height="auto" /></p>

- **ステップ 7.** **フォルダー**の横に以下を入力します。

```sh
\\<x86のIPアドレス>\<データセット名>
```

その下の2つのチェックボックスにチェックを入れ、**完了**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/45.png" alt="pir" width={600} height="auto" /></p>

- **ステップ 8.** 新しいアカウントを作成した際に指定したユーザー名とパスワードを入力し、**資格情報を記憶する**にチェックを入れて**OK**をクリックします。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/46.png" alt="pir" width={450} height="auto" /></p>

これで、この共有ドライブにPCからアクセスできるようになります。PCからこのドライブに直接ファイルをコピーすることができます。

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/TrueNAS/47.png" alt="pir" width={400} height="auto" /></p>

## リソース

- **[ウェブページ]** [TrueNAS公式ドキュメント](https://www.truenas.com/docs)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに合わせた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>