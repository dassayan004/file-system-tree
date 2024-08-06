export type NodeTree = {
  name: string;
  nodes?: NodeTree[];
};

export const nodes: NodeTree[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Movies",
        nodes: [
          {
            name: "Action",
            nodes: [
              {
                name: "2000s",
                nodes: [
                  { name: "XMen.mp4" },
                  { name: "The-Dark-Knight.mp4" },
                  { name: "Harry Potter 1.mp4" },
                ],
              },
              {
                name: "2010s",
                nodes: [{ name: "IronMan.mp4" }, { name: "Inception.mp4" }],
              },
            ],
          },
          {
            name: "Comedy",
            nodes: [],
          },
        ],
      },
      {
        name: "Music",
        nodes: [
          { name: "Rock", nodes: [] },
          { name: "Classical", nodes: [] },
        ],
      },
      { name: "Pictures", nodes: [] },
      {
        name: "Documents",
        nodes: [],
      },
      { name: "passwords.txt" },
      { name: "input.sh" },
    ],
  },
];
