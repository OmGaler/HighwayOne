export const FONT_FAMILY = "IsraeliRoad";

import { NIMBUS_BOLD_DATA_URL } from "./nimbus-bold-data.mjs";

export const FONT_VARIANTS = {
  
  nimbusBold: {
    label: "Nimbus Sans Bold",
    fileName: "NimbusSans-Bold.ttf",
    format: "truetype",
    weight: 700,
    dataUrl: NIMBUS_BOLD_DATA_URL,
    strokeWidth: 0.38
  }
};

export const DEFAULT_FONT_KEY = "nimbusBold";

const FONT_TEXT_SPECS = {
  default: {
    1: {
      fontSize: "73.1",
      x: "90.88438",
      y: "89.8",
      textLength: "25.5",
      lengthAdjust: "spacingAndGlyphs"
    },
    2: {
      fontSize: "73.1",
      x: "90.88438",
      y: "89.8",
      textLength: "56.2",
      lengthAdjust: "spacingAndGlyphs"
    },
    3: {
      fontSize: "74.1",
      x: "90.88438",
      y: "90.7",
      textLength: "83.4",
      lengthAdjust: "spacingAndGlyphs"
    },
    4: {
      fontSize: "66.2",
      x: "90.88438",
      y: "90.2",
      textLength: "109.4",
      lengthAdjust: "spacingAndGlyphs"
    }
  },
  nimbusBold: {
    1: {
      fontSize: "70.8",
      x: "90.88438",
      y: "88.9",
      textLength: "31.6",
      lengthAdjust: "spacingAndGlyphs",
      transform: "translate(90.88438 88.9) scale(1.08 1) translate(-90.88438 -88.9)"
    },
    2: {
      fontSize: "70.8",
      x: "90.88438",
      y: "88.9",
      textLength: "67.2",
      lengthAdjust: "spacingAndGlyphs",
      transform: "translate(90.88438 88.9) scale(1.12 1) translate(-90.88438 -88.9)"
    },
    3: {
      fontSize: "72.2",
      x: "90.88438",
      y: "89.8",
      textLength: "96.4",
      lengthAdjust: "spacingAndGlyphs",
      transform: "translate(90.88438 89.8) scale(1.08 1) translate(-90.88438 -89.8)"
    },
    4: {
      fontSize: "63.6",
      x: "90.88438",
      y: "89.3",
      textLength: "123.6",
      lengthAdjust: "spacingAndGlyphs",
      transform: "translate(90.88438 89.3) scale(1.06 1) translate(-90.88438 -89.3)"
    }
  },
  nimbusNarrowRegular: {
    1: {
      fontSize: "72.2",
      x: "90.88438",
      y: "89.3",
      textLength: "27.1",
      lengthAdjust: "spacingAndGlyphs"
    },
    2: {
      fontSize: "72.2",
      x: "90.88438",
      y: "89.3",
      textLength: "58.1",
      lengthAdjust: "spacingAndGlyphs"
    },
    3: {
      fontSize: "73.2",
      x: "90.88438",
      y: "90.1",
      textLength: "85.7",
      lengthAdjust: "spacingAndGlyphs"
    },
    4: {
      fontSize: "64.5",
      x: "90.88438",
      y: "89.6",
      textLength: "111.6",
      lengthAdjust: "spacingAndGlyphs"
    }
  },
  nimbusNarrowBold: {
    1: {
      fontSize: "70.2",
      x: "90.88438",
      y: "88.7",
      textLength: "28.6",
      lengthAdjust: "spacingAndGlyphs"
    },
    2: {
      fontSize: "70.2",
      x: "90.88438",
      y: "88.7",
      textLength: "60.4",
      lengthAdjust: "spacingAndGlyphs"
    },
    3: {
      fontSize: "71.6",
      x: "90.88438",
      y: "89.6",
      textLength: "88.4",
      lengthAdjust: "spacingAndGlyphs"
    },
    4: {
      fontSize: "63.1",
      x: "90.88438",
      y: "89.0",
      textLength: "114.8",
      lengthAdjust: "spacingAndGlyphs"
    }
  }
};

