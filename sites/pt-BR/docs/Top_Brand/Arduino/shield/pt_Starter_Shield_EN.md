---
description: Starter_Shield_EN
title: Starter Shield EN
keywords:
  - Arduino shield
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Starter_Shield_EN
sku: 104030047
last_update:
  date: 2/16/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Starter_Shield_EN/
---

<!-- ---
name: Starter_Shield_EN
category: Discontinued
bzurl:
oldwikiname: Seeeduino_Stalker
prodimagename:
bzprodimageurl: https://www.research.net/r/Starter_Shield_EN
sku:
tags:

--- -->

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tickshield_02.jpg)

O Starter Shield é um começo perfeito para iniciantes no mundo Arduino. Você pode aprender truques básicos de soldagem e praticar princípios de programação enquanto aprende com este kit. Preparamos um guia de soldagem detalhado e uma biblioteca totalmente suportada de exemplos de programação, do fácil ao difícil, para que eletrônica possa ser divertida mesmo que você tenha pouco conhecimento técnico. Esperamos que você se divirta e adquira algum conhecimento com este kit!

Este é um exemplo [How to make tiny tiger Machine](https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/) usado pelo Starter Shield.

O Starter Shield contém alguns recursos eletrônicos básicos, como botões, sensores, buzzer e display. É uma ótima maneira de aprender a soldar. O Starter Shield é um kit de soldagem de furo passante para iniciantes. Depois de montar o kit, você terá dominado o básico de soldagem por furo passante e terá um despertador em estilo geek que funciona com o seu Arduino.

Modelo: [SLD90400P](https://www.seeedstudio.com/depot/tick-tock-shield-p-1371.html?cPath=6_7)

## Lista de peças

* 1x Buzzer ;

* 1x CAP Alumínio 100uF-16V;

* 1x Sensor de Temperatura-10k;

* 1x RES Fotoresistor 10K;

* 4x RES 10K-5%-1/4W;

* 4x RES 220R-5%-1/4W；

* 3x RES 4.7K-5%-1/4W;

* 2x Header Macho Azul VERT;

* 2x Header Macho Azul VERT;

* 1x Header Fêmea Azul VERT;

* 1x Bateria de íon de lítio 3V-40mAh;

* 1x Suporte de Célula de Bateria SMD Plástico;

* 1x CI Driver;

* 1x RTC Clock/Timing;

* 2x Soquete para CI;

* 3x Botão Superior;

* 2x Header Fêmea Redondo Preto VERT;

* 1x LED Verde-Verde;

* 1x LED Azul-Azul;

* 2x LED Vermelho-Vermelho;

* 1x LED 7-SEG-Vermelho;

* 1x Cristal 32.768KHz-12.5pF-20ppm-30K;

* 2x CAP Disco Cerâmico 1nF-50V-20%;

* 1x CAP Disco Cerâmico 100nF-25V;

* 1x Guia de Soldagem do Starter Shield

* 1x PCB do Starter Shield;

## Especificação  

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Tick_Shield_Interface_Function.jpg)

**Recursos de Hardware**

* Suporte para Bateria Tipo Moeda: fornece energia para o CI RTC quando a alimentação externa está desligada;

* Buzzer: cria efeito de áudio;

* Sensor de Luz: detecta a intensidade da luz ambiente;

* Sensor de Temperatura: detecta a temperatura ambiente;

* K1...K3: botões temporários;

* D1...D4: LEDs em azul, verde, vermelho e vermelho;

* U3: VS1307, CI de Relógio em Tempo Real;

* U5: TM1636, CI driver de display de 7 segmentos.

**Pinos Usados no Arduino**

* D2: Controla LED1;

* D3: Controla LED2;

* D4: Controla LED3;

* D5: Controla LED4;

* D6: Controla o Buzzer;

* D7: pino SCLK do VS1636;

* D8: pino DIO do VS1636;

* D9: Controla K1;
* D10: Controla K2;
* D11: Controla K3;

* A0(D14): Lê medições do sensor de temperatura;

* A1(D15): Lê medições do sensor de luz;

* A4(D18): pino SDA do DS1307
* A5(D19): pino SCK do DS1307

## Demonstração  

