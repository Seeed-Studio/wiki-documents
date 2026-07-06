---
description: Steering Gear Debugging Tool for SO-ARM in LeRobot.
title: Steering Gear Debugging Tool for SO-ARM in LeRobot
keywords:
  - Lerobot
  - SO-ARM
  - Robotics
  - Servo
  - Calibration
image: https://files.seeedstudio.com/wiki/robotics/projects/lerobot/Arm_kit.webp
slug: /lerobot_steering_gear_debugging_tool
last_update:
  date: 6/29/2026
  author: ZhangJiaQuan
url: https://wiki.seeedstudio.com/lerobot_steering_gear_debugging_tool/
createdAt: '2026-06-29'
updatedAt: '2026-06-29'
---

# Steering Gear Debugging Tool for SO-ARM in LeRobot

<div className="rebot-page">

<section className="doc-hero">
  <div>
    <span className="eyebrow">SO-ARM × LeRobot</span>
    <h2>Debug servo IDs, neutral positions, torque, and LeRobot calibration files with a GUI tool</h2>
    <p>The Steering Gear Debugging Tool, also called <strong>Seeed_RoboController</strong>, helps you inspect SO-ARM servo status, rewrite servo IDs, set neutral values, control individual servos, and manage LeRobot calibration files for both leader and follower arms.</p>
    <div className="hero-actions">
      <a href="#quick-path">View Workflow</a>
      <a href="#install">Install Tool</a>
      <a href="#servo-id">Fix Servo IDs</a>
    </div>
  </div>
  <div className="hero-card image-card">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="SO-ARM Steering Gear Debugging Tool" />
    <strong>Servo Debugging · ID Recovery · Neutral Calibration</strong>
    <span>Use this tool when a servo is missing, an ID is duplicated, the neutral position is wrong, or LeRobot calibration files need to be inspected.</span>
  </div>
</section>

<div className="safety-alert">
  <div className="safety-alert-icon">⚠️</div>
  <div className="safety-alert-content">
    <strong>Safety Warning: Power and torque can move the arm unexpectedly</strong>
    <p>Before enabling torque or moving any servo, clear the robot workspace and keep your hands away from joints, gears, links, and the gripper. When disabling torque, the arm may go limp and fall, so support it by hand.</p>
    <ul>
      <li>For SO101 Pro, use <strong>5V for the Leader Arm</strong> and <strong>12V for the Follower Arm</strong>.</li>
      <li>Do not write servo IDs while multiple servos with duplicated IDs are connected to the same bus.</li>
      <li>Move sliders slowly. Mechanical parts may block the servo before the GUI reaches its minimum or maximum value.</li>
      <li>Power off the arm before reconnecting servo harnesses or changing wiring.</li>
    </ul>
  </div>
</div>

<nav className="doc-nav" aria-label="SO-ARM debugging tool quick navigation">
  <a href="#quick-path">Workflow</a>
  <a href="#overview">Overview</a>
  <a href="#install">Install</a>
  <a href="#check-servos">Check</a>
  <a href="#servo-id">Servo IDs</a>
  <a href="#neutral">Neutral</a>
  <a href="#single-servo">Control</a>
  <a href="#calibration-files">Files</a>
  <a href="#faq">FAQ</a>
</nav>

<section id="quick-path" className="section-card">
  <div className="section-title">
    <span>Start Here</span>
    <h2>Recommended debugging workflow</h2>
    <p>Follow this order when a SO-ARM leader or follower arm cannot be detected, has duplicated servo IDs, has an incorrect neutral position, or cannot complete LeRobot calibration.</p>
  </div>

  <div className="path-grid">
    <a className="path-card recommended" href="#install"><span>Step 0</span><strong>Install and launch the tool</strong><p>Clone Seeed_RoboController, install dependencies, check the environment, and open the GUI.</p><em>Required</em></a>
    <a className="path-card" href="#check-servos"><span>Step 1</span><strong>Check servo status</strong><p>Confirm whether servos 1-6 are detected. Missing servos usually indicate wiring, power, or ID issues.</p><em>Read first</em></a>
    <a className="path-card" href="#servo-id"><span>Step 2</span><strong>Recover duplicated IDs</strong><p>Disconnect the servo chain and connect only one servo at a time before rewriting IDs.</p><em>ID repair</em></a>
    <a className="path-card" href="#neutral"><span>Step 3</span><strong>Write neutral values</strong><p>Move the arm to the correct neutral pose, then write the current position as the servo neutral value.</p><em>Centering</em></a>
    <a className="path-card" href="#single-servo"><span>Step 4</span><strong>Test individual servos</strong><p>Enable torque and move each servo slowly to verify direction, voltage, temperature, load, and status.</p><em>Motion test</em></a>
    <a className="path-card" href="#calibration-files"><span>Step 5</span><strong>Manage calibration files</strong><p>Run, modify, delete, or create LeRobot calibration files for leader and follower arms.</p><em>LeRobot</em></a>
  </div>
