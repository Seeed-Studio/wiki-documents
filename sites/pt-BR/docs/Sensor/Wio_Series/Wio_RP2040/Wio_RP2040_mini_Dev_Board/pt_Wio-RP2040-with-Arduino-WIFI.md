---
title: Placa de Desenvolvimento Wio RP2040 mini com Arduino
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Wio-RP2040-with-Arduino-WIFI/
slug: /Wio-RP2040-with-Arduino-WIFI
last_update:
  date: 01/11/2022
  author: gunengyu
createdAt: '2023-01-12'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wio-RP2040-with-Arduino-WIFI/
---
# **Placa de Desenvolvimento Wio RP2040 mini com Arduino**

Aqui vamos usar a Wio RP2040 mini Dev Board para transmitir dados através de MQTT e Socket com Arduino. 


## **Hardware**

Materiais necessários

- [Wio RP2040 mini Dev Board](https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html) x1
- Computador x1
- Cabo USB tipo C x1

:::tip
    Alguns cabos USB podem apenas fornecer energia e não transferir dados. Se você não tiver um cabo USB ou não souber se o seu cabo USB pode transmitir dados, você pode verificar [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).
:::
- Passo 1. Prepare uma Wio RP2040 mini Dev Board e um cabo Type-C.
- Passo 2. **Mantenha pressionado** o botão 'boot' enquanto você conecta a placa ao computador. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png)


- Passo 3. Conecte e verifique se um disco aparece no computador.

Se tudo correr bem, o LED vermelho de alimentação na Wio RP2040 mini Dev Board deve acender e um disco deve aparecer no computador.


## **Software**

Antes de começarmos a enviar o código e transmitir dados, você pode querer configurar primeiro o servidor.

### **Comunicar com MQTT**

MQTT é um protocolo de transporte de mensagens Client-Server de publicação/assinatura. Os clientes podem usá-lo como publicador, assinante ou ambos.

#### **Configurar o servidor MQTT**

Baixe o [software de servidor MQTTX](https://github.com/emqx/MQTTX/) e instale-o no computador e, em seguida, configure o servidor MQTT. Se você não conseguir baixar o servidor pelo site em seu país/região, prepare o servidor MQTT por conta própria.

---

Usaremos o servidor gratuito "mqtt.p2hp.com" neste projeto.

**Servidor online** 

- Endereço: mqtt.p2hp.com
- Portas: 1883 (TCP), 8083 (WebSocket)
- Tipo: EMQ
- Compatível com MQTT V3.1.1/V5.0

---

Entre no software MQTTX para criar uma nova conexão, preencha o nome, servidor, porta, tópico e depois clique em "Connect" para se conectar ao servidor.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png)

Após a conexão ser bem-sucedida, aparecerá um pop-up no canto superior direito do software.

![image.png](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png)

Em seguida, defina o tópico e a mensagem abaixo. Neste projeto, usamos MQTT para receber ou enviar mensagens com a Wio RP2040 mini Dev Board. 

Preencha o 'topic' como "temperature".

:::note
    O 'topic' que escrevemos aqui é muito importante. O publicador ou assinante não consegue transmitir dados a menos que os 'topics' entre eles sejam os mesmos. Você entenderá melhor quando enviar o código.
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png)

Os preparativos foram concluídos e o servidor MQTT está configurado. Agora vamos enviar o código.

#### **Código Arduino com MQTT**

:::note
    Se esta é a sua primeira vez usando Arduino, recomendamos fortemente que consulte [Primeiros Passos com Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::
- **Passo 1. Instalar o Software Arduino**

<p style={{}}><a href="https://www.arduino.cc/en/software" target="_blank"><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png" /></a></p>


**Inicie o aplicativo Arduino**

Clique duas vezes no aplicativo Arduino (arduino.exe) que você baixou anteriormente.

:::note
    Se o Software Arduino carregar em um idioma diferente, você pode alterá-lo na caixa de diálogo de preferências. Consulte a página [Arduino Software (IDE)](https://www.arduino.cc/en/Guide/Environment#languages) para mais detalhes.
:::
- **Passo 2. Baixar e abrir o exemplo de MQTT**

Você pode baixar [MQTT.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino) aqui e abri-lo. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window.png)

- **Passo 3. Adicionar a Wio RP2040 mini Dev Board ao seu Arduino IDE**

Clique em **File > Preference** e preencha Additional Boards Manager URLs com a URL abaixo: 

https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window2.png)

Clique em **Tools-> Board-> Boards Manager...** e escreva a palavra-chave "**XIAO RP2040**" no campo de busca. Encontre "Seeed XIAO RP2040" e instale.

![](https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png)

- **Passo 4. Selecione a placa correspondente**

Depois de instalar a placa, clique em **Tools-> Board**, encontre "**Wio RP2040 Mini Dev Board**" e selecione-a.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

Assim que a placa estiver conectada ao computador, **não há necessidade** de selecionar uma porta. Porque o computador gravará um **arquivo .uf2** na placa no primeiro envio e, depois disso, selecionará a porta automaticamente.

- **Passo 5. Enviar o programa**
Agora você pode enviar o código e abrir o MQTTX para ver os resultados.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window6.png)

- **Além disso**

Se você enviar algumas mensagens via MQTT, poderá vê-las no Monitor Serial no Arduino, desde que os 'topics' entre eles sejam os mesmos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window8.png)

### **Comunicar com Socket**

Agora vamos tentar usar um computador para construir um servidor TCP para enviar ou receber mensagens por meio de Socket. O software que usamos aqui é o [NetAssist](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe).

#### **Configurar o servidor TCP**

- Clique duas vezes no arquivo '.exe' baixado e abra o NetAssist.

- Selecione 'TCP Server' no canto superior esquerdo para definir o 'Protocol'.

- Preencha o 'Local host addr' e 'Local host port' abaixo.

- Quando tudo estiver configurado, clique em 'Open' para entrar no servidor.

:::note
    O **'Local host addr'** e o **'Local host port'** aqui são tão importantes quanto o **'topic'** no MQTT. Você não receberá a mensagem a menos que esses parâmetros sejam os mesmos que no código.
:::
![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png)

Os preparativos foram concluídos e o servidor MQTT está configurado. Agora vamos enviar o código.

#### **Código Arduino com Socket**

- **Passo 1. Baixar e abrir o exemplo de Socket**

Você pode baixar [Socket.ino](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino) aqui e abri-lo. 

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window10.png)

- **Passo 2. Selecione a placa correspondente**

Depois de instalar a placa, clique em **Tools-> Board**, encontre "**Wio RP2040 Mini Dev Board**" e selecione-a.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png)

Assim que a placa estiver conectada ao computador, **não há necessidade** de selecionar uma porta. Porque o computador gravará o **arquivo .uf2** na placa no primeiro envio e, depois disso, selecionará a porta automaticamente.

- **Passo 3. Enviar o programa**
Agora você pode enviar o código e abrir o NetAssist para ver os resultados.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window13.png)

- **Além disso**

Se você enviar algumas mensagens pelo NetAssist, poderá vê-las no NetAssist, desde que o 'Local Host Addr' e o 'Local Host Port' entre eles sejam os mesmos.

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window15.png)

![](https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png)

## Suporte Técnico & Discussão de Produto
 se você tiver qualquer problema técnico, envie o problema em nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
