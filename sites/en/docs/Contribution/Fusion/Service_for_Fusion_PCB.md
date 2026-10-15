---
description: Seeed Fusion PCB & PCBA Service Guide
title: Seeed Fusion PCB & PCBA Service Guide
keywords:
  - Seeed_Elderly
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /Service_for_Fusion_PCB
last_update:
  date: 9/16/2026
  author: shuxu hu
createdAt: '2023-02-17'
updatedAt: '2026-09-16'
url: https://wiki.seeedstudio.com/Service_for_Fusion_PCB/
---

This guide covers PCB fabrication and PCB assembly, including capabilities, production files, ordering, design requirements, engineering review, testing, and delivery planning.

## About Fusion PCB & PCBA

Seeed Fusion provides bare PCB fabrication and turnkey PCBA services, including component sourcing and assembly, from prototypes and small batches to volume production. You can order bare boards only, or add assembly and testing requirements to the same project on the [Fusion order page](https://www.seeedstudio.com/fusion_pcb.html).

### Fusion PCB & PCBA Order Steps

1. Open the [Fusion PCB/PCBA order page](https://www.seeedstudio.com/fusion_pcb.html).

2. Upload your Gerber archive and select the board dimensions, quantity, and manufacturing options.

3. For bare PCBs, review the quote and proceed to checkout. For assembly, enable **PCB Assembly**, upload the BOM, enter the PCBA quantity, and add the relevant assembly or test files.

4. Review the component matches and price breakdown, then complete checkout and payment.

PCB orders start at 5 pieces, and PCB assembly orders start at 1 piece. Pricing depends on the selected PCB specifications and quantity, as well as component and assembly requirements for PCBA orders.

### Gerber File Requirements

Place the Gerber and drill files in one folder and upload a ZIP or RAR archive (maximum 20 MB). The table below shows common filenames for the layers in your design.

| File | Filename example |
| --- | --- |
| Top / bottom copper | pcbname.GTL / pcbname.GBL |
| Top / bottom solder mask | pcbname.GTS / pcbname.GBS |
| Top / bottom silkscreen | pcbname.GTO / pcbname.GBO |
| Board outline | pcbname.GML or pcbname.GKO |
| Drill file | pcbname.TXT |
| Inner copper layers | pcbname.GL2, pcbname.GL3, etc. |

Include the corresponding inner copper files for multilayer boards. Use RS-274X for Gerber files and Excellon for drill files. A complete board outline is required, preferably on a separate mechanical layer.

Before placing your order, use the Gerber Viewer on the [order page](https://www.seeedstudio.com/fusion_pcb.html) to preview your exported files. Check that the board outline and layers match your intended design.

### Additional Files for PCBA Orders

#### Bill of Materials (BOM)

Gerber files and a BOM are the basic files used to start a PCBA quotation and file review. Prepare the BOM using the Fusion template in XLS, XLSX, or CSV format.

| Field | What to include |
| --- | --- |
| Designator | Component reference designators, such as R1, R2, C1 |
| MPN / Seeed SKU | The complete manufacturer part number or Seeed component SKU |
| Quantity | Quantity required per PCBA; for panelized designs, calculate the quantity for the complete panel |
| Part Link | Optional product page or datasheet link |

Include only the components that Fusion should purchase and assemble. Components shown on the PCB but omitted from the BOM are not purchased or assembled by default. See the [BOM preparation guide](https://support.seeed.cc/portal/en/kb/articles/how-do-i-prepare-the-bill-of-materials-bom-file-for-seeed-fusion-pcba-orders) for the template and formatting rules.

#### Assembly Files

Prepare the assembly information below from the same design revision as the Gerber files and BOM.

| File | Main purpose |
| --- | --- |
| Assembly drawing | Shows component locations, reference designators, polarity, orientation, and through-hole insertion requirements |
| CPL / Pick-and-Place file | Provides the reference designator, X/Y coordinates, rotation, and assembly side for SMT placement |
| Programming and test files | Required when the order includes firmware programming or functional testing; include the firmware version, operating steps, expected results, and pass/fail criteria |

For a double-sided assembly drawing, include both sides. Through-hole-only assemblies do not require SMT placement coordinates. See the [assembly drawing guide](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-assembly-drawings-fabrication-files-for-seeed-fusion-pcba-orders) and [Pick-and-Place file guide](https://support.seeed.cc/portal/en/kb/articles/how-do-i-export-pcb-pick-and-place-xy-files-for-seeed-fusion-pcba-orders).

### PCB Design Tips

Panelization groups multiple boards into one manufacturing panel. Fusion PCB supports panels containing repeated copies of the same design or different designs.

- **Board outlines and slots:** Include complete board outlines and mark V-cut lines or milled slots in the outline layer (GKO/GML).

- **V-cut layout:** V-cut lines must be straight and run from one edge of the panel to the other. They cannot stop partway across the panel.

- **Silkscreen markings:** Silkscreen lines alone do not specify cuts. Without cutting instructions in the outline layer, the panel will be supplied as one complete board.

See the [PCB panelization rules](https://support.seeed.cc/portal/en/kb/articles/what-are-the-pcb-panelization-rules) for layout examples and ordering requirements.

Measure PCB dimensions using the smallest rectangle enclosing the complete board outline. For a panelized order, use the overall panel dimensions.

After uploading your files, check the dimensions detected by the order page against your design. Correct them manually if the automatic measurement is missing or inaccurate.

## Fusion PCB Capabilities

#### Board Types and Materials

Fusion supports rigid, flexible, and metal-base PCBs for different electrical and mechanical requirements.

| Type | Options and typical applications |
| --- | --- |
| FR-4 | General-purpose rigid boards; TG130, TG150, and TG170 materials. |
| Aluminum-base PCB | Metal-base boards for applications such as LED lighting and power electronics. |
| Flexible PCB | Flexible circuits for compact layouts and interconnections. |
| Rigid-flex PCB | Integrated rigid and flexible sections, available through Advanced PCB. |
| High-frequency PCB | Rogers RO4003C and RO4350B materials for RF and high-frequency designs. |
| Copper-base PCB | Metal-base boards for high-power applications with demanding heat dissipation needs. |

Use the [Advanced PCB service](https://www.seeedstudio.com/fusion-advanced-pcb.html) for HDI, high-layer-count boards, rigid-flex, high-frequency designs, and other specialized requirements. The [PCB material guide](https://www.seeedstudio.com/blog/2026/08/07/seeed-fusion-what-pcb-base-materials-does-seeed-fusion-offer-and-which-one-should-you-choose/) explains the differences between these materials.

#### Common FR-4 Manufacturing Specifications

The specifications below apply to FR-4 boards. They are not a combined specification for every board type listed above.

| Item | Specification |
| --- | --- |
| Board dimensions | 10 × 10 mm to 500 × 500 mm; dimensional tolerance: ±0.2 mm. V-cut panels have additional size restrictions. |
| 2-layer board thicknesses | 0.6, 0.8, 1.0, 1.2, 1.6, 2.0, 2.5, 3.0 mm |
| 4-layer board thicknesses | 0.8, 1.0, 1.2, 1.6, 2.0, 2.5, 3.0 mm |
| Board thickness tolerance | ±0.1 mm for boards ≤1.0 mm thick; ±10% for thicker boards. |
| Copper weight options | 1 oz, 2 oz, 3 oz |
| Minimum trace width / spacing | 1 oz: 4/4 mil; 2 oz: 10/10 mil; 3 oz: 15/15 mil. See the additional conditions below. |
| Mechanical holes | Non-plated: 0.2–6.3 mm; plated through-holes: 0.2–5.8 mm. |
| Castellated holes | Minimum diameter: 0.5 mm |
| Milled slot width | Non-plated: ≥0.8 mm; plated: ≥0.65 mm |
| Circuit-to-board-edge clearance | ≥0.3 mm |
| Solder mask colors | Green, red, yellow, blue, white, black |
| Solder mask dam | With the 0.1 mm dam option: ≥0.10 mm for green, ≥0.13 mm for other colors. Without this option: ≥0.32 mm for green, ≥0.35 mm for other colors. |
| Silkscreen | Black on white solder mask; white on the other colors listed above. Minimum text height: 23 mil; minimum stroke width: 4 mil. |
| Surface finishes | Leaded HASL, lead-free HASL, ENIG, OSP, hard gold |

For RF coil designs, use at least 6/6 mil trace width and spacing and select the 4/4 mil option. For 4-layer boards, inner-layer traces must be at least 6 mil wide.

See the [Fusion PCB Specification](https://support.seeed.cc/portal/en/kb/articles/fusion-pcb-specification) for stackups and further process-specific requirements.

### Fusion PCBA Capabilities

Fusion supports component sourcing and surface-mount, through-hole, and mixed assembly for prototypes, small batches, and volume production.

| Item | Capability |
| --- | --- |
| Assembly methods | Surface mount (SMT), through-hole (THT), and mixed assembly |
| Assembly sides | Single-sided and double-sided |
| Small components | Packages down to 0201 |
| Fine-pitch devices | 0.4 mm pitch BGA and 0.4 mm lead-pitch devices |
| Component sourcing | Procurement based on the submitted BOM |
| Engineering support | Free DFA review with every Fusion PCBA order |
| Testing and programming | Functional testing, firmware programming, and custom test fixtures |

See the [Fusion PCB Assembly service](https://www.seeedstudio.com/pcb-assembly.html) for the service overview.

### Engineering Review and Quality Support

DFM (Design for Manufacturability) checks whether a bare PCB can be fabricated. DFA (Design for Assembly) checks whether the specified components can be assembled correctly.

- **PCB manufacturing review:** Issues with trace width and spacing, hole sizes, or solder mask openings that could affect fabrication are raised before production begins.

- **Free DFA review for PCBA orders:** Every Fusion PCBA order includes a review of the Gerber, BOM, and assembly information for footprint compatibility, component interference, and polarity or orientation issues. This helps identify assembly problems before parts are fitted to the board.

- **PCBA inspection and testing:** Capabilities include AOI for visible assembly defects, X-ray inspection for hidden solder joints, and ICT for electrical checks. Functional testing uses a customer-provided test plan to check the assembled board's intended functions. The inspection and test methods used depend on the board design and testing requirements.

Read the [DFA review guide](https://www.seeedstudio.com/blog/2026/08/31/seeed-fusion-pcba-dfa-review-guide-what-engineers-check-before-assembly/) and [PCBA quality-control guide](https://www.seeedstudio.com/blog/2026/08/18/seeed-fusion-pcba-quality-control-flying-probe-aoi-x-ray-ict-and-fct-explained/), or explore [Fusion testing services](https://www.seeedstudio.com/fusion-testing-solutions.html).

### Production and Shipping

PCB production time depends on board complexity, layer count, material, quantity, and manufacturing processes. The **Production Time** field on the [order page](https://www.seeedstudio.com/fusion_pcb.html) shows the estimate for the selected configuration. For PCBA orders, component availability and assembly requirements also affect the schedule.

Production Time runs from file confirmation to packing. File review and delays caused by file issues are outside this period. Dispatch and shipping follow; transit time depends on the destination and selected shipping method. When planning delivery, allow for each stage rather than treating production time as the arrival date.

The [Fusion lead-time FAQ](https://support.seeed.cc/portal/en/kb/articles/how-long-do-fusion-orders-take) provides further information about order stages.

### FAQs

**Where can I find detailed ordering instructions?**

The [step-by-step PCB ordering guide](https://support.seeed.cc/portal/en/kb/articles/how-to-place-a-fusion-pcb-order) covers PCB file upload, manufacturing options, checkout, and payment. For assembly, see the [PCBA ordering guide](https://support.seeed.cc/portal/en/kb/articles/how-do-i-place-a-seeed-fusion-pcb-assembly-pcba-order).

**How do I export Gerber files from my design software?**

Export the required copper, solder mask, silkscreen, and outline layers, together with the drill file. The [Gerber export guides](https://support.seeed.cc/portal/en/kb/fusion/how-to-generate-pcb-gerber-files) provide instructions for different PCB design tools.

**Can I request testing for PCBAs I already have?**

Yes. Use the testing-only option on [Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html) and submit the required design and test files.

**My order says Pending / Awaiting Revised File. What should I do?**

Check your registered email address, including the spam folder, for the issue description. Revise and re-upload the files as instructed so the order can proceed. See the [file revision FAQ](https://support.seeed.cc/portal/en/kb/articles/my-fusion-order-status-is-pending-awaiting-revised-file-what-should-i-do) for details.

**What if my board needs options that are not listed online?**

Submit the design requirements through the [Advanced PCB service](https://www.seeedstudio.com/fusion-advanced-pcb.html) for engineering review and quotation.

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
