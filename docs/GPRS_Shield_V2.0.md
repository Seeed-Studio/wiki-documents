---
name: GPRS Shield V2.0
category: Discontinued
bzurl: https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html
oldwikiname:  GPRS Shield V2.0
prodimagename:
surveyurl: https://www.research.net/r/GPRS_Shield_V2
sku:  113030000
---

![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GRPS_SLD.jpg)

Hook your Arduino up to GSM/GPRS cell phone network with GPRS shield! You can use your Arduino/Seeeduino or other main boards to dial a phone number or send a text to your friend via easy to use AT commands now. This new version features a quad-band low power consumption GSM/GPRS module SIM900 as well as a compact PCB antenna. Meanwhile, improvements on interfaces and basic circuit have been taken to make it more concise and reliable. And there’re two choices for you to communicate GPRS shield with the main board -- UART or [SoftwareSerial](http://arduino.cc/en/Reference/SoftwareSerial).

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/GPRS-Shield-V2.0-p-1379.html)

##  Version
---
| Revision | Descriptions                                              | Release      |
|----------|-----------------------------------------------------------|--------------|
| v0.9b    | Initial public release (beta)                             | Mar 3, 2011  |
| v1.2     | Added software port to power on/off of SIM90              | Dec 2, 2011  |
| v1.4     | Re-design the power source circuit, re-lay the PCB layout | Aug 30, 2012 |
| v2.0     | Quad band support and re-design PCB antenna                                     | Feb 3, 2013  |
| v3.0     | Change arduino socket to the latest Arduino Uno standard  | Mar 20, 2015 |

**What's the difference between V2.0 and previous version?**

- Appearance Change

    - V2.0 adopts a standard shield outline as well as a protective shell;
    - Duck antenna is replaced by a compact PCB antenna;
    - Mic and earphone interfaces are replaced by 2-in-1 headset jack on V2.0.

- Power Circuitry Change

    - Replace the original LDO circuitry with DC-DC circuitry. Heat dissipation gets lower and efficiency gets higher up to 80%+. Meanwhile, the EXT_PWR jack on V1.0 was removed. V2.0 can draw current directly from Arduino now without additional 5V adapter.
  ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_Power_circuit.jpg)

- Soft Start Circuitry

    -  Soft start circuitry is added in the new version to smooth out the power shock at the moment the shield turns on, preventing the shield from unexpected reset issue.
  ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/Soft-start_circuit.jpg)

- Antenna Revision

    - The maximum transit power of SIM900 is 30dBm(1w). However the output power of V1.0 is only 0.4W. In this new version, transit power is turned up to 29dBm above(0.8w+), giving you more reliable and firm signal transmission.

##  Specifications
---
| Item                    | Value                                                                          |
|-------------------------|--------------------------------------------------------------------------------|
| Compatible              | Arduino UNO/Seeeduino directly ; Other main board via jumpers                  |
| Selectable interface    | UART, Software serial                                                          |
| Quad band support       | 850/900/1800/1900MHz                                                           |
| Communication support   | Standard - GSM 07.07 & 07.05 and Enhanced - SIMCOM AT Commands                 |
| Operation temperature   | -40°C to +85 °C                                                                |
| Protocol support        | 0710 MUX protocol, embedded TCP/UDP protocol, FTP/HTTP, FOTA, MMS, embedded AT |
| Certification of SIM900 | CE, IC, FCC, ROHS, PTCRB, GCF, ICASA, REACH, AT&T                              |
| Dimensions              | 68.58 * 53.34mm                                                                |
| Power supply            | 5v via 5V pin, 6.5~12v via Vin pin                                             |

## Cautions
---
* Make sure your SIM card is activated.
* GPRS Shield doesn't come with ESD precautions. Take special care when handling it in dry weather.

##  Hardware Overview
---
![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_Shild_V2_hardware_overview.jpg)

