const runServer = (app) => {
  const PORT = process.env.PORT || 8800;
  const server = app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} on PORT ${PORT}`)
  );
  // handle unhandled promise rejections
  // process.on("unhandledRejection", (error, promise) => {
  //   console.log(`Error ${error.message}`);
  //   server.close(() => process.exit(1));
  // });
};

export default runServer;
