import React, {useState} from 'react'
import './home.css'
import {initialProducts} from './StateManagement'
import {electroPacks} from './StateManagement'
import smiley from '../../Images/smiley3.png'

function Home() {
    const [product, setProduct] = useState(initialProducts);
    const [electronics, setElectronics] = useState(electroPacks)

    return (
        <div className='home-body'>
        <div className='container-fluid'>
             <div className='products'>
                {product.map((item, index) => {
                    return (
                        <li key={index} className='product-list'>
                            {item.name} ({item.number})
                        </li>
                    )
                })}
                <p>View all category <i className='fas fa-angle-double-right'></i></p>
             </div>
             <div className='electronics-container'>
                 <h3>Electronics <button className='box-button'>12</button></h3>
                 {electronics.map((items) => {
                     return (
                         <div className='electronics'>
                        <div className='image-holder'>
                            <img src={items.imageSrc} alt='product' className='image'/>
                        </div>
                        <div className='prd-details'>
                            <h3>{items.prodtTitle}</h3>
                            <h5>{items.prodtDesc}</h5>
                            <p className='old-price'>UGX {items.prdtPrice}</p>
                            <p>UGX {items.newPrice}</p>
                         </div>
                        <div className='add-button'>
                            <button><i className='fas fa-arrow-alt-circle-down'></i>Add</button>
                         </div>
                            
                        
                        </div>
                     )
                    
                 })}
             </div>
             <div className='last-div'>
                 <h2>Bag <button className='box-button'>0</button></h2>
                 <div className='bag-content'>
                    <img src={smiley} alt='smiley himself' style={{ height: 150, width: 150}}/>
                    <h3>It's Empty Here</h3>
                    <p>start shopping to add items <br /> to the bag</p>
                 </div>
             </div>

        </div>
        <div className='mid-layer'>
                 <div className='icons'>
                     <i className='fas fa-truck'></i>
                     <h4>Fast Delivery</h4>
                 </div>
                 <div className='icons'>
                     <i className='fab fa-cc-discover'></i>
                     <h4>Safe and Protected Payment</h4>
                 </div>
                 <div className='icons'>
                     <i className='fas fa-handshake'></i>
                     <h4>Happy Customer</h4>
                 </div>
        </div>
        <div className='buttom'>
            <p style={{color: 'grey'}}>STORE DETAILS</p>

           <div style={{textAlign: 'center', lineHeight: 0.5}}>
           <h3>Target</h3>
            <p>Cham Towwers, Plot 12 Nkrumah Rd, Kampala, Uganda</p>
           </div>
            <button className='chat-button'>
                <i className='fab fa-whatsapp'></i>{'  '}
                chat with us
            </button>
        </div>
        </div>
    )
}

export default Home

