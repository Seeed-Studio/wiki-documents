---
description: Seeeduino ADK Main Board
title: Seeeduino ADK Main Board
keywords:
- Seeeduino 
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Seeeduino_ADK_Main_Board
last_update:
  date: 1/31/2023
  author: shuxu hu
---

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Main_Board.jpeg)

La plataforma Android 3.1 (también retroportada a Android 2.3.4) introduce el soporte para Android Open Accessory, que permite que el hardware USB externo (un accesorio USB de Android) interactúe con un dispositivo con Android en un modo especial de "accesorio". Basado en el diseño de referencia ADK de Google, fusionamos las ventajas de Seeeduino en nuestra Seeeduino ADK Main Board.

Ahora conecta la Seeeduino ADK Main Board a tu dispositivo móvil Android y comienza a desarrollar tu accesorio personalizado.

[SKU:ARD52028P](https://www.seeedstudio.com/depot/seeeduino-adk-main-board-p-846.html?cPath=6_8)

##  Especificaciones ##

- Compatible con Android Open Accessories development Kit (ADK) (Android v2.3.4 y superior)  

- Funciona con Android Debug Bridge (ADB) usando MicroBridge (Android v1.5 y superior)

- Simplemente funciona como un Arduino Mega con un USB Shield integrado

- Voltaje de operación: 5v/3v3

- Voltaje de entrada: 6V - 18V

- E/S digital: 50

- Entradas analógicas: 16

- Salidas PWM: 14

- Puertos serie por hardware (UART): 4

- I2C: 1

- SPI por hardware (hasta 8Mbps): 1

- Host USB integrado (MAX3421)

- Esclavo USB integrado (FT232RL)

- Regulador de potencia LDO de 3.3V-500mA incorporado.

##   Interfaz  ##

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_Parts.jpg)
Características Destacadas de Seeeduino ADK

Los bloques de hardware de Seeeduino ADK se listan a continuación:
A: Conector Micro USB, conecta la placa principal a la PC. Se usa para cargar el sketch usando Arduino IDE.
B: Interruptor deslizante, para elegir el voltaje de operación o E/S: 3.3V o 5V
C: Conector USB A, conecta al dispositivo móvil Android.
D: Conector JST / Jack DC, para fuente de alimentación DC externa. No conectar la PC mientras se usa DC externo.
E: Botón de Reset, convenientemente ubicado en el lateral para permitir usar reset mientras se usan shields.
F: Pines de E/S
G: ICSP, para programar el Bootloader de Arduino usando AVR ICSP
H: pines de conexión del Max3421E GPIO
I: pines de conexión del FT232RL

##   Demostración  ##

La siguiente imagen ilustra un ejemplo de aplicación de la **Seeeduino ADK Main Board** con un móvil Android. Ejecuta la aplicación demo basada en MicroBridge proporcionada e ilustrada en esta página. Todos los componentes electrónicos básicos se toman del [Arduino Sidekick Basic Kit](https://seeeddoc.github.io/Arduino_Sidekick_Basic_Kit/) .

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/SeeeduinoADK_Setup.jpg)
Conexión de Seeeduino ADK Main Board y Móvil Android

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADK_Demo.jpg)

- Cargando Firmware
- Configura el interruptor deslizante VCC a 5V.

- Conecta la Seeeduino ADK Main Board - Micro USB al puerto USB de la PC.

- Configura el tipo de placa en Arduino IDE a **Arduino Mega 2560**.

- Compila el Sketch Demo y cárgalo a la placa principal.

- Aplicación Android
- Instala el software de desarrollo de la plataforma Android.

- Importa la aplicación demo de Android al espacio de trabajo de Eclipse.

- Conecta el dispositivo móvil a la PC y carga la aplicación

- Conecta el móvil a la ADK Main Board.

- Habilita ADB en tu dispositivo móvil si no está ya habilitado. Esto es solo para MicroBridge.

- Presiona el botón Reset.

###   Usando MicroBridge   ###

Las aplicaciones de muestra y la biblioteca están disponibles en la sección de recursos. El siguiente Sketch de Arduino y código Android están bien comentados explicando el uso.

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

