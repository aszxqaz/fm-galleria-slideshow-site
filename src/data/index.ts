import paintingsData from "./data.json";
import slugFn from "slug";

let paintings = paintingsData
  .map((painting, index) => ({
    ...painting,
    slug: slugFn(painting.name),
    index,
  }))
  .map((painting, index, arr) => ({
    ...painting,
    prev: index == 0 ? null : arr[index - 1],
    next: index == arr.length - 1 ? null : arr[index + 1],
  }));

// const paintings = slugified.map((painting) => ({
//   ...painting,
//   prev: painting.index == 0 ? undefined : slugified[painting.index - 1].slug,
//   next:
//     painting.index == slugified.length - 1
//       ? undefined
//       : slugified[painting.index + 1].slug,
// }));

export default paintings;

export type Painting = (typeof paintings)[number];
