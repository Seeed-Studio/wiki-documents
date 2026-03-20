---
description: Grove - Kit de Sensor ORP Pro
title: Grove - Kit de Sensor ORP Pro
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove-ORP-Sensor-Pro
sku: 110020370
last_update:
  date: 3/2/2023
  author: jianjing Huang
createdAt: '2023-03-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-ORP-Sensor-Pro/
---
<!-- ---
name: Grove - ORP Sensor Kit Pro
category: Sensor
bzurl: 
oldwikiname: 
prodimagename:
surveyurl: 
sku: 110020370
tags:
--- -->

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div>

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png" /></a></p>

## Introdução

Grove - ORP Sensor Kit (HR-O) é um sensor Grove que mede o valor de ORP, detectando a qualidade do líquido. Ele funciona com uma sonda ORP IP68 de 5 metros, oferecendo uma faixa de detecção de -2000mV a 2000mV, operando entre 0-80℃ e com suporte à programação em Arduino. O sensor é ecologicamente correto e possui certificação RoHS.

### Características

- Atualização do Sensor ORP Grove: Monta uma sonda ORP IP68 de 5 metros, oferecendo faixa de detecção de -2000 mV a 2000 mV, operando entre 0-80℃, membro do ecossistema Grove fácil de usar
- Desempenho de Medição Aprimorado: Mantém precisão de detecção de ±15mV a 0-60°C
- Tensão de Operação: 3,3/5V
- Suporte para Arduino
- Certificação RoHS

### Aplicações

- Monitoramento e controle de reações de oxirredução
- Detecção de água desinfetada
- Detecção de água adequada à saúde
- Determinar os tipos de microrganismos
- Detectar atividade microbiana anaeróbica
- Tratamento de águas residuais
- Aquicultura
- Monitoramento de descarga de esgoto industrial

## Visão Geral de Hardware

Antes de tudo começar, é bastante essencial conhecer alguns parâmetros básicos do produto. A tabela a seguir fornece informações sobre as características do Grove - ORP Sensor Kit Pro.

| Parâmetros | Detalhes |
|:----------:|:-------:|
| Faixa de medição | -2000mV a +2000mV |
| Taxa de resolução | 1 mV |
| Precisão | ±15mV |
| Ponto de potencial aeróbico (pH) | 7,00±0,30 |
| Fator de inclinação | >96% |
| Tensão de trabalho | 3,3V/5V |
| Temperatura de trabalho | 0-80℃ |
| **Sistema de referência** |
| Limite de junção líquida | Tetracloreto de polivinil |
| Material da carcaça | PPS |
| Resistência da membrana | &lt;500 MQ |
| Comprimento do fio | 5 metros |
| Método de instalação | Imersão |
| Nível de proteção | IP68 |
| Conexão elétrica | BNC |

## Primeiros Passos

### Sobre o produto

A tampa da sonda do sensor é preenchida com uma solução de cloreto de potássio que é usada para proteger a sonda.

Se você encontrar cristais granulares brancos sólidos ao redor da proteção da sonda após receber o produto, isso é um fenômeno normal, por favor, não se preocupe.

Os cristais brancos são causados pela solução de cloreto de potássio interna devido a mudanças de temperatura, mudanças ambientais ou oxirredução no ambiente normal de armazenamento ou transporte. No entanto, isso não afetará a natureza da solução de cloreto de potássio interna nem o funcionamento normal do sensor.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/1.jpg"/></div>

Se você os encontrar, use um papel toalha úmido para limpar suavemente os cristais, e por favor não deixe isso perto de crianças para evitar ingestão acidental.

### Instruções de uso do Grove ORP Sensor Kit Pro

Um sensor de Potencial de Oxirredução (ORP) mede a atividade de oxidantes e redutores em uma solução aquosa. É uma medição potenciométrica de um sistema de dois eletrodos semelhante a um sensor de pH. Às vezes, também é chamada de medição de redox. Diferente de um sensor de pH, um sensor de ORP mede a proporção entre as formas oxidada e reduzida de todas as espécies químicas em solução.

O sensor de ORP é composto por duas semicélulas eletroquímicas em que o eletrodo de referência é geralmente Ag/AgCl e o eletrodo de medição é comumente Pt. A diferença de potencial entre os dois eletrodos representa o potencial redox da solução que está sendo medida e pode ser descrita pela equação de Nernst.

`E = Eo – 2.3 (RT/nF) x (log [Ox] / [Red])`

Onde:

- E = potencial total desenvolvido entre os eletrodos de medição e de referência
- Eo = uma tensão específica do sistema
- R = constante dos gases
- T = temperatura em K
- n = o número de elétrons envolvidos no equilíbrio entre as espécies oxidada e reduzida
- F = constante de Faraday
- [Ox] = concentração da espécie oxidada
- [Red] = concentração da forma reduzida dessa espécie

