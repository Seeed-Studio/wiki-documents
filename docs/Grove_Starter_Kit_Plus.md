---
name: Grove - Starter Kit Plus
category: Others
bzurl: https://www.seeedstudio.com/Grove-Starter-Kit-Plus-p-1294.html
oldwikiname: Grove - Starter Kit Plus
prodimagename: Grove-Starter_Kit_Plus.jpeg
surveyurl: https://www.research.net/r/Grove_Starter_Kit_Plus
sku:  110020000
---

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grove-Starter_Kit_Plus.jpeg)

Welcome to enter the world of Grove! Grove is a collection of various modular sensors and actuators that help you dive into and enjoy the electronic world without jitter. Before we discuss those Grove modules one by one, you need to seat yourself and finish some preparations.

**1. What’s Arduino?**

Arduino is a flexible and easy-to-learn open source development platform that enjoys great fame among makers, geeks and interactive artists. It ignited the prosperity of the ongoing maker movement. Tons of creative projects are brought to life surrounding Arduino and its collaborative community, including our Grove system. To get started with Arduino, you need to own one first. Arduino and its clones are available over countless websites and even retail stores. One Google search is enough to get you one.

**2. Arduino IDE Installation**

Arduino is also the name of a programming IDE based on C/C++. After you get your Arduino, you should install the IDE. Depending on OS version, the specific installation varies. Thankfully Arduino team provides us a detailed installation guide for most OS systems:

[http://arduino.cc/en/Guide/HomePage](http://arduino.cc/en/Guide/HomePage)

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Arduino_1.jpg)

**3. Language Reference**

But what if you have bare idea what the programming language is about? Arduino team also provides a good and comprehensive website for you to learn:

[http://arduino.cc/en/Reference/HomePage](http://arduino.cc/en/Reference/HomePage)

Now you have got yourself ready for the Grove exploration.

### 1. Grove Base Shield Introduction

The Grove base shield plugs into an Arduino and is the foundation of the Grove system. All I/O ports of the Arduino are exposed and adapted into 22 Grove connectors which include digital I/O, analog I/O, and specialized ports (I2C, SPI, UART).

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grove-base_shield_v1.3.jpeg)

In the center, surrounded by the yellow lines, are 13 digital I/O ports. These can be used to read and control digital Grove modules, such as the light sensor and LEDs. Some of the digital I/O ports can also be used as PWM (pulse width modulation) outputs. By generating PWM waves, the Arduino can control the movement of a stepper motor or fade an LED. Within the green lines, on the left-hand side, are 5 analog input ports. Analog inputs are typically used to read analog sensors, like a potentiometer or a temperature sensor but these ports can also be used as digital I/O ports. Lastly, the specialized ports are outlined in red: two I2C ports, one SPI port, and one UART port. You’ll use these special ports with more sophisticated Grove modules, like the 3-axis accelerometer and the serial Bluetooth module.

The Grove compatible sensors contained in this pack will use one of the following ports: a digital port, an analog port, or an I2C port. Refer to the wiring instructions and sample code below for each Grove sensor. Ten Grove cables are included in this pack. Simply plug the Grove cables into the sensors and base shield. This enables plug and play operations with no soldering.

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/GroveCable.jpg)

### 2. Grove – Button(P)**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Bgpushb1.jpg)

**Description**

Serving as a ubiquitous button, this one is a basic part for lazy hands. Just plug it onto the base shield. Then here you have a wire-free neat button.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/ButtonPicture.jpg)

This example shows you how to turn on or off an LED via this button.
```
<pre>int button = 3;   //attach a button to digital pin 3
int LED = 7;      //attach an LED to digital pin 7

void setup()
{
    pinMode(button, INPUT);  //define button an INPUT device
    pinMode(LED, OUTPUT);    //define LED an OUTPUT device
}

void loop()
{
    int buttonState = digitalRead(button);  //read the status of the button
    if(buttonState == 1)
    digitalWrite(LED,1);
    else
    digitalWrite(LED,0);
}</pre>
```
**Tips**

