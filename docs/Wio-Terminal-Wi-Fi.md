# Wi-Fi Connectivity

This wiki introduces how to configure Wi-Fi connectivity on Wio Terminal using the Realtek RTL8720 core.

!!!Note
        Make sure that you have followed through the Network overview, **updated the latest firmware on RTL8720 and downloaded the dependant Arduino libraries.**

## Configuring as Station (STA) Mode

- Include the `AtWifi.h` library in Arduino.

- Configure as STA mode:

```cpp
WiFi.mode(WIFI_STA);
```

### Scanning Wi-Fi Network Example Code

This example will configure itself as Wi-Fi STA mode, scan and print out all the available networks to the Serial.

```cpp
#include "AtWiFi.h"

void setup() {
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(100);

    Serial.println("Setup done");
}

void loop() {
    Serial.println("scan start");

    // WiFi.scanNetworks will return the number of networks found
    int n = WiFi.scanNetworks();
    Serial.println("scan done");
    if (n == 0) {
        Serial.println("no networks found");
    } else {
        Serial.print(n);
        Serial.println(" networks found");
        for (int i = 0; i < n; ++i) {
            // Print SSID and RSSI for each network found
            Serial.print(i + 1);
            Serial.print(": ");
            Serial.print(WiFi.SSID(i));
            Serial.print(" (");
            Serial.print(WiFi.RSSI(i));
            Serial.print(")");
            Serial.println((WiFi.encryptionType(i) == WIFI_AUTH_OPEN) ? " " : "*");
            delay(10);
        }
    }
    Serial.println("");

    // Wait a bit before scanning again
    delay(5000);
}
```

### Connecting to Specified Network Example Code

This example connects to a specified Wi-Fi Network. Change the `ssid` and `password` to your Wi-Fi network.

```cpp
#include "AtWiFi.h"

const char* ssid = "yourNetworkName";
const char* password =  "yourNetworkPassword";

void setup() {
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(2000);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Connecting to WiFi..");
    }
    Serial.println("Connected to the WiFi network");
    Serial.print("IP Address: ");
    Serial.println (WiFi.localIP()); // prints out the device's IP address
    }

void loop() {

}
```

### WiFi Multi Example Code

- Include the `AtWiFi.h`and `WiFiMulti.h` libraries in Arduino.

This example invoke the `WiFiMulti` class, you can use

```cpp
wifiMulti.addAP("ssid", "password");
```

to add several AP Wi-Fi to the list and `wifiMulti.run()` will try to connect to the best signaled Wi-Fi.

**Note:** Change the `SSID` and `Password` according to your Wi-Fi.

```cpp
#include "AtWiFi.h"
#include <WiFiMulti.h>

WiFiMulti wifiMulti;

void setup() {
    Serial.begin(115200);
    delay(10);

    wifiMulti.addAP("ssid_from_AP_1", "your_password_for_AP_1");
    wifiMulti.addAP("ssid_from_AP_2", "your_password_for_AP_2");
    wifiMulti.addAP("ssid_from_AP_3", "your_password_for_AP_3");

    Serial.println("Connecting Wifi...");
    if (wifiMulti.run() == WL_CONNECTED) {
        Serial.println("");
        Serial.println("WiFi connected");
        Serial.println("IP address: ");
        Serial.println(WiFi.localIP());
    }
}

void loop() {
    if (wifiMulti.run() != WL_CONNECTED) {
        Serial.println("WiFi not connected!");
        delay(1000);
    }
}
```

### Wi-Fi Client Example Code

This example demonstrates Wio Terminal configures as STA mode, connects to a specific AP Wi-Fi and sends a HTTP GET request and receive a HTTP response from the web server on the same network.

- Change the `ssid` and `password` to your Wi-Fi.

- Change the `host` to the Web server IP address.

To simply test the example, you can start a simple web server using Python on your PC:

1. Copy and save the following in your local drive, and name it `index.html`.

```html
<html>
<body>
Hello World!
</body>
</html>
```

2. In Powershell/Terminal, change directory to the path you just saved `index.html` and run the following code to start a simple Web server using Python:

For Pyhton 3:

```py
python3 -m http.server 80
```

For Python 2:

```py
python -m SimpleHTTPServer 80
```

3. Change the `host` to the IP address of this PC in the Arduino code. Also, change the `ssid` and `password` in Arduino code to the same Wi-Fi that is connected with this PC.

4. Upload the code to Wio Terminal, check Serial monitor to observe results.

