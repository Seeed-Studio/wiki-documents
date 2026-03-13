---
description: Wifi Shield V2.0
title: Wifi Shield V2.0
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wifi_Shield_V2.0
sku: 113030008
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wifi_Shield_V2.0/
---

<!-- ---
name: Wifi Shield V2.0
category: Shield
bzurl: https://seeedstudio.com/Wifi-Shield-V2.0-p-2505.html
oldwikiname: Wifi_Shield_V2.0
prodimagename: Wifi_Shield_v2.jpg
bzprodimageurl: https://statics3.seeedstudio.com/images/product/113030008 1.jpg
surveyurl: https://www.research.net/r/Wifi_Shield_V2_0
sku: 113030008
--- -->

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_Shield_v2.jpg)

Este shield WiFi possui o módulo TCP/IP RN171 para permitir que o seu Arduino/Seeeduino se conecte a redes sem fio até 802.11b/g.

O protocolo de comunicação padrão do shield com o Arduino é UART/Serial, e você pode selecionar quais pinos digitais (D0 a D7) usar para RX e TX com duas fileiras de jumpers que incorporamos. O shield também possui dois conectores Grove on‑board para I2C e Serial para permitir que o shield seja usado com qualquer um dos nossos dispositivos Grove.

Uma antena on‑board permite que o shield cubra uma faixa mais ampla e transmita sinais mais fortes. O módulo RN171 suporta os protocolos de comunicação TCP, UDP, FTP e HTTP para atender às necessidades da maioria dos projetos de redes sem fio e Internet das Coisas (IoT), por exemplo, redes de casas inteligentes, controle de robôs, estações meteorológicas pessoais.

O shield é muito bem documentado com nossos exemplos abaixo e seu [manual do usuário](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf).

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/Wifi-Shield-V20-p-2505.html)

Rastreador de Versão
---------------

| Parâmetro          | Wifi Shield V1.0                                                        | Wifi Shield V1.1(v1.2)                                                 | Wifi Shield V2.0                                                                          |
|--------------------|-------------------------------------------------------------------------|------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| Tensão             | +3.5V~+5V                                                               | +3.5V~+5V                                                              | +3.5V~+5V                                                                                 |
| Shield Padrão      | Sim                                                                     | Sim                                                                    | Sim                                                                                       |
| Modo de comunicação | Porta serial                                                            | Porta serial                                                           | Porta serial                                                                              |
| Shield Padrão      | Não                                                                     | Sim                                                                    | Sim                                                                                       |
| Tipo de antena     | antena de mastro                                                        | antena PCB                                                             | <font color="Red">antena onboard</font>                                                  |
| Arquivo de biblioteca       | [Wifi Shield Library V1.0](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WifiShield.zip) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) | [New Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield) *a mesma que v1.2* |

Especificações
--------------

| Parâmetro                        | Valor                                                                |
|----------------------------------|----------------------------------------------------------------------|
| Tensão de operação               | 3.3~5.5 V                                                            |
| Placa compatível diretamente     | Arduino Uno/Seeeduino                                                |
| Corrente                         | 25~400mA                                                             |
| Potência de transmissão          | 0-10 dBm                                                             |
| Frequência                       | 2402~2480 MHz                                                        |
| Canal                            | 0~13                                                                 |
| Taxa de rede                     | 1-11 Mbps para 802.11b/6-54Mbps para 802.11g                         |
| Dimensão                         | 60X56X19 mm                                                          |
| Peso líquido                     | 24±1 g                                                               |
| Autenticação WiFi segura         | WEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)                              |
| Aplicativos de rede integrados   | Cliente DHCP, cliente DNS, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP |
| Certificação                     | RN171: FCC, CE                                                      |

Visão geral do hardware
-----------------

O shield WiFi é compatível com qualquer placa de desenvolvimento Arduino/Seeeduino, pois requer apenas dois pinos digitais de sua escolha entre D0‑D7 para comunicação UART/serial. Para instalar, simplesmente encaixe o shield sobre a placa Arduino/Seeeduino.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v2_breakout.png)

1. **Conexões de Interface Serial Periférica (SPI) (MOSI, SCK, MISO):** Esses pinos não estão conectados a nenhum dos pinos do Arduino, são independentes e o nível lógico de saída/entrada deles é 3,3 V. Eles podem ser usados para se comunicar com o Arduino via SPI, mas será necessário um conversor de nível lógico de 3,3 V entre esses pinos e os do Arduino. A taxa de dados no modo SPI pode chegar a até 2 Mbps.

    **RES_Wifi:** O Wifi shield possui um "Botão de Reset" on‑board para o módulo RN‑171, você também pode resetar o RN‑171 via software enviando o comando de reset. Além disso, se você quiser conectar este pino ao pino digital 6 do Arduino, basta soldar o pad rotulado "P5" no shield.

2. **RN171:** Um módulo sem fio de consumo de energia super baixo com pilha TCP/IP integrada.
3. **Antena:** Conector I.PEX.
4. **Seção de breakout do RN171:** O módulo RN171 possui seus próprios pinos de entrada analógica e GPIO, aos quais o shield fornece acesso por meio desta seção de breakout. Os pinos GPIO (IO3, IO7, IO8 e IO9) suportam 3,3 V, enquanto os pinos de entrada analógica (S_0 e S_1) podem ler 0‑400 mV (não exceda 1,2 V). O RN171 pode ser configurado para usar esses pinos por software ou eles podem ser conectados a outros pinos para usar outras funções do RN171, como o modo adhoc. A tensão de VCC depende da alimentação do shield WiFi.
5. **Área de seleção UART/Serial:** Duas fileiras de jumpers para permitir que você selecione quais pinos RX e TX deseja usar para se comunicar com o Arduino.
6. **Conectores Grove:** Grove analógico I2C (se estiver usando Arduino UNO ou Seeeduino) para os pinos A4&A5 e Grove serial digital para D8&D9. A tensão VCC depende da fonte de alimentação da placa.

### Pinos usados / Compatibilidade do shield

O shield WiFi usa quaisquer dois pinos digitais de sua escolha entre D0 e D7 para se comunicar com o módulo WiFi RN171, entretanto tenha em mente que D0 e D1 são usados pelo Arduino para programação e comunicação serial e usá‑los pode interferir nessas duas funções.

Nos códigos de exemplo desta página usamos D2 e D3 como RX e TX para o shield. Nesse caso, os jumpers devem ser conectados como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_pinout.png)
*D2 selecionado para WIFI_TX, D3 selecionado para WIFI_RX*

### Módulo WiFi RN171

O RN‑171 é um módulo de rede sem fio TCP/IP completo e autônomo. Devido ao seu pequeno formato e consumo de energia extremamente baixo, o RN‑171 é perfeito para aplicações móveis sem fio. Ele incorpora um rádio de 2,4 GHz, processador SPARC de 32 bits, pilha TCP/IP, relógio de tempo real, acelerador de criptografia, gerenciamento de energia e interfaces para sensores analógicos.

