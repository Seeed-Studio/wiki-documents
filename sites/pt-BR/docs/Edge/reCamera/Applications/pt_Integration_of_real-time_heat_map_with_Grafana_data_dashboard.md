---
description: Use reCamera to achieve real-time heat map + local blur processing + Grafana data dashboard integration
title: Integração de mapa de calor em tempo real com painel de dados Grafana
keywords:
  - reCamera
  - heatmap
  - Grafana
  - InfluxDB
image: https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif
slug: /integration_of_real-time_heat_map_with_grafana_data_dashboard
sidebar_position: 10
last_update:
  date: 12/21/2025
  author: Xinrui Wu
createdAt: '2025-12-22'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/integration_of_real-time_heat_map_with_grafana_data_dashboard/
---

# Integração de mapa de calor em tempo real com painel de dados Grafana

## Introdução

Este projeto realiza detecção de alvos usando o modelo YOLO11n incorporado na reCamera. Ele executa processamento de desfoque em alvos de pessoas e exibe um efeito de mapa de calor. Tudo isso é processado localmente dentro da reCamera! E a reCamera enviará os dados detectados para o banco de dados Influxdb em execução localmente. Em seguida, o Grafana lê os dados do banco de dados Influxdb para exibir painéis de dados em tempo real.

A seguir está o efeito de uso após concluir este exemplo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/headmap.gif" /></div>

## Preparação de hardware

Uma reCamera
um computador

<table align="center">
 <tr>
  <th>Série reCamera 2002</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ POE</th>
 </tr>
 <tr>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/></div></td>
  <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/></div></td>
 </tr>
 <tr>
  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

  <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
   <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
    <strong><span><font color={'FFFFFF'} size={"4"}> Get One Now 🖱️</font></span></strong>
   </a>
  </div></td>

 </tr>
</table>

## 1.Configuração do InfluxDB

### 1.1 Baixar o InfluxDB2-2.1.1 e iniciar

Acesse o [link](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-windows-amd64.zip) de download, baixe e extraia. Pressione Win + R para abrir o Prompt de Comando, depois entre no diretório onde o arquivo foi extraído e, por fim, digite:

```bash
influxd
```

Conforme mostrado na figura a seguir, a inicialização foi bem-sucedida

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_1.png" /></div>

Se o seu dispositivo for de arquitetura ARM executando um sistema Linux, como um Raspberry Pi, o link para download está [aqui](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-arm64.tar.gz).  

