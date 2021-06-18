# IoT with wireless Wio RP2040 board: Know the Surroundings around You!
Do really know the surroundings around you? Yes? No? Maybe? How is the air quality? How is the surrounding noise? What is the temperature and humidity?  Let's make a device to understand our surroundings in depth.  
Let's see how to get Wio RP2040 mini Dev Board started with wireless function and IoT.

- Hardware
- Software
- Start with Arduino and MQTT
- Code
## Hardware Overview
​

![image.png](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/hardware.jpg)

1. [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html)

2. [Grove - Air Quality Sensor v1.3 - Arduino Compatible](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html)

3. [Grove - Temperature & Humidity Sensor V2.0 (DHT20) / Upgraded DHT11/ I2C Port](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html)

4. [Grove - Sound Sensor Based on LM358 amplifier - Arduino Compatible](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html)

[Grove - Air Quality Sensor v1.3 - Arduino Compatible](https://www.seeedstudio.com/Grove-Air-Quality-Sensor-v1-3-Arduino-Compatible.html) is designed for a comprehensive monitor of indoor air condition. It's responsive to a wide scope of harmful gases, as carbon monoxide, alcohol, acetone, thinner, formaldehyde and so on.

[Grove - Temperature & Humidity Sensor V2.0 (DHT20) / Upgraded DHT11/ I2C Port](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-V2-0-DHT20-p-4967.html) is a high quality, low-cost digital temperature, and humidity sensor. DHT20 features a brand-new ASIC dedicated chip, an improved MEMS semiconductor capacitive humidity module, and a standard on-chip temperature element. With the wider and more precise range of measurement, the DHT20 will be more than suitable for various IoT uses, especially for cases such as precision farming and quality control!

 [Grove - Sound Sensor Based on LM358 amplifier - Arduino Compatible](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM358-amplifier-Arduino-Compatible.html) can be used to detect whether there's sound (like the sound of clapping, noise, etc) surround or not and output the sound strength of the environment.


### Wiring Diagram
![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/wiring.jpg)


## Software Overview

1. Arduino

2. MQTT

## How to Get Started With Arduino

### Install the Arduino IDE

- Arduino IDE is an integrated development environment for Arduino, which is used for single-chip microcomputer software programming, downloading, testing and so on.

- Download and Install [Arduino IDE](https://www.arduino.cc/en/Main/Software) for your desired operating system here.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/download.jpg)

### Install the USB driver

- Arduino connects to the PC via a USB cable. The USB driver depends on the type of USB chip you're using on your Arduino. Note: USB chips are usually printed on the back of the development board.

- Download the [CP2102 USB Driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers). Note: Download according to your OS.

- After the driver installation is completed, connect Arduino to the USB port of PC with a USB cable.

- **For Windows users:** You can see it in **My Computer -> Properties -> Hardware -> Device Management**. A COM will appear.

- **For Mac OS users:** You can navigate to  on the top left corner, and choose About this Mac -> System Report... -> USB. A CP2102 USB Driver should appear.

- If the driver is not installed, or if the driver is installed incorrectly (not matching the chip model), it will appear as an "unknown device" in the device manager. At this point, the driver should be reinstalled.

### Start the Arduino IDE

**1.** Open the **Arduino IDE** on your PC.

**2.** Click on **Tools -> Board-> Boards Manager**，then search "Mbed OS Boards",install "Arduino Mbed OS Boards".

 ![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/search_board.jpg)


**3.** Click on **Tools -> Board->Arduino Mbed OS Boards -> Raspberry Pi Pico** to select the correct Development Board Model. Select **Raspberry Pi Pico** as Board.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/choose_board.jpg)

**4.** Keep pressing the button "**BOOT**" while connecting the board to the PC via a USB cable, until an external drive named "RPI" appears in your PC.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/boot.jpg)

**5.** Upload any sketch. If upload done, we can see the port named "Raspberry Pi Pico".

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/port.jpg)

**6.** Click **Tools -> Port** to select the correct Port. In this case, COM9 is selected.

## How to Get Started with MQTT

### Setting up MQTT client

MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/mqtt1.jpg)

