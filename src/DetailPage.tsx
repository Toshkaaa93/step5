import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Badge,
  Block,
  Button,
  f7
} from "framework7-react";

const DetailPage = (props: any) => {

  const openInfiniteProgress = () => {
    f7.dialog.progress();
    setTimeout(() => {
      f7.dialog.close();
    }, 3000);
  };

  const getColor = () => {
    switch (props.status) {
      case "Новый":
        return "blue";
      case "Завершен":
        return "green";
        case "Отменен":
        return "yellow";
        case "Создан":
        return "purple";
      default:
        return "blue";
        break;
    }
  };
  return (
    <Page>
      <Navbar>
        <NavLeft backLink />
        <NavTitle>{props.order}</NavTitle>
        <NavRight>
        <p style={{marginRight:'20px'}}>Статус заказа</p>
          <Badge color={getColor()}>{props.status}</Badge>
        </NavRight>
      </Navbar>
      <div className="wrapper">
      <Block>
        {props.about}
      </Block>
      <div style={{display:'flex'}}><Button fill style={{marginRight:'10px'}} onClick={openInfiniteProgress}>Удалить</Button>
      <Button back tonal>Назад</Button> </div>
      </div>
    </Page>
  );
};

export default DetailPage;

// const MainPage = (props: any) => {
//   const getColor = () => {
//     switch (props.status) {
//       case "Новый":
//         return "blue";
//       case "Завершен":
//         return "green";

//       default:
//         return "blue";
//         break;
//     }
//   };
//   return (
//     <Page>
//       <Navbar>
//         <NavLeft backLink />
//         <NavTitle>{props.order}</NavTitle>
//         <NavRight>
//           <Badge color={getColor()}>{props.status}</Badge>
//         </NavRight>
//       </Navbar>
//     </Page>
//   );
// };