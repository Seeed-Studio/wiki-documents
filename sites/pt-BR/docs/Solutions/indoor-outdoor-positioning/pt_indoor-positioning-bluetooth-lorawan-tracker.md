---
title: Sistema de Posicionamento Interno por Bluetooth com LoRaWAN
description: Uma solução confiável de posicionamento interno usando o SenseCAP Tracker. Ela combina Bluetooth para rastreamento preciso de localização com LoRaWAN para transmissão de dados de longa distância, permitindo uma implantação fácil.
keywords:
  - Bluetooth
  - LoRaWAN
  - SenseCAP Tracker
  - Posicionamento Interno
  - Rastreamento de Ativos
  - SOS
  - Segurança em Campus
slug: /solutions/indoor-positioning-bluetooth-lorawan-tracker
sidebar_position: 1
last_update:
  date: 05/31/2026
  author: Spencer
createdAt: '2025-09-10'
updatedAt: '2026-06-01'
url: https://wiki.seeedstudio.com/pt-br/solutions/indoor-positioning-bluetooth-lorawan-tracker/
---

## Introdução

### Visão geral

O posicionamento interno é um desafio comum para muitos setores. Embora existam sistemas de alta precisão como UWB, eles podem ser caros e complexos. Esta solução oferece uma alternativa flexível e econômica ao combinar duas poderosas tecnologias sem fio: **Bluetooth Low Energy (BLE)** para detecção de localização e **LoRaWAN** para transmissão de dados de longa distância e baixo consumo de energia.

O sistema é construído em torno do [SenseCAP T1000 Tracker](/pt-br/SenseCAP_T1000_tracker/Introduction) e oferece dois modos distintos de posicionamento, permitindo equilibrar precisão e duração da bateria conforme suas necessidades:

1. **Rastreamento de Alta Precisão (Trilateração):** Quando um tracker detecta sinais de **três ou mais** beacons BLE, ele pode calcular suas coordenadas precisas (x, y) em um mapa. Este modo é ideal para rastrear o movimento de ativos ou pessoas, fornecendo atualizações de localização precisas periodicamente ou sempre que houver movimento.

2. **Posicionamento por Zona (Proximidade):** Quando um tracker está ao alcance de apenas um ou dois beacons, ele identifica sua localização com base na proximidade ao beacon mais próximo. Este modo é perfeito para casos de uso mais simples, como check-ins automatizados, confirmação de que um ativo está em uma sala designada ou economia de bateria ao relatar a localização com menos frequência.

Ao oferecer suporte a ambos os métodos, esta solução fornece um sistema versátil e fácil de implantar para uma ampla gama de aplicações de rastreamento interno, desde simples detecção de presença até monitoramento mais detalhado baseado em coordenadas.

:::tip Implante em minutos com o SenseCraft Solution

A maneira mais rápida de colocar este sistema em funcionamento é por meio do **[Sistema de Posicionamento por Beacon BLE em Nível de Campus](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)** na plataforma **SenseCraft Solution**.

Clique em **Deploy**, escolha um tamanho de kit (**Starter / Standard / Enterprise**) e o SenseCraft Solution orienta você em cada etapa — instalando o aplicativo de posicionamento para você (sem comandos Docker manuais) e guiando a configuração dos beacons, gateways e trackers.

