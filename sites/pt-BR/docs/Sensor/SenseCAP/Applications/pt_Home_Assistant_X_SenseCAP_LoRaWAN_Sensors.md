---
description: Dance com Home Assistant e sensores SenseCAP
title: Dance com Home Assistant e sensores SenseCAP
keywords:
  - LoRaWAN
  - Sensor
  - Home Assistant
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /home_assistant_with_sensecap_lorawan_sensors
last_update:
  date: 9/14/2023
  author: Jessie
createdAt: '2023-09-15'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/home_assistant_with_sensecap_lorawan_sensors/
---

Compartilhe uma forma de integrar sensores LoRaWAN® ao Home Assistant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527151/_HMPRnIpF0p.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={800} height="auto" /></p>

Já existem dispositivos inteligentes suficientes (sensores, luzes, interruptores) no playground de casa inteligente, e você provavelmente já tem vários aplicativos da Apple Homekit, Google Home e Amazon Alexa para atender a diferentes dispositivos. É altamente necessário conectar todos eles em um só lugar. Li recentemente, em setembro de 2022, a notícia de que o matter 1.0 foi lançado com o objetivo de unificar o ecossistema; porém, isso definitivamente levará tempo.

Na verdade, antes mesmo do lançamento do Matter anos atrás, o [Home Assistant](https://www.home-assistant.io/) já era uma das melhores plataformas para construir um ecossistema de casa inteligente totalmente personalizado, integrando dispositivos de principais marcas e configurando regras de automação para tornar sua casa um lugar melhor e mais inteligente. Isso é certamente algo que quero aprender e compartilhar a experiência.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527037/image_AC7YowxKbT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Nesta série de artigos, vou compartilhar como construo uma casa inteligente decente no Home Assistant e uso sensores dos produtos SenseCAP da Seeed Studio. E este é o primeiro marco.

Executar um Home Assistant do zero e integrar sensores meteorológicos SenseCAP.

Aqui estão os passos para chegar lá:

- Instalar o Home Assistant em um Raspberry Pi
- Colocar o sensor SenseCAP em funcionamento com o App
- Adicionar a integração MQTT e assinar os dados SenseCAP
- Adicionar entidades com diferentes valores de medição de sensores.
- Criar um dashboard de dados de sensores

### Instalar o Home Assistant em um Raspberry Pi

Para começar com o Home Assistant, o [tutorial oficial](https://www.home-assistant.io/getting-started/) é muito útil.

Existem muitos dispositivos e plataformas para executar o Home Assistant. Por acaso tenho um Raspberry Pi sem uso, então vou começar a partir de [aqui](https://www.home-assistant.io/installation/raspberrypi).

Em vez de usar o Balena Etcher para gravar o cartão SD, prefiro usar o [Raspberry Pi Imager](https://www.raspberrypi.com/software/) oficial; ele é leve e simples de usar.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527038/image_xXpG0MaQJS.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Consiga um cartão Micro SD maior que 32 GB e conecte-o ao seu computador; aqui eu uso um MacBook como exemplo.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527041/image_vb64IHZx5B.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Navegue até “Other specific-purpose OS” e selecione Home Assistant and Home Automation.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527042/image_xf5OXUliuo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Selecione Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527044/image_tIB5zVlxm5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Selecione a versão do Home Assistant OS para RPi4

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527045/image_UQdhYJt88T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Em seguida, selecione a unidade do cartão SD; tenha cuidado e NÃO escolha o disco errado, pois isso pode formatar sua unidade e fazer você perder todos os dados valiosos.

<img src="https://hackster.imgix.net/uploads/attachments/1527046/image_Le62Kc3fGH.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />
<img src="https://hackster.imgix.net/uploads/attachments/1527047/image_tiE1gwdlBw.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

Pode levar algum tempo para baixar a imagem do Home Assistant, dependendo da velocidade da sua internet.

Em seguida, insira o cartão micro SD no Raspberry Pi e conecte um cabo Ethernet a ele. Ligue o dispositivo; o LED vermelho deve permanecer vermelho e o LED verde começará a piscar. Se o LED verde não piscar, isso indica que algo deu errado durante a gravação da imagem.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527053/image_UaCcGJHjzs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

vá para `http://homeassistant.local:8123/` e espere a instalação terminar.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527051/image_rEn7iALm78.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={400} height="auto" /></p>

Seguindo este [link](https://www.home-assistant.io/getting-started/onboarding/) para registrar sua conta do Home Assistant e fazer login.

Bingo! Finalmente, você tem o seu Home Assistant instalado.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527055/image_5mAwRA0PMG.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Registrar o sensor SenseCAP com o App

SenseCAP é uma série de dispositivos sensores industriais e produtos gateway, entre os quais os sensores LoRaWAN S210x são construídos principalmente para cenários de longo alcance e alimentados por bateria.

Quero usar a recém-lançada [S2120 Weather Station](https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html) e instalá-la no topo do meu telhado, que tem 6 andares de altura, então o recurso de comunicação de longa distância do LoRa fez muito bem o trabalho. Ela já vem com todos os acessórios para uma instalação rápida.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527056/image_61yawsK9oe.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

A estação meteorológica funciona como um dispositivo LoRaWAN padrão, então posso usar um [gateway LoRaWAN interno SenseCAP M2](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-EU868-p-5471.html) em casa; ele tem uma antena de 3 dBi com base magnética.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527058/image_BRnDKw5tLD.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Em seguida, baixe o aplicativo SenseCAP Mate e registre uma conta.

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP/Tracker/app_downlaod.png" alt="pir" width={500} height="auto" /></p>

apenas para sua referência, este vídeo é da Seeed Studio e demonstra o processo básico de onboarding.

<div class="video-container">
<iframe class="youtube-video" src="https://youtu.be/TUQ9UmF7e7A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

Conecte o gateway LoRaWAN M2 à internet com um cabo Ethernet e conecte a antena antes de ligá-lo. Quando você vir o LED RGB do painel ficar verde, isso significa que o gateway está configurado corretamente.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527070/image_zEm7RxadAf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Agora vou registrar o gateway LoRaWAN M2

- Abra o Mate App e vá até a aba "device"<br/>
- Clique no ícone "+" no canto superior direito para escanear o código QR do gateway, que está na etiqueta do dispositivo.<br/>
- Dê um nome ao seu dispositivo e defina a localização.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527073/image_xoxYLPEmeE.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

da mesma forma, escaneie o código QR para registrar o sensor meteorológico S2120. Toque no sensor S2120; agora posso ver os dados meteorológicos.

- Temperatura do ar
- Umidade do ar
- Intensidade de luz
- Pressão barométrica
- Direção do vento
- Velocidade do vento
- Chuva por hora
- Índice UV

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527082/image_Tr85o39OKT.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
e agora é hora de subir ao meu telhado e instalá-lo em um mastro.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527110/img_3683_qMfEaREbxR.jpeg?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Eu também tenho outro [Sensor de CO2, temperatura e umidade S2103](https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html) e o [Sensor de umidade do solo, temperatura e EC S2105](https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html); eles compartilham os mesmos benefícios da série S210x e o processo de onboarding é o mesmo. E eles são de alta qualidade, com padrões industriais.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527107/image_Q55T2OnZjs.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

então também os adiciono ao SenseCAP Mate App e os instalo no meu quarto e no vaso de flores.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527108/image_rkLg6bXCX9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Agora, tenho tudo configurado do lado dos sensores SenseCAP.

### Adicionar integração MQTT

- **Por que preciso que os dados do sensor sejam integrados ao Home Assistant?**

`I can take advantage of the automation flow in Home Asssitant, and the SenseCAP App currently do not have that feature.`

- **Qual é o processo para levar os dados do SenseCAP para o Home Assistant?**

`Get your SenseCAP account API key<br/>
Read the SenseCAP open stream API document(MQTT)<br/>
Add MQTT integration in Home Assistant<br/>
Subscribe SenseCAP data via MQTT and using the API key<br/>`

- **Agora, vamos para o SenseCAP Portal, aqui você pode encontrar seu**

`OrgID` = ID da organização<br/>
`Password` = Chaves de acesso da API

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527113/image_Q3vkEnuKU2.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Minhas informações de inscrição MQTT são:

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527114/image_V4qotIEmN1.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>

Volte para a interface web do Home Assistant.

há muitas integrações no Home Assitant

https://www.home-assistant.io/integrations/

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527115/image_igs1T1yKAk.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Hoje eu vou usar a integração MQTT para assinar dados em formato JSON e usar a [integração de sensor MQTT](https://www.home-assistant.io/integrations/sensor.mqtt/) para vincular o valor do sensor a uma entidade específica.

Vá para Settings e entre em Devices & Services

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527116/image_udflzRbXDp.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
Clique no botão add integration e pesquise MQTT

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527118/image_VPTvmh0hMc.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Lembre-se de ativar a configuração avançada, se você esquecer de inserir o Client ID, a configuração falhará.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527120/image_y4yAFffD4f.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

então, você pode testar se a inscrição funciona clicando no botão CONFIGURE e escutando o tópico

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527123/image_Fku83wMfdA.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527121/image_G5lZNHW9P5.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

espere um pouco, haverá mensagem de sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527122/image_5pGjBZ4ZqZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={600} height="auto" /></p>
Até agora, o cliente MQTT foi configurado com sucesso.

### Adicionar entidades

Vou adicionar várias entidades para armazenar dados de medição do sensor, por exemplo, criar uma nova entidade "Air temperature" e pegar o valor da medição da mensagem JSON MQTT do S2120. E adicionar as outras entidades de sensores da mesma forma.

Vou finalizar isso editando o arquivo de configuração do Home Assistant

```cpp
configuration.yaml
```

vá para Settings e vá para Add-ons, então

<img src="https://hackster.imgix.net/uploads/attachments/1527130/image_em25CYMJaj.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" /><img src="https://hackster.imgix.net/uploads/attachments/1527131/image_DfFNubnQaf.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={470} height="auto" />

instale-o e habilite show in the sidebar e clique em start.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527132/image_RNwnNZNnBX.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

agora esta é a parte importante para modificar o arquivo YAML com os scripts abaixo

```cpp
mqtt:
  sensor:
    - name: "Air Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4097"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Air Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4098"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Light Intensity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4099"
      unit_of_measurement: "Lux"
      value_template: "{{ value_json.value }}"
    - name: "Barometric Pressure"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4101"
      unit_of_measurement: "Pa"
      value_template: "{{ value_json.value }}"
    - name: "Wind Direction"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4104"
      unit_of_measurement: "°"
      value_template: "{{ value_json.value }}"
    - name: "Wind Speed"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4105"
      unit_of_measurement: "m/s"
      value_template: "{{ value_json.value }}"
    - name: "Rainfall Hourly"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4113"
      unit_of_measurement: "mm/hour"
      value_template: "{{ value_json.value }}"
    - name: "UV Index"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C042400055/1/+/4190"
      unit_of_measurement: "UV"
      value_template: "{{ value_json.value }}"
    - name: "Soil Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Soil Moisture"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%"
      value_template: "{{ value_json.value }}"
    - name: "Electrical Conductivity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "dS/m"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Temperature"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4102"
      unit_of_measurement: "℃"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room Humidity"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4103"
      unit_of_measurement: "%RH"
      value_template: "{{ value_json.value }}"
    - name: "Bed Room CO2"
      state_topic: "/device_sensor_data/411841915123/2CF7F1C04160002C/1/+/4108"
      unit_of_measurement: "ppm"
      value_template: "{{ value_json.value }}"
```

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527133/image_sWi5PsDmyl.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

salve e vá para developer tools para verificar se o arquivo YAML está correto.

então, reinicie o Home Assistant

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527134/image_4eyghWeM61.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

após reiniciar, certifique-se de que o MQTT está escutando o tópico SenseCAP

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527135/image_2zfIHuOxvC.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

depois, vá para Settings -> Devices and Services -> Entities

uau~~~ todas as medições dos sensores estão listadas lá.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527136/image_nf7n2EARnh.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Criar um dashboard de dados de sensores

A última etapa é adicionar entidades de sensores a um dashboard.

vá para overview e encontre "Edit Dashboard"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527137/image_aUUUbBvb9V.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Escolha o cartão entities, este cartão pode incluir vários valores de sensores em um cartão.

Vou criar três cartões para cada sensor

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527138/image_Ebs1nBNDow.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Por fim, fiz a integração bem básica e mostrei os dados dos sensores SenseCAP no Home Assitant.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1527146/image_zV3lKcDL3T.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

Em seguida, vou gastar mais tempo otimizando a UI e deixando-a bonita.

e usando ESP32 para adicionar novos sensores ao Home Assistant.

### Recurso

[Tango com Home Assistant e SenseCAP Sensors](https://www.hackster.io/Pistachio9to5/tango-with-home-assistant-and-sensecap-sensors-1ee587)
