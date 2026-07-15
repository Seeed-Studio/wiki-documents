---
description: Este artigo descreve o plano de cobrança do Watcher ao usar o SenseCraft AI.
title: Preço e Benefícios
image: https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler_1.webp
slug: /watcher_price
sidebar_position: 3
last_update:
  date: 10/18/2024
  author: Citric
createdAt: '2024-08-19'
updatedAt: '2026-03-16'
url: https://wiki.seeedstudio.com/pt-br/watcher_price/
---

# Planos e Benefícios do SenseCraft AI para Watcher

No Watcher, acreditamos em oferecer aos desenvolvedores uma estrutura de preços clara e transparente para integrar inteligência artificial em seus projetos. Entendemos que cada desenvolvedor tem requisitos únicos, por isso oferecemos uma variedade de planos de preços projetados para atender a diferentes necessidades e orçamentos. Para ajudá-lo a tomar uma decisão informada, destacamos os principais aspectos do nosso modelo de precificação e os recursos específicos incluídos em cada plano.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/price_month_simpler.png" style={{width:1000, height:'auto'}}/></div>

## Nossos Planos de Preços

<div class="table-center">
 <table align="center">
  <tr>
   <th> </th>
      <th>On-Premise</th>
   <th>SenseCraft Standard</th>
      <th>SenseCraft Pro</th>
  </tr>
  <tr>
   <th>Retenção de Dados</th>
   <td align="center">Salvar por usuário</td>
   <td align="center">3 Meses</td>
   <td align="center">3 Meses</td>
  </tr>
  <tr>
   <th>API de Dados</th>
   <td align="center">API HTTP Local</td>
   <td align="center">MQTT/HTTP API</td>
   <td align="center">MQTT/HTTP API</td>
  </tr>
  <tr>
   <th>Análise de Tarefas</th>
   <td align="center">Ilimitado</td>
   <td align="center">Ilimitado</td>
   <td align="center">Ilimitado</td>
  </tr>
  <tr>
   <th>Análise de Imagem</th>
   <td align="center">Ilimitado</td>
   <td align="center">15 Minutos/Solicitação</td>
   <td align="center">20000 Solicitações</td>
  </tr>
  <tr>
   <th>Chat com LLM</th>
   <td align="center">Ilimitado</td>
   <td align="center">200 Solicitações/Mês</td>
   <td align="center">1000 Solicitações</td>
  </tr>
  <tr>
   <th>Modelo TinyML e Treinamento de Modelo</th>
   <td align="center">Ilimitado</td>
   <td align="center">Ilimitado</td>
   <td align="center">Ilimitado</td>
  </tr>
    <tr>
   <th>Preço</th>
   <td align="center">Grátis</td>
   <td align="center">Grátis</td>
   <td align="center">Um teste gratuito & Plano de 6,9 USD</td>
  </tr>
 </table>
</div>

:::caution

1. Os planos pagos do SenseCraft Pro estão vinculados ao EUI de cada dispositivo. Isso significa que, se você tiver cinco dispositivos que desejam usar o SenseCraft Pro, será necessário pagar por cada um separadamente.

2. O serviço de cobrança do SenseCraft Pro é baseado no número de Solicitações. Quando você compra o serviço, receberá o número de Solicitações fornecidas pelo serviço, sem data de validade.

3. O SenseCraft Pro ativará automaticamente o serviço de teste quando seu dispositivo estiver conectado ao SenseCraft APP.

4. O SenseCraft Pro ativa o teste e contabiliza todas as Solicitações do plano de uma só vez e, em seguida, alterna automaticamente para o SenseCraft Standard quando você terminar de usá-las.

:::

No Watcher, acreditamos em capacitar os desenvolvedores com a flexibilidade e escalabilidade de que precisam para ter sucesso com a integração de IA. Nossos planos de preços foram projetados para acomodar uma ampla gama de necessidades, desde experimentação casual até implantação em grande escala. Escolha o plano que melhor se alinhe à intensidade de uso de IA e aos requisitos do seu projeto, e deixe o Watcher ajudá-lo a desbloquear todo o potencial do SenseCraft AI. Comece hoje e experimente o poder da IA nos seus próprios termos!

## Entendendo Nosso Modelo de Preços

### Armazenamento de Dados

