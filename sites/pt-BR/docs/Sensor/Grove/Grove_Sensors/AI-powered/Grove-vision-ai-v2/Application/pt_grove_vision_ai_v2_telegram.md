---
description: Este projeto combina o XIAO ESP32S3 e o Grove Vision AI V2 para criar um dispositivo compacto de detecção de pessoas. O módulo V2, equipado com um modelo de detecção de pessoas, identifica a presença humana e envia os resultados para o ESP32S3. O microcontrolador então processa as informações e encaminha os alertas de detecção para uma conta específica do Telegram, fornecendo notificações em tempo real sempre que uma pessoa é detectada na área monitorada.
title: Implante o Grove Vision AI V2 para Notificar Você via Telegram
image: https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/headimage2.png
slug: /grove_vision_ai_v2_telegram
last_update:
  date: 05/27/2024
  author: Allen
createdAt: '2024-05-28'
updatedAt: '2026-03-12'
url: https://wiki.seeedstudio.com/pt-br/grove_vision_ai_v2_telegram/
---

<div class="table-center">
<iframe width="400" height="700" src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/xiao_telegram.mp4" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
</div>

Este projeto combina o XIAO ESP32S3 e o Grove Vision AI V2 para criar um dispositivo compacto de detecção de pessoas. O módulo V2, equipado com um modelo de detecção de pessoas, identifica a presença humana e envia os resultados para o ESP32S3. O microcontrolador então processa as informações e encaminha os alertas de detecção para uma conta específica do Telegram, fornecendo notificações em tempo real sempre que uma pessoa é detectada na área monitorada.

## Materiais Necessários

<div class="table-center">
	<table align="center">
		<tr>
			<th>XIAO ESP32S3</th>
			<th>Grove Vision AI V2 Kit</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:250, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/00.jpg" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-V2-Kit-p-5852.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

## Parte 1. API do Telegram

Se quisermos enviar algo para o Telegram, precisamos obter o **Token** e o **ChatId** do Telegram para acessar a API do Telegram. Então vamos obtê-los seguindo as etapas abaixo.

### Etapa 1. Usar o BotFather para criar um novo bot

Abra o seu Telegram e entre na página do BotFather, envie **/start** e o BotFather lhe dará algum retorno.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/2.png" style={{width:500, height:'auto'}}/></div>

Clique no link **/newbot**. O BotFather criará um novo bot para você e você deve dar um nome ao seu bot de acordo com as regras.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/3.png" style={{width:500, height:'auto'}}/></div>

### Etapa 2. Obter seu Token e ChatId

De acordo com a etapa anterior, o BotFather lhe dará algum retorno quando você criar o seu bot. Você encontrará o **Token** na resposta e o formato será algo como: **123456789:AoUJnnpoFlkkdfJbCXlo...**. Em seguida, use o seu Token para acessar este link para obter o seu **ChatId**.

```python
#access this link using your Token
https://api.telegram.org/bot{Token}/getUpdates

#example
https://api.telegram.org/bot123456789:AoUJnnpoFlkkdfJbCXlo.../getUpdates
```

Você encontrará o seu **ChatId** seguindo a imagem abaixo. O ChatId será algo como: **12234556**. **Salve o seu Token e ChatId**, nós os usaremos depois.

:::tip
Se você não vir nada nesta página, envie alguma mensagem para o seu bot e atualize esta página novamente.
:::

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/1.png" style={{width:1000, height:'auto'}}/></div>

## Parte 2. Modelo de Detecção de Pessoas

#### Etapa 3. Escolher o modelo

Primeiro, precisamos abrir a página principal do SenseCraft AI Model Assistant.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/ai/#/home" target="_blank" rel="noopener noreferrer"><strong><span><font color={'FFFFFF'} size={"4"}>Ir para o SenseCraft AI</font></span></strong></a>
</div>
<br />

Escolha o modelo que você deseja implantar e clique nele.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/4.png" style={{width:1000, height:'auto'}}/></div>

Você pode ver a descrição deste modelo aqui e, se ele for adequado para você, clique no botão **Deploy Model** no lado direito.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/5.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 4. Conectar o módulo e enviar um modelo adequado

