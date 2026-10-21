---
description: Seeed Fusion Guide to Preparing Manufacturing Documents
title: Seeed Fusion Guide to Preparing Manufacturing Documents
keywords:
  - Seeed_Fusion
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /service_for_fusion_manufacturing_documents
last_update:
  date: 10/21/2026
  author: Xi Lin
---

Manufacturing documents describe a product''s materials, drawings, assembly, and testing requirements. They support quotations, procurement, production, and inspection. This guide is for projects based on customer designs. It explains the purpose of common manufacturing documents and how they relate to one another.

The documents required depend on the manufacturing work included in the project. Not every project needs all the documents listed below.

| Work included in the project | Relevant section |
| --- | --- |
| PCB fabrication, component sourcing, and assembly | PCB and PCBA Documents |
| Enclosures and other mechanical parts, or product assembly | Mechanical Parts and Product Assembly |
| Custom packaging and printed inserts | Packaging Documents |
| Firmware flashing and functional testing | Firmware and Test Documents |
| Checking information across multiple files | Document Consistency and Version Information |

For logo, packaging, or other light customization based on standard Seeed products, see the [Seeed Fusion Light Customization Service Guide](https://wiki.seeedstudio.com/service_for_fusion_light_customization/). Open the relevant product page from the [Light Customization service page](https://www.seeedstudio.com/fusion_branding_firmware.html) to check the documents needed for the selected options.

## PCB and PCBA Documents

PCB fabrication documents define the board artwork and manufacturing requirements. PCBA projects also involve component sourcing and assembly, so they need the relevant component and assembly information.

| Document | Purpose | Main information |
| --- | --- | --- |
| Gerber and drill files | Describe the PCB layers, board outline, and drilling information for fabrication. | Copper, solder mask, silkscreen, board outline, drill data, and relevant inner layers where applicable. |
| PCB manufacturing specifications | Define material and process requirements beyond the board artwork. | Board material, stackup, board thickness, copper thickness, surface finish, solder mask, and applicable impedance and tolerance requirements. |
| Bill of materials (BOM) | Identify the components to be purchased and assembled. | Reference designators, complete manufacturer part numbers or Seeed SKUs, quantities, and optional component links. |
| Assembly drawing | Help production and inspection staff identify component locations, orientation, and polarity. | Reference designators, component locations, polarity markings, and orientation. Include both sides for double-sided assembly. |
| CPL / Pick-and-Place file | Provide SMT component placement data for programming placement equipment. | Reference designators, X/Y coordinates, rotation, and assembly side. |
| Schematics | Support circuit analysis, debugging, and troubleshooting. | Circuit connections, document version, and date. |

Gerber files and a BOM are the basic documents for a Fusion PCBA quotation and file review. Assembly drawings provide a visual reference for assembly and inspection, and CPL files provide position data for placement equipment. Submission requirements are confirmed according to the assembly method and project.

For file formats, BOM templates and formatting rules, and drawing export instructions, see the [Seeed Fusion PCB & PCBA Service Guide](https://wiki.seeedstudio.com/Service_for_Fusion_PCB/) and its linked guides.

## Mechanical Parts and Product Assembly

When a project includes an enclosure or other mechanical parts, the documents describe the parts'' dimensions, materials, appearance, and quality requirements. For product assembly, they also explain how the parts fit together.

| Document | Purpose and main information |
| --- | --- |
| Application description | Describe the product''s use and operating conditions so the manufacturing team can understand the mechanical requirements. |
| Mechanical BOM | List the mechanical parts, material information, and quantities. |
| 3D drawings | Show part geometry and spatial relationships to check how components fit together. |
| 2D drawings | Specify part dimensions and the corresponding tolerances. |
| CMF document | Specify color, material, and finish requirements for the mechanical parts. |
| Quality requirements | Define inspection and acceptance requirements for the mechanical parts. |
| Assembly or exploded-view drawings | Show how parts fit together. Used with the BOM, these drawings describe the complete product assembly. |

For example, an enclosure drawing describes the enclosure itself. An assembly drawing shows how the enclosure fits with the board, cables, and other parts.

## Packaging Documents

For projects involving custom packaging, the documents describe packaging designs, materials, packing methods, and labeling requirements.

| Document | Purpose and main information |
| --- | --- |
| Packaging design files | Specify the designs and materials for packaging boxes and other custom packaging materials. |
| Packing instructions | Explain how to package the product and pack it into cartons. |
| Printed insert files | Provide designs and material requirements for printed items such as quick-start guides and manuals. |
| Shipping carton and label requirements | Specify carton designs, packing requirements, and carton label information. |

If the project involves pallets, desiccants, or other special packaging requirements, include those details in the packaging documents.

## Firmware and Test Documents

When a manufacturing project includes firmware flashing or functional testing, the documents explain which files to flash, how to carry out the work, and how to assess the test results.

| Document | Purpose and main information |
| --- | --- |
| Firmware files | Provide the files to be flashed, with their versions, dates, and applicable hardware revisions. |
| Flashing instructions | Specify the programmer model, connections, flashing software, and operating steps. |
| Test environment description | Identify the hardware, operating system, test software, and fixtures needed for testing. |
| Test instructions | Describe the test steps and operating procedures. |
| Expected results and pass/fail criteria | Specify the expected result for each test and the conditions used to determine a pass or fail. |

Test firmware supports checks during production. Shipping firmware is used to operate the product after delivery. If these differ, the documents need to identify each version and its purpose so they are not mixed up during flashing, testing, or pre-shipment checks.

For detailed guidance on writing test requirements, see the [Seeed Fusion Guide to Preparing PCBA Functional Test Requirements](https://wiki.seeedstudio.com/service_for_fusion_pcba_functional_test/).

## Document Consistency and Version Information

Material information, drawings, and assembly data for the same project need to agree. For PCB and PCBA projects, the main relationships are listed below.

| Items to compare | What to check |
| --- | --- |
| Part numbers and packages | Component packages associated with the BOM part numbers match the PCB footprints. |
| Quantities and reference designators | Component quantities in the BOM match the number of corresponding reference designators. Quantities use the same basis throughout, whether per board or per panel. |
| Assembly drawings and CPL files | Reference designators, assembly sides, positions, and orientations agree across the files. Polarity is clearly marked on the assembly drawing. |

Gerber files, the BOM, assembly drawings, and CPL files should all correspond to the same design revision. Version and date information in schematics and firmware files identifies the documents used in production and supports traceability. Firmware files also identify the applicable hardware revision so the hardware and firmware can be matched correctly.

For project-specific submission requirements, check the relevant service order page or contact [fusion@seeed.io](mailto:fusion@seeed.io).

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