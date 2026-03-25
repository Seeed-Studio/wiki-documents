---
description: Wifi Bee v2.0
title: Wifi Bee v2.0
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Wifi_Bee_v2.0
sku: 113050000
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Wifi_Bee_v2.0/
---
![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_bee_v2_01.jpg)

Wifi Bee v2.0 é a versão atualizada do Wifi Bee v1.0. Substituímos o módulo transceptor MRF24WB0MA, que usa interface SPI, pelo RN-171, que usa interface UART. O módulo Wifi Bee v2.0 incorpora rádio 802.11 b/g, processador de 32 bits, pilha TCP/IP, relógio em tempo real, acelerador criptográfico, unidade de gerenciamento de energia e interface de sensor analógico. Ele pode ser conectado diretamente aos soquetes Bee e usar a porta UART para comunicação. Você também pode usar comandos AT para configurações avançadas e assim atender às suas necessidades específicas.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Wifi-Bee-v2.0-p-1637.html)

## Especificação

---
- Compatível com qualquer soquete Bee

- Interface com o host: UART

- Potência de transmissão: 0dBm a 12dBm

- Frequência: 2402~2480 MHz

- Canal: 0~13

- Pilha de protocolo TCP / IP integrada

- Antena de chip multicamadas onboard

## Demonstração

---
Nesta seção, usaremos o Wifi Bee para criar um servidor Web como aplicação de exemplo. Siga os passos abaixo para fazê-lo funcionar!
Nota: Para configurar este módulo, você precisará de um adaptador ou de um Xbee shield que permita a comunicação com o módulo, antes de poder conectá-lo e usá-lo em outros módulos.

### Instalação de hardware

Aqui está todo o hardware necessário.

- 1) Wifi Bee

- 2) Um adaptador, como [SBee](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16Uart),  [Grove -Xbee Carrier](https://www.seeedstudio.com/depot/grove-xbee-carrier-p-905.html?cPath=98_16)， [Xbee Shield](https://www.seeedstudio.com/depot/xbee-shield-v20-p-1375.html?cPath=98_16)

- 3) Cabo Mini USB

Conecte o wifi bee ao Bee Socket do seu adaptador e conecte o adaptador ao computador via cabo Mini USB. Antes de o wifi bee se conectar à sua rede, o indicador ASSOC ficará piscando.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Wifi_Beev2.0.jpg)

### Configurar o Wifi Bee

Precisamos de um monitor serial para configurar o Wifi Bee. Portanto, antes de configurar o Wifi bee, você precisa preparar uma ferramenta serial. Neste caso, escolhemos a usual [SSCOM3.2](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Sscom32E.zip)

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool.png)

- 1) Escolha a porta serial correta e clique no botão "Open Com", mostrado acima, e defina a taxa de baud para 9600.

- 2) Não selecione "SendNew" e envie o comando AT $$$ para o wifi Bee; ele responderá "CMD" para indicar que entrou corretamente no modo de configuração.

- 3) Selecione "SendNew" após entrar no modo de configuração, envie o comando AT set u b 9600 para definir a taxa de baud como 9600. Claro, você também pode defini-la como 38400.

- 4) Digite show net e ele mostrará as configurações atuais da rede.

- 5) Digite scan para ver uma lista das redes Wifi ao redor.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Serial_Tool_Scan_net.png)

- 6) Envie o comando AT set wlan join 1, se a porta serial responder "ADK", isso indica que o Wifi Bee entrou no modo de controle automático.

- 7) Digite join o SSID do seu roteador (como join Seeed-STU) para se conectar e associar a um ponto de acesso aberto. Se formos nos conectar a uma rede segura, digite assim:

set wlan ssid your router's SSID

set wlan pass your router's password

save

reboot

E o monitor responde com o endereço IP atual e a porta aberta. Pode-se ver facilmente que o endereço IP do meu Wifi Bee é 192.168.0.28 e a porta é 2000.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Join_network.png)

- 8) Use um navegador Web para acessar `http://ip:port`, como: `http://192.168.0.28:2000`, e o monitor receberá a requisição http do navegador Web como mostrado abaixo. No entanto, o navegador Web não receberá nada, pois o wifi bee não envia nenhuma resposta.

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Web_access.png)

Para mais comandos, consulte o Wifly Command Reference na parte de Recursos.

### Conectar o servidor TCP e o Wifi Bee

Aqui selecionamos o [TCPUDPbg](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/TCPUDPDbg.zip) para funcionar como um cliente TCP e enviar comandos ao Wifi Bee.

- 1） Faça o download e execute o TCPUDPbg. Clique em "CreatConnection", podemos ver esta imagem:

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/TCPUDPTool.png)

- 2）Depois de selecionar o tipo TCP, digite o endereço IP e a porta do Wifi Bee e clique em "Create".

- 3）Clique no botão "Connect" na barra lateral esquerda. Agora você pode enviar comandos via o cliente TCP simulado pelo TCPUDPbg para o wifi bee. Assim, o TCPUDPbg também receberá as strings enviadas pelo monitor serial!

![](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/img/Communication.png)

## Rastreador de Versões

---

| Revisão | Descrições | Lançamento |
|----------|-------------|---------|
| Wifi Bee v1.0 | módulo transceptor MRF24WB0MA com interface SPI, e utilizando um Atmega328p | 13 Dez, 2011 |
| Wifi Bee v2.0 | substitui o MRF24WB0MA pelo RN-171, remove o chip Atmega328p | 11 Nov, 2013 |

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
- [Wifi Bee v2.0 Eagle File](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Wifi_Bee_v2.0_Eagle_File.zip)

- [RN-171 Datasheet](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-171.pdf)

- [Wifi Command Reference](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/WiFly-RN-UM.pdf)

- [Antenna Datasheet](https://files.seeedstudio.com/wiki/Wifi_Bee_v2.0/res/Antenna_Datasheet.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Disponibilizamos vários canais de comunicação para atender diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
