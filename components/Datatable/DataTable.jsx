import React from "react";
import axios from "axios";


function DataTable({ data }) {
  const columns = data[0] && Object.keys(data[0]);
  return (
    <div>
      <thead>
        <tr>{data[0] && columns.map((heading) => <th>{heading}</th>)}</tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            {columns.map((column) => (
              <td>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default DataTable;

async function getstaticprops() {
const response = await axios("https://jsonplaceholder.typicode.com/users")
const data =  response
console.log(data);
return {
  props: {
    data,
  },
}
}
