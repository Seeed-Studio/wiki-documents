---
description: Edison_4WD_Auto_Robotic_Platform
title: Edison_4WD_Auto_Robotic_Platform
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Edison_4WD_Auto_Robotic_Platform
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-02'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Edison_4WD_Auto_Robotic_Platform/
---

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform12.jpg)

A plataforma robótica automática 4WD é uma unidade móvel potente com o kit Intel Edison Arduino. Para controlar esta plataforma, você precisa usar um smartphone ou um computador com Wi‑Fi capaz de se conectar ao seu ponto de acesso Wi‑Fi. Abra um navegador da web, insira o endereço [http://192.168.42.1:8000](http://192.168.42.1:8000) e então um painel de operação aparecerá. Este é um projeto básico; se você é um maker e tem capacidade para hackear esta plataforma, é bem‑vindo a fazer uma reformulação mais poderosa.

##  Primeiros Passos

###  Lista de Peças

|Peças|Especificação|Material|Quantidade|
|-----|----|-----|-----|
|Suporte 1|200 * 35 * 20mm * 3.0mm|Alumínio|2|
|Suporte 2|135 * 35 * 20mm * 3.0mm|Alumínio|2|
|Estrutura de Junta em Ângulo|29 * 12 * 10mm * 2.0mm|Metal|4|
|Placa Superior|200 * 132 * 1.5mm|Alumínio|1|
|Placa Inferior|199 * 129 * 2.0mm|Acrílico|1|
|Fixador de Bateria|67 * 15 * 2.0mm|Acrílico|2|
|Placa Superior Interna|184 * 132 * 2.0mm|Acrílico|1|
|Roda|Ф85mm * L31mm|Plástico &amp; Borracha|4|
|Acoplador de Eixo|para eixo Ф4mm|Metal|4|
|Motor DC|[Spec](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)|/|2|
|Motor DC (com Encoder)|[Spec](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)|/|2|
|Distanciador|M3.0 * H45+6.0mm|Metal|4|
|Distanciador|M3 × 10mm|Metal|4|
|Distanciador|M2 * 10mm|Metal|3|
|Parafuso de Cabeça Chata com Sextavado Interno|M4.0 * H8.0mm|Metal|16|
|Parafuso de Cabeça Panela com Fenda Cruzada|M4.0 * H8.0mm|Metal|4|
|Parafuso de Cabeça Panela com Fenda Cruzada|M3 * 35mm|Metal|4|
|Parafuso de Cabeça Panela com Fenda Cruzada|M3 * 8mm|Metal|30|
|Parafuso de Cabeça Panela com Fenda Cruzada com Arruela|M3.0 * H6.0mm|Metal|8|
|Conjunto de Parafuso, Arruela de Pressão e Arruela Lisa|M2 * 8mm|Metal|6|
|Porca Sextavada|M3|Metal|8|
|Arruela de Pressão|M4|Metal|4|
|Arruela Lisa|M3 * 7 * 0.5|Metal|4|
|Chave de Fenda|/|Metal &amp; Plástico|1|
|Chave Allen|/|Metal|1|
|[Grove - I2C Motor Driver](https://www.seeedstudio.com/depot/Grove-I2C-Motor-Driver-p-907.html)|/|PCB|1|
|[Base Shield V2](https://www.seeedstudio.com/depot/base-shield-v13-p-1378.html?cPath=132_134)|/|PCB|1|
|[Grove - Universal 4 Pin Buckled 20cm Cable](https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-20cm-Cable-5-PCs-pack-p-936.html)|/|Cabo|1|
|Adaptador Paralelo Dean|Plugue|/|1|
|Cabo de Alimentação Macho Dean|/|Cabo|1|
|Cabo de Alimentação Dean para DC|/|Cabo|1|
|Cabo de Alimentação TRX para Dean|/|Cabo|1|
|Abraçadeira de Cabo|3 * 60mm|Plástico|3|
|Instruções de Montagem|A4|Papel sulfite|1|

###  Como Montar

[Assembly Instruction.pdf](https://seeeddoc.github.io/Edison_4WD_Auto_Robotic_Platform/res/Assembly_Instruction_02.pdf)

**1. Monte o corpo principal.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_01.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_02.PNG)

**2. Conecte os cabos**

1) Abaixo estão as peças com cabos a serem conectados; você precisa de uma chave de fenda de cabeça chata de 2,5 mm para apertar o driver do motor.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble01.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble17.JPG)

2) Cole os dissipadores de calor de alumínio nos chips do driver do motor e monte a placa intermediária.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble12.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble18.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble19.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble14.JPG)

3) Conecte o driver do motor; os cabos pretos do grupo de motores se conectam a "M1-" "M2-" e os vermelhos se conectam a "M1+" "M2+". Conecte o cabo de alimentação, o cabo preto vai para "GND", o vermelho para "VS".

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble04.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

