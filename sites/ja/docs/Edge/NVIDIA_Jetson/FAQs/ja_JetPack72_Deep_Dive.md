---
description: この FAQ では、Jetson AGX Orin 向け JetPack 7.2 の主な変更点を説明し、Seeed による JetPack 7.2 と JetPack 6.2 の推論比較結果をまとめ、Seeed Jetson DevelopTool を使ったアップグレード方法を紹介します。
title: JetPack 7.2 徹底解説
keywords:
  - Jetson
  - JetPack 7.2
  - Jetson AGX Orin
  - エッジ AI
  - 大規模言語モデル
image: https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg
slug: /jetpack72_deep_dive
sku: E26020301
last_update:
  date: 06/11/2026
  author: Dayu
createdAt: '2026-06-11'
updatedAt: '2026-06-15'
url: https://wiki.seeedstudio.com/ja/jetpack72_deep_dive/
---

# JetPack 7.2 徹底解説：Jetson AGX Orin の推論はどう変わるのか？

この FAQ では、JetPack 7.2 が Jetson AGX Orin ユーザーにとって重要である理由、Seeed が JetPack 7.2 と JetPack 6.2 を比較して測定した内容、および Seeed Jetson DevelopTool を使ってアップグレードパスを評価する方法をまとめます。

Seeed が使用したテストプラットフォームは、reComputer Jetson AGX Orin Developer Kit GMSL Bundle です。

<div align="center">
  <img width={800} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/7f7f32ef807b8c2c2215b49801c56084/1/-/1-e26020301-recomputer-jetson-agx-orin_-developer-kit-gmsl-bundle.jpg" />
</div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
  <a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> 今すぐ入手 </font></span></strong>
  </a>
</div>

## FAQ

#### Q1: Jetson ユーザー向けの JetPack 7.2 の主な変更点は何ですか？

JetPack 7.2 は、より新しい Jetson Linux ベース、Ubuntu 24.04、CUDA 13、更新された AI ランタイムコンポーネント、そしてメモリ効率やエージェント型 AI ワークフロー向けのプラットフォームレベルの改善により、Jetson ソフトウェアスタックを前進させます。

Jetson AGX Orin 32GB ユーザーにとって最も重要な変更点の 1 つは、Seeed のテストで使用された新しい高性能電力モードです。これにより、同じモジュールでもキャリアボードの電源および熱設計が対応できる場合には、より高い GPU 周波数で動作し、より高い AI スループットを実現できます。

:::note
対象のキャリアボードおよびイメージでサポートされる正確なコンポーネントバージョンについては、必ず NVIDIA のリリースノートと Seeed の BSP リリースノートを確認してください。
:::

#### Q2: Seeed はどのようなハードウェアとソフトウェアを比較しましたか？

Seeed は、AGX Orin 32GB Developer Kit と reComputer J5011 を、JetPack 6.2 および JetPack 7.2 のソフトウェア環境と同一の大規模言語モデル推論ワークロードで比較しました。

| 項目 | JetPack 6.2 テスト | JetPack 7.2 テスト |
| --- | --- | --- |
| モジュール | Jetson AGX Orin 32GB | Jetson AGX Orin 32GB |
| テストデバイス | AGX Orin 32GB Developer Kit | reComputer J5011 |
| Jetson Linux | L4T 36.4.3 | L4T 39.2 |
| Ubuntu | 22.04 | 24.04 |
| CUDA | 12.6 | 13.x |
| 推論エンジン | llama.cpp | llama.cpp |
| モデル | Qwen3.5-27B-Q4_K_M.gguf | Qwen3.5-27B-Q4_K_M.gguf |
| 主なパラメータ | `-ngl 999 -fa on -ub 512 -t 12` | `-ngl 999 -fa on -ub 512 -t 12` |

#### Q3: Seeed はどのようなメモリと性能の改善を確認しましたか？

Seeed の比較では、JetPack 7.2 によってモデル読み込み後のメモリ使用量が削減され、プロンプト処理速度とトークン生成速度の両方が向上しました。

| 指標 | JetPack 6.2 | JetPack 7.2 | 観測された変化 |
| --- | --- | --- | --- |
| モデル読み込み後のメモリ | 24.6 GB / 30 GB | 14.7 GB / 30 GB | 約 40% 減少 |
| 推論中の GPU 周波数 | 930 MHz | 1.36 GHz | より高いブースト周波数 |
| プロンプト処理 | 18.2 tokens/s | 25.8 tokens/s | 約 41.8% 高速化 |
| トークン生成 | 4.3 tokens/s | 5.5 tokens/s | 約 27.9% 高速化 |

