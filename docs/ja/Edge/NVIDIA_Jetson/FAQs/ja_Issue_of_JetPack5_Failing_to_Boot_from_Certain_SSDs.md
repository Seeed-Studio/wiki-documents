---
description: 特定のSSDからJetPack5が起動に失敗する問題を解決する
title: 特定のSSDからJetPack5が起動に失敗する問題を解決する
keywords:
- jetson
- jetpack
- L4T
image: https://files.seeedstudio.com/wiki/reComputer/nvidia-jetpack-6-0-stack.webp
slug: /ja/issue_of_jetpack5_failing_to_boot_from_certain_ssd
last_update:
  date: 07/30/2025
  author: Dayu
---

**このwikiではJetPackのコンポーネントについて簡潔に紹介し、JetPackとJetsonの関係を素早く理解し、最もよくある質問にお答えします。**

## 1. 問題

JetPack 5をJetsonのSSDにフラッシュした場合、フラッシュプロセスが正常に完了したとしても、システムの起動に失敗する可能性があります。起動時に以下のエラーが発生する場合があります：
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer/other/jetpack_boot_failure.jpg"/></div>

この問題はNVIDIAの公式フォーラムでも報告されています。ファイルシステムの非互換性やフラッシュプロセス中の不完全な消去が原因で起動に失敗する可能性があります。
これまでのところ、**JetsonデバイスでJetPack 6をフラッシュして使用する際には、同様の問題は観察されていません。**

## 2. 解決策
**参考として2つの解決策を提供します。具体的な状況に応じて選択してください：**

### オプション A

まず、正常に起動しないSSDをJetsonデバイスから取り外し、SSDエンクロージャー（以下の画像に示すような互換性のあるエンクロージャー）を使用してPCに接続します。ドライブのフォーマットを実行してください。
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/Jetson/nvme-faslhing.jpg"/></div>

次に、ターミナルで以下のコマンドを入力して、PCにマウントされたSSDを特定します。これは`sda`、`sdb`などの名前で表示される場合があります：
```bash
lsblk
```

挿入したSSDがどの名前に対応するかわからない場合は、マウントされたディレクトリの内容を確認できます：
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/ssd-mount.jpg
"/></div>

画像のマウントされたディレクトリを例として、**Jetson固有のデバイスツリー**があるかどうかを確認します：
```bash
ls /your_path/boot
# 例：ls /media/darklee/bc5769eb-36d6-4c42-86d1-565554112264/boot
```

JetsonのSSDの場合、以下の画像のような結果が表示されます：
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/reComputer-Jetson/FAQ/device-tree-example.png
"/></div>

**SSDのマウントされたディレクトリ内の他のファイルの内容も確認して、それがJetsonのものであることをさらに確認できます。**

:::danger
JetsonのSSDをフォーマットする前に、正確性を再確認してください。SSDに重要なデータが含まれている場合は、必ずバックアップを取ってください。何をしているかを確実に理解してください。
:::

JetsonのSSDであることを確認し、必要なバックアップを完了したら、SSDの完全フォーマットを実行します。
`bs=100M`、`count=800`は最初の**80GB**の領域をフォーマットします。**SSDの容量がより大きい場合は、それに応じてフォーマットする領域を増やすことができます。**
```bash
sudo wipefs -a /dev/sda
sudo dd if=/dev/zero of=/dev/sda bs=100M count=800
```
フォーマットが完了したら、SSDをJetsonに再インストールします。SSDが完全に消去されていれば、JetPack 5のフラッシュは理論的に起動失敗を防ぐはずです。

Jetsonのフラッシュ手順については、この[wiki](https://wiki.seeedstudio.com/ja/flash/jetpack_to_selected_product/)を参照してください。

### オプション B

この[wiki](/ja/how_to_build_the_source_code_project_for_seeed_jetson_bsp)を参照して、フラッシュ用のソースコードプロジェクトを準備してください。

`./tools/kernel_flash/l4t_initrd_flash.sh`を`--erase-all`パラメータで実行すると、フラッシュプロセス中にソリッドステートドライブが完全に消去されます。

## リソース

- [SeeedのL4Tソースコード](https://github.com/Seeed-Studio/Linux_for_Tegra)

## 技術サポートと製品ディスカッション

私たちの製品をお選びいただき、ありがとうございます！私たちの製品での体験ができるだけスムーズになるよう、さまざまなサポートを提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャンネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>