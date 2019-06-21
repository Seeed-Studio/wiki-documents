---
name: How to edit Wiki
category: Tutorial
bzurl: 
oldwikiname: 
prodimagename: 
wikiurl: http://seeed.wiki/How_to_edit_Wiki
sku: 
tags: 
---

## Seeed中文文档维护说明

这里你可以找到部分Seeed产品的[中文文档](http://seeed.wiki)，由于这个站点刚建立，所以只有部分已经翻译的文档。

没有中文文档的产品，仍然需要到[英文站点](http://wiki.seeed.cc).

这个站点基于优秀的并且开源的文档系统[MkDocs](http://www.mkdocs.org/)以及主题[Material](http://squidfunk.github.io/mkdocs-material/).

## 基本操作

### 0. 执行初始化操作 
- 按照[mkdocs.org](http://www.mkdocs.org/)安装python, pip, mkdocs
- 执行 pip install mkdocs-material
- git clone https://github.com/SeeedDocument/wiki_chinese.git 到本地目录 （mkdocs源文件）
- git clone https://github.com/SeeedDocument/SeeedDocument.github.io.git 到本地目录 （编译的html文件）

### 1. 新增新产品的md文件， 文件的前面部分必须参照下面格式

**必须按照下面的格式编辑，wikiurl必须在第6行**

```
name: CAN-BUS Shield V1.2
category: Shield
bzurl: https://www.seeedstudio.com/CAN-BUS-Shield-V1.2-p-2256.html
oldwikiname: CAN-BUS_Shield_V1.2
prodimagename: Can_bus_shield_all.jpg
wikiurl: http://seeed.wiki/CAN-BUS_Shield_V1.2
sku: 113030021

```
### 2. 编写wiki_chinese目录下的mkdocs.yml文件

```

pages:
  - Seeed文档中文站点介绍: 'index.md'
  
  - 平台:
    - Arduino:
      - Arduino: Arduino.md
      - Seeeduino_Cloud: Seeeduino_Cloud.md
      - Seeeduino_LoRAWAN: Seeeduino_LoRAWAN.md  
    - LinkIt:
      - LinkIt: LinkIt.md
      - LinkIt_Smart_7688: LinkIt_Smart_7688.md
  
  - Grove:
    - Grove系统: Grove_System.md
    - 传感器:
      - Sensor: Sensor.md
      - Grove-Encoder: Grove-Encoder.md
      - Grove-Multichannel_Gas_Sensor: Grove-Multichannel_Gas_Sensor.md
      - Grove-Piezo_Vibration_Sensor: Grove-Piezo_Vibration_Sensor.md
    - 执行器:
      - Actuator: Actuator.md
      - Grove-MP3_v2.0: Grove-MP3_v2.0.md

```


### 3. 在wiki_chinese下，运行 python Category_Generator.py 来生成各个category的md文件

- 从wiki_chinese\docs\template目录下复制category的md文件

```

name: Grove - Actuator
nointro:

Grove - 执行器包括电机驱动器，LED显示屏，继电器，扬声器，蜂鸣器等模块。

## 产品清单

以下是您可以在Seeed WiKi中找到的Grove - 执行器列表。 该列表将不断更新。

```

- 在docs下生成相关category的索引

```

name: Grove - Actuator
nointro:

Grove - 执行器包括电机驱动器，LED显示屏，继电器，扬声器，蜂鸣器等模块。

## 产品清单

以下是您可以在Seeed WiKi中找到的Grove - 执行器列表。 该列表将不断更新。

* [Grove-MP3_v2.0](http://seeed.wiki/Grove-MP3_v2.0)

```

### 4. 执行执行 **mkdocs serve** 进行预览
### 5. 执行 **mkdocs build --clean**，编译的静态文件会出现在 **site** 文件夹
### 6. 在wiki_chinese下，运行 python SKU_generator_wiki_CN.py 在site下生成sku html文件
### 7. 上传wiki-chinese文件夹到github

```
git add. 
git commit -m "update"
git push origin master 
```

### 8.拷贝Wiki-chinese site文件夹的所有文件到SeeedDocument.github.io目录下，并且上传。
```
git add. 
git commit -m "update"
git push origin master 
```

!!! note
    CNAME文件不要删掉

## 文档格式

- **1. 简介**
- **2. 规格参数**
- **3. 创意应用**
- **4. 硬件概述**
- **5. 入门指导**
- **6. 资源**

## 贡献

这个文档系统有Seeed维护，并且欢迎你对文档的内容分析你的贡献，贡献包括但不限于：

* 错别字或者不恰当的词汇表达
* 增加内容以使教程更加的清晰
* 上传更好的图片
* 其他必要的修改或优化

## MkDocs

**这个项目基于开源的文档系统MKDocs**


[![PyPI Downloads][pypi-dl-image]][pypi-dl-link]
[![PyPI Version][pypi-v-image]][pypi-v-link]
[![Build Status][travis-image]][travis-link]
[![Windows Build Status][appveyor-image]][appveyor-link]
[![Coverage Status][codecov-image]][codecov-link]

- View the [MkDocs documentation][mkdocs].
- Project [release notes][release-notes].
- Visit the [MkDocs wiki](https://github.com/mkdocs/mkdocs/wiki) for community
  resources, including third party themes and a list of MkDocs users.
- IRC channel: `#mkdocs` on freenode.
- Discussions and support: <https://groups.google.com/forum/#!forum/mkdocs>

[appveyor-image]: https://img.shields.io/appveyor/ci/d0ugal/mkdocs/master.png
[appveyor-link]: https://ci.appveyor.com/project/d0ugal/mkdocs
[codecov-image]: http://codecov.io/github/mkdocs/mkdocs/coverage.svg?branch=master
[codecov-link]: http://codecov.io/github/mkdocs/mkdocs?branch=master
[landscape-image]: https://landscape.io/github/mkdocs/mkdocs/master/landscape.svg?style=flat-square
[landscape-link]: https://landscape.io/github/mkdocs/mkdocs/master
[pypi-dl-image]: https://img.shields.io/pypi/dm/mkdocs.png
[pypi-dl-link]: https://pypi.python.org/pypi/mkdocs
[pypi-v-image]: https://img.shields.io/pypi/v/mkdocs.png
[pypi-v-link]: https://pypi.python.org/pypi/mkdocs
[travis-image]: https://img.shields.io/travis/mkdocs/mkdocs/master.png
[travis-link]: https://travis-ci.org/mkdocs/mkdocs

[mkdocs]: http://www.mkdocs.org
[release-notes]: http://www.mkdocs.org/about/release-notes/

协议
-------
Copyright (c) 2018-2017 Seeed Inc. (https://www.seeedstudio.com)

文档及图片
---

<img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br />
这里所有的图片和文档顺从 <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>. <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"> </a>
的协议

## 联系我们

如果你有文档或者技术上的任何疑问，请联系 [techsupport@seeed.cc](techsupport@seeed.cc)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>