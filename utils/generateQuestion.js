module.exports.generateQuestion = (type, name, message, choices = null) => {
  return choices
    ? {
        type,
        name,
        message,
        choices,
      }
    : {
        type,
        name,
        message,
      };
};