Na configuração mais simples, o hardware requer apenas quatro conexões (PWR, TX, RX e GND) para criar uma conexão de dados WiFi sem fio. Além disso, as entradas de sensor analógico do RN171 podem ser usadas como pinos de entrada analógica, sua faixa é 0‑400 mV (não exceda 1,2 V CC).

**Alimentação:** A tensão de operação do módulo RN‑171 é tipicamente 3,3 VCC, portanto um regulador de tensão e um tradutor de nível lógico são projetados no shield WiFi. O regulador LD1117 no shield converte para 3,3 VCC, que alimenta o módulo RN171. No entanto, devido ao circuito de julgamento automático da fonte de alimentação, o RN‑171 pode ser alimentado tanto pelo pino 3V3 quanto pelo pino 5V. Mas a alimentação será de 5 V se forem fornecidos 3,3 V e 5 V para a placa. Se estiver usando com uma placa Arduino/Seeeduino, simplesmente encaixe o shield WiFi na placa.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_communicate.png)
*Diagrama de como o módulo RN171 é interligado ao Arduino*

**GPIO_6 :** O pino GPIO6 do módulo WiFi RN171 está por padrão conectado apenas ao LED rotulado D5 no shield WiFi. Este LED é usado para mostrar o status da conexão com o Ponto de Acesso (AP). Contudo, se você quiser conectar o GPIO6 ao pino digital 5 do Arduino, basta soldar o pad rotulado "P6" no shield WiFi.

### Indicadores de status LED

<table>
  <tbody>
    <tr>
      <td>Label</td>
      <td>Descrição</td>
      <td>Status</td>
      <td>Conexão de hardware</td>
    </tr>
    <tr>
      <td>D5</td>
      <td>LED verde. Indica o status de associação.</td>
      <td><strong>OFF</strong>: significa que o módulo não está associado a uma rede.<br/><strong>Solid ON</strong>: indica que ele está associado e o acesso à Internet está OK</td>
      <td>Conectado ao GPIO6 do módulo RN171</td>
    </tr>
    <tr>
      <td>D1</td>
      <td>LED vermelho. Indica o status da conexão TCP/IP.</td>
      <td><strong>Aceso continuamente</strong>: conectado via TCP.<br/><strong>Alternância rápida (2 vezes/segundo)</strong>: Sem endereço IP ou o módulo está no modo de comando.<br/><strong>Alternância lenta (uma vez/segundo)</strong>: Endereço IP está OK.</td>
      <td>Conectado ao GPIO4 do módulo RN171</td>
    </tr>
    <tr>
      <td>RST</td>
      <td>LED vermelho. Status de reset do módulo WiFi.</td>
      <td><strong>Aceso continuamente</strong>: O botão de reset (WIFI_RST) está sendo pressionado.</td>
      <td>Conectado ao Reset do módulo RN171.</td>
    </tr>
    <tr>
      <td>PWR</td>
      <td>LED verde. Indica o status de energização do módulo WiFi.</td>
      <td><strong>Aceso continuamente</strong>: O módulo/shield está energizado.</td>
      <td>Conectado à saída de 3,3 V do regulador de tensão LD1117.</td>
    </tr>
  </tbody>
</table>

Biblioteca WiFi
------------

Criamos uma biblioteca para ajudar você a interagir com o shield; nesta seção vamos mostrar como configurar a biblioteca e apresentar algumas das funções.

### Configuração

