---
name: Grove Shield for Wio Lite
category: Shield
bzurl: 
oldwikiname:
prodimagename: 
surveyurl: 
sku: 103020252
---

![enter image description here](https://github.com/SeeedDocument/Grove-Shield-for-Wio-Lite/raw/master/img/Grove-Shield-for-Wio-Lite-V1.0-wiki.jpg)

The Grove Shield for Wio Lite is made for Seeed Studio Wio Lite Series. Now the Wio Lite W600 is available, we will release more Wio boards soon. Also, this Grove Shield can work with Adafruit Feather Boards. It brings 200+ Grove modules to Wio Lite and Feather community. 


This Shield can break out the processor pins of Wio Lite (for instance, it is SAM D21 for Wio Lite W600) into the form of header and Grove connectors. There are 4 Grove digital connectors and 4 Grove analog connectors, a Grove UART port, and a Grove I2C port. 



<p style="text-align:center"><a href="https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>



## Specification

| Parameter             | Value/Range    |
|-----------------------|----------------|
| Operating voltage     | 3.3 / 5V       |
| Operation Temperature | -25℃ to +85℃ |
| Analog Ports          | 4              |
| Digital Ports         | 4              |
| UART Ports            | 1              |
| I2C Ports             | 1              |
| Size                  | 60mm x52mm     |



## Compatible Boards

The Base Shield is tested and fully compatible with following boards:

- [Wio Lite - W600](https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html)
- [Wio Lite - MG126](https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html)
- Adafruit SAMD21 based Feather Board 


And this board is also form factor compatible with the other Adafruit Feather Boards. Please match the pin number when you use this shield with those Adafruit Feather Boards.



## Hardware Overview



![](https://github.com/SeeedDocument/Grove-Shield-for-Wio-Lite/raw/master/img/Grove-Shield-for-Wio-Lite-V1.0.jpg)



- **Analog Ports**: include 4 anlog ports, 5 anlog pins
 
>A0 Port including A0 and A1 pins 

>A1 Port including A1 and A2 pins 

>A2 Port including A2 and A3 pins 

>A3 Port including A3 and A4 pins

- **Digital Ports**: include 4 digital ports, 5 digital pins
 
>D5 Port including D5 and D6 pins 

>D6 Port including D6 and D9 pins 

>D9 Port including D9 and D10 pins 

>D10 Port including D10 and D11 pins

!!!Attention
        Since adjacent ports contain the same pin, for example, both port A0 and port A1 have A1 pins, be careful not to have pin conflicts when using adjacent ports at the same time.For instance if module X uses A1 pin of A0 port, then you should not use A1 pin of A1 port for another module. 


- **UART Port**: 1 UART port.

- **I2C Ports**: 1 I2C ports.

- **Power Switch**: If you use USB type C to power your Wio Lite board, then select the 5V mode, and if you use the lipo battery, please select the 3.3V mode. 


### Pinout

For the pinout, please refer to the silkscreen on the backside of this shield.

![](https://github.com/SeeedDocument/Grove-Shield-for-Wio-Lite/raw/master/img/wiki-pinout.jpg)





## Resources

- **[ZIP]** [Grove Shield for Wio Lite Schematic File](https://github.com/SeeedDocument/Grove-Shield-for-Wio-Lite/raw/master/res/Grove%20Shield%20for%20Wio%20Lite_v1.0_190716.zip)




## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>