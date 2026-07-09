---
description: Arduino IDE para RePhone Kit
title: Arduino IDE para RePhone Kit
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arduino_IDE_for_RePhone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Arduino_IDE_for_RePhone_Kit/
---
![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone pode ser uma ferramenta de aprendizado para você iniciar projetos interessantes. Atualmente, RePhone oferece suporte a vários ambientes e linguagens de desenvolvimento; você pode criar aplicações em C/C++ com base no Eclipse IDE, Arduino IDE, ou com Lua e JavaScript.

Este wiki é um Guia do Usuário para ajudar você a iniciar seu projeto RePhone com o Arduino IDE.

| Versão do Produto| Pedido |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/pt-br/RePhone_core_2G-Atmel32u4/)| [Comprar Agora](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/pt-br/Rephone_core_2G-AtmelSAMD21/)|[Comprar Agora](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

Baixar Arduino IDE para RePhone
--------------------------------

Antes de baixar o Arduino IDE para RePhone, certifique-se de que você tem um sistema operacional conforme abaixo:

**Windows XP/Vista/7/8/8.1**

Publicamos o Arduino IDE para RePhone no nosso GitHub, e você é muito bem-vindo para nos enviar um 'pull request' para ajudar a otimizá-lo e melhorá-lo.

Se você já usou o Arduino IDE antes, então isso deve ser fácil. Se você não está familiarizado com Arduino, tudo bem também, apenas siga as instruções e você começará a usar o Arduino IDE de forma fácil e rápida.

Agora clique em

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Download_Arduino_IDE_for_RePhone.png)](https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone)

Na página do Github, clique em **Download ZIP** para baixar o arquivo, como mostrado na imagem abaixo:

![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Click_to_download_Arduino_IDE_for_RePhone.png)

Quando o download estiver completo, descompacte o arquivo em um local adequado.

Instalar o Driver
------------------

### Desativar a Imposição de Assinatura de Driver no Windows 8 / 8.1

Se você estiver usando o Windows 8/8.1, será necessário desativar primeiro a **Driver Signature Enforcement** para conseguir instalar o driver.

**Você deve salvar os arquivos que está editando antes de tentar desativar o 'Driver Signature Enforcement', pois o sistema será desligado durante a operação.**

Agora siga as instruções abaixo para desativar o 'Driver Signature Enforcement.'

1.  Pressione “Windows Key” +"R"
2.  Digite shutdown.exe /r /o /f /t 00
3.  Clique no botão "OK".
4.  O sistema será reiniciado para a tela "Choose an option"
5.  Selecione "Troubleshoot" na tela "Choose an option"
6.  Selecione "Advanced options" na tela "Troubleshoot"
7.  Selecione "Windows Startup Settings" na tela "Advanced options"
8.  Clique no botão "Restart"
9.  O sistema será reiniciado para a tela "Advanced Boot Options"
10. Selecione "Disable Driver Signature Enforcement"
11. Quando o sistema iniciar, você poderá instalar os drivers Arduino da mesma forma que no Windows

### Instalação Normal do Driver

1. Primeiro, ligue seu RePhone **conectando a bateria** ou **alimentando-o com fontes de energia externas (3.3 ~ 4.2V(sem SIM)/3.5 ~ 4.2V(com SIM)) **no soquete da bateria no Xadow GSM+BLE, **mantenha pressionada a tecla de energia (PWR) por 2 segundos para** **ligá-lo** (o LED indicador mostra **VERDE**), depois conecte seu RePhone ao PC com um cabo Micro USB.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

2. Abra o **Device Manager** clicando no botão **Start**, clicando em **Control Panel**, clicando em **System and Security** e, em seguida, em **System**, clicando em **Device Manager**. Se for solicitada uma senha de administrador ou confirmação, digite a senha ou forneça a confirmação.
No **Device Manager**, você verá dispositivos desconhecidos como mostrado abaixo:

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Unknown_Devices.png)

