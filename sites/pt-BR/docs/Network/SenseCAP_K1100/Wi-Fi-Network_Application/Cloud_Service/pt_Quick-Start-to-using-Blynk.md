---
description: Início Rápido com Blynk
title: Uso do Blynk
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Quick-Start-to-using-Blynk
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/Quick-Start-to-using-Blynk/
---
# Início Rápido para Usar o Blynk

Neste tutorial, forneceremos um guia rápido sobre como configurar o módulo Grove Vision AI com o Wio Terminal para enviar os dados de detecção, como contagem de pessoas e valor de confiança da detecção via Wi‑Fi, e então utilizar o dashboard do aplicativo móvel Blynk para visualizar a saída de detecção do módulo Grove Vision AI.

## Materiais Necessários

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/camera.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Módulo Grove Vision AI</td>
    </tr>
  </tbody></table>

## Preparação Prévia

### Conexão

Nesta rotina, precisamos conectar o módulo Vision AI no lado esquerdo de acordo com o diagrama abaixo.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1100/vi.jpg" /></div>

### Preparação de software

**Passo 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Passo 3.** Adicione o Wio Terminal à IDE Arduino.

Abra sua IDE Arduino, clique em `File > Preferences`, e copie a URL abaixo para Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Passo 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde ao seu Arduino. Selecione o **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. Provavelmente será COM3 ou superior (COM1 e COM2 geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`.

Se você não conseguir enviar o sketch, na maioria das vezes é porque a IDE Arduino não conseguiu colocar o Wio Terminal em modo bootloader. (Porque o MCU foi interrompido ou seu programa está manipulando o USB) A solução é colocar seu Wio Terminal em modo bootloader manualmente.
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

## Guia de Passos

### Passo 1. Criar conta

Acesse o [site oficial do Blynk](https://blynk.io/)，e crie uma conta. Você será solicitado a informar seu e‑mail para registrar, e verifique seu e‑mail para validar e confirmar a conclusão do registro da sua conta.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/18.png" /></div>

### Passo 2. Adicionar novo template

Depois que você fizer login no console do Blynk, cancele e pule o pop‑up do assistente de inicialização e clique no botão **New Template** para criar um novo template.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/1.png" /></div>

Siga o assistente de configuração, na janela pop‑up, nomeie seu template e escolha **Seeed Wio Terminal** como **HARDWARE**, **WiFi** para **CONNECTION TYPE**.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/K1101/2.png" /></div>

Depois de clicar em done, você deverá ver a página do template e, para confirmar todas as informações sobre o novo template, clique em save no canto superior direito.

### Passo 3. Adicionar novo dispositivo

Depois de adicionar o template do dashboard, clique na aba My devices e, em seguida, clique no botão **New Device**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/4.png" /></div>

Então, escolha **From termplate**.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/5.png" /></div>

Selecione o nome do template criado no **Passo 2** na lista suspensa TEMPLATE, neste caso ele é chamado **wio terminal vision ai**, e digite um nome de dispositivo na caixa de diálogo DEVICE NAME.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/K1101/6.png" /></div>

Depois disso, as informações do novo dispositivo devem aparecer em um painel pop‑up, você deverá ver Template ID, Device Name e Auth Token. Clique em **Copy to clipboard** para copiar e salvar as informações de cabeçalho para uso posterior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

### Passo 4. Adicionar a biblioteca Arduino necessária  

Precisamos adicionar a biblioteca Arduino necessária para utilizar o módulo Grove Vision AI com o Wio Terminal. Clique no ícone abaixo e faça o download da biblioteca Arduino do Grove Vision AI.

<div>
  <p style={{}}><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank" /></p><div align="center"><a href="https://files.seeedstudio.com/wiki/K1101/libraries.zip" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Após baixar com sucesso o arquivo zip da biblioteca, descompacte os arquivos no seguinte caminho:

- No Windows: `C:\Users\{User Name}\Documents\Arduino\libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/36.png" /></div>

- No Mac: `/Users/{User Name}/Documents/Arduino/libraries`

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/37.png" /></div>

### Passo 5. Preparar o código do firmware

Podemos gerar o código base de template para conectar o Wio Terminal ao servidor Blynk a partir de [aqui](https://examples.blynk.cc/?board=Wio%20Terminal&shield=rpcWiFi&example=GettingStarted%2FPushData&auth=an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ&dev=Quickstart%20Device&tmpl=TMPLx3C44oO0).

Também preparamos o código de exemplo completo para este guia de início rápido, conforme abaixo:

```c
// Template ID, Device Name and Auth Token are provided by the Blynk.Cloud
// See the Device Info tab, or Template settings
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "";
char pass[] = "";

// Comment this out to disable prints and save space
#define BLYNK_PRINT Serial

#include <rpcWiFi.h>
#include <WiFiClient.h>
#include <BlynkSimpleWioTerminal.h>
#include "Seeed_Arduino_GroveAI.h"
#include <Wire.h>

GroveAI ai(Wire);
uint8_t state = 0;

char auth[] = BLYNK_AUTH_TOKEN;

BlynkTimer timer;

// This function sends Arduino's up time every second to Virtual Pin (5).
// In the app, Widget's reading frequency should be set to PUSH. This means
// that you define how often to send data to Blynk App.
void myTimerEvent()
{
  // You can send any value at any time.
  // Please don't send more that 10 values per second.
  if (state == 1)
  {
    if (ai.invoke()) // begin invoke
    {
      while (1) // wait for invoking finished
      {
        CMD_STATE_T ret = ai.state(); 
        if (ret == CMD_STATE_IDLE)
        {
          break;
        }
        delay(20);
      }
     uint8_t len = ai.get_result_len(); // receive how many people detect
     if(len)
     {
       Serial.print("Number of people: ");
       Serial.println(len);
       object_detection_t data;       //get data

       for (int i = 0; i < len; i++)
       {
          Serial.println("result:detected");
          Serial.print("Detecting and calculating: ");
          Serial.println(i+1);
          ai.get_result(i, (uint8_t*)&data, sizeof(object_detection_t)); //get result
          Serial.print("confidence:");
          Serial.print(data.confidence);
          Serial.println();
          Blynk.virtualWrite(V5, data.confidence);
          Blynk.virtualWrite(V4, len);
        }
     }
     else
     {
       Serial.println("No identification");
       Blynk.virtualWrite(V4, 0);
       Blynk.virtualWrite(V5, 0);
     }
    }
    else
    {
      delay(1000);
      Serial.println("Invoke Failed.");
    }
  }
  else
  {
    state == 0;
  }
}

void setup()
{
  // Debug console
  Serial.begin(115200);

  Wire.begin();

  Serial.println("begin");
  if (ai.begin(ALGO_OBJECT_DETECTION, MODEL_EXT_INDEX_1)) // Object detection and pre-trained model 1
  {
    Serial.print("Version: ");
    Serial.println(ai.version());
    Serial.print("ID: ");
    Serial.println( ai.id());
    Serial.print("Algo: ");
    Serial.println( ai.algo());
    Serial.print("Model: ");
    Serial.println(ai.model());
    Serial.print("Confidence: ");
    Serial.println(ai.confidence());
    state = 1;
  }
  else
  {
    Serial.println("Algo begin failed.");
  }

  Blynk.begin(auth, ssid, pass);
  // You can also specify server:
  //Blynk.begin(auth, ssid, pass, "blynk.cloud", 80);
  //Blynk.begin(auth, ssid, pass, IPAddress(192,168,1,100), 8080);

  // Setup a function to be called every second
  timer.setInterval(1000L, myTimerEvent);
}

void loop()
{
  Blynk.run();
  timer.run(); // Initiates BlynkTimer
}
```

Você precisa preencher os cabeçalhos necessários no início do código de exemplo acima para conseguir conectar seu Wio Terminal ao Wi‑Fi e depois enviar dados para o servidor Blynk.

```c
#define BLYNK_TEMPLATE_ID ""
#define BLYNK_DEVICE_NAME ""
#define BLYNK_AUTH_TOKEN ""

char ssid[] = "";
char pass[] = "";
```

As primeiras 3 linhas de definição são as informações do dispositivo Blynk que foram geradas automaticamente no processo do **Passo 3**; basta simplesmente copiar e substituir as 3 primeiras linhas.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/7.png" /></div>

Em seguida, com as variáveis **ssid[]** e **pass[]**, preencha o ssid e a senha do seu Wi‑Fi ao qual o Wio Terminal irá se conectar. Ex.:

```c
#define BLYNK_TEMPLATE_ID           "TMPLx3C44oO0"
#define BLYNK_DEVICE_NAME           "Quickstart Device"
#define BLYNK_AUTH_TOKEN            "an8FkwZgCjShpV5NGCW-Lxl1qohRigeZ"

char ssid[] = "SeeedStudio";
char pass[] = "yyds2022";
```

:::note
Recomendamos usar o seu Hotspot Pessoal para testar este guia de início rápido, pois ele é mais estável em comparação com uma rede pública desconhecida e complexa.
:::

### Passo 6. Configurar o Painel Web do Blynk

Volte para o console Blynk; podemos configurar alguns widgets de painel de acordo com o código de firmware acima. Primeiro, precisamos selecionar o template que recriamos e então clicar no botão **Edit** localizado no canto superior direito.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/19.png" /></div>

Depois clique na aba **Datastreams** para configurar o fluxo de dados, então clique em **New Datastream** e depois selecione **Virtual Pin** para configurar a fonte de entrada de dados.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/11.png" /></div>

No **Passo 5**, usamos o pino virtual 4 e o pino virtual 5 para enviar os dados de detecção do módulo Grove Vision AI, como contagem de pessoas e percentual de confiança da inferência, respectivamente.

```c
Blynk.virtualWrite(V5, data.confidence); #confidence
Blynk.virtualWrite(V4, len); #head count
```

Portanto, precisamos configurar dois **Virtual Pin** na aba Datastreams do Blynk Console, V5 e V4 respectivamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/20.png" /></div>

Nas configurações do **Web Dashboard**, podemos definir o layout das informações; neste caso adicionamos 3 widgets de visualização mais comuns, como **Label**, **Gauge** e **Chart**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/21.png" /></div>

Você pode configurar os dados exibidos clicando no botão de engrenagem na parte superior de cada widget, que aparecerá ao passar o mouse sobre o widget.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/22.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/23.png" /></div>

Depois de configurar o layout das informações de dados, clique no botão **Save And Apply** no canto superior direito.

### Passo 7. Carregar o código e observar os dados

Por fim, use o cabo Grove para conectar o módulo Grove Vision AI à porta Grove do lado esquerdo do Wio Terminal, depois faça o upload do firmware atualizado após o passo 7 e então volte ao console de dispositivo do Blynk.
Você deverá ver o valor de contagem de pessoas e o valor de confiança de detecção sendo atualizados quando o módulo Grove Vision AI tiver uma detecção válida.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/17.png" /></div>

## Usar o aplicativo móvel Blynk para observar dados em tempo real

O Blynk não só oferece suporte ao painel do console web para exibir os dados do sensor em tempo real, mas também permite visualizar os dados do sensor em seu aplicativo móvel; entretanto, você precisa concluir os passos acima para conseguir ver os dados pelo aplicativo móvel.

### Passo 1. Baixar o APP Blynk

- Se você estiver usando dispositivos iOS, baixe o [Blynk IoT](https://play.google.com/store/apps/details?id=cloud.blynk).

- Se você estiver usando dispositivos Android, baixe o [Blynk IoT NEW](https://apps.apple.com/cn/app/blynk-iot-new/id1559317868).

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/25.png" /></div>

### Passo 2. Fazer login na sua conta com o APP Blynk

Depois de baixar e instalar o aplicativo Blynk, abra o APP e use a mesma conta que você criou para o console web para fazer login, assim os templates que você criou nos passos acima serão sincronizados com o aplicativo móvel.

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/K1101/26.png" /></div>

### Passo 3. Configurar o painel de dados no aplicativo móvel Blynk

Depois de fazer login no APP, deslize para a direita e toque em **My Profile** para entrar na visualização de configuração de perfil, depois certifique‑se de que o **Developer Mode** está ativado.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1101/29.png" /></div>

Em seguida, volte para a página principal e toque no ícone de chave inglesa no canto superior direito para entrar na visualização de configuração do template.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/K1101/30.png" /></div>

Aqui você poderá ver os templates que criou anteriormente e também o template de exemplo do APP Blynk.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/31.png" /></div>

Agora toque no template Seeed Wio Terminal para entrar na configuração de exibição dos widgets móveis; uma vez na visualização de configuração do template, toque no botão **+** no canto superior direito e você deverá ver a janela de caixa de widgets para adicionar widgets.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/32.png" /></div>

O passo de configuração aqui deve ser semelhante à configuração para o console web; escolhemos um widget **Value Display** e um widget **Labeled Value**, depois os renomeamos e escolhemos o fluxo de dados correto (pino virtual V4 e V5), de modo que os dados de detecção coletados pelo Wio Terminal a partir do módulo Grove Vision AI sejam sincronizados e atualizados continuamente tanto no console web quanto no aplicativo móvel.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/33.png" /></div>

### Passo 4. Carregar o novo código e observar o resultado

Como já carregamos o novo código no Wio Terminal, depois que o Wio Terminal se conectar ao WIFI, o dispositivo Wio Terminal conectado deverá aparecer no aplicativo móvel Blynk, conforme mostrado abaixo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/K1101/34.png" /></div>

Você deverá observar os dados do sensor simplesmente tocando no dispositivo exibido no aplicativo móvel Blynk.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/K1101/42.jpg" /></div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
