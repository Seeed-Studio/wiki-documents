---
title: DSO Nano/Qemu gdb
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/ja/DSO_Nano-Qemu_gdb/
slug: /ja/DSO_Nano-Qemu_gdb
last_update:
  date: 05/15/2025
  author: gunengyu
---


##   QemuエミュレータでSTM32コードを実行する

qemuエミュレータを使用すると、ARMプロセッサなしでARMコードを実行およびデバッグできます！コードをエミュレータにロードし、gdbデバッガに接続してコードをステップ実行できます。もちろん、ペリフェラル、タイマー、その他のマイクロコントローラコンポーネントはエミュレートされませんが、一部のコードを検証するのに役立ちます。qemu-system-armを実行する必要があり、これはQEMUプロジェクトの一部です。Debian/Ubuntuでは、qemu-systemパッケージ（または古いバージョンではqemu-kvm-extras）に含まれています。

##   qemu-system-armのビルド（オプション）

システムに対応する配布パッケージがない場合、またはパッケージ化されたバージョンが0.13より古い場合は、自分でビルドすることをお勧めします：

```
wget [http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz](http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz)
tar xzf qemu-0.13.0.tar.gz
cd qemu-0.13.0
./configure --disable-kvm --enable-debug --target-list=arm-softmmu --audio-card-list= --audio-drv-list=
make
```

arm-softmmuフォルダから直接実行できますが、例えば/usr/local/binにインストールしたい場合は別です。

##   STM32サポートに関する注意

DSO NanoのSTM32マイクロコントローラはARM Cortex-M3コアを使用しています。qemu-system-armはSTM32のROM（フラッシュ）レイアウトを認識していません。特に、0x08000000アドレスからスタックとリセットベクタを読み取ることはありません。ただし、elfファイルがリセットハンドラを正しくエントリーポイントとして指定している場合、それを開始アドレスとして使用します。ただし、スタックポインタ（sp）を手動で設定する必要があります。

##   エミュレータの起動

**エミュレータを起動し、内部gdbサーバー（-sオプション）を起動して、elfファイルを「カーネル」としてロードします：**
```
qemu-system-arm -cpu cortex-m3 -S -s -singlestep -nographic -m 513 -kernel dso-lib.elf
```

"-m 513"オプションは、STM32の0x2000000 RAMアドレスを含むメモリスペースを作成します。

**gdb（ARMツールチェーンからのもの）を起動し、qemuエミュレータに接続します：**

```
arm-none-eabi-gdb dso-lib.elf
(gdb) target extended-remote localhost:1234
(gdb) set $sp = 0x20005000
(gdb) where
```

**プログラムをステップ実行する例：**

```
(gdb) display/i $pc
(gdb) stepi
(gdb) next
(gdb) break main.c:23
(gdb) x/16wx 0x20000000
(gdb) cont
(gdb) info reg
(gdb) info variables
(gdb) print *pProperty
```

##   リンク

*   [http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/](http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/)

*   [http://embdev.net/topic/129757](http://embdev.net/topic/129757)

## 技術サポートと製品ディスカッション

技術的な問題がある場合は、[フォーラム](http://forum.seeedstudio.com/)に問題を投稿してください。  
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  