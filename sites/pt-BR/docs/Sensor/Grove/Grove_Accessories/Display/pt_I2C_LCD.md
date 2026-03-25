---
description: I2C LCD
title: I2C LCD
keywords:
  - Grove
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /I2C_LCD
sku: 114990502, 114990279
last_update:
  date: 1/9/2023
  author: shuxu hu
createdAt: '2023-01-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/I2C_LCD/
---

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_WIKI_1.jpg" alt="pir" width={600} height="auto" /></p>

I2C_LCD é um módulo de display fácil de usar, que pode tornar a exibição mais simples. Usá-lo pode reduzir a dificuldade de criação, de modo que os makers possam se concentrar no núcleo do trabalho.

Nós desenvolvemos a biblioteca Arduino para o I2C_LCD; o usuário precisa de apenas algumas linhas de código para obter recursos complexos de exibição de gráficos e texto. Ele pode substituir o monitor serial do Arduino em alguns casos; você pode obter informações de execução sem um computador.

Mais do que isso, também desenvolvemos o software dedicado de conversão de dados de imagem (conversor de bitmap), que agora está disponível para suportar a plataforma de PC com Windows, Linux e Mac OS. Através do software de conversão de bitmap você pode exibir sua imagem favorita no I2C_LCD, sem necessidade de programação complexa.

O I2C_LCD pode lhe fornecer uma forma muito conveniente de criar. Divirta-se!

###Product Version

