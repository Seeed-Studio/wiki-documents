---
description: Serviço para Fusion PCB
title: Serviço para Fusion PCB
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_PCB
last_update:
  date: 1/13/2023
  author: shuxu hu
createdAt: '2023-02-17'
updatedAt: '2026-03-03'
url: https://wiki.seeedstudio.com/pt-br/Service_for_Fusion_PCB/
---

Por favor, leia esta página antes de usar o [serviço Fusion PCB](https://www.seeedstudio.com/fusion_pcb.html). **O preço será calculado com base nas suas opções**.

## Sobre o serviço de PCB

Como entusiastas nós mesmos, organizamos a capacidade de fabricação local, fazemos o painel das placas, reduzimos o custo de envio e garantimos a qualidade. Isso será uma fonte para sustentar nosso estúdio junto com outros serviços que fornecemos.

### Etapas do pedido Fusion PCB

1. Acesse a página de pedido Fusion PCB: [https://www.seeedstudio.com/fusion_pcb.html](https://www.seeedstudio.com/fusion_pcb.html)

2. Envie o arquivo Gerber e selecione os parâmetros.

3. Finalize a compra e pague o pedido.

Se o arquivo e o design atenderem aos requisitos, eles serão processados e enviados em 4–6 dias (excluindo os feriados chineses).

### Requisito do arquivo Gerber

**As seguintes camadas são necessárias:**

- Camada superior: pcbname.GTL
- Camada inferior: pcbname.GBL
- Máscara de Solda superior: pcbname.GTS
- Máscara de Solda inferior pcbname.GBS
- Silk superior: pcbname.GTO
- Silk inferior pcbname.GBO
- Furação NC: pcbname.TXT
- O contorno da placa deve ser incluído em pelo menos uma camada.

- O arquivo Gerber deve estar no formato RS-274x.

### Dicas de projeto de PCB

DESIGN ÚNICO, SEM PAINELIZAÇÃO

**Observação:**

- Seu arquivo Gerber deve incluir apenas um design.
- Linhas de furação e ranhuras longas não podem ser aceitas
- Ranhura mínima 1mm*1mm
- Compatível com DRC conforme arquivo de regras anexado
- O tamanho da PCB é o menor retângulo que pode acomodar a PCB

**Opção de quantidade disponível:** 10pcs, 50pcs, 100pcs e mais.

A QUANTIDADE MÍNIMA QUE PODEMOS INICIAR AQUI É 5pcs.

**Observação:** Se você quiser pedir mais de 10pcs, verifique o preço para diferentes opções e escolha a mais econômica.

**Exemplo:**
Para tamanho de PCB (50mm X 100mm), a opção 4 x 10pcs custa mais do que a opção 1 x 50pcs.

### Capacidades do Fusion PCB

- Múltiplas camadas: até 16 camadas

- Material da PCB: FR-4

- Cor disponível:
  - Máscara de Solda: Verde, Vermelha, Amarela, Azul, Branca, Preta
  - Silk Screen: Branco, Preto (apenas para Máscara de Solda branca)

- Fonte: o mínimo é 6 mil de largura de linha e 32 mil de altura, um pouco maior será melhor.

**Tamanho máximo disponível:** 50mm X 50mm, 50mm X 100mm, 50mm X 150mm, 50mm X 200mm, 100mm X 100mm, 100mm X 150mm, 100mm X 200mm, 150mm X 150mm, 150mm X 200mm, 200mm X 200mm

**Observação:** As dimensões da PCB (tanto comprimento quanto largura) devem estar dentro da opção de tamanho de PCB

**Exemplo:**

Design de PCB: 30mm X 60mm   Opção: 50mm X 50mm (Não)   50mm X 100mm (Sim)

Design de PCB: 101mm X 40mm   Opção: 100mm X 50mm (Não)   150mm X 50mm (Sim)

Design de PCB: 70mm X 70mm   Opção: 50mm X 150mm (Não)   100mm X 100mm (Sim)

**Espessura de placa disponível:** 0.8mm, 1.0mm, 1.2mm, 1.6mm, 2.0mm

(Os custos de 0.8mm, 1.0mm, 1.2mm e 1.6mm são os mesmos)

**Tolerância de espessura:** (t≥0.8mm) +/- 10%

**Tolerância de espessura:** (t&lt;0.8mm) +/- 10%

**Espessura da camada de isolamento:** 0.075mm--5.00mm

**Linha mínima:** 6mil

**Espaçamento mínimo:** 6mil

**Espessura do cobre da camada externa:** 1oz (35um)

**Espessura do cobre da camada interna:** 17um—100um

**Furo de furação (mecânico):** 0.3mm—6.35mm

**Furo final (mecânico):** 0.3mm—6.30mm

**Tolerância de diâmetro (mecânico):** 0.08mm

**Registro (mecânico):** 0.09mm

**Taxa de aspecto:** 8:1

**Tipo de máscara de solda:** Tinta fotossensível

**Largura mínima da máscara de solda para SMT:** 0.1mm

**Folga mínima da máscara de solda:** 0.1mm

**Diâmetro do furo preenchido:** 0.25—0.60mm

**Acabamento de superfície:** HASL, HASL (Lead Free) +\$5, ENIG+\$10.

**E-TEST:** 50% e-test, 100% e-test +\$10
50% e-test (a PCB testada terá uma marca na borda da PCB).
100% e-test opcional por mais \$10

**Regras de projeto Eagle:** [http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification](http://support.seeedstudio.com/knowledgebase/articles/447362-fusion-pcb-specification)

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para lhe fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja o mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
