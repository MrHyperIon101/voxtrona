# Voxtrona

<div align="center">
  <img src="public/dirac-logo.png" alt="Voxtrona Logo" width="120" />
  <h1 align="center">Deploy the Core</h1>
  <p align="center">
    <b>Next-Gen Audio Experience for Android & Windows</b>
  </p>
</div>

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Kotlin](https://img.shields.io/badge/Kotlin-2.0-7F52FF?style=for-the-badge&logo=kotlin)](https://kotlinlang.org/)
[![Android](https://img.shields.io/badge/Android-14-3DDC84?style=for-the-badge&logo=android)](https://developer.android.com/)

</div>

<br />

## 🚀 Introduction

**Voxtrona** is a YouTube Music client for Android with premium-grade features like Spotify Canvas, SponsorBlock, ReturnYouTubeDislike, and now **Spatial Audio**.

It features a highly immersive, sci-fi inspired interface designed to "wow" users from the first interaction. The Android app is powered by a custom audio engine developed in partnership with industry leaders.

> [!WARNING] > **Voxtrona is in beta.** Occasional player errors are normal due to dependencies on YouTube Music APIs.

## ✨ Features

### 🎧 Core Playback

- **Lossless Streaming**: High-fidelity audio streaming up to FLAC quality.
- **Voxtron Engine**: Custom audio processing pipeline for gapless playback and smart crossfade.
- **Background Play**: Seamless background playback with Picture-in-Picture (PiP) support.
- **Speed & Pitch**: Real-time control over playback speed and pitch.

### 🎛️ Audio FX

- **Spatial Audio**: Native spatial audio support (Android 13+) with head tracking.
- **Dirac & Dolby**: Integrated profiles for Dirac Live and Dolby Atmos.
- **Professional EQ**: Multi-band equalizer with bass boost, virtualizer, and reverb.
- **Liquid EQ**: Visual audio spectrum analyzer.

### 🎤 Lyrics & Canvas

- **Synced Lyrics**: Real-time time-synced lyrics from multiple providers (LRCLIB, Musixmatch).
- **AI Translation**: On-the-fly lyric translation powered by Gemini/OpenAI.
- **Spotify Canvas**: High-quality looping video backgrounds for supported tracks.
- **Fullscreen Mode**: immersive blur mode for pure lyric enjoyment.

### 📚 Library Management

- **Unified Library**: Merge local tracks, YouTube playlists, and Spotify collections.
- **Offline Mode**: Smart caching and manual downloads for offline listening.
- **Backup & Sync**: Cross-device playlist and setting synchronization.

### 🧭 Discovery

- **Personalized Feeds**: "For You" mixes, "Forgotten Favorites", and daily curated playlists.
- **Mood Mixes**: Activity-based stations (Focus, Workout, Sleep, Party).
- **Global Charts**: Top 100 charts from over 100 countries and viral trends.
- **3D Card Interface**: Premium 3D interaction for browsing mixes.

### 🎨 Interface (Liquid Glass)

- **Liquid Glass UI**: Stunning blur effects, mesh gradients, and smooth animations.
- **OLED Mode**: True pitch-black theme for AMOLED displays.
- **Customization**: Dynamic album art gradients and layout density controls.
- **Mini Player**: Gesture-based swipe controls.

### ⚙️ Advanced Settings

- **Privacy Core**: Built-in proxy support (HTTP/SOCKS5) and Incognito mode.
- **Content Filtering**: **SponsorBlock** integration to skip non-music segments.
- **Account Sync**: Seamless integration with YouTube Music and Spotify accounts.
- **Developer Tools**: Advanced debug logs and performance metrics.

### 🌍 Global

- **Localization**: Fully translated into 26+ languages.
- **Regional Content**: unlock region-specific charts and recommendations.

## 🛠️ Tech Stack

### Website (This Repo)

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)

### Android Application

- **Language**: **Kotlin** (100% Native)
- **Architecture**: MVVM / Clean Architecture
- **UI**: Jetpack Compose
- **Audio Engine**: Custom C++ / Kotlin implementation

## 📊 Data Usage

- Uses hidden APIs from YouTube Music with optimized data extraction.
- Integrates Spotify Web API for Canvas and Lyrics.
- **Powered by:**
  - [InnerTune](https://github.com/z-huang/InnerTune)
  - [SmartTube](https://github.com/yuliskov/SmartTube)
  - [SponsorBlock](https://sponsor.ajay.app/)
  - [ReturnYouTubeDislike](https://returnyoutubedislike.com/)
  - [LRCLIB](https://lrclib.net/)

## ❓ FAQ

**1. Wrong Lyrics?**
Lyrics are fetched from LRCLIB, Spotify, or YouTube Transcripts. Sometimes mismatches occur due to timing or metadata variance.

**2. Why the name Voxtrona?**
It's a fusion of _Vox_ (voice) and _Electronica_. Voxtrona isn't just music — it's an experience.

For more FAQs or support, join our Discord community (coming soon).

## ⚡ Getting Started (Website)

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/voxtrona.git
    cd voxtrona
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000)

## � Developer / Team

- **[MrHyperIon](https://github.com/MrHyperIon101)** — Founder, Lead Developer, Designer
- Open for contributors and maintainers!

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  <p>Built with ❤️ by the Voxtrona Team</p>
</div>
