---
title: Sensor - Sound(introduction)
nointro:
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/Sensor_sound/
slug: /Sensor_sound
last_update:
  date: 01/06/2022
  author: gunengyu
---

# Seeed Sound Sensors Selection Guide

We have released various types of Sound sensors in the recent years. You may find it difficult to make a choice between them. We feel your pain and let's take a close look at them and workout which one is best suited for you!

For all the Sound sensors in our bazaar, please click [Bazaar Sound tag](https://www.seeedstudio.com/tag/Sound.html) to check.

## What is a sound sensor

Sounds exist widely in our daily life, and we can use sounds to make plenty of interactive controls, such as voice-activated lights in corridors. Through the sound sensor,clapping your hands in front of the black detection head (Mic) or speak loudly, you are able to control the light through the sound. The sound sensor is equivalent to a microphone. It can sense the sound and convert the sensed sound into a corresponding analog signal output. It is widely used in mobile phones, recorders, voice-activated lighting, medical equipment, deep sea measurement, traffic noise monitoring , industrial enterprise noise detection and etc.

With the development of the sound sensor, there emerges more and more creative and promising products with sound sensors. For instance, you may have heard of a camera that can shoot invisible light to human eyes, or a thermal camera, but have you heard of a camera that can shoot sound? That's right: Korean scientists have developed such a camera that is able to sense the area of ​​the photo and mark it with color, is it very interesting?

This unique "sound camera" is called SeeSV-S205, with an ordinary camera in the middle, but surrounded by sophisticated sound sensors, it can make shooting sound as simple as shooting light. You only need to hold it facing the sound source, and you can see the position of the sound source in the final image.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/sound sensor.jpg" /><figcaption><b>Figure 1</b>. <i>SeeSV-S205 Sound Camera ( Image from SinaTech, 2013 )</i></figcaption>
</div>

### How does a sound sensor work

The sound sensor has a built-in condenser electret microphone that is sensitive to sound. Sound waves cause the electret film in the microphone to vibrate, resulting in a change in capacitance and a small voltage corresponding to the change. And this voltage is then converted into a 0-5V voltage, which is accepted by the data collector after A / D conversion and transmitted to the computer.

#### Sound & Light Interactive Cake

<div align="center"><img src="https://files.seeedstudio.com/wiki/Sensor_sound/IMG/birthday cake.png" /><figcaption><b>Figure 2</b>. <i> Working principle of a Sound &amp; Light Interactive Cake  ( Image from Dfrobot, 2019 )</i></figcaption>
</div>

There is a black pickup head (MIC) on the sound sensor. When birthday song plays loudly in front of the black pickup head, the sound sensor can feel the vibration of the sound, which generates electrical signals, and lit up the lights on the cake.

## Field of Applications

There are a numerous use of these sound sensors. Particularly, using these kinds of sensors, human beings can be monitored and benifitted or even saved from different conditions. Therefore the sound sensors play important roles in various sectors, which include daily life, industry, medical, military and etc.

| Field of application                                          | Content |
|--------------------------------|-----------------------------------------|
| Daily Life  | The sensor samples the sound signal and applies it to microphones, recorders, mobile phones and other devices. The audio control lamp is equipped with an audio sensor. As long as someone makes a friction sound for 1 second, the wall lamp will automatically turn on for about ten seconds; the voice control TV can store the voices of two people.|
| Industry | The acoustic wave sensor utilizes the positive and reverse piezoelectric effect of the conversion between electrical energy and mechanical energy of lead zirconate titanate PZT piezoelectric ceramic to measure distance. An electrical signal is added to the piezoelectric ceramic, it generates mechanical vibration and emits ultrasound. When an obstacle is encountered on the way, the ultrasound will be reflected back immediately, and there will be an electrical signal output when it acts on its ceramic. Consequently the distance between the car and the obstacle is calculated and displayed via measuring the time differences.  |
| Medical treatment| The working principle of traditional hearing aids is: the microphone (microphone) converts the received sound signal into an electrical signal and sends it to the amplifier. The amplifier amplifies the electrical signal and sends it to the receiver (headphone), which converts the electrical signal into sound signal. The sound signal at this time is much stronger than the signal received by the microphone, so that the hearing loss of the deaf can be compensated to varying degrees.|
| Military | The sound sensor uses sound waves to determine the chemical composition of the material in the closed container to strengthen the security of the port; The sound sensor system can locate and classify the sniper firepower, and provide the azimuth, elevation, and Range, caliber and error distance.|

## Sound Sensors at Seeed

### Which One is Your Preference

|Name|Thumbnail|Operate voltage|Measurement Range|Sensitivity|Output|Signal Frequency|Click to buy|
|----|-----|-----|------|------|------|-----|------|
|[Grove - Sound Sensor](https://wiki.seeedstudio.com/Grove-Sound_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small.jpg"/>|5V|/|48dB-52dB|/|16kHz-20 kHz|[Buy Now](https://www.seeedstudio.com/Grove-Sound-Sensor-Based-on-LM386-amplifier-Arduino-Compatible.html)|
|[Grove - Speech Recognizer](https://wiki.seeedstudio.com/Grove-Speech_Recognizer/)|<img src="https://files.seeedstudio.com/wiki/Grove_Speech_Recognizer/img/stuff1.jpg" />|3V-5V|/|-43dB-(-37dB)|/|32.768MHz-50MHz|[Buy Now](https://www.seeedstudio.com/Grove-Speech-Recognizer.html)|
|[Grove - Loudness Sensor](https://wiki.seeedstudio.com/Grove-Loudness_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg" />|3.5V-10VDC|/|-48dB~66 dB|Analog Signal|50Hz~2000 Hz|[Buy Now](https://www.seeedstudio.com/Grove-Loudness-Sensor.html)|
|[Grove - Heelight Sensor](https://wiki.seeedstudio.com/Grove-Heelight_Sensor/)|<img src="https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight sensor.png" />|3.3V-5V|0.1m-10m|/|TTL logic level|/|[Buy Now](https://www.seeedstudio.com/Grove-Heelight-Sensor.html)|
|[Grove - Sound Recorder](https://wiki.seeedstudio.com/Grove-Sound_Recorder/)|<img src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sound recorder.png" />|3V-5.5V|±1.5g|/|/|/|[Buy Now](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)|

### Warmly Notice

The chart above tells a variety of attributions of each sound sensor with different measurement ranges, sensitivities and signal frequency, you can choose the one that is the most suited for you.

For more detailed information of individuals, please visit their own pages via the links left beside the images of the products.

## Resource

- Reference
  - [Magic sound camera: composed of camera sound sensor](http://tech.sina.com.cn/digi/dc/2013-05-14/00188334966.shtml)
  - [Boson:Sound Sensor](http://wiki.dfrobot.com.cn/index.php?title=%E5%A3%B0%E9%9F%B3%E4%BC%A0%E6%84%9F%E5%99%A8)

## Project

**Hacking the Stairs at Seeed's New Office**: Turn the stairs at the office into an interactive installation, and even a cool way to convey the message "STAFF ONLY" to visitors.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed' width='350'></iframe>

**The Da Vinci Code**: The work combines art and electronics. The art part makes the skeleton and consists of 11 layers of medium density fiberboard.

<iframe frameborder='0' height='327.5' scrolling='no' src='https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed' width='350'></iframe>

## Tech Support

 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/).

<div>
  <br /><p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
</div>
