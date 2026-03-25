---
description: Aprenda a instalar MQTT no reComputer R1000 e testá-lo com Node-RED. MQTT é um protocolo de mensagens leve, ideal para aplicações de IoT, permitindo troca de dados em tempo real e de forma eficiente, mesmo em redes não confiáveis. Com a integração ao Node-RED, dispositivos de borda e servidores centrais obtêm conectividade perfeita, otimizando a transmissão e o processamento de dados diretamente na borda.
title: reComputer R1000 com Node-RED e MQTT
keywords:
  - Controlador de Borda
  - reComputer R1000
  - Node-Red
  - MQTT
image: https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png
slug: /recomputer_r1000_nodered_mqtt
last_update:
  date: 07/02/2024
  author: Kasun Thushara
createdAt: '2024-05-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/recomputer_r1000_nodered_mqtt/
---

## Introdução

**MQTT (Message Queuing Telemetry Transport)** é um protocolo de mensagens leve, ideal para aplicações de IoT (Internet of Things) devido à sua eficiência e aos baixos requisitos de largura de banda. Ele facilita a comunicação entre dispositivos em um modelo de publicação-assinatura, permitindo a troca de dados em tempo real em redes não confiáveis. Com o Node-RED, a integração do MQTT possibilita uma conectividade perfeita entre dispositivos de borda e servidores centrais ou outros dispositivos, promovendo transmissão e processamento de dados eficientes. O reComputer R1000 Edge Controller, ao oferecer suporte nativo a MQTT, elimina a necessidade de gateways de hardware adicionais, permitindo a instalação de um broker MQTT diretamente no próprio reComputer R1000. Isso reduz a complexidade, minimiza a latência e aumenta a confiabilidade, pois os dados podem ser processados e utilizados na borda sem depender de intermediários externos, otimizando assim a arquitetura do sistema de IoT.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/recomputer-mqtt.png" style={{width:800, height:'auto'}}/></div>

## Primeiros Passos

Antes de iniciar este projeto, você precisa preparar o hardware e o software com antecedência, conforme descrito aqui.

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

