---
description: LinkIt ONE
title: LinkIt ONE
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /LinkIt_ONE
sku: 102030002
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-03'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/
---

![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/500px-Linkit-one-page.jpg)

:::danger
Devido ao encerramento do MediaTek Labs, todos os links relacionados se tornaram inválidos. Se você precisar baixar arquivos relevantes, pesquise-os no seguinte link: [https://github.com/MediaTek-Labs](https://github.com/MediaTek-Labs).
:::

A plataforma de desenvolvimento LinkIt ONE é uma placa de código aberto e alto desempenho para prototipagem de dispositivos vestíveis e IoT. Ela é baseada no SoC líder mundial para vestíveis, MediaTek Aster (**MT2502**), combinando chipsets de Wi-Fi de alto desempenho (**MT5931**) e GPS (**MT3332**) para fornecer acesso a todos os recursos do MediaTek LinkIt. Ela também oferece recursos de pinagem semelhantes às placas Arduino, facilitando a conexão de vários sensores, periféricos e shields Arduino.

LinkIt One é uma placa de prototipagem tudo‑em‑um para dispositivos IoT/vestíveis. Integra recursos de GSM, GPRS, Wi-Fi, GPS e Bluetooth em um formato básico de Arduino. LinkIt ONE é um produto co‑projetado pela [Seeed Studio](https://www.seeedstudio.com/) e pela [MediaTek](http://www.mediatek.com/). Ele reúne a tecnologia de ambas as partes em hardware aberto e projetos de referência líderes do setor para dispositivos vestíveis e IoT, criando uma poderosa placa de desenvolvimento.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2017)

:::note
    A placa LinkIt ONE vem com muitos recursos e seu SDK (Software Development Kit) é bastante abrangente. Leia este documento completamente uma vez antes de usar a placa. Por ser um produto co‑projetado, suporte técnico básico de hardware é fornecido no fórum Seeedstudio LinkIt One. Suporte técnico avançado está disponível nos [MediaTek LinkIt One Forums](https://labs.mediatek.com/forums/forums/list.page). Esses fóruns têm um bom número de FAQs sobre esta placa. Procure primeiro soluções para suas necessidades/problemas antes de postar perguntas para economizar seu tempo.
:::

## Recursos

--------------

- Inclui ARM7 EJ-S™, GSM, GPRS, Wi-Fi, Bluetooth BR/EDR/BLE, GPS, codec de áudio e conector para cartão SD em uma única placa de desenvolvimento.
- Pinagem semelhante às placas Arduino, incluindo E/S Digital, E/S Analógica, PWM, I2C, SPI, UART e alimentação, compatível com Arduino.
- Fornece várias interfaces para conexão com a maioria dos sensores, periféricos, módulos Grove e outros dispositivos.
- Você é o que você veste. Usando a LinkIt ONE junto com o MediaTek LinkIt SDK (para Arduino) você poderá transformar facilmente suas ideias em protótipos práticos e torná‑las realidade com o serviço de manufatura ágil e de produtização da Seeed.

## Especificações

------------------

|Parameter   |Value          |
|:------|:-----------------|
|Chipset| MT2502A (Aster, ARM7 EJ-S (TM) )|
|Clock Speed| 260MHz|
|Dimensions| 3,3 x 2,1 polegadas|
|Flash| 16MB|
|RAM| 4MB|
|DC Current Per I/O Pin| 1mA|
|Analog Pins| 3|
|Digital Output |3,3V|
|Analog Input| 5V|
|UART| Baseado em software (**Serial**), também conhecido como porta de modem USB, e Serial por hardware (**Serial1**, D0&D1)|
|SD Card| Até 32GB (Classe 10)|
|Positioning| GPS (MT3332)|
|GSM| 850/900/1800/1900 MHz|
|GPRS| Classe 12|
|Wi-Fi| 802.11 b/g/n|
|Bluetooth| BR/EDR/BLE (Modo Duplo)|

## Ideias de Aplicação
--------------------

* Internet das Coisas
- Casa inteligente
- Design vestível
- Industrial
- Hub de sensores
- Automação e Transporte

Aqui estão alguns projetos para sua referência. Mais projetos incríveis em Recipe e [Instructables](https://www.instructables.com/howto/linkit+one/).

|Monitor de Curtidas do Facebook|Alarme de Porta por SMS|Alarme de Cama Inteligente|
|--------------------------|-------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project1.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project2.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project3.jpg)|
|[Faça AGORA!](https://www.instructables.com/id/Facebook-Like-Monitor/)|[Faça AGORA!](https://www.instructables.com/id/LinkIt-One-Texting-Door-Alarm/)|[Faça AGORA!](https://www.instructables.com/id/Smart-Bed-Alarm-with-LinkIT-ONE/)|

|Tutorial AWS IoT|Indicador do Instructables|Faça você mesmo um Case de Acrílico|
|--------------------------|-------------|---------------|
|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project4.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project5.jpg)|![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/project6.jpg)|
|[Faça AGORA!](https://www.instructables.com/id/An-AWS-IoT-Tutorial-With-LinkIt-ONE/)|[Faça AGORA!](https://www.instructables.com/id/Make-a-Instructables-Indicator/)|[Faça AGORA!](https://www.instructables.com/id/5-Design-of-Laser-Cut-Cases-for-5-Popular-Platform/)|

## Visão Geral de Hardware

-------------------
![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/1000px-LinkItONE_RESOURCE.png)

### Chaves de Configuração

Há 3 chaves deslizantes na LinkIt ONE que são usadas para configurar a função/modo de operação:

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/300px-LinkIt_ONE_Wiki_Button.jpg)

|Switch No.| Functionality| Position 1 - Functionality| Position 2 - Functionality|
|:------|:-----------------|:-----------------|:-----------------|
|1| Modo de Programação| **MS**: Nesta posição, quando conectada ao PC, a placa LinkIt One será exibida como uma unidade USB de 10MB. O programa não será executado neste modo. Qualquer arquivo copiado para esta unidade pode ser lido via código.| UART: Esta posição é usada para colocar a placa em modo de programação. O firmware pode ser carregado neste modo.|
|2| Alimentação| **BAT**: Placa alimentada por bateria de íon de lítio. Para carregar a bateria, coloque a chave nesta posição e conecte a placa ao PC.| **USB**: Placa alimentada pela porta USB. Coloque a chave nesta posição quando não houver bateria conectada para programar a placa.|
|3| SD/SPI| **SPI**: Esta posição permite o acesso aos pinos SPI externos (D10 - D13) |**SD**: Esta posição permite que o código acesse o cartão SD. Este modo também desabilita o acesso aos pinos SPI (D10-D13).|

:::note
    TENHA cuidado ao manusear o conector USB micro tipo-B ou você pode quebrar o conector.
:::

## Primeiros passos

### Visão Geral do Procedimento

|No.| Step |Read more|
|:------|:-----------------|:-----------------|
|1| Instale o Arduino IDE 1.5.7 Beta (versão para Windows ou MAC OS X)| [here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#instalando-o-arduino-ide)
|2|  [Registre-se no MediaTek Labs](https://labs.mediatek.com/dpRegister/create). | |
|3| Baixe e leia o [Linkit Developer's Guide](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd). ||
|4| Instale o [LinkIt SDK](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) para Arduino IDE (Windows ou MAC OS X).| [here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#instalando-o-mediatek-linkit-one-sdk)|
|5| Instale os drivers do LinkIt ONE.| [here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#instalando-drivers)|
|6| Atualize a versão do firmware on-board.| [here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#atualizando-firmware)|
|7| Abra o Arduino IDE, selecione a placa LinkIt ONE e comece a programar.| [here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#enviando-código-blinky)||
|8| Conecte as antenas GSM, GPS e WiFi/BT à placa LinkIt One| [here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#conectando-antenas)|
|9 |Insira o SIM e o cartão Micro SD|[here](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE/#inserindo-cartão-sim-e-cartão-sd)|
|10 |Explore os exemplos e boas criações!|

### Instalando o Arduino IDE

[Baixe a versão mais recente do Arduino IDE](https://www.arduino.cc/en/Main/Software). Para tópicos mais avançados, siga as [instructions](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp) da MediaTekTM.

### Instalando o Mediatek LinkIt ONE SDK

- Baixe o [LinkIt SDK for Arduin](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/sdk_intro/index.gsp). No momento da escrita deste guia, foi usada a versão **v1.1.11** do SDK para Windows (Beta). Assista ao guia em vídeo para as plataformas Windows OS e MAC OS X [here](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/get-started/index.gsp)
- Extraia os arquivos baixados para a pasta do Arduino IDE.
- Dê um clique duplo no arquivo .EXE e instale.
- Com a instalação do LinkIt ONE SDK, o Arduino IDE passa a funcionar como um IDE para LinkIt ONE.

### Instalando Drivers

- Desative a **Driver Signature Enforcement** se você estiver usando o Windows 8/8.1. Leia as [instructions](https://wiki.seeedstudio.com/pt-br/Driver_for_Seeeduino/#installing-drivers-for-the-seeeduino-with-window8)

- Coloque a chave deslizante MS/UART na posição UART e conecte a LinkIt ONE ao PC.
- Abra o Gerenciador de Dispositivos; as seguintes portas COM serão exibidas.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp1.jpg)

- Instale o driver a partir da pasta ..\LinkIt_ONE_IDE\drivers\mtk.
- Após instalar os drivers, o Gerenciador de Dispositivos deverá exibir as duas portas a seguir:

   **MTK USB Debug Port** usada para envio de código.

  **MTK USB Modem Port** usada para imprimir mensagens, como Serial.println()

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp2.jpg)  

:::note
    Ainda não há driver oficial para Windows 10. Usuários de Windows 10 podem selecionar manualmente os arquivos de driver do Windows 7 em **\LinkIt_ONE_IDE\drivers\mtk** a partir do **Device Manager**. Sabe‑se que isso funciona em alguns PCs.
:::

### Atualizando o Firmware

O firmware da placa LinkIt ONE precisa ser atualizado de vez em quando. O LinkIt ONE SDK mais recente vem com uma versão de firmware.

- Antes de iniciar a atualização do firmware, certifique‑se de que as chaves deslizantes estejam na posição correta (**MS/UART** deve estar na posição **MS**. **USB/BAT** na posição **USB**):

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONEUpdateFirmware2.jpg)  

- Execute o aplicativo FirmwareUpdater.exe a partir da pasta ..**\LinkIt_ONE_IDE\hardware\tools\mtk**.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware.jpg)  

- Clique no botão e depois conecte a LinkIt ONE ao PC. Aguarde 1 minuto para que a atualização seja concluída com sucesso.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-LinkItONEUpdateFirmware_ok.jpg)  

### Enviando Código (Blinky)

- Os seletores deslizantes devem ser configurados para upload de firmware (ou seja, coloque o MS/UART na posição UART e o seletor Power na posição USB).

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkIt_ONE_Wiki_Temp3.jpg)

- Abra **File** -> **Examples** -> **Basics** -> **Blink** na LinkIt ONE IDE.
- Selecione o número da porta COM correspondente à **MTK USB Debug port** em **Tools** -> **Port**.
- Selecione a placa clicando em **Tools > Board > LinkIt One**

Se você não conseguir encontrar a LinkIt One, verifique [How to Add Seeed boards to Arduino IDE](https://wiki.seeedstudio.com/pt-br/Seeed_Arduino_Boards/)

- Compile e faça o upload do código.
- O LED marcado com **L** deve piscar.

### Conectando as Antenas

Há três antenas fornecidas com a LinkIt ONE. Elas são usadas para:

- GSM/GPRS
- Wi-Fi/BT
- GPS

Conecte a antena conforme a imagem a seguir.

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Linkit_one_antenna.jpg)

:::note
    - Ao puxar a antena da placa, faça isso com cuidado. Por favor, não use força bruta.
    - Procure aplicar a força perpendicularmente à direção da placa, caso contrário você pode danificar o pad da antena.
:::

### Inserindo o Cartão SIM e o Cartão SD

A LinkIt ONE aceita cartão SIM de tamanho padrão e cartão Micro SD. Insira-os conforme a seguinte imagem:

![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/LinkItONE_SIM_SDCard_Insert.jpg)

### Explorando os Exemplos do SDK da LinkIt ONE

O SDK da LinkIt ONE vem com muitos exemplos / códigos de amostra para usar periféricos como GSM, GPRS, WiFi, BT, Áudio, GPS etc. Explore-os primeiro e leia a documentação da API. A documentação da API está disponível no [User Guide](https://labs.mediatek.com/fileMedia/download/5fed7907-b2ba-4000-bcb2-016a332a49fd) e no [API References site](https://labs.mediatek.com/site/znch/developer_tools/mediatek_linkit/api_references/Core_Digital.gsp)

## Groves e Shields Compatíveis com a LinkIt ONE

- Fabricamos centenas de Groves e Shields, incluindo sensores, atuadores, displays e outros módulos.
- Você pode implementar suas ideias com esses Groves e Shields facilmente.
- Mas a LinkIt ONE não é compatível com todos eles.
- Nós preparamos uma lista de Groves e Shields compatíveis:

[![](https://files.seeedstudio.com/wiki/Linkit-ONE/image/400px-Compatible_Groves_and_Shields_for_LinkIt_ONE.png)](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/LinkIt_ONE_Comparability_Test.xlsx)

## Tutorial do Sidekick Basic Kit para LinkIt ONE

![enter image description here](https://files.seeedstudio.com/wiki/Linkit_ONE/image/350px-LinkitONESidebox.jpg)

O Sidekick Basic Kit para LinkIt ONE foi projetado para ser usado com sua placa LinkIt ONE. Este kit vai ajudá-lo a se familiarizar rapidamente com a plataforma LinkIt. Ele inclui muitos dos acessórios mais populares para projetos de DIY: como protoboard, jumpers, LEDs coloridos, resistores, buzzer, etc. Tudo isso vem em uma caixa prática, que é fácil de transportar e minimiza a bagunça. O kit inclui um guia completo que vai familiarizá-lo com uma ampla variedade de componentes eletrônicos enquanto você cria circuitos pequenos, simples e fáceis de montar. Há 10 cursos diferentes descritos que oferecem a melhor maneira para iniciantes se familiarizarem com a LinkIt ONE.

[![](https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png)](https://www.seeedstudio.com/item_detail.html?p_id=2027)

<!-- - [The Basics](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-The_Basics/)
- [Hello World](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Hello_World/)
- [Push Button](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Push_Button/)
- [Marquee](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Marquee/)
- [Colorful World](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Colorful_World/)
- [Analog Interface](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Analog_Interface/)
- [Mini Servo](https://wiki.seeedstudio.com/pt-br/LinkIt-ONE-Tutorial---Mini-Servo/)
- [Light Sensor](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Light-Sensor/)
- [SMS Control the LED](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-SMS_control_the_LED/)
- [Get Temperature with Webpage](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/)
- [Github Repo for Sidekick Basic Kit for LinkIt ONE](https://wiki.seeedstudio.com/pt-br/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/) -->

## FAQs

**Q1: Posso acessar a rede 3G ou 4G com a LinkIt ONE?**

A1: Não, mas você pode usar a rede GPRS.

**Q2: Nada é impresso no monitor serial depois de enviar o demo GSM com sucesso.**

A2: Siga os passos abaixo.

- Escolha a porta Modem USB para impressão.
- Escolha a taxa de baud correta.
- Use outro demo para testar.
- Atualize o firmware e tente novamente.

**Q3: A função GPRS não funciona. Tentei o sketch “LGPRS” sem sucesso.**

A3: Siga os passos abaixo.

- Certifique-se de que seu cartão GPRS não está bloqueado.
- Você consegue acessar a rede GPRS com esse cartão no seu telefone?
- O SMS funciona?

**Q4: Por que não consigo enviar o sketch “Blink” para a LinkIt ONE? Ela está com defeito?**

A4: Siga os passos abaixo.

- Verifique se as duas chaves estão do lado correto (Uart & USB)
- Escolha a porta COM correta (MTK USB DEBUG PORT)
- Atualize o firmware e tente novamente
- Tente em outro PC
- Tente outro cabo USB

**Q5: A LinkIt ONE é compatível com gravação de áudio?**

A5: Sim, o conector de áudio pode ser a interface de entrada para gravação. Seu ADC foi integrado no MT2502A.

**Q6: O módulo WiFi integrado da LinkIt One suporta o modo Monitor?**

A6: Consulte a referência da [WiFi API](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html) da LinkIt One. Há suporte para RSSI para redes conectadas. Não há modo monitor disponível para redes WiFi não conectadas.

**Q7: Posso aplicar 5 V através do conector de bateria na LinkIt ONE?**

A7: Desculpe, você não pode usar uma bateria de 5 V. A placa Linkit ONE vem com uma bateria recarregável de íons de lítio de 3,7 V. É recomendado usar a bateria fornecida com ela.

**Q8: Onde posso encontrar informações sobre como conectar a LinkIt ONE à web usando GPRS?**

A8: A LinkitONE IDE vem com exemplos para usar o GPRS para se conectar à web. Basta instalar a versão mais recente da IDE e verificar os exemplos. Aqui está a [GPRS API](https://labs.mediatek.com/api/linkit-one/frames.html?frmname=topic&frmfile=index.html).

## Visualizador de Esquemático Online

<div className="altium-ecad-viewer" data-project-src="https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip" style={{borderRadius: '0px 0px 4px 4px', height: 500, borderStyle: 'solid', borderWidth: 1, borderColor: 'rgb(241, 241, 241)', overflow: 'hidden', maxWidth: 1280, maxHeight: 700, boxSizing: 'border-box'}}>
</div>

## Recursos

**Esquemático / Arquivos de Projeto:**

- [LinkIt ONE V1.0 Eagle File](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/202000437_PCBA%20Linkit%20ONE_PDF.zip)
- [LinkIt ONE V1.0 Schematic in PDF](https://files.seeedstudio.com/wiki/Linkit_ONE/resource/%5B202000437%5DLinkIt%20ONE-V1_Eagle.zip)

**Software:**

- [MediaTek_LinkIt_SDK_for_Ardunio](https://labs.mediatek.com/en/platform/linkit-one.html)

**Datasheets e Guias do Usuário:**

- [LinkIt_ONE_Hardware_Reference_Design_v1_0](https://labs.mediatek.com/site/znch/access_denied/access_denied.gsp)
- [LinkIt ONE_Pinout Diagram_v1.0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/LinkIt_ONE_Pinout_Diagram_v1_0.pdf)
- [MediaTek_LinkIt_Developers_Guide_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_LinkIt_ONE_Developers_Guide_v1_3.pdf)
- [MediaTek_MT2502A_SOC_Data_Sheet_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT2502A_SOC_Data_Sheet_v1_0.pdf)
- [MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT5931_Wi-Fi_Data_Sheet_v1_0.pdf)
- [MediaTek_MT3332_GPS_Data_Sheet_v1_0【PDF】](https://files.seeedstudio.com/wiki/Linkit-ONE/resource/MediaTek_MT3332_GPS_Data_Sheet_v1_0.pdf)

**Obtendo Ajuda**

- [MediaTek LinkIt ONE Forums](https://labs.mediatek.com/forums/forums/list.page)

**Mais**

- [Veja também: Sidekick Base Kit for LinkIt ONE](https://www.seeedstudio.com/wiki/Sidekick_Basic_Kit_for_LinkIt_ONE)

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
