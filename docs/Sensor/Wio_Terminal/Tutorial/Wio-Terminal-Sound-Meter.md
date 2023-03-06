---
description: How to measure noise levels with Wio Terminal
title:  How to measure noise levels with Wio Terminal
keywords:
- Wio_terminal Tutorial
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wio-Terminal-Sound-Meter
last_update:
  date: 1/31/2023
  author: jianjing Huang
---

# How to measure noise levels with Wio Terminal

## Overview

This example showing how perfectly display the Decibel Meter on the Wio Terminal.

## Part list

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)
- [**ReSpeaker 2-Mics Pi HAT**](https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html)

:::note
Please visit the [**Audio Overview**](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/) for the **Hardware Connection**.
:::

## Features

- The dB can be presented in the dial plate, reading and line-chart respectively.
- It has a guide to introduce what the number of dB mean.

## Getting Started

To get started with the Audio library for Wio Terminal, please follow through the followings:

## library Installation

1. Install the Audio library `Seeed_Arduino_Audio`, Please visit the [**Audio Overview**](https://wiki.seeedstudio.com/Wio-Terminal-Audio-Overview/) for more information.

2. Install the LCD screen Library `Seeed_Arduino_LCD`, please visit [Wio Terminal LCD](https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/) for more information.

3. Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click `sketch` -> `Include Library` -> `Add .ZIP Library`, and choose the `Seeed_Arduino_Audio` file that you've have just downloaded.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

## Dispaly the dB value on the Arduino Monitor

This example is display the dB value on the arduino Monitor, so we can have a test dB code.

:::note
The code is quite long, so you can just click 'copy to clipboard' then put on the Arduino IDE.
:::

```cpp
#include <Audio.h>
#include <Wire.h> 
#include <SD.h> 

int i;
float v[512] = {0};
float magnitude = 0;
float dB_holder;
float a_weight[512] = {0.000491601, 0.007439144, 0.026456683, 0.057237193, 0.097648235, 0.145530499, 0.19895028, 0.256192702, 0.315753433, 0.376341431, 0.436880336, 0.496502258, 0.554533348, 0.610473237, 0.663971116, 0.714800959, 0.762837753, 0.808035908, 0.85041046, 0.890021233, 0.926959868, 0.961339445, 0.993286373, 1.022934171, 1.050418819, 1.075875354, 1.099435459, 1.12122582, 1.141367062, 1.159973138, 1.177151032, 1.193000704, 1.207615207, 1.221080906, 1.233477786, 1.244879798, 1.255355228, 1.264967081, 1.273773452, 1.281827897, 1.289179783, 1.29587462, 1.301954369, 1.307457742, 1.312420463, 1.316875521, 1.320853401, 1.324382291, 1.327488281, 1.330195534, 1.332526449, 1.334501812, 1.336140927, 1.337461742, 1.338480956, 1.339214128, 1.339675764, 1.339879407, 1.33983771, 1.33956251, 1.339064892, 1.338355246, 1.337443324, 1.336338287, 1.33504875, 1.333582824, 1.331948154, 1.330151954, 1.328201037, 1.326101843, 1.323860472, 1.3214827, 1.318974007, 1.316339599, 1.313584419, 1.310713175, 1.307730349, 1.304640214, 1.301446848, 1.298154147, 1.294765835, 1.291285478, 1.28771649, 1.284062146, 1.280325589, 1.276509835, 1.272617788, 1.268652238, 1.264615874, 1.260511287, 1.256340974, 1.252107348, 1.247812737, 1.243459393, 1.239049492, 1.234585143, 1.230068386, 1.2255012, 1.220885501, 1.216223152, 1.211515958, 1.206765674, 1.201974005, 1.19714261, 1.1922731, 1.187367045, 1.182425973, 1.177451372, 1.172444693, 1.167407348, 1.162340715, 1.157246139, 1.152124932, 1.146978373, 1.141807712, 1.136614169, 1.131398936, 1.126163178, 1.120908033, 1.115634612, 1.110344003, 1.105037268, 1.099715447, 1.094379556, 1.08903059, 1.083669521, 1.078297301, 1.072914859, 1.067523108, 1.062122937, 1.05671522, 1.05130081, 1.045880542, 1.040455233, 1.035025683, 1.029592675, 1.024156975, 1.018719333, 1.013280482, 1.00784114, 1.00240201, 0.996963778, 0.991527118, 0.986092686, 0.980661126, 0.975233068, 0.969809127, 0.964389904, 0.958975988, 0.953567954, 0.948166364, 0.942771769, 0.937384705, 0.932005696, 0.926635255, 0.921273883, 0.915922069, 0.91058029, 0.905249011, 0.899928687, 0.894619763, 0.88932267, 0.88403783, 0.878765656, 0.873506548, 0.868260896, 0.863029082, 0.857811477, 0.852608441, 0.847420326, 0.842247473, 0.837090216, 0.831948877, 0.826823771, 0.821715204, 0.816623471, 0.811548862, 0.806491654, 0.80145212, 0.796430522, 0.791427115, 0.786442146, 0.781475853, 0.776528467, 0.771600212, 0.766691304, 0.761801951, 0.756932355, 0.752082709, 0.747253202, 0.742444013, 0.737655316, 0.732887277, 0.728140056, 0.723413808, 0.71870868, 0.714024813, 0.709362343, 0.704721397, 0.700102099, 0.695504567, 0.690928912, 0.686375241, 0.681843653, 0.677334244, 0.672847104, 0.668382317, 0.663939963, 0.659520116, 0.655122846, 0.650748219, 0.646396293, 0.642067124, 0.637760764, 0.633477258, 0.629216649, 0.624978975, 0.620764269, 0.616572561, 0.612403877, 0.608258238, 0.604135661, 0.600036161, 0.595959749, 0.59190643, 0.587876209, 0.583869084, 0.579885053, 0.575924108, 0.571986239, 0.568071433, 0.564179674, 0.560310942, 0.556465216, 0.552642469, 0.548842674, 0.5450658, 0.541311815, 0.537580682, 0.533872363, 0.530186816, 0.526524, 0.522883867, 0.519266371, 0.51567146, 0.512099084, 0.508549187, 0.505021714, 0.501516605, 0.498033801, 0.49457324, 0.491134857, 0.487718587, 0.484324362, 0.480952113, 0.47760177, 0.47427326, 0.47096651, 0.467681443, 0.464417985, 0.461176056, 0.457955577, 0.454756467, 0.451578645, 0.448422028, 0.445286531, 0.442172069, 0.439078556, 0.436005904, 0.432954025, 0.429922829, 0.426912226, 0.423922125, 0.420952434, 0.41800306, 0.41507391, 0.412164889, 0.409275902, 0.406406853, 0.403557647, 0.400728185, 0.397918372, 0.395128108, 0.392357295, 0.389605834, 0.386873625, 0.384160569, 0.381466565, 0.378791512, 0.37613531, 0.373497856, 0.37087905, 0.368278789, 0.36569697, 0.363133492, 0.360588252, 0.358061147, 0.355552074, 0.353060929, 0.35058761, 0.348132012, 0.345694033, 0.343273569, 0.340870517, 0.338484772, 0.336116231, 0.333764791, 0.331430348, 0.329112798, 0.326812038, 0.324527964, 0.322260474, 0.320009464, 0.31777483, 0.315556471, 0.313354282, 0.311168162, 0.308998008, 0.306843717, 0.304705188, 0.302582319, 0.300475007, 0.298383152, 0.296306653, 0.294245408, 0.292199316, 0.290168278, 0.288152193, 0.286150961, 0.284164484, 0.28219266, 0.280235393, 0.278292582, 0.276364131, 0.27444994, 0.272549913, 0.270663953, 0.268791961, 0.266933843, 0.265089501, 0.263258841, 0.261441767, 0.259638183, 0.257847996, 0.256071111, 0.254307435, 0.252556875, 0.250819337, 0.249094729, 0.247382959, 0.245683935, 0.243997567, 0.242323763, 0.240662434, 0.239013489, 0.23737684, 0.235752397, 0.234140071, 0.232539776, 0.230951422, 0.229374924, 0.227810195, 0.226257148, 0.224715697, 0.223185759, 0.221667247, 0.220160077, 0.218664167, 0.217179432, 0.215705789, 0.214243158, 0.212791454, 0.211350598, 0.209920507, 0.208501103, 0.207092304, 0.205694032, 0.204306207, 0.202928752, 0.201561587, 0.200204635, 0.19885782, 0.197521065, 0.196194293, 0.19487743, 0.193570399, 0.192273127, 0.19098554, 0.189707563, 0.188439124, 0.187180149, 0.185930567, 0.184690306, 0.183459294, 0.182237461, 0.181024737, 0.179821051, 0.178626335, 0.177440519, 0.176263535, 0.175095315, 0.173935792, 0.172784898, 0.171642567, 0.170508733, 0.16938333, 0.168266293, 0.167157558, 0.166057059, 0.164964734, 0.163880519, 0.162804351, 0.161736168, 0.160675908, 0.159623508, 0.158578909, 0.157542048, 0.156512867, 0.155491306, 0.154477304, 0.153470803, 0.152471745, 0.151480071, 0.150495724, 0.149518647, 0.148548783, 0.147586076, 0.146630469, 0.145681907, 0.144740336, 0.143805699, 0.142877944, 0.141957016, 0.141042862, 0.140135428, 0.139234663, 0.138340513, 0.137452928, 0.136571854, 0.135697243, 0.134829041, 0.133967201, 0.133111671, 0.132262402, 0.131419345, 0.130582451, 0.129751671, 0.128926959, 0.128108265, 0.127295544, 0.126488747, 0.125687829, 0.124892743, 0.124103444, 0.123319885, 0.122542022, 0.121769811, 0.121003206, 0.120242164, 0.119486641, 0.118736594, 0.117991979, 0.117252754, 0.116518877, 0.115790306, 0.115066999, 0.114348914, 0.113636011, 0.112928249, 0.112225587, 0.111527986, 0.110835406, 0.110147807, 0.109465151, 0.108787398, 0.108114511, 0.10744645, 0.106783179, 0.106124659, 0.105470853, 0.104821725, 0.104177238, 0.103537355, 0.10290204, 0.102271258, 0.101644973, 0.10102315, 0.100405754, 0.09979275, 0.099184104, 0.098579782, 0.09797975, 0.097383975, 0.096792423, 0.096205061, 0.095621857, 0.095042778, 0.094467792, 0.093896867, 0.093329972, 0.092767075, 0.092208144, 0.091653149, 0.09110206, 0.090554845, 0.090011475, 0.08947192, 0.088936151, 0.088404136, 0.087875849, 0.087351259, 0.086830338};

AudioInputI2S            i2s1;           //xy=204.00000381469727,247.00000381469727
AudioMixer4              mixer1;         //xy=402,248
AudioAnalyzeFFT1024      fft1024_1;      //xy=635.0000076293945,249.00000381469727
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
// GUItool: end automatically generated code

AudioControlWM8960 wm8960;

const int myInput = AUDIO_INPUT_LINEIN;

void setup() {
  analogReadResolution(16);
  AudioMemory(60);
  Serial.begin(9600);
  fft1024_1.windowFunction(AudioWindowHanning1024);

  wm8960.enable();
  wm8960.inputSelect(myInput);
  wm8960.volume(0.5);
}

void loop() { 
  if (fft1024_1.available()) {
      magnitude = 0;
      dB_holder = 0;
      float v[512] = {0};
      
      for (i=0; i<512; i++) {
        v[i] = fft1024_1.read(i) * a_weight[i];
        magnitude = magnitude + sq(v[i]);
      }
      magnitude = sqrt(magnitude);
      
      dB_holder = log10f(magnitude) * 20  + 97.05;
      Serial.println(dB_holder,2); // f[23] = 1kHz, f[82] = 3.5kHz, f[252] = 12kHz
  }
}
```

The value of dB is presented.
<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter-value_gGIF.gif" /></div>

## The Decibel Meter Demo

This example detects dB using the mic on ReSpeaker 2-Mic Hat, The around evirnment is detected, then displayed on the display.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Sound-Meter/sound-Meter_gGIF.gif" /></div>

## Complete Code

```cpp

#include <Audio.h>
#include <Wire.h> 
#include <SD.h> 
#include <TFT_eSPI.h> // Hardware-specific library
#include <SPI.h>
#include <Bounce.h>
#include"seeed_line_chart.h" //include the library
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library
#define TFT_GREY 0x5AEB
#define LOOP_PERIOD 35 // Display updates every 35 ms

#define max_size 20 //maximum size of data
doubles data; //Initilising a doubles type to store data
TFT_eSprite spr = TFT_eSprite(&tft);  // Sprite 
TFT_eSprite spr2 = TFT_eSprite(&tft);

float ltx = 0;    // Saved x coord of bottom of needle
uint16_t osx = 120, osy = 120; // Saved x & y coords
uint32_t updateTime = 0;       // time for next update

int old_analog =  -999; // Value last displayed

int mode = 0;  // 1=display_information

int i;
float v[512] = {0};
float magnitude = 0;
float dB_holder;
float a_weight[512] = {0.000491601, 0.007439144, 0.026456683, 0.057237193, 0.097648235, 0.145530499, 0.19895028, 0.256192702, 0.315753433, 0.376341431, 0.436880336, 0.496502258, 0.554533348, 0.610473237, 0.663971116, 0.714800959, 0.762837753, 0.808035908, 0.85041046, 0.890021233, 0.926959868, 0.961339445, 0.993286373, 1.022934171, 1.050418819, 1.075875354, 1.099435459, 1.12122582, 1.141367062, 1.159973138, 1.177151032, 1.193000704, 1.207615207, 1.221080906, 1.233477786, 1.244879798, 1.255355228, 1.264967081, 1.273773452, 1.281827897, 1.289179783, 1.29587462, 1.301954369, 1.307457742, 1.312420463, 1.316875521, 1.320853401, 1.324382291, 1.327488281, 1.330195534, 1.332526449, 1.334501812, 1.336140927, 1.337461742, 1.338480956, 1.339214128, 1.339675764, 1.339879407, 1.33983771, 1.33956251, 1.339064892, 1.338355246, 1.337443324, 1.336338287, 1.33504875, 1.333582824, 1.331948154, 1.330151954, 1.328201037, 1.326101843, 1.323860472, 1.3214827, 1.318974007, 1.316339599, 1.313584419, 1.310713175, 1.307730349, 1.304640214, 1.301446848, 1.298154147, 1.294765835, 1.291285478, 1.28771649, 1.284062146, 1.280325589, 1.276509835, 1.272617788, 1.268652238, 1.264615874, 1.260511287, 1.256340974, 1.252107348, 1.247812737, 1.243459393, 1.239049492, 1.234585143, 1.230068386, 1.2255012, 1.220885501, 1.216223152, 1.211515958, 1.206765674, 1.201974005, 1.19714261, 1.1922731, 1.187367045, 1.182425973, 1.177451372, 1.172444693, 1.167407348, 1.162340715, 1.157246139, 1.152124932, 1.146978373, 1.141807712, 1.136614169, 1.131398936, 1.126163178, 1.120908033, 1.115634612, 1.110344003, 1.105037268, 1.099715447, 1.094379556, 1.08903059, 1.083669521, 1.078297301, 1.072914859, 1.067523108, 1.062122937, 1.05671522, 1.05130081, 1.045880542, 1.040455233, 1.035025683, 1.029592675, 1.024156975, 1.018719333, 1.013280482, 1.00784114, 1.00240201, 0.996963778, 0.991527118, 0.986092686, 0.980661126, 0.975233068, 0.969809127, 0.964389904, 0.958975988, 0.953567954, 0.948166364, 0.942771769, 0.937384705, 0.932005696, 0.926635255, 0.921273883, 0.915922069, 0.91058029, 0.905249011, 0.899928687, 0.894619763, 0.88932267, 0.88403783, 0.878765656, 0.873506548, 0.868260896, 0.863029082, 0.857811477, 0.852608441, 0.847420326, 0.842247473, 0.837090216, 0.831948877, 0.826823771, 0.821715204, 0.816623471, 0.811548862, 0.806491654, 0.80145212, 0.796430522, 0.791427115, 0.786442146, 0.781475853, 0.776528467, 0.771600212, 0.766691304, 0.761801951, 0.756932355, 0.752082709, 0.747253202, 0.742444013, 0.737655316, 0.732887277, 0.728140056, 0.723413808, 0.71870868, 0.714024813, 0.709362343, 0.704721397, 0.700102099, 0.695504567, 0.690928912, 0.686375241, 0.681843653, 0.677334244, 0.672847104, 0.668382317, 0.663939963, 0.659520116, 0.655122846, 0.650748219, 0.646396293, 0.642067124, 0.637760764, 0.633477258, 0.629216649, 0.624978975, 0.620764269, 0.616572561, 0.612403877, 0.608258238, 0.604135661, 0.600036161, 0.595959749, 0.59190643, 0.587876209, 0.583869084, 0.579885053, 0.575924108, 0.571986239, 0.568071433, 0.564179674, 0.560310942, 0.556465216, 0.552642469, 0.548842674, 0.5450658, 0.541311815, 0.537580682, 0.533872363, 0.530186816, 0.526524, 0.522883867, 0.519266371, 0.51567146, 0.512099084, 0.508549187, 0.505021714, 0.501516605, 0.498033801, 0.49457324, 0.491134857, 0.487718587, 0.484324362, 0.480952113, 0.47760177, 0.47427326, 0.47096651, 0.467681443, 0.464417985, 0.461176056, 0.457955577, 0.454756467, 0.451578645, 0.448422028, 0.445286531, 0.442172069, 0.439078556, 0.436005904, 0.432954025, 0.429922829, 0.426912226, 0.423922125, 0.420952434, 0.41800306, 0.41507391, 0.412164889, 0.409275902, 0.406406853, 0.403557647, 0.400728185, 0.397918372, 0.395128108, 0.392357295, 0.389605834, 0.386873625, 0.384160569, 0.381466565, 0.378791512, 0.37613531, 0.373497856, 0.37087905, 0.368278789, 0.36569697, 0.363133492, 0.360588252, 0.358061147, 0.355552074, 0.353060929, 0.35058761, 0.348132012, 0.345694033, 0.343273569, 0.340870517, 0.338484772, 0.336116231, 0.333764791, 0.331430348, 0.329112798, 0.326812038, 0.324527964, 0.322260474, 0.320009464, 0.31777483, 0.315556471, 0.313354282, 0.311168162, 0.308998008, 0.306843717, 0.304705188, 0.302582319, 0.300475007, 0.298383152, 0.296306653, 0.294245408, 0.292199316, 0.290168278, 0.288152193, 0.286150961, 0.284164484, 0.28219266, 0.280235393, 0.278292582, 0.276364131, 0.27444994, 0.272549913, 0.270663953, 0.268791961, 0.266933843, 0.265089501, 0.263258841, 0.261441767, 0.259638183, 0.257847996, 0.256071111, 0.254307435, 0.252556875, 0.250819337, 0.249094729, 0.247382959, 0.245683935, 0.243997567, 0.242323763, 0.240662434, 0.239013489, 0.23737684, 0.235752397, 0.234140071, 0.232539776, 0.230951422, 0.229374924, 0.227810195, 0.226257148, 0.224715697, 0.223185759, 0.221667247, 0.220160077, 0.218664167, 0.217179432, 0.215705789, 0.214243158, 0.212791454, 0.211350598, 0.209920507, 0.208501103, 0.207092304, 0.205694032, 0.204306207, 0.202928752, 0.201561587, 0.200204635, 0.19885782, 0.197521065, 0.196194293, 0.19487743, 0.193570399, 0.192273127, 0.19098554, 0.189707563, 0.188439124, 0.187180149, 0.185930567, 0.184690306, 0.183459294, 0.182237461, 0.181024737, 0.179821051, 0.178626335, 0.177440519, 0.176263535, 0.175095315, 0.173935792, 0.172784898, 0.171642567, 0.170508733, 0.16938333, 0.168266293, 0.167157558, 0.166057059, 0.164964734, 0.163880519, 0.162804351, 0.161736168, 0.160675908, 0.159623508, 0.158578909, 0.157542048, 0.156512867, 0.155491306, 0.154477304, 0.153470803, 0.152471745, 0.151480071, 0.150495724, 0.149518647, 0.148548783, 0.147586076, 0.146630469, 0.145681907, 0.144740336, 0.143805699, 0.142877944, 0.141957016, 0.141042862, 0.140135428, 0.139234663, 0.138340513, 0.137452928, 0.136571854, 0.135697243, 0.134829041, 0.133967201, 0.133111671, 0.132262402, 0.131419345, 0.130582451, 0.129751671, 0.128926959, 0.128108265, 0.127295544, 0.126488747, 0.125687829, 0.124892743, 0.124103444, 0.123319885, 0.122542022, 0.121769811, 0.121003206, 0.120242164, 0.119486641, 0.118736594, 0.117991979, 0.117252754, 0.116518877, 0.115790306, 0.115066999, 0.114348914, 0.113636011, 0.112928249, 0.112225587, 0.111527986, 0.110835406, 0.110147807, 0.109465151, 0.108787398, 0.108114511, 0.10744645, 0.106783179, 0.106124659, 0.105470853, 0.104821725, 0.104177238, 0.103537355, 0.10290204, 0.102271258, 0.101644973, 0.10102315, 0.100405754, 0.09979275, 0.099184104, 0.098579782, 0.09797975, 0.097383975, 0.096792423, 0.096205061, 0.095621857, 0.095042778, 0.094467792, 0.093896867, 0.093329972, 0.092767075, 0.092208144, 0.091653149, 0.09110206, 0.090554845, 0.090011475, 0.08947192, 0.088936151, 0.088404136, 0.087875849, 0.087351259, 0.086830338};
float init_value = 95.05;

AudioInputI2S            i2s1;           //xy=204.00000381469727,247.00000381469727
AudioMixer4              mixer1;         //xy=402,248
AudioAnalyzeFFT1024      fft1024_1;      //xy=635.0000076293945,249.00000381469727
AudioConnection          patchCord1(i2s1, 0, mixer1, 0);
AudioConnection          patchCord2(i2s1, 1, mixer1, 1);
AudioConnection          patchCord3(mixer1, fft1024_1);
// GUItool: end automatically generated code

AudioControlWM8960 wm8960;

// which input on the audio shield will be used?
#ifndef SEEED_WIO_TERMINAL 
const int myInput = AUDIO_INPUT_LINEIN;
#else
const int myInput = AUDIO_INPUT_MIC;
#endif

void setup(void) {
    tft.init();
    tft.setRotation(0);
    Serial.begin(57600); // For debug
    spr.createSprite(240,160);
    tft.fillScreen(TFT_WHITE);
    tft.setTextColor(TFT_BLACK, TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique9pt7b);
    tft.drawString("dB value guidance", 40, 40); 
    tft.setTextColor(TFT_BLACK, TFT_YELLOW);
    tft.setFreeFont(&FreeSansBoldOblique9pt7b);
    tft.drawString("0 - 25 dB Whisper", 20, 80); 
    tft.drawString("25 - 50 dB Quite library", 20, 110); 
    tft.drawString("50 - 75 dB Loud Music", 20, 140); 
    tft.drawString("75 - 100 dB Motorcycle", 20, 170); 
    delay(5000);
    tft.fillScreen(TFT_WHITE);

    analogMeter(); // Draw analogue meter

    updateTime = millis(); // Next update time

    analogReadResolution(16);
  
    AudioMemory(60);
   
    fft1024_1.windowFunction(AudioWindowHanning1024);

    wm8960.enable();
    wm8960.inputSelect(myInput);


}

void loop() {

  if (fft1024_1.available()) {
      magnitude = 0;
      dB_holder = 0;
      float v[512] = {0};
      
      for (i=0; i<512; i++) {
        v[i] = fft1024_1.read(i) * a_weight[i];
        magnitude = magnitude + sq(v[i]);
      }
      magnitude = sqrt(magnitude);
      dB_holder = log10f(magnitude) * 20  + init_value;
      
  }
Serial.println(dB_holder); // f[23] = 1kHz, f[82] = 3.5kHz, f[252] = 12kHz

// #########################################################################
// dispaly the line charts
// #########################################################################
    spr.fillSprite(TFT_WHITE);
    if (data.size() == max_size) {
        data.pop();//this is used to remove the first read variable
    }
    data.push(dB_holder); //read variables and store in data

    spr2.createSprite(40, 40);
    spr2.fillSprite(TFT_WHITE);
    spr2.setTextColor(TFT_BLACK, TFT_WHITE);
    spr2.setFreeFont(&FreeSansBoldOblique18pt7b);
    //char buf_2[0]; dtostrf(dB_holder, 2, 1, buf_2);
    spr2.drawNumber(dB_holder, 0, 0); 
    spr2.pushSprite(80, 140); 
    spr2.deleteSprite();
    
    //Settings for the line graph title
    auto header =  text(7, 0)
                .value("dB")
                .valign(vcenter)
                .width(tft.width())
                .thickness(2);
 
    header.height(header.font_height() * 1.1);
    header.draw(); //Header height is the twice the height of the font
 
  //Settings for the line graph
    auto content = line_chart(8, header.height()); //(x,y) where the line graph begins
         content
                .height(tft.height() - header.height() * 12) //actual height of the line chart
                .width(tft.width() - content.x() * 2) //actual width of the line chart
                .based_on(0.0) //Starting point of y-axis, must be a float
                .show_circle(true) //drawing a cirle at each point, default is on.
                .value(data) //passing through the data to line graph
                .color(TFT_PURPLE) //Setting the color for the line
                .draw();
                 
    spr.pushSprite(0, 190);
    delay(50);

// #########################################################################

    if (updateTime <= millis()) {
        updateTime = millis() + LOOP_PERIOD;
        int d;
        d += 4;
        if (d >= 360) {
            d = 0;
        }
        plotNeedle(dB_holder, 0);
    }
}

// #########################################################################
//  Draw the analogue meter on the screen
// #########################################################################
void analogMeter() {
    // Meter outline
    tft.fillRect(0, 0, 239, 126, TFT_GREY);
    tft.fillRect(5, 3, 230, 119, TFT_WHITE);
    tft.setTextColor(TFT_BLACK);  // Text colour

    // Draw ticks every 5 degrees from -50 to +50 degrees (100 deg. FSD swing)
    for (int i = -50; i < 51; i += 5) {
        // Long scale tick length
        int tl = 15;

        // Coodinates of tick to draw
        float sx = cos((i - 90) * 0.0174532925);
        float sy = sin((i - 90) * 0.0174532925);
        uint16_t x0 = sx * (100 + tl) + 120;
        uint16_t y0 = sy * (100 + tl) + 140;
        uint16_t x1 = sx * 100 + 120;
        uint16_t y1 = sy * 100 + 140;

        // Coordinates of next tick for zone fill
        float sx2 = cos((i + 5 - 90) * 0.0174532925);
        float sy2 = sin((i + 5 - 90) * 0.0174532925);
        int x2 = sx2 * (100 + tl) + 120;
        int y2 = sy2 * (100 + tl) + 140;
        int x3 = sx2 * 100 + 120;
        int y3 = sy2 * 100 + 140;

        // Yellow zone limits
        if (i >= -50 && i < 0) {
          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_GREEN);
          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_GREEN);
        }

        // Green zone limits
        if (i >= 0 && i < 25) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_YELLOW);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_YELLOW);
        }

        // Orange zone limits
        if (i >= 25 && i < 50) {
            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);
            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);
        }

        // Short scale tick length
        if (i % 25 != 0) {
            tl = 8;
        }

        // Recalculate coords incase tick lenght changed
        x0 = sx * (100 + tl) + 120;
        y0 = sy * (100 + tl) + 140;
        x1 = sx * 100 + 120;
        y1 = sy * 100 + 140;

        // Draw tick
        tft.drawLine(x0, y0, x1, y1, TFT_BLACK);

        // Check if labels should be drawn, with position tweaks
        if (i % 25 == 0) {
            // Calculate label positions
            x0 = sx * (100 + tl + 10) + 120;
            y0 = sy * (100 + tl + 10) + 140;
            switch (i / 25) {
                case -2: tft.drawCentreString("0", x0, y0 - 12, 2); break;
                case -1: tft.drawCentreString("25", x0, y0 - 9, 2); break;
                case 0: tft.drawCentreString("50", x0, y0 - 6, 2); break;
                case 1: tft.drawCentreString("75", x0, y0 - 9, 2); break;
                case 2: tft.drawCentreString("100", x0, y0 - 12, 2); break;
            }
        }

        // Now draw the arc of the scale
        sx = cos((i + 5 - 90) * 0.0174532925);
        sy = sin((i + 5 - 90) * 0.0174532925);
        x0 = sx * 100 + 120;
        y0 = sy * 100 + 140;
        // Draw scale arc, don't draw the last part
        if (i < 50) {
            tft.drawLine(x0, y0, x1, y1, TFT_BLACK);
        }
    }

    //tft.drawString("dB", 5 + 230 - 40, 119 - 20, 2); // Units at bottom right
    tft.drawCentreString("dB", 120, 80, 4); // Comment out to avoid font 4
    tft.drawRect(5, 3, 230, 119, TFT_BLACK); // Draw bezel line

    tft.setTextColor(TFT_BLACK, TFT_WHITE);
    tft.setFreeFont(&FreeSansBoldOblique18pt7b);
    tft.drawString(" dB",120,140);
    
    plotNeedle(0, 0); // Put meter needle at 0
}
  


// #########################################################################
// Update needle position
// This function is blocking while needle moves, time depends on ms_delay
// 10ms minimises needle flicker if text is drawn within needle sweep area
// Smaller values OK if text not in sweep area, zero for instant movement but
// does not look realistic... (note: 100 increments for full scale deflection)
// #########################################################################
void plotNeedle(int value, byte ms_delay) {
    if (value < -10) {
        value = -10;    // Limit value to emulate needle end stops
    }
    if (value > 110) {
        value = 110;
    }

    // Move the needle util new value reached
    while (!(value == old_analog)) {
        if (old_analog < value) {
            old_analog++;
        } else {
            old_analog--;
        }

        if (ms_delay == 0) {
            old_analog = value;    // Update immediately id delay is 0
        }

        float sdeg = map(old_analog, -10, 110, -150, -30); // Map value to angle
        // Calcualte tip of needle coords
        float sx = cos(sdeg * 0.0174532925);
        float sy = sin(sdeg * 0.0174532925);

        // Calculate x delta of needle start (does not start at pivot point)
        float tx = tan((sdeg + 90) * 0.0174532925);

        // Erase old needle image
        tft.drawLine(120 + 20 * ltx - 1, 140 - 20, osx - 1, osy, TFT_WHITE);
        tft.drawLine(120 + 20 * ltx, 140 - 20, osx, osy, TFT_WHITE);
        tft.drawLine(120 + 20 * ltx + 1, 140 - 20, osx + 1, osy, TFT_WHITE);

        // Re-plot text under needle
        tft.setTextColor(TFT_BLACK);
        tft.drawCentreString("dB", 120, 80, 4); // // Comment out to avoid font 4

        // Store new needle end coords for next erase
        ltx = tx;
        osx = sx * 98 + 120;
        osy = sy * 98 + 140;

        // Draw the needle in the new postion, magenta makes needle a bit bolder
        // draws 3 lines to thicken needle
        tft.drawLine(120 + 20 * ltx - 1, 140 - 20, osx - 1, osy, TFT_RED);
        tft.drawLine(120 + 20 * ltx, 140 - 20, osx, osy, TFT_MAGENTA);
        tft.drawLine(120 + 20 * ltx + 1, 140 - 20, osx + 1, osy, TFT_RED);

        // Slow needle down slightly as it approaches new postion
        if (abs(old_analog - value) < 10) {
            ms_delay += ms_delay / 5;
        }
        // Wait before next update
        delay(ms_delay);
    }
}

```