The publisher can create a topic with messages attached to the topic. For example, I can create a new topic "Today's Weather" and the message content is "25 degrees Celsius", and then sent the message to the Server. After receiving the topic message, the publisher distributes the information to any clients that have subscribed to that topic. That is, the subscriber will receive the message of "25 degrees Celsius" only if it subscribes to the topic "Today's Weather". If the subscriber does not subscribe to the topic of "Today's Weather", no matter what message the publisher sends, the subscriber will not receive the message.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/mqtt2.jpg)
Download the MQTTX server software and install it on the computer, and then configure the MQTT server.

---

We will use the free server of "mqtt.p2hp.com" in this project. **Online server**

- Address: mqtt.p2hp.com
- Ports: 1883 (TCP), 8083 (WebSocket)
- Type: EMQ
- MQTT V3.1.1/V5.0 compatible

---

Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server. 
![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/mqtt3.jpg)

After the connection is successful, there will be a pop-up in the upper right corner of the software.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/mqtt4.jpg)

Then set the topic and message below.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/mqtt5.jpg)

![image.png](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/Airquality.jpg)

When data is received, the number of messages is displayed at the top. If you don't see the message, click on the subscription topic. 
​

Here, the deployment of the MQTT client is completed. 

## Code

### 1. Wi-Fi 

```python
#include <Wire.h>

char ap_buf[30][16];
int ap_cnt = 0;
UART _UART2_(p8,p9,NC,NC);
void setup()
{
    pinMode(24, OUTPUT);
    pinMode(21, OUTPUT);
    pinMode(22, OUTPUT);
    pinMode(25, OUTPUT);
    digitalWrite(24, HIGH);
    digitalWrite(21, HIGH);
    digitalWrite(22, HIGH);
    digitalWrite(25, LOW);
    
    _UART2_.begin(115200);
 
    delay(3000);
    Wire.begin();
    
    cmd_send("AT+CWJAP=\"YourWiFi\",\"Password\"");
    Serial.println("send wifi name");
    wait_result();
 
    display_ap();
    delay(5000);
}
 
 
void loop()
{
   
}
 
// send command
void cmd_send(char *cmd)
{
    if(NULL == cmd)return;
    _UART2_.println(cmd);
}
 
 
// wait result
void wait_result()
{
    while(1)
    {
LOOP1:
        char c1=0;
        if(_UART2_.available()>=2)
        {
            c1 = _UART2_.read();
            Serial.print(c1);
            if(c1 == 'O' && 'K' == _UART2_.read()){
              Serial.println("OK");
              return; }      // OK means over
        }
 
        if('('==c1)
        {
            while(_UART2_.available()<3);
            _UART2_.read();
            _UART2_.read();
            _UART2_.read();
 
            int d = 0;
            while(1)
            {
                if(_UART2_.available() && '"' == _UART2_.read());      // find "
                {
                    while(1)
                    {
                        if(_UART2_.available())
                        {
                            char c = _UART2_.read();
                            ap_buf[ap_cnt][d++] = c;
                            if(c == '"' || d==16)
                            {
                                ap_buf[ap_cnt][d-1] = '\0';
                                ap_cnt++;
                                goto LOOP1;
                            }
                        }
                    }
                }
            }
        }
    }
}
 
// display
void display_ap()
{
    char strtmp[16];
    sprintf(strtmp, "get %d ap", ap_cnt);
    Serial.println(strtmp);
 
    delay(2000);
 
    int cnt = ap_cnt;
    int offset = 0;
 
    delay(2000);
   
}
```
### ![image.png](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/wifi.jpg)

### 2. Sensor

