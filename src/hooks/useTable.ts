import React from "react";

interface TableProps {
  source: string
}

export const useTable = ({ source }: TableProps) => {
  const [dataSource, setDataSource] = React.useState([]);
  
  React.useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://jsonplaceholder.typicode.com/${source}?_page=1&_limit=5`);
      const data = await res.json();
      setDataSource(data);
    }
    fetchData();
  }, [])

  
  return {
    dataSource
  }
}