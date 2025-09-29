---
description: 便利なシリアルライブラリ
title: 便利なシリアルライブラリ

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/A_Handy_Serial_Library
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # Disqus用

---


Arduinoにはデバッグ機能がない、これは一部のソフトウェアエンジニアにとって最初の印象かもしれません。実際のところ、私たちはしばしばArduinoを使って簡単なアプリケーションを作成するだけで、デバッグがなくても問題ありません。しかし、もし顔認識のような複雑なアプリケーションを作成したい場合は、選んだプラットフォームが間違っているかもしれないと再考する必要があるかもしれません。

簡単なアプリケーションの場合、シリアルプリントを使用してデバッグすることができます。Arduinoは非常に使いやすいシリアルプリント機能を提供しています。

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.println("hello world");
}

void loop()
{
    // ここにコードを追加
}
```

さらに、`Serial.print`や`Serial.write`などの関数もあります。これらの関数に慣れてくると、実際にはそれほど使いやすくないことに気づくかもしれません。以下のコードを見てみましょう：

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.print("a[");
    Serial.print(3);
    Serial.print("] = ");
    Serial.println(5);

}

void loop()
{
    // ここにコードを追加
}
```

`a[3]=5`を出力するのに4行ものコードが必要です。面倒だと思いませんか？C言語の授業を思い出してください。1行のコードで済みます：

```cpp
printf("a[%d] = %d", 3, 5);
```

C++の場合も1行で十分です：

```cpp
cout << "a[" << 3 << "] = " << 5 << endl;
```

Arduinoに`printf`や`cout`のような機能があれば便利だと思いませんか？幸運なことに、誰かがそのようなライブラリを書いてくれました。詳細は[http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)を参照してください。
私はこのライブラリに少し変更を加えました。こちらからダウンロードできます：[https://github.com/loovee/Streaming](https://github.com/loovee/Streaming)。試してみてはいかがでしょうか？

## リソース

- [PDFファイルをダウンロード](https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf)

## 技術サポートと製品ディスカッション
弊社の製品をお選びいただきありがとうございます！お客様が弊社の製品をスムーズにご利用いただけるよう、さまざまなサポートを提供しています。異なる好みやニーズに対応するため、いくつかのコミュニケーションチャネルを用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>