4) Monte o grupo de motores no corpo principal; os motores do mesmo grupo devem ser montados no mesmo lado. Use uma abraçadeira de nylon para prender os fios e depois conecte o cabo Grove.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble05.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble06.jpg)

5) Coloque a placa intermediária; o cabo de alimentação e o cabo Grove devem atravessar o orifício direito.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble07.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble08.jpg)

6) Conecte o conector de alimentação 1‑para‑2, o cabo adaptador de bateria e o cabo de alimentação da placa Arduino; o cabo Grove se conecta ao pino A0 do Base Shield.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble09.jpg)

7) Conecte cuidadosamente o conector da bateria para ligar; teste se tudo foi feito corretamente agora, se nenhum LED acender você deve verificar qual é o problema.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble10.JPG)

8) Conecte os cabos USB para testar o software.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble11.JPG)

**3. Continue montando**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_03.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_04.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_05.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_06.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_07.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_08.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_09.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_10.PNG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Assembly_Instruction_Step_11.PNG)

###  Ambiente de Desenvolvimento

Embora o Edison Arduino possa ser programado pela IDE do Arduino, para um desenvolvimento mais avançado nós entramos no sistema Linux para fazer algum desenvolvimento de baixo nível. O recurso mais importante é a biblioteca mraa fornecida pela Intel. As coisas não são tão idealizadas, pois houve dificuldades em nosso desenvolvimento inicial; para construir um ambiente de desenvolvimento conveniente, copiamos a partição de rootfs do sistema de arquivos Linux, na qual já configuramos todos os recursos necessários e compilamos o projeto da plataforma 4WD. A única coisa que você precisa fazer para que esta plataforma funcione é gravar um novo firmware no Edison. Se você quiser saber o que fizemos no sistema Linux e como fazer seu próprio projeto, consulte o repositório no GitHub:

[https://github.com/Seeed-Studio/Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

####  Para usuários Windows

#####  Instalar ferramentas

Siga o **guia de primeiros passos do site oficial do Edison** para instalar os drivers necessários e o emulador de terminal PuTTy.

Baixe o [dfu-util - Device Firmware Upgrade Utilities](http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries.tar.xz) e extraia o arquivo xz para "C:\" ou qualquer outro diretório.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform21.png)

**Adicionar variáveis de ambiente**

Clique com o botão direito em Este Computador  &gt;  Configurações avançadas do sistema  &gt;  Variáveis de ambiente  &gt; copie o caminho do dfu-util.exe para anexar à variável de ambiente "Path".

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform22.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform23.png)

#####  Gravar novo firmware

**1. Baixar e descompactar**

[Baixe o firmware personalizado do wiki da Seeed](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip)

[Baixe o firmware personalizado do OneDrive](https://onedrive.live.com/?cid=b24d52d93861663f&amp;id=B24D52D93861663F%212178&amp;ithint=file,7z&amp;authkey=!AIH0ajk2jCZzTFE)


**2. Use o PuTTy**

Siga o guia oficial Edison Getting Started para fazer login no Edison com o PuTTy.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform25.png)

**3. Gravar firmware**

Siga os passos abaixo.

**Passo 1. Clique duas vezes em flashall.bat**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform26.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform27.png)

**Passo 2. Vá ao PuTTy e insira o comando reboot ou pressione o botão RESET na placa Edison Arduino.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform28.png)

**Passo 3. Gravando firmware**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform29.png)

**Passo 4. Edison reinicia e o serviço do Wi-Fi Car é iniciado.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform30.png)

**Passo 5: Reinicie a alimentação**

Desconecte e reconecte a bateria.

####  Para usuários de Mac

Veja o [site oficial do Intel Edison](https://communities.intel.com/docs/DOC-23193)  "Alternate Flashing Method".

####  Para usuários de Linux

**1.Faça o download da imagem personalizada**

<pre>
&gt;&gt;wget https://www.seeedstudio.com/wiki/images/a/a6/Edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;unzip edison-image-rel1-maint-rel1-ww42-14-for-wificar.zip
&gt;&gt;7z x edison-image-rel1-maint-rel1-ww42-14-for-wificar.7z
</pre>

**2.Flash da imagem**

1)Instale o dfu-util

<pre>
sudo apt-get install dfu-util
</pre>

2)Verifique qual dispositivo é o do Edison:

<pre>
&gt;&gt;ls /dev/ttyUSB*
</pre>

3)Abra o terminal serial

<pre>
&gt;&gt;sudo screen /dev/ttyUSB0 115200
</pre>

4)Execute flashall.sh

<pre>
&gt;&gt;cd edison-image-rel1-maint-rel1-ww42-14-for-car
&gt;&gt;sudo ./flashall.sh
</pre>

