import { Block, Card, Popup } from "framework7-react";
import React, { forwardRef, useImperativeHandle, useState } from "react";

type Props = {};

const Info = forwardRef((props: Props, ref) => {
  const [openeded, setOpeneded] = useState(false);

  useImperativeHandle(ref, () => ({
    opens: () => opens(),
    closes: () => closes(),
  }));

  const opens = async () => {
    setOpeneded(true);
  };

  const closes = () => {
    setOpeneded(false);
  };

  return (
    <Popup opened={openeded} onPopupClose={closes} backdrop>
      <Card
        raised
        title="Информация"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut officiis voluptatibus sed quae amet! Consequuntur unde porro ipsum necessitatibus et rerum ipsam.
        
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae. Recusandae tempore qui dolorem illo deleniti! Cumque vitae, corporis libero voluptates recusandae pariatur ipsam dolore expedita quis minus similique minima autem, necessitatibus laboriosam et rerum omnis error totam sunt enim non, fugiat ullam quasi. Voluptate quia quis maxime animi veritatis id quos asperiores, aliquam facere praesentium accusantium accusamus! Vel minus, veniam dolore repellat a id deserunt nostrum deleniti accusamus, blanditiis aut maxime dolor obcaecati illo itaque quia! Aspernatur saepe maiores porro voluptatem eligendi. Illum officia omnis quam, sapiente nesciunt enim numquam odio, quisquam voluptate voluptatibus, autem architecto ipsam minus ullam.
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, quae. Recusandae tempore qui dolorem illo deleniti! Cumque vitae, corporis libero voluptates recusandae pariatur ipsam dolore expedita quis minus similique minima autem, necessitatibus laboriosam et rerum omnis error totam sunt enim non, fugiat ullam quasi. Voluptate quia quis maxime animi veritatis id quos asperiores, aliquam facere praesentium accusantium accusamus! Vel minus, veniam dolore repellat a id deserunt nostrum deleniti accusamus, blanditiis aut maxime dolor obcaecati illo itaque quia! Aspernatur saepe maiores porro voluptatem eligendi. Illum officia omnis quam, sapiente nesciunt enim numquam odio, quisquam voluptate voluptatibus, autem architecto ipsam minus ullam."
        footer="+ 7 888 999 33 22"
      />
    </Popup>
  );
});

export default Info;
