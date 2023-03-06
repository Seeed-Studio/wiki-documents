---
description: Overview
title: Overview
keywords:
- Wio_terminal RTC
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-RTC
last_update:
  date: 1/17/2023
  author: jianjing Huang
---

# RTC Overview

This wiki introduces how to use the built-in RTC functionality inside the SAMD51 core within Wio Terminal for you to keep track of time. This feature saves you from adding an external RTC module to the system!

![](https://files.seeedstudio.com/wiki/Wio-Terminal-RTC/demo.png)

## Installing the Seeed_Arduino_RTC Library For Wio Terminal

1. Visit the [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC) repositories and download the entire repo to your local drive.

2. Now, the Seeed_Arduino_RTC can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_RTC` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Example Code

THe following code is the basic usage of the RTC library for SAMD51:
>For more API reference, please check [here](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)

```cpp
#include "RTC_SAMD51.h"
#include "DateTime.h"

RTC_SAMD51 rtc;
void setup()
{
    rtc.begin();

    Serial.begin(115200);

    while (!Serial)
    {
        ;
    }

    DateTime now = DateTime(F(__DATE__), F(__TIME__));
    Serial.println("adjust time!");
    rtc.adjust(now);

    now = rtc.now();

    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();

    DateTime alarm = DateTime(now.year(), now.month(), now.day(), now.hour(), now.minute(), now.second() + 15);

    rtc.setAlarm(0,alarm); // match after 15 seconds
    rtc.enableAlarm(0, rtc.MATCH_HHMMSS); // match Every Day

    rtc.attachInterrupt(alarmMatch); // callback whlie alarm is match

}

void loop()
{
}

void alarmMatch(uint32_t flag)
{

    Serial.println("Alarm Match!");
    DateTime now = rtc.now();
    Serial.print(now.year(), DEC);
    Serial.print('/');
    Serial.print(now.month(), DEC);
    Serial.print('/');
    Serial.print(now.day(), DEC);
    Serial.print(" ");
    Serial.print(now.hour(), DEC);
    Serial.print(':');
    Serial.print(now.minute(), DEC);
    Serial.print(':');
    Serial.print(now.second(), DEC);
    Serial.println();
}
```

## Advanced RTC Usage

You may also use NTP to get the time for the RTC.

- For this demo, you must go through the **[Wio Terminal Network wiki](https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/)** first.

### Dependent libraries

- Wio Temrinal Network Related libraries

- [Seeed_Arduino_RTC](https://github.com/Seeed-Studio/Seeed_Arduino_RTC)

- [millisDelay](https://github.com/ansonhe97/millisDelay)

```cpp
#include <AtWiFi.h>
#include <millisDelay.h>
#include <Wire.h>
#include "RTC_SAMD51.h"
#include "DateTime.h"


const char ssid[] = "Your-network"; // add your required ssid
const char password[] = "Your-password"; // add your own netywork password

millisDelay updateDelay; // the update delay object. used for ntp periodic update.

unsigned int localPort = 2390;      // local port to listen for UDP packets

// switch between local and remote time servers
// comment out to use remote server
//#define USELOCALNTP

#ifdef USELOCALNTP
    char timeServer[] = "n.n.n.n"; // local NTP server 
#else
    char timeServer[] = "time.nist.gov"; // extenral NTP server e.g. time.nist.gov
#endif
const int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message

byte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets

// declare a time object
DateTime now;

// define WiFI client
WiFiClient client;

//The udp library class
WiFiUDP udp;

// localtime
unsigned long devicetime;

RTC_SAMD51 rtc;

// for use by the Adafuit RTClib library
char daysOfTheWeek[7][12] = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

void setup() {

    Serial.begin(115200);

    while (!Serial); // wait for serial port to connect. Needed for native USB


    // setup network before rtc check 
    connectToWiFi(ssid, password);

    // get the time via NTP (udp) call to time server
    // getNTPtime returns epoch UTC time adjusted for timezone but not daylight savings
    // time
    devicetime = getNTPtime();

    // check if rtc present
    if (devicetime == 0) {
        Serial.println("Failed to get time from network time server.");
    }

    if (!rtc.begin()) {
        Serial.println("Couldn't find RTC");
        while (1) delay(10); // stop operating
    }

    // get and print the current rtc time
    now = rtc.now();
    Serial.print("RTC time is: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // adjust time using ntp time
    rtc.adjust(DateTime(devicetime));

    // print boot update details
    Serial.println("RTC (boot) time updated.");
    // get and print the adjusted rtc time
    now = rtc.now();
    Serial.print("Adjusted RTC (boot) time is: ");
    Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));

    // start millisdelays timers as required, adjust to suit requirements
    updateDelay.start(12 * 60 * 60 * 1000); // update time via ntp every 12 hrs

}

