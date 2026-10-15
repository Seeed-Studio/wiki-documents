---
description: Comece com o SenseCAP LoRaWAN Starter Kit
title: Comece com o SenseCAP LoRaWAN Starter Kit
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /M2_Kit_Getting_Started
sidebar_position: 0
last_update:
  date: 1/26/2023
  author: Specner
createdAt: '2022-11-29'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/M2_Kit_Getting_Started/
---
# **Visão geral**

## **Noções básicas de LoRaWAN**

LoRaWAN (Long Range Wide Area Network) é um protocolo de comunicação sem fio de baixo consumo e longo alcance, projetado especificamente para aplicações de Internet das Coisas (IoT). Ele fornece recursos de comunicação de longa distância e baixo consumo de energia para dispositivos IoT. As principais características do LoRaWAN incluem:

- Comunicação de longo alcance
- Baixo consumo de energia
- Pode ser implantado de forma pública ou privada
- Conectividade de dispositivos em grande escala

Devido a essas características, é amplamente aplicado em agricultura inteligente, cidade inteligente, monitoramento ambiental e outras aplicações de detecção sem fio.

<div align="center"><img width ={500} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/1.png
"/></div>

Para saber mais sobre LoRaWAN, clique aqui.

## **SenseCAP LoRaWAN Starter Kit**

SenseCAP LoRaWAN Starter Kit tem como objetivo facilitar que os usuários adquiram e apliquem rapidamente conhecimento prático de LoRaWAN. O kit inclui NM2 Multiple platform gateway, XIAO S3, Grove Wio-E5, Temperature & Humidity Sensor, Moisture Sensor, outros Grove expansíveis, permitindo que os usuários participem de um aprendizado prático da arquitetura LoRaWAN e os capacitando a desenvolver ainda mais seus próprios projetos.
<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/2.jpg" /></div>

Como um LoRaWAN Starter Kit, ele inclui todos os componentes da arquitetura LoRaWAN, incluindo nós, gateways e até a plataforma em nuvem SenseCAP. O kit oferece um conjunto abrangente de recursos que permite que você experimente totalmente a tecnologia LoRaWAN. Com este kit, você pode realizar várias atividades práticas, como testes de distância, testes de rede e desenvolvimento de projetos. Ele fornece uma solução completa que permite que você se aprofunde em todos os aspectos do LoRaWAN, validando seu desempenho e funcionalidade por meio de aplicações do mundo real. Seja você iniciante ou desenvolvedor experiente, este kit atende às suas necessidades de aprendizado e prática no campo do LoRaWAN.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/3.png" /></div>

Produtos relacionados:

