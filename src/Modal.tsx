import { Block, List, ListItem, Sheet } from 'framework7-react';
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Device, DeviceInfo } from '@capacitor/device';

type Props = {

}

const Modal = forwardRef((props: Props,ref) => {

    const [opened,setOpened] = useState(false)
    //@ts-ignore
    const [info,setInfo] = useState<DeviceInfo>({})

    useImperativeHandle(ref,()=> ({
        open:() => open(),
        close: () => close()
    }))

    const open = async () => {
        setOpened(true);
        const info = await Device.getInfo()
        setInfo(info)
    }

    const close = () => {
      setOpened(false)
    }

    return (
        <Sheet swipeHandler={'.swipe-handler'} swipeToClose opened={opened} onSheetClose={close} backdrop>
         <div className='swipe-handler'></div>
         <Block style={{maxHeight:'60vh', height:'auto'}}>
         <List dividers>
            <ListItem title={'Name'} after={'-'}/>
            <ListItem title={'Model'} after={info.model}/>
            <ListItem title={'Platform'} after={info.platform}/>
            <ListItem title={'Version'} after={info.osVersion}/>
         </List>
         </Block>
        </Sheet>
    );
});

export default Modal;