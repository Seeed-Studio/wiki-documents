---
description: Grove - Kit Inicial v3
title: Grove - Kit Inicial v3
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Starter_Kit_v3
sku: 110060024
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Grove_Starter_Kit_v3/
---

Grove é uma plataforma de eletrônica modular para prototipagem conveniente e rápida. Muitas configurações podem ser montadas sem a necessidade de soldagem ou protoboards. Basta conectar os módulos Grove ao Grove shield e aproveitar o código de exemplo fornecido para cada módulo Grove. O Grove Starter Kit contém uma infinidade de sensores e atuadores, incluindo suporte para áudio, luz, movimento, tato e outros modos de interação. Assim, você pode começar a experimentar imediatamente com uma grande variedade de projetos.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_v2_Photo.jpg)

##  Prefácio

###  Sobre o Grove

Grove é um conjunto de ferramentas moderado e pronto para uso. Assim como Lego, ele adota uma abordagem de blocos de montagem para montar eletrônica. Em comparação com o método de aprendizado tradicional e complicado de usar uma protoboard e vários componentes eletrônicos para montar um projeto, o Grove simplifica e condensa significativamente o processo de aprendizado. O sistema Grove é composto por um base shield e vários módulos com conectores padronizados.

O base shield permite a conexão fácil de qualquer entrada ou saída de microprocessador a partir dos módulos Grove. Cada módulo Grove atende a uma única função, como um botão simples ou um sensor de frequência cardíaca mais complexo. Cada um vem com documentação clara e código de demonstração para ajudar você a começar rapidamente.

###  Conheça o Arduino

Se esta é a sua primeira vez usando um Arduino, você precisará concluir as seguintes etapas:

<!-- *   [Getting Started with Arduino](/pt-br/Getting_Started_with_Arduino)

*   [Install your microcontroller](/pt-br/Getting_Started_with_Seeeduino)

*   [Download and import the Grove - Starter Kit Sketchbook](/pt-br/How_To_Use_Sketchbook) -->

O endereço de download do Grove - Starter Kit Sketchbook está [aqui](https://github.com/Seeed-Studio/Sketchbook_Starter_Kit_V2.0).

Agora você está pronto para explorar o ecossistema Grove.

###  Lista de peças

*   1*Base Shield
*   1*Grove - LCD RGB Backlight
*   1*Grove - Smart Relay
*   1*Grove - Buzzer
*   1*Grove - Sound Sensor
*   1*Grove - Touch Sensor
*   1*Grove - Rotary Angle Sensor
*   1*Grove - Temperature Sensor
*   1*Grove - LED
*   1*Grove - Light Sensor
*   1*Grove – Button
*   1*DIP LED Azul-Azul
*   1*DIP LED Verde-Verde
*   1*DIP LED Vermelho-Vermelho
*   1*Mini Servo
*   10*Cabos Grove
*   1*Adaptador de 9V para Barrel Jack
*   1*Manual do Grove starter kit
*   1*Caixa Plástica Verde


###  Detalhes dos Módulos

#### Grove - Base Shield

Vamos começar com a placa Grove base shield. "Grove - Base Shield" é a nova versão do "Electronic Brick Shield". O Base Shield é compatível com o Seeeduino v3.0 (168p e 328p), bem como com o Arduino UNO e Duemilanove. Há 16 portas Grove no base shield, divididas em quatro áreas funcionais: analógica (4), digital (7), I2C (4) e UART (1).

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Base_Shield_IO.jpg)

*   Portas Digitais

Como mostra a foto, há sete portas digitais, rotuladas de D2 a D8. Cada uma delas lida com um par de pinos digitais (2/3 ... 8/9) no Arduino Uno. Elas podem ser usadas para ler um sensor digital (por exemplo, um botão) ou controlar um atuador digital (ou analógico, via PWM). Em qualquer caso, cada porta só pode lidar com dois estados lógicos: 0 ou 1.

*   Portas Analógicas

