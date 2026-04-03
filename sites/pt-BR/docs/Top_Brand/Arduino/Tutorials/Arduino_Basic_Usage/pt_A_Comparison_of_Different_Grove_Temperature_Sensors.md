---
description: Uma comparação entre diferentes sensores de temperatura Grove
title: Uma comparação entre diferentes sensores de temperatura Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /A_Comparison_of_Different_Grove_Temperature_Sensors
last_update:
  date: 02/02/2023
  author: w0x7ce
no_comments: false
createdAt: '2023-02-01'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/A_Comparison_of_Different_Grove_Temperature_Sensors/
---


A temperatura é um parâmetro físico muito importante para nossas vidas diárias. A medição de temperatura pode ser crítica em aplicações industriais e testes experimentais em laboratórios, alguns eletrodomésticos também exigem medição de temperatura para controle de temperatura.
A família Grove fornece até dez tipos de sensores que podem ser usados para medir temperatura. Todos eles apresentam alta confiabilidade e a interface Grove fácil de usar, mas têm suas diferenças e podem ser usados para diferentes projetos e aplicações.
Aqui neste wiki fazemos uma lista das principais características de vários sensores de temperatura Grove, incluindo custo, faixa de medição, precisão, sensibilidade, tempo de resposta, estabilidade em longo prazo e assim por diante. A tabela pode ser uma referência para você escolher o sensor ideal para seus projetos.

# Como escolher o sensor de temperatura ideal

Antes de olhar a tabela, há várias coisas que precisam ser consideradas para selecionar o sensor certo para o seu projeto.

### Primeiro, qual é o objeto a ser medido?

É a temperatura do ar ambiente no cômodo ou em um invólucro específico? É uma saída de ar para fluxo de ar ou um tanque de água para líquido? Ou talvez um sistema eletrônico que possa encontrar alta tensão e causar aquecimento? Coisas como essas afetariam a sua escolha de sensores com base no orçamento de custo, consumo de energia, fatores de segurança, tempo de resposta e até mesmo a distância do sensor ao instrumento. Por exemplo, se você estiver medindo a temperatura do seu quarto, talvez só precise de um termômetro barato e de baixo custo que não precise ser muito sensível. Mas se o seu objeto for uma estufa para cultivo de plantas, você talvez precise de um sensor altamente preciso e sensível que meça com exatidão tanto a temperatura quanto a umidade.

### Em segundo lugar, qual é a faixa esperada de temperatura a ser medida?

A faixa esperada de temperatura a ser medida é muito importante. Se a temperatura do objeto exceder a faixa de medição do sensor, isso pode resultar em dano irreversível ao módulo sensor ou até mesmo ao sistema conectado ao sensor.

### Outra consideração é: quanta precisão você precisa?

Sensores de temperatura como termopares têm faixa de medição muito ampla e são adequados para uso em ambientes severos, mas eles geralmente carecem de precisão e estabilidade em longo prazo. A precisão da medição é crítica em alguns casos, como dispositivos médicos, dispositivos vestíveis e algumas instalações domésticas etc. Sensores com maior precisão geralmente têm custo mais alto e precisam ser usados com muito cuidado para evitar danos físicos (alguns podem exigir que não se toque neles com a mão nua).

# Especificação

