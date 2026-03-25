---
title: Grove - Gravador de Som
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Grove-Sound_Recorder/
slug: /Grove-Sound_Recorder
last_update:
  date: 01/06/2022
  author: gunengyu
createdAt: '2023-01-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove-Sound_Recorder/
---

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Grove-Sound_Recorder.jpg)

O Grove-Sound Recorder é baseado no [APR9600](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf), que oferece gravação de voz em chip único real, armazenamento não volátil e capacidade de reprodução por 32 a 60 segundos. A amostragem é 8k e o total de 32 s para o Seeed Twig-Sound Recorder é dividido em 4 seções, cada seção pode ser controlada separadamente. Além disso, este Gravador de Som também possui interface compatível com Grove e pode ser controlado manualmente ou por Arduino/Seeeduino.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html)

Recursos
--------

- Interface compatível com Grove
- Pode ser controlado manualmente ou por MCU
- Tecnologia de memória Flash não volátil, nenhuma bateria de backup necessária
- Amigável ao usuário, operação fácil de usar
- Baixo consumo de energia
- Taxa de amostragem e duração alteráveis pela substituição de um único resistor.
:::tip
    Para mais detalhes sobre módulos Grove, consulte o [Grove System](https://wiki.seeedstudio.com/pt-br/Grove_System/)
:::

Ideias de Aplicação
-----------------

- Brinquedos

Especificações
--------------

<table border="1" cellspacing="0" width="80%">
<tr>
<th scope="col">
Item
</th>
<th scope="col">
Mín
</th>
<th scope="col">
Típico
</th>
<th scope="col">
Máx
</th>
<th scope="col">
Unidade
</th>
</tr>
<tr align="center">
<th scope="row">
Tensão
</th>
<td>
3.0
</td>
<td>
5.0
</td>
<td>
5.25
</td>
<td>
V
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de Operação
</th>
<td colspan="3">
25
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente em Standby
</th>
<td colspan="3">
1
</td>
<td>
uA
</td>
</tr>
<tr align="center">
<th scope="row">
Faixa
</th>
<td colspan="3">
±1.5
</td>
<td>
g
</td>
</tr>
</table>

Uso
-----

Este Grove-Sound Recorder suporta 4 segmentos de Mensagem de duração fixa. Cada segmento pode ser controlado manualmente ou pela MCU (Arduino/Seeeduino). E a duração de cada segmento pode ser alterada pelo usuário.
[Recorder Method](http://ijam.com.au/)

Controlar o gravador manualmente é muito fácil. Ok, vamos dar uma olhada nisso: A chave (SW1) é para seleção de gravação/reprodução; empurre-a para "Rec" quando quiser gravar voz e empurre-a para "Play" quando quiser reproduzir a voz no gravador. Os 4 botões (K1~K4) são os botões de controle; você pode controlar qual segmento gravar/reproduzir pressionando o botão correspondente. O conector de saída é para conectar um alto-falante de 8 Ω 0,5 W, e o conector Grove é para alimentação e controle pela MCU.

### Como controlá-lo manualmente

Passo 1: Alimente o gravador. Você pode conectar o "control" ao Base Shield através do cabo Grove de 4 pinos ou qualquer fonte de tensão de 5 V.

<div class="admonition note">
<p class="admonition-title">Note</p>
Se você conectá-lo ao Base Shield através do cabo de 4 pinos, deve garantir que SEL1 e SEL2 estejam em nível baixo por meio da programação dos pinos conectados.
</div>

Eu conectei o conector "Control" à porta Digital D1. E configurei D1 e D2 para nível baixo por:

```
const int D1 =  1;
const int D2 =  2;
int State = LOW;
void setup() {
    pinMode(D1, OUTPUT);
    pinMode(D2, OUTPUT);
    digitalWrite(D1, State );
    digitalWrite(D2, State );
}
void loop()
{
}
```

Passo 2: Empurre a SW1 para "rec".

Passo 3: Pressione e mantenha pressionado o botão correspondente ao segmento, K1 por exemplo, para iniciar a gravação, e solte o botão para parar a gravação; você ouvirá um "DI" tanto no início quanto ao parar a gravação.

<div class="admonition note">
<p class="admonition-title">Note</p>
O tempo de gravação para cada segmento não deve ser superior a 15 s, ou ele será interrompido automaticamente mesmo que você mantenha o botão pressionado.
</div>

Passo 4: Quando quiser reproduzir o som gravado, basta empurrar a SW1 para "Play" e pressionar o botão correspondente (não é necessário manter pressionado); então você ouvirá o som que gravou nesse segmento.

### Como controlar o Gravador com Arduino/Seeeduino

O Gravador também pode ser controlado pela MCU (Arduino ou Seeeduino). Este recurso torna este módulo gravador adequado para muito mais aplicações e proporciona ao usuário uma sensação fantástica.
Ok, vamos começar o controle por MCU para este gravador. Observe que definimos os 4 segmentos controlados por K1/K2/K3/K4 como Section_1/Section_2/Section_3/Section_4.

Passo 1: Prepare o hardware: conecte o conector "Control" à porta digital D2 do Base Shield. E empurre a SW1 para "Rec".

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/D2.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sel.jpg)

Passo 2: Prepare o software. Para controlar e selecionar a seção para Gravar/Reproduzir, cada decodificação de Sel_1 e Sel_2 aponta para uma seção diferente.

| Sel_1(D2)/Sel_2(D1) | Segmento selecionado             |
|---------------------|---------------------------------|
| 0 0                 | Nenhum *(Nenhum segmento selecionado)* |
| 0 1                 | Section_2                       |
| 1 0                 | Section_3                       |
| 1 1                 | Section_4                       |

<div class="admonition note">
<p class="admonition-title">Note</p>
Quando controlado por MCU, Section_1 não pode ser selecionada.
</div>

*Não está interessado em tal tabela, é confusa! Só quer o código?*
Baixe o código a seguir para o seu Arduino/Seeeduino.

```
/****************************************************************************/

#include "APR9600.h"

/*macro definition of the Grove interface on the Sounder Recorder*/
#define SEL1 2
#define SEL2 3
ARP9600 recorder(SEL1,SEL2);

/*Store the command from the serial monitor you type.*/
char index;//can be '2','3','4',that is the index of section 2,section 3,section 4
char control;//control byte, can be 'r' for record, 's' for stop recording,
//'p' for play

void setup()
{
    Serial.begin(9600);
    recorder.begin();
}
void loop()
{
    getCommand();
    delay(50);
}
void getCommand()
{
    if (Serial.available()>0)
    {
        /*Get the command from the serial monitor*/
        index = Serial.read();
        control = Serial.read();
    }
    while(Serial.available()>0)Serial.read();//clear the receive buffer
    if((index > '1')&&(index < '5'))// index should be 2~4
    {
        if(control == 'r')//if it is record command?
        {
            recorder.record(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to record section_");
            Serial.println(index - 0x30);
        }
        else if(control == 'p')//if it is play command
        {
            recorder.play(index - 0x30);
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("begin to play section_");
            Serial.println(index - 0x30);
        }
        else if(control == 's')//if it is stop command
        {
            recorder.stop();//stop recording
            Serial.print("get the ");
            Serial.write(index);
            Serial.write(control);
            Serial.print(" command, ");
            Serial.print("stop recording");
        }
            /*Clear the command*/
        index = 0;
        control = 0;
    }
}
```

Agora você pode começar a controlar o gravador, com os seguintes comandos (Baud Rate:9600):

|         |                           |              |
|---------|---------------------------|--------------|
| Comando | Descrição                 | Estado de SW1 |
| 2rb     | Começar a gravar Section_2 | REC          |
| 2rs     | Parar de gravar Section_2 | REC          |
| 2p      | Reproduzir Section_2      | Play         |
| 3rb     | Começar a gravar Section_3 | REC          |
| 3rs     | Parar de gravar Section_3 | REC          |
| 3p      | Reproduzir Section_3      | Play         |
| 4rb     | Começar a gravar Section_4 | REC          |
| 4rs     | Parar de gravar Section_4 | REC          |
| 4p      | Reproduzir Section_4      | Play         |

<div class="admonition note">
<p class="admonition-title">Note</p>
Section_1 não pode ser controlada por MCU.
</div>

Depois de baixar o firmware para o seu Arduino/Seeeduino, certifique-se de que o conector "Control" esteja conectado a D2&D3&V&G.

Coloque o SW1 em Rec e digite o comando com qualquer transceptor de porta serial, OCTOPUS por exemplo. Digite primeiro o comando "2rb" para começar a gravar a Section_2, digite "2rs" para parar a gravação. Observe que a gravação será automaticamente encerrada após cerca de 15 s se nenhum "2rs" for digitado.

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2rb.jpg)

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2b.jpg)

