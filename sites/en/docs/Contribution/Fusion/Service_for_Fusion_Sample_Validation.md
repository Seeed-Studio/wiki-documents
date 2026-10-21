---
description: Seeed Fusion Guide to Sample Validation and Pilot Production
title: Seeed Fusion Guide to Sample Validation and Pilot Production
keywords:
  - Seeed_Fusion
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_Sample_Validation
last_update:
  date: 10/21/2026
  author: shuxu hu
---

Sample validation checks whether a product design meets its intended requirements. Pilot production validates the production process, assembly procedures, and test methods in preparation for mass production.

This guide is for hardware teams that have a product design and are preparing to build samples or begin pilot production. It explains the validation priorities at each stage. The manufacturing scope, validation activities, and production arrangements are confirmed for each project based on design progress and manufacturing needs.

## Purpose of Sample Validation and Pilot Production

The focus of validation changes as a product moves from design into manufacturing. Engineering samples help check functions and design feasibility. Later samples validate the complete design, while pilot production extends validation to the production process.

The table below is based on the manufacturing stages described in the *Open Manufacturing Whitepaper*.

| Stage | Main focus |
| --- | --- |
| Engineering validation (EVT) | Build engineering samples and check core functions, performance, and how the hardware and software work together. Identify and address design issues. |
| Design validation (DVT) | Validate the near-final product design, including mechanical fit, design specifications, and applicable reliability requirements. |
| Production validation (PVT) | Use pilot production to check the production process, assembly procedures, material consistency, and test methods, and identify production issues. |
| Mass production (MP) | Manufacture to the confirmed design, processes, and quality requirements, with continued attention to consistent quality and production efficiency. |

These stages describe validation priorities across a manufacturing project. Individual projects may involve only some of this work, with the stages and scope determined according to project needs.

Findings from sample validation guide design improvements. Pilot production then checks how the design works in a production environment, including whether parts can be assembled consistently, tests are practical to perform, and materials and processes meet requirements.

## Sample Validation Priorities

Sample validation is based on the product''s design requirements. The checks depend on whether the project involves circuit boards, firmware, mechanical parts, or complete product assembly.

Early samples may be made using rapid PCB fabrication, CNC machining, or 3D printing to check design feasibility. As the design is finalized, validation also covers final dimensions, materials, and how parts fit together.

| Validation area | What to check |
| --- | --- |
| Functions and performance | Whether the product performs its intended functions and meets the design performance requirements. |
| Hardware and software integration | Where firmware is involved, whether the hardware, drivers, and software operate together correctly. |
| Mechanical fit and assembly | Whether the board, enclosure, cables, and other parts fit together as designed, including their dimensions and assembly. |
| Material and part specifications | Whether the materials and parts used in the samples meet the design specifications for that stage. |

Reliability and stability checks reflect the product''s intended operating conditions. They check whether the product meets its design requirements under those conditions. The tests and acceptance criteria need to match the product requirements.

Issues found during sample validation are analyzed, addressed through design improvements, and checked again to confirm that they have been resolved.

## Pilot Production Validation

Pilot production checks how the design is manufactured in a production environment. It covers the process from materials entering production through assembly and testing to the storage of finished products. It also checks consistency across repeated builds.

| Validation area | What to check |
| --- | --- |
| Production process and assembly procedures | Whether production steps connect as planned, operating methods are clear, and assembly issues needing improvement are identified. |
| Material and supply consistency | Whether materials supplied in small batches meet specifications and quality requirements, and whether parts delivered by suppliers are consistent. |
| Test procedures and fixtures | Whether test steps can be carried out, fixtures are ready, and the methods are suitable for repeated testing. |
| Quality inspection | Inspect materials, assembly, and functional test results against the confirmed standards, and analyze the causes of failures. |

Standard operating procedures (SOPs) record how each production step is performed for production staff to follow. Fixtures and test procedures support assembly and inspection. These procedures and tools are verified through actual use during pilot production.

Pilot production may reveal issues in the design, incoming materials, processes, or test methods. The findings support the readiness review before mass production.

## Preparing for Mass Production and Resolving Issues

Before mass production, a readiness review uses pilot production results to assess production procedures, quality requirements, critical materials, and the status of identified issues. The whitepaper lists the following main review items.

| Review item | What to confirm |
| --- | --- |
| Standard operating procedures | Procedures for mass production are finalized and cover the relevant production steps. |
| Quality inspection specifications | Inspection requirements cover materials, production processes, and testing. |
| Critical component and material samples | Samples of critical components and materials have been approved. |
| Pilot production issues | Issues recorded in the pilot production report have been addressed and closed. |

Operating procedures and inspection specifications guide the manufacturing team''s production and inspection work. Customer design files, test requirements, and approvals provide the basis for these production preparations.

Serious issues affecting mass production need to be resolved before that stage begins. Further pilot runs may be needed to verify the improvements.

During mass production, product quality, yield, and efficiency continue to be monitored. Processes and capacity plans are improved based on actual production conditions.

## Project Documents and Service Links

Material information, drawings, assembly documents, and test documents used for sample builds and pilot production need to match the relevant design revision. If validation leads to design changes, the documents used for subsequent production also need to be updated.

The following guides explain the purpose and content of the relevant documents and services.

| Guide | What it covers |
| --- | --- |
| [Seeed Fusion Guide to Preparing Manufacturing Documents](https://wiki.seeedstudio.com/Service_for_Fusion_Manufacturing_Documents/) | PCB/PCBA, mechanical, packaging, firmware, and test documents, including their purposes and how they relate to one another. |
| [Seeed Fusion Guide to Preparing PCBA Functional Test Requirements](https://wiki.seeedstudio.com/Service_for_Fusion_PCBA_Functional_Test/) | What to test, test conditions, operating steps, expected results, and pass/fail criteria. |
| [Seeed Fusion One-Stop Manufacturing and Delivery Guide](https://wiki.seeedstudio.com/Service_for_Fusion_One_Stop/) | The scope of manufacturing, customization, warehousing, and fulfillment services, and how they connect. |

For PCB and PCBA file formats, templates, and submission requirements, see the [Seeed Fusion PCB & PCBA Service Guide](https://wiki.seeedstudio.com/Service_for_Fusion_PCB/).

To discuss sample builds, small-batch production, or manufacturing a complete product, visit the [Fusion One-Stop Service page](https://www.seeedstudio.com/fusion-one-stop.html), or contact [fusion@seeed.io](mailto:fusion@seeed.io) to confirm the manufacturing scope and project arrangements.

For background on the manufacturing stages, see the [Open Manufacturing Whitepaper](https://files.seeedstudio.com/fusion/Open_Manufacturing_Whitepaper.pdf).

## Tech Support & Product Discussion

Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs.

<div className="button_tech_support_container">
<a href="https://forum.seeedstudio.com/" className="button_forum"></a>
<a href="https://www.seeedstudio.com/contacts" className="button_email"></a>
</div>

<div className="button_tech_support_container">
<a href="https://discord.gg/eWkprNDMU7" className="button_discord"></a>
<a href="https://github.com/Seeed-Studio/wiki-documents/discussions/69" className="button_discussion"></a>
</div>