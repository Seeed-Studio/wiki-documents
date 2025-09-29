---
description: Seeed Studio XIAO 套件课程
title: Seeed Studio XIAO 套件课程
keywords:
- xiao
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/XIAO-Kit-Courses
last_update:
  date: 1/11/2023
  author: shuxu hu
---
# XIAO：强大功能，小巧板型

<div align="center" class="all_container">
    <div align="left" class="xiao_topic_page_pic">
        <img src="https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/cover.jpg" style={{width:300, height:'auto'}}/>
    </div>
    <div class="xiao_topic_page_vertical">
        <font size={"4"}><strong>掌握 Arduino 和 TinyML</strong></font>
        <br /><font size={"3"}><strong>作者</strong></font>
        <font size={"2"}>Lei Feng, Marcelo Rovai</font>
        <br /><font size={"3"}><strong>发布时间</strong></font>
        <font size={"2"}>2023年12月8日</font>
        <br /><font size={"3"}><strong>诚挚感谢</strong></font>
        <font size={"2"}>Jiamou Yang, Yanming Wen, Mengdu Li, Chunchun Tian, Haixu Liu, Tianrui Wang, and Jianjing Huang</font>
    </div>
</div>

<!-- <p style=":center"><a href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p> -->

<div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-Starter-Kit-p-5378.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}>🖱️ 购买套件</font></span></strong></a></div>

## 简介

Seeed Studio XIAO 系列代表了 Arduino 生态系统中的突破性演进，将紧凑性与强大性能相结合。理解和掌握其功能对于电子学和机器学习领域的任何爱好者或专业人士都至关重要。随着技术的快速发展和对更小、更高效设备的日益增长的需求，掌握 XIAO 及其与 TinyML 的集成变得至关重要。它为创新提供了新的前沿，允许在以前认为不可能的空间中创建复杂的项目。这个主题至关重要，因为它与电子学、物联网和机器学习的未来发展轨迹保持一致，使其对于那些旨在保持在技术进步前沿的人来说不可或缺。

## 套件中的零件清单

<div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/s/e/seeed_studio_xiao_starter_kit_-_all_seeed_studio_xiao_series_deve_after_1_.jpg" style={{width:500, height:'auto'}}/></div>

## 关于本书

### 目标读者

《XIAO：强大功能，小巧板型》的主要读者包括希望探索和最大化紧凑硬件平台潜力的电子学和机器学习领域的爱好者、学生、教育工作者和专业人士。通常，这些读者可能担任电子爱好者、DIY 项目创作者、电子教育工作者，甚至是初级嵌入式系统开发人员的职位。随着他们在职业生涯中的进步，他们可能会关注电子设计工程师、物联网开发人员或机器学习硬件集成工程师等角色。

我们的读者具备基本的电子学概念理解，但可能尚未深入研究 Arduino 编程或紧凑硬件设计。他们可能接触过关于 Arduino 或通用电子学的标准入门书籍，但可能尚未涉足专业硬件或 TinyML。在技能方面，他们具有基本电子学或编程的一些实践经验，但尚未掌握 TinyML 或高级微控制器功能的复杂性。

### 读者将学到什么

通过本书的学习，读者将理解：

- 开源硬件的基础知识，重点关注 Seeed Studio XIAO 系列的功能。
- 如何从基础电子项目过渡到高级项目，从简单的 LED 控制开始，进展到遥测和语音关键词检测等复杂应用。
- 原型设计背后的概念及其在产品开发中的实际意义。

- 将红外接收器、超声波距离传感器和 RTC 时钟等各种模块与 XIAO 平台集成的复杂性。

- 微型机器学习（TinyML）的重要性和应用，强调其在 XIAO nRF52840 Sense 和 ESP32S3 Sense 等硬件中的变革力量。

- 利用 Edge Impulse Studio 等高级工具进行异常和物体检测以及视频或声音分类等实际应用的技术。

读者将能够：

- 在所有 XIAO 系列板上设置、编程和故障排除项目，从基本硬件交互进展到复杂的项目设计。

- 利用课程中的见解，将抽象想法转换为有形的电子产品原型。

- 使用专用传感器和模块设计和实现中级项目，如智能手表和空气钢琴。

- 利用 XIAO ESP32C3 的 Wi-Fi 和 MQTT 协议功能进行云通信和数据交换。

- 在不同的 XIAO 板上部署 TinyML，执行图像、运动和声音分类以及异常和物体检测等任务。

- 创新和扩展项目想法，从精选的 XIAO 项目集合中汲取灵感，并根据自定义需求进行调整。

## 书籍大纲

### [第1章：硬件和编程入门](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_1.html)

在本章中，读者将从使用Arduino IDE在XIAO上进行基础编程开始。通过简单的示例程序，他们将学习控制LED灯、按钮、蜂鸣器和其他电子元件，掌握数字I/O、模拟I/O、音调生成和数值映射等核心编程概念。通过逐行手动输入代码示例，他们将培养良好的编程习惯并掌握编程语法。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_1-6/chapter_1-6_7.jpg" style={{width:500, height:'auto'}}/></div>

