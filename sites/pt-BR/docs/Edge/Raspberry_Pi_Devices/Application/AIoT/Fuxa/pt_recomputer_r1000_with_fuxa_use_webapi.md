---
description: Este artigo apresenta principalmente como usar o fuxa para comunicação WebAPI.
title: reComputer R1000 com fuxa para usar WebAPI
keywords:
  - Controlador de Borda
  - reComputer R1000
  - fuxa
  - WebAPI
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fuxa_web_api
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-07-01'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fuxa_web_api/
---

## Introdução 
FUXA é um software de Visualização de Processos baseado na web (SCADA/HMI/Dashboard). Com o FUXA você pode criar visualizações de processos modernas com designs individuais para suas máquinas e exibição de dados em tempo real. Ele suporta Modbus RTU/TCP, protocolo Siemens S7, OPC-UA, BACnet IP, MQTT e outros protocolos. 

[postman](https://www.postman.com/downloads/?utm_source=postman-home) é uma ferramenta de depuração e teste de interface que suporta o protocolo http. Suas principais características são funções poderosas, uso simples e facilidade de uso, sendo frequentemente utilizada para depuração de interface de WebAPI.

Este artigo apresenta principalmente como usar o fuxa para comunicação WebAPI. Nesta fase, o fuxa só suporta a função `GET`, e o pacote de dados está em formato Json. Usaremos a função `GET` do fuxa para obter o datagrama do `postman`.


## Início Rápido

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência conforme descrito aqui.

### Preparação de Hardware

<div class="table-center">
	<table class="table-nobg">
    <tr class="table-trnobg">
      <th class="table-trnobg">reComputer R1000</th>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png" style={{width:300, height:'auto'}}/></div></td>
		</tr>
    <tr class="table-trnobg"></tr>
		<tr class="table-trnobg">
			<td class="table-trnobg"><div class="get_one_now_container" style={{textAlign: 'center'}}><a class="get_one_now_item" href="https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html" target="_blank">
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Preparação de Software

* O Python 3.11 pode ser incompatível com o fuxa. Se a sua versão do Python for 3.11, considere mudar para uma versão diferente do Python.
* Usar [fuxa](https://github.com/frangoteam/FUXA) no reComputer R1000. Você pode consultar as etapas a seguir para instalar o fuxa no reComputer R1000
  ```shell
    ## You need to have installed Node Version 14 || 16 || 18.
    wget https://nodejs.org/dist/v18.20.3/node-v18.20.3-linux-arm64.tar.xz
    tar -xf node-v18.20.3-linux-arm64.tar.xz
    cd node-v18.20.3-linux-arm64
    sudo cp -R * /usr/local/
    node -v
    npm -v
    ## Next install FUXA from npm
    sudo npm install -g --unsafe-perm @frangoteam/fuxa
    sudo fuxa
  ```

## Etapas de comunicação WebAPI
**Etapa 1**: Clique no sinal `+` no canto inferior direito da interface do `fuxa`, insira o `Name`, selecione `WebAPI` para `Type`, selecione `GET` para `Method` e selecione `JSON` para `Format`. Em seguida, insira `https://postman-echo.com/get` em `URL` e, por fim, clique em `OK`. Você pode ver que o fuxa consegue estabelecer com sucesso uma conexão com o `postman`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/connect_webapi.gif" /></center>

**Etapa 2**: Entre na interface de configuração, clique no botão `+` no canto superior esquerdo ou no canto inferior direito, você poderá ver os dados obtidos do `postman` através da função `GET`. Selecionamos cada dado e criamos uma tag, por fim clicamos em `OK`, de modo que os dados do `postman` possam ser lidos em tempo real através da função `GET`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/display_webapi_get_data.gif" /></center>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos diversos canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
