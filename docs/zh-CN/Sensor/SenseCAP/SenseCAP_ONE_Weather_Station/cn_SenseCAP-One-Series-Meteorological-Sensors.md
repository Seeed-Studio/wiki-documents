---
description: SenseCAP ONE 紧凑型气象站
title: SenseCAP ONE 紧凑型气象站
keywords:
- SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors
last_update:
  date: 1/16/2023
  author: jianjing Huang
---

# SenseCAP ONE 系列气象传感器

![sensecap one](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png)

##### _(SenseCAP ONE 系列紧凑型气象站)_

## 产品介绍

如今，被称为微气候的本地化天气数据是更精确和准确天气预报的新前沿。因此，天气数据的收集正变得越来越小型化和网格化。鉴于此，作为收集天气数据最便捷手段的气象站，需求量正在上升。

SenseCAP ONE 紧凑型气象站由多个气象传感器组成，可测量以下参数：空气温度和湿度、大气压力、光照、降水、风速、风向、PM2.5 和 PM10。通过采用模块化设计，SenseCAP ONE 使您能够根据实际应用需求，方便地将不同传感器组合集成到一个紧凑型气象站中。

产品按照行业标准设计，IP66 防护等级，具有高精度、高可靠性和稳定性，以及强大的鲁棒性。SenseCAP ONE 系列支持 RS485/RS422 (Modbus) 和 SDI-12 接口，可轻松扩展其他相应接口的传感器。SenseCAP ONE 易于部署，适用于户外恶劣环境中的长期运行，非常适合智慧城市、电网、发电厂、道路气象站、机场和智慧农业等场景的应用。

![sensecap one catagories](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png)

总共有六款具有不同传感器组合的 SenseCAP 产品。为了找到符合您特定场景的产品，这里有一个图表清楚地展示了 SenseCAP ONE 的外观以及每个产品可以测量的参数。

### SenseCAP ONE S700 7合1紧凑型气象传感器

SenseCAP ONE S700 7合1紧凑型气象传感器可以帮助您收集和监测环境和天气数据，这些数据在智慧城市项目等不同应用场景中至关重要。SenseCAP ONE S700 配备传感器来测量以下七个参数：空气温度、相对湿度、大气压力、光照强度、降雨量、风速和风向。

SenseCAP ONE 通过了 IP66 认证，具有强大的鲁棒性，能够承受最恶劣的户外环境。测量风速和风向的传感器使用超声波而不是传统的机械三杯式或叶片式风速计。使用超声波传感器的优势在于减少可动部件可以使传感器不易损坏，从而更容易维护，而不会在精度或人力方面做出任何牺牲。

SenseCAP ONE 系列使用 RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12 通信协议。因此，SenseCAP ONE 紧凑型气象传感器可以与任何支持 RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12 的数据记录器一起使用。

我们还提供 SenseCAP [传感器集线器 4G 数据记录器](https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/)（支持太阳能供电和直流墙式电源），可与 SenseCAP ONE 系列气象传感器一起使用。数据可以传输到传感器集线器，然后传输到 SenseCAP 服务器或私有服务器。如果您选择使用 SenseCAP 服务器，我们还提供 API，让您轻松制作自己的应用程序。

![](https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp)

## 功能特性

- **一体化多种天气参数测量**：雨量强度、空气温度、相对湿度、大气压力、光照强度、降水强度、风速和风向等。

- **内置电子罗盘**：便于安装，您可以选择禁用电子罗盘并手动朝向北方。

- **包装中包含法兰盘和3米电缆**，用于杆式安装

- **IP66防护等级**：防水、防尘，可配备加热器，适用于恶劣的户外环境。

- **超声波风速风向传感器，无运动部件**

- **体积紧凑、已校准、易于安装、免维护且用户友好**

- **配备辐射防护罩**，确保准确的环境测量。

- **支持接口**：RS 485 (MODBUS-RTU) / 232 / 422 (Modbus) / SDI-12

- **CE、FCC认证正在进行中**，即将推出....

## 测量规格

![measurement](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png)

## 通用规格

![general](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png)

## 演示

在这里我们将向您展示如何使用[SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)和[Raspberry Pi](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html)创建您自己的气象站！通过最少的设置和易于使用的代码，这是一个很好的初学者教程，让您能够快速上手。

![](https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N)

### 为什么要建气象站？

当我们考虑天气数据时，理所当然地认识到它在航空、海事和建筑行业以及预测极端气候方面的重要性。然而，对于普通个人来说，这些信息可能只有在我们需要决定离开家时是否带伞时才相关。

如果我告诉您，由于新的应用，天气数据所蕴含的潜力及其相关性只会变得更大，您会怎么想？

