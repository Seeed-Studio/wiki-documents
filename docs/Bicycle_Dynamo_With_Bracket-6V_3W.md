---
name: Bicycle Dynamo With Bracket - 6V 3W
category: MakerPro
bzurl: https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155
oldwikiname:  Bicycle Dynamo With Bracket - 6V 3W
prodimagename:  Bidynamo.jpg
surveyurl: https://www.research.net/r/Bicycle_Dynamo_With_Bracket-6V_3W
sku:   108990013
---
![](http://bz.seeedstudio.com/depot/images/product/Bidynamo.jpg)

This product provide clean and green energy, it produce electric without any fuel. it works safty and silence. It's fashion, users can make a contribution for protect the world by low carbon life.

[![](https://github.com/SeeedDocument/Seeed-WiKi/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/bicycle-dynamo-with-bracket-6v-3w-p-798.html?cPath=155)

##   Features
---
*   simple and beautiful outshape and heat dissipation design raining proof ,dustproof, anti-shake,
*   constant current output

##   Cautions
---
1.  Don’t touch the shell of the dynamo after long time riding ,it might scald your body . Keep waiting at least 10 minutes .
2.  It can be use in raining day , but don’t put it into water ,keep it away from kids.


##   Specification
---
###   Synamo overal size and Structures

1. The max dia of the dynamo body is:40.5mm, the longest length of the main body is:94.5mm。

![](img/Bicycle-spec.JPG)


1.  friction roller
2.  the dynamo body
3.  Magnetic steel
4.  Winding support
5.  Spring housing
6.  Coil
7.  Wrench
8.  Lug plate
9.  Rear cover
</td></tr></table>

2. OUTPUT: 6V,3W

3. WARRENTY:    1 year

4. WORKING LIFE:  2-3 years

###   Technical  parameters

**output power test under constant voltage**

<table >
<tr>
<th>Speed(km/h)
</th>
<th>Output power(W)
</th>
<th>Output volt(V)
</th>
<th>Output current(A)
</th></tr>
<tr>
<td width="200px">5
</td>
<td width="200px">0.56
</td>
<td width="200px">6.00
</td>
<td width="200px">0.126
</td></tr>
<tr>
<td>15
</td>
<td>1.89
</td>
<td>6.00
</td>
<td>0.369
</td></tr>
<tr>
<td>30
</td>
<td>4.09
</td>
<td>6.00
</td>
<td>0.560
</td></tr></table>

**constant-resistance load testing （18 ohms）**

<table >
<tr>
<th>speed（km/h）
</th>
<th>Output power(W)
</th>
<th>Output volt(V)
</th>
<th>Output current(A)
</th></tr>
<tr>
<td width="200px">5
</td>
<td width="200px">0.45
</td>
<td width="200px">2.45
</td>
<td width="200px">0.115
</td></tr>
<tr>
<td>15
</td>
<td>1.89
</td>
<td>5.78
</td>
<td>0.325
</td></tr>
<tr>
<td>30
</td>
<td>3.21
</td>
<td>7.23
</td>
<td>0.435
</td></tr></table>

**Tempreture test ：**

<table >
<tr>
<th>Surroundings temp.
</th>
<th>Shell temp.
</th>
<th>Temp. rise
</th>
<th>Remarks
</th></tr>
<tr>
<td width="200px">20℃
</td>
<td width="200px">55.2℃
</td>
<td width="200px">32.2℃
</td>
<td width="200px">keep 30cm distances test
</td></tr></table>



##   Usage

###   Hardware Installation

Fix the dynamo on the front fork near to the wheel of the bicycle ,adjust the height to the suitable place .(pay attention to fixed side of the dynamo “left or right “, that must be matching.)

1、Move the wrench , let the dynamo roller touch the wheel edge at proper position .


##   FAQ
---
Please list your question here:

*   Could it be used to power an Arduino directly?

A:Not if by directly you mean running the wires from the dynamo directly to an arduino, of course it can't do that. Because, like all generators, a dynamo like this will put out AC, which is fine for tungsten lamps.. (i.e. light bulbs) but LEDs all need DC, and so do solid state devices like Arduino. So you are always going to need a bridge rectifier *first*. What you add after that depends on your budget and your needs. An arduino needs steady voltage so for an arduino, you are going to need to use the generator essentially as a battery charger.. and then you power all your stuff *off that battery that gets charged.*

What you will need to do that with the most efficiency is ideally a DC to DC converter (Google "boost-buck converter") or at the very minimum just some kind of charging circuit powered by your bridge rectifier.

See the links down below.

*   If I stop (i.e. on a red light) it will naturally stop outputting energy. What do I need to keep the energy flow going, a capacitor?

A: Yes.. that would work for a few seconds to more than a minute.. depending on how bright an LED you use and the size of the capacitor you use.

Q: A battery? Of what specifications?

A: Google for any of the numerous sites (I gave you a head start below) that tell you how to build a bike light with a *standlight*.
That is the search term you want.

Q: My intended use is to a) charge my cellphone, or b) power an Arduino and do cool stuff :)

A: That's *quite* doable but again, you'll need to change that (quite variable) 3-~12ish volts AC to DC at something more appropriate (and steady) If you use any on and off switch, in addition to the dynamo's own "switch" watch out that you use a voltage regulator because the voltage coming out of a dynamo - via diodes, *with no load* could easily charge a capacitor up to the dynamo's absolute *peak* output voltage which may be quite high. Then the instant you reconnected your LED, you could burn it out. If you leave your lights connected and on all the time and use a capacitor as a standlight, and just remove the dynamo from the wheel when you want to turn it off, thats not a problem.

Cheers --Nighto 01:37, 10 June 2011 (CST)

*   SUPPLIED DYNAMO IS MEANT TO BE MOUNTED ON FRONT FORK ONLY.  And any given dynamo will only work on one side. This dynamo is fairly inflexible in that respect. See [https://en.wikipedia.org/wiki/Bottle_dynamo](https://en.wikipedia.org/wiki/Bottle_dynamo) for a picture of a dynamo mounted on the front fork of a bike, facing forward.

Many people who buy it here are using it for other purposes than bicycle lighting, so for them this all doesn't matter anyway.

Don't assume that people wont use it on bikes, given the fact its a bike dynamo, and its price, its a competitive option for bicyclists. And its a decent little dynamo, for the price, but it has to be mounted safely. They all do. That's just basic common sense.

*   Ask your local bike mechanic for info on how if you are unsure.*

##   Resources
---
*   [File:Spec.doc](res/Spec.doc "File:Spec.doc")


##   External Links

Links to external webpages which provide more application ideas, documents/datasheet or software libraries.

[How to connect dynamo wires](http://www.yellowjersey.org/dami.html)(believe it or not some people need to know)

[http://pilom.com/BicycleElectronics/DynamoCircuits.htm](http://pilom.com/BicycleElectronics/DynamoCircuits.htm)

[http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle](http://www.candlepowerforums.com/vb/forumdisplay.php?86-Bicycle)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>