export const SIGN_VIEW_BOX = {
  width: 181.76876,
  height: 132.55625
};

export const OUTPUT_SIZE = {
  width: 687,
  height: 501
};

export const SHIELD_PATH = "m 23.944793,8.0697922 c -8.79475,0 -15.8750008,7.0802508 -15.8750008,15.8750008 v 84.666667 c 0,8.79475 7.0802508,15.875 15.8750008,15.875 H 157.82396 c 8.79475,0 15.875,-7.08025 15.875,-15.875 V 23.944793 c 0,-8.79475 -7.08025,-15.8750008 -15.875,-15.8750008 z m 66.939585,9.7895838 64.822922,7.9375 7.9375,40.481251 -7.9375,40.481253 -64.822922,7.9375 -65.352085,-7.9375 -7.408334,-40.481253 7.408334,-40.481251 z";

export const ROAD_TYPES = {
  national: {
    label: "כביש מהיר",
    colour: "#0000fe",
    minDigits: 1,
    maxDigits: 3,
    sample: "6"
  },
  intercity: {
    label: "כביש ארצי",
    colour: "#ff0000",
    minDigits: 1,
    maxDigits: 2,
    sample: "40"
  },
  regional: {
    label: "כביש אזורי",
    colour: "#007e00",
    minDigits: 3,
    maxDigits: 3,
    sample: "443"
  },
  local: {
    label: "כביש מקומי",
    colour: "#000000",
    minDigits: 4,
    maxDigits: 4,
    sample: "4503"
  }
};

const TEXT_SPECS = {
  1: {
    fontSize: "73.1",
    x: "90.88438",
    y: "89.8",
    textLength: "25.5",
    lengthAdjust: "spacingAndGlyphs"
  },
  2: {
    fontSize: "73.1",
    x: "90.88438",
    y: "89.8",
    textLength: "56.2",
    lengthAdjust: "spacingAndGlyphs"
  },
  3: {
    fontSize: "74.1",
    x: "90.88438",
    y: "90.7",
    textLength: "83.4",
    lengthAdjust: "spacingAndGlyphs"
  },
  4: {
    fontSize: "66.2",
    x: "90.88438",
    y: "90.2",
    textLength: "109.4",
    lengthAdjust: "spacingAndGlyphs"
  }
};

