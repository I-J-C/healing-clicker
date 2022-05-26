

const Upgrade = (props) => {
    const upgrade = props.upgrade;
    return(
        <div className="upgrade bg-blue-500 rounded" onClick={() => {
                if (upgrade.currentCost <= props.bones){
                    const purchase = upgrade.currentCost;
                    props.setBones(old => old - purchase)
                    props.setIdleBones(old => old + upgrade.baseProduction)
                    upgrade.incrementAmount();
                    upgrade.setCurrentCost();
                }
            }}>
            {upgrade.name}
            {/* <div className="upgrade-image">image here</div> */}
            <div className="cost">cost: {upgrade.currentCost} bones</div>
        </div>
    )
}

export default Upgrade;