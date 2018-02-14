import React from 'react';

const tdRight = props => {
  return <td>0x{Number(props.idx).toString(16)}</td>;
};

export default props => {
  const data1 = [...Array(props.size + 1)].map((_, idx) => (
    <tr>
      <td>{idx}</td>
      <tdRight idx={idx} />
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>10進数</th>
          <th>16進数</th>
        </tr>
      </thead>
      <tbody>{data1}</tbody>
    </table>
  );
};
