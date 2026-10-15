---
title: Conectando ao Blynk
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Blynk/
slug: /Wio-Terminal-Blynk
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-18'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Blynk/
---
# Conectando o Wio Terminal ao Blynk

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif" /></div>

Este wiki apresenta como usar o Wio Terminal com o software [**Blynk**](https://blynk.io/) para interagir com Wi‑Fi ou Bluetooth. Isso permite que você use o Wio Terminal como o núcleo de um dispositivo de IoT e consiga controlar hardware a partir de celulares com muita facilidade!

- **O que é o Blynk**

[**Blynk**](https://blynk.io/) é uma nova plataforma que permite criar rapidamente interfaces para controlar e monitorar seus projetos de hardware a partir de dispositivos iOS e Android. Depois de baixar o app Blynk, você pode criar um painel de projeto e organizar botões, controles deslizantes, gráficos e outros widgets na tela

## Hardware Necessário

- [**Wio Terminal**](https://www.seeedstudio.com/Wio-Terminal-p-4509.html)

- Celular
  - Baixe o app Blynk pela App Store

## Primeiros Passos

### Instalando a blynk-library

1. Acesse o repositório [**blynk-library**](https://github.com/blynkkk/blynk-library) e baixe todo o repositório para o seu disco local.

2. Agora a biblioteca pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `blynk-library` que você acabou de baixar.

![InstallLibrary](https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg)

### Dependências de Wi‑Fi

Por enquanto, o Wi‑Fi e o Bluetooth são **dois firmwares separados** para o Wio Terminal e **portanto NÃO podem ser usados ao mesmo tempo**.

>Note: O novo firmware com Wi‑Fi e Bluetooth funcionando juntos está em desenvolvimento e será lançado em breve.

- Siga o **[Wi‑Fi Overview Wiki](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Network-Overview/)** para fazer o upload do firmware de Wi‑Fi para o Wio Terminal.

- Também **baixe e instale todas as bibliotecas de Wi‑Fi dependentes**.

### Dependências de Bluetooth

- Siga o [**Bluetooth Overview Wiki**](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-Bluetooth-Overview/) para fazer o upload do firmware de Bluetooth para o Wio Terminal.

- Também **baixe e instale todas as bibliotecas de Bluetooth dependentes**.

## Configuração do App Móvel Blynk

Depois de baixar o app Blynk.

- Abra o aplicativo.

- Clique em **New Project**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg" /></div>

- Preencha o **Project Name**, escolha **Arduino UNO** como dispositivo e selecione **WiFi** ou **Bluetooth** como o tipo de conexão. Em seguida, clique em Create Project:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png" /></div>

- Agora, você **receberá um token enviado para o e‑mail que você registrou no Blynk**. Ele será necessário nos sketches Arduino mais adiante.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png" /></div>

## Exemplos com Wi‑Fi

Estes exemplos usam Wi‑Fi para comunicação entre o Wio Terminal e o app Blynk:

### Conexão Wi‑Fi Simples

Este exemplo simplesmente se conecta a uma rede Wi‑Fi específica e em seguida ao servidor Blynk:

- Substitua o **token** que foi enviado para seu e‑mail em `auth`.

- Substitua o `SSID` e a `Password` da sua rede.

- Faça o upload do sketch para o Wio Terminal.

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "SSID";
char pass[] = "Password";

void setup()
{
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
}

void loop()
{
  Blynk.run();
}
```

Depois de fazer o upload, abra o app Blynk no seu celular e clique no botão `play` no canto superior direito para entrar em modo ativo. Você deverá ver que está conectado!

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png" /></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png" /></div>

## Enviando Temperatura para o Blynk

Este exemplo é uma demonstração de envio de dados do Wio Terminal para o servidor Blynk, que depois podem ser visualizados no app móvel.

- Substitua as credenciais de Wi‑Fi e o token.

- Os dados de temperatura são enviados para o **Virtual Pin 0** (`V0`).

- Faça o upload para o Wio Terminal.

:::note
    Neste exemplo, os valores de temperatura são gerados aleatoriamente.
:::

```cpp
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>

// Your WiFi credentials.
const char* ssid = "SSID";
const char* pass = "Password";

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BlynkTimer timer;

void sendTemperature() {
  // Generate random temperature value 10.0 to 30.0 (for example)
  float t = float(random(100, 300)) / 10;
  // Format: 1 decimal place, add ℃
  String str = String(t, 1) + "℃";
  // Send it to the server
  Blynk.virtualWrite(V0, str);
}


void setup() {
  // Debug console
  Serial.begin(9600);

  Blynk.begin(auth, ssid, pass);
  timer.setInterval(1000L, sendTemperature);
}

void loop() {
  Blynk.run();
  timer.run();
}
```

Agora abra novamente o app Blynk no seu celular.

- Deslize para a esquerda para abrir o Widget Box e selecione o widget **Value Display**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png" /></div>

- Clique no botão e configure-o para atribuir ao **Virtual Pin 0**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png" /></div>

- Salve as configurações e clique no botão play no canto superior direito para entrar em modo ativo! Você poderá ver os valores de temperatura no seu celular.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png" /></div>

## Exemplos com Bluetooth

Estes exemplos usam Bluetooth para comunicação entre o Wio Terminal e o app Blynk:

### Conexão Bluetooth Simples

Este é um exemplo simples usando o Bluetooth do Wio Terminal para conectar ao Bluetooth do celular:

- Substitua o seu token em `auth`.

- Faça o upload para o Wio Terminal.

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

void setup()
{
  // Debug console
  Serial.begin(9600);
  Serial.println("Waiting for connections...");
  Blynk.setDeviceName("Blynk");
  Blynk.begin(auth);
}

void loop()
{
  Blynk.run();
}
```

Agora abra o app Blynk e configure da seguinte forma:

- Deslize para a esquerda para abrir o Widget Box e role para baixo até encontrar o widget **BLE**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg" /></div>

- Clique no **widget BLE** e selecione a conexão com um dispositivo BLE chamado `Blynk`:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg" /></div>

- Quando o BLE estiver conectado, clique no botão play para entrar em modo ativo!

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg" /></div>

Agora, o Wio Terminal está conectado ao Blynk usando Bluetooth!

### Controlando Fitas RGB Usando o Blynk

Este exemplo conecta uma fita RGB ao Wio Terminal e usa o Blynk para controlar a cor exibida!

<div align="center"><video width={560} height={315} controls>
    <source src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4" type="video/mp4" />
  </video></div>

#### Instalar a Biblioteca Adafruit_NeoPixel

1. Acesse o repositório [Adafruit_NeoPixel](https://github.com/adafruit/Adafruit_NeoPixel) e baixe todo o repositório para o seu disco local.

2. Agora a biblioteca pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch` -> `Include Library` -> `Add .ZIP Library`, e escolha o arquivo `Adafruit_NeoPixel` que você acabou de baixar.

---

- Configure o `PIN` e o `NUMPIXELS` de acordo com o seu ambiente.
- Os valores RGB são lidos pelo app Blynk e atribuídos ao **Virtual Pin 2(V2)**.
- Faça o upload para o Wio Terminal.

```cpp
#define BLYNK_PRINT Serial
#define BLYNK_USE_DIRECT_CONNECT

#include <BlynkSimpleWioTerminal_BLE.h>
#include <BLEDevice.h>
#include <BLEServer.h>
#include <Adafruit_NeoPixel.h>

#include <TFT_eSPI.h> // Hardware-specific library
TFT_eSPI tft = TFT_eSPI();       // Invoke custom library

#define PIN 0
#define NUMPIXELS 20
#define BLYNK_PRINT Serial
Adafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourToken";

BLYNK_WRITE(V2)
{
  int R = param[0].asInt();
  int G = param[1].asInt();
  int B = param[2].asInt();
  tft.fillScreen(tft.color565(R, G, B));
  for (int i = 0; i < NUMPIXELS; i++) {
    pixels.setPixelColor(i, pixels.Color(R, G, B));
    pixels.show();
  }
}

void setup() {
  // Debug console
  Serial.begin(9600);
  Serial.println("Waiting for connections...");
  Blynk.setDeviceName("Blynk");

  Blynk.begin(auth);

  tft.begin();
  tft.fillScreen(TFT_BLACK);
  pixels.begin();
}

void loop() {
  Blynk.run();
}
```

Abra o app Blynk e configure da seguinte forma:

- Deslize para a esquerda para abrir o Widget Box e role para baixo até encontrar o widget **zeRGBa**:

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png" /></div>

- Clique no widget zeRGBa e configure da seguinte forma. Defina como **Merge** Output e atribua ao **Virtual Pin 2 (V2)** e configure os valores de **0 a 255**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png" /></div>

- Certifique-se de que o widget BLE esteja conectado primeiro e clique no botão Play para entrar ao vivo! Você pode simplesmente mudar a cor RGB da fita de LED arrastando a cor no Blynk.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png" /></div>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
