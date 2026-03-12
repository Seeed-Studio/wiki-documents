---
description: XIAO ESP32C3-Chatgpt
title: XIAO ESP32C3-Chatgpt
keywords:
  - XIAO ESP32C3
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /xiaoesp32c3-chatgpt
last_update:
  date: 03/03/2023
  author: Citric
createdAt: '2023-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/xiaoesp32c3-chatgpt/
---
# Aprenda a usar WiFiClient e HTTPClient no XIAO ESP32C3 - XIAO ESP32C3 & ChatGPT em ação

<div align="center"><img width ="1000" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/18.png"/></div>

ChatGPT é um novo modelo de chatbot, uma ferramenta de processamento de linguagem natural baseada em tecnologia de inteligência artificial, lançada pela OpenAI, um laboratório de pesquisa em inteligência artificial, em 30 de novembro de 2022.

Ele é capaz de realizar conversas aprendendo e compreendendo a linguagem humana, e também pode interagir com base no contexto do bate-papo, conversando e se comunicando verdadeiramente como um ser humano, realizando até mesmo tarefas como escrever e-mails, roteiros de vídeo, textos publicitários, traduções e codificação.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/2.png"/></div>

Em sistemas embarcados, o ChatGPT pode ser um ótimo auxiliar para nos ajudar a escrever programas simples, ou até mesmo verificar e corrigir bugs que aparecem no programa.

O que é empolgante é que a OpenAI fornece oficialmente interfaces para chamar modelos GPT-3, o que nos permite chamar essas interfaces e implantar esse excelente modelo em nossos próprios sistemas embarcados por meio de vários métodos.

O Seeed Studio XIAO ESP32C3 é uma mini placa de desenvolvimento IoT baseada no chip WiFi/Bluetooth de modo duplo Espressif ESP32-C3. Ele possui excelente desempenho de radiofrequência, suportando os protocolos IEEE 802.11 b/g/n WiFi e Bluetooth 5 (LE). Ele pode suportar perfeitamente os serviços de WiFi Client e WiFi Server fornecidos oficialmente pelo ESP32. É claro que também suporta Arduino perfeitamente.

<div align="center"><img width ="200" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div>

Portanto, neste tutorial, vamos orientar os usuários a aprender e usar as bibliotecas WiFiClient e HTTPClient do XIAO ESP32C3, como conectar-se à rede, como publicar páginas web e os fundamentos de HTTP GET e POST. O objetivo é chamar o OpenAI ChatGPT e criar seu próprio site de perguntas e respostas.

## Primeiros Passos

Neste tutorial, usaremos um XIAO ESP32C3 para configurar uma página de perguntas e respostas do ChatGPT própria. Nessa página, você pode inserir sua pergunta e o XIAO ESP32C3 registrará sua pergunta e usará o método de chamada de API fornecido pela OpenAI para enviar um comando de solicitação usando o HTTP Client para obter a resposta do ChatGPT e imprimi-la na porta serial.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/19.png"/></div>

As tarefas neste tutorial podem ser divididas nas quatro etapas principais a seguir.