This is a momentary button. That means it only outputs HIGH when pressed on. And once released, it no longer outputs HIGH but LOW. This is a favorite feature for projects like Moss coders, but if you like a stable push button, move on to the Grove – Switch(P) below.

###  3. Grove – Switch(P)

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/SwitchP.jpg)

**Description**

This switch is a mini SPDT slide. You can switch the signal to LOW or HIGH through it. Different from the Grove – Button(P) above, this one outputs steady states.
**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Switch1.jpg)

You can totally replace Grove – Button(P) with this switch without tweaking a line in its example.

**Tips**

“P” stands for “panel mount”. For Grove modules included a “P” in its name, the design goal is neat and wire-free HID.

###  4. Grove – Touch Sensor

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/TouchSensor.jpg)

**Description**

This touch sensor is another substitute for a common button. When you touch the circular area on this pad, it will output HIGH. Better than the button, touch sensor has no wear-out problem.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Touch1.jpg)

You can totally replace Grove – Button(P) with this switch without tweaking a line in its example.

**Tips**

This touch sensor measures the capacitance change on its sensitive area to determine its output. So whether you touch the pad on the front of it or backward, the result remains the same. If you need a “P” version, just flip over it and that’s it!

###  5. Grove – Magnetic Switch

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Magnetic_Switch.jpg)

**Description**

The Grove magnetic switch detects the presence of a magnet. It uses a CT10, a single-pole, single throw switch. Magnetic switches (also known as Reed switches) are used in door and window sensors for burglar alarm systems, modern laptops to detect when the lid is closed, and speed sensors on bicycle wheels. When the ambient magnetic field reaches its threshold, it will output HIGH on its signal pin.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/MagneticSwitch1.jpg)

You can totally replace Grove – Button(P) with this switch without tweaking a line in its example.

**Tips**

In some applications, magnetic switches have replaced traditional mechanical switches and have less wear and tear.

###  6. Grove – Red LED

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grove-LED.jpg)

**Description**

LED is the most familiar parts for beginners, no “one of”. We use them to indicate, to create light effect and so on. This kit includes LEDs of 3 colors to meet your display and show basic need.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/LEDKit.jpg)

We already used an LED as an indicator in examples above. And here let’s make some light effect beyond the plain on/off operation, to fade an LED.
```
<pre>/* This is an example code from Arduino, you can open it via this path in Arduino IDE: File --&gt; Example --&gt; 1.Basic --&gt; Fade */

int brightness = 0;    // how bright the LED is
int fadeAmount = 5;    // how many points to fade the LED by

void setup()
{
    // declare pin 9 to be an output:
    pinMode(9, OUTPUT);
}

void loop()
{
    // set the brightness of pin 9:
    analogWrite(9, brightness);
    // change the brightness for next time through the loop:
    brightness = brightness + fadeAmount;
    // reverse the direction of the fading at the ends of the fade:
    if (brightness == 0 || brightness == 255)
    {
        fadeAmount = -fadeAmount ;
    }
    // wait for 30 milliseconds to see the dimming effect
    delay(30);
}</pre>
```
**Tips**

This LED series has 6 colors to cater for different preference. They are all capable of “Panel Mount” and the other LEDs not included in this kit are:

1. Grove – Purple LED(3mm);
2. Grove – White LED(5mm);
3. Grove – Multi Color Flash LED(5mm).

###  7. Grove – Buzzer

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grovebuzzer.jpg)

**Description**

Buzzer, or Piezo speaker, is probably your first electronic component that utters. Besides being used as an alarm or indicator, button is totally capable of singing a song. Try and have fun with it!

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/BuzzerKit1.jpg)