1. *Baixe o [código da biblioteca como um arquivo zip](https://github.com/Seeed-Studio/WiFi_Shield) na página do Wifi Shield no GitHub.*
2. *Descompacte o arquivo baixado na pasta …/arduino/libraries/.*
3. *Renomeie a pasta descompactada para "WifiShield"*
4. *Inicie a IDE do Arduino (ou reinicie se ela já estiver aberta).*

### Funções

Estas são as funções mais importantes/úteis da biblioteca; convidamos você a olhar os arquivos .h para ver todas as funções disponíveis.

#### join()

- **Descrição:**
  - Usada para se conectar a um ponto de acesso WiFi
- **Sintaxe:**
  - join(const char *ssid, const char*phrase, int auth)
- **Parâmetros:**
  - **ssid:** O nome do ponto de acesso ao qual você quer que o shield se conecte
  - **phrase:** A senha/frase do ponto de acesso ao qual você quer que o shield se conecte
  - **auth:** O tipo de autenticação do ponto de acesso ao qual você quer que o shield se conecte. Pode ser uma das seguintes constantes:
    - WIFLY_AUTH_OPEN
    - WIFLY_AUTH_WEP
    - WIFLY_AUTH_WPA1
    - WIFLY_AUTH_WPA1_2
    - WIFLY_AUTH_WPA2_PSK
    - WIFLY_AUTH_ADHOC
- **Retorno:**
  - **boolean:** true se a conexão com o ponto de acesso foi bem-sucedida, false caso contrário.
- **Exemplo:**

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

SoftwareSerial uart(2, 3); // create a serial connection to the WiFi shield TX and RX pins.
WiFly wifly(&uart); // create a WiFly library object using the serial connection to the WiFi shield we created above.

void setup()
{
    uart.begin(9600); // start the serial connection to the shield
    Serial.begin(9600); // start the Arduino serial monitor window connection
    wifly.reset(); // reset the shield
    while(wifly.join("mySSID","mySSIDpassword",WIFLY_AUTH_WPA2_PSK) == false)
    {
        Serial.println("Failed to connect to accesspoint. Will try again.");
    }
    Serial.println("Connected to access point!");
}

void loop()
{

}
```

:::tip
Os exemplos são baseados no Arduino UNO e usamos D2/D3 como pinos de SoftwareSerial. Se você estiver usando um Arduino Mega, D2 não está mais disponível. Para mais detalhes consulte [Arduino Software Serial](https://www.arduino.cc/en/Tutorial/SoftwareSerialExample)
Aqui está um exemplo.
:::

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/connect_mega.jpg)

Quanto ao código, você também precisa fazer algumas alterações:

```c
SoftwareSerial uart(10, 3); // create a serial connection to the WiFi shield TX and RX pins.
```

#### receive()

- **Descrição:**
  - Pode ser usada para ler dados do shield, uma alternativa para a função read() do Arduino.
- **Sintaxe:**
  - receive(uint8_t *buf, int len, int timeout)
- **Parâmetros:**
  - **buf:** Um array buffer onde os bytes lidos do shield são armazenados.
  - **len:** O comprimento/tamanho do array buffer
  - **timeout:** Um valor de tempo limite para saber quando parar de tentar ler.
- **Retorno:**
  - **int:** O número de bytes lidos do shield.
- **Exemplo:**

```c
char c;
while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {
    Serial.print((char)c);
}
```

Veja o sketch File->Examples->WiFi_Shield->wifly_test para um exemplo completo.

#### sendCommand()

- **Descrição:**
  - Algumas das nossas funções (por exemplo, join(), reboot(), save()) atuam como wrappers para os comandos de texto listados no manual do usuário do módulo RN171. A função sendCommand() permite que você crie sua própria função wrapper caso as nossas não atendam às suas necessidades.
- **Sintaxe:**
  - sendCommand(const char *cmd, const char*ack, int timeout)
- **Parâmetros:**
  - **cmd:** Qualquer comando do manual do usuário do RN-171.
  - **ack:** A string de retorno esperada do comando
  - **timeout:** O tempo permitido antes de considerar a saída como uma requisição/resposta ruim
- **Retorno:**
  - **boolean:** true se o WiFi shield respondeu com a string ack, false caso contrário.

- **Exemplo:**

```c
// our join() function is wrapper for the join command, as seen below.
//The string "Associated" is what the user manual says the RN171 will return on success.
if(sendCommand("join\r", "Associated",DEFAULT_WAIT_RESPONSE_TIME*10))
{
    // joined
}else{
    // not able to join
}
```

Veja o sketch File->Examples->WiFi_Shield->wifly_test para um exemplo completo.

Exemplos/Aplicações do WiFi Shield
---------------------------------

### Exemplo 1: Enviar Comandos para o WiFi Shield e Receber Resposta pela Janela do Monitor Serial do Arduino

O módulo RN-171 do WiFi shield é configurado enviando a ele os comandos encontrados em [seu datasheet](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf). Você pode escrever um sketch para enviar os comandos automaticamente, mas este é um ótimo exemplo pelo qual recomendamos que você passe porque ele ensinará exatamente como o WiFi shield e o RN-171 funcionam.

Para continuar, siga os passos abaixo; também criamos um vídeo caso você prefira assisti-lo

[Vídeo - Primeiros Passos com o WiFi Shield do Seeeduino.](https://www.youtube.com/watch?v=8dCrAaN16lE)

**Passo 1: Configuração dos Jumpers do WiFi Shield**

Posicione os jumpers no WiFi shield de forma que o pino digital 2 (D2) seja selecionado para WIFI_TX e o pino digital 3 (D3) seja selecionado para WIFI_RX, como mostrado na foto abaixo. Estes são os pinos que usaremos para enviar e receber informações do RN-171.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi_shield_v1.1_front.png)

*Pino D2 para TX e D3 para RX*

**Passo 2: Software/Código**

No sketch abaixo criamos um objeto UART para nos permitir enviar e receber dados do RN-171/WiFi Shield. Em seguida usamos esse objeto em conjunto com a biblioteca WiFly para enviar dados ao shield. O objeto Serial do Arduino é usado para imprimir os dados que recebemos do shield e para receber os comandos que queremos enviar ao shield por meio do objeto WiFly/UART.

Envie o código a seguir para sua placa Arduino:

```c
#include <Arduino.h>
#include <SoftwareSerial.h>
#include "WiFly.h"

// set up a new serial port.
SoftwareSerial uart(2, 3); // create a serial connection to the WiFi shield TX and RX pins.
WiFly wifly(&uart); // create a WiFly library object using the serial connection to the WiFi shield we created above.

void setup()
{
    uart.begin(9600); // start the serial connection to the shield
    Serial.begin(9600); // start the Arduino serial monitor window connection
    delay(3000); // wait 3 second to allow the serial/uart object to start
}

void loop()
{
    while (wifly.available())  // if there is data available from the shield
    {
        Serial.write(wifly.read()); // display the data in the Serial monitor window.
    }
    while (Serial.available()) // if we typed a command
    {
        wifly.write(Serial.read()); // send the command to the WiFi shield.
    }
}
```

**Passo 3: Entrando no Modo de Comando**

O módulo WiFly RN-171 no WiFi shield pode operar em dois modos: dados e comando. Quando está no modo de dados, o shield é capaz de receber e iniciar conexões. Quando está no modo de comando, podemos configurar o módulo usando os comandos listados em seu datasheet.

Para entrar no modo de comando, siga estes passos:

1. Abra o Monitor Serial do Arduino.
2. Defina o monitor serial para "No line ending", taxa de baud de 9600.
3. Digite "$$$" no Monitor Serial do Arduino e pressione Enter.
4. O módulo responderá com as letras "CMD", indicando que entrou no modo de comando.

Vamos em frente e testar alguns comandos, faça o seguinte:

1. Na janela do Monitor Serial do Arduino, selecione "Carriage return" e uma taxa de baud de 9600.
2. Agora digite cada um dos comandos da tabela abaixo no Monitor Serial do Arduino e pressione Enter.
3. O módulo fornecerá uma resposta, conforme descrito na tabela, para cada comando.

| Comandos | Descrição                                                                                                                                                                                                                 |
|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| scan     | Este comando realiza um scan ativo de sondagem de pontos de acesso em todos os 13 canais. Quando você usa este comando, o módulo retorna o endereço MAC, intensidade do sinal, nome SSID e modo de segurança dos pontos de acesso encontrados. |
| get ip   | Este comando exibe as configurações de endereço IP e número de porta                                                                                                                                                               |

Para uma lista completa de comandos de configuração, consulte o [Guia de Referência](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) do RN-171 a partir da página 11.

### Exemplo 2: Conectar a um Ponto de Acesso / Roteador de Internet

Neste exemplo, mostraremos como conectar o WiFi shield a um ponto de acesso (seu roteador de internet) com e sem digitar manualmente os comandos necessários:

#### Conectando Digitando Comandos

Esta seção ensinará como conectar o shield WiFi a um ponto de acesso usando comandos do datasheet do RN-171; ao passar por esta seção, você saberá exatamente o que está acontecendo em segundo plano quando usar nossas bibliotecas WiFi para Arduino.

Faça o seguinte:

1. Envie o código do Exemplo Um para sua placa Arduino
2. **Entre no modo de comando:**
    1. Defina o monitor serial como "No line ending", taxa de baud em 9600.
    2. Digite *$$$* no Monitor Serial do Arduino e pressione Enter.

3. Defina o monitor serial como "Carriage return".
4. **Verifique os pontos de acesso disponíveis:**
    1. Digite *scan* e pressione Enter. A janela do monitor serial do Arduino exibirá uma lista de valores separados por vírgula para cada ponto de acesso que o shield WiFi encontrar. Da esquerda para a direita, o terceiro valor é o modo de segurança, o último valor é o SSID. Este exemplo mostra um modo de segurança 4 com um SSID de nome MySSID: 01,01,-88,**04**,1104,1c,00,45:56:78:be:93:1f,**MySSID**

5. Na lista de pontos de acesso encontrados, localize aquele que corresponde ao seu roteador de internet e anote o modo de segurança e o SSID, pois precisaremos desses dois valores para conectar a ele.
6. **Defina o modo de segurança no shield:**
    1. Digite *set wlan auth m*. Substitua *m* pelo número do modo de segurança (neste exemplo seria 4) do ponto de acesso ao qual você deseja se conectar.
    2. Os modos de segurança suportados pelo shield WiFi estão listados na Figura 1 abaixo.

7. **Defina a frase do ponto de acesso**
    1. Digite *set wlan phrase myPhrase*. Substitua *myPhrase* pela senha/chave de segurança do seu ponto de acesso.

    :::note
    Se o tipo de segurança do seu ponto de acesso for WEP, use *key* em vez de *phrase* no comando acima.
    :::

    2. A frase do ponto de acesso (roteador de internet) é a senha que você usa para se conectar a ele a partir do seu PC. No Windows você pode encontrá-la conforme mostrado na imagem animada abaixo:
    ![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/How_to_find_network_security_key_password.gif)
    Como encontrar a chave/senha de segurança de uma rede

8. **Conecte-se ao ponto de acesso**
    1. Agora que definimos o tipo de segurança e a frase do ponto de acesso, podemos nos conectar a ele.
    2. Digite *join MySSID*. Substitua MySSID pelo nome de broadcast do seu ponto de acesso.
    3. A palavra "Associated!" será exibida na janela do monitor serial do Arduino se a conexão for bem-sucedida.

Uma descrição dos comandos inseridos nas etapas acima está disponível na tabela abaixo. Uma descrição mais detalhada de cada comando pode ser encontrada no manual do usuário do RN171.

| Número | Comandos                  | Descrição                                                                                                                                                                                                                                                                          |
|--------|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1      | scan                      | Este comando realiza uma varredura ativa de sondagem de pontos de acesso em todos os 13 canais. Ao usar este comando, o módulo retorna o endereço MAC, a intensidade do sinal, o nome do SSID e o modo de segurança dos pontos de acesso que encontrar.                              |
| 2      | set wlan auth 4           | Encontre o valor que corresponde ao protocolo de segurança no seu ponto de acesso. Em seguida, diga ao WiFly qual protocolo de segurança usar; é o número mostrado na **Figura 1** que corresponde ao protocolo de segurança do ponto de acesso. Aqui escolhemos "4".               |
| 3      | set wlan phrase seeed-mkt | Informe ao shield WiFi sua frase secreta.                                                                                                                                                                                                                                           |
| 4      | join SEEED-MKT            | Diga ao shield WiFi para se conectar; "SEEED-MKT" é o nome do ponto de acesso que escolhemos para conectar. Após enviar o comando, o módulo deverá se conectar e imprimir informações sobre a conexão. (Se a conexão falhar, tente enviar o comando novamente até que funcione.)   |

| Valor | Modo de Autenticação                   |
|-------|----------------------------------------|
| 0     | Aberto (padrão)                        |
| 1     | WEP-128                                |
| 2     | WPA1                                   |
| 3     | WPA1 e WPA2-PSK mistos                 |
| 4     | WPA2-PSK                               |
| 5     | Não usado                              |
| 6     | Modo AD hoc (conecta em qualquer rede ad hoc) |
| 8     | WPE-64                                 |

*Figura 1*

#### Conectando Usando Nossas Bibliotecas WiFi

Agora que você sabe como se conectar a um ponto de acesso digitando cada comando, é hora de usar as bibliotecas e exemplos que fornecemos.

Para ver o código necessário para se conectar a um ponto de acesso, vá em "File -> Examples -> Wifi_Shield -> wifi_test". Altere o código para usar seu próprio SSID (nome do ponto de acesso) e KEY (senha do seu ponto de acesso) e então carregue o sketch para o seu Arduino IDE.

    #define SSID      " SEEED-MKT "
    #define KEY       " seeed-mkt "

Com o sketch carregado na sua placa Arduino, abra a janela do monitor serial. Se o shield conseguir se conectar ao ponto de acesso, uma mensagem "OK" será exibida junto com as informações de conexão resultantes do comando "get everything". Se o shield falhar ao se conectar ao ponto de acesso, uma mensagem "Failed" será exibida.

#### Configurando o Shield para Conectar na Inicialização

O shield pode ser configurado para se conectar na inicialização; você só precisa fazer isso uma vez:

1. Envie o comando "set wlan ssid mySSID", substituindo mySSID pelo seu SSID
2. Envie o comando "set wlan join 1".
3. Envie o comando "save".

Agora o shield se conectará ao ponto de acesso automaticamente na inicialização.

Uma descrição do que cada comando faz pode ser encontrada no datasheet do RN-171 e na tabela abaixo.

| Número | Comandos                   | Descrição                                                                           |
|--------|----------------------------|-------------------------------------------------------------------------------------|
| 1      | set wlan ssid | "ssid" é o nome do ponto de acesso ao qual você deseja se conectar automaticamente |
| 2      | set wlan join 1            | Isto diz ao módulo para tentar se conectar automaticamente ao SSID armazenado na memória. |
| 3      | save                       | Armazena/Salva essas configurações no arquivo de configuração do WiFi              |

#### Definindo um Endereço IP Estático

Para fazer com que o shield obtenha um endereço IP estático do ponto de acesso, uma vez conectado ao ponto de acesso, envie os seguintes comandos:

| Número | Comandos                       | Descrição                   |
|--------|--------------------------------|-----------------------------|
| 1      | set ip dhcp 0                  | Desativar DHCP.             |
| 2      | set ip address | Defina o endereço IP desejado. |

### Exemplo 3: Comunicando com a Rede ()

Este exemplo mostrará como um dispositivo, como seu PC e/ou telefone, pode se comunicar com o shield WiFi.

Siga estas etapas:

1. Configure o módulo com as etapas 1‑7 da seção do Exemplo 2 *Connecting By Typing Commands*
2. Defina a porta IP de escuta para "80" enviando o comando "set ip local 80"
3. Conecte/associe seu shield a um ponto de acesso conforme mostrado na etapa 8 da seção do Exemplo 2 *Connecting By Typing Commands*
4. Salve essas configurações enviando o comando "save"
5. Obtenha o endereço IP do seu shield com o comando "get ip". O endereço IP e a porta serão exibidos à direita de "IP=" na resposta (por exemplo, IP=192.168.0.10:80)
6. Abra seu navegador web, digite o endereço IP do seu shield na barra de URL do navegador e pressione Enter para acessá-lo.
7. A janela do monitor serial do seu Arduino exibirá uma resposta HTTP semelhante à mostrada abaixo. Estas são as informações que o navegador enviou ao shield para solicitar dados.

```
*OPEN*GET / HTTP/1.1
Host: 192.168.0.10
Connection: keep-alive
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36
Accept-Encoding: gzip, deflate, sdch
Accept-Language: en-US,en;q=0.8
```

O navegador agora está aguardando dados; o módulo WiFi pode enviar valores de sensores, servir páginas web ou quaisquer outros dados diretamente de volta ao navegador! Neste caso, o navegador está esperando uma página web. Se o módulo WiFi responder com uma página formatada em HTML, o navegador irá exibi-la. Os próximos exemplos ensinarão como fazer todas essas coisas divertidas.

### Exemplo 4: Usando o WiFi Shield como Servidor Web (Servindo Páginas Web a Partir do Shield)

Como você viu no Exemplo 3, um navegador de internet/web consegue se conectar ao shield WiFi. Uma vez que a conexão tenha sido estabelecida (quando o navegador envia sua requisição HTTP), o shield WiFi pode então enviar código HTML para o navegador exibir como uma página web. Neste exemplo você aprenderá o que é necessário para que o shield responda a um navegador web.

**Etapa Um: Código Arduino**

Envie o seguinte código para sua placa Arduino, substituindo "myssid" e "mypassword" pelos valores do seu ponto de acesso, respectivamente:

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "myssid"
#define KEY       "mypassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class

void setup()
{
    wiflyUart.begin(9600); // start wifi shield uart port
    Serial.begin(9600); // start the arduino serial port
    Serial.println("--------- WIFLY Webserver --------");

    // wait for initilization of wifly
    delay(1000);

    wifly.reset(); // reset the shield
    delay(1000);
    //set WiFly params

    wifly.sendCommand("set ip local 80\r"); // set the local comm port to 80
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // do not send a default string when a connection opens
    delay(100);

    wifly.sendCommand("set comm open *OPEN*\r"); // set the string that the wifi shield will output when a connection is opened
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");
    char c;

    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // print the response from the get ip command
        Serial.print((char)c);
    }

    Serial.println("Web server ready");

}

void loop()
{

    if(wifly.available())
    { // the wifi shield has data available
        if(wiflyUart.find("*OPEN*")) // see if the data available is from an open connection by looking for the *OPEN* string
        {
            Serial.println("New Browser Request!");
            delay(1000); // delay enough time for the browser to complete sending its HTTP request string
            // send HTTP header
            wiflyUart.println("HTTP/1.1 200 OK");
            wiflyUart.println("Content-Type: text/html; charset=UTF-8");
            wiflyUart.println("Content-Length: 244"); // length of HTML code
            wiflyUart.println("Connection: close");
            wiflyUart.println();

            // send webpage's HTML code
            wiflyUart.print("<html>");
            wiflyUart.print("<head>");
            wiflyUart.print("<title>My WiFI Shield Webpage</title>");
            wiflyUart.print("</head>");
            wiflyUart.print("<body>");
            wiflyUart.print("<h1>Hello World!</h1>");
            wiflyUart.print("<h3>This website is served from my WiFi module</h3>");
            wiflyUart.print("<a href=\"http://yahoo.com\">Yahoo!</a> <a href=\"http://google.com\">Google</a>");
            wiflyUart.print("<br/><button>My Button</button>");
            wiflyUart.print("</body>");
            wiflyUart.print("</html>");
        }
    }
}
```

**Passo Dois: Obter o Endereço IP do Shield**

Abra a janela do monitor serial e aguarde a mensagem "Web server ready" ser exibida. O monitor serial também exibirá o endereço IP do WiFi shield:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Saída de comunicação serial do programa Arduino. O endereço IP do shield está destacado.*

**Passo Três: Acessando a página da web**

Agora acesse esse endereço IP no seu navegador. A página da web abaixo deve ser exibida; ela contém um link para Yahoo! e Google e um botão que ainda não faz nada:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-page.png)

