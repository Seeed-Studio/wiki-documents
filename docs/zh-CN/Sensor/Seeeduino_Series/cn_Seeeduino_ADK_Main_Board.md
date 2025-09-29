---
description: Seeeduino ADK 主板
title: Seeeduino ADK 主板
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /cn/Seeeduino_ADK_Main_Board
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Main_Board.jpeg)

Android 3.1 平台（也向后移植到 Android 2.3.4）引入了 Android Open Accessory 支持，允许外部 USB 硬件（Android USB 配件）在特殊的"配件"模式下与 Android 设备交互。基于 Google 的 ADK 参考设计，我们将 Seeeduino 的优势融入到我们的 Seeeduino ADK 主板中。

现在将 Seeeduino ADK 主板连接到您的 Android 移动设备，开始开发您的自定义配件。

[SKU:ARD52028P](https://www.seeedstudio.com/depot/seeeduino-adk-main-board-p-846.html?cPath=6_8)

##  规格参数 ##

- 兼容 Android Open Accessories 开发套件 (ADK)（Android v2.3.4 及以上版本）

- 使用 MicroBridge 与 Android Debug Bridge (ADB) 配合工作（Android v1.5 及以上版本）

- 简单地像带有集成 USB Shield 的 Arduino Mega 一样工作

- 工作电压：5v/3v3

- 输入电压：6V - 18V

- 数字 I/O：50

- 模拟输入：16

- PWM 输出：14

- 硬件串口 (UART)：4

- I2C：1

- 硬件 SPI（最高 8Mbps）：1

- 板载 USB 主机 (MAX3421)

- 板载 USB 从机 (FT232RL)

- 内置 3.3V-500mA LDO 电源稳压器

##   接口  ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Parts.jpg)
Seeeduino ADK 显著特性

Seeeduino ADK 硬件模块如下所列：
A：Micro USB 插座，将主板连接到 PC。用于使用 Arduino IDE 上传程序。
B：滑动开关，选择工作或 I/O 电压：3.3V 或 5V
C：USB A 插头，连接到 Android 移动设备。
D：JST 连接器 / DC 插孔，用于外部 DC 电源供应。使用外部 DC 时不要连接 PC。
E：复位按钮，方便地放置在侧面，允许在使用扩展板时使用复位。
F：I/O 引脚
G：ICSP，用于使用 AVR ICSP 编程 Arduino Bootloader
H：Max3421E GPIO 引出引脚
I：FT232RL 引出引脚

##   演示  ##

下图展示了 **Seeeduino ADK 主板** 与 Android 手机的应用示例。它运行基于本页面提供的 MicroBridge 的演示应用程序。所有基本电子元件都来自 [Arduino Sidekick Basic Kit](https://seeeddoc.github.io/Arduino_Sidekick_Basic_Kit/)。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/SeeeduinoADK_Setup.jpg)
Seeeduino ADK 主板和 Android 手机连接

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADK_Demo.jpg)

- 上传固件
- 将 VCC 滑动开关设置为 5V。

- 将 Seeeduino ADK 主板 - Micro USB 连接到 PC USB 端口。

- 在 Arduino IDE 中将板类型设置为 **Arduino Mega 2560**。

- 编译演示程序并上传到主板。

- Android 应用
- 安装 Android 平台开发软件。

- 将演示 Android 应用导入 Eclipse 工作空间。

- 将移动设备连接到 PC 并上传应用程序

- 将手机连接到 ADK 主板。

- 如果您的移动设备尚未启用 ADB，请启用 ADB。这仅适用于 MicroBridge。

- 按下复位按钮。

###   使用 MicroBridge   ###

示例应用程序和库可在资源部分获得。以下 Arduino 程序和 Android 代码都有很好的注释，解释了使用方法。

- SeeeduinoADKDemo.pde

```
//使用 Niels Brouwers 的 MicroBridge 库的 Seeeduino ADK 演示。
//将 LED 连接到 D12，将可变电阻器(POT)连接到 A0

#include <SPI.h>
#include <Adb.h>

// Adb 连接。
Connection * connection;

// ADC 采样的经过时间。ADC 值发送到 Android 设备的速率。
long lastTime;

//LED 的状态。初始为关闭。
uint8_t LEDState=0;

// shell 连接的事件处理程序。
// 每当数据从 Android 设备发送到 Seeeduino ADK 时，都会调用此事件处理程序。
// 任何要发送到 ADK I/O 的数据/命令都必须在这里处理。
//
// 例如：1.控制输出端口 2.通过 IIC 或串口与连接到 ADK 的设备交互。

void adbEventHandler(Connection * connection, adb_eventType event, uint16_t length, uint8_t * data)
{

  // 在此示例中，数据包包含一个字节，它决定连接到 D12 的 LED 的状态
  // 此应用程序的数据大小是预先确定的。Android 设备也使用相同的大小。

  if (event == ADB_CONNECTION_RECEIVE)
  {
     if(LEDState != data[0])
     {
         digitalWrite(12, data[0]);   // 改变 LED 的状态
         Serial.println(data[0],DEC);
       	 LEDState = data[0];          // 存储 LED 的状态
     }
  }

}

void setup()
{
  //串口调试目的
  Serial.begin(57600);

  // 记录开始时间
  lastTime = millis();

  // 将数字引脚 12（LED 连接）设置为输出
  pinMode(12,OUTPUT);

  // 初始化 ADB 子系统。  
  ADB::init();

  // 打开到手机 shell 的 ADB 流。自动重连。使用任何未使用的端口号，例如：4568
  connection = ADB::addConnection("tcp:4568", true, adbEventHandler);  

}

void loop()
{
  //检查是否需要采样 ADC。
  if ((millis() - lastTime) > 20)
  {
    //读取 ADC 值
    uint16_t data = analogRead(A0);

    //将 ADC 值作为两个字节的数据发送到 Android 设备。
    connection->write(2,(uint8_t*)&data);
    lastTime = millis();
  }

  // 轮询 ADB 子系统。
  ADB::poll();
}
```

- Android 应用程序
- 从 [Seeeduino ADK 演示应用程序包](http://garden.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip) 下载完整的 Android 应用程序。主要的 java 文件列在下面，并附有使用注释：

```
/* 应用程序演示了使用 Niels Brouwers 的 MicroBridge 库在 Seeeduino ADK 和 Android 设备之间的交互
 *
 * Android 设备：任何支持 ADB（Android 调试桥）的 Android v1.5 设备。   
 *  
 * 此应用程序使用非常简单（或简单）的设计以使其易于理解。
 *
 * 概述：
 * 1.Seeeduino ADK 主板定期采样模拟通道 0 并将其发送
 *   到 Android 设备进行显示。此值使用 TextView 和 SeekBar 小部件显示
 *
 * 2.Android 设备控制连接到 ADK 主板数字引脚 12 的 LED 状态。
 *   使用按钮小部件来实现此功能。
 *
 * Microbridge 使用基于 ADB 的客户端-服务器实现。在 Android 上运行的服务器代码
 * 设备在单独的线程中运行。因此，对 UI 小部件值的任何更新都必须在
 * UI 线程中执行。此应用程序使用基于 XML 的 UI 创建，因为它更容易添加额外的
 * UI 小部件。
 *
 */
package com.seeedstudio.SeeeduinoADKDemo;

import java.io.IOException;

import org.microbridge.server.AbstractServerListener;
import org.microbridge.server.Server;

import android.view.View;
import android.view.Window;
import android.view.View.OnClickListener;
import android.app.Activity;
import android.os.AsyncTask;
import android.os.Bundle;
import android.util.Log;
import android.widget.SeekBar;
import android.widget.TextView;
import android.widget.Button;


public class SeeeduinoADKDemo extends Activity implements OnClickListener {
	private int adcSensorValue=10;

	//UI 小部件
	TextView tvAdcvalue;
	SeekBar sbAdcValue;
	Button bOutPutLED;

	boolean LEDState = false ; //初始状态为关闭

	// 创建 TCP 服务器（基于 MicroBridge 轻量级服务器）。
	// 注意：此服务器在单独的线程中运行。
	Server server = null;

	/** 首次创建活动时调用。 */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.main);

		bOutPutLED = (Button) findViewById(R.id.buttonOuputLED);
		bOutPutLED.setOnClickListener(this);


		// 创建 TCP 服务器（基于 MicroBridge 轻量级服务器）
		try
		{
			server = new Server(4568); //使用与 ADK 主板固件中使用的相同端口号
			server.start();			
		} catch (IOException e)
		{
			Log.e("Seeeduino ADK", "无法启动 TCP 服务器", e);
			System.exit(-1);
		}

		server.addListener(new AbstractServerListener() {

			@Override
			public void onReceive(org.microbridge.server.Client client, byte[] data)
			{

				if (data.length<2) return;
				adcSensorValue = (data[0] & 0xff) | ((data[1] & 0xff) << 8);

				//对 UI 的任何更新都不能在非 UI 线程中执行，如用于
				//服务器的线程。因此使用 runOnUIThread。
				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						new UpdateData().execute(adcSensorValue);

					}
				});

			}

		});	 

	}	//TCP 服务器代码结束

	// UpdateData 异步发送从 ADK 主板接收的值。
	// 这由 onReceive() 触发
	class UpdateData extends AsyncTask<Integer, Integer, String> {
		// 调用以启动后台活动
		@Override
		protected String doInBackground(Integer... sensorValue) {

			//初始化 SeekBar 小部件以在 SeekBar 中显示 ADC 传感器值
			//SeekBar 的最大值设置为 1024
			SeekBar sbAdcValue = (SeekBar) findViewById(R.id.sbADCValue);	    	
			sbAdcValue.setProgress(sensorValue[0]);    
			return (String.valueOf(sensorValue[0]));  //这传递给结果

		}

		// 当有状态需要更新时调用
		@Override
		protected void onProgressUpdate(Integer... values) {
			super.onProgressUpdate(values);
			// 在此情况下未使用
		}

		// 后台活动完成后调用
		@Override
		protected void onPostExecute(String result) {
			//初始化 TextView 小部件以数字形式显示 ADC 传感器值。
			TextView tvAdcvalue = (TextView) findViewById(R.id.tvADCValue);
			tvAdcvalue.setText(String.valueOf(result));

		}
	}

	//点击 LED 按钮时调用
	@Override
	public void onClick(View v) {
		byte data;


		// 切换 LED 状态
		if(LEDState == true)
		{
			LEDState = false;
			data = 0;
			bOutPutLED.setText("LED 关闭");
		}
		else
		{
			LEDState = true;
			data = 1;
			bOutPutLED.setText("LED 开启");
		}

		try
		{
			//将 LED 状态作为字节发送到 ADK 主板
			server.send(new byte[] {(byte) data});
		} catch (IOException e)
		{
			Log.e("Seeeduino ADK", "发送 TCP 消息时出现问题", e);
		}

	}

}
```

###   使用 Google ADK   ###

访问 **Android ADK 开发者页面** 获取如何使用 Accessory API 的完整文档。

###   作为 Mega 2560  ###

Seeeduino ADK 主板可以用作 Seeeduino Mega 2560。它也能很好地与 GROVE 系统配合使用。Grove - Base Shield 可以用来连接众多可用的 Grove 模块。

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_MainBoard_With_Stem_Base_Shield.jpg)

以下是一个演示，展示了 2.8%27%27 TFT 触摸屏扩展板与 Seeeduino ADK 主板配合工作。
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADKMainBoard_TFTTouchShield_PhotoframeDemo.jpg)

