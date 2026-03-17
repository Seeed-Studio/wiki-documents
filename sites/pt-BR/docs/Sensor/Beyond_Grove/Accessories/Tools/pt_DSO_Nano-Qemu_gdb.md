---
title: DSO Nano/Qemu gdb
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Nano-Qemu_gdb/
slug: /DSO_Nano-Qemu_gdb
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Nano-Qemu_gdb/
---


##   Executando código STM32 no emulador qemu

Com o emulador qemu você pode executar e depurar código ARM sem nenhum processador ARM! Você pode carregar o código no emulador, conectar o depurador gdb e avançar passo a passo pelo código. Claro, periféricos, temporizadores e outros componentes do microcontrolador não serão emulados, mas isso é útil para verificar parte do código. Você precisará executar o qemu-system-arm, que faz parte do projeto QEMU. No Debian/Ubuntu ele está incluído no pacote qemu-system (ou qemu-kvm-extras em versões mais antigas).

##   Compilando qemu-system-arm (opcional)

Se não houver pacotes de distribuição para o seu sistema, ou se a versão empacotada for mais antiga que a 0.13, é recomendável que você o compile por conta própria:

```
wget [http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz](http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz)
tar xzf qemu-0.13.0.tar.gz
cd qemu-0.13.0
./configure --disable-kvm --enable-debug --target-list=arm-softmmu --audio-card-list= --audio-drv-list=
make
```

Agora você pode executá-lo diretamente a partir da pasta arm-softmmu, a menos que queira instalá-lo, por exemplo, em /usr/local/bin.

##   Observação sobre o suporte ao STM32

O microcontrolador STM32 no DSO Nano usa um núcleo ARM cortex-m3. O qemu-system-arm não conhece o layout de ROM (flash) do STM32. Em particular, ele não lê o vetor de pilha e de reset a partir do endereço 0x08000000. Mas se o seu arquivo elf designar corretamente o tratador de reset como ponto de entrada, ele usará isso como endereço inicial. No entanto, você terá que definir o registrador de pilha (sp) manualmente.

##   Iniciar o emulador

**Inicie o emulador qemu e seu servidor gdb interno (opção -s), carregando seu arquivo elf como um "kernel":**
```
qemu-system-arm -cpu cortex-m3 -S -s -singlestep -nographic -m 513 -kernel dso-lib.elf
```

A opção "-m 513" cria um espaço de memória que inclui os endereços de RAM 0x2000000 do STM32.

**Inicie o gdb (aquele da sua ferramenta ARM!) e conecte-se ao emulador qemu:**

```
arm-none-eabi-gdb dso-lib.elf
(gdb) target extended-remote localhost:1234
(gdb) set $sp = 0x20005000
(gdb) where
```

**Agora você pode começar a avançar passo a passo pelo programa, apenas alguns exemplos**

```
(gdb) display/i $pc
(gdb) stepi
(gdb) next
(gdb) break main.c:23
(gdb) x/16wx 0x20000000
(gdb) cont
(gdb) info reg
(gdb) info variables
(gdb) print *pProperty
```

##   Links

*   [http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/](http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/)

*   [http://embdev.net/topic/129757](http://embdev.net/topic/129757)

## Suporte Técnico & Discussão de Produto
 if you have any technical issue.  submit the issue into our [forum](http://forum.seeedstudio.com/). 
Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>  