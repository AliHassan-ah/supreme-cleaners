import React from "react";

export default function PricingTable(props) {
  return (
    <>
      <div className="flex flex-col">
        <table>
          <thead>
            <tr className="">
              <th className="text-start px-5 py-2 text-[#444444] text-lg h">
                {props.title}
              </th>
              <th className="text-end px-5 py-2 text-[#999999] text-xs p">
                {props.title2}
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#F9F9F9]">
            {props.data.map((row, index) => (
              <tr key={index}>
                <td className="text-start px-5 py-2 text-sm p text-content">
                  {row.name}
                </td>
                <td className="text-end px-5 py-2 text-sm p">R{row.from}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="px-5 py-2 text-sm p  bg-[#F9F9F9] text-content">
          {props.add}
        </p>
      </div>
    </>
  );
}
