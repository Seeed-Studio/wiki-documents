---
description: ODYSSEY - X86J41x5
title: Atualização de Firmware
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /ODYSSEY-X86J4105-Updating-Firmware
last_update:
  date: 03/16/2023
  author: Lakshantha
createdAt: '2023-01-05'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/ODYSSEY-X86J4105-Updating-Firmware/
---

<!-- ---
name: ODYSSEY - X86J4105
category: ODYSSEY
bzurl: https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html
wikiurl:
--- -->

Este tutorial demonstra como atualizar o firmware do BIOS e do EC (Embedded Controller) para o ODYSSEY - X86.

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>PRESTE ATENÇÃO</p>
    <p style={{color: '#000000', fontSize: 15}}> Como <b>o firmware disponibilizado na Wiki é compatível com J4105/J4125-V1</b>, atualizar o firmware do BIOS a partir da Wiki em uma placa J4125-V2 fará com que a placa seja inutilizada. Certifique-se de que você tem a versão correta do ODYSSEY.</p>
  </div>
</div>

## Requisitos de Hardware

- Um computador funcional

- Um pen drive USB

- Um monitor

- Um teclado

## Como atualizar o BIOS

O BIOS também é como um sistema operacional e pode ser atualizado para corrigir bugs e melhorar o desempenho do ODYSSEY - X86J41x5. Aqui estão as instruções de como atualizar a versão do BIOS no ODYSSEY - X86J41x5.

### Versão mais recente do BIOS e Changelog

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Notas Importantes</p>
    <p style={{color: '#000000', fontSize: 14}}> 1. Isso <b>apaga as antigas configurações do BIOS</b>, portanto você precisará <b>reativar</b> seu Windows (se estiver usando Windows) novamente (apaga a chave de ativação, é necessário Internet para ativar de novo). <br /><br /> 2. Se você tiver a <b>versão sem EMMC do ODYSSEY-X86</b>, antes de atualizar o BIOS, certifique-se de <b>desativar o eMMC nas Configurações do BIOS</b> antes e depois das atualizações.</p>
  </div>
</div>

> Você pode verificar na página principal do BIOS as versões do BIOS e do firmware do EC.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105-Installing-OS/SD-BS-CJ41G-300-101-H.jpg" /></div>

### Firmware mais recente do BIOS

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#fbd373', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#FC4A1A', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>PRESTE ATENÇÃO</p>
    <p style={{color: '#000000', fontSize: 15}}> Como <b>o firmware disponibilizado na Wiki é compatível com J4105/J4125-V1</b>, atualizar o firmware do BIOS a partir da Wiki em uma placa J4125-V2 fará com que a placa seja inutilizada. Certifique-se de que você tem a versão correta do ODYSSEY.</p>
  </div>
</div>

<br />

**[SD-BS-CJ41G-300-101-K 07/26/2022 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-K.zip)**

- Melhorar a estabilidade geral.

**Observação:** Se você quiser o BIOS acima com o **recurso de bifurcação ativado**, entre em contato com techsupport@seeed.io

Com o recurso de bifurcação, você poderá usar o M.2 M-Key para 4 PCIe x1. Isso permite que você conecte quatro dispositivos PCIe x1 diferentes ao M.2, como múltiplas portas de rede, múltiplos SSDs e outros dispositivos de expansão. Com o BIOS normal sem o recurso de bifurcação, o M.2 M-Key pode ser usado apenas para um PCIe x4.

>**Histórico de BIOS:**

**[SD-BS-CJ41G-300-101-H 08/16/2021 15:00:00](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip)**

- **SHA256:** 9ea30178b4ef8453c6f24f037b4b3352ac6d214c7c22f94985428bcb23a178c2

- Melhorar a estabilidade geral.

> **[SD-BS-CJ41G-300-101-F 04/16/2021 01:20:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-F.zip)**

> - **SHA256:** 53711DBF9FB6ABE564BE1C7A870840F8B87CAA42239448869D87C08C1BDF0EC5

>    1. Melhorar a estabilidade geral.

> **[SD-BS-CJ41G-300-101-C 03/11/2021 16:28:07](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-C.zip)**

> - **SHA256:** 12f4ce1ab81008525138fcd7d830e18dc13936f3ce4a51e17c314fc55debe480

