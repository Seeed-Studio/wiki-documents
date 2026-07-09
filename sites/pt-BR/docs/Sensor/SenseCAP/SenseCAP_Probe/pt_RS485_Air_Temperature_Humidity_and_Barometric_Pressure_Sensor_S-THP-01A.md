---
description: Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica (S-THP-01A)
title: Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica (S-THP-01A)
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor
last_update:
  date: 10/14/2023
  author: Yvonne
createdAt: '2023-03-28'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/RS485_Air_Temperature_Humidity_and_Barometric_Pressure_Sensor/
---

# Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica (S-THP-01A)

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image1.png"/></div>

Um sensor RS485 IP56 de temperatura, umidade do ar e pressão barométrica possui uma ampla faixa de operação de 0-100% RH, -40 a 125°C e 300-1100 hPa. Ele é ideal para aplicações como agricultura inteligente, monitoramento meteorológico, cálculo de evapotranspiração, prevenção de mofo e muito mais. Ao integrar este sensor com o registrador de dados SenseCAP S2100 [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), os usuários podem obter coleta e gerenciamento de dados contínuos.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Atualizável para Sensores Industriais

Com o SenseCAP S2100 [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), você pode facilmente transformar este sensor em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a linha SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

# Brinque com o Registrador de Dados LoRaWAN S2100

Nesta página, vamos guiá-lo pelo processo de conexão do Registrador de Dados LoRaWAN S2100 com um Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica, permitindo que você crie um robusto sensor sem fio LoRaWAN de nível industrial que pode ser usado comercialmente em apenas cinco minutos.

## Primeiros Passos

### Preparação

#### Hardware

##### Materiais necessários

<table align="center">
 <tr>
     <th>SenseCAP S2100 Data Logger</th>
      <th>Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica</th>
    <th>Chave de fenda cruzada</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/products/101991101/image1.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-Air-Temperature-Humidity-and-Pressure-Sensor-p-5801.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 1. Prepare o data logger, o Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica, o gateway e as ferramentas

1. **Data logger**: É um conversor LoRaWAN que converte sensores MODBUS RS485/Analógico/GPIO em sensores habilitados para LoRa e, portanto, transfere dados por meio do protocolo LoRaWAN.

2. **Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica**: Este sensor mede com precisão a temperatura do ar, a umidade e a pressão barométrica dentro das faixas de 0-100% RH, -40 a 125°C e 300-1100 hPa. Ele é adequado para aplicações precisas de monitoramento ambiental industrial.

3. **Chave de fenda cruzada**: Usada para montar a sonda do sensor.

4. **Gateway**: O sensor LoRaWAN transmite dados para um gateway LoRaWAN, que então os transmite para o servidor em nuvem. Se você não tiver um gateway, há duas opções:

- Opção 1: Sensores funcionam em áreas cobertas pela Helium Network (verifique no [Helium Explorer](https://explorer.helium.com/)). Onde quer que a rede Helium esteja disponível, você pode usar sensores para transferir dados sem comprar um gateway.
- Opção 2: Comprar um [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. Baixe o SenseCAP Mate App para configuração:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS&Android</div>

A preparação está concluída. Vamos começar!

### 2. Arquitetura de Rede

Vamos começar com a rede LoRaWAN.
O data logger converte os dados do sensor em dados LoRa e faz o upload dos dados para o gateway. O gateway faz o upload dos dados para o servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. Conecte o Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica

- **Passo 1:** Desaperte os três parafusos no data logger

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Passo 2:** Remova a tampa inferior e puxe a PCBA interna até que os terminais de parafuso fiquem acessíveis. Você não precisa retirar toda a placa

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Passo 3:** Remova a tampa roscada desparafusando-a no sentido horário e depois no sentido anti-horário

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Passo 4:** Passe o cabo incluído pela tampa roscada e pela tampa inferior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Passo 5:** Conecte os fios do cabo ao terminal de parafuso conforme a seguir

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Dicas**: Se você estiver usando outro protocolo, como 4-20mA, consulte a tabela de pinos:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Sequência de fios do Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica:

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image8.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image10.png"/></div>

- **Passo 6:** Recoloque o conjunto de hardware dentro do gabinete, feche pela tampa inferior e parafuse novamente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Passo 7:** Aperte a tampa roscada e fixe o cabo no lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Quando todas as conexões entre o Sensor Ultrassônico de Nível e o Data Logger estiverem concluídas, deverá ficar como abaixo

<div align="center"><img width={500} src="https://files.seeedstudio.com/products/101991101/image9.png"/></div>

### 4. Configurar as Definições para a Comunicação entre o Data Logger e o Sensor RS485 de Temperatura, Umidade do Ar e Pressão Barométrica

- **Passo 1:** Selecione **S2100 Data Logger** e clique em **Setup** na página de configuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Passo 2:** Pressione o botão e segure por **3** segundos, o LED verde piscará em frequência de 1 s. Em seguida, clique em **Scan** para começar a escanear o Bluetooth do data logger.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Passo 3:** Configure os parâmetros LoRaWAN e do sensor (incluindo o comando RS485 Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### Como importar o template

- **Passo 1:** Clique neste link de template e escolha seu navegador para baixá-lo.
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Passo 2:** Toque em "➕" no canto superior direito, selecione "import Template", depois selecione o arquivo baixado e o template será importado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Passo 3:** Clique em Send e teste o sensor clicando em **Measure**

A distância e a temperatura do sensor foram obtidas com sucesso!

### 5. Enviar os dados para o SenseCAP Portal e Mate App

- **Passo 1:** Volte para a página inicial do aplicativo e os LEDs vermelhos do Data Logger começarão a piscar por alguns segundos, seguidos pelos LEDs verdes piscando por um breve período de tempo para indicar que a conexão LoRaWAN foi bem-sucedida e que os dados foram enviados. Como alternativa, você pode clicar uma vez no botão do data logger para forçar esse envio de dados.
Antes de enviar dados, certifique-se de que o gateway está funcionando corretamente ou que há cobertura da rede Helium.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Agora precisamos adicionar este sensor à plataforma SenseCAP para visualizar os dados na nuvem

- **Passo 2:** Vincule o data logger escaneando o código QR.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Passo 3:** Verifique os dados no App e no Portal.(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. Teste o sensor em um ambiente real

Aplicação rápida à cena real externa para monitoramento de longo prazo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/products/101991101/image7.png"/></div>

Atualmente, um sensor LoRaWAN foi desenvolvido.

## Recursos

- **[PDF]** [Sensor RS485 de Temperatura do Ar, Umidade e Pressão Barométrica](https://files.seeedstudio.com/products/101991101/Air%20Temperature%20&%20Humidity%20&%20Barometric%20Sensor%20User%20Guide%20v1.0.pdf)
- **[PDF]** [Guia do Usuário do Registrador de Dados SenseCAP S2100](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
