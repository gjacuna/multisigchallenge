import React from "react";
import { Modal } from "antd";
import Address from "./Address";
import Balance from "./Balance";
const TransactionDetailsModal = function ({visible, handleOk, mainnetProvider, addressTo, value, price, txnInfo}) {
  return (
    <Modal
      title="Transaction Details"
      visible={visible}
      onCancel={handleOk}
      destroyOnClose
      onOk={handleOk}
      footer={null}
      closable
      maskClosable
    >
      {(
        <div>
          <p>
            <b>Event Name :</b> {txnInfo !== "" ? txnInfo.functionFragment.name : "Send ETH"}
          </p>
          <p>
            {txnInfo ? <><b>Function Signature :</b> {txnInfo.signature}</> : ""}
          </p>
          <h4>Arguments :&nbsp;</h4>
          {txnInfo ? txnInfo.functionFragment.inputs.map((element, index) => {
            if (element.type === "address") {
              return (
                <div key={element.name} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}>
                  <b>{element.name} :&nbsp;</b>
                  <Address fontSize={16} address={txnInfo.args[index]} ensProvider={mainnetProvider} />
                </div>
              );
            }
            if (element.type === "uint256") {
              return (
                <p key={element.name}>
                  {element.name === "value" ? <><b>{element.name} : </b> <Balance fontSize={16} balance={txnInfo.args[index]} dollarMultiplier={price} /> </> : <><b>{element.name} : </b> {txnInfo.args[index] && txnInfo.args[index].toNumber()}</>}
                </p>
              );
            }
          })
          :
          <>
            <div key="Address" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "left" }}>
              <b>Address To :&nbsp;</b>
              <Address fontSize={16} address={addressTo} ensProvider={mainnetProvider} />
            </div>
            <p key="Amount">
              <Balance fontSize={16} balance={value._isBigNumber ? value: (value*10**18).toString()} dollarMultiplier={price} />
            </p>
          </>
          }
          <p>
            {txnInfo ? <><b>SigHash : &nbsp;</b> {txnInfo.sighash}</> : ""}
          </p>
        </div>
      )}
    </Modal>
  );
};

export default TransactionDetailsModal;