---
description: O Grove - ADC for Load Cell (HX711) é um conversor A/D de 24 bits projetado especificamente para célula de carga.
title: Primeiros passos Grove - ADC for Load Cell (HX711)
keywords:
  - Grove
  - weight sensor
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /grove_adc_for_load_cell_hx711
sku: 101020712
last_update:
  date: 05/28/2024
  author: Carla
createdAt: '2024-05-28'
updatedAt: '2026-03-19'
url: https://wiki.seeedstudio.com/pt-br/grove_adc_for_load_cell_hx711/
---

# Grove - ADC for Load Cell (HX711)

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:700, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
 <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
</div>

O Grove - ADC for Load Cell (HX711) é um conversor A/D de 24 bits projetado especificamente para a célula de carga. Ele contém um amplificador programável de baixo ruído on-chip com ganho opcional de 32, 64 e 128. O chip HX711 integra uma fonte de alimentação regulada, um oscilador de clock on-chip e outros circuitos periféricos, que apresentam as vantagens de alta integração, resposta rápida e forte imunidade a interferências.

:::note
Com o conector Grove e o terminal de parafuso de 4 pinos, torna-se bastante fácil conectar a célula de carga e o microcontrolador, sem necessidade de solda. Você pode construir seu próprio sistema de sensor de peso com Arduino em apenas algumas etapas simples.
:::

## Especificações

<div class="table-center">
 <table align="center">
 <tr>
  <th>Item</th>
  <th>Valor</th>
 </tr>
 <tr>
  <td>Bateria</td>
  <td>Excluída</td>
 </tr>
 <tr>
  <td>Tensão de trabalho</td>
  <td>2.6V--5.5V</td>
 </tr>
 <tr>
  <td>Corrente de trabalho</td>
  <td>Menor que 1,5A</td>
 </tr>
 <tr>
  <td>Precisão de detecção</td>
  <td>24 bits</td>
 </tr>
 <tr>
  <td>Taxa de dados de saída </td>
  <td>10SPS ou 80SPS</td>
 </tr>
 <tr>
  <td>Ganho opcional</td>
  <td>32 para o Canal B / 64 e 128 para o Canal A</td>
 </tr>
 </table>
</div>

## Aplicações

- Balanças eletrônicas
- Balanças com cálculo de preço
- Balanças de plataforma eletrônicas
- Balanças digitais
- Balanças para encomendas postais

## Visão geral de hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-pin.jpg" style={{width:700, height:'auto'}}/></div>

## Plataformas suportadas

<div class="table-center">
 <table align="center">
  <tr>
   <th>Arduino</th>
   <th>Raspberry Pi</th>
   <th> </th>
   <th> </th>
   <th> </th>
  </tr>
  <tr>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg" style={{width:250, height:'auto'}}/></div></td>
  </tr>
 </table>
</div>

:::caution
As plataformas mencionadas acima como suportadas são uma indicação da compatibilidade de software ou teórica do módulo. Na maioria dos casos, fornecemos apenas biblioteca de software ou exemplos de código para a plataforma Arduino. Não é possível fornecer biblioteca de software / código de demonstração para todas as possíveis plataformas de MCU. Portanto, os usuários precisam escrever sua própria biblioteca de software.
:::

## Primeiros passos

Nesta parte, usaremos um **Arduino UNO R4 WiFi** como controlador, mostraremos como usar um **Grove - ADC for Load Cell (HX711)** e um **Weight Sensor (Load Cell) 0-500g** para fazer um módulo de medição de peso.

### Preparação de hardware

**Passo 1.** Preparação de materiais

