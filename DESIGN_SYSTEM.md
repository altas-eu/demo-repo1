# User Survey App mit Acorn Design System

Eine moderne User-Survey-Anwendung mit einem professionellen Design System.

## 🎨 Design System Integration

Diese App verwendet ein Acorn-inspiriertes Design System mit:

- **Design Tokens**: Farben, Typografie, Spacing und weitere Design-Variablen
- **Farbpalette**: Blue, Violet, Red, Green, Yellow und Grey Primitives
- **Light/Dark Mode**: Automatische Unterstützung für helle und dunkle Farbschemata mit `light-dark()` CSS-Funktion
- **Barrierefreiheit**: Focus States, semantische Farben und konsistente Interaktionsmuster

### Design Tokens

Alle Design Tokens sind in `src/acorn-design-tokens.css` definiert und umfassen:

#### Farben
- **Primitives**: Blue, Violet, Red, Green, Yellow, Grey (jeweils 05-90)
- **Semantische Farben**: 
  - `--color-background`: Hintergrundfarbe
  - `--color-surface`: Kartenoberflächen
  - `--color-text-primary`: Haupttext
  - `--color-text-secondary`: Sekundärtext
  - `--color-accent-primary`: Primäre Aktionsfarbe (Firefox Blue)
  - `--color-success/warning/error`: Feedback-Farben

#### Typografie
- **Font Families**: System-Schriftarten Stack
- **Font Sizes**: `--font-size-small` (13px) bis `--font-size-display` (36px)
- **Font Weights**: Regular (400), Medium (500), Bold (600)
- **Line Heights**: Default (1.6), Tight (1.4)

#### Spacing
- Basis: 4px Grid-System
- Range: `--space-xxsmall` (4px) bis `--space-xxlarge` (48px)

#### Border Radius
- Small: 4px (Buttons, Inputs)
- Medium: 8px (Cards, Panels)
- Large: 12px (Modals)

#### Shadows
- Small: Subtile Elevation
- Medium: Floating Elements
- Large: Modals und Overlays

#### Transitions
- Fast: 150ms (Hover States)
- Normal: 250ms (General Animations)
- Slow: 350ms (Complex Transitions)

## 🎯 Verwendung

### CSS Custom Properties

```css
.my-button {
  background-color: var(--color-accent-primary);
  padding: var(--space-small) var(--space-large);
  border-radius: var(--border-radius-small);
  transition: background-color var(--transition-fast);
}

.my-button:hover {
  background-color: var(--color-accent-primary-hover);
}
```

### Light/Dark Mode

Das System verwendet die `light-dark()` CSS-Funktion für automatische Theme-Unterstützung:

```css
:root {
  --color-background: light-dark(var(--color-grey-05), var(--color-grey-90));
}
```

Fallback für ältere Browser:
```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-background: var(--color-grey-90);
  }
}
```

## 📚 Ressourcen

- Design Tokens und moderne CSS-Praktiken
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [CSS light-dark() Function](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark)

## 📝 Hinweise

Dieses Design System verwendet moderne CSS-Praktiken und ist für Webanwendungen optimiert. Die Design Tokens können nach Bedarf angepasst werden.

## 🛠️ Anpassungen

Um weitere Komponenten zu erstellen:

1. Verwende die definierten CSS Custom Properties
2. Halte dich an das 4px Spacing-Grid
3. Nutze semantische Farben statt direkter Primitives
4. Implementiere Focus States für Barrierefreiheit
5. Teste mit verschiedenen Farbschemata (Light/Dark Mode)
