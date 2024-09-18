function status(request, response) {
  response.status(200).json({ status: "test ok" });
}

export default status;
