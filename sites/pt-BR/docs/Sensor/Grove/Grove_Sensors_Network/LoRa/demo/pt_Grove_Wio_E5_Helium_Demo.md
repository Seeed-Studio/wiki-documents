---
title: Grove - Wio-E5 Demonstração com Helium
nointro: null
keywords:
  - docs
  - docusaurus
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Wio_E5_Helium_Demo
last_update:
  date: 08/30/2023
  author: Salman
createdAt: '2023-08-30'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/Grove_Wio_E5_Helium_Demo/
---

## Primeiros Passos



A Rede Helium IOT usa o protocolo LoRaWAN para fornecer conectividade com a internet para dispositivos da "Internet das Coisas" e é a sub-rede original no ecossistema Helium. Desenvolvedores e empresas em todo o mundo dependem da Rede Helium IOT para conectividade.

:::note
Certifique-se de estar dentro da área de cobertura da rede Helium. Você pode encontrar a cobertura da rede em [explorer.helium.com](https://explorer.helium.com/)
:::

### Preparativos

Aqui está uma demonstração mostrando como conectar a Rede Helium IoT e o módulo Seeeduino XIAO por meio do módulo Grove - Wio-E5. Esses módulos são capazes de coletar parâmetros de temperatura e umidade do ambiente e enviá-los de volta para o TTN. Os LEDs piscando no Seeeduino XIAO indicam o status do sensor de temperatura e umidade ao se conectar à nuvem TTN.

:::caution
Certifique-se de que a banda de frequência entre os nós finais, o gateway e a configuração do Helium que você está utilizando seja consistente, seguindo estas instruções.
O plano de frequência aplicado nesta demonstração é para **IN865**.
:::

### Hardware Necessário

| Seeeduino XIAO | Grove - Wio-E5 | Placa de Expansão Seeeduino XIAO | Grove - Sensor de Temperatura e Umidade (DHT11) |
|--------------|--------------|--------------|--------------|
|  <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg" alt="pir" width={600} height="auto" /></p>|   <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/1/1/11302009_preview-34.png" alt="pir" width={600} height="auto" /></p>| <p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg" alt="pir" width={600} height="auto" /></p>|  <p style={{textAlign: 'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/g/r/grove-temperature-humidity-sensor-dht11-preview.png" alt="pir" width={600} height="auto" /></p> |[Adquira agora](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html)|[Adquira agora](https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-DHT11.html)|

:::note
Se esta é a sua primeira vez usando o Seeeduino XIAO, consulte o [wiki do Seeeduino XIAO](https://wiki.seeedstudio.com/pt-br/Seeeduino_Lotus/).
Se esta é sua primeira vez usando o Arduino, o [site do Arduino](https://www.arduino.cc/) é um ótimo recurso para você iniciar sua jornada com Arduino.
:::

### Conexão de Hardware

- **Passo 1.** Conecte o módulo Wio-E5 diretamente ao slot "UART".

- **Passo 2.** Coloque o DH11 no soquete "A0/D0".

- **Passo 3.** Baixe o código; consulte a parte de software.


### Preparação do Helium IoT Console 

- **Passo 1.** Acesse o site do [Helium Console](https://console.helium.com/welcome ) e faça login se você já tiver uma conta. Se você não tiver uma conta existente, terá que usar um dos outros provedores públicos de Console LNS, como o [Metroscientific](https://console.meteoscientific.com/).

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Helium-login.png" alt="pir" width={500} height="auto" /></p> 

- **Passo 2.** Depois de fazer login, clique em "Devices" para gerenciar os dispositivos. 

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device.png" alt="pir" width={1000} height="auto" /></p>

- **Passo 3.** Em seguida, clique em "Add New Device"

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/CreateaDevice01.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 4.** Aqui, **1) Adicione um novo dispositivo** , **2) Copie o Dev EUI** , **3) Copie o App EUI**, **4) Copie o App Key**, **5) Finalmente clique em Save**.

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Id01.png" alt="pir" width="1000" height="auto"/></p>

