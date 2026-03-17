---
title: DSO Quad
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Quad/
slug: /DSO_Quad
sku: 109990015, 109990016
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Quad/
---

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg)

DSO Quad, também conhecido como DSO203, é um osciloscópio digital de 4 canais de bolso para tarefas comuns de engenharia eletrônica. Ele é baseado em ARM Cortex M3 (STM32F103VCT6), proporcionando taxa de amostragem de 72MS/s com FPGA integrado e ADC de alta velocidade. Um disco USB interno de 2MB pode ser usado para armazenar capturas de formas de onda, aplicativos de usuário e para atualizar o firmware.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65)

## Recursos

---

* Tamanho de bolso e peso leve
* Dois canais analógicos de 36MS/s, até 72MS/s se configurado para canal único.**(Atualizado para dois canais analógicos de 72MS/s, até 144MS/s se configurado para canal único a partir da versão .sys v1.31)**  
* Dois canais digitais
* Gerador de sinal
* Várias opções de disparo (trigger)
* Armazenamento de formas de onda fácil
* Atualização de firmware
* Aplicativos de usuário
* Código aberto

**Fonte(s):** [Suporte a recursos](http://www.downloadranking.com/privacypolicy.php)

## Ideias de aplicação

---

### Aplicativos de usuário

Projetos em andamento:

* Port para GCC com FFT, espectrograma e várias correções [por pmos69 e marcosin](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2957)

* Interface de usuário alternativa [por gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2362)

* Port GCC do firmware padrão [por tmbinc](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2274)

* Plotador de resposta em frequência [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=10&amp;t=2485)

* Aplicativo de exemplo FFT [por gabonator1](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2098)

* Analisador lógico [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2861)

* Ambiente de programação Pawn e vários aplicativos [por jpa](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=3239)

* Port de SYS para gcc: [[1]](https://github.com/neilstockbridge/dsoquad-BIOS)

* Tetris [por LinX](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=2344)

<big>Coleção de ideias </big>

**Aplicativos**

* "Modo simples" - onde apenas as funções mais básicas estão disponíveis para ajudar pessoas sem experiência.
* ["Modo multímetro" - funções básicas de multímetro (AC/DC VOM, pico/rms/delta seriam interessantes)](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)

  * Detalhado em [https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter](https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter)
* Análise de protocolo/captura de dados - Serial, I2C, SPI, CAN
* Capacidade de medição LCR (uH, uF e R) - O gerador de sinal integrado torna isso algo natural. Três métodos existem, todos exigindo componente(s) externo(s) [Exemplo](http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance)
* Analisador de semicondutores - Usar o DAC para testar e traçar a resposta em tensão de um diodo/transistor (e simplesmente identificar componentes, como pinagem e polaridade de transistor)
* Analisador de espectro RF
* Um modo X-Y 2D que plota os canais analógicos um contra o outro em dois eixos, com um canal digital funcionando opcionalmente como um habilitar/desabilitar de "feixe".
  * [Algo](https://forum.seeedstudio.com/) parece existir? Ainda não está no APP2.50.

* Um decodificador/analisador e gerador DMX (usado em conjunto com um CI RS485 externo) tornaria isso um gadget MUITO útil para técnicos de teatro.

* Modo televisão (TV analógica): Exibir quadro/campo/linha (selecionar campo A/B) ou número de linha. Exibir diagrama de vectorscópio. Exibir conteúdo (ou seja: a imagem da TV).

* Sincronização com um segundo DSO Quad para um sinal analógico/digital de 4 canais, talvez semelhante ao USBscope50 [movido de HARDWARE]

usar 'wave out' para gerar um pulso/degrau quando a unidade mestre disparar, usar C/D como disparo para a(s) escrava(s)

* Criar software de controle remoto USB, de forma que, se o LCD quebrar, você ainda possa usá-lo com software para PC. [movido de HARDWARE]
* Transmitir dados para o PC - Usar o PC como buffer de armazenamento, com poder de processamento adicional. Um PC poderia decodificar palavras I2C e outros protocolos onde o Quad não conseguiria. [movido de HARDWARE]

* Função de ruído branco - adicionar ao gerador de funções

**Melhorias**

* Um analisador de espectro exibindo uma visão a partir de uma perspectiva de frequência/tempo
* Transformada Rápida de Fourier, seria útil e fácil para visualizar dados de espectro de um único sinal.

**Orientado a hardware/dispositivo**

* SDR (rádio definido por software) note que só temos USB full speed (12Mb/s)

* Pré-amplificador 10x muito necessário!!!
* Adicionar botões na moldura para facilitar o acesso aos menus.
* Adicionar mais 2 canais analógicos, talvez via dongle USB.

* Adicionar porta para dispositivos de expansão, de forma que um dispositivo adicional possa oferecer mais capacidades, como geração de RF, ou um gerador de funções capaz de amplitudes maiores. Em particular, uma saída de +5V e 3,3V seria útil.

**Outros**

* Aplicativo de serviço para equipe de suporte técnico. Poderia dividir a tela e exibir instruções como "Verifique se a porta 3, pino 5 tem sinal; se não tiver, xyz pode estar quebrado". Poderia haver um botão de próximo e, para cada etapa, o texto, a escala de tempo correta, valores de disparo etc. seriam selecionados
* Meu telefone é baseado em ARM, talvez fazer uma versão USB disso e um app para meu telefone, que permita que meu telefone seja o display/tela sensível ao toque protegida.
* Funções matemáticas simples em ambos os canais analógicos e no sinal gerado.

* Duas entradas totalmente aterradas separadamente permitiriam medir entradas que não são referenciadas ao mesmo terra. (como no osciloscópio pessoal de dois canais Velleman)
* Um diodo de proteção contra sobretensão na entrada deve ser adicionado para proteger o dispositivo contra picos de alta tensão

* Superamostragem e sua implementação em software poderiam reduzir o ruído e aumentar a profundidade de bits efetiva
* Técnica especial de amostragem em tempo equivalente poderia aumentar a largura de banda para sinais repetitivos

* Modo não armazenado que varre constantemente a área visível em vez de armazenar em um grande buffer fora da tela. Quando defino a taxa de amostragem para 50ms na versão atual (por exemplo, para observar um sinal de áudio) ela só atualiza a tela uma vez a cada poucos segundos; deveria atualizar continuamente.

* _Por favor, adicione mais ideias..._

Veja também informações sobre desenvolvimento de aplicativos para o DSO Quad

## Especificações

---
<table >
<tr>
<td> Canal analógico *2 </td>
<td> [CH_A] [CH_B] </td>
</tr>
<tr>
<td> Canal digital* 2 </td>
<td> [CH_C] [CH_D] </td>
</tr>
<tr>
<td> Escala vertical </td>
<td> 20mV-10V/div (passo 1-2-5) na ponta x1 / 200mV -100V/div (passo 1-2-5) na ponta x10 </td>
</tr>
<tr>
<td> Resolução vertical </td>
<td> 8 bits </td>
</tr>
<tr>
<td> Acoplamento de entrada </td>
<td> AC/DC </td>
</tr>
<tr>
<td> Tensão máxima de entrada </td>
<td> 80Vpp (ponta x1) / 400Vpp (ponta x10) </td>
</tr>
<tr>
<td> Armazenamento </td>
<td> 4K por canal / 8K em canal único </td>
</tr>
<tr>
<td> Tipo de disparo por software </td>
<td> borda, pulso, nível (a ser adicionado) </td>
</tr>
<tr>
<td> Tipo de disparo por hardware </td>
<td> borda </td>
</tr>
<tr>
<td> Fonte de disparo </td>
<td> CH1/CH2/EXT </td>
</tr>
<tr>
<td> Modo de disparo </td>
<td> Auto, Normal, Single, SCAN, None </td>
</tr>
<tr>
<td> Gerador de sinal de teste </td>
<td> 10Hz a 8MHz 2,8Vpp onda quadrada, ciclo de trabalho 10~90% ajustável / 10Hz a 20kHz 2,8Vpp onda senoidal, quadrada, dente de serra, triangular </td>
</tr>
<tr>
<td> Armazenamento </td>
<td> disco USB interno de 2MB, arquivo BMP, DAT </td>
</tr>
<tr>
<td> Medição automática </td>
<td> Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty </td>
</tr>
<tr>
<td> Medição com cursor </td>
<td> Nível, Tensão </td>
</tr>
<tr>
<td> Modo de exibição </td>
<td> CH1, CH2, EXT, CH1+CH2, CH1-CH2 </td>
</tr>
<tr>
<td> Modo de amostragem </td>
<td> tempo real </td>
</tr>
<tr>
<td> Taxa de amostragem </td>
<td> 30S/s - 72MS/s </td>
</tr>
<tr>
<td> Alimentação </td>
<td> Bateria LiPo </td>
</tr>
<tr>
<td> Dimensão </td>
<td> 98 *60* 14.5 (mm) </td>
</tr>
<tr>
<td> Peso </td>
<td> 80g (sem bateria) </td>
</tr>
<tr>
<td> Acessórios no pacote </td>
<td> 2 pontas de prova de osciloscópio mcx, 2 pontas de prova digitais mcx </td>
</tr>
</table>

## Componentes

---
Adicione links para folhas de dados dos componentes principais, como

<table >
<tr>
<td> CPU                 </td>
<td> 72 Mhz - ARM 32-bit Cortex™-M3 CPU - STM32F103VC [[2]](http://www.st.com/internet/mcu/product/164492.jsp)</td>
</tr>
<tr>
<td> FPGA                </td>
<td>ICE65F_VQ100 [[3]](http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf)</td>
</tr>
<tr>
<td> TFT                 </td>
<td></td>
</tr>
<tr>
<td> ADC                 </td>
<td> AD9288-40 [[4]](http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf)</td>
</tr>
<tr>
<td> OP-Amps             </td>
<td> OPA2354 [[5]](http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf)</td>
</tr>
<tr>
<td> MOSFET-Switches     </td>
<td></td>
</tr>
<tr>
<td> USB-Storage         </td>
<td></td>
</tr>
<tr>
<td> (adicionar mais aqui)     </td>
<td></td>
</tr></table>

## Atenção

---
A operação inadequada deste dispositivo pode resultar em lesão física e/ou dano ao dispositivo. Observe todas as precauções necessárias e leia toda a documentação antes de usar o dispositivo.

## Atualizando o firmware

---
Observe que este procedimento atualmente só funciona no Windows. [Instructions For Linux are here](/pt-br/DSO_Quad#atualizando-o-firmware-"DSO_Quad/#atualizando-o-firmware"). (2011-04-29) Se conseguirmos fazer o disco de atualização funcionar no Linux e no Mac, seria bem fácil escrever um aplicativo para automatizar este processo para usuários menos experientes. Pode até ser possível fazer o programa de atualização verificar a versão de hardware para evitar o envio do firmware errado.

### Onde encontrar o firmware

Aqui está o [firmware mais recente](https://files.seeedstudio.com/wiki/DSO_Quad/res/PA1_V113.zip).

Você também pode [compilar o firmware a partir do código-fonte](/pt-br/DSO_Quad-Building_Firmware "DSO Quad:Building Firmware").

### Aviso sobre versão

**AVISO**: É importante que você use o firmware para a sua versão específica de hardware. A versão de hardware é exibida na tela de abertura quando você liga o dispositivo. Peça ajuda nos fóruns se não conseguir determinar sua versão de hardware. Se você enviar o firmware errado, pode inutilizar o dispositivo.

### Procedimento de atualização

(Apenas Windows) Conecte o DSO Quad ao seu PC com um cabo mini USB. Mantenha pressionado o botão "&gt;||" (reproduzir/pausar) enquanto liga o dispositivo. Seu dispositivo agora está no modo de atualização de firmware, e um disco USB deve aparecer no seu sistema. Copie os arquivos de firmware um de cada vez e, cada vez que você copiar um novo arquivo, o dispositivo será desconectado para preparar o arquivo. Quando o disco reconectar, a extensão do arquivo que você enviou mudará (".rdy" significa que o envio funcionou corretamente).

A ordem em que você envia os arquivos IMPORTA. Comece enviando os arquivos .hex (a ordem não é importante). Para enviar os arquivos .BIN, você precisa primeiro enviar o arquivo .ADR correspondente. Isso informa ao dispositivo onde colocar o arquivo binário (por exemplo, envie primeiro o CFG_FPGA.ADR e, em seguida, envie xxxxFPGA.BIN imediatamente depois). Se você cometer um erro, apague todos os arquivos e comece novamente.

Quando terminar de enviar todos os arquivos de firmware, desligue o dispositivo para concluir a atualização. Quando você ligar o dispositivo novamente, as versões do firmware deverão estar atualizadas. Se você receber um erro na tela de abertura, tente enviar o firmware novamente, seguindo cuidadosamente as instruções acima.

Mais detalhes e instruções para Linux aqui: [DSO_Quad:Upgrading_Firmware](/pt-br/DSO_Quad#Atualizando-firmware-"DSO_Quad/#upgrading-firmware")

### Descrições de arquivos

<table>
<tr>
<th> Tipo de arquivo </th>
<th> Formato do nome do arquivo </th>
<th> Descrição</th>
</tr>
<tr>
<td> Arquivo FPGA </td>
<td> xxxxFPGA.BIN </td>
<td> dados de configuração para a FPGA</td>
</tr>
<tr>
<td> Arquivo de logotipo </td>
<td> logo_xxx.BIN </td>
<td> Crie qualquer arquivo .BMP de 16 cores 64*256 (tamanho do arquivo = 46,9 KB) e altere a extensão para .INF. Esta é a imagem exibida na tela de abertura.</td>
</tr>
<tr>
<td> Arquivo de sistema </td>
<td> SYS_xxxx.hex </td>
<td> ??? (descrição necessária)</td>
</tr>
<tr>
<td> Arquivo de aplicativo </td>
<td> APP_xxxx.hex </td>
<td> ??? (descrição necessária)</td>
</tr>
<tr>
<td> Arquivo de endereço </td>
<td> xxxx.ADR </td>
<td> Esses arquivos informam ao dispositivo onde colocar o próximo arquivo .BIN que você enviar. Há um para o arquivo FPGA e um para o arquivo de LOGO. Os arquivos são nomeados de forma que você saiba qual corresponde a qual.</td>
</tr></table>

**nota:** à medida que versões mais recentes se tornarem disponíveis, esses nomes de arquivo podem parecer ligeiramente diferentes. Os x representam valores que podem mudar ao longo do tempo.

### Layout de memória

![](https://files.seeedstudio.com/wiki/DSO_Quad/img/DSOQuad-bug-2.jpg)

<table  cellpadding="1" cellspacing="1">
<tr>
<td> Início</td>
<td> Fim</td>
<td> Tamanho</td>
<td> nota</td>
</tr>
<tr>
<td> 0x00000</td>
<td> 0x03fff</td>
<td> 16384</td>
<td> DFU</td>
</tr>
<tr>
<td> 0x04000</td>
<td> 0x0bfff</td>
<td> 32768</td>
<td> SYS</td>
</tr>
<tr>
<td> 0x0c000</td>
<td> 0x13fff</td>
<td> 32768</td>
<td> APP1 (padrão)</td>
</tr>
<tr>
<td> 0x14000</td>
<td> 0x1bfff</td>
<td> 32768</td>
<td> APP2</td>
</tr>
<tr>
<td> 0x1c000</td>
<td> 0x23fff</td>
<td> 32768</td>
<td> APP3</td>
</tr>
<tr>
<td> 0x24000</td>
<td> 0x2bfff</td>
<td> 32768</td>
<td> APP4</td>
</tr>
<tr>
<td> 0x2c000</td>
<td> 0x3d7ff</td>
<td> 71680</td>
<td> Fluxo de bits da FPGA (a folha de dados informa que o tamanho máximo é 533 KBit, então isto é um pouco grande)</td>
</tr>
<tr>
<td> 0x3d800</td>
<td> 0x3ffff</td>
<td> 10240</td>
<td> Logotipo (bmp, 256x64, 4 bits)</td>
</tr></table>

 Nota: o endereço base da flash é 0x08000000, mas é espelhado pelo chip em 0x00000000 quando BOOT0 está em nível baixo.

## Páginas relacionadas

* [DSO Quad:Calibration](https://wiki.seeedstudio.com/pt-br/DSO_Quad-Calibration)

* [DSO Quad:Upgrading Firmware](https://wiki.seeedstudio.com/pt-br/DSO_Quad/#Atualizando-firmware)

* [DSO Quad:Beta HW](https://wiki.seeedstudio.com/pt-br/DSO_Quad-Beta_HW)

## Links externos

1. Seeedstudio Blog [[6]](https://www.seeedstudio.com/blog/tag/dso-quad/)

2. Mais fotos no flickr [[7]](http://www.flickr.com/photos/seeedstudio/tags/dsoquad/)

3. [Aplicação DS203 na inspeção de BMW (chinês, traduzido automaticamente para o inglês)](http://translate.google.gr/translate?js=n&amp;prev=_t&amp;hl=zh-CN&amp;ie=UTF-8&amp;layout=2&amp;eotf=1&amp;sl=zh-CN&amp;tl=en&amp;u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54) [[Página original](http://www.minidso.com/forum/viewtopic.php?f=4&amp;t=54) ] - Alguns caras que trabalham para a BMW inspecionaram o carro com um DSO203; além do tamanho de bolso e do desempenho prático, o DSO203 opera perfeitamente na inspeção do barramento BWM:FlexRay.

## Recursos

---

* [Firmware mais recente V2.72](https://files.seeedstudio.com/products/109990015/DS203.V2.72.zip)
* [Esquemático e firmware (HW2.2 ~ HW2.72)](https://wiki.seeedstudio.com/pt-br/DSO_Quad/#Atualizando-firmware)

* [Fórum de discussão com recursos para HW2.6](https://forum.seeedstudio.com/viewtopic.php?f=22&amp;t=1929)

* [DS203_yijian_app_user_manual.rar‎](https://files.seeedstudio.com/wiki/DSO_Quad/res/DS203_yijian_app_user_manual.rar)

* [Manual do DSO Quad](https://files.seeedstudio.com/wiki/DSO_Quad/res/DSO203_user_Guide_2.pdf)

## Suporte técnico e discussão sobre o produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
