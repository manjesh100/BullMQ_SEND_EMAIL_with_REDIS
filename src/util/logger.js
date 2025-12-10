const { createLogger, format, transports } = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const logFormat = format.combine(
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.errors({ stack: true }),
  format.json()
);

const consoleFormat = format.combine(
  format.colorize(),
  format.printf((info) => {
    return `${info.timestamp} [${info.level}] : ${info.message}`;
  })
);

const logger = createLogger({
  level: "info",
  format: logFormat,

  transports: [
    // ✔ Console logs (colorful)
    new transports.Console({
      format: consoleFormat,
    }),

    // ✔ Application logs (daily rotated)
    new DailyRotateFile({
      filename: "logs/app-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "14d", // keep logs for 14 days
      level: "info",
    }),

    // ✔ Error logs (separate)
    new DailyRotateFile({
      filename: "logs/error-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: true,
      maxSize: "20m",
      maxFiles: "30d",
      level: "error",
    }),
  ],
});

module.exports = logger;