Se o seu dispositivo for de arquitetura AMD executando um sistema Linux, clique [aqui](https://dl.influxdata.com/influxdb/releases/influxdb2-2.1.1-linux-amd64.tar.gz) para fazer o download.

A inicialização do dispositivo Linux para o InfluxDB segue o mesmo procedimento. Entre no diretório após a descompactação e execute:

```bash
./influxd
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_86.png" /></div>

### 1.2 Acessar a página local do InfluxDB para configuração

Em seguida, abra um terminal cmd e insira o seguinte comando para consultar o IP do seu computador

```bash
ipconfig
```

Depois insira o IP obtido no navegador, em seguida adicione a porta 8086 para entrar na interface principal do InfluxDB.

Por exemplo, meu IP é 192.168.7.183, então digite 192.168.7.183:8086 no navegador

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_2.png" /></div>

Em seguida, clique em "Get Started" e preencha suas próprias informações. Observe que, nesta etapa, certifique-se de lembrar o nome de usuário e a senha que você definiu!!

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_3.png" /></div>

Depois clique em "Confgure Later"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_4.png" /></div>

Em seguida, clique em Data para ver o "Initial Bucket Name" que acabamos de definir na etapa de preenchimento de nossas próprias informações. Eu preenchi reCamera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_5.png" /></div>

Depois clique em Setting para definir o tempo de retenção dos dados

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_6.png" /></div>

Clique em API Token para ver o Token do seu banco de dados, que será usado na configuração posterior da reCamera e na configuração da página web do mapa de calor.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_7.png" /></div>

## 2.Configuração da reCamera

### 2.1 Conectar a reCamera a um dispositivo Linux (Se você não estiver usando um dispositivo Linux, prossiga para a próxima etapa e comece a partir da etapa 2.2)

Se você planeja conectar a reCamera a um dispositivo Linux, sugiro que primeiro use um computador Windows ou Mac para se conectar à reCamera e fazer algumas alterações de configuração. Caso contrário, a reCamera não conseguirá se conectar diretamente ao dispositivo Linux.

Tomando o Windows como exemplo. Digite 192.168.42.1 no navegador e depois clique em "setting"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_87.png" /></div>

Em seguida, clique em "Terminal" e insira o nome de conta "recamera" e sua senha.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_88.png" /></div>

Depois execute isso no terminal da recamera (esta etapa exigirá que você insira a senha novamente):

```bash
sudo rootfs_rw on
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_89.png" /></div>

Em seguida, execute:

```bash
sudo vi /mnt/system/usb-ncm.sh
```

Depois comente esta linha (primeiro pressione a tecla "I" no teclado para entrar no modo de escrita, depois use as teclas de direção para chegar a esta linha e adicione um "#" no início). /etc/run_usb.sh probe acm >> /tmp/ncm.log 2>&1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_90.png" /></div>

Depois é só salvar e sair (pressione a tecla ESC no teclado para sair do modo de escrita e depois digite ":wq" para salvar e sair).

:::note
Isso pode deixar de fazer efeito após várias reinicializações e precisa ser redefinido.
:::

### 2.2 Instalar programas das plataformas SenseCraft na reCamera

Acesse a [plataforma SenseCraft](https://sensecraft.seeed.cc/ai/home) - Application - caixa de pesquisa e digite "Real-time Crowd Heatmap" para pesquisar, encontre o aplicativo chamado "Real-time Crowd Heatmap" e faça o deploy dele para a sua reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_92.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_9.png" /></div>

### 2.3 conectar à rede e instalar o node ausente

Depois de entrar no workspace, este aviso aparecerá. Isso é normal. Clique em Close primeiro. Mais tarde precisaremos instalar um node para a reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_10.png" /></div>

Conecte a reCamera à rede (certifique-se de que ela esteja conectada à mesma rede que o seu computador!! Isso será muito importante depois)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_11.png" /></div>

Depois instale o node-red-contrib-influxdb na reCamera.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_12.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_13.png" /></div>

Em seguida, preencha node-red-contrib-influxdb na caixa de pesquisa, e a primeira versão 0.7.0 é o node de que precisamos. Clique em Install

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_14.png" /></div>

A instalação leva bastante tempo, aguarde pacientemente; após a instalação bem-sucedida, será exibido o seguinte

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_15.png" /></div>

### 2.4 Configurar o Node InfluxDB

Neste momento, também precisamos adicionar algumas informações de configuração ao node chamado Write Person Count para encontrar este node.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_16.png" /></div>

Clique duas vezes para abrir o painel de configuração e depois clique no pequeno ícone de lápis atrás de server  

:::note
Antes disso, lembre-se de que o conteúdo nas opções "Organization" e "Bucket" abaixo do pequeno lápis deve ser o mesmo que você configurou no InfluxDB!!! "Organization" é seu nome de usuário no InfluxDB e "Bucket" é o nome do banco de dados que você criou.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_17.png" /></div>

Após clicar no pequeno lápis, precisamos preencher o URL e o Token

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_18.png" /></div>

O URL aqui é para preencher o link da página web do InfluxDB que acessamos na primeira etapa. Por exemplo, se sua página web for 192.168.7.183:8086, então você pode preencher `http://192.168.7.183:8086` como o URL.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_19.png" /></div>

Depois preencha o Token, que é o API Tokens na página web do InfluxDB de que falamos no início.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_20.png" /></div>

Clicamos em Copy to Cilpboard e preenchemos o Token copiado na configuração.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_21.png" /></div>

Depois de preencher, clique em Update no canto superior direito. Não altere outras configurações.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_22.png" /></div>

Em seguida, clicamos em deployment no canto superior direito para fazer com que a alteração feita agora entre em vigor. Haverá uma janela de aviso pop-up e podemos fechá-la.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_23.png" /></div>

### 2.5 Visualizar dados do InfluxDB

Neste ponto podemos entrar na interface do InfluxDB para ver se os dados aparecem; se der certo, clique em Submit, você verá o gráfico de linha dos dados, aqui consultamos a quantidade de dados.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_24.png" /></div>

## 3.Configuração do Grafana

### 3.1 Instalação do Grafana

#### 3.1.1 Sistema Windows

Acesse o site oficial do Grafana [Grafana get started | Cloud, Self-managed, Enterprise](https://grafana.com/get/) para baixar o pacote de instalação localmente. A versão que baixei aqui é a 12.3.0

:::note
Lembre-se, o Grafana deve ser instalado na unidade C!!! Caso contrário, você não poderá modificar seu arquivo de configuração depois.
:::

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_25.png" /></div>

Depois de baixar e instalar, o Grafana deve ser executado automaticamente em segundo plano; você pode abrir o "serviço" do computador para ver se ele está em execução.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_26.png" /></div>

#### 3.1.2 Sistema Linux

Se o seu dispositivo for um dispositivo baseado em ARM executando Linux, como um Raspberry Pi, então o link para download está [aqui](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_arm64.tar.gz)  

Se o seu dispositivo for um dispositivo baseado em AMD executando o sistema Linux, faça o download pelo link [aqui](https://dl.grafana.com/grafana/release/12.3.0/grafana_12.3.0_19497075765_linux_amd64.tar.gz)

Em seguida, descompacte o arquivo tar.gz que você baixou.

### 3.2 Modificar defaults.ini para permitir que o Grafana incorpore HTML

#### 3.2.1 Sistema Windows

Vá até o diretório "grafana/conf", localize o arquivo "defaults.ini" e clique com o botão direito para abri-lo com o Bloco de Notas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_80.png" /></div>

Pressione Ctrl + F, procure por "disable_sanitize_html", altere o original "disable_sanitize_html = false" para "disable_sanitize_html = true" para permitir que o Grafana incorpore html. Após fazer a modificação, salve e saia.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_81.png" /></div>

#### 3.2.2 Sistema Linux

Para o sistema Linux, o defaults.ini também está localizado no diretório conf.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_82.png" /></div>

Clique com o botão direito e selecione abrir com um aplicativo semelhante ao Bloco de Notas. Em seguida, encontre esta frase na imagem e altere o original "false" para "true".

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_83.png" /></div>

### 3.3 Iniciar o Grafana

Para o sistema Windows, se você instalou o Grafana, só precisa verificar na seção "Services" se o Grafana está em execução, conforme descrito na Etapa 3.1.1. Geralmente, o Grafana será iniciado automaticamente após a instalação.  

Para o sistema Linux, o Grafana precisa ser iniciado manualmente. Após entrar no diretório do arquivo grafana descompactado, execute o seguinte comando:

```bash
./bin/grafana-server
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_84.png" /></div>

### 3.4 Definir fonte de dados

Depois de confirmar que o Grafana está em execução, neste ponto você pode acessar a interface local do Grafana visitando `http://localhost:3000` no navegador para fazer a configuração. Primeiro, você precisa fazer login. O nome de usuário e a senha iniciais são ambos admin. Após o login, o sistema solicitará que você altere sua nova senha. Lembre-se da sua senha. A conta ainda será admin e não mudará.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_91.png" /></div>

Após fazer login, clicamos em "Data sources" no lado esquerdo e, em seguida, selecionamos "Add new data source"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_76.png" /></div>

Em seguida, selecione "InfluxDB"

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_77.png" /></div>

Em seguida, você precisa fazer as seguintes seis revisões:
(1) "Query language" selecionado como "Flux"
(2) Digite o URL da página web do seu banco de dados, que é o link para a página web do InfluxDB que você acessou na primeira etapa. Por exemplo, se o endereço da sua página web for 192.168.7.183:8086, então o URL que você deve preencher é `http://192.168.7.183:8086`.
(3) Desative a opção "Basic auth"
(4) "Organization" deve ser preenchido com o nome de usuário que você usou ao registrar o banco de dados.
(5) Token deve ser preenchido com o API Tokens mencionado na página web do InfluxDB, como discutimos na etapa 2.3.
(6) "Default Bucket" deve ser preenchido com o nome do banco de dados que você criou.  

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_85.png" /></div>

Quando tudo estiver pronto, clique em "Save & Test". Se o teste for bem-sucedido, será exibido "datasource is working". Neste ponto, você pode prosseguir diretamente para a próxima etapa. Essas configurações serão salvas automaticamente.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_79.png" /></div>

### 3.5 Importar Dashboard

Clique em Dashboards

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_27.png" /></div>

Em seguida, clique em New dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_28.png" /></div>

Selecione Import dashboard

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_29.png" /></div>

Baixe o projeto que enviei para o [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git). Depois de baixá-lo e extraí-lo, localize o "Grafana Json File" contendo "reCamera Heatmap-1766213863140.json" nele. Este arquivo é o que precisamos importar para o Grafana.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_30.png" /></div>

Após a importação, você deverá conseguir ver o seguinte efeito (se você não vir a tela a seguir, vá para a seção de FAQ no final do artigo, onde haverá uma solução)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_31.png" /></div>

## 4. Uso do software de calibração em Python

Lembre-se de primeiro baixar meu projeto no [GitHub](https://github.com/xr686/reCamera-with-Heatmap.git). Depois de extraí-lo e abri-lo, localize a pasta chamada "Heatmap area calibration", que contém três arquivos: calibration_tool.py é o programa de calibração, R1.jpg é a imagem original capturada pela reCamera e R2.png é a planta baixa do cômodo que eu desenhei.

### 4.1 Obter uma imagem atual com resolução nativa da reCamera

Obter a imagem de resolução original é importante!! Embora as etapas sejam mais trabalhosas, isso afeta diretamente a precisão de posicionamento do mapa de calor! Por favor, tenha paciência com a operação!

#### 4.1.1 Usar a reCamera para tirar fotos

Volte para a interface do workspace da reCamera e pare primeiro o programa

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_32.png" /></div>

Em seguida, encontre o nó capture à esquerda, arraste-o para trás do nó camera e conecte-os com linhas

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_33.png" /></div>

Depois, clique duas vezes para abrir o nó capture, modifique as duas opções a seguir (a função deste nó é tirar uma foto a cada 2s e armazená-la localmente na reCamera), então clique em Finish e faça o deploy novamente, e clique em Run. Depois de rodar por três ou quatro segundos, clique em Stop Running (não precisa rodar o tempo todo, caso contrário ficará tirando fotos o tempo todo). Em seguida, moveremos as fotos tiradas para o computador local.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_34.png" /></div>

#### 4.1.2 Transplantar as fotos tiradas pela reCamera para o nosso computador

Vamos ver se a foto que acabamos de tirar foi feita com sucesso.

Clique em Setting

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_35.png" /></div>

Clique em Terminal e digite a senha da conta da reCamera para fazer login.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_36.png" /></div>

Em seguida, insira os dois comandos a seguir, na ordem:

Entrar na pasta Images

```bash
cd / && cd userdata/Images/
```

Listar arquivos

```bash
ls
```

Então você deverá ver que o sistema lista alguns nomes de arquivos de imagem, que são as fotos recém‑tiradas pelo nó de captura.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_37.png" /></div>

Volte para a interface de configuração de agora há pouco e abra a conexão ssh.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_38.png" /></div>

Em seguida, pressione Win R no teclado, digite cmd e, então, digite no terminal

```bash
scp -r recamera@<reCamera IP>:/userdata/Images "The folder path of the 'Heatmap area calibration' file that you downloaded from GitHub after decompression"
```

A reCamera desses IPs pode ser encontrada nas configurações de rede

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_39.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_40.png" /></div>

O caminho da pasta do arquivo 'Heatmap area calibration' que você baixou do GitHub após a descompactação; primeiro entramos em Heatmap area calibration, clicamos na caixa de caminho acima da pasta e copiamos o caminho.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_41.png" /></div>

Por exemplo:

```bash
scp -r recamera@10.228.172.71:/userdata/Images "C:\Users\seeed\Desktop\热力图\正式版\reCamera with Heatmap\Heatmap area calibration"
```

Em seguida, digite a senha da reCamera para fazer o download para o caminho de sua escolha

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_42.png" /></div>

Volte para a pasta que você acabou de baixar e você verá a pasta Images que acabou de baixar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_43.png" /></div>

Agora exclua o R1.jpg original do meu projeto.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_44.png" /></div>

Escolhemos a foto mais recente, geralmente a última, e a renomeamos para R1

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_45.png" /></div>

Depois coloque esta imagem no diretório superior.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_46.png" /></div>

### 4.2 preparar a planta do ambiente

Você pode usar as ferramentas de desenho próprias do Windows para desenhar, salvar como imagem e armazená‑la no caminho Heatmap area calibration, ou armazenar diretamente a sua planta existente do ambiente nesse mesmo caminho Heatmap area calibration. Nesta etapa, você também deve se lembrar de excluir o R2.png do meu projeto anterior e renomear sua imagem para R2 e armazená‑la nesse caminho.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_47.png" /></div>

### 4.3 Uso do procedimento de calibração

O programa de calibração é o programa calibration_tool.py do Heatmap sob o caminho area calibration.

Eu uso o Pycharm aqui por padrão. Antes de usá‑lo, preciso instalar a biblioteca OpenCV do Python.

```bash
pip install opencv-python
```

Há dois pontos a observar: primeiro, as duas imagens precisam estar sob o mesmo caminho, ou seja, sob o caminho Heatmap area calibration; em segundo lugar, verifique se o nome do arquivo de imagem está correto

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_48.png" /></div>

Após a execução do programa, uma janela irá aparecer para exibir a captura da sua câmera. Nesse momento, você precisa clicar na área efetiva com o mouse. A sequência de cliques é muito importante: clique nos quatro cantos da área que você deseja selecionar na sequência no sentido horário de "superior esquerdo -> superior direito -> inferior direito -> inferior esquerdo". Por exemplo, se você quiser exibir apenas a superfície da mesa, clique nos quatro cantos da mesa. Após marcar 4 pontos, pressione qualquer tecla no teclado (como barra de espaço) para entrar na próxima etapa.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_49.png" /></div>

Em seguida, uma segunda janela aparecerá para exibir o seu mapa de visão superior R2.png. A sequência de cliques deve corresponder à primeira etapa: clique nas posições correspondentes dos quatro pontos no mapa de agora há pouco. Por exemplo, o canto superior esquerdo da mesa foi clicado primeiro há pouco; agora, no mapa, clique no canto superior esquerdo da mesa. Após marcar 4 pontos, pressione qualquer tecla para finalizar.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_50.png" /></div>

Depois volte para a janela de linha de comando (CMD), você verá que o script gera automaticamente um trecho de código JS; basta copiar esse código e substituir no seu index.html o `const CALIBRATION = { ... };`. É isso. (Ele só será usado na próxima etapa, "5.5 the calibrated coordinate data", então, por enquanto, ignore‑o)

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_51.png" /></div>

## 5. Configuração da página do mapa de calor

A configuração web para o heatmap também está disponível em [my GitHub project](https://github.com/xr686/reCamera-with-Heatmap.git), especificamente na pasta heatmap-demo, no arquivo index.html. Também precisamos modificar várias seções nesse arquivo; caso contrário, ele não conseguirá ser executado corretamente nem receber os dados de coordenadas do mapa de calor.

### 5.1 Configuração de parâmetros da página web para o mapa de calor

#### 5.1.1 Imagem do mapa de calor

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_52.png" /></div>

Substitua pelo nome de arquivo da sua imagem real

#### 5.1.2 Configuração da parte de banco de dados

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_53.png" /></div>

##### Explicação dos parâmetros

URL é o endereço web do InfluxDB que você abriu.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_54.png" /></div>

ORG é o nome de usuário quando você configura o InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_55.png" /></div>

BUCKET é o nome do banco de dados que você criou no InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_56.png" /></div>

TOKEN é o seu InfluxDB API Tokens, substitua o 12345678 original no HTML pelo seu Token real

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_57.png" /></div>

#### 5.1.3 Intervalo de atualização dos dados térmicos e período de consulta

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_58.png" /></div>

##### Explicação dos parâmetros

REFRESH_INTERVAL refere‑se ao número de milissegundos para atualizar, DATA_RANGE refere‑se ao tempo de consulta nos dados passados. Os valores padrão "3000" e "-3s" no código, onde "3000" significa 3000 milissegundos, ou seja, atualiza a cada 3 segundos, enquanto "-3s" significa consultar os dados de coordenadas térmicas dos últimos 3s.

##### Seleção de modo

Existem dois modos que podem ser configurados:

(1) "modo em tempo real": as coordenadas térmicas serão atualizadas e limparão as coordenadas anteriores em tempo real, sem sobreposição cumulativa. Para realizar o modo em tempo real, você precisa definir o DATA_RANGE para um tempo curto. Por exemplo, meus valores padrão "-3s" e "-3s" significam consultar os dados de coordenadas térmicas dos últimos 3s; por exemplo, o programa está em execução há 10s agora, então, quando você configura o DATA_RANGE para -3s, os dados de coordenadas exibidos pelo diagrama térmico são os dados do 8º ao 10º segundo, e os dados de coordenadas dos 1‑7s anteriores não serão exibidos;

(2) "modo cumulativo": as coordenadas térmicas serão atualizadas em tempo real, mas as coordenadas anteriores serão sobrepostas. Para realizar o modo cumulativo, você precisa definir o DATA_RANGE para um tempo mais longo; por exemplo, você pode definir o DATA_RANGE para "-1h", então o diagrama térmico exibirá cumulativamente os dados da última 1h. Depois que o programa estiver em execução por 2 horas, agora serão exibidos os dados da segunda hora, e os dados da primeira hora não serão exibidos.

#### 5.1.4 Resolução da câmera

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_59.png" /></div>

##### Explicação dos parâmetros

CAM_WIDTH / CAM_HEIGHT: A resolução do streaming real da câmera (por exemplo, 1920x1080 ou 1280x720) deve ser preenchida aqui, caso contrário, a transformação de perspectiva estará incorreta.

Este parâmetro também é apresentado na etapa de "4.1.1 using reCamera to take photos". Quando conectamos o nó da câmera ao nó de captura, você pode visualizar o parâmetro Resolution do nó da câmera. Este é o parâmetro de resolução que você precisa modificar. Se 1920 × 1080 for selecionado aqui, então, no código, você deve modificar CAM WIDTH para 1920 e CAM HEIGHT para 1080

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_60.png" /></div>

#### 5.1.5 Dados de coordenadas da calibração

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_61.png" /></div>

Este é o código gerado no console após a execução do programa Python na etapa anterior "uso do programa de calibração 4.3". substitua este código

#### 5.1.6 Limite Térmico

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_62.png" /></div>

##### Explicação dos parâmetros

Sensibilidade (valor máximo): Se estiver no modo em tempo real (apenas alguns pontos), o valor máximo deve ser definido em cerca de 2, caso contrário a cor ficará muito clara para enxergar;

Se for um acúmulo de 1 hora (milhares de pontos), o valor máximo deve ser definido como 150 ou mais, caso contrário o mapa ficará instantaneamente vermelho (superexposto).

### 5.2 Ativar o mapa de calor

Pressione Win + R, digite "cmd", entre no caminho "heatmap-demo" e depois insira

```bash
python -m http.server 8080
```

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_72.png" /></div>

Em seguida, abrindo a página da web "[InfluxDB Heatmap (Grafana Fix + 1h Accumulation)](http://localhost:8080/index.html)" no navegador, você poderá ver que o mapa foi carregado.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_73.png" /></div>

Esta etapa também é aplicável ao Linux.

## 6. Voltar ao painel do Grafana e ver o resultado final

Neste ponto, você deverá conseguir ver a seguinte exibição no painel do Grafana. Se encontrar algum problema, consulte a seção "Perguntas Frequentes" no final do artigo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_74.png" /></div>

## Perguntas Frequentes

### Falha ao abrir a página da web do Grafana

Depois de entrar em "Services", encontre "Grafana", clique com o botão direito e selecione "Restart". Depois disso, basta abrir novamente `http://localhost:3000`.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_75.png" /></div>

### O painel do Grafana foi carregado incorretamente

Se for constatado no Grafana que o mapa térmico em tempo real ou a tela em tempo real da reCamera não pode ser carregada ou é exibida incorretamente, então você precisa clicar no painel com problemas para atualizá-lo, tomando o painel do mapa térmico como exemplo:

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_63.png" /></div>

Em seguida, clique em Refresh

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_64.png" /></div>

### Há um problema ao carregar o mapa térmico

Se você encontrar o problema de carregamento do mapa térmico, verifique primeiro se todos os itens de configuração nesta etapa estão corretos. Se todos os itens de configuração estiverem corretos e ainda houver um problema ao carregar o mapa térmico, pressione a tecla F12 na interface [InfluxDB Heatmap (Grafana Fix 1h Accumulation)](http:// localhost:8080/index.html) para visualizar a saída do console da web para solução de problemas.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_65.png" /></div>

### Travamentos aparecem na imagem em tempo real da reCamera

Se você perceber que a imagem em tempo real da reCamera está travando e "WebSocket:Disconnected" aparece após algum tempo de execução, isto é um fenômeno normal, os recursos da reCamera são limitados e a memória ficará muito cheia. Aguarde até que ela volte a exibir.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_66.png" /></div>

### O "Current Number" e o "Number of People Today" no painel do Grafana são exibidos incorretamente

Este é um fenômeno normal, porque haverá interferência de ruído, e o valor voltará ao normal após algum tempo.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_67.png" /></div>

### O que significa "continuous running time" no painel do Grafana

O "continuous running time" aqui se refere a quanto tempo o banco de dados está em execução desde o primeiro dia até agora, porque defini o tempo de retenção de dados do banco de dados da reCamera no InfluxDB para 7 dias, então ele será automaticamente limpo e reiniciado após sete dias; aqui você pode definir livremente o tempo de armazenamento de dados de cada banco de dados no InfluxDB.

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_68.png" /></div>

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_69.png" /></div>

### Se os dados podem ser exportados

Sim, você precisa selecionar os dados de que precisa na interface InfluxDB Explore, depois clicar em Submit e então clicar em Download CSV

<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Heatmap/heatmap_70.png" /></div>

### Se o endereço IP mudar, por exemplo, se você mudar para uma rede diferente, então você precisará modificar estas seções de acordo.

(1) O endereço IP e o token de verificação do nó "InfluxDB Out" no Node-RED  
(2) O IP de login do banco de dados InfluxDB, por exemplo:: http://10.241.1.98:8086/  
(3) O IP da fonte de dados no Grafana    
(4) O IP no código HTML do mapa de calor


## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para fornecer a você diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
