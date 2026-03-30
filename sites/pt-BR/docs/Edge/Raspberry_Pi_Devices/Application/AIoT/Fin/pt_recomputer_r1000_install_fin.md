---
description: Este artigo apresenta principalmente como instalar o FIN para o reComputer R1000
title: Instalar FIN no reComputer R1000
keywords:
  - Controlador de Borda
  - reComputer R1000
  - fuxa
  - fin
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_install_fin
last_update:
  date: 07/4/2024
  author: ShuishengPeng
createdAt: '2024-07-04'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_fin/
---

## Introdução 
O FIN Framework (FIN) é um framework de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma variedade de produtos e serviços.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/FIN_framework.png" /></center>


Este artigo apresenta principalmente como instalar o FIN no reComputer R1000.

## Primeiros Passos

Antes de iniciar este projeto, você pode precisar preparar seu hardware e software com antecedência, conforme descrito aqui.

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

### Preparação de Software

* Primeiro, você precisa entrar em contato com o seu fornecedor para obter o pacote de instalação do FIN e o arquivo de licença.
* Depois disso, escreva um arquivo chamado `fin.service`, que será usado para iniciar o serviço FIN no sistema. Se o seu pacote de instalação for um arquivo zip, o conteúdo do arquivo `fin.service` será o seguinte:
  ```shell
  [Unit]
  Description=FIN Framework
  After=syslog.target network.target
  StartLimitIntervalSec=0

  [Service]
  Type=simple
  Restart=always
  RestartSec=1
  WorkingDirectory=/opt/finFramework_5.1.6.55
  ExecStart=/usr/bin/java -Xmx512M -cp /opt/finFramework_5.1.6.55/lib/java/sys.jar -Dfan.home=/opt/finFramework_5.1.6.55/ fanx.tools.Fan finStackHost

  [Install]
  WantedBy=multi-user.target

  #systemctl daemon-reload
  #systemctl enable fin
  #systemctl start fin
  ```

## Etapas de instalação
**Passo 1**: Insira o seguinte comando para instalar o FIN:
  ```shell
  sudo apt install openjdk-17-jdk
  cd /opt/
  ## Unzip the installation package to the /opt directory
  sudo unzip ~/Desktop/FINFramework_5.1.6.55.zip
  ## Change the name so you can know the version number
  sudo mv finFramework finFramework_5.1.6.55
  ## Import service files to system
  sudo cp ~/Desktop/fin.service /etc/systemd/system/
  sudo systemctl daemon-reload
  sudo systemctl enable fin
  sudo systemctl start fin
  sudo reboot
  ```
  <center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/install_fin.gif" /></center>

**Passo 2**: Após reiniciar, clique no navegador e digite `http://localhost:8080/`. A interface a seguir aparecerá, indicando que a primeira etapa da instalação foi bem-sucedida.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/login.png" /></center>

**Passo 3**: O nome de usuário e a senha iniciais são ambos `su`. Clique no botão de login para entrar. Após um login bem-sucedido, será solicitado que você redefina sua senha.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/change_passwd.gif" /></center>

**Passo 4**: Após o login, o sistema pode informar que não há arquivo de licença. Nesse momento, você precisa importar o arquivo de licença.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/add_license.gif" /></center>


Depois disso, você pode explorar as várias funções do `FIN`.

## Suporte Técnico e Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