3. Clique com o botão direito em um dos dispositivos desconhecidos, escolha **Update Driver Software**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Update_Driver_Software.png)

4. Escolha **Browse my computer for driver software**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Browse_my_computer_for_driver_software.png)

5. Clique em **Browse** e localize a pasta em que você descompactou o Arduino IDE para RePhone .. \\Arduino_IDE_for_RePhone\\drivers\\mtk . Clique em **Next** para iniciar a instalação do driver.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Locate_Driver.png)

6. Quando o software do driver for instalado com sucesso, você verá a seguinte página de **complete**, clique em **Close** e **comece novamente do passo 1 ao 6 para instalar o driver para outro dispositivo desconhecido**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_complete_page.png)

### Instalar o Driver Manualmente

Você também pode instalar o driver manualmente:

1. Na janela "**Browse for driver software on your computer**", clique em **"Let me pick from a list of device drivers on my computer**"

2. Depois clique em "**Ports(COM&LPT)**" e vá em "**next**"

3. Clique em "**Have Disk**"

4. Depois disso,

-- se você estiver usando **<big>Windows Vista 64bit</big>**, localize "**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Vista\\usb2ser_Vista64.inf\\**"

-- se você estiver usando **<big>Windows 7 ou superior com 64bit</big>**, localize "**Arduino_IDE_for_RePhone-master\\drivers\\mtk\\Win7\\usb2ser_Win764.inf**"

### Instalar o Driver com LinkIt Assist 2502 SDK 2.0.46

LinkIt Assist 2502 SDK 2.0.46 também fornece um programa de instalação de driver.

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

Em seguida, encontre o instalador do driver no caminho **"MediaTek_LinkIt_Assist_2502_SDK_2_0_46\\LINKIT_ASSIST_SDK\\Driver\\InstallMTKUSBCOMPortDriver.exe"**

Atualizar/Gravar o Firmware
-------------------------

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Observe que gravar o firmware excluirá todas as configurações e arquivos (imagens, músicas) armazenados no RePhone. Faça um backup dos dados antes de gravar/atualizar o firmware.</p>
</div>

Para fazer uso do Arduino IDE para RePhone, você também precisa atualizar/gravar o firmware. O processo é tão simples quanto o seguinte:

1. **Desconecte seu RePhone do PC**, **mantenha pressionada a tecla de energia (PWR) por 2 segundos para desligá-lo** (o LED indicador fica **VERMELHO** e depois apaga)

2. Abra o **FirmwareUpdater.exe** no caminho ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\FirmwareUpdater.exe***, certifique-se de que sua plataforma no Firmware Updater é "**RePhone**" como mostrado abaixo; se não for, clique em "**Others**" e localize ***...Arduino_IDE_for_RePhone\\hardware\\tools\\mtk\\firmware\\LinkIt_Device\\RePhone\\W15.19.p2-uart\\SEEED02A_DEMO_BB.cfg***, então clique em **Download (The Green Button)**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware.png)

3. Agora será solicitado que você conecte seu RePhone ao PC via cabo USB; certifique-se de que seu RePhone foi desligado (**OFF**) e, ao mesmo tempo, uma bateria funcional deve permanecer sempre conectada (alimentada).

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_pluginrephone.png)

4. Aguarde até o término do download. Isso pode levar cerca de 1 min, portanto, pode permanecer parado em 50% por um bom tempo; por favor, **seja paciente**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_downloading.png)

5. Na página **Complete**, clique em **OK** para concluir a atualização do firmware.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_complete.png)

Restaurar para padrão
-----------------

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Observe que restaurar seu Rephone para o padrão excluirá todas as configurações e arquivos (imagens, músicas) no RePhone. Faça um backup dos dados antes de restaurá-lo para o padrão.**</p>
</div>

Para restaurar seu RePhone para o **PADRÃO**:

1. Siga as instruções na seção "Update/Flash the Firmware" para gravar o firmware

