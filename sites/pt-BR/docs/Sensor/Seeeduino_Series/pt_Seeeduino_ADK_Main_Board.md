---
description: Placa Principal Seeeduino ADK
title: Placa Principal Seeeduino ADK
keywords:
  - Seeeduino
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Seeeduino_ADK_Main_Board
sku: 110020001
last_update:
  date: 1/31/2023
  author: shuxu hu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Seeeduino_ADK_Main_Board/
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Main_Board.jpeg)

A plataforma Android 3.1 (também retroportada para Android 2.3.4) introduz o suporte a Android Open Accessory, que permite que hardware USB externo (um acessório USB Android) interaja com um dispositivo com Android em um modo especial de "acessório". Com base no design de referência ADK do Google, nós incorporamos as vantagens do Seeeduino na nossa Placa Principal Seeeduino ADK.

Agora conecte a Placa Principal Seeeduino ADK ao seu dispositivo móvel Android e comece a desenvolver seu acessório personalizado.

[SKU:ARD52028P](https://www.seeedstudio.com/depot/seeeduino-adk-main-board-p-846.html?cPath=6_8)

##  Especificações ##

- Compatível com Android Open Accessories development Kit (ADK) (Android v2.3.4 e superior)  

- Funciona com Android Debug Bridge (ADB) usando MicroBridge (Android v1.5 e superior)

- Funciona simplesmente como um Arduino Mega com um USB Shield integrado

- Tensão de operação: 5v/3v3

- Tensão de entrada: 6V - 18V

- E/S digitais: 50

- Entradas analógicas: 16

- Saídas PWM: 14

- Portas seriais de hardware (UART): 4

- I2C: 1

- SPI de hardware (até 8Mbps): 1

- USB host on board (MAX3421)

- USB slave on board (FT232RL)

- Regulador de tensão LDO 3,3V-500mA integrado.

##   Interface  ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Parts.jpg)
Principais características da Seeeduino ADK

Os blocos de hardware da Seeeduino ADK estão listados abaixo:
A: Conector Micro USB, conecta a placa principal ao PC. Usado para enviar o sketch usando a Arduino IDE.
B: Chave deslizante para escolher a tensão de operação ou de E/S: 3,3V ou 5V
C: Conector USB A, conecta ao dispositivo móvel Android.
D: Conector JST / Jack DC, para fonte de alimentação DC externa. Não conecte o PC enquanto usa fonte DC externa.
E: Botão de Reset, convenientemente posicionado na lateral para permitir o uso do reset enquanto se utilizam shields.
F: Pinos de E/S
G: ICSP, para programar o Bootloader do Arduino usando AVR ICSP
H: pinos de breakout de GPIO do Max3421E
I: pinos de breakout do FT232RL

##   Demonstração  ##

A imagem a seguir ilustra um exemplo de aplicação da **Placa Principal Seeeduino ADK** com um dispositivo Android. Ela executa o aplicativo de demonstração baseado em MicroBridge fornecido e ilustrado nesta página. Todos os componentes eletrônicos básicos são retirados do [Arduino Sidekick Basic Kit](https://seeeddoc.github.io/Arduino_Sidekick_Basic_Kit/) .

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/SeeeduinoADK_Setup.jpg)
Conexão entre a Placa Principal Seeeduino ADK e o dispositivo Android

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADK_Demo.jpg)

- Enviando o firmware
- Ajuste a chave deslizante VCC para 5V.

- Conecte a Placa Principal Seeeduino ADK - Micro USB à porta USB do PC.

- Defina o tipo de Placa na Arduino IDE como **Arduino Mega 2560**.

- Compile o Sketch de Demonstração e faça o upload para a Placa Principal.

- App Android
- Instale o software de desenvolvimento da plataforma Android.

- Importe o aplicativo Android de demonstração para o Workspace do Eclipse.

- Conecte o dispositivo móvel ao PC e envie o aplicativo

- Conecte o dispositivo móvel à Placa Principal ADK.

