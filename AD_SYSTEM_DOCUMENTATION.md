# NETWHO Advertisement System — Sponsored Popup & Safe Ad Integration

## Overview

The NETWHO advertisement management system provides a controlled, user-friendly Sponsored popup experience:
- **Controlled Sponsored Popup Box**: The Sponsored container itself functions as a clean modal popup with an explicit, accessible close button (`[ X ]` and `Close ×`).
- **Real External Advertisement Inside**: The real advertisement mounts directly inside the designated container (`#container-487b249ab83f6aa8203efe13fa4ee6d6`) within the Sponsored popup.
- **Strict Safe Interaction**:
  - Scrolling never navigates the user away or triggers external redirects.
  - Touching or clicking the backdrop or close button safely dismisses the popup and leaves the user on NETWHO.
  - No automatic redirects, no pop-under windows, no `window.open` calls on scroll or background events.
  - Only an intentional click directly on the provider's advertisement follows the provider's normal ad behavior.
- **Zero Fake Ads**: No AI-generated or simulated promotional cards (such as "NETWHO Premium", fake countdowns, or fake "Learn More" buttons).
- **Post-Load Timing**: The loading screen finishes first -> NETWHO interface is fully usable -> after a configured 5-second delay, the Sponsored popup box appears.

---

## Visual Structure

```
┌──────────────────────────────────────────┐
│ SPONSORED                           [ X ]│
├──────────────────────────────────────────┤
│                                          │
│        REAL EXTERNAL ADVERTISEMENT       │
│        Container: container-487b249ab83f6│
│        aa8203efe13fa4ee6d6               │
│                                          │
├──────────────────────────────────────────┤
│ Advertisement will close safely  Close × │
└──────────────────────────────────────────┘
```

---

## Active External Ad Configuration
- **Script**: `https://pl30885739.effectivecpmnetwork.com/487b249ab83f6aa8203efe13fa4ee6d6/invoke.js`
- **Container ID**: `container-487b249ab83f6aa8203efe13fa4ee6d6`
- **Component**: `src/components/SponsoredPopup.tsx`