*   The factory default setting for the GPRS Shield UART is 19200 bps 8-N-1. (Can be changed using AT commands).
*   Serial port select
    * There’re two choices for you to communicate GPRS shield with the main board while plugging the two jumpers on to the SWserial or HWserial positions. If using SWserial, D7 and D8 will be used by SIM900 of GPRS Shield; if using HWserial, D0 (RX) and D1 (TX) will be used.

    ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_serial_port.png)

* Power on/off by D9
    * Unsolder pad JP default. Solder it if you wanna use software to power on/off the GPRS shield. Set the D9 to a high level, it means the button is pressing. The pad of JP besides the ISP port.
* Breakout of SIM900
    * Some pins of SIM900 are break out beside the ISP port, there're LINEIN_R, LINEIN_L, ADC, PWM1, PWM2, GPIO1~GPIO6, GND, FW_update (DISP_CLK, DISP_DATA, DISP_D/C, DISP_CS), RI, DCD, DSR, CTS, VDD_EXT, LDTR, LRTS. And those pins are pointed from SIM900 without any setting.

  ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_Break.png)

* RTC battery holder
    * It can provide 3v volts to VRTC of SIM900 from CR1220 battery.
* Power
    * Replace the original LDO circuitry with DC-DC circuitry -- TD1410. Heat dissipation gets lower and efficiency gets higher up to 80%+. Meanwhile, the output can up to 4.15V/2A. And there're two input of power supply:
5v pin: Soft start circuitry is added in the new version to smooth out the power shock at the moment the shield turns on, preventing the shield from unexpected reset issue. More detailed changes please refer to Related Reading : Version
    * Vin pin: The range of input voltage are between 6.5v to 12v.
* Antenna
    * The type of Antenna connector is IPEX, and the maximum transit power of SIM900 is 30dBm(1w). More information please see [the Specification of GPRS Antenna](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/Antenna_of_GPRS_.pdf).
* LED Status Description
  <dl><dd><table  cellspacing="0">
  <tr>
  <th scope="col"> **LED**
  </th>
  <th scope="col"> **Status**
  </th>
  <th scope="col"> **Function**
  </th></tr>
  <tr>
  <th scope="row"> Power-on indicator(Green)
  </th>
  <td> Off
  </td>
  <td> Power of GPRS Shield is off
  </td></tr>
  <tr>
  <td>
  </td>
  <td> On
  </td>
  <td> Power of GPRS Shield is on
  </td></tr>
  <tr>
  <th scope="row"> Status Indicator(Red)
  </th>
  <td> Off
  </td>
  <td> Power off
  </td></tr>
  <tr>
  <td>
  </td>
  <td> On
  </td>
  <td> Power on
  </td></tr>
  <tr>
  <th scope="row"> Net indicator(Green)
  </th>
  <td> Off
  </td>
  <td> SIM900 is not working
  </td></tr>
  <tr>
  <td>
  </td>
  <td> 64ms On/800ms Off
  </td>
  <td> SIM900 does not find the network
  </td></tr>
  <tr>
  <td>
  </td>
  <td> 64ms On/3000ms Off
  </td>
  <td> SIM900 finds the network
  </td></tr>
  <tr>
  <td>
  </td>
  <td> 64ms On/300ms Off
  </td>
  <td> GPRS communication
  </td></tr></table></dd></dl>

## Getting Started
---
### Getting Fun With AT Commands
As you receive the GPRS Shield, what would be the first thing you want to do with it? Send out a text (SMS)? Or call up someone (headset required)? You can do all of this by talking to the GPRS Shield using AT Commands - a special language that it understands.

AT Commands are simple textual commands sent to the GPRS modem over its serial interface (UART), so you can use any serial terminal software to communicate with it.

####   Hardware installation

*   **Insert an activated SIM card into SIM Card Holder** - 6 Pin Holder for SIM Cards. Both 1.8 volts and 3.0 volts SIM Cards are supported by SIM900 - voltage type of the SIM card  is automatically detected.
      * Insert the SIM Card into the holder
![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_SIM.JPG)
      * Lock the SIM Card Holder
![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_SIM2.JPG)

*   **Make sure the antenna pad buckled properly**

  ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRSANT.JPG)

