export const sort = ({sortOption, list}) => {
  switch (sortOption) {
    case "Popularity Ascending":
      list = list.sort((a, b) =>
        a.popularity > b.popularity ? 1 : -1
      );
      break;

    case "Rating Descending":
      list = list.sort((a, b) =>
        a.vote_average < b.vote_average ? 1 : -1
      );
      break;

    case "Rating Ascending":
      list = list.sort((a, b) =>
        a.vote_average > b.vote_average ? 1 : -1
      );
      break;

    case "Release Date Descending":
      list = list.sort((a, b) =>
        new Date(a.release_date) < new Date(b.release_date) ? 1 : -1
      );
      break;

    case "Release Date Ascending":
      list = list.sort((a, b) =>
        new Date(a.release_date) > new Date(b.release_date) ? 1 : -1
      );
      
      break;

    case "Title (A-Z)":
      list = list.sort((a, b) =>
        a.title > b.title ? 1 : -1
      );
      break;

    case "Title (Z-A)":
      list = list.sort((a, b) =>
        a.title < b.title ? 1 : -1
      );
      break;

    default:
      list = list.sort((a, b) =>
        a.popularity < b.popularity ? 1 : -1
      );
      break;
  }
}