|Nome do Sensor de Temperatura|Interface|Faixa|Precisão|Sensibilidade|Folha de dados|
|-----------------------|---------|----|---------|-----------|----|
|[Temp&Humi Sensor](https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor/) | Digital | 0~50C|+-2C|1C|[DHT11](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor/res/DHT11.pdf)|
|[Temp&Humi Sensor Pro](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_and_Humidity_Sensor_Pro/) | Digital | -40~80C|+-0.5C|0.1C| [DHT22/AM2302](https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/res/AM2302.pdf) |
|[Temperature Sensor](https://wiki.seeedstudio.com/pt-br/Grove-Temperature_Sensor_V1.2/) | Analógica | -40~125C|+-1.5C|N/A|[NCP18WF104F03RC](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf) |
|[One Wire Temperature Sensor](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) | One Wire | -55~125C|+-0.5C|0.5C|[DS18B20](http://datasheets.maxim-ic.com/en/ds/DS18B20.pdf) |
|[High Temperature Sensor](https://wiki.seeedstudio.com/pt-br/Grove-High_Temperature_Sensor/) |Analógica|-50~600C|2%|N/A|Termopar tipo K|
|[Temperature&Humidity Sensor (High-Accuracy & Mini)](https://wiki.seeedstudio.com/pt-br/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/) |I2C|0~70C|+-0.5C|1C|[TH02](https://files.seeedstudio.com/wiki/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0/res/TH02_SENSOR.pdf) |
|[DIGITAL INFRARED TEMPERATURE SENSOR](https://wiki.seeedstudio.com/pt-br/Grove-Digital_Infrared_Temperature_Sensor/) |I2C|-40~85C|+-0.5C|0.02C|[MLX90615](https://files.seeedstudio.com/wiki/Grove-Digital_Infrared_Temperature_Sensor/res/MLX90615.pdf) |
|[Temperature&Humidity Sensor (SHT31)](https://wiki.seeedstudio.com/pt-br/Grove-TempAndHumi_Sensor-SHT31/) |I2C|-40~125C|+-0.3C|0.01C|[SHT31](https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip) |
|[INFRARED TEMPERATURE SENSOR](https://wiki.seeedstudio.com/pt-br/Grove-Infrared_Temperature_Sensor/) |Analógica|-10~100C|N/A|N/A|[OTP-538U](https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor/res/OTP-538Udatasheet.zip) |
|[Temperature&Humidity Sensor (HDC1000)](https://wiki.seeedstudio.com/pt-br/Grove-TemperatureAndHumidity_Sensor-HDC1000/) |I2C|-40~125C|+-0.2C|0.01C|[HDC1000](https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf) |
|[Barometer Sensor (BMP180)](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BMP180/) |I2C|-40~85C|+-0.5C|0.1C|[BMP180](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf) |
|[Barometer Sensor (BMP280)](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BMP280/) |I2C|-40~85C|+-0.5C|0.01C|[BMP280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf) |
|[Temp&Humi&Barometer Sensor (BME280)](https://wiki.seeedstudio.com/pt-br/Grove-Barometer_Sensor-BME280/) |I2C|-40~85C|+-0.5C|0.01C|[BME280](https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BME280/res/Grove-Barometer_Sensor-BME280-.pdf) |

Para mais detalhes, faça o download da lista abaixo.

[![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/list.png)](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/res/temperature%C2%A0sensor%20v2.xlsx)

# Groves

|Temp&Humi Sensor | Temp&Humi Sensor Pro | Termistor |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/1.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/2.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/3.jpg)|
|[Adquira agora!](https://www.seeedstudio.com/Grove-Temp%26Humi-Sensor-p-745.html)|[Adquira agora!](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-Pro-p-838.html)|[Adquira agora!](https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html)|

|Termopar | TH02| Infravermelho Digital|
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/4.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/5.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/6.jpg)|
|[Adquira agora!](https://www.seeedstudio.com/depot/Grove-High-Temperature-Sensor-p-1810.html)|[Adquira agora!](https://www.seeedstudio.com/Grove-Temperature%26Humidity-Sensor-(High-Accuracy-%26-Mini)-p-1921.html)|[Adquira agora!](https://www.seeedstudio.com/Grove-Digital-Infrared-Temperature-Sensor-p-2385.html)|

|SHT31| Infravermelho| HDC1000 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/7.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/8.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/9.jpg)|
|[Adquira agora!](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-SHT31-p-2655.html)|[Adquira agora!](https://www.seeedstudio.com/Grove-Infrared-Temperature-Sensor-p-1058.html)|[Adquira agora!](https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125)|

| BMP180 | BMP280 | BME280 |
|----------------------------|-------------------------------------|------------------------|
|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/10.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/11.jpg)|![](https://files.seeedstudio.com/wiki/Tutorial_Temperature_Sensor/img/12.jpg)|
|[Adquira agora!](https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html)|[Adquira agora!](https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html)|[Adquira agora!](https://www.seeedstudio.com/depot/Grove-TempHumiBarometer-Sensor-BME280-p-2653.html)|

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
