const batteryLevel = document.querySelector(".battery-level")
const chargingIcon = document.querySelector(".charging-icon")
const chargingBar = document.querySelector(".charging-bar")
const otherInfo = document.querySelector(".other-info")
const dischargingTime = document.querySelector(".discharging-time")

navigator.getBattery().then((battery) => {
    function updateAllBatteryInfo() {
        updateChargingInfo();

        updateLevelInfo();

        updateDischargingInfo();
    }

    updateAllBatteryInfo()

    battery.addEventListener("chargingchange", function () {
        updateAllBatteryInfo()
    })

    battery.addEventListener("levelchange", function () {
        updateAllBatteryInfo()
    })

    battery.addEventListener("dischargingtimechange", function () {
        updateAllBatteryInfo()
    })

    function updateLevelInfo() {
        chargingBar.style.width = `${parseInt(battery.level * 100)}%`
        batteryLevel.textContent = `${parseInt(battery.level * 100)}%`
        chargingBar.style.animationIterationCount = "infinite"
        chargingBar.style.background = "green"

    }

    function updateChargingInfo() {
        //battery.charging ? ((chargingBar.style.animationIterationCount = "infinite"), (chargingIcon.style.display = "inline-flex"), (otherInfo.style.display = "none")) : ((chargingIcon.style.display = "none"), (otherInfo.style.display = "inline-flex"), (chargingBar.style.animationIterationCount = "initial")) /* Here we have used Ternary Operator */ 
    }

    function updateDischargingInfo() {
        const dischargeTime = parseInt(battery.dischargingTime / 60) ? true : false;

        dischargeTime ? ((dischargingTime.textContent = `${parseInt(battery.dischargeTime / 60)}) minutes`), (otherInfo.style.display = "flex")) : (otherInfo.style.display = "none") // Here we have used Ternary Operator
    }

})