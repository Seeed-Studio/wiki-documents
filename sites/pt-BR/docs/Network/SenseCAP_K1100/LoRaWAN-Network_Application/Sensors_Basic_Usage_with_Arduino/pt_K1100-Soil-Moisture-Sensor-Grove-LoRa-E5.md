---
description: Sensor de Umidade do Solo Grove
title: Sensor de Umidade do Solo Grove
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-Soil-Moisture-Sensor-Grove-LoRa-E5
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5/
---
# Sensor de Umidade do Solo Grove

Nesta seção, detalharemos como os sensores funcionam, como obter dados do sensor usando o Wio Terminal e como enviar os dados usando Wio Terminal & Grove - Wio-E5.

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você com a prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr>
      <td colSpan={4} bgcolor="#0e3c49" align="center">
        <font color="white" size={4}>
          <strong>Sensor Industrial SenseCAP</strong>
        </font>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp do Ar &amp; Umidade</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp do Ar &amp; Umidade &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" />
          </a>
        </div>
      </td>
      <td bgcolor="#0e3c49">
        <div align="center">
          <a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank">
            <img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" />
          </a>
        </div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Princípio de Funcionamento dos Sensores

Nesta seção, primeiro daremos uma breve introdução aos sensores de umidade do solo para ajudar você a entender com mais clareza como os sensores funcionam.

O Grove - Soil Moisture Sensor pode medir a umidade do solo para plantas. O sensor de umidade do solo consiste em duas sondas que permitem que a corrente passe através do solo e, em seguida, obtenha valores de resistência para medir o conteúdo de umidade do solo. Ele pode ser usado para decidir se as plantas em um jardim precisam de irrigação. Você também pode usar sensores de umidade do solo em jardins para automatizar a irrigação das plantas. Ele pode ser usado com muita facilidade, apenas inserindo o sensor no solo e lendo a saída usando o ADC.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/162.jpg" /></div>

