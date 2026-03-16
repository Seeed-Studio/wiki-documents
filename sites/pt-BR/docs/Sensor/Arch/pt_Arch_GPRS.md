---
description: Arch GPRS
title: Arch GPRS
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_GPRS
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Arch_GPRS/
---



[![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_03.jpg) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

Arch GPRS é uma placa de desenvolvimento compatível com [mbed](http://mbed.org/handbook/mbed-SDK) que abriga um módulo de rede celular junto com um microcontrolador. É semelhante ao [Seeeduino Arch](https://seeeddoc.github.io/Seeeduino_Arch/) pois também usa o microcontrolador LPC11U24. Com o Arch GPRS, você pode usar o SDK mbed C/C++, bibliotecas e ferramentas de desenvolvimento online otimizadas para criar rapidamente o seu protótipo.
O módulo de rede celular no Arch GPRS é baseado no modem EG-10 [GPRS](https://en.wikipedia.org/wiki/General_Packet_Radio_Service). Com isso, funções de coleta de dados podem ser realizadas facilmente usando a rede celular baseada em GSM 2G.

Arch GPRS possui uma interface **Arduino** padrão, bem como conectores Grove na placa. É conveniente conectar Shields existentes e produtos **Grove** ao Arch GPRS. Você pode até conectar um painel solar diretamente à placa para permitir que a bateria seja carregada por ele. Um design de baixo consumo garante carregamento fácil e longas horas de operação ao ar livre.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png) ](https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73)

## Recursos ##

- compatível com mbed

  - ferramentas de desenvolvimento online

  - SDK C/C++ fácil de usar

  - muitas bibliotecas e projetos publicados

- Controlador NXP LPC11U24

  - Núcleo ARM Cortex-M0 de baixo consumo

  - 32KB Flash, 8KB RAM, 4KB EEPROM  

  - Dispositivo USB, 2xSPI, UART, I2C

- Módulo EG-10  

  - Suporta atualização sem fio do firmware do EG-10  

  - Suporta cartão SIM externo: 1.8V/3.3V

  - Compatível com comando AT padrão

- Equipado com função RTC

- Seleciona automaticamente USB5V ou painel solar para carregar uma bateria

## Especificações ##

 |Item||Especificação|
 |--|--|--|
| Microcontrolador||LPC11U24|
| Modo de Alimentação||USB ou Painel Solar|
 |Corrente de Carga |Painel solar|100 mA|
 ||USB 5V|  400 mA|
 |Frequência de Trabalho||850/900/1800/1900 MHz|
 |Tipo de Interface|| USB Micro B|
 |Cartão SIM||Classe B(3V) e Classe C(1.8V)|
 |Características GPRS|Transmissão de dados GPRS|downlink85.6kbps(Max);uplink 42.8kbps(Max)|
||Formato dos códigos|CS-1,CS-2,CS-3,CS-4|
|  Suporte de Função||Suporte para Dados, Voz, SMS e Fax|
 |Capacidade de EEPROM||256 KB|

## Interfaces ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Interface_Function.jpg)

A área amarela é muito semelhante a uma placa Arduino e, de fato, é usada como tal com nossa placa Shield. Sua distribuição de pinos é quase a mesma do Seeeduino Arch (D11 e D13 são trocados), então você pode clicar [aqui](https://seeeddoc.github.io/Seeeduino_Arch/#Pinout) para observar cada pino.

A imagem acima é a vista frontal do Arch GPRS, o microcontrolador LPC11U24 na parte de trás não foi marcado.

## Primeiros Passos ##

Insira um cartão SIM no soquete SIM do Arch GPRS, você poderá discar um número de telefone ou enviar mensagens.
Agora vamos começar.

**Primeiro passo:** Cadastre uma conta mbed

- abra [https://mbed.org](https://mbed.org), clique em Login ou signup. Se você já estiver registrado, clique diretamente em login.

**Segundo passo:** Importar programa

- Abra o link: [https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/](https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/), depois clique em "Import this program" no canto direito quando você vir a imagem abaixo. Agora clique em "import" para concluir a importação do programa Arch GPRS.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test.png)

- Quando o programa tiver sido importado para a sua conta, você poderá vê-lo na ferramenta de desenvolvimento online.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test1.png)

**Terceiro passo** Editar código

- abra e altere o arquivo main.cpp do programa Arch GPRS. Tomando a realização de uma chamada como exemplo, você precisa alterar "#define CALL_UP_TEST 0" para "#define CALL_UP_TEST 1", e alterar o parâmetro da função "gprsTest.callUp("133xxxx5949");".

**Quarto passo:** Adicionar um dispositivo

- Clique em ”No device selected” no canto superior direito, depois clique em ”Add a device” no canto inferior esquerdo após ver a imagem abaixo.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%87.jpg)

- Aparecerá uma página como mostrado abaixo. Arch GPRS é compatível com mbed LPC11U24 e Seeeduino Arch, então você pode selecionar ”mbed LPC11U24” ou Seeeduino Arch. Aqui tomamos a seleção do Seeeduino Arch como exemplo.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%871.jpg)

