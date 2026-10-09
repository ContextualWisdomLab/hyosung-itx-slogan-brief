/**
 * Build-governance contract for the committed Word deliverables.
 *
 * The test intentionally uses only Node.js standard-library modules so it can
 * diagnose dependency/bootstrap drift before installing project packages.
 */
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const readJson = (path) => JSON.parse(readFileSync(path, "utf8"));

test("the document builder uses one immutable docx dependency", () => {
  const manifest = readJson("package.json");
  const lockfile = readJson("package-lock.json");

  assert.equal(manifest.private, true);
  assert.equal(manifest.dependencies?.docx, "9.9.0");
  assert.equal(lockfile.packages?.[""]?.dependencies?.docx, "9.9.0");
  assert.equal(lockfile.packages?.["node_modules/docx"]?.version, "9.9.0");
});

test("PR validation installs the lockfile and checks the exact head", () => {
  const workflow = readFileSync(".github/workflows/validation.yml", "utf8");

  assert.match(workflow, /npm ci\b/);
  assert.doesNotMatch(workflow, /npm install --no-save/);
  assert.match(workflow, /github\.event\.pull_request\.head\.sha/);
  assert.match(workflow, /git rev-parse HEAD/);
});
