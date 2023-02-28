---
title: Grove - Mini Camera
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Grove-Mini_Camera/
slug: /Grove-Mini_Camera
last_update:
  date: 01/09/2022
  author: gunengyu
---

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Grove_camera.jpg)

If you are searching a small size camera, perhaps, Grove-Mini Camera would be your best choice. It’s a mini camera which can be controlled by Arduino. It has integrated image processing to generate 1280\*720 JPEG image. The captured pictures are stored in SD card and you can read SD card information via Mini 8Pin USB interface.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Mini-Camera-p-1578.html)

Features
-------

- Standard USB Interface and Grove Interface
- High resolution
- Tiny size and light weight

:::tip
    More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)
:::
Specifications
-------------

| Item                         | Performance Parameter |
|------------------------------|-----------------------|
| CPU                          | ARM9                  |
| Video Decode                 | H.263 Accele          |
| Video Format                 | AVI                   |
| Video Encode                 | MPEG4                 |
| Video Resolution             | 640\*480              |
| Video Frame Rate             | 30FPS                 |
| Run Software                 | support AVI Player    |
| Photo Format                 | JPEG                  |
| Image Resolution             | 1280\*720             |
| Charge mode                  | DC5V                  |
| Data Communication Interface | Mini 8Pin USB         |
| Storage Medium               | Micro SD (Max 32G)    |

Demonstration
-------------

Different from general camera, Grove - Mini Camera can be controlled by Arduino/Seeeduino.

Now let us use the Grove - Mini camera to achieve this function: shoot a picture every time when someone approaches.

To do it, we need a **Grove - PIR Motion sensor** which can spot any motion within a certain scope.

Let us start to make it:

- Plug SD card into SD card socket, SD card is not included in this Grove and its size can't be larger than 32G.
- Connect Grove - Mini Camera to D2 port of **Grove - Base Shield**, and Grove - PIR Motion Sensor to D5 port.
- Plug Grove - Base Shield into Arduino/Seeeduino, then connect Arduino/Seeeduino to PC using a USB cable.

![](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/img/Connecting_Picture.JPG)

- Open Arduino IDE, copy and paste the code below to a new sketch:

```
    /*Using digital 2 to control Camera*/
    /*Using digital 5 to receive sensor signal*/
    #define KEY 2
    #define PIR_MOTION_SENSOR 5  
     
    void setup()
    { 
      Serial.begin(9600);
      pinMode(KEY,OUTPUT);
      pinMode(PIR_MOTION_SENSOR,INPUT);
      delay(100);
      enterStandbyMode();
      makeVideo(5000);

    }
    void loop()
    {
        int sensorValue = digitalRead(PIR_MOTION_SENSOR);
        if(sensorValue == HIGH)  //when the sensor value is HIGH, someone is in here
        {
           takePicture();
               delay(5000);      
        }
    }
    void takePicture(void)
    {
       digitalWrite(KEY,HIGH);
       delay(1000);
       digitalWrite(KEY,LOW);
       delay(1000);
    }
    void enterStandbyMode(void)
    {
      //set the key pin as high level for 2s,enter the standby state  
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
    void makeVideo(long int videoTime)
    {
      //set the key pin as high level for 2s again, from the standby state to video state
      digitalWrite(KEY,HIGH);
      delay(2000);
      digitalWrite(KEY,LOW);
      delay(videoTime); //make a  video for videoTime.Its unit is ms.  
     // stop the video
      digitalWrite(KEY,HIGH);
      delay(1000);
      digitalWrite(KEY,LOW);
      delay(1000);
    }
    void PoweroffMode(void)
    {
      //set the key pin as high level for 5s,enter the poweroff state  
      digitalWrite(KEY,HIGH);
      delay(5000);
      digitalWrite(KEY,LOW);
      delay(1000); 
    }
```

- Upload the code.
- Now there should be a video in the SD card because we call the function once during Setup(). To play the video, you can either directly connect the camera to PC via USB cable or use a reader to read it. And if somebody approaches when it's working, you should also find some pictures in the SD cards also.

Reference
---------

Here is the state description of this mini camera. There are 5 working states.

**1. Standby：** Set key as high level for 2 seconds when in the power off state, Red LED will come on. Mini camera enters Standby state.

**2. Power off:** Set key as high level for 5 seconds, camera enter Power off state, Red LED will fade out.

**3. Take pictures:** Set key as high level for about 1000ms when in the power on state, camera can take a picture. Red LED will blink once to tell you that one picture has been taken. Afterwards, it automatically enters standby state.

**4. Video:** Set key as high level for 2 seconds when in the standby state, Camera will enter video state and red LED blinks continuously. To stop it, set key as high level for about 1000ms, camera will enter to standby state.

**5. Files storage:** Connect camera to pc using USB cable, you can open image file and VIDEO file. You can also access the files in the SD card by a SD card reader.

## Schematic Online Viewer

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Resources
---------

- [Mini Camera Eagle File](https://files.seeedstudio.com/wiki/Grove-Mini_Camera/res/Mini_Camera_Eagle_File.zip)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Grove_-_Mini_Camera -->

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