No lado esquerdo estão quatro portas Grove para fazer leituras analógicas. Sensores analógicos podem retornar leituras que variam de 0 a 1023. Em comparação com sensores digitais que retornam apenas 0 ou 1, leituras analógicas são mais detalhadas e precisas.

*   Portas I2C

Abaixo das portas digitais estão quatro portas Grove I2C. I2C é um protocolo de barramento de baixa velocidade que transfere dados por meio de dois fios: SCL e SDA. SCL é a linha de clock para sincronizar a transferência de dados no barramento I2C; SDA é a linha de dados.

<!-- For detailed information on how to use your Grove – Base Shield, go to [Base Shield V2](/pt-br/Base_Shield_V2). -->

####  Grove - LCD RGB Backlight

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Serial_LEC_RGB_Backlight_Lcd.jpg)

O Grove - LCD RGB Backlight oferece suporte à exibição de texto, usando caracteres definidos pelo usuário. Ele permite que você defina a cor da luz de fundo, usando a interface Grove simples e concisa. Ele usa I2C como método de comunicação com o seu Arduino. Assim, o número de pinos necessários para troca de dados e controle da luz de fundo é reduzido de cerca de 10 para 2, deixando mais capacidade de E/S para outras tarefas desafiadoras.

Grove_LCD_RGB_Backlight agora também oferece suporte ao MBED. Muitos agradecimentos pelas contribuições entusiásticas da comunidade. Para mais detalhes, você pode dar uma olhada [aqui](https://github.com/DavidElmoRoss/Grove_LCD_RGB_Backlight_V5).

**Exemplo**

O exemplo mostra como imprimir texto na tela e mudar a cor da luz de fundo. Encontre-o pelo caminho:

File -&gt; Sketchbook -&gt; Grove_RGB_Backlight_LCD -&gt; HelloWorld

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/RGBbacklight.jpg)

**Dicas**

Esta é uma tela LCD 16x2. Ela é capaz de exibir dois linhas de textos de dezesseis caracteres, suportando idiomas como inglês e japonês. Você também pode criar e usar caracteres personalizados definindo seus padrões de exibição. Você pode encontrar um exemplo de criação de caractere personalizado aqui:

[https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip](https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip)

####  Grove – Relay

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Twig-Relay.jpg)

O Relay é uma ferramenta útil para ampliar a capacidade de controle do seu Arduino! Envie o sinal de controle pela interface Grove e o relay abrirá ou fechará o circuito externo que está conectado aos terminais de parafuso. A tensão do circuito externo pode chegar a até 220 V! Então pegue este relay e comece alguns projetos realmente pesados!

**Exemplo**

O exemplo mostra como controlar o relay por meio de um botão: File -&gt; Sketchbook -&gt; Grove_Relay.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Relay_Ex.jpg)

**Dicas**

O Relay é uma chave mecânica controlada eletronicamente. O tamanho de um relay varia de acordo com sua capacidade de conduzir corrente. Quanto maior um relay (essencialmente, apenas a parte da caixa plástica), maior a corrente que ele pode conduzir.

<font color="red">
Tenha extremo cuidado ao trabalhar com tensões da rede elétrica – em caso de dúvida, entre em contato com um profissional, como um eletricista licenciado, para obter ajuda.
</font>

<!-- For detailed information on how to use your Grove – Relay, you can go to [Grove – Relay page](/pt-br/Grove-Relay). -->

####  Grove – Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Buzzer1.jpg)

O Buzzer é um Grove simples, mas divertido de usar. É um alto-falante piezoelétrico, acoplado a um circuito de controle simples. Se ele estiver conectado a uma saída digital, emitirá um tom quando a saída estiver em nível alto. Alternativamente, pode ser conectado a uma saída analógica (na verdade, digital modulada por largura de pulso) para gerar vários tons e efeitos.

**Exemplo**

Você pode usar o código para o Grove – Button para fazer o buzzer apitar quando você pressionar o botão. No entanto, o Grove – Buzzer pode ser muito mais divertido – ele pode tocar músicas! Este é um breve exemplo do Oomlout.com, tocando uma cantiga infantil caseira – “Twinkle Twinkle Little Star”.