This is a brief example from Oomlout.com, playing you a household nursery rhyme – “Twinkle Twinkle Little Star”.
```
<pre>/* Melody
 * (cleft) 2005 D. Cuartielles for K3
 *
 * This example uses a piezo speaker to play melodies.  It sends
 * a square wave of the appropriate frequency to the piezo, generating
 * the corresponding tone.
 *
 * The calculation of the tones is made following the mathematical
 * operation:
 *
 *       timeHigh = period / 2 = 1 / (2 * toneFrequency)
 *
 * where the different tones are described as in the table:
 *
 * note  frequency  period  timeHigh
 * c          261 Hz          3830  1915
 * d          294 Hz          3400  1700
 * e          329 Hz          3038  1519
 * f          349 Hz          2864  1432
 * g          392 Hz          2550  1275
 * a          440 Hz          2272  1136
 * b          493 Hz          2028 1014
 * C         523 Hz         1912  956
 *
 * http://www.arduino.cc/en/Tutorial/Melody
 */

int speakerPin = 9;

int length = 15; // the number of notes
char notes[] = "ccggaagffeeddc "; // a space represents a rest
int beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };
int tempo = 300;

void playTone(int tone, int duration) {
    for (long i = 0; i &lt; duration * 1000L; i += tone * 2) {
        digitalWrite(speakerPin, HIGH);
        delayMicroseconds(tone);
        digitalWrite(speakerPin, LOW);
        delayMicroseconds(tone);
    }
}

void playNote(char note, int duration) {
    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };
    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };

    // play the tone corresponding to the note name
    for (int i = 0; i &lt; 8; i++) {
        if (names[i] == note) {
            playTone(tones[i], duration);
        }
    }
}

void setup()
{
    pinMode(speakerPin, OUTPUT);
}

void loop() {
    for (int i = 0; i &lt; length; i++) {
        if (notes[i] == ' ')
        {
            delay(beats[i] * tempo); // rest
        }
        else
        {
            playNote(notes[i], beats[i] * tempo);
        }

        // pause between notes
        delay(tempo / 2);
    }
}</pre>
```
**Tips**

How Piezo buzzer works? Usually there are two ceramic wafers in each Piezo buzzer. When voltages are given to them, they attract or reject each other. The air vibration caused by the shake of these wafers emits sound. When the shaking frequency changes the sound frequency will change alongside.

###  8. Grove – Vibrator

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Gvib.jpg)

**Description**

This is a miniature vibration motor suitable for non-audible indicators. When setting High, this motor can create the vibration effect just like the vibration mode of your phone.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Vibrator1.jpg)

You can totally use it as an LED, but also you can create some beats with it. Upload the buzzer’s example to this vibrator and check out the vibration version of “Twinkle Twinkle Little Star”.

**Tips**

The power of one unit is pretty limited. Want something bigger? Vibrator matrix is worthy of a try.

###  9. Grove – Rotary Angle Sensor

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grove-Rotary_Angle_Sensor.jpg)

**Description**

This is a 10Kohm linear rotary potentiometer. It has 300 degrees active range. Also designed as a HID device, “panel mount” feature is added. But before becoming a lovely and friendly HID, DIY a rotary cap for it!

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Rotaty1.jpg)

This example shows you how to read the rotary angle sensor.
```
<pre>int potentiometer = 0;

void setup()
{
    Serial.begin(9600); //set the serial communication frequency at 9600 bits per sec
    pinMode(potentiometer, INPUT);
}

void loop()
{
    int value = analogRead(potentiometer);
    Serial.println(value); //print the value on the serial monitor screen
    delay(1000); //wait 1000ms before printing next value
}</pre>
```
**Tips**

Rotary potentiometer looks quite similar to rotary encoder. But they are totally not the same in fact.
Functionally, rotary potentiometer is essentially a slide potentiometer, just in a circle shape. It reflects the position in analog way like a slide potentiometer does. But rotary encoder counts the angle it rotated by taking notes, say a click, and then outputs the data processed by the chip on the board in analog or digital way.

You can also tell the difference on their exteriors. Rotary potentiometer has a active range, say 300 degrees. But Rotary encoder can just go round and round in one direction.

###  10. Grove - Sound Sensor

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Sound_Sensor.jpg)

**Description**

The Grove sound sensor is an electric microphone that enables your project to respond to environmental sounds. The board contains a potentiometer to control the sound input level.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Sound1.jpg)

