---
description: Seeed Fusion PCB & PCBA サービスガイド
title: Seeed Fusion PCB & PCBA サービスガイド
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_PCB
last_update:
  date: 9/16/2026
  author: shuxu hu
createdAt: '2023-02-17'
updatedAt: '2025-09-18'
url: https://wiki.seeedstudio.com/ja/Service_for_Fusion_PCB/
---

このガイドでは、PCB 製造および PCB 実装について、対応可能な仕様、製造データ、発注方法、設計要件、エンジニアリングレビュー、テスト、納期計画を説明します。

## Fusion PCB & PCBA について

Seeed Fusion は、試作・小ロットから量産まで、ベア PCB 製造と部品調達を含むターンキー PCBA サービスを提供します。ベア基板のみを発注することも、同じプロジェクトで実装およびテスト要件を追加することもできます。詳細は [Fusion 注文ページ](https://www.seeedstudio.com/fusion_pcb.html)からご注文ください。

### Fusion PCB & PCBA の注文手順

1. [Fusion PCB/PCBA 注文ページ](https://www.seeedstudio.com/fusion_pcb.html)を開きます。

2. Gerber アーカイブをアップロードし、基板サイズ、数量、および製造オプションを選択します。

3. ベア PCB の場合は見積もりを確認し、チェックアウトに進みます。実装を行う場合は **PCB Assembly** を有効にし、BOM をアップロードし、PCBA 数量を入力して、関連する実装またはテスト用ファイルを追加します。

4. 部品マッチングと価格の内訳を確認し、チェックアウトと支払いを完了します。

PCB の注文は 5 枚から、PCB 実装の注文は 1 枚から対応します。価格は、選択した PCB 仕様と数量に加え、PCBA 注文における部品および実装要件によって決まります。

### Gerber ファイル要件

Gerber ファイルとドリルファイルを 1 つのフォルダにまとめ、ZIP または RAR 形式（最大 20 MB）でアップロードしてください。下表は、設計内の各レイヤーでよく使われるファイル名の例です。

| ファイル | ファイル名の例 |
| --- | --- |
| 表 / 裏銅箔 | pcbname.GTL / pcbname.GBL |
| 表 / 裏ソルダーレジスト | pcbname.GTS / pcbname.GBS |
| 表 / 裏シルク | pcbname.GTO / pcbname.GBO |
| 基板外形 | pcbname.GML または pcbname.GKO |
| ドリルファイル | pcbname.TXT |
| 内層銅箔 | pcbname.GL2, pcbname.GL3 など |

多層基板の場合は、対応する内層銅箔ファイルを含めてください。Gerber ファイルには RS-274X、ドリルファイルには Excellon を使用してください。完全な基板外形が必須であり、可能であれば専用のメカニカルレイヤーに記載してください。

注文前に、[注文ページ](https://www.seeedstudio.com/fusion_pcb.html)の Gerber Viewer を使用して、エクスポートしたファイルをプレビューしてください。基板外形と各レイヤーが、意図した設計どおりであることを確認します。

### PCBA 注文に必要な追加ファイル

#### 部品表 (BOM)

Gerber ファイルと BOM は、PCBA 見積もりおよびファイルレビューを開始するための基本ファイルです。Fusion テンプレートを使用し、XLS、XLSX、または CSV 形式で BOM を作成してください。

| 項目 | 記載内容 |
| --- | --- |
| Designator | R1、R2、C1 などの部品リファレンスデザインators |
| MPN / Seeed SKU | 完全なメーカー型番または Seeed 部品 SKU |
| Quantity | PCBA 1 台あたりに必要な数量。パネル化設計の場合は、パネル全体に対する数量を算出してください。 |
| Part Link | 任意。製品ページまたはデータシートへのリンク |

Fusion が購入および実装すべき部品のみを記載してください。PCB 上に表示されていても BOM に記載されていない部品は、デフォルトでは購入も実装もされません。テンプレートおよび書式ルールについては、[BOM 作成ガイド](https://support.seeed.cc/portal/en/kb/articles/how-do-i-prepare-the-bill-of-materials-bom-file-for-seeed-fusion-pcba-orders)を参照してください。

#### 実装用ファイル

以下の実装情報は、Gerber ファイルおよび BOM と同じ設計リビジョンから作成してください。

| ファイル | 主な目的 |
| --- | --- |
| 実装図 | 部品の配置位置、リファレンスデザインator、極性、向き、およびスルーホール挿入要件を示します。 |
| CPL / Pick-and-Place ファイル | SMT 実装用に、リファレンスデザインator、X/Y 座標、回転角度、および実装面を提供します。 |
| プログラミングおよびテストファイル | 注文にファームウェア書き込みまたは機能テストが含まれる場合に必要です。ファームウェアバージョン、操作手順、期待される結果、および合否判定基準を含めてください。 |

両面実装図が必要な場合は、両面分を含めてください。スルーホールのみの実装では、SMT 実装座標は不要です。[実装図作成ガイド](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-assembly-drawings-fabrication-files-for-seeed-fusion-pcba-orders)および [Pick-and-Place ファイルガイド](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-pick-and-place-xy-files-for-seeed-fusion-pcba-orders)も参照してください。

### PCB 設計のヒント

パネル化とは、複数の基板を 1 つの製造パネルにまとめることです。Fusion PCB は、同一設計を繰り返し配置したパネルおよび異なる設計を含むパネルの両方に対応しています。

- **基板外形とスロット:** 完全な基板外形を含め、V カットラインやミリングスロットは外形レイヤー (GKO/GML) 上に明示してください。

- **V カットレイアウト:** V カットラインは直線でなければならず、パネルの一端から反対側の端まで通っている必要があります。パネルの途中で止めることはできません。

- **シルク表示:** シルク線だけではカット位置を指定したことにはなりません。外形レイヤーにカット指示がない場合、パネルは 1 枚の完全な基板として納品されます。

レイアウト例および発注要件については、[PCB パネル化ルール](https://support.seeed.cc/portal/en/kb/articles/what-are-the-pcb-panelization-rules)を参照してください。

PCB 寸法は、基板外形全体を囲む最小の長方形で測定してください。パネル化注文の場合は、パネル全体の外形寸法を使用します。

ファイルをアップロードした後、注文ページで自動検出された寸法が設計どおりか確認してください。自動測定がない場合や不正確な場合は、手動で修正してください。

## Fusion PCB の対応仕様

#### 基板タイプと材料

Fusion は、さまざまな電気的・機械的要件に対応するため、リジッド、フレキシブル、およびメタルベース PCB をサポートしています。

| タイプ | オプションと代表的な用途 |
| --- | --- |
| FR-4 | 汎用リジッド基板。TG130、TG150、TG170 材料。 |
| アルミベース PCB | LED 照明や電力エレクトロニクスなどの用途向けメタルベース基板。 |
| フレキシブル PCB | コンパクトなレイアウトや接続用のフレキシブル回路。 |
| リジッドフレックス PCB | リジッド部とフレキシブル部を一体化した基板で、Advanced PCB にて対応。 |
| 高周波 PCB | RF および高周波設計向けの Rogers RO4003C および RO4350B 材料。 |
| 銅ベース PCB | 厳しい放熱が求められる高電力用途向けメタルベース基板。 |

HDI、多層数基板、リジッドフレックス、高周波設計、その他の特殊要件には、[Advanced PCB サービス](https://www.seeedstudio.com/fusion-advanced-pcb.html)をご利用ください。これらの材料の違いについては、[PCB 材料ガイド](https://www.seeedstudio.com/blog/2026/08/07/seeed-fusion-what-pcb-base-materials-does-seeed-fusion-offer-and-which-one-should-you-choose/)で解説しています。

#### 一般的な FR-4 製造仕様

以下の仕様は FR-4 基板に適用されます。上記のすべての基板タイプをまとめた仕様ではありません。

| 項目 | 仕様 |
| --- | --- |
| 基板寸法 | 10 × 10 mm ～ 500 × 500 mm。寸法公差：±0.2 mm。V カットパネルには追加のサイズ制限があります。 |
| 2 層基板厚 | 0.6、0.8、1.0、1.2、1.6、2.0、2.5、3.0 mm |
| 4 層基板厚 | 0.8、1.0、1.2、1.6、2.0、2.5、3.0 mm |
| 基板厚公差 | 厚さ 1.0 mm 以下：±0.1 mm、1.0 mm 超：±10% |
| 銅箔厚オプション | 1 oz、2 oz、3 oz |
| 最小パターン幅 / 間隔 | 1 oz：4/4 mil、2 oz：10/10 mil、3 oz：15/15 mil。追加条件については下記を参照してください。 |
| 機械穴 | 非メッキ：0.2～6.3 mm、メッキスルーホール：0.2～5.8 mm |
| 片側メッキスルーホール | 最小径：0.5 mm |
| ミリングスロット幅 | 非メッキ：≥0.8 mm、メッキ：≥0.65 mm |
| パターンと基板端のクリアランス | ≥0.3 mm |
| ソルダーレジスト色 | 緑、赤、黄、青、白、黒 |
| ソルダーレジストダム | 0.1 mm ダムオプションあり：緑は ≥0.10 mm、その他の色は ≥0.13 mm。オプションなし：緑は ≥0.32 mm、その他の色は ≥0.35 mm。 |
| シルク | 白レジスト上は黒、それ以外の色では白。最小文字高さ：23 mil、最小線幅：4 mil。 |
| 表面処理 | 有鉛 HASL、無鉛 HASL、ENIG、OSP、ハードゴールド |

RF コイル設計では、少なくとも 6/6 mil のパターン幅と間隔を使用し、4/4 mil オプションを選択してください。4 層基板では、内層パターン幅は少なくとも 6 mil 必要です。

スタックアップおよびその他の工程固有の要件については、[Fusion PCB Specification](https://support.seeed.cc/portal/en/kb/articles/fusion-pcb-specification)を参照してください。

### Fusion PCBA の対応仕様

Fusion は、試作、小ロット、量産向けに、部品調達および表面実装、スルーホール、混載実装に対応しています。

| 項目 | 対応内容 |
| --- | --- |
| 実装方式 | 表面実装 (SMT)、スルーホール (THT)、混載実装 |
| 実装面 | 片面実装および両面実装 |
| 小型部品 | 0201 パッケージまで対応 |
| 微細ピッチデバイス | 0.4 mm ピッチ BGA および 0.4 mm リードピッチデバイス |
| 部品調達 | 提出された BOM に基づく調達 |
| エンジニアリングサポート | すべての Fusion PCBA 注文に無料 DFA レビューを提供 |
| テストおよびプログラミング | 機能テスト、ファームウェア書き込み、カスタム治具によるテスト |

サービス概要については、[Fusion PCB Assembly サービス](https://www.seeedstudio.com/pcb-assembly.html)を参照してください。

### エンジニアリングレビューと品質サポート

DFM (Design for Manufacturability) は、ベア PCB が製造可能かどうかを確認します。DFA (Design for Assembly) は、指定された部品が正しく実装できるかどうかを確認します。

- **PCB 製造レビュー:** パターン幅や間隔、穴径、ソルダーレジスト開口など、製造に影響を与える可能性のある問題は、生産開始前に指摘されます。

- **PCBA 注文向け無料 DFA レビュー:** すべての Fusion PCBA 注文では、フットプリント互換性、部品干渉、極性や向きの問題を確認するために、Gerber、BOM、および実装情報をレビューします。これにより、部品を基板に実装する前に実装上の問題を特定するのに役立ちます。

- **PCBA 検査およびテスト:** 目視可能な実装不良に対する AOI、隠れたはんだ接合部向けの X 線検査、電気的チェック用の ICT などに対応しています。機能テストでは、顧客提供のテスト計画に基づき、実装済み基板の意図した機能を確認します。使用される検査およびテスト方法は、基板設計およびテスト要件によって異なります。

[DFA レビューガイド](https://www.seeedstudio.com/blog/2026/08/31/seeed-fusion-pcba-dfa-review-guide-what-engineers-check-before-assembly/) と [PCBA 品質管理ガイド](https://www.seeedstudio.com/blog/2026/08/18/seeed-fusion-pcba-quality-control-flying-probe-aoi-x-ray-ict-and-fct-explained/) を読むか、[Fusion テストサービス](https://www.seeedstudio.com/fusion-testing-solutions.html) をご覧ください。

### 生産と出荷

PCB の製造時間は、基板の複雑さ、層数、材料、数量、および製造プロセスによって異なります。[注文ページ](https://www.seeedstudio.com/fusion_pcb.html) の **Production Time** フィールドには、選択した構成に対する見積もりが表示されます。PCBA の注文では、部品の在庫状況や実装要件もスケジュールに影響します。

Production Time は、データ確認から梱包までの期間を指します。データレビューおよびデータ不備による遅延はこの期間に含まれません。その後に出荷手配と配送が続き、輸送時間は配送先と選択した配送方法によって異なります。納期を計画する際は、Production Time を到着日とみなすのではなく、各工程に要する時間を考慮してください。

[Fusion リードタイム FAQ](https://support.seeed.cc/portal/en/kb/articles/how-long-do-fusion-orders-take) では、注文プロセスの各段階についてさらに詳しく説明しています。

### よくある質問

**詳細な注文手順はどこで確認できますか？**

[ステップバイステップ PCB 注文ガイド](https://support.seeed.cc/portal/en/kb/articles/how-to-place-a-fusion-pcb-order) では、PCB データのアップロード、製造オプション、チェックアウト、支払いについて説明しています。実装については、[PCBA 注文ガイド](https://support.seeed.cc/portal/en/kb/articles/how-do-i-place-a-seeed-fusion-pcb-assembly-pcba-order) を参照してください。

**設計ソフトから Gerber ファイルをどのように出力すればよいですか？**

必要な銅箔層、ソルダーマスク層、シルク層、外形層に加え、ドリルファイルを出力してください。[Gerber 出力ガイド](https://support.seeed.cc/portal/en/kb/fusion/how-to-generate-pcb-gerber-files) では、さまざまな PCB 設計ツールでの手順を説明しています。

**すでに手元にある PCBA のテストだけを依頼できますか？**

はい可能です。[Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html) のテストのみオプションを利用し、必要な設計データとテストファイルを提出してください。

**注文状況が Pending / Awaiting Revised File と表示されています。どうすればよいですか？**

登録済みのメールアドレス（スパムフォルダも含む）を確認し、問題の説明を確認してください。指示に従ってデータを修正し、再アップロードすると、注文処理を継続できます。詳しくは [データ修正に関する FAQ](https://support.seeed.cc/portal/en/kb/articles/my-fusion-order-status-is-pending-awaiting-revised-file-what-should-i-do) を参照してください。

**オンラインに表示されていないオプションが基板に必要な場合はどうなりますか？**

[Advanced PCB サービス](https://www.seeedstudio.com/fusion-advanced-pcb.html) から設計要件を送信し、エンジニアによるレビューと見積もりを依頼してください。

## 技術サポート & 製品ディスカッション

弊社製品をお選びいただきありがとうございます。私たちは、お客様が弊社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お好みやニーズに合わせて選べる複数のコミュニケーションチャネルをご用意しています。

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
