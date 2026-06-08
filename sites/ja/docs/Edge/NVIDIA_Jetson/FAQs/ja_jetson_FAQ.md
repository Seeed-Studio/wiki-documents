---
description: Jetson-FAQ
title: Jetson 使用に関する FAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
createdAt: '2025-04-11'
updatedAt: '2026-03-18'
url: https://wiki.seeedstudio.com/ja/Jetson_FAQ/
---


このドキュメントには、Jetson シリーズ製品に関連するよくある質問がすべて含まれています。Jetson を使用中に問題が発生している場合に非常に役立ちます。

#### Q1: インストールのトラブルシューティング

詳細については[こちら](/ja/Troubleshooting_Installation)をクリックしてください

#### Q2: 受け取った reComputer の eMMC の空き容量が約 2GB しかありません。容量不足の問題をどのように解決すればよいですか？

詳細については[こちら](/ja/solution_of_insufficient_space)をクリックしてください

#### Q3: reComputer と VEYE カメラの互換性の問題をどのように解決しますか？

詳細については[こちら](/ja/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)をクリックしてください

#### Q4: IMX477 カメラと A603 キャリアボードの互換性の問題をどのように解決しますか？

詳細については[こちら](/ja/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)をクリックしてください

#### Q5: reComputer J30/J40 のシステムログを取得するにはどうすればよいですか？

詳細については[こちら](/ja/get_the_system_log_of_recomputer_j30_and_j40)をクリックしてください

#### Q6: Jetson のフラッシュ中によく発生するフラッシュエラー

詳細については[こちら](/ja/usb_timeout_during_flash)をクリックしてください

#### Q7: デバイスをフラッシュした後、USB-A ポートや Ethernet ポートが使用できない、または HDMI に表示が出ません。
**A:** ファイルの完全性を確認してください（例えば、当社は SHA256 チェックサムを提供しています）。一部のキャリアボード（特に A60X シリーズ）では、ドライバパッチが **Linux_for_tegra** ディレクトリに正しくコピー／適用されていることを確認してください。**sudo** 権限が必要なファイルもあり、ディレクトリをコピーする際は、コマンドに **-r** パラメータが含まれていることを確認してください。

#### Q8: "sudo apt-get update && sudo apt-get upgrade" コマンドを実行した後、システムがクラッシュした／起動できない／画面が真っ黒になる／周辺機器ドライバが失われました。
**A:** これらの問題は、**「なぜカスタムキャリアボードでは apt upgrade でシステムをアップグレードできないのか？」**という点に集約されます。結論としては：**絶対に** **カスタム／サードパーティ製** キャリアボード上で apt upgrade コマンドを実行しないでください。さらに、apt upgrade コマンドを含むスクリプトの実行や、Ubuntu の GUI アップデータツールの使用も避けてください。サーバから配布される Debian パッケージは、当社カスタムボードの設計を考慮しておらず、強制的にアップグレードすると非互換が発生し、デバイスが起動不能になる可能性があります。このプロセスは公式 devkit にのみ対応しています。これらの問題を解決するには、当社のガイドに従って JetPack を再フラッシュしてください。

#### Q9: apt upgrade を実行できないと言われましたが、ソフトウェアパッケージはどのようにアップグレードすればよいですか？アップグレードしないとセキュリティリスクはありますか？

詳細については[こちら](/ja/upgrade_software_packages_for_jetson)をクリックしてください

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. 

For details, please click [here](/ja/updating_jetpack_with_ota) -->

#### Q11: Seeed は NVIDIA の Jetson BSP にどのような変更を加えていますか。

詳細については[こちら](/ja/differences_of_l4t_between_seeed_and_nvidia)をクリックしてください

#### Q12: Jetson-nano で SPI インターフェースを有効にするにはどうすればよいですか？
詳細については[こちら](/ja/enable_spi_interface_on_jetsonnano)をクリックしてください

#### Q13: Jetson でフラッシュ処理を完了した後、SSD からシステムが起動しないことがあるのはなぜですか？
この問題は現在、JetPack 5 をフラッシュした際に発生しており、NVIDIA によって公式に文書化されています。解決方法については[こちら](/ja/issue_of_jetpack5_failing_to_boot_from_certain_ssd)をクリックしてください。

#### Q14: Seeed の Jetson BSP 用ソースコードプロジェクトをビルドするにはどうすればよいですか？
詳細については[こちら](/ja/how_to_build_the_source_code_project_for_seeed_jetson_bsp)をクリックしてください

#### Q15: なぜ reComputer/reServer では `apt upgrade` コマンドを実行できないのですか？
**reComputer/reServer** のカーネルとドライバはカスタマイズされています。`apt upgrade` コマンドを実行すると、カーネルやドライバ関連のパッケージの一部が NVIDIA 公式のリソースに置き換えられ、ソフトウェアの互換性問題を引き起こす可能性があります。<mark>したがって、サードパーティ製の Jetson プラットフォームでは `apt upgrade` を実行しないでください。</mark>

関連する APT ソースをロックするには、以下の手順を参照してください。こうすることで、誤って apt upgrade を実行してしまった場合でも、影響を最小限に抑えることができます。
```bash
sudo apt-mark hold <package-name>

### For example: 
sudo apt-mark hold nvidia-l4t-core
```

#### Q16: reComputer/reServer に必要な `.ko` ドライバモジュールがない場合、どのようにして使用可能なドライバをコンパイルできますか？

詳細については[こちら](/ja/how_to_build_the_ko_module_for_seeed_jetson)をクリックしてください

#### Q17：exFAT でフォーマットされた外付けハードドライブを Jetson（JetPack 6）でマウントするにはどうすればよいですか？

まず、依存関係をインストールします：
```
sudo apt install build-essential autoconf automake libtool pkg-config
sudo apt install git libfuse-dev
```

次に、ソースから exFAT ドライバをクローンしてビルドします：
```
git clone https://github.com/relan/exfat
cd exfat
autoreconf --install
./configure
make
sudo make install
```

次に、ディスクをローカルディレクトリに手動でマウントします：
```
lsblk   # Check the device name of your external hard drive

sudo mkdir /media/seeed/tmp-exfat   # Create a mount point
sudo mount.exfat /dev/sda3 /media/seeed/tmp-exfat/
```

これにより、exFAT でフォーマットされた外付けドライブが `/media/seeed/tmp-exfat/` にマウントされ、Jetson 上で通常どおりアクセスできるようになります。

#### Q18：Jetson のイメージをフラッシュする前にディスクを暗号化するにはどうすればよいですか？

詳細については[こちら](/ja/how_to_encrypt_the_disk_for_jetson)をクリックしてください

#### Q19：Jetson と EtherCAT デバイス間で通信を確立するにはどうすればよいですか？

詳細については[こちら](/ja/how_to_establish_the_ethercat_on_jetson)をクリックしてください

#### Q20：Jetson カーネルに関連するものは何も変更していないのに、起動時に Jetson が UUID 関連のエラーを報告し、その後リカバリターミナルに入ってしまいます。

この問題の解決方法については、[こちら](/ja/deal_the_issue_of_UUID)をクリックしてください

#### Q21: NVIDIA Jetson デバイスで IMX219 カメラを使用するにはどうすればよいですか？

詳細については[こちら](/ja/how_to_use_camera_imx219)をクリックしてください

## 技術サポート

当社製品をお選びいただきありがとうございます。お客様が当社製品をできるだけスムーズにご利用いただけるよう、さまざまなサポートをご用意しています。お好みやニーズに応じて選択いただけるよう、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