- Aplicación Android
- Descarga la aplicación Android completa desde [paquete de aplicación de demostración Seeeduino ADK](http://garden.seeedstudio.com/images/1/1b/SeeeduinoADKDemo-App.zip). El archivo java principal se lista a continuación con comentarios de uso:

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

###   Usando Google ADK   ###

Visita la **página de desarrollador de Android ADK** para obtener documentación completa sobre cómo usar la API de Accesorios.

###   Como Mega 2560  ###

La Placa Principal Seeeduino ADK puede usarse como Seeeduino Mega 2560. También funciona bien con el Sistema GROVE. El Grove - Base Shield puede usarse para conectar los numerosos módulos Grove disponibles.

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/Seeeduino_ADK_MainBoard_With_Stem_Base_Shield.jpg)

Y lo siguiente es una demostración que muestra el Shield Táctil TFT de 2.8%27%27 funcionando con la Placa Principal Seeeduino ADK.
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/ADKMainBoard_TFTTouchShield_PhotoframeDemo.jpg)

- Conecta la Placa Principal Seeeduino ADK al Shield Táctil TFT de 2.8%27%27

- Formatea la tarjeta SD en modo FAT

- Configura el interruptor deslizante de voltaje de operación a 3.3V

- Copia algunas imágenes Bitmap de 24 bits (.bmp) de tamaño 240 x 320 a la Tarjeta SD. Algunas muestras están presentes en el [archivo de aplicación demo bmp](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip)
- Conecta la tarjeta SD / Adaptador de Tarjeta microSD (con una tarjeta microSD) como se muestra en la ilustración a la **Placa Principal Seeeduino ADK**

![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_photoframe.png)

- Descarga e instala la [Librería TFT Touch](https://www.seeedstudio.com/wiki/images/6/6e/Tft_touch_libraries.zip)
- Descarga la librería [SD Card](https://github.com/adafruit/SD) e instálala en la carpeta de Arduino.

- Compila y sube [este](https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip) sketch.

Salida:
![enter image description here](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/img/TFT_Touch_Shield_PhotoframeDemo.jpg)

- Consulta **Shield Táctil TFT de 2.8''** para más información.

- Oleg Mazurov de **Circuits@Home** es quien originalmente diseñó el USB Host Shield basado en MAX3421E. Esto fue adaptado por la Placa de Referencia ADK de Google. Su sitio tiene toneladas de información y ejemplos de código para usar el USB Host Shield basado en MAX3421E con teclado USB, Mouse, Dongle Bluetooth, Wii Remote, etc.


## Visor de Esquemas en Línea

<div className="altium-ecad-viewer" data-project-src="https://wiki.seeedstudio.com/es/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>


##   Recursos   ##

- **[Librería]** [Librería Arduino MicroBridge Modificada](https://wiki.seeedstudio.com/es/images/1/19/MicroBridge-ModifiedForSeeeduinoADK.zip)
- **[Librería]** [Librería Arduino MicroBridge Modificada para Arduino1.0](https://files.seeedstudio.com/wiki/Seeeduino-ADK_Main_Board/res/Adb_for_Arduino1.0.zip)
- **[Demo]**[Demo Seeeduino - App Android](https://wiki.seeedstudio.com/es/images/1/1b/SeeeduinoADKDemo-App.zip)
- **[PDF]**[PDF del Esquema Eagle de Seeeduino ADK](https://wiki.seeedstudio.com/es/images/6/67/Seeeduino_ADK_0.9b_final_Scehmatic.pdf)
- **[Eagle]** [Archivos de Esquema y Placa Eagle de Seeeduino ADK](https://wiki.seeedstudio.com/es/images/1/1a/Seeeduino_ADK_0.9b_final_Eagle_files.zip)
- **[Accesorio]**[Página del Kit de Desarrollo de Accesorios Abiertos de Android](http://developer.android.com/guide/topics/usb/adk.html)
- **[MicroBridge]**[Página de MicroBridge](http://blogs.unpad.ac.id/dominodiaz/)
- **[USB]**[Controladores de juegos usando USB Host Shield](http://adrian-fh98.web.unair.ac.id/)

## Soporte Técnico y Discusión de Productos

¡Gracias por elegir nuestros productos! Estamos aquí para brindarte diferentes tipos de soporte para asegurar que tu experiencia con nuestros productos sea lo más fluida posible. Ofrecemos varios canales de comunicación para satisfacer diferentes preferencias y necesidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
