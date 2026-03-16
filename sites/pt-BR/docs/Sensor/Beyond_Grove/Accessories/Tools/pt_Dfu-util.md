---
title: Dfu-util
keywords:
  - docs
  - docusaurus
image: https://wiki.seeedstudio.com/pt-br/Dfu-util/
slug: /Dfu-util
last_update:
  date: 02/03/2022
  author: gunengyu
createdAt: '2023-02-06'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Dfu-util/
---

## Atualizando o firmware com dfu-util

Você vai precisar do dfu-util 0.5 ou mais recente para baixar arquivos dfu para o [DSO Nano](/pt-br/DSO_Nano "DSO Nano").
Versões mais antigas do dfu-util não funcionarão. O DSO Nano, e muitos outros dispositivos baseados em microcontroladores da ST Micro, usam as próprias extensões DFU da ST Micro (DfuSe), que não são compatíveis com o padrão DFU.

Você pode encontrar um pacote dfu-util 0.8 para Ubuntu 10.04 no [PPA do Tormod](https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid). Basta baixar e instalar o pacote .deb correto. O mesmo pacote deve ser instalado sem problemas em qualquer versão posterior do Ubuntu ou no Debian unstable também. Para outros sistemas operacionais, talvez seja necessário compilar o dfu-util manualmente, conforme descrito na página inicial do dfu-util.

Para baixar um arquivo de firmware .dfu do seu computador para o seu Nano, execute este comando

```
dfu-util -a 0 -D your-firmware-file.dfu
```

Talvez seja necessário executá‑lo algumas vezes até que tenha sucesso. Se você receber erros de "permission denied", coloque "sudo " antes da linha de comando.
Não se esqueça de repetir o comando com todos os arquivos de firmware necessários (APP e LIB).

## Baixando um arquivo não-dfuse para um dispositivo dfuse (avançado)

Um dispositivo DFU padrão aceitará um arquivo binário bruto do computador e o carregará no lugar correto na memória flash.
Por outro lado, com o DfuSe, os endereços são fornecidos pelo arquivo .dfu e o computador precisa informar ao dispositivo onde carregá-lo.

Portanto, para baixar um arquivo binário bruto para um dispositivo DfuSe, você precisa saber o endereço de destino.

Exemplo, para baixar um arquivo binário bruto (caso você esteja desenvolvendo):

```
dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin
dfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin
```

## Como compilar o dfu-util a partir do código-fonte

Veja as [instruções de compilação](http://dfu-util.sourceforge.net/build.html) na página inicial do dfu-util.

## Links

Posts originais no fórum e discussão:

* [Procedimento no Linux](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1353&amp;start=10)

* [Instruções específicas para Mac OS X](https://forum.seeedstudio.com/viewtopic.php?f=12&amp;t=1364)

Página oficial

* [Página inicial do dfu-util](http://dfu-util.sourceforge.net/)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
