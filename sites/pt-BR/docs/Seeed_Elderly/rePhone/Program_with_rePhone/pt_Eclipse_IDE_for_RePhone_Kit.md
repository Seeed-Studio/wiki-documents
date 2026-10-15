---
description: Eclipse IDE para RePhone Kit
title: Eclipse IDE para RePhone Kit
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Eclipse_IDE_for_RePhone_Kit
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Eclipse_IDE_for_RePhone_Kit/
---

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG)

RePhone pode ser uma ferramenta de aprendizado para você iniciar projetos interessantes. Atualmente, RePhone suporta vários ambientes e linguagens de desenvolvimento, você pode tanto criar aplicações com C/C++ com base no Eclipse IDE, Arduino IDE, quanto com Lua e JavaScript.

Este wiki é um Guia do Usuário para ajudar você a iniciar seu projeto RePhone com Eclipse IDE.

| Versão do Produto| Pedido |
|------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [RePhone core 2G-Atmel32u4 v1.0](https://wiki.seeedstudio.com/pt-br/RePhone_core_2G-Atmel32u4/)| [Buy Now](https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html)| 
|[RePhone core 2G-AtmelSAMD21](https://wiki.seeedstudio.com/pt-br/Rephone_core_2G-AtmelSAMD21/)|[Buy Now](https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html)|

##  Baixar Eclipse IDE para RePhone
---
Antes de baixar o Arduino IDE para RePhone, certifique-se de que você tem um PC com o seguinte:

*   Sistema operacional: Microsoft Windows XP, Vista, 7 ou 8

*   Eclipse IDE: Indigo (3.7) com CDT 8.0.2.

Agora clique nos seguintes ícones para baixar e instalar o Eclipse IDE for C/C++ Developers a partir do site oficial do Eclipse. A instalação do IDE pode exigir que um JAVA SE Development Kit 8 apropriado esteja instalado no seu PC.

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide-02.png)](http://www.eclipse.org/downloads/packages/eclipse-ide-cc-developers-includes-incubating-components/indigosr2)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/JSE-03.png)](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

##  Instalar plug-in do Eclipse: LinkIt Assist 2502 SDK 2.0.46
---
Para fazer uso do RePhone e do Eclipse IDE, você precisará **instalar o plug-in Eclipse LinkIt Assist 2502 na mesma pasta que o Eclipse IDE**, onde o ‘_eclipse.exe_’ está localizado.

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png)](http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip)

Para instalar o LinkIt Assist 2502 SDK 2.0.46, você precisa fazer o seguinte:

**Passo 1.** Baixe o arquivo zip **LinkIt Assist 2502 SDK 2.0.46**.

**Passo 2.** Extraia o conteúdo do arquivo zip LinkIt Assist 2502 SDK 2.0.46. Há ferramentas, além do plug-in do Eclipse, incluídas no SDK, portanto considere extrair o conteúdo para um local permanente. Se você extrair o conteúdo para um local temporário, o instalador lhe dará a opção de movê-lo para um local permanente.

**Passo 3.** Certifique-se de que o Eclipse IDE não está em execução.

**Passo 4.** Execute o instalador LinkIt Assist 2502 SDK 2.0.46 ‘**InstallPlugins.exe**’ como mostrado na figura a seguir:

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_1.png)

**Passo 5.** Na página de boas-vindas, clique em ‘**Next**’

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_2.png)

**Passo 6.** Agora será solicitado que você selecione o local do Eclipse IDE. Clique em ‘**Browse**’ e localize a pasta na qual você instalou o Eclipse IDE (a pasta designada onde você instalou o ‘**Eclipse IDE for C/C++ Developer**’) Clique em ‘**OK**’ e ‘**Next**’.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_3.png)

**Passo 7.** Em Move SDK to permanent location, marque ‘**Move LinkIt Assist 2502 2.0 package to new folder**’ se você tiver extraído o arquivo zip em um local temporário. Clique em ‘**Browse**’ e localize um local permanente no qual armazenar o SDK. Em seguida, clique em ‘**Next**’ para ir ao próximo passo.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_4.png)

**Passo 8.** Em Ready to install the SDK. Revise os locais selecionados e, se estiverem OK, clique em ‘**Install**’.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_5.png)

**Passo 9.** Na última etapa da instalação, **marque** ‘**Install the MediaTek USB Driver**’ se esta for a primeira vez que você instala um LinkIt SDK, então clique em ‘**Finish**’ para concluir a instalação.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_6.png)

**Passo 10.** Quando a instalação do plug-in terminar, haverá uma pasta chamada ‘**LINKIT_ASSIST_SDK**’ no local onde você instalou o Eclipse IDE.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_77.png)

