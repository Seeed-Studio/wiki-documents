---
title: DSO Nano/OpenOCD gdb
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Nano-OpenOCD_gdb/
slug: /DSO_Nano-OpenOCD_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Nano-OpenOCD_gdb/
---

#   Depuração com OpenOCD e gdb

Use o openocd 4.0 ou mais recente.

Este exemplo pressupõe que você tenha um adaptador JTAG compatível com Segger J-Link entre o seu computador e o dispositivo (ou placa de desenvolvimento) que está depurando. É possível usar um adaptador SWD (ST-Link) em vez disso; para isso, use o openocd 0.7 ou mais recente.

Inicie o servidor openocd com arquivos de configuração correspondentes ao seu hardware:
```
openocd -f interface/jlink.cfg -f target/stm32.cfg
```

Ou, se você estiver usando SWD:
```
openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg
```

Em uma segunda janela, inicie uma sessão interativa com o openocd:
```
telnet localhost 4444
```

Isso parece ser necessário para evitar erros como "target is not halted" e outros problemas posteriores:
```
reset_config trst_and_srst
```

Pare o alvo (o processador ARM):
```
reset halt
```

Se você ainda não tiver gravado o binário, usando por exemplo o dfu-util, pode fazê-lo via JTAG desta forma:
```
reset init
flash write_image erase dso-lib.hex 0 ihex
reset halt
```

Em uma terceira janela, inicie o gdb ou gdbtui:
```
arm-none-eabi-gdb
(gdb) file dso-lib.elf
(gdb) target remote localhost:3333"
(gdb) load dso-lib.elf
```

Agora você já deve conseguir executar e depurar:
```
(gdb) set $pc = Reset_Handler
(gdb) display/i $pc
(gdb) stepi
```

## Suporte Técnico e Discussão sobre Produtos
 se você tiver qualquer problema técnico, envie o problema para o nosso [fórum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>