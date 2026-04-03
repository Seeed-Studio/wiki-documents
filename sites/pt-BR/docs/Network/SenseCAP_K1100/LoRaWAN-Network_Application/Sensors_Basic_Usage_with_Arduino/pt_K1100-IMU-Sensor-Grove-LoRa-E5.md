---
description: Sensor IMU do Wio Terminal
title: Sensor IMU do Wio Terminal
keywords:
  - SenseCap
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /K1100-IMU-Sensor-Grove-LoRa-E5
last_update:
  date: 1/12/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/K1100-IMU-Sensor-Grove-LoRa-E5/
---
# Sensor IMU do Wio Terminal

Nesta seção, detalharemos como os sensores funcionam, como obter dados de sensores usando o Wio Terminal e como enviar esses dados usando o Wio Terminal e o Grove - Wio-E5.

## Atualizável para Sensores Industriais

Com o [controlador S2110](https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html) e o [registrador de dados S2100](https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html) da SenseCAP, você pode facilmente transformar o Grove em um sensor LoRaWAN®. A Seeed não só ajuda você na prototipagem, mas também oferece a possibilidade de expandir seu projeto com a série SenseCAP de robustos [sensores industriais](https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP).

O gabinete com classificação IP66, a configuração via Bluetooth, a compatibilidade com a rede global LoRaWAN®, a bateria interna de 19 Ah e o poderoso suporte do APP fazem do [SenseCAP S210x](https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device) a melhor escolha para aplicações industriais. A série inclui sensores para umidade do solo, temperatura e umidade do ar, intensidade de luz, CO2, EC e uma estação meteorológica 8 em 1. Experimente o mais recente SenseCAP S210x para o seu próximo projeto industrial de sucesso.

<table style={{marginLeft: 'auto', marginRight: 'auto'}}>
  <tbody>
    <tr><td colspan="4" bgcolor="#0e3c49" align="center"><font color="white" size="4"><strong>Sensor Industrial SenseCAP</strong></font></td></tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html" target="_blank"><strong>S2100 <br /> Registrador de Dados</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html" target="_blank"><strong>S2101 <br /> Temp. do Ar e Umidade</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html" target="_blank"><strong>S2102 <br /> Luz</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html" target="_blank"><strong>S2103 <br /> Temp. do Ar, Umidade e CO2</strong></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png" /></div></a></td>
      <td bgcolor="#0e3c49"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><div align="center"><img width="100%" src="https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png" /></div></a></td>
    </tr>
    <tr>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html" target="_blank"><strong>S2104 <br /> Umidade e Temp. do Solo</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html" target="_blank"><strong>S2105 <br /> Umidade e Temp. do Solo e EC</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html" target="_blank"><strong>S2110 <br /> Controlador LoRaWAN®</strong></a></td>
      <td bgcolor="#0e3c49" align="center"><a href="https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html" target="_blank"><strong>S2120 <br /> Estação Meteorológica 8 em 1</strong></a></td>
    </tr>
  </tbody>
</table>

## Princípio de Funcionamento dos Sensores

Nesta seção, precisamos aprender a usar o sensor IMU integrado ao Wio Terminal.

O sensor de aceleração LIS3DHTR é um sensor piezoelétrico, que converte a aceleração do objeto a ser medido em variação da tensão da unidade sensora e, em seguida, converte o valor da variação da unidade sensora em um valor de tensão por meio de um circuito de conversão, seguido da amplificação correspondente do sinal e do processo de filtragem para processar a grandeza analógica em um sinal de saída adequado e estável; nesse momento, o sinal de saída é um valor de tensão, que é finalmente convertido em um sinal digital por meio de um conversor ADC.

<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/137.png" /></div>