Você deve terminar a soldagem do seu Tick Tock Shield antes de passar para as demonstrações a seguir. Se você não fez isso, clique [aqui](https://www.seeedstudio.com/document/pdf/Tick%20Tock%20Shield%20Soldering%20Guide.pdf) para baixar o guia de soldagem.

Aqui começamos a apresentar 7 demos do fácil ao difícil. Elas envolvem o uso de todos os recursos de hardware do Tick Tock Shield:

**Demo 1: Varredura dos LEDs**

1. Esta demo envolve apenas o uso do atuador mais básico - LEDs.

2. Reinicie a Arduino IDE. Abra o exemplo "RunLED" pelo caminho: File --&gt; Examples --&gt; TickTockShield--&gt; RunLED.

   ![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Open_RunLED_Code.jpg)

3. Esta demo pode varrer 4 LEDs com uma velocidade ajustável. Você pode alterar a velocidade de varredura mudando o parâmetro da função "runLED(speed)". Encontre mais ilustrações da função em seu comentário.

4. Clique no botão de upload para enviar o programa para o Arduino.

5. Você pode ver quatro luzes de LED acenderem e apagarem da esquerda para a direita em uma determinada velocidade depois que o programa é carregado.

**Demo 2: Controlar LEDs por Teclas**

Esta demo mostra como controlar LEDs com a entrada mais básica - botões.

1. Abra o exemplo "ControlLED" da mesma forma que abriu o "RunLED" acima.

2. Esta demo pode ligar ou desligar quatro LEDs por teclas. Definimos duas flags para armazenar o status deste teste, TEST_START e TEST_END. Toda vez que a tecla "menu" é pressionada, o status alterna entre TEST_START e TEST_END. No status de TEST_START, a tecla "increase" pode acender mais um LED da direita para a esquerda a cada vez que é pressionada. A tecla "decrease" tem um efeito inverso ao da tecla "increase".

**Demo 3: Alterar o Tom do Buzzer por Teclas**
Esta demo envolve como produzir um som com o buzzer e, como você já sabe como usar botões, nesta demo usamos botões para aumentar ou diminuir o tom do buzzer.

1. Abra o exemplo "changeThePitch".

2. Toda vez que a tecla "increase" é pressionada, o tom do buzzer sobe. E quando a tecla "decrease" é pressionada, o tom desce.

**Demo 4: Exibir Temperatura**

Comece com sensores. Primeiro temos aqui o sensor de temperatura. Tente ler seu valor e exibi-lo no display de 7 segmentos.

1. Abra o exemplo "MeasureTemprature".
2. O Display de 7 segmentos exibirá a temperatura atual lida do sensor de temperatura, como mostrado abaixo.
3. Se você perceber, na imagem abaixo, que o contraste não é forte o suficiente, tente um ângulo de visão mais baixo. Este princípio também se aplica às demos seguintes que envolvem o uso do display de 7 segmentos.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Measure_Temperature.jpg)

**Demo 5: Fazer um LED Controlado por Sensor de Luz**

Não seria conveniente se o brilho do display pudesse se ajustar automaticamente de acordo com a luz ambiente? Esta demo mostra como fazer isso usando um sensor de luz.

1. Abra o exemplo "SensorControlBrightness" da mesma forma.

2. Este exemplo pode alterar o brilho do Indicador BRIGHT_ADJUST de acordo com a intensidade da luz ambiente. Quanto mais escuro o ambiente, mais claro o LED fica. A imagem à direita é o resultado.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Connect_Tick_Shield.jpg)

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Control_Light.jpg)

**Demo 6: Exibir Caracteres Numéricos**

Esta demo mostra como controlar o conteúdo do display de 7 segmentos.

1. Abra o exemplo "CharacterFlow".

2. Este exemplo pode executar caracteres numéricos 0, 1, 2, 3, 4, 5, 6, 7, 8 ,9, A, b, C, d, E, F da direita para a esquerda.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Flow_Character.jpg)

**Demo 7: Relógio em Tempo Real**

Esta é uma demo final que envolve todos os recursos de hardware mencionados acima e executa todas as funções de um despertador da vida real, como exibir a hora, tocar um alarme para tirá-lo da cama e assim por diante. Além disso, como um sensor de luz e um sensor de temperatura são adicionados, o Tick Tock Shield faz mais do que um despertador normal. Ele pode detectar a luz ambiente e ajustar automaticamente o brilho do display de 7 segmentos. Também pode mostrar a temperatura atual em um determinado intervalo de tempo.

1. Abra o exemplo "RealTimeClock" e envie o exemplo para o Arduino.

2. O Display de 7 segmentos exibirá alternadamente a hora atual e a temperatura.

![](https://files.seeedstudio.com/wiki/Starter_Shield_EN/img/Display_RTC_.jpg)

3. Método para ajustar a hora e definir o despertador:

* 1) Como há um chip RTC na placa, você não precisa redefinir a hora toda vez que ligá-la, claro, desde que a bateria tipo moeda do chip RTC esteja carregada. Mas se esta for a sua primeira vez ligando o Tick Tock Shield, é necessário ajustar a hora.