最も実用的な結果はメモリの余裕です。JetPack 6.2 実行時には、27B モデルが読み込み後に利用可能なメモリの大部分を占有していました。JetPack 7.2 実行時には、システムはおよそ 10 GB 多くのメモリを利用可能な状態に保っており、これは LLM ワークロードと並行してビジョン前処理、ロボティクスミドルウェア、その他のサービスを実行する際に有用です。

#### Q4: JetPack 7.2 と JetPack 6.2 の比較結果を動画で見ることはできますか？

はい。以下の動画で比較の様子を確認できます。

<div class="video-container">
  <iframe width="800" height="450" src="https://www.youtube.com/embed/rO0ZPA2VK9w" title="JetPack 7.2 and JetPack 6.2 comparison on Jetson AGX Orin" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

#### Q5: Jetson デバイスを JetPack 7.2 にアップグレードすべきですか？

まずは次の表を参考にしてください。

| シナリオ | 推奨事項 |
| --- | --- |
| 新規 Jetson AGX Orin プロジェクト | 必要な BSP、ドライバ、アプリケーションスタックが利用可能であれば、JetPack 7.2 から開始することを検討してください。 |
| 既存の JetPack 6.x プロジェクト | 移行前に、カーネルモジュール、CUDA 依存関係、TensorRT エンジン、カメラドライバ、および周辺機器ドライバを検証してください。 |
| メモリに制約されている LLM または VLM ワークロード | 測定されたメモリ削減により、より大きなモデルやマルチサービスパイプラインを実行しやすくなる可能性があるため、JetPack 7.2 を評価する価値があります。 |
| カスタムキャリアボードを用いた本番システム | `apt upgrade` の実行だけでアップグレードしないでください。Seeed が提供する検証済みのフルイメージ、または公式にサポートされた OTA パスを使用してください。 |

:::caution
高性能モードでは、電力および熱の要件が増加します。高電力モードを有効にする前に、キャリアボード、電源アダプタ、筐体、および放熱設計が対象ワークロードを継続的に支えられることを確認してください。
:::

#### Q6: Seeed Jetson DevelopTool を使って JetPack 7.2 にどのようにアップグレードできますか？

Seeed Jetson DevelopTool は、Jetson のファームウェアダウンロード、フラッシュ、デバイス接続、および OTA 操作のためのガイド付きワークフローを提供します。

<div align="center">
  <img width={800} src="https://files.seeedstudio.com/wiki/flash-page.png" />
</div>

JetPack 6.x から JetPack 7.x へのようなメジャーバージョン移行では、Seeed が特定の製品および元イメージ向けに検証済み OTA パスを明示的に提供していない限り、フルフラッシュを推奨します。

一般的なワークフロー：

1. Seeed Jetson DevelopTool をインストールして起動します。
2. Jetson 製品またはキャリアボードのモデルを選択します。
3. JetPack 7.2 に対応するターゲットの L4T または JetPack バージョンを選択します。
4. ツールから BSP パッケージをダウンロードして展開します。
5. Jetson デバイスを Force Recovery Mode にします。
6. ホスト PC からデバイスを検出します。
7. フラッシュを開始し、デバイスが再起動するまで待ちます。
8. 初回起動のセットアップを完了し、システムバージョンを確認します。

ツールの詳細については、[Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool) を参照してください。

#### Q7: アップグレード後に何を検証すべきですか？

フラッシュまたはアップグレード後、本番ワークロードを実行する前に次の項目を確認してください。

- JetPack、L4T、CUDA、cuDNN、TensorRT のバージョン。
- 負荷時の GPU 周波数、電力モード、および熱挙動。
- カメラ、GMSL、Ethernet、CAN、USB、M.2 などの周辺インターフェース。
- カスタムカーネルモジュールおよびツリー外ドライバ。
- PyTorch、TensorRT エンジン、llama.cpp ビルド、CUDA 拡張などを含む AI フレームワークの互換性。
- 電力および温度の安定性を確認する長時間ストレステスト。

## リソース

- [reComputer Jetson AGX Orin Developer Kit GMSL Bundle](https://www.seeedstudio.com/reComputer-Jetson-AGX-Orintm-Developer-Kit-GMSL-Bundle.html)
- [Seeed Jetson DevelopTool](https://github.com/Seeed-Projects/Seeed-Jetson-DevelopTool)
- [NVIDIA JetPack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
- [Seeed Jetson Wiki](https://wiki.seeedstudio.com/ja/)

## 技術サポートと製品ディスカッション

弊社製品をお選びいただきありがとうございます。製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選べる複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