Nós preparamos um [Guia de Primeiros Passos com Node-RED](https://wiki.seeedstudio.com/pt-br/recomputer_r1000_getting_statrted_node_red/). Recomenda-se revisar este guia antes de prosseguir para este wiki.

## Configurar o reComputer R1000 como Broker MQTT

- **Passo 01** : Conecte via SSH ou VNC ao reComputer R1000 e atualize o Raspberry Pi OS:

```sh
sudo apt update
```

- **Passo 02** : Em seguida, instale o Mosquitto nele. Para isso, abra o terminal e execute este comando:

```sh
sudo apt-get install mosquitto 
```

- **Passo 03** : Em seguida, instale o cliente de linha de comando do Mosquitto executando o seguinte comando no terminal:

```sh
sudo apt-get install mosquitto-clients -y
```

- **Passo 04** : Quando a instalação do broker MQTT estiver concluída, será necessário ajustar os arquivos de configuração. O arquivo de configuração padrão pode ser encontrado em `/etc/mosquitto/mosquitto.conf`. Para acessar e modificar este arquivo, use o editor nano executando o seguinte comando no terminal:

```sh
sudo nano /etc/mosquitto/mosquitto.conf
```

No arquivo de configuração, vamos desabilitar as configurações padrão com esta linha:

```sh
include_dir /etc/mosquitto/conf.d
```

para

```sh
#include_dir /etc/mosquitto/conf.d
```

Em seguida, vamos aplicar uma política que não permita que usuários anônimos se conectem ao broker adicionando a linha:

```sh
allow_anonymous false
```

Para armazenar senhas com segurança, vamos especificar um local de arquivo adicionando:

```sh
password_file /etc/mosquitto/pwfile
```

Depois, para definir a porta de escuta como 1883, vamos adicionar:

```sh
listener 1883
```

Salve as modificações pressionando Ctrl+S e saia do editor com Ctrl+X.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttconfig.PNG" style={{width:800, height:'auto'}}/></div>

- **Passo 05** : Para criar nomes de usuário e senhas, concedendo acesso a clientes MQTT, ou redefinir senhas existentes, use o seguinte comando no terminal:

```sh
sudo mosquitto_passwd -c /etc/mosquitto/pwfile <username>
```

Após gerar um nome de usuário e uma senha, reinicie o reComputer R1000

```sh
sudo reboot
```

Você pode iniciar o broker Mosquitto digitando o seguinte comando no terminal:

```sh
sudo systemctl start mosquitto
```

`sudo systemctl status mosquitto`   Para verificar se o broker Mosquitto está em execução

`sudo systemctl stop mosquitto`     Para interromper o broker Mosquitto

`sudo systemctl restart mosquitto`  Para reiniciar o broker Mosquitto

`sudo systemctl enable mosquitto`   Para garantir que o broker Mosquitto seja inicializado na inicialização do sistema

## Testar Conexão

- **Passo 01** : Abra uma nova sessão SSH ou terminal e execute o seguinte comando para assinar um tópico

```sh
mosquitto_sub -h localhost -t test -u <USER> -P <PASSWORD>
```

- **Passo 02** : Em outra sessão SSH ou terminal, execute o seguinte comando para publicar uma mensagem no mesmo tópico. Certifique-se de inserir o nome de usuário e a senha corretamente.

```sh
mosquitto_pub -h localhost -t test -m "Hello, world!" -u <USER> -P <PASSWORD>
```

Você deverá ver a mensagem "Hello, world!" aparecer na primeira janela da sessão SSH onde você executou o comando mosquitto_sub. Certifique-se de inserir o nome de usuário e a senha corretamente.

## Editar Fluxos

**Nó MQTT-in**

O nó MQTT-in assina tópicos MQTT e recebe mensagens do broker. Quando uma mensagem é publicada em um de seus tópicos assinados, o nó MQTT-in é acionado e encaminha a mensagem recebida para os nós subsequentes no fluxo para processamento adicional.

- **Passo 01** Arraste e solte um nó MQTT-in da paleta do Node-RED para o canvas.
- **Passo 02** Clique duas vezes no nó MQTT-in para abrir sua caixa de diálogo de configuração.
- **Passo 03** Na caixa de diálogo de configuração, configure os seguintes campos:
  - **Server**: Certifique-se de que os detalhes do broker estejam pré-preenchidos. Caso contrário, clique no ícone de lápis para adicionar o endereço IP do broker, nome de usuário e senha.

  - **Action**: Selecione se deseja assinar um único tópico ou usar uma assinatura dinâmica. Para uma assinatura dinâmica, extraia o tópico MQTT desejado do payload da mensagem usando um nó de função ou outros nós de processamento. Aqui, vamos assinar um único tópico.
  - **Topic**: Insira o tópico MQTT ao qual você deseja se inscrever.
  - **QoS**: Escolha o nível desejado de Qualidade de Serviço (QoS) para entrega de mensagens (0, 1 ou 2).
  - **Name**: Opcionalmente, atribua um nome significativo ao seu nó.

- **Passo 04** Clique em Done para salvar a configuração.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/connection.PNG" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttin.PNG" style={{width:600, height:'auto'}}/></div>

**Nó MQTT-out**

O nó MQTT-out (saída MQTT) é usado para publicar mensagens em tópicos MQTT. Você pode configurar o tópico e o payload da mensagem a ser publicada, que pode ser estático ou gerado dinamicamente com base em dados de outros nós no fluxo.

- **Passo 01** Arraste e solte um nó MQTT-out da paleta do Node-RED para o canvas.

- **Passo 02** Clique duas vezes no nó MQTT-out para abrir sua caixa de diálogo de configuração.

- **Passo 03** Na caixa de diálogo de configuração, clique no ícone de lápis ao lado do campo Server para criar uma nova configuração de broker.

- **Passo 04** Edite as configurações do broker MQTT adicionando o endereço do broker no campo server, a porta e quaisquer credenciais de autenticação necessárias (por exemplo, nome de usuário e senha).

- **Passo 05** Clique em Done para salvar as configurações do broker.

- **Passo 06** Na caixa de diálogo de configuração, configure os seguintes campos:

  - **Topic**: Insira o tópico MQTT no qual você deseja publicar mensagens.

  - **QoS**: Escolha o nível desejado de Qualidade de Serviço (QoS) para entrega de mensagens (0, 1 ou 2).

  - **Retain**: Escolha se deseja reter a mensagem publicada no broker (true ou false).

  - **Name**: Opcionalmente, atribua um nome significativo ao seu nó.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqttout.PNG" style={{width:600, height:'auto'}}/></div>

- **Passo 07** Clique em Done para salvar a configuração.

Usamos o nó inject para injetar a mensagem em um determinado intervalo, e também usamos o nó debug para inspecionar a mensagem publicada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/debugnode.PNG" style={{width:600, height:'auto'}}/></div>

Você pode visualizar a representação gráfica abaixo para entender como conectar e configurar os nós MQTT-in, MQTT-out, debug e inject.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/mqtt-edgebox.gif" style={{width:800, height:'auto'}}/></div>

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
