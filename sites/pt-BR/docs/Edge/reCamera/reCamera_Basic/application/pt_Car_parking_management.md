---
title: Demo de Monitoramento de Vagas de Estacionamento com IA usando reCamera
description: Este wiki apresenta um demo de monitoramento de vagas de estacionamento baseado em IA usando reCamera, demonstrando detecção e visualização em tempo real da disponibilidade de vagas.
keywords:
  - Detecção de Vagas de Estacionamento
  - reCamera
  - Visão de Borda com IA
  - Estacionamento Inteligente
slug: /ai_parking_slot_monitoring_demo_with_recamera_bak
sku: 100029708,102991896
image: https://files.seeedstudio.com/wiki/reCamera/recamera_banner.webp
sidebar_position: 3
last_update:
  date: 2025-12-17
  author: John Xiang
createdAt: '2025-12-31'
updatedAt: '2026-01-29'
url: https://wiki.seeedstudio.com/pt-br/reCamera/reCamera_Basic/application/ai_parking_slot_monitoring_demo_with_recamera_bak/
---

# Demo de Gerenciamento de Estacionamento com IA usando reCamera

## Introdução

A disponibilidade de vagas é uma necessidade comum em cenários como **estacionamentos comerciais**, **garagens residenciais**, **parques industriais** e **gestão de estacionamento em campi**, onde operadores e usuários desejam entender rapidamente quais vagas estão ocupadas ou disponíveis.

Este projeto fornece um demo pronto para uso que se concentra nas seguintes capacidades de aplicação:

- **Detecção de Vagas de Estacionamento**: Detecta o status de ocupação de cada vaga de estacionamento no campo de visão da câmera.
- **Antivibração / Estabilização**: Reduz tremores visuais e flutuações de detecção de curto prazo para tornar os resultados mais estáveis.
- **Contagem e Resumo**: Resume automaticamente o status atual do estacionamento, como o número de vagas disponíveis.
- **Visualização na Tela**: Exibe os resultados de detecção e o status das vagas diretamente na interface de pré-visualização para verificação e demonstração rápidas.


## Preparação de Hardware

Para executar este demo de gerenciamento de estacionamento, é necessário apenas **um dispositivo reCamera**.  
Todas as variantes de reCamera são suportadas.

Você pode escolher **qualquer versão da reCamera** com base em suas necessidades de implantação:

- reCamera 2002 Série (Wi-Fi)
- reCamera Gimbal (Pan-Tilt)
- reCamera HQ PoE (Ethernet + PoE)

> **Observação:**  
> A versão PoE não suporta Wi-Fi e deve ser conectada à mesma rede local por meio de um switch compatível com PoE.

<table align="center">
 <tr>
  <th>reCamera 2002 Série</th>
  <th>reCamera Gimbal</th>
  <th>reCamera HQ PoE</th>
 </tr>
 <tr>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/recamera_banner.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/Gimbal/reCamera-Gimbal.png" style={{width:300, height:'auto'}}/>
    </div>
  </td>
  <td>
    <div style={{textAlign:'center'}}>
      <img src="https://files.seeedstudio.com/wiki/reCamera/reCamera_hq_poe/1-100029708-reCamera-2002-HQ-PoE-8GB.jpg" style={{width:300, height:'auto'}}/>
    </div>
  </td>
 </tr>
 <tr>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002w-8GB-p-6250.html" target="_blank">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-gimbal-2002w-optional-accessories.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
  <td>
    <div class="get_one_now_container" style={{textAlign: 'center'}}>
      <a class="get_one_now_item" href="https://www.seeedstudio.com/reCamera-2002-HQ-PoE-64GB-p-6557.html" target="_blank" rel="noopener noreferrer">
        <strong><span><font color={'FFFFFF'} size={"4"}> Adquira agora </font></span></strong>
      </a>
    </div>
  </td>
 </tr>
</table>

## Configurar o Demo 
### Passo 1: Configurar a reCamera

Primeiro, siga o guia oficial de primeiros passos para concluir a configuração básica da reCamera: [Configuração Básica da reCamera](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/)

Após concluir a configuração inicial, certifique-se de que o dispositivo esteja ligado e conectado corretamente à rede.  
Em seguida, acesse a interface de gerenciamento da reCamera e entre na página do **fluxo Node-RED**.

Se você conseguir acessar com sucesso a interface do fluxo Node-RED como mostrado abaixo, significa que a configuração foi concluída com êxito.

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/dashboarddownload5.png" />
</div>

### Passo 2: Baixar e Enviar o Arquivo de Fluxo

Este demo fornece um **arquivo de fluxo pré-configurado**, no qual todos os nós e conexões necessários já foram configurados.  
Você **não** precisa criar ou configurar manualmente nenhum nó do Node-RED.