Encontre o exemplo pelo caminho abaixo: File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Buzzer_Ex.jpg)

** Tips**

Como o buzzer piezo realmente funciona? Normalmente, há duas pastilhas cerâmicas em cada buzzer piezo. Quando tensões diferentes são aplicadas a elas, elas se atraem ou se repelem. O movimento dessas pastilhas causa vibrações no ar (isto é, som). Quando a frequência da vibração muda, a frequência do som mudará de forma correspondente.

<!-- For detailed information on how to use your Grove - Buzzer, go to [Grove - Buzzer page](/pt-br/Grove-Buzzer) -->

####   Grove - Sound Sensor

O módulo Sound sensor é um microfone simples. Baseado em um amplificador LM358 e um microfone de eletreto, ele pode ser usado para detectar o nível de som no ambiente.

**Exemplo**

O código para o Grove – Sound Sensor pode ser usado para controlar um LED cuja intensidade de brilho reflete a intensidade do som ambiente.

File -&gt; Sketchbook -&gt; Grove_Sound_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Sound_Sensor_Ex.jpg)

**Dicas**

O microfone de eletreto coleta a intensidade do som para todas as frequências, mas um potenciômetro pode atuar como porteiro. Por exemplo, quando você gira o eixo completamente no sentido horário, o potenciômetro pode deixar tudo passar. Quando você o gira completamente no sentido anti-horário, nada passará.

<!-- For a detailed information on how to use your Grove - Sound Sensor, go to [Grove - Sound Sensor page](/pt-br/Grove-Sound_Sensor) -->

####   Grove - Touch Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-touch_sensor_Photo.jpg)

O Grove - Touch Sensor permite substituir a pressão em um botão por contato em uma superfície de detecção. Ele pode detectar a mudança de capacitância quando um dedo está próximo. Portanto, quer o seu dedo toque o pad diretamente ou apenas fique perto dele, o Grove - Touch Sensor irá fornecer saída HIGH.

**Exemplo**

O código do Grove – Button funciona com este módulo. Encontre o exemplo pelo caminho abaixo: File -&gt; Sketchbook -&gt; Grove_Buzzer

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Touch_Sensor_Ex.jpg)

**Dicas**

Esta é uma alternativa ao botão de contato momentâneo. O Grove – Touch Sensor detecta a mudança de capacitância na região circular (sem pintura) na parte de baixo; quanto mais perto o seu dedo estiver dessa região, maior será a mudança de capacitância. Mesmo que haja papel entre o seu dedo e o sensor, ele ainda funcionará de forma confiável.

<!-- For detailed information on how to use your Grove - Touch Sensor, go to [Grove - Touch Sensor page](/pt-br/Grove-Touch_Sensor). -->

####   Grove - Rotary Angle Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Potentiometer1.jpg)

O potenciômetro Grove produz saída analógica entre 0 e VCC (3,3 ou 5 VCC). O alcance angular é de 300 graus, com uma variação linear de valor. O valor de resistência é de 10k ohms, perfeito para uso com Arduino. Isso também pode ser conhecido como um “sensor de ângulo rotativo”.

**Exemplo**

O exemplo mostra como ler o valor de um sensor de ângulo rotativo:

File -&gt; Sketchbook -&gt; Grove_Rotary_Angle_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Rotary_Angle_Sensor_Ex.jpg)

**Dicas**

Um potenciômetro rotativo é muito semelhante a um codificador rotativo, mas eles não são iguais. Um potenciômetro rotativo é essencialmente um potenciômetro deslizante, construído em forma circular. Ele informa, de maneira analógica, a fração do elemento resistivo que está sendo usada pelo contato deslizante.

<!-- For a detailed information on how to use your Grove - Rotary Angle Sensor,you can go to [Grove - Rotary Angle Sensor page](/pt-br/Grove-Rotary_Angle_Sensor) -->

####   Grove – Temperature Sensor

![400px](https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor/img/Tempreture_Sensor_Connector.jpg)

