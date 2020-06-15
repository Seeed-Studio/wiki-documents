## Background

If you don’t want to work on schematic or layout yourself, but you want to convert your prototype based on the Seeed’s modules into an integrated product, we highly recommend you to try [**Geppetto**](
https://geppetto.seeed.neostix.com/).

Geppetto is, by far, the easiest and least expensive way to produce production-quality electronics. You don’t need to know about resistors, capacitors, inductors, routing paths or anything EE to design your own module. Geppetto is drag & drop simple... anyone can create professional IoT devices. To make it more convenient for you, Geppeto has a library for Seeed, so you can design your own Grove modules with ease!

## Geppepo Seeed Design Using Guide

### Open the Design 

- Step1. Click to open Geppetto + Seeed page.
[Geppetto+Seeed Entrance](https://geppetto.seeed.neostix.com/)


- Step2. Click **Seeed Designs**, chose **Grove Beginner Kit For Arduino**, 
click `Open design`  button.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-01.png"/></div>


Now you just import the whole Grove Beginner Kit For Arduino design.

> Note: All modules are optional and removable.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-02.png"/></div>

### Customize Your Own Beginner Kit


Now you can add or remove modules to suit your needs and quickly build your own Beginner Kit! 

For instance, we can make a temperature and humidity monitoring board. Displays the temperature and humidity on the OLED and controls the relay to turn on the fan when certain conditions are met. Let's see what modules are needed to implement the above features. First, we need a control board, Seeeduino Lotus here will work; then a display, which means Grove - OLED is needed; and we also need a DHT11 for temperature and humidity. All those modules are included in the Grove Beginner Kit already. So, we just need to add a relay. 


- Seeeduino Lotus
- Grove - OLED Display 0.96''
- Grove - Temperature & Humidity Sensor(DHT11)
- Grove - Relay

Once we have identified the required modules, we can start adding and deleting modules.

- Step 1. Delete unnecessary modules 

In this case, we only need to keep **Seeeduino Lotus**, **Grove - OLED Display 0.96''** and **Grove - Temperature & Humidity Sensor(DHT11)**.
You just need to click to select the unnecessary module and press the `Delete` button. When the job is done, you should see the design like this:

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-03.png"/></div>

- Step 2. Add modules
Search the keyword to find the modules. In this case, we use the `grove relay`. Then drag the relay module into the board

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-04.png"/></div>

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-05.png"/></div>

- Step 3. Assign pins

Move the mouse cursor over the new added modules. You will see the power bus in this case named `SUPPLY` and the signal bus in this case named `SIG`.
> For other modules, the bus name may not be the same, but there are always a power bus and signal bus.

Click on supply to select the power supply, for the relay here we chose `5V`.
> The Grove - Relay can also work with 3.3V.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-06.png"/></div>

Next, let's select the signal pin. Click `SIG`. The pair selection box pops up with darker pins that can be selected and lighter pins that are already occupied and cannot be selected. Here we select `D6`.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-07.png"/></div>

- Step 4. Adjust modules position

We also need to reposition the module properly.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-08.png"/></div>

- Step 5. Adjust modules position

Right-click on an empty space and select `Fit board to modules` in the pop-up dialog box.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-09.png"/></div>

- Step 6. Save your design

Click on the Save button in the top left corner

>At this point you will need to log in to your Seeed registered account.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-11.png"/></div>

- Step 7. Generate 3D file

Click the `3D View` button then click `Save` to generate the 3D file.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-12.png"/></div>

- Step 7. Check the price.

Click `Price`  button to check the price.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-13.png"/></div>

- Step 8. Make the deal

Click the `Order` button in the top right corner to complete the order.

<div align=center><img src="https://files.seeedstudio.com/wiki/Geppetto/wiki-14.png"/></div>

## What's next?

Next, Seeed's layout engineer will then complete the PCB drawing based on your design and confirm with you. Then the PCBs will be produced for you. You don't have to worry about what happens afterwards at all.

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/)<br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>