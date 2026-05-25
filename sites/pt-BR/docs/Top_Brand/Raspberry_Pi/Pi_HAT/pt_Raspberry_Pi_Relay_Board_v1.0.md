---
description: Placa HAT de Relé SPDT de 4 Canais para Raspberry Pi
title: Placa HAT de Relé SPDT de 4 Canais para Raspberry Pi
keywords:
  - Pi_HAT
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Raspberry_Pi_Relay_Board_v1.0
sku: 103030029,114992543
last_update:
  date: 1/11/2023
  author: jianjing Huang
createdAt: '2023-01-12'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Raspberry_Pi_Relay_Board_v1.0/
---

<p style={{textAlign: 'center'}}><img src="https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/1.png" /></p>

A Placa HAT de Relé SPDT de 4 Canais para Raspberry Pi utiliza quatro relés SPDT (single pole - double throw) de alta qualidade e fornece interfaces NO/NC (Normalmente Aberto/Normalmente Fechado) que podem controlar cargas de alta corrente. Isso significa que ela pode ser uma boa solução para controlar dispositivos que não podem ser controlados diretamente pelo barramento I2C. O formato padronizado de shield permite uma conexão suave com um Raspberry Pi e ela também possui quatro indicadores de LED que mostram o estado ligado/desligado de cada relé.

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Raspberry-Pi-4-Channel-SPDT-Relay-Hat-p-4850.html)

## Versão

| Versão do Produto | Alterações | Data de Lançamento |
|-|-|-|
| Raspberry Pi Relay Board v1.0 | Inicial | 2015-04-08 |
| 4-Channel SPDT Relay HAT for Raspberry Pi | 1.Substituição de componentes para melhor estabilidade<br />2.Mudança no layout dos componentes eletrônicos | 2021-02-08 |

## Recursos

--------

- Relés SPDT (single pole - double throw) de alta qualidade
- Compatível com Raspberry Pi 1, 2, 3, 4
- Interface I2C com três chaves de hardware SW1 (1, 2, 3) para selecionar o endereço fixo do barramento I2C
- Bornes de parafuso do relé para conexão fácil
- Formato e design de shield padronizados
- LEDs indicadores de status de funcionamento para cada relé
- Pinos de relé COM, NO (Normalmente Aberto) e NC (Normalmente Fechado) para cada relé

## Especificações

--------------

<table border="1" cellspacing="0" width="520">
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
Tensão de Alimentação
</th>
<td>
4.75
</td>
<td>
5
</td>
<td>
5.5
</td>
<td>
VDC
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de Trabalho
</th>
<td>
10
</td>
<td>
/
</td>
<td>
360
</td>
<td>
mA
</td>
</tr>
<tr align="center">
<th scope="row">
Tensão de Comutação
</th>
<td>
/
</td>
<td>
/
</td>
<td>
30/250
</td>
<td>
VDC/VAC
</td>
</tr>
<tr align="center">
<th scope="row">
Corrente de Comutação
</th>
<td>
/
</td>
<td>
/
</td>
<td>
15
</td>
<td>
A
</td>
</tr>
<tr align="center">
<th scope="row">
Frequência
</th>
<td>
/
</td>
<td>
1
</td>
<td>
/
</td>
<td>
HZ
</td>
</tr>
<tr align="center">
<th scope="row">
Potência de Comutação
</th>
<td>
/
</td>
<td>
/
</td>
<td>
2770VA/240
</td>
<td>
W
</td>
</tr>
<tr align="center">
<th scope="row">
Vida Útil do Relé
</th>
<td>
100,000
</td>
<td>
/
</td>
<td>
/
</td>
<td>
Ciclos
</td>
</tr>
<tr align="center">
<th scope="row">
Dimensões
</th>
<td colspan="3">
91.20 *56.15* 32
</td>
<td>
mm
</td>
</tr>
</table>

## Visão Geral de Hardware

-----------------

![](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/2.png)

## Uso