### [第2章：初学者项目实践 - 原型设计入门](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_2.html)

在本章中，读者将通过适合初学者的项目学习使用XIAO设计原型的基础知识。他们将从一个想法开始，快速创建验证原型，更多地关注代码的实际应用而不是逐行分析。通过利用Arduino库、社区资源和示例程序，他们将学习如何查找和调整代码片段以高效实现所需效果。此外，他们还将探索如何通过创造性地将电子硬件与日常用品结合来设计原型的物理外观。关键成果是掌握基于项目的方法并培养构建简单交互式原型的技能。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_2-2/chapter_2-2_15.jpg" style={{width:500, height:'auto'}}/></div>

### [第3章：中级项目实践——复杂项目](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_3.html)

在本章中，读者将通过使用XIAO创建复杂的物联网项目来提升他们的原型制作技能。他们将使用XIAO ESP32C3实现Wi-Fi连接、MQTT遥测和远程控制命令等功能。通过智能远程门、智能手表和空气钢琴等复杂构建，您将磨练无线通信、云集成和嵌入式控制的编程技术。将提供可选的蓝图，但鼓励读者使用替代材料探索创意外壳设计。关键成果是掌握中级物联网原型制作并为高级tinyML应用做准备。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_3-2/chapter_3-2_12.jpg" style={{width:500, height:'auto'}}/></div>

### [第4章：高级项目实践 - tinyML应用](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_4.html)

在XIAO系列产品中，Seeed Studio XIAO nRF52840 Sense具有蓝牙5.0无线连接、低功耗，并配备板载6轴IMU和PDM麦克风传感器。XIAO ESP32S3 Sense进一步集成了摄像头、数字麦克风和SD卡支持。这些功能使它们成为TinyML（嵌入式机器学习）项目的强大工具。TinyML以与传统编程方法完全不同的方式解决问题。本章将通过使用Edge Impulse Studio工具演示从数据收集、训练和测试到部署和推理的整个机器学习工作流程，向读者介绍这一前沿领域。

