---
description: Kit de Ambiente Interno Grove para Edison
title: Kit de Ambiente Interno Grove para Edison
keywords:
  - Kit com cursos
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Grove_Indoor_Environment_Kit_for_Edison
sku: 110060064
last_update:
  date: 2/17/2023
  author: jianjing Huang
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Grove_Indoor_Environment_Kit_for_Edison/
---

<!-- ---
name: Grove Indoor Environment Kit for Edison
category: Others
bzurl: https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html
oldwikiname:  Grove Indoor Environment Kit for Edison
prodimagename: Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG
surveyurl: https://www.research.net/r/Grove_Indoor_Environment_Kit_for_Edison
sku:  110060064
--- -->

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove_Indoor_Environment_Kit_for_Edison_with_case.JPG)

O Kit de Ambiente Interno Grove para Edison torna fácil criar aplicações completas de ambiente interno com Intel Edison e Arduino Breakout Board. Com o Base Shield V2, o desenvolvedor pode conectar rapidamente até 11 sensores e atuadores Grove diferentes. Fornecemos códigos de demonstração legais que serão constantemente atualizados, e será muito fácil operar esses sensores e atuadores sem qualquer experiência em programação.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png)](https://www.seeedstudio.com/Grove-Indoor-Environment-Kit-for-Intel%C2%AE-Edison-p-2427.html)

## O que está incluído no kit?

---

* [Base Shield V2](/pt-br/Base_Shield_V2)  x1

* [Grove - Tempture&amp;Humidity Sensor (High-Accuracy &amp;Mini)](/pt-br/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0)  x1

* [Grove - Moisture sensor](/pt-br/Grove-Moisture_Sensor)  x1

* [Grove - Light Sensor](/pt-br/Grove-Light_Sensor)  x1

* [Grove - UV Sensor](/pt-br/Grove-UV_Sensor)  x1

* [Grove - PIR Motion Sensor](/pt-br/Grove-PIR_Motion_Sensor)  x1

* [Grove - Encoder](/pt-br/Grove-Encoder)  x1

* [Grove - Button](/pt-br/Grove-Button)  x1

* [Grove - LCD RGB Backlight](/pt-br/Grove-LCD_RGB_Backlight)  x1

* [Grove - Relay](/pt-br/Grove-Relay)  x1

* [Grove - Servo](/pt-br/Grove-Servo)  x1

* [Grove - Buzzer](/pt-br/Grove-Buzzer)  x1

* [9V to Barrel Jack Adapter](https://www.seeedstudio.com/depot/9V-to-Barrel-Jack-Adapter-p-1481.html)  x1

* Cabo Grove 26AWG  x10

* Cabo USB  x1

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Grove-Indoor-Environment-Kit-for-Edison.jpg)

## Instalando o Edison Arduino IDE

---
Consulte o site oficial do Intel Edison: [Edison Getting Started Guide](https://communities.intel.com/docs/DOC-23147)

1.Faça o download do Edison Arduino IDE. (Observação: selecione seu sistema operacional.)

2.Navegue até a pasta onde você baixou o arquivo .zip do Edison Arduino IDE

3.Clique com o botão direito no arquivo .7z, destaque “7-zip” e selecione “Extract to “arduino-…””

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_Extract_7z.png)

4.Clique na pasta que foi criada até ver o arquivo IDE “arduino.exe”. Dê um clique duplo nesse arquivo e esta janela deverá ser aberta.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/IndoorKit_ArduinoIDE.png)

## Instalar drivers necessários

---
1.Faça o download dos [drivers FTDI](https://www.ftdichip.com/Drivers/CDM/CDM%20v2.10.00%20WHQL%20Certified.exe)

2.Clique com o botão direito no arquivo .exe que você baixou, que deve se chamar “CDM…”, e selecione “Run as administrator”.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver.jpg)

3.Clique em “Extract”.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install.jpg)

4.Clique em “Next”.

5.Clique em “Finish” quando você vir esta tela.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_FTDI_Driver_Install_ok.jpg)

6.Faça o download dos [Drivers Intel Edison](https://communities.intel.com/docs/DOC-23242) para instalar os drivers RNDIS, CDC e DFU necessários.

7.Dê um clique duplo no arquivo .exe para iniciar a instalação.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Intel_Edison_Driver.jpg)

## Conexão de hardware

---
Usando o Cabo Grove 26AWG, faça as seguintes conexões:

<table>
  <tbody>
    <tr>
      <th>Módulos Grove</th>
      <th>Conectado a</th>
    </tr>
    <tr>
      <td width="200px">Temperature&amp;Humidity Sensor</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">Moisture Sensor</td>
      <td width="100px">A1</td>
    </tr>
    <tr>
      <td width="200px">Light Sensor</td>
      <td width="100px">A2</td>
    </tr>
    <tr>
      <td width="200px">UV Sensor</td>
      <td width="100px">A3</td>
    </tr>
    <tr>
      <td width="200px">PIR Motion Sensor</td>
      <td width="100px">D7</td>
    </tr>
    <tr>
      <td width="200px">Encoder</td>
      <td width="100px">D2</td>
    </tr>
    <tr>
      <td width="200px">Button</td>
      <td width="100px">UART(D1)</td>
    </tr>
    <tr>
      <td width="200px">LCD RGB Backlight</td>
      <td width="100px">I2C</td>
    </tr>
    <tr>
      <td width="200px">Relay</td>
      <td width="100px">D5</td>
    </tr>
    <tr>
      <td width="200px">Servo</td>
      <td width="100px">D6</td>
    </tr>
    <tr>
      <td width="200px">Buzzer</td>
      <td width="100px">D4</td>
    </tr>
  </tbody>
</table>

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Edison_Indoor_Wire_Figure.png)

## Executando o exemplo

---
1.Abra o site: [Grove_Indoor_Environment_Demo](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo) para baixar o projeto completo.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Github_Demo.png)

2.Clique em **Tools &gt; Serial Port** e selecione a porta Com # à qual o Intel Edison está conectado

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Import_Indoor_Kit_Demo.png)

3.Clique em Sketch&gt;Import Library…&gt;Add Library e importe a biblioteca baixada na **etapa 1**

4.Clique em **File&gt;Examples&gt; Grove_Indoor_Environment_Demo** e selecione a demonstração. Clique no ícone **upload**

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Upload_Indoor_Kit_Demo.png)

5.Abra o **Serial Monitor**, ele irá imprimir as informações dos sensores:

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Serial_Monitor.png)

6.Gire o Encoder para verificar o valor do sensor no LCD.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Rotate_Encoder.png)

7.No **“Send TextBox”**, você pode inserir o seguinte comando para operar os sensores e atuadores:

_set [sensor][condition:&gt;, &lt; or =][ threshold],[actuator]=[action]_

<table>
  <tbody>
    <tr>
      <th>Example</th>
      <th>Description</th>
    </tr>
    <tr>
      <td width="300px">_set temp&gt;40, relay=1_</td>
      <td width="500px">se a temperatura for maior que 40℃, o relé abre.</td>
    </tr>
    <tr>
      <td width="300px">_set temp&gt;40, sleep=1_</td>
      <td width="500px">se a temperatura for &gt;40℃, nada é feito.</td>
    </tr>
    <tr>
      <td width="300px">_set humi&gt;60, buzzer=1_</td>
      <td width="500px">se a umidade for &gt;60%, o buzzer apita.</td>
    </tr>
    <tr>
      <td width="300px">_set light&gt;600, servo=90_</td>
      <td width="500px">se a intensidade da luz for &gt;600, o servo gira 90°.</td>
    </tr>
    <tr>
      <td width="300px">_set uv&gt;80, relay=0_</td>
      <td width="500px">se a intensidade de UV for &gt;80, o relé fecha.</td>
    </tr>
    <tr>
      <td width="300px">_set pir=1, buzzer=1_</td>
      <td width="500px">se pessoas forem detectadas, o buzzer apita.</td>
    </tr>
    <tr>
      <td width="300px">_set ms&gt;40, relay=1_</td>
      <td width="500px">se a umidade do solo for &gt;40, o relé abre.</td>
    </tr>
    <tr>
      <td width="300px">_set ssid=name, psw=password_</td>
      <td width="500px">define o SSID e a Password do WiFi. Você pode abrir um navegador da web e ir para o endereço IP exibido no Serial Monitor ou no LCD. A porta padrão é 88. A porta padrão é 88. Por exemplo: 192.168.1.101:88</td>
    </tr>
  </tbody>
</table>

Nota:

* O comando deve terminar com ‘/n’, então **“NewLine”** (no Serial Monitor) deve ser selecionado.

* Um atuador só pode ser controlado por um sensor. Se o sensor A quiser controlar um atuador (que está sendo controlado pelo sensor B), o sensor B deve ser colocado em sleep.

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_command.png)

8.Conexão WiFi. Abra o Serial Monitor e defina seu ssid e password (como abaixo). Verifique o IP local no LCD ou no Serial Monitor. Em um dispositivo conectado na mesma rede, abra um navegador da web e vá para o endereço IP acima; você poderá ver o valor do sensor.

_**Nota: Ao acessar o servidor web, um número de porta (88) deve ser adicionado, por exemplo: 172.20.10.2:88.**_

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_SSID_PSW.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Local_IP.png)

![](https://files.seeedstudio.com/wiki/Grove_Indoor_Environment_Kit_for_Edison/img/Indoor_Kit_Web_Server.png)

## Recursos

---

* [Código-fonte do Kit de Ambiente Interno Grove](https://github.com/Seeed-Studio/Grove_Indoor_Environment_Demo)

* [Edison Getting Started Guide](https://communities.intel.com/community/makers/edison/getting-started)

* [Intel Edison Software &amp; Documentation](https://communities.intel.com/community/makers/edison/documentation)

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
