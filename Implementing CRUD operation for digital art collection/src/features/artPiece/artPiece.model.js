// Please don't change the pre-written code
// Import the necessary modules here

export default class ArtPiece {
  constructor(id, title, artist, year, imageUrl) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.year = year;
    this.imageUrl = imageUrl;
  }

  static db = [];

  static create({ title, artist, year, imageUrl }) {
    const artPiece = new ArtPiece(
      ArtPiece.db.length + 1,
      title,
      artist,
      year,
      imageUrl
    );
    ArtPiece.db.push(artPiece);
    return artPiece;
  }

  static findAll(query) {
    // Write your code here to retrieve all art pieces
    if (Object.keys(query).length === 0) {
      return ArtPiece.db;
    }
  }

  static findOne(id) {
    // Write your code here to retrieve a specific art piece by its id
    return ArtPiece.db.find((artPiece) => artPiece.id === parseInt(id));
  }

  static update(id, data) {
    // Write your code here to update the details of a specific art piece
    const artPiece = ArtPiece.findOne(id);

    if (artPiece) {
      // Update the art piece with the provided data
      artPiece.title = data.title || artPiece.title;
      artPiece.artist = data.artist || artPiece.artist;
      artPiece.year = data.year || artPiece.year;
      artPiece.imageUrl = data.imageUrl || artPiece.imageUrl;

      return artPiece;
    }

    return null;
  }

  static delete(id) {
    // Write your code here to delete a specific art piece
    const index = ArtPiece.db.findIndex(
      (artPiece) => artPiece.id === parseInt(id)
    );

    if (index !== -1) {
      const deletedArtPiece = ArtPiece.db.splice(index, 1)[0];
      return deletedArtPiece;
    }

    return null;
  }
}
