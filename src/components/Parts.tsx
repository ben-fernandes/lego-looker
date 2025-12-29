import { useState } from 'react';

interface Part {
  id: string;
  image: string;
  color: string;
  colorHex: string;
}

export default function Parts() {
  const [parts, setParts] = useState<Part[]>([
    {
      id: '1',
      image: '',
      color: 'Red',
      colorHex: '#ef4444',
    },
    {
      id: '2',
      image: '',
      color: 'Yellow',
      colorHex: '#eab308',
    },
  ]);

  return (
    <>
      <h2>Parts</h2>
      
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Colour</th>
          </tr>
        </thead>
        <tbody>
          {parts.map((part) => (
            <tr key={part.id}>
              <td>{part.color}</td>
              <td>
                <div></div>
              </td>
              <td>
                <div style={{ backgroundColor: part.colorHex }}></div>
                <span>{part.color}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button>Add part</button>
    </>
  );
}
