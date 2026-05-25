---
description: Neste tutorial, vamos guiá-lo na instalação do Grafana em um reComputer R1000 com Raspberry Pi. Também mostraremos como conectar o Grafana a um banco de dados InfluxDB existente e criar um dashboard detalhado e ilustrativo
title: reComputer R1000 com Grafana
keywords:
  - reComputer R1000
  - IIoT
  - Grafana
  - Dash board
  - SCADA
image: https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif
slug: /recomputer_r1000_grafana
last_update:
  date: 6/24/2024
  author: Kasun Thushara
createdAt: '2024-06-24'
updatedAt: '2026-03-20'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_grafana/
---
## Introdução

[Grafana](https://grafana.com/oss/grafana/) é um software de visualização e análise de código aberto que permite consultar, visualizar, configurar alertas e explorar suas métricas, logs e traces de qualquer local de armazenamento. Ele oferece ferramentas para transformar os dados do seu banco de dados de séries temporais (TSDB) em gráficos e visualizações esclarecedoras. Como uma solução de monitoramento poderosa, o Grafana ajuda a tomar decisões informadas, aprimorar o desempenho do sistema e simplificar a solução de problemas. Neste wiki, vamos guiá-lo pela instalação do Grafana em um reComputer R1000 com Raspberry Pi, conectá-lo a um banco de dados InfluxDB existente e criar um dashboard ilustrativo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana2.gif" /></center>

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

Recomenda-se consultar o tutorial anterior sobre [How to create the InfluxDB database](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_node_red_influxdb/). Neste tutorial, usaremos uma conexão InfluxDB existente para a configuração.

## Adicionando o Repositório do Grafana


**Certifique-se de que todos os pacotes atualmente instalados no seu Raspberry Pi OS estejam atualizados**:

```bash
sudo apt update
```

**Adicione a Chave APT do Grafana:**

Para adicionar a chave APT do Grafana ao keychain do seu Raspberry Pi, execute o seguinte comando:

```bash
curl https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /usr/share/keyrings/grafana-archive-keyrings.gpg >/dev/null
```

**Adicione o Repositório do Grafana:**

Use o seguinte comando no seu Raspberry Pi para adicionar o repositório do Grafana à lista:

```bash
echo "deb [signed-by=/usr/share/keyrings/grafana-archive-keyrings.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
```

**Atualize a Lista de Pacotes:**

Como fizemos alterações na nossa lista de pacotes, precisamos executar uma atualização:

```bash
sudo apt update
```

## Instalando o Grafana no reComputer R1000

Instale a versão mais recente do Grafana executando o seguinte comando:

```bash
sudo apt install grafana
```

**Configurando o Grafana para Iniciar na Inicialização**

Habilite o Grafana para iniciar na inicialização:

```bash
sudo systemctl enable grafana-server
```

**Iniciando o Grafana**

Inicie o servidor Grafana executando o comando abaixo:

```bash
sudo systemctl start grafana-server
```

**Acessando o Grafana**

Para acessar a interface web do Grafana, abra um navegador e navegue até:

```
http://<IPADDRESS>:3000
```

Substitua `<IPADDRESS>` pelo endereço IP do seu reComputer R1000 RPi 200.

**Fazendo Login**

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/login.PNG" /></center>

O nome de usuário e a senha padrão são:

- **Username:** `admin`
- **Password:** `admin`

Depois de fazer login, será solicitado que você altere a senha padrão.



<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/updatepsw.PNG" /></center>

## Crie Seu Primeiro Dashboard

**Navegue até Dashboards:**

Clique em **Dashboards** no menu lateral esquerdo.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard1.PNG" /></center>

**Crie um Novo Dashboard:**

Na página Dashboards, clique em **New** e selecione **New Dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard2.PNG" /></center>

**Adicione uma Visualização:**

No dashboard, clique em **+ Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**Selecione a Fonte de Dados:**

Você será redirecionado para selecionar uma fonte de dados. No último tutorial, criamos um banco de dados InfluxDB. Clique em **Configure a new data source**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource.PNG" /></center>

**Configure o InfluxDB:**

   - Selecione **InfluxDB** em bancos de dados de séries temporais.
<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/addsource.PNG" /></center>

   - Forneça a **URL**, o **nome do banco de dados** e os **privilégios do usuário**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/configuresource2.PNG" /></center>

   - Clique em **Save & Test**. Se não houver avisos, está tudo pronto.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest.PNG" /></center>


**Construa Seu Dashboard:**

Você verá uma mensagem confirmando a configuração da fonte de dados. Clique em **Building a dashboard**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/saveandtest2.png" /></center>

**Adicionar Visualização:**

Você será redirecionado para a nova página do dashboard. Clique em **Add visualization**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/dashboard3.PNG" /></center>

**Selecione a Fonte de Dados:**

Você será redirecionado para selecionar uma fonte de dados. nós criamos uma conexão de banco de dados InfluxDB. Clique em **InfluxDB**.

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/datasource.PNG" /></center>

**Configurar Visualização**

O Grafana fornece uma interface amigável para selecionar medições, campos e outros pontos de dados relevantes. Vamos criar uma visualização de série temporal. No lado esquerdo, você verá opções para inserir o título do painel, legendas, configurações de eixos e configurações do gráfico.
Preste atenção aos seguintes elementos visuais para adicionar um gráfico simples ao seu primeiro dashboard.
Para configurações e personalizações mais detalhadas, consulte a [documentação do Grafana](https://grafana.com/docs/grafana/latest/panels-visualizations/visualizations/).

<center><img width={600} src="https://files.seeedstudio.com/wiki/reComputer-R1000/grafana/grafana.gif" /></center>

## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
