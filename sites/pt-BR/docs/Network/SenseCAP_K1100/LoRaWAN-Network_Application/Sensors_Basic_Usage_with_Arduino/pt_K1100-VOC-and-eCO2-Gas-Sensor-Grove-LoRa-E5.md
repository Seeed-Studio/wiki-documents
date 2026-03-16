---
description: Sensor de Gás Grove VOC e eCO2 (SGP30)
title: Sensor de Gás Grove VOC e eCO2 (SGP30)
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5/
---
# Sensor de Gás Grove VOC e eCO2 (SGP30)

Nesta seção, detalharemos como os sensores funcionam, como obter dados do sensor usando o Wio Terminal e como enviar esses dados usando o Wio Terminal & Grove - Wio-E5.

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) SenseCAP e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html), você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não apenas ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

A caixa com classificação IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria embutida de 19 Ah e o forte suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial bem-sucedido.

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
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. e Umidade do Ar</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. e Umidade do Ar &amp; CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></a></div>
      </td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank" /><div align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></a></div>
      </td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade &amp; Temp. do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade &amp; Temp. do Solo &amp; EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody></table>

## Princípio de Funcionamento dos Sensores

O SGP30 é um sensor de gás interno de óxido metálico com múltiplos elementos de detecção em um único núcleo. Ele incorpora quatro elementos de detecção de gás e possui um sinal de saída de qualidade do ar totalmente calibrado, destinado principalmente à detecção da qualidade do ar.

A parte sensora (MEMS) do SGP30 é baseada em um filme aquecido de nanopartículas de óxido metálico (MOx). O material sensível ao gás reage o oxigênio adsorvido nas partículas de óxido metálico com o gás-alvo, liberando assim elétrons. Isso resulta em uma mudança na resistência da camada de óxido metálico medida pelo sensor.

Em resumo, a presença do gás redutor faz com que a concentração de oxigênio na superfície do material sensível ao gás diminua, alterando a resistência (ou condutividade) do semicondutor. A subsequente detecção da resistência, o processamento do sinal e a conversão são realizados pela seção do circuito (ASIC).

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png" /></div>

