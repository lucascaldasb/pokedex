export default function getTypeColor(type) {
  switch (type) {
    case "normal":
      return "#AAA67F";
      break;
    case "rock":
      return "#B69E31";
      break;
    case "ghost":
      return "#70559B";
      break;
    case "fighting":
      return "#C12239";
      break;
    case "steel":
      return "#B7B9D0";
      break;
    case "flying":
      return "#A891EC";
      break;
    case "water":
      return "#6493EB";
      break;
    case "poison":
      return "#A43E9E";
      break;
    case "grass":
      return "#74CB48";
      break;
    case "ground":
      return "#DFC16B";
      break;
    case "psychic":
      return "#FB5584";
      break;
    case "bug":
      return "#A7B723";
      break;
    case "ice":
      return "#9AD6DF";
      break;
    case "fire":
      return "#F57D31";
      break;
    case "dark":
      return "#75574C";
      break;
    case "eletric":
      return "#F9CF30";
      break;
    case "fairy":
      return "#E69EAC";
      break;
    case "dragon":
      return "#7037FF";
      break;
    default:
      return "black";
  }
}