This example sets a threshold to a LED. When the intensity of ambient sound reaches the preset threshold, the LED turns on.
```
<pre>int ledPin = 9;                       //attach a LED to Digital 12
int thresholdValue = 0;                 // the threshold to turn on or off the LED

void setup()
{
    pinMode(ledPin, OUTPUT);          //set the LED on Digital 12 as an OUTPUT
}

void loop()
{
    int sensorValue = analogRead(A0); //read the sensorValue on Analog 0
    if(sensorValue&gt;thresholdValue)
    digitalWrite(ledPin,HIGH);
    delay(200);
    digitalWrite(ledPin,LOW);
}</pre>
```
**Tips**

The electric microphone collects sound intensity for all frequencies. And the potentiometer acts as the doorman. When you rotate it completely clockwise, it lets everything go through, and when you rotate it completely counterclockwise, none of it can go through.

###  11. Grove – Light Sensor (P)

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grove-Light_SensorP1.jpg)

**Description**

The light sensor, also known as the light dependent resistor (LDR), is a commonly used sensor in a wide variety of applications from DIY projects to industrial automation. Typically the resistance of the light sensor decreases when the ambient light intensity increases.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Light1.jpg)

This example will turn on an LED when the light intensity falls below the preset threshold. The light sensor is attached to the Arduino analog pin 0 (the bottom left analog Grove connector) and the LED is attached to Grove digital connector 12 on the base shield.
```
<pre>int ledPin=12;                  //attach a LED to Digital 12
int thresholdvalue=400;       //the threshold to turn on or off the LED

void setup()
{
    pinMode(ledPin,OUTPUT);           //set the LED on Digital 12 as an OUTPUT
}

void loop()
{
    int sensorValue = analogRead(0); //the light sensor is attached to analog 0
    if(sensorValue&lt;thresholdvalue)
    {
        digitalWrite(ledPin,HIGH);
    }
    else
    {
        digitalWrite(ledPin,LOW);
    }
}</pre>
```
**Tips**

The output of the analog light sensor ranges from 0 to 1023, but the output is not linear with the ambient light intensity. Below is a table to help you understand what the output really means.

<table  cellspacing="0" width="80%">
<tr>
<th scope="col"> Sensor Value
</th>
<th scope="col"> Illuminance (LUX)
</th>
<th scope="col"> Description (adapted from Wikipedia)
</th></tr>
<tr>
<td> 100
</td>
<td> &lt;1
</td>
<td>
</td></tr>
<tr>
<td> 200
</td>
<td> ~1
</td>
<td> Full moon overhead at tropical latitudes
</td></tr>
<tr>
<td> 300
</td>
<td> ~3
</td>
<td> Twilight in the city
</td></tr>
<tr>
<td> 400
</td>
<td> ~6
</td>
<td>
</td></tr>
<tr>
<td> 500
</td>
<td> ~10
</td>
<td>
</td></tr>
<tr>
<td> 600
</td>
<td> ~15
</td>
<td>
</td></tr>
<tr>
<td> 700
</td>
<td> ~35
</td>
<td> Family living room
</td></tr>
<tr>
<td> 800
</td>
<td> ~80
</td>
<td> Office building light in hallway
</td></tr>
<tr>
<td> 900
</td>
<td> &gt;100
</td>
<td> Very dark, overcast day
</td></tr></table>

###  12. Grove – Temperature Sensor

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Bgtemp1.jpg)

**Description**

The Grove temperature sensor uses a thermistor to determine the ambient temperature. The detection range of this sensor is between -40 to 125 degrees Celsius with an accuracy of ±1.5℃. However it doesn’t output the temperature value directly. To get the specific temperature value, we will use the formula in the code below.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/TemperatureKit1.jpg)

This example shows how to convert the raw output of the sensor into the specific temperature value. You can see the output data in Celsius in the serial monitor.
```
<pre>int a;
int del=1000;                // duration between temperature readings
float temperature;
int B=3975;                  //B value of the thermistor
float resistance;

void setup()
{
    Serial.begin(9600);
}

void loop()
{
    a=analogRead(0);
    resistance=(float)(1023-a)*10000/a;
    temperature=1/(log(resistance/10000)/B+1/298.15)-273.15;
    delay(del);
    Serial.println(temperature);
}</pre>
```
**Tips**

