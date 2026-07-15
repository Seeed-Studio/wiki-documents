---
description: Construa sensores LoRaWAN com SenseCAP Data Logger
title: Construa sensores LoRaWAN com SenseCAP Data Logger
keywords:
  - SenseCAP
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SenseCAP_Builder_build_LoRaWAN_Sensors
last_update:
  date: 11/20/2023
  author: Matthew
createdAt: '2023-01-16'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/SenseCAP_Builder_build_LoRaWAN_Sensors/
---

## Visão Geral

Você pode construir um sensor LoRaWAN industrial, personalizado e econômico usando sensores Grove, para conectar ao SenseCAP Cloud com SenseCAP Data Logger, possibilitando a transmissão de dados sem fio de longo alcance.

<div align="center"><img width={700} src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-e22011019-sensecap-s2110-lorawan-sensor-kit-first_1_.jpg"/></div>

## Preliminares

### Preparação de Hardware

Este wiki requer os seguintes produtos:

:::tip
Neste tutorial, é usado o Grove - Oxygen Sensor (MIX8410). Para mais módulos Grove disponíveis e o método de personalizar seus próprios módulos Grove, você pode verificar [aqui](https://记得加链接) e procurar mais informações.
:::

<div class="table-center">
  <table align="center">
    <tr>
        <th>SenseCAP S2110 Sensor Builder</th>
        <th>Grove - Oxygen Sensor (MIX8410)</th>
        <th>SenseCAP S2100 Data Logger/DTU</th>
    </tr>
    <tr>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SenseCAP_S2110_builder/SenseCAP-S2110-Sensor-Builder-105.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990680_preview-34.png" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/f/i/first_page_all-22.jpg" style={{width:250, height:'auto'}}/></div></td>
    </tr>
      <tr>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
          <a class="get_one_now_item" href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a>
      </div></td>
    </tr>
  </table>
</div>

### Preparação de Software

Baixe e instale o **SenseCAP Mate App** no seu celular de acordo com o seu sistema operacional.

- [Android](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate&hl=en&gl=US)
- [iOS](https://apps.apple.com/gb/app/sensecap-mate/id1619944834)

Se esta for a sua primeira vez usando a plataforma SenseCAP, registre uma conta primeiro clicando no botão **Register** e depois faça login com a conta recém-criada

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/2.jpg"/></div>

:::note
Os campos com * são obrigatórios, e aqueles sem * podem ser preenchidos opcionalmente.
:::

### Verificação de cobertura da rede LoRaWAN

Estamos usando a rede LoRaWAN aqui. Portanto, é necessário verificar se você está dentro da área de cobertura da rede LoRaWAN da Helium ou da TTN (The Things Network).

- [Ver mapa da rede Helium](https://explorer.helium.com/)
- [Ver mapa da rede TTN](https://www.thethingsnetwork.org/map)

:::note
Se você não tiver cobertura, pode usar qualquer gateway compatível com Helium/ TTN para enviar os dados do sensor para a nuvem.
- [SenseCAP M1 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M1-LoRaWAN-Indoor-Gateway-US915-p-5023.html) ou [SenseCAP M2 LoRaWAN Indoor Gateway](https://www.seeedstudio.com/SenseCAP-M2-Data-Only-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5342.html) ou qualquer outro gateway compatível com Helium para Helium.
- [SenseCAP Outdoor LoRaWAN Gateway](https://www.seeedstudio.com/LoRaWAN-Gateway-US915-p-4306.html) ou outro gateway compatível com TTN para TTN
:::

## Primeiros Passos

Agora podemos começar.

### 1. Conectar o sensor Grove ao SenseCAP S2110 Sensor Builder

- **Passo 1:** Desparafuse os quatro parafusos na tampa do SenseCAP S2110 Sensor Builder e abra a tampa

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/84.jpg"/></div>

- **Passo 2:** Remova a tampa roscada

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/78.jpg"/></div>

- **Passo 3:** Passe o cabo incluído pela tampa para dentro do SenseCAP S2110 Sensor Builder

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/79.jpg"/></div>

- **Passo 4:** Conecte os fios do cabo ao borne de parafuso da seguinte forma

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/86.jpg"/></div>

- **Passo 5:** Coloque um sensor Grove dentro do SenseCAP S2110 Sensor Builder e parafuse-o.

:::note
Grove com 2 furos (ex: Grove - Light Sensor v1.2)
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/80.jpg"/></div>
Grove com 3 furos (Grove Temperature and Barometer Sensor (BMP280))
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/81.jpg"/></div>
:::

- **Passo 6:** Conecte o cabo Grove ao sensor Grove e ao conector Grove na placa do SenseCAP S2110 Sensor Builder

- **Passo 7:** Feche a tampa e parafuse de volta

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/82.jpg"/></div>

- **Passo 8:** Aperte a tampa roscada e fixe-a no lugar

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/83.jpg"/></div>

### 2. Conectar o SenseCAP S2110 Sensor Builder ao SenseCAP Data Logger

- **Passo 1:** Desparafuse os três parafusos no data logger

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/70.jpg"/></div>

- **Passo 2:** Remova a tampa inferior e puxe a PCBA interna até que os bornes de parafuso fiquem acessíveis. Você não precisa retirar toda a placa

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/71.jpg"/></div>

- **Passo 3:** Remova a tampa roscada desparafusando no sentido anti-horário

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/72.jpg"/></div>

- **Passo 4:** Passe o cabo incluído pela tampa roscada e pela tampa inferior

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/73.jpg"/></div>

- **Passo 5:** Conecte os fios do cabo ao borne de parafuso da seguinte forma

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/74.png"/></div>

:::note
Como há 5 fios dentro do cabo e estamos usando apenas 4, é melhor isolar o fio extra para evitar contatos acidentais com os bornes de parafuso
:::

- **Passo 6:** Coloque novamente a unidade de hardware dentro do gabinete, feche pela tampa inferior e parafuse de volta

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/75.jpg"/></div>

- **Passo 7:** Aperte a tampa roscada e fixe o cabo no lugar

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/76.jpg"/></div>

Quando todas as conexões do SenseCAP S2110 Sensor Builder e do Data Logger estiverem concluídas, deverá ficar como abaixo:

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/93.jpg"/></div>

### 3. Conectar ao SenseCAP Cloud via SenseCAP Mate App

- **Passo 1:** Abra o SenseCAP Mate APP e faça login na sua conta SenseCAP inserindo seu **email e senha** registrados e clicando nos botões **Login**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/1.jpg"/></div>

:::note
Mantenha o **Server Location** como **Global**, que é o padrão
:::

#### a. Atualizar o firmware do Data Logger

- **Passo :** Na página **Config**, selecione **S2100 Data Logger**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/4.jpg"/></div>

- **Passo 2:** Pressione e segure o botão de configuração no SenseCAP Data Logger por 3 segundos para entrar no modo de pareamento bluetooth

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/96.jpg"/></div>

Se ele entrar no modo de pareamento bluetooth, um LED verde começará a piscar

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/99.gif"/></div>

- **Passo 3:** Clique em **Update**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/5.jpg"/></div>

- **Passo 4:** Agora será solicitado que você ative os serviços de localização. Clique em **GO TO** para abrir a página de serviços de localização no seu telefone

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/6.jpg"/></div>

- **Passo 5:** Ative os serviços de localização. No Android, ficará como a seguir

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/9.jpg"/></div>

- **Passo 6:** Volte para o SenseCAP Mate App e clique em **Scan**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/10.jpg"/></div>

Agora ele começará a procurar por SenseCAP Data Loggers próximos

- **Passo 7:** Clique no dispositivo encontrado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/11.jpg"/></div>

- **Passo 8:** Se uma atualização estiver disponível, clique em **Get Updates** para atualizar para a versão mais recente. Após atualizar para a versão mais recente ou se aparecer **The device is already running the latest firmware**, volte para a página de configuração anterior

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/12.jpg"/></div>

#### b. Configurar definições para a comunicação entre o Data Logger e o SenseCAP S2110 Sensor Builder

- **Passo 1:** Coloque o Data Logger novamente em **bluetooth pairing mode** e clique em **Setup**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/13.jpg"/></div>

- **Passo 2:** Clique no dispositivo encontrado

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/14.jpg"/></div>

Será aberta uma página com informações úteis em **General**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/15.jpg"/></div>

- **Passo 3:** Vá para a página **Setting** e em **Basic Setting**, escolha a plataforma como **SenseCAP for the Things Network** ou **SenseCAP for Helium**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/16.jpg"/></div>

**Nota:** Você também pode escolher outras, mas nesse caso, você não poderá usar a plataforma SenseCAP

- **Passo 4:** Escolha o **Frequency Plan**, **Uplink interval** e **Packet Policy**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/17.jpg"/></div>

:::note
O Packet Policy padrão é **2C+1N** e a tabela abaixo explica mais sobre ele e outros

| Parâmetro | Descrição |
|---|---|
| 2C+1N (padrão) | 2C+1N (2 pacotes confirmados e 1 não confirmado) é a melhor estratégia, esse modo pode minimizar a taxa de perda de pacotes, porém o dispositivo consumirá mais pacotes de dados na TTN ou créditos de dados na rede Helium. |
| 1C | 1C (1 confirmado) o dispositivo entrará em modo de espera após receber 1 pacote de confirmação do servidor. |
| 1N | 1N (1 não confirmado) o dispositivo apenas envia o pacote e então começa a entrar em modo de espera, não importando se o servidor recebeu os dados ou não. |

:::


- **Passo 5:** Em Sensor Setting, preencha da seguinte forma

| Parâmetro | Descrição |
|---|:---:|
| Protocol | RS485 Modbus RTU |
| Baud Rate | Taxa de transmissão da comunicação com o sensor. Selecione **9600** aqui. |
| Modbus Address | Endereço escravo do sensor. O intervalo é de 1 a 247. Insira **1** aqui. |
| Power Type | Alimentação periódica: Alimenta o sensor antes da coleta de dados e desliga o sensor após a coleta de dados. Este modo reduz o consumo de energia e aumenta a vida útil da bateria. Sempre ligado: Selecione este modo quando o sensor precisar de alimentação constante. Geralmente, é usada uma fonte de alimentação externa de 12V DC. Se for alimentado apenas por baterias, pode não funcionar por muito tempo. Selecione **periodic power** aqui. |
| Power Voltage | Selecione a tensão de alimentação do sensor. Suporta 3V/5V/12V. Selecione **5V** aqui. |
| Sensor Warm-up Time | O tempo de aquecimento indica o tempo necessário para que o sensor atinja seu nível máximo de precisão ou desempenho após a aplicação da tensão de alimentação. Isso depende de sensor para sensor. O Grove **Oxygen Sensor (MIX8410)** e o **CO2 & Temperature & Humidity Sensor(SCD41)** precisam de um tempo de aquecimento de **5s**, o que significa que você precisa inserir **5000** dentro da caixa. Os outros sensores Grove compatíveis com o SenseCAP S2110 Sensor Builder no momento precisam de apenas **0ms** de tempo de aquecimento. |
| Response Timeout | Depois que o Data Logger inicia uma solicitação de leitura de dados para o sensor, ele aguarda durante o tempo de timeout por uma resposta. Se esse tempo for excedido, o comando será reenviado. Insira **1** aqui, o que significa **100ms**. |
| Startup Time | O tempo necessário para que o sensor possa se comunicar desde que é ligado até se comunicar com o Modbus. Insira **20** aqui, o que significa **2000ms=2s** |

Uma página de configurações preenchida pode ser vista abaixo

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/18.jpg"/></div>

- **Passo 6:** Para o **Measurement Number**, consulte a tabela abaixo de acordo com o sensor específico.

<table>
<thead>
  <tr>
    <th>Nome do sensor Grove</th>
    <th>Measure Number</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Light Sensor v1.2</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Flame Sensor</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>1</td>
  </tr>
  <tr>
    <td>Grove - CO2 &amp; Temperature &amp; Humidity Sensor (SCD41)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove - Sunlight sensor (SI1151)</td>
    <td>3</td>
  </tr>
  <tr>
    <td>Grove Temperature and Barometer Sensor (BMP280)</td>
    <td>3</td>
  </tr>
</tbody>
</table>

:::note
O SenseCAP Data Logger pode coletar de 0 a 10 medições no modo RS485.
:::

- **Passo 7:** Após especificar o **Measurement Number**, você precisa preencher o **Measurement Settings**. Aqui vamos escolher um **Grove - Light Sensor v1.2**. Para este sensor, precisamos apenas de **uma medição**, que é o nível de luz. Selecione **1** para o **Measurement Number** e clique em **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/19.jpg"/></div>

- **Passo 8:** Em **Measurement Setting** clique em **Measurement1**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/20.jpg"/></div>

Se você usar o **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** precisamos de **três medições**, que são os **níveis de temperatura, umidade e CO2**. Selecione **3** para o **Measurement Number** e clique em **Measurement Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/23.jpg"/></div>

Além disso, aqui você precisa configurar as 3 medições separadamente

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/24.jpg"/></div>

- **Passo 9:** Para o **Register Address**, consulte a tabela abaixo e insira o **valor decimal** do **register address**

<table>
<thead>
  <tr>
    <th>Nome do sensor Grove</th>
    <th>Nome do registrador</th>
    <th>Endereço do registrador<br />(Hexadecimal)</th>
    <th>Endereço do registrador<br />(Decimal)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Grove - Oxygen Sensor (MIX8410)</td>
    <td>Oxigênio</td>
    <td>0x000E</td>
    <td>14</td>
  </tr>
  <tr>
    <td>Pressão atmosférica</td>
    <td>0x0018</td>
    <td>24</td>
  </tr>
  <tr>
    <td>Altura</td>
    <td>0x001A</td>
    <td>26</td>
  </tr>
  <tr>
     <td rowspan="4">Grove - Temperature Humidity Pressure Gas Sensor(BME680)</td>
     <td>Temperatura</td>
     <td>0x001C</td>
     <td>28</td>
  </tr>
  <tr>
    <td>Pressão atmosférica</td>
    <td>0x001E</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Umidade</td>
    <td>0x0020</td>
    <td>32</td>
  </tr>
  <tr>
    <td>Qualidade do ar(VOC)</td>
    <td>0x0022</td>
    <td>34</td>
  </tr>
  <tr>
    <td rowspan="4">Grove - Gas Sensor V2(Multichannel)</td>
    <td>N02</td>
    <td>0x0024</td>
    <td>36</td>
  </tr>
  <tr>
    <td>C2H50H</td>
    <td>0x0026</td>
    <td>38</td>
  </tr>
  <tr>
    <td>VOC</td>
    <td>0x0028</td>
    <td>40</td>
  </tr>
  <tr>
    <td>CO</td>
    <td>0x002A</td>
    <td>42</td>
  </tr>
  <tr>
    <td>Grove - UV Sensor</td>
    <td>Intensidade UV</td>
    <td>0x002C</td>
    <td>44</td>
  </tr>
  <tr>
    <td>Grove - Turbidity Sensor Meter V1.0</td>
    <td>Turbidez</td>
    <td>0x002E</td>
    <td>46</td>
  </tr>
  <tr>
    <td>Grove - TDS Sensor</td>
    <td>TDS</td>
    <td>0x0030</td>
    <td>48</td>
  </tr>
  <tr>
    <td>Grove - Ultrasonic Ranger</td>
    <td>Distância</td>
    <td>0x0032</td>
    <td>50</td>
  </tr>
</tbody>
</table>

Um endereço de registrador preenchido para o **Grove - Light Sensor v1.2** pode ser visto abaixo

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/21.jpg"/></div>

Endereços de registrador preenchidos para o **Grove - CO2 & Temperature & Humidity Sensor (SCD41)** podem ser vistos abaixo

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/26.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/28.jpg"/></div>

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/29.jpg"/></div>

- **Passo 10:** O restante das configurações é comum a todos os sensores Grove e deve ser preenchido da seguinte forma

| Function Code | Código de função Modbus. Selecione **03** aqui |
|---|---|
| Data Type | O tipo de dado determina o número de registradores lidos do sensor e como os dados devem analisar o valor. Selecione **Signed 32bit integer, 0xABCD** aqui. |
| Precision | Precisão do valor. Você pode escolher a casa decimal do valor da medição. Se 1 for selecionado, é reservada uma casa decimal. Selecione **2, #.##** aqui. |
| Y= Ax + B | “Y”: É o valor que o Data Logger enviará. “x”: É o valor atual original. Factory A: Valores personalizados que podem ser escalonados para cima ou para baixo por múltiplos de “x”. Factory B: Um valor personalizado que incrementa ou diminui o valor de “x”. Definindo os valores de A e B, você pode calcular o valor desejado. Se apenas valores brutos precisarem ser enviados, defina A=1 e B=0. Aqui definimos **Factory A como 0.001 e Factory B como 0**. |
| Write Strategy | Esta função é habilitada apenas para alguns sensores especiais e geralmente é desabilitada por padrão. Após ler o valor do registrador, instruções especiais podem ser enviadas ao sensor, como a instrução para esvaziar o registrador após ler o registrador 0. None: Desativado por padrão. After Read: Envia o comando RS485 ao sensor após ler o registrador. On New Data: Envia o comando RS485 ao sensor a cada 24 horas. Não precisamos de write strategy, então selecionamos **None** aqui |

Uma página de **Measurement Setting** preenchida pode ser vista abaixo

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/30.jpg"/></div>

- **Passo 11:** Clique em **Confirm** para salvar as alterações e ele voltará para a página **Setting**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/32.jpg"/></div>

- **Passo 12:** Clique em **Send** para enviar as alterações para o Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/33.jpg"/></div>

#### c. Testar e visualizar os dados do sensor localmente

Agora precisamos testar se o SenseCAP S2110 Sensor Builder está enviando corretamente os dados do sensor para o Data Logger.

- **Passo 1:** Vá para General e clique em **Measure**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/34.jpg"/></div>

Agora ele exibirá o valor do sensor e você verá os LEDs do Seeed Studio XIAO RP2040 no SenseCAP S2110 Sensor Builder acendendo.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Abaixo está para **Grove - Oxygen Sensor (MIX8410)**. Isso indica a concentração de oxigênio do ar, que é 21,36%.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/35.jpg"/></div>

Abaixo está para **Grove Temperature and Barometer Sensor (BMP280)**. Isso indica a temperatura barométrica como 30,55°C, a pressão atmosférica como 101401Pa e a altura como 53,08m.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/36.jpg"/></div>

#### d. Adicionar o sensor recém-criado à plataforma SenseCAP

- **Passo 1:** Volte para a página inicial do app e os LEDs vermelhos do Data Logger começarão a piscar por alguns segundos, seguidos pelos LEDs verdes piscando por um breve período de tempo para indicar que a conexão LoRaWAN foi bem-sucedida e que os dados foram enviados. Como alternativa, você pode clicar uma vez no botão do data logger para forçar o envio desses dados.

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/100.gif"/></div>

Você também verá os LEDs do Seeed Studio XIAO RP2040 no SenseCAP S2110 Sensor Builder acendendo

<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/101.gif"/></div>

Agora precisamos adicionar este sensor à plataforma SenseCAP para visualizar os dados na nuvem

- **Passo 2:** Vá para a página **Device**, clique no símbolo **+** e clique em **Add device**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/39.jpg"/></div>

- **Passo 3:** Escaneie o código QR localizado no Data Logger

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/40.jpg"/></div>

- **Passo 4:** Insira um **Device name** de acordo com o sensor Grove conectado e clique em **Next**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/41.jpg"/></div>

- **Passo 5:** Insira um **Device Location** e clique em **Confirm**

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/42.jpg"/></div>

### 4. Visualizar dados do sensor no aplicativo SenseCAP Mate

Agora você verá o Data Logger online no aplicativo SenseCAP Mate

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/43.jpg"/></div>

Clique nele para exibir os valores do sensor

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/45.jpg"/></div>

Abaixo está para **Grove Temperature and Barometer Sensor (BMP280)**.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/44.jpg"/></div>

### 5. (opcional) Visualizar dados do sensor no SenseCAP Dashboard

Você também pode usar o SenseCAP Web Dashboard para visualizar os dados do sensor.

- **Passo 1:** Acesse sensecap.seeed.cc e faça login na sua conta SenseCAP que você criou anteriormente no aplicativo SenseCAP Mate.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/88.png"/></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/87.png"/></div>

- **Passo 2:** Clique em **Sensor Node** e selecione o sensor que criamos anteriormente no aplicativo SenseCAP Mate.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/89.png"/></div>

- **Passo 3:** Clique na aba **Data** e você verá todos os dados do sensor exibidos a partir do sensor Grove conectado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/SenseCAP-S2110/90.jpg"/></div>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
