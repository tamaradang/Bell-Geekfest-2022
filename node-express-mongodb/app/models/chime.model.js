module.exports = mongoose => {
  const Chime = mongoose.model(
    "chime",
    mongoose.Schema(
      {
        title: String,
        description: String,
		recipient: String,
        author: String
      },
      { timestamps: true }
    )
  );

  return Chime;
};