Você também pode encontrar os plug-ins na sua janela do Eclipse assim que abrir o "**eclipse.exe**", veja o **Passo 8** na seção a seguir - "**Create Your First Project: Hello World**"

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Plug-ins.png)

##  Atualizar/Gravar o Firmware
---
**NB: Por favor, esteja ciente de que gravar o firmware excluirá todas as configurações e arquivos (imagens, músicas) armazenados no RePhone, certifique-se de que você está ciente disso antes de gravar/atualizar o firmware.**

Sei que você está super empolgado com seu RePhone e mal pode esperar para começar a programar, mas espere um segundo, antes de fazer isso é essencial certificar-se de que o firmware do módulo central - Xadow GSM+BLE corresponde ao LinkIt Assist SDK que você acabou de instalar.

Aqui eu apresento duas maneiras de atualizar/gravar o firmware do seu RePhone.

####  **Atualizador de Firmware Embutido do LinkIt Assist SDK**

* * *

**Passo 1.** Primeiro, certifique-se de que seu Xadow GSM+BLE está desconectado do seu PC, então baixe o **RePhone SDK mais recente** no nosso Github e descompacte-o.

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Download_RePhone_SDK.png)](https://github.com/WayenWeng/RePhone_SDK_Bin_Update//)

**Passo 2.** Inicie o **‘FirmwareUpdater.exe’** na pasta do SDK que você acabou de instalar, ele pode ser encontrado no caminho _’eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\FirmwareUpdater.exe’_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_firmwareupdater_000.png)

**Passo 3.** Na janela do LinkIt Firmware Updater, selecione **‘Others’** como a plataforma na lista suspensa. Em seguida, localize _**...\SEEED02A_DEMO_PCB01_gprs_MT2502_S00.MAUI_11CW1418SP5_W15_29.bin\SEEED02A_DEMO_BB.cfg**_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update.png)

**Passo 4.** Clique no **botão verde de atualização** e siga as instruções de 2 passos na tela, **certifique-se de que o Xadow GSM+BLE esteja alimentado (conectado à bateria)** ao conectá-lo ao PC.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_2.png)

**Passo 5.** Aguarde até o download terminar.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_3.png)

**Passo 6.** Quando a atualização do firmware for concluída isso será confirmado na página Download Complete, clique em ‘**OK**’ e saia do atualizador.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_4.png)

##  Crie Seu Primeiro Projeto: Hello World
---
**Passo 1.** Quase lá! Agora inicie **eclipse.exe**. Se esta é a primeira vez que você usa o Eclipse IDE, será solicitado que você selecione um **Workspace** para seus projetos eclipse. Em Workspace Launcher, clique em **Browse** para encontrar um local apropriado como seu Workspace. Eu recomendo que você defina seu workspace no mesmo local em que instalou o Eclipse IDE.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_1.png)

**Passo 2.** Para criar uma nova aplicação RePhone - no menu **File** do Eclipse, aponte para **new **e clique em **Other**. Ou você pode simplesmente usar a tecla de atalho **CTRL+N**.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_2.jpg)

**Passo 3.** Na janela New, expanda a pasta **LinkIt Assist 2502 SDK 2.0** e selecione **Application(*.vxp) **

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_3.png)

**Passo 4.** Agora você é conduzido ao **LinkIt Assist 2502 SDK 2.0 Wizard**

*   Insira o nome para o seu novo projeto, neste caso nós o nomeamos como "**hello_world**"

*   No menu suspenso de **Hardware Platform** , escolha **LinkIt Assist 2502**

*   Marque **Empty Application**

*   Clique em **Finish** para completar a configuração

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_4.png)

"
**Passo 5.** Parabéns! XD  Você acabou de criar seu primeiro projeto! Agora abra o projeto no painel C/C++ Projects e dê um duplo clique no arquivo "**hello_world.c**", como mostrado abaixo

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_5.png)

**Passo 6.** Antes de fazer o upload da aplicação, você precisa

*   ligar seu RePhone **conectando a bateria** ao conector de bateria no Xadow GSM+BLE**, pressione e segure a tecla de energia (PWR) por 2 segundos para** **ligá-lo** (então o LED indicador mostra **GREEN**)

*   então conecte seu RePhone ao PC com um cabo Micro USB.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png)

**Passo 7.** Abra o **Device Manager** para verificar as portas COM. Haverá duas **portas COM** (o número da COM pode ser diferente no seu PC):

*   **MTK USB Debug Port(COM4)** é usada para logs, como impressão de mensagens no monitor serial

*   **MTK USB Modem Port(COM5)** é usada para upload de código

Abra o **Gerenciador de Dispositivos** clicando no botão **Iniciar**, em seguida em **Painel de Controle**, depois em **Sistema e Segurança** e então, em **Sistema**, clique em **Gerenciador de Dispositivos**. Se for solicitado uma senha de administrador ou confirmação, digite a senha ou forneça a confirmação. Veja a imagem a seguir:

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Check_ports.png)

