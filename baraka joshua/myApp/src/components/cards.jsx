import React from "react"
import { useState } from "react"
const Cards = () =>{
    const categoreis = ['All categories','Shoes','Mobiles','Laptops','Miles','Woman - Gown','Watch','Book','Headphones','Bed']
    const products = [
        {name:'Iphone 13 pro',description:'Storage:125 GB color:Green',Price:1000,image:'/image/iphone.jpg' ,stock:10},
        {name:'Indian style',description:'all size and in RGB color',Price:40,image:'/image/indian.jpg' ,stock:10},
        {name:'jumper Sweaters',description:'all size and in RGB color',Price:5,image:'/image/jumper.jpg' ,stock:10},
        {name:'full complete wear',description:'all size and in RGB color',Price:500,image:'/image/complete.jpg' ,stock:10},
        {name:'new version cars',description:'You can command it',Price:1000,image:'/image/cap.jpg' ,stock:10},
        {name:'Rolex shine Jewels',description:' Gold,Diamond and silver',Price:1000,image:'/image/chain.jpg' ,stock:10},
         ]

         const addtocart = () =>{
            const allprice = document.getElementById('allprice');
             allprice.innerHTML = parseInt(allprice.innerHTML) + parseInt(document.getElementById('price').innerHTML)
            let [mydta,usemydata] = allprice(0)
            let newdata = 0 + allprice;
            
            alert(allprice + 'data adde to cart')
         }
    return(
        <>
        <section className="flex px-5" id="all-cards">
            <ul className="flex space-x-2 w-full" >
                <li>    
                    <div className="w-40  rounded-md text-green-500" id="">
                        {categoreis.map((buttons , index) => (
                            <p key={index}><button className="px-2 text-left w-full hover:bg-green-600 hover:text-white">{buttons}</button></p>
                        ))}
                    </div>
                    <button onClick={addtocart} className="border px-10 py-2 bg-orange-300 text-white rounded mt-9">My cart</button>
                </li>
                <li className="card-list overflow-x-scroll w-full" id="mycollection">
                    <div className="w-full flex space-x-3">
                       {products.map((product, index) =>(
                        <div key={index} className="border-[1px] border-solid border-gray-500 w-72 p-5 hover:shadow-2xl rounded-md">
                            <img src={product.image} alt={product.name} className="w-full h-40"/>
                            <h3 className="font-semibold" >Name:<span className="text-green-600"> {product.name}</span></h3>
                            <p>{product.description}</p>
                            <p className="font-semibold" id="allprice">Price: ${product.Price}</p>
                            <br /><br />
                           <div className="flex"> <button className="bg-green-600 text-white px-3 py-1 rounded-full" onClick={addtocart}>Add to cart</button></div>
                        </div>
                       ))}

                    </div>
                </li>
            </ul>
        </section>
        </>
    )
}
export default Cards