Para mais informações sobre o uso do Sensor de Gás Grove VOC e eCO2, consulte a referência [aqui](https://wiki.seeedstudio.com/pt-br/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/).

## Materiais Necessários

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
      <td align="center"><div align="center"><img width={170} src="https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
      <td align="center">Sensor de Gás Grove VOC e eCO2 (SGP30)</td>
    </tr>
  </tbody></table>

## Preparação Preliminar

### Conexão

Nesta rotina, precisamos nos conectar a um gateway LoRa® próximo com a ajuda do Grove - Wio-E5. Precisamos configurar a porta Grove no lado direito do Wio Terminal como uma porta serial por software para receber comandos AT. Conecte o Sensor de Gás Grove VOC e eCO2 (no lado esquerdo) de acordo com o diagrama abaixo.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/K1100/sgp30.jpg" /></div>

### Preparação de Software

**Passo 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Passo 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Passo 3.** Adicione o Wio Terminal à IDE do Arduino.

Abra a sua IDE Arduino, clique em `File > Preferences` e copie a URL abaixo em Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Passo 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde ao seu Arduino. Selecione a **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. Provavelmente será COM3 ou superior (COM1 e COM2 geralmente são reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`.

Se você não conseguir fazer o upload do sketch, na maioria das vezes é porque a Arduino IDE não conseguiu colocar a Wio Terminal em modo bootloader. (Porque o MCU foi interrompido ou seu programa está manipulando o USB) A solução é colocar manualmente sua Wio Terminal em modo bootloader.
:::
 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Passo 5.** Baixar a biblioteca Grove - Wio-E5

Visite o repositório [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 6.** Adicionando bibliotecas à Arduino IDE

Agora, a biblioteca 3-Axis Digital Accelerometer pode ser instalada na Arduino IDE. Abra a Arduino IDE e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Disk91_LoRaE5` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obter o valor do Grove VOC and eCO2 Gas Sensor (SGP30)

**Passo 1.** Baixar a biblioteca de código do Grove VOC and eCO2 Gas Sensor

Visite o repositório [SGP30_Gas_Sensor](https://github.com/Seeed-Studio/SGP30_Gas_Sensor) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/SGP30_Gas_Sensor" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 2.** Adicionando bibliotecas à Arduino IDE

Agora, a biblioteca do Grove VOC and eCO2 Gas Sensor pode ser instalada na Arduino IDE. Abra a Arduino IDE e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `SGP30_Gas_Sensor` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Passo 3.** Obter dados de VOC e eCO2 do SGP30

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositório nos mostra os dados de VOC e eCO2 obtidos. No código, usamos a função `sgp_measure_signals_blocking_read()` para obter as informações de VOC e eCO2, que são positivas e inteiras.

```cpp
#include <Arduino.h>
#include "sensirion_common.h"
#include "sgp30.h"

void setup() {
    s16 err;
    u32 ah = 0;
    u16 scaled_ethanol_signal, scaled_h2_signal;
    Serial.begin(115200);
    Serial.println("serial start!!");

    /*  Init module,Reset all baseline,The initialization takes up to around 15 seconds, during which
        all APIs measuring IAQ(Indoor air quality ) output will not change.Default value is 400(ppm) for co2,0(ppb) for tvoc*/
    while (sgp_probe() != STATUS_OK) {
        Serial.println("SGP failed");
        while (1);
    }
    /*Read H2 and Ethanol signal in the way of blocking*/
    err = sgp_measure_signals_blocking_read(&scaled_ethanol_signal,
                                            &scaled_h2_signal);
    if (err == STATUS_OK) {
        Serial.println("get ram signal!");
    } else {
        Serial.println("error reading signals");
    }

    // Set absolute humidity to 13.000 g/m^3
    //It's just a test value
    sgp_set_absolute_humidity(13000);
    err = sgp_iaq_init();
}

void loop() {
    s16 err = 0;
    u16 tvoc_ppb, co2_eq_ppm;
    err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);
    if (err == STATUS_OK) {
        Serial.print("tVOC  Concentration:");
        Serial.print(tvoc_ppb);
        Serial.println("ppb");

        Serial.print("CO2eq Concentration:");
        Serial.print(co2_eq_ppm);
        Serial.println("ppm");
    } else {
        Serial.println("error reading IAQ values\n");
    }
    delay(1000);
}
```

Abra o monitor serial da Arduino IDE, selecione a taxa de baud como 115200 e observe o resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/171.png" /></div>

## Enviar dados via Grove - Wio-E5

Combinamos o código anterior do Grove - Wio-E5 para conectar à rede LoRa®. Usando o comando AT é possível enviar o valor do Grove VOC and eCO2 Gas Sensor para a rede LoRa®.

No código da seção anterior, sabemos que os valores de VOC e eCO2 são inteiros positivos. E o comprimento dos dois inteiros não excederá 8 bits.

Dessa forma, determinamos o conteúdo, tamanho e formato dos dados a serem enviados via comando AT. Podemos muito bem configurar um array grande o suficiente, armazenar as strings que precisamos enviar no array e, por fim, usar a função **send_sync()** para enviar o array.

O pseudo-código para a ideia acima é aproximadamente o seguinte.

```c
  ......
  s16 err = 0;
  u16 tvoc_ppb, co2_eq_ppm;
  err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);

  static uint8_t data[4] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(tvoc_ppb, co2_eq_ppm, data);

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

O restante que precisamos fazer é usar a função `begin()` para inicializar o Grove - Wio-E5 e a função `setup()` para configurar as informações de triplet do Grove - Wio-E5. Quando enviamos uma mensagem de dados usando a função `send_sync()`, tentaremos ingressar no LoRaWAN® ao mesmo tempo e, uma vez que isso seja bem-sucedido, os dados serão enviados e informações como intensidade de sinal e endereço serão retornadas.

O exemplo completo de código pode ser encontrado [aqui](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
Não recomendamos que você faça o upload do código agora para ver os resultados, porque neste momento você ainda não configurou o Helium/TTN e obterá um resultado de "Join failed". Recomendamos que você faça o upload deste código depois de ter concluído o capítulo [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/) ou [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/) para completar o processo completo de envio de dados.
:::
Depois que você tiver experimentado e entendido como o Grove VOC and eCO2 Gas Sensor funciona e o formato dos dados, por favor continue com o próximo passo do tutorial para ingressar no LoRaWAN®.

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
      <td align="left"><strong>Connecting to Helium</strong><br /><br />Esta seção descreve como configurar o Helium para que os dados do sensor possam ser carregados com sucesso e exibidos no Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium">Ir para o capítulo &gt;</a></td>
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
      <td align="left"><strong>Conectando ao TTN</strong><br /><br />Esta seção descreve como configurar o TTN para que os dados do sensor possam ser carregados e exibidos com êxito no TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN">Ir para o capítulo &gt;</a></td>
    </tr>
  </tbody></table>

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

## Declaração

- A marca LoRa® é uma marca registrada da Semtech Corporation ou de suas subsidiárias.
- LoRaWAN® é uma marca usada sob licença da LoRa Alliance®.