A saída do sensor de ORP é relativa ao eletrodo de referência. Por exemplo, uma leitura de +100 mV indica que o potencial é 100 mV maior que o potencial da semicélula de referência e sugere um ambiente oxidante. Da mesma forma, uma leitura de –100 mV indica um potencial 100 mV menor que o da semicélula de referência e corresponde a um ambiente redutor. Em algumas aplicações, o potencial redox pode ser apresentado como Eh, que é a leitura de tensão em relação ao Eletrodo Padrão de Hidrogênio (SHE). Levando em conta o desvio do eletrodo de referência usado no sensor de ORP, o potencial pode ser convertido em leituras Eh. Os sensores de ORP Vernier usam um eletrodo de referência Ag/AgCl com KCl saturado.

### Instalação do Equipamento

Antes de usar o Grove ORP Sensor Pro, precisamos montar a placa Grove com a sonda. Na placa Grove, haverá duas pontas redondas salientes na conexão com a sonda; alinhe-as com as duas ranhuras na conexão da sonda e insira firmemente. Em seguida, basta girá-las ao longo das ranhuras até o limite.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/install.gif"/></div>

:::tip
Se você quiser desmontá-lo, basta girá-lo na direção oposta ao longo da ranhura e, em seguida, separar a placa Grove da sonda com força. Observe que a força da mão deve ser aplicada o máximo possível na parte metálica para evitar quebrar a placa com força excessiva.
<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/uninstall.gif"/></div>

Uma porca e um espaçador são incluídos com o produto. Se você precisar desmontar com frequência, não recomendamos que instale o espaçador e a porca, pois isso dificultará a desmontagem.
:::

## Exemplo com Arduino / XIAO

Em seguida, apresentaremos o uso básico do Grove ORP Sensor com os produtos XIAO e Seeeduino da Seeed Studio com base na plataforma Arduino.

**Passo 1.** Inicie o aplicativo Arduino.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"/></div>

**Passo 2.** Selecione o modelo da sua placa de desenvolvimento e adicione-o à Arduino IDE.

- Se você quiser usar o **Seeeduino** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/) para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO SAMD21** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/Seeeduino-XIAO/#software) para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO RP2040** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO-RP2040-with-Arduino/#software-setup) para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO nRF52840** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_BLE/#software-setup) para concluir a adição.