👉 **[Deploy this solution →](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**

:::

:::tip Navegue até nossa página de bundle

Confira nossa página de bundle [Posicionamento Integrado Interno e Externo](https://www.seeedstudio.com/Indoor-Outdoor-Integrated-Positioning.html) para ver todos os produtos de que você precisa para implementar esta solução.

:::

### Principais Recursos e Benefícios

- **Econômico e Escalável**: Aproveita beacons BLE acessíveis e evita a necessidade de instalações caras de gateways em cada sala.
- **Transmissão de Dados de Longo Alcance**: Um único gateway LoRaWAN pode cobrir um prédio inteiro ou campus, reduzindo drasticamente os custos de infraestrutura.
- **Alerta SOS Instantâneo**: Os trackers incluem um botão de pânico que, quando pressionado, envia imediatamente um alerta SOS via LoRaWAN para uma resposta rápida em emergências.
- **Gerenciamento Inteligente de Energia**: Usando um acelerômetro integrado, o tracker pode relatar apenas quando o movimento é detectado e enviar sinais periódicos de “heartbeat” nos demais momentos. Isso estende drasticamente a vida útil da bateria para até 6 meses com configurações ideais para muitas aplicações de rastreamento de ativos.
- **Implantação Simples**: A configuração de beacons BLE e gateways LoRaWAN é direta, colocando seu sistema de posicionamento online rapidamente.
- **Pronto para Implantar**: Coloque todo o sistema em funcionamento em minutos — com um clique pela plataforma [SenseCraft Solution](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) ou com um único comando Docker se você fizer self-host. O aplicativo também é totalmente [open-source](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5) caso você queira personalizá-lo.

### Casos de Uso

<div class="info-section">
    <div class="section-header">
        <h2>Casos de Uso</h2>
        <p>Esta solução é ideal para uma ampla gama de aplicações de rastreamento por zona e segurança:</p>
    </div>
    <ul class="info-list">
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg></div><div class="info-content"><h3>Segurança em Campus e Escolas</h3><p>Forneça aos alunos e funcionários um tracker vestível. O botão SOS integrado permite que eles enviem instantaneamente um alerta de emergência com sua última localização conhecida de qualquer lugar do campus, proporcionando tranquilidade e permitindo tempos de resposta mais rápidos.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg></div><div class="info-content"><h3>Gestão de Ativos</h3><p>Rastreie a localização de ativos valiosos, tanto em ambientes internos quanto externos (por exemplo, veículos em um estacionamento). Configure o tracker para relatar apenas quando se mover, economizando bateria enquanto garante que você seja alertado sobre movimentos não autorizados.</p></div></li>
        <li class="info-item"><div class="info-icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" /></svg></div><div class="info-content"><h3>Check-in Automatizado e Gestão de Pessoal</h3><p>Ajustando a intensidade do sinal de um beacon BLE, você pode criar uma zona de “check-in” para escritórios ou casas de repouso. Quando uma pessoa usando um tracker entra na zona, sua presença é registrada automaticamente.</p></div></li>
    </ul>
</div>

### Arquitetura do Sistema

O sistema opera com um princípio simples, porém poderoso. Trackers móveis escutam sinais de beacons fixos e relatam o que ouvem a um servidor central.

![Diagrama da Arquitetura do Sistema](https://media-cdn.seeedstudio.com/media/wysiwyg/IoT_Device/_163.png)

### Pré-requisitos

Os principais componentes são:

1. **Beacons BLE**: Pequenos transmissores fixos colocados em locais conhecidos (por exemplo, entradas de salas, zonas-chave). Eles transmitem continuamente um ID exclusivo.
2. **SenseCAP T1000 Tracker**: Este é o dispositivo móvel anexado ao ativo ou à pessoa que você deseja rastrear. Ele faz varredura em busca de beacons BLE próximos e identifica aquele com o sinal mais forte.
3. **Gateway LoRaWAN**: O tracker envia um pacote de dados contendo o ID do beacon BLE mais próximo para o gateway via LoRaWAN.
4. **Servidor de Rede e Aplicação**: O gateway encaminha os dados para um LoRaWAN Network Server ([SenseCraft Data](https://sensecap.seeed.cc/portal)), que então os direciona para um servidor de aplicação. O servidor de aplicação mantém um mapa dos IDs dos beacons e suas localizações no mundo real, permitindo determinar a posição do tracker (por exemplo, “Tracker #58 está próximo ao Beacon #12, que fica na Sala de Reunião 3”).

Antes de começar, certifique-se de ter o seguinte:

- Um SenseCAP T1000 Tracker
- Um ou mais beacons BLE
- Um gateway LoRaWAN conectado à internet
- Um servidor ou computador com Docker instalado

<div class="seeed-features-container">
    <div class="seeed-features-grid">

  <!-- Card 1: SenseCAP T1000 Tracker -->
  <div class="seeed-feature-card">
      <div class="card-header">
          <h2><a href="https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-B-p-5698.html">SenseCAP T1000 Tracker</a></h2>
          <p>Tracker móvel LoRaWAN® com capacidades de varredura BLE</p>
      </div>
      <div class="card-body">
          <ul class="features-list">
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Detecção de Beacon BLE:</span> Suporta BLE 5.1 para posicionamento preciso em ambientes internos e externos.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.394 9.393a15 15 0 0121.213 0" />
                      </svg>
                  </div>
                  <p><span class="highlight">Rede de Longo Alcance:</span> Conectividade LoRaWAN® Classe A (v1.0.4) para comunicação de longa distância e baixo consumo de energia.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Detecção de Movimento:</span> Acelerômetro integrado para detecção em tempo real de movimento e estado estacionário.</p>
              </li>
              <li class="feature-item">
                  <div class="feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                      </svg>
                  </div>
                  <p><span class="highlight">Botão de Emergência:</span> Botão SOS independente para acionar alertas de emergência com um único pressionar.</p>
              </li>
          </ul>
      </div>
  </div>

  <!-- Card 2: BLE Beacons -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/BC01-Indoor-Bluetooth-Beacon-p-5791.html">Beacons BLE</a></h2>
        <p>Transmissão Bluetooth regular</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                </div>
                <p><span class="highlight">Compatível com protocolos:</span> Bluetooth® LE 5.0 | Suporte completo para formatos iBeacon e Eddystone.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Implantação flexível:</span> Potência de transmissão configurável para ajustar o raio de cobertura.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="size-2">
                    <path d="M4 7.75A.75.75 0 0 1 4.75 7h5.5a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-.75.75h-5.5A.75.75 0 0 1 4 8.25v-.5Z" />
                    <path fill-rule="evenodd" d="M3.25 4A2.25 2.25 0 0 0 1 6.25v3.5A2.25 2.25 0 0 0 3.25 12h8.5A2.25 2.25 0 0 0 14 9.75v-.085a1.5 1.5 0 0 0 1-1.415v-.5a1.5 1.5 0 0 0-1-1.415V6.25A2.25 2.25 0 0 0 11.75 4h-8.5ZM2.5 6.25a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-3.5Z" clip-rule="evenodd" />
                </svg>
                </div>
                <p><span class="highlight">Longa duração:</span> Até <span class="highlight">2 anos</span> de vida útil da bateria com configurações padrão.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 22.5l-.648-1.938a3.375 3.375 0 00-2.456-2.456L11.25 18l1.938-.648a3.375 3.375 0 002.456-2.456L16.25 13.5l.648 1.938a3.375 3.375 0 002.456 2.456L21 18l-1.938.648a3.375 3.375 0 00-2.456 2.456z" />
                    </svg>
                </div>
                <p><span class="highlight">Instalação fácil:</span> Acompanha adesivo na parte traseira para fácil fixação em paredes ou outras superfícies.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-radio-icon lucide-radio"><path d="M16.247 7.761a6 6 0 0 1 0 8.478"/><path d="M19.075 4.933a10 10 0 0 1 0 14.134"/><path d="M4.925 19.067a10 10 0 0 1 0-14.134"/><path d="M7.753 16.239a6 6 0 0 1 0-8.478"/><circle cx="12" cy="12" r="2"/></svg>
                </div>
                <p><span class="highlight">Alcance de transmissão:</span> Até 75 metros em áreas externas, 120 metros em áreas internas abertas.</p>
            </li>
        </ul>
    </div>
</div>

  <!-- Card 3: SenseCAP M2 Multi-Platform Gateway -->
  <div class="seeed-feature-card">
    <div class="card-header">
        <h2><a href="https://www.seeedstudio.com/SenseCAP-Multi-Platform-LoRaWAN-Indoor-Gateway-SX1302-US915-p-5472.html">SenseCAP M2 Multi-Platform Gateway</a></h2>
        <p>Infraestrutura de rede LoRaWAN®</p>
    </div>
    <div class="card-body">
        <ul class="features-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p><span class="highlight">Ampla cobertura:</span> Raio de cobertura interna de até <span class="highlight">2 km</span>, garantindo sinal estável.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.542 2.72c.266.059.537.1.82.118m7.542 2.72a3 3 0 01-4.682-2.72m0 0a3 3 0 013.741-.479m-.479 3.742a9.094 9.094 0 01-3.742.479m-12 .482c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479m0 0a3 3 0 01-3.741.479m5.421 2.053a3 3 0 01-4.682-2.72m0 0c.266.059.537.1.82.118a9.094 9.094 0 013.742-.479M12 12a3 3 0 01-3-3m0 0a3 3 0 013-3m0 0a3 3 0 013 3m0 0a3 3 0 01-3 3z" />
                    </svg>
                </div>
                <p><span class="highlight">Conectividade massiva:</span> Suporta mais de <span class="highlight">200</span> dispositivos simultâneos com excelente desempenho.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                    </svg>
                </div>
                <p><span class="highlight">Múltiplos backhauls:</span> Oferece múltiplas opções de backhaul de rede, incluindo Ethernet, Wi-Fi e 4G.</p>
            </li>
            <li class="feature-item">
                <div class="feature-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 17.25v-.228a4.5 4.5 0 00-.12-1.03l-2.268-9.64a3.375 3.375 0 00-3.285-2.602H7.923a3.375 3.375 0 00-3.285 2.602l-2.268 9.64a4.5 4.5 0 00-.12 1.03v.228m19.5 0a3 3 0 01-3 3H5.25a3 3 0 01-3-3m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m16.5 0h.008v.008h-.008v-.008z" />
                    </svg>
                </div>
                <p><span class="highlight">Solução integrada:</span> Recursos integrados de servidor LoRaWAN local para simplificar a implantação e o gerenciamento da rede.</p>
            </li>
        </ul>
    </div>
  </div>
</div>
</div>

## Guia de Introdução

<div align="center">
<img class='img-responsive' width="1280" src="https://mermaid.ink/img/pako:eNo9jk9vwjAMxb9K5HOp2tE_JIdJQDcuO41phzUcotYtFW0SpYkYVHz3BSrmk9_Pz_aboFI1AoOmV-fqKIwlH59cEl_rcm-9PpDF4pVsygJ1ry5kg6JScpzpttyjdZrshMWzuMyweFrXWs_krdwq2XStM0i-jKhOaObBe_ndjU703RVnsPPOQfdo8cAlBNCargZmjcMABjSDuEuY7gE52CMOyIH5thbmxIHLm9_RQv4oNTzXjHLtEVgj-tErp2uftehEa8TwTw3KGs1WOWmB0Sh9HAE2wS-wLA6XeULzlyyL0piuaBLABVgc0ZBmeZymyTJa0SjJbgFcH3-jcJWntz-sxGvR?type=png" alt="Indoor positioning 2d map"/>
</div>

Existem duas maneiras de implantar este sistema — escolha uma para o **Passo 2**:

- **Recomendado — SenseCraft Solution (guiado):** Abra a [página da solução](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan), clique em **Deploy** e escolha um tamanho de kit. SenseCraft Solution instala o aplicativo de posicionamento para você e orienta a configuração de hardware de ponta a ponta.
- **Manual — auto-hospedado com Docker:** Prefere executá-lo você mesmo? Use o caminho manual com Docker descrito no [Passo 2](#passo-2-instalar-o-aplicativo-de-posicionamento).

De qualquer forma, toda implantação segue os mesmos cinco estágios:

1. **Implantar Beacons**: Coloque beacons BLE em locais estratégicos em toda a sua instalação. Crie um mapa ou lista documentando o ID exclusivo de cada beacon e sua localização física (por exemplo, `Beacon_ID_01: "Entrada Principal"`, `Beacon_ID_02: "Armazém Zona A"`).
2. **Configure o Gateway**: Conecte seu gateway LoRaWAN à internet e configure-o para encaminhar pacotes para o LoRaWAN Network Server escolhido.
3. **Implante o Aplicativo**: Instale o aplicativo pronto SenseCraft Indoor Positioning — com um clique via SenseCraft Solution ou em auto-hospedagem com Docker (veja a [Etapa 2](#step-2-install-the-positioning-application)). Não é necessário nenhum código de backend personalizado.
4. **Configure o Rastreador**: Ative o SenseCAP T1000 e faça o provisionamento dele no seu LoRaWAN Network Server. Certifique-se de que ele esteja configurado para o modo de varredura BLE.
5. **Visualize**: À medida que o rastreador se move pela instalação, ele informará o beacon mais próximo, e seu aplicativo poderá exibir sua localização em um painel ou mapa.

### Etapa 1: Configure seu Hardware

Primeiro, você precisa configurar os dispositivos físicos na sua instalação.

#### **1a. Implantar Beacons**

:::info
Para especificações técnicas completas, consulte a **[documentação do BC01 Indoor Bluetooth Beacon](/pt-br/bluetooth_beacon_for_SenseCAP_Traker/)**.
:::

Comece posicionando **beacons BLE (Bluetooth Low Energy)** em locais estratégicos dentro da sua instalação — como a **entrada principal, armazém e áreas de escritório**.
<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/10.5.png" alt="Indoor positioning 2d map"/>
</div>

Consulte o vídeo abaixo para um guia passo a passo sobre como adicionar as informações do seu beacon ao sistema.
Você também pode consultar a [seção de Dicas](#tips) para ajuda adicional.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-configuration.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

<details>
<summary>Visão rápida dos parâmetros do beacon BC01</summary>

| Parâmetros     | Valor Padrão                         |
| -------------- | ------------------------------------ |
| UUID           | FDA50693-A4E2-4FB1-AFCF-C6EB07647825 |
| Major          | 10001                                |
| Minor          | 19641                                |
| Measured power | -59dBm                               |
| Tx Power       | -30 - +4dBm, padrão 0dBm             |
| Adv Interval   | 100ms~10s, padrão 500ms              |
| Password       | seeed123 (Letras e números)          |
| Device Name    | BC01 (1-7 caracteres)                |
| Soft Reboot    | seeed123 (igual à senha)             |

</details>

#### 1b. Configure o Gateway

Ligue seu **gateway LoRaWAN** e conecte-o à internet.  
Em seguida, siga as instruções abaixo de acordo com o **network server** que você está usando.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="sensecap-portal" label="SenseCraft Data" default>

Por padrão, o gateway LoRaWAN encaminha dados para a plataforma [**SenseCraft Data**](https://sensecap.seeed.cc/portal/) (anteriormente **SenseCAP Portal**).

1. Siga o [manual oficial do usuário](/pt-br/quick_start_with_M2_MP) para garantir que seu gateway esteja **online** e **vinculado à sua conta**.  
2. Depois que a conexão for verificada, você pode **prosseguir para a próxima etapa (Etapa 2)**.

</TabItem>

<TabItem value="chirpstack" label="ChirpStack (Servidor LoRaWAN Local)">

Se você estiver usando um servidor **ChirpStack em auto-hospedagem** integrado ao seu gateway, será necessário **redirecionar os dados do gateway** e **preparar um script de decodificação**.

1. **Configure o Gateway:** Siga este guia para [redirecionar os dados uplink do seu gateway para o ChirpStack](/pt-br/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/SenseCAP_M2_MP_Gateway_LNS_Configuration/).  
2. **Baixe o Script de Decodificação:** O ChirpStack requer um decodificador para interpretar os dados do rastreador T1000. Baixe o script abaixo para deixá-lo pronto para a etapa de configuração posterior.
    - [**Baixar Script de Decodificação T1000**](https://github.com/Seeed-Solution/SenseCAP-Decoder/blob/main/T1000/TTN/SenseCAP_T1000_TTN_Decoder.js)
    **Observação:** Este script deve ser adicionado às **Configurações de Aplicação do ChirpStack**, não diretamente no dispositivo gateway.

<div style={{ textAlign: 'center' }}>
<video width="640" height="480" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-app-for-chripstack.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
</div>

</TabItem>
</Tabs>

### Etapa 2: Instale o Aplicativo de Posicionamento

O aplicativo de posicionamento é um serviço web leve (um único contêiner Docker) que recebe dados do rastreador via MQTT e renderiza o mapa em tempo real. Há duas maneiras de instalá-lo — escolha a que melhor se adapta a você.

Se você quiser explorar a interface primeiro, pode conferir a [demo ao vivo](https://indoorpositioning-demo.seeed.cc/).

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-preview.png" alt="Indoor positioning application preview"/>
</div>

<Tabs>
<TabItem value="sensecraft-solution" label="SenseCraft Solution (Recomendado)" default>

O caminho mais fácil — sem terminal, sem comandos manuais.

1. Abra a página da solução **[Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan)**.
2. Clique em **Deploy** e escolha o tamanho do seu kit (**Starter / Standard / Enterprise**).
3. O SenseCraft Solution instala o aplicativo de posicionamento para você — na sua máquina local ou em um servidor remoto via SSH — e abre o painel automaticamente assim que o serviço estiver saudável.

Quando o painel abrir, continue para a [Etapa 3](#step-3-configure-the-application) para conectar sua fonte de dados LoRaWAN.

</TabItem>

<TabItem value="manual-docker" label="Manual (Docker)">

Prefere auto-hospedar? Abra um terminal no seu servidor e execute o seguinte comando:

```shell
docker run -p 5173:5173 \
--name indoor-positioning \
--restart unless-stopped \
-v ./db:/app/db/ \
-v ./config:/app/server/config/json \
-v ./uploads:/app/uploads \
-d seeedcloud/sensecraft-indoor-positioning
```

> 💡 Observação: Use o PowerShell em vez de um terminal CMD se estiver executando o comando no Windows.
> Para usuários da China continental, você pode usar o [chsrc](https://chsrc.run/) para alternar o espelho do registro Docker para um download mais rápido.

**O que este comando faz:**

- Faz o download e inicia o contêiner do aplicativo SenseCraft Indoor Positioning.
- `-p 5173:5173` torna o painel web acessível na porta `5173`.
- Monta os diretórios locais:
  - `/app/db/` → armazena bancos de dados e mapas.
  - `/app/server/config/json` → armazena arquivos de configuração.
  - `/app/uploads` → armazena arquivos enviados.
- `-d` executa o aplicativo em segundo plano.

</TabItem>
</Tabs>

---

Quando o aplicativo estiver em execução, abra seu navegador web e acesse:

👉 `http://<your_server_ip>:5173`

Agora você deve ver o painel SenseCraft Indoor Positioning em execução no seu servidor.

:::info Login Credentials

- **Username:** `admin`
- **Password:** `83EtWJUbGrPnQjdCqyKq`
:::

### Etapa 3: Configure o Aplicativo

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="app-configuration-management"/>
</div>

#### 3a. Configuração de Runtime (Conectando ao LoRaWAN)

Use esta configuração para conectar o aplicativo ao seu LoRaWAN Network Server e receber dados do rastreador.
O aplicativo pode se conectar tanto ao **SenseCraft Data** quanto ao **servidor ChirpStack Local** ao mesmo tempo.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-server-runtime-configuration.png" alt="app-server-runtime-configuration"/>
</div>

Ative uma ou ambas as fontes MQTT no painel:

##### Conectar ao SenseCraft Data

1. Ative o **SenseCAP OpenStream MQTT**.
2. Insira seu **Username** e **API Key** - Obtenha-os no [guia de início rápido da Data OpenStream API](/pt-br/sensecraft-data-platform/api/data-openstream-api/data_openstream_api_quickstart/).

##### Conectar ao ChirpStack

1. Ative o **ChirpStack MQTT**.
2. Insira o **endereço do servidor** e o **Application ID** - O tópico MQTT será preenchido automaticamente. Você pode encontrar o Application ID na página da sua aplicação ChirpStack.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/chirpstack-application-id.png" alt="chirpstack-application-id"/>
</div>

> **Observação:** O campo `{clientID}` é gerado automaticamente; não o edite.  
> **Importante:** Após qualquer alteração, reinicie o contêiner Docker para que as atualizações entrem em vigor.

##### Outras Configurações

Essas opções podem ser alteradas a qualquer momento (não é necessário reiniciar):

- **Authentication** – Atualize as credenciais de login do painel.
- **Area Positioning** – Estime a localização aproximada do rastreador quando os sinais dos beacons forem fracos ou esparsos.
- **Tracker Access Control** – Limite quais dispositivos podem ser posicionados (aberto para todos ou por lista de permissão).
- **Webhook** – Envie dados de localização para o seu serviço via HTTP POST.

#### 3b. Configuração de Mapa e Beacon

Clique em `Create` para criar seu primeiro mapa.

<div align="center">
<img class='img-responsive' width="480" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/app-configuration-management.png" alt="Application Configuration Management"/>
</div>

Envie seus **dados de mapa** neste painel.
Atualmente, a versão de demonstração só oferece suporte à importação de arquivos em um **formato semelhante a GeoJSON** que contenha **entidades de polilinha**.
Abaixo está um modelo JSON de exemplo para referência:

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {}
}
```

Este JSON define um **layout de piso 2D** usando **polylines** baseadas em coordenadas, que representam elementos do mapa, como paredes ou limites.
Outros tipos de geometria não são suportados na versão de demonstração atual.

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/import-map-geo-json.png" alt="import-map-geo-json"/>
</div>

2. **Adicionar Beacons**

Na seção Beacons, adicione o endereço MAC, o ID e a localização de cada beacon.
Você pode posicioná-los diretamente no mapa enviado usando a lista que você criou na [Etapa 1a](#1a-implantar-beacons).

<div align="center">
  <img class='img-responsive' width={680} src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/maps-add-beacons.png" alt="maps-add-beacons"/>
</div>

3. **Ajustar Fator Ambiental (Opcional)**

Ajuste finamente a precisão da localização ajustando como a intensidade do sinal (**RSSI**) é convertida em distância.

- O valor padrão (~2,0) funciona bem para áreas abertas.
- Para ambientes internos complexos, tente valores entre **1,8 e 4,0**.
- Comece com a configuração padrão e ajuste depois, se necessário.

### Etapa 4: Ativar e Visualizar Seu Rastreador

A etapa final é ligar o seu rastreador e vê-lo no mapa.

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/tracker-visualize-on-map.png" alt="tracker-visualize-on-map"/>
</div>

1. **Ative o Rastreador SenseCAP T1000** e faça o onboarding dele no seu LoRaWAN Network Server. Certifique-se de que seu gateway esteja online e que o dispositivo rastreador esteja "registrado" no servidor LNS. Consulte a [Etapa 1b](#1b-configurar-o-gateway) para mais detalhes.
2. **Certifique-se de que ele esteja configurado no modo de varredura BLE** para que possa detectar os beacons. Veja o vídeo abaixo para obter ajuda.
3. **Visualizar:** À medida que o rastreador se move pela sua instalação, ele detectará os beacons mais próximos e reportará sua localização. Você verá o ícone se movendo pelo mapa no seu painel.

<div style={{ textAlign: 'center' }}>
<video width="480" height="640" controls>
  <source src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/indoor-position-tracker-configuration.mp4" type="video/mp4" />
  Seu navegador não oferece suporte à tag de vídeo.
</video>
<p><em>Opte por `Other Platform` ao usar ChirpStack.</em></p>
<p><em>Mantenha as configurações de plataforma padrão (SenseCAP para The Things Network) ao usar SenseCraft Data.</em></p>
</div>

## Visão Geral dos Recursos do Aplicativo

### Recurso 1: Envio de Dados (Webhook & WebSocket)

Você pode obter dados em tempo real do sistema de duas maneiras:

- **Webhook:** Conforme mencionado na configuração, isso envia dados para uma URL que você fornecer.
- **WebSocket:** Para aplicações em tempo real, você pode se conectar ao endpoint `/ws` usando Autenticação HTTP Básica. Os formatos de dados para `sos`, `tracker_update` (trilateração) e `tracker_location_approximate` (proximidade) são detalhados nos exemplos JSON fornecidos no documento original.

#### **Formatos de Dados**

<Tabs>
<TabItem value="sos" label="Alerta SOS" default>

```json
{
    "type": "tracker_sos",
    "data": {
        "2CF7F1C0530004AD": {
            "timestamp": 1756967508000,
            "sos": 0
        }
    }
}
```

</TabItem>
<TabItem value="trilateration" label="Trilateração/Multilateral">

```json
{
    "type": "tracker_update",
    "data": {
        "2CF7F1C0530003BD": {
            "trackerId": "2CF7F1C0530003BD",
            "timestamp": 1756967455550,
            "position": {
                "x": 11.1,
                "y": 12.3
            },
            "last_detected_beacons": [
                {
                    "macAddress": "C3:00:00:56:4B:5D",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -79,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:3E:7D:AA",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                },
                {
                    "macAddress": "C3:00:00:13:3C:99",
                    "major": null,
                    "minor": null,
                    "name": "Unknown Beacon",
                    "rssi": -80,
                    "txPower": null,
                    "configured_x": null,
                    "configured_y": null
                }
            ],
            "position_history": [],
            "map": "10 Floor",
            "sos": 2
        }
    }
}
```

</TabItem>
<TabItem value="area" label="Posicionamento por Área">

```json
{
    "type": "tracker_location_approximate",
    "data": {
        "2CF7F1C0530004AD": {
            "trackerId": "2CF7F1C0530004AD",
            "timestamp": 1756967098851,
            "radius": 5.248074602497725,
            "last_detected_beacons": [
                {
                    "txPower": -59,
                    "rssi": -77,
                    "name": "corner",
                    "configured_x": 32.41,
                    "configured_y": 21.26,
                    "macAddress": "C3:00:00:56:4B:59"
                }
            ],
            "map": "10.5 Floor",
            "sos": 0
        }
    }
}
```

</TabItem>
</Tabs>

### Recurso 2: Dois Modos de Posicionamento

O sistema oferece suporte a dois métodos de posicionamento:

1. **Trilateração:** Quando o rastreador detecta **três ou mais** beacons, ele calcula uma coordenada precisa (x, y). Este é o modo padrão e mais preciso.
2. **Proximidade (Posicionamento por Área):** Se você ativar isso e o rastreador só conseguir detectar **um** beacon, ele reportará sua posição como estando "próximo" daquele beacon dentro de um raio calculado. Isso é útil para garantir cobertura em todas as áreas.

*Trilateração*

<table align="center">
<tr>
    <th>Trilateração</th>
    <th>Trilateração (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/Trilateration-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

*Posicionamento por Área*

<table align="center">
<tr>
    <th>Posicionamento por Área</th>
    <th>Posicionamento por Área (SOS)</th>
</tr>
 <tr>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-normal.png" alt="area-positioning-normal" style={{width:500, height:'auto'}}/></div></td>
     <td><div style={{textAlign:'center'}}><img src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/area-positioning-sos.png" alt="area-positioning-sos" style={{width:500, height:'auto'}}/></div></td>
 </tr>
</table>

### Recurso 3: Visualizar Histórico de Alertas

Você pode visualizar o histórico de alertas (por exemplo, acionamentos do botão SOS) de qualquer rastreador clicando em seu ícone no mapa. O sistema registra cada novo alerta e continuará enviando notificações para um alerta ativo até que ele seja resolvido.

<div align="center">
<img class='img-responsive' width="680" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/alert-history-records.png" alt="alert-history-records"/>
</div>

### Recurso 4: Filtrar por UUID do Beacon

Você pode filtrar os rastreadores exibidos no mapa pelos UUIDs de beacon associados. Isso permite um monitoramento mais focado de áreas ou ativos específicos. Isso é valioso para não ser invadido.

<div align="center">
<img class='img-responsive' width="360" src="https://files.seeedstudio.com/wiki/solution/smart-building/indoor-positioning-bluetooth-lorawan-tracker/sensecraft-ble-filter.png" alt="sensecraft-ble-filter"/>
</div>

## Referência e Recursos

- **Implantar com a solução SenseCraft**: [Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan) — implantação guiada com um clique
- **Imagem Docker**: [seeedcloud/sensecraft-indoor-positioning - Docker Hub](https://hub.docker.com/r/seeedcloud/sensecraft-indoor-positioning)
- **Código-fonte**: [Solution_IndoorPositioning_H5 - GitHub](https://github.com/Seeed-Solution/Solution_IndoorPositioning_H5)
- **Site de Demonstração ao Vivo**: [IndoorPositioning](https://indoorpositioning-demo.seeed.cc/)

## Dicas

Aqui estão algumas dicas úteis para ajudar você a implantar e configurar seus beacons com mais eficiência:

### 1. Registrar Informações dos Beacons

É **fortemente recomendado** registrar o **endereço MAC exclusivo** de cada beacon juntamente com seu **local de instalação**.  
Isso será **crucial** durante a [etapa de configuração de software](#3b-configuração-de-mapa-e-beacon) e ajudará você a **identificar e selecionar facilmente** o beacon correto durante o mapeamento ou solução de problemas.

| **Endereço MAC** | **Localização**   | **ID do Beacon** |
| --------------- | ---------------- | ---------------- |
| c30000564b31    | Entrada Principal | 01               |
| c30000564b32    | Armazém Zona A   | 02               |
| c30000564b33    | Escritório de Canto | 03            |

### 2. Usar um UUID Consistente para Todos os Beacons

Para facilitar o gerenciamento, você pode usar o **app SenseCraft** para atribuir um **UUID** consistente a todos os seus beacons.  
Isso garante que seu rastreador só ouça **seus próprios dispositivos** e **ignore outros beacons próximos**.  
Confira o [Recurso 4: Filtrar por UUID do Beacon](#recurso-4-filtrar-por-uuid-do-beacon) para mais detalhes.

### 3. Escolha locais de montagem estáveis

Instale os beacons em áreas **fixas, abertas e desobstruídas** para garantir um sinal Bluetooth estável.  
Evite colocá-los próximos a **superfícies metálicas**, **painéis elétricos** ou **roteadores Wi‑Fi**, que podem causar interferência.

### 4. Identifique e fixe cada beacon

Anexe uma **etiqueta visível** (por exemplo, Beacon-01, Beacon-02) correspondente à tabela de registros para evitar confusão durante a manutenção.  
Certifique-se de que o dispositivo esteja **firmemente montado** para evitar deslocamentos acidentais.

### 5. Verifique o alcance do sinal

Antes de finalizar a instalação, teste a **cobertura do sinal** usando um app de scanner BLE ou uma ferramenta de configuração para garantir **detecção consistente** nas suas zonas-alvo.

### 6. Adicione ou ajuste rapidamente os dados dos beacons

Se você estiver usando um arquivo de configuração *semelhante a GeoJSON*, também poderá editar diretamente o arquivo de mapa exportado para adicionar ou ajustar rapidamente os dados dos beacons e, em seguida, importá-lo novamente para o aplicativo.

```json
{
  "map": {
    "width": 29.53000000000094,
    "height": 22.212853765822828,
    "entities": [
      {
        "type": "polyline",
        "points": [
          [12.894968342021272, 17.07477114091087],
          [12.894968342021272, 17.114771140910868]
        ],
        "closed": false
      },
      {
        "type": "polyline",
        "points": [
          [12.944968342021284, 17.114771140910868],
          [12.894968342021272, 17.07477114091087]
        ],
        "closed": false
      }
    ]
  },
  "beacons": {
    "beacon-01": {
      "uuid": "FDA50693-A4E2-4FB1-AFCF-C6EB07647825",
      "major": 10001,
      "minor": 19641,
      "x": 26.38,
      "y": 4.4,
      "txPower": -59,
      "displayName": "Corner",
      "macAddress": "C3:00:00:58:4B:38",
    }
  }
}
```

> Dica: editar o JSON diretamente é útil ao adicionar vários beacons de uma só vez ou ao ajustar finamente suas coordenadas fora do painel.

## FAQ

<details>
<summary>Por que meu rastreador não está reportando sua localização?</summary>

- **Causa provável:** Pode haver um problema com a conectividade LoRaWAN.
- **Solução:** Verifique o status do seu gateway LoRaWAN para garantir que ele esteja online e conectado. Além disso, confirme se o Device EUI do rastreador está registrado corretamente no seu servidor de rede.

</details>

<details>
<summary>Por que a posição do rastreador está imprecisa?</summary>

- **Causa provável:** A disposição dos seus beacons BLE pode estar causando interferência ou cobertura fraca de sinal.
- **Solução:** Tente ajustar a potência de transmissão dos beacons. Talvez seja necessário realocá-los para reduzir a obstrução do sinal por paredes ou máquinas.

</details>

<details>
<summary>Por que a bateria do rastreador está descarregando tão rápido?</summary>

- **Causa provável:** A frequência de reporte está configurada muito alta, fazendo com que o dispositivo transmita dados com mais frequência do que o necessário.
- **Solução:** Otimize as configurações de detecção de movimento para reportar apenas quando o rastreador estiver se movendo. Você também pode aumentar o intervalo de reporte (o tempo entre as atualizações de localização) para economizar energia.

</details>

<details>
<summary>Por que os dados de localização estão faltando ou não aparecem?</summary>

- **Causa provável:** Pode haver um problema com o banco de dados ou com a API, geralmente relacionado à forma como o payload de dados está sendo interpretado.
- **Solução:** Primeiro, verifique se o decodificador de payload no seu servidor de aplicação está correto e funcionando. Se o decodificador estiver correto, verifique os logs do servidor de aplicação em busca de erros ou problemas de conectividade.

</details>

<details>
<summary>Por que os alertas de SOS não estão sendo recebidos prontamente?</summary>

- **Causa provável:** A rede LoRaWAN pode estar congestionada ou a classe do dispositivo não é adequada para mensagens urgentes.
- **Solução:** Para aplicações críticas em tempo, como alertas de SOS, certifique-se de que seu rastreador esteja configurado para usar o **modo Classe C**. Isso mantém o receptor do dispositivo ligado continuamente, permitindo a recepção imediata de mensagens do servidor.

</details>

<details>
<summary>Como ajusto o intervalo de advertising e a potência de transmissão de um beacon BC01?</summary>

Você pode usar o **app SenseCraft** para configurar o beacon BC01.

1. Instale o app SenseCraft pela [Google Play Store](https://play.google.com/store/apps/details?id=cc.seeed.sensecapmate) ou [Apple App Store](https://apps.apple.com/us/app/sensecraft/id1619944834).
2. Abra o app e ative o Bluetooth no seu telefone.
3. Procure por beacons próximos e selecione aquele que você deseja configurar.
4. Insira a senha padrão "**seeed123**" para acessar as configurações.
5. Ajuste o intervalo de advertising (100ms a 10s) e a potência de transmissão (-30dBm a +4dBm) conforme suas necessidades.
6. Salve as alterações.

</details>

## REGISTRO DE ALTERAÇÕES

**2026-05-29:**

- Reestruturado o guia de implantação para começar com a implantação guiada em um clique da **SenseCraft Solution** (kits Starter / Standard / Enterprise), mantendo a auto-hospedagem manual via Docker como caminho alternativo.
- Adicionado um call-to-action de implantação e atualizados os links de Referência & Recursos para apontar para a página da solução [Campus-level BLE Beacon Positioning System](https://www.seeed.cc/solutions/reference-designs/indoor_positioning_ble_lorawan); adicionado o link do código-fonte no GitHub.

**2025-11-10:**

- Reformuladas as orientações de implantação de beacons e configuração de gateway para esclarecer as melhores práticas de posicionamento, materiais de referência e instruções específicas de servidor de rede para SenseCraft Data e ChirpStack.
- Ampliadas as seções de configuração em tempo de execução e de configuração de mapa/beacons com orientações de UI mais claras, exemplos de importação GeoJSON e dicas opcionais de ajuste para fatores ambientais.
- Adicionada uma seção dedicada de Dicas cobrindo registro de beacons, gerenciamento de UUID, montagem, validação e edição em lote para que as implantações sejam mais fáceis de escalar e depurar.