>    1. Corrigir bug: carrega em outro sistema operacional diferente do Windows quando configurado para carregar outros.

> **[SD-BS-CJ41G-M-101-K 12/31/2020 20:34:37](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-K.zip)**

> - **SHA256:** 7208d39c4f77a4837a0a1072dce45c7bc8feba28597522ea036778a9c09aa61a

>    1. Adicionado **Secure Boot**.
>    2. Adicionado **Wake on LAN**.
>    3. Corrigir reinicialização para a página de configurações do BIOS em ambiente Linux (por exemplo, `systemctl reboot --firmware-setup`).
>    4. Corrigir problema da luz de Wake on Lan no Linux.

> **[SD-BS-CJ41G-M-101-G 08/31/2020 14:01:20](http://files.seeedstudio.com/wiki/X86-BIOS/SD-BS-CJ41G-M-101-G.zip)**

> **SHA256:** eb932b69435d26a5b076c485c90e4289a697681ac092c18e85c86804e3fe4206

>1. No Menu do BIOS, **Setup** -> **Chipset** -> **Fan Control**, adicionadas opções **Always On**.

>**[SD-BS-CJ41G-M-101-E 01/07/2020 14:03:11](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-M-101-E.zip)**

>**SHA256:** 98bb25d6d32250fb10bf047f5902630b82a8560020fb4336d7723b4dfb3f9df2

>1. Corrigir o problema de exibição incompleta da tela de logo da Seeed na inicialização.

:::note
O BIOS mais recente suporta o **recurso de auto-flash**, no qual você só precisa colocar os arquivos na **localização raiz de um USB em formato FAT32** e **selecionar o pen drive USB como opção de boot**. Ele entrará no processo de gravação automaticamente.
:::

### Passo 1 - Baixar a versão mais recente do BIOS

Baixe a versão mais recente do BIOS a partir [**daqui**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-BS-CJ41G-300-101-H.zip).

### Passo 2 - Preparar o USB bootável

Assim como criar um USB bootável para instalar um sistema operacional, formate o USB no sistema de arquivos `FAT32`. Desta vez, apenas descompacte o arquivo baixado e copie o conteúdo para o USB.

<div align="center"><img width={300} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios-files.png
" /></div>

### Passo 3 - Atualizando o BIOS

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atenção</p>
    <p style={{color: '#000000', fontSize: 14}}>A primeira inicialização após a atualização do BIOS é <b>relativamente longa</b>, por favor seja paciente e espere, o sistema operacional instalado será iniciado eventualmente. Isso levará <b>cerca de 3 ~ 5 minutos</b>.</p>
  </div>
</div>

Conecte o USB ao ODYSSEY - X86J41x5, ligue e siga os passos abaixo:

- Continue pressionando a tecla `F7` para entrar na **tela do Boot Manager**. Selecione `UEFI: Built-in EFI Shell` como dispositivo de boot e pressione `Enter`.

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios1.jpg" /></div>

- Aguarde alguns segundos para entrar no shell EFI

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios2.jpg" /></div>

- Você verá a seguinte mensagem

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios3.jpg" /></div>

- Digite **BIOS.nsh** e pressione **ENTER** para iniciar o processo de atualização

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios4.jpg" /></div>

- Se a atualização do BIOS for bem-sucedida, você verá a seguinte saída

<div align="center"><img width={1000} src="https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/bios5.jpg" /></div>

### Passo 4 - Reiniciar

- Quando o BIOS for atualizado, **pressione o botão ON/OFF**, e você deverá ver a luz azul apagar.

- **Desconecte o conector de energia DC e a bateria RTC** do ODYSSEY-X86.

- Espere alguns minutos

- Conecte novamente a bateria RTC e o conector de energia DC ao ODYSSEY-X86.

- **Pressione o botão ON/OFF e aguarde pacientemente**. Você deverá ver a luz azul acender.

### Passo 5 - Aguarde pacientemente

Por favor, aguarde pacientemente e **NÃO** desligue a energia (ou o hardware) para não corromper o processo de atualização. O processo levará **6 ~ 8 minutos**, sinta-se à vontade para fazer uma pausa para o café!

<div className="tips" style={{display: 'table', tableLayout: 'fixed', backgroundColor: '#F5A9A9', height: 'auto', width: '100%'}}>
  <div className="left-icon" style={{display: 'table-cell', verticalAlign: 'middle', backgroundColor: '#DF0101', paddingTop: 10, boxSizing: 'border-box', height: 'auto', width: 38, textAlign: 'center'}}><img style={{width: 26, verticalAlign: 'middle'}} src="https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg" alt="attention icon" /></div>
  <div className="right-desc" style={{display: 'table-cell', verticalAlign: 'middle', paddingLeft: 15, boxSizing: 'border-box', width: 'calc(95% - 38px)'}}>
    <p style={{color: '#000000', fontWeight: 'bold', marginTop: 10}}>Atenção</p>
    <p style={{color: '#000000', fontSize: 14}}>A primeira inicialização após a atualização do BIOS é <b>relativamente longa</b>, por favor seja paciente e espere, o sistema operacional instalado será iniciado eventualmente. Isso levará <b>cerca de 6 ~ 8 minutos</b>.</p>
  </div>
</div>

## Como atualizar o Controlador Embarcado

O X86 também possui um controlador embarcado que pode ser atualizado. Atualizar o EC segue o mesmo procedimento da atualização de BIOS (atualização automática):

1. Baixe os arquivos de firmware.

2. Salve-os na raiz de um pendrive USB formatado em FAT32.

3. Inicie o ODYSSEY-X86 e pressione **F7** para entrar no **Modo de Seleção de Boot**

4. Escolha o pendrive conectado (se houver 2 opções para o pendrive, escolha a que começa com **UEFI**)

5. Aguarde e o processo de gravação será iniciado automaticamente.

6. Reinicie o dispositivo quando terminar.

<p style={{textAlign: 'center'}}><iframe width={720} height={480} src="https://www.youtube.com/embed/r7M4T-HOZ20" frameBorder={0} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></p>

### Firmware EC mais recente

[**SD-EC-CJ41G-M-101-R 07/26/2022 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-R.zip)

1. **Correção de bug**: Aumenta a estabilidade geral.

>**Histórico de Firmware EC:**

[**SD-EC-CJ41G-M-101-Q 10/12/2021 17:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-Q.zip)

- **SHA256:** 6009005FF61A64A580F0862343CED1E1E8B4DE8625E326510582063D6E20BCE4

1. **Correção de bug**: Aumenta a estabilidade geral.

[**SD-EC-CJ41G-M-101-O 08/16/2021 15:00:00**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-O.zip)

> - **SHA256:** a08605b8b76bda6a50b64e64c4a9b256297d393f7139ffb2525cc93b28556f13

> 1. **Correção de bug**: Aumenta a estabilidade geral.

> [**SD-EC-CJ41G-M-101-M 04/16/2021 01:20:07**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-M.zip)

> - **SHA256:** DB6E1F77D6EB4B9A79DDAF6E7A55052B7BE6E63B8339C7B948FF111E5C9CA8AD

> 1. **Correção de bug**: Aumenta a estabilidade geral.

> [**SD-EC-CJ41G-M-101-K 03/23/2021 10:57:32**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-K.zip)

> - **SHA256:** 5e479185398121b1913ada3cff03264ea1522196b53f34c9ace77bd1f3ecc47e

> 1. **Correção de bug**: Aumenta a estabilidade do firmware EC.

> [**SD-EC-CJ41G-M-101-J 02/02/2021 15:39:11**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-J.zip)

> - **SHA256:** 4ab099f45439f8f6ec14e25ae50a64f878eed4c998e39000e17f2047df6bbb83

> 1. **Correção de bug**: Desligar durante a página de configuração da BIOS faz com que o ODYSSEY precise redefinir a alimentação para ligar novamente.

> [**SD-EC-CJ41G-M-101-I 12/31/2020 20:34:37**](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-I.zip)

> - **SHA256:** 94f664401120183238c5eaa41ea267b240dd5836fa879c568bf3275bca508c52

> 1. Otimiza a lógica de controle do FAN

>**[SD-EC-CJ41G-M-101-C 08/31/2020 14:01:20](https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/Documents/SD-EC-CJ41G-M-101-C.zip)**

>- **SHA256:** 4b7ed82357eb608c3ec00f6f5f0358a35e63b327ae33855eb5e7608814f8df6a

> 1. Otimiza o problema de temperatura incorreta de partida e desligamento do Fan.

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