void loop() {

    if (updateDelay.justFinished()) { // 12 hour loop
        // repeat timer
        updateDelay.repeat(); // repeat

        // update rtc time
        devicetime = getNTPtime();
        if (devicetime == 0) {
            Serial.println("Failed to get time from network time server.");
        }
        else {
            rtc.adjust(DateTime(devicetime));
            Serial.println("");
            Serial.println("rtc time updated.");
            // get and print the adjusted rtc time
            now = rtc.now();
            Serial.print("Adjusted RTC time is: ");
            Serial.println(now.timestamp(DateTime::TIMESTAMP_FULL));
        }
    }
}


void connectToWiFi(const char* ssid, const char* pwd) {
    Serial.println("Connecting to WiFi network: " + String(ssid));

    // delete old config
    WiFi.disconnect(true);

    Serial.println("Waiting for WIFI connection...");

    //Initiate connection
    WiFi.begin(ssid, pwd);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }

    Serial.println("Connected.");
    printWifiStatus();

}


unsigned long getNTPtime() {

    // module returns a unsigned long time valus as secs since Jan 1, 1970 
    // unix time or 0 if a problem encounted

    //only send data when connected
    if (WiFi.status() == WL_CONNECTED) {
        //initializes the UDP state
        //This initializes the transfer buffer
        udp.begin(WiFi.localIP(), localPort);

        sendNTPpacket(timeServer); // send an NTP packet to a time server
        // wait to see if a reply is available
        delay(1000);
        if (udp.parsePacket()) {
            Serial.println("udp packet received");
            Serial.println("");
            // We've received a packet, read the data from it
            udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer

            //the timestamp starts at byte 40 of the received packet and is four bytes,
            // or two words, long. First, extract the two words:

            unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);
            unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);
            // combine the four bytes (two words) into a long integer
            // this is NTP time (seconds since Jan 1 1900):
            unsigned long secsSince1900 = highWord << 16 | lowWord;
            // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:
            const unsigned long seventyYears = 2208988800UL;
            // subtract seventy years:
            unsigned long epoch = secsSince1900 - seventyYears;

            // adjust time for timezone offset in secs +/- from UTC
            // WA time offset from UTC is +8 hours (28,800 secs)
            // + East of GMT
            // - West of GMT
            long tzOffset = 28800UL;

            // WA local time 
            unsigned long adjustedTime;
            return adjustedTime = epoch + tzOffset;
        }
        else {
            // were not able to parse the udp packet successfully
            // clear down the udp connection
            udp.stop();
            return 0; // zero indicates a failure
        }
        // not calling ntp time frequently, stop releases resources
        udp.stop();
    }
    else {
        // network not connected
        return 0;
    }

}

// send an NTP request to the time server at the given address
unsigned long sendNTPpacket(const char* address) {
    // set all bytes in the buffer to 0
    for (int i = 0; i < NTP_PACKET_SIZE; ++i) {
        packetBuffer[i] = 0;
    }
    // Initialize values needed to form NTP request
    // (see URL above for details on the packets)
    packetBuffer[0] = 0b11100011;   // LI, Version, Mode
    packetBuffer[1] = 0;     // Stratum, or type of clock
    packetBuffer[2] = 6;     // Polling Interval
    packetBuffer[3] = 0xEC;  // Peer Clock Precision
    // 8 bytes of zero for Root Delay & Root Dispersion
    packetBuffer[12] = 49;
    packetBuffer[13] = 0x4E;
    packetBuffer[14] = 49;
    packetBuffer[15] = 52;

    // all NTP fields have been given values, now
    // you can send a packet requesting a timestamp:
    udp.beginPacket(address, 123); //NTP requests are to port 123
    udp.write(packetBuffer, NTP_PACKET_SIZE);
    udp.endPacket();
}

void printWifiStatus() {
    // print the SSID of the network you're attached to:
    Serial.println("");
    Serial.print("SSID: ");
    Serial.println(WiFi.SSID());

    // print your WiFi shield's IP address:
    IPAddress ip = WiFi.localIP();
    Serial.print("IP Address: ");
    Serial.println(ip);

    // print the received signal strength:
    long rssi = WiFi.RSSI();
    Serial.print("signal strength (RSSI):");
    Serial.print(rssi);
    Serial.println(" dBm");
    Serial.println("");
}
```
