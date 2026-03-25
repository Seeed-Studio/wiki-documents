---
description: Sensor Ultrassônico de Nível RS485 500cm
title: Sensor Ultrassônico de Nível RS485 500cm
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor
last_update:
  date: 3/28/2023
  author: Yvonne
createdAt: '2023-03-28'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Sensor/SenseCAP/SenseCAP_Probe/RS485_500cm_Ultrasonic_Sensor/
---

# Sensor Ultrassônico de Nível RS485 500cm

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png"/></div>

O Sensor Ultrassônico de Nível RS485 500cm oferece alta precisão e possui uma faixa de medição de 25 a 500 cm. Ele utiliza tecnologia avançada de detecção ultrassônica para fornecer medições de distância precisas com resolução de até 1 mm. Também fornecemos ferramentas de porta serial para configuração de parâmetros e atualização de firmware para garantir uma operação perfeita, tornando-o ideal para uma variedade de aplicações, incluindo medição horizontal, sistemas inteligentes de gerenciamento de lixeiras, desvio de robôs e controle automático.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%202.png" border="0" /></a></p>

## Atualizável para Sensores Industriais

Com o SenseCAP S2100 [data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products), você pode facilmente transformar este sensor em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

# Brinque com o Data Logger LoRaWAN S2100

Nesta página, vamos guiá-lo pelo processo de conexão do Data Logger LoRaWAN S2100 com um Sensor Ultrassônico de Nível 500cm, permitindo que você crie um sensor sem fio LoRaWAN robusto, de nível industrial, que pode ser usado comercialmente em apenas cinco minutos.

## Começar

### Preparação

#### Hardware

##### Materiais necessários

