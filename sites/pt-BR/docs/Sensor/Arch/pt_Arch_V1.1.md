---
description: Arch V1.1
title: Arch V1.1
keywords:
  - Arch
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Arch_V1.1
last_update:
  date: 2/1/2023
  author: hushuxu
createdAt: '2023-02-01'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/Arch_V1.1/
---


![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch.jpg)

Arch V1.1 é uma placa de desenvolvimento compatível com mbed com fator de forma Arduino e conectores Grove para prototipagem rápida. Com uma variedade de shields e módulos Grove, SDK mbed e muitas bibliotecas de software, você pode construir rapidamente um protótipo.

[![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png)](https://www.seeedstudio.com/depot/seeeduino-arch-p-1561.html)

Rastreamento de Versões
-------

<table>
<colgroup>
<col width="25%" />
<col width="50%" />
<col width="25%" />
</colgroup>
<thead>
<tr class="header">
<th>Revisão</th>
<th>Descrição</th>
<th>Data de Lançamento</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Seeeduino Arch V1.0</td>
<td><ul>
<li>Versão pública inicial</li>
</ul></td>
<td>2013-6-17</td>
</tr>
<tr class="even">
<td>Arch V1.1</td>
<td><ul>
<li>Alterar o nome de Seeeduino Arch para Arch</li>
<li>Trocar D13 e D11</li>
<li>Adicionar um conector Grove</li>
<li>Remover o diodo duplo</li>
</ul></td>
<td></td>
</tr>
</tbody>
</table>

Recursos
-------

- Compatível com mbed
  - ferramentas de desenvolvimento online
  - SDK de C/C++ fácil de usar
  - muitas bibliotecas e projetos publicados

- Fator de forma Arduino, três conectores Grove
  - disponível com shields compatíveis com 3,3 V
  - um grande número de módulos Grove
- Programação por arrastar e soltar
- MCU NXP LPC11U24
  - Núcleo ARM Cortex-M0 de baixo consumo
  - 48 MHz, 32 KB Flash, 8 KB RAM, 4 KB EEPROM
  - Dispositivo USB, 2xSPI, UART, I2C

Especificações
-------------

| Item                          | Típico   |
|-------------------------------|----------|
| Tensão de Trabalho            | 7 ~ 12V  |
| Microcontrolador              | LPC11U24 |
| Memória Flash                 | 32KB     |
| EEPROM                        | 4KB      |
| RAM                           | 8KB      |
| UART                          | 1        |
| I2C                           | 1        |
| Canais ADC                    | 8        |
| Pinos de E/S                  | 40       |
| Tensão máxima de entrada E/S digital | 5.0V     |

Visão Geral de Hardware
------

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Arch_V1.1_Pinout.png)

Há [uma versão monocromática](https://seeed-studio.github.io/Artwork/images/arch_v1.1_pinout_mono.png) para você imprimir.

Primeiros Passos
-----------

![insira a descrição da imagem aqui](https://files.seeedstudio.com/wiki/Arch_V1.1/img/Get_started_with_arch.png)

1. Clique [neste link](https://mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeeduino-Arch) para fazer login ou se cadastrar no mbed
2. Importe o programa mbed_blinky
3. Programe! Em seguida, você pode compilar o código e baixar o arquivo binário de saída.
4. Agora conecte sua placa Arch ao seu PC e mantenha o botão de reset pressionado por um longo tempo; ela aparecerá automaticamente como um driver USB chamado CRP DISABLD. Vá para o CRP DISABLD, exclua o arquivo de firmware e copie o arquivo binário baixado para o CRP DISABLD. Pressione rapidamente o botão de reset para executar o novo binário.

Você pode alterar o código como a seguir e tentar novamente.

```
    #include "mbed.h"

    BusOut leds(LED1, LED2, LED3, LED4);

    int main() {
        uint8_t count = 0;
        while(1) {
            leds = count++;
            wait(1);
        }
    }
```

Programando o Arch no Windows, Linux ou Mac
-----------------------------------------

Arch não possui uma interface mbed. Ele usa USB In-System-Programming(ISP) para atualizar o firmware.

Para entrar no modo USB ISP, conecte o Arch ao seu computador e mantenha o botão pressionado por um longo tempo; então um disco chamado "CRP DISABLD" aparecerá.

- No Windows
    1. exclua firmware.bin no disco "CRP DISABLD".
    2. copie um novo firmware para o disco.

- No Linux
    1. se o disco não estiver montado, monte o disco em /path/to/mount
    2. **dd if=new_firmware.bin of=/path/to/mount/firmware.bin conv=notrunc**

- No Mac você precisará usar o Terminal para executar o seguinte script para copiar seu arquivo .bin para o seu Arch

    1. **dd if=new_firmware.bin of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc**

Se você quiser, também pode criar um aplicativo do **Automator** para suportar arrastar e soltar o arquivo para sua placa. Basta criar um "*Run Shell Script*" com o seguinte comando:

dd if=$\* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc

Você também precisará alterar a opção `"Pass Input"` de `"to stdin"` para `"as arguments"` — sem isso você receberá um erro `"The action 'Run Shell Script' encountered an error"` ou `"dd: no value specified for if (1)"` no log.

Além disso, uma forma aprimorada do script é:

**`dd if="${1}" of=/Volumes/CRP\ DISABLD/firmware.bin conv=notrunc`**

Que deve lidar com espaços no caminho do arquivo e usa apenas o primeiro arquivo fornecido.

Pressione rapidamente o botão para executar o novo firmware.

Aplicações
------------

- [Usar Seeeduino Arch como um adaptador de depuração para depurar outro Seeeduino Arch](https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/)
- [Monitorar o ambiente](https://mbed.org/users/yihui/notebook/sense-environment/)
- [Brincar com Grove RTC](https://mbed.org/cookbook/seeed-grove-RTC)
- [Brincar com Grove - Ultrasonic ranger](https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger)

Recursos
---------

- [Esquemáticos do Arch V1.1](https://upverter.com/yihui/35f45e266de84e9c/Arch/)

<!-- Este arquivo Markdown foi criado a partir de https://www.seeedstudio.com/wiki/Arch_V1.1 -->

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