**Etapa 8.** Quase lá! Coloque o seguinte código em "**hello_world.c**":
```
#include "vmsystem.h"
#include "vmtype.h"
#include "vmlog.h"
#include "vmtimer.h"
#include "ResID.h"
#include "hello_world.h"

VM_TIMER_ID_PRECISE sys_timer_id = 0;

void sys_timer_callback(VM_TIMER_ID_PRECISE sys_timer_id, void* user_data)
{
    vm_log_info("Hello World!");
}

void handle_sysevt(VMINT message, VMINT param)
{
    switch (message)
    {
        case VM_EVENT_CREATE:

        sys_timer_id = vm_timer_create_non_precise(1000, sys_timer_callback, NULL);
        break;
        case VM_EVENT_PAINT:
        break;
        case VM_EVENT_QUIT:
        break;
    }
}

void vm_main(void)
{
    vm_pmng_register_system_event_callback(handle_sysevt);
}
```

*   Clique em **Build Application** para enviar o aplicativo, conforme indicado na imagem abaixo:

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_6.png)

*   Quando o aplicativo for enviado com sucesso isso será mostrado no **Console** na parte inferior; se não estiver aparecendo, reabra-o em _**Window/Show View/Console**_

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_7.png)

**Etapa 9.** Abra o **Monitor** no _LinkIt Assist Plug-in_.

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_8.png)

Será solicitado que você **Defina o Caminho do Banco de Dados**; caso contrário, vá ao menu **Config** e clique em **Set Database Path**

*   Clique no ícone "**...**" conforme indicado na imagem abaixo

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_9.png)

*   Localize o arquivo "_**eclipse\LINKIT_ASSIST_SDK\tools\FirmwareUpdater\firmware\LinkIt_Device\LinkIt_Assist_2502\W15.19.p2\database.db**_ ", clique em **Open**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_10.png)

*   Também selecione a **porta COM** como **MTK USB Debug Port(COM4)**, e a **Taxa de Transmissão (Baud Rate)** tem o valor padrão de **115200**.

O número da porta COM da Debug Port pode ser diferente no seu PC, apenas certifique-se de que é a **MTK USB Debug Port** listada no **Gerenciador de Dispositivos**.

Se a janela não estiver sendo exibida, vá ao menu **Config** e clique em **Configure RS232...**

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_11.png)

**Etapa 10.** Você fez um ótimo trabalho!! Agora diga "Hello" para o mundo!

![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_12.png)

##  Restaurar para os padrões
---
**Observe que restaurar seu RePhone para os padrões irá excluir todas as configurações e arquivos (imagens, músicas) no RePhone, esteja ciente disso antes de restaurá-lo para os padrões.**

Para restaurar seu RePhone para os **PADRÕES**:

1. Siga as instruções na seção "Update/Flash the Firmware" para gravar o firmware

2. Baixe o arquivo RePhone_Create_Kit_VXP

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png)](https://github.com/WayenWeng/RePhone_Create_Kit_VXP/)

<!-- 3. Enter the [RePhone Mass Storage Mode](/pt-br/Xadow_GSMPlusBLE#Operating_Mode) -->

4. Copie tudo que estiver dentro do arquivo chamado "RePhone Create Kit VXP" para o armazenamento em massa de 5 MB do RePhone.

5. Reinicie seu RePhone e pronto. Como a restauração apagou todos os arquivos, você terá que colocar um arquivo mp3 no armazenamento em massa também para ser usado como toque.

##  Comunidade RePhone
---
[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Community-2.png)](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)

Estamos procurando um lugar melhor onde nossos apoiadores (Usuários RePhone) possam se reunir, de forma acolhedora e confortável, conversar sobre o RePhone, discutir problemas técnicos, compartilhar ideias/projetos e dar feedback sobre o desenvolvimento dos módulos no futuro. E aqui está ele, a Comunidade RePhone.

Agora junte-se a nós na [RePhone Community](https://forum.seeedstudio.com/viewforum.php?f=71&amp;sid=b70f8138c89becf7701260bb41faf9f4)!

Juntos buscamos respostas, fazemos coisas interessantes, cuidamos uns dos outros e compartilhamos nossas experiências.

##  Mais sobre o LinkIt Assist SDK
---
Como o RePhone é desenvolvido principalmente com o LinkIt Assist SDK, e a Mediatek fez um guia de desenvolvedor muito detalhado para os desenvolvedores, para encontrar mais informações você pode consultar:

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_en-06.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_Developers_Guide_v1_1.pdf)

[![](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_cn-07_1.png)](https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_cn_v1_1.pdf)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
