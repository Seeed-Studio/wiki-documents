---
description: ライブラリの使用方法と作成方法
title: ライブラリの使用方法と作成方法

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ja/How_to_use_and_write_a_library
last_update:
  date: 05/15/2025
  author: w0x7ce

no_comments: false # for Disqus

---


Arduinoの人気は、多くの優れた使いやすいライブラリに大きく依存しています。Arduinoライブラリはオブジェクト指向のC++クラスライブラリを使用しており、ライブラリの実装詳細を知らなくても簡単に使用できます。

Arduinoライブラリは次のパスにあります：\arduino-1.0.5\libraries。そして、その中にはいくつかのデモが含まれた例があり、ライブラリの理解と使用を助けてくれます。  
ライブラリを使用するのは非常に簡単です。ここではライブラリの作成方法を紹介します。

では始めましょう。ここでは簡単な計算ライブラリを作成します。以下の関数を含みます：

```cpp
int sum(int a, int b);
int minus(int a, int b);
```

はい、とてもシンプルです。最初の関数は2つの数値の合計を返し、2番目の関数は差を返します。  
まず、Calcという名前のフォルダを作成します。これがライブラリの名前にもなります。  
次に、Calc.hファイルを作成し、以下の内容を記述します：

```cpp
#ifndef __CALC_H__
#define __CALC_H__

class Calc{
public:
    int sum(int a, int b);                  // 合計を返す
    int minus(int a, int b);                // 差を返す
};
#endif
```

```c++ title="Calc.cpp"
#include "Calc.h"

int Calc::sum(int a, int b)
{
    return (a+b);
}

int minus(int a, int b)
{
    return (a-b);
}
```

ライブラリの使用方法をユーザーに理解してもらうために、examplesフォルダを作成します。そして、cale_testという名前のデモを作成し、以下のコードを記述します：

```cpp
// calcライブラリのデモ
#include <Calc.h>

void setup()
{
    Serial.begin(9600);

    Serial.print("10+15 = ");
    Serial.println(calc.sum(10, 15));
    Serial.print("100-19 = ");
    Serial.println(calc.minus(100, 19));

    Serial.println("Calcライブラリのテスト終了！");
}

void loop()
{

}
```

Arduino IDEを使用すると、一部のライブラリ関数が赤色で表示されることがありますが、他のものはそうではありません。明らかに、関数名やヘッダーファイル名、いくつかのマクロ定義を赤色で表示させると、コードがより美しく見え、エラーの確認が容易になります。  
このライブラリを赤色で表示させるためには、Calcフォルダにkeyboards.txtファイルを追加する必要があります。keyboards.txtの内容は以下の通りです：

```cpp
#######################################
# Calc用の構文カラーリングマップ
#######################################

#######################################
# データ型 (KEYWORD1)
#######################################
Calc	KEYWORD1
calc	KEYWORD1

#######################################
# メソッドと関数 (KEYWORD2)
#######################################
sum	KEYWORD2
minus	KEYWORD2

#######################################
# 定数 (LITERAL1)
#######################################
```

ご覧の通り、クラス名やファイル名はKEYWORD1の前に記述し、関数名はKEYWORD2の前に記述します。LITERAL1はマクロ定義の名前を強調表示するために使用されますが、このライブラリには関係ないため空白です。名前とKEYWORD1の間にはタブが1つだけあり、スペースはありません。

これでCalcライブラリが完成し、正常に動作します。ライブラリを試してみたいが、入力するのが面倒、またはコピーするのが面倒な場合は、私のGitHubからダウンロードできます：[https://github.com/loovee/Calc](https://github.com/loovee/Calc)

### リソース

[PDFファイルをダウンロード](https://files.seeedstudio.com/wiki/How_to_use_and_write_a_library/res/How_to_use_and_write_a_library.pdf)

## 技術サポートと製品ディスカッション
弊社製品をお選びいただきありがとうございます！製品の使用体験がスムーズになるよう、さまざまなサポートを提供しています。お客様の好みやニーズに応じた複数のコミュニケーションチャネルをご用意しています。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>