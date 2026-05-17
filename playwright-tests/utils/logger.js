class Logger {
  static info(message, data = '') {
    console.log(`[INFO] ${message}`, data);
  }

  static success(message, data = '') {
    console.log(`\x1b[32m[SUCCESS]\x1b[0m ${message}`, data);
  }

  static error(message, data = '') {
    console.error(`\x1b[31m[ERROR]\x1b[0m ${message}`, data);
  }
  
  static warn(message, data = '') {
    console.warn(`\x1b[33m[WARN]\x1b[0m ${message}`, data);
  }

  static header(title) {
    console.log('\n================================================');
    console.log(` ${title.toUpperCase()} `);
    console.log('================================================\n');
  }

  static divider() {
    console.log('----------------------------------------');
  }
}

module.exports = Logger;