| Versão 	| Como comprar	|
|-----------|---------------|
|I2C_LCD (With universal Grove cable)|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|
|I2C_LCD (With conversion Grove cable)|[<p><img src="https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/300px-Get_One_Now_Banner.png" alt="pir" width={600} height="auto" /></p>](https://www.seeedstudio.com/I2C_LCD-(With-universal-Grove-cable)-p-2601.html)|

##Features

* Apenas 2 pinos do Arduino são ocupados (usa interface I2C).
* Suporta modo I2C padrão (100Kbit/s) e modo I2C rápido (400Kbit/s).
* Compatível com múltiplos níveis lógicos de comunicação: 2,8~5VDC.
* Suporta biblioteca Arduino, use uma linha de código para concluir a exibição.
* Integra 7 tamanhos de fontes ASCll e 5 funções gráficas.
* Fornece software dedicado de conversão de dados de imagem (Bitmap Converter).
* A maior parte das operações complexas é processada pelo controlador independente do I2C_LCD, economizando recursos do controlador do usuário.
* Suporta função de cursor, pode configurar 16 frequências de piscada do cursor.
* Suporta ajuste de brilho da luz de fundo em 128 níveis.
* Suporta ajuste de contraste da tela em 64 níveis.
* Suporta modificação do endereço do dispositivo.
* Suporta 127 módulos I2C_LCD trabalhando em paralelo.
* Ao depurar código, ele pode substituir o monitor serial para monitorar o estado de execução do programa.
* São fornecidos dois métodos de recuperação anormal: reset e restauração das configurações de fábrica.
* Compatível com interface Grove e interface 4Pin-100mil (sob o soquete Grove).
* Design com 4 furos de fixação simétricos para facilitar a instalação pelo usuário.
* Aparência exclusiva de estilo chinês.


##Platforms Supported


##Interface Function

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_Board.jpg" alt="pir" width={600} height="auto" /></p>

##Specification
|Parâmetro|Valor|
|---------|-------------|
|Tipo de Tela|LCD de duas cores|
|Resolução da Tela|128*64 Pixels|
|Área Ativa da Tela (C*L)| 47,1*26,5mm|
|Tamanho de Pixel Individual|0,33*0,33mm|
|Modo de Comunicação|I2C(100Kbit/s e 400Kbit/s)|
|Controlador|STM8S005KBT6|
|Frequência de Operação|16 MHz|
|Peso|20g|

##Electrical Characteristics
|Parâmetro|Mín.|Típico|Máx.|Unidade|
|---------|------|------|------|------|
|Tensão de alimentação（5V para GND）|4,5|5|5,5|V
|Tensão lógica（SCL/SDA）|2,8|5|5,5|V
|HBM ESD|-|5000|-|V
|Temperatura|-20|25|70|℃


##Application Ideas

Aqui estão alguns projetos interessantes para sua referência.

|Exibir Imagem|Relógio com Calendário|Usado como Depurador|
|-------|-------|-------|
|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/BitmapDisplay_p1.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/ClockWithCalendar_p1.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/debugWithMe_p1.png" alt="pir" width={600} height="auto" /></p>|
| [Faça Agora](https://www.instructables.com/id/Display-Picture-Or-Icon-On-the-fancy-I2CLCD/) | [Faça Agora](https://www.instructables.com/id/Beautiful-and-practical-clock-with-calendar/) | [Faça Agora](https://www.instructables.com/id/Use-I2CLCD-to-Debug-Your-Project-1/ )|


|Umidificador Automático|Jogo da Cobra|
|-------|-------|
|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/AutomaticHumidifier.png" alt="pir" width={600} height="auto" /></p>|<p><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/DIY_SnakeGame.png" alt="pir" width={600} height="auto" /></p>|
| [Faça Agora](https://www.instructables.com/id/DIY-a-Simple-Automatic-Humidifier/) | [Faça Agora](https://community.seeedstudio.com/project_detail.html?id=1621)|



##Getting Started

**Passo 1:** Instale a versão mais recente da Arduino IDE no seu computador.

[<p><img src="https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png" alt="pir" width={600} height="auto" /></p>](https://www.arduino.cc/en/Main/Software)

**Passo 2:** Baixe e instale a biblioteca I2C_LCD na Arduino IDE:

Abra a Arduino IDE, **clique em Sketch -> Include library -> Add .ZIP library**.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg)  -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_1.jpg" alt="pir" width={600} height="auto" /></p>

Encontre e selecione o arquivo **I2C_LCD.zip** que você acabou de baixar.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_2.jpg" alt="pir" width={600} height="auto" /></p>

Reinicie a Arduino IDE.

**Passo 3:** Escolha o projeto de exemplo que você quiser. (Vamos usar o projeto "HelloWorld" como exemplo aqui.)

**Clique em File > Examples > I2C_LCD > HelloWorld**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_3.jpg" alt="pir" width={600} height="auto" /></p>

**Passo 4:** Conecte o I2C_LCD à sua placa Seeeduino Vx com o cabo Grove. Em seguida, conecte a placa Seeeduino Vx ao seu computador.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_4.jpg" alt="pir" width={600} height="auto" /></p>

**Passo 5:** Selecione sua placa e porta serial.

Selecione a placa: **Clique em Tools > Board > "Arduino Duemilanove or Diecimila"(Seeeduino V3.0 ou versão anterior), "Arduino Uno"(Seeeduino Lotus ou Seeeduino V4.0)**.

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_5.jpg" alt="pir" width={600} height="auto" /></p>

Selecione a porta COM: **Clique em Tools -> Serial Port -> COMX(que está conectada à sua placa.)**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_6.jpg" alt="pir" width={600} height="auto" /></p>

**Passo 6:** Carregue o programa e **divirta-se!**

<!-- ![enter image description here](https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg) -->
  <p style={{textAlign: 'center'}}><img src="https://raw.githubusercontent.com/SparkingStudio/I2C_LCD/master/images/I2C_LCD_InstalLib_7.jpg" alt="pir" width={600} height="auto" /></p>

**PS:**

1. Para mais detalhes sobre a instalação de bibliotecas, consulte https://arduino.cc/en/Guide/Liaries.
2. Se você encontrar outros problemas durante o uso, consulte o Manual do Usuário para obter ajuda. Se ainda não conseguir resolver, entre em contato conosco.

**Suporte técnico:** Joney.s@foxmail.com

##Version Tracker
**Hardware do I2C_LCD:**

| Revisão 	| Nota de Lançamento	| Data de Lançamento	|
|-----------|---------------|---------------|
|I2C_LCD_v1.2| 1. Adicionado ponto de teste de produção. |18 Set, 2015|
|I2C_LCD_v1.1| 1. Modificada a posição do logo. 2. Modificado o formato da placa. 3. Modificada a posição do botão. |8 Mai, 2014|
|I2C_LCD_v1.0| 1. Modificado o cabeamento do circuito de alimentação. |1 Mar, 2014|
|I2C_LCD_v0.9b| 1. Lançamento público inicial. |15 Fev, 2014|

**Biblioteca I2C_LCD:**

| Revisão 	| Nota de Lançamento	| Data de Lançamento	|
|-----------|---------------|---------------|
|I2C_LCD_v1.21| Suporta placas LinkIt. |21 Ago, 2016|
|I2C_LCD_v1.20| Reorganiza a interface do driver I2C_LCD, facilitando a portabilidade para quaisquer outras placas. |16 Abr, 2016|
|I2C_LCD_v1.12| Corrige o bug que impedia a exibição de bitmap quando a coordenada y era maior que 16.|4 Set, 2015|
|I2C_LCD_v1.11| Corrige o bug em que '\t' não podia ser impresso.|27 Jun, 2015|
|I2C_LCD_v1.10| 1.Adiciona função de impressão no LCD. 2.Edita o exemplo DeviceAddressConfig.|25 Jun, 2015|
|I2C_LCD_v1.0| Lançamento público inicial. |6 Jul, 2014|

##Resources

Mantendo sempre a versão mais recente atualizada.

O [repositório da biblioteca Arduino está hospedado aqui](https://github.com/SparkingStudio/I2C_LCD_library); se você tiver alguma boa ideia para o código, pode enviar um pull request para nós.

* [Biblioteca I2C_LCD](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD_Library.zip)
* [Manual do Usuário I2C_LCD EN](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_EN.zip)
* [Manual do Usuário I2C_LCD 中文](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD-UserManual_CN.zip)
* [BitmapConverter(Para Windows)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.rar)
* [BitmapConverter(Para MacOS)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.dmg)
* [BitmapConverter(Para Linux)](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/Bitmap%20Converter.tar.gz)
* [Arquivo de Fonte I2C_LCD](https://github.com/SparkingStudio/I2C_LCD/blob/master/resources/I2C_LCD12864_SourceFile.zip)
## Suporte Técnico & Discussão de Produtos
Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
