---
description: Guia Seeed Fusion para Preparação de Documentos de Fabricação
title: Guia Seeed Fusion para Preparação de Documentos de Fabricação
keywords:
  - Seeed_Fusion
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /service_for_fusion_manufacturing_documents
last_update:
  date: 10/21/2026
  author: Xi Lin
---

Os documentos de fabricação descrevem os materiais, desenhos, montagem e requisitos de teste de um produto. Eles dão suporte a cotações, compras, produção e inspeção. Este guia é destinado a projetos baseados em designs do cliente. Ele explica o propósito dos documentos de fabricação mais comuns e como eles se relacionam entre si.

Os documentos necessários dependem do trabalho de fabricação incluído no projeto. Nem todo projeto precisa de todos os documentos listados abaixo.

| Trabalho incluído no projeto | Seção relevante |
| --- | --- |
| Fabricação de PCB, aquisição de componentes e montagem | Documentos de PCB e PCBA |
| Gabinetes e outras peças mecânicas, ou montagem do produto | Peças Mecânicas e Montagem do Produto |
| Embalagem personalizada e encartes impressos | Documentos de Embalagem |
| Gravação de firmware e testes funcionais | Documentos de Firmware e Teste |
| Verificação de informações em vários arquivos | Consistência de Documentos e Informações de Versão |

