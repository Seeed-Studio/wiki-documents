---
description: Driver de iluminação XIAO: alimentado por Li-Po, 3 chaves + 4 PWMs, aciona filamentos COB de 3 V — ilumine miniaturas, dioramas e wearables.
title: Placa Controladora de LED COB para XIAO
image: https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first_COB-LED-Driver-Board-for-Seeed-Studio-XIAO.webp
slug: /getting_started_with_cob_led_dirver_board
sku: 100079172,E25121201
last_update:
  date: 11/27/2025
  author: Brandy
createdAt: '2025-12-04'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/getting_started_with_cob_led_dirver_board/
---
# Primeiros Passos com a Placa Controladora de LED COB para Seeed Studio XIAO

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/first.jpg" style={{width:800, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
    </a>
</div><br />

Esta é uma base controladora de LED COB de 7 canais projetada para Seeed Studio XIAO. Esta placa de expansão rompe os limites de potência dos GPIOs, oferecendo 7 canais de saída, especificamente ajustados para tiras de LED COB de 3 V e 1 mm ultrafinas. Com gerenciamento de bateria PMIC integrado, é a solução plug-and-play ideal para construir sistemas de iluminação sem fio compactos e de alta luminosidade. 

 ## Notas de Segurança

**Proibições de Operação & Regras de Segurança**
 - Não conecte nenhum periférico durante o carregamento. Desconecte primeiro a barra de luz antes de conectar o cabo USB-C.
 - Ao depurar pela porta USB-C, o suporte de bateria deve estar vazio (sem bateria instalada).
 - Para correntes de carga total >1 A, certifique-se de que existam furos de dissipação de calor no gabinete; caso contrário, o PMIC superaquecerá e desligará.
 - Nunca toque na área do PMIC na parte de trás da placa com as mãos desprotegidas: a descarga eletrostática (ESD) pode danificar o chip, e a superfície pode atingir temperaturas de queimadura em carga total.
**Lembretes de Segurança Essenciais**
 - Siga estas quatro regras para uma operação segura:
 - Fonte de alimentação única quando periféricos estiverem conectados
 - Desligue a alimentação antes de conectar/desconectar fios
 - Forneça furos adequados para dissipação de calor
 - Não toque na parte de trás da placa

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/safety.png" style={{width:250, height:'auto'}}/></div>


## Introdução

### Características

- **Adaptada para Tiras de LED COB de 1 mm e 3 V** 

  A limitação de corrente por hardware integrada é especificamente ajustada para corresponder às características elétricas de tiras COB flexíveis de 3 V e 1 mm. Os limites de corrente em degraus de 300 mA e 100 mA acionam de forma eficaz tiras de vários comprimentos, oferecendo aos makers uma experiência segura, estável e plug-and-play.

- **Saída Híbrida Estratégica de 7 Canais** 

  Gerencie com eficiência toda a sua configuração de iluminação com uma única placa. Ela possui 3 Canais de Alta Potência (300 mA) para iluminação principal intensa e 4 Canais Reguláveis (80 mA) para efeitos sutis de respiração ou fade. Uma placa dá conta de tudo — mantendo suas luzes principais brilhantes e seus efeitos dinâmicos.

- **Gerenciamento de Bateria para Projetos Sem Fio** 

  O circuito de alimentação integrado suporta baterias Li-Po de 3,7 V ou fontes USB de 5 V de alta potência. Perfeito para construir tanto instalações sem fio quanto iluminação ambiente de mesa de alta luminosidade.

- **Expansão Fácil de Sensores** 

  Inclui um conector Grove I2C padrão para conexão fácil a sensores, permitindo que seus projetos de iluminação reajam de forma inteligente ao ambiente.

  ### Especificações
