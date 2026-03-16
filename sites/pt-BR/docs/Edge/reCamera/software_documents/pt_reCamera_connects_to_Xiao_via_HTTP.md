---
description: Este wiki demonstra como conectar ao XIAO via HTTP na reCamera para executar um projeto em C++.
title: reCamera conecta ao XIAO via HTTP
keywords:
  - Http
  - reCamera
  - XIAO
  - YOLO
  - C++
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
slug: /recamera_connects_to_xiao_via_http
last_update:
  date: 07/11/2025
  author: Liangyuxin
no_comments: false
createdAt: '2025-07-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recamera_connects_to_xiao_via_http/
---

# reCamera conecta ao XIAO via HTTP

Este documento demonstra como habilitar a comunicação entre a reCamera e o [XIAO](https://wiki.seeedstudio.com/pt-br/SeeedStudio_XIAO_Series_Introduction/) via HTTP, transmitindo dados para o [XIAO](https://wiki.seeedstudio.com/pt-br/SeeedStudio_XIAO_Series_Introduction/) para que você possa integrar a reCamera em seus próprios projetos.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/1.png" /></div>

## Preparação

### reCamera

#### HTTP API e conexão de rede

**Primeiro**, prepare o projeto supervisor em C++ da sua reCamera e o ambiente de execução.

- **Passo 1.** Baixe o projeto [Supervisor_add_detection_http](https://files.seeedstudio.com/wiki/reCamera/develop_with_c_cpp/Supervisor_add_detection_http.7z), compile-o e copie o arquivo **.exe** para o diretório de terminal da reCamera. (Para instruções detalhadas, consulte o wiki: [Real-time YOLO object detection using reCamera based on Cpp / Environment Preparation / Pre-compilation](https://wiki.seeedstudio.com/pt-br/real_time_yolo_object_detection_using_recamera_based_on_cpp/).) Este é um projeto supervisor, usaremos apenas a interface de detecção de fotos do YOLO para fins de demonstração. Se você tiver seu próprio projeto, pode adicionar novas HTTP APIs e código do projeto dentro deste projeto.

- **Passo 2.** Conecte a reCamera ao PC usando um cabo USB, use o **MobaXterm** para acessar o terminal da reCamera (**192.168.42.1**) e navegue até **/etc/init.d/** para remover os três programas de inicialização automática: **S93sscma-supervisor, S03node-red e S91sscma-node**. (Para instruções detalhadas, consulte o wiki: [Real-time YOLO object detection using reCamera based on Cpp / Environment Preparation / reCamera Preparation](https://wiki.seeedstudio.com/pt-br/real_time_yolo_object_detection_using_recamera_based_on_cpp/).)

**Em segundo lugar**, a reCamera e o XIAO devem estar na mesma rede local (LAN) de 2,4 GHz para se comunicarem. A reCamera possui uma placa de rede sem fio interna que pode se conectar ao WiFi. Normalmente, você pode se conectar ao WiFi através do [Node-RED web](http://192.168.42.1/#/workspace) da câmera. No entanto, ao executar um projeto C++ personalizado, você deve desativar o Node-RED e reiniciar a reCamera. (Referência: [Seeed Studio Wiki](https://wiki.seeedstudio.com/pt-br/real_time_yolo_object_detection_using_recamera_based_on_cpp/)). Portanto, precisamos estabelecer a conexão WiFi via terminal Linux.

```
cd /etc/
ls
```

Você pode ver o **wpa_supplicant.conf** :
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/2.png" /></div>
Você também pode visualizá-lo no diretório de arquivos à esquerda:
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/3.png" /></div>

Arraste o(s) arquivo(s) para a área de trabalho e abra-o(s) com o Notepad. Adicione a rede como mostrado na imagem e altere para o seu SSID e senha.
**Observação** : Não inclua espaços extras em nenhum dos lados do sinal de igual.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/4.png" /></div>

Exclua o arquivo original no terminal da reCamera: /etc/.

```
sudo rm wpa_supplicant.conf
```

Abra o Windows PowerShell do seu PC e copie o arquivo para o terminal da reCamera : **/home/recamera/**:

```
scp "C:\Users\{your username}\Desktop\wpa_supplicant.conf" recamera@192.168.42.1:/home/recamera
```

Copie o arquivo de **/home/recamera/** para : **/etc/**:

```
sudo scp wpa_supplicant.conf /etc/
```

Reinicie a reCamera. Em seguida, execute o programa.

```
sudo ./Supervisor_add_detection_http
```

Certifique-se de que sua reCamera esteja conectada à sua rede WiFi.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/5.png" /></div>

### XIAO

#### Conexão de rede e envio de solicitações HTTP

É necessário baixar o [Arduino](https://www.arduino.cc/en/software) para gravar o programa no XIAO (ESP32-C3).

**Passo 1.** Baixe e instale a versão mais recente da [Arduino IDE](https://www.arduino.cc/en/software/) de acordo com o seu sistema operacional. Inicie o aplicativo Arduino.

**Passo 2.** Adicione o pacote da placa ESP32 à sua Arduino IDE
Navegue até **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
**https://jihulab.com/esp-mirror/espressif/arduino-esp32.git**

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/6.png" /></div>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave "**esp32**" na caixa de pesquisa, selecione a versão mais recente de **esp32** e instale-a.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/12.png" /></div>

**Passo 3.** Selecione sua placa e porta

**Board**
Navegue até **Tools > Board > ESP32 Arduino** e selecione "**XIAO_ESP32C3**". A lista de placas é um pouco longa e você precisa rolar até o final para encontrá-la.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/13.png" /></div>

**Port**
Navegue até **Tools > Port** e selecione o nome da porta serial do XIAO ESP32C3 conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware).

**Passo 4.** Escreva o seguinte programa e clique no botão de upload para compilar e enviar. A reCamera e o XIAO devem estar na mesma rede local (LAN) de 2,4 GHz para se comunicarem.

```
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>

#include <Adafruit_NeoPixel.h>
#ifdef __AVR__
 #include <avr/power.h> // Required for 16 MHz Adafruit Trinket
#endif

// Which pin on the Arduino is connected to the NeoPixels?
#define PIN        A0 // On Trinket or Gemma, suggest changing this to 1

// How many NeoPixels are attached to the Arduino?
#define NUMPIXELS 60 // Popular NeoPixel ring size
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

#define DELAYVAL 500

const char* ssid = {"your wifi name"};     
const char* password = {"your wifi password"}; 
const char* apiUrl = "http://{"your wifi ip"}/modeldetector";

void setup() {
  Serial.begin(115200);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  #if defined(__AVR_ATtiny85__) && (F_CPU == 16000000)
  clock_prescale_set(clock_div_1);
  #endif
  // END of Trinket-specific code.

  pixels.begin();
}

void loop() {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(apiUrl); 
    http.addHeader("Content-Type", "application/json"); 


    int httpCode = http.GET();
    if (httpCode > 0) {
      String payload = http.getString(); 
      Serial.println("HTTP Response:");
      // Serial.println(payload); 

      DynamicJsonDocument doc(1024); 
      DeserializationError error = deserializeJson(doc, payload);
      if (error) {
        Serial.print("JSON read failed: ");
        Serial.println(error.c_str());
      } 
      else {
      Serial.print("Code:  ");
      Serial.println(doc["Code"].as<String>());      
      Serial.print("Msg:  ");
      Serial.println(doc["Msg"].as<String>());
      Serial.print("Target:  ");
      Serial.println(doc["Target"].as<String>());
      Serial.print("Score:  ");
      Serial.println(doc["Score"].as<String>());
      Serial.print("Release_duration:  ");
      Serial.print(doc["Release_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Capture_duration:  ");
      Serial.print(doc["Capture_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Image_preprocessing_duration:  ");
      Serial.print(doc["Image_preprocessing_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Detection_duration:  ");
      Serial.print(doc["Detection_duration"].as<String>());
      Serial.println("ms");
      Serial.print("Total Duration:  ");
      Serial.print(doc["Duration"].as<String>());
      Serial.println("ms");


      if (doc["Target"].as<String>().indexOf("person") != -1){
          pixels.clear();
          pixels.show();
          int smileyLEDs[] = {21,26,29,32,35,39};
          int numLEDs = sizeof(smileyLEDs) / sizeof(smileyLEDs[0]);

          for (int i = 0; i < numLEDs; i++) {
              pixels.setPixelColor(smileyLEDs[i], pixels.Color(2, 2, 0)); // yellow
          }
          pixels.show();

          printf("Target contains 'person'\n");
        } else {
            pixels.clear();
            pixels.show();
            printf("Target does not contain 'person'\n");
        }
    }


    } else {
      pixels.clear();
      pixels.show();
      Serial.print("HTTP get failed: ");
      Serial.println(httpCode);
    }
    http.end(); 
  } else {
    pixels.clear();
    pixels.show();
    Serial.println("WiFi disconnected");
  }

  delay(5000);
}


```

**Observação**: Modifique para o nome da sua rede WiFi (SSID), senha e endereço IP wlan0 da reCamera.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/7.png" /></div>

Aguarde a conclusão do upload e você poderá ver que o XIAO se conectou com sucesso ao WiFi no **serial monitor**.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/8.png" /></div>

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/9.png" /></div>

## Execução

Certifique-se de que sua reCamera esteja executando o projeto Supervisor e tenha se conectado ao WiFi com sucesso.

```
sudo ./Supervisor_add_detection_http
```

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/10.png" /></div>

Você pode ver os resultados Json do serviço HTTP no **serial monitor** do XIAO.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/11.png" /></div>

Quando a pessoa fica em frente à câmera, o XIAO exibe um rosto sorridente, realizando assim uma câmera sorridente que você pode fazer DIY.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/reCamera/reCamera_connects_to_Xiao_via_HTTP/14.png" /></div>

Para mais detalhes, consulte nosso [repositório GitHub](https://github.com/Seeed-Studio/OSHW-reCamera-Series).

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/Seeed-Studio/OSHW-reCamera-Series" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a Biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />


## Suporte Técnico e Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
