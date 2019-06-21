---
name: DSO Quad:Calibration
category: MakerPro
bzurl:
oldwikiname:  DSO Quad:Calibration
prodimagename:
surveyurl: https://www.research.net/r/DSO_Quad-Calibration
sku:   
---

The calibration consists of different parts:

*   DC Calibration with
- Zero Offset
- Gain

*   AC Calibration (slope response, overshooting)
- For 1 ... 10V/div
- For 50 ... 500mV/div
- For x10 probe

##   Zero Offset

This calibration is done nearly automatically. The DSO should be well at operating temperature for this. So you should have turned it on at least about 10 minutes earlier. After selection of "Calibr" from the "Save/Recall" menu ("Square" Button, scrolling to last item, pushing -/+ button) you are asked to short CH_A input to GND. If you are using a probe, this should be in "x1" mode, not "x10". It's started by pressing the "Square" button. After a few seconds it's finished and waiting for the 1st step of the Gain calibration. If you don't want to do the gain calibration here, go the "arrow right" through all ranges without modifying anything with the -/+ navigator. Then you can repeat it (square button) or go "to the next operation" with "right" from the navigator and do the zero adjustment och CH_B. Additional Info: Even if the input voltage is zero, a real amplifier has a small non-zero value at the output. And this value changes, if the resistors for the range are changed. This zero offset is evaluated here for each range and that values are used in future to corrected in the digital part by adding/subtracting that offset

##   Gain Calibration

For the gain calibration additional external hardware is required! In each range a well known DC voltage of about 80 ... 100% of the full scale range needs to be applied. That "full scale range" e.g. 50mV/div * 6 div = 0.3V or 10V/div * 6 div = 60V. So you need the following voltages:
```
0.25... 0.3 V for 50mV/div range
0.5 ... 0.6 V for 0.1V/div range
1.0 ... 1.2 V for 0.2V/div range
2.5 ... 3.0 V for 0.5V/div range
5.0 ... 6.0 V for   1V/div range
10  ... 12  V for   2V/div range
25  ... 30  V for   5V/div range
50  ... 60  V for  10V/div range
```

I am suggesting to use some resistors as voltage divider and a voltage multimeter to measure the voltage. Please be aware, that the very cheap volt meters are often not accurate. But a meter with a price of 25 ... 40 € (or US-$) should be accurate enough. The lower voltages can be taken e.g. from an USB charger of you may have e.g. a 12V supply or a 19V notebook supply. The 50 ... 60V may be most difficult to have available. But you may to calibrate only the smaller ranges and stay with a worse accuracy in the higher ranges. A possible solution for the higher voltage may be to use DC/DC converters, e.g. two 5V to 24V converters, which are available for about 5€ per piece. A output current of 5mA is sufficient. A full circuit, which can be supplied with 5V may look like this: [[[1]](res/GainCalibrationCircuit.PNG)] The given output values may vary e.g. with the input voltage and the resistor tolerances. But will be in the required range given above. **Attention:** The 54V is a hazardous voltage!

With this equipment you can connect the volt meter and the channel of the DSO step by step the the output of that circuit and use the -/+ to adjust the DSO value to the same value as the volt meter.

##   AC calibration

While the DC calibration is applied in the digital part of the DSO, the AC calibration is done by changing the values of some capacitors in the hardware. The divider ratio of the capacitors need to match the divider ration of the resistors.

![](https://github.com/SeeedDocument/DSO_Quad-Calibration/raw/master/DSO203_AC-Cal_Circuit_Diagr.PNG).

The calibration procedure for the Quad DSO it is already described, e.g. here: [[2]](http://neophob.com/2012/03/dso-quad-for-dummies/) It uses the build-in square wave output. For Ch_A first set the probe to x1 and adjust A1 (=C5A) in the 1V/div range. Then adjust A2 (C3A) in the 500mV/div range. Then check the A1 setting again, then the A2 again as each is influencing also the other a little. Finally set the probe to x10, select a siutable range and adjust A3.


##   See Also

*   [DSO Quad](/DSO_Quad "DSO Quad")

*   [DSO Quad:Upgrading Firmware](/DSO_Quad-Building_Firmware "DSO Quad:Upgrading Firmware")

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>