- **Step 1.** Visit the [AirQuality_Sensor Library](https://github.com/Seeed-Studio/Grove_Air_quality_Sensor), [Seeed DHT library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor) repositories and download the entire repo to your local drive.

- **Step 2.** Now, the library can be installed to the Arduino IDE. Open the Arduino IDE, and click sketch -> Include Library -> Add .ZIP Library, and choose above mentioned three files that you've have just downloaded one by one.

![](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/library.jpg)

- **Step 3.** Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check [how to upload code](https://wiki.seeedstudio.com/Upload_Code/).

```python

#include "DHT.h" 
#include "Air_Quality_Sensor.h"

#define DHTTYPE DHT20   // DHT 20 Temperature & Humidity Sensor V2.0 (DHT20) 
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin
AirQualitySensor air_sensor(A2);//Air Quality Sensor v1.3
const int sound_pinAdc = A0;//Sound Sensor


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif

void setup() {

    debug.begin(115200);
    
    //DHT20 Temperature & Humidity Sensor
    debug.println("DHTxx test!");
    dht.begin();
    
    //Air Quality Sensor v1.3
    if (air_sensor.init()) {
        Serial.println("Sensor ready.");
    } else {
        Serial.println("Sensor ERROR!");
    }
}

void loop() {
    //DHT20 Temperature & Humidity Sensor
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)

    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }
    
    //Air Quality Sensor v1.3
    int quality = air_sensor.slope();

    Serial.print("air_Sensor value: ");
    Serial.println(air_sensor.getValue());

    if (quality == AirQualitySensor::FORCE_SIGNAL) {
        Serial.println("High pollution! Force signal active.");
    } else if (quality == AirQualitySensor::HIGH_POLLUTION) {
        Serial.println("High pollution!");
    } else if (quality == AirQualitySensor::LOW_POLLUTION) {
        Serial.println("Low pollution!");
    } else if (quality == AirQualitySensor::FRESH_AIR) {
        Serial.println("Fresh air.");
    }
    
    ////Sound Sensor
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(sound_pinAdc);
    }
 
    sum >>= 5;
    Serial.print("sound value: ");
    Serial.println(sum);
   
    delay(1500);
}
```
### ![image.png](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/sensor.jpg)

### 3. MQTT
```python
void setup()
{   
    _UART2_.begin(115200);
 
    //Set MQTT user configuration
    cmd_send("AT+MQTTUSERCFG=0,1,\"Wio_RP2040\",\"\",\"\",0,0,\"\"");
    wait_result();
    //Connect to MQTT Brokers
    cmd_send("AT+MQTTCONN=0,\"mqtt.p2hp.com\",1883,0");
    wait_result();

}

void loop()
{
    //Publish MQTT Messages in string
    cmd_send("AT+MQTTPUB=0,\"air\",\"\",0,0");
    wait_result();
}
```

### 4. Complete Code
```python
#include <Wire.h>
#include "DHT.h" 
#include "Air_Quality_Sensor.h"

#define DHTTYPE DHT20   // DHT 20 Temperature & Humidity Sensor V2.0 (DHT20) 
DHT dht(DHTTYPE);         //   DHT10 DHT20 don't need to define Pin
AirQualitySensor air_sensor(A2);//Air Quality Sensor v1.3
const int sound_pinAdc = A0;//Sound Sensor


#if defined(ARDUINO_ARCH_AVR)
    #define debug  Serial

#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)
    #define debug  SerialUSB
#else
    #define debug  Serial
#endif


char ap_buf[30][16];
int ap_cnt = 0;
UART _UART2_(p8,p9,NC,NC);

void setup()
{
    pinMode(24, OUTPUT);
    pinMode(21, OUTPUT);
    pinMode(22, OUTPUT);
    pinMode(25, OUTPUT);
    digitalWrite(24, HIGH);
    digitalWrite(21, HIGH);
    digitalWrite(22, HIGH);
    digitalWrite(25, LOW);
    
    _UART2_.begin(115200);
 
    delay(3000);
    Wire.begin();
    
    cmd_send("AT+CWJAP=\"CHCK\",\"depot0510\"");
    Serial.println("send wifi name");
    wait_result();
 
    display_ap();
    delay(5000);
    
    //Set MQTT user configuration
    cmd_send("AT+MQTTUSERCFG=0,1,\"Wio_RP2040\",\"\",\"\",0,0,\"\"");
    wait_result();
    //Connect to MQTT Brokers
    cmd_send("AT+MQTTCONN=0,\"mqtt.p2hp.com\",1883,0");
    wait_result();
    
    //Wi-Fi
    Wire.begin();
 
     //DHT20 Temperature & Humidity Sensor
    debug.println("DHTxx test!");
    dht.begin();
    
    //Air Quality Sensor v1.3
    if (air_sensor.init()) {
        Serial.println("Sensor ready.");
    } else {
        Serial.println("Sensor ERROR!");
    } 
 
}
 
 
void loop()
{
    //DHT20 Temperature & Humidity Sensor
    float temp_hum_val[2] = {0};
    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)

    if (!dht.readTempAndHumidity(temp_hum_val)) {
        debug.print("Humidity: ");
        debug.print(temp_hum_val[0]);
        debug.print(" %\t");
        debug.print("Temperature: ");
        debug.print(temp_hum_val[1]);
        if(temp_hum_val[1]>29){
          cmd_send("AT+MQTTPUB=0,\"Temperature\",\"It's so hot,drink more water!\",0,0");
          wait_result();
       }
        debug.println(" *C");
    } else {
        debug.println("Failed to get temprature and humidity value.");
    }
    
    //Air Quality Sensor v1.3
    int quality = air_sensor.slope();

    Serial.print("air_Sensor value: ");
    Serial.println(air_sensor.getValue());

    if (quality == AirQualitySensor::FORCE_SIGNAL) {
        Serial.println("High pollution! Force signal active.");
        cmd_send("AT+MQTTPUB=0,\"AirQuality\",\"High pollution! Force signal active.\",0,0");
        
    } else if (quality == AirQualitySensor::HIGH_POLLUTION) {
        Serial.println("High pollution!");
        cmd_send("AT+MQTTPUB=0,\"AirQuality\",\"High pollution!\",0,0");
        
    } else if (quality == AirQualitySensor::LOW_POLLUTION) {
        Serial.println("Low pollution!");
        cmd_send("AT+MQTTPUB=0,\"AirQuality\",\"Low pollution!\",0,0");
        
    } else if (quality == AirQualitySensor::FRESH_AIR) {
        Serial.println("Fresh air.");
    }
    
    ////Sound Sensor
    long sum = 0;
    for(int i=0; i<32; i++)
    {
        sum += analogRead(sound_pinAdc);
    }
 
    sum >>= 5;
    Serial.print("sound value: ");
    Serial.println(sum);
    if(sum>20){
      cmd_send("AT+MQTTPUB=0,\"Noise\",\"It's too noisy.\",0,0");
      }
   
    delay(1500);
}
 
// send command
void cmd_send(char *cmd)
{
    if(NULL == cmd)return;
    _UART2_.println(cmd);
}
 
 
// wait result of ap scan
// +CWLAP:(3,"360WiFi-UZ",-81,"08:57:00:01:61:ec",1)
void wait_result()
{
    while(1)
    {
LOOP1:
        char c1=0;
        if(_UART2_.available()>=2)
        {
            c1 = _UART2_.read();
            Serial.print(c1);
            if(c1 == 'O' && 'K' == _UART2_.read()){
              Serial.println("OK");
              return; }      // OK means over
        }
 
        if('('==c1)
        {
            while(_UART2_.available()<3);
            _UART2_.read();
            _UART2_.read();
            _UART2_.read();
 
            int d = 0;
            while(1)
            {
                if(_UART2_.available() && '"' == _UART2_.read());      // find "
                {
                    while(1)
                    {
                        if(_UART2_.available())
                        {
                            char c = _UART2_.read();
                            ap_buf[ap_cnt][d++] = c;
                            if(c == '"' || d==16)
                            {
                                ap_buf[ap_cnt][d-1] = '\0';
                                ap_cnt++;
                                goto LOOP1;
                            }
                        }
                    }
                }
            }
        }
    }
}
 
// display
void display_ap()
{
    char strtmp[16];
    sprintf(strtmp, "get %d ap", ap_cnt);
    Serial.println(strtmp);   
 
    delay(2000);
 
    int cnt = ap_cnt;
    int offset = 0;
   
    delay(2000);
   
}
```

## ![image.png](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/complete.jpg)

## Testing

Let's go back to the Arduino to run the complete code, and then observe whether the mqtt client has received the message.

![image.png](https://files.seeedstudio.com/wiki/IoT-with-wireless-Wio-RP2040-board/testing.jpg)


If you get the message successfully, congratulations you have done it. You have already gotten Wio RP2040 mini Dev Board started with wireless function and IoT, and know the surroundings around you.
