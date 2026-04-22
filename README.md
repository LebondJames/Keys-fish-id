# Keys Fish ID — Offline PWA

Identify Florida Keys fish from a photo. Works completely offline once loaded.
Runs on-device AI (TensorFlow.js) — no internet needed at sea.

## Project Structure

```
public/
  index.html          ← Main app
  species.js          ← Species data + regulations
  manifest.json       ← PWA config
  sw.js               ← Service worker (offline caching)
  model/              ← TF.js model files (you add these)
    model.json
    group1-shard1of3.bin
    group1-shard2of3.bin
    group1-shard3of3.bin
netlify.toml          ← Netlify deploy config
```

## Setup

### 1. Add model files
Copy your trained model files into `public/model/`:
```
cp -r ~/Desktop/fish-id/fish_model_tfjs/* public/model/
```

### 2. Add species data
Copy species.js from the original PWA project:
```
cp ~/Desktop/fish-id/keys-fish-id/public/species.js public/
```

### 3. Deploy to Netlify
```
git init
git add .
git commit -m "initial"
gh repo create keys-fish-id --public --push
```
Then connect repo to Netlify — auto-deploys on every push.

### 4. Install on iPhone
1. Open the live URL in Safari
2. Tap Share → Add to Home Screen
3. App installs — works offline after first load

## Model
- Architecture: MobileNetV2 + custom classifier head
- Species: 38 Florida Keys fish species
- Accuracy: ~58.6% validation accuracy
- Size: ~10MB (cached by service worker)
- Inference: runs on iPhone neural engine, no internet needed

## Species Coverage
Grouper (6), Snapper (6), Pelagic (7), Jacks (3),
Inshore (4), Billfish (3), Tuna (4), Other (5)
