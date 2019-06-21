---
name: GPRS Shield V3.0
category: Shield
bzurl: https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html
oldwikiname:  GPRS Shield V3.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V3
sku:  113030009
---

![](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/img/GPRS_Shield_V3.0_p1.jpg)

This is version 3.0 of GPRS Shield.
Hook your Arduino up to GSM/GPRS cell phone network with GPRS shield! You can use your Arduino/Seeeduino or other main boards to dial a phone number or send a text to your friend via easy to use AT commands now.
GPRS Shield features a quad-band low power consumption GSM/GPRS module SIM900 as well as a compact PCB antenna.Meanwhile, improvements on interfaces and basic circuit have been taken to make it more concise and reliable.
And there’re two choices for you to communicate GPRS shield with the main board -- UART or SoftwareSerial.


[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html)

##  Version
---
| Revision | Descriptions                                              | Release      |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | Initial public release (beta)                             | Mar 3, 2011  |
| v1.2     | Added software port to power on/off of SIM90              | Dec 2, 2011  |
| v1.4     | Re-design the power source circuit, re-lay the PCB layout | Aug 30, 2012 |
| v2.0     | Quad band support and re-design PCB antenna                                     | Feb 3, 2013  |
| v3.0     | Change arduino socket to the latest Arduino Uno standard  | Mar 20, 2015 |

**What's the difference between V3.0 and previous version?**

 - Change the arduino socket to the latest Arduino Uno standard. Except this, all the features are same with the previous version.

## Cautions
---
* Make sure your SIM card is activated.
* GPRS Shield doesn't come with ESD precautions. Take special care when handling it in dry weather.

##  Hardware Overview
---
![](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/img/Gprs_shield_v3_layout1.png)

Please link to the documentation of [GPRS Shield V2.0](http://wiki.seeed.cc/GPRS_Shield_V2.0/) for specifications and application guide.

##  FAQs

**Q1: How to modify Code for leonardo?**

A1: Here is the code. 

```
#include <SoftwareSerial.h>

unsigned char buffer[64]; // buffer array for data recieve over serial port
int count = 0;     // counter for buffer array

void setup()
{
    Serial1.begin(19200);               // the GPRS baud rate   
    Serial.begin(19200);             // the Serial port of Arduino baud rate.
}

void loop()
{
    if (Serial1.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while (Serial1.available())          // reading data into char array
        {
            buffer[count++] = Serial1.read();     // writing data into array
            if (count == 64)
                break;
        }
    
        for ( int j=0;j<count;j++)
        {
          Serial.write(buffer[j]);
        }
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero
    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
        Serial1.write(Serial.read());       // write it to the GPRS shield
}

void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i < count; i++)
    {
        buffer[i] = NULL;
    }                               // clear all index of array with command NULL
}
```

**Q2: How Update the firmware of SIM900?**

Q2: Please download the firmware "SIM_900_AGPS_instructions" from Resource module on the wiki,if you have any problem of software or hardware.And this latest one can support HTTPS ,etc.More information please refer to the introduction within. 

**Q3: What about RTC of GPRS shield?**

Q3: The specification of SIM900 says it has a RTC backup,but we have not used it so far. Maybe you can refer to the manual and make a demo yourself or we would make it in the future.

**Q4: I can't send or receive any SMS with this GPRS shield.**

A4: Please follow below instructions. 

- Please make sure that the SIM card is well inserted 
- Check the card on the phone whether it works.
- Try to upload the test code from our wiki and send AT commands to see whether any good returns.
- Try to change the "#define _SS_MAX_RX_BUFF 64 // RX buffer size" in "libraries\SoftwareSerial\SoftwareSeriall.h" to "#define _SS_MAX_RX_BUFF 128 // RX buffer size
     
**Q5: Two alternative ways to help to wake up the GPRS shield**

A5: Here are the 2 ways. 

- Pull DTR pin low : The serial port will be active after DTR is pulled to low for 20ms
- RTC alarm expires 

**Q6: Which type of SIM cards work with GPRS Shield?**

A6: SIM900 used in GPRS Shield supports 850/900/1800/1900MHz GSM bands.

##  Resources

- **[Eagle]** [GPRS Shield v3.0 Schematic and PCB in eagle format](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/GPRS_Shield_V3.0_sch_pcb.zip)
- **[PDF]** [GPRS Shield v3.0 Schematic in PDF format](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/GPRS_Shield_v3.0%20sch.pdf)
- **[PDF]** [GPRS Shield v3.0 PCB in PDF format](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/GPRS%20Shield%20v3.0%20PCB.pdf)
- **[Library]** [GPRS_Shield library on gitHub - based on Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Library]** [GPRS_SIM900 library on gitHub - Non Suli ](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Document]** [AT Commands v1.11](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/AT_Commands_v1.11.pdf)
- **[Document]** [SIM900 Hardware Design](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/SIM900_HD_V1.05.pdf)
- **[Datasheet]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Datasheet]** [SIM900 Datasheeet](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/SIM900datasheeet.zip)
- **[Datasheet]** [SIM_900_AGPS_instructions](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/SIM_900_AGPS_instructions.zip)
- **[Tools]** [SIM900 firmware and tool(firmware:1137B08SIM900M64_ST)](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/1137B08SIM900M64_ST.zip)
- **[Tools]** [SIM900 firmware and tool(firmware:1137B13SIM900M64_ST)](https://github.com/SeeedDocument/GPRS_Shield_V3.0/raw/master/res/1137B13SIM900M64_ST.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>