- 将 Seeeduino ADK 主板连接到 2.8%27%27 TFT 触摸屏扩展板

- 将 SD 卡格式化为 FAT 模式

- 将工作电压滑动开关设置为 3.3V

- 复制几个 240 x 320 尺寸的 24 位位图图像（.bmp）文件到 SD 卡。一些示例文件在 [bmp 演示应用程序存档](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip) 中提供
- 如图所示，将 SD 卡 / microSD 卡适配器（带有 microSD 卡）连接到 **Seeeduino ADK 主板**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_photoframe.png)

- 下载并安装 [TFT 触摸库](https://www.seeedstudio.com/wiki/images/6/6e/Tft_touch_libraries.zip)
- 下载 [SD 卡](https://github.com/adafruit/SD) 库并将其安装到 Arduino 文件夹。

- 编译并上传 [这个](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip) 示例程序。

输出：
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_PhotoframeDemo.jpg)

- 参考 **2.8'' TFT 触摸屏扩展板** 获取更多信息。

- **Circuits@Home** 的 Oleg Mazurov 是最初设计基于 MAX3421E 的 USB 主机扩展板的人。这被 Google 的 ADK 参考板所采用。他的网站有大量信息和代码示例，用于使用基于 MAX3421E 的 USB 主机扩展板与 USB 键盘、鼠标、蓝牙适配器、Wii 遥控器等配合使用。


## 原理图在线查看器

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/cn/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   资源   ##

- **[库文件]** [修改版 MicroBridge Arduino 库](https://wiki.seeedstudio.com/cn/images/1/19/MicroBridge-ModifiedForSeeeduinoADK.zip)
- **[库文件]** [适用于 Arduino1.0 的修改版 MicroBridge Arduino 库](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/res/Adb_for_Arduino1.0.zip)
- **[演示]**[Seeeduino 演示 - Android 应用](https://wiki.seeedstudio.com/cn/images/1/1b/SeeeduinoADKDemo-App.zip)
- **[PDF]**[Seeeduino ADK Eagle 原理图 PDF](https://wiki.seeedstudio.com/cn/images/6/67/Seeeduino_ADK_0.9b_final_Scehmatic.pdf)
- **[Eagle]** [Seeeduino ADK Eagle 原理图和板文件](https://wiki.seeedstudio.com/cn/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip)
- **[配件]**[Android 开放配件开发套件页面](http://developer.android.com/guide/topics/usb/adk.html)
- **[MicroBridge]**[MicroBridge 页面](http://blogs.unpad.ac.id/dominodiaz/)
- **[USB]**[使用 USB 主机扩展板的游戏控制器](http://adrian-fh98.web.unair.ac.id/)

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