---
title: DSO Quad:Compilando o Firmware
nointro: null
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Quad-Building_Firmware/
slug: /DSO_Quad-Building_Firmware
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/DSO_Quad-Building_Firmware/
---

##   Compilando o firmware do DSO Quad a partir do código-fonte

Atualmente, esta página contém apenas informações para GCC no Debian.  Adicione informações sobre mais ambientes se você souber como configurá-los.

###   Usando GCC e Debian

<pre>
apt-get install --no-install-recommends  build-essential autoconf flex bison texinfo libncurses5-dev libgmp3-dev libmpfr-dev libmpc-dev libftdi-dev
cd
git clone [git://github.com/esden/summon-arm-toolchain.git](git://github.com/esden/summon-arm-toolchain.git)
cd summon-arm-toolchain
$EDITOR summon-arm-toolchain
</pre>

..e certifique-se de que as seguintes configurações estejam em vigor:
```
 TARGET=arm-none-eabi
 USE_LINARO=1
 LIBSTM32_EN=1
 DEFAULT_TO_CORTEX_M3=1
```

..então:
```
 ./summon-arm-toolchain
```

A toolchain é instalada em <tt>~/sat/</tt>. Em seguida:
```
cd
 git clone [https://github.com/tmbinc/dsoquad](https://github.com/tmbinc/dsoquad)
 cd dsoquad/src/app
 PATH=$PATH:~/sat/bin make
```

E então você deverá encontrar arquivos <tt>.hex</tt> nesse diretório prontos para upload.

####   uso de espaço em disco
```
$ du -sh  summon-arm-toolchain/  sat/  dsoquad/
 117M    summon-arm-toolchain/
 229M    sat/
 1.9M    dsoquad/
```

## Suporte Técnico & Discussão sobre o Produto
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