Baixe o arquivo de fluxo da nossa **plataforma SenseCraft AI** e, em seguida, importe-o diretamente para a reCamera. Para o tutorial do SenseCraft AI, consulte o link [Access SenseCraft AI reCamera Dashboards](https://wiki.seeedstudio.com/pt-br/recamera_getting_started/#access-recamera-preview-dashboard).  

Após importar o fluxo:

- Todos os nós de detecção, visualização e processamento de dados estarão prontos para uso.
- Nenhuma configuração adicional de parâmetros é necessária.
- O demo pode ser iniciado imediatamente após a implantação.

Quando o fluxo for enviado e implantado com sucesso, a reCamera iniciará automaticamente a execução do demo de monitoramento de vagas de estacionamento em segundo plano. Este fluxo foi projetado como um **pipeline de monitoramento de vagas de estacionamento de ponta a ponta**, executado inteiramente na reCamera. A lógica em alto nível é a seguinte:

1. **Entrada de Vídeo**  
   A câmera captura continuamente quadros de vídeo e os envia para o nó de inferência de IA.

2. **Detecção por IA**  
   O modelo de detecção identifica objetos relacionados ao estacionamento e gera caixas delimitadoras com rótulos de classe (`free` / `car`) e escores de confiança.

3. **Associação de Vagas e Estabilização**  
   - As caixas detectadas são associadas entre quadros usando **IoU (Intersection over Union)**.
   - Cada vaga entra em um *estado estável* somente após ser detectada de forma consistente por um número fixo de quadros.
   - Perdas de curto prazo são toleradas para evitar mudanças falsas de estado.

4. **Gerenciamento do Pool de Vagas**  
   - Cada vaga de estacionamento é armazenada em um pool de vagas com sua posição, histórico de estado e contador de estabilidade.
   - Vagas que desaparecem por muito tempo são removidas automaticamente.

5. **Camada de Visualização**  
   - Caixas delimitadoras, marcadores centrais, rótulos e painéis de status são renderizados como sobreposições SVG.
   - A visualização é atualizada em tempo real via WebSocket.

6. **Execução Automática em Segundo Plano**  
   Após a implantação, o fluxo é executado automaticamente em segundo plano sem acionamento manual.

Os resultados de detecção são ilustrados abaixo:

<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test1.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test2.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test3.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test4.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test5.jpg" />
</div>
<div align="center">
  <img width={600} src="https://files.seeedstudio.com/wiki/reCamera/Applications/Wifi_HaLow/test6.jpg" />
</div>


A partir dos resultados exibidos, você pode observar os seguintes elementos:

- **Caixas Delimitadoras**  
  Cada vaga de estacionamento é associada a uma região detectada. O sistema classifica cada região como `free` ou `car` com base na saída do modelo de IA.

- **Marcador Central (Círculo)**  
  Um círculo é desenhado no centro de cada vaga de estacionamento *estável*.  
  - **Círculo verde** indica uma vaga livre  
  - **Círculo vermelho** indica uma vaga ocupada  

- **Rótulos e Coordenadas das Vagas**  
  Cada vaga é rotulada (por exemplo, `Slot1`, `Slot2`, `Slot3`) juntamente com suas coordenadas centrais `(x, y)`.  
  Esses rótulos são mapeados a partir da lista de nomes de vagas que você fornece via Node-RED.

- **Painel de Status (Canto Superior Esquerdo)**  
  O painel sobreposto resume o status geral:
  - **Monitoring Slots**: Todas as vagas que estão sendo rastreadas no momento
  - **Free Slots**: Vagas confirmadas como livres após validação em múltiplos quadros

O sistema utiliza um mecanismo de estabilização em múltiplos quadros para evitar resultados intermitentes causados por oclusão temporária, mudanças de iluminação ou ruído de detecção.
:::note
A lógica atual de detecção de vagas de estacionamento é projetada especificamente para **três vagas adjacentes dispostas lado a lado**. Neste demo, a **reCamera é instalada em frente às vagas de estacionamento**, voltada diretamente para os veículos, em vez de usar uma visão de cima (visão de pássaro).  

Como resultado, a associação de vagas, o posicionamento do ponto central e a lógica de estabilidade são otimizados para uma **perspectiva frontal**. Se você planeja usar uma câmera aérea ou um layout de estacionamento diferente, o mapeamento de vagas e a lógica de detecção podem precisar ser ajustados de acordo.
:::


## Suporte Técnico e Discussão de Produto

Obrigado por escolher nossos produtos! Se você precisar de orientação sobre objetivos específicos de personalização ou quiser estender ainda mais o fluxo, sinta-se à vontade para entrar em contato. Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div class="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" class="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" class="button_email"></a>
</div>

<div class="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" class="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" class="button_discussion"></a>
</div>