- Se você quiser usar o **Seeed Studio XIAO ESP32C3** para as rotinas posteriores, consulte [este tutorial](https://wiki.seeedstudio.com/pt-br/XIAO_ESP32C3_Getting_Started/#software-setup) para concluir a adição.

### Usando o Grove ORP Sensor Pro no Seeed Studio XIAO SAMD21

Uma definição simples de funcionamento para ORP é a capacidade de uma solução para transferência de elétrons, conhecida como oxidação ou redução, dada em milivolts. A medição de ORP é a leitura do potencial de tensão entre o eletrodo de medição e o eletrodo de referência. Dependendo da solução que está sendo medida, os eletrodos de ORP atuarão como doadores de elétrons ou aceitadores de elétrons. O ORP é semelhante ao pH, pois o pH indica quão ácida ou básica é uma solução com base na atividade de íons de hidrogênio dentro da solução, e o ORP indica o estado de redução-oxidação de uma solução com base na atividade coletiva de elétrons dentro da solução.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/3.jpg"/></div>

Neste exemplo, usamos o XIAO SAMD21 como placa de controle principal para medir o valor de ORP da Coca-Cola usando o Grove ORP Sensor Pro.

#### Materiais Necessários

| Seeed Studio XIAO SAMD21 |  Seeed Studio Expansion Base for XIAO | Grove ORP Sensor Pro |
|:--------------:|:--------------:|:--------------:|
|<div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg"/></div>| <div align="center"><img width ="210" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"/></div> | <div align="center"><img width ="250" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/sensor.jpg"/></div> |
|[**Adquira agora**](https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html)|[**Adquira agora**](https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html)| [**Adquira agora**](https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-Pro-p-5570.html) |

#### Passos de Operação

**Passo 1.** Conecte o Grove ORP Sensor Pro à XIAO Expansion Board.

Neste exemplo, usaremos os pinos **A6** e **A7** acima do XIAO como os pinos **CAL** e **SIG** do sensor. Conecte o Grove ORP Sensor Pro à porta UART da placa de expansão XIAO usando o cabo Grove.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/7.png"/></div>

**Passo 2.** Coloque o Seeed Studio XIAO SAMD21 na placa de expansão.

<div align="center"><img width ="400" src="https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"/></div>

:::note
Por favor, primeiro conecte o Seeed Studio XIAO na placa de expansão, depois conecte o cabo Type-C. Lembre-se de encaixar o Seeed Studio XIAO no meio dos dois conectores fêmea, caso contrário você danificará o Seeed Studio XIAO e a placa de expansão.
:::

**Passo 3.** Remova a capa protetora da sonda.

**Este passo requer cuidado especial!**

Por favor, deixe a sonda voltada para baixo **na vertical** antes de remover a capa protetora para expor a sonda e, em seguida, gire lentamente a capa para remover a sonda. Por favor, não incline durante este processo, caso contrário o cloreto de potássio dentro irá facilmente derramar!

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/2.jpg"/></div>

Em seguida, a sonda é totalmente inserida no líquido a ser medido. Fique tranquilo, pois a sonda e o sensor são à prova d’água, e nós preparamos especialmente um cabo de 5 m de comprimento para você. No entanto, observe que a placa Grove não é à prova d’água, portanto, não a coloque no líquido junto com a sonda.

<div align="center"><img width ="350" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/5.jpg"/></div>

**Passo 4.** Envie o programa.

A seguir está um programa de exemplo para o Grove ORP Sensor.

```cpp
#define VOLTAGE 3.37   //vcc voltage(unit: V)
#define OFFSET 16      //UNUSED - zero drift voltage(unit: mV)
#define LED 13         //operating instructions
#define ArrayLenth  40 //times of collection
#define orpPin A7       //orp meter output,connect to Arduino controller ADC pin
#define calPin A6       //orp cal control pin, get a offset by set it to low

double orpValue; 
// double offset=0.0;
int offset=0;
bool is_calibrated = false;
int wait_count = 5;
int orpArray[ArrayLenth];
int orpArrayIndex=0;

double avergearray(int* arr, int number);

void setup(void) {  
  Serial.begin(9600);
  pinMode(LED,OUTPUT);
  pinMode(calPin,OUTPUT);
  // digitalWrite(calPin, LOW);
  digitalWrite(calPin, HIGH);
}

void loop(void) {
  static unsigned long orpTimer=millis();   //analog sampling interval
  static unsigned long printTime=millis();
  if(millis() >= orpTimer)
  {
    orpTimer=millis()+20;
    orpArray[orpArrayIndex++]=analogRead(orpPin);    //read an analog value every 20ms
    if (orpArrayIndex==ArrayLenth) {
      orpArrayIndex=0;
    }   
    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-offset;
  }
  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical
  {
    if(!is_calibrated) {
      if(wait_count==0){
        offset += (int)orpValue; 
        is_calibrated = true;
        digitalWrite(calPin, LOW);
        Serial.print("offset: ");
        Serial.print((int)offset);
        Serial.println(" mV");
      }
      wait_count--;
    }
    else {
      Serial.print("ORP: ");
      Serial.print((int)orpValue);
      Serial.println(" mV");
      digitalWrite(LED,1-digitalRead(LED)); // convert the state of the LED indicator      
    } 
    printTime=millis()+800;   
  }
}

double avergearray(int* arr, int number){
  int i;
  int max,min;
  double avg;
  long amount=0;
  if(number<=0){
    printf("Error number for the array to avraging!/n");
    return 0;
  }
  if(number<5){   //less than 5, calculated directly statistics
    for(i=0;i<number;i++){
      amount+=arr[i];
    }
    avg = amount/number;
    return avg;
  }else{
    if(arr[0]<arr[1]){
      min = arr[0];max=arr[1];
    }
    else{
      min=arr[1];max=arr[0];
    }
    for(i=2;i<number;i++){
      if(arr[i]<min){
        amount+=min;        //arr<min
        min=arr[i];
      }else {
        if(arr[i]>max){
          amount+=max;    //arr>max
          max=arr[i];
        }else{
          amount+=arr[i]; //min<=arr<=max
        }
      }//if
    }//for
    avg = (double)amount/(number-2);
  }//if
  return avg;
}
```

Antes de usar o programa, você precisa corrigir algumas variáveis do programa de acordo com a situação real.

```c
#define VOLTAGE     3.37  //vcc voltage(unit: V)
#define LED         13    //operating instructions
#define ArrayLenth  40    //times of collection
#define orpPin      A7    //orp meter output,connect to Arduino controller ADC pin
#define calPin      A6    //orp cal control pin, get a offset by set it to low
```

- **VOLTAGE**: refere-se à tensão real de operação do sensor. Recomenda-se que você use um multímetro para medir a tensão de alimentação do pino; quanto mais preciso o valor, mais precisa será a medição. Na minha placa de expansão XIAO, a tensão de alimentação medida é 3,37 V.

- **LED**: o programa adiciona a função de piscar o LED como indicador de funcionamento, que pode ser definida aqui como os números dos pinos de LED da placa de controle que você está usando.

- **ArrayLenth**: número de amostras por unidade de tempo. Quanto menor o valor, mais curto o tempo para obter valores de ORP, mas isso também torna os valores de resultado instáveis. O valor padrão é 40.

- **orpPin**: o pino ORP do sensor é conectado ao número do pino da placa de controle principal.

- **calPin**: o pino cal do sensor é conectado ao número do pino da placa de controle principal.

Após atualizar o programa, selecione o modelo da placa de desenvolvimento e o número da porta do Seeed Studio XIAO SAMD21 e envie o programa.

<div align="center"><img width ="800" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/6.png"/></div>

Ligue o monitor serial e ajuste a taxa de transmissão para 9600, você verá a variação do valor de ORP detectado pelo sensor atual.

<div align="center"><img width ="600" src="https://files.seeedstudio.com/wiki/grove-ORP-sensor/4.png"/></div>

:::tip
Se você estiver enviando o programa depois de colocar a sonda do sensor na solução a ser medida, com `ArrayLenth = 40`, levará cerca de **15min** de tempo de aquecimento até que o valor de ORP se estabilize.
:::

#### Limpar a sonda Grove ORP Sensor Pro

Vários fatores podem levar ao bloqueio dos diafragmas do sensor de ORP. Em particular, junções feitas de cerâmica ou outro material poroso são propensas a entupimento. As razões mais frequentes são listadas aqui juntamente com os respectivos procedimentos de limpeza:

1. Bloqueio com sulfeto de prata (Ag2S): se o eletrólito de referência contiver íons prata e a amostra a ser medida contiver sulfetos, a junção ficará contaminada com um precipitado de sulfeto de prata. Para limpar a junção dessa contaminação, limpe-a com uma solução de 8% de tioureia em 0,1 mol/L de HCl por 5–60 minutos (o Thiourea Cleaner está disponível na METTLER TOLEDO).

2. Bloqueio com cloreto de prata (AgCl): os íons prata do eletrólito de referência também podem reagir com amostras que contenham íons cloreto, resultando em um precipitado de AgCl. Esse precipitado pode ser removido deixando o eletrodo de molho em uma solução de amônia concentrada (35% NH3 aq.).

3. Bloqueio com proteínas: junções contaminadas com proteínas geralmente podem ser limpas imergindo o eletrodo em uma solução de pepsina/HCl (5% de pepsina em 0,1 mol/L de HCl) por várias horas (Pepsin-HCl Cleaner está disponível na METTLER TOLEDO).

4. Outros bloqueios na junção: se a junção estiver bloqueada com outras contaminações, tente limpar o sensor de ORP em um banho ultrassônico com água ou com uma solução de 0,1 mol/L de HCl.

:::caution
Por favor, **NÃO** deixe a sonda em uma solução por um longo tempo, pois isso pode encurtar seriamente a vida útil da sonda.
:::

#### Armazenar corretamente o Grove ORP Sensor Pro

Após o uso, enxágue bem o eletrodo com água destilada e aperte a capa protetora. Os eletrodos de ORP devem ser armazenados na tampa umidificadora preenchida com eletrólito de referência (geralmente 3 mol/L KCl) ou solução de armazenamento InLab. Armazene a meia-célula seca. O eletrodo deve ser armazenado na posição vertical e em temperatura ambiente.

## Solução de Problemas

- **P1: Por que não é necessário calibração para o Grove ORP Sensor Pro?**

> R: Medir redox significa medir o potencial de redução da solução. O valor bruto (leitura em mV) é o resultado final. Se o eletrodo de redox for verificado medindo em solução tampão de 220 mV e se não estiver dentro de 220 ± 20 mV, o sensor deve ser limpo (e não calibrado).

- **O que fazer se a verificação do Grove ORP Sensor Pro falhar?**

> R: O valor esperado para o sensor Redox é 220 ± 20 mV. Se essa condição não for atendida, recomenda-se limpar o anel ou o pino metálico usando um lenço úmido, seguido de enxágue com água destilada e, em seguida, medir novamente o valor em mV no tampão redox de 220 mV. Outra forma de limpar e remover depósitos do anel metálico é condicioná-lo com 0,1 mol/L de HCl. Também em alguns casos é recomendada a troca do eletrólito de referência.

- **Quando são feitas medições relativas de mV?**

> R: Pode ser que alguém queira corrigir a leitura para qualquer desvio, por exemplo, para conhecer o potencial em relação a um eletrodo padrão de hidrogênio em vez da referência Ag/AgCl. Portanto, são realizadas medições relativas de mV, e é necessário inserir o desvio nos parâmetros de medição.

## Recursos

- **[PDF]** [Grove ORP Sensor Kit Pro_v1.0 SCH](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH_221019.pdf)

- **[ZIP]** [Grove ORP Sensor Kit Pro_v1.0 SCH&PCB](https://files.seeedstudio.com/wiki/grove-ORP-sensor/Grove-ORP-Sensor-Kit-Pro_v1.0_SCH&PCB_221019.zip)

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
