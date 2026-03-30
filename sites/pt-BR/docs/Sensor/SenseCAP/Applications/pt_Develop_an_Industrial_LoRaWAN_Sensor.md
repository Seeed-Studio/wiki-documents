---
description: 5 Minutos para Desenvolver um Sensor LoRaWAN Industrial
title: 5 Minutos para Desenvolver um Sensor LoRaWAN Industrial
keywords:
  - LoRaWAN
  - Sensor
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /develop_an_industrial_lorawan_sensor
last_update:
  date: 9/15/2023
  author: Jessie
createdAt: '2023-09-15'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/develop_an_industrial_lorawan_sensor/
---

Vamos construir rapidamente um sensor sem fio LoRaWAN de nível industrial para uso comercial direto em 5 minutos.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519816/_CFY3itZc4v.blob?auto=compress%2Cformat&w=900&h=675&fit=min" alt="pir" width={600} height="auto" /></p>

Ao fazer o protótipo para um projeto comercial de aquisição de dados, leva-se muito tempo e custo para prototipar. Por exemplo, precisamos fazer um sensor de pH sem fio para um projeto agrícola. Precisamos 1) Encontrar a placa de desenvolvimento e a sonda do sensor. 2) Escrever o código. 3) Imprimir em 3D o invólucro. 4) Fazer o teste de montagem final. Quando concluímos o protótipo, isso pode levar dias ou até semanas.

Hoje, podemos usar um coletor sem fio LoRa, configurar sensores para se conectarem a um app via Bluetooth e construir um produto em cinco minutos, diretamente em um projeto comercial.

### Preparação

Prepare o registrador de dados, a sonda do sensor, o gateway e as ferramentas.

1) [Data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html): É um conversor LoRaWAN que converte sensores MODBUS RS485/Analógico/GPIO em sensores habilitados para LoRa e, portanto, transfere dados por meio do protocolo LoRaWAN.

2) Sonda do sensor: prepare uma sonda de sensor com um cabo e saída de um dos sinais de RS485 / 4-20mA /0-10V / pulso/nível. Este tutorial usa um sensor ultrassônico RS485 para medição de nível de líquido.

3) Chave de fenda Phillips: Usada para montar a sonda do sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519859/image_iq7PU8q7nt.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

4) Gateway: O sensor LoRaWAN transmite dados para um gateway LoRaWAN, que, por sua vez, os transmite para o servidor em nuvem. Se você não tiver um gateway, há duas opções:

**Opção 1**: Os sensores funcionam em áreas cobertas pela Helium Network (verifique no [Helium Explorer](https://explorer.helium.com/)). Onde quer que a rede Helium esteja disponível, você pode usar sensores para transferir dados sem comprar um gateway.
**Opção 2**: Comprar um [gateway](https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html).
5) Baixe o app SenseCAP Mate para configuração:

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519867/image_hQX9CstNtP.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={500} height="auto" /></p>

A preparação está concluída. Vamos começar!

### Arquitetura de Rede

Vamos começar com a rede LoRaWAN.

O registrador de dados converte os dados do sensor em dados LoRa e faz o upload dos dados para o gateway. O gateway faz o upload dos dados para o servidor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519879/image_SUwd9Yyglx.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Conecte o Sensor

1) Desmonte o Data Logger.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519881/image_TmNcqHz98z.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

2) Conecte o sensor ao terminal e alimente o sensor por meio de uma bateria interna.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519884/image_XZETiBWTBz.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

:::info Dica
Se você estiver usando outro protocolo, como 4-20mA, consulte a tabela de pinos:
:::

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519889/image_RHiaxQkid9.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) Monte o sensor.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519904/image_6qTGLlXoOZ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519908/image_LDPEOEC9ik.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519912/image_jStYF3uKW6.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Configure o sensor via App

1) Abra e faça login no app SenseCAP.

2) Selecione "S2100 Data Logger" e clique em “Setup” na página de configuração.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1519915/image_au0YfmfVoo.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>
3) Pressione o botão e mantenha pressionado por 3 segundos; o LED verde piscará em frequência de 1s. Em seguida, clique em “Scan” para começar a escanear o Bluetooth do data logger.

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520082/video_ZKG2GDw54j.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

4) Configure os parâmetros do lorawan e do sensor (inclui comando RS485 Modbus-RTU).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520084/image_tAKr7NohSn.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

```cpp
#########Basic Setting#############
Platform: 
    -SenseCAP for helium (use helium network)
    -SenseCAP for The Things Network (use SenseCAP gateway)
Frequency Plan: EU868 (Select this based on the frequency or region of the gateway)
Uplink Interval: 5 min
Packet Policy: 2C+1N (use the default parameter)

#########Sensor Setting#############
Protocol: RS485 Modbus RTU
Baud Rate: 9600
Modbus Address: 128 (Sensor's modbus address)
Power Type: Periodic power (Power the sensor before data collection, and power off the sensor after data collection)
Power Voltage: 5V
Sensor Warm-up Time: 100ms
Response Timeout: 100ms
Startup Time: 100ms
Measurement Number: 2 (distance and temperature)

#########Measurement1#############
Register Address: 256 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 1 (Y=Ax+B, “Y”: It is the value of Data Logger will upload.
“x”: It is the original current value.If only raw values are uploaded, set A=1 and B=0.)
FactoryB: 0
Write Strategy: None

#########Measurement2#############
Register Address: 258 (DEC)
Function code: 03
Data Type: Unsigned 16bit integer,0xAB
Precision: 0,# (No decimal number)
FactoryA: 0.1 (The final value is divided by 10)
FactoryB: 0
Write Strategy: None
```

5) Clique em Send e teste o sensor clicando em "Measure"

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520088/image_iAmOflFRIQ.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

A distância e a temperatura do sensor foram obtidas com sucesso!

### Envie os dados para o SenseCAP Portal e o Mate App

Antes de enviar dados, certifique-se de que o gateway esteja funcionando corretamente ou que haja cobertura da rede Helium.

1) O app retorna para a página inicial e desconecta a conexão Bluetooth. O data logger tentará se juntar à rede LoRaWAN.

Aguardando para se juntar à rede LoRa: luz vermelha respirando piscando
Junção bem-sucedida à rede LoRa: o LED verde pisca rapidamente por 2s

<center>
<iframe width="220" height="380" src="https://hackster.imgix.net/uploads/attachments/1520108/video(1)_yWY0orezqU.gif?auto=compress&gifq=35&w=740&h=555&fit=max&fm=mp4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

2) Faça o vínculo do data logger escaneando o código QR.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520115/image_9JdYx3MCrg.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

3) Verifique os dados no app e no Portal (https://sensecap.seeed.cc/).

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520128/image_K6j6TDHXX4.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

### Teste o sensor em um ambiente real

Aplicação rápida ao cenário real ao ar livre para monitoramento de longo prazo.

<p style={{textAlign: 'center'}}><img src="https://hackster.imgix.net/uploads/attachments/1520150/image_MoA2h9E8lq.png?auto=compress%2Cformat&w=740&h=555&fit=max" alt="pir" width={800} height="auto" /></p>

No momento, um sensor LoRaWAN foi desenvolvido.

Venha experimentar novas soluções para o seu projeto!

### Recursos

[5 Minutes to Develop an Industrial LoRaWAN Sensor](https://www.hackster.io/jenkinlu001/5-minutes-to-develop-an-industrial-lorawan-sensor-6631dc)

[SenseCAP S2100 Data Logger User Guide](https://files.seeedstudio.com/products/SenseCAP/S2100/SenseCAP%20S2100%20LoRaWAN%20Data%20Logger%20User%20Guide.pdf)