*Uma página da web simples com dois links e um botão servidos a partir do WiFi shield.*

Quando a página da web é acessada, a janela do monitor serial também exibirá a mensagem "New Browser Request!", como mostrado abaixo:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-simple-webserver-arduino-serial-window-response.png)

*A janela de comunicação serial do Arduino mostrando que detectou uma nova conexão/solicitação do navegador.*

<div class="admonition note">
<p class="admonition-title">Note</p>
No caso de alguns navegadores, como o Google Chrome, até mesmo digitar a URL na barra envia uma requisição de página; isso acontece porque esses navegadores tentam obter o título da página para a conveniência do usuário mesmo antes de ele/ela visitar a página.
</div>

### Exemplo 5: Controlando os Pinos Digitais do Arduino a Partir de uma Página Web (Alternando LEDs a Partir de uma Página Web)

Neste exemplo vamos criar uma página web com três botões para controlar três pinos digitais diferentes no Arduino.

Para este tutorial, siga os passos abaixo. Também criamos um vídeo em que explicamos o código com mais detalhes.

[Vídeo - Controle de Pinos Digitais do Arduino com WiFi Shield a partir de Página Web](https://www.youtube.com/watch?v=ek63patAl80)

**Passo 1: Hardware**

Conecte três LEDs e resistores aos pinos digitais 11, 12 e 13, como mostrado no esquema abaixo:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-schematic.png)

