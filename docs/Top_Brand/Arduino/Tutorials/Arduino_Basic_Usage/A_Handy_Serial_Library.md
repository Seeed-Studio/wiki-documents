---
description: A Handy Serial Library
title: A Handy Serial Library
tags:
  - Tutorial
keywords:
  - Tutorial
image: https://avatars.githubusercontent.com/u/10758833
slug: /A_Handy_Serial_Library
last_update:
  date: 02/01/2023
  author: w0x7ce

no_comments: false # for Disqus

---

Arduino hadn’t debugging function, maybe this is the first impression of some software engineers. In fact, often we just use the Arduino to do some simple application, even there’s no debugging, and it does not matter. If you want to use the Arduino to do some complex application, such as face recognition, then maybe you have to rethink if you had chosen the wrong platform.

As for some simple application, we can use serial print to debug, and Arduino had provided a very easy to use serial print function.

```c++
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

```c++
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

```c++
printf("a[%d] = %d", 3, 5);
```

As for C++, one line is enough also:


```c++
cout &lt;&lt; "a[" &lt;&lt; 3 &lt;&lt; "] = " &lt;&lt; 5 &lt;&lt; endl;
```

I will glad that if Arduino has the function such as printf or cout, it’s really convenient. It’s lucky that some guy had written such library, you can refer to [http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)
I made some small change to this library, you can download here: [https://github.com/loovee/Streaming](https://github.com/loovee/Streaming) , why not have a try?

##   Resources

- [download pdf file](https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf)

## Tech Support
Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). 
<br />
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
