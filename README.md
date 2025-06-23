🕹️ Micro:bit v2 Bluetooth Steering Wheel (Windows + XOutput)
Turn your BBC micro:bit v2 into a wireless, motion-based steering wheel for racing games like Forza Horizon, Assetto Corsa, and others. Uses Bluetooth HID and XOutput to work as a virtual Xbox 360 controller on Windows.

🚗 Features
Tilt to steer — just like a real racing wheel

Button A = Throttle (Accelerate)

Button B = Brake

Connects wirelessly via Bluetooth HID

Works in any game that supports XInput (via XOutput)

🧰 Requirements
✅ BBC micro:bit v2 only

✅ Windows 10 or 11 with Bluetooth

✅ XOutput (Xbox controller emulator)

✅ Microsoft MakeCode + Bluetooth Gamepad extension (yohewi/pxt-gamepad)

🛠️ Setup
Visit makecode.microbit.org

Create a new project

Add the Gamepad extension

Import the steering wheel program (see repo)

Flash the code to your micro:bit v2 using USB

Disconnect USB and enter pairing mode:

Hold A + B + Reset, then release Reset

In Windows Bluetooth settings, pair with the device (shows as “Gamepad”)

Launch XOutput

Select the micro:bit HID device

import settings.json in the xoutput folder

Click Start

✅ Tested Games
Game	Works?
Forza Horizon 4 & 5	✅
Assetto Corsa	✅
F1 2023	✅
iRacing	✅
Roblox Racing Games	✅

🖼️ Diagram

⚠️ Important Notes
❌ micro:bit v1 not supported (no HID Bluetooth support)

❌ Do not add radio — it conflicts with Bluetooth HID

✅ Bluetooth only — unplug USB after flashing

⚠️ Run XOutput as Administrator

📄 License
MIT — Free to use, modify, and share.

