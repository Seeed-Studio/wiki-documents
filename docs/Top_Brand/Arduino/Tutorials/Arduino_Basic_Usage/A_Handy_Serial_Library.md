---
description: A Handy Serial Library
title: A Handy Serial Library

image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /A_Handy_Serial_Library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Arduino hadn’t debugging function, maybe this is the first impression of some software engineers. In fact, often we just use the Arduino to do some simple application, even there’s no debugging, and it does not matter. If you want to use the Arduino to do some complex application, such as face recognition, then maybe you have to rethink if you had chosen the wrong platform.

As for some simple application, we can use serial print to debug, and Arduino had provided a very easy to use serial print function.

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
Besides, there is Serial.print, Serial.write and so on. When you are familiar with these functions, you will find that these function is not so friendly actually, just have a look at the following code:

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

To print a[3]=5, it can take 4 lines of code, troublesom? Remember the C language lessons, it takes only one line of code:

```cpp
printf("a[%d] = %d", 3, 5);
```

As for C++, one line is enough also:


```cpp
cout << "a[" << 3 << "] = " << 5 << endl;
```

I will glad that if Arduino has the function such as printf or cout, it’s really convenient. It’s lucky that some guy had written such library, you can refer to [http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)
I made some small change to this library, you can download here: [https://github.com/loovee/Streaming](https://github.com/loovee/Streaming) , why not have a try?

##   Resources

- [download pdf file](https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf)

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
