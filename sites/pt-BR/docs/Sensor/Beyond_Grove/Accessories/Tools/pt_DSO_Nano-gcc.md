---
title: DSO Nano/gcc
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/DSO_Nano-gcc/
slug: /DSO_Nano-gcc
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-13'
url: https://wiki.seeedstudio.com/pt-br/DSO_Nano-gcc/
---
# Como compilar o firmware do DSO Nano usando gcc

O firmware do [DSO Nano](/pt-br/DSO_Nano "DSO Nano") pode ser compilado com uma toolchain gcc. Os arquivos específicos do gcc estão na pasta project/gcc da árvore de código‑fonte do firmware.

## Obter uma toolchain gcc de cross-compiling para ARM

A toolchain ARM que a maioria de nós usa é o GCC da ARM em &lt;[https://launchpad.net/gcc-arm-embedded](https://launchpad.net/gcc-arm-embedded)&gt;.

Para Linux, você pode escolher o tarball ou o instalador. Este último é um download muito maior do que o primeiro, por algum motivo. Em qualquer caso, certifique-se de ter o diretório "bin" da toolchain no seu path. Por exemplo, se você extraiu o tarball para /opt, digite isto no seu shell, ou adicione ao seu .bashrc ou .pam_environment:

```
PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH
```

Depois de configurar corretamente a toolchain, simplesmente digite:

```
arm-none-eabi-gcc -v
```

isso deve listar a versão do compilador e as opções com as quais ele foi construído. Se em vez disso você obtiver um erro, corrija a instalação da sua toolchain antes de continuar.

Se você não conseguir encontrar uma toolchain ARM pré-compilada para a sua plataforma, ou se de outra forma quiser compilar a toolchain você mesmo, você pode baixar o código‑fonte ou conferir [https://open-bldc.org/wiki/Building_ARM_Toolchain](https://open-bldc.org/wiki/Building_ARM_Toolchain)

## Obter e compilar o código-fonte do firmware

Por enquanto, obtenha o código a partir da árvore gitlab do Tormod:

```
git clone https://gitlab.com/dsonano/dso-firmware.git
cd dso-firmware
```

Se depois você quiser atualizar sua árvore para o git mais recente:

```
git pull
```

### Compilar a parte de aplicação

```
cd DS0201_APP/project/gcc
make
```

### Compilar a parte de biblioteca

```
cd ../../../DS0201_LIB/project/gcc
make clean
make
```

## Testes

Use o [Dfu-util](/pt-br/Dfu-util "Dfu-util") para baixar os arquivos dso-lib.bin e dso-app.bin para o seu Nano V1 ou V2. Para o modelo Nano V3, copie o dso-lib.hex e o dso-app.hex, um de cada vez, para a unidade USB virtual DFU.

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
