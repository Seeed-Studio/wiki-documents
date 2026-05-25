---
description: Manual de Programação de Firmware do Air602
title: Manual de Programação de Firmware do Air602
keywords:
  - Air602_WiFi_Development_Board
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Air602_Firmware_Programming_Manual
last_update:
  date: 01/20/2023
  author: Matthew
createdAt: '2023-02-15'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Air602_Firmware_Programming_Manual/
---


![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg)

O módulo Air602 é baseado no W600, que incorpora um ARM-Cortex M3; neste tutorial mostraremos como gravar o firmware.

## Download da Ferramenta de Firmware e da Imagem

Você pode baixar aqui a Ferramenta de Programação de Firmware

[Firmware Tool](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

Nós fornecemos o firmware oficial para você.

[Officail Firmware](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

Você encontrará 4 versões neste pacote zip, recomendamos que você use **AirM2M_Luat_V0011_W600T_USER**

### registro de alterações

|versão|Descrição|
|--|--|
|AirM2M_Luat_V0008_W600T_USER|Inicial|
|AirM2M_Luat_V0009_W600T_USER|Adicionar suporte a mqtt|
|AirM2M_Luat_V0010_W600T_USER|Corrigido o problema de que, quando o módulo é definido para o modo AP e a função DHCP é desativada, o dispositivo (estações) ainda pode usar a função DHCP para obter o endereço IP. Ao mesmo tempo, também resolve o problema de que alguns telefones celulares são conectados com sucesso, mas desconectam imediatamente.|
|AirM2M_Luat_V0011_W600T_USER|Otimizado o consumo de energia do chip, reduzindo o calor gerado durante a operação do chip|

Você pode pular para [Burn the firmware](#Burn-the-firmware) se não quiser usar o SDK.

## Download do SDK

Além disso, você pode baixar o SDK e reprogramá-lo você mesmo.

[AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

Recomendamos que você o compile com o **Keil MDK5**. Use o Keil para abrir o **WM_W600.uvprojx**, você pode encontrá-lo em **XXXXX\WM_SDK\Tools\Keil\Project**; XXXXX é o local onde você descompacta o SDK.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path.jpg)

Quando a compilação terminar, você poderá encontrar o arquivo **.img** em **XXXXX\WM_SDK\Bin**; também aqui XXXXX é o local onde você descompacta o SDK.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/KEIL_path_1.jpg)

Agora você pode gravar seu próprio firmware no Air602; então a pergunta é: como?

## Burn the firmware

Infelizmente, a ferramenta de firmware só oferece suporte ao idioma chinês; para resolver esse problema, mostraremos as capturas de tela passo a passo.

**Passo 1.** Descompacte a Firmware Tool, localize e clique duas vezes em **LuaTool.exe** em **XXXX/LuaTools 1.5.7**, onde XXXX é o caminho em que você descompactou a firmware tool (LuaTools1.5.7).

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Luat_path_1.jpg)

**Passo 2.** Quando você abrir a ferramenta, pode aparecer uma janela para permitir que você atualize; você pode simplesmente clicar em "取消升级" para pular esta etapa.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_1.jpg)

**Passo 3.** Mude para o modo WiFi. O modo padrão é Luat para 4G; para gravar o firmware do Air602 devemos clicar em **切换模式 ->切换至WiFi**.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_2.jpg)

Então o software será reiniciado e você verá uma nova janela assim:

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_3.jpg)

**Passo 4.** Escolha o firmware que você acabou de baixar ou compilar com o SDK. Clique em **浏览文件**, selecione o firmware (tanto *.img* quanto *.FLS* funcionarão) e, em seguida, clique em **Open**.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_4.jpg)

**Passo 5.** Escolha a porta COM correspondente e comece a gravar o firmware. Na verdade, a ferramenta detectará automaticamente a porta COM do Air602; você só precisa marcar a caixa de seleção e, em seguida, clicar em **开始** para iniciar a programação do firmware.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_5.jpg)

Então você verá um aviso **开始握手，请重启WiFi模块**; quando esse aviso aparecer, pressione o botão de reset na placa de desenvolvimento Air602 a tempo.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_6.jpg)

Tenha cuidado ao pressionar o botão de reset para evitar a ejeção incorreta do dispositivo USB. Alguns segundos depois, aparecerá na mesma área o aviso **握手成功，开始下载**, o que significa que o handshake foi bem-sucedido e a programação começou. Você também poderá ver a barra de progresso.

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_7.jpg)

:::note
Se falhar, pode aparecer **握手超时**, o que significa tempo limite de handshake; repita o passo 5 várias vezes e então deverá funcionar.
:::

:::tip
Se tudo correr bem, você verá a imagem a seguir, o que significa que você gravou com sucesso o firmware na placa de desenvolvimento Air602. Aproveite :D
:::

![](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/Tool_8.jpg)

## FAQ

### P1: Problemas após gravar o FW AirM2M_Luat_V0011_W600T_USER (Por tarp.andreas)

**Citação"**
parece que, se alguém gravar o Firmware AirM2M_Luat_V0011_W600T_USER.FLS conforme descrito na Wiki, torna-se impossível usar o LuaTool
novamente para esse módulo.

**"**

R1: Isso acontece porque a Ver 11 mudou a estrutura de boot do SDK; você precisa regravar a flash antes de voltar a gravar a ver08/09/10. Para mais detalhes, verifique
nosso fórum.

[Problems after burning FW AirM2M_Luat_V0011_W600T_USER](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8498&p=28790#p28790)

___

### P2: Como programar a partir do Linux

**Citação"**
Agora descobri que o arquivo zip de "firmware tools" não contém nenhum código-fonte, mas apenas alguns binários para Windows. Então, como faço para programar este dispositivo a partir da minha estação de trabalho Linux?

**"**

R2: Infelizmente, não temos a ferramenta de firmware para Linux. No entanto, você pode usar uma ferramenta de porta serial com função de envio xmodem.

>Passo 1. Enviar 1B (HEX), ciclicamente.  
>Passo 2. Oferecido por **tarp.andreas**. "Tente apertar o botão RESET (ou puxar para LOW o pino Res no módulo independente) enquanto envia "\x1b", então você obterá a resposta desejada."  
>Passo 3. Quando ele retornar "secboot running" e depois "CCCCCC....", você pode escolher o arquivo de firmware e enviá-lo usando o protocolo xmodem

Para mais detalhes, verifique nosso fórum.  

[Programming from Linux.](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8393&sid=acb3a9a37671cf031800ea6073adb854)

___

### P3: Problema de driver no Mac OS

Percebemos que algumas versões do sistema Mac não conseguem reconhecer esta placa.

R3: Nesse caso, você pode precisar instalar o driver CH340 manualmente; esta placa usa o CH330N, que compartilha o mesmo driver do CH340.

Para mais detalhes, verifique nosso fórum.  

[Mac os driver issue](https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=acb3a9a37671cf031800ea6073adb854)

___

## Recursos

- **[Zip]** [Firmware Tool](https://v2.fangcloud.com/share/f348cba5a0e3899fd97c57b9f2)

- **[Zip]** [Officail Firmware](https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602_img.zip)

- **[Github Page]** [AirM2M_W600_SDK](https://github.com/openLuat/Luat_WiFi_WM_W600)

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
