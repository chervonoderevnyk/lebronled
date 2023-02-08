import {useContext} from "react";
import {MyContext} from "../../index";
import {Button} from "../../components/Button/Button";

const AboutPage = () => {

    const context = useContext(MyContext);
    context.gender = 'male'
    Object.assign(context,{status:true})
    delete context.name

    return (

        <Button click={()=>console.log('Click from custom Button!!!')} style={{backgroundColor:'black'}}>click</Button>
    //
    //      <div style={
    //         {margin: '0 auto', width: '100%', textAlign: 'center', fontSize: 32, fontWeight: 600}}>
    //
    //         <hr/>
    //
    //         Повернутись назад неможливо
    // </div>

    );
};

export {AboutPage};