Grove - Temperature Sensor usa um termistor que retorna a temperatura ambiente. Nossa placa então converte esse valor de tensão medido por um pino de entrada analógica em uma temperatura. A faixa de operação é de -40 a 125 graus Celsius.

**Exemplo**

O exemplo mostra como converter a saída bruta do sensor em temperaturas. Você pode ver os dados em Celsius no monitor serial.

File -&gt; Sketchbook -&gt; Grove_Temperature_Sensor.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Temperature_Sensor_Ex.jpg)

**Dicas**

Grove – Temperature Sensor é usado para detectar a temperatura do ambiente.

<!-- For a detailed information on how to use your Grove - Temperature Sensor,you can go to [Grove - Temperature Sensor](/pt-br/Grove-Temperature_Sensor) -->

####   Grove - LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Photo.jpg)

Grove - LED é projetado para iniciantes em Arduino/Seeeduino monitorarem controles a partir de portas digitais. Ele pode ser facilmente montado na superfície da sua caixa ou mesa e usado como lâmpada piloto para energia ou sinal.

**Exemplo**

Neste exemplo fazemos uma luz de LED com efeitos de respiração:

File -&gt; Sketchbook -&gt; Grove_LED

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-LED_Ex.jpg)

**Dicas**

Preparamos três cores de lâmpadas de LED para você, você pode obter a cor que quiser trocando o LED no pequeno soquete Grove – LED. Os LEDs têm um cátodo no lado plano da lâmpada e um ânodo no lado arredondado da lâmpada. O ânodo precisa ser instalado correspondendo ao sinal ‘+’ no soquete para o LED funcionar corretamente.

<!-- For a detailed information on how to use your Grove - LED,you can go to [Grove - Red LED](/pt-br/Grove-Red_LED) -->

####   Grove - Light Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_photo.jpg)

O sensor de luz, também conhecido como resistor dependente de luz (LDR). Normalmente, a resistência do sensor de luz diminuirá quando a intensidade da luz ambiente aumentar.

**Exemplo**

Este exemplo irá acender um LED quando a intensidade da luz cair abaixo do limite predefinido:

File -&gt; Sketchbook -&gt; Grove_Light_Sensor

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Light_Sensor_Ex.jpg)

**Dicas**

A saída do sensor de luz analógico varia de 0 a 1023, mas a saída não é linear em relação à intensidade da luz ambiente.

<!-- For a detailed information on how to use your Grove - Light Sensor,you can go to [Grove - Light Sensor](/pt-br/Grove-Light_Sensor) -->

####   Grove – Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Button1.jpg)

Esta nova versão do módulo de botão Grove contém um botão independente, que é configurado com resistor de pull-down – pronto para uso com nossos microcontroladores como entrada digital. O botão envia o sinal para o fio SIG, NC não é usado neste módulo Grove.

**Exemplo**

Este exemplo mostra como ligar ou desligar um LED com este botão.

File -&gt; Sketchbook -&gt; Grove_Button

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Button_Ex.jpg)

**Dicas**

“Momentary” significa que o botão retorna após ser pressionado. Este botão produz saída ALTA quando pressionado e BAIXA quando solto.

####  Grove -  Servo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Servo_Photo.jpg)

Este é um atuador cuja posição pode ser controlada com precisão.

**Exemplo**

Preparamos um exemplo de como usamos um potenciômetro para controlar a posição do servo:

File --&gt; Sktechbook --&gt; Servo

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Grove-Starter_Kit_Servo.jpg)

**Dicas**

Grove – Servo tem opções de hardware de montagem para diferentes propósitos: você pode usá-las para mover um pequeno ventilador, levantar um objeto ou imitar o ponteiro de um relógio.

##  Projetos de demonstração
---
###  1. Uma Xícara de Flores

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/A_Cup_of_Flower.jpg)

**Descrição**

Você gostaria de uma xícara de flores para aliviar seu coração exausto? Este projeto é composto de Grove – LED e um Grove – Touch Sensor. Quando o sensor é tocado, esses adoráveis LEDs irão brilhar para você com um efeito de luz quente e confortável.

