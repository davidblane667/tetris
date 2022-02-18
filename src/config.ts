enum FIGURES {
  O = "O",
  I = "I",
  S = "S",
  Z = "Z",
  L = "L",
  J = "J",
  T = "T",
}
interface Config {
  rowCount: number;
  columnCount: number;
  colors: string[];
  figures: Array<{ name: string; data: any }>;
}
const config: Config = {
  rowCount: 20,
  columnCount: 10,
  colors: ["green", "yellow", "red", "blue", "purple"],
  figures: [
    {
      name: FIGURES.O,
      data: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 0],
      ],
    },
    {
      name: FIGURES.I,
      data: [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
      ],
    },
    {
      name: FIGURES.S,
      data: [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0],
      ],
    },
    {
      name: FIGURES.Z,
      data: [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
      ],
    },
    {
      name: FIGURES.L,
      data: [
        [1, 0, 0],
        [1, 0, 0],
        [1, 1, 0],
      ],
    },
    {
      name: FIGURES.J,
      data: [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0],
      ],
    },
    {
      name: FIGURES.T,
      data: [
        [1, 1, 1],
        [0, 1, 0],
        [0, 0, 0],
      ],
    },
  ],
};
export default config;
