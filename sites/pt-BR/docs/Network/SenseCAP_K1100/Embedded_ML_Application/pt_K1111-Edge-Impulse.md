---
description: Sensores integrados com Edge Impulse
title: Sensores integrados com Edge Impulse
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1111-Edge-Impulse
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/K1111-Edge-Impulse/
---
# Desenvolver aplicação Edge Impulse para a nuvem via Helium

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O invólucro IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center"><font color="white" size={4}><strong>Sensor Industrial SenseCAP</strong></font></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp &amp; Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp &amp; Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Ferramentas que usamos

- [Wio Terminal](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/)
- [Edge impluse](https://studio.edgeimpulse.com/)
- [Helium](https://console.helium.com/)
- [Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-EI-2/)
- [Google Sheets](https://docs.google.com/spreadsheets/u/0/)
- [Google Forms](https://docs.google.com/forms/u/0/)

:::note
Antes de iniciar esta seção, certifique-se de que você conhece o produto **Wio Terminal**
Para mais detalhes, leia

- [**Wio Terminal Get Started**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Getting-Started/)
- [**Connecting-to-Helium**](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/)
- [**Integrate into Google Sheets via Helium**](https://wiki.seeedstudio.com/pt-br/Integrate_into_Google_Sheets_via_Helium/)
:::
Este artigo mostra uma solução para quem deseja usar edgeimpulse para gerar modelos e conectar com a nuvem. Em nossa demonstração, usaremos o Google Sheets. É a maneira direta e  

## Configuração do Helium

### Passo 1. Criar uma Integração com suporte ao Google Form

Esta etapa é semelhante às etapas do artigo [**Integrate into Google Sheets via Helium**](https://wiki.seeedstudio.com/pt-br/Integrate_into_Google_Sheets_via_Helium/)

O que precisamos fazer é nomear a integração e simplesmente salvar a configuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png" /></div>

Conectando ao Google Form

- Criar
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_1.png" /></div>

- Conectar com o Google Sheets
   <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_2.png" /></div>

- Vincular com o ID do Google Form
  <div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_3.png" /></div>

### Passo 2. Criar uma Function com os recursos de api do Google Form e Decoder

Certifique-se de que o Google Form está conectado com a Function, preenchida com o ID que obtivemos nas etapas acima.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Func.png" /></div>

Precisamos criar uma Function com o suporte Decoder para nossa transferência de fluxo de dados, assim.

```Javascript
function Decoder(bytes, port) {

    var decoded = {};

    function transformers(bytes) {
        if (bytes[0] == 255 || bytes[0] == 0) {
            value = bytes[2] * 256 + bytes[3];
        }
        return value;
    }

    if (port == 8) {
        decoded.class = transformers(bytes.slice(0, 4));
    }

  var decodedPayload = {
    "class": decoded.class 
  };

  // END TODO

  return Serialize(decodedPayload)
}

var field_mapping = {
  "class": "entry.39410305"
};

function Serialize(payload) {
  var str = [];
  for (var key in payload) {
    if (payload.hasOwnProperty(key)) {
      var name = encodeURIComponent(field_mapping[key]);
      var value = encodeURIComponent(payload[key]);
      str.push(name + "=" + value);
    }
  }
  return str.join("&");
}
// DO NOT REMOVE: Google Form Function\
```

### Passo 3 . Configurar os Flows

Garantir a conexão

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Flows.png" /></div>

## Configuração do Edge Impulse

:::note
Para mais detalhes, leia:
[Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-TinyML-EI-2/)
:::

## Configuração do Ardiuno (Wio Terminal)

:::note
Como os sensores e ambientes são diferentes, a gravação direta de modelos treinados em diferentes placas de suporte nem sempre é ideal. Modelos confiáveis precisam ser treinados pelos próprios usuários, portanto, apenas o código de teste é fornecido para uma experiência rápida.
:::

### Tenha uma experiência

Depois que geramos a biblioteca a partir do Edge Impulse, precisamos modificar o código para envio de dados via Lora no Wio Terminal. Se você apenas quiser ter uma experiência, simplesmente copie o código abaixo e grave-o no seu Wio Terminal via Arduino IDE.

Grave o código de teste abaixo.

```cpp
#include <AIot_Example_inferencing.h>
#include"LIS3DHTR.h"
#include"TFT_eSPI.h"
LIS3DHTR<TwoWire> lis;
TFT_eSPI tft;
#include <SoftwareSerial.h>
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SoftwareSerial mySerial(A0, A1); // RX, TX

SensirionI2CSht4x sht4x;

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...)
{
    int ch;
    int num = 0;
    int index = 0;
    int startMillis = 0;
    va_list args;
    memset(recv_buf, 0, sizeof(recv_buf));
    va_start(args, p_cmd);
    mySerial.printf(p_cmd, args);
    Serial.printf(p_cmd, args);
    va_end(args);
    delay(200);
    startMillis = millis();

    if (p_ack == NULL)
    {
        return 0;
    }

    do
    {
        while (mySerial.available() > 0)
        {
            ch = mySerial.read();
            recv_buf[index++] = ch;
            Serial.print((char)ch);
            delay(2);
        }

        if (strstr(recv_buf, p_ack) != NULL)
        {
            return 1;
        }

    } while (millis() - startMillis < timeout_ms);
    return 0;
}

static void recv_prase(char *p_msg)
{
    if (p_msg == NULL)
    {
        return;
    }
    char *p_start = NULL;
    int data = 0;
    int rssi = 0;
    int snr = 0;

    p_start = strstr(p_msg, "RX");
    if (p_start && (1 == sscanf(p_start, "RX: \"%d\"\r\n", &data)))
    {
        Serial.println(data);
    }

    p_start = strstr(p_msg, "RSSI");
    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))
    {
        Serial.println(rssi);
    }

    p_start = strstr(p_msg, "SNR");
    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))
    {
        Serial.println(snr);
    }
}
////// Send message block end


/* Constant defines -------------------------------------------------------- */
#define CONVERT_G_TO_MS2    9.80665f
#define MAX_ACCEPTED_RANGE  2.0f        // starting 03/2022, models are generated setting range to +-2, but this example use Arudino library which set range to +-4g. If you are using an older model, ignore this value and use 4.0f instead

/* Private variables ------------------------------------------------------- */
static bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal

/**
* @brief      Arduino setup function
*/
void setup()
{
    // put your setup code here, to run once:
    Serial.begin(115200);
    Serial.println("Edge Impulse Inferencing Demo");

    tft.begin();
    tft.setRotation(3);
    tft.fillScreen(TFT_WHITE);

    lis.begin(Wire1);

    if (!lis.available()) {
    Serial.println("Failed to initialize IMU!");
    while (1);
    }
    else {
        ei_printf("IMU initialized\r\n");
    }
    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz 
    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g


    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {
        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\n");
        return;
    }

    mySerial.begin(9600);

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    delay(5000);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }

    Serial.print("E5 LORAWAN TEST\r\n");

    if (at_send_check_response("+AT: OK", 100, "AT\r\n"))
    {
        is_exist = true;
        at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"608XXXXXXXXEE7\"\r\n");
        at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"608XXXXXXXX85D\"\r\n");
        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\r\n");
        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"E1EF1AC8XXXXXXXXXXXXXXXX05C5\"\r\n");
        at_send_check_response("+CLASS: A", 1000, "AT+CLASS=A\r\n");
        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\r\n");
        delay(200);
        is_join = true;
    }
    else
    {
        is_exist = false;
        Serial.print("No E5 module found.\r\n");
    }
}

/**
 * @brief Return the sign of the number
 * 
 * @param number 
 * @return int 1 if positive (or 0) -1 if negative
 */
float ei_get_sign(float number) {
    return (number >= 0.0) ? 1.0 : -1.0;
}

/**
* @brief      Get data and run inferencing
*
* @param[in]  debug  Get debug info if true
*/
void loop()
{
    ei_printf("\nStarting inferencing in 2 seconds...\n");

    delay(2000);

    ei_printf("Sampling...\n");

    // Allocate a buffer here for the values we'll read from the IMU
    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };

    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {
        // Determine the next tick (and then sleep later)
        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);
        lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);

        for (int i = 0; i < 3; i++) {
            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {
                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;
            }
        }

        buffer[ix + 0] *= CONVERT_G_TO_MS2;
        buffer[ix + 1] *= CONVERT_G_TO_MS2;
        buffer[ix + 2] *= CONVERT_G_TO_MS2;

        delayMicroseconds(next_tick - micros());
    }

    // Turn the raw buffer in a signal which we can the classify
    signal_t signal;
    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);
    if (err != 0) {
        ei_printf("Failed to create signal from buffer (%d)\n", err);
        return;
    }

    // Run the classifier
    ei_impulse_result_t result = { 0 };

    err = run_classifier(&signal, &result, debug_nn);
    if (err != EI_IMPULSE_OK) {
        ei_printf("ERR: Failed to run classifier (%d)\n", err);
        return;
    }

    // print the predictions
    ei_printf("Predictions ");
    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",
        result.timing.dsp, result.timing.classification, result.timing.anomaly);
    ei_printf(": \n");
    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {
        ei_printf("    %s: %.5f\n", result.classification[ix].label, result.classification[ix].value);
    }
#if EI_CLASSIFIER_HAS_ANOMALY == 1
    ei_printf("    anomaly score: %.3f\n", result.anomaly);
#endif

   int classification_flag = 0;

   if (result.classification[1].value > 0.7) {
    tft.fillScreen(TFT_PURPLE);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Wave", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
    classification_flag = 1;
   }

   if (result.classification[2].value > 0.7) {
    tft.fillScreen(TFT_RED);
    tft.setFreeFont(&FreeSansBoldOblique12pt7b);
    tft.drawString("Circle", 20, 80);
    delay(1000);
    tft.fillScreen(TFT_WHITE);
    classification_flag = 2;
   }


    if (is_exist){
        int ret = 0;
        if (is_join){
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret){
              is_join = false;
            }
            else{
                Serial.println("");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else{
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%08X %08X\"\r\n", classification_flag);
            ret = at_send_check_response("Done", 10000, cmd);
            if (ret){
              Serial.print("classification_flag:");
              Serial.print(classification_flag);
              Serial.print("\t");
              recv_prase(recv_buf);
            }
            else{
              Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
      delay(500);
    }

}

#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER
#error "Invalid model for current sensor"
#endif
```

### Faça você mesmo para mais recursos

:::note
Para mais detalhes, consulte a documentação abaixo.

- [**Connecting-to-Helium**](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/)
:::
Algo a que talvez devamos prestar mais atenção:

- Armazenar resultados de classificação:

    Podemos definir um limite para alterar nossas flags quando uma determinada condição estiver presente, e diferentes categorias recebem rótulos diferentes.

    Podemos comentar a função tft para obter mais velocidade.

    ```c++
    int classification_flag = 0;
    if (result.classification[1].value > 0.7) {
        tft.fillScreen(TFT_PURPLE);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Wave", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
        classification_flag = 1;
    }
    if (result.classification[2].value > 0.7) {
        tft.fillScreen(TFT_RED);
        tft.setFreeFont(&FreeSansBoldOblique12pt7b);
        tft.drawString("Circle", 20, 80);
        delay(1000);
        tft.fillScreen(TFT_WHITE);
        classification_flag = 2;
    }
    ....
    ```

- Bloco de código de envio de dados:

    Com a rede LoRa disponível, podemos usar a função para enviar a tag para a Helium e recuperá-la pelo Decoder que escrevemos na Helium.

    ```c++
    if (is_exist){
        int ret = 0;
        if (is_join){
            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\r\n");
            if (ret){
              is_join = false;
            }
            else{
                Serial.println("");
                Serial.print("JOIN failed!\r\n\r\n");
                delay(5000);
            }
        }
        else{
            char cmd[128];
            sprintf(cmd, "AT+CMSGHEX=\"%08X %08X\"\r\n", classification_flag); // Change classification_flag to data wanna transfer
            ret = at_send_check_response("Done", 10000, cmd);
            if (ret){
              Serial.print("classification_flag:");s
              Serial.print(classification_flag);
              Serial.print("\t");
              recv_prase(recv_buf);
            }
            else{
              Serial.print("Send failed!\r\n\r\n");
            }
            delay(5000);
        }
    }
    else
    {
      delay(500);
    }
    ```

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
