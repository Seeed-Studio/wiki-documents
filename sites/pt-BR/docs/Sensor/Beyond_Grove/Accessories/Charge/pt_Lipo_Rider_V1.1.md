---
title: Lipo Rider V1.1
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DC_framework_solenoid_HCNE1-0630/
slug: /Lipo_Rider_V1.1
last_update:
  date: 02/03/2022
  author: jianjing Huang
createdAt: '2023-02-20'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Lipo_Rider_V1.1/
---
<!-- ---
name:  Lipo Rider V1.1
category: Discontinued
bzurl:
oldwikiname: Lipo_Rider_V1.1
prodimagename:
bzprodimageurl:
surveyurl: https://www.research.net/r/Lipo_Rider_V1-1
sku:
tags:
--- -->

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Liporider-setup.jpg)

Alimente seu kit eletrônico favorito com energia verde! A placa Lipo Rider permite que você surfe na onda solar para rodar seu dispositivo de 5V favorito. A placa Lipo Rider é a solução ideal de energia verde para o seu projeto de sensor externo. Conecte a placa Lipo Rider à sua placa de sensor e ela poderá funcionar com energia solar para sempre!

O LipoRider é extremamente acessível e fácil de usar. Não é necessária programação. Basta conectar e funciona. O CI carregador interno gerencia todo o fluxo de energia entre os vários componentes.

Caso a energia solar não seja suficiente, a porta microUSB permite que você carregue sua bateria de lítio por USB. Ela também pode ser usada para programar seu kit sem destacar a placa Lipo Rider.

O Lipo Rider pode ser adquirido como uma placa separada ou como um kit (Lipo Rider + Bateria de Lítio + Painel Solar) na [Seeed Studio](https://www.seeedstudio.com/depot/).

Modelo:POW115D2P

## Recursos ##

- Conector Jst 2.0

- Fonte de alimentação USB estável de 5V, independentemente da fonte

- Algoritmos de carga/recarga integrados no chip

- Carrega bateria de polímero de lítio por energia solar ou USB

- Tensão de alimentação estável por bateria de lítio ou USB

- 2 x portas USB permitem programar seu kit enquanto carrega a bateria de lítio

- Indicações por LED para bateria cheia ou em estado de carregamento

- Design simples significa custo extremamente baixo

- Escalável para múltiplas baterias de lítio e painéis solares grandes/múltiplos por meio de simples modificações pelo usuário final

## Ideias de Aplicação ##

- Energia verde e fonte de backup para rede de sensores externos distribuída

- Carregador para baterias de lítio

## Cuidados ##

- Componentes eletrônicos vivos e expostos

- A placa pode esquentar ao alimentar cargas grandes

- Curto-circuito potencial ou choque elétrico, especialmente se o dispositivo ficar molhado quando colocado ao ar livre para coleta de energia solar

- Não é recomendado para carregar telefones celulares, pois o módulo pode superaquecer

## Esquemático ##

### Diagrama em Blocos ###

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-rider-blockdiagram.JPG)

## Especificação ##

- Pequena área ocupada – Dimensões = C47 × A37.5 × P6.6

- 600mA de corrente máxima de carga para a bateria de lítio

- 350mA de corrente máxima de alimentação a partir da bateria de lítio

- Diodos de potência para evitar retorno de corrente do dispositivo USB para a bateria Lipo

### Especificação Chave ###

|Itens|Mín|Norm|Máx|
|---|---|---|---|
| Iin Solar| 4.8V| 5.0V| 6.5V|
| Icharge (RIset=3.9kΩ)| 400mA| 500mA| 600mA|
| Isupply 0mA|350mA|||
| Vbatt(Rx=0Ω)|4.2V|||
| Vsource USB 5.0V|Vdestination USB 5.0V||||

## Definição de Pinos e Classificação ##

### Instruções de Pinos e Indicação dos LEDs ###

|Nível do pino CH(estado do LED vermelho)|Nível do pino OK(estado do LED verde)|Declarações|
|---|---|---|
 |nível baixo(aceso)|nível alto(apagado)| Carregando|
 | nível alto(apagado)|nível baixo(último aceso)|Completo|
 |sinal de pulso(piscando)|sinal de pulso(aceso)| A bateria não existe|
 | nível alto(apagado)|nível alto(apagado)|  Duas situações :-      Tensão de entrada menor que a tensão de gate -      A tensão de entrada menor que a tensão da bateria|

## Uso ##

O Lipo Rider funciona como um módulo de alimentação para fornecer uma potência estável de 5VCC para projetos **MCU**. Aqui está um exemplo para gerar uma forma de onda de saída de 300mA para uma fonte de alimentação:

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/MAP001.jpg)

### Configuração de Hardware ###

#### Componentes de Hardware ####

**Painel Solar**

O painel solar é conectado à placa através do conector JST inferior. Observe que o CI carregador solar só aceita tensão de entrada dentro da faixa de 4,8-6,5V. Se o LED de carregamento não estiver aceso, isso pode ser devido a:

1.Bateria de Lítio Cheia

2.Tensão do Painel Solar fora da faixa (muito provavelmente devido à potência solar insuficiente).

No segundo caso, reposicione seu painel solar para receber mais luz solar, se possível.
Nenhuma das condições acima impedirá o Lipo Rider de fornecer uma alimentação estável de 5V para o USB, a menos que a bateria esteja descarregada.

Equações do Painel Solar

Potência de Saída do Painel Solar = Corrente de saída × Tensão de alimentação

por exemplo, 1W = Iout× 5V

Iout = 200mA

Portanto, carregar por 1 hora fornecerá 200mAh, ignorando perdas. Para uma bateria de 1000mAH, carregar de vazia até cheia levará aproximadamente 5 horas em condições ideais.

**Bateria de Lítio**

O nome Lipo Rider sugere que seja usada uma bateria de polímero de lítio. Porém, a química de uma bateria de polímero de lítio e de íons de lítio é suficientemente semelhante para que os dois tipos de bateria sejam usados de forma intercambiável.
Caso mais de uma bateria seja utilizada, conecte-as em paralelo em vez de em série, pois o CI carregador fornece 4,2V.

**Chave deslizante**

A chave deslizante controla a fonte da alimentação USB de 5V.
ON – Carga habilitada pela bateria de lítio e/ou solar
OFF – Carga desabilitada pela bateria de lítio e/ou solar

**Porta USB de Fonte**

A porta USB de fonte é uma porta mini USB que é usada como uma porta USB normal. A porta USB de fonte pode ser usada para carregar a bateria de lítio ou conectada ao dispositivo de destino por meio da porta USB de destino.

**Porta USB de Destino**

A porta USB de destino é onde o dispositivo de destino deve ser conectado. A alimentação para o dispositivo de destino será fornecida pela placa Lipo Rider. A alimentação será proveniente do painel solar, da bateria de lítio ou da porta USB de fonte.

#### Direções do Fluxo de Energia em Diferentes Cenários de Conexão ####

Devido ao grande número de combinações, incluí apenas os principais cenários:

Modo Autônomo

Energia Solar carrega a bateria de lítio

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-standalone.JPG)

Modo USB

Energia Solar carrega a bateria de lítio. A bateria de lítio alimenta o dispositivo USB de destino

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-usb.JPG)
Modo de Programação

A USB de fonte irá carregar a bateria de lítio e alimentar o dispositivo USB de destino. A conexão de dados será habilitada entre os dispositivos USB de fonte e de destino

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-program.JPG)

### Exemplo ###

#### Fonte de Alimentação para Dispositivo Sensor Externo ####

Uma aplicação importante da placa Lipo Rider é como uma fonte de alimentação acessível para sensores externos. O dispositivo sensor externo será alimentado pela bateria de lítio suplementada pelo painel solar. Observe que não é recomendado operar o sensor externo SOMENTE com energia solar, pois esta pode variar durante o dia e causar a reinicialização/desligamento inesperado do sensor. Neste caso, o dispositivo está operando em “Modo USB”.

Se uma reprogramação de firmware do dispositivo sensor externo for necessária, basta conectar a porta mini USB ao seu PC, o que colocará o dispositivo em “Modo de Programação”, conforme explicado acima.

Baterias e/ou painéis solares maiores/múltiplos podem ser usados, mas apenas com modificações realizadas pelo usuário final.

![](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-exam1.JPG)

Lipo Rider alimentando um Arduino Duemilanove (não é exatamente um sensor externo neste caso, pois não conectei nenhum sensor e ele não está ao ar livre, mas você entendeu a ideia)

## Suporte ##

Se você tiver dúvidas ou outras ideias de design melhores, pode acessar nosso [fórum](https://www.seeedstudio.com/forum) ou **wish** para discutir.

## Rastreador de Versão ##

 |Revisão| Descrições|Data|Editor|
 |---|---|---|---|
|Lipo Rider V0.9b | Lançamento público inicial|2 Nov, 2010| Lafier|
|Lipo Rider V1.0 |Revisar lançamento|11 Jan, 2011|Silas Wan|
|Lipo Rider V1.1 |Alterar o conector Jst de 2.54 para 2.0|2 Nov, 2011|Mike|

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- [File:Lipo rider v1.1.zip](https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip)

## Como comprar ##

Clique [aqui](https://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107) para comprar [Lipo Rider](https://seeeddoc.github.io/Lipo_Rider/)  ,ou outros **produtos** que você gostar.

## Veja Também ##

[Lipo Rider Pro](https://seeeddoc.github.io/Lipo_Rider_Pro/)

## Licenciamento ##

Esta documentação é licenciada sob a [Licença Creative Commons Atribuição-CompartilhaIgual 3.0](http://creativecommons.org/licenses/by-sa/3.0/). O código-fonte e as bibliotecas são licenciados sob [GPL/LGPL](http://www.gnu.org/licenses/gpl.html); consulte os arquivos de código-fonte para detalhes.

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
