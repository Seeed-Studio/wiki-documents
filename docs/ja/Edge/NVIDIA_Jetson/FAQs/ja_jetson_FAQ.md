---
description: Jetson-FAQ
title: Jetson使用に関するFAQ
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Jetson_FAQ
last_update:
  date: 7/5/2023
  author: Seraphina
---


この文書には、Jetsonシリーズ製品に関するよくある質問がすべて含まれています。Jetsonを使用する際に何らかの問題に直面している場合、これは非常に役立ちます。

#### Q1: インストールのトラブルシューティング

詳細については、[こちら](/ja/Troubleshooting_Installation)をクリックしてください

#### Q2: 受け取ったreComputerのeMMCの残り容量が約2GBしかない場合、容量不足の問題をどのように解決しますか？

詳細については、[こちら](/ja/solution_of_insufficient_space)をクリックしてください

#### Q3: reComputerとVEYEカメラの互換性問題をどのように解決しますか？

詳細については、[こちら](/ja/Solution_for_the_Compatibility_Issue_between_reComputer_and_VEYE_Camera)をクリックしてください

#### Q4: IMX477カメラとA603キャリアボードの互換性問題をどのように解決しますか？

詳細については、[こちら](/ja/Use_IMX477_Camera_with_A603_Jetson_Carrier_Board)をクリックしてください

#### Q5: reComputer J30/J40のシステムログを取得するにはどうすればよいですか？

詳細については、[こちら](/ja/get_the_system_log_of_recomputer_j30_and_j40)をクリックしてください

#### Q6: JetPackフラッシュ中のタイムアウト問題。

詳細については、[こちら](/ja/usb_timeout_during_flash)をクリックしてください

#### Q7: デバイスをフラッシュした後、USB-Aポート、Ethernetポートが使用できない、またはHDMI表示がありません。
**A:** ファイルの整合性を確認してください（例：SHA256チェックサムを提供しています）。一部のキャリアボード（特にA60Xシリーズ）では、ドライバーパッチが**Linux_for_tegra**ディレクトリに正常にコピー/適用されていることを確認してください。**sudo**権限が必要なファイルがあり、ディレクトリをコピーする際は、コマンドに**-r**パラメータが含まれていることを確認してください。

#### Q8: "sudo apt-get update && sudo apt-get upgrade"コマンドを実行した後、システムがクラッシュ/起動できない/黒い画面/周辺機器ドライバーが失われました。
**A:** これらの問題は**「カスタムキャリアボードでapt upgradeを使用してシステムをアップグレードできないのはなぜですか？」**として要約できます。簡潔な答えは：**カスタム/サードパーティ**キャリアボードでapt upgradeコマンドを実行**しないでください**。さらに、apt upgradeコマンドを含むスクリプトの実行やUbuntuのGUIアップデーターツールの使用も避けてください。サーバーからのDebianパッケージは、当社のカスタムボードの特定の設計を考慮しておらず、強制的にアップグレードすると、デバイスを破損させる可能性のある非互換性が生じる可能性があります。このプロセスは公式開発キットでのみ互換性があります。これらの問題を解決するには、JetPackを再フラッシュするガイドに従ってください。

#### Q9: apt upgradeを実行できないと言われた場合、ソフトウェアパッケージをどのようにアップグレードできますか？ソフトウェアをアップグレードしないとセキュリティリスクがありますか？

詳細については、[こちら](/ja/upgrade_software_packages_for_jetson)をクリックしてください

<!-- #### Q10: How to use the OTA (Over-the-Air) method to upgrade the system version of the Jetson device. 

For details, please click [here](/ja/updating_jetpack_with_ota) -->

#### Q11: SeeedがNVIDIAのJetson BSPに加える変更は何ですか。

詳細については、[こちら](/ja/differences_of_l4t_between_seeed_and_nvidia)をクリックしてください

#### Q12: Jetson-nanoでSPIインターフェースを有効にするにはどうすればよいですか？
詳細については、[こちら](/ja/enable_spi_interface_on_jetsonnano)をクリックしてください

#### Q13: Jetsonでフラッシュプロセスを完了した後、システムがSSDから起動に失敗することがあるのはなぜですか？
この問題は現在JetPack 5をフラッシュする際に発生し、NVIDIAが公式に文書化しています。解決策については、[こちら](/ja/issue_of_jetpack5_failing_to_boot_from_certain_ssd)をクリックしてください。

#### Q14: SeeedのJetson BSPのソースコードプロジェクトをビルドするにはどうすればよいですか？
詳細については、[こちら](/ja/how_to_build_the_source_code_project_for_seeed_jetson_bsp)をクリックしてください

#### Q15: reComputer/reServerで`apt upgrade`コマンドを実行できないのはなぜですか？
**reComputer/reServer**のカーネルとドライバーはカスタマイズされています。`apt upgrade`コマンドを実行すると、一部のカーネルとドライバー関連パッケージがNVIDIAの公式リソースに置き換えられ、ソフトウェア互換性の問題を引き起こす可能性があります。<mark>したがって、サードパーティのJetsonプラットフォームでは`apt upgrade`を実行しないでください。</mark>

関連するAPTソースをロックするには、以下の手順を参照してください。これにより、apt upgradeが誤って実行された場合の影響を最小限に抑えることができます：
```bash
sudo apt-mark hold <package-name>

### For example: 
sudo apt-mark hold nvidia-l4t-core
```

#### Q16: reComputer/reServerに必要な`.ko`ドライバーモジュールがない場合、使用可能なドライバーをコンパイルするにはどうすればよいですか？

詳細については、[こちら](/ja/how_to_build_the_ko_module_for_seeed_jetson)をクリックしてください

#### Q17：Jetson（JetPack 6）でexFATでフォーマットされた外部ハードドライブをマウントするにはどうすればよいですか？

まず、依存関係をインストールします：
```
sudo apt install build-essential autoconf automake libtool pkg-config
sudo apt install git libfuse-dev
```

次に、ソースからexFATドライバーをクローンしてビルドします：
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

これにより、exFATでフォーマットされた外部ドライブが`/media/seeed/tmp-exfat/`にマウントされ、Jetsonで正常にアクセスできるようになります。

#### Q18：イメージをフラッシュする前にJetsonのディスクを暗号化するにはどうすればよいですか？

詳細については、[こちら](/ja/how_to_encrypt_the_disk_for_jetson)をクリックしてください

#### Q18：JetsonとEtherCATデバイス間の通信を確立するにはどうすればよいですか？

詳細については、[こちら](/ja/how_to_establish_the_ethercat_on_jetson)をクリックしてください


## 技術サポート

当社の製品をお選びいただき、ありがとうございます！当社の製品での体験が可能な限りスムーズになるよう、さまざまなサポートを**ここで**提供しています。さまざまな好みやニーズに対応するため、複数のコミュニケーションチャネルを提供しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

