import React from 'react';

const Header = () => {
    return <>
        <div style={{
            display: "flex",

            justifyContent: "space-between"
        }}>


            <div style={{
                display: "flex"
            }}>
                <div>Employer</div>
                <div>Seeker</div>
            </div>


            <div>
                Logo
            </div>


            <div style={{
                display: "flex"
            }}>
                <div>Sign In</div>
                <div>Seeking Jobs </div>
            </div>
        </div>
    </>
}


export default Header;