</section>

<section id="overview" className="section-card">
  <div className="section-title">
    <span>Overview</span>
    <h2>What this tool is used for</h2>
    <p>The GUI is designed for SO-ARM100 / SO-ARM101 assembly, repair, and maintenance. It is especially useful before or after running <code>{`lerobot-setup-motors`}</code> and <code>{`lerobot-calibrate`}</code>.</p>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Servo status detection</b><span>Quickly check whether servo IDs 1-6 are detected and whether basic communication is working.</span></div>
    <div className="module-summary-card"><b>ID recovery</b><span>Rewrite incorrect or duplicated servo IDs by connecting one servo at a time.</span></div>
    <div className="module-summary-card"><b>Neutral calibration</b><span>Set the current servo position as the neutral value and verify whether the arm returns to the expected middle pose.</span></div>
    <div className="module-summary-card"><b>Single-servo control</b><span>Enable torque, move a servo slowly, and inspect position, voltage, temperature, speed, load, current, motion, model, and status.</span></div>
    <div className="module-summary-card"><b>Advanced registers</b><span>Read and write register data, change baud rate, or restore factory settings when necessary.</span></div>
    <div className="module-summary-card"><b>Calibration file management</b><span>Select, run, modify, delete, or create LeRobot calibration files for leader and follower arms.</span></div>
  </div>
</section>

<section id="install" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 0</span>
    <div>
      <h2>Install and launch Seeed_RoboController</h2>
      <p>The tool supports Windows, Ubuntu, and macOS. It is recommended to install it inside your LeRobot virtual environment.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">0.1</span><strong>Clone repository</strong><p>Download the GUI debugging tool from the Seeed-Projects GitHub repository.</p></div>
    <div className="step-card"><span className="step-mini">0.2</span><strong>Install dependencies</strong><p>Install Python dependencies in the LeRobot environment or another dedicated virtual environment.</p></div>
    <div className="step-card"><span className="step-mini">0.3</span><strong>Check environment</strong><p>Run the setup check and make sure it reports that the environment passed.</p></div>
    <div className="step-card"><span className="step-mini">0.4</span><strong>Launch GUI</strong><p>Start the GUI with interactive port selection, or manually specify the ports if needed.</p></div>
  </div>

  <details className="content-details">
    <summary>Installation commands</summary>
    <pre><code>{`git clone https://github.com/Seeed-Projects/Seeed_RoboController.git
cd Seeed_RoboController

# Recommended: run this inside your LeRobot virtual environment.
pip install -r requirements.txt

# Environment check. Expected result: [OK] Environment check passed
python setup.py`}</code></pre>
  </details>

  <details className="content-details">
    <summary>Launch the GUI</summary>
    <pre><code>{`# Interactive port selection
python -m src.gui.factory_calibration_tool

# Optional: manually specify ports if needed
python -m src.gui.factory_calibration_tool --port1 /dev/ttyUSB0 --port2 /dev/ttyUSB1`}</code></pre>
  </details>
</section>

<section id="check-servos" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 1</span>
    <div>
      <h2>Check whether servos are detected correctly</h2>
      <p>Start by checking whether servos 1-6 are detected. If all six servos are detected successfully, the servo bus and basic functions are usually working.</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/debug_tool.webp" alt="All servos detected in the debugging tool" />
  </div>

  <div className="notice-grid">
    <div className="notice-card"><strong>Normal case</strong><span>Servos 1-6 are all detected. You can continue with neutral testing, single-servo control, or LeRobot calibration file management.</span></div>
    <div className="notice-card warning"><strong>Abnormal case</strong><span>If some servos are not detected, check wiring and power first. Then close and reopen the GUI. If the issue remains, the servo IDs may be duplicated or incorrectly written.</span></div>
  </div>

  <details className="content-details">
    <summary>Example: missing or incorrectly detected servos</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/02.png" alt="Servo missing or not detected" />
    </div>
    <p>This may happen if the command for full-arm calibration was accidentally used as a servo-ID setup command, or if multiple servos now share the same ID.</p>
  </details>
