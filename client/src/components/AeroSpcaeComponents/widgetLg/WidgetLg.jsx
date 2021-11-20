import "./widgetLg.css";
import React, { useState } from "react";


export default function WidgetLg() {
  /*
  const [parts] = useState();
  
  const queryElastic = async (amount:number) => {
    {
      const rawResponse = await fetch('api/test_data', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({size: amount})
      });
      const content = await rawResponse.json();
      setRows(content.map((searchData:any)=>searchData._source))
    };
  };
*/
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Manufactuer</th>
          <th className="widgetLgTh">Product Name</th>
          <th className="widgetLgTh">Date Ordered</th>
          <th className="widgetLgTh">Date Resived</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.mhi.com/themes/custom/mhi/logo_en.svg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">MHI</span>
          </td>
          <td className="widgetLgDate">747 inboard flaps</td>
          <td className="widgetLgDate">1 Oct 2021</td>
          <td className="widgetLgDate">10 Oct 2021</td>
          <td className="widgetLgAmount">$50,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Recieved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.mhi.com/themes/custom/mhi/logo_en.svg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">MHI</span>
          </td>
          <td className="widgetLgDate">747 inboard flaps</td>
          <td className="widgetLgDate">10 Oct 2021</td>
          <td className="widgetLgDate">23 Oct 2021</td>
          <td className="widgetLgAmount">$50,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Shipped" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://www.mhi.com/themes/custom/mhi/logo_en.svg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">MHI</span>
          </td>
          <td className="widgetLgDate">747 inboard flaps</td>
          <td className="widgetLgDate">1 Oct 2021</td>
          <td className="widgetLgDate">N/A</td>
          <td className="widgetLgAmount">$50,000.00</td>
          <td className="widgetLgStatus">
            <Button type="Delayed" />
          </td>
        </tr>
      </table>
    </div>
  );
}
