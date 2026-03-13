---
description: Shield Carregador Solar V2.2
title: Shield Carregador Solar V2.2
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Solar_Charger_Shield_V2.2
sku: 106990020
last_update:
  date: 01/11/2023
  author: Eico
no_comments: false
createdAt: '2023-02-15'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Solar_Charger_Shield_V2.2/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2.jpg" alt="pir" width={600} height="auto" /></p>

O carregador solar é um shield empilhável para plataformas compatíveis com Arduino, que permite alimentação adaptativa por bateria e atua como coletor de energia para recarga em campo. Você pode usar várias baterias que tenham tensão de 3,0 V–4,2 V para elevar para saída de 5 V, ou colocar uma bateria de íon de lítio e um painel solar para formar uma unidade de sensor autônoma. A corrente máxima fornecida pela placa pode chegar a 600 mA. Um conector USB também é útil para carregar a bateria.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Solar-Charger-Shield-v2.2-p-2391.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Recursos

---

* Proteção contra curto-circuito

* Potência de saída de 3 W ao conectar bateria

* Corrente de carga contínua até 900 mA

* Indicação de status da bateria (Vermelho: Carregando, Verde: Carregada)

* Conector Micro-USB

## Especificação

---

* Tensão de entrada da bateria: 3,0~4,5 V

* Tensão de entrada USB: 4,75~5,25 V

* Tensão de entrada solar: 4,8~6 V

* Potência máxima de saída (com bateria): 3 W (600 mA@5 V)

* Tensão de ripple: &lt;100 mV @ 500 mA

* Dimensões: 68*53 mm

## Aplicações

---

* Unidade de sensor sem fio
* Carga solar
* Tweet-a-volt-arduino

## Informações sobre o uso de painéis solares para carregamento

---

1) O shield carregador solar produz carga sob luz solar e luz de lâmpadas de filamento. Sua função é mais eficaz na primeira do que na segunda. Os painéis solares requerem radiações invisíveis, ou seja, radiação ultravioleta e infravermelha para produzir corrente.

2) Para testar o sistema sob uma lâmpada de filamento, mantenha o painel solar a uma distância menor que 20 cm (&lt; 0,5 pés). No entanto, o carregamento pode não ser eficaz sob lâmpadas de filamento.

3) Posicione o painel solar em um ângulo tal que a quantidade máxima de luz solar incida sobre ele.

4) Proteja o painel solar de exposição excessiva à água/vapor de água. Isso pode oxidar a superfície do painel solar e reduzir seu desempenho.

5) O painel solar geralmente vem com uma folha de cobertura transparente de proteção. Remova a folha plástica transparente para melhor desempenho do painel solar.

6) Proteja a superfície do painel solar contra arranhões

## Atenção

---

1) O shield carregador solar é projetado para proteger contra qualquer potencial curto-circuito. No entanto, deve-se ter cuidado para evitar tais situações.

2) O shield solar não deve ser operado em tensões maiores que 5 V

## Uso

---

1) Conecte o painel solar e a bateria Li-Pol em seus locais designados, como mostrado na figura abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_inputs.jpg" alt="pir" width={600} height="auto" /></p>

Solar_Charger_Shield_v2.2_inputs.jpg

2) Coloque o painel solar sob a luz do sol ou lâmpadas de filamento, conforme mencionado na seção "Information for using solar panels"

3) Certifique-se de que a luz de carregamento (Vermelho) acenda, como mostrado na figura abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_charging.jpg" alt="pir" width={600} height="auto" /></p>

4) Quando a bateria estiver totalmente carregada, a luz verde acende.

5) Em seguida, você pode montar o shield no Arduino. Ao ligar o shield carregador solar, ele deve alimentar o Arduino, como mostrado na figura abaixo:

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar-Charger-Shield-v2.2_power-arduino.jpg" alt="pir" width={600} height="auto" /></p>

## Testando o shield solar com um programa simples de Arduino

---
Esta seção irá ensinar você a medir a tensão da bateria Lipo.

Para conectar o pino VBAT ao pino analógico A0, de modo que possamos ler os dados a partir do pino A0, precisamos curto-circuitar o R7 usando um resistor de 0 Ω, como mostrado na figura

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_shortR7.jpg" alt="pir" width={600} height="auto" /></p>

### Exemplo de Programação

Você pode medir a tensão da bateria usando o seguinte exemplo:

```cpp
/*
 Solar charger shield voltage measurement example. Connect VBAT pin to analog pin A0.

 The pin measures 2.0 V when not under direct exposre to sunlight and 5V when exposed to sunlight.

 This example code is in the public domain.

 */

// These constants won't change.  They're used to give names
// to the pins used:
const int analogInPin = A0;  // Analog input pin that the VBAT pin is attached to


int BatteryValue = 0;        // value read from the VBAT pin
float outputValue = 0;        // variable for voltage calculation

void setup() {
    // initialize serial communications at 9600 bps:
    Serial.begin(9600);
}

void loop() {
    // read the analog in value:
    BatteryValue = analogRead(analogInPin);
    // Calculate the battery voltage value
    outputValue = (float(BatteryValue)*5)/1023*2;
    // print the results to the serial monitor:
    Serial.print("Analog value = " );
    Serial.print(BatteryValue);
    Serial.print("\t voltage = ");
    Serial.println(outputValue);
    Serial.println("V \n");

    // wait 10 milliseconds before the next loop
    // for the analog-to-digital converter to settle
    // after the last reading:
    delay(10);
}
```

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

---
* [Solar Charger Shield v2.2 sch&amp;pcb](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip)

* [Solar Charger Shield v2.2.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar%20Charger%20Shield%20v2.2.pdf)
* [DSE-CN3065.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/DSE-CN3065.pdf)

* [ETA1036.pdf](https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/ETA1036.pdf)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