Para mais informações sobre o uso de sensores IMU consulte a referência [aqui](https://wiki.seeedstudio.com/pt-br/Wio-Terminal-IMU-Overview/).

## Materiais Necessários

<table align="center">
  <tbody><tr>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg" /></div></td>
      <td align="center"><div align="center"><img width={210} src="https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png" /></div></td>
    </tr>
    <tr>
      <td align="center">Wio Terminal</td>
      <td align="center">Grove - Wio-E5</td>
    </tr>
  </tbody></table>

## Preparação Preliminar

### Conexão

Nesta rotina, precisamos conectar a um gateway LoRa® próximo com a ajuda do Grove LoRa® E5. Precisamos configurar a porta Grove no lado direito do Wio Terminal como uma porta serial por software para receber comandos AT.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/wiolora.jpg" /></div>

:::note
Por que não usar a porta Grove do lado esquerdo?
> A interface Grove do lado esquerdo é compatível com IIC, e usamos a interface IIC para a maioria dos sensores, portanto mantê-la livre é uma solução melhor.
:::

### Preparação de Software

**Etapa 1.** Você precisa instalar o software Arduino.

<div>
  <p style={{}}><a href="https://www.arduino.cc/en/Main/Software" target="_blank" /></p><div align="center"><a href="https://www.arduino.cc/en/Main/Software" target="_blank"><img width={600} src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" /></a></div><p />
</div>

**Etapa 2.** Inicie o aplicativo Arduino.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" /></div>

**Etapa 3.** Adicione o Wio Terminal à Arduino IDE.

Abra sua Arduino IDE, clique em `File > Preferences` e copie a URL abaixo em Additional Boards Manager URLs:

```
https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png" /></div>

Clique em `Tools > Board > Board Manager` e pesquise **Wio Terminal** no Boards Manager.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png" /></div>

**Etapa 4.** Selecione sua placa e porta

Você precisará selecionar a entrada no menu `Tools > Board` que corresponde ao seu Arduino, selecionando o **Wio Terminal**.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png" /></div>

Selecione o dispositivo serial da placa Wio Terminal no menu `Tools -> Port`. Este provavelmente será COM3 ou superior (COM1 e COM2 são geralmente reservadas para portas seriais de hardware). Para descobrir, você pode desconectar sua placa Wio Terminal e reabrir o menu; a entrada que desaparecer deve ser a placa Arduino. Reconecte a placa e selecione essa porta serial.

:::tip
 Para usuários de Mac, será algo como `/dev/cu.usbmodem141401`.

 Se você não conseguir fazer o upload do sketch, na maioria das vezes é porque a Arduino IDE não conseguiu colocar o Wio Terminal em modo bootloader. (Porque o MCU foi interrompido ou o seu programa está manipulando o USB.) A solução é colocar o seu Wio Terminal em modo bootloader manualmente.
:::
 <div align="center"><img width={400} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png" /></div>

**Etapa 5.** Baixe a biblioteca Grove - Wio-E5

Visite os repositórios [Disk91_LoRaE5](https://github.com/disk91/Disk91_LoRaE5) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank" /></p><div align="center"><a href="https://github.com/disk91/Disk91_LoRaE5" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 6.** Adicionando bibliotecas à IDE Arduino

Agora, a biblioteca do Acelerômetro Digital de 3 Eixos pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Disk91_LoRaE5` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

## Obter o valor do sensor IMU integrado do Wio Terminal

**Passo 1.** Baixar a biblioteca de código do IMU

Visite os repositórios [Seeed_Arduino_LIS3DHTR](https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master) e baixe todo o repositório para o seu disco local.

<div>
  <p style={{}}><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank" /></p><div align="center"><a href="https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/master" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

**Passo 2.** Adicionando bibliotecas à IDE Arduino

Agora, a biblioteca do Acelerômetro Digital de 3 Eixos pode ser instalada na IDE Arduino. Abra a IDE Arduino e clique em `sketch -> Include Library -> Add .ZIP Library`, e escolha o arquivo `Seeed_Arduino_LIS3DHTR` que você acabou de baixar.

<div align="center"><img width={600} src="https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg" /></div>

**Passo 3.** Obter os dados de 3 eixos do sensor IMU

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-IMU-value" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

Este repositório demonstra como usar o sensor IMU integrado como um componente no Wio Terminal. Usando as funções da biblioteca **getAccelerationX()**, **getAccelerationY()** e **getAccelerationZ()**, você pode obter diretamente os deslocamentos dos eixos X, Y e Z do sensor IMU. Esses três valores podem ser números de ponto flutuante positivos ou negativos.

```cpp
#include"LIS3DHTR.h"
LIS3DHTR<TwoWire> lis;

void setup() {
  Serial.begin(115200);
  lis.begin(Wire1);

  if (!lis) {
    Serial.println("ERROR");
    while(1);
  }
  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate
  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g
}

void loop() {
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  Serial.print("X: "); Serial.print(x_values);
  Serial.print(" Y: "); Serial.print(y_values);
  Serial.print(" Z: "); Serial.print(z_values);
  Serial.println();
  delay(50);
}
```

Abra o monitor serial da IDE Arduino, selecione a taxa de baud como 115200 e observe o resultado.

<div align="center"><img width={700} src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/138.png" /></div>

## Enviar dados via Grove - Wio-E5

Combinamos o código anterior do Grove - Wio-E5 para conectar à rede LoRa®. Usando o comando AT é possível enviar o valor do sensor IMU para a rede LoRa®.

Como sabemos pelo código na seção acima para obter o valor do sensor IMU, os valores do sensor IMU são três números float separados que podem ter valores positivos e negativos e são precisos a duas casas decimais.

Devido às limitações de envio de dados, primeiro precisamos resolver o problema de converter números float em inteiros no lado de envio para garantir que os dados enviados sejam inteiros, portanto multiplicamos todos os três eixos de dados por 100.

Dessa forma, determinamos o conteúdo, o tamanho e o formato dos dados a serem enviados por meio do comando AT. Podemos muito bem configurar um array suficientemente grande, armazenar as strings que precisamos enviar no array e, finalmente, usar a função **send_sync()** para enviar o array.

O pseudocódigo para a ideia acima é aproximadamente o seguinte.

```c
  ......
  float x_values, y_values, z_values;
  x_values = lis.getAccelerationX();
  y_values = lis.getAccelerationY();
  z_values = lis.getAccelerationZ();

  int x = x_values*100;
  int y = y_values*100;
  int z = z_values*100;

  static uint8_t data[6] = { 0x00 };  //Use the data[] to store the values of the sensors

  data_decord(x, y, z, data);

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

O resto do que precisamos fazer é usar a função `begin()` para inicializar o Grove - Wio-E5 e a função `setup()` para configurar as informações do triplete do Grove - Wio-E5. Quando enviarmos uma mensagem de dados usando a função `send_sync()`, tentaremos ingressar na LoRaWAN® ao mesmo tempo e, assim que isso acontecer, os dados serão enviados e informações como intensidade de sinal e endereço serão retornadas.

O exemplo de código completo pode ser encontrado [aqui](https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data).

<div>
  <p style={{}}><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank" /></p><div align="center"><a href="https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/IMU-send-data" target="_blank"><img width={300} src="https://files.seeedstudio.com/wiki/seeed_logo/github.png" /></a></div><p />
</div>

:::tip
Não recomendamos que você faça o upload do código agora para ver os resultados, porque neste momento você ainda não configurou o Helium/TTN e obterá um resultado de "Join failed". Recomendamos que você faça o upload deste código depois de concluir o capítulo [Connecting to Helium](https://wiki.seeedstudio.com/pt-br/Connecting-to-Helium/) ou [Connecting to TTN](https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN/) para completar o processo completo de envio de dados.
:::
Depois que você tiver experimentado e entendido como o sensor IMU funciona e o formato dos dados, continue com o próximo passo do tutorial para ingressar na LoRaWAN®.

<table align="center">
  <tbody><tr>
      <td colSpan={2} bgcolor="8FBC8F"><b>Seção Helium</b></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Introdução ao Helium</strong><br /><br />Neste capítulo, vamos apresentar os controles do console Helium que usamos para obter uma primeira impressão do console Helium.<br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Helium-Introduction">Ir para o capítulo &gt;</a></td>
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
      <td align="left"><strong>Introdução ao TTN</strong><br /><br />Neste capítulo, vamos apresentar os controles do console TTN que usamos para obter uma primeira impressão do console TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/TTN-Introduction">Ir para o capítulo &gt;</a></td>
    </tr>
    <tr>
      <td align="center"><p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/K1100/ttncon.jpg" alt="pir" width={500} height="auto" /></p></td>
      <td align="left"><strong>Conectando ao TTN</strong><br /><br />Esta seção descreve como configurar o TTN para que os dados do sensor possam ser enviados com sucesso e exibidos no TTN.
        <br /><br /><a href="https://wiki.seeedstudio.com/pt-br/Connecting-to-TTN">Ir para o capítulo &gt;</a></td>
    </tr>
  </tbody></table>

## Suporte Técnico & Discussão de Produto

Agradecemos por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

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