Para personalização de logotipo, embalagem ou outras customizações leves baseadas em produtos padrão da Seeed, consulte o [Guia do Serviço de Customização Leve Seeed Fusion](https://wiki.seeedstudio.com/pt-br/service_for_fusion_light_customization/). Abra a página do produto relevante a partir da [página do serviço de Customização Leve](https://www.seeedstudio.com/fusion_branding_firmware.html) para verificar os documentos necessários para as opções selecionadas.

## Documentos de PCB e PCBA

Os documentos de fabricação de PCB definem a arte da placa e os requisitos de fabricação. Projetos de PCBA também envolvem aquisição de componentes e montagem, portanto precisam das informações relevantes de componentes e montagem.

| Documento | Finalidade | Principais informações |
| --- | --- | --- |
| Arquivos Gerber e de furação | Descrevem as camadas da PCB, o contorno da placa e as informações de furação para fabricação. | Camadas de cobre, máscara de solda, serigrafia, contorno da placa, dados de furação e camadas internas relevantes, quando aplicável. |
| Especificações de fabricação da PCB | Definem requisitos de material e processo além da arte da placa. | Material da placa, stackup, espessura da placa, espessura de cobre, acabamento de superfície, máscara de solda e requisitos aplicáveis de impedância e tolerância. |
| Lista de materiais (BOM) | Identifica os componentes a serem comprados e montados. | Designadores de referência, códigos completos de peça do fabricante ou SKUs da Seeed, quantidades e links opcionais de componentes. |
| Desenho de montagem | Ajuda a equipe de produção e inspeção a identificar a localização, orientação e polaridade dos componentes. | Designadores de referência, localizações dos componentes, marcações de polaridade e orientação. Incluir ambos os lados para montagem dupla face. |
| Arquivo CPL / Pick-and-Place | Fornece dados de posicionamento de componentes SMT para programação dos equipamentos de colocação. | Designadores de referência, coordenadas X/Y, rotação e lado de montagem. |
| Esquemáticos | Dão suporte à análise de circuito, depuração e solução de problemas. | Conexões do circuito, versão do documento e data. |

Arquivos Gerber e uma BOM são os documentos básicos para uma cotação de PCBA Fusion e revisão de arquivos. Desenhos de montagem fornecem uma referência visual para montagem e inspeção, e arquivos CPL fornecem dados de posição para os equipamentos de colocação. Os requisitos de envio são confirmados de acordo com o método de montagem e o projeto.

Para formatos de arquivo, modelos de BOM e regras de formatação, e instruções de exportação de desenhos, consulte o [Guia de Serviço de PCB & PCBA Seeed Fusion](https://wiki.seeedstudio.com/pt-br/Service_for_Fusion_PCB/) e seus guias vinculados.

## Peças Mecânicas e Montagem do Produto

Quando um projeto inclui um gabinete ou outras peças mecânicas, os documentos descrevem as dimensões, materiais, aparência e requisitos de qualidade das peças. Para a montagem do produto, eles também explicam como as peças se encaixam.

| Documento | Finalidade e principais informações |
| --- | --- |
| Descrição da aplicação | Descreve o uso do produto e as condições de operação para que a equipe de fabricação possa entender os requisitos mecânicos. |
| BOM mecânica | Lista as peças mecânicas, informações de material e quantidades. |
| Desenhos 3D | Mostram a geometria das peças e os relacionamentos espaciais para verificar como os componentes se encaixam. |
| Desenhos 2D | Especificam as dimensões das peças e as tolerâncias correspondentes. |
| Documento CMF | Especifica os requisitos de cor, material e acabamento para as peças mecânicas. |
| Requisitos de qualidade | Definem os requisitos de inspeção e aceitação para as peças mecânicas. |
| Desenhos de montagem ou vista explodida | Mostram como as peças se encaixam. Usados com a BOM, esses desenhos descrevem a montagem completa do produto. |

Por exemplo, um desenho do gabinete descreve o próprio gabinete. Um desenho de montagem mostra como o gabinete se encaixa com a placa, cabos e outras peças.

## Documentos de Embalagem

Para projetos que envolvem embalagem personalizada, os documentos descrevem os designs de embalagem, materiais, métodos de acondicionamento e requisitos de rotulagem.

| Documento | Finalidade e principais informações |
| --- | --- |
| Arquivos de design de embalagem | Especificam os designs e materiais para caixas de embalagem e outros materiais de embalagem personalizados. |
| Instruções de acondicionamento | Explicam como embalar o produto e acondicioná-lo em caixas de transporte. |
| Arquivos de encartes impressos | Fornecem designs e requisitos de material para itens impressos, como guias de início rápido e manuais. |
| Requisitos de caixas de envio e rótulos | Especificam os designs das caixas, requisitos de acondicionamento e informações dos rótulos das caixas. |

Se o projeto envolver pallets, dessecantes ou outros requisitos especiais de embalagem, inclua esses detalhes nos documentos de embalagem.

## Documentos de Firmware e Teste

Quando um projeto de fabricação inclui gravação de firmware ou testes funcionais, os documentos explicam quais arquivos gravar, como realizar o trabalho e como avaliar os resultados dos testes.

| Documento | Finalidade e principais informações |
| --- | --- |
| Arquivos de firmware | Fornecem os arquivos a serem gravados, com suas versões, datas e revisões de hardware aplicáveis. |
| Instruções de gravação | Especificam o modelo do gravador, conexões, software de gravação e etapas de operação. |
| Descrição do ambiente de teste | Identifica o hardware, sistema operacional, software de teste e dispositivos necessários para os testes. |
| Instruções de teste | Descrevem as etapas de teste e os procedimentos de operação. |
| Resultados esperados e critérios de aprovação/reprovação | Especificam o resultado esperado para cada teste e as condições usadas para determinar aprovação ou reprovação. |

O firmware de teste dá suporte às verificações durante a produção. O firmware de envio é usado para operar o produto após a entrega. Se estes forem diferentes, os documentos precisam identificar cada versão e seu propósito para que não sejam confundidos durante a gravação, teste ou verificações pré-envio.

Para orientações detalhadas sobre como escrever requisitos de teste, consulte o [Guia Seeed Fusion para Preparação de Requisitos de Teste Funcional de PCBA](https://wiki.seeedstudio.com/pt-br/service_for_fusion_pcba_functional_test/).

## Consistência de Documentos e Informações de Versão

Informações de materiais, desenhos e dados de montagem para o mesmo projeto precisam estar em concordância. Para projetos de PCB e PCBA, os principais relacionamentos são listados abaixo.

| Itens a comparar | O que verificar |
| --- | --- |
| Códigos de peça e encapsulamentos | Encapsulamentos de componentes associados aos códigos de peça da BOM correspondem às pegadas na PCB. |
| Quantidades e designadores de referência | Quantidades de componentes na BOM correspondem ao número de designadores de referência correspondentes. As quantidades usam a mesma base em todos os documentos, seja por placa ou por painel. |
| Desenhos de montagem e arquivos CPL | Designadores de referência, lados de montagem, posições e orientações estão em concordância entre os arquivos. A polaridade é claramente marcada no desenho de montagem. |

Arquivos Gerber, a BOM, desenhos de montagem e arquivos CPL devem todos corresponder à mesma revisão de design. Informações de versão e data em esquemáticos e arquivos de firmware identificam os documentos usados na produção e dão suporte à rastreabilidade. Arquivos de firmware também identificam a revisão de hardware aplicável para que o hardware e o firmware possam ser combinados corretamente.

Para requisitos de envio específicos do projeto, verifique a página de pedido do serviço relevante ou entre em contato com [fusion@seeed.io](mailto:fusion@seeed.io).

## Suporte Técnico & Discussão de Produtos

Obrigado por escolher nossos produtos! Estamos aqui para fornecer diferentes tipos de suporte para garantir que sua experiência com nossos produtos seja a mais tranquila possível. Oferecemos vários canais de comunicação para atender a diferentes preferências e necessidades.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>