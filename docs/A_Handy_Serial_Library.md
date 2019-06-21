---
name: A Handy Serial Library
category: Tutorial
oldwikiname:  A Handy Serial Library
prodimagename:
surveyurl: https://www.research.net/r/A_Handy_Serial_Library
---

Arduino hadn’t debugging function, maybe this is the first impression of some software engineers. In fact, often we just use the Arduino to do some simple application, even there’s no debugging, and it does not matter. If you want to use the Arduino to do some complex application, such as face recognition, then maybe you have to rethink if you had chosen the wrong platform.

As for some simple application, we can use serial print to debug, and Arduino had provided a very easy to use serial print function.
```
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
```
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

```
printf("a[%d] = %d", 3, 5);
```

As for C++, one line is enough also:


```
cout &lt;&lt; "a[" &lt;&lt; 3 &lt;&lt; "] = " &lt;&lt; 5 &lt;&lt; endl;
```

I will glad that if Arduino has the function such as printf or cout, it’s really convenient. It’s lucky that some guy had written such library, you can refer to [http://arduiniana.org/libraries/streaming/](http://arduiniana.org/libraries/streaming/)
I made some small change to this library, you can download here: [https://github.com/loovee/Streaming](https://github.com/loovee/Streaming) , why not have a try?

##   Resources

- [download pdf file](https://github.com/SeeedDocument/A_Handy_Serial_Library/raw/master/res/A_handy_Serial_library.pdf)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>