5)Vá para o Edison e digite reboot

<pre>
&gt;&gt;reboot
</pre>

###  Aplicação

Agora use um smartphone ou computador para procurar o ponto de acesso WiFi, o SSID foi nomeado com um número de série exclusivo pelo id S/N em cada placa principal do Edison, como EDIOSN-FZED445001UCV501, e a senha é 12345678.
Depois de conectado ao WiFi, abra qualquer navegador e visite **http://192.168.42.1:8000** você verá um painel com o qual é possível controlar a Plataforma 4WD.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform15.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform13.png)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform14.png)

[Wi-Fi car Android apk](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/WiFiCarcn.xiongyihui.wificar2.apk.zip)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform34.png)

###  Como programá-lo

Navegue até /usr/share/car você verá o projeto, estes arquivos são:

<pre>
&gt;&gt;cd /usr/share/wificar
&gt;&gt;ls
</pre>

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform31.png)

<table cellspacing="0">
<tr>
<th scope="col">car.py</th>
<td>Classe de ação do carro</td>
</tr>
<tr>
<th scope="col">car_httpd.py</th>
<td>Processo do servidor web</td>
</tr>
<tr>
<th scope="col">i2c_motor.py</th>
<td>Driver do motor i2c</td>
</tr>
<tr>
<th scope="col">softi2c.py</th>
<td>Driver softi2c para Edison</td>
</tr>
<tr>
<th scope="col">www</th>
<td>Arquivo fonte do servidor web</td>
</tr>
</table>

###   Aprimoramento - dois Drivers de Motor

**1. A fiação.**

Aqui você vai precisar de um alicate decapador de fios, um ferro de solda e uma tesoura para cortar os cabos de extensão dos motores, e usar um deles para fazer um novo cabo de alimentação de motor um-para-dois.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring09.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring02.JPG)
![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring10.JPG)

**2. Montagem**

**Passo 1. Conecte os motores.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring01.JPG)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_WiFiCar_WireAssemble16.png)

**Passo 2.Monte o motor e o driver de motor, preste atenção às setas amarelas, dois drivers de motor são fixados com apenas dois parafusos.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring13.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring11.png)

**Passo 3.Conecte o cabo de alimentação e os dois cabos Grove.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring06.JPG)

**Passo 4. Coloque a placa do meio.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring07.JPG)

**Passo 5. Conecte os cabos Grove em D4(D4,D5)  D8(D8,D9) sem definição especial, teste a conexão conectando a bateria.**

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring08.JPG)

**3. Modificação de software**

Vá para o terminal virtual, abra car.py e faça a alteração abaixo.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring14.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring15.png)

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Enhance_Wiring16.png)

##  FAQ

1.Se você conectou o WiFi do Edison e o painel foi exibido, mas não consegue controlar o rover.

R:Tente reiniciar a alimentação.

2.As duas portas USB na placa Arduino do Edison foram bloqueadas por uma roda. O que fazer para conectar os cabos USB?

R:Você tem que remover a roda quando quiser conectar cabos USB. Se quiser apenas acessar o sistema Linux, você pode conectar-se ao seu AP WiFi e acessar via ferramentas SSH, o PuTTy é compatível com SSH.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform33.jpg)

3.Você executou o servidor do Wi-Fi car e o smartphone recebeu o painel, mas não consegue controlar o rover. Por quê?

R:O i2c Motor Driver tem um bug: se um byte completo de comandos enviados for interrompido, o driver do motor perderá o controle. Você precisa reiniciar a placa driver pressionando o botão de reset nela.

![](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/img/Edison_4WD_Auto_Robotic_Platform32.png)

##  Suporte

*   [github-Edison_WiFi_Car](https://github.com/Seeed-Studio/Edison_WiFi_Car)

*   [Site oficial do Intel Edsion](https://www.intel.com/content/www/us/en/do-it-yourself/edison.html)

*   [Edison - Software Downloads](https://communities.intel.com/docs/DOC-23242)

*   [Fórum oficial da Intel](https://communities.intel.com/community/makers/edison/forums)

*   [intel-iot-devkit/mraa](https://github.com/intel-iot-devkit/mraa)

*   [Intel Edison Getting Start](https://communities.intel.com/docs/DOC-23147)

*   [Flashing Edison(wired) - Windows(Mac, Linux)](https://communities.intel.com/docs/DOC-23192)

*   [Edison 4WD Auto Robotic Platform DC Motor Spec](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_Spec.pdf)

*   [Edison 4WD Auto Robotic Platform DC Motor with Encoder Spec](https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform/res/Edison_4WD_Auto_Robotic_Platform_DC_Motor_with_Encoder_Spec.pdf)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
