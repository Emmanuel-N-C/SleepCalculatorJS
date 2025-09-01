# 💤 SleepCalculatorJS

A lightweight JavaScript utility to calculate optimal sleep and wake times based on sleep cycle duration. Ideal for building healthier sleep routines and avoiding groggy mornings.

## ✨ Features
- ⏰ Compute **wake-up times** based on desired number of sleep cycles.
- 🛏️ Calculate **bedtime** needed to wake up refreshed.
- ⚙️ Customize parameters like **sleep cycle length** (typically 90 minutes).
- 🌐 Easy to integrate into web pages or Node.js apps.

## 📥 Installation
Clone this repository:
```bash
git clone https://github.com/Emmanuel-N-C/SleepCalculatorJS.git
```

## 🚀 Usage
Import into your project (browser or Node.js):
```js
import { calculateBedtime, calculateWakeTimes } from './calculator.js';
```

Example:
```js
// Calculate wake times for 5–6 full sleep cycles
const bedtime = '22:30';
const cycleLength = 90; // minutes

calculateWakeTimes(bedtime, cycleLength);
// ➝ ['00:00', '01:30', '03:00', ...]

// Or calculate bedtime from a wake-up time
const wakeTime = '06:30';
calculateBedtime(wakeTime, cycleLength, 6);
// ➝ '21:00'
```

## 🧠 How It Works
- Sleep cycles average **~90 minutes**.
- Waking at the **end of a cycle** helps you feel refreshed.
- This tool aligns your sleep schedule with natural sleep rhythms.