</section>

<section id="servo-id" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Important: connect only one servo when rewriting IDs</strong>
      <p>The servos share one serial bus. If multiple servos with the same ID are connected, changing one ID may change every servo with that ID. Disconnect the servo chain and rewrite IDs one by one.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 2</span>
    <div>
      <h2>Recover duplicated or incorrect servo IDs</h2>
      <p>If a physically connected servo is shown as the wrong number, click the detected servo and change the ID back to the correct joint number.</p>
    </div>
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">2.1</span><strong>Disconnect servo harnesses</strong><p>Remove the daisy-chain harnesses so that only one servo can be connected to the driver board.</p></div>
    <div className="step-card"><span className="step-mini">2.2</span><strong>Connect one servo</strong><p>Connect only the servo you want to rewrite. You do not need to fully disassemble the arm.</p></div>
    <div className="step-card"><span className="step-mini">2.3</span><strong>Compare physical joint and detected ID</strong><p>For example, the connected servo may be joint 6, while the GUI detects it as ID 4.</p></div>
    <div className="step-card"><span className="step-mini">2.4</span><strong>Write the correct ID</strong><p>Click the detected servo in the GUI and change its ID to the expected joint number.</p></div>
    <div className="step-card"><span className="step-mini">2.5</span><strong>Repeat and reconnect</strong><p>Repeat for other servos, then plug the harnesses back in one by one.</p></div>
  </div>

  <details className="content-details">
    <summary>Step 2.1: remove the servo wire harnesses</summary>
    <p>Remove the harnesses in order: servo 6 to 5, servo 5 to 4, servo 4 to 3, servo 3 to 2, servo 2 to 1, and finally servo 1 to the control board.</p>
    <div className="image-grid">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/03.webp" alt="Remove harness between servo 6 and servo 5" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/04.webp" alt="Remove harness between servo 5 and servo 4" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/05.webp" alt="Remove harness between servo 4 and servo 3" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/06.webp" alt="Remove harness between servo 3 and servo 2" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/07.webp" alt="Remove harness between servo 2 and servo 1" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/08.webp" alt="Remove harness between servo 1 and control board" />
    </div>
  </details>

  <details className="content-details">
    <summary>Step 2.2: connect one servo and rewrite its ID</summary>
    <p>Connect only one servo to the driver board. The example below shows how to connect servo 6 for ID recovery.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/09.webp" alt="Connect only one servo to the driver board" />
    </div>
    <p>If the GUI shows ID 4 but the physically connected servo should be servo 6, click servo 4 and change its ID to 6.</p>
    <div className="image-grid two-col">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/10.png" alt="Wrong servo ID detected" />
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/11.png" alt="Change servo ID in GUI" />
    </div>
  </details>
</section>

<section id="neutral" className="section-card step-section">
  <div className="safety-alert compact">
    <div className="safety-alert-icon">⚠️</div>
    <div className="safety-alert-content">
      <strong>Support the arm when disabling torque</strong>
      <p>After clicking <strong>Serial Port Disable Motors</strong>, the arm will go limp. Hold the arm before disabling torque.</p>
    </div>
  </div>

  <div className="step-title-row">
    <span className="step-pill">Step 3</span>
    <div>
      <h2>Write the neutral value to the servo</h2>
      <p>Neutral calibration writes the current physical pose as the middle value of each servo. This is useful when LeRobot calibration reports abnormal magnitude or range values.</p>
    </div>
  </div>

  <div className="image-wrap">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/12.jpg" alt="SO-ARM neutral position" />
  </div>

  <div className="step-card-grid">
    <div className="step-card"><span className="step-mini">3.1</span><strong>Run neutral test</strong><p>Click <strong>Serial Port Neutral Test</strong> and check whether the arm moves to the expected neutral pose.</p></div>
    <div className="step-card"><span className="step-mini">3.2</span><strong>Move to neutral pose</strong><p>If the pose is wrong, manually move the arm to the neutral position shown above.</p></div>
    <div className="step-card"><span className="step-mini">3.3</span><strong>Write neutral value</strong><p>Click <strong>Serial Port Neutral Calibration</strong> to write the current position as the servo neutral value.</p></div>
    <div className="step-card"><span className="step-mini">3.4</span><strong>Disable torque carefully</strong><p>Click <strong>Serial Port Disable Motors</strong> only while supporting the arm by hand.</p></div>
  </div>

  <details className="content-details">
    <summary>Neutral calibration GUI</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/13.png" alt="Neutral calibration in GUI" />
    </div>
  </details>
