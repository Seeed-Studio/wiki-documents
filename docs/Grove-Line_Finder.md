---
title: Grove - Line Finder
category: Sensor
bzurl: https://www.seeedstudio.com/Grove-Line-Finder-p-825.html
oldwikiname: Grove - Line Finder
prodimagename: Grovelinefinder1.jpg
surveyurl: https://www.research.net/r/grove-line-finder
sku: 101020009
---

---
![](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/images/Grovelinefinder1.jpg)

Grove-Line finder is designed for line-following robot. It has an IR emitting LED and an IR sensitive phototransistor. It can output digital signal to a microcontroller so that the robot can reliably follow a black line on white background, or vice versa.

[![](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/images/300px-Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Line-Finder-v1.1-p-2712.html)

## Specification
---
- Power supply :5V DC
- Digital output mode: TTL (High when black is detected, Low when white is detected)
- Connector: 4 pin Buckled Grove interface
- Dimension: 20mm*20mm
- ROHS: YES
- Comparator: MV358
- Photo reflective diode: RS-06WD

!!!Tip
    More details about Grove modules please refer to [Grove System](http://wiki.seeed.cc/Grove_System/)

## Demonstration
---
**With Arduino**

Brick will return HIGH when black line is detected, and LOW when white line is detected. Using the adjustable resistor the detection range can be changed from 1.5cm to 5cm. If the sensor can’t tell between black and white surfaces, you can also use the adjustable resistor to set a suitable reference voltage.

Includes important code snippet. Demo code like :

```
Demo code
{

//------------------------------------------------------------
//Name: Line finder digital mode
//Function: detect black line or white line
//Parameter:   When digital signal is HIGH, black line
//             When digital signal is LOW, white line
//-------------------------------------------------------------
int signalPin =  3;    // connected to digital pin 3
void setup()   {
  pinMode(signalPin, INPUT); // initialize the digital pin as an output:
  Serial.begin(9600);  // initialize serial communications at 9600 bps:
}
// the loop() method runs over and over again,
// as long as the Arduino has power
void loop()
{
  if(HIGH == digitalRead(signalPin))
    Serial.println("black");
    else  Serial.println("white");  // display the color
  	//delay(1000);                  // wait for a second
}

}
```

**With Raspberry Pi**

1. You need a raspberry pi and a grovepi or grovepi+.
2. You need to complete configuring the development enviroment, otherwise follow [here](http://wiki.seeedstudio.com/wiki/GrovePi+#Introducing_the_GrovePi.2B).
3. Connection
  - Plug the sensor to grovepi socket D7 by using a grove cable.

4. Navigate to the demos' directory:

```
 cd yourpath/GrovePi/Software/Python/
```

To see the code

```
   nano grove_line_finder.py   # "Ctrl+x" to exit #
```
```
import time
import grovepi

# Connect the Grove Line Finder to digital port D7
# SIG,NC,VCC,GND
line_finder = 7

grovepi.pinMode(line_finder,"INPUT")

while True:
    try:
        # Return HIGH when black line is detected, and LOW when white line is detected
        if grovepi.digitalRead(line_finder) == 1:
            print "black line detected"
        else:
            print "white line detected"

        time.sleep(.5)

    except IOError:
        print "Error"
```

5.Run the demo.

```
   sudo python grove_line_finder.py
```

## Resources
---
- [Eagle files](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/res/202000970_Grove%20-%20Line%20Finder%20v1.0_eagle%20files.zip)
- [LMV358.PDF](https://github.com/SeeedDocument/Grove_Line_Finder/raw/master/res/Lmv358.pdf)
- [Schematic at Easyeda](https://easyeda.com/Seeed/Grove_Line_Finder_v1_1-dfc99c72325e41ff93a451882fd2e143)

## Tech Support
Please do not hesitate to contact [techsupport@seeed.cc](techsupport@seeed.cc) if you have any technical issue. Or submit the issue into our [forum](http://seeedstudio.com/forum/). 