Where does the intrinsic function to find the temperature come from? It’s a variation of the Steinhart-Hart equation, a widely used approximation that gives T (temperature) as a function of R (resistance of the thermistor). The original equation is:

All three parameters in the equation above can be described by one parameter: B. Within the industry people characterize thermistors by B value, as defined in our example. So the built-in function is actually a variation based on the B parameter equation.

###  13. Grove – Relay

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Twig-Relay1.jpg)

**Description**

Relay is a useful tool to magnify your Arduino’s control ability! Feed the control signal through the Grove interface, and relay will control the open/close of the external circuit that connected to the screw terminals. The voltage of the external circuit can run up to 220V! So grab this relay and start some really tough projects!

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/RelayKit1.jpg)

Following is an example of using a button to control the relay.
```
<pre>const int buttonPin = 3;     // the button is attached to digital pin 3
const int relayPin =  9;     // the relay is attached to digital pin 9
int buttonState = 0;

void setup()
{
    pinMode(relayPin, OUTPUT);
    pinMode(tiltPin, INPUT);
}

void loop()
{
    // read the state of the button:
    buttonState = digitalRead(buttonPin);
    if (buttonState == 1)   digitalWrite(relayPin, HIGH);
    else   digitalWrite(relayPin, LOW);
    delay(10);
}</pre>
```
**Tips**

Relay is an electronically controlled mechanical switch. The size of one varies according to its capability of carrying current. The bigger a relay (essentially just the plastic box part) is, the larger the current it can carry.

###  14. Grove – Screw Terminal

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Grove-screw_terminal.jpg)

**Description**

This is a little tool in case you need to merge the quick prototyping Grove system with other prototyping circuits. Tighten up the signal wires you need to the screw terminals. Then you can use the external circuit as a common Grove module.

###  15. Grove – Servo

[[![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Servo.jpg)

**Description**

Servo is absolutely a fun motion control device to play! Via a servo library built in Arduino IDE, you can locate it at any position between 0 to 180 degrees. With 4 shafts in different shapes coming, this servo is ready to drive a little fan, lift an object, or mimic a clock hand.

**Example**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Servo1.jpg)

Servo is a kind of analog actuators. However Arduino can’t output analog signal. To approximate the analog signal required by analog actuator, Arduino adopts PWM (Pulse Width Modulization) to cope with this. Not all Grove ports can be used as analog outputs. The available ports are D3, D5, D6, D9, D10 and D11. Here is an example how we use a potentiometer to control the position of the servo.
```
<pre>#include &lt;Servo.h&gt;
Servo groveServo; //create a object

int potentiometer = 0;
int shaft;

void setup()
{
    groveServo.attach(3); //the servo is attached to D3
    pinMode(potentiometer, INPUT);
}

void loop()
{
    shaft = analogRead(potentiometer);
    shaft = map(shaft, 0, 1023, 0, 179);
    //analog input data range from 1~1023, but servo
    groveServo.write(shaft);             //only reflects to data ranging from 1~179.
    delay(15);
}</pre>
```
**Tips**

Inside the gearbox are a set of gears. When the servo is working, don’t rudely try to reverse its direction by your hand, because this could cause permanent damage to the gears.

##  Demo Projects
---
###  1. A Cup Of Flowers

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/A_Cup_of_Flower.jpg)

**Description**

Would you like a cup of flowers to ease your exhausted heart? This project is made up of Grove – LED and one Grove – Touch Sensor. With the sensor being touched, those lovely LEDs will shine you a warm and comfortable light effect.

**Materials List**

<dl><dd>1. Arduino x 1;
</dd><dd>2. Grove – Base Shield x 1;
</dd><dd>3. Grove – LED x 6;
</dd><dd>4. Grove – Touch Sensor x 1;
</dd><dd>5. 6 x 6cm Color paper x 6;
</dd><dd>6. 9V battery &amp; 9V battery clip x 1.
</dd></dl>

!!!Note
     The number of LEDs is arbitrary. There are three of them contained in the basic kit. But you can increase or decrease it depending on the volume of your cup. I have a big cup here, so I added three more from our website.

**Steps**

