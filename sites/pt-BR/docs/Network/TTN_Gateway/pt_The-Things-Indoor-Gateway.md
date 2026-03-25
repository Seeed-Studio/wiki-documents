---
description: The Things Indoor Gateway
title: The Things Indoor Gateway
keywords:
  - Sorftware Mender
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /The-Things-Indoor-Gateway
sku: 114992464,114992469,114992468
last_update:
  date: 2/1/2023
  author: jianjing Huang
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/The-Things-Indoor-Gateway/
---



![TTIG](https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png)


<div style={{textAlign: 'center'}}>
    <a href="https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html">
            <strong><span style={{color: '#FFFFFF', fontSize: '1.2em'}}> Adquira Agora 🖱️</span></strong>
    </a>
</div>

## Introdução ao Produto

[The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/) é um produto [The Things Network](https://www.thethingsnetwork.org/) que apresenta alta confiabilidade, alto desempenho e ótimo custo-benefício. É um gateway LoRaWAN de 8 canais baseado no SX1308 com conectividade WiFi ESP8266 integrada. Com várias versões e diversos tipos de tomadas de energia disponíveis, atende a uma ampla gama de aplicações que exigem cobertura dinâmica. Como um gateway de IoT projetado pela The Things Network, ele usufrui de todas as funções superiores que a TTN oferece a seus clientes. E, claro, este gateway é capaz de se conectar à rede segura e colaborativa de Internet das Coisas que foi construída e se estende por muitos países ao redor do mundo para fornecer cobertura a milhões de pessoas. A ferramenta que muitas pessoas utilizam em sua comunidade é o [TTN Mapper](https://ttnmapper.org/). Portanto, você pode usar este gateway para se tornar um dos colaboradores dessa rede, conectando-o ao [The Network Console](https://console.thethingsnetwork.org/), ou aproveitar a rede pública da comunidade formada por outros gateways TTN!

O The Things Indoor gateway suporta LoRaWAN 1.0.3 e, portanto, é compatível com outros sensores LoRaWAN. A Seeed Studio fornece muitos sensores focados em diversos tipos de aplicações de sensoriamento ambiental sem fio. Se você também precisar de alguns sensores para cenários externos medindo CO2, umidade do solo e temperatura, apenas para listar alguns, os [SenseCAP sensors](https://www.seeedstudio.com/SenseCAP-c-1339.html) são sua melhor escolha.

Com o uso do The Things Indoor LoRaWAN WiFi Gateway, do The Things Network Console e dos SenseCAP LoRaWAN Sensors, você pode facilmente construir seu próprio sistema de IoT em casa, no jardim, no escritório, na cadeia de suprimentos e em fábricas. Seguindo as [instruções de instalação passo a passo](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf) fornecidas abaixo, você pode configurar o gateway LoRaWAN em menos de 5 minutos e iniciar sua jornada em IoT!

![spec](https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg)

## Recursos

* **Instalação fácil**: backhaul por 802.11 b/g/n WiFi via ESP8266; configuração simples em menos de 5 minutos
* **Uso global**: EU868, US915 e AU915 disponíveis; suporta LBT (Listen-Before-Talk)
* **Software avançado**: suporta o protocolo de ponta BasicStation
* **Grande confiabilidade**: certificado por CE/FCC/IC/RCM/WPC/RoHS
* **Conveniente**: design compacto para transporte; pode ser alimentado por múltiplas opções de energia: tanto tomadas de parede quanto USB tipo C em 900 mA funcionam. Antena omnidirecional integrada para uso doméstico
* **Capacidade poderosa**: gateway LoRaWAN interno de 8 canais baseado em SX1308

## Especificações

### LoRa

| Parâmetro | Valor |
|-----------|-------|
| Chipset | Semtech SX1308 |
| Canais | 8 Canais |
| Sensibilidade de Recepção | -140/-135 dBm (EU/US) |
| Potência de Transmissão | Até +27 dBM |
| Versão da Especificação LoRaWAN® | V.1.0.3 |
| Packet Forwarder | Protocolo Basic station |

### Wi-Fi

| Parâmetro | Valor |
|-----------|-------|
| SoC | ESP9266 |
| Modo | 802.11 b/g/n, Modo Cliente |
| Potência de Tx | +20 dBm |
| Bandas de Frequência | 2.4 GHz |
| Portas WAN/LAN | - |
| Porta USB | USB Type-C (900 mA) |
| Segurança | WPA/WPA2 |
| Dimensões | 90*80*40 mm |
| Temperatura de Operação | 0-40℃ |
| Certificação | CE/FC/IC/RCM/WPC/RoHS |

### Outras Especificações

| Parâmetro | Valor |
|-----------|-------|
| Interfaces | Indicadores LED |
| Tipo de Antena | Integrada |
| Faixa de Frequência | AU915 |

## Fontes

* [Primeiros Passos com The Things Indoor Gateway](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf)
* [The Things Indoor Gateway Datasheet](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf)
* [Primeiros passos no AWS](https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf)

## The Things Indoor Gateway - Primeiros Passos com SenseCAP

![combo](https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png)

NOTA: Se você não conhece o SenseCAP, aqui vai uma breve introdução:
> Entre os primeiros lançamentos da série de produtos de IoT industrial (IIoT) da Seeed, o SenseCAP é focado em aplicações de sensoriamento ambiental sem fio: agricultura inteligente, agricultura de precisão e cidades inteligentes, para citar algumas. Ele é composto por produtos de hardware (sensores, registradores de dados & gateways, etc.), serviços de software (portal SenseCAP, aplicativo móvel, dashboard aberto) e API para gerenciamento de dispositivos e dados. O SenseCAP suporta diferentes protocolos de comunicação, como LoRa, 2G, 4G, NB-IoT e outros.

Para saber mais, clique em [SenseCAP Introduction](https://wiki.seeedstudio.com/pt-br/Industrial-IoT-SenseCAP-Introduction/)

### Etapa 1: Ative seu Gateway TTIG

* Pressione o botão de reset (pequeno botão na parte traseira do gateway, ao lado da porta USB-C) por 5 segundos até que o LED pisque rapidamente em VERDE-VERMELHO algumas vezes.
* Mantenha pressionado o SETUP (botão na parte superior do gateway, ao lado do LED) por 10 segundos até que o LED pisque rapidamente em VERMELHO.
* O gateway agora expõe um AP WiFi cujo SSID é MINIHUB-xxxxxx, onde xxxxxx são os últimos 6 dígitos do ID do gateway.
* A senha para essa rede está impressa no painel traseiro do dispositivo em WiFi PW.
* Em seguida, acesse 192.168.4.1 no seu navegador para entrar na página de configuração do WiFi.

![192](https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png)

* Selecione a rede WiFi e insira a senha se for uma rede fechada.
* Selecione a opção "Save and Reboot".
* Se sua configuração estiver correta:
  * O gateway piscará em VERDE por alguns segundos enquanto se conecta a essa rede.
  * Em seguida, piscará em VERDE-VERMELHO por alguns segundos enquanto se conecta ao endpoint CUPS e busca as informações necessárias para se conectar ao endpoint de tráfego LNS.
* Se sua configuração tiver sido bem-sucedida, o LED ficará VERDE fixo, o que significa que o gateway está conectado à rede LoRaWAN e pronto para processar pacotes.

### Etapa 2: Registro do Gateway no Console TTN

Acesse o site da TTN: [https://www.thethingsnetwork.org](https://www.thethingsnetwork.org) e crie sua conta, depois acesse "Console" e primeiro clique em "Gateway".

![2.1](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

Registre seu gateway:

![2.2](https://files.seeedstudio.com/products/113990896/wiki/s2.2.png)

1. Gateway EUI: é exibido na página "Add Network" 192.168.4.1

![2.3](https://files.seeedstudio.com/products/113990896/wiki/s2.3.png)

2. Frequency Plan: veja as etiquetas no gateway.
3. Router: selecione o roteador que for mais adequado para você.
4. Register: o Status do Gateway exibe conectado, indicando registro bem-sucedido

![2.4](https://files.seeedstudio.com/products/113990896/wiki/s2.4.png)

### Etapa 3: Adicionar sensores SenseCAP ao Console TTN

#### 1. Obter Device EUI, Device Code, App Key e App EUI

* Device EUI e Device Code estão no rótulo do produto SenseCAP.

![3.1](https://files.seeedstudio.com/products/113990896/wiki/s3.1.png)

* O AppEUI e o AppKey do dispositivo sensor SenseCAP foram gravados no dispositivo pela Seeed. Use HTTP API para recuperar o App EUI e o App Key. Você pode usar o navegador para emitir uma requisição HTTP GET.

![3.2](https://files.seeedstudio.com/products/113990896/wiki/s3.2.png)

Na API, substitua o Device EUI e o Device Code pelo seu próprio Device EUI e Device Code, respectivamente. E você obterá a seguinte resposta na página da web, que indica seu App EUI e App Key:

![3.3](https://files.seeedstudio.com/products/113990896/wiki/s3.3.png)

#### 2. Adicionar Application e AppEUI

![3.4](https://files.seeedstudio.com/products/113990896/wiki/s2.1.png)

1. Entre na página "add application"

![3.5](https://files.seeedstudio.com/products/113990896/wiki/s3.5.png)

* Application ID: insira um nome exclusivo.
* Description: insira uma descrição.
* Handler registration: selecione o mesmo handler que o roteador do gateway.
* Selecione Add Application para continuar.

![3.6](https://files.seeedstudio.com/products/113990896/wiki/s3.6.png)

![3.7](https://files.seeedstudio.com/products/113990896/wiki/s3.7.png)

* Application → Application EUIS → Manage EUIs.
* Add EUI
* Insira o AppEui do nó que você obteve na etapa anterior (etapa 3.1).
* Add EUI

![3.8](https://files.seeedstudio.com/products/113990896/wiki/s3.8.png)

2. Adicionar o Nó Sensor como Devices no Console TTN

* Application → Device → register device

![3.9](https://files.seeedstudio.com/products/113990896/wiki/s3.9.png)

![3.10](https://files.seeedstudio.com/products/113990896/wiki/s3.10.png)

* Device ID: insira um nome exclusivo.
* Device EUI: insira o Device EUI do nó que você obteve na etapa anterior (Etapa 3.1).
* App Key: insira o App Key do nó que você obteve na etapa anterior.
* App EUI: selecione o App EUI do nó.
* Register

### Etapa 4: Ative seus Sensores SenseCAP

#### Ligar

O interruptor de energia fica oculto dentro do dispositivo. Abra o dispositivo e ligue a alimentação antes de instalar os sensores. Aqui estão as instruções passo a passo:

* Afrouxe a Sonda do Sensor girando a tampa no sentido anti-horário. Use o abridor de tampa branco para tornar esse processo mais fácil. A imagem abaixo usa o Sensor TH como exemplo e se aplica a todos os outros sensores SenseCAP.

![4.1](https://files.seeedstudio.com/products/113990896/wiki/s4.1.png)

* Depois de abrir o dispositivo, coloque o interruptor em "ON", e o LED no canto inferior direito piscará, indicando que a alimentação está ligada. Aguarde cerca de 10 segundos e o LED piscará rapidamente por 2 segundos, indicando que o dispositivo está conectado à rede.

![4.2](https://files.seeedstudio.com/products/113990896/wiki/s4.2.png)

* Após o dispositivo estar conectado à rede, conecte novamente a Sonda do Sensor ao Controlador de Nó de Sensor girando-a no sentido horário. Observe que os rótulos em ambas as partes devem estar alinhados como mostrado na imagem abaixo, caso contrário, as duas partes não serão acopladas para funcionar corretamente e os dados não serão enviados.

* Verifique o status de conexão do Nó de Sensor no Console TTN: quando o status ficar verde, a conexão foi estabelecida com sucesso.

![4.3](https://files.seeedstudio.com/products/113990896/wiki/s4.3.png)

### Etapa 5: Verificação de Dados

Na página Data, os pacotes de dados são enviados. Para o formato da carga útil, consulte a seção Decoding.
Aqui são exibidos os dados obtidos com sucesso pelo SenseCAP LoRaWAN Soil Moisture & Temperature Sensor e pelo SenseCAP LoRaWAN CO2 Sensor:

![4.4](https://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png)

![4.5](https://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png)
