---
description: Arch GPRS V2
title: Arch GPRS V2
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_GPRS_V2
sku: 113010001
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Arch_GPRS_V2/
---


![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2.jpg)

**Arch GPRS V2** é a nova e aprimorada versão da placa de desenvolvimento Arch GPRS da [Seeed Studio](https://www.seeedstudio.com). Assim como a Arch GPRS original, ela também é uma placa de desenvolvimento compatível com [mbed](http://mbed.org/handbook/mbed-SDK) que incorpora um módulo de rede celular juntamente com um microcontrolador. A Arch GPRS V2 usa o microcontrolador LPC11U37 em vez do LPC11U24 usado na Arch GPRS. Você pode usar o SDK mbed em C/C++, bibliotecas e ferramentas online de desenvolvimento otimizadas para criar rapidamente o seu protótipo baseado em Arch GPRS V2. O módulo de rede celular na Arch GPRS é baseado no mecanismo SIM900 Quad-band GSM/GRPS da SIMCom. Com isso, funções de coleta de dados podem ser realizadas facilmente usando a rede celular baseada em GSM/GPRS 2G.
Arch GPRS V2 possui uma interface padrão Arduino, bem como conectores [Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/ "Grove") na placa. É conveniente conectar Shields existentes e produtos [Grove](https://wiki.seeedstudio.com/pt-br/Grove_System/ "Grove") à Arch GPRS V2. Você pode até conectar um painel solar diretamente à placa para permitir que a bateria seja carregada por ele. Um design de baixo consumo garante carregamento fácil e longas horas de operação ao ar livre!

[![](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/Arch-GPRS-V2-p-2026.html)

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Arch GPRS V2 não vem com <a href="https://mbed.org/handbook/mbed-HDK" >uma interface mbed</a>. Para enviar mensagens de depuração, tente <a href="https://mbed.org/handbook/USBSerial">USBSerial</a>.</p>
</div>

Recursos
--------

- compatível com mbed
  - Ferramentas de desenvolvimento online
  - SDK C/C++ fácil de usar
  - Muitas bibliotecas e projetos publicados

- Controlador NXP LPC11U37
  - Núcleo ARM Cortex-M0 de baixo consumo
  - 128KB de Flash on-chip, 12KB de SRAM, 4KB de EEPROM
  - Dispositivo USB, UART, I2C

- Módulo SIM900
  - Suporte Quad-band (850/900/1800/1900MHz) GSM/GPRS
  - Suporta cartão SIM externo: 1.8V/3V
  - Controle com comandos AT padrão

- Seleciona automaticamente USB5V ou painel solar para carregar uma bateria

Arch GPRS V2 vs Arch GPRS
-----------------------

| Parâmetro       | **Arch GPRS V2**| **Arch GPRS**|
|-----------------|-----------------|--------------|
| MCU             | LPC11U27        | LPC11U24     |
| Módulo GSM/GPRS | SIM900          | EG-10        |
| Cartão MicroSD  | Sim             | Não          |

Visão geral de hardware
-----------------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Arch_GPRS_V2_Pinout.png)

Primeiros passos
---------------

![](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/img/Get_started_with_arch.png)

1. Faça login no ambiente mbed a partir de [aqui](http://www.mbed.org)
2. Importe o programa [mbed_blinky](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-GPRS)
3. Verifique se o código importado em main.cpp na pasta mbed_blinky no ambiente do mbed online Compiler está conforme indicado na figura acima na Etapa 3. Certifique‑se de que a plataforma selecionada para compilação do código é a Seeeduino-Arch. Agora prossiga e compile o código. Quando for solicitado a salvar o arquivo binário resultante (.bin), salve‑o em uma pasta designada no seu PC.
4. Agora conecte sua placa Arch ao PC e mantenha o botão de reset pressionado por um longo tempo. Uma unidade USB removível chamada CRP DISABLD deverá aparecer automaticamente no seu PC. Vá até a unidade CRP DISABLD, exclua o arquivo de firmware existente que você vê na pasta e copie o arquivo binário baixado para CRP DISABLD. Pressione rapidamente o botão de reset para executar o novo binário.
5. Verifique se seu código está sendo executado com sucesso olhando para a placa Arch GPRS V2. Se o LED mais à direita, mostrado no Pinout acima, estiver piscando e os outros 3 LEDs ao lado dele estiverem todos LIGADOS, isso significa que seu código está funcionando.

Você pode alterar o código para o seguinte e ver o que acontece:

```

    #include "mbed.h"

    DigitalOut myled1(LED2); //left most LED if board is held as shown in Pinout diagram above
    DigitalOut myled2(LED3); //2nd from left
    DigitalOut myled3(LED4); //3rd from left
    DigitalOut myled4(LED1); //4th from left (right most)

    int main() {
        while(1) {

            myled1 = 1; //left most LED turns ON, rest off
            myled2 = 0;
            myled3 = 0;
            myled4 = 0;

            wait(1); //1 sec wait time
            myled1 = 0;
            myled2 = 1; //2nd from left LED turns ON, rest off
            myled3 = 0;
            myled4 = 0;

            wait(1);
            myled1 = 0;
            myled2 = 0;
            myled3 = 1; //3rd from left LED turns ON, rest off
            myled4 = 0;

            wait(1);
            myled1 = 0;
            myled2 = 0;
            myled3 = 0;
            myled4 = 1; //4th from left (right most) LED turns ON, rest off

            wait(1);
        }
    }
```

Quando você compilar e executar o código acima na placa Arch GPRS V2, deverá ver que os LEDs piscam em sequência.

Se você concluir com sucesso as etapas acima, isso significa que:

1. Sua Arch GPRS V2 está ligando corretamente.
2. Seu código está sendo baixado e executado corretamente pelo módulo Arch GPRS V2.
3. Você está pronto para assumir projetos mais complexos agora!

Programando a Arch no Windows, Linux ou Mac
-----------------------------------------

A Arch não possui uma interface mbed. Ela usa USB In-System-Programming (ISP) para atualizar o firmware.

Para entrar no modo USB ISP, conecte a Arch ao computador e mantenha o botão pressionado por um longo tempo, então aparecerá um disco chamado "CRP DISABLD".

- No Windows

    1. exclua firmware.bin no disco "CRP DISABLD".
    2. copie um novo firmware para o disco.

- No Linux

    1. se o disco não estiver montado, monte o disco em **`{mnt_dir}`**
    2. **`dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc`**

- No Mac você precisará usar o Terminal para executar o seguinte script para copiar o seu arquivo .bin para a Arch

    1. **`dd if={new_firmare.bin} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc`**

Se desejar, você também pode criar um aplicativo **Automator** para oferecer suporte a arrastar e soltar o arquivo para sua placa. Basta criar um "*Run Shell Script*" com o seguinte comando:

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

Você também precisará alterar a opção `"Pass Input"` de `"to stdin"` para `"as arguments"` — sem isso você receberá um erro `"The action 'Run Shell Script' encountered an error"` ou `"dd: no value specified for if (1)"` no log.

Além disso, uma forma aprimorada do script é:
**dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc**

Que deve lidar com espaços no caminho do arquivo e usar apenas o primeiro arquivo fornecido.
Pressione rapidamente o botão para executar o novo firmware.

Recursos
------------------------

- [Página da plataforma de desenvolvimento Arch GPRS V2.0 no mbed](https://developer.mbed.org/platforms/Seeed-Arch-GPRS/)

**Arquivos de Projeto**

- [Arquivos de esquema e placa em formato EAGLE](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_sch_pcb.zip)
- [Esquemático em formato PDF](https://files.seeedstudio.com/wiki/Arch_GPRS_V2/res/Arch_GPRS_v2.0_SCH_PDF.pdf)

**Aplicações e Biblioteca**

- [Biblioteca GPRS](http://developer.mbed.org/teams/Seeed/code/GPRSInterface/)
- [Use a Seeeduino Arch como adaptador de depuração para depurar outra Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
- [Monitorar ambiente](https://mbed.org/users/yihui/notebook/sense-environment/)
- [Divirta‑se com Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)
- [Divirta‑se com Grove - Ultrasonic ranger](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

**Veja também**

- [Informações do módulo SIM900 GPRS](/pt-br/GPRS_Shield_V2.0)

<!-- This Markdown file was created from https://www.seeedstudio.com/wiki/Arch_GPRS_V2 -->

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