Todos os planos incluem um generoso armazenamento de dados de **3 meses**, que abrange o armazenamento de imagens de alarme, carimbos de data/hora e contagens de alarmes.

### Análise de Tarefas

Análise de Tarefas refere-se à capacidade do Watcher de compreender e interpretar tarefas atribuídas pelo usuário, dividindo-as em componentes menores e acionáveis. Isso inclui determinar se uma tarefa pode ser executada usando pequenos modelos, identificar os modelos específicos a serem usados, reconhecer os comportamentos a serem detectados e definir as ações a serem tomadas. Como base da funcionalidade do Watcher, nos esforçamos para manter a Análise de Tarefas gratuita em todos os planos.

### Análise de Imagem

Análise de Imagem envolve o exame avançado das imagens capturadas pelo Watcher, permitindo a identificação de objetos, atividades e contextos dentro das imagens. Esse recurso exige o uso de grandes modelos e está sujeito a taxas de uso. Uma solicitação é contabilizada quando sua tarefa exige o uso de um grande modelo para análise de imagem.

- Se você estiver usando o **[Serviço de LLM Puro em Nuvem](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/#Serviço-de-LLM-Puro-em-Nuvem)**, as solicitações são contabilizadas com base na sua **Frequência de Captura** configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/llm-app.png" style={{width:1000, height:'auto'}}/></div>

- Para o **[Serviço de IA Local + LLM em Nuvem](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher_task/#Serviço-de-IA-Local--LLM-em-Nuvem)**, uma solicitação é contabilizada quando o grande modelo é invocado para reconhecimento de imagem depois que o pequeno modelo aciona uma detecção. Observe que o intervalo mínimo entre solicitações não será menor do que a sua **Frequência de Captura** configurada.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/local_llm-app.png" style={{width:1000, height:'auto'}}/></div>

A análise de imagem também é uma das capacidades muito importantes do Watcher. Portanto, quando você não tiver uma assinatura do SenseCraft Pro, também garantimos pelo menos um serviço de análise de imagem a cada 15 minutos para você usar.

### Chat com Modelo de Linguagem de Grande Porte

Interagir em conversas com o nosso poderoso Modelo de Linguagem de Grande Porte é um recurso premium que gera taxas de uso. Quando o SenseCraft determina que sua conversa com o Watcher é uma troca de ida e volta e o Watcher gera uma resposta, isso é contabilizado como uma única solicitação.

Quando essa contagem se esgota, não é mais possível conversar com o Watcher.

### Repositório de Modelos, Treinamento e Upload

O acesso ao nosso extenso [Repositório de Modelos](https://sensecraft.seeed.cc/ai/#/model?redirect=%2Fdevice), bem como a capacidade de treinar e fazer upload de seus próprios modelos, é fornecido gratuitamente em todos os planos.

## Como assinar?

Se você precisa assinar o SenseCraft Pro, é necessário fazer isso dentro do SenseCraft APP. O primeiro passo deve ser [vincular seu SenseCAP Watcher](https://wiki.seeedstudio.com/pt-br/getting_started_with_watcher/#Etapa-3-vinculação-do-dispositivo) no APP. Atualmente, a assinatura do SenseCraft Pro está disponível apenas para usuários do SenseCAP Watcher.

Vá para a tela de chat do SenseCAP Watcher, clique no botão de engrenagem de Settings no canto superior direito e, perto da parte inferior, haverá uma opção de **Subscription**.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/subscription.png" style={{width:250, height:'auto'}}/></div>

Aqui você pode ver o número de Solicitações restantes para o seu serviço de assinatura atual. E você pode concluir sua assinatura aqui. Atualmente oferecemos três preços diferentes para serviços de assinatura; escolha planos diferentes de acordo com o seu uso real.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page1.png" style={{width:250, height:'auto'}}/></div>

Depois de confirmar o plano desejado, concorde com o contrato de serviço para seguir para a tela de pagamento.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page2.png" style={{width:250, height:'auto'}}/></div>

Atualmente, o SenseCraft APP oferece suporte a pagamento via Paypal. Quando o pagamento for concluído com sucesso, você verá o número de Solicitações compradas atualizado na página de Subscription.

<div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/watcher_getting_started/pay_page3.png" style={{width:250, height:'auto'}}/></div>

## Suporte Técnico & Discussão de Produto

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes formas de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Disponibilizamos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
