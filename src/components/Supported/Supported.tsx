import React from "react";
import commonStyles from "styles/common.module.css";
import Text from "components/common/Text/Text";

const Supported = () => {
  return (
    <div className="">
      <div className={commonStyles.board + " mt-36 px-6 md:px-12 pb-12 sm:pb-12 pt-2"} style={{marginBottom: 0}}>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="sm:col-span-2 self-center text-center sm:text-left mt-12 md:mr-8 mb-10 md:mb-4">
            <Text type="h2">You dont need a wallet to play, unless you want to sell FLESH on DEX</Text>
          </div>
          <div className="flex justify-center col-span-1 xl:row-span-2 xl:-mt-24">
            <img src="/gold.png" className="w-80 sm:w-56 md:w-80"/>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <Text type="h4" color="#8A978C">If you are new to crypto, register your wallet. It’s easy and takes 2 minutes</Text>
          </div>
          <Text type="h3" color="#8A978C" className="col-span-1 sm:col-span-2 mt-6">Supported Blockchains</Text>
        </div>
      </div>
      <div className="flex justify-center sm:justify-start sm:pl-12 -mt-8">
        <img className="w-40 h-44 mr-4" src="/ethereum.svg" />
        <img className="w-40 h-44" src="/polygon.svg"/>
      </div>
    </div>
  )
}

export default Supported;