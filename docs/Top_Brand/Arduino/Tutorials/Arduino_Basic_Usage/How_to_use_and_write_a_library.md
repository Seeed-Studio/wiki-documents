---
description: How to use and write a library
title: How to use and write a library

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /How_to_use_and_write_a_library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Arduino popularity largely dependent on a large number of excellent and easy to use Library. The Arduino Library using object-oriented C + + class library from, you can use it easily without knowing the implementation details of the Library.

You can fine Arduino Library in the path: \arduino-1.0.5\libraries. And there’s an example in it, which have some demo to help you understand and use the Library.
It’ very easy to use a Library, here we introduce how to write a Library.

Then let’s go, we write a simple calculate Library here. Include the following function:

```cpp
int sum(int a, int b);
int minus(int a, int b);
```

Yes, It’s very simple, it’s obvious that the first function return the sum of two numbers, while the second function return minus.
Firstly, we built a folder named Calc, it’s also the name of the Library.
Then we built a Calc.h file, and fill it:

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

To help users to understand the use of the Library, we built an examples folder. And there’s a demo named cale_test, code folowing:

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

When using the Arduino IDE, you will see some library functions will be displayed in red, while others do not. Obviously, let the function name and the header file names as well as some macro definitions displayed in red makes the code look more beautiful, and easy to check for errors.
To help us create this library can be displayed on the IDE into the red; you need to add a keyboards.txt file in Calc folder, keyboards.txt as follows:

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


As you can see, the class name or file name written before KEYWORD1, the function name written before KEYWORD2. As for LITERAL1, used to highlight the name of the macro definition, which is not related to this library, so empty. Note that between the name and KEYWORD1 has only one tabs, no spaces.
Thus, we finish our Calc Library, and it works fine. If you want to try at the library and not bother to type even bother to copy, you can go to my github and download it: [https://github.com/loovee/Calc](https://github.com/loovee/Calc)

###   Resources

[download pdf file](https://files.seeedstudio.com/wiki/How_to_use_and_write_a_library/res/How_to_use_and_write_a_library.pdf)

## Tech Support & Product Discussion
Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