1. [Configurar o XIAO ESP32C3 para conectar-se à rede](#Configurar-o-XIAO-ESP32C3-para-conectar-se-à-rede) : Nesta etapa, aprenderemos o processo básico de configuração WiFi usando o XIAO ESP32C3 e aprenderemos as operações básicas do XIAO ESP32C3, como configuração de rede, conexão a serviços de rede e obtenção de endereço IP.

2. [Construir a página web embarcada](#Construir-a-página-web-embarcada) : Nesta etapa, abordamos principalmente a biblioteca WiFi Client. Usando as funções GET e POST desta biblioteca, podemos escrever nossa própria página web de perguntas e respostas usando HTML e implantá-la no XIAO ESP32C3.

3. [Enviar perguntas pela página web integrada](#Enviar-perguntas-pela-página-web-integrada) : Nesta etapa, aprenderemos principalmente a usar o método POST no HTTP Client para enviar as perguntas que fazemos de acordo com o padrão da API da OpenAI. Vamos concentrar nossa atenção principal no processo de como coletar e armazenar as perguntas da página web.

4. [Obter respostas do ChatGPT](#Obter-respostas-do-ChatGPT) : Nesta etapa, aprendemos a usar o método POST no HTTP Client e extrair as respostas às perguntas que precisamos das mensagens retornadas. A última etapa é organizar a estrutura do código e fazer a integração final.

### Materiais Necessários

<table align="center">
 <tr>
     <th>Material</th>
 </tr>
    <tr>
     <td align="center"><div align="center"><img width ="130" src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png"/></div></td>
 </tr>
 <tr>
     <td align="center"><a href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"><strong>Adquira Agora</strong></a></td>
 </tr>
</table>

### Preparação Preliminar

Todos os procedimentos e etapas deste tutorial foram concluídos com base no XIAO ESP32C3. Na fase de preparação, primeiro precisamos concluir a configuração do ambiente para usar o XIAO ESP32C3.

**Passo 1.** Conecte o XIAO ESP32C3 ao seu computador via cabo USB Type-C.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/cable-connect.png" alt="pir" width="120" height="auto"/></div>

**Passo 2.** Baixe e instale a versão mais recente do Arduino IDE de acordo com seu sistema operacional

<p style={{textAlign: 'center'}}><a href="https://www.arduino.cc/en/software"><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width="600" height="auto"/></a></p>

**Passo 3.** Inicie o aplicativo Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

- **Passo 4.** Adicione o pacote de placa ESP32 ao seu Arduino IDE

Navegue até **File > Preferences** e preencha **"Additional Boards Manager URLs"** com a URL abaixo:
*[https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json](https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_dev_index.json)*

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/4.png"/></div>

Navegue até **Tools > Board > Boards Manager...**, digite a palavra-chave "**esp32**" na caixa de pesquisa, selecione a versão mais recente do ****esp32**** e instale-o.

<div align="center"><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/add_esp32c3.png" alt="pir" width="650" height="auto"/></div>

- **Passo 5.** Selecione sua placa e porta

Navegue até **Tools > Board > ESP32 Arduino** e selecione "**XIAO_ESP32C3**". A lista de placas é um pouco longa e você precisa rolar até o final para encontrá-la.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-Studio-XIAO-ESP32/XIAO_ESP32_board.png" alt="pir" width="800" height="auto"/></div>

Navegue até **Tools > Port** e selecione o nome da porta serial do XIAO ESP32C3 conectado. Provavelmente será COM3 ou superior (**COM1** e **COM2** geralmente são reservadas para portas seriais de hardware).

## Configurar o XIAO ESP32C3 para conectar-se à rede

O uso do WiFi foi descrito em detalhes no [tutorial do XIAO ESP32C3 sobre como usar WiFi](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_WiFi_Usage/#Conectar-a-uma-rede-WiFi).

Quando o ESP32 é configurado como uma estação Wi-Fi, ele pode se conectar a outras redes (como seu roteador). Nesse cenário, o roteador atribui um endereço IP exclusivo à sua placa ESP.

A primeira coisa que você precisa fazer para usar as funcionalidades Wi-Fi do ESP32 é incluir a biblioteca WiFi.h no seu código, da seguinte forma:

```c
#include <WiFi.h>
```

Para conectar o ESP32 a uma rede Wi-Fi específica, você deve conhecer seu SSID e senha. Além disso, essa rede deve estar dentro do alcance Wi-Fi do ESP32.

Primeiro, defina o modo Wi-Fi. Se o ESP32 for se conectar a outra rede (ponto de acesso/hotspot), ele deve estar no modo estação.

```c
WiFi.mode(WIFI_STA);
```

Em seguida, use `WiFi.begin()` para conectar-se a uma rede. Você deve passar como argumentos o SSID da rede e sua senha.

Conectar-se a uma rede Wi-Fi pode levar algum tempo, por isso geralmente adicionamos um loop while que continua verificando se a conexão já foi estabelecida usando `WiFi.status()`. Quando a conexão é estabelecida com sucesso, ele retorna `WL_CONNECTED`.

Quando o ESP32 é configurado como uma estação Wi-Fi, ele pode se conectar a outras redes (como seu roteador). Nesse cenário, o roteador atribui um endereço IP exclusivo à sua placa ESP32. Para obter o endereço IP da sua placa, você precisa chamar `WiFi.localIP()` após estabelecer uma conexão com sua rede.

```c
void WiFiConnect(void){
    WiFi.begin(ssid, password);
    Serial.print("Connecting to ");
    Serial.println(ssid);

    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
        Serial.print(".");
    }

    Serial.println("");
    Serial.println("WiFi connected!");
    Serial.print("IP address: ");
    Serial.println(WiFi.localIP());
}
```

As variáveis `ssid` e `password` armazenam o SSID e a senha da rede à qual você deseja se conectar.

```c
// Replace with your network credentials
const char* ssid = "REPLACE_WITH_YOUR_SSID";
const char* password = "REPLACE_WITH_YOUR_PASSWORD";
```

Este é um programa de conexão WiFi muito simples. Faça o upload do programa para o XIAO ESP32C3, depois abra o assistente serial e defina a taxa de baud para 115200. Se a conexão correr bem, você verá o endereço IP do XIAO impresso.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/5.png"/></div>

Se você tiver interesse em ler mais sobre aplicações e funções do ESP32C3 em WiFi, recomendamos a leitura de [Funções Úteis da Biblioteca Wi-Fi do ESP32](https://randomnerdtutorials.com/esp32-useful-wifi-functions-arduino/).

## Construir a página web embarcada

O ESP32 integra muitas funções WiFiClient muito úteis na biblioteca WiFi, o que nos permite projetar e desenvolver páginas web embarcadas sem adicionar bibliotecas adicionais.

Crie um novo objeto WiFiServer para usar esse objeto para controlar o servidor IoT estabelecido pelo XIAO ESP32C3.

```c
WiFiServer server(80);
WiFiClient client1;
```

Na etapa acima, permitimos que o XIAO ESP32C3 se conecte ao WiFi. Após a conexão WiFi ser bem-sucedida, você poderá obter o endereço IP atual do XIAO pelo monitor serial. Neste momento, o XIAO configurou com sucesso o servidor web. Você pode acessar este servidor web através do endereço IP do XIAO.

Suponha que o endereço IP do seu XIAO ESP32C3 seja `192.168.7.152`. Então você pode inserir este endereço IP no seu navegador a seguir.

Após inserir este endereço IP, podemos ver apenas uma página em branco. Isso ocorre porque ainda não publicamos o conteúdo da nossa página para essa página.

<div align="center"><img width ="500" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/6.png"/></div>

Então, vamos agora criar um array para armazenar o conteúdo da página que queremos estruturar, que é o código HTML, em C.

```c
const char html_page[] PROGMEM = {
    "HTTP/1.1 200 OK\r\n"
    "Content-Type: text/html\r\n"
    "Connection: close\r\n"  // the connection will be closed after completion of the response
    //"Refresh: 1\r\n"         // refresh the page automatically every n sec
    "\r\n"
    "<!DOCTYPE HTML>\r\n"
    "<html>\r\n"
    "<head>\r\n"
      "<meta charset=\"UTF-8\">\r\n"
      "<title>Cloud Printer: ChatGPT</title>\r\n"
      "<link rel=\"icon\" href=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" type=\"image/x-icon\">\r\n"
    "</head>\r\n"
    "<body>\r\n"
    "<img alt=\"SEEED\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/logo.png\" height=\"100\" width=\"410\">\r\n"
    "<p style=\"text-align:center;\">\r\n"
    "<img alt=\"ChatGPT\" src=\"https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/chatgpt-logo.png\" height=\"200\" width=\"200\">\r\n"
    "<h1 align=\"center\">Cloud Printer</h1>\r\n" 
    "<h1 align=\"center\">OpenAI ChatGPT</h1>\r\n" 
    "<div style=\"text-align:center;vertical-align:middle;\">"
    "<form action=\"/\" method=\"post\">"
    "<input type=\"text\" placeholder=\"Please enter your question\" size=\"35\" name=\"chatgpttext\" required=\"required\"/>\r\n"
    "<input type=\"submit\" value=\"Submit\" style=\"height:30px; width:80px;\"/>"
    "</form>"
    "</div>"
    "</p>\r\n"
    "</body>\r\n"
    "<html>\r\n"
};
```

Este código nos fornece o efeito de página mostrado na figura abaixo.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/7.png"/></div>

:::tip
A sintaxe HTML para páginas web está além do escopo deste tutorial. Você pode aprender a usar HTML por conta própria ou, alternativamente, podemos usar ferramentas de geração existentes para fazer o trabalho de geração de código. Recomendamos usar o [HTML Generator](https://webcode.tools/generators/html).
Vale notar que em programas C, "\\" e """ são caracteres especiais, e se você quiser manter a funcionalidade desses caracteres especiais no seu programa, você precisa adicionar uma barra invertida antes deles.
:::

Client1 refere-se ao cliente Socket após o servidor web ser estabelecido; o código a seguir é o fluxo de processamento do servidor web.

```c
client1 = server.available();
if (client1){
    Serial.println("New Client.");           // print a message out the serial port
    // an http request ends with a blank line
    boolean currentLineIsBlank = true;    
    while (client1.connected()){
        if (client1.available()){  // Check if the client is connected
            char c = client1.read();
            json_String += c;
            if (c == '\n' && currentLineIsBlank) {                                 
                dataStr = json_String.substring(0, 4);
                Serial.println(dataStr);
                if(dataStr == "GET "){
                    client1.print(html_page);  //Send the response body to the client
                }         
                else if(dataStr == "POST"){
                    json_String = "";
                    while(client1.available()){
                        json_String += (char)client1.read();
                    }
                    Serial.println(json_String); 
                    dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
                    chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
                    client1.print(html_page);        
                    // close the connection:
                    delay(10);
                    client1.stop();       
                }
                json_String = "";
                break;
            }
            if (c == '\n') {
                // you're starting a new line
                currentLineIsBlank = true;
            }
            else if (c != '\r') {
                // you've gotten a character on the current line
                currentLineIsBlank = false;
            }
        }
    }
}
```

No programa de exemplo acima, precisamos usar `server.begin()` para iniciar o servidor IoT. A instrução precisa ser colocada na função `setup`.

```c
void setup()
{
    Serial.begin(115200);

    // Set WiFi to station mode and disconnect from an AP if it was previously connected
    WiFi.mode(WIFI_STA);
    WiFi.disconnect();
    while(!Serial);

    Serial.println("WiFi Setup done!");
    WiFiConnect();

    // Start the TCP server server
    server.begin();
}
```

Assim que o programa acima for executado e o endereço IP do XIAO ESP32C3 for inserido no navegador (desde que o seu host também esteja na mesma LAN que o XIAO ESP32C3), a etapa GET do WiFiClient começará a ser executada. Neste ponto, com a ajuda do método print do lado do cliente, enviamos o código HTML da página.

```c
if(dataStr == "GET "){
    client1.print(html_page);
}
```

Além disso, projetamos a caixa de entrada para inserção de perguntas na página; a página web obterá o status do botão e armazenará a pergunta inserida na variável string `chatgpt_Q` após o usuário inserir o conteúdo e clicar no botão **Submit**.

```c
json_String = "";
while(client1.available()){
    json_String += (char)client1.read();
}
Serial.println(json_String); 
dataStart = json_String.indexOf("chatgpttext=") + strlen("chatgpttext=");
chatgpt_Q = json_String.substring(dataStart, json_String.length());                    
client1.print(html_page);        
// close the connection:
delay(10);
client1.stop();      
```

O efeito de execução é mostrado abaixo.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/15.png"/></div>

## Enviar perguntas pela página web integrada

Na página da etapa acima, há uma caixa de entrada. A caixa de entrada é onde precisamos que o usuário insira a pergunta que deseja fazer. Tudo o que precisamos fazer é obter essa pergunta e enviá-la por meio da solicitação de API fornecida pela OpenAI.

**Etapa 1**. Crie uma conta na OpenAI.

Você pode acessar o endereço de registro da OpenAI clicando [aqui](https://beta.openai.com/signup). Se você já se registrou anteriormente, pode pular esta etapa.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/8.png"/></div>

**Etapa 2**. Obtenha a API da OpenAI.

Faça login no [site da OpenAI](https://platform.openai.com/overview), clique no avatar da sua conta no canto superior direito e selecione **View API keys**.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/9.png"/></div>

Na nova página pop-up, selecione **+Create new secret key**, copie sua chave e salve-a.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/10.png"/></div>

Enquanto isso, podemos criar variáveis string em nosso programa e copiar esta chave aqui.

```c
char chatgpt_token[] = "sk**********Rj9DYiXLJJH";
```

:::tip
A partir de 15 de fevereiro de 2023, a OpenAI está oferecendo **$18** em créditos gratuitos para cada novo usuário. As tarifas detalhadas podem ser encontradas na [documentação](https://openai.com/api/pricing/) da OpenAI.
<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/11.png"/></div>
:::

**Etapa 3**. Escreva o programa de acordo com as requisições HTTP da OpenAI.

A OpenAI fornece [instruções de uso de API](https://platform.openai.com/docs/api-reference/making-requests) muito detalhadas para que os usuários possam usar sua própria chave de API para chamar o ChatGPT.

De acordo com a documentação do ChatGPT, o formato que precisamos para enviar a requisição é o seguinte:

```shell
curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{"model": "gpt3.5-turbo-instruct", "prompt": "Say this is a test", "temperature": 0, "max_tokens": 7}'
```

O Protocolo de Transferência de Hipertexto (HTTP) funciona como um protocolo de requisição-resposta entre um cliente e um servidor.
**GET** é usado para solicitar dados de um recurso especificado. É frequentemente usado para obter valores de APIs.
**POST** é usado para enviar dados a um servidor para criar/atualizar um recurso.
O ESP32 pode fazer requisições HTTP POST usando três tipos diferentes de corpo de requisição: URL codificado, objeto JSON ou texto simples. Estes são os métodos mais comuns e devem se integrar com a maioria das APIs ou serviços web.

As informações acima são muito importantes e fornecem a base teórica para escrever programas HTTP POST. No início, começamos importando a biblioteca HTTPClient.

```c
#include <HTTPClient.h>
```

Você também precisa digitar o nome de domínio da OpenAI, para que o ESP publique a pergunta para o ChatGPT. E não se esqueça da chave de API da OpenAI.

```c
HTTPClient https;

const char* chatgpt_token = "YOUR_API_KEY";
char chatgpt_server[] = "https://api.openai.com/v1/completions";
```

Precisamos fazer uma requisição HTTP POST usando objeto JSON.

```c
if (https.begin(chatgpt_server)) {  // HTTPS
    https.addHeader("Content-Type", "application/json"); 
    String token_key = String("Bearer ") + chatgpt_token;
    https.addHeader("Authorization", token_key);
    String payload = String("{\"model\": \"gpt-3.5-turbo-instruct\", \"prompt\": \"") + chatgpt_Q + String("\", \"temperature\": 0, \"max_tokens\": 100}"); //Instead of TEXT as Payload, can be JSON as Paylaod
    httpCode = https.POST(payload);   // start connection and send HTTP header
    payload = "";
}
else {
    Serial.println("[HTTPS] Unable to connect");
    delay(1000);
}
```

No programa, enviamos o `payload` ao servidor via método `POST()`. `chatgpt_Q` é o conteúdo da pergunta que queremos enviar ao ChatGPT, que estará disponível na página Obter Pergunta.

Se você tiver interesse em mais recursos do HTTPClient do ESP32C3, recomendamos a leitura de [ESP32 HTTP GET and HTTP POST with Arduino IDE](https://randomnerdtutorials.com/esp32-http-get-post-arduino/).

## Obter respostas do ChatGPT

O próximo passo é o último passo de todo o tutorial: como obtemos a resposta do ChatGPT e a registramos.

Vamos continuar lendo a [documentação da API](https://platform.openai.com/docs/api-reference/making-requests) fornecida pela OpenAI para entender como é a estrutura do conteúdo da mensagem retornada pelo ChatGPT. Isso nos permitirá escrever programas para analisar o conteúdo de que precisamos.

```shell
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "gpt-3.5-turbo-instruct",
  "system_fingerprint": "fp_44709d6fcb",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}
```

A partir da documentação de referência fornecida pela OpenAI, sabemos que a localização da resposta à pergunta na mensagem retornada pela interface está em `{"choices": [{"text": "\n\nxxxxxxx",}]}`.

Portanto, agora podemos ter certeza de que a "Resposta" que precisamos deve começar com **\n\n** e terminar com **,**. Então, no programa, podemos recuperar a posição onde o texto começa e termina usando o método `indexOf()`, e armazenar o conteúdo da resposta retornada.

```c
dataStart = payload.indexOf("\\n\\n") + strlen("\\n\\n");
dataEnd = payload.indexOf("\",", dataStart); 
chatgpt_A = payload.substring(dataStart, dataEnd);
```

Em resumo, podemos usar o método switch com o estado atual do programa para determinar qual etapa do programa devemos executar.

```c
typedef enum 
{
  do_webserver_index,
  send_chatgpt_request,
  get_chatgpt_list,
}STATE_;

STATE_ currentState;

switch(currentState){
    case do_webserver_index:
        ...
    case send_chatgpt_request:
        ...
    case get_chatgpt_list:
        ...
}
```

Neste ponto, toda a lógica do programa está estruturada. O código completo do programa pode ser obtido clicando na imagem abaixo. Por favor, não se apresse em fazer o upload do programa; você precisa alterar o **ssid, password e chatgpt_token** do programa para os seus próprios.

<p style={{textAlign: 'center'}}><a href="https://github.com/limengdu/xiaoesp32c3-chatgpt" target="_blank"><div align="center"><img width ="300" src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></div></a></p>

Então, sinta-se à vontade para usá-lo!

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/16.gif"/></div>

## O Que Vem a Seguir?

Neste tutorial, fornecemos o método básico de chamada da interface OpenAI usando ChatGPT para uma placa de desenvolvimento embarcado como o Arduino - XIAO ESP32C3. A seguir, você pode deixar sua criatividade fluir!

Por exemplo, você poderia considerar adicionar uma tela ou teclado para torná-lo um dispositivo de exibição independente que funciona apenas para você? Venha ver a criatividade de Gavin, ele criou um dispositivo de vigilância particularmente interessante! Também agradecemos especialmente a ele por fornecer as etapas e ideias necessárias para este tutorial.

- [Gavin - ChatGPT Recorder & Monitor](https://www.hackster.io/gavinchiong/chatgpt-recorder-monitor-601ef6)

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/xiaoesp32c3-chatgpt/14.jpg"/></div>

Ou vá um passo além e adicione um módulo de reconhecimento de voz para se livrar do teclado e do mouse a partir de agora e crie seu próprio assistente de voz, etc. Em suma, adoraríamos ver você compartilhar seu trabalho com um ótimo produto como o XIAO ESP32C3!

## Solução de Problemas

### P1: Existe alguma limitação geográfica ou de rede para obter a resposta chamando a API OpenAI usando o XIAO ESP32C3?

> R: A partir dos testes de 17 de fevereiro de 2023, autores na China continental e usando a rede da China também conseguem obter respostas do ChatGPT de forma muito tranquila, sem restrições por enquanto. Desde que possamos obter a chave da API OpenAI, a chamada será concluída sem problemas.

### P2: Por que estou recebendo erros de Time Out?

>R: Isso pode ocorrer porque o ChatGPT demora muito para responder a uma mensagem, o que pode fazer com que o programa pense erroneamente que ele não está respondendo.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
