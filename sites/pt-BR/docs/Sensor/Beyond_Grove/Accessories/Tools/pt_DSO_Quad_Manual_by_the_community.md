---
title: Manual do DSO Quad (pela comunidade)
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Quad_Manual_by_the_community/
slug: /DSO_Quad_Manual_by_the_community
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Quad_Manual_by_the_community/
---
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/P10308912-1024x684.jpg)

O DSO Quad é um osciloscópio de bolso. Ele tem muitos recursos excelentes em um pequeno pacote:

* 2 Entradas Analógicas a 72 MS/s (10[Vpp](#definitions) usando a [sonda x1](#definitions), 80[Vpp](#definitions) é possível com uma atualização).

* 2 Entradas Digitais (3,3V máx., diodo projetado para permitir tensões mais altas necessita de uma atualização). Sondas digitais não incluídas.

* Saída do Gerador de Sinais, 10 Hz-20kHz analógica ou 10 Hz-100kHz digital (8 MHz de saída digital é possível com uma atualização).

* Modos de disparo Auto, Normal, Single, Scan e de execução livre.

Se esta é a sua primeira vez usando o DSO Quad, leia a seção [Primeiros Passos](#getting-started).

A seção de [Especificações](#specifications) possui todos os detalhes sobre os recursos do DSO Quad.

<!-- [&gt; Download this manual as a PDF &lt;](#PDF) -->

_**Nota: O DSO Quad é atualmente um produto BETA. Isso significa que ainda existem problemas significativos de hardware e software no produto. Toda tentativa foi feita para descrever com precisão o produto atual neste manual. Entretanto, este manual é fornecido com ABSOLUTAMENTE NENHUMA GARANTIA.**_

## Por que outro manual?

O manual oficial da Seeedstudio pode ser baixado [aqui](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929). Eu comecei esta página como um projeto no meu tempo livre para responder todas as perguntas que eu tinha quando recebi meu DSO Quad pela primeira vez.

Este manual pode ajudar se você estiver se perguntando:

1. Como instalo a bateria? (Estou preocupado que minha bateria possa estar ao contrário! Como posso ter certeza?)

2. Como abro a tampa traseira?

3. Como ligo o aparelho?

4. O que significam os LEDs indicadores de carregamento?

5. Como atualizo o firmware?

6. Como testo o aparelho?

7. Para que servem os botões?

Eu senti que tudo isso pertence a um único lugar -- um manual -- e continuei trabalhando nele até que se tornou o que você vê agora.

### Outra documentação da Seeedstudio

* [Manual do DSO Quad (página oficial do wiki)](/pt-br/DSO_Quad "DSO Quad")

* [DSO Quad Construindo Firmware](/pt-br/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")

* [Tutorial de instalação da bateria do DSO Quad com vídeo](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2074)

## Primeiros Passos

Quando você receber o DSO Quad, você deverá ter algo assim:

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_plastic_cover.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_usb_cable.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_pouch.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_probes.jpg)
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_battery.jpg)<br />
(Esta é a bateria de polímero de lítio, ainda no seu saco antiestático)

### Instalar a bateria

1. Primeiro, certifique-se de que o interruptor liga/desliga do DSO Quad esteja **desligado**:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Turn_off.jpg)

2. Segure o DSO Quad de forma que você esteja olhando para o texto na face traseira, com a orientação correta, como mostrado:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_right_side_up.jpg)

3. Deslize a face traseira para a esquerda:<br />
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Back_slide_to_left.jpg)

4. A face traseira deve então cair facilmente, revelando o compartimento vazio da bateria:
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_back_removed.jpg)<br />
 **Nota:** Há relatos de baterias com polaridade invertida. _**Isso irá destruir seu circuito de carregamento se não for corrigido.**_ Verifique cuidadosamente o alinhamento adequado dos fios vermelho e preto.

5. Verifique se o fio vermelho está mais próximo da parte externa do DSO Quad. O fio preto fica na parte interna.
![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_observe_polarity.jpg)

6. Se a sua bateria estiver conectada incorretamente, _**não a conecte!**_ Vá para [este tópico do fórum](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1911) para obter ajuda.

