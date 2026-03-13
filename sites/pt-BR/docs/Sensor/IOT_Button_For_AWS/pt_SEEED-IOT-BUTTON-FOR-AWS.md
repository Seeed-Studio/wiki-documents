---
description: BOTÃO IOT SEEED PARA AWS
title: BOTÃO IOT SEEED PARA AWS
keywords:
  - IOT_Button_For_AWS
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /SEEED-IOT-BUTTON-FOR-AWS
sku: 102991334
last_update:
  date: 1/13/2023
  author: jianjing Huang
createdAt: '2023-01-13'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/SEEED-IOT-BUTTON-FOR-AWS/
---



![](https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Side.png)

O Seeed IoT Button para AWS é um botão programável baseado em Wi‑Fi, fácil de configurar e simples de usar. Você pode usar o Seeed IoT Button para AWS para capturar rapidamente o feedback dos clientes sem sobrecarregá‑los com questionários que consomem tempo. Ele é projetado para que empresas e desenvolvedores integrem facilmente aos fluxos de trabalho e sistemas de negócios existentes usando o [serviço AWS IoT 1-Click](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/what-is-1click.html). E este IoT Button é totalmente compatível com o aplicativo oficial AWS IoT 1-Click para iOS e Android. A bateria deste dispositivo é uma bateria Li‑ion recarregável NCR18650B. Observe que não há bateria na embalagem, embora a bateria esteja disponível em lojas de conveniência comuns e o cliente precise providenciá‑la por conta própria. O que recomendamos é a Panasonic NCR18650B 3.6V 3400mAh. Há um suporte (bracket) para este IoT Button. O cliente pode colá‑lo na parede ou em outra superfície e é fácil colocar e retirar o IoT Button do suporte. O Seeed IoT Button para AWS suporta três tipos de cliques: simples, duplo e pressão longa, e possui 3 LEDs para diferentes indicações.

<p style={{textAlign: 'center'}}><a href="https://www.seeedstudio.com/Seeed-IoT-Button-for-AWS-p-4527.html" target="_blank"><img src="https://github.com/SeeedDocument/wiki_english/raw/master/docs/images/300px-Get_One_Now_Banner-ragular.png" /></a></p>

## Características

- Eventos de clique Simples/Duplo/Pressão Longa
- LED de Status de Energia/Evento/Configuração de Wi‑Fi Integrado
- Equipado com Realtek RTL8720DN, Wi‑Fi de banda dupla 2.4Ghz / 5Ghz
- Bateria NCR18650B Removível e Recarregável
- Proteção e indicação de polaridade inversa da bateria
- Carregamento USB Type-C
- Suporte adesivo

## Especificações

|Parâmetro|Valor|
|---|---|
|Tamanho|92\*32\*25mm|
|MCU|Realteak, RTL8720DNL 20MHz Cortex M0; 200MHz Cortex M4F|
|Flash|4MB |
|Botão| 100.000 ciclos|
|LED|RGB|
|Wi-Fi|802.11 a/b/g/n 2.4GHz & 5GHz|
|Bluetooth|BLE 5.0|
|Bateria|Bateria recarregável Li‑ion 18650 3,6V|
|Interface de carregamento|USB Type-C|
|Corrente de carregamento|500mA|
|Tempo de carregamento|4-6 horas (de acordo com a capacidade da bateria)|
|Proteção da bateria|Proteção contra sobrecarga, sobrecorrente, sobredescarga e polaridade reversa|
|Atualização de firmware|Suporta OTA|

## Visão geral do hardware

<div align="center">
<figure>
  <p style={{textAlign: 'center'}}><a href="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" target="_blank"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Seeed_IOT_Button_HardwareOverview.png" /></a></p>
</figure>
</div>

### Indicações de status dos LEDs

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Status do LED de energia</th><th style={{fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicação</th></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Bateria invertida</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Vermelho</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Bateria carregando</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Verde LIGADO</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Bateria terminou de carregar</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'inherit', textAlign: 'left', verticalAlign: 'top'}}>Verde DESLIGADO</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Status do LED de evento</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicação</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Vermelho constante</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>O certificado não foi gravado ou o certificado é inválido</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Branco piscando -&gt; Verde</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Evento enviado com sucesso</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Branco piscando -&gt; Vermelho</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Falha ao enviar o evento</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Branco piscando -&gt; Laranja</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Falha na conexão Wi‑Fi, verifique o roteador ou altere a configuração de rede</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Branco piscando -&gt; Roxo</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Falha na conexão com o servidor, verifique o ambiente de rede</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Status do LED de configuração de Wi‑Fi</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', fontWeight: 'bold', backgroundColor: '#9b9b9b', color: '#ffffff', textAlign: 'center', verticalAlign: 'top'}}>Indicação</td></tr><tr><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Azul piscando</td><td style={{fontFamily: 'Arial, sans-serif', fontSize: 14, padding: '10px 5px', borderStyle: 'solid', borderWidth: 1, overflow: 'hidden', wordBreak: 'normal', borderColor: 'black', textAlign: 'left', verticalAlign: 'top'}}>Configurando a rede BLE</td></tr></tbody></table>

## Primeiros passos

### Ligando o dispositivo

A primeira etapa para começar é ligar o IoT Button. Há duas maneiras de ligar os botões:

#### Método 1 - USB Type-C

