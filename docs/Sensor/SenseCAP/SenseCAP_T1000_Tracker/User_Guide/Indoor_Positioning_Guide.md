---
description: SenseCAP_Tracker_T1000-A/B_IPS
title: SenseCAP T1000 Indoor Positioning System Guide
keywords:
- Tracker
- BLE
- Positioning
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /IPS_For_SenseCAP_T1000_Traker
last_update:
  date: 10/20/2023
  author: Jessie
---


The chapter will provide overall guidance on how to integrate [SenseCAP T1000 Tracker](https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html) into an indoor positioning solution using Traxmate.

[Traxmate](https://traxmate.io/) is an loT platform that enables you or your customers to easily and efficiently deploy a comprehensive loT tracking solution, complete with seamless indoor and outdoor positioning, tracking, and routing capabilities.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/system-archi.png" alt="pir" width={800} height="auto" /></p>

## Architecture Overview

Below you find brief summaries, but please read the rest of the document to get the full picture.

● Login to Traxmate and create your building(s).<br/>
● Deploy some more Wi-Fis and/our [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) (If needed).<br/>
● Perform an indoor survey to check the provided accuracy of your already installed Wi-Fi and/or Bluetooth infrastructure.<br/>
● Make a new indoor survey to validate.<br/>
● Either repeat the above steps or start using the indoor positioning solution.<br/>
● Connect the device to [TTN](https://www.thethingsnetwork.org/) and send data to Traxmate.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/flow.png" alt="pir" width={800} height="auto" /></p>

## Deploy the Wi-Fi/Bluetooth Beacons

If you do not already have an installed infrastructure of Wi-Fi access points and/or Bluetooth beacons, you can make a deployment that is optimized for positioning. Most already deployed infrastructures of Wi-Fi access points have been placed out most likely to optimize the range and performance of data connection. When considering positioning as well - think “spread it out and keep it close to corners and walls, and at a higher density in areas where you want higher accuracy”.

:::tip
Bluetooth beacons are most often battery powered, and can then more easilybe deployed. Wi-Fi access points have a longer range. A dense grid of Bluetooth beacons provides better accuracy than a sparse grid of Wi-Fi access points.
:::

Check [E5 Bluetooth Location Beacon Deployment](https://wiki.seeedstudio.com/bluetooth_beacon_for_SenseCAP_Traker/#deployment-guidelines) for more details.

## Add Places

Navigate to `Places` -> `Add New`, then click the map or search an address or a name, click the `Add place`popup and submit the details.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-place.png" alt="pir" width={800} height="auto" /></p>

Next step is to specify the number of floors of the building and upload floor maps to the floors where you would like to enable indoor positioning. The uploading of floor maps supports PNG and JPEG files. Once you have uploaded the file you use tools to scale, rotate and place it correctly on the map. There is also a tool to crop the PNG/JPEG file along the shape of the building.

After set up the building, click `SAVE`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/buildings.png" alt="pir" width={800} height="auto" /></p>

## Do the survey

Once the building has been added, and floor maps uploaded, it is time to perform the survey by using the Traxmate App(Android Version).

:::note
The iOS version of the Traxmate App can not be used since iOS does not support Wi-Fi scanning by third-party apps.
:::

:::tip
Android normally has a limitation of how often apps can scan for Wi-Fi, it is set to once per 30 second. For the purpose of getting a more accurate survey you are recommended to turn off this throttling. You have to set Android in developer mode to be able to do this.

Go to `Settings` > `Developer options` > find "Wi-Fi scan throttling" > disable it (or Settings>System>Advanced>Developer options).
With WiFi scan throttling disabled on your Android,you can be sure NetSpot will do its very best while surveying, scanningand analyzing your wireless network area.<br/>
Check more inforamation [here](https://developer.android.com/guide/topics/connectivity/wifi-scan
).
:::

Open the app and login, select `Places` -> `Select your Place` -> `Select Floor` -> `Start Survey`.

The app will then continuously scan for Wi-Fis and Bluetooth. You should train the indoor positioning system by repeatedly placing Reference Points. The more Reference Points the better. The Reference Point shall be placed on the map that represents where you are physically located.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/survey1.png" alt="pir" width={600} height="auto" /></p>

● You place the reference point by zooming and panning the map so the place where you are is under the cross hair. When you have aimed correctly, you click the button with the plus (+) sign.<br/><br/>
● You then continue to walk, trying your best to walk in a straight line with constant speed.
A bit slower than normal walking speed is recommended. Aim for a new good place to use as a Reference Point. Good places are places easily recognisable on the map, like corners, cross sections, doors, elevators, stairs and similar.<br/><br/>
● Place Reference Points at least every 5-10 meters. The more precise you place the Reference Points, the more accurate the indoor positioning will be.<br/><br/>
● When you have surveyed the whole section or floor, you stop the survey by pressing the red stop button. The survey will be sent to the server side and processed. In one or a couple of minutes there will be a new Building Model (see the chapter about building models) automatically published for your building (if the survey contributed in a good way and improved the accuracy).

## Evaluate the current provided accuracy

Once you have performed the Indoor Surveys, then need to evaluate the results. You login into the [Traxmate portal](https://online.traxmate.io/) and visit the Positioning tab of your Place/Building.
The raw data from the surveys will be processed by the back-end servers and the results will be available as Building Models. The details of the latest published Building Model are shown in the Positioning tab.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/51.png" alt="pir" width={800} height="auto" /></p>

<center><i>This picture shows it has 4.33 meters in median error. 51% of the building has been covered by the performed surveys,and Wi-Fis and Bluetooth (RF Coverage) has been found to cover 13% of the building</i></center>

### Building Models and the Median Error

A building model is an electronic representation of where beacons are placed within a building. The building model is generated when a user (or several) performs either surveys or reference tracks. As soon as these are finalized, they are sent into the system to be calculated into a building mode.

For each building model a median error is calculated. The median error is based on the difference (the error) between the ground-truth/reference track (generated by the placed reference point during the survey) and the calculated track (based on the indoor positioning provided by the Combain Location API). The system automatically selects to publish the best available building model. The algorithm for "best" is based on a combination of coverage rate and median error.

The automatic process can be overridden by manually publishing a selected building model. The building models can be edited. The users are able to add – or edit beacons to further enhance the positioning effort.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/model98.png" alt="pir" width={400} height="auto" /></p>

<center><i>Showing the published building model 1892 for the building Mattehuset1. It has in total 98 available building models. The current building model includes 179 unique Wi-Fi MAC addresses and covers 4 out of 6 floors. The median error for all floors is 4.33 m. The best floor (see Picture 9) was Floor 3 and it has 3.9 m median error.</i></center>

### Survey Coverage, RF Coverage and Median Error map

When evaluating a specific building model, to see if and how the accuracy could be improved, it can be useful to have a look at the Survey Coverage, RF Coverage and the Media Error maps.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/sc-rf.png" alt="pir" width={800} height="auto" /></p>

### How to Improve the Indoor Positioning Accuracy

When reviewing the Median Error map and you find that the provided median error is not aligned with the requirements of your use-case, then it is time to look into how the accuracy can be improved.

●  **Step 1** - More Surveys<br/>
Have you performed surveys in all areas of the building where you intend to use the indoor positioning?
If not, perform more surveys.

●  **Step 2** - Increase Wi-Fi and Bluetooth coverage<br/>
Do you have Wi-Fi and Bluetooth in all the areas of the building where you intend to use the indoor positioning?
If not, deploy more Wi-Fis and Bluetooth beacons in these areas and perform surveys in these areas.

●  **Step 3** - Increase Wi-Fi and Bluetooth density<br/>
You have Wi-Fi and Bluetooth in all the areas of the building, but the accuracy is still not good enough.
Review the density of the Wi-Fi and Bluetooth in these areas. Compare with the tables in the Appendix 1 and see if you from a theoretical and simulated perspective are recommended to increase the density of Wi-Fis and Bluetooth to meet your requirements. If so, deploy more Wi-Fis and Bluetooth beacons in these areas.

●  **Step 4** - Increase Survey accuracy<br/>
You have Wi-Fi and Bluetooth in all the areas of the building and the density is according to the theoretical levels suggested by Appendix 1 to meet your requirements, BUT the accuracy is still not good enough.
Perform more detailed surveys. Make sure you place reference points as often as you can (once per square meter is the optimal) and as accurately as you can. It is important that you are precise and correct when placing the reference point in the map. It is quite easy to make mistakes and place them at other places than where you really are located.

## Start to Use

The SenseCAP T1000 Tracker gather the Wi-Fi and Bluetooth scan information, MAC addresses and signal strength and send this to The Things Stack, then send it to the Traxmate portal via the API.

Please check the [Connect to TTN](https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN/) first to set up the tracker correctly.

### Add device

Log in to Traxmate portal, navigate to `Devices` -> `Add new` -> `Device`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-new-devices.png" alt="pir" width={800} height="auto" /></p>

### TTS Configuration

Log in [The Things Stack](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-end-nodes/developer-walk-through/?url=lns.html#the-things-network-v3), navigate to `Integrations` → `Webhooks`, and click `Add Webhook`.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png" alt="pir" width={800} height="auto" /></p>

Choose the `Custom Webhook` template.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-web.png" alt="pir" width={800} height="auto" /></p>

Name your Webhook ID and select the format to `JSON`, then copy the Base URL.

```cpp
https://capture.v1.traxmate.io/service/<Service Token>/device
```

:::tip
Navigate to `Settings` -> `Account`, and copy the Service Token.
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/service-token.png" alt="pir" width={800} height="auto" /></p>
:::

Enable the following recommended event type, then click `Add webhook`.

- Uplink message
- Normalized uplink

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/websettings.png" alt="pir" width={800} height="auto" /></p>

### Check the device data

When the device is successfully connected, then we return to the traxmate portal, you will see the data of the device.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-data.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trax-map.png" alt="pir" width={800} height="auto" /></p>

## Appendix

### Accuracy requirements

**The method and technology we describe in this chapter are suitable for the use cases that require something around 2-10 meters of median error.**

All accuracy requirements should be based on the needs of the use-cases. Some use-cases have higher requirements than others and some use-cases have a higher available budget for indoor positioning infrastructure than others. The solution should aim for finding a balance between accuracy requirements and available budget. The rule of thumb is, the more money and effort put into infrastructure, the better accuracy. But note, many use-cases can be supported by using an already existing infrastructure.

The following charts show which accuracy you can expect if you have a certain amount of Wi-Fis/Bluetooth for a certain number of square meters.

### Estimated Indoor Accuracy Matrix

Tables below show which estimated accuracy you can expect in an indoor environment using the AI (ANN) based indoor positioning. The accuracy will depend on the Area to be covered and the amount of deployed Wi-Fi Access points (APs) or Bluetooth beacons.

The median error accuracy is:

● GREEN from 1 up to 5 meters<br/>
● YELLOW 5 up to 10<br/>
● Red 10 meters<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table1.png" alt="pir" width={700} height="auto" /></p><center><i>Table showing the accuracy if you have performed a very detailed survey with one reference point per 1 square meter.</i></center>
<br/>
<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table2.png" alt="pir" width={700} height="auto" /></p><center><i>Table showing the accuracy if you have performed a detailed survey with one reference point per 4 square meter.</i></center>
<br/>

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/table3.png" alt="pir" width={700} height="auto" /></p><center><i>Table showing the accuracy if you have performed a sparse survey with one reference point per 100 square meter.</i></center>