在服装行业，约35%的年收入损失是由于不准确的销售预测和关于服装销售与时间、季节和天气变化、假期等因素之间关系的统计数据造成的。

为了缓解这种情况，如何使用准确的天气预报数据来规划给定区域的库存分配？例如，我们可以根据天气的未来变化来估计羽绒服需求的上升或下降。

事实上，许多国家已经在使用气象数据来推动商业决策。在德国，啤酒指数表明，当温度超过22°C时，啤酒销量将飙升。温度每进一步上升1度，每天就会多售出230万瓶啤酒。绝对精彩！

除了啤酒指数，还有汽车指数、冰淇淋指数、泳装指数、食品霉菌指数等，企业可以据此提前制定生产和营销计划。如您所见，气象数据的商业化有很大的想象空间。

今天，关于局部天气的数据，即微气候，是更精确和准确天气预报的新前沿。因此，天气数据的收集正变得越来越小型化和网格化。鉴于此，作为收集天气数据最便捷手段的气象站，需求正在上升。在今天的演示中，我们将向您展示如何使用SenseCAP ONE S700和Raspberry Pi，只需几个步骤就能让您拥有自己的气象站并运行起来。

### 所需材料

要跟随本教程，建议使用以下材料。如果您有一个闲置的旧Raspberry Pi 3，也可以使用，但如果您还想将其用于其他项目，Pi 4将为您提供更多的功率和多功能性。

- [Raspberry Pi 4 8GB](https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html) x1

- [RS-485 Shield for Raspberry HAT](https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html) x1

- [SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html) x1

### 硬件设置

首先，将Seeed RS-485扩展板组装到Raspberry Pi上，注意将它们与Raspberry Pi上的引脚1到25对齐，如下图所示。

![](https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46)

然后，使用RS-485连接将SenseCAP ONE S700连接到RS-485扩展板。就这样！

### 软件设置

#### 步骤1：配置SenseCAP ONE S700

我们首先必须在SenseCAP ONE S700上设置协议。首先在[这里](https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases)下载并安装适用于您操作系统的最新SenseCAP ONE配置工具。

打开配置工具后，通过USB Type-C将您的SenseCAP ONE连接到PC，并在串口下选择它。然后，点击连接。

接下来，选择设置。在主端口协议下，选择RS-485 ASCII，如下所示。然后，选择写入设备。

![](https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx)

#### 步骤2：配置Raspberry Pi

本教程假设在已设置互联网连接的Raspberry Pi上运行Raspberry Pi OS。如果您是Raspberry Pi的新手，可以在[这里](https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/)学习如何启动和运行WiFi。

首先，确保您的Raspberry Pi上安装了Node.JS v10.22.x。否则，运行下面的脚本来安装它。

```
curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n
bash n 10
```

下一步是在 /dev/ttyS0 上启用硬件串口。在终端窗口中运行以下命令打开 Raspi Config 工具：

```
sudo raspi-config
```

### 运行气象站

设置完成后，启动和运行气象站就很简单了。在您的树莓派上，执行以下命令来安装并运行气象站服务器和网站。

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

在您的PC和树莓派处于同一局域网下，通过浏览器访问以下URL来获取气象站数据。

```
http://{Raspberry Pi IP}:8080
```

如果您不确定树莓派的IP地址，可以运行以下命令并记下inet旁边的IP。

```
ifconfig wlan0
```

![](https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5)

### 完成

一旦您完成了所有设置并成功访问了URL，您应该能看到天气数据如下所示实时可视化。SenseCAP ONE S700是一个一体化平台，不仅允许我们获取温度和湿度等基本数据，我们还可以查看高级信息，包括风向和风速、气压、降雨量甚至光照量。

![](https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq)

通过这种方式，我们不仅在几分钟内拥有了一个功能齐全的气象站，还可以扩展它来远程可视化数据。或者，我们也可以存储天气数据用于强大的数据分析和预测。

### 总结

我们希望您喜欢这个演示，展示了如何使用树莓派和[SenseCAP ONE S700](https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html)在几个步骤内创建气象站！虽然这个项目很简单，但它所带来的可能性只受您想象力的限制。

除了与树莓派4 8GB配合使用外，SenseCAP ONE系列产品还可以轻松部署并与我们的[SenseCAP Sensor Hub 4G数据记录器](https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html)配合使用。作为一个易于部署的工业级4G蜂窝站，Sensor Hub使用MODBUS-RTU RS485协议与传感器通信，能够同时收集各种传感器数据。IP66级防水防尘的Sensor Hub 4G数据记录器适用于长期、可靠的户外应用，如智慧农业、智能气象站和智慧城市等。

现在，您将如何使用您自己的气象站呢？

## 应用

![sensecap one applications](https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png)
