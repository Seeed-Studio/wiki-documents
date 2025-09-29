---
title: DSO Quad:ファームウェアのビルド
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DSO_Quad-Building_Firmware/
slug: /ja/DSO_Quad-Building_Firmware
last_update:
  date: 05/15/2025
  author: gunengyu
---


##   DSO Quadファームウェアをソースからビルドする

このページには現在、Debian上でのGCCに関する情報のみが記載されています。他の環境の設定方法をご存知の場合は、ぜひ情報を追加してください。

###   GCCとDebianを使用する

```bash
apt-get install --no-install-recommends  build-essential autoconf flex bison texinfo libncurses5-dev libgmp3-dev libmpfr-dev libmpc-dev libftdi-dev
cd
git clone git://github.com/esden/summon-arm-toolchain.git
cd summon-arm-toolchain
$EDITOR summon-arm-toolchain
```

..そして、以下の設定が有効であることを確認してください:
```
 TARGET=arm-none-eabi
 USE_LINARO=1
 LIBSTM32_EN=1
 DEFAULT_TO_CORTEX_M3=1
```

..その後:
```
 ./summon-arm-toolchain
```

ツールチェーンは<tt>~/sat/</tt>にインストールされます。次に:
```
cd
 git clone [https://github.com/tmbinc/dsoquad](https://github.com/tmbinc/dsoquad)
 cd dsoquad/src/app
 PATH=$PATH:~/sat/bin make
```

そのディレクトリ内にアップロード用の<tt>.hex</tt>ファイルが生成されているはずです。

####   ディスク使用量
```
$ du -sh  summon-arm-toolchain/  sat/  dsoquad/
 117M    summon-arm-toolchain/
 229M    sat/
 1.9M    dsoquad/
```

## 技術サポートと製品に関するディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>