---
title: Grove - Wio-E5 Helium y Demo de Aplicación TinyML
nointro:
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /es/Grove_Wio_E5_Helium_tinyML_Demo
last_update:
  date: 09/19/2023
  author: Salman 
---

## Primeros Pasos

Aquí, vamos a construir un proyecto que utiliza tinyML y la red IoT LoRa de helium para prevenir la tala ilegal de madera.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/lora%2Btinyml/illegalWoodlogging.png
" alt="pir" width={1000} height="auto" /></p>

## Diagrama de Flujo

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/lora%2Btinyml/ForestKeeperAlgoritham.png" alt="pir" width={1000} height="auto" /></p>

### Hardware Requerido

| Seeeduino XIAO nRF52840 Sense | Grove - Wio-E5 | Placa de Expansión Seeeduino XIAO |
|--------------|--------------|--------------|
|  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg" alt="pir" width={600} height="auto" /></p>|   <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png" alt="pir" width={600} height="auto" /></p>| <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>|

### Herramientas de Software/Servicios Requeridos

1. 1x Ardunino IDE
2. 1x [Helium IoT Console](https://console.helium.com/) .
3. 1 x Computadora
4. 1 x cable USB Type-C

## Configurar XIAO nRF52840 Sense en Arduino IDE

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/front-pinout-4.jpg" alt="pir" width={700} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/pinout2.png" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https:///files.seeedstudio.com/wiki/XIAO-BLE/back-pinout-5.jpg" alt="pir" width={700} height="auto" /></p>

:::tip
Algunos cables USB solo pueden suministrar energía y no pueden transferir datos. Si no tienes un cable USB o no sabes si tu cable USB puede transmitir datos, puedes verificar [Seeed USB Type-C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
Conecta el Seeed Studio XIAO nRF52840 (Sense) a tu computadora mediante un cable USB Type-C.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png" alt="pir" width={500} height="auto" /></p>

### Configuración del software

- **Paso 1.** Descarga e instala la última versión de Arduino IDE según tu sistema operativo

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={700} height="auto" /></a></p>

- **Paso 2.** Inicia la aplicación Arduino

- **Paso 3.** Añade el paquete de placa Seeed Studio XIAO nRF52840 (Sense) a tu Arduino IDE

Navega a **File > Preferences**, y completa **"Additional Boards Manager URLs"** con la url de abajo:
    *https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json*

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" alt="pir" width={700} height="auto" /></p>

Navega a **Tools > Board > Boards Manager...**, escribe la palabra clave "**seeed nrf52**" en el cuadro de búsqueda, selecciona la última versión de la placa que deseas, e instálala. Puedes instalar ambas.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528401.png" alt="pir" width={700} height="auto" /></p>

- **Paso 4.** Selecciona tu placa y puerto

**Placa**

Después de instalar el paquete de placa, navega a **Tools > Board** y elige la placa que deseas, continúa para seleccionar "**Seeed XIAO BLE Sense nRF52840**" de "Seeed nRF mbed-enabled Boards". Ahora hemos terminado de configurar el Seeed Studio XIAO nRF52840 (Sense) para Arduino IDE.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-nRF52840-Sense/src/img/sense_mebed_board.png" alt="pir" width={700} height="auto" /></p>

**Puerto**

Navega a **Tools > Port** y selecciona el nombre del puerto serie del Seeed Studio XIAO nRF52840 (Sense) conectado. Es probable que sea COM3 o superior (**COM1** y **COM2** generalmente están reservados para puertos serie de hardware). El puerto serie del Seeed Studio XIAO nRF52840 (Sense) conectado generalmente contiene paréntesis que están escritos **Seeed Studio XIAO nRF52840** para **Seeed Studio XIAO nRF52840** o **Seeed Studio XIAO nRF52840 Sense** para **Seeed Studio XIAO nRF52840 Sense**.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-BLE/port.png" alt="pir" width={550} height="auto" /></p>

- **Paso 5.** Navega a **File > Examples > 01.Basics > Blink** para abrir el ejemplo **Blink**

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png" alt="pir" width={550} height="auto" /></p>

- **Paso 6.** Haz clic en el botón **Upload** para cargar el código de ejemplo Blink a la placa

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png" alt="pir" width={500} height="auto" /></p>

Una vez cargado, verás el LED rojo integrado parpadeando con un retraso de 1 segundo entre cada parpadeo. Esto significa que la conexión es exitosa y ahora puedes explorar más proyectos con el Seeed Studio XIAO nRF52840 (Sense)!

## Configuración de la Consola Helium LoRa WAN  

:::note
Asegúrate de estar dentro de la cobertura de la red helium. Puedes encontrar la cobertura de la red en [explorer.helium.com](https://explorer.helium.com/)
:::

:::caution
Por favor asegúrate de la consistencia de la banda de frecuencia entre los nodos finales, gateway y la configuración de Helium que estás usando siguiendo esta instrucción.
El plan de frecuencia que esta demostración aplica es para **IN865**.
:::

La Red IoT de Helium usa el protocolo LoRaWAN para proporcionar conectividad a internet a dispositivos de "Internet de las Cosas" y es la sub red original en el ecosistema Helium. Desarrolladores y empresas alrededor del mundo dependen de la Red IoT de Helium para conectividad.

### Preparación de la Consola IoT de Helium

- **Paso 1.** Visita el sitio web de [Helium Console](https://console.helium.com/welcome ) y regístrate para una nueva cuenta

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Helium-login.png" alt="pir" width={500} height="auto" /></p>

- **Paso 2.** Después de iniciar sesión, haz clic en "Devices" para gestionar dispositivos.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device.png" alt="pir" width={1000} height="auto" /></p>

- **Paso 3.** Luego haz clic en "Add New Device"

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/CreateaDevice01.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 4.** Aquí, **1) Añade un nuevo dispositivo** , **2) Copia el Dev EUI** , **3) Copia el App EUI**, **4) Copia el App Key**, **5) Finalmente Haz clic en Save**.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Id01.png" alt="pir" width="1000" height="auto"/></p>