<table className="spec-table">
  <tbody>
    <tr>
      <th>Suporte de Alimentação dos LEDs</th>
      <td>DC 3V</td>
    </tr>
    <tr>
      <th>Entrada de Alimentação</th>
      <td>
        5V USB (via XIAO)<br/>
        <small>Nota: Um adaptador de parede 5V/2A+ é recomendado para operação em carga total.</small><br/>
        Bateria Li-Po 3,7 V (via Conector de Bateria onboard)
      </td>
    </tr>
    <tr>
      <th>3× Portas de Alta Potência<br/>(Terminais de Parafuso)</th>
      <td>
        3 Canais de Saída<br/>
        Capacidade de Condução: Máx. 300 mA/canal<br/>
        Lógica de Controle: 1× Sempre Ativo + 2× Chave GPIO (D0, D1)<br/>
        <small>Nota: Somente Chave Liga/Desliga, SEM suporte a PWM</small>
      </td>
    </tr>
    <tr>
      <th>4× Portas FX/PWM<br/>(Pads Inferiores)</th>
      <td>
        4 Canais de Saída<br/>
        Capacidade de Condução: Máx. 80 mA/canal<br/>
        Lógica de Controle: Totalmente Regulável (PWM) via D2, D3, D8, D9<br/>
        <small>Nota: lógica ativa em LOW</small>
      </td>
    </tr>
    <tr>
      <th>Onboard</th>
      <td>
        Conector Grove I²C ×1<br/>
        Chave de Alimentação ×1<br/>
        LED de Alimentação ×1<br/>
        Conector de Bateria ×1
      </td>
    </tr>
    <tr>
      <th>Dimensões</th>
      <td>`30mm*41mm*16mm` (com um Seeed Studio XIAO)</td>
    </tr>
  </tbody>
</table>

### Visão Geral de Hardware

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/IO.png" style={{width:1000, height:'auto'}}/></div>

- **(1) Porta D1 de Alta Potência:** Uma porta de alta potência que suporta corrente máxima de 300 mA, permite apenas controle de chave LIGA/DESLIGA (dimming por PWM não é suportado) e é usada para conectar cargas de alta potência.
- **(2) Porta D0 de Alta Potência:** Uma porta de alta potência que suporta corrente máxima de 300 mA, permite apenas controle de chave LIGA/DESLIGA (dimming por PWM não é suportado) e é usada para conectar cargas de alta potência.
- **(3) Porta VCC Sempre Ativa:** Uma porta VCC sempre alimentada que suporta corrente máxima de 300 mA, não é controlada pela chave de alimentação, sempre fornece a tensão de alimentação e pode energizar dispositivos que exigem alimentação contínua.
- **(4) GND:** O terminal de terra comum do circuito, usado para conectar os fios de terra de todos os módulos.
- **(5) Porta Grove I²C:** Uma interface Grove padrão I²C (incluindo pinos VCC, GND, SDA, SCL), usada para conectar módulos Grove que suportam o protocolo I²C (como sensores, displays).
- **(6) Chave de Alimentação:** Uma chave de controle de alimentação; quando alternada para "ON", fornece energia às portas de alta/baixa potência; quando alternada para "OFF", corta a alimentação (a porta VCC sempre ativa não é controlada por esta chave).
- **(7) LED de Alimentação:** Um LED indicador de status de alimentação que acende quando a chave de alimentação é alternada para "ON", indicando que o módulo está energizado.
- **(8) Conector de Bateria:** Uma interface de bateria que suporta a conexão de baterias de lítio de 3,7 V para alimentar o módulo.
- **(9) Porta D2 de Baixa Potência:** Uma porta de baixa potência que suporta corrente máxima de 80 mA, suporta dimming por PWM e usa lógica ativa em LOW (a carga opera quando o nível está baixo).
- **(10) GND:** Um terminal de terra na área de baixa potência, usado para conectar os fios de terra das cargas de baixa potência.
- **(11) Porta D3 de Baixa Potência:** Uma porta de baixa potência que suporta corrente máxima de 80 mA, suporta dimming por PWM e usa lógica ativa em LOW (a carga opera quando o nível está baixo).
- **(12) Porta D9 de Baixa Potência:** Uma porta de baixa potência que suporta corrente máxima de 80 mA, suporta dimming por PWM e usa lógica ativa em LOW (a carga opera quando o nível está baixo).
- **(13) Porta D8 de Baixa Potência:** Uma porta de baixa potência que suporta corrente máxima de 80 mA, suporta dimming por PWM e usa lógica ativa em LOW (a carga opera quando o nível está baixo).

