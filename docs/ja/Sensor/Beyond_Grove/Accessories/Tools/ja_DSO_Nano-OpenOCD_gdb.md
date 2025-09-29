---
title: DSO Nano/OpenOCD gdb
nointro:
keywords:
  - ドキュメント
  - ドキュサウルス
image: https://wiki.seeedstudio.com/ja/DSO_Nano-OpenOCD_gdb/
slug: /ja/DSO_Nano-OpenOCD_gdb
last_update:
  date: 05/15/2025
  author: gunengyu
---


# OpenOCD と gdb を使用したデバッグ

OpenOCD 4.0 以降を使用してください。

この例では、コンピュータとデバッグ対象のデバイス（または開発ボード）の間に Segger J-Link 互換の JTAG アダプタがあることを前提としています。代わりに SWD（ST-Link）アダプタを使用することも可能です。その場合は OpenOCD 0.7 以降を使用してください。

ハードウェアに対応する設定ファイルを使用して OpenOCD サーバーを起動します：
```
openocd -f interface/jlink.cfg -f target/stm32.cfg
```

または、SWD を使用している場合：
```
openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg
```

別のウィンドウで、OpenOCD との対話型セッションを開始します：
```
telnet localhost 4444
```

以下のコマンドを実行することで、「ターゲットが停止していない」エラーやその他の問題を回避できるようです：
```
reset_config trst_and_srst
```

ターゲット（ARM プロセッサ）を停止します：
```
reset halt
```

まだバイナリをフラッシュしていない場合（例えば dfu-util を使用していない場合）、以下のように JTAG 経由でフラッシュできます：
```
reset init
flash write_image erase dso-lib.hex 0 ihex
reset halt
```

3つ目のウィンドウで gdb または gdbtui を起動します：
```
arm-none-eabi-gdb
(gdb) file dso-lib.elf
(gdb) target remote localhost:3333"
(gdb) load dso-lib.elf
```

これで実行およびデバッグが可能になります：
```
(gdb) set $pc = Reset_Handler
(gdb) display/i $pc
(gdb) stepi
```

## 技術サポートと製品に関するディスカッション
技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！お客様が弊社製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なるニーズや好みに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>