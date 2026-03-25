---
description: Apresenta como conectar o Grove Vision AI V2 ao SenseCAP Mate APP.
title: Conectar Grove Vision AI V2 ao SenseCAP Mate APP
keywords:
  - sensecap mate
  - grove vision ai v2
image: https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png
slug: /connect_vision_ai_v2_to_sensecap_mate
sku: 101021112,E23011220,104990982
last_update:
  date: 01/19/2024
  author: Citric
createdAt: '2024-01-19'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/connect_vision_ai_v2_to_sensecap_mate/
---

# Conectar Grove Vision AI V2 ao SenseCAP Mate APP

**[SenseCAP Mate APP](https://sensecap-mate-download.seeed.cn/)** é um aplicativo poderoso para visualização de dados e gerenciamento remoto de dispositivos.

- Economize tempo: oferece uma experiência de escanear e usar para permitir que os usuários concluam toda a configuração em 4 etapas
- Funciona para pessoas com pouca ou nenhuma experiência técnica começarem facilmente com dados de sensores
- Adquira e visualize dados em interfaces de usuário limpas
- Defina intervalos de tempo: melhore a eficiência da bateria
- Defina valores de limite: concentre-se nos dados para os quais você precisa tomar uma ação
- Envie alarmes se os dados estiverem fora da faixa segura

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/1.png" style={{width:1000, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecraft.seeed.cc/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Saiba mais 🖱️</font></span></strong>
    </a>
</div>

Este tutorial irá guiá-lo sobre como acessar o Grove Vision AI V2 e o XIAO ESP32C3 ao SenseCAP Mate APP.

## Primeiros passos

Antes que o conteúdo do tutorial deste artigo comece, você pode precisar ter o seguinte hardware preparado.

### Materiais necessários

<div class="table-center">
	<table align="center">
		<tr>
			<th>Seeed Studio XIAO ESP32C3</th>
			<th>Grove Vision AI V2</th>
      <th>Módulo de Câmera OV5647-62 FOV<br />para Raspberry Pi 3B+4B</th>
		</tr>
		<tr>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/XIAO_WiFi/board-pic.png" style={{width:120, height:'auto'}}/></div></td>
			<td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/14.jpg" style={{width:250, height:'auto'}}/></div></td>
      <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/11.png" style={{width:250, height:'auto'}}/></div></td>
		</tr>
		<tr>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Seeed-XIAO-ESP32C3-p-5431.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
			<td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
      <td><div class="get_one_now_container" style={{textAlign: 'center'}}>
				<a class="get_one_now_item" href="https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html" target="_blank">
				<strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora 🖱️</font></span></strong>
				</a>
			</div></td>
		</tr>
	</table>
</div>

Em seguida, você precisa conectar o XIAO e o Grove Vision AI V2 por meio da fileira de pinos (ou usar a placa de expansão e a interface Grove).

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2/10.gif" style={{width:600, height:'auto'}}/></div>

### Preparação de software

Conecte o XIAO ESP32C3 ao seu computador usando um cabo USB-C adequado. Certifique-se de que os drivers do dispositivo estejam instalados corretamente.

Abra a [SenseCraft Model Assistant Tool](https://seeed-studio.github.io/SenseCraft-Web-Toolkit/#/tool/tool) em seu navegador. Este pode ser um serviço fornecido pelo fabricante ou uma ferramenta de terceiros projetada para gravar dispositivos ESP.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/22.png" style={{width:1000, height:'auto'}}/></div>


Em seguida, selecione **XIAO ESP32S3** e clique em **Connect**.

:::caution
Observe que, embora o XIAO ESP32S3 esteja selecionado aqui, ainda estamos usando o XIAO ESP32C3!
:::

Clique no botão abaixo para baixar o arquivo de firmware e clique no botão **Add File** na página da web para gravar o firmware `XIAO_C3_as_AT_module.bin` para o endereço `0x0`.

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://files.seeedstudio.com/wiki/visionai-v2-ha/res/XIAO_C3_as_AT_module.bin" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download the file</font></span></strong>
    </a>
</div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/23.png" style={{width:1000, height:'auto'}}/></div>

Por fim, clique no botão **Flash** e aguarde o upload bem-sucedido do programa antes de **desconectar** o XIAO ESP32C3 do computador.

## Registre uma conta SenseCAP e preparação de software

### Etapa 1. Registre uma conta SenseCAP

Se você estiver usando o SenseCAP pela primeira vez, talvez precise registrar uma conta no **[site SenseCAP](https://sensecap.seeed.cc)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/2.png" style={{width:1000, height:'auto'}}/></div>

Após o registro, faça login no site SenseCAP.

### Etapa 2. Baixe o SenseCAP Mate APP para o seu celular.

Se você quiser verificar as mensagens do seu dispositivo a qualquer hora e em qualquer lugar, talvez queira considerar instalar o SenseCAP Mate APP, um dispositivo móvel que utiliza o SenseCAP. Clicando no botão abaixo, você pode escolher instalar o SenseCAP Mate APP da maneira que for mais conveniente para você.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/3.png" style={{width:500, height:'auto'}}/></div>

<div class="get_one_now_container" style={{textAlign: 'center'}}>
    <a class="get_one_now_item" href="https://sensecap-mate-download.seeed.cn/" target="_blank" rel="noopener noreferrer">
            <strong><span><font color={'FFFFFF'} size={"4"}>Download APP 🖱️</font></span></strong>
    </a>
</div>

## Configuração do dispositivo no SenseCAP

### Etapa 3. Adicionar dispositivo

Vamos voltar para o lado web e começar adicionando um Grove Vision AI V2.

Na barra de catálogo à esquerda da página, selecione **Development Kit** e clique no botão **Create Development Kit** no meio.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/5.png" style={{width:1000, height:'auto'}}/></div>

Por favor, dê um nome ao seu dispositivo e selecione o dispositivo como **Grove - Vision AI V2** e clique no botão **Confirm**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/6.png" style={{width:600, height:'auto'}}/></div>

Depois de criar um novo dispositivo, clique no botão **Connect** no lado direito do dispositivo, e uma série de pop-ups será exibida para conectar os dispositivos necessários.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/7.png" style={{width:1000, height:'auto'}}/></div>

Por favor, mantenha essas informações de credenciais, pois iremos usá-las mais tarde na configuração de rede.

## Preparação do modelo SenseCraft AI e configuração MQTT

### Etapa 4. Conectar o Grove Vision AI V2 ao SenseCraft AI Model Assistant

Vamos continuar os passos acima clicando no botão **Deploy** no meio da página, momento em que iremos pular diretamente para a página de implantação de modelo do SenseCraft AI.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/14.png" style={{width:600, height:'auto'}}/></div>

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/15.png" style={{width:1000, height:'auto'}}/></div>

### Etapa 5. Carregar um modelo adequado

Primeiro selecione **Grove - Vision AI V2** na barra de catálogo à esquerda e, em seguida, selecione o modelo que você deseja usar.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/16.png" style={{width:1000, height:'auto'}}/></div>

Quando você estiver na página do modelo, poderá ler uma descrição detalhada desse modelo ou implantá-lo na página. Clique no botão **Deploy Model** no canto superior direito da página para entrar na página de implantação do modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/17.png" style={{width:1000, height:'auto'}}/></div>

Conecte o Grove Vision AI V2 com o XIAO ESP32C3 e a câmera instalados ao computador por meio do cabo USB-C.

:::tip
O cabo deve conectar o Grove Vision AI V2 ao computador, não o XIAO.
:::

Em seguida, clique no botão **Connect** abaixo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/18.png" style={{width:1000, height:'auto'}}/></div>

Na nova janela, clique em **Confirm** e selecione o número da porta onde o dispositivo está localizado. Aguarde de 1 a 2 minutos para que o modelo seja carregado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/19.png" style={{width:1000, height:'auto'}}/></div>

Se a gravação do modelo for bem-sucedida, você poderá ver a tela ao vivo na Pré-visualização e também deverá conseguir ver informações sobre o modelo.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/20.png" style={{width:1000, height:'auto'}}/></div>

:::tip
Se nenhuma tela for exibida na Pré-visualização ou se não houver informações nas informações do modelo, pode haver um problema com o modelo e você precisará selecioná-lo novamente ou carregá-lo outra vez.
:::

### Etapa 6. Configurando a rede para Grove Vision AI V2 & XIAO

Abra a página de configuração do Model Assistant.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/21.png" style={{width:1000, height:'auto'}}/></div>

Por favor, ative o botão MQTT e insira as seguintes informações que você precisa preencher na página.

- **SSID & Password**: O nome e a senha da rede à qual você deseja que o XIAO se conecte. O XIAO suporta apenas WiFi de 2,4G, a rede 5G não está disponível.

Preencha a configuração de rede de acordo com as informações do dispositivo Grove Vision AI V2 que adicionamos pelo SenseCAP no **[Passo 3](#step-3-add-device)**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/23.png" style={{width:1000, height:'auto'}}/></div>

Em seguida, clique no botão Save abaixo. Após salvar, isso **não significa que o Grove Vision AI V2 foi gravado corretamente**, volte para **Process** na barra de menu à esquerda e verifique se o endereço IP do dispositivo apareceu e se o status da conexão MQTT está correto.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/visionai-v2-ha/33.png" style={{width:1000, height:'auto'}}/></div>

:::caution
Quando o endereço IP é exibido, significa que não há problema com o WIFI, e o status de Service deve ser o texto na figura para representar o funcionamento normal; observe que, se o WIFI não estiver normal, o MQTT com certeza não estará normal; quando você acabou de mudar para essa tela, pode aparecer como desconectado, e você precisa esperar cerca de 10s; você não precisa atualizar para ver o status, ele mostrará automaticamente o status mais recente após a mudança de status.
:::

Quando terminar, clique no botão **Stop** para parar a inferência e clique em **Disconnect** para desconectar a porta serial.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/9.png" style={{width:1000, height:'auto'}}/></div>


## Observações no lado PaaS e no SenseCAP Mate APP

### Passo 7. Ver os resultados no Mate APP

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/22.png" style={{width:1000, height:'auto'}}/></div>

Agora podemos abrir nosso celular e inserir nosso número de conta e senha para fazer login. O celular irá sincronizar as informações do dispositivo PaaS.

:::caution
Selecione o site correto para o qual você se registrou.
:::


<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/11.png" style={{width:400, height:'auto'}}/></div>

Após o login, selecione o seu dispositivo recém-criado.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/12.png" style={{width:400, height:'auto'}}/></div>

Depois de entrar no dispositivo, você pode observar a tela e os resultados.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/grove-vision-ai-v2-mate/13.png" style={{width:400, height:'auto'}}/></div>

## Solução de Problemas

### P1: Problema de Rede

Se você continuar observando endereços IP aparecendo e desaparecendo na página Process, então a rede pode estar instável. Você pode considerar mudar de rede ou substituir a antena por uma mais potente.

### P2: Por que não consigo ver a tela no Mate APP?

Apenas um dos previews ao vivo no SSCMA e dos resultados de visualização no SenseCAP PaaS pode estar ativo ao mesmo tempo. Portanto, lembre-se de que você precisa desligar a exibição em tempo real da tela de inferência na página Process no SenseCraft AI.

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

