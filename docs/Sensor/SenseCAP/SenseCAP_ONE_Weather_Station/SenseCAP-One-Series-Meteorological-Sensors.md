---
description:  SenseCAP ONE Compact Weather Station
title:  SenseCAP ONE Compact Weather Station
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# SenseCAP ONE Series Meteorological Sensors

![sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png)

##### _(SenseCAP ONE series compact weather stations)_

## Product Introduction

Today, data on localized weather, known as microclimates, is the new frontier for more precise and accurate weather forecasting. As a result, the collection of weather data is becoming increasingly smaller and gridded. In light of this, weather stations, which are the most convenient means of collecting weather data, are seeing a rise in demand.

 SenseCAP ONE compact weather stations consists of several meteorological sensors that measure the following parameters: air temperature & humidity, barometric pressure, light, precipitation, wind speed, wind direction, PM2.5, and PM10. By adopting a modular design, SenseCAP ONE makes it possible for you to conveniently integrate different combinations of sensors into one compact weather station according to actual application needs.

The products are designed with industry standards, IP66 rated, featuring high accuracy, high reliability and stability, and strong robustness. SenseCAP ONE series supports RS485/RS422 (Modbus) and SDI-12 interface, enabling easy extension with other sensors of respective interfaces. SenseCAP ONE is easy to deploy, durable for long-term operation in the harsh environment in the outdoor field, making it perfect for applications in the scenarios of smart city, power-grid, power plants, road weather stations, airports, and smart agriculture, etc.

![sensecap one catagories](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png)

There are six total SenseCAP Products with distinctive combination of sensors included. To find the ones matching your particular scenarios, here is a chart clearly demonstrates the appearance of SenseCAP ONEs and the parameters each product can measure.

### SenseCAP ONE S700 7-in-1 Compact Weather Sensor

SenseCAP ONE S700 7-in-1 Compact Weather Sensor can help you collect and monitor environmental and weather data, which are crucial in different application scenarios such as smart city projects and etc. The SenseCAP ONE S700 is equipped with sensors to measure the seven following parameters: air temperature, relative humidity, barometric pressure, light intensity, rainfall, wind speed, and wind direction.

SenseCAP ONE is IP66 certified, and it features strong robustness to withstand even the toughest outdoor environment. The Sensors to measure wind speed and wind direction use ultrasound instead of traditional mechanical 3-cup or vane anemometer. The advantage of using ultrasonic sensors is that reducing the movable parts can make the sensor less likely to be broken and thereby is easier to be maintained without any sacrifices in precision or manpower.

The SenseCAP ONE series uses the RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12 communication protocol. Hence, the SenseCAP ONE compact weather sensor can be used with any datalogger that supports RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12.

We also provide the SenseCAP [Sensor Hub 4G Data Logger](https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/) (supporting solar power and DC wall power) that can be used with the SenseCAP ONE series weather sensor. The data can be transmitted to the Sensor Hub and then to the SenseCAP server or a private server. If you choose to use the SenseCAP server, we also provide an API for you to easily make your own applications.

![](https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp)

## Features

- **multiple weather parameters to measure in one**: rain intensity, air temperature, relative humidity, barometric pressure, light intensity, precipitation intensity, wind speed, and wind direction, etc.

- **Embedded with the electronic compass**: enabling easy installation and you can choose to disable the electronic compass while orienting to the North manually.

- **A flange plate and 3m cable** are included in the package for the pole mount

- **IP66 rated**: waterproof, and dustproof, heaters available, suitable for severe outdoor environment.

- **Ultrasonic wind speed & direction sensors without moving parts**

- **compact in size, calibrated, easy to install, maintenance free and user-friendly**

- **Radiation shields** are equipped to ensure accurate ambient measurement.

- **Supported interface**: RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12

- **CE, FCC certifications are in process**, coming soon….

## Measurement Specifications

![measurement](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png)

## General Specifications

![general](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png)

## Demo

Here we show you how to create your very own weather station with the [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) and a [Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)! With minimal setup and easy-to-use code, this is a great tutorial for beginners who want to get going in no time.

![](https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N)

### Why a Weather Station?

When we think about weather data, it’s a given to recognise its importance in aviation, maritime and construction industries, as well as in predicting extreme climate. To the average individual, however, such information may only be relevant when we need to decide whether to bring an umbrella as we leave our homes.

What if I told you that, thanks to new applications, the potential that weather data holds and its relevance will only become greater?

In the clothing industry, about 35% of annual loss in revenue is caused by inaccurate sales forecasts and statistics on the relationship between apparel sales and factors such as time, seasonal and weather changes, holidays, etc.

To mitigate this, how about using accurate weather forecasting data to plan the allocation of inventory to a given area? For example, we can estimate how the demand for down jackets will rise or fall given future changes in the weather.

