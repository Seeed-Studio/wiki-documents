---
description: 使用 Seeed Studio XIAO RA4M1 构建一个简单的时钟。
title: 由 Seeed Studio XIAO RA4M1 驱动的镂空时钟
keywords:
- ra4m1
- xiao
- clokc
image: https://files.seeedstudio.com/wiki/RA4M1_Application/top.webp
side_position: 2
slug: /cn/xiao_ra4m1_clock
sidebar_class_name: hidden 
last_update:
  date: 11/12/2024
  author: Jason
---


<div class="table-center">
<iframe width="800" height="500" src="https://files.seeedstudio.com/wiki/RA4M1_Application/1.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>


## 灵感来源

[镂空时钟](https://www.youtube.com/watch?v=jvoOgxK4EvI&ab_channel=TheWrench) 在一段时间前在 YouTube 上获得了巨大的人气，原始设计来自 [sh1ura](https://www.instructables.com/Hollow-Clock-4/)，[酷炫的演示视频](https://youtu.be/hRpLiRoMx34) 以及 [Thingsverse 上的 3D 设计](https://www.thingiverse.com/thing:5636482)。向 sh1ura 致敬，感谢这个伟大的灵感。
站在巨人的肩膀上，我们现在使用拇指大小的 [XIAO RA4M1](https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html) 和一个定制的更小的电机驱动板重新制作了一个版本！

## 硬件概述

### MCU

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO RA4M1</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-R4AM1/img/2-102010551-Seeed-Studio-XIAO-RA4M1-45font.jpg" style={{width:300, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-RA4M1-p-5943.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> 立即获取 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>


### 电路板

与 XIAO 相同的体积，只需焊接母座并将 XIAO 和电机插入其中即可操作。

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RA4M1_Application/2.png" style={{width:500, height:'auto'}}/></div>


具体信息在最后的资源中。

:::tip
电机和组件都需要自行购买。
:::

### 软件概述

```c

// 这段代码控制步进电机用于时钟项目，
// 允许分针根据时间准确旋转。

// 如果时钟走快或走慢，请调整以下值。
// 理论上，标准值是每分钟60000毫秒。
#define MILLIS_PER_MIN 60000 // 每分钟的毫秒数

// 电机和时钟参数
// 分针转子完整转动的总步数
// 计算为每转4096步 * 90度 / 12小时
#define STEPS_PER_ROTATION 30720 // 分针转子完整转动的步数

// 步进电机单步的等待时间
int delaytime = 2;

// 用于控制步进电机的端口
// 如果您的电机向相反方向旋转，
// 请根据需要更改端口号的顺序。
int port[4] = {0, 1, 2, 3};

// 步进电机控制序列
// 此数组定义电机相位的控制序列。
int seq[8][4] = {
  {  LOW, HIGH, HIGH,  LOW},
  {  LOW,  LOW, HIGH,  LOW},
  {  LOW,  LOW, HIGH, HIGH},
  {  LOW,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW, HIGH},
  { HIGH,  LOW,  LOW,  LOW},
  { HIGH, HIGH,  LOW,  LOW},
  {  LOW, HIGH,  LOW,  LOW}
};

// 根据指定步数旋转步进电机的函数
void rotate(int step) {
  static int phase = 0;
  int i, j;
  int delta = (step > 0) ? 1 : 7; // 确定旋转方向
  int dt = 20; // 初始延迟时间

  step = (step > 0) ? step : -step; // 转换为正步数
  for(j = 0; j < step; j++) {
    phase = (phase + delta) % 8; // 更新相位
    for(i = 0; i < 4; i++) {
      digitalWrite(port[i], seq[phase][i]); // 控制电机
    }
    delay(dt); // 等待指定延迟
    if(dt > delaytime) dt--; // 逐渐减少延迟
  }
  // 断电：停止电机
  for(i = 0; i < 4; i++) {
    digitalWrite(port[i], LOW);
  }
}

// 设置函数，在启动时运行一次
void setup() {
  // 将电机控制端口初始化为输出
  pinMode(port[0], OUTPUT);
  pinMode(port[1], OUTPUT);
  pinMode(port[2], OUTPUT);
  pinMode(port[3], OUTPUT);
  
  // 执行初始接近运行以定位分针
  rotate(-20); // 向一个方向接近运行
  rotate(20);  // 向相反方向接近运行
  rotate(STEPS_PER_ROTATION / 60); // 定位分针
}

// 主循环，连续运行
void loop() {
  static long prev_min = 0, prev_pos = 0; // 跟踪前一分钟和位置
  long min;
  static long pos;
  
  min = millis() / MILLIS_PER_MIN; // 获取当前分钟
  if(prev_min == min) {
    return; // 如果分钟没有改变则退出
  }
  prev_min = min; // 更新前一分钟
  pos = (STEPS_PER_ROTATION * min) / 60; // 计算目标位置
  rotate(-20); // 向一个方向接近运行
  rotate(20);  // 向相反方向接近运行
  if(pos - prev_pos > 0) {
    rotate(pos - prev_pos); // 如果需要，旋转到新位置
  }
  prev_pos = pos; // 更新前一位置
}

```

- **确保步进电机连接**：
将步进电机的四根控制线连接到端口数组中指定的端口（0、1、2、3）。

- **调整时间设置**：
根据实际情况调整MILLIS_PER_MIN值以确保时钟准确。如果时钟走快或走慢，请相应调整此值。

- **确认步数计算**：
确保STEPS_PER_ROTATION值根据您电机的实际步数和系统设计正确计算。

- **调整延迟时间**：
delaytime控制每步之间的延迟。根据电机性能和要求微调此参数以优化电机运行。

- **控制序列设置**：
seq数组定义步进电机的控制序列。如果电机向错误方向旋转，您可以调整此数组中的值。

- **函数说明**：
rotate(int step)：控制电机旋转指定步数。您可以传递正值或负值来控制方向。电机在每次旋转后会逐渐减少延迟以提高速度。

- **setup()：** 在启动时运行一次以初始化控制端口并执行初始定位。这是设置电机的必要步骤。

- **loop()：** 连续运行的主循环，用于计算当前分钟并更新分针位置。此函数将在每次分钟更新时调用rotate()函数来旋转指针。

:::tip

- 确保电源适合您的步进电机，并检查所有连接是否正确。

- 在测试期间，监控电机的运行以确保其按预期工作，并根据需要进行调整。
:::

如果您有更多想法和修改，欢迎使用XIAO系列来展示它们！

## 资源

- 📄 **[原理图]** [电机驱动板](https://files.seeedstudio.com/wiki/RA4M1_Application/4.zip)
- 📄 **[PCB]** [电机驱动板](https://files.seeedstudio.com/wiki/RA4M1_Application/xiao.pcb)
- 📄 **[3D]** [时钟3D建模](https://files.seeedstudio.com/wiki/RA4M1_Application/clock.zip)

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