</section>

<section id="single-servo" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 4</span>
    <div>
      <h2>Control and inspect a single servo</h2>
      <p>Use single-servo control to verify direction, communication, torque, temperature, and status. Move slowly and avoid mechanical end stops.</p>
    </div>
  </div>

  <div className="image-grid two-col">
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/14.png" alt="Single servo control neutral positions" />
    <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/15.png" alt="Single servo movement after torque is enabled" />
  </div>

  <div className="notice-grid">
    <div className="notice-card warning"><strong>Do not drag sliders to the extreme</strong><span>The printed arm structure can physically block some positions before the slider reaches 0 or maximum.</span></div>
    <div className="notice-card"><strong>Enable torque first</strong><span>You can enable all torque with one click, or enable torque for a single servo before moving it.</span></div>
  </div>

  <details className="content-details">
    <summary>Servo status fields</summary>
    <div className="api-grid">
      <div className="api-card"><b>Pos</b><span>Position</span></div>
      <div className="api-card"><b>V</b><span>Voltage</span></div>
      <div className="api-card"><b>T</b><span>Temperature</span></div>
      <div className="api-card"><b>Spd</b><span>Speed</span></div>
      <div className="api-card"><b>Load</b><span>Torque / load</span></div>
      <div className="api-card"><b>Cur</b><span>Current</span></div>
      <div className="api-card"><b>Mov</b><span>Motion status</span></div>
      <div className="api-card"><b>Model</b><span>Model and authority</span></div>
      <div className="api-card"><b>Status</b><span>Normal, overcurrent, or overload</span></div>
    </div>
  </details>
</section>

<section id="advanced" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 5</span>
    <div>
      <h2>Use advanced tools only when needed</h2>
      <p>The advanced panel can read or write register data, modify baud rate, and restore factory settings. Use it carefully because incorrect values may make the servo difficult to access.</p>
    </div>
  </div>

  <details className="content-details">
    <summary>Advanced tools panel</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/16.png" alt="Advanced servo tools" />
    </div>
    <ul>
      <li>Read corresponding register address data.</li>
      <li>Write corresponding register data.</li>
      <li>Modify baud rate.</li>
      <li>Restore factory settings.</li>
    </ul>
  </details>
</section>

<section id="calibration-files" className="section-card step-section">
  <div className="step-title-row">
    <span className="step-pill">Step 6</span>
    <div>
      <h2>Manage LeRobot calibration files</h2>
      <p>The GUI can run, modify, delete, or create calibration files for SO-ARM leader and follower arms. This is useful when replacing servos or recovering from incorrect calibration.</p>
    </div>
  </div>

  <div className="module-summary-grid">
    <div className="module-summary-card"><b>Run calibration file</b><span>Select an existing leader or follower calibration file and use it for a test.</span></div>
    <div className="module-summary-card"><b>Modify calibration file</b><span>Inspect and adjust an existing calibration file when you know which parameter needs to change.</span></div>
    <div className="module-summary-card"><b>Delete calibration file</b><span>Remove incorrect calibration files before running a clean LeRobot calibration again.</span></div>
    <div className="module-summary-card"><b>Create new file</b><span>Use the GUI Calibration Wizard to record neutral, minimum, and maximum values for each servo.</span></div>
  </div>

  <details className="content-details">
    <summary>Calibration file management panel</summary>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/17.png" alt="Robotic arm calibration file management" />
    </div>
  </details>

  <details className="content-details">
    <summary>Create a new calibration file with the GUI Calibration Wizard</summary>
    <p>Click <strong>GUI Calibration Wizard</strong>, then select the corresponding robot type and port number.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/18.png" alt="GUI Calibration Wizard" />
    </div>
    <p>The wizard can record minimum, maximum, and neutral calibration values for each servo.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/19.png" alt="Record range and neutral values" />
    </div>
    <p>First, place each servo in the neutral position and click <strong>Record Neutral Value</strong> for servos 1-6 one by one.</p>
    <div className="image-wrap">
      <img src="https://files.seeedstudio.com/wiki/robotics/projects/lerobot/debug_tool/20.png" alt="Record neutral value for each servo" />
    </div>
    <p>Then click <strong>Start Recording Range</strong> for each servo, rotate it to the maximum and minimum ranges, and click <strong>Stop Recording Range</strong>. Repeat this for each servo, name the calibration file, and save it.</p>
  </details>
