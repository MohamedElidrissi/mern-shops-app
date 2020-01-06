/**
 * A post-save Mongoose hook for handling errors.
 *
 * @param {string} modelName The name of the model on which this hook is attached to.
 */
function postSaveErrorHandler(modelName, err, doc, next) {
  if (!err || err.name !== 'MongoError') return;

  let status;
  let message;

  switch (err.code) {
    // Duplicate key error
    case 11000:
      status = 400;
      message = `This ${modelName} already exists`;
      break;
    default:
      status = 500;
      message = 'Internal Server Error';
  }

  next({ status, message });
}

module.exports = postSaveErrorHandler;