*   **Communication port configuration**
The GPRS shield can be controlled via hardware serial port or software serial port of Arduino. Here we use the software serial port as default. Choose it by inserting jumper caps as below.
  ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRSserial.JPG)

*   **Plug into Arduino** - The GPRS Shield, like any other well designed shield, is stackable.

*   **Power up Arduino** - Power up Arduino by USB cable or DC Jack. The Power-on indicator LED should light up once connected.
  ![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRSshieldV2.png)

####   Software
Let's have a fun to control the GPRS shield with AT commands.

The GPRS Shield comes with all accessories that you need to get started with sending data over the GSM network except an Arduino board and a GSM SIM Card. If you want to make voice calls, you would also require a headset with microphone.

**Step 1: Creating a test setup for the GPRS Shield**

!!!note:
    Almost all the AT commands should be sent by following with **carriage return** and you need to select the "+CR"option in the serial port terminal.

To do experiment with AT commands, you would require a way to power up and communicate with your GPRS Shield. The best way to do this using an Arduino Duemilanove board described below. The same steps are applicable for [Seeeduino](http://wiki.seeed.cc/Seeeduino_v4.2/) or [Seeeduino Stalker](http://wiki.seeed.cc/Seeeduino_Stalker_V3.1/).

*   Follow the previous hardware installation steps to set up the hardware system;
*   Make sure the GPRS_TX &amp; GPRS_RX jumpers on the GPRS Shield are mounted in SWSerial position - so GPRS_TX will be connected to D7(RX) and GPRS_RX to D8(TX).
*   Connect the Arduino Duemilanove (or Seeeduino) to your computer by a USB cable.
*   The ATmega328P microcontroller on Duemilanove board has only one UART which is used for communicating with the PC. What we need is an Arduino Sketch running inside the ATmega328P that would emulate a second serial port (UART) by using software serial on the digital pins D8 and D7. All the communication will go through the software serial port and the actual hardware serial port. By doing this, all the data coming from the computer (connected to the actual hardware UART) would be routed to the GPRS Shield (connected to software UART). Then we would be able to issue AT commands to control the GPRS Shield. The block diagram outlining this scheme is shown below.

![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_aurduino_uart.jpg)

For developing such a program, we need to use the SoftwareSerial library. Here is the demo code.
```
//Serial Relay - Arduino will patch a
//serial link between the computer and the GPRS Shield
//at 19200 bps 8-N-1
//Computer is connected to Hardware UART
//GPRS Shield is connected to the Software UART

#include <SoftwareSerial.h>

SoftwareSerial GPRS(7, 8);
unsigned char buffer[64]; // buffer array for data recieve over serial port
int count=0;     // counter for buffer array
void setup()
{
    GPRS.begin(19200);               // the GPRS baud rate
    Serial.begin(19200);             // the Serial port of Arduino baud rate.

}

void loop()
{
    if (GPRS.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield
    {
        while(GPRS.available())          // reading data into char array
        {
            buffer[count++]=GPRS.read();     // writing data into array
            if(count == 64)break;
        }
        Serial.write(buffer,count);            // if no data transmission ends, write buffer to hardware serial port
        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array
        count = 0;                       // set counter of while loop to zero


    }
    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook
    GPRS.write(Serial.read());       // write it to the GPRS shield
}
void clearBufferArray()              // function to clear buffer array
{
    for (int i=0; i<count;i++)
    { buffer[i]=NULL;}                  // clear all index of array with command NULL
}
```
*   Upload the sketch to the Arduino board.  If you do not know how to upload the code, please follow the [instruction](http://wiki.seeed.cc/Upload_Code/).
*   Download and fire up [serial tool](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/Sscom32E.zip) if you don't have one. Choose the correct COM port for Arduino, and set it to operate at **19200** 8-N-1 and then click "Open COM". You can also use AT Command Tester to send AT commands. Please click [here](http://wiki.seeed.cc/AT_Command_Tester_Application/) if you are interesting in it.
*   Power up the SIM900 by pressing the power button in about 2 seconds. The red LED will be on. The green one beside it will blink. If the shield join the network sucessfully, the green LED will blink every 3 seconds.
* You should find the message on the serial monitor as below which is sent by the SIM900 to inform you it has joined the network.

```
RDY

+CFUN: 1

+CPIN: READY

Call Ready

```
If you can not see the messages in the serial monitor, you should click the "send new" option that will add carriage return at the end of AT command and then send AT command "AT+IPR=19200" to set the baud rate of the SIM900.

![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_set_baud_rate.jpg)




**Step 2: Sending a text message (SMS)**

Now that our test setup is ready, let's play around with some AT Commands manually before moving on to program the Arduino to do this. Let's try sending an SMS to start.

*   Create the setup as described in Step 1 above.
*   Through your serial terminal software, send **AT+CMGF=1** and press the Enter key. The GPRS Shield can send SMSes in two modes: Text mode and PDU (or binary) mode. Since we want to send out a human readable message, we will select the text mode. The GPRS Shield will respond with an **OK**.
*   Click "send new" option and send **AT+CMGS="+18888888888"**. This will instruct the GPRS Shield to start to accept text for a new message，numbers mean the specified phone number(replace the number with the phone number of the target phone). The GPRS Shield will send a '_**&gt;'**_ to remind you to type the message. Please note that phone numbers in any AT Command must follow [E.123 format](https://en.wikipedia.org/wiki/E.123) format.

*   Start to type your message, after finishing the typing, click "send hex" option and then send a hex: **1A**. The modem will accept the message and respond with an **OK**. A few moments later, the message should be received on the handset whose number you had specified. I sent "How are you ?". You can check the history by clicking "EXT". The commands history is listed below "Set Multi Char".

![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/Send_a_text_message.jpg)

!!!note:
    If, in spite of following the steps as specified above, you're unable to receive the message on the target handset, you might need to set the SMS Message Center number. Send the following command between the AT+CMGF and AT+CMGS commands:AT+CSCA="+18888888888". Replace the phone number specified with the SMS Center number of your GSM Service Provider. The message center number is specific to each service provider. You can get the message center number by calling up the customer care center of the GSM Service Provider and asking them for it.

**Step 3: Make a telephone call with the AT commands**
- Restart the SIM900 if switching from sending texts to making phone calls.
- Replace the phone number with your target number in the command “ATD18888888888;”(without the quotes) and press Enter key to send it out. If it succeds, a message "ATH OK" will show up as the picture below. Otherwise, "No CRRLIER" will show up instead. The reason might be unexistent phone number or incorrect command format.

**Step 4: Exploring further**

Now that you have gotten a taste of how the AT Commands work, you can try out other commands before moving on to develop sketches for Arduino by using the GPRS Shield.

This involves to create a sketch for sending out these same sequence of AT Commands (on your behalf) out the serial port to the GPRS Shield to perform the same task of sending and SMS, making a call or sending data over a GPRS connection.

You can go through the [AT Commands reference manual](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/AT_Commands_v1.11.pdf) to figure out the sequence of commands. If you develop an Arduino sketch, you find that the GPRS Shield doesn't act as what you expect, then you will need to check your AT Commands and their sequence. To do this, reload the serial relay sketch attached above in the getting started section into ATmega328P and type out the AT Commands manually and check the output. The responses sent back by the GPRS Shield will help you debug the AT Command sequence.

!!!note:
    A C program to perform the same task has also been developed and attached: [Softuart relay atmega328p.zip](https://github.com/SeeedDocument/GPRS_Shield_v1.0/raw/master/res/Softuart_relay_atmega328p.zip "File:Softuart relay atmega328p.zip").

The program was developed on a Windows PC.[AVRStudio4](http://www.atmel.com/dyn/products/tools_card.asp?tool_id=2725) was used as the IDE and [WinAVR](http://winavr.sourceforge.net/) was used as the compiler. The ZIP file contains an AVRStudio4 Project. The C compiler (WinAVR) will generate an Intel Hex (.hex). To upload this .hex file into an Arduino board outside of Arduino IDE would require a program which is able to communicate with the Arduino boards bootloader. [XLoader](http://xloader.russemotto.com/) is such a program which runs on Windows can upload .hex files generated by various compiler into an Arduino Board.

#####   SoftwareSerial library Notes

With Arduino you should be able to use the SoftwareSerial library included with the distribution (instead of NewSoftSerial). However, you must be aware that the buffer reserved for incoming messages are hardcoded to 64 bytes in the library header, "SoftwareSerial.h":

```
 define _SS_MAX_RX_BUFF 64 // RX buffer size
```

This means that if the GPRS module receive more data than the buffer, you are likely to lose it with a buffer overflow! For instance, reading out an SMS from the module with "AT+CMGR=xx" (xx is the message index), you might not even see the message part because the preceding header information (like telephone number and time) takes up a lot of space. The fix seems to be to manually change **_SS_MAX_RX_BUFF** to a higher value (but reasonable so you don't use all your memory!)

The [Softwareserial library](http://arduino.cc/hu/Reference/SoftwareSerial) has the following limitations (taken from arduino page). If use multiple software serial ports, only one can receive data at a time.
This means that if you try to add another serial device such as grove serial LCD you may get communication errors unless you craft your code carefully.

#####  How To Send a Text Message or Dial a Phone Number Using AT Commands

Tn this example we will create an Arduino sketch to allow you to either send a text message or dial a phone number for a voice call when you either type 't' or 'd' respectively in the Arduino's serial comm window.

###### AT Commands For Sending a Text Message

Looking at the SIM900 Commands Set we can see that to send a text message we first have to set the SMS format, this is one using the AT+CMGF command.

The AT+CMGF command can be one of two values: 0, or 1 for "PDU mode" and "text mode" respectively. In "text mode", SMS messages are represented as readable text. In "PDU mode", SMS messages are represented as binary strings encoded in hexadecimal characters. We will use "text mode" in this example, so the command we need to the send to the GPRS shield is:

**AT+CMGF=1\r**

Now that we have set the SMS format we can proceed to send the text message. To send the text message we use the AT+CMGS command. According to the SIM900 AT Command Set, the CMGS command follows this format:

**AT+CMGS=&lt;da&gt;[,&lt;toda&gt;]&lt;CR&gt;**

where &lt;da&gt; is the destination address (phone number), &lt;toda&gt; is the optional type of destination address, and &lt;CR&gt; is the carriage return '\r' character. Once we have send this command the GPRS shield will reply with the '>' character signaling us to enter the actual message.

!!!Note
  The phone number must include the country code, e.g. for a U.S. phone number (555)123-4567 the &lt;da&gt; value must be +15551234567

###### Command(s) For a Voice Call

As per the SIM900 AT Command Set sheet, the command used to dial a number for a voice call is "ATD+xxxxxxxxxx;" where "xxxxxxxxxxx" is the phone number with country code included. A semicolon must be send to set up a voice call, omitting it will set up a data or fax call.

The Arduino code to send a simple text message or dial a voice call is shown below. Don't forget to change the phone number "xxxxxxxxxx" and message "How are you today?" to your own values.

###### Arduino Code:

```
  #include <SoftwareSerial.h>


  SoftwareSerial gprsSerial(7,8);

  void setup()
  {
    gprsSerial.begin(19200); // GPRS shield baud rate
    Serial.begin(19200);   
    delay(500);
  }

  void loop()
  {

    if (Serial.available()) // if there is incoming serial data
     switch(Serial.read()) // read the character
     {
       case 't': // if the character is 't'
         SendTextMessage(); // send the text message
         break;
       case 'd': // if the character is 'd'
         DialVoiceCall(); // dial a number
         break;

     }

    if (gprsSerial.available()){ // if the shield has something to say
      Serial.write(gprsSerial.read()); // display the output of the shield
    }
  }

  /*
  * Name: SendTextMessage
  * Description: Send a text message to a number
  */
  void SendTextMessage()
  {
    Serial.println("Sending Text...");
    gprsSerial.print("AT+CMGF=1\r"); // Set the shield to SMS mode
    delay(100);
    // send sms message, the phone number needs to include the country code e.g. if a U.S. phone number such as (540) 898-5543 then the string must be:
    // +15408985543
    gprsSerial.println("AT+CMGS = \"+xxxxxxxxxx\"");
    delay(100);
    gprsSerial.println("How are you today?"); //the content of the message
    delay(100);
    gprsSerial.print((char)26);//the ASCII code of the ctrl+z is 26 (required according to the datasheet)
    delay(100);
    gprsSerial.println();
    Serial.println("Text Sent.");
  }

  /*
  * Name: DialVoiceCall()
  * Description: Can call/dial a phone number
  */
  void DialVoiceCall()
  {
    gprsSerial.println("ATD+xxxxxxxxxx;");//dial the number, must include country code
    delay(100);
    gprsSerial.println();
  }
```

##  FAQ

Here is the GPRS Shield FAQ that list the frequently asked questions, please read it before use:

*   Why does GPRS Shield can not work with Stalker v2.1/2.0 via software serial port(D7/D8) ?

    Talker v2.1/2.0 has used the Digital Pin(D7/D8) , you need to connect GPRS_TX/GPRS_RX to other Digital Pin as software serial port. And this problem had been solved at Stalker 2.2 version.

*   Why does the I2C can't be used when I assembled the GPRS Shield to Stalker or other Arduino boards ?

    Because GPRS Shield conflicts with other module via I2C . GPRS Shield doesn't use I2C port, you can disconnect the connection from SIM900 I2C port to A4/A5 .  





##  Related Projects
---
![](https://github.com/SeeedDocument/GPRS_Shield_v1.0/raw/master/img/Recipe-arduinophone.png)

This is a demo made by GPRS Shield V2.0.

With this demo, we make a mobile phone named Arduino Phone by  Arduino, GPRS Shield shield and other modules.

[![](https://github.com/SeeedDocument/GPRS_Shield_v1.0/raw/master/img/Wiki_makeitnow_logo.png)](http://www.instructables.com/id/ArduinoPhone/)

![](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/img/GPRS_gas.jpg)
This is a demo made by GPRS Shield V2.0.

With this demo,  we can receive SMS When Gas Leakage at Home.
[![](https://github.com/SeeedDocument/GPRS_Shield_v1.0/raw/master/img/Wiki_makeitnow_logo.png)](https://community.seeedstudio.com/project_detail.html?id=242)

##  Resources

- **[Eagle]** [GPRS Shield v2.0 Schematic and PCB in eagle format](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/GPRS_Shield_eagle_file.zip)
- **[PDF]** [GPRS Shield v2.0 Schematic in PDF format](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/GPRS_Shield_V2_Schematic.pdf)
- **[PDF]** [GPRS Shield v2.0 PCB in PDF format](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/GPRSshield%20V2%20PCB.pdf)
- **[Library]** [GPRS_Shield library on gitHub - based on Suli](https://github.com/Seeed-Studio/GPRS_Shield_Suli)
- **[Library]** [GPRS_SIM900 library on gitHub - Non Suli ](https://github.com/Seeed-Studio/GPRS_SIM900)
- **[Document]** [AT Commands v1.11](https://github.com/SeeedDocument/GPRS_Shield_V2.0/raw/master/res/AT_Commands_v1.11.pdf)
- **[Document]** [SIM900 Hardware Design](http://wiki.seeedstudio.com/images/e/e3/SIM900_HD_V1.05.pdf)
- **[Datasheet]** [Si5902BDC](http://www.vishay.com/docs/70415/si5902bd.pdf)
- **[Datasheet]** [SIM900 Datasheeet](http://www.seeedstudio.com/document/SIM900datasheeet.zip)
- **[Tools]** [SIM900 firmware and tool(firmware:1137B08SIM900M64_ST)](http://wiki.seeedstudio.com/images/8/87/SIM900_firmware_and_tool.zip)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>