<table align="center">
 <tr>
     <th>SenseCAP S2100 Data Logger</th>
      <th>Sensor Ultrassônico de Nível 500cm</th>
    <th>Chave de fenda Phillips</th>
 </tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%205.png" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%201.png" style={{width:500, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%206.png" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html?queryID=ec697c44483ad32db968bd7daaf7839d&objectID=5361&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/RS485-500cm-Ultrasonic-Level-Sensor-p-5588.html?queryID=b2f7f18dfc97aa5f70b2a759a49a00ab&objectID=5588&indexName=bazaar_retailer_products" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

## 1. Prepare o data logger, o Sensor Ultrassônico de Nível RS485 500cm, o gateway e as ferramentas

1. **Data logger**: É um conversor LoRaWAN que converte sensores MODBUS RS485/Analógico/GPIO em sensores habilitados para LoRa e, portanto, transfere dados por meio do protocolo LoRaWAN.

2. **Sensor Ultrassônico de Nível RS485 500cm**: Ele usa tecnologia de detecção ultrassônica para medição de distância. Faixa de medição de 25 cm a 500 cm, e a resolução pode chegar a 1 mm. Com um transdutor ultrassônico à prova d’água IP67, possui forte adaptabilidade ao ambiente de trabalho.
3. **Chave de fenda Phillips**: Usada para montar a sonda do sensor.
4. **Gateway**: O sensor LoRaWAN transmite dados para um gateway LoRaWAN, que então os transmite para o servidor em nuvem. Se você não tiver um gateway, há duas opções:

- Opção 1: Sensores funcionam em áreas cobertas pela Helium Network (verifique no [Helium Explorer](https://explorer.helium.com/)). Onde quer que a Helium Network esteja disponível, você pode usar sensores para transferir dados sem comprar um gateway.
- Opção 2: Comprar um [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).

5. Baixe o SenseCAP Mate App para configuração:

<div align="center"><img width={250} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%207.png"/></div>

<div align="center">SenseCAP Mate App iOS&Android</div>

A preparação está concluída. Vamos começar!

### 2. Arquitetura de Rede

Vamos começar com a rede LoRaWAN.
O data logger converte os dados do sensor em dados LoRa e faz o upload dos dados para o gateway. O gateway faz o upload dos dados para o servidor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%208.png"/></div>

### 3. Conecte o Sensor Ultrassônico de Nível RS485 500cm ao SenseCAP Data Logger

- **Passo 1:** Desparafuse os três parafusos no data logger

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Passo 2:** Remova a tampa inferior e puxe a PCBA interna até que os terminais de parafuso fiquem acessíveis. Você não precisa retirar toda a placa

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Passo 3:** Remova a tampa de rosca desparafusando no sentido anti-horário

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Passo 4:** Passe o cabo incluído pela tampa de rosca e pela tampa inferior

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Passo 5:** Conecte os fios do cabo ao terminal de parafuso conforme a seguir

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

**Dicas**: Se você estiver usando outro protocolo, como 4-20 mA, consulte a tabela de pinos:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2023.png"/></div>

Sequência de fios do Sensor Ultrassônico de Nível RS485 500cm:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2024.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2010.png"/></div>

- **Passo 6:** Recoloque o conjunto de hardware dentro da caixa, feche pela tampa inferior e parafuse novamente

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Passo 7:** Aperte a tampa de rosca e fixe o cabo no lugar

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Depois que todas as conexões forem feitas para o Sensor Ultrassônico de Nível e o Data Logger, deverá ficar como abaixo

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2013.png"/></div>

### 4. Configurar as Definições para Comunicação entre o Data Logger e o Sensor Ultrassônico de Nível RS485 500cm

- **Passo 1:** Selecione **S2100 Data Logger** e clique em **Setup** na página de configuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2014.png"/></div>

- **Passo 2:** Pressione o botão e segure por **3** segundos, o LED verde piscará com frequência de 1 s. Em seguida, clique em **Scan** para começar a escanear o Bluetooth do data logger.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2021.gif"/></div>

- **Passo 3:** Configure os parâmetros LoRaWAN e do sensor (incluindo o comando RS485 Modbus-RTU).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2015.png"/></div>

#### Como importar o template

- **Passo 1:** Clique neste link de template e escolha seu navegador para baixá-lo.
(http://sensecap.seeed.cc/portalapi/template/23ad5050-c24b-11ed-af3d-4b3b31721270)

- **Passo 2:** Toque em "➕" no canto superior direito, selecione "import Template", depois selecione o arquivo baixado, e o template será importado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2016.png"/></div>

- **Passo 3:** Clique em Send e teste o sensor clicando em **Measure**

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2017.png"/></div>

A distância e a temperatura do sensor foram obtidas com sucesso!

### 5. Enviar os dados para o SenseCAP Portal e o Mate App

- **Passo 1:** Volte para a página inicial do aplicativo e os LEDs vermelhos do Data Logger começarão a piscar por alguns segundos, seguidos pelos LEDs verdes piscando por um breve período para indicar que a conexão LoRaWAN foi bem-sucedida e os dados foram enviados. Alternativamente, você pode clicar uma vez no botão do data logger para forçar esse envio de dados.
Antes de enviar os dados, certifique-se de que o gateway esteja funcionando corretamente ou que haja cobertura da Helium Network.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Agora precisamos adicionar este sensor à plataforma SenseCAP para visualizar os dados na nuvem

- **Passo 2:** Vincule o data logger escaneando o código QR.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2018.png"/></div>

- **Etapa 3:** Verifique os dados no App e no Portal.(https://sensecap.seeed.cc/)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2019.png"/></div>

### 6. Teste o sensor em um ambiente real

Aplicação rápida em cena real ao ar livre para monitoramento de longo prazo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/RS485_500cm%20ultrasonic_sensor/image%2020.png"/></div>

Atualmente, um sensor LoRaWAN foi desenvolvido.

## Recursos

- **[PDF]** [RS485 500cm Ultrasonic Level Sensor](https://files.seeedstudio.com/wiki/RS485-Ultrasonic-Level-Sensor/RS485-500cm-Ultrasonic-Level-Sensor.pdf)
- **[PDF]** [SenseCAP S2100 Data Logger User Guide](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