**Lista de Materiais**

<dl>
  <dd>1. Arduino x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – LED x 6;</dd>
  <dd>4. Grove – Touch Sensor x 1;</dd>
  <dd>5. Papel colorido 6 x 6cm x 6;</dd>
  <dd>6. Bateria de 9V &amp; clip para bateria de 9V x 1.</dd>
</dl>

:::note
    O número de LEDs é arbitrário. Há três deles contidos no kit básico. Mas você pode aumentar ou diminuir dependendo do volume da sua xícara. Eu tenho uma xícara grande aqui, então adicionei mais três do nosso site.
:::
**Passos**

**1. Dobre os Botões **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Fold_the_buds.jpg)

Escolha um padrão de flor de que você goste e siga seus passos para criar algumas delas. Uma busca no Google pode ajudar bastante a encontrar um. Há tantos entusiastas e artistas de origami na Internet que gostam de compartilhar seus artesanatos.

Eu escolhi tulipa aqui, mas girassol, rosa e lírio também parecem ótimos!

Ao dobrar o botão, você precisa deixar um pequeno furo em sua base para o cabo Grove passar.

**2. Configurar**


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Set_up.jpg)


Conecte os botões e o sensor de toque ao Grove – Base Shield com o cabo Grove de 10cm. E então faça o upload do código para o seu controlador.
```
<pre>void setup()
{
    pinMode(2, OUTPUT);
    pinMode(4, OUTPUT);
    pinMode(6, OUTPUT);
    pinMode(7, OUTPUT);
    pinMode(11, OUTPUT);
    pinMode(13, OUTPUT);
    pinMode(9, INPUT); //pin of touch sensor
}

void loop()
{
    int switchState = digitalRead(9);
    if(switchState == HIGH)
    {
        digitalWrite(2, HIGH);
        digitalWrite(4, HIGH);
        digitalWrite(6, HIGH);
        digitalWrite(7, HIGH);
        digitalWrite(11, HIGH);
        digitalWrite(13, HIGH);
    }
    else
    {
        digitalWrite(2, LOW);
        digitalWrite(4, LOW);
        digitalWrite(6, LOW);
        digitalWrite(7, LOW);
        digitalWrite(11, LOW);
        digitalWrite(13, LOW);
    }
    delay(100);
}</pre>
```
**3. Ligar &amp; Acomodar**


![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Battery.jpg)


Use uma bateria portátil de 9V para fornecer energia às flores e acomode-a na xícara. Pronto! Aproveite sua xícara de flores!

###   2. How You Doing!

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/How_you_doing.jpg)

(downloaded form think.bigchief.it)

**Descrição**

Como você diz olá a um amigo? Big Chief diria “o que é melhor do que um aperto de mãos?”. Quando um desses brinquedos de papel Big Chief se inclina encostando as costas nos outros, eles vão tremer para dizer oi!
**Lista de Materiais**

<dl>
  <dd>1. Arduini x 1;</dd>
  <dd>2. Grove – Base Shield x 1;</dd>
  <dd>3. Grove – Magnetic Switch x 1;</dd>
  <dd>4. Grove – Vibrator x 1;</dd>
  <dd>5. Brinquedos de papel x 2;</dd>
  <dd>6. Ímã x 1;</dd>
  <dd>7. Bateria de 9V &amp; clip para bateria de 9V x 1.</dd>
</dl>

**Nota:** O número de LEDs é arbitrário. Há três deles contidos no kit básico. Mas você pode aumentar ou diminuir dependendo do volume da sua xícara. Eu tenho uma xícara grande aqui, então adicionei mais três do nosso site.

**Passos**

**1. Imprima! **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Print_it_out.jpg)

Escolha um padrão de que você goste na Internet. Certifique-se de que haja espaço suficiente para um ímã ou um interruptor magnético mais um vibrador. Assim como a flor de origami acima, você pode encontrar toneladas deles na Internet.

**2. Coloque os Órgãos **