#### Guia de COB LEDs Suportados
#### Guia de LEDs Suportados

<div class="table-center">
 <table style={{textAlign:'center'}}>
  <tr>
    <th>Produto</th>
    <th>Nome</th>
    <th>Comprimento</th>
    <th>Corrente de Operação</th>
     <th>  Fluxo Luminoso</th>
  </tr>
    <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100052952-Double-Ended-COB-LED-Strip---White(6500K)-38mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-38mm-10PCS-p-6592.html">Double Ended COB LED Strip - White(6500K)</a></td>
      <td>38mm</td>
      <td>100mA (Recomendado)</td>
       <td>  &gt;20 lm (@ 100mA)</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-130mm-5PCS-p-6593.html">Double Ended COB LED Strip - White(6500K) </a></td>
      <td>130mm </td>
      <td>300mA (Recomendado)</td>
      <td>21-25 lm (@ 300mA)</td>
  </tr>

  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html">Double Ended COB LED Strip - White(6500K)</a></td>
      <td>300mm</td>
      <td>300mA (Recomendado)</td>
       <td>&gt;50 lm (@ 300mA)</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100036812-Single-Ended-COB-LED-Strip---White(6500K)-110mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-110mm-5PCS-p-6590.html"> Single Ended COB LED Strip - White(6500K)</a></td>
      <td>110mm</td>
      <td>100mA (Recomendado)</td>
       <td> &gt;23 lm (@ 200mA)</td>
  </tr>
  <tr>
      <td><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:150, height:'auto'}}/></td>
      <td><a href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html">Single Ended COB LED Strip - White(6500K)</a></td>
      <td>300mm </td>
      <td>100mA (Recomendado)</td>
       <td>&gt;22 lm (@ 100mA)</td>
  </tr>
  </table>
</div>

## Primeiros Passos

Para liberar todo o potencial da Placa Controladora de LED COB e desfrutar da melhor experiência possível, recomendamos fortemente emparelhá-la com uma placa Seeed Studio XIAO e nossas tiras de LED COB correspondentes.

:::note
Por segurança:  
- **Ao carregar a bateria de íon de lítio**, desconecte a tira de LED e quaisquer outros periféricos.  
- **Ao conectar 5 V via USB-C para programação ou depuração**, desconecte a bateria.  

Usar **ou** somente a bateria **ou** somente a fonte externa de 5 V é seguro. Não é recomendado conectar dispositivos periféricos durante o carregamento.
:::

### Brincando com Arduino

Você precisa configurar o ambiente Arduino para o XIAO e adicionar o pacote da placa.

