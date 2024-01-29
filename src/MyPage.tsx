import React, { useRef } from "react";
import {
  Page,
  f7,
  List,
  Button,
  ListItem,
  Navbar,
  NavTitle,
  Toolbar,
  Block,
} from "framework7-react";
import Modal from "./Modal";
import Info from "./Info";

const MyPage = () => {
  const deviceInfoRef = useRef<any>(null)
  const infoRef = useRef<any>(null)
  // const onNextPage = () => {
  //     f7.view.main.router.navigate('/main')
  // }

  const onNextPage = (params: { order: string; status: string; about:string}) => {
    f7.view.main.router.navigate("/main", { props: { ...params } });
  };

  let firstOrdetAbout: string =
    "Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании направлений прогрессивного развития. Равным образом постоянный количественный рост и сфера нашей активности требуют определения и уточнения новых предложений. Товарищи! укрепление и развитие структуры обеспечивает широкому кругу (специалистов) участие в формировании существенных финансовых и административных условий.";
  let secondOrderAbout: string =
    "Значимость этих проблем настолько очевидна, что начало повседневной работы по формированию позиции играет важную роль в формировании дальнейших направлений развития. Задача организации, в особенности же реализация намеченных плановых заданий позволяет оценить значение существенных финансовых и административных условий.";
  let thirdOrderAbout: string =
    "Товарищи! новая модель организационной деятельности требуют от нас анализа новых предложений. Таким образом постоянное информационно-пропагандистское обеспечение нашей деятельности играет важную роль в формировании соответствующий условий активизации. Повседневная практика показывает, что сложившаяся структура организации требуют определения и уточнения модели развития.";
  let fourthOrderAbout: string =
    "Задача организации, в особенности же рамки и место обучения кадров требуют определения и уточнения существенных финансовых и административных условий. Не следует, однако забывать, что дальнейшее развитие различных форм деятельности в значительной степени обуславливает создание направлений прогрессивного развития.";
  
    return (
      <Page>
        <Navbar>
          <NavTitle>Список заказов</NavTitle></Navbar>
        <List>
          <ListItem
            onClick={() =>
              onNextPage({
                order: "Заказ №123",
                status: "Новый",
                about: `${firstOrdetAbout}`,
              })
            }
            link
            title="Заказ №123"
            after="Новый"
          />
          <ListItem
            onClick={() =>
              onNextPage({
                order: "Заказ №124",
                status: "Завершен",
                about: `${secondOrderAbout}`,
              })
            }
            link
            title="Заказ №124"
            after="Завершен"
          />
          <ListItem
            onClick={() =>
              onNextPage({
                order: "Заказ №125",
                status: "Отменен",
                about: `${thirdOrderAbout}`,
              })
            }
            link
            title="Заказ №125"
            after="Отменен"
          />
          <ListItem
            onClick={() =>
              onNextPage({
                order: "Заказ №126",
                status: "Создан",
                about: `${fourthOrderAbout}`,
              })
            }
            link
            title="Заказ №126"
            after="Создан"
          />
        </List>
        <Toolbar bottom tabbar>
          <Block style={{display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
          <Button onClick={()=>deviceInfoRef.current.open()} raised outline>
            Информация об устройстве
          </Button>
          <Button onClick={()=>infoRef.current.opens()} raised outline style={{marginLeft:'10px'}}>
            Информация о приложении
          </Button>
          </Block>
        </Toolbar>
        <Modal ref={deviceInfoRef}/>
        <Info ref={infoRef}/>
      </Page>
    );
};

export default MyPage;

{
  /* <List>
<ListItem onClick={()=> onNextPage({order:'Заказ №123',status:'Новый'})} link title='Заказ №123' after='Новый'/>
<ListItem onClick={()=> onNextPage({order:'Заказ №124',status:'Завершен'})} link title='Заказ №124' after='Завершен'/>
<ListItem link title='Заказ №125' after='Отменен'/>
<ListItem link title='Заказ №126' after='Создан'/>
</List> */
}

{
  /* <Page pageContent={false}> 
<div className="wrapper">
<BlockTitle large>Вход в аккаунт</BlockTitle>
 <Block>
  Укажите номер мобильного телефона и мы пришлем СМС с кодом для входа
 </Block>
 <Input/>
 <List>
  <ListInput placeholder="(XXX) XXX-XX-XX"/>
 </List>
 <Button large fill>Прислать СМС</Button>
 </div>
</Page> */
}
