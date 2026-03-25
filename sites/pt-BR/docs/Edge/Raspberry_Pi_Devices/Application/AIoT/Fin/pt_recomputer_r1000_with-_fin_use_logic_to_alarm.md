---
description: Este artigo mostrará como usar o Logic Builder do FIN Framwork
title: reComputer R1000 com FIN Logic Builder
keywords:
  - Controlador de Borda
  - reComputer R1000
  - FIN
  - ModbusTCP
  - LOGIC
image: https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png
slug: /reComputer_r1000_fin_logic_builder
last_update:
  date: 07/16/2024
  author: ShuishengPeng
createdAt: '2024-07-16'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/reComputer_r1000_fin_logic_builder/
---

## Introdução

FIN Framework (FIN) é um framework de software com suítes de aplicativos que podem integrar, controlar, gerenciar, analisar, visualizar e conectar. Seus recursos podem ser integrados por OEMs em uma variedade de produtos e serviços.

Este artigo mostrará como usar o `Logic Builder` do FIN Framwork e implementar um alarme usando o `Logic Builder`. Monitoramos o valor de um dispositivo Modbus. Quando o valor ultrapassar o valor crítico, o FIN irá disparar um alarme.

## Iniciando

Antes de iniciar este projeto, talvez você precise preparar seu hardware e software com antecedência, conforme descrito aqui.

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

* Sobre como instalar o FIN Framwork, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_install_fin/).
- Sobre reComputer R1000 usando FIN para comunicação Modbus, você pode consultar este [wiki](https://wiki.seeedstudio.com/pt-br/reComputer_r1000_use_rs485_modbus_rtu/).
- Usando [modbusmechanic](https://modbusmechanic.scifidryer.com/) em um PC com W10. Você também pode usar outras ferramentas de teste Modbus.

### Configuração de Hardware

Para ModbusTCP, usamos cabos Ethernet para conectar o PC com W10 e o reComputer R1000 a um switch para garantir que eles estejam no mesmo segmento de rede.

<div align="center"><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png" alt="pir" width="500" height="auto" /></div>

## Etapas para implementar um alarme

### Criar um novo programa Logic Builder

**Passo 1**: Primeiro clique na barra de diretório na parte superior para alternar o diretório do sistema para o local de destino desejado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_path_location.png" /></center>

**Passo 2**: Clique em `Logic Builder => new` na interface de configuração, e a seguinte janela pop-up aparecerá:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_create_logic.png" /></center>

Preencha os seguintes parâmetros:

- **Name** - Nome do programa
- **Description** - Descrição do propósito/função do programa
- **Program On** - Usado para especificar em que o programa será executado
- **Points** - Permite escolher pontos do equipamento para usar
- **Tags** - Localiza tags usadas no equipamento ou referências
- **Project Variables** - Se existirem outras variáveis de projeto em outros programas, fornece uma lista de variáveis que podem ser usadas no novo programa que está sendo criado
- **Absolute Points** - Permite adicionar pontos codificados com base em seu id

`Points` pode inserir múltiplos pontos, mas aqui inserimos apenas um. Após preencher as informações, clique em `OK` e clique em `Edit` na janela pop-up à direita para entrar na interface de edição de Logic.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_1.gif" /></center>

### Configurar a lógica em blocos

**Passo 1**: Adicione um bloco `if`. Existem duas maneiras de adicionar blocos na área de trabalho. A primeira é clicar na porta de um bloco para adicioná-lo, como mostrado na figura:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_2.gif" /></center>

A segunda maneira é adicionar por meio da caixa de pesquisa no canto inferior esquerdo, como mostrado na figura:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_3.gif" /></center>

**Passo 2**: Adicione os pontos de dados a serem avaliados. À esquerda, você pode ver os pontos de dados que introduzimos quando criamos o programa Logic Builder. Ele possui duas funções: `get` e `set`. Nossa lógica é determinar se o valor do sensor excede o valor crítico, então escolhemos `get` aqui. Clique em `get` e arraste-o para a área de trabalho, e um bloco `sensor` aparecerá.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_4.gif" /></center>

**Passo 3**: Adicione o bloco `>=`. Precisamos determinar se o valor do sensor excede o valor crítico, então precisamos adicionar um bloco `>=`, que irá fornecer um resultado para o bloco `if`. O bloco `if` determina a próxima ação julgando o resultado do bloco `>=`. Aqui definimos o valor crítico como `23`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_5.gif" /></center>

**Passo 4**: Adicione um bloco de atraso. Às vezes precisamos tornar o sistema mais imune a interferências, podemos adicionar um módulo de atraso, e o alarme só ocorrerá depois que determinada condição for atendida por um certo período de tempo. Definimos o tempo de atraso para 3 s e conectamos a saída do módulo ao bloco `if`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_6.gif" /></center>

**Passo 5**: Crie variáveis. Quando o valor do sensor exceder o valor crítico, podemos definir um flag para marcar o valor do sensor como anormal. Esse flag pode ser implementado criando uma `variable`. `variable` possui os seguintes tipos:

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/Logic_variable_type.png" /></center>

Como mostrado na figura, adicionamos uma variável chamada `Alarm_bool`, que também possui blocos de função `set` e `get`. Conectamos o bloco `set` de `Alarm_bool` após o bloco `if`. Quando o valor do sensor exceder o valor crítico, ele será definido como `True`. Quando o sensor não exceder o valor crítico, ele será definido como `False`.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_7.gif" /></center>

**Passo 6**: Clique em `alarm` na parte superior para entrar na interface de configuração de `alarm`. Digite `alarm` no canto inferior esquerdo para encontrar `alarmBlock` e arraste-o para a área de trabalho. Precisamos selecionar a variável `Alarm_bool` que criamos para `alarmBlock`. Quando a variável `Alarm_bool` for `True`, o alarme será acionado, e quando a variável `Alarm_bool` for `False`, o alarme não será acionado.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_8.gif" /></center>

### Demonstração do alarme

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/fin/LOGIC_9.gif" /></center>

## Suporte Técnico & Discussão sobre o Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
