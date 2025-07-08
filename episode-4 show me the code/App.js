import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 * -Logo
 * -Navigation bar(Home, About)
 * 
 * Body
 * - Search 
 * - RestaurantContainer
 * -RestaurantCard
 * -Image
 * -Name of the Restaruent
 * -Image
 * -Star Rating
 * -Cuisine, Delivery time
 * -
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 * 
 */

const Header = () => {
        return(
          <div className="header">
             <div className="logo-container">
        <img className="logo" src="https://i.pinimg.com/originals/39/96/57/39965743eb30634afdc5906133e19740.png" alt="Logo" />
        </div>
        <div className="nav-items">
                
                
                <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                </ul>
                </div>
        </div>
        );
};
const styleCard = {
        backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) =>{
        const {resName,cuisine} = props;
        console.log(props);
        return ( 
                <div className="res-card" style={
                        styleCard}>
                                <img 
                                className="res-logo"
                                alt="res-logo" src = "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/>
                          <h3>{props.resName}</h3>

                        <h4>{resName}</h4>
                        <h4>{cuisine} </h4>

                        
                </div>

        );
};

const Body = () =>{
        return(
                <div className="body">
                        <div className = "search" >Search</div>
                                <div className = "res-container">
                                        
                                        

                                        <RestaurantCard
                                        resName="Meghana Foods"
                                        cuisine="Biryani, North Indian, Asian"/>
                                        <RestaurantCard 
                                        resName="KFC"
                                        cuisine="Burger,Fast Food"/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>
                                        <RestaurantCard/>

                                </div>
                                </div>

                        
        );

};
const AppLayout = () =>{
        return(
                <div className="app">
                        <Header />
                        <Body/>
                        </div>
        );
};        //Header
                //Body
                //Footer
        

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


        