* 2) Três botões são usados para ajustar a hora. Eles são "menu"(K3), "increase"(K2) e "decrease"(K1). Pressione "menu" para circular entre os seguintes modos de configuração:

  * a) ajustar a parte de horas da exibição normal de hora

  * b) ajustar a parte de minutos da exibição normal de hora

  * c) ajustar a parte de horas do despertador

  * d) ajustar a parte de minutos do despertador

  * e) ajustar o brilho padrão do display de 7 segmentos

  * f) ligar ou desligar a função de alarme

  * g) sair dos modos de ajuste de hora

* 3) Se você quiser sair antes de passar por todas as 7 etapas acima, há duas formas de interrupção. Uma, pressione K3 por 3s, não importa em qual etapa. Desta forma, o Tick Tock Shield confirmará todas as configurações que você fez e sairá. Duas, deixe o Tick Tock Shield parado por 5s. Desta forma, nenhuma configuração será armazenada e você também sairá do modo de ajuste de hora.

* 4) K2 é atribuído para definir o status do despertador. Você pode saber o status do despertador através do Indicador ALARM_ENABLE.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos  

* **[Library]** [Biblioteca Starter Shield](https://github.com/Seeed-Studio/Starter_Shield)

* **[Eagle]** [Arquivo eagle do Starter Shield](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.zip)
* **[PDF]** [BLE Bee v1.0 pdf](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

* **[EAGLE]** [BLE Bee v1.0 sch](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter%20Shield%20v1.1.sch)

* **[Esquemático]** [Starter Shield pdf Esquemático](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Starter_Shield_v1.1.pdf)

* **[Datasheet]** [Datasheet TM1636](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Tm1636.pdf)

* **[Datasheet]** [Datasheet VS1307](https://files.seeedstudio.com/wiki/Starter_Shield_EN/res/Vs1307.pdf)

## Referência

### Classe EEPROM  

**Função da Classe:** Ler e gravar a EEPROM do chip AVR. O tamanho da EEPROM do chip ATmega328P é 1K Bytes para o Seeeduino V3.0. O conteúdo da EEPROM que você gravou não será perdido quando desligar a energia. Ela é usada para salvar a hora do alarme e o flag de habilitação do alarme na Demo RealTimeClock. Você não precisa redefinir o despertador.

**Descrição da Função:**

**1. EEPROM.read(int address);**
Esta função é usada para ler dados de um endereço especificado da EEPROM.

* address: o endereço da unidade alvo.

Exemplo：

```cpp
temp_data[i] = EEPROM.read(i);
```

**2. EEPROM.write(int address, uint8_t value);**
 A função é usada para gravar dados em um endereço especificado da EEPROM.

* address: o endereço da unidade alvo
* uint8_t value: dados a serem gravados na unidade alvo.

Exemplo:

```cpp
if(temp_data[i] != mark[i])
    {
      EEPROM.write(0,mark[0]);
      EEPROM.write(1,mark[1]);
      EEPROM.write(2,mark[2]);
      EEPROM.write(3,mark[3]);
      EEPROM.write(4,mark[4]);
      return true;
    }
```

### Classe TM1636  

**Função da Classe：**esta classe contém todas as funções para controlar quatro displays de 7 segmentos.
 **Descrição da Função:**

 **1. tm1636.point(boolean PointFlag);**
 A função é usada para ligar ou desligar o ponto do relógio (:). Esta função entrará em vigor toda vez que o conteúdo do display mudar.

* PointFlag: pode ser 0(off) ou 1(on).

Exemplo:

```cpp
if(flag_clockpoint)
      {
        tm1636.point(POINT_ON);
      }
      else tm1636.point(POINT_OFF); 
```

**2. Tm1636.display(int8_t DispData[]);**
Criar um fluxo de caracteres com o conteúdo de DispData[].

* DispData[]: um array do tipo int8_t, incluindo 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, A, b, C, d, E e F.

Exemplo:

```cpp
tm1636.display(disp);
```

### Classe TickTockShield  

**Função da Classe** Operar todos os componentes no Tick Tock Shield.
**Descrição da Função:**

**1. ticktockshield.init();**
A inicialização do Tick Tock Shield.

**2. ticktockshield.runLED(byte speed, byte direction);**

Esta função varre 4 LEDs na direção que você escolher.

* speed: a taxa de fluxo dos LEDs de 1(mais lento) a 10(mais rápido).
* direction: direção do fluxo de LED, pode ser LEFT_TO_RIGHT ou RIGHT_TO_LEFT.

Exemplo:

```cpp
/*Run the 4 LEDs from left to right*/
ticktockshield.runLED(1,LEFT_TO_RIGHT);
```

**3. ticktockshield. turnOnLED();**
Ligar todos os 4 LEDs.

**4. ticktockshield. turnOffLED();**
Desligar todos os 4 LEDs.

**5. setLed(unsigned char led_status, int pinLED);**
A função é usada para ligar ou desligar um LED individual.

* led_status: pode ser LED_ON ou LED_OFF.
* pinLED: pode ser um entre LED_CLOCK_ADJUST，LED_ALARM_ADJUST，LED_BRIGHT_ADJUST，LED_ALARM_ENABLE.

Exemplo:

```cpp
void TickTockShield::turnOffLED()
{
 setLed(LOW,LED_CLOCK_ADJUST);
 setLed(LOW,LED_ALARM_ADJUST);
 setLed(LOW,LED_BRIGHT_ADJUST);
 setLed(LOW,LED_ALARM_ENABLE);
}
```

**6. ticktockshield.alarming();**
Fazer o buzzer apitar.
Exemplo:

```cpp
/*It will sound alarm for a minute untill the "MENU" key is pressed*/
    if(ticktockshield.isAlarmEnable())
    {
      ticktockshield.alarming();
    }
```

**7. ticktockshield.turnOffAlarm();**
Desligar o alarme quando o buzzer estiver apitando.

**8. ticktockshield.setAlarm(uint8_t hour,uint8_t minute,uint8_t flag_enabl);**
Definir a hora do alarme.

* hour: hora
* minute: minuto
* flag_enabl: flag que restaura o status do alarme, pode ser 0(não habilitado) ou 1(habilitado)

Exemplo:

```cpp
ticktockshield.setAlarm(12,0);//Yes,the alarm clock is initialized to 12:00 and the data in the EEPROM.
```

**9. ticktockshield.getAlarm();**
Ler o valor de alarme predefinido da EEPROM e armazená‑lo nas variáveis fornecidas, incluindo o flag de habilitação do alarme.
Exemplo:

```cpp
if(isFirstLoad())//if it is the first time to load the firmware?
 {
  ticktockshield.setAlarm(12,0);
  }
 else ticktockshield.getAlarm();//No,read the alarm clock stored in EEPROM
  ```

**10. ticktockshield.getTemperature();**
Obter a leitura do sensor de temperatura.
Exemplo:

```cpp
/*Read the ambient temperature and display on the digital tube.*/
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**11. ticktockshield.displayTemperature(int8_t temperature);**
Exibir o valor de temperatura(valor negativo suportado) no display de 7 segmentos. O caractere C representa graus Celsius.
Exemplo:

```cpp
 ticktockshield.displayTemperature(ticktockshield.getTemperature());
```

**12. ticktockshield.scanKey();**
Descobrir qual tecla foi pressionada. Retorna o número do pino da tecla pressionada. E retorna "-1" se nenhuma tecla for pressionada.

```cpp
if((flag_scan_again)&&(KEY_MENU == ticktockshield.scanKey()))
      {
        ticktockshield.writeToAdjustArea();
        ticktockshield.processKey();
        system_states = SYSTEM_ADJUSTING;
      }
```

**13. ticktockshield.processKey();**
Processar o comando que você insere por meio das teclas. Se for um pressionamento normal, esta função fará um bip correspondente ao pressionamento. Se você pressionar a tecla "menu" por mais de 3s, então esta função fará o Tick Tock Shield entrar no modo de ajuste de hora. Se nenhuma outra tecla for pressionada após a tecla "menu", então esta função fará o Tick Tock Shield sair do modo de ajuste de hora.

**14. ticktockshield.processSystemStatus();**
Executar diferentes tarefas de acordo com o status do sistema quando for chamada. O status do sistema pode ser "ajustar hora do relógio" 、 "hora do alarme", "ajustar brilho do display de 7 segmentos" e "habilitar alarme".

**15. ticktockshield.writeToAdjustArea();**
Transferir as informações de hora mais recentes do modo normal de exibição de hora para o modo de ajuste de hora para que possam ser usadas no modo de ajuste de hora.

**16. ticktockshield.writeToNormalArea();**
Transferir as informações de hora definidas no modo de ajuste de hora para o modo normal de exibição de hora.

**17. ticktockshield.writeTime();**
Gravar informações de hora no chip RTC.

**18. ticktockshield.getTime();**
Ler as informações de hora atual do RTC.

**19. ticktockshield.displayTime();**
Exibir a hora no display de 7 segmentos.

Exemplo:

```cpp
if(ticktockshield.isAlarmEnable())
      {
        tm1636.point(POINT_ON);
        ticktockshield.displayTime();
        system_states = SYSTEM_ALARMING;
        return;
      }
```

**20. ticktockshield.display(int8_t DispData []);**
Exibir informações alfanuméricas no display de 7 segmentos.

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