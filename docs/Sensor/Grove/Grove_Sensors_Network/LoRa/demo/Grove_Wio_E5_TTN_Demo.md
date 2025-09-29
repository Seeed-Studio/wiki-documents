---
title: Grove - Wio-E5 TTN Demo 
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Wio_E5_TTN_Demo
last_update:
  date: 08/28/2023
  author: Salman 
---


## Getting Started

[The Things Network](https://www.thethingsnetwork.org/) provides a global, open LoRaWAN network with a set of open tools and to build your next IoT application at low cost, featuring maximum security and ready to scale. Through robust end-to-end encryption, a secure and collaborative Internet of Things network is built that spans across many countries around the globe. Now operating thousands of gateways providing coverage to millions of people. 

### Preparations

Here is a demo showing you how to connect [TTN (The Things Network)](https://www.thethingsnetwork.org/) and Seeeduino XIAO module via Grove - Wio-E5 module. These modules are able to collect temperature and humidity parameters from the environment and send them back to TTN. The flashing LED lights on the Seeeduino Xiao indicate the status of the temperature and humidity sensor as connecting to TTN cloud.

:::caution
Please ensure the consistent of the frequency band among the end nodes, gateway, and TTN configuration you are using by following this instruction.
The frequency plan this demo applied is for **EU868**.
:::

### Hardware Required

| Seeeduino XIAO | Grove - Wio-E5 | Seeeduino XIAO Expansion Board | Grove - Temperature & Humidity Sensor (DHT11) |
|--------------|--------------|--------------|--------------|
|  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|   <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png" alt="pir" width={600} height="auto" /></p>| <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>|  <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/r/grove-temperature-humidity-sensor-dht11-preview.png" alt="pir" width={600} height="auto" /></p> |[Get ONE Now](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Get ONE Now](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

:::note
If this is your first time using Seeeduino XIAO, please refer to [Seeeduino XIAO's wiki](https://wiki.seeedstudio.com/Seeeduino_Lotus/).
If this is your first time to use Arduino, [Arduino’s website](https://www.arduino.cc/) is a great resource for you to start your Arduino journey.
:::

### Hardware Connection

- **Step 1.** Connect the Wio-E5 module directly to the "UART" slot.

- **Step 2.** Put DH11 into the "A0/D0" socket.

- **Step 3.** Download the code, please refer to the software part.

### Software Preparation

:::note
If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.
Click to learn about detail about [how to install an Arduino Library](https://wiki.seeedstudio.com/How_to_install_Arduino_Library/)
:::

#### Download Library

- **Step 1.** Install the [u8g2 library](https://github.com/olikraus/U8g2_Arduino)

- **Step 2.** Install the [DHT sensor library](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

#### Software Code

Download the example; copy the code stick onto the Aruino IDE and then upload it.

```cpp
# include <Arduino.h>
# include <U8x8lib.h>
# include "DHT.h"

# define DHTPIN 0 // what pin we're connected to

// Uncomment whatever type you're using!
# define DHTTYPE DHT11 // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

static int at_send_check_response(char *p_ack, int timeout_ms, char*p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    Serial1.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (p_ack == NULL)
    {
        return 0;
    }

    do
    {
        while (Serial1.available() > 0)
        {
            ch = Serial1.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }

        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }

    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
char*p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
        u8x8.setCursor(2, 4);
        u8x8.print("led :");
        led = !!data;
        u8x8.print(led);
        if (led)
        {
            digitalWrite(LED_BUILTIN, LOW);
        }
        else
        {
            digitalWrite(LED_BUILTIN, HIGH);
        }
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        u8x8.setCursor(0, 6);
        u8x8.print("                ");
        u8x8.setCursor(2, 6);
        u8x8.print("rssi:");
        u8x8.print(rssi);
    }
    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        u8x8.setCursor(0, 7);
        u8x8.print("                ");
        u8x8.setCursor(2, 7);
        u8x8.print("snr :");
        u8x8.print(snr);
    }
}

void setup(void)
{
    u8x8.begin();
    u8x8.setFlipMode(1);
    u8x8.setFont(u8x8_font_chroma48medium8_r);

    Serial.begin(115200);
    pinMode(LED_BUILTIN, OUTPUT);
    digitalWrite(LED_BUILTIN, HIGH);

    Serial1.begin(9600);
    Serial.print("E5 LORAWAN TEST\r\n");
    u8x8.setCursor(0, 0);

    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"2B7E151628AED2A6ABF7158809CF4F3C\"\r\n");
        at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        delay(200);
        u8x8.setCursor(5, 0);
        u8x8.print("LoRaWAN");
        is_join = true;
    }
    else
    {
        is_exist = false;
        Serial.print("No E5 module found.\r\n");
        u8x8.setCursor(0, 1);
        u8x8.print("unfound E5 !");
    }

    dht.begin();

    u8x8.setCursor(0, 2);
    u8x8.setCursor(2, 2);
    u8x8.print("temp:");

    u8x8.setCursor(2, 3);
    u8x8.print("humi:");

    u8x8.setCursor(2, 4);
    u8x8.print("led :");
    u8x8.print(led);
}

void loop(void)
{
    float temp = 0;
    float humi = 0;

    temp = dht.readTemperature();
    humi = dht.readHumidity();

    Serial.print("Humidity: ");
    Serial.print(humi);
    Serial.print(" %\t");
    Serial.print("Temperature: ");
    Serial.print(temp);
    Serial.println(" *C");

    u8x8.setCursor(0, 2);
    u8x8.print("      ");
    u8x8.setCursor(2, 2);
    u8x8.print("temp:");
    u8x8.print(temp);
    u8x8.setCursor(2, 3);
    u8x8.print("humi:");
    u8x8.print(humi);

    if (is_exist)
    {
        int ret = 0;
        if (is_join)
        {

            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret)
            {
                is_join = false;
            }
            else
            {
                at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else
        {
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
            ret = at_send_check_response("Done", 5000, cmd);
            if (ret)
            {
                recv_prase(recv_buf);
            }
            else
            {
                Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
        delay(1000);
    }
}

```

### TTN Console Configuration Setup

- **Step 1.** Visit [The Things Network](https://www.thethingsnetwork.org) website and sign up for a new account

- **Step 2.** After logging in, click your profile and select **Console**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/1.png" alt="pir" width={1000} height="auto" /></p>

- **Step 3.** Select a cluster to start adding devices and gateways

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/2.png" alt="pir" width="600" height="auto"/></p>

- **Step 4.** Click **Go to applications**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/4.png" alt="pir" width="1000" height="auto"/></p>

- **Step 5.** Click **+ Add application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/5.png" alt="pir" width="400" height="auto"/></p>

- **Step 6.** Fill **Application ID** and click **Create application**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/6.png" alt="pir" width="500" height="auto"/></p>

**Note:** Here **Application name** and **Description** are not compulsory fields. If **Application name** is left blank, it will use the same name as **Application ID** by default

The following is the newly created application

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"/></p>

- **Step 7**: Navigate to `Payload formatters > Uplink`, select **Formatter Type** as **Javascript** and fill the **Formatter parameter** as follows

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/1.png" alt="pir" width="550" height="auto"/></p>

```js
function Decoder(bytes, port) {
  
  var decoded = {};
  if (port === 8) {
    decoded.temp = bytes[0] <<8 | bytes[1];
    decoded.humi = bytes[2] <<8 | bytes[3];
  }

  return decoded;
}
```

- **Step 8**: Upload the Arduino code to Seeeduino XIAO as explained before, and open serial monitor to see the following output

```
Humidity: 50%       Temperature: 25.00 *C
AT+JOIN
+JOIN: Start
+JOIN: NORMAL
+JOIN: Join failed
+JOIN: Done
AT+ID
+ID: DevAddr, 24:40:00:7C
+ID: DevEui, 2C:F7:F1:20:24:90:03:63
+ID: AppEui, 80:00:00:00:00:00:00:07
+JOIN: Join failed
```

Note down **DevEui** and **AppEUi** generated above

- **Step 9**: Go back to the **Overview** page of the created application and click **+ Add end device**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/7.png" alt="pir" width="1000" height="auto"/></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/8.png" alt="pir" width="500" height="auto"/></p>

- **Step 10.** Click **Manually**, to enter the registration credentials manually

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/9.png" alt="pir" width="420" height="auto"/></p>

- **Step 11.** Select the **Frequency plan** according to your region. Also make sure you use the same frequency as the gateway in which you will connect this device to. Select **MAC V1.0.2** as the **LoRaWAN® version** and **PHY V1.0.2 REV B** as the **Regional Parameters version**. These settings are according to the LoraWAN® stack of Wio-E5.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/10.png" alt="pir" width="450" height="auto"/></p>

- **Step 12.** Copy and paste the previously obtained information from **step 8** into **DevEUI** and **AppEUI** fields. **End device ID** field will be automatically filled when we fill **DevEUI**. For **AppKey** field, use: 2B7E151628AED2A6ABF7158809CF4F3C.  

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/LoRa-E5-Module/12.png" alt="pir" width="450" height="auto"/></p>

Finally click **Register end device**

- **Step 13.** Register your LoRaWAN® Gateway with TTN Console. Please refer to the instructions shown [here](https://wiki.seeedstudio.com/The-Things-Indoor-Gateway/#step-2-gateway-registration-on-ttn-console)

If you see the following output on serial monitor after everything is setup, that means the Seeeduino XIAO is successfully connected with TTN and sending the temperature and humidity sensor data!

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/products/113020091/Screen%20Shot%202021-03-09%20at%203.20.00%20PM.png" alt="pir" width="500" height="auto"/></p>

- **Step 14.** Go back to the application page and navigate to **End devices**, select the created device and click **Live data**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/2.png" alt="pir" width="1000" height="auto"/></p>

Here you will see the temperature and humidity sensor data displayed in real-time!

- **Step 15.** Navigate to `Messaging > Downlink`, type **01** under **Payload** and click **Schedule downlink** to **turn on** the **built-in yellow LED** on the Seeeduino XIAO.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-E5/3.png" alt="pir" width="550" height="auto"/></p>

- **Step 16.** Send the **Payload** as **00** to **turn off** the **built-in yellow LED**



## Resources

Datasheet:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Certifications:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

Relevant SDK:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">STM32Cube MCU Package for STM32WL series</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

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


