---
description: Wio Terminal - FAQ
title: Wio Terminal を複数回再起動した後のプログラム消失を回避する方法
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/Program_loss_by_repeated_power
date: 1/31/2024
author: Seraphina
---


**複数回の再起動後に Wio Terminal が正常に起動しない**状況に遭遇した場合は、解決策について以下の Wiki を参照してください：

電源のオン/オフプロセス中に、チップが安定する前にブートローダープログラムがフラッシュメモリにアクセスしようとすると、予期しないデータ損失が発生する可能性があります。この状況では、ブートローダーがフラッシュメモリに保存されているアプリケーションコードやデータを正しく読み取れないため、アプリケーションプログラムが開始できなくなる可能性があります。

この問題を解決するために、チップが安定した後にのみフラッシュメモリにアクセスするよう、ブートローダーを以下のバージョンに更新することをお勧めします。以下の手順に従ってガイダンスを参照してください：

**ステップ 1:** 最新のブートローダーを[こちら](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2)からダウンロードします

**ステップ 2:** USB Type-C を使用して Seeeduino Wio Terminal を PC に接続します。

**ステップ 3:** 電源スイッチを素早く 2 回スライドしてブートローダーモードに入ります。詳細については、[こちら](https://wiki.seeedstudio.com/ja/Wio-Terminal-Getting-Started/#enter-bootloader)も参照してください

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**ステップ 4:** PC に `Arduino` という名前の外部ドライブが表示されます。ダウンロードした [`update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2`](https://files.seeedstudio.com/wiki/Wio-Terminal/res/update-bootloader-wio_terminal-v3.15.0-4-gaa4429b.uf2) ファイルを `Arduino` ドライブにドラッグします。

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/update-bootloader-version.png" /></div>


これでブートローダーの更新が正常に完了しました。Wio Terminal をお楽しみください！