---
description: ODYSSEY - X86J41x5
title: Módulos LTE para ODYSSEY
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-LTE-Module
sku: 113990854,113990855,113990856,110991412,110991465,102110477,102110478,102110479
last_update:
  date: 01/03/2023
  author: w0x7ce
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-LTE-Module/
---


Este wiki explicará como usar o módulo LTE no ODYSSEY-X86 tanto no Windows quanto no Linux. Neste exemplo, o módulo LTE é o [Quectel EM06-E LTE Cat 6 M.2 Module](https://www.seeedstudio.com/Quectel-EM06-E-LTE-Cat6-Module-p-4567.html), que está no formato M.2.

Em ambos os sistemas operacionais, mostraremos como usar o recurso **Hotspot** para habilitar a disponibilidade de Wi-Fi, convertendo 4G LTE em sinais Wi-Fi, tornando o ODYSSEY-X86 um simples **Roteador Wi-Fi 4G** com facilidade!

## Conexão de Hardware

- Conecte o módulo LTE ao conector M.2 do ODYSSEY-X86:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/connection.png" /></div>

- Insira o cartão SIM 4G no slot.

- Conecte as antenas ao módulo LTE.

## Configurações

O Quectel EM06-E LTE Cat 6 M.2 Module possui drivers USB para Windows 7/8/8.1/10, Linux e Android, DFOTA, etc. Isso torna o início muito conveniente, sem a necessidade de instalar drivers.

### Windows

Depois de conectar o módulo LTE e iniciar o Windows, ele deve instalar automaticamente os drivers USB e ficar pronto para uso:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/Windows.png" /></div>

### Hotspot Wi-Fi no Windows

Depois que ele estiver conectado à Internet com o módulo LTE, você pode usar o recurso Hotspot do Windows para criar uma rede Wi-Fi:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/WindowsHS.png" /></div>

:::note
Certifique-se de que a placa de rede Intel também tenha antenas conectadas a ela.
:::

### Linux

No Linux, também é muito simples. Execute as configurações de banda larga:

:::note
        Ubuntu 18.04 é usado como referência.
:::

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/1.png" /></div>

Escolha a região do país e selecione seu provedor de rede:
<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/2.png" /></div>

Escolha seu plano (Padrão):

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/3.png" /></div>

Confirme os detalhes e clique em aplicar:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/4.png" /></div>

Agora, o módulo LTE está totalmente configurado e pode ser usado para navegar na Internet!

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/5.png" /></div>

### Hotspot Wi-Fi no Linux

No Linux, você também pode criar um Hotspot Wi-Fi usando a rede 4G. O seguinte é executado no Ubuntu.

- Abra as configurações de rede no Ubuntu, execute o seguinte comando no terminal:

```sh
nm-connection-editor
```

A seguinte janela aparecerá:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-1.png" /></div>

- Selecione `Wi-Fi` como tipo de conexão:

<div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-2.png" /></div>

- Configure as configurações de Wi-Fi como a seguir, certificando-se de que o **mode** seja `Hotspot`:

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-3.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-4.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-5.png" /></div>
</div>

- Para que o Wi-Fi seja identificado por outro dispositivo, você deve conectar-se ao Wi-Fi por si mesmo. Em Wi-Fi, selecione `Connect To Hidden Network`. Escolha a rede que acabamos de criar e conecte-se.

<div>
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-6.png" /></div>
  <br />
  <div align="center"><img src="https://files.seeedstudio.com/wiki/LTE-Modules/HS-7.png" /></div>
</div>

- Agora, o Wi-Fi está disponível para conexões!

## Referência

- [How Fast is 5G On The ODYSSEY – X86J41x5 | 5G Speed Test](https://blog.seeedstudio.com/blog/2020/06/15/how-fast-is-5g-on-the-odyssey-x86j4105-5g-speed-test-m/)

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
