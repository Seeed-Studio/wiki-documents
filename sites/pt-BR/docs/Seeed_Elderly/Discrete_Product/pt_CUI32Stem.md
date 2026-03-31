---
description: CUI32Stem
title: CUI32Stem
keywords:
  - grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /CUI32Stem
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-28'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/CUI32Stem/
---

A Create USB Interface é uma placa de microcontrolador open source que pode ser programada nas linguagens C, BASIC ou Arduino. Esta versão mais recente é chamada de CUI32Stem, que foi projetada para funcionar “de mãos dadas” com o sistema de prototipagem GROVE, incluindo uma ampla variedade de sensores e atuadores. Ela utiliza um microcontrolador Microchip® PIC32 de alto desempenho, permitindo interação programável com todos os tipos de invenções do usuário, sem necessidade de solda! :)

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemFrontSmall.png)

Versões em alta resolução dessas imagens estão disponíveis aqui ([Front Side](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemFront.jpg)) e aqui ([Back Side](https://files.seeedstudio.com/wiki/CUI32Stem/res/CUI32StemBack.jpg)).

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32StemBackSmall.png)

A CUI32Stem pode executar código Arduino (compilado via [ChipKIT MPIDE](http://themakersworkbench.com/node/422), versão multiplataforma da IDE do Arduino), e também é enviada com um Sistema Operacional em Tempo Real gratuito chamado [StickOS](http://www.cpustick.com/) pré-instalado, para o caminho mais rápido para programar a placa (BASIC em uma janela de terminal, sem necessidade de instalar qualquer software no seu computador). Ambos os recursos tornam muito fácil começar se você é novo no mundo das Unidades de Microcontrolador (MCUs). Para usuários avançados que desejam tirar total proveito do poderoso microcontrolador de 32 bits da CUI32Stem*, programas em linguagem C podem, é claro, ser desenvolvidos diretamente no [MPLAB X](http://www.microchip.com/mplabx/) da Microchip, que está disponível para Windows, Mac OS X e Linux.

![](https://files.seeedstudio.com/wiki/CUI32Stem/img/CUI32Stem_Grove_Dash_Kit-2.jpg)

[Kit CUI32Stem Dash]

A CUI32Stem está disponível para compra separadamente (headers em um saco, não soldados, proporcionando um perfil fino para locais de montagem de baixo perfil) ou como parte de dois diferentes kits GROVE (o primeiro dos quais é mostrado acima - um kit maior com função sem fio e mais elementos Grove está por vir). Quando enviada como parte de um kit, as placas CUI32Stem terão pinos de header pré-soldados (permitindo conectar / desconectar facilmente os elementos GROVE). Consulte a seção abaixo sobre “como comprar” para mais detalhes. Você pode escolher se os “pinos V*” devem fornecer 3,3 V ou 5 V por meio do “seletor V*” na placa, para corresponder à tensão adequada para o(s) elemento(s) GROVE escolhido(s) - pinos não analógicos na CUI32Stem são tolerantes a 5 V (mesmo que o próprio microcontrolador funcione a 3,3 V).

Alguns dos elementos GROVE adicionam recursos sem fio à CUI32Stem, incluindo módulos Bluetooth e simples módulos “Serial RF”, bem como um futuro módulo “Serial WiFi” que está em desenvolvimento agora (ainda não lançado). Este módulo Serial WiFi permite que a CUI32Stem acesse a internet e/ou use o protocolo Open Sound Control ([OSC](http://opensoundcontrol.org/)) via rede sem fio 802.11. O StickOS oferece links sem fio extremamente simples (veja um exemplo [aqui](http://www.cpustick.com/examples.htm#ex3)) por meio de uma placa adicional projetada especificamente para a CUI32Stem chamada ZigFlea, bem como a possibilidade de registro simples de dados em um pen drive USB. Há um footprint para um conector USB fêmea (tanto no lado superior quanto no inferior da placa, você escolhe qual usar - o conector USB fêmea é comprado separadamente ou incluído nos kits) que permite usar o modo host USB - o StickOS inclui um sistema de arquivos FAT32 e suporta o registro de dados em um pen drive padrão.

O [StickOS](http://www.cpustick.com/), que vem pré-instalado em cada CUI32Stem enviada, inclui um compilador BASIC embarcado, editor de linha, depurador, profiler e sistema de ajuda integrado para criar novos firmwares, salvá-los e executá-los. Tudo isso pode ser feito sem precisar instalar qualquer software no seu computador, apenas usando um emulador de terminal padrão para comunicação.

Código Arduino pode ser compilado e executado na CUI32Stem usando o [MPIDE](https://github.com/chipKIT32/chipKIT32-MAX/downloads) (Ambiente de Desenvolvimento Integrado Multiplataforma), que possui seu próprio [fórum](http://chipkit.cc/forum/). Finalmente, código em C pode, é claro, ser compilado para a CUI32Stem por meio da própria IDE MPLAB X da Microchip e do compilador C32 correspondente, ambos disponíveis para download gratuito. A “Microchip Application Library”, [MAL](http://www.microchip.com/MAL), também é gratuita para download e possui vários bons exemplos. Mais exemplos de código em C para um PIC32 também podem ser encontrados [aqui [http://www.schmalzhaus.com/UBW32/](http://www.schmalzhaus.com/UBW32/)].

- Para aqueles interessados em benchmarks, um Arduino padrão tem um Coremark de 18, enquanto o Coremark da CUI32Stem é 203 – isso com código C nativo compilado com otimização máxima em ambos. Embora esse desempenho obviamente não seja alcançado ao executar código BASIC no StickOS, o benefício aí é a facilidade de uso. O código Arduino ficará claramente um pouco mais próximo do desempenho do código C nativo. Um projeto de exemplo que mostra o desempenho da CUI32Stem (escrito em linguagem Arduino com MPIDE) é o projeto open source de Philip Burgess para construir um [sintetizador polifônico](http://hackaday.com/2011/06/08/chipkit-sketch-mini-polyphonic-sampling-synth/) autônomo usando um PIC32. Com sensores piezo como entradas, ele implementa um sintetizador polifônico de reprodução de amostras, incluindo efeitos de áudio em tempo real. Este projeto não seria possível em um Arduino padrão, devido à falta de memória interna suficiente – e adicionar um “wave-shield” ou similar a um Arduino para acessar memória externa tornaria difícil (se não impossível) alcançar a polifonia (notas/sons musicais sobrepostos), como demonstrado por Burgess.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/cui32stem-p-1100.html?cPath=132_208)

## Recursos

---
A CUI32Stem é projetada para ser o cérebro do sistema GROVE

Código Arduino pode ser compilado para a CUI32Stem via MPIDE

Poderoso microcontrolador de 32 bits rodando a 80 MHz

Sistema Operacional em Tempo Real fácil de usar e pré-instalado - StickOS:

**Recursos do StickOS BASIC**

- rastrear ou executar o programa passo a passo,

- usar amostragem de profiling para ver onde o programa está gastando seu tempo,

- usar breakpoints, assertions e watchpoints,

- usar manipulação e exame ao vivo de variáveis (e pinos) enquanto o programa está parado, e

- até mesmo editar e continuar a execução do programa!

A CUI32Stem faz parte do projeto Microcontrollers For Everyone ([projeto MFE](http://www.cpustick.com/downloads/mfe.pdf)), iniciado por Rich Testardi, criador do StickOS BASIC. O objetivo deste projeto é incentivar novos grupos de usuários casuais, incluindo estudantes, hobbystas e outros usuários não profissionais, a aprender, se divertir e construir projetos úteis com tecnologias de microcontroladores de ponta. O objetivo do MFE não é, explicitamente, esconder ou abstrair as tecnologias de microcontroladores, mas sim torná-las mais acessíveis, transparentes e tolerantes, para que usuários casuais possam aprender os mesmos conceitos fundamentais usados por profissionais, porém sem o investimento de uma carreira.

## Especificações

---
Processador [PIC32MX795F512H](http://www.microchip.com/wwwproducts/Devices.aspx?dDocName=en545655):

- Clock de 80 MHz

- 1,56 DMIPS/MHz

- 512K de Flash

- 128K de RAM

- 8 canais DMA

- 3 SPI

- 4 I2C

- 6 UART (ports seriais)

- USB 2.0 Full Speed em modo Device ou Host

- 16 canais A/D, resolução de 10 bits

## Instalação de Hardware

---
Fazer login no StickOS é tão simples quanto:

1. Se você estiver usando Windows, faça download de “CPUStick.inf” [aqui](http://cpustick.com/downloads.htm), depois clique com o botão direito no arquivo e selecione “Install”; Mac e Linux já sabem automaticamente como se comunicar com a CUI32Stem, sem necessidade de instalação.

2. Se você estiver usando Windows ou Linux, faça download de um programa emulador de terminal (eu uso “Tera Term” no Windows e “minicom” no Linux); o Mac possui o comando “screen” embutido.

3. Conecte sua CUI32Stem ao computador host com um cabo USB.

4. Determine sua porta COM ou nome de arquivo de dispositivo; no Windows, basta procurar por CPUStick no Gerenciador de Dispositivos; no Mac, procure por um arquivo /dev/tty.usbmodemXXX, em que XXX corresponde ao ID de Localização do dispositivo CPUStick em “Sobre Este Mac -&gt; Mais Informações... -&gt; Hardware -&gt; USB”; no Linux, o nome do arquivo de dispositivo depende da distribuição.

5. Abra o programa emulador de terminal em seu sistema e conecte-se à porta COM ou ao arquivo de dispositivo apropriado.

6. Pressione &lt;Enter&gt; para obter um prompt:

```
Welcome to StickOS for Microchip PIC32MX2-F128B v1.92c!
Copyright (c) 2008-2012; all rights reserved.
http://www.cpustick.com
support@cpustick.com
(checksum 0x8725)
> _
```

Ajuda específica para iniciantes no Mac:
Conforme mencionado acima, todos os Macs vêm com o utilitário “screen” embutido – ele é usado dentro do aplicativo Terminal, conforme descrito abaixo:

Primeiro, abra o Terminal. Se você nunca o utilizou antes, ele está em Applications/Utilities/Terminal. Em seguida, digite

ls /dev/tty.*

para obter uma lista de todas as suas portas seriais. Escolha a que você deseja abrir. Por exemplo, minha lista se parece com isto:

```
/dev/tty.Bluetooth-Modem
/dev/tty.Bluetooth-PDA-Sync
/dev/tty.usbmodemfa141
```

Sua placa CUI32Stem aparecerá com um nome semelhante ao último, no sentido de que incluirá “tty.usbmodem” no nome.

Então agora você pode simplesmente digitar “screen portname” seguido de Enter, para mostrar o StickOS na tela. No meu caso, digitei:   screen /dev/tty.usbmodemfa141

Depois disso, talvez seja necessário pressionar a tecla Enter novamente para que a CUI32Stem envie de volta a mensagem de boas-vindas do StickOS...

Para sair do aplicativo screen, digite control-A, depois control-.

Nota final: Este mesmo procedimento também funcionará quando você tiver um elemento [GROVE Serial Bluetooth](https://www.seeedstudio.com/depot/grove-serial-bluetooth-p-795.html) conectado à sua CUI32Stem.
A única diferença é que o nome, em vez disso, terá “bluetooth” em algum lugar, é claro... se você não tiver certeza, basta tentar todos até encontrar o correto.

## Ideias de Aplicações

---
Criar projetos interativos é fácil com a CUI32Stem! Existem literalmente milhares de exemplos disponíveis online na forma de projetos Arduino que devem exigir apenas pequenas alterações para compilar (alterar os nomes dos pinos para corresponder aos da CUI32Stem, etc.).

Para aqueles curiosos sobre BASIC — apenas começando ou querendo experimentar... Quão fácil é StickOS, realmente?

Os exemplos a seguir, que oferecem resultados imediatos, incentivo e feedback, usam o CUI32Stem como exemplo dos tipos de coisas triviais que você pode fazer com StickOS. Um "Currículo" mais completo será desenvolvido para fornecer exemplos de trabalho com muitos dos elementos GROVE em um futuro próximo.

**1 de 5: Piscar um LED**
Como o "hello world!" da programação embarcada, vamos fazer um LED piscar no pino 'rd0' do CUI32Stem:

```
> 10 dim led as pin rd0 for digital output
> 20 while 1 do
> 30 let led = !led
> 40 endwhile
> run
 _
```

A linha 10 do programa dimensiona (declara) uma variável chamada "led" que é vinculada ao pino rd0 do CUI32Stem, que está configurado para saída digital; a partir daí, qualquer manipulação da variável é imediatamente refletida no pino. As linhas 20-40 do programa formam o laço principal do programa. A linha 30 simplesmente inverte o estado do led no pino rd0 do CUI32Stem, dentro do laço.
Ops! Algo está errado — o LED não está piscando, mas parece estar meio aceso... Ah! Esquecemos de adicionar um atraso! Então vamos parar o programa com um &lt;Ctrl-C&gt;, corrigir o programa adicionando um atraso de 500ms e, em seguida, continuar de onde paramos:

```
<Ctrl-C>
STOP at line 30
> 35 sleep 500 ms
> cont
 _
```

Bem melhor!

Certo, agora vamos deixar as coisas um pouco mais interativas com o CUI32Stem e parar o programa novamente com um &lt;Ctrl-C&gt;... Depois vamos examinar o estado do LED (isto é, imprimir o valor da variável "led") e então piscar o LED manualmente...

```
<Ctrl-C>
STOP at line 35
> print led
0
> let led = 1
> print led
1
> let led = 0
> print led
0
>_
```

Perceba que, quando mudamos a variável, o LED muda de estado!

**2 de 5: Piscar um LED com uma ISR de Timer**
Agora que nosso LED está piscando, vamos evoluir para o uso de uma ISR de timer (Rotina de Serviço de Interrupção) em vez de um laço programado — assim poderemos fazer outras coisas com o "laço principal" no futuro. Vamos manter a linha 10 do programa, mas apagar todas as linhas que a seguem, listar o programa e começar daí:

```
 source-c"><pre class="de1"><span class="sy0">></span> delete <span class="nu0">20</span><span class="sy0">-</span>
<span class="sy0">></span> list
<span class="nu0">10</span> dim led as pin rd0 <span class="kw1">for</span> digital output
end
<span class="sy0">></span> <span class="n
```

A linha 10 ainda dimensiona (declara) uma variável chamada "led" que é vinculada ao pino rd0 do CUI32Stem, que está configurado para saída digital; a linha 20 configura o timer nº 1 para disparar a cada 500ms; a linha 30 habilita a interrupção do timer e diz que, toda vez que o timer disparar, devemos executar a instrução "let led = !led" (se tivéssemos mais trabalho a fazer, poderíamos ter chamado uma sub-rotina); finalmente, a linha 40 apenas coloca o laço principal para dormir — a partir daí só atendemos interrupções!
Nossa, isso funcionou na primeira tentativa! :-)

**3 de 5: Piscar um LED com um Módulo de Comparação de Saída**
Agora que entendemos um pouco sobre timers, vamos tentar usar um dos periféricos "módulo de comparação de saída" do CUI32Stem para que possamos piscar o LED sem usar a CPU em absoluto! Novamente, estes são exatamente os mesmos conceitos fundamentais usados por usuários profissionais!!!
Temos que parar o programa novamente com um &lt;Ctrl-C&gt;, e então vamos apenas fazer isso na linha de comando (sem nem mesmo escrever um programa), porque estamos um pouco inseguros...

```
<Ctrl-C>
STOP at line 40
> dim hz as pin rd0 for frequency output
> hz = 1
>_
>
```

A primeira linha ali dimensionou (declarou) uma variável chamada "hz" que é vinculada ao pino rd0 do CUI32Stem, o qual está configurado para receber a saída de um módulo de comparação de saída; a partir daí, qualquer manipulação da variável é imediatamente programada como a frequência de saída, em Hz, do módulo de comparação de saída.
Nossa, isso é muito legal!!! Vamos deixá-lo mais rápido:

```
> hz = 10
>_
```

E mais rápido:

```
> hz = 100
>_
```

Quero conectar um buzzer a isso, mas antes de irmos mais longe, vamos tentar outro experimento...

**4 de 5: Ler um Potenciômetro com um Conversor A/D**
Para este experimento, vamos conectar o terminal do meio de um potenciômetro ao pino an0 do CUI32Stem, e os terminais externos do potenciômetro ao terra e a 3,3V (claro, você pode simplesmente conectar um elemento potenciômetro GROVE). Vamos novamente fazer isso na linha de comando (sem programa) para que possamos ver como funciona:

```
> dim pot as pin an0 for analog input
> print pot
1876
>_
```

A primeira linha ali dimensionou (declarou) uma variável chamada "pot" que é vinculada ao pino 'an0' do CUI32Stem, que está configurado para entrada analógica através do conversor A/D; a partir daí, qualquer referência à variável reflete o número atual de milivolts lido no pino!
Agora vamos girar um pouco o potenciômetro e tentar novamente:

```
> print pot
1201
>_
```

Legal!!!

**5 de 5: Juntando Tudo — Um Conversor Analógico-para-Frequência!**
Certo, vamos substituir o LED no pino rd0 do CUI32Stem por um pequeno buzzer... E agora vamos escrever um programa usando todas as habilidades que acabamos de aprender para criar um "conversor analógico-para-frequência"! Vamos começar apagando tudo o que fizemos até agora com um comando "new" e, em seguida, seguir a partir daí:

```
> new
> 10 dim buzzer as pin rd0 for frequency output
> 20 dim pot as pin an0 for analog input
> 30 configure timer 1 for 100 ms
> 40 on timer 1 do let buzzer = pot
> 50 halt
> run
 _
```

Agora gire o potenciômetro e ouça o buzzer — ele vai de 0 a 3300 Hz, atualizado a partir do potenciômetro a cada 100ms! Mandamos bem! :-)

Continuação (exemplos de StickOS mais avançados) abaixo:

- [Dimmer de LED Sem Fio ZigFlea™](http://www.cpustick.com/examples.htm#ex3)

- [Termômetro Digital com LCD](http://www.cpustick.com/examples.htm#ex2)

- [Fique Íntimo (e Interativo!) com o seu MCU!](http://www.cpustick.com/examples.htm#int)

- [Controlador de Perfil de Temperatura para Forno Tostador](http://www.cpustick.com/examples.htm#ex1)

## Programação Mais Avançada

A instalação do MPIDE Multi-Platform IDE para compilar código Arduino para o CUI32Stem é descrita [aqui](http://www.chipkit.cc/wiki/index.php?title=MPIDE_Installation "MPIDE_Installation").

Programa C simples usando MPLAB que alterna o LED dependendo do acionamento de um botão:

```
#define SYSCLK 80000000L

#include <p32xxxx.h>
#include <plib.h>

int main(void)
{
 SYSTEMConfigPerformance(SYSCLK);

 LATE = 0xFFFE; TRISE = 0xFFFE;

 while (1) {
  LATEbits.LATE0 = PORTEbits.RE7;
 }

 return 0;
}
```

## Suporte

[Faça perguntas no fórum da Seeed](https://www.seeedstudio.com/forum).

## Visualizador Online do Esquemático

<div className="altium-ecad-viewer" data-project-src="http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

- [Arquivo ZIP contendo esquemático e layout em formato Eagle, esquemático em formato PDF, arquivos Gerber e BOM](http://cui32.googlecode.com/svn/trunk/eagle/CUI32Stem/CUI32Stem.zip)

- [Bootloader e firmware StickOS BASIC](http://code.google.com/p/cui32/source/browse/trunk/firmware/CUI32Stem/)

## Como comprar

Clique aqui para comprar no Seeedstudio Bazaar.

A placa CUI32Stem (sem headers) sozinha:
**Modelo: [https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208](https://www.seeedstudio.com/depot/cui32stem-p-1100.html?cPath=132_208)**

Um "kit inicial": (inserir link para o bazaar)
Wiki de documentação: CUI32Stem GROVE Dash Bundle, e

Um "kit completo": (inserir link para o bazaar)
Wiki de documentação: CUI32Stem GROVE Lab Buncle.

## Veja Também

- [http://www.cpustick.com/](http://www.cpustick.com/)

- [http://code.google.com/p/cui32/](http://code.google.com/p/cui32/)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
