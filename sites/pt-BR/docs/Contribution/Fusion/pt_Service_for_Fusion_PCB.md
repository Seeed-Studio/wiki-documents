---
description: Guia de Serviço Seeed Fusion PCB & PCBA
title: Guia de Serviço Seeed Fusion PCB & PCBA
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_PCB
last_update:
  date: 9/16/2026
  author: shuxu hu
createdAt: '2023-02-17'
updatedAt: '2025-09-18'
url: https://wiki.seeedstudio.com/pt-br/Service_for_Fusion_PCB/
---

Este guia abrange fabricação de PCB e montagem de PCB, incluindo capacidades, arquivos de produção, pedido, requisitos de projeto, revisão de engenharia, testes e planejamento de entrega.

## Sobre o Fusion PCB & PCBA

Seeed Fusion fornece serviços de fabricação de PCB nu e PCBA turnkey, incluindo aquisição de componentes e montagem, desde protótipos e pequenos lotes até produção em volume. Você pode pedir apenas as placas nuas ou adicionar requisitos de montagem e teste ao mesmo projeto na [página de pedido Fusion](https://www.seeedstudio.com/fusion_pcb.html).

### Etapas do Pedido Fusion PCB & PCBA

1. Abra a [página de pedido Fusion PCB/PCBA](https://www.seeedstudio.com/fusion_pcb.html).

2. Envie seu arquivo compactado Gerber e selecione as dimensões da placa, quantidade e opções de fabricação.

3. Para PCBs nus, revise a cotação e prossiga para o checkout. Para montagem, ative **PCB Assembly**, envie a BOM, insira a quantidade de PCBA e adicione os arquivos relevantes de montagem ou teste.

4. Revise as correspondências de componentes e o detalhamento de preços, depois conclua o checkout e o pagamento.

Os pedidos de PCB começam em 5 peças, e os pedidos de montagem de PCB começam em 1 peça. A precificação depende das especificações e quantidade de PCB selecionadas, bem como dos requisitos de componentes e montagem para pedidos de PCBA.

### Requisitos de Arquivo Gerber

Coloque os arquivos Gerber e de furação em uma pasta e envie um arquivo ZIP ou RAR (máximo de 20 MB). A tabela abaixo mostra nomes de arquivo comuns para as camadas do seu projeto.

| Arquivo | Exemplo de nome de arquivo |
| --- | --- |
| Cobre superior / inferior | pcbname.GTL / pcbname.GBL |
| Máscara de solda superior / inferior | pcbname.GTS / pcbname.GBS |
| Serigrafia superior / inferior | pcbname.GTO / pcbname.GBO |
| Contorno da placa | pcbname.GML ou pcbname.GKO |
| Arquivo de furação | pcbname.TXT |
| Camadas internas de cobre | pcbname.GL2, pcbname.GL3, etc. |

Inclua os arquivos internos de cobre correspondentes para placas multicamadas. Use RS-274X para arquivos Gerber e Excellon para arquivos de furação. É necessário um contorno completo da placa, de preferência em uma camada mecânica separada.

Antes de fazer o pedido, use o Gerber Viewer na [página de pedido](https://www.seeedstudio.com/fusion_pcb.html) para pré-visualizar seus arquivos exportados. Verifique se o contorno da placa e as camadas correspondem ao projeto pretendido.

### Arquivos Adicionais para Pedidos de PCBA

#### Lista de Materiais (BOM)

Arquivos Gerber e uma BOM são os arquivos básicos usados para iniciar uma cotação de PCBA e a revisão de arquivos. Prepare a BOM usando o modelo Fusion em formato XLS, XLSX ou CSV.

| Campo | O que incluir |
| --- | --- |
| Designator | Designadores de referência de componentes, como R1, R2, C1 |
| MPN / Seeed SKU | O número de peça completo do fabricante ou o SKU de componente da Seeed |
| Quantity | Quantidade necessária por PCBA; para projetos painelizados, calcule a quantidade para o painel completo |
| Part Link | Link opcional da página do produto ou do datasheet |

Inclua apenas os componentes que a Fusion deve comprar e montar. Componentes mostrados no PCB mas omitidos da BOM não são comprados nem montados por padrão. Consulte o [guia de preparação de BOM](https://support.seeed.cc/portal/en/kb/articles/how-do-i-prepare-the-bill-of-materials-bom-file-for-seeed-fusion-pcba-orders) para o modelo e regras de formatação.

#### Arquivos de Montagem

Prepare as informações de montagem abaixo a partir da mesma revisão de projeto que os arquivos Gerber e a BOM.

| Arquivo | Principal finalidade |
| --- | --- |
| Desenho de montagem | Mostra as posições dos componentes, designadores de referência, polaridade, orientação e requisitos de inserção de furos passantes |
| Arquivo CPL / Pick-and-Place | Fornece o designador de referência, coordenadas X/Y, rotação e lado de montagem para posicionamento SMT |
| Arquivos de programação e teste | Necessários quando o pedido inclui gravação de firmware ou testes funcionais; inclua a versão do firmware, etapas de operação, resultados esperados e critérios de aprovação/reprovação |

Para um desenho de montagem dupla face, inclua ambos os lados. Montagens apenas com furos passantes não exigem coordenadas de posicionamento SMT. Consulte o [guia de desenho de montagem](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-assembly-drawings-fabrication-files-for-seeed-fusion-pcba-orders) e o [guia de arquivo Pick-and-Place](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-pick-and-place-xy-files-for-seeed-fusion-pcba-orders).

### Dicas de Projeto de PCB

Painelização agrupa várias placas em um único painel de fabricação. O Fusion PCB suporta painéis contendo cópias repetidas do mesmo projeto ou projetos diferentes.

- **Contornos e ranhuras da placa:** Inclua contornos completos da placa e marque linhas de V-cut ou ranhuras fresadas na camada de contorno (GKO/GML).

- **Layout de V-cut:** As linhas de V-cut devem ser retas e ir de uma borda do painel à outra. Elas não podem parar no meio do painel.

- **Marcação de serigrafia:** Linhas de serigrafia sozinhas não especificam cortes. Sem instruções de corte na camada de contorno, o painel será fornecido como uma única placa completa.

Consulte as [regras de painelização de PCB](https://support.seeed.cc/portal/en/kb/articles/what-are-the-pcb-panelization-rules) para exemplos de layout e requisitos de pedido.

Meça as dimensões do PCB usando o menor retângulo que envolva todo o contorno da placa. Para um pedido painelizado, use as dimensões gerais do painel.

Após enviar seus arquivos, verifique as dimensões detectadas pela página de pedido em comparação com o seu projeto. Corrija-as manualmente se a medição automática estiver ausente ou imprecisa.

## Capacidades do Fusion PCB

#### Tipos de Placa e Materiais

Fusion oferece suporte a PCBs rígidos, flexíveis e de base metálica para diferentes requisitos elétricos e mecânicos.

| Tipo | Opções e aplicações típicas |
| --- | --- |
| FR-4 | Placas rígidas de uso geral; materiais TG130, TG150 e TG170. |
| PCB de base de alumínio | Placas de base metálica para aplicações como iluminação LED e eletrônica de potência. |
| PCB flexível | Circuitos flexíveis para layouts compactos e interconexões. |
| PCB rígido-flexível | Seções rígidas e flexíveis integradas, disponíveis por meio do Advanced PCB. |
| PCB de alta frequência | Materiais Rogers RO4003C e RO4350B para projetos RF e de alta frequência. |
| PCB de base de cobre | Placas de base metálica para aplicações de alta potência com necessidades exigentes de dissipação de calor. |

Use o [serviço Advanced PCB](https://www.seeedstudio.com/fusion-advanced-pcb.html) para HDI, placas com alta contagem de camadas, rígido-flexível, projetos de alta frequência e outros requisitos especializados. O [guia de materiais de PCB](https://www.seeedstudio.com/blog/2026/08/07/seeed-fusion-what-pcb-base-materials-does-seeed-fusion-offer-and-which-one-should-you-choose/) explica as diferenças entre esses materiais.

#### Especificações Comuns de Fabricação em FR-4

As especificações abaixo se aplicam a placas FR-4. Elas não são uma especificação combinada para todos os tipos de placa listados acima.

| Item | Especificação |
| --- | --- |
| Dimensões da placa | 10 × 10 mm a 500 × 500 mm; tolerância dimensional: ±0,2 mm. Painéis com V-cut têm restrições adicionais de tamanho. |
| Espessuras de placa de 2 camadas | 0,6, 0,8, 1,0, 1,2, 1,6, 2,0, 2,5, 3,0 mm |
| Espessuras de placa de 4 camadas | 0,8, 1,0, 1,2, 1,6, 2,0, 2,5, 3,0 mm |
| Tolerância de espessura da placa | ±0,1 mm para placas ≤1,0 mm de espessura; ±10% para placas mais espessas. |
| Opções de espessura de cobre | 1 oz, 2 oz, 3 oz |
| Largura mínima de trilha / espaçamento | 1 oz: 4/4 mil; 2 oz: 10/10 mil; 3 oz: 15/15 mil. Veja as condições adicionais abaixo. |
| Furos mecânicos | Não metalizados: 0,2–6,3 mm; furos metalizados: 0,2–5,8 mm. |
| Furos semicirculares (castellated) | Diâmetro mínimo: 0,5 mm |
| Largura de ranhura fresada | Não metalizada: ≥0,8 mm; metalizada: ≥0,65 mm |
| Distância circuito–borda da placa | ≥0,3 mm |
| Cores da máscara de solda | Verde, vermelho, amarelo, azul, branco, preto |
| Barreira de máscara de solda | Com a opção de barreira de 0,1 mm: ≥0,10 mm para verde, ≥0,13 mm para outras cores. Sem essa opção: ≥0,32 mm para verde, ≥0,35 mm para outras cores. |
| Serigrafia | Preto sobre máscara de solda branca; branco sobre as outras cores listadas acima. Altura mínima de texto: 23 mil; largura mínima de traço: 4 mil. |
| Acabamentos de superfície | HASL com chumbo, HASL sem chumbo, ENIG, OSP, ouro duro |

Para projetos de bobinas RF, use pelo menos 6/6 mil de largura de trilha e espaçamento e selecione a opção de 4/4 mil. Para placas de 4 camadas, as trilhas das camadas internas devem ter pelo menos 6 mil de largura.

Consulte a [Especificação Fusion PCB](https://support.seeed.cc/portal/en/kb/articles/fusion-pcb-specification) para pilhas de camadas (stackups) e outros requisitos específicos de processo.

### Capacidades do Fusion PCBA

Fusion oferece suporte à aquisição de componentes e montagem em superfície, furo passante e mista para protótipos, pequenos lotes e produção em volume.

| Item | Capacidade |
| --- | --- |
| Métodos de montagem | Montagem em superfície (SMT), furo passante (THT) e montagem mista |
| Lados de montagem | Face simples e dupla face |
| Componentes pequenos | Encapsulamentos até 0201 |
| Dispositivos de passo fino | BGA com passo de 0,4 mm e dispositivos com passo de terminais de 0,4 mm |
| Aquisição de componentes | Compra com base na BOM enviada |
| Suporte de engenharia | Revisão DFA gratuita com todo pedido Fusion PCBA |
| Testes e programação | Testes funcionais, gravação de firmware e dispositivos de teste personalizados |

Consulte o [serviço Fusion PCB Assembly](https://www.seeedstudio.com/pcb-assembly.html) para uma visão geral do serviço.

### Revisão de Engenharia e Suporte de Qualidade

DFM (Design for Manufacturability) verifica se um PCB nu pode ser fabricado. DFA (Design for Assembly) verifica se os componentes especificados podem ser montados corretamente.

- **Revisão de fabricação de PCB:** Problemas com largura e espaçamento de trilhas, tamanhos de furos ou aberturas de máscara de solda que possam afetar a fabricação são levantados antes do início da produção.

- **Revisão DFA gratuita para pedidos de PCBA:** Todo pedido Fusion PCBA inclui uma revisão dos arquivos Gerber, da BOM e das informações de montagem quanto à compatibilidade de footprint, interferência de componentes e problemas de polaridade ou orientação. Isso ajuda a identificar problemas de montagem antes que as peças sejam instaladas na placa.

- **Inspeção e testes de PCBA:** As capacidades incluem AOI para defeitos visíveis de montagem, inspeção por raio X para juntas de solda ocultas e ICT para verificações elétricas. Testes funcionais usam um plano de teste fornecido pelo cliente para verificar as funções pretendidas da placa montada. Os métodos de inspeção e teste utilizados dependem do projeto da placa e dos requisitos de teste.

Leia o [guia de revisão DFA](https://www.seeedstudio.com/blog/2026/08/31/seeed-fusion-pcba-dfa-review-guide-what-engineers-check-before-assembly/) e o [guia de controle de qualidade de PCBA](https://www.seeedstudio.com/blog/2026/08/18/seeed-fusion-pcba-quality-control-flying-probe-aoi-x-ray-ict-and-fct-explained/), ou explore os [serviços de teste Fusion](https://www.seeedstudio.com/fusion-testing-solutions.html).

### Produção e envio

O tempo de produção da PCB depende da complexidade da placa, número de camadas, material, quantidade e processos de fabricação. O campo **Production Time** na [página do pedido](https://www.seeedstudio.com/fusion_pcb.html) mostra a estimativa para a configuração selecionada. Para pedidos de PCBA, a disponibilidade de componentes e os requisitos de montagem também afetam o cronograma.

O tempo de produção conta a partir da confirmação dos arquivos até a embalagem. A revisão de arquivos e atrasos causados por problemas nos arquivos ficam fora desse período. Em seguida vêm a expedição e o envio; o tempo de trânsito depende do destino e do método de envio selecionado. Ao planejar a entrega, considere cada etapa em vez de tratar o tempo de produção como a data de chegada.

A [FAQ sobre prazo de entrega Fusion](https://support.seeed.cc/portal/en/kb/articles/how-long-do-fusion-orders-take) fornece mais informações sobre as etapas do pedido.

### FAQs

**Onde posso encontrar instruções detalhadas de pedido?**

O [guia passo a passo de pedido de PCB](https://support.seeed.cc/portal/en/kb/articles/how-to-place-a-fusion-pcb-order) abrange o envio dos arquivos de PCB, opções de fabricação, checkout e pagamento. Para montagem, consulte o [guia de pedido de PCBA](https://support.seeed.cc/portal/en/kb/articles/how-do-i-place-a-seeed-fusion-pcb-assembly-pcba-order).

**Como exporto arquivos Gerber do meu software de design?**

Exporte as camadas necessárias de cobre, máscara de solda, serigrafia e contorno, juntamente com o arquivo de furação. Os [guias de exportação Gerber](https://support.seeed.cc/portal/en/kb/fusion/how-to-generate-pcb-gerber-files) fornecem instruções para diferentes ferramentas de design de PCB.

**Posso solicitar testes para PCBAs que eu já tenho?**

Sim. Use a opção somente teste em [Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html) e envie os arquivos de projeto e de teste necessários.

**Meu pedido está como Pending / Awaiting Revised File. O que devo fazer?**

Verifique o endereço de e-mail cadastrado, incluindo a pasta de spam, para ver a descrição do problema. Revise e envie novamente os arquivos conforme as instruções para que o pedido possa prosseguir. Consulte a [FAQ sobre revisão de arquivos](https://support.seeed.cc/portal/en/kb/articles/my-fusion-order-status-is-pending-awaiting-revised-file-what-should-i-do) para mais detalhes.

**E se minha placa precisar de opções que não estão listadas online?**

Envie os requisitos do projeto por meio do [serviço Advanced PCB](https://www.seeedstudio.com/fusion-advanced-pcb.html) para revisão de engenharia e cotação.

## Suporte técnico e discussão de produtos

Obrigado por escolher nossos produtos! Estamos aqui para oferecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>
