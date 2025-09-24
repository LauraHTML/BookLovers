export  default function Card({title = "titulo padrao", text="texto padrao", image="https://i.pinimg.com/474x/dc/a1dca10d38a87a9553f9411e779a8eccc2.jpg", link="https://www.amazon.com.br/Immortal-Dinner-Evening-Laughter-Literary/dp/1493076531/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1YK68H3DC5MZN&dib=eyJ2IjoiMSJ9.dem4Jg3L7J--Sq_qLwcA8hx_ODC7hFG7vip1pWBrI4ZtcjQ9PLFgLjg6p7Kq_115xCfgLgniq7oBo7QOv1QzYg.oDRojO81l6rMNdnQ0fYPfBh-nQdiI_B2mPmAXbfPaHY&dib_tag=se&keywords=the+immortal+dinner&qid=1741347187&sprefix=the+immortal+dinner%2Caps%2C236&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9", titulo_link="Ir para"}){
    return(
    <>
    <div className="card bg-blue-500">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}
        </p>
        <a href={link} className="btn">{titulo_link}</a>
        </div>
    </div>
    
        
</>)
}