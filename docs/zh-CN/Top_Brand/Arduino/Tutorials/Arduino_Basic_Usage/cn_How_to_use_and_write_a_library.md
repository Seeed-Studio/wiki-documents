---
description: 如何使用和编写库
title: 如何使用和编写库

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/How_to_use_and_write_a_library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Arduino 的流行很大程度上依赖于大量优秀且易于使用的库。Arduino 库使用面向对象的 C++ 类库，您可以轻松使用它而无需了解库的实现细节。

您可以在路径：\arduino-1.0.5\libraries 中找到 Arduino 库。其中有一个示例，包含一些演示来帮助您理解和使用库。
使用库非常简单，这里我们介绍如何编写库。

那么让我们开始吧，我们在这里编写一个简单的计算库。包含以下函数：

```cpp
int sum(int a, int b);
int minus(int a, int b);
```

是的，这非常简单，很明显第一个函数返回两个数的和，而第二个函数返回差值。
首先，我们建立一个名为 Calc 的文件夹，这也是库的名称。
然后我们建立一个 Calc.h 文件，并填入内容：

```cpp
#ifndef __CALC_H__
#define __CALC_H__

class Calc{
public:
    int sum(int a, int b);                  // return sum
    int minus(int a, int b);                // return difference
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

为了帮助用户理解库的使用，我们建立了一个 examples 文件夹。其中有一个名为 cale_test 的演示，代码如下：

```cpp
// demo of calc library
#include <Calc.h>

void setup()
{
    Serial.begin(9600);

    Serial.print("10+15 = ");
    Serial.println(calc.sum(10, 15));
    Serial.print("100-19 = ");
    Serial.println(calc.minus(100, 19));

    Serial.println("Calc Library test over!");
}

void loop()
{

}

```

当使用 Arduino IDE 时，您会看到一些库函数会显示为红色，而其他的则不会。显然，让函数名和头文件名以及一些宏定义显示为红色使代码看起来更美观，并且容易检查错误。
为了帮助我们创建的这个库能够在 IDE 中显示为红色，您需要在 Calc 文件夹中添加一个 keyboards.txt 文件，keyboards.txt 内容如下：

```cpp
#######################################
# Syntax Coloring Map For Calc
#######################################

#######################################
# Datatypes (KEYWORD1)
#######################################
Calc	KEYWORD1
calc	KEYWORD1

#######################################
# Methods and Functions (KEYWORD2)
#######################################
sum	KEYWORD2
minus	KEYWORD2

#######################################
# Constants (LITERAL1)
#######################################
```


如您所见，类名或文件名写在 KEYWORD1 之前，函数名写在 KEYWORD2 之前。至于 LITERAL1，用于高亮显示宏定义的名称，这与此库无关，所以为空。注意名称和 KEYWORD1 之间只有一个制表符，没有空格。
这样，我们完成了我们的 Calc 库，它工作正常。如果您想尝试这个库而不想麻烦地输入甚至复制，您可以访问我的 github 并下载它：[https://github.com/loovee/Calc](https://github.com/loovee/Calc)

###   资源

[下载 pdf 文件](https://files.seeedstudio.com/wiki/How_to_use_and_write_a_library/res/How_to_use_and_write_a_library.pdf)

## 技术支持和产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>