E agora, você pode digitar "2p" para reproduzir a Section_2; note que você deve garantir que a SW1 esteja empurrada para "Play".

![](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2p.jpg)

Você pode gravar primeiro as 3 Seções (Section_2, Section_3, Section_4) e então, com a porta serial, controlar qual seção deseja reproduzir.

### Como alterar a taxa de amostragem e a duração de cada seção

Você pode controlar o compromisso qualidade/duração controlando a frequência de amostragem. A frequência do oscilador pode ser alterada mudando a resistência **(R7 na PCB)** do pino OscR para o GND. A tabela resume os valores de resistência e as frequências de amostragem correspondentes, bem como a largura de banda de entrada resultante e a duração.

| Resistência | Frequência de Amostragem | Largura de Banda de Entrada | Duração |
|------------|---------------------------|-----------------------------|---------|
| 44 K       | 4,2 KHZ                   | 2,1 KHZ                     | 60 S    |
| 38 K       | 6,4 KHZ                   | 3,2 KHZ                     | 40 S    |
| 24 K       | 8,0 KHZ                   | 4,0 KHZ                     | 32 S    |

O R7 é 24K quando é enviado para você; você pode alterá-lo para 38K/44K para obter uma duração de gravação mais longa, com o compromisso de uma taxa de amostragem menor.

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Arquivo Eagle do Grove-Sound Recorder](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip)
- [Datasheet do APR9600](https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf)
- [Biblioteca de software contribuída por usuários que funciona (Use a IDE / Software Arduino antigo)](https://github.com/wendellinfinity/GroveSoundRecorder)

<!-- Este arquivo Markdown foi criado a partir de https://www.seeedstudio.com/wiki/Grove_-_Sound_Recorder -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
