/**
 * Install a process-local build clock for reproducible DOCX metadata.
 *
 * The `docx` library and its ZIP writer call `new Date()` internally without
 * accepting a timestamp option. Each builder runs in its own short-lived Node
 * process, so fixing that process clock is bounded to document generation. The
 * default epoch is the repository's `2026-06-25` evidence snapshot; release
 * tooling may supply the standard `SOURCE_DATE_EPOCH` value explicitly.
 */
function installReproducibleClock() {
  const NativeDate = Date;
  const sourceEpoch = process.env.SOURCE_DATE_EPOCH ?? "1782345600";
  const epochMilliseconds = Number(sourceEpoch) * 1000;

  if (!Number.isSafeInteger(epochMilliseconds)) {
    throw new Error("SOURCE_DATE_EPOCH must be an integer Unix timestamp");
  }

  global.Date = class ReproducibleDate extends NativeDate {
    constructor(...args) {
      super(...(args.length === 0 ? [epochMilliseconds] : args));
    }

    static now() {
      return epochMilliseconds;
    }
  };
}

module.exports = { installReproducibleClock };