**1. Fold The Buds **

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Fold_the_buds.jpg)

Choose one flower pattern you like and follow its steps to create some of them. One Google search may help a lot in finding one. There are so many origami hobbyists and artists over the Internet who’d like to share their handcrafts.

I chose tulip here, but sunflower, rose and lily also sound great!

When folding the bud, you need to leave a small hole on its button for the Grove cable to go through.

**2. Set Up**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Set_up.jpg)

Connect the buds and the touch sensor onto the Grove – Base Shield with the 10cm Grove cable. And then upload the code to your controller.
```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); //pin of touch sensor
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```
**3. Power Up &amp; Settle Down**

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Battery.jpg)

Use a portable 9V battery to provide power to the flowers and settle it down in the cup. Finished! Enjoy your cup of flowers!

###  2. How You Doing!

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/How_you_doing.jpg)

(downloaded form think.bigchief.it)

**Description**

How do you say hello to a friend? Big Chief would say “what’s better than a shake?” When one of these Big Chief paper toys lean his back against the others, they will shake to say hi!

**Materials List**

<dl><dd>1. Arduini x 1;
</dd><dd>2. Grove – Base Shield x 1;
</dd><dd>3. Grove – Magnetic Switch x 1;
</dd><dd>4. Grove – Vibrator x 1;
</dd><dd>5. Paper toys x 2;
</dd><dd>6. Magnet x 1;
</dd><dd>7. 9V battery &amp; 9V battery clip x 1.
</dd></dl>

!!!Note
    The number of LEDs is arbitrary. There are three of them contained in the basic kit. But you can increase or decrease it depending on the volume of your cup. I have a big cup here, so I added three more from our website.

**Steps**

**1. Print It Out! **

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Print_it_out.jpg)

Choose one pattern you like over the Internet. Make sure there is enough room for a magnet or a magnetic switch plus a vibrator. Same as the origami flower above, you can find tons of them on the Internet.

**2. Fill The Organs In **

Focus when cutting the paper toys. Only in that way you can get a neat one. After that, time to fill some organs to them.
I pasted a magnet on the back of Big Cihef A(let’s call it this name!). I stuck it there with double-sided adhesive tape.

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Stuck1.jpg)

And for Big Chief B, I pasted a magnetic switch on his back, the same position as A, and a vibrator on his foots.

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Stuck2.jpg)

**3. Glue Them Up **

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Stuck3.jpg)

Carefully follow the instruction on the printed sheet. Plug the Grove cables into two Grove Modules we used in Big Chief B. Then you will get two cute paper toys like above.

**4. Upload Program **

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Stuck4.jpg)

Upload the code below to your Arduino. By doing this, you bring life to them.

```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```
##  Related Projects

If you want to make some awesome projects by Grove - Starter Kit Plus, here's some projects for reference.

###  Intel Edison Live Temperature Display

![](https://github.com/SeeedDocument/Grove_Starter_Kit_Plus/raw/master/img/Intel_Edison_Live_Temperature_Display.jpg)

This is an IoT demo make by Intel Edison and Grove - Starter Kit Plus.
Intel have released an Intel IoT Developer kit that you can get to help developers and techies to get their hands on a simple piece of kit and start developing applications for use in the everyday world.

[<font color="#FF0000">**I want to make it.**</font>](http://www.seeedstudio.com/recipe/94-intel-edison-live-temperature-display.html)

###  Share Your Awesome Projects with Us

Born with the spirit of making and sharing, that is what we believe makes a maker.

And only because of this , the open source community can be as prosperous as it is today.

It does not matter what you are and what you have made, hacker, maker, artist and engineers,

as long as you start sharing your works with others,

you are being part of the open source community and you are making your contributions .

Now share you awesome projects on with us on [Recipe](http://www.seeedstudio.com/recipe/), and win a chance to become the Core User of Seeed.

*   Core Users, are those who showing high interests and significant contributions in Seeed products.
*   We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improving the product performance and user experience. And for most of cases if our Core Users have any good ideas for making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.

<font color="#FF0000">Get more information about Core User please email to: recipe@seeed.cc</font>

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>