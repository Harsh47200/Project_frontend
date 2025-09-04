export const clsx = (...classes: (string | false | null | undefined)[]) => {
  return classes.filter((cls): cls is string => !!cls).join(" ");
};
export const isNotBlank = (val: any): val is string =>
  typeof val === "string" && val.trim().length > 0;

export const isBlank = (val: any) => !isNotBlank(val);

export const TEXT_INPUT_REGEX =
  /^(?!.*String\.fromCharCode.*|.*eval\(.*\).*|.*prompt\(.*\).*)(\w[–-\w.,'’"()&\s:%/]{0,50})$/i;

export const TEXTAREA_REGEX =
  /^(?!.*String\.fromCharCode.*|.*eval\(.*\).*|.*prompt\(.*\).*)(\w[–-\w.,'’"()&\s:%/]{0,1000})$/i;

export const readableDateFrom = (timestamp: Date | number | string) =>
  timestamp
    ? new Date(timestamp).toLocaleDateString("en-IN", {
        timeZone: "Asia/Kolkata",
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
    : "";
export const timestampToDateInput = (timestamp: Date | number | string) =>
  timestamp ? new Date(timestamp).toLocaleDateString("en-CA") : "";

const dateTimeFormatter = new Intl.DateTimeFormat("en-CA", {
  dateStyle: "long",
  // timeStyle: "short",
  hour12: false,
});
export const readableDateTimeFrom = (timestamp: Date | number | string) =>
  timestamp ? dateTimeFormatter.format(new Date(timestamp)) : "";

export const encodeFilePath = async (filePath: string | null | undefined) => {
  if (
    !filePath ||
    typeof filePath !== "string" ||
    filePath.trim().length === 0
  ) {
    return "";
  }
};