</section>

<section id="faq" className="section-card">
  <div className="section-title">
    <span>FAQ</span>
    <h2>Common debugging cases</h2>
    <p>Most SO-ARM servo debugging issues are caused by wiring, incorrect power supply, duplicated IDs, missing permissions, or outdated LeRobot calibration files.</p>
  </div>

  <details className="content-details">
    <summary>1. Some servos are not detected</summary>
    <ul>
      <li>Check whether the power supply is connected and uses the correct voltage.</li>
      <li>Check whether the 3-pin servo harness is loose or disconnected.</li>
      <li>Close the GUI and reopen it.</li>
      <li>If the issue remains, disconnect the servo chain and rewrite IDs one by one.</li>
    </ul>
  </details>

  <details className="content-details">
    <summary>2. The connected servo is shown as the wrong ID</summary>
    <p>This means the servo ID is incorrect. Connect only that servo to the driver board, click the detected servo in the GUI, and change the ID back to the expected joint number.</p>
  </details>

  <details className="content-details">
    <summary>3. Why must I connect only one servo when writing IDs?</summary>
    <p>SO-ARM servos share the same serial bus. If multiple servos with the same ID are connected, writing a new ID may change all servos with that duplicated ID at the same time.</p>
  </details>

  <details className="content-details">
    <summary>4. The arm falls after disabling torque</summary>
    <p>This is expected. When torque is disabled, the servos stop holding position and the arm becomes limp. Always support the arm by hand before disabling torque.</p>
  </details>

  <details className="content-details">
    <summary>5. LeRobot calibration still reports abnormal values after neutral calibration</summary>
    <p>Delete the old calibration files and run LeRobot calibration again. Check both robot and teleoperator calibration directories:</p>
    <pre><code>{`rm -rf ~/.cache/huggingface/lerobot/calibration/robots/*
rm -rf ~/.cache/huggingface/lerobot/calibration/teleoperators/*`}</code></pre>
  </details>
</section>

<section className="section-card course-path-section">
  <div className="section-title">
    <span>Continue Learning</span>
    <h2>SO-ARM learning path</h2>
    <p>Use the debugging tool together with the SO-ARM LeRobot tutorial. After the servo IDs and neutral positions are correct, continue with teleoperation, data collection, simulation, and policy training.</p>
  </div>
  <div className="course-path-grid">
    <a className="course-path-item" href="/lerobot_so100m_new/">
      <span className="course-index">1</span>
      <span className="course-path-copy"><strong>SO-ARM LeRobot Getting Started</strong><span>Assemble SO-ARM100 / SO-ARM101, install LeRobot, calibrate, teleoperate, record datasets, train, and evaluate policies.</span></span>
      <span className="course-tag">Main guide</span>
    </a>
    <a className="course-path-item active" href="/lerobot_steering_gear_debugging_tool/">
      <span className="course-index">2</span>
      <span className="course-path-copy"><strong>Steering Gear Debugging Tool</strong><span>Recover servo IDs, write neutral values, test individual servos, and manage calibration files.</span></span>
      <span className="course-tag">Current article</span>
    </a>
    <a className="course-path-item" href="/simulate_soarm101_by_leisaac/">
      <span className="course-index">3</span>
      <span className="course-path-copy"><strong>LeIsaac Simulation</strong><span>Understand the SO-ARM model, simulation scene, and task setup before Sim2Real.</span></span>
      <span className="course-tag">Simulation</span>
    </a>
    <a className="course-path-item" href="/training_soarm101_policy_with_isaacLab/">
      <span className="course-index">4</span>
      <span className="course-path-copy"><strong>Isaac Lab Reinforcement Learning</strong><span>Train policies in simulation and learn the reinforcement learning workflow.</span></span>
      <span className="course-tag">RL</span>
    </a>
    <a className="course-path-item" href="/fine_tune_gr00t_n1.5_for_lerobot_so_arm_and_deploy_on_jetson_thor/">
      <span className="course-index">5</span>
      <span className="course-path-copy"><strong>SO101 with NVIDIA GR00T</strong><span>Fine-tune and deploy a VLA / embodied AI model for SO-ARM workflows.</span></span>
      <span className="course-tag">VLA</span>
    </a>
  </div>
</section>

</div>

