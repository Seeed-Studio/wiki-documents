---
description: Google Sheets Integrated
title: Google Sheets Integrated
keywords:
- SenseCap
image: https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4
slug: /Integrate_into_Google_Sheets_via_Helium
last_update:
  date: 1/13/2023
  author: shuxu hu
---
# Integrate into Google Sheets via Helium

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/83.jpg" /></div>

Google Sheets is a web-based application that enables users to create, update and modify spreadsheets and share the data online in real time.

The Google Sheets online spreadsheet application enables users to create, edit and format spreadsheets online to organize and analyze information. Google Sheets is often compared to Microsoft Excel, as both applications are used for similar purposes. Google Sheets is essentially Google's cloud-based version of Microsoft Excel's basic features.

Thanks to Helium's integration capabilities, we can easily save sensor data via Google Sheets and do some simple data analysis accordingly.

## Upgradable to Industrial Sensors

With the SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) and [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), you can easily turn the Grove into a LoRaWAN® sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust [industrial sensors](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN® network, built-in 19 Ah battery, and powerful support from APP make the [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody><tr><td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>SenseCAP Industrial Sensor</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Air Temp &amp; Humidity</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Light</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Air Temp &amp; Humidity &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Soil Moisture &amp; Temp</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Soil Moisture &amp; Temp &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> LoRaWAN® Controller</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> 8-in-1 Weather Station</strong></a></td>
    </tr>
  </tbody></table>

## Create Google Form

If you have not registered for a Google account prior to learning this tutorial, please complete your Google account [here](https://accounts.google.com/signup/v2/webcreateaccount?biz=false&flowName=GlifWebSignIn&flowEntry=SignUp&hl=en-GB) first.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/67.png" /></div>

Once you have completed your account registration, please login to the [Google Forms page](https://docs.google.com/forms/u/0/). Then, simply create a new Google Form.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/68.png" /></div>

We recommend setting questions to "Short answer".

Here, I will create a table using Vision AI Module as an example. This table should have two sets of data, one for the number of people detected and its confidence level.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/69.png" /></div>

:::note
    Short Answer needs to be selected for each new sensor tag created.
:::
Head over to the responses tab and tell the form you want your results sent to Google Sheets by clicking the Google Sheets button.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/70.png" /></div>

Simply enter the Google Form title in the new pop-up window and click the **Create** button at the bottom right.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/71.png" /></div>

Make sure we have created the required columns.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/72.png" /></div>

## Make Form Public

Go back to our form setup page and click on the **Send** button in the top right hand corner to get the link to share the form.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/73.png" /></div>

You'll get a share link like this one.

`https://docs.google.com/forms/d/e/1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw/viewform?usp=sf_link`

We're only after the ID of the form, so we're going to remove the prefix `https://docs.google.com/forms/d/e/` and suffix `/viewform?usp=sf_link`. We should be left with a big string that contains no slashes.

`1FAIpQLSce9ozQMVwdgIYXYyutRPeE5opGba6724QGEN_I_dvoEH_Muw`

Please record this ID, which will be used in the Helium integration.

## Add Google Sheets Integration in Helium

Go back to Helium and add a Google Sheets integration in Console, go to Integrations on the left-hand menu. Select the integration to add - in this case, the Google Sheets integration as shown below.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/74.png" /></div>

Click **Add Integration** in the new page.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1100/75.png" /></div>

On the new page, we enter the form ID we obtained above into the corresponding field and click on **Get Google Form Fields** to check if the ID is correct. If, after clicking on it, we are able to get the content of the labels in the columns of the form, the link is correct.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/76.png" /></div>

Click on **Generate Function Body w/ Fields Above** at the bottom and Helium will automatically generate the required decoder for us.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/77.png" /></div>

:::tip
At this point, you don't have to rush to click on the Add Integration button on the right, as the integration still needs a little modification to accommodate the sensor values we have passed on.
:::

## Create your Decoder

We have prepared the code for the complete decoder required to import all the sensors in the kit into Google Sheets for you, please refer to the table below.

Before using the decoder code for the corresponding sensor, please ensure that you have followed the tutorial above to create and share the Google Form. And if you want to use the code provided by us directly, **the label of the sensor in your form should also match the code**.

<table align="center">
  <tbody><tr>
      <th>Sensor Type</th>
      <th>Download Address</th>
    </tr>
    <tr>
      <td align="center">Wio Terminal built-in light sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/light.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal built-in IMU sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/IMU.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Soil Moisture Sensor</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/decoder/soil-moisture-data-decoder.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">VOC and eCO2 Gas Sensor (SGP30)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sgp30.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Temp&amp;Humi Sensor (SHT40)</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/sht40.js">Download</a></td>
    </tr>
    <tr>
      <td align="center">Vision AI Module</td>
      <td align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/blob/main/Google-sheets-decoder/visionai.js">Download</a></td>
    </tr>
  </tbody></table>

:::note
The decoder used by Google Forms cannot be used with the decoder provided in the [Connecting to Helium](https://wiki.seeedstudio.com/Connecting-to-Helium/#write-decoders-function-for-different-sensors).
:::
Continuing from the previous step, we need to copy and replace the code area of Helium with the codec of the sensor you are using, and then just click Add Integration on the right hand side.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/78.png" /></div>

Of course, don't forget that we need to add the integration of the decoder and Google Forms to the **Flow**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/79.png" /></div>

## Upload code send data to Helium

Please follow the instructions in the [Connecting to Helium tutorial](https://wiki.seeedstudio.com/Connecting-to-Helium/#upload-code-send-data-to-helium) to upload the code to send your sensor values to Helium.

Once the data has started to be sent, you can see a live refresh of the data from Google Sheets.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/81.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/84.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/85.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/86.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/87.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1100/88.png" /></div>

You can also do what I did above, add a variety of table styles to Google Sheets to make it more intuitive and easier for you to see data or understand trends in your data.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/80.png" /></div>

## Tech Support

Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).
<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>
