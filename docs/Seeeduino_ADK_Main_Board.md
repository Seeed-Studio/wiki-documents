---
name:  Seeeduino ADK Main Board‏‎
category: Discontinued
bzurl:
oldwikiname: Seeeduino_ADK_Main_Board‏‎
prodimagename:
surveyurl: https://www.research.net/r/Seeeduino-ADk_main_Board
bzprodimageurl:
sku: 102010009
tags:
---

![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/Seeeduino_ADK_Main_Board.jpeg)

The Android 3.1 platform (also backported to Android 2.3.4) introduces Android Open Accessory support, which allows external USB hardware (an Android USB accessory) to interact with an Android-powered device in a special "accessory" mode. Based on the Google’s ADK reference design, we merged advantages of Seeeduino into our Seeeduino ADK Main Board.

Now connect Seeeduino ADK Main Board to your Android mobile device and get started developing your custom accessory.

[SKU:ARD52028P](http://www.seeedstudio.com/depot/seeeduino-adk-main-board-p-846.html?cPath=6_8)

##  Specifications ##

- Android Open Accessories development Kit (ADK) compatible (Android v2.3.4 and above)  

- Works with Android Debug Bridge (ADB) using MicroBridge (Android v1.5 and above)

- Simply works like an Arduino Mega with an integrated USB Shield

- Operating voltage: 5v/3v3

- Input voltage: 6V - 18V

- Digital I/O : 50

- Analog inputs: 16

- PWM outputs: 14

- Hardware serial ports (UART): 4

- I2C: 1

- Hardware SPI (up to 8Mbps): 1

- On board USB host(MAX3421)

- On board USB slave(FT232RL)

- Build-in 3.3V-500mA LDO power regulator.

##   Interface  ##

![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/Seeeduino_ADK_Parts.jpg)
Seeeduino ADK Salient Features

Seeeduino ADK Hardware blocks are listed below:
A: Micro USB Socket, connect main board to PC. Used for uploading sketch using Arduino IDE.
B: Slide switch, to choose operating or I/O voltage: 3.3V or 5V
C: USB A Plug, connect to Android Mobile Device.
D: JST Conector / DC Jack, for external DC power supply. Do not connect PC while using external DC.
E: Reset Button, conveniently  placed at the side to allow using reset while using shields.
F: I/O pins
G: ICSP，for programming Arduino Bootloader using AVR ICSP
H: breakouts pins of Max3421E GPIO
I: breakouts pins of FT232RL

##   Demonstration  ##

The following image illustrates an application example of **Seeeduino ADK Main Board** with an Android Mobile. It runs the demo application based on MicroBridge provided illustrated this page. All basic electronic components are taken from [Arduino Sidekick Basic Kit](https://seeeddoc.github.io/Arduino_Sidekick_Basic_Kit/) .

![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/SeeeduinoADK_Setup.jpg)
Seeeduino ADK Main Board and Android Mobile Connection

![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/ADK_Demo.jpg)

- Uploading Firmware
- Set the VCC slide switch to 5V.

- Connect the Seeeduino ADK Main Board - Micro USB to PC USB port.

- Set the Board type in Arduino IDE to **Arduino Mega 2560**.

- Compile the Demo Sketch and upload to Main Board.

- Android App
- Install Android Platform Development Software.

- Import the demo Android app to Eclipse Workspace.

- Connect the mobile device to PC and upload the application

- Connect the mobile to ADK Main Board.

- Enable ADB in your Mobile device if not already enabled. This is only for MicroBridge.

- Push the Reset button.

###   Using MicroBridge   ###

The sample applications and library are available in the resources section. The following Arduino Sketch and Android code are commented well explaining the usage.

- SeeeduinoADKDemo.pde

```
//Seeeduino ADK Demo using Niels Brouwers' MicroBridge library.
//Connect a LED to D12 and a variable resistor(POT) to A0

#include <SPI.h>
#include <Adb.h>

// Adb connection.
Connection * connection;

// Elapsed time for ADC sampling. The rate at which ADC value is sent to Android device.
long lastTime;

//State of LED. Initially OFF.
uint8_t LEDState=0;

// Event handler for the shell connection.
// This event handler is called whenever data is sent from Android Device to Seeeduino ADK.
// Any data / command to be sent to I/O of ADK has to be handled here.
//
// For eg: 1.Controlling an ouput port 2.Interacting with a device connected
// to ADK via IIC or Serial Port.

void adbEventHandler(Connection * connection, adb_eventType event, uint16_t length, uint8_t * data)
{

  // In this example Data packets contain one byte and it decides the state of a LED connected to D12
  // The size of data is predetermined for this application. Android device also uses the same size.

  if (event == ADB_CONNECTION_RECEIVE)
  {
     if(LEDState != data[0])
     {
         digitalWrite(12, data[0]);   // Change the state of LED
         Serial.println(data[0],DEC);
       	 LEDState = data[0];          // Store the State of LED
     }
  }

}

void setup()
{
  //Serial port debug purpose
  Serial.begin(57600);

  // Note start time
  lastTime = millis();

  // Set Digital pin 12 (LED is connected) as output
  pinMode(12,OUTPUT);

  // Initialise the ADB subsystem.  
  ADB::init();

  // Open an ADB stream to the phone's shell. Auto-reconnect. Use any unused port number eg:4568
  connection = ADB::addConnection("tcp:4568", true, adbEventHandler);  

}

void loop()
{
  //Check if ADC needs to be sampled.
  if ((millis() - lastTime) > 20)
  {
    //Read ADC value
    uint16_t data = analogRead(A0);

    //Send the ADC value to Android device as two bytes of data.
    connection->write(2,(uint8_t*)&data);
    lastTime = millis();
  }

  // Poll the ADB subsystem.
  ADB::poll();
}
```

- Android Application
- Download the complete Android application from [Seeeduino ADK Demo application package](http://garden.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip). The main java file is listed below with usage comments :

```
/* Application demonstrates the interaction between Seeeduino ADK and Android Device
 * using Niels Brouwers' MicroBridge library.
 *
 * Android Device: Any device with Android v1.5 which supports ADB(Android Debug Bridge).   
 *  
 * This application uses a very simple (or a trivial) design to make it understandable.
 *
 * Overview:
 * 1.Seeeduino ADK Main Board periodically samples Analog Channel 0 and sends it
 *   to Android Device for display. This value is displayed using a TextView and SeekBar Widgets
 *
 * 2.Android device controls the state of a LED connected to Digital Pin 12 of ADK Main Board.
 *   A Button Widget used for this.
 *
 * Microbridge uses ADB based client-server implementation. The Server code that runs on Android
 * device runs in a separate thread. Hence any update to UI widgets value has to be carried out
 * in UI thread. This application uses XML based UI creation as it is easier for adding addition
 * UI Widgets.
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

	//UI Widgets
	TextView tvAdcvalue;
	SeekBar sbAdcValue;
	Button bOutPutLED;

	boolean LEDState = false ; //initially OFF

	// Create TCP server (based on  MicroBridge LightWeight Server).
	// Note: This Server runs in a separate thread.
	Server server = null;

	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		requestWindowFeature(Window.FEATURE_NO_TITLE);
		setContentView(R.layout.main);

		bOutPutLED = (Button) findViewById(R.id.buttonOuputLED);
		bOutPutLED.setOnClickListener(this);


		// Create TCP server (based on  MicroBridge LightWeight Server)
		try
		{
			server = new Server(4568); //Use the same port number used in ADK Main Board firmware
			server.start();			
		} catch (IOException e)
		{
			Log.e("Seeeduino ADK", "Unable to start TCP server", e);
			System.exit(-1);
		}

		server.addListener(new AbstractServerListener() {

			@Override
			public void onReceive(org.microbridge.server.Client client, byte[] data)
			{

				if (data.length<2) return;
				adcSensorValue = (data[0] & 0xff) | ((data[1] & 0xff) << 8);

				//Any update to UI can not be carried out in a non UI thread like the one used
				//for Server. Hence runOnUIThread is used.
				runOnUiThread(new Runnable() {
					@Override
					public void run() {
						new UpdateData().execute(adcSensorValue);

					}
				});

			}

		});	 

	}	//End of TCP Server code

	// UpdateData Asynchronously sends the value received from ADK Main Board.
	// This is triggered by onReceive()
	class UpdateData extends AsyncTask<Integer, Integer, String> {
		// Called to initiate the background activity
		@Override
		protected String doInBackground(Integer... sensorValue) {

			//Init SeeekBar Widget to display ADC sensor value in SeekBar
			//Max value of SeekBar is set to 1024
			SeekBar sbAdcValue = (SeekBar) findViewById(R.id.sbADCValue);	    	
			sbAdcValue.setProgress(sensorValue[0]);    
			return (String.valueOf(sensorValue[0]));  //This goes to result

		}

		// Called when there's a status to be updated
		@Override
		protected void onProgressUpdate(Integer... values) {
			super.onProgressUpdate(values);
			// Not used in this case
		}

		// Called once the background activity has completed
		@Override
		protected void onPostExecute(String result) {
			//Init TextView Widget to display ADC sensor value in numeric.
			TextView tvAdcvalue = (TextView) findViewById(R.id.tvADCValue);
			tvAdcvalue.setText(String.valueOf(result));

		}
	}

	//Called when the LED button is clicked
	@Override
	public void onClick(View v) {
		byte data;


		// Toggle the state of LED
		if(LEDState == true)
		{
			LEDState = false;
			data = 0;
			bOutPutLED.setText("LED Off");
		}
		else
		{
			LEDState = true;
			data = 1;
			bOutPutLED.setText("LED On");
		}

		try
		{
			//Send the state of LED to ADK Main Board as a byte
			server.send(new byte[] {(byte) data});
		} catch (IOException e)
		{
			Log.e("Seeeduino ADK", "problem sending TCP message", e);
		}

	}

}
```

###   Using Google ADK   ###

Visit **Android ADK Developer page** for complete documentation on how to use Accessory API.

###   As Mega 2560  ###

Seeeduino ADK Main Board can be used as Seeeduino Mega 2560. It also works well with GROVE System. The Grove - Base Shield can be used to connect the numerous Grove modules available.

![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/Seeeduino_ADK_MainBoard_With_Stem_Base_Shield.jpg)

And following is a demo showing 2.8%27%27 TFT Touch Shield working with Seeeduino ADK Main Board.
![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/ADKMainBoard_TFTTouchShield_PhotoframeDemo.jpg)

- Connect Seeeduino ADK Main Board to 2.8%27%27 TFT Touch Shield

- Format SD card in FAT mode

- Set the operating voltage slide switch to 3.3V

- Copy few 24-bit Bitmap Images (.bmp) files of 240 x 320 size to SD Card. Few samples are present in [bmp demo application archive](http://seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip)
- Connect the SD card / microSD Card Adapter (with a microSD card) as shown in the illustration to **Seeeduino ADK Main Board**

![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/TFT_Touch_Shield_photoframe.png)

- Download and install [TFT Touch Library](http://seeedstudio.com/wiki/images/6/6e/Tft_touch_libraries.zip)
- Download [SD Card](https://github.com/adafruit/SD) library and install it to Arduino folder.

- Compile and upload [this](http://seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip) sketch.

Output:
![](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/img/TFT_Touch_Shield_PhotoframeDemo.jpg)

- Refer **2.8'' TFT Touch Shield** for more information.

- Oleg Mazurov of  **Circuits@Home** is the one who originally designed USB Host Shield based on MAX3421E. This was adapted by Google's ADK Referece Board. His site has tons of information and code examples to use MAX3421E based USB Host Shield to with USB keyboard, Mouse, Bluetooth Dongle, Wii Remote, etc.

##   Resources   ##

- **[Library]** [Modified MicroBridge Arduino Library](http://wiki.seeedstudio.com/images/1/19/MicroBridge-ModifiedForSeeeduinoADK.zip)
- **[Library]** [Modified MicroBridge Arduino Library for Arduino1.0](https://github.com/SeeedDocument/Seeeduino-ADK_Main_Board/raw/master/res/Adb_for_Arduino1.0.zip)
- **[Demo]**[Seeeduino Demo - Android App](http://wiki.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip)
- **[PDF]**[Seeeduino ADK Eagle Schematic PDF](http://wiki.seeedstudio.com/images/6/67/Seeeduino_ADK_0.9b_final_Scehmatic.pdf)
- **[Eagle]** [Seeeduino ADK Eagle Schematic and Board Files](http://wiki.seeedstudio.com/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip)
- **[Accessory]**[Android Open Accessory Development Kit Page](http://developer.android.com/guide/topics/usb/adk.html)
- **[MicroBridge]**[MicroBridge Page](http://blogs.unpad.ac.id/dominodiaz/)
- **[USB]**[Game controllers using USB Host Shield](http://adrian-fh98.web.unair.ac.id/)

## Tech Support
Please submit any technical issue into our [forum](http://forum.seeedstudio.com/). <br /><p style="text-align:center"><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg" /></a></p>