<div style={{textAlign:'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1654543/bugs-inference_fXpzxJOZRj.png?auto=compress%2Cformat&w=1280&h=960&fit=max" style={{width:500, height:'auto'}}/></div>

### [第5章：创意实验](https://mjrovai.github.io/XIAO_Big_Power_Small_Board-ebook/chapter_5.html)

自推出以来，Seeed Studio XIAO系列因其紧凑的尺寸、强大的性能和多样化的产品范围而广受赞誉。创客社区已经产生了大量使用XIAO创建的项目。由于篇幅限制，我们选择了一些由我们的创客使用XIAO制作的优秀项目。这些项目充分展示了XIAO的强大功能和广泛应用。让我们跟随创客的脚步，激发创造力，探索XIAO的无限可能性。读者可以从这些项目中汲取灵感，发挥想象力，与XIAO一起探索新的领域。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_Big_Power-Board-ebook-photo/chapter_5-1/chapter_5-1_7.jpg" style={{width:500, height:'auto'}}/></div>

<!-- The courses contain 4 Units and 16 lessons to help you quickly get started with development boards and then you can proceed to realize little and individual fun projects. -->

<!-- <table align="center">
	<tr>
	    <td align="center"></td>
	    <td align="center"></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit.jpg" alt="pir" width="600" height="auto"/> 
		</td>
	    <td align="left"><strong> 前言</strong>: 本课程不需要Arduino编程或电子学知识。课程将带您逐步了解和学习这些必要的知识，并在每个项目中快速实践。       <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit-Preface.pdf">前言 ></a></td>
	</tr>
	<tr>
	    <td ><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokitss.png" alt="pir" width="250" height="auto"/></td>
	    <td align="left"><strong>单元1 硬件和编程入门 </strong>: 在学习过程中，我们尽力确保每个任务的程序代码都是由我们自己编写的，养成良好的习惯，避免因一些符号错误或不熟悉的规则而导致程序上传失败。 <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-1.zip">  入门 ></a></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit1.png" alt="pir" width="500" height="auto" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>单元2 项目实践</strong>:在本单元中，我们将以几个经典项目为例进行项目实践，学习如何从一个想法创建一个可以快速验证的原型。在本单元中，我们不会逐行分析代码，只解释关键步骤。  <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-2.zip">项目实践 ></a></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit2.png" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>单元3 高级项目</strong>: 在本单元中，我们将实践更复杂和完整的项目。程序实现的效果和设计结构更加面向成品。 <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-3.zip">高级项目 ></a></td>
	</tr>
	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit3.png" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>单元4 自主开发项目</strong>: 在本单元中，我们将实践所学知识，从作品的改造开始，然后共同完成一个从0开始的原型作品，并在发布会上展示。    <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/Unit-4.zip">自主开发项目 ></a></td>
	</tr>
    	<tr>
	    <td><img src="https://files.seeedstudio.com/wiki/XIAO-Kit/xiaokit4.png" alt="pir" width="500" height="auto"/></td>
	    <td align="left"><strong>后记</strong>: 与本课程相关的资源、下载、链接和说明。 <a href="https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO-Kit-Aferword.pdf">后记 ></a></td>
	</tr>
</table>

<!-- ## 资源

- **[PDF]**[Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step](https://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/Seeeduino-XIAO-in-Action-Minitype&Wearable-Projects-Step-by-Step.pdf)
- **[DXF]**[XIAO_ADR](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_ADR.dxf)
- **[DXF]**[XIAO_Air_Piano](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_Air_Piano.dxf)
- **[DXF]**[XIAO_X_watch](https://files.seeedstudio.com/wiki/XIAO-Kit/XIAO_X_watch.dxf) -->

## 参考资料

### 在线课程

- [哈佛工程与应用科学学院 - CS249r: 微型机器学习](https://sites.google.com/g.harvard.edu/tinyml/home)
- [微型机器学习 (TinyML) 专业证书 -- edX/哈佛](https://www.edx.org/professional-certificate/harvardx-tiny-machine-learning)
- [嵌入式机器学习入门 - Coursera/Edge Impulse](https://www.coursera.org/learn/introduction-to-embedded-machine-learning)
- [嵌入式机器学习计算机视觉 - Coursera/Edge Impulse](https://www.coursera.org/learn/computer-vision-with-embedded-machine-learning)
- [UNIFEI-IESTI01 TinyML: "嵌入式设备机器学习"](https://github.com/Mjrovai/UNIFEI-IESTI01-TinyML-2023.1)

### 书籍

- ["Python数据分析" by Wes McKinney](https://wesmckinney.com/book/)
- ["Python深度学习" by François Chollet](https://www.manning.com/books/deep-learning-with-python) - [GitHub Notebooks](https://github.com/fchollet/deep-learning-with-python-notebooks)
- ["TinyML" by Pete Warden, Daniel Situnayake](https://www.oreilly.com/library/view/tinyml/9781492052036/)
- ["TinyML Cookbook" by Gian Marco Iodice](https://github.com/PacktPublishing/TinyML-Cookbook)
- ["深度学习时代AI工程师的技术策略" by Andrew Ng](https://github.com/ajaymache/machine-learning-yearning/blob/master/full%20book/machine-learning-yearning.pdf)
- ["边缘AI" book by Daniel Situnayake, Jenny Plunkett](https://www.oreilly.com/library/view/ai-at-the/9781098120191/)
- ["TinyML机器学习系统" 协作成果](https://harvard-edge.github.io/cs249r_book/)

### 项目仓库

- [Edge Impulse 专家网络](https://docs.edgeimpulse.com/experts/)

## 关于作者

**冯磊** 是 Seeed Studio 技术支持团队和产品课程的负责人。作为开源硬件和边缘计算领域的资深作者，他在中国出版了多本书籍，包括《做游戏，玩编程------零基础开发微软 Arcade 掌机游戏》、《Arduino 图形化编程轻松学》，以及在微软中国支持下翻译的《深入浅出 IoT：完整项目通关实战》。

冯磊与他的团队创建了大量中英文教程和开源文档。他在开发物联网和边缘计算项目方面的实践经验，使他对为初学者简化复杂概念有着独特的见解。作为一位引人入胜的作者和耐心的老师，冯磊是让全世界新手都能接触 Arduino 和 TinyML 的理想向导。

*LinkedIn 档案：* [*https://www.linkedin.com/in/leon-feng-a029bb1/*](https://www.linkedin.com/in/leon-feng-a029bb1/)

**Marcelo Rovai** 是工程和技术教育领域的知名人物，拥有巴西伊塔朱巴联邦大学名誉教授称号。他的教育背景包括 UNIFEI 的工程学位和圣保罗大学理工学院的高级专业化学位。为了进一步提升专业技能，他获得了 IBMEC (INSPER) 的 MBA 学位和智利发展大学的数据科学硕士学位。

他的职业生涯跨越了多家知名技术公司，如 AVIBRAS Airspace、ATT、NCR 和 IGT，在 IGT 担任拉丁美洲副总裁，为他的学术事业带来了丰富的行业经验。他是电子相关主题的多产作家，并通过 Hackster.io 等开放平台分享知识。

除了专业追求外，他还致力于教育推广，在 UNIFEI 担任志愿教授，并作为联合主席参与 TinyML4D 小组，在发展中国家推广 TinyML 教育。他的工作体现了利用技术促进社会进步的承诺。

*LinkedIn 档案：* [*https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/*](https://www.linkedin.com/in/marcelo-jose-rovai-brazil-chile/)

*Twitter 账号：* *\@mjrovai*

*作者公开演讲样本 (YouTube 等)：* [*https://www.youtube.com/watch?v=KeXlAazzgKw*](https://www.youtube.com/watch?v=KeXlAazzgKw)

## 技术支持与产品讨论

感谢您选择我们的产品！我们在这里为您提供不同的支持，以确保您使用我们产品的体验尽可能顺畅。我们提供多种沟通渠道，以满足不同的偏好和需求。

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