Concentre-se ao cortar os brinquedos de papel. Só assim você conseguirá um modelo bem acabado. Depois disso, é hora de colocar alguns órgãos neles.
Eu colei um ímã nas costas do Big Cihef A (vamos chamá-lo assim!). Eu o prendi lá com fita adesiva dupla face.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck1.jpg)

E para o Big Chief B, colei um interruptor magnético nas costas dele, na mesma posição que A, e um vibrador nos pés.

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck2.jpg)

**3. Cole Tudo **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck3.jpg)

Siga cuidadosamente as instruções na folha impressa. Conecte os cabos Grove aos dois módulos Grove que usamos no Big Chief B. Então você terá dois brinquedos de papel fofos como acima.

**4. Faça Upload do Programa **

![](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/img/Stuck4.jpg)

Carregue o código abaixo no seu Arduino. Fazendo isso, você lhes dá vida.
```
<pre>void setup()
{
    pinMode(11, INPUT);
    pinMode(9, OUTPUT);
}

void loop()
{
    int sensorState = digitalRead(11);
    if (sensorState == 1) digitalWrite(9, HIGH);
    else digitalWrite(9, LOW);
    delay(100);
}</pre>
```

##   Características
---
*   **Padronizado** – formato de quebra-cabeça escalável, conector unificado de 4 pinos, grade de furos para parafuso, pad de solda na borda, reduz desenvolvimento duplicado, reutilizável em diferentes projetos para reduzir o impacto ambiental

*   **Compacto** – tamanho a partir de 2cm*2 cm, combinação perfeita, componentes de montagem em superfície, cabo com passo de 2,0mm

*   **Amigável** – conexão de encaixe fácil, à prova de erro, vários modos de extensão, aberto para DIY, bibliotecas e códigos de demonstração

*   **Abundante**- grande seleção de circuitos comuns, do básico (botão, LED) a sensores profissionais (Giroscópio, Bússola), continuamente adicionados conforme a demanda, contribuições de terceiros, reutilizável

*   **Baseado na comunidade** – atendendo às necessidades por meio de votação, design democratizado, compartilhamento de projetos e receitas, modelo de negócio com divisão de lucros, aluguel e reutilização


## FAQs

**P1: Isso funciona com a placa Intel Galileo Gen 1?**

R1: Sim, você pode usar este kit nas placas Intel Galileo Gen1/Gen2 e Edison for Arduino.

**P2: Nada é exibido no backlight do Grove - RGB LCD, mas a cor de fundo funciona bem.**

R2: Verifique se a chave de alimentação (3.3V/5V) está no lado de 5V.



##   Recursos
---
*   [Sch pdf](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_v3_sch_pdf.zip)

*   [Sch Eagle](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Starter_Kit_Eagle.zip)

*   [Arquivo-fonte do Grove - Button](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Button_v1.0_Source_File.zip)

*   [Arquivo-fonte do Grove - LED](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-LED_v1.0_Source_File.zip)

*   [Arquivo-fonte do Grove - Buzzer](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_v1.0_Source_File.zip)

*   [Arquivo-fonte do Grove - Rotary Angle Sensor](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Rotary_Angle_Sensor_v1.2.zip)

*   [Arquivo-fonte do Grove -  Relay](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Relay_v1.2_Eagle.zip)

*   [Arquivo-fonte do Base Shield](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Base_Shield_v2.zip)

*   [Arquivo-fonte do Grove - Sound Sensor](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Sound_Sensor_v1.3_eagle.zip)

*   [Arquivo-fonte do Grove - Buzzer](https://files.seeedstudio.com/wiki/Grove_Starter_Kit_v3/res/Grove-Buzzer_V1.1_eagle.zip)

Temos esta peça disponível no [geppetto](https://geppetto.seeedstudio.com/), design eletrônico modular fácil com Seeed e Geppeto. Monte agora. [geppetto.seeedstudio.com](https://geppetto.seeedstudio.com/)

##   Agradecimentos
Gostaríamos de expressar nossa gratidão a Rich Morin, que modificou este documento com gramática e palavras mais apropriadas.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