Para mais informações sobre o uso de sensores de umidade do solo, consulte a referência [aqui](https://wiki.seeedstudio.com/pt-br/Grove-Moisture_Sensor/).

## Materiais Necessários

<table align="center">
  <tbody>
    <tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={310} src="https://files.seeedstudio.com/wiki/Grove_Moisture_Sensor/images/Moisture_sensor_.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Sensor de Umidade do Solo Grove</td>
    </tr>
  </tbody>
</table>

## Preparação Preliminar

### Preparação de software

**Etapa 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Etapa 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Etapa 3.** Adicione o Wio Terminal à IDE do Arduino.

Abra sua IDE Arduino, clique em `File > Preferences` e copie a URL abaixo em Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Etapa 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde ao seu Arduino. Selecione o **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. É provável que seja COM3 ou superior (COM1 e COM2 geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`.

Se você não conseguir enviar o sketch, na maioria das vezes é porque a IDE Arduino não conseguiu colocar o Wio Terminal no modo bootloader. (Porque o MCU foi interrompido ou seu programa está manipulando o USB) A solução é colocar o seu Wio Terminal no modo bootloader manualmente.
:::
<div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Passo 5.** Baixar a biblioteca Grove - Wio-E5

Visite o repositório [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) e baixe todo o repositório para o seu drive local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 6.** Adicionando bibliotecas à IDE Arduino

Agora, a biblioteca do Acelerômetro Digital de 3 Eixos pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Disk91_LoRaE5` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obter o valor do Sensor de Umidade do Solo

**Passo 1.** Conectando sensores

Se você quiser usar o sensor de umidade do solo, certifique-se de conectar o sensor de solo à porta Grove no lado **direito** do Wio Terminal e conectar o Grove - Wio-E5 à porta Grove no **lado esquerdo**. Isso é diferente de outros sensores.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/LoraWANdevKit/lorawandevkit33.jpg" /></div>

:::tip
O motivo pelo qual o método de fiação do sensor de umidade do solo é diferente de outros sensores é que ele ocupa uma interface de entrada analógica, que a interface IIC do lado esquerdo não possui, portanto o valor de tensão retornado pelo sensor de umidade do solo não pode ser obtido.
:::
**Passo 2.** Obter o valor de umidade do sensor de umidade do solo.

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-soil-moisture-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-soil-moisture-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositório demonstra como usar o sensor de umidade do solo. O sensor de umidade do solo usa uma interface analógica onde você pode simplesmente ler o valor de umidade do solo lendo seus pinos.

```cpp
int sensorPin = A0;
int sensorValue = 0;

void setup() {
    Serial.begin(9600);
}
void loop() {
    // read the value from the sensor:
    sensorValue = analogRead(sensorPin);
    Serial.print("Moisture = " );
    Serial.println(sensorValue);
    delay(1000);
}
```

Abra o monitor serial da IDE Arduino, selecione a taxa de baud como 9600 e observe o resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/164.png" /></div>

## Enviar dados via Grove - Wio-E5

Combinamos o código anterior do Grove - Wio-E5 para conectar à rede LoRa®. Usando o comando AT é possível enviar o valor do sensor de umidade do solo para a rede LoRa®.

Como sabemos a partir do código na seção acima para obter o valor do sensor de umidade do solo, o valor de umidade do solo obtido é um dado inteiro de menos de oito bits.

Dessa forma, determinamos o conteúdo, tamanho e formato dos dados a serem enviados via comando AT. Podemos muito bem configurar um array grande o suficiente, armazenar as strings que precisamos enviar no array e, por fim, usar a função **send_sync()** para enviar o array.

O pseudocódigo para a ideia acima é aproximadamente o seguinte.

```c
  ......
  sensorValue = analogRead(sensorPin);

  static uint8_t data[2] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(sensorValue, data);

  if ( lorae5.send_sync(              //Sending the sensor values out
        8,                            // LoRaWan Port
        data,                         // data array
        sizeof(data),                 // size of the data
        false,                        // we are not expecting a ack
        7,                            // Spread Factor
        14                            // Tx Power in dBm
       ) 
  )
  .......
```

O resto do que precisamos fazer é usar a função `begin()` para inicializar o Grove - Wio-E5 e a função `setup()` para configurar as informações do triplete do Grove - Wio-E5. Quando enviamos uma mensagem de dados usando a função `send_sync()`, tentaremos ingressar no LoRaWAN® ao mesmo tempo e, assim que isso for bem-sucedido, os dados serão enviados e informações como intensidade do sinal e endereço serão retornadas.

O exemplo de código completo pode ser encontrado [aqui](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Soil-moisture-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
Não recomendamos que você envie o código agora para ver os resultados, porque neste ponto você ainda não configurou o Helium/TTN e obterá um resultado de "Join failed". Recomendamos que você envie este código depois de concluir o capítulo [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/) ou [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/) para completar o processo completo de envio de dados.
:::
Depois que você tiver experimentado e entendido como o sensor de umidade do solo funciona e o formato dos dados, continue com o próximo passo do tutorial para ingressar no LoRaWAN®.

<table align="center">
  <tbody>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Seção Helium</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao Helium</strong><br /><br />Neste capítulo, apresentaremos os controles do console Helium que usamos para obter uma primeira impressão do console Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Helium-Introduction">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando ao Helium</strong><br /><br />Esta seção descreve como configurar o Helium para que os dados do sensor possam ser enviados com sucesso e exibidos no Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Seção TTN</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao TTN</strong><br /><br />Neste capítulo, apresentaremos os controles do console TTN que usamos para obter uma primeira impressão do console TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/TTN-Introduction">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando ao TTN</strong><br /><br />Esta seção descreve como configurar o TTN para que os dados do sensor possam ser enviados com sucesso e exibidos no TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN">Ir para o capítulo &gt;</a></td>
    </tr>
  </tbody></table>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca comercial da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
