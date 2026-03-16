---
description: Este artigo apresenta principalmente como realizar testes funcionais do protocolo bacnet MS/TP no reComputer R1000.
title: reComputer R1000 usa bacnet MS/TP
keywords:
  - Edge
  - reComputer R1000
  - Modbus RTU
  - rs485
image: https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/wirshark_capture.webp
slug: /reComputer_r1000_use_bacnet_mstp
last_update:
  date: 10/25/2024
  author: ShuishengPeng
createdAt: '2024-07-08'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_bacnet_mstp/
---

# reComputer R1000 usa bacnet MS/TP

## Introdução
BACnet MS/TP (Master-Slave/Token Passing) é um protocolo de comunicação para redes de automação e controle predial. Ele faz parte do conjunto de protocolos BACnet (Building Automation and Control Networks). MS/TP geralmente utiliza a camada física RS-485 e topologia em barramento. Todos os dispositivos são conectados ao mesmo cabo de par trançado. Existem estações mestres e estações escravas na rede MS/TP. O mestre é responsável por gerar e entregar o token, enquanto o escravo apenas responde quando uma solicitação é recebida. O dispositivo mestre determina qual dispositivo pode enviar dados passando o token. O mecanismo de passagem de token garante que a comunicação no barramento seja ordenada e livre de conflitos

Este artigo apresenta principalmente como realizar testes funcionais do protocolo bacnet MS/TP no reComputer R1000. Simulamos um servidor bacnet MS/TP no reComputer R1000 e, em seguida, usamos o YABE em um PC com W10 para verificar se o dispositivo está presente. Se o dispositivo que simulamos puder ser encontrado normalmente, isso significa que a comunicação bacnet MS/TP está normal.

## Início Rápido

Antes de iniciar este projeto, talvez você precise preparar o hardware e o software com antecedência, conforme descrito aqui.

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Adquira Agora 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
    </div>

### Software
* Como bacnet MS/TP utiliza a camada física RS485, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_rs485_modbus_rtu/) sobre como usar normalmente a função RS485 no reComputer R1000 V1.0.
* Simulamos um servidor com a ajuda do aplicativo da biblioteca `bacnet-stack`, portanto você precisa inserir o seguinte comando para baixá-lo:
  ```shell
  git clone https://github.com/bacnet-stack/bacnet-stack.git
  cd bacnet-stack
  ```
* Acesse este [link](https://sourceforge.net/projects/yetanotherbacnetexplorer/) e baixe o YABE (Yet Another BACnet Explorer).
* Acesse este [link](https://www.wireshark.org/) e baixe o wireshark.
### Configuração de Hardware

Este teste utiliza um módulo RS485 para USB para conectar o reComputer R1000 e o PC com W10.
<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png" alt="pir" width="700" height="auto" /></div>

## Etapas para testar a função de comunicação bacnet mstp
**Etapa 1**: Baixe `bacnet-stack`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif" /></center>

**Etapa 2**: O número de porta serial padrão de `bacnet-stack` é `/dev/ttyUSB0`. Se o número da porta que você realmente usa não for esse, a comunicação não será possível, portanto você precisa modificar o número da porta. O nome do arquivo que precisa ser modificado é `ports/ linux/rs485.c`. Altere-o para o número da porta que você precisa usar. Eu o alterei para `/dev/ttyAMA30`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif" /></center>

**Etapa 3**: Insira os seguintes comandos para compilar. Os resultados da compilação podem ser vistos no diretório bin.
```shell
make clean
make mstp
# wait
cd bin/
```

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif" /></center>

**Etapa 4**: Execute `bacserv` e use `YABE` para procurar dispositivos simulados. Você pode ver que o dispositivo que simulamos foi encontrado com sucesso.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif" /></center>


**Etapa 5**: Use o wireshark para visualizar mensagens bacnet MS/TP. Você pode ver que o dispositivo que simulamos passa o token. Como não há outros dispositivos no meu barramento, ele continua passando o token.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif" /></center>

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>