<style>{`
.rebot-page {
  --rb-bg: #ffffff;
  --rb-surface: #ffffff;
  --rb-surface-soft: #f8fafc;
  --rb-text: #111827;
  --rb-muted: #64748b;
  --rb-border: rgba(148, 163, 184, 0.28);
  --rb-primary: #2563eb;
  --rb-primary-soft: #eff6ff;
  --rb-accent: #14b8a6;
  --rb-warning: #f59e0b;
  --rb-danger: #ef4444;
  --rb-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  width: 100%;
}
.rebot-page * { box-sizing: border-box; }
.doc-hero { position: relative; display: grid; grid-template-columns: minmax(0, 1.45fr) minmax(280px, 0.75fr); gap: 1.5rem; padding: 2rem; margin: 1.5rem 0 1.25rem; border: 1px solid var(--rb-border); border-radius: 26px; background: radial-gradient(circle at 12% 18%, rgba(37,99,235,0.18), transparent 32%), radial-gradient(circle at 90% 85%, rgba(20,184,166,0.18), transparent 35%), linear-gradient(135deg, rgba(248,250,252,0.95), rgba(255,255,255,0.92)); box-shadow: var(--rb-shadow); overflow: hidden; }
.doc-hero::after { content: ""; position: absolute; width: 260px; height: 260px; right: -120px; top: -120px; background: rgba(37,99,235,0.10); border-radius: 50%; }
.eyebrow { display: inline-flex; margin-bottom: 0.6rem; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; letter-spacing: 0.09em; text-transform: uppercase; }
.doc-hero h2 { margin: 0 0 0.8rem; color: var(--rb-text); font-size: clamp(1.6rem, 3vw, 2.35rem); line-height: 1.18; }
.doc-hero p { margin: 0; color: var(--rb-muted); line-height: 1.75; }
.hero-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.2rem; }
.hero-actions a { display: inline-flex; padding: 0.72rem 1rem; border-radius: 999px; text-decoration: none !important; font-weight: 800; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); box-shadow: 0 12px 24px rgba(37,99,235,0.18); }
.hero-actions a:nth-child(n+2) { color: var(--rb-primary); background: var(--rb-primary-soft); box-shadow: none; }
.hero-card { position: relative; z-index: 1; display: grid; align-content: center; gap: 0.75rem; padding: 1.1rem; border-radius: 18px; background: rgba(255,255,255,0.78); border: 1px solid rgba(148,163,184,0.22); box-shadow: 0 10px 26px rgba(15,23,42,0.06); backdrop-filter: blur(10px); }
.hero-card img { width: 100%; border-radius: 14px; border: 1px solid var(--rb-border); }
.hero-card strong { color: var(--rb-text); }
.hero-card span { color: var(--rb-muted); font-size: 0.92rem; line-height: 1.55; }
.doc-nav { position: sticky; top: 0.75rem; z-index: 5; display: grid; grid-template-columns: repeat(auto-fit, minmax(92px, 1fr)); gap: 0.65rem; padding: 0.7rem; margin: 1.1rem 0 2rem; border-radius: 18px; background: rgba(255,255,255,0.88); border: 1px solid var(--rb-border); box-shadow: 0 12px 28px rgba(15,23,42,0.07); backdrop-filter: blur(14px); }
.doc-nav a { text-align: center; padding: 0.72rem 0.7rem; border-radius: 13px; color: #334155; background: var(--rb-surface-soft); text-decoration: none !important; font-weight: 800; font-size: 0.86rem; transition: all 0.2s ease; }
.doc-nav a:hover { color: var(--rb-primary); background: #fff; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(37,99,235,0.12); }
.section-card { margin: 1.6rem 0; padding: 1.45rem; border-radius: 22px; background: var(--rb-surface); border: 1px solid var(--rb-border); box-shadow: 0 10px 30px rgba(15,23,42,0.055); scroll-margin-top: 6rem; }
.section-title { margin-bottom: 1rem; }
.section-title span { color: var(--rb-primary); font-size: 0.76rem; font-weight: 850; letter-spacing: 0.08em; text-transform: uppercase; }
.section-title h2 { margin: 0.18rem 0 0.45rem; color: var(--rb-text); }
.section-title p { margin: 0; color: var(--rb-muted); line-height: 1.65; }
.path-grid, .step-card-grid, .module-summary-grid, .notice-grid, .api-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 0.95rem; }
.path-card, .step-card, .module-summary-card, .notice-card, .api-card { display: grid; gap: 0.45rem; padding: 1rem; border-radius: 18px; background: linear-gradient(180deg, var(--rb-surface), var(--rb-surface-soft)); border: 1px solid var(--rb-border); color: inherit; text-decoration: none !important; box-shadow: 0 10px 24px rgba(15,23,42,0.05); transition: all 0.18s ease; }
.path-card:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.36); box-shadow: 0 16px 32px rgba(37,99,235,0.10); }
.path-card span, .step-mini { display: inline-flex; align-items: center; justify-content: center; width: fit-content; min-height: 2rem; padding: 0.28rem 0.65rem; border-radius: 999px; color: #fff; background: linear-gradient(135deg, var(--rb-primary), var(--rb-accent)); font-size: 0.82rem; font-weight: 900; }
.path-card strong, .step-card strong, .module-summary-card b, .notice-card strong, .api-card b { color: var(--rb-text); font-size: 1rem; }
.path-card p, .step-card p, .module-summary-card span, .notice-card span, .api-card span { margin: 0; color: var(--rb-muted); line-height: 1.62; font-size: 0.92rem; }
.path-card em { width: fit-content; margin-top: 0.2rem; padding: 0.32rem 0.62rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.18); font-style: normal; font-weight: 800; font-size: 0.78rem; }
.path-card.recommended { border-color: rgba(37,99,235,0.42); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.notice-card.warning { border-color: rgba(245,158,11,0.34); background: linear-gradient(135deg, rgba(255,251,235,0.95), rgba(255,247,237,0.88)); }
.content-details { margin: 1rem 0; padding: 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: inherit; }
.content-details summary { cursor: pointer; color: var(--rb-text); font-weight: 850; }
.content-details summary::after { content: "Expand"; float: right; color: var(--rb-primary); font-size: 0.78rem; font-weight: 850; }
.content-details[open] summary::after { content: "Collapse"; }
.step-title-row { display: flex; gap: 0.95rem; align-items: flex-start; margin-bottom: 1rem; }
.step-pill { display: inline-flex; padding: 0.45rem 0.8rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); border: 1px solid rgba(37,99,235,0.18); font-weight: 900; white-space: nowrap; }
.image-wrap { margin: 1rem 0; text-align: center; }
.image-wrap img, .image-grid img { width: 100%; max-width: 900px; border-radius: 16px; border: 1px solid var(--rb-border); box-shadow: 0 10px 24px rgba(15,23,42,0.06); background: #fff; }
.image-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 0.85rem; margin: 1rem 0; }
.image-grid.two-col { grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); }
.reference-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.85rem; }
.reference-grid a { padding: 0.9rem 1rem; border-radius: 16px; background: var(--rb-surface-soft); border: 1px solid var(--rb-border); color: var(--rb-primary); text-decoration: none !important; font-weight: 800; }
.safety-alert { display: grid; grid-template-columns: auto minmax(0, 1fr); gap: 0.9rem; align-items: flex-start; margin: 1.2rem 0 1.6rem; padding: 1.05rem 1.15rem; border-radius: 18px; border: 1px solid rgba(239, 68, 68, 0.38); background: linear-gradient(135deg, rgba(254, 242, 242, 0.98), rgba(255, 247, 237, 0.92)); color: #7f1d1d; box-shadow: 0 14px 30px rgba(239, 68, 68, 0.12); }
.safety-alert-icon { display: inline-flex; align-items: center; justify-content: center; width: 2.35rem; height: 2.35rem; border-radius: 999px; background: #fee2e2; color: #dc2626; font-size: 1.25rem; line-height: 1; flex-shrink: 0; }
.safety-alert-content strong { display: block; margin-bottom: 0.45rem; color: #991b1b; font-size: 1.05rem; font-weight: 900; }
.safety-alert-content p { margin: 0; color: #7f1d1d; line-height: 1.72; }
.safety-alert-content ul { margin: 0.65rem 0 0; padding-left: 1.2rem; color: #7f1d1d; line-height: 1.68; }
.safety-alert-content li + li { margin-top: 0.35rem; }
.safety-alert.compact { margin: 1rem 0; padding: 0.9rem 1rem; border-radius: 16px; }
.course-path-section { margin-top: 2rem; }
.course-path-grid { display: grid; gap: 0.85rem; margin-top: 1rem; }
.course-path-item { display: grid; grid-template-columns: auto minmax(0, 1fr) auto; gap: 1rem; align-items: center; padding: 1rem 1.1rem; border-radius: 18px; border: 1px solid var(--rb-border); background: var(--rb-surface); text-decoration: none !important; color: var(--rb-text); box-shadow: 0 8px 22px rgba(15,23,42,0.05); transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease; }
.course-path-item:hover { transform: translateY(-2px); border-color: rgba(37,99,235,0.42); box-shadow: 0 14px 30px rgba(37,99,235,0.12); }
.course-path-item.active { border-color: rgba(37,99,235,0.55); background: linear-gradient(135deg, rgba(239,246,255,0.95), rgba(240,253,250,0.86)); }
.course-index { display: inline-flex; align-items: center; justify-content: center; width: 2.4rem; height: 2.4rem; border-radius: 999px; background: var(--rb-primary-soft); color: var(--rb-primary); font-weight: 900; }
.course-path-item.active .course-index { color: #fff; background: var(--rb-primary); box-shadow: 0 10px 22px rgba(37,99,235,0.25); }
.course-path-copy strong { display: block; color: var(--rb-text); font-size: 1rem; margin-bottom: 0.22rem; }
.course-path-copy span { display: block; color: var(--rb-muted); line-height: 1.55; }
.course-tag { display: inline-flex; align-items: center; padding: 0.4rem 0.7rem; border-radius: 999px; color: var(--rb-primary); background: var(--rb-primary-soft); border: 1px solid rgba(37,99,235,0.20); font-size: 0.78rem; font-weight: 850; white-space: nowrap; }
pre { overflow-x: auto; }
html[data-theme='dark'] .rebot-page { --rb-bg: #111827; --rb-surface: #1f2023; --rb-surface-soft: #24262a; --rb-text: #f9fafb; --rb-muted: #a1a1aa; --rb-border: #343840; --rb-primary: #60a5fa; --rb-primary-soft: rgba(96,165,250,0.14); --rb-accent: #2dd4bf; --rb-shadow: 0 18px 42px rgba(0,0,0,0.34); }
html[data-theme='dark'] .doc-hero { background: radial-gradient(circle at 12% 18%, rgba(96,165,250,0.20), transparent 34%), radial-gradient(circle at 90% 85%, rgba(45,212,191,0.16), transparent 36%), linear-gradient(135deg, #1f2023, #16181d); }
html[data-theme='dark'] .hero-card, html[data-theme='dark'] .doc-nav { background: rgba(31,32,35,0.86); }
html[data-theme='dark'] .doc-nav a:hover { background: #1f2023; }
html[data-theme='dark'] .path-card, html[data-theme='dark'] .step-card, html[data-theme='dark'] .module-summary-card, html[data-theme='dark'] .notice-card, html[data-theme='dark'] .api-card, html[data-theme='dark'] .content-details, html[data-theme='dark'] .reference-grid a, html[data-theme='dark'] .course-path-item { background: rgba(15, 23, 42, 0.72); border-color: rgba(148, 163, 184, 0.22); }
html[data-theme='dark'] .path-card.recommended, html[data-theme='dark'] .course-path-item.active { background: linear-gradient(135deg, rgba(37,99,235,0.18), rgba(20,184,166,0.12)); }
html[data-theme='dark'] .notice-card.warning { background: linear-gradient(135deg, rgba(245,158,11,0.14), rgba(251,146,60,0.10)); }
html[data-theme='dark'] .safety-alert { border-color: rgba(248, 113, 113, 0.42); background: linear-gradient(135deg, rgba(127, 29, 29, 0.26), rgba(124, 45, 18, 0.18)); color: #fecaca; box-shadow: 0 16px 34px rgba(0, 0, 0, 0.28); }
html[data-theme='dark'] .safety-alert-icon { background: rgba(248, 113, 113, 0.18); color: #fca5a5; }
html[data-theme='dark'] .safety-alert-content strong, html[data-theme='dark'] .safety-alert-content p, html[data-theme='dark'] .safety-alert-content ul { color: #fecaca; }
@media (max-width: 900px) { .doc-hero { grid-template-columns: 1fr; } .doc-nav { position: static; grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 720px) { .course-path-item { grid-template-columns: auto minmax(0, 1fr); } .course-tag { grid-column: 2; width: fit-content; } .step-title-row { display: grid; } }
@media (max-width: 560px) { .doc-hero, .section-card { padding: 1.1rem; border-radius: 18px; } .doc-nav { grid-template-columns: 1fr; } .safety-alert { grid-template-columns: 1fr; } .image-grid.two-col { grid-template-columns: 1fr; } }
`}</style>