*Três LEDs e resistores de 1k conectados aos pinos 11, 12 e 13.*

**Passo 2: Sketch Arduino**

Envie o seguinte código para sua placa Arduino, mas substitua "mySSID" e "myPassword" pelo nome do SSID e senha do seu ponto de acesso:

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

int flag = 0;

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class
char ip[16];

void setup()
{
    pinMode(11,OUTPUT);
    digitalWrite(11,LOW);

    pinMode(12,OUTPUT);
    digitalWrite(12,LOW);

    pinMode(13,OUTPUT);
    digitalWrite(13,LOW);

    wiflyUart.begin(9600); // start wifi shield uart port

    Serial.begin(9600); // start the arduino serial port
    Serial.println("--------- WIFLY Webserver --------");

    // wait for initilization of wifly
    delay(1000);

    wifly.reset(); // reset the shield
    delay(1000);
    //set WiFly params

    wifly.sendCommand("set ip local 80\r"); // set the local comm port to 80
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // do not send a default string when a connection opens
    delay(100);

    wifly.sendCommand("set comm open *OPEN*\r"); // set the string that the wifi shield will output when a connection is opened
    delay(100);

    wifly.sendCommand("set ip protocol 2\r"); // set TCP protocol
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");

    wiflyUart.setTimeout(500);
    if(!wiflyUart.find("IP="))
    {
        Serial.println("can not get ip");
        while(1);;
    }else
    {
        Serial.print("IP:");
    }

    char c;
    int index = 0;
    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // print the response from the get ip command
        if(c == ':')
        {
            ip[index] = 0;
            break;
        }
        ip[index++] = c;
        Serial.print((char)c);
        ?
    }
    Serial.println();
    while (wifly.receive((uint8_t *)&c, 1, 300) > 0);;
    Serial.println("Web server ready");
}