In fact, many countries are already using meteorological data to drive business decisions. In Germany, the Beer Index states that beer sales will skyrocket when temperatures exceed 22OC. And for every further 1 degree rise in temperature, 2.3 million more bottles of beer are sold per day. Absolutely brilliant!

In addition to the Beer Index, there is also a car index, ice cream index, swimsuit index, food mold index and more, according to which businesses can develop production and marketing plans in advance. As you can see, the commercialization of meteorological data has a lot of room for imagination.

Today, data on localised weather, known as microclimates, is the new frontier for more precise and accurate weather forecasting. As a result, the collection of weather data is becoming increasingly smaller and gridded. In light of this, weather stations, which are the most convenient means of collecting weather data, are seeing a rise in demand. In today’s demo, we’ll show you how you can have your very own weather station up and running in just a few steps using the SenseCAP ONE S700 and Raspberry Pi.

### Required Materials

To follow along with this tutorial, the following materials are recommended. You can also use an older Raspberry Pi 3 if you have one lying around, but the Pi 4 will give you much more power and versatility if you would also like to use it for other projects.

- [Raspberry Pi 4 8GB](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) x1

- [RS-485 Shield for Raspberry HAT](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html) x1

- [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) x1

### Hardware Setup

First, assemble the Seeed RS-485 Shield onto the Raspberry Pi, taking care to align them with Pins 1 to 25 on the Raspberry Pi as shown in the figure below.

![](https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46)

Then, connect the SenseCAP ONE S700 to the RS-485 Shield with the RS-485 Connection. That’s it!

### Software Setup

#### Step 1: Configure SenseCAP ONE S700

We will first have to set up the protocol on the SenseCAP ONE S700. First download and install the latest SenseCAP ONE Configuration Tool for your operating system [here](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases).

Once you have opened the configuration tool, connect your SenseCAP ONE to your PC via USB Type-C and select it under Serial Port. Then, click Connect.

Next, select Settings. Under Main Port Protocol, select RS-485 ASCII, like shown below. Then, select Write To Device.

![](https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx)

#### Step 2: Configure Raspberry Pi

This tutorial assumes Raspberry Pi OS running on a Raspberry Pi that has internet connectivity set up. If you are new to the Raspberry Pi, you can learn how to get WiFi up and running [here](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/).

First, make sure that Node.JS v10.22.x is installed on your Raspberry Pi. Else, run the script below to install it.

```
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n 10
```

The next step is to enable hardware serial on /dev/ttyS0. In your terminal window, run the Raspi Config tool with:

```
sudo raspi-config
```

### Run the Weather Station

After the setup, it’s easy to get the weather station up and running. On your Raspberry Pi, execute the following commands to install and run the weather station server & website.

```
git@github.com:Seeed-Solution/SenseCAP-WeatherStation-Raspberry-Pi-Visualization.git
mv SenseCAP-WeatherStation-Raspberry-Pi-Visualization /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization
cd /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization

cd server && install --unsafe
cd website && install --unsafe

# pm2 start
npm install -g -y --unsafe pm2 http-server
pm2 start run-server.sh
pm2 start run-website.sh
pm2 save
pm2 ls
```

With your PC and Raspberry Pi under the same local area network, access the weather station data through the following URL in your browser.

```
http://{Raspberry Pi IP}:8080
```

If you are unsure of your Raspberry Pi’s IP address, you can run the command below and take note of the IP next to inet.

```
ifconfig wlan0
```

![](https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5)

### DONE

Once you completed all the setup and visited the URL successfully, you should see the weather data being visualised in real time like shown below. SenseCAP ONE S700 is an all-in-one platform that not only allows us to get basic data like temperature and humidity, we can also view advanced information including wind direction and speed, air pressure, rainfall and even the amount of light.

![](https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq)

With this, we not only have a fully functional weather station in a matter of minutes, we can also extend it to visualise data remotely. Alternatively, we can also store the weather data for powerful data analytics and forecasting.

### Summary

We hope you have enjoyed the demonstration of how you can create a weather station in just a few steps with the Raspberry Pi and [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)! Although this project is simple, the possibilities it enables are only limited by your imagination.

Besides working with Raspberry Pi 4 8GB, SenseCAP ONE series of products can be easily deployed and use with our [SenseCAP Sensor Hub 4G Data Logger](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html). As an easy-to-deploy, industrial-grade 4G cellular station, Sensor Hub uses the MODBUS-RTU RS485 protocol to communicate with sensors and is able to collect various sensor data simultaneously. IP66-rated, waterproof and dustproof, Sensor Hub 4G Data Logger is suitable for long-term, reliable outdoor applications such as in smart agriculture, smart weather stations and smart city, etc.

Now, how will you use your very own weather station?

## Applications

![sensecap one applications](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png)