Use um cabo do tipo Type-C para conectar o Grove Vision AI V2 ao seu computador e, em seguida, clique no botão **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a3.png" style={{width:600, height:'auto'}}/></div>

Clique no botão **Confirm**. No canto superior esquerdo desta página, você pode selecionar **USB Single Serial**. Em seguida, clique no botão **Connect**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/a4.png" style={{width:600, height:'auto'}}/></div>

Permaneça nesta página por 1 a 2 minutos até que o modelo seja enviado com sucesso. Observe que mudar para outra aba de página durante este processo pode resultar em falha no envio (nosso time está trabalhando ativamente para resolver este problema, e ele será corrigido em breve).

### Etapa 5. Observações

Assim que o modelo for enviado com sucesso, você poderá ver o vídeo ao vivo da câmera do Grove Vision AI V2 na visualização à esquerda.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/6.png" style={{width:800, height:'auto'}}/></div>

Parabéns! Até aqui tudo certo, a seguir vamos escrever algum código para enviar algo ao Telegram via série XIAO ESP32.

## Parte 3. Enviar Notificação para o Telegram

### Etapa 6. Instalação

Primeiro, conecte o XIAO ESP32S3 ao Grove Vision AI V2 via pinos e, em seguida, conecte a antena ao XIAO ESP32S3. Por fim, conecte o XIAO ESP32S3 ao seu computador por meio de um cabo Type-C.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/8.png" style={{width:500, height:'auto'}}/></div>

### Etapa 7. Codificação

Primeiro precisamos baixar a [SSCMA Library](https://github.com/Seeed-Studio/Seeed_Arduino_SSCMA) nesta página.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/10.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, precisamos adicionar este pacote zip à Arduino IDE.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/11.png" style={{width:800, height:'auto'}}/></div>

Agora, crie um novo sketch na Arduino IDE, cole o código a seguir no sketch e envie.

:::tip
Por favor, altere para o seu Wi‑Fi 2.4G **ssid**, **password** e o seu **Token** e **ChatId** do Telegram salvos anteriormente.
:::

```cpp
#include <WiFi.h>
#include <HTTPClient.h>
#include <ArduinoJson.h>
#include <Seeed_Arduino_SSCMA.h>

//change to your ssid and password
const char* ssid = "xxx";
const char* password = "xxx";

//change to your token and chatid
const String botToken = "xxx";
const String chatId = "xxx";

SSCMA AI;

void setup()
{
    AI.begin();
    Serial.begin(9600);
    WiFi.begin(ssid, password); 
    while (WiFi.status() != WL_CONNECTED) {
      delay(1000);
      Serial.println("Connecting to WiFi...");
    }
}

void loop()
{
    if (!AI.invoke()){
      for (int i = 0; i < AI.boxes().size(); i++){
          //Get the model inference
          if(AI.boxes()[i].score>70){
            Serial.println("People detected");
            //Call the function to send the monitering result to Telegram
            if(WiFi.status() == WL_CONNECTED) {
              sendMessage("People Detected");
              delay(1000);
            }
          }
      }
    }
}

//The function that access Telegram and send some message
void sendMessage(String text) {
  String url = "https://api.telegram.org/bot" + botToken + "/sendMessage";
  String payload = "{\"chat_id\":\"" + chatId + "\",\"text\":\"" + text + "\"}";

  HTTPClient http;
  http.begin(url);
  http.addHeader("Content-Type", "application/json");

  int statusCode = http.POST(payload);
  if (statusCode == 200) {
    Serial.println("Message sent successfully!");
  } else {
    Serial.println("Failed to send message.");
  }
  http.end();
}
```

Depois de enviar o código, abra o monitor serial e use o Grove Vision AI V2 para detectar pessoas. Você verá os seguintes resultados quando o Vision AI V2 tiver detectado pessoas.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/7.png" style={{width:800, height:'auto'}}/></div>

Agora, abra a página de conversa do seu bot no Telegram e você verá algumas mensagens enviadas pelo XIAO ESP32S3. Você também pode usar um power bank para fornecer eletricidade como no vídeo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove_vision_ai_v2_telegram/9.png" style={{width:500, height:'auto'}}/></div>

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