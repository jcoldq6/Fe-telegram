import { Content } from "antd/lib/layout/layout";
import React from "react";
function Content() {
  const data = [
    { No: "1", API_HASH: "19", API_ID: "Male" },
    { No: "2", API_HASH: "19", API_ID: "Female" },
    { No: "3", API_HASH: "25", API_ID: "Male" },
  ];
  return (
    <div className="content">
      <table>
        <tr>
          <th>No.</th>
          <th>API HASH</th>
          <th>API ID</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
export default Content;