const mongoose = require("mongoose");

// PostSchema quais colunas estão na tabela
const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      // default é o valor padrão ou inicial
      default: 0
    }
  },
  {
    // timestamps criará os campos createdAt e updatedAt
    timestamps: true
  }
);

module.exports = mongoose.model("Post", PostSchema);
