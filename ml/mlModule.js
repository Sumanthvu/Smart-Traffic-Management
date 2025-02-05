const { PythonShell } = require("python-shell");

const getTrafficDataFromML = () => {
  return new Promise((resolve, reject) => {
    PythonShell.run("./MlModule/Traffic.py", null, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(results[0]));
      }
    });
  });
};

module.exports = { getTrafficDataFromML };
