import React from 'react';

const Table = ({ columns, rows, widths = [] }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((col, i) => (
              <th key={i} style={{ width: widths[i] || 'auto' }}>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