- Ative o ADB no seu dispositivo móvel, caso ainda não esteja ativado. Isto é apenas para o MicroBridge.

- Pressione o botão Reset.

###   Usando MicroBridge   ###

Os aplicativos de exemplo e a biblioteca estão disponíveis na seção de recursos. O seguinte Sketch Arduino e o código Android estão bem comentados, explicando o uso.

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

- Aplicativo Android
- Baixe o aplicativo Android completo em [pacote de aplicativo de demonstração Seeeduino ADK](http://garden.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip). O arquivo java principal é listado abaixo com comentários de uso:

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

###   Usando o Google ADK   ###

Visite a **página do desenvolvedor do Android ADK** para obter a documentação completa sobre como usar a Accessory API.

###   Como Mega 2560  ###

A Seeeduino ADK Main Board pode ser usada como Seeeduino Mega 2560. Ela também funciona bem com o sistema GROVE. A Grove - Base Shield pode ser usada para conectar os inúmeros módulos Grove disponíveis.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_MainBoard_With_Stem_Base_Shield.jpg)

A seguir está um demo mostrando o 2.8%27%27 TFT Touch Shield funcionando com a Seeeduino ADK Main Board.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADKMainBoard_TFTTouchShield_PhotoframeDemo.jpg)

- Conecte a Seeeduino ADK Main Board ao 2.8%27%27 TFT Touch Shield

- Formate o cartão SD no modo FAT

- Ajuste a chave deslizante de tensão de operação para 3,3 V

- Copie alguns arquivos de imagens Bitmap de 24 bits (.bmp) no tamanho 240 x 320 para o cartão SD. Alguns exemplos estão presentes no [arquivo compactado de demonstração bmp](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip)
- Conecte o Adaptador de cartão SD / microSD (com um cartão microSD) como mostrado na ilustração à **Seeeduino ADK Main Board**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_photoframe.png)

- Baixe e instale a [TFT Touch Library](https://www.seeedstudio.com/wiki/images/6/6e/Tft_touch_libraries.zip)
- Baixe a biblioteca de [SD Card](https://github.com/adafruit/SD) e instale-a na pasta do Arduino.

- Compile e envie o sketch [este](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip).

Saída:
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_PhotoframeDemo.jpg)

- Consulte **2.8'' TFT Touch Shield** para mais informações.

- Oleg Mazurov do **Circuits@Home** foi quem originalmente projetou a USB Host Shield baseada em MAX3421E. Ela foi adaptada pela placa de referência ADK do Google. O site dele tem uma enorme quantidade de informações e exemplos de código para usar a USB Host Shield baseada em MAX3421E com teclado USB, mouse, dongle Bluetooth, Wii Remote, etc.


## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/pt-br/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>



##   Recursos   ##

- **[Library]** [Modified MicroBridge Arduino Library](https://wiki.seeedstudio.com/pt-br/images/1/19/MicroBridge-ModifiedForSeeeduinoADK.zip)
- **[Library]** [Modified MicroBridge Arduino Library for Arduino1.0](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/res/Adb_for_Arduino1.0.zip)
- **[Demo]**[Seeeduino Demo - Android App](https://wiki.seeedstudio.com/pt-br/images/1/1b/SeeeduinoADKDemo-App.zip)
- **[PDF]**[Seeeduino ADK Eagle Schematic PDF](https://wiki.seeedstudio.com/pt-br/images/6/67/Seeeduino_ADK_0.9b_final_Scehmatic.pdf)
- **[Eagle]** [Seeeduino ADK Eagle Schematic and Board Files](https://wiki.seeedstudio.com/pt-br/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip)
- **[Accessory]**[Android Open Accessory Development Kit Page](http://developer.android.com/guide/topics/usb/adk.html)
- **[MicroBridge]**[MicroBridge Page](http://blogs.unpad.ac.id/dominodiaz/)
- **[USB]**[Game controllers using USB Host Shield](http://adrian-fh98.web.unair.ac.id/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