void loop()
{
    if(wifly.available())       // the wifi shield has data available
    {

        if(wiflyUart.find("*OPEN*")) // see if the data available is from an open connection by looking for the *OPEN* string
        {
            Serial.println("New Browser Request!");
            delay(1000); // delay enough time for the browser to complete sending its HTTP request string

            if(wiflyUart.find("pin=")) // look for the string "pin=" in the http request, if it's there then we want to control the LED
            {
                Serial.println("LED Control");
                // the user wants to toggle the LEDs
                int pinNumber = (wiflyUart.read()-48); // get first number i.e. if the pin 13 then the 1st number is 1
                int secondNumber = (wiflyUart.read()-48);
                if(secondNumber>=0 && secondNumber<=9)
                {
                    pinNumber*=10;
                    pinNumber +=secondNumber; // get second number, i.e. if the pin number is 13 then the 2nd number is 3, then add to the first number
                }
                digitalWrite(pinNumber, !digitalRead(pinNumber)); // toggle pin
                // Build pinstate string. The Arduino replies to the browser with this string.
                String pinState = "Pin ";
                pinState+=pinNumber;
                pinState+=" is ";
                if(digitalRead(pinNumber)) // check if the pin is ON or OFF
                {
                    pinState+="ON"; // the pin is on
                }
                else
                {
                    pinState+="OFF";  // the pin is off
                }
                // build HTTP header Content-Length string.
                String contentLength="Content-Length: ";
                contentLength+=pinState.length(); // the value of the length is the lenght of the string the Arduino is replying to the browser with.
                // send HTTP header
                wiflyUart.println("HTTP/1.1 200 OK");
                wiflyUart.println("Content-Type: text/html; charset=UTF-8");
                wiflyUart.println(contentLength); // length of HTML code
                wiflyUart.println("Connection: close");
                wiflyUart.println();
                // send response
                wiflyUart.print(pinState);
            }
            else
            {
                // send HTTP header
                wiflyUart.println("HTTP/1.1 200 OK");
                wiflyUart.println("Content-Type: text/html; charset=UTF-8");
                wiflyUart.println("Content-Length: 540"); // length of HTML code
                wiflyUart.println("Connection: close");
                wiflyUart.println();

                // send webpage's HTML code
                wiflyUart.print("<html>");
                wiflyUart.print("<head>");
                wiflyUart.print("<title>WiFi Shield Webpage</title>");
                wiflyUart.print("</head>");
                wiflyUart.print("<body>");
                wiflyUart.print("<h1>LED Toggle Webpage</h1>");
                // In the <button> tags, the ID attribute is the value sent to the arduino via the "pin" GET parameter
                wiflyUart.print("<button id=\"11\" class=\"led\">Toggle Pin 11</button> "); // button for pin 11
                wiflyUart.print("<button id=\"12\" class=\"led\">Toggle Pin 12</button> "); // button for pin 12
                wiflyUart.print("<button id=\"13\" class=\"led\">Toggle Pin 13</button> "); // button for pin 13
                wiflyUart.print("<script src=\"http://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js\"></script>");
                wiflyUart.print("<script type=\"text/javascript\">");
                wiflyUart.print("$(document).ready(function(){");
                wiflyUart.print("$(\".led\").click(function(){");
                wiflyUart.print("var p = $(this).attr('id');"); // get id value (i.e. pin13, pin12, or pin11)
                // send HTTP GET request to the IP address with the parameter "pin" and value "p", then execute the function
                // IMPORTANT: dont' forget to replace the IP address and port with YOUR shield's IP address and port
                wiflyUart.print("$.get(\"http://");
                wiflyUart.print(ip);
                wiflyUart.print(":80/a\", {pin:p},function(data){alert(data)});");// execute get request. Upon return execute the "function" (display an alert with the "data" send back to the browser.
                wiflyUart.print("});");
                wiflyUart.print("});");
                wiflyUart.print("</script>");
                wiflyUart.print("</body>");
                wiflyUart.print("</html>");
            }
            Serial.println("Data sent to browser");
        }
    }
}
```

**Passo 3: Janela do Monitor Serial**

Abra a janela do monitor serial e aguarde a mensagem "Web server ready" ser exibida. O monitor serial também exibirá o endereço IP do WiFi shield:

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-window.png)

*Saída de comunicação serial do programa Arduino. O endereço IP do shield está destacado.*

**Passo 4: Visite a Página Web**

Visite o endereço IP em um navegador web. Uma página com três botões, como a mostrada abaixo, deve ser exibida. Clique nos botões para controlar os LEDs.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-webpage.png)

*Página da web de controle de LED servida a partir do WiFi shield.*

O Arduino também responderá ao navegador web com o estado do pino, e o navegador exibirá isso em uma janela de alerta.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-arduino-response.png)

*Caixa de diálogo de alerta exibindo o estado do pino 12. A string Pin12 is ON foi enviada a partir do Arduino.*

A janela do monitor serial também mostrará quando um navegador envia uma requisição para visitar a página ou controlar os pinos dos LEDs.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-led-control-serial-comm-response.png)

*Saída de comunicação serial do Arduino quando uma requisição HTTP é enviada ao shield.*

### Exemplo 6: WiFi Shield e App Android

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Androidapp-ethernet-shield-led-toggle.png)

*O aplicativo Android que você pode usar para controlar os pinos do Arduino através do WiFi ou Ethernet Shield.*

**Aplicativo Android**

Nós criamos um app Android que pode alternar os pinos digitais no Arduino através do WiFi shield. Para ver como o app funciona e aprender sobre o código, assista ao vídeo neste link:

[Vídeo - App Android do WiFi Shield para Controle de Pinos do Arduino](https://www.youtube.com/watch?v=0R709uGvkWM)

**Software**

Baixe o projeto/código-fonte do Android Studio a partir deste [link:](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFiShieldLEDControl.zip "WiFiShieldLEDControl.zip")

### Exemplo 7: Enviando Dados Para e Recuperando Dados de um Servidor Externo

O módulo RN-171 no WiFi shield tem a capacidade de atuar como um cliente HTML (basicamente um navegador web baseado em texto), o que significa que podemos usar o shield para enviar e receber dados de um servidor web. Neste exemplo você aprenderá a usar o shield com uma Interface de Programação de Aplicações (API) web que exibe os dados climáticos de qualquer cidade (isto é, temperatura, umidade, etc).

O nome da API que usaremos é [OpenWeatherMap](http://openweathermap.org/api). Quando você envia o nome de uma cidade e país para este site, ele retorna uma string JSON com informações climáticas. Se você quiser exibir o clima de Londres, Reino Unido, por exemplo, consulte o tutorial neste link [http://openweathermap.org/appid](http://openweathermap.org/appid). A partir de 9 de outubro de 2015, o site exige que os usuários se cadastrem para obter uma chave de API antes de acessar a API. Depois de obter a chave de API, você poderá visitar a seguinte URL [http://api.openweathermap.org/data/2.5/weather?q=London,uk](http://api.openweathermap.org/data/2.5/weather?q=London,uk), que retornará uma string JSON como a seguinte, onde os dados meteorológicos e outras informações estão embutidos.

```
{
    "coord":{"lon":-0.13,"lat":51.51},
    "sys":{"type":3,"id":60992,"message":0.0079,"country":"GB","sunrise":1421395087,"sunset":1421425352},
    "weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],
    "base":"cmc stations",
    "main":{
        "temp":277.25,"humidity":79,"pressure":998.4,
        "temp_min":277.25,"temp_max":277.25
    },
    "wind":{
    "speed":2,"gust":5,"deg":180},
    "rain":{"3h":0},"clouds":{"all":32},
    "dt":1421372140,"id":2643743,"name":"London","cod":200
}
```

**Passo 1: A URL**

Vamos em frente e recuperar a string JSON de clima para San Francisco, EUA. A URL que nosso WiFi shield precisa visitar é a seguinte (você pode testá-la em seu navegador web):

    http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco,US

**Passo 2: O Código Arduino**

A seção 13 do [manual do WiFly](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) ensina diferentes maneiras de se conectar a um servidor web, mas em todos os casos precisamos especificar o nome do servidor (ou endereço IP se o servidor não tiver um nome de domínio) e então os dados que desejamos enviar.

Os comandos que precisamos enviar para o WiFi shield para receber a string JSON do servidor OpenWeatherMap são os seguintes:

    set ip proto 18 //enable html client
    set dns name api.openweathermap.org //name of your webserver
    set ip address 0 // so WiFly will use DNS
    set ip remote 80 // standard webserver port
    set com remote 0 // turn off the REMOTE string so it does not interfere with the post
    open // to open the connection
    GET /data/2.5/weather?q=San%20Francisco,US \n\n // to send the data

Este é o código Arduino que enviará os comandos:

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class

void setup()
{
    wiflyUart.begin(9600); // start wifi shield uart port
    Serial.begin(9600); // start the arduino serial port
    Serial.println("--------- OpenWeatherMap API --------");

    // wait for initilization of wifly
    delay(3000);
    wifly.reset(); // reset the shield
    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("set ip proto 18\r"); //enable html client
    delay(100);

    wifly.sendCommand("set dns name api.openweathermap.org\r"); // name of the webserver we want to connect to
    delay(100);

    wifly.sendCommand("set ip address 0\r"); // so WiFly will use DNS
    delay(100);

    wifly.sendCommand("set ip remote 80\r"); /// standard webserver port
    delay(100);

    wifly.sendCommand("set com remote 0\r"); // turn off the REMOTE string so it does not interfere with the post
    delay(100);

    wifly.sendCommand("open\r"); // open connection
    delay(100);

    wiflyUart.print("GET /data/2.5/weather?q=San%20Francisco,US \n\n");
    delay(1000);

}

void loop()
{
    //As soon as the data  received from the Internet ,output the data through the UART Port .
    while (wifly.available())
    {
        Serial.write(wifly.read());
    }
}
```