2. Baixe o arquivo RePhone_Create_Kit_VXP

    [![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. Enter the [RePhone Mass Storage Mode](/pt-br/Xadow_GSMPlusBLE#Mass_Storage_Mode) -->

4. Copie tudo que estiver dentro do arquivo chamado "RePhone Create Kit VXP" para o armazenamento em massa de 5MB do RePhone.

5. Reinicie seu RePhone e pronto. Como a restauração terá apagado todos os arquivos, você precisará colocar também um arquivo mp3 no armazenamento em massa para usar como toque.

Um demo: Hello World
-------------------

Agora que você já preparou o que é necessário, estamos prontos para começar a trabalhar com o RePhone.

Vamos começar com um programa simples **Hello World**

1. Mantenha pressionada a tecla de energia (PWR) por 2 segundos para ligá-lo (o LED indicador mostra VERDE)

2. Abra o **Arduino_IDE_for_RePhone.exe** na pasta onde você descompactou o Arduino IDE para RePhone; a interface do software é a seguinte:

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_interface.png)

3. Abra o **Device Manager** para verificar as portas COM. Haverá **duas portas COM**:

    -   MTK USB Debug Port é usada para enviar o código
    -   MTK USB Modem Port é usada para logs, como imprimir mensagens no monitor serial com **Serial.println()**

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_COM_Ports.png)

4. Na janela do Arduino IDE, clique em **Tool => Port**, selecione **MTK USB Debug Port**, que é **COM20** neste caso; o número da porta COM pode ser diferente no seu PC, apenas certifique-se de que corresponde à Debug Port.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Debug_Port.png)

5. Na janela do Arduino IDE, clique em **Tool => Board**, selecione **RePhone**

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Board.png)

6. Agora copie o seguinte código para o seu Arduino IDE:

```cpp
// hello world for test RePhone
// loovee@10-18-2015

void setup() {
    Serial.begin(115200);
}

void loop() {
    // put your main code here, to run repeatedly:
    Serial.println("Hello World, Hello RePhone!");
    delay(100);
}
```

7. Agora pressione o botão **Upload** para enviar o código para o seu RePhone. Você verá **Done uploading** quando o código for carregado com sucesso.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_upload.png)

8. Como o RePhone usa portas COM diferentes para carregar softwares e para logs, para ler os logs precisamos alternar a porta COM selecionada para **MTK USB Modem Port**. Na janela do Arduino IDE, clique em **Tool => Port**, selecione **MTK USB Modem Port**, que é **COM48** neste caso.

    Em seguida, abra o **Serial Monitor**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Serial_Monitor.png)

9. Agora podemos ver o **Hello World** que imprimimos com **Serial.println()**.

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Helloworld.png)

More Example Code
-----------------

Brincar com alguns códigos de exemplo é um bom começo se você estiver caminhando para projetos ainda mais interessantes.

1. Simplesmente configure o seu **sketchbook location** nas **preference** como ***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk*** (onde você instalou o Arduino IDE para RePhone)

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_1.png)

    depois reinicie o ***Arduino_IDE_for_RePhone.exe***, você poderá ver os códigos de exemplo.
    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_2.png)

2. Você também pode encontrar manualmente os códigos de exemplo do Arduino para todos os módulos RePhone no seguinte caminho:
***Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk\\libraries***

    ![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Example_code_Arduino_IDE.png)

RePhone Community
-----------------

[![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://community.seeedstudio.com/discover.html?t=RePhone)

Temos buscado um lugar melhor onde nossos apoiadores (Usuários RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E então aqui está ele, o RePhone Community.

Agora junte-se a nós na [RePhone Community](https://community.seeedstudio.com/discover.html?t=RePhone)!

Juntos, buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

More
----

Você fez um ótimo trabalho até aqui! O RePhone vem com uma grande família de módulos com diferentes recursos e funcionalidades. Vá conferir o wiki dos módulos para mais aplicações!

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit -->

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