-----
Esta seção foi escrita por John M. Wargo, aqui gostaríamos de expressar nossa gratidão pela contribuição de John. Alteramos um pouco o texto original para adequá-lo a todo o documento da Seeed. Clique [aqui](http://johnwargo.com/microcontrollers-single-board-computers/using-the-seeed-studio-raspberry-pi-relay-board.html) para visitar o documento original em seu site.

As etapas para instalar a placa e verificar se ela funciona incluem as seguintes etapas:

- Etapa1. Montar a placa de Relé no Raspberry Pi
- Etapa2. Habilitar a interface de software I2C do Raspbian
- Etapa3. Validar se o Raspberry Pi reconhece a placa
- Etapa4. Executar algum código Python para exercitar a placa

### Etapa1. Montando a Placa de Relé

Montar a placa é fácil, ela vem com os conectores fêmea apropriados de que você precisa para montá-la em qualquer placa Raspberry Pi com conectores macho. Observação: você terá que adicionar conectores macho ao Raspberry Pi Zero para usar a placa.

Recomendamos colocar uma fita isolante em cima da porta Ethernet do Raspberry Pi antes de montar a placa. Se você montar a placa sem usar espaçadores (como eu fiz na figura de exemplo abaixo), há uma chance de a placa entrar em contato com a carcaça da porta Ethernet e causar um problema.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-01.png)
**Figura 1**

Para um projeto em produção, definitivamente recomendamos usar espaçadores para manter as duas placas no lugar.

A placa de relé é configurada para um Raspberry Pi mais antigo com um conector de 26 pinos, então, quando você a conecta a um Raspberry Pi com conectores de 40 pinos, será necessário deslocá-la totalmente para o lado, como mostramos na figura. Se você não alinhar os pinos corretamente, terá problemas depois, pois simplesmente não vai funcionar.

### Habilitando I2C

A placa de relé se comunica com o Raspberry Pi através de uma interface I2C [https://en.wikipedia.org/wiki/I%C2%B2C](https://en.wikipedia.org/wiki/I%C2%B2C). Essa interface vem desabilitada por padrão no sistema operacional Raspbian do Pi, portanto você terá que ativá-la antes de poder usar a placa. Ligue o Pi e deixe-o inicializar até a interface gráfica. Quando estiver em execução, abra o menu do Pi, selecione Preferences e depois Raspberry Pi Configuration, como mostrado na figura a seguir:

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-02.png)
**Figura 2**

Na janela que se abre, selecione a aba Interfaces como mostrado na figura a seguir. Habilite a opção ao lado de I2C como mostrado na figura e clique no botão OK para continuar. Quando você reiniciar o PC, o Pi deverá enxergar a placa de relé. Na próxima seção, vamos verificar se o Pi vê a placa de relé.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-03.png)
**Figura 3**

### Validando se o Raspberry Pi Vê a Placa de Relé

Com a interface I2C habilitada, é hora de garantir que o Raspberry Pi veja a placa de relé. Abra uma janela de terminal no Pi e execute o seguinte comando:

```
i2cdetect -y -r 1
```

O aplicativo exibirá um despejo dos dispositivos I2C reconhecidos, como mostrado na figura a seguir. Neste exemplo, há apenas uma placa I2C no sistema, a placa de relé configurada em um endereço 20. Você verá como esse valor é importante mais adiante neste artigo.

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-04.png)
**Figura 4**

Supõe-se que você possa usar chaves na placa de relé para definir o endereço I2C; há 4 chaves DIP na placa, vamos ver o que acontece quando você as altera.

Há quatro chaves, três rotuladas de A0 a A2 e uma rotulada como NC. NC significa No Connection (sem conexão). Cada chave possui uma configuração alta e baixa, portanto a tabela a seguir mostrará como usá-las para definir um endereço I2C para a placa:

|A0| A1 |A2 |Endereço|
|---|---|---|---|
|Alto|Alto|Alto|20|
|Baixo|Alto|Alto|21|
|Alto|Baixo|Alto|22|
|Alto|Alto|Baixo|24|
|Alto|Baixo|Baixo|26|
|Baixo|Baixo|Baixo|27|

### Executando o Aplicativo de Teste