- **Passo 5.** Agora você pode ver o dispositivo na seção "Devices". 

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/Device02.png" alt="pir" width="1000" height="auto"/></p>

Agora, a configuração do console Helium está concluída. Podemos seguir para a parte de Software e enviar dados para o console Helium pela rede LoRa do Helium. 


### Preparação de Software

:::note
Se esta é a primeira vez que você trabalha com Arduino, recomendamos fortemente que veja [Começando com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/) antes de começar.
Clique para saber mais detalhes sobre [como instalar uma Biblioteca Arduino](https://wiki.seeedstudio.com/pt-br/How_to_install_Arduino_Library/)
:::

#### Baixar Biblioteca

- **Passo 1.** Instale a [biblioteca u8g2](https://github.com/olikraus/U8g2_Arduino)

- **Passo 2.** Instale a [biblioteca do sensor DHT](https://github.com/Seeed-Studio/Grove_Temperature_And_Humidity_Sensor)

#### Código de Software

Baixe o exemplo; copie o código e cole no Arduino IDE e depois faça o upload.

```cpp

/*
* Grove - Wio-E5 Helium Demo
*  Date: 30/08/2023
* Author: Salman Faris (Modified Seeed TTN Sketch)

*/


#include <Arduino.h>
#include <U8x8lib.h>
#include "DHT.h"

//# define DHTPIN 0 // what pin we're connected to

// Uncomment whatever type you're using!
#define DHTTYPE DHT11  // DHT 11
// #define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

DHT dht(DHTPIN, DHTTYPE);

U8X8_SSD1306_128X64_NONAME_HW_I2C u8x8(/*reset=*/U8X8_PIN_NONE);
// U8X8_SSD1306_128X64_NONAME_SW_I2C u8x8(/*clock=*/ SCL, /*data=*/ SDA, /*reset=*/ U8X8_PIN_NONE);   // OLEDs without Reset of the Display

static char recv_buf[512];
static bool is_exist = false;
static bool is_join = false;
static int led = 0;

static int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...) {
  int ch;
  int num = 0;
  int index = 0;
  int startMillis = 0;
  va_list args;
  memset(recv_buf, 0, sizeof(recv_buf));
  va_start(args, p_cmd);
  Serial1.printf(p_cmd, args);
  Serial.printf(p_cmd, args);
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

void setup(void) {
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
    at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your DevEui
    at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your AppEui
    at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your AppKey
    at_send_check_response("+ID: DevAddr", 1000, "AT+ID=DevAddr\r\n"); 
    at_send_check_response("+ID: AppEui", 1000, "AT+ID\r\n");
    at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\r\n");
    at_send_check_response("+DR: IN865", 1000, "AT+DR=IN865\r\n");  // Change FREQ as per your location
    at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\r\n");
    at_send_check_response("+CLASS: C", 1000, "AT+CLASS=A\r\n");
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

  dht.begin();

  u8x8.setCursor(0, 2);
  u8x8.setCursor(2, 2);
  u8x8.print("temp:");

  u8x8.setCursor(2, 3);
  u8x8.print("humi:");

  u8x8.setCursor(2, 4);
  u8x8.print("led :");
  u8x8.print(led);
}

void loop(void) {

  temp = dht.readTemperature();
  humi = dht.readHumidity();

  Serial.print("Humidity: ");
  Serial.print(humi);
  Serial.print(" %\t");
  Serial.print("Temperature: ");
  Serial.print(temp);
  Serial.println(" *C");

  u8x8.setCursor(0, 2);
  u8x8.print("      ");
  u8x8.setCursor(2, 2);
  u8x8.print("temp:");
  u8x8.print(temp);
  u8x8.setCursor(2, 3);
  u8x8.print("humi:");
  u8x8.print(humi);

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
      sprintf(cmd, "AT+CMSGHEX=\"%04X%04X\"\r\n", (int)temp, (int)humi);
      ret = at_send_check_response("Done", 5000, cmd);
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

```

Certifique-se de substituir o **DevEui**, **AppEui** e **AppKey** antes de fazer o upload do código. 

```cpp
at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your DevEui
at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your AppEui
at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\"xxxxxxxxxxxxx\"\r\n"); // replace 'xxxxxxxxxxxxx' with your AppKey
```


- **Passo 8**: Faça o upload do código Arduino para o Seeeduino XIAO como explicado anteriormente e abra o monitor serial para ver a seguinte saída

```
+ID: DevAddr, 26:0B:20:25
+ID: DevEui, 60:81:F9:A4:84:XX:XX:XX
+ID: AppEui, 60:81:F9:A6:90:XX:XX:XX
AT+MODE=LWOTAA
+MODE: LWOTAA
AT+DR=IN865
+DR: IN865
AT+CH=NUM,0-2
+CH: NUM, 0-2
AT+CLASS=A
+CLASS: A
AT+PORT=8
+PORT: 8
Humidity: 43.00 %	Temperature: 23.00 *C
AT+JOIN
+JOIN: Start
+JOIN: NORMAL
+JOIN: Network joined
+JOIN: NetID 326548 DevAddr 48:00:00:0E
+JOIN: Done
Humidity: 29.00 %	Temperature: 32.00 *C
AT+CMSGHEX="0020001D"
+CMSGHEX: Start
+CMSGHEX: Wait ACK
+CMSGHEX: ACK Received
+CMSGHEX: RXWIN1, RSSI -30, SNR 6.0
+CMSGHEX: Done
Humidity: 8.00 %	Temperature: 30.00 *C
AT+CMSGHEX="001E0008"
+CMSGHEX: Start
```

Quando você vir uma mensagem como **+JOIN: Network joined**, abra a seção **"REAL TIME PACKETS"** e veja as informações de uplink. 

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/realtimepkts.png" alt="pir" width={1000} height="auto" /></p> 

Você também pode ver o log de eventos na seção **"Event Log"**. 

<p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/salmanfarisvp/resource/main/Images/LoRa/Helium/Networksetup/eventlog.png" alt="pir" width={1000} height="auto" /></p> 

e se abrirmos a janela de Depuração, podemos ver o payload de dados em tempo real e outras informações. 

<p style={{textAlign: 'center'}}><img src="https://github.com/salmanfarisvp/resource/blob/main/Images/LoRa/Helium/Networksetup/payload.png?raw=true" alt="pir" width={1000} height="auto" /></p> 

## Recursos

Folha de dados:

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.brd">Grove Wio-E5 v1.0.brd</a></p>

- <p><a href="https://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.pdf">Grove Wio-E5 v1.0.pdf</a></p>

- <p><a href="http://files.seeedstudio.com/products/113020091/Grove%20-%20LoRa%20-E5%20v1.0.sch">Grove Wio-E5 v1.0.sch</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20module%20datasheet_V1.0.pdf">Wio-E5 datasheet and specifications</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5%20AT%20Command%20Specification_V1.0%20.pdf">Wio-E5 AT Command Specification</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/STM32WLE5JC%20Datasheet.pdf">STM32WLE5JC Datasheet</a></p>

Certificações:

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20Certification%20CE-VOC-RED.pdf">Wio-E5-HF Certification CE-VOC-RED</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DSS.pdf">Wio-E5-HF FCC Certification -DSS</a></p>

- <p><a href="https://files.seeedstudio.com/products/317990687/res/LoRa-E5-HF%20FCC%20Certification%20-DTS.pdf">Wio-E5-HF FCC Certification -DTS</a></p>

SDK relevante:

- <p><a href="https://my.st.com/content/my_st_com/en/products/embedded-software/mcu-mpu-embedded-software/stm32-embedded-software/stm32cube-mcu-mpu-packages/stm32cubewl.license=1608693595598.product=STM32CubeWL.version=1.0.0.html#overview" target="_blank">Pacote STM32Cube MCU para a série STM32WL</a></p>

<div id="gtx-trans" style={{position: 'absolute', left: '-36px', top: '48.875px'}}>
  <div className="gtx-trans-icon" />
</div>

## Suporte Técnico e Discussão de Produtos


Obrigado por escolher nossos produtos! Estamos aqui para oferecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

