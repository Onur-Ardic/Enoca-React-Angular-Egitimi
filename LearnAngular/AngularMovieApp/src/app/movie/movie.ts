export class Movie {
  id: string;
  movieName: string;
  desc: string;
  imageUrl: string;

  constructor(id: string, movieName: string, desc: string, imageUrl: string) {
    this.id = id;
    this.movieName = movieName;
    this.desc = desc;
    this.imageUrl = imageUrl;
  }
}