<div class="table-center">
 <table align="center">
 <tr>
  <th>Arduino UNO R4 WIFi</th>
  <th>Grove - ADC for Load Cell (HX711)</th>
  <th>Weight Sensor (Load Cell) 0-500g</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/1.png" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/Grove-ADC-for-Load-Cell-HX711-wiki.jpg" style={{width:250, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/2.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Arduino-Uno-Rev4-WiFi-p-5717.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-ADC-for-Load-Cell-HX711-p-4361.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/Weight-Sensor-Load-Cell-0-500g-p-525.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
 </tr>
 </table>
</div>

:::note

- O sensor de peso gera 0V quando a carga é menor que 150g, ele não mede diretamente a carga. Portanto, recomenda-se usar uma carga local de 200g para evitar o ponto cego de medição. Leia os dados analógicos de um peso de 200g como carga zero (0g) e leia os dados analógicos de um peso de 700g como carga total (500g).
- O ADC for Load Cell (HX711) usa o canal A por padrão, se você quiser usar outros canais, será necessário soldá-los você mesmo.

:::

E o **Grove - ADC for Load Cell (HX711)** também é adequado para nossa placa de desenvolvimento XIAO.

<table align="center">
 <tr>
  <th>Seeed Studio XIAO SAMD21</th>
  <th>Seeed Studio XIAO RP2040</th>
  <th>Seeed Studio XIAO nRF52840 (Sense)</th>
  <th>Seeed Studio XIAO ESP32C3</th>
     <th>Seeed Studio XIAO ESP32S3 (Sense)</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg" style={{width:400, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg" style={{width:500, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg" style={{width:450, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg" style={{width:500, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html" target="_blank"><strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong></a>
  </div></td>
 </tr>
</table>

**Passo 2.** Conexão de hardware

 Conecte o Grove Gesture Sensor à porta IIC do Arduino UNO R4 WiFi, conecte o Arduino ao PC por meio de um cabo USB, e a conexão entre o Grove - ADC for Load Cell (HX711) e o Weight Sensor (Load Cell) 0-500g é mostrada abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/9.png" style={{width:700, height:'auto'}}/></div>

<div class="table-center">
 <table align="center">
 <tr>
     <th>Grove - ADC for Load Cell (HX711)</th>
  <th>Weight Sensor (Load Cell) 0-500</th>
 </tr>
    <tr>
     <td>E+</td>
  <td>Red</td>
    </tr>
 <tr>
  <td>E-</td>
  <td>Black</td>
 </tr>
 <tr>
  <td>INA-</td>
  <td>White</td>
 </tr>
 <tr>
  <td>INA+</td>
  <td>Green/Blue</td>
 </tr>
 </table>
</div>

:::tip
Usando o Grove Base Shield, você pode conectar diretamente o módulo HX711 ao Arduino UNO R4 WiFi como abaixo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/3.jpg" style={{width:700, height:'auto'}}/></div>
:::

### Preparação de software

 A ferramenta de programação recomendada é o Arduino IDE, e você precisa configurar o ambiente Arduino para o XIAO e adicionar o pacote da placa.
:::tip
Se esta é sua primeira vez usando Arduino, recomendamos fortemente que você consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::
**Passo 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software"><strong><span><font color={'FFFFFF'} size={"4"}>Baixar Arduino IDE</font></span></strong></a>
</div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o ao Arduino IDE.

- Se você quiser usar o **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#preparação-de-software)** para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#preparação-de-software)** para concluir a adição.

- Se você quiser usar o **Seeeduino V4.3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino_v4.2/)** para concluir a adição.

- Se você quiser usar o **Arduino UNO R4 WiFi** para as rotinas posteriores, clique em **Tools-> Board-> Boards Manager...**, digite a palavra‑chave "UNO R4 WiFi" no campo de busca e instale a versão mais recente (ou a versão que você deseja usar).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-mp3-v4/4.png" style={{width:800, height:'auto'}}/></div>

### Visão geral da biblioteca HX711 para Arduino

#### Função

Antes de começarmos a desenvolver um sketch, vamos analisar as funções disponíveis.

- `void begin(byte dout, byte pd_sck, byte gain )` —— Inicializa a biblioteca com o pino de saída de dados, pino de entrada de clock e fator de ganho. A seleção do canal é feita passando o ganho apropriado, o padrão da biblioteca é "128" (Canal A).
 	- **Parâmetros de entrada:**
  		- **byte dout：** Passado como dout (convertido para byte) fiação do circuito HX711.
  		- **byte pd_sck：** Passado como pd_sck (convertido para byte) fiação do circuito HX711.
  		- **byte gain = 128：**
   			- Com um fator de ganho de 64 ou 128, o canal A é selecionado.
   			- Com um fator de ganho de 32, o canal B é selecionado.

- `bool is_ready()` —— Verifique se o HX711 está pronto. De acordo com o datasheet: quando os dados de saída não estão prontos para leitura, o pino de saída digital DOUT fica em nível alto. A entrada de clock serial PD_SCK deve estar em nível baixo. Quando DOUT vai para nível baixo, isso indica que os dados estão prontos para leitura.

- `void wait_ready(unsigned long delay_ms = 0);` —— Aguarda o chip ficar pronto.

- `bool wait_ready_retry(int retries = 3, unsigned long delay_ms = 0)` ——  Aguarda o chip ficar pronto tentando novamente por um número específico de tentativas.

- `bool wait_ready_timeout(unsigned long timeout = 1000, unsigned long delay_ms = 0)` —— Aguarda o chip ficar pronto até atingir o tempo limite.

- `void set_gain(byte gain = 128)` —— define o fator de ganho; entra em vigor apenas após uma chamada para read().
 	- **Parâmetros de entrada:**
  		- **byte gain = 128：** O canal A pode ser configurado com ganho 128 ou 64; o canal B tem ganho fixo de 32.

- `long read()` —— aguarda o chip ficar pronto e retorna uma leitura

- `long read_average(byte times = 10)` —— retorna uma leitura média.
 	- **Parâmetros de entrada:**
  		- **byte times = 10:** times = quantas vezes ler.

- `double get_value(byte times = 1)` ——  retorna (read_average() - OFFSET), ou seja, o valor atual sem o peso de tara.
 	- **Parâmetros de entrada:**
  		- **byte times = 1:** times = quantas leituras realizar.
- `float get_units(byte times = 1)` —— retorna get_value() dividido por SCALE, ou seja, o valor bruto dividido por um valor obtido por meio de calibração.
 	- **Parâmetros de entrada:**
  		- **byte times = 1:** times = quantas leituras realizar.

- `void tare(byte times = 10)` —— define o valor de OFFSET para o peso de tara.
 	- **Parâmetros de entrada:**
  		- **byte times = 10:** times = quantas vezes ler o valor de tara.

- `void set_scale(float scale = 1.f)` —— define o valor de SCALE; esse valor é usado para converter os dados brutos em dados "legíveis por humanos" (unidades de medida)

- `float get_scale()` —— obtém o SCALE atual

- `void set_offset(long offset = 0)` —— define OFFSET, o valor que é subtraído da leitura real (peso de tara)

- `long get_offset()` —— obtém o OFFSET atual

- `void power_down()` —— coloca o chip em modo de desligamento

- `void power_up()` —— desperta o chip após o modo de desligamento

#### Instalação

<div class="github_container" style={{textAlign: 'center'}}>
    <a class="github_item" href="https://github.com/bogde/HX711" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Baixar a biblioteca</font></span></strong> <svg aria-hidden="true" focusable="false" role="img" className="mr-2" viewBox="-3 10 9 1" width={16} height={16} fill="currentColor" style={{textAlign: 'center', display: 'inline-block', userSelect: 'none', verticalAlign: 'text-bottom', overflow: 'visible'}}><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" /></svg>
    </a>
</div><br />

Como você baixou a biblioteca em formato zip, abra o Arduino IDE, clique em **Sketch > Include Library > Add .ZIP Library**. Escolha o arquivo zip que você acabou de baixar e, se a biblioteca for instalada corretamente, você verá **Library added to your libraries** na janela de aviso. Isso significa que a biblioteca foi instalada com sucesso.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png" style={{width:800, height:'auto'}}/></div>

### Demo de exemplo

**Passo 1.**  Antes da medição com o Grove - ADC para célula de carga (HX711), o **PD_SCK** deve ser puxado para baixo para deixá‑lo pronto para funcionar e a célula de carga deve ser calibrada. O código de exemplo `Grove_ADC_for_Load_Cell_(HX711)` é o seguinte:

```cpp
#include "HX711.h"

// HX711 circuit wiring
const int LOADCELL_DOUT_PIN = 3;  //Set your I2C pin
const int LOADCELL_SCK_PIN = 2;


HX711 scale;

void setup() {
  Serial.begin(9600);
  Serial.println("HX711 Demo");

  Serial.println("Initializing the scale");

  // Initialize library with data output pin, clock input pin and gain factor.
  // Channel selection is made by passing the appropriate gain:
  // - With a gain factor of 64 or 128, channel A is selected
  // - With a gain factor of 32, channel B is selected
  // By omitting the gain factor parameter, the library
  // default "128" (Channel A) is used here.

  scale.begin(LOADCELL_DOUT_PIN, LOADCELL_SCK_PIN);

  Serial.println("Before setting up the scale:");
    if (scale.wait_ready_timeout(1000)) {
    long reading = scale.read();
    Serial.print("HX711 reading: ");
    Serial.println(reading);
  } else {
    Serial.println("HX711 not found.");
  }   // print a raw reading from the ADC

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));   // print the average of 20 readings from the ADC

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));  // print the average of 5 readings from the ADC minus the tare weight (not set yet)

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1); // print the average of 5 readings from the ADC minus tare weight (not set) divided
      // by the SCALE parameter (not set yet)

  scale.set_scale(2280.f);                      // this value is obtained by calibrating the scale with known weights; see the README for details
  scale.tare();            // reset the scale to 0

  Serial.println("After setting up the scale:");

  Serial.print("read: \t\t");
  Serial.println(scale.read());                 // print a raw reading from the ADC

  Serial.print("read average: \t\t");
  Serial.println(scale.read_average(20));       // print the average of 20 readings from the ADC

  Serial.print("get value: \t\t");
  Serial.println(scale.get_value(5));  // print the average of 5 readings from the ADC minus the tare weight, set with tare()

  Serial.print("get units: \t\t");
  Serial.println(scale.get_units(5), 1);        // print the average of 5 readings from the ADC minus tare weight, divided
      // by the SCALE parameter set with set_scale

  Serial.println("Readings:");
}

void loop() {
  Serial.print("one reading:\t");
  Serial.print(scale.get_units(), 1);
  Serial.print("\t| average:\t");
  Serial.println(scale.get_units(10), 1);

  scale.power_down();           // put the ADC in sleep mode
  delay(5000);
  scale.power_up();
}

```

**Passo 2.**  Clique no menu suspenso de seleção de placa e, em seguida, clique em "Select other board and port...".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/4.png" style={{width:400, height:'auto'}}/></div>

**Passo 3.** Em seguida, pesquise e selecione "Arduino UNO R4 WiFi".
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/5.png" style={{width:600, height:'auto'}}/></div>

**Passo 4.** Clique em "upload" para gravar o firmware no Arduino.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/6.png" style={{width:400, height:'auto'}}/></div>

**Passo 5.**  Abra o **Monitor Serial** da Arduino IDE clicando em **Tool-> Serial Monitor**. Quando você vir a impressão serial "After setting up the scale:", aguarde alguns segundos e aplique força ao **Weight Sensor (Load Cell) 0-500g**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/10.gif" style={{width:400, height:'auto'}}/></div>

**Passo 6.** O resultado deve ser semelhante ao mostrado abaixo.
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-ADC-for-Load-Cell-HX711-/img/7.png" style={{width:800, height:'auto'}}/></div>

## Recurso

**[PDF]**[INA125 datasheet](https://github.com/SeeedDocument/Weight_Sensor_Load_Cell_0-500g/raw/master/res/INA125.pdf)

**[PDF]**[HX711-datacheet](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/HX711.pdf)

**[ZIP]**[Grove - ADC for load cell (HX711)-Schematic File](https://github.com/SeeedDocument/Grove-ADC-for-Load-Cell-HX711-/raw/master/res/Grove%20-%20ADC%20for%20load%20cell%20(HX711)_SCH%26PCB.zip)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que a sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
