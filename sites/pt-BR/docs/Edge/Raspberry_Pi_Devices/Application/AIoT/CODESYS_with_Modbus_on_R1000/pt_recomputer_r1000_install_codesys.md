---
description: Este artigo apresenta principalmente como instalar o CODESYS e como implantar novos projetos no R1000
title: Como instalar o CODESYS para o reComputer R1000
keywords:
  - Controlador de Borda
  - reComputer R1000
  - CODESYS
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /recomputer_r1000_install_codesys
last_update:
  date: 10/8/2024
  author: ShuishengPeng
createdAt: '2024-10-09'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_install_codesys/
---

## Introdução

CODESYS é uma plataforma popular de desenvolvimento de software de automação amplamente utilizada em sistemas de controle industrial e automação. Seu nome completo é Controller Development System, que foi desenvolvido inicialmente pela empresa alemã 3S-Smart Software Solutions.
Este artigo apresenta principalmente como baixar e instalar o CODESYS e, por fim, implantar o projeto CODESYS no reComputer R1000

Antes de começar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

## Preparação de Hardware

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
              <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
          </a></div></td>
        </tr>
    </table>
</div>

## Preparação de Software

- [CODESYS Development System V3](https://store.codesys.com/de/codesys.html)
- [CODESYS Control for Raspberry Pi SL](https://store.codesys.com/de/codesys-control-for-raspberry-pi-sl.html)

## Iniciando

### Instalar CODESYS

**Passo 1**: Acesse a loja CODESYS, encontre `CODESYS Development System V3` e faça o download. Em seguida, encontre `CODESYS Control for Raspberry Pi SL` e faça o download.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/1.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/2.png" /></center>

**Passo 2**: Dê um clique duplo no arquivo baixado `CODESYS 64 3.5.20.30.exe` e clique em `install` para baixar o `CODESYS Installer`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/3.png" /></center>

**Passo 3**: Após o download do `CODESYS Installer`, o `InstallShield Wizard` aparecerá automaticamente. Clique em `Next` para começar a instalar o `CODESYS`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/4.png" /></center>

**Passo 4**: Clique para aceitar a licença e depois clique em `Next` para prosseguir para a próxima etapa.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/5.png" /></center]

**Passo 5**: Clique em `I have read the information` e depois clique em `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/6.png" /></center>

**Passo 6**: Modifique o diretório de instalação e clique em `Next` após concluir a modificação.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/7.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/8.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/9.png" /></center>

**Passo 7**: Selecione `Complete` para instalar totalmente o CODESYS e depois clique em `Next`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/10.png" /></center>

**Passo 8**: Clique em `Install` para iniciar a instalação. Isso levará algum tempo; apenas aguarde a conclusão da instalação

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/11.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_codesys/12.png" /></center>

### Atualizar pacotes de dependência

**Passo 1**: Após a conclusão da instalação, abra `CODESYS V3.5 SP20 Patch 3`, clique em `Tools`--->`CODESYS Installer..`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p1.png" /></center>

**Passo 2**: Na nova janela, clique em `Install File(s)`, depois selecione o pacote a ser instalado. Após a seleção, o pacote será analisado

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p2.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p3.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p4.png" /></center>

**Passo 3**: Clique em `I accept the license agreement(s)` e depois clique em `Continue` para iniciar a instalação

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p5.png" /></center>

**Passo 4**: Uma janela pop-up aparecerá pedindo que você feche o `CODESYS V3.5 SP20 Patch 3`. Feche o CODESYS e depois clique em `OK`. O CODESYS começará a instalar o novo pacote.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p6.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p7.png" /></center>

**Passo 5**: Aguarde a conclusão da instalação

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/install_package/p8.png" /></center>

### Implantar o run-time do CODESYS

CODESYS Runtime refere-se ao sistema de tempo de execução do CODESYS, que é o software instalado no dispositivo alvo para executar o programa de CLP criado com o ambiente de desenvolvimento CODESYS. O CODESYS Runtime transforma o dispositivo alvo (como sistemas embarcados, computadores industriais, Raspberry Pi, etc.) em um controlador lógico programável (CLP).

**Passo 1**: Certifique-se de que o reComputer R1000 e o computador host estão no mesmo segmento de rede

**Passo 2**: Clique em `Tools`--->`Update Raspberry Pi`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r1.png" /></center>

**Passo 3**: Insira o nome de usuário e a senha do reComputer R1000, o endereço IP, depois clique em Install para baixar o `run time` para o reComputer R1000 e, por fim, clique em `Start` para iniciar o `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r2.png" /></center>

**Passo 4**: Quando a seguinte mensagem aparecer na barra de mensagens, isso significa que o reComputer R1000 executou com sucesso o `run time`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_run_time/r3.png" /></center>

### Implantar um novo projeto

**Passo 1**: Clique em `File`--->`New project` para criar um novo projeto

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n1.png" /></center>

**Passo 2**: Insira o nome do projeto, selecione `Project`--->`Standard project` e, por fim, clique em `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n2.png" /></center>

**Passo 3**: Selecione `CODESYS Control for Raspberry Pi 64 SL (CODESYS)` na coluna `Device`, selecione `Structured Text (ST)` em `PLC_PRG in` e, por fim, clique em `OK`. Um novo projeto será criado. Mais tarde, demonstraremos como implantar o projeto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n3.png" /></center>

**Passo 4**: Após criar o projeto, dê um clique duplo nele. Na nova janela pop-up, clique em `Scan Network`, que pode localizar o reComputer R1000 no mesmo segmento de rede.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n4.png" /></center>

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n5.png" /></center>

**Passo 5**: Selecione o R1000 e clique em `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n6.png" /></center>

**Passo 6**: Na janela `Add Device User`, preencha o nome de usuário e a senha do reComputer R1000 e, por fim, clique em `OK`

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n7.png" /></center>

**Passo 7**: Em seguida, a janela `Device User Login` aparecerá; preencha novamente o nome de usuário e a senha do reComputer R1000 e, por fim, clique em OK

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n8.png" /></center>

**Passo 8**: Após a conexão ser bem-sucedida, você poderá ver que todas as luzes de status estão verdes

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n9.png" /></center>

**Passo 9**: Clique no botão Deploy na barra de ferramentas, como mostrado, para compilar e implantar o projeto atual no reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n10.png" /></center>

**Passo 10**: Clique no botão Start na barra de ferramentas para iniciar o projeto atual no reComputer R1000

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/CODESYS/deploy_new_project/n11.png" /></center>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
