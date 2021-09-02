import React from 'react'
import "./css/BuyerProfile.css"
import DataTable from './ProfileTable'

const BuyerProfile = () => {
    return (
        <div>
            <div className="ProfileInfo">
                <div>
                    <div className="PrInfoDiv">
                        <div>
                            image
                        </div> 
                    </div>
                </div>
                <div>
                    <p className="PrInfo">Name</p>
                </div>
            </div>
            <DataTable />
        </div>
    )
}

export default BuyerProfile;
