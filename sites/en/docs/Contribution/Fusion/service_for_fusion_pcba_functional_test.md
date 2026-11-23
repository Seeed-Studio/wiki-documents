---
description: Seeed Fusion Guide to Preparing PCBA Functional Test Requirements
title: Seeed Fusion Guide to Preparing PCBA Functional Test Requirements
keywords:
  - Seeed_Fusion
image: https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png
slug: /service_for_fusion_pcba_functional_test
last_update:
  date: 10/21/2026
  author: Xi Lin
---

PCBA functional testing uses defined operations and measurements to check whether an assembled board performs as intended. Test requirements describe what to test, the conditions and procedures, and the pass/fail criteria. They provide the manufacturing team with the information needed to carry out the tests.

This guide is for customers requesting PCBA functional testing from Seeed Fusion. Specific tests and methods are confirmed based on the product design and project requirements.

This guide focuses on writing test requirements. For the design files and product information needed to request testing or a custom fixture, see the [Seeed Fusion PCBA Testing Solutions Guide](https://wiki.seeedstudio.com/service_for_fusion_pcba_testing_solutions/) and the service resources linked below.

## What Functional Testing Covers

Functional testing checks the product''s intended functions. It may cover power supplies, communication interfaces, buttons, indicators, sensors, and audio. The project''s test plan defines the scope.

Assembly inspection and functional testing examine different aspects of the board. AOI checks for visible assembly defects, X-ray inspection reveals hidden solder joints, and in-circuit testing (ICT) performs electrical checks. Functional testing checks whether the board performs the functions specified in the test plan. The methods used depend on the board design and testing requirements.

Test results apply to the items and criteria defined in the plan. For example, a computer detecting a USB device can satisfy a USB detection test. The plan needs to specify any other USB functions to be tested.

## What to Include in Each Test

Each test describes what to test, how to perform it, and what counts as a pass, along with the required test conditions.

| Information | What to specify |
| --- | --- |
| What to test | The function, interface, or signal to check, such as a power rail, a specific GPIO, or a USB interface. |
| Test conditions | The power supply, connections, firmware, and software environment needed for the test. |
| Test procedure | The actions or measurements to perform and their sequence. |
| Expected results | The observable behavior, returned information, or measurement results expected after an action. |
| Pass/fail criteria | The conditions used to determine a pass or fail, such as an allowed numerical range, a specified device address, or an expected logic level. |

For numerical tests, such as voltage measurements, the criteria include the target value and allowed range. For device detection, buttons, or indicators, specify the expected detection result or the state that should follow an action. General descriptions such as "working normally" need specific criteria that a test operator or program can assess.

## Test Environment and Connections

The test environment description identifies the equipment, software, and connections needed to perform the tests. The table below lists information that may be relevant; the details depend on the test items.

| Information | What to specify |
| --- | --- |
| Power supply conditions | The power input, voltage, and corresponding test steps. |
| Interfaces and test points | The interfaces, pins, or test points used, and how they connect to the test equipment. |
| Test equipment | Models or specifications for measurement instruments, programmers, and other supporting equipment. |
| Software environment | The operating system, test software, and related settings. |
| Test fixture | If a fixture is used, how to position the board, where to connect it, and how to operate it. |

Connection details need to match the individual tests. Voltage measurements refer to specific test points, communication tests identify the interfaces and signals, and firmware flashing instructions identify the programming interface and connections. Diagrams can help show these locations and connections.

A test fixture holds the board in place and provides repeatable connections to the required test points or interfaces. Whether a fixture is used, and how it is designed, depends on the board and test plan.

## Firmware Flashing and Test Sequence

For projects involving firmware flashing, include the firmware files, versions, development dates, and applicable hardware revisions. Also specify the programmer, connections, flashing software, and operating steps. If several firmware files are used in the same test process, identify the purpose of each file and when it is used.

Test firmware supports functional checks during production. Shipping firmware is the firmware the product runs after delivery. If these differ, the procedure needs to specify when to use the test firmware and when to flash the shipping firmware.

Arrange test steps in the order they will be performed, with each action paired with its expected result. For example, a power test can describe powering the board, measuring a designated test point, and comparing the reading with the allowed range. For flashing steps, specify the file and how to confirm successful flashing.

## Test Requirements Example and Related Resources

The selected tests below come from Seeed''s official test reference for the **reSpeaker Flex XVF3800 Core Board with XIAO**. They show how test items, methods, and pass criteria relate to each other. The test points, values, and device addresses apply only to this reference project.

| Test item | Test method | Pass criteria |
| --- | --- | --- |
| VDDIO voltage | Measure test point TP7 using an ADC. | 3.3 V ±5%. |
| USB Type-C connection | Test the connector in both orientations. | The XMOS device is recognized in both orientations. |
| XIAO I²C device detection | Scan the I²C bus. | The codec is detected at address 0x18. |
| RST reset button | Press the Reset button. | XMOS resets. |

This table contains selected test items. Running the tests also requires power and connection details, the relevant firmware and software environment, detailed operating instructions, and guidance on interpreting the results.

The complete reference explains how test requirements map to adapter board connections and software execution. See [Open-Source Modular PCBA Testing: A Complete Guide from Hardware to Test Workflow](https://www.seeedstudio.com/blog/2026/10/08/seeed-fusion-open-source-modular-pcba-testing-a-complete-guide-from-hardware-to-test-workflow/).

For fixture uses, suitable applications, and request documents, see [What Is a PCBA Test Fixture? How It Works and When You Need One](https://www.seeedstudio.com/blog/2026/09/10/seeed-fusion-what-is-a-pcba-test-fixture-how-it-works-and-when-you-need-one/). PCB manufacturing and assembly file requirements are covered in the [Seeed Fusion PCB & PCBA Service Guide](https://wiki.seeedstudio.com/Service_for_Fusion_PCB/).

For functional testing, firmware flashing, and custom test fixture services, visit [Fusion Testing Solutions](https://www.seeedstudio.com/fusion-testing-solutions.html), or contact [fusion@seeed.io](mailto:fusion@seeed.io) to discuss your project requirements.

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