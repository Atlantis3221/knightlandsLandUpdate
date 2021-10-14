import React, { memo } from "react";
import Text from "components/common/Text/Text";
import styles from './styles.module.css'
import { HeaderLink } from "common/constants/HeaderLinks";

const data = [
  {src: '/partners/partner1.svg'},
  {src: '/partners/partner2.svg'},
];

const Partners = () => {
  return (
    <div className="flex flex-col justify-start w-full px-12 py-10" id={HeaderLink.PARTNERS}>
      <Text type="h2" className="w-full justify-center text-center mb-10">Partners</Text>
      <div className="flex w-full justify-center flex-col items-center lg:justify-start md:flex-row">
        {data.map((item, i) => (
          <div key={i} className={styles.root + " flex flex-col px-4 py-4 w-80 md:w-64 md:w-72 mb-10" + (i === 0 ? ' md:mr-12' : '')}>
            <img src={item.src} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(Partners);