```cpp
#include <AtWiFi.h>

const char* ssid = "yourNetworkName";
const char* password =  "yourNetworkPassword";

void setup() {
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    delay(2000);

    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.println("Connecting to WiFi..");
    }
    Serial.println("Connected to the WiFi network");
    Serial.print("IP Address: ");
    Serial.println (WiFi.localIP()); // prints out the device's IP address
}


void loop() {
    const uint16_t port = 80; // Default port
    const char* host = "192.168.0.10";  // Target Server IP Address

    Serial.print("Connecting to ");
    Serial.println(host);

    // Use WiFiClient class to create TCP connections
    WiFiClient client;

    if (!client.connect(host, port)) {
        Serial.println("Connection failed.");
        Serial.println("Waiting 5 seconds before retrying...");
        delay(5000);
        return;
    }

    // This will send a request to the server
    //uncomment this line to send an arbitrary string to the server
    //client.print("Send this data to the server");
    //uncomment this line to send a basic document request to the server
    client.print("GET /index.html HTTP/1.1\n\n"); // sending HTTP GET request

    int maxloops = 0;

    //wait for the server's reply to become available
    while (!client.available() && maxloops < 1000) {
        maxloops++;
        delay(1); //delay 1 msec
    }
    if (client.available() > 0) {
        //read back one line from the server
        String line = client.readString(); // Read from the server response
        // Proceed various line-endings
        line.replace("\r\n", "\n");
        line.replace('\r', '\n');
        line.replace("\n", "\r\n");
        Serial.println(line);
    } else {
        Serial.println("client.available() timed out ");
    }

    Serial.println("Closing connection.");
    client.stop();

    Serial.println("Waiting 5 seconds before restarting...");
    delay(5000);
}
```

## Configuring Wi-Fi as Access Point (AP) Mode

- Include `AtWiFi.h`, `WiFiClient.h` and `WifiAP.h` libraries in Arduino.

- Configure AP Wi-Fi `ssid` and `password`.

- Initialize Wi-Fi Server on port 80:

```cpp
WiFiServer server(80);
```

- Initialize AP with the `ssid` and `password`:

```cpp
WiFi.softAP(ssid, password);
```

- Start the Server:

```cpp
server.begin();
```

### Configure as AP Mode Example Code

This example configures Wio Terminal as a simple web server and allows you to connect to its AP network and control the hardware based on the response on the HTTP.

```cpp
/*
    WiFiAccessPoint.ino creates a WiFi access point and provides a web server on it.

    Steps:
    1. Connect to the access point "yourAp"
    2. Point your web browser to http://<This-AP-IP>/H to turn the LED on or http://<This-AP-IP>/L to turn it off
       (<This-AP-IP> should be replaced with the IP got in terminal/SerialPort, see Note 1)
     OR
     Run raw TCP "GET /H" and "GET /L" on PuTTY terminal with IP address (see Note 1) and 80 as port

    Created for arduino-esp32 on 04 July, 2018
    by Elochukwu Ifediora (fedy0)
*/

#include <AtWiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>

#define LED_BUILTIN 2   // Set the GPIO pin where you connected your test LED
                        // or comment this line out if your dev board has a built-in LED

// Set these to your desired credentials.
const char* ssid = "yourAP";
const char* password = "yourPassword";

WiFiServer server(80);


void setup() {
    pinMode(LED_BUILTIN, OUTPUT);

    Serial.begin(115200);
    Serial.println();
    Serial.println("Configuring access point...");

    // You can remove the password parameter if you want the AP to be open.
    WiFi.softAP(ssid, password);
    IPAddress myIP = WiFi.softAPIP();
    /*
     * Note 1
     * Record this IP, will used by Client (such as Web Browser)
     */
    Serial.print("AP IP address: ");
    Serial.println(myIP);
    server.begin();

    Serial.println("Server started");
}

void loop() {
    WiFiClient client = server.available();   // listen for incoming clients

    if (client) {                             // if you get a client,
        Serial.println("New Client.");           // print a message out the serial port
        String currentLine = "";                // make a String to hold incoming data from the client
        while (client.connected()) {            // loop while the client's connected
            if (client.available()) {             // if there's bytes to read from the client,
                char c = client.read();             // read a byte, then
                Serial.write(c);                    // print it out the serial monitor
                if (c == '\n') {                    // if the byte is a newline character

                    // if the current line is blank, you got two newline characters in a row.
                    // that's the end of the client HTTP request, so send a response:
                    if (currentLine.length() == 0) {
                        // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
                        // and a content-type so the client knows what's coming, then a blank line:
                        client.println("HTTP/1.1 200 OK");
                        client.println("Content-type:text/html");
                        client.println();

                        // the content of the HTTP response follows the header:
                        client.print("Click <a href=\"/H\">here</a> to turn ON the LED.<br>");
                        client.print("Click <a href=\"/L\">here</a> to turn OFF the LED.<br>");

                        // The HTTP response ends with another blank line:
                        client.println();
                        // break out of the while loop:
                        break;
                    } else {    // if you got a newline, then clear currentLine:
                        currentLine = "";
                    }
                } else if (c != '\r') {  // if you got anything else but a carriage return character,
                    currentLine += c;      // add it to the end of the currentLine
                }

                // Check to see if the client request was "GET /H" or "GET /L":
                if (currentLine.endsWith("GET /H")) {
                    digitalWrite(LED_BUILTIN, HIGH);               // GET /H turns the LED on
                }
                if (currentLine.endsWith("GET /L")) {
                    digitalWrite(LED_BUILTIN, LOW);                // GET /L turns the LED off
                }
            }
        }
        // close the connection:
        client.stop();
        Serial.println("Client Disconnected.");
    }
}
```