|Name|Description|
| :- | :- |
|[S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S210x)|Uma série de sensores industriais LoRaWAN® sem fio.|
|[S2100 datalogger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html)|Pode se conectar a sensores MODBUS-RTU RS485/Analógico/GPIO e transmitir dados dos sensores para a rede LoRaWAN|
|[M2 Multi-Platform LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html)|Um gateway LoRaWAN® padrão que suporta conexão a diferentes servidores de rede|
|[Wio-E5 Dev Kit](https://www.seeedstudio.com/LoRa-E5-Dev-Kit-p-4868.html)|Um conjunto de ferramentas de desenvolvimento compacto e fácil de usar para você liberar o poderoso desempenho do módulo LoRa Wio-E5 STM32WLE5JC.|

# **Primeiros Passos**

## **Preparação**

### **Hardware**

**Componentes eletrônicos**

O kit deve incluir os seguintes componentes eletrônicos. Por favor, verifique se estão completos.**
**
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/4.jpg" /></div>

Antes de iniciar o projeto, você precisa soldar os headers na placa XIAO e instalar a antena.

**Soldar header**

XIAO ESP32S3 é enviado sem pinos de header por padrão, você precisa preparar seus próprios pinos e soldá-los aos pinos correspondentes do XIAO para poder conectar à placa de expansão ou ao sensor.

Devido ao tamanho reduzido do XIAO ESP32S3, tenha cuidado ao soldar os headers, não junte pinos diferentes e não deixe a solda encostar no shield ou em outros componentes. Caso contrário, isso pode fazer com que o XIAO entre em curto-circuito ou não funcione corretamente, e as consequências causadas por isso serão de responsabilidade do usuário.
<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/5.png" /></div>

**Instalação da antena**

No canto inferior esquerdo da parte frontal do XIAO ESP32S3, há um "WiFi/BT Antenna Connector" separado. Para obter um sinal melhor de WiFi/Bluetooth, você precisa pegar a antena dentro da embalagem e instalá-la no conector.

Há um pequeno truque para a instalação da antena: se você simplesmente pressionar com força para baixo, verá que é muito difícil pressionar e seus dedos vão doer! A maneira correta de instalar a antena é primeiro encaixar um lado do conector da antena no bloco do conector e, em seguida, pressionar um pouco o outro lado; a antena será instalada.

Para remover a antena é o mesmo caso, não use força bruta puxando a antena diretamente; faça força para levantar de um lado, e a antena sairá facilmente.
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/6.png" /></div>

### **Software**

Você pode optar por usar nossa plataforma em nuvem SenseCAP integrada ou usar um LoRaWAN Network Server de terceiros, como The Things Network. Recomendamos usar a plataforma em nuvem SenseCAP para a melhor experiência do usuário. Abaixo estão os links relevantes.

1. Clique para abrir a página Web do [SenseCAP Portal](https://sensecap.seeed.cc/portal/#/login)

Escaneie para baixar o SenseCAP Mate APP
<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/7.png" /></div>

# **Inicialização rápida e sem código com LoRaWAN Starter Kit**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/8.png" /></div>

## **Etapa 1 Ligar e conectar à Internet**

O kit inclui o [SenseCAP Multi-Platform LoRaWAN Indoor Gateway(SX1302) - EU868 - Seeed Studio](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html), que é um gateway LoRaWAN® padrão que suporta conexão a diferentes servidores de rede. Ele pode ser usado não apenas para desenvolvimento pessoal com LoRa, mas também em conjunto com sensores industriais. Neste wiki, o fluxo de dados passará pela SenseCAP Cloud. O modelo padrão em execução neste gateway é SenseCAP, portanto você não precisa fazer configuração extra, apenas ligue o gateway e conecte-o à Internet por ETH ou WIFI.

### **Conectar ao cabo ETH**

O modo rápido – conecte o cabo Ethernet à porta Ethernet, e o indicador na parte superior ficará verde fixo se o gateway se conectar à Internet com sucesso.

### **Conectar ao WIFI via Luci**

Há duas maneiras de o usuário fazer login na página de configuração Luci.:

**Acessar via roteador**

1. Conecte seu gateway a um cabo Ethernet e conecte seu PC ao mesmo roteador.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/9.png" /></div>

**Nota**: Seu PC e o dispositivo devem estar conectados ao mesmo roteador/rede.

2. Verifique o endereço IP do seu dispositivo na página de administração do seu roteador.
3. Obtenha o nome de usuário e a senha do seu dispositivo: você pode encontrar o nome de usuário e a senha na etiqueta do dispositivo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/10.png" /></div>

4. Digite o endereço IP do seu dispositivo em um navegador para entrar na página Luci. Em seguida, insira o nome de usuário e a senha do seu dispositivo para fazer login.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/11.png" /></div>

**Acessar via hotspot AP do dispositivo**

1. Pressione o botão por 5 s até que o indicador azul pisque lentamente para entrar no modo de configuração.
2. O nome do hotspot AP é SenseCAP_XXXXXX (endereço MAC de 6 dígitos), a senha padrão é 12345678; conecte seu computador a esse hotspot AP.

<div align="center"><img width={200} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/12.png" /></div>

3. Obtenha o nome de usuário e a senha do seu dispositivo. Você pode encontrar o nome de usuário e a senha na etiqueta do dispositivo.

4. Digite o endereço IP (192.168.168.1) no seu navegador para entrar no Local Console. Em seguida, digite o nome de usuário e a senha do dispositivo e clique no botão Login.

**Conectar ao WIFI**

Clique em Network - Wireless

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/13.png" /></div>

Clique no botão Scan para escanear o WIFI.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/14.png" /></div>

Selecione seu WI-FI para entrar na rede.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/15.png" /></div>

Envie a senha do Wi-Fi e, em seguida, clique em Submit and Save.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/16.png" /></div>

Depois clique em Save and Apply para aplicar suas configurações.

O indicador na parte superior ficará verde fixo se o gateway for conectado com sucesso ao WIFI.

## **Etapa 2 Conectar nós**

Conecte o Grove-Capacitive Soil Moisture Sensor, Temperature & Humidity Sensor e o módulo sem fio Grove-Wio-E5 à XIAO Expansion Board.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/17.png" /></div>

## **Etapa 3 Escanear o QR Code do Grove-Wio-E5**

Abra o SenseCAP Mate APP após baixar a versão correspondente do APP de acordo com todos os sistemas móveis que você usa. Se for a primeira vez que você usa a plataforma SenseCAP, registre uma conta primeiro.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/18.png" /></div>
<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/19.png" /></div>

Clique no + no canto superior direito e selecione Add device para vincular o Grove - Wio-E5.

<div align="center"><img width={100} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/20.png" /></div>

Alinhe a caixa no centro da câmera com o código QR na parte de trás do Grove - Wio-E5 para escanear o código e vincular seu kit. Observe que o código QR na parte frontal do Wio E5 não deve ser escaneado.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/21.png" /></div>

## **Passo 4 Ver dados**

Após a vinculação bem-sucedida usando o SenseCAP Mate App, você verá os dados do sensor exibidos no aplicativo.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_Starter_Kit/Getting_Started/22.jpg" /></div>

:::tip

O SenseCAP Mate App não atualizará automaticamente as informações de dados; você precisará rolar manualmente para baixo na página do sensor para atualizar os dados. Se você não visualizar novos dados por mais de 10 minutos, pode tentar reiniciar o Wio Terminal acionando o botão lateral para baixo uma vez.
:::

## Apêndice

- [Código de Firmware Nativo](https://github.com/Seeed-Solution/lorawan-kit)