Use o código de teste do [repositório no GitHub](https://github.com/johnwargo/Seed-Studio-Relay-Board). Obtenha o código de lá e você conseguirá concluir facilmente a etapa a seguir.

Para executar o aplicativo de teste, abra uma janela de terminal, navegue até onde você extraiu o aplicativo de exemplo e execute o aplicativo usando o seguinte comando:

```
python ./seeed_relay_test.py
```

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-05.png)
**Figura 4**

Quando solicitado por entrada, você digitará comandos para ligar e desligar os relés:

- Digitar 1on, 2on, 3on ou 4on e pressionar Enter fará com que o relé especificado seja ligado.
- Digitar 1off, 2off, 3off ou 4off e pressionar Enter fará com que o relé especificado seja desligado.
- Digitar allon ou alloff ligará ou desligará todos os relés.

### Usando o Módulo Python

Para usar o módulo em suas próprias aplicações Python, copie o módulo (relay_lib_seeed.py) para a pasta do seu projeto e importe o módulo em sua aplicação Python adicionando a seguinte linha ao início da sua aplicação:

>from relay_lib_seeed import *

Isso expõe uma série de funções para sua aplicação:

- relay_on(int_value) - Liga um único relé. Passe um valor inteiro entre 1 e 4 (inclusive) para a função para especificar o relé que você deseja ligar. Por exemplo: relay_on(1) ligará o primeiro relé (que na verdade é o relé 0 internamente).
- relay_off(int_value) - Liga um único relé. Passe um valor inteiro entre 1 e 4 (inclusive) para a função para especificar o relé que você deseja ligar. Por exemplo: relay_on(4) ligará o primeiro relé (que na verdade é o relé 3 internamente) desligado.
- relay_all_on() - Liga todos os relés simultaneamente.
- relay_all_off() - Desliga todos os relés simultaneamente.

O módulo expõe um valor de configuração que você vai querer ter em mente ao trabalhar com a placa:

```
# 7 bit address (will be left shifted to add the read write bit)
DEVICE_ADDRESS = 0x20
```

Lembra-se desse valor? 20? A placa vem configurada por padrão para esse endereço. Se você alterar as chaves na placa, será necessário atualizar essa variável de acordo.

Para ver o módulo em ação, abra uma janela de terminal no Raspberry Pi, navegue até a pasta onde você extraiu os arquivos deste repositório e execute o seguinte comando:

```
python ./relay_lib_seeed_test.py
```

O aplicativo irá:

- Ligar todos os relés por um segundo
- Desligar todos os relés
- Percorrer cada um dos relés (1 a 4), ligando cada um por um segundo

O módulo escreverá indicadores no console à medida que executa cada etapa, como mostrado na figura a seguir:

![](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/img2/seed-figure-06.png)
**Figura 6**

Os LEDs na placa de relé (um para cada relé) acenderão quando os relés forem acionados. Na minha placa, eles não estavam em sequência, então não espere que acendam em ordem.

O código que faz tudo isso se parece com o seguinte:

```
# turn all of the relays on
relay_all_on()
# wait a second
time.sleep(1)
# turn all of the relays off
relay_all_off()
# wait a second
time.sleep(1)
# now cycle each relay every second in an infinite loop
while True:
for i in range(1, 5):
   relay_on(i)
   time.sleep(1)
   relay_off(i)
```

É isso, não tem mais segredo. Aproveite.

## Visualizador Online de Esquemático

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/Raspberry_Pi_Relay_Board_v1.0_sch_pcb.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

Recursos
---------

- [Esquemáticos](https://files.seeedstudio.com/wiki/Raspberry-Relay-Hat/Raspberry-Pi-Relay-Hat_v1.0_SCH.zip)
- [HLS8L Datasheet](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/HLS8L.pdf)
- [PCAL9535A Datasheet](https://files.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0/res/PCAL9535A.pdf)
- [Código de Teste em Python](https://github.com/johnwargo/Seed-Studio-Relay-Board)
- [Código de Teste em C#](https://github.com/SeeedDocument/Raspberry_Pi_Relay_Board_v1.0/tree/master/res/RPiRelayBoard)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Raspberry_Pi_Relay_Board_v1.0 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
