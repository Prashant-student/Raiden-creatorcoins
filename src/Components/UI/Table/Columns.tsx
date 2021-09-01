export const COLUMNS = [
  {
    Header: "Rank",
    Footer: "Rank",
    accessor: "rank",
  },
  {
    Header: "Coin",
    Footer: "Coin",
    accessor: "coin",
  },
  {
    Header: "Creator",
    Footer: "Creator",
    accessor: "creator",
  },
  {
    Header: "Supporters",
    Footer: "Supporters",
    accessor: "supporters",
  },
  {
    Header: "Total Coins",
    Footer: "Total Coins",
    accessor: "totalCoins",
  },
  {
    Header: "Price",
    Footer: "Price",
    accessor: "price",
  },
];

export const GROUPED_COLUMNS = [
  {
    Header: "Rank",
    Footer: "Rank",
    accessor: "rank",
  },
  {
    Header: "Creator",
    Footer: "Creator",
    columns: [
      {
        Header: "Coin",
        Footer: "Coin",
        accessor: "coin",
      },
      {
        Header: "Creator",
        Footer: "Creator",
        accessor: "creator",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Supporters",
        Footer: "Supporters",
        accessor: "supporters",
      },
      {
        Header: "Total Coins",
        Footer: "Total Coins",
        accessor: "totalCoins",
      },
      {
        Header: "Price",
        Footer: "Price",
        accessor: "price",
      },
    ],
  },
];
