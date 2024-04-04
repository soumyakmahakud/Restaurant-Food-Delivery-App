
const RestaurantSignup = ()=> {
    return (
        <>
            <h3>Signup</h3>
            <div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter name" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter email id" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="Enter password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="password" placeholder="confirm password" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="restaurant name" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter city" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="text" placeholder="Enter full address" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <input type="number" placeholder="Enter contact number" className="input-field" />
                </div>
                <div className="input-wrapper">
                    <button className="button">Signup</button>
                </div>
            </div>
        </>
    )
}
export default RestaurantSignup;