:::tip
Se esta é a sua primeira vez usando o Arduino, recomendamos fortemente que consulte [Getting Started with Arduino](https://wiki.seeedstudio.com/pt-br/Getting_Started_with_Arduino/).
:::

#### Preparação de software

**Etapa 1.** Inicie o aplicativo Arduino.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg" style={{width:800, height:'auto'}}/></div>

<div class="download_arduino_container" style={{textAlign: 'center'}}>
    <a class="download_arduino_item" href="https://www.arduino.cc/en/software">
        <strong><span><font color={'FFFFFF'} size={"4"}>Download Arduino IDE</font></span></strong>
    </a>
</div>

**Etapa 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à Arduino IDE.

- Se você quiser usar **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#Configuração-do-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RP2350** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_rp2350_arduino/#Configurando-o-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#Configuração-do-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32-C3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started#Configuração-do-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32-C6** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32c6_getting_started/#Preparação-do-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO ESP32-S3** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_esp32s3_getting_started#Preparação-do-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO RA4M1** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/getting_started_xiao_ra4m1/#Preparação-do-software)** para concluir a adição.

- Se você quiser usar **Seeed Studio XIAO MG24** para as rotinas posteriores, consulte **[este tutorial](https://wiki.seeedstudio.com/pt-br/xiao_mg24_getting_started/#Preparação-do-software)** para concluir a adição.

:::tip
O XIAO SAMD21 e o XIAO nRF54L15 só funcionam quando alimentados via USB-C e não podem ser usados apenas com bateria. Além disso, o nRF54L15 não opera no ambiente Arduino.
:::
####  Exemplo de driver de porta de baixa potência

Uma porta de baixa potência que suporta uma corrente máxima de 80 mA, suporta dimerização por PWM e usa lógica ativa em LOW (a carga opera quando o nível está baixo).

**Etapa 1.** Preparação de hardware

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> Placa controladora de LED COB</th>
        <th>Fita de LED COB de extremidade única</th>
 </tr>
 <tr>

   <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>


:::tip
Ao conectar o XIAO à placa controladora, certifique-se de desconectar o cabo USB.
:::
**Etapa 2.**  Conecte o Seeed Studio XIAO ESP32-C3, a COB LED Driver Board para XIAO e a fita de LED COB de extremidade única como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_ready2_new.jpg" style={{width:400, height:'auto'}}/></div>


**Etapa 3.** Conecte o XIAO ao programa de gravação via USB. Copie e faça o download do sketch de exemplo relacionado.
```cpp
#define LED_BUILTIN     D2
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, LOW);   // turn the LED on by making the voltage LOW
 // digitalWrite(LED_BUILTIN, HIGH);  // turn the LED off (HIGH is the voltage level)
}

```
:::tip 

“Low-Power Port” no comentário significa ativo em nível baixo:
puxe o pino para LOW para ligar a fita (ON), solte (HIGH) para desligá-la (OFF).

:::
O código simplesmente controla os pinos GPIO em HIGH ou LOW.
Como a placa controladora já está configurada, você não precisa baixar nenhuma biblioteca extra.
Siga a imagem de referência, envie o programa e alimente a COB LED Driver Board; se tudo correr bem, você poderá ver isto:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D2_new.jpg" style={{width:700, height:'auto'}}/></div>

#### Exemplo de driver de porta de alta potência

Uma porta de alta potência que suporta uma corrente máxima de 300 mA, permite apenas controle de chave ON/OFF (dimerização por PWM não é suportada) e é usada para conectar cargas de alta potência.

**Etapa 1.**  Preparação de hardware
<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> Placa controladora de LED COB</th>
        <th>Fita de LED COB de dupla extremidade</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>



**Etapa 2.**  Conecte o Seeed Studio XIAO ESP32-C3, a COB LED Driver Board para XIAO e a fita de LED COB de dupla extremidade como mostrado abaixo:
<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100074846-Double-Ended-COB-LED-Strip---White(6500K)-130mm.jpg" style={{width:400, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new.jpg" style={{width:400, height:'auto'}}/></div>

**Etapa 3.** Conecte o XIAO ao programa de gravação via USB. Copie e faça o download do sketch de exemplo relacionado.

```cpp
#define LED_BUILTIN       D0

// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(LED_BUILTIN, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  digitalWrite(LED_BUILTIN, HIGH);  // turn the LED on (HIGH is the voltage level)
 // digitalWrite(LED_BUILTIN, LOW);   // turn the LED off by making the voltage LOW
}

```


O código simplesmente controla os pinos GPIO em HIGH ou LOW.
Como a placa controladora já está configurada, você não precisa baixar nenhuma biblioteca extra.
Siga a imagem de referência, envie o programa e alimente a COB LED Driver Board; se tudo correr bem, você poderá ver isto:


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/D4_new_light.jpg" style={{width:700, height:'auto'}}/></div>

####   Exemplo de driver PWM de porta de baixa potência

Uma porta de baixa potência que suporta uma corrente máxima de 80 mA, suporta dimerização por PWM e usa lógica ativa em LOW (a carga opera quando o nível está baixo).
**Etapa 1.**   Preparação de hardware

<table align="center">
 <tr>
  <th>Seeed Studio XIAO ESP32-C3</th>
        <th> Placa controladora de LED COB</th>
        <th>Fita de LED COB de extremidade única</th>
        <th>Fita de LED COB de dupla extremidade</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-Double Ended COB LED Strip - White(6500K) 300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
   <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Double-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6594.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Passo 2.**  Conecte o Seeed Studio XIAO ESP32-C3, a COB LED Driver Board for XIAO, a Single Ended COB LED Strip e a Double Ended COB LED Strip como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Breath_new_ready.jpg"style={{width:700, height:'auto'}}/></div>

**Passo 3.** Conecte o XIAO ao programa de gravação USB. Copie e faça o download do sketch de exemplo correspondente.

```cpp
#include <Arduino.h>

// ================= Define Pins =================
const int PIN_STRIP_1 = D2; 
const int PIN_STRIP_2 = D3; 

// ================= Parameter Configuration =================
// Breathing speed: larger number = slower, smaller number = faster
const int BREATH_SPEED = 2000; 

// Breathing phase offset: determines if the two light strips "light up together" or "alternate lighting"
// float PHASE_OFFSET = 0;    // Set to 0 -> fully synchronized
float PHASE_OFFSET = PI;   // Set to PI (3.14) -> fully alternating (complementary)
// float PHASE_OFFSET = PI/2; // Set to PI/2 -> slightly staggered rhythm

// ================= Helper Function: Handle Active LOW Lighting Logic =================
// This step is crucial, do not modify
// Input: brightness (0=off, 255=maximum brightness)
void setLedBrightness(int pin, int brightness) {
  // 1. Safety limit range
  brightness = constrain(brightness, 0, 255);

  // 2. Logic inversion (Active LOW)
  // Brightness 255 -> Output 0 (GND) -> Light at maximum brightness
  // Brightness 0   -> Output 255 (VCC) -> Light off
  int pwmValue = 255 - brightness;

  analogWrite(pin, pwmValue);
}

// ================= Math Function for Calculating Breathing Brightness =================
// Using the algorithm (e^sin(x) - 1/e), which mimics human breathing curve better than ordinary triangular wave
int calculateBreathBrightness(unsigned long time, float phaseOffset) {
  // Calculate angle: time / speed factor
  float angle = (time / (float)BREATH_SPEED) * PI;

  // Add phase offset
  angle += phaseOffset;

  // Core formula
  float val = (exp(sin(angle)) - 0.36787944) * 108.0;

  return (int)val;
}

void setup() {
  pinMode(PIN_STRIP_1, OUTPUT);
  pinMode(PIN_STRIP_2, OUTPUT);

  // Initialization: turn off all lights first
  setLedBrightness(PIN_STRIP_1, 0);
  setLedBrightness(PIN_STRIP_2, 0);
}

void loop() {
  unsigned long currentMillis = millis();

  // 1. Calculate brightness for D2 (no offset)
  int bright1 = calculateBreathBrightness(currentMillis, 0);
  setLedBrightness(PIN_STRIP_1, bright1);

  // 2. Calculate brightness for D3 (with offset)
  int bright2 = calculateBreathBrightness(currentMillis, PHASE_OFFSET);
  setLedBrightness(PIN_STRIP_2, bright2);

  // The delay here doesn't need to be too long, just give the CPU a short break
  delay(5);
}

```

Este é um projeto alimentado por bateria. Este é o código para o estilo de luz de respiração; se você gostar, pode usar esse estilo em qualquer lugar que quiser iluminar
Envie o programa e alimente a COB LED Driver Board, se tudo correr bem, você poderá ver algo assim:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/PWM.gif"style={{width:500, height:'auto'}}/></div>
:::tip

Tiras de LED com limite de corrente nominal de 300 mA ou 100 mA podem ser conectadas com segurança a uma porta com saída máxima de 80 mA (a corrente de saída da porta é ≤ o limite de corrente da tira de LED, garantindo redundância de segurança). No entanto, uma tira de LED com limite de corrente nominal de 100 mA não pode ser conectada a uma porta com saída máxima de 300 mA — como a corrente máxima de saída da porta excede em muito o limite de corrente da tira de LED, isso pode danificá-la devido a sobrecorrente.
:::
:::note
**Hot-plug é estritamente proibido!**
Sempre monte primeiro o XIAO e a placa driver, depois conecte o cabo USB.
Nunca tente encaixar o XIAO enquanto ele ainda estiver conectado ao cabo USB. Isso pode fazer com que o PMIC entre em pane.
:::


### Brinque com o Home Assistant via ESPHome

#### Preparação de hardware

<div class="table-center">
  <table style={{textAlign:'center'}}>
    <tr>
      <th>Dispositivos Home Assistant</th>
    </tr>
    <tr>
        <td><img src="https://files.seeedstudio.com/wiki/Home-Assistant/1.png" style={{width:300, height:'auto'}}/></td>
    </tr>
    <tr>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
        <a class="get_one_now_item" href="https://wiki.seeedstudio.com/pt-br/home_assistant_topic/#-devices-for-home-assistant-" target="_blank" rel="noopener noreferrer">
          <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
        </a>
      </div></td>
    </tr>
  </table>
</div>

#### Preparação de software

[ESPHome](https://esphome.io/) é uma ferramenta que tem como objetivo tornar o gerenciamento das suas placas ESP o mais simples possível. Ela lê um arquivo de configuração YAML e cria um firmware personalizado que é instalado no seu dispositivo ESP. Dispositivos ou sensores adicionados na configuração do ESPHome aparecerão automaticamente na interface do Home Assistant. O ESPHome pode ajudar você a conectar e enviar os dados para dispositivos Home Assistant.

:::note
Se esta é a sua primeira vez usando o Home Assistant e o ESPHome, você pode seguir <strong>[aqui](https://www.home-assistant.io/installation/)</strong> para um guia passo a passo sobre como instalar o Home Assistant.
:::

ESPHome está disponível como um **Add-On do Home Assistant** e pode ser simplesmente instalado pela loja de add-ons.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/1.png" style={{width:900, height:'auto'}}/></div>

- **Passo 1.** Clique em **INSTALL**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/2.png" style={{width:900, height:'auto'}}/></div>

- **Passo 2.** Ative todas as opções e clique em **START**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/3.png" style={{width:900, height:'auto'}}/></div>

Você verá a seguinte janela se o ESPHome for carregado com sucesso

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/4.png" style={{width:900, height:'auto'}}/></div>

#### Lâmpada LED do anoitecer ao amanhecer

**Resumo**

Vamos fazer uma demonstração de lâmpada LED do anoitecer ao amanhecer; a luz mudará com a intensidade da luz ao longo do dia. Se você estiver interessado, continue lendo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/HA_demo.jpg" style={{width:500, height:'auto'}}/></div>
**Passo 1.**   Preparação de hardware

<table align="center" style={{textAlign:'center', overflowX: 'scroll', border: '1px solid #ccc', }}>
 <tr>
  <th>XIAO ESP32-C3</th>
        <th>COB LED Driver Board for XIAO</th>
        <th>Grove - Digital Light Sensor</th>
        <th>Single Ended COB LED Strip</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:150, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/COB-LED-Driver-Board-for-Seeed-Studio-XIAO.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/hardware%20overview.jpg" style={{width:250, height:'auto'}}/></div></td>
        <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/1-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:250, height:'auto'}}/></div></td>
 </tr>
    <tr>
     <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/COB-LED-Driver-Board-for-Seeed-Studio-XIAO-p-6602.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
        <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/Single-Ended-COB-LED-Strip-White-6500K-300mm-5PCS-p-6591.html" target="_blank">
            <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
      </a>
  </div></td>
 </tr>
</table>

**Passo 2.** Conecte o Seeed Studio XIAO ESP32-C3, a COB LED Driver Board for XIAO e a Single Ended COB LED Strip - White como mostrado abaixo:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/4-100061492-Single-Ended-COB-LED-Strip---White(6500K)-300mm.jpg" style={{width:500, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/connect2.png" style={{width:500, height:'auto'}}/></div>

**Passo 3.** Abra a página do ESPHome e clique em **+ NEW DEVICE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/5.png" style={{width:900, height:'auto'}}/></div>

**Passo 4.** Clique em **CONTINUE**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-img/6.png" style={{width:900, height:'auto'}}/></div>

**Passo 5.** Insira um **Name** para o dispositivo e insira as credenciais de WiFi, como **Network name** e **Password**. Em seguida, clique em **NEXT**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_1.1.png" style={{width:400, height:'auto'}}/></div>

**Passo 6.** Selecione **ESP32-C3** e clique

**Passo 7.** Clique em **SKIP** porque vamos configurar esta placa manualmente

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/C3-ESPHome-full_function/14.png" style={{width:400, height:'auto'}}/></div>

**Passo 8.** Clique em **EDIT** na placa recém-criada

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-ro-dawm_LED_lamp_2.2.png" style={{width:400, height:'auto'}}/></div>

**Passo 9.** O código a seguir é parcialmente copiado para o final do arquivo .ymal. O XIAO ESP32-C3 lê o valor de luz do Grove Digital Light Sensor e altera o nível de corrente do pino D2 de acordo com a intensidade da luz, para assim controlar a barra de luz

```yaml

# ----------- Additional section (TSL2561, address 0x29) starts -----------
i2c:
  sda: 6
  scl: 7
  scan: true

# Global variables
globals:
  # Record the end timestamp of sensor ignore period (milliseconds)
  - id: ignore_sensor_until
    type: uint32_t
    restore_value: no
    initial_value: '0'
  # Flag: True means current operation is from sensor
  - id: is_robot
    type: bool
    restore_value: no
    initial_value: 'false'

sensor:
  - platform: tsl2561
    name: "Ambient Light"
    address: 0x29
    # Ultra-fast response configuration
    update_interval: 200ms
    integration_time: 101ms
    gain: 1X
    id: lux
    on_value:
      then:
        - lambda: |-
            // 1. Check if in manual control ignore period
            if (millis() < id(ignore_sensor_until)) {
              return;
            }

            // 2. Ultra-fast light control logic
            bool should_turn_on = (x < 180); // Threshold for turning on (dark)
            bool should_turn_off = (x > 220); // Threshold for turning off (bright)

            // Get current light state
            bool is_currently_on = id(light_strip).remote_values.is_on();

            if (should_turn_off && is_currently_on) {
              ESP_LOGD("custom", "Environment brightened (Lux: %.1f), sensor auto-off light", x);

              // Key: Inform Light component this is automated operation
              id(is_robot) = true;

              auto call = id(light_strip).turn_off();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            } 
            else if (should_turn_on && !is_currently_on) {
              ESP_LOGD("custom", "Environment darkened (Lux: %.1f), sensor auto-on light", x);

              // Key
              id(is_robot) = true;

              auto call = id(light_strip).turn_on();
              call.set_transition_length(1000); // 1 second fade
              call.perform();
            }

output:
  - platform: ledc
    pin: 4
    id: pwm_output
    frequency: 1000Hz
    inverted: true

light:
  - platform: monochromatic
    output: pwm_output
    name: "Light Strip"
    id: light_strip
    restore_mode: ALWAYS_OFF
    default_transition_length: 1s

    # Monitor all state changes (on/off/dimming)
    on_state:
      - lambda: |-
          // Check who triggered this state change
          if (id(is_robot)) {
            // If triggered by Sensor:
            ESP_LOGD("custom", "Detected automated operation, not ignoring sensor");
            // Task completed, wait for next cycle
            id(is_robot) = false;
          } else {
            // Triggered by human (HA/Switch):
            ESP_LOGD("custom", "Detected manual operation, ignoring sensor for 30 seconds");
            // Set ignore end time = current time + 30000 milliseconds
            id(ignore_sensor_until) = millis() + 30000;
          }
```
:::tip
Na configuração do Home Assistant, os números para sda, scl e pino sempre se referem aos números GPIO, não às etiquetas de silk-screen impressas na placa XIAO.
:::

**Passo 10.** Clique no botão Install no canto superior direito. Em seguida, selecione o último item **Manual download**, selecione **Modern format**

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_3.png" style={{width:500, height:'auto'}}/></div>

Em seguida, levará bastante tempo para baixar e compilar, portanto, seja paciente. Quando tudo estiver pronto, o firmware (XX.bin) será baixado automaticamente para o seu computador. Compilação bem-sucedida, como mostrado na figura abaixo

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_4.3.png" style={{width:350, height:'auto'}}/></div>

**Passo 11.** Usando a [ferramenta Web do ESPhome](https://web.esph

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/34.png" style={{width:800, height:'auto'}}/></div>

Select the XIAO ESP32 serial port in the popup window, click **INSTALL** and then select the .bin file downloaded from above steps.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/35.png" style={{width:800, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/homs-xiaoc3-linkstar/38.png" style={{width:500, height:'auto'}}/></div>

**Step 12.** Once install successfully, you can see like this:

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/demo.gif" style={{width:700, height:'auto'}}/></div>
When the light is strong, the night light turns off,When the light is weak, the night light is on.

**Step 13.** Once install successfully, Open the log and you will see the feedback messages.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_5.png" style={{width:500, height:'auto'}}/></div>


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Dusk-to-dawn_LED_lamp_6.png" style={{width:500, height:'auto'}}/></div>


If you like it, you can also follow the above steps to make a night light that is unique to you!

:::tip
While the board components are rated for -40°C to 85°C, driving all 7 channels at maximum load (Total >1A) will generate significant heat. If installed in a confined space (e.g., inside a sealed plastic model), please ensure passive ventilation to prevent triggering the PMIC's thermal shutdown protection.
:::

## Special appreciation
We extend our special thanks to Xinyu for the valuable contribution to the 3D printing work.

 The original design demonstrates remarkable creativity and practical value. For those interested in viewing the original design, the demonstration video and the author's homepage are available via the links provided below.

**[LED Lamp 3D Printed Case](https://makerworld.com.cn/zh/models/126527-leddeng-b3#profileId-11109)**

**[Author's Homepage](https://makerworld.com.cn/zh/@GLB_xinyulin/upload)**

## Resources

[PDF] **[Seeed Studio COB LED Driver Board Schematic](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/SCH_Sch_V1.2_2025-11-21.pdf)**

[ZIP] **[Seeed Studio COB LED Driver Board PCB](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/Gerber_PCB_V1.2_2025-11-25.zip)**

[STEP] **[Seeed Studio COB LED Driver Board 3D Model](https://files.seeedstudio.com/wiki/COBLED_Driver_Board_for_XIAO/cob_led_driver_board.STEP)**


## FQA

**P1. Por que minha placa fica quente?**
  - Porque há um fenômeno de hot-swapping. Quando o XIAO é conectado à USB e depois reconectado à placa driver, esse processo causará um curto‑circuito no condutor de corrente da placa de desenvolvimento e até mesmo queima.


## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>