**Passo 3: Resultado**

Abra a janela do monitor serial, você deverá conseguir ver a mesma string JSON que viu no navegador.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Open-weather-api-json-string.png)

*String JSON de clima exibida na janela do monitor serial do Arduino.*

### Exemplo 8: Comunicação TCP Com Terminal

Neste exemplo mostraremos como enviar informações do WiFi shield para um programa de terminal em PC. Faremos um console Arduino simples com menus que darão a você a opção de ver o estado dos pinos digitais do Arduino e alterná-los.

**Passo 1: Baixar um Terminal TCP**

[Baixe e instale o RealTerm](http://sourceforge.net/projects/realterm/files/Realterm/2.0.0.70/Realterm_2.0.0.70_setup.exe/download), um utilitário de terminal que nos permitirá conectar ao WiFi shield.

**Passo 2: Código Arduino**

Envie o código abaixo para sua placa Arduino substituindo "mySSID", "myPassword" e o código de autenticação pelas informações do seu próprio ponto de acesso:

```c
#include <SoftwareSerial.h>
#include "WiFly.h"

#define SSID      "mySSID"
#define KEY       "myPassword"
// check your access point's security mode, mine was WPA20-PSK
// if yours is different you'll need to change the AUTH constant, see the file WiFly.h for avalable security codes
#define AUTH      WIFLY_AUTH_WPA2_PSK

#define FLAG_MAIN_MENU 1
#define FLAG_SUB_MENU_2 2

int flag = FLAG_MAIN_MENU;

// Pins' connection
// Arduino       WiFly
//  2    <---->    TX
//  3    <---->    RX

SoftwareSerial wiflyUart(2, 3); // create a WiFi shield serial object
WiFly wifly(&wiflyUart); // pass the wifi siheld serial object to the WiFly class

void setup()
{

    // define the pins we can control
    pinMode(11,OUTPUT);
    digitalWrite(11,LOW);

    pinMode(12,OUTPUT);
    digitalWrite(12,LOW);

    pinMode(13,OUTPUT);
    digitalWrite(13,LOW);

    pinMode(7,OUTPUT);
    digitalWrite(7,LOW);

    wiflyUart.begin(9600); // start wifi shield uart port

    Serial.begin(9600); // start the arduino serial port
    Serial.println("--------- TCP Communication --------");

    // wait for initilization of wifly
    delay(1000);

    wifly.reset(); // reset the shield
    delay(1000);

    wifly.sendCommand("set ip local 80\r"); // set the local comm port to 80
    delay(100);

    wifly.sendCommand("set comm remote 0\r"); // do not send a default string when a connection opens
    delay(100);

    wifly.sendCommand("set comm open *\r"); // set the string or character that the wifi shield will output when a connection is opened "*"
    delay(100);

    wifly.sendCommand("set ip protocol 2\r"); // set TCP protocol
    delay(100);

    Serial.println("Join " SSID );
    if (wifly.join(SSID, KEY, AUTH)) {
        Serial.println("OK");
    } else {
        Serial.println("Failed");
    }

    delay(5000);

    wifly.sendCommand("get ip\r");
    char c;

    while (wifly.receive((uint8_t *)&c, 1, 300) > 0) { // print the response from the get ip command
        Serial.print((char)c);
    }

    Serial.println("TCP Ready");
}

void loop()
{

    if(wifly.available())
    {
        delay(1000); // wait for all the characters to be sent to the WiFi shield
        char val = wiflyUart.read(); // read the first character

        if(flag == FLAG_MAIN_MENU)
        {
            switch(val)
            {
                case '*': // search for the new connection string
                printMainMenu();
                break;
                case '1': // the user typed 1, display the pin states
                printPinStates();
                printMainMenu();
                break;
                case '2': // the user typed 2, display the sub menu (option to select a particular pin)
                printSubMenu2();
                flag = FLAG_SUB_MENU_2; // flag to enter the sub menu
                break;
                default:
                wiflyUart.print("INVALID SUBMENU\r\n");
                break;
            }
        }
        else if(flag == FLAG_SUB_MENU_2)
        {
            int pinNumber = val-48; // get first number i.e. if the pin 13 then the 1st number is 1
            int secondNumber = (wiflyUart.read()-48);
            if(secondNumber>=0 && secondNumber<=9)
            {
                pinNumber*=10;
                pinNumber +=secondNumber; // get second number, i.e. if the pin number is 13 then the 2nd number is 3, then add to the first number
            }

            // Create the "You want to toggle pin x?? OK..." string.
            String response = "\r\nYou want to toggle pin ";
            response+=pinNumber;
            response+="? OK...\r\n";

            wiflyUart.print(response);

            digitalWrite(pinNumber, !digitalRead(pinNumber)); // toggle pin

            wiflyUart.print("Pin Toggled!\r\n"); // let user know the pin was toggled.
            printMainMenu();
            flag = FLAG_MAIN_MENU;
        }
    }

}

/*
* Prints the main menu options
*/
void printMainMenu()
{
    wiflyUart.print("\r\n\r\n");
    wiflyUart.print("Arduino Console Menu: \r\n");
    wiflyUart.print("1. Show digital pin states\r\n");
    wiflyUart.print("2. Toggle a digital pin's state\r\n");
    wiflyUart.print("\r\n\r\n");
}

// displays the pin states
void printPinStates()
{

    String pinState = "Pin 7 is ";
    pinState+=getPinState(7);
    pinState+="\r\n";

    pinState += "Pin 11 is ";
    pinState+=getPinState(11);
    pinState+="\r\n";

    pinState += "Pin 12 is ";
    pinState+=getPinState(12);
    pinState+="\r\n";

    pinState += "Pin 13 is ";
    pinState+=getPinState(13);
    pinState+="\r\n";

    wiflyUart.print(pinState);
}

// prints the option to enter a pin number
void printSubMenu2()
{
    wiflyUart.print("\r\nEnter the pin number you wish to toggle: ");
}
?
// get a pin state as a string.
String getPinState(int pinNumber)
{
    if(digitalRead(pinNumber)) // check if the pin is ON or OFF
    {
        return "ON"; // the pin is on
    }
    else
    {
        return "OFF";  // the pin is off
    }
}
```

**Etapa 3: Obter o Endereço IP e a Porta do Shield**

Abra a janela do monitor serial do Arduino para obter o endereço IP e o número da porta do WiFiShield, destacados na imagem abaixo.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Tcp-arduino-serial-comm.png)

