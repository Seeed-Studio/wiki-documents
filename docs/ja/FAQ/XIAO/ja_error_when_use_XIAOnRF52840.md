---
description: Seeed Studio Round Display for XIAO-FAQ
title: XIAO nRF52840 (Sense)を使用する際にエラーが発生するのはなぜですか？
#image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/error_when_use_XIAOnRF52840
last_update:
  date: 6/30/2023
  author: cheng.tang
---
このチュートリアルの内容を使用する際、XIAO nRF52840では2つの異なるタイプの問題が発生する可能性があります。

1. nRF52840とTFTライブラリ間の互換性問題。

  TFTライブラリを使用している場合、コンパイルとアップロードはエラーなく、非常にスムーズに行われます。しかし、表示する際に画像が表示されないことがあります。その場合、nRF52840とTFTライブラリ間の互換性問題に遭遇している可能性があります。これは、XIAOを交換するか、Arduino GFXライブラリを使用して画像を完成させる必要があることを意味します。

2. 間違った開発ボードを選択することによるコンパイルエラー。

コンパイル過程で問題が発生している場合。エラーメッセージは通常SPIエラーに関するもので、例えば`'SPI_X' was not declared in this scope`などです。これは、間違ったタイプの開発ボードを選択していることを意味します。このチュートリアルのすべてを使用するには、XIAO nRF52840の**non-mbed**バージョンを使用する必要があります。 -->

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/73.png" style={{width:700, height:'auto'}}/></div>