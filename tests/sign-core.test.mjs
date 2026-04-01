import test from "node:test";
import assert from "node:assert/strict";

import {
  DEFAULT_FONT_KEY,
  FONT_VARIANTS,
  ROAD_TYPES,
  SHIELD_PATH,
  SIGN_VIEW_BOX,
  buildFileName,
  buildSignSvg,
  sanitiseRoadNumber,
  validateRoadNumber
} from "../sign-core.mjs";

test("sanitiseRoadNumber keeps digits only and caps length at four", () => {
  assert.equal(sanitiseRoadNumber(" 43-1a "), "431");
  assert.equal(sanitiseRoadNumber("12345"), "1234");
});

test("validateRoadNumber enforces the Israeli route digit rules", () => {
  assert.deepEqual(validateRoadNumber("national", "1"), { valid: true, message: "מוכן להורדה." });
  assert.deepEqual(validateRoadNumber("intercity", "123"), {
    valid: false,
    message: "כבישים ארציים ממוספרים במספר חד־ספרתי או דו־ספרתי."
  });
  assert.deepEqual(validateRoadNumber("regional", "29"), {
    valid: false,
    message: "כבישים אזוריים ממוספרים במספר תלת־ספרתי."
  });
  assert.deepEqual(validateRoadNumber("local", "2022"), { valid: true, message: "מוכן להורדה." });
});

test("buildSignSvg includes the official shield geometry, colour and embedded font", () => {
  const svg = buildSignSvg("regional", "293");

  assert.match(svg, new RegExp(`viewBox="0 0 ${SIGN_VIEW_BOX.width} ${SIGN_VIEW_BOX.height}"`));
  assert.ok(svg.includes(SHIELD_PATH));
  assert.ok(svg.includes(`fill="${ROAD_TYPES.regional.colour}"`));
  assert.ok(svg.includes('data:font/truetype;base64,'));
  assert.ok(svg.includes(">293<"));
  assert.ok(svg.includes('aria-label="כביש אזורי 293"'));
});

test("buildSignSvg falls back to the category sample for preview output", () => {
  const svg = buildSignSvg("local", "");

  assert.ok(svg.includes(ROAD_TYPES.local.colour));
  assert.ok(svg.includes('role="img"'));
});

test("buildFileName uses the road type and number", () => {
  assert.equal(buildFileName("national", "431"), "highwayeight-sign-national-431");
});
