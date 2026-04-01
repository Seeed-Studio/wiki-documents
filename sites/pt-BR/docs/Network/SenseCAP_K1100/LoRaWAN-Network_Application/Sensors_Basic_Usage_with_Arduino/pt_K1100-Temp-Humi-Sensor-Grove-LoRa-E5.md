---
description: Sensor Grove Temp&Humi (SHT40)
title: Sensor Grove Temp&Humi (SHT40)
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-Temp-Humi-Sensor-Grove-LoRa-E5
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100-Temp-Humi-Sensor-Grove-LoRa-E5/
---
# Sensor Grove Temp&Humi (SHT40)

Nesta seção, detalharemos como os sensores funcionam, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando o Wio Terminal & Grove - Wio-E5.

## Atualizável para sensores industriais

Com o controlador SenseCAP [S2110 controller](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [S2100 data logger](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, como também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A carcaça IP66, configuração via Bluetooth, compatibilidade com a rede global LoRaWAN®, bateria interna de 19 Ah e o poderoso suporte do APP tornam o [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade luminosa, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x em seu próximo projeto industrial de sucesso.

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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Data Logger</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temperatura &amp; Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temperatura &amp; Umidade do Ar &amp; CO2</strong></a></td>
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
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temperatura do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temperatura do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Princípio de funcionamento dos sensores

A temperatura SHT40 é medida usando um método de termopar. Um termopar consiste em dois tipos de fios metálicos de materiais diferentes. Uma extremidade dos dois fios é soldada para formar a extremidade de trabalho, que é colocada na temperatura a ser medida. A outra extremidade é chamada de extremidade livre e é conectada ao controle principal para formar um circuito fechado. Quando a temperatura da extremidade de trabalho e da extremidade livre é diferente, um potencial termoelétrico aparecerá no circuito, e a variação dessa tensão será enviada ao SCM por meio da conversão do circuito e transformada em um sinal que pode ser reconhecido pela máquina.

A umidade SHT40 é medida usando um filme de polímero de poliamina ou acetato (um composto altamente fracionado) depositado em dois eletrodos condutivos. Quando o filme absorve ou perde água, ele altera a constante dielétrica entre os dois eletrodos, o que, por sua vez, causa uma mudança na capacidade do capacitor. A variação da capacitância pode ser capturada e convertida usando circuitos de medição externos e, por fim, exibida como um sinal de fácil identificação na saída.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/165.png" /></div>

Para mais informações sobre o uso do Grove Temp&Humi Sensor consulte a referência [aqui](https://wiki.seeedstudio.com/pt-br/Grove-SHT4x/).

## Materiais necessários

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={160} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/SHT40.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Sensor Grove Temp&amp;Humi (SHT40)</td>
    </tr>
  </tbody></table>

## Preparação preliminar

### Conexão

Nesta rotina, precisamos nos conectar a um gateway LoRa® próximo com a ajuda do Grove - Wio-E5. Precisamos configurar a porta Grove no lado direito do Wio Terminal como uma porta serial por software para receber comandos AT. O Grove Temp&Humi Sensor (no lado esquerdo) deve ser conectado de acordo com o diagrama abaixo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/SHT40.jpg" /></div>

### Preparação de software

**Passo 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Passo 3.** Adicione o Wio Terminal à IDE Arduino.

Abra sua IDE Arduino, clique em `File > Preferences` e copie a URL abaixo em Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Passo 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde ao seu Arduino. Selecione o **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. Provavelmente será COM3 ou superior (COM1 e COM2 geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deverá ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
Para usuário Mac, será algo como `/dev/cu.usbmodem141401`.

Se você não conseguir enviar o sketch, geralmente é porque o Arduino IDE não conseguiu colocar o Wio Terminal em modo bootloader. (Porque o MCU foi interrompido ou o seu programa está manipulando o USB.) A solução alternativa é colocar o seu Wio Terminal em modo bootloader manualmente.
:::
 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Passo 5.** Baixar a biblioteca Grove - Wio-E5

Visite o repositório [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 6.** Adicionando bibliotecas ao Arduino IDE

Agora, a biblioteca do Acelerômetro Digital de 3 Eixos pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Disk91_LoRaE5` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obter o valor do Grove Temp&Humi Sensor (SHT40)

**Passo 1.** Baixar a biblioteca de código do Grove Temp&Humi Sensor

Visite o repositório [arduino-i2c-sht4x](https://github.com/Sensirion/arduino-i2c-sht4x) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-i2c-sht4x" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Visite o repositório [Sensirion Arduino Core Library](https://github.com/Sensirion/arduino-core) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/Sensirion/arduino-core" target="_blank" /></p><div align="center"><a href="https://github.com/Sensirion/arduino-core" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 2.** Adicionando bibliotecas ao Arduino IDE

Agora, a biblioteca do Grove Temp&Humi Sensor pode ser instalada no Arduino IDE. Abra o Arduino IDE e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `arduino-i2c-sht4x` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Passo 3.** Obter dados de temperatura e umidade do SHT40

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SHT40-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositório mostra os dados de temperatura e umidade obtidos. No código, usamos a função `measureHighPrecision()` para obter as informações de temperatura e umidade, que são positivas e em ponto flutuante.

```cpp
#include <Arduino.h>
#include <SensirionI2CSht4x.h>
#include <Wire.h>

SensirionI2CSht4x sht4x;

void setup() {

    Serial.begin(115200);
    while (!Serial) {
        delay(100);
    }

    Wire.begin();

    uint16_t error;
    char errorMessage[256];

    sht4x.begin(Wire);

    uint32_t serialNumber;
    error = sht4x.serialNumber(serialNumber);
    if (error) {
        Serial.print("Error trying to execute serialNumber(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Serial Number: ");
        Serial.println(serialNumber);
    }
}

void loop() {
    uint16_t error;
    char errorMessage[256];

    delay(1000);

    float temperature;
    float humidity;
    error = sht4x.measureHighPrecision(temperature, humidity);
    if (error) {
        Serial.print("Error trying to execute measureHighPrecision(): ");
        errorToString(error, errorMessage, 256);
        Serial.println(errorMessage);
    } else {
        Serial.print("Temperature:");
        Serial.print(temperature);
        Serial.print("\t");
        Serial.print("Humidity:");
        Serial.println(humidity);
    }
}
```

Abra o monitor serial do Arduino IDE, selecione a taxa de transmissão como 115200 e observe o resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/166.png" /></div>

## Enviar dados via Grove - Wio-E5

Combinamos o código anterior do Grove - Wio-E5 para conectar à rede LoRa®. Usando o comando AT é possível enviar o valor do Grove Temp&Humi Sensor para a rede LoRa®.

No código da seção anterior, sabemos que os valores de temperatura e umidade são geralmente uma combinação de dois inteiros e dois decimais, e todos são positivos, em ponto flutuante.

Devido às limitações de envio de dados, precisamos resolver o problema de converter números em ponto flutuante para inteiros no lado do envio para garantir que os dados enviados sejam inteiros, então multiplicamos todos os valores de temperatura e umidade por 100.

Dessa forma, determinamos o conteúdo, tamanho e formato dos dados a serem enviados via comando AT. Podemos muito bem definir um array grande o suficiente, armazenar as strings que precisamos enviar nesse array e, finalmente, usar a função **send_sync()** para enviar o array.

O pseudocódigo para a ideia acima é aproximadamente o seguinte.

```c
  ......
  error = sht4x.measureHighPrecision(temperature, humidity);

  int_temp = temperature*100;
  int_humi = humidity*100;

  static uint8_t data[4] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(int_temp, int_humi, data);

  if ( lorae5.send_sync(              //Sending the sensor values out
        8,                            // LoRaWan Port
        data,                         // data array
        sizeof(data),                 // size of the data
        false,                        // we are not expecting a ack
        7,                            // Spread Factor
        14                            // Tx Power in dBm
       ) 
  )
  ......
```

O restante do que precisamos fazer é usar a função `begin()` para inicializar o Grove - Wio-E5 e a função `setup()` para configurar as informações do triplete do Grove - Wio-E5. Quando enviamos uma mensagem de dados usando a função `send_sync()`, tentaremos ingressar no LoRaWAN® ao mesmo tempo e, assim que for bem-sucedido, os dados serão enviados e informações como intensidade do sinal e endereço serão retornadas.

O exemplo completo de código pode ser encontrado [aqui](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SHT40-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
Não recomendamos que você envie o código agora para ver os resultados, porque neste momento você ainda não configurou o Helium/TTN e obterá um resultado de "Join failed". Recomendamos que você envie este código depois de ter concluído o capítulo [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/) ou [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/) para completar o processo completo de envio de dados.
:::
Depois de ter experimentado e entendido como o Grove Temp&Humi Sensor funciona e o formato dos dados, continue com o próximo passo do tutorial para ingressar no LoRaWAN®.

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Seção Helium</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao Helium</strong><br /><br />Neste capítulo, apresentaremos os controles do console Helium que usamos para obter uma primeira impressão do console Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Helium-Introduction">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando ao Helium</strong><br /><br />Esta seção descreve como configurar o Helium para que os dados do sensor possam ser carregados e exibidos com sucesso no Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium">Ir para o capítulo &gt;</a></td>
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

## Suporte Técnico & Discussão de Produtos

Agradecemos por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
