---
title: Rastreamento de Trajeto com L76K no Ubidots
description: Conectando o módulo GNSS L76K e o SeeedStudio XIAO ao Ubidots para rastreamento de trajeto de localização em um mapa
keywords:
  - XIAO
  - Expansion Boards for XIAO
  - GPS Module for XIAO
  - L76K Path Tracking on Ubidots
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /L76K_Path_Tracking_on_Ubidots
sku: 109100021
last_update:
  date: 03/07/2024
  author: Harrison Xu
createdAt: '2024-03-08'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/L76K_Path_Tracking_on_Ubidots/
---


# Conectando o módulo GNSS L76K e o SeeedStudio XIAO ao Ubidots para rastreamento de trajeto de localização em um mapa

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

## Introdução
Depois de [Começar a usar o módulo GNSS L76K para SeeedStudio XIAO](https://wiki.seeedstudio.com/pt-br/get_start_l76k_gnss/), você pode querer usar o módulo GNSS L76K para localizar um objeto e exibir o trajeto em um mapa. Para este propósito, podemos conseguir isso combinando a placa de desenvolvimento SeeedStudio XIAO e a plataforma de dados IoT Ubidots.

[Ubidots](https://ubidots.com/) é uma plataforma de desenvolvimento IoT de baixo código para engenheiros e desenvolvedores que não têm tempo ou energia para construir sozinhos uma aplicação IoT completa e pronta para produção. De APIs compatíveis com dispositivos a uma interface limpa para usuários finais, o Ubidots oferece os blocos de construção essenciais para levá‑lo mais rápido ao mercado, sem precisar contratar uma equipe cara de engenheiros para desenvolver e manter uma solução personalizada.

### Recursos
- Enviar dados de localização em tempo real (latitude e longitude) quando conectado ao Wi-Fi
- Exibir o trajeto conectado por pontos de posição em um mapa

## Primeiros Passos
### Etapa 1: Obter o token do Ubidots
Primeiro, abra https://ubidots.com no seu navegador e crie uma conta. Confirme seu e-mail e faça login no console do Ubidots.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic02_SignUp.png" alt="pir" width={600} height="auto"/>
</p>

Clique no seu avatar no canto - "My Profile", role para baixo e altere o campo "Decimal places" de 2 para 6 para obter maior precisão de latitude e longitude.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic04_Setting.png" alt="pir" width={600} height="auto"/>
</p>

Em seguida, vá para "API Credentials" à esquerda, copie o token (**NÃO a API Key**) para uso posterior.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic05_Token.png" alt="pir" width={600} height="auto"/>
</p>

### Etapa 2: Enviar código para o XIAO
Conecte a placa de desenvolvimento SeeedStudio XIAO (aqui usamos o SeeedStudio XIAO ESP32S3 como exemplo), o módulo GNSS L76K, a antena GNSS e a antena Wi-Fi, todos juntos, e ligue‑os ao seu computador.

:::danger **Warning**
Preste atenção especial à direção de instalação do módulo, não o conecte invertido, caso contrário é provável que queime o módulo ou o XIAO.
:::

Em seguida, vamos iniciar a IDE Arduino. Lembre‑se de adicionar as bibliotecas `EspSoftwareSerial` e `TinyGPSPlus` no gerenciador de bibliotecas, baixar a [Ubidots ESP32 Library](https://github.com/ubidots/ubidots-esp32) e adicioná‑la também. 

Selecione a placa e a porta correspondentes e, em seguida, cole o código a seguir: 

```cpp
#include <SoftwareSerial.h>
#include <TinyGPSPlus.h>
#include <WiFi.h>
#include <Ubidots.h>

static const int RXPin = D7, TXPin = D6;
static const uint32_t GPSBaud = 9600;
const char WIFI_SSID[]     = "INPUT YOUR WIFI NAME HERE";
const char WIFI_PASS[]     = "INPUT YOUR WIFI PASSWORD HERE";
const char UBIDOTS_TOKEN[] = "INPUT YOUR UBIDOTS TOKEN HERE";

SoftwareSerial MySerial(RXPin, TXPin);
TinyGPSPlus gps;
Ubidots ubidots(UBIDOTS_TOKEN, UBI_UDP);
double lat;
double lng;

void setup() {
  Serial.begin(115200);
  MySerial.begin(GPSBaud);
  ubidots.setDebug(true);    // For observing Ubidots uploading log. You can also change it to "false" for a more simplified serial monitor.
  Serial.println("\nTinyGPSPlus library version: " + String(TinyGPSPlus::libraryVersion()));

  WiFi.mode(WIFI_STA);
  WiFi.disconnect();
  while (WiFi.status() != 3) {
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    Serial.println(WiFi.status());
    delay(5000);
  }

  /*
    WL_NO_SHIELD        = 255,    // For compatibility with WiFi Shield library
    WL_IDLE_STATUS      = 0,
    WL_NO_SSID_AVAIL    = 1,
    WL_SCAN_COMPLETED   = 2,
    WL_CONNECTED        = 3,
    WL_CONNECT_FAILED   = 4,
    WL_CONNECTION_LOST  = 5,
    WL_DISCONNECTED     = 6
  */

  Serial.println("WiFi is connected!");
}

void loop() {
  while (MySerial.available() > 0) {
    if (gps.encode(MySerial.read())) {
      getLocation();
      sendToUbidots();
      delay(10 * 1000);  // Change the parameter here to modify the interval of getting and uploading location.
    }
  }

  if (millis() > 5000 && gps.charsProcessed() < 10) {
    Serial.println("No GPS detected, please check wiring.");
  }
}

void getLocation() {
  if (gps.location.isValid()) {
    lat = gps.location.lat();
    lng = gps.location.lng();

    Serial.print("Location: ");
    Serial.print(gps.location.lat(), 6);
    Serial.print(", ");
    Serial.print(gps.location.lng(), 6);
    Serial.println();
  } else {
    Serial.println("Unable to get location currently");
  }
}

void sendToUbidots() {
  if (lat != 0 && lng != 0) {
    char charLat[20];
    char charLng[20];
    sprintf(charLat, "%.6lf", lat);
    sprintf(charLng, "%.6lf", lng);

    ubidots.addContext("lat", charLat);
    ubidots.addContext("lng", charLng);
    char* context = (char*)malloc(sizeof(char) * 60);
    ubidots.getContext(context);
    ubidots.add("position", 1, context);

    if (ubidots.send()) {
      Serial.println("Values sent");
    } else {
      Serial.println("Values not sent");
    }
    free(context);
  }
}
```

Envie para a placa e, em breve, você verá alguma saída no monitor serial como esta: 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic06_SerialMonitor.png" alt="pir" width={600} height="auto"/>
</p>

<!--硬件连接正常工作与屏幕截图放一起-->

É normal esperar algum tempo para se conectar à rede Wi-Fi e obter informações de localização dos satélites, como mostra a imagem acima. Se essas mensagens de erro persistirem por vários minutos, tente reiniciar a placa XIAO com o pequeno botão "R" ao lado da porta USB-C. 

:::tip
O módulo GNSS L76K é usado em ambientes externos, portanto, coloque‑o em um local aberto e sem obstruções, caso contrário as informações de localização podem não ser obtidas.
:::

### Etapa 3: Exibir dados no mapa
Agora o módulo GNSS L76K e o SeeedStudio XIAO estão obtendo a localização via GNSS e enviando informações de latitude e longitude para o Ubidots. Vamos voltar ao Ubidots e verificar. Vá para https://industrial.ubidots.com/app/devices, e haverá um novo "device" que foi criado automaticamente pelo Ubidots desde que enviamos novos dados por meio do token. Clique no nome do dispositivo; você verá que a localização deste dispositivo é automaticamente definida como os dados que enviamos. 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic08_DeviceInfo.png" alt="pir" width={600} height="auto"/>
</p>

Em seguida, vamos criar um mapa para mostrar o trajeto. Vá em "Data" - "Dashboards" na parte superior, clique no botão de menu hambúrguer ao lado de "Demo Dashboard" e então "CREATE" um novo dashboard. Você pode modificar as configurações como mostrado aqui ou personalizar para atender às suas próprias necessidades. Lembre‑se de "SAVE" o novo dashboard. 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic10_NewDashboard.png" alt="pir" width={600} height="auto"/>
</p>

No novo dashboard, clique em "Add new widget" e role para baixo até encontrar "Map". Clique em "ADD MARKER GROUP", selecione o dispositivo que acabamos de verificar, e o mapa irá aparecer. Mova o cursor para o canto inferior direito do mapa para redimensioná‑lo e deixá‑lo maior.

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic11_NewWidget.png" alt="pir" width={600} height="auto"/>
</p>

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic12_MapSetting.png" alt="pir" width={600} height="auto"/>
</p>

Viva! O trajeto conectado pelos pontos de posição está sendo exibido bem na nossa frente! 

<p style={{textAlign: 'center'}}>
  <img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/Ubidots/Pic00_Track.png" alt="pir" width={600} height="auto"/>
</p>

:::tip
Se o módulo GNSS L76K permanecer em uma posição fixa sem se mover, o mapa mostrará apenas um ponto em vez de um trajeto, obviamente. 
:::

## Links de Referência
- [GPS Location | Ubidots API Reference](https://docs.ubidots.com/reference/gps-location)

- [Create Map Widgets in Ubidots | Ubidots Help Center](https://help.ubidots.com/en/articles/1712418-create-map-widgets-in-ubidots)

- [How to create a real-time map? | Ubidots Help Center](https://help.ubidots.com/en/articles/693652-how-to-create-a-real-time-map)

- [Ubidots ESP32 Library on GitHub](https://github.com/ubidots/ubidots-esp32)

## Suporte Técnico & Discussão de Produto

Agradecemos por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
  <a href="https://forum.seeedstudio.com/" class="button_forum"></a>
  <a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>
<div class="button_tech_support_container">
  <a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
  <a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