*Janela do monitor serial do Arduino com a saída do exemplo TCP, o endereço IP e o número da porta estão destacados.*

Na imagem acima, o Endereço IP e a Porta seriam os seguintes:

    192.168.0.10:80

**Etapa 4: Configurar o Terminal TCP e Conectar ao Shield**

Abra o RealTerm e na aba "Display" insira "30" em "Rows" e selecione a opção "Scrollback":

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-display-tab.png)

*Janela do RealTerm: rows = 30, e opção Scrollback marcada.*

Na aba "Port" do programa RealTerm, digite o endereço IP e a porta do seu shield, por exemplo 192.168.0.10:80, depois clique no botão "Open", o menu principal codificado no Arduino deve ser exibido no terminal.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-port-tab.png)

*Janela do RealTerm. O campo Port tem o endereço IP e o número da porta do WiFi shield. O menu do Arduino é exibido*

Na aba "Send" selecione uma das opções do menu, "1" ou "2", insira-a na caixa de texto e pressione "Send ASCII" para enviar o valor.

Por exemplo, para alternar o estado do pino 13 insira "2" e pressione "Send ASCII", então quando for solicitado "Enter the pin number you wish you toggle" insira "13" e clique em "Send ASCII". O Arduino deve responder "Pin Toggled!" e voltar ao menu principal, agora insira "1" e pressione "Send ASCII" para ver o estado atual dos pinos.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Realterm-send-tab.png)

*Janela do RealTerm. O estado do pino 13 foi alterado de OFF para ON como mostrado no texto amarelo.*

### Exemplo 9: WiFi Shield e Relay Shield

Agora que você sabe como enviar e receber informações de e para o WiFi shield, você pode ver como seria fácil controlar qualquer tipo de dispositivo via web.

Se você deseja controlar dispositivos de alta potência, como o abajur da sua mesa, um motor ou uma bomba d'água por meio de uma página web ou aplicativo de celular, recomendamos o nosso [Relay Shield V2.0](/pt-br/Relay_Shield_v3).

O Relay Shield V2.0 usa os pinos 4, 5, 6 e 7, portanto é totalmente compatível com o código dos exemplos desta página.

### Exemplo 10: Modo Adhoc

Para usar o shield em modo Adhoc, como um ponto de acesso, simplesmente conecte o pino IO9 do shield ao pino de 3,3 V no Arduino, como mostrado abaixo, e reinicie o shield se ele estiver ligado.

![](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/img/Wifi-shield-adhoc-mode-hardware-connection.png)

*Conexão do shield necessária para o modo adhoc. Pino IO9 do shield conectado a 3,3 V.*

Para obter o SSID do shield, envie o código do Exemplo 1 para o seu Arduino e abra o monitor serial, o shield responderá com seu SSID como no exemplo abaixo, em que neste caso **WiFly-EZX-1b** é o SSID.

    AP mode as WiFly-EZX-1b on chan 1

Agora você já deve conseguir se conectar ao seu WiFi shield como um ponto de acesso, por exemplo o SSID deve estar visível na lista de redes WiFi disponíveis no seu PC.

Para saber mais sobre o modo adhoc consulte o [WiFly RN User Manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) seção 16 "Adhoc Networking Mode"

## FAQs

**P1: Como definir uma configuração ao usar o WiFi shield com o Mega?**

R1: Siga as instruções abaixo. Para mais informações sobre Software serial consulte [SoftwareSerial Library](https://arduino.cc/en/Reference/SoftwareSerial).

- Conecte D2 a D10 e depois D3 a D11 com jumpers
- Modifique o programa: Wifly(2,3); → Wifly(10,11);

**P2: O Wifi Shield é compatível com o Arduino Due?**

R2: O Wifi shield pode funcionar com o Arduino Due. No hardware, você pode conectá-los por meio de uma das quatro portas seriais no Arduino Due (se você usar Serial 1-3, talvez seja necessário fazer a conexão com jumpers). A biblioteca atual do wifi shield usa SoftwareSerial, você deve modificá-la para usar a porta Serial do Arduino Due.

**P3: Como melhorar a conectividade entre o Wifi Shield e o roteador?**

R3: Não coloque plástico ou qualquer outro material dielétrico em contato com a antena. Qualquer objeto metálico em proximidade com a antena impedirá que ela irradie livremente.

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [WiFi Shield V2.0 Eagle Files](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_Shield_v2.0.zip)
- [Schematic PDF](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/Wifi_shield_v2_schematic.pdf)
- [RN-171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-171.pdf)
- [Wifi Shield Library](https://github.com/Seeed-Studio/WiFi_Shield)
- [WiFi Module User Manual](https://files.seeedstudio.com/wiki/Wifi_Shield_V2.0/res/WiFly-RN-UM.pdf) *-- Aqui você encontrará todos os comandos para o módulo RN-171 no shield.*
- [What is a Seeeduino](/pt-br/Seeeduino_v4.2)
- [w3schools](http://www.w3schools.com/) Ótimo site para aprender HTML, Javascript e JQuery

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Wifi_Shield_V2.0 -->

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
