---
description: 一个便捷的串口库
title: 一个便捷的串口库

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/A_Handy_Serial_Library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Arduino没有调试功能，这可能是一些软件工程师的第一印象。实际上，我们通常只是使用Arduino来做一些简单的应用，即使没有调试功能，也没有关系。如果你想使用Arduino来做一些复杂的应用，比如人脸识别，那么也许你需要重新考虑是否选择了错误的平台。

对于一些简单的应用，我们可以使用串口打印来调试，Arduino提供了非常易于使用的串口打印功能。

```cpp
void setup()
{
    Serial.begin(115200);

    Serial.println("hello world");
}

void loop()
{
    // add code here
}
```
此外，还有Serial.print、Serial.write等等。当你熟悉这些函数后，你会发现这些函数实际上并不那么友好，看看下面的代码：

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
    // add code here
}
```

要打印a[3]=5，需要4行代码，麻烦吗？回想一下C语言课程，只需要一行代码：

```cpp
printf("a[%d] = %d", 3, 5);
```

对于C++，一行也足够了：


```cpp
cout << "a[" << 3 << "] = " << 5 << endl;
```

如果Arduino有像printf或cout这样的函数，我会很高兴，这真的很方便。幸运的是，有人已经编写了这样的库，你可以参考 [http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)
我对这个库做了一些小的修改，你可以在这里下载：[https://github.com/loovee/Streaming](https://github.com/loovee/Streaming) ，为什么不试试呢？

##   资源

- [下载pdf文件](https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf)

## 技术支持与产品讨论
感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>