- **Paso 5.** Ahora puedes ver el dispositivo bajo la sección "Devices".

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device02.png" alt="pir" width="1000" height="auto"/></p>

Ahora, la configuración de la consola helium está completa. podemos pasar a la parte de Software y subir datos a la consola helium a través de la red LoRa helium.

## Preparación del Hardware

Coloca el XIAO nRF52840 BLE Sense en la placa de expansión Seeeduino XIAO y luego Conecta el Grove - Wio E5 al puerto UART de la placa de expansión XIAO.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-nRF52840-Sense/src/img/XIAO_LoRa.png" alt="pir" width={400} height="auto" /></p>

## Preparación del Software

Desarrollamos el modelo tinyML usando la herramienta Edge impulse, y puedes encontrar el conjunto de datos y detalles del proyecto [aquí](https://studio.edgeimpulse.com/public/283541/latest), también puedes clonar el proyecto y hacer las modificaciones según tu necesidad.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-nRF52840-Sense/src/img/Edge_Impulse_project.png" alt="pir" width={800} height="auto" /></p>

Por ahora, descarga la biblioteca tinyML de Edge Impulse desde [aquí](https://github.com/salmanfarisvp/TinyML/blob/main/XIAO-nRF52840-Sense/src/lib/ei-illegal-logging-detection--vehicle-sound-xiao-nrf52-arduino-1.0.4.zip) y añádela al arduino. Sigue [esta guía](https://wiki.seeedstudio.com/es/How_to_install_Arduino_Library/#1add-zip-library) para aprender cómo añadir bibliotecas ZIP.

Después de añadir la biblioteca, copia el código de abajo y pégalo en tu sketch de arduino y **reemplaza las Credenciales de Helium LoRa WAN**.

```cpp
/* Edge Impulse ingestion SDK
 * Copyright (c) 2022 EdgeImpulse Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

// If your target is limited in memory remove this macro to save 10K RAM
#define EIDSP_QUANTIZE_FILTERBANK 0

/*
 ** NOTE: If you run into TFLite arena allocation issue.
 **
 ** This may be due to may dynamic memory fragmentation.
 ** Try defining "-DEI_CLASSIFIER_ALLOCATION_STATIC" in boards.local.txt (create
 ** if it doesn't exist) and copy this file to
 ** `<ARDUINO_CORE_INSTALL_PATH>/arduino/hardware/<mbed_core>/<core_version>/`.
 **
 ** See
 ** (https://support.arduino.cc/hc/en-us/articles/360012076960-Where-are-the-installed-cores-located-)
 ** to find where Arduino installs cores on your machine.
 **
 ** If the problem persists then there's not enough memory for this model and application.
 */


 /*
** Developed by Salman Faris 
** Date: 20/09/2023
 */


/* Includes ---------------------------------------------------------------- */
#include <PDM.h>
#include <Illegal_Logging_Detection_-_Vehicle_sound_-_XIAO-nRF52_inferencing.h>
#include <Arduino.h>
#include <U8x8lib.h>

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);

/** Audio buffers, pointers and selectors */
typedef struct {
  int16_t *buffer;
  uint8_t buf_ready;
  uint32_t buf_count;
  uint32_t n_samples;
} inference_t;

static inference_t inference;
static signed short sampleBuffer[2048];
static bool debug_nn = false;  // Set this to true to see e.g. features generated from the raw signal

//LoRa Buffer
static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

//Inference Data
int pred_index = 0;    // Initialize pred_index
float pred_value = 0;  // Initialize pred_value

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...) {
  int ch;
  int num = 0;
  int index = 0;
  int startMillis = 0;
  va_list args;
  char cmd_buffer[256];  // Adjust the buffer size as needed
  memset(recv_buf, 0, sizeof(recv_buf));
  va_start(args, p_cmd);
  vsprintf(cmd_buffer, p_cmd, args);  // Format the command string
  Serial1.print(cmd_buffer);
  Serial.print(cmd_buffer);
  va_end(args);
  delay(200);
  startMillis = millis();

  if (p_ack == NULL) {
    return 0;
  }

  do {
    while (Serial1.available() > 0) {
      ch = Serial1.read();
      recv_buf[index++] = ch;
      Serial.print((char)ch);
      delay(2);
    }

    if (strstr(recv_buf, p_ack) != NULL) {
      return 1;
    }

  } while (millis() - startMillis < timeout_ms);
  return 0;
}

static void recv_prase(char *p_msg) {
  if (p_msg == NULL) {
    return;
  }
  char *p_start = NULL;
  int data = 0;
  int rssi = 0;
  int snr = 0;

  p_start = strstr(p_msg, "RX");
  if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data))) {
    Serial.println(data);
    u8x8.setCursor(2, 4);
    u8x8.print("led :");
    led = !!data;
    u8x8.print(led);
    if (led) {
      digitalWrite(LED_BUILTIN, LOW);
    } else {
      digitalWrite(LED_BUILTIN, HIGH);
    }
  }

  p_start = strstr(p_msg, "RSSI");
  if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi))) {
    u8x8.setCursor(0, 6);
    u8x8.print("                ");
    u8x8.setCursor(2, 6);
    u8x8.print("rssi:");
    u8x8.print(rssi);
  }
  p_start = strstr(p_msg, "SNR");
  if (p_start && (1 == sscanf(p_start, "SNR %d", &snr))) {
    u8x8.setCursor(0, 7);
    u8x8.print("                ");
    u8x8.setCursor(2, 7);
    u8x8.print("snr :");
    u8x8.print(snr);
  }
}


/**
 * @brief      Arduino setup function
 */
void setup() {
  // put your setup code here, to run once:
  Serial.begin(115200);
  Serial1.begin(9600);
  // comment out the below line to cancel the wait for USB connection (needed for native USB)
  while (!Serial)
    ;
  Serial.println("Edge Impulse Inferencing Demo");

  // summary of inferencing settings (from model_metadata.h)
  ei_printf("Inferencing settings:\n");
  ei_printf("\tInterval: %.2f ms.\n", (float)EI_CLASSIFIER_INTERVAL_MS);
  ei_printf("\tFrame size: %d\n", EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE);
  ei_printf("\tSample length: %d ms.\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT / 16);
  ei_printf("\tNo. of classes: %d\n", sizeof(ei_classifier_inferencing_categories) / sizeof(ei_classifier_inferencing_categories[0]));

  if (microphone_inference_start(EI_CLASSIFIER_RAW_SAMPLE_COUNT) == false) {
    ei_printf("ERR: Could not allocate audio buffer (size %d), this could be due to the window length of your model\r\n", EI_CLASSIFIER_RAW_SAMPLE_COUNT);
    return;
  }


  u8x8.begin();
  u8x8.setFlipMode(1);
  u8x8.setFont(u8x8_font_chroma48medium8_r);

  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, HIGH);

  Serial1.begin(9600);
  Serial.print("E5 LORAWAN TEST\r\n");
  u8x8.setCursor(0, 0);

  if (at_send_check_response("+AT: OK", 100, "AT\r\n")) {
    is_exist = true;
    at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"XXXXXXXXXX"\r\n");
    at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"XXXXXXXXXXX\"\r\n");
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"XXXXXXXXXXXX\"\r\n");
    at_send_check_response("+ID: DevAddr", 1000, "AT+ID=DevAddr\r\n");
    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: IN865", 1000, "AT+DR=IN865\r\n");
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+CLASS: A", 1000, "AT+CLASS=A\r\n");
    at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
    delay(200);
    u8x8.setCursor(5, 0);
    u8x8.print("LoRaWAN");
    is_join = true;
  } else {
    is_exist = false;
    Serial.print("No E5 module found.\r\n");
    u8x8.setCursor(0, 1);
    u8x8.print("unfound E5 !");
  }

  //dht.begin();
}

/**
 * @brief      Arduino main function. Runs the inferencing loop.
 */
void loop() {
  ei_printf("Starting inferencing in 2 seconds...\n");

  delay(2000);

  ei_printf("Recording...\n");

  bool m = microphone_inference_record();
  if (!m) {
    ei_printf("ERR: Failed to record audio...\n");
    return;
  }

  ei_printf("Recording done\n");

  signal_t signal;
  signal.total_length = EI_CLASSIFIER_RAW_SAMPLE_COUNT;
  signal.get_data = &microphone_audio_signal_get_data;
  ei_impulse_result_t result = { 0 };

  EI_IMPULSE_ERROR r = run_classifier(&signal, &result, debug_nn);
  if (r != EI_IMPULSE_OK) {
    ei_printf("ERR: Failed to run classifier (%d)\n", r);
    return;
  }


  int pred_index = 0;    // Initialize pred_index
  float pred_value = 0;  // Initialize pred_value

  // print the predictions
  ei_printf("Predictions ");
  ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
            result.timing.dsp, result.timing.classification, result.timing.anomaly);
  ei_printf(": \n");

  for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
    ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    ei_printf("\n");
    if (result.classification[ix].value > pred_value) {
      pred_index = ix;
      pred_value = result.classification[ix].value;
    }
  }


  // Display inference result and Send message to Helium Console. 
  if ((pred_index == 1 && (pred_value > 0.8))) {
    ei_printf("Vehicle Sound is Detected ");
    ei_printf("\n");
    int SOS = 10;
    int DeviceID = 1;
    if (is_exist) {
      int ret = 0;
      if (is_join) {

        ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
        if (ret) {
          is_join = false;
        } else {
          at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
          Serial.print("JOIN failed!\r\n\r\n");
          delay(5000);
        }
      } else {
        char cmd[128];
        sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)DeviceID, (int)SOS);
        ret = at_send_check_response("Done", 5000, cmd);

        u8x8.setCursor(0, 2);
        u8x8.print("      ");
        u8x8.setCursor(2, 2);
        u8x8.print("Vehicle Detected");
        u8x8.setCursor(2, 3);
        u8x8.print("Sending SOS");
        if (ret) {
          recv_prase(recv_buf);
        } else {
          Serial.print("Send failed!\r\n\r\n");
        }
        delay(5000);
      }
    } else {
      delay(1000);
    }

  }
  else {
        u8x8.setCursor(0, 2);
        u8x8.print("      ");
        u8x8.setCursor(2, 2);
        u8x8.print("Normal Condition");
        u8x8.setCursor(2, 3);
        u8x8.print("idle");
  }

#if EI_CLASSIFIER_HAS_ANOMALY == 1
  ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif
}

/**
 * @brief      PDM buffer full callback
 *             Get data and call audio thread callback
 */
static void pdm_data_ready_inference_callback(void) {
  int bytesAvailable = PDM.available();

  // read into the sample buffer
  int bytesRead = PDM.read((char *)&sampleBuffer[0], bytesAvailable);

  if (inference.buf_ready == 0) {
    for (int i = 0; i < bytesRead >> 1; i++) {
      inference.buffer[inference.buf_count++] = sampleBuffer[i];

      if (inference.buf_count >= inference.n_samples) {
        inference.buf_count = 0;
        inference.buf_ready = 1;
        break;
      }
    }
  }
}

/**
 * @brief      Init inferencing struct and setup/start PDM
 *
 * @param[in]  n_samples  The n samples
 *
 * @return     { description_of_the_return_value }
 */
static bool microphone_inference_start(uint32_t n_samples) {
  inference.buffer = (int16_t *)malloc(n_samples * sizeof(int16_t));

  if (inference.buffer == NULL) {
    return false;
  }

  inference.buf_count = 0;
  inference.n_samples = n_samples;
  inference.buf_ready = 0;

  // configure the data receive callback
  PDM.onReceive(&pdm_data_ready_inference_callback);

  PDM.setBufferSize(4096);

  // initialize PDM with:
  // - one channel (mono mode)
  // - a 16 kHz sample rate
  if (!PDM.begin(1, EI_CLASSIFIER_FREQUENCY)) {
    ei_printf("Failed to start PDM!");
    microphone_inference_end();

    return false;
  }

  // set the gain, defaults to 20
  PDM.setGain(127);

  return true;
}

/**
 * @brief      Wait on new data
 *
 * @return     True when finished
 */
static bool microphone_inference_record(void) {
  inference.buf_ready = 0;
  inference.buf_count = 0;

  while (inference.buf_ready == 0) {
    delay(10);
  }

  return true;
}

/**
 * Get raw audio signal data
 */
static int microphone_audio_signal_get_data(size_t offset, size_t length, float *out_ptr) {
  numpy::int16_to_float(&inference.buffer[offset], out_ptr, length);

  return 0;
}

/**h
 * @brief      Stop PDM and release buffers
 */
static void microphone_inference_end(void) {
  PDM.end();
  free(inference.buffer);
}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_MICROPHONE
#error "Invalid model for current sensor."
#endif

```

Reemplaza el **DevEUI , AppEUI** y **APPKEY** con tus credenciales obtenidas de la consola de Helium. También asegúrate de reemplazar el **IN865** según el plan de FREQ de tu región.

```cpp
at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxx\"\r\n");
at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxx\"\r\n");
at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxxxx\"\r\n");
at_send_check_response("+ID: DevAddr", 1000, "AT+ID=DevAddr\r\n");
at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
at_send_check_response("+DR: IN865", 1000, "AT+DR=IN865\r\n");
at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
at_send_check_response("+CLASS: A", 1000, "AT+CLASS=A\r\n");
at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
```

En la sección siguiente, puedes ver que el XIAO verificará si hay algún **Sonido de vehículo detectado** y si se detecta, establecerá una conexión LoRa WAN a la consola de helium y enviará el dato **1** como símbolo de **Sonido de vehículo detectado**.

```cpp
// Display inference result and Send message to Helium Console. 
  if ((pred_index == 1 && (pred_value > 0.8))) {
    ei_printf("Vehicle Sound is Detected ");
    ei_printf("\n");
    int SOS = 10;
    int DeviceID = 1;
    if (is_exist) {
      int ret = 0;
      if (is_join) {

        ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
        if (ret) {
          is_join = false;
        } else {
          at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
          Serial.print("JOIN failed!\r\n\r\n");
          delay(5000);
        }
      } else {
        char cmd[128];
        sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)DeviceID, (int)SOS);
        ret = at_send_check_response("Done", 5000, cmd);

        u8x8.setCursor(0, 2);
        u8x8.print("      ");
        u8x8.setCursor(2, 2);
        u8x8.print("Vehicle Detected");
        u8x8.setCursor(2, 3);
        u8x8.print("Sending SOS");
        if (ret) {
          recv_prase(recv_buf);
        } else {
          Serial.print("Send failed!\r\n\r\n");
        }
        delay(5000);
      }
    } else {
      delay(1000);
    }

  }
  else {
        u8x8.setCursor(0, 2);
        u8x8.print("      ");
        u8x8.setCursor(2, 2);
        u8x8.print("Normal Condition");
        u8x8.setCursor(2, 3);
        u8x8.print("idle");
  }
```

## Demo

:::note
Asegúrate de estar dentro de la cobertura de la red helium. Puedes encontrar la cobertura de la red en [explorer.helium.com](https://explorer.helium.com/)
:::

Después de cargar el código, el XIAO nRF52840 Sense capturará sonido y verificará si hay algún sonido de motor usando tinyML, así que intenta reproducir sonido de motor para activar la acción. Una vez que detecte el sonido del motor (1), XIAO establecerá la conexión de red Helium LoRa y enviará el comando "1" como símbolo de **Sonido de Vehículo Detectado** (2).

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-nRF52840-Sense/src/img/Infer_engine_sound.png" alt="pir" width={1000} height="auto" /></p>

Puedes ver los datos en la consola de helium y su ventana de depuración.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/TinyML/main/XIAO-nRF52840-Sense/src/img/helium-debug.png" alt="pir" width={1000} height="auto" /></p>

## Tareas Pendientes

Hasta ahora, hemos hecho la integración con tinyML y LoRa. y tenemos algunas tareas pendientes en las que puedes trabajar como ejercicio para mejorar el proyecto.

- [ ] Integrar la consola de helium con el panel de control y visualizar los datos
- [ ] Crear Alerta por Email/SMS/Teléfono con panel de control personalizado para informar al guardabosques.

## Recursos

Hoja de datos:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Hoja de datos y especificaciones del Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Especificación de Comandos AT del Wio-E5</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">Hoja de Datos STM32WLE5JC</a></p>

Certificaciones:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Certificación Wio-E5-HF CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Certificación FCC Wio-E5-HF -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Certificación FCC Wio-E5-HF -DTS</a></p>

SDK Relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Paquete MCU STM32Cube para la serie STM32WL</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

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