7. Se a sua bateria estiver conectada corretamente, passe os fios pelos clipes no lado esquerdo:

8. Deslize a tampa traseira para o lugar.
Segure firmemente o lado esquerdo enquanto desliza a tampa para a direita. Veja [http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/](http://www.flickr.com/photos/seeedstudio/5807556545/in/photostream/) para uma demonstração.

9. <div className="thumb tright"><div className="thumbinner" style={{width: 202}}> <div className="thumbcaption">LED vermelho de "carregando"</div></div></div> Vire o DSO Quad na posição vertical e conecte o cabo USB. Você deverá ver o LED vermelho de "carregando". Por favor, carregue seu DSO Quad por pelo menos 1 hora na primeira vez antes de usá-lo.

![](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_red_charging_led.jpg)

10. Por favor, [atualize o seu firmware](#firmware-updates) para a versão mais recente.

### Indicadores de LED e modos de energia

O DSO Quad é carregado conectando o cabo USB. O controlador de bateria LTC4054 [não irá carregar a bateria](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922) enquanto o interruptor estiver ligado. Isso é melhor explicado em uma tabela:

<table>
<tr>
<th> Interruptor de energia</th>
<th> Cabo USB</th>
<th> Bateria</th>
<th> O que você vê</th>
<th> Modo de energia do DSO Quad</th>
</tr>
<tr>
<td> DESLIGADO</td>
<td> Desconectado</td>
<td> Ociosa</td>
<td> LEDs apagados, tela desligada</td>
<td> Desligado</td>
</tr>
<tr>
<td> LIGADO</td>
<td> Desconectado</td>
<td> Descarregando</td>
<td> LEDs apagados, tela ligada</td>
<td> Normal (ligado)</td>
</tr>
<tr>
<td> LIGADO</td>
<td> Desconectado</td>
<td> Descarregando</td>
<td> LED verde aceso, tela desligada</td>
<td> Modo de economia de energia: após 600 segundos sem pressionar botões, a tela é apagada</td>
</tr>
<tr>
<td> LIGADO</td>
<td> Desconectado</td>
<td> Vazia</td>
<td> LEDs apagados, tela desligada</td>
<td> Sem bateria, desligado. Conecte o cabo USB: a bateria precisa ser carregada</td>
</tr>
<tr>
<td> LIGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Ociosa</td>
<td> LED vermelho aceso, tela ligada</td>
<td> Ligado, [a bateria não irá carregar enquanto estiver ligado](https://forum.seeedstudio.com/viewtopic.php?p=6922#p6922)</td>
</tr>
<tr>
<td> DESLIGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Carregando</td>
<td> LED vermelho aceso, tela desligada</td>
<td> Desligado, bateria carregando</td>
</tr>
<tr>
<td> DESLIGADO</td>
<td> A porta USB não está fornecendo energia*</td>
<td> Ociosa</td>
<td> LEDs apagados, tela desligada</td>
<td> Desligado, impossibilitado de carregar</td>
</tr>
<tr>
<td> DESLIGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Cheia</td>
<td> LEDs apagados, tela desligada</td>
<td> Desligado, bateria cheia</td>
</tr>
<tr>
<td> DESLIGADO</td>
<td> Conectado a USB 5V/500mA</td>
<td> Nenhuma bateria instalada</td>
<td> LED vermelho fracamente aceso, tela desligada</td>
<td> Desligado, nenhuma bateria instalada</td>
</tr>
</table>

*** A porta USB não está fornecendo energia:** se o seu DSO Quad não estiver carregando, o problema pode ser a porta USB. Aqui estão algumas dicas de solução de problemas:

1. Certifique-se de que o cabo USB está corretamente conectado.

2. Tente uma porta diferente no computador. Alguns hubs USB não conseguem fornecer energia suficiente, especialmente se vários dispositivos estiverem conectados.

3. Tente uma porta diferente em outro computador. Alguns notebooks podem desligar a alimentação das portas USB quando estão no modo de suspensão.

### Atualizações de Firmware

Existem várias versões do DSO Quad, e o firmware de cada uma é diferente. Identifique cuidadosamente o seu hardware. Quando você liga o DSO Quad pela primeira vez, procure a versão do hardware. Compare o que você vê com a tabela a seguir:

Verifique aqui o firmware mais recente: [DSO Quad Construindo Firmware](/pt-br/DSO_Quad-Building_Firmware "DSO Quad Building Firmware")
Aqui está o firmware mais recente sob contrato especial com [FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip).

<table>
<tr>
<th> Tela de Boot</th>
<th> Versão de Hardware</th>
<th> FW de Fábrica</th>
<th> Última Atualização de FW</th>
<th> Notas</th>
</tr>
<tr>
<td></td>
<td>2.7</td>
<td>APP 2.53<br/>SYS 1.52<br/>FPGA 2.</td>
<td>APP P1.00<br/>SYS B1.52<br/>FPGA 2.61</td>
<td>Seeed Studio envia esta versão.<br/>Este firmware tem uma GUI muito melhor!<br/>(Além disso, o firmware de fábrica na 2.7 travava muito, então este firmware é altamente recomendado)<br/><img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_26.jpg" /></td>
</tr>
<tr>
<td></td>
<td>2.6</td>
<td>APP 2.33<br/>SYS 1.33<br/>FPGA 2.5</td>
<td>APP 2.53<br/>SYS 1.52<br/>FPGA 2.61<br/>Seeed Studio enviou esta versão<br/><img src="https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/img/Dso_quad_hw_ver_22.jpg" /><br/>2.2 APP<br/>SYS 1.02</td>
<td>[APP 2.34?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)<br/>[SYS 1.32?](https://forum.seeedstudio.com/viewtopic.php?p=6760#p6760)</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td></td>
<td>Dispositivos Ver 2.2 foram fornecidos apenas para testadores Beta, com um <a href="http://ourdev.cn/bbs/bbs_content_all.jsp?bbs_sn=4138839">upgrade gratuito para 2.6</a>. Esta versão não receberá mais atualizações de software.</td>
</tr>
</table>

Você pode encontrar mais informações em [https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929).

O código-fonte do firmware está disponível [aqui](http://github.com/Seeed-Studio/DSOQuad_SourceCode). **Nota:** A Seeedstudio não recomenda que você crie o seu próprio firmware de FPGA, por causa do risco de danificar o hardware.

### Calibração

O DSO Quad requer calibração antes do primeiro uso e deve ser recalibrado após uso prolongado. Os dois parâmetros a serem calibrados são ganho e bias (offset DC).

#### GUI antiga (versão do app 2.x)

1. Calibração de Bias

    1. Segure o botão marcado com um quadrado por 2 segundos, e a "planilha" de calibração aparece

        2. Ajuste os valores para 0 em cada caixa. Mova para cima/baixo girando o botão de "navegação" mais à direita para a esquerda/direita. Mova as colunas clicando no botão de "navegação" mais à direita.

        3. Cancele a calibração deixando algumas entradas inalteradas. Ou salve a calibração após calibrar em cada nível. Siga as instruções na parte superior.

2. Calibração de ganho

    1. (Consulte o manual normal para isso)

#### Nova GUI (hardware 2.7, versão do app P1.00 e superior)

(não tenho certeza do que está acontecendo com a numeração de versão, talvez seja um beta ou preview, mas não está claro para mim)

1. Calibração de bias

    1. Pressione o botão quadrado uma vez

        2. Selecione "Calibrat" no menu.

        3. Siga as instruções

Mais detalhes veja aqui: [DSO Quad:Calibration](/pt-br/DSO_Quad-Calibration "DSO Quad:Calibration")

Nota: observei que a calibração é diferente quando você conecta ou desconecta uma fonte de alimentação na conexão micro USB. Portanto, calibre da maneira como você o usará na maior parte do tempo.

1. Calibração de ganho

    1. (Consulte o manual normal para isso)

## Usando o DSO Quad

Os interruptores mais importantes são os dois interruptores rotativos à direita. O da extrema direita é o interruptor de "navegação" para mudar qual parte principal da interface do usuário está piscando no momento. O outro interruptor é o interruptor de "submenu" usado para alterar Volts/div, microssegundos, posições de disparo, etc.

Cada um desses interruptores pode ser girado para a esquerda ou para a direita e clicado como um botão de pressão.

A tela principal possui estes blocos:

<table>
<tr>
<th> Título</th>
<th> Descrição do bloco</th>
</tr>
<tr>
<td> RUN/HOLD</td>
<td> Pausar o osciloscópio e começar a executar novamente</td>
</tr>
<tr>
<td> CH(A)</td>
<td> traço e medições de cor ciano</td>
</tr>
<tr>
<td> CH(B)</td>
<td> traço e medições de cor amarela</td>
</tr>
<tr>
<td> CH(C)</td>
<td> traço e medições de cor roxa</td>
</tr>
<tr>
<td> CH(D)</td>
<td> traço e medições de cor verde</td>
</tr>
<tr>
<td> SCAN</td>
<td> SCAN/AUTO/NORM (NORMAL)/SINGL (SINGLE)/NONE de cor marrom modo de disparo</td>
</tr>
<tr>
<td> Signal Generator</td>
<td> "wave out" azul digital e analógico</td>
</tr>
<tr>
<td> Trigger</td>
<td> Todos os níveis de disparo (para CH(A) até CH(D)) e o modo de disparo</td>
</tr>
<tr>
<td> YPOS</td>
<td> YPOS</td>
</tr>
<tr>
<td> V1</td>
<td> V1</td>
</tr>
<tr>
<td> V2</td>
<td> V2</td>
</tr>
<tr>
<td> Rolagem horizontal</td>
<td> Rolagem horizontal</td>
</tr>
<tr>
<td> T1</td>
<td> T1</td>
</tr>
<tr>
<td> T2</td>
<td> T2</td>
</tr>
<tr>
<td> XPOS</td>
<td> XPOS</td>
</tr>
<tr>
<td> Delta V</td>
<td> diferença entre os marcadores V1 e V2</td>
</tr>
<tr>
<td> Delta T</td>
<td> diferença entre os marcadores T1 e T2</td>
</tr>
<tr>
<td> medições em tempo real</td>
<td> leituras de medição personalizáveis. Por exemplo, Vbt, FPS, Vdc, RMS, Max, Min, Vpp, FRQ, DUT, CIR, TL, TH</td>
</tr>
</table>

### Medindo tensão

Vmax, Vmin, Vpp, Vdc (V médio), Vrms (sqrt(média(V*V)))

## Especificações

Amostragem de 0,1 μs - 1 s

Largura de banda de entrada digital [Este tópico no fórum](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1978)

### Definições

<table>
<tr>
<th> Vpp</th>
<td> Volts pico a pico</td>
</tr>
<tr>
<th> sonda x1</th>
<td> Mede sinais de baixa tensão. Não exceda 80Vpp ou você poderá danificar o seu DSO Quad. (Pode ser usada como sonda de baixa impedância.)</td>
</tr>
<tr>
<th> sonda x10</th>
<td> Mede sinais de alta tensão. Não exceda 400Vpp ou você poderá danificar o seu DSO Quad. (Pode ser usada como sonda de alta impedância.)<br/><br/>Observe que os valores na tela são 1/10 da entrada, portanto, multiplique por 10 de cabeça.</td>
</tr>
<tr>
<th> ...</th>
<td> ...</td>
</tr>
</table>

### Requisitos

O DSO Quad pode ser carregado a partir de qualquer porta USB normal. Carregue o seu DSO Quad por pelo menos 1 hora antes de usá-lo.

O firmware do DSO Quad faz uma rápida desconexão e reconexão USB para fazer uma atualização de firmware "ao vivo". Este método é incompatível com Mac OS X ou Linux. Consulte [este tópico no fórum](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1934) para mais informações. Veja [DSO Quad Building Firmware](/pt-br/DSO_Quad-Building_Firmware "DSO Quad Building Firmware") para saber como atualizar o firmware a partir do Linux.

## Recursos

[FPGA(DFU，SYS，APP) v2.7.2](https://files.seeedstudio.com/wiki/DSO_Quad_Manual_by_the_community/res/DS203.V2.72.zip)

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