- Entre na página do Seeeduino Arch e clique em ”Add to mbed Compiler”. Agora você concluiu com sucesso a adição do Seeeduino Arch. Volte ao compilador mbed e clique em ”No device selected”. A imagem abaixo aparece depois que você clicar em Seeeduino Arch no canto inferior esquerdo：

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%872.jpg)

- Você pode ver sua placa selecionada no compilador online mbed depois de clicar em ”Select Platform”.

**Quinto passo：** Compilar, fazer download

- Clique em "Compile". Um "Success!" aparecerá quando o mbed IDE gerar um bin. Você precisa salvar o arquivo bin no seu PC.

**Sexto passo：** Atualizar firmware

- Conecte a porta USB do Arch GPRS ao seu computador usando um cabo USB Micro B e mantenha o botão pressionado por um longo tempo; o Arch GPRS aparecerá como um armazenamento USB chamado CRP DISABLD.

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/A_usb_device.jpg)

- Vá até o CRP DISABLD. Agora você precisa adicionar o arquivo bin que obteve ao dispositivo CRP DISABLD. Se o arquivo bin já existir no dispositivo USB, você precisa deletá-lo e adicionar o novo arquivo bin.

Pressione rapidamente o botão do Arch GPRS e aguarde um momento, você ouvirá o Arch GPRS ligando para você.

## ARCH GPRS com Xively ##

![](https://files.seeedstudio.com/wiki/Arch_GPRS/img/ARCH_GPRS_With_Xively.png)

Xively é um serviço de banco de dados online que permite aos desenvolvedores conectar dados provenientes de sensores (por exemplo, dados de energia e meio ambiente de objetos, dispositivos e edifícios) à Web e construir suas próprias aplicações com base nesses dados. Usando o ARCH GPRS podemos realizar isso facilmente.

**Primeiro passo：** Cadastre uma conta Xively

- abra [https://xively.com/](https://xively.com/), clique em Login ou signup. Se você já estiver registrado, clique diretamente em login.

**Segundo passo：** Adicionar seu próprio dispositivo e Canais

- você pode criar dispositivo e adicionar canais como quiser. Se você não souber como fazer, pode visitar [https://xively.com/get_started/](https://xively.com/get_started/)

**Terceiro passo：** Importar programa

- Abra o link: [http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/](http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/), depois clique em "Import this program" no canto direito quando você vir a imagem abaixo. Agora clique em "import" para concluir a importação do programa Arch GPRS.

**Quarto passo：** Adicionar suas próprias informações

- substitua o FEED_ID & SENSOR_ID & XIVELY_KEY pelos seus, e conecte seu ARCH GPRS com o sensor, depois compile e atualize o firmware.

**Quinto passo：** verificar o valor do seu sensor

- se tiver sucesso, você verá seus dados enviados no gráfico do seu canal.

**Nota:**

Se você usar Seeeduino Arch em MAC ou Linux, leia a nota de aplicação --- [USB ISP programming](http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x).

## Programando o Seeeduino Arch em Windows, Linux ou Mac ##

Seeeduino Arch não possui uma interface mbed. Ele usa USB In-System-Programming (ISP) para atualizar o firmware.

Para entrar no modo USB ISP, conecte o Arch ao seu computador e mantenha o botão pressionado por um longo tempo, então aparecerá um disco chamado "CRP DISABLD".

- no windows

    1.delete firmware.bin in the "CRP DISABLD" disk.

    2.copy a new firmware into the disk.

- no linux

    1.if the disk is not mounted, mount the disk at /path/to/mount
    2.dd if=new_firmware.bin of=/path/to/mount/firmware.bin conv=notrunc

- no mac você precisará usar o Terminal para executar o seguinte script para copiar seu arquivo .bin para o seu Arch

    1.dd if=new_firmware.bin of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

   Se você quiser, também pode criar um aplicativo **Automator** para oferecer suporte a arrastar e soltar o arquivo para sua placa. Basta criar um "Run Shell Script" com o seguinte comando:

   dd if=$* of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc

Pressione rapidamente o botão para executar o novo firmware.

## Veja Também ##

- [Arch GPRS V2](https://seeeddoc.github.io/Arch_GPRS_V2/)

## Notas ##

Arch GPRS não vem com [uma interface mbed](https://mbed.org/handbook/mbed-HDK). Para exibir mensagens de depuração, tente [USBSerial](https://mbed.org/handbook/USBSerial).

## Visualizador Online do Esquemático

<div class="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos ##

- **[Eagle]** [Arquivo Eagle do Arch GPRS](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip)
- **[PDF]**[Arch GPRS pdf](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.pdf)
- **[EAGLE]**[Arch GPRS sch](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.sch)
- **[PDF]**[Esquemático do Arch GPRS em formato PDF](https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Schematic.pdf)
- **[Command]**[Referência de Comandos AT](https://files.seeedstudio.com/wiki/Arch_GPRS/res/AT%E6%8C%87%E4%BB%A4%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Datasheet]**[EG10 datasheet](https://files.seeedstudio.com/wiki/Arch_GPRS/res/EG10%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf)
- **[Demo]**[demo](https://mbed.org/users/loovee/code/ARCH_GPRS_Demo/)

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
