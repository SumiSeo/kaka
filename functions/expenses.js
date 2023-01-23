exports.handler = async (event, context) => {
  const guides = [
    {
      name: "sumi",
      age: 28,
    },
    {
      name: "yeji",
      age: 28,
    },
  ];
  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(guides),
    };
  }
  return {
    statusCode: 401,
    body: JSON.stringify({ msg: "Sorry, you must be logged in to see this" }),
  };
};