Simplesmente conecte o cabo USB Type‑C à porta USB para ligar o dispositivo. Você deverá ver o LED de indicação de energia piscar em **verde** uma vez.

:::note
Após a luz verde piscar uma vez, você também verá o LED piscar uma luz verde em um brilho muito baixo. Você pode vê‑la em um ambiente mais escuro.
:::

#### Método 2 - Usando bateria

Você também pode usar bateria para ligar o IoT Button. Abra a carcaça (consulte o gif abaixo) e coloque a bateria. Assim que a bateria for instalada, você também precisará conectar o IoT Button a um computador ou a um adaptador de energia via USB Type‑C **uma vez** para inicializar o circuito da bateria. Você deverá ver o LED de indicação de energia em **verde**. Agora você pode remover a conexão USB e o LED se apagará e tudo estará pronto.

:::note
Quando o LED de Status de Energia estiver vermelho, isso indica que a bateria está invertida!
:::

#### Como Retirar a Caixa

O GIF a seguir demonstra como retirar a caixa usando a ferramenta Triangle Plastic Pry Opening Tool fornecida no pacote.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/takingApart.gif"/></div>

### Configurando o Wi-Fi no Botão

1.Baixe o AWS IoT 1-Click App mais recente na Apple App Store ou Google Play Store

2.Abra o **AWS IoT 1-Click App** e cadastre-se com uma conta Amazon AWS

:::note
Certifique-se de que o Bluetooth esteja ligado, ou um erro aparecerá como mostrado.
:::

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/Bluetooth-error.jpg"/></div>

3.Pressione **Claim with Device ID** no App. Pressione **Scan** no app e escaneie o **DSN** na parte inferior do Seeed IoT Button for AWS.

<div align="center"><img src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/05.png"/></div>

4.Pressione **Configure**

5.Pressione o seu **Seeed IoT Button for AWS** por 7 segundos até que a luz azul pisque

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/07-1.png"/></div>

6.Selecione uma rede Wi-Fi da lista de redes. Esta é a rede Wi-Fi que você quer que seus botões usem

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/08.png"/></div>

7.Digite a senha (se houver) para a rede Wi-Fi e Continue

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/09.png"/></div>

8.Espere até que a mensagem de configuração bem-sucedida apareça no App e pressione **Finish**. A configuração está concluída

<div align="center"><img width ="{500}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/10.png"/></div>

Agora você pode começar a usar o serviço AWS 1-Click!

Certifique-se de atualizar para o firmware mais recente seguindo [**this**](https://wiki.seeedstudio.com/pt-br/SEEED-IOT-BUTTON-FOR-AWS/#Atualização-OTA).

### Instruções de Operação

- **Clique Único:** Enviar evento de clique único

- **Clique Duplo:** Enviar evento de clique duplo

- **Pressão Longa(2s~5s):** Enviar evento de pressão longa

- **Pressão Longa(>7s):** Entrar no modo de configuração de rede BLE. Nesse modo, outros eventos são bloqueados. Se você precisar sair manualmente do modo de distribuição BLE, pode pressionar e segurar por mais de 7s novamente, e ele sairá automaticamente em dois minutos.

## Atualização OTA

Pressão Longa **15s** para começar a buscar novas atualizações de versão:

1. **Pressão Longa(>7s)**, o LED de Configuração Wi-Fi começa a piscar. Se soltar agora, entrará no modo de configuração de rede.

2. Continue a **pressionar e segurar >8s (total > 15s)**, o LED de Status do Evento começa a piscar azul e entra no modo OTA.

**Quando estiver na versão mais recente**, o LED de Status do Evento pisca de **Azul** para **Verde**. Para mais informações, consulte a tabela abaixo:

<table style={{borderCollapse: 'collapse', borderSpacing: 0}} className="tg"><tbody><tr><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Status do LED de Evento</th><th style={{backgroundColor: '#9b9b9b', borderColor: '#000000', borderStyle: 'solid', borderWidth: 1, color: '#ffffff', fontFamily: 'Arial, sans-serif', fontSize: 14, fontWeight: 'bold', overflow: 'hidden', padding: '10px 5px', textAlign: 'center', verticalAlign: 'middle', wordBreak: 'normal'}}>Indicação</th></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul pisca -&gt; Verde</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Atualização enviada com sucesso</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul pisca -&gt; Vermelho</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Falha no envio da atualização</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul pisca -&gt; Laranja</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Falha na conexão Wi-Fi, verifique o roteador ou altere a configuração de rede</td></tr><tr><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Azul pisca -&gt; Roxo</td><td style={{borderColor: 'black', borderStyle: 'solid', borderWidth: 1, fontFamily: 'Arial, sans-serif', fontSize: 14, overflow: 'hidden', padding: '10px 5px', textAlign: 'left', verticalAlign: 'middle', wordBreak: 'normal'}}>Falha na conexão com o servidor, verifique o ambiente de rede</td></tr></tbody></table>

## FAQs

**P1.** O SN (Número de Série) da caixa externa foi apagado.

Há também um adesivo de SN de backup dentro da caixa do botão AWS, embaixo da bateria.

<div align="center"><img width ="{250}" src="https://files.seeedstudio.com/wiki/Seeed-IOT-BUTTON-FOR-AWS/img/SN.png"/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a> 
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a> 
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