export function sanitiseRoadNumber(value = "") {
  return value.replace(/\D+/g, "").slice(0, 4);
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function getRuleText(config) {
  if (config.minDigits === 1 && config.maxDigits === 2) {
    return `${config.label} ממוספרים במספר חד־ספרתי או דו־ספרתי.`;
  }

  if (config.minDigits === 1 && config.maxDigits === 3) {
    return `${config.label} ממוספרים במספר חד־ספרתי, דו־ספרתי, או תלת־ספרתי.`;
  }

  if (config.minDigits === 3 && config.maxDigits === 3) {
    return `${config.label} ממוספרים במספר תלת־ספרתי.`;
  }

  if (config.minDigits === 4 && config.maxDigits === 4) {
    return `${config.label} ממוספרים במספר בן ארבע ספרות.`;
  }

  if (config.minDigits === config.maxDigits) {
    return `${config.label} ממוספרים במספר בן ${config.minDigits} ספרות.`;
  }

  return `${config.label} ממוספרים במספר בן ${config.minDigits} עד ${config.maxDigits} ספרות.`;
}

export function validateRoadNumber(typeKey, roadNumber) {
  const config = ROAD_TYPES[typeKey];

  if (!config) {
    throw new Error(`Unknown road type: ${typeKey}`);
  }

  if (!roadNumber) {
    return { valid: false, message: "יש להזין מספר כביש כדי ליצור שלט." };
  }

  if (roadNumber.length < config.minDigits || roadNumber.length > config.maxDigits) {
    return { valid: false, message: getRuleText(config) };
  }

  return { valid: true, message: "מוכן להורדה." };
}

function getPreviewNumber(typeKey, roadNumber) {
  return roadNumber || ROAD_TYPES[typeKey].sample;
}

function buildFontFaceCss(fontKey = DEFAULT_FONT_KEY, srcOverride) {
  const variant = FONT_VARIANTS[fontKey];
  const src = srcOverride ?? variant.dataUrl ?? `./${variant.fileName}`;

  return `@font-face {
    font-family: "${FONT_FAMILY}";
    src: url("${src}") format("${variant.format}");
    font-style: normal;
    font-weight: ${variant.weight};
  }`;
}

export function ensureDocumentFont(document, fontKey = DEFAULT_FONT_KEY) {
  if (!document) {
    return;
  }

  let style = document.getElementById("road-font-style");

  if (!style) {
    style = document.createElement("style");
    style.id = "road-font-style";
    document.head.append(style);
  }

  style.textContent = buildFontFaceCss(fontKey);
}

export async function primeDocumentFont(document, fontKey = DEFAULT_FONT_KEY) {
  const variant = FONT_VARIANTS[fontKey];

  ensureDocumentFont(document, fontKey);

  if (!document?.fonts?.load) {
    return;
  }

  try {
    await document.fonts.load(`${variant.weight} 72px "${FONT_FAMILY}"`, "8888");
  } catch {
    // The page can still render from the inline SVG font face if this fails.
  }
}

export async function buildEmbeddedSignSvg(typeKey, roadNumber, options = {}) {
  return buildSignSvg(typeKey, roadNumber, options);
}

export async function primeEmbeddedFont() {
  return;
}

export function getCachedEmbeddedFontDataUrl(fontKey = DEFAULT_FONT_KEY) {
  return FONT_VARIANTS[fontKey]?.dataUrl ?? null;
}

export function buildSignSvg(typeKey, roadNumber, options = {}) {
  const config = ROAD_TYPES[typeKey];
  const fontKey = options.fontKey ?? DEFAULT_FONT_KEY;
  const variant = FONT_VARIANTS[fontKey];

  if (!config) {
    throw new Error(`Unknown road type: ${typeKey}`);
  }

  if (!variant) {
    throw new Error(`Unknown font variant: ${fontKey}`);
  }

  const number = getPreviewNumber(typeKey, roadNumber);
  const textSpec = (FONT_TEXT_SPECS[fontKey] ?? FONT_TEXT_SPECS.default)[number.length];
  const escapedNumber = escapeXml(number);
  const escapedLabel = escapeXml(`${config.label} ${number}`);
  const transformAttribute = textSpec.transform ? ` transform="${textSpec.transform}"` : "";

  return `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 ${SIGN_VIEW_BOX.width} ${SIGN_VIEW_BOX.height}"
      width="${OUTPUT_SIZE.width}"
      height="${OUTPUT_SIZE.height}"
      role="img"
      aria-label="${escapedLabel}"
    >
      <defs>
        <style><![CDATA[
          ${buildFontFaceCss(fontKey, options.fontDataUrl)}

          .marker-number {
            font-family: "${FONT_FAMILY}";
            font-style: normal;
            font-weight: ${variant.weight};
            text-anchor: middle;
            fill: ${config.colour};
            stroke: ${config.colour};
            stroke-width: ${variant.strokeWidth ?? 0};
            stroke-linejoin: round;
            paint-order: stroke fill;
          }
        ]]></style>
      </defs>

      <rect
        x="0.13229166"
        y="0.13229197"
        width="181.50415"
        height="132.29167"
        rx="23.8125"
        ry="23.8125"
        fill="#ffffff"
        stroke="#000000"
        stroke-width="0.26458335"
      />

      <path d="${SHIELD_PATH}" fill="${config.colour}" />
      <text
        class="marker-number"
        xml:space="preserve"
        x="${textSpec.x}"
        y="${textSpec.y}"
        font-size="${textSpec.fontSize}px"
        text-rendering="geometricPrecision"
        lengthAdjust="${textSpec.lengthAdjust}"
        textLength="${textSpec.textLength}"${transformAttribute}
      ><tspan x="${textSpec.x}" y="${textSpec.y}">${escapedNumber}</tspan></text>
    </svg>
  `.trim();
}

export function buildFileName(typeKey, roadNumber) {
  return `highway-1-sign-${typeKey}-${roadNumber}`;
}
