import styled from "styled-components";

interface Props{
    photo: string;
    description: string;
    price: string;
    id:string;
}

export default function Card(props:Props){
    return(
        <Style>
            <div className="img_box">
                <img src={props.photo}/>
            </div>

            <span className="p16-bold descrip">{props.description}</span>

            <div className="price">
                <span className="p14-bold real">R$</span>
                <span className="titulo26-bold price">{props.price}</span>
            </div>

            <button className="p14-bold"><img src="/images/cart.png" alt="" /> Adicionar</button>
        </Style>
    )
}

const Style = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 240px;
    margin-bottom: 66px;

    .img_box{
        width: 150px;
        height: 150px;
        margin-bottom: 16px;

        img{
            object-fit: contain;
        }
    }

    span{
        color: #313030;
        text-align: center;
        max-width: 200px;
    }

    .descrip, .price{
        margin-bottom: 13px;
    }

    .real{
        color: #524E4E;
    }

    .price{
        color: var(--primary-color);
    }

    button{
        background-color: var(--primary-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: 120px;
        height: 50px;
        border: none;
        color: #fff;

        img{
            margin-right: 11px;
        }

        &:hover{
            background-color: var(--hover-color);
        }
    }
`